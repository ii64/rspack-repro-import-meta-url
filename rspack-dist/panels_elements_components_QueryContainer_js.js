"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_QueryContainer_js"], {
"./panels/elements/components/QueryContainer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  QueriedSizeRequestedEvent: function() { return QueriedSizeRequestedEvent; },
  QueryContainer: function() { return QueryContainer; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _queryContainer_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./queryContainer.css.js */ "./panels/elements/components/queryContainer.css.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "devtools-query-container"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      →\n      <a href="#"\n        draggable=false\n        class="container-link"\n        jslog=',
        "\n        @click=",
        "\n        @mouseenter=",
        "\n        @mouseleave=",
        "\n      ><",
        "\n          data-node-title=",
        "\n          .data=",
        "></",
        "></a>\n      ",
        "\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n      <span class="queried-size-details">\n        (',
        "<",
        "\n          class=",
        " .data=",
        "></",
        ">)\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n      </span>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}






var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html;
var _SDK_CSSContainerQuery = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.CSSContainerQuery, PhysicalAxis = _SDK_CSSContainerQuery.PhysicalAxis, QueryAxis = _SDK_CSSContainerQuery.QueryAxis;
var QueriedSizeRequestedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(QueriedSizeRequestedEvent, Event1);
    var _super = _create_super(QueriedSizeRequestedEvent);
    function QueriedSizeRequestedEvent() {
        _class_call_check(this, QueriedSizeRequestedEvent);
        return _super.call(this, QueriedSizeRequestedEvent.eventName, {});
    }
    return QueriedSizeRequestedEvent;
}(_wrap_native_super(Event));
_define_property(QueriedSizeRequestedEvent, "eventName", 'queriedsizerequested');
var _shadow = /*#__PURE__*/ new WeakMap(), _queryName = /*#__PURE__*/ new WeakMap(), _container = /*#__PURE__*/ new WeakMap(), _onContainerLinkClick = /*#__PURE__*/ new WeakMap(), _isContainerLinkHovered = /*#__PURE__*/ new WeakMap(), _queriedSizeDetails = /*#__PURE__*/ new WeakMap(), _onContainerLinkMouseEnter = /*#__PURE__*/ new WeakSet(), _onContainerLinkMouseLeave = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet(), _renderQueriedSizeDetails = /*#__PURE__*/ new WeakSet();
var QueryContainer = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(QueryContainer, HTMLElement1);
    var _super = _create_super(QueryContainer);
    function QueryContainer() {
        _class_call_check(this, QueryContainer);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _onContainerLinkMouseEnter);
        _class_private_method_init(_assert_this_initialized(_this), _onContainerLinkMouseLeave);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderQueriedSizeDetails);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _queryName, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _container, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _onContainerLinkClick, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _isContainerLinkHovered, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _queriedSizeDetails, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(QueryContainer, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _queryName, data.queryName);
                _class_private_field_set(this, _container, data.container);
                _class_private_field_set(this, _onContainerLinkClick, data.onContainerLinkClick);
                _class_private_method_get(this, _render, render1).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _queryContainer_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        },
        {
            key: "updateContainerQueriedSizeDetails",
            value: function updateContainerQueriedSizeDetails(details) {
                _class_private_field_set(this, _queriedSizeDetails, details);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return QueryContainer;
}(_wrap_native_super(HTMLElement));
_define_property(QueryContainer, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal(_templateObject()));
function onContainerLinkMouseEnter() {
    return _onContainerLinkMouseEnter1.apply(this, arguments);
}
function _onContainerLinkMouseEnter1() {
    _onContainerLinkMouseEnter1 = _async_to_generator(function() {
        var _$_class_private_field_get;
        return _ts_generator(this, function(_state) {
            (_$_class_private_field_get = _class_private_field_get(this, _container)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.highlightNode('container-outline');
            _class_private_field_set(this, _isContainerLinkHovered, true);
            this.dispatchEvent(new QueriedSizeRequestedEvent());
            return [
                2
            ];
        });
    });
    return _onContainerLinkMouseEnter1.apply(this, arguments);
}
function onContainerLinkMouseLeave() {
    var _$_class_private_field_get;
    (_$_class_private_field_get = _class_private_field_get(this, _container)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.clearHighlight();
    _class_private_field_set(this, _isContainerLinkHovered, false);
    _class_private_method_get(this, _render, render1).call(this);
}
function render1() {
    if (!_class_private_field_get(this, _container)) {
        return;
    }
    var idToDisplay, classesToDisplay;
    if (!_class_private_field_get(this, _queryName)) {
        var _class_private_field_get_getAttribute;
        idToDisplay = _class_private_field_get(this, _container).getAttribute('id');
        classesToDisplay = (_class_private_field_get_getAttribute = _class_private_field_get(this, _container).getAttribute('class')) === null || _class_private_field_get_getAttribute === void 0 ? void 0 : _class_private_field_get_getAttribute.split(/\s+/).filter(Boolean);
    }
    var nodeTitle = _class_private_field_get(this, _queryName) || _class_private_field_get(this, _container).nodeNameNicelyCased;
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html
    render(html(_templateObject1(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.cssRuleHeader('container-query').track({
        click: true
    }), _class_private_field_get(this, _onContainerLinkClick), _class_private_method_get(this, _onContainerLinkMouseEnter, onContainerLinkMouseEnter), _class_private_method_get(this, _onContainerLinkMouseLeave, onContainerLinkMouseLeave), _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName, nodeTitle, {
        nodeTitle: nodeTitle,
        nodeId: idToDisplay,
        nodeClasses: classesToDisplay
    }, _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_2__.NodeText.NodeText.litTagName, _class_private_field_get(this, _isContainerLinkHovered) ? _class_private_method_get(this, _renderQueriedSizeDetails, renderQueriedSizeDetails).call(this) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function renderQueriedSizeDetails() {
    if (!_class_private_field_get(this, _queriedSizeDetails) || _class_private_field_get(this, _queriedSizeDetails).queryAxis === "" /* QueryAxis.None */ ) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing;
    }
    var areBothAxesQueried = _class_private_field_get(this, _queriedSizeDetails).queryAxis === "size" /* QueryAxis.Both */ ;
    var axisIconClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.Directives.classMap({
        'axis-icon': true,
        'hidden': areBothAxesQueried,
        'vertical': _class_private_field_get(this, _queriedSizeDetails).physicalAxis === "Vertical" /* PhysicalAxis.Vertical */ 
    });
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html(_templateObject2(), _class_private_field_get(this, _queriedSizeDetails).queryAxis, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName, axisIconClasses, {
        iconName: 'width',
        color: 'var(--icon-default)'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName, areBothAxesQueried && _class_private_field_get(this, _queriedSizeDetails).width ? 'width:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing, _class_private_field_get(this, _queriedSizeDetails).width || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing, areBothAxesQueried && _class_private_field_get(this, _queriedSizeDetails).height ? 'height:' : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing, _class_private_field_get(this, _queriedSizeDetails).height || _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.nothing);
// clang-format on
}
customElements.define('devtools-query-container', QueryContainer); //# sourceMappingURL=QueryContainer.js.map


}),
"./panels/elements/components/queryContainer.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.container-link {\n  display: inline-block;\n  color: var(--sys-color-state-disabled);\n}\n\n.container-link:hover {\n  color: var(--sys-color-primary);\n}\n\n.queried-size-details {\n  color: var(--sys-color-on-surface);\n}\n\n.axis-icon {\n  margin-left: 0.4em;\n  width: 16px;\n  height: 12px;\n  vertical-align: text-top;\n}\n\n.axis-icon.hidden {\n  display: none;\n}\n\n.axis-icon.vertical {\n  transform: rotate(90deg);\n}\n\n/*# sourceURL=queryContainer.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);