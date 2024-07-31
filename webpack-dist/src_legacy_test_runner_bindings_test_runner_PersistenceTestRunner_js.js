"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_bindings_test_runner_PersistenceTestRunner_js"],{

/***/ "./src/legacy_test_runner/bindings_test_runner/PersistenceTestRunner.js":
/*!******************************************************************************!*\
  !*** ./src/legacy_test_runner/bindings_test_runner/PersistenceTestRunner.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFooJSFile: () => (/* binding */ addFooJSFile),
/* harmony export */   initializeTestMapping: () => (/* binding */ initializeTestMapping),
/* harmony export */   waitForBinding: () => (/* binding */ waitForBinding)
/* harmony export */ });
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./src/models/persistence/persistence.ts");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./src/models/workspace/workspace.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceBinding.prototype.toString = function() {
  const lines = ['{', '       network: ' + this.network.url(), '    fileSystem: ' + this.fileSystem.url(), '}'];

  return lines.join('\n');
};

_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Automapping.AutomappingStatus.prototype.toString = function() {
  const lines = [
    '{', '       network: ' + this.network.url(), '    fileSystem: ' + this.fileSystem.url(),
    '    exactMatch: ' + this.exactMatch, '}'
  ];

  return lines.join('\n');
};

const waitForBinding = async function(fileName) {
  const uiSourceCodes = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.WorkspaceImpl.instance().uiSourceCodes();

  for (const uiSourceCode of uiSourceCodes) {
    const binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceImpl.instance().binding(uiSourceCode);

    if (!binding) {
      continue;
    }

    if (uiSourceCode.name() === fileName) {
      return binding;
    }
  }

  return TestRunner.waitForEvent(
      _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.Events.BindingCreated, _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceImpl.instance(),
      binding => binding.network.name() === fileName || binding.fileSystem.name() === fileName);
};

const addFooJSFile = function(fs) {
  return fs.root.mkdir('devtools')
      .mkdir('persistence')
      .mkdir('resources')
      .addFile('foo.js', '\n\nwindow.foo = ()=>\'foo\';\n');
};

const initializeTestMapping = function() {
  return new TestMapping(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceImpl.instance());
};

class TestMapping {
  constructor(persistence) {
    this.persistence = persistence;
    persistence.addNetworkInterceptor(() => true);
    this.bindings = new Set();
  }

  async addBinding(urlSuffix) {
    if (this.findBinding(urlSuffix)) {
      TestRunner.addResult(`FAILED TO ADD BINDING: binding already exists for ${urlSuffix}`);
      TestRunner.completeTest();
      return;
    }

    const networkUISourceCode =
        await TestRunner.waitForUISourceCode(urlSuffix, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.Network);
    const fileSystemUISourceCode =
        await TestRunner.waitForUISourceCode(urlSuffix, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__.Workspace.projectTypes.FileSystem);
    const binding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.Persistence.PersistenceBinding(networkUISourceCode, fileSystemUISourceCode);
    this.bindings.add(binding);
    await this.persistence.addBindingForTest(binding);
  }

  findBinding(urlSuffix) {
    for (const binding of this.bindings) {
      if (binding.network.url().endsWith(urlSuffix)) {
        return binding;
      }
    }

    return null;
  }

  async removeBinding(urlSuffix) {
    const binding = this.findBinding(urlSuffix);

    if (!binding) {
      TestRunner.addResult(`FAILED TO REMOVE BINDING: binding does not exist for ${urlSuffix}`);
      TestRunner.completeTest();
      return;
    }

    this.bindings.delete(binding);
    await this.persistence.removeBindingForTest(binding);
  }

  async dispose() {
    for (const binding of this.bindings) {
      await this.persistence.removeBindingForTest(binding);
    }

    this.bindings.clear();
  }
}


/***/ })

}]);