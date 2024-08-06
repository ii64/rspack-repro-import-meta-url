"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_CreateRecordingView_js"], {
"./panels/recorder/components/CreateRecordingView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateRecordingView: function() { return CreateRecordingView; },
  RecordingCancelledEvent: function() { return RecordingCancelledEvent; },
  RecordingStartedEvent: function() { return RecordingStartedEvent; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _createRecordingView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createRecordingView.css.js */ "./panels/recorder/components/createRecordingView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable rulesdir/inject_checkbox_styles */ function _assert_this_initialized(self) {
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
        "devtools-create-recording-view"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n                  <label class="checkbox-label selector-type">\n                    <input\n                      @keydown=',
        "\n                      .value=",
        "\n                      jslog=",
        "\n                      checked=",
        '\n                      type="checkbox"\n                    />\n                    ',
        "\n                  </label>\n                "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n          <div class="error" role="alert">\n            ',
        "\n          </div>\n        "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n        <div class="wrapper">\n          <div class="header-wrapper">\n            <h1>',
        "</h1>\n            <",
        "\n              title=",
        "\n              jslog=",
        "\n              .data=",
        "\n              @click=",
        "\n            ></",
        '>\n          </div>\n          <label class="row-label" for="user-flow-name">',
        "</label>\n          <input\n            value=",
        "\n            @focus=",
        "\n            @keydown=",
        "\n            jslog=",
        '\n            class="devtools-text-input"\n            id="user-flow-name"\n          />\n          <label class="row-label" for="selector-attribute">\n            <span>',
        '</span>\n            <x-link\n              class="link" href="https://g.co/devtools/recorder#selector"\n              title=',
        "\n              jslog=",
        ">\n              <",
        ' name="help">\n              </',
        ">\n            </x-link>\n          </label>\n          <input\n            value=",
        '\n            placeholder="data-testid"\n            @keydown=',
        "\n            jslog=",
        '\n            class="devtools-text-input"\n            id="selector-attribute"\n          />\n          <label class="row-label">\n            <span>',
        '</span>\n            <x-link\n              class="link" href="https://g.co/devtools/recorder#selector"\n              title=',
        "\n              jslog=",
        ">\n              <",
        ' name="help">\n              </',
        '>\n            </x-link>\n          </label>\n          <div class="checkbox-container">\n            ',
        "\n          </div>\n\n          ",
        '\n        </div>\n        <div class="footer">\n          <div class="controls">\n            <devtools-control-button\n              @click=',
        "\n              .label=",
        "\n              .shape=",
        "\n              jslog=",
        "\n              title=",
        "\n            ></devtools-control-button>\n          </div>\n        </div>\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}









var UIStrings = {
    /**
     * @description The label for the input where the user enters a name for the new recording.
     */ recordingName: 'Recording name',
    /**
     * @description The button that start the recording with selected options.
     */ startRecording: 'Start recording',
    /**
     * @description The title of the page that contains the form for creating a new recording.
     */ createRecording: 'Create a new recording',
    /**
     * @description The error message that is shown if the user tries to create a recording without a name.
     */ recordingNameIsRequired: 'Recording name is required',
    /**
     * @description The label for the input where the user enters an attribute to be used for selector generation.
     */ selectorAttribute: 'Selector attribute',
    /**
     * @description The title for the close button where the user cancels a recording and returns back to previous view.
     */ cancelRecording: 'Cancel recording',
    /**
     * @description Label indicating a CSS (Cascading Style Sheets) selector type
     * (https://developer.mozilla.org/en-US/docs/Web/CSS). The label is used on a
     * checkbox which users can tick if they are interesting in recording CSS
     * selectors.
     */ selectorTypeCSS: 'CSS',
    /**
     * @description Label indicating a piercing CSS (Cascading Style Sheets)
     * selector type
     * (https://pptr.dev/guides/query-selectors#pierce-selectors-pierce). These
     * type of selectors behave like CSS selectors, but can pierce through
     * ShadowDOM. The label is used on a checkbox which users can tick if they are
     * interesting in recording CSS selectors.
     */ selectorTypePierce: 'Pierce',
    /**
     * @description Label indicating a ARIA (Accessible Rich Internet
     * Applications) selector type
     * (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA). The
     * label is used on a checkbox which users can tick if they are interesting in
     * recording ARIA selectors.
     */ selectorTypeARIA: 'ARIA',
    /**
     * @description Label indicating a text selector type. The label is used on a
     * checkbox which users can tick if they are interesting in recording text
     * selectors.
     */ selectorTypeText: 'Text',
    /**
     * @description Label indicating a XPath (XML Path Language) selector type
     * (https://en.wikipedia.org/wiki/XPath). The label is used on a checkbox
     * which users can tick if they are interesting in recording text selectors.
     */ selectorTypeXPath: 'XPath',
    /**
     * @description The label for the input that allows specifying selector types
     * that should be used during the recordering.
     */ selectorTypes: 'Selector types to record',
    /**
     * @description The error message that shows up if the user turns off
     * necessary selectors.
     */ includeNecessarySelectors: 'You must choose CSS, Pierce, or XPath as one of your options. Only these selectors are guaranteed to be recorded since ARIA and text selectors may not be unique.',
    /**
     * @description Title of a link to the developer documentation.
     */ learnMore: 'Learn more'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/CreateRecordingView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var RecordingStartedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RecordingStartedEvent, Event1);
    var _super = _create_super(RecordingStartedEvent);
    function RecordingStartedEvent(name, selectorTypesToRecord, selectorAttribute) {
        _class_call_check(this, RecordingStartedEvent);
        var _this;
        _this = _super.call(this, RecordingStartedEvent.eventName, {});
        _define_property(_assert_this_initialized(_this), "name", void 0);
        _define_property(_assert_this_initialized(_this), "selectorAttribute", void 0);
        _define_property(_assert_this_initialized(_this), "selectorTypesToRecord", void 0);
        _this.name = name;
        _this.selectorAttribute = selectorAttribute || undefined;
        _this.selectorTypesToRecord = selectorTypesToRecord;
        return _this;
    }
    return RecordingStartedEvent;
}(_wrap_native_super(Event));
_define_property(RecordingStartedEvent, "eventName", 'recordingstarted');
var RecordingCancelledEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RecordingCancelledEvent, Event1);
    var _super = _create_super(RecordingCancelledEvent);
    function RecordingCancelledEvent() {
        _class_call_check(this, RecordingCancelledEvent);
        return _super.call(this, RecordingCancelledEvent.eventName);
    }
    return RecordingCancelledEvent;
}(_wrap_native_super(Event));
_define_property(RecordingCancelledEvent, "eventName", 'recordingcancelled');
var _shadow = /*#__PURE__*/ new WeakMap(), _defaultRecordingName = /*#__PURE__*/ new WeakMap(), _error = /*#__PURE__*/ new WeakMap(), _recorderSettings = /*#__PURE__*/ new WeakMap(), _onKeyDown = /*#__PURE__*/ new WeakSet(), _dispatchRecordingCancelled = /*#__PURE__*/ new WeakSet(), _onInputFocus = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var CreateRecordingView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(CreateRecordingView, HTMLElement1);
    var _super = _create_super(CreateRecordingView);
    function CreateRecordingView() {
        _class_call_check(this, CreateRecordingView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onKeyDown);
        _class_private_method_init(_assert_this_initialized(_this), _dispatchRecordingCancelled);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _defaultRecordingName, {
            writable: true,
            value: ''
        });
        _class_private_field_init(_assert_this_initialized(_this), _error, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _recorderSettings, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _onInputFocus, {
            writable: true,
            value: function() {
                var _class_private_field_get_querySelector;
                (_class_private_field_get_querySelector = _class_private_field_get(_this, _shadow).querySelector('#user-flow-name')) === null || _class_private_field_get_querySelector === void 0 ? void 0 : _class_private_field_get_querySelector.select();
            }
        });
        _this.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('create-recording-view')));
        return _this;
    }
    _create_class(CreateRecordingView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _class_private_field_get_querySelector;
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _createRecordingView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"],
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.textInputStyles,
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.checkboxStyles
                ];
                _class_private_method_get(this, _render, render).call(this);
                (_class_private_field_get_querySelector = _class_private_field_get(this, _shadow).querySelector('input')) === null || _class_private_field_get_querySelector === void 0 ? void 0 : _class_private_field_get_querySelector.focus();
            }
        },
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _recorderSettings, data.recorderSettings);
                _class_private_field_set(this, _defaultRecordingName, _class_private_field_get(this, _recorderSettings).defaultTitle);
            }
        },
        {
            key: "startRecording",
            value: function startRecording() {
                var nameInput = _class_private_field_get(this, _shadow).querySelector('#user-flow-name');
                if (!nameInput) {
                    throw new Error('input#user-flow-name not found');
                }
                if (!_class_private_field_get(this, _recorderSettings)) {
                    throw new Error('settings not set');
                }
                if (!nameInput.value.trim()) {
                    _class_private_field_set(this, _error, new Error(i18nString(UIStrings.recordingNameIsRequired)));
                    _class_private_method_get(this, _render, render).call(this);
                    return;
                }
                var selectorTypeElements = _class_private_field_get(this, _shadow).querySelectorAll('.selector-type input[type=checkbox]');
                var selectorTypesToRecord = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = selectorTypeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var selectorType = _step.value;
                        var checkbox = selectorType;
                        var checkboxValue = checkbox.value;
                        if (checkbox.checked) {
                            selectorTypesToRecord.push(checkboxValue);
                        }
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
                if (!selectorTypesToRecord.includes(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.CSS) && !selectorTypesToRecord.includes(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.XPath) && !selectorTypesToRecord.includes(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.Pierce)) {
                    _class_private_field_set(this, _error, new Error(i18nString(UIStrings.includeNecessarySelectors)));
                    _class_private_method_get(this, _render, render).call(this);
                    return;
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var selectorType1 = _step1.value;
                        _class_private_field_get(this, _recorderSettings).setSelectorByType(selectorType1, selectorTypesToRecord.includes(selectorType1));
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
                var selectorAttributeEl = _class_private_field_get(this, _shadow).querySelector('#selector-attribute');
                var selectorAttribute = selectorAttributeEl.value.trim();
                _class_private_field_get(this, _recorderSettings).selectorAttribute = selectorAttribute;
                this.dispatchEvent(new RecordingStartedEvent(nameInput.value.trim(), selectorTypesToRecord, selectorAttribute));
            }
        }
    ]);
    return CreateRecordingView;
}(_wrap_native_super(HTMLElement));
_define_property(CreateRecordingView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal(_templateObject()));
function onKeyDown(event) {
    if (_class_private_field_get(this, _error)) {
        _class_private_field_set(this, _error, undefined);
        _class_private_method_get(this, _render, render).call(this);
    }
    var keyboardEvent = event;
    if (keyboardEvent.key === 'Enter') {
        this.startRecording();
        event.stopPropagation();
        event.preventDefault();
    }
}
function dispatchRecordingCancelled() {
    this.dispatchEvent(new RecordingCancelledEvent());
}
function render() {
    var _this = this;
    var _$_class_private_field_get;
    var selectorTypeToLabel = new Map([
        [
            _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.ARIA,
            i18nString(UIStrings.selectorTypeARIA)
        ],
        [
            _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.CSS,
            i18nString(UIStrings.selectorTypeCSS)
        ],
        [
            _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.Text,
            i18nString(UIStrings.selectorTypeText)
        ],
        [
            _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.XPath,
            i18nString(UIStrings.selectorTypeXPath)
        ],
        [
            _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.Pierce,
            i18nString(UIStrings.selectorTypePierce)
        ]
    ]);
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject3(), i18nString(UIStrings.createRecording), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStrings.cancelRecording), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.close().track({
        click: true
    }), {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: 'cross'
    }, _class_private_method_get(this, _dispatchRecordingCancelled, dispatchRecordingCancelled), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStrings.recordingName), _class_private_field_get(this, _defaultRecordingName), _class_private_field_get(this, _onInputFocus), _class_private_method_get(this, _onKeyDown, onKeyDown), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('user-flow-name').track({
        change: true
    }), i18nString(UIStrings.selectorAttribute), i18nString(UIStrings.learnMore), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.link('recorder-selector-help').track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, (_$_class_private_field_get = _class_private_field_get(this, _recorderSettings)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.selectorAttribute, _class_private_method_get(this, _onKeyDown, onKeyDown), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('selector-attribute').track({
        change: true
    }), i18nString(UIStrings.selectorTypes), i18nString(UIStrings.learnMore), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.link('recorder-selector-help').track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType).map(function(selectorType) {
        var _$_class_private_field_get;
        var checked = (_$_class_private_field_get = _class_private_field_get(_this, _recorderSettings)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.getSelectorByType(selectorType);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject1(), _class_private_method_get(_this, _onKeyDown, onKeyDown), selectorType, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle().track({
            click: true
        }).context("selector-".concat(selectorType)), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.ifDefined(checked ? checked : undefined), selectorTypeToLabel.get(selectorType) || selectorType);
    }), _class_private_field_get(this, _error) && _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html(_templateObject2(), _class_private_field_get(this, _error).message), this.startRecording, i18nString(UIStrings.startRecording), 'circle', _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action("chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */ ).track({
        click: true
    }), _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.getTooltipForActions(i18nString(UIStrings.startRecording), "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */ )), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-create-recording-view', CreateRecordingView); //# sourceMappingURL=CreateRecordingView.js.map


}),
"./panels/recorder/components/createRecordingView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: none;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n.wrapper {\n  padding: 24px;\n  flex: 1;\n}\n\nh1 {\n  font-size: 18px;\n  line-height: 24px;\n  letter-spacing: 0.02em;\n  color: var(--sys-color-on-surface);\n  margin: 0;\n  font-weight: normal;\n}\n\n.row-label {\n  font-weight: 500;\n  font-size: 11px;\n  line-height: 16px;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--sys-color-secondary);\n  margin-bottom: 8px;\n  margin-top: 32px;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  border-top: 1px solid var(--sys-color-divider);\n  padding: 12px;\n  background: var(--sys-color-cdt-base-container);\n}\n\n.controls {\n  display: flex;\n}\n\n.error {\n  margin: 16px 0 0;\n  padding: 8px;\n  background: var(--sys-color-error-container);\n  color: var(--sys-color-error);\n}\n\n.row-label .link:focus-visible {\n  outline: var(--sys-color-state-focus-ring) auto 1px;\n}\n\n.header-wrapper {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n\n.checkbox-label {\n  display: inline-flex;\n  align-items: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  gap: 4px;\n  line-height: 1.1;\n  padding: 4px;\n}\n\n.checkbox-container {\n  display: flex;\n  flex-flow: row wrap;\n  gap: 10px;\n}\n\ninput[type="checkbox"]:focus-visible {\n  outline: var(--sys-color-state-focus-ring) auto 1px;\n}\n\ndevtools-icon[name="help"] {\n  width: 16px;\n  height: 16px;\n}\n\n/*# sourceURL=createRecordingView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);