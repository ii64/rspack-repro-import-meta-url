"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_LinearMemoryInspectorController_ts-src_panels_linear_memor-0af21f"],{

/***/ "./src/panels/linear_memory_inspector/LinearMemoryInspectorController.ts":
/*!*******************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/LinearMemoryInspectorController.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LinearMemoryInspectorController: () => (/* binding */ LinearMemoryInspectorController),
/* harmony export */   RemoteArrayBufferWrapper: () => (/* binding */ RemoteArrayBufferWrapper),
/* harmony export */   isDWARFMemoryObject: () => (/* binding */ isDWARFMemoryObject)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
/* harmony import */ var _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryInspectorPane.js */ "./src/panels/linear_memory_inspector/LinearMemoryInspectorPane.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RemoteArrayBufferWrapper_remoteArrayBuffer, _LinearMemoryInspectorController_instances, _LinearMemoryInspectorController_paneInstance, _LinearMemoryInspectorController_bufferIdToRemoteObject, _LinearMemoryInspectorController_bufferIdToHighlightInfo, _LinearMemoryInspectorController_settings, _LinearMemoryInspectorController_resetHighlightInfo, _LinearMemoryInspectorController_onDebuggerPause, _LinearMemoryInspectorController_onGlobalObjectClear, _LinearMemoryInspectorController_viewClosed, _LinearMemoryInspectorController_pointToSameMemoryObject;







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
    constructor(arrayBuffer) {
        _RemoteArrayBufferWrapper_remoteArrayBuffer.set(this, void 0);
        __classPrivateFieldSet(this, _RemoteArrayBufferWrapper_remoteArrayBuffer, arrayBuffer, "f");
    }
    length() {
        return __classPrivateFieldGet(this, _RemoteArrayBufferWrapper_remoteArrayBuffer, "f").byteLength();
    }
    async getRange(start, end) {
        const newEnd = Math.min(end, this.length());
        if (start < 0 || start > newEnd) {
            console.error(`Requesting invalid range of memory: (${start}, ${end})`);
            return new Uint8Array(0);
        }
        const array = await __classPrivateFieldGet(this, _RemoteArrayBufferWrapper_remoteArrayBuffer, "f").bytes(start, newEnd);
        return new Uint8Array(array);
    }
}
_RemoteArrayBufferWrapper_remoteArrayBuffer = new WeakMap();
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
    constructor() {
        super();
        _LinearMemoryInspectorController_instances.add(this);
        _LinearMemoryInspectorController_paneInstance.set(this, _LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryInspectorPane.instance());
        _LinearMemoryInspectorController_bufferIdToRemoteObject.set(this, new Map());
        _LinearMemoryInspectorController_bufferIdToHighlightInfo.set(this, new Map());
        _LinearMemoryInspectorController_settings.set(this, void 0);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.GlobalObjectCleared, __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_onGlobalObjectClear), this);
        __classPrivateFieldGet(this, _LinearMemoryInspectorController_paneInstance, "f").addEventListener(_LinearMemoryInspectorPane_js__WEBPACK_IMPORTED_MODULE_6__.Events.ViewClosed, __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_viewClosed).bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerPaused, __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_onDebuggerPause), this);
        const defaultValueTypeModes = _components_components_js__WEBPACK_IMPORTED_MODULE_5__.ValueInterpreterDisplayUtils.getDefaultValueTypeMapping();
        const defaultSettings = {
            valueTypes: Array.from(defaultValueTypeModes.keys()),
            valueTypeModes: Array.from(defaultValueTypeModes),
            endianness: _components_components_js__WEBPACK_IMPORTED_MODULE_5__.ValueInterpreterDisplayUtils.Endianness.Little,
        };
        __classPrivateFieldSet(this, _LinearMemoryInspectorController_settings, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('lmi-interpreter-settings', defaultSettings), "f");
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
        __classPrivateFieldGet(this, _LinearMemoryInspectorController_settings, "f").set({ valueTypes, valueTypeModes: modes, endianness: data.endianness });
    }
    loadSettings() {
        const settings = __classPrivateFieldGet(this, _LinearMemoryInspectorController_settings, "f").get();
        return {
            valueTypes: new Set(settings.valueTypes),
            modes: new Map(settings.valueTypeModes),
            endianness: settings.endianness,
        };
    }
    getHighlightInfo(bufferId) {
        return __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToHighlightInfo, "f").get(bufferId);
    }
    removeHighlight(bufferId, highlightInfo) {
        const currentHighlight = this.getHighlightInfo(bufferId);
        if (currentHighlight === highlightInfo) {
            __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToHighlightInfo, "f").delete(bufferId);
        }
    }
    setHighlightInfo(bufferId, highlightInfo) {
        __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToHighlightInfo, "f").set(bufferId, highlightInfo);
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
            __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_resetHighlightInfo).call(this, id);
        }
        if (__classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToRemoteObject, "f").has(id)) {
            __classPrivateFieldGet(this, _LinearMemoryInspectorController_paneInstance, "f").reveal(id, memoryAddress);
            void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('linear-memory-inspector', omitFocus);
            return;
        }
        const title = String(memory ? memory.description : buffer.object().description);
        __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToRemoteObject, "f").set(id, buffer.object());
        const arrayBufferWrapper = new RemoteArrayBufferWrapper(buffer);
        __classPrivateFieldGet(this, _LinearMemoryInspectorController_paneInstance, "f").create(id, title, arrayBufferWrapper, memoryAddress);
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
        for (const [bufferId, remoteObject] of __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToRemoteObject, "f")) {
            if (model === remoteObject.runtimeModel()) {
                __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToRemoteObject, "f").delete(bufferId);
                __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_resetHighlightInfo).call(this, bufferId);
                __classPrivateFieldGet(this, _LinearMemoryInspectorController_paneInstance, "f").close(bufferId);
            }
        }
    }
    async updateHighlightedMemory(bufferId, callFrame) {
        const oldHighlightInfo = this.getHighlightInfo(bufferId);
        const expressionName = oldHighlightInfo?.name;
        if (!oldHighlightInfo || !expressionName) {
            __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_resetHighlightInfo).call(this, bufferId);
            return;
        }
        const obj = await this.evaluateExpression(callFrame, expressionName);
        if (!obj) {
            __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_resetHighlightInfo).call(this, bufferId);
            return;
        }
        const newHighlightInfo = LinearMemoryInspectorController.extractHighlightInfo(obj, expressionName);
        if (!newHighlightInfo || !__classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_pointToSameMemoryObject).call(this, newHighlightInfo, oldHighlightInfo)) {
            __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_resetHighlightInfo).call(this, bufferId);
        }
        else {
            this.setHighlightInfo(bufferId, newHighlightInfo);
        }
    }
}
_LinearMemoryInspectorController_paneInstance = new WeakMap(), _LinearMemoryInspectorController_bufferIdToRemoteObject = new WeakMap(), _LinearMemoryInspectorController_bufferIdToHighlightInfo = new WeakMap(), _LinearMemoryInspectorController_settings = new WeakMap(), _LinearMemoryInspectorController_instances = new WeakSet(), _LinearMemoryInspectorController_resetHighlightInfo = function _LinearMemoryInspectorController_resetHighlightInfo(bufferId) {
    __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToHighlightInfo, "f").delete(bufferId);
}, _LinearMemoryInspectorController_onDebuggerPause = function _LinearMemoryInspectorController_onDebuggerPause(event) {
    const debuggerModel = event.data;
    for (const [bufferId, remoteObject] of __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToRemoteObject, "f")) {
        if (debuggerModel.runtimeModel() === remoteObject.runtimeModel()) {
            const topCallFrame = debuggerModel.debuggerPausedDetails()?.callFrames[0];
            if (topCallFrame) {
                void this
                    .updateHighlightedMemory(bufferId, topCallFrame)
                    // Need to call refreshView in the callback to trigger re-render.
                    .then(() => __classPrivateFieldGet(this, _LinearMemoryInspectorController_paneInstance, "f").refreshView(bufferId));
            }
            else {
                __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_resetHighlightInfo).call(this, bufferId);
                __classPrivateFieldGet(this, _LinearMemoryInspectorController_paneInstance, "f").refreshView(bufferId);
            }
        }
    }
}, _LinearMemoryInspectorController_onGlobalObjectClear = function _LinearMemoryInspectorController_onGlobalObjectClear(event) {
    this.modelRemoved(event.data.runtimeModel());
}, _LinearMemoryInspectorController_viewClosed = function _LinearMemoryInspectorController_viewClosed({ data: bufferId }) {
    const remoteObj = __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToRemoteObject, "f").get(bufferId);
    if (remoteObj) {
        remoteObj.release();
    }
    __classPrivateFieldGet(this, _LinearMemoryInspectorController_bufferIdToRemoteObject, "f").delete(bufferId);
    __classPrivateFieldGet(this, _LinearMemoryInspectorController_instances, "m", _LinearMemoryInspectorController_resetHighlightInfo).call(this, bufferId);
}, _LinearMemoryInspectorController_pointToSameMemoryObject = function _LinearMemoryInspectorController_pointToSameMemoryObject(highlightInfoA, highlightInfoB) {
    return highlightInfoA.type === highlightInfoB.type && highlightInfoA.startAddress === highlightInfoB.startAddress;
};


/***/ }),

/***/ "./src/panels/linear_memory_inspector/LinearMemoryInspectorPane.ts":
/*!*************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/LinearMemoryInspectorPane.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   LinearMemoryInspectorPane: () => (/* binding */ LinearMemoryInspectorPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/linear_memory_inspector/components/components.ts");
/* harmony import */ var _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryInspectorController.js */ "./src/panels/linear_memory_inspector/LinearMemoryInspectorController.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LinearMemoryInspectorPane_instances, _LinearMemoryInspectorPane_tabbedPane, _LinearMemoryInspectorPane_tabView, _LinearMemoryInspectorPane_tabClosed, _LinearMemoryInspectorView_instances, _LinearMemoryInspectorView_memoryWrapper, _LinearMemoryInspectorView_address, _LinearMemoryInspectorView_tabId, _LinearMemoryInspectorView_inspector, _LinearMemoryInspectorView_memoryRequested, _LinearMemoryInspectorView_getHighlightInfo;






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
    constructor() {
        super(false);
        _LinearMemoryInspectorPane_instances.add(this);
        _LinearMemoryInspectorPane_tabbedPane.set(this, void 0);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.panel('linear-memory-inspector').track({ resize: true })}`);
        const placeholder = document.createElement('div');
        placeholder.textContent = i18nString(UIStrings.noOpenInspections);
        placeholder.style.display = 'flex';
        __classPrivateFieldSet(this, _LinearMemoryInspectorPane_tabbedPane, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TabbedPane.TabbedPane(), "f");
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").setPlaceholderElement(placeholder);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").setCloseableTabs(true);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").setAllowTabReorder(true, true);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.TabbedPane.Events.TabClosed, __classPrivateFieldGet(this, _LinearMemoryInspectorPane_instances, "m", _LinearMemoryInspectorPane_tabClosed), this);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").show(this.contentElement);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").headerElement().setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar().track({ keydown: 'ArrowUp|ArrowLeft|ArrowDown|ArrowRight|Enter|Space' })}`);
    }
    static instance() {
        if (!inspectorInstance) {
            inspectorInstance = new LinearMemoryInspectorPane();
        }
        return inspectorInstance;
    }
    create(tabId, title, arrayWrapper, address) {
        const inspectorView = new LinearMemoryInspectorView(arrayWrapper, address, tabId);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").appendTab(tabId, title, inspectorView, undefined, false, true);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").selectTab(tabId);
    }
    close(tabId) {
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").closeTab(tabId, false);
    }
    reveal(tabId, address) {
        const view = __classPrivateFieldGet(this, _LinearMemoryInspectorPane_instances, "m", _LinearMemoryInspectorPane_tabView).call(this, tabId);
        if (address !== undefined) {
            view.updateAddress(address);
        }
        this.refreshView(tabId);
        __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").selectTab(tabId);
    }
    refreshView(tabId) {
        const view = __classPrivateFieldGet(this, _LinearMemoryInspectorPane_instances, "m", _LinearMemoryInspectorPane_tabView).call(this, tabId);
        view.refreshData();
    }
}
_LinearMemoryInspectorPane_tabbedPane = new WeakMap(), _LinearMemoryInspectorPane_instances = new WeakSet(), _LinearMemoryInspectorPane_tabView = function _LinearMemoryInspectorPane_tabView(tabId) {
    const view = __classPrivateFieldGet(this, _LinearMemoryInspectorPane_tabbedPane, "f").tabView(tabId);
    if (view === null) {
        throw new Error(`No linear memory inspector view for the given tab id: ${tabId}`);
    }
    return view;
}, _LinearMemoryInspectorPane_tabClosed = function _LinearMemoryInspectorPane_tabClosed(event) {
    const { tabId } = event.data;
    this.dispatchEventToListeners(Events.ViewClosed, tabId);
};
var Events;
(function (Events) {
    Events["ViewClosed"] = "ViewClosed";
})(Events || (Events = {}));
class LinearMemoryInspectorView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox {
    constructor(memoryWrapper, address = 0, tabId) {
        super(false);
        _LinearMemoryInspectorView_instances.add(this);
        _LinearMemoryInspectorView_memoryWrapper.set(this, void 0);
        _LinearMemoryInspectorView_address.set(this, void 0);
        _LinearMemoryInspectorView_tabId.set(this, void 0);
        _LinearMemoryInspectorView_inspector.set(this, void 0);
        Object.defineProperty(this, "firstTimeOpen", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (address < 0 || address >= memoryWrapper.length()) {
            throw new Error('Requested address is out of bounds.');
        }
        __classPrivateFieldSet(this, _LinearMemoryInspectorView_memoryWrapper, memoryWrapper, "f");
        __classPrivateFieldSet(this, _LinearMemoryInspectorView_address, address, "f");
        __classPrivateFieldSet(this, _LinearMemoryInspectorView_tabId, tabId, "f");
        __classPrivateFieldSet(this, _LinearMemoryInspectorView_inspector, new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.LinearMemoryInspector(), "f");
        __classPrivateFieldGet(this, _LinearMemoryInspectorView_inspector, "f").addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.MemoryRequestEvent.eventName, (event) => {
            __classPrivateFieldGet(this, _LinearMemoryInspectorView_instances, "m", _LinearMemoryInspectorView_memoryRequested).call(this, event);
        });
        __classPrivateFieldGet(this, _LinearMemoryInspectorView_inspector, "f").addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.AddressChangedEvent.eventName, (event) => {
            this.updateAddress(event.data);
        });
        __classPrivateFieldGet(this, _LinearMemoryInspectorView_inspector, "f").addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryInspector.SettingsChangedEvent.eventName, (event) => {
            // Stop event from bubbling up, since no element further up needs the event.
            event.stopPropagation();
            this.saveSettings(event.data);
        });
        __classPrivateFieldGet(this, _LinearMemoryInspectorView_inspector, "f").addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryHighlightChipList.DeleteMemoryHighlightEvent.eventName, (event) => {
            _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().removeHighlight(__classPrivateFieldGet(this, _LinearMemoryInspectorView_tabId, "f"), event.data);
            this.refreshData();
        });
        this.contentElement.appendChild(__classPrivateFieldGet(this, _LinearMemoryInspectorView_inspector, "f"));
        this.firstTimeOpen = true;
    }
    wasShown() {
        this.refreshData();
    }
    saveSettings(settings) {
        _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().saveSettings(settings);
    }
    updateAddress(address) {
        if (address < 0 || address >= __classPrivateFieldGet(this, _LinearMemoryInspectorView_memoryWrapper, "f").length()) {
            throw new Error('Requested address is out of bounds.');
        }
        __classPrivateFieldSet(this, _LinearMemoryInspectorView_address, address, "f");
    }
    refreshData() {
        void _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.getMemoryForAddress(__classPrivateFieldGet(this, _LinearMemoryInspectorView_memoryWrapper, "f"), __classPrivateFieldGet(this, _LinearMemoryInspectorView_address, "f")).then(({ memory, offset, }) => {
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
            __classPrivateFieldGet(this, _LinearMemoryInspectorView_inspector, "f").data = {
                memory,
                address: __classPrivateFieldGet(this, _LinearMemoryInspectorView_address, "f"),
                memoryOffset: offset,
                outerMemoryLength: __classPrivateFieldGet(this, _LinearMemoryInspectorView_memoryWrapper, "f").length(),
                valueTypes,
                valueTypeModes,
                endianness,
                highlightInfo: __classPrivateFieldGet(this, _LinearMemoryInspectorView_instances, "m", _LinearMemoryInspectorView_getHighlightInfo).call(this),
            };
        });
    }
}
_LinearMemoryInspectorView_memoryWrapper = new WeakMap(), _LinearMemoryInspectorView_address = new WeakMap(), _LinearMemoryInspectorView_tabId = new WeakMap(), _LinearMemoryInspectorView_inspector = new WeakMap(), _LinearMemoryInspectorView_instances = new WeakSet(), _LinearMemoryInspectorView_memoryRequested = function _LinearMemoryInspectorView_memoryRequested(event) {
    const { start, end, address } = event.data;
    if (address < start || address >= end) {
        throw new Error('Requested address is out of bounds.');
    }
    void _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.getMemoryRange(__classPrivateFieldGet(this, _LinearMemoryInspectorView_memoryWrapper, "f"), start, end).then(memory => {
        __classPrivateFieldGet(this, _LinearMemoryInspectorView_inspector, "f").data = {
            memory: memory,
            address: address,
            memoryOffset: start,
            outerMemoryLength: __classPrivateFieldGet(this, _LinearMemoryInspectorView_memoryWrapper, "f").length(),
            highlightInfo: __classPrivateFieldGet(this, _LinearMemoryInspectorView_instances, "m", _LinearMemoryInspectorView_getHighlightInfo).call(this),
        };
    });
}, _LinearMemoryInspectorView_getHighlightInfo = function _LinearMemoryInspectorView_getHighlightInfo() {
    const highlightInfo = _LinearMemoryInspectorController_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryInspectorController.instance().getHighlightInfo(__classPrivateFieldGet(this, _LinearMemoryInspectorView_tabId, "f"));
    if (highlightInfo !== undefined) {
        if (highlightInfo.startAddress < 0 || highlightInfo.startAddress >= __classPrivateFieldGet(this, _LinearMemoryInspectorView_memoryWrapper, "f").length()) {
            throw new Error('HighlightInfo start address is out of bounds.');
        }
        if (highlightInfo.size <= 0) {
            throw new Error('Highlight size must be a positive number.');
        }
    }
    return highlightInfo;
};


/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryViewerUtils.ts":
/*!**********************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryViewerUtils.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ }),

/***/ "./src/panels/linear_memory_inspector/components/components.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/components.ts ***!
  \*********************************************************************/
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
/* harmony import */ var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts");
/* harmony import */ var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryInspector.ts");
/* harmony import */ var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.ts");
/* harmony import */ var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.ts");
/* harmony import */ var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.ts");
/* harmony import */ var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryViewer.ts");
/* harmony import */ var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./src/panels/linear_memory_inspector/components/LinearMemoryViewerUtils.ts");
/* harmony import */ var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplay.ts");
/* harmony import */ var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.ts");
/* harmony import */ var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./src/panels/linear_memory_inspector/components/ValueInterpreterSettings.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













/***/ })

}]);