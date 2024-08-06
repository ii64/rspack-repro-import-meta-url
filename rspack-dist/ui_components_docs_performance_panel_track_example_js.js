"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_performance_panel_track_example_js"], {
"./ui/components/docs/performance_panel/track_example.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
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







await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ComponentServerSetup.setup();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_4__.initializeGlobalVars();
var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance({
    forceNew: true
});
var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({
    forceNew: true
});
var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
var debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
    forceNew: true,
    resourceMapping: resourceMapping,
    targetManager: targetManager
});
_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
    forceNew: true,
    debuggerWorkspaceBinding: debuggerWorkspaceBinding
});
var params = new URLSearchParams(window.location.search);
var track = params.get('track');
var fileName = params.get('fileName');
var expanded = params.get('expanded');
var darkMode = params.get('darkMode');
var additionalTrackFilter = params.get('trackFilter') || undefined;
var customStartWindowTime = params.get('windowStart');
var customEndWindowTime = params.get('windowEnd');
var p = document.createElement('p');
// Expand the track by default for test.
await renderContent(expanded === 'false' ? false : true);
function renderContent(expanded) {
    return _renderContent.apply(this, arguments);
}
function _renderContent() {
    _renderContent = _async_to_generator(function(expanded) {
        var container, file, flameChartData, trackAppenderName, flameChart, dataProvider, timingsTrackOffset, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    if (darkMode) {
                        document.documentElement.classList.add('theme-with-dark-background');
                    }
                    container = document.getElementById('container');
                    if (!container) {
                        throw new Error('could not find container');
                    }
                    container.appendChild(p);
                    if (!track || !fileName) {
                        document.title = 'Performance panel track example';
                        p.innerText = 'Use the `track` and `fileName` URL search params to load a track example (f.e. track_example.html?track=Timings&fileName=timings-track)';
                        return [
                            2
                        ];
                    }
                    file = "".concat(fileName, ".json.gz");
                    document.title = "Performance panel ".concat(track, " track");
                    p.innerText = "".concat(track, " track is loading");
                    p.classList.add('loading');
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        7,
                        ,
                        8
                    ]);
                    if (!_panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_3__.CompatibilityTracksAppender.TrackNames.includes(track)) return [
                        3,
                        3
                    ];
                    trackAppenderName = track;
                    return [
                        4,
                        _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getMainFlameChartWithTracks(file, new Set([
                            trackAppenderName
                        ]), expanded, additionalTrackFilter)
                    ];
                case 2:
                    flameChartData = _state.sent();
                    return [
                        3,
                        6
                    ];
                case 3:
                    if (!(track === 'Network')) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_5__.getNetworkFlameChart(file, expanded)
                    ];
                case 4:
                    flameChartData = _state.sent();
                    return [
                        3,
                        6
                    ];
                case 5:
                    p.classList.remove('loading');
                    p.innerText = "Invalid track name: ".concat(track);
                    return [
                        2
                    ];
                case 6:
                    container.innerHTML = '';
                    flameChart = flameChartData.flameChart, dataProvider = flameChartData.dataProvider;
                    timingsTrackOffset = flameChart.levelToOffset(dataProvider.maxStackDepth());
                    container.style.height = "".concat(timingsTrackOffset, "px");
                    if (customStartWindowTime && customEndWindowTime) {
                        flameChart.setWindowTimes(Number(customStartWindowTime), Number(customEndWindowTime), false);
                    }
                    flameChart.show(container);
                    return [
                        3,
                        8
                    ];
                case 7:
                    error = _state.sent();
                    p.classList.remove('loading');
                    p.innerText = error;
                    console.error(error);
                    return [
                        3,
                        8
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    } //# sourceMappingURL=track_example.js.map
    );
    return _renderContent.apply(this, arguments);
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);