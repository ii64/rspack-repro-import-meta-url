(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_FreshRecording_test_js_map"],{

/***/ "./panels/timeline/FreshRecording.test.js.map":
/*!****************************************************!*\
  !*** ./panels/timeline/FreshRecording.test.js.map ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"FreshRecording.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/timeline/FreshRecording.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,WAAW,EAAC,MAAM,8BAA8B,CAAC;AAEzD,OAAO,KAAK,QAAQ,MAAM,eAAe,CAAC;AAE1C,QAAQ,CAAC,uBAAuB,EAAE,GAAG,EAAE;IACrC,EAAE,CAAC,qDAAqD,EAAE,KAAK;QAC7D,MAAM,QAAQ,GAAG,QAAQ,CAAC,cAAc,CAAC,OAAO,CAAC,QAAQ,CAAC,EAAC,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;QAC5E,MAAM,EAAC,SAAS,EAAC,GAAG,MAAM,WAAW,CAAC,WAAW,CAAC,IAAI,EAAE,iBAAiB,CAAC,CAAC;QAC3E,QAAQ,CAAC,sBAAsB,CAAC,SAAS,CAAC,CAAC;QAC3C,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,gBAAgB,CAAC,SAAS,CAAC,CAAC,CAAC;IACtD,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,mDAAmD,EAAE,KAAK;QAC3D,MAAM,QAAQ,GAAG,QAAQ,CAAC,cAAc,CAAC,OAAO,CAAC,QAAQ,CAAC,EAAC,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;QAC5E,MAAM,EAAC,SAAS,EAAC,GAAG,MAAM,WAAW,CAAC,WAAW,CAAC,IAAI,EAAE,iBAAiB,CAAC,CAAC;QAC3E,MAAM,CAAC,OAAO,CAAC,QAAQ,CAAC,gBAAgB,CAAC,SAAS,CAAC,CAAC,CAAC;IACvD,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {TraceLoader} from '../../testing/TraceLoader.js';\\n\\nimport * as Timeline from './timeline.js';\\n\\ndescribe('FreshRecordingTracker', () => {\\n  it('knows that a recording has been registered as fresh', async function() {\\n    const instance = Timeline.FreshRecording.Tracker.instance({forceNew: true});\\n    const {traceData} = await TraceLoader.traceEngine(this, 'web-dev.json.gz');\\n    instance.registerFreshRecording(traceData);\\n    assert.isTrue(instance.recordingIsFresh(traceData));\\n  });\\n\\n  it('knows that un-registered recordings are not fresh', async function() {\\n    const instance = Timeline.FreshRecording.Tracker.instance({forceNew: true});\\n    const {traceData} = await TraceLoader.traceEngine(this, 'web-dev.json.gz');\\n    assert.isFalse(instance.recordingIsFresh(traceData));\\n  });\\n});\\n\"]}");

/***/ })

}]);