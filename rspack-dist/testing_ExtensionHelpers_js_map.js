(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_ExtensionHelpers_js_map"], {
"./testing/ExtensionHelpers.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"ExtensionHelpers.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../front_end/testing/ExtensionHelpers.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,IAAI,MAAM,sBAAsB,CAAC;AAC7C,OAAO,KAAK,UAAU,MAAM,oCAAoC,CAAC;AAEjE,OAAO,EAAC,uBAAuB,EAAE,mBAAmB,EAAC,MAAM,yBAAyB,CAAC;AACrF,OAAO,EAAC,0BAA0B,EAAC,MAAM,qBAAqB,CAAC;AAO/D,MAAM,UAAU,kBAAkB;IAChC,OAAO,MAAM,CAAC,QAAQ,CAAC,MAAM,CAAC;AAChC,CAAC;AAED,MAAM,UAAU,6BAA6B,CACzC,KAAa,EAAE,SAAqE,EACpF,EAA0D;IAC5D,MAAM,mBAAmB,GAAG;QAC1B,SAAS,EAAE,GAAG,kBAAkB,EAAE,aAAa;QAC/C,IAAI,EAAE,eAAe;QACrB,sBAAsB,EAAE,IAAI;QAC5B,eAAe,EAAE,KAAK;QACtB,GAAG,SAAS;KACb,CAAC;IACF,MAAM,OAAO,GAAqB;QAChC,mBAAmB;QACnB,MAAM,EAAE,EAAE;KACX,CAAC;IAEF,SAAS,KAAK;QACZ,MAAM,MAAM,GAAG,UAAU,CAAC,eAAe,CAAC,eAAe,CAAC,QAAQ,CAAC,EAAC,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;QACrF,KAAK,CAAC,IAAI,CAAC,MAAM,EAAE,mBAAmB,CAAC,CAAC;QAExC,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,qBAAqB,CAAC,6BAA6B,EAAE,4BAA4B,CAAC;aAC7F,SAAS,CAAC,CAAC,MAAM,EAAE,OAAO,EAAE,EAAE;YAC7B,IAAI,MAAM,KAAK,kBAAkB,EAAE,EAAE,CAAC;gBACpC,MAAM,MAAM,GAAoC,EAAE,CAAC;gBAClD,MAAqD,CAAC,MAAM,GAAG,MAAM,CAAC;gBACvE,IAAI,CAAC,oBAAoB,CAAC,mBAAmB,EAAE,MAAM,EAAE,MAAM,EAAE,EAAE,EAAE,GAAG,EAAE,GAAE,CAAC,EAAE,CAAC,EAAE,MAAM,CAAC,CAAC;gBACxF,OAAO,CAAC,MAAM,GAAG,MAAM,CAAC;YAC1B,CAAC;QACH,CAAC,CAAC,CAAC;QACP,MAAM,CAAC,YAAY,CAAC,mBAAmB,CAAC,CAAC;IAC3C,CAAC;IAED,SAAS,OAAO;QACd,MAAM,MAAM,GAAoC,EAAE,CAAC;QAClD,MAAqD,CAAC,MAAM,GAAG,MAAM,CAAC;QACvE,OAAO,CAAC,MAAM,GAAG,MAAM,CAAC;IAC1B,CAAC;IAED,OAAO,0BAA0B,CAAC,kBAAkB,KAAK,EAAE,EAAE;QAC3D,UAAU,CAAC,OAAO,CAAC,CAAC;QACpB,UAAU,CAAC,KAAK,CAAC,CAAC;QAClB,SAAS,CAAC,OAAO,CAAC,CAAC;QAEnB,uBAAuB,CAAC,KAAK,EAAE;YAC7B,mBAAmB,EAAE,CAAC;YACtB,EAAE,CAAC,IAAI,CAAC,IAAI,EAAE,OAAO,CAAC,CAAC;QACzB,CAAC,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC;AAED,6BAA6B,CAAC,IAAI,GAAG,UACjC,KAAa,EAAE,SAAqE,EACpF,EAA0D;IAC5D,oDAAoD;IACpD,OAAO,QAAQ,CAAC,IAAI,CAAC,OAAO,EAAE;QAC5B,OAAO,6BAA6B,CAAC,KAAK,EAAE,SAAS,EAAE,EAAE,CAAC,CAAC;IAC7D,CAAC,CAAC,CAAC;AACL,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type Chrome} from '../../extension-api/ExtensionAPI.js';\\nimport * as Host from '../core/host/host.js';\\nimport * as Extensions from '../models/extensions/extensions.js';\\n\\nimport {describeWithEnvironment, setupActionRegistry} from './EnvironmentHelpers.js';\\nimport {describeWithMockConnection} from './MockConnection.js';\\n\\ninterface ExtensionContext {\\n  chrome: Partial<Chrome.DevTools.Chrome>;\\n  extensionDescriptor: Extensions.ExtensionAPI.ExtensionDescriptor;\\n}\\n\\nexport function getExtensionOrigin() {\\n  return window.location.origin;\\n}\\n\\nexport function describeWithDevtoolsExtension(\\n    title: string, extension: Partial<Host.InspectorFrontendHostAPI.ExtensionDescriptor>,\\n    fn: (this: Mocha.Suite, context: ExtensionContext) => void) {\\n  const extensionDescriptor = {\\n    startPage: `${getExtensionOrigin()}/blank.html`,\\n    name: 'TestExtension',\\n    exposeExperimentalAPIs: true,\\n    allowFileAccess: false,\\n    ...extension,\\n  };\\n  const context: ExtensionContext = {\\n    extensionDescriptor,\\n    chrome: {},\\n  };\\n\\n  function setup() {\\n    const server = Extensions.ExtensionServer.ExtensionServer.instance({forceNew: true});\\n    sinon.stub(server, 'addExtensionFrame');\\n\\n    sinon.stub(Host.InspectorFrontendHost.InspectorFrontendHostInstance, 'setInjectedScriptForOrigin')\\n        .callsFake((origin, _script) => {\\n          if (origin === getExtensionOrigin()) {\\n            const chrome: Partial<Chrome.DevTools.Chrome> = {};\\n            (window as {chrome?: Partial<Chrome.DevTools.Chrome>}).chrome = chrome;\\n            self.injectedExtensionAPI(extensionDescriptor, 'main', 'dark', [], () => {}, 1, window);\\n            context.chrome = chrome;\\n          }\\n        });\\n    server.addExtension(extensionDescriptor);\\n  }\\n\\n  function cleanup() {\\n    const chrome: Partial<Chrome.DevTools.Chrome> = {};\\n    (window as {chrome?: Partial<Chrome.DevTools.Chrome>}).chrome = chrome;\\n    context.chrome = chrome;\\n  }\\n\\n  return describeWithMockConnection(`with-extension-${title}`, function() {\\n    beforeEach(cleanup);\\n    beforeEach(setup);\\n    afterEach(cleanup);\\n\\n    describeWithEnvironment(title, function() {\\n      setupActionRegistry();\\n      fn.call(this, context);\\n    });\\n  });\\n}\\n\\ndescribeWithDevtoolsExtension.only = function(\\n    title: string, extension: Partial<Host.InspectorFrontendHostAPI.ExtensionDescriptor>,\\n    fn: (this: Mocha.Suite, context: ExtensionContext) => void) {\\n  // eslint-disable-next-line mocha/no-exclusive-tests\\n  return describe.only('.only', function() {\\n    return describeWithDevtoolsExtension(title, extension, fn);\\n  });\\n};\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);