"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_accessibility_SourceOrderView_ts"],{

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


/***/ }),

/***/ "./src/panels/accessibility/SourceOrderView.ts":
/*!*****************************************************!*\
  !*** ./src/panels/accessibility/SourceOrderView.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceOrderPane: () => (/* binding */ SourceOrderPane)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./src/panels/accessibility/AccessibilitySubPane.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     * @description Name of a tool which allows the developer to view the contents of the page in the
     * 'source order' (the order in which the HTML elements show up in the source code). In the
     * Accessibility panel.
     */
    sourceOrderViewer: 'Source Order Viewer',
    /**
     *@description Text in Source Order Viewer of the Accessibility panel shown when the selected node has no child elements
     */
    noSourceOrderInformation: 'No source order information available',
    /**
     *@description Text in Source Order Viewer of the Accessibility panel shown when the selected node has many child elements
     */
    thereMayBeADelayInDisplaying: 'There may be a delay in displaying source order for elements with many children',
    /**
     * @description Checkbox label in Source Order Viewer of the Accessibility panel. Source order
     * means the order in which the HTML elements show up in the source code.
     */
    showSourceOrder: 'Show source order',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/accessibility/SourceOrderView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const MAX_CHILD_ELEMENTS_THRESHOLD = 300;
class SourceOrderPane extends _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__.AccessibilitySubPane {
    constructor() {
        super(i18nString(UIStrings.sourceOrderViewer));
        Object.defineProperty(this, "noNodeInfo", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "warning", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checked", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkboxLabel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "checkboxElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "overlayModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('source-order-viewer')}`);
        this.noNodeInfo = this.createInfo(i18nString(UIStrings.noSourceOrderInformation));
        this.warning = this.createInfo(i18nString(UIStrings.thereMayBeADelayInDisplaying));
        this.warning.id = 'source-order-warning';
        this.checked = false;
        this.checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.CheckboxLabel.create(
        /* title */ i18nString(UIStrings.showSourceOrder), /* checked */ false);
        this.checkboxElement = this.checkboxLabel.checkboxElement;
        this.checkboxLabel.classList.add('source-order-checkbox');
        this.checkboxLabel.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toggle().track({ click: true })}`);
        this.checkboxElement.addEventListener('click', this.checkboxClicked.bind(this), false);
        this.element.appendChild(this.checkboxLabel);
        this.nodeInternal = null;
        this.overlayModel = null;
    }
    async setNodeAsync(node) {
        if (!this.checkboxLabel.classList.contains('hidden')) {
            this.checked = this.checkboxElement.checked;
        }
        this.checkboxElement.checked = false;
        this.checkboxClicked();
        super.setNode(node);
        if (!this.nodeInternal) {
            this.overlayModel = null;
            return;
        }
        let foundSourceOrder = false;
        const childCount = this.nodeInternal.childNodeCount();
        if (childCount > 0) {
            if (!this.nodeInternal.children()) {
                await this.nodeInternal.getSubtree(1, false);
            }
            const children = this.nodeInternal.children();
            foundSourceOrder = children.some(child => child.nodeType() === Node.ELEMENT_NODE);
        }
        this.noNodeInfo.classList.toggle('hidden', foundSourceOrder);
        this.warning.classList.toggle('hidden', childCount < MAX_CHILD_ELEMENTS_THRESHOLD);
        this.checkboxLabel.classList.toggle('hidden', !foundSourceOrder);
        if (foundSourceOrder) {
            this.overlayModel = this.nodeInternal.domModel().overlayModel();
            this.checkboxElement.checked = this.checked;
            this.checkboxClicked();
        }
        else {
            this.overlayModel = null;
        }
    }
    checkboxClicked() {
        if (!this.nodeInternal || !this.overlayModel) {
            return;
        }
        if (this.checkboxElement.checked) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.Action.SourceOrderViewActivated);
            this.overlayModel.highlightSourceOrderInOverlay(this.nodeInternal);
        }
        else {
            this.overlayModel.hideSourceOrderInOverlay();
        }
    }
}


/***/ })

}]);