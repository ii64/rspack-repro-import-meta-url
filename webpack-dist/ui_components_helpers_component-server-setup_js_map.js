(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_helpers_component-server-setup_js_map"],{

/***/ "./ui/components/helpers/component-server-setup.js.map":
/*!*************************************************************!*\
  !*** ./ui/components/helpers/component-server-setup.js.map ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"component-server-setup.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/helpers/component-server-setup.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,YAAY,MAAM,6CAA6C,CAAC;AAE5E;;;GAGG;AACH,MAAM,CAAC,KAAK,UAAU,KAAK;IACzB,MAAM,OAAO,GAAG;QACd,GAAG;YACD,OAAO,SAAS,CAAC;QACnB,CAAC;QACD,iBAAiB,EAAE,GAAG,EAAE,GAAE,CAAC;KACkB,CAAC;IAChD,YAAY,CAAC,YAAY,CAAC,QAAQ,CAAC,EAAC,QAAQ,EAAE,IAAI,EAAE,OAAO,EAAC,CAAC,CAAC;AAChE,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../../core/common/common.js';\\nimport * as ThemeSupport from '../../legacy/theme_support/theme_support.js';\\n\\n/**\\n * Houses any setup required to run the component docs server. Currently this is\\n * only populating the runtime CSS cache but may be extended in the future.\\n */\\nexport async function setup(): Promise<void> {\\n  const setting = {\\n    get() {\\n      return 'default';\\n    },\\n    addChangeListener: () => {},\\n  } as unknown as Common.Settings.Setting<string>;\\n  ThemeSupport.ThemeSupport.instance({forceNew: true, setting});\\n}\\n\"]}");

/***/ })

}]);