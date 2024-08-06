(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_performance_monitor_PerformanceMonitor_test_js_map"],{

/***/ "./panels/performance_monitor/PerformanceMonitor.test.js.map":
/*!*******************************************************************!*\
  !*** ./panels/performance_monitor/PerformanceMonitor.test.js.map ***!
  \*******************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"PerformanceMonitor.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/performance_monitor/PerformanceMonitor.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,EAAC,YAAY,EAAC,MAAM,qCAAqC,CAAC;AACjE,OAAO,EAAC,UAAU,EAAC,MAAM,iCAAiC,CAAC;AAC3D,OAAO,EAAC,0BAA0B,EAAC,MAAM,iCAAiC,CAAC;AAE3E,OAAO,KAAK,kBAAkB,MAAM,0BAA0B,CAAC;AAE/D,0BAA0B,CAAC,oBAAoB,EAAE,GAAG,EAAE;IACpD,IAAI,MAAyB,CAAC;IAC9B,IAAI,kBAAgF,CAAC;IAErF,UAAU,CAAC,GAAG,EAAE;QACd,MAAM,SAAS,GAAG,YAAY,CAAC,EAAC,IAAI,EAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,EAAC,CAAC,CAAC;QAC5D,YAAY,CAAC,EAAC,YAAY,EAAE,SAAS,EAAE,OAAO,EAAE,WAAW,EAAC,CAAC,CAAC;QAC9D,MAAM,GAAG,YAAY,CAAC,EAAC,YAAY,EAAE,SAAS,EAAC,CAAC,CAAC;IACnD,CAAC,CAAC,CAAC;IACH,SAAS,CAAC,GAAG,EAAE;QACb,kBAAkB,CAAC,MAAM,EAAE,CAAC;IAC9B,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,iBAAiB,EAAE,KAAK,IAAI,EAAE;QAC/B,MAAM,UAAU,GAAG,KAAK,CAAC,IAAI,CAAC,MAAM,CAAC,gBAAgB,EAAE,EAAE,mBAAmB,CAAC,CAAC;QAC9E,kBAAkB,GAAG,IAAI,kBAAkB,CAAC,kBAAkB,CAAC,sBAAsB,CAAC,CAAC,CAAC,CAAC;QACzF,kBAAkB,CAAC,UAAU,EAAE,CAAC;QAChC,kBAAkB,CAAC,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,CAAC;QACvC,MAAM,CAAC,OAAO,CACV,CAAC,GAAG,kBAAkB,CAAC,cAAc,CAAC,gBAAgB,CAAC,0BAA0B,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;QAClH,MAAM,UAAU,CAAC,UAAU,EAAE,EAAC,MAAM,EAAE,GAAG,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,EAAC,OAAO,EAAE,CAAC,EAAC,IAAI,EAAE,aAAa,EAAE,KAAK,EAAE,EAAE,EAAC,CAAC,EAAC,CAAC,EAAC,CAAC,CAAC;QAC7G,MAAM,UAAU,CAAC,UAAU,EAAE,EAAC,MAAM,EAAE,GAAG,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,EAAC,OAAO,EAAE,CAAC,EAAC,IAAI,EAAE,aAAa,EAAE,KAAK,EAAE,EAAE,EAAC,CAAC,EAAC,CAAC,EAAC,CAAC,CAAC;QAC7G,MAAM,CAAC,MAAM,CACT,CAAC,GAAG,kBAAkB,CAAC,cAAc,CAAC,gBAAgB,CAAC,0BAA0B,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,CAAC,CAAC,WAAW,CAAC,CAAC,CAAC;IACpH,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport {createTarget} from '../../testing/EnvironmentHelpers.js';\\nimport {expectCall} from '../../testing/ExpectStubCall.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\n\\nimport * as PerformanceMonitor from './performance_monitor.js';\\n\\ndescribeWithMockConnection('PerformanceMonitor', () => {\\n  let target: SDK.Target.Target;\\n  let performanceMonitor: PerformanceMonitor.PerformanceMonitor.PerformanceMonitorImpl;\\n\\n  beforeEach(() => {\\n    const tabTarget = createTarget({type: SDK.Target.Type.Tab});\\n    createTarget({parentTarget: tabTarget, subtype: 'prerender'});\\n    target = createTarget({parentTarget: tabTarget});\\n  });\\n  afterEach(() => {\\n    performanceMonitor.detach();\\n  });\\n\\n  it('updates metrics', async () => {\\n    const getMetrics = sinon.stub(target.performanceAgent(), 'invoke_getMetrics');\\n    performanceMonitor = new PerformanceMonitor.PerformanceMonitor.PerformanceMonitorImpl(0);\\n    performanceMonitor.markAsRoot();\\n    performanceMonitor.show(document.body);\\n    assert.isFalse(\\n        [...performanceMonitor.contentElement.querySelectorAll('.perfmon-indicator-value')].some(e => e.textContent));\\n    await expectCall(getMetrics, {fakeFn: () => Promise.resolve({metrics: [{name: 'LayoutCount', value: 42}]})});\\n    await expectCall(getMetrics, {fakeFn: () => Promise.resolve({metrics: [{name: 'LayoutCount', value: 84}]})});\\n    assert.isTrue(\\n        [...performanceMonitor.contentElement.querySelectorAll('.perfmon-indicator-value')].some(e => e.textContent));\\n  });\\n});\\n\"]}");

/***/ })

}]);