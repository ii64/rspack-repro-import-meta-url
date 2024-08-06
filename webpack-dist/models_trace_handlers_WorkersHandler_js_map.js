(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_handlers_WorkersHandler_js_map"],{

/***/ "./models/trace/handlers/WorkersHandler.js.map":
/*!*****************************************************!*\
  !*** ./models/trace/handlers/WorkersHandler.js.map ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"WorkersHandler.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/handlers/WorkersHandler.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,KAAK,MAAM,mBAAmB,CAAC;AAS3C,IAAI,YAAY,qCAA6B,CAAC;AAE9C,MAAM,eAAe,GAA4D,EAAE,CAAC;AACpF,MAAM,gBAAgB,GAAgE,IAAI,GAAG,EAAE,CAAC;AAChG,MAAM,aAAa,GAA4C,IAAI,GAAG,EAAE,CAAC;AAEzE,MAAM,UAAU,UAAU;IACxB,IAAI,YAAY,uCAA+B,EAAE,CAAC;QAChD,MAAM,IAAI,KAAK,CAAC,+BAA+B,CAAC,CAAC;IACnD,CAAC;IAED,YAAY,mCAA2B,CAAC;AAC1C,CAAC;AAED,MAAM,UAAU,KAAK;IACnB,eAAe,CAAC,MAAM,GAAG,CAAC,CAAC;IAC3B,gBAAgB,CAAC,KAAK,EAAE,CAAC;IACzB,aAAa,CAAC,KAAK,EAAE,CAAC;IACtB,YAAY,qCAA6B,CAAC;AAC5C,CAAC;AAED,MAAM,UAAU,WAAW,CAAC,KAAuC;IACjE,IAAI,YAAY,qCAA6B,EAAE,CAAC;QAC9C,MAAM,IAAI,KAAK,CAAC,oCAAoC,CAAC,CAAC;IACxD,CAAC;IACD,IAAI,KAAK,CAAC,WAAW,CAAC,qCAAqC,CAAC,KAAK,CAAC,EAAE,CAAC;QACnE,eAAe,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;IAC9B,CAAC;AACH,CAAC;AAED,MAAM,CAAC,KAAK,UAAU,QAAQ;IAC5B,IAAI,YAAY,qCAA6B,EAAE,CAAC;QAC9C,MAAM,IAAI,KAAK,CAAC,4BAA4B,CAAC,CAAC;IAChD,CAAC;IACD,KAAK,MAAM,cAAc,IAAI,eAAe,EAAE,CAAC;QAC7C,IAAI,CAAC,cAAc,CAAC,IAAI,CAAC,IAAI,EAAE,CAAC;YAC9B,SAAS;QACX,CAAC;QACD,gBAAgB,CAAC,GAAG,CAAC,cAAc,CAAC,IAAI,CAAC,IAAI,CAAC,cAAc,EAAE,cAAc,CAAC,IAAI,CAAC,IAAI,CAAC,QAAQ,CAAC,CAAC;QACjG,aAAa,CAAC,GAAG,CAAC,cAAc,CAAC,IAAI,CAAC,IAAI,CAAC,QAAQ,EAAE,cAAc,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC;IACrF,CAAC;IACD,YAAY,iCAAyB,CAAC;AACxC,CAAC;AAED,MAAM,UAAU,IAAI;IAClB,IAAI,YAAY,mCAA2B,EAAE,CAAC;QAC5C,MAAM,IAAI,KAAK,CAAC,kCAAkC,CAAC,CAAC;IACtD,CAAC;IAED,OAAO;QACL,qBAAqB,EAAE,eAAe;QACtC,gBAAgB;QAChB,aAAa;KACd,CAAC;AACJ,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Types from '../types/types.js';\\n\\nimport {HandlerState} from './types.js';\\n\\nexport interface WorkersData {\\n  workerSessionIdEvents: readonly Types.TraceEvents.TraceEventTracingSessionIdForWorker[];\\n  workerIdByThread: Map<Types.TraceEvents.ThreadID, Types.TraceEvents.WorkerId>;\\n  workerURLById: Map<Types.TraceEvents.WorkerId, string>;\\n}\\nlet handlerState = HandlerState.UNINITIALIZED;\\n\\nconst sessionIdEvents: Types.TraceEvents.TraceEventTracingSessionIdForWorker[] = [];\\nconst workerIdByThread: Map<Types.TraceEvents.ThreadID, Types.TraceEvents.WorkerId> = new Map();\\nconst workerURLById: Map<Types.TraceEvents.WorkerId, string> = new Map();\\n\\nexport function initialize(): void {\\n  if (handlerState !== HandlerState.UNINITIALIZED) {\\n    throw new Error('Workers Handler was not reset');\\n  }\\n\\n  handlerState = HandlerState.INITIALIZED;\\n}\\n\\nexport function reset(): void {\\n  sessionIdEvents.length = 0;\\n  workerIdByThread.clear();\\n  workerURLById.clear();\\n  handlerState = HandlerState.UNINITIALIZED;\\n}\\n\\nexport function handleEvent(event: Types.TraceEvents.TraceEventData): void {\\n  if (handlerState !== HandlerState.INITIALIZED) {\\n    throw new Error('Workers Handler is not initialized');\\n  }\\n  if (Types.TraceEvents.isTraceEventTracingSessionIdForWorker(event)) {\\n    sessionIdEvents.push(event);\\n  }\\n}\\n\\nexport async function finalize(): Promise<void> {\\n  if (handlerState !== HandlerState.INITIALIZED) {\\n    throw new Error('Handler is not initialized');\\n  }\\n  for (const sessionIdEvent of sessionIdEvents) {\\n    if (!sessionIdEvent.args.data) {\\n      continue;\\n    }\\n    workerIdByThread.set(sessionIdEvent.args.data.workerThreadId, sessionIdEvent.args.data.workerId);\\n    workerURLById.set(sessionIdEvent.args.data.workerId, sessionIdEvent.args.data.url);\\n  }\\n  handlerState = HandlerState.FINALIZED;\\n}\\n\\nexport function data(): WorkersData {\\n  if (handlerState !== HandlerState.FINALIZED) {\\n    throw new Error('Workers Handler is not finalized');\\n  }\\n\\n  return {\\n    workerSessionIdEvents: sessionIdEvents,\\n    workerIdByThread,\\n    workerURLById,\\n  };\\n}\\n\"]}");

/***/ })

}]);