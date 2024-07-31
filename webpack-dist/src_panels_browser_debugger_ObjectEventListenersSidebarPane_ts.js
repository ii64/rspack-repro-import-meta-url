"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_browser_debugger_ObjectEventListenersSidebarPane_ts"],{

/***/ "./src/panels/browser_debugger/ObjectEventListenersSidebarPane.ts":
/*!************************************************************************!*\
  !*** ./src/panels/browser_debugger/ObjectEventListenersSidebarPane.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   ObjectEventListenersSidebarPane: () => (/* binding */ ObjectEventListenersSidebarPane),
/* harmony export */   objectGroupName: () => (/* binding */ objectGroupName)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../event_listeners/event_listeners.js */ "./src/panels/event_listeners/event_listeners.ts");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ObjectEventListenersSidebarPane_lastRequestedContext;




class ObjectEventListenersSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ThrottledWidget.ThrottledWidget {
    constructor() {
        super();
        _ObjectEventListenersSidebarPane_lastRequestedContext.set(this, void 0);
        // TODO(bmeurer): This is only public for web tests.
        Object.defineProperty(this, "eventListenersView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        if (__classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f")) {
            __classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f").runtimeModel.releaseObjectGroup(objectGroupName);
            __classPrivateFieldSet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, undefined, "f");
        }
        const windowObjects = [];
        const executionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext);
        if (executionContext) {
            __classPrivateFieldSet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, executionContext, "f");
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
        if (__classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f")) {
            __classPrivateFieldGet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, "f").runtimeModel.releaseObjectGroup(objectGroupName);
            __classPrivateFieldSet(this, _ObjectEventListenersSidebarPane_lastRequestedContext, undefined, "f");
        }
    }
}
_ObjectEventListenersSidebarPane_lastRequestedContext = new WeakMap();
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


/***/ }),

/***/ "./src/panels/event_listeners/event_listeners.ts":
/*!*******************************************************!*\
  !*** ./src/panels/event_listeners/event_listeners.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenersUtils: () => (/* reexport module object */ _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   EventListenersView: () => (/* reexport module object */ _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListenersUtils.js */ "./src/panels/event_listeners/EventListenersUtils.ts");
/* harmony import */ var _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventListenersView.js */ "./src/panels/event_listeners/EventListenersView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);