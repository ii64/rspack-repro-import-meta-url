"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_accessibility_AccessibilitySubPane_ts-_75fc0"],{

/***/ "./src/panels/accessibility/AccessibilitySubPane.ts":
/*!**********************************************************!*\
  !*** ./src/panels/accessibility/AccessibilitySubPane.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilitySubPane: () => (/* binding */ AccessibilitySubPane)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityProperties.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// eslint-disable-next-line rulesdir/es_modules_import

class AccessibilitySubPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.View.SimpleView {
    constructor(name) {
        super(name);
        Object.defineProperty(this, "axNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.axNode = null;
    }
    setAXNode(_axNode) {
    }
    node() {
        return this.nodeInternal || null;
    }
    setNode(node) {
        this.nodeInternal = node;
    }
    createInfo(textContent, className) {
        const classNameOrDefault = className || 'gray-info-message';
        const info = this.element.createChild('div', classNameOrDefault);
        info.textContent = textContent;
        return info;
    }
    createTreeOutline() {
        const treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeOutlineInShadow();
        treeOutline.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityNode.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityProperties.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        treeOutline.element.classList.add('hidden');
        treeOutline.hideOverflow();
        this.element.appendChild(treeOutline.element);
        return treeOutline;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './accessibilityProperties.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);