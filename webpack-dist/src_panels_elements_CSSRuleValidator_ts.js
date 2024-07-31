"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_CSSRuleValidator_ts"],{

/***/ "./src/panels/elements/CSSRuleValidator.ts":
/*!*************************************************!*\
  !*** ./src/panels/elements/CSSRuleValidator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlignContentValidator: () => (/* binding */ AlignContentValidator),
/* harmony export */   CSSRuleValidator: () => (/* binding */ CSSRuleValidator),
/* harmony export */   FlexContainerValidator: () => (/* binding */ FlexContainerValidator),
/* harmony export */   FlexGridValidator: () => (/* binding */ FlexGridValidator),
/* harmony export */   FlexItemValidator: () => (/* binding */ FlexItemValidator),
/* harmony export */   FlexOrGridItemValidator: () => (/* binding */ FlexOrGridItemValidator),
/* harmony export */   FontVariationSettingsValidator: () => (/* binding */ FontVariationSettingsValidator),
/* harmony export */   GridContainerValidator: () => (/* binding */ GridContainerValidator),
/* harmony export */   GridItemValidator: () => (/* binding */ GridItemValidator),
/* harmony export */   Hint: () => (/* binding */ Hint),
/* harmony export */   HintType: () => (/* binding */ HintType),
/* harmony export */   MulticolFlexGridValidator: () => (/* binding */ MulticolFlexGridValidator),
/* harmony export */   PaddingValidator: () => (/* binding */ PaddingValidator),
/* harmony export */   PositionValidator: () => (/* binding */ PositionValidator),
/* harmony export */   SizingValidator: () => (/* binding */ SizingValidator),
/* harmony export */   ZIndexValidator: () => (/* binding */ ZIndexValidator),
/* harmony export */   cssRuleValidatorsMap: () => (/* binding */ cssRuleValidatorsMap)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CSSRuleValidatorHelper.js */ "./src/panels/elements/CSSRuleValidatorHelper.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Hint_hintMessage, _Hint_possibleFixMessage, _Hint_learnMoreLink, _CSSRuleValidator_affectedProperties;




const UIStrings = {
    /**
     *@description The message shown in the Style pane when the user hovers over a property that has no effect due to some other property.
     *@example {flex-wrap: nowrap} REASON_PROPERTY_DECLARATION_CODE
     *@example {align-content} AFFECTED_PROPERTY_DECLARATION_CODE
     */
    ruleViolatedBySameElementRuleReason: 'The {REASON_PROPERTY_DECLARATION_CODE} property prevents {AFFECTED_PROPERTY_DECLARATION_CODE} from having an effect.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to some other property.
     *@example {flex-wrap} PROPERTY_NAME
      @example {nowrap} PROPERTY_VALUE
     */
    ruleViolatedBySameElementRuleFix: 'Try setting {PROPERTY_NAME} to something other than {PROPERTY_VALUE}.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to not being a flex or grid container.
     *@example {display: grid} DISPLAY_GRID_RULE
     *@example {display: flex} DISPLAY_FLEX_RULE
     */
    ruleViolatedBySameElementRuleChangeFlexOrGrid: 'Try adding {DISPLAY_GRID_RULE} or {DISPLAY_FLEX_RULE} to make this element into a container.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to the current property value.
     *@example {display: block} EXISTING_PROPERTY_DECLARATION
     *@example {display: flex} TARGET_PROPERTY_DECLARATION
     */
    ruleViolatedBySameElementRuleChangeSuggestion: 'Try setting the {EXISTING_PROPERTY_DECLARATION} property to {TARGET_PROPERTY_DECLARATION}.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to properties of the parent element.
     *@example {display: block} REASON_PROPERTY_DECLARATION_CODE
     *@example {flex} AFFECTED_PROPERTY_DECLARATION_CODE
     */
    ruleViolatedByParentElementRuleReason: 'The {REASON_PROPERTY_DECLARATION_CODE} property on the parent element prevents {AFFECTED_PROPERTY_DECLARATION_CODE} from having an effect.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect due to the properties of the parent element.
     *@example {display: block} EXISTING_PARENT_ELEMENT_RULE
     *@example {display: flex} TARGET_PARENT_ELEMENT_RULE
     */
    ruleViolatedByParentElementRuleFix: 'Try setting the {EXISTING_PARENT_ELEMENT_RULE} property on the parent to {TARGET_PARENT_ELEMENT_RULE}.',
    /**
     *@description The warning text shown in Elements panel when font-variation-settings don't match allowed values
     *@example {wdth} PH1
     *@example {100} PH2
     *@example {10} PH3
     *@example {20} PH4
     *@example {Arial} PH5
     */
    fontVariationSettingsWarning: 'Value for setting “{PH1}” {PH2} is outside the supported range [{PH3}, {PH4}] for font-family “{PH5}”.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect on flex or grid child items.
     *@example {flex} CONTAINER_DISPLAY_NAME
     *@example {align-contents} PROPERTY_NAME
     */
    flexGridContainerPropertyRuleReason: 'This element is a {CONTAINER_DISPLAY_NAME} item, i.e. a child of a {CONTAINER_DISPLAY_NAME} container, but {PROPERTY_NAME} only applies to containers.',
    /**
     *@description The message shown in the Style pane when the user hovers over a property declaration that has no effect on flex or grid child items.
     *@example {align-contents} PROPERTY_NAME
     *@example {align-self} ALTERNATIVE_PROPERTY_NAME
     */
    flexGridContainerPropertyRuleFix: 'Try setting the {PROPERTY_NAME} on the container element or use {ALTERNATIVE_PROPERTY_NAME} instead.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/CSSRuleValidator.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var HintType;
(function (HintType) {
    HintType["INACTIVE_PROPERTY"] = "ruleValidation";
    HintType["DEPRECATED_PROPERTY"] = "deprecatedProperty";
})(HintType || (HintType = {}));
class Hint {
    constructor(hintMessage, possibleFixMessage, learnMoreLink) {
        _Hint_hintMessage.set(this, void 0);
        _Hint_possibleFixMessage.set(this, void 0);
        _Hint_learnMoreLink.set(this, void 0);
        __classPrivateFieldSet(this, _Hint_hintMessage, hintMessage, "f");
        __classPrivateFieldSet(this, _Hint_possibleFixMessage, possibleFixMessage, "f");
        __classPrivateFieldSet(this, _Hint_learnMoreLink, learnMoreLink, "f");
    }
    getMessage() {
        return __classPrivateFieldGet(this, _Hint_hintMessage, "f");
    }
    getPossibleFixMessage() {
        return __classPrivateFieldGet(this, _Hint_possibleFixMessage, "f");
    }
    getLearnMoreLink() {
        return __classPrivateFieldGet(this, _Hint_learnMoreLink, "f");
    }
}
_Hint_hintMessage = new WeakMap(), _Hint_possibleFixMessage = new WeakMap(), _Hint_learnMoreLink = new WeakMap();
class CSSRuleValidator {
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.Other;
    }
    constructor(affectedProperties) {
        _CSSRuleValidator_affectedProperties.set(this, void 0);
        __classPrivateFieldSet(this, _CSSRuleValidator_affectedProperties, affectedProperties, "f");
    }
    getApplicableProperties() {
        return __classPrivateFieldGet(this, _CSSRuleValidator_affectedProperties, "f");
    }
}
_CSSRuleValidator_affectedProperties = new WeakMap();
class AlignContentValidator extends CSSRuleValidator {
    constructor() {
        super(['align-content']);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.AlignContent;
    }
    getHint(_propertyName, computedStyles) {
        if (!computedStyles) {
            return;
        }
        const isFlex = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles);
        if (!isFlex && !(0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isBlockContainer)(computedStyles) && !(0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
            const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles?.get('display'));
            const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('align-content');
            return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
                'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
                'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
            }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
                PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
                PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles?.get('display')),
            }));
        }
        if (!isFlex) {
            return;
        }
        if (computedStyles.get('flex-wrap') !== 'nowrap') {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('flex-wrap', 'nowrap');
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('align-content');
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
            PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('flex-wrap'),
            PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)('nowrap'),
        }));
    }
}
class FlexItemValidator extends CSSRuleValidator {
    constructor() {
        super(['flex', 'flex-basis', 'flex-grow', 'flex-shrink']);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.FlexItem;
    }
    getHint(propertyName, computedStyles, parentComputedStyles) {
        if (!parentComputedStyles) {
            return;
        }
        if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', parentComputedStyles?.get('display'));
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        const targetParentPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex');
        return new Hint(i18nString(UIStrings.ruleViolatedByParentElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedByParentElementRuleFix, {
            'EXISTING_PARENT_ELEMENT_RULE': reasonPropertyDeclaration,
            'TARGET_PARENT_ELEMENT_RULE': targetParentPropertyDeclaration,
        }));
    }
}
class FlexContainerValidator extends CSSRuleValidator {
    constructor() {
        super(['flex-direction', 'flex-flow', 'flex-wrap']);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.FlexContainer;
    }
    getHint(propertyName, computedStyles) {
        if (!computedStyles) {
            return;
        }
        if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles?.get('display'));
        const targetRuleCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex');
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleChangeSuggestion, {
            'EXISTING_PROPERTY_DECLARATION': reasonPropertyDeclaration,
            'TARGET_PROPERTY_DECLARATION': targetRuleCode,
        }));
    }
}
class GridContainerValidator extends CSSRuleValidator {
    constructor() {
        super([
            'grid',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.GridContainer;
    }
    getHint(propertyName, computedStyles) {
        if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles?.get('display'));
        const targetRuleCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid');
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleChangeSuggestion, {
            'EXISTING_PROPERTY_DECLARATION': reasonPropertyDeclaration,
            'TARGET_PROPERTY_DECLARATION': targetRuleCode,
        }));
    }
}
class GridItemValidator extends CSSRuleValidator {
    constructor() {
        super([
            'grid-area',
            'grid-column',
            'grid-row',
            'grid-row-end',
            'grid-row-start',
            // At the time of writing (November 2022), `justify-self` is only in effect in grid layout.
            // There are no other browsers that support `justify-self` in other layouts.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_In_Block_Abspos_Tables
            // TODO: move `justify-self` to other validator or change pop-over text if Chrome supports CSS Align in other layouts.
            'justify-self',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.GridItem;
    }
    getHint(propertyName, computedStyles, parentComputedStyles) {
        if (!parentComputedStyles) {
            return;
        }
        if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', parentComputedStyles?.get('display'));
        const targetParentPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid');
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedByParentElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedByParentElementRuleFix, {
            'EXISTING_PARENT_ELEMENT_RULE': reasonPropertyDeclaration,
            'TARGET_PARENT_ELEMENT_RULE': targetParentPropertyDeclaration,
        }));
    }
}
class FlexOrGridItemValidator extends CSSRuleValidator {
    constructor() {
        super([
            'place-self',
            'align-self',
            'order',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.FlexOrGridItem;
    }
    getHint(propertyName, computedStyles, parentComputedStyles) {
        if (!parentComputedStyles) {
            return;
        }
        if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', parentComputedStyles?.get('display'));
        const targetParentPropertyDeclaration = `${(0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex')} or ${(0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid')}`;
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedByParentElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedByParentElementRuleFix, {
            'EXISTING_PARENT_ELEMENT_RULE': reasonPropertyDeclaration,
            'TARGET_PARENT_ELEMENT_RULE': targetParentPropertyDeclaration,
        }));
    }
}
class FlexGridValidator extends CSSRuleValidator {
    constructor() {
        super([
            'justify-content',
            'place-content', // Shorthand	<'align-content'> <'justify-content'>?
            'align-items',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.FlexGrid;
    }
    getHint(propertyName, computedStyles, parentComputedStyles) {
        if (!computedStyles) {
            return;
        }
        if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
            return;
        }
        if (parentComputedStyles && ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles))) {
            const reasonContainerDisplayName = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(parentComputedStyles.get('display'));
            const reasonPropertyName = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
            const reasonAlternativePropertyName = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName === 'justify-content' ? 'justify-self' : 'align-self');
            return new Hint(i18nString(UIStrings.flexGridContainerPropertyRuleReason, {
                'CONTAINER_DISPLAY_NAME': reasonContainerDisplayName,
                'PROPERTY_NAME': reasonPropertyName,
            }), i18nString(UIStrings.flexGridContainerPropertyRuleFix, {
                'PROPERTY_NAME': reasonPropertyName,
                'ALTERNATIVE_PROPERTY_NAME': reasonAlternativePropertyName,
            }));
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles.get('display'));
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleChangeFlexOrGrid, {
            'DISPLAY_GRID_RULE': (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'grid'),
            'DISPLAY_FLEX_RULE': (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', 'flex'),
        }));
    }
}
class MulticolFlexGridValidator extends CSSRuleValidator {
    constructor() {
        super([
            'gap',
            'column-gap',
            'row-gap',
            'grid-gap',
            'grid-column-gap',
            'grid-column-end',
            'grid-row-gap',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.MulticolFlexGrid;
    }
    getHint(propertyName, computedStyles) {
        if (!computedStyles) {
            return;
        }
        if ((0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isMulticolContainer)(computedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(computedStyles) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(computedStyles)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles?.get('display'));
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
            PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
            PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles?.get('display')),
        }));
    }
}
class PaddingValidator extends CSSRuleValidator {
    constructor() {
        super([
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.Padding;
    }
    getHint(propertyName, computedStyles) {
        const display = computedStyles?.get('display');
        if (!display) {
            return;
        }
        const tableAttributes = [
            'table-row-group',
            'table-header-group',
            'table-footer-group',
            'table-row',
            'table-column-group',
            'table-column',
        ];
        if (!tableAttributes.includes(display)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles?.get('display'));
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
            PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
            PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles?.get('display')),
        }));
    }
}
class PositionValidator extends CSSRuleValidator {
    constructor() {
        super([
            'top',
            'right',
            'bottom',
            'left',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.Position;
    }
    getHint(propertyName, computedStyles) {
        const position = computedStyles?.get('position');
        if (!position) {
            return;
        }
        if (position !== 'static') {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('position', computedStyles?.get('position'));
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
            PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('position'),
            PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles?.get('position')),
        }));
    }
}
class ZIndexValidator extends CSSRuleValidator {
    constructor() {
        super([
            'z-index',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.ZIndex;
    }
    getHint(propertyName, computedStyles, parentComputedStyles) {
        const position = computedStyles?.get('position');
        if (!position) {
            return;
        }
        if (['absolute', 'relative', 'fixed', 'sticky'].includes(position) || (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isFlexContainer)(parentComputedStyles) ||
            (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.isGridContainer)(parentComputedStyles)) {
            return;
        }
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('position', computedStyles?.get('position'));
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
            PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('position'),
            PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles?.get('position')),
        }));
    }
}
/**
 * Validates if CSS width/height are having an effect on an element.
 * See "Applies to" in https://www.w3.org/TR/css-sizing-3/#propdef-width.
 * See "Applies to" in https://www.w3.org/TR/css-sizing-3/#propdef-height.
 */
class SizingValidator extends CSSRuleValidator {
    constructor() {
        super([
            'width',
            'height',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.Sizing;
    }
    getHint(propertyName, computedStyles, parentComputedStyles, nodeName) {
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
        const reasonPropertyDeclaration = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyDefinitionText)('display', computedStyles?.get('display'));
        const affectedPropertyDeclarationCode = (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)(propertyName);
        return new Hint(i18nString(UIStrings.ruleViolatedBySameElementRuleReason, {
            'REASON_PROPERTY_DECLARATION_CODE': reasonPropertyDeclaration,
            'AFFECTED_PROPERTY_DECLARATION_CODE': affectedPropertyDeclarationCode,
        }), i18nString(UIStrings.ruleViolatedBySameElementRuleFix, {
            PROPERTY_NAME: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyName)('display'),
            PROPERTY_VALUE: (0,_CSSRuleValidatorHelper_js__WEBPACK_IMPORTED_MODULE_3__.buildPropertyValue)(computedStyles?.get('display')),
        }));
    }
}
/**
 * Checks that font variation settings are applicable to the actual font.
 */
class FontVariationSettingsValidator extends CSSRuleValidator {
    constructor() {
        super([
            'font-variation-settings',
        ]);
    }
    getMetricType() {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.CSSHintType.FontVariationSettings;
    }
    getHint(propertyName, computedStyles, parentComputedStyles, nodeName, fontFaces) {
        if (!computedStyles) {
            return;
        }
        const value = computedStyles.get('font-variation-settings');
        if (!value) {
            return;
        }
        const fontFamily = computedStyles.get('font-family');
        if (!fontFamily) {
            return;
        }
        const fontFamilies = new Set(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.parseFontFamily(fontFamily));
        const matchingFontFaces = (fontFaces || []).filter(f => fontFamilies.has(f.getFontFamily()));
        const variationSettings = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CSSPropertyParser.parseFontVariationSettings(value);
        const warnings = [];
        for (const elementSetting of variationSettings) {
            for (const font of matchingFontFaces) {
                const fontSetting = font.getVariationAxisByTag(elementSetting.tag);
                if (!fontSetting) {
                    continue;
                }
                if (elementSetting.value < fontSetting.minValue || elementSetting.value > fontSetting.maxValue) {
                    warnings.push(i18nString(UIStrings.fontVariationSettingsWarning, {
                        PH1: elementSetting.tag,
                        PH2: elementSetting.value,
                        PH3: fontSetting.minValue,
                        PH4: fontSetting.maxValue,
                        PH5: font.getFontFamily(),
                    }));
                }
            }
        }
        if (!warnings.length) {
            return;
        }
        return new Hint(warnings.join(' '), '');
    }
}
const CSS_RULE_VALIDATORS = [
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
    ZIndexValidator,
];
const setupCSSRulesValidators = () => {
    const validatorsMap = new Map();
    for (const validatorClass of CSS_RULE_VALIDATORS) {
        const validator = new validatorClass();
        const affectedProperties = validator.getApplicableProperties();
        for (const affectedProperty of affectedProperties) {
            let propertyValidators = validatorsMap.get(affectedProperty);
            if (propertyValidators === undefined) {
                propertyValidators = [];
            }
            propertyValidators.push(validator);
            validatorsMap.set(affectedProperty, propertyValidators);
        }
    }
    return validatorsMap;
};
const cssRuleValidatorsMap = setupCSSRulesValidators();


/***/ }),

/***/ "./src/panels/elements/CSSRuleValidatorHelper.ts":
/*!*******************************************************!*\
  !*** ./src/panels/elements/CSSRuleValidatorHelper.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPropertyDefinitionText: () => (/* binding */ buildPropertyDefinitionText),
/* harmony export */   buildPropertyName: () => (/* binding */ buildPropertyName),
/* harmony export */   buildPropertyValue: () => (/* binding */ buildPropertyValue),
/* harmony export */   isBlockContainer: () => (/* binding */ isBlockContainer),
/* harmony export */   isFlexContainer: () => (/* binding */ isFlexContainer),
/* harmony export */   isGridContainer: () => (/* binding */ isGridContainer),
/* harmony export */   isInlineElement: () => (/* binding */ isInlineElement),
/* harmony export */   isMulticolContainer: () => (/* binding */ isMulticolContainer),
/* harmony export */   isPossiblyReplacedElement: () => (/* binding */ isPossiblyReplacedElement)
/* harmony export */ });
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const buildPropertyDefinitionText = (property, value) => {
    if (value === undefined) {
        return buildPropertyName(property);
    }
    return '<code class="unbreakable-text"><span class="property">' + property + '</span>: ' + value + '</code>';
};
const buildPropertyName = (property) => {
    return '<code class="unbreakable-text"><span class="property">' + property + '</span></code>';
};
const buildPropertyValue = (property) => {
    return '<code class="unbreakable-text">' + property + '</code>';
};
const isFlexContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const display = computedStyles.get('display');
    return display === 'flex' || display === 'inline-flex';
};
const blockContainerDisplayValueSet = new Set([
    'block',
    'flow-root',
    'inline-block',
    'list-item',
    'table-caption',
    'table-cell',
]);
const isBlockContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const displayValue = computedStyles.get('display');
    if (!displayValue) {
        return false;
    }
    const split = displayValue.split(' ');
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
const isInlineElement = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    return computedStyles.get('display') === 'inline';
};
// See https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements
const possiblyReplacedElements = new Set([
    'audio',
    'canvas',
    'embed',
    'iframe',
    'img',
    'input',
    'object',
    'video',
]);
const isPossiblyReplacedElement = (nodeName) => {
    if (!nodeName) {
        return false;
    }
    return possiblyReplacedElements.has(nodeName);
};
const isGridContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const display = computedStyles.get('display');
    return display === 'grid' || display === 'inline-grid';
};
const isMulticolContainer = (computedStyles) => {
    if (!computedStyles) {
        return false;
    }
    const columnWidth = computedStyles.get('column-width');
    const columnCount = computedStyles.get('column-count');
    return columnWidth !== 'auto' || columnCount !== 'auto';
};


/***/ })

}]);