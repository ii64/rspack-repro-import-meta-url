"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Trie_test_js"], {
"./core/common/Trie.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var Trie = _common_js__WEBPACK_IMPORTED_MODULE_0__.Trie.Trie;
describe('Trie<string>', function() {
    var trie;
    beforeEach(function() {
        trie = Trie.newStringTrie();
    });
    it('stores and retrieves words', function() {
        trie.add('foo');
        assert.isTrue(trie.has('foo'));
        assert.isFalse(trie.has('bar'));
    });
    it('removes words', function() {
        trie.add('foo');
        assert.isTrue(trie.has('foo'));
        trie.remove('foo');
        assert.isFalse(trie.has('foo'));
    });
    it('completes words based on prefixes', function() {
        trie.add('foo');
        trie.add('food');
        trie.add('flora');
        trie.add('boat');
        trie.add('focus');
        trie.add('banana');
        assert.deepEqual(trie.words('fo'), [
            'foo',
            'food',
            'focus'
        ]);
        assert.isEmpty(trie.words('cat'));
    });
    it('clears words', function() {
        trie.add('foo');
        assert.isTrue(trie.has('foo'));
        trie.clear();
        assert.isFalse(trie.has('foo'));
        assert.isEmpty(trie.words('foo'));
    });
    it('provides the longest prefix', function() {
        trie.add('super');
        trie.add('supercar');
        // Longest non-word prefix match.
        assert.strictEqual(trie.longestPrefix('supercalifragilisticexpialidocious', false), 'superca');
        // Longest word prefix match.
        assert.strictEqual(trie.longestPrefix('supercalifragilisticexpialidocious', true), 'super');
    });
});
// Same tests as above but we use arrays of single letters instead.
describe('Trie<string[]>', function() {
    var trie;
    beforeEach(function() {
        trie = Trie.newArrayTrie();
    });
    it('stores and retrieves words', function() {
        trie.add(Array.from('foo'));
        assert.isTrue(trie.has(Array.from('foo')));
        assert.isFalse(trie.has(Array.from('bar')));
    });
    it('removes words', function() {
        trie.add(Array.from('foo'));
        assert.isTrue(trie.has(Array.from('foo')));
        trie.remove(Array.from('foo'));
        assert.isFalse(trie.has(Array.from('foo')));
    });
    it('completes words based on prefixes', function() {
        trie.add(Array.from('foo'));
        trie.add(Array.from('food'));
        trie.add(Array.from('flora'));
        trie.add(Array.from('boat'));
        trie.add(Array.from('focus'));
        trie.add(Array.from('banana'));
        assert.deepEqual(trie.words(Array.from('fo')), [
            Array.from('foo'),
            Array.from('food'),
            Array.from('focus')
        ]);
        assert.isEmpty(trie.words(Array.from('cat')));
    });
    it('clears words', function() {
        trie.add(Array.from('foo'));
        assert.isTrue(trie.has(Array.from('foo')));
        trie.clear();
        assert.isFalse(trie.has(Array.from('foo')));
        assert.isEmpty(trie.words(Array.from('foo')));
    });
    it('provides the longest prefix', function() {
        trie.add(Array.from('super'));
        trie.add(Array.from('supercar'));
        // Longest non-word prefix match.
        assert.deepEqual(trie.longestPrefix(Array.from('supercalifragilisticexpialidocious'), false), Array.from('superca'));
        // Longest word prefix match.
        assert.deepEqual(trie.longestPrefix(Array.from('supercalifragilisticexpialidocious'), true), Array.from('super'));
    });
}); //# sourceMappingURL=Trie.test.js.map


}),

}]);