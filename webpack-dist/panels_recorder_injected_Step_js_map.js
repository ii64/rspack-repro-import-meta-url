(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_Step_js_map"],{

/***/ "./panels/recorder/injected/Step.js.map":
/*!**********************************************!*\
  !*** ./panels/recorder/injected/Step.js.map ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Step.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/injected/Step.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type Schema} from '../../../third_party/puppeteer-replay/puppeteer-replay.js';\\n\\nexport type ClickStep = Schema.ClickStep;\\nexport type KeyDownStep = Schema.KeyDownStep;\\nexport type KeyUpStep = Schema.KeyUpStep;\\nexport type DoubleClickStep = Schema.DoubleClickStep;\\nexport type ChangeStep = Schema.ChangeStep;\\n\\nexport interface BeforeUnloadStep {\\n  type: 'beforeUnload';\\n}\\n\\nexport type Step =|KeyDownStep|KeyUpStep|ClickStep|DoubleClickStep|BeforeUnloadStep|ChangeStep;\\n\"]}");

/***/ })

}]);