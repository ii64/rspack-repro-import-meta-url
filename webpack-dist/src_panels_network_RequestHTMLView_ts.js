"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_RequestHTMLView_ts"],{

/***/ "./src/panels/network/RequestHTMLView.ts":
/*!***********************************************!*\
  !*** ./src/panels/network/RequestHTMLView.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestHTMLView: () => (/* binding */ RequestHTMLView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './requestHTMLView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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


class RequestHTMLView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.VBox {
    constructor(dataURL) {
        super(true);
        Object.defineProperty(this, "dataURL", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.dataURL = dataURL;
        this.contentElement.classList.add('html', 'request-view');
    }
    static create(contentData) {
        const dataURL = contentData.asDataUrl();
        return dataURL ? new RequestHTMLView(dataURL) : null;
    }
    wasShown() {
        this.createIFrame();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './requestHTMLView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    willHide() {
        this.contentElement.removeChildren();
    }
    createIFrame() {
        // We need to create iframe again each time because contentDocument
        // is deleted when iframe is removed from its parent.
        this.contentElement.removeChildren();
        const iframe = document.createElement('iframe');
        iframe.className = 'html-preview-frame';
        iframe.setAttribute('sandbox', ''); // Forbid to run JavaScript and set unique origin.
        iframe.setAttribute('csp', 'default-src \'none\';img-src data:;style-src \'unsafe-inline\'');
        iframe.setAttribute('src', this.dataURL);
        iframe.tabIndex = -1;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.ARIAUtils.markAsPresentation(iframe);
        this.contentElement.appendChild(iframe);
    }
}


/***/ })

}]);