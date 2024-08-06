"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_StorageItemsView_js"], {
"./panels/application/StorageItemsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StorageItemsView: function() { return StorageItemsView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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





var UIStrings = {
    /**
     *@description Text to refresh the page
     */ refresh: 'Refresh',
    /**
     *@description Text to clear everything
     */ clearAll: 'Clear All',
    /**
     *@description Tooltip text that appears when hovering over the largeicon delete button in the Service Worker Cache Views of the Application panel
     */ deleteSelected: 'Delete Selected',
    /**
     *@description Text that informs screen reader users that the storage table has been refreshed
     */ refreshedStatus: 'Table refreshed'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/StorageItemsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var StorageItemsView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(StorageItemsView, _UI_Widget_VBox);
    var _super = _create_super(StorageItemsView);
    function StorageItemsView(_title, _filterName) {
        _class_call_check(this, StorageItemsView);
        var _this;
        _this = _super.call(this, false);
        _define_property(_assert_this_initialized(_this), "filterRegex", void 0);
        _define_property(_assert_this_initialized(_this), "refreshButton", void 0);
        _define_property(_assert_this_initialized(_this), "mainToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "filterItem", void 0);
        _define_property(_assert_this_initialized(_this), "deleteAllButton", void 0);
        _define_property(_assert_this_initialized(_this), "deleteSelectedButton", void 0);
        _define_property(_assert_this_initialized(_this), "metadataView", new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.StorageMetadataView.StorageMetadataView());
        _this.filterRegex = null;
        _this.refreshButton = _this.addButton(i18nString(UIStrings.refresh), 'refresh', function() {
            _this.refreshItems();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.alert(i18nString(UIStrings.refreshedStatus));
        });
        _this.refreshButton.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.refresh').track({
            click: true
        })));
        _this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('top-resources-toolbar', _this.element);
        _this.mainToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.toolbar()));
        _this.filterItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarFilter(undefined, 0.4);
        _this.filterItem.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , _this.filterChanged, _assert_this_initialized(_this));
        var toolbarSeparator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarSeparator();
        _this.deleteAllButton = _this.addButton(i18nString(UIStrings.clearAll), 'clear', _this.deleteAllItems);
        _this.deleteSelectedButton = _this.addButton(i18nString(UIStrings.deleteSelected), 'cross', _this.deleteSelectedItem);
        _this.deleteSelectedButton.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.delete-selected').track({
            click: true
        })));
        _this.deleteAllButton.element.id = 'storage-items-delete-all';
        _this.deleteAllButton.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('storage-items-view.clear-all').track({
            click: true
        })));
        var toolbarItems = [
            _this.refreshButton,
            _this.filterItem,
            toolbarSeparator,
            _this.deleteAllButton,
            _this.deleteSelectedButton
        ];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = toolbarItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var item = _step.value;
                _this.mainToolbar.appendToolbarItem(item);
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
        _this.contentElement.appendChild(_this.metadataView);
        return _this;
    }
    _create_class(StorageItemsView, [
        {
            key: "setDeleteAllTitle",
            value: function setDeleteAllTitle(title) {
                this.deleteAllButton.setTitle(title);
            }
        },
        {
            key: "setDeleteAllGlyph",
            value: function setDeleteAllGlyph(glyph) {
                this.deleteAllButton.setGlyph(glyph);
            }
        },
        {
            key: "appendToolbarItem",
            value: function appendToolbarItem(item) {
                this.mainToolbar.appendToolbarItem(item);
            }
        },
        {
            key: "setStorageKey",
            value: function setStorageKey(storageKey) {
                this.metadataView.setStorageKey(storageKey);
            }
        },
        {
            key: "addButton",
            value: function addButton(label, glyph, callback) {
                var button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(label, glyph);
                button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , callback, this);
                return button;
            }
        },
        {
            key: "filterChanged",
            value: function filterChanged(param) {
                var text = param.data;
                this.filterRegex = text ? new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.escapeForRegExp(text), 'i') : null;
                this.refreshItems();
            }
        },
        {
            key: "filter",
            value: function filter(items, keyFunction) {
                if (this.filterRegex) {
                    var regExp = this.filterRegex;
                    return items.filter(function(item) {
                        return regExp.test(keyFunction(item));
                    });
                }
                return items;
            }
        },
        {
            key: "hasFilter",
            value: function hasFilter() {
                return Boolean(this.filterRegex);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.refreshItems();
            }
        },
        {
            key: "setCanDeleteAll",
            value: function setCanDeleteAll(enabled) {
                this.deleteAllButton.setEnabled(enabled);
            }
        },
        {
            key: "setCanDeleteSelected",
            value: function setCanDeleteSelected(enabled) {
                this.deleteSelectedButton.setEnabled(enabled);
            }
        },
        {
            key: "setCanRefresh",
            value: function setCanRefresh(enabled) {
                this.refreshButton.setEnabled(enabled);
            }
        },
        {
            key: "setCanFilter",
            value: function setCanFilter(enabled) {
                this.filterItem.setEnabled(enabled);
            }
        },
        {
            key: "deleteAllItems",
            value: function deleteAllItems() {}
        },
        {
            key: "deleteSelectedItem",
            value: function deleteSelectedItem() {}
        },
        {
            key: "refreshItems",
            value: function refreshItems() {}
        }
    ]);
    return StorageItemsView;
} //# sourceMappingURL=StorageItemsView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox);


}),
"./panels/application/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackForwardCacheView: function() { return /* reexport module object */ _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BounceTrackingMitigationsView: function() { return /* reexport module object */ _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__; },
  EndpointsGrid: function() { return /* reexport module object */ _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__; },
  FrameDetailsView: function() { return /* reexport module object */ _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__; },
  InterestGroupAccessGrid: function() { return /* reexport module object */ _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__; },
  OriginTrialTreeView: function() { return /* reexport module object */ _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__; },
  ProtocolHandlersView: function() { return /* reexport module object */ _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__; },
  ReportsGrid: function() { return /* reexport module object */ _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__; },
  ServiceWorkerRouterView: function() { return /* reexport module object */ _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__; },
  SharedStorageAccessGrid: function() { return /* reexport module object */ _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__; },
  SharedStorageMetadataView: function() { return /* reexport module object */ _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__; },
  StackTrace: function() { return /* reexport module object */ _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__; },
  StorageMetadataView: function() { return /* reexport module object */ _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__; },
  TrustTokensView: function() { return /* reexport module object */ _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__; }
});
/* harmony import */var _BackForwardCacheView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackForwardCacheView.js */ "./panels/application/components/BackForwardCacheView.js");
/* harmony import */var _BounceTrackingMitigationsView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BounceTrackingMitigationsView.js */ "./panels/application/components/BounceTrackingMitigationsView.js");
/* harmony import */var _EndpointsGrid_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EndpointsGrid.js */ "./panels/application/components/EndpointsGrid.js");
/* harmony import */var _FrameDetailsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FrameDetailsView.js */ "./panels/application/components/FrameDetailsView.js");
/* harmony import */var _InterestGroupAccessGrid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InterestGroupAccessGrid.js */ "./panels/application/components/InterestGroupAccessGrid.js");
/* harmony import */var _OriginTrialTreeView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OriginTrialTreeView.js */ "./panels/application/components/OriginTrialTreeView.js");
/* harmony import */var _ProtocolHandlersView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProtocolHandlersView.js */ "./panels/application/components/ProtocolHandlersView.js");
/* harmony import */var _ReportsGrid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ReportsGrid.js */ "./panels/application/components/ReportsGrid.js");
/* harmony import */var _ServiceWorkerRouterView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerRouterView.js */ "./panels/application/components/ServiceWorkerRouterView.js");
/* harmony import */var _SharedStorageAccessGrid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SharedStorageAccessGrid.js */ "./panels/application/components/SharedStorageAccessGrid.js");
/* harmony import */var _SharedStorageMetadataView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SharedStorageMetadataView.js */ "./panels/application/components/SharedStorageMetadataView.js");
/* harmony import */var _StackTrace_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./StackTrace.js */ "./panels/application/components/StackTrace.js");
/* harmony import */var _StorageMetadataView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./StorageMetadataView.js */ "./panels/application/components/StorageMetadataView.js");
/* harmony import */var _TrustTokensView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TrustTokensView.js */ "./panels/application/components/TrustTokensView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.














 //# sourceMappingURL=components.js.map


}),

}]);