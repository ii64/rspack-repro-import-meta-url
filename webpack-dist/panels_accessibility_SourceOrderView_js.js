"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_accessibility_SourceOrderView_js"],{

/***/ "./panels/accessibility/AccessibilitySubPane.js":
/*!******************************************************!*\
  !*** ./panels/accessibility/AccessibilitySubPane.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessibilitySubPane: () => (/* binding */ AccessibilitySubPane)
/* harmony export */ });
/* harmony import */ var _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessibilityProperties.css.js */ "./panels/accessibility/accessibilityProperties.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accessibilityNode.css.js */ "./panels/accessibility/accessibilityNode.css.js");
/* harmony import */ var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// eslint-disable-next-line rulesdir/es_modules_import

class AccessibilitySubPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.View.SimpleView {
    axNode;
    nodeInternal;
    constructor(name) {
        super(name);
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
        treeOutline.registerCSSFiles([_accessibilityNode_css_js__WEBPACK_IMPORTED_MODULE_2__["default"], _accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"], _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]]);
        treeOutline.element.classList.add('hidden');
        treeOutline.hideOverflow();
        this.element.appendChild(treeOutline.element);
        return treeOutline;
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_accessibilityProperties_css_js__WEBPACK_IMPORTED_MODULE_0__["default"]]);
    }
}
//# sourceMappingURL=AccessibilitySubPane.js.map

/***/ }),

/***/ "./panels/accessibility/SourceOrderView.js":
/*!*************************************************!*\
  !*** ./panels/accessibility/SourceOrderView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SourceOrderPane: () => (/* binding */ SourceOrderPane)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AccessibilitySubPane_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AccessibilitySubPane.js */ "./panels/accessibility/AccessibilitySubPane.js");
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
    noNodeInfo;
    warning;
    checked;
    checkboxLabel;
    checkboxElement;
    overlayModel;
    constructor() {
        super(i18nString(UIStrings.sourceOrderViewer));
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
//# sourceMappingURL=SourceOrderView.js.map

/***/ }),

/***/ "./panels/accessibility/accessibilityNode.css.js":
/*!*******************************************************!*\
  !*** ./panels/accessibility/accessibilityNode.css.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.widget.ax-subpane {
  overflow-x: hidden;
  user-select: text;
}

.ax-ignored-info {
  padding: 6px;
}

.ax-ignored-node-pane {
  flex: none;
}

.invalid {
  text-decoration: line-through;
}

span.ax-value-undefined {
  font-style: italic;
}

.ax-value-source-unused {
  opacity: 70%;
}

.ax-value-source-superseded,
.ax-value-source-invalid {
  text-decoration: line-through;
}

.tree-outline span[is="dt-icon-label"] {
  position: relative;
  left: -11px;
}

.tree-outline li {
  display: block;
  overflow-x: hidden;
  align-items: baseline;
}

.tree-outline li::before {
  content: "";
  width: 14px;
  display: inline-block;
  margin-bottom: -2px;
  margin-right: 3px;
}

.tree-outline li.property {
  color: var(--sys-color-on-surface);
}

.tree-outline li.invalid {
  position: relative;
  left: -2px;
}

.tree-outline span[is="dt-icon-label"] + .ax-name {
  margin-left: -11px;
}

.tree-outline li span {
  flex-shrink: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (forced-colors: active) {
  .ax-value-source-unused {
    opacity: 100%;
  }

  .tree-outline-disclosure:hover li.parent::before {
    background-color: ButtonText;
  }
}

/*# sourceURL=accessibilityNode.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/accessibility/accessibilityProperties.css.js":
/*!*************************************************************!*\
  !*** ./panels/accessibility/accessibilityProperties.css.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.ax-name {
  color: var(--sys-color-token-attribute);
  flex-shrink: 0;
}

.ax-readable-name {
  flex-shrink: 0;
}

.ax-readable-string {
  font-style: italic;
}

.ax-value-string {
  color: var(--sys-color-token-property-special);
}

span.ax-internal-role {
  font-style: italic;
}

#source-order-warning {
  padding-bottom: 0;
  text-align: left;
}

.source-order-checkbox {
  margin: 2px 2px 2px 5px;
}

/*# sourceURL=accessibilityProperties.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);