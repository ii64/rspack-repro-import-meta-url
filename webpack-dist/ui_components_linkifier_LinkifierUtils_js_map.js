(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_linkifier_LinkifierUtils_js_map"],{

/***/ "./ui/components/linkifier/LinkifierUtils.js.map":
/*!*******************************************************!*\
  !*** ./ui/components/linkifier/LinkifierUtils.js.map ***!
  \*******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"LinkifierUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/linkifier/LinkifierUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,sCAAsC,CAAC;AAGjE,MAAM,UAAU,QAAQ,CAAC,GAAoC,EAAE,UAAmB;IAChF,IAAI,GAAG,EAAE,CAAC;QACR,MAAM,WAAW,GAAG,QAAQ,CAAC,aAAa,CAAC,iBAAiB,CAAC,GAAG,CAAC,CAAC;QAClE,IAAI,IAAI,GAAG,GAAG,WAAW,EAAE,CAAC;QAC5B,IAAI,OAAO,UAAU,KAAK,WAAW,EAAE,CAAC;YACtC,IAAI,IAAI,IAAI,UAAU,GAAG,CAAC,EAAE,CAAC;QAC/B,CAAC;QACD,OAAO,IAAI,CAAC;IACd,CAAC;IAED,MAAM,IAAI,KAAK,CAAC,0FAA0F,CAAC,CAAC;AAC9G,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Bindings from '../../../models/bindings/bindings.js';\\nimport type * as Platform from '../../../core/platform/platform.js';\\n\\nexport function linkText(url: Platform.DevToolsPath.UrlString, lineNumber?: number): string {\\n  if (url) {\\n    const displayName = Bindings.ResourceUtils.displayNameForURL(url);\\n    let text = `${displayName}`;\\n    if (typeof lineNumber !== 'undefined') {\\n      text += `:${lineNumber + 1}`;\\n    }\\n    return text;\\n  }\\n\\n  throw new Error('New linkifier component error: don\\\\'t know how to generate link text for given arguments');\\n}\\n\"]}");

/***/ })

}]);