"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_RecordingStorage_js"], {
"./panels/recorder/models/RecordingStorage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecordingStorage: function() { return RecordingStorage; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        return function(v) {
            return step([
                n,
                v
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

var instance = null;
var UUIDGenerator = /*#__PURE__*/ function() {
    "use strict";
    function UUIDGenerator() {
        _class_call_check(this, UUIDGenerator);
    }
    _create_class(UUIDGenerator, [
        {
            key: "next",
            value: function next() {
                // @ts-ignore
                return crypto.randomUUID();
            }
        }
    ]);
    return UUIDGenerator;
}();
var _recordingsSetting = /*#__PURE__*/ new WeakMap(), _mutex = /*#__PURE__*/ new WeakMap(), _idGenerator = /*#__PURE__*/ new WeakMap();
var RecordingStorage = /*#__PURE__*/ function() {
    "use strict";
    function RecordingStorage() {
        _class_call_check(this, RecordingStorage);
        _class_private_field_init(this, _recordingsSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _mutex, {
            writable: true,
            value: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex()
        });
        _class_private_field_init(this, _idGenerator, {
            writable: true,
            value: new UUIDGenerator()
        });
        _class_private_field_set(this, _recordingsSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('recorder-recordings-ng', []));
    }
    _create_class(RecordingStorage, [
        {
            key: "clearForTest",
            value: function clearForTest() {
                _class_private_field_get(this, _recordingsSetting).set([]);
                _class_private_field_set(this, _idGenerator, new UUIDGenerator());
            }
        },
        {
            key: "setIdGeneratorForTest",
            value: function setIdGeneratorForTest(idGenerator) {
                _class_private_field_set(this, _idGenerator, idGenerator);
            }
        },
        {
            key: "saveRecording",
            value: function saveRecording(flow) {
                var _this = this;
                return _async_to_generator(function() {
                    var release, recordings, storageName, recording;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _mutex).acquire()
                                ];
                            case 1:
                                release = _state.sent();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    ,
                                    4,
                                    5
                                ]);
                                return [
                                    4,
                                    _class_private_field_get(_this, _recordingsSetting).forceGet()
                                ];
                            case 3:
                                recordings = _state.sent();
                                storageName = _class_private_field_get(_this, _idGenerator).next();
                                recording = {
                                    storageName: storageName,
                                    flow: flow
                                };
                                recordings.push(recording);
                                _class_private_field_get(_this, _recordingsSetting).set(recordings);
                                return [
                                    2,
                                    recording
                                ];
                            case 4:
                                release();
                                return [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateRecording",
            value: function updateRecording(storageName, flow) {
                var _this = this;
                return _async_to_generator(function() {
                    var release, recordings, recording;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _mutex).acquire()
                                ];
                            case 1:
                                release = _state.sent();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    ,
                                    4,
                                    5
                                ]);
                                return [
                                    4,
                                    _class_private_field_get(_this, _recordingsSetting).forceGet()
                                ];
                            case 3:
                                recordings = _state.sent();
                                recording = recordings.find(function(recording) {
                                    return recording.storageName === storageName;
                                });
                                if (!recording) {
                                    throw new Error('No recording is found during updateRecording');
                                }
                                recording.flow = flow;
                                _class_private_field_get(_this, _recordingsSetting).set(recordings);
                                return [
                                    2,
                                    recording
                                ];
                            case 4:
                                release();
                                return [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "deleteRecording",
            value: function deleteRecording(storageName) {
                var _this = this;
                return _async_to_generator(function() {
                    var release, recordings;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_field_get(_this, _mutex).acquire()
                                ];
                            case 1:
                                release = _state.sent();
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    ,
                                    4,
                                    5
                                ]);
                                return [
                                    4,
                                    _class_private_field_get(_this, _recordingsSetting).forceGet()
                                ];
                            case 3:
                                recordings = _state.sent();
                                _class_private_field_get(_this, _recordingsSetting).set(recordings.filter(function(recording) {
                                    return recording.storageName !== storageName;
                                }));
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                release();
                                return [
                                    7
                                ];
                            case 5:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getRecording",
            value: function getRecording(storageName) {
                var recordings = _class_private_field_get(this, _recordingsSetting).get();
                return recordings.find(function(recording) {
                    return recording.storageName === storageName;
                });
            }
        },
        {
            key: "getRecordings",
            value: function getRecordings() {
                return _class_private_field_get(this, _recordingsSetting).get();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance1() {
                if (!instance) {
                    instance = new RecordingStorage();
                }
                return instance;
            }
        }
    ]);
    return RecordingStorage;
} //# sourceMappingURL=RecordingStorage.js.map
();


}),

}]);