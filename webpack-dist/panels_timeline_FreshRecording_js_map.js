(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_FreshRecording_js_map"],{

/***/ "./panels/timeline/FreshRecording.js.map":
/*!***********************************************!*\
  !*** ./panels/timeline/FreshRecording.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"FreshRecording.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/timeline/FreshRecording.ts\"],\"names\":[],\"mappings\":\"AAKA,IAAI,QAAQ,GAAiB,IAAI,CAAC;AAElC;;;;;IAKI;AACJ,MAAM,OAAO,OAAO;IAClB,gBAAgB,GAAuD,IAAI,OAAO,EAAE,CAAC;IAErF,MAAM,CAAC,QAAQ,CAAC,OAA4B,EAAC,QAAQ,EAAE,KAAK,EAAC;QAC3D,IAAI,CAAC,QAAQ,IAAI,IAAI,CAAC,QAAQ,EAAE,CAAC;YAC/B,QAAQ,GAAG,IAAI,OAAO,EAAE,CAAC;QAC3B,CAAC;QACD,OAAO,QAAQ,CAAC;IAClB,CAAC;IAED,sBAAsB,CAAC,IAA+C;QACpE,IAAI,CAAC,gBAAgB,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;IAClC,CAAC;IAED,gBAAgB,CAAC,IAA+C;QAC9D,OAAO,IAAI,CAAC,gBAAgB,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;IACzC,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport type * as TraceEngine from '../../models/trace/trace.js';\\n\\nlet instance: Tracker|null = null;\\n\\n/**\\n * In multiple places we need to know if the trace we are working on is fresh\\n * or not. We cannot store that data in the trace file's metadata (otherwise a\\n * loaded trace file could claim to be fresh), so we store it here. When a new trace\\n * is loaded, we set this flag accordingly.\\n **/\\nexport class Tracker {\\n  #freshRecordings: WeakSet<TraceEngine.Handlers.Types.TraceParseData> = new WeakSet();\\n\\n  static instance(opts: {forceNew: boolean} = {forceNew: false}): Tracker {\\n    if (!instance || opts.forceNew) {\\n      instance = new Tracker();\\n    }\\n    return instance;\\n  }\\n\\n  registerFreshRecording(data: TraceEngine.Handlers.Types.TraceParseData): void {\\n    this.#freshRecordings.add(data);\\n  }\\n\\n  recordingIsFresh(data: TraceEngine.Handlers.Types.TraceParseData): boolean {\\n    return this.#freshRecordings.has(data);\\n  }\\n}\\n\"]}");

/***/ })

}]);