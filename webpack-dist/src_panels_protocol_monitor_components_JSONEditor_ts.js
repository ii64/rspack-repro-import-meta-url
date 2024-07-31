"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_protocol_monitor_components_JSONEditor_ts"],{

/***/ "./src/panels/protocol_monitor/components/JSONEditor.ts":
/*!**************************************************************!*\
  !*** ./src/panels/protocol_monitor/components/JSONEditor.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONEditor: () => (/* binding */ JSONEditor),
/* harmony export */   ParameterType: () => (/* binding */ ParameterType),
/* harmony export */   SubmitEditorEvent: () => (/* binding */ SubmitEditorEvent),
/* harmony export */   suggestionFilter: () => (/* binding */ suggestionFilter)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/dialogs/dialogs.js */ "./src/ui/components/dialogs/dialogs.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/menus/menus.js */ "./src/ui/components/menus/menus.ts");
/* harmony import */ var _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/suggestion_input/suggestion_input.js */ "./src/ui/components/suggestion_input/suggestion_input.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _elements_components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../elements/components/components.js */ "./src/panels/elements/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './JSONEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













const { html, Decorators, LitElement, Directives, nothing } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__;
const { customElement, property, state } = Decorators;
const { live, classMap, repeat } = Directives;
const UIStrings = {
    /**
     *@description The title of a button that deletes a parameter.
     */
    deleteParameter: 'Delete parameter',
    /**
     *@description The title of a button that adds a parameter.
     */
    addParameter: 'Add a parameter',
    /**
     *@description The title of a button that reset the value of a paremeters to its default value.
     */
    resetDefaultValue: 'Reset to default value',
    /**
     *@description The title of a button to add custom key/value pairs to object parameters with no keys defined
     */
    addCustomProperty: 'Add custom property',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/protocol_monitor/components/JSONEditor.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ParameterType;
(function (ParameterType) {
    ParameterType["String"] = "string";
    ParameterType["Number"] = "number";
    ParameterType["Boolean"] = "boolean";
    ParameterType["Array"] = "array";
    ParameterType["Object"] = "object";
})(ParameterType || (ParameterType = {}));
/**
 * Parents should listen for this event and register the listeners provided by
 * this event"
 */
class SubmitEditorEvent extends Event {
    constructor(data) {
        super(SubmitEditorEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = data;
    }
}
Object.defineProperty(SubmitEditorEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'submiteditor'
});
const splitDescription = (description) => {
    // If the description is too long we make the UI a bit better by highlighting the first sentence
    // which contains the most informations.
    // The number 150 has been chosen arbitrarily
    if (description.length > 150) {
        const [firstSentence, restOfDescription] = description.split('.');
        // To make the UI nicer, we add a dot at the end of the first sentence.
        firstSentence + '.';
        return [firstSentence, restOfDescription];
    }
    return [description, ''];
};
const defaultValueByType = new Map([
    ['string', ''],
    ['number', 0],
    ['boolean', false],
]);
const DUMMY_DATA = 'dummy';
const EMPTY_STRING = '<empty_string>';
function suggestionFilter(option, query) {
    return option.toLowerCase().includes(query.toLowerCase());
}
let JSONEditor = (() => {
    var _JSONEditor_instances, _JSONEditor_hintPopoverHelper, _JSONEditor_handleAvailableTargetsChanged, _JSONEditor_convertObjectToParameterSchema, _JSONEditor_convertPrimitiveParameter, _JSONEditor_convertObjectParameter, _JSONEditor_convertArrayParameter, _JSONEditor_handlePopoverDescriptions, _JSONEditor_getDescriptionAndTypeForElement, _JSONEditor_copyToClipboard, _JSONEditor_handleCommandSend, _JSONEditor_populateParameterDefaults, _JSONEditor_getChildByPath, _JSONEditor_isValueOfCorrectType, _JSONEditor_saveParameterValue, _JSONEditor_saveNestedObjectParameterKey, _JSONEditor_handleParameterInputKeydown, _JSONEditor_handleFocusParameter, _JSONEditor_handleCommandInputBlur, _JSONEditor_computeTargetLabel, _JSONEditor_isTypePrimitive, _JSONEditor_createNestedParameter, _JSONEditor_handleAddParameter, _JSONEditor_handleClearParameter, _JSONEditor_handleDeleteParameter, _JSONEditor_renderTargetSelectorRow, _JSONEditor_onTargetSelected, _JSONEditor_computeDropdownValues, _JSONEditor_renderInlineButton, _JSONEditor_renderWarningIcon, _JSONEditor_renderParameters;
    let _classDecorators = [customElement('devtools-json-editor')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _command_decorators;
    let _command_initializers = [];
    let _command_extraInitializers = [];
    let _targetId_decorators;
    let _targetId_initializers = [];
    let _targetId_extraInitializers = [];
    var JSONEditor = _classThis = class extends _classSuper {
        constructor() {
            super();
            _JSONEditor_instances.add(this);
            Object.defineProperty(this, "command", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: __runInitializers(this, _command_initializers, '')
            });
            Object.defineProperty(this, "targetId", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: (__runInitializers(this, _command_extraInitializers), __runInitializers(this, _targetId_initializers, void 0))
            });
            _JSONEditor_hintPopoverHelper.set(this, __runInitializers(this, _targetId_extraInitializers));
            _JSONEditor_saveParameterValue.set(this, (event) => {
                if (!(event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
                    return;
                }
                let value;
                if (event instanceof KeyboardEvent) {
                    const editableContent = event.target.renderRoot.querySelector('devtools-editable-content');
                    if (!editableContent) {
                        return;
                    }
                    value = editableContent.innerText;
                }
                else {
                    value = event.target.value;
                }
                const paramId = event.target.getAttribute('data-paramid');
                if (!paramId) {
                    return;
                }
                const pathArray = paramId.split('.');
                const object = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_getChildByPath).call(this, pathArray).parameter;
                if (value === '') {
                    object.value = defaultValueByType.get(object.type);
                }
                else {
                    object.value = value;
                    object.isCorrectType = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_isValueOfCorrectType).call(this, object, value);
                }
                // Needed to render the delete button for object parameters
                this.requestUpdate();
            });
            _JSONEditor_saveNestedObjectParameterKey.set(this, (event) => {
                if (!(event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
                    return;
                }
                const value = event.target.value;
                const paramId = event.target.getAttribute('data-paramid');
                if (!paramId) {
                    return;
                }
                const pathArray = paramId.split('.');
                const { parameter } = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_getChildByPath).call(this, pathArray);
                parameter.name = value;
                // Needed to render the delete button for object parameters
                this.requestUpdate();
            });
            _JSONEditor_handleParameterInputKeydown.set(this, (event) => {
                if (!(event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
                    return;
                }
                if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
                    __classPrivateFieldGet(this, _JSONEditor_saveParameterValue, "f").call(this, event);
                }
            });
            _JSONEditor_handleCommandInputBlur.set(this, async (event) => {
                if (event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput) {
                    this.command = event.target.value;
                }
                this.populateParametersForCommandWithDefaultValues();
            });
            this.parameters = [];
            this.targets = [];
            this.addEventListener('keydown', event => {
                if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
                    __classPrivateFieldGet(this, _JSONEditor_handleParameterInputKeydown, "f").call(this, event);
                    this.dispatchEvent(new SubmitEditorEvent({
                        command: this.command,
                        parameters: this.getParameters(),
                        targetId: this.targetId,
                    }));
                }
            });
        }
        connectedCallback() {
            super.connectedCallback();
            __classPrivateFieldSet(this, _JSONEditor_hintPopoverHelper, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.PopoverHelper.PopoverHelper(this, event => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handlePopoverDescriptions).call(this, event), 'protocol-monitor.hint'), "f");
            __classPrivateFieldGet(this, _JSONEditor_hintPopoverHelper, "f").setDisableOnClick(true);
            __classPrivateFieldGet(this, _JSONEditor_hintPopoverHelper, "f").setTimeout(300);
            __classPrivateFieldGet(this, _JSONEditor_hintPopoverHelper, "f").setHasPadding(true);
            const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
            targetManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.Events.AvailableTargetsChanged, __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleAvailableTargetsChanged), this);
            __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleAvailableTargetsChanged).call(this);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            __classPrivateFieldGet(this, _JSONEditor_hintPopoverHelper, "f")?.hidePopover();
            __classPrivateFieldGet(this, _JSONEditor_hintPopoverHelper, "f")?.dispose();
            const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
            targetManager.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.Events.AvailableTargetsChanged, __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleAvailableTargetsChanged), this);
        }
        getParameters() {
            const formatParameterValue = (parameter) => {
                if (parameter.value === undefined) {
                    return;
                }
                switch (parameter.type) {
                    case ParameterType.Number: {
                        return Number(parameter.value);
                    }
                    case ParameterType.Boolean: {
                        return Boolean(parameter.value);
                    }
                    case ParameterType.Object: {
                        const nestedParameters = {};
                        for (const subParameter of parameter.value) {
                            const formattedValue = formatParameterValue(subParameter);
                            if (formattedValue !== undefined) {
                                nestedParameters[subParameter.name] = formatParameterValue(subParameter);
                            }
                        }
                        if (Object.keys(nestedParameters).length === 0) {
                            return undefined;
                        }
                        return nestedParameters;
                    }
                    case ParameterType.Array: {
                        const nestedArrayParameters = [];
                        for (const subParameter of parameter.value) {
                            nestedArrayParameters.push(formatParameterValue(subParameter));
                        }
                        return nestedArrayParameters.length === 0 ? [] : nestedArrayParameters;
                    }
                    default: {
                        return parameter.value;
                    }
                }
            };
            const formattedParameters = {};
            for (const parameter of this.parameters) {
                formattedParameters[parameter.name] = formatParameterValue(parameter);
            }
            return formatParameterValue({
                type: ParameterType.Object,
                name: DUMMY_DATA,
                optional: true,
                value: this.parameters,
                description: '',
            });
        }
        // Displays a command entered in the input bar inside the editor
        displayCommand(command, parameters, targetId) {
            this.targetId = targetId;
            this.command = command;
            const schema = this.metadataByCommand.get(this.command);
            if (!schema?.parameters) {
                return;
            }
            this.populateParametersForCommandWithDefaultValues();
            const displayedParameters = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_convertObjectToParameterSchema).call(this, '', parameters, {
                'typeRef': DUMMY_DATA,
                'type': ParameterType.Object,
                'name': '',
                'description': '',
                'optional': true,
                'value': [],
            }, schema.parameters)
                .value;
            const valueByName = new Map(this.parameters.map(param => [param.name, param]));
            for (const param of displayedParameters) {
                const existingParam = valueByName.get(param.name);
                if (existingParam) {
                    existingParam.value = param.value;
                }
            }
            this.requestUpdate();
        }
        getCommandJson() {
            return this.command !== '' ? JSON.stringify({ command: this.command, parameters: this.getParameters() }) : '';
        }
        populateParametersForCommandWithDefaultValues() {
            const commandParameters = this.metadataByCommand.get(this.command)?.parameters;
            if (!commandParameters) {
                return;
            }
            this.parameters = commandParameters.map((parameter) => {
                return __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_populateParameterDefaults).call(this, parameter);
            });
        }
        render() {
            // clang-format off
            return html `
    <div class="wrapper">
      ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderTargetSelectorRow).call(this)}
      <div class="row attribute padded">
        <div class="command">command<span class="separator">:</span></div>
        <devtools-suggestion-input
          .options=${[...this.metadataByCommand.keys()]}
          .value=${this.command}
          .placeholder=${'Enter your command...'}
          .suggestionFilter=${suggestionFilter}
          .jslogContext=${'command'}
          @blur=${__classPrivateFieldGet(this, _JSONEditor_handleCommandInputBlur, "f")}
          class=${classMap({ 'json-input': true })}
        ></devtools-suggestion-input>
      </div>
      ${this.parameters.length ? html `
      <div class="row attribute padded">
        <div>parameters<span class="separator">:</span></div>
      </div>
        ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderParameters).call(this, this.parameters)}
      ` : nothing}
    </div>
    <devtools-pm-toolbar @copycommand=${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_copyToClipboard)} @commandsent=${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleCommandSend)}></devtools-pm-toolbar>`;
            // clang-format on
        }
    };
    _JSONEditor_hintPopoverHelper = new WeakMap();
    _JSONEditor_saveParameterValue = new WeakMap();
    _JSONEditor_saveNestedObjectParameterKey = new WeakMap();
    _JSONEditor_handleParameterInputKeydown = new WeakMap();
    _JSONEditor_handleCommandInputBlur = new WeakMap();
    _JSONEditor_instances = new WeakSet();
    _JSONEditor_handleAvailableTargetsChanged = function _JSONEditor_handleAvailableTargetsChanged() {
        this.targets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targets();
        if (this.targets.length && this.targetId === undefined) {
            this.targetId = this.targets[0].id();
        }
    };
    _JSONEditor_convertObjectToParameterSchema = function _JSONEditor_convertObjectToParameterSchema(key, value, schema, initialSchema) {
        const type = schema?.type || typeof value;
        const description = schema?.description ?? '';
        const optional = schema?.optional ?? true;
        switch (type) {
            case ParameterType.String:
            case ParameterType.Boolean:
            case ParameterType.Number:
                return __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_convertPrimitiveParameter).call(this, key, value, schema);
            case ParameterType.Object:
                return __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_convertObjectParameter).call(this, key, value, schema, initialSchema);
            case ParameterType.Array:
                return __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_convertArrayParameter).call(this, key, value, schema);
        }
        return {
            type,
            name: key,
            optional,
            typeRef: schema?.typeRef,
            value,
            description,
        };
    };
    _JSONEditor_convertPrimitiveParameter = function _JSONEditor_convertPrimitiveParameter(key, value, schema) {
        const type = schema?.type || typeof value;
        const description = schema?.description ?? '';
        const optional = schema?.optional ?? true;
        return {
            type,
            name: key,
            optional,
            typeRef: schema?.typeRef,
            value,
            description,
            isCorrectType: schema ? __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_isValueOfCorrectType).call(this, schema, String(value)) : true,
        };
    };
    _JSONEditor_convertObjectParameter = function _JSONEditor_convertObjectParameter(key, value, schema, initialSchema) {
        const description = schema?.description ?? '';
        if (typeof value !== 'object' || value === null) {
            throw Error('The value is not an object');
        }
        const typeRef = schema?.typeRef;
        if (!typeRef) {
            throw Error('Every object parameters should have a type ref');
        }
        const nestedType = typeRef === DUMMY_DATA ? initialSchema : this.typesByName.get(typeRef);
        if (!nestedType) {
            throw Error('No nested type for keys were found');
        }
        const objectValues = [];
        for (const objectKey of Object.keys(value)) {
            const objectType = nestedType.find(param => param.name === objectKey);
            objectValues.push(__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_convertObjectToParameterSchema).call(this, objectKey, value[objectKey], objectType));
        }
        return {
            type: ParameterType.Object,
            name: key,
            optional: schema.optional,
            typeRef: schema.typeRef,
            value: objectValues,
            description,
            isCorrectType: true,
        };
    };
    _JSONEditor_convertArrayParameter = function _JSONEditor_convertArrayParameter(key, value, schema) {
        const description = schema?.description ?? '';
        const optional = schema?.optional ?? true;
        const typeRef = schema?.typeRef;
        if (!typeRef) {
            throw Error('Every array parameters should have a type ref');
        }
        if (!Array.isArray(value)) {
            throw Error('The value is not an array');
        }
        const nestedType = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_isTypePrimitive).call(this, typeRef) ? undefined : {
            optional: true,
            type: ParameterType.Object,
            value: [],
            typeRef,
            description: '',
            name: '',
        };
        const objectValues = [];
        for (let i = 0; i < value.length; i++) {
            const temp = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_convertObjectToParameterSchema).call(this, `${i}`, value[i], nestedType);
            objectValues.push(temp);
        }
        return {
            type: ParameterType.Array,
            name: key,
            optional: optional,
            typeRef: schema?.typeRef,
            value: objectValues,
            description,
            isCorrectType: true,
        };
    };
    _JSONEditor_handlePopoverDescriptions = function _JSONEditor_handlePopoverDescriptions(event) {
        const hintElement = event.composedPath()[0];
        const elementData = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_getDescriptionAndTypeForElement).call(this, hintElement);
        if (!elementData?.description) {
            return null;
        }
        const [head, tail] = splitDescription(elementData.description);
        const type = elementData.type;
        const replyArgs = elementData.replyArgs;
        let popupContent = '';
        // replyArgs and type cannot get into conflict because replyArgs is attached to a command and type to a parameter
        if (replyArgs) {
            popupContent = tail + `Returns: ${replyArgs}<br>`;
        }
        else if (type) {
            popupContent = tail + `<br>Type: ${type}<br>`;
        }
        else {
            popupContent = tail;
        }
        return {
            box: hintElement.boxInWindow(),
            show: async (popover) => {
                const popupElement = new _elements_components_components_js__WEBPACK_IMPORTED_MODULE_11__.CSSHintDetailsView.CSSHintDetailsView({
                    'getMessage': () => `<code><span>${head}</span></code>`,
                    'getPossibleFixMessage': () => popupContent,
                    'getLearnMoreLink': () => `https://chromedevtools.github.io/devtools-protocol/tot/${this.command.split('.')[0]}/`,
                });
                popover.contentElement.appendChild(popupElement);
                return true;
            },
        };
    };
    _JSONEditor_getDescriptionAndTypeForElement = function _JSONEditor_getDescriptionAndTypeForElement(hintElement) {
        if (hintElement.matches('.command')) {
            const metadata = this.metadataByCommand.get(this.command);
            if (metadata) {
                return { description: metadata.description, replyArgs: metadata.replyArgs };
            }
        }
        if (hintElement.matches('.parameter')) {
            const id = hintElement.dataset.paramid;
            if (!id) {
                return;
            }
            const pathArray = id.split('.');
            const { parameter } = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_getChildByPath).call(this, pathArray);
            if (!parameter.description) {
                return;
            }
            return { description: parameter.description, type: parameter.type };
        }
        return;
    };
    _JSONEditor_copyToClipboard = function _JSONEditor_copyToClipboard() {
        const commandJson = this.getCommandJson();
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commandJson);
    };
    _JSONEditor_handleCommandSend = function _JSONEditor_handleCommandSend() {
        this.dispatchEvent(new SubmitEditorEvent({
            command: this.command,
            parameters: this.getParameters(),
            targetId: this.targetId,
        }));
    };
    _JSONEditor_populateParameterDefaults = function _JSONEditor_populateParameterDefaults(parameter) {
        if (parameter.type === ParameterType.Object) {
            let typeRef = parameter.typeRef;
            if (!typeRef) {
                typeRef = DUMMY_DATA;
            }
            // Fallback to empty array is extremely rare.
            // It happens when the keys for an object are not registered like for Tracing.MemoryDumpConfig or headers for instance.
            const nestedTypes = this.typesByName.get(typeRef) ?? [];
            const nestedParameters = nestedTypes.map(nestedType => {
                return __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_populateParameterDefaults).call(this, nestedType);
            });
            return {
                ...parameter,
                value: parameter.optional ? undefined : nestedParameters,
                isCorrectType: true,
            };
        }
        if (parameter.type === ParameterType.Array) {
            return {
                ...parameter,
                value: parameter?.optional ? undefined :
                    parameter.value?.map(param => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_populateParameterDefaults).call(this, param)) || [],
                isCorrectType: true,
            };
        }
        return {
            ...parameter,
            value: parameter.optional ? undefined : defaultValueByType.get(parameter.type),
            isCorrectType: true,
        };
    };
    _JSONEditor_getChildByPath = function _JSONEditor_getChildByPath(pathArray) {
        let parameters = this.parameters;
        let parentParameter;
        for (let i = 0; i < pathArray.length; i++) {
            const name = pathArray[i];
            const parameter = parameters.find(param => param.name === name);
            if (i === pathArray.length - 1) {
                return { parameter, parentParameter };
            }
            if (parameter?.type === ParameterType.Array || parameter?.type === ParameterType.Object) {
                if (parameter.value) {
                    parameters = parameter.value;
                }
            }
            else {
                throw new Error('Parameter on the path in not an object or an array');
            }
            parentParameter = parameter;
        }
        throw new Error('Not found');
    };
    _JSONEditor_isValueOfCorrectType = function _JSONEditor_isValueOfCorrectType(parameter, value) {
        if (parameter.type === ParameterType.Number && isNaN(Number(value))) {
            return false;
        }
        // For boolean or array parameters, this will create an array of the values the user can enter
        const acceptedValues = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeDropdownValues).call(this, parameter);
        // Check to see if the entered value by the user is indeed part of the values accepted by the enum or boolean parameter
        if (acceptedValues.length !== 0 && !acceptedValues.includes(value)) {
            return false;
        }
        return true;
    };
    _JSONEditor_handleFocusParameter = function _JSONEditor_handleFocusParameter(event) {
        if (!(event.target instanceof _ui_components_suggestion_input_suggestion_input_js__WEBPACK_IMPORTED_MODULE_7__.SuggestionInput.SuggestionInput)) {
            return;
        }
        const paramId = event.target.getAttribute('data-paramid');
        if (!paramId) {
            return;
        }
        const pathArray = paramId.split('.');
        const object = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_getChildByPath).call(this, pathArray).parameter;
        object.isCorrectType = true;
        this.requestUpdate();
    };
    _JSONEditor_computeTargetLabel = function _JSONEditor_computeTargetLabel(target) {
        if (!target) {
            return;
        }
        return `${target.name()} (${target.inspectedURL()})`;
    };
    _JSONEditor_isTypePrimitive = function _JSONEditor_isTypePrimitive(type) {
        if (type === ParameterType.String || type === ParameterType.Boolean || type === ParameterType.Number) {
            return true;
        }
        return false;
    };
    _JSONEditor_createNestedParameter = function _JSONEditor_createNestedParameter(type, name) {
        if (type.type === ParameterType.Object) {
            let typeRef = type.typeRef;
            if (!typeRef) {
                typeRef = DUMMY_DATA;
            }
            const nestedTypes = this.typesByName.get(typeRef) ?? [];
            const nestedValue = nestedTypes.map(nestedType => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_createNestedParameter).call(this, nestedType, nestedType.name));
            return {
                type: ParameterType.Object,
                name: name,
                optional: type.optional,
                typeRef: typeRef,
                value: nestedValue,
                isCorrectType: true,
                description: type.description,
            };
        }
        return {
            type: type.type,
            name: name,
            optional: type.optional,
            isCorrectType: true,
            typeRef: type.typeRef,
            value: type.optional ? undefined : defaultValueByType.get(type.type),
            description: type.description,
        };
    };
    _JSONEditor_handleAddParameter = function _JSONEditor_handleAddParameter(parameterId) {
        const pathArray = parameterId.split('.');
        const { parameter, parentParameter } = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_getChildByPath).call(this, pathArray);
        if (!parameter) {
            return;
        }
        switch (parameter.type) {
            case ParameterType.Array: {
                const typeRef = parameter.typeRef;
                if (!typeRef) {
                    throw Error('Every array parameter must have a typeRef');
                }
                const nestedType = this.typesByName.get(typeRef) ?? [];
                const nestedValue = nestedType.map(type => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_createNestedParameter).call(this, type, type.name));
                let type = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_isTypePrimitive).call(this, typeRef) ? typeRef : ParameterType.Object;
                // If the typeRef is actually a ref to an enum type, the type of the nested param should be a string
                if (nestedType.length === 0) {
                    if (this.enumsByName.get(typeRef)) {
                        type = ParameterType.String;
                    }
                }
                // In case the parameter is an optional array, its value will be undefined so before pushing new value inside,
                // we reset it to empty array
                if (!parameter.value) {
                    parameter.value = [];
                }
                parameter.value.push({
                    type: type,
                    name: String(parameter.value.length),
                    optional: true,
                    typeRef: typeRef,
                    value: nestedValue.length !== 0 ? nestedValue : '',
                    description: '',
                    isCorrectType: true,
                });
                break;
            }
            case ParameterType.Object: {
                let typeRef = parameter.typeRef;
                if (!typeRef) {
                    typeRef = DUMMY_DATA;
                }
                if (!parameter.value) {
                    parameter.value = [];
                }
                if (!this.typesByName.get(typeRef)) {
                    parameter.value.push({
                        type: ParameterType.String,
                        name: '',
                        optional: true,
                        value: '',
                        isCorrectType: true,
                        description: '',
                        isKeyEditable: true,
                    });
                    break;
                }
                const nestedTypes = this.typesByName.get(typeRef) ?? [];
                const nestedValue = nestedTypes.map(nestedType => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_createNestedParameter).call(this, nestedType, nestedType.name));
                const nestedParameters = nestedTypes.map(nestedType => {
                    return __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_populateParameterDefaults).call(this, nestedType);
                });
                if (parentParameter) {
                    parameter.value.push({
                        type: ParameterType.Object,
                        name: '',
                        optional: true,
                        typeRef: typeRef,
                        value: nestedValue,
                        isCorrectType: true,
                        description: '',
                    });
                }
                else {
                    parameter.value = nestedParameters;
                }
                break;
            }
            default:
                // For non-array and non-object parameters, set the value to the default value if available.
                parameter.value = defaultValueByType.get(parameter.type);
                break;
        }
        this.requestUpdate();
    };
    _JSONEditor_handleClearParameter = function _JSONEditor_handleClearParameter(parameter, isParentArray) {
        if (!parameter || parameter.value === undefined) {
            return;
        }
        switch (parameter.type) {
            case ParameterType.Object:
                if (parameter.optional && !isParentArray) {
                    parameter.value = undefined;
                    break;
                }
                if (!parameter.typeRef || !this.typesByName.get(parameter.typeRef)) {
                    parameter.value = [];
                }
                else {
                    parameter.value.forEach(param => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleClearParameter).call(this, param, isParentArray));
                }
                break;
            case ParameterType.Array:
                parameter.value = parameter.optional ? undefined : [];
                break;
            default:
                parameter.value = parameter.optional ? undefined : defaultValueByType.get(parameter.type);
                parameter.isCorrectType = true;
                break;
        }
        this.requestUpdate();
    };
    _JSONEditor_handleDeleteParameter = function _JSONEditor_handleDeleteParameter(parameter, parentParameter) {
        if (!parameter) {
            return;
        }
        if (!Array.isArray(parentParameter.value)) {
            return;
        }
        parentParameter.value.splice(parentParameter.value.findIndex(p => p === parameter), 1);
        if (parentParameter.type === ParameterType.Array) {
            for (let i = 0; i < parentParameter.value.length; i++) {
                parentParameter.value[i].name = String(i);
            }
        }
        this.requestUpdate();
    };
    _JSONEditor_renderTargetSelectorRow = function _JSONEditor_renderTargetSelectorRow() {
        const target = this.targets.find(el => el.id() === this.targetId);
        const targetLabel = target ? __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeTargetLabel).call(this, target) : __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeTargetLabel).call(this, this.targets[0]);
        // clang-format off
        return html `
    <div class="row attribute padded">
      <div>target<span class="separator">:</span></div>
      <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.SelectMenu.SelectMenu.litTagName}
            class="target-select-menu"
            @selectmenuselected=${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_onTargetSelected)}
            .showDivider=${true}
            .showArrow=${true}
            .sideButton=${false}
            .showSelectedItem=${true}
            .showConnector=${false}
            .position=${_ui_components_dialogs_dialogs_js__WEBPACK_IMPORTED_MODULE_4__.Dialog.DialogVerticalPosition.BOTTOM}
            .buttonTitle=${targetLabel}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.dropDown('targets').track({ click: true })}
          >
          ${repeat(this.targets, target => {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
                <${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.Menu.MenuItem.litTagName}
                  .value=${target.id()}>
                    ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeTargetLabel).call(this, target)}
                </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.Menu.MenuItem.litTagName}>
              `;
        })}
          </${_ui_components_menus_menus_js__WEBPACK_IMPORTED_MODULE_6__.SelectMenu.SelectMenu.litTagName}>
    </div>
  `;
        // clang-format on
    };
    _JSONEditor_onTargetSelected = function _JSONEditor_onTargetSelected(event) {
        this.targetId = event.itemValue;
        this.requestUpdate();
    };
    _JSONEditor_computeDropdownValues = function _JSONEditor_computeDropdownValues(parameter) {
        // The suggestion box should only be shown for parameters of type string and boolean
        if (parameter.type === ParameterType.String) {
            const enums = this.enumsByName.get(`${parameter.typeRef}`) ?? {};
            return Object.values(enums);
        }
        if (parameter.type === ParameterType.Boolean) {
            return ['true', 'false'];
        }
        return [];
    };
    _JSONEditor_renderInlineButton = function _JSONEditor_renderInlineButton(opts) {
        return html `
          <devtools-button
            title=${opts.title}
            .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Size.SMALL}
            .iconName=${opts.iconName}
            .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.ICON}
            class=${classMap(opts.classMap)}
            @click=${opts.onClick}
            .jslogContext=${opts.jslogContext}
          ></devtools-button>
        `;
    };
    _JSONEditor_renderWarningIcon = function _JSONEditor_renderWarningIcon() {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `<${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
    .data=${{
            iconName: 'warning-filled',
            color: 'var(--icon-warning)',
            width: '14px',
            height: '14px',
        }}
    class=${classMap({
            'warning-icon': true,
        })}
  >
  </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>`;
    };
    _JSONEditor_renderParameters = function _JSONEditor_renderParameters(parameters, id, parentParameter, parentParameterId) {
        parameters.sort((a, b) => Number(a.optional) - Number(b.optional));
        // clang-format off
        return html `
      <ul>
        ${repeat(parameters, parameter => {
            const parameterId = parentParameter ? `${parentParameterId}` + '.' + `${parameter.name}` : parameter.name;
            const subparameters = parameter.type === ParameterType.Array || parameter.type === ParameterType.Object ? (parameter.value ?? []) : [];
            const handleInputOnBlur = (event) => {
                __classPrivateFieldGet(this, _JSONEditor_saveParameterValue, "f").call(this, event);
            };
            const handleKeydown = (event) => {
                __classPrivateFieldGet(this, _JSONEditor_handleParameterInputKeydown, "f").call(this, event);
            };
            const handleFocus = (event) => {
                __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleFocusParameter).call(this, event);
            };
            const handleParamKeyOnBlur = (event) => {
                __classPrivateFieldGet(this, _JSONEditor_saveNestedObjectParameterKey, "f").call(this, event);
            };
            const isPrimitive = __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_isTypePrimitive).call(this, parameter.type);
            const isArray = parameter.type === ParameterType.Array;
            const isParentArray = parentParameter && parentParameter.type === ParameterType.Array;
            const isParentObject = parentParameter && parentParameter.type === ParameterType.Object;
            const isObject = parameter.type === ParameterType.Object;
            const isParamValueUndefined = parameter.value === undefined;
            const isParamOptional = parameter.optional;
            const hasTypeRef = isObject && parameter.typeRef && this.typesByName.get(parameter.typeRef) !== undefined;
            // This variable indicates that this parameter is a parameter nested inside an object parameter
            // that no keys defined inside the CDP documentation.
            const hasNoKeys = parameter.isKeyEditable;
            const isCustomEditorDisplayed = isObject && !hasTypeRef;
            const hasOptions = parameter.type === ParameterType.String || parameter.type === ParameterType.Boolean;
            const canClearParameter = (isArray && !isParamValueUndefined && parameter.value?.length !== 0) || (isObject && !isParamValueUndefined);
            const parametersClasses = {
                'optional-parameter': parameter.optional,
                'parameter': true,
                'undefined-parameter': parameter.value === undefined && parameter.optional,
            };
            const inputClasses = {
                'json-input': true,
            };
            return html `
                <li class="row">
                  <div class="row-icons">
                      ${!parameter.isCorrectType ? html `${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderWarningIcon).call(this)}` : nothing}

                      <!-- If an object parameter has no predefined keys, show an input to enter the key, otherwise show the name of the parameter -->
                      <div class=${classMap(parametersClasses)} data-paramId=${parameterId}>
                          ${hasNoKeys ?
                html `<devtools-suggestion-input
                              data-paramId=${parameterId}
                              isKey=${true}
                              .isCorrectInput=${live(parameter.isCorrectType)}
                              .options=${hasOptions ? __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeDropdownValues).call(this, parameter) : []}
                              .autocomplete=${false}
                              .value=${live(parameter.name ?? '')}
                              .placeholder=${parameter.value === '' ? EMPTY_STRING : `<${defaultValueByType.get(parameter.type)}>`}
                              @blur=${handleParamKeyOnBlur}
                              @focus=${handleFocus}
                              @keydown=${handleKeydown}
                            ></devtools-suggestion-input>` :
                html `${parameter.name}`} <span class="separator">:</span>
                      </div>

                      <!-- Render button to add values inside an array parameter -->
                      ${isArray ? html `
                        ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                title: i18nString(UIStrings.addParameter),
                iconName: 'plus',
                onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleAddParameter).call(this, parameterId),
                classMap: { 'add-button': true },
                jslogContext: 'protocol-monitor.add-parameter',
            })}
                      ` : nothing}

                      <!-- Render button to complete reset an array parameter or an object parameter-->
                      ${canClearParameter ?
                __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                    title: i18nString(UIStrings.resetDefaultValue),
                    iconName: 'clear',
                    onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleClearParameter).call(this, parameter, isParentArray),
                    classMap: { 'clear-button': true },
                    jslogContext: 'protocol-monitor.reset-to-default-value',
                }) : nothing}

                      <!-- Render the buttons to change the value from undefined to empty string for optional primitive parameters -->
                      ${isPrimitive && !isParentArray && isParamOptional && isParamValueUndefined ?
                html `  ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                    title: i18nString(UIStrings.addParameter),
                    iconName: 'plus',
                    onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleAddParameter).call(this, parameterId),
                    classMap: { 'add-button': true },
                    jslogContext: 'protocol-monitor.add-parameter',
                })}` : nothing}

                      <!-- Render the buttons to change the value from undefined to populate the values inside object with their default values -->
                      ${isObject && isParamOptional && isParamValueUndefined && hasTypeRef ?
                html `  ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                    title: i18nString(UIStrings.addParameter),
                    iconName: 'plus',
                    onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleAddParameter).call(this, parameterId),
                    classMap: { 'add-button': true },
                    jslogContext: 'protocol-monitor.add-parameter',
                })}` : nothing}
                  </div>

                  <div class="row-icons">
                      <!-- If an object has no predefined keys, show an input to enter the value, and a delete icon to delete the whole key/value pair -->
                      ${hasNoKeys && isParentObject ? html `
                      <devtools-suggestion-input
                          data-paramId=${parameterId}
                          .isCorrectInput=${live(parameter.isCorrectType)}
                          .options=${hasOptions ? __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeDropdownValues).call(this, parameter) : []}
                          .autocomplete=${false}
                          .value=${live(parameter.value ?? '')}
                          .placeholder=${parameter.value === '' ? EMPTY_STRING : `<${defaultValueByType.get(parameter.type)}>`}
                          .jslogContext=${'parameter-value'}
                          @blur=${handleInputOnBlur}
                          @focus=${handleFocus}
                          @keydown=${handleKeydown}
                        ></devtools-suggestion-input>

                        ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                title: i18nString(UIStrings.deleteParameter),
                iconName: 'bin',
                onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleDeleteParameter).call(this, parameter, parentParameter),
                classMap: { deleteButton: true, deleteIcon: true },
                jslogContext: 'protocol-monitor.delete-parameter',
            })}` : nothing}

                    <!-- In case  the parameter is not optional or its value is not undefined render the input -->
                    ${isPrimitive && !hasNoKeys && (!isParamValueUndefined || !isParamOptional) && (!isParentArray) ?
                html `
                        <devtools-suggestion-input
                          data-paramId=${parameterId}
                          .strikethrough=${live(parameter.isCorrectType)}
                          .options=${hasOptions ? __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeDropdownValues).call(this, parameter) : []}
                          .autocomplete=${false}
                          .value=${live(parameter.value ?? '')}
                          .placeholder=${parameter.value === '' ? EMPTY_STRING : `<${defaultValueByType.get(parameter.type)}>`}
                          .jslogContext=${'parameter-value'}
                          @blur=${handleInputOnBlur}
                          @focus=${handleFocus}
                          @keydown=${handleKeydown}
                        ></devtools-suggestion-input>` : nothing}

                    <!-- Render the buttons to change the value from empty string to undefined for optional primitive parameters -->
                    ${isPrimitive && !hasNoKeys && !isParentArray && isParamOptional && !isParamValueUndefined ?
                html `  ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                    title: i18nString(UIStrings.resetDefaultValue),
                    iconName: 'clear',
                    onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleClearParameter).call(this, parameter),
                    classMap: { 'clear-button': true },
                    jslogContext: 'protocol-monitor.reset-to-default-value',
                })}` : nothing}

                    <!-- If the parameter is an object with no predefined keys, renders a button to add key/value pairs to it's value -->
                    ${isCustomEditorDisplayed ? html `
                      ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                title: i18nString(UIStrings.addCustomProperty),
                iconName: 'plus',
                onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleAddParameter).call(this, parameterId),
                classMap: { 'add-button': true },
                jslogContext: 'protocol-monitor.add-custom-property',
            })}
                    ` : nothing}

                    <!-- In case the parameter is nested inside an array we render the input field as well as a delete button -->
                    ${isParentArray ? html `
                    <!-- If the parameter is an object we don't want to display the input field we just want the delete button-->
                    ${!isObject ? html `
                    <devtools-suggestion-input
                      data-paramId=${parameterId}
                      .options=${hasOptions ? __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_computeDropdownValues).call(this, parameter) : []}
                      .autocomplete=${false}
                      .value=${live(parameter.value ?? '')}
                      .placeholder=${parameter.value === '' ? EMPTY_STRING : `<${defaultValueByType.get(parameter.type)}>`}
                      .jslogContext=${'parameter'}
                      @blur=${handleInputOnBlur}
                      @keydown=${handleKeydown}
                      class=${classMap(inputClasses)}
                    ></devtools-suggestion-input>` : nothing}

                    ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderInlineButton).call(this, {
                title: i18nString(UIStrings.deleteParameter),
                iconName: 'bin',
                onClick: () => __classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_handleDeleteParameter).call(this, parameter, parentParameter),
                classMap: { 'delete-button': true },
                jslogContext: 'protocol-monitor.delete-parameter',
            })}` : nothing}
                  </div>
                </li>
                ${__classPrivateFieldGet(this, _JSONEditor_instances, "m", _JSONEditor_renderParameters).call(this, subparameters, id, parameter, parameterId)}
              `;
        })}
      </ul>
    `;
        // clang-format on
    };
    __setFunctionName(_classThis, "JSONEditor");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _command_decorators = [state()];
        _targetId_decorators = [state()];
        __esDecorate(null, null, _command_decorators, { kind: "field", name: "command", static: false, private: false, access: { has: obj => "command" in obj, get: obj => obj.command, set: (obj, value) => { obj.command = value; } }, metadata: _metadata }, _command_initializers, _command_extraInitializers);
        __esDecorate(null, null, _targetId_decorators, { kind: "field", name: "targetId", static: false, private: false, access: { has: obj => "targetId" in obj, get: obj => obj.targetId, set: (obj, value) => { obj.targetId = value; } }, metadata: _metadata }, _targetId_initializers, _targetId_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JSONEditor = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './JSONEditor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JSONEditor = _classThis;
})();



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