"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_RequestPayloadView_js"],{

/***/ "./panels/network/RequestPayloadView.js":
/*!**********************************************!*\
  !*** ./panels/network/RequestPayloadView.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Category: () => (/* binding */ Category),
/* harmony export */   RequestPayloadView: () => (/* binding */ RequestPayloadView)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */ var _ui_legacy_components_object_ui_objectPropertiesSection_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectPropertiesSection.css.js */ "./ui/legacy/components/object_ui/objectPropertiesSection.css.js");
/* harmony import */ var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _requestPayloadTree_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./requestPayloadTree.css.js */ "./panels/network/requestPayloadTree.css.js");
/* harmony import */ var _requestPayloadView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./requestPayloadView.css.js */ "./panels/network/requestPayloadView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) IBM Corp. 2009  All rights reserved.
 * Copyright (C) 2010 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */





// eslint-disable-next-line rulesdir/es_modules_import

// eslint-disable-next-line rulesdir/es_modules_import





const UIStrings = {
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel and Network pane request.
     */
    copyValue: 'Copy value',
    /**
     * @description Text in Request Payload View of the Network panel. This is a noun-phrase meaning the
     * payload of a network request.
     */
    requestPayload: 'Request Payload',
    /**
     *@description Text in Request Payload View of the Network panel
     */
    unableToDecodeValue: '(unable to decode value)',
    /**
     *@description Text in Request Payload View of the Network panel
     */
    queryStringParameters: 'Query String Parameters',
    /**
     *@description Text in Request Payload View of the Network panel
     */
    formData: 'Form Data',
    /**
     *@description Text to show more content
     */
    showMore: 'Show more',
    /**
     *@description Text for toggling the view of payload data (e.g. query string parameters) from source to parsed in the payload tab
     */
    viewParsed: 'View parsed',
    /**
     *@description Text to show an item is empty
     */
    empty: '(empty)',
    /**
     *@description Text for toggling the view of payload data (e.g. query string parameters) from parsed to source in the payload tab
     */
    viewSource: 'View source',
    /**
     * @description Text for toggling payload data (e.g. query string parameters) from decoded to
     * encoded in the payload tab or in the cookies preview. URL-encoded is a different data format for
     * the same data, which the user sees when they click this command.
     */
    viewUrlEncoded: 'View URL-encoded',
    /**
     *@description Text for toggling payload data (e.g. query string parameters) from encoded to decoded in the payload tab or in the cookies preview
     */
    viewDecoded: 'View decoded',
    /**
     *@description Text for toggling payload data (e.g. query string parameters) from decoded to
     * encoded in the payload tab or in the cookies preview. URL-encoded is a different data format for
     * the same data, which the user sees when they click this command.
     */
    viewUrlEncodedL: 'view URL-encoded',
    /**
     *@description Text in Request Payload View of the Network panel
     */
    viewDecodedL: 'view decoded',
    /**
     *@description Text in Request Payload View of the Network panel
     */
    viewParsedL: 'view parsed',
    /**
     *@description Text in Request Payload View of the Network panel
     */
    viewSourceL: 'view source',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/RequestPayloadView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class RequestPayloadView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox {
    request;
    decodeRequestParameters;
    queryStringCategory;
    formDataCategory;
    requestPayloadCategory;
    constructor(request) {
        super();
        this.element.classList.add('request-payload-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('payload').track({ resize: true })}`);
        this.request = request;
        this.decodeRequestParameters = true;
        const contentType = request.requestContentType();
        if (contentType) {
            this.decodeRequestParameters = Boolean(contentType.match(/^application\/x-www-form-urlencoded\s*(;.*)?$/i));
        }
        const root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeOutlineInShadow();
        root.registerCSSFiles([_ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_6__["default"], _ui_legacy_components_object_ui_objectPropertiesSection_css_js__WEBPACK_IMPORTED_MODULE_5__["default"], _requestPayloadTree_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
        root.element.classList.add('request-payload-tree');
        root.makeDense();
        this.element.appendChild(root.element);
        this.queryStringCategory = new Category(root, 'query-string');
        this.formDataCategory = new Category(root, 'form-data');
        this.requestPayloadCategory = new Category(root, 'request-payload', i18nString(UIStrings.requestPayload));
    }
    wasShown() {
        this.registerCSSFiles([_requestPayloadView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.refreshFormData, this);
        this.refreshQueryString();
        void this.refreshFormData();
        // this._root.select(/* omitFocus */ true, /* selectedByUser */ false);
    }
    willHide() {
        this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.NetworkRequest.Events.RequestHeadersChanged, this.refreshFormData, this);
    }
    addEntryContextMenuHandler(treeElement, value) {
        treeElement.listItemElement.addEventListener('contextmenu', event => {
            event.consume(true);
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
            const decodedValue = decodeURIComponent(value);
            const copyDecodedValueHandler = () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.NetworkPanelCopyValue);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(decodedValue);
            };
            contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyValue), copyDecodedValueHandler, { jslogContext: 'copy-value' });
            void contextMenu.show();
        });
    }
    static formatParameter(value, className, decodeParameters) {
        let errorDecoding = false;
        if (decodeParameters) {
            value = value.replace(/\+/g, ' ');
            if (value.indexOf('%') >= 0) {
                try {
                    value = decodeURIComponent(value);
                }
                catch (e) {
                    errorDecoding = true;
                }
            }
        }
        const div = document.createElement('div');
        if (className) {
            div.className = className;
        }
        if (value === '') {
            div.classList.add('empty-value');
        }
        if (errorDecoding) {
            div.createChild('span', 'payload-decode-error').textContent = i18nString(UIStrings.unableToDecodeValue);
        }
        else {
            div.textContent = value;
        }
        return div;
    }
    refreshQueryString() {
        const queryString = this.request.queryString();
        const queryParameters = this.request.queryParameters;
        this.queryStringCategory.hidden = !queryParameters;
        if (queryParameters) {
            this.refreshParams(i18nString(UIStrings.queryStringParameters), queryParameters, queryString, this.queryStringCategory);
        }
    }
    async refreshFormData() {
        const formData = await this.request.requestFormData();
        if (!formData) {
            this.formDataCategory.hidden = true;
            this.requestPayloadCategory.hidden = true;
            return;
        }
        const formParameters = await this.request.formParameters();
        if (formParameters) {
            this.formDataCategory.hidden = false;
            this.requestPayloadCategory.hidden = true;
            this.refreshParams(i18nString(UIStrings.formData), formParameters, formData, this.formDataCategory);
        }
        else {
            this.requestPayloadCategory.hidden = false;
            this.formDataCategory.hidden = true;
            try {
                const json = JSON.parse(formData);
                this.refreshRequestJSONPayload(json, formData);
            }
            catch (e) {
                this.populateTreeElementWithSourceText(this.requestPayloadCategory, formData);
            }
        }
    }
    populateTreeElementWithSourceText(treeElement, sourceText) {
        const MAX_LENGTH = 3000;
        const text = (sourceText || '').trim();
        const trim = text.length > MAX_LENGTH;
        const sourceTextElement = document.createElement('span');
        sourceTextElement.classList.add('payload-value');
        sourceTextElement.classList.add('source-code');
        sourceTextElement.textContent = trim ? text.substr(0, MAX_LENGTH) : text;
        const sourceTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement(sourceTextElement);
        treeElement.removeChildren();
        treeElement.appendChild(sourceTreeElement);
        if (!trim) {
            return;
        }
        const showMoreButton = document.createElement('button');
        showMoreButton.classList.add('request-payload-show-more-button');
        showMoreButton.textContent = i18nString(UIStrings.showMore);
        showMoreButton.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('show-more').track({ click: true })}`);
        function showMore() {
            showMoreButton.remove();
            sourceTextElement.textContent = text;
            sourceTreeElement.listItemElement.removeEventListener('contextmenu', onContextMenuShowMore);
        }
        showMoreButton.addEventListener('click', showMore);
        function onContextMenuShowMore(event) {
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
            const section = contextMenu.newSection();
            section.appendItem(i18nString(UIStrings.showMore), showMore, { jslogContext: 'show-more' });
            void contextMenu.show();
        }
        sourceTreeElement.listItemElement.addEventListener('contextmenu', onContextMenuShowMore);
        sourceTextElement.appendChild(showMoreButton);
    }
    refreshParams(title, params, sourceText, paramsTreeElement) {
        paramsTreeElement.removeChildren();
        paramsTreeElement.listItemElement.removeChildren();
        paramsTreeElement.listItemElement.createChild('div', 'selection fill');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextChild(paramsTreeElement.listItemElement, title);
        const payloadCount = document.createElement('span');
        payloadCount.classList.add('payload-count');
        const numberOfParams = params ? params.length : 0;
        payloadCount.textContent = `\xA0(${numberOfParams})`;
        paramsTreeElement.listItemElement.appendChild(payloadCount);
        const shouldViewSource = viewSourceForItems.has(paramsTreeElement);
        if (shouldViewSource) {
            this.appendParamsSource(title, params, sourceText, paramsTreeElement);
        }
        else {
            this.appendParamsParsed(title, params, sourceText, paramsTreeElement);
        }
    }
    appendParamsSource(title, params, sourceText, paramsTreeElement) {
        this.populateTreeElementWithSourceText(paramsTreeElement, sourceText);
        const listItemElement = paramsTreeElement.listItemElement;
        const viewParsed = function (event) {
            listItemElement.removeEventListener('contextmenu', viewParsedContextMenu);
            viewSourceForItems.delete(paramsTreeElement);
            this.refreshParams(title, params, sourceText, paramsTreeElement);
            event.consume();
        };
        const viewParsedContextMenu = (event) => {
            if (!paramsTreeElement.expanded) {
                return;
            }
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
            contextMenu.newSection().appendItem(i18nString(UIStrings.viewParsed), viewParsed.bind(this, event), { jslogContext: 'view-parsed' });
            void contextMenu.show();
        };
        const viewParsedButton = this.createViewSourceToggle(/* viewSource */ true, viewParsed.bind(this));
        listItemElement.appendChild(viewParsedButton);
        listItemElement.addEventListener('contextmenu', viewParsedContextMenu);
    }
    appendParamsParsed(title, params, sourceText, paramsTreeElement) {
        for (const param of params || []) {
            const paramNameValue = document.createDocumentFragment();
            if (param.name !== '') {
                const name = RequestPayloadView.formatParameter(param.name + ': ', 'payload-name', this.decodeRequestParameters);
                const value = RequestPayloadView.formatParameter(param.value, 'payload-value source-code', this.decodeRequestParameters);
                paramNameValue.appendChild(name);
                paramNameValue.createChild('span', 'payload-separator');
                paramNameValue.appendChild(value);
            }
            else {
                paramNameValue.appendChild(RequestPayloadView.formatParameter(i18nString(UIStrings.empty), 'empty-request-payload', this.decodeRequestParameters));
            }
            const paramTreeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement(paramNameValue);
            this.addEntryContextMenuHandler(paramTreeElement, param.value);
            paramsTreeElement.appendChild(paramTreeElement);
        }
        const listItemElement = paramsTreeElement.listItemElement;
        const viewSource = function (event) {
            listItemElement.removeEventListener('contextmenu', viewSourceContextMenu);
            viewSourceForItems.add(paramsTreeElement);
            this.refreshParams(title, params, sourceText, paramsTreeElement);
            event.consume();
        };
        const toggleURLDecoding = function (event) {
            listItemElement.removeEventListener('contextmenu', viewSourceContextMenu);
            this.toggleURLDecoding(event);
        };
        const viewSourceContextMenu = (event) => {
            if (!paramsTreeElement.expanded) {
                return;
            }
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
            const section = contextMenu.newSection();
            section.appendItem(i18nString(UIStrings.viewSource), viewSource.bind(this, event), { jslogContext: 'view-source' });
            const viewURLEncodedText = this.decodeRequestParameters ? i18nString(UIStrings.viewUrlEncoded) : i18nString(UIStrings.viewDecoded);
            section.appendItem(viewURLEncodedText, toggleURLDecoding.bind(this, event), { jslogContext: 'toggle-url-decoding' });
            void contextMenu.show();
        };
        const viewSourceButton = this.createViewSourceToggle(/* viewSource */ false, viewSource.bind(this));
        listItemElement.appendChild(viewSourceButton);
        const toggleTitle = this.decodeRequestParameters ? i18nString(UIStrings.viewUrlEncodedL) : i18nString(UIStrings.viewDecodedL);
        const toggleButton = this.createToggleButton(toggleTitle);
        toggleButton.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toggle('decode-encode').track({ click: true })}`);
        toggleButton.addEventListener('click', toggleURLDecoding.bind(this), false);
        listItemElement.appendChild(toggleButton);
        listItemElement.addEventListener('contextmenu', viewSourceContextMenu);
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    refreshRequestJSONPayload(parsedObject, sourceText) {
        const rootListItem = this.requestPayloadCategory;
        rootListItem.removeChildren();
        const rootListItemElement = rootListItem.listItemElement;
        rootListItemElement.removeChildren();
        rootListItemElement.createChild('div', 'selection fill');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.UIUtils.createTextChild(rootListItemElement, this.requestPayloadCategory.title.toString());
        if (viewSourceForItems.has(rootListItem)) {
            this.appendJSONPayloadSource(rootListItem, parsedObject, sourceText);
        }
        else {
            this.appendJSONPayloadParsed(rootListItem, parsedObject, sourceText);
        }
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendJSONPayloadSource(rootListItem, parsedObject, sourceText) {
        const rootListItemElement = rootListItem.listItemElement;
        this.populateTreeElementWithSourceText(rootListItem, sourceText);
        const viewParsed = function (event) {
            rootListItemElement.removeEventListener('contextmenu', viewParsedContextMenu);
            viewSourceForItems.delete(rootListItem);
            this.refreshRequestJSONPayload(parsedObject, sourceText);
            event.consume();
        };
        const viewParsedButton = this.createViewSourceToggle(/* viewSource */ true, viewParsed.bind(this));
        rootListItemElement.appendChild(viewParsedButton);
        const viewParsedContextMenu = (event) => {
            if (!rootListItem.expanded) {
                return;
            }
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
            contextMenu.newSection().appendItem(i18nString(UIStrings.viewParsed), viewParsed.bind(this, event), { jslogContext: 'view-parsed' });
            void contextMenu.show();
        };
        rootListItemElement.addEventListener('contextmenu', viewParsedContextMenu);
    }
    // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    appendJSONPayloadParsed(rootListItem, parsedObject, sourceText) {
        const object = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RemoteObject.RemoteObject.fromLocalObject(parsedObject);
        const section = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.RootElement(object);
        section.title = object.description;
        section.expand();
        // `editable` is not a valid property for `ObjectUI.ObjectPropertiesSection.RootElement`. Only for
        // `ObjectUI.ObjectPropertiesSection.ObjectPropertiesSection`. We do not know if this assignment is
        // safe to delete.
        // @ts-ignore
        section.editable = false;
        rootListItem.childrenListElement.classList.add('source-code', 'object-properties-section');
        rootListItem.appendChild(section);
        const rootListItemElement = rootListItem.listItemElement;
        const viewSource = function (event) {
            rootListItemElement.removeEventListener('contextmenu', viewSourceContextMenu);
            viewSourceForItems.add(rootListItem);
            this.refreshRequestJSONPayload(parsedObject, sourceText);
            event.consume();
        };
        const viewSourceContextMenu = (event) => {
            if (!rootListItem.expanded) {
                return;
            }
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
            contextMenu.newSection().appendItem(i18nString(UIStrings.viewSource), viewSource.bind(this, event), { jslogContext: 'view-source' });
            void contextMenu.show();
        };
        const viewSourceButton = this.createViewSourceToggle(/* viewSource */ false, viewSource.bind(this));
        rootListItemElement.appendChild(viewSourceButton);
        rootListItemElement.addEventListener('contextmenu', viewSourceContextMenu);
    }
    createViewSourceToggle(viewSource, handler) {
        const viewSourceToggleTitle = viewSource ? i18nString(UIStrings.viewParsedL) : i18nString(UIStrings.viewSourceL);
        const viewSourceToggleButton = this.createToggleButton(viewSourceToggleTitle);
        viewSourceToggleButton.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toggle('source-parse').track({ click: true })}`);
        viewSourceToggleButton.addEventListener('click', handler, false);
        return viewSourceToggleButton;
    }
    toggleURLDecoding(event) {
        this.decodeRequestParameters = !this.decodeRequestParameters;
        this.refreshQueryString();
        void this.refreshFormData();
        event.consume();
    }
    createToggleButton(title) {
        const button = document.createElement('button');
        button.classList.add('payload-toggle');
        button.tabIndex = 0;
        button.textContent = title;
        return button;
    }
}
const viewSourceForItems = new WeakSet();
class Category extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement {
    toggleOnClick;
    expandedSetting;
    expanded;
    constructor(root, name, title) {
        super(title || '', true);
        this.toggleOnClick = true;
        this.hidden = true;
        this.expandedSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('request-info-' + name + '-category-expanded', true);
        this.expanded = this.expandedSetting.get();
        this.listItemElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section().context(name)}`);
        root.appendChild(this);
    }
    createLeaf() {
        const leaf = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement();
        this.appendChild(leaf);
        return leaf;
    }
    onexpand() {
        this.expandedSetting.set(true);
    }
    oncollapse() {
        this.expandedSetting.set(false);
    }
}
//# sourceMappingURL=RequestPayloadView.js.map

/***/ }),

/***/ "./panels/network/requestPayloadTree.css.js":
/*!**************************************************!*\
  !*** ./panels/network/requestPayloadTree.css.js ***!
  \**************************************************/
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
 * Copyright 2016 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.tree-outline {
  padding-left: 0;
}

.tree-outline > ol {
  padding-bottom: 5px;
  border-bottom: solid 1px var(--sys-color-divider);
}

.tree-outline > .parent {
  user-select: none;
  font-weight: bold;
  color: var(--sys-color-on-surface);
  margin-top: -1px;
  display: flex;
  align-items: center;
  height: 26px;
}

.tree-outline li {
  padding-left: 5px;
  line-height: 20px;
}

.tree-outline li:not(.parent) {
  margin-left: 10px;
  display: block;
}

.tree-outline li:not(.parent)::before {
  display: none;
}

.tree-outline li.expanded .payload-count {
  display: none;
}

.tree-outline li .payload-toggle {
  display: none;
}

.tree-outline li.expanded .payload-toggle {
  display: inline;
  margin-left: 30px;
  font-weight: normal;
  color: var(--sys-color-on-surface);
  background: none;
  border: none;
}

.tree-outline li.expanded .payload-toggle:focus-visible {
  border: 2px solid var(--sys-color-state-focus-ring);
  border-radius: 5px;
}

.tree-outline li .header-toggle:hover {
  color: var(--sys-color-token-subtle);
}

.tree-outline .payload-name {
  color: var(--sys-color-token-subtle);
  display: inline-flex;
  margin-right: 0.25em;
  font-weight: bold;
  vertical-align: top;
  white-space: pre-wrap;
}

.tree-outline .payload-separator {
  user-select: none;
}

.tree-outline .payload-value {
  display: inline;
  margin-right: 1em;
  white-space: pre-wrap;
  word-break: break-all;
  margin-top: 1px;
}

.tree-outline .empty-request-payload {
  color: var(--sys-color-state-disabled);
}

.request-payload-show-more-button {
  border: none;
  border-radius: 3px;
  display: inline-block;
  font-size: 12px;
  font-family: sans-serif;
  margin: 0 4px;
  padding: 2px 4px;
}

@media (forced-colors: active) {
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected:focus {
    background: Highlight;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li::before {
    background-color: ButtonText;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent::before {
    background-color: HighlightText;
  }

  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected *,
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent,
  :host-context(.request-payload-tree) ol.tree-outline:not(.hide-selection-when-blurred) li.selected.parent span {
    color: HighlightText;
  }
}

.payload-decode-error {
  color: var(--sys-color-error);
}

/*# sourceURL=requestPayloadTree.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/requestPayloadView.css.js":
/*!**************************************************!*\
  !*** ./panels/network/requestPayloadView.css.js ***!
  \**************************************************/
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
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-payload-view {
  user-select: text;
  overflow: auto;
}

.request-payload-tree {
  flex-grow: 1;
  overflow-y: auto;
  margin: 0;
}

/*# sourceURL=requestPayloadView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);