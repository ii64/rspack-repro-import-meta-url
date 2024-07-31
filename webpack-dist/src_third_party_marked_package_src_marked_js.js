"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_marked_package_src_marked_js"],{

/***/ "./src/third_party/marked/package/src/marked.js":
/*!******************************************************!*\
  !*** ./src/third_party/marked/package/src/marked.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lexer: () => (/* reexport safe */ _Lexer_js__WEBPACK_IMPORTED_MODULE_2__.Lexer),
/* harmony export */   Parser: () => (/* reexport safe */ _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser),
/* harmony export */   Renderer: () => (/* reexport safe */ _Renderer_js__WEBPACK_IMPORTED_MODULE_4__.Renderer),
/* harmony export */   Slugger: () => (/* reexport safe */ _Slugger_js__WEBPACK_IMPORTED_MODULE_5__.Slugger),
/* harmony export */   TextRenderer: () => (/* reexport safe */ _TextRenderer_js__WEBPACK_IMPORTED_MODULE_6__.TextRenderer),
/* harmony export */   Tokenizer: () => (/* reexport safe */ _Tokenizer_js__WEBPACK_IMPORTED_MODULE_7__.Tokenizer),
/* harmony export */   defaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_0__.defaults),
/* harmony export */   getDefaults: () => (/* reexport safe */ _defaults_js__WEBPACK_IMPORTED_MODULE_0__.getDefaults),
/* harmony export */   lexer: () => (/* binding */ lexer),
/* harmony export */   marked: () => (/* binding */ marked),
/* harmony export */   options: () => (/* binding */ options),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   parseInline: () => (/* binding */ parseInline),
/* harmony export */   parser: () => (/* binding */ parser),
/* harmony export */   setOptions: () => (/* binding */ setOptions),
/* harmony export */   use: () => (/* binding */ use),
/* harmony export */   walkTokens: () => (/* binding */ walkTokens)
/* harmony export */ });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./src/third_party/marked/package/src/defaults.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/third_party/marked/package/src/helpers.js");
/* harmony import */ var _Lexer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lexer.js */ "./src/third_party/marked/package/src/Lexer.js");
/* harmony import */ var _Parser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Parser.js */ "./src/third_party/marked/package/src/Parser.js");
/* harmony import */ var _Renderer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Renderer.js */ "./src/third_party/marked/package/src/Renderer.js");
/* harmony import */ var _Slugger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Slugger.js */ "./src/third_party/marked/package/src/Slugger.js");
/* harmony import */ var _TextRenderer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextRenderer.js */ "./src/third_party/marked/package/src/TextRenderer.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Tokenizer.js */ "./src/third_party/marked/package/src/Tokenizer.js");









/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.merge)({}, marked.defaults, opt || {});
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.checkSanitizeDeprecation)(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = _Lexer_js__WEBPACK_IMPORTED_MODULE_2__.Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = _Lexer_js__WEBPACK_IMPORTED_MODULE_2__.Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.escape)(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.merge)(marked.defaults, opt);
  (0,_defaults_js__WEBPACK_IMPORTED_MODULE_0__.changeDefaults)(marked.defaults);
  return marked;
};

marked.getDefaults = _defaults_js__WEBPACK_IMPORTED_MODULE_0__.getDefaults;

marked.defaults = _defaults_js__WEBPACK_IMPORTED_MODULE_0__.defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.merge)({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new _Renderer_js__WEBPACK_IMPORTED_MODULE_4__.Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new _Tokenizer_js__WEBPACK_IMPORTED_MODULE_7__.Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.merge)({}, marked.defaults, opt || {});
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.checkSanitizeDeprecation)(opt);

  try {
    const tokens = _Lexer_js__WEBPACK_IMPORTED_MODULE_2__.Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + (0,_helpers_js__WEBPACK_IMPORTED_MODULE_1__.escape)(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser;
marked.parser = _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser.parse;
marked.Renderer = _Renderer_js__WEBPACK_IMPORTED_MODULE_4__.Renderer;
marked.TextRenderer = _TextRenderer_js__WEBPACK_IMPORTED_MODULE_6__.TextRenderer;
marked.Lexer = _Lexer_js__WEBPACK_IMPORTED_MODULE_2__.Lexer;
marked.lexer = _Lexer_js__WEBPACK_IMPORTED_MODULE_2__.Lexer.lex;
marked.Tokenizer = _Tokenizer_js__WEBPACK_IMPORTED_MODULE_7__.Tokenizer;
marked.Slugger = _Slugger_js__WEBPACK_IMPORTED_MODULE_5__.Slugger;
marked.parse = marked;

const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = marked;
const parser = _Parser_js__WEBPACK_IMPORTED_MODULE_3__.Parser.parse;
const lexer = _Lexer_js__WEBPACK_IMPORTED_MODULE_2__.Lexer.lex;









/***/ })

}]);