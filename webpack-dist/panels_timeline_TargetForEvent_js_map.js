(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_TargetForEvent_js_map"],{

/***/ "./panels/timeline/TargetForEvent.js.map":
/*!***********************************************!*\
  !*** ./panels/timeline/TargetForEvent.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"TargetForEvent.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/timeline/TargetForEvent.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAG7C;;;;IAII;AACJ,MAAM,UAAU,cAAc,CAC1B,eAA0D,EAC1D,KAAmD;IACrD,MAAM,aAAa,GAAG,GAAG,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC;IACjE,MAAM,QAAQ,GAAG,eAAe,CAAC,OAAO,CAAC,gBAAgB,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC;IACzE,IAAI,QAAQ,EAAE,CAAC;QACb,OAAO,aAAa,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC;IAC5C,CAAC;IAED,OAAO,aAAa,CAAC,iBAAiB,EAAE,CAAC;AAC3C,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport type * as TraceEngine from '../../models/trace/trace.js';\\n\\n/**\\n * If the event's thread was identified as belonging to a worker, this will\\n * return the target representing that worker. Otherwise, we return the primary\\n * page's target.\\n **/\\nexport function targetForEvent(\\n    traceParsedData: TraceEngine.Handlers.Types.TraceParseData,\\n    event: TraceEngine.Types.TraceEvents.TraceEventData): SDK.Target.Target|null {\\n  const targetManager = SDK.TargetManager.TargetManager.instance();\\n  const workerId = traceParsedData.Workers.workerIdByThread.get(event.tid);\\n  if (workerId) {\\n    return targetManager.targetById(workerId);\\n  }\\n\\n  return targetManager.primaryPageTarget();\\n}\\n\"]}");

/***/ })

}]);