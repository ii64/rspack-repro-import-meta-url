"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_autofill_AutofillView_ts"],{

/***/ "./src/panels/autofill/AutofillView.ts":
/*!*********************************************!*\
  !*** ./src/panels/autofill/AutofillView.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutofillView: () => (/* binding */ AutofillView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/autofill_manager/autofill_manager.js */ "./src/models/autofill_manager/autofill_manager.ts");
/* harmony import */ var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./src/ui/components/adorners/adorners.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './autofillView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _AutofillView_instances, _AutofillView_shadow, _AutofillView_renderBound, _AutofillView_autoOpenViewSetting, _AutofillView_address, _AutofillView_filledFields, _AutofillView_matches, _AutofillView_highlightedMatches, _AutofillView_onPrimaryPageChanged, _AutofillView_onAddressFormFilled, _AutofillView_render, _AutofillView_onAutoOpenCheckboxChanged, _AutofillView_renderAddress, _AutofillView_onSpanMouseEnter, _AutofillView_onSpanMouseLeave, _AutofillView_renderFilledFields, _AutofillView_onGridRowMouseEnter, _AutofillView_onGridRowMouseLeave, _AutofillView_buildReportRows, _AutofillView_autofillTypeRenderer;













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
class AutofillView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_9__.LegacyWrapper.WrappableComponent {
    constructor() {
        super();
        _AutofillView_instances.add(this);
        _AutofillView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _AutofillView_renderBound.set(this, __classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_render).bind(this));
        _AutofillView_autoOpenViewSetting.set(this, void 0);
        _AutofillView_address.set(this, '');
        _AutofillView_filledFields.set(this, []);
        _AutofillView_matches.set(this, []);
        _AutofillView_highlightedMatches.set(this, []);
        __classPrivateFieldSet(this, _AutofillView_autoOpenViewSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('auto-open-autofill-view-on-event', true), "f");
    }
    connectedCallback() {
        var _a, _b, _c;
        __classPrivateFieldGet(this, _AutofillView_shadow, "f").adoptedStyleSheets = [_ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_8__.checkboxStyles, Object(function webpackMissingModule() { var e = new Error("Cannot find module './autofillView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        const autofillManager = _models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_4__.AutofillManager.AutofillManager.instance();
        const formFilledEvent = autofillManager.getLastFilledAddressForm();
        if (formFilledEvent) {
            (_a = this, _b = this, _c = this, {
                address: ({ set value(_d) { __classPrivateFieldSet(_a, _AutofillView_address, _d, "f"); } }).value,
                filledFields: ({ set value(_d) { __classPrivateFieldSet(_b, _AutofillView_filledFields, _d, "f"); } }).value,
                matches: ({ set value(_d) { __classPrivateFieldSet(_c, _AutofillView_matches, _d, "f"); } }).value,
            } = formFilledEvent);
        }
        autofillManager.addEventListener(_models_autofill_manager_autofill_manager_js__WEBPACK_IMPORTED_MODULE_4__.AutofillManager.Events.AddressFormFilled, __classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onAddressFormFilled), this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.Events.PrimaryPageChanged, __classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onPrimaryPageChanged), this);
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _AutofillView_renderBound, "f"));
    }
}
_AutofillView_shadow = new WeakMap(), _AutofillView_renderBound = new WeakMap(), _AutofillView_autoOpenViewSetting = new WeakMap(), _AutofillView_address = new WeakMap(), _AutofillView_filledFields = new WeakMap(), _AutofillView_matches = new WeakMap(), _AutofillView_highlightedMatches = new WeakMap(), _AutofillView_instances = new WeakSet(), _AutofillView_onPrimaryPageChanged = function _AutofillView_onPrimaryPageChanged() {
    __classPrivateFieldSet(this, _AutofillView_address, '', "f");
    __classPrivateFieldSet(this, _AutofillView_filledFields, [], "f");
    __classPrivateFieldSet(this, _AutofillView_matches, [], "f");
    __classPrivateFieldSet(this, _AutofillView_highlightedMatches, [], "f");
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _AutofillView_renderBound, "f"));
}, _AutofillView_onAddressFormFilled = function _AutofillView_onAddressFormFilled({ data }) {
    var _a, _b, _c;
    (_a = this, _b = this, _c = this, {
        address: ({ set value(_d) { __classPrivateFieldSet(_a, _AutofillView_address, _d, "f"); } }).value,
        filledFields: ({ set value(_d) { __classPrivateFieldSet(_b, _AutofillView_filledFields, _d, "f"); } }).value,
        matches: ({ set value(_d) { __classPrivateFieldSet(_c, _AutofillView_matches, _d, "f"); } }).value,
    } = data);
    __classPrivateFieldSet(this, _AutofillView_highlightedMatches, [], "f");
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _AutofillView_renderBound, "f"));
}, _AutofillView_render = async function _AutofillView_render() {
    if (!_ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('AutofillView render was not scheduled');
    }
    if (!__classPrivateFieldGet(this, _AutofillView_address, "f") && !__classPrivateFieldGet(this, _AutofillView_filledFields, "f").length) {
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
        <main>
          <div class="top-right-corner">
            <label class="checkbox-label" title=${i18nString(UIStrings.autoShowTooltip)}>
              <input
                type="checkbox"
                ?checked=${__classPrivateFieldGet(this, _AutofillView_autoOpenViewSetting, "f").get()}
                @change=${__classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onAutoOpenCheckboxChanged).bind(this)}
                jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toggle(__classPrivateFieldGet(this, _AutofillView_autoOpenViewSetting, "f").name).track({ change: true })}
              >
              <span>${i18nString(UIStrings.autoShow)}</span>
            </label>
            <x-link href=${AUTOFILL_FEEDBACK_URL} class="feedback link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('feedback').track({ click: true })}>${i18nString(UIStrings.sendFeedback)}</x-link>
          </div>
          <div class="placeholder-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane('autofill-empty')}>
            <div class="placeholder">
              <div>${i18nString(UIStrings.toStartDebugging)}</div>
              <x-link href=${AUTOFILL_INFO_URL} class="link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({ click: true })}>${i18nString(UIStrings.learnMore)}</x-link>
            </div>
          </div>
        </main>
      `, __classPrivateFieldGet(this, _AutofillView_shadow, "f"), { host: this });
        // clang-format on
        return;
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <main>
        <div class="content-container" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane('autofill')}>
          <div class="right-to-left" role="region" aria-label=${i18nString(UIStrings.addressPreview)}>
            <div class="label-container">
              <label class="checkbox-label" title=${i18nString(UIStrings.autoShowTooltip)}>
                <input
                  type="checkbox"
                  ?checked=${__classPrivateFieldGet(this, _AutofillView_autoOpenViewSetting, "f").get()}
                  @change=${__classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onAutoOpenCheckboxChanged).bind(this)}
                  jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toggle(__classPrivateFieldGet(this, _AutofillView_autoOpenViewSetting, "f").name).track({ change: true })}
                >
                <span>${i18nString(UIStrings.autoShow)}</span>
              </label>
              <x-link href=${AUTOFILL_FEEDBACK_URL} class="feedback link" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('feedback').track({ click: true })}>${i18nString(UIStrings.sendFeedback)}</x-link>
            </div>
            ${__classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_renderAddress).call(this)}
          </div>
          ${__classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_renderFilledFields).call(this)}
        </div>
      </main>
    `, __classPrivateFieldGet(this, _AutofillView_shadow, "f"), { host: this });
    // clang-format on
}, _AutofillView_onAutoOpenCheckboxChanged = function _AutofillView_onAutoOpenCheckboxChanged(e) {
    const { checked } = e.target;
    __classPrivateFieldGet(this, _AutofillView_autoOpenViewSetting, "f").set(checked);
}, _AutofillView_renderAddress = function _AutofillView_renderAddress() {
    if (!__classPrivateFieldGet(this, _AutofillView_address, "f")) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
    }
    const createSpan = (startIndex, endIndex) => {
        const textContentLines = __classPrivateFieldGet(this, _AutofillView_address, "f").substring(startIndex, endIndex).split('\n');
        const templateLines = textContentLines.map((line, i) => i === textContentLines.length - 1 ? line : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `${line}<br>`);
        const hasMatches = __classPrivateFieldGet(this, _AutofillView_matches, "f").some(match => match.startIndex <= startIndex && match.endIndex > startIndex);
        if (!hasMatches) {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `<span>${templateLines}</span>`;
        }
        const spanClasses = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.Directives.classMap({
            'matches-filled-field': hasMatches,
            highlighted: __classPrivateFieldGet(this, _AutofillView_highlightedMatches, "f").some(match => match.startIndex <= startIndex && match.endIndex > startIndex),
        });
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
        <span
          class=${spanClasses}
          @mouseenter=${() => __classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onSpanMouseEnter).call(this, startIndex)}
          @mouseleave=${__classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onSpanMouseLeave)}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.item('matched-address-item').track({ hover: true })}
        >${templateLines}</span>`;
        // clang-format on
    };
    // Split the address string into multiple spans. Each span is connected to
    // 0 or more matches. This allows highlighting the corresponding grid rows
    // when hovering over a span. And vice versa finding the corresponding
    // spans to highlight when hovering over a grid line.
    const spans = [];
    const matchIndices = new Set([0, __classPrivateFieldGet(this, _AutofillView_address, "f").length]);
    for (const match of __classPrivateFieldGet(this, _AutofillView_matches, "f")) {
        matchIndices.add(match.startIndex);
        matchIndices.add(match.endIndex);
    }
    const sortedMatchIndices = Array.from(matchIndices).sort((a, b) => a - b);
    for (let i = 0; i < sortedMatchIndices.length - 1; i++) {
        spans.push(createSpan(sortedMatchIndices[i], sortedMatchIndices[i + 1]));
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <div class="address">
        ${spans}
      </div>
    `;
}, _AutofillView_onSpanMouseEnter = function _AutofillView_onSpanMouseEnter(startIndex) {
    __classPrivateFieldSet(this, _AutofillView_highlightedMatches, __classPrivateFieldGet(this, _AutofillView_matches, "f").filter(match => match.startIndex <= startIndex && match.endIndex > startIndex), "f");
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _AutofillView_renderBound, "f"));
}, _AutofillView_onSpanMouseLeave = function _AutofillView_onSpanMouseLeave() {
    __classPrivateFieldSet(this, _AutofillView_highlightedMatches, [], "f");
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _AutofillView_renderBound, "f"));
}, _AutofillView_renderFilledFields = function _AutofillView_renderFilledFields() {
    if (!__classPrivateFieldGet(this, _AutofillView_filledFields, "f").length) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
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
        rows: __classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_buildReportRows).call(this),
        striped: true,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      <div class="grid-wrapper" role="region" aria-label=${i18nString(UIStrings.formInspector)}>
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGridController.DataGridController.litTagName}
          @rowmouseenter=${__classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onGridRowMouseEnter)}
          @rowmouseleave=${__classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_onGridRowMouseLeave)}
          class="filled-fields-grid"
          .data=${gridData}
        >
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGridController.DataGridController.litTagName}>
      </div>
    `;
    // clang-format on
}, _AutofillView_onGridRowMouseEnter = function _AutofillView_onGridRowMouseEnter(event) {
    const rowIndex = event.data.row.cells[3].value;
    if (typeof rowIndex !== 'number') {
        return;
    }
    __classPrivateFieldSet(this, _AutofillView_highlightedMatches, __classPrivateFieldGet(this, _AutofillView_matches, "f").filter(match => match.filledFieldIndex === rowIndex), "f");
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _AutofillView_renderBound, "f"));
    const backendNodeId = __classPrivateFieldGet(this, _AutofillView_filledFields, "f")[rowIndex].fieldId;
    const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance()
        .getFrame(__classPrivateFieldGet(this, _AutofillView_filledFields, "f")[rowIndex].frameId)
        ?.resourceTreeModel()
        .target();
    if (target) {
        const deferredNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DeferredDOMNode(target, backendNodeId);
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel);
        if (deferredNode && domModel) {
            domModel.overlayModel().highlightInOverlay({ deferredNode }, 'all');
        }
    }
}, _AutofillView_onGridRowMouseLeave = function _AutofillView_onGridRowMouseLeave() {
    __classPrivateFieldSet(this, _AutofillView_highlightedMatches, [], "f");
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_7__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _AutofillView_renderBound, "f"));
    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
}, _AutofillView_buildReportRows = function _AutofillView_buildReportRows() {
    const highlightedGridRows = new Set(__classPrivateFieldGet(this, _AutofillView_highlightedMatches, "f").map(match => match.filledFieldIndex));
    return __classPrivateFieldGet(this, _AutofillView_filledFields, "f").map((field, index) => {
        const fieldName = field.name || `#${field.id}`;
        return {
            cells: [
                { columnId: 'name', value: `${fieldName} (${field.htmlType})` },
                {
                    columnId: 'autofill-type',
                    value: field.autofillType,
                    renderer: () => __classPrivateFieldGet(this, _AutofillView_instances, "m", _AutofillView_autofillTypeRenderer).call(this, field.autofillType, field.fillingStrategy),
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
}, _AutofillView_autofillTypeRenderer = function _AutofillView_autofillTypeRenderer(autofillType, fillingStrategy) {
    const adornerContent = document.createElement('span');
    let adornerTitle = '';
    switch (fillingStrategy) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Autofill.FillingStrategy.AutocompleteAttribute:
            adornerContent.textContent = i18nString(UIStrings.attr);
            adornerTitle = i18nString(UIStrings.autocompleteAttribute);
            break;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_3__.Autofill.FillingStrategy.AutofillInferred:
            adornerContent.textContent = i18nString(UIStrings.heur);
            adornerTitle = i18nString(UIStrings.inferredByHeuristics);
    }
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
      ${autofillType}
      ${adornerContent.textContent ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html `
          <${_ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_5__.Adorner.Adorner.litTagName} title=${adornerTitle} .data=${{ name: fillingStrategy, content: adornerContent }}>
        ` : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing}
    `;
    // clang-format on
};
Object.defineProperty(AutofillView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal `devtools-autofill-view`
});
customElements.define('devtools-autofill-view', AutofillView);


/***/ })

}]);