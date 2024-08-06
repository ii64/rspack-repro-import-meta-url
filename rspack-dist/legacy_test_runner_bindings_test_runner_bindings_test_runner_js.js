"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_bindings_test_runner_bindings_test_runner_js"], {
"./legacy_test_runner/bindings_test_runner/AutomappingTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AutomappingTest: function() { return AutomappingTest; },
  addFiles: function() { return addFiles; },
  overrideNetworkModificationTime: function() { return overrideNetworkModificationTime; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var addFiles = function addFiles(testFileSystem, files) {
    for(var filePath in files){
        var file = files[filePath];
        testFileSystem.addFile(filePath, file.content, file.time ? file.time.getTime() : 0);
    }
};
var timeOverrides;
var originalRequestMetadata;
var overrideNetworkModificationTime = function overrideNetworkModificationTime(urlToTime) {
    if (!timeOverrides) {
        timeOverrides = new Map();
        originalRequestMetadata = TestRunner.override(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ContentProviderBasedProject.ContentProviderBasedProject.prototype, 'requestMetadata', overrideTime, true);
    }
    for(var url in urlToTime){
        timeOverrides.set(url, urlToTime[url]);
    }
    function overrideTime(uiSourceCode) {
        if (!timeOverrides.has(uiSourceCode.url())) {
            return originalRequestMetadata.call(this, uiSourceCode);
        }
        var override = timeOverrides.get(uiSourceCode.url());
        return originalRequestMetadata.call(this, uiSourceCode).then(onOriginalMetadata.bind(null, override));
    }
    function onOriginalMetadata(timeOverride, metadata) {
        if (!timeOverride && !metadata) {
            return null;
        }
        return new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UISourceCodeMetadata(timeOverride, metadata ? metadata.contentSize : null);
    }
};
var AutomappingTest = function AutomappingTest(workspace) {
    this.workspace = workspace;
    this.networkProject = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ContentProviderBasedProject.ContentProviderBasedProject(this.workspace, 'AUTOMAPPING', _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.Network, 'simple website');
    if (workspace !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance()) {
        new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance(), this.workspace);
    }
    this.failedBindingsCount = 0;
    this.automapping = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.Automapping.Automapping(this.workspace, this._onStatusAdded.bind(this), this._onStatusRemoved.bind(this));
    TestRunner.addSniffer(this.automapping, 'onBindingFailedForTest', this._onBindingFailed.bind(this), true);
    TestRunner.addSniffer(this.automapping, 'onSweepHappenedForTest', this._onSweepHappened.bind(this), true);
};
AutomappingTest.prototype = {
    removeResources: function removeResources(urls) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var url = _step.value;
                this.networkProject.removeUISourceCode(url);
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
    },
    addNetworkResources: function addNetworkResources(assets) {
        for(var url in assets){
            var asset = assets[url];
            var contentType = asset.contentType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script;
            var contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.StaticContentProvider.StaticContentProvider.fromString(url, contentType, asset.content);
            var metadata = typeof asset.content === 'string' || asset.time ? new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UISourceCodeMetadata(asset.time, asset.content.length) : null;
            var uiSourceCode = this.networkProject.createUISourceCode(url, contentType);
            this.networkProject.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata);
        }
    },
    waitUntilMappingIsStabilized: function waitUntilMappingIsStabilized() {
        var _this = this;
        var promise = new Promise(function(x) {
            _this.stabilizedCallback = x;
        });
        this._checkStabilized();
        return promise;
    },
    _onSweepHappened: function _onSweepHappened() {
        this.failedBindingsCount = 0;
        this._checkStabilized();
    },
    _onStatusRemoved: function _onStatusRemoved(status) {
        TestRunner.addResult('Binding removed: ' + status);
        this._checkStabilized();
    },
    _onStatusAdded: function _onStatusAdded(status) {
        TestRunner.addResult('Binding created: ' + status);
        this._checkStabilized();
    },
    _onBindingFailed: function _onBindingFailed() {
        ++this.failedBindingsCount;
        this._checkStabilized();
    },
    _checkStabilized: function _checkStabilized() {
        if (!this.stabilizedCallback || this.automapping.sweepThrottler.process) {
            return;
        }
        var networkUISourceCodes = this.workspace.uiSourceCodesForProjectType(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.Network);
        var stabilized = this.failedBindingsCount + this.automapping.statuses.size === networkUISourceCodes.length;
        if (stabilized) {
            TestRunner.addResult('Mapping has stabilized.');
            var callback = this.stabilizedCallback;
            delete this.stabilizedCallback;
            callback.call(null);
        }
    }
};


}),
"./legacy_test_runner/bindings_test_runner/OverridesTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createOverrideProject: function() { return createOverrideProject; },
  setOverridesEnabled: function() { return setOverridesEnabled; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IsolatedFilesystemTestRunner.js */ "./legacy_test_runner/bindings_test_runner/IsolatedFilesystemTestRunner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
 * @param {string} folderPath
 * @return {!Promise<!{isolatedFileSystem: !Persistence.IsolatedFileSystem.IsolatedFileSystem, project: !Workspace.Workspace.Project, testFileSystem: !BindingsTestRunner.TestFileSystem}>}
 */ var createOverrideProject = function() {
    var _ref = _async_to_generator(function(folderPath) {
        var testFileSystem, isolatedFileSystem, project;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    testFileSystem = new _IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_3__.TestFileSystem(folderPath);
                    return [
                        4,
                        testFileSystem.reportCreatedPromise('overrides')
                    ];
                case 1:
                    isolatedFileSystem = _state.sent();
                    isolatedFileSystem.typeInternal = 'overrides';
                    project = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance().project(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_1__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.projectId(isolatedFileSystem.path()));
                    console.assert(project);
                    return [
                        2,
                        {
                            isolatedFileSystem: isolatedFileSystem,
                            project: project,
                            testFileSystem: testFileSystem
                        }
                    ];
            }
        });
    });
    return function createOverrideProject(folderPath) {
        return _ref.apply(this, arguments);
    };
}();
/**
 * @param {boolean} enabled
 */ var setOverridesEnabled = function setOverridesEnabled(enabled) {
    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('persistence-network-overrides-enabled').set(enabled);
};


}),
"./legacy_test_runner/bindings_test_runner/bindings_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BindingsTestRunner: function() { return BindingsTestRunner; }
});
/* harmony import */var _AutomappingTestRunner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutomappingTestRunner.js */ "./legacy_test_runner/bindings_test_runner/AutomappingTestRunner.js");
/* harmony import */var _BindingsTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BindingsTestRunner.js */ "./legacy_test_runner/bindings_test_runner/BindingsTestRunner.js");
/* harmony import */var _IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IsolatedFilesystemTestRunner.js */ "./legacy_test_runner/bindings_test_runner/IsolatedFilesystemTestRunner.js");
/* harmony import */var _OverridesTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverridesTestRunner.js */ "./legacy_test_runner/bindings_test_runner/OverridesTestRunner.js");
/* harmony import */var _PersistenceTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PersistenceTestRunner.js */ "./legacy_test_runner/bindings_test_runner/PersistenceTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}





var BindingsTestRunner = _object_spread({}, _BindingsTestRunner_js__WEBPACK_IMPORTED_MODULE_1__, _IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_2__, _AutomappingTestRunner_js__WEBPACK_IMPORTED_MODULE_0__, _PersistenceTestRunner_js__WEBPACK_IMPORTED_MODULE_4__, _OverridesTestRunner_js__WEBPACK_IMPORTED_MODULE_3__);


}),

}]);