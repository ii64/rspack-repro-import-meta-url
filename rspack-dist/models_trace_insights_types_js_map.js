(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_insights_types_js_map"], {
"./models/trace/insights/types.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"types.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/insights/types.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAyB7B,MAAM,CAAN,IAAY,cAMX;AAND,WAAY,cAAc;IACxB,iCAAe,CAAA;IACf,mCAAiB,CAAA;IACjB,uEAAuE;IACvE,6DAA2C,CAAA;IAC3C,yCAAuB,CAAA;AACzB,CAAC,EANW,cAAc,KAAd,cAAc,QAMzB\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Handlers from '../handlers/handlers.js';\\nimport type * as Lantern from '../lantern/lantern.js';\\nimport type * as Types from '../types/types.js';\\n\\nimport type * as InsightsRunners from './InsightRunners.js';\\n\\n/**\\n * Context for which navigation an insight should look at.\\n */\\nexport interface NavigationInsightContext {\\n  frameId: string;\\n  navigationId: string;\\n  lantern?: LanternContext;\\n}\\n\\nexport interface LanternContext {\\n  graph: Lantern.Graph.Node<Types.TraceEvents.SyntheticNetworkRequest>;\\n  simulator: Lantern.Simulation.Simulator<Types.TraceEvents.SyntheticNetworkRequest>;\\n  metrics: Record<string, Lantern.Metrics.MetricResult>;\\n}\\n\\nexport type InsightRunnersType = typeof InsightsRunners;\\n\\nexport enum InsightWarning {\\n  NO_FP = 'NO_FP',\\n  NO_LCP = 'NO_LCP',\\n  // No network request could be identified as the primary HTML document.\\n  NO_DOCUMENT_REQUEST = 'NO_DOCUMENT_REQUEST',\\n  NO_LAYOUT = 'NO_LAYOUT',\\n}\\n\\nexport type InsightResult<R extends Record<string, unknown>> = R&{\\n  warnings?: InsightWarning[],\\n  metricSavings?: {\\n    /* eslint-disable @typescript-eslint/naming-convention */\\n    FCP?: number,\\n    LCP?: number,\\n    TBT?: number,\\n    CLS?: number,\\n    INP?: number,\\n    /* eslint-enable @typescript-eslint/naming-convention */\\n  },\\n};\\n\\nexport type LCPInsightResult = InsightResult<{\\n  lcpMs?: Types.Timing.MilliSeconds,\\n  lcpTs?: Types.Timing.MilliSeconds,\\n  phases?: InsightsRunners.LargestContentfulPaint.LCPPhases,\\n  shouldRemoveLazyLoading?: boolean,\\n  shouldIncreasePriorityHint?: boolean,\\n  shouldPreloadImage?: boolean,\\n  lcpResource?: Types.TraceEvents.SyntheticNetworkRequest,\\n}>;\\n\\n/**\\n * Contains insights for a specific navigation.\\n */\\nexport type NavigationInsightData = {\\n  [I in keyof InsightRunnersType]: ReturnType<InsightRunnersType[I]['generateInsight']>|Error;\\n};\\n\\n/**\\n * Contains insights for the entire trace. Insights are grouped by `navigationId`.\\n */\\nexport type TraceInsightData = Map<string, NavigationInsightData>;\\n\\n/**\\n * Represents the narrow set of dependencies defined by an insight's `deps()` function. `Meta` is always included regardless of `deps()`.\\n */\\nexport type RequiredData<D extends() => Array<keyof typeof Handlers.ModelHandlers>> =\\n    Handlers.Types.EnabledHandlerDataWithMeta<Pick<typeof Handlers.ModelHandlers, ReturnType<D>[number]>>;\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);