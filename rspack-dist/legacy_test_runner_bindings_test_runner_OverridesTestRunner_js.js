"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_bindings_test_runner_OverridesTestRunner_js"], {
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

}]);