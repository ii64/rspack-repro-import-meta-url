"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_CategorizedBreakpointL10n_ts"],{

/***/ "./src/panels/sources/CategorizedBreakpointL10n.ts":
/*!*********************************************************!*\
  !*** ./src/panels/sources/CategorizedBreakpointL10n.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocalizedBreakpointName: () => (/* binding */ getLocalizedBreakpointName)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The sources panel (via DebuggerPausedMessage) and the
 * "browser_debugger" module both require localized CategorizedBreakpoint
 * names. We put them "upstream" into "panels/sources" so they are
 * available to both.
 */



const UIStrings = {
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding
     */
    beforeBidderWorkletBiddingStart: 'Bidder Bidding Phase Start',
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#52-buyer-reporting-on-render-and-ad-events
     */
    beforeBidderWorkletReportingStart: 'Bidder Reporting Phase Start',
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#23-scoring-bids
     */
    beforeSellerWorkletScoringStart: 'Seller Scoring Phase Start',
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#51-seller-reporting-on-render
     */
    beforeSellerWorkletReportingStart: 'Seller Reporting Phase Start',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     *@example {setTimeout} PH1
     */
    setTimeoutOrIntervalFired: '{PH1} fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */
    scriptFirstStatement: 'Script First Statement',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */
    scriptBlockedByContentSecurity: 'Script Blocked by Content Security Policy',
    /**
     *@description Text for the request animation frame event
     */
    requestAnimationFrame: 'Request Animation Frame',
    /**
     *@description Text to cancel the animation frame
     */
    cancelAnimationFrame: 'Cancel Animation Frame',
    /**
     *@description Text for the event that an animation frame is fired
     */
    animationFrameFired: 'Animation Frame Fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */
    webglErrorFired: 'WebGL Error Fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */
    webglWarningFired: 'WebGL Warning Fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */
    setInnerhtml: 'Set `innerHTML`',
    /**
     *@description Name of a breakpoint type in the Sources Panel.
     */
    createCanvasContext: 'Create canvas context',
    /**
     *@description Name of a breakpoint type in the Sources Panel.
     */
    createAudiocontext: 'Create `AudioContext`',
    /**
     *@description Name of a breakpoint type in the Sources Panel. Close is a verb.
     */
    closeAudiocontext: 'Close `AudioContext`',
    /**
     *@description Name of a breakpoint type in the Sources Panel. Resume is a verb.
     */
    resumeAudiocontext: 'Resume `AudioContext`',
    /**
     *@description Name of a breakpoint type in the Sources Panel.
     */
    suspendAudiocontext: 'Suspend `AudioContext`',
    /**
     * @description Noun. Title for a checkbox that turns on breakpoints on Trusted Type sink violations.
     * "Trusted Types" is a Web API. A "Sink" (Noun, singular) is a special function, akin to a data sink, that expects
     * to receive data in a specific format. Should the data be in the wrong format, or something else
     * go wrong, its called a "sink violation".
     */
    sinkViolations: 'Sink Violations',
    /**
     *@description Title for a checkbox that turns on breakpoints on Trusted Type policy violations
     */
    policyViolations: 'Policy Violations',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/CategorizedBreakpointL10n.ts', UIStrings);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
function getLocalizedBreakpointName(name) {
    const l10nLazyName = LOCALIZED_NAMES.get(name) ?? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(name);
    return l10nLazyName();
}
const LOCALIZED_INSTRUMENTATION_NAMES = {
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.BeforeBidderWorkletBiddingStart]: i18nLazyString(UIStrings.beforeBidderWorkletBiddingStart),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.BeforeBidderWorkletReportingStart]: i18nLazyString(UIStrings.beforeBidderWorkletReportingStart),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.BeforeSellerWorkletScoringStart]: i18nLazyString(UIStrings.beforeSellerWorkletScoringStart),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.BeforeSellerWorkletReportingStart]: i18nLazyString(UIStrings.beforeSellerWorkletReportingStart),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.SetTimeout]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('setTimeout'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.ClearTimeout]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('clearTimeout'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.SetTimeoutCallback]: i18nLazyString(UIStrings.setTimeoutOrIntervalFired, { PH1: 'setTimeout' }),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.SetInterval]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('setInterval'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.ClearInterval]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('clearInterval'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.SetIntervalCallback]: i18nLazyString(UIStrings.setTimeoutOrIntervalFired, { PH1: 'setInterval' }),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.ScriptFirstStatement]: i18nLazyString(UIStrings.scriptFirstStatement),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.ScriptBlockedByCSP]: i18nLazyString(UIStrings.scriptBlockedByContentSecurity),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.SharedStorageWorkletScriptFirstStatement]: i18nLazyString(UIStrings.scriptFirstStatement),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.RequestAnimationFrame]: i18nLazyString(UIStrings.requestAnimationFrame),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.CancelAnimationFrame]: i18nLazyString(UIStrings.cancelAnimationFrame),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.RequestAnimationFrameCallback]: i18nLazyString(UIStrings.animationFrameFired),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.WebGLErrorFired]: i18nLazyString(UIStrings.webglErrorFired),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.WebGLWarningFired]: i18nLazyString(UIStrings.webglWarningFired),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.ElementSetInnerHTML]: i18nLazyString(UIStrings.setInnerhtml),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.CanvasContextCreated]: i18nLazyString(UIStrings.createCanvasContext),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.GeolocationGetCurrentPosition]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('getCurrentPosition'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.GeolocationWatchPosition]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('watchPosition'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.NotificationRequestPermission]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('requestPermission'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.DOMWindowClose]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('window.close'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.DocumentWrite]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('document.write'),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.AudioContextCreated]: i18nLazyString(UIStrings.createAudiocontext),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.AudioContextClosed]: i18nLazyString(UIStrings.closeAudiocontext),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.AudioContextResumed]: i18nLazyString(UIStrings.resumeAudiocontext),
    [_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.EventBreakpointsModel.InstrumentationNames.AudioContextSuspended]: i18nLazyString(UIStrings.suspendAudiocontext),
};
const LOCALIZED_CSP_VIOLATION_TYPES = {
    [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebugger.CSPViolationType.TrustedtypePolicyViolation]: i18nLazyString(UIStrings.policyViolations),
    [_generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebugger.CSPViolationType.TrustedtypeSinkViolation]: i18nLazyString(UIStrings.sinkViolations),
};
const LOCALIZED_NAMES = new Map([
    ...Object.entries(LOCALIZED_INSTRUMENTATION_NAMES),
    ...Object.entries(LOCALIZED_CSP_VIOLATION_TYPES),
]);


/***/ })

}]);