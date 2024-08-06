(self["webpackChunk"] = self["webpackChunk"] || []).push([["services_tracing_PerformanceTracing_js_map"],{

/***/ "./services/tracing/PerformanceTracing.js.map":
/*!****************************************************!*\
  !*** ./services/tracing/PerformanceTracing.js.map ***!
  \****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"PerformanceTracing.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/services/tracing/PerformanceTracing.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,WAAW,MAAM,6BAA6B,CAAC;AAE3D,MAAM,OAAO,kBAAkB;IACpB,YAAY,GAAa,EAAE,CAAC;IACrC,eAAe,GAAmD,IAAI,CAAC;IACvE,SAAS,CAAW;IAEpB,YAAY,MAAyB,EAAE,QAAkB;QACvD,IAAI,CAAC,eAAe,GAAG,MAAM,CAAC,KAAK,CAAC,WAAW,CAAC,cAAc,CAAC,cAAc,CAAC,CAAC;QAC/E,IAAI,CAAC,SAAS,GAAG,QAAQ,CAAC;IAC5B,CAAC;IAED,KAAK,CAAC,KAAK;QACT,IAAI,CAAC,YAAY,CAAC,MAAM,GAAG,CAAC,CAAC;QAE7B,IAAI,CAAC,IAAI,CAAC,eAAe,EAAE,CAAC;YAC1B,MAAM,IAAI,KAAK,CAAC,oBAAoB,CAAC,CAAC;QACxC,CAAC;QAED,oEAAoE;QACpE,8CAA8C;QAC9C,6IAA6I;QAC7I,mGAAmG;QACnG,MAAM,UAAU,GAAG;YACjB,IAAI;YACJ,eAAe;YACf,mBAAmB;YACnB,mBAAmB;YACnB,yCAAyC;YACzC,uCAAuC;YACvC,4DAA4D;YAC5D,6CAA6C;YAC7C,6CAA6C;YAC7C,qCAAqC;YACrC,2CAA2C;YAC3C,aAAa;YACb,SAAS;YACT,gCAAgC;YAChC,YAAY;YACZ,IAAI;SACL,CAAC,IAAI,CAAC,GAAG,CAAC,CAAC;QAEZ,MAAM,OAAO,GAAG,MAAM,IAAI,CAAC,eAAe,CAAC,KAAK,CAAC,IAAI,EAAE,UAAU,EAAE,EAAE,CAAC,CAAC;QAEvE,IAAI,CAAC,OAAO,EAAE,CAAC;YACb,MAAM,IAAI,KAAK,CAAC,0BAA0B,CAAC,CAAC;QAC9C,CAAC;IACH,CAAC;IAED,KAAK,CAAC,IAAI;QACR,OAAO,IAAI,CAAC,eAAe,EAAE,IAAI,EAAE,CAAC;IACtC,CAAC;IAED,qEAAqE;IACrE,cAAc;QACZ,OAAO,IAAI,CAAC,YAAY,CAAC;IAC3B,CAAC;IAED,oBAAoB,CAAC,MAAgB;QACnC,IAAI,CAAC,YAAY,CAAC,IAAI,CAAC,GAAG,MAAM,CAAC,CAAC;IACpC,CAAC;IAED,kBAAkB,CAAC,KAAa;QAC9B,IAAI,CAAC,SAAS,CAAC,kBAAkB,CAAC,KAAK,CAAC,CAAC;IAC3C,CAAC;IAED,uBAAuB,CAAC,QAAgB;QACtC,IAAI,CAAC,SAAS,CAAC,uBAAuB,CAAC,QAAQ,CAAC,CAAC;IACnD,CAAC;IAED,eAAe;QACb,IAAI,CAAC,SAAS,CAAC,eAAe,CAAC,IAAI,CAAC,YAAY,CAAC,CAAC;IACpD,CAAC;CAEF;AAQD,4GAA4G;AAC5G,MAAM,OAAO,cAAc;IACL;IAApB,YAAoB,MAAgB;QAAhB,WAAM,GAAN,MAAM,CAAU;IACpC,CAAC;IAED,SAAS;QACP,OAAO,IAAI,CAAC,MAAM,CAAC;IACrB,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport * as TraceEngine from '../../models/trace/trace.js';\\n\\nexport class PerformanceTracing implements TraceEngine.TracingManager.TracingManagerClient {\\n  readonly #traceEvents: Object[] = [];\\n  #tracingManager: TraceEngine.TracingManager.TracingManager|null = null;\\n  #delegate: Delegate;\\n\\n  constructor(target: SDK.Target.Target, delegate: Delegate) {\\n    this.#tracingManager = target.model(TraceEngine.TracingManager.TracingManager);\\n    this.#delegate = delegate;\\n  }\\n\\n  async start(): Promise<void> {\\n    this.#traceEvents.length = 0;\\n\\n    if (!this.#tracingManager) {\\n      throw new Error('No tracing manager');\\n    }\\n\\n    // This panel may be opened with trace data recorded in other tools.\\n    // Keep in sync with the categories arrays in:\\n    // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/panels/timeline/TimelineController.ts\\n    // https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/gather/gatherers/trace.js\\n    const categories = [\\n      '-*',\\n      'blink.console',\\n      'blink.user_timing',\\n      'devtools.timeline',\\n      'disabled-by-default-devtools.screenshot',\\n      'disabled-by-default-devtools.timeline',\\n      'disabled-by-default-devtools.timeline.invalidationTracking',\\n      'disabled-by-default-devtools.timeline.frame',\\n      'disabled-by-default-devtools.timeline.stack',\\n      'disabled-by-default-v8.cpu_profiler',\\n      'disabled-by-default-v8.cpu_profiler.hires',\\n      'latencyInfo',\\n      'loading',\\n      'disabled-by-default-lighthouse',\\n      'v8.execute',\\n      'v8',\\n    ].join(',');\\n\\n    const started = await this.#tracingManager.start(this, categories, '');\\n\\n    if (!started) {\\n      throw new Error('Unable to start tracing.');\\n    }\\n  }\\n\\n  async stop(): Promise<void> {\\n    return this.#tracingManager?.stop();\\n  }\\n\\n  // Start of implementation of SDK.TracingManager.TracingManagerClient\\n  getTraceEvents(): Object[] {\\n    return this.#traceEvents;\\n  }\\n\\n  traceEventsCollected(events: Object[]): void {\\n    this.#traceEvents.push(...events);\\n  }\\n\\n  tracingBufferUsage(usage: number): void {\\n    this.#delegate.tracingBufferUsage(usage);\\n  }\\n\\n  eventsRetrievalProgress(progress: number): void {\\n    this.#delegate.eventsRetrievalProgress(progress);\\n  }\\n\\n  tracingComplete(): void {\\n    this.#delegate.tracingComplete(this.#traceEvents);\\n  }\\n  // End of implementation of SDK.TracingManager.TracingManagerClient\\n}\\n\\ninterface Delegate {\\n  tracingBufferUsage(usage: number): void;\\n  eventsRetrievalProgress(progress: number): void;\\n  tracingComplete(events: Object[]): void;\\n}\\n\\n// Used by an implementation of Common.Revealer to transfer data from the recorder to the performance panel.\\nexport class RawTraceEvents {\\n  constructor(private events: Object[]) {\\n  }\\n\\n  getEvents(): Object[] {\\n    return this.events;\\n  }\\n}\\n\"]}");

/***/ })

}]);