(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ReportingApiView_test_js_map"],{

/***/ "./panels/application/ReportingApiView.test.js.map":
/*!*********************************************************!*\
  !*** ./panels/application/ReportingApiView.test.js.map ***!
  \*********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ReportingApiView.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/application/ReportingApiView.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,EAAC,YAAY,EAAC,MAAM,qCAAqC,CAAC;AACjE,OAAO,EAAC,0BAA0B,EAAC,MAAM,iCAAiC,CAAC;AAE3E,OAAO,KAAK,WAAW,MAAM,kBAAkB,CAAC;AAChD,OAAO,KAAK,qBAAqB,MAAM,4BAA4B,CAAC;AAEpE,0BAA0B,CAAC,kBAAkB,EAAE,GAAG,EAAE;IAClD,MAAM,QAAQ,GAAG,SAAS,CAAC;IAC3B,MAAM,WAAW,GAAG,CAAC,EAAC,GAAG,EAAE,MAAM,EAAE,SAAS,EAAE,QAAQ,EAAC,CAAC,CAAC;IACzD,MAAM,QAAQ,GAAG,SAAS,CAAC;IAC3B,MAAM,WAAW,GAAG,CAAC,EAAC,GAAG,EAAE,MAAM,EAAE,SAAS,EAAE,QAAQ,EAAC,EAAE,EAAC,GAAG,EAAE,MAAM,EAAE,SAAS,EAAE,QAAQ,EAAC,CAAC,CAAC;IAE7F,EAAE,CAAC,yCAAyC,EAAE,GAAG,EAAE;QACjD,MAAM,SAAS,GAAG,YAAY,CAAC,EAAC,IAAI,EAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,EAAC,CAAC,CAAC;QAC5D,MAAM,WAAW,GAAG,YAAY,CAAC,EAAC,YAAY,EAAE,SAAS,EAAC,CAAC,CAAC;QAC5D,YAAY,CAAC,EAAC,YAAY,EAAE,SAAS,EAAE,OAAO,EAAE,WAAW,EAAC,CAAC,CAAC;QAC9D,MAAM,cAAc,GAAG,WAAW,CAAC,KAAK,CAAC,GAAG,CAAC,cAAc,CAAC,cAAc,CAAC,CAAC;QAC5E,MAAM,CAAC,MAAM,CAAC,cAAc,CAAC,CAAC;QAE9B,MAAM,aAAa,GAAG,IAAI,qBAAqB,CAAC,aAAa,CAAC,aAAa,EAAE,CAAC;QAC9E,IAAI,WAAW,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,aAAa,CAAC,CAAC;QACjE,MAAM,iBAAiB,GAAG,KAAK,CAAC,GAAG,CAAC,aAAa,EAAE,MAAM,EAAE,CAAC,KAAK,CAAC,CAAC,CAAC;QACpE,cAAc,CAAC,wBAAwB,CACnC,GAAG,CAAC,cAAc,CAAC,MAAM,CAAC,qCAAqC,EAAE,EAAC,MAAM,EAAE,QAAQ,EAAE,SAAS,EAAE,WAAW,EAAC,CAAC,CAAC;QACjH,MAAM,CAAC,MAAM,CAAC,iBAAiB,CAAC,GAAG,CAAC,UAAU,CAAC,CAAC;QAChD,KAAK,CAAC,MAAM,CAAC,UAAU,CAAC,iBAAiB,CAAC,GAAG,EAAE,EAAC,SAAS,EAAE,IAAI,GAAG,CAAC,CAAC,CAAC,QAAQ,EAAE,WAAW,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC;QAEhG,cAAc,CAAC,wBAAwB,CACnC,GAAG,CAAC,cAAc,CAAC,MAAM,CAAC,qCAAqC,EAAE,EAAC,MAAM,EAAE,QAAQ,EAAE,SAAS,EAAE,WAAW,EAAC,CAAC,CAAC;QACjH,MAAM,CAAC,MAAM,CAAC,iBAAiB,CAAC,GAAG,CAAC,WAAW,CAAC,CAAC;QACjD,KAAK,CAAC,MAAM,CAAC,UAAU,CACnB,iBAAiB,CAAC,GAAG,EAAE,EAAC,SAAS,EAAE,IAAI,GAAG,CAAC,CAAC,CAAC,QAAQ,EAAE,WAAW,CAAC,EAAE,CAAC,QAAQ,EAAE,WAAW,CAAC,CAAC,CAAC,EAAC,CAAC,CAAC;IACvG,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport {createTarget} from '../../testing/EnvironmentHelpers.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\n\\nimport * as Application from './application.js';\\nimport * as ApplicationComponents from './components/components.js';\\n\\ndescribeWithMockConnection('ReportingApiView', () => {\\n  const ORIGIN_1 = 'origin1';\\n  const ENDPOINTS_1 = [{url: 'url1', groupName: 'group1'}];\\n  const ORIGIN_2 = 'origin2';\\n  const ENDPOINTS_2 = [{url: 'url2', groupName: 'group1'}, {url: 'url3', groupName: 'group2'}];\\n\\n  it('updates endpoints grid when they change', () => {\\n    const tabTarget = createTarget({type: SDK.Target.Type.Tab});\\n    const frameTarget = createTarget({parentTarget: tabTarget});\\n    createTarget({parentTarget: tabTarget, subtype: 'prerender'});\\n    const networkManager = frameTarget.model(SDK.NetworkManager.NetworkManager);\\n    assert.exists(networkManager);\\n\\n    const endpointsGrid = new ApplicationComponents.EndpointsGrid.EndpointsGrid();\\n    new Application.ReportingApiView.ReportingApiView(endpointsGrid);\\n    const endpointsGridData = sinon.spy(endpointsGrid, 'data', ['set']);\\n    networkManager.dispatchEventToListeners(\\n        SDK.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin, {origin: ORIGIN_1, endpoints: ENDPOINTS_1});\\n    assert.isTrue(endpointsGridData.set.calledOnce);\\n    sinon.assert.calledWith(endpointsGridData.set, {endpoints: new Map([[ORIGIN_1, ENDPOINTS_1]])});\\n\\n    networkManager.dispatchEventToListeners(\\n        SDK.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin, {origin: ORIGIN_2, endpoints: ENDPOINTS_2});\\n    assert.isTrue(endpointsGridData.set.calledTwice);\\n    sinon.assert.calledWith(\\n        endpointsGridData.set, {endpoints: new Map([[ORIGIN_1, ENDPOINTS_1], [ORIGIN_2, ENDPOINTS_2]])});\\n  });\\n});\\n\"]}");

/***/ })

}]);