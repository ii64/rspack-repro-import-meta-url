(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_MockIssuesModel_js_map"],{

/***/ "./testing/MockIssuesModel.js.map":
/*!****************************************!*\
  !*** ./testing/MockIssuesModel.js.map ***!
  \****************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"MockIssuesModel.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/MockIssuesModel.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,0BAA0B,CAAC;AAInD,MAAM,OAAO,eAAgB,SAAQ,MAAM,CAAC,aAAa,CAAC,aAAyC;IACzF,UAAU,CAAsC;IAExD,YAAY,MAA2C;QACrD,KAAK,EAAE,CAAC;QACR,IAAI,CAAC,UAAU,GAAG,MAAM,CAAC;IAC3B,CAAC;IACD,MAAM;QACJ,OAAO,IAAI,CAAC,UAAU,CAAC;IACzB,CAAC;IACD,MAAM;QACJ,OAAO,EAAC,EAAE,EAAE,GAAG,EAAE,CAAC,SAAS,EAAC,CAAC;IAC/B,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../core/common/common.js';\\nimport type * as SDK from '../core/sdk/sdk.js';\\nimport type * as IssuesManager from '../models/issues_manager/issues_manager.js';\\n\\nexport class MockIssuesModel extends Common.ObjectWrapper.ObjectWrapper<SDK.IssuesModel.EventTypes> {\\n  private mockIssues: Iterable<IssuesManager.Issue.Issue>;\\n\\n  constructor(issues: Iterable<IssuesManager.Issue.Issue>) {\\n    super();\\n    this.mockIssues = issues;\\n  }\\n  issues() {\\n    return this.mockIssues;\\n  }\\n  target() {\\n    return {id: () => 'fake-id'};\\n  }\\n}\\n\"]}");

/***/ })

}]);