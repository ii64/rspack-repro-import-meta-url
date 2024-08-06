"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_DebuggerPausedMessage_js"],{

/***/ "./panels/sources/CategorizedBreakpointL10n.js":
/*!*****************************************************!*\
  !*** ./panels/sources/CategorizedBreakpointL10n.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLocalizedBreakpointName: () => (/* binding */ getLocalizedBreakpointName)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
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
    ["beforeBidderWorkletBiddingStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeBidderWorkletBiddingStart */]: i18nLazyString(UIStrings.beforeBidderWorkletBiddingStart),
    ["beforeBidderWorkletReportingStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeBidderWorkletReportingStart */]: i18nLazyString(UIStrings.beforeBidderWorkletReportingStart),
    ["beforeSellerWorkletScoringStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeSellerWorkletScoringStart */]: i18nLazyString(UIStrings.beforeSellerWorkletScoringStart),
    ["beforeSellerWorkletReportingStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeSellerWorkletReportingStart */]: i18nLazyString(UIStrings.beforeSellerWorkletReportingStart),
    ["setTimeout" /* SDK.EventBreakpointsModel.InstrumentationNames.SetTimeout */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('setTimeout'),
    ["clearTimeout" /* SDK.EventBreakpointsModel.InstrumentationNames.ClearTimeout */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('clearTimeout'),
    ["setTimeout.callback" /* SDK.EventBreakpointsModel.InstrumentationNames.SetTimeoutCallback */]: i18nLazyString(UIStrings.setTimeoutOrIntervalFired, { PH1: 'setTimeout' }),
    ["setInterval" /* SDK.EventBreakpointsModel.InstrumentationNames.SetInterval */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('setInterval'),
    ["clearInterval" /* SDK.EventBreakpointsModel.InstrumentationNames.ClearInterval */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('clearInterval'),
    ["setInterval.callback" /* SDK.EventBreakpointsModel.InstrumentationNames.SetIntervalCallback */]: i18nLazyString(UIStrings.setTimeoutOrIntervalFired, { PH1: 'setInterval' }),
    ["scriptFirstStatement" /* SDK.EventBreakpointsModel.InstrumentationNames.ScriptFirstStatement */]: i18nLazyString(UIStrings.scriptFirstStatement),
    ["scriptBlockedByCSP" /* SDK.EventBreakpointsModel.InstrumentationNames.ScriptBlockedByCSP */]: i18nLazyString(UIStrings.scriptBlockedByContentSecurity),
    ["sharedStorageWorkletScriptFirstStatement" /* SDK.EventBreakpointsModel.InstrumentationNames.SharedStorageWorkletScriptFirstStatement */]: i18nLazyString(UIStrings.scriptFirstStatement),
    ["requestAnimationFrame" /* SDK.EventBreakpointsModel.InstrumentationNames.RequestAnimationFrame */]: i18nLazyString(UIStrings.requestAnimationFrame),
    ["cancelAnimationFrame" /* SDK.EventBreakpointsModel.InstrumentationNames.CancelAnimationFrame */]: i18nLazyString(UIStrings.cancelAnimationFrame),
    ["requestAnimationFrame.callback" /* SDK.EventBreakpointsModel.InstrumentationNames.RequestAnimationFrameCallback */]: i18nLazyString(UIStrings.animationFrameFired),
    ["webglErrorFired" /* SDK.EventBreakpointsModel.InstrumentationNames.WebGLErrorFired */]: i18nLazyString(UIStrings.webglErrorFired),
    ["webglWarningFired" /* SDK.EventBreakpointsModel.InstrumentationNames.WebGLWarningFired */]: i18nLazyString(UIStrings.webglWarningFired),
    ["Element.setInnerHTML" /* SDK.EventBreakpointsModel.InstrumentationNames.ElementSetInnerHTML */]: i18nLazyString(UIStrings.setInnerhtml),
    ["canvasContextCreated" /* SDK.EventBreakpointsModel.InstrumentationNames.CanvasContextCreated */]: i18nLazyString(UIStrings.createCanvasContext),
    ["Geolocation.getCurrentPosition" /* SDK.EventBreakpointsModel.InstrumentationNames.GeolocationGetCurrentPosition */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('getCurrentPosition'),
    ["Geolocation.watchPosition" /* SDK.EventBreakpointsModel.InstrumentationNames.GeolocationWatchPosition */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('watchPosition'),
    ["Notification.requestPermission" /* SDK.EventBreakpointsModel.InstrumentationNames.NotificationRequestPermission */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('requestPermission'),
    ["DOMWindow.close" /* SDK.EventBreakpointsModel.InstrumentationNames.DOMWindowClose */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('window.close'),
    ["Document.write" /* SDK.EventBreakpointsModel.InstrumentationNames.DocumentWrite */]: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('document.write'),
    ["audioContextCreated" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextCreated */]: i18nLazyString(UIStrings.createAudiocontext),
    ["audioContextClosed" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextClosed */]: i18nLazyString(UIStrings.closeAudiocontext),
    ["audioContextResumed" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextResumed */]: i18nLazyString(UIStrings.resumeAudiocontext),
    ["audioContextSuspended" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextSuspended */]: i18nLazyString(UIStrings.suspendAudiocontext),
};
const LOCALIZED_CSP_VIOLATION_TYPES = {
    ["trustedtype-policy-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypePolicyViolation */]: i18nLazyString(UIStrings.policyViolations),
    ["trustedtype-sink-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypeSinkViolation */]: i18nLazyString(UIStrings.sinkViolations),
};
const LOCALIZED_NAMES = new Map([
    ...Object.entries(LOCALIZED_INSTRUMENTATION_NAMES),
    ...Object.entries(LOCALIZED_CSP_VIOLATION_TYPES),
]);
//# sourceMappingURL=CategorizedBreakpointL10n.js.map

/***/ }),

/***/ "./panels/sources/DebuggerPausedMessage.js":
/*!*************************************************!*\
  !*** ./panels/sources/DebuggerPausedMessage.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakpointTypeNouns: () => (/* binding */ BreakpointTypeNouns),
/* harmony export */   DebuggerPausedMessage: () => (/* binding */ DebuggerPausedMessage)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategorizedBreakpointL10n.js */ "./panels/sources/CategorizedBreakpointL10n.js");
/* harmony import */ var _debuggerPausedMessage_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debuggerPausedMessage.css.js */ "./panels/sources/debuggerPausedMessage.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit
     *@example {conditional breakpoint} PH1
     */
    pausedOnS: 'Paused on {PH1}',
    /**
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit because a child is added to the subtree
     *@example {node} PH1
     */
    childSAdded: 'Child {PH1} added',
    /**
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit because a descendant is added
     *@example {node} PH1
     */
    descendantSAdded: 'Descendant {PH1} added',
    /**
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit because a descendant is removed
     *@example {node} PH1
     */
    descendantSRemoved: 'Descendant {PH1} removed',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedOnEventListener: 'Paused on event listener',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedOnXhrOrFetch: 'Paused on XHR or fetch',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedOnException: 'Paused on exception',
    /**
     *@description We pause exactly when the promise rejection is happening, so that the user can see where in the code it comes from.
     * A Promise is a Web API object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
     * that will either be 'fulfilled' or 'rejected' at some unknown time in the future.
     * The subject of the term is omited but it is "Execution", that is, "Execution was paused on <event>".
     */
    pausedOnPromiseRejection: 'Paused on `promise` rejection',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedOnAssertion: 'Paused on assertion',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedOnDebuggedFunction: 'Paused on debugged function',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedBeforePotentialOutofmemory: 'Paused before potential out-of-memory crash',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedOnCspViolation: 'Paused on CSP violation',
    /**
     *@description Text in Debugger Paused Message of the Sources panel specifying cause of break
     */
    trustedTypeSinkViolation: '`Trusted Type` Sink Violation',
    /**
     *@description Text in Debugger Paused Message of the Sources panel specifying cause of break
     */
    trustedTypePolicyViolation: '`Trusted Type` Policy Violation',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    pausedOnBreakpoint: 'Paused on breakpoint',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    debuggerPaused: 'Debugger paused',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    subtreeModifications: 'subtree modifications',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    attributeModifications: 'attribute modifications',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */
    nodeRemoval: 'node removal',
    /**
     *@description Error message text
     *@example {Snag Error} PH1
     */
    webglErrorFiredS: 'WebGL Error Fired ({PH1})',
    /**
     *@description Text in DOMDebugger Model
     *@example {"script-src 'self'"} PH1
     */
    scriptBlockedDueToContent: 'Script blocked due to Content Security Policy directive: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/DebuggerPausedMessage.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
class DebuggerPausedMessage {
    elementInternal;
    contentElement;
    constructor() {
        this.elementInternal = document.createElement('div');
        this.elementInternal.classList.add('paused-message');
        this.elementInternal.classList.add('flex-none');
        this.elementInternal.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dialog('debugger-paused')}`);
        const root = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createShadowRootWithCoreStyles(this.elementInternal, { cssFile: [_debuggerPausedMessage_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]], delegatesFocus: undefined });
        this.contentElement = root.createChild('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.markAsPoliteLiveRegion(this.elementInternal, false);
    }
    element() {
        return this.elementInternal;
    }
    static descriptionWithoutStack(description) {
        const firstCallFrame = /^\s+at\s/m.exec(description);
        return firstCallFrame ? description.substring(0, firstCallFrame.index - 1) :
            description.substring(0, description.lastIndexOf('\n'));
    }
    static async createDOMBreakpointHitMessage(details) {
        const messageWrapper = document.createElement('span');
        const domDebuggerModel = details.debuggerModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
        if (!details.auxData || !domDebuggerModel) {
            return messageWrapper;
        }
        const data = domDebuggerModel.resolveDOMBreakpointData(details.auxData);
        if (!data) {
            return messageWrapper;
        }
        const mainElement = messageWrapper.createChild('div', 'status-main');
        const mainIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
        mainIcon.data = {
            iconName: 'info',
            color: 'var(--sys-color-on-yellow-container)',
            width: '16px',
            height: '16px',
        };
        mainElement.appendChild(mainIcon);
        const breakpointType = BreakpointTypeNouns.get(data.type);
        mainElement.appendChild(document.createTextNode(i18nString(UIStrings.pausedOnS, { PH1: breakpointType ? breakpointType() : String(null) })));
        const subElement = messageWrapper.createChild('div', 'status-sub monospace');
        const linkifiedNode = await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(data.node);
        subElement.appendChild(linkifiedNode);
        if (data.targetNode) {
            const targetNodeLink = await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(data.targetNode);
            let messageElement;
            if (data.insertion) {
                if (data.targetNode === data.node) {
                    messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.childSAdded, { PH1: targetNodeLink });
                }
                else {
                    messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.descendantSAdded, { PH1: targetNodeLink });
                }
            }
            else {
                messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.descendantSRemoved, { PH1: targetNodeLink });
            }
            subElement.appendChild(document.createElement('br'));
            subElement.appendChild(messageElement);
        }
        return messageWrapper;
    }
    static #findEventNameForUi(detailsAuxData) {
        if (!detailsAuxData) {
            return '';
        }
        const { eventName, webglErrorName, directiveText, targetName } = detailsAuxData;
        if (eventName === 'instrumentation:webglErrorFired' && webglErrorName) {
            // If there is a hex code of the error, display only this.
            const errorName = webglErrorName.replace(/^.*(0x[0-9a-f]+).*$/i, '$1');
            return i18nString(UIStrings.webglErrorFiredS, { PH1: errorName });
        }
        if (eventName === 'instrumentation:scriptBlockedByCSP' && directiveText) {
            return i18nString(UIStrings.scriptBlockedDueToContent, { PH1: directiveText });
        }
        let breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.EventBreakpointsModel.EventBreakpointsManager.instance().resolveEventListenerBreakpoint(detailsAuxData);
        if (breakpoint) {
            // EventBreakpointsManager breakpoints are the only ones with localized names.
            return (0,_CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_6__.getLocalizedBreakpointName)(breakpoint.name);
        }
        breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerManager.instance().resolveEventListenerBreakpoint(detailsAuxData);
        if (breakpoint && targetName) {
            // For standard DOM event listeners we prepend the target of the event.
            return targetName + '.' + breakpoint.name;
        }
        return breakpoint?.name ?? '';
    }
    async render(details, debuggerWorkspaceBinding, breakpointManager) {
        this.contentElement.removeChildren();
        this.contentElement.hidden = !details;
        if (!details) {
            return;
        }
        const status = this.contentElement.createChild('div', 'paused-status');
        const errorLike = details.reason === "exception" /* Protocol.Debugger.PausedEventReason.Exception */ ||
            details.reason === "promiseRejection" /* Protocol.Debugger.PausedEventReason.PromiseRejection */ ||
            details.reason === "assert" /* Protocol.Debugger.PausedEventReason.Assert */ ||
            details.reason === "OOM" /* Protocol.Debugger.PausedEventReason.OOM */;
        let messageWrapper;
        if (details.reason === "DOM" /* Protocol.Debugger.PausedEventReason.DOM */) {
            messageWrapper = await DebuggerPausedMessage.createDOMBreakpointHitMessage(details);
        }
        else if (details.reason === "EventListener" /* Protocol.Debugger.PausedEventReason.EventListener */) {
            const eventNameForUI = DebuggerPausedMessage.#findEventNameForUi(details.auxData);
            messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnEventListener), eventNameForUI);
        }
        else if (details.reason === "XHR" /* Protocol.Debugger.PausedEventReason.XHR */) {
            const auxData = details.auxData;
            messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnXhrOrFetch), auxData.url || '');
        }
        else if (details.reason === "exception" /* Protocol.Debugger.PausedEventReason.Exception */) {
            const auxData = details.auxData;
            const description = auxData.description || auxData.value || '';
            const descriptionWithoutStack = DebuggerPausedMessage.descriptionWithoutStack(description);
            messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnException), descriptionWithoutStack, description);
        }
        else if (details.reason === "promiseRejection" /* Protocol.Debugger.PausedEventReason.PromiseRejection */) {
            const auxData = details.auxData;
            const description = auxData.description || auxData.value || '';
            const descriptionWithoutStack = DebuggerPausedMessage.descriptionWithoutStack(description);
            messageWrapper =
                buildWrapper(i18nString(UIStrings.pausedOnPromiseRejection), descriptionWithoutStack, description);
        }
        else if (details.reason === "assert" /* Protocol.Debugger.PausedEventReason.Assert */) {
            messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnAssertion));
        }
        else if (details.reason === "debugCommand" /* Protocol.Debugger.PausedEventReason.DebugCommand */) {
            messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnDebuggedFunction));
        }
        else if (details.reason === "OOM" /* Protocol.Debugger.PausedEventReason.OOM */) {
            messageWrapper = buildWrapper(i18nString(UIStrings.pausedBeforePotentialOutofmemory));
        }
        else if (details.reason === "CSPViolation" /* Protocol.Debugger.PausedEventReason.CSPViolation */ && details.auxData &&
            details.auxData['violationType']) {
            const text = details.auxData['violationType'];
            if (text === "trustedtype-sink-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypeSinkViolation */) {
                messageWrapper =
                    buildWrapper(i18nString(UIStrings.pausedOnCspViolation), i18nString(UIStrings.trustedTypeSinkViolation));
            }
            else if (text === "trustedtype-policy-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypePolicyViolation */) {
                messageWrapper =
                    buildWrapper(i18nString(UIStrings.pausedOnCspViolation), i18nString(UIStrings.trustedTypePolicyViolation));
            }
        }
        else if (details.callFrames.length) {
            const uiLocation = await debuggerWorkspaceBinding.rawLocationToUILocation(details.callFrames[0].location());
            const breakpoint = uiLocation ? breakpointManager.findBreakpoint(uiLocation) : null;
            const defaultText = breakpoint ? i18nString(UIStrings.pausedOnBreakpoint) : i18nString(UIStrings.debuggerPaused);
            messageWrapper = buildWrapper(defaultText);
        }
        else {
            console.warn('ScriptsPanel paused, but callFrames.length is zero.'); // TODO remove this once we understand this case better
        }
        status.classList.toggle('error-reason', errorLike);
        if (messageWrapper) {
            status.appendChild(messageWrapper);
        }
        function buildWrapper(mainText, subText, title) {
            const messageWrapper = document.createElement('span');
            const mainElement = messageWrapper.createChild('div', 'status-main');
            const mainIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
            mainIcon.data = {
                iconName: errorLike ? 'cross-circle-filled' : 'info',
                color: errorLike ? 'var(--icon-error)' : 'var(--sys-color-on-yellow-container)',
                width: '16px',
                height: '16px',
            };
            mainElement.appendChild(mainIcon);
            mainElement.appendChild(document.createTextNode(mainText));
            if (subText) {
                const subElement = messageWrapper.createChild('div', 'status-sub monospace');
                subElement.textContent = subText;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(subElement, title || subText);
            }
            return messageWrapper;
        }
    }
}
const BreakpointTypeNouns = new Map([
    ["subtree-modified" /* Protocol.DOMDebugger.DOMBreakpointType.SubtreeModified */, i18nLazyString(UIStrings.subtreeModifications)],
    ["attribute-modified" /* Protocol.DOMDebugger.DOMBreakpointType.AttributeModified */, i18nLazyString(UIStrings.attributeModifications)],
    ["node-removed" /* Protocol.DOMDebugger.DOMBreakpointType.NodeRemoved */, i18nLazyString(UIStrings.nodeRemoval)],
]);
//# sourceMappingURL=DebuggerPausedMessage.js.map

/***/ }),

/***/ "./panels/sources/debuggerPausedMessage.css.js":
/*!*****************************************************!*\
  !*** ./panels/sources/debuggerPausedMessage.css.js ***!
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.paused-status {
  margin: 6px;
  padding: 4px 10px;
  border-radius: 10px;
  background-color: var(--sys-color-yellow-container);
  color: var(--sys-color-on-yellow-container);
}

.paused-status.error-reason {
  background-color: var(--sys-color-surface-error);
  color: var(--sys-color-on-surface-error);
}

.status-main {
  padding-left: 18px;
  position: relative;
}

.status-sub:not(:empty) {
  padding-left: 15px;
  padding-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.paused-status.error-reason .status-sub {
  color: var(--sys-color-error);
  line-height: 11px;
  max-height: 27px;
  user-select: text;
}

devtools-icon {
  position: absolute;
  left: -1px;
  top: -1px;
}

/*# sourceURL=debuggerPausedMessage.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);