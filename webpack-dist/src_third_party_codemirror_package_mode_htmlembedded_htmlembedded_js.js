(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_mode_htmlembedded_htmlembedded_js"],{

/***/ "./src/third_party/codemirror/package/addon/mode/multiplex.js":
/*!********************************************************************!*\
  !*** ./src/third_party/codemirror/package/addon/mode/multiplex.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.multiplexingMode = function(outer /*, others */) {
  // Others should be {open, close, mode [, delimStyle] [, innerStyle] [, parseDelimiters]} objects
  var others = Array.prototype.slice.call(arguments, 1);

  function indexOf(string, pattern, from, returnEnd) {
    if (typeof pattern == "string") {
      var found = string.indexOf(pattern, from);
      return returnEnd && found > -1 ? found + pattern.length : found;
    }
    var m = pattern.exec(from ? string.slice(from) : string);
    return m ? m.index + from + (returnEnd ? m[0].length : 0) : -1;
  }

  return {
    startState: function() {
      return {
        outer: CodeMirror.startState(outer),
        innerActive: null,
        inner: null,
        startingInner: false
      };
    },

    copyState: function(state) {
      return {
        outer: CodeMirror.copyState(outer, state.outer),
        innerActive: state.innerActive,
        inner: state.innerActive && CodeMirror.copyState(state.innerActive.mode, state.inner),
        startingInner: state.startingInner
      };
    },

    token: function(stream, state) {
      if (!state.innerActive) {
        var cutOff = Infinity, oldContent = stream.string;
        for (var i = 0; i < others.length; ++i) {
          var other = others[i];
          var found = indexOf(oldContent, other.open, stream.pos);
          if (found == stream.pos) {
            if (!other.parseDelimiters) stream.match(other.open);
            state.startingInner = !!other.parseDelimiters
            state.innerActive = other;

            // Get the outer indent, making sure to handle CodeMirror.Pass
            var outerIndent = 0;
            if (outer.indent) {
              var possibleOuterIndent = outer.indent(state.outer, "", "");
              if (possibleOuterIndent !== CodeMirror.Pass) outerIndent = possibleOuterIndent;
            }

            state.inner = CodeMirror.startState(other.mode, outerIndent);
            return other.delimStyle && (other.delimStyle + " " + other.delimStyle + "-open");
          } else if (found != -1 && found < cutOff) {
            cutOff = found;
          }
        }
        if (cutOff != Infinity) stream.string = oldContent.slice(0, cutOff);
        var outerToken = outer.token(stream, state.outer);
        if (cutOff != Infinity) stream.string = oldContent;
        return outerToken;
      } else {
        var curInner = state.innerActive, oldContent = stream.string;
        if (!curInner.close && stream.sol()) {
          state.innerActive = state.inner = null;
          return this.token(stream, state);
        }
        var found = curInner.close && !state.startingInner ?
            indexOf(oldContent, curInner.close, stream.pos, curInner.parseDelimiters) : -1;
        if (found == stream.pos && !curInner.parseDelimiters) {
          stream.match(curInner.close);
          state.innerActive = state.inner = null;
          return curInner.delimStyle && (curInner.delimStyle + " " + curInner.delimStyle + "-close");
        }
        if (found > -1) stream.string = oldContent.slice(0, found);
        var innerToken = curInner.mode.token(stream, state.inner);
        if (found > -1) stream.string = oldContent;
        else if (stream.pos > stream.start) state.startingInner = false

        if (found == stream.pos && curInner.parseDelimiters)
          state.innerActive = state.inner = null;

        if (curInner.innerStyle) {
          if (innerToken) innerToken = innerToken + " " + curInner.innerStyle;
          else innerToken = curInner.innerStyle;
        }

        return innerToken;
      }
    },

    indent: function(state, textAfter, line) {
      var mode = state.innerActive ? state.innerActive.mode : outer;
      if (!mode.indent) return CodeMirror.Pass;
      return mode.indent(state.innerActive ? state.inner : state.outer, textAfter, line);
    },

    blankLine: function(state) {
      var mode = state.innerActive ? state.innerActive.mode : outer;
      if (mode.blankLine) {
        mode.blankLine(state.innerActive ? state.inner : state.outer);
      }
      if (!state.innerActive) {
        for (var i = 0; i < others.length; ++i) {
          var other = others[i];
          if (other.open === "\n") {
            state.innerActive = other;
            state.inner = CodeMirror.startState(other.mode, mode.indent ? mode.indent(state.outer, "", "") : 0);
          }
        }
      } else if (state.innerActive.close === "\n") {
        state.innerActive = state.inner = null;
      }
    },

    electricChars: outer.electricChars,

    innerMode: function(state) {
      return state.inner ? {state: state.inner, mode: state.innerActive.mode} : {state: state.outer, mode: outer};
    }
  };
};

});


/***/ }),

/***/ "./src/third_party/codemirror/package/mode/htmlembedded/htmlembedded.js":
/*!******************************************************************************!*\
  !*** ./src/third_party/codemirror/package/mode/htmlembedded/htmlembedded.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"), __webpack_require__(/*! ../htmlmixed/htmlmixed */ "./src/third_party/codemirror/package/mode/htmlmixed/htmlmixed.js"),
        __webpack_require__(/*! ../../addon/mode/multiplex */ "./src/third_party/codemirror/package/addon/mode/multiplex.js"));
  else {}
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineMode("htmlembedded", function(config, parserConfig) {
    var closeComment = parserConfig.closeComment || "--%>"
    return CodeMirror.multiplexingMode(CodeMirror.getMode(config, "htmlmixed"), {
      open: parserConfig.openComment || "<%--",
      close: closeComment,
      delimStyle: "comment",
      mode: {token: function(stream) {
        stream.skipTo(closeComment) || stream.skipToEnd()
        return "comment"
      }}
    }, {
      open: parserConfig.open || parserConfig.scriptStartRegex || "<%",
      close: parserConfig.close || parserConfig.scriptEndRegex || "%>",
      mode: CodeMirror.getMode(config, parserConfig.scriptingModeSpec)
    });
  }, "htmlmixed");

  CodeMirror.defineMIME("application/x-ejs", {name: "htmlembedded", scriptingModeSpec:"javascript"});
  CodeMirror.defineMIME("application/x-aspx", {name: "htmlembedded", scriptingModeSpec:"text/x-csharp"});
  CodeMirror.defineMIME("application/x-jsp", {name: "htmlembedded", scriptingModeSpec:"text/x-java"});
  CodeMirror.defineMIME("application/x-erb", {name: "htmlembedded", scriptingModeSpec:"ruby"});
});


/***/ }),

/***/ "./src/third_party/codemirror/package/mode/htmlmixed/htmlmixed.js":
/*!************************************************************************!*\
  !*** ./src/third_party/codemirror/package/mode/htmlmixed/htmlmixed.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"), __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../xml/xml'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../javascript/javascript'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../css/css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
  else {}
})(function(CodeMirror) {
  "use strict";

  var defaultTags = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
      ["type", /./, "text/plain"],
      [null, null, "javascript"]
    ],
    style:  [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"]
    ]
  };

  function maybeBackup(stream, pat, style) {
    var cur = stream.current(), close = cur.search(pat);
    if (close > -1) {
      stream.backUp(cur.length - close);
    } else if (cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }

  var attrRegexpCache = {};
  function getAttrRegexp(attr) {
    var regexp = attrRegexpCache[attr];
    if (regexp) return regexp;
    return attrRegexpCache[attr] = new RegExp("\\s+" + attr + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");
  }

  function getAttrValue(text, attr) {
    var match = text.match(getAttrRegexp(attr))
    return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : ""
  }

  function getTagRegexp(tagName, anchored) {
    return new RegExp((anchored ? "^" : "") + "<\/\s*" + tagName + "\s*>", "i");
  }

  function addTags(from, to) {
    for (var tag in from) {
      var dest = to[tag] || (to[tag] = []);
      var source = from[tag];
      for (var i = source.length - 1; i >= 0; i--)
        dest.unshift(source[i])
    }
  }

  function findMatchingMode(tagInfo, tagText) {
    for (var i = 0; i < tagInfo.length; i++) {
      var spec = tagInfo[i];
      if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
    }
  }

  CodeMirror.defineMode("htmlmixed", function (config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, {
      name: "xml",
      htmlMode: true,
      multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
      multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag,
      allowMissingTagName: parserConfig.allowMissingTagName,
    });

    var tags = {};
    var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
    addTags(defaultTags, tags);
    if (configTags) addTags(configTags, tags);
    if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
      tags.script.unshift(["type", configScript[i].matches, configScript[i].mode])

    function html(stream, state) {
      var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName
      if (tag && !/[<>\s\/]/.test(stream.current()) &&
          (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) &&
          tags.hasOwnProperty(tagName)) {
        state.inTag = tagName + " "
      } else if (state.inTag && tag && />$/.test(stream.current())) {
        var inTag = /^([\S]+) (.*)/.exec(state.inTag)
        state.inTag = null
        var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2])
        var mode = CodeMirror.getMode(config, modeSpec)
        var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
        state.token = function (stream, state) {
          if (stream.match(endTagA, false)) {
            state.token = html;
            state.localState = state.localMode = null;
            return null;
          }
          return maybeBackup(stream, endTag, state.localMode.token(stream, state.localState));
        };
        state.localMode = mode;
        state.localState = CodeMirror.startState(mode, htmlMode.indent(state.htmlState, "", ""));
      } else if (state.inTag) {
        state.inTag += stream.current()
        if (stream.eol()) state.inTag += " "
      }
      return style;
    };

    return {
      startState: function () {
        var state = CodeMirror.startState(htmlMode);
        return {token: html, inTag: null, localMode: null, localState: null, htmlState: state};
      },

      copyState: function (state) {
        var local;
        if (state.localState) {
          local = CodeMirror.copyState(state.localMode, state.localState);
        }
        return {token: state.token, inTag: state.inTag,
                localMode: state.localMode, localState: local,
                htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
      },

      token: function (stream, state) {
        return state.token(stream, state);
      },

      indent: function (state, textAfter, line) {
        if (!state.localMode || /^\s*<\//.test(textAfter))
          return htmlMode.indent(state.htmlState, textAfter, line);
        else if (state.localMode.indent)
          return state.localMode.indent(state.localState, textAfter, line);
        else
          return CodeMirror.Pass;
      },

      innerMode: function (state) {
        return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
      }
    };
  }, "xml", "javascript", "css");

  CodeMirror.defineMIME("text/html", "htmlmixed");
});


/***/ })

}]);