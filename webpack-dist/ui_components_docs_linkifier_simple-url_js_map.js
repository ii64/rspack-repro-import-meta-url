(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_linkifier_simple-url_js_map"],{

/***/ "./ui/components/docs/linkifier/simple-url.js.map":
/*!********************************************************!*\
  !*** ./ui/components/docs/linkifier/simple-url.js.map ***!
  \********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"simple-url.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/linkifier/simple-url.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAC7D,OAAO,KAAK,SAAS,MAAM,8BAA8B,CAAC;AAG1D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AAEpD,MAAM,IAAI,GAAG,IAAI,SAAS,CAAC,SAAS,CAAC,SAAS,EAAE,CAAC;AAEjD,IAAI,CAAC,IAAI,GAAG;IACV,GAAG,EAAE,aAAgD;IACrD,UAAU,EAAE,EAAE;IACd,YAAY,EAAE,CAAC;CAChB,CAAC;AAEF,MAAM,SAAS,GAAG,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,CAAC;AAEvD,SAAS,EAAE,gBAAgB,CAAC,oBAAoB,EAAE,CAAC,KAAY,EAAE,EAAE;IACjE,MAAM,IAAI,GAAG,IAAI,CAAC,SAAS,CAAE,KAAoC,CAAC,IAAI,EAAE,IAAI,EAAE,CAAC,CAAC,CAAC;IACjF,KAAK,CAAC,oBAAoB,IAAI,EAAE,CAAC,CAAC;AACpC,CAAC,CAAC,CAAC;AACH,SAAS,EAAE,WAAW,CAAC,IAAI,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\nimport * as Linkifier from '../../linkifier/linkifier.js';\\nimport type * as Platform from '../../../../core/platform/platform.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\n\\nconst link = new Linkifier.Linkifier.Linkifier();\\n\\nlink.data = {\\n  url: 'example.com' as Platform.DevToolsPath.UrlString,\\n  lineNumber: 11,\\n  columnNumber: 1,\\n};\\n\\nconst container = document.getElementById('container');\\n\\ncontainer?.addEventListener('linkifieractivated', (event: Event) => {\\n  const data = JSON.stringify((event as unknown as {data: unknown}).data, null, 2);\\n  alert(`Linkifier click: ${data}`);\\n});\\ncontainer?.appendChild(link);\\n\"]}");

/***/ })

}]);