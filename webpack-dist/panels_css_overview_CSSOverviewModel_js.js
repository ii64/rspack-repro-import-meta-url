"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_CSSOverviewModel_js"],{

/***/ "./panels/css_overview/CSSOverviewModel.js":
/*!*************************************************!*\
  !*** ./panels/css_overview/CSSOverviewModel.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewModel: () => (/* binding */ CSSOverviewModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./ui/legacy/components/color_picker/color_picker.js");
/* harmony import */ var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./panels/css_overview/CSSOverviewUnusedDeclarations.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





class CSSOverviewModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel {
    #runtimeAgent;
    #cssAgent;
    #domSnapshotAgent;
    #overlayAgent;
    constructor(target) {
        super(target);
        this.#runtimeAgent = target.runtimeAgent();
        this.#cssAgent = target.cssAgent();
        this.#domSnapshotAgent = target.domsnapshotAgent();
        this.#overlayAgent = target.overlayAgent();
    }
    highlightNode(node) {
        const highlightConfig = {
            contentColor: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Content.toProtocolRGBA(),
            showInfo: true,
            contrastAlgorithm: _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca') ? "apca" /* Protocol.Overlay.ContrastAlgorithm.Apca */ :
                "aa" /* Protocol.Overlay.ContrastAlgorithm.Aa */,
        };
        void this.#overlayAgent.invoke_hideHighlight();
        void this.#overlayAgent.invoke_highlightNode({ backendNodeId: node, highlightConfig });
    }
    async getNodeStyleStats() {
        const backgroundColors = new Map();
        const textColors = new Map();
        const textColorContrastIssues = new Map();
        const fillColors = new Map();
        const borderColors = new Map();
        const fontInfo = new Map();
        const unusedDeclarations = new Map();
        const snapshotConfig = {
            computedStyles: [
                'background-color',
                'color',
                'fill',
                'border-top-width',
                'border-top-color',
                'border-bottom-width',
                'border-bottom-color',
                'border-left-width',
                'border-left-color',
                'border-right-width',
                'border-right-color',
                'font-family',
                'font-size',
                'font-weight',
                'line-height',
                'position',
                'top',
                'right',
                'bottom',
                'left',
                'display',
                'width',
                'height',
                'vertical-align',
            ],
            includeTextColorOpacities: true,
            includeBlendedBackgroundColors: true,
        };
        const formatColor = (color) => {
            if (color instanceof _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy) {
                return color.hasAlpha() ? color.asString("hexa" /* Common.Color.Format.HEXA */) : color.asString("hex" /* Common.Color.Format.HEX */);
            }
            return color.asString();
        };
        const storeColor = (id, nodeId, target) => {
            if (id === -1) {
                return;
            }
            // Parse the color, discard transparent ones.
            const colorText = strings[id];
            if (!colorText) {
                return;
            }
            const color = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(colorText);
            if (!color || color.asLegacyColor().rgba()[3] === 0) {
                return;
            }
            // Format the color and use as the key.
            const colorFormatted = formatColor(color);
            if (!colorFormatted) {
                return;
            }
            // Get the existing set of nodes with the color, or create a new set.
            const colorValues = target.get(colorFormatted) || new Set();
            colorValues.add(nodeId);
            // Store.
            target.set(colorFormatted, colorValues);
            return color;
        };
        const isSVGNode = (nodeName) => {
            const validNodes = new Set([
                'altglyph',
                'circle',
                'ellipse',
                'path',
                'polygon',
                'polyline',
                'rect',
                'svg',
                'text',
                'textpath',
                'tref',
                'tspan',
            ]);
            return validNodes.has(nodeName.toLowerCase());
        };
        const isReplacedContent = (nodeName) => {
            const validNodes = new Set(['iframe', 'video', 'embed', 'img']);
            return validNodes.has(nodeName.toLowerCase());
        };
        const isTableElementWithDefaultStyles = (nodeName, display) => {
            const validNodes = new Set(['tr', 'td', 'thead', 'tbody']);
            return validNodes.has(nodeName.toLowerCase()) && display.startsWith('table');
        };
        let elementCount = 0;
        const { documents, strings } = await this.#domSnapshotAgent.invoke_captureSnapshot(snapshotConfig);
        for (const { nodes, layout } of documents) {
            // Track the number of elements in the documents.
            elementCount += layout.nodeIndex.length;
            for (let idx = 0; idx < layout.styles.length; idx++) {
                const styles = layout.styles[idx];
                const nodeIdx = layout.nodeIndex[idx];
                if (!nodes.backendNodeId || !nodes.nodeName) {
                    continue;
                }
                const nodeId = nodes.backendNodeId[nodeIdx];
                const nodeName = nodes.nodeName[nodeIdx];
                const [backgroundColorIdx, textColorIdx, fillIdx, borderTopWidthIdx, borderTopColorIdx, borderBottomWidthIdx, borderBottomColorIdx, borderLeftWidthIdx, borderLeftColorIdx, borderRightWidthIdx, borderRightColorIdx, fontFamilyIdx, fontSizeIdx, fontWeightIdx, lineHeightIdx, positionIdx, topIdx, rightIdx, bottomIdx, leftIdx, displayIdx, widthIdx, heightIdx, verticalAlignIdx] = styles;
                storeColor(backgroundColorIdx, nodeId, backgroundColors);
                const textColor = storeColor(textColorIdx, nodeId, textColors);
                if (isSVGNode(strings[nodeName])) {
                    storeColor(fillIdx, nodeId, fillColors);
                }
                if (strings[borderTopWidthIdx] !== '0px') {
                    storeColor(borderTopColorIdx, nodeId, borderColors);
                }
                if (strings[borderBottomWidthIdx] !== '0px') {
                    storeColor(borderBottomColorIdx, nodeId, borderColors);
                }
                if (strings[borderLeftWidthIdx] !== '0px') {
                    storeColor(borderLeftColorIdx, nodeId, borderColors);
                }
                if (strings[borderRightWidthIdx] !== '0px') {
                    storeColor(borderRightColorIdx, nodeId, borderColors);
                }
                /**
                 * Create a structure like this for font info:
                 *
                 *                 / size (Map) -- nodes (Array)
                 *                /
                 * Font family (Map) ----- weight (Map) -- nodes (Array)
                 *                \
                 *                 \ line-height (Map) -- nodes (Array)
                 */
                if (fontFamilyIdx && fontFamilyIdx !== -1) {
                    const fontFamily = strings[fontFamilyIdx];
                    const fontFamilyInfo = fontInfo.get(fontFamily) || new Map();
                    const sizeLabel = 'font-size';
                    const weightLabel = 'font-weight';
                    const lineHeightLabel = 'line-height';
                    const size = fontFamilyInfo.get(sizeLabel) || new Map();
                    const weight = fontFamilyInfo.get(weightLabel) || new Map();
                    const lineHeight = fontFamilyInfo.get(lineHeightLabel) || new Map();
                    if (fontSizeIdx !== -1) {
                        const fontSizeValue = strings[fontSizeIdx];
                        const nodes = size.get(fontSizeValue) || [];
                        nodes.push(nodeId);
                        size.set(fontSizeValue, nodes);
                    }
                    if (fontWeightIdx !== -1) {
                        const fontWeightValue = strings[fontWeightIdx];
                        const nodes = weight.get(fontWeightValue) || [];
                        nodes.push(nodeId);
                        weight.set(fontWeightValue, nodes);
                    }
                    if (lineHeightIdx !== -1) {
                        const lineHeightValue = strings[lineHeightIdx];
                        const nodes = lineHeight.get(lineHeightValue) || [];
                        nodes.push(nodeId);
                        lineHeight.set(lineHeightValue, nodes);
                    }
                    // Set the data back.
                    fontFamilyInfo.set(sizeLabel, size);
                    fontFamilyInfo.set(weightLabel, weight);
                    fontFamilyInfo.set(lineHeightLabel, lineHeight);
                    fontInfo.set(fontFamily, fontFamilyInfo);
                }
                const blendedBackgroundColor = textColor && layout.blendedBackgroundColors && layout.blendedBackgroundColors[idx] !== -1 ?
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(strings[layout.blendedBackgroundColors[idx]]) :
                    null;
                if (textColor && blendedBackgroundColor) {
                    const contrastInfo = new _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_3__.ContrastInfo.ContrastInfo({
                        backgroundColors: [blendedBackgroundColor.asString("hexa" /* Common.Color.Format.HEXA */)],
                        computedFontSize: fontSizeIdx !== -1 ? strings[fontSizeIdx] : '',
                        computedFontWeight: fontWeightIdx !== -1 ? strings[fontWeightIdx] : '',
                    });
                    const blendedTextColor = textColor.asLegacyColor().blendWithAlpha(layout.textColorOpacities ? layout.textColorOpacities[idx] : 1);
                    contrastInfo.setColor(blendedTextColor);
                    const formattedTextColor = formatColor(blendedTextColor);
                    const formattedBackgroundColor = formatColor(blendedBackgroundColor.asLegacyColor());
                    const key = `${formattedTextColor}_${formattedBackgroundColor}`;
                    if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca')) {
                        const contrastRatio = contrastInfo.contrastRatioAPCA();
                        const threshold = contrastInfo.contrastRatioAPCAThreshold();
                        const passes = contrastRatio && threshold ? Math.abs(contrastRatio) >= threshold : false;
                        if (!passes && contrastRatio) {
                            const issue = {
                                nodeId,
                                contrastRatio,
                                textColor: blendedTextColor,
                                backgroundColor: blendedBackgroundColor,
                                thresholdsViolated: {
                                    aa: false,
                                    aaa: false,
                                    apca: true,
                                },
                            };
                            if (textColorContrastIssues.has(key)) {
                                textColorContrastIssues.get(key).push(issue);
                            }
                            else {
                                textColorContrastIssues.set(key, [issue]);
                            }
                        }
                    }
                    else {
                        const aaThreshold = contrastInfo.contrastRatioThreshold('aa') || 0;
                        const aaaThreshold = contrastInfo.contrastRatioThreshold('aaa') || 0;
                        const contrastRatio = contrastInfo.contrastRatio() || 0;
                        if (aaThreshold > contrastRatio || aaaThreshold > contrastRatio) {
                            const issue = {
                                nodeId,
                                contrastRatio,
                                textColor: blendedTextColor,
                                backgroundColor: blendedBackgroundColor,
                                thresholdsViolated: {
                                    aa: aaThreshold > contrastRatio,
                                    aaa: aaaThreshold > contrastRatio,
                                    apca: false,
                                },
                            };
                            if (textColorContrastIssues.has(key)) {
                                textColorContrastIssues.get(key).push(issue);
                            }
                            else {
                                textColorContrastIssues.set(key, [issue]);
                            }
                        }
                    }
                }
                _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__.CSSOverviewUnusedDeclarations.checkForUnusedPositionValues(unusedDeclarations, nodeId, strings, positionIdx, topIdx, leftIdx, rightIdx, bottomIdx);
                // Ignore SVG elements as, despite being inline by default, they can have width & height specified.
                // Also ignore replaced content, for similar reasons.
                if (!isSVGNode(strings[nodeName]) && !isReplacedContent(strings[nodeName])) {
                    _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__.CSSOverviewUnusedDeclarations.checkForUnusedWidthAndHeightValues(unusedDeclarations, nodeId, strings, displayIdx, widthIdx, heightIdx);
                }
                if (verticalAlignIdx !== -1 && !isTableElementWithDefaultStyles(strings[nodeName], strings[displayIdx])) {
                    _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_4__.CSSOverviewUnusedDeclarations.checkForInvalidVerticalAlignment(unusedDeclarations, nodeId, strings, displayIdx, verticalAlignIdx);
                }
            }
        }
        return {
            backgroundColors,
            textColors,
            textColorContrastIssues,
            fillColors,
            borderColors,
            fontInfo,
            unusedDeclarations,
            elementCount,
        };
    }
    getComputedStyleForNode(nodeId) {
        return this.#cssAgent.invoke_getComputedStyleForNode({ nodeId });
    }
    async getMediaQueries() {
        const queries = await this.#cssAgent.invoke_getMediaQueries();
        const queryMap = new Map();
        if (!queries) {
            return queryMap;
        }
        for (const query of queries.medias) {
            // Ignore media queries applied to stylesheets; instead only use declared media rules.
            if (query.source === 'linkedSheet') {
                continue;
            }
            const entries = queryMap.get(query.text) || [];
            entries.push(query);
            queryMap.set(query.text, entries);
        }
        return queryMap;
    }
    async getGlobalStylesheetStats() {
        // There are no ways to pull CSSOM values directly today, due to its unserializable format,
        // so instead we execute some JS within the page that extracts the relevant data and send that instead.
        const expression = `(function() {
      let styleRules = 0;
      let inlineStyles = 0;
      let externalSheets = 0;
      const stats = {
        // Simple.
        type: new Set(),
        class: new Set(),
        id: new Set(),
        universal: new Set(),
        attribute: new Set(),

        // Non-simple.
        nonSimple: new Set()
      };

      for (const styleSheet of document.styleSheets) {
        if (styleSheet.href) {
          externalSheets++;
        } else {
          inlineStyles++;
        }

        // Attempting to grab rules can trigger a DOMException.
        // Try it and if it fails skip to the next stylesheet.
        let rules;
        try {
          rules = styleSheet.rules;
        } catch (err) {
          continue;
        }

        for (const rule of rules) {
          if ('selectorText' in rule) {
            styleRules++;

            // Each group that was used.
            for (const selectorGroup of rule.selectorText.split(',')) {
              // Each selector in the group.
              for (const selector of selectorGroup.split(\/[\\t\\n\\f\\r ]+\/g)) {
                if (selector.startsWith('.')) {
                  // Class.
                  stats.class.add(selector);
                } else if (selector.startsWith('#')) {
                  // Id.
                  stats.id.add(selector);
                } else if (selector.startsWith('*')) {
                  // Universal.
                  stats.universal.add(selector);
                } else if (selector.startsWith('[')) {
                  // Attribute.
                  stats.attribute.add(selector);
                } else {
                  // Type or non-simple selector.
                  const specialChars = \/[#\.:\\[\\]|\\+>~]\/;
                  if (specialChars.test(selector)) {
                    stats.nonSimple.add(selector);
                  } else {
                    stats.type.add(selector);
                  }
                }
              }
            }
          }
        }
      }

      return {
        styleRules,
        inlineStyles,
        externalSheets,
        stats: {
          // Simple.
          type: stats.type.size,
          class: stats.class.size,
          id: stats.id.size,
          universal: stats.universal.size,
          attribute: stats.attribute.size,

          // Non-simple.
          nonSimple: stats.nonSimple.size
        }
      }
    })()`;
        const { result } = await this.#runtimeAgent.invoke_evaluate({ expression, returnByValue: true });
        // TODO(paullewis): Handle errors properly.
        if (result.type !== 'object') {
            return;
        }
        return result.value;
    }
}
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel.register(CSSOverviewModel, { capabilities: 2 /* SDK.Target.Capability.DOM */, autostart: false });
//# sourceMappingURL=CSSOverviewModel.js.map

/***/ }),

/***/ "./panels/css_overview/CSSOverviewUnusedDeclarations.js":
/*!**************************************************************!*\
  !*** ./panels/css_overview/CSSOverviewUnusedDeclarations.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewUnusedDeclarations: () => (/* binding */ CSSOverviewUnusedDeclarations)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const UIStrings = {
    /**
     *@description Label to explain why top values are ignored
     */
    topAppliedToAStatically: '`Top` applied to a statically positioned element',
    /**
     *@description Label to explain why left (opposite to right) values are ignored.
     */
    leftAppliedToAStatically: '`Left` applied to a statically positioned element',
    /**
     *@description Label to explain why right values are ignored
     */
    rightAppliedToAStatically: '`Right` applied to a statically positioned element',
    /**
     *@description Label to explain why bottom values are ignored
     */
    bottomAppliedToAStatically: '`Bottom` applied to a statically positioned element',
    /**
     *@description Label to explain why width values are ignored
     */
    widthAppliedToAnInlineElement: '`Width` applied to an inline element',
    /**
     *@description Label to explain why height values are ignored
     */
    heightAppliedToAnInlineElement: '`Height` applied to an inline element',
    /**
     *@description Label to explain why vertical-align values are ignored
     */
    verticalAlignmentAppliedTo: 'Vertical alignment applied to element which is neither `inline` nor `table-cell`',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/css_overview/CSSOverviewUnusedDeclarations.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class CSSOverviewUnusedDeclarations {
    static add(target, key, item) {
        const values = target.get(key) || [];
        values.push(item);
        target.set(key, values);
    }
    static checkForUnusedPositionValues(unusedDeclarations, nodeId, strings, positionIdx, topIdx, leftIdx, rightIdx, bottomIdx) {
        if (strings[positionIdx] !== 'static') {
            return;
        }
        if (strings[topIdx] !== 'auto') {
            const reason = i18nString(UIStrings.topAppliedToAStatically);
            this.add(unusedDeclarations, reason, {
                declaration: `top: ${strings[topIdx]}`,
                nodeId,
            });
        }
        if (strings[leftIdx] !== 'auto') {
            const reason = i18nString(UIStrings.leftAppliedToAStatically);
            this.add(unusedDeclarations, reason, {
                declaration: `left: ${strings[leftIdx]}`,
                nodeId,
            });
        }
        if (strings[rightIdx] !== 'auto') {
            const reason = i18nString(UIStrings.rightAppliedToAStatically);
            this.add(unusedDeclarations, reason, {
                declaration: `right: ${strings[rightIdx]}`,
                nodeId,
            });
        }
        if (strings[bottomIdx] !== 'auto') {
            const reason = i18nString(UIStrings.bottomAppliedToAStatically);
            this.add(unusedDeclarations, reason, {
                declaration: `bottom: ${strings[bottomIdx]}`,
                nodeId,
            });
        }
    }
    static checkForUnusedWidthAndHeightValues(unusedDeclarations, nodeId, strings, displayIdx, widthIdx, heightIdx) {
        if (strings[displayIdx] !== 'inline') {
            return;
        }
        if (strings[widthIdx] !== 'auto') {
            const reason = i18nString(UIStrings.widthAppliedToAnInlineElement);
            this.add(unusedDeclarations, reason, {
                declaration: `width: ${strings[widthIdx]}`,
                nodeId,
            });
        }
        if (strings[heightIdx] !== 'auto') {
            const reason = i18nString(UIStrings.heightAppliedToAnInlineElement);
            this.add(unusedDeclarations, reason, {
                declaration: `height: ${strings[heightIdx]}`,
                nodeId,
            });
        }
    }
    static checkForInvalidVerticalAlignment(unusedDeclarations, nodeId, strings, displayIdx, verticalAlignIdx) {
        if (!strings[displayIdx] || strings[displayIdx].startsWith('inline') || strings[displayIdx].startsWith('table')) {
            return;
        }
        if (strings[verticalAlignIdx] !== 'baseline') {
            const reason = i18nString(UIStrings.verticalAlignmentAppliedTo);
            this.add(unusedDeclarations, reason, {
                declaration: `vertical-align: ${strings[verticalAlignIdx]}`,
                nodeId,
            });
        }
    }
}
//# sourceMappingURL=CSSOverviewUnusedDeclarations.js.map

/***/ }),

/***/ "./ui/legacy/components/color_picker/ContrastInfo.js":
/*!***********************************************************!*\
  !*** ./ui/legacy/components/color_picker/ContrastInfo.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContrastInfo: () => (/* binding */ ContrastInfo)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ContrastInfo extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    isNullInternal;
    contrastRatioInternal;
    contrastRatioAPCAInternal;
    contrastRatioThresholds;
    contrastRationAPCAThreshold;
    fgColor;
    bgColorInternal;
    colorFormatInternal;
    constructor(contrastInfo) {
        super();
        this.isNullInternal = true;
        this.contrastRatioInternal = null;
        this.contrastRatioAPCAInternal = null;
        this.contrastRatioThresholds = null;
        this.contrastRationAPCAThreshold = 0;
        this.fgColor = null;
        this.bgColorInternal = null;
        if (!contrastInfo) {
            return;
        }
        if (!contrastInfo.computedFontSize || !contrastInfo.computedFontWeight || !contrastInfo.backgroundColors ||
            contrastInfo.backgroundColors.length !== 1) {
            return;
        }
        this.isNullInternal = false;
        this.contrastRatioThresholds =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getContrastThreshold(contrastInfo.computedFontSize, contrastInfo.computedFontWeight);
        this.contrastRationAPCAThreshold =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getAPCAThreshold(contrastInfo.computedFontSize, contrastInfo.computedFontWeight);
        const bgColorText = contrastInfo.backgroundColors[0];
        const bgColor = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(bgColorText)?.asLegacyColor();
        if (bgColor) {
            this.setBgColorInternal(bgColor);
        }
    }
    isNull() {
        return this.isNullInternal;
    }
    setColor(fgColor, colorFormat) {
        this.fgColor = fgColor;
        this.colorFormatInternal = colorFormat;
        this.updateContrastRatio();
        this.dispatchEventToListeners("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */);
    }
    colorFormat() {
        return this.colorFormatInternal;
    }
    color() {
        return this.fgColor;
    }
    contrastRatio() {
        return this.contrastRatioInternal;
    }
    contrastRatioAPCA() {
        return this.contrastRatioAPCAInternal;
    }
    contrastRatioAPCAThreshold() {
        return this.contrastRationAPCAThreshold;
    }
    setBgColor(bgColor) {
        this.setBgColorInternal(bgColor);
        this.dispatchEventToListeners("ContrastInfoUpdated" /* Events.ContrastInfoUpdated */);
    }
    setBgColorInternal(bgColor) {
        this.bgColorInternal = bgColor;
        if (!this.fgColor) {
            return;
        }
        const fgRGBA = this.fgColor.rgba();
        // If we have a semi-transparent background color over an unknown
        // background, draw the line for the "worst case" scenario: where
        // the unknown background is the same color as the text.
        if (bgColor.hasAlpha()) {
            const blendedRGBA = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.blendColors(bgColor.rgba(), fgRGBA);
            this.bgColorInternal = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Legacy(blendedRGBA, "rgba" /* Common.Color.Format.RGBA */);
        }
        this.contrastRatioInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatio(fgRGBA, this.bgColorInternal.rgba());
        this.contrastRatioAPCAInternal =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(this.fgColor.rgba(), this.bgColorInternal.rgba());
    }
    bgColor() {
        return this.bgColorInternal;
    }
    updateContrastRatio() {
        if (!this.bgColorInternal || !this.fgColor) {
            return;
        }
        this.contrastRatioInternal = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatio(this.fgColor.rgba(), this.bgColorInternal.rgba());
        this.contrastRatioAPCAInternal =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.contrastRatioAPCA(this.fgColor.rgba(), this.bgColorInternal.rgba());
    }
    contrastRatioThreshold(level) {
        if (!this.contrastRatioThresholds) {
            return null;
        }
        return this.contrastRatioThresholds[level];
    }
}
//# sourceMappingURL=ContrastInfo.js.map

/***/ }),

/***/ "./ui/legacy/components/color_picker/color_picker.js":
/*!***********************************************************!*\
  !*** ./ui/legacy/components/color_picker/color_picker.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ColorFormatSpec: () => (/* reexport module object */ _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   ContrastDetails: () => (/* reexport module object */ _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   ContrastInfo: () => (/* reexport module object */ _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   ContrastOverlay: () => (/* reexport module object */ _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   FormatPickerContextMenu: () => (/* reexport module object */ _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   Spectrum: () => (/* reexport module object */ _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__)
/* harmony export */ });
/* harmony import */ var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./ui/legacy/components/color_picker/ColorFormatSpec.js");
/* harmony import */ var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContrastDetails.js */ "./ui/legacy/components/color_picker/ContrastDetails.js");
/* harmony import */ var _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContrastInfo.js */ "./ui/legacy/components/color_picker/ContrastInfo.js");
/* harmony import */ var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./ui/legacy/components/color_picker/ContrastOverlay.js");
/* harmony import */ var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./ui/legacy/components/color_picker/FormatPickerContextMenu.js");
/* harmony import */ var _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spectrum.js */ "./ui/legacy/components/color_picker/Spectrum.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







//# sourceMappingURL=color_picker.js.map

/***/ })

}]);