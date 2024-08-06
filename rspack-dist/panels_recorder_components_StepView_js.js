"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_StepView_js"], {
"./panels/recorder/components/StepView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AddBreakpointEvent: function() { return AddBreakpointEvent; },
  AddStep: function() { return AddStep; },
  CaptureSelectorsEvent: function() { return CaptureSelectorsEvent; },
  CopyStepEvent: function() { return CopyStepEvent; },
  RemoveBreakpointEvent: function() { return RemoveBreakpointEvent; },
  RemoveStep: function() { return RemoveStep; },
  StepChanged: function() { return StepChanged; },
  StepView: function() { return StepView; },
  StopSelectorsCaptureEvent: function() { return StopSelectorsCaptureEvent; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */var _stepView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stepView.css.js */ "./panels/recorder/components/stepView.css.js");
/* harmony import */var _TimelineSection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TimelineSection.js */ "./panels/recorder/components/TimelineSection.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* Some view input callbacks might be handled outside of LitHtml and we
   bind all of them upfront. We disable the lit_html_host_this since we
   do not define any host for LitHtml.render and the rule is not happy
   about it. */ /* eslint-disable rulesdir/lit_html_host_this */ function _assert_this_initialized(self) {
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
        '<span class="fallback">(No Title)</span>'
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n    <",
        '\n      class="step-actions"\n      title=',
        "\n      aria-label=",
        "\n      @click=",
        "\n      @keydown=",
        "\n      jslog=",
        "\n      .data=",
        "\n    ></",
        ">\n  "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<",
        '\n                  class="chevron"\n                  jslog=',
        '\n                  name="triangle-down">\n                </',
        ">"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<devtools-recorder-step-editor\n          class=",
        "\n          .step=",
        "\n          .disabled=",
        "\n          @stepedited=",
        ">\n        </devtools-recorder-step-editor>"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<devtools-recorder-step-editor\n          .step=",
        "\n          .isTypeEditable=",
        "\n          .disabled=",
        "\n          @stepedited=",
        ">\n        </devtools-recorder-step-editor>"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        '\n        <div class="error" role="alert">\n          ',
        "\n        </div>\n      "
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n    <",
        " .data=",
        " @contextmenu=",
        " data-step-index=",
        " data-section-index=",
        " class=",
        '>\n      <svg slot="icon" width="24" height="24" height="100%" class="icon">\n        <circle class="circle-icon"/>\n        <g class="error-icon">\n          <path d="M1.5 1.5L6.5 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n          <path d="M1.5 6.5L6.5 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>\n        </g>\n        <path @click=',
        " jslog=",
        ' class="breakpoint-icon" d="M2.5 5.5H17.7098L21.4241 12L17.7098 18.5H2.5V5.5Z"/>\n      </svg>\n      <div class="summary">\n        <div class="title-container ',
        '"\n          @click=',
        "\n          @keydown=",
        '\n          tabindex="0"\n          jslog=',
        "\n          aria-role=",
        "\n          aria-label=",
        "\n        >\n          ",
        '\n          <div class="title">\n            <div class="main-title" title=',
        ">",
        '</div>\n            <div class="subtitle" title=',
        ">",
        '</div>\n          </div>\n        </div>\n        <div class="filler"></div>\n        ',
        '\n      </div>\n      <div class="details">\n        ',
        "\n        ",
        "\n      </div>\n      ",
        "\n    </",
        ">\n  "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "devtools-step-view"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}











var UIStrings = {
    /**
     *@description Title for the step type that configures the viewport
     */ setViewportClickTitle: 'Set viewport',
    /**
     *@description Title for the customStep step type
     */ customStepTitle: 'Custom step',
    /**
     *@description Title for the click step type
     */ clickStepTitle: 'Click',
    /**
     *@description Title for the double click step type
     */ doubleClickStepTitle: 'Double click',
    /**
     *@description Title for the hover step type
     */ hoverStepTitle: 'Hover',
    /**
     *@description Title for the emulateNetworkConditions step type
     */ emulateNetworkConditionsStepTitle: 'Emulate network conditions',
    /**
     *@description Title for the change step type
     */ changeStepTitle: 'Change',
    /**
     *@description Title for the close step type
     */ closeStepTitle: 'Close',
    /**
     *@description Title for the scroll step type
     */ scrollStepTitle: 'Scroll',
    /**
     *@description Title for the key up step type. `up` refers to the state of the keyboard key: it's released, i.e., up. It does not refer to the down arrow key specifically.
     */ keyUpStepTitle: 'Key up',
    /**
     *@description Title for the navigate step type
     */ navigateStepTitle: 'Navigate',
    /**
     *@description Title for the key down step type. `down` refers to the state of the keyboard key: it's pressed, i.e., down. It does not refer to the down arrow key specifically.
     */ keyDownStepTitle: 'Key down',
    /**
     *@description Title for the waitForElement step type
     */ waitForElementStepTitle: 'Wait for element',
    /**
     *@description Title for the waitForExpression step type
     */ waitForExpressionStepTitle: 'Wait for expression',
    /**
     *@description Title for elements with role button
     */ elementRoleButton: 'Button',
    /**
     *@description Title for elements with role input
     */ elementRoleInput: 'Input',
    /**
     *@description Default title for elements without a specific role
     */ elementRoleFallback: 'Element',
    /**
     *@description The title of the button in the step's context menu that adds a new step before the current one.
     */ addStepBefore: 'Add step before',
    /**
     *@description The title of the button in the step's context menu that adds a new step after the current one.
     */ addStepAfter: 'Add step after',
    /**
     *@description The title of the button in the step's context menu that removes the step.
     */ removeStep: 'Remove step',
    /**
     *@description The title of the button that open the step's context menu.
     */ openStepActions: 'Open step actions',
    /**
     *@description The title of the button in the step's context menu that adds a breakpoint.
     */ addBreakpoint: 'Add breakpoint',
    /**
     *@description The title of the button in the step's context menu that removes a breakpoint.
     */ removeBreakpoint: 'Remove breakpoint',
    /**
     * @description A menu item item in the context menu that expands another menu which list all
     * the formats the user can copy the recording as.
     */ copyAs: 'Copy as',
    /**
     * @description The title of the menu group that holds actions on recording steps.
     */ stepManagement: 'Manage steps',
    /**
     * @description The title of the menu group that holds actions related to breakpoints.
     */ breakpoints: 'Breakpoints'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/recorder/components/StepView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var CaptureSelectorsEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(CaptureSelectorsEvent, Event1);
    var _super = _create_super(CaptureSelectorsEvent);
    function CaptureSelectorsEvent(step) {
        _class_call_check(this, CaptureSelectorsEvent);
        var _this;
        _this = _super.call(this, CaptureSelectorsEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = step;
        return _this;
    }
    return CaptureSelectorsEvent;
}(_wrap_native_super(Event));
_define_property(CaptureSelectorsEvent, "eventName", 'captureselectors');
var StopSelectorsCaptureEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(StopSelectorsCaptureEvent, Event1);
    var _super = _create_super(StopSelectorsCaptureEvent);
    function StopSelectorsCaptureEvent() {
        _class_call_check(this, StopSelectorsCaptureEvent);
        return _super.call(this, StopSelectorsCaptureEvent.eventName, {
            bubbles: true,
            composed: true
        });
    }
    return StopSelectorsCaptureEvent;
}(_wrap_native_super(Event));
_define_property(StopSelectorsCaptureEvent, "eventName", 'stopselectorscapture');
var CopyStepEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(CopyStepEvent, Event1);
    var _super = _create_super(CopyStepEvent);
    function CopyStepEvent(step) {
        _class_call_check(this, CopyStepEvent);
        var _this;
        _this = _super.call(this, CopyStepEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "step", void 0);
        _this.step = step;
        return _this;
    }
    return CopyStepEvent;
}(_wrap_native_super(Event));
_define_property(CopyStepEvent, "eventName", 'copystep');
var StepChanged = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(StepChanged, Event1);
    var _super = _create_super(StepChanged);
    function StepChanged(currentStep, newStep) {
        _class_call_check(this, StepChanged);
        var _this;
        _this = _super.call(this, StepChanged.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "currentStep", void 0);
        _define_property(_assert_this_initialized(_this), "newStep", void 0);
        _this.currentStep = currentStep;
        _this.newStep = newStep;
        return _this;
    }
    return StepChanged;
}(_wrap_native_super(Event));
_define_property(StepChanged, "eventName", 'stepchanged');
var AddStep = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(AddStep, Event1);
    var _super = _create_super(AddStep);
    function AddStep(stepOrSection, position) {
        _class_call_check(this, AddStep);
        var _this;
        _this = _super.call(this, AddStep.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "position", void 0);
        _define_property(_assert_this_initialized(_this), "stepOrSection", void 0);
        _this.stepOrSection = stepOrSection;
        _this.position = position;
        return _this;
    }
    return AddStep;
}(_wrap_native_super(Event));
_define_property(AddStep, "eventName", 'addstep');
var RemoveStep = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RemoveStep, Event1);
    var _super = _create_super(RemoveStep);
    function RemoveStep(step) {
        _class_call_check(this, RemoveStep);
        var _this;
        _this = _super.call(this, RemoveStep.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "step", void 0);
        _this.step = step;
        return _this;
    }
    return RemoveStep;
}(_wrap_native_super(Event));
_define_property(RemoveStep, "eventName", 'removestep');
var AddBreakpointEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(AddBreakpointEvent, Event1);
    var _super = _create_super(AddBreakpointEvent);
    function AddBreakpointEvent(index) {
        _class_call_check(this, AddBreakpointEvent);
        var _this;
        _this = _super.call(this, AddBreakpointEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "index", void 0);
        _this.index = index;
        return _this;
    }
    return AddBreakpointEvent;
}(_wrap_native_super(Event));
_define_property(AddBreakpointEvent, "eventName", 'addbreakpoint');
var RemoveBreakpointEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(RemoveBreakpointEvent, Event1);
    var _super = _create_super(RemoveBreakpointEvent);
    function RemoveBreakpointEvent(index) {
        _class_call_check(this, RemoveBreakpointEvent);
        var _this;
        _this = _super.call(this, RemoveBreakpointEvent.eventName, {
            bubbles: true,
            composed: true
        });
        _define_property(_assert_this_initialized(_this), "index", void 0);
        _this.index = index;
        return _this;
    }
    return RemoveBreakpointEvent;
}(_wrap_native_super(Event));
_define_property(RemoveBreakpointEvent, "eventName", 'removebreakpoint');
var COPY_ACTION_PREFIX = 'copy-step-as-';
function getStepTypeTitle(input) {
    if (input.section) {
        return input.section.title ? input.section.title : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject());
    }
    if (!input.step) {
        throw new Error('Missing both step and section');
    }
    switch(input.step.type){
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.CustomStep:
            return i18nString(UIStrings.customStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.SetViewport:
            return i18nString(UIStrings.setViewportClickTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Click:
            return i18nString(UIStrings.clickStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.DoubleClick:
            return i18nString(UIStrings.doubleClickStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Hover:
            return i18nString(UIStrings.hoverStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.EmulateNetworkConditions:
            return i18nString(UIStrings.emulateNetworkConditionsStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Change:
            return i18nString(UIStrings.changeStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Close:
            return i18nString(UIStrings.closeStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Scroll:
            return i18nString(UIStrings.scrollStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.KeyUp:
            return i18nString(UIStrings.keyUpStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.KeyDown:
            return i18nString(UIStrings.keyDownStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForElement:
            return i18nString(UIStrings.waitForElementStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForExpression:
            return i18nString(UIStrings.waitForExpressionStepTitle);
        case _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Navigate:
            return i18nString(UIStrings.navigateStepTitle);
    }
}
function getElementRoleTitle(role) {
    switch(role){
        case 'button':
            return i18nString(UIStrings.elementRoleButton);
        case 'input':
            return i18nString(UIStrings.elementRoleInput);
        default:
            return i18nString(UIStrings.elementRoleFallback);
    }
}
function getSelectorPreview(step) {
    if (!step || !('selectors' in step)) {
        return '';
    }
    var ariaSelector = step.selectors.flat().find(function(selector) {
        return selector.startsWith('aria/');
    });
    if (!ariaSelector) {
        return '';
    }
    var m = ariaSelector.match(/^aria\/(.+?)(\[role="(.+)"\])?$/);
    if (!m) {
        return '';
    }
    return "".concat(getElementRoleTitle(m[3]), ' "').concat(m[1], '"');
}
function getSectionPreview(section) {
    if (!section) {
        return '';
    }
    return section.url;
}
function renderStepActions(input) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject1(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName, i18nString(UIStrings.openStepActions), i18nString(UIStrings.openStepActions), input.onStepContextMenu, function(event) {
        event.stopPropagation();
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('step-actions').track({
        click: true
    }), {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        iconName: 'dots-vertical',
        title: i18nString(UIStrings.openStepActions)
    }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName);
// clang-format on
}
function viewFunction(input, _output, target) {
    var _input_section;
    if (!input.step && !input.section) {
        return;
    }
    var stepClasses = {
        step: true,
        expanded: input.showDetails,
        'is-success': input.state === "success" /* State.Success */ ,
        'is-current': input.state === "current" /* State.Current */ ,
        'is-outstanding': input.state === "outstanding" /* State.Outstanding */ ,
        'is-error': input.state === "error" /* State.Error */ ,
        'is-stopped': input.state === "stopped" /* State.Stopped */ ,
        'is-start-of-group': input.isStartOfGroup,
        'is-first-section': input.isFirstSection,
        'has-breakpoint': input.hasBreakpoint
    };
    var isExpandable = Boolean(input.step);
    var mainTitle = getStepTypeTitle({
        step: input.step,
        section: input.section
    });
    var subtitle = input.step ? getSelectorPreview() : getSectionPreview();
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject6(), _TimelineSection_js__WEBPACK_IMPORTED_MODULE_10__.TimelineSection.litTagName, {
        isFirstSection: input.isFirstSection,
        isLastSection: input.isLastSection,
        isStartOfGroup: input.isStartOfGroup,
        isEndOfGroup: input.isEndOfGroup,
        isSelected: input.isSelected
    }, input.onStepContextMenu, input.stepIndex, input.sectionIndex, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.classMap(stepClasses), input.onBreakpointClick, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('breakpoint').track({
        click: true
    }), isExpandable ? 'action' : '', isExpandable && input.toggleShowDetails, isExpandable && input.onToggleShowDetailsKeydown, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.sectionHeader().track({
        click: true
    }), isExpandable ? 'button' : '', isExpandable ? 'Show details for step' : '', isExpandable ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject2(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.expand().track({
        click: true
    }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName) : '', mainTitle, mainTitle, subtitle, subtitle, renderStepActions(input), input.step && _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject3(), input.isSelected ? 'is-selected' : '', input.step, input.isPlaying, input.stepEdited), ((_input_section = input.section) === null || _input_section === void 0 ? void 0 : _input_section.causingStep) && _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject4(), input.section.causingStep, false, input.isPlaying, input.stepEdited), input.error && _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html(_templateObject5(), input.error.message), _TimelineSection_js__WEBPACK_IMPORTED_MODULE_10__.TimelineSection.litTagName), target);
// clang-format on
}
var _shadow = /*#__PURE__*/ new WeakMap(), _observer = /*#__PURE__*/ new WeakMap(), _viewInput = /*#__PURE__*/ new WeakMap(), _view = /*#__PURE__*/ new WeakMap(), _toggleShowDetails = /*#__PURE__*/ new WeakSet(), _onToggleShowDetailsKeydown = /*#__PURE__*/ new WeakSet(), _stepEdited = /*#__PURE__*/ new WeakSet(), _handleStepAction = /*#__PURE__*/ new WeakSet(), _onBreakpointClick = /*#__PURE__*/ new WeakSet(), _getActions = /*#__PURE__*/ new WeakMap(), _onStepContextMenu = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var StepView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(StepView, HTMLElement1);
    var _super = _create_super(StepView);
    function StepView(view) {
        _class_call_check(this, StepView);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _toggleShowDetails);
        _class_private_method_init(_assert_this_initialized(_this), _onToggleShowDetailsKeydown);
        _class_private_method_init(_assert_this_initialized(_this), _stepEdited);
        _class_private_method_init(_assert_this_initialized(_this), _handleStepAction);
        _class_private_method_init(_assert_this_initialized(_this), _onBreakpointClick);
        _class_private_method_init(_assert_this_initialized(_this), _onStepContextMenu);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _observer, {
            writable: true,
            value: new IntersectionObserver(function(result) {
                _class_private_field_get(_this, _viewInput).isVisible = result[0].isIntersecting;
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _viewInput, {
            writable: true,
            value: {
                state: "default" /* State.Default */ ,
                showDetails: false,
                isEndOfGroup: false,
                isStartOfGroup: false,
                stepIndex: 0,
                sectionIndex: 0,
                isFirstSection: false,
                isLastSection: false,
                isRecording: false,
                isPlaying: false,
                isVisible: false,
                hasBreakpoint: false,
                removable: true,
                builtInConverters: [],
                extensionConverters: [],
                isSelected: false,
                recorderSettings: undefined,
                actions: [],
                stepEdited: _class_private_method_get(_this, _stepEdited, stepEdited).bind(_assert_this_initialized(_this)),
                onBreakpointClick: _class_private_method_get(_this, _onBreakpointClick, onBreakpointClick).bind(_assert_this_initialized(_this)),
                handleStepAction: _class_private_method_get(_this, _handleStepAction, handleStepAction).bind(_assert_this_initialized(_this)),
                toggleShowDetails: _class_private_method_get(_this, _toggleShowDetails, toggleShowDetails).bind(_assert_this_initialized(_this)),
                onToggleShowDetailsKeydown: _class_private_method_get(_this, _onToggleShowDetailsKeydown, onToggleShowDetailsKeydown).bind(_assert_this_initialized(_this)),
                onStepContextMenu: _class_private_method_get(_this, _onStepContextMenu, onStepContextMenu).bind(_assert_this_initialized(_this))
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _view, {
            writable: true,
            value: viewFunction
        });
        _class_private_field_init(_assert_this_initialized(_this), _getActions, {
            writable: true,
            value: function() {
                var actions = [];
                if (!_class_private_field_get(_this, _viewInput).isPlaying) {
                    if (_class_private_field_get(_this, _viewInput).step) {
                        actions.push({
                            id: 'add-step-before',
                            label: i18nString(UIStrings.addStepBefore),
                            group: 'stepManagement',
                            groupTitle: i18nString(UIStrings.stepManagement)
                        });
                    }
                    actions.push({
                        id: 'add-step-after',
                        label: i18nString(UIStrings.addStepAfter),
                        group: 'stepManagement',
                        groupTitle: i18nString(UIStrings.stepManagement)
                    });
                    if (_class_private_field_get(_this, _viewInput).removable) {
                        actions.push({
                            id: 'remove-step',
                            group: 'stepManagement',
                            groupTitle: i18nString(UIStrings.stepManagement),
                            label: i18nString(UIStrings.removeStep)
                        });
                    }
                }
                if (_class_private_field_get(_this, _viewInput).step && !_class_private_field_get(_this, _viewInput).isRecording) {
                    if (_class_private_field_get(_this, _viewInput).hasBreakpoint) {
                        actions.push({
                            id: 'remove-breakpoint',
                            label: i18nString(UIStrings.removeBreakpoint),
                            group: 'breakPointManagement',
                            groupTitle: i18nString(UIStrings.breakpoints)
                        });
                    } else {
                        actions.push({
                            id: 'add-breakpoint',
                            label: i18nString(UIStrings.addBreakpoint),
                            group: 'breakPointManagement',
                            groupTitle: i18nString(UIStrings.breakpoints)
                        });
                    }
                }
                if (_class_private_field_get(_this, _viewInput).step) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = (_class_private_field_get(_this, _viewInput).builtInConverters || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var converter = _step.value;
                            actions.push({
                                id: COPY_ACTION_PREFIX + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(converter.getId()),
                                label: converter.getFormatName(),
                                group: 'copy',
                                groupTitle: i18nString(UIStrings.copyAs)
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
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = (_class_private_field_get(_this, _viewInput).extensionConverters || [])[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var converter1 = _step1.value;
                            actions.push({
                                id: COPY_ACTION_PREFIX + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(converter1.getId()),
                                label: converter1.getFormatName(),
                                group: 'copy',
                                groupTitle: i18nString(UIStrings.copyAs),
                                jslogContext: COPY_ACTION_PREFIX + 'extension'
                            });
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
                }
                return actions;
            }
        });
        if (view) {
            _class_private_field_set(_assert_this_initialized(_this), _view, view);
        }
        _this.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('step-view')));
        return _this;
    }
    _create_class(StepView, [
        {
            key: "data",
            set: function set(data) {
                var prevState = _class_private_field_get(this, _viewInput).state;
                _class_private_field_get(this, _viewInput).step = data.step;
                _class_private_field_get(this, _viewInput).section = data.section;
                _class_private_field_get(this, _viewInput).state = data.state;
                _class_private_field_get(this, _viewInput).error = data.error;
                _class_private_field_get(this, _viewInput).isEndOfGroup = data.isEndOfGroup;
                _class_private_field_get(this, _viewInput).isStartOfGroup = data.isStartOfGroup;
                _class_private_field_get(this, _viewInput).stepIndex = data.stepIndex;
                _class_private_field_get(this, _viewInput).sectionIndex = data.sectionIndex;
                _class_private_field_get(this, _viewInput).isFirstSection = data.isFirstSection;
                _class_private_field_get(this, _viewInput).isLastSection = data.isLastSection;
                _class_private_field_get(this, _viewInput).isRecording = data.isRecording;
                _class_private_field_get(this, _viewInput).isPlaying = data.isPlaying;
                _class_private_field_get(this, _viewInput).hasBreakpoint = data.hasBreakpoint;
                _class_private_field_get(this, _viewInput).removable = data.removable;
                _class_private_field_get(this, _viewInput).builtInConverters = data.builtInConverters;
                _class_private_field_get(this, _viewInput).extensionConverters = data.extensionConverters;
                _class_private_field_get(this, _viewInput).isSelected = data.isSelected;
                _class_private_field_get(this, _viewInput).recorderSettings = data.recorderSettings;
                _class_private_field_get(this, _viewInput).actions = _class_private_field_get(this, _getActions).call(this);
                _class_private_method_get(this, _render, render).call(this);
                if (_class_private_field_get(this, _viewInput).state !== prevState && _class_private_field_get(this, _viewInput).state === 'current' && !_class_private_field_get(this, _viewInput).isVisible) {
                    this.scrollIntoView();
                }
            }
        },
        {
            key: "step",
            get: function get() {
                return _class_private_field_get(this, _viewInput).step;
            }
        },
        {
            key: "section",
            get: function get() {
                return _class_private_field_get(this, _viewInput).section;
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _stepView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ];
                _class_private_field_get(this, _observer).observe(this);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                _class_private_field_get(this, _observer).unobserve(this);
            }
        }
    ]);
    return StepView;
}(_wrap_native_super(HTMLElement));
_define_property(StepView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal(_templateObject7()));
function toggleShowDetails() {
    _class_private_field_get(this, _viewInput).showDetails = !_class_private_field_get(this, _viewInput).showDetails;
    _class_private_method_get(this, _render, render).call(this);
}
function onToggleShowDetailsKeydown(event) {
    var keyboardEvent = event;
    if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
        _class_private_method_get(this, _toggleShowDetails, toggleShowDetails).call(this);
        event.stopPropagation();
        event.preventDefault();
    }
}
function stepEdited(event) {
    var _class_private_field_get_section;
    var step = _class_private_field_get(this, _viewInput).step || ((_class_private_field_get_section = _class_private_field_get(this, _viewInput).section) === null || _class_private_field_get_section === void 0 ? void 0 : _class_private_field_get_section.causingStep);
    if (!step) {
        throw new Error('Expected step.');
    }
    this.dispatchEvent(new StepChanged(step, event.data));
}
function handleStepAction(event) {
    switch(event.itemValue){
        case 'add-step-before':
            {
                var stepOrSection = _class_private_field_get(this, _viewInput).step || _class_private_field_get(this, _viewInput).section;
                if (!stepOrSection) {
                    throw new Error('Expected step or section.');
                }
                this.dispatchEvent(new AddStep(stepOrSection, "before" /* AddStepPosition.BEFORE */ ));
                break;
            }
        case 'add-step-after':
            {
                var stepOrSection1 = _class_private_field_get(this, _viewInput).step || _class_private_field_get(this, _viewInput).section;
                if (!stepOrSection1) {
                    throw new Error('Expected step or section.');
                }
                this.dispatchEvent(new AddStep(stepOrSection1, "after" /* AddStepPosition.AFTER */ ));
                break;
            }
        case 'remove-step':
            {
                var _class_private_field_get_section;
                var causingStep = (_class_private_field_get_section = _class_private_field_get(this, _viewInput).section) === null || _class_private_field_get_section === void 0 ? void 0 : _class_private_field_get_section.causingStep;
                if (!_class_private_field_get(this, _viewInput).step && !causingStep) {
                    throw new Error('Expected step.');
                }
                this.dispatchEvent(new RemoveStep(_class_private_field_get(this, _viewInput).step || causingStep));
                break;
            }
        case 'add-breakpoint':
            {
                if (!_class_private_field_get(this, _viewInput).step) {
                    throw new Error('Expected step');
                }
                this.dispatchEvent(new AddBreakpointEvent(_class_private_field_get(this, _viewInput).stepIndex));
                break;
            }
        case 'remove-breakpoint':
            {
                if (!_class_private_field_get(this, _viewInput).step) {
                    throw new Error('Expected step');
                }
                this.dispatchEvent(new RemoveBreakpointEvent(_class_private_field_get(this, _viewInput).stepIndex));
                break;
            }
        default:
            {
                var _class_private_field_get_section1;
                var actionId = event.itemValue;
                if (!actionId.startsWith(COPY_ACTION_PREFIX)) {
                    throw new Error('Unknown step action.');
                }
                var copyStep = _class_private_field_get(this, _viewInput).step || ((_class_private_field_get_section1 = _class_private_field_get(this, _viewInput).section) === null || _class_private_field_get_section1 === void 0 ? void 0 : _class_private_field_get_section1.causingStep);
                if (!copyStep) {
                    throw new Error('Step not found.');
                }
                var converterId = actionId.substring(COPY_ACTION_PREFIX.length);
                if (_class_private_field_get(this, _viewInput).recorderSettings) {
                    _class_private_field_get(this, _viewInput).recorderSettings.preferredCopyFormat = converterId;
                }
                this.dispatchEvent(new CopyStepEvent(structuredClone(copyStep)));
            }
    }
}
function onBreakpointClick() {
    if (_class_private_field_get(this, _viewInput).hasBreakpoint) {
        this.dispatchEvent(new RemoveBreakpointEvent(_class_private_field_get(this, _viewInput).stepIndex));
    } else {
        this.dispatchEvent(new AddBreakpointEvent(_class_private_field_get(this, _viewInput).stepIndex));
    }
    _class_private_method_get(this, _render, render).call(this);
}
function onStepContextMenu(event) {
    var _this = this;
    var buttonElement = _instanceof(event.target, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button) ? event.target : undefined;
    var menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event, {
        x: buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.getBoundingClientRect().left,
        y: buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.getBoundingClientRect().bottom
    });
    var actions = _class_private_field_get(this, _getActions).call(this);
    var copyActions = actions.filter(function(item) {
        return item.id.startsWith(COPY_ACTION_PREFIX);
    });
    var otherActions = actions.filter(function(item) {
        return !item.id.startsWith(COPY_ACTION_PREFIX);
    });
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        var _loop = function() {
            var item = _step.value;
            var section = menu.section(item.group);
            section.appendItem(item.label, function() {
                _class_private_method_get(_this, _handleStepAction, handleStepAction).call(_this, new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(item.id));
            }, {
                jslogContext: item.id
            });
        };
        for(var _iterator = otherActions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
    var preferredCopyAction = copyActions.find(function(item) {
        var _class_private_field_get_recorderSettings;
        return item.id === COPY_ACTION_PREFIX + ((_class_private_field_get_recorderSettings = _class_private_field_get(_this, _viewInput).recorderSettings) === null || _class_private_field_get_recorderSettings === void 0 ? void 0 : _class_private_field_get_recorderSettings.preferredCopyFormat);
    });
    if (preferredCopyAction) {
        menu.section('copy').appendItem(preferredCopyAction.label, function() {
            _class_private_method_get(_this, _handleStepAction, handleStepAction).call(_this, new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(preferredCopyAction.id));
        }, {
            jslogContext: preferredCopyAction.id
        });
    }
    if (copyActions.length) {
        var copyAs = menu.section('copy').appendSubMenuItem(i18nString(UIStrings.copyAs), false, 'copy');
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            var _loop1 = function() {
                var item = _step1.value;
                if (item === preferredCopyAction) {
                    return "continue";
                }
                copyAs.section(item.group).appendItem(item.label, function() {
                    _class_private_method_get(_this, _handleStepAction, handleStepAction).call(_this, new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(item.id));
                }, {
                    jslogContext: item.id
                });
            };
            for(var _iterator1 = copyActions[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop1();
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
    }
    void menu.show();
}
function render() {
    var output = {};
    _class_private_field_get(this, _view).call(this, _class_private_field_get(this, _viewInput), output, _class_private_field_get(this, _shadow));
}
customElements.define('devtools-step-view', StepView); //# sourceMappingURL=StepView.js.map


}),
"./panels/recorder/components/stepView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-size: inherit;\n}\n\n.title-container {\n  /* 18px for 3 dot menu icon */\n  max-width: calc(100% - 18px);\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0.03em;\n  display: flex;\n  flex-direction: row;\n  gap: 3px;\n  outline-offset: 3px;\n}\n\n.action {\n  display: flex;\n  align-items: flex-start;\n}\n\n.title {\n  flex: 1;\n  min-width: 0;\n}\n\n.is-start-of-group .title {\n  font-weight: bold;\n}\n\n.error-icon {\n  display: none;\n}\n\n.breakpoint-icon {\n  visibility: hidden;\n  cursor: pointer;\n  opacity: 0%;\n  fill: var(--sys-color-primary);\n  stroke: #1a73e8; /* stylelint-disable-line plugin/use_theme_colors */\n  transform: translate(-1.92px, -3px);\n}\n\n.circle-icon {\n  fill: var(--sys-color-primary);\n  stroke: var(--sys-color-cdt-base-container);\n  stroke-width: 4px;\n  r: 5px;\n  cx: 8px;\n  cy: 8px;\n}\n\n.is-start-of-group .circle-icon {\n  r: 7px;\n  fill: var(--sys-color-cdt-base-container);\n  stroke: var(--sys-color-primary);\n  stroke-width: 2px;\n}\n\n.step.is-success .circle-icon {\n  fill: var(--sys-color-primary);\n  stroke: var(--sys-color-primary);\n}\n\n.step.is-current .circle-icon {\n  stroke-dasharray: 24 10;\n  animation: rotate 1s linear infinite;\n  fill: var(--sys-color-cdt-base-container);\n  stroke: var(--sys-color-primary);\n  stroke-width: 2px;\n}\n\n.error {\n  margin: 16px 0 0;\n  padding: 8px;\n  background: var(--sys-color-error-container);\n  color: var(--sys-color-error);\n  position: relative;\n}\n\n@keyframes rotate {\n  0% {\n    transform: translate(8px, 8px) rotate(0) translate(-8px, -8px);\n  }\n\n  100% {\n    transform: translate(8px, 8px) rotate(360deg) translate(-8px, -8px);\n  }\n}\n\n.step.is-error .circle-icon {\n  fill: var(--sys-color-error);\n  stroke: var(--sys-color-error);\n}\n\n.step.is-error .error-icon {\n  display: block;\n  transform: translate(4px, 4px);\n}\n\n:host-context(.was-successful) .circle-icon {\n  animation: flash-circle 2s;\n}\n\n:host-context(.was-successful) .breakpoint-icon {\n  animation: flash-breakpoint-icon 2s;\n}\n\n@keyframes flash-circle {\n  25% {\n    fill: var(--override-color-recording-successful-text);\n    stroke: var(--override-color-recording-successful-text);\n  }\n\n  75% {\n    fill: var(--override-color-recording-successful-text);\n    stroke: var(--override-color-recording-successful-text);\n  }\n}\n\n@keyframes flash-breakpoint-icon {\n  25% {\n    fill: var(--override-color-recording-successful-text);\n    stroke: var(--override-color-recording-successful-text);\n  }\n\n  75% {\n    fill: var(--override-color-recording-successful-text);\n    stroke: var(--override-color-recording-successful-text);\n  }\n}\n\n.chevron {\n  width: 14px;\n  height: 14px;\n  transition: 200ms;\n  position: absolute;\n  top: 18px;\n  left: 24px;\n  transform: rotate(-90deg);\n  color: var(--sys-color-on-surface);\n}\n\n.expanded .chevron {\n  transform: rotate(0deg);\n}\n\n.is-start-of-group .chevron {\n  top: 34px;\n}\n\n.details {\n  display: none;\n  margin-top: 8px;\n  position: relative;\n}\n\n.expanded .details {\n  display: block;\n}\n\n.step-details {\n  overflow: auto;\n}\n\ndevtools-recorder-step-editor {\n  border: 1px solid var(--sys-color-neutral-outline);\n  padding: 3px 6px 6px;\n  margin-left: -6px;\n  border-radius: 3px;\n}\n\ndevtools-recorder-step-editor:hover {\n  border: 1px solid var(--sys-color-neutral-outline);\n}\n\ndevtools-recorder-step-editor.is-selected {\n  background-color: color-mix(in sRGB, var(--sys-color-tonal-container), var(--sys-color-cdt-base-container) 50%);\n  border: 1px solid var(--sys-color-tonal-outline);\n}\n\n.summary {\n  display: flex;\n  flex-flow: row nowrap;\n}\n\n.filler {\n  flex-grow: 1;\n}\n\n.subtitle {\n  font-weight: normal;\n  color: var(--sys-color-on-surface-subtle);\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.main-title {\n  word-break: break-all;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.step-actions {\n  border: none;\n  border-radius: 0;\n  height: 24px;\n\n  --override-select-menu-show-button-border-radius: 0;\n  --override-select-menu-show-button-outline: none;\n  --override-select-menu-show-button-padding: 0;\n}\n\n.step.has-breakpoint .circle-icon {\n  visibility: hidden;\n}\n\n.step:not(.is-start-of-group).has-breakpoint .breakpoint-icon {\n  visibility: visible;\n  opacity: 100%;\n}\n\n.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .circle-icon {\n  transition: opacity 0.2s;\n  opacity: 0%;\n}\n\n.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .error-icon {\n  visibility: hidden;\n}\n\n.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .breakpoint-icon {\n  transition: opacity 0.2s;\n  visibility: visible;\n  opacity: 50%;\n}\n\n/*# sourceURL=stepView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);