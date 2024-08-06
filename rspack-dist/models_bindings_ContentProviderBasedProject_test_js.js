"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_ContentProviderBasedProject_test_js"], {
"./models/bindings/ContentProviderBasedProject.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
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



describe('ContentProviderBasedProject', function() {
    beforeEach(function() {
        _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance({
            forceNew: true
        });
    });
    describe('findFilesMatchingSearchRequest', function() {
        it('filters UISourceCodes based on search query', /*#__PURE__*/ _async_to_generator(function() {
            var _createContentProviderUISourceCodes, project, uiSourceCodes, searchConfig, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/a.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "foo"\n'
                                },
                                {
                                    url: 'http://example.com/b.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "bar"\n'
                                }
                            ]
                        }), project = _createContentProviderUISourceCodes.project, uiSourceCodes = _createContentProviderUISourceCodes.uiSourceCodes;
                        searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('foo', false, false);
                        return [
                            4,
                            project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress())
                        ];
                    case 1:
                        result = _state.sent();
                        assert.hasAllKeys(result, [
                            uiSourceCodes[0]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('only includes files if all query parts are found in that file', /*#__PURE__*/ _async_to_generator(function() {
            var _createContentProviderUISourceCodes, project, uiSourceCodes, searchConfig, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/a.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "foo"\n'
                                },
                                {
                                    url: 'http://example.com/b.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "bar"\n'
                                }
                            ]
                        }), project = _createContentProviderUISourceCodes.project, uiSourceCodes = _createContentProviderUISourceCodes.uiSourceCodes;
                        searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('"bar""line"', false, false);
                        return [
                            4,
                            project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress())
                        ];
                    case 1:
                        result = _state.sent();
                        assert.hasAllKeys(result, [
                            uiSourceCodes[1]
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('does include search matches in the result', /*#__PURE__*/ _async_to_generator(function() {
            var _createContentProviderUISourceCodes, project, uiSourceCodes, searchConfig, result;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/a.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "foo"\n'
                                },
                                {
                                    url: 'http://example.com/b.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "bar"\n'
                                }
                            ]
                        }), project = _createContentProviderUISourceCodes.project, uiSourceCodes = _createContentProviderUISourceCodes.uiSourceCodes;
                        searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('line', false, false);
                        return [
                            4,
                            project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress())
                        ];
                    case 1:
                        result = _state.sent();
                        assert.hasAllKeys(result, uiSourceCodes);
                        assert.deepEqual(result.get(uiSourceCodes[0]), [
                            {
                                lineNumber: 0,
                                lineContent: 'Single line with "foo"',
                                columnNumber: 7,
                                matchLength: 4
                            }
                        ]);
                        assert.deepEqual(result.get(uiSourceCodes[1]), [
                            {
                                lineNumber: 0,
                                lineContent: 'Single line with "bar"',
                                columnNumber: 7,
                                matchLength: 4
                            }
                        ]);
                        return [
                            2
                        ];
                }
            });
        }));
        it('updates the progress per file', /*#__PURE__*/ _async_to_generator(function() {
            var _createContentProviderUISourceCodes, project, uiSourceCodes, searchConfig, progress;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _createContentProviderUISourceCodes = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createContentProviderUISourceCodes)({
                            items: [
                                {
                                    url: 'http://example.com/a.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "foo"\n'
                                },
                                {
                                    url: 'http://example.com/b.js',
                                    mimeType: 'text/javascript',
                                    content: 'Single line with "bar"\n'
                                }
                            ]
                        }), project = _createContentProviderUISourceCodes.project, uiSourceCodes = _createContentProviderUISourceCodes.uiSourceCodes;
                        searchConfig = new _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.SearchConfig.SearchConfig('foo', false, false);
                        progress = sinon.spy(new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Progress.Progress());
                        return [
                            4,
                            project.findFilesMatchingSearchRequest(searchConfig, uiSourceCodes, progress)
                        ];
                    case 1:
                        _state.sent();
                        assert.isTrue(progress.setTotalWork.calledOnceWithExactly(2));
                        assert.isTrue(progress.incrementWorked.calledTwice);
                        assert.isTrue(progress.done.calledOnce);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ContentProviderBasedProject.test.js.map


}),

}]);