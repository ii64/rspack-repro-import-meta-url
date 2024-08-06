"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_PlatformFontsWidget_js"],{

/***/ "./panels/elements/PlatformFontsWidget.js":
/*!************************************************!*\
  !*** ./panels/elements/PlatformFontsWidget.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlatformFontsWidget: () => (/* binding */ PlatformFontsWidget)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _platformFontsWidget_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platformFontsWidget.css.js */ "./panels/elements/platformFontsWidget.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */



const UIStrings = {
    /**
     *@description Section title text content in Platform Fonts Widget of the Elements panel
     */
    renderedFonts: 'Rendered Fonts',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */
    familyName: 'Family name',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */
    postScriptName: 'PostScript name',
    /**
     *@description Font property title text content in Platform Fonts Widget of the Elements panel
     */
    fontOrigin: 'Font origin',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel
     */
    networkResource: 'Network resource',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel
     */
    localFile: 'Local file',
    /**
     *@description Text in Platform Fonts Widget of the Elements panel. Indicates a number of glyphs (characters) .
     */
    dGlyphs: '{n, plural, =1 {(# glyph)} other {(# glyphs)}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/elements/PlatformFontsWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class PlatformFontsWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ThrottledWidget.ThrottledWidget {
    sharedModel;
    sectionTitle;
    fontStatsSection;
    constructor(sharedModel) {
        super(true);
        this.sharedModel = sharedModel;
        this.sharedModel.addEventListener("ComputedStyleChanged" /* Events.ComputedStyleChanged */, this.update, this);
        this.sectionTitle = document.createElement('div');
        this.sectionTitle.classList.add('title');
        this.contentElement.classList.add('platform-fonts');
        this.contentElement.appendChild(this.sectionTitle);
        this.sectionTitle.textContent = i18nString(UIStrings.renderedFonts);
        this.fontStatsSection = this.contentElement.createChild('div', 'stats-section');
    }
    doUpdate() {
        const cssModel = this.sharedModel.cssModel();
        const node = this.sharedModel.node();
        if (!node || !cssModel) {
            return Promise.resolve();
        }
        return cssModel.getPlatformFonts(node.id).then(this.refreshUI.bind(this, node));
    }
    refreshUI(node, platformFonts) {
        if (this.sharedModel.node() !== node) {
            return;
        }
        this.fontStatsSection.removeChildren();
        const isEmptySection = !platformFonts || !platformFonts.length;
        this.sectionTitle.classList.toggle('hidden', isEmptySection);
        if (isEmptySection || !platformFonts) {
            return;
        }
        platformFonts.sort(function (a, b) {
            return b.glyphCount - a.glyphCount;
        });
        for (const platformFont of platformFonts) {
            const fontStatElement = this.fontStatsSection.createChild('div', 'font-stats-item');
            const familyNameElement = fontStatElement.createChild('div');
            familyNameElement.textContent = `${UIStrings.familyName}: ${platformFont.familyName}`;
            const postScriptNameElement = fontStatElement.createChild('div');
            postScriptNameElement.textContent = `${UIStrings.postScriptName}: ${platformFont.postScriptName}`;
            const fontOriginElement = fontStatElement.createChild('div');
            const fontOrigin = platformFont.isCustomFont ? i18nString(UIStrings.networkResource) : i18nString(UIStrings.localFile);
            fontOriginElement.textContent = `${UIStrings.fontOrigin}: ${fontOrigin}`;
            const fontUsageElement = fontOriginElement.createChild('span', 'font-usage');
            const usage = platformFont.glyphCount;
            fontUsageElement.textContent = i18nString(UIStrings.dGlyphs, { n: usage });
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_platformFontsWidget_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]]);
    }
}
//# sourceMappingURL=PlatformFontsWidget.js.map

/***/ }),

/***/ "./panels/elements/platformFontsWidget.css.js":
/*!****************************************************!*\
  !*** ./panels/elements/platformFontsWidget.css.js ***!
  \****************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  user-select: text;
}

.platform-fonts {
  flex-shrink: 0;
}

.font-usage {
  color: var(--sys-color-token-subtle);
  padding-left: 3px;
}

.title {
  padding: 0 5px;
  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: var(--sys-color-divider);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 24px;
  background-color: var(--sys-color-surface2);
  display: flex;
  align-items: center;
}

.font-stats-item {
  padding: 5px 1em;

  div {
    margin-bottom: 2px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--sys-color-divider);
  }
}

/*# sourceURL=platformFontsWidget.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);