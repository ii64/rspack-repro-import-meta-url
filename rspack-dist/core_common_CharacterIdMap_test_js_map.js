(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_CharacterIdMap_test_js_map"], {
"./core/common/CharacterIdMap.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"CharacterIdMap.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/CharacterIdMap.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,aAAa,CAAC;AAEtC,MAAM,cAAc,GAAG,MAAM,CAAC,cAAc,CAAC,cAAc,CAAC;AAE5D,QAAQ,CAAC,sBAAsB,EAAE,GAAG,EAAE;IACpC,EAAE,CAAC,8CAA8C,EAAE,GAAG,EAAE;QACtD,MAAM,WAAW,GAAG,QAAQ,CAAC,aAAa,CAAC,GAAG,CAAC,CAAC;QAChD,MAAM,cAAc,GAAG,IAAI,cAAc,EAAE,CAAC;QAC5C,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,MAAM,CAAC,WAAW,CAAC,EAAE,GAAG,EAAE,qCAAqC,CAAC,CAAC;IACrG,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,8CAA8C,EAAE,GAAG,EAAE;QACtD,MAAM,WAAW,GAAG,QAAQ,CAAC,aAAa,CAAC,GAAG,CAAC,CAAC;QAChD,MAAM,cAAc,GAAG,IAAI,cAAc,EAAE,CAAC;QAC5C,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,MAAM,CAAC,WAAW,CAAC,EAAE,GAAG,EAAE,qCAAqC,CAAC,CAAC;QACnG,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,QAAQ,CAAC,GAAG,CAAC,EAAE,WAAW,EAAE,uCAAuC,CAAC,CAAC;IACzG,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,yFAAyF,EAAE,GAAG,EAAE;QACjG,MAAM,WAAW,GAAG,QAAQ,CAAC,aAAa,CAAC,GAAG,CAAC,CAAC;QAChD,MAAM,cAAc,GAAG,IAAI,cAAc,EAAE,CAAC;QAC5C,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,MAAM,CAAC,WAAW,CAAC,EAAE,GAAG,EAAE,qCAAqC,CAAC,CAAC;QACnG,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,MAAM,CAAC,WAAW,CAAC,EAAE,GAAG,EAAE,qCAAqC,CAAC,CAAC;IACrG,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,gFAAgF,EAAE,GAAG,EAAE;QACxF,MAAM,UAAU,GAAG,MAAM,CAAC;QAC1B,MAAM,cAAc,GAAG,IAAI,cAAc,EAAE,CAAC;QAC5C,MAAM,CAAC,MAAM,CAAC,GAAG,EAAE;YACjB,KAAK,IAAI,KAAK,GAAG,CAAC,EAAE,KAAK,IAAI,UAAU,EAAE,KAAK,EAAE,EAAE,CAAC;gBACjD,MAAM,EAAE,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;gBACzC,EAAE,CAAC,YAAY,CAAC,IAAI,EAAE,KAAK,GAAG,KAAK,CAAC,CAAC;gBACrC,cAAc,CAAC,MAAM,CAAC,EAAE,CAAC,CAAC;YAC5B,CAAC;QACH,CAAC,EAAE,qCAAqC,CAAC,CAAC;IAC5C,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,iFAAiF,EAAE,GAAG,EAAE;QACzF,MAAM,cAAc,GAAG,IAAI,cAAc,EAAE,CAAC;QAC5C,MAAM,CAAC,WAAW,CAAC,cAAc,CAAC,QAAQ,CAAC,GAAG,CAAC,EAAE,IAAI,EAAE,uCAAuC,CAAC,CAAC;IAClG,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from './common.js';\\n\\nconst CharacterIdMap = Common.CharacterIdMap.CharacterIdMap;\\n\\ndescribe('CharacterIdMap class', () => {\\n  it('is able to convert an element to a character', () => {\\n    const testElement = document.createElement('p');\\n    const characterIdMap = new CharacterIdMap();\\n    assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');\\n  });\\n\\n  it('is able to convert a character to an element', () => {\\n    const testElement = document.createElement('p');\\n    const characterIdMap = new CharacterIdMap();\\n    assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');\\n    assert.strictEqual(characterIdMap.fromChar('!'), testElement, 'character was not converted correctly');\\n  });\\n\\n  it('returns the same character when trying to convert an element that was already converted', () => {\\n    const testElement = document.createElement('p');\\n    const characterIdMap = new CharacterIdMap();\\n    assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');\\n    assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');\\n  });\\n\\n  it('throws an error when trying to convert a number when there is no capacity left', () => {\\n    const upperLimit = 0xFFFF;\\n    const characterIdMap = new CharacterIdMap();\\n    assert.throws(() => {\\n      for (let index = 0; index <= upperLimit; index++) {\\n        const el = document.createElement('div');\\n        el.setAttribute('id', 'Div' + index);\\n        characterIdMap.toChar(el);\\n      }\\n    }, 'CharacterIdMap ran out of capacity!');\\n  });\\n\\n  it('returns null when trying to convert  a character that does not exist in the Map', () => {\\n    const characterIdMap = new CharacterIdMap();\\n    assert.strictEqual(characterIdMap.fromChar('!'), null, 'character was not converted correctly');\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);