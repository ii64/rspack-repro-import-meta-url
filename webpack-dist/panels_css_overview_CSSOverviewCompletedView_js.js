"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_CSSOverviewCompletedView_js"],{

/***/ "./panels/css_overview/CSSOverviewCompletedView.js":
/*!*********************************************************!*\
  !*** ./panels/css_overview/CSSOverviewCompletedView.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewCompletedView: () => (/* binding */ CSSOverviewCompletedView),
/* harmony export */   DetailsView: () => (/* binding */ DetailsView),
/* harmony export */   ElementDetailsView: () => (/* binding */ ElementDetailsView),
/* harmony export */   ElementNode: () => (/* binding */ ElementNode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _cssOverviewCompletedView_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cssOverviewCompletedView.css.js */ "./panels/css_overview/cssOverviewCompletedView.css.js");
/* harmony import */ var _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./CSSOverviewSidebarPanel.js */ "./panels/css_overview/CSSOverviewSidebarPanel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.













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
    let { h, s, l } = color.as("hsl" /* Common.Color.Format.HSL */);
    h = Math.round(h * 360);
    s = Math.round(s * 100);
    l = Math.round(l * 100);
    // Reduce the lightness of the border to make sure that there's always a visible outline.
    l = Math.max(0, l - 15);
    return `1px solid hsl(${h}deg ${s}% ${l}%)`;
}
class CSSOverviewCompletedView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox {
    #splitWidget;
    #controller;
    #formatter;
    #mainContainer;
    #resultsContainer;
    #elementContainer;
    #sideBar;
    #cssModel;
    #domModel;
    #linkifier;
    #viewMap;
    #data;
    #fragment;
    constructor(controller) {
        super();
        this.#controller = controller;
        this.#formatter = new Intl.NumberFormat('en-US');
        this.#splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true, false, undefined, 200);
        this.#splitWidget.show(this.element);
        this.#mainContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.SplitWidget.SplitWidget(true, true);
        this.#resultsContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox();
        this.#elementContainer = new DetailsView();
        // If closing the last tab, collapse the sidebar.
        this.#elementContainer.addEventListener("TabClosed" /* Events.TabClosed */, evt => {
            if (evt.data === 0) {
                this.#mainContainer.setSidebarMinimized(true);
            }
        });
        // Dupe the styles into the main container because of the shadow root will prevent outer styles.
        this.#mainContainer.setMainWidget(this.#resultsContainer);
        this.#mainContainer.setSidebarWidget(this.#elementContainer);
        this.#mainContainer.setVertical(false);
        this.#mainContainer.setSecondIsSidebar(true);
        this.#mainContainer.setSidebarMinimized(true);
        this.#sideBar = new _CSSOverviewSidebarPanel_js__WEBPACK_IMPORTED_MODULE_12__.CSSOverviewSidebarPanel();
        this.#sideBar.setMinimumSize(100, 25);
        this.#splitWidget.setSidebarWidget(this.#sideBar);
        this.#splitWidget.setMainWidget(this.#mainContainer);
        this.#linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_8__.Linkifier.Linkifier(/* maxLinkLength */ 20, /* useLinkDecorator */ true);
        this.#viewMap = new Map();
        this.#sideBar.addItem(i18nString(UIStrings.overviewSummary), 'summary');
        this.#sideBar.addItem(i18nString(UIStrings.colors), 'colors');
        this.#sideBar.addItem(i18nString(UIStrings.fontInfo), 'font-info');
        this.#sideBar.addItem(i18nString(UIStrings.unusedDeclarations), 'unused-declarations');
        this.#sideBar.addItem(i18nString(UIStrings.mediaQueries), 'media-queries');
        this.#sideBar.select('summary', false);
        this.#sideBar.addEventListener("ItemSelected" /* SidebarEvents.ItemSelected */, this.#sideBarItemSelected, this);
        this.#sideBar.addEventListener("Reset" /* SidebarEvents.Reset */, this.#sideBarReset, this);
        this.#controller.addEventListener("Reset" /* CSSOverViewControllerEvents.Reset */, this.#reset, this);
        this.#controller.addEventListener("PopulateNodes" /* CSSOverViewControllerEvents.PopulateNodes */, this.#createElementsView, this);
        this.#resultsContainer.element.addEventListener('click', this.#onClick.bind(this));
        this.#data = null;
    }
    wasShown() {
        super.wasShown();
        this.#mainContainer.registerCSSFiles([_cssOverviewCompletedView_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]]);
        this.registerCSSFiles([_cssOverviewCompletedView_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]]);
        // TODO(paullewis): update the links in the panels in case source has been .
    }
    initializeModels(target) {
        const cssModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSModel);
        const domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel);
        if (!cssModel || !domModel) {
            throw new Error('Target must provide CSS and DOM models');
        }
        this.#cssModel = cssModel;
        this.#domModel = domModel;
    }
    #sideBarItemSelected(event) {
        const { data } = event;
        const section = this.#fragment.$(data.id);
        if (!section) {
            return;
        }
        section.scrollIntoView();
        // Set focus for keyboard invoked event
        if (!data.isMouseEvent && data.key === 'Enter') {
            const focusableElement = section.querySelector('button, [tabindex="0"]');
            focusableElement?.focus();
        }
    }
    #sideBarReset() {
        this.#controller.dispatchEventToListeners("Reset" /* CSSOverViewControllerEvents.Reset */);
    }
    #reset() {
        this.#resultsContainer.element.removeChildren();
        this.#mainContainer.setSidebarMinimized(true);
        this.#elementContainer.closeTabs();
        this.#viewMap = new Map();
        CSSOverviewCompletedView.pushedNodes.clear();
        this.#sideBar.select('summary', false);
    }
    #onClick(evt) {
        if (!evt.target) {
            return;
        }
        const target = evt.target;
        const dataset = target.dataset;
        const type = dataset.type;
        if (!type || !this.#data) {
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
                const nodes = this.#data.textColorContrastIssues.get(key) || [];
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
                        nodes = this.#data.textColors.get(color);
                        break;
                    case 'background':
                        nodes = this.#data.backgroundColors.get(color);
                        break;
                    case 'fill':
                        nodes = this.#data.fillColors.get(color);
                        break;
                    case 'border':
                        nodes = this.#data.borderColors.get(color);
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
                const nodes = this.#data.unusedDeclarations.get(declaration);
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
                const nodes = this.#data.mediaQueries.get(text);
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
                const fontFamilyInfo = this.#data.fontInfo.get(fontFamily);
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
        this.#controller.dispatchEventToListeners("PopulateNodes" /* CSSOverViewControllerEvents.PopulateNodes */, { payload });
        this.#mainContainer.setSidebarMinimized(false);
    }
    async #render(data) {
        if (!data || !('backgroundColors' in data) || !('textColors' in data)) {
            return;
        }
        this.#data = data;
        const { elementCount, backgroundColors, textColors, textColorContrastIssues, fillColors, borderColors, globalStyleStats, mediaQueries, unusedDeclarations, fontInfo, } = this.#data;
        // Convert rgb values from the computed styles to either undefined or HEX(A) strings.
        const sortedBackgroundColors = this.#sortColorsByLuminance(backgroundColors);
        const sortedTextColors = this.#sortColorsByLuminance(textColors);
        const sortedFillColors = this.#sortColorsByLuminance(fillColors);
        const sortedBorderColors = this.#sortColorsByLuminance(borderColors);
        this.#fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
    <div class="vbox overview-completed-view">
      <div $="summary" class="results-section horizontally-padded summary">
        <h1>${i18nString(UIStrings.overviewSummary)}</h1>

        <ul>
          <li>
            <div class="label">${i18nString(UIStrings.elements)}</div>
            <div class="value">${this.#formatter.format(elementCount)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.externalStylesheets)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.externalSheets)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.inlineStyleElements)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.inlineStyles)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.styleRules)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.styleRules)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.mediaQueries)}</div>
            <div class="value">${this.#formatter.format(mediaQueries.size)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.typeSelectors)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.stats.type)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.idSelectors)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.stats.id)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.classSelectors)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.stats.class)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.universalSelectors)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.stats.universal)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.attributeSelectors)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.stats.attribute)}</div>
          </li>
          <li>
            <div class="label">${i18nString(UIStrings.nonsimpleSelectors)}</div>
            <div class="value">${this.#formatter.format(globalStyleStats.stats.nonSimple)}</div>
          </li>
        </ul>
      </div>

      <div $="colors" class="results-section horizontally-padded colors">
        <h1>${i18nString(UIStrings.colors)}</h1>
        <h2>${i18nString(UIStrings.backgroundColorsS, {
            PH1: sortedBackgroundColors.length,
        })}</h2>
        <ul>
          ${sortedBackgroundColors.map(this.#colorsToFragment.bind(this, 'background'))}
        </ul>

        <h2>${i18nString(UIStrings.textColorsS, {
            PH1: sortedTextColors.length,
        })}</h2>
        <ul>
          ${sortedTextColors.map(this.#colorsToFragment.bind(this, 'text'))}
        </ul>

        ${textColorContrastIssues.size > 0 ? this.#contrastIssuesToFragment(textColorContrastIssues) : ''}

        <h2>${i18nString(UIStrings.fillColorsS, {
            PH1: sortedFillColors.length,
        })}</h2>
        <ul>
          ${sortedFillColors.map(this.#colorsToFragment.bind(this, 'fill'))}
        </ul>

        <h2>${i18nString(UIStrings.borderColorsS, {
            PH1: sortedBorderColors.length,
        })}</h2>
        <ul>
          ${sortedBorderColors.map(this.#colorsToFragment.bind(this, 'border'))}
        </ul>
      </div>

      <div $="font-info" class="results-section font-info">
        <h1>${i18nString(UIStrings.fontInfo)}</h1>
        ${fontInfo.size > 0 ? this.#fontInfoToFragment(fontInfo) :
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<div>${i18nString(UIStrings.thereAreNoFonts)}</div>`}
      </div>

      <div $="unused-declarations" class="results-section unused-declarations">
        <h1>${i18nString(UIStrings.unusedDeclarations)}</h1>
        ${unusedDeclarations.size > 0 ? this.#groupToFragment(unusedDeclarations, 'unused-declarations', 'declaration') :
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<div class="horizontally-padded">${i18nString(UIStrings.thereAreNoUnusedDeclarations)}</div>`}
      </div>

      <div $="media-queries" class="results-section media-queries">
        <h1>${i18nString(UIStrings.mediaQueries)}</h1>
        ${mediaQueries.size > 0 ? this.#groupToFragment(mediaQueries, 'media-queries', 'text') :
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<div class="horizontally-padded">${i18nString(UIStrings.thereAreNoMediaQueries)}</div>`}
      </div>
    </div>`;
        this.#resultsContainer.element.appendChild(this.#fragment.element());
    }
    #createElementsView(evt) {
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
        let view = this.#viewMap.get(id);
        if (!view) {
            if (!this.#domModel || !this.#cssModel) {
                throw new Error('Unable to initialize CSS overview, missing models');
            }
            view = new ElementDetailsView(this.#controller, this.#domModel, this.#cssModel, this.#linkifier);
            void view.populateNodes(payload.nodes);
            this.#viewMap.set(id, view);
        }
        this.#elementContainer.appendTab(id, tabTitle, view, payload.type);
    }
    #fontInfoToFragment(fontInfo) {
        const fonts = Array.from(fontInfo.entries());
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  ${fonts.map(([font, fontMetrics]) => {
            return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `<section class="font-family"><h2>${font}</h2> ${this.#fontMetricsToFragment(font, fontMetrics)}</section>`;
        })}
  `;
    }
    #fontMetricsToFragment(font, fontMetrics) {
        const fontMetricInfo = Array.from(fontMetrics.entries());
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  <div class="font-metric">
  ${fontMetricInfo.map(([label, values]) => {
            const sanitizedPath = `${font}/${label}`;
            return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  <div>
  <h3>${label}</h3>
  ${this.#groupToFragment(values, 'font-info', 'value', sanitizedPath)}
  </div>`;
        })}
  </div>`;
    }
    #groupToFragment(items, type, dataLabel, path = '') {
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
    }
    #contrastIssuesToFragment(issues) {
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Fragment.Fragment.build `
  <h2>${i18nString(UIStrings.contrastIssuesS, {
            PH1: issues.size,
        })}</h2>
  <ul>
  ${[...issues.entries()].map(([key, value]) => this.#contrastIssueToFragment(key, value))}
  </ul>
  `;
    }
    #contrastIssueToFragment(key, issues) {
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
        const color = minContrastIssue.textColor.asString("hexa" /* Common.Color.Format.HEXA */);
        const backgroundColor = minContrastIssue.backgroundColor.asString("hexa" /* Common.Color.Format.HEXA */);
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
    }
    #colorsToFragment(section, color) {
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
    }
    #sortColorsByLuminance(srcColors) {
        return Array.from(srcColors.keys()).sort((colA, colB) => {
            const colorA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colA)?.asLegacyColor();
            const colorB = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colB)?.asLegacyColor();
            if (!colorA || !colorB) {
                return 0;
            }
            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(colorB.rgba()) - _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.luminance(colorA.rgba());
        });
    }
    setOverviewData(data) {
        void this.#render(data);
    }
    static pushedNodes = new Set();
}
class DetailsView extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox) {
    #tabbedPane;
    constructor() {
        super();
        this.#tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.TabbedPane();
        this.#tabbedPane.show(this.element);
        this.#tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.TabbedPane.Events.TabClosed, () => {
            this.dispatchEventToListeners("TabClosed" /* Events.TabClosed */, this.#tabbedPane.tabIds().length);
        });
    }
    appendTab(id, tabTitle, view, jslogContext) {
        if (!this.#tabbedPane.hasTab(id)) {
            this.#tabbedPane.appendTab(id, tabTitle, view, undefined, undefined, /* isCloseable */ true, undefined, undefined, jslogContext);
        }
        this.#tabbedPane.selectTab(id);
    }
    closeTabs() {
        this.#tabbedPane.closeTabs(this.#tabbedPane.tabIds());
    }
}
class ElementDetailsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.Widget {
    #controller;
    #domModel;
    #cssModel;
    #linkifier;
    #elementGridColumns;
    #elementGrid;
    constructor(controller, domModel, cssModel, linkifier) {
        super();
        this.#controller = controller;
        this.#domModel = domModel;
        this.#cssModel = cssModel;
        this.#linkifier = linkifier;
        this.#elementGridColumns = [
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
        ];
        this.#elementGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.cssOverviewElements),
            columns: this.#elementGridColumns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined,
        });
        this.#elementGrid.element.classList.add('element-grid');
        this.#elementGrid.element.addEventListener('mouseover', this.#onMouseOver.bind(this));
        this.#elementGrid.setStriped(true);
        this.#elementGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */, this.#sortMediaQueryDataGrid.bind(this));
        this.#elementGrid.asWidget().show(this.element);
    }
    #sortMediaQueryDataGrid() {
        const sortColumnId = this.#elementGrid.sortColumnId();
        if (!sortColumnId) {
            return;
        }
        const comparator = _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGrid.StringComparator.bind(null, sortColumnId);
        this.#elementGrid.sortNodes(comparator, !this.#elementGrid.isSortOrderAscending());
    }
    #onMouseOver(evt) {
        // Traverse the event path on the grid to find the nearest element with a backend node ID attached. Use
        // that for the highlighting.
        const node = evt.composedPath().find(el => el.dataset && el.dataset.backendNodeId);
        if (!node) {
            return;
        }
        const backendNodeId = Number(node.dataset.backendNodeId);
        this.#controller.dispatchEventToListeners("RequestNodeHighlight" /* CSSOverViewControllerEvents.RequestNodeHighlight */, backendNodeId);
    }
    async populateNodes(data) {
        this.#elementGrid.rootNode().removeChildren();
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
            relatedNodesMap = await this.#domModel.pushNodesByBackendIdsToFrontend(nodeIds);
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
            const node = new ElementNode(item, frontendNode, this.#linkifier, this.#cssModel);
            node.selectable = false;
            this.#elementGrid.insertChild(node);
        }
        this.#elementGrid.setColumnsVisibility(visibility);
        this.#elementGrid.renderInline();
        this.#elementGrid.wasShown();
    }
}
class ElementNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_7__.SortableDataGrid.SortableDataGridNode {
    #linkifier;
    #cssModel;
    #frontendNode;
    constructor(data, frontendNode, linkifier, cssModel) {
        super(data);
        this.#frontendNode = frontendNode;
        this.#linkifier = linkifier;
        this.#cssModel = cssModel;
    }
    createCell(columnId) {
        // Nodes.
        const frontendNode = this.#frontendNode;
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
                const link = this.#linkifyRuleLocation(this.#cssModel, this.#linkifier, this.data.styleSheetId, _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.TextRange.TextRange.fromObject(this.data.range));
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
    #linkifyRuleLocation(cssModel, linkifier, styleSheetId, ruleLocation) {
        const styleSheetHeader = cssModel.styleSheetHeaderForId(styleSheetId);
        if (!styleSheetHeader) {
            return;
        }
        const lineNumber = styleSheetHeader.lineNumberInSource(ruleLocation.startLine);
        const columnNumber = styleSheetHeader.columnNumberInSource(ruleLocation.startLine, ruleLocation.startColumn);
        const matchingSelectorLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.CSSModel.CSSLocation(styleSheetHeader, lineNumber, columnNumber);
        return linkifier.linkifyCSSLocation(matchingSelectorLocation);
    }
}
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
//# sourceMappingURL=CSSOverviewCompletedView.js.map

/***/ }),

/***/ "./panels/css_overview/CSSOverviewSidebarPanel.js":
/*!********************************************************!*\
  !*** ./panels/css_overview/CSSOverviewSidebarPanel.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewSidebarPanel: () => (/* binding */ CSSOverviewSidebarPanel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _cssOverviewSidebarPanel_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cssOverviewSidebarPanel.css.js */ "./panels/css_overview/cssOverviewSidebarPanel.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





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
    containerElement;
    constructor() {
        super(true);
        this.contentElement.classList.add('overview-sidebar-panel');
        this.contentElement.addEventListener('click', this.#onItemClick.bind(this));
        this.contentElement.addEventListener('keydown', this.#onItemKeyDown.bind(this));
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
        clearResultsButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.#reset, this);
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
    #reset() {
        this.dispatchEventToListeners("Reset" /* SidebarEvents.Reset */);
    }
    #deselectAllItems() {
        const items = this.containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`);
        items.forEach(item => {
            item.classList.remove(SELECTED_CLASS_NAME);
        });
    }
    #onItemClick(event) {
        const target = event.composedPath()[0];
        if (!target.classList.contains(ITEM_CLASS_NAME)) {
            return;
        }
        const { id } = target.dataset;
        if (!id) {
            return;
        }
        this.select(id, false);
        this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */, { id, isMouseEvent: true, key: undefined });
    }
    #onItemKeyDown(event) {
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
            this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */, { id, isMouseEvent: false, key: event.key });
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
            this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */, { id: nextItemId, isMouseEvent: false, key: event.key });
        }
        event.consume(true);
    }
    select(id, focus) {
        const target = this.containerElement.querySelector(`[data-id=${CSS.escape(id)}]`);
        if (!target) {
            return;
        }
        if (target.classList.contains(SELECTED_CLASS_NAME)) {
            return;
        }
        this.#deselectAllItems();
        target.classList.add(SELECTED_CLASS_NAME);
        if (focus) {
            target.contentEditable = 'true';
            target.focus();
            target.contentEditable = 'false';
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_cssOverviewSidebarPanel_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
    }
}
//# sourceMappingURL=CSSOverviewSidebarPanel.js.map

/***/ }),

/***/ "./panels/css_overview/cssOverviewCompletedView.css.js":
/*!*************************************************************!*\
  !*** ./panels/css_overview/cssOverviewCompletedView.css.js ***!
  \*************************************************************/
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
`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-completed-view {
  overflow: auto;

  --overview-default-padding: 28px;
  --overview-icon-padding: 32px;
}

.overview-completed-view .summary ul,
.overview-completed-view .colors ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.overview-completed-view .summary ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, 140px);
  grid-gap: 16px;
}

.overview-completed-view .colors ul li {
  display: inline-block;
  margin: 0 0 16px;
  padding: 0 8px 0 0;
}

.overview-completed-view .summary ul li {
  display: flex;
  flex-direction: column;
  grid-column-start: auto;
}

.overview-completed-view li .label {
  font-size: 12px;
  padding-bottom: 2px;
}

.overview-completed-view li .value {
  font-size: 17px;
}

.overview-completed-view ul li span {
  font-weight: bold;
}

.unused-rules-grid .header-container,
.unused-rules-grid .data-container,
.unused-rules-grid table.data {
  position: relative;
}

.unused-rules-grid .data-container {
  top: 0;
  max-height: 350px;
}

.unused-rules-grid {
  border-left: none;
  border-right: none;
}
/** Ensure links are rendered at the correct height */

.unused-rules-grid .monospace {
  display: block;
  height: 18px;
}

.element-grid {
  flex: 1;
  border-left: none;
  border-right: none;
  overflow: auto;
}

.block {
  width: 65px;
  height: 25px;
  border-radius: 3px;
  margin-right: 16px;
}

.block-title {
  padding-top: 4px;
  font-size: 12px;
  color: var(--sys-color-on-surface);
  letter-spacing: 0;
  text-transform: uppercase;
}

.block-title.color-text {
  text-transform: none;
  max-width: 65px;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  user-select: text;
  overflow: hidden;
}

.results-section {
  flex-shrink: 0;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: var(--overview-default-padding) 0 var(--overview-default-padding) 0;
}

.horizontally-padded {
  padding-left: var(--overview-default-padding);
  padding-right: var(--overview-default-padding);
}

.results-section h1 {
  font-size: 15px;
  font-weight: normal;
  padding: 0;
  margin: 0 0 20px;
  padding-left: calc(var(--overview-default-padding) + var(--overview-icon-padding));
  position: relative;
  height: 26px;
  line-height: 26px;
}

.results-section h1::before {
  content: "";
  display: block;
  position: absolute;
  left: var(--overview-default-padding);
  top: 0;
  width: 26px;
  height: 26px;
  background-image: var(--image-file-cssoverview_icons_2x);
  background-size: 104px 26px;
}

.results-section.horizontally-padded h1 {
  padding-left: var(--overview-icon-padding);
}

.results-section.horizontally-padded h1::before {
  left: 0;
}

.results-section.summary h1 {
  padding-left: 0;
}

.results-section.summary h1::before {
  display: none;
}

.results-section.colors h1::before {
  background-position: 0 0;
}

.results-section.font-info h1::before {
  background-position: -26px 0;
}

.results-section.unused-declarations h1::before {
  background-position: -52px 0;
}

.results-section.media-queries h1::before {
  background-position: -78px 0;
}

.results-section.colors h2 {
  margin-top: 20px;
  font-size: 13px;
  font-weight: normal;
}

.overview-completed-view .font-info ul,
.overview-completed-view .media-queries ul,
.overview-completed-view .unused-declarations ul {
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0 var(--overview-default-padding);
}

.overview-completed-view .font-info ul li,
.overview-completed-view .media-queries ul li,
.overview-completed-view .unused-declarations ul li {
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 12px;
  margin-bottom: 4px;
  align-items: center;
}

.overview-completed-view .font-info button .details,
.overview-completed-view .media-queries button .details,
.overview-completed-view .unused-declarations button .details {
  min-width: 100px;
  text-align: right;
  margin-right: 8px;
  color: var(--sys-color-primary);
  pointer-events: none;
}

.overview-completed-view .font-info button .bar-container,
.overview-completed-view .media-queries button .bar-container,
.overview-completed-view .unused-declarations button .bar-container {
  flex: 1;
  pointer-events: none;
}

.overview-completed-view .font-info button .bar,
.overview-completed-view .media-queries button .bar,
.overview-completed-view .unused-declarations button .bar {
  height: 8px;
  background: var(--sys-color-primary-bright);
  border-radius: 2px;
  min-width: 2px;
}

.overview-completed-view .font-info button,
.overview-completed-view .media-queries button,
.overview-completed-view .unused-declarations button {
  border: none;
  padding: 0;
  padding-right: 10px;
  margin: 0;
  display: flex;
  align-items: center;
  border-radius: 2px;
  cursor: pointer;
  height: 28px;
  background: none;

  &:focus-visible {
    outline: 2px solid var(--sys-color-state-focus-ring);
  }

  &:hover {
    border-radius: 12px;
    background: var(--sys-color-state-hover-on-subtle);
  }

  &:hover .details,
  &:focus .details {
    color: color-mix(in sRGB, var(--sys-color-primary), var(--sys-color-state-hover-on-prominent) 6%);
  }

  &:hover .bar,
  &:focus .bar {
    background-color: color-mix(in sRGB, var(--sys-color-primary-bright), var(--sys-color-state-hover-on-prominent) 6%);
    color: var(--sys-color-on-primary);
  }
}

.overview-completed-view .font-info .font-metric {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 12px;
}

.overview-completed-view .font-info ul {
  padding: 0;
}

.overview-completed-view .font-info ul li {
  grid-template-columns: 1fr 4fr;
}

.overview-completed-view .font-info h2 {
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 1em;
}

.overview-completed-view .font-info h3 {
  font-size: 13px;
  font-weight: normal;
  font-style: italic;
  margin: 0 0 0.5em;
}

.overview-completed-view .font-info {
  padding-bottom: 0;
}

.overview-completed-view .font-family {
  padding: var(--overview-default-padding);
}

.overview-completed-view .font-family:nth-child(2n+1) {
  background: var(--sys-color-cdt-base-container);
}

.overview-completed-view .font-family:first-of-type {
  padding-top: 0;
}

.contrast-warning {
  display: flex;
  align-items: center;
  margin-top: 2px;
}

.contrast-warning .threshold-label {
  font-weight: normal;
  width: 30px;
}

.contrast-warning devtools-icon {
  margin-left: 2px;
}

.contrast-preview {
  padding: 0 5px;
}

.contrast-container-in-grid {
  display: flex;
  align-items: center;
}

.contrast-container-in-grid > * {
  margin-right: 5px;
  min-width: initial;
}

.data .nodeId-column {
  align-items: center;
  display: flex;
  height: 20px;
}

.nodeId-column .monospace {
  overflow: hidden;
}

.show-element {
  margin: 0 0 0 8px;
  display: none;
  cursor: pointer;
  flex: none;

  --icon-show-element: var(--icon-default);
}

.show-element:focus,
.show-element:hover {
  --icon-show-element: var(--icon-default-hover);
}

.nodeId-column:focus-within .show-element,
.nodeId-column:hover .show-element {
  display: inline-block;
}

.results-section.colors {
  forced-color-adjust: none; /* show colors in high contrast theme */
}

/*# sourceURL=cssOverviewCompletedView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/css_overview/cssOverviewSidebarPanel.css.js":
/*!************************************************************!*\
  !*** ./panels/css_overview/cssOverviewSidebarPanel.css.js ***!
  \************************************************************/
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
`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-sidebar-panel {
  overflow: auto;
  display: flex;
  background: var(--sys-color-cdt-base-container);
}

.overview-sidebar-panel-container {
  min-width: fit-content;
}

.overview-sidebar-panel-item {
  height: 30px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  color: var(--sys-color-on-surface);
  white-space: nowrap;

  &:hover {
    background: var(--sys-color-state-hover-on-subtle);
  }

  &:focus {
    background: var(--sys-color-state-focus-highlight);
  }

  &.selected {
    background: var(--sys-color-tonal-container);
    color: var(--sys-color-on-tonal-container);
  }
}

.overview-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.overview-sidebar-panel-item:focus-visible {
  outline-width: unset;
}

@media (forced-colors: active) {
  .overview-sidebar-panel-item.selected {
    forced-color-adjust: none; /* crbug.com/1166705 workaround */
    background: Highlight;
    color: HighlightText;
  }

  .overview-sidebar-panel-item:hover {
    forced-color-adjust: none; /* crbug.com/1166705 workaround */
    background: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=cssOverviewSidebarPanel.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);