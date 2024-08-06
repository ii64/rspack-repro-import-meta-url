"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_browser_debugger_CSPViolationBreakpointsSidebarPane_js"],{

/***/ "./panels/browser_debugger/CSPViolationBreakpointsSidebarPane.js":
/*!***********************************************************************!*\
  !*** ./panels/browser_debugger/CSPViolationBreakpointsSidebarPane.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSPViolationBreakpointsSidebarPane: () => (/* binding */ CSPViolationBreakpointsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategorizedBreakpointsSidebarPane.js */ "./panels/browser_debugger/CategorizedBreakpointsSidebarPane.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class CSPViolationBreakpointsSidebarPane extends _CategorizedBreakpointsSidebarPane_js__WEBPACK_IMPORTED_MODULE_2__.CategorizedBreakpointsSidebarPane {
    constructor() {
        const breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().cspViolationBreakpoints();
        super(breakpoints, 'sources.csp-violation-breakpoints', "CSPViolation" /* Protocol.Debugger.PausedEventReason.CSPViolation */);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.section('sources.csp-violation-breakpoints')}`);
    }
    getBreakpointFromPausedDetails(details) {
        const breakpointType = details.auxData && details.auxData['violationType'] ? details.auxData['violationType'] : '';
        const breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().cspViolationBreakpoints();
        const breakpoint = breakpoints.find(x => x.type() === breakpointType);
        return breakpoint ? breakpoint : null;
    }
    toggleBreakpoint(breakpoint, enabled) {
        breakpoint.setEnabled(enabled);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DOMDebuggerModel.DOMDebuggerManager.instance().updateCSPViolationBreakpoints();
    }
}
//# sourceMappingURL=CSPViolationBreakpointsSidebarPane.js.map

/***/ })

}]);