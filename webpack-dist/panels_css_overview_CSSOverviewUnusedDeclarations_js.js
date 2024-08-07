"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_CSSOverviewUnusedDeclarations_js"],{

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

/***/ })

}]);