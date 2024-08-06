"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_RecorderPanel_js"],{

/***/ "./panels/recorder/RecorderPanel.js":
/*!******************************************!*\
  !*** ./panels/recorder/RecorderPanel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   RecorderPanel: () => (/* binding */ RecorderPanel)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RecorderController.js */ "./panels/recorder/RecorderController.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



let recorderPanelInstance;
class RecorderPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Panel.Panel {
    static panelName = 'chrome-recorder';
    #controller;
    constructor() {
        super(RecorderPanel.panelName);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.panel('chrome-recorder').track({ resize: true })}`);
        this.#controller = new _RecorderController_js__WEBPACK_IMPORTED_MODULE_2__.RecorderController();
        this.contentElement.append(this.#controller);
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
        this.#controller.focus();
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Context.Context.instance().setFlavor(RecorderPanel, null);
    }
    handleActions(actionId) {
        this.#controller.handleActions(actionId);
    }
    isActionPossible(actionId) {
        return this.#controller.isActionPossible(actionId);
    }
}
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
//# sourceMappingURL=RecorderPanel.js.map

/***/ })

}]);