"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_live-metrics_web-vitals-injected_OnEachInteraction_js"], {
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

}]);