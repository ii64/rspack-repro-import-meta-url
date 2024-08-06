"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_markdown_view_MarkdownImage_js"],{

/***/ "./ui/components/markdown_view/MarkdownImage.js":
/*!******************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownImage.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownImage: () => (/* binding */ MarkdownImage)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _markdownImage_css_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./markdownImage.css.js */ "./ui/components/markdown_view/markdownImage.css.js");
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/**
 * Component to render images from parsed markdown.
 * Parsed images from markdown are not directly rendered, instead they have to be added to the MarkdownImagesMap.ts.
 * This makes sure that all icons/images are accounted for in markdown.
 */
class MarkdownImage extends HTMLElement {
    static litTagName = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-image`;
    #shadow = this.attachShadow({ mode: 'open' });
    #imageData;
    #imageTitle;
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_markdownImage_css_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
    }
    set data(data) {
        const { key, title } = data;
        const markdownImage = (0,_MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__.getMarkdownImage)(key);
        this.#imageData = markdownImage;
        this.#imageTitle = title;
        this.#render();
    }
    #getIconComponent() {
        if (!this.#imageData) {
            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
        }
        const { src, color, width = '100%', height = '100%' } = this.#imageData;
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} .data=${{ iconPath: src, color, width, height }}></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}>
    `;
    }
    #getImageComponent() {
        if (!this.#imageData) {
            return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
        }
        const { src, width = '100%', height = '100%' } = this.#imageData;
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <img class="markdown-image" src=${src} alt=${this.#imageTitle} width=${width} height=${height}/>
    `;
    }
    #render() {
        if (!this.#imageData) {
            return;
        }
        const { isIcon } = this.#imageData;
        const imageComponent = isIcon ? this.#getIconComponent() : this.#getImageComponent();
        _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(imageComponent, this.#shadow, { host: this });
    }
}
customElements.define('devtools-markdown-image', MarkdownImage);
//# sourceMappingURL=MarkdownImage.js.map

/***/ }),

/***/ "./ui/components/markdown_view/MarkdownImagesMap.js":
/*!**********************************************************!*\
  !*** ./ui/components/markdown_view/MarkdownImagesMap.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMarkdownImage: () => (/* binding */ getMarkdownImage),
/* harmony export */   markdownImages: () => (/* binding */ markdownImages)
/* harmony export */ });
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * src for image is relative url for image location.
 * @example icon
 * [
 *   'feedbackIcon',
 *   {
 *     src: 'Images/review.svg',
 *     isIcon: true,
 *     width: '20px',
 *     height: '20px',
 *     color: 'var(--icon-disabled)',
 *   },
 * ]
 *
*/
// NOTE: This is only exported for tests, and it should not be
// imported in any component, instead add image data in map and
// use getMarkdownImage to get the appropriate image data.
const markdownImages = new Map([]);
const getMarkdownImage = (key) => {
    const image = markdownImages.get(key);
    if (!image) {
        throw new Error(`Markdown image with key '${key}' is not available, please check MarkdownImagesMap.ts`);
    }
    return image;
};
//# sourceMappingURL=MarkdownImagesMap.js.map

/***/ }),

/***/ "./ui/components/markdown_view/markdownImage.css.js":
/*!**********************************************************!*\
  !*** ./ui/components/markdown_view/markdownImage.css.js ***!
  \**********************************************************/
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.markdown-image {
  display: block;
}

/*# sourceURL=markdownImage.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);