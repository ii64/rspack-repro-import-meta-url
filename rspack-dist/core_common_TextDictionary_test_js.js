"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_TextDictionary_test_js"], {
"./core/common/TextDictionary.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var TextDictionary = _common_js__WEBPACK_IMPORTED_MODULE_0__.TextDictionary.TextDictionary;
var Trie = _common_js__WEBPACK_IMPORTED_MODULE_0__.Trie.Trie;
describe('Text Dictionary', function() {
    it('can be created with its basic attributes', function() {
        var textDic = new TextDictionary();
        assert.instanceOf(textDic.words, Map, 'did not create a Map named _words');
        assert.instanceOf(textDic.index, Trie, 'did not create a Trie named _index');
    });
    it('can add a word successfully', function() {
        var textDic = new TextDictionary();
        textDic.addWord('test');
        assert.isTrue(textDic.hasWord('test'), 'word was not added successfully');
    });
    it('can remove a word successfully', function() {
        var textDic = new TextDictionary();
        textDic.addWord('test');
        assert.isTrue(textDic.hasWord('test'), 'word was not added successfully');
        textDic.removeWord('test');
        assert.isFalse(textDic.hasWord('test'), 'word was not removed successfully');
    });
    it('returns nothing when trying to remove a word that does not exist', function() {
        var textDic = new TextDictionary();
        assert.isUndefined(textDic.removeWord('test'), 'removeWord function did not return Undefined for a word not in the dictionaty');
    });
    it('removes a word that was added twice', function() {
        var textDic = new TextDictionary();
        textDic.addWord('test');
        textDic.addWord('test');
        assert.isTrue(textDic.hasWord('test'), 'words were not added successfully');
        textDic.removeWord('test');
        assert.isTrue(textDic.hasWord('test'), 'both words were removed');
        textDic.removeWord('test');
        assert.isFalse(textDic.hasWord('test'), 'the second word was not removed successfully');
    });
    it('retrieve words with a certain prefix', function() {
        var textDic = new TextDictionary();
        textDic.addWord('test');
        textDic.addWord('ten');
        textDic.addWord('nine');
        var foundWords = textDic.wordsWithPrefix('te');
        assert.strictEqual(foundWords[0], 'test', 'first word was not retrieved');
        assert.strictEqual(foundWords[1], 'ten', 'second word was not retrieved');
    });
    it('retrieve the word count for a certain word', function() {
        var textDic = new TextDictionary();
        textDic.addWord('test');
        textDic.addWord('test');
        textDic.addWord('ten');
        assert.strictEqual(textDic.wordCount('test'), 2, 'word count is incorrect');
    });
    it('retrieve the word count for a certain word that is not in the dictionary', function() {
        var textDic = new TextDictionary();
        textDic.addWord('test');
        textDic.addWord('test');
        textDic.addWord('ten');
        assert.strictEqual(textDic.wordCount('testing'), 0, 'word count is incorrect');
    });
    it('reset the dictionary after adding words to it', function() {
        var textDic = new TextDictionary();
        textDic.addWord('test');
        textDic.addWord('test');
        textDic.addWord('ten');
        textDic.reset();
        assert.isFalse(textDic.hasWord('test'), 'first word still in the dictionary');
        assert.isFalse(textDic.hasWord('ten'), 'second word still in the dictionary');
        assert.strictEqual(textDic.wordCount('test'), 0, 'first word still has a count');
        assert.strictEqual(textDic.wordCount('ten'), 0, 'second word still has a count');
    });
}); //# sourceMappingURL=TextDictionary.test.js.map


}),

}]);