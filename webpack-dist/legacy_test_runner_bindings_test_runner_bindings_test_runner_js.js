"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_bindings_test_runner_bindings_test_runner_js"],{

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


/***/ }),

/***/ "./legacy_test_runner/bindings_test_runner/BindingsTestRunner.js":
/*!***********************************************************************!*\
  !*** ./legacy_test_runner/bindings_test_runner/BindingsTestRunner.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GC: () => (/* binding */ GC),
/* harmony export */   attachFrame: () => (/* binding */ attachFrame),
/* harmony export */   attachShadowDOM: () => (/* binding */ attachShadowDOM),
/* harmony export */   cleanupURL: () => (/* binding */ cleanupURL),
/* harmony export */   createCSSLiveLocation: () => (/* binding */ createCSSLiveLocation),
/* harmony export */   createDebuggerLiveLocation: () => (/* binding */ createDebuggerLiveLocation),
/* harmony export */   detachFrame: () => (/* binding */ detachFrame),
/* harmony export */   detachShadowDOM: () => (/* binding */ detachShadowDOM),
/* harmony export */   dumpLocation: () => (/* binding */ dumpLocation),
/* harmony export */   dumpWorkspace: () => (/* binding */ dumpWorkspace),
/* harmony export */   navigateFrame: () => (/* binding */ navigateFrame),
/* harmony export */   waitForSourceMap: () => (/* binding */ waitForSourceMap),
/* harmony export */   waitForStyleSheetRemoved: () => (/* binding */ waitForStyleSheetRemoved)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */




const cleanupURL = function(url) {
  if (!url.startsWith('debugger://')) {
    return url;
  }

  return url.replace(/VM\d+/g, 'VM[XXX]');
};

const dumpWorkspace = function(previousSnapshot) {
  const uiSourceCodes = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance().uiSourceCodes().slice();
  let urls = uiSourceCodes.map(code => code.url());

  urls = urls.map(cleanupURL);

  urls.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.StringUtilities.caseInsensetiveComparator);
  const isAdded = new Array(urls.length).fill(false);
  let removedLines = [];

  if (previousSnapshot) {
    const diff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.DiffWrapper.lineDiff(previousSnapshot, urls);
    const removedEntries = diff.filter(entry => entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Delete).map(entry => entry[1]);
    removedLines = [].concat.apply([], removedEntries);
    let index = 0;

    for (const entry of diff) {
      if (entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Delete) {
        continue;
      }

      if (entry[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_4__.Diff.Operation.Equal) {
        index += entry[1].length;
        continue;
      }

      // eslint-disable-next-line no-unused-vars
      for (const line of entry[1]) {
        isAdded[index++] = true;
      }
    }
  }

  TestRunner.addResult(`Removed: ${removedLines.length} uiSourceCodes`);

  for (const url of removedLines) {
    TestRunner.addResult('[-] ' + url);
  }

  TestRunner.addResult(`Workspace: ${urls.length} uiSourceCodes.`);

  for (let i = 0; i < urls.length; ++i) {
    const url = urls[i];
    const prefix = (isAdded[i] ? '[+] ' : '    ');
    TestRunner.addResult(prefix + url);
  }

  return urls;
};

const attachFrame = function(frameId, url, evalSourceURL) {
  let evalSource = `(${attachFrame.toString()})('${frameId}', '${url}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAsync(evalSource);

  function attachFrame(frameId, url) {
    const frame = document.createElement('iframe');
    frame.src = url;
    frame.id = frameId;
    document.body.appendChild(frame);
    return new Promise(x => {
      frame.onload = x;
    });
  }
};

const detachFrame = function(frameId, evalSourceURL) {
  let evalSource = `(${detachFrame.toString()})('${frameId}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAnonymously(evalSource);

  function detachFrame(frameId) {
    const frame = document.getElementById(frameId);
    frame.remove();
  }
};

const navigateFrame = function(frameId, navigateURL, evalSourceURL) {
  let evalSource = `(${navigateFrame.toString()})('${frameId}', '${navigateURL}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAsync(evalSource);

  function navigateFrame(frameId, url) {
    const frame = document.getElementById(frameId);
    frame.src = url;
    return new Promise(x => {
      frame.onload = x;
    });
  }
};

const attachShadowDOM = function(id, templateSelector, evalSourceURL) {
  let evalSource = `(${createShadowDOM.toString()})('${id}', '${templateSelector}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAnonymously(evalSource);

  function createShadowDOM(id, templateSelector) {
    const shadowHost = document.createElement('div');
    shadowHost.setAttribute('id', id);

    const shadowRoot = shadowHost.attachShadow({mode: 'open'});

    const t = document.querySelector(templateSelector);
    const instance = t.content.cloneNode(true);
    shadowRoot.appendChild(instance);
    document.body.appendChild(shadowHost);
  }
};

const detachShadowDOM = function(id, evalSourceURL) {
  let evalSource = `(${removeShadowDOM.toString()})('${id}')`;

  if (evalSourceURL) {
    evalSource += '//# sourceURL=' + evalSourceURL;
  }

  return TestRunner.evaluateInPageAnonymously(evalSource);

  function removeShadowDOM(id) {
    document.querySelector('#' + id).remove();
  }
};

const waitForStyleSheetRemoved = function(urlSuffix) {
  let fulfill;
  const promise = new Promise(x => {
    fulfill = x;
  });
  TestRunner.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, onStyleSheetRemoved);
  return promise;

  function onStyleSheetRemoved(event) {
    const styleSheetHeader = event.data;

    if (!styleSheetHeader.resourceURL().endsWith(urlSuffix)) {
      return;
    }

    TestRunner.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, onStyleSheetRemoved);
    fulfill();
  }
};

TestRunner.addSniffer(
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CompilerScriptMapping.CompilerScriptMapping.prototype, 'sourceMapAttachedForTest', onSourceMap, true);
TestRunner.addSniffer(
    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.SASSSourceMapping.SASSSourceMapping.prototype, 'sourceMapAttachedForTest', onSourceMap, true);
const sourceMapCallbacks = new Map();

function onSourceMap(sourceMap) {
  for (const urlSuffix of sourceMapCallbacks.keys()) {
    if (sourceMap.url().endsWith(urlSuffix)) {
      const callback = sourceMapCallbacks.get(urlSuffix);
      callback.call(null);
      sourceMapCallbacks.delete(urlSuffix);
    }
  }
}

const waitForSourceMap = function(sourceMapURLSuffix) {
  let fulfill;
  const promise = new Promise(x => {
    fulfill = x;
  });
  sourceMapCallbacks.set(sourceMapURLSuffix, fulfill);
  return promise;
};

const locationPool = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.LiveLocation.LiveLocationPool();
const nameSymbol = Symbol('LiveLocationNameForTest');
const createdSymbol = Symbol('LiveLocationCreated');

const createDebuggerLiveLocation = function(name, urlSuffix, lineNumber, columnNumber, dumpOnUpdate = true) {
  const script = TestRunner.debuggerModel.scripts().find(script => script.sourceURL.endsWith(urlSuffix));
  const rawLocation = TestRunner.debuggerModel.createRawLocation(script, lineNumber || 0, columnNumber || 0);
  return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().createLiveLocation(
      rawLocation, updateDelegate.bind(null, name, dumpOnUpdate), locationPool);
};

const createCSSLiveLocation = function(name, urlSuffix, lineNumber, columnNumber, dumpOnUpdate = true) {
  const header = TestRunner.cssModel.styleSheetHeaders().find(header => header.resourceURL().endsWith(urlSuffix));
  const rawLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSLocation(header, lineNumber || 0, columnNumber || 0);
  return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().createLiveLocation(
      rawLocation, updateDelegate.bind(null, name, dumpOnUpdate), locationPool);
};

async function updateDelegate(name, dumpOnUpdate, liveLocation) {
  liveLocation[nameSymbol] = name;
  const hint = (liveLocation[createdSymbol] ? '[ UPDATE ]' : '[ CREATE ]');
  liveLocation[createdSymbol] = true;
  if (dumpOnUpdate) {
    await dumpLocation(liveLocation, hint);
  }
}

const dumpLocation = async function(liveLocation, hint) {
  hint = hint || '[  GET   ]';
  const prefix = `${hint}  LiveLocation-${liveLocation[nameSymbol]}: `;
  const uiLocation = await liveLocation.uiLocation();

  if (!uiLocation) {
    TestRunner.addResult(prefix + 'null');
    return;
  }

  TestRunner.addResult(
      prefix + cleanupURL(uiLocation.uiSourceCode.url()) + ':' + uiLocation.lineNumber + ':' + uiLocation.columnNumber);
};

const GC = async () => {
  await TestRunner.evaluateInPageAsync(`new Promise(resolve =>
    GCController.asyncCollectAll(resolve))`);
};


/***/ }),

/***/ "./legacy_test_runner/bindings_test_runner/IsolatedFilesystemTestRunner.js":
/*!*********************************************************************************!*\
  !*** ./legacy_test_runner/bindings_test_runner/IsolatedFilesystemTestRunner.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestFileSystem: () => (/* binding */ TestFileSystem)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.isolatedFileSystem = function(name) {
  return TestFileSystem.instances[name];
};

const TestFileSystem = function(fileSystemPath) {
  this.root = new TestFileSystem.Entry(this, '', true, null);
  this.fileSystemPath = fileSystemPath;
};

TestFileSystem.instances = {};

TestFileSystem.prototype = {
  dumpAsText: function() {
    const result = [];
    dfs(this.root, '');
    result[0] = this.fileSystemPath;
    return result.join('\n');

    function dfs(node, indent) {
      result.push(indent + node.name);
      const newIndent = indent + '    ';

      for (const child of node.children.values()) {
        dfs(child, newIndent);
      }
    }
  },

  reportCreatedPromise: function(type) {
    return new Promise(fulfill => this.reportCreated(fulfill, type));
  },

  reportCreated: function(callback, type) {
    const fileSystemPath = this.fileSystemPath;
    TestFileSystem.instances[this.fileSystemPath] = this;

    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemAdded,
        {fileSystem: {fileSystemPath: this.fileSystemPath, fileSystemName: this.fileSystemPath, type}});

    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addEventListener(
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.Events.FileSystemAdded, created);

    function created(event) {
      const fileSystem = event.data;
      if (fileSystem.path() !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.rawPathToUrlString(fileSystemPath)) {
        return;
      }

      _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().removeEventListener(
          _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.Events.FileSystemAdded, created);
      callback(fileSystem);
    }
  },

  reportRemoved: function() {
    delete TestFileSystem.instances[this.fileSystemPath];
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemRemoved, this.fileSystemPath);
  },

  addFile: function(path, content, lastModified) {
    const pathTokens = path.split('/');
    let node = this.root;
    const folders = pathTokens.slice(0, pathTokens.length - 1);
    const fileName = pathTokens[pathTokens.length - 1];

    for (const folder of folders) {
      let dir = node.children.get(folder);

      if (!dir) {
        dir = node.mkdir(folder);
      }

      node = dir;
    }

    const file = node.addFile(fileName, content);

    if (lastModified) {
      file.timestamp = lastModified;
    }

    return file;
  }
};

TestFileSystem.Entry = function(fileSystem, name, isDirectory, parent) {
  this.fileSystem = fileSystem;
  this.name = name;
  this.children = new Map();
  this.isDirectory = isDirectory;
  this.timestamp = 1000000;
  this.parent = parent;
};

TestFileSystem.Entry.prototype = {
  get fullPath() {
    return (this.parent ? this.parent.fullPath + '/' + this.name : '');
  },

  remove: function(success, failure) {
    this.parent.removeChild(this, success, failure);
  },

  removeChild: function(child, success, failure) {
    if (!this.children.has(child.name)) {
      failure('Failed to remove file: file not found.');
      return;
    }

    const fullPath = this.fileSystem.fileSystemPath + child.fullPath;
    this.children.delete(child.name);
    child.parent = null;

    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved,
        {changed: [], added: [], removed: [fullPath]});

    success();
  },

  mkdir: function(name) {
    const child = new TestFileSystem.Entry(this.fileSystem, name, true, this);
    this.children.set(name, child);
    return child;
  },

  addFile: function(name, content) {
    const child = new TestFileSystem.Entry(this.fileSystem, name, false, this);
    this.children.set(name, child);

    child.content = new Blob([content], {type: 'text/plain'});

    const fullPath = this.fileSystem.fileSystemPath + child.fullPath;

    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved,
        {changed: [], added: [fullPath], removed: []});

    return child;
  },

  setContent: function(content) {
    this.content = new Blob([content], {type: 'text/plain'});

    this.timestamp += 1000;
    const fullPath = this.fileSystem.fileSystemPath + this.fullPath;

    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved,
        {changed: [fullPath], added: [], removed: []});
  },

  createReader: function() {
    return new TestFileSystem.Reader([...this.children.values()]);
  },

  createWriter: function(success, failure) {
    success(new TestFileSystem.Writer(this));
  },

  file: function(callback) {
    callback(this.content);
  },

  getDirectory: function(path, noop, callback, errorCallback) {
    this.getEntry(path, noop, callback, errorCallback);
  },

  getFile: function(path, noop, callback, errorCallback) {
    this.getEntry(path, noop, callback, errorCallback);
  },

  createEntry: function(path, options, callback, errorCallback) {
    const tokens = path.split('/');
    const name = tokens.pop();
    let parentEntry = this;

    for (const token of tokens) {
      parentEntry = parentEntry.children.get(token);
    }

    let entry = parentEntry.children.get(name);

    if (entry && options.exclusive) {
      errorCallback(new DOMException('File exists: ' + path, 'InvalidModificationError'));
      return;
    }

    if (!entry) {
      entry = parentEntry.addFile(name, '');
    }

    callback(entry);
  },

  getEntry: function(path, options, callback, errorCallback) {
    if (path.startsWith('/')) {
      path = path.substring(1);
    }

    if (options && options.create) {
      this.createEntry(path, options, callback, errorCallback);
      return;
    }

    if (!path) {
      callback(this);
      return;
    }

    let entry = this;

    for (const token of path.split('/')) {
      entry = entry.children.get(token);
      if (!entry) {
        break;
      }
    }

    (entry ? callback(entry) : errorCallback(new DOMException('Path not found: ' + path, 'NotFoundError')));
  },

  getMetadata: function(success, failure) {
    success({modificationTime: new Date(this.timestamp), size: (this.isDirectory ? 0 : this.content.size)});
  },

  moveTo: function(parent, newName, callback, errorCallback) {
    this.parent.children.delete(this.name);
    this.parent = parent;
    this.name = newName;
    this.parent.children.set(this.name, this);
    callback(this);
  },

  getParent: function(callback, errorCallback) {
    callback(this.parent);
  }
};

TestFileSystem.Reader = function(children) {
  this.children = children;
};

TestFileSystem.Reader.prototype = {
  readEntries: function(callback) {
    const children = this.children;
    this.children = [];
    callback(children);
  }
};

TestFileSystem.Writer = function(entry) {
  this.entry = entry;
  this.modificationTimesDelta = 500;
};

TestFileSystem.Writer.prototype = {
  write: function(blob) {
    this.entry.timestamp += this.modificationTimesDelta;
    this.entry.content = blob;

    if (this.onwriteend) {
      this.onwriteend();
    }
  },

  truncate: function(num) {
    this.entry.timestamp += this.modificationTimesDelta;
    this.entry.content = this.entry.content.slice(0, num);

    if (this.onwriteend) {
      this.onwriteend();
    }
  }
};


/***/ }),

/***/ "./legacy_test_runner/bindings_test_runner/OverridesTestRunner.js":
/*!************************************************************************!*\
  !*** ./legacy_test_runner/bindings_test_runner/OverridesTestRunner.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOverrideProject: () => (/* binding */ createOverrideProject),
/* harmony export */   setOverridesEnabled: () => (/* binding */ setOverridesEnabled)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */ var _IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IsolatedFilesystemTestRunner.js */ "./legacy_test_runner/bindings_test_runner/IsolatedFilesystemTestRunner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







/**
 * @param {string} folderPath
 * @return {!Promise<!{isolatedFileSystem: !Persistence.IsolatedFileSystem.IsolatedFileSystem, project: !Workspace.Workspace.Project, testFileSystem: !BindingsTestRunner.TestFileSystem}>}
 */
const createOverrideProject = async function(folderPath) {
  const testFileSystem = new _IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_3__.TestFileSystem(folderPath);
  const isolatedFileSystem = await testFileSystem.reportCreatedPromise('overrides');
  isolatedFileSystem.typeInternal = 'overrides';
  const project = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.WorkspaceImpl.instance().project(
      _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_1__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.projectId(isolatedFileSystem.path()));
  console.assert(project);
  return {isolatedFileSystem, project, testFileSystem};
};

/**
 * @param {boolean} enabled
 */
const setOverridesEnabled = function(enabled) {
  _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('persistence-network-overrides-enabled').set(enabled);
};


/***/ }),

/***/ "./legacy_test_runner/bindings_test_runner/PersistenceTestRunner.js":
/*!**************************************************************************!*\
  !*** ./legacy_test_runner/bindings_test_runner/PersistenceTestRunner.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFooJSFile: () => (/* binding */ addFooJSFile),
/* harmony export */   initializeTestMapping: () => (/* binding */ initializeTestMapping),
/* harmony export */   waitForBinding: () => (/* binding */ waitForBinding)
/* harmony export */ });
/* harmony import */ var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */ var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
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


/***/ }),

/***/ "./legacy_test_runner/bindings_test_runner/bindings_test_runner.js":
/*!*************************************************************************!*\
  !*** ./legacy_test_runner/bindings_test_runner/bindings_test_runner.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BindingsTestRunner: () => (/* binding */ BindingsTestRunner)
/* harmony export */ });
/* harmony import */ var _AutomappingTestRunner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutomappingTestRunner.js */ "./legacy_test_runner/bindings_test_runner/AutomappingTestRunner.js");
/* harmony import */ var _BindingsTestRunner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BindingsTestRunner.js */ "./legacy_test_runner/bindings_test_runner/BindingsTestRunner.js");
/* harmony import */ var _IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IsolatedFilesystemTestRunner.js */ "./legacy_test_runner/bindings_test_runner/IsolatedFilesystemTestRunner.js");
/* harmony import */ var _OverridesTestRunner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverridesTestRunner.js */ "./legacy_test_runner/bindings_test_runner/OverridesTestRunner.js");
/* harmony import */ var _PersistenceTestRunner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PersistenceTestRunner.js */ "./legacy_test_runner/bindings_test_runner/PersistenceTestRunner.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const BindingsTestRunner = {
  ..._BindingsTestRunner_js__WEBPACK_IMPORTED_MODULE_1__,
  ..._IsolatedFilesystemTestRunner_js__WEBPACK_IMPORTED_MODULE_2__,
  ..._AutomappingTestRunner_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._PersistenceTestRunner_js__WEBPACK_IMPORTED_MODULE_4__,
  ..._OverridesTestRunner_js__WEBPACK_IMPORTED_MODULE_3__,
};


/***/ })

}]);