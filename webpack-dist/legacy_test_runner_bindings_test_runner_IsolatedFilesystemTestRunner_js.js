"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["legacy_test_runner_bindings_test_runner_IsolatedFilesystemTestRunner_js"],{

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


/***/ })

}]);