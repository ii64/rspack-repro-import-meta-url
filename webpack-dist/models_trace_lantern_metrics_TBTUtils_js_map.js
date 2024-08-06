(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_lantern_metrics_TBTUtils_js_map"],{

/***/ "./models/trace/lantern/metrics/TBTUtils.js.map":
/*!******************************************************!*\
  !*** ./models/trace/lantern/metrics/TBTUtils.js.map ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"TBTUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/models/trace/lantern/metrics/TBTUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,uBAAuB,GAAG,EAAE,CAAC;AAEnC;;;;;;;;;;;;;;GAcG;AACH,SAAS,0BAA0B,CAC/B,KAAqD,EAAE,WAAmB,EAAE,SAAiB,EAC7F,aAA8D;IAChE,IAAI,SAAS,GAAG,uBAAuB,CAAC;IAExC,gFAAgF;IAChF,qCAAqC;IACrC,EAAE;IACF,mFAAmF;IACnF,0EAA0E;IAC1E,EAAE;IACF,qFAAqF;IACrF,IAAI,aAAa,EAAE,CAAC;QAClB,SAAS,IAAI,CAAC,KAAK,CAAC,QAAQ,GAAG,aAAa,CAAC,QAAQ,CAAC,CAAC;IACzD,CAAC;IAED,IAAI,KAAK,CAAC,QAAQ,GAAG,SAAS,EAAE,CAAC;QAC/B,OAAO,CAAC,CAAC;IACX,CAAC;IACD,IAAI,KAAK,CAAC,GAAG,GAAG,WAAW,EAAE,CAAC;QAC5B,OAAO,CAAC,CAAC;IACX,CAAC;IACD,IAAI,KAAK,CAAC,KAAK,GAAG,SAAS,EAAE,CAAC;QAC5B,OAAO,CAAC,CAAC;IACX,CAAC;IAED,sFAAsF;IACtF,uFAAuF;IACvF,yFAAyF;IACzF,uFAAuF;IACvF,4CAA4C;IAC5C,MAAM,YAAY,GAAG,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,KAAK,EAAE,WAAW,CAAC,CAAC;IACxD,MAAM,UAAU,GAAG,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,EAAE,SAAS,CAAC,CAAC;IAClD,MAAM,eAAe,GAAG,UAAU,GAAG,YAAY,CAAC;IAClD,IAAI,eAAe,GAAG,SAAS,EAAE,CAAC;QAChC,OAAO,CAAC,CAAC;IACX,CAAC;IAED,OAAO,eAAe,GAAG,SAAS,CAAC;AACrC,CAAC;AAED,SAAS,0BAA0B,CAC/B,cAAqE,EAAE,WAAmB,EAC1F,SAAiB;IACnB,IAAI,SAAS,IAAI,WAAW,EAAE,CAAC;QAC7B,OAAO,CAAC,CAAC;IACX,CAAC;IAED,IAAI,eAAe,GAAG,CAAC,CAAC;IACxB,KAAK,MAAM,KAAK,IAAI,cAAc,EAAE,CAAC;QACnC,eAAe,IAAI,0BAA0B,CAAC,KAAK,EAAE,WAAW,EAAE,SAAS,CAAC,CAAC;IAC/E,CAAC;IAED,OAAO,eAAe,CAAC;AACzB,CAAC;AAED,OAAO,EACL,uBAAuB,EACvB,0BAA0B,EAC1B,0BAA0B,GAC3B,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nconst BLOCKING_TIME_THRESHOLD = 50;\\n\\n/**\\n * For TBT, We only want to consider tasks that fall in our time range\\n * - FCP and TTI for navigation mode\\n * - Trace start and trace end for timespan mode\\n *\\n * FCP is picked as `startTimeMs` because there is little risk of user input happening\\n * before FCP so Long Queuing Qelay regions do not harm user experience. Developers should be\\n * optimizing to reach FCP as fast as possible without having to worry about task lengths.\\n *\\n * TTI is picked as `endTimeMs` because we want a well defined end point for page load.\\n *\\n * @param startTimeMs Should be FCP in navigation mode and the trace start time in timespan mode\\n * @param endTimeMs Should be TTI in navigation mode and the trace end time in timespan mode\\n * @param topLevelEvent Leave unset if `event` is top level. Has no effect if `event` has the same duration as `topLevelEvent`.\\n */\\nfunction calculateTbtImpactForEvent(\\n    event: {start: number, end: number, duration: number}, startTimeMs: number, endTimeMs: number,\\n    topLevelEvent?: {start: number, end: number, duration: number}): number {\\n  let threshold = BLOCKING_TIME_THRESHOLD;\\n\\n  // If a task is not top level, it doesn't make sense to subtract the entire 50ms\\n  // blocking threshold from the event.\\n  //\\n  // e.g. A 80ms top level task with two 40ms children should attribute some blocking\\n  // time to the 40ms tasks even though they do not meet the 50ms threshold.\\n  //\\n  // The solution is to scale the threshold for child events to be considered blocking.\\n  if (topLevelEvent) {\\n    threshold *= (event.duration / topLevelEvent.duration);\\n  }\\n\\n  if (event.duration < threshold) {\\n    return 0;\\n  }\\n  if (event.end < startTimeMs) {\\n    return 0;\\n  }\\n  if (event.start > endTimeMs) {\\n    return 0;\\n  }\\n\\n  // Perform the clipping and then calculate Blocking Region. So if we have a 150ms task\\n  // [0, 150] and `startTimeMs` is at 50ms, we first clip the task to [50, 150], and then\\n  // calculate the Blocking Region to be [100, 150]. The rational here is that tasks before\\n  // the start time are unimportant, so we care whether the main thread is busy more than\\n  // 50ms at a time only after the start time.\\n  const clippedStart = Math.max(event.start, startTimeMs);\\n  const clippedEnd = Math.min(event.end, endTimeMs);\\n  const clippedDuration = clippedEnd - clippedStart;\\n  if (clippedDuration < threshold) {\\n    return 0;\\n  }\\n\\n  return clippedDuration - threshold;\\n}\\n\\nfunction calculateSumOfBlockingTime(\\n    topLevelEvents: Array<{start: number, end: number, duration: number}>, startTimeMs: number,\\n    endTimeMs: number): number {\\n  if (endTimeMs <= startTimeMs) {\\n    return 0;\\n  }\\n\\n  let sumBlockingTime = 0;\\n  for (const event of topLevelEvents) {\\n    sumBlockingTime += calculateTbtImpactForEvent(event, startTimeMs, endTimeMs);\\n  }\\n\\n  return sumBlockingTime;\\n}\\n\\nexport {\\n  BLOCKING_TIME_THRESHOLD,\\n  calculateSumOfBlockingTime,\\n  calculateTbtImpactForEvent,\\n};\\n\"]}");

/***/ })

}]);