(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_device_mode_emulation_frame_device_mode_emulation_frame_js_map"],{

/***/ "./entrypoints/device_mode_emulation_frame/device_mode_emulation_frame.js.map":
/*!************************************************************************************!*\
  !*** ./entrypoints/device_mode_emulation_frame/device_mode_emulation_frame.js.map ***!
  \************************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"device_mode_emulation_frame.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/entrypoints/device_mode_emulation_frame/device_mode_emulation_frame.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,2CAA2C,CAAC;AACnD,OAAO,wBAAwB,CAAC;AAEhC,IAAI,MAAM,CAAC,MAAM,EAAE,CAAC;IAClB,oEAAoE;IACpE,MAAM,GAAG,GAAG,MAAM,CAAC,MAAM,CAAC,SAAS,CAAC,WAAW,CAAC,QAAQ,EAAE,CAAC;IAC3D,GAAG,CAAC,8BAA8B,CAAC,QAAQ,CAAC,CAAC;AAC/C,CAAC\",\"sourcesContent\":[\"// Copyright 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport '../../core/dom_extension/dom_extension.js';\\nimport '../../Images/Images.js';\\n\\nif (window.opener) {\\n  // @ts-ignore TypeScript doesn't know about `Emulation` on `Window`.\\n  const app = window.opener.Emulation.AdvancedApp.instance();\\n  app.deviceModeEmulationFrameLoaded(document);\\n}\\n\"]}");

/***/ })

}]);