"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_bindings_test_runner_AutomappingTestRunner_js"],{

/***/ "./legacy_test_runner/bindings_test_runner/AutomappingTestRunner.js":
/*!**************************************************************************!*\
  !*** ./legacy_test_runner/bindings_test_runner/AutomappingTestRunner.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutomappingTest: () => (/* binding */ AutomappingTest),
/* harmony export */   addFiles: () => (/* binding */ addFiles),
/* harmony export */   overrideNetworkModificationTime: () => (/* binding */ overrideNetworkModificationTime)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const addFiles = function(testFileSystem, files) {
  for (const filePath in files) {
    const file = files[filePath];
    testFileSystem.addFile(filePath, file.content, (file.time ? file.time.getTime() : 0));
  }
};

let timeOverrides;
let originalRequestMetadata;

const overrideNetworkModificationTime = function(urlToTime) {
  if (!timeOverrides) {
    timeOverrides = new Map();
    originalRequestMetadata = TestRunner.override(
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ContentProviderBasedProject.ContentProviderBasedProject.prototype, 'requestMetadata', overrideTime,
        true);
  }

  for (const url in urlToTime) {
    timeOverrides.set(url, urlToTime[url]);
  }

  function overrideTime(uiSourceCode) {
    if (!timeOverrides.has(uiSourceCode.url())) {
      return originalRequestMetadata.call(this, uiSourceCode);
    }

    const override = timeOverrides.get(uiSourceCode.url());
    return originalRequestMetadata.call(this, uiSourceCode).then(onOriginalMetadata.bind(null, override));
  }

  function onOriginalMetadata(timeOverride, metadata) {
    if (!timeOverride && !metadata) {
      return null;
    }

    return new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UISourceCodeMetadata(timeOverride, (metadata ? metadata.contentSize : null));
  }
};

const AutomappingTest = function(workspace) {
  this.workspace = workspace;
  this.networkProject = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ContentProviderBasedProject.ContentProviderBasedProject(
      this.workspace, 'AUTOMAPPING', _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.Network, 'simple website');

  if (workspace !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance()) {
    new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance(), this.workspace);
  }

  this.failedBindingsCount = 0;
  this.automapping = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.Automapping.Automapping(
      this.workspace, this._onStatusAdded.bind(this), this._onStatusRemoved.bind(this));
  TestRunner.addSniffer(this.automapping, 'onBindingFailedForTest', this._onBindingFailed.bind(this), true);
  TestRunner.addSniffer(this.automapping, 'onSweepHappenedForTest', this._onSweepHappened.bind(this), true);
};

AutomappingTest.prototype = {
  removeResources: function(urls) {
    for (const url of urls) {
      this.networkProject.removeUISourceCode(url);
    }
  },

  addNetworkResources: function(assets) {
    for (const url in assets) {
      const asset = assets[url];
      const contentType = asset.contentType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script;
      const contentProvider =
          _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.StaticContentProvider.StaticContentProvider.fromString(url, contentType, asset.content);
      const metadata =
          (typeof asset.content === 'string' || asset.time ?
               new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UISourceCodeMetadata(asset.time, asset.content.length) :
               null);
      const uiSourceCode = this.networkProject.createUISourceCode(url, contentType);
      this.networkProject.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata);
    }
  },

  waitUntilMappingIsStabilized: function() {
    const promise = new Promise(x => {
      this.stabilizedCallback = x;
    });
    this._checkStabilized();
    return promise;
  },

  _onSweepHappened: function() {
    this.failedBindingsCount = 0;
    this._checkStabilized();
  },

  _onStatusRemoved: function(status) {
    TestRunner.addResult('Binding removed: ' + status);
    this._checkStabilized();
  },

  _onStatusAdded: function(status) {
    TestRunner.addResult('Binding created: ' + status);
    this._checkStabilized();
  },

  _onBindingFailed: function() {
    ++this.failedBindingsCount;
    this._checkStabilized();
  },

  _checkStabilized: function() {
    if (!this.stabilizedCallback || this.automapping.sweepThrottler.process) {
      return;
    }

    const networkUISourceCodes = this.workspace.uiSourceCodesForProjectType(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.Network);
    const stabilized = this.failedBindingsCount + this.automapping.statuses.size === networkUISourceCodes.length;

    if (stabilized) {
      TestRunner.addResult('Mapping has stabilized.');
      const callback = this.stabilizedCallback;
      delete this.stabilizedCallback;
      callback.call(null);
    }
  }
};


/***/ })

}]);