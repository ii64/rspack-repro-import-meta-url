"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_RequestPreviewView_js"],{

/***/ "./panels/network/RequestHTMLView.js":
/*!*******************************************!*\
  !*** ./panels/network/RequestHTMLView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestHTMLView: () => (/* binding */ RequestHTMLView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _requestHTMLView_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestHTMLView.css.js */ "./panels/network/requestHTMLView.css.js");
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
    dataURL;
    constructor(dataURL) {
        super(true);
        this.dataURL = dataURL;
        this.contentElement.classList.add('html', 'request-view');
    }
    static create(contentData) {
        const dataURL = contentData.asDataUrl();
        return dataURL ? new RequestHTMLView(dataURL) : null;
    }
    wasShown() {
        this.createIFrame();
        this.registerCSSFiles([_requestHTMLView_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]]);
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
//# sourceMappingURL=RequestHTMLView.js.map

/***/ }),

/***/ "./panels/network/RequestPreviewView.js":
/*!**********************************************!*\
  !*** ./panels/network/RequestPreviewView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestPreviewView: () => (/* binding */ RequestPreviewView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/network/components/components.js");
/* harmony import */ var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./panels/network/RequestHTMLView.js");
/* harmony import */ var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */ var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./panels/network/SignedExchangeInfoView.js");
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
     *@description Text in Request Preview View of the Network panel
     */
    failedToLoadResponseData: 'Failed to load response data',
    /**
     *@description Text in Request Preview View of the Network panel
     */
    previewNotAvailable: 'Preview not available',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/RequestPreviewView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class RequestPreviewView extends _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_8__.RequestResponseView {
    constructor(request) {
        super(request);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane('preview').track({ resize: true })}`);
    }
    async showPreview() {
        const view = await super.showPreview();
        if (!(view instanceof _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.View.SimpleView)) {
            return view;
        }
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Toolbar('network-item-preview-toolbar', this.element);
        void view.toolbarItems().then(items => {
            items.map(item => toolbar.appendToolbarItem(item));
        });
        return view;
    }
    async htmlPreview() {
        const contentData = await this.request.requestContentData();
        if (_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData.isError(contentData)) {
            return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.EmptyWidget.EmptyWidget(i18nString(UIStrings.failedToLoadResponseData) + ': ' + contentData.error);
        }
        const allowlist = new Set(['text/html', 'text/plain', 'application/xhtml+xml']);
        if (!allowlist.has(this.request.mimeType)) {
            return null;
        }
        // http://crbug.com/767393 - DevTools should recognize JSON regardless of the content type
        const jsonView = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.JSONView.JSONView.createView(contentData.text);
        if (jsonView) {
            return jsonView;
        }
        return _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_7__.RequestHTMLView.create(contentData);
    }
    async createPreview() {
        if (this.request.signedExchangeInfo()) {
            return new _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_9__.SignedExchangeInfoView(this.request);
        }
        if (this.request.webBundleInfo()) {
            return _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_2__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox, new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.WebBundleInfoView.WebBundleInfoView(this.request));
        }
        const htmlErrorPreview = await this.htmlPreview();
        if (htmlErrorPreview) {
            return htmlErrorPreview;
        }
        const provided = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.PreviewFactory.PreviewFactory.createPreview(this.request, this.request.mimeType);
        if (provided) {
            return provided;
        }
        return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.EmptyWidget.EmptyWidget(i18nString(UIStrings.previewNotAvailable));
    }
}
//# sourceMappingURL=RequestPreviewView.js.map

/***/ }),

/***/ "./panels/network/RequestResponseView.js":
/*!***********************************************!*\
  !*** ./panels/network/RequestResponseView.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestResponseView: () => (/* binding */ RequestResponseView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
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
    request;
    contentViewPromise;
    constructor(request) {
        super();
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
//# sourceMappingURL=RequestResponseView.js.map

/***/ }),

/***/ "./panels/network/components/WebBundleInfoView.css.js":
/*!************************************************************!*\
  !*** ./panels/network/components/WebBundleInfoView.css.js ***!
  \************************************************************/
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
:host {
  --icon-padding: 4px;
}

.header {
  display: flex;
  font-weight: bold;
  padding: calc(2 * var(--icon-padding)) var(--icon-padding);
  line-height: 20px;
}

.icon {
  margin: 0 var(--icon-padding);
}

/*# sourceURL=WebBundleInfoView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/components/WebBundleInfoView.js":
/*!********************************************************!*\
  !*** ./panels/network/components/WebBundleInfoView.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebBundleInfoView: () => (/* binding */ WebBundleInfoView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../panels/utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _WebBundleInfoView_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WebBundleInfoView.css.js */ "./panels/network/components/WebBundleInfoView.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__;
const UIStrings = {
    /**
     *@description Header for the column that contains URL of the resource in a web bundle.
     */
    bundledResource: 'Bundled resource',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/components/WebBundleInfoView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class WebBundleInfoView extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_5__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_6__.literal `devtools-web-bundle-info`;
    #shadow = this.attachShadow({ mode: 'open' });
    #webBundleInfo;
    #webBundleName;
    constructor(request) {
        super();
        const webBundleInfo = request.webBundleInfo();
        if (!webBundleInfo) {
            throw new Error('Trying to render a Web Bundle info without providing data');
        }
        this.#webBundleInfo = webBundleInfo;
        this.#webBundleName = request.parsedURL.lastPathComponent;
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('webbundle').track({ resize: true })}`);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_WebBundleInfoView_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]];
    }
    async render() {
        const rows = this.#webBundleInfo.resourceUrls?.map(url => {
            const mimeType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.mimeFromURL(url) || null;
            const resourceType = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeTypeOverride(mimeType) ||
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(mimeType);
            const iconData = _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.PanelUtils.iconDataForResourceType(resourceType);
            return {
                cells: [
                    {
                        columnId: 'url',
                        value: null,
                        renderer() {
                            return html `
                <div style="display: flex;">
                  <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="icon"
                    .data=${{ ...iconData, width: '20px' }}>
                  </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
                  <span>${url}</span>
                </div>`;
                        },
                    },
                ],
            };
        });
        render(html `
      <div class="header">
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="icon"
          .data=${{ color: 'var(--icon-default)', iconName: 'bundle', width: '20px' }}>
        </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
        <span>${this.#webBundleName}</span>
        <x-link href="https://web.dev/web-bundles/#explaining-web-bundles"
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.link('webbundle-explainer').track({
            click: true,
        })}>
          <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName} class="icon"
            .data=${{ color: 'var(--icon-default)', iconName: 'help', width: '16px' }}>
          </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon.litTagName}>
        </x-link>
      </div>
      <div>
        <${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGrid.litTagName}
          .data=${{
            columns: [
                {
                    id: 'url',
                    title: i18nString(UIStrings.bundledResource),
                    widthWeighting: 1,
                    visible: true,
                    hideable: false,
                },
            ],
            rows: rows,
            activeSort: null,
        }}>
        </${_ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGrid.litTagName}>
      </div>`, this.#shadow, { host: this });
    }
}
customElements.define('devtools-web-bundle-info', WebBundleInfoView);
//# sourceMappingURL=WebBundleInfoView.js.map

/***/ }),

/***/ "./panels/network/components/components.js":
/*!*************************************************!*\
  !*** ./panels/network/components/components.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EditableSpan: () => (/* reexport module object */ _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   HeaderSectionRow: () => (/* reexport module object */ _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   RequestHeaderSection: () => (/* reexport module object */ _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   RequestHeadersView: () => (/* reexport module object */ _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   RequestTrustTokensView: () => (/* reexport module object */ _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   ResponseHeaderSection: () => (/* reexport module object */ _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   WebBundleInfoView: () => (/* reexport module object */ _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__)
/* harmony export */ });
/* harmony import */ var _EditableSpan_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditableSpan.js */ "./panels/network/components/EditableSpan.js");
/* harmony import */ var _HeaderSectionRow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderSectionRow.js */ "./panels/network/components/HeaderSectionRow.js");
/* harmony import */ var _RequestHeaderSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RequestHeaderSection.js */ "./panels/network/components/RequestHeaderSection.js");
/* harmony import */ var _RequestHeadersView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequestHeadersView.js */ "./panels/network/components/RequestHeadersView.js");
/* harmony import */ var _RequestTrustTokensView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RequestTrustTokensView.js */ "./panels/network/components/RequestTrustTokensView.js");
/* harmony import */ var _ResponseHeaderSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ResponseHeaderSection.js */ "./panels/network/components/ResponseHeaderSection.js");
/* harmony import */ var _WebBundleInfoView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WebBundleInfoView.js */ "./panels/network/components/WebBundleInfoView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








//# sourceMappingURL=components.js.map

/***/ }),

/***/ "./panels/network/requestHTMLView.css.js":
/*!***********************************************!*\
  !*** ./panels/network/requestHTMLView.css.js ***!
  \***********************************************/
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
 * Copyright (c) 2018 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.html-preview-frame {
  box-shadow: var(--drop-shadow);
  /* We always want a white background, even in dark mode */
  background: var(--ref-palette-neutral100);
  flex-grow: 1;
  margin: 20px;
}

/*# sourceURL=requestHTMLView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);