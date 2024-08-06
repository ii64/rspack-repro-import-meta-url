"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_application_test_runner_ResourcesTestRunner_js"], {
"./legacy_test_runner/application_test_runner/ResourcesTestRunner.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createWebSQLDatabase: function() { return createWebSQLDatabase; },
  databaseModel: function() { return databaseModel; },
  domStorageModel: function() { return domStorageModel; },
  dumpCookieDomains: function() { return dumpCookieDomains; },
  dumpCookies: function() { return dumpCookies; },
  findTreeElement: function() { return findTreeElement; },
  indexedDBModel: function() { return indexedDBModel; },
  requestURLComparer: function() { return requestURLComparer; },
  resetState: function() { return resetState; },
  resourceMatchingURL: function() { return resourceMatchingURL; },
  runAfterCachedResourcesProcessed: function() { return runAfterCachedResourcesProcessed; },
  runAfterResourcesAreFinished: function() { return runAfterResourcesAreFinished; },
  showResource: function() { return showResource; },
  waitForCookies: function() { return waitForCookies; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2017 The Chromium Authors. All rights reserved.
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
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ /**
 * Many application panel tests are flaky because storage state (e.g. IndexedDB)
 * doesn't get reset between tests.
 */ var resetState = function() {
    var _ref = _async_to_generator(function() {
        var targets, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, target, securityOrigin, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    targets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().targets();
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = targets[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    target = _step.value;
                    if (target.type() === 'tab') {
                        return [
                            3,
                            4
                        ];
                    }
                    securityOrigin = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(target.inspectedURL()).securityOrigin();
                    return [
                        4,
                        target.storageAgent().clearDataForOrigin(securityOrigin, _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.StorageView.AllStorageTypes.join(','))
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
                    return [
                        2
                    ];
            }
        });
    });
    return function resetState() {
        return _ref.apply(this, arguments);
    };
}();
var createWebSQLDatabase = function createWebSQLDatabase(name) {
    return TestRunner.evaluateInPageAsync('_openWebSQLDatabase("'.concat(name, '")'));
};
var requestURLComparer = function requestURLComparer(r1, r2) {
    return r1.request.url.localeCompare(r2.request.url);
};
var runAfterCachedResourcesProcessed = function runAfterCachedResourcesProcessed(callback) {
    if (!TestRunner.resourceTreeModel.cachedResourcesProcessed) {
        TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.CachedResourcesLoaded, callback);
    } else {
        callback();
    }
};
var runAfterResourcesAreFinished = function runAfterResourcesAreFinished(resourceURLs, callback) {
    var resourceURLsMap = new Set(resourceURLs);
    function checkResources() {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = resourceURLsMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var url = _step.value;
                var resource = resourceMatchingURL(url);
                if (resource) {
                    resourceURLsMap.delete(url);
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
        if (!resourceURLsMap.size) {
            TestRunner.resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.ResourceAdded, checkResources);
            callback();
        }
    }
    checkResources();
    if (resourceURLsMap.size) {
        TestRunner.resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.ResourceAdded, checkResources);
    }
};
var showResource = function showResource(resourceURL, callback) {
    var reported = false;
    function callbackWrapper(sourceFrame) {
        if (reported) {
            return;
        }
        callback(sourceFrame);
        reported = true;
    }
    function showResourceCallback() {
        var resource = resourceMatchingURL(resourceURL);
        if (!resource) {
            return;
        }
        _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().showResource(resource, 1);
        var sourceFrame = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().resourceViewForResource(resource);
        if (sourceFrame.loaded) {
            callbackWrapper(sourceFrame);
        } else {
            TestRunner.addSniffer(sourceFrame, 'setContent', callbackWrapper.bind(null, sourceFrame));
        }
    }
    runAfterResourcesAreFinished([
        resourceURL
    ], showResourceCallback);
};
var resourceMatchingURL = function resourceMatchingURL(resourceURL) {
    var result = null;
    TestRunner.resourceTreeModel.forAllResources(visit);
    function visit(resource) {
        if (resource.url.indexOf(resourceURL) !== -1) {
            result = resource;
            return true;
        }
    }
    return result;
};
var findTreeElement = function findTreeElement1(parent, path) {
    if (path.length === 0) {
        return parent;
    }
    var child = parent.children().find(function(child) {
        return child.title === path[0];
    });
    if (!child) {
        return null;
    }
    child.expand();
    return findTreeElement(child, path.slice(1));
};
var waitForCookies = function waitForCookies() {
    return new Promise(function(resolve) {
        TestRunner.addSniffer(CookieTable.CookiesTable.prototype, 'rebuildTable', resolve);
    });
};
var dumpCookieDomains = function dumpCookieDomains() {
    var cookieListChildren = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cookieListTreeElement.children();
    TestRunner.addResult('Available cookie domains:');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = cookieListChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var child = _step.value;
            TestRunner.addResult(child.cookieDomain);
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
};
var dumpCookies = function dumpCookies() {
    if (!_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().cookieView || !UI.panels.resources.cookieView.isShowing()) {
        TestRunner.addResult('No cookies visible');
        return;
    }
    TestRunner.addResult('Visible cookies');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().cookieView.cookiesTable.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            var cookies = item.cookies || [];
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = cookies[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var cookie = _step1.value;
                    TestRunner.addResult("".concat(cookie.name(), "=").concat(cookie.value()));
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
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
};
var databaseModel = function databaseModel() {
    return TestRunner.mainTarget.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.DatabaseModel.DatabaseModel);
};
var domStorageModel = function domStorageModel() {
    return TestRunner.mainTarget.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.DOMStorageModel.DOMStorageModel);
};
var indexedDBModel = function indexedDBModel() {
    return TestRunner.mainTarget.model(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.IndexedDBModel.IndexedDBModel);
};
TestRunner.deprecatedInitAsync("\n  function _openWebSQLDatabase(name) {\n    return new Promise(resolve => openDatabase(name, '1.0', '', 1024 * 1024, resolve));\n  }\n");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);