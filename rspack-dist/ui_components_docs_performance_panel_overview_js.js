"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_performance_panel_overview_js"], {
"./ui/components/docs/performance_panel/overview.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/trace_bounds/trace_bounds.js */ "./services/trace_bounds/trace_bounds.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
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






await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_5__.ComponentServerSetup.setup();
var container = document.querySelector('div.container');
if (!container) {
    throw new Error('could not find container');
}
var params = new URLSearchParams(window.location.search);
var fileName = (params.get('trace') || 'web-dev') + '.json.gz';
var customStartWindowTime = params.get('windowStart');
var customEndWindowTime = params.get('windowEnd');
function renderMiniMap(containerSelector, options) {
    return _renderMiniMap.apply(this, arguments);
}
function _renderMiniMap() {
    _renderMiniMap = _async_to_generator(function(containerSelector, options) {
        var container, traceData, mainThread, minimap, zoomedWindow;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    container = document.querySelector(containerSelector);
                    if (!container) {
                        throw new Error('could not find container');
                    }
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_4__.TraceLoader.traceEngine(null, fileName)
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    mainThread = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Handlers.Threads.threadsInRenderer(traceData.Renderer, traceData.AuctionWorklets).find(function(t) {
                        return t.type === "MAIN_THREAD" /* TraceEngine.Handlers.Threads.ThreadType.MAIN_THREAD */ ;
                    });
                    if (!mainThread) {
                        throw new Error('Could not find main thread.');
                    }
                    minimap = new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.TimelineMiniMap.TimelineMiniMap();
                    minimap.markAsRoot();
                    minimap.show(container);
                    _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance().resetWithNewBounds(traceData.Meta.traceBounds);
                    zoomedWindow = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Extras.MainThreadActivity.calculateWindow(traceData.Meta.traceBounds, mainThread.entries);
                    _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance().setTimelineVisibleWindow(zoomedWindow);
                    minimap.setData({
                        traceParsedData: traceData,
                        settings: {
                            showMemory: options.showMemory,
                            showScreenshots: true
                        }
                    });
                    if (customStartWindowTime && customEndWindowTime) {
                        _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance().setTimelineVisibleWindow(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.traceWindowFromMilliSeconds(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(Number(customStartWindowTime)), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Timing.MilliSeconds(Number(customEndWindowTime))));
                    }
                    return [
                        2
                    ];
            }
        });
    });
    return _renderMiniMap.apply(this, arguments);
}
await renderMiniMap('.container', {
    showMemory: false
});
await renderMiniMap('.container-with-memory', {
    showMemory: true
}); //# sourceMappingURL=overview.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);