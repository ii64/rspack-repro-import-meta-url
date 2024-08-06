"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_bindings_test_runner_IsolatedFilesystemTestRunner_js"], {
"./legacy_test_runner/bindings_test_runner/IsolatedFilesystemTestRunner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TestFileSystem: function() { return TestFileSystem; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.isolatedFileSystem = function(name) {
    return TestFileSystem.instances[name];
};
var TestFileSystem = function TestFileSystem1(fileSystemPath) {
    this.root = new TestFileSystem.Entry(this, '', true, null);
    this.fileSystemPath = fileSystemPath;
};
TestFileSystem.instances = {};
TestFileSystem.prototype = {
    dumpAsText: function dumpAsText() {
        var result = [];
        dfs(this.root, '');
        result[0] = this.fileSystemPath;
        return result.join('\n');
        function dfs(node, indent) {
            result.push(indent + node.name);
            var newIndent = indent + '    ';
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = node.children.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var child = _step.value;
                    dfs(child, newIndent);
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
    },
    reportCreatedPromise: function reportCreatedPromise(type) {
        var _this = this;
        return new Promise(function(fulfill) {
            return _this.reportCreated(fulfill, type);
        });
    },
    reportCreated: function reportCreated(callback, type) {
        var fileSystemPath = this.fileSystemPath;
        TestFileSystem.instances[this.fileSystemPath] = this;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemAdded, {
            fileSystem: {
                fileSystemPath: this.fileSystemPath,
                fileSystemName: this.fileSystemPath,
                type: type
            }
        });
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.Events.FileSystemAdded, created);
        function created(event) {
            var fileSystem = event.data;
            if (fileSystem.path() !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.rawPathToUrlString(fileSystemPath)) {
                return;
            }
            _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().removeEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_2__.IsolatedFileSystemManager.Events.FileSystemAdded, created);
            callback(fileSystem);
        }
    },
    reportRemoved: function reportRemoved() {
        delete TestFileSystem.instances[this.fileSystemPath];
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemRemoved, this.fileSystemPath);
    },
    addFile: function addFile(path, content, lastModified) {
        var pathTokens = path.split('/');
        var node = this.root;
        var folders = pathTokens.slice(0, pathTokens.length - 1);
        var fileName = pathTokens[pathTokens.length - 1];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = folders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var folder = _step.value;
                var dir = node.children.get(folder);
                if (!dir) {
                    dir = node.mkdir(folder);
                }
                node = dir;
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
        var file = node.addFile(fileName, content);
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
    get fullPath () {
        return this.parent ? this.parent.fullPath + '/' + this.name : '';
    },
    remove: function remove(success, failure) {
        this.parent.removeChild(this, success, failure);
    },
    removeChild: function removeChild(child, success, failure) {
        if (!this.children.has(child.name)) {
            failure('Failed to remove file: file not found.');
            return;
        }
        var fullPath = this.fileSystem.fileSystemPath + child.fullPath;
        this.children.delete(child.name);
        child.parent = null;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved, {
            changed: [],
            added: [],
            removed: [
                fullPath
            ]
        });
        success();
    },
    mkdir: function mkdir(name) {
        var child = new TestFileSystem.Entry(this.fileSystem, name, true, this);
        this.children.set(name, child);
        return child;
    },
    addFile: function addFile(name, content) {
        var child = new TestFileSystem.Entry(this.fileSystem, name, false, this);
        this.children.set(name, child);
        child.content = new Blob([
            content
        ], {
            type: 'text/plain'
        });
        var fullPath = this.fileSystem.fileSystemPath + child.fullPath;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved, {
            changed: [],
            added: [
                fullPath
            ],
            removed: []
        });
        return child;
    },
    setContent: function setContent(content) {
        this.content = new Blob([
            content
        ], {
            type: 'text/plain'
        });
        this.timestamp += 1000;
        var fullPath = this.fileSystem.fileSystemPath + this.fullPath;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.FileSystemFilesChangedAddedRemoved, {
            changed: [
                fullPath
            ],
            added: [],
            removed: []
        });
    },
    createReader: function createReader() {
        return new TestFileSystem.Reader(_to_consumable_array(this.children.values()));
    },
    createWriter: function createWriter(success, failure) {
        success(new TestFileSystem.Writer(this));
    },
    file: function file(callback) {
        callback(this.content);
    },
    getDirectory: function getDirectory(path, noop, callback, errorCallback) {
        this.getEntry(path, noop, callback, errorCallback);
    },
    getFile: function getFile(path, noop, callback, errorCallback) {
        this.getEntry(path, noop, callback, errorCallback);
    },
    createEntry: function createEntry(path, options, callback, errorCallback) {
        var tokens = path.split('/');
        var name = tokens.pop();
        var parentEntry = this;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var token = _step.value;
                parentEntry = parentEntry.children.get(token);
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
        var entry = parentEntry.children.get(name);
        if (entry && options.exclusive) {
            errorCallback(new DOMException('File exists: ' + path, 'InvalidModificationError'));
            return;
        }
        if (!entry) {
            entry = parentEntry.addFile(name, '');
        }
        callback(entry);
    },
    getEntry: function getEntry(path, options, callback, errorCallback) {
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
        var entry = this;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = path.split('/')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var token = _step.value;
                entry = entry.children.get(token);
                if (!entry) {
                    break;
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
        entry ? callback(entry) : errorCallback(new DOMException('Path not found: ' + path, 'NotFoundError'));
    },
    getMetadata: function getMetadata(success, failure) {
        success({
            modificationTime: new Date(this.timestamp),
            size: this.isDirectory ? 0 : this.content.size
        });
    },
    moveTo: function moveTo(parent, newName, callback, errorCallback) {
        this.parent.children.delete(this.name);
        this.parent = parent;
        this.name = newName;
        this.parent.children.set(this.name, this);
        callback(this);
    },
    getParent: function getParent(callback, errorCallback) {
        callback(this.parent);
    }
};
TestFileSystem.Reader = function(children) {
    this.children = children;
};
TestFileSystem.Reader.prototype = {
    readEntries: function readEntries(callback) {
        var children = this.children;
        this.children = [];
        callback(children);
    }
};
TestFileSystem.Writer = function(entry) {
    this.entry = entry;
    this.modificationTimesDelta = 500;
};
TestFileSystem.Writer.prototype = {
    write: function write(blob) {
        this.entry.timestamp += this.modificationTimesDelta;
        this.entry.content = blob;
        if (this.onwriteend) {
            this.onwriteend();
        }
    },
    truncate: function truncate(num) {
        this.entry.timestamp += this.modificationTimesDelta;
        this.entry.content = this.entry.content.slice(0, num);
        if (this.onwriteend) {
            this.onwriteend();
        }
    }
};


}),

}]);