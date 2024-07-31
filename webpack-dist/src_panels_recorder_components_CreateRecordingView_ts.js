"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_CreateRecordingView_ts"],{

/***/ "./src/panels/recorder/components/CreateRecordingView.ts":
/*!***************************************************************!*\
  !*** ./src/panels/recorder/components/CreateRecordingView.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRecordingView: () => (/* binding */ CreateRecordingView),
/* harmony export */   RecordingCancelledEvent: () => (/* binding */ RecordingCancelledEvent),
/* harmony export */   RecordingStartedEvent: () => (/* binding */ RecordingStartedEvent)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../recorder-actions/recorder-actions.js */ "./src/panels/recorder/recorder-actions/recorder-actions.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './createRecordingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
var _CreateRecordingView_instances, _CreateRecordingView_shadow, _CreateRecordingView_defaultRecordingName, _CreateRecordingView_error, _CreateRecordingView_recorderSettings, _CreateRecordingView_onKeyDown, _CreateRecordingView_dispatchRecordingCancelled, _CreateRecordingView_onInputFocus, _CreateRecordingView_render;
/* eslint-disable rulesdir/inject_checkbox_styles */










const UIStrings = {
    /**
     * @description The label for the input where the user enters a name for the new recording.
     */
    recordingName: 'Recording name',
    /**
     * @description The button that start the recording with selected options.
     */
    startRecording: 'Start recording',
    /**
     * @description The title of the page that contains the form for creating a new recording.
     */
    createRecording: 'Create a new recording',
    /**
     * @description The error message that is shown if the user tries to create a recording without a name.
     */
    recordingNameIsRequired: 'Recording name is required',
    /**
     * @description The label for the input where the user enters an attribute to be used for selector generation.
     */
    selectorAttribute: 'Selector attribute',
    /**
     * @description The title for the close button where the user cancels a recording and returns back to previous view.
     */
    cancelRecording: 'Cancel recording',
    /**
     * @description Label indicating a CSS (Cascading Style Sheets) selector type
     * (https://developer.mozilla.org/en-US/docs/Web/CSS). The label is used on a
     * checkbox which users can tick if they are interesting in recording CSS
     * selectors.
     */
    selectorTypeCSS: 'CSS',
    /**
     * @description Label indicating a piercing CSS (Cascading Style Sheets)
     * selector type
     * (https://pptr.dev/guides/query-selectors#pierce-selectors-pierce). These
     * type of selectors behave like CSS selectors, but can pierce through
     * ShadowDOM. The label is used on a checkbox which users can tick if they are
     * interesting in recording CSS selectors.
     */
    selectorTypePierce: 'Pierce',
    /**
     * @description Label indicating a ARIA (Accessible Rich Internet
     * Applications) selector type
     * (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA). The
     * label is used on a checkbox which users can tick if they are interesting in
     * recording ARIA selectors.
     */
    selectorTypeARIA: 'ARIA',
    /**
     * @description Label indicating a text selector type. The label is used on a
     * checkbox which users can tick if they are interesting in recording text
     * selectors.
     */
    selectorTypeText: 'Text',
    /**
     * @description Label indicating a XPath (XML Path Language) selector type
     * (https://en.wikipedia.org/wiki/XPath). The label is used on a checkbox
     * which users can tick if they are interesting in recording text selectors.
     */
    selectorTypeXPath: 'XPath',
    /**
     * @description The label for the input that allows specifying selector types
     * that should be used during the recordering.
     */
    selectorTypes: 'Selector types to record',
    /**
     * @description The error message that shows up if the user turns off
     * necessary selectors.
     */
    includeNecessarySelectors: 'You must choose CSS, Pierce, or XPath as one of your options. Only these selectors are guaranteed to be recorded since ARIA and text selectors may not be unique.',
    /**
     * @description Title of a link to the developer documentation.
     */
    learnMore: 'Learn more',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/CreateRecordingView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class RecordingStartedEvent extends Event {
    constructor(name, selectorTypesToRecord, selectorAttribute) {
        super(RecordingStartedEvent.eventName, {});
        Object.defineProperty(this, "name", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectorAttribute", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectorTypesToRecord", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.name = name;
        this.selectorAttribute = selectorAttribute || undefined;
        this.selectorTypesToRecord = selectorTypesToRecord;
    }
}
Object.defineProperty(RecordingStartedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recordingstarted'
});
class RecordingCancelledEvent extends Event {
    constructor() {
        super(RecordingCancelledEvent.eventName);
    }
}
Object.defineProperty(RecordingCancelledEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recordingcancelled'
});
class CreateRecordingView extends HTMLElement {
    constructor() {
        super();
        _CreateRecordingView_instances.add(this);
        _CreateRecordingView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _CreateRecordingView_defaultRecordingName.set(this, '');
        _CreateRecordingView_error.set(this, void 0);
        _CreateRecordingView_recorderSettings.set(this, void 0);
        _CreateRecordingView_onInputFocus.set(this, () => {
            __classPrivateFieldGet(this, _CreateRecordingView_shadow, "f").querySelector('#user-flow-name')?.select();
        });
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('create-recording-view')}`);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _CreateRecordingView_shadow, "f").adoptedStyleSheets = [
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './createRecordingView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.textInputStyles,
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.checkboxStyles,
        ];
        __classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_render).call(this);
        __classPrivateFieldGet(this, _CreateRecordingView_shadow, "f").querySelector('input')?.focus();
    }
    set data(data) {
        __classPrivateFieldSet(this, _CreateRecordingView_recorderSettings, data.recorderSettings, "f");
        __classPrivateFieldSet(this, _CreateRecordingView_defaultRecordingName, __classPrivateFieldGet(this, _CreateRecordingView_recorderSettings, "f").defaultTitle, "f");
    }
    startRecording() {
        const nameInput = __classPrivateFieldGet(this, _CreateRecordingView_shadow, "f").querySelector('#user-flow-name');
        if (!nameInput) {
            throw new Error('input#user-flow-name not found');
        }
        if (!__classPrivateFieldGet(this, _CreateRecordingView_recorderSettings, "f")) {
            throw new Error('settings not set');
        }
        if (!nameInput.value.trim()) {
            __classPrivateFieldSet(this, _CreateRecordingView_error, new Error(i18nString(UIStrings.recordingNameIsRequired)), "f");
            __classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_render).call(this);
            return;
        }
        const selectorTypeElements = __classPrivateFieldGet(this, _CreateRecordingView_shadow, "f").querySelectorAll('.selector-type input[type=checkbox]');
        const selectorTypesToRecord = [];
        for (const selectorType of selectorTypeElements) {
            const checkbox = selectorType;
            const checkboxValue = checkbox.value;
            if (checkbox.checked) {
                selectorTypesToRecord.push(checkboxValue);
            }
        }
        if (!selectorTypesToRecord.includes(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.CSS) &&
            !selectorTypesToRecord.includes(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.XPath) &&
            !selectorTypesToRecord.includes(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.Pierce)) {
            __classPrivateFieldSet(this, _CreateRecordingView_error, new Error(i18nString(UIStrings.includeNecessarySelectors)), "f");
            __classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_render).call(this);
            return;
        }
        for (const selectorType of Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType)) {
            __classPrivateFieldGet(this, _CreateRecordingView_recorderSettings, "f").setSelectorByType(selectorType, selectorTypesToRecord.includes(selectorType));
        }
        const selectorAttributeEl = __classPrivateFieldGet(this, _CreateRecordingView_shadow, "f").querySelector('#selector-attribute');
        const selectorAttribute = selectorAttributeEl.value.trim();
        __classPrivateFieldGet(this, _CreateRecordingView_recorderSettings, "f").selectorAttribute = selectorAttribute;
        this.dispatchEvent(new RecordingStartedEvent(nameInput.value.trim(), selectorTypesToRecord, selectorAttribute));
    }
}
_CreateRecordingView_shadow = new WeakMap(), _CreateRecordingView_defaultRecordingName = new WeakMap(), _CreateRecordingView_error = new WeakMap(), _CreateRecordingView_recorderSettings = new WeakMap(), _CreateRecordingView_onInputFocus = new WeakMap(), _CreateRecordingView_instances = new WeakSet(), _CreateRecordingView_onKeyDown = function _CreateRecordingView_onKeyDown(event) {
    if (__classPrivateFieldGet(this, _CreateRecordingView_error, "f")) {
        __classPrivateFieldSet(this, _CreateRecordingView_error, undefined, "f");
        __classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_render).call(this);
    }
    const keyboardEvent = event;
    if (keyboardEvent.key === 'Enter') {
        this.startRecording();
        event.stopPropagation();
        event.preventDefault();
    }
}, _CreateRecordingView_dispatchRecordingCancelled = function _CreateRecordingView_dispatchRecordingCancelled() {
    this.dispatchEvent(new RecordingCancelledEvent());
}, _CreateRecordingView_render = function _CreateRecordingView_render() {
    const selectorTypeToLabel = new Map([
        [_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.ARIA, i18nString(UIStrings.selectorTypeARIA)],
        [_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.CSS, i18nString(UIStrings.selectorTypeCSS)],
        [_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.Text, i18nString(UIStrings.selectorTypeText)],
        [
            _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.XPath,
            i18nString(UIStrings.selectorTypeXPath),
        ],
        [
            _models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType.Pierce,
            i18nString(UIStrings.selectorTypePierce),
        ],
    ]);
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
        <div class="wrapper">
          <div class="header-wrapper">
            <h1>${i18nString(UIStrings.createRecording)}</h1>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
              title=${i18nString(UIStrings.cancelRecording)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.close().track({ click: true })}
              .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        iconName: 'cross',
    }}
              @click=${__classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_dispatchRecordingCancelled)}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
          </div>
          <label class="row-label" for="user-flow-name">${i18nString(UIStrings.recordingName)}</label>
          <input
            value=${__classPrivateFieldGet(this, _CreateRecordingView_defaultRecordingName, "f")}
            @focus=${__classPrivateFieldGet(this, _CreateRecordingView_onInputFocus, "f")}
            @keydown=${__classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_onKeyDown)}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('user-flow-name').track({ change: true })}
            class="devtools-text-input"
            id="user-flow-name"
          />
          <label class="row-label" for="selector-attribute">
            <span>${i18nString(UIStrings.selectorAttribute)}</span>
            <x-link
              class="link" href="https://g.co/devtools/recorder#selector"
              title=${i18nString(UIStrings.learnMore)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.link('recorder-selector-help').track({ click: true })}>
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} name="help">
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
            </x-link>
          </label>
          <input
            value=${__classPrivateFieldGet(this, _CreateRecordingView_recorderSettings, "f")?.selectorAttribute}
            placeholder="data-testid"
            @keydown=${__classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_onKeyDown)}
            jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.textField('selector-attribute').track({ change: true })}
            class="devtools-text-input"
            id="selector-attribute"
          />
          <label class="row-label">
            <span>${i18nString(UIStrings.selectorTypes)}</span>
            <x-link
              class="link" href="https://g.co/devtools/recorder#selector"
              title=${i18nString(UIStrings.learnMore)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.link('recorder-selector-help').track({ click: true })}>
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} name="help">
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
            </x-link>
          </label>
          <div class="checkbox-container">
            ${Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType).map(selectorType => {
        const checked = __classPrivateFieldGet(this, _CreateRecordingView_recorderSettings, "f")?.getSelectorByType(selectorType);
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
                  <label class="checkbox-label selector-type">
                    <input
                      @keydown=${__classPrivateFieldGet(this, _CreateRecordingView_instances, "m", _CreateRecordingView_onKeyDown)}
                      .value=${selectorType}
                      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle().track({ click: true }).context(`selector-${selectorType}`)}
                      checked=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.Directives.ifDefined(checked ? checked : undefined)}
                      type="checkbox"
                    />
                    ${selectorTypeToLabel.get(selectorType) || selectorType}
                  </label>
                `;
    })}
          </div>

          ${__classPrivateFieldGet(this, _CreateRecordingView_error, "f") &&
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
          <div class="error" role="alert">
            ${__classPrivateFieldGet(this, _CreateRecordingView_error, "f").message}
          </div>
        `}
        </div>
        <div class="footer">
          <div class="controls">
            <devtools-control-button
              @click=${this.startRecording}
              .label=${i18nString(UIStrings.startRecording)}
              .shape=${'circle'}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_8__.RecorderActions.StartRecording).track({ click: true })}
              title=${_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.getTooltipForActions(i18nString(UIStrings.startRecording), _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_8__.RecorderActions.StartRecording)}
            ></devtools-control-button>
          </div>
        </div>
      `, __classPrivateFieldGet(this, _CreateRecordingView_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(CreateRecordingView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-create-recording-view`
});
customElements.define('devtools-create-recording-view', CreateRecordingView);


/***/ })

}]);