"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_CategorizedBreakpointL10n_js"], {
"./panels/sources/CategorizedBreakpointL10n.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getLocalizedBreakpointName: function() { return getLocalizedBreakpointName; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The sources panel (via DebuggerPausedMessage) and the
 * "browser_debugger" module both require localized CategorizedBreakpoint
 * names. We put them "upstream" into "panels/sources" so they are
 * available to both.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


var UIStrings = {
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#32-on-device-bidding
     */ beforeBidderWorkletBiddingStart: 'Bidder Bidding Phase Start',
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#52-buyer-reporting-on-render-and-ad-events
     */ beforeBidderWorkletReportingStart: 'Bidder Reporting Phase Start',
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#23-scoring-bids
     */ beforeSellerWorkletScoringStart: 'Seller Scoring Phase Start',
    /**
     * @description Name of a breakpoint type.
     * https://github.com/WICG/turtledove/blob/main/FLEDGE.md#51-seller-reporting-on-render
     */ beforeSellerWorkletReportingStart: 'Seller Reporting Phase Start',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     *@example {setTimeout} PH1
     */ setTimeoutOrIntervalFired: '{PH1} fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */ scriptFirstStatement: 'Script First Statement',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */ scriptBlockedByContentSecurity: 'Script Blocked by Content Security Policy',
    /**
     *@description Text for the request animation frame event
     */ requestAnimationFrame: 'Request Animation Frame',
    /**
     *@description Text to cancel the animation frame
     */ cancelAnimationFrame: 'Cancel Animation Frame',
    /**
     *@description Text for the event that an animation frame is fired
     */ animationFrameFired: 'Animation Frame Fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */ webglErrorFired: 'WebGL Error Fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */ webglWarningFired: 'WebGL Warning Fired',
    /**
     *@description Text in the Event Listener Breakpoints Panel of the JavaScript Debugger in the Sources Panel
     */ setInnerhtml: 'Set `innerHTML`',
    /**
     *@description Name of a breakpoint type in the Sources Panel.
     */ createCanvasContext: 'Create canvas context',
    /**
     *@description Name of a breakpoint type in the Sources Panel.
     */ createAudiocontext: 'Create `AudioContext`',
    /**
     *@description Name of a breakpoint type in the Sources Panel. Close is a verb.
     */ closeAudiocontext: 'Close `AudioContext`',
    /**
     *@description Name of a breakpoint type in the Sources Panel. Resume is a verb.
     */ resumeAudiocontext: 'Resume `AudioContext`',
    /**
     *@description Name of a breakpoint type in the Sources Panel.
     */ suspendAudiocontext: 'Suspend `AudioContext`',
    /**
     * @description Noun. Title for a checkbox that turns on breakpoints on Trusted Type sink violations.
     * "Trusted Types" is a Web API. A "Sink" (Noun, singular) is a special function, akin to a data sink, that expects
     * to receive data in a specific format. Should the data be in the wrong format, or something else
     * go wrong, its called a "sink violation".
     */ sinkViolations: 'Sink Violations',
    /**
     *@description Title for a checkbox that turns on breakpoints on Trusted Type policy violations
     */ policyViolations: 'Policy Violations'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/CategorizedBreakpointL10n.ts', UIStrings);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
function getLocalizedBreakpointName(name) {
    var _LOCALIZED_NAMES_get;
    var l10nLazyName = (_LOCALIZED_NAMES_get = LOCALIZED_NAMES.get(name)) !== null && _LOCALIZED_NAMES_get !== void 0 ? _LOCALIZED_NAMES_get : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString(name);
    return l10nLazyName();
}
var _obj;
var LOCALIZED_INSTRUMENTATION_NAMES = (_obj = {}, _define_property(_obj, "beforeBidderWorkletBiddingStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeBidderWorkletBiddingStart */ , i18nLazyString(UIStrings.beforeBidderWorkletBiddingStart)), _define_property(_obj, "beforeBidderWorkletReportingStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeBidderWorkletReportingStart */ , i18nLazyString(UIStrings.beforeBidderWorkletReportingStart)), _define_property(_obj, "beforeSellerWorkletScoringStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeSellerWorkletScoringStart */ , i18nLazyString(UIStrings.beforeSellerWorkletScoringStart)), _define_property(_obj, "beforeSellerWorkletReportingStart" /* SDK.EventBreakpointsModel.InstrumentationNames.BeforeSellerWorkletReportingStart */ , i18nLazyString(UIStrings.beforeSellerWorkletReportingStart)), _define_property(_obj, "setTimeout" /* SDK.EventBreakpointsModel.InstrumentationNames.SetTimeout */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('setTimeout')), _define_property(_obj, "clearTimeout" /* SDK.EventBreakpointsModel.InstrumentationNames.ClearTimeout */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('clearTimeout')), _define_property(_obj, "setTimeout.callback" /* SDK.EventBreakpointsModel.InstrumentationNames.SetTimeoutCallback */ , i18nLazyString(UIStrings.setTimeoutOrIntervalFired, {
    PH1: 'setTimeout'
})), _define_property(_obj, "setInterval" /* SDK.EventBreakpointsModel.InstrumentationNames.SetInterval */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('setInterval')), _define_property(_obj, "clearInterval" /* SDK.EventBreakpointsModel.InstrumentationNames.ClearInterval */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('clearInterval')), _define_property(_obj, "setInterval.callback" /* SDK.EventBreakpointsModel.InstrumentationNames.SetIntervalCallback */ , i18nLazyString(UIStrings.setTimeoutOrIntervalFired, {
    PH1: 'setInterval'
})), _define_property(_obj, "scriptFirstStatement" /* SDK.EventBreakpointsModel.InstrumentationNames.ScriptFirstStatement */ , i18nLazyString(UIStrings.scriptFirstStatement)), _define_property(_obj, "scriptBlockedByCSP" /* SDK.EventBreakpointsModel.InstrumentationNames.ScriptBlockedByCSP */ , i18nLazyString(UIStrings.scriptBlockedByContentSecurity)), _define_property(_obj, "sharedStorageWorkletScriptFirstStatement" /* SDK.EventBreakpointsModel.InstrumentationNames.SharedStorageWorkletScriptFirstStatement */ , i18nLazyString(UIStrings.scriptFirstStatement)), _define_property(_obj, "requestAnimationFrame" /* SDK.EventBreakpointsModel.InstrumentationNames.RequestAnimationFrame */ , i18nLazyString(UIStrings.requestAnimationFrame)), _define_property(_obj, "cancelAnimationFrame" /* SDK.EventBreakpointsModel.InstrumentationNames.CancelAnimationFrame */ , i18nLazyString(UIStrings.cancelAnimationFrame)), _define_property(_obj, "requestAnimationFrame.callback" /* SDK.EventBreakpointsModel.InstrumentationNames.RequestAnimationFrameCallback */ , i18nLazyString(UIStrings.animationFrameFired)), _define_property(_obj, "webglErrorFired" /* SDK.EventBreakpointsModel.InstrumentationNames.WebGLErrorFired */ , i18nLazyString(UIStrings.webglErrorFired)), _define_property(_obj, "webglWarningFired" /* SDK.EventBreakpointsModel.InstrumentationNames.WebGLWarningFired */ , i18nLazyString(UIStrings.webglWarningFired)), _define_property(_obj, "Element.setInnerHTML" /* SDK.EventBreakpointsModel.InstrumentationNames.ElementSetInnerHTML */ , i18nLazyString(UIStrings.setInnerhtml)), _define_property(_obj, "canvasContextCreated" /* SDK.EventBreakpointsModel.InstrumentationNames.CanvasContextCreated */ , i18nLazyString(UIStrings.createCanvasContext)), _define_property(_obj, "Geolocation.getCurrentPosition" /* SDK.EventBreakpointsModel.InstrumentationNames.GeolocationGetCurrentPosition */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('getCurrentPosition')), _define_property(_obj, "Geolocation.watchPosition" /* SDK.EventBreakpointsModel.InstrumentationNames.GeolocationWatchPosition */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('watchPosition')), _define_property(_obj, "Notification.requestPermission" /* SDK.EventBreakpointsModel.InstrumentationNames.NotificationRequestPermission */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('requestPermission')), _define_property(_obj, "DOMWindow.close" /* SDK.EventBreakpointsModel.InstrumentationNames.DOMWindowClose */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('window.close')), _define_property(_obj, "Document.write" /* SDK.EventBreakpointsModel.InstrumentationNames.DocumentWrite */ , _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedLazyString('document.write')), _define_property(_obj, "audioContextCreated" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextCreated */ , i18nLazyString(UIStrings.createAudiocontext)), _define_property(_obj, "audioContextClosed" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextClosed */ , i18nLazyString(UIStrings.closeAudiocontext)), _define_property(_obj, "audioContextResumed" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextResumed */ , i18nLazyString(UIStrings.resumeAudiocontext)), _define_property(_obj, "audioContextSuspended" /* SDK.EventBreakpointsModel.InstrumentationNames.AudioContextSuspended */ , i18nLazyString(UIStrings.suspendAudiocontext)), _obj);
var _obj1;
var LOCALIZED_CSP_VIOLATION_TYPES = (_obj1 = {}, _define_property(_obj1, "trustedtype-policy-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypePolicyViolation */ , i18nLazyString(UIStrings.policyViolations)), _define_property(_obj1, "trustedtype-sink-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypeSinkViolation */ , i18nLazyString(UIStrings.sinkViolations)), _obj1);
var LOCALIZED_NAMES = new Map(_to_consumable_array(Object.entries(LOCALIZED_INSTRUMENTATION_NAMES)).concat(_to_consumable_array(Object.entries(LOCALIZED_CSP_VIOLATION_TYPES)))); //# sourceMappingURL=CategorizedBreakpointL10n.js.map


}),

}]);