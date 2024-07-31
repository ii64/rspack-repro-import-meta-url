"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_css_overview_CSSOverviewModel_ts"],{

/***/ "./src/panels/css_overview/CSSOverviewModel.ts":
/*!*****************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewModel.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewModel: () => (/* binding */ CSSOverviewModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_color_picker_color_picker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/color_picker/color_picker.js */ "./src/ui/legacy/components/color_picker/color_picker.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CSSOverviewUnusedDeclarations.js */ "./src/panels/css_overview/CSSOverviewUnusedDeclarations.ts");
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
var _CSSOverviewModel_runtimeAgent, _CSSOverviewModel_cssAgent, _CSSOverviewModel_domSnapshotAgent, _CSSOverviewModel_overlayAgent;






class CSSOverviewModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel {
    constructor(target) {
        super(target);
        _CSSOverviewModel_runtimeAgent.set(this, void 0);
        _CSSOverviewModel_cssAgent.set(this, void 0);
        _CSSOverviewModel_domSnapshotAgent.set(this, void 0);
        _CSSOverviewModel_overlayAgent.set(this, void 0);
        __classPrivateFieldSet(this, _CSSOverviewModel_runtimeAgent, target.runtimeAgent(), "f");
        __classPrivateFieldSet(this, _CSSOverviewModel_cssAgent, target.cssAgent(), "f");
        __classPrivateFieldSet(this, _CSSOverviewModel_domSnapshotAgent, target.domsnapshotAgent(), "f");
        __classPrivateFieldSet(this, _CSSOverviewModel_overlayAgent, target.overlayAgent(), "f");
    }
    highlightNode(node) {
        const highlightConfig = {
            contentColor: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.PageHighlight.Content.toProtocolRGBA(),
            showInfo: true,
            contrastAlgorithm: _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.experiments.isEnabled('apca') ? _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Overlay.ContrastAlgorithm.Apca :
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_4__.Overlay.ContrastAlgorithm.Aa,
        };
        void __classPrivateFieldGet(this, _CSSOverviewModel_overlayAgent, "f").invoke_hideHighlight();
        void __classPrivateFieldGet(this, _CSSOverviewModel_overlayAgent, "f").invoke_highlightNode({ backendNodeId: node, highlightConfig });
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
                return color.hasAlpha() ? color.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEXA) : color.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEX);
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
        const { documents, strings } = await __classPrivateFieldGet(this, _CSSOverviewModel_domSnapshotAgent, "f").invoke_captureSnapshot(snapshotConfig);
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
                        backgroundColors: [blendedBackgroundColor.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.HEXA)],
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
                _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_5__.CSSOverviewUnusedDeclarations.checkForUnusedPositionValues(unusedDeclarations, nodeId, strings, positionIdx, topIdx, leftIdx, rightIdx, bottomIdx);
                // Ignore SVG elements as, despite being inline by default, they can have width & height specified.
                // Also ignore replaced content, for similar reasons.
                if (!isSVGNode(strings[nodeName]) && !isReplacedContent(strings[nodeName])) {
                    _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_5__.CSSOverviewUnusedDeclarations.checkForUnusedWidthAndHeightValues(unusedDeclarations, nodeId, strings, displayIdx, widthIdx, heightIdx);
                }
                if (verticalAlignIdx !== -1 && !isTableElementWithDefaultStyles(strings[nodeName], strings[displayIdx])) {
                    _CSSOverviewUnusedDeclarations_js__WEBPACK_IMPORTED_MODULE_5__.CSSOverviewUnusedDeclarations.checkForInvalidVerticalAlignment(unusedDeclarations, nodeId, strings, displayIdx, verticalAlignIdx);
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
        return __classPrivateFieldGet(this, _CSSOverviewModel_cssAgent, "f").invoke_getComputedStyleForNode({ nodeId });
    }
    async getMediaQueries() {
        const queries = await __classPrivateFieldGet(this, _CSSOverviewModel_cssAgent, "f").invoke_getMediaQueries();
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
        const { result } = await __classPrivateFieldGet(this, _CSSOverviewModel_runtimeAgent, "f").invoke_evaluate({ expression, returnByValue: true });
        // TODO(paullewis): Handle errors properly.
        if (result.type !== 'object') {
            return;
        }
        return result.value;
    }
}
_CSSOverviewModel_runtimeAgent = new WeakMap(), _CSSOverviewModel_cssAgent = new WeakMap(), _CSSOverviewModel_domSnapshotAgent = new WeakMap(), _CSSOverviewModel_overlayAgent = new WeakMap();
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SDKModel.SDKModel.register(CSSOverviewModel, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Capability.DOM, autostart: false });


/***/ }),

/***/ "./src/panels/css_overview/CSSOverviewUnusedDeclarations.ts":
/*!******************************************************************!*\
  !*** ./src/panels/css_overview/CSSOverviewUnusedDeclarations.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewUnusedDeclarations: () => (/* binding */ CSSOverviewUnusedDeclarations)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
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


/***/ }),

/***/ "./src/ui/legacy/components/color_picker/color_picker.ts":
/*!***************************************************************!*\
  !*** ./src/ui/legacy/components/color_picker/color_picker.ts ***!
  \***************************************************************/
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
/* harmony import */ var _ColorFormatSpec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorFormatSpec.js */ "./src/ui/legacy/components/color_picker/ColorFormatSpec.ts");
/* harmony import */ var _ContrastDetails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContrastDetails.js */ "./src/ui/legacy/components/color_picker/ContrastDetails.ts");
/* harmony import */ var _ContrastInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContrastInfo.js */ "./src/ui/legacy/components/color_picker/ContrastInfo.ts");
/* harmony import */ var _ContrastOverlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContrastOverlay.js */ "./src/ui/legacy/components/color_picker/ContrastOverlay.ts");
/* harmony import */ var _FormatPickerContextMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormatPickerContextMenu.js */ "./src/ui/legacy/components/color_picker/FormatPickerContextMenu.ts");
/* harmony import */ var _Spectrum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Spectrum.js */ "./src/ui/legacy/components/color_picker/Spectrum.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/***/ })

}]);