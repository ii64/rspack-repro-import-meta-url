(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_converters_Converter_js_map"],{

/***/ "./panels/recorder/converters/Converter.js.map":
/*!*****************************************************!*\
  !*** ./panels/recorder/converters/Converter.js.map ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Converter.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/converters/Converter.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Models from '../models/models.js';\\nimport type * as PuppeteerReplay from '../../../third_party/puppeteer-replay/puppeteer-replay.js';\\n\\nexport interface Converter {\\n  stringify(flow: Models.Schema.UserFlow): Promise<[string, PuppeteerReplay.SourceMap|undefined]>;\\n  stringifyStep(step: Models.Schema.Step): Promise<string>;\\n  getFormatName(): string;\\n  getFilename(flow: Models.Schema.UserFlow): string;\\n  getMediaType(): string|undefined;\\n  getId(): string;\\n}\\n\"]}");

/***/ })

}]);