(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_lantern_metrics_LargestContentfulPaint_test_js_map"],{

/***/ "./models/trace/lantern/metrics/LargestContentfulPaint.test.js.map":
/*!*************************************************************************!*\
  !*** ./models/trace/lantern/metrics/LargestContentfulPaint.test.js.map ***!
  \*************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"LargestContentfulPaint.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/models/trace/lantern/metrics/LargestContentfulPaint.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,OAAO,MAAM,eAAe,CAAC;AACzC,OAAO,EAAC,6BAA6B,EAAE,SAAS,EAAC,MAAM,uBAAuB,CAAC;AAE/E,MAAM,EAAC,oBAAoB,EAAE,sBAAsB,EAAC,GAAG,OAAO,CAAC,OAAO,CAAC;AAEvE,QAAQ,CAAC,sBAAsB,EAAE,GAAG,EAAE;IACpC,IAAI,KAA0B,CAAC;IAC/B,MAAM,CAAC,KAAK;QACV,KAAK,GAAG,MAAM,SAAS,CAAC,IAAI,EAAE,4BAA4B,CAAC,CAAC;IAC9D,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,gCAAgC,EAAE,KAAK,IAAI,EAAE;QAC9C,MAAM,IAAI,GAAG,MAAM,6BAA6B,CAAC,EAAC,KAAK,EAAC,CAAC,CAAC;QAC1D,MAAM,MAAM,GAAG,sBAAsB,CAAC,OAAO,CAAC,IAAI,EAAE;YAClD,SAAS,EAAE,oBAAoB,CAAC,OAAO,CAAC,IAAI,CAAC;SAC9C,CAAC,CAAC;QAEH,MAAM,CAAC,eAAe,CAClB;YACE,MAAM,EAAE,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,MAAM,CAAC;YACjC,UAAU,EAAE,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,kBAAkB,CAAC,QAAQ,CAAC;YAC1D,WAAW,EAAE,IAAI,CAAC,KAAK,CAAC,MAAM,CAAC,mBAAmB,CAAC,QAAQ,CAAC;YAC5D,qBAAqB,EAAE,MAAM,CAAC,kBAAkB,CAAC,WAAW,CAAC,IAAI;YACjE,sBAAsB,EAAE,MAAM,CAAC,mBAAmB,CAAC,WAAW,CAAC,IAAI;SACpE,EACD;YACE,MAAM,EAAE,IAAI;YACZ,UAAU,EAAE,IAAI;YAChB,WAAW,EAAE,IAAI;YACjB,qBAAqB,EAAE,CAAC;YACxB,sBAAsB,EAAE,CAAC;SAC1B,CAAC,CAAC;QACP,MAAM,CAAC,EAAE,CAAC,MAAM,CAAC,eAAe,EAAE,sCAAsC,CAAC,CAAC;QAC1E,MAAM,CAAC,EAAE,CAAC,MAAM,CAAC,gBAAgB,EAAE,uCAAuC,CAAC,CAAC;IAC9E,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Lantern from '../lantern.js';\\nimport {getComputationDataFromFixture, loadTrace} from '../testing/testing.js';\\n\\nconst {FirstContentfulPaint, LargestContentfulPaint} = Lantern.Metrics;\\n\\ndescribe('Metrics: Lantern LCP', () => {\\n  let trace: Lantern.Types.Trace;\\n  before(async function() {\\n    trace = await loadTrace(this, 'lantern/paul/trace.json.gz');\\n  });\\n\\n  it('should compute predicted value', async () => {\\n    const data = await getComputationDataFromFixture({trace});\\n    const result = LargestContentfulPaint.compute(data, {\\n      fcpResult: FirstContentfulPaint.compute(data),\\n    });\\n\\n    assert.deepStrictEqual(\\n        {\\n          timing: Math.round(result.timing),\\n          optimistic: Math.round(result.optimisticEstimate.timeInMs),\\n          pessimistic: Math.round(result.pessimisticEstimate.timeInMs),\\n          optimisticNodeTimings: result.optimisticEstimate.nodeTimings.size,\\n          pessimisticNodeTimings: result.pessimisticEstimate.nodeTimings.size,\\n        },\\n        {\\n          timing: 1536,\\n          optimistic: 1457,\\n          pessimistic: 1616,\\n          optimisticNodeTimings: 8,\\n          pessimisticNodeTimings: 9,\\n        });\\n    assert.ok(result.optimisticGraph, 'should have created optimistic graph');\\n    assert.ok(result.pessimisticGraph, 'should have created pessimistic graph');\\n  });\\n});\\n\"]}");

/***/ })

}]);