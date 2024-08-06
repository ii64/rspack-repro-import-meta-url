"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_RecordingListView_js"], {
"./panels/recorder/components/RecordingListView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CreateRecordingEvent: function() { return CreateRecordingEvent; },
  DeleteRecordingEvent: function() { return DeleteRecordingEvent; },
  OpenRecordingEvent: function() { return OpenRecordingEvent; },
  PlayRecordingEvent: function() { return PlayRecordingEvent; },
  RecordingListView: function() { return RecordingListView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _recordingListView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recordingListView.css.js */ "./panels/recorder/components/recordingListView.css.js");
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
        "\n                              <",
        "\n                                title=",
        "\n                                .data=",
        "\n                                @click=",
        "\n                                @keydown=",
        "\n                              ></",
        '>\n                              <div class="divider"></div>'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n                  <div\n                    role="button"\n                    tabindex="0"\n                    aria-label=',
        '\n                    class="row"\n                    @keydown=',
        "\n                    @click=",
        "\n                    jslog=",
        '>\n                    <div class="icon">\n                      <',
        ' name="flow">\n                      </',
        '>\n                    </div>\n                    <div class="title">',
        '</div>\n                    <div class="actions">\n                      ',
        "\n                      <",
        '\n                        class="delete-recording-button"\n                        title=',
        "\n                        .data=",
        "\n                        @click=",
        "\n                        @keydown=",
        "\n                      ></",
        ">\n                    </div>\n                  </div>\n                "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '\n        <div class="wrapper">\n          <div class="header">\n            <h1>',
        "</h1>\n            <",
        "\n              .variant=",
        "\n              @click=",
        "\n              title=",
        "\n              .jslogContext=",
        "\n            >\n              ",
        "\n            </",
        '>\n          </div>\n          <div class="table">\n            ',
        "\n          </div>\n        </div>\n      "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "devtools-recording-list-view"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}








var UIStrings = {
    /**
     *@description The title of the page that contains a list of saved recordings that the user has..
     */ savedRecordings: 'Saved recordings',
    /**
     * @description The title of the button that leads to create a new recording page.
     */ createRecording: 'Create a new recording',
    /**
     * @description The title of the button that is shown next to each of the recordings and that triggers playing of the recording.
     */ playRecording: 'Play recording',
    /**
     * @description The title of the button that is shown next to each of the recordings and that triggers deletion of the recording.
     */ deleteRecording: 'Delete recording',
    /**
     * @description The title of the row corresponding to a recording. By clicking on the row, the user open the recording for editing.
     */ openRecording: 'Open recording'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/recorder/components/RecordingListView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var CreateRecordingEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(CreateRecordingEvent, Event1);
    var _super = _create_super(CreateRecordingEvent);
    function CreateRecordingEvent() {
        _class_call_check(this, CreateRecordingEvent);
        return _super.call(this, CreateRecordingEvent.eventName);
    }
    return CreateRecordingEvent;
}(_wrap_native_super(Event));
_define_property(CreateRecordingEvent, "eventName", 'createrecording');
var DeleteRecordingEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(DeleteRecordingEvent, Event1);
    var _super = _create_super(DeleteRecordingEvent);
    function DeleteRecordingEvent(storageName) {
        _class_call_check(this, DeleteRecordingEvent);
        var _this;
        _this = _super.call(this, DeleteRecordingEvent.eventName);
        _define_property(_assert_this_initialized(_this), "storageName", void 0);
        _this.storageName = storageName;
        return _this;
    }
    return DeleteRecordingEvent;
}(_wrap_native_super(Event));
_define_property(DeleteRecordingEvent, "eventName", 'deleterecording');
var OpenRecordingEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(OpenRecordingEvent, Event1);
    var _super = _create_super(OpenRecordingEvent);
    function OpenRecordingEvent(storageName) {
        _class_call_check(this, OpenRecordingEvent);
        var _this;
        _this = _super.call(this, OpenRecordingEvent.eventName);
        _define_property(_assert_this_initialized(_this), "storageName", void 0);
        _this.storageName = storageName;
        return _this;
    }
    return OpenRecordingEvent;
}(_wrap_native_super(Event));
_define_property(OpenRecordingEvent, "eventName", 'openrecording');
var PlayRecordingEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(PlayRecordingEvent, Event1);
    var _super = _create_super(PlayRecordingEvent);
    function PlayRecordingEvent(storageName) {
        _class_call_check(this, PlayRecordingEvent);
        var _this;
        _this = _super.call(this, PlayRecordingEvent.eventName);
        _define_property(_assert_this_initialized(_this), "storageName", void 0);
        _this.storageName = storageName;
        return _this;
    }
    return PlayRecordingEvent;
}(_wrap_native_super(Event));
_define_property(PlayRecordingEvent, "eventName", 'playrecording');
var _shadow = /*#__PURE__*/ new WeakMap(), _props = /*#__PURE__*/ new WeakMap(), _onCreateClick = /*#__PURE__*/ new WeakSet(), _onDeleteClick = /*#__PURE__*/ new WeakSet(), _onOpenClick = /*#__PURE__*/ new WeakSet(), _onPlayRecordingClick = /*#__PURE__*/ new WeakSet(), _onKeyDown = /*#__PURE__*/ new WeakSet(), _stopPropagation = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakMap();
var RecordingListView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(RecordingListView, HTMLElement1);
    var _super = _create_super(RecordingListView);
    function RecordingListView() {
        _class_call_check(this, RecordingListView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onCreateClick);
        _class_private_method_init(_assert_this_initialized(_this), _onDeleteClick);
        _class_private_method_init(_assert_this_initialized(_this), _onOpenClick);
        _class_private_method_init(_assert_this_initialized(_this), _onPlayRecordingClick);
        _class_private_method_init(_assert_this_initialized(_this), _onKeyDown);
        _class_private_method_init(_assert_this_initialized(_this), _stopPropagation);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _props, {
            writable: true,
            value: {
                recordings: [],
                replayAllowed: true
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _render, {
            writable: true,
            value: function() {
                // clang-format off
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject2(), i18nString(UIStrings.savedRecordings), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, "primary" /* Buttons.Button.Variant.PRIMARY */ , _class_private_method_get(_assert_this_initialized(_this), _onCreateClick, onCreateClick), _models_models_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.getTooltipForActions(i18nString(UIStrings.createRecording), "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */ ), 'create-recording', i18nString(UIStrings.createRecording), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, _class_private_field_get(_this, _props).recordings.map(function(recording) {
                    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject1(), i18nString(UIStrings.openRecording), _class_private_method_get(_this, _onKeyDown, onKeyDown).bind(_assert_this_initialized(_this), recording.storageName), _class_private_method_get(_this, _onOpenClick, onOpenClick).bind(_assert_this_initialized(_this), recording.storageName), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.item().track({
                        click: true
                    }).context('recording'), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, recording.name, _class_private_field_get(_this, _props).replayAllowed ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, i18nString(UIStrings.playRecording), {
                        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                        iconName: 'play',
                        jslogContext: 'play-recording'
                    }, _class_private_method_get(_this, _onPlayRecordingClick, onPlayRecordingClick).bind(_assert_this_initialized(_this), recording.storageName), _class_private_method_get(_assert_this_initialized(_this), _stopPropagation, stopPropagation), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName) : '', _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName, i18nString(UIStrings.deleteRecording), {
                        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                        iconName: 'bin',
                        jslogContext: 'delete-recording'
                    }, _class_private_method_get(_this, _onDeleteClick, onDeleteClick).bind(_assert_this_initialized(_this), recording.storageName), _class_private_method_get(_assert_this_initialized(_this), _stopPropagation, stopPropagation), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName);
                })), _class_private_field_get(_assert_this_initialized(_this), _shadow), {
                    host: _assert_this_initialized(_this)
                });
            // clang-format on
            }
        });
        return _this;
    }
    _create_class(RecordingListView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _recordingListView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ];
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "recordings",
            set: function set(recordings) {
                _class_private_field_get(this, _props).recordings = recordings;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        },
        {
            key: "replayAllowed",
            set: function set(value) {
                _class_private_field_get(this, _props).replayAllowed = value;
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        }
    ]);
    return RecordingListView;
}(_wrap_native_super(HTMLElement));
_define_property(RecordingListView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject3()));
function onCreateClick() {
    this.dispatchEvent(new CreateRecordingEvent());
}
function onDeleteClick(storageName, event) {
    event.stopPropagation();
    this.dispatchEvent(new DeleteRecordingEvent(storageName));
}
function onOpenClick(storageName, event) {
    event.stopPropagation();
    this.dispatchEvent(new OpenRecordingEvent(storageName));
}
function onPlayRecordingClick(storageName, event) {
    event.stopPropagation();
    this.dispatchEvent(new PlayRecordingEvent(storageName));
}
function onKeyDown(storageName, event) {
    if (event.key !== 'Enter') {
        return;
    }
    _class_private_method_get(this, _onOpenClick, onOpenClick).call(this, storageName, event);
}
function stopPropagation(event) {
    event.stopPropagation();
}
customElements.define('devtools-recording-list-view', RecordingListView); //# sourceMappingURL=RecordingListView.js.map


}),
"./panels/recorder/components/recordingListView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n*:focus,\n*:focus-visible {\n  outline: none;\n}\n\n.wrapper {\n  padding: 24px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\nh1 {\n  font-size: 16px;\n  line-height: 19px;\n  color: var(--sys-color-on-surface);\n  font-weight: normal;\n}\n\n.icon,\n.icon devtools-icon {\n  width: 20px;\n  height: 20px;\n  color: var(--sys-color-primary);\n}\n\n.table {\n  margin-top: 35px;\n}\n\n.title {\n  font-size: 13px;\n  color: var(--sys-color-on-surface);\n  margin-left: 10px;\n  flex: 1;\n  overflow-x: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.row {\n  display: flex;\n  align-items: center;\n  padding-right: 5px;\n  height: 28px;\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.row:focus-within,\n.row:hover {\n  background-color: var(--sys-color-state-hover-on-subtle);\n}\n\n.row:last-child {\n  border-bottom: none;\n}\n\n.actions {\n  display: flex;\n  align-items: center;\n}\n\n.actions button {\n  border: none;\n  background-color: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n}\n\n.actions .divider {\n  width: 1px;\n  height: 17px;\n  background-color: var(--sys-color-divider);\n  margin: 0 6px;\n}\n\n/*# sourceURL=recordingListView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);