(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_handlers_MemoryHandler_js_map"], {
"./models/trace/handlers/MemoryHandler.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"MemoryHandler.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/handlers/MemoryHandler.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,oCAAoC,CAAC;AAC/D,OAAO,KAAK,KAAK,MAAM,mBAAmB,CAAC;AAM3C,MAAM,uBAAuB,GAA0C,IAAI,GAAG,EAAE,CAAC;AAEjF,MAAM,UAAU,KAAK;IACnB,uBAAuB,CAAC,KAAK,EAAE,CAAC;AAClC,CAAC;AAED,MAAM,UAAU,WAAW,CAAC,KAAuC;IACjE,IAAI,KAAK,CAAC,WAAW,CAAC,0BAA0B,CAAC,KAAK,CAAC,EAAE,CAAC;QACxD,MAAM,kBAAkB,GAAG,QAAQ,CAAC,YAAY,CAAC,cAAc,CAAC,uBAAuB,EAAE,KAAK,CAAC,GAAG,EAAE,GAAG,EAAE,CAAC,EAAE,CAAC,CAAC;QAC9G,kBAAkB,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;QAC/B,uBAAuB,CAAC,GAAG,CAAC,KAAK,CAAC,GAAG,EAAE,kBAAkB,CAAC,CAAC;IAC7D,CAAC;AACH,CAAC;AAED,MAAM,UAAU,IAAI;IAClB,OAAO,EAAC,uBAAuB,EAAC,CAAC;AACnC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Platform from '../../../core/platform/platform.js';\\nimport * as Types from '../types/types.js';\\n\\nexport interface MemoryData {\\n  updateCountersByProcess: Map<Types.TraceEvents.ProcessID, Types.TraceEvents.TraceEventUpdateCounters[]>;\\n}\\n\\nconst updateCountersByProcess: MemoryData['updateCountersByProcess'] = new Map();\\n\\nexport function reset(): void {\\n  updateCountersByProcess.clear();\\n}\\n\\nexport function handleEvent(event: Types.TraceEvents.TraceEventData): void {\\n  if (Types.TraceEvents.isTraceEventUpdateCounters(event)) {\\n    const countersForProcess = Platform.MapUtilities.getWithDefault(updateCountersByProcess, event.pid, () => []);\\n    countersForProcess.push(event);\\n    updateCountersByProcess.set(event.pid, countersForProcess);\\n  }\\n}\\n\\nexport function data(): MemoryData {\\n  return {updateCountersByProcess};\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);