"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_RequestResponseView_ts"],{

/***/ "./src/panels/network/RequestResponseView.ts":
/*!***************************************************!*\
  !*** ./src/panels/network/RequestResponseView.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestResponseView: () => (/* binding */ RequestResponseView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
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







const UIStrings = {
    /**
     *@description Text in Request Response View of the Network panel
     */
    thisRequestHasNoResponseData: 'This request has no response data available.',
    /**
     *@description Text in Request Preview View of the Network panel
     */
    failedToLoadResponseData: 'Failed to load response data',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/RequestResponseView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class RequestResponseView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    constructor(request) {
        super();
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "contentViewPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.classList.add('request-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('response').track({ resize: true })}`);
        this.request = request;
        this.contentViewPromise = null;
    }
    static async sourceViewForRequest(request) {
        let sourceView = requestToSourceView.get(request);
        if (sourceView !== undefined) {
            return sourceView;
        }
        const contentData = await request.requestStreamingContent();
        // Note: Even though WASM is binary data, the source view will disassemble it and show a text representation.
        if (_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.StreamingContentData.isError(contentData) ||
            !(contentData.isTextContent || contentData.mimeType === 'application/wasm')) {
            requestToSourceView.delete(request);
            return null;
        }
        let mimeType;
        // If the main document is of type JSON (or any JSON subtype), do not use the more generic canonical MIME type,
        // which would prevent the JSON from being pretty-printed. See https://crbug.com/406900
        if (_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.simplifyContentType(request.mimeType) === 'application/json') {
            mimeType = request.mimeType;
        }
        else {
            mimeType = request.resourceType().canonicalMimeType() || request.mimeType;
        }
        const isMinified = contentData.mimeType === 'application/wasm' ?
            false :
            _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.TextUtils.isMinified(contentData.content().text);
        const mediaType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mediaTypeForMetrics(mimeType, request.resourceType().isFromSourceMap(), isMinified);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.networkPanelResponsePreviewOpened(mediaType);
        sourceView = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.ResourceSourceFrame.ResourceSourceFrame.createSearchableView(request, mimeType);
        requestToSourceView.set(request, sourceView);
        return sourceView;
    }
    wasShown() {
        void this.doShowPreview();
    }
    doShowPreview() {
        if (!this.contentViewPromise) {
            this.contentViewPromise = this.showPreview();
        }
        return this.contentViewPromise;
    }
    async showPreview() {
        const responseView = await this.createPreview();
        responseView.show(this.element);
        return responseView;
    }
    async createPreview() {
        const contentData = await this.request.requestStreamingContent();
        if (_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__.StreamingContentData.isError(contentData)) {
            return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.failedToLoadResponseData) + ': ' + contentData.error);
        }
        const sourceView = await RequestResponseView.sourceViewForRequest(this.request);
        if (!sourceView || this.request.statusCode === 204) {
            return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.EmptyWidget.EmptyWidget(i18nString(UIStrings.thisRequestHasNoResponseData));
        }
        return sourceView;
    }
    async revealPosition(position) {
        const view = await this.doShowPreview();
        if (view instanceof _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__.ResourceSourceFrame.SearchableContainer) {
            void view.revealPosition(position);
        }
    }
}
const requestToSourceView = new WeakMap();


/***/ })

}]);