(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_KeyboardUtilities_js_map"],{

/***/ "./core/platform/KeyboardUtilities.js.map":
/*!************************************************!*\
  !*** ./core/platform/KeyboardUtilities.js.map ***!
  \************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"KeyboardUtilities.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/KeyboardUtilities.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAc7B,MAAM,CAAC,MAAM,SAAS,GAAG,OAAO,CAAC;AACjC,MAAM,CAAC,MAAM,UAAU,GAAG,QAAQ,CAAC;AACnC,MAAM,CAAC,MAAM,OAAO,GAAG,KAAK,CAAC;AAE7B,MAAM,CAAC,MAAM,UAAU,GAAG,IAAI,GAAG,CAAW;;;;;CAK3C,CAAC,CAAC;AAEH,MAAM,UAAU,aAAa,CAAC,GAAW;IACvC,OAAO,UAAU,CAAC,GAAG,CAAC,GAAe,CAAC,CAAC;AACzC,CAAC;AAED,MAAM,UAAU,QAAQ,CAAC,KAAoB;IAC3C,OAAO,KAAK,CAAC,GAAG,KAAK,QAAQ,CAAC;AAChC,CAAC;AAED,MAAM,UAAU,iBAAiB,CAAC,KAAoB;IACpD,OAAO,KAAK,CAAC,GAAG,KAAK,OAAO,IAAI,KAAK,CAAC,GAAG,KAAK,GAAG,CAAC;AACpD,CAAC\",\"sourcesContent\":[\"// Copyright (c) 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport const enum ArrowKey {\\n  UP = 'ArrowUp',\\n  DOWN = 'ArrowDown',\\n  LEFT = 'ArrowLeft',\\n  RIGHT = 'ArrowRight',\\n}\\n\\nexport const enum PageKey {\\n  UP = 'PageUp',\\n  DOWN = 'PageDown',\\n}\\n\\nexport const ENTER_KEY = 'Enter';\\nexport const ESCAPE_KEY = 'Escape';\\nexport const TAB_KEY = 'Tab';\\n\\nexport const ARROW_KEYS = new Set<ArrowKey>([\\n  ArrowKey.UP,\\n  ArrowKey.DOWN,\\n  ArrowKey.LEFT,\\n  ArrowKey.RIGHT,\\n]);\\n\\nexport function keyIsArrowKey(key: string): key is ArrowKey {\\n  return ARROW_KEYS.has(key as ArrowKey);\\n}\\n\\nexport function isEscKey(event: KeyboardEvent): boolean {\\n  return event.key === 'Escape';\\n}\\n\\nexport function isEnterOrSpaceKey(event: KeyboardEvent): boolean {\\n  return event.key === 'Enter' || event.key === ' ';\\n}\\n\"]}");

/***/ })

}]);