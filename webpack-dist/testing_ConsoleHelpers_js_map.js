(self["webpackChunk"] = self["webpackChunk"] || []).push([["testing_ConsoleHelpers_js_map"],{

/***/ "./testing/ConsoleHelpers.js.map":
/*!***************************************!*\
  !*** ./testing/ConsoleHelpers.js.map ***!
  \***************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ConsoleHelpers.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/ConsoleHelpers.ts\"],\"names\":[],\"mappings\":\"AAKA,OAAO,KAAK,aAAa,MAAM,4CAA4C,CAAC;AAC5E,OAAO,KAAK,IAAI,MAAM,wBAAwB,CAAC;AAC/C,OAAO,KAAK,OAAO,MAAM,8BAA8B,CAAC;AACxD,OAAO,KAAK,UAAU,MAAM,wCAAwC,CAAC;AAErE,MAAM,UAAU,oCAAoC,CAAC,UAA2C;IAC9F,MAAM,SAAS,GAAG,KAAK,CAAC,kBAAkB,CAAC,UAAU,CAAC,SAAS,CAAC,SAAS,CAAC,CAAC;IAC3E,MAAM,eAAe,GAAG,KAAK,CAAC,kBAAkB,CAAC,IAAI,CAAC,eAAe,CAAC,eAAe,CAAC,CAAC;IACvF,MAAM,cAAc,GAAG,KAAK,CAAC,kBAAkB,CAAC,aAAa,CAAC,aAAa,CAAC,aAAa,CAAC,CAAC;IAC3F,MAAM,OAAO,GAAG,IAAI,OAAO,CAAC,kBAAkB,CAAC,kBAAkB,CAC7D,UAAU,EAAE,SAAS,EAAE,eAAe,EAAE,cAAc,EAAE,cAAc,CAAC,GAAG,EAAE,GAAE,CAAC,CAAC,CAAC;IACrF,OAAO,EAAC,OAAO,EAAE,SAAS,EAAC,CAAC;AAC9B,CAAC;AAED;;;;;GAKG;AACH,MAAM,UAAU,gBAAgB,CAAC,qBAA+B;IAC9D,MAAM,UAAU,GAAiC,qBAAqB,CAAC,GAAG,CAAC,UAAU,CAAC,EAAE;QACtF,MAAM,MAAM,GAAG,UAAU,CAAC,KAAK,CAAC,IAAI,CAAC,CAAC;QACtC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAE,CAAC,CAAC,CAAC;QAC3B,OAAO;YACL,QAAQ,EAAE,MAAM,CAAC,CAAC,CAA8B;YAChD,YAAY,EAAE,MAAM,CAAC,CAAC,CAAC;YACvB,GAAG,EAAE,MAAM,CAAC,CAAC,CAAC;YACd,UAAU,EAAE,MAAM,CAAC,QAAQ,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC;YAC1C,YAAY,EAAE,MAAM,CAAC,QAAQ,CAAC,MAAM,CAAC,CAAC,CAAC,EAAE,EAAE,CAAC;SAC7C,CAAC;IACJ,CAAC,CAAC,CAAC;IACH,OAAO,EAAC,UAAU,EAAC,CAAC;AACtB,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport type * as SDK from '../core/sdk/sdk.js';\\nimport type * as Protocol from '../generated/protocol.js';\\nimport * as IssuesManager from '../models/issues_manager/issues_manager.js';\\nimport * as Logs from '../models/logs/logs.js';\\nimport * as Console from '../panels/console/console.js';\\nimport * as Components from '../ui/legacy/components/utils/utils.js';\\n\\nexport function createConsoleViewMessageWithStubDeps(rawMessage: SDK.ConsoleModel.ConsoleMessage) {\\n  const linkifier = sinon.createStubInstance(Components.Linkifier.Linkifier);\\n  const requestResolver = sinon.createStubInstance(Logs.RequestResolver.RequestResolver);\\n  const issuesResolver = sinon.createStubInstance(IssuesManager.IssueResolver.IssueResolver);\\n  const message = new Console.ConsoleViewMessage.ConsoleViewMessage(\\n      rawMessage, linkifier, requestResolver, issuesResolver, /* onResize */ () => {});\\n  return {message, linkifier};\\n}\\n\\n/**\\n * Helper for less verbose stack traces in test code. Pass stack traces with the\\n * following format:\\n *\\n * \\\"<scriptId>::<functionName>::<url>::<lineNumber>::<columnNumber>\\\"\\n */\\nexport function createStackTrace(callFrameDescriptions: string[]): Protocol.Runtime.StackTrace {\\n  const callFrames: Protocol.Runtime.CallFrame[] = callFrameDescriptions.map(descriptor => {\\n    const fields = descriptor.split('::');\\n    assert.lengthOf(fields, 5);\\n    return {\\n      scriptId: fields[0] as Protocol.Runtime.ScriptId,\\n      functionName: fields[1],\\n      url: fields[2],\\n      lineNumber: Number.parseInt(fields[3], 10),\\n      columnNumber: Number.parseInt(fields[4], 10),\\n    };\\n  });\\n  return {callFrames};\\n}\\n\"]}");

/***/ })

}]);