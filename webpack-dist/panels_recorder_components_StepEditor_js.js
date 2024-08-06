"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_StepEditor_js"],{

/***/ "./panels/recorder/components/StepEditor.js":
/*!**************************************************!*\
  !*** ./panels/recorder/components/StepEditor.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorState: () => (/* binding */ EditorState),
/* harmony export */   StepEditedEvent: () => (/* binding */ StepEditedEvent),
/* harmony export */   StepEditor: () => (/* binding */ StepEditor)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/suggestion_input/suggestion_input.js */ "./ui/components/suggestion_input/suggestion_input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _controllers_controllers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/controllers.js */ "./panels/recorder/controllers/controllers.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/util.js */ "./panels/recorder/util/util.js");
/* harmony import */ var _stepEditor_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stepEditor.css.js */ "./panels/recorder/components/stepEditor.css.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util.js */ "./panels/recorder/components/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












const { html, Decorators, Directives, LitElement } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__;
const { customElement, property, state } = Decorators;
const { live } = Directives;
const typeConverters = Object.freeze({
    string: (value) => value.trim(),
    number: (value) => {
        const number = parseFloat(value);
        if (Number.isNaN(number)) {
            return 0;
        }
        return number;
    },
    boolean: (value) => {
        if (value.toLowerCase() === 'true') {
            return true;
        }
        return false;
    },
});
const dataTypeByAttribute = Object.freeze({
    selectors: 'string',
    offsetX: 'number',
    offsetY: 'number',
    target: 'string',
    frame: 'number',
    assertedEvents: 'string',
    value: 'string',
    key: 'string',
    operator: 'string',
    count: 'number',
    expression: 'string',
    x: 'number',
    y: 'number',
    url: 'string',
    type: 'string',
    timeout: 'number',
    duration: 'number',
    button: 'string',
    deviceType: 'string',
    width: 'number',
    height: 'number',
    deviceScaleFactor: 'number',
    isMobile: 'boolean',
    hasTouch: 'boolean',
    isLandscape: 'boolean',
    download: 'number',
    upload: 'number',
    latency: 'number',
    name: 'string',
    parameters: 'string',
    visible: 'boolean',
    properties: 'string',
    attributes: 'string',
});
const defaultValuesByAttribute = (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)({
    selectors: [['.cls']],
    offsetX: 1,
    offsetY: 1,
    target: 'main',
    frame: [0],
    assertedEvents: [
        { type: 'navigation', url: 'https://example.com', title: 'Title' },
    ],
    value: 'Value',
    key: 'Enter',
    operator: '>=',
    count: 1,
    expression: 'true',
    x: 0,
    y: 0,
    url: 'https://example.com',
    timeout: 5000,
    duration: 50,
    deviceType: 'mouse',
    button: 'primary',
    type: 'click',
    width: 800,
    height: 600,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: true,
    download: 1000,
    upload: 1000,
    latency: 25,
    name: 'customParam',
    parameters: '{}',
    properties: '{}',
    attributes: [{ name: 'attribute', value: 'value' }],
    visible: true,
});
const attributesByType = (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)({
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Click]: {
        required: ['selectors', 'offsetX', 'offsetY'],
        optional: [
            'assertedEvents',
            'button',
            'deviceType',
            'duration',
            'frame',
            'target',
            'timeout',
        ],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.DoubleClick]: {
        required: ['offsetX', 'offsetY', 'selectors'],
        optional: [
            'assertedEvents',
            'button',
            'deviceType',
            'frame',
            'target',
            'timeout',
        ],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Hover]: {
        required: ['selectors'],
        optional: ['assertedEvents', 'frame', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Change]: {
        required: ['selectors', 'value'],
        optional: ['assertedEvents', 'frame', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.KeyDown]: {
        required: ['key'],
        optional: ['assertedEvents', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.KeyUp]: {
        required: ['key'],
        optional: ['assertedEvents', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Scroll]: {
        required: [],
        optional: ['assertedEvents', 'frame', 'target', 'timeout', 'x', 'y'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Close]: {
        required: [],
        optional: ['assertedEvents', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.Navigate]: {
        required: ['url'],
        optional: ['assertedEvents', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForElement]: {
        required: ['selectors'],
        optional: [
            'assertedEvents',
            'attributes',
            'count',
            'frame',
            'operator',
            'properties',
            'target',
            'timeout',
            'visible',
        ],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForExpression]: {
        required: ['expression'],
        optional: ['assertedEvents', 'frame', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.CustomStep]: {
        required: ['name', 'parameters'],
        optional: ['assertedEvents', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.EmulateNetworkConditions]: {
        required: ['download', 'latency', 'upload'],
        optional: ['assertedEvents', 'target', 'timeout'],
    },
    [_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.SetViewport]: {
        required: [
            'deviceScaleFactor',
            'hasTouch',
            'height',
            'isLandscape',
            'isMobile',
            'width',
        ],
        optional: ['assertedEvents', 'target', 'timeout'],
    },
});
const UIStrings = {
    /**
     *@description The text that is disabled when the steps were not saved due to an error. The error message itself is always in English and not translated.
     *@example {Saving failed} error
     */
    notSaved: 'Not saved: {error}',
    /**
     *@description The button title that adds a new attribute to the form.
     *@example {timeout} attributeName
     */
    addAttribute: 'Add {attributeName}',
    /**
     *@description The title of a button that deletes an attribute from the form.
     */
    deleteRow: 'Delete row',
    /**
     *@description The title of a button that allows you to select an element on the page and update CSS/ARIA selectors.
     */
    selectorPicker: 'Select an element in the page to update selectors',
    /**
     *@description The title of a button that adds a new input field for the entry of the frame index. Frame index is the number of the frame within the page's frame tree.
     */
    addFrameIndex: 'Add frame index within the frame tree',
    /**
     *@description The title of a button that removes a frame index field from the form.
     */
    removeFrameIndex: 'Remove frame index',
    /**
     *@description The title of a button that adds a field to input a part of a selector in the editor form.
     */
    addSelectorPart: 'Add a selector part',
    /**
     *@description The title of a button that removes a field to input a part of a selector in the editor form.
     */
    removeSelectorPart: 'Remove a selector part',
    /**
     *@description The title of a button that adds a field to input a selector in the editor form.
     */
    addSelector: 'Add a selector',
    /**
     *@description The title of a button that removes a field to input a selector in the editor form.
     */
    removeSelector: 'Remove a selector',
    /**
     *@description The error message display when a user enters a type in the input not associates with any existing types.
     */
    unknownActionType: 'Unknown action type.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/StepEditor.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class StepEditedEvent extends Event {
    static eventName = 'stepedited';
    data;
    constructor(step) {
        super(StepEditedEvent.eventName, { bubbles: true, composed: true });
        this.data = step;
    }
}
// Makes use of the fact that JSON values get their undefined values cleaned
// after stringification.
const cleanUndefineds = (value) => {
    return JSON.parse(JSON.stringify(value));
};
class EditorState {
    static #puppeteer = new _util_util_js__WEBPACK_IMPORTED_MODULE_9__.SharedObject.SharedObject(() => _models_models_js__WEBPACK_IMPORTED_MODULE_8__.RecordingPlayer.RecordingPlayer.connectPuppeteer(), ({ browser }) => _models_models_js__WEBPACK_IMPORTED_MODULE_8__.RecordingPlayer.RecordingPlayer.disconnectPuppeteer(browser));
    static async default(type) {
        const state = { type };
        const attributes = attributesByType[state.type];
        let promise = Promise.resolve();
        for (const attribute of attributes.required) {
            promise = Promise.all([
                promise,
                (async () => Object.assign(state, {
                    [attribute]: await this.defaultByAttribute(state, attribute),
                }))(),
            ]);
        }
        await promise;
        return Object.freeze(state);
    }
    static async defaultByAttribute(_state, attribute) {
        return this.#puppeteer.run(puppeteer => {
            switch (attribute) {
                case 'assertedEvents': {
                    return (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(defaultValuesByAttribute.assertedEvents, new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                        0: {
                            url: puppeteer.page.url() || defaultValuesByAttribute.assertedEvents[0].url,
                        },
                    }));
                }
                case 'url': {
                    return puppeteer.page.url() || defaultValuesByAttribute.url;
                }
                case 'height': {
                    return (puppeteer.page.evaluate(() => visualViewport.height) ||
                        defaultValuesByAttribute.height);
                }
                case 'width': {
                    return (puppeteer.page.evaluate(() => visualViewport.width) ||
                        defaultValuesByAttribute.width);
                }
                default: {
                    return defaultValuesByAttribute[attribute];
                }
            }
        });
    }
    static fromStep(step) {
        const state = structuredClone(step);
        for (const key of ['parameters', 'properties']) {
            if (key in step && step[key] !== undefined) {
                // @ts-ignore Potential infinite type instantiation.
                state[key] = JSON.stringify(step[key]);
            }
        }
        if ('attributes' in step && step.attributes) {
            state.attributes = [];
            for (const [name, value] of Object.entries(step.attributes)) {
                state.attributes.push({ name, value });
            }
        }
        if ('selectors' in step) {
            state.selectors = step.selectors.map(selector => {
                if (typeof selector === 'string') {
                    return [selector];
                }
                return [...selector];
            });
        }
        return (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)(state);
    }
    static toStep(state) {
        const step = structuredClone(state);
        for (const key of ['parameters', 'properties']) {
            const value = state[key];
            if (value) {
                Object.assign(step, { [key]: JSON.parse(value) });
            }
        }
        if (state.attributes) {
            if (state.attributes.length !== 0) {
                const attributes = {};
                for (const { name, value } of state.attributes) {
                    Object.assign(attributes, { [name]: value });
                }
                Object.assign(step, { attributes });
            }
            else if ('attributes' in step) {
                delete step.attributes;
            }
        }
        if (state.selectors) {
            const selectors = state.selectors.filter(selector => selector.length > 0).map(selector => {
                if (selector.length === 1) {
                    return selector[0];
                }
                return [...selector];
            });
            if (selectors.length !== 0) {
                Object.assign(step, { selectors });
            }
            else if ('selectors' in step) {
                // @ts-expect-error We want to trigger an error in the parsing phase.
                delete step.selectors;
            }
        }
        if (state.frame && state.frame.length === 0 && 'frame' in step) {
            delete step.frame;
        }
        return cleanUndefineds(_models_models_js__WEBPACK_IMPORTED_MODULE_8__.SchemaUtils.parseStep(step));
    }
}
/**
 * @fires RequestSelectorAttributeEvent#requestselectorattribute
 * @fires SelectorPickedEvent#selectorpicked
 */
let RecorderSelectorPickerButton = class RecorderSelectorPickerButton extends LitElement {
    static styles = [_stepEditor_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]];
    #picker = new _controllers_controllers_js__WEBPACK_IMPORTED_MODULE_7__.SelectorPicker.SelectorPicker(this);
    constructor() {
        super();
        this.disabled = false;
    }
    #handleClickEvent = (event) => {
        event.preventDefault();
        event.stopPropagation();
        void this.#picker.toggle();
    };
    disconnectedCallback() {
        super.disconnectedCallback();
        void this.#picker.stop();
    }
    render() {
        if (this.disabled) {
            return;
        }
        return html `<devtools-button
      @click=${this.#handleClickEvent}
      .title=${i18nString(UIStrings.selectorPicker)}
      class="selector-picker"
      .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
      .iconName=${'select-element'}
      .active=${this.#picker.active}
      .variant=${"icon" /* Buttons.Button.Variant.ICON */}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle('selector-picker').track({
            click: true,
        })}
    ></devtools-button>`;
    }
};
__decorate([
    property()
], RecorderSelectorPickerButton.prototype, "disabled", void 0);
RecorderSelectorPickerButton = __decorate([
    customElement('devtools-recorder-selector-picker-button')
], RecorderSelectorPickerButton);
/**
 * @fires RequestSelectorAttributeEvent#requestselectorattribute
 * @fires StepEditedEvent#stepedited
 */
let StepEditor = class StepEditor extends LitElement {
    static styles = [_stepEditor_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]];
    #renderedAttributes = new Set();
    constructor() {
        super();
        this.state = { type: _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForElement };
        this.isTypeEditable = true;
        this.disabled = false;
    }
    createRenderRoot() {
        const root = super.createRenderRoot();
        root.addEventListener('keydown', this.#handleKeyDownEvent);
        return root;
    }
    set step(step) {
        this.state = (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)(EditorState.fromStep(step));
        this.error = undefined;
    }
    #commit(updatedState) {
        try {
            this.dispatchEvent(new StepEditedEvent(EditorState.toStep(updatedState)));
            // Note we don't need to update this variable since it will come from up
            // the tree, but processing up the tree is asynchronous implying we cannot
            // reliably know when the state will come back down. Since we need to
            // focus the DOM elements that may be created as a result of this new
            // state, we set it here for waiting on the updateComplete promise later.
            this.state = updatedState;
        }
        catch (error) {
            this.error = error.message;
        }
    }
    #handleSelectorPickedEvent = (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.#commit((0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, {
            target: event.data.target,
            frame: event.data.frame,
            selectors: event.data.selectors.map(selector => typeof selector === 'string' ? [selector] : selector),
            offsetX: event.data.offsetX,
            offsetY: event.data.offsetY,
        }));
    };
    #handleAddOrRemoveClick = (assignments, query, metric) => event => {
        event.preventDefault();
        event.stopPropagation();
        this.#commit((0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, assignments));
        this.#ensureFocus(query);
        if (metric) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(metric);
        }
    };
    #handleKeyDownEvent = (event) => {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.assert)(event instanceof KeyboardEvent);
        if (event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__.SuggestionInput.SuggestionInput && event.key === 'Enter') {
            event.preventDefault();
            event.stopPropagation();
            const elements = this.renderRoot.querySelectorAll('devtools-suggestion-input');
            const element = [...elements].findIndex(value => value === event.target);
            if (element >= 0 && element + 1 < elements.length) {
                elements[element + 1].focus();
            }
            else {
                event.target.blur();
            }
        }
    };
    #handleInputBlur = (opts) => event => {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.assert)(event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__.SuggestionInput.SuggestionInput);
        if (event.target.disabled) {
            return;
        }
        const dataType = dataTypeByAttribute[opts.attribute];
        const value = typeConverters[dataType](event.target.value);
        const assignments = opts.from.bind(this)(value);
        if (!assignments) {
            return;
        }
        this.#commit((0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, assignments));
        if (opts.metric) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(opts.metric);
        }
    };
    #handleTypeInputBlur = async (event) => {
        (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.assert)(event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__.SuggestionInput.SuggestionInput);
        if (event.target.disabled) {
            return;
        }
        const value = event.target.value;
        if (value === this.state.type) {
            return;
        }
        if (!Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType).includes(value)) {
            this.error = i18nString(UIStrings.unknownActionType);
            return;
        }
        this.#commit(await EditorState.default(value));
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(9 /* Host.UserMetrics.RecordingEdited.TypeChanged */);
    };
    #handleAddRowClickEvent = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const attribute = event.target.dataset.attribute;
        this.#commit((0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, {
            [attribute]: await EditorState.defaultByAttribute(this.state, attribute),
        }));
        this.#ensureFocus(`[data-attribute=${attribute}].attribute devtools-suggestion-input`);
    };
    #renderInlineButton(opts) {
        if (this.disabled) {
            return;
        }
        return html `
      <devtools-button
        title=${opts.title}
        .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
        .iconName=${opts.iconName}
        .variant=${"icon" /* Buttons.Button.Variant.ICON */}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action(opts.class).track({
            click: true,
        })}
        class="inline-button ${opts.class}"
        @click=${opts.onClick}
      ></devtools-button>
    `;
    }
    #renderDeleteButton(attribute) {
        if (this.disabled) {
            return;
        }
        const attributes = attributesByType[this.state.type];
        const optional = [...attributes.optional].includes(attribute);
        if (!optional || this.disabled) {
            return;
        }
        // clang-format off
        return html `<devtools-button
      .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
      .iconName=${'bin'}
      .variant=${"icon" /* Buttons.Button.Variant.ICON */}
      .title=${i18nString(UIStrings.deleteRow)}
      class="inline-button delete-row"
      data-attribute=${attribute}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action('delete').track({ click: true })}
      @click=${(event) => {
            event.preventDefault();
            event.stopPropagation();
            this.#commit((0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, { [attribute]: undefined }));
        }}
    ></devtools-button>`;
        // clang-format on
    }
    #renderTypeRow(editable) {
        this.#renderedAttributes.add('type');
        // clang-format off
        return html `<div class="row attribute" data-attribute="type" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('type')}>
      <div>type<span class="separator">:</span></div>
      <devtools-suggestion-input
        .disabled=${!editable || this.disabled}
        .options=${Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType)}
        .placeholder=${defaultValuesByAttribute.type}
        .value=${live(this.state.type)}
        @blur=${this.#handleTypeInputBlur}
      ></devtools-suggestion-input>
    </div>`;
        // clang-format on
    }
    #renderRow(attribute) {
        this.#renderedAttributes.add(attribute);
        const attributeValue = this.state[attribute]?.toString();
        if (attributeValue === undefined) {
            return;
        }
        // clang-format off
        return html `<div class="row attribute" data-attribute=${attribute} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(attribute))}>
      <div>${attribute}<span class="separator">:</span></div>
      <devtools-suggestion-input
        .disabled=${this.disabled}
        .placeholder=${defaultValuesByAttribute[attribute].toString()}
        .value=${live(attributeValue)}
        .mimeType=${(() => {
            switch (attribute) {
                case 'expression':
                    return 'text/javascript';
                case 'properties':
                    return 'application/json';
                default:
                    return '';
            }
        })()}
        @blur=${this.#handleInputBlur({
            attribute,
            from(value) {
                if (this.state[attribute] === undefined) {
                    return;
                }
                switch (attribute) {
                    case 'properties':
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(2 /* Host.UserMetrics.RecordingAssertion.PropertyAssertionEdited */);
                        break;
                }
                return { [attribute]: value };
            },
            metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */,
        })}
      ></devtools-suggestion-input>
      ${this.#renderDeleteButton(attribute)}
    </div>`;
        // clang-format on
    }
    #renderFrameRow() {
        this.#renderedAttributes.add('frame');
        if (this.state.frame === undefined) {
            return;
        }
        // clang-format off
        return html `
      <div class="attribute" data-attribute="frame" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('frame')}>
        <div class="row">
          <div>frame<span class="separator">:</span></div>
          ${this.#renderDeleteButton('frame')}
        </div>
        ${this.state.frame.map((frame, index, frames) => {
            return html `
            <div class="padded row">
              <devtools-suggestion-input
                .disabled=${this.disabled}
                .placeholder=${defaultValuesByAttribute.frame[0].toString()}
                .value=${live(frame.toString())}
                data-path=${`frame.${index}`}
                @blur=${this.#handleInputBlur({
                attribute: 'frame',
                from(value) {
                    if (this.state.frame?.[index] === undefined) {
                        return;
                    }
                    return {
                        frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: value }),
                    };
                },
                metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */,
            })}
              ></devtools-suggestion-input>
              ${this.#renderInlineButton({
                class: 'add-frame',
                title: i18nString(UIStrings.addFrameIndex),
                iconName: 'plus',
                onClick: this.#handleAddOrRemoveClick({
                    frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                        [index + 1]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(defaultValuesByAttribute.frame[0]),
                    }),
                }, `devtools-suggestion-input[data-path="frame.${index + 1}"]`, 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */),
            })}
              ${this.#renderInlineButton({
                class: 'remove-frame',
                title: i18nString(UIStrings.removeFrameIndex),
                iconName: 'minus',
                onClick: this.#handleAddOrRemoveClick({
                    frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: undefined }),
                }, `devtools-suggestion-input[data-path="frame.${Math.min(index, frames.length - 2)}"]`, 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */),
            })}
            </div>
          `;
        })}
      </div>
    `;
        // clang-format on
    }
    #renderSelectorsRow() {
        this.#renderedAttributes.add('selectors');
        if (this.state.selectors === undefined) {
            return;
        }
        // clang-format off
        return html `<div class="attribute" data-attribute="selectors" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('selectors')}>
      <div class="row">
        <div>selectors<span class="separator">:</span></div>
        <devtools-recorder-selector-picker-button
          @selectorpicked=${this.#handleSelectorPickedEvent}
          .disabled=${this.disabled}
        ></devtools-recorder-selector-picker-button>
        ${this.#renderDeleteButton('selectors')}
      </div>
      ${this.state.selectors.map((selector, index, selectors) => {
            return html `<div class="padded row" data-selector-path=${index}>
            <div>selector #${index + 1}<span class="separator">:</span></div>
            ${this.#renderInlineButton({
                class: 'add-selector',
                title: i18nString(UIStrings.addSelector),
                iconName: 'plus',
                onClick: this.#handleAddOrRemoveClick({
                    selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                        [index + 1]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(structuredClone(defaultValuesByAttribute.selectors[0])),
                    }),
                }, `devtools-suggestion-input[data-path="selectors.${index + 1}.0"]`, 4 /* Host.UserMetrics.RecordingEdited.SelectorAdded */),
            })}
            ${this.#renderInlineButton({
                class: 'remove-selector',
                title: i18nString(UIStrings.removeSelector),
                iconName: 'minus',
                onClick: this.#handleAddOrRemoveClick({ selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: undefined }) }, `devtools-suggestion-input[data-path="selectors.${Math.min(index, selectors.length - 2)}.0"]`, 5 /* Host.UserMetrics.RecordingEdited.SelectorRemoved */),
            })}
          </div>
          ${selector.map((part, partIndex, parts) => {
                return html `<div
              class="double padded row"
              data-selector-path="${index}.${partIndex}"
            >
              <devtools-suggestion-input
                .disabled=${this.disabled}
                .placeholder=${defaultValuesByAttribute.selectors[0][0]}
                .value=${live(part)}
                data-path=${`selectors.${index}.${partIndex}`}
                @blur=${this.#handleInputBlur({
                    attribute: 'selectors',
                    from(value) {
                        if (this.state.selectors?.[index]?.[partIndex] === undefined) {
                            return;
                        }
                        return {
                            selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                                [index]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                                    [partIndex]: value,
                                }),
                            }),
                        };
                    },
                    metric: 7 /* Host.UserMetrics.RecordingEdited.SelectorPartEdited */,
                })}
              ></devtools-suggestion-input>
              ${this.#renderInlineButton({
                    class: 'add-selector-part',
                    title: i18nString(UIStrings.addSelectorPart),
                    iconName: 'plus',
                    onClick: this.#handleAddOrRemoveClick({
                        selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                            [index]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                                [partIndex + 1]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(defaultValuesByAttribute.selectors[0][0]),
                            }),
                        }),
                    }, `devtools-suggestion-input[data-path="selectors.${index}.${partIndex + 1}"]`, 6 /* Host.UserMetrics.RecordingEdited.SelectorPartAdded */),
                })}
              ${this.#renderInlineButton({
                    class: 'remove-selector-part',
                    title: i18nString(UIStrings.removeSelectorPart),
                    iconName: 'minus',
                    onClick: this.#handleAddOrRemoveClick({
                        selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                            [index]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                                [partIndex]: undefined,
                            }),
                        }),
                    }, `devtools-suggestion-input[data-path="selectors.${index}.${Math.min(partIndex, parts.length - 2)}"]`, 8 /* Host.UserMetrics.RecordingEdited.SelectorPartRemoved */),
                })}
            </div>`;
            })}`;
        })}
    </div>`;
        // clang-format on
    }
    #renderAssertedEvents() {
        this.#renderedAttributes.add('assertedEvents');
        if (this.state.assertedEvents === undefined) {
            return;
        }
        // clang-format off
        return html `<div class="attribute" data-attribute="assertedEvents" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('asserted-events')}>
      <div class="row">
        <div>asserted events<span class="separator">:</span></div>
        ${this.#renderDeleteButton('assertedEvents')}
      </div>
      ${this.state.assertedEvents.map((event, index) => {
            return html ` <div class="padded row" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('event-type')}>
            <div>type<span class="separator">:</span></div>
            <div>${event.type}</div>
          </div>
          <div class="padded row" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('event-title')}>
            <div>title<span class="separator">:</span></div>
            <devtools-suggestion-input
              .disabled=${this.disabled}
              .placeholder=${defaultValuesByAttribute.assertedEvents[0].title}
              .value=${live(event.title ?? '')}
              @blur=${this.#handleInputBlur({
                attribute: 'assertedEvents',
                from(value) {
                    if (this.state.assertedEvents?.[index]?.title === undefined) {
                        return;
                    }
                    return {
                        assertedEvents: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                            [index]: { title: value },
                        }),
                    };
                },
                metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */,
            })}
            ></devtools-suggestion-input>
          </div>
          <div class="padded row" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('event-url')}>
            <div>url<span class="separator">:</span></div>
            <devtools-suggestion-input
              .disabled=${this.disabled}
              .placeholder=${defaultValuesByAttribute.assertedEvents[0].url}
              .value=${live(event.url ?? '')}
              @blur=${this.#handleInputBlur({
                attribute: 'url',
                from(value) {
                    if (this.state.assertedEvents?.[index]?.url === undefined) {
                        return;
                    }
                    return {
                        assertedEvents: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                            [index]: { url: value },
                        }),
                    };
                },
                metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */,
            })}
            ></devtools-suggestion-input>
          </div>`;
        })}
    </div> `;
        // clang-format on
    }
    #renderAttributesRow() {
        this.#renderedAttributes.add('attributes');
        if (this.state.attributes === undefined) {
            return;
        }
        // clang-format off
        return html `<div class="attribute" data-attribute="attributes" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('attributes')}>
      <div class="row">
        <div>attributes<span class="separator">:</span></div>
        ${this.#renderDeleteButton('attributes')}
      </div>
      ${this.state.attributes.map(({ name, value }, index, attributes) => {
            return html `<div class="padded row" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('attribute')}>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${defaultValuesByAttribute.attributes[0].name}
            .value=${live(name)}
            data-path=${`attributes.${index}.name`}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.key().track({ change: true })}
            @blur=${this.#handleInputBlur({
                attribute: 'attributes',
                from(name) {
                    if (this.state.attributes?.[index]?.name === undefined) {
                        return;
                    }
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(3 /* Host.UserMetrics.RecordingAssertion.AttributeAssertionEdited */);
                    return {
                        attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: { name } }),
                    };
                },
                metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */,
            })}
          ></devtools-suggestion-input>
          <span class="separator">:</span>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${defaultValuesByAttribute.attributes[0].value}
            .value=${live(value)}
            data-path=${`attributes.${index}.value`}
            @blur=${this.#handleInputBlur({
                attribute: 'attributes',
                from(value) {
                    if (this.state.attributes?.[index]?.value === undefined) {
                        return;
                    }
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(3 /* Host.UserMetrics.RecordingAssertion.AttributeAssertionEdited */);
                    return {
                        attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: { value } }),
                    };
                },
                metric: 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */,
            })}
          ></devtools-suggestion-input>
          ${this.#renderInlineButton({
                class: 'add-attribute-assertion',
                title: i18nString(UIStrings.addSelectorPart),
                iconName: 'plus',
                onClick: this.#handleAddOrRemoveClick({
                    attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                        [index + 1]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment((() => {
                            {
                                const names = new Set(attributes.map(({ name }) => name));
                                const defaultAttribute = defaultValuesByAttribute.attributes[0];
                                let name = defaultAttribute.name;
                                let i = 0;
                                while (names.has(name)) {
                                    ++i;
                                    name = `${defaultAttribute.name}-${i}`;
                                }
                                return { ...defaultAttribute, name };
                            }
                        })()),
                    }),
                }, `devtools-suggestion-input[data-path="attributes.${index + 1}.name"]`, 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */),
            })}
          ${this.#renderInlineButton({
                class: 'remove-attribute-assertion',
                title: i18nString(UIStrings.removeSelectorPart),
                iconName: 'minus',
                onClick: this.#handleAddOrRemoveClick({ attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: undefined }) }, `devtools-suggestion-input[data-path="attributes.${Math.min(index, attributes.length - 2)}.value"]`, 10 /* Host.UserMetrics.RecordingEdited.OtherEditing */),
            })}
        </div>`;
        })}
    </div>`;
        // clang-format on
    }
    #renderAddRowButtons() {
        const attributes = attributesByType[this.state.type];
        return [...attributes.optional].filter(attr => this.state[attr] === undefined).map(attr => {
            // clang-format off
            return html `<devtools-button
          .variant=${"outlined" /* Buttons.Button.Variant.OUTLINED */}
          class="add-row"
          data-attribute=${attr}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action(`add-${_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(attr)}`)}
          @click=${this.#handleAddRowClickEvent}
        >
          ${i18nString(UIStrings.addAttribute, {
                attributeName: attr,
            })}
        </devtools-button>`;
            // clang-format on
        });
    }
    #ensureFocus = (query) => {
        void this.updateComplete.then(() => {
            const node = this.renderRoot.querySelector(query);
            node?.focus();
        });
    };
    render() {
        this.#renderedAttributes = new Set();
        // clang-format off
        const result = html `
      <div class="wrapper" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.tree('step-editor')}>
        ${this.#renderTypeRow(this.isTypeEditable)} ${this.#renderRow('target')}
        ${this.#renderFrameRow()} ${this.#renderSelectorsRow()}
        ${this.#renderRow('deviceType')} ${this.#renderRow('button')}
        ${this.#renderRow('url')} ${this.#renderRow('x')}
        ${this.#renderRow('y')} ${this.#renderRow('offsetX')}
        ${this.#renderRow('offsetY')} ${this.#renderRow('value')}
        ${this.#renderRow('key')} ${this.#renderRow('operator')}
        ${this.#renderRow('count')} ${this.#renderRow('expression')}
        ${this.#renderRow('duration')} ${this.#renderAssertedEvents()}
        ${this.#renderRow('timeout')} ${this.#renderRow('width')}
        ${this.#renderRow('height')} ${this.#renderRow('deviceScaleFactor')}
        ${this.#renderRow('isMobile')} ${this.#renderRow('hasTouch')}
        ${this.#renderRow('isLandscape')} ${this.#renderRow('download')}
        ${this.#renderRow('upload')} ${this.#renderRow('latency')}
        ${this.#renderRow('name')} ${this.#renderRow('parameters')}
        ${this.#renderRow('visible')} ${this.#renderRow('properties')}
        ${this.#renderAttributesRow()}
        ${this.error
            ? html `
              <div class="error">
                ${i18nString(UIStrings.notSaved, {
                error: this.error,
            })}
              </div>
            `
            : undefined}
        ${!this.disabled
            ? html `<div
              class="row-buttons wrapped gap row regular-font no-margin"
            >
              ${this.#renderAddRowButtons()}
            </div>`
            : undefined}
      </div>
    `;
        // clang-format on
        for (const key of Object.keys(dataTypeByAttribute)) {
            if (!this.#renderedAttributes.has(key)) {
                throw new Error(`The editable attribute ${key} does not have UI`);
            }
        }
        return result;
    }
};
__decorate([
    state()
], StepEditor.prototype, "state", void 0);
__decorate([
    state()
], StepEditor.prototype, "error", void 0);
__decorate([
    property()
], StepEditor.prototype, "isTypeEditable", void 0);
__decorate([
    property()
], StepEditor.prototype, "disabled", void 0);
StepEditor = __decorate([
    customElement('devtools-recorder-step-editor')
], StepEditor);

//# sourceMappingURL=StepEditor.js.map

/***/ }),

/***/ "./panels/recorder/components/stepEditor.css.js":
/*!******************************************************!*\
  !*** ./panels/recorder/components/stepEditor.css.js ***!
  \******************************************************/
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
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: inherit;
}

:host {
  display: block;
}

.row {
  display: flex;
  flex-direction: row;
  color: var(--sys-color-token-property-special);
  font-family: var(--monospace-font-family);
  font-size: var(--monospace-font-size);
  align-items: center;
  line-height: 18px;
  margin-top: 3px;
}

.row devtools-button {
  line-height: 1;
  margin-left: 0.5em;
}

.separator {
  margin-right: 0.5em;
  color: var(--sys-color-on-surface);
}

.padded {
  margin-left: 2em;
}

.padded.double {
  margin-left: 4em;
}

.selector-picker {
  width: 18px;
  height: 18px;
}

.inline-button {
  width: 18px;
  height: 18px;
  opacity: 0%;
  visibility: hidden;
  transition: opacity 200ms;
  flex-shrink: 0;
}

.row:focus-within .inline-button,
.row:hover .inline-button {
  opacity: 100%;
  visibility: visible;
}

.wrapped.row {
  flex-wrap: wrap;
}

.gap.row {
  gap: 5px;
}

.gap.row devtools-button {
  margin-left: 0;
}

.regular-font {
  font-family: inherit;
  font-size: inherit;
}

.no-margin {
  margin: 0;
}

.row-buttons {
  margin-top: 3px;
}

.error {
  margin: 3px 0 6px;
  padding: 8px 12px;
  background: var(--sys-color-error-container);
  color: var(--sys-color-error);
}

/*# sourceURL=stepEditor.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/recorder/components/util.js":
/*!********************************************!*\
  !*** ./panels/recorder/components/util.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayAssignments: () => (/* binding */ ArrayAssignments),
/* harmony export */   InsertAssignment: () => (/* binding */ InsertAssignment),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   deepFreeze: () => (/* binding */ deepFreeze),
/* harmony export */   immutableDeepAssign: () => (/* binding */ immutableDeepAssign),
/* harmony export */   mod: () => (/* binding */ mod)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const mod = (a, n) => {
    return ((a % n) + n) % n;
};
function assert(predicate, message = 'Assertion failed!') {
    if (!predicate) {
        throw new Error(message);
    }
}
const deepFreeze = (object) => {
    for (const name of Reflect.ownKeys(object)) {
        const value = object[name];
        if ((value && typeof value === 'object') || typeof value === 'function') {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
};
class InsertAssignment {
    value;
    constructor(value) {
        this.value = value;
    }
}
class ArrayAssignments {
    value;
    constructor(value) {
        this.value = value;
    }
}
const immutableDeepAssign = (object, assignments) => {
    if (assignments instanceof ArrayAssignments) {
        assert(Array.isArray(object), `Expected an array. Got ${typeof object}.`);
        const updatedObject = [...object];
        const keys = Object.keys(assignments.value)
            .sort((a, b) => Number(b) - Number(a));
        for (const key of keys) {
            const update = assignments.value[Number(key)];
            if (update === undefined) {
                updatedObject.splice(Number(key), 1);
            }
            else if (update instanceof InsertAssignment) {
                updatedObject.splice(Number(key), 0, update.value);
            }
            else {
                updatedObject[Number(key)] = immutableDeepAssign(updatedObject[key], update);
            }
        }
        return Object.freeze(updatedObject);
    }
    if (typeof assignments === 'object' && !Array.isArray(assignments)) {
        assert(!Array.isArray(object), 'Expected an object. Got an array.');
        const updatedObject = { ...object };
        const keys = Object.keys(assignments);
        for (const key of keys) {
            const update = assignments[key];
            if (update === undefined) {
                delete updatedObject[key];
            }
            else {
                updatedObject[key] = immutableDeepAssign(updatedObject[key], update);
            }
        }
        return Object.freeze(updatedObject);
    }
    return assignments;
};
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "./panels/recorder/controllers/SelectorPicker.js":
/*!*******************************************************!*\
  !*** ./panels/recorder/controllers/SelectorPicker.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestSelectorAttributeEvent: () => (/* binding */ RequestSelectorAttributeEvent),
/* harmony export */   SelectorPickedEvent: () => (/* binding */ SelectorPickedEvent),
/* harmony export */   SelectorPicker: () => (/* binding */ SelectorPicker)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util.js */ "./panels/recorder/util/util.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const BINDING_NAME = 'captureSelectors';
class SelectorPickedEvent extends Event {
    static eventName = 'selectorpicked';
    data;
    constructor(data) {
        super(SelectorPickedEvent.eventName, { bubbles: true, composed: true });
        this.data = data;
    }
}
class RequestSelectorAttributeEvent extends Event {
    static eventName = 'requestselectorattribute';
    send;
    constructor(send) {
        super(RequestSelectorAttributeEvent.eventName, {
            bubbles: true,
            composed: true,
        });
        this.send = send;
    }
}
class SelectorPicker {
    static get #targetManager() {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
    }
    #element;
    #selectorAttribute;
    #activeMutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
    active = false;
    constructor(element) {
        this.#element = element;
    }
    start = () => {
        return this.#activeMutex.run(async () => {
            if (this.active) {
                return;
            }
            this.active = true;
            this.#selectorAttribute = await new Promise((resolve, reject) => {
                const timeout = setTimeout(reject, 1000);
                this.#element.dispatchEvent(new RequestSelectorAttributeEvent(attribute => {
                    clearTimeout(timeout);
                    resolve(attribute);
                }));
            });
            SelectorPicker.#targetManager.observeTargets(this);
            this.#element.requestUpdate();
        });
    };
    stop = () => {
        return this.#activeMutex.run(async () => {
            if (!this.active) {
                return;
            }
            this.active = false;
            SelectorPicker.#targetManager.unobserveTargets(this);
            SelectorPicker.#targetManager.targets().map(this.targetRemoved.bind(this));
            this.#selectorAttribute = undefined;
            this.#element.requestUpdate();
        });
    };
    toggle = () => {
        if (!this.active) {
            return this.start();
        }
        return this.stop();
    };
    #targetMutexes = new Map();
    targetAdded(target) {
        if (target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame) {
            return;
        }
        let mutex = this.#targetMutexes.get(target);
        if (!mutex) {
            mutex = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Mutex.Mutex();
            this.#targetMutexes.set(target, mutex);
        }
        void mutex.run(async () => {
            await this.#addBindings(target);
            await this.#injectApplicationScript(target);
        });
    }
    targetRemoved(target) {
        const mutex = this.#targetMutexes.get(target);
        if (!mutex) {
            return;
        }
        void mutex.run(async () => {
            try {
                await this.#injectCleanupScript(target);
                await this.#removeBindings(target);
            }
            catch {
            }
        });
    }
    #handleBindingCalledEvent = (event) => {
        if (event.data.name !== BINDING_NAME) {
            return;
        }
        const contextId = event.data.executionContextId;
        const frames = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets();
        const contextTarget = _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.findTargetByExecutionContext(frames, contextId);
        const frameId = _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.findFrameIdByExecutionContext(frames, contextId);
        if (!contextTarget || !frameId) {
            throw new Error(`No execution context found for the binding call + ${JSON.stringify(event.data)}`);
        }
        const model = contextTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
        if (!model) {
            throw new Error(`ResourceTreeModel instance is missing for the target: ${contextTarget.id()}`);
        }
        const frame = model.frameForId(frameId);
        if (!frame) {
            throw new Error('Frame is not found');
        }
        this.#element.dispatchEvent(new SelectorPickedEvent({
            ...JSON.parse(event.data.payload),
            ..._models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.getTargetFrameContext(contextTarget, frame),
        }));
        void this.stop();
    };
    #scriptIdentifier = new Map();
    async #injectApplicationScript(target) {
        const injectedScript = await _util_util_js__WEBPACK_IMPORTED_MODULE_4__.InjectedScript.get();
        const script = `${injectedScript};DevToolsRecorder.startSelectorPicker({getAccessibleName, getAccessibleRole}, ${JSON.stringify(this.#selectorAttribute ? this.#selectorAttribute : undefined)}, ${_util_util_js__WEBPACK_IMPORTED_MODULE_4__.isDebugBuild})`;
        const [{ identifier }] = await Promise.all([
            target.pageAgent().invoke_addScriptToEvaluateOnNewDocument({
                source: script,
                worldName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
                includeCommandLineAPI: true,
            }),
            _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script),
        ]);
        this.#scriptIdentifier.set(target, identifier);
    }
    async #injectCleanupScript(target) {
        const identifier = this.#scriptIdentifier.get(target);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(identifier);
        this.#scriptIdentifier.delete(target);
        await target.pageAgent().invoke_removeScriptToEvaluateOnNewDocument({ identifier });
        const script = 'DevToolsRecorder.stopSelectorPicker()';
        await _models_models_js__WEBPACK_IMPORTED_MODULE_3__.SDKUtils.evaluateInAllFrames(_util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME, target, script);
    }
    async #addBindings(target) {
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
        model.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, this.#handleBindingCalledEvent);
        await model.addBinding({
            name: BINDING_NAME,
            executionContextName: _util_util_js__WEBPACK_IMPORTED_MODULE_4__.DEVTOOLS_RECORDER_WORLD_NAME,
        });
    }
    async #removeBindings(target) {
        await target.runtimeAgent().invoke_removeBinding({ name: BINDING_NAME });
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.assertNotNullOrUndefined(model);
        model.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.Events.BindingCalled, this.#handleBindingCalledEvent);
    }
}
//# sourceMappingURL=SelectorPicker.js.map

/***/ }),

/***/ "./panels/recorder/controllers/controllers.js":
/*!****************************************************!*\
  !*** ./panels/recorder/controllers/controllers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPicker: () => (/* reexport module object */ _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorPicker.js */ "./panels/recorder/controllers/SelectorPicker.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=controllers.js.map

/***/ }),

/***/ "./ui/components/suggestion_input/suggestion_input.js":
/*!************************************************************!*\
  !*** ./ui/components/suggestion_input/suggestion_input.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionInput: () => (/* reexport module object */ _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuggestionInput.js */ "./ui/components/suggestion_input/SuggestionInput.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=suggestion_input.js.map

/***/ })

}]);