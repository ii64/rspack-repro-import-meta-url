"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_SourceMapHelpers_js"], {
"./testing/SourceMapHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  loadBasicSourceMapExample: function() { return loadBasicSourceMapExample; },
  setupPageResourceLoaderForSourceMap: function() { return setupPageResourceLoaderForSourceMap; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MockConnection.js */ "./testing/MockConnection.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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




function setupPageResourceLoaderForSourceMap(sourceMapContent) {
    var loadSourceMap = function() {
        var _ref = _async_to_generator(function(_url) {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    {
                        success: true,
                        content: sourceMapContent,
                        errorDescription: {
                            message: '',
                            statusCode: 0,
                            netError: 0,
                            netErrorName: '',
                            urlValid: true
                        }
                    }
                ];
            });
        });
        return function loadSourceMap(_url) {
            return _ref.apply(this, arguments);
        };
    }();
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({
        forceNew: true,
        loadOverride: loadSourceMap,
        maxConcurrentLoads: 1
    });
}
function loadBasicSourceMapExample(target) {
    return _loadBasicSourceMapExample.apply(this, arguments);
} //# sourceMappingURL=SourceMapHelpers.js.map
function _loadBasicSourceMapExample() {
    _loadBasicSourceMapExample = _async_to_generator(function(target) {
        var _SCRIPT_SOURCE_match, SCRIPT_ID, SCRIPT_URL, SCRIPT_SOURCE, SOURCE_MAP, SOURCE_MAP_URL, workspace, targetManager, resourceMapping, debuggerWorkspaceBinding, debuggerModel, sourceMapAttachedCallback, sourceMapAttachedPromise, _SCRIPT_SOURCE_match_length, script, sourceMap;
        function getScriptSourceHandler(_) {
            return {
                scriptSource: SCRIPT_SOURCE
            };
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    SCRIPT_ID = '25';
                    SCRIPT_URL = 'file://main.js';
                    // Generated with:
                    // `terser main.js --mangle --toplevel  --output gen.js  --source-map url='gen.js.map'` v5.15.0
                    SCRIPT_SOURCE = 'function n(){o("hi");console.log("done")}function o(n){const o=performance.now();while(performance.now()-o<n);}n();o(200);\n//# sourceMappingURL=gen.js.map';
                    SOURCE_MAP = {
                        version: 3,
                        names: [
                            'sayHi',
                            'someFunction',
                            'console',
                            'log',
                            'breakDuration',
                            'started',
                            'performance',
                            'now'
                        ],
                        sources: [
                            'main.js'
                        ],
                        mappings: 'AAAA,SAASA,IACLC,EAAW,MACXC,QAAQC,IAAI,OAChB,CAEA,SAASF,EAAWG,GAChB,MAAMC,EAAUC,YAAYC,MAC5B,MAAQD,YAAYC,MAAQF,EAAWD,GAC3C,CAEAJ,IACAC,EAAW'
                    };
                    SOURCE_MAP_URL = 'file://gen.js.map';
                    workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance();
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance();
                    resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceMapping.ResourceMapping(targetManager, workspace);
                    debuggerWorkspaceBinding = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                        forceNew: true,
                        resourceMapping: resourceMapping,
                        targetManager: targetManager
                    });
                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.IgnoreListManager.IgnoreListManager.instance({
                        forceNew: true,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: true,
                        loadOverride: function() {
                            var _ref = _async_to_generator(function(_) {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        {
                                            success: true,
                                            content: JSON.stringify(SOURCE_MAP),
                                            errorDescription: {
                                                message: '',
                                                statusCode: 0,
                                                netError: 0,
                                                netErrorName: '',
                                                urlValid: true
                                            }
                                        }
                                    ];
                                });
                            });
                            return function(_) {
                                return _ref.apply(this, arguments);
                            };
                        }(),
                        maxConcurrentLoads: 1
                    });
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
                    sourceMapAttachedCallback = function() {};
                    sourceMapAttachedPromise = new Promise(function(res) {
                        sourceMapAttachedCallback = res;
                    });
                    if (!debuggerModel) {
                        throw new Error('DebuggerModel was unexpectedly not found');
                    }
                    debuggerModel.sourceMapManager().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SourceMapManager.Events.SourceMapAttached, sourceMapAttachedCallback);
                    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('Debugger.getScriptSource', getScriptSourceHandler);
                    // Load the script and source map into the frontend.
                    (0,_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.dispatchEvent)(target, 'Debugger.scriptParsed', {
                        scriptId: SCRIPT_ID,
                        url: SCRIPT_URL,
                        startLine: 0,
                        startColumn: 0,
                        endLine: ((_SCRIPT_SOURCE_match_length = (_SCRIPT_SOURCE_match = SCRIPT_SOURCE.match(/^/gm)) === null || _SCRIPT_SOURCE_match === void 0 ? void 0 : _SCRIPT_SOURCE_match.length) !== null && _SCRIPT_SOURCE_match_length !== void 0 ? _SCRIPT_SOURCE_match_length : 1) - 1,
                        endColumn: SCRIPT_SOURCE.length - SCRIPT_SOURCE.lastIndexOf('\n') - 1,
                        executionContextId: 1,
                        hash: '',
                        hasSourceURL: false,
                        sourceMapURL: SOURCE_MAP_URL
                    });
                    return [
                        4,
                        sourceMapAttachedPromise
                    ];
                case 1:
                    _state.sent();
                    script = debuggerModel.scriptForId(String(SCRIPT_ID));
                    if (!script) {
                        throw new Error('Script could not be registered');
                    }
                    sourceMap = script.sourceMap();
                    if (!sourceMap) {
                        throw new Error('Source map could not be registered');
                    }
                    return [
                        2,
                        {
                            sourceMap: sourceMap,
                            script: script
                        }
                    ];
            }
        });
    });
    return _loadBasicSourceMapExample.apply(this, arguments);
}


}),

}]);