"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_heap_snapshot_worker_HeapSnapshotLoader_js"], {
"./entrypoints/heap_snapshot_worker/HeapSnapshotLoader.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapSnapshotLoader: function() { return HeapSnapshotLoader; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapSnapshot.js */ "./entrypoints/heap_snapshot_worker/HeapSnapshot.js");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
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
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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



var _progress = /*#__PURE__*/ new WeakMap(), _buffer = /*#__PURE__*/ new WeakMap(), _dataCallback = /*#__PURE__*/ new WeakMap(), _done = /*#__PURE__*/ new WeakMap(), // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
_snapshot = /*#__PURE__*/ new WeakMap(), _array = /*#__PURE__*/ new WeakMap(), _arrayIndex = /*#__PURE__*/ new WeakMap(), _json = /*#__PURE__*/ new WeakMap(), _reset = /*#__PURE__*/ new WeakSet(), _parseUintArray = /*#__PURE__*/ new WeakSet(), _parseStringsArray = /*#__PURE__*/ new WeakSet(), _fetchChunk = /*#__PURE__*/ new WeakSet(), _findToken = /*#__PURE__*/ new WeakSet(), _parseArray = /*#__PURE__*/ new WeakSet(), _parseInput = /*#__PURE__*/ new WeakSet();
var HeapSnapshotLoader = /*#__PURE__*/ function() {
    "use strict";
    function HeapSnapshotLoader(dispatcher) {
        _class_call_check(this, HeapSnapshotLoader);
        _class_private_method_init(this, _reset);
        _class_private_method_init(this, _parseUintArray);
        _class_private_method_init(this, _parseStringsArray);
        _class_private_method_init(this, _fetchChunk);
        _class_private_method_init(this, _findToken);
        _class_private_method_init(this, _parseArray);
        _class_private_method_init(this, _parseInput);
        _class_private_field_init(this, _progress, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _buffer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _dataCallback, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _done, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _snapshot, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _array, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _arrayIndex, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _json, {
            writable: true,
            value: ''
        });
        _class_private_method_get(this, _reset, reset).call(this);
        _class_private_field_set(this, _progress, new _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__.HeapSnapshotProgress(dispatcher));
        _class_private_field_set(this, _buffer, []);
        _class_private_field_set(this, _dataCallback, null);
        _class_private_field_set(this, _done, false);
        void _class_private_method_get(this, _parseInput, parseInput).call(this);
    }
    _create_class(HeapSnapshotLoader, [
        {
            key: "dispose",
            value: function dispose() {
                _class_private_method_get(this, _reset, reset).call(this);
            }
        },
        {
            key: "close",
            value: function close() {
                _class_private_field_set(this, _done, true);
                if (_class_private_field_get(this, _dataCallback)) {
                    _class_private_field_get(this, _dataCallback).call(this, '');
                }
            }
        },
        {
            key: "buildSnapshot",
            value: function buildSnapshot() {
                _class_private_field_set(this, _snapshot, _class_private_field_get(this, _snapshot) || {});
                _class_private_field_get(this, _progress).updateStatus('Processing snapshot…');
                var result = new _HeapSnapshot_js__WEBPACK_IMPORTED_MODULE_2__.JSHeapSnapshot(_class_private_field_get(this, _snapshot), _class_private_field_get(this, _progress));
                _class_private_method_get(this, _reset, reset).call(this);
                return result;
            }
        },
        {
            key: "write",
            value: function write(chunk) {
                _class_private_field_get(this, _buffer).push(chunk);
                if (!_class_private_field_get(this, _dataCallback)) {
                    return;
                }
                _class_private_field_get(this, _dataCallback).call(this, _class_private_field_get(this, _buffer).shift());
                _class_private_field_set(this, _dataCallback, null);
            }
        }
    ]);
    return HeapSnapshotLoader;
} //# sourceMappingURL=HeapSnapshotLoader.js.map
();
function reset() {
    _class_private_field_set(this, _json, '');
    _class_private_field_set(this, _snapshot, undefined);
}
function parseUintArray() {
    var index = 0;
    var char0 = '0'.charCodeAt(0);
    var char9 = '9'.charCodeAt(0);
    var closingBracket = ']'.charCodeAt(0);
    var length = _class_private_field_get(this, _json).length;
    while(true){
        while(index < length){
            var code = _class_private_field_get(this, _json).charCodeAt(index);
            if (char0 <= code && code <= char9) {
                break;
            } else if (code === closingBracket) {
                _class_private_field_set(this, _json, _class_private_field_get(this, _json).slice(index + 1));
                return false;
            }
            ++index;
        }
        if (index === length) {
            _class_private_field_set(this, _json, '');
            return true;
        }
        var nextNumber = 0;
        var startIndex = index;
        while(index < length){
            var code1 = _class_private_field_get(this, _json).charCodeAt(index);
            if (char0 > code1 || code1 > char9) {
                break;
            }
            nextNumber *= 10;
            nextNumber += code1 - char0;
            ++index;
        }
        if (index === length) {
            _class_private_field_set(this, _json, _class_private_field_get(this, _json).slice(startIndex));
            return true;
        }
        if (!_class_private_field_get(this, _array)) {
            throw new Error('Array not instantiated');
        }
        _class_private_field_get(this, _array).setValue(_class_private_field_update(this, _arrayIndex).value++, nextNumber);
    }
}
function parseStringsArray() {
    _class_private_field_get(this, _progress).updateStatus('Parsing strings…');
    var closingBracketIndex = _class_private_field_get(this, _json).lastIndexOf(']');
    if (closingBracketIndex === -1) {
        throw new Error('Incomplete JSON');
    }
    _class_private_field_set(this, _json, _class_private_field_get(this, _json).slice(0, closingBracketIndex + 1));
    if (!_class_private_field_get(this, _snapshot)) {
        throw new Error('No snapshot in parseStringsArray');
    }
    _class_private_field_get(this, _snapshot).strings = JSON.parse(_class_private_field_get(this, _json));
}
function fetchChunk() {
    // This method shoudln't be entered more than once since parsing happens
    // sequentially. This means it's fine to stash away a single #dataCallback
    // instead of an array of them.
    if (_class_private_field_get(this, _buffer).length > 0) {
        return Promise.resolve(_class_private_field_get(this, _buffer).shift());
    }
    var _Platform_PromiseUtilities_promiseWithResolvers = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers(), promise = _Platform_PromiseUtilities_promiseWithResolvers.promise, resolve = _Platform_PromiseUtilities_promiseWithResolvers.resolve;
    _class_private_field_set(this, _dataCallback, resolve);
    return promise;
}
function findToken(token, startIndex) {
    return _findToken1.apply(this, arguments);
}
function _findToken1() {
    _findToken1 = _async_to_generator(function(token, startIndex) {
        var pos, _tmp, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (!true) {}
                    pos = _class_private_field_get(this, _json).indexOf(token, startIndex || 0);
                    if (pos !== -1) {
                        return [
                            2,
                            pos
                        ];
                    }
                    startIndex = _class_private_field_get(this, _json).length - token.length + 1;
                    _tmp = [
                        this,
                        _json
                    ];
                    _ = _class_private_field_get(this, _json);
                    return [
                        4,
                        _class_private_method_get(this, _fetchChunk, fetchChunk).call(this)
                    ];
                case 1:
                    _class_private_field_set.apply(void 0, _tmp.concat([
                        _ + _state.sent()
                    ]));
                    return [
                        3,
                        0
                    ];
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _findToken1.apply(this, arguments);
}
function parseArray(name, title, length) {
    return _parseArray1.apply(this, arguments);
}
function _parseArray1() {
    _parseArray1 = _async_to_generator(function(name, title, length) {
        var nameIndex, bracketIndex, _tmp, _, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_method_get(this, _findToken, findToken).call(this, name)
                    ];
                case 1:
                    nameIndex = _state.sent();
                    return [
                        4,
                        _class_private_method_get(this, _findToken, findToken).call(this, '[', nameIndex)
                    ];
                case 2:
                    bracketIndex = _state.sent();
                    _class_private_field_set(this, _json, _class_private_field_get(this, _json).slice(bracketIndex + 1));
                    _class_private_field_set(this, _array, length === undefined ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createExpandableBigUint32Array() : _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.TypedArrayUtilities.createFixedBigUint32Array(length));
                    _class_private_field_set(this, _arrayIndex, 0);
                    _state.label = 3;
                case 3:
                    if (!_class_private_method_get(this, _parseUintArray, parseUintArray).call(this)) return [
                        3,
                        5
                    ];
                    if (length) {
                        _class_private_field_get(this, _progress).updateProgress(title, _class_private_field_get(this, _arrayIndex), _class_private_field_get(this, _array).length);
                    } else {
                        _class_private_field_get(this, _progress).updateStatus(title);
                    }
                    _tmp = [
                        this,
                        _json
                    ];
                    _ = _class_private_field_get(this, _json);
                    return [
                        4,
                        _class_private_method_get(this, _fetchChunk, fetchChunk).call(this)
                    ];
                case 4:
                    _class_private_field_set.apply(void 0, _tmp.concat([
                        _ + _state.sent()
                    ]));
                    return [
                        3,
                        3
                    ];
                case 5:
                    result = _class_private_field_get(this, _array);
                    _class_private_field_set(this, _array, null);
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return _parseArray1.apply(this, arguments);
}
function parseInput() {
    return _parseInput1.apply(this, arguments);
}
function _parseInput1() {
    _parseInput1 = _async_to_generator(function() {
        var _this, snapshotToken, snapshotTokenIndex, json, jsonTokenizerDone, jsonTokenizer, _, nodes, edges, traceFunctionInfos, thisTokenEndIndex, nextTokenIndex, openBracketIndex, closeBracketIndex, samples, locations, stringsTokenIndex, bracketIndex, _tmp, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _this = this;
                    snapshotToken = '"snapshot"';
                    return [
                        4,
                        _class_private_method_get(this, _findToken, findToken).call(this, snapshotToken)
                    ];
                case 1:
                    snapshotTokenIndex = _state.sent();
                    if (snapshotTokenIndex === -1) {
                        throw new Error('Snapshot token not found');
                    }
                    _class_private_field_get(this, _progress).updateStatus('Loading snapshot info…');
                    json = _class_private_field_get(this, _json).slice(snapshotTokenIndex + snapshotToken.length + 1);
                    jsonTokenizerDone = false;
                    jsonTokenizer = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.TextUtils.BalancedJSONTokenizer(function(metaJSON) {
                        _class_private_field_set(_this, _json, jsonTokenizer.remainder());
                        jsonTokenizerDone = true;
                        _class_private_field_set(_this, _snapshot, _class_private_field_get(_this, _snapshot) || {});
                        _class_private_field_get(_this, _snapshot).snapshot = JSON.parse(metaJSON);
                    });
                    jsonTokenizer.write(json);
                    _state.label = 2;
                case 2:
                    if (!!jsonTokenizerDone) return [
                        3,
                        4
                    ];
                    _ = jsonTokenizer.write;
                    return [
                        4,
                        _class_private_method_get(this, _fetchChunk, fetchChunk).call(this)
                    ];
                case 3:
                    _.apply(jsonTokenizer, [
                        _state.sent()
                    ]);
                    return [
                        3,
                        2
                    ];
                case 4:
                    _class_private_field_set(this, _snapshot, _class_private_field_get(this, _snapshot) || {});
                    return [
                        4,
                        _class_private_method_get(this, _parseArray, parseArray).call(this, '"nodes"', 'Loading nodes… {PH1}%', _class_private_field_get(this, _snapshot).snapshot.meta.node_fields.length * _class_private_field_get(this, _snapshot).snapshot.node_count)
                    ];
                case 5:
                    nodes = _state.sent();
                    _class_private_field_get(this, _snapshot).nodes = nodes;
                    return [
                        4,
                        _class_private_method_get(this, _parseArray, parseArray).call(this, '"edges"', 'Loading edges… {PH1}%', _class_private_field_get(this, _snapshot).snapshot.meta.edge_fields.length * _class_private_field_get(this, _snapshot).snapshot.edge_count)
                    ];
                case 6:
                    edges = _state.sent();
                    _class_private_field_get(this, _snapshot).edges = edges;
                    if (!_class_private_field_get(this, _snapshot).snapshot.trace_function_count) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _parseArray, parseArray).call(this, '"trace_function_infos"', 'Loading allocation traces… {PH1}%', _class_private_field_get(this, _snapshot).snapshot.meta.trace_function_info_fields.length * _class_private_field_get(this, _snapshot).snapshot.trace_function_count)
                    ];
                case 7:
                    traceFunctionInfos = _state.sent();
                    _class_private_field_get(this, _snapshot).trace_function_infos = traceFunctionInfos.asUint32ArrayOrFail();
                    return [
                        4,
                        _class_private_method_get(this, _findToken, findToken).call(this, ':')
                    ];
                case 8:
                    thisTokenEndIndex = _state.sent();
                    return [
                        4,
                        _class_private_method_get(this, _findToken, findToken).call(this, '"', thisTokenEndIndex)
                    ];
                case 9:
                    nextTokenIndex = _state.sent();
                    openBracketIndex = _class_private_field_get(this, _json).indexOf('[');
                    closeBracketIndex = _class_private_field_get(this, _json).lastIndexOf(']', nextTokenIndex);
                    _class_private_field_get(this, _snapshot).trace_tree = JSON.parse(_class_private_field_get(this, _json).substring(openBracketIndex, closeBracketIndex + 1));
                    _class_private_field_set(this, _json, _class_private_field_get(this, _json).slice(closeBracketIndex + 1));
                    _state.label = 10;
                case 10:
                    if (!_class_private_field_get(this, _snapshot).snapshot.meta.sample_fields) return [
                        3,
                        12
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _parseArray, parseArray).call(this, '"samples"', 'Loading samples…')
                    ];
                case 11:
                    samples = _state.sent();
                    _class_private_field_get(this, _snapshot).samples = samples.asArrayOrFail();
                    _state.label = 12;
                case 12:
                    if (!_class_private_field_get(this, _snapshot).snapshot.meta['location_fields']) return [
                        3,
                        14
                    ];
                    return [
                        4,
                        _class_private_method_get(this, _parseArray, parseArray).call(this, '"locations"', 'Loading locations…')
                    ];
                case 13:
                    locations = _state.sent();
                    _class_private_field_get(this, _snapshot).locations = locations.asArrayOrFail();
                    return [
                        3,
                        15
                    ];
                case 14:
                    _class_private_field_get(this, _snapshot).locations = [];
                    _state.label = 15;
                case 15:
                    _class_private_field_get(this, _progress).updateStatus('Loading strings…');
                    return [
                        4,
                        _class_private_method_get(this, _findToken, findToken).call(this, '"strings"')
                    ];
                case 16:
                    stringsTokenIndex = _state.sent();
                    return [
                        4,
                        _class_private_method_get(this, _findToken, findToken).call(this, '[', stringsTokenIndex)
                    ];
                case 17:
                    bracketIndex = _state.sent();
                    _class_private_field_set(this, _json, _class_private_field_get(this, _json).slice(bracketIndex));
                    _state.label = 18;
                case 18:
                    if (!!_class_private_field_get(this, _done)) return [
                        3,
                        20
                    ];
                    _tmp = [
                        this,
                        _json
                    ];
                    _1 = _class_private_field_get(this, _json);
                    return [
                        4,
                        _class_private_method_get(this, _fetchChunk, fetchChunk).call(this)
                    ];
                case 19:
                    _class_private_field_set.apply(void 0, _tmp.concat([
                        _1 + _state.sent()
                    ]));
                    return [
                        3,
                        18
                    ];
                case 20:
                    _class_private_method_get(this, _parseStringsArray, parseStringsArray).call(this);
                    return [
                        2
                    ];
            }
        });
    });
    return _parseInput1.apply(this, arguments);
}


}),

}]);