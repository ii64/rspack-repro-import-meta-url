(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_profiler_ProfileTypeRegistry_js_map"],{

/***/ "./panels/profiler/ProfileTypeRegistry.js.map":
/*!****************************************************!*\
  !*** ./panels/profiler/ProfileTypeRegistry.js.map ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ProfileTypeRegistry.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/profiler/ProfileTypeRegistry.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,uBAAuB,EAAC,MAAM,sBAAsB,CAAC;AAC7D,OAAO,EAAC,uBAAuB,EAAE,+BAA+B,EAAC,MAAM,uBAAuB,CAAC;AAE/F,MAAM,OAAO,mBAAmB;IAC9B,uBAAuB,CAA0B;IACjD,uBAAuB,CAA0B;IACjD,+BAA+B,CAAkC;IACjE;QACE,IAAI,CAAC,uBAAuB,GAAG,IAAI,uBAAuB,EAAE,CAAC;QAC7D,IAAI,CAAC,uBAAuB,GAAG,IAAI,uBAAuB,EAAE,CAAC;QAC7D,IAAI,CAAC,+BAA+B,GAAG,IAAI,+BAA+B,EAAE,CAAC;IAC/E,CAAC;CACF;AAED,MAAM,CAAC,MAAM,QAAQ,GAAG,IAAI,mBAAmB,EAAE,CAAC\",\"sourcesContent\":[\"// Copyright 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {SamplingHeapProfileType} from './HeapProfileView.js';\\nimport {HeapSnapshotProfileType, TrackingHeapSnapshotProfileType} from './HeapSnapshotView.js';\\n\\nexport class ProfileTypeRegistry {\\n  heapSnapshotProfileType: HeapSnapshotProfileType;\\n  samplingHeapProfileType: SamplingHeapProfileType;\\n  trackingHeapSnapshotProfileType: TrackingHeapSnapshotProfileType;\\n  constructor() {\\n    this.heapSnapshotProfileType = new HeapSnapshotProfileType();\\n    this.samplingHeapProfileType = new SamplingHeapProfileType();\\n    this.trackingHeapSnapshotProfileType = new TrackingHeapSnapshotProfileType();\\n  }\\n}\\n\\nexport const instance = new ProfileTypeRegistry();\\n\"]}");

/***/ })

}]);