(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_perf_ui_GCActionDelegate_js_map"], {
"./ui/legacy/components/perf_ui/GCActionDelegate.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"GCActionDelegate.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/perf_ui/GCActionDelegate.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,6BAA6B,CAAC;AAGnD,MAAM,OAAO,gBAAgB;IAC3B,YAAY,CAAC,QAA4B,EAAE,SAAiB;QAC1D,KAAK,MAAM,iBAAiB,IAAI,GAAG,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,MAAM,CACxE,GAAG,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,EAAE,CAAC;YAClD,KAAK,iBAAiB,CAAC,cAAc,EAAE,CAAC;QAC1C,CAAC;QACD,OAAO,IAAI,CAAC;IACd,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2016 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../../../core/sdk/sdk.js';\\nimport type * as UI from '../../legacy.js';\\n\\nexport class GCActionDelegate implements UI.ActionRegistration.ActionDelegate {\\n  handleAction(_context: UI.Context.Context, _actionId: string): boolean {\\n    for (const heapProfilerModel of SDK.TargetManager.TargetManager.instance().models(\\n             SDK.HeapProfilerModel.HeapProfilerModel)) {\\n      void heapProfilerModel.collectGarbage();\\n    }\\n    return true;\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);