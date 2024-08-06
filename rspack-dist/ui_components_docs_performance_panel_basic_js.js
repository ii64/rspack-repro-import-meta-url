"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_performance_panel_basic_js"], {
"./ui/components/docs/performance_panel/basic.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
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









/**
 * Because the panel is not quite as isolated as other components we have to
 * do a bit of setup globally to ensure the panel can render, primarily creating
 * some actions and settings. We also have to instantiate some instances which
 * would usually be setup in MainImpl when running DevTools, but we can set them
 * up here rather than pull in all of the setup from elsewhere. Over time we
 * should look to reduce this global setup and pass data into the panel.
 **/ await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_6__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_8__.ComponentServerSetup.setup();
var resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceMapping.ResourceMapping(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance(), _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance());
_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
    forceNew: true,
    resourceMapping: resourceMapping,
    targetManager: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance()
});
_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.IgnoreListManager.IgnoreListManager.instance({
    forceNew: true,
    debuggerWorkspaceBinding: _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance()
});
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CPUThrottlingManager.CPUThrottlingManager.instance().setHardwareConcurrency(128);
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.record-reload',
    iconClass: "refresh" /* UI.ActionRegistration.IconClass.REFRESH */ ,
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
    contextTypes: function contextTypes() {
        return [
            _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel
        ];
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */ ,
            shortcut: 'Ctrl+Shift+E'
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */ ,
            shortcut: 'Meta+Shift+E'
        }
    ]
});
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.show-history',
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
    contextTypes: function contextTypes() {
        return [
            _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel
        ];
    },
    loadActionDelegate: function loadActionDelegate() {
        return _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    new _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.ActionDelegate()
                ];
            });
        })();
    }
});
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'components.collect-garbage',
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
    iconClass: "mop" /* UI.ActionRegistration.IconClass.MOP */ 
});
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistration.registerActionExtension({
    actionId: 'timeline.toggle-recording',
    title: function() {
        return 'Toggle recording';
    },
    toggleable: true,
    category: "PERFORMANCE" /* UI.ActionRegistration.ActionCategory.PERFORMANCE */ ,
    iconClass: "record-start" /* UI.ActionRegistration.IconClass.START_RECORDING */ ,
    contextTypes: function contextTypes() {
        return [
            _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel
        ];
    },
    bindings: [
        {
            platform: "windows,linux" /* UI.ActionRegistration.Platforms.WindowsLinux */ ,
            shortcut: 'Ctrl+E'
        },
        {
            platform: "mac" /* UI.ActionRegistration.Platforms.Mac */ ,
            shortcut: 'Meta+E'
        }
    ]
});
var actionRegistry = _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance();
_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ShortcutRegistry.ShortcutRegistry.instance({
    forceNew: true,
    actionRegistry: actionRegistry
});
_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.settingForTest('flamechart-mouse-wheel-action').set('zoom');
var params = new URLSearchParams(window.location.search);
var traceFileName = params.get('trace');
var cpuprofileName = params.get('cpuprofile');
var traceUrl = params.get('loadTimelineFromURL');
var nodeMode = params.get('isNode');
var isNodeMode = nodeMode === 'true' ? true : false;
_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.setEnabled('timeline-invalidation-tracking', params.has('invalidations'));
var timeline = _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_5__.TimelinePanel.TimelinePanel.instance({
    forceNew: true,
    isNode: isNodeMode
});
var container = document.getElementById('container');
if (!container) {
    throw new Error('could not find container');
}
container.innerHTML = '';
timeline.markAsRoot();
timeline.show(container);
window.addEventListener('resize', function() {
    return timeline.doResize();
});
var fileName;
if (traceFileName) {
    fileName = "".concat(traceFileName, ".json.gz");
} else if (cpuprofileName) {
    fileName = "".concat(cpuprofileName, ".cpuprofile.gz");
} else if (traceUrl) {
    fileName = traceUrl;
}
if (fileName) {
    await loadFromFile(fileName);
}
function loadFromFile(fileNameWithExtension) {
    return _loadFromFile.apply(this, arguments);
}
function _loadFromFile() {
    _loadFromFile = _async_to_generator(function(fileNameWithExtension) {
        var file, response, asBlob, asFile;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // Load from fixture/traces if its a bare filename, but if it's a complete URL, use that.
                    file = new URL(fileNameWithExtension, new URL(/* asset import */__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../panels/timeline/fixtures/traces/'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), __webpack_require__.b));
                    return [
                        4,
                        fetch(file)
                    ];
                case 1:
                    response = _state.sent();
                    return [
                        4,
                        response.blob()
                    ];
                case 2:
                    asBlob = _state.sent();
                    asFile = new File([
                        asBlob
                    ], fileNameWithExtension, {
                        type: asBlob.type
                    });
                    return [
                        4,
                        timeline.loadFromFile(asFile)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _loadFromFile.apply(this, arguments);
}
// @ts-expect-error
window.loadFromFile = loadFromFile; //# sourceMappingURL=basic.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);