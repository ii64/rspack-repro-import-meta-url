(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_SchemaUtils_test_js_map"], {
"./panels/recorder/models/SchemaUtils.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"SchemaUtils.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/models/SchemaUtils.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,aAAa,CAAC;AAEtC,QAAQ,CAAC,aAAa,EAAE,GAAG,EAAE;IAC3B,EAAE,CAAC,+BAA+B,EAAE,GAAG,EAAE;QACvC,MAAM,EAAC,iBAAiB,EAAC,GAAG,MAAM,CAAC,WAAW,CAAC;QAC/C,MAAM,CAAC,MAAM,CACT,iBAAiB,CACb,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAC,EACrC,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAC,CACpC,CACR,CAAC;QACF,MAAM,CAAC,OAAO,CACV,iBAAiB,CACb,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAE,SAAS,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,EAAC,EAC3D,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAC,CACpC,CACR,CAAC;QACF,MAAM,CAAC,MAAM,CACT,iBAAiB,CACb,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAE,SAAS,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,EAAC,EAC3D,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAE,SAAS,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,EAAC,CAC1D,CACR,CAAC;QACF,MAAM,CAAC,OAAO,CACV,iBAAiB,CACb,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAE,SAAS,EAAE,CAAC,CAAC,KAAK,EAAE,MAAM,CAAC,CAAC,EAAC,EACnE,EAAC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAE,SAAS,EAAE,CAAC,CAAC,KAAK,CAAC,CAAC,EAAC,CAC1D,CACR,CAAC;IACJ,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Models from './models.js';\\n\\ndescribe('SchemaUtils', () => {\\n  it('should compare step selectors', () => {\\n    const {areSelectorsEqual} = Models.SchemaUtils;\\n    assert.isTrue(\\n        areSelectorsEqual(\\n            {type: Models.Schema.StepType.Scroll},\\n            {type: Models.Schema.StepType.Scroll},\\n            ),\\n    );\\n    assert.isFalse(\\n        areSelectorsEqual(\\n            {type: Models.Schema.StepType.Scroll, selectors: [['#id']]},\\n            {type: Models.Schema.StepType.Scroll},\\n            ),\\n    );\\n    assert.isTrue(\\n        areSelectorsEqual(\\n            {type: Models.Schema.StepType.Scroll, selectors: [['#id']]},\\n            {type: Models.Schema.StepType.Scroll, selectors: [['#id']]},\\n            ),\\n    );\\n    assert.isFalse(\\n        areSelectorsEqual(\\n            {type: Models.Schema.StepType.Scroll, selectors: [['#id', '#id2']]},\\n            {type: Models.Schema.StepType.Scroll, selectors: [['#id']]},\\n            ),\\n    );\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);