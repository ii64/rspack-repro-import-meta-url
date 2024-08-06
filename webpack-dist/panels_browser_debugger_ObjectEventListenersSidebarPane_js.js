"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_browser_debugger_ObjectEventListenersSidebarPane_js"],{

/***/ "./panels/browser_debugger/ObjectEventListenersSidebarPane.js":
/*!********************************************************************!*\
  !*** ./panels/browser_debugger/ObjectEventListenersSidebarPane.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ObjectEventListenersSidebarPane: () => (/* binding */ ObjectEventListenersSidebarPane),
/* harmony export */   objectGroupName: () => (/* binding */ objectGroupName)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event_listeners/event_listeners.js */ "./panels/event_listeners/event_listeners.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class ObjectEventListenersSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ThrottledWidget.ThrottledWidget {
    #lastRequestedContext;
    // TODO(bmeurer): This is only public for web tests.
    eventListenersView;
    constructor() {
        super();
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.section('sources.global-listeners')}`);
        this.eventListenersView = new _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_3__.EventListenersView.EventListenersView(this.update.bind(this), /* enableDefaultTreeFocus */ true);
        this.eventListenersView.show(this.element);
        this.setDefaultFocusedChild(this.eventListenersView);
        this.update();
    }
    toolbarItems() {
        return [_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.Toolbar.createActionButtonForId('browser-debugger.refresh-global-event-listeners')];
    }
    async doUpdate() {
        if (this.#lastRequestedContext) {
            this.#lastRequestedContext.runtimeModel.releaseObjectGroup(objectGroupName);
            this.#lastRequestedContext = undefined;
        }
        const windowObjects = [];
        const executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext);
        if (executionContext) {
            this.#lastRequestedContext = executionContext;
            const result = await executionContext.evaluate({
                expression: 'self',
                objectGroup: objectGroupName,
                includeCommandLineAPI: false,
                silent: true,
                returnByValue: false,
                generatePreview: false,
            }, 
            /* userGesture */ false, 
            /* awaitPromise */ false);
            if (!('error' in result) && !result.exceptionDetails) {
                windowObjects.push(result.object);
            }
        }
        await this.eventListenersView.addObjects(windowObjects);
    }
    wasShown() {
        super.wasShown();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, this.update, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().setFlavor(ObjectEventListenersSidebarPane, this);
    }
    willHide() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().setFlavor(ObjectEventListenersSidebarPane, null);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, this.update, this);
        super.willHide();
        if (this.#lastRequestedContext) {
            this.#lastRequestedContext.runtimeModel.releaseObjectGroup(objectGroupName);
            this.#lastRequestedContext = undefined;
        }
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'browser-debugger.refresh-global-event-listeners': {
                const eventListenersSidebarPane = context.flavor(ObjectEventListenersSidebarPane);
                if (eventListenersSidebarPane) {
                    eventListenersSidebarPane.update();
                    return true;
                }
                return false;
            }
        }
        return false;
    }
}
const objectGroupName = 'object-event-listeners-sidebar-pane';
//# sourceMappingURL=ObjectEventListenersSidebarPane.js.map

/***/ }),

/***/ "./panels/event_listeners/event_listeners.js":
/*!***************************************************!*\
  !*** ./panels/event_listeners/event_listeners.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenersUtils: () => (/* reexport module object */ _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   EventListenersView: () => (/* reexport module object */ _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListenersUtils.js */ "./panels/event_listeners/EventListenersUtils.js");
/* harmony import */ var _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventListenersView.js */ "./panels/event_listeners/EventListenersView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



//# sourceMappingURL=event_listeners.js.map

/***/ })

}]);