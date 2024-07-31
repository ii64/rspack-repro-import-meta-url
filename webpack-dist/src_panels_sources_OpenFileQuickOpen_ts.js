"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_sources_OpenFileQuickOpen_ts"],{

/***/ "./src/panels/sources/OpenFileQuickOpen.ts":
/*!*************************************************!*\
  !*** ./src/panels/sources/OpenFileQuickOpen.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenFileQuickOpen: () => (/* binding */ OpenFileQuickOpen)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./src/panels/utils/utils.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilteredUISourceCodeListProvider.js */ "./src/panels/sources/FilteredUISourceCodeListProvider.ts");
/* harmony import */ var _SourcesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SourcesView.js */ "./src/panels/sources/SourcesView.ts");
// Copyright 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






class OpenFileQuickOpen extends _FilteredUISourceCodeListProvider_js__WEBPACK_IMPORTED_MODULE_4__.FilteredUISourceCodeListProvider {
    constructor() {
        super('source-file');
    }
    attach() {
        this.setDefaultScores(_SourcesView_js__WEBPACK_IMPORTED_MODULE_5__.SourcesView.defaultUISourceCodeScores());
        super.attach();
    }
    uiSourceCodeSelected(uiSourceCode, lineNumber, columnNumber) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.SelectFileFromFilePicker);
        if (!uiSourceCode) {
            return;
        }
        if (typeof lineNumber === 'number') {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode.uiLocation(lineNumber, columnNumber));
        }
        else {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(uiSourceCode);
        }
    }
    filterProject(project) {
        return !project.isServiceProject();
    }
    renderItem(itemIndex, query, titleElement, subtitleElement) {
        super.renderItem(itemIndex, query, titleElement, subtitleElement);
        const iconElement = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
        const iconData = _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.PanelUtils.iconDataForResourceType(this.itemContentTypeAt(itemIndex));
        iconElement.data = {
            ...iconData,
            width: '20px',
            height: '20px',
        };
        titleElement.parentElement?.parentElement?.insertBefore(iconElement, titleElement.parentElement);
    }
    renderAsTwoRows() {
        return true;
    }
}


/***/ }),

/***/ "./src/panels/utils/utils.ts":
/*!***********************************!*\
  !*** ./src/panels/utils/utils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PanelUtils: () => (/* binding */ PanelUtils)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./src/models/formatter/formatter.ts");
/* harmony import */ var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./src/ui/components/diff_view/diff_view.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// These utilities are packaged in a class to allow unittests to stub or spy the implementation.
class PanelUtils {
    static iconDataForResourceType(resourceType) {
        if (resourceType.isDocument()) {
            return { iconName: 'file-document', color: 'var(--icon-file-document)' };
        }
        if (resourceType.isImage()) {
            return { iconName: 'file-image', color: 'var(--icon-file-image)' };
        }
        if (resourceType.isFont()) {
            return { iconName: 'file-font', color: 'var(--icon-file-font)' };
        }
        if (resourceType.isScript()) {
            return { iconName: 'file-script', color: 'var(--icon-file-script)' };
        }
        if (resourceType.isStyleSheet()) {
            return { iconName: 'file-stylesheet', color: 'var(--icon-file-styles)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Manifest.name()) {
            return { iconName: 'file-manifest', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Wasm.name()) {
            return { iconName: 'file-wasm', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket.name()) {
            return { iconName: 'file-websocket', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Media.name()) {
            return { iconName: 'file-media', color: 'var(--icon-file-media)' };
        }
        if (resourceType.isWebbundle()) {
            return { iconName: 'bundle', color: 'var(--icon-default)' };
        }
        if (resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch.name() ||
            resourceType.name() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR.name()) {
            return { iconName: 'file-fetch-xhr', color: 'var(--icon-default)' };
        }
        return { iconName: 'file-generic', color: 'var(--icon-default)' };
    }
    static async formatCSSChangesFromDiff(diff) {
        const indent = '  ';
        const { originalLines, currentLines, rows } = _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.buildDiffRows(diff);
        const originalRuleMaps = await buildStyleRuleMaps(originalLines.join('\n'));
        const currentRuleMaps = await buildStyleRuleMaps(currentLines.join('\n'));
        let changes = '';
        let recordedOriginalSelector, recordedCurrentSelector;
        let hasOpenDeclarationBlock = false;
        for (const { currentLineNumber, originalLineNumber, type } of rows) {
            if (type !== _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Deletion && type !== _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Addition) {
                continue;
            }
            const isDeletion = type === _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_2__.DiffView.RowType.Deletion;
            const lines = isDeletion ? originalLines : currentLines;
            // Diff line arrays starts at 0, but line numbers start at 1.
            const lineIndex = isDeletion ? originalLineNumber - 1 : currentLineNumber - 1;
            const line = lines[lineIndex].trim();
            const { declarationIDToStyleRule, styleRuleIDToStyleRule } = isDeletion ? originalRuleMaps : currentRuleMaps;
            let styleRule;
            let prefix = '';
            if (declarationIDToStyleRule.has(lineIndex)) {
                styleRule = declarationIDToStyleRule.get(lineIndex);
                const selector = styleRule.selector;
                // Use the equality of selector strings as a best-effort check for the equality of style rules.
                if (selector !== recordedOriginalSelector && selector !== recordedCurrentSelector) {
                    prefix += `${selector} {\n`;
                }
                prefix += indent;
                hasOpenDeclarationBlock = true;
            }
            else {
                if (hasOpenDeclarationBlock) {
                    prefix = '}\n\n';
                    hasOpenDeclarationBlock = false;
                }
                if (styleRuleIDToStyleRule.has(lineIndex)) {
                    styleRule = styleRuleIDToStyleRule.get(lineIndex);
                }
            }
            const processedLine = isDeletion ? `/* ${line} */` : line;
            changes += prefix + processedLine + '\n';
            if (isDeletion) {
                recordedOriginalSelector = styleRule?.selector;
            }
            else {
                recordedCurrentSelector = styleRule?.selector;
            }
        }
        if (changes.length > 0) {
            changes += '}';
        }
        return changes;
    }
    static highlightElement(element) {
        element.scrollIntoViewIfNeeded();
        element.animate([
            { offset: 0, backgroundColor: 'rgba(255, 255, 0, 0.2)' },
            { offset: 0.1, backgroundColor: 'rgba(255, 255, 0, 0.7)' },
            { offset: 1, backgroundColor: 'transparent' },
        ], { duration: 2000, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
    }
}
async function buildStyleRuleMaps(content) {
    const rules = await new Promise(res => {
        const rules = [];
        _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_1__.FormatterWorkerPool.formatterWorkerPool().parseCSS(content, (isLastChunk, currentRules) => {
            rules.push(...currentRules);
            if (isLastChunk) {
                res(rules);
            }
        });
    });
    // We use line numbers as unique IDs for rules and declarations
    const declarationIDToStyleRule = new Map();
    const styleRuleIDToStyleRule = new Map();
    for (const rule of rules) {
        if ('styleRange' in rule) {
            const selector = rule.selectorText.split('\n').pop()?.trim();
            if (!selector) {
                continue;
            }
            const styleRule = { rule, selector };
            styleRuleIDToStyleRule.set(rule.styleRange.startLine, styleRule);
            for (const property of rule.properties) {
                declarationIDToStyleRule.set(property.range.startLine, styleRule);
            }
        }
    }
    return { declarationIDToStyleRule, styleRuleIDToStyleRule };
}


/***/ }),

/***/ "./src/ui/components/diff_view/diff_view.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/diff_view/diff_view.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiffView: () => (/* reexport module object */ _DiffView_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _DiffView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DiffView.js */ "./src/ui/components/diff_view/DiffView.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



/***/ })

}]);