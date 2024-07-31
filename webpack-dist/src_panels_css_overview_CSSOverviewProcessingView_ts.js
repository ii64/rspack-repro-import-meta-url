"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_CSSOverviewProcessingView_ts"],{

/***/ "./src/panels/css_overview/CSSOverviewController.ts":
/*!**********************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewController.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   OverviewController: () => (/* binding */ OverviewController)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OverviewController_instances, _OverviewController_checkUrlAndResetIfChanged;


class OverviewController extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor() {
        super();
        _OverviewController_instances.add(this);
        Object.defineProperty(this, "currentUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.Events.InspectedURLChanged, __classPrivateFieldGet(this, _OverviewController_instances, "m", _OverviewController_checkUrlAndResetIfChanged), this);
    }
}
_OverviewController_instances = new WeakSet(), _OverviewController_checkUrlAndResetIfChanged = function _OverviewController_checkUrlAndResetIfChanged() {
    if (this.currentUrl === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL()) {
        return;
    }
    this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
    this.dispatchEventToListeners(Events.Reset);
};
var Events;
(function (Events) {
    Events["RequestOverviewStart"] = "RequestOverviewStart";
    Events["RequestNodeHighlight"] = "RequestNodeHighlight";
    Events["PopulateNodes"] = "PopulateNodes";
    Events["RequestOverviewCancel"] = "RequestOverviewCancel";
    Events["OverviewCompleted"] = "OverviewCompleted";
    Events["Reset"] = "Reset";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/panels/css_overview/CSSOverviewProcessingView.ts":
/*!**************************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewProcessingView.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewProcessingView: () => (/* binding */ CSSOverviewProcessingView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./src/panels/css_overview/CSSOverviewController.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewProcessingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSOverviewProcessingView_instances, _CSSOverviewProcessingView_controller, _CSSOverviewProcessingView_render;





const UIStrings = {
    /**
     *@description Text to cancel something
     */
    cancel: 'Cancel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/CSSOverviewProcessingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class CSSOverviewProcessingView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.Widget {
    constructor(controller) {
        super();
        _CSSOverviewProcessingView_instances.add(this);
        _CSSOverviewProcessingView_controller.set(this, void 0);
        Object.defineProperty(this, "fragment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _CSSOverviewProcessingView_controller, controller, "f");
        __classPrivateFieldGet(this, _CSSOverviewProcessingView_instances, "m", _CSSOverviewProcessingView_render).call(this);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewProcessingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_CSSOverviewProcessingView_controller = new WeakMap(), _CSSOverviewProcessingView_instances = new WeakSet(), _CSSOverviewProcessingView_render = function _CSSOverviewProcessingView_render() {
    const cancelButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.cancel), () => __classPrivateFieldGet(this, _CSSOverviewProcessingView_controller, "f").dispatchEventToListeners(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_3__.Events.RequestOverviewCancel), { jslogContext: 'css-overview.cancel-processing', variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.OUTLINED });
    this.setDefaultFocusedElement(cancelButton);
    this.fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build `
      <div class="vbox overview-processing-view">
        <h1>Processing page</h1>
        <div>${cancelButton}</div>
      </div>
    `;
    this.contentElement.appendChild(this.fragment.element());
    this.contentElement.style.overflow = 'auto';
};


/***/ })

}]);