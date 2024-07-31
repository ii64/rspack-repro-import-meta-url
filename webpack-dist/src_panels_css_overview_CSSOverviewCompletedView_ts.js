"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_CSSOverviewCompletedView_ts"],{

/***/ "./src/panels/css_overview/CSSOverviewCompletedView.ts":
/*!*************************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewCompletedView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewCompletedView: () => (/* binding */ CSSOverviewCompletedView),
/* harmony export */   DetailsView: () => (/* binding */ DetailsView),
/* harmony export */   ElementDetailsView: () => (/* binding */ ElementDetailsView),
/* harmony export */   ElementNode: () => (/* binding */ ElementNode),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewCompletedView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CSSOverviewController.js */ "./src/panels/css_overview/CSSOverviewController.ts");
/* harmony import */ var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./src/panels/css_overview/CSSOverviewSidebarPanel.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
var _CSSOverviewCompletedView_instances, _a, _CSSOverviewCompletedView_splitWidget, _CSSOverviewCompletedView_controller, _CSSOverviewCompletedView_formatter, _CSSOverviewCompletedView_mainContainer, _CSSOverviewCompletedView_resultsContainer, _CSSOverviewCompletedView_elementContainer, _CSSOverviewCompletedView_sideBar, _CSSOverviewCompletedView_cssModel, _CSSOverviewCompletedView_domModel, _CSSOverviewCompletedView_linkifier, _CSSOverviewCompletedView_viewMap, _CSSOverviewCompletedView_data, _CSSOverviewCompletedView_fragment, _CSSOverviewCompletedView_sideBarItemSelected, _CSSOverviewCompletedView_sideBarReset, _CSSOverviewCompletedView_reset, _CSSOverviewCompletedView_onClick, _CSSOverviewCompletedView_render, _CSSOverviewCompletedView_createElementsView, _CSSOverviewCompletedView_fontInfoToFragment, _CSSOverviewCompletedView_fontMetricsToFragment, _CSSOverviewCompletedView_groupToFragment, _CSSOverviewCompletedView_contrastIssuesToFragment, _CSSOverviewCompletedView_contrastIssueToFragment, _CSSOverviewCompletedView_colorsToFragment, _CSSOverviewCompletedView_sortColorsByLuminance, _DetailsView_tabbedPane, _ElementDetailsView_instances, _ElementDetailsView_controller, _ElementDetailsView_domModel, _ElementDetailsView_cssModel, _ElementDetailsView_linkifier, _ElementDetailsView_elementGridColumns, _ElementDetailsView_elementGrid, _ElementDetailsView_sortMediaQueryDataGrid, _ElementDetailsView_onMouseOver, _ElementNode_instances, _ElementNode_linkifier, _ElementNode_cssModel, _ElementNode_frontendNode, _ElementNode_linkifyRuleLocation;














const UIStrings = {
    /**
     *@description Label for the summary in the CSS overview report
     */
    overviewSummary: 'Overview summary',
    /**
     *@description Title of colors subsection in the CSS overview panel
     */
    colors: 'Colors',
    /**
     *@description Title of font info subsection in the CSS overview panel
     */
    fontInfo: 'Font info',
    /**
     *@description Label to denote unused declarations in the target page
     */
    unusedDeclarations: 'Unused declarations',
    /**
     *@description Label for the number of media queries in the CSS overview report
     */
    mediaQueries: 'Media queries',
    /**
     *@description Title of the Elements Panel
     */
    elements: 'Elements',
    /**
     *@description Label for the number of External stylesheets in the CSS overview report
     */
    externalStylesheets: 'External stylesheets',
    /**
     *@description Label for the number of inline style elements in the CSS overview report
     */
    inlineStyleElements: 'Inline style elements',
    /**
     *@description Label for the number of style rules in CSS overview report
     */
    styleRules: 'Style rules',
    /**
     *@description Label for the number of type selectors in the CSS overview report
     */
    typeSelectors: 'Type selectors',
    /**
     *@description Label for the number of ID selectors in the CSS overview report
     */
    idSelectors: 'ID selectors',
    /**
     *@description Label for the number of class selectors in the CSS overview report
     */
    classSelectors: 'Class selectors',
    /**
     *@description Label for the number of universal selectors in the CSS overview report
     */
    universalSelectors: 'Universal selectors',
    /**
     *@description Label for the number of Attribute selectors in the CSS overview report
     */
    attributeSelectors: 'Attribute selectors',
    /**
     *@description Label for the number of non-simple selectors in the CSS overview report
     */
    nonsimpleSelectors: 'Non-simple selectors',
    /**
     *@description Label for unique background colors in the CSS overview panel
     *@example {32} PH1
     */
    backgroundColorsS: 'Background colors: {PH1}',
    /**
     *@description Label for unique text colors in the CSS overview panel
     *@example {32} PH1
     */
    textColorsS: 'Text colors: {PH1}',
    /**
     *@description Label for unique fill colors in the CSS overview panel
     *@example {32} PH1
     */
    fillColorsS: 'Fill colors: {PH1}',
    /**
     *@description Label for unique border colors in the CSS overview panel
     *@example {32} PH1
     */
    borderColorsS: 'Border colors: {PH1}',
    /**
     *@description Label to indicate that there are no fonts in use
     */
    thereAreNoFonts: 'There are no fonts.',
    /**
     *@description Message to show when no unused declarations in the target page
     */
    thereAreNoUnusedDeclarations: 'There are no unused declarations.',
    /**
     *@description Message to show when no media queries are found in the target page
     */
    thereAreNoMediaQueries: 'There are no media queries.',
    /**
     *@description Title of the Drawer for contrast issues in the CSS overview panel
     */
    contrastIssues: 'Contrast issues',
    /**
     * @description Text to indicate how many times this CSS rule showed up.
     */
    nOccurrences: '{n, plural, =1 {# occurrence} other {# occurrences}}',
    /**
     *@description Section header for contrast issues in the CSS overview panel
     *@example {1} PH1
     */
    contrastIssuesS: 'Contrast issues: {PH1}',
    /**
     *@description Title of the button for a contrast issue in the CSS overview panel
     *@example {#333333} PH1
     *@example {#333333} PH2
     *@example {2} PH3
     */
    textColorSOverSBackgroundResults: 'Text color {PH1} over {PH2} background results in low contrast for {PH3} elements',
    /**
     *@description Label aa text content in Contrast Details of the Color Picker
     */
    aa: 'AA',
    /**
     *@description Label aaa text content in Contrast Details of the Color Picker
     */
    aaa: 'AAA',
    /**
     *@description Label for the APCA contrast in Color Picker
     */
    apca: 'APCA',
    /**
     *@description Label for the column in the element list in the CSS overview report
     */
    element: 'Element',
    /**
     *@description Column header title denoting which declaration is unused
     */
    declaration: 'Declaration',
    /**
     *@description Text for the source of something
     */
    source: 'Source',
    /**
     *@description Text of a DOM element in Contrast Details of the Color Picker
     */
    contrastRatio: 'Contrast ratio',
    /**
     *@description Accessible title of a table in the CSS overview elements.
     */
    cssOverviewElements: 'CSS overview elements',
    /**
     *@description Title of the button to show the element in the CSS overview panel
     */
    showElement: 'Show element',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/css_overview/CSSOverviewCompletedView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
function getBorderString(color) {
    let { h, s, l } = color.as(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HSL);
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    // Reduce the lightness of the border to make sure that there's always a visible outline.
    l = Math.max(0, l - 15);
    return `1px solid hsl(${h}deg ${s}% ${l}%)`;
}
class CSSOverviewCompletedView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox {
    constructor(controller) {
        super();
        _CSSOverviewCompletedView_instances.add(this);
        _CSSOverviewCompletedView_splitWidget.set(this, void 0);
        _CSSOverviewCompletedView_controller.set(this, void 0);
        _CSSOverviewCompletedView_formatter.set(this, void 0);
        _CSSOverviewCompletedView_mainContainer.set(this, void 0);
        _CSSOverviewCompletedView_resultsContainer.set(this, void 0);
        _CSSOverviewCompletedView_elementContainer.set(this, void 0);
        _CSSOverviewCompletedView_sideBar.set(this, void 0);
        _CSSOverviewCompletedView_cssModel.set(this, void 0);
        _CSSOverviewCompletedView_domModel.set(this, void 0);
        _CSSOverviewCompletedView_linkifier.set(this, void 0);
        _CSSOverviewCompletedView_viewMap.set(this, void 0);
        _CSSOverviewCompletedView_data.set(this, void 0);
        _CSSOverviewCompletedView_fragment.set(this, void 0);
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_controller, controller, "f");
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_formatter, new Intl.NumberFormat('en-US'), "f");
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_splitWidget, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true, false, undefined, 200), "f");
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_splitWidget, "f").show(this.element);
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_mainContainer, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true, true), "f");
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_resultsContainer, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox(), "f");
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_elementContainer, new DetailsView(), "f");
        // If closing the last tab, collapse the sidebar.
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_elementContainer, "f").addEventListener(Events.TabClosed, evt => {
            if (evt.data === 0) {
                __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setSidebarMinimized(true);
            }
        });
        // Dupe the styles into the main container because of the shadow root will prevent outer styles.
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setMainWidget(__classPrivateFieldGet(this, _CSSOverviewCompletedView_resultsContainer, "f"));
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setSidebarWidget(__classPrivateFieldGet(this, _CSSOverviewCompletedView_elementContainer, "f"));
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setVertical(false);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setSecondIsSidebar(true);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setSidebarMinimized(true);
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_sideBar, new _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_13__.CSSOverviewSidebarPanel(), "f");
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").setMinimumSize(100, 25);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_splitWidget, "f").setSidebarWidget(__classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f"));
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_splitWidget, "f").setMainWidget(__classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f"));
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_linkifier, new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.Linkifier.Linkifier(/* maxLinkLength */ 20, /* useLinkDecorator */ true), "f");
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_viewMap, new Map(), "f");
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").addItem(i18nString(UIStrings.overviewSummary), 'summary');
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").addItem(i18nString(UIStrings.colors), 'colors');
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").addItem(i18nString(UIStrings.fontInfo), 'font-info');
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").addItem(i18nString(UIStrings.unusedDeclarations), 'unused-declarations');
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").addItem(i18nString(UIStrings.mediaQueries), 'media-queries');
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").select('summary', false);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").addEventListener(_CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_13__.SidebarEvents.ItemSelected, __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_sideBarItemSelected), this);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").addEventListener(_CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_13__.SidebarEvents.Reset, __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_sideBarReset), this);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_controller, "f").addEventListener(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_12__.Events.Reset, __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_reset), this);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_controller, "f").addEventListener(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_12__.Events.PopulateNodes, __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_createElementsView), this);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_resultsContainer, "f").element.addEventListener('click', __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_onClick).bind(this));
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_data, null, "f");
    }
    wasShown() {
        super.wasShown();
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewCompletedView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewCompletedView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        // TODO(paullewis): update the links in the panels in case source has been .
    }
    initializeModels(target) {
        const cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel);
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel);
        if (!cssModel || !domModel) {
            throw new Error('Target must provide CSS and DOM models');
        }
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_cssModel, cssModel, "f");
        __classPrivateFieldSet(this, _CSSOverviewCompletedView_domModel, domModel, "f");
    }
    setOverviewData(data) {
        void __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_render).call(this, data);
    }
}
_a = CSSOverviewCompletedView, _CSSOverviewCompletedView_splitWidget = new WeakMap(), _CSSOverviewCompletedView_controller = new WeakMap(), _CSSOverviewCompletedView_formatter = new WeakMap(), _CSSOverviewCompletedView_mainContainer = new WeakMap(), _CSSOverviewCompletedView_resultsContainer = new WeakMap(), _CSSOverviewCompletedView_elementContainer = new WeakMap(), _CSSOverviewCompletedView_sideBar = new WeakMap(), _CSSOverviewCompletedView_cssModel = new WeakMap(), _CSSOverviewCompletedView_domModel = new WeakMap(), _CSSOverviewCompletedView_linkifier = new WeakMap(), _CSSOverviewCompletedView_viewMap = new WeakMap(), _CSSOverviewCompletedView_data = new WeakMap(), _CSSOverviewCompletedView_fragment = new WeakMap(), _CSSOverviewCompletedView_instances = new WeakSet(), _CSSOverviewCompletedView_sideBarItemSelected = function _CSSOverviewCompletedView_sideBarItemSelected(event) {
    const { data } = event;
    const section = __classPrivateFieldGet(this, _CSSOverviewCompletedView_fragment, "f").$(data.id);
    if (!section) {
        return;
    }
    section.scrollIntoView();
    // Set focus for keyboard invoked event
    if (!data.isMouseEvent && data.key === 'Enter') {
        const focusableElement = section.querySelector('button, [tabindex="0"]');
        focusableElement?.focus();
    }
}, _CSSOverviewCompletedView_sideBarReset = function _CSSOverviewCompletedView_sideBarReset() {
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_controller, "f").dispatchEventToListeners(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_12__.Events.Reset);
}, _CSSOverviewCompletedView_reset = function _CSSOverviewCompletedView_reset() {
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_resultsContainer, "f").element.removeChildren();
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setSidebarMinimized(true);
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_elementContainer, "f").closeTabs();
    __classPrivateFieldSet(this, _CSSOverviewCompletedView_viewMap, new Map(), "f");
    _a.pushedNodes.clear();
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_sideBar, "f").select('summary', false);
}, _CSSOverviewCompletedView_onClick = function _CSSOverviewCompletedView_onClick(evt) {
    if (!evt.target) {
        return;
    }
    const target = evt.target;
    const dataset = target.dataset;
    const type = dataset.type;
    if (!type || !__classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f")) {
        return;
    }
    let payload;
    switch (type) {
        case 'contrast': {
            const section = dataset.section;
            const key = dataset.key;
            if (!key) {
                return;
            }
            // Remap the Set to an object that is the same shape as the unused declarations.
            const nodes = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").textColorContrastIssues.get(key) || [];
            payload = { type, key, nodes, section };
            break;
        }
        case 'color': {
            const color = dataset.color;
            const section = dataset.section;
            if (!color) {
                return;
            }
            let nodes;
            switch (section) {
                case 'text':
                    nodes = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").textColors.get(color);
                    break;
                case 'background':
                    nodes = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").backgroundColors.get(color);
                    break;
                case 'fill':
                    nodes = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").fillColors.get(color);
                    break;
                case 'border':
                    nodes = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").borderColors.get(color);
                    break;
            }
            if (!nodes) {
                return;
            }
            // Remap the Set to an object that is the same shape as the unused declarations.
            nodes = Array.from(nodes).map(nodeId => ({ nodeId }));
            payload = { type, color, nodes, section };
            break;
        }
        case 'unused-declarations': {
            const declaration = dataset.declaration;
            if (!declaration) {
                return;
            }
            const nodes = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").unusedDeclarations.get(declaration);
            if (!nodes) {
                return;
            }
            payload = { type, declaration, nodes };
            break;
        }
        case 'media-queries': {
            const text = dataset.text;
            if (!text) {
                return;
            }
            const nodes = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").mediaQueries.get(text);
            if (!nodes) {
                return;
            }
            payload = { type, text, nodes };
            break;
        }
        case 'font-info': {
            const value = dataset.value;
            if (!dataset.path) {
                return;
            }
            const [fontFamily, fontMetric] = dataset.path.split('/');
            if (!value) {
                return;
            }
            const fontFamilyInfo = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f").fontInfo.get(fontFamily);
            if (!fontFamilyInfo) {
                return;
            }
            const fontMetricInfo = fontFamilyInfo.get(fontMetric);
            if (!fontMetricInfo) {
                return;
            }
            const nodesIds = fontMetricInfo.get(value);
            if (!nodesIds) {
                return;
            }
            const nodes = nodesIds.map(nodeId => ({ nodeId }));
            const name = `${value} (${fontFamily}, ${fontMetric})`;
            payload = { type, name, nodes };
            break;
        }
        default:
            return;
    }
    evt.consume();
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_controller, "f").dispatchEventToListeners(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_12__.Events.PopulateNodes, { payload });
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_mainContainer, "f").setSidebarMinimized(false);
}, _CSSOverviewCompletedView_render = async function _CSSOverviewCompletedView_render(data) {
    if (!data || !('backgroundColors' in data) || !('textColors' in data)) {
        return;
    }
    __classPrivateFieldSet(this, _CSSOverviewCompletedView_data, data, "f");
    const { elementCount, backgroundColors, textColors, textColorContrastIssues, fillColors, borderColors, globalStyleStats, mediaQueries, unusedDeclarations, fontInfo, } = __classPrivateFieldGet(this, _CSSOverviewCompletedView_data, "f");
    // Convert rgb values from the computed styles to either undefined or HEX(A) strings.
    const sortedBackgroundColors = __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_sortColorsByLuminance).call(this, backgroundColors);
    const sortedTextColors = __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_sortColorsByLuminance).call(this, textColors);
    const sortedFillColors = __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_sortColorsByLuminance).call(this, fillColors);
    const sortedBorderColors = __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_sortColorsByLuminance).call(this, borderColors);
    __classPrivateFieldSet(this, _CSSOverviewCompletedView_fragment, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
    <div class="vbox overview-completed-view">
      <div $="summary" class="results-section horizontally-padded summary">
        <h1>${i18nString(UIStrings.overviewSummary)}</h1>

        <ul>
          <li>
            <div class="label">${i18nString(UIStrings.elements)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(elementCount)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.externalStylesheets)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.externalSheets)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.inlineStyleElements)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.inlineStyles)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.styleRules)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.styleRules)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.mediaQueries)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(mediaQueries.size)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.typeSelectors)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.stats.type)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.idSelectors)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.stats.id)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.classSelectors)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.stats.class)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.universalSelectors)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.stats.universal)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.attributeSelectors)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.stats.attribute)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.nonsimpleSelectors)}</div>
            <div class="value">${__classPrivateFieldGet(this, _CSSOverviewCompletedView_formatter, "f").format(globalStyleStats.stats.nonSimple)}</div>
          </li>
        </ul>
      </div>

      <div $="colors" class="results-section horizontally-padded colors">
        <h1>${i18nString(UIStrings.colors)}</h1>
        <h2>${i18nString(UIStrings.backgroundColorsS, {
        PH1: sortedBackgroundColors.length,
    })}</h2>
        <ul>
          ${sortedBackgroundColors.map(__classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_colorsToFragment).bind(this, 'background'))}
        </ul>

        <h2>${i18nString(UIStrings.textColorsS, {
        PH1: sortedTextColors.length,
    })}</h2>
        <ul>
          ${sortedTextColors.map(__classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_colorsToFragment).bind(this, 'text'))}
        </ul>

        ${textColorContrastIssues.size > 0 ? __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_contrastIssuesToFragment).call(this, textColorContrastIssues) : ''}

        <h2>${i18nString(UIStrings.fillColorsS, {
        PH1: sortedFillColors.length,
    })}</h2>
        <ul>
          ${sortedFillColors.map(__classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_colorsToFragment).bind(this, 'fill'))}
        </ul>

        <h2>${i18nString(UIStrings.borderColorsS, {
        PH1: sortedBorderColors.length,
    })}</h2>
        <ul>
          ${sortedBorderColors.map(__classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_colorsToFragment).bind(this, 'border'))}
        </ul>
      </div>

      <div $="font-info" class="results-section font-info">
        <h1>${i18nString(UIStrings.fontInfo)}</h1>
        ${fontInfo.size > 0 ? __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_fontInfoToFragment).call(this, fontInfo) :
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<div>${i18nString(UIStrings.thereAreNoFonts)}</div>`}
      </div>

      <div $="unused-declarations" class="results-section unused-declarations">
        <h1>${i18nString(UIStrings.unusedDeclarations)}</h1>
        ${unusedDeclarations.size > 0 ? __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_groupToFragment).call(this, unusedDeclarations, 'unused-declarations', 'declaration') :
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<div class="horizontally-padded">${i18nString(UIStrings.thereAreNoUnusedDeclarations)}</div>`}
      </div>

      <div $="media-queries" class="results-section media-queries">
        <h1>${i18nString(UIStrings.mediaQueries)}</h1>
        ${mediaQueries.size > 0 ? __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_groupToFragment).call(this, mediaQueries, 'media-queries', 'text') :
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<div class="horizontally-padded">${i18nString(UIStrings.thereAreNoMediaQueries)}</div>`}
      </div>
    </div>`, "f");
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_resultsContainer, "f").element.appendChild(__classPrivateFieldGet(this, _CSSOverviewCompletedView_fragment, "f").element());
}, _CSSOverviewCompletedView_createElementsView = function _CSSOverviewCompletedView_createElementsView(evt) {
    const { payload } = evt.data;
    let id = '';
    let tabTitle = '';
    switch (payload.type) {
        case 'contrast': {
            const { section, key } = payload;
            id = `${section}-${key}`;
            tabTitle = i18nString(UIStrings.contrastIssues);
            break;
        }
        case 'color': {
            const { section, color } = payload;
            id = `${section}-${color}`;
            tabTitle = `${color.toUpperCase()} (${section})`;
            break;
        }
        case 'unused-declarations': {
            const { declaration } = payload;
            id = `${declaration}`;
            tabTitle = `${declaration}`;
            break;
        }
        case 'media-queries': {
            const { text } = payload;
            id = `${text}`;
            tabTitle = `${text}`;
            break;
        }
        case 'font-info': {
            const { name } = payload;
            id = `${name}`;
            tabTitle = `${name}`;
            break;
        }
    }
    let view = __classPrivateFieldGet(this, _CSSOverviewCompletedView_viewMap, "f").get(id);
    if (!view) {
        if (!__classPrivateFieldGet(this, _CSSOverviewCompletedView_domModel, "f") || !__classPrivateFieldGet(this, _CSSOverviewCompletedView_cssModel, "f")) {
            throw new Error('Unable to initialize CSS overview, missing models');
        }
        view = new ElementDetailsView(__classPrivateFieldGet(this, _CSSOverviewCompletedView_controller, "f"), __classPrivateFieldGet(this, _CSSOverviewCompletedView_domModel, "f"), __classPrivateFieldGet(this, _CSSOverviewCompletedView_cssModel, "f"), __classPrivateFieldGet(this, _CSSOverviewCompletedView_linkifier, "f"));
        void view.populateNodes(payload.nodes);
        __classPrivateFieldGet(this, _CSSOverviewCompletedView_viewMap, "f").set(id, view);
    }
    __classPrivateFieldGet(this, _CSSOverviewCompletedView_elementContainer, "f").appendTab(id, tabTitle, view, payload.type);
}, _CSSOverviewCompletedView_fontInfoToFragment = function _CSSOverviewCompletedView_fontInfoToFragment(fontInfo) {
    const fonts = Array.from(fontInfo.entries());
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  ${fonts.map(([font, fontMetrics]) => {
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<section class="font-family"><h2>${font}</h2> ${__classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_fontMetricsToFragment).call(this, font, fontMetrics)}</section>`;
    })}
  `;
}, _CSSOverviewCompletedView_fontMetricsToFragment = function _CSSOverviewCompletedView_fontMetricsToFragment(font, fontMetrics) {
    const fontMetricInfo = Array.from(fontMetrics.entries());
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  <div class="font-metric">
  ${fontMetricInfo.map(([label, values]) => {
        const sanitizedPath = `${font}/${label}`;
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  <div>
  <h3>${label}</h3>
  ${__classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_groupToFragment).call(this, values, 'font-info', 'value', sanitizedPath)}
  </div>`;
    })}
  </div>`;
}, _CSSOverviewCompletedView_groupToFragment = function _CSSOverviewCompletedView_groupToFragment(items, type, dataLabel, path = '') {
    // Sort by number of items descending.
    const values = Array.from(items.entries()).sort((d1, d2) => {
        const v1Nodes = d1[1];
        const v2Nodes = d2[1];
        return v2Nodes.length - v1Nodes.length;
    });
    const total = values.reduce((prev, curr) => prev + curr[1].length, 0);
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<ul>
    ${values.map(([title, nodes]) => {
        const width = 100 * nodes.length / total;
        const itemLabel = i18nString(UIStrings.nOccurrences, { n: nodes.length });
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<li>
        <div class="title">${title}</div>
        <button data-type="${type}" data-path="${path}" data-${dataLabel}="${title}"
        jslog="${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action().track({ click: true }).context(`css-overview.${type}`)}">
          <div class="details">${itemLabel}</div>
          <div class="bar-container">
            <div class="bar" style="width: ${width}%;"></div>
          </div>
        </button>
      </li>`;
    })}
    </ul>`;
}, _CSSOverviewCompletedView_contrastIssuesToFragment = function _CSSOverviewCompletedView_contrastIssuesToFragment(issues) {
    return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  <h2>${i18nString(UIStrings.contrastIssuesS, {
        PH1: issues.size,
    })}</h2>
  <ul>
  ${[...issues.entries()].map(([key, value]) => __classPrivateFieldGet(this, _CSSOverviewCompletedView_instances, "m", _CSSOverviewCompletedView_contrastIssueToFragment).call(this, key, value))}
  </ul>
  `;
}, _CSSOverviewCompletedView_contrastIssueToFragment = function _CSSOverviewCompletedView_contrastIssueToFragment(key, issues) {
    console.assert(issues.length > 0);
    let minContrastIssue = issues[0];
    for (const issue of issues) {
        // APCA contrast can be a negative value that is to be displayed. But the
        // absolute value is used to compare against the threshold. Therefore, the min
        // absolute value is the worst contrast.
        if (Math.abs(issue.contrastRatio) < Math.abs(minContrastIssue.contrastRatio)) {
            minContrastIssue = issue;
        }
    }
    const color = minContrastIssue.textColor.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEXA);
    const backgroundColor = minContrastIssue.backgroundColor.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEXA);
    const showAPCA = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('apca');
    const title = i18nString(UIStrings.textColorSOverSBackgroundResults, {
        PH1: color,
        PH2: backgroundColor,
        PH3: issues.length,
    });
    const blockFragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<li>
      <button
        title="${title}" aria-label="${title}"
        data-type="contrast" data-key="${key}" data-section="contrast" class="block" $="color"
        jslog="${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('css-overview.contrast').track({
        click: true,
    })}">
        Text
      </button>
      <div class="block-title">
        <div class="contrast-warning hidden" $="aa"><span class="threshold-label">${i18nString(UIStrings.aa)}</span></div>
        <div class="contrast-warning hidden" $="aaa"><span class="threshold-label">${i18nString(UIStrings.aaa)}</span></div>
        <div class="contrast-warning hidden" $="apca"><span class="threshold-label">${i18nString(UIStrings.apca)}</span></div>
      </div>
    </li>`;
    if (showAPCA) {
        const apca = blockFragment.$('apca');
        if (minContrastIssue.thresholdsViolated.apca) {
            apca.appendChild(createClearIcon());
        }
        else {
            apca.appendChild(createCheckIcon());
        }
        apca.classList.remove('hidden');
    }
    else {
        const aa = blockFragment.$('aa');
        if (minContrastIssue.thresholdsViolated.aa) {
            aa.appendChild(createClearIcon());
        }
        else {
            aa.appendChild(createCheckIcon());
        }
        const aaa = blockFragment.$('aaa');
        if (minContrastIssue.thresholdsViolated.aaa) {
            aaa.appendChild(createClearIcon());
        }
        else {
            aaa.appendChild(createCheckIcon());
        }
        aa.classList.remove('hidden');
        aaa.classList.remove('hidden');
    }
    const block = blockFragment.$('color');
    block.style.backgroundColor = backgroundColor;
    block.style.color = color;
    block.style.border = getBorderString(minContrastIssue.backgroundColor.asLegacyColor());
    return blockFragment;
}, _CSSOverviewCompletedView_colorsToFragment = function _CSSOverviewCompletedView_colorsToFragment(section, color) {
    const blockFragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<li>
      <button title=${color} data-type="color" data-color="${color}"
        data-section="${section}" class="block" $="color"
        jslog="${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__.action('css-overview.color').track({
        click: true,
    })}"></button>
      <div class="block-title color-text">${color}</div>
    </li>`;
    const block = blockFragment.$('color');
    block.style.backgroundColor = color;
    const borderColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color)?.asLegacyColor();
    if (!borderColor) {
        return;
    }
    block.style.border = getBorderString(borderColor);
    return blockFragment;
}, _CSSOverviewCompletedView_sortColorsByLuminance = function _CSSOverviewCompletedView_sortColorsByLuminance(srcColors) {
    return Array.from(srcColors.keys()).sort((colA, colB) => {
        const colorA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colA)?.asLegacyColor();
        const colorB = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colB)?.asLegacyColor();
        if (!colorA || !colorB) {
            return 0;
        }
        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(colorB.rgba()) - _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(colorA.rgba());
    });
};
Object.defineProperty(CSSOverviewCompletedView, "pushedNodes", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: new Set()
});
class DetailsView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox) {
    constructor() {
        super();
        _DetailsView_tabbedPane.set(this, void 0);
        __classPrivateFieldSet(this, _DetailsView_tabbedPane, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.TabbedPane(), "f");
        __classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").show(this.element);
        __classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabClosed, () => {
            this.dispatchEventToListeners(Events.TabClosed, __classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").tabIds().length);
        });
    }
    appendTab(id, tabTitle, view, jslogContext) {
        if (!__classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").hasTab(id)) {
            __classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").appendTab(id, tabTitle, view, undefined, undefined, /* isCloseable */ true, undefined, undefined, jslogContext);
        }
        __classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").selectTab(id);
    }
    closeTabs() {
        __classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").closeTabs(__classPrivateFieldGet(this, _DetailsView_tabbedPane, "f").tabIds());
    }
}
_DetailsView_tabbedPane = new WeakMap();
var Events;
(function (Events) {
    Events["TabClosed"] = "TabClosed";
})(Events || (Events = {}));
class ElementDetailsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.Widget {
    constructor(controller, domModel, cssModel, linkifier) {
        super();
        _ElementDetailsView_instances.add(this);
        _ElementDetailsView_controller.set(this, void 0);
        _ElementDetailsView_domModel.set(this, void 0);
        _ElementDetailsView_cssModel.set(this, void 0);
        _ElementDetailsView_linkifier.set(this, void 0);
        _ElementDetailsView_elementGridColumns.set(this, void 0);
        _ElementDetailsView_elementGrid.set(this, void 0);
        __classPrivateFieldSet(this, _ElementDetailsView_controller, controller, "f");
        __classPrivateFieldSet(this, _ElementDetailsView_domModel, domModel, "f");
        __classPrivateFieldSet(this, _ElementDetailsView_cssModel, cssModel, "f");
        __classPrivateFieldSet(this, _ElementDetailsView_linkifier, linkifier, "f");
        __classPrivateFieldSet(this, _ElementDetailsView_elementGridColumns, [
            {
                id: 'node-id',
                title: i18nString(UIStrings.element),
                sortable: true,
                weight: 50,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: undefined,
                fixedWidth: undefined,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined,
            },
            {
                id: 'declaration',
                title: i18nString(UIStrings.declaration),
                sortable: true,
                weight: 50,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: undefined,
                fixedWidth: undefined,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined,
            },
            {
                id: 'source-url',
                title: i18nString(UIStrings.source),
                sortable: false,
                weight: 100,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: undefined,
                fixedWidth: undefined,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined,
            },
            {
                id: 'contrast-ratio',
                title: i18nString(UIStrings.contrastRatio),
                sortable: true,
                weight: 25,
                titleDOMFragment: undefined,
                sort: undefined,
                align: undefined,
                width: '150px',
                fixedWidth: true,
                editable: undefined,
                nonSelectable: undefined,
                longText: undefined,
                disclosure: undefined,
                allowInSortByEvenWhenHidden: undefined,
                dataType: undefined,
                defaultWeight: undefined,
            },
        ], "f");
        __classPrivateFieldSet(this, _ElementDetailsView_elementGrid, new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.cssOverviewElements),
            columns: __classPrivateFieldGet(this, _ElementDetailsView_elementGridColumns, "f"),
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined,
        }), "f");
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").element.classList.add('element-grid');
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").element.addEventListener('mouseover', __classPrivateFieldGet(this, _ElementDetailsView_instances, "m", _ElementDetailsView_onMouseOver).bind(this));
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").setStriped(true);
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").addEventListener(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.DataGrid.Events.SortingChanged, __classPrivateFieldGet(this, _ElementDetailsView_instances, "m", _ElementDetailsView_sortMediaQueryDataGrid).bind(this));
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").asWidget().show(this.element);
    }
    async populateNodes(data) {
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").rootNode().removeChildren();
        if (!data.length) {
            return;
        }
        const [firstItem] = data;
        const visibility = new Set();
        'nodeId' in firstItem && firstItem.nodeId && visibility.add('node-id');
        'declaration' in firstItem && firstItem.declaration && visibility.add('declaration');
        'sourceURL' in firstItem && firstItem.sourceURL && visibility.add('source-url');
        'contrastRatio' in firstItem && firstItem.contrastRatio && visibility.add('contrast-ratio');
        let relatedNodesMap;
        if ('nodeId' in firstItem && visibility.has('node-id')) {
            // Grab the nodes from the frontend, but only those that have not been
            // retrieved already.
            const nodeIds = data.reduce((prev, curr) => {
                const nodeId = curr.nodeId;
                if (CSSOverviewCompletedView.pushedNodes.has(nodeId)) {
                    return prev;
                }
                CSSOverviewCompletedView.pushedNodes.add(nodeId);
                return prev.add(nodeId);
            }, new Set());
            relatedNodesMap = await __classPrivateFieldGet(this, _ElementDetailsView_domModel, "f").pushNodesByBackendIdsToFrontend(nodeIds);
        }
        for (const item of data) {
            let frontendNode;
            if ('nodeId' in item && visibility.has('node-id')) {
                if (!relatedNodesMap) {
                    continue;
                }
                frontendNode = relatedNodesMap.get(item.nodeId);
                if (!frontendNode) {
                    continue;
                }
            }
            const node = new ElementNode(item, frontendNode, __classPrivateFieldGet(this, _ElementDetailsView_linkifier, "f"), __classPrivateFieldGet(this, _ElementDetailsView_cssModel, "f"));
            node.selectable = false;
            __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").insertChild(node);
        }
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").setColumnsVisibility(visibility);
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").renderInline();
        __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").wasShown();
    }
}
_ElementDetailsView_controller = new WeakMap(), _ElementDetailsView_domModel = new WeakMap(), _ElementDetailsView_cssModel = new WeakMap(), _ElementDetailsView_linkifier = new WeakMap(), _ElementDetailsView_elementGridColumns = new WeakMap(), _ElementDetailsView_elementGrid = new WeakMap(), _ElementDetailsView_instances = new WeakSet(), _ElementDetailsView_sortMediaQueryDataGrid = function _ElementDetailsView_sortMediaQueryDataGrid() {
    const sortColumnId = __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").sortColumnId();
    if (!sortColumnId) {
        return;
    }
    const comparator = _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGrid.StringComparator.bind(null, sortColumnId);
    __classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").sortNodes(comparator, !__classPrivateFieldGet(this, _ElementDetailsView_elementGrid, "f").isSortOrderAscending());
}, _ElementDetailsView_onMouseOver = function _ElementDetailsView_onMouseOver(evt) {
    // Traverse the event path on the grid to find the nearest element with a backend node ID attached. Use
    // that for the highlighting.
    const node = evt.composedPath().find(el => el.dataset && el.dataset.backendNodeId);
    if (!node) {
        return;
    }
    const backendNodeId = Number(node.dataset.backendNodeId);
    __classPrivateFieldGet(this, _ElementDetailsView_controller, "f").dispatchEventToListeners(_CSSOverviewController_js__WEBPACK_IMPORTED_MODULE_12__.Events.RequestNodeHighlight, backendNodeId);
};
class ElementNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGridNode {
    constructor(data, frontendNode, linkifier, cssModel) {
        super(data);
        _ElementNode_instances.add(this);
        _ElementNode_linkifier.set(this, void 0);
        _ElementNode_cssModel.set(this, void 0);
        _ElementNode_frontendNode.set(this, void 0);
        __classPrivateFieldSet(this, _ElementNode_frontendNode, frontendNode, "f");
        __classPrivateFieldSet(this, _ElementNode_linkifier, linkifier, "f");
        __classPrivateFieldSet(this, _ElementNode_cssModel, cssModel, "f");
    }
    createCell(columnId) {
        // Nodes.
        const frontendNode = __classPrivateFieldGet(this, _ElementNode_frontendNode, "f");
        if (columnId === 'node-id') {
            const cell = this.createTD(columnId);
            cell.textContent = '...';
            if (!frontendNode) {
                throw new Error('Node entry is missing a related frontend node.');
            }
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(frontendNode).then(link => {
                cell.textContent = '';
                link.dataset.backendNodeId = frontendNode.backendNodeId().toString();
                cell.appendChild(link);
                const showNodeIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
                showNodeIcon.data = { iconName: 'select-element', color: 'var(--icon-show-element)', width: '16px' };
                showNodeIcon.classList.add('show-element');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(showNodeIcon, i18nString(UIStrings.showElement));
                showNodeIcon.tabIndex = 0;
                showNodeIcon.onclick = () => frontendNode.scrollIntoView();
                cell.appendChild(showNodeIcon);
            });
            return cell;
        }
        // Links to CSS.
        if (columnId === 'source-url') {
            const cell = this.createTD(columnId);
            if (this.data.range) {
                const link = __classPrivateFieldGet(this, _ElementNode_instances, "m", _ElementNode_linkifyRuleLocation).call(this, __classPrivateFieldGet(this, _ElementNode_cssModel, "f"), __classPrivateFieldGet(this, _ElementNode_linkifier, "f"), this.data.styleSheetId, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextRange.TextRange.fromObject(this.data.range));
                if (!link || link.textContent === '') {
                    cell.textContent = '(unable to link)';
                }
                else {
                    cell.appendChild(link);
                }
            }
            else {
                cell.textContent = '(unable to link to inlined styles)';
            }
            return cell;
        }
        if (columnId === 'contrast-ratio') {
            const cell = this.createTD(columnId);
            const showAPCA = _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('apca');
            const contrastRatio = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.floor(this.data.contrastRatio, 2);
            const contrastRatioString = showAPCA ? contrastRatio + '%' : contrastRatio;
            const border = getBorderString(this.data.backgroundColor);
            const color = this.data.textColor.asString();
            const backgroundColor = this.data.backgroundColor.asString();
            const contrastFragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
        <div class="contrast-container-in-grid" $="container">
          <span class="contrast-preview" style="border: ${border};
          color: ${color};
          background-color: ${backgroundColor};">Aa</span>
          <span>${contrastRatioString}</span>
        </div>
      `;
            const container = contrastFragment.$('container');
            if (showAPCA) {
                container.append(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<span>${i18nString(UIStrings.apca)}</span>`.element());
                if (this.data.thresholdsViolated.apca) {
                    container.appendChild(createClearIcon());
                }
                else {
                    container.appendChild(createCheckIcon());
                }
            }
            else {
                container.append(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<span>${i18nString(UIStrings.aa)}</span>`.element());
                if (this.data.thresholdsViolated.aa) {
                    container.appendChild(createClearIcon());
                }
                else {
                    container.appendChild(createCheckIcon());
                }
                container.append(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<span>${i18nString(UIStrings.aaa)}</span>`.element());
                if (this.data.thresholdsViolated.aaa) {
                    container.appendChild(createClearIcon());
                }
                else {
                    container.appendChild(createCheckIcon());
                }
            }
            cell.appendChild(contrastFragment.element());
            return cell;
        }
        return super.createCell(columnId);
    }
}
_ElementNode_linkifier = new WeakMap(), _ElementNode_cssModel = new WeakMap(), _ElementNode_frontendNode = new WeakMap(), _ElementNode_instances = new WeakSet(), _ElementNode_linkifyRuleLocation = function _ElementNode_linkifyRuleLocation(cssModel, linkifier, styleSheetId, ruleLocation) {
    const styleSheetHeader = cssModel.styleSheetHeaderForId(styleSheetId);
    if (!styleSheetHeader) {
        return;
    }
    const lineNumber = styleSheetHeader.lineNumberInSource(ruleLocation.startLine);
    const columnNumber = styleSheetHeader.columnNumberInSource(ruleLocation.startLine, ruleLocation.startColumn);
    const matchingSelectorLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSLocation(styleSheetHeader, lineNumber, columnNumber);
    return linkifier.linkifyCSSLocation(matchingSelectorLocation);
};
function createClearIcon() {
    const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
    icon.data = { iconName: 'clear', color: 'var(--icon-error)', width: '14px', height: '14px' };
    return icon;
}
function createCheckIcon() {
    const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon();
    icon.data = { iconName: 'checkmark', color: 'var(--icon-checkmark-green)', width: '14px', height: '14px' };
    return icon;
}


/***/ }),

/***/ "./src/panels/css_overview/CSSOverviewController.ts":
/*!**********************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewController.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   OverviewController: () => (/* binding */ OverviewController)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OverviewController_instances, _OverviewController_checkUrlAndResetIfChanged;


class OverviewController extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor() {
        super();
        _OverviewController_instances.add(this);
        Object.defineProperty(this, "currentUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.Events.InspectedURLChanged, __classPrivateFieldGet(this, _OverviewController_instances, "m", _OverviewController_checkUrlAndResetIfChanged), this);
    }
}
_OverviewController_instances = new WeakSet(), _OverviewController_checkUrlAndResetIfChanged = function _OverviewController_checkUrlAndResetIfChanged() {
    if (this.currentUrl === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL()) {
        return;
    }
    this.currentUrl = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().inspectedURL();
    this.dispatchEventToListeners(Events.Reset);
};
var Events;
(function (Events) {
    Events["RequestOverviewStart"] = "RequestOverviewStart";
    Events["RequestNodeHighlight"] = "RequestNodeHighlight";
    Events["PopulateNodes"] = "PopulateNodes";
    Events["RequestOverviewCancel"] = "RequestOverviewCancel";
    Events["OverviewCompleted"] = "OverviewCompleted";
    Events["Reset"] = "Reset";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/panels/css_overview/CSSOverviewSidebarPanel.ts":
/*!************************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewSidebarPanel.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewSidebarPanel: () => (/* binding */ CSSOverviewSidebarPanel),
/* harmony export */   SidebarEvents: () => (/* binding */ SidebarEvents)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewSidebarPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSOverviewSidebarPanel_instances, _CSSOverviewSidebarPanel_reset, _CSSOverviewSidebarPanel_deselectAllItems, _CSSOverviewSidebarPanel_onItemClick, _CSSOverviewSidebarPanel_onItemKeyDown;





const UIStrings = {
    /**
     *@description Label for the 'Clear overview' button in the CSS overview report
     */
    clearOverview: 'Clear overview',
    /**
     * @description Accessible label for the CSS overview panel sidebar
     */
    cssOverviewPanelSidebar: 'CSS overview panel sidebar',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/css_overview/CSSOverviewSidebarPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const ITEM_CLASS_NAME = 'overview-sidebar-panel-item';
const SELECTED_CLASS_NAME = 'selected';
class CSSOverviewSidebarPanel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox) {
    constructor() {
        super(true);
        _CSSOverviewSidebarPanel_instances.add(this);
        Object.defineProperty(this, "containerElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.contentElement.classList.add('overview-sidebar-panel');
        this.contentElement.addEventListener('click', __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_onItemClick).bind(this));
        this.contentElement.addEventListener('keydown', __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_onItemKeyDown).bind(this));
        // We need a container so that each item covers the full width of the
        // longest item, so that the selected item's background expands fully
        // even when the sidebar overflows.
        // Also see crbug/1408003
        this.containerElement =
            this.contentElement.createChild('div', 'overview-sidebar-panel-container');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(this.containerElement, i18nString(UIStrings.cssOverviewPanelSidebar));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTree(this.containerElement);
        // Clear overview.
        const clearResultsButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.clearOverview), 'clear', undefined, 'css-overview.clear-overview');
        clearResultsButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton.Events.Click, __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_reset), this);
        // Toolbar.
        const toolbarElement = this.containerElement.createChild('div', 'overview-toolbar');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', toolbarElement);
        toolbar.appendToolbarItem(clearResultsButton);
    }
    addItem(name, id) {
        const item = this.containerElement.createChild('div', ITEM_CLASS_NAME);
        item.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item()
            .track({ click: true, keydown: 'Enter|ArrowUp|ArrowDown' })
            .context(`css-overview.${id}`)}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTreeitem(item);
        item.textContent = name;
        item.dataset.id = id;
        item.tabIndex = 0;
    }
    select(id, focus) {
        const target = this.containerElement.querySelector(`[data-id=${CSS.escape(id)}]`);
        if (!target) {
            return;
        }
        if (target.classList.contains(SELECTED_CLASS_NAME)) {
            return;
        }
        __classPrivateFieldGet(this, _CSSOverviewSidebarPanel_instances, "m", _CSSOverviewSidebarPanel_deselectAllItems).call(this);
        target.classList.add(SELECTED_CLASS_NAME);
        if (focus) {
            target.contentEditable = 'true';
            target.focus();
            target.contentEditable = 'false';
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cssOverviewSidebarPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
_CSSOverviewSidebarPanel_instances = new WeakSet(), _CSSOverviewSidebarPanel_reset = function _CSSOverviewSidebarPanel_reset() {
    this.dispatchEventToListeners(SidebarEvents.Reset);
}, _CSSOverviewSidebarPanel_deselectAllItems = function _CSSOverviewSidebarPanel_deselectAllItems() {
    const items = this.containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`);
    items.forEach(item => {
        item.classList.remove(SELECTED_CLASS_NAME);
    });
}, _CSSOverviewSidebarPanel_onItemClick = function _CSSOverviewSidebarPanel_onItemClick(event) {
    const target = event.composedPath()[0];
    if (!target.classList.contains(ITEM_CLASS_NAME)) {
        return;
    }
    const { id } = target.dataset;
    if (!id) {
        return;
    }
    this.select(id, false);
    this.dispatchEventToListeners(SidebarEvents.ItemSelected, { id, isMouseEvent: true, key: undefined });
}, _CSSOverviewSidebarPanel_onItemKeyDown = function _CSSOverviewSidebarPanel_onItemKeyDown(event) {
    if (event.key !== 'Enter' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
        return;
    }
    const target = event.composedPath()[0];
    if (!target.classList.contains(ITEM_CLASS_NAME)) {
        return;
    }
    const { id } = target.dataset;
    if (!id) {
        return;
    }
    if (event.key === 'Enter') {
        this.select(id, false);
        this.dispatchEventToListeners(SidebarEvents.ItemSelected, { id, isMouseEvent: false, key: event.key });
    }
    else { // arrow up/down key
        const items = this.containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`);
        let currItemIndex = -1;
        for (let idx = 0; idx < items.length; idx++) {
            if (items[idx].dataset.id === id) {
                currItemIndex = idx;
                break;
            }
        }
        if (currItemIndex < 0) {
            return;
        }
        const moveTo = (event.key === 'ArrowDown' ? 1 : -1);
        const nextItemIndex = (currItemIndex + moveTo) % items.length;
        const nextItemId = items[nextItemIndex].dataset.id;
        if (!nextItemId) {
            return;
        }
        this.select(nextItemId, true);
        this.dispatchEventToListeners(SidebarEvents.ItemSelected, { id: nextItemId, isMouseEvent: false, key: event.key });
    }
    event.consume(true);
};
var SidebarEvents;
(function (SidebarEvents) {
    SidebarEvents["ItemSelected"] = "ItemSelected";
    SidebarEvents["Reset"] = "Reset";
})(SidebarEvents || (SidebarEvents = {}));


/***/ })

}]);