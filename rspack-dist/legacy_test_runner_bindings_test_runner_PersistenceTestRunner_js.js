"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_bindings_test_runner_PersistenceTestRunner_js"], {
"./legacy_test_runner/bindings_test_runner/PersistenceTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addFooJSFile: function() { return addFooJSFile; },
  initializeTestMapping: function() { return initializeTestMapping; },
  waitForBinding: function() { return waitForBinding; }
});
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
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
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceBinding.prototype.toString = function() {
    var lines = [
        '{',
        '       network: ' + this.network.url(),
        '    fileSystem: ' + this.fileSystem.url(),
        '}'
    ];
    return lines.join('\n');
};
_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Automapping.AutomappingStatus.prototype.toString = function() {
    var lines = [
        '{',
        '       network: ' + this.network.url(),
        '    fileSystem: ' + this.fileSystem.url(),
        '    exactMatch: ' + this.exactMatch,
        '}'
    ];
    return lines.join('\n');
};
var waitForBinding = function() {
    var _ref = _async_to_generator(function(fileName) {
        var uiSourceCodes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, uiSourceCode, binding;
        return _ts_generator(this, function(_state) {
            uiSourceCodes = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance().uiSourceCodes();
            _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(_iterator = uiSourceCodes[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    uiSourceCode = _step.value;
                    binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);
                    if (!binding) {
                        continue;
                    }
                    if (uiSourceCode.name() === fileName) {
                        return [
                            2,
                            binding
                        ];
                    }
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
            return [
                2,
                TestRunner.waitForEvent(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.Events.BindingCreated, _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceImpl.instance(), function(binding) {
                    return binding.network.name() === fileName || binding.fileSystem.name() === fileName;
                })
            ];
        });
    });
    return function waitForBinding(fileName) {
        return _ref.apply(this, arguments);
    };
}();
var addFooJSFile = function addFooJSFile(fs) {
    return fs.root.mkdir('devtools').mkdir('persistence').mkdir('resources').addFile('foo.js', '\n\nwindow.foo = ()=>\'foo\';\n');
};
var initializeTestMapping = function initializeTestMapping() {
    return new TestMapping(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceImpl.instance());
};
var TestMapping = /*#__PURE__*/ function() {
    "use strict";
    function TestMapping(persistence) {
        _class_call_check(this, TestMapping);
        this.persistence = persistence;
        persistence.addNetworkInterceptor(function() {
            return true;
        });
        this.bindings = new Set();
    }
    _create_class(TestMapping, [
        {
            key: "addBinding",
            value: function addBinding(urlSuffix) {
                var _this = this;
                return _async_to_generator(function() {
                    var networkUISourceCode, fileSystemUISourceCode, binding;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.findBinding(urlSuffix)) {
                                    TestRunner.addResult("FAILED TO ADD BINDING: binding already exists for ".concat(urlSuffix));
                                    TestRunner.completeTest();
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    TestRunner.waitForUISourceCode(urlSuffix, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Network)
                                ];
                            case 1:
                                networkUISourceCode = _state.sent();
                                return [
                                    4,
                                    TestRunner.waitForUISourceCode(urlSuffix, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.FileSystem)
                                ];
                            case 2:
                                fileSystemUISourceCode = _state.sent();
                                binding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceBinding(networkUISourceCode, fileSystemUISourceCode);
                                _this.bindings.add(binding);
                                return [
                                    4,
                                    _this.persistence.addBindingForTest(binding)
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "findBinding",
            value: function findBinding(urlSuffix) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.bindings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var binding = _step.value;
                        if (binding.network.url().endsWith(urlSuffix)) {
                            return binding;
                        }
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
                return null;
            }
        },
        {
            key: "removeBinding",
            value: function removeBinding(urlSuffix) {
                var _this = this;
                return _async_to_generator(function() {
                    var binding;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                binding = _this.findBinding(urlSuffix);
                                if (!binding) {
                                    TestRunner.addResult("FAILED TO REMOVE BINDING: binding does not exist for ".concat(urlSuffix));
                                    TestRunner.completeTest();
                                    return [
                                        2
                                    ];
                                }
                                _this.bindings.delete(binding);
                                return [
                                    4,
                                    _this.persistence.removeBindingForTest(binding)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, binding, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = _this.bindings[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                binding = _step.value;
                                return [
                                    4,
                                    _this.persistence.removeBindingForTest(binding)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                _this.bindings.clear();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return TestMapping;
}();


}),

}]);