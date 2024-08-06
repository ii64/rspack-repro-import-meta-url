"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_MockScopeChain_js"], {
"./testing/MockScopeChain.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockProtocolBackend: function() { return MockProtocolBackend; },
  parseScopeChain: function() { return parseScopeChain; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_update(receiver, descriptor) {
    if (descriptor.set) {
        if (!descriptor.get) {
            throw new TypeError("attempted to read set only private field");
        }
        if (!("__destrWrapper" in descriptor)) {
            descriptor.__destrWrapper = {
                set value (v){
                    descriptor.set.call(receiver, v);
                },
                get value () {
                    return descriptor.get.call(receiver);
                }
            };
        }
        return descriptor.__destrWrapper;
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        return descriptor;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_update(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "update");
    return _class_apply_descriptor_update(receiver, descriptor);
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v1) {
            return step([
                n,
                v1
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}



var _scriptSources = /*#__PURE__*/ new WeakMap(), _sourceMapContents = /*#__PURE__*/ new WeakMap(), _objectProperties = /*#__PURE__*/ new WeakMap(), _setBreakpointByUrlResponses = /*#__PURE__*/ new WeakMap(), _removeBreakpointCallbacks = /*#__PURE__*/ new WeakMap(), _nextObjectIndex = /*#__PURE__*/ new WeakMap(), _nextScriptIndex = /*#__PURE__*/ new WeakMap(), _createProtocolLocation = /*#__PURE__*/ new WeakSet(), _createProtocolScope = /*#__PURE__*/ new WeakSet(), _getBreakpointKey = /*#__PURE__*/ new WeakSet(), _getScriptSourceHandler = /*#__PURE__*/ new WeakSet(), _setBreakpointByUrlHandler = /*#__PURE__*/ new WeakSet(), _removeBreakpointHandler = /*#__PURE__*/ new WeakSet(), _getPropertiesHandler = /*#__PURE__*/ new WeakSet(), _loadSourceMap = /*#__PURE__*/ new WeakSet();
var MockProtocolBackend = /*#__PURE__*/ function() {
    "use strict";
    function MockProtocolBackend() {
        _class_call_check(this, MockProtocolBackend);
        _class_private_method_init(this, _createProtocolLocation);
        _class_private_method_init(this, _createProtocolScope);
        _class_private_method_init(this, _getBreakpointKey);
        _class_private_method_init(this, _getScriptSourceHandler);
        _class_private_method_init(this, _setBreakpointByUrlHandler);
        _class_private_method_init(this, _removeBreakpointHandler);
        _class_private_method_init(this, _getPropertiesHandler);
        _class_private_method_init(this, _loadSourceMap);
        _class_private_field_init(this, _scriptSources, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _sourceMapContents, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _objectProperties, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _setBreakpointByUrlResponses, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _removeBreakpointCallbacks, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _nextObjectIndex, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _nextScriptIndex, {
            writable: true,
            value: 0
        });
        // One time setup of the response handlers.
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.getScriptSource', _class_private_method_get(this, _getScriptSourceHandler, getScriptSourceHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Runtime.getProperties', _class_private_method_get(this, _getPropertiesHandler, getPropertiesHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.setBreakpointByUrl', _class_private_method_get(this, _setBreakpointByUrlHandler, setBreakpointByUrlHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Storage.getStorageKeyForFrame', function() {
            return {
                storageKey: 'test-key'
            };
        });
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.removeBreakpoint', _class_private_method_get(this, _removeBreakpointHandler, removeBreakpointHandler).bind(this));
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.resume', function() {
            return {};
        });
        (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.setMockConnectionResponseHandler)('Debugger.enable', function() {
            return {
                debuggerId: 'DEBUGGER_ID'
            };
        });
        var _this = this;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.PageResourceLoader.PageResourceLoader.instance({
            forceNew: true,
            loadOverride: function() {
                var _ref = _async_to_generator(function(url) {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _class_private_method_get(_this, _loadSourceMap, loadSourceMap).call(_this, url)
                        ];
                    });
                });
                return function(url) {
                    return _ref.apply(this, arguments);
                };
            }(),
            maxConcurrentLoads: 1
        });
    }
    _create_class(MockProtocolBackend, [
        {
            key: "dispatchDebuggerPause",
            value: function dispatchDebuggerPause(script, reason) {
                var functionName = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '', scopeChain = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : [];
                var target = script.debuggerModel.target();
                if (reason === "instrumentation" /* Protocol.Debugger.PausedEventReason.Instrumentation */ ) {
                    // Instrumentation pauses don't pass call frames, they only pass the script id in the 'data' field.
                    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.paused', {
                        callFrames: [],
                        reason: reason,
                        data: {
                            scriptId: script.scriptId
                        }
                    });
                } else {
                    var callFrames = [
                        {
                            callFrameId: '1',
                            functionName: functionName,
                            url: script.sourceURL,
                            scopeChain: scopeChain,
                            location: {
                                scriptId: script.scriptId,
                                lineNumber: 0
                            },
                            this: {
                                type: 'object'
                            }
                        }
                    ];
                    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.paused', {
                        callFrames: callFrames,
                        reason: reason
                    });
                }
            }
        },
        {
            key: "dispatchDebuggerPauseWithNoCallFrames",
            value: function dispatchDebuggerPauseWithNoCallFrames(target, reason) {
                (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.paused', {
                    callFrames: [],
                    reason: reason
                });
            }
        },
        {
            key: "addScript",
            value: function addScript(target, scriptDescription, sourceMap) {
                var _this = this;
                return _async_to_generator(function() {
                    var _scriptDescription_content_match, scriptId, _scriptDescription_startLine, startLine, _scriptDescription_startColumn, startColumn, _scriptDescription_content_match_length, endLine, endColumn, _scriptDescription_executionContextId, debuggerModel, scriptObject, content, loadedSourceMap;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                scriptId = 'SCRIPTID.' + _class_private_field_update(_this, _nextScriptIndex).value++;
                                _class_private_field_get(_this, _scriptSources).set(scriptId, scriptDescription.content);
                                startLine = (_scriptDescription_startLine = scriptDescription.startLine) !== null && _scriptDescription_startLine !== void 0 ? _scriptDescription_startLine : 0;
                                startColumn = (_scriptDescription_startColumn = scriptDescription.startColumn) !== null && _scriptDescription_startColumn !== void 0 ? _scriptDescription_startColumn : 0;
                                endLine = startLine + ((_scriptDescription_content_match_length = (_scriptDescription_content_match = scriptDescription.content.match(/^/gm)) === null || _scriptDescription_content_match === void 0 ? void 0 : _scriptDescription_content_match.length) !== null && _scriptDescription_content_match_length !== void 0 ? _scriptDescription_content_match_length : 1) - 1;
                                endColumn = scriptDescription.content.length - scriptDescription.content.lastIndexOf('\n') - 1;
                                if (startLine === endLine) {
                                    endColumn += startColumn;
                                }
                                (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.dispatchEvent)(target, 'Debugger.scriptParsed', _object_spread_props(_object_spread({
                                    scriptId: scriptId,
                                    url: scriptDescription.url,
                                    startLine: startLine,
                                    startColumn: startColumn,
                                    endLine: endLine,
                                    endColumn: endColumn,
                                    executionContextId: (_scriptDescription_executionContextId = scriptDescription === null || scriptDescription === void 0 ? void 0 : scriptDescription.executionContextId) !== null && _scriptDescription_executionContextId !== void 0 ? _scriptDescription_executionContextId : 1,
                                    executionContextAuxData: {
                                        isDefault: !scriptDescription.isContentScript
                                    },
                                    hash: '',
                                    hasSourceURL: Boolean(scriptDescription.hasSourceURL)
                                }, sourceMap ? {
                                    sourceMapURL: sourceMap.url
                                } : null), {
                                    embedderName: scriptDescription.embedderName
                                }));
                                debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                                scriptObject = debuggerModel.scriptForId(scriptId);
                                (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(scriptObject);
                                if (!sourceMap) return [
                                    3,
                                    2
                                ];
                                content = sourceMap.content;
                                if (typeof content !== 'string') {
                                    content = JSON.stringify(content);
                                }
                                _class_private_field_get(_this, _sourceMapContents).set(sourceMap.url, content);
                                return [
                                    4,
                                    debuggerModel.sourceMapManager().sourceMapForClientPromise(scriptObject)
                                ];
                            case 1:
                                loadedSourceMap = _state.sent();
                                assert.strictEqual(loadedSourceMap === null || loadedSourceMap === void 0 ? void 0 : loadedSourceMap.url(), sourceMap.url);
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    scriptObject
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "createSimpleRemoteObject",
            value: function createSimpleRemoteObject(properties) {
                var objectId = 'OBJECTID.' + _class_private_field_update(this, _nextObjectIndex).value++;
                _class_private_field_get(this, _objectProperties).set(objectId, properties);
                return {
                    type: "object" /* Protocol.Runtime.RemoteObjectType.Object */ ,
                    objectId: objectId
                };
            }
        },
        {
            key: "createCallFrame",
            value: // In the |scopeDescriptor|, '{' and '}' characters mark the positions of function
            // offset start and end, '<' and '>' mark the positions of the nested scope
            // start and end (if '<', '>' are missing then the nested scope is the function scope).
            // Other characters in |scopeDescriptor| are not significant (so that tests can use the other characters in
            // the descriptors to describe other assertions).
            function createCallFrame(target, script, scopeDescriptor, sourceMap) {
                var scopeObjects = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [];
                var _this = this;
                return _async_to_generator(function() {
                    var debuggerModel, scriptObject, parsedScopes, scopeChain, innerScope, i, payload;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
                                return [
                                    4,
                                    _this.addScript(target, script, sourceMap)
                                ];
                            case 1:
                                scriptObject = _state.sent();
                                parsedScopes = parseScopeChain(scopeDescriptor);
                                scopeChain = parsedScopes.map(function(s) {
                                    return _class_private_method_get(_this, _createProtocolScope, createProtocolScope).call(_this, s.type, {
                                        type: "object" /* Protocol.Runtime.RemoteObjectType.Object */ 
                                    }, scriptObject.scriptId, s.startLine, s.startColumn, s.endLine, s.endColumn);
                                });
                                innerScope = scopeChain[0];
                                console.assert(scopeObjects.length < scopeChain.length);
                                for(i = 0; i < scopeObjects.length; ++i){
                                    scopeChain[i].object = scopeObjects[i];
                                }
                                payload = {
                                    callFrameId: '0',
                                    functionName: 'test',
                                    functionLocation: undefined,
                                    location: innerScope.startLocation,
                                    url: scriptObject.sourceURL,
                                    scopeChain: scopeChain,
                                    this: {
                                        type: 'object'
                                    },
                                    returnValue: undefined,
                                    canBeRestarted: false
                                };
                                return [
                                    2,
                                    new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame(debuggerModel, scriptObject, payload, 0)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "responderToBreakpointByUrlRequest",
            value: function responderToBreakpointByUrlRequest(url, lineNumber) {
                var requestCallback = function() {};
                var responseCallback;
                var responsePromise = new Promise(function(resolve) {
                    responseCallback = resolve;
                });
                var requestPromise = new Promise(function(resolve) {
                    requestCallback = resolve;
                });
                var key = _class_private_method_get(this, _getBreakpointKey, getBreakpointKey).call(this, url, lineNumber);
                _class_private_field_get(this, _setBreakpointByUrlResponses).set(key, {
                    response: responsePromise,
                    callback: requestCallback,
                    isOneShot: true
                });
                return function() {
                    var _ref = _async_to_generator(function(response) {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    responseCallback(response);
                                    return [
                                        4,
                                        requestPromise
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                    return function(response) {
                        return _ref.apply(this, arguments);
                    };
                }();
            }
        },
        {
            key: "setBreakpointByUrlToFail",
            value: function setBreakpointByUrlToFail(url, lineNumber) {
                var key = _class_private_method_get(this, _getBreakpointKey, getBreakpointKey).call(this, url, lineNumber);
                var responsePromise = Promise.resolve({
                    getError: function getError() {
                        return 'Breakpoint error';
                    }
                });
                _class_private_field_get(this, _setBreakpointByUrlResponses).set(key, {
                    response: responsePromise,
                    callback: function() {},
                    isOneShot: false
                });
            }
        },
        {
            key: "breakpointRemovedPromise",
            value: function breakpointRemovedPromise(breakpointId) {
                var _this = this;
                return new Promise(function(resolve) {
                    return _class_private_field_get(_this, _removeBreakpointCallbacks).set(breakpointId, resolve);
                });
            }
        }
    ]);
    return MockProtocolBackend;
}();
function createProtocolLocation(scriptId, lineNumber, columnNumber) {
    return {
        scriptId: scriptId,
        lineNumber: lineNumber,
        columnNumber: columnNumber
    };
}
function createProtocolScope(type, object, scriptId, startLine, startColumn, endLine, endColumn) {
    return {
        type: type,
        object: object,
        startLocation: _class_private_method_get(this, _createProtocolLocation, createProtocolLocation).call(this, scriptId, startLine, startColumn),
        endLocation: _class_private_method_get(this, _createProtocolLocation, createProtocolLocation).call(this, scriptId, endLine, endColumn)
    };
}
function getBreakpointKey(url, lineNumber) {
    return url + '@:' + lineNumber;
}
function getScriptSourceHandler(request) {
    var scriptSource = _class_private_field_get(this, _scriptSources).get(request.scriptId);
    if (scriptSource) {
        return {
            scriptSource: scriptSource,
            getError: function getError() {
                return undefined;
            }
        };
    }
    return {
        scriptSource: 'Unknown script',
        getError: function getError() {
            return 'Unknown script';
        }
    };
}
function setBreakpointByUrlHandler(request) {
    var _request_url;
    var key = _class_private_method_get(this, _getBreakpointKey, getBreakpointKey).call(this, (_request_url = request.url) !== null && _request_url !== void 0 ? _request_url : '', request.lineNumber);
    var responseCallback = _class_private_field_get(this, _setBreakpointByUrlResponses).get(key);
    if (responseCallback) {
        if (responseCallback.isOneShot) {
            _class_private_field_get(this, _setBreakpointByUrlResponses).delete(key);
        }
        // Announce to the client that the breakpoint request arrived.
        responseCallback.callback();
        // Return the response promise.
        return responseCallback.response;
    }
    console.error('Unexpected setBreakpointByUrl request', request);
    var response = {
        breakpointId: 'INVALID',
        locations: [],
        getError: function getError() {
            return 'Unknown breakpoint';
        }
    };
    return Promise.resolve(response);
}
function removeBreakpointHandler(request) {
    var callback = _class_private_field_get(this, _removeBreakpointCallbacks).get(request.breakpointId);
    if (callback) {
        callback();
    }
    return {};
}
function getPropertiesHandler(request) {
    var objectProperties = _class_private_field_get(this, _objectProperties).get(request.objectId);
    if (!objectProperties) {
        return {
            result: [],
            getError: function getError() {
                return 'Unknown object';
            }
        };
    }
    var result = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = objectProperties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var property = _step.value;
            result.push({
                name: property.name,
                value: {
                    type: "number" /* Protocol.Runtime.RemoteObjectType.Number */ ,
                    value: property.value,
                    description: "".concat(property.value)
                },
                writable: true,
                configurable: true,
                enumerable: true,
                isOwn: true
            });
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return {
        result: result,
        getError: function getError() {
            return undefined;
        }
    };
}
function loadSourceMap(url) {
    var content = _class_private_field_get(this, _sourceMapContents).get(url);
    if (!content) {
        return {
            success: false,
            content: '',
            errorDescription: {
                message: 'source map not found',
                statusCode: 123,
                netError: 0,
                netErrorName: '',
                urlValid: true
            }
        };
    }
    return {
        success: true,
        content: content,
        errorDescription: {
            message: '',
            statusCode: 0,
            netError: 0,
            netErrorName: '',
            urlValid: true
        }
    };
}
function scopePositionFromOffsets(descriptor, type, startOffset, endOffset) {
    return {
        type: type,
        startLine: descriptor.substring(0, startOffset).replace(/[^\n]/g, '').length,
        endLine: descriptor.substring(0, endOffset).replace(/[^\n]/g, '').length,
        startColumn: startOffset - descriptor.lastIndexOf('\n', startOffset - 1) - 1,
        endColumn: endOffset - descriptor.lastIndexOf('\n', endOffset - 1) - 1
    };
}
function parseScopeChain(scopeDescriptor) {
    // Identify function scope.
    var functionStart = scopeDescriptor.indexOf('{');
    if (functionStart < 0) {
        throw new Error('Test descriptor must contain "{"');
    }
    var functionEnd = scopeDescriptor.indexOf('}', functionStart);
    if (functionEnd < 0) {
        throw new Error('Test descriptor must contain "}"');
    }
    var scopeChain = [
        scopePositionFromOffsets(scopeDescriptor, "local" /* Protocol.Debugger.ScopeType.Local */ , functionStart, functionEnd + 1)
    ];
    // Find the block scope.
    var blockScopeStart = scopeDescriptor.indexOf('<');
    if (blockScopeStart >= 0) {
        var blockScopeEnd = scopeDescriptor.indexOf('>');
        if (blockScopeEnd < 0) {
            throw new Error('Test descriptor must contain matching "." for "<"');
        }
        scopeChain.unshift(scopePositionFromOffsets(scopeDescriptor, "block" /* Protocol.Debugger.ScopeType.Block */ , blockScopeStart, blockScopeEnd + 1));
    }
    return scopeChain;
} //# sourceMappingURL=MockScopeChain.js.map


}),

}]);