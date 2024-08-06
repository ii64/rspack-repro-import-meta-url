"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkTimeCalculator_js"], {
"./panels/network/NetworkTimeCalculator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkTimeBoundary: function() { return NetworkTimeBoundary; },
  NetworkTimeCalculator: function() { return NetworkTimeCalculator; },
  NetworkTransferDurationCalculator: function() { return NetworkTransferDurationCalculator; },
  NetworkTransferTimeCalculator: function() { return NetworkTransferTimeCalculator; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008, 2009 Anthony Ricaud <rik@webkit.org>
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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


var UIStrings = {
    /**
     *@description Latency download total format in Network Time Calculator of the Network panel
     *@example {20ms} PH1
     *@example {20ms} PH2
     *@example {40ms} PH3
     */ sLatencySDownloadSTotal: '{PH1} latency, {PH2} download ({PH3} total)',
    /**
     *@description Latency format in Network Time Calculator of the Network panel
     *@example {20ms} PH1
     */ sLatency: '{PH1} latency',
    /**
     * @description Duration of the download in ms/s shown for a completed network request.
     * @example {5ms} PH1
     */ sDownload: '{PH1} download',
    /**
     *@description From service worker format in Network Time Calculator of the Network panel
     *@example {20ms latency} PH1
     */ sFromServiceworker: '{PH1} (from `ServiceWorker`)',
    /**
     *@description From cache format in Network Time Calculator of the Network panel
     *@example {20ms latency} PH1
     */ sFromCache: '{PH1} (from cache)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/NetworkTimeCalculator.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var NetworkTimeBoundary = /*#__PURE__*/ function() {
    "use strict";
    function NetworkTimeBoundary(minimum, maximum) {
        _class_call_check(this, NetworkTimeBoundary);
        _define_property(this, "minimum", void 0);
        _define_property(this, "maximum", void 0);
        this.minimum = minimum;
        this.maximum = maximum;
    }
    _create_class(NetworkTimeBoundary, [
        {
            key: "equals",
            value: function equals(other) {
                return this.minimum === other.minimum && this.maximum === other.maximum;
            }
        }
    ]);
    return NetworkTimeBoundary;
}();
var NetworkTimeCalculator = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(NetworkTimeCalculator, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(NetworkTimeCalculator);
    function NetworkTimeCalculator(startAtZero) {
        _class_call_check(this, NetworkTimeCalculator);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "startAtZero", void 0);
        _define_property(_assert_this_initialized(_this), "minimumBoundaryInternal", void 0);
        _define_property(_assert_this_initialized(_this), "maximumBoundaryInternal", void 0);
        _define_property(_assert_this_initialized(_this), "boundryChangedEventThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "window", void 0);
        _define_property(_assert_this_initialized(_this), "workingArea", void 0);
        _this.startAtZero = startAtZero;
        _this.minimumBoundaryInternal = -1;
        _this.maximumBoundaryInternal = -1;
        _this.boundryChangedEventThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        _this.window = null;
        return _this;
    }
    _create_class(NetworkTimeCalculator, [
        {
            key: "setWindow",
            value: function setWindow(window) {
                this.window = window;
                this.boundaryChanged();
            }
        },
        {
            key: "setInitialUserFriendlyBoundaries",
            value: function setInitialUserFriendlyBoundaries() {
                this.minimumBoundaryInternal = 0;
                this.maximumBoundaryInternal = 1;
            }
        },
        {
            key: "computePosition",
            value: function computePosition(time) {
                return (time - this.minimumBoundary()) / this.boundarySpan() * (this.workingArea || 0);
            }
        },
        {
            key: "formatValue",
            value: function formatValue(value, precision) {
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(value, Boolean(precision));
            }
        },
        {
            key: "minimumBoundary",
            value: function minimumBoundary() {
                return this.window ? this.window.minimum : this.minimumBoundaryInternal;
            }
        },
        {
            key: "zeroTime",
            value: function zeroTime() {
                return this.minimumBoundaryInternal;
            }
        },
        {
            key: "maximumBoundary",
            value: function maximumBoundary() {
                return this.window ? this.window.maximum : this.maximumBoundaryInternal;
            }
        },
        {
            key: "boundary",
            value: function boundary() {
                return new NetworkTimeBoundary(this.minimumBoundary(), this.maximumBoundary());
            }
        },
        {
            key: "boundarySpan",
            value: function boundarySpan() {
                return this.maximumBoundary() - this.minimumBoundary();
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.minimumBoundaryInternal = -1;
                this.maximumBoundaryInternal = -1;
                this.boundaryChanged();
            }
        },
        {
            key: "value",
            value: function value() {
                return 0;
            }
        },
        {
            key: "setDisplayWidth",
            value: function setDisplayWidth(clientWidth) {
                this.workingArea = clientWidth;
            }
        },
        {
            key: "computeBarGraphPercentages",
            value: function computeBarGraphPercentages(request) {
                var start;
                var middle;
                var end;
                if (request.startTime !== -1) {
                    start = (request.startTime - this.minimumBoundary()) / this.boundarySpan() * 100;
                } else {
                    start = 0;
                }
                if (request.responseReceivedTime !== -1) {
                    middle = (request.responseReceivedTime - this.minimumBoundary()) / this.boundarySpan() * 100;
                } else {
                    middle = this.startAtZero ? start : 100;
                }
                if (request.endTime !== -1) {
                    end = (request.endTime - this.minimumBoundary()) / this.boundarySpan() * 100;
                } else {
                    end = this.startAtZero ? middle : 100;
                }
                if (this.startAtZero) {
                    end -= start;
                    middle -= start;
                    start = 0;
                }
                return {
                    start: start,
                    middle: middle,
                    end: end
                };
            }
        },
        {
            key: "computePercentageFromEventTime",
            value: function computePercentageFromEventTime(eventTime) {
                // This function computes a percentage in terms of the total loading time
                // of a specific event. If startAtZero is set, then this is useless, and we
                // want to return 0.
                if (eventTime !== -1 && !this.startAtZero) {
                    return (eventTime - this.minimumBoundary()) / this.boundarySpan() * 100;
                }
                return 0;
            }
        },
        {
            key: "percentageToTime",
            value: function percentageToTime(percentage) {
                return percentage * this.boundarySpan() / 100 + this.minimumBoundary();
            }
        },
        {
            key: "boundaryChanged",
            value: function boundaryChanged() {
                var _this = this;
                void this.boundryChangedEventThrottler.schedule(/*#__PURE__*/ _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.dispatchEventToListeners("BoundariesChanged" /* Events.BoundariesChanged */ );
                        return [
                            2
                        ];
                    });
                }));
            }
        },
        {
            key: "updateBoundariesForEventTime",
            value: function updateBoundariesForEventTime(eventTime) {
                if (eventTime === -1 || this.startAtZero) {
                    return;
                }
                if (this.maximumBoundaryInternal === undefined || eventTime > this.maximumBoundaryInternal) {
                    this.maximumBoundaryInternal = eventTime;
                    this.boundaryChanged();
                }
            }
        },
        {
            key: "computeBarGraphLabels",
            value: function computeBarGraphLabels(request) {
                var rightLabel = '';
                if (request.responseReceivedTime !== -1 && request.endTime !== -1) {
                    rightLabel = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(request.endTime - request.responseReceivedTime);
                }
                var hasLatency = request.latency > 0;
                var leftLabel = hasLatency ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(request.latency) : rightLabel;
                if (request.timing) {
                    return {
                        left: leftLabel,
                        right: rightLabel,
                        tooltip: undefined
                    };
                }
                var tooltip;
                if (hasLatency && rightLabel) {
                    var total = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(request.duration);
                    tooltip = i18nString(UIStrings.sLatencySDownloadSTotal, {
                        PH1: leftLabel,
                        PH2: rightLabel,
                        PH3: total
                    });
                } else if (hasLatency) {
                    tooltip = i18nString(UIStrings.sLatency, {
                        PH1: leftLabel
                    });
                } else if (rightLabel) {
                    tooltip = i18nString(UIStrings.sDownload, {
                        PH1: rightLabel
                    });
                }
                if (request.fetchedViaServiceWorker) {
                    tooltip = i18nString(UIStrings.sFromServiceworker, {
                        PH1: String(tooltip)
                    });
                } else if (request.cached()) {
                    tooltip = i18nString(UIStrings.sFromCache, {
                        PH1: String(tooltip)
                    });
                }
                return {
                    left: leftLabel,
                    right: rightLabel,
                    tooltip: tooltip
                };
            }
        },
        {
            key: "updateBoundaries",
            value: function updateBoundaries(request) {
                var lowerBound = this.lowerBound(request);
                var upperBound = this.upperBound(request);
                var changed = false;
                if (lowerBound !== -1 || this.startAtZero) {
                    changed = this.extendBoundariesToIncludeTimestamp(this.startAtZero ? 0 : lowerBound);
                }
                if (upperBound !== -1) {
                    changed = this.extendBoundariesToIncludeTimestamp(upperBound) || changed;
                }
                if (changed) {
                    this.boundaryChanged();
                }
            }
        },
        {
            key: "extendBoundariesToIncludeTimestamp",
            value: function extendBoundariesToIncludeTimestamp(timestamp) {
                var previousMinimumBoundary = this.minimumBoundaryInternal;
                var previousMaximumBoundary = this.maximumBoundaryInternal;
                var minOffset = MINIMUM_SPREAD;
                if (this.minimumBoundaryInternal === -1 || this.maximumBoundaryInternal === -1) {
                    this.minimumBoundaryInternal = timestamp;
                    this.maximumBoundaryInternal = timestamp + minOffset;
                } else {
                    this.minimumBoundaryInternal = Math.min(timestamp, this.minimumBoundaryInternal);
                    this.maximumBoundaryInternal = Math.max(timestamp, this.minimumBoundaryInternal + minOffset, this.maximumBoundaryInternal);
                }
                return previousMinimumBoundary !== this.minimumBoundaryInternal || previousMaximumBoundary !== this.maximumBoundaryInternal;
            }
        },
        {
            key: "lowerBound",
            value: function lowerBound(_request) {
                return 0;
            }
        },
        {
            key: "upperBound",
            value: function upperBound(_request) {
                return 0;
            }
        }
    ]);
    return NetworkTimeCalculator;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var MINIMUM_SPREAD = 0.1;
var NetworkTransferTimeCalculator = /*#__PURE__*/ function(NetworkTimeCalculator) {
    "use strict";
    _inherits(NetworkTransferTimeCalculator, NetworkTimeCalculator);
    var _super = _create_super(NetworkTransferTimeCalculator);
    function NetworkTransferTimeCalculator() {
        _class_call_check(this, NetworkTransferTimeCalculator);
        return _super.call(this, false);
    }
    _create_class(NetworkTransferTimeCalculator, [
        {
            key: "formatValue",
            value: function formatValue(value, precision) {
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(value - this.zeroTime(), Boolean(precision));
            }
        },
        {
            key: "lowerBound",
            value: function lowerBound(request) {
                return request.issueTime();
            }
        },
        {
            key: "upperBound",
            value: function upperBound(request) {
                return request.endTime;
            }
        }
    ]);
    return NetworkTransferTimeCalculator;
}(NetworkTimeCalculator);
var NetworkTransferDurationCalculator = /*#__PURE__*/ function(NetworkTimeCalculator) {
    "use strict";
    _inherits(NetworkTransferDurationCalculator, NetworkTimeCalculator);
    var _super = _create_super(NetworkTransferDurationCalculator);
    function NetworkTransferDurationCalculator() {
        _class_call_check(this, NetworkTransferDurationCalculator);
        return _super.call(this, true);
    }
    _create_class(NetworkTransferDurationCalculator, [
        {
            key: "formatValue",
            value: function formatValue(value, precision) {
                return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(value, Boolean(precision));
            }
        },
        {
            key: "upperBound",
            value: function upperBound(request) {
                return request.duration;
            }
        }
    ]);
    return NetworkTransferDurationCalculator;
} //# sourceMappingURL=NetworkTimeCalculator.js.map
(NetworkTimeCalculator);


}),

}]);