"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_WebAudioView_ts"],{

/***/ "./src/panels/web_audio/AudioContextContentBuilder.ts":
/*!************************************************************!*\
  !*** ./src/panels/web_audio/AudioContextContentBuilder.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContextDetailBuilder: () => (/* binding */ ContextDetailBuilder),
/* harmony export */   ContextSummaryBuilder: () => (/* binding */ ContextSummaryBuilder)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
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
    constructor(context) {
        Object.defineProperty(this, "fragment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "container", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
    constructor(contextId, contextRealtimeData) {
        Object.defineProperty(this, "fragment", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/web_audio/AudioContextSelector.ts":
/*!******************************************************!*\
  !*** ./src/panels/web_audio/AudioContextSelector.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioContextSelector: () => (/* binding */ AudioContextSelector),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './audioContextSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text that shows there is no recording
     */
    noRecordings: '(no recordings)',
    /**
     *@description Label prefix for an audio context selection
     *@example {realtime (1e03ec)} PH1
     */
    audioContextS: 'Audio context: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/web_audio/AudioContextSelector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class AudioContextSelector extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor() {
        super();
        Object.defineProperty(this, "placeholderText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dropDown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbarItemInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedContextInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.placeholderText = i18nString(UIStrings.noRecordings);
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        this.dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SoftDropDown.SoftDropDown(this.items, this, 'audio-context');
        this.dropDown.setPlaceholderText(this.placeholderText);
        this.toolbarItemInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(this.dropDown.element);
        this.toolbarItemInternal.setEnabled(false);
        this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, { PH1: this.placeholderText }));
        this.items.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.Events.ItemsReplaced, this.onListItemReplaced, this);
        this.toolbarItemInternal.element.classList.add('toolbar-has-dropdown');
        this.selectedContextInternal = null;
    }
    onListItemReplaced() {
        const hasItems = Boolean(this.items.length);
        this.toolbarItemInternal.setEnabled(hasItems);
        if (!hasItems) {
            this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, { PH1: this.placeholderText }));
        }
    }
    contextCreated({ data: context }) {
        this.items.insert(this.items.length, context);
        // Select if this is the first item.
        if (this.items.length === 1) {
            this.dropDown.selectItem(context);
        }
    }
    contextDestroyed({ data: contextId }) {
        const contextIndex = this.items.findIndex((context) => context.contextId === contextId);
        if (contextIndex > -1) {
            this.items.remove(contextIndex);
        }
    }
    contextChanged({ data: changedContext }) {
        const contextIndex = this.items.findIndex((context) => context.contextId === changedContext.contextId);
        if (contextIndex > -1) {
            this.items.replace(contextIndex, changedContext);
            // If the changed context is currently selected by user. Re-select it
            // because the actual element is replaced with a new one.
            if (this.selectedContextInternal && this.selectedContextInternal.contextId === changedContext.contextId) {
                this.dropDown.selectItem(changedContext);
            }
        }
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './audioContextSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        const title = shadowRoot.createChild('div', 'title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
        return element;
    }
    selectedContext() {
        if (!this.selectedContextInternal) {
            return null;
        }
        return this.selectedContextInternal;
    }
    highlightedItemChanged(from, to, fromElement, toElement) {
        if (fromElement) {
            fromElement.classList.remove('highlighted');
        }
        if (toElement) {
            toElement.classList.add('highlighted');
        }
    }
    isItemSelectable(_item) {
        return true;
    }
    itemSelected(item) {
        if (!item) {
            return;
        }
        // It's possible that no context is selected yet.
        if (!this.selectedContextInternal || this.selectedContextInternal.contextId !== item.contextId) {
            this.selectedContextInternal = item;
            this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, { PH1: this.titleFor(item) }));
        }
        this.dispatchEventToListeners(Events.ContextSelected, item);
    }
    reset() {
        this.items.replaceAll([]);
    }
    titleFor(context) {
        return `${context.contextType} (${context.contextId.substr(-6)})`;
    }
    toolbarItem() {
        return this.toolbarItemInternal;
    }
}
var Events;
(function (Events) {
    Events["ContextSelected"] = "ContextSelected";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/panels/web_audio/WebAudioModel.ts":
/*!***********************************************!*\
  !*** ./src/panels/web_audio/WebAudioModel.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   WebAudioModel: () => (/* binding */ WebAudioModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class WebAudioModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    constructor(target) {
        super(target);
        Object.defineProperty(this, "enabled", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "agent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.enabled = false;
        this.agent = target.webAudioAgent();
        target.registerWebAudioDispatcher(this);
        // TODO(crbug.com/963510): Some OfflineAudioContexts are not uninitialized
        // properly because LifeCycleObserver::ContextDestroyed() is not fired for
        // unknown reasons. This creates inconsistency in AudioGraphTracer
        // and AudioContextSelector in DevTools.
        //
        // To resolve this inconsistency, we flush the leftover from the previous
        // frame when the current page is loaded. This call can be omitted when the
        // bug is fixed.
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.FrameNavigated, this.flushContexts, this);
    }
    flushContexts() {
        this.dispatchEventToListeners(Events.ModelReset);
    }
    async suspendModel() {
        this.dispatchEventToListeners(Events.ModelSuspend);
        await this.agent.invoke_disable();
    }
    async resumeModel() {
        if (!this.enabled) {
            return Promise.resolve();
        }
        await this.agent.invoke_enable();
    }
    ensureEnabled() {
        if (this.enabled) {
            return;
        }
        void this.agent.invoke_enable();
        this.enabled = true;
    }
    contextCreated({ context }) {
        this.dispatchEventToListeners(Events.ContextCreated, context);
    }
    contextWillBeDestroyed({ contextId }) {
        this.dispatchEventToListeners(Events.ContextDestroyed, contextId);
    }
    contextChanged({ context }) {
        this.dispatchEventToListeners(Events.ContextChanged, context);
    }
    audioListenerCreated({ listener }) {
        this.dispatchEventToListeners(Events.AudioListenerCreated, listener);
    }
    audioListenerWillBeDestroyed({ listenerId, contextId }) {
        this.dispatchEventToListeners(Events.AudioListenerWillBeDestroyed, { listenerId, contextId });
    }
    audioNodeCreated({ node }) {
        this.dispatchEventToListeners(Events.AudioNodeCreated, node);
    }
    audioNodeWillBeDestroyed({ contextId, nodeId }) {
        this.dispatchEventToListeners(Events.AudioNodeWillBeDestroyed, { contextId, nodeId });
    }
    audioParamCreated({ param }) {
        this.dispatchEventToListeners(Events.AudioParamCreated, param);
    }
    audioParamWillBeDestroyed({ contextId, nodeId, paramId }) {
        this.dispatchEventToListeners(Events.AudioParamWillBeDestroyed, { contextId, nodeId, paramId });
    }
    nodesConnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners(Events.NodesConnected, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodesDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners(Events.NodesDisconnected, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodeParamConnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners(Events.NodeParamConnected, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    nodeParamDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners(Events.NodeParamDisconnected, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    async requestRealtimeData(contextId) {
        const realtimeResponse = await this.agent.invoke_getRealtimeData({ contextId });
        return realtimeResponse.realtimeData;
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(WebAudioModel, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Capability.DOM, autostart: false });
var Events;
(function (Events) {
    Events["ContextCreated"] = "ContextCreated";
    Events["ContextDestroyed"] = "ContextDestroyed";
    Events["ContextChanged"] = "ContextChanged";
    Events["ModelReset"] = "ModelReset";
    Events["ModelSuspend"] = "ModelSuspend";
    Events["AudioListenerCreated"] = "AudioListenerCreated";
    Events["AudioListenerWillBeDestroyed"] = "AudioListenerWillBeDestroyed";
    Events["AudioNodeCreated"] = "AudioNodeCreated";
    Events["AudioNodeWillBeDestroyed"] = "AudioNodeWillBeDestroyed";
    Events["AudioParamCreated"] = "AudioParamCreated";
    Events["AudioParamWillBeDestroyed"] = "AudioParamWillBeDestroyed";
    Events["NodesConnected"] = "NodesConnected";
    Events["NodesDisconnected"] = "NodesDisconnected";
    Events["NodeParamConnected"] = "NodeParamConnected";
    Events["NodeParamDisconnected"] = "NodeParamDisconnected";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/panels/web_audio/WebAudioView.ts":
/*!**********************************************!*\
  !*** ./src/panels/web_audio/WebAudioView.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebAudioView: () => (/* binding */ WebAudioView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AudioContextContentBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioContextContentBuilder.js */ "./src/panels/web_audio/AudioContextContentBuilder.ts");
/* harmony import */ var _AudioContextSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudioContextSelector.js */ "./src/panels/web_audio/AudioContextSelector.ts");
/* harmony import */ var _graph_visualizer_graph_visualizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph_visualizer/graph_visualizer.js */ "./src/panels/web_audio/graph_visualizer/graph_visualizer.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './webAudio.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebAudioModel.js */ "./src/panels/web_audio/WebAudioModel.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     *@description Text in Web Audio View
     */
    openAPageThatUsesWebAudioApiTo: 'Open a page that uses Web Audio API to start monitoring.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/web_audio/WebAudioView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class WebAudioView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ThrottledWidget.ThrottledWidget {
    constructor() {
        super(true, 1000);
        Object.defineProperty(this, "contextSelector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contentContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "detailViewContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "graphManager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "landingPage", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "summaryBarContainer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.panel('web-audio').track({ resize: true })}`);
        this.element.classList.add('web-audio-drawer');
        // Creates the toolbar.
        const toolbarContainer = this.contentElement.createChild('div', 'web-audio-toolbar-container vbox');
        this.contextSelector = new _AudioContextSelector_js__WEBPACK_IMPORTED_MODULE_5__.AudioContextSelector();
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('web-audio-toolbar', toolbarContainer);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar.createActionButtonForId('components.collect-garbage'));
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(this.contextSelector.toolbarItem());
        toolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()}`);
        // Create content container
        this.contentContainer = this.contentElement.createChild('div', 'web-audio-content-container vbox flex-auto');
        // Creates the detail view.
        this.detailViewContainer = this.contentContainer.createChild('div', 'web-audio-details-container vbox flex-auto');
        this.graphManager = new _graph_visualizer_graph_visualizer_js__WEBPACK_IMPORTED_MODULE_6__.GraphManager.GraphManager();
        // Creates the landing page.
        this.landingPage = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        this.landingPage.contentElement.classList.add('web-audio-landing-page', 'fill');
        this.landingPage.contentElement.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.html `
  <div>
  <p>${i18nString(UIStrings.openAPageThatUsesWebAudioApiTo)}</p>
  </div>
  `);
        this.landingPage.show(this.detailViewContainer);
        // Creates the summary bar.
        this.summaryBarContainer = this.contentContainer.createChild('div', 'web-audio-summary-container');
        this.contextSelector.addEventListener(_AudioContextSelector_js__WEBPACK_IMPORTED_MODULE_5__.Events.ContextSelected, (event) => {
            const context = event.data;
            if (context) {
                this.updateDetailView(context);
            }
            void this.doUpdate();
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeModels(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel, this);
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './webAudio.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        for (const model of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel)) {
            this.addEventListeners(model);
        }
    }
    willHide() {
        for (const model of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel)) {
            this.removeEventListeners(model);
        }
    }
    modelAdded(webAudioModel) {
        if (this.isShowing()) {
            this.addEventListeners(webAudioModel);
        }
    }
    modelRemoved(webAudioModel) {
        this.removeEventListeners(webAudioModel);
    }
    async doUpdate() {
        await this.pollRealtimeData();
        this.update();
    }
    addEventListeners(webAudioModel) {
        webAudioModel.ensureEnabled();
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ContextCreated, this.contextCreated, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ContextDestroyed, this.contextDestroyed, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ContextChanged, this.contextChanged, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelReset, this.reset, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelSuspend, this.suspendModel, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioListenerCreated, this.audioListenerCreated, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioListenerWillBeDestroyed, this.audioListenerWillBeDestroyed, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioNodeCreated, this.audioNodeCreated, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioNodeWillBeDestroyed, this.audioNodeWillBeDestroyed, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioParamCreated, this.audioParamCreated, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioParamWillBeDestroyed, this.audioParamWillBeDestroyed, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodesConnected, this.nodesConnected, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodesDisconnected, this.nodesDisconnected, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodeParamConnected, this.nodeParamConnected, this);
        webAudioModel.addEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodeParamDisconnected, this.nodeParamDisconnected, this);
    }
    removeEventListeners(webAudioModel) {
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ContextCreated, this.contextCreated, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ContextDestroyed, this.contextDestroyed, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ContextChanged, this.contextChanged, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelReset, this.reset, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelSuspend, this.suspendModel, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioListenerCreated, this.audioListenerCreated, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioListenerWillBeDestroyed, this.audioListenerWillBeDestroyed, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioNodeCreated, this.audioNodeCreated, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioNodeWillBeDestroyed, this.audioNodeWillBeDestroyed, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioParamCreated, this.audioParamCreated, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AudioParamWillBeDestroyed, this.audioParamWillBeDestroyed, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodesConnected, this.nodesConnected, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodesDisconnected, this.nodesDisconnected, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodeParamConnected, this.nodeParamConnected, this);
        webAudioModel.removeEventListener(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.NodeParamDisconnected, this.nodeParamDisconnected, this);
    }
    contextCreated(event) {
        const context = event.data;
        this.graphManager.createContext(context.contextId);
        this.contextSelector.contextCreated(event);
    }
    contextDestroyed(event) {
        const contextId = event.data;
        this.graphManager.destroyContext(contextId);
        this.contextSelector.contextDestroyed(event);
    }
    contextChanged(event) {
        const context = event.data;
        if (!this.graphManager.hasContext(context.contextId)) {
            return;
        }
        this.contextSelector.contextChanged(event);
    }
    reset() {
        if (this.landingPage.isShowing()) {
            this.landingPage.detach();
        }
        this.contextSelector.reset();
        this.detailViewContainer.removeChildren();
        this.landingPage.show(this.detailViewContainer);
        this.graphManager.clearGraphs();
    }
    suspendModel() {
        this.graphManager.clearGraphs();
    }
    audioListenerCreated(event) {
        const listener = event.data;
        const graph = this.graphManager.getGraph(listener.contextId);
        if (!graph) {
            return;
        }
        graph.addNode({
            nodeId: listener.listenerId,
            nodeType: 'Listener',
            numberOfInputs: 0,
            numberOfOutputs: 0,
        });
    }
    audioListenerWillBeDestroyed(event) {
        const { contextId, listenerId } = event.data;
        const graph = this.graphManager.getGraph(contextId);
        if (!graph) {
            return;
        }
        graph.removeNode(listenerId);
    }
    audioNodeCreated(event) {
        const node = event.data;
        const graph = this.graphManager.getGraph(node.contextId);
        if (!graph) {
            return;
        }
        graph.addNode({
            nodeId: node.nodeId,
            nodeType: node.nodeType,
            numberOfInputs: node.numberOfInputs,
            numberOfOutputs: node.numberOfOutputs,
        });
    }
    audioNodeWillBeDestroyed(event) {
        const { contextId, nodeId } = event.data;
        const graph = this.graphManager.getGraph(contextId);
        if (!graph) {
            return;
        }
        graph.removeNode(nodeId);
    }
    audioParamCreated(event) {
        const param = event.data;
        const graph = this.graphManager.getGraph(param.contextId);
        if (!graph) {
            return;
        }
        graph.addParam({
            paramId: param.paramId,
            paramType: param.paramType,
            nodeId: param.nodeId,
        });
    }
    audioParamWillBeDestroyed(event) {
        const { contextId, paramId } = event.data;
        const graph = this.graphManager.getGraph(contextId);
        if (!graph) {
            return;
        }
        graph.removeParam(paramId);
    }
    nodesConnected(event) {
        const { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex } = event.data;
        const graph = this.graphManager.getGraph(contextId);
        if (!graph) {
            return;
        }
        graph.addNodeToNodeConnection({
            sourceId,
            destinationId,
            sourceOutputIndex,
            destinationInputIndex,
        });
    }
    nodesDisconnected(event) {
        const { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex } = event.data;
        const graph = this.graphManager.getGraph(contextId);
        if (!graph) {
            return;
        }
        graph.removeNodeToNodeConnection({
            sourceId,
            destinationId,
            sourceOutputIndex,
            destinationInputIndex,
        });
    }
    nodeParamConnected(event) {
        const { contextId, sourceId, destinationId, sourceOutputIndex } = event.data;
        const graph = this.graphManager.getGraph(contextId);
        if (!graph) {
            return;
        }
        // Since the destinationId is AudioParamId, we need to find the nodeId as the
        // real destinationId.
        const nodeId = graph.getNodeIdByParamId(destinationId);
        if (!nodeId) {
            return;
        }
        graph.addNodeToParamConnection({
            sourceId,
            destinationId: nodeId,
            sourceOutputIndex,
            destinationParamId: destinationId,
        });
    }
    nodeParamDisconnected(event) {
        const { contextId, sourceId, destinationId, sourceOutputIndex } = event.data;
        const graph = this.graphManager.getGraph(contextId);
        if (!graph) {
            return;
        }
        // Since the destinationId is AudioParamId, we need to find the nodeId as the
        // real destinationId.
        const nodeId = graph.getNodeIdByParamId(destinationId);
        if (!nodeId) {
            return;
        }
        graph.removeNodeToParamConnection({
            sourceId,
            destinationId: nodeId,
            sourceOutputIndex,
            destinationParamId: destinationId,
        });
    }
    updateDetailView(context) {
        if (this.landingPage.isShowing()) {
            this.landingPage.detach();
        }
        const detailBuilder = new _AudioContextContentBuilder_js__WEBPACK_IMPORTED_MODULE_4__.ContextDetailBuilder(context);
        this.detailViewContainer.removeChildren();
        this.detailViewContainer.appendChild(detailBuilder.getFragment());
    }
    updateSummaryBar(contextId, contextRealtimeData) {
        const summaryBuilder = new _AudioContextContentBuilder_js__WEBPACK_IMPORTED_MODULE_4__.ContextSummaryBuilder(contextId, contextRealtimeData);
        this.summaryBarContainer.removeChildren();
        this.summaryBarContainer.appendChild(summaryBuilder.getFragment());
    }
    clearSummaryBar() {
        this.summaryBarContainer.removeChildren();
    }
    async pollRealtimeData() {
        const context = this.contextSelector.selectedContext();
        if (!context) {
            this.clearSummaryBar();
            return;
        }
        for (const model of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__.WebAudioModel)) {
            // Display summary only for real-time context.
            if (context.contextType === 'realtime') {
                if (!this.graphManager.hasContext(context.contextId)) {
                    continue;
                }
                const realtimeData = await model.requestRealtimeData(context.contextId);
                if (realtimeData) {
                    this.updateSummaryBar(context.contextId, realtimeData);
                }
            }
            else {
                this.clearSummaryBar();
            }
        }
    }
}


/***/ }),

/***/ "./src/panels/web_audio/graph_visualizer/GraphManager.ts":
/*!***************************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/GraphManager.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GraphManager: () => (/* binding */ GraphManager)
/* harmony export */ });
/* harmony import */ var _GraphView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphView.js */ "./src/panels/web_audio/graph_visualizer/GraphView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// A class that maps each context to its corresponding graph.
// It controls which graph to render when the context is switched or updated.
class GraphManager {
    constructor() {
        Object.defineProperty(this, "graphMapByContextId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new Map()
        });
    }
    createContext(contextId) {
        const graph = new _GraphView_js__WEBPACK_IMPORTED_MODULE_0__.GraphView(contextId);
        this.graphMapByContextId.set(contextId, graph);
    }
    destroyContext(contextId) {
        if (!this.graphMapByContextId.has(contextId)) {
            return;
        }
        const graph = this.graphMapByContextId.get(contextId);
        if (!graph) {
            return;
        }
        this.graphMapByContextId.delete(contextId);
    }
    hasContext(contextId) {
        return this.graphMapByContextId.has(contextId);
    }
    clearGraphs() {
        this.graphMapByContextId.clear();
    }
    /**
     * Get graph by contextId.
     * If the user starts listening for WebAudio events after the page has been running a context for awhile,
     * the graph might be undefined.
     */
    getGraph(contextId) {
        return this.graphMapByContextId.get(contextId) || null;
    }
}


/***/ }),

/***/ "./src/panels/web_audio/graph_visualizer/graph_visualizer.ts":
/*!*******************************************************************!*\
  !*** ./src/panels/web_audio/graph_visualizer/graph_visualizer.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EdgeView: () => (/* reexport module object */ _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   GraphManager: () => (/* reexport module object */ _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   GraphStyle: () => (/* reexport module object */ _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   GraphView: () => (/* reexport module object */ _GraphView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   NodeRendererUtility: () => (/* reexport module object */ _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   NodeView: () => (/* reexport module object */ _NodeView_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _EdgeView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EdgeView.js */ "./src/panels/web_audio/graph_visualizer/EdgeView.ts");
/* harmony import */ var _GraphManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GraphManager.js */ "./src/panels/web_audio/graph_visualizer/GraphManager.ts");
/* harmony import */ var _GraphStyle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphStyle.js */ "./src/panels/web_audio/graph_visualizer/GraphStyle.ts");
/* harmony import */ var _GraphView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GraphView.js */ "./src/panels/web_audio/graph_visualizer/GraphView.ts");
/* harmony import */ var _NodeRendererUtility_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NodeRendererUtility.js */ "./src/panels/web_audio/graph_visualizer/NodeRendererUtility.ts");
/* harmony import */ var _NodeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NodeView.js */ "./src/panels/web_audio/graph_visualizer/NodeView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);