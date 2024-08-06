"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_ProfilesPanel_js"], {
"./panels/profiler/ProfilesPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  ProfileGroup: function() { return ProfileGroup; },
  ProfileGroupSidebarTreeElement: function() { return ProfileGroupSidebarTreeElement; },
  ProfileTypeSidebarSection: function() { return ProfileTypeSidebarSection; },
  ProfilesPanel: function() { return ProfilesPanel; },
  ProfilesSidebarTreeElement: function() { return ProfilesSidebarTreeElement; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _heapProfiler_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./heapProfiler.css.js */ "./panels/profiler/heapProfiler.css.js");
/* harmony import */var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */var _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ProfileLauncherView.js */ "./panels/profiler/ProfileLauncherView.js");
/* harmony import */var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./panels/profiler/ProfileSidebarTreeElement.js");
/* harmony import */var _profilesPanel_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profilesPanel.css.js */ "./panels/profiler/profilesPanel.css.js");
/* harmony import */var _profilesSidebarTree_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profilesSidebarTree.css.js */ "./panels/profiler/profilesSidebarTree.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
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





// eslint-disable-next-line rulesdir/es_modules_import









var UIStrings = {
    /**
     *@description Text in Profiles Panel of a profiler tool
     *@example {'.js', '.json'} PH1
     */ cantLoadFileSupportedFile: 'Can’t load file. Supported file extensions: \'\'{PH1}\'\'.',
    /**
     *@description Text in Profiles Panel of a profiler tool
     */ cantLoadProfileWhileAnother: 'Can’t load profile while another profile is being recorded.',
    /**
     *@description Text in Profiles Panel of a profiler tool
     *@example {cannot open file} PH1
     */ profileLoadingFailedS: 'Profile loading failed: {PH1}.',
    /**
     *@description Text in Profiles Panel of a profiler tool
     *@example {2} PH1
     */ runD: 'Run {PH1}',
    /**
     *@description Text in Profiles Panel of a profiler tool
     */ profiles: 'Profiles'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/ProfilesPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _saveToFileAction = /*#__PURE__*/ new WeakMap();
var ProfilesPanel = /*#__PURE__*/ function(_UI_Panel_PanelWithSidebar) {
    "use strict";
    _inherits(ProfilesPanel, _UI_Panel_PanelWithSidebar);
    var _super = _create_super(ProfilesPanel);
    function ProfilesPanel(name, profileTypes, recordingActionId) {
        _class_call_check(this, ProfilesPanel);
        var _this;
        _this = _super.call(this, name);
        _define_property(_assert_this_initialized(_this), "profileTypes", void 0);
        _define_property(_assert_this_initialized(_this), "profilesItemTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarTree", void 0);
        _define_property(_assert_this_initialized(_this), "profileViews", void 0);
        _define_property(_assert_this_initialized(_this), "toolbarElement", void 0);
        _define_property(_assert_this_initialized(_this), "toggleRecordAction", void 0);
        _define_property(_assert_this_initialized(_this), "toggleRecordButton", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _saveToFileAction, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "profileViewToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "profileGroups", void 0);
        _define_property(_assert_this_initialized(_this), "launcherView", void 0);
        _define_property(_assert_this_initialized(_this), "visibleView", void 0);
        _define_property(_assert_this_initialized(_this), "profileToView", void 0);
        _define_property(_assert_this_initialized(_this), "typeIdToSidebarSection", void 0);
        _define_property(_assert_this_initialized(_this), "fileSelectorElement", void 0);
        _define_property(_assert_this_initialized(_this), "selectedProfileType", void 0);
        _this.profileTypes = profileTypes;
        var mainContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        _this.splitWidget().setMainWidget(mainContainer);
        _this.profilesItemTreeElement = new ProfilesSidebarTreeElement(_assert_this_initialized(_this));
        _this.sidebarTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeOutlineInShadow();
        _this.sidebarTree.element.classList.add('profiles-sidebar-tree-box');
        _this.panelSidebarElement().appendChild(_this.sidebarTree.element);
        _this.sidebarTree.appendChild(_this.profilesItemTreeElement);
        _this.sidebarTree.element.addEventListener('keydown', _this.onKeyDown.bind(_assert_this_initialized(_this)), false);
        _this.profileViews = document.createElement('div');
        _this.profileViews.id = 'profile-views';
        _this.profileViews.classList.add('vbox');
        mainContainer.element.appendChild(_this.profileViews);
        _this.toolbarElement = document.createElement('div');
        _this.toolbarElement.classList.add('profiles-toolbar');
        mainContainer.element.insertBefore(_this.toolbarElement, mainContainer.element.firstChild);
        _this.panelSidebarElement().classList.add('profiles-tree-sidebar');
        var toolbarContainerLeft = document.createElement('div');
        toolbarContainerLeft.classList.add('profiles-toolbar');
        toolbarContainerLeft.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar('profiles-sidebar')));
        _this.panelSidebarElement().insertBefore(toolbarContainerLeft, _this.panelSidebarElement().firstChild);
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('', toolbarContainerLeft);
        toolbar.makeWrappable(true);
        _this.toggleRecordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction(recordingActionId);
        _this.toggleRecordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(_this.toggleRecordAction);
        toolbar.appendToolbarItem(_this.toggleRecordButton);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButtonForId('profiler.clear-all'));
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButtonForId('profiler.load-from-file'));
        _class_private_field_set(_assert_this_initialized(_this), _saveToFileAction, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('profiler.save-to-file'));
        _class_private_field_get(_this, _saveToFileAction).setEnabled(false);
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(_class_private_field_get(_assert_this_initialized(_this), _saveToFileAction)));
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButtonForId('components.collect-garbage'));
        _this.profileViewToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('', _this.toolbarElement);
        _this.profileViewToolbar.makeWrappable(true);
        _this.profileViewToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar('profile-view')));
        _this.profileGroups = {};
        _this.launcherView = new _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_10__.ProfileLauncherView(_assert_this_initialized(_this));
        _this.launcherView.addEventListener("ProfileTypeSelected" /* ProfileLauncherEvents.ProfileTypeSelected */ , _this.onProfileTypeSelected, _assert_this_initialized(_this));
        _this.profileToView = [];
        _this.typeIdToSidebarSection = {};
        var types = _this.profileTypes;
        for(var i = 0; i < types.length; i++){
            _this.registerProfileType(types[i]);
        }
        _this.launcherView.restoreSelectedProfileType();
        _this.profilesItemTreeElement.select();
        _this.showLauncherView();
        _this.createFileSelectorElement();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener("SuspendStateChanged" /* SDK.TargetManager.Events.SuspendStateChanged */ , _this.onSuspendStateChanged, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel, _this.updateProfileTypeSpecificUI, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.HeapProfilerModel.HeapProfilerModel, _this.updateProfileTypeSpecificUI, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(ProfilesPanel, [
        {
            key: "onKeyDown",
            value: function onKeyDown(ev) {
                var event = ev;
                var handled = false;
                if (event.key === 'ArrowDown' && !event.altKey) {
                    handled = this.sidebarTree.selectNext();
                } else if (event.key === 'ArrowUp' && !event.altKey) {
                    handled = this.sidebarTree.selectPrevious();
                }
                if (handled) {
                    event.consume(true);
                }
            }
        },
        {
            key: "searchableView",
            value: function searchableView() {
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var visibleView = this.visibleView;
                return visibleView && visibleView.searchableView ? visibleView.searchableView() : null;
            }
        },
        {
            key: "createFileSelectorElement",
            value: function createFileSelectorElement() {
                if (this.fileSelectorElement) {
                    this.element.removeChild(this.fileSelectorElement);
                }
                this.fileSelectorElement = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createFileSelectorElement(this.loadFromFile.bind(this));
                this.element.appendChild(this.fileSelectorElement);
            }
        },
        {
            key: "findProfileTypeByExtension",
            value: function findProfileTypeByExtension(fileName) {
                return this.profileTypes.find(function(type) {
                    return Boolean(type.fileExtension()) && fileName.endsWith(type.fileExtension() || '');
                }) || null;
            }
        },
        {
            key: "loadFromFile",
            value: function loadFromFile(file) {
                var _this = this;
                return _async_to_generator(function() {
                    var profileType, extensions, error;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.createFileSelectorElement();
                                profileType = _this.findProfileTypeByExtension(file.name);
                                if (!profileType) {
                                    extensions = new Set(_this.profileTypes.map(function(type) {
                                        return type.fileExtension();
                                    }).filter(function(ext) {
                                        return ext;
                                    }));
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.cantLoadFileSupportedFile, {
                                        PH1: Array.from(extensions).join('\', \'')
                                    }));
                                    return [
                                        2
                                    ];
                                }
                                if (Boolean(profileType.profileBeingRecorded())) {
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error(i18nString(UIStrings.cantLoadProfileWhileAnother));
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    profileType.loadFromFile(file)
                                ];
                            case 1:
                                error = _state.sent();
                                if (error && 'message' in error) {
                                    void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.MessageDialog.show(i18nString(UIStrings.profileLoadingFailedS, {
                                        PH1: error.message
                                    }), undefined, 'profile-loading-failed');
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
            key: "toggleRecord",
            value: function toggleRecord() {
                if (!this.toggleRecordAction.enabled()) {
                    return true;
                }
                var toggleButton = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.DOMUtilities.deepActiveElement(this.element.ownerDocument);
                var type = this.selectedProfileType;
                if (!type) {
                    return true;
                }
                var isProfiling = type.buttonClicked();
                this.updateToggleRecordAction(isProfiling);
                if (isProfiling) {
                    this.launcherView.profileStarted();
                    if (type.hasTemporaryView()) {
                        this.showProfile(type.profileBeingRecorded());
                    }
                } else {
                    this.launcherView.profileFinished();
                }
                if (toggleButton) {
                    toggleButton.focus();
                }
                return true;
            }
        },
        {
            key: "onSuspendStateChanged",
            value: function onSuspendStateChanged() {
                this.updateToggleRecordAction(this.toggleRecordAction.toggled());
            }
        },
        {
            key: "updateToggleRecordAction",
            value: function updateToggleRecordAction(toggled) {
                var hasSelectedTarget = Boolean(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel) || _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.HeapProfilerModel.HeapProfilerModel));
                var enable = toggled || !_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().allTargetsSuspended() && hasSelectedTarget;
                this.toggleRecordAction.setEnabled(enable);
                this.toggleRecordAction.setToggled(toggled);
                if (enable) {
                    this.toggleRecordButton.setTitle(this.selectedProfileType ? this.selectedProfileType.buttonTooltip : '');
                } else {
                    this.toggleRecordButton.setTitle(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.anotherProfilerActiveLabel());
                }
                if (this.selectedProfileType) {
                    this.launcherView.updateProfileType(this.selectedProfileType, enable);
                }
            }
        },
        {
            key: "profileBeingRecordedRemoved",
            value: function profileBeingRecordedRemoved() {
                this.updateToggleRecordAction(false);
                this.launcherView.profileFinished();
            }
        },
        {
            key: "onProfileTypeSelected",
            value: function onProfileTypeSelected(event) {
                this.selectedProfileType = event.data;
                this.updateProfileTypeSpecificUI();
            }
        },
        {
            key: "updateProfileTypeSpecificUI",
            value: function updateProfileTypeSpecificUI() {
                this.updateToggleRecordAction(this.toggleRecordAction.toggled());
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.profileTypes.forEach(function(type) {
                    return type.reset();
                });
                delete this.visibleView;
                this.profileGroups = {};
                this.updateToggleRecordAction(false);
                this.launcherView.profileFinished();
                this.sidebarTree.element.classList.remove('some-expandable');
                this.launcherView.detach();
                this.profileViews.removeChildren();
                this.profileViewToolbar.removeToolbarItems();
                this.profilesItemTreeElement.select();
                this.showLauncherView();
            }
        },
        {
            key: "showLauncherView",
            value: function showLauncherView() {
                this.closeVisibleView();
                this.profileViewToolbar.removeToolbarItems();
                this.launcherView.show(this.profileViews);
                this.visibleView = this.launcherView;
                this.toolbarElement.classList.add('hidden');
                _class_private_field_get(this, _saveToFileAction).setEnabled(false);
            }
        },
        {
            key: "registerProfileType",
            value: function registerProfileType(profileType) {
                this.launcherView.addProfileType(profileType);
                var profileTypeSection = new ProfileTypeSidebarSection(this, profileType);
                this.typeIdToSidebarSection[profileType.id] = profileTypeSection;
                this.sidebarTree.appendChild(profileTypeSection);
                function onAddProfileHeader(event) {
                    this.addProfileHeader(event.data);
                }
                function onRemoveProfileHeader(event) {
                    this.removeProfileHeader(event.data);
                }
                function profileComplete(event) {
                    this.showProfile(event.data);
                }
                profileType.addEventListener("view-updated" /* ProfileTypeEvents.ViewUpdated */ , this.updateProfileTypeSpecificUI, this);
                profileType.addEventListener("add-profile-header" /* ProfileTypeEvents.AddProfileHeader */ , onAddProfileHeader, this);
                profileType.addEventListener("remove-profile-header" /* ProfileTypeEvents.RemoveProfileHeader */ , onRemoveProfileHeader, this);
                profileType.addEventListener("profile-complete" /* ProfileTypeEvents.ProfileComplete */ , profileComplete, this);
                var profiles = profileType.getProfiles();
                for(var i = 0; i < profiles.length; i++){
                    this.addProfileHeader(profiles[i]);
                }
            }
        },
        {
            key: "showLoadFromFileDialog",
            value: function showLoadFromFileDialog() {
                this.fileSelectorElement.click();
            }
        },
        {
            key: "addProfileHeader",
            value: function addProfileHeader(profile) {
                var profileType = profile.profileType();
                var typeId = profileType.id;
                this.typeIdToSidebarSection[typeId].addProfileHeader(profile);
                if (!this.visibleView || this.visibleView === this.launcherView) {
                    this.showProfile(profile);
                }
            }
        },
        {
            key: "removeProfileHeader",
            value: function removeProfileHeader(profile) {
                if (profile.profileType().profileBeingRecorded() === profile) {
                    this.profileBeingRecordedRemoved();
                }
                var i = this.indexOfViewForProfile(profile);
                if (i !== -1) {
                    this.profileToView.splice(i, 1);
                }
                var typeId = profile.profileType().id;
                var sectionIsEmpty = this.typeIdToSidebarSection[typeId].removeProfileHeader(profile);
                // No other item will be selected if there aren't any other profiles, so
                // make sure that view gets cleared when the last profile is removed.
                if (sectionIsEmpty) {
                    this.profilesItemTreeElement.select();
                    this.showLauncherView();
                }
            }
        },
        {
            key: "showProfile",
            value: function showProfile(profile) {
                var _this = this;
                if (!profile || profile.profileType().profileBeingRecorded() === profile && !profile.profileType().hasTemporaryView()) {
                    return null;
                }
                var view = this.viewForProfile(profile);
                if (view === this.visibleView) {
                    return view;
                }
                this.closeVisibleView();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader, profile);
                _class_private_field_get(this, _saveToFileAction).setEnabled(profile.canSaveToFile());
                view.show(this.profileViews);
                this.toolbarElement.classList.remove('hidden');
                this.visibleView = view;
                var profileTypeSection = this.typeIdToSidebarSection[profile.profileType().id];
                var sidebarElement = profileTypeSection.sidebarElementForProfile(profile);
                if (sidebarElement) {
                    sidebarElement.revealAndSelect();
                }
                this.profileViewToolbar.removeToolbarItems();
                void view.toolbarItems().then(function(items) {
                    items.map(function(item) {
                        return _this.profileViewToolbar.appendToolbarItem(item);
                    });
                });
                return view;
            }
        },
        {
            key: "showObject",
            value: function showObject(_snapshotObjectId, _perspectiveName) {}
        },
        {
            key: "linkifyObject",
            value: function linkifyObject(_nodeIndex) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            null
                        ];
                    });
                })();
            }
        },
        {
            key: "viewForProfile",
            value: function viewForProfile(profile) {
                var index = this.indexOfViewForProfile(profile);
                if (index !== -1) {
                    return this.profileToView[index].view;
                }
                var view = profile.createView(this);
                view.element.classList.add('profile-view');
                this.profileToView.push({
                    profile: profile,
                    view: view
                });
                return view;
            }
        },
        {
            key: "indexOfViewForProfile",
            value: function indexOfViewForProfile(profile) {
                return this.profileToView.findIndex(function(item) {
                    return item.profile === profile;
                });
            }
        },
        {
            key: "closeVisibleView",
            value: function closeVisibleView() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader, null);
                _class_private_field_get(this, _saveToFileAction).setEnabled(false);
                if (this.visibleView) {
                    this.visibleView.detach();
                }
                delete this.visibleView;
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.sidebarTree.focus();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ProfilesPanel.prototype), "wasShown", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ProfilesPanel, this);
                this.registerCSSFiles([
                    _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _profilesPanel_css_js__WEBPACK_IMPORTED_MODULE_12__["default"],
                    _heapProfiler_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                ]);
                this.sidebarTree.registerCSSFiles([
                    _profilesSidebarTree_css_js__WEBPACK_IMPORTED_MODULE_13__["default"]
                ]);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(ProfilesPanel, null);
                _get(_get_prototype_of(ProfilesPanel.prototype), "willHide", this).call(this);
            }
        }
    ]);
    return ProfilesPanel;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Panel.PanelWithSidebar);
var ProfileTypeSidebarSection = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ProfileTypeSidebarSection, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ProfileTypeSidebarSection);
    function ProfileTypeSidebarSection(dataDisplayDelegate, profileType) {
        _class_call_check(this, ProfileTypeSidebarSection);
        var _this;
        _this = _super.call(this, profileType.treeItemTitle, true);
        _define_property(_assert_this_initialized(_this), "dataDisplayDelegate", void 0);
        _define_property(_assert_this_initialized(_this), "profileTreeElements", void 0);
        _define_property(_assert_this_initialized(_this), "profileGroups", void 0);
        _this.selectable = false;
        _this.dataDisplayDelegate = dataDisplayDelegate;
        _this.profileTreeElements = [];
        _this.profileGroups = {};
        _this.expand();
        _this.hidden = true;
        _this.setCollapsible(false);
        return _this;
    }
    _create_class(ProfileTypeSidebarSection, [
        {
            key: "addProfileHeader",
            value: function addProfileHeader(profile) {
                this.hidden = false;
                var profileType = profile.profileType();
                var sidebarParent = this;
                var profileTreeElement = profile.createSidebarTreeElement(this.dataDisplayDelegate);
                this.profileTreeElements.push(profileTreeElement);
                if (!profile.fromFile() && profileType.profileBeingRecorded() !== profile) {
                    var profileTitle = profile.title;
                    var group = this.profileGroups[profileTitle];
                    if (!group) {
                        group = new ProfileGroup();
                        this.profileGroups[profileTitle] = group;
                    }
                    group.profileSidebarTreeElements.push(profileTreeElement);
                    var groupSize = group.profileSidebarTreeElements.length;
                    if (groupSize === 2) {
                        // Make a group UI.TreeOutline.TreeElement now that there are 2 profiles.
                        group.sidebarTreeElement = new ProfileGroupSidebarTreeElement(this.dataDisplayDelegate, profile.title);
                        var firstProfileTreeElement = group.profileSidebarTreeElements[0];
                        // Insert at the same index for the first profile of the group.
                        var index = this.children().indexOf(firstProfileTreeElement);
                        this.insertChild(group.sidebarTreeElement, index);
                        // Move the first profile to the group.
                        var selected = firstProfileTreeElement.selected;
                        this.removeChild(firstProfileTreeElement);
                        group.sidebarTreeElement.appendChild(firstProfileTreeElement);
                        if (selected) {
                            firstProfileTreeElement.revealAndSelect();
                        }
                        firstProfileTreeElement.setSmall(true);
                        firstProfileTreeElement.setMainTitle(i18nString(UIStrings.runD, {
                            PH1: 1
                        }));
                        if (this.treeOutline) {
                            this.treeOutline.element.classList.add('some-expandable');
                        }
                    }
                    if (groupSize >= 2) {
                        sidebarParent = group.sidebarTreeElement;
                        profileTreeElement.setSmall(true);
                        profileTreeElement.setMainTitle(i18nString(UIStrings.runD, {
                            PH1: groupSize
                        }));
                    }
                }
                if (sidebarParent) {
                    sidebarParent.appendChild(profileTreeElement);
                }
            }
        },
        {
            key: "removeProfileHeader",
            value: function removeProfileHeader(profile) {
                var index = this.sidebarElementIndex(profile);
                if (index === -1) {
                    return false;
                }
                var profileTreeElement = this.profileTreeElements[index];
                this.profileTreeElements.splice(index, 1);
                var sidebarParent = this;
                var group = this.profileGroups[profile.title];
                if (group) {
                    var groupElements = group.profileSidebarTreeElements;
                    groupElements.splice(groupElements.indexOf(profileTreeElement), 1);
                    if (groupElements.length === 1) {
                        // Move the last profile out of its group and remove the group.
                        var pos = sidebarParent.children().indexOf(group.sidebarTreeElement);
                        if (group.sidebarTreeElement) {
                            group.sidebarTreeElement.removeChild(groupElements[0]);
                        }
                        this.insertChild(groupElements[0], pos);
                        groupElements[0].setSmall(false);
                        groupElements[0].setMainTitle(profile.title);
                        if (group.sidebarTreeElement) {
                            this.removeChild(group.sidebarTreeElement);
                        }
                    }
                    if (groupElements.length !== 0) {
                        sidebarParent = group.sidebarTreeElement;
                    }
                }
                if (sidebarParent) {
                    sidebarParent.removeChild(profileTreeElement);
                }
                profileTreeElement.dispose();
                if (this.childCount()) {
                    return false;
                }
                this.hidden = true;
                return true;
            }
        },
        {
            key: "sidebarElementForProfile",
            value: function sidebarElementForProfile(profile) {
                var index = this.sidebarElementIndex(profile);
                return index === -1 ? null : this.profileTreeElements[index];
            }
        },
        {
            key: "sidebarElementIndex",
            value: function sidebarElementIndex(profile) {
                var elements = this.profileTreeElements;
                for(var i = 0; i < elements.length; i++){
                    if (elements[i].profile === profile) {
                        return i;
                    }
                }
                return -1;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                this.listItemElement.classList.add('profiles-tree-section');
            }
        }
    ]);
    return ProfileTypeSidebarSection;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement);
var ProfileGroup = function ProfileGroup() {
    "use strict";
    _class_call_check(this, ProfileGroup);
    _define_property(this, "profileSidebarTreeElements", void 0);
    _define_property(this, "sidebarTreeElement", void 0);
    this.profileSidebarTreeElements = [];
    this.sidebarTreeElement = null;
};
var ProfileGroupSidebarTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ProfileGroupSidebarTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ProfileGroupSidebarTreeElement);
    function ProfileGroupSidebarTreeElement(dataDisplayDelegate, title) {
        _class_call_check(this, ProfileGroupSidebarTreeElement);
        var _this;
        _this = _super.call(this, '', true);
        _define_property(_assert_this_initialized(_this), "dataDisplayDelegate", void 0);
        _define_property(_assert_this_initialized(_this), "profileTitle", void 0);
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _this.selectable = false;
        _this.dataDisplayDelegate = dataDisplayDelegate;
        _this.profileTitle = title;
        _this.expand();
        _this.toggleOnClick = true;
        return _this;
    }
    _create_class(ProfileGroupSidebarTreeElement, [
        {
            key: "onselect",
            value: function onselect() {
                var hasChildren = this.childCount() > 0;
                if (hasChildren) {
                    var lastChild = this.lastChild();
                    if (_instanceof(lastChild, _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ProfileSidebarTreeElement)) {
                        this.dataDisplayDelegate.showProfile(lastChild.profile);
                    }
                }
                return hasChildren;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                this.listItemElement.classList.add('profile-group-sidebar-tree-item');
                this.listItemElement.createChild('div', 'icon');
                this.listItemElement.createChild('div', 'titles no-subtitle').createChild('span', 'title-container').createChild('span', 'title').textContent = this.profileTitle;
            }
        }
    ]);
    return ProfileGroupSidebarTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement);
var ProfilesSidebarTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ProfilesSidebarTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ProfilesSidebarTreeElement);
    function ProfilesSidebarTreeElement(panel) {
        _class_call_check(this, ProfilesSidebarTreeElement);
        var _this;
        _this = _super.call(this, '', false);
        _define_property(_assert_this_initialized(_this), "panel", void 0);
        _this.selectable = true;
        _this.panel = panel;
        return _this;
    }
    _create_class(ProfilesSidebarTreeElement, [
        {
            key: "onselect",
            value: function onselect() {
                this.panel.showLauncherView();
                return true;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                this.listItemElement.classList.add('profile-launcher-view-tree-item');
                this.listItemElement.createChild('div', 'titles no-subtitle').createChild('span', 'title-container').createChild('span', 'title').textContent = i18nString(UIStrings.profiles);
                this.setLeadingIcons([
                    _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.create('document')
                ]);
            }
        }
    ]);
    return ProfilesSidebarTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.TreeElement);
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
                    case 'profiler.clear-all':
                        {
                            var profilesPanel = context.flavor(ProfilesPanel);
                            if (profilesPanel !== null) {
                                profilesPanel.reset();
                                return true;
                            }
                            return false;
                        }
                    case 'profiler.load-from-file':
                        {
                            var profilesPanel1 = context.flavor(ProfilesPanel);
                            if (profilesPanel1 !== null) {
                                profilesPanel1.showLoadFromFileDialog();
                                return true;
                            }
                            return false;
                        }
                    case 'profiler.save-to-file':
                        {
                            var profile = context.flavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader);
                            if (profile !== null) {
                                profile.saveToFile();
                                return true;
                            }
                            return false;
                        }
                    case 'profiler.delete-profile':
                        {
                            var profile1 = context.flavor(_ProfileHeader_js__WEBPACK_IMPORTED_MODULE_9__.ProfileHeader);
                            if (profile1 !== null) {
                                profile1.profileType().removeProfile(profile1);
                                return true;
                            }
                            return false;
                        }
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=ProfilesPanel.js.map
();


}),
"./panels/profiler/heapProfiler.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2009 Google Inc. All rights reserved.\n * Copyright (C) 2010 Apple Inc. All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are\n * met:\n *\n *     * Redistributions of source code must retain the above copyright\n * notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above\n * copyright notice, this list of conditions and the following disclaimer\n * in the documentation and/or other materials provided with the\n * distribution.\n *     * Neither the name of Google Inc. nor the names of its\n * contributors may be used to endorse or promote products derived from\n * this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.heap-snapshot-view {\n  overflow: hidden;\n}\n\n.heap-snapshot-view .data-grid {\n  border: none;\n  flex: auto;\n}\n\n.heap-snapshot-view .data-grid tr:empty {\n  height: 16px;\n  visibility: hidden;\n}\n\n.heap-snapshot-view .data-grid span.percent-column {\n  width: 35px !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.heap-snapshot-view .object-value-object,\n.object-value-node {\n  display: inline;\n  position: static;\n}\n\n.heap-snapshot-view .object-value-string {\n  white-space: nowrap;\n}\n\n.heap-snapshot-view td.object-column .objects-count {\n  margin-left: 10px;\n  font-size: 11px;\n  color: var(--sys-color-token-subtle);\n}\n\n.heap-snapshot-view tr:not(.selected) .object-value-id {\n  color: var(--sys-color-token-subtle);\n}\n\n.profile-view .heap-tracking-overview {\n  flex: 0 0 80px;\n  height: 80px;\n}\n\n.heap-snapshot-view .retaining-paths-view {\n  overflow: hidden;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer {\n  background-color: var(--sys-color-surface1);\n  display: flex;\n  flex: 0 0 21px;\n}\n\n.heap-snapshot-view td.object-column > div > span {\n  margin-right: 6px;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer .title {\n  flex: 0 1 auto;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer .verticalResizerIcon {\n  background-image: var(--image-file-toolbarResizerVertical);\n  background-repeat: no-repeat;\n  background-position: center;\n  flex: 0 0 28px;\n  margin-left: auto;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer .title > span {\n  display: inline-block;\n  padding-top: 3px;\n  vertical-align: middle;\n  margin-left: 4px;\n  margin-right: 8px;\n}\n\n.heap-snapshot-view .heap-snapshot-view-resizer * {\n  pointer-events: none;\n}\n\n.heap-snapshot-view tr:not(.selected) td.object-column span.highlight {\n  background-color: inherit;\n}\n\n.heap-snapshot-view td.object-column span.heap-object-source-link {\n  float: right;\n}\n\n.heap-snapshot-view td.object-column span.heap-object-source-link:empty {\n  animation: fadeInOut 2s infinite;\n}\n\n.heap-snapshot-view td.object-column span.heap-object-source-link:empty::before {\n  content: "\\b7\\b7";\n  font-weight: bold;\n}\n\n@keyframes fadeInOut {\n  0% {\n    transform: rotate(0);\n  }\n\n  50% {\n    transform: rotate(0.5turn);\n  }\n\n  100% {\n    transform: rotate(1turn);\n  }\n}\n\n.heap-object-tag {\n  height: 14px;\n  width: 14px;\n}\n\n.heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag,\n.heap-snapshot-view tr:not(.selected) td.object-column span.grayed {\n  color: var(--sys-color-token-subtle);\n}\n\n.heap-snapshot-view tr:not(.selected) .cycled-ancestor-node,\n.heap-snapshot-view tr:not(.selected) .unreachable-ancestor-node {\n  opacity: 60%;\n}\n\n#heap-recording-view .profile-view {\n  top: 80px;\n}\n\n.heap-overview-container {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 80px;\n}\n\n#heap-recording-overview-grid .resources-dividers-label-bar {\n  pointer-events: auto;\n}\n\n.heap-recording-overview-canvas {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.heap-snapshot-statistics-view {\n  overflow: auto;\n}\n\n.heap-snapshot-stats-pie-chart {\n  margin: 12px 30px;\n  flex-shrink: 0;\n}\n\n.heap-allocation-stack .stack-frame {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 2px;\n}\n\n.heap-allocation-stack .stack-frame:focus {\n  background-color: var(--sys-color-tonal-container);\n  color: var(--sys-color-on-tonal-container);\n}\n\n.heap-allocation-stack .stack-frame:hover:not(:focus) {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.heap-allocation-stack .stack-frame .devtools-link {\n  color: var(--sys-color-primary);\n}\n\n.no-heap-allocation-stack {\n  padding: 5px;\n}\n\n@media (forced-colors: active) {\n  .cycled-ancestor-node {\n    opacity: 100%;\n  }\n\n  .heap-snapshot-view td.object-column .objects-count,\n  .heap-snapshot-view tr:not(.selected) td.object-column span.heap-object-tag,\n  .heap-snapshot-view tr:not(.selected) .object-value-id {\n    color: ButtonText;\n  }\n}\n\n/*# sourceURL=heapProfiler.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/profiler/profilesPanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n/* Profiler Style */\n\n#profile-views {\n  flex: auto;\n  position: relative;\n}\n\n.profile-view .data-grid table.data {\n  background: var(--sys-color-cdt-base-container);\n}\n\n.profile-view .data-grid tr:not(.selected) .highlight {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.profile-view .data-grid tr:hover td:not(.bottom-filler-td) {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.profile-view .data-grid td.numeric-column {\n  text-align: right;\n}\n\n.profile-view .data-grid div.profile-multiple-values {\n  float: right;\n}\n\n.profile-view .data-grid span.percent-column {\n  color: var(--sys-color-token-subtle);\n  width: 9ex;\n  display: inline-block;\n}\n\n.profile-view .data-grid tr.selected span {\n  color: inherit;\n}\n\n.profiles-toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex-shrink: 0;\n}\n\n.profiles-tree-sidebar {\n  flex: auto;\n  overflow: hidden;\n}\n\n.profiles-sidebar-tree-box {\n  overflow-y: auto;\n}\n\n.profile-view {\n  display: flex;\n  overflow: hidden;\n}\n\n.profile-view .data-grid {\n  border: none;\n  flex: auto;\n}\n\n.profile-view .data-grid th.self-column,\n.profile-view .data-grid th.total-column {\n  text-align: center;\n}\n\n.profile-node-file {\n  float: right;\n  color: var(--sys-color-token-subtle);\n}\n\n.profile-warn-marker {\n  vertical-align: -1px;\n  margin-right: 2px;\n}\n\n.cpu-profile-flame-chart-overview-container {\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 80px;\n}\n\n#cpu-profile-flame-chart-overview-container {\n  border-bottom: 1px solid var(--sys-color-divider);\n  overflow: hidden;\n}\n\n.cpu-profile-flame-chart-overview-canvas {\n  position: absolute;\n  top: 20px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#cpu-profile-flame-chart-overview-grid .resources-dividers-label-bar {\n  pointer-events: auto;\n}\n\n.cpu-profile-flame-chart-overview-pane {\n  flex: 0 0 80px !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.profile-text-view {\n  padding: 10px;\n  overflow: auto;\n  margin: 0;\n  user-select: text;\n  cursor: text;\n}\n\n.empty-landing-page {\n  position: absolute;\n  background-color: var(--sys-color-cdt-base-container);\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  font-size: 16px;\n  color: var(--sys-color-token-subtle);\n  padding: 50px;\n}\n\nbutton {\n  cursor: pointer;\n}\n\n@media (forced-colors: active) {\n  .profile-view .data-grid tr:hover td:not(.bottom-filler-td) {\n    background: Highlight;\n  }\n\n  .profile-view .data-grid table.data {\n    background: transparent;\n  }\n}\n\n/*# sourceURL=profilesPanel.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/profiler/profilesSidebarTree.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n:host {\n  padding: var(--sys-size-3) 0;\n}\n\n.tree-outline-disclosure {\n  width: 100%;\n}\n\n/* Icon-related changes */\nli .icon {\n  width: 20px;\n  height: 20px;\n  margin-right: var(--sys-size-6);\n  flex: none;\n}\n\n/* Heap profiles and CPU profiles */\n.heap-snapshot-sidebar-tree-item .icon,\n.profile-sidebar-tree-item .icon {\n  mask-image: var(--image-file-heap-snapshot);\n  background: var(--icon-default);\n}\n\n.profile-group-sidebar-tree-item .icon {\n  mask-image: var(--image-file-heap-snapshots);\n  background: var(--icon-default);\n}\n\nli.small .icon {\n  width: 16px;\n  height: 16px;\n}\n\nli.wait .icon {\n  content: none;\n}\n\n/* Tree outline overrides */\n\n.heap-snapshot-sidebar-tree-item.wait .icon {\n  mask-image: unset;\n  background-color: inherit;\n}\n\n.heap-snapshot-sidebar-tree-item.small .icon {\n  mask-image: var(--image-file-heap-snapshots);\n  background: var(--icon-default);\n}\n\n.profile-sidebar-tree-item.small .icon {\n  mask-image: var(--image-file-heap-snapshots);\n  background: var(--icon-default);\n}\n\n.tree-outline li:not(.parent)::before {\n  content: none;\n}\n\nol.tree-outline {\n  flex: auto;\n  padding: 0;\n}\n\n.tree-outline li {\n  height: var(--sys-size-12);\n  padding-left: var(--sys-size-7);\n  margin-right: var(--sys-size-5);\n  color: var(--sys-color-on-surface);\n\n  & .leading-icons {\n    margin-right: var(--sys-size-6);\n    flex: none;\n  }\n\n  & .selection {\n    border-radius: 0 100px 100px 0;\n  }\n}\n\n.tree-outline .profile-launcher-view-tree-item,\n.tree-outline li.profiles-tree-section + .children > li {\n  border-radius: 0 100px 100px 0;\n  position: relative;\n\n  &.selected {\n    background-color: var(--app-color-navigation-drawer-background-selected);\n    color: var(--app-color-navigation-drawer-label-selected);\n\n    & devtools-icon {\n      color: var(--app-color-navigation-drawer-label-selected);\n    }\n\n    & > .icon:not(.spinner) {\n      background-color: var(--app-color-navigation-drawer-label-selected);\n    }\n  }\n\n  &:active::before {\n    background-color: var(--sys-color-state-ripple-neutral-on-subtle);\n    mask-image: none;\n    content: "";\n    height: 100%;\n    width: 100%;\n    border-radius: inherit;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  &:focus-visible {\n    box-shadow: inset 0 0 0 2px var(--sys-color-state-focus-ring);\n  }\n}\n\n.tree-outline li.profiles-tree-section {\n  margin-top: var(--sys-size-6);\n  line-height: var(--sys-size-8);\n\n  &:hover:not(:has(span[is="dt-checkbox"])) .selection {\n    background-color: transparent;\n  }\n}\n\n.tree-outline li.profiles-tree-section::before {\n  display: none;\n}\n\n.tree-outline ol {\n  overflow: hidden;\n  padding: 0;\n}\n\n/* Generic items styling */\n\nli.wait .spinner::before {\n  --dimension: 20px;\n\n  margin: 0;\n}\n\nli.wait.small .spinner::before {\n  --dimension: 14px;\n  --clip-size: 9px;\n  --override-spinner-size: 2px;\n\n  margin: 1px;\n}\n\nli.wait.selected .spinner::before {\n  --override-spinner-color: var(--ref-palette-neutral100);\n}\n\n@keyframes spinner-animation {\n  from {\n    transform: rotate(0);\n  }\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n\nli.small {\n  height: 20px;\n}\n\nli .titles {\n  display: inline-flex;\n  padding-right: var(--sys-size-5);\n}\n\nli .titles > .title-container {\n  z-index: 1;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\nli.small .titles {\n  top: 2px;\n  line-height: normal;\n}\n\nli:not(.small) .title::after {\n  content: "\\A";\n  white-space: pre;\n}\n\nli .subtitle {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  margin-left: var(--sys-size-3);\n}\n\nli.small .subtitle {\n  display: none;\n}\n\nli devtools-button {\n  min-width: var(--sys-size-12);\n  visibility: hidden;\n}\n\nli.selected:hover devtools-button {\n  visibility: visible;\n  margin-left: auto;\n}\n\n@media (forced-colors: active) {\n  .tree-outline li,\n  .tree-outline li.profiles-tree-section,\n  .tree-outline li:hover .tree-element-title {\n    forced-color-adjust: none;\n    color: ButtonText;\n    text-shadow: unset;\n  }\n\n  .tree-outline .profile-launcher-view-tree-item,\n  .tree-outline li.profiles-tree-section + .children > li {\n    &.selected {\n      background-color: Highlight;\n      color: HighlightText;\n\n      & devtools-icon {\n        color: HighlightText;\n      }\n\n      & > .icon:not(.spinner) {\n        background-color: HighlightText;\n      }\n    }\n  }\n}\n\n/*# sourceURL=profilesSidebarTree.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);