(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_mode_rst_rst_js"],{

/***/ "./src/third_party/codemirror/package/addon/mode/overlay.js":
/*!******************************************************************!*\
  !*** ./src/third_party/codemirror/package/addon/mode/overlay.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// Utility function that allows modes to be combined. The mode given
// as the base argument takes care of most of the normal mode
// functionality, but a second (typically simple) mode is used, which
// can override the style of text. Both modes get to parse all of the
// text, but when both assign a non-null style to a piece of code, the
// overlay wins, unless the combine argument was true and not overridden,
// or state.overlay.combineTokens was true, in which case the styles are
// combined.

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.overlayMode = function(base, overlay, combine) {
  return {
    startState: function() {
      return {
        base: CodeMirror.startState(base),
        overlay: CodeMirror.startState(overlay),
        basePos: 0, baseCur: null,
        overlayPos: 0, overlayCur: null,
        streamSeen: null
      };
    },
    copyState: function(state) {
      return {
        base: CodeMirror.copyState(base, state.base),
        overlay: CodeMirror.copyState(overlay, state.overlay),
        basePos: state.basePos, baseCur: null,
        overlayPos: state.overlayPos, overlayCur: null
      };
    },

    token: function(stream, state) {
      if (stream != state.streamSeen ||
          Math.min(state.basePos, state.overlayPos) < stream.start) {
        state.streamSeen = stream;
        state.basePos = state.overlayPos = stream.start;
      }

      if (stream.start == state.basePos) {
        state.baseCur = base.token(stream, state.base);
        state.basePos = stream.pos;
      }
      if (stream.start == state.overlayPos) {
        stream.pos = stream.start;
        state.overlayCur = overlay.token(stream, state.overlay);
        state.overlayPos = stream.pos;
      }
      stream.pos = Math.min(state.basePos, state.overlayPos);

      // state.overlay.combineTokens always takes precedence over combine,
      // unless set to null
      if (state.overlayCur == null) return state.baseCur;
      else if (state.baseCur != null &&
               state.overlay.combineTokens ||
               combine && state.overlay.combineTokens == null)
        return state.baseCur + " " + state.overlayCur;
      else return state.overlayCur;
    },

    indent: base.indent && function(state, textAfter, line) {
      return base.indent(state.base, textAfter, line);
    },
    electricChars: base.electricChars,

    innerMode: function(state) { return {state: state.base, mode: base}; },

    blankLine: function(state) {
      var baseToken, overlayToken;
      if (base.blankLine) baseToken = base.blankLine(state.base);
      if (overlay.blankLine) overlayToken = overlay.blankLine(state.overlay);

      return overlayToken == null ?
        baseToken :
        (combine && baseToken != null ? baseToken + " " + overlayToken : overlayToken);
    }
  };
};

});


/***/ }),

/***/ "./src/third_party/codemirror/package/mode/rst/rst.js":
/*!************************************************************!*\
  !*** ./src/third_party/codemirror/package/mode/rst/rst.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"), __webpack_require__(/*! ../python/python */ "./src/third_party/codemirror/package/mode/python/python.js"), __webpack_require__(/*! ../stex/stex */ "./src/third_party/codemirror/package/mode/stex/stex.js"), __webpack_require__(/*! ../../addon/mode/overlay */ "./src/third_party/codemirror/package/addon/mode/overlay.js"));
  else {}
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode('rst', function (config, options) {

  var rx_strong = /^\*\*[^\*\s](?:[^\*]*[^\*\s])?\*\*/;
  var rx_emphasis = /^\*[^\*\s](?:[^\*]*[^\*\s])?\*/;
  var rx_literal = /^``[^`\s](?:[^`]*[^`\s])``/;

  var rx_number = /^(?:[\d]+(?:[\.,]\d+)*)/;
  var rx_positive = /^(?:\s\+[\d]+(?:[\.,]\d+)*)/;
  var rx_negative = /^(?:\s\-[\d]+(?:[\.,]\d+)*)/;

  var rx_uri_protocol = "[Hh][Tt][Tt][Pp][Ss]?://";
  var rx_uri_domain = "(?:[\\d\\w.-]+)\\.(?:\\w{2,6})";
  var rx_uri_path = "(?:/[\\d\\w\\#\\%\\&\\-\\.\\,\\/\\:\\=\\?\\~]+)*";
  var rx_uri = new RegExp("^" + rx_uri_protocol + rx_uri_domain + rx_uri_path);

  var overlay = {
    token: function (stream) {

      if (stream.match(rx_strong) && stream.match (/\W+|$/, false))
        return 'strong';
      if (stream.match(rx_emphasis) && stream.match (/\W+|$/, false))
        return 'em';
      if (stream.match(rx_literal) && stream.match (/\W+|$/, false))
        return 'string-2';
      if (stream.match(rx_number))
        return 'number';
      if (stream.match(rx_positive))
        return 'positive';
      if (stream.match(rx_negative))
        return 'negative';
      if (stream.match(rx_uri))
        return 'link';

      while (stream.next() != null) {
        if (stream.match(rx_strong, false)) break;
        if (stream.match(rx_emphasis, false)) break;
        if (stream.match(rx_literal, false)) break;
        if (stream.match(rx_number, false)) break;
        if (stream.match(rx_positive, false)) break;
        if (stream.match(rx_negative, false)) break;
        if (stream.match(rx_uri, false)) break;
      }

      return null;
    }
  };

  var mode = CodeMirror.getMode(
    config, options.backdrop || 'rst-base'
  );

  return CodeMirror.overlayMode(mode, overlay, true); // combine
}, 'python', 'stex');

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

CodeMirror.defineMode('rst-base', function (config) {

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  function format(string) {
    var args = Array.prototype.slice.call(arguments, 1);
    return string.replace(/{(\d+)}/g, function (match, n) {
      return typeof args[n] != 'undefined' ? args[n] : match;
    });
  }

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  var mode_python = CodeMirror.getMode(config, 'python');
  var mode_stex = CodeMirror.getMode(config, 'stex');

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  var SEPA = "\\s+";
  var TAIL = "(?:\\s*|\\W|$)",
  rx_TAIL = new RegExp(format('^{0}', TAIL));

  var NAME =
    "(?:[^\\W\\d_](?:[\\w!\"#$%&'()\\*\\+,\\-\\.\/:;<=>\\?]*[^\\W_])?)",
  rx_NAME = new RegExp(format('^{0}', NAME));
  var NAME_WWS =
    "(?:[^\\W\\d_](?:[\\w\\s!\"#$%&'()\\*\\+,\\-\\.\/:;<=>\\?]*[^\\W_])?)";
  var REF_NAME = format('(?:{0}|`{1}`)', NAME, NAME_WWS);

  var TEXT1 = "(?:[^\\s\\|](?:[^\\|]*[^\\s\\|])?)";
  var TEXT2 = "(?:[^\\`]+)",
  rx_TEXT2 = new RegExp(format('^{0}', TEXT2));

  var rx_section = new RegExp(
    "^([!'#$%&\"()*+,-./:;<=>?@\\[\\\\\\]^_`{|}~])\\1{3,}\\s*$");
  var rx_explicit = new RegExp(
    format('^\\.\\.{0}', SEPA));
  var rx_link = new RegExp(
    format('^_{0}:{1}|^__:{1}', REF_NAME, TAIL));
  var rx_directive = new RegExp(
    format('^{0}::{1}', REF_NAME, TAIL));
  var rx_substitution = new RegExp(
    format('^\\|{0}\\|{1}{2}::{3}', TEXT1, SEPA, REF_NAME, TAIL));
  var rx_footnote = new RegExp(
    format('^\\[(?:\\d+|#{0}?|\\*)]{1}', REF_NAME, TAIL));
  var rx_citation = new RegExp(
    format('^\\[{0}\\]{1}', REF_NAME, TAIL));

  var rx_substitution_ref = new RegExp(
    format('^\\|{0}\\|', TEXT1));
  var rx_footnote_ref = new RegExp(
    format('^\\[(?:\\d+|#{0}?|\\*)]_', REF_NAME));
  var rx_citation_ref = new RegExp(
    format('^\\[{0}\\]_', REF_NAME));
  var rx_link_ref1 = new RegExp(
    format('^{0}__?', REF_NAME));
  var rx_link_ref2 = new RegExp(
    format('^`{0}`_', TEXT2));

  var rx_role_pre = new RegExp(
    format('^:{0}:`{1}`{2}', NAME, TEXT2, TAIL));
  var rx_role_suf = new RegExp(
    format('^`{1}`:{0}:{2}', NAME, TEXT2, TAIL));
  var rx_role = new RegExp(
    format('^:{0}:{1}', NAME, TAIL));

  var rx_directive_name = new RegExp(format('^{0}', REF_NAME));
  var rx_directive_tail = new RegExp(format('^::{0}', TAIL));
  var rx_substitution_text = new RegExp(format('^\\|{0}\\|', TEXT1));
  var rx_substitution_sepa = new RegExp(format('^{0}', SEPA));
  var rx_substitution_name = new RegExp(format('^{0}', REF_NAME));
  var rx_substitution_tail = new RegExp(format('^::{0}', TAIL));
  var rx_link_head = new RegExp("^_");
  var rx_link_name = new RegExp(format('^{0}|_', REF_NAME));
  var rx_link_tail = new RegExp(format('^:{0}', TAIL));

  var rx_verbatim = new RegExp('^::\\s*$');
  var rx_examples = new RegExp('^\\s+(?:>>>|In \\[\\d+\\]:)\\s');

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  function to_normal(stream, state) {
    var token = null;

    if (stream.sol() && stream.match(rx_examples, false)) {
      change(state, to_mode, {
        mode: mode_python, local: CodeMirror.startState(mode_python)
      });
    } else if (stream.sol() && stream.match(rx_explicit)) {
      change(state, to_explicit);
      token = 'meta';
    } else if (stream.sol() && stream.match(rx_section)) {
      change(state, to_normal);
      token = 'header';
    } else if (phase(state) == rx_role_pre ||
               stream.match(rx_role_pre, false)) {

      switch (stage(state)) {
      case 0:
        change(state, to_normal, context(rx_role_pre, 1));
        stream.match(/^:/);
        token = 'meta';
        break;
      case 1:
        change(state, to_normal, context(rx_role_pre, 2));
        stream.match(rx_NAME);
        token = 'keyword';

        if (stream.current().match(/^(?:math|latex)/)) {
          state.tmp_stex = true;
        }
        break;
      case 2:
        change(state, to_normal, context(rx_role_pre, 3));
        stream.match(/^:`/);
        token = 'meta';
        break;
      case 3:
        if (state.tmp_stex) {
          state.tmp_stex = undefined; state.tmp = {
            mode: mode_stex, local: CodeMirror.startState(mode_stex)
          };
        }

        if (state.tmp) {
          if (stream.peek() == '`') {
            change(state, to_normal, context(rx_role_pre, 4));
            state.tmp = undefined;
            break;
          }

          token = state.tmp.mode.token(stream, state.tmp.local);
          break;
        }

        change(state, to_normal, context(rx_role_pre, 4));
        stream.match(rx_TEXT2);
        token = 'string';
        break;
      case 4:
        change(state, to_normal, context(rx_role_pre, 5));
        stream.match(/^`/);
        token = 'meta';
        break;
      case 5:
        change(state, to_normal, context(rx_role_pre, 6));
        stream.match(rx_TAIL);
        break;
      default:
        change(state, to_normal);
      }
    } else if (phase(state) == rx_role_suf ||
               stream.match(rx_role_suf, false)) {

      switch (stage(state)) {
      case 0:
        change(state, to_normal, context(rx_role_suf, 1));
        stream.match(/^`/);
        token = 'meta';
        break;
      case 1:
        change(state, to_normal, context(rx_role_suf, 2));
        stream.match(rx_TEXT2);
        token = 'string';
        break;
      case 2:
        change(state, to_normal, context(rx_role_suf, 3));
        stream.match(/^`:/);
        token = 'meta';
        break;
      case 3:
        change(state, to_normal, context(rx_role_suf, 4));
        stream.match(rx_NAME);
        token = 'keyword';
        break;
      case 4:
        change(state, to_normal, context(rx_role_suf, 5));
        stream.match(/^:/);
        token = 'meta';
        break;
      case 5:
        change(state, to_normal, context(rx_role_suf, 6));
        stream.match(rx_TAIL);
        break;
      default:
        change(state, to_normal);
      }
    } else if (phase(state) == rx_role || stream.match(rx_role, false)) {

      switch (stage(state)) {
      case 0:
        change(state, to_normal, context(rx_role, 1));
        stream.match(/^:/);
        token = 'meta';
        break;
      case 1:
        change(state, to_normal, context(rx_role, 2));
        stream.match(rx_NAME);
        token = 'keyword';
        break;
      case 2:
        change(state, to_normal, context(rx_role, 3));
        stream.match(/^:/);
        token = 'meta';
        break;
      case 3:
        change(state, to_normal, context(rx_role, 4));
        stream.match(rx_TAIL);
        break;
      default:
        change(state, to_normal);
      }
    } else if (phase(state) == rx_substitution_ref ||
               stream.match(rx_substitution_ref, false)) {

      switch (stage(state)) {
      case 0:
        change(state, to_normal, context(rx_substitution_ref, 1));
        stream.match(rx_substitution_text);
        token = 'variable-2';
        break;
      case 1:
        change(state, to_normal, context(rx_substitution_ref, 2));
        if (stream.match(/^_?_?/)) token = 'link';
        break;
      default:
        change(state, to_normal);
      }
    } else if (stream.match(rx_footnote_ref)) {
      change(state, to_normal);
      token = 'quote';
    } else if (stream.match(rx_citation_ref)) {
      change(state, to_normal);
      token = 'quote';
    } else if (stream.match(rx_link_ref1)) {
      change(state, to_normal);
      if (!stream.peek() || stream.peek().match(/^\W$/)) {
        token = 'link';
      }
    } else if (phase(state) == rx_link_ref2 ||
               stream.match(rx_link_ref2, false)) {

      switch (stage(state)) {
      case 0:
        if (!stream.peek() || stream.peek().match(/^\W$/)) {
          change(state, to_normal, context(rx_link_ref2, 1));
        } else {
          stream.match(rx_link_ref2);
        }
        break;
      case 1:
        change(state, to_normal, context(rx_link_ref2, 2));
        stream.match(/^`/);
        token = 'link';
        break;
      case 2:
        change(state, to_normal, context(rx_link_ref2, 3));
        stream.match(rx_TEXT2);
        break;
      case 3:
        change(state, to_normal, context(rx_link_ref2, 4));
        stream.match(/^`_/);
        token = 'link';
        break;
      default:
        change(state, to_normal);
      }
    } else if (stream.match(rx_verbatim)) {
      change(state, to_verbatim);
    }

    else {
      if (stream.next()) change(state, to_normal);
    }

    return token;
  }

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  function to_explicit(stream, state) {
    var token = null;

    if (phase(state) == rx_substitution ||
        stream.match(rx_substitution, false)) {

      switch (stage(state)) {
      case 0:
        change(state, to_explicit, context(rx_substitution, 1));
        stream.match(rx_substitution_text);
        token = 'variable-2';
        break;
      case 1:
        change(state, to_explicit, context(rx_substitution, 2));
        stream.match(rx_substitution_sepa);
        break;
      case 2:
        change(state, to_explicit, context(rx_substitution, 3));
        stream.match(rx_substitution_name);
        token = 'keyword';
        break;
      case 3:
        change(state, to_explicit, context(rx_substitution, 4));
        stream.match(rx_substitution_tail);
        token = 'meta';
        break;
      default:
        change(state, to_normal);
      }
    } else if (phase(state) == rx_directive ||
               stream.match(rx_directive, false)) {

      switch (stage(state)) {
      case 0:
        change(state, to_explicit, context(rx_directive, 1));
        stream.match(rx_directive_name);
        token = 'keyword';

        if (stream.current().match(/^(?:math|latex)/))
          state.tmp_stex = true;
        else if (stream.current().match(/^python/))
          state.tmp_py = true;
        break;
      case 1:
        change(state, to_explicit, context(rx_directive, 2));
        stream.match(rx_directive_tail);
        token = 'meta';

        if (stream.match(/^latex\s*$/) || state.tmp_stex) {
          state.tmp_stex = undefined; change(state, to_mode, {
            mode: mode_stex, local: CodeMirror.startState(mode_stex)
          });
        }
        break;
      case 2:
        change(state, to_explicit, context(rx_directive, 3));
        if (stream.match(/^python\s*$/) || state.tmp_py) {
          state.tmp_py = undefined; change(state, to_mode, {
            mode: mode_python, local: CodeMirror.startState(mode_python)
          });
        }
        break;
      default:
        change(state, to_normal);
      }
    } else if (phase(state) == rx_link || stream.match(rx_link, false)) {

      switch (stage(state)) {
      case 0:
        change(state, to_explicit, context(rx_link, 1));
        stream.match(rx_link_head);
        stream.match(rx_link_name);
        token = 'link';
        break;
      case 1:
        change(state, to_explicit, context(rx_link, 2));
        stream.match(rx_link_tail);
        token = 'meta';
        break;
      default:
        change(state, to_normal);
      }
    } else if (stream.match(rx_footnote)) {
      change(state, to_normal);
      token = 'quote';
    } else if (stream.match(rx_citation)) {
      change(state, to_normal);
      token = 'quote';
    }

    else {
      stream.eatSpace();
      if (stream.eol()) {
        change(state, to_normal);
      } else {
        stream.skipToEnd();
        change(state, to_comment);
        token = 'comment';
      }
    }

    return token;
  }

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  function to_comment(stream, state) {
    return as_block(stream, state, 'comment');
  }

  function to_verbatim(stream, state) {
    return as_block(stream, state, 'meta');
  }

  function as_block(stream, state, token) {
    if (stream.eol() || stream.eatSpace()) {
      stream.skipToEnd();
      return token;
    } else {
      change(state, to_normal);
      return null;
    }
  }

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  function to_mode(stream, state) {

    if (state.ctx.mode && state.ctx.local) {

      if (stream.sol()) {
        if (!stream.eatSpace()) change(state, to_normal);
        return null;
      }

      return state.ctx.mode.token(stream, state.ctx.local);
    }

    change(state, to_normal);
    return null;
  }

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  function context(phase, stage, mode, local) {
    return {phase: phase, stage: stage, mode: mode, local: local};
  }

  function change(state, tok, ctx) {
    state.tok = tok;
    state.ctx = ctx || {};
  }

  function stage(state) {
    return state.ctx.stage || 0;
  }

  function phase(state) {
    return state.ctx.phase;
  }

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////

  return {
    startState: function () {
      return {tok: to_normal, ctx: context(undefined, 0)};
    },

    copyState: function (state) {
      var ctx = state.ctx, tmp = state.tmp;
      if (ctx.local)
        ctx = {mode: ctx.mode, local: CodeMirror.copyState(ctx.mode, ctx.local)};
      if (tmp)
        tmp = {mode: tmp.mode, local: CodeMirror.copyState(tmp.mode, tmp.local)};
      return {tok: state.tok, ctx: ctx, tmp: tmp};
    },

    innerMode: function (state) {
      return state.tmp      ? {state: state.tmp.local, mode: state.tmp.mode}
      : state.ctx.mode ? {state: state.ctx.local, mode: state.ctx.mode}
      : null;
    },

    token: function (stream, state) {
      return state.tok(stream, state);
    }
  };
}, 'python', 'stex');

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

CodeMirror.defineMIME('text/x-rst', 'rst');

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

});


/***/ }),

/***/ "./src/third_party/codemirror/package/mode/stex/stex.js":
/*!**************************************************************!*\
  !*** ./src/third_party/codemirror/package/mode/stex/stex.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

/*
 * Author: Constantin Jucovschi (c.jucovschi@jacobs-university.de)
 * Licence: MIT
 */

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
  "use strict";

  CodeMirror.defineMode("stex", function(_config, parserConfig) {
    "use strict";

    function pushCommand(state, command) {
      state.cmdState.push(command);
    }

    function peekCommand(state) {
      if (state.cmdState.length > 0) {
        return state.cmdState[state.cmdState.length - 1];
      } else {
        return null;
      }
    }

    function popCommand(state) {
      var plug = state.cmdState.pop();
      if (plug) {
        plug.closeBracket();
      }
    }

    // returns the non-default plugin closest to the end of the list
    function getMostPowerful(state) {
      var context = state.cmdState;
      for (var i = context.length - 1; i >= 0; i--) {
        var plug = context[i];
        if (plug.name == "DEFAULT") {
          continue;
        }
        return plug;
      }
      return { styleIdentifier: function() { return null; } };
    }

    function addPluginPattern(pluginName, cmdStyle, styles) {
      return function () {
        this.name = pluginName;
        this.bracketNo = 0;
        this.style = cmdStyle;
        this.styles = styles;
        this.argument = null;   // \begin and \end have arguments that follow. These are stored in the plugin

        this.styleIdentifier = function() {
          return this.styles[this.bracketNo - 1] || null;
        };
        this.openBracket = function() {
          this.bracketNo++;
          return "bracket";
        };
        this.closeBracket = function() {};
      };
    }

    var plugins = {};

    plugins["importmodule"] = addPluginPattern("importmodule", "tag", ["string", "builtin"]);
    plugins["documentclass"] = addPluginPattern("documentclass", "tag", ["", "atom"]);
    plugins["usepackage"] = addPluginPattern("usepackage", "tag", ["atom"]);
    plugins["begin"] = addPluginPattern("begin", "tag", ["atom"]);
    plugins["end"] = addPluginPattern("end", "tag", ["atom"]);

    plugins["label"    ] = addPluginPattern("label"    , "tag", ["atom"]);
    plugins["ref"      ] = addPluginPattern("ref"      , "tag", ["atom"]);
    plugins["eqref"    ] = addPluginPattern("eqref"    , "tag", ["atom"]);
    plugins["cite"     ] = addPluginPattern("cite"     , "tag", ["atom"]);
    plugins["bibitem"  ] = addPluginPattern("bibitem"  , "tag", ["atom"]);
    plugins["Bibitem"  ] = addPluginPattern("Bibitem"  , "tag", ["atom"]);
    plugins["RBibitem" ] = addPluginPattern("RBibitem" , "tag", ["atom"]);

    plugins["DEFAULT"] = function () {
      this.name = "DEFAULT";
      this.style = "tag";

      this.styleIdentifier = this.openBracket = this.closeBracket = function() {};
    };

    function setState(state, f) {
      state.f = f;
    }

    // called when in a normal (no environment) context
    function normal(source, state) {
      var plug;
      // Do we look like '\command' ?  If so, attempt to apply the plugin 'command'
      if (source.match(/^\\[a-zA-Z@]+/)) {
        var cmdName = source.current().slice(1);
        plug = plugins.hasOwnProperty(cmdName) ? plugins[cmdName] : plugins["DEFAULT"];
        plug = new plug();
        pushCommand(state, plug);
        setState(state, beginParams);
        return plug.style;
      }

      // escape characters
      if (source.match(/^\\[$&%#{}_]/)) {
        return "tag";
      }

      // white space control characters
      if (source.match(/^\\[,;!\/\\]/)) {
        return "tag";
      }

      // find if we're starting various math modes
      if (source.match("\\[")) {
        setState(state, function(source, state){ return inMathMode(source, state, "\\]"); });
        return "keyword";
      }
      if (source.match("\\(")) {
        setState(state, function(source, state){ return inMathMode(source, state, "\\)"); });
        return "keyword";
      }
      if (source.match("$$")) {
        setState(state, function(source, state){ return inMathMode(source, state, "$$"); });
        return "keyword";
      }
      if (source.match("$")) {
        setState(state, function(source, state){ return inMathMode(source, state, "$"); });
        return "keyword";
      }

      var ch = source.next();
      if (ch == "%") {
        source.skipToEnd();
        return "comment";
      } else if (ch == '}' || ch == ']') {
        plug = peekCommand(state);
        if (plug) {
          plug.closeBracket(ch);
          setState(state, beginParams);
        } else {
          return "error";
        }
        return "bracket";
      } else if (ch == '{' || ch == '[') {
        plug = plugins["DEFAULT"];
        plug = new plug();
        pushCommand(state, plug);
        return "bracket";
      } else if (/\d/.test(ch)) {
        source.eatWhile(/[\w.%]/);
        return "atom";
      } else {
        source.eatWhile(/[\w\-_]/);
        plug = getMostPowerful(state);
        if (plug.name == 'begin') {
          plug.argument = source.current();
        }
        return plug.styleIdentifier();
      }
    }

    function inMathMode(source, state, endModeSeq) {
      if (source.eatSpace()) {
        return null;
      }
      if (endModeSeq && source.match(endModeSeq)) {
        setState(state, normal);
        return "keyword";
      }
      if (source.match(/^\\[a-zA-Z@]+/)) {
        return "tag";
      }
      if (source.match(/^[a-zA-Z]+/)) {
        return "variable-2";
      }
      // escape characters
      if (source.match(/^\\[$&%#{}_]/)) {
        return "tag";
      }
      // white space control characters
      if (source.match(/^\\[,;!\/]/)) {
        return "tag";
      }
      // special math-mode characters
      if (source.match(/^[\^_&]/)) {
        return "tag";
      }
      // non-special characters
      if (source.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) {
        return null;
      }
      if (source.match(/^(\d+\.\d*|\d*\.\d+|\d+)/)) {
        return "number";
      }
      var ch = source.next();
      if (ch == "{" || ch == "}" || ch == "[" || ch == "]" || ch == "(" || ch == ")") {
        return "bracket";
      }

      if (ch == "%") {
        source.skipToEnd();
        return "comment";
      }
      return "error";
    }

    function beginParams(source, state) {
      var ch = source.peek(), lastPlug;
      if (ch == '{' || ch == '[') {
        lastPlug = peekCommand(state);
        lastPlug.openBracket(ch);
        source.eat(ch);
        setState(state, normal);
        return "bracket";
      }
      if (/[ \t\r]/.test(ch)) {
        source.eat(ch);
        return null;
      }
      setState(state, normal);
      popCommand(state);

      return normal(source, state);
    }

    return {
      startState: function() {
        var f = parserConfig.inMathMode ? function(source, state){ return inMathMode(source, state); } : normal;
        return {
          cmdState: [],
          f: f
        };
      },
      copyState: function(s) {
        return {
          cmdState: s.cmdState.slice(),
          f: s.f
        };
      },
      token: function(stream, state) {
        return state.f(stream, state);
      },
      blankLine: function(state) {
        state.f = normal;
        state.cmdState.length = 0;
      },
      lineComment: "%"
    };
  });

  CodeMirror.defineMIME("text/x-stex", "stex");
  CodeMirror.defineMIME("text/x-latex", "stex");

});


/***/ })

}]);