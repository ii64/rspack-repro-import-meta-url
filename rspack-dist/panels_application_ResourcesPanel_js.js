"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_ResourcesPanel_js"], {
"./panels/application/ResourcesPanel.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AttemptViewWithFilterRevealer: function() { return AttemptViewWithFilterRevealer; },
  FrameDetailsRevealer: function() { return FrameDetailsRevealer; },
  ResourceRevealer: function() { return ResourceRevealer; },
  ResourcesPanel: function() { return ResourcesPanel; },
  RuleSetViewRevealer: function() { return RuleSetViewRevealer; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */var _resourcesPanel_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resourcesPanel.css.js */ "./panels/application/resourcesPanel.css.js");
/* harmony import */var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__]);
_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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











var resourcesPanelInstance;
var ResourcesPanel = /*#__PURE__*/ function(_UI_Panel_PanelWithSidebar) {
    "use strict";
    _inherits(ResourcesPanel, _UI_Panel_PanelWithSidebar);
    var _super = _create_super(ResourcesPanel);
    function ResourcesPanel() {
        _class_call_check(this, ResourcesPanel);
        var _this;
        _this = _super.call(this, 'resources');
        _define_property(_assert_this_initialized(_this), "resourcesLastSelectedItemSetting", void 0);
        _define_property(_assert_this_initialized(_this), "visibleView", void 0);
        _define_property(_assert_this_initialized(_this), "pendingViewPromise", void 0);
        _define_property(_assert_this_initialized(_this), "categoryView", void 0);
        _define_property(_assert_this_initialized(_this), "storageViews", void 0);
        _define_property(_assert_this_initialized(_this), "storageViewToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "domStorageView", void 0);
        _define_property(_assert_this_initialized(_this), "cookieView", void 0);
        _define_property(_assert_this_initialized(_this), "emptyWidget", void 0);
        _define_property(_assert_this_initialized(_this), "sidebar", void 0);
        _this.resourcesLastSelectedItemSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-last-selected-element-path', []);
        _this.visibleView = null;
        _this.pendingViewPromise = null;
        _this.categoryView = null;
        var mainContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox();
        mainContainer.setMinimumSize(100, 0);
        _this.storageViews = mainContainer.element.createChild('div', 'vbox flex-auto');
        _this.storageViewToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Toolbar('resources-toolbar', mainContainer.element);
        _this.splitWidget().setMainWidget(mainContainer);
        _this.domStorageView = null;
        _this.cookieView = null;
        _this.emptyWidget = null;
        _this.sidebar = new _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__.ApplicationPanelSidebar(_assert_this_initialized(_this));
        _this.sidebar.show(_this.panelSidebarElement());
        return _this;
    }
    _create_class(ResourcesPanel, [
        {
            key: "focus",
            value: function focus() {
                this.sidebar.focus();
            }
        },
        {
            key: "lastSelectedItemPath",
            value: function lastSelectedItemPath() {
                return this.resourcesLastSelectedItemSetting.get();
            }
        },
        {
            key: "setLastSelectedItemPath",
            value: function setLastSelectedItemPath(path) {
                this.resourcesLastSelectedItemSetting.set(path);
            }
        },
        {
            key: "resetView",
            value: function resetView() {
                if (this.visibleView && ResourcesPanel.shouldCloseOnReset(this.visibleView)) {
                    this.showView(null);
                }
            }
        },
        {
            key: "showView",
            value: function showView(view) {
                var _this = this;
                this.pendingViewPromise = null;
                if (this.visibleView === view) {
                    return;
                }
                if (this.visibleView) {
                    this.visibleView.detach();
                }
                if (view) {
                    view.show(this.storageViews);
                }
                this.visibleView = view;
                this.storageViewToolbar.removeToolbarItems();
                this.storageViewToolbar.element.classList.toggle('hidden', true);
                if (_instanceof(view, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.View.SimpleView)) {
                    void view.toolbarItems().then(function(items) {
                        items.map(function(item) {
                            return _this.storageViewToolbar.appendToolbarItem(item);
                        });
                        _this.storageViewToolbar.element.classList.toggle('hidden', !items.length);
                    });
                }
            }
        },
        {
            key: "scheduleShowView",
            value: function scheduleShowView(viewPromise) {
                var _this = this;
                return _async_to_generator(function() {
                    var view;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.pendingViewPromise = viewPromise;
                                return [
                                    4,
                                    viewPromise
                                ];
                            case 1:
                                view = _state.sent();
                                if (_this.pendingViewPromise !== viewPromise) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                _this.showView(view);
                                return [
                                    2,
                                    view
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "showCategoryView",
            value: function showCategoryView(categoryName, categoryLink) {
                if (!this.categoryView) {
                    this.categoryView = new _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__.StorageCategoryView();
                }
                this.categoryView.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane().context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(categoryName))));
                this.categoryView.setText(categoryName);
                this.categoryView.setLink(categoryLink);
                this.showView(this.categoryView);
            }
        },
        {
            key: "showDOMStorage",
            value: function showDOMStorage(domStorage) {
                if (!domStorage) {
                    return;
                }
                if (!this.domStorageView) {
                    this.domStorageView = new _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageItemsView(domStorage);
                } else {
                    this.domStorageView.setStorage(domStorage);
                }
                this.showView(this.domStorageView);
            }
        },
        {
            key: "showCookies",
            value: function showCookies(cookieFrameTarget, cookieDomain) {
                var model = cookieFrameTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieModel.CookieModel);
                if (!model) {
                    return;
                }
                if (!this.cookieView) {
                    this.cookieView = new _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_7__.CookieItemsView(model, cookieDomain);
                } else {
                    this.cookieView.setCookiesDomain(model, cookieDomain);
                }
                this.showView(this.cookieView);
            }
        },
        {
            key: "clearCookies",
            value: function clearCookies(target, cookieDomain) {
                var _this = this;
                var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieModel.CookieModel);
                if (!model) {
                    return;
                }
                void model.clear(cookieDomain).then(function() {
                    if (_this.cookieView) {
                        _this.cookieView.refreshItems();
                    }
                });
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ResourcesPanel.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _resourcesPanel_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
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
                if (!resourcesPanelInstance || forceNew) {
                    resourcesPanelInstance = new ResourcesPanel();
                }
                return resourcesPanelInstance;
            }
        },
        {
            key: "shouldCloseOnReset",
            value: function shouldCloseOnReset(view) {
                var viewClassesToClose = [
                    _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.ResourceSourceFrame.ResourceSourceFrame,
                    _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.ImageView.ImageView,
                    _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.FontView.FontView,
                    _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_10__.StorageItemsView
                ];
                return viewClassesToClose.some(function(type) {
                    return _instanceof(view, type);
                });
            }
        },
        {
            key: "showAndGetSidebar",
            value: function showAndGetSidebar() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('resources')
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    ResourcesPanel.instance().sidebar
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ResourcesPanel;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Panel.PanelWithSidebar);
var ResourceRevealer = /*#__PURE__*/ function() {
    "use strict";
    function ResourceRevealer() {
        _class_call_check(this, ResourceRevealer);
    }
    _create_class(ResourceRevealer, [
        {
            key: "reveal",
            value: function reveal(resource) {
                return _async_to_generator(function() {
                    var sidebar;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    ResourcesPanel.showAndGetSidebar()
                                ];
                            case 1:
                                sidebar = _state.sent();
                                return [
                                    4,
                                    sidebar.showResource(resource)
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ResourceRevealer;
}();
var FrameDetailsRevealer = /*#__PURE__*/ function() {
    "use strict";
    function FrameDetailsRevealer() {
        _class_call_check(this, FrameDetailsRevealer);
    }
    _create_class(FrameDetailsRevealer, [
        {
            key: "reveal",
            value: function reveal(frame) {
                return _async_to_generator(function() {
                    var sidebar;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    ResourcesPanel.showAndGetSidebar()
                                ];
                            case 1:
                                sidebar = _state.sent();
                                sidebar.showFrame(frame);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return FrameDetailsRevealer;
}();
var RuleSetViewRevealer = /*#__PURE__*/ function() {
    "use strict";
    function RuleSetViewRevealer() {
        _class_call_check(this, RuleSetViewRevealer);
    }
    _create_class(RuleSetViewRevealer, [
        {
            key: "reveal",
            value: function reveal(revealInfo) {
                return _async_to_generator(function() {
                    var sidebar;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    ResourcesPanel.showAndGetSidebar()
                                ];
                            case 1:
                                sidebar = _state.sent();
                                sidebar.showPreloadingRuleSetView(revealInfo);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return RuleSetViewRevealer;
}();
var AttemptViewWithFilterRevealer = /*#__PURE__*/ function() {
    "use strict";
    function AttemptViewWithFilterRevealer() {
        _class_call_check(this, AttemptViewWithFilterRevealer);
    }
    _create_class(AttemptViewWithFilterRevealer, [
        {
            key: "reveal",
            value: function reveal(filter) {
                return _async_to_generator(function() {
                    var sidebar;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    ResourcesPanel.showAndGetSidebar()
                                ];
                            case 1:
                                sidebar = _state.sent();
                                sidebar.showPreloadingAttemptViewWithFilter(filter);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return AttemptViewWithFilterRevealer;
} //# sourceMappingURL=ResourcesPanel.js.map
();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/resourcesPanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.\n * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions\n * are met:\n *\n * 1.  Redistributions of source code must retain the above copyright\n *     notice, this list of conditions and the following disclaimer.\n * 2.  Redistributions in binary form must reproduce the above copyright\n *     notice, this list of conditions and the following disclaimer in the\n *     documentation and/or other materials provided with the distribution.\n * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of\n *     its contributors may be used to endorse or promote products derived\n *     from this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY\n * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\n * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\n * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY\n * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\n * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND\n * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF\n * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.resources-toolbar {\n  border-top: 1px solid var(--sys-color-divider);\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.top-resources-toolbar {\n  border-bottom: 1px solid var(--sys-color-divider);\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.resources.panel .status {\n  float: right;\n  height: 16px;\n  margin-top: 1px;\n  margin-left: 4px;\n  line-height: 1em;\n}\n\n.storage-view {\n  display: flex;\n  overflow: hidden;\n}\n\n.storage-view .data-grid:not(.inline) {\n  border: none;\n  flex: auto;\n}\n\n.storage-view .storage-table-error {\n  color: var(--sys-color-error);\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.storage-view.query {\n  padding: 2px 0;\n  overflow-y: overlay;\n  overflow-x: hidden;\n}\n\n.storage-view .filter-bar {\n  border-top: none;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.database-query-group-messages {\n  overflow-y: auto;\n}\n\n.database-query-prompt-container {\n  position: relative;\n  padding: 1px 22px 1px 24px;\n  min-height: 16px;\n}\n\n.database-query-prompt {\n  white-space: pre-wrap;\n}\n\n.prompt-icon {\n  position: absolute;\n  display: block;\n  left: 7px;\n  top: 9px;\n  margin-top: -7px;\n  user-select: none;\n}\n\n.database-user-query .prompt-icon {\n  margin-top: -10px;\n}\n\n.database-query-prompt-container .prompt-icon {\n  top: 6px;\n}\n\n.database-user-query {\n  position: relative;\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 1px 22px 1px 24px;\n  min-height: 16px;\n  flex-shrink: 0;\n}\n\n.database-user-query:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.database-query-text {\n  color: var(--sys-color-primary-bright);\n  user-select: text;\n}\n\n.database-query-result {\n  position: relative;\n  padding: 1px 22px;\n  min-height: 16px;\n  margin-left: -22px;\n  padding-right: 0;\n}\n\n.database-query-result.error {\n  color: var(--sys-color-token-property-special);\n  user-select: text;\n}\n\n.database-query-result.error .prompt-icon {\n  margin-top: -9px;\n}\n\n.resources-sidebar {\n  padding: 0;\n  overflow-x: auto;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n/*# sourceURL=resourcesPanel.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);