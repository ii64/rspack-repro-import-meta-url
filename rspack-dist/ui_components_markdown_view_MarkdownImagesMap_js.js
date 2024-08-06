"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_markdown_view_MarkdownImagesMap_js"], {
"./ui/components/markdown_view/MarkdownImagesMap.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getMarkdownImage: function() { return getMarkdownImage; },
  markdownImages: function() { return markdownImages; }
});
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
*/ // NOTE: This is only exported for tests, and it should not be
// imported in any component, instead add image data in map and
// use getMarkdownImage to get the appropriate image data.
var markdownImages = new Map([]);
var getMarkdownImage = function(key) {
    var image = markdownImages.get(key);
    if (!image) {
        throw new Error("Markdown image with key '".concat(key, "' is not available, please check MarkdownImagesMap.ts"));
    }
    return image;
}; //# sourceMappingURL=MarkdownImagesMap.js.map


}),

}]);