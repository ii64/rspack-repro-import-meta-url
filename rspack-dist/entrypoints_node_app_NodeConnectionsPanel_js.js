"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_node_app_NodeConnectionsPanel_js"], {
"./entrypoints/node_app/NodeConnectionsPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NodeConnectionsPanel: function() { return NodeConnectionsPanel; },
  NodeConnectionsView: function() { return NodeConnectionsView; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _nodeConnectionsPanel_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nodeConnectionsPanel.css.js */ "./entrypoints/node_app/nodeConnectionsPanel.css.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
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
     *@description Text in Node Connections Panel of the Sources panel when debugging a Node.js app
     */ nodejsDebuggingGuide: 'Node.js debugging guide',
    /**
     *@description Text in Node Connections Panel of the Sources panel when debugging a Node.js app
     *@example {Node.js debugging guide} PH1
     */ specifyNetworkEndpointAnd: 'Specify network endpoint and DevTools will connect to it automatically. Read {PH1} to learn more.',
    /**
     *@description Placeholder text content in Node Connections Panel of the Sources panel when debugging a Node.js app
     */ noConnectionsSpecified: 'No connections specified',
    /**
     *@description Text of add network target button in Node Connections Panel of the Sources panel when debugging a Node.js app
     */ addConnection: 'Add connection',
    /**
     *@description Text in Node Connections Panel of the Sources panel when debugging a Node.js app
     */ networkAddressEgLocalhost: 'Network address (e.g. localhost:9229)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('entrypoints/node_app/NodeConnectionsPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _config = /*#__PURE__*/ new WeakMap(), _networkDiscoveryView = /*#__PURE__*/ new WeakMap(), _devicesDiscoveryConfigChanged = /*#__PURE__*/ new WeakSet();
var NodeConnectionsPanel = /*#__PURE__*/ function(_UI_Panel_Panel) {
    "use strict";
    _inherits(NodeConnectionsPanel, _UI_Panel_Panel);
    var _super = _create_super(NodeConnectionsPanel);
    function NodeConnectionsPanel() {
        _class_call_check(this, NodeConnectionsPanel);
        var _this;
        _this = _super.call(this, 'node-connection');
        _class_private_method_init(_assert_this_initialized(_this), _devicesDiscoveryConfigChanged);
        _class_private_field_init(_assert_this_initialized(_this), _config, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _networkDiscoveryView, {
            writable: true,
            value: void 0
        });
        _this.contentElement.classList.add('node-panel');
        var container = _this.contentElement.createChild('div', 'node-panel-center');
        var image = container.createChild('img', 'node-panel-logo');
        image.src = 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg';
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.DevicesDiscoveryConfigChanged, _class_private_method_get(_assert_this_initialized(_this), _devicesDiscoveryConfigChanged, devicesDiscoveryConfigChanged), _assert_this_initialized(_this));
        _this.contentElement.tabIndex = 0;
        _this.setDefaultFocusedElement(_this.contentElement);
        // Trigger notification once.
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(false);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesUpdatesEnabled(true);
        _class_private_field_set(_assert_this_initialized(_this), _networkDiscoveryView, new NodeConnectionsView(function(config) {
            _class_private_field_get(_this, _config).networkDiscoveryConfig = config;
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.setDevicesDiscoveryConfig(_class_private_field_get(_assert_this_initialized(_this), _config));
        }));
        _class_private_field_get(_this, _networkDiscoveryView).show(container);
        return _this;
    }
    _create_class(NodeConnectionsPanel, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(NodeConnectionsPanel.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _nodeConnectionsPanel_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
            }
        }
    ]);
    return NodeConnectionsPanel;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Panel.Panel);
function devicesDiscoveryConfigChanged(param) {
    var config = param.data;
    _class_private_field_set(this, _config, config);
    _class_private_field_get(this, _networkDiscoveryView).discoveryConfigChanged(_class_private_field_get(this, _config).networkDiscoveryConfig);
}
var _callback = /*#__PURE__*/ new WeakMap(), _list = /*#__PURE__*/ new WeakMap(), _editor = /*#__PURE__*/ new WeakMap(), _networkDiscoveryConfig = /*#__PURE__*/ new WeakMap(), _update = /*#__PURE__*/ new WeakSet(), _addNetworkTargetButtonClicked = /*#__PURE__*/ new WeakSet(), _createEditor = /*#__PURE__*/ new WeakSet();
var NodeConnectionsView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(NodeConnectionsView, _UI_Widget_VBox);
    var _super = _create_super(NodeConnectionsView);
    function NodeConnectionsView(callback) {
        _class_call_check(this, NodeConnectionsView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _update);
        _class_private_method_init(_assert_this_initialized(_this), _addNetworkTargetButtonClicked);
        _class_private_method_init(_assert_this_initialized(_this), _createEditor);
        _class_private_field_init(_assert_this_initialized(_this), _callback, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _list, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _editor, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _networkDiscoveryConfig, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _callback, callback);
        _this.element.classList.add('network-discovery-view');
        var networkDiscoveryFooter = _this.element.createChild('div', 'network-discovery-footer');
        var documentationLink = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.XLink.XLink.create('https://nodejs.org/en/docs/inspector/', i18nString(UIStrings.nodejsDebuggingGuide), undefined, undefined, 'node-js-debugging');
        networkDiscoveryFooter.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.specifyNetworkEndpointAnd, {
            PH1: documentationLink
        }));
        _class_private_field_set(_assert_this_initialized(_this), _list, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.ListWidget(_assert_this_initialized(_this)));
        _class_private_field_get(_this, _list).element.classList.add('network-discovery-list');
        var placeholder = document.createElement('div');
        placeholder.classList.add('network-discovery-list-empty');
        placeholder.textContent = i18nString(UIStrings.noConnectionsSpecified);
        _class_private_field_get(_this, _list).setEmptyPlaceholder(placeholder);
        _class_private_field_get(_this, _list).show(_this.element);
        _class_private_field_set(_assert_this_initialized(_this), _editor, null);
        var addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextButton(i18nString(UIStrings.addConnection), _class_private_method_get(_this, _addNetworkTargetButtonClicked, addNetworkTargetButtonClicked).bind(_assert_this_initialized(_this)), {
            className: 'add-network-target-button',
            variant: "primary" /* Buttons.Button.Variant.PRIMARY */ 
        });
        _this.element.appendChild(addButton);
        _class_private_field_set(_assert_this_initialized(_this), _networkDiscoveryConfig, []);
        _this.element.classList.add('node-frontend');
        return _this;
    }
    _create_class(NodeConnectionsView, [
        {
            key: "discoveryConfigChanged",
            value: function discoveryConfigChanged(networkDiscoveryConfig) {
                _class_private_field_set(this, _networkDiscoveryConfig, []);
                _class_private_field_get(this, _list).clear();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = networkDiscoveryConfig[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var address = _step.value;
                        var item = {
                            address: address,
                            port: ''
                        };
                        _class_private_field_get(this, _networkDiscoveryConfig).push(item);
                        _class_private_field_get(this, _list).appendItem(item, true);
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
            key: "renderItem",
            value: function renderItem(rule, _editable) {
                var element = document.createElement('div');
                element.classList.add('network-discovery-list-item');
                element.createChild('div', 'network-discovery-value network-discovery-address').textContent = rule.address;
                return element;
            }
        },
        {
            key: "removeItemRequested",
            value: function removeItemRequested(rule, index) {
                _class_private_field_get(this, _networkDiscoveryConfig).splice(index, 1);
                _class_private_field_get(this, _list).removeItem(index);
                _class_private_method_get(this, _update, update).call(this);
            }
        },
        {
            key: "commitEdit",
            value: function commitEdit(rule, editor, isNew) {
                rule.address = editor.control('address').value.trim();
                if (isNew) {
                    _class_private_field_get(this, _networkDiscoveryConfig).push(rule);
                }
                _class_private_method_get(this, _update, update).call(this);
            }
        },
        {
            key: "beginEdit",
            value: function beginEdit(rule) {
                var editor = _class_private_method_get(this, _createEditor, createEditor).call(this);
                editor.control('address').value = rule.address;
                return editor;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(NodeConnectionsView.prototype), "wasShown", this).call(this);
                _class_private_field_get(this, _list).registerCSSFiles([
                    _nodeConnectionsPanel_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
            }
        }
    ]);
    return NodeConnectionsView;
} //# sourceMappingURL=NodeConnectionsPanel.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
function update() {
    var config = _class_private_field_get(this, _networkDiscoveryConfig).map(function(item) {
        return item.address;
    });
    _class_private_field_get(this, _callback).call(null, config);
}
function addNetworkTargetButtonClicked() {
    _class_private_field_get(this, _list).addNewItem(_class_private_field_get(this, _networkDiscoveryConfig).length, {
        address: '',
        port: ''
    });
}
function createEditor() {
    if (_class_private_field_get(this, _editor)) {
        return _class_private_field_get(this, _editor);
    }
    var editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListWidget.Editor();
    _class_private_field_set(this, _editor, editor);
    var content = editor.contentElement();
    var fields = content.createChild('div', 'network-discovery-edit-row');
    var input = editor.createInput('address', 'text', i18nString(UIStrings.networkAddressEgLocalhost), addressValidator);
    fields.createChild('div', 'network-discovery-value network-discovery-address').appendChild(input);
    return editor;
    function addressValidator(_rule, _index, input) {
        var match = input.value.trim().match(/^([a-zA-Z0-9\.\-_]+):(\d+)$/);
        if (!match) {
            return {
                valid: false,
                errorMessage: undefined
            };
        }
        var port = parseInt(match[2], 10);
        return {
            valid: port <= 65535,
            errorMessage: undefined
        };
    }
}


}),
"./entrypoints/node_app/nodeConnectionsPanel.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.add-network-target-button {\n  margin: 10px 25px;\n  align-self: center;\n}\n\n.network-discovery-list {\n  flex: none;\n  max-width: 600px;\n  max-height: 202px;\n  margin: 20px 0 5px;\n}\n\n.network-discovery-list-empty {\n  flex: auto;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.network-discovery-list-item {\n  padding: 3px 5px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  flex: auto 1 1;\n}\n\n.network-discovery-value {\n  flex: 3 1 0;\n}\n\n.list-item .network-discovery-value {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  user-select: none;\n  color: var(--sys-color-on-surface);\n  overflow: hidden;\n}\n\n.network-discovery-edit-row {\n  flex: none;\n  display: flex;\n  flex-direction: row;\n  margin: 6px 5px;\n  align-items: center;\n}\n\n.network-discovery-edit-row input {\n  width: 100%;\n  text-align: inherit;\n}\n\n.network-discovery-footer {\n  margin: 0;\n  overflow: hidden;\n  max-width: 500px;\n  padding: 3px;\n}\n\n.network-discovery-footer > * {\n  white-space: pre-wrap;\n}\n\n.node-panel {\n  align-items: center;\n  justify-content: flex-start;\n  overflow-y: auto;\n}\n\n.network-discovery-view {\n  min-width: 400px;\n  text-align: left;\n}\n\n:host-context(.node-frontend) .network-discovery-list-empty {\n  height: 40px;\n}\n\n:host-context(.node-frontend) .network-discovery-list-item {\n  padding: 3px 15px;\n  height: 40px;\n}\n\n.node-panel-center {\n  max-width: 600px;\n  padding-top: 50px;\n  text-align: center;\n}\n\n.node-panel-logo {\n  width: 400px;\n  margin-bottom: 50px;\n}\n\n:host-context(.node-frontend) .network-discovery-edit-row input {\n  height: 30px;\n  padding-left: 5px;\n}\n\n:host-context(.node-frontend) .network-discovery-edit-row {\n  margin: 6px 9px;\n}\n\n/*# sourceURL=nodeConnectionsPanel.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);