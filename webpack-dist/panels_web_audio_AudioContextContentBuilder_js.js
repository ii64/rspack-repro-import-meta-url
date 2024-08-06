"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_web_audio_AudioContextContentBuilder_js"],{

/***/ "./panels/web_audio/AudioContextContentBuilder.js":
/*!********************************************************!*\
  !*** ./panels/web_audio/AudioContextContentBuilder.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextDetailBuilder: () => (/* binding */ ContextDetailBuilder),
/* harmony export */   ContextSummaryBuilder: () => (/* binding */ ContextSummaryBuilder)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const UIStrings = {
    /**
     *@description The current state of an item
     */
    state: 'State',
    /**
     *@description Text in Audio Context Content Builder
     */
    sampleRate: 'Sample Rate',
    /**
     *@description Text in Audio Context Content Builder
     */
    callbackBufferSize: 'Callback Buffer Size',
    /**
     * @description Label in the Audio Context Content Builder for the maximum number of output channels
     * that this Audio Context has.
     */
    maxOutputChannels: 'Max Output Channels',
    /**
     *@description Text in Audio Context Content Builder
     */
    currentTime: 'Current Time',
    /**
     *@description Text in Audio Context Content Builder
     */
    callbackInterval: 'Callback Interval',
    /**
     *@description Text in Audio Context Content Builder
     */
    renderCapacity: 'Render Capacity',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/web_audio/AudioContextContentBuilder.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ContextDetailBuilder {
    fragment;
    container;
    constructor(context) {
        this.fragment = document.createDocumentFragment();
        this.container = document.createElement('div');
        this.container.classList.add('context-detail-container');
        this.fragment.appendChild(this.container);
        this.build(context);
    }
    build(context) {
        const title = context.contextType === 'realtime' ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('AudioContext') :
            _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.lockedString('OfflineAudioContext');
        this.addTitle(title, context.contextId);
        this.addEntry(i18nString(UIStrings.state), context.contextState);
        this.addEntry(i18nString(UIStrings.sampleRate), context.sampleRate, 'Hz');
        if (context.contextType === 'realtime') {
            this.addEntry(i18nString(UIStrings.callbackBufferSize), context.callbackBufferSize, 'frames');
        }
        this.addEntry(i18nString(UIStrings.maxOutputChannels), context.maxOutputChannelCount, 'ch');
    }
    addTitle(title, subtitle) {
        this.container.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html `
  <div class="context-detail-header">
  <div class="context-detail-title">${title}</div>
  <div class="context-detail-subtitle">${subtitle}</div>
  </div>
  `);
    }
    addEntry(entry, value, unit) {
        const valueWithUnit = value + (unit ? ` ${unit}` : '');
        this.container.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html `
  <div class="context-detail-row">
  <div class="context-detail-row-entry">${entry}</div>
  <div class="context-detail-row-value">${valueWithUnit}</div>
  </div>
  `);
    }
    getFragment() {
        return this.fragment;
    }
}
class ContextSummaryBuilder {
    fragment;
    constructor(contextId, contextRealtimeData) {
        const time = contextRealtimeData.currentTime.toFixed(3);
        const mean = (contextRealtimeData.callbackIntervalMean * 1000).toFixed(3);
        const stddev = (Math.sqrt(contextRealtimeData.callbackIntervalVariance) * 1000).toFixed(3);
        const capacity = (contextRealtimeData.renderCapacity * 100).toFixed(3);
        this.fragment = document.createDocumentFragment();
        this.fragment.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.html `
  <div class="context-summary-container">
  <span>${i18nString(UIStrings.currentTime)}: ${time} s</span>
  <span>\u2758</span>
  <span>${i18nString(UIStrings.callbackInterval)}: μ = ${mean} ms, σ = ${stddev} ms</span>
  <span>\u2758</span>
  <span>${i18nString(UIStrings.renderCapacity)}: ${capacity} %</span>
  </div>
  `);
    }
    getFragment() {
        return this.fragment;
    }
}
//# sourceMappingURL=AudioContextContentBuilder.js.map

/***/ })

}]);