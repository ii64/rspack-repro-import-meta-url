(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_extras_Metadata_js_map"], {
"./models/trace/extras/Metadata.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Metadata.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/models/trace/extras/Metadata.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,0BAA0B,CAAC;AAChD,OAAO,KAAK,KAAK,MAAM,mBAAmB,CAAC;AAE3C,MAAM,CAAC,KAAK,UAAU,eAAe,CAAC,YAAqB,EAAE,eAAwB;IACnF,IAAI,CAAC;QACH,IAAI,YAAY,EAAE,CAAC;YACjB,4CAA4C;YAC5C,OAAO;gBACL,UAAU,qDAAkC;aAC7C,CAAC;QACJ,CAAC;QACD,MAAM,oBAAoB,GAAG,GAAG,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,QAAQ,EAAE,CAAC;QAEtF,wEAAwE;QACxE,yEAAyE;QACzE,yEAAyE;QACzE,wEAAwE;QACxE,mEAAmE;QACnE,+CAA+C;QAC/C,2EAA2E;QAC3E,wEAAwE;QACxE,wBAAwB;QACxB,SAAS,uBAAuB;YAC9B,OAAO,OAAO,CAAC,IAAI,CAAC;gBAClB,GAAG,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,QAAQ,EAAE,CAAC,sBAAsB,EAAE;gBACjF,IAAI,OAAO,CAAY,OAAO,CAAC,EAAE;oBAC/B,UAAU,CAAC,GAAG,EAAE,CAAC,OAAO,CAAC,SAAS,CAAC,EAAE,KAAK,CAAC,CAAC;gBAC9C,CAAC,CAAC;aACH,CAAC,CAAC;QACL,CAAC;QAED,MAAM,mBAAmB,GACrB,oBAAoB,CAAC,uBAAuB,EAAE,CAAC,CAAC,CAAC,MAAM,uBAAuB,EAAE,CAAC,CAAC,CAAC,SAAS,CAAC;QACjG,MAAM,aAAa,GAAG,GAAG,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,QAAQ,EAAE,CAAC,iBAAiB,EAAE,CAAC;QACnG,MAAM,iBAAiB,GAAG,GAAG,CAAC,cAAc,CAAC,yBAAyB,CAAC,QAAQ,EAAE,CAAC,iBAAiB,EAAE,CAAC;QACtG,MAAM,YAAY,GACd,OAAO,iBAAiB,CAAC,KAAK,KAAK,UAAU,CAAC,CAAC,CAAC,iBAAiB,CAAC,KAAK,EAAE,CAAC,CAAC,CAAC,iBAAiB,CAAC,KAAK,CAAC;QAExG,OAAO;YACL,MAAM,EAAE,UAAU;YAClB,SAAS,EAAE,eAAe,CAAC,CAAC,CAAC,IAAI,IAAI,CAAC,eAAe,CAAC,CAAC,MAAM,EAAE,CAAC,CAAC,CAAC,SAAS,EAAG,qBAAqB;YACnG,aAAa;YACb,iBAAiB,EAAE,YAAY;YAC/B,mBAAmB;YACnB,UAAU,uDAAmC;SAC9C,CAAC;IACJ,CAAC;IAAC,MAAM,CAAC;QACP,2EAA2E;QAC3E,yEAAyE;QACzE,gEAAgE;QAChE,OAAO,EAAE,CAAC;IACZ,CAAC;AACH,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../../core/sdk/sdk.js';\\nimport * as Types from '../types/types.js';\\n\\nexport async function forNewRecording(isCpuProfile: boolean, recordStartTime?: number): Promise<Types.File.MetaData> {\\n  try {\\n    if (isCpuProfile) {\\n      // For CPU profile, only specify data origin\\n      return {\\n        dataOrigin: Types.File.DataOrigin.CPUProfile,\\n      };\\n    }\\n    const cpuThrottlingManager = SDK.CPUThrottlingManager.CPUThrottlingManager.instance();\\n\\n    // If the CPU Throttling manager has yet to have its primary page target\\n    // set, it will block on the call to get the current hardware concurrency\\n    // until it does. At this point where the user has recorded a trace, that\\n    // target should have been set. So if it doesn't have it set, we instead\\n    // just bail and don't store the hardware concurrency (this is only\\n    // metadata, not mission critical information).\\n    // We also race this call against a 1s timeout, because sometimes this call\\n    // can hang (unsure exactly why) and we do not want to block parsing for\\n    // too long as a result.\\n    function getConcurrencyOrTimeout(): Promise<number|undefined> {\\n      return Promise.race([\\n        SDK.CPUThrottlingManager.CPUThrottlingManager.instance().getHardwareConcurrency(),\\n        new Promise<undefined>(resolve => {\\n          setTimeout(() => resolve(undefined), 1_000);\\n        }),\\n      ]);\\n    }\\n\\n    const hardwareConcurrency =\\n        cpuThrottlingManager.hasPrimaryPageTargetSet() ? await getConcurrencyOrTimeout() : undefined;\\n    const cpuThrottling = SDK.CPUThrottlingManager.CPUThrottlingManager.instance().cpuThrottlingRate();\\n    const networkConditions = SDK.NetworkManager.MultitargetNetworkManager.instance().networkConditions();\\n    const networkTitle =\\n        typeof networkConditions.title === 'function' ? networkConditions.title() : networkConditions.title;\\n\\n    return {\\n      source: 'DevTools',\\n      startTime: recordStartTime ? new Date(recordStartTime).toJSON() : undefined,  // ISO-8601 timestamp\\n      cpuThrottling,\\n      networkThrottling: networkTitle,\\n      hardwareConcurrency,\\n      dataOrigin: Types.File.DataOrigin.TraceEvents,\\n    };\\n  } catch {\\n    // If anything went wrong, it does not really matter. The impact is that we\\n    // will not save the metadata when we save the trace to disk, but that is\\n    // not really important, so just return empty object and move on\\n    return {};\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);