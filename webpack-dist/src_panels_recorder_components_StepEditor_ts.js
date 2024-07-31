"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_StepEditor_ts"],{

/***/ "./src/panels/recorder/components/StepEditor.ts":
/*!******************************************************!*\
  !*** ./src/panels/recorder/components/StepEditor.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditorState: () => (/* binding */ EditorState),
/* harmony export */   StepEditedEvent: () => (/* binding */ StepEditedEvent),
/* harmony export */   StepEditor: () => (/* binding */ StepEditor)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/suggestion_input/suggestion_input.js */ "./src/ui/components/suggestion_input/suggestion_input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _controllers_controllers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controllers/controllers.js */ "./src/panels/recorder/controllers/controllers.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _util_util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/util.js */ "./src/panels/recorder/util/util.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './stepEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./util.js */ "./src/panels/recorder/components/util.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _a, _EditorState_puppeteer;












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
    constructor(step) {
        super(StepEditedEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = step;
    }
}
Object.defineProperty(StepEditedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'stepedited'
});
// Makes use of the fact that JSON values get their undefined values cleaned
// after stringification.
const cleanUndefineds = (value) => {
    return JSON.parse(JSON.stringify(value));
};
class EditorState {
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
        return __classPrivateFieldGet(this, _a, "f", _EditorState_puppeteer).run(puppeteer => {
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
_a = EditorState;
_EditorState_puppeteer = { value: new _util_util_js__WEBPACK_IMPORTED_MODULE_9__.SharedObject.SharedObject(() => _models_models_js__WEBPACK_IMPORTED_MODULE_8__.RecordingPlayer.RecordingPlayer.connectPuppeteer(), ({ browser }) => _models_models_js__WEBPACK_IMPORTED_MODULE_8__.RecordingPlayer.RecordingPlayer.disconnectPuppeteer(browser)) };
/**
 * @fires RequestSelectorAttributeEvent#requestselectorattribute
 * @fires SelectorPickedEvent#selectorpicked
 */
let RecorderSelectorPickerButton = (() => {
    var _RecorderSelectorPickerButton_picker, _RecorderSelectorPickerButton_handleClickEvent;
    let _classDecorators = [customElement('devtools-recorder-selector-picker-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var RecorderSelectorPickerButton = _classThis = class extends _classSuper {
        constructor() {
            super();
            _RecorderSelectorPickerButton_picker.set(this, new _controllers_controllers_js__WEBPACK_IMPORTED_MODULE_7__.SelectorPicker.SelectorPicker(this));
            _RecorderSelectorPickerButton_handleClickEvent.set(this, (event) => {
                event.preventDefault();
                event.stopPropagation();
                void __classPrivateFieldGet(this, _RecorderSelectorPickerButton_picker, "f").toggle();
            });
            this.disabled = false;
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            void __classPrivateFieldGet(this, _RecorderSelectorPickerButton_picker, "f").stop();
        }
        render() {
            if (this.disabled) {
                return;
            }
            return html `<devtools-button
      @click=${__classPrivateFieldGet(this, _RecorderSelectorPickerButton_handleClickEvent, "f")}
      .title=${i18nString(UIStrings.selectorPicker)}
      class="selector-picker"
      .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Size.SMALL}
      .iconName=${'select-element'}
      .active=${__classPrivateFieldGet(this, _RecorderSelectorPickerButton_picker, "f").active}
      .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.ICON}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle('selector-picker').track({
                click: true,
            })}
    ></devtools-button>`;
        }
    };
    _RecorderSelectorPickerButton_picker = new WeakMap();
    _RecorderSelectorPickerButton_handleClickEvent = new WeakMap();
    __setFunctionName(_classThis, "RecorderSelectorPickerButton");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        RecorderSelectorPickerButton = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './stepEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return RecorderSelectorPickerButton = _classThis;
})();
/**
 * @fires RequestSelectorAttributeEvent#requestselectorattribute
 * @fires StepEditedEvent#stepedited
 */
let StepEditor = (() => {
    var _StepEditor_instances, _StepEditor_renderedAttributes, _StepEditor_commit, _StepEditor_handleSelectorPickedEvent, _StepEditor_handleAddOrRemoveClick, _StepEditor_handleKeyDownEvent, _StepEditor_handleInputBlur, _StepEditor_handleTypeInputBlur, _StepEditor_handleAddRowClickEvent, _StepEditor_renderInlineButton, _StepEditor_renderDeleteButton, _StepEditor_renderTypeRow, _StepEditor_renderRow, _StepEditor_renderFrameRow, _StepEditor_renderSelectorsRow, _StepEditor_renderAssertedEvents, _StepEditor_renderAttributesRow, _StepEditor_renderAddRowButtons, _StepEditor_ensureFocus;
    let _classDecorators = [customElement('devtools-recorder-step-editor')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var StepEditor = _classThis = class extends _classSuper {
        constructor() {
            super();
            _StepEditor_instances.add(this);
            _StepEditor_renderedAttributes.set(this, new Set());
            _StepEditor_handleSelectorPickedEvent.set(this, (event) => {
                event.preventDefault();
                event.stopPropagation();
                __classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_commit).call(this, (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, {
                    target: event.data.target,
                    frame: event.data.frame,
                    selectors: event.data.selectors.map(selector => typeof selector === 'string' ? [selector] : selector),
                    offsetX: event.data.offsetX,
                    offsetY: event.data.offsetY,
                }));
            });
            _StepEditor_handleAddOrRemoveClick.set(this, (assignments, query, metric) => event => {
                event.preventDefault();
                event.stopPropagation();
                __classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_commit).call(this, (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, assignments));
                __classPrivateFieldGet(this, _StepEditor_ensureFocus, "f").call(this, query);
                if (metric) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(metric);
                }
            });
            _StepEditor_handleKeyDownEvent.set(this, (event) => {
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
            });
            _StepEditor_handleInputBlur.set(this, (opts) => event => {
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
                __classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_commit).call(this, (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, assignments));
                if (opts.metric) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(opts.metric);
                }
            });
            _StepEditor_handleTypeInputBlur.set(this, async (event) => {
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
                __classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_commit).call(this, await EditorState.default(value));
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingEdited(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.TypeChanged);
            });
            _StepEditor_handleAddRowClickEvent.set(this, async (event) => {
                event.preventDefault();
                event.stopPropagation();
                const attribute = event.target.dataset.attribute;
                __classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_commit).call(this, (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, {
                    [attribute]: await EditorState.defaultByAttribute(this.state, attribute),
                }));
                __classPrivateFieldGet(this, _StepEditor_ensureFocus, "f").call(this, `[data-attribute=${attribute}].attribute devtools-suggestion-input`);
            });
            _StepEditor_ensureFocus.set(this, (query) => {
                void this.updateComplete.then(() => {
                    const node = this.renderRoot.querySelector(query);
                    node?.focus();
                });
            });
            this.state = { type: _models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType.WaitForElement };
            this.isTypeEditable = true;
            this.disabled = false;
        }
        createRenderRoot() {
            const root = super.createRenderRoot();
            root.addEventListener('keydown', __classPrivateFieldGet(this, _StepEditor_handleKeyDownEvent, "f"));
            return root;
        }
        set step(step) {
            this.state = (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.deepFreeze)(EditorState.fromStep(step));
            this.error = undefined;
        }
        render() {
            __classPrivateFieldSet(this, _StepEditor_renderedAttributes, new Set(), "f");
            // clang-format off
            const result = html `
      <div class="wrapper" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.tree('step-editor')}>
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderTypeRow).call(this, this.isTypeEditable)} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'target')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderFrameRow).call(this)} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderSelectorsRow).call(this)}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'deviceType')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'button')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'url')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'x')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'y')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'offsetX')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'offsetY')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'value')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'key')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'operator')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'count')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'expression')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'duration')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderAssertedEvents).call(this)}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'timeout')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'width')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'height')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'deviceScaleFactor')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'isMobile')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'hasTouch')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'isLandscape')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'download')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'upload')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'latency')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'name')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'parameters')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'visible')} ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderRow).call(this, 'properties')}
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderAttributesRow).call(this)}
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
              ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderAddRowButtons).call(this)}
            </div>`
                : undefined}
      </div>
    `;
            // clang-format on
            for (const key of Object.keys(dataTypeByAttribute)) {
                if (!__classPrivateFieldGet(this, _StepEditor_renderedAttributes, "f").has(key)) {
                    throw new Error(`The editable attribute ${key} does not have UI`);
                }
            }
            return result;
        }
    };
    _StepEditor_renderedAttributes = new WeakMap();
    _StepEditor_handleSelectorPickedEvent = new WeakMap();
    _StepEditor_handleAddOrRemoveClick = new WeakMap();
    _StepEditor_handleKeyDownEvent = new WeakMap();
    _StepEditor_handleInputBlur = new WeakMap();
    _StepEditor_handleTypeInputBlur = new WeakMap();
    _StepEditor_handleAddRowClickEvent = new WeakMap();
    _StepEditor_ensureFocus = new WeakMap();
    _StepEditor_instances = new WeakSet();
    _StepEditor_commit = function _StepEditor_commit(updatedState) {
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
    };
    _StepEditor_renderInlineButton = function _StepEditor_renderInlineButton(opts) {
        if (this.disabled) {
            return;
        }
        return html `
      <devtools-button
        title=${opts.title}
        .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Size.SMALL}
        .iconName=${opts.iconName}
        .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.ICON}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action(opts.class).track({
            click: true,
        })}
        class="inline-button ${opts.class}"
        @click=${opts.onClick}
      ></devtools-button>
    `;
    };
    _StepEditor_renderDeleteButton = function _StepEditor_renderDeleteButton(attribute) {
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
      .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Size.SMALL}
      .iconName=${'bin'}
      .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.ICON}
      .title=${i18nString(UIStrings.deleteRow)}
      class="inline-button delete-row"
      data-attribute=${attribute}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action('delete').track({ click: true })}
      @click=${(event) => {
            event.preventDefault();
            event.stopPropagation();
            __classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_commit).call(this, (0,_util_js__WEBPACK_IMPORTED_MODULE_11__.immutableDeepAssign)(this.state, { [attribute]: undefined }));
        }}
    ></devtools-button>`;
        // clang-format on
    };
    _StepEditor_renderTypeRow = function _StepEditor_renderTypeRow(editable) {
        __classPrivateFieldGet(this, _StepEditor_renderedAttributes, "f").add('type');
        // clang-format off
        return html `<div class="row attribute" data-attribute="type" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('type')}>
      <div>type<span class="separator">:</span></div>
      <devtools-suggestion-input
        .disabled=${!editable || this.disabled}
        .options=${Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_8__.Schema.StepType)}
        .placeholder=${defaultValuesByAttribute.type}
        .value=${live(this.state.type)}
        @blur=${__classPrivateFieldGet(this, _StepEditor_handleTypeInputBlur, "f")}
      ></devtools-suggestion-input>
    </div>`;
        // clang-format on
    };
    _StepEditor_renderRow = function _StepEditor_renderRow(attribute) {
        __classPrivateFieldGet(this, _StepEditor_renderedAttributes, "f").add(attribute);
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
        @blur=${__classPrivateFieldGet(this, _StepEditor_handleInputBlur, "f").call(this, {
            attribute,
            from(value) {
                if (this.state[attribute] === undefined) {
                    return;
                }
                switch (attribute) {
                    case 'properties':
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingAssertion.PropertyAssertionEdited);
                        break;
                }
                return { [attribute]: value };
            },
            metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing,
        })}
      ></devtools-suggestion-input>
      ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderDeleteButton).call(this, attribute)}
    </div>`;
        // clang-format on
    };
    _StepEditor_renderFrameRow = function _StepEditor_renderFrameRow() {
        __classPrivateFieldGet(this, _StepEditor_renderedAttributes, "f").add('frame');
        if (this.state.frame === undefined) {
            return;
        }
        // clang-format off
        return html `
      <div class="attribute" data-attribute="frame" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('frame')}>
        <div class="row">
          <div>frame<span class="separator">:</span></div>
          ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderDeleteButton).call(this, 'frame')}
        </div>
        ${this.state.frame.map((frame, index, frames) => {
            return html `
            <div class="padded row">
              <devtools-suggestion-input
                .disabled=${this.disabled}
                .placeholder=${defaultValuesByAttribute.frame[0].toString()}
                .value=${live(frame.toString())}
                data-path=${`frame.${index}`}
                @blur=${__classPrivateFieldGet(this, _StepEditor_handleInputBlur, "f").call(this, {
                attribute: 'frame',
                from(value) {
                    if (this.state.frame?.[index] === undefined) {
                        return;
                    }
                    return {
                        frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: value }),
                    };
                },
                metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing,
            })}
              ></devtools-suggestion-input>
              ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                class: 'add-frame',
                title: i18nString(UIStrings.addFrameIndex),
                iconName: 'plus',
                onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, {
                    frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                        [index + 1]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(defaultValuesByAttribute.frame[0]),
                    }),
                }, `devtools-suggestion-input[data-path="frame.${index + 1}"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing),
            })}
              ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                class: 'remove-frame',
                title: i18nString(UIStrings.removeFrameIndex),
                iconName: 'minus',
                onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, {
                    frame: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: undefined }),
                }, `devtools-suggestion-input[data-path="frame.${Math.min(index, frames.length - 2)}"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing),
            })}
            </div>
          `;
        })}
      </div>
    `;
        // clang-format on
    };
    _StepEditor_renderSelectorsRow = function _StepEditor_renderSelectorsRow() {
        __classPrivateFieldGet(this, _StepEditor_renderedAttributes, "f").add('selectors');
        if (this.state.selectors === undefined) {
            return;
        }
        // clang-format off
        return html `<div class="attribute" data-attribute="selectors" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('selectors')}>
      <div class="row">
        <div>selectors<span class="separator">:</span></div>
        <devtools-recorder-selector-picker-button
          @selectorpicked=${__classPrivateFieldGet(this, _StepEditor_handleSelectorPickedEvent, "f")}
          .disabled=${this.disabled}
        ></devtools-recorder-selector-picker-button>
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderDeleteButton).call(this, 'selectors')}
      </div>
      ${this.state.selectors.map((selector, index, selectors) => {
            return html `<div class="padded row" data-selector-path=${index}>
            <div>selector #${index + 1}<span class="separator">:</span></div>
            ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                class: 'add-selector',
                title: i18nString(UIStrings.addSelector),
                iconName: 'plus',
                onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, {
                    selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                        [index + 1]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(structuredClone(defaultValuesByAttribute.selectors[0])),
                    }),
                }, `devtools-suggestion-input[data-path="selectors.${index + 1}.0"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.SelectorAdded),
            })}
            ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                class: 'remove-selector',
                title: i18nString(UIStrings.removeSelector),
                iconName: 'minus',
                onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, { selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: undefined }) }, `devtools-suggestion-input[data-path="selectors.${Math.min(index, selectors.length - 2)}.0"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.SelectorRemoved),
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
                @blur=${__classPrivateFieldGet(this, _StepEditor_handleInputBlur, "f").call(this, {
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
                    metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.SelectorPartEdited,
                })}
              ></devtools-suggestion-input>
              ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                    class: 'add-selector-part',
                    title: i18nString(UIStrings.addSelectorPart),
                    iconName: 'plus',
                    onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, {
                        selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                            [index]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                                [partIndex + 1]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.InsertAssignment(defaultValuesByAttribute.selectors[0][0]),
                            }),
                        }),
                    }, `devtools-suggestion-input[data-path="selectors.${index}.${partIndex + 1}"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.SelectorPartAdded),
                })}
              ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                    class: 'remove-selector-part',
                    title: i18nString(UIStrings.removeSelectorPart),
                    iconName: 'minus',
                    onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, {
                        selectors: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                            [index]: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({
                                [partIndex]: undefined,
                            }),
                        }),
                    }, `devtools-suggestion-input[data-path="selectors.${index}.${Math.min(partIndex, parts.length - 2)}"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.SelectorPartRemoved),
                })}
            </div>`;
            })}`;
        })}
    </div>`;
        // clang-format on
    };
    _StepEditor_renderAssertedEvents = function _StepEditor_renderAssertedEvents() {
        __classPrivateFieldGet(this, _StepEditor_renderedAttributes, "f").add('assertedEvents');
        if (this.state.assertedEvents === undefined) {
            return;
        }
        // clang-format off
        return html `<div class="attribute" data-attribute="assertedEvents" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('asserted-events')}>
      <div class="row">
        <div>asserted events<span class="separator">:</span></div>
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderDeleteButton).call(this, 'assertedEvents')}
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
              @blur=${__classPrivateFieldGet(this, _StepEditor_handleInputBlur, "f").call(this, {
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
                metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing,
            })}
            ></devtools-suggestion-input>
          </div>
          <div class="padded row" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('event-url')}>
            <div>url<span class="separator">:</span></div>
            <devtools-suggestion-input
              .disabled=${this.disabled}
              .placeholder=${defaultValuesByAttribute.assertedEvents[0].url}
              .value=${live(event.url ?? '')}
              @blur=${__classPrivateFieldGet(this, _StepEditor_handleInputBlur, "f").call(this, {
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
                metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing,
            })}
            ></devtools-suggestion-input>
          </div>`;
        })}
    </div> `;
        // clang-format on
    };
    _StepEditor_renderAttributesRow = function _StepEditor_renderAttributesRow() {
        __classPrivateFieldGet(this, _StepEditor_renderedAttributes, "f").add('attributes');
        if (this.state.attributes === undefined) {
            return;
        }
        // clang-format off
        return html `<div class="attribute" data-attribute="attributes" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('attributes')}>
      <div class="row">
        <div>attributes<span class="separator">:</span></div>
        ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderDeleteButton).call(this, 'attributes')}
      </div>
      ${this.state.attributes.map(({ name, value }, index, attributes) => {
            return html `<div class="padded row" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.treeItem('attribute')}>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${defaultValuesByAttribute.attributes[0].name}
            .value=${live(name)}
            data-path=${`attributes.${index}.name`}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.key().track({ change: true })}
            @blur=${__classPrivateFieldGet(this, _StepEditor_handleInputBlur, "f").call(this, {
                attribute: 'attributes',
                from(name) {
                    if (this.state.attributes?.[index]?.name === undefined) {
                        return;
                    }
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingAssertion.AttributeAssertionEdited);
                    return {
                        attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: { name } }),
                    };
                },
                metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing,
            })}
          ></devtools-suggestion-input>
          <span class="separator">:</span>
          <devtools-suggestion-input
            .disabled=${this.disabled}
            .placeholder=${defaultValuesByAttribute.attributes[0].value}
            .value=${live(value)}
            data-path=${`attributes.${index}.value`}
            @blur=${__classPrivateFieldGet(this, _StepEditor_handleInputBlur, "f").call(this, {
                attribute: 'attributes',
                from(value) {
                    if (this.state.attributes?.[index]?.value === undefined) {
                        return;
                    }
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingAssertion(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingAssertion.AttributeAssertionEdited);
                    return {
                        attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: { value } }),
                    };
                },
                metric: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing,
            })}
          ></devtools-suggestion-input>
          ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                class: 'add-attribute-assertion',
                title: i18nString(UIStrings.addSelectorPart),
                iconName: 'plus',
                onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, {
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
                }, `devtools-suggestion-input[data-path="attributes.${index + 1}.name"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing),
            })}
          ${__classPrivateFieldGet(this, _StepEditor_instances, "m", _StepEditor_renderInlineButton).call(this, {
                class: 'remove-attribute-assertion',
                title: i18nString(UIStrings.removeSelectorPart),
                iconName: 'minus',
                onClick: __classPrivateFieldGet(this, _StepEditor_handleAddOrRemoveClick, "f").call(this, { attributes: new _util_js__WEBPACK_IMPORTED_MODULE_11__.ArrayAssignments({ [index]: undefined }) }, `devtools-suggestion-input[data-path="attributes.${Math.min(index, attributes.length - 2)}.value"]`, _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingEdited.OtherEditing),
            })}
        </div>`;
        })}
    </div>`;
        // clang-format on
    };
    _StepEditor_renderAddRowButtons = function _StepEditor_renderAddRowButtons() {
        const attributes = attributesByType[this.state.type];
        return [...attributes.optional].filter(attr => this.state[attr] === undefined).map(attr => {
            // clang-format off
            return html `<devtools-button
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.OUTLINED}
          class="add-row"
          data-attribute=${attr}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action(`add-${_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(attr)}`)}
          @click=${__classPrivateFieldGet(this, _StepEditor_handleAddRowClickEvent, "f")}
        >
          ${i18nString(UIStrings.addAttribute, {
                attributeName: attr,
            })}
        </devtools-button>`;
            // clang-format on
        });
    };
    __setFunctionName(_classThis, "StepEditor");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StepEditor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './stepEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StepEditor = _classThis;
})();



/***/ }),

/***/ "./src/panels/recorder/components/util.ts":
/*!************************************************!*\
  !*** ./src/panels/recorder/components/util.ts ***!
  \************************************************/
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
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
    }
}
class ArrayAssignments {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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


/***/ }),

/***/ "./src/panels/recorder/controllers/controllers.ts":
/*!********************************************************!*\
  !*** ./src/panels/recorder/controllers/controllers.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectorPicker: () => (/* reexport module object */ _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SelectorPicker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SelectorPicker.js */ "./src/panels/recorder/controllers/SelectorPicker.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/ui/components/suggestion_input/suggestion_input.ts":
/*!****************************************************************!*\
  !*** ./src/ui/components/suggestion_input/suggestion_input.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuggestionInput: () => (/* reexport module object */ _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _SuggestionInput_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SuggestionInput.js */ "./src/ui/components/suggestion_input/SuggestionInput.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);