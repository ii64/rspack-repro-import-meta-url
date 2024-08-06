"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_ServiceWorkerCacheTreeElement_js"], {
"./panels/application/ApplicationPanelTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ApplicationPanelTreeElement: function() { return ApplicationPanelTreeElement; },
  ExpandableApplicationPanelTreeElement: function() { return ExpandableApplicationPanelTreeElement; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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


var ApplicationPanelTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ApplicationPanelTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ApplicationPanelTreeElement);
    function ApplicationPanelTreeElement(resourcesPanel, title, expandable, jslogContext) {
        _class_call_check(this, ApplicationPanelTreeElement);
        var _this;
        _this = _super.call(this, title, expandable, jslogContext);
        _define_property(_assert_this_initialized(_this), "resourcesPanel", void 0);
        _this.resourcesPanel = resourcesPanel;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.setLabel(_this.listItemElement, title);
        _this.listItemElement.tabIndex = -1;
        return _this;
    }
    _create_class(ApplicationPanelTreeElement, [
        {
            key: "deselect",
            value: function deselect() {
                _get(_get_prototype_of(ApplicationPanelTreeElement.prototype), "deselect", this).call(this);
                this.listItemElement.tabIndex = -1;
            }
        },
        {
            key: "itemURL",
            get: function get() {
                throw new Error('Unimplemented Method');
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                if (!selectedByUser) {
                    return false;
                }
                var path = [];
                for(var el = this; el; el = el.parent){
                    var url = _instanceof(el, ApplicationPanelTreeElement) && el.itemURL;
                    if (!url) {
                        break;
                    }
                    path.push(url);
                }
                this.resourcesPanel.setLastSelectedItemPath(path);
                return false;
            }
        },
        {
            key: "showView",
            value: function showView(view) {
                this.resourcesPanel.showView(view);
            }
        }
    ]);
    return ApplicationPanelTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeElement);
var ExpandableApplicationPanelTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(ExpandableApplicationPanelTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(ExpandableApplicationPanelTreeElement);
    function ExpandableApplicationPanelTreeElement(resourcesPanel, categoryName, settingsKey) {
        var settingsDefault = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        _class_call_check(this, ExpandableApplicationPanelTreeElement);
        var _this;
        _this = _super.call(this, resourcesPanel, categoryName, false, settingsKey);
        _define_property(_assert_this_initialized(_this), "expandedSetting", void 0);
        _define_property(_assert_this_initialized(_this), "categoryName", void 0);
        _define_property(_assert_this_initialized(_this), "categoryLink", void 0);
        _this.expandedSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-' + settingsKey + '-expanded', settingsDefault);
        _this.categoryName = categoryName;
        _this.categoryLink = null;
        return _this;
    }
    _create_class(ExpandableApplicationPanelTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'category://' + this.categoryName;
            }
        },
        {
            key: "setLink",
            value: function setLink(link) {
                this.categoryLink = link;
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(ExpandableApplicationPanelTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                this.resourcesPanel.showCategoryView(this.categoryName, this.categoryLink);
                return false;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(ExpandableApplicationPanelTreeElement.prototype), "onattach", this).call(this);
                if (this.expandedSetting.get()) {
                    this.expand();
                }
            }
        },
        {
            key: "onexpand",
            value: function onexpand() {
                this.expandedSetting.set(true);
            }
        },
        {
            key: "oncollapse",
            value: function oncollapse() {
                this.expandedSetting.set(false);
            }
        }
    ]);
    return ExpandableApplicationPanelTreeElement;
} //# sourceMappingURL=ApplicationPanelTreeElement.js.map
(ApplicationPanelTreeElement);


}),
"./panels/application/ServiceWorkerCacheTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SWCacheTreeElement: function() { return SWCacheTreeElement; },
  ServiceWorkerCacheTreeElement: function() { return ServiceWorkerCacheTreeElement; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ServiceWorkerCacheViews.js */ "./panels/application/ServiceWorkerCacheViews.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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







var UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ cacheStorage: 'Cache storage',
    /**
     *@description A context menu item in the Application Panel Sidebar of the Application panel
     */ refreshCaches: 'Refresh Caches',
    /**
     *@description Text to delete something
     */ delete: 'Delete'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/ServiceWorkerCacheTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ServiceWorkerCacheTreeElement = /*#__PURE__*/ function(ExpandableApplicationPanelTreeElement) {
    "use strict";
    _inherits(ServiceWorkerCacheTreeElement, ExpandableApplicationPanelTreeElement);
    var _super = _create_super(ServiceWorkerCacheTreeElement);
    function ServiceWorkerCacheTreeElement(resourcesPanel, storageBucket) {
        _class_call_check(this, ServiceWorkerCacheTreeElement);
        var _this;
        _this = _super.call(this, resourcesPanel, i18nString(UIStrings.cacheStorage), 'cache-storage');
        _define_property(_assert_this_initialized(_this), "swCacheModels", void 0);
        _define_property(_assert_this_initialized(_this), "swCacheTreeElements", void 0);
        _define_property(_assert_this_initialized(_this), "storageBucket", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create('database');
        _this.setLink('https://developer.chrome.com/docs/devtools/storage/cache/?utm_source=devtools');
        _this.setLeadingIcons([
            icon
        ]);
        _this.swCacheModels = new Set();
        _this.swCacheTreeElements = new Set();
        _this.storageBucket = storageBucket;
        return _this;
    }
    _create_class(ServiceWorkerCacheTreeElement, [
        {
            key: "initialize",
            value: function initialize() {
                var _this = this;
                this.swCacheModels.clear();
                this.swCacheTreeElements.clear();
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerCacheModel.ServiceWorkerCacheModel, {
                    modelAdded: function(model) {
                        return _this.serviceWorkerCacheModelAdded(model);
                    },
                    modelRemoved: function(model) {
                        return _this.serviceWorkerCacheModelRemoved(model);
                    }
                });
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(ServiceWorkerCacheTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.refreshCaches), this.refreshCaches.bind(this), {
                    jslogContext: 'refresh-caches'
                });
                void contextMenu.show();
            }
        },
        {
            key: "refreshCaches",
            value: function refreshCaches() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.swCacheModels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var swCacheModel = _step.value;
                        swCacheModel.refreshCacheNames();
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
            key: "serviceWorkerCacheModelAdded",
            value: function serviceWorkerCacheModelAdded(model) {
                model.enable();
                this.swCacheModels.add(model);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = model.caches()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cache = _step.value;
                        this.addCache(model, cache);
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
                model.addEventListener("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */ , this.cacheAdded, this);
                model.addEventListener("CacheRemoved" /* SDK.ServiceWorkerCacheModel.Events.CacheRemoved */ , this.cacheRemoved, this);
            }
        },
        {
            key: "serviceWorkerCacheModelRemoved",
            value: function serviceWorkerCacheModelRemoved(model) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = model.caches()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cache = _step.value;
                        this.removeCache(model, cache);
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
                model.removeEventListener("CacheAdded" /* SDK.ServiceWorkerCacheModel.Events.CacheAdded */ , this.cacheAdded, this);
                model.removeEventListener("CacheRemoved" /* SDK.ServiceWorkerCacheModel.Events.CacheRemoved */ , this.cacheRemoved, this);
                this.swCacheModels.delete(model);
            }
        },
        {
            key: "cacheAdded",
            value: function cacheAdded(event) {
                var _event_data = event.data, model = _event_data.model, cache = _event_data.cache;
                this.addCache(model, cache);
            }
        },
        {
            key: "cacheInTree",
            value: function cacheInTree(cache) {
                if (this.storageBucket) {
                    return cache.inBucket(this.storageBucket);
                }
                return true;
            }
        },
        {
            key: "addCache",
            value: function addCache(model, cache) {
                if (this.cacheInTree(cache)) {
                    var swCacheTreeElement = new SWCacheTreeElement(this.resourcesPanel, model, cache, this.storageBucket === undefined);
                    this.swCacheTreeElements.add(swCacheTreeElement);
                    this.appendChild(swCacheTreeElement);
                }
            }
        },
        {
            key: "cacheRemoved",
            value: function cacheRemoved(event) {
                var _event_data = event.data, model = _event_data.model, cache = _event_data.cache;
                if (this.cacheInTree(cache)) {
                    this.removeCache(model, cache);
                }
            }
        },
        {
            key: "removeCache",
            value: function removeCache(model, cache) {
                var swCacheTreeElement = this.cacheTreeElement(model, cache);
                if (!swCacheTreeElement) {
                    return;
                }
                this.removeChild(swCacheTreeElement);
                this.swCacheTreeElements.delete(swCacheTreeElement);
                this.setExpandable(this.childCount() > 0);
            }
        },
        {
            key: "cacheTreeElement",
            value: function cacheTreeElement(model, cache) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.swCacheTreeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var cacheTreeElement = _step.value;
                        if (cacheTreeElement.hasModelAndCache(model, cache)) {
                            return cacheTreeElement;
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
                return null;
            }
        }
    ]);
    return ServiceWorkerCacheTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ExpandableApplicationPanelTreeElement);
var SWCacheTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(SWCacheTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(SWCacheTreeElement);
    function SWCacheTreeElement(resourcesPanel, model, cache, appendStorageKey) {
        _class_call_check(this, SWCacheTreeElement);
        var _this;
        var cacheName;
        if (appendStorageKey) {
            cacheName = cache.cacheName + ' - ' + cache.storageKey;
        } else {
            cacheName = cache.cacheName;
        }
        _this = _super.call(this, resourcesPanel, cacheName, false, 'cache-storage-instance');
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "cache", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.model = model;
        _this.cache = cache;
        _this.view = null;
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create('table');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(SWCacheTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                // I don't think this will work at all.
                return 'cache://' + this.cache.cacheId;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(SWCacheTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.delete), this.clearCache.bind(this), {
                    jslogContext: 'delete'
                });
                void contextMenu.show();
            }
        },
        {
            key: "clearCache",
            value: function clearCache() {
                void this.model.deleteCache(this.cache);
            }
        },
        {
            key: "update",
            value: function update(cache) {
                this.cache = cache;
                if (this.view) {
                    this.view.update(cache);
                }
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(SWCacheTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = new _ServiceWorkerCacheViews_js__WEBPACK_IMPORTED_MODULE_6__.ServiceWorkerCacheView(this.model, this.cache);
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('service-worker-cache');
                return false;
            }
        },
        {
            key: "hasModelAndCache",
            value: function hasModelAndCache(model, cache) {
                return this.cache.equals(cache) && this.model === model;
            }
        }
    ]);
    return SWCacheTreeElement;
} //# sourceMappingURL=ServiceWorkerCacheTreeElement.js.map
(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement);


}),

}]);