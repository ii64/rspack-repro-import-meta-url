(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_persistence_PlatformFileSystem_test_js_map"],{

/***/ "./models/persistence/PlatformFileSystem.test.js.map":
/*!***********************************************************!*\
  !*** ./models/persistence/PlatformFileSystem.test.js.map ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"PlatformFileSystem.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/persistence/PlatformFileSystem.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,WAAW,MAAM,+BAA+B,CAAC;AAE7D,QAAQ,CAAC,oBAAoB,EAAE,GAAG,EAAE;IAClC,EAAE,CAAC,kCAAkC,EAAE,GAAG,EAAE;QAC1C,MAAM,kBAAkB,GAAG,IAAI,WAAW,CAAC,kBAAkB,CAAC,kBAAkB,CAC5E,WAA8C,EAAE,WAAW,CAAC,CAAC;QACjE,MAAM,CAAC,WAAW,CAAC,kBAAkB,CAAC,IAAI,EAAE,EAAE,WAAW,EAAE,yCAAyC,CAAC,CAAC;QACtG,MAAM,CAAC,WAAW,CAAC,kBAAkB,CAAC,IAAI,EAAE,EAAE,WAAW,EAAE,yCAAyC,CAAC,CAAC;IACxG,CAAC,CAAC,CAAC;IAEH,iEAAiE;AACnE,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Platform from '../../core/platform/platform.js';\\nimport * as Persistence from '../persistence/persistence.js';\\n\\ndescribe('PlatformFileSystem', () => {\\n  it('can be instantiated successfully', () => {\\n    const platformFileSystem = new Persistence.PlatformFileSystem.PlatformFileSystem(\\n        'Test Path' as Platform.DevToolsPath.UrlString, 'Test Type');\\n    assert.strictEqual(platformFileSystem.path(), 'Test Path', 'path was not set or retrieved correctly');\\n    assert.strictEqual(platformFileSystem.type(), 'Test Type', 'Type was not set or retrieved correctly');\\n  });\\n\\n  // TODO continue writing tests here or use another describe block\\n});\\n\"]}");

/***/ })

}]);