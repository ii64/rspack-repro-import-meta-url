"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryHighlightChipList_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DeleteMemoryHighlightEvent: function() { return DeleteMemoryHighlightEvent; },
  JumpToHighlightedMemoryEvent: function() { return JumpToHighlightedMemoryEvent; },
  LinearMemoryHighlightChipList: function() { return LinearMemoryHighlightChipList; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _linearMemoryHighlightChipList_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./linearMemoryHighlightChipList.css.js */ "./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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
function _templateObject() {
    var data = _tagged_template_literal([
        "devtools-linear-memory-highlight-chip-list"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n            <div class="highlight-chip-list">\n              ',
        "\n            </div>\n        "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n      <div class=",
        '>\n        <button class="jump-to-highlight-button" title=',
        "\n            jslog=",
        "\n            @click=",
        '>\n          <span class="source-code">\n            <span class="value">',
        '</span><span class="separator">: </span><span>',
        '</span>\n          </span>\n        </button>\n        <div class="delete-highlight-container">\n          <button class="delete-highlight-button" title=',
        "\n              jslog=",
        "\n              @click=",
        ">\n            <",
        " .data=",
        ">\n            </",
        ">\n          </button>\n        </div>\n      </div>\n    "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}





var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over an inspected variable's button in the Linear Memory Highlight Chip List.
    Clicking the button changes the displayed slice of computer memory in the Linear Memory inspector to contain the inspected variable's bytes.
     */ jumpToAddress: 'Jump to this memory',
    /**
     *@description Tooltip text that appears when hovering over an inspected variable's delete button in the Linear Memory Highlight Chip List.
     Clicking the delete button stops highlighting the variable's memory in the Linear Memory inspector.
     'Memory' is a slice of bytes in the computer memory.
     */ deleteHighlight: 'Stop highlighting this memory'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html;
var DeleteMemoryHighlightEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(DeleteMemoryHighlightEvent, Event1);
    var _super = _create_super(DeleteMemoryHighlightEvent);
    function DeleteMemoryHighlightEvent(highlightInfo) {
        _class_call_check(this, DeleteMemoryHighlightEvent);
        var _this;
        _this = _super.call(this, DeleteMemoryHighlightEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = highlightInfo;
        return _this;
    }
    return DeleteMemoryHighlightEvent;
}(_wrap_native_super(Event));
_define_property(DeleteMemoryHighlightEvent, "eventName", 'deletememoryhighlight');
var JumpToHighlightedMemoryEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(JumpToHighlightedMemoryEvent, Event1);
    var _super = _create_super(JumpToHighlightedMemoryEvent);
    function JumpToHighlightedMemoryEvent(address) {
        _class_call_check(this, JumpToHighlightedMemoryEvent);
        var _this;
        _this = _super.call(this, JumpToHighlightedMemoryEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = address;
        return _this;
    }
    return JumpToHighlightedMemoryEvent;
}(_wrap_native_super(Event));
_define_property(JumpToHighlightedMemoryEvent, "eventName", 'jumptohighlightedmemory');
var _shadow = /*#__PURE__*/ new WeakMap(), _highlightedAreas = /*#__PURE__*/ new WeakMap(), _focusedMemoryHighlight = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _createChip = /*#__PURE__*/ new WeakSet(), _onJumpToHighlightClick = /*#__PURE__*/ new WeakSet(), _onDeleteHighlightClick = /*#__PURE__*/ new WeakSet();
var LinearMemoryHighlightChipList = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(LinearMemoryHighlightChipList, HTMLElement1);
    var _super = _create_super(LinearMemoryHighlightChipList);
    function LinearMemoryHighlightChipList() {
        _class_call_check(this, LinearMemoryHighlightChipList);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _createChip);
        _class_private_method_init(_assert_this_initialized(_this), _onJumpToHighlightClick);
        _class_private_method_init(_assert_this_initialized(_this), _onDeleteHighlightClick);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _highlightedAreas, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _focusedMemoryHighlight, {
            writable: true,
            value: void 0
        });
        return _this;
    }
    _create_class(LinearMemoryHighlightChipList, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _linearMemoryHighlightChipList_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _highlightedAreas, data.highlightInfos);
                _class_private_field_set(this, _focusedMemoryHighlight, data.focusedMemoryHighlight);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return LinearMemoryHighlightChipList;
}(_wrap_native_super(HTMLElement));
_define_property(LinearMemoryHighlightChipList, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject()));
function render1() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    var chips = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _highlightedAreas)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var highlightInfo = _step.value;
            chips.push(_class_private_method_get(this, _createChip, createChip).call(this, highlightInfo));
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
    var result = html(_templateObject1(), chips);
    render(result, _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function createChip(highlightInfo) {
    var _this = this;
    var expressionName = highlightInfo.name || '<anonymous>';
    var expressionType = highlightInfo.type;
    var isFocused = highlightInfo === _class_private_field_get(this, _focusedMemoryHighlight);
    var classMap = {
        focused: isFocused,
        'highlight-chip': true
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return html(_templateObject2(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives.classMap(classMap), i18nString(UIStrings.jumpToAddress), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.jump-to-highlight').track({
        click: true
    }), function() {
        return _class_private_method_get(_this, _onJumpToHighlightClick, onJumpToHighlightClick).call(_this, highlightInfo.startAddress);
    }, expressionName, expressionType, i18nString(UIStrings.deleteHighlight), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action('linear-memory-inspector.delete-highlight').track({
        click: true
    }), function() {
        return _class_private_method_get(_this, _onDeleteHighlightClick, onDeleteHighlightClick).call(_this, highlightInfo);
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName, {
        iconName: 'cross',
        color: 'var(--icon-default-hover)',
        width: '16px'
    }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName);
// clang-format off
}
function onJumpToHighlightClick(startAddress) {
    this.dispatchEvent(new JumpToHighlightedMemoryEvent(startAddress));
}
function onDeleteHighlightClick(highlight) {
    this.dispatchEvent(new DeleteMemoryHighlightEvent(highlight));
}
customElements.define('devtools-linear-memory-highlight-chip-list', LinearMemoryHighlightChipList); //# sourceMappingURL=LinearMemoryHighlightChipList.js.map


}),
"./panels/linear_memory_inspector/components/linearMemoryHighlightChipList.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.highlight-chip-list {\n  min-height: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  align-items: center;\n  background-color: var(--sys-color-cdt-base-container);\n  margin: 8px 0;\n  gap: 8px;\n  row-gap: 6px;\n}\n\n.highlight-chip {\n  background: var(--sys-color-cdt-base-container);\n  border: 1px solid var(--sys-color-divider);\n  height: 18px;\n  border-radius: 4px;\n  flex: 0 0 auto;\n  max-width: 250px;\n  position: relative;\n  padding: 0 6px;\n}\n\n.highlight-chip:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.delete-highlight-container {\n  display: none;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  border-radius: 4px;\n  width: 24px;\n  align-items: center;\n  justify-content: center;\n}\n\n.delete-highlight-button {\n  cursor: pointer;\n  width: 13px;\n  height: 13px;\n  border: none;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.delete-highlight-button:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n  border-radius: 50%;\n}\n\n.jump-to-highlight-button {\n  cursor: pointer;\n  padding: 0;\n  border: none;\n  background: none;\n  height: 100%;\n  align-items: center;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.delete-highlight-button devtools-icon {\n  width: 13px;\n  height: 13px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.source-code {\n  font-family: var(--source-code-font-family);\n  font-size: var(--source-code-font-size);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--sys-color-on-surface);\n}\n\n.value {\n  color: var(--sys-color-token-tag);\n}\n\n.separator {\n  white-space: pre;\n  flex-shrink: 0;\n}\n\n.highlight-chip.focused {\n  outline: 2px solid var(--sys-color-state-focus-ring);\n  outline-offset: 2px;\n}\n\n.highlight-chip:hover > .delete-highlight-container {\n  display: flex;\n  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */\n  background: linear-gradient(90deg, transparent 0%, rgb(241 243 244) 25%); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n.highlight-chip.focused:hover > .delete-highlight-container {\n  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */\n  background: linear-gradient(90deg, transparent 0%, rgb(231 241 253) 25%); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n:host-context(.theme-with-dark-background) .highlight-chip:hover > .delete-highlight-container {\n  display: flex;\n  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */\n  background: linear-gradient(90deg, transparent 0%, rgb(41 42 45) 25%); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n:host-context(.theme-with-dark-background) .highlight-chip.focused:hover > .delete-highlight-container {\n  /* To avoid issues with stacking semi-transparent colors, we use a hardcoded solid color here. */\n  background: linear-gradient(90deg, transparent 0%, rgb(48 55 68) 25%); /* stylelint-disable-line plugin/use_theme_colors */\n}\n\n/*# sourceURL=linearMemoryHighlightChipList.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);