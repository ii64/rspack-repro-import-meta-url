"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_CharacterIdMap_test_js"], {
"./core/common/CharacterIdMap.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var CharacterIdMap = _common_js__WEBPACK_IMPORTED_MODULE_0__.CharacterIdMap.CharacterIdMap;
describe('CharacterIdMap class', function() {
    it('is able to convert an element to a character', function() {
        var testElement = document.createElement('p');
        var characterIdMap = new CharacterIdMap();
        assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');
    });
    it('is able to convert a character to an element', function() {
        var testElement = document.createElement('p');
        var characterIdMap = new CharacterIdMap();
        assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');
        assert.strictEqual(characterIdMap.fromChar('!'), testElement, 'character was not converted correctly');
    });
    it('returns the same character when trying to convert an element that was already converted', function() {
        var testElement = document.createElement('p');
        var characterIdMap = new CharacterIdMap();
        assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');
        assert.strictEqual(characterIdMap.toChar(testElement), '!', 'element was not converted correctly');
    });
    it('throws an error when trying to convert a number when there is no capacity left', function() {
        var upperLimit = 0xFFFF;
        var characterIdMap = new CharacterIdMap();
        assert.throws(function() {
            for(var index = 0; index <= upperLimit; index++){
                var el = document.createElement('div');
                el.setAttribute('id', 'Div' + index);
                characterIdMap.toChar(el);
            }
        }, 'CharacterIdMap ran out of capacity!');
    });
    it('returns null when trying to convert  a character that does not exist in the Map', function() {
        var characterIdMap = new CharacterIdMap();
        assert.strictEqual(characterIdMap.fromChar('!'), null, 'character was not converted correctly');
    });
}); //# sourceMappingURL=CharacterIdMap.test.js.map


}),

}]);