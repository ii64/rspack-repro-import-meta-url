"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_AdvancedApp_js"], {
"./panels/emulation/AdvancedApp.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdvancedApp: function() { return AdvancedApp; },
  AdvancedAppProvider: function() { return AdvancedAppProvider; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeviceModeWrapper.js */ "./panels/emulation/DeviceModeWrapper.js");
/* harmony import */var _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InspectedPagePlaceholder.js */ "./panels/emulation/InspectedPagePlaceholder.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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





var appInstance;
var AdvancedApp = /*#__PURE__*/ function() {
    "use strict";
    function AdvancedApp() {
        _class_call_check(this, AdvancedApp);
        _define_property(this, "rootSplitWidget", void 0);
        _define_property(this, "deviceModeView", void 0);
        _define_property(this, "inspectedPagePlaceholder", void 0);
        _define_property(this, "toolboxWindow", void 0);
        _define_property(this, "toolboxRootView", void 0);
        _define_property(this, "changingDockSide", void 0);
        _define_property(this, "toolboxDocument", void 0);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener("BeforeDockSideChanged" /* UI.DockController.Events.BeforeDockSideChanged */ , this.openToolboxWindow, this);
    }
    _create_class(AdvancedApp, [
        {
            key: "presentUI",
            value: function presentUI(document) {
                var rootView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.RootView.RootView();
                this.rootSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.SplitWidget.SplitWidget(false, true, 'inspector-view.split-view-state', 555, 300, true);
                this.rootSplitWidget.show(rootView.element);
                this.rootSplitWidget.setSidebarWidget(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance());
                this.rootSplitWidget.setDefaultFocusedChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().setOwnerSplit(this.rootSplitWidget);
                this.inspectedPagePlaceholder = _InspectedPagePlaceholder_js__WEBPACK_IMPORTED_MODULE_4__.InspectedPagePlaceholder.instance();
                this.inspectedPagePlaceholder.addEventListener("Update" /* Events.Update */ , this.onSetInspectedPageBounds.bind(this), this);
                this.deviceModeView = _DeviceModeWrapper_js__WEBPACK_IMPORTED_MODULE_3__.DeviceModeWrapper.instance({
                    inspectedPagePlaceholder: this.inspectedPagePlaceholder,
                    forceNew: false
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener("BeforeDockSideChanged" /* UI.DockController.Events.BeforeDockSideChanged */ , this.onBeforeDockSideChange, this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener("DockSideChanged" /* UI.DockController.Events.DockSideChanged */ , this.onDockSideChange, this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().addEventListener("AfterDockSideChanged" /* UI.DockController.Events.AfterDockSideChanged */ , this.onAfterDockSideChange, this);
                this.onDockSideChange();
                console.timeStamp('AdvancedApp.attachToBody');
                rootView.attachToDocument(document);
                rootView.focus();
                this.inspectedPagePlaceholder.update();
            }
        },
        {
            key: "openToolboxWindow",
            value: function openToolboxWindow(event) {
                if (event.data.to !== "undocked" /* UI.DockController.DockState.UNDOCKED */ ) {
                    return;
                }
                if (this.toolboxWindow) {
                    return;
                }
                var url = window.location.href.replace('devtools_app.html', 'device_mode_emulation_frame.html');
                this.toolboxWindow = window.open(url, undefined);
            }
        },
        {
            key: "deviceModeEmulationFrameLoaded",
            value: function deviceModeEmulationFrameLoaded(toolboxDocument) {
                _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_2__.ThemeSupport.instance().addDocumentToTheme(toolboxDocument);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.initializeUIUtils(toolboxDocument);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.addPlatformClass(toolboxDocument.documentElement);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.installComponentRootStyles(toolboxDocument.body);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ContextMenu.ContextMenu.installHandler(toolboxDocument);
                this.toolboxRootView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.RootView.RootView();
                this.toolboxRootView.attachToDocument(toolboxDocument);
                this.toolboxDocument = toolboxDocument;
                this.updateDeviceModeView();
            }
        },
        {
            key: "updateDeviceModeView",
            value: function updateDeviceModeView() {
                if (this.isDocked()) {
                    this.rootSplitWidget.setMainWidget(this.deviceModeView);
                } else if (this.toolboxRootView) {
                    this.deviceModeView.show(this.toolboxRootView.element);
                }
            }
        },
        {
            key: "onBeforeDockSideChange",
            value: function onBeforeDockSideChange(event) {
                if (event.data.to === "undocked" /* UI.DockController.DockState.UNDOCKED */  && this.toolboxRootView) {
                    // Hide inspectorView and force layout to mimic the undocked state.
                    this.rootSplitWidget.hideSidebar();
                    this.inspectedPagePlaceholder.update();
                }
                this.changingDockSide = true;
            }
        },
        {
            key: "onDockSideChange",
            value: function onDockSideChange(event) {
                this.updateDeviceModeView();
                var toDockSide = event ? event.data.to : _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().dockSide();
                if (toDockSide === undefined) {
                    throw new Error('Got onDockSideChange event with unexpected undefined for dockSide()');
                }
                if (toDockSide === "undocked" /* UI.DockController.DockState.UNDOCKED */ ) {
                    this.updateForUndocked();
                } else if (this.toolboxRootView && event && event.data.from === "undocked" /* UI.DockController.DockState.UNDOCKED */ ) {
                    // Don't update yet for smooth transition.
                    this.rootSplitWidget.hideSidebar();
                } else {
                    this.updateForDocked(toDockSide);
                }
            }
        },
        {
            key: "onAfterDockSideChange",
            value: function onAfterDockSideChange(event) {
                // We may get here on the first dock side change while loading without BeforeDockSideChange.
                if (!this.changingDockSide) {
                    return;
                }
                if (event.data.from && event.data.from === "undocked" /* UI.DockController.DockState.UNDOCKED */ ) {
                    this.updateForDocked(event.data.to);
                }
                this.changingDockSide = false;
                this.inspectedPagePlaceholder.update();
            }
        },
        {
            key: "updateForDocked",
            value: function updateForDocked(dockSide) {
                var resizerElement = this.rootSplitWidget.resizerElement();
                resizerElement.style.transform = dockSide === "right" /* UI.DockController.DockState.RIGHT */  ? 'translateX(2px)' : dockSide === "left" /* UI.DockController.DockState.LEFT */  ? 'translateX(-2px)' : '';
                this.rootSplitWidget.setVertical(dockSide === "right" /* UI.DockController.DockState.RIGHT */  || dockSide === "left" /* UI.DockController.DockState.LEFT */ );
                this.rootSplitWidget.setSecondIsSidebar(dockSide === "right" /* UI.DockController.DockState.RIGHT */  || dockSide === "bottom" /* UI.DockController.DockState.BOTTOM */ );
                this.rootSplitWidget.toggleResizer(this.rootSplitWidget.resizerElement(), true);
                this.rootSplitWidget.toggleResizer(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().topResizerElement(), dockSide === "bottom" /* UI.DockController.DockState.BOTTOM */ );
                this.rootSplitWidget.showBoth();
            }
        },
        {
            key: "updateForUndocked",
            value: function updateForUndocked() {
                this.rootSplitWidget.toggleResizer(this.rootSplitWidget.resizerElement(), false);
                this.rootSplitWidget.toggleResizer(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.InspectorView.InspectorView.instance().topResizerElement(), false);
                this.rootSplitWidget.hideMain();
            }
        },
        {
            key: "isDocked",
            value: function isDocked() {
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.DockController.DockController.instance().dockSide() !== "undocked" /* UI.DockController.DockState.UNDOCKED */ ;
            }
        },
        {
            key: "onSetInspectedPageBounds",
            value: function onSetInspectedPageBounds(event) {
                if (this.changingDockSide) {
                    return;
                }
                var window1 = this.inspectedPagePlaceholder.element.window();
                if (!window1.innerWidth || !window1.innerHeight) {
                    return;
                }
                if (!this.inspectedPagePlaceholder.isShowing()) {
                    return;
                }
                var bounds = event.data;
                console.timeStamp('AdvancedApp.setInspectedPageBounds');
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setInspectedPageBounds(bounds);
            }
        }
    ], [
        {
            key: "instance",
            value: /**
     * Note: it's used by toolbox.ts without real type checks.
     */ function instance() {
                if (!appInstance) {
                    appInstance = new AdvancedApp();
                }
                return appInstance;
            }
        }
    ]);
    return AdvancedApp;
}();
// Export required for usage in toolbox.ts
// @ts-ignore Exported for Tests.js
globalThis.Emulation = globalThis.Emulation || {};
// @ts-ignore Exported for Tests.js
globalThis.Emulation.AdvancedApp = AdvancedApp;
var advancedAppProviderInstance;
var AdvancedAppProvider = /*#__PURE__*/ function() {
    "use strict";
    function AdvancedAppProvider() {
        _class_call_check(this, AdvancedAppProvider);
    }
    _create_class(AdvancedAppProvider, [
        {
            key: "createApp",
            value: function createApp() {
                return AdvancedApp.instance();
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
                if (!advancedAppProviderInstance || forceNew) {
                    advancedAppProviderInstance = new AdvancedAppProvider();
                }
                return advancedAppProviderInstance;
            }
        }
    ]);
    return AdvancedAppProvider;
} //# sourceMappingURL=AdvancedApp.js.map
();


}),
"./panels/emulation/InspectedPagePlaceholder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InspectedPagePlaceholder: function() { return InspectedPagePlaceholder; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _inspectedPagePlaceholder_css_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspectedPagePlaceholder.css.legacy.js */ "./panels/emulation/inspectedPagePlaceholder.css.legacy.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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



var inspectedPagePlaceholderInstance;
var InspectedPagePlaceholder = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(InspectedPagePlaceholder, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(InspectedPagePlaceholder);
    function InspectedPagePlaceholder() {
        _class_call_check(this, InspectedPagePlaceholder);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "updateId", void 0);
        _this.registerRequiredCSS(_inspectedPagePlaceholder_css_legacy_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().addEventListener("ZoomChanged" /* UI.ZoomManager.Events.ZoomChanged */ , _this.onResize, _assert_this_initialized(_this));
        _this.restoreMinimumSize();
        return _this;
    }
    _create_class(InspectedPagePlaceholder, [
        {
            key: "onResize",
            value: function onResize() {
                if (this.updateId) {
                    this.element.window().cancelAnimationFrame(this.updateId);
                }
                this.updateId = this.element.window().requestAnimationFrame(this.update.bind(this, false));
            }
        },
        {
            key: "restoreMinimumSize",
            value: function restoreMinimumSize() {
                this.setMinimumSize(150, 150);
            }
        },
        {
            key: "clearMinimumSize",
            value: function clearMinimumSize() {
                this.setMinimumSize(1, 1);
            }
        },
        {
            key: "dipPageRect",
            value: function dipPageRect() {
                var zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().zoomFactor();
                var rect = this.element.getBoundingClientRect();
                var bodyRect = this.element.ownerDocument.body.getBoundingClientRect();
                var left = Math.max(rect.left * zoomFactor, bodyRect.left * zoomFactor);
                var top = Math.max(rect.top * zoomFactor, bodyRect.top * zoomFactor);
                var bottom = Math.min(rect.bottom * zoomFactor, bodyRect.bottom * zoomFactor);
                var right = Math.min(rect.right * zoomFactor, bodyRect.right * zoomFactor);
                return {
                    x: left,
                    y: top,
                    width: right - left,
                    height: bottom - top
                };
            }
        },
        {
            key: "update",
            value: function update(force) {
                delete this.updateId;
                var rect = this.dipPageRect();
                var bounds = {
                    x: Math.round(rect.x),
                    y: Math.round(rect.y),
                    height: Math.max(1, Math.round(rect.height)),
                    width: Math.max(1, Math.round(rect.width))
                };
                if (force) {
                    // Short term fix for Lighthouse interop.
                    --bounds.height;
                    this.dispatchEventToListeners("Update" /* Events.Update */ , bounds);
                    ++bounds.height;
                }
                this.dispatchEventToListeners("Update" /* Events.Update */ , bounds);
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
                if (!inspectedPagePlaceholderInstance || forceNew) {
                    inspectedPagePlaceholderInstance = new InspectedPagePlaceholder();
                }
                return inspectedPagePlaceholderInstance;
            }
        }
    ]);
    return InspectedPagePlaceholder;
} //# sourceMappingURL=InspectedPagePlaceholder.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget));


}),
"./panels/emulation/inspectedPagePlaceholder.css.legacy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    cssContent: "/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n/*# sourceURL=inspectedPagePlaceholder.css */\n"
});


}),

}]);