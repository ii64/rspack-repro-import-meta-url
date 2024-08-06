"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_models_recording-storage_test_js"], {
"./panels/recorder/models/recording-storage.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models.js */ "./panels/recorder/models/models.js");
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


(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('RecordingStorage', function() {
    beforeEach(function() {
        _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance().clearForTest();
    });
    after(function() {
        _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance().clearForTest();
    });
    var _id = /*#__PURE__*/ new WeakMap();
    var MockIdGenerator = /*#__PURE__*/ function() {
        "use strict";
        function MockIdGenerator() {
            _class_call_check(this, MockIdGenerator);
            _class_private_field_init(this, _id, {
                writable: true,
                value: 1
            });
        }
        _create_class(MockIdGenerator, [
            {
                key: "next",
                value: function next() {
                    var result = "recording_".concat(_class_private_field_get(this, _id));
                    _class_private_field_update(this, _id).value++;
                    return result;
                }
            }
        ]);
        return MockIdGenerator;
    }();
    it('should create and retrieve recordings', /*#__PURE__*/ _async_to_generator(function() {
        var storage, flow1, flow2, flow3, _, _1, _2, _3, _4, _5, _6, _7;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    storage = _models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingStorage.RecordingStorage.instance();
                    storage.setIdGeneratorForTest(new MockIdGenerator());
                    flow1 = {
                        title: 'Test1',
                        steps: []
                    };
                    flow2 = {
                        title: 'Test2',
                        steps: []
                    };
                    flow3 = {
                        title: 'Test3',
                        steps: []
                    };
                    _ = assert.deepEqual;
                    return [
                        4,
                        storage.saveRecording(flow1)
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent(),
                        {
                            storageName: 'recording_1',
                            flow: flow1
                        }
                    ]);
                    _1 = assert.deepEqual;
                    return [
                        4,
                        storage.saveRecording(flow2)
                    ];
                case 2:
                    _1.apply(assert, [
                        _state.sent(),
                        {
                            storageName: 'recording_2',
                            flow: flow2
                        }
                    ]);
                    _2 = assert.deepEqual;
                    return [
                        4,
                        storage.getRecordings()
                    ];
                case 3:
                    _2.apply(assert, [
                        _state.sent(),
                        [
                            {
                                storageName: 'recording_1',
                                flow: flow1
                            },
                            {
                                storageName: 'recording_2',
                                flow: flow2
                            }
                        ]
                    ]);
                    _3 = assert.deepEqual;
                    return [
                        4,
                        storage.getRecording('recording_2')
                    ];
                case 4:
                    _3.apply(assert, [
                        _state.sent(),
                        {
                            storageName: 'recording_2',
                            flow: flow2
                        }
                    ]);
                    _4 = assert.deepEqual;
                    return [
                        4,
                        storage.getRecording('recording_3')
                    ];
                case 5:
                    _4.apply(assert, [
                        _state.sent(),
                        undefined
                    ]);
                    _5 = assert.deepEqual;
                    return [
                        4,
                        storage.updateRecording('recording_2', flow3)
                    ];
                case 6:
                    _5.apply(assert, [
                        _state.sent(),
                        {
                            storageName: 'recording_2',
                            flow: flow3
                        }
                    ]);
                    _6 = assert.deepEqual;
                    return [
                        4,
                        storage.getRecording('recording_2')
                    ];
                case 7:
                    _6.apply(assert, [
                        _state.sent(),
                        {
                            storageName: 'recording_2',
                            flow: flow3
                        }
                    ]);
                    return [
                        4,
                        storage.deleteRecording('recording_2')
                    ];
                case 8:
                    _state.sent();
                    _7 = assert.deepEqual;
                    return [
                        4,
                        storage.getRecordings()
                    ];
                case 9:
                    _7.apply(assert, [
                        _state.sent(),
                        [
                            {
                                storageName: 'recording_1',
                                flow: flow1
                            }
                        ]
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=recording-storage.test.js.map


}),

}]);