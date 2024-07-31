"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_markdown_view_MarkdownImagesMap_ts"],{

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