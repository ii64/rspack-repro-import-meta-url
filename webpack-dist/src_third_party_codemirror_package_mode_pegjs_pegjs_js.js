(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_mode_pegjs_pegjs_js"],{

/***/ "./src/third_party/codemirror/package/mode/pegjs/pegjs.js":
/*!****************************************************************!*\
  !*** ./src/third_party/codemirror/package/mode/pegjs/pegjs.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"), __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../javascript/javascript'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("pegjs", function (config) {
  var jsMode = CodeMirror.getMode(config, "javascript");

  function identifier(stream) {
    return stream.match(/^[a-zA-Z_][a-zA-Z0-9_]*/);
  }

  return {
    startState: function () {
      return {
        inString: false,
        stringType: null,
        inComment: false,
        inCharacterClass: false,
        braced: 0,
        lhs: true,
        localState: null
      };
    },
    token: function (stream, state) {
      if (stream)

      //check for state changes
      if (!state.inString && !state.inComment && ((stream.peek() == '"') || (stream.peek() == "'"))) {
        state.stringType = stream.peek();
        stream.next(); // Skip quote
        state.inString = true; // Update state
      }
      if (!state.inString && !state.inComment && stream.match('/*')) {
        state.inComment = true;
      }

      //return state
      if (state.inString) {
        while (state.inString && !stream.eol()) {
          if (stream.peek() === state.stringType) {
            stream.next(); // Skip quote
            state.inString = false; // Clear flag
          } else if (stream.peek() === '\\') {
            stream.next();
            stream.next();
          } else {
            stream.match(/^.[^\\\"\']*/);
          }
        }
        return state.lhs ? "property string" : "string"; // Token style
      } else if (state.inComment) {
        while (state.inComment && !stream.eol()) {
          if (stream.match('*/')) {
            state.inComment = false; // Clear flag
          } else {
            stream.match(/^.[^\*]*/);
          }
        }
        return "comment";
      } else if (state.inCharacterClass) {
          while (state.inCharacterClass && !stream.eol()) {
            if (!(stream.match(/^[^\]\\]+/) || stream.match(/^\\./))) {
              state.inCharacterClass = false;
            }
          }
      } else if (stream.peek() === '[') {
        stream.next();
        state.inCharacterClass = true;
        return 'bracket';
      } else if (stream.match('//')) {
        stream.skipToEnd();
        return "comment";
      } else if (state.braced || stream.peek() === '{') {
        if (state.localState === null) {
          state.localState = CodeMirror.startState(jsMode);
        }
        var token = jsMode.token(stream, state.localState);
        var text = stream.current();
        if (!token) {
          for (var i = 0; i < text.length; i++) {
            if (text[i] === '{') {
              state.braced++;
            } else if (text[i] === '}') {
              state.braced--;
            }
          };
        }
        return token;
      } else if (identifier(stream)) {
        if (stream.peek() === ':') {
          return 'variable';
        }
        return 'variable-2';
      } else if (['[', ']', '(', ')'].indexOf(stream.peek()) != -1) {
        stream.next();
        return 'bracket';
      } else if (!stream.eatSpace()) {
        stream.next();
      }
      return null;
    }
  };
}, "javascript");

});


/***/ })

}]);