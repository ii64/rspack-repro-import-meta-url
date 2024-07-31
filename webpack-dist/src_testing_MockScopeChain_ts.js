"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_testing_MockScopeChain_ts"],{

/***/ "./src/testing/MockScopeChain.ts":
/*!***************************************!*\
  !*** ./src/testing/MockScopeChain.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockProtocolBackend: () => (/* binding */ MockProtocolBackend),
/* harmony export */   parseScopeChain: () => (/* binding */ parseScopeChain)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./src/testing/MockConnection.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MockProtocolBackend_instances, _MockProtocolBackend_scriptSources, _MockProtocolBackend_sourceMapContents, _MockProtocolBackend_objectProperties, _MockProtocolBackend_setBreakpointByUrlResponses, _MockProtocolBackend_removeBreakpointCallbacks, _MockProtocolBackend_nextObjectIndex, _MockProtocolBackend_nextScriptIndex, _MockProtocolBackend_createProtocolLocation, _MockProtocolBackend_createProtocolScope, _MockProtocolBackend_getBreakpointKey, _MockProtocolBackend_getScriptSourceHandler, _MockProtocolBackend_setBreakpointByUrlHandler, _MockProtocolBackend_removeBreakpointHandler, _MockProtocolBackend_getPropertiesHandler, _MockProtocolBackend_loadSourceMap;




class MockProtocolBackend {
    constructor() {
        _MockProtocolBackend_instances.add(this);
        _MockProtocolBackend_scriptSources.set(this, new Map());
        _MockProtocolBackend_sourceMapContents.set(this, new Map());
        _MockProtocolBackend_objectProperties.set(this, new Map());
        _MockProtocolBackend_setBreakpointByUrlResponses.set(this, new Map());
        _MockProtocolBackend_removeBreakpointCallbacks.set(this, new Map());
        _MockProtocolBackend_nextObjectIndex.set(this, 0);
        _MockProtocolBackend_nextScriptIndex.set(this, 0);
        // One time setup of the response handlers.
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.getScriptSource', __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_getScriptSourceHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Runtime.getProperties', __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_getPropertiesHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_setBreakpointByUrlHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Storage.getStorageKeyForFrame', () => ({ storageKey: 'test-key' }));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.removeBreakpoint', __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_removeBreakpointHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.resume', () => ({}));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.enable', () => ({ debuggerId: 'DEBUGGER_ID' }));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.PageResourceLoader.PageResourceLoader.instance({
            forceNew: true,
            loadOverride: async (url) => __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_loadSourceMap).call(this, url),
            maxConcurrentLoads: 1,
        });
    }
    dispatchDebuggerPause(script, reason, functionName = '', scopeChain = []) {
        const target = script.debuggerModel.target();
        if (reason === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.PausedEventReason.Instrumentation) {
            // Instrumentation pauses don't pass call frames, they only pass the script id in the 'data' field.
            (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.paused', {
                callFrames: [],
                reason,
                data: { scriptId: script.scriptId },
            });
        }
        else {
            const callFrames = [
                {
                    callFrameId: '1',
                    functionName,
                    url: script.sourceURL,
                    scopeChain,
                    location: {
                        scriptId: script.scriptId,
                        lineNumber: 0,
                    },
                    this: { type: 'object' },
                },
            ];
            (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.paused', {
                callFrames,
                reason,
            });
        }
    }
    dispatchDebuggerPauseWithNoCallFrames(target, reason) {
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.paused', {
            callFrames: [],
            reason,
        });
    }
    async addScript(target, scriptDescription, sourceMap) {
        var _a, _b;
        const scriptId = 'SCRIPTID.' + (__classPrivateFieldSet(this, _MockProtocolBackend_nextScriptIndex, (_b = __classPrivateFieldGet(this, _MockProtocolBackend_nextScriptIndex, "f"), _a = _b++, _b), "f"), _a);
        __classPrivateFieldGet(this, _MockProtocolBackend_scriptSources, "f").set(scriptId, scriptDescription.content);
        const startLine = scriptDescription.startLine ?? 0;
        const startColumn = scriptDescription.startColumn ?? 0;
        const endLine = startLine + (scriptDescription.content.match(/^/gm)?.length ?? 1) - 1;
        let endColumn = scriptDescription.content.length - scriptDescription.content.lastIndexOf('\n') - 1;
        if (startLine === endLine) {
            endColumn += startColumn;
        }
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
            scriptId,
            url: scriptDescription.url,
            startLine,
            startColumn,
            endLine,
            endColumn,
            executionContextId: scriptDescription?.executionContextId ?? 1,
            executionContextAuxData: { isDefault: !scriptDescription.isContentScript },
            hash: '',
            hasSourceURL: Boolean(scriptDescription.hasSourceURL),
            ...(sourceMap ? { sourceMapURL: sourceMap.url } : null),
            embedderName: scriptDescription.embedderName,
        });
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        const scriptObject = debuggerModel.scriptForId(scriptId);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(scriptObject);
        if (sourceMap) {
            let { content } = sourceMap;
            if (typeof content !== 'string') {
                content = JSON.stringify(content);
            }
            __classPrivateFieldGet(this, _MockProtocolBackend_sourceMapContents, "f").set(sourceMap.url, content);
            // Wait until the source map loads.
            const loadedSourceMap = await debuggerModel.sourceMapManager().sourceMapForClientPromise(scriptObject);
            assert.strictEqual(loadedSourceMap?.url(), sourceMap.url);
        }
        return scriptObject;
    }
    createSimpleRemoteObject(properties) {
        var _a, _b;
        const objectId = 'OBJECTID.' + (__classPrivateFieldSet(this, _MockProtocolBackend_nextObjectIndex, (_b = __classPrivateFieldGet(this, _MockProtocolBackend_nextObjectIndex, "f"), _a = _b++, _b), "f"), _a);
        __classPrivateFieldGet(this, _MockProtocolBackend_objectProperties, "f").set(objectId, properties);
        return { type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.RemoteObjectType.Object, objectId: objectId };
    }
    // In the |scopeDescriptor|, '{' and '}' characters mark the positions of function
    // offset start and end, '<' and '>' mark the positions of the nested scope
    // start and end (if '<', '>' are missing then the nested scope is the function scope).
    // Other characters in |scopeDescriptor| are not significant (so that tests can use the other characters in
    // the descriptors to describe other assertions).
    async createCallFrame(target, script, scopeDescriptor, sourceMap, scopeObjects = []) {
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        const scriptObject = await this.addScript(target, script, sourceMap);
        const parsedScopes = parseScopeChain(scopeDescriptor);
        const scopeChain = parsedScopes.map(s => __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_createProtocolScope).call(this, s.type, { type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.RemoteObjectType.Object }, scriptObject.scriptId, s.startLine, s.startColumn, s.endLine, s.endColumn));
        const innerScope = scopeChain[0];
        console.assert(scopeObjects.length < scopeChain.length);
        for (let i = 0; i < scopeObjects.length; ++i) {
            scopeChain[i].object = scopeObjects[i];
        }
        const payload = {
            callFrameId: '0',
            functionName: 'test',
            functionLocation: undefined,
            location: innerScope.startLocation,
            url: scriptObject.sourceURL,
            scopeChain,
            this: { type: 'object' },
            returnValue: undefined,
            canBeRestarted: false,
        };
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame(debuggerModel, scriptObject, payload, 0);
    }
    responderToBreakpointByUrlRequest(url, lineNumber) {
        let requestCallback = () => { };
        let responseCallback;
        const responsePromise = new Promise(resolve => {
            responseCallback = resolve;
        });
        const requestPromise = new Promise(resolve => {
            requestCallback = resolve;
        });
        const key = __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_getBreakpointKey).call(this, url, lineNumber);
        __classPrivateFieldGet(this, _MockProtocolBackend_setBreakpointByUrlResponses, "f").set(key, { response: responsePromise, callback: requestCallback, isOneShot: true });
        return async (response) => {
            responseCallback(response);
            await requestPromise;
        };
    }
    setBreakpointByUrlToFail(url, lineNumber) {
        const key = __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_getBreakpointKey).call(this, url, lineNumber);
        const responsePromise = Promise.resolve({
            getError() {
                return 'Breakpoint error';
            },
        });
        __classPrivateFieldGet(this, _MockProtocolBackend_setBreakpointByUrlResponses, "f").set(key, { response: responsePromise, callback: () => { }, isOneShot: false });
    }
    breakpointRemovedPromise(breakpointId) {
        return new Promise(resolve => __classPrivateFieldGet(this, _MockProtocolBackend_removeBreakpointCallbacks, "f").set(breakpointId, resolve));
    }
}
_MockProtocolBackend_scriptSources = new WeakMap(), _MockProtocolBackend_sourceMapContents = new WeakMap(), _MockProtocolBackend_objectProperties = new WeakMap(), _MockProtocolBackend_setBreakpointByUrlResponses = new WeakMap(), _MockProtocolBackend_removeBreakpointCallbacks = new WeakMap(), _MockProtocolBackend_nextObjectIndex = new WeakMap(), _MockProtocolBackend_nextScriptIndex = new WeakMap(), _MockProtocolBackend_instances = new WeakSet(), _MockProtocolBackend_createProtocolLocation = function _MockProtocolBackend_createProtocolLocation(scriptId, lineNumber, columnNumber) {
    return { scriptId: scriptId, lineNumber, columnNumber };
}, _MockProtocolBackend_createProtocolScope = function _MockProtocolBackend_createProtocolScope(type, object, scriptId, startLine, startColumn, endLine, endColumn) {
    return {
        type,
        object,
        startLocation: __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_createProtocolLocation).call(this, scriptId, startLine, startColumn),
        endLocation: __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_createProtocolLocation).call(this, scriptId, endLine, endColumn),
    };
}, _MockProtocolBackend_getBreakpointKey = function _MockProtocolBackend_getBreakpointKey(url, lineNumber) {
    return url + '@:' + lineNumber;
}, _MockProtocolBackend_getScriptSourceHandler = function _MockProtocolBackend_getScriptSourceHandler(request) {
    const scriptSource = __classPrivateFieldGet(this, _MockProtocolBackend_scriptSources, "f").get(request.scriptId);
    if (scriptSource) {
        return {
            scriptSource,
            getError() {
                return undefined;
            },
        };
    }
    return {
        scriptSource: 'Unknown script',
        getError() {
            return 'Unknown script';
        },
    };
}, _MockProtocolBackend_setBreakpointByUrlHandler = function _MockProtocolBackend_setBreakpointByUrlHandler(request) {
    const key = __classPrivateFieldGet(this, _MockProtocolBackend_instances, "m", _MockProtocolBackend_getBreakpointKey).call(this, request.url ?? '', request.lineNumber);
    const responseCallback = __classPrivateFieldGet(this, _MockProtocolBackend_setBreakpointByUrlResponses, "f").get(key);
    if (responseCallback) {
        if (responseCallback.isOneShot) {
            __classPrivateFieldGet(this, _MockProtocolBackend_setBreakpointByUrlResponses, "f").delete(key);
        }
        // Announce to the client that the breakpoint request arrived.
        responseCallback.callback();
        // Return the response promise.
        return responseCallback.response;
    }
    console.error('Unexpected setBreakpointByUrl request', request);
    const response = {
        breakpointId: 'INVALID',
        locations: [],
        getError() {
            return 'Unknown breakpoint';
        },
    };
    return Promise.resolve(response);
}, _MockProtocolBackend_removeBreakpointHandler = function _MockProtocolBackend_removeBreakpointHandler(request) {
    const callback = __classPrivateFieldGet(this, _MockProtocolBackend_removeBreakpointCallbacks, "f").get(request.breakpointId);
    if (callback) {
        callback();
    }
    return {};
}, _MockProtocolBackend_getPropertiesHandler = function _MockProtocolBackend_getPropertiesHandler(request) {
    const objectProperties = __classPrivateFieldGet(this, _MockProtocolBackend_objectProperties, "f").get(request.objectId);
    if (!objectProperties) {
        return {
            result: [],
            getError() {
                return 'Unknown object';
            },
        };
    }
    const result = [];
    for (const property of objectProperties) {
        result.push({
            name: property.name,
            value: {
                type: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Runtime.RemoteObjectType.Number,
                value: property.value,
                description: `${property.value}`,
            },
            writable: true,
            configurable: true,
            enumerable: true,
            isOwn: true,
        });
    }
    return {
        result,
        getError() {
            return undefined;
        },
    };
}, _MockProtocolBackend_loadSourceMap = function _MockProtocolBackend_loadSourceMap(url) {
    const content = __classPrivateFieldGet(this, _MockProtocolBackend_sourceMapContents, "f").get(url);
    if (!content) {
        return {
            success: false,
            content: '',
            errorDescription: { message: 'source map not found', statusCode: 123, netError: 0, netErrorName: '', urlValid: true },
        };
    }
    return {
        success: true,
        content,
        errorDescription: { message: '', statusCode: 0, netError: 0, netErrorName: '', urlValid: true },
    };
};
function scopePositionFromOffsets(descriptor, type, startOffset, endOffset) {
    return {
        type,
        startLine: descriptor.substring(0, startOffset).replace(/[^\n]/g, '').length,
        endLine: descriptor.substring(0, endOffset).replace(/[^\n]/g, '').length,
        startColumn: startOffset - descriptor.lastIndexOf('\n', startOffset - 1) - 1,
        endColumn: endOffset - descriptor.lastIndexOf('\n', endOffset - 1) - 1,
    };
}
function parseScopeChain(scopeDescriptor) {
    // Identify function scope.
    const functionStart = scopeDescriptor.indexOf('{');
    if (functionStart < 0) {
        throw new Error('Test descriptor must contain "{"');
    }
    const functionEnd = scopeDescriptor.indexOf('}', functionStart);
    if (functionEnd < 0) {
        throw new Error('Test descriptor must contain "}"');
    }
    const scopeChain = [scopePositionFromOffsets(scopeDescriptor, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Local, functionStart, functionEnd + 1)];
    // Find the block scope.
    const blockScopeStart = scopeDescriptor.indexOf('<');
    if (blockScopeStart >= 0) {
        const blockScopeEnd = scopeDescriptor.indexOf('>');
        if (blockScopeEnd < 0) {
            throw new Error('Test descriptor must contain matching "." for "<"');
        }
        scopeChain.unshift(scopePositionFromOffsets(scopeDescriptor, _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Debugger.ScopeType.Block, blockScopeStart, blockScopeEnd + 1));
    }
    return scopeChain;
}


/***/ })

}]);