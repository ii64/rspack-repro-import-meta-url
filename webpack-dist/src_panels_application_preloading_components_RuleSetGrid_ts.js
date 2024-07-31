"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_preloading_components_RuleSetGrid_ts"],{

/***/ "./src/panels/application/preloading/components/RuleSetGrid.ts":
/*!*********************************************************************!*\
  !*** ./src/panels/application/preloading/components/RuleSetGrid.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RuleSetGrid: () => (/* binding */ RuleSetGrid),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _network_forward_forward_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helper/helper.js */ "./src/panels/application/preloading/helper/helper.ts");
/* harmony import */ var _PreloadingString_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PreloadingString.js */ "./src/panels/application/preloading/components/PreloadingString.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './ruleSetGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _RuleSetGrid_instances, _RuleSetGrid_shadow, _RuleSetGrid_data, _RuleSetGrid_render, _RuleSetGrid_buildReportRows;














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
class RuleSetGrid extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_7__.LegacyWrapper.WrappableComponent {
    constructor() {
        super(...arguments);
        _RuleSetGrid_instances.add(this);
        _RuleSetGrid_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RuleSetGrid_data.set(this, null);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RuleSetGrid_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './ruleSetGrid.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _RuleSetGrid_instances, "m", _RuleSetGrid_render).call(this);
    }
    update(data) {
        __classPrivateFieldSet(this, _RuleSetGrid_data, data, "f");
        __classPrivateFieldGet(this, _RuleSetGrid_instances, "m", _RuleSetGrid_render).call(this);
    }
}
_RuleSetGrid_shadow = new WeakMap(), _RuleSetGrid_data = new WeakMap(), _RuleSetGrid_instances = new WeakSet(), _RuleSetGrid_render = function _RuleSetGrid_render() {
    if (__classPrivateFieldGet(this, _RuleSetGrid_data, "f") === null) {
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
        rows: __classPrivateFieldGet(this, _RuleSetGrid_instances, "m", _RuleSetGrid_buildReportRows).call(this),
        striped: true,
    };
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <div class="ruleset-container"
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.pane('preloading-rules')}>
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController.litTagName} .data=${reportsGridData}>
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_5__.DataGridController.DataGridController.litTagName}>
      </div>
    `, __classPrivateFieldGet(this, _RuleSetGrid_shadow, "f"), { host: this });
    // clang-format on
}, _RuleSetGrid_buildReportRows = function _RuleSetGrid_buildReportRows() {
    (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.assertNotNullOrUndefined)(__classPrivateFieldGet(this, _RuleSetGrid_data, "f"));
    const pageURL = __classPrivateFieldGet(this, _RuleSetGrid_data, "f").pageURL;
    return __classPrivateFieldGet(this, _RuleSetGrid_data, "f").rows.map(row => ({
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
};
Object.defineProperty(RuleSetGrid, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.literal `devtools-resources-ruleset-grid`
});
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
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <button class="link" role="link"
        @click=${revealSpeculationRulesInElements}
        title=${i18nString(UIStrings.buttonClickToRevealInElementsPanel)}
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.styleMap({
            border: 'none',
            background: 'none',
            color: 'var(--icon-link)',
            cursor: 'pointer',
            'text-decoration': 'underline',
            'padding-inline-start': '0',
            'padding-inline-end': '0',
        })}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('reveal-in-elements').track({ click: true })}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}
          .data=${{
            iconName: 'code-circle',
            color: 'var(--icon-link)',
            width: '16px',
            height: '16px',
        }}
          style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.styleMap({
            'vertical-align': 'sub',
        })}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
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
            const requestLocation = _network_forward_forward_js__WEBPACK_IMPORTED_MODULE_10__.UIRequestLocation.UIRequestLocation.tab(request, _network_forward_forward_js__WEBPACK_IMPORTED_MODULE_10__.UIRequestLocation.UIRequestTabs.Preview, { clearFilter: false });
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <button class="link" role="link"
        @click=${revealSpeculationRulesInNetwork}
        title=${i18nString(UIStrings.buttonClickToRevealInNetworkPanel)}
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.styleMap({
            border: 'none',
            background: 'none',
            color: 'var(--icon-link)',
            cursor: 'pointer',
            'text-decoration': 'underline',
            'padding-inline-start': '0',
            'padding-inline-end': '0',
        })}
      >
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}
         .data=${{
            iconName: 'arrow-up-down-circle',
            color: 'var(--icon-link)',
            width: '16px',
            height: '16px',
        }}
          style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.styleMap({
            'vertical-align': 'sub',
        })}
        >
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName}>
        ${location}
      </button>
    `;
        // clang-format on
    }
    const location = _PreloadingString_js__WEBPACK_IMPORTED_MODULE_12__.ruleSetLocationShort(ruleSet, pageURL);
    if (ruleSet.backendNodeId !== undefined) {
        return ruleSetRendererInnerDocument(ruleSet, location);
    }
    if (ruleSet.url !== undefined && ruleSet.requestId) {
        return ruleSetRendererOutOfDocument(ruleSet, location);
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `${location}`;
}
function statusRenderer(preloadsStatusSummary, ruleSet) {
    function counts(preloadsStatusSummary, ruleSet) {
        const revealAttemptViewWithFilter = async () => {
            await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(new _helper_helper_js__WEBPACK_IMPORTED_MODULE_11__.PreloadingForward.AttemptViewWithFilter(ruleSet.id));
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <button class="link" role="link"
        @click=${revealAttemptViewWithFilter}
        title=${i18nString(UIStrings.buttonRevealPreloadsAssociatedWithRuleSet)}
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.styleMap({
            color: 'var(--sys-color-primary)',
            'text-decoration': 'underline',
            cursor: 'pointer',
            border: 'none',
            background: 'none',
            'padding-inline-start': '0',
            'padding-inline-end': '0',
        })}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.action('reveal-preloads').track({ click: true })}>
        ${preloadsStatusSummary}
      </button>
    `;
        // clang-format on
    }
    function errors() {
        const nErrors = i18nString(UIStrings.errors, { errorCount: 1 });
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `
      <span
        style=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.Directives.styleMap({
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
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.RuleSetErrorType.SourceIsNotJsonObject:
            return errors();
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Preload.RuleSetErrorType.InvalidRulesSkipped:
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_8__.html `${errors()} ${counts(preloadsStatusSummary, ruleSet)}`;
    }
}


/***/ })

}]);