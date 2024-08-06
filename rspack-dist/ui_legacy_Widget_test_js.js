"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_Widget_test_js"], {
"./ui/legacy/Widget.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('Widget', function() {
    it('monkey-patches `Element#appendChild()` to sanity-check that widgets are properly attached', function() {
        var div = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(div);
        var widget = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget();
        widget.markAsRoot();
        assert.throws(function() {
            return div.appendChild(widget.element);
        });
    });
    it('monkey-patches `Element#insertBefore()` to sanity-check that widgets are properly attached', function() {
        var div = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(div);
        var child = document.createElement('span');
        div.appendChild(child);
        var widget = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget();
        widget.markAsRoot();
        assert.throws(function() {
            return div.insertBefore(widget.element, child);
        });
    });
    it('monkey-patches `Element#removeChild()` to sanity-check that widgets are properly detached', function() {
        var div = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(div);
        var widget = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget();
        widget.markAsRoot();
        widget.show(div);
        assert.throws(function() {
            return div.removeChild(widget.element);
        });
    });
    it('monkey-patches `Element#removeChildren()` to sanity-check that widgets are properly detached', function() {
        var div = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(div);
        var widget = new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget();
        widget.markAsRoot();
        widget.show(div);
        assert.throws(function() {
            return div.removeChildren();
        });
    });
}); //# sourceMappingURL=Widget.test.js.map


}),

}]);