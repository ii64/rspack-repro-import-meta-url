"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_StepView_js"],{

/***/ "./panels/recorder/components/StepView.js":
/*!************************************************!*\
  !*** ./panels/recorder/components/StepView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddBreakpointEvent: () => (/* binding */ AddBreakpointEvent),
/* harmony export */   AddStep: () => (/* binding */ AddStep),
/* harmony export */   CaptureSelectorsEvent: () => (/* binding */ CaptureSelectorsEvent),
/* harmony export */   CopyStepEvent: () => (/* binding */ CopyStepEvent),
/* harmony export */   RemoveBreakpointEvent: () => (/* binding */ RemoveBreakpointEvent),
/* harmony export */   RemoveStep: () => (/* binding */ RemoveStep),
/* harmony export */   StepChanged: () => (/* binding */ StepChanged),
/* harmony export */   StepView: () => (/* binding */ StepView),
/* harmony export */   StopSelectorsCaptureEvent: () => (/* binding */ StopSelectorsCaptureEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./ui/components/menus/menus.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _stepView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stepView.css.js */ "./panels/recorder/components/stepView.css.js");
/* harmony import */ var _TimelineSection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TimelineSection.js */ "./panels/recorder/components/TimelineSection.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
class CaptureSelectorsEvent extends Event {
    static eventName = 'captureselectors';
    data;
    constructor(step) {
        super(CaptureSelectorsEvent.eventName, { bubbles: true, composed: true });
        this.data = step;
    }
}
class StopSelectorsCaptureEvent extends Event {
    static eventName = 'stopselectorscapture';
    constructor() {
        super(StopSelectorsCaptureEvent.eventName, {
            bubbles: true,
            composed: true,
        });
    }
}
class CopyStepEvent extends Event {
    static eventName = 'copystep';
    step;
    constructor(step) {
        super(CopyStepEvent.eventName, { bubbles: true, composed: true });
        this.step = step;
    }
}
class StepChanged extends Event {
    static eventName = 'stepchanged';
    currentStep;
    newStep;
    constructor(currentStep, newStep) {
        super(StepChanged.eventName, { bubbles: true, composed: true });
        this.currentStep = currentStep;
        this.newStep = newStep;
    }
}
class AddStep extends Event {
    static eventName = 'addstep';
    position;
    stepOrSection;
    constructor(stepOrSection, position) {
        super(AddStep.eventName, { bubbles: true, composed: true });
        this.stepOrSection = stepOrSection;
        this.position = position;
    }
}
class RemoveStep extends Event {
    static eventName = 'removestep';
    step;
    constructor(step) {
        super(RemoveStep.eventName, { bubbles: true, composed: true });
        this.step = step;
    }
}
class AddBreakpointEvent extends Event {
    static eventName = 'addbreakpoint';
    index;
    constructor(index) {
        super(AddBreakpointEvent.eventName, { bubbles: true, composed: true });
        this.index = index;
    }
}
class RemoveBreakpointEvent extends Event {
    static eventName = 'removebreakpoint';
    index;
    constructor(index) {
        super(RemoveBreakpointEvent.eventName, { bubbles: true, composed: true });
        this.index = index;
    }
}
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
        variant: "icon" /* Buttons.Button.Variant.ICON */,
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
        'is-success': input.state === "success" /* State.Success */,
        'is-current': input.state === "current" /* State.Current */,
        'is-outstanding': input.state === "outstanding" /* State.Outstanding */,
        'is-error': input.state === "error" /* State.Error */,
        'is-stopped': input.state === "stopped" /* State.Stopped */,
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
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-step-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #observer = new IntersectionObserver(result => {
        this.#viewInput.isVisible = result[0].isIntersecting;
    });
    #viewInput = {
        state: "default" /* State.Default */,
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
        stepEdited: this.#stepEdited.bind(this),
        onBreakpointClick: this.#onBreakpointClick.bind(this),
        handleStepAction: this.#handleStepAction.bind(this),
        toggleShowDetails: this.#toggleShowDetails.bind(this),
        onToggleShowDetailsKeydown: this.#onToggleShowDetailsKeydown.bind(this),
        onStepContextMenu: this.#onStepContextMenu.bind(this),
    };
    #view = viewFunction;
    constructor(view) {
        super();
        if (view) {
            this.#view = view;
        }
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('step-view')}`);
    }
    set data(data) {
        const prevState = this.#viewInput.state;
        this.#viewInput.step = data.step;
        this.#viewInput.section = data.section;
        this.#viewInput.state = data.state;
        this.#viewInput.error = data.error;
        this.#viewInput.isEndOfGroup = data.isEndOfGroup;
        this.#viewInput.isStartOfGroup = data.isStartOfGroup;
        this.#viewInput.stepIndex = data.stepIndex;
        this.#viewInput.sectionIndex = data.sectionIndex;
        this.#viewInput.isFirstSection = data.isFirstSection;
        this.#viewInput.isLastSection = data.isLastSection;
        this.#viewInput.isRecording = data.isRecording;
        this.#viewInput.isPlaying = data.isPlaying;
        this.#viewInput.hasBreakpoint = data.hasBreakpoint;
        this.#viewInput.removable = data.removable;
        this.#viewInput.builtInConverters = data.builtInConverters;
        this.#viewInput.extensionConverters = data.extensionConverters;
        this.#viewInput.isSelected = data.isSelected;
        this.#viewInput.recorderSettings = data.recorderSettings;
        this.#viewInput.actions = this.#getActions();
        this.#render();
        if (this.#viewInput.state !== prevState && this.#viewInput.state === 'current' && !this.#viewInput.isVisible) {
            this.scrollIntoView();
        }
    }
    get step() {
        return this.#viewInput.step;
    }
    get section() {
        return this.#viewInput.section;
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_stepView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]];
        this.#observer.observe(this);
        this.#render();
    }
    disconnectedCallback() {
        this.#observer.unobserve(this);
    }
    #toggleShowDetails() {
        this.#viewInput.showDetails = !this.#viewInput.showDetails;
        this.#render();
    }
    #onToggleShowDetailsKeydown(event) {
        const keyboardEvent = event;
        if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
            this.#toggleShowDetails();
            event.stopPropagation();
            event.preventDefault();
        }
    }
    #stepEdited(event) {
        const step = this.#viewInput.step || this.#viewInput.section?.causingStep;
        if (!step) {
            throw new Error('Expected step.');
        }
        this.dispatchEvent(new StepChanged(step, event.data));
    }
    #handleStepAction(event) {
        switch (event.itemValue) {
            case 'add-step-before': {
                const stepOrSection = this.#viewInput.step || this.#viewInput.section;
                if (!stepOrSection) {
                    throw new Error('Expected step or section.');
                }
                this.dispatchEvent(new AddStep(stepOrSection, "before" /* AddStepPosition.BEFORE */));
                break;
            }
            case 'add-step-after': {
                const stepOrSection = this.#viewInput.step || this.#viewInput.section;
                if (!stepOrSection) {
                    throw new Error('Expected step or section.');
                }
                this.dispatchEvent(new AddStep(stepOrSection, "after" /* AddStepPosition.AFTER */));
                break;
            }
            case 'remove-step': {
                const causingStep = this.#viewInput.section?.causingStep;
                if (!this.#viewInput.step && !causingStep) {
                    throw new Error('Expected step.');
                }
                this.dispatchEvent(new RemoveStep(this.#viewInput.step || causingStep));
                break;
            }
            case 'add-breakpoint': {
                if (!this.#viewInput.step) {
                    throw new Error('Expected step');
                }
                this.dispatchEvent(new AddBreakpointEvent(this.#viewInput.stepIndex));
                break;
            }
            case 'remove-breakpoint': {
                if (!this.#viewInput.step) {
                    throw new Error('Expected step');
                }
                this.dispatchEvent(new RemoveBreakpointEvent(this.#viewInput.stepIndex));
                break;
            }
            default: {
                const actionId = event.itemValue;
                if (!actionId.startsWith(COPY_ACTION_PREFIX)) {
                    throw new Error('Unknown step action.');
                }
                const copyStep = this.#viewInput.step || this.#viewInput.section?.causingStep;
                if (!copyStep) {
                    throw new Error('Step not found.');
                }
                const converterId = actionId.substring(COPY_ACTION_PREFIX.length);
                if (this.#viewInput.recorderSettings) {
                    this.#viewInput.recorderSettings.preferredCopyFormat = converterId;
                }
                this.dispatchEvent(new CopyStepEvent(structuredClone(copyStep)));
            }
        }
    }
    #onBreakpointClick() {
        if (this.#viewInput.hasBreakpoint) {
            this.dispatchEvent(new RemoveBreakpointEvent(this.#viewInput.stepIndex));
        }
        else {
            this.dispatchEvent(new AddBreakpointEvent(this.#viewInput.stepIndex));
        }
        this.#render();
    }
    #getActions = () => {
        const actions = [];
        if (!this.#viewInput.isPlaying) {
            if (this.#viewInput.step) {
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
            if (this.#viewInput.removable) {
                actions.push({
                    id: 'remove-step',
                    group: 'stepManagement',
                    groupTitle: i18nString(UIStrings.stepManagement),
                    label: i18nString(UIStrings.removeStep),
                });
            }
        }
        if (this.#viewInput.step && !this.#viewInput.isRecording) {
            if (this.#viewInput.hasBreakpoint) {
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
        if (this.#viewInput.step) {
            for (const converter of this.#viewInput.builtInConverters || []) {
                actions.push({
                    id: COPY_ACTION_PREFIX + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(converter.getId()),
                    label: converter.getFormatName(),
                    group: 'copy',
                    groupTitle: i18nString(UIStrings.copyAs),
                });
            }
            for (const converter of this.#viewInput.extensionConverters || []) {
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
    };
    #onStepContextMenu(event) {
        const buttonElement = event.target instanceof _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button ? event.target : undefined;
        const menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event, {
            x: buttonElement?.getBoundingClientRect().left,
            y: buttonElement?.getBoundingClientRect().bottom,
        });
        const actions = this.#getActions();
        const copyActions = actions.filter(item => item.id.startsWith(COPY_ACTION_PREFIX));
        const otherActions = actions.filter(item => !item.id.startsWith(COPY_ACTION_PREFIX));
        for (const item of otherActions) {
            const section = menu.section(item.group);
            section.appendItem(item.label, () => {
                this.#handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(item.id));
            }, { jslogContext: item.id });
        }
        const preferredCopyAction = copyActions.find(item => item.id === COPY_ACTION_PREFIX + this.#viewInput.recorderSettings?.preferredCopyFormat);
        if (preferredCopyAction) {
            menu.section('copy').appendItem(preferredCopyAction.label, () => {
                this.#handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(preferredCopyAction.id));
            }, { jslogContext: preferredCopyAction.id });
        }
        if (copyActions.length) {
            const copyAs = menu.section('copy').appendSubMenuItem(i18nString(UIStrings.copyAs), false, 'copy');
            for (const item of copyActions) {
                if (item === preferredCopyAction) {
                    continue;
                }
                copyAs.section(item.group).appendItem(item.label, () => {
                    this.#handleStepAction(new _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_4__.Menu.MenuItemSelectedEvent(item.id));
                }, { jslogContext: item.id });
            }
        }
        void menu.show();
    }
    #render() {
        const output = {};
        this.#view(this.#viewInput, output, this.#shadow);
    }
}
customElements.define('devtools-step-view', StepView);
//# sourceMappingURL=StepView.js.map

/***/ }),

/***/ "./panels/recorder/components/TimelineSection.js":
/*!*******************************************************!*\
  !*** ./panels/recorder/components/TimelineSection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimelineSection: () => (/* binding */ TimelineSection)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _timelineSection_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timelineSection.css.js */ "./panels/recorder/components/timelineSection.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class TimelineSection extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-timeline-section`;
    #isEndOfGroup = false;
    #isStartOfGroup = false;
    #isFirstSection = false;
    #isLastSection = false;
    #isSelected = false;
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.adoptedStyleSheets = [_timelineSection_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
    }
    set data(data) {
        this.#isFirstSection = data.isFirstSection;
        this.#isLastSection = data.isLastSection;
        this.#isEndOfGroup = data.isEndOfGroup;
        this.#isStartOfGroup = data.isStartOfGroup;
        this.#isSelected = data.isSelected;
        this.#render();
    }
    connectedCallback() {
        this.#render();
    }
    #render() {
        const classes = {
            'timeline-section': true,
            'is-end-of-group': this.#isEndOfGroup,
            'is-start-of-group': this.#isStartOfGroup,
            'is-first-section': this.#isFirstSection,
            'is-last-section': this.#isLastSection,
            'is-selected': this.#isSelected,
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
    }
}
customElements.define('devtools-timeline-section', TimelineSection);
//# sourceMappingURL=TimelineSection.js.map

/***/ }),

/***/ "./panels/recorder/components/stepView.css.js":
/*!****************************************************!*\
  !*** ./panels/recorder/components/stepView.css.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.title-container {
  /* 18px for 3 dot menu icon */
  max-width: calc(100% - 18px);
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.03em;
  display: flex;
  flex-direction: row;
  gap: 3px;
  outline-offset: 3px;
}

.action {
  display: flex;
  align-items: flex-start;
}

.title {
  flex: 1;
  min-width: 0;
}

.is-start-of-group .title {
  font-weight: bold;
}

.error-icon {
  display: none;
}

.breakpoint-icon {
  visibility: hidden;
  cursor: pointer;
  opacity: 0%;
  fill: var(--sys-color-primary);
  stroke: #1a73e8; /* stylelint-disable-line plugin/use_theme_colors */
  transform: translate(-1.92px, -3px);
}

.circle-icon {
  fill: var(--sys-color-primary);
  stroke: var(--sys-color-cdt-base-container);
  stroke-width: 4px;
  r: 5px;
  cx: 8px;
  cy: 8px;
}

.is-start-of-group .circle-icon {
  r: 7px;
  fill: var(--sys-color-cdt-base-container);
  stroke: var(--sys-color-primary);
  stroke-width: 2px;
}

.step.is-success .circle-icon {
  fill: var(--sys-color-primary);
  stroke: var(--sys-color-primary);
}

.step.is-current .circle-icon {
  stroke-dasharray: 24 10;
  animation: rotate 1s linear infinite;
  fill: var(--sys-color-cdt-base-container);
  stroke: var(--sys-color-primary);
  stroke-width: 2px;
}

.error {
  margin: 16px 0 0;
  padding: 8px;
  background: var(--sys-color-error-container);
  color: var(--sys-color-error);
  position: relative;
}

@keyframes rotate {
  0% {
    transform: translate(8px, 8px) rotate(0) translate(-8px, -8px);
  }

  100% {
    transform: translate(8px, 8px) rotate(360deg) translate(-8px, -8px);
  }
}

.step.is-error .circle-icon {
  fill: var(--sys-color-error);
  stroke: var(--sys-color-error);
}

.step.is-error .error-icon {
  display: block;
  transform: translate(4px, 4px);
}

:host-context(.was-successful) .circle-icon {
  animation: flash-circle 2s;
}

:host-context(.was-successful) .breakpoint-icon {
  animation: flash-breakpoint-icon 2s;
}

@keyframes flash-circle {
  25% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }

  75% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }
}

@keyframes flash-breakpoint-icon {
  25% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }

  75% {
    fill: var(--override-color-recording-successful-text);
    stroke: var(--override-color-recording-successful-text);
  }
}

.chevron {
  width: 14px;
  height: 14px;
  transition: 200ms;
  position: absolute;
  top: 18px;
  left: 24px;
  transform: rotate(-90deg);
  color: var(--sys-color-on-surface);
}

.expanded .chevron {
  transform: rotate(0deg);
}

.is-start-of-group .chevron {
  top: 34px;
}

.details {
  display: none;
  margin-top: 8px;
  position: relative;
}

.expanded .details {
  display: block;
}

.step-details {
  overflow: auto;
}

devtools-recorder-step-editor {
  border: 1px solid var(--sys-color-neutral-outline);
  padding: 3px 6px 6px;
  margin-left: -6px;
  border-radius: 3px;
}

devtools-recorder-step-editor:hover {
  border: 1px solid var(--sys-color-neutral-outline);
}

devtools-recorder-step-editor.is-selected {
  background-color: color-mix(in sRGB, var(--sys-color-tonal-container), var(--sys-color-cdt-base-container) 50%);
  border: 1px solid var(--sys-color-tonal-outline);
}

.summary {
  display: flex;
  flex-flow: row nowrap;
}

.filler {
  flex-grow: 1;
}

.subtitle {
  font-weight: normal;
  color: var(--sys-color-on-surface-subtle);
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.main-title {
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.step-actions {
  border: none;
  border-radius: 0;
  height: 24px;

  --override-select-menu-show-button-border-radius: 0;
  --override-select-menu-show-button-outline: none;
  --override-select-menu-show-button-padding: 0;
}

.step.has-breakpoint .circle-icon {
  visibility: hidden;
}

.step:not(.is-start-of-group).has-breakpoint .breakpoint-icon {
  visibility: visible;
  opacity: 100%;
}

.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .circle-icon {
  transition: opacity 0.2s;
  opacity: 0%;
}

.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .error-icon {
  visibility: hidden;
}

.step:not(.is-start-of-group):not(.has-breakpoint) .icon:hover .breakpoint-icon {
  transition: opacity 0.2s;
  visibility: visible;
  opacity: 50%;
}

/*# sourceURL=stepView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/recorder/components/timelineSection.css.js":
/*!***********************************************************!*\
  !*** ./panels/recorder/components/timelineSection.css.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.timeline-section {
  position: relative;
  padding: 16px 0 16px 40px;
  margin-left: 8px;

  --override-color-recording-successful-text: #36a854;
  --override-color-recording-successful-background: #e6f4ea;
}

.overlay {
  position: absolute;
  width: 100vw;
  height: 100%;
  /* Offset of 32px for spacing and 80px for screenshot */
  left: calc(-32px - 80px);
  top: 0;
  z-index: -1;
  pointer-events: none;
}

/* stylelint-disable-next-line at-rule-no-unknown */
@container (max-width: 400px) {
  .overlay {
    /* Offset of 32px for spacing */
    left: -32px;
  }
}

:hover .overlay {
  background: var(--sys-color-state-hover-on-subtle);
}

.is-selected .overlay {
  background: var(--sys-color-tonal-container);
}

:host-context(.is-stopped) .overlay {
  background: var(--sys-color-state-ripple-primary);
  outline: 1px solid var(--sys-color-state-focus-ring);
  z-index: 4;
}

.is-start-of-group {
  padding-top: 28px;
}

.is-end-of-group {
  padding-bottom: 24px;
}

.icon {
  position: absolute;
  left: 4px;
  transform: translateX(-50%);
  z-index: 2;
}

.bar {
  position: absolute;
  left: 4px;
  display: block;
  transform: translateX(-50%);
  top: 18px;
  height: calc(100% + 8px);
  z-index: 1; /* We want this to be below of \\'.overlay\\' for stopped case */
}

.bar .background {
  fill: var(--sys-color-state-hover-on-subtle);
}

.bar .line {
  fill: var(--sys-color-primary);
}

.is-first-section .bar {
  top: 32px;
  height: calc(100% - 8px);
  display: none;
}

.is-first-section:not(.is-last-section) .bar {
  display: block;
}

.is-last-section .bar .line {
  display: none;
}

.is-last-section .bar .background {
  display: none;
}

:host-context(.is-error) .bar .line {
  fill: var(--sys-color-error);
}

:host-context(.is-error) .bar .background {
  fill: var(--sys-color-error-container);
}

:host-context(.was-successful) .bar .background {
  animation: flash-background 2s;
}

:host-context(.was-successful) .bar .line {
  animation: flash-line 2s;
}

@keyframes flash-background {
  25% {
    fill: var(--override-color-recording-successful-background);
  }

  75% {
    fill: var(--override-color-recording-successful-background);
  }
}

@keyframes flash-line {
  25% {
    fill: var(--override-color-recording-successful-text);
  }

  75% {
    fill: var(--override-color-recording-successful-text);
  }
}

/*# sourceURL=timelineSection.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);