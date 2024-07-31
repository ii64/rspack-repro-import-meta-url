"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_ImagePreviewPopover_ts"],{

/***/ "./src/panels/elements/ImagePreviewPopover.ts":
/*!****************************************************!*\
  !*** ./src/panels/elements/ImagePreviewPopover.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImagePreviewPopover: () => (/* binding */ ImagePreviewPopover)
/* harmony export */ });
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * ImagePreviewPopover sets listeners on the container element to display
 * an image preview if needed. The image URL comes from the event (mouseover) target
 * in a propery identified by HrefSymbol. To enable preview for any child element
 * set the property HrefSymbol.
 */
class ImagePreviewPopover {
    constructor(container, getLinkElement, getDOMNode) {
        Object.defineProperty(this, "getLinkElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "getDOMNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "popover", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.getLinkElement = getLinkElement;
        this.getDOMNode = getDOMNode;
        this.popover =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.PopoverHelper.PopoverHelper(container, this.handleRequest.bind(this), 'elements.image-preview');
        this.popover.setHasPadding(true);
        this.popover.setTimeout(0, 100);
    }
    handleRequest(event) {
        const link = this.getLinkElement(event);
        if (!link) {
            return null;
        }
        const href = elementToURLMap.get(link);
        if (!href) {
            return null;
        }
        return {
            box: link.boxInWindow(),
            hide: undefined,
            show: async (popover) => {
                const node = this.getDOMNode(link);
                if (!node) {
                    return false;
                }
                const precomputedFeatures = await _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.ImagePreview.ImagePreview.loadDimensionsForNode(node);
                const preview = await _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_0__.ImagePreview.ImagePreview.build(node.domModel().target(), href, true, { imageAltText: undefined, precomputedFeatures });
                if (preview) {
                    popover.contentElement.appendChild(preview);
                }
                return Boolean(preview);
            },
        };
    }
    hide() {
        this.popover.hidePopover();
    }
    static setImageUrl(element, url) {
        elementToURLMap.set(element, url);
        return element;
    }
    static getImageURL(element) {
        return elementToURLMap.get(element);
    }
}
const elementToURLMap = new WeakMap();


/***/ })

}]);