(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_FileManagerHelpers_js_map"],{

/***/ "./testing/FileManagerHelpers.js.map":
/*!*******************************************!*\
  !*** ./testing/FileManagerHelpers.js.map ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"FileManagerHelpers.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/FileManagerHelpers.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,SAAS,MAAM,kCAAkC,CAAC;AAQ9D,MAAM,UAAU,eAAe;IAC7B,MAAM,WAAW,GAAG,SAAS,CAAC,WAAW,CAAC,WAAW,CAAC,QAAQ,EAAwB,CAAC;IACvF,KAAK,CAAC,IAAI,CAAC,WAAW,EAAE,MAAM,CAAC,CAAC,SAAS,CAAC,KAAK,EAAE,IAAI,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,CAAC,CAAC,EAAC,cAAc,EAAE,IAAI,EAAC,CAAC,CAAC,CAAC;IAC5F,KAAK,CAAC,IAAI,CAAC,WAAW,EAAE,QAAQ,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,EAAE;QACjD,WAAW,CAAC,wBAAwB,mEAA6C,IAAI,CAAC,CAAC;IACzF,CAAC,CAAC,CAAC;IACH,KAAK,CAAC,IAAI,CAAC,WAAW,EAAE,OAAO,CAAC,CAAC;IAEjC,OAAO,WAAW,CAAC;AACrB,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Workspace from '../models/workspace/workspace.js';\\n\\ntype StubbedFileManager = Workspace.FileManager.FileManager&{\\n  save: sinon.SinonStub,\\n  append: sinon.SinonStub,\\n  close: sinon.SinonStub,\\n};\\n\\nexport function stubFileManager(): StubbedFileManager {\\n  const fileManager = Workspace.FileManager.FileManager.instance() as StubbedFileManager;\\n  sinon.stub(fileManager, 'save').callsFake(async (file, _2, _3) => ({fileSystemPath: file}));\\n  sinon.stub(fileManager, 'append').callsFake(file => {\\n    fileManager.dispatchEventToListeners(Workspace.FileManager.Events.AppendedToURL, file);\\n  });\\n  sinon.stub(fileManager, 'close');\\n\\n  return fileManager;\\n}\\n\"]}");

/***/ })

}]);