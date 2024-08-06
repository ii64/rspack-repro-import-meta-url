"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_network_RequestInitiatorView_js"],{

/***/ "./panels/network/RequestInitiatorView.js":
/*!************************************************!*\
  !*** ./panels/network/RequestInitiatorView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestInitiatorView: () => (/* binding */ RequestInitiatorView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _requestInitiatorView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requestInitiatorView.css.js */ "./panels/network/requestInitiatorView.css.js");
/* harmony import */ var _requestInitiatorViewTree_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./requestInitiatorViewTree.css.js */ "./panels/network/requestInitiatorViewTree.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text in Request Initiator View of the Network panel
     */
    thisRequestHasNoInitiatorData: 'This request has no initiator data.',
    /**
     *@description Title of a section in Request Initiator view of the Network Panel
     */
    requestCallStack: 'Request call stack',
    /**
     *@description Title of a section in Request Initiator view of the Network Panel
     */
    requestInitiatorChain: 'Request initiator chain',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/RequestInitiatorView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class RequestInitiatorView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    linkifier;
    request;
    emptyWidget;
    hasShown;
    constructor(request) {
        super();
        this.element.classList.add('request-initiator-view');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane('initiator').track({ resize: true })}`);
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.Linkifier.Linkifier();
        this.request = request;
        this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.EmptyWidget.EmptyWidget(i18nString(UIStrings.thisRequestHasNoInitiatorData));
        this.emptyWidget.show(this.element);
        this.hasShown = false;
    }
    static createStackTracePreview(request, linkifier, focusableLink) {
        const initiator = request.initiator();
        if (!initiator || !initiator.stack) {
            return null;
        }
        const networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.NetworkManager.forRequest(request);
        const target = networkManager ? networkManager.target() : null;
        const stackTrace = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_3__.JSPresentationUtils.buildStackTracePreviewContents(target, linkifier, { stackTrace: initiator.stack, tabStops: focusableLink });
        return stackTrace;
    }
    createTree() {
        const treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow();
        treeOutline.registerCSSFiles([_requestInitiatorViewTree_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]]);
        treeOutline.contentElement.classList.add('request-initiator-view-tree');
        treeOutline.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.tree('initiator-tree')}`);
        return treeOutline;
    }
    buildRequestChainTree(initiatorGraph, title, tree) {
        const root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(title);
        tree.appendChild(root);
        if (root.titleElement instanceof HTMLElement) {
            root.titleElement.classList.add('request-initiator-view-section-title');
        }
        const initiators = initiatorGraph.initiators;
        let parent = root;
        for (const request of Array.from(initiators).reverse()) {
            const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(request.url());
            parent.appendChild(treeElement);
            parent.expand();
            parent = treeElement;
        }
        root.expand();
        parent.select();
        const titleElement = parent.titleElement;
        if (titleElement instanceof HTMLElement) {
            titleElement.style.fontWeight = 'bold';
        }
        const initiated = initiatorGraph.initiated;
        this.depthFirstSearchTreeBuilder(initiated, parent, this.request);
        return root;
    }
    depthFirstSearchTreeBuilder(initiated, parentElement, parentRequest) {
        const visited = new Set();
        // this.request should be already in the tree when build initiator part
        visited.add(this.request);
        for (const request of initiated.keys()) {
            if (initiated.get(request) === parentRequest) {
                const treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(request.url());
                parentElement.appendChild(treeElement);
                parentElement.expand();
                // only do dfs when we haven't done one
                if (!visited.has(request)) {
                    visited.add(request);
                    this.depthFirstSearchTreeBuilder(initiated, treeElement, request);
                }
            }
        }
    }
    buildStackTraceSection(content, title, tree) {
        const root = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(title);
        tree.appendChild(root);
        if (root.titleElement instanceof HTMLElement) {
            root.titleElement.classList.add('request-initiator-view-section-title');
        }
        const contentElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(content, false);
        contentElement.selectable = false;
        root.appendChild(contentElement);
        root.expand();
    }
    wasShown() {
        if (this.hasShown) {
            return;
        }
        this.registerCSSFiles([_requestInitiatorView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
        let initiatorDataPresent = false;
        const containerTree = this.createTree();
        const stackTracePreview = RequestInitiatorView.createStackTracePreview(this.request, this.linkifier, true);
        if (stackTracePreview) {
            initiatorDataPresent = true;
            this.buildStackTraceSection(stackTracePreview.element, i18nString(UIStrings.requestCallStack), containerTree);
        }
        const initiatorGraph = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_2__.NetworkLog.NetworkLog.instance().initiatorGraphForRequest(this.request);
        if (initiatorGraph.initiators.size > 1 || initiatorGraph.initiated.size > 1) {
            initiatorDataPresent = true;
            this.buildRequestChainTree(initiatorGraph, i18nString(UIStrings.requestInitiatorChain), containerTree);
        }
        const firstChild = containerTree.firstChild();
        if (firstChild) {
            firstChild.select(true);
        }
        if (initiatorDataPresent) {
            this.element.appendChild(containerTree.element);
            this.emptyWidget.hideWidget();
        }
        this.hasShown = true;
    }
}
//# sourceMappingURL=RequestInitiatorView.js.map

/***/ }),

/***/ "./panels/network/requestInitiatorView.css.js":
/*!****************************************************!*\
  !*** ./panels/network/requestInitiatorView.css.js ***!
  \****************************************************/
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
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-initiator-view {
  display: block;
  margin: 6px;
}

/*# sourceURL=requestInitiatorView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/network/requestInitiatorViewTree.css.js":
/*!********************************************************!*\
  !*** ./panels/network/requestInitiatorViewTree.css.js ***!
  \********************************************************/
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
 * Copyright (c) 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.request-initiator-view-tree .fill {
  right: -6px; /* Same as the margin in .request-initiator-view but negative. */
}

.request-initiator-view-section-title {
  font-weight: bold;
  padding: 4px;
}

.request-initiator-view-section-title:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

@media (forced-colors: active) {
  .request-initiator-view-section-title:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=requestInitiatorViewTree.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);