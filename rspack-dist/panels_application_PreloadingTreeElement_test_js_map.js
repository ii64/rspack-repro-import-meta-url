(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_PreloadingTreeElement_test_js_map"], {
"./panels/application/PreloadingTreeElement.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"PreloadingTreeElement.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/application/PreloadingTreeElement.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,EAAC,YAAY,EAAC,MAAM,qCAAqC,CAAC;AACjE,OAAO,EAAC,0BAA0B,EAAC,MAAM,iCAAiC,CAAC;AAG3E,OAAO,KAAK,WAAW,MAAM,kBAAkB,CAAC;AAEhD,0BAA0B,CAAC,uBAAuB,EAAE,GAAG,EAAE;IACvD,EAAE,CAAC,2DAA2D,EAAE,GAAG,EAAE;QACnE,MAAM,MAAM,GAAG,YAAY,EAAE,CAAC;QAC9B,MAAM,KAAK,GAAG,MAAM,CAAC,KAAK,CAAC,GAAG,CAAC,eAAe,CAAC,eAAe,CAAC,CAAC;QAChE,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC;QAErB,MAAM,GAAG,GAAG,KAAK,CAAC,GAAG,EAAE,CAAC;QACxB,MAAM,KAAK,GAAG;YACZ,QAAQ,EAAE,GAAG;SACwC,CAAC;QACxD,MAAM,4BAA4B,GAAG,IAAI,WAAW,CAAC,qBAAqB,CAAC,4BAA4B,CAAC,KAAK,CAAC,CAAC;QAE/G,4BAA4B,CAAC,QAAQ,CAAC,KAAK,CAAC,CAAC;QAC7C,MAAM,CAAC,MAAM,CAAC,GAAG,CAAC,SAAS,CAAC,CAAC;QAE7B,4BAA4B,CAAC,UAAU,CAAC,KAAK,CAAC,CAAC;QAC/C,MAAM,CAAC,MAAM,CAAC,GAAG,CAAC,UAAU,CAAC,CAAC;IAChC,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport {createTarget} from '../../testing/EnvironmentHelpers.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\n\\nimport type * as Resources from './application.js';\\nimport * as Application from './application.js';\\n\\ndescribeWithMockConnection('PreloadingTreeElement', () => {\\n  it('shows view even if initialization happens after selection', () => {\\n    const target = createTarget();\\n    const model = target.model(SDK.PreloadingModel.PreloadingModel);\\n    assert.exists(model);\\n\\n    const spy = sinon.spy();\\n    const panel = {\\n      showView: spy,\\n    } as unknown as Resources.ResourcesPanel.ResourcesPanel;\\n    const preloadingRuleSetTreeElement = new Application.PreloadingTreeElement.PreloadingRuleSetTreeElement(panel);\\n\\n    preloadingRuleSetTreeElement.onselect(false);\\n    assert.isTrue(spy.notCalled);\\n\\n    preloadingRuleSetTreeElement.initialize(model);\\n    assert.isTrue(spy.calledOnce);\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);