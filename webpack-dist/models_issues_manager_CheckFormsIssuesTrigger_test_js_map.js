(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_issues_manager_CheckFormsIssuesTrigger_test_js_map"],{

/***/ "./models/issues_manager/CheckFormsIssuesTrigger.test.js.map":
/*!*******************************************************************!*\
  !*** ./models/issues_manager/CheckFormsIssuesTrigger.test.js.map ***!
  \*******************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"CheckFormsIssuesTrigger.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/issues_manager/CheckFormsIssuesTrigger.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,EAAC,YAAY,EAAC,MAAM,qCAAqC,CAAC;AACjE,OAAO,EAAC,0BAA0B,EAAC,MAAM,iCAAiC,CAAC;AAC3E,OAAO,KAAK,aAAa,MAAM,qCAAqC,CAAC;AAErE,0BAA0B,CAAC,yBAAyB,EAAE,GAAG,EAAE;IACzD,EAAE,CAAC,kDAAkD,EAAE,KAAK,IAAI,EAAE;QAChE,MAAM,YAAY,GAAG,YAAY,EAAE,CAAC;QACpC,MAAM,MAAM,GAAG,YAAY,CAAC,EAAC,YAAY,EAAC,CAAC,CAAC;QAC5C,MAAM,iBAAiB,GAAG,MAAM,CAAC,KAAK,CAAC,GAAG,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,CAAC;QAChF,aAAa,CAAC,uBAAuB,CAAC,uBAAuB,CAAC,QAAQ,EAAE,CAAC;QACzE,MAAM,WAAW,GAAG,MAAM,CAAC,WAAW,EAAE,CAAC;QACzC,MAAM,CAAC,MAAM,CAAC,iBAAiB,CAAC,CAAC;QACjC,MAAM,mBAAmB,GAAG,KAAK,CAAC,IAAI,CAAC,WAAW,EAAE,yBAAyB,CAAC,CAAC;QAC/E,iBAAiB,CAAC,wBAAwB,CACtC,GAAG,CAAC,iBAAiB,CAAC,MAAM,CAAC,IAAI,EAAE,EAAC,iBAAiB,EAAE,iBAAiB,EAAE,QAAQ,EAAE,GAAG,EAAC,CAAC,CAAC;QAC9F,MAAM,CAAC,MAAM,CAAC,mBAAmB,CAAC,MAAM,CAAC,CAAC;IAC5C,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport {createTarget} from '../../testing/EnvironmentHelpers.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\nimport * as IssuesManager from '../issues_manager/issues_manager.js';\\n\\ndescribeWithMockConnection('CheckFormsIssuesTrigger', () => {\\n  it('should call `checkFormsIssues` on devtools open.', async () => {\\n    const parentTarget = createTarget();\\n    const target = createTarget({parentTarget});\\n    const resourceTreeModel = target.model(SDK.ResourceTreeModel.ResourceTreeModel);\\n    IssuesManager.CheckFormsIssuesTrigger.CheckFormsIssuesTrigger.instance();\\n    const auditsAgent = target.auditsAgent();\\n    assert.exists(resourceTreeModel);\\n    const spyCheckFormsIssues = sinon.stub(auditsAgent, 'invoke_checkFormsIssues');\\n    resourceTreeModel.dispatchEventToListeners(\\n        SDK.ResourceTreeModel.Events.Load, {resourceTreeModel: resourceTreeModel, loadTime: 123});\\n    assert.isTrue(spyCheckFormsIssues.called);\\n  });\\n});\\n\"]}");

/***/ })

}]);