(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_visual_logging_Debugging_test_js_map"], {
"./ui/visual_logging/Debugging.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Debugging.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/visual_logging/Debugging.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,aAAa,MAAM,6BAA6B,CAAC;AAE7D,QAAQ,CAAC,eAAe,EAAE,GAAG,EAAE;IAC7B,EAAE,CAAC,uCAAuC,EAAE,KAAK,IAAI,EAAE;QACrD,aAAa;QACb,UAAU,CAAC,qBAAqB,CAAC,IAAI,CAAC,CAAC;QACvC,MAAM,OAAO,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAC9C,aAAa,CAAC,YAAY,CAAC,uBAAuB,CAAC,OAAO,EAAE,EAAC,EAAE,EAAE,CAAC,EAAC,CAAC,CAAC;QACrE,aAAa,CAAC,SAAS,CAAC,mBAAmB,CAAC,OAAO,CAAC,CAAC;QACrD,MAAM,CAAC,WAAW,CAAC,OAAO,CAAC,KAAK,CAAC,OAAO,EAAE,eAAe,CAAC,CAAC;IAC7D,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,uBAAuB,EAAE,GAAG,EAAE;QAC/B,MAAM,CAAC,WAAW,CAAC,aAAa,CAAC,SAAS,CAAC,WAAW,CAAC,EAAC,EAAE,EAAE,CAAC,EAAC,CAAC,EAAE,UAAU,CAAC,CAAC;QAC7E,MAAM,CAAC,WAAW,CAAC,aAAa,CAAC,SAAS,CAAC,WAAW,CAAC,EAAC,EAAE,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAC,CAAC,EAAE,uBAAuB,CAAC,CAAC;QACzG,MAAM,CAAC,WAAW,CAAC,aAAa,CAAC,SAAS,CAAC,WAAW,CAAC,EAAC,EAAE,EAAE,CAAC,EAAE,KAAK,EAAE,EAAC,KAAK,EAAE,IAAI,EAAC,EAAC,CAAC,EAAE,wBAAwB,CAAC,CAAC;QACjH,MAAM,CAAC,WAAW,CACd,aAAa,CAAC,SAAS,CAAC,WAAW,CAAC,EAAC,EAAE,EAAE,CAAC,EAAE,KAAK,EAAE,EAAC,KAAK,EAAE,IAAI,EAAE,MAAM,EAAE,IAAI,EAAC,EAAC,CAAC,EAChF,gCAAgC,CAAC,CAAC;QACtC,MAAM,CAAC,WAAW,CACd,aAAa,CAAC,SAAS,CAAC,WAAW,CAAC,EAAC,EAAE,EAAE,CAAC,EAAE,KAAK,EAAE,EAAC,OAAO,EAAE,OAAO,EAAC,EAAC,CAAC,EAAE,iCAAiC,CAAC,CAAC;QAChH,MAAM,CAAC,WAAW,CACd,aAAa,CAAC,SAAS,CAAC,WAAW,CAAC,EAAC,EAAE,EAAE,CAAC,EAAE,OAAO,EAAE,IAAI,EAAE,KAAK,EAAE,EAAC,OAAO,EAAE,OAAO,EAAC,EAAC,CAAC,EACtF,8CAA8C,CAAC,CAAC;IACtD,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as VisualLogging from './visual_logging-testing.js';\\n\\ndescribe('LoggingDriver', () => {\\n  it('marks loggable elements for debugging', async () => {\\n    // @ts-ignore\\n    globalThis.setVeDebuggingEnabled(true);\\n    const element = document.createElement('div');\\n    VisualLogging.LoggingState.getOrCreateLoggingState(element, {ve: 1});\\n    VisualLogging.Debugging.processForDebugging(element);\\n    assert.strictEqual(element.style.outline, 'red solid 1px');\\n  });\\n\\n  it('builds a debug string', () => {\\n    assert.strictEqual(VisualLogging.Debugging.debugString({ve: 1}), 'TreeItem');\\n    assert.strictEqual(VisualLogging.Debugging.debugString({ve: 1, context: '42'}), 'TreeItem; context: 42');\\n    assert.strictEqual(VisualLogging.Debugging.debugString({ve: 1, track: {click: true}}), 'TreeItem; track: click');\\n    assert.strictEqual(\\n        VisualLogging.Debugging.debugString({ve: 1, track: {click: true, change: true}}),\\n        'TreeItem; track: click, change');\\n    assert.strictEqual(\\n        VisualLogging.Debugging.debugString({ve: 1, track: {keydown: 'Enter'}}), 'TreeItem; track: keydown: Enter');\\n    assert.strictEqual(\\n        VisualLogging.Debugging.debugString({ve: 1, context: '42', track: {keydown: 'Enter'}}),\\n        'TreeItem; context: 42; track: keydown: Enter');\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);