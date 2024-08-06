"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_AffectedResourcesView_js"],{

/***/ "./panels/issues/AffectedResourcesView.js":
/*!************************************************!*\
  !*** ./panels/issues/AffectedResourcesView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedResourcesView: () => (/* binding */ AffectedResourcesView),
/* harmony export */   extractShortPath: () => (/* binding */ extractShortPath)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/request_link_icon/request_link_icon.js */ "./ui/components/request_link_icon/request_link_icon.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     *@description Text in Object Properties Section
     */
    unknown: 'unknown',
    /**
     *@description Tooltip for button linking to the Elements panel
     */
    clickToRevealTheFramesDomNodeIn: 'Click to reveal the frame\'s DOM node in the Elements panel',
    /**
     *@description Replacement text for a link to an HTML element which is not available (anymore).
     */
    unavailable: 'unavailable',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/issues/AffectedResourcesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const extractShortPath = (path) => {
    // 1st regex matches everything after last '/'
    // if path ends with '/', 2nd regex returns everything between the last two '/'
    return (/[^/]+$/.exec(path) || /[^/]+\/$/.exec(path) || [''])[0];
};
/**
 * The base class for all affected resource views. It provides basic scaffolding
 * as well as machinery for resolving request and frame ids to SDK objects.
 */
class AffectedResourcesView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.TreeOutline.TreeElement {
    #parentView;
    issue;
    affectedResourcesCountElement;
    affectedResources;
    #affectedResourcesCount;
    #frameListeners;
    #unresolvedFrameIds;
    requestResolver;
    constructor(parent, issue, jslogContext) {
        super(/* title */ undefined, /* expandable */ undefined, jslogContext);
        this.#parentView = parent;
        this.issue = issue;
        this.toggleOnClick = true;
        this.affectedResourcesCountElement = this.createAffectedResourcesCounter();
        this.affectedResources = this.createAffectedResources();
        this.#affectedResourcesCount = 0;
        this.requestResolver = new _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.RequestResolver.RequestResolver();
        this.#frameListeners = [];
        this.#unresolvedFrameIds = new Set();
    }
    /**
     * Sets the issue to take the resources from. Does not
     * trigger an update, the caller needs to do that explicitly.
     */
    setIssue(issue) {
        this.issue = issue;
    }
    createAffectedResourcesCounter() {
        const counterLabel = document.createElement('div');
        counterLabel.classList.add('affected-resource-label');
        this.listItemElement.appendChild(counterLabel);
        return counterLabel;
    }
    createAffectedResources() {
        const body = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.TreeOutline.TreeElement();
        const affectedResources = document.createElement('table');
        affectedResources.classList.add('affected-resource-list');
        body.listItemElement.appendChild(affectedResources);
        this.appendChild(body);
        return affectedResources;
    }
    updateAffectedResourceCount(count) {
        this.#affectedResourcesCount = count;
        this.affectedResourcesCountElement.textContent = this.getResourceNameWithCount(count);
        this.hidden = this.#affectedResourcesCount === 0;
        this.#parentView.updateAffectedResourceVisibility();
    }
    isEmpty() {
        return this.#affectedResourcesCount === 0;
    }
    clear() {
        this.affectedResources.textContent = '';
        this.requestResolver.clear();
    }
    expandIfOneResource() {
        if (this.#affectedResourcesCount === 1) {
            this.expand();
        }
    }
    /**
     * This function resolves a frameId to a ResourceTreeFrame. If the frameId does not resolve, or hasn't navigated yet,
     * a listener is installed that takes care of updating the view if the frame is added. This is useful if the issue is
     * added before the frame gets reported.
     */
    #resolveFrameId(frameId) {
        const frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId);
        if (!frame || !frame.url) {
            this.#unresolvedFrameIds.add(frameId);
            if (!this.#frameListeners.length) {
                const addListener = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().addEventListener("FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */, this.#onFrameChanged, this);
                const navigateListener = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().addEventListener("FrameNavigated" /* SDK.FrameManager.Events.FrameNavigated */, this.#onFrameChanged, this);
                this.#frameListeners = [addListener, navigateListener];
            }
        }
        return frame;
    }
    #onFrameChanged(event) {
        const frame = event.data.frame;
        if (!frame.url) {
            return;
        }
        const frameWasUnresolved = this.#unresolvedFrameIds.delete(frame.id);
        if (this.#unresolvedFrameIds.size === 0 && this.#frameListeners.length) {
            // Stop listening once all requests are resolved.
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.#frameListeners);
            this.#frameListeners = [];
        }
        if (frameWasUnresolved) {
            this.update();
        }
    }
    createFrameCell(frameId, issueCategory) {
        const frame = this.#resolveFrameId(frameId);
        const url = frame && (frame.unreachableUrl() || frame.url) || i18nString(UIStrings.unknown);
        const frameCell = document.createElement('td');
        frameCell.classList.add('affected-resource-cell');
        if (frame) {
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            icon.data = { iconName: 'code-circle', color: 'var(--icon-link)', width: '16px', height: '16px' };
            icon.classList.add('link', 'elements-panel');
            icon.onclick = async () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(issueCategory, "Element" /* AffectedItem.Element */);
                const frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId);
                if (frame) {
                    const ownerNode = await frame.getOwnerDOMNodeOrDocument();
                    if (ownerNode) {
                        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(ownerNode);
                    }
                }
            };
            icon.title = i18nString(UIStrings.clickToRevealTheFramesDomNodeIn);
            frameCell.appendChild(icon);
        }
        frameCell.appendChild(document.createTextNode(url));
        frameCell.onmouseenter = () => {
            const frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId);
            if (frame) {
                void frame.highlight();
            }
        };
        frameCell.onmouseleave = () => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        return frameCell;
    }
    createRequestCell(affectedRequest, options = {}) {
        const requestCell = document.createElement('td');
        requestCell.classList.add('affected-resource-cell');
        const requestLinkIcon = new _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_6__.RequestLinkIcon.RequestLinkIcon();
        requestLinkIcon.data = { ...options, affectedRequest, requestResolver: this.requestResolver, displayURL: true };
        requestCell.appendChild(requestLinkIcon);
        return requestCell;
    }
    async createElementCell({ backendNodeId, nodeName, target }, issueCategory) {
        if (!target) {
            const cellElement = document.createElement('td');
            cellElement.textContent = nodeName || i18nString(UIStrings.unavailable);
            return cellElement;
        }
        function sendTelemetry() {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(issueCategory, "Element" /* AffectedItem.Element */);
        }
        const deferredDOMNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DeferredDOMNode(target, backendNodeId);
        const anchorElement = (await _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(deferredDOMNode));
        anchorElement.textContent = nodeName;
        anchorElement.addEventListener('click', () => sendTelemetry());
        anchorElement.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                sendTelemetry();
            }
        });
        const cellElement = document.createElement('td');
        cellElement.classList.add('affected-resource-element', 'devtools-link');
        cellElement.appendChild(anchorElement);
        return cellElement;
    }
    appendSourceLocation(element, sourceLocation, target) {
        const sourceCodeLocation = document.createElement('td');
        sourceCodeLocation.classList.add('affected-source-location');
        if (sourceLocation) {
            const maxLengthForDisplayedURLs = 40; // Same as console messages.
            // TODO(crbug.com/1108503): Add some mechanism to be able to add telemetry to this element.
            const linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier(maxLengthForDisplayedURLs);
            const sourceAnchor = linkifier.linkifyScriptLocation(target || null, sourceLocation.scriptId || null, sourceLocation.url, sourceLocation.lineNumber, { columnNumber: sourceLocation.columnNumber, inlineFrameIndex: 0 });
            sourceAnchor.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('source-location').track({ click: true })}`);
            sourceCodeLocation.appendChild(sourceAnchor);
        }
        element.appendChild(sourceCodeLocation);
    }
    appendColumnTitle(header, title, additionalClass = null) {
        const info = document.createElement('td');
        info.classList.add('affected-resource-header');
        if (additionalClass) {
            info.classList.add(additionalClass);
        }
        info.textContent = title;
        header.appendChild(info);
    }
    createIssueDetailCell(textContent, additionalClass = null) {
        const cell = document.createElement('td');
        if (typeof textContent === 'string') {
            cell.textContent = textContent;
        }
        else {
            cell.appendChild(textContent);
        }
        if (additionalClass) {
            cell.classList.add(additionalClass);
        }
        return cell;
    }
    appendIssueDetailCell(element, textContent, additionalClass = null) {
        const cell = this.createIssueDetailCell(textContent, additionalClass);
        element.appendChild(cell);
        return cell;
    }
}
//# sourceMappingURL=AffectedResourcesView.js.map

/***/ })

}]);