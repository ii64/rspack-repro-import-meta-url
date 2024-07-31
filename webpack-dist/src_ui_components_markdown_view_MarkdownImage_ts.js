"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_markdown_view_MarkdownImage_ts"],{

/***/ "./src/ui/components/markdown_view/MarkdownImage.ts":
/*!**********************************************************!*\
  !*** ./src/ui/components/markdown_view/MarkdownImage.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkdownImage: () => (/* binding */ MarkdownImage)
/* harmony export */ });
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownImage.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./src/ui/components/markdown_view/MarkdownImagesMap.ts");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
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
var _MarkdownImage_instances, _MarkdownImage_shadow, _MarkdownImage_imageData, _MarkdownImage_imageTitle, _MarkdownImage_getIconComponent, _MarkdownImage_getImageComponent, _MarkdownImage_render;




/**
 * Component to render images from parsed markdown.
 * Parsed images from markdown are not directly rendered, instead they have to be added to the MarkdownImagesMap.ts.
 * This makes sure that all icons/images are accounted for in markdown.
 */
class MarkdownImage extends HTMLElement {
    constructor() {
        super(...arguments);
        _MarkdownImage_instances.add(this);
        _MarkdownImage_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _MarkdownImage_imageData.set(this, void 0);
        _MarkdownImage_imageTitle.set(this, void 0);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _MarkdownImage_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './markdownImage.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        const { key, title } = data;
        const markdownImage = (0,_MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_3__.getMarkdownImage)(key);
        __classPrivateFieldSet(this, _MarkdownImage_imageData, markdownImage, "f");
        __classPrivateFieldSet(this, _MarkdownImage_imageTitle, title, "f");
        __classPrivateFieldGet(this, _MarkdownImage_instances, "m", _MarkdownImage_render).call(this);
    }
}
_MarkdownImage_shadow = new WeakMap(), _MarkdownImage_imageData = new WeakMap(), _MarkdownImage_imageTitle = new WeakMap(), _MarkdownImage_instances = new WeakSet(), _MarkdownImage_getIconComponent = function _MarkdownImage_getIconComponent() {
    if (!__classPrivateFieldGet(this, _MarkdownImage_imageData, "f")) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
    }
    const { src, color, width = '100%', height = '100%' } = __classPrivateFieldGet(this, _MarkdownImage_imageData, "f");
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName} .data=${{ iconPath: src, color, width, height }}></${_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.Icon.litTagName}>
    `;
}, _MarkdownImage_getImageComponent = function _MarkdownImage_getImageComponent() {
    if (!__classPrivateFieldGet(this, _MarkdownImage_imageData, "f")) {
        return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html ``;
    }
    const { src, width = '100%', height = '100%' } = __classPrivateFieldGet(this, _MarkdownImage_imageData, "f");
    return _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html `
      <img class="markdown-image" src=${src} alt=${__classPrivateFieldGet(this, _MarkdownImage_imageTitle, "f")} width=${width} height=${height}/>
    `;
}, _MarkdownImage_render = function _MarkdownImage_render() {
    if (!__classPrivateFieldGet(this, _MarkdownImage_imageData, "f")) {
        return;
    }
    const { isIcon } = __classPrivateFieldGet(this, _MarkdownImage_imageData, "f");
    const imageComponent = isIcon ? __classPrivateFieldGet(this, _MarkdownImage_instances, "m", _MarkdownImage_getIconComponent).call(this) : __classPrivateFieldGet(this, _MarkdownImage_instances, "m", _MarkdownImage_getImageComponent).call(this);
    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(imageComponent, __classPrivateFieldGet(this, _MarkdownImage_shadow, "f"), { host: this });
};
Object.defineProperty(MarkdownImage, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal `devtools-markdown-image`
});
customElements.define('devtools-markdown-image', MarkdownImage);


/***/ }),

/***/ "./src/ui/components/markdown_view/MarkdownImagesMap.ts":
/*!**************************************************************!*\
  !*** ./src/ui/components/markdown_view/MarkdownImagesMap.ts ***!
  \**************************************************************/
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


/***/ })

}]);