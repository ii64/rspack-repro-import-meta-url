"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_EventListenersWidget_js"], {
"./panels/elements/EventListenersWidget.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  DispatchFilterBy: function() { return DispatchFilterBy; },
  EventListenersWidget: function() { return EventListenersWidget; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event_listeners/event_listeners.js */ "./panels/event_listeners/event_listeners.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
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
     *@description Title of show framework listeners setting in event listeners widget of the elements panel
     */ frameworkListeners: '`Framework` listeners',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Event Listeners Widget of the Elements panel
     */ showListenersOnTheAncestors: 'Show listeners on the ancestors',
    /**
     *@description Alternative title text of a setting in Event Listeners Widget of the Elements panel
     */ ancestors: 'Ancestors',
    /**
     *@description Title of dispatch filter in event listeners widget of the elements panel
     */ eventListenersCategory: 'Event listeners category',
    /**
     *@description Text for everything
     */ all: 'All',
    /**
     *@description Text in Event Listeners Widget of the Elements panel
     */ passive: 'Passive',
    /**
     *@description Text in Event Listeners Widget of the Elements panel
     */ blocking: 'Blocking',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Event Listeners Widget of the Elements panel
     */ resolveEventListenersBoundWith: 'Resolve event listeners bound with framework'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/EventListenersWidget.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var eventListenersWidgetInstance;
var EventListenersWidget = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(EventListenersWidget, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(EventListenersWidget);
    function EventListenersWidget() {
        _class_call_check(this, EventListenersWidget);
        var _this;
        var addDispatchFilterOption = function addDispatchFilterOption(name, value) {
            var option = dispatchFilter.createOption(name, value);
            if (value === this.dispatchFilterBySetting.get()) {
                dispatchFilter.select(option);
            }
        };
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "toolbarItemsInternal", void 0);
        _define_property(_assert_this_initialized(_this), "showForAncestorsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "dispatchFilterBySetting", void 0);
        _define_property(_assert_this_initialized(_this), "showFrameworkListenersSetting", void 0);
        _define_property(_assert_this_initialized(_this), "eventListenersView", void 0);
        _define_property(_assert_this_initialized(_this), "lastRequestedNode", void 0);
        _this.toolbarItemsInternal = [];
        _this.showForAncestorsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-event-listeners-for-ancestors');
        _this.showForAncestorsSetting.addChangeListener(_this.update.bind(_assert_this_initialized(_this)));
        _this.dispatchFilterBySetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('event-listener-dispatch-filter-type', DispatchFilterBy.All);
        _this.dispatchFilterBySetting.addChangeListener(_this.update.bind(_assert_this_initialized(_this)));
        _this.showFrameworkListenersSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-frameowkr-listeners', true);
        _this.showFrameworkListenersSetting.setTitle(i18nString(UIStrings.frameworkListeners));
        _this.showFrameworkListenersSetting.addChangeListener(_this.showFrameworkListenersChanged.bind(_assert_this_initialized(_this)));
        _this.eventListenersView = new _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_5__.EventListenersView.EventListenersView(_this.update.bind(_assert_this_initialized(_this)));
        _this.eventListenersView.show(_this.element);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('elements.event-listeners').track({
            resize: true
        })));
        _this.toolbarItemsInternal.push(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Toolbar.createActionButtonForId('elements.refresh-event-listeners'));
        _this.toolbarItemsInternal.push(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarSettingCheckbox(_this.showForAncestorsSetting, i18nString(UIStrings.showListenersOnTheAncestors), i18nString(UIStrings.ancestors)));
        var dispatchFilter = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarComboBox(_this.onDispatchFilterTypeChanged.bind(_assert_this_initialized(_this)), i18nString(UIStrings.eventListenersCategory));
        dispatchFilter.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.filterDropdown().track({
            change: true
        })));
        addDispatchFilterOption.call(_assert_this_initialized(_this), i18nString(UIStrings.all), DispatchFilterBy.All);
        addDispatchFilterOption.call(_assert_this_initialized(_this), i18nString(UIStrings.passive), DispatchFilterBy.Passive);
        addDispatchFilterOption.call(_assert_this_initialized(_this), i18nString(UIStrings.blocking), DispatchFilterBy.Blocking);
        dispatchFilter.setMaxWidth(200);
        _this.toolbarItemsInternal.push(dispatchFilter);
        _this.toolbarItemsInternal.push(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarSettingCheckbox(_this.showFrameworkListenersSetting, i18nString(UIStrings.resolveEventListenersBoundWith)));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode, _this.update, _assert_this_initialized(_this));
        _this.update();
        return _this;
    }
    _create_class(EventListenersWidget, [
        {
            key: "doUpdate",
            value: function doUpdate() {
                if (this.lastRequestedNode) {
                    this.lastRequestedNode.domModel().runtimeModel().releaseObjectGroup(objectGroupName);
                    delete this.lastRequestedNode;
                }
                var node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
                if (!node) {
                    this.eventListenersView.reset();
                    this.eventListenersView.addEmptyHolderIfNeeded();
                    return Promise.resolve();
                }
                this.lastRequestedNode = node;
                var selectedNodeOnly = !this.showForAncestorsSetting.get();
                var promises = [];
                promises.push(node.resolveToObject(objectGroupName));
                if (!selectedNodeOnly) {
                    var currentNode = node.parentNode;
                    while(currentNode){
                        promises.push(currentNode.resolveToObject(objectGroupName));
                        currentNode = currentNode.parentNode;
                    }
                    promises.push(this.windowObjectInNodeContext(node));
                }
                return Promise.all(promises).then(this.eventListenersView.addObjects.bind(this.eventListenersView)).then(this.showFrameworkListenersChanged.bind(this));
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(EventListenersWidget, this);
                _get(_get_prototype_of(EventListenersWidget.prototype), "wasShown", this).call(this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _get(_get_prototype_of(EventListenersWidget.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(EventListenersWidget, null);
            }
        },
        {
            key: "toolbarItems",
            value: function toolbarItems() {
                return this.toolbarItemsInternal;
            }
        },
        {
            key: "onDispatchFilterTypeChanged",
            value: function onDispatchFilterTypeChanged(event) {
                var filter = event.target;
                this.dispatchFilterBySetting.set(filter.value);
            }
        },
        {
            key: "showFrameworkListenersChanged",
            value: function showFrameworkListenersChanged() {
                var dispatchFilter = this.dispatchFilterBySetting.get();
                var showPassive = dispatchFilter === DispatchFilterBy.All || dispatchFilter === DispatchFilterBy.Passive;
                var showBlocking = dispatchFilter === DispatchFilterBy.All || dispatchFilter === DispatchFilterBy.Blocking;
                this.eventListenersView.showFrameworkListeners(this.showFrameworkListenersSetting.get(), showPassive, showBlocking);
            }
        },
        {
            key: "windowObjectInNodeContext",
            value: function windowObjectInNodeContext(node) {
                var executionContexts = node.domModel().runtimeModel().executionContexts();
                var context = executionContexts[0];
                if (node.frameId()) {
                    for(var i = 0; i < executionContexts.length; ++i){
                        var executionContext = executionContexts[i];
                        if (executionContext.frameId === node.frameId() && executionContext.isDefault) {
                            context = executionContext;
                        }
                    }
                }
                return context.evaluate({
                    expression: 'self',
                    objectGroup: objectGroupName,
                    includeCommandLineAPI: false,
                    silent: true,
                    returnByValue: false,
                    generatePreview: false
                }, /* userGesture */ false, /* awaitPromise */ false).then(function(result) {
                    if ('object' in result) {
                        return result.object;
                    }
                    return null;
                });
            }
        },
        {
            key: "eventListenersArrivedForTest",
            value: function eventListenersArrivedForTest() {}
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!eventListenersWidgetInstance || forceNew) {
                    eventListenersWidgetInstance = new EventListenersWidget();
                }
                return eventListenersWidgetInstance;
            }
        }
    ]);
    return EventListenersWidget;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ThrottledWidget.ThrottledWidget);
var DispatchFilterBy = {
    All: 'All',
    Blocking: 'Blocking',
    Passive: 'Passive'
};
var objectGroupName = 'event-listeners-panel';
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(_context, actionId) {
                switch(actionId){
                    case 'elements.refresh-event-listeners':
                        {
                            EventListenersWidget.instance().update();
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=EventListenersWidget.js.map
();


}),
"./panels/event_listeners/event_listeners.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventListenersUtils: function() { return /* reexport module object */ _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__; },
  EventListenersView: function() { return /* reexport module object */ _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListenersUtils.js */ "./panels/event_listeners/EventListenersUtils.js");
/* harmony import */var _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventListenersView.js */ "./panels/event_listeners/EventListenersView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=event_listeners.js.map


}),

}]);