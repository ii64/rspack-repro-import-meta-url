"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_adorners_Adorner_test_js"], {
"./ui/components/adorners/Adorner.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _adorners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adorners.js */ "./ui/components/adorners/adorners.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}


var ADORNER_TAG_NAME = 'DEVTOOLS-ADORNER';
describe('Adorner', function() {
    var assertIsAdorner = function assertIsAdorner(element) {
        assert.strictEqual(element.tagName, ADORNER_TAG_NAME, "element tag name is not ".concat(ADORNER_TAG_NAME));
        assert.isTrue(_instanceof(element, _adorners_js__WEBPACK_IMPORTED_MODULE_1__.Adorner.Adorner), 'element is not an instance of Adorner');
        assert.strictEqual(Object.getPrototypeOf(element), _adorners_js__WEBPACK_IMPORTED_MODULE_1__.Adorner.Adorner.prototype, 'element is not on Adorner\'s prototype chain');
    };
    it('can be created by document.createElement', function() {
        var adorner = document.createElement('devtools-adorner');
        assertIsAdorner(adorner);
    });
    it('can interacts as a toggle button with proper ARIA setup', function() {
        var content = document.createElement('span');
        var adorner = new _adorners_js__WEBPACK_IMPORTED_MODULE_1__.Adorner.Adorner();
        adorner.data = {
            content: content,
            name: 'foo'
        };
        assert.isNull(adorner.getAttribute('role'), 'non-interactive adorner had wrong aria role value');
        var clickCounter = 0;
        var clickListener = function() {
            clickCounter++;
        };
        var ariaLabelDefault = 'adorner toggled on';
        var ariaLabelActive = 'adorner toggled off';
        adorner.addInteraction(clickListener, {
            isToggle: true,
            shouldPropagateOnKeydown: false,
            ariaLabelActive: ariaLabelActive,
            ariaLabelDefault: ariaLabelDefault
        });
        assert.strictEqual(adorner.getAttribute('aria-label'), ariaLabelDefault, 'interactive adorner didn\'t have correct initial aria-label value');
        assert.strictEqual(adorner.getAttribute('role'), 'button', 'interactive adorner didn\'t have correct aria role setup');
        assert.strictEqual(adorner.getAttribute('aria-pressed'), 'false', 'toggle adorner didn\'t have correct initial aria-pressed value');
        adorner.click();
        assert.strictEqual(clickCounter, 1, 'interactive adorner was not triggered by clicking');
        assert.strictEqual(adorner.getAttribute('aria-label'), ariaLabelActive, 'interactive adorner didn\'t have correct active aria-label value');
        assert.strictEqual(adorner.getAttribute('aria-pressed'), 'true', 'toggle adorner didn\'t have correct active aria-pressed value');
        adorner.dispatchEvent(new KeyboardEvent('keydown', {
            'code': 'Enter'
        }));
        assert.strictEqual(clickCounter, 2, 'interactive adorner was not triggered by Enter key');
        assert.strictEqual(adorner.getAttribute('aria-label'), ariaLabelDefault, 'interactive adorner didn\'t have correct inactive aria-label value');
        assert.strictEqual(adorner.getAttribute('aria-pressed'), 'false', 'toggle adorner didn\'t have correct inactive aria-pressed value');
        adorner.dispatchEvent(new KeyboardEvent('keydown', {
            'code': 'Space'
        }));
        assert.strictEqual(clickCounter, 3, 'interactive adorner was not triggered by Space key');
        assert.strictEqual(adorner.getAttribute('aria-label'), ariaLabelActive, 'interactive adorner didn\'t have correct active aria-label value');
        assert.strictEqual(adorner.getAttribute('aria-pressed'), 'true', 'toggle adorner didn\'t have correct active aria-pressed value');
    });
    it('can be toggled programmatically', function() {
        var content = document.createElement('span');
        var adorner = new _adorners_js__WEBPACK_IMPORTED_MODULE_1__.Adorner.Adorner();
        adorner.data = {
            content: content,
            name: 'foo'
        };
        adorner.addInteraction(function() {}, {
            isToggle: true,
            shouldPropagateOnKeydown: false,
            ariaLabelActive: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString,
            ariaLabelDefault: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.UIString.LocalizedEmptyString
        });
        assert.strictEqual(adorner.getAttribute('aria-pressed'), 'false', 'toggle adorner didn\'t have correct initial aria-pressed value');
        adorner.toggle();
        assert.strictEqual(adorner.getAttribute('aria-pressed'), 'true', 'toggle adorner didn\'t have correct active aria-pressed value');
    });
    it('only contains the most recently slotted content after multiple data setting calls', function() {
        var content1 = document.createElement('span');
        content1.textContent = 'content 1';
        var content2 = document.createElement('div');
        content2.textContent = 'content 2';
        var content3 = document.createElement('span');
        content3.textContent = 'content 3';
        var adorner = new _adorners_js__WEBPACK_IMPORTED_MODULE_1__.Adorner.Adorner();
        adorner.data = {
            content: content1,
            name: 'foo'
        };
        adorner.data = {
            content: content2,
            name: 'foo'
        };
        adorner.data = {
            content: content3,
            name: 'foo'
        };
        var slottedChildren = adorner.querySelectorAll('[slot="content"]');
        assert.strictEqual(slottedChildren.length, 1, 'adorner light dom should only have one child with [slot="content"]');
        assert.strictEqual(slottedChildren[0].textContent, 'content 3', 'adorner content slot should have the most recent content');
    });
}); //# sourceMappingURL=Adorner.test.js.map


}),

}]);