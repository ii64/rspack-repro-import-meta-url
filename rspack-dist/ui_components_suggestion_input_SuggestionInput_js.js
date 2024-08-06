"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_suggestion_input_SuggestionInput_js"], {
"./ui/components/suggestion_input/SuggestionInput.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SuggestionInput: function() { return SuggestionInput; }
});
/* harmony import */var _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/code_highlighter.js */ "./ui/components/code_highlighter/code_highlighter.js");
/* harmony import */var _ui_components_code_highlighter_codeHighlighter_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/code_highlighter/codeHighlighter.css.js */ "./ui/components/code_highlighter/codeHighlighter.css.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _suggestionInput_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./suggestionInput.css.js */ "./ui/components/suggestion_input/suggestionInput.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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
function _templateObject() {
    var data = _tagged_template_literal([
        "<li\n          class=",
        "\n          @mousedown=",
        "\n          jslog=",
        "\n        >\n          ",
        "\n        </li>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '<ul class="suggestions">\n      ',
        "\n    </ul>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<devtools-editable-content\n        ?disabled=",
        "\n        class=",
        "\n        .enterKeyHint=",
        "\n        .value=",
        "\n        .mimeType=",
        "\n        @focus=",
        "\n        @input=",
        "\n        @keydown=",
        '\n        autocapitalize="off"\n        inputmode="text"\n        placeholder=',
        '\n        spellcheck="false"\n      ></devtools-editable-content>\n      <devtools-suggestion-box\n        @suggestioninit=',
        "\n        @suggest=",
        "\n        .options=",
        "\n        .suggestionFilter=",
        "\n        .expression=",
        "\n      ></devtools-suggestion-box>"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
var _mimeType, _highlight, _EditableContent, _suggestions, _handleKeyDownEvent, _moveCursor, _dispatchSuggestEvent, _SuggestionBox, _cachedEditableContent, _editableContent, _handleBlurEvent, _handleFocusEvent, _handleKeyDownEvent1, _handleInputEvent, _handleSuggestionInitEvent, _handleSuggestEvent, _SuggestionInput;
var __decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if ((typeof Reflect === "undefined" ? "undefined" : _type_of(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// eslint-disable-next-line rulesdir/es_modules_import




var mod = function(a, n) {
    return (a % n + n) % n;
};
function assert(predicate) {
    var message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Assertion failed!';
    if (!predicate) {
        throw new Error(message);
    }
}
var html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html, Decorators = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Decorators, Directives = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives, LitElement = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.LitElement;
var customElement = Decorators.customElement, property = Decorators.property, state = Decorators.state;
var classMap = Directives.classMap;
var jsonPropertyOptions = {
    hasChanged: function hasChanged(value, oldValue) {
        return JSON.stringify(value) !== JSON.stringify(oldValue);
    }
};
var EditableContent = (_mimeType = /*#__PURE__*/ new WeakMap(), _highlight = /*#__PURE__*/ new WeakSet(), _EditableContent = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(EditableContent, HTMLElement1);
    var _super = _create_super(EditableContent);
    function EditableContent() {
        _class_call_check(this, EditableContent);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _highlight);
        _class_private_field_init(_assert_this_initialized(_this), _mimeType, {
            writable: true,
            value: ''
        });
        _this.contentEditable = 'true';
        _this.tabIndex = 0;
        _this.addEventListener('focus', function() {
            _this.innerHTML = _this.innerText;
        });
        _this.addEventListener('blur', _class_private_method_get(_this, _highlight, highlight).bind(_assert_this_initialized(_this)));
        return _this;
    }
    _create_class(EditableContent, [
        {
            key: "disabled",
            get: function get() {
                return this.contentEditable !== 'true';
            },
            set: function set(disabled) {
                this.contentEditable = String(!disabled);
            }
        },
        {
            key: "value",
            get: function get() {
                return this.innerText;
            },
            set: function set(value) {
                this.innerText = value;
                _class_private_method_get(this, _highlight, highlight).call(this);
            }
        },
        {
            key: "mimeType",
            get: function get() {
                return _class_private_field_get(this, _mimeType);
            },
            set: function set(type) {
                _class_private_field_set(this, _mimeType, type);
                _class_private_method_get(this, _highlight, highlight).call(this);
            }
        },
        {
            key: "attributeChangedCallback",
            value: function attributeChangedCallback(name, _, value) {
                switch(name){
                    case 'disabled':
                        this.disabled = value !== null;
                        break;
                }
            }
        }
    ], [
        {
            key: "observedAttributes",
            get: function get() {
                return [
                    'disabled',
                    'placeholder'
                ];
            }
        }
    ]);
    return EditableContent;
}(_wrap_native_super(HTMLElement)), _EditableContent);
EditableContent = __decorate([
    customElement('devtools-editable-content')
], EditableContent);
/**
 * Contains a suggestion emitted due to action by the user.
 */ var SuggestEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SuggestEvent, Event1);
    var _super = _create_super(SuggestEvent);
    function SuggestEvent(suggestion) {
        _class_call_check(this, SuggestEvent);
        var _this;
        _this = _super.call(this, SuggestEvent.eventName);
        _this.suggestion = suggestion;
        return _this;
    }
    return SuggestEvent;
}(_wrap_native_super(Event));
_define_property(SuggestEvent, "eventName", 'suggest');
/**
 * Parents should listen for this event and register the listeners provided by
 * this event.
 */ var SuggestionInitEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SuggestionInitEvent, Event1);
    var _super = _create_super(SuggestionInitEvent);
    function SuggestionInitEvent(listeners) {
        _class_call_check(this, SuggestionInitEvent);
        var _this;
        _this = _super.call(this, SuggestionInitEvent.eventName);
        _define_property(_assert_this_initialized(_this), "listeners", void 0);
        _this.listeners = listeners;
        return _this;
    }
    return SuggestionInitEvent;
}(_wrap_native_super(Event));
_define_property(SuggestionInitEvent, "eventName", 'suggestioninit');
var defaultSuggestionFilter = function(option, query) {
    return option.toLowerCase().startsWith(query.toLowerCase());
};
/**
 * @fires SuggestionInitEvent#suggestioninit
 * @fires SuggestEvent#suggest
 */ var SuggestionBox = (_suggestions = /*#__PURE__*/ new WeakMap(), _handleKeyDownEvent = /*#__PURE__*/ new WeakMap(), _moveCursor = /*#__PURE__*/ new WeakSet(), _dispatchSuggestEvent = /*#__PURE__*/ new WeakSet(), _SuggestionBox = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(SuggestionBox, LitElement);
    var _super = _create_super(SuggestionBox);
    function SuggestionBox() {
        _class_call_check(this, SuggestionBox);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _moveCursor);
        _class_private_method_init(_assert_this_initialized(_this), _dispatchSuggestEvent);
        _class_private_field_init(_assert_this_initialized(_this), _suggestions, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleKeyDownEvent, {
            writable: true,
            value: function(event) {
                assert(_instanceof(event, KeyboardEvent), 'Bound to the wrong event.');
                if (_class_private_field_get(_this, _suggestions).length > 0) {
                    switch(event.key){
                        case 'ArrowDown':
                            event.stopPropagation();
                            event.preventDefault();
                            _class_private_method_get(_this, _moveCursor, moveCursor).call(_assert_this_initialized(_this), 1);
                            break;
                        case 'ArrowUp':
                            event.stopPropagation();
                            event.preventDefault();
                            _class_private_method_get(_this, _moveCursor, moveCursor).call(_assert_this_initialized(_this), -1);
                            break;
                    }
                }
                switch(event.key){
                    case 'Enter':
                        if (_class_private_field_get(_this, _suggestions)[_this.cursor]) {
                            _class_private_method_get(_this, _dispatchSuggestEvent, dispatchSuggestEvent).call(_assert_this_initialized(_this), _class_private_field_get(_this, _suggestions)[_this.cursor]);
                        }
                        event.preventDefault();
                        break;
                }
            }
        });
        _this.options = [];
        _this.expression = '';
        _this.cursor = 0;
        return _this;
    }
    _create_class(SuggestionBox, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _get(_get_prototype_of(SuggestionBox.prototype), "connectedCallback", this).call(this);
                this.dispatchEvent(new SuggestionInitEvent([
                    [
                        'keydown',
                        _class_private_field_get(this, _handleKeyDownEvent)
                    ]
                ]));
            }
        },
        {
            key: "willUpdate",
            value: function willUpdate(changedProperties) {
                var _this = this;
                if (changedProperties.has('options')) {
                    this.options = Object.freeze(_to_consumable_array(this.options).sort());
                }
                if (changedProperties.has('expression') || changedProperties.has('options')) {
                    this.cursor = 0;
                    _class_private_field_set(this, _suggestions, this.options.filter(function(option) {
                        return (_this.suggestionFilter || defaultSuggestionFilter)(option, _this.expression);
                    }));
                }
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                if (_class_private_field_get(this, _suggestions).length === 0) {
                    return;
                }
                return html(_templateObject1(), _class_private_field_get(this, _suggestions).map(function(suggestion, index) {
                    return html(_templateObject(), classMap({
                        selected: index === _this.cursor
                    }), _class_private_method_get(_this, _dispatchSuggestEvent, dispatchSuggestEvent).bind(_this, suggestion), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item('suggestion').track({
                        click: true
                    }), suggestion);
                }));
            }
        }
    ]);
    return SuggestionBox;
}(LitElement), _define_property(_SuggestionBox, "styles", [
    _suggestionInput_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
]), _SuggestionBox);
__decorate([
    property(jsonPropertyOptions)
], SuggestionBox.prototype, "options", void 0);
__decorate([
    property()
], SuggestionBox.prototype, "expression", void 0);
__decorate([
    property()
], SuggestionBox.prototype, "suggestionFilter", void 0);
__decorate([
    state()
], SuggestionBox.prototype, "cursor", void 0);
SuggestionBox = __decorate([
    customElement('devtools-suggestion-box')
], SuggestionBox);
var SuggestionInput = (_cachedEditableContent = /*#__PURE__*/ new WeakMap(), _editableContent = /*#__PURE__*/ new WeakMap(), _handleBlurEvent = /*#__PURE__*/ new WeakMap(), _handleFocusEvent = /*#__PURE__*/ new WeakMap(), _handleKeyDownEvent1 = /*#__PURE__*/ new WeakMap(), _handleInputEvent = /*#__PURE__*/ new WeakMap(), _handleSuggestionInitEvent = /*#__PURE__*/ new WeakMap(), _handleSuggestEvent = /*#__PURE__*/ new WeakMap(), _SuggestionInput = /*#__PURE__*/ function(LitElement) {
    "use strict";
    _inherits(SuggestionInput, LitElement);
    var _super = _create_super(SuggestionInput);
    function SuggestionInput() {
        _class_call_check(this, SuggestionInput);
        var _this;
        _this = _super.call(this);
        _class_private_field_init(_assert_this_initialized(_this), _editableContent, {
            get: get_editableContent,
            set: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _cachedEditableContent, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleBlurEvent, {
            writable: true,
            value: function() {
                var _window_getSelection;
                (_window_getSelection = window.getSelection()) === null || _window_getSelection === void 0 ? void 0 : _window_getSelection.removeAllRanges();
                _this.value = _class_private_field_get(_this, _editableContent).value;
                _this.expression = _class_private_field_get(_this, _editableContent).value;
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleFocusEvent, {
            writable: true,
            value: function(event) {
                assert(_instanceof(event.target, Node));
                var range = document.createRange();
                range.selectNodeContents(event.target);
                var selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleKeyDownEvent1, {
            writable: true,
            value: function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleInputEvent, {
            writable: true,
            value: function(event) {
                _this.expression = event.target.value;
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleSuggestionInitEvent, {
            writable: true,
            value: function(event) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = event.listeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), name = _step_value[0], listener = _step_value[1];
                        _this.addEventListener(name, listener);
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
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleSuggestEvent, {
            writable: true,
            value: function(event) {
                _class_private_field_get(_this, _editableContent).value = event.suggestion;
                // If actions result in a `focus` after this blur, then the blur won't
                // happen. `setTimeout` guarantees `blur` will always come after `focus`.
                setTimeout(_this.blur.bind(_assert_this_initialized(_this)), 0);
            }
        });
        _this.options = [];
        _this.expression = '';
        _this.placeholder = '';
        _this.value = '';
        _this.disabled = false;
        _this.strikethrough = true;
        _this.mimeType = '';
        _this.autocomplete = true;
        _this.addEventListener('blur', _class_private_field_get(_assert_this_initialized(_this), _handleBlurEvent));
        var jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value().track({
            keydown: 'ArrowUp|ArrowDown|Enter',
            change: true,
            click: true
        });
        if (_this.jslogContext) {
            jslog = jslog.context(_this.jslogContext);
        }
        _this.setAttribute('jslog', jslog.toString());
        return _this;
    }
    _create_class(SuggestionInput, [
        {
            key: "willUpdate",
            value: function willUpdate(properties) {
                if (properties.has('value')) {
                    this.expression = this.value;
                }
            }
        },
        {
            key: "render",
            value: function render() {
                // clang-format off
                return html(_templateObject2(), this.disabled, classMap({
                    'strikethrough': !this.strikethrough
                }), 'done', this.value, this.mimeType, _class_private_field_get(this, _handleFocusEvent), _class_private_field_get(this, _handleInputEvent), _class_private_field_get(this, _handleKeyDownEvent1), this.placeholder, _class_private_field_get(this, _handleSuggestionInitEvent), _class_private_field_get(this, _handleSuggestEvent), this.options, this.suggestionFilter, this.autocomplete ? this.expression : '');
            // clang-format on
            }
        }
    ]);
    return SuggestionInput;
}(LitElement), _define_property(_SuggestionInput, "shadowRootOptions", _object_spread_props(_object_spread({}, LitElement.shadowRootOptions), {
    delegatesFocus: true
})), _define_property(_SuggestionInput, "styles", [
    _suggestionInput_css_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    _ui_components_code_highlighter_codeHighlighter_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
]), _SuggestionInput);
__decorate([
    property(jsonPropertyOptions)
], SuggestionInput.prototype, "options", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "autocomplete", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "suggestionFilter", void 0);
__decorate([
    state()
], SuggestionInput.prototype, "expression", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "placeholder", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "value", void 0);
__decorate([
    property({
        type: Boolean
    })
], SuggestionInput.prototype, "disabled", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "strikethrough", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "mimeType", void 0);
__decorate([
    property()
], SuggestionInput.prototype, "jslogContext", void 0);
SuggestionInput = __decorate([
    customElement('devtools-suggestion-input')
], SuggestionInput);
 //# sourceMappingURL=SuggestionInput.js.map
function highlight() {
    if (_class_private_field_get(this, _mimeType)) {
        void _ui_components_code_highlighter_code_highlighter_js__WEBPACK_IMPORTED_MODULE_0__.CodeHighlighter.highlightNode(this, _class_private_field_get(this, _mimeType));
    }
}
function moveCursor(delta) {
    this.cursor = mod(this.cursor + delta, _class_private_field_get(this, _suggestions).length);
}
function dispatchSuggestEvent(suggestion) {
    this.dispatchEvent(new SuggestEvent(suggestion));
}
function get_editableContent() {
    if (_class_private_field_get(this, _cachedEditableContent)) {
        return _class_private_field_get(this, _cachedEditableContent);
    }
    var node = this.renderRoot.querySelector('devtools-editable-content');
    if (!node) {
        throw new Error('Attempted to query node before rendering.');
    }
    _class_private_field_set(this, _cachedEditableContent, node);
    return node;
}


}),
"./ui/components/suggestion_input/suggestionInput.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n  font-size: inherit;\n  margin: 0;\n  padding: 0;\n}\n\n:host {\n  position: relative;\n}\n\ndevtools-editable-content {\n  background: transparent;\n  border: none;\n  color: var(--override-color-recorder-input, var(--sys-color-on-surface));\n  cursor: text;\n  display: inline-block;\n  line-height: 18px;\n  min-height: 18px;\n  min-width: 0.5em;\n  outline: none;\n  overflow-wrap: anywhere;\n}\n\ndevtools-editable-content:hover,\ndevtools-editable-content:focus {\n  box-shadow: 0 0 0 1px var(--sys-color-divider);\n  border-radius: 2px;\n}\n\ndevtools-editable-content[placeholder]:empty::before {\n  content: attr(placeholder);\n  color: var(--sys-color-on-surface);\n  opacity: 50%;\n}\n\ndevtools-editable-content[placeholder]:empty:focus::before {\n  content: "";\n}\n\ndevtools-suggestion-box {\n  position: absolute;\n  display: none;\n}\n\ndevtools-editable-content:focus ~ devtools-suggestion-box {\n  display: block;\n}\n\n.suggestions {\n  background-color: var(--sys-color-cdt-base-container);\n  box-shadow: var(--drop-shadow);\n  min-height: 1em;\n  min-width: 150px;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n  z-index: 100;\n  max-height: 350px;\n}\n\n.suggestions > li {\n  padding: 1px;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  font-family: var(--source-code-font-family);\n  font-size: var(--source-code-font-size);\n  color: var(--sys-color-on-surface);\n}\n\n.suggestions > li:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.suggestions > li.selected {\n  background-color: var(--sys-color-primary);\n  color: var(--sys-color-cdt-base-container);\n}\n\n.strikethrough {\n  text-decoration: line-through;\n}\n\n/*# sourceURL=suggestionInput.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);