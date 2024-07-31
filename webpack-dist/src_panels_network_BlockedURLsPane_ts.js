"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_network_BlockedURLsPane_ts"],{

/***/ "./src/panels/network/BlockedURLsPane.ts":
/*!***********************************************!*\
  !*** ./src/panels/network/BlockedURLsPane.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   BlockedURLsPane: () => (/* binding */ BlockedURLsPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./src/models/logs/logs.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './blockedURLsPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     *@description Text to enable blocking of network requests
     */
    enableNetworkRequestBlocking: 'Enable network request blocking',
    /**
     *@description Tooltip text that appears when hovering over the plus button in the Blocked URLs Pane of the Network panel
     */
    addPattern: 'Add pattern',
    /**
     *@description Accessible label for the button to add request blocking patterns in the network request blocking tool
     */
    addNetworkRequestBlockingPattern: 'Add network request blocking pattern',
    /**
     *@description Button to add a pattern to block netwrok requests in the Network request blocking tool
     *@example {Add pattern} PH1
     */
    networkRequestsAreNotBlockedS: 'Network requests are not blocked. {PH1}',
    /**
     *@description Text in Blocked URLs Pane of the Network panel
     *@example {4} PH1
     */
    dBlocked: '{PH1} blocked',
    /**
     *@description Text in Blocked URLs Pane of the Network panel
     */
    textPatternToBlockMatching: 'Text pattern to block matching requests; use * for wildcard',
    /**
     *@description Error text for empty list widget input in Request Blocking tool
     */
    patternInputCannotBeEmpty: 'Pattern input cannot be empty.',
    /**
     *@description Error text for duplicate list widget input in Request Blocking tool
     */
    patternAlreadyExists: 'Pattern already exists.',
    /**
     *@description Message to be announced for a when list item is removed from list widget
     */
    itemDeleted: 'Item successfully deleted',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/BlockedURLsPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class BlockedURLsPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    constructor() {
        super(true);
        Object.defineProperty(this, "manager", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "enabledCheckbox", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "blockedCountForUrl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.panel('network.blocked-urls').track({ resize: true })}`);
        this.manager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.instance();
        this.manager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.Events.BlockedPatternsChanged, this.update, this);
        this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('', this.contentElement);
        this.enabledCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.enableNetworkRequestBlocking), undefined, this.toggleEnabled.bind(this), 'network.enable-request-blocking');
        this.toolbar.appendToolbarItem(this.enabledCheckbox);
        this.toolbar.appendSeparator();
        this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar.createActionButtonForId('network.add-network-request-blocking-pattern'));
        this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar.createActionButtonForId('network.remove-all-network-request-blocking-patterns'));
        this.toolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toolbar()}`);
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListWidget.ListWidget(this);
        this.list.element.classList.add('blocked-urls');
        this.list.setEmptyPlaceholder(this.createEmptyPlaceholder());
        this.list.show(this.contentElement);
        this.editor = null;
        this.blockedCountForUrl = new Map();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.Events.RequestFinished, this.onRequestFinished, this, { scoped: true });
        this.update();
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.Events.Reset, this.onNetworkLogReset, this);
    }
    createEmptyPlaceholder() {
        const element = this.contentElement.createChild('div', 'no-blocked-urls');
        const addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextButton(i18nString(UIStrings.addPattern), this.addPattern.bind(this), {
            className: 'add-button',
            jslogContext: 'network.add-network-request-blocking-pattern',
            variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.PRIMARY,
        });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(addButton, i18nString(UIStrings.addNetworkRequestBlockingPattern));
        element.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.networkRequestsAreNotBlockedS, { PH1: addButton }));
        return element;
    }
    addPattern() {
        this.manager.setBlockingEnabled(true);
        this.list.addNewItem(0, { url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString, enabled: true });
    }
    removeAllPatterns() {
        this.manager.setBlockedPatterns([]);
    }
    renderItem(pattern, editable) {
        const count = this.blockedRequestsCount(pattern.url);
        const element = document.createElement('div');
        element.classList.add('blocked-url');
        const checkbox = element.createChild('input', 'blocked-url-checkbox');
        checkbox.type = 'checkbox';
        checkbox.checked = pattern.enabled;
        checkbox.disabled = !editable;
        checkbox.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle().track({ change: true })}`);
        element.createChild('div', 'blocked-url-label').textContent = pattern.url;
        element.createChild('div', 'blocked-url-count').textContent = i18nString(UIStrings.dBlocked, { PH1: count });
        if (editable) {
            element.addEventListener('click', event => this.togglePattern(pattern, event));
            checkbox.addEventListener('click', event => this.togglePattern(pattern, event));
        }
        return element;
    }
    togglePattern(pattern, event) {
        event.consume(true);
        const patterns = this.manager.blockedPatterns();
        patterns.splice(patterns.indexOf(pattern), 1, { enabled: !pattern.enabled, url: pattern.url });
        this.manager.setBlockedPatterns(patterns);
    }
    toggleEnabled() {
        this.manager.setBlockingEnabled(!this.manager.blockingEnabled());
        this.update();
    }
    removeItemRequested(pattern, index) {
        const patterns = this.manager.blockedPatterns();
        patterns.splice(index, 1);
        this.manager.setBlockedPatterns(patterns);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(UIStrings.itemDeleted);
    }
    beginEdit(pattern) {
        this.editor = this.createEditor();
        this.editor.control('url').value = pattern.url;
        return this.editor;
    }
    commitEdit(item, editor, isNew) {
        const url = editor.control('url').value;
        const patterns = this.manager.blockedPatterns();
        if (isNew) {
            patterns.push({ enabled: true, url: url });
        }
        else {
            patterns.splice(patterns.indexOf(item), 1, { enabled: true, url: url });
        }
        this.manager.setBlockedPatterns(patterns);
    }
    createEditor() {
        if (this.editor) {
            return this.editor;
        }
        const editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListWidget.Editor();
        const content = editor.contentElement();
        const titles = content.createChild('div', 'blocked-url-edit-row');
        titles.createChild('div').textContent = i18nString(UIStrings.textPatternToBlockMatching);
        const fields = content.createChild('div', 'blocked-url-edit-row');
        const validator = (_item, _index, input) => {
            let valid = true;
            let errorMessage;
            if (!input.value) {
                errorMessage = i18nString(UIStrings.patternInputCannotBeEmpty);
                valid = false;
            }
            else if (this.manager.blockedPatterns().find(pattern => pattern.url === input.value)) {
                errorMessage = i18nString(UIStrings.patternAlreadyExists);
                valid = false;
            }
            return { valid, errorMessage };
        };
        const urlInput = editor.createInput('url', 'text', '', validator);
        fields.createChild('div', 'blocked-url-edit-value').appendChild(urlInput);
        return editor;
    }
    update() {
        const enabled = this.manager.blockingEnabled();
        this.list.element.classList.toggle('blocking-disabled', !enabled && Boolean(this.manager.blockedPatterns().length));
        this.enabledCheckbox.setChecked(enabled);
        this.list.clear();
        for (const pattern of this.manager.blockedPatterns()) {
            this.list.appendItem(pattern, enabled);
        }
    }
    blockedRequestsCount(url) {
        if (!url) {
            return 0;
        }
        let result = 0;
        for (const blockedUrl of this.blockedCountForUrl.keys()) {
            if (this.matches(url, blockedUrl)) {
                result += this.blockedCountForUrl.get(blockedUrl);
            }
        }
        return result;
    }
    matches(pattern, url) {
        let pos = 0;
        const parts = pattern.split('*');
        for (let index = 0; index < parts.length; index++) {
            const part = parts[index];
            if (!part.length) {
                continue;
            }
            pos = url.indexOf(part, pos);
            if (pos === -1) {
                return false;
            }
            pos += part.length;
        }
        return true;
    }
    onNetworkLogReset(_event) {
        this.blockedCountForUrl.clear();
        this.update();
    }
    onRequestFinished(event) {
        const request = event.data;
        if (request.wasBlocked()) {
            const count = this.blockedCountForUrl.get(request.url()) || 0;
            this.blockedCountForUrl.set(request.url(), count + 1);
            this.update();
        }
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(BlockedURLsPane, this);
        super.wasShown();
        this.list.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './blockedURLsPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './blockedURLsPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    willHide() {
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(BlockedURLsPane, null);
    }
}
class ActionDelegate {
    handleAction(context, actionId) {
        const blockedURLsPane = context.flavor(BlockedURLsPane);
        if (blockedURLsPane === null) {
            return false;
        }
        switch (actionId) {
            case 'network.add-network-request-blocking-pattern': {
                blockedURLsPane.addPattern();
                return true;
            }
            case 'network.remove-all-network-request-blocking-patterns': {
                blockedURLsPane.removeAllPatterns();
                return true;
            }
        }
        return false;
    }
}


/***/ })

}]);