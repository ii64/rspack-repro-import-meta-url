(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_acorn_acorn_js_map"],{

/***/ "./third_party/acorn/acorn.js.map":
/*!****************************************!*\
  !*** ./third_party/acorn/acorn.js.map ***!
  \****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"acorn.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/third_party/acorn/acorn.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,KAAK,MAAM,0BAA0B,CAAC;AAKlD,OAAO,EAAgB,cAAc,EAAE,WAAW,EAAE,SAAS,EAAE,SAAS,EAAE,UAAU,EAAE,IAAI,EAAE,cAAc,EAAE,KAAK,EAAE,QAAQ,EAAE,WAAW,EAAC,MAAM,0BAA0B,CAAC;AAE1K,MAAM,CAAC,MAAM,MAAM,GAAG,KAAK,CAAC,MAAM,CAAC;AACnC,MAAM,CAAC,MAAM,SAAS,GAAG,KAAK,CAAC,MAAM,CAAC,SAAS,CAAC,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC;AACnE,MAAM,CAAC,MAAM,KAAK,GAAG,KAAK,CAAC,MAAM,CAAC,KAAK,CAAC,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright (c) 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as acorn from './package/dist/acorn.mjs';\\n\\nimport type * as ESTree from './estree-legacy.js';\\nexport {ESTree};\\n\\nexport { type Comment, defaultOptions, getLineInfo, isNewLine, lineBreak, lineBreakG, Node, SourceLocation, Token, tokTypes, tokContexts} from './package/dist/acorn.mjs';\\n\\nexport const Parser = acorn.Parser;\\nexport const tokenizer = acorn.Parser.tokenizer.bind(acorn.Parser);\\nexport const parse = acorn.Parser.parse.bind(acorn.Parser);\\n\"]}");

/***/ })

}]);