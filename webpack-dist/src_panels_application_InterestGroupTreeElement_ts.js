"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_InterestGroupTreeElement_ts"],{

/***/ "./src/panels/application/ApplicationPanelTreeElement.ts":
/*!***************************************************************!*\
  !*** ./src/panels/application/ApplicationPanelTreeElement.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationPanelTreeElement: () => (/* binding */ ApplicationPanelTreeElement),
/* harmony export */   ExpandableApplicationPanelTreeElement: () => (/* binding */ ExpandableApplicationPanelTreeElement)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class ApplicationPanelTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeElement {
    constructor(resourcesPanel, title, expandable, jslogContext) {
        super(title, expandable, jslogContext);
        Object.defineProperty(this, "resourcesPanel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.resourcesPanel = resourcesPanel;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.setLabel(this.listItemElement, title);
        this.listItemElement.tabIndex = -1;
    }
    deselect() {
        super.deselect();
        this.listItemElement.tabIndex = -1;
    }
    get itemURL() {
        throw new Error('Unimplemented Method');
    }
    onselect(selectedByUser) {
        if (!selectedByUser) {
            return false;
        }
        const path = [];
        for (let el = this; el; el = el.parent) {
            const url = el instanceof ApplicationPanelTreeElement && el.itemURL;
            if (!url) {
                break;
            }
            path.push(url);
        }
        this.resourcesPanel.setLastSelectedItemPath(path);
        return false;
    }
    showView(view) {
        this.resourcesPanel.showView(view);
    }
}
class ExpandableApplicationPanelTreeElement extends ApplicationPanelTreeElement {
    constructor(resourcesPanel, categoryName, settingsKey, settingsDefault = false) {
        super(resourcesPanel, categoryName, false, settingsKey);
        Object.defineProperty(this, "expandedSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "categoryName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "categoryLink", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.expandedSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-' + settingsKey + '-expanded', settingsDefault);
        this.categoryName = categoryName;
        this.categoryLink = null;
    }
    get itemURL() {
        return 'category://' + this.categoryName;
    }
    setLink(link) {
        this.categoryLink = link;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.resourcesPanel.showCategoryView(this.categoryName, this.categoryLink);
        return false;
    }
    onattach() {
        super.onattach();
        if (this.expandedSetting.get()) {
            this.expand();
        }
    }
    onexpand() {
        this.expandedSetting.set(true);
    }
    oncollapse() {
        this.expandedSetting.set(false);
    }
}


/***/ }),

/***/ "./src/panels/application/InterestGroupStorageView.ts":
/*!************************************************************!*\
  !*** ./src/panels/application/InterestGroupStorageView.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupStorageView: () => (/* binding */ InterestGroupStorageView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './interestGroupStorageView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Placeholder text instructing the user how to display interest group
     *details.
     */
    clickToDisplayBody: 'Click on any interest group event to display the group\'s current state',
    /**
     *@description Placeholder text telling the user no details are available for
     *the selected interest group.
     */
    noDataAvailable: 'No details available for the selected interest group. The browser may have left the group.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/InterestGroupStorageView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function eventEquals(a, b) {
    return (a.accessTime === b.accessTime && a.type === b.type && a.ownerOrigin === b.ownerOrigin && a.name === b.name);
}
class InterestGroupStorageView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget {
    constructor(detailsGetter) {
        super(/* isVertical */ false, /* secondIsSidebar: */ true);
        Object.defineProperty(this, "interestGroupGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.InterestGroupAccessGrid.InterestGroupAccessGrid()
        });
        Object.defineProperty(this, "events", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
        Object.defineProperty(this, "detailsGetter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "noDataView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "noDisplayView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('interest-groups')}`);
        this.detailsGetter = detailsGetter;
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        this.noDisplayView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        this.noDataView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        this.noDisplayView.setMinimumSize(0, 40);
        this.setSidebarWidget(this.noDisplayView);
        this.noDataView.setMinimumSize(0, 40);
        topPanel.contentElement.appendChild(this.interestGroupGrid);
        this.interestGroupGrid.addEventListener('cellfocused', this.onFocus.bind(this));
        this.noDisplayView.contentElement.classList.add('placeholder');
        this.noDisplayView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('details').track({ resize: true })}`);
        const noDisplayDiv = this.noDisplayView.contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
        this.noDataView.contentElement.classList.add('placeholder');
        this.noDataView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('details').track({ resize: true })}`);
        const noDataDiv = this.noDataView.contentElement.createChild('div');
        noDataDiv.textContent = i18nString(UIStrings.noDataAvailable);
    }
    wasShown() {
        super.wasShown();
        const sbw = this.sidebarWidget();
        if (sbw) {
            sbw.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './interestGroupStorageView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        }
    }
    addEvent(event) {
        // Only add if not already present.
        const foundEvent = this.events.find(t => eventEquals(t, event));
        if (!foundEvent) {
            this.events.push(event);
            this.interestGroupGrid.data = this.events;
        }
    }
    clearEvents() {
        this.events = [];
        this.interestGroupGrid.data = this.events;
        this.setSidebarWidget(this.noDisplayView);
        this.sidebarUpdatedForTesting();
    }
    async onFocus(event) {
        const focusedEvent = event;
        const row = focusedEvent.data.row;
        if (!row) {
            return;
        }
        const ownerOrigin = row.cells.find(cell => cell.columnId === 'event-group-owner')?.value;
        const name = row.cells.find(cell => cell.columnId === 'event-group-name')?.value;
        const eventType = row.cells.find(cell => cell.columnId === 'event-type')?.value;
        if (!ownerOrigin || !name) {
            return;
        }
        let details = null;
        // Details of additional bids can't be looked up like regular bids,
        // they are ephemeral to the auction.
        if (eventType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.InterestGroupAccessType.AdditionalBid &&
            eventType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.InterestGroupAccessType.AdditionalBidWin &&
            eventType !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.Storage.InterestGroupAccessType.TopLevelAdditionalBid) {
            details = await this.detailsGetter.getInterestGroupDetails(ownerOrigin, name);
        }
        if (details) {
            const jsonView = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createView(JSON.stringify(details));
            jsonView?.setMinimumSize(0, 40);
            if (jsonView) {
                jsonView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('details').track({ resize: true })}`);
                this.setSidebarWidget(jsonView);
            }
        }
        else {
            this.setSidebarWidget(this.noDataView);
        }
        this.sidebarUpdatedForTesting();
    }
    getEventsForTesting() {
        return this.events;
    }
    getInterestGroupGridForTesting() {
        return this.interestGroupGrid;
    }
    sidebarUpdatedForTesting() {
    }
}


/***/ }),

/***/ "./src/panels/application/InterestGroupTreeElement.ts":
/*!************************************************************!*\
  !*** ./src/panels/application/InterestGroupTreeElement.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupTreeElement: () => (/* binding */ InterestGroupTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./src/panels/application/ApplicationPanelTreeElement.ts");
/* harmony import */ var _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./InterestGroupStorageView.js */ "./src/panels/application/InterestGroupStorageView.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Label for an item in the Application Panel Sidebar of the Application panel
     * An interest group is an ad targeting group stored on the browser that can
     * be used to show a certain set of advertisements in the future as the
     * outcome of a FLEDGE auction. (https://developer.chrome.com/blog/fledge-api/)
     */
    interestGroups: 'Interest groups',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/InterestGroupTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class InterestGroupTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_4__.ApplicationPanelTreeElement {
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.interestGroups), false, 'interest-groups');
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        const interestGroupIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create('database');
        this.setLeadingIcons([interestGroupIcon]);
        this.view = new _InterestGroupStorageView_js__WEBPACK_IMPORTED_MODULE_5__.InterestGroupStorageView(this);
    }
    get itemURL() {
        return 'interest-groups://';
    }
    async getInterestGroupDetails(owner, name) {
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget();
        if (!mainTarget) {
            return null;
        }
        const response = await mainTarget.storageAgent().invoke_getInterestGroupDetails({ 'ownerOrigin': owner, 'name': name });
        return response.details;
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('interest-groups');
        return false;
    }
    addEvent(event) {
        this.view.addEvent(event);
    }
    clearEvents() {
        this.view.clearEvents();
    }
}


/***/ })

}]);