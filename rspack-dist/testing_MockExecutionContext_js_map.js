(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_MockExecutionContext_js_map"], {
"./testing/MockExecutionContext.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"MockExecutionContext.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/MockExecutionContext.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,EAAC,wBAAwB,EAAC,MAAM,8BAA8B,CAAC;AACtE,OAAO,KAAK,GAAG,MAAM,oBAAoB,CAAC;AAG1C,MAAM,OAAO,oBAAqB,SAAQ,GAAG,CAAC,YAAY,CAAC,gBAAgB;IACzE,YAAY,MAAyB;QACnC,MAAM,YAAY,GAAG,MAAM,CAAC,KAAK,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,CAAC;QACjE,wBAAwB,CAAC,YAAY,CAAC,CAAC;QACvC,KAAK,CACD,YAAY,EAAE,CAAwC,EAAE,SAAS,EAAE,WAAW,EAC9E,aAAgD,EAAE,IAAI,CAAC,CAAC;IAC9D,CAAC;IAEQ,KAAK,CAAC,QAAQ,CAAC,OAA2C,EAAE,WAAoB,EAAE,aAAsB;QAE/G,MAAM,CAAC,MAAM,CAAC,WAAW,CAAC,CAAC;QAC3B,OAAO,EAAC,KAAK,EAAE,MAAM,EAAC,CAAC;IACzB,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Platform from '../core/platform/platform.js';\\nimport {assertNotNullOrUndefined} from '../core/platform/platform.js';\\nimport * as SDK from '../core/sdk/sdk.js';\\nimport type * as Protocol from '../generated/protocol.js';\\n\\nexport class MockExecutionContext extends SDK.RuntimeModel.ExecutionContext {\\n  constructor(target: SDK.Target.Target) {\\n    const runtimeModel = target.model(SDK.RuntimeModel.RuntimeModel);\\n    assertNotNullOrUndefined(runtimeModel);\\n    super(\\n        runtimeModel, 1 as Protocol.Runtime.ExecutionContextId, 'test id', 'test name',\\n        'test origin' as Platform.DevToolsPath.UrlString, true);\\n  }\\n\\n  override async evaluate(options: SDK.RuntimeModel.EvaluationOptions, userGesture: boolean, _awaitPromise: boolean):\\n      Promise<SDK.RuntimeModel.EvaluationResult> {\\n    assert.isTrue(userGesture);\\n    return {error: 'test'};\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);