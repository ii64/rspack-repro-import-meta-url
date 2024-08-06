"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_CreateRecordingView_js"],{

/***/ "./panels/recorder/components/CreateRecordingView.js":
/*!***********************************************************!*\
  !*** ./panels/recorder/components/CreateRecordingView.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRecordingView: () => (/* binding */ CreateRecordingView),
/* harmony export */   RecordingCancelledEvent: () => (/* binding */ RecordingCancelledEvent),
/* harmony export */   RecordingStartedEvent: () => (/* binding */ RecordingStartedEvent)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _createRecordingView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createRecordingView.css.js */ "./panels/recorder/components/createRecordingView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
    static eventName = 'recordingstarted';
    name;
    selectorAttribute;
    selectorTypesToRecord;
    constructor(name, selectorTypesToRecord, selectorAttribute) {
        super(RecordingStartedEvent.eventName, {});
        this.name = name;
        this.selectorAttribute = selectorAttribute || undefined;
        this.selectorTypesToRecord = selectorTypesToRecord;
    }
}
class RecordingCancelledEvent extends Event {
    static eventName = 'recordingcancelled';
    constructor() {
        super(RecordingCancelledEvent.eventName);
    }
}
class CreateRecordingView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.literal `devtools-create-recording-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #defaultRecordingName = '';
    #error;
    #recorderSettings;
    constructor() {
        super();
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('create-recording-view')}`);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [
            _createRecordingView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"],
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.textInputStyles,
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_4__.checkboxStyles,
        ];
        this.#render();
        this.#shadow.querySelector('input')?.focus();
    }
    set data(data) {
        this.#recorderSettings = data.recorderSettings;
        this.#defaultRecordingName = this.#recorderSettings.defaultTitle;
    }
    #onKeyDown(event) {
        if (this.#error) {
            this.#error = undefined;
            this.#render();
        }
        const keyboardEvent = event;
        if (keyboardEvent.key === 'Enter') {
            this.startRecording();
            event.stopPropagation();
            event.preventDefault();
        }
    }
    startRecording() {
        const nameInput = this.#shadow.querySelector('#user-flow-name');
        if (!nameInput) {
            throw new Error('input#user-flow-name not found');
        }
        if (!this.#recorderSettings) {
            throw new Error('settings not set');
        }
        if (!nameInput.value.trim()) {
            this.#error = new Error(i18nString(UIStrings.recordingNameIsRequired));
            this.#render();
            return;
        }
        const selectorTypeElements = this.#shadow.querySelectorAll('.selector-type input[type=checkbox]');
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
            this.#error = new Error(i18nString(UIStrings.includeNecessarySelectors));
            this.#render();
            return;
        }
        for (const selectorType of Object.values(_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Schema.SelectorType)) {
            this.#recorderSettings.setSelectorByType(selectorType, selectorTypesToRecord.includes(selectorType));
        }
        const selectorAttributeEl = this.#shadow.querySelector('#selector-attribute');
        const selectorAttribute = selectorAttributeEl.value.trim();
        this.#recorderSettings.selectorAttribute = selectorAttribute;
        this.dispatchEvent(new RecordingStartedEvent(nameInput.value.trim(), selectorTypesToRecord, selectorAttribute));
    }
    #dispatchRecordingCancelled() {
        this.dispatchEvent(new RecordingCancelledEvent());
    }
    #onInputFocus = () => {
        this.#shadow.querySelector('#user-flow-name')?.select();
    };
    #render() {
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
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'cross',
        }}
              @click=${this.#dispatchRecordingCancelled}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
          </div>
          <label class="row-label" for="user-flow-name">${i18nString(UIStrings.recordingName)}</label>
          <input
            value=${this.#defaultRecordingName}
            @focus=${this.#onInputFocus}
            @keydown=${this.#onKeyDown}
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
            value=${this.#recorderSettings?.selectorAttribute}
            placeholder="data-testid"
            @keydown=${this.#onKeyDown}
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
            const checked = this.#recorderSettings?.getSelectorByType(selectorType);
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
                  <label class="checkbox-label selector-type">
                    <input
                      @keydown=${this.#onKeyDown}
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

          ${this.#error &&
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_5__.html `
          <div class="error" role="alert">
            ${this.#error.message}
          </div>
        `}
        </div>
        <div class="footer">
          <div class="controls">
            <devtools-control-button
              @click=${this.startRecording}
              .label=${i18nString(UIStrings.startRecording)}
              .shape=${'circle'}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action("chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */).track({ click: true })}
              title=${_models_models_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.getTooltipForActions(i18nString(UIStrings.startRecording), "chrome-recorder.start-recording" /* Actions.RecorderActions.StartRecording */)}
            ></devtools-control-button>
          </div>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-create-recording-view', CreateRecordingView);
//# sourceMappingURL=CreateRecordingView.js.map

/***/ }),

/***/ "./panels/recorder/components/createRecordingView.css.js":
/*!***************************************************************!*\
  !*** ./panels/recorder/components/createRecordingView.css.js ***!
  \***************************************************************/
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
  outline: none;
  box-sizing: border-box;
  font-size: inherit;
}

.wrapper {
  padding: 24px;
  flex: 1;
}

h1 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: var(--sys-color-on-surface);
  margin: 0;
  font-weight: normal;
}

.row-label {
  font-weight: 500;
  font-size: 11px;
  line-height: 16px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  color: var(--sys-color-secondary);
  margin-bottom: 8px;
  margin-top: 32px;
  display: flex;
  align-items: center;
  gap: 3px;
}

.footer {
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--sys-color-divider);
  padding: 12px;
  background: var(--sys-color-cdt-base-container);
}

.controls {
  display: flex;
}

.error {
  margin: 16px 0 0;
  padding: 8px;
  background: var(--sys-color-error-container);
  color: var(--sys-color-error);
}

.row-label .link:focus-visible {
  outline: var(--sys-color-state-focus-ring) auto 1px;
}

.header-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.checkbox-label {
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 4px;
  line-height: 1.1;
  padding: 4px;
}

.checkbox-container {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}

input[type="checkbox"]:focus-visible {
  outline: var(--sys-color-state-focus-ring) auto 1px;
}

devtools-icon[name="help"] {
  width: 16px;
  height: 16px;
}

/*# sourceURL=createRecordingView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);