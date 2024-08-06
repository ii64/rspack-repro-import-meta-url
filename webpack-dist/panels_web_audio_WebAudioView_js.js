"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_web_audio_WebAudioView_js"],{

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

/***/ }),

/***/ "./panels/web_audio/AudioContextSelector.js":
/*!**************************************************!*\
  !*** ./panels/web_audio/AudioContextSelector.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioContextSelector: () => (/* binding */ AudioContextSelector)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _audioContextSelector_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audioContextSelector.css.js */ "./panels/web_audio/audioContextSelector.css.js");
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
    placeholderText;
    items;
    dropDown;
    toolbarItemInternal;
    selectedContextInternal;
    constructor() {
        super();
        this.placeholderText = i18nString(UIStrings.noRecordings);
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        this.dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SoftDropDown.SoftDropDown(this.items, this, 'audio-context');
        this.dropDown.setPlaceholderText(this.placeholderText);
        this.toolbarItemInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(this.dropDown.element);
        this.toolbarItemInternal.setEnabled(false);
        this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, { PH1: this.placeholderText }));
        this.items.addEventListener("ItemsReplaced" /* UI.ListModel.Events.ItemsReplaced */, this.onListItemReplaced, this);
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
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [_audioContextSelector_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]], delegatesFocus: undefined });
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
        this.dispatchEventToListeners("ContextSelected" /* Events.ContextSelected */, item);
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
//# sourceMappingURL=AudioContextSelector.js.map

/***/ }),

/***/ "./panels/web_audio/WebAudioModel.js":
/*!*******************************************!*\
  !*** ./panels/web_audio/WebAudioModel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebAudioModel: () => (/* binding */ WebAudioModel)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class WebAudioModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel {
    enabled;
    agent;
    constructor(target) {
        super(target);
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
        this.dispatchEventToListeners("ModelReset" /* Events.ModelReset */);
    }
    async suspendModel() {
        this.dispatchEventToListeners("ModelSuspend" /* Events.ModelSuspend */);
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
        this.dispatchEventToListeners("ContextCreated" /* Events.ContextCreated */, context);
    }
    contextWillBeDestroyed({ contextId }) {
        this.dispatchEventToListeners("ContextDestroyed" /* Events.ContextDestroyed */, contextId);
    }
    contextChanged({ context }) {
        this.dispatchEventToListeners("ContextChanged" /* Events.ContextChanged */, context);
    }
    audioListenerCreated({ listener }) {
        this.dispatchEventToListeners("AudioListenerCreated" /* Events.AudioListenerCreated */, listener);
    }
    audioListenerWillBeDestroyed({ listenerId, contextId }) {
        this.dispatchEventToListeners("AudioListenerWillBeDestroyed" /* Events.AudioListenerWillBeDestroyed */, { listenerId, contextId });
    }
    audioNodeCreated({ node }) {
        this.dispatchEventToListeners("AudioNodeCreated" /* Events.AudioNodeCreated */, node);
    }
    audioNodeWillBeDestroyed({ contextId, nodeId }) {
        this.dispatchEventToListeners("AudioNodeWillBeDestroyed" /* Events.AudioNodeWillBeDestroyed */, { contextId, nodeId });
    }
    audioParamCreated({ param }) {
        this.dispatchEventToListeners("AudioParamCreated" /* Events.AudioParamCreated */, param);
    }
    audioParamWillBeDestroyed({ contextId, nodeId, paramId }) {
        this.dispatchEventToListeners("AudioParamWillBeDestroyed" /* Events.AudioParamWillBeDestroyed */, { contextId, nodeId, paramId });
    }
    nodesConnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners("NodesConnected" /* Events.NodesConnected */, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodesDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex }) {
        this.dispatchEventToListeners("NodesDisconnected" /* Events.NodesDisconnected */, { contextId, sourceId, destinationId, sourceOutputIndex, destinationInputIndex });
    }
    nodeParamConnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners("NodeParamConnected" /* Events.NodeParamConnected */, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    nodeParamDisconnected({ contextId, sourceId, destinationId, sourceOutputIndex }) {
        this.dispatchEventToListeners("NodeParamDisconnected" /* Events.NodeParamDisconnected */, { contextId, sourceId, destinationId, sourceOutputIndex });
    }
    async requestRealtimeData(contextId) {
        const realtimeResponse = await this.agent.invoke_getRealtimeData({ contextId });
        return realtimeResponse.realtimeData;
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(WebAudioModel, { capabilities: 2 /* SDK.Target.Capability.DOM */, autostart: false });
//# sourceMappingURL=WebAudioModel.js.map

/***/ }),

/***/ "./panels/web_audio/WebAudioView.js":
/*!******************************************!*\
  !*** ./panels/web_audio/WebAudioView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebAudioView: () => (/* binding */ WebAudioView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AudioContextContentBuilder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AudioContextContentBuilder.js */ "./panels/web_audio/AudioContextContentBuilder.js");
/* harmony import */ var _AudioContextSelector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AudioContextSelector.js */ "./panels/web_audio/AudioContextSelector.js");
/* harmony import */ var _graph_visualizer_graph_visualizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graph_visualizer/graph_visualizer.js */ "./panels/web_audio/graph_visualizer/graph_visualizer.js");
/* harmony import */ var _webAudio_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./webAudio.css.js */ "./panels/web_audio/webAudio.css.js");
/* harmony import */ var _WebAudioModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebAudioModel.js */ "./panels/web_audio/WebAudioModel.js");
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
    contextSelector;
    contentContainer;
    detailViewContainer;
    graphManager;
    landingPage;
    summaryBarContainer;
    constructor() {
        super(true, 1000);
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
        this.contextSelector.addEventListener("ContextSelected" /* SelectorEvents.ContextSelected */, (event) => {
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
        this.registerCSSFiles([_webAudio_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
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
        webAudioModel.addEventListener("ContextCreated" /* ModelEvents.ContextCreated */, this.contextCreated, this);
        webAudioModel.addEventListener("ContextDestroyed" /* ModelEvents.ContextDestroyed */, this.contextDestroyed, this);
        webAudioModel.addEventListener("ContextChanged" /* ModelEvents.ContextChanged */, this.contextChanged, this);
        webAudioModel.addEventListener("ModelReset" /* ModelEvents.ModelReset */, this.reset, this);
        webAudioModel.addEventListener("ModelSuspend" /* ModelEvents.ModelSuspend */, this.suspendModel, this);
        webAudioModel.addEventListener("AudioListenerCreated" /* ModelEvents.AudioListenerCreated */, this.audioListenerCreated, this);
        webAudioModel.addEventListener("AudioListenerWillBeDestroyed" /* ModelEvents.AudioListenerWillBeDestroyed */, this.audioListenerWillBeDestroyed, this);
        webAudioModel.addEventListener("AudioNodeCreated" /* ModelEvents.AudioNodeCreated */, this.audioNodeCreated, this);
        webAudioModel.addEventListener("AudioNodeWillBeDestroyed" /* ModelEvents.AudioNodeWillBeDestroyed */, this.audioNodeWillBeDestroyed, this);
        webAudioModel.addEventListener("AudioParamCreated" /* ModelEvents.AudioParamCreated */, this.audioParamCreated, this);
        webAudioModel.addEventListener("AudioParamWillBeDestroyed" /* ModelEvents.AudioParamWillBeDestroyed */, this.audioParamWillBeDestroyed, this);
        webAudioModel.addEventListener("NodesConnected" /* ModelEvents.NodesConnected */, this.nodesConnected, this);
        webAudioModel.addEventListener("NodesDisconnected" /* ModelEvents.NodesDisconnected */, this.nodesDisconnected, this);
        webAudioModel.addEventListener("NodeParamConnected" /* ModelEvents.NodeParamConnected */, this.nodeParamConnected, this);
        webAudioModel.addEventListener("NodeParamDisconnected" /* ModelEvents.NodeParamDisconnected */, this.nodeParamDisconnected, this);
    }
    removeEventListeners(webAudioModel) {
        webAudioModel.removeEventListener("ContextCreated" /* ModelEvents.ContextCreated */, this.contextCreated, this);
        webAudioModel.removeEventListener("ContextDestroyed" /* ModelEvents.ContextDestroyed */, this.contextDestroyed, this);
        webAudioModel.removeEventListener("ContextChanged" /* ModelEvents.ContextChanged */, this.contextChanged, this);
        webAudioModel.removeEventListener("ModelReset" /* ModelEvents.ModelReset */, this.reset, this);
        webAudioModel.removeEventListener("ModelSuspend" /* ModelEvents.ModelSuspend */, this.suspendModel, this);
        webAudioModel.removeEventListener("AudioListenerCreated" /* ModelEvents.AudioListenerCreated */, this.audioListenerCreated, this);
        webAudioModel.removeEventListener("AudioListenerWillBeDestroyed" /* ModelEvents.AudioListenerWillBeDestroyed */, this.audioListenerWillBeDestroyed, this);
        webAudioModel.removeEventListener("AudioNodeCreated" /* ModelEvents.AudioNodeCreated */, this.audioNodeCreated, this);
        webAudioModel.removeEventListener("AudioNodeWillBeDestroyed" /* ModelEvents.AudioNodeWillBeDestroyed */, this.audioNodeWillBeDestroyed, this);
        webAudioModel.removeEventListener("AudioParamCreated" /* ModelEvents.AudioParamCreated */, this.audioParamCreated, this);
        webAudioModel.removeEventListener("AudioParamWillBeDestroyed" /* ModelEvents.AudioParamWillBeDestroyed */, this.audioParamWillBeDestroyed, this);
        webAudioModel.removeEventListener("NodesConnected" /* ModelEvents.NodesConnected */, this.nodesConnected, this);
        webAudioModel.removeEventListener("NodesDisconnected" /* ModelEvents.NodesDisconnected */, this.nodesDisconnected, this);
        webAudioModel.removeEventListener("NodeParamConnected" /* ModelEvents.NodeParamConnected */, this.nodeParamConnected, this);
        webAudioModel.removeEventListener("NodeParamDisconnected" /* ModelEvents.NodeParamDisconnected */, this.nodeParamDisconnected, this);
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
//# sourceMappingURL=WebAudioView.js.map

/***/ }),

/***/ "./panels/web_audio/audioContextSelector.css.js":
/*!******************************************************!*\
  !*** ./panels/web_audio/audioContextSelector.css.js ***!
  \******************************************************/
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
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 2px 1px 2px 2px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 0;
}

/*# sourceURL=audioContextSelector.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/web_audio/webAudio.css.js":
/*!******************************************!*\
  !*** ./panels/web_audio/webAudio.css.js ***!
  \******************************************/
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
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

.web-audio-toolbar-container {
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  min-height: fit-content;
}

.web-audio-toolbar {
  display: inline-block;
}

.web-audio-landing-page {
  position: absolute;
  background-color: var(--sys-color-cdt-base-container);
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-size: 13px;
  color: var(--sys-color-on-surface);
}

.web-audio-landing-page > div {
  max-width: 500px;
  margin: 10px;
}

.web-audio-landing-page > div > p {
  flex: none;
  white-space: pre-line;
}

.web-audio-content-container {
  overflow-y: auto;
}

.web-audio-details-container {
  min-height: fit-content;
}

.web-audio-summary-container {
  flex-shrink: 0;
}

.context-detail-container {
  flex: none;
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
  flex-direction: column;
}

.context-detail-header {
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 12px 24px;
  margin-bottom: 10px;
}

.context-detail-title {
  font-size: 15px;
  font-weight: 400;
}

.context-detail-subtitle {
  font-size: 12px;
  margin-top: 10px;
  user-select: text;
}

.context-detail-row {
  flex-direction: row;
  display: flex;
  line-height: 18px;
  padding-left: 24px;
}

.context-detail-row-entry:not(:empty) {
  color: var(--sys-color-token-subtle);
  overflow: hidden;
  width: 130px;
}

.context-detail-row-value {
  user-select: text;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.context-summary-container {
  flex: 0 0 27px;
  line-height: 27px;
  padding-left: 5px;
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.context-summary-container span {
  margin-right: 6px;
}

/*# sourceURL=webAudio.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);