"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_SourcesNavigator_js"], {
"./panels/sources/SourcesNavigator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  ContentScriptsNavigatorView: function() { return ContentScriptsNavigatorView; },
  FilesNavigatorView: function() { return FilesNavigatorView; },
  NetworkNavigatorView: function() { return NetworkNavigatorView; },
  OverridesNavigatorView: function() { return OverridesNavigatorView; },
  SnippetsNavigatorView: function() { return SnippetsNavigatorView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../snippets/snippets.js */ "./panels/snippets/snippets.js");
/* harmony import */var _NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavigatorView.js */ "./panels/sources/NavigatorView.js");
/* harmony import */var _sourcesNavigator_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sourcesNavigator.css.js */ "./panels/sources/sourcesNavigator.css.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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
 */ function _assert_this_initialized(self) {
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n  <div>",
        "</div><br />\n  ",
        "\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n  <div>",
        "</div><br />\n  ",
        "\n  "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n  <div>",
        "</div><br />\n  ",
        "\n  "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n  <div>",
        "</div><br />\n  ",
        "\n  "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}












var UIStrings = {
    /**
     *@description Text to explain the Workspace feature in the Sources panel. https://goo.gle/devtools-workspace
     */ explainWorkspace: 'Set up workspace to sync edits directly to the sources you develop',
    /**
     *@description Text to explain the Local Overrides feature. https://goo.gle/devtools-overrides
     */ explainLocalOverrides: 'Override network requests and web content locally to mock remote resources',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Tooltip text that appears when hovering over the largeicon clear button in the Sources Navigator of the Sources panel
     */ clearConfiguration: 'Clear configuration',
    /**
     *@description Text in Sources Navigator of the Sources panel
     */ selectFolderForOverrides: 'Select folder for overrides',
    /**
     *@description Text to explain the content scripts pane in the Sources panel
     */ explainContentScripts: 'View content scripts served by extensions',
    /**
     *@description Text to explain the Snippets feature in the Sources panel https://goo.gle/devtools-snippets
     */ explainSnippets: 'Save the JavaScript code you run often to run it again anytime',
    /**
     *@description Text in Sources Navigator of the Sources panel
     */ newSnippet: 'New snippet',
    /**
     *@description Title of an action in the sources tool to create snippet
     */ createNewSnippet: 'Create new snippet',
    /**
     *@description A context menu item in the Sources Navigator of the Sources panel
     */ run: 'Run',
    /**
     *@description A context menu item in the Navigator View of the Sources panel
     */ rename: 'Rename…',
    /**
     *@description Label for an item to remove something
     */ remove: 'Remove',
    /**
     *@description Text to save content as a specific file type
     */ saveAs: 'Save as...'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/SourcesNavigator.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var networkNavigatorViewInstance;
var NetworkNavigatorView = /*#__PURE__*/ function(NavigatorView) {
    "use strict";
    _inherits(NetworkNavigatorView, NavigatorView);
    var _super = _create_super(NetworkNavigatorView);
    function NetworkNavigatorView() {
        _class_call_check(this, NetworkNavigatorView);
        var _this;
        _this = _super.call(this, 'navigator-network', true);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */ , _this.inspectedURLChanged, _assert_this_initialized(_this));
        // Record the sources tool load time after the file navigator has loaded.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelLoaded('sources', 'DevTools.Launch.Sources');
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addScopeChangeListener(_this.onScopeChange.bind(_assert_this_initialized(_this)));
        return _this;
    }
    _create_class(NetworkNavigatorView, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.registerCSSFiles([
                    _sourcesNavigator_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]
                ]);
                _get(_get_prototype_of(NetworkNavigatorView.prototype), "wasShown", this).call(this);
            }
        },
        {
            key: "acceptProject",
            value: function acceptProject(project) {
                return project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.Network && _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().isInScope(_models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.NetworkProject.NetworkProject.getTargetForProject(project));
            }
        },
        {
            key: "onScopeChange",
            value: function onScopeChange() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance().projects()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var project = _step.value;
                        if (!this.acceptProject(project)) {
                            this.removeProject(project);
                        } else {
                            this.tryAddProject(project);
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
            }
        },
        {
            key: "inspectedURLChanged",
            value: function inspectedURLChanged(event) {
                var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().scopeTarget();
                if (event.data !== mainTarget) {
                    return;
                }
                var inspectedURL = mainTarget && mainTarget.inspectedURL();
                if (!inspectedURL) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.workspace().uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        if (this.acceptProject(uiSourceCode.project()) && uiSourceCode.url() === inspectedURL) {
                            this.revealUISourceCode(uiSourceCode, true);
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
            }
        },
        {
            key: "uiSourceCodeAdded",
            value: function uiSourceCodeAdded(uiSourceCode) {
                var mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().scopeTarget();
                var inspectedURL = mainTarget && mainTarget.inspectedURL();
                if (!inspectedURL) {
                    return;
                }
                if (uiSourceCode.url() === inspectedURL) {
                    this.revealUISourceCode(uiSourceCode, true);
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!networkNavigatorViewInstance || forceNew) {
                    networkNavigatorViewInstance = new NetworkNavigatorView();
                }
                return networkNavigatorViewInstance;
            }
        }
    ]);
    return NetworkNavigatorView;
}(_NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView);
var FilesNavigatorView = /*#__PURE__*/ function(NavigatorView) {
    "use strict";
    _inherits(FilesNavigatorView, NavigatorView);
    var _super = _create_super(FilesNavigatorView);
    function FilesNavigatorView() {
        _class_call_check(this, FilesNavigatorView);
        var _this;
        _this = _super.call(this, 'navigator-files');
        var placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        _this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html(_templateObject(), i18nString(UIStrings.explainWorkspace), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://goo.gle/devtools-workspace', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')));
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('navigator-toolbar');
        void toolbar.appendItemsAtLocation('files-navigator-toolbar').then(function() {
            if (!toolbar.empty()) {
                _this.contentElement.insertBefore(toolbar.element, _this.contentElement.firstChild);
            }
        });
        return _this;
    }
    _create_class(FilesNavigatorView, [
        {
            key: "sourceSelected",
            value: function sourceSelected(uiSourceCode, focusSource) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.WorkspaceSourceSelected);
                _get(_get_prototype_of(FilesNavigatorView.prototype), "sourceSelected", this).call(this, uiSourceCode, focusSource);
            }
        },
        {
            key: "acceptProject",
            value: function acceptProject(project) {
                return project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem && _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemType(project) !== 'overrides' && !_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.isSnippetsProject(project);
            }
        },
        {
            key: "handleContextMenu",
            value: function handleContextMenu(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendAction('sources.add-folder-to-workspace', undefined, true);
                void contextMenu.show();
            }
        }
    ]);
    return FilesNavigatorView;
}(_NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView);
var overridesNavigatorViewInstance;
var OverridesNavigatorView = /*#__PURE__*/ function(NavigatorView) {
    "use strict";
    _inherits(OverridesNavigatorView, NavigatorView);
    var _super = _create_super(OverridesNavigatorView);
    function OverridesNavigatorView() {
        _class_call_check(this, OverridesNavigatorView);
        var _this;
        _this = _super.call(this, 'navigator-overrides');
        _define_property(_assert_this_initialized(_this), "toolbar", void 0);
        var placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        _this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html(_templateObject1(), i18nString(UIStrings.explainLocalOverrides), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://goo.gle/devtools-overrides', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')));
        _this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('navigator-toolbar');
        _this.contentElement.insertBefore(_this.toolbar.element, _this.contentElement.firstChild);
        _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().addEventListener("ProjectChanged" /* Persistence.NetworkPersistenceManager.Events.ProjectChanged */ , _this.updateProjectAndUI, _assert_this_initialized(_this));
        _this.workspace().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.ProjectAdded, _this.onProjectAddOrRemoved, _assert_this_initialized(_this));
        _this.workspace().addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.Events.ProjectRemoved, _this.onProjectAddOrRemoved, _assert_this_initialized(_this));
        _this.updateProjectAndUI();
        return _this;
    }
    _create_class(OverridesNavigatorView, [
        {
            key: "onProjectAddOrRemoved",
            value: function onProjectAddOrRemoved(event) {
                var project = event.data;
                if (project && project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.FileSystem && _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.FileSystemWorkspaceBinding.FileSystemWorkspaceBinding.fileSystemType(project) !== 'overrides') {
                    return;
                }
                this.updateUI();
            }
        },
        {
            key: "updateProjectAndUI",
            value: function updateProjectAndUI() {
                this.reset();
                var project = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().project();
                if (project) {
                    this.tryAddProject(project);
                }
                this.updateUI();
            }
        },
        {
            key: "updateUI",
            value: function updateUI() {
                var _this = this;
                this.toolbar.removeToolbarItems();
                var project = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().project();
                if (project) {
                    var enableCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSettingCheckbox(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled'));
                    this.toolbar.appendToolbarItem(enableCheckbox);
                    this.toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSeparator(true));
                    var clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.clearConfiguration), 'clear');
                    clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(false);
                        project.remove();
                    });
                    this.toolbar.appendToolbarItem(clearButton);
                    return;
                }
                var title = i18nString(UIStrings.selectFolderForOverrides);
                var setupButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(title, 'plus', title);
                setupButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
                    void _this.setupNewWorkspace();
                }, this);
                this.toolbar.appendToolbarItem(setupButton);
            }
        },
        {
            key: "setupNewWorkspace",
            value: function setupNewWorkspace() {
                return _async_to_generator(function() {
                    var fileSystem;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addFileSystem('overrides')
                                ];
                            case 1:
                                fileSystem = _state.sent();
                                if (!fileSystem) {
                                    return [
                                        2
                                    ];
                                }
                                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sourceSelected",
            value: function sourceSelected(uiSourceCode, focusSource) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.OverridesSourceSelected);
                _get(_get_prototype_of(OverridesNavigatorView.prototype), "sourceSelected", this).call(this, uiSourceCode, focusSource);
            }
        },
        {
            key: "acceptProject",
            value: function acceptProject(project) {
                return project === _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.NetworkPersistenceManager.NetworkPersistenceManager.instance().project();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!overridesNavigatorViewInstance || forceNew) {
                    overridesNavigatorViewInstance = new OverridesNavigatorView();
                }
                return overridesNavigatorViewInstance;
            }
        }
    ]);
    return OverridesNavigatorView;
}(_NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView);
var ContentScriptsNavigatorView = /*#__PURE__*/ function(NavigatorView) {
    "use strict";
    _inherits(ContentScriptsNavigatorView, NavigatorView);
    var _super = _create_super(ContentScriptsNavigatorView);
    function ContentScriptsNavigatorView() {
        _class_call_check(this, ContentScriptsNavigatorView);
        var _this;
        _this = _super.call(this, 'navigator-content-scripts');
        var placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        _this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html(_templateObject2(), i18nString(UIStrings.explainContentScripts), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://developer.chrome.com/extensions/content_scripts', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')));
        return _this;
    }
    _create_class(ContentScriptsNavigatorView, [
        {
            key: "acceptProject",
            value: function acceptProject(project) {
                return project.type() === _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.projectTypes.ContentScripts;
            }
        }
    ]);
    return ContentScriptsNavigatorView;
}(_NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView);
var SnippetsNavigatorView = /*#__PURE__*/ function(NavigatorView) {
    "use strict";
    _inherits(SnippetsNavigatorView, NavigatorView);
    var _super = _create_super(SnippetsNavigatorView);
    function SnippetsNavigatorView() {
        _class_call_check(this, SnippetsNavigatorView);
        var _this;
        _this = _super.call(this, 'navigator-snippets');
        var placeholder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget('');
        _this.setPlaceholder(placeholder);
        placeholder.appendParagraph().appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html(_templateObject3(), i18nString(UIStrings.explainSnippets), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.XLink.XLink.create('https://goo.gle/devtools-snippets', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more')));
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('navigator-toolbar');
        var newButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.newSnippet), 'plus', i18nString(UIStrings.newSnippet), 'sources.new-snippet');
        newButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
            void _this.create(_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.findSnippetsProject(), '');
        });
        toolbar.appendToolbarItem(newButton);
        _this.contentElement.insertBefore(toolbar.element, _this.contentElement.firstChild);
        return _this;
    }
    _create_class(SnippetsNavigatorView, [
        {
            key: "acceptProject",
            value: function acceptProject(project) {
                return _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.isSnippetsProject(project);
            }
        },
        {
            key: "handleContextMenu",
            value: function handleContextMenu(event) {
                var _this = this;
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
                contextMenu.headerSection().appendItem(i18nString(UIStrings.createNewSnippet), function() {
                    return _this.create(_snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.findSnippetsProject(), '');
                }, {
                    jslogContext: 'create-new-snippet'
                });
                void contextMenu.show();
            }
        },
        {
            key: "handleFileContextMenu",
            value: function handleFileContextMenu(event, node) {
                var _this = this;
                var uiSourceCode = node.uiSourceCode();
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ContextMenu.ContextMenu(event);
                contextMenu.headerSection().appendItem(i18nString(UIStrings.run), function() {
                    return _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.evaluateScriptSnippet(uiSourceCode);
                }, {
                    jslogContext: 'run'
                });
                contextMenu.editSection().appendItem(i18nString(UIStrings.rename), function() {
                    return _this.rename(node, false);
                }, {
                    jslogContext: 'rename'
                });
                contextMenu.editSection().appendItem(i18nString(UIStrings.remove), function() {
                    return uiSourceCode.project().deleteFile(uiSourceCode);
                }, {
                    jslogContext: 'remove'
                });
                contextMenu.saveSection().appendItem(i18nString(UIStrings.saveAs), this.handleSaveAs.bind(this, uiSourceCode), {
                    jslogContext: 'save-as'
                });
                void contextMenu.show();
            }
        },
        {
            key: "handleSaveAs",
            value: function handleSaveAs(uiSourceCode) {
                var _this = this;
                return _async_to_generator(function() {
                    var content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                uiSourceCode.commitWorkingCopy();
                                return [
                                    4,
                                    uiSourceCode.requestContent()
                                ];
                            case 1:
                                content = _state.sent().content;
                                return [
                                    4,
                                    _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.FileManager.FileManager.instance().save(_this.addJSExtension(uiSourceCode.url()), content || '', true, false)
                                ];
                            case 2:
                                _state.sent();
                                _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.FileManager.FileManager.instance().close(uiSourceCode.url());
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addJSExtension",
            value: function addJSExtension(url) {
                return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(url, '.js');
            }
        }
    ]);
    return SnippetsNavigatorView;
}(_NavigatorView_js__WEBPACK_IMPORTED_MODULE_10__.NavigatorView);
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                switch(actionId){
                    case 'sources.create-snippet':
                        void _snippets_snippets_js__WEBPACK_IMPORTED_MODULE_9__.ScriptSnippetFileSystem.findSnippetsProject().createFile(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyEncodedPathString, null, '').then(function(uiSourceCode) {
                            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode);
                        });
                        return true;
                    case 'sources.add-folder-to-workspace':
                        void _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_6__.IsolatedFileSystemManager.IsolatedFileSystemManager.instance().addFileSystem();
                        return true;
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=SourcesNavigator.js.map
();


}),
"./panels/sources/sourcesNavigator.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.border-container {\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex-shrink: 0;\n}\n\n/*# sourceURL=sourcesNavigator.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);