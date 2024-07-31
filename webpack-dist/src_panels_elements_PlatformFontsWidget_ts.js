"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_PlatformFontsWidget_ts"],{

/***/ "./src/panels/elements/ComputedStyleModel.ts":
/*!***************************************************!*\
  !*** ./src/panels/elements/ComputedStyleModel.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyle: () => (/* binding */ ComputedStyle),
/* harmony export */   ComputedStyleModel: () => (/* binding */ ComputedStyleModel),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ComputedStyleModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor() {
        super();
        Object.defineProperty(this, "nodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cssModelInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "eventListeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frameResizedTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "computedStylePromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nodeInternal = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        this.cssModelInternal = null;
        this.eventListeners = [];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.onNodeChanged, this);
    }
    node() {
        return this.nodeInternal;
    }
    cssModel() {
        return this.cssModelInternal && this.cssModelInternal.isEnabled() ? this.cssModelInternal : null;
    }
    onNodeChanged(event) {
        this.nodeInternal = event.data;
        this.updateModel(this.nodeInternal ? this.nodeInternal.domModel().cssModel() : null);
        this.onComputedStyleChanged(null);
    }
    updateModel(cssModel) {
        if (this.cssModelInternal === cssModel) {
            return;
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
        this.cssModelInternal = cssModel;
        const domModel = cssModel ? cssModel.domModel() : null;
        const resourceTreeModel = cssModel ? cssModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel) : null;
        if (cssModel && domModel && resourceTreeModel) {
            this.eventListeners = [
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetAdded, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetChanged, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.FontsUpdated, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.MediaQueryResultChanged, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.PseudoStateForced, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.ModelWasEnabled, this.onComputedStyleChanged, this),
                domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.DOMMutated, this.onDOMModelChanged, this),
                resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameResized, this.onFrameResized, this),
            ];
        }
    }
    onComputedStyleChanged(event) {
        delete this.computedStylePromise;
        this.dispatchEventToListeners(Events.ComputedStyleChanged, event?.data ?? null);
    }
    onDOMModelChanged(event) {
        // Any attribute removal or modification can affect the styles of "related" nodes.
        const node = event.data;
        if (!this.nodeInternal ||
            this.nodeInternal !== node && node.parentNode !== this.nodeInternal.parentNode &&
                !node.isAncestor(this.nodeInternal)) {
            return;
        }
        this.onComputedStyleChanged(null);
    }
    onFrameResized() {
        function refreshContents() {
            this.onComputedStyleChanged(null);
            delete this.frameResizedTimer;
        }
        if (this.frameResizedTimer) {
            clearTimeout(this.frameResizedTimer);
        }
        this.frameResizedTimer = window.setTimeout(refreshContents.bind(this), 100);
    }
    elementNode() {
        const node = this.node();
        if (!node) {
            return null;
        }
        return node.enclosingElementOrSelf();
    }
    async fetchComputedStyle() {
        const elementNode = this.elementNode();
        const cssModel = this.cssModel();
        if (!elementNode || !cssModel) {
            return null;
        }
        const nodeId = elementNode.id;
        if (!nodeId) {
            return null;
        }
        if (!this.computedStylePromise) {
            this.computedStylePromise = cssModel.getComputedStyle(nodeId).then(verifyOutdated.bind(this, elementNode));
        }
        return this.computedStylePromise;
        function verifyOutdated(elementNode, style) {
            return elementNode === this.elementNode() && style ? new ComputedStyle(elementNode, style) :
                null;
        }
    }
}
var Events;
(function (Events) {
    Events["ComputedStyleChanged"] = "ComputedStyleChanged";
})(Events || (Events = {}));
class ComputedStyle {
    constructor(node, computedStyle) {
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "computedStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.node = node;
        this.computedStyle = computedStyle;
    }
}


/***/ }),

/***/ "./src/panels/elements/PlatformFontsWidget.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/PlatformFontsWidget.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlatformFontsWidget: () => (/* binding */ PlatformFontsWidget)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './platformFontsWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./src/panels/elements/ComputedStyleModel.ts");
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
    constructor(sharedModel) {
        super(true);
        Object.defineProperty(this, "sharedModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sectionTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "fontStatsSection", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.sharedModel = sharedModel;
        this.sharedModel.addEventListener(_ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_3__.Events.ComputedStyleChanged, this.update, this);
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
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './platformFontsWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);