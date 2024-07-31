"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_application_test_runner_ServiceWorkersTestRunner_js"],{

/***/ "./src/legacy_test_runner/application_test_runner/ServiceWorkersTestRunner.js":
/*!************************************************************************************!*\
  !*** ./src/legacy_test_runner/application_test_runner/ServiceWorkersTestRunner.js ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteServiceWorkerRegistration: () => (/* binding */ deleteServiceWorkerRegistration),
/* harmony export */   dumpServiceWorkersView: () => (/* binding */ dumpServiceWorkersView),
/* harmony export */   makeFetchInServiceWorker: () => (/* binding */ makeFetchInServiceWorker),
/* harmony export */   postToServiceWorker: () => (/* binding */ postToServiceWorker),
/* harmony export */   registerServiceWorker: () => (/* binding */ registerServiceWorker),
/* harmony export */   unregisterServiceWorker: () => (/* binding */ unregisterServiceWorker),
/* harmony export */   waitForActivated: () => (/* binding */ waitForActivated),
/* harmony export */   waitForServiceWorker: () => (/* binding */ waitForServiceWorker)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/application/application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__]);
_panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const registerServiceWorker = function(script, scope) {
  return TestRunner.callFunctionInPageAsync('registerServiceWorker', [script, scope]);
};

const waitForActivated = function(scope) {
  return TestRunner.callFunctionInPageAsync('waitForActivated', [scope]);
};

const unregisterServiceWorker = function(scope) {
  return TestRunner.callFunctionInPageAsync('unregisterServiceWorker', [scope]);
};

const postToServiceWorker = function(scope, message) {
  return TestRunner.evaluateInPageAnonymously('postToServiceWorker("' + scope + '","' + message + '")');
};

const waitForServiceWorker = function(callback) {
  _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().observeTargets({
    targetAdded: function(target) {
      if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.ServiceWorker && callback) {
        setTimeout(callback.bind(null, target), 0);
        callback = null;
      }
    },

    targetRemoved: function(target) {}
  });
};

const dumpServiceWorkersView = function() {
  const swView = _panels_application_application_js__WEBPACK_IMPORTED_MODULE_1__.ResourcesPanel.ResourcesPanel.instance().visibleView;

  return swView.currentWorkersView.sectionList.childTextNodes()
      .map(function(node) {
        if (node.textContent === 'Received ' + (new Date(0)).toLocaleString()) {
          return 'Invalid scriptResponseTime (unix epoch)';
        }
        return node.textContent.replace(/Received.*/, 'Received')
            .replace(/#\d+/, '#N')
            .replace(/Start time.*/, 'Start time')
            .replace(/End time.*/, 'End time');
      })
      .join('\n');
};

const deleteServiceWorkerRegistration = function(scope) {
  for (const registration of TestRunner.serviceWorkerManager.registrations().values()) {
    if (registration.scopeURL === scope) {
      TestRunner.serviceWorkerManager.deleteRegistration(registration.id);
    }
  }
};

const makeFetchInServiceWorker = function(scope, url, requestInitializer, callback) {
  TestRunner.callFunctionInPageAsync('makeFetchInServiceWorker', [scope, url, requestInitializer]).then(callback);
};

TestRunner.deprecatedInitAsync(`
  let registrations = {};

  function registerServiceWorker(script, scope) {
    return navigator.serviceWorker.register(script, {
      scope: scope
    })
    .then(reg => registrations[scope] = reg)
    .catch(err => {
      return Promise.reject(new Error('Service Worker registration error: ' +
                                      err.toString()));
    });
  }

  function waitForActivated(scope) {
    let reg = registrations[scope];
    if (!reg)
      return Promise.reject(new Error('The registration'));
    let worker = reg.installing || reg.waiting || reg.active;
    if (worker.state === 'activated')
      return Promise.resolve();
    if (worker.state === 'redundant')
      return Promise.reject(new Error('The worker is redundant'));
    return new Promise(resolve => {
        worker.addEventListener('statechange', () => {
            if (worker.state === 'activated')
              resolve();
          });
      });
  }

  function postToServiceWorker(scope, message) {
    registrations[scope].active.postMessage(message);
  }

  function unregisterServiceWorker(scope) {
    let registration = registrations[scope];

    if (!registration)
      return Promise.reject('ServiceWorker for ' + scope + ' is not registered');

    return registration.unregister().then(() => delete registrations[scope]);
  }

  function makeFetchInServiceWorker(scope, url, requestInitializer) {
    let script = 'resources/network-fetch-worker.js';

    return navigator.serviceWorker.register(script, {
      scope: scope
    }).then(registration => {
      let worker = registration.installing;

      return new Promise(resolve => {
        navigator.serviceWorker.onmessage = e => {
          resolve(e.data);
        };

        worker.postMessage({
          url: url,
          init: requestInitializer
        });
      });
    });
  }
`);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);