(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_mode_protobuf_protobuf_js"],{

/***/ "./src/third_party/codemirror/package/mode/protobuf/protobuf.js":
/*!**********************************************************************!*\
  !*** ./src/third_party/codemirror/package/mode/protobuf/protobuf.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (true) // CommonJS
    mod(__webpack_require__(/*! ../../lib/codemirror */ "./src/third_party/codemirror/package/lib/codemirror.js"));
  else {}
})(function(CodeMirror) {
  "use strict";

  function wordRegexp(words) {
    return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
  };

  var keywordArray = [
    "package", "message", "import", "syntax",
    "required", "optional", "repeated", "reserved", "default", "extensions", "packed",
    "bool", "bytes", "double", "enum", "float", "string",
    "int32", "int64", "uint32", "uint64", "sint32", "sint64", "fixed32", "fixed64", "sfixed32", "sfixed64",
    "option", "service", "rpc", "returns"
  ];
  var keywords = wordRegexp(keywordArray);

  CodeMirror.registerHelper("hintWords", "protobuf", keywordArray);

  var identifiers = new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*");

  function tokenBase(stream) {
    // whitespaces
    if (stream.eatSpace()) return null;

    // Handle one line Comments
    if (stream.match("//")) {
      stream.skipToEnd();
      return "comment";
    }

    // Handle Number Literals
    if (stream.match(/^[0-9\.+-]/, false)) {
      if (stream.match(/^[+-]?0x[0-9a-fA-F]+/))
        return "number";
      if (stream.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?/))
        return "number";
      if (stream.match(/^[+-]?\d+([EeDd][+-]?\d+)?/))
        return "number";
    }

    // Handle Strings
    if (stream.match(/^"([^"]|(""))*"/)) { return "string"; }
    if (stream.match(/^'([^']|(''))*'/)) { return "string"; }

    // Handle words
    if (stream.match(keywords)) { return "keyword"; }
    if (stream.match(identifiers)) { return "variable"; } ;

    // Handle non-detected items
    stream.next();
    return null;
  };

  CodeMirror.defineMode("protobuf", function() {
    return {
      token: tokenBase,
      fold: "brace"
    };
  });

  CodeMirror.defineMIME("text/x-protobuf", "protobuf");
});


/***/ })

}]);