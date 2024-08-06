"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_LayoutPane_js"], {
"./panels/elements/components/LayoutPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LayoutPane: function() { return LayoutPane; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _layoutPane_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layoutPane.css.js */ "./panels/elements/components/layoutPane.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
        '<div class="elements">\n                  ',
        "\n                </div>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<div class="content-section" jslog=',
        '>\n              <h3 class="content-section-title">\n                ',
        "\n              </h3>\n              ",
        "\n            </div>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<div class="elements">\n                    ',
        "\n                  </div>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '<div class="content-section" jslog=',
        '>\n                <h3 class="content-section-title">\n                  ',
        "\n                </h3>\n                ",
        "\n              </div>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        '\n          <details open>\n            <summary class="header" @keydown=',
        " jslog=",
        ">\n              ",
        "\n            </summary>\n            ",
        "\n          </details>\n          "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n        <details open>\n          <summary class="header" @keydown=',
        " jslog=",
        ">\n            ",
        '\n          </summary>\n          <div class="content-section" jslog=',
        '>\n            <h3 class="content-section-title">',
        '</h3>\n            <div class="select-settings">\n              ',
        '\n            </div>\n            <div class="checkbox-settings">\n              ',
        "\n            </div>\n          </div>\n          ",
        "\n        </details>\n        ",
        "\n      "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "devtools-layout-pane"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '<div class="element" jslog=',
        '>\n      <label data-element="true" class="checkbox-label">\n        <input data-input="true" type="checkbox" .checked=',
        " @change=",
        " jslog=",
        ' />\n        <span class="node-text-container" data-label="true" @mouseenter=',
        " @mouseleave=",
        ">\n          <",
        " .data=",
        "></",
        ">\n        </span>\n      </label>\n      <label @keyup=",
        " @keydown=",
        ' class="color-picker-label" style="background: ',
        ';" jslog=',
        ">\n        <input @change=",
        " @input=",
        " title=",
        ' tabindex="0" class="color-picker" type="color" value=',
        " />\n      </label>\n      <",
        ' class="show-element"\n                                           title=',
        "\n                                           aria-label=",
        "\n                                           .iconName=",
        "\n                                           .jslogContext=",
        "\n                                           .size=",
        "\n                                           .variant=",
        "\n                                           @click=",
        "></",
        ">\n    </div>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        '<label data-boolean-setting="true" class="checkbox-label" title=',
        " jslog=",
        '>\n      <input data-input="true" type="checkbox" .checked=',
        " @change=",
        ' />\n      <span data-label="true">',
        "</span>\n    </label>"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "<option value=",
        " .selected=",
        " jslog=",
        ">",
        "</option>"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        '<label data-enum-setting="true" class="select-label" title=',
        '>\n      <select\n        class="chrome-select"\n        data-input="true"\n        jslog=',
        "\n        @change=",
        ">\n        ",
        "\n      </select>\n    </label>"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}









// eslint-disable-next-line rulesdir/es_modules_import





var UIStrings = {
    /**
     *@description Title of the input to select the overlay color for an element using the color picker
     */ chooseElementOverlayColor: 'Choose the overlay color for this element',
    /**
     *@description Title of the show element button in the Layout pane of the Elements panel
     */ showElementInTheElementsPanel: 'Show element in the Elements panel',
    /**
     *@description Title of a section on CSS Grid tooling
     */ grid: 'Grid',
    /**
     *@description Title of a section in the Layout Sidebar pane of the Elements panel
     */ overlayDisplaySettings: 'Overlay display settings',
    /**
     *@description Title of a section in Layout sidebar pane
     */ gridOverlays: 'Grid overlays',
    /**
     *@description Message in the Layout panel informing users that no CSS Grid layouts were found on the page
     */ noGridLayoutsFoundOnThisPage: 'No grid layouts found on this page',
    /**
     *@description Title of the Flexbox section in the Layout panel
     */ flexbox: 'Flexbox',
    /**
     *@description Title of a section in the Layout panel
     */ flexboxOverlays: 'Flexbox overlays',
    /**
     *@description Text in the Layout panel, when no flexbox elements are found
     */ noFlexboxLayoutsFoundOnThisPage: 'No flexbox layouts found on this page',
    /**
     *@description Screen reader announcement when opening color picker tool.
     */ colorPickerOpened: 'Color picker opened.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/components/LayoutPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.html;
var nodeToLayoutElement = function(node) {
    var className = node.getAttribute('class');
    var nodeId = node.id;
    return {
        id: nodeId,
        color: 'var(--sys-color-inverse-surface)',
        name: node.localName(),
        domId: node.getAttribute('id'),
        domClasses: className ? className.split(/\s+/).filter(function(s) {
            return Boolean(s);
        }) : undefined,
        enabled: false,
        reveal: function() {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
            void node.scrollIntoView();
        },
        highlight: function() {
            node.highlight();
        },
        hideHighlight: function() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        },
        toggle: function(_value) {
            throw new Error('Not implemented');
        },
        setColor: function setColor(_value) {
            throw new Error('Not implemented');
        }
    };
};
var gridNodesToElements = function(nodes) {
    return nodes.map(function(node) {
        var layoutElement = nodeToLayoutElement(node);
        var nodeId = node.id;
        return _object_spread_props(_object_spread({}, layoutElement), {
            color: node.domModel().overlayModel().colorOfGridInPersistentOverlay(nodeId) || 'var(--sys-color-inverse-surface)',
            enabled: node.domModel().overlayModel().isHighlightedGridInPersistentOverlay(nodeId),
            toggle: function(value) {
                if (value) {
                    node.domModel().overlayModel().highlightGridInPersistentOverlay(nodeId);
                } else {
                    node.domModel().overlayModel().hideGridInPersistentOverlay(nodeId);
                }
            },
            setColor: function setColor(value) {
                this.color = value;
                node.domModel().overlayModel().setColorOfGridInPersistentOverlay(nodeId, value);
            }
        });
    });
};
var flexContainerNodesToElements = function(nodes) {
    return nodes.map(function(node) {
        var layoutElement = nodeToLayoutElement(node);
        var nodeId = node.id;
        return _object_spread_props(_object_spread({}, layoutElement), {
            color: node.domModel().overlayModel().colorOfFlexInPersistentOverlay(nodeId) || 'var(--sys-color-inverse-surface)',
            enabled: node.domModel().overlayModel().isHighlightedFlexContainerInPersistentOverlay(nodeId),
            toggle: function(value) {
                if (value) {
                    node.domModel().overlayModel().highlightFlexContainerInPersistentOverlay(nodeId);
                } else {
                    node.domModel().overlayModel().hideFlexContainerInPersistentOverlay(nodeId);
                }
            },
            setColor: function setColor(value) {
                this.color = value;
                node.domModel().overlayModel().setColorOfFlexInPersistentOverlay(nodeId, value);
            }
        });
    });
};
function isEnumSetting(setting) {
    return setting.type === "enum" /* Common.Settings.SettingType.ENUM */ ;
}
function isBooleanSetting(setting) {
    return setting.type === "boolean" /* Common.Settings.SettingType.BOOLEAN */ ;
}
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
var layoutPaneWrapperInstance;
var _LegacyWrapper_LegacyWrapper_WrappableComponent, _shadow = /*#__PURE__*/ new WeakMap(), _settings = /*#__PURE__*/ new WeakMap(), _uaShadowDOMSetting = /*#__PURE__*/ new WeakMap(), _domModels = /*#__PURE__*/ new WeakMap(), _fetchNodesByStyle = /*#__PURE__*/ new WeakSet(), _fetchGridNodes = /*#__PURE__*/ new WeakSet(), _fetchFlexContainerNodes = /*#__PURE__*/ new WeakSet(), _makeSettings = /*#__PURE__*/ new WeakSet(), _onSummaryKeyDown = /*#__PURE__*/ new WeakSet(), _getEnumSettings = /*#__PURE__*/ new WeakSet(), _getBooleanSettings = /*#__PURE__*/ new WeakSet(), _onBooleanSettingChange = /*#__PURE__*/ new WeakSet(), _onEnumSettingChange = /*#__PURE__*/ new WeakSet(), _onElementToggle = /*#__PURE__*/ new WeakSet(), _onElementClick = /*#__PURE__*/ new WeakSet(), _onColorChange = /*#__PURE__*/ new WeakSet(), _onElementMouseEnter = /*#__PURE__*/ new WeakSet(), _onElementMouseLeave = /*#__PURE__*/ new WeakSet(), _renderElement = /*#__PURE__*/ new WeakSet(), _renderBooleanSetting = /*#__PURE__*/ new WeakSet(), _renderEnumSetting = /*#__PURE__*/ new WeakSet();
var LayoutPane = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(LayoutPane, _superClass);
    var _super = _create_super(LayoutPane);
    function LayoutPane() {
        _class_call_check(this, LayoutPane);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _fetchNodesByStyle);
        _class_private_method_init(_assert_this_initialized(_this), _fetchGridNodes);
        _class_private_method_init(_assert_this_initialized(_this), _fetchFlexContainerNodes);
        _class_private_method_init(_assert_this_initialized(_this), _makeSettings);
        _class_private_method_init(_assert_this_initialized(_this), _onSummaryKeyDown);
        _class_private_method_init(_assert_this_initialized(_this), _getEnumSettings);
        _class_private_method_init(_assert_this_initialized(_this), _getBooleanSettings);
        _class_private_method_init(_assert_this_initialized(_this), _onBooleanSettingChange);
        _class_private_method_init(_assert_this_initialized(_this), _onEnumSettingChange);
        _class_private_method_init(_assert_this_initialized(_this), _onElementToggle);
        _class_private_method_init(_assert_this_initialized(_this), _onElementClick);
        _class_private_method_init(_assert_this_initialized(_this), _onColorChange);
        _class_private_method_init(_assert_this_initialized(_this), _onElementMouseEnter);
        _class_private_method_init(_assert_this_initialized(_this), _onElementMouseLeave);
        _class_private_method_init(_assert_this_initialized(_this), _renderElement);
        _class_private_method_init(_assert_this_initialized(_this), _renderBooleanSetting);
        _class_private_method_init(_assert_this_initialized(_this), _renderEnumSetting);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _settings, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _uaShadowDOMSetting, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _domModels, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _settings, _class_private_method_get(_this, _makeSettings, makeSettings).call(_assert_this_initialized(_this)));
        _class_private_field_set(_assert_this_initialized(_this), _uaShadowDOMSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom'));
        _class_private_field_set(_assert_this_initialized(_this), _domModels, []);
        _class_private_field_get(_this, _shadow).adoptedStyleSheets = [
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__.checkboxStyles,
            _layoutPane_css_js__WEBPACK_IMPORTED_MODULE_13__["default"],
            _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
        ];
        return _this;
    }
    _create_class(LayoutPane, [
        {
            key: "modelAdded",
            value: function modelAdded(domModel) {
                var overlayModel = domModel.overlayModel();
                overlayModel.addEventListener("PersistentGridOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentGridOverlayStateChanged */ , this.render, this);
                overlayModel.addEventListener("PersistentFlexContainerOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged */ , this.render, this);
                _class_private_field_get(this, _domModels).push(domModel);
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(domModel) {
                var overlayModel = domModel.overlayModel();
                overlayModel.removeEventListener("PersistentGridOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentGridOverlayStateChanged */ , this.render, this);
                overlayModel.removeEventListener("PersistentFlexContainerOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged */ , this.render, this);
                _class_private_field_set(this, _domModels, _class_private_field_get(this, _domModels).filter(function(model) {
                    return model !== domModel;
                }));
            }
        },
        {
            key: "onSettingChanged",
            value: function onSettingChanged(setting, value) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting).set(value);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _settings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var setting = _step.value;
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting.name).addChangeListener(this.render, this);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = _class_private_field_get(this, _domModels)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var domModel = _step1.value;
                        this.modelRemoved(domModel);
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                _class_private_field_set(this, _domModels, []);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, this, {
                    scoped: true
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.render, this);
                _class_private_field_get(this, _uaShadowDOMSetting).addChangeListener(this.render, this);
                void this.render();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _settings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var setting = _step.value;
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting.name).removeChangeListener(this.render, this);
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
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().unobserveModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.render, this);
                _class_private_field_get(this, _uaShadowDOMSetting).removeChangeListener(this.render, this);
            }
        },
        {
            key: "render",
            value: function render1() {
                var _this = this;
                return _async_to_generator(function() {
                    var gridElements, flexContainerElements;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _class_private_method_get(_this, _fetchGridNodes, fetchGridNodes).call(_this)
                                ];
                            case 1:
                                gridElements = gridNodesToElements.apply(void 0, [
                                    _state.sent()
                                ]);
                                return [
                                    4,
                                    _class_private_method_get(_this, _fetchFlexContainerNodes, fetchFlexContainerNodes).call(_this)
                                ];
                            case 2:
                                flexContainerElements = flexContainerNodesToElements.apply(void 0, [
                                    _state.sent()
                                ]);
                                return [
                                    4,
                                    coordinator.write('LayoutPane render', function() {
                                        // Disabled until https://crbug.com/1079231 is fixed.
                                        // clang-format off
                                        render(html(_templateObject5(), _class_private_method_get(_this, _onSummaryKeyDown, onSummaryKeyDown), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.sectionHeader('grid-settings').track({
                                            click: true
                                        }), i18nString(UIStrings.grid), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('grid-settings'), i18nString(UIStrings.overlayDisplaySettings), _class_private_method_get(_this, _getEnumSettings, getEnumSettings).call(_this).map(function(setting) {
                                            return _class_private_method_get(_this, _renderEnumSetting, renderEnumSetting).call(_this, setting);
                                        }), _class_private_method_get(_this, _getBooleanSettings, getBooleanSettings).call(_this).map(function(setting) {
                                            return _class_private_method_get(_this, _renderBooleanSetting, renderBooleanSetting).call(_this, setting);
                                        }), gridElements ? html(_templateObject1(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('grid-overlays'), gridElements.length ? i18nString(UIStrings.gridOverlays) : i18nString(UIStrings.noGridLayoutsFoundOnThisPage), gridElements.length ? html(_templateObject(), gridElements.map(function(element) {
                                            return _class_private_method_get(_this, _renderElement, renderElement).call(_this, element);
                                        })) : '') : '', flexContainerElements !== undefined ? html(_templateObject4(), _class_private_method_get(_this, _onSummaryKeyDown, onSummaryKeyDown), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.sectionHeader('flexbox-overlays').track({
                                            click: true
                                        }), i18nString(UIStrings.flexbox), flexContainerElements ? html(_templateObject3(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('flexbox-overlays'), flexContainerElements.length ? i18nString(UIStrings.flexboxOverlays) : i18nString(UIStrings.noFlexboxLayoutsFoundOnThisPage), flexContainerElements.length ? html(_templateObject2(), flexContainerElements.map(function(element) {
                                            return _class_private_method_get(_this, _renderElement, renderElement).call(_this, element);
                                        })) : '') : '') : ''), _class_private_field_get(_this, _shadow), {
                                            host: _this
                                        });
                                    // clang-format on
                                    })
                                ];
                            case 3:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!layoutPaneWrapperInstance) {
                    layoutPaneWrapperInstance = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.Widget, new LayoutPane());
                }
                layoutPaneWrapperInstance.element.style.minWidth = 'min-content';
                layoutPaneWrapperInstance.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.pane('layout').track({
                    resize: true
                })));
                return layoutPaneWrapperInstance.getComponent();
            }
        }
    ]);
    return LayoutPane;
}(_LegacyWrapper_LegacyWrapper_WrappableComponent = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent);
_define_property(LayoutPane, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.literal(_templateObject6()));
function fetchNodesByStyle(style) {
    return _fetchNodesByStyle1.apply(this, arguments);
}
function _fetchNodesByStyle1() {
    _fetchNodesByStyle1 = _async_to_generator(function(style) {
        var showUAShadowDOM, nodes, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, domModel, nodeIds, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, nodeId, node, error, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    showUAShadowDOM = _class_private_field_get(this, _uaShadowDOMSetting).get();
                    nodes = [];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        8,
                        9,
                        10
                    ]);
                    _iterator = _class_private_field_get(this, _domModels)[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        7
                    ];
                    domModel = _step.value;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        5,
                        ,
                        6
                    ]);
                    return [
                        4,
                        domModel.getNodesByStyle(style, true)
                    ];
                case 4:
                    nodeIds = _state.sent();
                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(_iterator1 = nodeIds[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            nodeId = _step1.value;
                            node = domModel.nodeForId(nodeId);
                            if (node !== null && (showUAShadowDOM || !node.ancestorUserAgentShadowRoot())) {
                                nodes.push(node);
                            }
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    return [
                        3,
                        6
                    ];
                case 5:
                    error = _state.sent();
                    // TODO(crbug.com/1167706): Sometimes in E2E tests the layout panel is updated after a DOM node
                    // has been removed. This causes an error that a node has not been found.
                    // We can skip nodes that resulted in an error.
                    console.warn(error);
                    return [
                        3,
                        6
                    ];
                case 6:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 7:
                    return [
                        3,
                        10
                    ];
                case 8:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        10
                    ];
                case 9:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 10:
                    return [
                        2,
                        nodes
                    ];
            }
        });
    });
    return _fetchNodesByStyle1.apply(this, arguments);
}
function fetchGridNodes() {
    return _fetchGridNodes1.apply(this, arguments);
}
function _fetchGridNodes1() {
    _fetchGridNodes1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_method_get(this, _fetchNodesByStyle, fetchNodesByStyle).call(this, [
                            {
                                name: 'display',
                                value: 'grid'
                            },
                            {
                                name: 'display',
                                value: 'inline-grid'
                            }
                        ])
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return _fetchGridNodes1.apply(this, arguments);
}
function fetchFlexContainerNodes() {
    return _fetchFlexContainerNodes1.apply(this, arguments);
}
function _fetchFlexContainerNodes1() {
    _fetchFlexContainerNodes1 = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _class_private_method_get(this, _fetchNodesByStyle, fetchNodesByStyle).call(this, [
                            {
                                name: 'display',
                                value: 'flex'
                            },
                            {
                                name: 'display',
                                value: 'inline-flex'
                            }
                        ])
                    ];
                case 1:
                    return [
                        2,
                        _state.sent()
                    ];
            }
        });
    });
    return _fetchFlexContainerNodes1.apply(this, arguments);
}
function makeSettings() {
    var settings = [];
    for(var _i = 0, _iter = [
        'show-grid-line-labels',
        'show-grid-track-sizes',
        'show-grid-areas',
        'extend-grid-lines'
    ]; _i < _iter.length; _i++){
        var settingName = _iter[_i];
        var setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(settingName);
        var settingValue = setting.get();
        var settingType = setting.type();
        if (!settingType) {
            throw new Error('A setting provided to LayoutSidebarPane does not have a setting type');
        }
        if (settingType !== "boolean" /* Common.Settings.SettingType.BOOLEAN */  && settingType !== "enum" /* Common.Settings.SettingType.ENUM */ ) {
            throw new Error('A setting provided to LayoutSidebarPane does not have a supported setting type');
        }
        var mappedSetting = {
            type: settingType,
            name: setting.name,
            title: setting.title()
        };
        if (typeof settingValue === 'boolean') {
            settings.push(_object_spread_props(_object_spread({}, mappedSetting), {
                value: settingValue,
                options: setting.options().map(function(opt) {
                    return _object_spread_props(_object_spread({}, opt), {
                        value: opt.value
                    });
                })
            }));
        } else if (typeof settingValue === 'string') {
            settings.push(_object_spread_props(_object_spread({}, mappedSetting), {
                value: settingValue,
                options: setting.options().map(function(opt) {
                    return _object_spread_props(_object_spread({}, opt), {
                        value: opt.value
                    });
                })
            }));
        }
    }
    return settings;
}
function onSummaryKeyDown(event) {
    if (!event.target) {
        return;
    }
    var summaryElement = event.target;
    var detailsElement = summaryElement.parentElement;
    if (!detailsElement) {
        throw new Error('<details> element is not found for a <summary> element');
    }
    switch(event.key){
        case 'ArrowLeft':
            detailsElement.open = false;
            break;
        case 'ArrowRight':
            detailsElement.open = true;
            break;
    }
}
function getEnumSettings() {
    return _class_private_field_get(this, _settings).filter(isEnumSetting);
}
function getBooleanSettings() {
    return _class_private_field_get(this, _settings).filter(isBooleanSetting);
}
function onBooleanSettingChange(setting, event) {
    event.preventDefault();
    this.onSettingChanged(setting.name, event.target.checked);
}
function onEnumSettingChange(setting, event) {
    event.preventDefault();
    this.onSettingChanged(setting.name, event.target.value);
}
function onElementToggle(element, event) {
    event.preventDefault();
    element.toggle(event.target.checked);
}
function onElementClick(element, event) {
    event.preventDefault();
    element.reveal();
}
function onColorChange(element, event) {
    event.preventDefault();
    element.setColor(event.target.value);
    void this.render();
}
function onElementMouseEnter(element, event) {
    event.preventDefault();
    element.highlight();
}
function onElementMouseLeave(element, event) {
    event.preventDefault();
    element.hideHighlight();
}
function renderElement(element) {
    var _$onElementToggle = _class_private_method_get(this, _onElementToggle, onElementToggle).bind(this, element);
    var _$onElementClick = _class_private_method_get(this, _onElementClick, onElementClick).bind(this, element);
    var _$onColorChange = _class_private_method_get(this, _onColorChange, onColorChange).bind(this, element);
    var onMouseEnter = _class_private_method_get(this, _onElementMouseEnter, onElementMouseEnter).bind(this, element);
    var onMouseLeave = _class_private_method_get(this, _onElementMouseLeave, onElementMouseLeave).bind(this, element);
    var onColorLabelKeyUp = function(event) {
        // Handle Enter and Space events to make the color picker accessible.
        if (event.key !== 'Enter' && event.key !== ' ') {
            return;
        }
        var target = event.target;
        var input = target.querySelector('input');
        input.click();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.alert(i18nString(UIStrings.colorPickerOpened));
        event.preventDefault();
    };
    var onColorLabelKeyDown = function(event) {
        // Prevent default scrolling when the Space key is pressed.
        if (event.key === ' ') {
            event.preventDefault();
        }
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html(_templateObject7(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.item(), element.enabled, _$onElementToggle, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.toggle().track({
        click: true
    }), onMouseEnter, onMouseLeave, _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_7__.NodeText.NodeText.litTagName, {
        nodeId: element.domId,
        nodeTitle: element.name,
        nodeClasses: element.domClasses
    }, _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_7__.NodeText.NodeText.litTagName, onColorLabelKeyUp, onColorLabelKeyDown, element.color, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.showStyleEditor('color').track({
        click: true
    }), _$onColorChange, _$onColorChange, i18nString(UIStrings.chooseElementOverlayColor), element.color, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, i18nString(UIStrings.showElementInTheElementsPanel), i18nString(UIStrings.showElementInTheElementsPanel), 'select-element', 'elements.select-element', "SMALL" /* Buttons.Button.Size.SMALL */ , "icon" /* Buttons.Button.Variant.ICON */ , _$onElementClick, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName);
// clang-format on
}
function renderBooleanSetting(setting) {
    var _$onBooleanSettingChange = _class_private_method_get(this, _onBooleanSettingChange, onBooleanSettingChange).bind(this, setting);
    return html(_templateObject8(), setting.title, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.toggle().track({
        click: true
    }).context(setting.name), setting.value, _$onBooleanSettingChange, setting.title);
}
function renderEnumSetting(setting) {
    var _$onEnumSettingChange = _class_private_method_get(this, _onEnumSettingChange, onEnumSettingChange).bind(this, setting);
    return html(_templateObject10(), setting.title, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.dropDown().track({
        change: true
    }).context(setting.name), _$onEnumSettingChange, setting.options.map(function(opt) {
        return html(_templateObject9(), opt.value, setting.value === opt.value, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(opt.value)).track({
            click: true
        }), opt.title);
    }));
}
customElements.define('devtools-layout-pane', LayoutPane); //# sourceMappingURL=LayoutPane.js.map


}),
"./panels/elements/components/layoutPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n  font-size: 12px;\n}\n\n.header {\n  background-color: var(--sys-color-surface2);\n  border-bottom: 1px solid var(--sys-color-divider);\n  line-height: 1.6;\n  overflow: hidden;\n  padding: 0 5px;\n  white-space: nowrap;\n}\n\n.header::marker {\n  color: var(--sys-color-on-surface-subtle);\n  font-size: 11px;\n  line-height: 1;\n}\n\n.header:focus {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.content-section {\n  padding: 16px;\n  border-bottom: 1px solid var(--sys-color-divider);\n  overflow-x: hidden;\n}\n\n.content-section-title {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.1;\n  margin: 0;\n  padding: 0;\n}\n\n.checkbox-settings {\n  margin-top: 8px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 5px;\n}\n\n.checkbox-label {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  min-width: 40px;\n  width: fit-content;\n}\n\n.checkbox-settings .checkbox-label {\n  margin-bottom: 8px;\n}\n\n.checkbox-settings .checkbox-label:last-child {\n  margin-bottom: 0;\n}\n\n.checkbox-label input {\n  margin: 0 6px 0 0;\n  padding: 0;\n  flex: none;\n}\n\n.checkbox-label input:focus {\n  outline: auto 5px -webkit-focus-ring-color;\n}\n\n.checkbox-label > span {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.select-settings {\n  margin-top: 16px;\n  width: fit-content;\n}\n\n.select-label {\n  display: flex;\n  flex-direction: column;\n}\n\n.select-label span {\n  margin-bottom: 4px;\n}\n\n.elements {\n  margin-top: 12px;\n  color: var(--sys-color-token-tag);\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));\n  gap: 8px;\n}\n\n.element {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 8px;\n}\n\n.show-element {\n  flex: none;\n}\n\n.chrome-select {\n  min-width: 0;\n  max-width: 150px;\n}\n\n.color-picker {\n  opacity: 0%;\n}\n\n.color-picker-label {\n  border: 1px solid var(--sys-color-neutral-outline);\n  cursor: default;\n  display: inline-block;\n  flex: none;\n  height: 10px;\n  width: 10px;\n  position: relative;\n\n  &:focus-within {\n    outline: 2px solid var(--sys-color-state-focus-ring);\n    outline-offset: 2px;\n    border-radius: 2px;\n  }\n}\n/* We set dimensions for the invisible input to support quick highlight a11y feature\nthat uses the dimensions to draw an outline around the element. */\n.color-picker-label input[type="color"] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.color-picker-label:hover,\n.color-picker-label:focus {\n  border: 1px solid var(--sys-color-outline);\n  transform: scale(1.2);\n}\n\n.node-text-container {\n  line-height: 16px;\n  padding: 0 0.5ex;\n  border-radius: 5px;\n}\n\n/*# sourceURL=layoutPane.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/node_text/node_text.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NodeText: function() { return /* reexport module object */ _NodeText_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _NodeText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeText.js */ "./ui/components/node_text/NodeText.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=node_text.js.map


}),

}]);