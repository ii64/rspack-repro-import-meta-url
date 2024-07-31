"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_media_PlayerMessagesView_ts"],{

/***/ "./src/panels/media/PlayerMessagesView.ts":
/*!************************************************!*\
  !*** ./src/panels/media/PlayerMessagesView.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerMessagesView: () => (/* binding */ PlayerMessagesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './playerMessagesView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




const UIStrings = {
    /**
     *@description A context menu item in the Console View of the Console panel
     */
    default: 'Default',
    /**
     *@description Text in Network Throttling Selector of the Network panel
     */
    custom: 'Custom',
    /**
     *@description Text for everything
     */
    all: 'All',
    /**
     *@description Text for errors
     */
    error: 'Error',
    /**
     *@description Text to indicate an item is a warning
     */
    warning: 'Warning',
    /**
     *@description Sdk console message message level info of level Labels in Console View of the Console panel
     */
    info: 'Info',
    /**
     *@description Debug log level
     */
    debug: 'Debug',
    /**
     *@description Label for selecting between the set of log levels to show.
     */
    logLevel: 'Log level:',
    /**
     *@description Default text for user-text-entry for searching log messages.
     */
    filterByLogMessages: 'Filter by log messages',
    /**
     *@description The label for the group name that this error belongs to.
     */
    errorGroupLabel: 'Error Group:',
    /**
     *@description The label for the numeric code associated with this error.
     */
    errorCodeLabel: 'Error Code:',
    /**
     *@description The label for extra data associated with an error.
     */
    errorDataLabel: 'Data:',
    /**
     *@description The label for the stacktrace associated with the error.
     */
    errorStackLabel: 'Stacktrace:',
    /**
     *@description The label for a root cause error associated with this error.
     */
    errorCauseLabel: 'Caused by:',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/PlayerMessagesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var MessageLevelBitfield;
(function (MessageLevelBitfield) {
    MessageLevelBitfield[MessageLevelBitfield["Error"] = 1] = "Error";
    MessageLevelBitfield[MessageLevelBitfield["Warning"] = 2] = "Warning";
    MessageLevelBitfield[MessageLevelBitfield["Info"] = 4] = "Info";
    MessageLevelBitfield[MessageLevelBitfield["Debug"] = 8] = "Debug";
    MessageLevelBitfield[MessageLevelBitfield["Default"] = 7] = "Default";
    MessageLevelBitfield[MessageLevelBitfield["All"] = 15] = "All";
    MessageLevelBitfield[MessageLevelBitfield["Custom"] = 0] = "Custom";
})(MessageLevelBitfield || (MessageLevelBitfield = {}));
class MessageLevelSelector {
    constructor(items, view) {
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "itemMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "hiddenLevels", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bitFieldValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "savedBitFieldValue", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "defaultTitleInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "customTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "allTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "elementsForItems", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.items = items;
        this.view = view;
        this.itemMap = new Map();
        this.hiddenLevels = [];
        this.bitFieldValue = MessageLevelBitfield.Default;
        this.savedBitFieldValue = MessageLevelBitfield.Default;
        this.defaultTitleInternal = i18nString(UIStrings.default);
        this.customTitle = i18nString(UIStrings.custom);
        this.allTitle = i18nString(UIStrings.all);
        this.elementsForItems = new WeakMap();
    }
    defaultTitle() {
        return this.defaultTitleInternal;
    }
    setDefault(dropdown) {
        dropdown.selectItem(this.items.at(0));
    }
    populate() {
        this.items.insert(this.items.length, {
            title: this.defaultTitleInternal,
            overwrite: true,
            stringValue: '',
            value: MessageLevelBitfield.Default,
            selectable: undefined,
        });
        this.items.insert(this.items.length, {
            title: this.allTitle,
            overwrite: true,
            stringValue: '',
            value: MessageLevelBitfield.All,
            selectable: undefined,
        });
        this.items.insert(this.items.length, {
            title: i18nString(UIStrings.error),
            overwrite: false,
            stringValue: 'error',
            value: MessageLevelBitfield.Error,
            selectable: undefined,
        });
        this.items.insert(this.items.length, {
            title: i18nString(UIStrings.warning),
            overwrite: false,
            stringValue: 'warning',
            value: MessageLevelBitfield.Warning,
            selectable: undefined,
        });
        this.items.insert(this.items.length, {
            title: i18nString(UIStrings.info),
            overwrite: false,
            stringValue: 'info',
            value: MessageLevelBitfield.Info,
            selectable: undefined,
        });
        this.items.insert(this.items.length, {
            title: i18nString(UIStrings.debug),
            overwrite: false,
            stringValue: 'debug',
            value: MessageLevelBitfield.Debug,
            selectable: undefined,
        });
    }
    updateCheckMarks() {
        this.hiddenLevels = [];
        for (const [key, item] of this.itemMap) {
            if (!item.overwrite) {
                const elementForItem = this.elementsForItems.get(item);
                if (elementForItem && elementForItem.firstChild) {
                    elementForItem.firstChild.remove();
                }
                if (elementForItem && key & this.bitFieldValue) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(elementForItem.createChild('div'), '✓');
                }
                else {
                    this.hiddenLevels.push(item.stringValue);
                }
            }
        }
    }
    titleFor(item) {
        // This would make a lot more sense to have in |itemSelected|, but this
        // method gets called first.
        if (item.overwrite) {
            this.bitFieldValue = item.value;
        }
        else {
            this.bitFieldValue ^= item.value;
        }
        if (this.bitFieldValue === MessageLevelBitfield.Default) {
            return this.defaultTitleInternal;
        }
        if (this.bitFieldValue === MessageLevelBitfield.All) {
            return this.allTitle;
        }
        const potentialMatch = this.itemMap.get(this.bitFieldValue);
        if (potentialMatch) {
            return potentialMatch.title;
        }
        return this.customTitle;
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './playerMessagesView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        const container = shadowRoot.createChild('div', 'media-messages-level-dropdown-element');
        const checkBox = container.createChild('div', 'media-messages-level-dropdown-checkbox');
        const text = container.createChild('span', 'media-messages-level-dropdown-text');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(text, item.title);
        this.elementsForItems.set(item, checkBox);
        this.itemMap.set(item.value, item);
        this.updateCheckMarks();
        this.view.regenerateMessageDisplayCss(this.hiddenLevels);
        return element;
    }
    isItemSelectable(_item) {
        return true;
    }
    itemSelected(_item) {
        this.updateCheckMarks();
        this.view.regenerateMessageDisplayCss(this.hiddenLevels);
    }
    highlightedItemChanged(_from, _to, _fromElement, _toElement) {
    }
}
class PlayerMessagesView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox {
    constructor() {
        super();
        Object.defineProperty(this, "headerPanel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "bodyPanel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "messageLevelSelector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.pane('messages')}`);
        this.headerPanel = this.contentElement.createChild('div', 'media-messages-header');
        this.bodyPanel = this.contentElement.createChild('div', 'media-messages-body');
        this.buildToolbar();
    }
    buildToolbar() {
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.Toolbar('media-messages-toolbar', this.headerPanel);
        toolbar.appendText(i18nString(UIStrings.logLevel));
        toolbar.appendToolbarItem(this.createDropdown());
        toolbar.appendSeparator();
        toolbar.appendToolbarItem(this.createFilterInput());
    }
    createDropdown() {
        const items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListModel.ListModel();
        this.messageLevelSelector = new MessageLevelSelector(items, this);
        const dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.SoftDropDown.SoftDropDown(items, this.messageLevelSelector, 'log-level');
        dropDown.setRowHeight(18);
        this.messageLevelSelector.populate();
        this.messageLevelSelector.setDefault(dropDown);
        const dropDownItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.ToolbarItem(dropDown.element);
        dropDownItem.element.classList.add('toolbar-has-dropdown');
        dropDownItem.setEnabled(true);
        dropDownItem.setTitle(this.messageLevelSelector.defaultTitle());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.setLabel(dropDownItem.element, `${i18nString(UIStrings.logLevel)} ${this.messageLevelSelector.defaultTitle()}`);
        return dropDownItem;
    }
    createFilterInput() {
        const filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByLogMessages), 1, 1);
        filterInput.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.ToolbarInput.Event.TextChanged, (data) => {
            this.filterByString(data);
        }, this);
        return filterInput;
    }
    regenerateMessageDisplayCss(hiddenLevels) {
        const messages = this.bodyPanel.getElementsByClassName('media-messages-message-container');
        for (const message of messages) {
            if (this.matchesHiddenLevels(message, hiddenLevels)) {
                message.classList.add('media-messages-message-unselected');
            }
            else {
                message.classList.remove('media-messages-message-unselected');
            }
        }
    }
    matchesHiddenLevels(element, hiddenLevels) {
        for (const level of hiddenLevels) {
            if (element.classList.contains('media-message-' + level)) {
                return true;
            }
        }
        return false;
    }
    filterByString(userStringData) {
        const userString = userStringData.data;
        const messages = this.bodyPanel.getElementsByClassName('media-messages-message-container');
        for (const message of messages) {
            if (userString === '') {
                message.classList.remove('media-messages-message-filtered');
            }
            else if (message.textContent && message.textContent.includes(userString)) {
                message.classList.remove('media-messages-message-filtered');
            }
            else {
                message.classList.add('media-messages-message-filtered');
            }
        }
    }
    addMessage(message) {
        const container = this.bodyPanel.createChild('div', 'media-messages-message-container media-message-' + message.level);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(container, message.message);
    }
    errorToDiv(error) {
        const entry = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build `
    <div class="status-error-box">
    <div class="status-error-field-labeled">
      <span class="status-error-field-label" $="status-error-group"></span>
      <span>${error.errorType}</span>
    </div>
    <div class="status-error-field-labeled">
      <span class="status-error-field-label" $="status-error-code"></span>
      <span>${error.code}</span>
    </div>
    <div class="status-error-field-labeled" $="status-error-data">
    </div>
    <div class="status-error-field-labeled" $="status-error-stack">
    </div>
    <div class="status-error-field-labeled" $="status-error-cause">
    </div>
    `;
        entry.$('status-error-group').textContent = i18nString(UIStrings.errorGroupLabel);
        entry.$('status-error-code').textContent = i18nString(UIStrings.errorCodeLabel);
        if (Object.keys(error.data).length !== 0) {
            const label = entry.$('status-error-data').createChild('span', 'status-error-field-label');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(label, i18nString(UIStrings.errorDataLabel));
            const dataContent = entry.$('status-error-data').createChild('div');
            for (const [key, value] of Object.entries(error.data)) {
                const datumContent = dataContent.createChild('div');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(datumContent, `${key}: ${value}`);
            }
        }
        if (error.stack.length !== 0) {
            const label = entry.$('status-error-stack').createChild('span', 'status-error-field-label');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(label, i18nString(UIStrings.errorStackLabel));
            const stackContent = entry.$('status-error-stack').createChild('div');
            for (const stackEntry of error.stack) {
                const frameBox = stackContent.createChild('div');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(frameBox, `${stackEntry.file}:${stackEntry.line}`);
            }
        }
        if (error.cause.length !== 0) {
            const label = entry.$('status-error-cause').createChild('span', 'status-error-field-label');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(label, i18nString(UIStrings.errorCauseLabel));
            entry.$('status-error-cause').appendChild(this.errorToDiv(error.cause[0]));
        }
        return entry.element();
    }
    addError(error) {
        const container = this.bodyPanel.createChild('div', 'media-messages-message-container media-message-error');
        container.appendChild(this.errorToDiv(error));
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './playerMessagesView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);