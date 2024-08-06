"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_developer_resources_DeveloperResourcesView_js"], {
"./panels/developer_resources/DeveloperResourcesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DeveloperResourcesRevealer: function() { return DeveloperResourcesRevealer; },
  DeveloperResourcesView: function() { return DeveloperResourcesView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _DeveloperResourcesListView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeveloperResourcesListView.js */ "./panels/developer_resources/DeveloperResourcesListView.js");
/* harmony import */var _developerResourcesView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developerResourcesView.css.js */ "./panels/developer_resources/developerResourcesView.css.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
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







var UIStrings = {
    /**
     *@description Placeholder for a search field in a toolbar
     */ filterByText: 'Filter by URL and error',
    /**
     * @description Tooltip for a checkbox in the toolbar of the developer resources view. The
     * inspected target is the webpage that DevTools is debugging/inspecting/attached to.
     */ loadHttpsDeveloperResources: 'Load `HTTP(S)` developer resources through the website you inspect, not through DevTools',
    /**
     * @description Text for a checkbox in the toolbar of the developer resources view. The target is
     * the webpage that DevTools is debugging/inspecting/attached to. This setting makes it so
     * developer resources are requested from the webpage itself, and not from the DevTools
     * application.
     */ enableLoadingThroughTarget: 'Load through website',
    /**
     *@description Text for resources load status
     *@example {1} PH1
     *@example {1} PH2
     */ resourcesCurrentlyLoading: '{PH1} resources, {PH2} currently loading',
    /**
     * @description Status text that appears to tell the developer how many resources were loaded in
     * total. Resources are files related to the webpage.
     */ resources: '{n, plural, =1 {# resource} other {# resources}}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/developer_resources/DeveloperResourcesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var DeveloperResourcesRevealer = /*#__PURE__*/ function() {
    "use strict";
    function DeveloperResourcesRevealer() {
        _class_call_check(this, DeveloperResourcesRevealer);
    }
    _create_class(DeveloperResourcesRevealer, [
        {
            key: "reveal",
            value: function reveal(resourceInitiatorKey) {
                return _async_to_generator(function() {
                    var loader, resource, developerResourcesView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PageResourceLoader.PageResourceLoader.instance();
                                resource = loader.getResourcesLoaded().get(resourceInitiatorKey.key);
                                if (!resource) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().showView('developer-resources')
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().view('developer-resources').widget()
                                ];
                            case 2:
                                developerResourcesView = _state.sent();
                                return [
                                    2,
                                    developerResourcesView.select(resource)
                                ];
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return DeveloperResourcesRevealer;
}();
var DeveloperResourcesView = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(DeveloperResourcesView, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(DeveloperResourcesView);
    function DeveloperResourcesView() {
        _class_call_check(this, DeveloperResourcesView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "textFilterRegExp", void 0);
        _define_property(_assert_this_initialized(_this), "filterInput", void 0);
        _define_property(_assert_this_initialized(_this), "coverageResultsElement", void 0);
        _define_property(_assert_this_initialized(_this), "listView", void 0);
        _define_property(_assert_this_initialized(_this), "statusToolbarElement", void 0);
        _define_property(_assert_this_initialized(_this), "statusMessageElement", void 0);
        _define_property(_assert_this_initialized(_this), "loader", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.panel('developer-resources').track({
            resize: true
        })));
        var toolbarContainer = _this.contentElement.createChild('div', 'developer-resource-view-toolbar-container');
        toolbarContainer.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toolbar()));
        var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Toolbar('developer-resource-view-toolbar', toolbarContainer);
        _this.textFilterRegExp = null;
        _this.filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByText), 1);
        _this.filterInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , _this.onFilterChanged, _assert_this_initialized(_this));
        toolbar.appendToolbarItem(_this.filterInput);
        var loadThroughTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PageResourceLoader.getLoadThroughTargetSetting();
        var loadThroughTargetCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarSettingCheckbox(loadThroughTarget, i18nString(UIStrings.loadHttpsDeveloperResources), i18nString(UIStrings.enableLoadingThroughTarget));
        toolbar.appendToolbarItem(loadThroughTargetCheckbox);
        _this.coverageResultsElement = _this.contentElement.createChild('div', 'developer-resource-view-results');
        _this.listView = new _DeveloperResourcesListView_js__WEBPACK_IMPORTED_MODULE_5__.DeveloperResourcesListView(_this.isVisible.bind(_assert_this_initialized(_this)));
        _this.listView.show(_this.coverageResultsElement);
        _this.statusToolbarElement = _this.contentElement.createChild('div', 'developer-resource-view-toolbar-summary');
        _this.statusMessageElement = _this.statusToolbarElement.createChild('div', 'developer-resource-view-message');
        _this.loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PageResourceLoader.PageResourceLoader.instance();
        _this.loader.addEventListener("Update" /* SDK.PageResourceLoader.Events.Update */ , _this.update, _assert_this_initialized(_this));
        _this.update();
        return _this;
    }
    _create_class(DeveloperResourcesView, [
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    var selectedItem;
                    return _ts_generator(this, function(_state) {
                        selectedItem = _this.listView.selectedItem();
                        _this.listView.reset();
                        _this.listView.update(_this.loader.getScopedResourcesLoaded().values());
                        if (selectedItem) {
                            _this.listView.select(selectedItem);
                        }
                        _this.updateStats();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "select",
            value: function select(resource) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.lastUpdatePromise
                                ];
                            case 1:
                                _state.sent();
                                _this.listView.select(resource);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "selectedItem",
            value: function selectedItem() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.lastUpdatePromise
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    _this.listView.selectedItem()
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateStats",
            value: function updateStats() {
                var _this_loader_getScopedNumberOfResources = this.loader.getScopedNumberOfResources(), loading = _this_loader_getScopedNumberOfResources.loading, resources = _this_loader_getScopedNumberOfResources.resources;
                if (loading > 0) {
                    this.statusMessageElement.textContent = i18nString(UIStrings.resourcesCurrentlyLoading, {
                        PH1: resources,
                        PH2: loading
                    });
                } else {
                    this.statusMessageElement.textContent = i18nString(UIStrings.resources, {
                        n: resources
                    });
                }
            }
        },
        {
            key: "isVisible",
            value: function isVisible(item) {
                return !this.textFilterRegExp || this.textFilterRegExp.test(item.url) || this.textFilterRegExp.test(item.errorMessage || '');
            }
        },
        {
            key: "onFilterChanged",
            value: function onFilterChanged() {
                if (!this.listView) {
                    return;
                }
                var text = this.filterInput.value();
                this.textFilterRegExp = text ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.createPlainTextSearchRegex(text, 'i') : null;
                this.listView.updateFilterAndHighlight(this.textFilterRegExp);
                this.updateStats();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(DeveloperResourcesView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _developerResourcesView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
            }
        }
    ]);
    return DeveloperResourcesView;
} //# sourceMappingURL=DeveloperResourcesView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ThrottledWidget.ThrottledWidget);


}),
"./panels/developer_resources/developerResourcesView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  overflow: hidden;\n}\n\n.developer-resource-view-toolbar-container {\n  display: flex;\n  border-bottom: 1px solid var(--sys-color-divider);\n  flex: 0 0 auto;\n}\n\n.developer-resource-view-toolbar {\n  display: inline-block;\n  width: 100%;\n}\n\n.developer-resource-view-toolbar-summary {\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n  padding-left: 5px;\n  flex: 0 0 19px;\n  display: flex;\n  padding-right: 5px;\n}\n\n.developer-resource-view-toolbar-summary .developer-resource-view-message {\n  padding-top: 2px;\n  padding-left: 1ex;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.developer-resource-view-results {\n  overflow-y: auto;\n  display: flex;\n  flex: auto;\n}\n\n/*# sourceURL=developerResourcesView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);