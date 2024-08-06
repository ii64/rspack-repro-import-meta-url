"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_CallStackSidebarPane_js"],{

/***/ "./panels/sources/CallStackSidebarPane.js":
/*!************************************************!*\
  !*** ./panels/sources/CallStackSidebarPane.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   CallStackSidebarPane: () => (/* binding */ CallStackSidebarPane),
/* harmony export */   Item: () => (/* binding */ Item),
/* harmony export */   defaultMaxAsyncStackChainDepth: () => (/* binding */ defaultMaxAsyncStackChainDepth),
/* harmony export */   elementSymbol: () => (/* binding */ elementSymbol)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _callStackSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./callStackSidebarPane.css.js */ "./panels/sources/callStackSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */












const UIStrings = {
    /**
     *@description Text in Call Stack Sidebar Pane of the Sources panel
     */
    callStack: 'Call Stack',
    /**
     *@description Not paused message element text content in Call Stack Sidebar Pane of the Sources panel
     */
    notPaused: 'Not paused',
    /**
     *@description Text exposed to screen reader when navigating through a ignore-listed call frame in the sources panel
     */
    onIgnoreList: 'on ignore list',
    /**
     *@description Show all link text content in Call Stack Sidebar Pane of the Sources panel
     */
    showIgnorelistedFrames: 'Show ignore-listed frames',
    /**
     *@description Text to show more content
     */
    showMore: 'Show more',
    /**
     *@description A context menu item in the Call Stack Sidebar Pane of the Sources panel
     */
    copyStackTrace: 'Copy stack trace',
    /**
     *@description Text in Call Stack Sidebar Pane of the Sources panel when some call frames have warnings
     */
    callFrameWarnings: 'Some call frames have warnings',
    /**
     *@description Error message that is displayed in UI when a file needed for debugging information for a call frame is missing
     *@example {src/myapp.debug.wasm.dwp} PH1
     */
    debugFileNotFound: 'Failed to load debug file "{PH1}".',
    /**
     * @description A contex menu item in the Call Stack Sidebar Pane. "Restart" is a verb and
     * "frame" is a noun. "Frame" refers to an individual item in the call stack, i.e. a call frame.
     * The user opens this context menu by selecting a specific call frame in the call stack sidebar pane.
     */
    restartFrame: 'Restart frame',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/CallStackSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let callstackSidebarPaneInstance;
class CallStackSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.View.SimpleView {
    ignoreListMessageElement;
    ignoreListCheckboxElement;
    notPausedMessageElement;
    callFrameWarningsElement;
    items;
    list;
    showMoreMessageElement;
    showIgnoreListed;
    locationPool;
    updateThrottler;
    maxAsyncStackChainDepth;
    updateItemThrottler;
    scheduledForUpdateItems;
    muteActivateItem;
    lastDebuggerModel = null;
    constructor() {
        super(i18nString(UIStrings.callStack), true, 'sources.callstack');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.section('sources.callstack')}`);
        ({ element: this.ignoreListMessageElement, checkbox: this.ignoreListCheckboxElement } =
            this.createIgnoreListMessageElementAndCheckbox());
        this.contentElement.appendChild(this.ignoreListMessageElement);
        this.notPausedMessageElement = this.contentElement.createChild('div', 'gray-info-message');
        this.notPausedMessageElement.textContent = i18nString(UIStrings.notPaused);
        this.notPausedMessageElement.tabIndex = -1;
        this.callFrameWarningsElement = this.contentElement.createChild('div', 'call-frame-warnings-message');
        const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
        icon.data = {
            iconName: 'warning-filled',
            color: 'var(--icon-warning)',
            width: '14px',
            height: '14px',
        };
        icon.classList.add('call-frame-warning-icon');
        this.callFrameWarningsElement.appendChild(icon);
        this.callFrameWarningsElement.appendChild(document.createTextNode(i18nString(UIStrings.callFrameWarnings)));
        this.callFrameWarningsElement.tabIndex = -1;
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ListModel.ListModel();
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ListControl.ListControl(this.items, this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ListControl.ListMode.NonViewport);
        this.contentElement.appendChild(this.list.element);
        this.list.element.addEventListener('contextmenu', this.onContextMenu.bind(this), false);
        self.onInvokeElement(this.list.element, event => {
            const item = this.list.itemForNode(event.target);
            if (item) {
                this.activateItem(item);
                event.consume(true);
            }
        });
        this.showMoreMessageElement = this.createShowMoreMessageElement();
        this.showMoreMessageElement.classList.add('hidden');
        this.contentElement.appendChild(this.showMoreMessageElement);
        this.showIgnoreListed = false;
        this.locationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.LiveLocation.LiveLocationPool();
        this.updateThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        this.maxAsyncStackChainDepth = defaultMaxAsyncStackChainDepth;
        this.update();
        this.updateItemThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        this.scheduledForUpdateItems = new Set();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.Events.DebugInfoAttached, this.debugInfoAttached, this);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!callstackSidebarPaneInstance || forceNew) {
            callstackSidebarPaneInstance = new CallStackSidebarPane();
        }
        return callstackSidebarPaneInstance;
    }
    flavorChanged(_object) {
        this.showIgnoreListed = false;
        this.ignoreListCheckboxElement.checked = false;
        this.maxAsyncStackChainDepth = defaultMaxAsyncStackChainDepth;
        this.update();
    }
    debugInfoAttached() {
        this.update();
    }
    setSourceMapSubscription(debuggerModel) {
        // Shortcut for the case when we are listening to the same model.
        if (this.lastDebuggerModel === debuggerModel) {
            return;
        }
        if (this.lastDebuggerModel) {
            this.lastDebuggerModel.sourceMapManager().removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMapManager.Events.SourceMapAttached, this.debugInfoAttached, this);
        }
        this.lastDebuggerModel = debuggerModel;
        if (this.lastDebuggerModel) {
            this.lastDebuggerModel.sourceMapManager().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.SourceMapManager.Events.SourceMapAttached, this.debugInfoAttached, this);
        }
    }
    update() {
        void this.updateThrottler.schedule(() => this.doUpdate());
    }
    async doUpdate() {
        this.locationPool.disposeAll();
        this.callFrameWarningsElement.classList.add('hidden');
        const details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerPausedDetails);
        this.setSourceMapSubscription(details?.debuggerModel ?? null);
        if (!details) {
            this.notPausedMessageElement.classList.remove('hidden');
            this.ignoreListMessageElement.classList.add('hidden');
            this.showMoreMessageElement.classList.add('hidden');
            this.items.replaceAll([]);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, null);
            return;
        }
        this.notPausedMessageElement.classList.add('hidden');
        const itemPromises = [];
        const uniqueWarnings = new Set();
        for (const frame of details.callFrames) {
            const itemPromise = Item.createForDebuggerCallFrame(frame, this.locationPool, this.refreshItem.bind(this));
            itemPromises.push(itemPromise);
            if (frame.missingDebugInfoDetails) {
                uniqueWarnings.add(frame.missingDebugInfoDetails.details);
            }
        }
        const items = await Promise.all(itemPromises);
        if (uniqueWarnings.size) {
            this.callFrameWarningsElement.classList.remove('hidden');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(this.callFrameWarningsElement, Array.from(uniqueWarnings).join('\n'));
        }
        let debuggerModel = details.debuggerModel;
        let asyncStackTraceId = details.asyncStackTraceId;
        let asyncStackTrace = details.asyncStackTrace;
        let previousStackTrace = details.callFrames;
        for (let { maxAsyncStackChainDepth } = this; maxAsyncStackChainDepth > 0; --maxAsyncStackChainDepth) {
            if (!asyncStackTrace) {
                if (!asyncStackTraceId) {
                    break;
                }
                if (asyncStackTraceId.debuggerId) {
                    const dm = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.DebuggerModel.modelForDebuggerId(asyncStackTraceId.debuggerId);
                    if (!dm) {
                        break;
                    }
                    debuggerModel = dm;
                }
                asyncStackTrace = await debuggerModel.fetchAsyncStackTrace(asyncStackTraceId);
                if (!asyncStackTrace) {
                    break;
                }
            }
            const title = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.UIUtils.asyncStackTraceLabel(asyncStackTrace.description, previousStackTrace);
            items.push(...await Item.createItemsForAsyncStack(title, debuggerModel, asyncStackTrace.callFrames, this.locationPool, this.refreshItem.bind(this)));
            previousStackTrace = asyncStackTrace.callFrames;
            asyncStackTraceId = asyncStackTrace.parentId;
            asyncStackTrace = asyncStackTrace.parent;
        }
        this.showMoreMessageElement.classList.toggle('hidden', !asyncStackTrace);
        this.items.replaceAll(items);
        for (const item of this.items) {
            this.refreshItem(item);
        }
        if (this.maxAsyncStackChainDepth === defaultMaxAsyncStackChainDepth) {
            this.list.selectNextItem(true /* canWrap */, false /* center */);
            const selectedItem = this.list.selectedItem();
            if (selectedItem) {
                this.activateItem(selectedItem);
            }
        }
        this.updatedForTest();
    }
    updatedForTest() {
    }
    refreshItem(item) {
        this.scheduledForUpdateItems.add(item);
        void this.updateItemThrottler.schedule(async () => {
            const items = Array.from(this.scheduledForUpdateItems);
            this.scheduledForUpdateItems.clear();
            this.muteActivateItem = true;
            if (!this.showIgnoreListed && this.items.every(item => item.isIgnoreListed)) {
                this.showIgnoreListed = true;
                for (let i = 0; i < this.items.length; ++i) {
                    this.list.refreshItemByIndex(i);
                }
                this.ignoreListMessageElement.classList.toggle('hidden', true);
            }
            else {
                this.showIgnoreListed = this.ignoreListCheckboxElement.checked;
                const itemsSet = new Set(items);
                let hasIgnoreListed = false;
                for (let i = 0; i < this.items.length; ++i) {
                    const item = this.items.at(i);
                    if (itemsSet.has(item)) {
                        this.list.refreshItemByIndex(i);
                    }
                    hasIgnoreListed = hasIgnoreListed || item.isIgnoreListed;
                }
                this.ignoreListMessageElement.classList.toggle('hidden', !hasIgnoreListed);
            }
            delete this.muteActivateItem;
        });
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        element.classList.add('call-frame-item');
        const title = element.createChild('div', 'call-frame-item-title');
        const titleElement = title.createChild('div', 'call-frame-title-text');
        titleElement.textContent = item.title;
        if (item.isAsyncHeader) {
            element.classList.add('async-header');
        }
        else {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(titleElement, item.title);
            const linkElement = element.createChild('div', 'call-frame-location');
            linkElement.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(item.linkText, 30);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(linkElement, item.linkText);
            element.classList.toggle('ignore-listed-call-frame', item.isIgnoreListed);
            if (item.isIgnoreListed) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setDescription(element, i18nString(UIStrings.onIgnoreList));
            }
            if (!item.frame) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setDisabled(element, true);
            }
        }
        const callframe = item.frame;
        const isSelected = callframe === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
        element.classList.toggle('selected', isSelected);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ARIAUtils.setSelected(element, isSelected);
        element.classList.toggle('hidden', !this.showIgnoreListed && item.isIgnoreListed);
        const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
        icon.data = {
            iconName: 'large-arrow-right-filled',
            color: 'var(--icon-arrow-main-thread)',
            width: '14px',
            height: '14px',
        };
        icon.classList.add('selected-call-frame-icon');
        element.appendChild(icon);
        element.tabIndex = item === this.list.selectedItem() ? 0 : -1;
        if (callframe && callframe.missingDebugInfoDetails) {
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
            icon.data = {
                iconName: 'warning-filled',
                color: 'var(--icon-warning)',
                width: '14px',
                height: '14px',
            };
            icon.classList.add('call-frame-warning-icon');
            const messages = callframe.missingDebugInfoDetails.resources.map(r => i18nString(UIStrings.debugFileNotFound, { PH1: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(r.resourceUrl) }));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(icon, [callframe.missingDebugInfoDetails.details, ...messages].join('\n'));
            element.appendChild(icon);
        }
        return element;
    }
    heightForItem(_item) {
        console.assert(false); // Should not be called.
        return 0;
    }
    isItemSelectable(_item) {
        return true;
    }
    selectedItemChanged(_from, _to, fromElement, toElement) {
        if (fromElement) {
            fromElement.tabIndex = -1;
        }
        if (toElement) {
            this.setDefaultFocusedElement(toElement);
            toElement.tabIndex = 0;
            if (this.hasFocus()) {
                toElement.focus();
            }
        }
    }
    updateSelectedItemARIA(_fromElement, _toElement) {
        return true;
    }
    createIgnoreListMessageElementAndCheckbox() {
        const element = document.createElement('div');
        element.classList.add('ignore-listed-message');
        const label = element.createChild('label');
        label.classList.add('ignore-listed-message-label');
        const checkbox = label.createChild('input');
        checkbox.tabIndex = 0;
        checkbox.type = 'checkbox';
        checkbox.classList.add('ignore-listed-checkbox');
        label.append(i18nString(UIStrings.showIgnorelistedFrames));
        const showAll = () => {
            this.showIgnoreListed = checkbox.checked;
            for (const item of this.items) {
                this.refreshItem(item);
            }
        };
        checkbox.addEventListener('click', showAll);
        return { element, checkbox };
    }
    createShowMoreMessageElement() {
        const element = document.createElement('div');
        element.classList.add('show-more-message');
        element.createChild('span');
        const showAllLink = element.createChild('span', 'link');
        showAllLink.textContent = i18nString(UIStrings.showMore);
        showAllLink.addEventListener('click', () => {
            this.maxAsyncStackChainDepth += defaultMaxAsyncStackChainDepth;
            this.update();
        }, false);
        return element;
    }
    onContextMenu(event) {
        const item = this.list.itemForNode(event.target);
        if (!item) {
            return;
        }
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.ContextMenu.ContextMenu(event);
        const debuggerCallFrame = item.frame;
        if (debuggerCallFrame) {
            contextMenu.defaultSection().appendItem(i18nString(UIStrings.restartFrame), () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.StackFrameRestarted);
                void debuggerCallFrame.restart();
            }, { disabled: !debuggerCallFrame.canBeRestarted, jslogContext: 'restart-frame' });
        }
        contextMenu.defaultSection().appendItem(i18nString(UIStrings.copyStackTrace), this.copyStackTrace.bind(this), { jslogContext: 'copy-stack-trace' });
        if (item.uiLocation) {
            this.appendIgnoreListURLContextMenuItems(contextMenu, item.uiLocation.uiSourceCode);
        }
        void contextMenu.show();
    }
    onClick(event) {
        const item = this.list.itemForNode(event.target);
        if (item) {
            this.activateItem(item);
        }
    }
    activateItem(item) {
        const uiLocation = item.uiLocation;
        if (this.muteActivateItem || !uiLocation) {
            return;
        }
        this.list.selectItem(item);
        const debuggerCallFrame = item.frame;
        const oldItem = this.activeCallFrameItem();
        if (debuggerCallFrame && oldItem !== item) {
            debuggerCallFrame.debuggerModel.setSelectedCallFrame(debuggerCallFrame);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, debuggerCallFrame);
            if (oldItem) {
                this.refreshItem(oldItem);
            }
            this.refreshItem(item);
        }
        else {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiLocation);
        }
    }
    activeCallFrameItem() {
        const callFrame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame);
        if (callFrame) {
            return this.items.find(callFrameItem => callFrameItem.frame === callFrame) || null;
        }
        return null;
    }
    appendIgnoreListURLContextMenuItems(contextMenu, uiSourceCode) {
        const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
        if (binding) {
            uiSourceCode = binding.network;
        }
        const menuSection = contextMenu.section('ignoreList');
        if (menuSection.items.length > 0) {
            // Already added menu items.
            return;
        }
        for (const { text, callback, jslogContext } of _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.IgnoreListManager.IgnoreListManager.instance()
            .getIgnoreListURLContextMenuItems(uiSourceCode)) {
            menuSection.appendItem(text, callback, { jslogContext });
        }
    }
    selectNextCallFrameOnStack() {
        const oldItem = this.activeCallFrameItem();
        const startIndex = oldItem ? this.items.indexOf(oldItem) + 1 : 0;
        for (let i = startIndex; i < this.items.length; i++) {
            const newItem = this.items.at(i);
            if (newItem.frame) {
                this.activateItem(newItem);
                break;
            }
        }
    }
    selectPreviousCallFrameOnStack() {
        const oldItem = this.activeCallFrameItem();
        const startIndex = oldItem ? this.items.indexOf(oldItem) - 1 : this.items.length - 1;
        for (let i = startIndex; i >= 0; i--) {
            const newItem = this.items.at(i);
            if (newItem.frame) {
                this.activateItem(newItem);
                break;
            }
        }
    }
    copyStackTrace() {
        const text = [];
        for (const item of this.items) {
            let itemText = item.title;
            if (item.uiLocation) {
                itemText += ' (' + item.uiLocation.linkText(true /* skipTrim */) + ')';
            }
            text.push(itemText);
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(text.join('\n'));
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_callStackSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]]);
    }
}
const elementSymbol = Symbol('element');
const defaultMaxAsyncStackChainDepth = 32;
class ActionDelegate {
    handleAction(context, actionId) {
        switch (actionId) {
            case 'debugger.next-call-frame':
                CallStackSidebarPane.instance().selectNextCallFrameOnStack();
                return true;
            case 'debugger.previous-call-frame':
                CallStackSidebarPane.instance().selectPreviousCallFrameOnStack();
                return true;
        }
        return false;
    }
}
class Item {
    isIgnoreListed;
    title;
    linkText;
    uiLocation;
    isAsyncHeader;
    updateDelegate;
    /** Only set for synchronous frames */
    frame;
    static async createForDebuggerCallFrame(frame, locationPool, updateDelegate) {
        const name = frame.functionName;
        const item = new Item(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.UIUtils.beautifyFunctionName(name), updateDelegate, frame);
        await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(frame.location(), item.update.bind(item), locationPool);
        void _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_7__.NamesResolver.resolveDebuggerFrameFunctionName(frame).then(functionName => {
            if (functionName && functionName !== name) {
                // Just update the item's title and call the update delegate directly,
                // instead of going through the update method below, since location
                // didn't change.
                item.title = functionName;
                item.updateDelegate(item);
            }
        });
        return item;
    }
    static async createItemsForAsyncStack(title, debuggerModel, frames, locationPool, updateDelegate) {
        const headerItemToItemsSet = new WeakMap();
        const asyncHeaderItem = new Item(title, updateDelegate);
        headerItemToItemsSet.set(asyncHeaderItem, new Set());
        asyncHeaderItem.isAsyncHeader = true;
        const asyncFrameItems = [];
        const liveLocationPromises = [];
        for (const frame of frames) {
            const item = new Item(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.UIUtils.beautifyFunctionName(frame.functionName), update);
            const rawLocation = debuggerModel.createRawLocationByScriptId(frame.scriptId, frame.lineNumber, frame.columnNumber);
            liveLocationPromises.push(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createCallFrameLiveLocation(rawLocation, item.update.bind(item), locationPool));
            asyncFrameItems.push(item);
        }
        await Promise.all(liveLocationPromises);
        updateDelegate(asyncHeaderItem);
        return [asyncHeaderItem, ...asyncFrameItems];
        function update(item) {
            updateDelegate(item);
            let shouldUpdate = false;
            const items = headerItemToItemsSet.get(asyncHeaderItem);
            if (items) {
                if (item.isIgnoreListed) {
                    items.delete(item);
                    shouldUpdate = items.size === 0;
                }
                else {
                    shouldUpdate = items.size === 0;
                    items.add(item);
                }
                asyncHeaderItem.isIgnoreListed = items.size === 0;
            }
            if (shouldUpdate) {
                updateDelegate(asyncHeaderItem);
            }
        }
    }
    constructor(title, updateDelegate, frame) {
        this.isIgnoreListed = false;
        this.title = title;
        this.linkText = '';
        this.uiLocation = null;
        this.isAsyncHeader = false;
        this.updateDelegate = updateDelegate;
        this.frame = frame;
    }
    async update(liveLocation) {
        const uiLocation = await liveLocation.uiLocation();
        this.isIgnoreListed = await liveLocation.isIgnoreListed();
        this.linkText = uiLocation ? uiLocation.linkText() : '';
        this.uiLocation = uiLocation;
        this.updateDelegate(this);
    }
}
//# sourceMappingURL=CallStackSidebarPane.js.map

/***/ }),

/***/ "./panels/sources/callStackSidebarPane.css.js":
/*!****************************************************!*\
  !*** ./panels/sources/callStackSidebarPane.css.js ***!
  \****************************************************/
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

.call-frame-warnings-message {
  text-align: center;
  font-style: italic;
  padding: 4px;
  color: var(--sys-color-on-surface-yellow);
  background-color: var(--sys-color-surface-yellow);
}

.ignore-listed-message {
  padding: 1px;
}

.ignore-listed-message-label {
  color: var(--sys-color-token-subtle);
  align-items: center;
  display: flex;
}

.show-more-message > .link {
  margin-left: 5px;
}

.show-more-message {
  text-align: center;
  font-style: italic;
  padding: 4px;
  border-top: 1px solid var(--sys-color-divider);
}

.call-frame-item {
  padding: 3px 8px 3px 20px;
  position: relative;
  min-height: 18px;
  line-height: 15px;
  display: flex;
  flex-wrap: wrap;
}

.call-frame-title-text {
  text-overflow: ellipsis;
  overflow: hidden;
}

.async-header + .call-frame-item {
  border-top: 0;
}

.call-frame-item:not(.async-header) {
  border-top: 1px solid var(--sys-color-divider);
}

.call-frame-item-title,
.call-frame-location {
  display: flex;
  white-space: nowrap;
}

.async-header .call-frame-item-title {
  font-weight: bold;
  color: var(--sys-color-on-surface);
  background-color: var(--sys-color-cdt-base-container);
  margin-left: -5px;
  padding: 0 5px;
  z-index: 1;
}

.call-frame-item:focus-visible,
.call-frame-item.async-header:focus-visible .call-frame-item-title {
  background-color: var(--sys-color-tonal-container);
}

.ignore-listed-checkbox:focus-visible {
  outline-width: unset;
}

.call-frame-item:not(.async-header):hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.call-frame-location {
  color: var(--sys-color-token-subtle);
  margin-left: auto;
  padding: 0 10px;
}

.async-header::before {
  content: " ";
  width: 100%;
  border-top: 1px solid var(--sys-color-divider);
  margin-top: 8px;
  position: absolute;
  left: 0;
}

.ignore-listed-call-frame {
  opacity: 60%;
  font-style: italic;
}

.selected-call-frame-icon {
  display: none;
  position: absolute;
  top: 3px;
  left: 4px;
}

.call-frame-item.selected .selected-call-frame-icon {
  display: block;
}

.call-frame-warning-icon {
  display: block;
  position: absolute;
  top: 3px;
  right: 4px;
}

@media (forced-colors: active) {
  .call-frame-item:focus-visible,
  .call-frame-item:not(.async-header):hover {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .call-frame-item:focus-visible *,
  .call-frame-item:not(.async-header):hover * {
    color: HighlightText;
  }
}

/*# sourceURL=callStackSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);