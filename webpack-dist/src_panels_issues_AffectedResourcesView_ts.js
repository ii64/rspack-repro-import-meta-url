"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_issues_AffectedResourcesView_ts"],{

/***/ "./src/panels/issues/AffectedResourcesView.ts":
/*!****************************************************!*\
  !*** ./src/panels/issues/AffectedResourcesView.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AffectedItem: () => (/* binding */ AffectedItem),
/* harmony export */   AffectedResourcesView: () => (/* binding */ AffectedResourcesView),
/* harmony export */   extractShortPath: () => (/* binding */ extractShortPath)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_request_link_icon_request_link_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/request_link_icon/request_link_icon.js */ "./src/ui/components/request_link_icon/request_link_icon.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AffectedResourcesView_instances, _AffectedResourcesView_parentView, _AffectedResourcesView_affectedResourcesCount, _AffectedResourcesView_frameListeners, _AffectedResourcesView_unresolvedFrameIds, _AffectedResourcesView_resolveFrameId, _AffectedResourcesView_onFrameChanged;










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
var AffectedItem;
(function (AffectedItem) {
    AffectedItem["Cookie"] = "Cookie";
    AffectedItem["Directive"] = "Directive";
    AffectedItem["Element"] = "Element";
    AffectedItem["Request"] = "Request";
    AffectedItem["Source"] = "Source";
})(AffectedItem || (AffectedItem = {}));
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
    constructor(parent, issue, jslogContext) {
        super(/* title */ undefined, /* expandable */ undefined, jslogContext);
        _AffectedResourcesView_instances.add(this);
        _AffectedResourcesView_parentView.set(this, void 0);
        Object.defineProperty(this, "issue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "affectedResourcesCountElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "affectedResources", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _AffectedResourcesView_affectedResourcesCount.set(this, void 0);
        _AffectedResourcesView_frameListeners.set(this, void 0);
        _AffectedResourcesView_unresolvedFrameIds.set(this, void 0);
        Object.defineProperty(this, "requestResolver", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        __classPrivateFieldSet(this, _AffectedResourcesView_parentView, parent, "f");
        this.issue = issue;
        this.toggleOnClick = true;
        this.affectedResourcesCountElement = this.createAffectedResourcesCounter();
        this.affectedResources = this.createAffectedResources();
        __classPrivateFieldSet(this, _AffectedResourcesView_affectedResourcesCount, 0, "f");
        this.requestResolver = new _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.RequestResolver.RequestResolver();
        __classPrivateFieldSet(this, _AffectedResourcesView_frameListeners, [], "f");
        __classPrivateFieldSet(this, _AffectedResourcesView_unresolvedFrameIds, new Set(), "f");
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
        __classPrivateFieldSet(this, _AffectedResourcesView_affectedResourcesCount, count, "f");
        this.affectedResourcesCountElement.textContent = this.getResourceNameWithCount(count);
        this.hidden = __classPrivateFieldGet(this, _AffectedResourcesView_affectedResourcesCount, "f") === 0;
        __classPrivateFieldGet(this, _AffectedResourcesView_parentView, "f").updateAffectedResourceVisibility();
    }
    isEmpty() {
        return __classPrivateFieldGet(this, _AffectedResourcesView_affectedResourcesCount, "f") === 0;
    }
    clear() {
        this.affectedResources.textContent = '';
        this.requestResolver.clear();
    }
    expandIfOneResource() {
        if (__classPrivateFieldGet(this, _AffectedResourcesView_affectedResourcesCount, "f") === 1) {
            this.expand();
        }
    }
    createFrameCell(frameId, issueCategory) {
        const frame = __classPrivateFieldGet(this, _AffectedResourcesView_instances, "m", _AffectedResourcesView_resolveFrameId).call(this, frameId);
        const url = frame && (frame.unreachableUrl() || frame.url) || i18nString(UIStrings.unknown);
        const frameCell = document.createElement('td');
        frameCell.classList.add('affected-resource-cell');
        if (frame) {
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon();
            icon.data = { iconName: 'code-circle', color: 'var(--icon-link)', width: '16px', height: '16px' };
            icon.classList.add('link', 'elements-panel');
            icon.onclick = async () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(issueCategory, AffectedItem.Element);
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
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelResourceOpened(issueCategory, AffectedItem.Element);
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
_AffectedResourcesView_parentView = new WeakMap(), _AffectedResourcesView_affectedResourcesCount = new WeakMap(), _AffectedResourcesView_frameListeners = new WeakMap(), _AffectedResourcesView_unresolvedFrameIds = new WeakMap(), _AffectedResourcesView_instances = new WeakSet(), _AffectedResourcesView_resolveFrameId = function _AffectedResourcesView_resolveFrameId(frameId) {
    const frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().getFrame(frameId);
    if (!frame || !frame.url) {
        __classPrivateFieldGet(this, _AffectedResourcesView_unresolvedFrameIds, "f").add(frameId);
        if (!__classPrivateFieldGet(this, _AffectedResourcesView_frameListeners, "f").length) {
            const addListener = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.Events.FrameAddedToTarget, __classPrivateFieldGet(this, _AffectedResourcesView_instances, "m", _AffectedResourcesView_onFrameChanged), this);
            const navigateListener = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.FrameManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.FrameManager.Events.FrameNavigated, __classPrivateFieldGet(this, _AffectedResourcesView_instances, "m", _AffectedResourcesView_onFrameChanged), this);
            __classPrivateFieldSet(this, _AffectedResourcesView_frameListeners, [addListener, navigateListener], "f");
        }
    }
    return frame;
}, _AffectedResourcesView_onFrameChanged = function _AffectedResourcesView_onFrameChanged(event) {
    const frame = event.data.frame;
    if (!frame.url) {
        return;
    }
    const frameWasUnresolved = __classPrivateFieldGet(this, _AffectedResourcesView_unresolvedFrameIds, "f").delete(frame.id);
    if (__classPrivateFieldGet(this, _AffectedResourcesView_unresolvedFrameIds, "f").size === 0 && __classPrivateFieldGet(this, _AffectedResourcesView_frameListeners, "f").length) {
        // Stop listening once all requests are resolved.
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(__classPrivateFieldGet(this, _AffectedResourcesView_frameListeners, "f"));
        __classPrivateFieldSet(this, _AffectedResourcesView_frameListeners, [], "f");
    }
    if (frameWasUnresolved) {
        this.update();
    }
};


/***/ })

}]);