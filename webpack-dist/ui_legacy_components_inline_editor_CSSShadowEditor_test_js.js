"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_CSSShadowEditor_test_js"],{

/***/ "./ui/legacy/components/inline_editor/CSSShadowEditor.test.js":
/*!********************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSShadowEditor.test.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inline_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('CSSLength', () => {
    it('parses lengths correctly', () => {
        const parseLength = (input, expected) => {
            assert.strictEqual(_inline_editor_js__WEBPACK_IMPORTED_MODULE_0__.CSSShadowEditor.CSSLength.parse(input)?.asCSSText(), expected);
        };
        parseLength('10px', '10px');
        parseLength('10PX', '10PX');
        parseLength('-10px', '-10px');
        parseLength('+10px', '10px');
        parseLength('10.11px', '10.11px');
        parseLength('.11px', '0.11px');
        parseLength('10e3px', '10000px');
        parseLength('10E3px', '10000px');
        parseLength('10.11e3px', '10110px');
        parseLength('-10.11e-3px', '-0.01011px');
        parseLength('0px', '0px');
        parseLength('0', '0');
        parseLength('-0.0', '0');
        parseLength('+0.0', '0');
        parseLength('0e-3', '0');
        parseLength('', undefined);
        parseLength('10', undefined);
        parseLength('10 px', undefined);
        parseLength('10.px', undefined);
        parseLength('10pxx', undefined);
        parseLength('10.10.10px', undefined);
        parseLength('hello10pxhello', undefined);
    });
});
//# sourceMappingURL=CSSShadowEditor.test.js.map

/***/ })

}]);