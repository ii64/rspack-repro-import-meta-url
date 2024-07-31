"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_CSSOverviewController_ts"],{

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


/***/ })

}]);