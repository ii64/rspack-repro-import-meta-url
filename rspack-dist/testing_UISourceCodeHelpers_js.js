"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_UISourceCodeHelpers_js"], {
"./testing/UISourceCodeHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createContentProviderUISourceCode: function() { return createContentProviderUISourceCode; },
  createContentProviderUISourceCodes: function() { return createContentProviderUISourceCodes; },
  createFakeScriptMapping: function() { return createFakeScriptMapping; },
  createFileSystemUISourceCode: function() { return createFileSystemUISourceCode; },
  setupMockedUISourceCode: function() { return setupMockedUISourceCode; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}






function createContentProviderUISourceCodes(options) {
    var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    var projectType = options.projectType || _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Formatter;
    assert.notEqual(projectType, _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.FileSystem, 'For creating file system UISourceCodes use \'createFileSystemUISourceCode\' helper.');
    var project = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject(workspace, options.projectId || 'PROJECT_ID', projectType, 'Test project', false);
    if (options.target) {
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.NetworkProject.NetworkProject.setTargetForProject(project, options.target);
    }
    var uiSourceCodes = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = options.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            var resourceType = item.resourceType || _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(item.mimeType);
            var uiSourceCode = project.createUISourceCode(item.url, resourceType);
            var contentProvider = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.StaticContentProvider.StaticContentProvider.fromString(item.url, resourceType, item.content || '');
            var metadata = item.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
            project.addUISourceCodeWithProvider(uiSourceCode, contentProvider, metadata, item.mimeType);
            uiSourceCodes.push(uiSourceCode);
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
    return {
        project: project,
        uiSourceCodes: uiSourceCodes
    };
}
function createContentProviderUISourceCode(options) {
    var url = options.url, content = options.content, mimeType = options.mimeType, metadata = options.metadata, projectType = options.projectType, projectId = options.projectId, target = options.target;
    var _createContentProviderUISourceCodes = createContentProviderUISourceCodes({
        items: [
            {
                url: url,
                content: content,
                mimeType: mimeType,
                metadata: metadata
            }
        ],
        projectType: projectType,
        projectId: projectId,
        target: target
    }), project = _createContentProviderUISourceCodes.project, uiSourceCodes = _createContentProviderUISourceCodes.uiSourceCodes;
    return {
        project: project,
        uiSourceCode: uiSourceCodes[0]
    };
}
var _mimeType = /*#__PURE__*/ new WeakMap(), _autoMapping = /*#__PURE__*/ new WeakMap();
var TestPlatformFileSystem = /*#__PURE__*/ function(_Persistence_PlatformFileSystem_PlatformFileSystem) {
    "use strict";
    _inherits(TestPlatformFileSystem, _Persistence_PlatformFileSystem_PlatformFileSystem);
    var _super = _create_super(TestPlatformFileSystem);
    function TestPlatformFileSystem(path, type, mimeType, autoMapping) {
        _class_call_check(this, TestPlatformFileSystem);
        var _this;
        _this = _super.call(this, path, type);
        _class_private_field_init(_assert_this_initialized(_this), _mimeType, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _autoMapping, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _mimeType, mimeType);
        _class_private_field_set(_assert_this_initialized(_this), _autoMapping, autoMapping);
        return _this;
    }
    _create_class(TestPlatformFileSystem, [
        {
            key: "supportsAutomapping",
            value: function supportsAutomapping() {
                return _class_private_field_get(this, _autoMapping);
            }
        },
        {
            key: "mimeFromPath",
            value: function mimeFromPath(_path) {
                return _class_private_field_get(this, _mimeType);
            }
        }
    ]);
    return TestPlatformFileSystem;
}(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.PlatformFileSystem.PlatformFileSystem);
var _content = /*#__PURE__*/ new WeakMap(), _metadata = /*#__PURE__*/ new WeakMap();
var TestFileSystem = /*#__PURE__*/ function(_Persistence_FileSystemWorkspaceBinding_FileSystem) {
    "use strict";
    _inherits(TestFileSystem, _Persistence_FileSystemWorkspaceBinding_FileSystem);
    var _super = _create_super(TestFileSystem);
    function TestFileSystem(options) {
        _class_call_check(this, TestFileSystem);
        var _this;
        _this = _super.call(this, options.fileSystemWorkspaceBinding, options.platformFileSystem, options.workspace);
        _class_private_field_init(_assert_this_initialized(_this), _content, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _metadata, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _content, options.content);
        _class_private_field_set(_assert_this_initialized(_this), _metadata, options.metadata);
        return _this;
    }
    _create_class(TestFileSystem, [
        {
            key: "requestFileContent",
            value: function requestFileContent(_uiSourceCode) {
                return Promise.resolve(new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData(_class_private_field_get(this, _content), /* isBase64 */ false, 'text/plain'));
            }
        },
        {
            key: "requestMetadata",
            value: function requestMetadata(_uiSourceCode) {
                return Promise.resolve(_class_private_field_get(this, _metadata));
            }
        }
    ]);
    return TestFileSystem;
}(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystem);
function createFileSystemUISourceCode(options) {
    var workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
    var isolatedFileSystemManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance();
    var fileSystemWorkspaceBinding = new _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding(isolatedFileSystemManager, workspace);
    var fileSystemPath = options.fileSystemPath || '';
    var type = options.type || '';
    var content = options.content || '';
    var platformFileSystem = new TestPlatformFileSystem(fileSystemPath, type, options.mimeType, Boolean(options.autoMapping));
    var metadata = options.metadata || new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCodeMetadata(null, null);
    var project = new TestFileSystem({
        fileSystemWorkspaceBinding: fileSystemWorkspaceBinding,
        platformFileSystem: platformFileSystem,
        workspace: workspace,
        content: content,
        metadata: metadata
    });
    var uiSourceCode = project.createUISourceCode(options.url, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(options.mimeType));
    project.addUISourceCode(uiSourceCode);
    return {
        uiSourceCode: uiSourceCode,
        project: project
    };
}
function setupMockedUISourceCode() {
    var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'https://example.com/';
    var projectStub = sinon.createStubInstance(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ContentProviderBasedProject.ContentProviderBasedProject);
    var urlStringTagExample = url;
    var contentTypeStub = sinon.createStubInstance(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType);
    var uiSourceCode = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UISourceCode(projectStub, urlStringTagExample, contentTypeStub);
    return {
        sut: uiSourceCode,
        projectStub: projectStub,
        contentTypeStub: contentTypeStub
    };
}
function createFakeScriptMapping(debuggerModel, uiSourceCode, uiLineNumber, scriptId) {
    var sdkLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Location(debuggerModel, scriptId, 13);
    var uiLocation = new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.UISourceCode.UILocation(uiSourceCode, uiLineNumber);
    var mapping = {
        rawLocationToUILocation: function(_) {
            return uiLocation;
        },
        uiLocationToRawLocations: function(_uiSourceCode, _lineNumber, _columnNumber) {
            return [
                sdkLocation
            ];
        },
        uiLocationRangeToRawLocationRanges: function(_uiSourceCode, _textRange) {
            throw new Error('Not implemented');
        }
    };
    return mapping;
} //# sourceMappingURL=UISourceCodeHelpers.js.map


}),

}]);