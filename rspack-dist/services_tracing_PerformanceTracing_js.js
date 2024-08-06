"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["services_tracing_PerformanceTracing_js"], {
"./services/tracing/PerformanceTracing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PerformanceTracing: function() { return PerformanceTracing; },
  RawTraceEvents: function() { return RawTraceEvents; }
});
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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

var _traceEvents = /*#__PURE__*/ new WeakMap(), _tracingManager = /*#__PURE__*/ new WeakMap(), _delegate = /*#__PURE__*/ new WeakMap();
var PerformanceTracing = /*#__PURE__*/ function() {
    "use strict";
    function PerformanceTracing(target, delegate) {
        _class_call_check(this, PerformanceTracing);
        _class_private_field_init(this, _traceEvents, {
            writable: true,
            value: []
        });
        _class_private_field_init(this, _tracingManager, {
            writable: true,
            value: null
        });
        _class_private_field_init(this, _delegate, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _tracingManager, target.model(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.TracingManager.TracingManager));
        _class_private_field_set(this, _delegate, delegate);
    }
    _create_class(PerformanceTracing, [
        {
            key: "start",
            value: function start() {
                var _this = this;
                return _async_to_generator(function() {
                    var categories, started;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _class_private_field_get(_this, _traceEvents).length = 0;
                                if (!_class_private_field_get(_this, _tracingManager)) {
                                    throw new Error('No tracing manager');
                                }
                                // This panel may be opened with trace data recorded in other tools.
                                // Keep in sync with the categories arrays in:
                                // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/panels/timeline/TimelineController.ts
                                // https://github.com/GoogleChrome/lighthouse/blob/master/lighthouse-core/gather/gatherers/trace.js
                                categories = [
                                    '-*',
                                    'blink.console',
                                    'blink.user_timing',
                                    'devtools.timeline',
                                    'disabled-by-default-devtools.screenshot',
                                    'disabled-by-default-devtools.timeline',
                                    'disabled-by-default-devtools.timeline.invalidationTracking',
                                    'disabled-by-default-devtools.timeline.frame',
                                    'disabled-by-default-devtools.timeline.stack',
                                    'disabled-by-default-v8.cpu_profiler',
                                    'disabled-by-default-v8.cpu_profiler.hires',
                                    'latencyInfo',
                                    'loading',
                                    'disabled-by-default-lighthouse',
                                    'v8.execute',
                                    'v8'
                                ].join(',');
                                return [
                                    4,
                                    _class_private_field_get(_this, _tracingManager).start(_this, categories, '')
                                ];
                            case 1:
                                started = _state.sent();
                                if (!started) {
                                    throw new Error('Unable to start tracing.');
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "stop",
            value: function stop() {
                var _this = this;
                return _async_to_generator(function() {
                    var _$_class_private_field_get;
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            (_$_class_private_field_get = _class_private_field_get(_this, _tracingManager)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.stop()
                        ];
                    });
                })();
            }
        },
        {
            // Start of implementation of SDK.TracingManager.TracingManagerClient
            key: "getTraceEvents",
            value: function getTraceEvents() {
                return _class_private_field_get(this, _traceEvents);
            }
        },
        {
            key: "traceEventsCollected",
            value: function traceEventsCollected(events) {
                var _$_class_private_field_get;
                (_$_class_private_field_get = _class_private_field_get(this, _traceEvents)).push.apply(_$_class_private_field_get, _to_consumable_array(events));
            }
        },
        {
            key: "tracingBufferUsage",
            value: function tracingBufferUsage(usage) {
                _class_private_field_get(this, _delegate).tracingBufferUsage(usage);
            }
        },
        {
            key: "eventsRetrievalProgress",
            value: function eventsRetrievalProgress(progress) {
                _class_private_field_get(this, _delegate).eventsRetrievalProgress(progress);
            }
        },
        {
            key: "tracingComplete",
            value: function tracingComplete() {
                _class_private_field_get(this, _delegate).tracingComplete(_class_private_field_get(this, _traceEvents));
            }
        }
    ]);
    return PerformanceTracing;
}();
// Used by an implementation of Common.Revealer to transfer data from the recorder to the performance panel.
var RawTraceEvents = /*#__PURE__*/ function() {
    "use strict";
    function RawTraceEvents(events) {
        _class_call_check(this, RawTraceEvents);
        _define_property(this, "events", void 0);
        this.events = events;
    }
    _create_class(RawTraceEvents, [
        {
            key: "getEvents",
            value: function getEvents() {
                return this.events;
            }
        }
    ]);
    return RawTraceEvents;
} //# sourceMappingURL=PerformanceTracing.js.map
();


}),

}]);