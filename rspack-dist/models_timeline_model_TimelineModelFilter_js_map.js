(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_timeline_model_TimelineModelFilter_js_map"], {
"./models/timeline_model/TimelineModelFilter.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"TimelineModelFilter.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/timeline_model/TimelineModelFilter.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,WAAW,MAAM,6BAA6B,CAAC;AAE3D,MAAM,OAAgB,mBAAmB;CAIxC;AAED,MAAM,OAAO,2BAA4B,SAAQ,mBAAmB;IACjD,YAAY,CAAc;IAC3C,YAAY,YAAsB;QAChC,KAAK,EAAE,CAAC;QACR,IAAI,CAAC,YAAY,GAAG,IAAI,GAAG,CAAC,YAAY,CAAC,CAAC;IAC5C,CAAC;IAED,MAAM,CAAC,KAAmD;QACxD,IAAI,WAAW,CAAC,KAAK,CAAC,UAAU,CAAC,yBAAyB,CAAC,KAAK,CAAC;YAC7D,WAAW,CAAC,KAAK,CAAC,WAAW,CAAC,qBAAqB,CAAC,KAAK,CAAC,EAAE,CAAC;YAC/D,OAAO,IAAI,CAAC;QACd,CAAC;QACD,OAAO,IAAI,CAAC,YAAY,CAAC,GAAG,CAAC,2BAA2B,CAAC,SAAS,CAAC,KAAK,CAAC,CAAC,CAAC;IAC7E,CAAC;IAED,MAAM,CAAC,SAAS,CAAC,KAAmD;QAClE,sEAAsE;QACtE,IAAI,WAAW,CAAC,OAAO,CAAC,KAAK,CAAC,gBAAgB,CAAC,KAAK,EAAE,eAAe,CAAC,EAAE,CAAC;YACvE,oFAAgE;QAClE,CAAC;QACD,sEAAsE;QACtE,IAAI,WAAW,CAAC,OAAO,CAAC,KAAK,CAAC,gBAAgB,CAAC,KAAK,EAAE,mBAAmB,CAAC,EAAE,CAAC;YAC3E,kFAA+D;QACjE,CAAC;QACD,OAAO,KAAK,CAAC,IAAoD,CAAC;IACpE,CAAC;CACF;AAED,MAAM,OAAO,6BAA8B,SAAQ,mBAAmB;IACpE,eAAe,CAAoD;IAEnE,YAAY,cAA8D;QACxE,KAAK,EAAE,CAAC;QACR,IAAI,CAAC,eAAe,GAAG,IAAI,GAAG,CAAC,cAAc,CAAC,CAAC;IACjD,CAAC;IAED,MAAM,CAAC,KAAmD;QACxD,OAAO,CAAC,IAAI,CAAC,eAAe,CAAC,GAAG,CAAC,2BAA2B,CAAC,SAAS,CAAC,KAAK,CAAC,CAAC,CAAC;IACjF,CAAC;CACF;AAED,MAAM,OAAO,mBAAoB,SAAQ,mBAAmB;IAC1D,aAAa,CAAoD;IACjE,YAAY,YAA4D;QACtE,KAAK,EAAE,CAAC;QACR,IAAI,CAAC,aAAa,GAAG,IAAI,GAAG,CAAC,YAAY,CAAC,CAAC;IAC7C,CAAC;IAED,MAAM,CAAC,KAAmD;QACxD,OAAO,CAAC,IAAI,CAAC,aAAa,CAAC,GAAG,CAAC,KAAK,CAAC,IAAoD,CAAC,CAAC;IAC7F,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2017 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as TraceEngine from '../../models/trace/trace.js';\\n\\nexport abstract class TimelineModelFilter {\\n  abstract accept(\\n      _event: TraceEngine.Types.TraceEvents.TraceEventData,\\n      traceParsedData?: TraceEngine.Handlers.Types.TraceParseData): boolean;\\n}\\n\\nexport class TimelineVisibleEventsFilter extends TimelineModelFilter {\\n  private readonly visibleTypes: Set<string>;\\n  constructor(visibleTypes: string[]) {\\n    super();\\n    this.visibleTypes = new Set(visibleTypes);\\n  }\\n\\n  accept(event: TraceEngine.Types.TraceEvents.TraceEventData): boolean {\\n    if (TraceEngine.Types.Extensions.isSyntheticExtensionEntry(event) ||\\n        TraceEngine.Types.TraceEvents.isSyntheticTraceEntry(event)) {\\n      return true;\\n    }\\n    return this.visibleTypes.has(TimelineVisibleEventsFilter.eventType(event));\\n  }\\n\\n  static eventType(event: TraceEngine.Types.TraceEvents.TraceEventData): TraceEngine.Types.TraceEvents.KnownEventName {\\n    // Any blink.console category events are treated as ConsoleTime events\\n    if (TraceEngine.Helpers.Trace.eventHasCategory(event, 'blink.console')) {\\n      return TraceEngine.Types.TraceEvents.KnownEventName.ConsoleTime;\\n    }\\n    // Any blink.user_timing egory events are treated as UserTiming events\\n    if (TraceEngine.Helpers.Trace.eventHasCategory(event, 'blink.user_timing')) {\\n      return TraceEngine.Types.TraceEvents.KnownEventName.UserTiming;\\n    }\\n    return event.name as TraceEngine.Types.TraceEvents.KnownEventName;\\n  }\\n}\\n\\nexport class TimelineInvisibleEventsFilter extends TimelineModelFilter {\\n  #invisibleTypes: Set<TraceEngine.Types.TraceEvents.KnownEventName>;\\n\\n  constructor(invisibleTypes: TraceEngine.Types.TraceEvents.KnownEventName[]) {\\n    super();\\n    this.#invisibleTypes = new Set(invisibleTypes);\\n  }\\n\\n  accept(event: TraceEngine.Types.TraceEvents.TraceEventData): boolean {\\n    return !this.#invisibleTypes.has(TimelineVisibleEventsFilter.eventType(event));\\n  }\\n}\\n\\nexport class ExclusiveNameFilter extends TimelineModelFilter {\\n  #excludeNames: Set<TraceEngine.Types.TraceEvents.KnownEventName>;\\n  constructor(excludeNames: TraceEngine.Types.TraceEvents.KnownEventName[]) {\\n    super();\\n    this.#excludeNames = new Set(excludeNames);\\n  }\\n\\n  accept(event: TraceEngine.Types.TraceEvents.TraceEventData): boolean {\\n    return !this.#excludeNames.has(event.name as TraceEngine.Types.TraceEvents.KnownEventName);\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);