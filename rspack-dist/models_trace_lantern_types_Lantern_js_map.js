(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_types_Lantern_js_map"], {
"./models/trace/lantern/types/Lantern.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Lantern.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/models/trace/lantern/types/Lantern.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,CAAC,MAAM,mBAAmB,GAAG;IACjC,GAAG,EAAE,KAAK;IACV,KAAK,EAAE,OAAO;IACd,WAAW,EAAE,aAAa;IAC1B,MAAM,EAAE,QAAQ;IAChB,UAAU,EAAE,YAAY;IACxB,KAAK,EAAE,OAAO;IACd,KAAK,EAAE,OAAO;IACd,IAAI,EAAE,MAAM;IACZ,QAAQ,EAAE,UAAU;IACpB,SAAS,EAAE,WAAW;IACtB,SAAS,EAAE,WAAW;IACtB,KAAK,EAAE,OAAO;IACd,QAAQ,EAAE,UAAU;IACpB,cAAc,EAAE,gBAAgB;IAChC,IAAI,EAAE,MAAM;IACZ,SAAS,EAAE,WAAW;IACtB,kBAAkB,EAAE,oBAAoB;IACxC,QAAQ,EAAE,UAAU;CACZ,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Protocol from '../../../../generated/protocol.js';\\n\\nexport const NetworkRequestTypes = {\\n  XHR: 'XHR',\\n  Fetch: 'Fetch',\\n  EventSource: 'EventSource',\\n  Script: 'Script',\\n  Stylesheet: 'Stylesheet',\\n  Image: 'Image',\\n  Media: 'Media',\\n  Font: 'Font',\\n  Document: 'Document',\\n  TextTrack: 'TextTrack',\\n  WebSocket: 'WebSocket',\\n  Other: 'Other',\\n  Manifest: 'Manifest',\\n  SignedExchange: 'SignedExchange',\\n  Ping: 'Ping',\\n  Preflight: 'Preflight',\\n  CSPViolationReport: 'CSPViolationReport',\\n  Prefetch: 'Prefetch',\\n} as const;\\n\\nexport type TraceEvent = {\\n  name: string,\\n  args: {\\n    name?: string,\\n    data?: {\\n      frame?: string,\\n      readyState?: number,\\n      stackTrace?: {\\n        url: string,\\n      }[],\\n      url?: string,\\n    },\\n  },\\n  pid: number,\\n  tid: number,\\n  /** Timestamp of the event in microseconds. */\\n  ts: number,\\n  dur: number,\\n};\\nexport type Trace = {\\n  traceEvents: TraceEvent[],\\n};\\nexport type ResourcePriority = ('VeryLow'|'Low'|'Medium'|'High'|'VeryHigh');\\nexport type ResourceType = keyof typeof NetworkRequestTypes;\\ntype InitiatorType = ('parser'|'script'|'preload'|'SignedExchange'|'preflight'|'other');\\nexport type ResourceTiming = Protocol.Network.ResourceTiming;\\ntype CallStack = {\\n  callFrames: Array<{\\n    scriptId: string,\\n    url: string,\\n    lineNumber: number,\\n    columnNumber: number,\\n    functionName: string,\\n  }>,\\n  parent?: CallStack,\\n};\\n\\nexport type ParsedURL = {\\n  /**\\n   * Equivalent to a `new URL(url).protocol` BUT w/o the trailing colon (:)\\n   */\\n  scheme: string,\\n  /**\\n   * Equivalent to a `new URL(url).hostname`\\n   */\\n  host: string,\\n  securityOrigin: string,\\n};\\n\\n// When Lantern NetworkRequests are constructed, the source-of-truth of the network record is given as `rawRequest`.\\n// Internally Lantern doesn't care about the type of this field, so a default type is given to simplify internal code\\n// by avoiding unnecessary typescript overhead.\\n// If callers want to access the underlying network record, they are expected to make use of this generic on top-level\\n// interfaces like Simulator.\\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\\nexport type AnyNetworkObject = any;\\n\\nexport type NetworkRequest<T = AnyNetworkObject> = {\\n  requestId: string,\\n  connectionId: number,\\n  connectionReused: boolean,\\n  url: string,\\n  protocol: string,\\n  parsedURL: ParsedURL,\\n  documentURL: string,\\n  /** When the renderer process initially discovers a network request, in milliseconds. */\\n  rendererStartTime: number,\\n  /**\\n   * When the network service is about to handle a request, ie. just before going to the\\n   * HTTP cache or going to the network for DNS/connection setup, in milliseconds.\\n   */\\n  networkRequestTime: number,\\n  /**\\n   * When the last byte of the response headers is received, in milliseconds.\\n   * Equal to networkRequestTime if no data is recieved over the\\n   * network (ex: cached requests or data urls).\\n   */\\n  responseHeadersEndTime: number,\\n  /** When the last byte of the response body is received, in milliseconds. */\\n  networkEndTime: number,\\n  transferSize: number,\\n  resourceSize: number,\\n  fromDiskCache: boolean,\\n  fromMemoryCache: boolean,\\n  isLinkPreload: boolean,\\n  finished: boolean,\\n  failed: boolean,\\n  statusCode: number,\\n  /** The network request that redirected to this one */\\n  redirectSource: NetworkRequest<T>|undefined,\\n  /** The network request that this one redirected to */\\n  redirectDestination: NetworkRequest<T>|undefined,\\n  // TODO: can't use Protocol.Network.Initiator because of type mismatch in Lighthouse initiator.\\n  initiator: {\\n    type: InitiatorType,\\n    url?: string,\\n    stack?: CallStack,\\n  },\\n  initiatorRequest: NetworkRequest<T>|undefined,\\n  /** The chain of network requests that redirected to this one */\\n  redirects: NetworkRequest[]|undefined,\\n  timing: Protocol.Network.ResourceTiming|undefined,\\n  resourceType: ResourceType|undefined,\\n  mimeType: string,\\n  priority: ResourcePriority,\\n  frameId: string|undefined,\\n  fromWorker: boolean,\\n  /**\\n   * Optional value for how long the server took to respond to this request.\\n   * When not provided, the server response time is derived from the timing object.\\n   */\\n  serverResponseTime?: number,\\n  /**\\n   * Implementation-specific canoncial data structure that this Lantern NetworkRequest\\n   * was derived from.\\n   * Users of Lantern create a NetworkRequest matching this interface,\\n   * but can store the source-of-truth for their network model in this property.\\n   * This is then accessible as a read-only property on NetworkNode.\\n   */\\n  rawRequest?: T,\\n};\\n\\nexport namespace Simulation {\\n  export interface URL {\\n    /** URL of the initially requested URL */\\n    requestedUrl?: string;\\n    /** URL of the last document request */\\n    mainDocumentUrl?: string;\\n  }\\n\\n  /** Simulation settings that control the amount of network & cpu throttling in the run. */\\n  export interface ThrottlingSettings {\\n    /** The round trip time in milliseconds. */\\n    rttMs?: number;\\n    /** The network throughput in kilobits per second. */\\n    throughputKbps?: number;\\n    // devtools settings\\n    /** The network request latency in milliseconds. */\\n    requestLatencyMs?: number;\\n    /** The network download throughput in kilobits per second. */\\n    downloadThroughputKbps?: number;\\n    /** The network upload throughput in kilobits per second. */\\n    uploadThroughputKbps?: number;\\n    // used by both\\n    /** The amount of slowdown applied to the cpu (1/<cpuSlowdownMultiplier>). */\\n    cpuSlowdownMultiplier?: number;\\n  }\\n\\n  export interface PrecomputedLanternData {\\n    additionalRttByOrigin: {[origin: string]: number};\\n    serverResponseTimeByOrigin: {[origin: string]: number};\\n  }\\n\\n  export interface Settings {\\n    networkAnalysis: {\\n      rtt: number,\\n      additionalRttByOrigin: Map<string, number>,\\n      serverResponseTimeByOrigin: Map<string, number>,\\n      throughput: number,\\n    };\\n    /** The method used to throttle the network. */\\n    throttlingMethod: 'devtools'|'simulate'|'provided';\\n    /** The throttling config settings. */\\n    throttling?: Required<ThrottlingSettings>;\\n    /** Precomputed lantern estimates to use instead of observed analysis. */\\n    precomputedLanternData?: PrecomputedLanternData|null;\\n  }\\n\\n  export interface Options {\\n    rtt?: number;\\n    throughput?: number;\\n    observedThroughput: number;\\n    maximumConcurrentRequests?: number;\\n    cpuSlowdownMultiplier?: number;\\n    layoutTaskMultiplier?: number;\\n    additionalRttByOrigin?: Map<string, number>;\\n    serverResponseTimeByOrigin?: Map<string, number>;\\n  }\\n\\n  export interface ProcessedNavigation {\\n    timestamps: {\\n      firstContentfulPaint: number,\\n      largestContentfulPaint?: number,\\n    };\\n  }\\n\\n  export interface NodeTiming {\\n    startTime: number;\\n    endTime: number;\\n    duration: number;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);