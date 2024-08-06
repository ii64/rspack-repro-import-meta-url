"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_autofill_AutofillView_js"],{

/***/ "./panels/autofill/AutofillView.js":
/*!*****************************************!*\
  !*** ./panels/autofill/AutofillView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillView: () => (/* binding */ AutofillView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/autofill_manager/autofill_manager.js */ "./models/autofill_manager/autofill_manager.js");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _autofillView_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./autofillView.css.js */ "./panels/autofill/autofillView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












const UIStrings = {
    /**
     * @description Explanation for how to populate the autofill panel with data. Shown when there is
     * no data available.
     */
    toStartDebugging: 'To start debugging autofill, use Chrome\'s autofill menu to fill an address form.',
    /**
     * @description Column header for column containing form field values
     */
    value: 'Value',
    /**
     * @description Column header for column containing the predicted autofill categories
     */
    predictedAutofillValue: 'Predicted autofill value',
    /**
     * @description Column header for column containing the name/label/id of form fields
     */
    formField: 'Form field',
    /**
     * @description Tooltip for an adorner for form fields which have an autocomplete attribute
     * (http://go/mdn/HTML/Attributes/autocomplete)
     */
    autocompleteAttribute: 'Autocomplete attribute',
    /**
     * @description Abbreviation of 'attribute'. Text content of an adorner for form fields which
     * have an autocomplete attribute (http://go/mdn/HTML/Attributes/autocomplete)
     */
    attr: 'attr',
    /**
     * @description Tooltip for an adorner for form fields which don't have an autocomplete attribute
     * (http://go/mdn/HTML/Attributes/autocomplete) and for which Chrome used heuristics to deduce
     * the form field's autocomplete category.
     */
    inferredByHeuristics: 'Inferred by heuristics',
    /**
     * @description Abbreviation of 'heuristics'. Text content of an adorner for form fields which
     * don't have an autocomplete attribute (http://go/mdn/HTML/Attributes/autocomplete) and for
     * which Chrome used heuristics to deduce the form field's autocomplete category.
     */
    heur: 'heur',
    /**
     * @description Label for checkbox in the Autofill panel. If checked, this panel will open
     * automatically whenever a form is being autofilled.
     */
    autoShow: 'Automatically open this panel',
    /**
     * @description Tooltip text for a checkbox label in the Autofill panel. If checked, this panel
     * will open automatically whenever a form is being autofilled.
     */
    autoShowTooltip: 'Open the autofill panel automatically when an autofill activity is detected.',
    /**
     * @description Aria text for the section of the autofill view containing a preview of the autofilled address.
     */
    addressPreview: 'Address preview',
    /**
     * @description Aria text for the section of the autofill view containing the info about the autofilled form fields.
     */
    formInspector: 'Form inspector',
    /**
     *@description Link text for a hyperlink to more documentation
     */
    learnMore: 'Learn more',
    /**
     *@description Link text for a hyperlink to webpage for leaving user feedback
     */
    sendFeedback: 'Send feedback',
};
const AUTOFILL_INFO_URL = 'https://goo.gle/devtools-autofill-panel';
const AUTOFILL_FEEDBACK_URL = 'https://crbug.com/329106326';
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/autofill/AutofillView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class AutofillView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.literal `devtools-autofill-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #renderBound = this.#render.bind(this);
    #autoOpenViewSetting;
    #address = '';
    #filledFields = [];
    #matches = [];
    #highlightedMatches = [];
    constructor() {
        super();
        this.#autoOpenViewSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('auto-open-autofill-view-on-event', true);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles, _autofillView_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]];
        const autofillManager = _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_3__.AutofillManager.AutofillManager.instance();
        const formFilledEvent = autofillManager.getLastFilledAddressForm();
        if (formFilledEvent) {
            ({
                address: this.#address,
                filledFields: this.#filledFields,
                matches: this.#matches,
            } = formFilledEvent);
        }
        autofillManager.addEventListener("AddressFormFilled" /* AutofillManager.AutofillManager.Events.AddressFormFilled */, this.#onAddressFormFilled, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.PrimaryPageChanged, this.#onPrimaryPageChanged, this);
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#renderBound);
    }
    #onPrimaryPageChanged() {
        this.#address = '';
        this.#filledFields = [];
        this.#matches = [];
        this.#highlightedMatches = [];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#renderBound);
    }
    #onAddressFormFilled({ data }) {
        ({
            address: this.#address,
            filledFields: this.#filledFields,
            matches: this.#matches,
        } = data);
        this.#highlightedMatches = [];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#renderBound);
    }
    async #render() {
        if (!_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.isScheduledRender(this)) {
            throw new Error('AutofillView render was not scheduled');
        }
        if (!this.#address && !this.#filledFields.length) {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
        <main>
          <div class="top-right-corner">
            <label class="checkbox-label" title=${i18nString(UIStrings.autoShowTooltip)}>
              <input
                type="checkbox"
                ?checked=${this.#autoOpenViewSetting.get()}
                @change=${this.#onAutoOpenCheckboxChanged.bind(this)}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.toggle(this.#autoOpenViewSetting.name).track({ change: true })}
              >
              <span>${i18nString(UIStrings.autoShow)}</span>
            </label>
            <x-link href=${AUTOFILL_FEEDBACK_URL} class="feedback link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('feedback').track({ click: true })}>${i18nString(UIStrings.sendFeedback)}</x-link>
          </div>
          <div class="placeholder-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.pane('autofill-empty')}>
            <div class="placeholder">
              <div>${i18nString(UIStrings.toStartDebugging)}</div>
              <x-link href=${AUTOFILL_INFO_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('learn-more').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
            </div>
          </div>
        </main>
      `, this.#shadow, { host: this });
            // clang-format on
            return;
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <main>
        <div class="content-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.pane('autofill')}>
          <div class="right-to-left" role="region" aria-label=${i18nString(UIStrings.addressPreview)}>
            <div class="label-container">
              <label class="checkbox-label" title=${i18nString(UIStrings.autoShowTooltip)}>
                <input
                  type="checkbox"
                  ?checked=${this.#autoOpenViewSetting.get()}
                  @change=${this.#onAutoOpenCheckboxChanged.bind(this)}
                  jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.toggle(this.#autoOpenViewSetting.name).track({ change: true })}
                >
                <span>${i18nString(UIStrings.autoShow)}</span>
              </label>
              <x-link href=${AUTOFILL_FEEDBACK_URL} class="feedback link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.link('feedback').track({ click: true })}>${i18nString(UIStrings.sendFeedback)}</x-link>
            </div>
            ${this.#renderAddress()}
          </div>
          ${this.#renderFilledFields()}
        </div>
      </main>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #onAutoOpenCheckboxChanged(e) {
        const { checked } = e.target;
        this.#autoOpenViewSetting.set(checked);
    }
    #renderAddress() {
        if (!this.#address) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
        }
        const createSpan = (startIndex, endIndex) => {
            const textContentLines = this.#address.substring(startIndex, endIndex).split('\n');
            const templateLines = textContentLines.map((line, i) => i === textContentLines.length - 1 ? line : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `${line}<br>`);
            const hasMatches = this.#matches.some(match => match.startIndex <= startIndex && match.endIndex > startIndex);
            if (!hasMatches) {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `<span>${templateLines}</span>`;
            }
            const spanClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.Directives.classMap({
                'matches-filled-field': hasMatches,
                highlighted: this.#highlightedMatches.some(match => match.startIndex <= startIndex && match.endIndex > startIndex),
            });
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
        <span
          class=${spanClasses}
          @mouseenter=${() => this.#onSpanMouseEnter(startIndex)}
          @mouseleave=${this.#onSpanMouseLeave}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.item('matched-address-item').track({ hover: true })}
        >${templateLines}</span>`;
            // clang-format on
        };
        // Split the address string into multiple spans. Each span is connected to
        // 0 or more matches. This allows highlighting the corresponding grid rows
        // when hovering over a span. And vice versa finding the corresponding
        // spans to highlight when hovering over a grid line.
        const spans = [];
        const matchIndices = new Set([0, this.#address.length]);
        for (const match of this.#matches) {
            matchIndices.add(match.startIndex);
            matchIndices.add(match.endIndex);
        }
        const sortedMatchIndices = Array.from(matchIndices).sort((a, b) => a - b);
        for (let i = 0; i < sortedMatchIndices.length - 1; i++) {
            spans.push(createSpan(sortedMatchIndices[i], sortedMatchIndices[i + 1]));
        }
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <div class="address">
        ${spans}
      </div>
    `;
    }
    #onSpanMouseEnter(startIndex) {
        this.#highlightedMatches =
            this.#matches.filter(match => match.startIndex <= startIndex && match.endIndex > startIndex);
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#renderBound);
    }
    #onSpanMouseLeave() {
        this.#highlightedMatches = [];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#renderBound);
    }
    #renderFilledFields() {
        if (!this.#filledFields.length) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing;
        }
        const gridData = {
            columns: [
                {
                    id: 'name',
                    title: i18nString(UIStrings.formField),
                    widthWeighting: 50,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'autofill-type',
                    title: i18nString(UIStrings.predictedAutofillValue),
                    widthWeighting: 50,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'value',
                    title: i18nString(UIStrings.value),
                    widthWeighting: 50,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'filled-field-index',
                    title: 'filledFieldIndex',
                    widthWeighting: 50,
                    hideable: true,
                    visible: false,
                },
            ],
            rows: this.#buildReportRows(),
            striped: true,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      <div class="grid-wrapper" role="region" aria-label=${i18nString(UIStrings.formInspector)}>
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController.litTagName}
          @rowmouseenter=${this.#onGridRowMouseEnter}
          @rowmouseleave=${this.#onGridRowMouseLeave}
          class="filled-fields-grid"
          .data=${gridData}
        >
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController.litTagName}>
      </div>
    `;
        // clang-format on
    }
    #onGridRowMouseEnter(event) {
        const rowIndex = event.data.row.cells[3].value;
        if (typeof rowIndex !== 'number') {
            return;
        }
        this.#highlightedMatches = this.#matches.filter(match => match.filledFieldIndex === rowIndex);
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#renderBound);
        const backendNodeId = this.#filledFields[rowIndex].fieldId;
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance()
            .getFrame(this.#filledFields[rowIndex].frameId)
            ?.resourceTreeModel()
            .target();
        if (target) {
            const deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(target, backendNodeId);
            const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel);
            if (deferredNode && domModel) {
                domModel.overlayModel().highlightInOverlay({ deferredNode }, 'all');
            }
        }
    }
    #onGridRowMouseLeave() {
        this.#highlightedMatches = [];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_6__.ScheduledRender.scheduleRender(this, this.#renderBound);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
    }
    #buildReportRows() {
        const highlightedGridRows = new Set(this.#highlightedMatches.map(match => match.filledFieldIndex));
        return this.#filledFields.map((field, index) => {
            const fieldName = field.name || `#${field.id}`;
            return {
                cells: [
                    { columnId: 'name', value: `${fieldName} (${field.htmlType})` },
                    {
                        columnId: 'autofill-type',
                        value: field.autofillType,
                        renderer: () => this.#autofillTypeRenderer(field.autofillType, field.fillingStrategy),
                    },
                    { columnId: 'value', value: `"${field.value}"` },
                    { columnId: 'filled-field-index', value: index },
                ],
                styles: {
                    'font-family': 'var(--monospace-font-family)',
                    'font-size': 'var(--monospace-font-size)',
                    ...(highlightedGridRows.has(index) && { 'background-color': 'var(--sys-color-state-hover-on-subtle)' }),
                },
            };
        });
    }
    #autofillTypeRenderer(autofillType, fillingStrategy) {
        const adornerContent = document.createElement('span');
        let adornerTitle = '';
        switch (fillingStrategy) {
            case "autocompleteAttribute" /* Protocol.Autofill.FillingStrategy.AutocompleteAttribute */:
                adornerContent.textContent = i18nString(UIStrings.attr);
                adornerTitle = i18nString(UIStrings.autocompleteAttribute);
                break;
            case "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */:
                adornerContent.textContent = i18nString(UIStrings.heur);
                adornerTitle = i18nString(UIStrings.inferredByHeuristics);
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
      ${autofillType}
      ${adornerContent.textContent ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.html `
          <${_ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_4__.Adorner.Adorner.litTagName} title=${adornerTitle} .data=${{ name: fillingStrategy, content: adornerContent }}>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_9__.nothing}
    `;
        // clang-format on
    }
}
customElements.define('devtools-autofill-view', AutofillView);
//# sourceMappingURL=AutofillView.js.map

/***/ }),

/***/ "./panels/autofill/autofillView.css.js":
/*!*********************************************!*\
  !*** ./panels/autofill/autofillView.css.js ***!
  \*********************************************/
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
 * Copyright (c) 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

main {
  height: 100%;
}

.placeholder-container {
  height: calc(100% - 29px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder {
  font-size: 15px;
  text-align: center;
}

.address {
  padding: 10px;
  margin-right: auto;
}

.filled-fields-grid {
  border-top: 1px solid var(--sys-color-divider);
  box-sizing: border-box;
}

.content-container {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.grid-wrapper {
  flex-grow: 1;
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.right-to-left {
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: flex-end;
}

.label-container {
  padding: 5px 5px 0;
  display: flex;
  align-items: flex-start;
}

.top-right-corner {
  display: flex;
  justify-content: flex-end;
  padding: 5px;
}

.matches-filled-field {
  background-color: var(--sys-color-tonal-container);
}

.highlighted {
  background-color: var(--sys-color-state-focus-select);
}

.link {
  color: var(--sys-color-primary);
  text-decoration-line: underline;
}

.feedback {
  margin: 1.5px 3px 0 5px;
}

/*# sourceURL=autofillView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);