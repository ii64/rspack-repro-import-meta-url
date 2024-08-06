"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_CSSRuleValidator_js"], {
"./panels/elements/CSSRuleValidator.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AlignContentValidator: function() { return AlignContentValidator; },
  CSSRuleValidator: function() { return CSSRuleValidator; },
  FlexContainerValidator: function() { return FlexContainerValidator; },
  FlexGridValidator: function() { return FlexGridValidator; },
  FlexItemValidator: function() { return FlexItemValidator; },
  FlexOrGridItemValidator: function() { return FlexOrGridItemValidator; },
  FontVariationSettingsValidator: function() { return FontVariationSettingsValidator; },
  GridContainerValidator: function() { return GridContainerValidator; },
  GridItemValidator: function() { return GridItemValidator; },
  Hint: function() { return Hint; },
  MulticolFlexGridValidator: function() { return MulticolFlexGridValidator; },
  PaddingValidator: function() { return PaddingValidator; },
  PositionValidator: function() { return PositionValidator; },
  SizingValidator: function() { return SizingValidator; },
  ZIndexValidator: function() { return ZIndexValidator; },
  cssRuleValidatorsMap: function() { return cssRuleValidatorsMap; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSRuleValidatorHelper.js */ "./panels/elements/CSSRuleValidatorHelper.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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




var UIStrings = {
    /**
     *@description The message shown in the Style pane when the user hovers over a property that has no effect due to some other property.
     *@example {flex-wrap: nowrap} REASON_PROPERTY_DECLARATION_CODE
     *@example {align-content} AFFECTED_PROPERTY_DECLARATION_CODE
     */ ruleViolatedBySameElementRuleReason: 'The {REASON_PROPERTY_DECLARATION_CODE} property prevents {AFFECTED_PROPERTY_DECLARATION_CODE} from having an effect.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to some other property.
     *@example {flex-wrap} PROPERTY_NAME
      @example {nowrap} PROPERTY_VALUE
     */ ruleViolatedBySameElementRuleFix: 'Try setting {PROPERTY_NAME} to something other than {PROPERTY_VALUE}.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to not being a flex or grid container.
     *@example {display: grid} DISPLAY_GRID_RULE
     *@example {display: flex} DISPLAY_FLEX_RULE
     */ ruleViolatedBySameElementRuleChangeFlexOrGrid: 'Try adding {DISPLAY_GRID_RULE} or {DISPLAY_FLEX_RULE} to make this element into a container.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to the current property value.
     *@example {display: block} EXISTING_PROPERTY_DECLARATION
     *@example {display: flex} TARGET_PROPERTY_DECLARATION
     */ ruleViolatedBySameElementRuleChangeSuggestion: 'Try setting the {EXISTING_PROPERTY_DECLARATION} property to {TARGET_PROPERTY_DECLARATION}.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to properties of the parent element.
     *@example {display: block} REASON_PROPERTY_DECLARATION_CODE
     *@example {flex} AFFECTED_PROPERTY_DECLARATION_CODE
     */ ruleViolatedByParentElementRuleReason: 'The {REASON_PROPERTY_DECLARATION_CODE} property on the parent element prevents {AFFECTED_PROPERTY_DECLARATION_CODE} from having an effect.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to the properties of the parent element.
     *@example {display: block} EXISTING_PARENT_ELEMENT_RULE
     *@example {display: flex} TARGET_PARENT_ELEMENT_RULE
     */ ruleViolatedByParentElementRuleFix: 'Try setting the {EXISTING_PARENT_ELEMENT_RULE} property on the parent to {TARGET_PARENT_ELEMENT_RULE}.',
    /**
     *@description The warning text shown in Elements panel when font-variation-settings don't match allowed values
     *@example {wdth} PH1
     *@example {100} PH2
     *@example {10} PH3
     *@example {20} PH4
     *@example {Arial} PH5
     */ fontVariationSettingsWarning: 'Value for setting “{PH1}” {PH2} is outside the supported range [{PH3}, {PH4}] for font-family “{PH5}”.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect on flex or grid child items.
     *@example {flex} CONTAINER_DISPLAY_NAME
     *@example {align-contents} PROPERTY_NAME
     */ flexGridContainerPropertyRuleReason: 'This element is a {CONTAINER_DISPLAY_NAME} item, i.e. a child of a {CONTAINER_DISPLAY_NAME} container, but {PROPERTY_NAME} only applies to containers.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect on flex or grid child items.
     *@example {align-contents} PROPERTY_NAME
     *@example {align-self} ALTERNATIVE_PROPERTY_NAME
     */ flexGridContainerPropertyRuleFix: 'Try setting the {PROPERTY_NAME} on the container element or use {ALTERNATIVE_PROPERTY_NAME} instead.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/CSSRuleValidator.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _hintMessage = /*#__PURE__*/ new WeakMap(), _possibleFixMessage = /*#__PURE__*/ new WeakMap(), _learnMoreLink = /*#__PURE__*/ new WeakMap();
var Hint = /*#__PURE__*/ function() {
    "use strict";
    function Hint(hintMessage, possibleFixMessage, learnMoreLink) {
        _class_call_check(this, Hint);
        _class_private_field_init(this, _hintMessage, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _possibleFixMessage, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _learnMoreLink, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _hintMessage, hintMessage);
        _class_private_field_set(this, _possibleFixMessage, possibleFixMessage);
        _class_private_field_set(this, _learnMoreLink, learnMoreLink);
    }
    _create_class(Hint, [
        {
            key: "getMessage",
            value: function getMessage() {
                return _class_private_field_get(this, _hintMessage);
            }
        },
        {
            key: "getPossibleFixMessage",
            value: function getPossibleFixMessage() {
                return _class_private_field_get(this, _possibleFixMessage);
            }
        },
        {
            key: "getLearnMoreLink",
            value: function getLearnMoreLink() {
                return _class_private_field_get(this, _learnMoreLink);
            }
        }
    ]);
    return Hint;
}();
var _affectedProperties = /*#__PURE__*/ new WeakMap();
var CSSRuleValidator = /*#__PURE__*/ function() {
    "use strict";
    function CSSRuleValidator(affectedProperties) {
        _class_call_check(this, CSSRuleValidator);
        _class_private_field_init(this, _affectedProperties, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _affectedProperties, affectedProperties);
    }
    _create_class(CSSRuleValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 0 /* Host.UserMetrics.CSSHintType.Other */ ;
            }
        },
        {
            key: "getApplicableProperties",
            value: function getApplicableProperties() {
                return _class_private_field_get(this, _affectedProperties);
            }
        }
    ]);
    return CSSRuleValidator;
}();
var AlignContentValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(AlignContentValidator, CSSRuleValidator);
    var _super = _create_super(AlignContentValidator);
    function AlignContentValidator() {
        _class_call_check(this, AlignContentValidator);
        return _super.call(this, [
            'align-content'
        ]);
    }
    _create_class(AlignContentValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 1 /* Host.UserMetrics.CSSHintType.AlignContent */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(_propertyName, computedStyles) {
                if (!computedStyles) {
                    return;
                }
                var isFlex = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles);
                if (!isFlex && !(0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isBlockContainer)(computedStyles) && !(0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
                    var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'));
                    var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('align-content');
                    return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                        'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                        'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                    }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                        PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
                        PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'))
                    }));
                }
                if (!isFlex) {
                    return;
                }
                if (computedStyles.get('flex-wrap') !== 'nowrap') {
                    return;
                }
                var reasonPropertyDeclaration1 = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('flex-wrap', 'nowrap');
                var affectedPropertyDeclarationCode1 = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('align-content');
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration1,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode1
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                    PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('flex-wrap'),
                    PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)('nowrap')
                }));
            }
        }
    ]);
    return AlignContentValidator;
}(CSSRuleValidator);
var FlexItemValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(FlexItemValidator, CSSRuleValidator);
    var _super = _create_super(FlexItemValidator);
    function FlexItemValidator() {
        _class_call_check(this, FlexItemValidator);
        return _super.call(this, [
            'flex',
            'flex-basis',
            'flex-grow',
            'flex-shrink'
        ]);
    }
    _create_class(FlexItemValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 2 /* Host.UserMetrics.CSSHintType.FlexItem */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles, parentComputedStyles) {
                if (!parentComputedStyles) {
                    return;
                }
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', parentComputedStyles === null || parentComputedStyles === void 0 ? void 0 : parentComputedStyles.get('display'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                var targetParentPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex');
                return new Hint(i18nString(UIStrings.ruleViolatedByParentElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedByParentElementRuleFix, {
                    'EXISTING_PARENT_ELEMENT_RULE': reasonPropertyDeclaration,
                    'TARGET_PARENT_ELEMENT_RULE': targetParentPropertyDeclaration
                }));
            }
        }
    ]);
    return FlexItemValidator;
}(CSSRuleValidator);
var FlexContainerValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(FlexContainerValidator, CSSRuleValidator);
    var _super = _create_super(FlexContainerValidator);
    function FlexContainerValidator() {
        _class_call_check(this, FlexContainerValidator);
        return _super.call(this, [
            'flex-direction',
            'flex-flow',
            'flex-wrap'
        ]);
    }
    _create_class(FlexContainerValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 3 /* Host.UserMetrics.CSSHintType.FlexContainer */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles) {
                if (!computedStyles) {
                    return;
                }
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'));
                var targetRuleCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex');
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleChangeSuggestion, {
                    'EXISTING_PROPERTY_DECLARATION': reasonPropertyDeclaration,
                    'TARGET_PROPERTY_DECLARATION': targetRuleCode
                }));
            }
        }
    ]);
    return FlexContainerValidator;
}(CSSRuleValidator);
var GridContainerValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(GridContainerValidator, CSSRuleValidator);
    var _super = _create_super(GridContainerValidator);
    function GridContainerValidator() {
        _class_call_check(this, GridContainerValidator);
        return _super.call(this, [
            'grid',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows'
        ]);
    }
    _create_class(GridContainerValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 4 /* Host.UserMetrics.CSSHintType.GridContainer */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles) {
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'));
                var targetRuleCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid');
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleChangeSuggestion, {
                    'EXISTING_PROPERTY_DECLARATION': reasonPropertyDeclaration,
                    'TARGET_PROPERTY_DECLARATION': targetRuleCode
                }));
            }
        }
    ]);
    return GridContainerValidator;
}(CSSRuleValidator);
var GridItemValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(GridItemValidator, CSSRuleValidator);
    var _super = _create_super(GridItemValidator);
    function GridItemValidator() {
        _class_call_check(this, GridItemValidator);
        return _super.call(this, [
            'grid-area',
            'grid-column',
            'grid-row',
            'grid-row-end',
            'grid-row-start',
            // At the time of writing (November 2022), `justify-self` is only in effect in grid layout.
            // There are no other browsers that support `justify-self` in other layouts.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
            // TODO: move `justify-self` to other validator or change pop-over text if Chrome supports CSS Align in other layouts.
            'justify-self'
        ]);
    }
    _create_class(GridItemValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 5 /* Host.UserMetrics.CSSHintType.GridItem */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles, parentComputedStyles) {
                if (!parentComputedStyles) {
                    return;
                }
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', parentComputedStyles === null || parentComputedStyles === void 0 ? void 0 : parentComputedStyles.get('display'));
                var targetParentPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid');
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedByParentElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedByParentElementRuleFix, {
                    'EXISTING_PARENT_ELEMENT_RULE': reasonPropertyDeclaration,
                    'TARGET_PARENT_ELEMENT_RULE': targetParentPropertyDeclaration
                }));
            }
        }
    ]);
    return GridItemValidator;
}(CSSRuleValidator);
var FlexOrGridItemValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(FlexOrGridItemValidator, CSSRuleValidator);
    var _super = _create_super(FlexOrGridItemValidator);
    function FlexOrGridItemValidator() {
        _class_call_check(this, FlexOrGridItemValidator);
        return _super.call(this, [
            'place-self',
            'align-self',
            'order'
        ]);
    }
    _create_class(FlexOrGridItemValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 12 /* Host.UserMetrics.CSSHintType.FlexOrGridItem */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles, parentComputedStyles) {
                if (!parentComputedStyles) {
                    return;
                }
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', parentComputedStyles === null || parentComputedStyles === void 0 ? void 0 : parentComputedStyles.get('display'));
                var targetParentPropertyDeclaration = "".concat((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex'), " or ").concat((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedByParentElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedByParentElementRuleFix, {
                    'EXISTING_PARENT_ELEMENT_RULE': reasonPropertyDeclaration,
                    'TARGET_PARENT_ELEMENT_RULE': targetParentPropertyDeclaration
                }));
            }
        }
    ]);
    return FlexOrGridItemValidator;
}(CSSRuleValidator);
var FlexGridValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(FlexGridValidator, CSSRuleValidator);
    var _super = _create_super(FlexGridValidator);
    function FlexGridValidator() {
        _class_call_check(this, FlexGridValidator);
        return _super.call(this, [
            'justify-content',
            'place-content',
            'align-items'
        ]);
    }
    _create_class(FlexGridValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 6 /* Host.UserMetrics.CSSHintType.FlexGrid */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles, parentComputedStyles) {
                if (!computedStyles) {
                    return;
                }
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
                    return;
                }
                if (parentComputedStyles && ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles))) {
                    var reasonContainerDisplayName = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(parentComputedStyles.get('display'));
                    var reasonPropertyName = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                    var reasonAlternativePropertyName = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName === 'justify-content' ? 'justify-self' : 'align-self');
                    return new Hint(i18nString(UIStrings.flexGridContainerPropertyRuleReason, {
                        'CONTAINER_DISPLAY_NAME': reasonContainerDisplayName,
                        'PROPERTY_NAME': reasonPropertyName
                    }), i18nString(UIStrings.flexGridContainerPropertyRuleFix, {
                        'PROPERTY_NAME': reasonPropertyName,
                        'ALTERNATIVE_PROPERTY_NAME': reasonAlternativePropertyName
                    }));
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles.get('display'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleChangeFlexOrGrid, {
                    'DISPLAY_GRID_RULE': (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid'),
                    'DISPLAY_FLEX_RULE': (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex')
                }));
            }
        }
    ]);
    return FlexGridValidator;
}(CSSRuleValidator);
var MulticolFlexGridValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(MulticolFlexGridValidator, CSSRuleValidator);
    var _super = _create_super(MulticolFlexGridValidator);
    function MulticolFlexGridValidator() {
        _class_call_check(this, MulticolFlexGridValidator);
        return _super.call(this, [
            'gap',
            'column-gap',
            'row-gap',
            'grid-gap',
            'grid-column-gap',
            'grid-column-end',
            'grid-row-gap'
        ]);
    }
    _create_class(MulticolFlexGridValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 7 /* Host.UserMetrics.CSSHintType.MulticolFlexGrid */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles) {
                if (!computedStyles) {
                    return;
                }
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isMulticolContainer)(computedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                    PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
                    PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'))
                }));
            }
        }
    ]);
    return MulticolFlexGridValidator;
}(CSSRuleValidator);
var PaddingValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(PaddingValidator, CSSRuleValidator);
    var _super = _create_super(PaddingValidator);
    function PaddingValidator() {
        _class_call_check(this, PaddingValidator);
        return _super.call(this, [
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left'
        ]);
    }
    _create_class(PaddingValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 8 /* Host.UserMetrics.CSSHintType.Padding */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles) {
                var display = computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display');
                if (!display) {
                    return;
                }
                var tableAttributes = [
                    'table-row-group',
                    'table-header-group',
                    'table-footer-group',
                    'table-row',
                    'table-column-group',
                    'table-column'
                ];
                if (!tableAttributes.includes(display)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                    PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
                    PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'))
                }));
            }
        }
    ]);
    return PaddingValidator;
}(CSSRuleValidator);
var PositionValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(PositionValidator, CSSRuleValidator);
    var _super = _create_super(PositionValidator);
    function PositionValidator() {
        _class_call_check(this, PositionValidator);
        return _super.call(this, [
            'top',
            'right',
            'bottom',
            'left'
        ]);
    }
    _create_class(PositionValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 9 /* Host.UserMetrics.CSSHintType.Position */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles) {
                var position = computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('position');
                if (!position) {
                    return;
                }
                if (position !== 'static') {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('position', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('position'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                    PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('position'),
                    PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('position'))
                }));
            }
        }
    ]);
    return PositionValidator;
}(CSSRuleValidator);
var ZIndexValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(ZIndexValidator, CSSRuleValidator);
    var _super = _create_super(ZIndexValidator);
    function ZIndexValidator() {
        _class_call_check(this, ZIndexValidator);
        return _super.call(this, [
            'z-index'
        ]);
    }
    _create_class(ZIndexValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 10 /* Host.UserMetrics.CSSHintType.ZIndex */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles, parentComputedStyles) {
                var position = computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('position');
                if (!position) {
                    return;
                }
                if ([
                    'absolute',
                    'relative',
                    'fixed',
                    'sticky'
                ].includes(position) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('position', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('position'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                    PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('position'),
                    PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('position'))
                }));
            }
        }
    ]);
    return ZIndexValidator;
}(CSSRuleValidator);
/**
 * Validates if CSS width/height are having an effect on an element.
 * See "Applies to" in https://www.w3.org/TR/css-sizing-3/#propdef-width.
 * See "Applies to" in https://www.w3.org/TR/css-sizing-3/#propdef-height.
 */ var SizingValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(SizingValidator, CSSRuleValidator);
    var _super = _create_super(SizingValidator);
    function SizingValidator() {
        _class_call_check(this, SizingValidator);
        return _super.call(this, [
            'width',
            'height'
        ]);
    }
    _create_class(SizingValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 11 /* Host.UserMetrics.CSSHintType.Sizing */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles, parentComputedStyles, nodeName) {
                if (!computedStyles || !nodeName) {
                    return;
                }
                if (!(0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isInlineElement)(computedStyles)) {
                    return;
                }
                // See https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements.
                if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isPossiblyReplacedElement)(nodeName)) {
                    return;
                }
                var reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'));
                var affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
                return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                    'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                    'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode
                }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                    PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
                    PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles === null || computedStyles === void 0 ? void 0 : computedStyles.get('display'))
                }));
            }
        }
    ]);
    return SizingValidator;
}(CSSRuleValidator);
/**
 * Checks that font variation settings are applicable to the actual font.
 */ var FontVariationSettingsValidator = /*#__PURE__*/ function(CSSRuleValidator) {
    "use strict";
    _inherits(FontVariationSettingsValidator, CSSRuleValidator);
    var _super = _create_super(FontVariationSettingsValidator);
    function FontVariationSettingsValidator() {
        _class_call_check(this, FontVariationSettingsValidator);
        return _super.call(this, [
            'font-variation-settings'
        ]);
    }
    _create_class(FontVariationSettingsValidator, [
        {
            key: "getMetricType",
            value: function getMetricType() {
                return 13 /* Host.UserMetrics.CSSHintType.FontVariationSettings */ ;
            }
        },
        {
            key: "getHint",
            value: function getHint(propertyName, computedStyles, parentComputedStyles, nodeName, fontFaces) {
                if (!computedStyles) {
                    return;
                }
                var value = computedStyles.get('font-variation-settings');
                if (!value) {
                    return;
                }
                var fontFamily = computedStyles.get('font-family');
                if (!fontFamily) {
                    return;
                }
                var fontFamilies = new Set(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.parseFontFamily(fontFamily));
                var matchingFontFaces = (fontFaces || []).filter(function(f) {
                    return fontFamilies.has(f.getFontFamily());
                });
                var variationSettings = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.parseFontVariationSettings(value);
                var warnings = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = variationSettings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var elementSetting = _step.value;
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = matchingFontFaces[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var font = _step1.value;
                                var fontSetting = font.getVariationAxisByTag(elementSetting.tag);
                                if (!fontSetting) {
                                    continue;
                                }
                                if (elementSetting.value < fontSetting.minValue || elementSetting.value > fontSetting.maxValue) {
                                    warnings.push(i18nString(UIStrings.fontVariationSettingsWarning, {
                                        PH1: elementSetting.tag,
                                        PH2: elementSetting.value,
                                        PH3: fontSetting.minValue,
                                        PH4: fontSetting.maxValue,
                                        PH5: font.getFontFamily()
                                    }));
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
                if (!warnings.length) {
                    return;
                }
                return new Hint(warnings.join(' '), '');
            }
        }
    ]);
    return FontVariationSettingsValidator;
}(CSSRuleValidator);
var CSS_RULE_VALIDATORS = [
    AlignContentValidator,
    FlexContainerValidator,
    FlexGridValidator,
    FlexItemValidator,
    FlexOrGridItemValidator,
    FontVariationSettingsValidator,
    GridContainerValidator,
    GridItemValidator,
    MulticolFlexGridValidator,
    PaddingValidator,
    PositionValidator,
    SizingValidator,
    ZIndexValidator
];
var setupCSSRulesValidators = function() {
    var validatorsMap = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = CSS_RULE_VALIDATORS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var validatorClass = _step.value;
            var validator = new validatorClass();
            var affectedProperties = validator.getApplicableProperties();
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = affectedProperties[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var affectedProperty = _step1.value;
                    var propertyValidators = validatorsMap.get(affectedProperty);
                    if (propertyValidators === undefined) {
                        propertyValidators = [];
                    }
                    propertyValidators.push(validator);
                    validatorsMap.set(affectedProperty, propertyValidators);
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
    return validatorsMap;
};
var cssRuleValidatorsMap = setupCSSRulesValidators(); //# sourceMappingURL=CSSRuleValidator.js.map


}),
"./panels/elements/CSSRuleValidatorHelper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  buildPropertyDefinitionText: function() { return buildPropertyDefinitionText; },
  buildPropertyName: function() { return buildPropertyName; },
  buildPropertyValue: function() { return buildPropertyValue; },
  isBlockContainer: function() { return isBlockContainer; },
  isFlexContainer: function() { return isFlexContainer; },
  isGridContainer: function() { return isGridContainer; },
  isInlineElement: function() { return isInlineElement; },
  isMulticolContainer: function() { return isMulticolContainer; },
  isPossiblyReplacedElement: function() { return isPossiblyReplacedElement; }
});
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var buildPropertyDefinitionText = function(property, value) {
    if (value === undefined) {
        return buildPropertyName(property);
    }
    return '<code class="unbreakable-text"><span class="property">' + property + '</span>: ' + value + '</code>';
};
var buildPropertyName = function(property) {
    return '<code class="unbreakable-text"><span class="property">' + property + '</span></code>';
};
var buildPropertyValue = function(property) {
    return '<code class="unbreakable-text">' + property + '</code>';
};
var isFlexContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var display = computedStyles.get('display');
    return display === 'flex' || display === 'inline-flex';
};
var blockContainerDisplayValueSet = new Set([
    'block',
    'flow-root',
    'inline-block',
    'list-item',
    'table-caption',
    'table-cell'
]);
var isBlockContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var displayValue = computedStyles.get('display');
    if (!displayValue) {
        return false;
    }
    var split = displayValue.split(' ');
    if (split.length > 3) {
        return false;
    }
    // The order of keywords is canonicalized to "outside? inside? list-item?"
    // If the number of keywords is 3, it must be 'inline flow-root list-item'.
    if (split.length === 3) {
        return split[2] === 'list-item';
    }
    if (split.length === 2) {
        return split[1] === 'list-item' && split[0] !== 'inline';
    }
    return blockContainerDisplayValueSet.has(split[0]);
};
var isInlineElement = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    return computedStyles.get('display') === 'inline';
};
// See https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements
var possiblyReplacedElements = new Set([
    'audio',
    'canvas',
    'embed',
    'iframe',
    'img',
    'input',
    'object',
    'video'
]);
var isPossiblyReplacedElement = function(nodeName) {
    if (!nodeName) {
        return false;
    }
    return possiblyReplacedElements.has(nodeName);
};
var isGridContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var display = computedStyles.get('display');
    return display === 'grid' || display === 'inline-grid';
};
var isMulticolContainer = function(computedStyles) {
    if (!computedStyles) {
        return false;
    }
    var columnWidth = computedStyles.get('column-width');
    var columnCount = computedStyles.get('column-count');
    return columnWidth !== 'auto' || columnCount !== 'auto';
}; //# sourceMappingURL=CSSRuleValidatorHelper.js.map


}),

}]);