"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_icon_button_Icon_test_js"], {
"./ui/components/icon_button/Icon.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icon_button.js */ "./ui/components/icon_button/icon_button.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function getSpanElement(icon) {
    var shadowRoot = icon.shadowRoot;
    assert.isNotNull(shadowRoot);
    var span = shadowRoot.querySelector('span');
    assert.instanceOf(span, HTMLSpanElement);
    return span;
}
describe('Icon', function() {
    describe('Icon', function() {
        var _loop = function(_i, _iter) {
            var name = _iter[_i];
            it('constructs a baseline-aligned 14x14 icon for "'.concat(name, '"'), function() {
                var icon = new Icon();
                icon.name = name;
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(icon);
                assert.strictEqual(window.getComputedStyle(icon).verticalAlign, 'baseline');
                assert.strictEqual(icon.getBoundingClientRect().width, 14);
                assert.strictEqual(icon.getBoundingClientRect().height, 14);
            });
        };
        var Icon = _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon;
        it('constructs a sub-aligned 20x20 icon by default', function() {
            var icon = new Icon();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(icon);
            assert.strictEqual(window.getComputedStyle(icon).verticalAlign, 'sub');
            assert.strictEqual(icon.getBoundingClientRect().width, 20);
            assert.strictEqual(icon.getBoundingClientRect().height, 20);
        });
        for(var _i = 0, _iter = [
            'triangle-up',
            'triangle-down',
            'triangle-left',
            'triangle-right'
        ]; _i < _iter.length; _i++)_loop(_i, _iter);
        describe('data', function() {
            it('can be used to set name and style', function() {
                var icon = new Icon();
                icon.data = {
                    iconName: 'foo',
                    color: 'red',
                    width: '14px',
                    height: '14px'
                };
                assert.strictEqual(icon.name, 'foo');
                assert.strictEqual(icon.style.color, 'red');
                assert.strictEqual(icon.style.width, '14px');
                assert.strictEqual(icon.style.height, '14px');
            });
            it('can be used to set path and style', function() {
                var icon = new Icon();
                icon.data = {
                    iconPath: 'file:///path/to/bar.svg',
                    color: 'darkblue',
                    width: '8pt',
                    height: '8pt'
                };
                assert.strictEqual(icon.name, 'file:///path/to/bar.svg');
                assert.strictEqual(icon.style.color, 'darkblue');
                assert.strictEqual(icon.style.width, '8pt');
                assert.strictEqual(icon.style.height, '8pt');
            });
        });
        describe('name', function() {
            it('is initially unset', function() {
                var icon = new Icon();
                assert.isNull(icon.name);
            });
            it('can be set and unset', function() {
                var icon = new Icon();
                icon.name = 'foobar';
                icon.name = null;
                assert.isNull(icon.name);
            });
            it('reflects the "name" attribute', function() {
                var icon = new Icon();
                icon.setAttribute('name', 'bar');
                assert.strictEqual(icon.name, 'bar');
            });
            it('is reflected to the "name" attribute', function() {
                var icon = new Icon();
                icon.name = 'foo';
                assert.strictEqual(icon.getAttribute('name'), 'foo');
            });
            it('accepts a `.svg` URL that is used verbatim for the icon URL', function() {
                var icon = new Icon();
                icon.name = 'devtools://path/to/images/file.svg';
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(icon);
                var span = getSpanElement(icon);
                assert.strictEqual(window.getComputedStyle(span).maskImage, 'url("devtools://path/to/images/file.svg")');
            });
            it('accepts an icon name and resolves that via `--image-file-<name>` CSS variables', function() {
                var icon = new Icon();
                icon.name = 'bar';
                icon.style.setProperty('--image-file-bar', 'url(http://foo/bar.svg)');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(icon);
                var span = getSpanElement(icon);
                assert.strictEqual(window.getComputedStyle(span).maskImage, 'url("http://foo/bar.svg")');
            });
        });
        describe('role', function() {
            it('is initially presentation', function() {
                var icon = new Icon();
                assert.strictEqual(icon.role, 'presentation');
            });
        });
    });
    describe('create', function() {
        var create = _icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.create;
        it('constructs a new Icon with the given `name`', function() {
            var icon = create('bin');
            assert.strictEqual(icon.name, 'bin');
        });
        it('constructs a new Icon with the given `className`', function() {
            var icon = create('select-element', 'my-awesome-class');
            assert.isTrue(icon.classList.contains('my-awesome-class'));
        });
    });
}); //# sourceMappingURL=Icon.test.js.map


}),

}]);