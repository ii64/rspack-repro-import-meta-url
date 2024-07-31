"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_recorder_ts"],{

/***/ "./src/panels/recorder/RecorderPanel.ts":
/*!**********************************************!*\
  !*** ./src/panels/recorder/RecorderPanel.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   RecorderPanel: () => (/* binding */ RecorderPanel)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderController.js */ "./src/panels/recorder/RecorderController.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _RecorderPanel_controller;



let recorderPanelInstance;
class RecorderPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Panel.Panel {
    constructor() {
        super(RecorderPanel.panelName);
        _RecorderPanel_controller.set(this, void 0);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.panel('chrome-recorder').track({ resize: true })}`);
        __classPrivateFieldSet(this, _RecorderPanel_controller, new _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__.RecorderController(), "f");
        this.contentElement.append(__classPrivateFieldGet(this, _RecorderPanel_controller, "f"));
        this.contentElement.style.minWidth = '400px';
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!recorderPanelInstance || forceNew) {
            recorderPanelInstance = new RecorderPanel();
        }
        return recorderPanelInstance;
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Context.Context.instance().setFlavor(RecorderPanel, this);
        // Focus controller so shortcuts become active
        __classPrivateFieldGet(this, _RecorderPanel_controller, "f").focus();
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Context.Context.instance().setFlavor(RecorderPanel, null);
    }
    handleActions(actionId) {
        __classPrivateFieldGet(this, _RecorderPanel_controller, "f").handleActions(actionId);
    }
    isActionPossible(actionId) {
        return __classPrivateFieldGet(this, _RecorderPanel_controller, "f").isActionPossible(actionId);
    }
}
_RecorderPanel_controller = new WeakMap();
Object.defineProperty(RecorderPanel, "panelName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'chrome-recorder'
});
class ActionDelegate {
    handleAction(_context, actionId) {
        void (async () => {
            await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().showView(RecorderPanel.panelName);
            const view = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ViewManager.ViewManager.instance().view(RecorderPanel.panelName);
            if (view) {
                const widget = (await view.widget());
                widget.handleActions(actionId);
            }
        })();
        return true;
    }
}


/***/ }),

/***/ "./src/panels/recorder/recorder.ts":
/*!*****************************************!*\
  !*** ./src/panels/recorder/recorder.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecorderController: () => (/* reexport module object */ _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   RecorderEvents: () => (/* reexport module object */ _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   RecorderPanel: () => (/* reexport module object */ _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _RecorderController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecorderController.js */ "./src/panels/recorder/RecorderController.ts");
/* harmony import */ var _RecorderEvents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecorderEvents.js */ "./src/panels/recorder/RecorderEvents.ts");
/* harmony import */ var _RecorderPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderPanel.js */ "./src/panels/recorder/RecorderPanel.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






/***/ })

}]);