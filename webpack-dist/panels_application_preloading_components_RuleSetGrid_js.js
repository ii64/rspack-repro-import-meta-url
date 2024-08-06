"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_preloading_components_RuleSetGrid_js"],{

/***/ "./panels/application/preloading/components/RuleSetGrid.js":
/*!*****************************************************************!*\
  !*** ./panels/application/preloading/components/RuleSetGrid.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleSetGrid: () => (/* binding */ RuleSetGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _network_forward_forward_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helper/helper.js */ "./panels/application/preloading/helper/helper.js");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PreloadingString.js */ "./panels/application/preloading/components/PreloadingString.js");
/* harmony import */ var _ruleSetGrid_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ruleSetGrid.css.js */ "./panels/application/preloading/components/ruleSetGrid.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













const UIStrings = {
    /**
     *@description Column header: Short URL of rule set.
     */
    ruleSet: 'Rule set',
    /**
     *@description Column header: Show how many preloads are associated if valid, error counts if invalid.
     */
    status: 'Status',
    /**
     *@description button: Title of button to reveal the corresponding request of rule set in Elements panel
     */
    buttonClickToRevealInElementsPanel: 'Click to reveal in Elements panel',
    /**
     *@description button: Title of button to reveal the corresponding request of rule set in Network panel
     */
    buttonClickToRevealInNetworkPanel: 'Click to reveal in Network panel',
    /**
     *@description Value of status, specifying rule set contains how many errors.
     */
    errors: '{errorCount, plural, =1 {# error} other {# errors}}',
    /**
     *@description button: Title of button to reveal preloading attempts with filter by selected rule set
     */
    buttonRevealPreloadsAssociatedWithRuleSet: 'Reveal speculative loads associated with this rule set',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/preloading/components/RuleSetGrid.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
// Grid component to show SpeculationRules rule sets.
class RuleSetGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal `devtools-resources-ruleset-grid`;
    #shadow = this.attachShadow({ mode: 'open' });
    #data = null;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_ruleSetGrid_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]];
        this.#render();
    }
    update(data) {
        this.#data = data;
        this.#render();
    }
    #render() {
        if (this.#data === null) {
            return;
        }
        const reportsGridData = {
            columns: [
                {
                    id: 'rule-set',
                    title: i18nString(UIStrings.ruleSet),
                    widthWeighting: 20,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
                {
                    id: 'status',
                    title: i18nString(UIStrings.status),
                    widthWeighting: 80,
                    hideable: false,
                    visible: true,
                    sortable: true,
                },
            ],
            rows: this.#buildReportRows(),
            striped: true,
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <div class="ruleset-container"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('preloading-rules')}>
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGridController.DataGridController.litTagName}>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
    #buildReportRows() {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(this.#data);
        const pageURL = this.#data.pageURL;
        return this.#data.rows.map(row => ({
            cells: [
                { columnId: 'id', value: row.ruleSet.id },
                {
                    columnId: 'rule-set',
                    value: '',
                    renderer: () => ruleSetRenderer(row.ruleSet, pageURL),
                },
                {
                    columnId: 'status',
                    value: row.preloadsStatusSummary,
                    renderer: preloadsStatusSummary => statusRenderer(preloadsStatusSummary, row.ruleSet),
                },
            ],
        }));
    }
}
customElements.define('devtools-resources-ruleset-grid', RuleSetGrid);
function ruleSetRenderer(ruleSet, pageURL) {
    function ruleSetRendererInnerDocument(ruleSet, location) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.backendNodeId);
        const revealSpeculationRulesInElements = async () => {
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.backendNodeId);
            const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().scopeTarget();
            if (target === null) {
                return;
            }
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DeferredDOMNode(target, ruleSet.backendNodeId));
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <button class="link" role="link"
        @click=${revealSpeculationRulesInElements}
        title=${i18nString(UIStrings.buttonClickToRevealInElementsPanel)}
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            border: 'none',
            background: 'none',
            color: 'var(--icon-link)',
            cursor: 'pointer',
            'text-decoration': 'underline',
            'padding-inline-start': '0',
            'padding-inline-end': '0',
        })}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('reveal-in-elements').track({ click: true })}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
          .data=${{
            iconName: 'code-circle',
            color: 'var(--icon-link)',
            width: '16px',
            height: '16px',
        }}
          style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            'vertical-align': 'sub',
        })}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
        ${location}
      </button>
    `;
        // clang-format on
    }
    function ruleSetRendererOutOfDocument(ruleSet, location) {
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.url);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.requestId);
        const revealSpeculationRulesInNetwork = async () => {
            (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(ruleSet.requestId);
            const request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance()
                .scopeTarget()
                ?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkManager.NetworkManager)
                ?.requestForId(ruleSet.requestId) ||
                null;
            if (request === null) {
                return;
            }
            const requestLocation = _network_forward_forward_js__WEBPACK_IMPORTED_MODULE_9__.UIRequestLocation.UIRequestLocation.tab(request, "preview" /* NetworkForward.UIRequestLocation.UIRequestTabs.Preview */, { clearFilter: false });
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <button class="link" role="link"
        @click=${revealSpeculationRulesInNetwork}
        title=${i18nString(UIStrings.buttonClickToRevealInNetworkPanel)}
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            border: 'none',
            background: 'none',
            color: 'var(--icon-link)',
            cursor: 'pointer',
            'text-decoration': 'underline',
            'padding-inline-start': '0',
            'padding-inline-end': '0',
        })}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}
         .data=${{
            iconName: 'arrow-up-down-circle',
            color: 'var(--icon-link)',
            width: '16px',
            height: '16px',
        }}
          style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            'vertical-align': 'sub',
        })}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName}>
        ${location}
      </button>
    `;
        // clang-format on
    }
    const location = _PreloadingString_js__WEBPACK_IMPORTED_MODULE_11__.ruleSetLocationShort(ruleSet, pageURL);
    if (ruleSet.backendNodeId !== undefined) {
        return ruleSetRendererInnerDocument(ruleSet, location);
    }
    if (ruleSet.url !== undefined && ruleSet.requestId) {
        return ruleSetRendererOutOfDocument(ruleSet, location);
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `${location}`;
}
function statusRenderer(preloadsStatusSummary, ruleSet) {
    function counts(preloadsStatusSummary, ruleSet) {
        const revealAttemptViewWithFilter = async () => {
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_10__.PreloadingForward.AttemptViewWithFilter(ruleSet.id));
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <button class="link" role="link"
        @click=${revealAttemptViewWithFilter}
        title=${i18nString(UIStrings.buttonRevealPreloadsAssociatedWithRuleSet)}
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            color: 'var(--sys-color-primary)',
            'text-decoration': 'underline',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            'padding-inline-start': '0',
            'padding-inline-end': '0',
        })}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('reveal-preloads').track({ click: true })}>
        ${preloadsStatusSummary}
      </button>
    `;
        // clang-format on
    }
    function errors() {
        const nErrors = i18nString(UIStrings.errors, { errorCount: 1 });
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `
      <span
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.styleMap({
            color: 'var(--sys-color-error)',
        })}
      >
        ${nErrors}
      </span>
    `;
    }
    switch (ruleSet.errorType) {
        case undefined:
            return counts(preloadsStatusSummary, ruleSet);
        case "SourceIsNotJsonObject" /* Protocol.Preload.RuleSetErrorType.SourceIsNotJsonObject */:
            return errors();
        case "InvalidRulesSkipped" /* Protocol.Preload.RuleSetErrorType.InvalidRulesSkipped */:
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html `${errors()} ${counts(preloadsStatusSummary, ruleSet)}`;
    }
}
//# sourceMappingURL=RuleSetGrid.js.map

/***/ }),

/***/ "./panels/application/preloading/components/ruleSetGrid.css.js":
/*!*********************************************************************!*\
  !*** ./panels/application/preloading/components/ruleSetGrid.css.js ***!
  \*********************************************************************/
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

:host {
  overflow: auto;
  height: 100%;
}

.ruleset-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}

devtools-data-grid-controller {
  border: 1px solid var(--sys-color-divider);
}

.inline-icon {
  vertical-align: text-bottom;
}

/*# sourceURL=ruleSetGrid.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);