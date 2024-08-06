"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_NodeStackTraceWidget_js"],{

/***/ "./panels/elements/NodeStackTraceWidget.js":
/*!*************************************************!*\
  !*** ./panels/elements/NodeStackTraceWidget.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaxLengthForLinks: () => (/* binding */ MaxLengthForLinks),
/* harmony export */   NodeStackTraceWidget: () => (/* binding */ NodeStackTraceWidget)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _nodeStackTraceWidget_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodeStackTraceWidget.css.js */ "./panels/elements/nodeStackTraceWidget.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Message displayed when no JavaScript stack trace is available for the DOM node in the Stack Trace widget of the Elements panel
     */
    noStackTraceAvailable: 'No stack trace available',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/NodeStackTraceWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class NodeStackTraceWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ThrottledWidget.ThrottledWidget {
    noStackTraceElement;
    creationStackTraceElement;
    linkifier;
    constructor() {
        super(true /* isWebComponent */);
        this.noStackTraceElement = this.contentElement.createChild('div', 'gray-info-message');
        this.noStackTraceElement.textContent = i18nString(UIStrings.noStackTraceAvailable);
        this.creationStackTraceElement = this.contentElement.createChild('div', 'stack-trace');
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier(MaxLengthForLinks);
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.update, this);
        this.registerCSSFiles([_nodeStackTraceWidget_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
        this.update();
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.update, this);
    }
    async doUpdate() {
        const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        if (!node) {
            this.noStackTraceElement.classList.remove('hidden');
            this.creationStackTraceElement.classList.add('hidden');
            return;
        }
        const creationStackTrace = await node.creationStackTrace();
        if (creationStackTrace) {
            this.noStackTraceElement.classList.add('hidden');
            this.creationStackTraceElement.classList.remove('hidden');
            const stackTracePreview = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.JSPresentationUtils.buildStackTracePreviewContents(node.domModel().target(), this.linkifier, { stackTrace: creationStackTrace, tabStops: undefined });
            this.creationStackTraceElement.removeChildren();
            this.creationStackTraceElement.appendChild(stackTracePreview.element);
        }
        else {
            this.noStackTraceElement.classList.remove('hidden');
            this.creationStackTraceElement.classList.add('hidden');
        }
    }
}
const MaxLengthForLinks = 40;
//# sourceMappingURL=NodeStackTraceWidget.js.map

/***/ }),

/***/ "./panels/elements/nodeStackTraceWidget.css.js":
/*!*****************************************************!*\
  !*** ./panels/elements/nodeStackTraceWidget.css.js ***!
  \*****************************************************/
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
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.stack-trace {
  font-size: 11px !important; /* stylelint-disable-line declaration-no-important */
  font-family: Menlo, monospace;
}

/*# sourceURL=nodeStackTraceWidget.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);