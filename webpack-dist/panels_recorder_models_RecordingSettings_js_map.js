(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_RecordingSettings_js_map"],{

/***/ "./panels/recorder/models/RecordingSettings.js.map":
/*!*********************************************************!*\
  !*** ./panels/recorder/models/RecordingSettings.js.map ***!
  \*********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"RecordingSettings.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/models/RecordingSettings.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {\\n  type SetViewportStep,\\n  type EmulateNetworkConditionsStep,\\n} from './Schema.js';\\n\\nexport interface RecordingSettings {\\n  viewportSettings?: SetViewportStep;\\n  networkConditionsSettings?: EmulateNetworkConditionsStep&{\\n    title?: string,\\n    i18nTitleKey?: string,\\n  };\\n  timeout?: number;\\n}\\n\"]}");

/***/ })

}]);