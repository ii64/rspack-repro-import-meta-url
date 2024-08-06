"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_live-metrics_web-vitals-injected_web-vitals-injected_js"], {
"./models/live-metrics/web-vitals-injected/OnEachInteraction.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  onEachInteraction: function() { return onEachInteraction; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function onEachInteraction(callback) {
    var eventObserver = new PerformanceObserver(function(list) {
        var entries = list.getEntries();
        var interactions = new Map();
        var performanceEventTimings = entries.filter(function(entry) {
            return 'interactionId' in entry;
        }).filter(function(entry) {
            return entry.interactionId;
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = performanceEventTimings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var entry = _step.value;
                var interaction = interactions.get(entry.interactionId) || [];
                interaction.push(entry);
                interactions.set(entry.interactionId, interaction);
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
            // Will report as a single interaction even if parts are in separate frames.
            // Consider splitting by animation frame.
            for(var _iterator1 = interactions.entries()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var _step_value = _sliced_to_array(_step1.value, 2), interactionId = _step_value[0], interaction1 = _step_value[1];
                var longestEntry = interaction1.reduce(function(prev, curr) {
                    return prev.duration >= curr.duration ? prev : curr;
                });
                var value = longestEntry.duration;
                var firstEntryWithTarget = interaction1.find(function(entry) {
                    return entry.target;
                });
                var _firstEntryWithTarget_target;
                callback({
                    attribution: {
                        interactionTargetElement: (_firstEntryWithTarget_target = firstEntryWithTarget === null || firstEntryWithTarget === void 0 ? void 0 : firstEntryWithTarget.target) !== null && _firstEntryWithTarget_target !== void 0 ? _firstEntryWithTarget_target : null,
                        interactionTime: longestEntry.startTime,
                        interactionType: longestEntry.name.startsWith('key') ? 'keyboard' : 'pointer',
                        interactionId: interactionId
                    },
                    entries: interaction1,
                    value: value
                });
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
    });
    eventObserver.observe({
        type: 'first-input',
        buffered: true
    });
    eventObserver.observe({
        type: 'event',
        durationThreshold: 0,
        buffered: true
    });
} //# sourceMappingURL=OnEachInteraction.js.map


}),
"./models/live-metrics/web-vitals-injected/web-vitals-injected.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _third_party_web_vitals_web_vitals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../third_party/web-vitals/web-vitals.js */ "./third_party/web-vitals/web-vitals.js");
/* harmony import */var _OnEachInteraction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OnEachInteraction.js */ "./models/live-metrics/web-vitals-injected/OnEachInteraction.js");
/* harmony import */var _spec_spec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spec/spec.js */ "./models/live-metrics/web-vitals-injected/spec/spec.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



var _WebVitals_Attribution = _third_party_web_vitals_web_vitals_js__WEBPACK_IMPORTED_MODULE_0__.Attribution, onLCP = _WebVitals_Attribution.onLCP, onCLS = _WebVitals_Attribution.onCLS, onINP = _WebVitals_Attribution.onINP;
var onEachInteraction = _OnEachInteraction_js__WEBPACK_IMPORTED_MODULE_1__.onEachInteraction;
function sendEventToDevTools(event) {
    var payload = JSON.stringify(event);
    window[_spec_spec_js__WEBPACK_IMPORTED_MODULE_2__.EVENT_BINDING_NAME](payload);
}
var nodeList = [];
function establishNodeIndex(node) {
    var index = nodeList.length;
    nodeList.push(node);
    return index;
}
/**
 * The data sent over the event binding needs to be JSON serializable, so we
 * can't send DOM nodes directly. Instead we create an ID for each node (see
 * `establishNodeIndex`) that we can later use to retrieve a remote object
 * for that node.
 *
 * This function is used by `Runtime.evaluate` calls to get a remote object
 * for the specified index.
 */ window.getNodeForIndex = function(index) {
    return nodeList[index];
};
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
function initialize() {
    // `Page.addScriptToEvaluateOnNewDocument` will create a script that runs
    // in all frames. We only want metrics from the main frame so the filter
    // has to be here.
    if (inIframe()) {
        return;
    }
    sendEventToDevTools({
        name: 'reset'
    });
    // We want to treat bfcache navigations like a standard navigations, so emit
    // a reset event when bfcache is restored.
    //
    // Metric functions will also re-emit their values using this listener's callback.
    // To ensure this event is fired before those values are emitted, register this
    // callback before any others.
    _third_party_web_vitals_web_vitals_js__WEBPACK_IMPORTED_MODULE_0__.onBFCacheRestore(function() {
        sendEventToDevTools({
            name: 'reset'
        });
    });
    onLCP(function(metric) {
        var _metric_attribution_lcpEntry;
        var event = {
            name: 'LCP',
            value: metric.value
        };
        var element = (_metric_attribution_lcpEntry = metric.attribution.lcpEntry) === null || _metric_attribution_lcpEntry === void 0 ? void 0 : _metric_attribution_lcpEntry.element;
        if (element) {
            event.nodeIndex = establishNodeIndex(element);
        }
        sendEventToDevTools(event);
    }, {
        reportAllChanges: true
    });
    onCLS(function(metric) {
        var event = {
            name: 'CLS',
            value: metric.value
        };
        sendEventToDevTools(event);
    }, {
        reportAllChanges: true
    });
    onINP(function(metric) {
        var event = {
            name: 'INP',
            value: metric.value,
            interactionType: metric.attribution.interactionType
        };
        var element = metric.attribution.interactionTargetElement;
        if (element) {
            event.nodeIndex = establishNodeIndex(element);
        }
        sendEventToDevTools(event);
    }, {
        reportAllChanges: true
    });
    onEachInteraction(function(interaction) {
        var event = {
            name: 'Interaction',
            duration: interaction.value,
            interactionId: interaction.attribution.interactionId,
            interactionType: interaction.attribution.interactionType
        };
        var node = interaction.attribution.interactionTargetElement;
        if (node) {
            event.nodeIndex = establishNodeIndex(node);
        }
        sendEventToDevTools(event);
    });
}
initialize(); //# sourceMappingURL=web-vitals-injected.js.map


}),
"./third_party/web-vitals/package/dist/modules/deprecated.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FIDThresholds: function() { return /* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.FIDThresholds; },
  onFID: function() { return /* reexport safe */ _onFID_js__WEBPACK_IMPORTED_MODULE_0__.onFID; }
});
/* harmony import */var _onFID_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onFID.js */ "./third_party/web-vitals/package/dist/modules/onFID.js");
/*
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 


}),
"./third_party/web-vitals/package/dist/modules/index.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CLSThresholds: function() { return /* reexport safe */ _onCLS_js__WEBPACK_IMPORTED_MODULE_0__.CLSThresholds; },
  FCPThresholds: function() { return /* reexport safe */ _onFCP_js__WEBPACK_IMPORTED_MODULE_1__.FCPThresholds; },
  FIDThresholds: function() { return /* reexport safe */ _deprecated_js__WEBPACK_IMPORTED_MODULE_5__.FIDThresholds; },
  INPThresholds: function() { return /* reexport safe */ _onINP_js__WEBPACK_IMPORTED_MODULE_2__.INPThresholds; },
  LCPThresholds: function() { return /* reexport safe */ _onLCP_js__WEBPACK_IMPORTED_MODULE_3__.LCPThresholds; },
  TTFBThresholds: function() { return /* reexport safe */ _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__.TTFBThresholds; },
  onCLS: function() { return /* reexport safe */ _onCLS_js__WEBPACK_IMPORTED_MODULE_0__.onCLS; },
  onFCP: function() { return /* reexport safe */ _onFCP_js__WEBPACK_IMPORTED_MODULE_1__.onFCP; },
  onFID: function() { return /* reexport safe */ _deprecated_js__WEBPACK_IMPORTED_MODULE_5__.onFID; },
  onINP: function() { return /* reexport safe */ _onINP_js__WEBPACK_IMPORTED_MODULE_2__.onINP; },
  onLCP: function() { return /* reexport safe */ _onLCP_js__WEBPACK_IMPORTED_MODULE_3__.onLCP; },
  onTTFB: function() { return /* reexport safe */ _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__.onTTFB; }
});
/* harmony import */var _onCLS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onCLS.js */ "./third_party/web-vitals/package/dist/modules/onCLS.js");
/* harmony import */var _onFCP_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onFCP.js */ "./third_party/web-vitals/package/dist/modules/onFCP.js");
/* harmony import */var _onINP_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onINP.js */ "./third_party/web-vitals/package/dist/modules/onINP.js");
/* harmony import */var _onLCP_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./onLCP.js */ "./third_party/web-vitals/package/dist/modules/onLCP.js");
/* harmony import */var _onTTFB_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onTTFB.js */ "./third_party/web-vitals/package/dist/modules/onTTFB.js");
/* harmony import */var _deprecated_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated.js */ "./third_party/web-vitals/package/dist/modules/deprecated.js");
/* harmony import */var _types_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types.js */ "./third_party/web-vitals/package/dist/modules/types.js");
/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ 








}),
"./third_party/web-vitals/web-vitals.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Attribution: function() { return /* reexport module object */ _package_dist_modules_attribution_index_js__WEBPACK_IMPORTED_MODULE_1__; },
  CLSThresholds: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.CLSThresholds; },
  FCPThresholds: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.FCPThresholds; },
  FIDThresholds: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.FIDThresholds; },
  INPThresholds: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.INPThresholds; },
  LCPThresholds: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.LCPThresholds; },
  TTFBThresholds: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.TTFBThresholds; },
  onBFCacheRestore: function() { return /* reexport safe */ _package_dist_modules_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__.onBFCacheRestore; },
  onCLS: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onCLS; },
  onFCP: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onFCP; },
  onFID: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onFID; },
  onINP: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onINP; },
  onLCP: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onLCP; },
  onTTFB: function() { return /* reexport safe */ _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__.onTTFB; }
});
/* harmony import */var _package_dist_modules_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./package/dist/modules/index.js */ "./third_party/web-vitals/package/dist/modules/index.js");
/* harmony import */var _package_dist_modules_attribution_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package/dist/modules/attribution/index.js */ "./third_party/web-vitals/package/dist/modules/attribution/index.js");
/* harmony import */var _package_dist_modules_lib_bfcache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./package/dist/modules/lib/bfcache.js */ "./third_party/web-vitals/package/dist/modules/lib/bfcache.js");



 //# sourceMappingURL=web-vitals.js.map


}),

}]);