(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_insights_InteractionToNextPaint_js_map"], {
"./models/trace/insights/InteractionToNextPaint.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"InteractionToNextPaint.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/insights/InteractionToNextPaint.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAM7B,MAAM,UAAU,IAAI;IAClB,OAAO,CAAC,kBAAkB,CAAC,CAAC;AAC9B,CAAC;AAOD,MAAM,UAAU,eAAe,CAAC,eAA0C,EAAE,OAAiC;IAC3G,MAAM,iBAAiB,GAAG,eAAe,CAAC,gBAAgB,CAAC,iBAAiB,CAAC,MAAM,CAAC,KAAK,CAAC,EAAE;QAC1F,OAAO,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,YAAY,KAAK,OAAO,CAAC,YAAY,CAAC;IAC/D,CAAC,CAAC,CAAC;IAEH,IAAI,CAAC,iBAAiB,CAAC,MAAM,EAAE,CAAC;QAC9B,qDAAqD;QACrD,OAAO,EAAE,CAAC;IACZ,CAAC;IAED,MAAM,sBAAsB,GAAG,IAAI,GAAG,EAAoC,CAAC;IAC3E,KAAK,MAAM,KAAK,IAAI,iBAAiB,EAAE,CAAC;QACtC,MAAM,GAAG,GAAG,KAAK,CAAC,aAAa,CAAC;QAChC,MAAM,OAAO,GAAG,sBAAsB,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC;QAChD,IAAI,CAAC,OAAO,IAAI,KAAK,CAAC,GAAG,GAAG,OAAO,CAAC,GAAG,EAAE,CAAC;YACxC,sBAAsB,CAAC,GAAG,CAAC,GAAG,EAAE,KAAK,CAAC,CAAC;QACzC,CAAC;IACH,CAAC;IACD,MAAM,2BAA2B,GAAG,CAAC,GAAG,sBAAsB,CAAC,MAAM,EAAE,CAAC,CAAC;IACzE,2BAA2B,CAAC,IAAI,CAAC,CAAC,CAAC,EAAE,CAAC,EAAE,EAAE,CAAC,CAAC,CAAC,GAAG,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC;IAE1D,6EAA6E;IAC7E,+EAA+E;IAC/E,6EAA6E;IAC7E,iMAAiM;IACjM,MAAM,mBAAmB,GAAG,IAAI,CAAC,GAAG,CAAC,CAAC,EAAE,IAAI,CAAC,KAAK,CAAC,2BAA2B,CAAC,MAAM,GAAG,EAAE,CAAC,CAAC,CAAC;IAE7F,OAAO;QACL,uBAAuB,EAAE,2BAA2B,CAAC,CAAC,CAAC;QACvD,8BAA8B,EAAE,2BAA2B,CAAC,mBAAmB,CAAC;KACjF,CAAC;AACJ,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type SyntheticInteractionPair} from '../types/TraceEvents.js';\\n\\nimport {type InsightResult, type NavigationInsightContext, type RequiredData} from './types.js';\\n\\nexport function deps(): ['UserInteractions'] {\\n  return ['UserInteractions'];\\n}\\n\\ntype Result = InsightResult<{\\n  longestInteractionEvent?: SyntheticInteractionPair,\\n  highPercentileInteractionEvent?: SyntheticInteractionPair,\\n}>;\\n\\nexport function generateInsight(traceParsedData: RequiredData<typeof deps>, context: NavigationInsightContext): Result {\\n  const interactionEvents = traceParsedData.UserInteractions.interactionEvents.filter(event => {\\n    return event.args.data.navigationId === context.navigationId;\\n  });\\n\\n  if (!interactionEvents.length) {\\n    // A valid result, when there is no user interaction.\\n    return {};\\n  }\\n\\n  const longestByInteractionId = new Map<number, SyntheticInteractionPair>();\\n  for (const event of interactionEvents) {\\n    const key = event.interactionId;\\n    const longest = longestByInteractionId.get(key);\\n    if (!longest || event.dur > longest.dur) {\\n      longestByInteractionId.set(key, event);\\n    }\\n  }\\n  const normalizedInteractionEvents = [...longestByInteractionId.values()];\\n  normalizedInteractionEvents.sort((a, b) => b.dur - a.dur);\\n\\n  // INP is the \\\"nearest-rank\\\"/inverted_cdf 98th percentile, except Chrome only\\n  // keeps the 10 worst events around, so it can never be more than the 10th from\\n  // last array element. To keep things simpler, sort desc and pick from front.\\n  // See https://source.chromium.org/chromium/chromium/src/+/main:components/page_load_metrics/browser/responsiveness_metrics_normalization.cc;l=45-59;drc=cb0f9c8b559d9c7c3cb4ca94fc1118cc015d38ad\\n  const highPercentileIndex = Math.min(9, Math.floor(normalizedInteractionEvents.length / 50));\\n\\n  return {\\n    longestInteractionEvent: normalizedInteractionEvents[0],\\n    highPercentileInteractionEvent: normalizedInteractionEvents[highPercentileIndex],\\n  };\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);