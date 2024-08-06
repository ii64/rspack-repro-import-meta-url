"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_ServiceWorkerRouterView_js"], {
"./panels/application/components/ServiceWorkerRouterView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ServiceWorkerRouterView: function() { return ServiceWorkerRouterView; }
});
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _serviceWorkerRouterView_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serviceWorkerRouterView.css.js */ "./panels/application/components/serviceWorkerRouterView.css.js");
// Copyright (c) 2023 The Chromium Authors. All rights reserved.
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
function _templateObject() {
    var data = _tagged_template_literal([
        "devtools-service-worker-router-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <ul class="router-rules">\n        ',
        "\n      </ul>\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <li class="router-rule">\n        <div class="rule-id">Rule ',
        '</div>\n        <ul class="item">\n          <li class="condition">\n            <div class="rule-type">Condition</div>\n            <div class="rule-value">',
        '</div>\n          </li>\n          <li class="source">\n            <div class="rule-type">Source</div>\n            <div class="rule-value">',
        "</div>\n          </li>\n        </ul>\n      </li>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}



var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html, render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render;
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _rules = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _renderRouterRule = /*#__PURE__*/ new WeakSet();
var ServiceWorkerRouterView = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(ServiceWorkerRouterView, _superClass);
    var _super = _create_super(ServiceWorkerRouterView);
    function ServiceWorkerRouterView() {
        _class_call_check(this, ServiceWorkerRouterView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderRouterRule);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _rules, {
            writable: true,
            value: []
        });
        return _this;
    }
    _create_class(ServiceWorkerRouterView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _serviceWorkerRouterView_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]
                ];
            }
        },
        {
            key: "update",
            value: function update(rules) {
                _class_private_field_set(this, _rules, rules);
                if (_class_private_field_get(this, _rules).length > 0) {
                    _class_private_method_get(this, _render, render1).call(this);
                }
            }
        }
    ]);
    return ServiceWorkerRouterView;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_0__.LegacyWrapper.WrappableComponent);
_define_property(ServiceWorkerRouterView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject()));
function render1() {
    // clang-format off
    render(html(_templateObject1(), _class_private_field_get(this, _rules).map(_class_private_method_get(this, _renderRouterRule, renderRouterRule))), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function renderRouterRule(rule) {
    return html(_templateObject2(), rule.id, rule.condition, rule.source);
}
customElements.define('devtools-service-worker-router-view', ServiceWorkerRouterView); //# sourceMappingURL=ServiceWorkerRouterView.js.map


}),
"./panels/application/components/serviceWorkerRouterView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n:host {\n  display: block;\n  white-space: normal;\n  max-width: 400px;\n}\n\n.router-rules {\n  border: 1px solid var(--sys-color-divider);\n  border-spacing: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: initial;\n  margin-top: 0;\n  padding-bottom: 12px;\n  text-wrap: balance;\n}\n\n.router-rule {\n  display: flex;\n  margin-top: 12px;\n  flex-direction: column;\n}\n\n.rule-id {\n  color: var(--sys-color-token-subtle);\n}\n\n.item {\n  display: flex;\n  flex-direction: column;\n  padding-left: 10px;\n}\n\n.condition,\n.source {\n  list-style: none;\n  display: flex;\n  margin-top: 4px;\n  flex-direction: row;\n}\n\n.condition > *,\n.source > * {\n  word-break: break-all;\n  line-height: 1.5em;\n}\n\n.rule-type {\n  flex: 0 0 18%;\n}\n\n/*# sourceURL=serviceWorkerRouterView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);