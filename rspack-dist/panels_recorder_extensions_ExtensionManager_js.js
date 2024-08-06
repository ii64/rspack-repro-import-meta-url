"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_extensions_ExtensionManager_js"], {
"./panels/recorder/extensions/ExtensionManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExtensionManager: function() { return ExtensionManager; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/extensions/extensions.js */ "./models/extensions/extensions.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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


var instance = null;
var _views = /*#__PURE__*/ new WeakMap(), _handlePlugin = /*#__PURE__*/ new WeakMap(), _handleView = /*#__PURE__*/ new WeakMap();
var ExtensionManager = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(ExtensionManager, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(ExtensionManager);
    function ExtensionManager() {
        _class_call_check(this, ExtensionManager);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _views, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(_assert_this_initialized(_this), _handlePlugin, {
            writable: true,
            value: function() {
                _this.dispatchEventToListeners("extensionsUpdated" /* Events.ExtensionsUpdated */ , _this.extensions());
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleView, {
            writable: true,
            value: function(event) {
                var descriptor = event.data;
                if (!_class_private_field_get(_this, _views).has(descriptor.id)) {
                    _class_private_field_get(_this, _views).set(descriptor.id, new ExtensionIframe(descriptor));
                }
            }
        });
        _this.attach();
        return _this;
    }
    _create_class(ExtensionManager, [
        {
            key: "attach",
            value: function attach() {
                var pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
                pluginManager.addEventListener("pluginAdded" /* Extensions.RecorderPluginManager.Events.PluginAdded */ , _class_private_field_get(this, _handlePlugin));
                pluginManager.addEventListener("pluginRemoved" /* Extensions.RecorderPluginManager.Events.PluginRemoved */ , _class_private_field_get(this, _handlePlugin));
                pluginManager.addEventListener("viewRegistered" /* Extensions.RecorderPluginManager.Events.ViewRegistered */ , _class_private_field_get(this, _handleView));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = pluginManager.views()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var descriptor = _step.value;
                        _class_private_field_get(this, _handleView).call(this, {
                            data: descriptor
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
        },
        {
            key: "detach",
            value: function detach() {
                var pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
                pluginManager.removeEventListener("pluginAdded" /* Extensions.RecorderPluginManager.Events.PluginAdded */ , _class_private_field_get(this, _handlePlugin));
                pluginManager.removeEventListener("pluginRemoved" /* Extensions.RecorderPluginManager.Events.PluginRemoved */ , _class_private_field_get(this, _handlePlugin));
                pluginManager.removeEventListener("viewRegistered" /* Extensions.RecorderPluginManager.Events.ViewRegistered */ , _class_private_field_get(this, _handleView));
                _class_private_field_get(this, _views).clear();
            }
        },
        {
            key: "extensions",
            value: function extensions() {
                return _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance().plugins();
            }
        },
        {
            key: "getView",
            value: function getView(descriptorId) {
                var view = _class_private_field_get(this, _views).get(descriptorId);
                if (!view) {
                    throw new Error('View not found');
                }
                return view;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance1() {
                if (!instance) {
                    instance = new ExtensionManager();
                }
                return instance;
            }
        }
    ]);
    return ExtensionManager;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var _descriptor = /*#__PURE__*/ new WeakMap(), _iframe = /*#__PURE__*/ new WeakMap(), _isShowing = /*#__PURE__*/ new WeakMap(), _isLoaded = /*#__PURE__*/ new WeakMap(), _onIframeLoad = /*#__PURE__*/ new WeakMap();
var ExtensionIframe = /*#__PURE__*/ function() {
    "use strict";
    function ExtensionIframe(descriptor) {
        var _this = this;
        _class_call_check(this, ExtensionIframe);
        _class_private_field_init(this, _descriptor, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _iframe, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _isShowing, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _isLoaded, {
            writable: true,
            value: false
        });
        _class_private_field_init(this, _onIframeLoad, {
            writable: true,
            value: function() {
                _class_private_field_set(_this, _isLoaded, true);
                if (_class_private_field_get(_this, _isShowing)) {
                    _class_private_field_get(_this, _descriptor).onShown();
                }
            }
        });
        _class_private_field_set(this, _descriptor, descriptor);
        _class_private_field_set(this, _iframe, document.createElement('iframe'));
        _class_private_field_get(this, _iframe).src = descriptor.pagePath;
        _class_private_field_get(this, _iframe).onload = _class_private_field_get(this, _onIframeLoad);
    }
    _create_class(ExtensionIframe, [
        {
            key: "show",
            value: function show() {
                if (_class_private_field_get(this, _isShowing)) {
                    return;
                }
                _class_private_field_set(this, _isShowing, true);
                if (_class_private_field_get(this, _isLoaded)) {
                    _class_private_field_get(this, _descriptor).onShown();
                }
            }
        },
        {
            key: "hide",
            value: function hide() {
                if (!_class_private_field_get(this, _isShowing)) {
                    return;
                }
                _class_private_field_set(this, _isShowing, false);
                _class_private_field_set(this, _isLoaded, false);
                _class_private_field_get(this, _descriptor).onHidden();
            }
        },
        {
            key: "frame",
            value: function frame() {
                return _class_private_field_get(this, _iframe);
            }
        }
    ]);
    return ExtensionIframe;
} //# sourceMappingURL=ExtensionManager.js.map
();


}),

}]);