(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseController_test_js_map"], {
"./panels/lighthouse/LighthouseController.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"LighthouseController.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/lighthouse/LighthouseController.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,EAAC,YAAY,EAAE,gBAAgB,EAAC,MAAM,qCAAqC,CAAC;AACnF,OAAO,EAAC,0BAA0B,EAAC,MAAM,iCAAiC,CAAC;AAI3E,0BAA0B,CAAC,sBAAsB,EAAE,GAAG,EAAE;IACtD,gEAAgE;IAChE,IAAI,UAAmC,CAAC;IACxC,IAAI,MAAyB,CAAC;IAE9B,UAAU,CAAC,KAAK,IAAI,EAAE;QACpB,gBAAgB,EAAE,CAAC;QACnB,UAAU,GAAG,MAAM,MAAM,CAAC,iBAAiB,CAAC,CAAC;QAC7C,MAAM,SAAS,GAAG,YAAY,CAAC,EAAC,IAAI,EAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,EAAC,CAAC,CAAC;QAC5D,YAAY,CAAC,EAAC,YAAY,EAAE,SAAS,EAAE,OAAO,EAAE,WAAW,EAAC,CAAC,CAAC;QAC9D,MAAM,GAAG,YAAY,CAAC,EAAC,YAAY,EAAE,SAAS,EAAC,CAAC,CAAC;IACnD,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,yDAAyD,EAAE,KAAK,IAAI,EAAE;QACvE,MAAM,UAAU,GAAG,IAAI,UAAU,CAAC,oBAAoB,CAAC,oBAAoB,CACvE,KAAK,CAAC,kBAAkB,CAAC,UAAU,CAAC,yBAAyB,CAAC,eAAe,CAAC,CAAC,CAAC;QACpF,MAAM,oBAAoB,GAAG,MAAM,CAAC,KAAK,CAAC,GAAG,CAAC,oBAAoB,CAAC,oBAAoB,CAAC,CAAC;QACzF,MAAM,CAAC,MAAM,CAAC,oBAAoB,CAAC,CAAC;QACpC,MAAM,sBAAsB,GAAG,UAAU,CAAC,IAAI,CAAC,UAAU,CAAC,oBAAoB,CAAC,MAAM,CAAC,uBAAuB,CAAC,CAAC;QAC/G,oBAAoB,CAAC,wBAAwB,kFACY,EAAwD,CAAC,CAAC;QACnH,MAAM,sBAAsB,CAAC;IAC/B,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport {createTarget, stubNoopSettings} from '../../testing/EnvironmentHelpers.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\n\\nimport type * as LighthouseModule from './lighthouse.js';\\n\\ndescribeWithMockConnection('LighthouseController', () => {\\n  // eslint-disable-next-line @typescript-eslint/naming-convention\\n  let Lighthouse: typeof LighthouseModule;\\n  let target: SDK.Target.Target;\\n\\n  beforeEach(async () => {\\n    stubNoopSettings();\\n    Lighthouse = await import('./lighthouse.js');\\n    const tabTarget = createTarget({type: SDK.Target.Type.Tab});\\n    createTarget({parentTarget: tabTarget, subtype: 'prerender'});\\n    target = createTarget({parentTarget: tabTarget});\\n  });\\n\\n  it('updates page auditability on service worker registraion', async () => {\\n    const controller = new Lighthouse.LighthouseController.LighthouseController(\\n        sinon.createStubInstance(Lighthouse.LighthouseProtocolService.ProtocolService));\\n    const serviceWorkerManager = target.model(SDK.ServiceWorkerManager.ServiceWorkerManager);\\n    assert.exists(serviceWorkerManager);\\n    const pageAuditabilityChange = controller.once(Lighthouse.LighthouseController.Events.PageAuditabilityChanged);\\n    serviceWorkerManager.dispatchEventToListeners(\\n        SDK.ServiceWorkerManager.Events.RegistrationUpdated, {} as SDK.ServiceWorkerManager.ServiceWorkerRegistration);\\n    await pageAuditabilityChange;\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);