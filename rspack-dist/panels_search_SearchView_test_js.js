"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_search_SearchView_test_js"], {
"./panels/search/SearchScope.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=SearchScope.js.map


}),
"./panels/search/SearchView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.js */ "./panels/search/search.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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






var _resolvePerformSearchCalledPromise = /*#__PURE__*/ new WeakMap();
var FakeSearchScope = /*#__PURE__*/ function() {
    "use strict";
    function FakeSearchScope() {
        _class_call_check(this, FakeSearchScope);
        _define_property(this, "performSearchCalledPromise", void 0);
        _class_private_field_init(this, _resolvePerformSearchCalledPromise, {
            writable: true,
            value: void 0
        });
        var _Platform_PromiseUtilities_promiseWithResolvers = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.PromiseUtilities.promiseWithResolvers(), promise = _Platform_PromiseUtilities_promiseWithResolvers.promise, resolve = _Platform_PromiseUtilities_promiseWithResolvers.resolve;
        this.performSearchCalledPromise = promise;
        _class_private_field_set(this, _resolvePerformSearchCalledPromise, resolve);
    }
    _create_class(FakeSearchScope, [
        {
            key: "performSearch",
            value: function performSearch(searchConfig, progress, searchResultCallback, searchFinishedCallback) {
                _class_private_field_get(this, _resolvePerformSearchCalledPromise).call(this, {
                    searchConfig: searchConfig,
                    progress: progress,
                    searchResultCallback: searchResultCallback,
                    searchFinishedCallback: searchFinishedCallback
                });
            }
        },
        {
            key: "performIndexing",
            value: function performIndexing(progress) {
                setTimeout(function() {
                    return progress.done();
                }, 0); // Allow microtasks to run.
            }
        },
        {
            key: "stopSearch",
            value: function stopSearch() {}
        }
    ]);
    return FakeSearchScope;
}();
var _scopeCreator = /*#__PURE__*/ new WeakMap(), /**
     * `SearchView` resets and lazily re-creates the search results pane for each search.
     * To provide a fake instance we install a get/set accesssor for the original property
     * that behaves normally with no override, but returns the mock if one is provided.
     */ _searchResultsPane = /*#__PURE__*/ new WeakMap(), _overrideResultsPane = /*#__PURE__*/ new WeakMap();
var TestSearchView = /*#__PURE__*/ function(_Search_SearchView_SearchView) {
    "use strict";
    _inherits(TestSearchView, _Search_SearchView_SearchView);
    var _super = _create_super(TestSearchView);
    function TestSearchView(scopeCreator, searchResultsPane) {
        _class_call_check(this, TestSearchView);
        var _this;
        var throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(/* timeoutMs */ 0);
        _this = _super.call(this, 'fake', throttler);
        /**
     * The throttler with which the base 'SearchView' throttles UI updates.
     * Exposed here so tests can wait for the updates to finish.
     */ _define_property(_assert_this_initialized(_this), "throttler", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _scopeCreator, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _searchResultsPane, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _overrideResultsPane, {
            writable: true,
            value: void 0
        });
        _this.throttler = throttler;
        _class_private_field_set(_assert_this_initialized(_this), _scopeCreator, scopeCreator);
        _class_private_field_set(_assert_this_initialized(_this), _searchResultsPane, searchResultsPane !== null && searchResultsPane !== void 0 ? searchResultsPane : null);
        _class_private_field_set(_assert_this_initialized(_this), _overrideResultsPane, Boolean(searchResultsPane));
        // Use 'Object.definePrroperty' or TS won't be happy that we replace a prop with an accessor.
        Object.defineProperty(_assert_this_initialized(_this), 'searchResultsPane', {
            get: function() {
                return _class_private_field_get(_assert_this_initialized(_this), _searchResultsPane);
            },
            set: function(pane) {
                if (!_class_private_field_get(_assert_this_initialized(_this), _overrideResultsPane)) {
                    _class_private_field_set(_assert_this_initialized(_this), _searchResultsPane, pane);
                }
            }
        });
        return _this;
    }
    _create_class(TestSearchView, [
        {
            key: "createScope",
            value: function createScope() {
                return _class_private_field_get(this, _scopeCreator).call(this);
            }
        },
        {
            /** Fills in the UI elements of the SearchView and hits 'Enter'. */ key: "triggerSearch",
            value: function triggerSearch(query, matchCase, isRegex) {
                this.search.value = query;
                this.matchCaseButton.toggled = matchCase;
                this.regexButton.toggled = isRegex;
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchKeyDownEvent)(this.search, {
                    keyCode: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.KeyboardShortcut.Keys.Enter.code
                });
            }
        },
        {
            key: "currentSearchResultMessage",
            get: function get() {
                var _this_contentElement_querySelector_textContent;
                return (_this_contentElement_querySelector_textContent = this.contentElement.querySelector('.search-message:nth-child(3)').textContent) !== null && _this_contentElement_querySelector_textContent !== void 0 ? _this_contentElement_querySelector_textContent : '';
            }
        }
    ]);
    return TestSearchView;
}(_search_js__WEBPACK_IMPORTED_MODULE_5__.SearchView.SearchView);
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('SearchView', function() {
    it('calls the search scope with the search config provided by the user via the UI', /*#__PURE__*/ _async_to_generator(function() {
        var fakeScope, searchView, searchConfig;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fakeScope = new FakeSearchScope();
                    searchView = new TestSearchView(function() {
                        return fakeScope;
                    });
                    searchView.triggerSearch('a query', true, true);
                    return [
                        4,
                        fakeScope.performSearchCalledPromise
                    ];
                case 1:
                    searchConfig = _state.sent().searchConfig;
                    assert.strictEqual(searchConfig.query(), 'a query');
                    assert.isFalse(searchConfig.ignoreCase());
                    assert.isTrue(searchConfig.isRegex());
                    return [
                        2
                    ];
            }
        });
    }));
    it('notifies the user when no search results were found', /*#__PURE__*/ _async_to_generator(function() {
        var fakeScope, searchView, searchFinishedCallback;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fakeScope = new FakeSearchScope();
                    searchView = new TestSearchView(function() {
                        return fakeScope;
                    });
                    searchView.triggerSearch('a query', true, true);
                    return [
                        4,
                        fakeScope.performSearchCalledPromise
                    ];
                case 1:
                    searchFinishedCallback = _state.sent().searchFinishedCallback;
                    searchFinishedCallback(/* finished */ true);
                    assert.strictEqual(searchView.currentSearchResultMessage, 'No matches found.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('updates the search result message with a count when search results are added', /*#__PURE__*/ _async_to_generator(function() {
        var _searchView_throttler_process, _searchView_throttler, _searchView_throttler_process1, _searchView_throttler1, fakeScope, fakeResultsPane, searchView, searchResultCallback;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fakeScope = new FakeSearchScope();
                    fakeResultsPane = sinon.createStubInstance(_search_js__WEBPACK_IMPORTED_MODULE_5__.SearchResultsPane.SearchResultsPane);
                    searchView = new TestSearchView(function() {
                        return fakeScope;
                    }, fakeResultsPane);
                    searchView.triggerSearch('a query', true, true);
                    return [
                        4,
                        fakeScope.performSearchCalledPromise
                    ];
                case 1:
                    searchResultCallback = _state.sent().searchResultCallback;
                    searchResultCallback({
                        matchesCount: function() {
                            return 10;
                        }
                    });
                    return [
                        4,
                        (_searchView_throttler_process = (_searchView_throttler = searchView.throttler).process) === null || _searchView_throttler_process === void 0 ? void 0 : _searchView_throttler_process.call(_searchView_throttler)
                    ];
                case 2:
                    _state.sent();
                    assert.strictEqual(searchView.currentSearchResultMessage, 'Found 10 matching lines in 1 file.');
                    searchResultCallback({
                        matchesCount: function() {
                            return 42;
                        }
                    });
                    return [
                        4,
                        (_searchView_throttler_process1 = (_searchView_throttler1 = searchView.throttler).process) === null || _searchView_throttler_process1 === void 0 ? void 0 : _searchView_throttler_process1.call(_searchView_throttler1)
                    ];
                case 3:
                    _state.sent();
                    assert.strictEqual(searchView.currentSearchResultMessage, 'Found 52 matching lines in 2 files.');
                    return [
                        2
                    ];
            }
        });
    }));
    it('forwards each SearchResult to the results pane', /*#__PURE__*/ _async_to_generator(function() {
        var _searchView_throttler_process, _searchView_throttler, fakeScope, fakeResultsPane, searchView, searchResultCallback, searchResult1, searchResult2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    fakeScope = new FakeSearchScope();
                    fakeResultsPane = sinon.createStubInstance(_search_js__WEBPACK_IMPORTED_MODULE_5__.SearchResultsPane.SearchResultsPane);
                    searchView = new TestSearchView(function() {
                        return fakeScope;
                    }, fakeResultsPane);
                    searchView.triggerSearch('a query', true, true);
                    return [
                        4,
                        fakeScope.performSearchCalledPromise
                    ];
                case 1:
                    searchResultCallback = _state.sent().searchResultCallback;
                    searchResult1 = {
                        matchesCount: function() {
                            return 10;
                        }
                    };
                    searchResult2 = {
                        matchesCount: function() {
                            return 42;
                        }
                    };
                    searchResultCallback(searchResult1);
                    searchResultCallback(searchResult2);
                    return [
                        4,
                        (_searchView_throttler_process = (_searchView_throttler = searchView.throttler).process) === null || _searchView_throttler_process === void 0 ? void 0 : _searchView_throttler_process.call(_searchView_throttler)
                    ];
                case 2:
                    _state.sent();
                    assert.isTrue(fakeResultsPane.addSearchResult.calledTwice);
                    assert.strictEqual(fakeResultsPane.addSearchResult.args[0][0], searchResult1);
                    assert.strictEqual(fakeResultsPane.addSearchResult.args[1][0], searchResult2);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=SearchView.test.js.map


}),
"./panels/search/search.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SearchResultsPane: function() { return /* reexport module object */ _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__; },
  SearchScope: function() { return /* reexport module object */ _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__; },
  SearchView: function() { return /* reexport module object */ _SearchView_js__WEBPACK_IMPORTED_MODULE_2__; }
});
/* harmony import */var _SearchResultsPane_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchResultsPane.js */ "./panels/search/SearchResultsPane.js");
/* harmony import */var _SearchScope_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchScope.js */ "./panels/search/SearchScope.js");
/* harmony import */var _SearchView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchView.js */ "./panels/search/SearchView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



 //# sourceMappingURL=search.js.map


}),

}]);