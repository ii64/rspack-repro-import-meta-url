"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_bindings_test_runner_AutomappingTestRunner_js"], {
"./legacy_test_runner/bindings_test_runner/AutomappingTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AutomappingTest: function() { return AutomappingTest; },
  addFiles: function() { return addFiles; },
  overrideNetworkModificationTime: function() { return overrideNetworkModificationTime; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var addFiles = function addFiles(testFileSystem, files) {
    for(var filePath in files){
        var file = files[filePath];
        testFileSystem.addFile(filePath, file.content, file.time ? file.time.getTime() : 0);
    }
};
var timeOverrides;
var originalRequestMetadata;
var overrideNetworkModificationTime = function overrideNetworkModificationTime(urlToTime) {
    if (!timeOverrides) {
        timeOverrides = new Map();
        originalRequestMetadata = TestRunner.override(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ContentProviderBasedProject.ContentProviderBasedProject.prototype, 'requestMetadata', overrideTime, true);
    }
    for(var url in urlToTime){
        timeOverrides.set(url, urlToTime[url]);
    }
    function overrideTime(uiSourceCode) {
        if (!timeOverrides.has(uiSourceCode.url())) {
            return originalRequestMetadata.call(this, uiSourceCode);
        }
        var override = timeOverrides.get(uiSourceCode.url());
        return originalRequestMetadata.call(this, uiSourceCode).then(onOriginalMetadata.bind(null, override));
    }
    function onOriginalMetadata(timeOverride, metadata) {
        if (!timeOverride && !metadata) {
            return null;
        }
        return new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UISourceCodeMetadata(timeOverride, metadata ? metadata.contentSize : null);
    }
};
var AutomappingTest = function AutomappingTest(workspace) {
    this.workspace = workspace;
    this.networkProject = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ContentProviderBasedProject.ContentProviderBasedProject(this.workspace, 'AUTOMAPPING', _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.Network, 'simple website');
    if (workspace !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.WorkspaceImpl.instance()) {
        new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance(), this.workspace);
    }
    this.failedBindingsCount = 0;
    this.automapping = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.Automapping.Automapping(this.workspace, this._onStatusAdded.bind(this), this._onStatusRemoved.bind(this));
    TestRunner.addSniffer(this.automapping, 'onBindingFailedForTest', this._onBindingFailed.bind(this), true);
    TestRunner.addSniffer(this.automapping, 'onSweepHappenedForTest', this._onSweepHappened.bind(this), true);
};
AutomappingTest.prototype = {
    removeResources: function removeResources(urls) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = urls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var url = _step.value;
                this.networkProject.removeUISourceCode(url);
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
    },
    addNetworkResources: function addNetworkResources(assets) {
        for(var url in assets){
            var asset = assets[url];
            var contentType = asset.contentType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script;
            var contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.StaticContentProvider.StaticContentProvider.fromString(url, contentType, asset.content);
            var metadata = typeof asset.content === 'string' || asset.time ? new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.UISourceCodeMetadata(asset.time, asset.content.length) : null;
            var uiSourceCode = this.networkProject.createUISourceCode(url, contentType);
            this.networkProject.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata);
        }
    },
    waitUntilMappingIsStabilized: function waitUntilMappingIsStabilized() {
        var _this = this;
        var promise = new Promise(function(x) {
            _this.stabilizedCallback = x;
        });
        this._checkStabilized();
        return promise;
    },
    _onSweepHappened: function _onSweepHappened() {
        this.failedBindingsCount = 0;
        this._checkStabilized();
    },
    _onStatusRemoved: function _onStatusRemoved(status) {
        TestRunner.addResult('Binding removed: ' + status);
        this._checkStabilized();
    },
    _onStatusAdded: function _onStatusAdded(status) {
        TestRunner.addResult('Binding created: ' + status);
        this._checkStabilized();
    },
    _onBindingFailed: function _onBindingFailed() {
        ++this.failedBindingsCount;
        this._checkStabilized();
    },
    _checkStabilized: function _checkStabilized() {
        if (!this.stabilizedCallback || this.automapping.sweepThrottler.process) {
            return;
        }
        var networkUISourceCodes = this.workspace.uiSourceCodesForProjectType(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.Workspace.projectTypes.Network);
        var stabilized = this.failedBindingsCount + this.automapping.statuses.size === networkUISourceCodes.length;
        if (stabilized) {
            TestRunner.addResult('Mapping has stabilized.');
            var callback = this.stabilizedCallback;
            delete this.stabilizedCallback;
            callback.call(null);
        }
    }
};


}),

}]);