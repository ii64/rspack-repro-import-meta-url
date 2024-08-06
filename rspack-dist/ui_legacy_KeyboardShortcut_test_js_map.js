(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_KeyboardShortcut_test_js_map"], {
"./ui/legacy/KeyboardShortcut.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"KeyboardShortcut.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/legacy/KeyboardShortcut.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,EAAE,MAAM,aAAa,CAAC;AAElC,QAAQ,CAAC,kBAAkB,EAAE,GAAG,EAAE;IAChC,EAAE,CAAC,qBAAqB,EAAE,GAAG,EAAE;QAC7B,MAAM,WAAW,GAAG,CAAC,EAAC,GAAG,EAAE,GAAG,EAAE,IAAI,EAAE,UAAU,EAAC,EAAE,EAAC,GAAG,EAAE,GAAG,EAAE,IAAI,EAAE,UAAU,EAAC,CAAC,CAAC;QACjF,MAAM,QAAQ,GAAG,IAAI,EAAE,CAAC,gBAAgB,CAAC,gBAAgB,CACrD,WAAW,EAAE,oBAAoB,mEAA2C,CAAC;QACjF,MAAM,CAAC,SAAS,CAAC,QAAQ,CAAC,WAAW,EAAE,WAAW,EAAE,2BAA2B,CAAC,CAAC;QACjF,MAAM,CAAC,WAAW,CAAC,QAAQ,CAAC,MAAM,EAAE,oBAAoB,EAAE,sBAAsB,CAAC,CAAC;IACpF,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,iBAAiB,EAAE,GAAG,EAAE;QACzB,MAAM,WAAW,GAAG,CAAC,EAAC,GAAG,EAAE,GAAG,EAAE,IAAI,EAAE,UAAU,EAAC,EAAE,EAAC,GAAG,EAAE,GAAG,EAAE,IAAI,EAAE,UAAU,EAAC,CAAC,CAAC;QACjF,MAAM,QAAQ,GAAG,IAAI,EAAE,CAAC,gBAAgB,CAAC,gBAAgB,CACrD,WAAW,EAAE,oBAAoB,mEAA2C,CAAC;QACjF,MAAM,CAAC,WAAW,CAAC,QAAQ,CAAC,KAAK,EAAE,EAAE,mBAAmB,CAAC,CAAC;IAC5D,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,8BAA8B,EAAE,GAAG,EAAE;QACtC,MAAM,KAAK,GAAG,IAAI,aAAa,CAAC,SAAS,EAAE,EAAC,GAAG,EAAE,WAAW,EAAE,OAAO,EAAE,EAAE,EAAsB,CAAC,CAAC;QACjG,MAAM,GAAG,GAAG,EAAE,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,KAAK,CAAC,CAAC;QACzE,MAAM,CAAC,WAAW,CAAC,GAAG,EAAE,EAAE,CAAC,CAAC;IAC9B,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as UI from './legacy.js';\\n\\ndescribe('KeyboardShortcut', () => {\\n  it('can be instantiated', () => {\\n    const descriptors = [{key: 587, name: 'Ctrl + K'}, {key: 595, name: 'Ctrl + S'}];\\n    const shortcut = new UI.KeyboardShortcut.KeyboardShortcut(\\n        descriptors, 'settings.shortcuts', UI.KeyboardShortcut.Type.DefaultShortcut);\\n    assert.deepEqual(shortcut.descriptors, descriptors, 'descriptors should be set');\\n    assert.strictEqual(shortcut.action, 'settings.shortcuts', 'action should be set');\\n  });\\n\\n  it('creates a title', () => {\\n    const descriptors = [{key: 587, name: 'Ctrl + K'}, {key: 595, name: 'Ctrl + S'}];\\n    const shortcut = new UI.KeyboardShortcut.KeyboardShortcut(\\n        descriptors, 'settings.shortcuts', UI.KeyboardShortcut.Type.DefaultShortcut);\\n    assert.strictEqual(shortcut.title(), 'Ctrl + K Ctrl + S');\\n  });\\n\\n  it('can make a key from an event', () => {\\n    const event = new KeyboardEvent('keydown', {key: 'ArrowDown', keyCode: 40} as KeyboardEventInit);\\n    const key = UI.KeyboardShortcut.KeyboardShortcut.makeKeyFromEvent(event);\\n    assert.strictEqual(key, 40);\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);