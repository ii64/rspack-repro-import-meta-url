"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_recorder_recording_view_basic_js"], {
"./ui/components/docs/recorder_recording_view/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */var _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../panels/recorder/components/components.js */ "./panels/recorder/components/components.js");
/* harmony import */var _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../panels/recorder/models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
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
var _document_getElementById;



 // eslint-disable-line rulesdir/es_modules_import
await Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/components/helpers/helpers.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.initializeGlobalVars();
function initializeGlobalActions() {
    return _initializeGlobalActions.apply(this, arguments);
}
function _initializeGlobalActions() {
    _initializeGlobalActions = _async_to_generator(function() {
        var UI, actionRegistry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.resolve().then(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../front_end/ui/legacy/legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; })
                    ];
                case 1:
                    UI = _state.sent();
                    actionRegistry = UI.ActionRegistry.ActionRegistry.instance();
                    UI.ShortcutRegistry.ShortcutRegistry.instance({
                        forceNew: true,
                        actionRegistry: actionRegistry
                    });
                    return [
                        2
                    ];
            }
        });
    });
    return _initializeGlobalActions.apply(this, arguments);
}
await initializeGlobalActions();
var recording = {
    title: 'Test',
    steps: [
        {
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Navigate,
            url: 'http://example.com'
        },
        {
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            target: 'main',
            selectors: [
                [
                    '.click'
                ]
            ],
            offsetX: 1,
            offsetY: 2,
            assertedEvents: [
                {
                    type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.AssertedEventType.Navigation,
                    title: 'Test',
                    url: 'http://example.com/2'
                }
            ]
        },
        {
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.Click,
            target: 'main',
            selectors: [
                [
                    '.click2'
                ]
            ],
            offsetX: 3,
            offsetY: 4
        }
    ]
};
var data = {
    replayState: {
        isPlaying: false,
        isPausedOnBreakpoint: false
    },
    isRecording: false,
    recordingTogglingInProgress: false,
    replayAllowed: true,
    recording: recording,
    breakpointIndexes: new Set(),
    sections: [
        {
            title: 'Section title',
            url: 'http://example.com',
            steps: [
                recording.steps[1]
            ],
            causingStep: recording.steps[0]
        },
        {
            title: 'Section title 2',
            url: 'http://example.com/2',
            steps: [
                recording.steps[2]
            ],
            causingStep: recording.steps[1]
        }
    ],
    settings: {
        networkConditionsSettings: {
            download: 3000,
            upload: 3000,
            latency: 3000,
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.EmulateNetworkConditions
        },
        viewportSettings: {
            deviceScaleFactor: 1,
            hasTouch: false,
            height: 800,
            width: 600,
            isLandscape: false,
            isMobile: false,
            type: _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.Schema.StepType.SetViewport
        }
    },
    builtInConverters: [],
    extensionConverters: [],
    recorderSettings: new _panels_recorder_models_models_js__WEBPACK_IMPORTED_MODULE_2__.RecorderSettings.RecorderSettings(),
    replayExtensions: []
};
var component1 = new _panels_recorder_components_components_js__WEBPACK_IMPORTED_MODULE_1__.RecordingView.RecordingView();
component1.data = data;
(_document_getElementById = document.getElementById('container')) === null || _document_getElementById === void 0 ? void 0 : _document_getElementById.appendChild(component1); //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);