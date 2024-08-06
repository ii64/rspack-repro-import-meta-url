"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_application_test_runner_application_test_runner_js"], {
"./legacy_test_runner/application_test_runner/ResourceTreeTestRunner.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  dumpResourceTreeEverything: function() { return dumpResourceTreeEverything; },
  dumpResources: function() { return dumpResources; },
  dumpResourcesTree: function() { return dumpResourcesTree; },
  dumpResourcesURLMap: function() { return dumpResourcesURLMap; }
});
/* harmony import */var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sources_test_runner/sources_test_runner.js */ "./legacy_test_runner/sources_test_runner/sources_test_runner.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var dumpResources = function dumpResources(formatter) {
    var results = [];
    function formatterWrapper(resource) {
        if (formatter) {
            results.push({
                resource: resource,
                text: formatter(resource)
            });
        } else {
            results.push({
                resource: resource,
                text: resource.url
            });
        }
    }
    TestRunner.resourceTreeModel.forAllResources(formatterWrapper);
    function comparator(result1, result2) {
        return result1.resource.url.localeCompare(result2.resource.url);
    }
    results.sort(comparator);
    for(var i = 0; i < results.length; ++i){
        TestRunner.addResult(results[i].text);
    }
};
var dumpResourcesURLMap = function dumpResourcesURLMap() {
    var results = [];
    TestRunner.resourceTreeModel.forAllResources(collect);
    function collect(resource) {
        results.push({
            url: resource.url,
            resource: TestRunner.resourceTreeModel.resourceForURL(resource.url)
        });
    }
    function comparator(result1, result2) {
        if (result1.url > result2.url) {
            return 1;
        }
        if (result2.url > result1.url) {
            return -1;
        }
        return 0;
    }
    results.sort(comparator);
    for(var i = 0; i < results.length; ++i){
        TestRunner.addResult(results[i].url + ' == ' + results[i].resource.url);
    }
};
var testSourceNavigator;
var dumpResourcesTree = function dumpResourcesTree() {
    function dump(treeItem, prefix) {
        if (typeof treeItem.resetBubble === 'function') {
            treeItem.resetBubble();
        }
        TestRunner.addResult(prefix + treeItem.listItemElement.textContent);
        treeItem.expand();
        var children = treeItem.children();
        for(var i = 0; children && i < children.length; ++i){
            dump(children[i], prefix + '    ');
        }
    }
    dump(_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__.ResourcesPanel.ResourcesPanel.instance().sidebar.resourcesSection.treeElement, '');
    if (!testSourceNavigator) {
        testSourceNavigator = new _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_1__.SourcesNavigator.NetworkNavigatorView();
        testSourceNavigator.show(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InspectorView.InspectorView.instance().element);
    }
    _sources_test_runner_sources_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.SourcesTestRunner.dumpNavigatorViewInAllModes(testSourceNavigator);
};
var dumpResourceTreeEverything = function dumpResourceTreeEverything() {
    function format(resource) {
        return resource.resourceType().name() + ' ' + resource.url;
    }
    TestRunner.addResult('Resources:');
    dumpResources(format);
    TestRunner.addResult('');
    TestRunner.addResult('Resources URL Map:');
    dumpResourcesURLMap();
    TestRunner.addResult('');
    TestRunner.addResult('Resources Tree:');
    dumpResourcesTree();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./legacy_test_runner/application_test_runner/ServiceWorkersTestRunner.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  deleteServiceWorkerRegistration: function() { return deleteServiceWorkerRegistration; },
  dumpServiceWorkersView: function() { return dumpServiceWorkersView; },
  makeFetchInServiceWorker: function() { return makeFetchInServiceWorker; },
  postToServiceWorker: function() { return postToServiceWorker; },
  registerServiceWorker: function() { return registerServiceWorker; },
  unregisterServiceWorker: function() { return unregisterServiceWorker; },
  waitForActivated: function() { return waitForActivated; },
  waitForServiceWorker: function() { return waitForServiceWorker; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var registerServiceWorker = function registerServiceWorker(script, scope) {
    return TestRunner.callFunctionInPageAsync('registerServiceWorker', [
        script,
        scope
    ]);
};
var waitForActivated = function waitForActivated(scope) {
    return TestRunner.callFunctionInPageAsync('waitForActivated', [
        scope
    ]);
};
var unregisterServiceWorker = function unregisterServiceWorker(scope) {
    return TestRunner.callFunctionInPageAsync('unregisterServiceWorker', [
        scope
    ]);
};
var postToServiceWorker = function postToServiceWorker(scope, message) {
    return TestRunner.evaluateInPageAnonymously('postToServiceWorker("' + scope + '","' + message + '")');
};
var waitForServiceWorker = function waitForServiceWorker(callback) {
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().observeTargets({
        targetAdded: function targetAdded(target) {
            if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.ServiceWorker && callback) {
                setTimeout(callback.bind(null, target), 0);
                callback = null;
            }
        },
        targetRemoved: function targetRemoved(target) {}
    });
};
var dumpServiceWorkersView = function dumpServiceWorkersView() {
    var swView = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.ResourcesPanel.ResourcesPanel.instance().visibleView;
    return swView.currentWorkersView.sectionList.childTextNodes().map(function(node) {
        if (node.textContent === 'Received ' + new Date(0).toLocaleString()) {
            return 'Invalid scriptResponseTime (unix epoch)';
        }
        return node.textContent.replace(/Received.*/, 'Received').replace(/#\d+/, '#N').replace(/Start time.*/, 'Start time').replace(/End time.*/, 'End time');
    }).join('\n');
};
var deleteServiceWorkerRegistration = function deleteServiceWorkerRegistration(scope) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = TestRunner.serviceWorkerManager.registrations().values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var registration = _step.value;
            if (registration.scopeURL === scope) {
                TestRunner.serviceWorkerManager.deleteRegistration(registration.id);
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
var makeFetchInServiceWorker = function makeFetchInServiceWorker(scope, url, requestInitializer, callback) {
    TestRunner.callFunctionInPageAsync('makeFetchInServiceWorker', [
        scope,
        url,
        requestInitializer
    ]).then(callback);
};
TestRunner.deprecatedInitAsync("\n  let registrations = {};\n\n  function registerServiceWorker(script, scope) {\n    return navigator.serviceWorker.register(script, {\n      scope: scope\n    })\n    .then(reg => registrations[scope] = reg)\n    .catch(err => {\n      return Promise.reject(new Error('Service Worker registration error: ' +\n                                      err.toString()));\n    });\n  }\n\n  function waitForActivated(scope) {\n    let reg = registrations[scope];\n    if (!reg)\n      return Promise.reject(new Error('The registration'));\n    let worker = reg.installing || reg.waiting || reg.active;\n    if (worker.state === 'activated')\n      return Promise.resolve();\n    if (worker.state === 'redundant')\n      return Promise.reject(new Error('The worker is redundant'));\n    return new Promise(resolve => {\n        worker.addEventListener('statechange', () => {\n            if (worker.state === 'activated')\n              resolve();\n          });\n      });\n  }\n\n  function postToServiceWorker(scope, message) {\n    registrations[scope].active.postMessage(message);\n  }\n\n  function unregisterServiceWorker(scope) {\n    let registration = registrations[scope];\n\n    if (!registration)\n      return Promise.reject('ServiceWorker for ' + scope + ' is not registered');\n\n    return registration.unregister().then(() => delete registrations[scope]);\n  }\n\n  function makeFetchInServiceWorker(scope, url, requestInitializer) {\n    let script = 'resources/network-fetch-worker.js';\n\n    return navigator.serviceWorker.register(script, {\n      scope: scope\n    }).then(registration => {\n      let worker = registration.installing;\n\n      return new Promise(resolve => {\n        navigator.serviceWorker.onmessage = e => {\n          resolve(e.data);\n        };\n\n        worker.postMessage({\n          url: url,\n          init: requestInitializer\n        });\n      });\n    });\n  }\n");

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./legacy_test_runner/application_test_runner/StorageTestRunner.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  isStorageView: function() { return isStorageView; }
});
/* harmony import */var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/application/application.js */ "./panels/application/application.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var isStorageView = function isStorageView(view) {
    return _instanceof(view, _panels_application_application_js__WEBPACK_IMPORTED_MODULE_0__.StorageView.StorageView);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./legacy_test_runner/application_test_runner/application_test_runner.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ApplicationTestRunner: function() { return ApplicationTestRunner; }
});
/* harmony import */var _CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CacheStorageTestRunner.js */ "./legacy_test_runner/application_test_runner/CacheStorageTestRunner.js");
/* harmony import */var _IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexedDBTestRunner.js */ "./legacy_test_runner/application_test_runner/IndexedDBTestRunner.js");
/* harmony import */var _ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourcesTestRunner.js */ "./legacy_test_runner/application_test_runner/ResourcesTestRunner.js");
/* harmony import */var _ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResourceTreeTestRunner.js */ "./legacy_test_runner/application_test_runner/ResourceTreeTestRunner.js");
/* harmony import */var _ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ServiceWorkersTestRunner.js */ "./legacy_test_runner/application_test_runner/ServiceWorkersTestRunner.js");
/* harmony import */var _StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StorageTestRunner.js */ "./legacy_test_runner/application_test_runner/StorageTestRunner.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__, _IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__, _ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__, _ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__, _ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__, _StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__]);
([_CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__, _IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__, _ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__, _ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__, _ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__, _StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);// Copyright 2020 The Chromium Authors. All rights reserved.
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






var ApplicationTestRunner = _object_spread({}, _CacheStorageTestRunner_js__WEBPACK_IMPORTED_MODULE_0__, _IndexedDBTestRunner_js__WEBPACK_IMPORTED_MODULE_1__, _ResourcesTestRunner_js__WEBPACK_IMPORTED_MODULE_2__, _ResourceTreeTestRunner_js__WEBPACK_IMPORTED_MODULE_3__, _ServiceWorkersTestRunner_js__WEBPACK_IMPORTED_MODULE_4__, _StorageTestRunner_js__WEBPACK_IMPORTED_MODULE_5__);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),

}]);