(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_StylePropertyUtils_js_map"],{

/***/ "./panels/elements/StylePropertyUtils.js.map":
/*!***************************************************!*\
  !*** ./panels/elements/StylePropertyUtils.js.map ***!
  \***************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"StylePropertyUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/elements/StylePropertyUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,UAAU,qCAAqC,CAAC,WAAwC;IAC5F,MAAM,EAAC,IAAI,EAAE,KAAK,EAAC,GAAG,WAAW,CAAC;IAClC,MAAM,mBAAmB,GACrB,IAAI,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,IAAI,IAAI,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,OAAO,CAAC,YAAY,EAAE,CAAC,IAAI,EAAE,KAAK,EAAE,EAAE,CAAC,KAAK,CAAC,WAAW,EAAE,CAAC,CAAC;IAC3G,MAAM,eAAe,GAAG,IAAI,KAAK,CAAC,UAAU,CAAC,IAAI,EAAE,MAAM,CAAC,GAAG,CAAC;IAC9D,OAAO,GAAG,mBAAmB,KAAK,eAAe,EAAE,CAAC;AACtD,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as SDK from '../../core/sdk/sdk.js';\\n\\nexport function getCssDeclarationAsJavascriptProperty(declaration: SDK.CSSProperty.CSSProperty): string {\\n  const {name, value} = declaration;\\n  const declarationNameAsJs =\\n      name.startsWith('--') ? `'${name}'` : name.replace(/-([a-z])/gi, (_str, group) => group.toUpperCase());\\n  const declarationAsJs = `'${value.replaceAll('\\\\'', '\\\\\\\\\\\\'')}'`;\\n  return `${declarationNameAsJs}: ${declarationAsJs}`;\\n}\\n\"]}");

/***/ })

}]);