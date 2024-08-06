"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_linear_memory_inspector_LinearMemoryInspectorController_js-panels_linear_memory_inspec-9f03eb"],{

/***/ "./panels/linear_memory_inspector/LinearMemoryInspectorController.js":
/*!***************************************************************************!*\
  !*** ./panels/linear_memory_inspector/LinearMemoryInspectorController.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryInspectorController: () => (/* binding */ LinearMemoryInspectorController),
/* harmony export */   RemoteArrayBufferWrapper: () => (/* binding */ RemoteArrayBufferWrapper),
/* harmony export */   isDWARFMemoryObject: () => (/* binding */ isDWARFMemoryObject)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./panels/linear_memory_inspector/components/components.js");
/* harmony import */ var _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryInspectorPane.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorPane.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Error message that shows up in the console if a buffer to be opened in the linear memory inspector cannot be found.
     */
    couldNotOpenLinearMemory: 'Could not open linear memory inspector: failed locating buffer.',
    /**
     *@description A context menu item in the Scope View of the Sources Panel
     */
    revealInMemoryInspectorPanel: 'Reveal in Memory inspector panel',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/linear_memory_inspector/LinearMemoryInspectorController.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const LINEAR_MEMORY_INSPECTOR_OBJECT_GROUP = 'linear-memory-inspector';
const MEMORY_TRANSFER_MIN_CHUNK_SIZE = 1000;
let controllerInstance;
class RemoteArrayBufferWrapper {
    #remoteArrayBuffer;
    constructor(arrayBuffer) {
        this.#remoteArrayBuffer = arrayBuffer;
    }
    length() {
        return this.#remoteArrayBuffer.byteLength();
    }
    async getRange(start, end) {
        const newEnd = Math.min(end, this.length());
        if (start < 0 || start > newEnd) {
            console.error(`Requesting invalid range of memory: (${start}, ${end})`);
            return new Uint8Array(0);
        }
        const array = await this.#remoteArrayBuffer.bytes(start, newEnd);
        return new Uint8Array(array);
    }
}
async function getBufferFromObject(obj) {
    const response = await obj.runtimeModel().agent.invoke_callFunctionOn({
        objectId: obj.objectId,
        functionDeclaration: 'function() { return this instanceof ArrayBuffer || (typeof SharedArrayBuffer !== \'undefined\' && this instanceof SharedArrayBuffer) ? this : this.buffer; }',
        silent: true,
        // Set object group in order to bind the object lifetime to the linear memory inspector.
        objectGroup: LINEAR_MEMORY_INSPECTOR_OBJECT_GROUP,
    });
    const error = response.getError();
    if (error) {
        throw new Error(`Remote object representing ArrayBuffer could not be retrieved: ${error}`);
    }
    obj = obj.runtimeModel().createRemoteObject(response.result);
    return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteArrayBuffer(obj);
}
function isDWARFMemoryObject(obj) {
    if (obj instanceof _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerLanguagePlugins.ExtensionRemoteObject) {
        return obj.linearMemoryAddress !== undefined;
    }
    return false;
}
class LinearMemoryInspectorController extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.SDKModelObserver {
    #paneInstance = _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryInspectorPane.instance();
    #bufferIdToRemoteObject = new Map();
    #bufferIdToHighlightInfo = new Map();
    #settings;
    constructor() {
        super();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.GlobalObjectCleared, this.#onGlobalObjectClear, this);
        this.#paneInstance.addEventListener("ViewClosed" /* LmiEvents.ViewClosed */, this.#viewClosed.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerPaused, this.#onDebuggerPause, this);
        const defaultValueTypeModes = _components_components_js__WEBPACK_IMPORTED_MODULE_5__.ValueInterpreterDisplayUtils.getDefaultValueTypeMapping();
        const defaultSettings = {
            valueTypes: Array.from(defaultValueTypeModes.keys()),
            valueTypeModes: Array.from(defaultValueTypeModes),
            endianness: "Little Endian" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.Endianness.Little */,
        };
        this.#settings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lmi-interpreter-settings', defaultSettings);
    }
    static instance() {
        if (controllerInstance) {
            return controllerInstance;
        }
        controllerInstance = new LinearMemoryInspectorController();
        return controllerInstance;
    }
    static async getMemoryForAddress(memoryWrapper, address) {
        // Provide a chunk of memory that covers the address to show and some before and after
        // as 1. the address shown is not necessarily at the beginning of a page and
        // 2. to allow for fewer memory requests.
        const memoryChunkStart = Math.max(0, address - MEMORY_TRANSFER_MIN_CHUNK_SIZE / 2);
        const memoryChunkEnd = memoryChunkStart + MEMORY_TRANSFER_MIN_CHUNK_SIZE;
        const memory = await memoryWrapper.getRange(memoryChunkStart, memoryChunkEnd);
        return { memory: memory, offset: memoryChunkStart };
    }
    static async getMemoryRange(memoryWrapper, start, end) {
        // Check that the requested start is within bounds.
        // If the requested end is larger than the actual
        // memory, it will be automatically capped when
        // requesting the range.
        if (start < 0 || start > end || start >= memoryWrapper.length()) {
            throw new Error('Requested range is out of bounds.');
        }
        const chunkEnd = Math.max(end, start + MEMORY_TRANSFER_MIN_CHUNK_SIZE);
        return await memoryWrapper.getRange(start, chunkEnd);
    }
    async evaluateExpression(callFrame, expressionName) {
        const result = await callFrame.evaluate({ expression: expressionName });
        if ('error' in result) {
            console.error(`Tried to evaluate the expression '${expressionName}' but got an error: ${result.error}`);
            return undefined;
        }
        if ('exceptionDetails' in result && result?.exceptionDetails?.text) {
            console.error(`Tried to evaluate the expression '${expressionName}' but got an exception: ${result.exceptionDetails.text}`);
            return undefined;
        }
        return result.object;
    }
    saveSettings(data) {
        const valueTypes = Array.from(data.valueTypes);
        const modes = [...data.modes];
        this.#settings.set({ valueTypes, valueTypeModes: modes, endianness: data.endianness });
    }
    loadSettings() {
        const settings = this.#settings.get();
        return {
            valueTypes: new Set(settings.valueTypes),
            modes: new Map(settings.valueTypeModes),
            endianness: settings.endianness,
        };
    }
    getHighlightInfo(bufferId) {
        return this.#bufferIdToHighlightInfo.get(bufferId);
    }
    removeHighlight(bufferId, highlightInfo) {
        const currentHighlight = this.getHighlightInfo(bufferId);
        if (currentHighlight === highlightInfo) {
            this.#bufferIdToHighlightInfo.delete(bufferId);
        }
    }
    setHighlightInfo(bufferId, highlightInfo) {
        this.#bufferIdToHighlightInfo.set(bufferId, highlightInfo);
    }
    #resetHighlightInfo(bufferId) {
        this.#bufferIdToHighlightInfo.delete(bufferId);
    }
    static async retrieveDWARFMemoryObjectAndAddress(obj) {
        if (!(obj instanceof _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerLanguagePlugins.ExtensionRemoteObject)) {
            return undefined;
        }
        const valueNode = obj;
        const address = obj.linearMemoryAddress;
        if (address === undefined) {
            return undefined;
        }
        const callFrame = valueNode.callFrame;
        const response = await obj.debuggerModel().agent.invoke_evaluateOnCallFrame({
            callFrameId: callFrame.id,
            expression: 'memories[0]',
        });
        const error = response.getError();
        if (error) {
            console.error(error);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.couldNotOpenLinearMemory));
        }
        const runtimeModel = obj.debuggerModel().runtimeModel();
        return { obj: runtimeModel.createRemoteObject(response.result), address };
    }
    // This function returns the size of the source language value represented by the ValueNode or ExtensionRemoteObject.
    // If the value is a pointer, the function returns the size of the pointed-to value. If the pointed-to value is also a
    // pointer, it returns the size of the pointer (usually 4 bytes). This is the convention taken by the DWARF extension.
    // > double x = 42.0;
    // > double *ptr = &x;
    // > double **dblptr = &ptr;
    //
    // retrieveObjectSize(ptr_ValueNode) -> 8, the size of a double
    // retrieveObjectSize(dblptr_ValueNode) -> 4, the size of a pointer
    static extractObjectSize(obj) {
        return obj.linearMemorySize ?? 0;
    }
    // The object type description corresponds to the type of the highlighted memory
    // that the user sees in the memory inspector. For pointers, we highlight the pointed to object.
    //
    // Example: The variable `x` has the type `int *`. Assume that `x` points to the value 3.
    // -> The memory inspector will jump to the address where 3 is stored.
    // -> The memory inspector will highlight the bytes that represent the 3.
    // -> The object type description of what we show will thus be `int` and not `int *`.
    static extractObjectTypeDescription(obj) {
        const objType = obj.description;
        if (!objType) {
            return '';
        }
        const lastChar = objType.charAt(objType.length - 1);
        const secondToLastChar = objType.charAt(objType.length - 2);
        const isPointerType = lastChar === '*' || lastChar === '&';
        const isOneLevelPointer = secondToLastChar === ' ';
        if (!isPointerType) {
            return objType;
        }
        if (isOneLevelPointer) {
            // For example, 'int *'and 'int &' become 'int'.
            return objType.slice(0, objType.length - 2);
        }
        // For example, 'int **' becomes 'int *'.
        return objType.slice(0, objType.length - 1);
    }
    // When inspecting a pointer variable, we indicate that we display the pointed-to object in the viewer
    // by prepending an asterisk to the pointer expression's name (mimicking C++ dereferencing).
    // If the object isn't a pointer, we return the expression unchanged.
    //
    // Examples:
    // (int *) myNumber -> (int) *myNumber
    // (int[]) numbers -> (int[]) numbers
    static extractObjectName(obj, expression) {
        const lastChar = obj.description?.charAt(obj.description.length - 1);
        const isPointerType = lastChar === '*';
        if (isPointerType) {
            return '*' + expression;
        }
        return expression;
    }
    async reveal({ object, expression }, omitFocus) {
        const response = await LinearMemoryInspectorController.retrieveDWARFMemoryObjectAndAddress(object);
        let memoryObject = object;
        let memoryAddress = undefined;
        if (response !== undefined) {
            memoryAddress = response.address;
            memoryObject = response.obj;
        }
        const buffer = await getBufferFromObject(memoryObject);
        const { internalProperties } = await buffer.object().getOwnProperties(false);
        const idProperty = internalProperties?.find(({ name }) => name === '[[ArrayBufferData]]');
        const id = idProperty?.value?.value;
        if (!id) {
            throw new Error('Unable to find backing store id for array buffer');
        }
        const memoryProperty = internalProperties?.find(({ name }) => name === '[[WebAssemblyMemory]]');
        const memory = memoryProperty?.value;
        const highlightInfo = LinearMemoryInspectorController.extractHighlightInfo(object, expression);
        if (highlightInfo) {
            this.setHighlightInfo(id, highlightInfo);
        }
        else {
            this.#resetHighlightInfo(id);
        }
        if (this.#bufferIdToRemoteObject.has(id)) {
            this.#paneInstance.reveal(id, memoryAddress);
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('linear-memory-inspector', omitFocus);
            return;
        }
        const title = String(memory ? memory.description : buffer.object().description);
        this.#bufferIdToRemoteObject.set(id, buffer.object());
        const arrayBufferWrapper = new RemoteArrayBufferWrapper(buffer);
        this.#paneInstance.create(id, title, arrayBufferWrapper, memoryAddress);
        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('linear-memory-inspector', omitFocus);
    }
    appendApplicableItems(_event, contextMenu, target) {
        if (target.property.value?.isLinearMemoryInspectable()) {
            const expression = target.path();
            const object = target.property.value;
            contextMenu.debugSection().appendItem(i18nString(UIStrings.revealInMemoryInspectorPanel), this.reveal.bind(this, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.LinearMemoryInspectable(object, expression)), { jslogContext: 'reveal-in-memory-inspector' });
        }
    }
    static extractHighlightInfo(obj, expression) {
        if (!(obj instanceof _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerLanguagePlugins.ExtensionRemoteObject)) {
            return undefined;
        }
        const startAddress = obj.linearMemoryAddress ?? 0;
        let highlightInfo;
        try {
            highlightInfo = {
                startAddress,
                size: LinearMemoryInspectorController.extractObjectSize(obj),
                name: expression ? LinearMemoryInspectorController.extractObjectName(obj, expression) : expression,
                type: LinearMemoryInspectorController.extractObjectTypeDescription(obj),
            };
        }
        catch (err) {
            highlightInfo = undefined;
        }
        return highlightInfo;
    }
    modelRemoved(model) {
        for (const [bufferId, remoteObject] of this.#bufferIdToRemoteObject) {
            if (model === remoteObject.runtimeModel()) {
                this.#bufferIdToRemoteObject.delete(bufferId);
                this.#resetHighlightInfo(bufferId);
                this.#paneInstance.close(bufferId);
            }
        }
    }
    #onDebuggerPause(event) {
        const debuggerModel = event.data;
        for (const [bufferId, remoteObject] of this.#bufferIdToRemoteObject) {
            if (debuggerModel.runtimeModel() === remoteObject.runtimeModel()) {
                const topCallFrame = debuggerModel.debuggerPausedDetails()?.callFrames[0];
                if (topCallFrame) {
                    void this
                        .updateHighlightedMemory(bufferId, topCallFrame)
                        // Need to call refreshView in the callback to trigger re-render.
                        .then(() => this.#paneInstance.refreshView(bufferId));
                }
                else {
                    this.#resetHighlightInfo(bufferId);
                    this.#paneInstance.refreshView(bufferId);
                }
            }
        }
    }
    #onGlobalObjectClear(event) {
        this.modelRemoved(event.data.runtimeModel());
    }
    #viewClosed({ data: bufferId }) {
        const remoteObj = this.#bufferIdToRemoteObject.get(bufferId);
        if (remoteObj) {
            remoteObj.release();
        }
        this.#bufferIdToRemoteObject.delete(bufferId);
        this.#resetHighlightInfo(bufferId);
    }
    async updateHighlightedMemory(bufferId, callFrame) {
        const oldHighlightInfo = this.getHighlightInfo(bufferId);
        const expressionName = oldHighlightInfo?.name;
        if (!oldHighlightInfo || !expressionName) {
            this.#resetHighlightInfo(bufferId);
            return;
        }
        const obj = await this.evaluateExpression(callFrame, expressionName);
        if (!obj) {
            this.#resetHighlightInfo(bufferId);
            return;
        }
        const newHighlightInfo = LinearMemoryInspectorController.extractHighlightInfo(obj, expressionName);
        if (!newHighlightInfo || !this.#pointToSameMemoryObject(newHighlightInfo, oldHighlightInfo)) {
            this.#resetHighlightInfo(bufferId);
        }
        else {
            this.setHighlightInfo(bufferId, newHighlightInfo);
        }
    }
    #pointToSameMemoryObject(highlightInfoA, highlightInfoB) {
        return highlightInfoA.type === highlightInfoB.type && highlightInfoA.startAddress === highlightInfoB.startAddress;
    }
}
//# sourceMappingURL=LinearMemoryInspectorController.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/LinearMemoryInspectorPane.js":
/*!*********************************************************************!*\
  !*** ./panels/linear_memory_inspector/LinearMemoryInspectorPane.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryInspectorPane: () => (/* binding */ LinearMemoryInspectorPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/linear_memory_inspector/components/components.js");
/* harmony import */ var _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryInspectorController.js */ "./panels/linear_memory_inspector/LinearMemoryInspectorController.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Label in the Linear Memory inspector tool that serves as a placeholder if no inspections are open (i.e. nothing to see here).
     *             Inspection hereby refers to viewing, navigating and understanding the memory through this tool.
     */
    noOpenInspections: 'No open inspections',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/linear_memory_inspector/LinearMemoryInspectorPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let inspectorInstance;
class LinearMemoryInspectorPane extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox) {
    #tabbedPane;
    constructor() {
        super(false);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.panel('linear-memory-inspector').track({ resize: true })}`);
        const placeholder = document.createElement('div');
        placeholder.textContent = i18nString(UIStrings.noOpenInspections);
        placeholder.style.display = 'flex';
        this.#tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TabbedPane.TabbedPane();
        this.#tabbedPane.setPlaceholderElement(placeholder);
        this.#tabbedPane.setCloseableTabs(true);
        this.#tabbedPane.setAllowTabReorder(true, true);
        this.#tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TabbedPane.Events.TabClosed, this.#tabClosed, this);
        this.#tabbedPane.show(this.contentElement);
        this.#tabbedPane.headerElement().setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar().track({ keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space' })}`);
    }
    static instance() {
        if (!inspectorInstance) {
            inspectorInstance = new LinearMemoryInspectorPane();
        }
        return inspectorInstance;
    }
    #tabView(tabId) {
        const view = this.#tabbedPane.tabView(tabId);
        if (view === null) {
            throw new Error(`No linear memory inspector view for the given tab id: ${tabId}`);
        }
        return view;
    }
    create(tabId, title, arrayWrapper, address) {
        const inspectorView = new LinearMemoryInspectorView(arrayWrapper, address, tabId);
        this.#tabbedPane.appendTab(tabId, title, inspectorView, undefined, false, true);
        this.#tabbedPane.selectTab(tabId);
    }
    close(tabId) {
        this.#tabbedPane.closeTab(tabId, false);
    }
    reveal(tabId, address) {
        const view = this.#tabView(tabId);
        if (address !== undefined) {
            view.updateAddress(address);
        }
        this.refreshView(tabId);
        this.#tabbedPane.selectTab(tabId);
    }
    refreshView(tabId) {
        const view = this.#tabView(tabId);
        view.refreshData();
    }
    #tabClosed(event) {
        const { tabId } = event.data;
        this.dispatchEventToListeners("ViewClosed" /* Events.ViewClosed */, tabId);
    }
}
class LinearMemoryInspectorView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    #memoryWrapper;
    #address;
    #tabId;
    #inspector;
    firstTimeOpen;
    constructor(memoryWrapper, address = 0, tabId) {
        super(false);
        if (address < 0 || address >= memoryWrapper.length()) {
            throw new Error('Requested address is out of bounds.');
        }
        this.#memoryWrapper = memoryWrapper;
        this.#address = address;
        this.#tabId = tabId;
        this.#inspector = new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.LinearMemoryInspector();
        this.#inspector.addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.MemoryRequestEvent.eventName, (event) => {
            this.#memoryRequested(event);
        });
        this.#inspector.addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.AddressChangedEvent.eventName, (event) => {
            this.updateAddress(event.data);
        });
        this.#inspector.addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.SettingsChangedEvent.eventName, (event) => {
            // Stop event from bubbling up, since no element further up needs the event.
            event.stopPropagation();
            this.saveSettings(event.data);
        });
        this.#inspector.addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryHighlightChipList.DeleteMemoryHighlightEvent.eventName, (event) => {
            _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().removeHighlight(this.#tabId, event.data);
            this.refreshData();
        });
        this.contentElement.appendChild(this.#inspector);
        this.firstTimeOpen = true;
    }
    wasShown() {
        this.refreshData();
    }
    saveSettings(settings) {
        _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().saveSettings(settings);
    }
    updateAddress(address) {
        if (address < 0 || address >= this.#memoryWrapper.length()) {
            throw new Error('Requested address is out of bounds.');
        }
        this.#address = address;
    }
    refreshData() {
        void _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.getMemoryForAddress(this.#memoryWrapper, this.#address).then(({ memory, offset, }) => {
            let valueTypes;
            let valueTypeModes;
            let endianness;
            if (this.firstTimeOpen) {
                const settings = _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().loadSettings();
                valueTypes = settings.valueTypes;
                valueTypeModes = settings.modes;
                endianness = settings.endianness;
                this.firstTimeOpen = false;
            }
            this.#inspector.data = {
                memory,
                address: this.#address,
                memoryOffset: offset,
                outerMemoryLength: this.#memoryWrapper.length(),
                valueTypes,
                valueTypeModes,
                endianness,
                highlightInfo: this.#getHighlightInfo(),
            };
        });
    }
    #memoryRequested(event) {
        const { start, end, address } = event.data;
        if (address < start || address >= end) {
            throw new Error('Requested address is out of bounds.');
        }
        void _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.getMemoryRange(this.#memoryWrapper, start, end).then(memory => {
            this.#inspector.data = {
                memory: memory,
                address: address,
                memoryOffset: start,
                outerMemoryLength: this.#memoryWrapper.length(),
                highlightInfo: this.#getHighlightInfo(),
            };
        });
    }
    #getHighlightInfo() {
        const highlightInfo = _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().getHighlightInfo(this.#tabId);
        if (highlightInfo !== undefined) {
            if (highlightInfo.startAddress < 0 || highlightInfo.startAddress >= this.#memoryWrapper.length()) {
                throw new Error('HighlightInfo start address is out of bounds.');
            }
            if (highlightInfo.size <= 0) {
                throw new Error('Highlight size must be a positive number.');
            }
        }
        return highlightInfo;
    }
}
//# sourceMappingURL=LinearMemoryInspectorPane.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js":
/*!******************************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//# sourceMappingURL=LinearMemoryViewerUtils.js.map

/***/ }),

/***/ "./panels/linear_memory_inspector/components/components.js":
/*!*****************************************************************!*\
  !*** ./panels/linear_memory_inspector/components/components.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryHighlightChipList: () => (/* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   LinearMemoryInspector: () => (/* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   LinearMemoryInspectorUtils: () => (/* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   LinearMemoryNavigator: () => (/* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   LinearMemoryValueInterpreter: () => (/* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   LinearMemoryViewer: () => (/* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   LinearMemoryViewerUtils: () => (/* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__),
/* harmony export */   ValueInterpreterDisplay: () => (/* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__),
/* harmony export */   ValueInterpreterDisplayUtils: () => (/* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__),
/* harmony export */   ValueInterpreterSettings: () => (/* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__)
/* harmony export */ });
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */ var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */ var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js");
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











//# sourceMappingURL=components.js.map

/***/ })

}]);