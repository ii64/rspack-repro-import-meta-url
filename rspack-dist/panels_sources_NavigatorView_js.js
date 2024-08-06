"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_NavigatorView_js"], {
"./panels/sources/NavigatorView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NavigatorFolderTreeElement: function() { return NavigatorFolderTreeElement; },
  NavigatorFolderTreeNode: function() { return NavigatorFolderTreeNode; },
  NavigatorGroupTreeNode: function() { return NavigatorGroupTreeNode; },
  NavigatorRootTreeNode: function() { return NavigatorRootTreeNode; },
  NavigatorSourceTreeElement: function() { return NavigatorSourceTreeElement; },
  NavigatorTreeNode: function() { return NavigatorTreeNode; },
  NavigatorUISourceCodeTreeNode: function() { return NavigatorUISourceCodeTreeNode; },
  NavigatorView: function() { return NavigatorView; },
  Types: function() { return Types; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */var _navigatorTree_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigatorTree.css.js */ "./panels/sources/navigatorTree.css.js");
/* harmony import */var _navigatorView_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigatorView.css.js */ "./panels/sources/navigatorView.css.js");
/* harmony import */var _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SearchSourcesView.js */ "./panels/sources/SearchSourcesView.js");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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
















var UIStrings = {
    /**
     *@description Text in Navigator View of the Sources panel
     */ searchInFolder: 'Search in folder',
    /**
     *@description Search label in Navigator View of the Sources panel
     */ searchInAllFiles: 'Search in all files',
    /**
     *@description Text in Navigator View of the Sources panel
     */ noDomain: '(no domain)',
    /**
     *@description Text in Navigator View of the Sources panel
     */ authored: 'Authored',
    /**
     *@description Text in Navigator View of the Sources panel
     */ authoredTooltip: 'Contains original sources',
    /**
     *@description Text in Navigator View of the Sources panel
     */ deployed: 'Deployed',
    /**
     *@description Text in Navigator View of the Sources panel
     */ deployedTooltip: 'Contains final sources the browser sees',
    /**
     *@description Text in Navigator View of the Sources panel
     */ areYouSureYouWantToExcludeThis: 'Are you sure you want to exclude this folder?',
    /**
     *@description Text in Navigator View of the Sources panel
     */ areYouSureYouWantToDeleteThis: 'Are you sure you want to delete this file?',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */ rename: 'Rename…',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */ makeACopy: 'Make a copy…',
    /**
     *@description Text to delete something
     */ delete: 'Delete',
    /**
     *@description A button text to confirm an action to remove a folder. This is not the same as delete. It removes the folder from UI but do not delete them.
     */ remove: 'Remove',
    /**
     *@description Text in Navigator View of the Sources panel
     */ areYouSureYouWantToDeleteFolder: 'Are you sure you want to delete this folder and its contents?',
    /**
     *@description Text in Navigator View of the Sources panel. A confirmation message on action to delete a folder.
     */ actionCannotBeUndone: 'This action cannot be undone.',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */ openFolder: 'Open folder',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */ newFile: 'New file',
    /**
     *@description A context menu item in the Navigator View of the Sources panel to exclude a folder from workspace
     */ excludeFolder: 'Exclude from workspace',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */ removeFolderFromWorkspace: 'Remove from workspace',
    /**
     *@description Text in Navigator View of the Sources panel
     * @example {a-folder-name} PH1
     */ areYouSureYouWantToRemoveThis: 'Remove ‘{PH1}’ from Workspace?',
    /**
     *@description Text in Navigator View of the Sources panel. Warning message when user remove a folder.
     */ workspaceStopSyncing: 'This will stop syncing changes from DevTools to your sources.',
    /**
     *@description Name of an item from source map
     *@example {compile.html} PH1
     */ sFromSourceMap: '{PH1} (from source map)',
    /**
     *@description Name of an item that is on the ignore list
     *@example {compile.html} PH1
     */ sIgnoreListed: '{PH1} (ignore listed)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/NavigatorView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var Types = {
    Authored: 'authored',
    Deployed: 'deployed',
    Domain: 'domain',
    File: 'file',
    FileSystem: 'fs',
    FileSystemFolder: 'fs-folder',
    Frame: 'frame',
    NetworkFolder: 'nw-folder',
    Root: 'root',
    Worker: 'worker'
};
var TYPE_ORDERS = new Map([
    [
        Types.Root,
        1
    ],
    [
        Types.Authored,
        1
    ],
    [
        Types.Deployed,
        5
    ],
    [
        Types.Domain,
        10
    ],
    [
        Types.FileSystemFolder,
        1
    ],
    [
        Types.NetworkFolder,
        1
    ],
    [
        Types.File,
        10
    ],
    [
        Types.Frame,
        70
    ],
    [
        Types.Worker,
        90
    ],
    [
        Types.FileSystem,
        100
    ]
]);
var _onRequestsForHeaderOverridesFileChanged = /*#__PURE__*/ new WeakSet(), _isUISourceCodeOrAnyAncestorSelected = /*#__PURE__*/ new WeakSet();
var NavigatorView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(NavigatorView, _UI_Widget_VBox);
    var _super = _create_super(NavigatorView);
    function NavigatorView(jslogContext, enableAuthoredGrouping) {
        _class_call_check(this, NavigatorView);
        var _this;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _onRequestsForHeaderOverridesFileChanged);
        _class_private_method_init(_assert_this_initialized(_this), _isUISourceCodeOrAnyAncestorSelected);
        _define_property(_assert_this_initialized(_this), "placeholder", void 0);
        _define_property(_assert_this_initialized(_this), "scriptsTree", void 0);
        _define_property(_assert_this_initialized(_this), "uiSourceCodeNodes", void 0);
        _define_property(_assert_this_initialized(_this), "subfolderNodes", void 0);
        _define_property(_assert_this_initialized(_this), "rootNode", void 0);
        _define_property(_assert_this_initialized(_this), "frameNodes", void 0);
        _define_property(_assert_this_initialized(_this), "authoredNode", void 0);
        _define_property(_assert_this_initialized(_this), "deployedNode", void 0);
        _define_property(_assert_this_initialized(_this), "navigatorGroupByFolderSetting", void 0);
        _define_property(_assert_this_initialized(_this), "navigatorGroupByAuthoredExperiment", void 0);
        _define_property(_assert_this_initialized(_this), "workspaceInternal", void 0);
        _define_property(_assert_this_initialized(_this), "groupByFrame", void 0);
        _define_property(_assert_this_initialized(_this), "groupByAuthored", void 0);
        _define_property(_assert_this_initialized(_this), "groupByDomain", void 0);
        _define_property(_assert_this_initialized(_this), "groupByFolder", void 0);
        _this.placeholder = null;
        _this.scriptsTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutlineInShadow();
        _this.scriptsTree.setComparator(NavigatorView.treeElementsCompare);
        _this.scriptsTree.setFocusable(false);
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane(jslogContext).track({
            resize: true
        })));
        _this.contentElement.appendChild(_this.scriptsTree.element);
        _this.setDefaultFocusedElement(_this.scriptsTree.element);
        _this.uiSourceCodeNodes = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.MapUtilities.Multimap();
        _this.subfolderNodes = new Map();
        _this.rootNode = new NavigatorRootTreeNode(_assert_this_initialized(_this));
        _this.rootNode.populate();
        _this.frameNodes = new Map();
        _this.contentElement.addEventListener('contextmenu', _this.handleContextMenu.bind(_assert_this_initialized(_this)), false);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ShortcutRegistry.ShortcutRegistry.instance().addShortcutListener(_this.contentElement, {
            'sources.rename': _this.renameShortcut.bind(_assert_this_initialized(_this))
        });
        _this.navigatorGroupByFolderSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('navigator-group-by-folder');
        _this.navigatorGroupByFolderSetting.addChangeListener(_this.groupingChanged.bind(_assert_this_initialized(_this)));
        if (enableAuthoredGrouping) {
            _this.navigatorGroupByAuthoredExperiment = "authored-deployed-grouping" /* Root.Runtime.ExperimentName.AUTHORED_DEPLOYED_GROUPING */ ;
        }
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().addChangeListener(_this.ignoreListChanged.bind(_assert_this_initialized(_this)));
        _this.initGrouping();
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.Events.BindingCreated, _this.onBindingChanged, _assert_this_initialized(_this));
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().addEventListener(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.Events.BindingRemoved, _this.onBindingChanged, _assert_this_initialized(_this));
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.NetworkPersistenceManager.NetworkPersistenceManager.instance().addEventListener("RequestsForHeaderOverridesFileChanged" /* Persistence.NetworkPersistenceManager.Events.RequestsForHeaderOverridesFileChanged */ , _class_private_method_get(_assert_this_initialized(_this), _onRequestsForHeaderOverridesFileChanged, onRequestsForHeaderOverridesFileChanged), _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addEventListener("NameChanged" /* SDK.TargetManager.Events.NameChanged */ , _this.targetNameChanged, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(_assert_this_initialized(_this));
        _this.resetWorkspace(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.WorkspaceImpl.instance());
        _this.workspaceInternal.uiSourceCodes().forEach(_this.addUISourceCode.bind(_assert_this_initialized(_this)));
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProjectManager.instance().addEventListener("FrameAttributionAdded" /* Bindings.NetworkProject.Events.FrameAttributionAdded */ , _this.frameAttributionAdded, _assert_this_initialized(_this));
        _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProjectManager.instance().addEventListener("FrameAttributionRemoved" /* Bindings.NetworkProject.Events.FrameAttributionRemoved */ , _this.frameAttributionRemoved, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(NavigatorView, [
        {
            key: "setPlaceholder",
            value: function setPlaceholder(placeholder) {
                console.assert(!this.placeholder, 'A placeholder widget was already set');
                this.placeholder = placeholder;
                placeholder.show(this.contentElement, this.contentElement.firstChild);
                updateVisibility.call(this);
                this.scriptsTree.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.Events.ElementAttached, updateVisibility.bind(this));
                this.scriptsTree.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.Events.ElementsDetached, updateVisibility.bind(this));
                function updateVisibility() {
                    var showTree = this.scriptsTree.firstChild();
                    if (showTree) {
                        placeholder.hideWidget();
                    } else {
                        placeholder.showWidget();
                    }
                    this.scriptsTree.element.classList.toggle('hidden', !showTree);
                }
            }
        },
        {
            key: "onBindingChanged",
            value: function onBindingChanged(event) {
                var binding = event.data;
                var isFromSourceMap = false;
                // Update UISourceCode titles.
                var networkNodes = this.uiSourceCodeNodes.get(binding.network);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = networkNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var networkNode = _step.value;
                        networkNode.updateTitle();
                        isFromSourceMap || (isFromSourceMap = networkNode.uiSourceCode().contentType().isFromSourceMap());
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
                var fileSystemNodes = this.uiSourceCodeNodes.get(binding.fileSystem);
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = fileSystemNodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var fileSystemNode = _step1.value;
                        fileSystemNode.updateTitle();
                        isFromSourceMap || (isFromSourceMap = fileSystemNode.uiSourceCode().contentType().isFromSourceMap());
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                // Update folder titles.
                var pathTokens = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.relativePath(binding.fileSystem);
                var folderPath = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString;
                for(var i = 0; i < pathTokens.length - 1; ++i){
                    folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(folderPath, pathTokens[i]);
                    var folderId = this.folderNodeId(binding.fileSystem.project(), null, null, binding.fileSystem.origin(), isFromSourceMap, folderPath);
                    var folderNode = this.subfolderNodes.get(folderId);
                    if (folderNode) {
                        folderNode.updateTitle();
                    }
                    folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(folderPath, '/');
                }
                // Update fileSystem root title.
                var fileSystemRoot = this.rootOrDeployedNode().child(binding.fileSystem.project().id());
                if (fileSystemRoot) {
                    fileSystemRoot.updateTitle();
                }
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.scriptsTree.focus();
            }
        },
        {
            /**
     * Central place to add elements to the tree to
     * enable focus if the tree has elements
     */ key: "appendChild",
            value: function appendChild(parent, child) {
                this.scriptsTree.setFocusable(true);
                parent.appendChild(child);
            }
        },
        {
            /**
     * Central place to remove elements from the tree to
     * disable focus if the tree is empty
     */ key: "removeChild",
            value: function removeChild(parent, child) {
                parent.removeChild(child);
                if (this.scriptsTree.rootElement().childCount() === 0) {
                    this.scriptsTree.setFocusable(false);
                }
            }
        },
        {
            key: "resetWorkspace",
            value: function resetWorkspace(workspace) {
                // Clear old event listeners first.
                if (this.workspaceInternal) {
                    this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAddedCallback, this);
                    this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeRemoved, this.uiSourceCodeRemovedCallback, this);
                    this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectAdded, this.projectAddedCallback, this);
                    this.workspaceInternal.removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectRemoved, this.projectRemovedCallback, this);
                }
                this.workspaceInternal = workspace;
                this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeAdded, this.uiSourceCodeAddedCallback, this);
                this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.UISourceCodeRemoved, this.uiSourceCodeRemovedCallback, this);
                this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectAdded, this.projectAddedCallback, this);
                this.workspaceInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.Events.ProjectRemoved, this.projectRemovedCallback, this);
                this.workspaceInternal.projects().forEach(this.projectAdded.bind(this));
                this.computeUniqueFileSystemProjectNames();
            }
        },
        {
            key: "projectAddedCallback",
            value: function projectAddedCallback(event) {
                var project = event.data;
                this.projectAdded(project);
                if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    this.computeUniqueFileSystemProjectNames();
                }
            }
        },
        {
            key: "projectRemovedCallback",
            value: function projectRemovedCallback(event) {
                var project = event.data;
                this.removeProject(project);
                if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    this.computeUniqueFileSystemProjectNames();
                }
            }
        },
        {
            key: "workspace",
            value: function workspace() {
                return this.workspaceInternal;
            }
        },
        {
            key: "acceptProject",
            value: function acceptProject(project) {
                return !project.isServiceProject();
            }
        },
        {
            key: "frameAttributionAdded",
            value: function frameAttributionAdded(event) {
                var uiSourceCode = event.data.uiSourceCode;
                if (!this.acceptsUISourceCode(uiSourceCode)) {
                    return;
                }
                var addedFrame = event.data.frame;
                // This event does not happen for UISourceCodes without initial attribution.
                this.addUISourceCodeNode(uiSourceCode, addedFrame);
            }
        },
        {
            key: "frameAttributionRemoved",
            value: function frameAttributionRemoved(event) {
                var uiSourceCode = event.data.uiSourceCode;
                if (!this.acceptsUISourceCode(uiSourceCode)) {
                    return;
                }
                var removedFrame = event.data.frame;
                var node = Array.from(this.uiSourceCodeNodes.get(uiSourceCode)).find(function(node) {
                    return node.frame() === removedFrame;
                });
                if (node) {
                    this.removeUISourceCodeNode(node);
                }
            }
        },
        {
            key: "acceptsUISourceCode",
            value: function acceptsUISourceCode(uiSourceCode) {
                return this.acceptProject(uiSourceCode.project());
            }
        },
        {
            key: "addUISourceCode",
            value: function addUISourceCode(uiSourceCode) {
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ ) && _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode)) {
                    return;
                }
                if (!this.acceptsUISourceCode(uiSourceCode)) {
                    return;
                }
                if (uiSourceCode.isFetchXHR()) {
                    return;
                }
                var frames = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProject.framesForUISourceCode(uiSourceCode);
                if (frames.length) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = frames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var frame = _step.value;
                            this.addUISourceCodeNode(uiSourceCode, frame);
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
                } else {
                    this.addUISourceCodeNode(uiSourceCode, null);
                }
                this.uiSourceCodeAdded(uiSourceCode);
            }
        },
        {
            key: "addUISourceCodeNode",
            value: function addUISourceCodeNode(uiSourceCode, frame) {
                var isFromSourceMap = uiSourceCode.contentType().isFromSourceMap();
                var path;
                if (uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    path = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.relativePath(uiSourceCode).slice(0, -1);
                } else {
                    path = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractPath(uiSourceCode.url()).split('/').slice(1, -1);
                }
                var project = uiSourceCode.project();
                var target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
                var folderNode = this.folderNode(uiSourceCode, project, target, frame, uiSourceCode.origin(), path, isFromSourceMap);
                var uiSourceCodeNode = new NavigatorUISourceCodeTreeNode(this, uiSourceCode, frame);
                var existingNode = folderNode.child(uiSourceCodeNode.id);
                if (existingNode && _instanceof(existingNode, NavigatorUISourceCodeTreeNode)) {
                    this.uiSourceCodeNodes.set(uiSourceCode, existingNode);
                } else {
                    folderNode.appendChild(uiSourceCodeNode);
                    this.uiSourceCodeNodes.set(uiSourceCode, uiSourceCodeNode);
                    uiSourceCodeNode.updateTitleBubbleUp();
                }
                this.selectDefaultTreeNode();
            }
        },
        {
            key: "uiSourceCodeAdded",
            value: function uiSourceCodeAdded(_uiSourceCode) {}
        },
        {
            key: "uiSourceCodeAddedCallback",
            value: function uiSourceCodeAddedCallback(event) {
                var uiSourceCode = event.data;
                this.addUISourceCode(uiSourceCode);
            }
        },
        {
            key: "uiSourceCodeRemovedCallback",
            value: function uiSourceCodeRemovedCallback(event) {
                this.removeUISourceCodes([
                    event.data
                ]);
            }
        },
        {
            key: "tryAddProject",
            value: function tryAddProject(project) {
                this.projectAdded(project);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = project.uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        this.addUISourceCode(uiSourceCode);
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
        {
            key: "projectAdded",
            value: function projectAdded(project) {
                var rootOrDeployed = this.rootOrDeployedNode();
                if (!this.acceptProject(project) || project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem || _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsProject(project) || rootOrDeployed.child(project.id())) {
                    return;
                }
                rootOrDeployed.appendChild(new NavigatorGroupTreeNode(this, project, project.id(), Types.FileSystem, project.displayName()));
                this.selectDefaultTreeNode();
            }
        },
        {
            // TODO(einbinder) remove this code after crbug.com/964075 is fixed
            key: "selectDefaultTreeNode",
            value: function selectDefaultTreeNode() {
                var children = this.rootNode.children();
                if (children.length && !this.scriptsTree.selectedTreeElement) {
                    children[0].treeNode().select(true, false);
                }
            }
        },
        {
            key: "computeUniqueFileSystemProjectNames",
            value: function computeUniqueFileSystemProjectNames() {
                var fileSystemProjects = this.workspaceInternal.projectsForType(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem);
                if (!fileSystemProjects.length) {
                    return;
                }
                var reversedIndex = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Trie.Trie.newArrayTrie();
                var reversedPaths = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = fileSystemProjects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var project = _step.value;
                        var fileSystem = project;
                        var reversedPathParts = fileSystem.fileSystemPath().split('/').reverse();
                        reversedPaths.push(reversedPathParts);
                        reversedIndex.add(reversedPathParts);
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
                var rootOrDeployed = this.rootOrDeployedNode();
                for(var i = 0; i < fileSystemProjects.length; ++i){
                    var reversedPath = reversedPaths[i];
                    var project1 = fileSystemProjects[i];
                    reversedIndex.remove(reversedPath);
                    var commonPrefix = reversedIndex.longestPrefix(reversedPath, false);
                    reversedIndex.add(reversedPath);
                    var prefixPath = reversedPath.slice(0, commonPrefix.length + 1);
                    var path = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.encodedPathToRawPathString(prefixPath.reverse().join('/'));
                    var fileSystemNode = rootOrDeployed.child(project1.id());
                    if (fileSystemNode) {
                        fileSystemNode.setTitle(path);
                    }
                }
            }
        },
        {
            key: "removeProject",
            value: function removeProject(project) {
                this.removeUISourceCodes(project.uiSourceCodes());
                if (project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    return;
                }
                var fileSystemNode = this.rootNode.child(project.id());
                if (!fileSystemNode) {
                    return;
                }
                this.rootNode.removeChild(fileSystemNode);
            }
        },
        {
            key: "folderNodeId",
            value: function folderNodeId(project, target, frame, projectOrigin, isFromSourceMap, path) {
                var projectId = project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem ? project.id() : '';
                var targetId = target && !(this.groupByAuthored && isFromSourceMap) ? target.id() : '';
                var frameId = this.groupByFrame && frame ? frame.id : '';
                if (this.groupByAuthored) {
                    if (isFromSourceMap) {
                        targetId = 'Authored';
                        frameId = '';
                    } else {
                        targetId = 'Deployed:' + targetId;
                    }
                }
                return targetId + ':' + projectId + ':' + frameId + ':' + projectOrigin + ':' + path;
            }
        },
        {
            key: "folderNode",
            value: function folderNode(uiSourceCode, project, target, frame, projectOrigin, path, fromSourceMap) {
                if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsUISourceCode(uiSourceCode)) {
                    return this.rootNode;
                }
                if (target && !this.groupByFolder && !fromSourceMap) {
                    return this.domainNode(uiSourceCode, project, target, frame, projectOrigin);
                }
                var folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.join(path, '/');
                var folderId = this.folderNodeId(project, target, frame, projectOrigin, fromSourceMap, folderPath);
                var folderNode = this.subfolderNodes.get(folderId);
                if (folderNode) {
                    return folderNode;
                }
                if (!path.length) {
                    if (target) {
                        return this.domainNode(uiSourceCode, project, target, frame, projectOrigin);
                    }
                    return this.rootOrDeployedNode().child(project.id());
                }
                var parentNode = this.folderNode(uiSourceCode, project, target, frame, projectOrigin, path.slice(0, -1), fromSourceMap);
                var type = Types.NetworkFolder;
                if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    type = Types.FileSystemFolder;
                }
                var name = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.encodedPathToRawPathString(path[path.length - 1]);
                folderNode = new NavigatorFolderTreeNode(this, project, folderId, type, folderPath, name, projectOrigin);
                this.subfolderNodes.set(folderId, folderNode);
                parentNode.appendChild(folderNode);
                return folderNode;
            }
        },
        {
            key: "domainNode",
            value: function domainNode(uiSourceCode, project, target, frame, projectOrigin) {
                var isAuthored = uiSourceCode.contentType().isFromSourceMap();
                var frameNode = this.frameNode(project, target, frame, isAuthored);
                if (!this.groupByDomain) {
                    return frameNode;
                }
                var domainNode = frameNode.child(projectOrigin);
                if (domainNode) {
                    return domainNode;
                }
                domainNode = new NavigatorGroupTreeNode(this, project, projectOrigin, Types.Domain, this.computeProjectDisplayName(target, projectOrigin));
                if (frame && projectOrigin === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractOrigin(frame.url)) {
                    boostOrderForNode.add(domainNode.treeNode());
                }
                frameNode.appendChild(domainNode);
                if (isAuthored && this.groupByAuthored) {
                    domainNode.treeNode().expand();
                }
                return domainNode;
            }
        },
        {
            key: "frameNode",
            value: function frameNode(project, target, frame, isAuthored) {
                if (!this.groupByFrame || !frame || this.groupByAuthored && isAuthored) {
                    return this.targetNode(project, target, isAuthored);
                }
                var frameNode = this.frameNodes.get(frame);
                if (frameNode) {
                    return frameNode;
                }
                frameNode = new NavigatorGroupTreeNode(this, project, target.id() + ':' + frame.id, Types.Frame, frame.displayName());
                frameNode.setHoverCallback(hoverCallback);
                this.frameNodes.set(frame, frameNode);
                var parentFrame = frame.parentFrame();
                this.frameNode(project, parentFrame ? parentFrame.resourceTreeModel().target() : target, parentFrame, isAuthored).appendChild(frameNode);
                if (!parentFrame) {
                    boostOrderForNode.add(frameNode.treeNode());
                    frameNode.treeNode().expand();
                }
                function hoverCallback(hovered) {
                    if (hovered) {
                        var overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel);
                        if (overlayModel && frame) {
                            overlayModel.highlightFrame(frame.id);
                        }
                    } else {
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                    }
                }
                return frameNode;
            }
        },
        {
            key: "targetNode",
            value: function targetNode(project, target, isAuthored) {
                if (this.groupByAuthored && isAuthored) {
                    if (!this.authoredNode) {
                        this.authoredNode = new NavigatorGroupTreeNode(this, null, 'group:Authored', Types.Authored, i18nString(UIStrings.authored), i18nString(UIStrings.authoredTooltip));
                        this.rootNode.appendChild(this.authoredNode);
                        this.authoredNode.treeNode().expand();
                    }
                    return this.authoredNode;
                }
                var rootOrDeployed = this.rootOrDeployedNode();
                if (target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().scopeTarget()) {
                    return rootOrDeployed;
                }
                var targetNode = rootOrDeployed.child('target:' + target.id());
                if (!targetNode) {
                    targetNode = new NavigatorGroupTreeNode(this, project, 'target:' + target.id(), target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Frame ? Types.Frame : Types.Worker, target.name());
                    rootOrDeployed.appendChild(targetNode);
                }
                return targetNode;
            }
        },
        {
            key: "rootOrDeployedNode",
            value: function rootOrDeployedNode() {
                if (this.groupByAuthored) {
                    if (!this.deployedNode) {
                        this.deployedNode = new NavigatorGroupTreeNode(this, null, 'group:Deployed', Types.Deployed, i18nString(UIStrings.deployed), i18nString(UIStrings.deployedTooltip));
                        this.rootNode.appendChild(this.deployedNode);
                    }
                    return this.deployedNode;
                }
                return this.rootNode;
            }
        },
        {
            key: "computeProjectDisplayName",
            value: function computeProjectDisplayName(target, projectOrigin) {
                var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.RuntimeModel.RuntimeModel);
                var executionContexts = runtimeModel ? runtimeModel.executionContexts() : [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = executionContexts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var context = _step.value;
                        if (context.name && context.origin && projectOrigin.startsWith(context.origin)) {
                            return context.name;
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
                if (!projectOrigin) {
                    return i18nString(UIStrings.noDomain);
                }
                var parsedURL = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(projectOrigin);
                var prettyURL = parsedURL.isValid ? parsedURL.host + (parsedURL.port ? ':' + parsedURL.port : '') : '';
                return prettyURL || projectOrigin;
            }
        },
        {
            key: "revealUISourceCode",
            value: function revealUISourceCode(uiSourceCode, select) {
                var nodes = this.uiSourceCodeNodes.get(uiSourceCode);
                if (nodes.size === 0) {
                    return null;
                }
                var node = nodes.values().next().value;
                if (!node) {
                    return null;
                }
                if (this.scriptsTree.selectedTreeElement) {
                    var _this_scriptsTree_selectedTreeElement_treeOutline;
                    // If the tree outline is being marked as "being edited" (i.e. we're renaming a file
                    // or chosing the name for a new snippet), we shall not proceed with revealing here,
                    // as that will steal focus from the input widget and thus cancel editing. The
                    // test/e2e/snippets/breakpoint_test.ts exercises this.
                    if (_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isBeingEdited((_this_scriptsTree_selectedTreeElement_treeOutline = this.scriptsTree.selectedTreeElement.treeOutline) === null || _this_scriptsTree_selectedTreeElement_treeOutline === void 0 ? void 0 : _this_scriptsTree_selectedTreeElement_treeOutline.element)) {
                        return null;
                    }
                    this.scriptsTree.selectedTreeElement.deselect();
                }
                // TODO(dgozman): figure out revealing multiple.
                node.reveal(select);
                return node;
            }
        },
        {
            key: "sourceSelected",
            value: function sourceSelected(uiSourceCode, focusSource) {
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode, !focusSource);
            }
        },
        {
            key: "removeUISourceCodes",
            value: function removeUISourceCodes(uiSourceCodes) {
                var nodesWithSelectionOnPath = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // First we remove source codes without any selection on their path to root, and only then
                    // the ones with selection. This to avoid layout work associated with moving the selection
                    // around (crbug.com/1409025).
                    for(var _iterator = uiSourceCodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        var nodes = this.uiSourceCodeNodes.get(uiSourceCode);
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = nodes[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var node = _step1.value;
                                if (_class_private_method_get(this, _isUISourceCodeOrAnyAncestorSelected, isUISourceCodeOrAnyAncestorSelected).call(this, node)) {
                                    nodesWithSelectionOnPath.push(node);
                                } else {
                                    this.removeUISourceCodeNode(node);
                                }
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
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
                nodesWithSelectionOnPath.forEach(this.removeUISourceCodeNode.bind(this));
            }
        },
        {
            key: "removeUISourceCodeNode",
            value: function removeUISourceCodeNode(node) {
                var uiSourceCode = node.uiSourceCode();
                this.uiSourceCodeNodes.delete(uiSourceCode, node);
                var project = uiSourceCode.project();
                var target = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.NetworkProject.NetworkProject.targetForUISourceCode(uiSourceCode);
                var frame = node.frame();
                var parentNode = node.parent;
                if (!parentNode) {
                    return;
                }
                parentNode.removeChild(node);
                var currentNode = parentNode;
                while(currentNode){
                    parentNode = currentNode.parent;
                    if (!parentNode) {
                        break;
                    }
                    if ((parentNode === this.rootNode || parentNode === this.deployedNode) && project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                        break;
                    }
                    if (!(_instanceof(currentNode, NavigatorGroupTreeNode) || _instanceof(currentNode, NavigatorFolderTreeNode))) {
                        break;
                    }
                    if (!currentNode.isEmpty()) {
                        currentNode.updateTitleBubbleUp();
                        break;
                    }
                    if (currentNode.type === Types.Frame) {
                        this.discardFrame(frame, Boolean(this.groupByAuthored) && uiSourceCode.contentType().isFromSourceMap());
                        frame = frame.parentFrame();
                    } else {
                        var folderId = this.folderNodeId(project, target, frame, uiSourceCode.origin(), uiSourceCode.contentType().isFromSourceMap(), _instanceof(currentNode, NavigatorFolderTreeNode) && currentNode.folderPath || _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString);
                        this.subfolderNodes.delete(folderId);
                        parentNode.removeChild(currentNode);
                    }
                    if (currentNode === this.authoredNode) {
                        this.authoredNode = undefined;
                    } else if (currentNode === this.deployedNode) {
                        this.deployedNode = undefined;
                    }
                    currentNode = parentNode;
                }
            }
        },
        {
            key: "reset",
            value: function reset(tearDownOnly) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.uiSourceCodeNodes.valuesArray()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node = _step.value;
                        node.dispose();
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
                this.scriptsTree.removeChildren();
                this.scriptsTree.setFocusable(false);
                this.uiSourceCodeNodes.clear();
                this.subfolderNodes.clear();
                this.frameNodes.clear();
                this.rootNode.reset();
                this.authoredNode = undefined;
                this.deployedNode = undefined;
                if (!tearDownOnly) {
                    // Reset the workspace to repopulate filesystem folders.
                    this.resetWorkspace(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.WorkspaceImpl.instance());
                }
            }
        },
        {
            key: "handleContextMenu",
            value: function handleContextMenu(_event) {}
        },
        {
            key: "renameShortcut",
            value: function renameShortcut() {
                var _this = this;
                return _async_to_generator(function() {
                    var selectedTreeElement, node;
                    return _ts_generator(this, function(_state) {
                        selectedTreeElement = _this.scriptsTree.selectedTreeElement;
                        node = selectedTreeElement && selectedTreeElement.node;
                        if (!node || !node.uiSourceCode() || !node.uiSourceCode().canRename()) {
                            return [
                                2,
                                false
                            ];
                        }
                        _this.rename(node, false);
                        return [
                            2,
                            true
                        ];
                    });
                })();
            }
        },
        {
            key: "handleContextMenuCreate",
            value: function handleContextMenuCreate(project, path, uiSourceCode) {
                if (uiSourceCode) {
                    var relativePath = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.relativePath(uiSourceCode);
                    relativePath.pop();
                    path = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.join(relativePath, '/');
                }
                void this.create(project, path, uiSourceCode);
            }
        },
        {
            key: "handleContextMenuRename",
            value: function handleContextMenuRename(node) {
                this.rename(node, false);
            }
        },
        {
            key: "handleContextMenuExclude",
            value: function handleContextMenuExclude(project, path) {
                return _async_to_generator(function() {
                    var shouldExclude;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.areYouSureYouWantToExcludeThis), undefined, {
                                        jslogContext: 'exclude-folder-confirmation'
                                    })
                                ];
                            case 1:
                                shouldExclude = _state.sent();
                                if (shouldExclude) {
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.startBatchUpdate();
                                    project.excludeFolder(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.completeURL(project, path));
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.endBatchUpdate();
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleContextMenuDelete",
            value: function handleContextMenuDelete(uiSourceCode) {
                return _async_to_generator(function() {
                    var shouldDelete;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.areYouSureYouWantToDeleteThis), undefined, {
                                        jslogContext: 'delete-file-confirmation'
                                    })
                                ];
                            case 1:
                                shouldDelete = _state.sent();
                                if (shouldDelete) {
                                    uiSourceCode.project().deleteFile(uiSourceCode);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleFileContextMenu",
            value: function handleFileContextMenu(event, node) {
                var uiSourceCode = node.uiSourceCode();
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                contextMenu.appendApplicableItems(uiSourceCode);
                var project = uiSourceCode.project();
                if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    contextMenu.editSection().appendItem(i18nString(UIStrings.rename), this.handleContextMenuRename.bind(this, node), {
                        jslogContext: 'rename'
                    });
                    contextMenu.editSection().appendItem(i18nString(UIStrings.makeACopy), this.handleContextMenuCreate.bind(this, project, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString, uiSourceCode), {
                        jslogContext: 'make-a-copy'
                    });
                    contextMenu.editSection().appendItem(i18nString(UIStrings.delete), this.handleContextMenuDelete.bind(this, uiSourceCode), {
                        jslogContext: 'delete'
                    });
                }
                void contextMenu.show();
            }
        },
        {
            key: "handleDeleteFolder",
            value: function handleDeleteFolder(node) {
                var _this = this;
                return _async_to_generator(function() {
                    var warningMsg, shouldRemove, topNode;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                warningMsg = "".concat(i18nString(UIStrings.areYouSureYouWantToDeleteFolder), "\n").concat(i18nString(UIStrings.actionCannotBeUndone));
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(warningMsg, undefined, {
                                        jslogContext: 'delete-folder-confirmation'
                                    })
                                ];
                            case 1:
                                shouldRemove = _state.sent();
                                if (!shouldRemove) return [
                                    3,
                                    4
                                ];
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.OverrideTabDeleteFolderContextMenu);
                                topNode = _this.findTopNonMergedNode(node);
                                return [
                                    4,
                                    _this.removeUISourceCodeFromProject(topNode)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    4,
                                    _this.deleteDirectoryRecursively(topNode)
                                ];
                            case 3:
                                _state.sent();
                                _state.label = 4;
                            case 4:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "removeUISourceCodeFromProject",
            value: function removeUISourceCodeFromProject(node) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        node.children().forEach(function() {
                            var _ref = _async_to_generator(function(child) {
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                _this.removeUISourceCodeFromProject(child)
                                            ];
                                        case 1:
                                            _state.sent();
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                            return function(child) {
                                return _ref.apply(this, arguments);
                            };
                        }());
                        if (_instanceof(node, NavigatorUISourceCodeTreeNode)) {
                            node.uiSourceCode().project().removeUISourceCode(node.uiSourceCode().url());
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "deleteDirectoryRecursively",
            value: function deleteDirectoryRecursively(node) {
                return _async_to_generator(function() {
                    var _Persistence_NetworkPersistenceManager_NetworkPersistenceManager_instance_project;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_instanceof(node, NavigatorFolderTreeNode)) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    (_Persistence_NetworkPersistenceManager_NetworkPersistenceManager_instance_project = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.NetworkPersistenceManager.NetworkPersistenceManager.instance().project()) === null || _Persistence_NetworkPersistenceManager_NetworkPersistenceManager_instance_project === void 0 ? void 0 : _Persistence_NetworkPersistenceManager_NetworkPersistenceManager_instance_project.deleteDirectoryRecursively(node.folderPath)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "findTopNonMergedNode",
            value: function findTopNonMergedNode(node) {
                // multiple folder nodes can be merged into one if it only contains one file
                // e.g. the folder of "abc.com/assets/css/button.css" can be "abc.com/assets/css"
                // find the top non-merged node (abc.com) recursively
                if (!node.isMerged) {
                    return node;
                }
                if (!_instanceof(node.parent, NavigatorFolderTreeNode)) {
                    return node;
                }
                return this.findTopNonMergedNode(node.parent);
            }
        },
        {
            key: "handleFolderContextMenu",
            value: function handleFolderContextMenu(event, node) {
                var _this = this;
                var path = node.folderPath || _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString;
                var project = node.project || null;
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                NavigatorView.appendSearchItem(contextMenu, path);
                if (!project) {
                    return;
                }
                if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    var folderPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.urlToRawPathString(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.completeURL(project, path), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin());
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.openFolder), function() {
                        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.showItemInFolder(folderPath);
                    }, {
                        jslogContext: 'open-folder'
                    });
                    if (project.canCreateFile()) {
                        contextMenu.defaultSection().appendItem(i18nString(UIStrings.newFile), function() {
                            _this.handleContextMenuCreate(project, path, undefined);
                        }, {
                            jslogContext: 'new-file'
                        });
                    }
                } else if (node.origin && node.folderPath) {
                    var url = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(node.origin, '/', node.folderPath);
                    var options = {
                        isContentScript: node.recursiveProperties.exclusivelyContentScripts || false,
                        isKnownThirdParty: node.recursiveProperties.exclusivelyThirdParty || false,
                        isCurrentlyIgnoreListed: node.recursiveProperties.exclusivelyIgnored || false
                    };
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().getIgnoreListFolderContextMenuItems(url, options)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _step.value, text = _step_value.text, callback = _step_value.callback, jslogContext = _step_value.jslogContext;
                            contextMenu.defaultSection().appendItem(text, callback, {
                                jslogContext: jslogContext
                            });
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
                if (project.canExcludeFolder(path)) {
                    contextMenu.defaultSection().appendItem(i18nString(UIStrings.excludeFolder), this.handleContextMenuExclude.bind(this, project, path), {
                        jslogContext: 'exclude-folder'
                    });
                }
                if (project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    var isFileOverrides = project.fileSystem().type() === 'overrides';
                    if (!isFileOverrides) {
                        if (_instanceof(node, NavigatorGroupTreeNode)) {
                            contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeFolderFromWorkspace), /*#__PURE__*/ _async_to_generator(function() {
                                var warningMessage, shouldRemove;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            warningMessage = "".concat(i18nString(UIStrings.areYouSureYouWantToRemoveThis, {
                                                PH1: node.title
                                            }), "\n").concat(i18nString(UIStrings.workspaceStopSyncing));
                                            return [
                                                4,
                                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.ConfirmDialog.show(warningMessage, undefined, {
                                                    okButtonLabel: i18nString(UIStrings.remove),
                                                    jslogContext: 'remove-folder-from-workspace-confirmation'
                                                })
                                            ];
                                        case 1:
                                            shouldRemove = _state.sent();
                                            if (shouldRemove) {
                                                project.remove();
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }), {
                                jslogContext: 'remove-folder-from-workspace'
                            });
                        }
                    } else {
                        if (!_instanceof(node, NavigatorGroupTreeNode)) {
                            contextMenu.defaultSection().appendItem(i18nString(UIStrings.delete), this.handleDeleteFolder.bind(this, node), {
                                jslogContext: 'delete'
                            });
                        }
                    }
                }
                void contextMenu.show();
            }
        },
        {
            key: "rename",
            value: function rename(node, creatingNewUISourceCode) {
                var uiSourceCode = node.uiSourceCode();
                node.rename(callback.bind(this));
                function callback(committed) {
                    if (!creatingNewUISourceCode) {
                        return;
                    }
                    if (!committed) {
                        uiSourceCode.remove();
                    } else if (node.treeElement && node.treeElement.listItemElement.hasFocus()) {
                        this.sourceSelected(uiSourceCode, true);
                    }
                }
            }
        },
        {
            key: "create",
            value: function create(project, path, uiSourceCodeToCopy) {
                var _this = this;
                return _async_to_generator(function() {
                    var content, uiSourceCode, node;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                content = '';
                                if (!uiSourceCodeToCopy) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    uiSourceCodeToCopy.requestContent()
                                ];
                            case 1:
                                content = _state.sent().content || '';
                                _state.label = 2;
                            case 2:
                                return [
                                    4,
                                    project.createFile(path, null, content)
                                ];
                            case 3:
                                uiSourceCode = _state.sent();
                                if (!uiSourceCode) {
                                    return [
                                        2
                                    ];
                                }
                                _this.sourceSelected(uiSourceCode, false);
                                node = _this.revealUISourceCode(uiSourceCode, true);
                                if (node) {
                                    _this.rename(node, true);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "groupingChanged",
            value: function groupingChanged() {
                this.reset(true);
                this.initGrouping();
                // Reset the workspace to repopulate filesystem folders.
                this.resetWorkspace(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.WorkspaceImpl.instance());
                this.workspaceInternal.uiSourceCodes().forEach(this.addUISourceCode.bind(this));
            }
        },
        {
            key: "ignoreListChanged",
            value: function ignoreListChanged() {
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("just-my-code" /* Root.Runtime.ExperimentName.JUST_MY_CODE */ )) {
                    this.groupingChanged();
                } else {
                    this.rootNode.updateTitleRecursive();
                }
            }
        },
        {
            key: "initGrouping",
            value: function initGrouping() {
                this.groupByFrame = true;
                this.groupByDomain = this.navigatorGroupByFolderSetting.get();
                this.groupByFolder = this.groupByDomain;
                if (this.navigatorGroupByAuthoredExperiment) {
                    this.groupByAuthored = _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled(this.navigatorGroupByAuthoredExperiment);
                } else {
                    this.groupByAuthored = false;
                }
            }
        },
        {
            key: "resetForTest",
            value: function resetForTest() {
                this.reset();
                this.workspaceInternal.uiSourceCodes().forEach(this.addUISourceCode.bind(this));
            }
        },
        {
            key: "discardFrame",
            value: function discardFrame(frame, isAuthored) {
                if (isAuthored) {
                    return;
                }
                var node = this.frameNodes.get(frame);
                if (!node) {
                    return;
                }
                if (node.parent) {
                    node.parent.removeChild(node);
                }
                this.frameNodes.delete(frame);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = frame.childFrames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var child = _step.value;
                        this.discardFrame(child, isAuthored);
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
        {
            key: "targetAdded",
            value: function targetAdded(_target) {}
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(target) {
                var rootOrDeployed = this.rootOrDeployedNode();
                var targetNode = rootOrDeployed.child('target:' + target.id());
                if (targetNode) {
                    rootOrDeployed.removeChild(targetNode);
                }
            }
        },
        {
            key: "targetNameChanged",
            value: function targetNameChanged(event) {
                var target = event.data;
                var targetNode = this.rootOrDeployedNode().child('target:' + target.id());
                if (targetNode) {
                    targetNode.setTitle(target.name());
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(NavigatorView.prototype), "wasShown", this).call(this);
                this.scriptsTree.registerCSSFiles([
                    _navigatorTree_css_js__WEBPACK_IMPORTED_MODULE_13__["default"]
                ]);
                this.registerCSSFiles([
                    _navigatorView_css_js__WEBPACK_IMPORTED_MODULE_14__["default"]
                ]);
            }
        }
    ], [
        {
            key: "treeElementOrder",
            value: function treeElementOrder(treeElement) {
                if (boostOrderForNode.has(treeElement)) {
                    return 0;
                }
                var actualElement = treeElement;
                var order = TYPE_ORDERS.get(actualElement.nodeType) || 0;
                if (actualElement.uiSourceCode) {
                    var contentType = actualElement.uiSourceCode.contentType();
                    if (contentType.isDocument()) {
                        order += 3;
                    } else if (contentType.isScript()) {
                        order += 5;
                    } else if (contentType.isStyleSheet()) {
                        order += 10;
                    } else {
                        order += 15;
                    }
                }
                return order;
            }
        },
        {
            key: "appendSearchItem",
            value: function appendSearchItem(contextMenu, path) {
                var searchLabel = path ? i18nString(UIStrings.searchInFolder) : i18nString(UIStrings.searchInAllFiles);
                var searchSources = new _SearchSourcesView_js__WEBPACK_IMPORTED_MODULE_15__.SearchSources(path && "file:".concat(path));
                contextMenu.viewSection().appendItem(searchLabel, function() {
                    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(searchSources);
                }, {
                    jslogContext: path ? 'search-in-folder' : 'search-in-all-files'
                });
            }
        },
        {
            key: "treeElementsCompare",
            value: function treeElementsCompare(treeElement1, treeElement2) {
                var typeWeight1 = NavigatorView.treeElementOrder(treeElement1);
                var typeWeight2 = NavigatorView.treeElementOrder(treeElement2);
                if (typeWeight1 > typeWeight2) {
                    return 1;
                }
                if (typeWeight1 < typeWeight2) {
                    return -1;
                }
                return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.naturalOrderComparator(treeElement1.titleAsText(), treeElement2.titleAsText());
            }
        }
    ]);
    return NavigatorView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox);
function onRequestsForHeaderOverridesFileChanged(event) {
    var headersFileUiSourceCode = event.data;
    var networkNodes = this.uiSourceCodeNodes.get(headersFileUiSourceCode);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = networkNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var networkNode = _step.value;
            networkNode.updateTitle();
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
function isUISourceCodeOrAnyAncestorSelected(node) {
    var selectedTreeElement = this.scriptsTree.selectedTreeElement;
    var selectedNode = selectedTreeElement && selectedTreeElement.node;
    var currentNode = node;
    while(currentNode){
        if (currentNode === selectedNode) {
            return true;
        }
        currentNode = currentNode.parent;
        if (!(_instanceof(node, NavigatorGroupTreeNode) || _instanceof(node, NavigatorFolderTreeElement))) {
            break;
        }
    }
    return false;
}
var boostOrderForNode = new WeakSet();
var NavigatorFolderTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(NavigatorFolderTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(NavigatorFolderTreeElement);
    function NavigatorFolderTreeElement(navigatorView, type, title, hoverCallback) {
        _class_call_check(this, NavigatorFolderTreeElement);
        var _this;
        _this = _super.call(this, '', true, _class_static_private_method_get(NavigatorFolderTreeElement, NavigatorFolderTreeElement, contextForType).call(NavigatorFolderTreeElement, type));
        _define_property(_assert_this_initialized(_this), "nodeType", void 0);
        _define_property(_assert_this_initialized(_this), "navigatorView", void 0);
        _define_property(_assert_this_initialized(_this), "hoverCallback", void 0);
        _define_property(_assert_this_initialized(_this), "node", void 0);
        _define_property(_assert_this_initialized(_this), "hovered", void 0);
        _define_property(_assert_this_initialized(_this), "isIgnoreListed", void 0);
        _define_property(_assert_this_initialized(_this), "isFromSourceMap", void 0);
        _this.listItemElement.classList.add('navigator-' + type + '-tree-item', 'navigator-folder-tree-item');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(_this.listItemElement, "".concat(title, ", ").concat(type));
        _this.nodeType = type;
        _this.title = title;
        _this.tooltip = title;
        _this.navigatorView = navigatorView;
        _this.hoverCallback = hoverCallback;
        _this.isFromSourceMap = false;
        var iconType = 'folder';
        if (type === Types.Domain) {
            iconType = 'cloud';
        } else if (type === Types.Frame) {
            iconType = 'frame';
        } else if (type === Types.Worker) {
            iconType = 'gears';
        } else if (type === Types.Authored) {
            iconType = 'code';
        } else if (type === Types.Deployed) {
            iconType = 'deployed';
        }
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.create(iconType);
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(NavigatorFolderTreeElement, [
        {
            key: "onpopulate",
            value: function onpopulate() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.node.populate();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                this.collapse();
                this.node.onattach();
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), false);
                this.listItemElement.addEventListener('mousemove', this.mouseMove.bind(this), false);
                this.listItemElement.addEventListener('mouseleave', this.mouseLeave.bind(this), false);
            }
        },
        {
            key: "setIgnoreListed",
            value: function setIgnoreListed(isIgnoreListed) {
                if (this.isIgnoreListed !== isIgnoreListed) {
                    this.isIgnoreListed = isIgnoreListed;
                    this.listItemElement.classList.toggle('is-ignore-listed', isIgnoreListed);
                    this.updateTooltip();
                }
            }
        },
        {
            key: "setFromSourceMap",
            value: function setFromSourceMap(isFromSourceMap) {
                this.isFromSourceMap = isFromSourceMap;
                this.listItemElement.classList.toggle('is-from-source-map', isFromSourceMap);
            }
        },
        {
            key: "setNode",
            value: function setNode(node) {
                this.node = node;
                this.updateTooltip();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, "".concat(this.title, ", ").concat(this.nodeType));
            }
        },
        {
            key: "updateTooltip",
            value: function updateTooltip() {
                if (this.node.tooltip) {
                    this.tooltip = this.node.tooltip;
                } else {
                    var paths = [];
                    var currentNode = this.node;
                    while(currentNode && !currentNode.isRoot() && currentNode.type === this.node.type){
                        paths.push(currentNode.title);
                        currentNode = currentNode.parent;
                    }
                    paths.reverse();
                    var tooltip = paths.join('/');
                    if (this.isIgnoreListed) {
                        tooltip = i18nString(UIStrings.sIgnoreListed, {
                            PH1: tooltip
                        });
                    }
                    this.tooltip = tooltip;
                }
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                if (!this.node) {
                    return;
                }
                this.select();
                this.navigatorView.handleFolderContextMenu(event, this.node);
            }
        },
        {
            key: "mouseMove",
            value: function mouseMove(_event) {
                if (this.hovered || !this.hoverCallback) {
                    return;
                }
                this.hovered = true;
                this.hoverCallback(true);
            }
        },
        {
            key: "mouseLeave",
            value: function mouseLeave(_event) {
                if (!this.hoverCallback) {
                    return;
                }
                this.hovered = false;
                this.hoverCallback(false);
            }
        }
    ]);
    return NavigatorFolderTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement);
function contextForType(type) {
    switch(type){
        case Types.Domain:
            return 'domain';
        case Types.Frame:
            return 'frame';
        case Types.Worker:
            return 'worker';
        case Types.Authored:
            return 'authored';
        case Types.Deployed:
            return 'deployed';
    }
    return 'folder';
}
var NavigatorSourceTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(NavigatorSourceTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(NavigatorSourceTreeElement);
    function NavigatorSourceTreeElement(navigatorView, uiSourceCode, title, node) {
        _class_call_check(this, NavigatorSourceTreeElement);
        var _this;
        _this = _super.call(this, '', false, uiSourceCode.contentType().name());
        _define_property(_assert_this_initialized(_this), "nodeType", void 0);
        _define_property(_assert_this_initialized(_this), "node", void 0);
        _define_property(_assert_this_initialized(_this), "navigatorView", void 0);
        _define_property(_assert_this_initialized(_this), "uiSourceCodeInternal", void 0);
        _this.nodeType = Types.File;
        _this.node = node;
        _this.title = title;
        _this.listItemElement.classList.add('navigator-' + uiSourceCode.contentType().name() + '-tree-item', 'navigator-file-tree-item');
        _this.tooltip = uiSourceCode.url();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(_this.listItemElement, "".concat(uiSourceCode.name(), ", ").concat(_this.nodeType));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.fireEvent('source-tree-file-added', uiSourceCode.fullDisplayName());
        _this.navigatorView = navigatorView;
        _this.uiSourceCodeInternal = uiSourceCode;
        _this.updateIcon();
        _this.titleElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.value('title').track({
            change: true
        })));
        return _this;
    }
    _create_class(NavigatorSourceTreeElement, [
        {
            key: "updateIcon",
            value: function updateIcon() {
                var binding = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().binding(this.uiSourceCodeInternal);
                var networkPersistenceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.NetworkPersistenceManager.NetworkPersistenceManager.instance();
                var iconType = 'document';
                var iconStyles = [];
                if (binding) {
                    if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsUISourceCode(binding.fileSystem)) {
                        iconType = 'snippet';
                    }
                    var badgeIsPurple = networkPersistenceManager.project() === binding.fileSystem.project();
                    iconStyles = badgeIsPurple ? [
                        'dot',
                        'purple'
                    ] : [
                        'dot',
                        'green'
                    ];
                } else if (networkPersistenceManager.isActiveHeaderOverrides(this.uiSourceCode)) {
                    iconStyles = [
                        'dot',
                        'purple'
                    ];
                } else {
                    if (_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_12__.ScriptSnippetFileSystem.isSnippetsUISourceCode(this.uiSourceCodeInternal)) {
                        iconType = 'snippet';
                    }
                }
                var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.create(iconType, iconStyles.join(' '));
                if (binding) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Tooltip.Tooltip.install(icon, _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.PersistenceUtils.PersistenceUtils.tooltipForUISourceCode(this.uiSourceCodeInternal));
                }
                this.setLeadingIcons([
                    icon
                ]);
            }
        },
        {
            key: "updateAccessibleName",
            value: function updateAccessibleName() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.listItemElement, "".concat(this.uiSourceCodeInternal.name(), ", ").concat(this.nodeType));
            }
        },
        {
            key: "uiSourceCode",
            get: function get() {
                return this.uiSourceCodeInternal;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                this.listItemElement.draggable = true;
                this.listItemElement.addEventListener('click', this.onclick.bind(this), false);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), false);
                this.listItemElement.addEventListener('dragstart', this.ondragstart.bind(this), false);
            }
        },
        {
            key: "shouldRenameOnMouseDown",
            value: function shouldRenameOnMouseDown() {
                if (!this.uiSourceCodeInternal.canRename()) {
                    return false;
                }
                if (!this.treeOutline) {
                    return false;
                }
                var isSelected = this === this.treeOutline.selectedTreeElement;
                return isSelected && this.treeOutline.element.hasFocus() && !_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.isBeingEdited(this.treeOutline.element);
            }
        },
        {
            key: "selectOnMouseDown",
            value: function selectOnMouseDown(event) {
                if (event.which !== 1 || !this.shouldRenameOnMouseDown()) {
                    _get(_get_prototype_of(NavigatorSourceTreeElement.prototype), "selectOnMouseDown", this).call(this, event);
                    return;
                }
                window.setTimeout(rename.bind(this), 300);
                function rename() {
                    if (this.shouldRenameOnMouseDown()) {
                        this.navigatorView.rename(this.node, false);
                    }
                }
            }
        },
        {
            key: "ondragstart",
            value: function ondragstart(event) {
                if (!event.dataTransfer) {
                    return;
                }
                event.dataTransfer.setData('text/plain', this.uiSourceCodeInternal.url());
                event.dataTransfer.effectAllowed = 'copy';
            }
        },
        {
            key: "onspace",
            value: function onspace() {
                this.navigatorView.sourceSelected(this.uiSourceCode, true);
                return true;
            }
        },
        {
            key: "onclick",
            value: function onclick(_event) {
                this.navigatorView.sourceSelected(this.uiSourceCode, false);
            }
        },
        {
            key: "ondblclick",
            value: function ondblclick(event) {
                var middleClick = event.button === 1;
                this.navigatorView.sourceSelected(this.uiSourceCode, !middleClick);
                return false;
            }
        },
        {
            key: "onenter",
            value: function onenter() {
                this.navigatorView.sourceSelected(this.uiSourceCode, true);
                return true;
            }
        },
        {
            key: "ondelete",
            value: function ondelete() {
                return true;
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                this.select();
                this.navigatorView.handleFileContextMenu(event, this.node);
            }
        }
    ]);
    return NavigatorSourceTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement);
var NavigatorTreeNode = /*#__PURE__*/ function() {
    "use strict";
    function NavigatorTreeNode(navigatorView, id, type, tooltip) {
        _class_call_check(this, NavigatorTreeNode);
        _define_property(this, "id", void 0);
        _define_property(this, "navigatorView", void 0);
        _define_property(this, "type", void 0);
        _define_property(this, "childrenInternal", void 0);
        _define_property(this, "populated", void 0);
        _define_property(this, "isMerged", void 0);
        _define_property(this, "parent", void 0);
        _define_property(this, "title", void 0);
        _define_property(this, "tooltip", void 0);
        _define_property(this, "recursiveProperties", void 0);
        this.id = id;
        this.navigatorView = navigatorView;
        this.type = type;
        this.childrenInternal = new Map();
        this.tooltip = tooltip;
        this.populated = false;
        this.isMerged = false;
        this.recursiveProperties = {
            exclusivelySourceMapped: null,
            exclusivelyIgnored: null,
            exclusivelyContentScripts: null,
            exclusivelyThirdParty: null
        };
    }
    _create_class(NavigatorTreeNode, [
        {
            key: "treeNode",
            value: function treeNode() {
                throw 'Not implemented';
            }
        },
        {
            key: "dispose",
            value: function dispose() {}
        },
        {
            key: "updateTitle",
            value: function updateTitle() {}
        },
        {
            key: "updateTitleRecursive",
            value: function updateTitleRecursive() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var child = _step.value;
                        child.updateTitleRecursive();
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
                this.updateTitle();
            }
        },
        {
            key: "updateTitleBubbleUp",
            value: function updateTitleBubbleUp() {
                this.updateTitle();
                if (this.parent) {
                    this.parent.updateTitleBubbleUp();
                }
            }
        },
        {
            key: "isRoot",
            value: function isRoot() {
                return false;
            }
        },
        {
            key: "hasChildren",
            value: function hasChildren() {
                return true;
            }
        },
        {
            key: "onattach",
            value: function onattach() {}
        },
        {
            key: "setTitle",
            value: function setTitle(_title) {
                throw 'Not implemented';
            }
        },
        {
            key: "populate",
            value: function populate() {
                if (this.isPopulated()) {
                    return;
                }
                if (this.parent) {
                    this.parent.populate();
                }
                this.populated = true;
                this.wasPopulated();
            }
        },
        {
            key: "wasPopulated",
            value: function wasPopulated() {
                var children = this.children();
                for(var i = 0; i < children.length; ++i){
                    this.navigatorView.appendChild(this.treeNode(), children[i].treeNode());
                }
            }
        },
        {
            key: "didAddChild",
            value: function didAddChild(node) {
                if (this.isPopulated()) {
                    this.navigatorView.appendChild(this.treeNode(), node.treeNode());
                }
            }
        },
        {
            key: "willRemoveChild",
            value: function willRemoveChild(node) {
                if (this.isPopulated()) {
                    this.navigatorView.removeChild(this.treeNode(), node.treeNode());
                }
            }
        },
        {
            key: "isPopulated",
            value: function isPopulated() {
                return this.populated;
            }
        },
        {
            key: "isEmpty",
            value: function isEmpty() {
                return !this.childrenInternal.size;
            }
        },
        {
            key: "children",
            value: function children() {
                return _to_consumable_array(this.childrenInternal.values());
            }
        },
        {
            key: "child",
            value: function child(id) {
                return this.childrenInternal.get(id) || null;
            }
        },
        {
            key: "appendChild",
            value: function appendChild(node) {
                this.childrenInternal.set(node.id, node);
                node.parent = this;
                this.didAddChild(node);
            }
        },
        {
            key: "removeChild",
            value: function removeChild(node) {
                this.willRemoveChild(node);
                this.childrenInternal.delete(node.id);
                node.parent = null;
                node.dispose();
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.childrenInternal.clear();
            }
        }
    ]);
    return NavigatorTreeNode;
}();
var NavigatorRootTreeNode = /*#__PURE__*/ function(NavigatorTreeNode) {
    "use strict";
    _inherits(NavigatorRootTreeNode, NavigatorTreeNode);
    var _super = _create_super(NavigatorRootTreeNode);
    function NavigatorRootTreeNode(navigatorView) {
        _class_call_check(this, NavigatorRootTreeNode);
        return _super.call(this, navigatorView, '', Types.Root);
    }
    _create_class(NavigatorRootTreeNode, [
        {
            key: "isRoot",
            value: function isRoot() {
                return true;
            }
        },
        {
            key: "treeNode",
            value: function treeNode() {
                return this.navigatorView.scriptsTree.rootElement();
            }
        }
    ]);
    return NavigatorRootTreeNode;
}(NavigatorTreeNode);
var NavigatorUISourceCodeTreeNode = /*#__PURE__*/ function(NavigatorTreeNode) {
    "use strict";
    _inherits(NavigatorUISourceCodeTreeNode, NavigatorTreeNode);
    var _super = _create_super(NavigatorUISourceCodeTreeNode);
    function NavigatorUISourceCodeTreeNode(navigatorView, uiSourceCode, frame) {
        _class_call_check(this, NavigatorUISourceCodeTreeNode);
        var _this;
        _this = _super.call(this, navigatorView, 'UISourceCode:' + uiSourceCode.canononicalScriptId(), Types.File);
        _define_property(_assert_this_initialized(_this), "uiSourceCodeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "treeElement", void 0);
        _define_property(_assert_this_initialized(_this), "eventListeners", void 0);
        _define_property(_assert_this_initialized(_this), "frameInternal", void 0);
        _this.uiSourceCodeInternal = uiSourceCode;
        _this.treeElement = null;
        _this.eventListeners = [];
        _this.frameInternal = frame;
        _this.recursiveProperties.exclusivelySourceMapped = uiSourceCode.contentType().isFromSourceMap();
        if (uiSourceCode.contentType().isScript()) {
            // These properties affect ignore-listing menus and only matter when the UISourceCode is a script
            _this.recursiveProperties.exclusivelyThirdParty = uiSourceCode.isKnownThirdParty();
            _this.recursiveProperties.exclusivelyContentScripts = uiSourceCode.project().type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.ContentScripts;
        }
        return _this;
    }
    _create_class(NavigatorUISourceCodeTreeNode, [
        {
            key: "frame",
            value: function frame() {
                return this.frameInternal;
            }
        },
        {
            key: "uiSourceCode",
            value: function uiSourceCode() {
                return this.uiSourceCodeInternal;
            }
        },
        {
            key: "treeNode",
            value: function treeNode() {
                if (this.treeElement) {
                    return this.treeElement;
                }
                this.treeElement = new NavigatorSourceTreeElement(this.navigatorView, this.uiSourceCodeInternal, '', this);
                this.updateTitle();
                var updateTitleBound = this.updateTitle.bind(this, undefined);
                this.eventListeners = [
                    this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.Events.TitleChanged, updateTitleBound),
                    this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.Events.WorkingCopyChanged, updateTitleBound),
                    this.uiSourceCodeInternal.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.UISourceCode.Events.WorkingCopyCommitted, updateTitleBound)
                ];
                return this.treeElement;
            }
        },
        {
            key: "updateTitle",
            value: function updateTitle(ignoreIsDirty) {
                var _this_parent, _this_parent1;
                var isIgnoreListed = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance().isUserOrSourceMapIgnoreListedUISourceCode(this.uiSourceCodeInternal);
                if (this.uiSourceCodeInternal.contentType().isScript() || isIgnoreListed) {
                    this.recursiveProperties.exclusivelyIgnored = isIgnoreListed;
                }
                if (!this.treeElement) {
                    return;
                }
                var titleText = this.uiSourceCodeInternal.displayName();
                if (!ignoreIsDirty && this.uiSourceCodeInternal.isDirty()) {
                    titleText = '*' + titleText;
                }
                this.treeElement.title = titleText;
                this.treeElement.updateIcon();
                this.treeElement.listItemElement.classList.toggle('is-ignore-listed', isIgnoreListed);
                var tooltip = this.uiSourceCodeInternal.url();
                if (this.uiSourceCodeInternal.contentType().isFromSourceMap()) {
                    tooltip = i18nString(UIStrings.sFromSourceMap, {
                        PH1: this.uiSourceCodeInternal.displayName()
                    });
                }
                if (isIgnoreListed) {
                    tooltip = i18nString(UIStrings.sIgnoreListed, {
                        PH1: tooltip
                    });
                }
                this.treeElement.tooltip = tooltip;
                this.treeElement.updateAccessibleName();
                (_this_parent = this.parent) === null || _this_parent === void 0 ? void 0 : _this_parent.childrenInternal.delete(this.id);
                this.id = 'UISourceCode:' + this.uiSourceCodeInternal.canononicalScriptId();
                (_this_parent1 = this.parent) === null || _this_parent1 === void 0 ? void 0 : _this_parent1.childrenInternal.set(this.id, this);
            }
        },
        {
            key: "hasChildren",
            value: function hasChildren() {
                return false;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
            }
        },
        {
            key: "reveal",
            value: function reveal(select) {
                if (this.parent) {
                    this.parent.populate();
                    this.parent.treeNode().expand();
                }
                if (this.treeElement) {
                    this.treeElement.reveal(true);
                    if (select) {
                        this.treeElement.select(true);
                    }
                }
            }
        },
        {
            key: "rename",
            value: function rename(callback) {
                if (!this.treeElement) {
                    return;
                }
                this.treeElement.listItemElement.focus();
                if (!this.treeElement.treeOutline) {
                    return;
                }
                // Tree outline should be marked as edited as well as the tree element to prevent search from starting.
                var treeOutlineElement = this.treeElement.treeOutline.element;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.markBeingEdited(treeOutlineElement, true);
                function commitHandler(element, newTitle, oldTitle) {
                    if (newTitle !== oldTitle) {
                        if (this.treeElement) {
                            this.treeElement.title = newTitle;
                        }
                        // necessary cast to RawPathString as alternative would be altering type of Config<T>
                        void this.uiSourceCodeInternal.rename(newTitle).then(renameCallback.bind(this));
                        return;
                    }
                    afterEditing.call(this, true);
                }
                function renameCallback(success) {
                    if (!success) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.markBeingEdited(treeOutlineElement, false);
                        this.updateTitle();
                        this.rename(callback);
                        return;
                    }
                    if (this.treeElement) {
                        var parent = this.treeElement.parent;
                        if (parent) {
                            parent.removeChild(this.treeElement);
                            parent.appendChild(this.treeElement);
                            this.treeElement.select();
                        }
                    }
                    afterEditing.call(this, true);
                }
                function afterEditing(committed) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.markBeingEdited(treeOutlineElement, false);
                    this.updateTitle();
                    if (callback) {
                        callback(committed);
                    }
                }
                this.updateTitle(true);
                this.treeElement.startEditingTitle(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.InplaceEditor.Config(commitHandler.bind(this), afterEditing.bind(this, false)));
            }
        }
    ]);
    return NavigatorUISourceCodeTreeNode;
}(NavigatorTreeNode);
var NavigatorFolderTreeNode = /*#__PURE__*/ function(NavigatorTreeNode) {
    "use strict";
    _inherits(NavigatorFolderTreeNode, NavigatorTreeNode);
    var _super = _create_super(NavigatorFolderTreeNode);
    function NavigatorFolderTreeNode(navigatorView, project, id, type, folderPath, title, origin) {
        _class_call_check(this, NavigatorFolderTreeNode);
        var _this;
        _this = _super.call(this, navigatorView, id, type);
        _define_property(_assert_this_initialized(_this), "project", void 0);
        _define_property(_assert_this_initialized(_this), "folderPath", void 0);
        _define_property(_assert_this_initialized(_this), "origin", void 0);
        _define_property(_assert_this_initialized(_this), "title", void 0);
        _define_property(_assert_this_initialized(_this), "treeElement", void 0);
        _this.project = project;
        _this.folderPath = folderPath;
        _this.title = title;
        _this.origin = origin;
        return _this;
    }
    _create_class(NavigatorFolderTreeNode, [
        {
            key: "treeNode",
            value: function treeNode() {
                if (this.treeElement) {
                    return this.treeElement;
                }
                this.treeElement = this.createTreeElement(this.title, this);
                this.updateTitle();
                return this.treeElement;
            }
        },
        {
            key: "updateTitle",
            value: function updateTitle() {
                var propName;
                for(propName in this.recursiveProperties){
                    var propValue = null;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var child = _step.value;
                            if (child.recursiveProperties[propName] === false) {
                                propValue = false;
                                break;
                            } else if (child.recursiveProperties[propName]) {
                                propValue = true;
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
                    this.recursiveProperties[propName] = propValue;
                }
                if (!this.treeElement) {
                    return;
                }
                this.treeElement.setFromSourceMap(this.recursiveProperties.exclusivelySourceMapped || false);
                this.treeElement.setIgnoreListed(this.recursiveProperties.exclusivelyIgnored || false);
                if (!this.project || this.project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    return;
                }
                var absoluteFileSystemPath = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemPath(this.project.id()), '/', this.folderPath);
                var hasMappedFiles = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().filePathHasBindings(absoluteFileSystemPath);
                this.treeElement.listItemElement.classList.toggle('has-mapped-files', hasMappedFiles);
            }
        },
        {
            key: "createTreeElement",
            value: function createTreeElement(title, node) {
                var treeElement = new NavigatorFolderTreeElement(this.navigatorView, this.type, title);
                treeElement.setNode(node);
                return treeElement;
            }
        },
        {
            key: "wasPopulated",
            value: function wasPopulated() {
                // @ts-ignore These types are invalid, but removing this check causes wrong behavior
                if (!this.treeElement || this.treeElement.node !== this) {
                    return;
                }
                this.addChildrenRecursive();
            }
        },
        {
            key: "addChildrenRecursive",
            value: function addChildrenRecursive() {
                var children = this.children();
                for(var i = 0; i < children.length; ++i){
                    var child = children[i];
                    this.didAddChild(child);
                    if (_instanceof(child, NavigatorFolderTreeNode)) {
                        child.addChildrenRecursive();
                    }
                }
            }
        },
        {
            key: "shouldMerge",
            value: function shouldMerge(node) {
                return this.type !== Types.Domain && _instanceof(node, NavigatorFolderTreeNode);
            }
        },
        {
            key: "didAddChild",
            value: function didAddChild(node) {
                if (!this.treeElement) {
                    return;
                }
                var children = this.children();
                if (children.length === 1 && this.shouldMerge(node)) {
                    node.isMerged = true;
                    this.treeElement.title = this.treeElement.title + '/' + node.title;
                    node.treeElement = this.treeElement;
                    node.updateTitle();
                    this.treeElement.setNode(node);
                    return;
                }
                var oldNode;
                if (children.length === 2) {
                    oldNode = children[0] !== node ? children[0] : children[1];
                }
                if (oldNode && oldNode.isMerged) {
                    oldNode.isMerged = false;
                    var mergedToNodes = [];
                    mergedToNodes.push(this);
                    var treeNode = this;
                    while(treeNode && treeNode.isMerged){
                        treeNode = treeNode.parent;
                        if (treeNode) {
                            mergedToNodes.push(treeNode);
                        }
                    }
                    mergedToNodes.reverse();
                    var titleText = mergedToNodes.map(function(node) {
                        return node.title;
                    }).join('/');
                    var nodes = [];
                    treeNode = oldNode;
                    do {
                        nodes.push(treeNode);
                        children = treeNode.children();
                        treeNode = children.length === 1 ? children[0] : null;
                    }while (treeNode && treeNode.isMerged);
                    if (!this.isPopulated()) {
                        this.treeElement.title = titleText;
                        this.treeElement.setNode(this);
                        for(var i = 0; i < nodes.length; ++i){
                            nodes[i].treeElement = null;
                            nodes[i].isMerged = false;
                        }
                        this.updateTitle();
                        return;
                    }
                    var oldTreeElement = this.treeElement;
                    var treeElement = this.createTreeElement(titleText, this);
                    for(var i1 = 0; i1 < mergedToNodes.length; ++i1){
                        mergedToNodes[i1].treeElement = treeElement;
                        mergedToNodes[i1].updateTitle();
                    }
                    if (oldTreeElement.parent) {
                        this.navigatorView.appendChild(oldTreeElement.parent, treeElement);
                    }
                    oldTreeElement.setNode(nodes[nodes.length - 1]);
                    oldTreeElement.title = nodes.map(function(node) {
                        return node.title;
                    }).join('/');
                    if (oldTreeElement.parent) {
                        this.navigatorView.removeChild(oldTreeElement.parent, oldTreeElement);
                    }
                    this.navigatorView.appendChild(this.treeElement, oldTreeElement);
                    if (oldTreeElement.expanded) {
                        treeElement.expand();
                    }
                    this.updateTitle();
                }
                if (this.isPopulated()) {
                    this.navigatorView.appendChild(this.treeElement, node.treeNode());
                }
            }
        },
        {
            key: "willRemoveChild",
            value: function willRemoveChild(node) {
                var actualNode = node;
                if (actualNode.isMerged || !this.isPopulated() || !this.treeElement || !actualNode.treeElement) {
                    return;
                }
                this.navigatorView.removeChild(this.treeElement, actualNode.treeElement);
            }
        }
    ]);
    return NavigatorFolderTreeNode;
}(NavigatorTreeNode);
var NavigatorGroupTreeNode = /*#__PURE__*/ function(NavigatorTreeNode) {
    "use strict";
    _inherits(NavigatorGroupTreeNode, NavigatorTreeNode);
    var _super = _create_super(NavigatorGroupTreeNode);
    function NavigatorGroupTreeNode(navigatorView, project, id, type, title, tooltip) {
        _class_call_check(this, NavigatorGroupTreeNode);
        var _this;
        _this = _super.call(this, navigatorView, id, type, tooltip);
        _define_property(_assert_this_initialized(_this), "project", void 0);
        _define_property(_assert_this_initialized(_this), "title", void 0);
        _define_property(_assert_this_initialized(_this), "hoverCallback", void 0);
        _define_property(_assert_this_initialized(_this), "treeElement", void 0);
        _this.project = project;
        _this.title = title;
        _this.populate();
        return _this;
    }
    _create_class(NavigatorGroupTreeNode, [
        {
            key: "setHoverCallback",
            value: function setHoverCallback(hoverCallback) {
                this.hoverCallback = hoverCallback;
            }
        },
        {
            key: "treeNode",
            value: function treeNode() {
                if (this.treeElement) {
                    return this.treeElement;
                }
                this.treeElement = new NavigatorFolderTreeElement(this.navigatorView, this.type, this.title, this.hoverCallback);
                this.treeElement.setNode(this);
                return this.treeElement;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                this.updateTitle();
            }
        },
        {
            key: "updateTitle",
            value: function updateTitle() {
                if (!this.treeElement || !this.project || this.project.type() !== _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_8__.Workspace.projectTypes.FileSystem) {
                    return;
                }
                var fileSystemPath = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemPath(this.project.id());
                var wasActive = this.treeElement.listItemElement.classList.contains('has-mapped-files');
                var isActive = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_7__.Persistence.PersistenceImpl.instance().filePathHasBindings(fileSystemPath);
                if (wasActive === isActive) {
                    return;
                }
                this.treeElement.listItemElement.classList.toggle('has-mapped-files', isActive);
                if (this.treeElement.childrenListElement.hasFocus()) {
                    return;
                }
                if (isActive) {
                    this.treeElement.expand();
                } else {
                    this.treeElement.collapse();
                }
            }
        },
        {
            key: "setTitle",
            value: function setTitle(title) {
                this.title = title;
                if (this.treeElement) {
                    this.treeElement.title = this.title;
                }
            }
        }
    ]);
    return NavigatorGroupTreeNode;
} //# sourceMappingURL=NavigatorView.js.map
(NavigatorTreeNode);


}),
"./panels/sources/navigatorTree.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n:host {\n  overflow-y: auto;\n}\n\n.icon,\n.icon-basic,\n.icon-badge {\n  margin: -3px -5px;\n}\n\n.navigator-fs-tree-item:not(.has-mapped-files):not(.selected) > :not(.selection),\n.navigator-fs-folder-tree-item:not(.has-mapped-files):not(.selected) > :not(.selection) {\n  filter: grayscale(50%);\n  opacity: 50%;\n}\n\n.is-ignore-listed {\n  opacity: 50%;\n}\n\n.tree-outline li {\n  min-height: 20px;\n}\n\n.tree-outline li:hover:not(.selected) .selection {\n  display: block;\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.navigator-fs-folder-tree-item devtools-icon {\n  color: var(--icon-folder-workspace);\n}\n\n.navigator-fs-tree-item devtools-icon {\n  color: var(--icon-file-authored);\n}\n\n.navigator-nw-folder-tree-item devtools-icon {\n  color: var(--icon-folder-deployed);\n}\n\n.navigator-sm-script-tree-item devtools-icon,\n.navigator-script-tree-item devtools-icon,\n.navigator-snippet-tree-item devtools-icon {\n  color: var(--icon-file-script);\n}\n\n.navigator-file-tree-item devtools-icon.dot::before {\n  width: 7px;\n  height: 7px;\n  top: 12px;\n  left: 11px;\n}\n\n.navigator-file-tree-item:hover:not(.force-white-icons) devtools-icon.dot::before {\n  outline-color: var(--icon-gap-hover);\n}\n\n.navigator-file-tree-item.selected:not(.force-white-icons) devtools-icon.dot::before {\n  outline-color: var(--icon-gap-inactive);\n}\n\n.navigator-file-tree-item.selected.force-white-icons devtools-icon.dot::before {\n  outline-color: var(--icon-gap-focus-selected);\n}\n\n.navigator-sm-stylesheet-tree-item devtools-icon,\n.navigator-stylesheet-tree-item devtools-icon {\n  color: var(--icon-file-styles);\n}\n\n.navigator-image-tree-item devtools-icon,\n.navigator-font-tree-item devtools-icon {\n  color: var(--icon-file-image);\n}\n\n.navigator-nw-folder-tree-item.is-from-source-map devtools-icon {\n  color: var(--icon-folder-authored);\n}\n\n.tree-outline:not(:has(.navigator-deployed-tree-item)) .navigator-sm-folder-tree-item .tree-element-title,\n.tree-outline:not(:has(.navigator-deployed-tree-item)) .navigator-sm-script-tree-item .tree-element-title,\n.tree-outline:not(:has(.navigator-deployed-tree-item)) .navigator-sm-stylesheet-tree-item .tree-element-title {\n  font-style: italic;\n}\n\n@media (forced-colors: active) {\n  .tree-outline li .leading-icons devtools-icon {\n    color: ButtonText;\n  }\n\n  .tree-outline li:hover:not(.selected) .selection {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .tree-outline:not(.hide-selection-when-blurred) li.parent:hover:not(.selected)::before {\n    background-color: HighlightText;\n  }\n\n  .tree-outline:not(.hide-selection-when-blurred) li:hover:not(.selected) devtools-icon,\n  .tree-outline li:not(.selected):hover .tree-element-title {\n    forced-color-adjust: none;\n    color: HighlightText;\n  }\n\n  .navigator-fs-tree-item:not(.has-mapped-files):not(.selected) > :not(.selection),\n  .navigator-fs-folder-tree-item:not(.has-mapped-files):not(.selected) > :not(.selection),\n  .is-ignore-listed {\n    filter: none;\n    opacity: 100%;\n  }\n}\n\n/*# sourceURL=navigatorTree.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/sources/navigatorView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.navigator-toolbar {\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding-left: 8px;\n}\n\n/*# sourceURL=navigatorView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);