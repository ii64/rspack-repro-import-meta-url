(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_ExpectStubCall_js_map"], {
"./testing/ExpectStubCall.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"ExpectStubCall.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/ExpectStubCall.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,8DAA8D;AAC9D,MAAM,UAAU,UAAU,CACtB,IAA0C,EAC1C,UAA2E,EAAE;IAC/E,OAAO,IAAI,OAAO,CAAQ,OAAO,CAAC,EAAE;QAClC,8DAA8D;QAC9D,IAAI,CAAC,SAAS,CAAC,UAAoB,GAAG,IAAW;YAC/C,IAAI,IAAI,CAAC,SAAS,GAAG,CAAC,OAAO,CAAC,SAAS,IAAI,CAAC,CAAC,EAAE,CAAC;gBAC9C,OAAO,SAAyB,CAAC;YACnC,CAAC;YACD,OAAO,CAAC,IAAI,CAAC,CAAC;YACd,OAAO,CAAC,OAAO,CAAC,MAAM,CAAC,CAAC,CAAC,OAAO,CAAC,MAAM,CAAC,KAAK,CAAC,IAAI,EAAE,IAAI,CAAC,CAAC,CAAC,CAAC,SAAS,CAAiB,CAAC;QACzF,CAAC,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC;AAED,8DAA8D;AAC9D,MAAM,UAAU,YAAY,CACxB,IAA0C,EAC1C,UAA2E,EAAE;IAC/E,MAAM,cAAc,GAAG,CAAC,OAAO,CAAC,SAAS,IAAI,CAAC,CAAC,GAAG,IAAI,CAAC,SAAS,CAAC;IACjE,IAAI,cAAc,IAAI,CAAC,EAAE,CAAC;QACxB,OAAO,OAAO,CAAC,OAAO,CAAC,IAAI,CAAC,QAAQ,CAAC,IAAI,CAAC,CAAC;IAC7C,CAAC;IACD,OAAO,UAAU,CAAC,IAAI,EAAE,EAAC,GAAG,OAAO,EAAE,SAAS,EAAE,cAAc,EAAC,CAAC,CAAC;AACnE,CAAC\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\\nexport function expectCall<TArgs extends any[] = any[], TReturnValue = any>(\\n    stub: sinon.SinonStub<TArgs, TReturnValue>,\\n    options: {fakeFn?: (...args: TArgs) => TReturnValue, callCount?: number} = {}): Promise<TArgs> {\\n  return new Promise<TArgs>(resolve => {\\n    // eslint-disable-next-line @typescript-eslint/no-explicit-any\\n    stub.callsFake(function(this: any, ...args: TArgs) {\\n      if (stub.callCount < (options.callCount ?? 1)) {\\n        return undefined as TReturnValue;\\n      }\\n      resolve(args);\\n      return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined) as TReturnValue;\\n    });\\n  });\\n}\\n\\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\\nexport function expectCalled<TArgs extends any[] = any[], TReturnValue = any>(\\n    stub: sinon.SinonStub<TArgs, TReturnValue>,\\n    options: {fakeFn?: (...args: TArgs) => TReturnValue, callCount?: number} = {}): Promise<TArgs> {\\n  const remainingCalls = (options.callCount ?? 1) - stub.callCount;\\n  if (remainingCalls <= 0) {\\n    return Promise.resolve(stub.lastCall.args);\\n  }\\n  return expectCall(stub, {...options, callCount: remainingCalls});\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);