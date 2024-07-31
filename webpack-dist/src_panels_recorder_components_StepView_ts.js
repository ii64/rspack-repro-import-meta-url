"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_StepView_ts"],{

/***/ "./src/panels/recorder/components/StepView.ts":
/*!****************************************************!*\
  !*** ./src/panels/recorder/components/StepView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBreakpointEvent: () => (/* binding */ AddBreakpointEvent),
/* harmony export */   AddStep: () => (/* binding */ AddStep),
/* harmony export */   AddStepPosition: () => (/* binding */ AddStepPosition),
/* harmony export */   CaptureSelectorsEvent: () => (/* binding */ CaptureSelectorsEvent),
/* harmony export */   CopyStepEvent: () => (/* binding */ CopyStepEvent),
/* harmony export */   RemoveBreakpointEvent: () => (/* binding */ RemoveBreakpointEvent),
/* harmony export */   RemoveStep: () => (/* binding */ RemoveStep),
/* harmony export */   State: () => (/* binding */ State),
/* harmony export */   StepChanged: () => (/* binding */ StepChanged),
/* harmony export */   StepView: () => (/* binding */ StepView),
/* harmony export */   StopSelectorsCaptureEvent: () => (/* binding */ StopSelectorsCaptureEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./src/ui/components/menus/menus.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stepView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _TimelineSection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TimelineSection.js */ "./src/panels/recorder/components/TimelineSection.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _StepView_instances, _StepView_shadow, _StepView_observer, _StepView_viewInput, _StepView_view, _StepView_toggleShowDetails, _StepView_onToggleShowDetailsKeydown, _StepView_stepEdited, _StepView_handleStepAction, _StepView_onBreakpointClick, _StepView_getActions, _StepView_onStepContextMenu, _StepView_render;
/* Some view input callbacks might be handled outside of LitHtml and we
   bind all of them upfront. We disable the lit_html_host_this since we
   do not define any host for LitHtml.render and the rule is not happy
   about it. */
/* eslint-disable rulesdir/lit_html_host_this */











const UIStrings = {
    /**
     *@description Title for the step type that configures the viewport
     */
    setViewportClickTitle: 'Set viewport',
    /**
     *@description Title for the customStep step type
     */
    customStepTitle: 'Custom step',
    /**
     *@description Title for the click step type
     */
    clickStepTitle: 'Click',
    /**
     *@description Title for the double click step type
     */
    doubleClickStepTitle: 'Double click',
    /**
     *@description Title for the hover step type
     */
    hoverStepTitle: 'Hover',
    /**
     *@description Title for the emulateNetworkConditions step type
     */
    emulateNetworkConditionsStepTitle: 'Emulate network conditions',
    /**
     *@description Title for the change step type
     */
    changeStepTitle: 'Change',
    /**
     *@description Title for the close step type
     */
    closeStepTitle: 'Close',
    /**
     *@description Title for the scroll step type
     */
    scrollStepTitle: 'Scroll',
    /**
     *@description Title for the key up step type. `up` refers to the state of the keyboard key: it's released, i.e., up. It does not refer to the down arrow key specifically.
     */
    keyUpStepTitle: 'Key up',
    /**
     *@description Title for the navigate step type
     */
    navigateStepTitle: 'Navigate',
    /**
     *@description Title for the key down step type. `down` refers to the state of the keyboard key: it's pressed, i.e., down. It does not refer to the down arrow key specifically.
     */
    keyDownStepTitle: 'Key down',
    /**
     *@description Title for the waitForElement step type
     */
    waitForElementStepTitle: 'Wait for element',
    /**
     *@description Title for the waitForExpression step type
     */
    waitForExpressionStepTitle: 'Wait for expression',
    /**
     *@description Title for elements with role button
     */
    elementRoleButton: 'Button',
    /**
     *@description Title for elements with role input
     */
    elementRoleInput: 'Input',
    /**
     *@description Default title for elements without a specific role
     */
    elementRoleFallback: 'Element',
    /**
     *@description The title of the button in the step's context menu that adds a new step before the current one.
     */
    addStepBefore: 'Add step before',
    /**
     *@description The title of the button in the step's context menu that adds a new step after the current one.
     */
    addStepAfter: 'Add step after',
    /**
     *@description The title of the button in the step's context menu that removes the step.
     */
    removeStep: 'Remove step',
    /**
     *@description The title of the button that open the step's context menu.
     */
    openStepActions: 'Open step actions',
    /**
     *@description The title of the button in the step's context menu that adds a breakpoint.
     */
    addBreakpoint: 'Add breakpoint',
    /**
     *@description The title of the button in the step's context menu that removes a breakpoint.
     */
    removeBreakpoint: 'Remove breakpoint',
    /**
     * @description A menu item item in the context menu that expands another menu which list all
     * the formats the user can copy the recording as.
     */
    copyAs: 'Copy as',
    /**
     * @description The title of the menu group that holds actions on recording steps.
     */
    stepManagement: 'Manage steps',
    /**
     * @description The title of the menu group that holds actions related to breakpoints.
     */
    breakpoints: 'Breakpoints',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/recorder/components/StepView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var State;
(function (State) {
    State["Default"] = "default";
    State["Success"] = "success";
    State["Current"] = "current";
    State["Outstanding"] = "outstanding";
    State["Error"] = "error";
    State["Stopped"] = "stopped";
})(State || (State = {}));
class CaptureSelectorsEvent extends Event {
    constructor(step) {
        super(CaptureSelectorsEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = step;
    }
}
Object.defineProperty(CaptureSelectorsEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'captureselectors'
});
class StopSelectorsCaptureEvent extends Event {
    constructor() {
        super(StopSelectorsCaptureEvent.eventName, {
            bubbles: true,
            composed: true,
        });
    }
}
Object.defineProperty(StopSelectorsCaptureEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'stopselectorscapture'
});
class CopyStepEvent extends Event {
    constructor(step) {
        super(CopyStepEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "step", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.step = step;
    }
}
Object.defineProperty(CopyStepEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'copystep'
});
class StepChanged extends Event {
    constructor(currentStep, newStep) {
        super(StepChanged.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "currentStep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "newStep", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.currentStep = currentStep;
        this.newStep = newStep;
    }
}
Object.defineProperty(StepChanged, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'stepchanged'
});
var AddStepPosition;
(function (AddStepPosition) {
    AddStepPosition["BEFORE"] = "before";
    AddStepPosition["AFTER"] = "after";
})(AddStepPosition || (AddStepPosition = {}));
class AddStep extends Event {
    constructor(stepOrSection, position) {
        super(AddStep.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "position", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stepOrSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.stepOrSection = stepOrSection;
        this.position = position;
    }
}
Object.defineProperty(AddStep, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'addstep'
});
class RemoveStep extends Event {
    constructor(step) {
        super(RemoveStep.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "step", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.step = step;
    }
}
Object.defineProperty(RemoveStep, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'removestep'
});
class AddBreakpointEvent extends Event {
    constructor(index) {
        super(AddBreakpointEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.index = index;
    }
}
Object.defineProperty(AddBreakpointEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'addbreakpoint'
});
class RemoveBreakpointEvent extends Event {
    constructor(index) {
        super(RemoveBreakpointEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "index", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.index = index;
    }
}
Object.defineProperty(RemoveBreakpointEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'removebreakpoint'
});
const COPY_ACTION_PREFIX = 'copy-step-as-';
function getStepTypeTitle(input) {
    if (input.section) {
        return input.section.title ? input.section.title : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<span class="fallback">(No Title)</span>`;
    }
    if (!input.step) {
        throw new Error('Missing both step and section');
    }
    switch (input.step.type) {
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
    switch (role) {
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
    const ariaSelector = step.selectors.flat().find(selector => selector.startsWith('aria/'));
    if (!ariaSelector) {
        return '';
    }
    const m = ariaSelector.match(/^aria\/(.+?)(\[role="(.+)"\])?$/);
    if (!m) {
        return '';
    }
    return `${getElementRoleTitle(m[3])} "${m[1]}"`;
}
function getSectionPreview(section) {
    if (!section) {
        return '';
    }
    return section.url;
}
function renderStepActions(input) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
    <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
      class="step-actions"
      title=${i18nString(UIStrings.openStepActions)}
      aria-label=${i18nString(UIStrings.openStepActions)}
      @click=${input.onStepContextMenu}
      @keydown=${(event) => {
        event.stopPropagation();
    }}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.dropDown('step-actions').track({ click: true })}
      .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON,
        iconName: 'dots-vertical',
        title: i18nString(UIStrings.openStepActions),
    }}
    ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
  `;
    // clang-format on
}
function viewFunction(input, _output, target) {
    if (!input.step && !input.section) {
        return;
    }
    const stepClasses = {
        step: true,
        expanded: input.showDetails,
        'is-success': input.state === State.Success,
        'is-current': input.state === State.Current,
        'is-outstanding': input.state === State.Outstanding,
        'is-error': input.state === State.Error,
        'is-stopped': input.state === State.Stopped,
        'is-start-of-group': input.isStartOfGroup,
        'is-first-section': input.isFirstSection,
        'has-breakpoint': input.hasBreakpoint,
    };
    const isExpandable = Boolean(input.step);
    const mainTitle = getStepTypeTitle({
        step: input.step,
        section: input.section,
    });
    const subtitle = input.step ? getSelectorPreview() : getSectionPreview();
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
    <${_TimelineSection_js__WEBPACK_IMPORTED_MODULE_10__.TimelineSection.litTagName} .data=${{
        isFirstSection: input.isFirstSection,
        isLastSection: input.isLastSection,
        isStartOfGroup: input.isStartOfGroup,
        isEndOfGroup: input.isEndOfGroup,
        isSelected: input.isSelected,
    }} @contextmenu=${input.onStepContextMenu} data-step-index=${input.stepIndex} data-section-index=${input.sectionIndex} class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.Directives.classMap(stepClasses)}>
      <svg slot="icon" width="24" height="24" height="100%" class="icon">
        <circle class="circle-icon"/>
        <g class="error-icon">
          <path d="M1.5 1.5L6.5 6.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.5 6.5L6.5 1.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <path @click=${input.onBreakpointClick} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action('breakpoint').track({ click: true })} class="breakpoint-icon" d="M2.5 5.5H17.7098L21.4241 12L17.7098 18.5H2.5V5.5Z"/>
      </svg>
      <div class="summary">
        <div class="title-container ${isExpandable ? 'action' : ''}"
          @click=${isExpandable && input.toggleShowDetails}
          @keydown=${isExpandable && input.onToggleShowDetailsKeydown}
          tabindex="0"
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.sectionHeader().track({ click: true })}
          aria-role=${isExpandable ? 'button' : ''}
          aria-label=${isExpandable ? 'Show details for step' : ''}
        >
          ${isExpandable
        ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
                  class="chevron"
                  jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.expand().track({ click: true })}
                  name="triangle-down">
                </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>`
        : ''}
          <div class="title">
            <div class="main-title" title=${mainTitle}>${mainTitle}</div>
            <div class="subtitle" title=${subtitle}>${subtitle}</div>
          </div>
        </div>
        <div class="filler"></div>
        ${renderStepActions(input)}
      </div>
      <div class="details">
        ${input.step &&
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<devtools-recorder-step-editor
          class=${input.isSelected ? 'is-selected' : ''}
          .step=${input.step}
          .disabled=${input.isPlaying}
          @stepedited=${input.stepEdited}>
        </devtools-recorder-step-editor>`}
        ${input.section?.causingStep &&
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `<devtools-recorder-step-editor
          .step=${input.section.causingStep}
          .isTypeEditable=${false}
          .disabled=${input.isPlaying}
          @stepedited=${input.stepEdited}>
        </devtools-recorder-step-editor>`}
      </div>
      ${input.error &&
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.html `
        <div class="error" role="alert">
          ${input.error.message}
        </div>
      `}
    </${_TimelineSection_js__WEBPACK_IMPORTED_MODULE_10__.TimelineSection.litTagName}>
  `, target);
    // clang-format on
}
class StepView extends HTMLElement {
    constructor(view) {
        super();
        _StepView_instances.add(this);
        _StepView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _StepView_observer.set(this, new IntersectionObserver(result => {
            __classPrivateFieldGet(this, _StepView_viewInput, "f").isVisible = result[0].isIntersecting;
        }));
        _StepView_viewInput.set(this, {
            state: State.Default,
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
            stepEdited: __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_stepEdited).bind(this),
            onBreakpointClick: __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_onBreakpointClick).bind(this),
            handleStepAction: __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_handleStepAction).bind(this),
            toggleShowDetails: __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_toggleShowDetails).bind(this),
            onToggleShowDetailsKeydown: __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_onToggleShowDetailsKeydown).bind(this),
            onStepContextMenu: __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_onStepContextMenu).bind(this),
        });
        _StepView_view.set(this, viewFunction);
        _StepView_getActions.set(this, () => {
            const actions = [];
            if (!__classPrivateFieldGet(this, _StepView_viewInput, "f").isPlaying) {
                if (__classPrivateFieldGet(this, _StepView_viewInput, "f").step) {
                    actions.push({
                        id: 'add-step-before',
                        label: i18nString(UIStrings.addStepBefore),
                        group: 'stepManagement',
                        groupTitle: i18nString(UIStrings.stepManagement),
                    });
                }
                actions.push({
                    id: 'add-step-after',
                    label: i18nString(UIStrings.addStepAfter),
                    group: 'stepManagement',
                    groupTitle: i18nString(UIStrings.stepManagement),
                });
                if (__classPrivateFieldGet(this, _StepView_viewInput, "f").removable) {
                    actions.push({
                        id: 'remove-step',
                        group: 'stepManagement',
                        groupTitle: i18nString(UIStrings.stepManagement),
                        label: i18nString(UIStrings.removeStep),
                    });
                }
            }
            if (__classPrivateFieldGet(this, _StepView_viewInput, "f").step && !__classPrivateFieldGet(this, _StepView_viewInput, "f").isRecording) {
                if (__classPrivateFieldGet(this, _StepView_viewInput, "f").hasBreakpoint) {
                    actions.push({
                        id: 'remove-breakpoint',
                        label: i18nString(UIStrings.removeBreakpoint),
                        group: 'breakPointManagement',
                        groupTitle: i18nString(UIStrings.breakpoints),
                    });
                }
                else {
                    actions.push({
                        id: 'add-breakpoint',
                        label: i18nString(UIStrings.addBreakpoint),
                        group: 'breakPointManagement',
                        groupTitle: i18nString(UIStrings.breakpoints),
                    });
                }
            }
            if (__classPrivateFieldGet(this, _StepView_viewInput, "f").step) {
                for (const converter of __classPrivateFieldGet(this, _StepView_viewInput, "f").builtInConverters || []) {
                    actions.push({
                        id: COPY_ACTION_PREFIX + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(converter.getId()),
                        label: converter.getFormatName(),
                        group: 'copy',
                        groupTitle: i18nString(UIStrings.copyAs),
                    });
                }
                for (const converter of __classPrivateFieldGet(this, _StepView_viewInput, "f").extensionConverters || []) {
                    actions.push({
                        id: COPY_ACTION_PREFIX + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(converter.getId()),
                        label: converter.getFormatName(),
                        group: 'copy',
                        groupTitle: i18nString(UIStrings.copyAs),
                        jslogContext: COPY_ACTION_PREFIX + 'extension',
                    });
                }
            }
            return actions;
        });
        if (view) {
            __classPrivateFieldSet(this, _StepView_view, view, "f");
        }
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('step-view')}`);
    }
    set data(data) {
        const prevState = __classPrivateFieldGet(this, _StepView_viewInput, "f").state;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").step = data.step;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").section = data.section;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").state = data.state;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").error = data.error;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").isEndOfGroup = data.isEndOfGroup;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").isStartOfGroup = data.isStartOfGroup;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").stepIndex = data.stepIndex;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").sectionIndex = data.sectionIndex;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").isFirstSection = data.isFirstSection;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").isLastSection = data.isLastSection;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").isRecording = data.isRecording;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").isPlaying = data.isPlaying;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").hasBreakpoint = data.hasBreakpoint;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").removable = data.removable;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").builtInConverters = data.builtInConverters;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").extensionConverters = data.extensionConverters;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").isSelected = data.isSelected;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").recorderSettings = data.recorderSettings;
        __classPrivateFieldGet(this, _StepView_viewInput, "f").actions = __classPrivateFieldGet(this, _StepView_getActions, "f").call(this);
        __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_render).call(this);
        if (__classPrivateFieldGet(this, _StepView_viewInput, "f").state !== prevState && __classPrivateFieldGet(this, _StepView_viewInput, "f").state === 'current' && !__classPrivateFieldGet(this, _StepView_viewInput, "f").isVisible) {
            this.scrollIntoView();
        }
    }
    get step() {
        return __classPrivateFieldGet(this, _StepView_viewInput, "f").step;
    }
    get section() {
        return __classPrivateFieldGet(this, _StepView_viewInput, "f").section;
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _StepView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './stepView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _StepView_observer, "f").observe(this);
        __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_render).call(this);
    }
    disconnectedCallback() {
        __classPrivateFieldGet(this, _StepView_observer, "f").unobserve(this);
    }
}
_StepView_shadow = new WeakMap(), _StepView_observer = new WeakMap(), _StepView_viewInput = new WeakMap(), _StepView_view = new WeakMap(), _StepView_getActions = new WeakMap(), _StepView_instances = new WeakSet(), _StepView_toggleShowDetails = function _StepView_toggleShowDetails() {
    __classPrivateFieldGet(this, _StepView_viewInput, "f").showDetails = !__classPrivateFieldGet(this, _StepView_viewInput, "f").showDetails;
    __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_render).call(this);
}, _StepView_onToggleShowDetailsKeydown = function _StepView_onToggleShowDetailsKeydown(event) {
    const keyboardEvent = event;
    if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
        __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_toggleShowDetails).call(this);
        event.stopPropagation();
        event.preventDefault();
    }
}, _StepView_stepEdited = function _StepView_stepEdited(event) {
    const step = __classPrivateFieldGet(this, _StepView_viewInput, "f").step || __classPrivateFieldGet(this, _StepView_viewInput, "f").section?.causingStep;
    if (!step) {
        throw new Error('Expected step.');
    }
    this.dispatchEvent(new StepChanged(step, event.data));
}, _StepView_handleStepAction = function _StepView_handleStepAction(event) {
    switch (event.itemValue) {
        case 'add-step-before': {
            const stepOrSection = __classPrivateFieldGet(this, _StepView_viewInput, "f").step || __classPrivateFieldGet(this, _StepView_viewInput, "f").section;
            if (!stepOrSection) {
                throw new Error('Expected step or section.');
            }
            this.dispatchEvent(new AddStep(stepOrSection, AddStepPosition.BEFORE));
            break;
        }
        case 'add-step-after': {
            const stepOrSection = __classPrivateFieldGet(this, _StepView_viewInput, "f").step || __classPrivateFieldGet(this, _StepView_viewInput, "f").section;
            if (!stepOrSection) {
                throw new Error('Expected step or section.');
            }
            this.dispatchEvent(new AddStep(stepOrSection, AddStepPosition.AFTER));
            break;
        }
        case 'remove-step': {
            const causingStep = __classPrivateFieldGet(this, _StepView_viewInput, "f").section?.causingStep;
            if (!__classPrivateFieldGet(this, _StepView_viewInput, "f").step && !causingStep) {
                throw new Error('Expected step.');
            }
            this.dispatchEvent(new RemoveStep(__classPrivateFieldGet(this, _StepView_viewInput, "f").step || causingStep));
            break;
        }
        case 'add-breakpoint': {
            if (!__classPrivateFieldGet(this, _StepView_viewInput, "f").step) {
                throw new Error('Expected step');
            }
            this.dispatchEvent(new AddBreakpointEvent(__classPrivateFieldGet(this, _StepView_viewInput, "f").stepIndex));
            break;
        }
        case 'remove-breakpoint': {
            if (!__classPrivateFieldGet(this, _StepView_viewInput, "f").step) {
                throw new Error('Expected step');
            }
            this.dispatchEvent(new RemoveBreakpointEvent(__classPrivateFieldGet(this, _StepView_viewInput, "f").stepIndex));
            break;
        }
        default: {
            const actionId = event.itemValue;
            if (!actionId.startsWith(COPY_ACTION_PREFIX)) {
                throw new Error('Unknown step action.');
            }
            const copyStep = __classPrivateFieldGet(this, _StepView_viewInput, "f").step || __classPrivateFieldGet(this, _StepView_viewInput, "f").section?.causingStep;
            if (!copyStep) {
                throw new Error('Step not found.');
            }
            const converterId = actionId.substring(COPY_ACTION_PREFIX.length);
            if (__classPrivateFieldGet(this, _StepView_viewInput, "f").recorderSettings) {
                __classPrivateFieldGet(this, _StepView_viewInput, "f").recorderSettings.preferredCopyFormat = converterId;
            }
            this.dispatchEvent(new CopyStepEvent(structuredClone(copyStep)));
        }
    }
}, _StepView_onBreakpointClick = function _StepView_onBreakpointClick() {
    if (__classPrivateFieldGet(this, _StepView_viewInput, "f").hasBreakpoint) {
        this.dispatchEvent(new RemoveBreakpointEvent(__classPrivateFieldGet(this, _StepView_viewInput, "f").stepIndex));
    }
    else {
        this.dispatchEvent(new AddBreakpointEvent(__classPrivateFieldGet(this, _StepView_viewInput, "f").stepIndex));
    }
    __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_render).call(this);
}, _StepView_onStepContextMenu = function _StepView_onStepContextMenu(event) {
    const buttonElement = event.target instanceof _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button ? event.target : undefined;
    const menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event, {
        x: buttonElement?.getBoundingClientRect().left,
        y: buttonElement?.getBoundingClientRect().bottom,
    });
    const actions = __classPrivateFieldGet(this, _StepView_getActions, "f").call(this);
    const copyActions = actions.filter(item => item.id.startsWith(COPY_ACTION_PREFIX));
    const otherActions = actions.filter(item => !item.id.startsWith(COPY_ACTION_PREFIX));
    for (const item of otherActions) {
        const section = menu.section(item.group);
        section.appendItem(item.label, () => {
            __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_handleStepAction).call(this, new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(item.id));
        }, { jslogContext: item.id });
    }
    const preferredCopyAction = copyActions.find(item => item.id === COPY_ACTION_PREFIX + __classPrivateFieldGet(this, _StepView_viewInput, "f").recorderSettings?.preferredCopyFormat);
    if (preferredCopyAction) {
        menu.section('copy').appendItem(preferredCopyAction.label, () => {
            __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_handleStepAction).call(this, new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(preferredCopyAction.id));
        }, { jslogContext: preferredCopyAction.id });
    }
    if (copyActions.length) {
        const copyAs = menu.section('copy').appendSubMenuItem(i18nString(UIStrings.copyAs), false, 'copy');
        for (const item of copyActions) {
            if (item === preferredCopyAction) {
                continue;
            }
            copyAs.section(item.group).appendItem(item.label, () => {
                __classPrivateFieldGet(this, _StepView_instances, "m", _StepView_handleStepAction).call(this, new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(item.id));
            }, { jslogContext: item.id });
        }
    }
    void menu.show();
}, _StepView_render = function _StepView_render() {
    const output = {};
    __classPrivateFieldGet(this, _StepView_view, "f").call(this, __classPrivateFieldGet(this, _StepView_viewInput, "f"), output, __classPrivateFieldGet(this, _StepView_shadow, "f"));
};
Object.defineProperty(StepView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-step-view`
});
customElements.define('devtools-step-view', StepView);


/***/ }),

/***/ "./src/panels/recorder/components/TimelineSection.ts":
/*!***********************************************************!*\
  !*** ./src/panels/recorder/components/TimelineSection.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineSection: () => (/* binding */ TimelineSection)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './timelineSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _TimelineSection_instances, _TimelineSection_isEndOfGroup, _TimelineSection_isStartOfGroup, _TimelineSection_isFirstSection, _TimelineSection_isLastSection, _TimelineSection_isSelected, _TimelineSection_render;


class TimelineSection extends HTMLElement {
    constructor() {
        super();
        _TimelineSection_instances.add(this);
        _TimelineSection_isEndOfGroup.set(this, false);
        _TimelineSection_isStartOfGroup.set(this, false);
        _TimelineSection_isFirstSection.set(this, false);
        _TimelineSection_isLastSection.set(this, false);
        _TimelineSection_isSelected.set(this, false);
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './timelineSection.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _TimelineSection_isFirstSection, data.isFirstSection, "f");
        __classPrivateFieldSet(this, _TimelineSection_isLastSection, data.isLastSection, "f");
        __classPrivateFieldSet(this, _TimelineSection_isEndOfGroup, data.isEndOfGroup, "f");
        __classPrivateFieldSet(this, _TimelineSection_isStartOfGroup, data.isStartOfGroup, "f");
        __classPrivateFieldSet(this, _TimelineSection_isSelected, data.isSelected, "f");
        __classPrivateFieldGet(this, _TimelineSection_instances, "m", _TimelineSection_render).call(this);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _TimelineSection_instances, "m", _TimelineSection_render).call(this);
    }
}
_TimelineSection_isEndOfGroup = new WeakMap(), _TimelineSection_isStartOfGroup = new WeakMap(), _TimelineSection_isFirstSection = new WeakMap(), _TimelineSection_isLastSection = new WeakMap(), _TimelineSection_isSelected = new WeakMap(), _TimelineSection_instances = new WeakSet(), _TimelineSection_render = function _TimelineSection_render() {
    const classes = {
        'timeline-section': true,
        'is-end-of-group': __classPrivateFieldGet(this, _TimelineSection_isEndOfGroup, "f"),
        'is-start-of-group': __classPrivateFieldGet(this, _TimelineSection_isStartOfGroup, "f"),
        'is-first-section': __classPrivateFieldGet(this, _TimelineSection_isFirstSection, "f"),
        'is-last-section': __classPrivateFieldGet(this, _TimelineSection_isLastSection, "f"),
        'is-selected': __classPrivateFieldGet(this, _TimelineSection_isSelected, "f"),
    };
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
      <div class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classes)}>
        <div class="overlay"></div>
        <div class="icon"><slot name="icon"></slot></div>
        <svg width="24" height="100%" class="bar">
          <rect class="line" x="7" y="0" width="2" height="100%" />
        </svg>
        <slot></slot>
      </div>
    `, this.shadowRoot, { host: this });
    // clang-format on
};
Object.defineProperty(TimelineSection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-timeline-section`
});
customElements.define('devtools-timeline-section', TimelineSection);


/***/ })

}]);