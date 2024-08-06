"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_Treeoutline_test_js"], {
"./ui/legacy/Treeoutline.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('TreeOutline', function() {
    describe('correctly reacts to Enter key', function() {
        it('by expanding collapsed parent nodes', function() {
            var tree = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutlineInShadow();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(tree.element);
            var parent = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement('parent', true);
            parent.appendChild(new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement('child', false));
            tree.appendChild(parent);
            parent.select();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(tree.contentElement, {
                bubbles: true,
                key: 'Enter'
            });
            assert.isTrue(parent.expanded, 'Enter key was supposed to expand the parent node');
        });
        it('by collapsing expanded parent nodes', function() {
            var tree = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutlineInShadow();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(tree.element);
            var parent = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement('parent', true);
            parent.appendChild(new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement('child', false));
            tree.appendChild(parent);
            parent.select();
            parent.expand();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent)(tree.contentElement, {
                bubbles: true,
                key: 'Enter'
            });
            assert.isFalse(parent.expanded, 'Enter key was supposed to collapse the parent node');
        });
    });
    it('responds correctly to navigation keys', function() {
        var sendKeyMultipleTimes = function sendKeyMultipleTimes(key, n) {
            for(var i = 0; i < n; i++){
                sendKey(key);
            }
        };
        var sendKey = function sendKey(key) {
            var deepActiveElement = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.DOMUtilities.deepActiveElement(document);
            deepActiveElement.dispatchEvent(new KeyboardEvent('keydown', {
                bubbles: true,
                cancelable: true,
                key: key
            }));
        };
        var treeOutline = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutlineInShadow();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM)(treeOutline.element);
        for(var i = 0; i < 10; i++){
            var treeElement = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement(String(i), true);
            treeElement.appendChild(new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement(String(i) + ' child'));
            treeOutline.appendChild(treeElement);
        }
        var selectedTitles = [];
        treeOutline.addEventListener(_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.Events.ElementSelected, function(event) {
            selectedTitles.push(String(event.data.title));
        });
        treeOutline.firstChild().select(false, true);
        var distance = 25;
        assert.deepEqual(selectedTitles, [
            '0'
        ]);
        selectedTitles = [];
        sendKeyMultipleTimes('ArrowDown', distance);
        assert.deepEqual(selectedTitles, [
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9'
        ]);
        selectedTitles = [];
        sendKeyMultipleTimes('ArrowUp', distance);
        assert.deepEqual(selectedTitles, [
            '8',
            '7',
            '6',
            '5',
            '4',
            '3',
            '2',
            '1',
            '0'
        ]);
        selectedTitles = [];
        sendKey('End');
        assert.deepEqual(selectedTitles, [
            '9'
        ]);
        selectedTitles = [];
        sendKey('Home');
        assert.deepEqual(selectedTitles, [
            '0'
        ]);
        selectedTitles = [];
        sendKeyMultipleTimes('ArrowRight', distance);
        assert.deepEqual(selectedTitles, [
            '0 child'
        ]);
        selectedTitles = [];
        sendKeyMultipleTimes('ArrowLeft', distance);
        assert.deepEqual(selectedTitles, [
            '0'
        ]);
        selectedTitles = [];
        var innerTreeOutline = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeOutlineInShadow();
        var firstInnerChild = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement('First inner child');
        var firstInnerGrandChild = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement('First inner grandchild');
        innerTreeOutline.appendChild(firstInnerChild);
        firstInnerChild.appendChild(firstInnerGrandChild);
        var treeElementForNestedTree = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.TreeOutline.TreeElement(innerTreeOutline.element);
        treeOutline.appendChild(treeElementForNestedTree);
        innerTreeOutline.firstChild().select(false, true);
        sendKey('ArrowRight');
        assert.isTrue(innerTreeOutline.firstChild().expanded, 'child is not expanded');
    });
}); //# sourceMappingURL=Treeoutline.test.js.map


}),

}]);