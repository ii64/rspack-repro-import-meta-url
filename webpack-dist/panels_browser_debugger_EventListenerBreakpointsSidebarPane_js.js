"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_browser_debugger_EventListenerBreakpointsSidebarPane_js"],{

/***/ "./panels/browser_debugger/EventListenerBreakpointsSidebarPane.js":
/*!************************************************************************!*\
  !*** ./panels/browser_debugger/EventListenerBreakpointsSidebarPane.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenerBreakpointsSidebarPane: () => (/* binding */ EventListenerBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategorizedBreakpointsSidebarPane.js */ "./panels/browser_debugger/CategorizedBreakpointsSidebarPane.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



let eventListenerBreakpointsSidebarPaneInstance;
class EventListenerBreakpointsSidebarPane extends _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpointsSidebarPane {
    constructor() {
        let breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().eventListenerBreakpoints();
        const nonDomBreakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.EventBreakpointsModel.EventBreakpointsManager.instance().eventListenerBreakpoints();
        breakpoints = breakpoints.concat(nonDomBreakpoints);
        super(breakpoints, 'sources.event-listener-breakpoints', "EventListener" /* Protocol.Debugger.PausedEventReason.EventListener */);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.section('sources.event-listener-breakpoints')}`);
    }
    static instance() {
        if (!eventListenerBreakpointsSidebarPaneInstance) {
            eventListenerBreakpointsSidebarPaneInstance = new EventListenerBreakpointsSidebarPane();
        }
        return eventListenerBreakpointsSidebarPaneInstance;
    }
    getBreakpointFromPausedDetails(details) {
        const auxData = details.auxData;
        const domBreakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().resolveEventListenerBreakpoint(auxData);
        if (domBreakpoint) {
            return domBreakpoint;
        }
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.EventBreakpointsModel.EventBreakpointsManager.instance().resolveEventListenerBreakpoint(auxData);
    }
}
//# sourceMappingURL=EventListenerBreakpointsSidebarPane.js.map

/***/ })

}]);