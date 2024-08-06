(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_live-metrics_web-vitals-injected_OnEachInteraction_js_map"], {
"./models/live-metrics/web-vitals-injected/OnEachInteraction.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"OnEachInteraction.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/live-metrics/web-vitals-injected/OnEachInteraction.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAqB7B,MAAM,UAAU,iBAAiB,CAAC,QAA2D;IAC3F,MAAM,aAAa,GAAG,IAAI,mBAAmB,CAAC,IAAI,CAAC,EAAE;QACnD,MAAM,OAAO,GAAG,IAAI,CAAC,UAAU,EAAE,CAAC;QAClC,MAAM,YAAY,GAAG,IAAI,GAAG,EAAoC,CAAC;QAEjE,MAAM,uBAAuB,GAAG,OAAO,CAAC,MAAM,CAAC,CAAC,KAAK,EAAmC,EAAE,CAAC,eAAe,IAAI,KAAK,CAAC;aAC/E,MAAM,CAAC,KAAK,CAAC,EAAE,CAAC,KAAK,CAAC,aAAa,CAAC,CAAC;QAE1E,KAAK,MAAM,KAAK,IAAI,uBAAuB,EAAE,CAAC;YAC5C,MAAM,WAAW,GAAG,YAAY,CAAC,GAAG,CAAC,KAAK,CAAC,aAAa,CAAC,IAAI,EAAE,CAAC;YAChE,WAAW,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC;YACxB,YAAY,CAAC,GAAG,CAAC,KAAK,CAAC,aAAa,EAAE,WAAW,CAAC,CAAC;QACrD,CAAC;QAED,4EAA4E;QAC5E,yCAAyC;QACzC,KAAK,MAAM,CAAC,aAAa,EAAE,WAAW,CAAC,IAAI,YAAY,CAAC,OAAO,EAAE,EAAE,CAAC;YAClE,MAAM,YAAY,GAAG,WAAW,CAAC,MAAM,CAAC,CAAC,IAAI,EAAE,IAAI,EAAE,EAAE,CAAC,IAAI,CAAC,QAAQ,IAAI,IAAI,CAAC,QAAQ,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC;YACtG,MAAM,KAAK,GAAG,YAAY,CAAC,QAAQ,CAAC;YAEpC,MAAM,oBAAoB,GAAG,WAAW,CAAC,IAAI,CAAC,KAAK,CAAC,EAAE,CAAC,KAAK,CAAC,MAAM,CAAC,CAAC;YAErE,QAAQ,CAAC;gBACP,WAAW,EAAE;oBACX,wBAAwB,EAAE,oBAAoB,EAAE,MAAM,IAAI,IAAI;oBAC9D,eAAe,EAAE,YAAY,CAAC,SAAS;oBACvC,eAAe,EAAE,YAAY,CAAC,IAAI,CAAC,UAAU,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC,SAAS;oBAC7E,aAAa;iBACd;gBACD,OAAO,EAAE,WAAW;gBACpB,KAAK;aACN,CAAC,CAAC;QACL,CAAC;IACH,CAAC,CAAC,CAAC;IAEH,aAAa,CAAC,OAAO,CAAC;QACpB,IAAI,EAAE,aAAa;QACnB,QAAQ,EAAE,IAAI;KACf,CAAC,CAAC;IAEH,aAAa,CAAC,OAAO,CAAC;QACpB,IAAI,EAAE,OAAO;QACb,iBAAiB,EAAE,CAAC;QACpB,QAAQ,EAAE,IAAI;KACf,CAAC,CAAC;AACL,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n/**\\n * @fileoverview web-vitals.js doesn't provide a log of all interactions.\\n * This was largely copied from the web vitals extension:\\n * https://github.com/GoogleChrome/web-vitals-extension/blob/main/src/browser_action/on-each-interaction.js\\n */\\n\\nimport type * as WebVitals from '../../../third_party/web-vitals/web-vitals.js';\\n\\nexport interface InteractionWithAttribution {\\n  attribution: {\\n    interactionTargetElement: Node|null,\\n    interactionTime: number,\\n    interactionType: WebVitals.INPAttribution['interactionType'],\\n    interactionId: number,\\n  };\\n  entries: PerformanceEntry[];\\n  value: number;\\n}\\n\\nexport function onEachInteraction(callback: (interaction: InteractionWithAttribution) => void): void {\\n  const eventObserver = new PerformanceObserver(list => {\\n    const entries = list.getEntries();\\n    const interactions = new Map<number, PerformanceEventTiming[]>();\\n\\n    const performanceEventTimings = entries.filter((entry): entry is PerformanceEventTiming => 'interactionId' in entry)\\n                                        .filter(entry => entry.interactionId);\\n\\n    for (const entry of performanceEventTimings) {\\n      const interaction = interactions.get(entry.interactionId) || [];\\n      interaction.push(entry);\\n      interactions.set(entry.interactionId, interaction);\\n    }\\n\\n    // Will report as a single interaction even if parts are in separate frames.\\n    // Consider splitting by animation frame.\\n    for (const [interactionId, interaction] of interactions.entries()) {\\n      const longestEntry = interaction.reduce((prev, curr) => prev.duration >= curr.duration ? prev : curr);\\n      const value = longestEntry.duration;\\n\\n      const firstEntryWithTarget = interaction.find(entry => entry.target);\\n\\n      callback({\\n        attribution: {\\n          interactionTargetElement: firstEntryWithTarget?.target ?? null,\\n          interactionTime: longestEntry.startTime,\\n          interactionType: longestEntry.name.startsWith('key') ? 'keyboard' : 'pointer',\\n          interactionId,\\n        },\\n        entries: interaction,\\n        value,\\n      });\\n    }\\n  });\\n\\n  eventObserver.observe({\\n    type: 'first-input',\\n    buffered: true,\\n  });\\n\\n  eventObserver.observe({\\n    type: 'event',\\n    durationThreshold: 0,\\n    buffered: true,\\n  });\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);