"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_coverage_CoverageModel_js"], {
"./panels/coverage/CoverageModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageInfo: function() { return CoverageInfo; },
  CoverageModel: function() { return CoverageModel; },
  Events: function() { return Events; },
  SourceURLCoverageInfo: function() { return SourceURLCoverageInfo; },
  URLCoverageInfo: function() { return URLCoverageInfo; },
  mergeSegments: function() { return mergeSegments; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
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





var Events;
(function(Events) {
    Events["CoverageUpdated"] = "CoverageUpdated";
    Events["CoverageReset"] = "CoverageReset";
    Events["SourceMapResolved"] = "SourceMapResolved";
})(Events || (Events = {}));
var COVERAGE_POLLING_PERIOD_MS = 200;
var RESOLVE_SOURCEMAP_TIMEOUT = 500;
var CoverageModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(CoverageModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(CoverageModel);
    function CoverageModel(target) {
        _class_call_check(this, CoverageModel);
        var _this;
        var _this_debuggerModel, _this_sourceMapManager;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "cpuProfilerModel", void 0);
        _define_property(_assert_this_initialized(_this), "cssModel", void 0);
        _define_property(_assert_this_initialized(_this), "debuggerModel", void 0);
        _define_property(_assert_this_initialized(_this), "coverageByURL", void 0);
        _define_property(_assert_this_initialized(_this), "coverageByContentProvider", void 0);
        _define_property(_assert_this_initialized(_this), "coverageUpdateTimes", void 0);
        _define_property(_assert_this_initialized(_this), "suspensionState", void 0);
        _define_property(_assert_this_initialized(_this), "pollTimer", void 0);
        _define_property(_assert_this_initialized(_this), "currentPollPromise", void 0);
        _define_property(_assert_this_initialized(_this), "shouldResumePollingOnResume", void 0);
        _define_property(_assert_this_initialized(_this), "jsBacklog", void 0);
        _define_property(_assert_this_initialized(_this), "cssBacklog", void 0);
        _define_property(_assert_this_initialized(_this), "performanceTraceRecording", void 0);
        _define_property(_assert_this_initialized(_this), "sourceMapManager", void 0);
        _define_property(_assert_this_initialized(_this), "willResolveSourceMaps", void 0);
        _define_property(_assert_this_initialized(_this), "processSourceMapBacklog", void 0);
        _this.cpuProfilerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CPUProfilerModel.CPUProfilerModel);
        _this.cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.CSSModel);
        _this.debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        _this.sourceMapManager = ((_this_debuggerModel = _this.debuggerModel) === null || _this_debuggerModel === void 0 ? void 0 : _this_debuggerModel.sourceMapManager()) || null;
        (_this_sourceMapManager = _this.sourceMapManager) === null || _this_sourceMapManager === void 0 ? void 0 : _this_sourceMapManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SourceMapManager.Events.SourceMapAttached, _this.sourceMapAttached, _assert_this_initialized(_this));
        _this.coverageByURL = new Map();
        _this.coverageByContentProvider = new Map();
        // We keep track of the update times, because the other data-structures don't change if an
        // update doesn't change the coverage. Some visualizations want to convey to the user that
        // an update was received at a certain time, but did not result in a coverage change.
        _this.coverageUpdateTimes = new Set();
        _this.suspensionState = "Active" /* SuspensionState.Active */ ;
        _this.pollTimer = null;
        _this.currentPollPromise = null;
        _this.shouldResumePollingOnResume = false;
        _this.jsBacklog = [];
        _this.cssBacklog = [];
        _this.performanceTraceRecording = false;
        _this.willResolveSourceMaps = false;
        _this.processSourceMapBacklog = [];
        return _this;
    }
    _create_class(CoverageModel, [
        {
            key: "start",
            value: function start(jsCoveragePerBlock) {
                var _this = this;
                return _async_to_generator(function() {
                    var promises;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.suspensionState !== "Active" /* SuspensionState.Active */ ) {
                                    throw Error('Cannot start CoverageModel while it is not active.');
                                }
                                promises = [];
                                if (_this.cssModel) {
                                    // Note there's no JS coverage since JS won't ever return
                                    // coverage twice, even after it's restarted.
                                    _this.clearCSS();
                                    _this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.Events.StyleSheetAdded, _this.handleStyleSheetAdded, _this);
                                    promises.push(_this.cssModel.startCoverage());
                                }
                                if (_this.cpuProfilerModel) {
                                    promises.push(_this.cpuProfilerModel.startPreciseCoverage(jsCoveragePerBlock, _this.preciseCoverageDeltaUpdate.bind(_this)));
                                }
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    Boolean(_this.cssModel || _this.cpuProfilerModel)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sourceMapAttached",
            value: function sourceMapAttached(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var script, sourceMap;
                    return _ts_generator(this, function(_state) {
                        script = event.data.client;
                        sourceMap = event.data.sourceMap;
                        _this.processSourceMapBacklog.push({
                            script: script,
                            sourceMap: sourceMap
                        });
                        if (!_this.willResolveSourceMaps) {
                            _this.willResolveSourceMaps = true;
                            setTimeout(_this.resolveSourceMapsAndUpdate.bind(_this), RESOLVE_SOURCEMAP_TIMEOUT);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "resolveSourceMapsAndUpdate",
            value: function resolveSourceMapsAndUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    var currentBacklog;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.willResolveSourceMaps = false;
                                // reset the backlog once we start processing it
                                currentBacklog = _this.processSourceMapBacklog;
                                _this.processSourceMapBacklog = [];
                                return [
                                    4,
                                    Promise.all(currentBacklog.map(function(param) {
                                        var script = param.script, sourceMap = param.sourceMap;
                                        return _this.resolveSourceMap(script, sourceMap);
                                    }))
                                ];
                            case 1:
                                _state.sent();
                                _this.dispatchEventToListeners(Events.SourceMapResolved);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "resolveSourceMap",
            value: function resolveSourceMap(script, sourceMap) {
                var _this = this;
                return _async_to_generator(function() {
                    var url, urlCoverage, generatedContent, _, _1, generatedText, _this_calculateSizeForSources, sourceSizeMap, sourceSegments, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, sourceURL;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                url = script.sourceURL;
                                urlCoverage = _this.coverageByURL.get(url);
                                if (!urlCoverage) {
                                    // The urlCoverage has not been created yet, so no need to update it.
                                    return [
                                        2
                                    ];
                                }
                                if (!(urlCoverage.sourcesURLCoverageInfo.size === 0)) return [
                                    3,
                                    2
                                ];
                                _1 = (_ = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData).textOr;
                                return [
                                    4,
                                    script.requestContentData()
                                ];
                            case 1:
                                generatedContent = _1.apply(_, [
                                    _state.sent(),
                                    ''
                                ]);
                                generatedText = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.Text.Text(generatedContent);
                                _this_calculateSizeForSources = _sliced_to_array(_this.calculateSizeForSources(sourceMap, generatedText, script.contentLength), 2), sourceSizeMap = _this_calculateSizeForSources[0], sourceSegments = _this_calculateSizeForSources[1];
                                urlCoverage.setSourceSegments(sourceSegments);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = sourceMap.sourceURLs()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        sourceURL = _step.value;
                                        _this.addCoverageForSource(sourceURL, sourceSizeMap.get(sourceURL) || 0, urlCoverage.type(), urlCoverage);
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
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "preciseCoverageDeltaUpdate",
            value: function preciseCoverageDeltaUpdate(timestamp, occasion, coverageData) {
                var _this = this;
                return _async_to_generator(function() {
                    var result;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.coverageUpdateTimes.add(timestamp);
                                return [
                                    4,
                                    _this.backlogOrProcessJSCoverage(coverageData, timestamp)
                                ];
                            case 1:
                                result = _state.sent();
                                if (result.length) {
                                    _this.dispatchEventToListeners(Events.CoverageUpdated, result);
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
                    var promises;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.stopPolling()
                                ];
                            case 1:
                                _state.sent();
                                promises = [];
                                if (_this.cpuProfilerModel) {
                                    promises.push(_this.cpuProfilerModel.stopPreciseCoverage());
                                }
                                if (_this.cssModel) {
                                    promises.push(_this.cssModel.stopCoverage());
                                    _this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSModel.Events.StyleSheetAdded, _this.handleStyleSheetAdded, _this);
                                }
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.coverageByURL = new Map();
                this.coverageByContentProvider = new Map();
                this.coverageUpdateTimes = new Set();
                this.dispatchEventToListeners(Events.CoverageReset);
            }
        },
        {
            key: "startPolling",
            value: function startPolling() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.currentPollPromise || _this.suspensionState !== "Active" /* SuspensionState.Active */ ) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.pollLoop()
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "pollLoop",
            value: function pollLoop() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.clearTimer();
                                _this.currentPollPromise = _this.pollAndCallback();
                                return [
                                    4,
                                    _this.currentPollPromise
                                ];
                            case 1:
                                _state.sent();
                                if (_this.suspensionState === "Active" /* SuspensionState.Active */  || _this.performanceTraceRecording) {
                                    _this.pollTimer = window.setTimeout(function() {
                                        return _this.pollLoop();
                                    }, COVERAGE_POLLING_PERIOD_MS);
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
            key: "stopPolling",
            value: function stopPolling() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.clearTimer();
                                return [
                                    4,
                                    _this.currentPollPromise
                                ];
                            case 1:
                                _state.sent();
                                _this.currentPollPromise = null;
                                // Do one last poll to get the final data.
                                return [
                                    4,
                                    _this.pollAndCallback()
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "pollAndCallback",
            value: function pollAndCallback() {
                var _this = this;
                return _async_to_generator(function() {
                    var updates;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.suspensionState === "Suspended" /* SuspensionState.Suspended */  && !_this.performanceTraceRecording) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.takeAllCoverage()
                                ];
                            case 1:
                                updates = _state.sent();
                                // This conditional should never trigger, as all intended ways to stop
                                // polling are awaiting the `_currentPollPromise` before suspending.
                                console.assert(_this.suspensionState !== "Suspended" /* SuspensionState.Suspended */  || Boolean(_this.performanceTraceRecording), 'CoverageModel was suspended while polling.');
                                if (updates.length) {
                                    _this.dispatchEventToListeners(Events.CoverageUpdated, updates);
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
            key: "clearTimer",
            value: function clearTimer() {
                if (this.pollTimer) {
                    clearTimeout(this.pollTimer);
                    this.pollTimer = null;
                }
            }
        },
        {
            key: "preSuspendModel",
            value: /**
     * Stops polling as preparation for suspension. This function is idempotent
     * due because it changes the state to suspending.
     */ function preSuspendModel(reason) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.suspensionState !== "Active" /* SuspensionState.Active */ ) {
                                    return [
                                        2
                                    ];
                                }
                                _this.suspensionState = "Suspending" /* SuspensionState.Suspending */ ;
                                if (reason === 'performance-timeline') {
                                    _this.performanceTraceRecording = true;
                                    // Keep polling to the backlog if a performance trace is recorded.
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.currentPollPromise) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.stopPolling()
                                ];
                            case 1:
                                _state.sent();
                                _this.shouldResumePollingOnResume = true;
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "suspendModel",
            value: function suspendModel(_reason) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.suspensionState = "Suspended" /* SuspensionState.Suspended */ ;
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "resumeModel",
            value: function resumeModel() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "postResumeModel",
            value: /**
     * Restarts polling after suspension. Note that the function is idempotent
     * because starting polling is idempotent.
     */ function postResumeModel() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.suspensionState = "Active" /* SuspensionState.Active */ ;
                                _this.performanceTraceRecording = false;
                                if (!_this.shouldResumePollingOnResume) return [
                                    3,
                                    2
                                ];
                                _this.shouldResumePollingOnResume = false;
                                return [
                                    4,
                                    _this.startPolling()
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "entries",
            value: function entries() {
                return Array.from(this.coverageByURL.values());
            }
        },
        {
            key: "getCoverageForUrl",
            value: function getCoverageForUrl(url) {
                return this.coverageByURL.get(url) || null;
            }
        },
        {
            key: "usageForRange",
            value: function usageForRange(contentProvider, startOffset, endOffset) {
                var coverageInfo = this.coverageByContentProvider.get(contentProvider);
                return coverageInfo && coverageInfo.usageForRange(startOffset, endOffset);
            }
        },
        {
            key: "clearCSS",
            value: function clearCSS() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.coverageByContentProvider.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        if (entry.type() !== 1 /* CoverageType.CSS */ ) {
                            continue;
                        }
                        var contentProvider = entry.getContentProvider();
                        this.coverageByContentProvider.delete(contentProvider);
                        var urlEntry = this.coverageByURL.get(entry.url());
                        if (!urlEntry) {
                            continue;
                        }
                        var key = "".concat(contentProvider.startLine, ":").concat(contentProvider.startColumn);
                        urlEntry.removeCoverageEntry(key, entry);
                        if (urlEntry.numberOfEntries() === 0) {
                            this.coverageByURL.delete(entry.url());
                        }
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
                if (this.cssModel) {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = this.cssModel.getAllStyleSheetHeaders()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var styleSheetHeader = _step1.value;
                            this.addStyleSheetToCSSCoverage(styleSheetHeader);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
            }
        },
        {
            key: "takeAllCoverage",
            value: function takeAllCoverage() {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, updatesCSS, updatesJS;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all([
                                        _this.takeCSSCoverage(),
                                        _this.takeJSCoverage()
                                    ])
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), updatesCSS = _ref[0], updatesJS = _ref[1];
                                return [
                                    2,
                                    _to_consumable_array(updatesCSS).concat(_to_consumable_array(updatesJS))
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "takeJSCoverage",
            value: function takeJSCoverage() {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, coverage, timestamp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.cpuProfilerModel) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                return [
                                    4,
                                    _this.cpuProfilerModel.takePreciseCoverage()
                                ];
                            case 1:
                                _ref = _state.sent(), coverage = _ref.coverage, timestamp = _ref.timestamp;
                                _this.coverageUpdateTimes.add(timestamp);
                                return [
                                    2,
                                    _this.backlogOrProcessJSCoverage(coverage, timestamp)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getCoverageUpdateTimes",
            value: function getCoverageUpdateTimes() {
                return this.coverageUpdateTimes;
            }
        },
        {
            key: "backlogOrProcessJSCoverage",
            value: function backlogOrProcessJSCoverage(freshRawCoverageData, freshTimestamp) {
                var _this = this;
                return _async_to_generator(function() {
                    var ascendingByTimestamp, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, rawCoverageData, stamp, _, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (freshRawCoverageData.length > 0) {
                                    _this.jsBacklog.push({
                                        rawCoverageData: freshRawCoverageData,
                                        stamp: freshTimestamp
                                    });
                                }
                                if (_this.suspensionState !== "Active" /* SuspensionState.Active */ ) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                ascendingByTimestamp = function(x, y) {
                                    return x.stamp - y.stamp;
                                };
                                results = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = _this.jsBacklog.sort(ascendingByTimestamp)[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                _step_value = _step.value, rawCoverageData = _step_value.rawCoverageData, stamp = _step_value.stamp;
                                _ = results.push;
                                return [
                                    4,
                                    _this.processJSCoverage(rawCoverageData, stamp)
                                ];
                            case 3:
                                _.apply(results, [
                                    _state.sent()
                                ]);
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                _this.jsBacklog = [];
                                return [
                                    2,
                                    results.flat()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "processJSBacklog",
            value: function processJSBacklog() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        void _this.backlogOrProcessJSCoverage([], 0);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "processJSCoverage",
            value: function processJSCoverage(scriptsCoverage, stamp) {
                var _this = this;
                return _async_to_generator(function() {
                    var updatedEntries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, script, ranges, type, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, func, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, range, subentry, _updatedEntries, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.debuggerModel) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                updatedEntries = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = scriptsCoverage[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                entry = _step.value;
                                script = _this.debuggerModel.scriptForId(entry.scriptId);
                                if (!script) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                ranges = [];
                                type = 2 /* CoverageType.JavaScript */ ;
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    for(_iterator1 = entry.functions[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        func = _step1.value;
                                        // Do not coerce undefined to false, i.e. only consider blockLevel to be false
                                        // if back-end explicitly provides blockLevel field, otherwise presume blockLevel
                                        // coverage is not available. Also, ignore non-block level functions that weren't
                                        // ever called.
                                        if (func.isBlockCoverage === false && !(func.ranges.length === 1 && !func.ranges[0].count)) {
                                            type |= 4 /* CoverageType.JavaScriptPerFunction */ ;
                                        }
                                        _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                                        try {
                                            for(_iterator2 = func.ranges[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                                range = _step2.value;
                                                ranges.push(range);
                                            }
                                        } catch (err) {
                                            _didIteratorError2 = true;
                                            _iteratorError2 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                                    _iterator2.return();
                                                }
                                            } finally{
                                                if (_didIteratorError2) {
                                                    throw _iteratorError2;
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                return [
                                    4,
                                    _this.addCoverage(script, script.contentLength, script.lineOffset, script.columnOffset, ranges, type, stamp)
                                ];
                            case 3:
                                subentry = _state.sent();
                                if (subentry) {
                                    ;
                                    (_updatedEntries = updatedEntries).push.apply(_updatedEntries, _to_consumable_array(subentry));
                                }
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2,
                                    updatedEntries
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleStyleSheetAdded",
            value: function handleStyleSheetAdded(event) {
                this.addStyleSheetToCSSCoverage(event.data);
            }
        },
        {
            key: "takeCSSCoverage",
            value: function takeCSSCoverage() {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, coverage, timestamp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Don't poll if we have no model, or are suspended.
                                if (!_this.cssModel || _this.suspensionState !== "Active" /* SuspensionState.Active */ ) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                return [
                                    4,
                                    _this.cssModel.takeCoverageDelta()
                                ];
                            case 1:
                                _ref = _state.sent(), coverage = _ref.coverage, timestamp = _ref.timestamp;
                                _this.coverageUpdateTimes.add(timestamp);
                                return [
                                    2,
                                    _this.backlogOrProcessCSSCoverage(coverage, timestamp)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "backlogOrProcessCSSCoverage",
            value: function backlogOrProcessCSSCoverage(freshRawCoverageData, freshTimestamp) {
                var _this = this;
                return _async_to_generator(function() {
                    var ascendingByTimestamp, results, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, rawCoverageData, stamp, _, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (freshRawCoverageData.length > 0) {
                                    _this.cssBacklog.push({
                                        rawCoverageData: freshRawCoverageData,
                                        stamp: freshTimestamp
                                    });
                                }
                                if (_this.suspensionState !== "Active" /* SuspensionState.Active */ ) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                ascendingByTimestamp = function(x, y) {
                                    return x.stamp - y.stamp;
                                };
                                results = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = _this.cssBacklog.sort(ascendingByTimestamp)[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                _step_value = _step.value, rawCoverageData = _step_value.rawCoverageData, stamp = _step_value.stamp;
                                _ = results.push;
                                return [
                                    4,
                                    _this.processCSSCoverage(rawCoverageData, stamp)
                                ];
                            case 3:
                                _.apply(results, [
                                    _state.sent()
                                ]);
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                _this.cssBacklog = [];
                                return [
                                    2,
                                    results.flat()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "processCSSCoverage",
            value: function processCSSCoverage(ruleUsageList, stamp) {
                var _this = this;
                return _async_to_generator(function() {
                    var updatedEntries, rulesByStyleSheet, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, rule, styleSheetHeader, ranges, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, entry, styleSheetHeader1, ranges1, subentry, _updatedEntries, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.cssModel) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                updatedEntries = [];
                                rulesByStyleSheet = new Map();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = ruleUsageList[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        rule = _step.value;
                                        styleSheetHeader = _this.cssModel.styleSheetHeaderForId(rule.styleSheetId);
                                        if (!styleSheetHeader) {
                                            continue;
                                        }
                                        ranges = rulesByStyleSheet.get(styleSheetHeader);
                                        if (!ranges) {
                                            ranges = [];
                                            rulesByStyleSheet.set(styleSheetHeader, ranges);
                                        }
                                        ranges.push({
                                            startOffset: rule.startOffset,
                                            endOffset: rule.endOffset,
                                            count: Number(rule.used)
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
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator1 = rulesByStyleSheet[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    5
                                ];
                                entry = _step1.value;
                                styleSheetHeader1 = entry[0];
                                ranges1 = entry[1];
                                return [
                                    4,
                                    _this.addCoverage(styleSheetHeader1, styleSheetHeader1.contentLength, styleSheetHeader1.startLine, styleSheetHeader1.startColumn, ranges1, 1 /* CoverageType.CSS */ , stamp)
                                ];
                            case 3:
                                subentry = _state.sent();
                                if (subentry) {
                                    ;
                                    (_updatedEntries = updatedEntries).push.apply(_updatedEntries, _to_consumable_array(subentry));
                                }
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2,
                                    updatedEntries
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addStyleSheetToCSSCoverage",
            value: function addStyleSheetToCSSCoverage(styleSheetHeader) {
                void this.addCoverage(styleSheetHeader, styleSheetHeader.contentLength, styleSheetHeader.startLine, styleSheetHeader.startColumn, [], 1 /* CoverageType.CSS */ , Date.now());
            }
        },
        {
            key: "calculateSizeForSources",
            value: function calculateSizeForSources(sourceMap, text, contentLength) {
                // Map shows the size of source files contributed to the size in the generated file. For example:
                // Map(3) {url1 => 593, url2 => 232, url3 => 52}
                // This means in there are 593 bytes in the generated file are contributed by url1, and so on.
                var sourceSizeMap = new Map();
                // Continuous segments shows that which source file contribute to the generated file segment. For example:
                // [{end: 84, sourceUrl: ''}, {end: 593, sourceUrl: url1}, {end: 781, sourceUrl: url2}, {end: 833, sourceUrl: url3}, {end: 881, sourceUrl: url1}]
                // This means that the first 84 bytes in the generated file are not contributed by any source file, the next 593 bytes are contributed by url1, and so on.
                var sourceSegments = [];
                var calculateSize = function calculateSize(startLine, startCol, endLine, endCol) {
                    if (startLine === endLine) {
                        return endCol - startCol;
                    }
                    if (text) {
                        // If we hit the line break, we need to use offset to calculate size
                        var startOffset = text.offsetFromPosition(startLine, startCol);
                        var endOffset = text.offsetFromPosition(endLine, endCol);
                        return endOffset - startOffset;
                    }
                    // If for some reason we don't have the text, we can only use col number to calculate size
                    return endCol;
                };
                var mappings = sourceMap.mappings();
                if (mappings.length === 0) {
                    return [
                        sourceSizeMap,
                        sourceSegments
                    ];
                }
                // calculate the segment before the first entry
                var lastEntry = mappings[0];
                var totalSegmentSize = 0;
                if (text) {
                    totalSegmentSize += text.offsetFromPosition(lastEntry.lineNumber, lastEntry.columnNumber);
                } else {
                    totalSegmentSize += calculateSize(0, 0, lastEntry.lineNumber, lastEntry.columnNumber);
                }
                sourceSegments.push({
                    end: totalSegmentSize,
                    sourceUrl: ''
                });
                for(var i = 0; i < mappings.length; i++){
                    var curEntry = mappings[i];
                    var entryRange = sourceMap.findEntryRanges(curEntry.lineNumber, curEntry.columnNumber);
                    if (entryRange) {
                        // calculate the size
                        var range = entryRange.range;
                        var sourceURL = entryRange.sourceURL;
                        var oldSize = sourceSizeMap.get(sourceURL) || 0;
                        var size = 0;
                        if (i === mappings.length - 1) {
                            var startOffset = text.offsetFromPosition(range.startLine, range.startColumn);
                            size = contentLength - startOffset;
                        } else {
                            size = calculateSize(range.startLine, range.startColumn, range.endLine, range.endColumn);
                        }
                        sourceSizeMap.set(sourceURL, oldSize + size);
                    }
                    // calculate the segment
                    var segmentSize = calculateSize(lastEntry.lineNumber, lastEntry.columnNumber, curEntry.lineNumber, curEntry.columnNumber);
                    totalSegmentSize += segmentSize;
                    if (curEntry.sourceURL !== lastEntry.sourceURL) {
                        if (text) {
                            var endOffsetForLastEntry = text.offsetFromPosition(curEntry.lineNumber, curEntry.columnNumber);
                            sourceSegments.push({
                                end: endOffsetForLastEntry,
                                sourceUrl: lastEntry.sourceURL || ''
                            });
                        } else {
                            sourceSegments.push({
                                end: totalSegmentSize,
                                sourceUrl: lastEntry.sourceURL || ''
                            });
                        }
                    }
                    lastEntry = curEntry;
                    // add the last segment if we are at the last entry
                    if (i === mappings.length - 1) {
                        sourceSegments.push({
                            end: contentLength,
                            sourceUrl: curEntry.sourceURL || ''
                        });
                    }
                }
                return [
                    sourceSizeMap,
                    sourceSegments
                ];
            }
        },
        {
            key: "addCoverage",
            value: function addCoverage(contentProvider, contentLength, startLine, startColumn, ranges, type, stamp) {
                var _this = this;
                return _async_to_generator(function() {
                    var coverageInfoArray, url, urlCoverage, isNewUrlCoverage, _this_sourceMapManager, sourceMap, generatedContent, _, _1, generatedText, _this_calculateSizeForSources, sourceSizeMap, sourceSegments, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, sourceURL, subentry, coverageInfo, segments, last, usedSizeDelta, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, _step_value, sourceUrl, sizeDelta, sourceURLCoverageInfo;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                coverageInfoArray = [];
                                url = contentProvider.contentURL();
                                if (!url) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                urlCoverage = _this.coverageByURL.get(url);
                                isNewUrlCoverage = false;
                                if (!!urlCoverage) return [
                                    3,
                                    3
                                ];
                                isNewUrlCoverage = true;
                                urlCoverage = new URLCoverageInfo(url);
                                _this.coverageByURL.set(url, urlCoverage);
                                return [
                                    4,
                                    (_this_sourceMapManager = _this.sourceMapManager) === null || _this_sourceMapManager === void 0 ? void 0 : _this_sourceMapManager.sourceMapForClientPromise(contentProvider)
                                ];
                            case 1:
                                sourceMap = _state.sent();
                                if (!sourceMap) return [
                                    3,
                                    3
                                ];
                                _1 = (_ = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData).textOr;
                                return [
                                    4,
                                    contentProvider.requestContentData()
                                ];
                            case 2:
                                generatedContent = _1.apply(_, [
                                    _state.sent(),
                                    ''
                                ]);
                                generatedText = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.Text.Text(generatedContent);
                                _this_calculateSizeForSources = _sliced_to_array(_this.calculateSizeForSources(sourceMap, generatedText, contentLength), 2), sourceSizeMap = _this_calculateSizeForSources[0], sourceSegments = _this_calculateSizeForSources[1];
                                urlCoverage.setSourceSegments(sourceSegments);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = sourceMap.sourceURLs()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        sourceURL = _step.value;
                                        subentry = _this.addCoverageForSource(sourceURL, sourceSizeMap.get(sourceURL) || 0, type, urlCoverage);
                                        if (subentry) {
                                            coverageInfoArray.push(subentry);
                                        }
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
                                _state.label = 3;
                            case 3:
                                coverageInfo = urlCoverage.ensureEntry(contentProvider, contentLength, startLine, startColumn, type);
                                _this.coverageByContentProvider.set(contentProvider, coverageInfo);
                                segments = CoverageModel.convertToDisjointSegments(ranges, stamp);
                                last = segments[segments.length - 1];
                                if (last && last.end < contentLength) {
                                    segments.push({
                                        end: contentLength,
                                        stamp: stamp,
                                        count: 0
                                    });
                                }
                                usedSizeDelta = coverageInfo.mergeCoverage(segments);
                                if (!isNewUrlCoverage && usedSizeDelta === 0) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                urlCoverage.addToSizes(usedSizeDelta, 0);
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                try {
                                    // go through the sources that have size changes.
                                    for(_iterator1 = coverageInfo.sourceDeltaMap[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                        _step_value = _sliced_to_array(_step1.value, 2), sourceUrl = _step_value[0], sizeDelta = _step_value[1];
                                        sourceURLCoverageInfo = urlCoverage.sourcesURLCoverageInfo.get(sourceUrl);
                                        if (sourceURLCoverageInfo) {
                                            sourceURLCoverageInfo.addToSizes(sizeDelta, 0);
                                            sourceURLCoverageInfo.lastSourceUsedRange = coverageInfo.sourceUsedRangeMap.get(sourceUrl) || [];
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError1 = true;
                                    _iteratorError1 = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                            _iterator1.return();
                                        }
                                    } finally{
                                        if (_didIteratorError1) {
                                            throw _iteratorError1;
                                        }
                                    }
                                }
                                coverageInfoArray.push(coverageInfo);
                                return [
                                    2,
                                    coverageInfoArray
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addCoverageForSource",
            value: function addCoverageForSource(url, size, type, generatedUrlCoverage) {
                var uiSourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(url);
                var contentProvider = uiSourceCode;
                var urlCoverage = new SourceURLCoverageInfo(url, generatedUrlCoverage);
                var coverageInfo = urlCoverage.ensureEntry(contentProvider, size, 0, 0, type);
                generatedUrlCoverage.sourcesURLCoverageInfo.set(url, urlCoverage);
                return coverageInfo;
            }
        },
        {
            key: "exportReport",
            value: function exportReport(fos) {
                var _this = this;
                return _async_to_generator(function() {
                    var result, coverageByUrlKeys, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, urlInfoKey, _result, urlInfo, url, _, _1, _tmp, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                result = [];
                                coverageByUrlKeys = Array.from(_this.coverageByURL.keys()).sort();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = coverageByUrlKeys[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                urlInfoKey = _step.value;
                                urlInfo = _this.coverageByURL.get(urlInfoKey);
                                if (!urlInfo) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                url = urlInfo.url();
                                if (url.startsWith('extensions::') || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.schemeIs(url, 'chrome-extension:')) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                _1 = (_ = (_result = result).push).apply;
                                _tmp = [
                                    _result
                                ];
                                return [
                                    4,
                                    urlInfo.entriesForExport()
                                ];
                            case 3:
                                _1.apply(_, _tmp.concat([
                                    _to_consumable_array.apply(void 0, [
                                        _state.sent()
                                    ])
                                ]));
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    4,
                                    fos.write(JSON.stringify(result, undefined, 2))
                                ];
                            case 9:
                                _state.sent();
                                void fos.close();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "convertToDisjointSegments",
            value: function convertToDisjointSegments(ranges, stamp) {
                ranges.sort(function(a, b) {
                    return a.startOffset - b.startOffset;
                });
                var result = [];
                var stack = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = ranges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        var top = stack[stack.length - 1];
                        while(top && top.endOffset <= entry.startOffset){
                            append(top.endOffset, top.count);
                            stack.pop();
                            top = stack[stack.length - 1];
                        }
                        append(entry.startOffset, top ? top.count : 0);
                        stack.push(entry);
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
                for(var top1 = stack.pop(); top1; top1 = stack.pop()){
                    append(top1.endOffset, top1.count);
                }
                function append(end, count) {
                    var last = result[result.length - 1];
                    if (last) {
                        if (last.end === end) {
                            return;
                        }
                        if (last.count === count) {
                            last.end = end;
                            return;
                        }
                    }
                    result.push({
                        end: end,
                        count: count,
                        stamp: stamp
                    });
                }
                return result;
            }
        }
    ]);
    return CoverageModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel.register(CoverageModel, {
    capabilities: 0 /* SDK.Target.Capability.None */ ,
    autostart: false
});
function locationCompare(a, b) {
    var _a_split = _sliced_to_array(a.split(':'), 2), aLine = _a_split[0], aPos = _a_split[1];
    var _b_split = _sliced_to_array(b.split(':'), 2), bLine = _b_split[0], bPos = _b_split[1];
    return Number.parseInt(aLine, 10) - Number.parseInt(bLine, 10) || Number.parseInt(aPos, 10) - Number.parseInt(bPos, 10);
}
var URLCoverageInfo = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(URLCoverageInfo, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(URLCoverageInfo);
    function URLCoverageInfo(url) {
        _class_call_check(this, URLCoverageInfo);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "urlInternal", void 0);
        _define_property(_assert_this_initialized(_this), "coverageInfoByLocation", void 0);
        _define_property(_assert_this_initialized(_this), "sizeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "usedSizeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "typeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "isContentScriptInternal", void 0);
        _define_property(_assert_this_initialized(_this), "sourcesURLCoverageInfo", new Map());
        _define_property(_assert_this_initialized(_this), "sourceSegments", void 0);
        _this.urlInternal = url;
        _this.coverageInfoByLocation = new Map();
        _this.sizeInternal = 0;
        _this.usedSizeInternal = 0;
        _this.isContentScriptInternal = false;
        return _this;
    }
    _create_class(URLCoverageInfo, [
        {
            key: "url",
            value: function url() {
                return this.urlInternal;
            }
        },
        {
            key: "type",
            value: function type() {
                return this.typeInternal;
            }
        },
        {
            key: "size",
            value: function size() {
                return this.sizeInternal;
            }
        },
        {
            key: "usedSize",
            value: function usedSize() {
                return this.usedSizeInternal;
            }
        },
        {
            key: "unusedSize",
            value: function unusedSize() {
                return this.sizeInternal - this.usedSizeInternal;
            }
        },
        {
            key: "usedPercentage",
            value: function usedPercentage() {
                // Per convention, empty files are reported as 100 % uncovered
                if (this.sizeInternal === 0) {
                    return 0;
                }
                if (!this.unusedSize() || !this.size()) {
                    return 0;
                }
                return this.usedSize() / this.size();
            }
        },
        {
            key: "unusedPercentage",
            value: function unusedPercentage() {
                // Per convention, empty files are reported as 100 % uncovered
                if (this.sizeInternal === 0) {
                    return 100;
                }
                return this.unusedSize() / this.size();
            }
        },
        {
            key: "isContentScript",
            value: function isContentScript() {
                return this.isContentScriptInternal;
            }
        },
        {
            key: "entries",
            value: function entries() {
                return this.coverageInfoByLocation.values();
            }
        },
        {
            key: "numberOfEntries",
            value: function numberOfEntries() {
                return this.coverageInfoByLocation.size;
            }
        },
        {
            key: "removeCoverageEntry",
            value: function removeCoverageEntry(key, entry) {
                if (!this.coverageInfoByLocation.delete(key)) {
                    return;
                }
                this.addToSizes(-entry.getUsedSize(), -entry.getSize());
            }
        },
        {
            key: "addToSizes",
            value: function addToSizes(usedSize, size) {
                this.usedSizeInternal += usedSize;
                this.sizeInternal += size;
                if (usedSize !== 0 || size !== 0) {
                    this.dispatchEventToListeners(URLCoverageInfo.Events.SizesChanged);
                }
            }
        },
        {
            key: "setSourceSegments",
            value: function setSourceSegments(segments) {
                this.sourceSegments = segments;
            }
        },
        {
            key: "ensureEntry",
            value: function ensureEntry(contentProvider, contentLength, lineOffset, columnOffset, type) {
                var key = "".concat(lineOffset, ":").concat(columnOffset);
                var entry = this.coverageInfoByLocation.get(key);
                if (type & 2 /* CoverageType.JavaScript */  && !this.coverageInfoByLocation.size && _instanceof(contentProvider, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Script.Script)) {
                    this.isContentScriptInternal = contentProvider.isContentScript();
                }
                this.typeInternal |= type;
                if (entry) {
                    entry.addCoverageType(type);
                    return entry;
                }
                if (type & 2 /* CoverageType.JavaScript */  && !this.coverageInfoByLocation.size && _instanceof(contentProvider, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Script.Script)) {
                    this.isContentScriptInternal = contentProvider.isContentScript();
                }
                entry = new CoverageInfo(contentProvider, contentLength, lineOffset, columnOffset, type, this);
                this.coverageInfoByLocation.set(key, entry);
                this.addToSizes(0, contentLength);
                return entry;
            }
        },
        {
            key: "getFullText",
            value: function getFullText() {
                var _this = this;
                return _async_to_generator(function() {
                    var useFullText, url, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, info, _info_getOffsets, lineOffset, columnOffset, resource, content, _, _1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // For .html resources, multiple scripts share URL, but have different offsets.
                                useFullText = false;
                                url = _this.url();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this.coverageInfoByLocation.values()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        info = _step.value;
                                        _info_getOffsets = info.getOffsets(), lineOffset = _info_getOffsets.lineOffset, columnOffset = _info_getOffsets.columnOffset;
                                        if (lineOffset || columnOffset) {
                                            useFullText = Boolean(url);
                                            break;
                                        }
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
                                if (!useFullText) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                resource = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel.resourceForURL(url);
                                if (!resource) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                _1 = (_ = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData).textOr;
                                return [
                                    4,
                                    resource.requestContentData()
                                ];
                            case 1:
                                content = _1.apply(_, [
                                    _state.sent(),
                                    ''
                                ]);
                                return [
                                    2,
                                    new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.Text.Text(content)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "entriesForExportBasedOnFullText",
            value: function entriesForExportBasedOnFullText(fullText) {
                var coverageByLocationKeys = Array.from(this.coverageInfoByLocation.keys()).sort(locationCompare);
                var entry = {
                    url: this.url(),
                    ranges: [],
                    text: fullText.value()
                };
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = coverageByLocationKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var infoKey = _step.value;
                        var _entry_ranges;
                        var info = this.coverageInfoByLocation.get(infoKey);
                        if (!info) {
                            continue;
                        }
                        var _info_getOffsets = info.getOffsets(), lineOffset = _info_getOffsets.lineOffset, columnOffset = _info_getOffsets.columnOffset;
                        var offset = fullText ? fullText.offsetFromPosition(lineOffset, columnOffset) : 0;
                        (_entry_ranges = entry.ranges).push.apply(_entry_ranges, _to_consumable_array(info.rangesForExport(offset)));
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
                return entry;
            }
        },
        {
            key: "entriesForExportBasedOnContent",
            value: function entriesForExportBasedOnContent() {
                var _this = this;
                return _async_to_generator(function() {
                    var coverageByLocationKeys, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, infoKey, info, entry, _tmp, _, _1, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                coverageByLocationKeys = Array.from(_this.coverageInfoByLocation.keys()).sort(locationCompare);
                                result = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = coverageByLocationKeys[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                infoKey = _step.value;
                                info = _this.coverageInfoByLocation.get(infoKey);
                                if (!info) {
                                    return [
                                        3,
                                        4
                                    ];
                                }
                                _tmp = {
                                    url: _this.url(),
                                    ranges: info.rangesForExport()
                                };
                                _1 = (_ = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.ContentData.ContentData).textOr;
                                return [
                                    4,
                                    info.getContentProvider().requestContentData()
                                ];
                            case 3:
                                entry = (_tmp.text = _1.apply(_, [
                                    _state.sent(),
                                    null
                                ]), _tmp);
                                result.push(entry);
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "entriesForExport",
            value: function entriesForExport() {
                var _this = this;
                return _async_to_generator(function() {
                    var fullText;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.getFullText()
                                ];
                            case 1:
                                fullText = _state.sent();
                                if (!fullText) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.entriesForExportBasedOnFullText(fullText)
                                ];
                            case 2:
                                return [
                                    2,
                                    [
                                        _state.sent()
                                    ]
                                ];
                            case 3:
                                // Fall back to the per-script operation.
                                return [
                                    2,
                                    _this.entriesForExportBasedOnContent()
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return URLCoverageInfo;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var SourceURLCoverageInfo = /*#__PURE__*/ function(URLCoverageInfo) {
    "use strict";
    _inherits(SourceURLCoverageInfo, URLCoverageInfo);
    var _super = _create_super(SourceURLCoverageInfo);
    function SourceURLCoverageInfo(sourceUrl, generatedUrlCoverage) {
        _class_call_check(this, SourceURLCoverageInfo);
        var _this;
        _this = _super.call(this, sourceUrl);
        _define_property(_assert_this_initialized(_this), "generatedURLCoverageInfo", void 0);
        _define_property(_assert_this_initialized(_this), "lastSourceUsedRange", []);
        _this.generatedURLCoverageInfo = generatedUrlCoverage;
        return _this;
    }
    return SourceURLCoverageInfo;
}(URLCoverageInfo);
(function(URLCoverageInfo) {
    var Events;
    (function(Events) {
        Events["SizesChanged"] = "SizesChanged";
    })(Events = URLCoverageInfo.Events || (URLCoverageInfo.Events = {}));
})(URLCoverageInfo || (URLCoverageInfo = {}));
var mergeSegments = function(segmentsA, segmentsB) {
    var result = [];
    var indexA = 0;
    var indexB = 0;
    while(indexA < segmentsA.length && indexB < segmentsB.length){
        var a = segmentsA[indexA];
        var b = segmentsB[indexB];
        var count = (a.count || 0) + (b.count || 0);
        var end = Math.min(a.end, b.end);
        var last = result[result.length - 1];
        var stamp = Math.min(a.stamp, b.stamp);
        if (!last || last.count !== count || last.stamp !== stamp) {
            result.push({
                end: end,
                count: count,
                stamp: stamp
            });
        } else {
            last.end = end;
        }
        if (a.end <= b.end) {
            indexA++;
        }
        if (a.end >= b.end) {
            indexB++;
        }
    }
    for(; indexA < segmentsA.length; indexA++){
        result.push(segmentsA[indexA]);
    }
    for(; indexB < segmentsB.length; indexB++){
        result.push(segmentsB[indexB]);
    }
    return result;
};
var CoverageInfo = /*#__PURE__*/ function() {
    "use strict";
    function CoverageInfo(contentProvider, size, lineOffset, columnOffset, type, generatedUrlCoverageInfo) {
        _class_call_check(this, CoverageInfo);
        _define_property(this, "contentProvider", void 0);
        _define_property(this, "size", void 0);
        _define_property(this, "usedSize", void 0);
        _define_property(this, "statsByTimestamp", void 0);
        _define_property(this, "lineOffset", void 0);
        _define_property(this, "columnOffset", void 0);
        _define_property(this, "coverageType", void 0);
        _define_property(this, "segments", void 0);
        _define_property(this, "generatedUrlCoverageInfo", void 0);
        _define_property(this, "sourceUsedSizeMap", new Map());
        _define_property(this, "sourceDeltaMap", new Map());
        _define_property(this, "sourceUsedRangeMap", new Map());
        this.contentProvider = contentProvider;
        this.size = size;
        this.usedSize = 0;
        this.statsByTimestamp = new Map();
        this.lineOffset = lineOffset;
        this.columnOffset = columnOffset;
        this.coverageType = type;
        this.generatedUrlCoverageInfo = generatedUrlCoverageInfo;
        this.segments = [];
    }
    _create_class(CoverageInfo, [
        {
            key: "getContentProvider",
            value: function getContentProvider() {
                return this.contentProvider;
            }
        },
        {
            key: "url",
            value: function url() {
                return this.contentProvider.contentURL();
            }
        },
        {
            key: "type",
            value: function type() {
                return this.coverageType;
            }
        },
        {
            key: "addCoverageType",
            value: function addCoverageType(type) {
                this.coverageType |= type;
            }
        },
        {
            key: "getOffsets",
            value: function getOffsets() {
                return {
                    lineOffset: this.lineOffset,
                    columnOffset: this.columnOffset
                };
            }
        },
        {
            /**
     * Returns the delta by which usedSize increased.
     */ key: "mergeCoverage",
            value: function mergeCoverage(segments) {
                var oldUsedSize = this.usedSize;
                this.segments = mergeSegments(this.segments, segments);
                this.updateStats();
                if (this.generatedUrlCoverageInfo.sourceSegments && this.generatedUrlCoverageInfo.sourceSegments.length > 0) {
                    this.updateSourceCoverage();
                }
                return this.usedSize - oldUsedSize;
            }
        },
        {
            key: "usedByTimestamp",
            value: function usedByTimestamp() {
                return this.statsByTimestamp;
            }
        },
        {
            key: "getSize",
            value: function getSize() {
                return this.size;
            }
        },
        {
            key: "getUsedSize",
            value: function getUsedSize() {
                return this.usedSize;
            }
        },
        {
            key: "usageForRange",
            value: function usageForRange(start, end) {
                var index = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.ArrayUtilities.upperBound(this.segments, start, function(position, segment) {
                    return position - segment.end;
                });
                for(; index < this.segments.length && this.segments[index].end < end; ++index){
                    if (this.segments[index].count) {
                        return true;
                    }
                }
                return index < this.segments.length && Boolean(this.segments[index].count);
            }
        },
        {
            key: "updateStats",
            value: function updateStats() {
                this.statsByTimestamp = new Map();
                this.usedSize = 0;
                var last = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.segments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var segment = _step.value;
                        var previousCount = this.statsByTimestamp.get(segment.stamp);
                        if (previousCount === undefined) {
                            previousCount = 0;
                        }
                        if (segment.count) {
                            var used = segment.end - last;
                            this.usedSize += used;
                            this.statsByTimestamp.set(segment.stamp, previousCount + used);
                        }
                        last = segment.end;
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
            }
        },
        {
            key: "updateSourceCoverage",
            value: function updateSourceCoverage() {
                var sourceCoverage = new Map();
                this.sourceDeltaMap = new Map();
                this.sourceUsedRangeMap = new Map();
                var ranges = this.generatedUrlCoverageInfo.sourceSegments || [];
                var segmentStart = 0;
                var lastFoundRange = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.segments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var segment = _step.value;
                        var segmentEnd = segment.end;
                        if (segment.count) {
                            for(var i = lastFoundRange; i < ranges.length; i++){
                                // Calculate the start point of the current range.
                                // If it's the first range, the start point is 0,
                                // otherwise, it's one more than the end point of the previous range.
                                var rangeStart = i === 0 ? 0 : ranges[i - 1].end + 1;
                                var rangeEnd = ranges[i].end;
                                // Calculate the start and end points of the overlap between the current segment and range
                                var overlapStart = Math.max(segmentStart, rangeStart);
                                var overlapEnd = Math.min(segmentEnd, rangeEnd);
                                // If there's an overlap (start point is less than or equal to end point)
                                if (overlapStart <= overlapEnd) {
                                    var overlapSize = overlapEnd - overlapStart + 1;
                                    var overlapRange = {
                                        start: overlapStart,
                                        end: overlapEnd
                                    };
                                    if (!sourceCoverage.has(ranges[i].sourceUrl)) {
                                        sourceCoverage.set(ranges[i].sourceUrl, overlapSize);
                                    } else {
                                        sourceCoverage.set(ranges[i].sourceUrl, sourceCoverage.get(ranges[i].sourceUrl) + overlapSize);
                                    }
                                    if (!this.sourceUsedRangeMap.has(ranges[i].sourceUrl)) {
                                        this.sourceUsedRangeMap.set(ranges[i].sourceUrl, [
                                            overlapRange
                                        ]);
                                    } else {
                                        var _this_sourceUsedRangeMap_get;
                                        (_this_sourceUsedRangeMap_get = this.sourceUsedRangeMap.get(ranges[i].sourceUrl)) === null || _this_sourceUsedRangeMap_get === void 0 ? void 0 : _this_sourceUsedRangeMap_get.push(overlapRange);
                                    }
                                    // The next overlap will start at or after the end of the current range
                                    lastFoundRange = i;
                                }
                                // The segment end is before the end of the current range, so we can stop looking for overlaps
                                if (segmentEnd < rangeEnd) {
                                    break;
                                }
                            }
                        }
                        segmentStart = segmentEnd + 1;
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = sourceCoverage[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value = _sliced_to_array(_step1.value, 2), url = _step_value[0], size = _step_value[1];
                        var oldSize = this.sourceUsedSizeMap.get(url) || 0;
                        if (oldSize !== size) {
                            this.sourceUsedSizeMap.set(url, size); // update the map tracking the old used size
                            this.sourceDeltaMap.set(url, size - oldSize); // update the map tracking the delta
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        },
        {
            key: "rangesForExport",
            value: function rangesForExport() {
                var offset = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
                var ranges = [];
                var start = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.segments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var segment = _step.value;
                        if (segment.count) {
                            var last = ranges.length > 0 ? ranges[ranges.length - 1] : null;
                            if (last && last.end === start + offset) {
                                // We can extend the last segment.
                                last.end = segment.end + offset;
                            } else {
                                // There was a gap, add a new segment.
                                ranges.push({
                                    start: start + offset,
                                    end: segment.end + offset
                                });
                            }
                        }
                        start = segment.end;
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
                return ranges;
            }
        }
    ]);
    return CoverageInfo;
} //# sourceMappingURL=CoverageModel.js.map
();


}),

}]);