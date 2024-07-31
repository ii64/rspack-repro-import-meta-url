(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_addon_lint_yaml-lint_js"],{

/***/ "./src/third_party/codemirror/package/addon/lint/yaml-lint.js":
/*!********************************************************************!*\
  !*** ./src/third_party/codemirror/package/addon/lint/yaml-lint.js ***!
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

// Depends on js-yaml.js from https://github.com/nodeca/js-yaml

// declare global: jsyaml

CodeMirror.registerHelper("lint", "yaml", function(text) {
  var found = [];
  if (!window.jsyaml) {
    if (window.console) {
      window.console.error("Error: window.jsyaml not defined, CodeMirror YAML linting cannot run.");
    }
    return found;
  }
  try { jsyaml.loadAll(text); }
  catch(e) {
      var loc = e.mark,
          // js-yaml YAMLException doesn't always provide an accurate lineno
          // e.g., when there are multiple yaml docs
          // ---
          // ---
          // foo:bar
          from = loc ? CodeMirror.Pos(loc.line, loc.column) : CodeMirror.Pos(0, 0),
          to = from;
      found.push({ from: from, to: to, message: e.message });
  }
  return found;
});

});


/***/ })

}]);