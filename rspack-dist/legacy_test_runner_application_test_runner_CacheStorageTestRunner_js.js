"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_application_test_runner_CacheStorageTestRunner_js"], {
"./legacy_test_runner/application_test_runner/CacheStorageTestRunner.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  addCacheEntry: function() { return addCacheEntry; },
  addCacheEntryWithBlobType: function() { return addCacheEntryWithBlobType; },
  addCacheEntryWithNoCorsRequest: function() { return addCacheEntryWithNoCorsRequest; },
  addCacheEntryWithVarsResponse: function() { return addCacheEntryWithVarsResponse; },
  clearAllCaches: function() { return clearAllCaches; },
  createCache: function() { return createCache; },
  deleteCache: function() { return deleteCache; },
  deleteCacheEntry: function() { return deleteCacheEntry; },
  deleteCacheFromInspector: function() { return deleteCacheFromInspector; },
  dumpCacheTree: function() { return dumpCacheTree; },
  dumpCacheTreeNoRefresh: function() { return dumpCacheTreeNoRefresh; },
  dumpCachedEntryContent: function() { return dumpCachedEntryContent; },
  dumpCachedEntryContentNoRefresh: function() { return dumpCachedEntryContentNoRefresh; },
  waitForCacheRefresh: function() { return waitForCacheRefresh; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
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
function _ts_values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var dumpCacheTree = function() {
    var _ref = _async_to_generator(function(pathFilter) {
        var promise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.expand();
                    promise = TestRunner.addSnifferPromise(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerCacheModel.ServiceWorkerCacheModel.prototype, 'updateCacheNames');
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.refreshCaches();
                    return [
                        4,
                        promise
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        dumpCacheTreeNoRefresh(pathFilter)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function dumpCacheTree(pathFilter) {
        return _ref.apply(this, arguments);
    };
}();
var dumpCacheTreeNoRefresh = function() {
    var _ref = _async_to_generator(function(pathFilter) {
        var cachesTreeElement, i, cacheTreeElement, view;
        function _dumpDataGrid(dataGrid) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = dataGrid.rootNode().children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var node = _step.value;
                    var children = Array.from(node.element().children).filter(function(element) {
                        return !element.classList.contains('response-time-column');
                    });
                    var entries = Array.from(children, function(td) {
                        return td.textContent;
                    }).filter(function(text) {
                        return text;
                    });
                    TestRunner.addResult(' '.repeat(8) + entries.join(', '));
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
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.expand();
                    if (!pathFilter) {
                        TestRunner.addResult('Dumping CacheStorage tree:');
                    } else {
                        TestRunner.addResult('Dumping CacheStorage tree with URL path filter string "' + pathFilter + '"');
                    }
                    cachesTreeElement = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement;
                    if (!cachesTreeElement.childCount()) {
                        TestRunner.addResult('    (empty)');
                        return [
                            2
                        ];
                    }
                    i = 0;
                    _state.label = 1;
                case 1:
                    if (!(i < cachesTreeElement.childCount())) return [
                        3,
                        5
                    ];
                    cacheTreeElement = cachesTreeElement.childAt(i);
                    TestRunner.addResult('    cache: ' + cacheTreeElement.title);
                    view = cacheTreeElement.view;
                    if (!view) {
                        cacheTreeElement.onselect(false);
                    }
                    view = cacheTreeElement.view;
                    return [
                        4,
                        view.updateData(true)
                    ];
                case 2:
                    _state.sent();
                    if (cacheTreeElement.view.entriesForTest.length === 0) {
                        TestRunner.addResult('        (cache empty)');
                        return [
                            3,
                            4
                        ];
                    }
                    if (!pathFilter) {
                        _dumpDataGrid(view.dataGrid);
                        TestRunner.addResult('        totalCount: ' + String(view.returnCount));
                        return [
                            3,
                            4
                        ];
                    }
                    cacheTreeElement.view.entryPathFilter = pathFilter;
                    return [
                        4,
                        view.updateData(true)
                    ];
                case 3:
                    _state.sent();
                    if (cacheTreeElement.view.entriesForTest.length === 0) {
                        TestRunner.addResult('        (no matching entries)');
                        return [
                            3,
                            4
                        ];
                    }
                    _dumpDataGrid(cacheTreeElement.view.dataGrid);
                    TestRunner.addResult('        totalCount: ' + String(view.returnCount));
                    _state.label = 4;
                case 4:
                    ++i;
                    return [
                        3,
                        1
                    ];
                case 5:
                    return [
                        2
                    ];
            }
        });
    });
    return function dumpCacheTreeNoRefresh(pathFilter) {
        return _ref.apply(this, arguments);
    };
}();
var dumpCachedEntryContent = function() {
    var _ref = _async_to_generator(function(cacheName, requestUrl, withHeader) {
        var promise;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.expand();
                    promise = TestRunner.addSnifferPromise(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerCacheModel.ServiceWorkerCacheModel.prototype, 'updateCacheNames');
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.refreshCaches();
                    return [
                        4,
                        promise
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        dumpCachedEntryContentNoRefresh(cacheName, requestUrl, withHeader)
                    ];
                case 2:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return function dumpCachedEntryContent(cacheName, requestUrl, withHeader) {
        return _ref.apply(this, arguments);
    };
}();
var dumpCachedEntryContentNoRefresh = function() {
    var _ref = _async_to_generator(function(cacheName, requestUrl, withHeader) {
        var _loop, cachesTreeElement, i;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _loop = function(i) {
                        var cacheTreeElement, view, promiseDumpContent;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    cacheTreeElement = cachesTreeElement.childAt(i);
                                    if (cacheTreeElement.title.split(' ')[0] !== cacheName) {
                                        return [
                                            2,
                                            "continue"
                                        ];
                                    }
                                    view = cacheTreeElement.view;
                                    if (!view) {
                                        cacheTreeElement.onselect(false);
                                    }
                                    view = cacheTreeElement.view;
                                    return [
                                        4,
                                        view.updateData(true)
                                    ];
                                case 1:
                                    _state.sent();
                                    promiseDumpContent = new Promise(function(resolve) {
                                        view.model.loadCacheData(view.cache, 0, 50, '', function() {
                                            var _ref = _async_to_generator(function(entries, totalCount) {
                                                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry, request, contentObject, content, err;
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
                                                            _iterator = entries[Symbol.iterator]();
                                                            _state.label = 2;
                                                        case 2:
                                                            if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                                                3,
                                                                5
                                                            ];
                                                            entry = _step.value;
                                                            if (entry.requestURL !== requestUrl) {
                                                                return [
                                                                    3,
                                                                    4
                                                                ];
                                                            }
                                                            request = view.createRequest(entry);
                                                            if (request.requestHeaders().length) {
                                                                TestRunner.addResult('    the original request has headers; query with headers? ' + withHeader);
                                                                if (!withHeader) {
                                                                    request.setRequestHeaders([]);
                                                                }
                                                            }
                                                            return [
                                                                4,
                                                                view.requestContent(request)
                                                            ];
                                                        case 3:
                                                            contentObject = _state.sent();
                                                            content = null;
                                                            if (!_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData.isError(contentObject)) {
                                                                content = contentObject.isTextContent ? contentObject.text : contentObject.base64;
                                                            }
                                                            TestRunner.addResult(' '.repeat(8) + (content ? content : '(nothing to preview)'));
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
                                                            resolve();
                                                            return [
                                                                2
                                                            ];
                                                    }
                                                });
                                            });
                                            return function(entries, totalCount) {
                                                return _ref.apply(this, arguments);
                                            };
                                        }());
                                    });
                                    return [
                                        4,
                                        promiseDumpContent
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    };
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.expand();
                    TestRunner.addResult('Dumping ' + cacheName + '\'s entry with request URL: ' + requestUrl);
                    cachesTreeElement = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement;
                    i = 0;
                    _state.label = 1;
                case 1:
                    if (!(i < cachesTreeElement.childCount())) return [
                        3,
                        4
                    ];
                    return [
                        5,
                        _ts_values(_loop(i))
                    ];
                case 2:
                    _state.sent();
                    _state.label = 3;
                case 3:
                    ++i;
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function dumpCachedEntryContentNoRefresh(cacheName, requestUrl, withHeader) {
        return _ref.apply(this, arguments);
    };
}();
var deleteCacheFromInspector = function() {
    var _ref = _async_to_generator(function(cacheName, optionalEntry) {
        var cachesTreeElement, promise, i, cacheTreeElement, title, elementCacheName, view, entry;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.expand();
                    if (optionalEntry) {
                        TestRunner.addResult('Deleting CacheStorage entry ' + optionalEntry + ' in cache ' + cacheName);
                    } else {
                        TestRunner.addResult('Deleting CacheStorage cache ' + cacheName);
                    }
                    cachesTreeElement = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement;
                    promise = TestRunner.addSnifferPromise(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerCacheModel.ServiceWorkerCacheModel.prototype, 'updateCacheNames');
                    _panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ResourcesPanel.ResourcesPanel.instance().sidebar.cacheStorageListTreeElement.refreshCaches();
                    return [
                        4,
                        promise
                    ];
                case 1:
                    _state.sent();
                    if (!cachesTreeElement.childCount()) {
                        throw 'Error: Could not find CacheStorage cache ' + cacheName;
                    }
                    i = 0;
                    _state.label = 2;
                case 2:
                    if (!(i < cachesTreeElement.childCount())) return [
                        3,
                        8
                    ];
                    cacheTreeElement = cachesTreeElement.childAt(i);
                    title = cacheTreeElement.title;
                    elementCacheName = title.substring(0, title.lastIndexOf(' - '));
                    if (elementCacheName !== cacheName) {
                        return [
                            3,
                            7
                        ];
                    }
                    if (!!optionalEntry) return [
                        3,
                        4
                    ];
                    promise = TestRunner.addSnifferPromise(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerCacheModel.ServiceWorkerCacheModel.prototype, 'cacheRemoved');
                    cacheTreeElement.clearCache();
                    return [
                        4,
                        promise
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
                case 4:
                    promise = TestRunner.addSnifferPromise(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheViews.ServiceWorkerCacheView.prototype, 'updateDataCallback');
                    view = cacheTreeElement.view;
                    if (!view) {
                        cacheTreeElement.onselect(false);
                    } else {
                        view.updateData(true);
                    }
                    view = cacheTreeElement.view;
                    return [
                        4,
                        promise
                    ];
                case 5:
                    _state.sent();
                    entry = view.entriesForTest.find(function(entry) {
                        return entry.requestURL === optionalEntry;
                    });
                    if (!entry) {
                        throw 'Error: Could not find cache entry to delete: ' + optionalEntry;
                    }
                    return [
                        4,
                        view.model.deleteCacheEntry(view.cache, entry.requestURL)
                    ];
                case 6:
                    _state.sent();
                    return [
                        2
                    ];
                case 7:
                    i++;
                    return [
                        3,
                        2
                    ];
                case 8:
                    throw 'Error: Could not find CacheStorage cache ' + cacheName;
            }
        });
    });
    return function deleteCacheFromInspector(cacheName, optionalEntry) {
        return _ref.apply(this, arguments);
    };
}();
var waitForCacheRefresh = function waitForCacheRefresh(callback) {
    TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerCacheModel.ServiceWorkerCacheModel.prototype, 'updateCacheNames', callback, false);
};
var createCache = function createCache(cacheName) {
    return TestRunner.callFunctionInPageAsync('createCache', [
        cacheName
    ]);
};
var addCacheEntry = function addCacheEntry(cacheName, requestUrl, responseText) {
    return TestRunner.callFunctionInPageAsync('addCacheEntryImpl', [
        cacheName,
        requestUrl,
        responseText,
        'text/plain'
    ]);
};
var addCacheEntryWithBlobType = function addCacheEntryWithBlobType(cacheName, requestUrl, blobType) {
    return TestRunner.callFunctionInPageAsync('addCacheEntryImpl', [
        cacheName,
        requestUrl,
        'OK',
        blobType
    ]);
};
var addCacheEntryWithVarsResponse = function addCacheEntryWithVarsResponse(cacheName, requestUrl) {
    return TestRunner.callFunctionInPageAsync('addCacheEntryWithVarsResponse', [
        cacheName,
        requestUrl
    ]);
};
var addCacheEntryWithNoCorsRequest = function addCacheEntryWithNoCorsRequest(cacheName, requestUrl) {
    return TestRunner.callFunctionInPageAsync('addCacheEntryWithNoCorsRequest', [
        cacheName,
        requestUrl
    ]);
};
var deleteCache = function deleteCache(cacheName) {
    return TestRunner.callFunctionInPageAsync('deleteCache', [
        cacheName
    ]);
};
var deleteCacheEntry = function deleteCacheEntry(cacheName, requestUrl) {
    return TestRunner.callFunctionInPageAsync('deleteCacheEntry', [
        cacheName,
        requestUrl
    ]);
};
var clearAllCaches = function clearAllCaches() {
    return TestRunner.callFunctionInPageAsync('clearAllCaches');
};
TestRunner.deprecatedInitAsync("\n  function onCacheStorageError(e) {\n    console.error('CacheStorage error: ' + e);\n  }\n\n  function createCache(cacheName) {\n    return caches.open(cacheName).catch(onCacheStorageError);\n  }\n\n  function addCacheEntryImpl(cacheName, requestUrl, responseText, blobType) {\n    return caches.open(cacheName).then(function(cache) {\n      let request = new Request(requestUrl);\n      let myBlob = new Blob(['Y'], { 'type': blobType });\n\n      let init = {\n        'status': 200,\n        'statusText': responseText\n      };\n\n      let response = new Response(myBlob, init);\n      return cache.put(request, response);\n    }).catch(onCacheStorageError);\n  }\n\n  function addCacheEntryWithVarsResponse(cacheName, requestUrl) {\n    return caches.open(cacheName).then(function(cache) {\n      let request = new Request(requestUrl, {\n        headers: { 'Accept': '*/*' }\n      });\n      let myBlob = new Blob(['Z'], { \"type\": 'text/plain' });\n\n      let init = {\n        'headers': { 'Vary': 'Accept' },\n      };\n\n      let response = new Response(myBlob, init);\n      return cache.put(request, response);\n    }).catch(onCacheStorageError);\n  }\n\n  function addCacheEntryWithNoCorsRequest(cacheName, requestUrl) {\n    return caches.open(cacheName).then(async function(cache) {\n      let request = new Request(requestUrl, {mode: 'no-cors'});\n      return cache.put(request, await fetch(request));\n    }).catch(onCacheStorageError);\n  }\n\n  function deleteCache(cacheName) {\n    return caches.delete(cacheName).then(function(success) {\n      if (!success)\n        onCacheStorageError('Could not find cache ' + cacheName);\n    }).catch(onCacheStorageError);\n  }\n\n  function deleteCacheEntry(cacheName, requestUrl) {\n    return caches.open(cacheName).then(cache => cache.delete(new Request(requestUrl))).catch(onCacheStorageError);\n  }\n\n  function clearAllCaches() {\n    return caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key)))).catch(onCacheStorageError.bind(this, undefined));\n  }\n");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/application.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppManifestView: function() { return /* reexport module object */ _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__; },
  ApplicationPanelSidebar: function() { return /* reexport module object */ _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__; },
  BackgroundServiceModel: function() { return /* reexport module object */ _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  BackgroundServiceView: function() { return /* reexport module object */ _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__; },
  BounceTrackingMitigationsTreeElement: function() { return /* reexport module object */ _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__; },
  CookieItemsView: function() { return /* reexport module object */ _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__; },
  DOMStorageItemsView: function() { return /* reexport module object */ _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  DOMStorageModel: function() { return /* reexport module object */ _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__; },
  IndexedDBModel: function() { return /* reexport module object */ _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__; },
  IndexedDBViews: function() { return /* reexport module object */ _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__; },
  InterestGroupStorageModel: function() { return /* reexport module object */ _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__; },
  InterestGroupStorageView: function() { return /* reexport module object */ _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__; },
  InterestGroupTreeElement: function() { return /* reexport module object */ _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__; },
  OpenedWindowDetailsView: function() { return /* reexport module object */ _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__; },
  PreloadingTreeElement: function() { return /* reexport module object */ _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__; },
  PreloadingView: function() { return /* reexport module object */ _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__; },
  ReportingApiReportsView: function() { return /* reexport module object */ _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__; },
  ReportingApiView: function() { return /* reexport module object */ _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__; },
  ResourcesPanel: function() { return /* reexport module object */ _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__; },
  ServiceWorkerCacheViews: function() { return /* reexport module object */ _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__; },
  ServiceWorkerUpdateCycleView: function() { return /* reexport module object */ _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__; },
  ServiceWorkersView: function() { return /* reexport module object */ _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__; },
  SharedStorageEventsView: function() { return /* reexport module object */ _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__; },
  SharedStorageItemsView: function() { return /* reexport module object */ _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__; },
  SharedStorageListTreeElement: function() { return /* reexport module object */ _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__; },
  SharedStorageModel: function() { return /* reexport module object */ _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__; },
  SharedStorageTreeElement: function() { return /* reexport module object */ _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__; },
  StorageBucketsTreeElement: function() { return /* reexport module object */ _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__; },
  StorageItemsView: function() { return /* reexport module object */ _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__; },
  StorageView: function() { return /* reexport module object */ _StorageView_js__WEBPACK_IMPORTED_MODULE_29__; },
  TrustTokensTreeElement: function() { return /* reexport module object */ _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__; }
});
/* harmony import */var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./panels/application/InterestGroupStorageView.js");
/* harmony import */var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */var _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preloading/PreloadingView.js */ "./panels/application/preloading/PreloadingView.js");
/* harmony import */var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
/* harmony import */var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
/* harmony import */var _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ResourcesPanel.js */ "./panels/application/ResourcesPanel.js");
/* harmony import */var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
/* harmony import */var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
/* harmony import */var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
/* harmony import */var _SharedStorageItemsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./SharedStorageItemsView.js */ "./panels/application/SharedStorageItemsView.js");
/* harmony import */var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
/* harmony import */var _StorageView_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__]);
([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_0__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_15__, _preloading_PreloadingView_js__WEBPACK_IMPORTED_MODULE_14__, _ResourcesPanel_js__WEBPACK_IMPORTED_MODULE_18__, _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_27__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.































 //# sourceMappingURL=application.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);