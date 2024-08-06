"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_InterestGroupStorageView_js"],{

/***/ "./panels/application/InterestGroupStorageView.js":
/*!********************************************************!*\
  !*** ./panels/application/InterestGroupStorageView.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InterestGroupStorageView: () => (/* binding */ InterestGroupStorageView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _interestGroupStorageView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interestGroupStorageView.css.js */ "./panels/application/interestGroupStorageView.css.js");
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
class InterestGroupStorageView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.SplitWidget.SplitWidget {
    interestGroupGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.InterestGroupAccessGrid.InterestGroupAccessGrid();
    events = [];
    detailsGetter;
    noDataView;
    noDisplayView;
    constructor(detailsGetter) {
        super(/* isVertical */ false, /* secondIsSidebar: */ true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('interest-groups')}`);
        this.detailsGetter = detailsGetter;
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        this.noDisplayView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        this.noDataView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        this.noDisplayView.setMinimumSize(0, 40);
        this.setSidebarWidget(this.noDisplayView);
        this.noDataView.setMinimumSize(0, 40);
        topPanel.contentElement.appendChild(this.interestGroupGrid);
        this.interestGroupGrid.addEventListener('cellfocused', this.onFocus.bind(this));
        this.noDisplayView.contentElement.classList.add('placeholder');
        this.noDisplayView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('details').track({ resize: true })}`);
        const noDisplayDiv = this.noDisplayView.contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
        this.noDataView.contentElement.classList.add('placeholder');
        this.noDataView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('details').track({ resize: true })}`);
        const noDataDiv = this.noDataView.contentElement.createChild('div');
        noDataDiv.textContent = i18nString(UIStrings.noDataAvailable);
    }
    wasShown() {
        super.wasShown();
        const sbw = this.sidebarWidget();
        if (sbw) {
            sbw.registerCSSFiles([_interestGroupStorageView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
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
        if (eventType !== "additionalBid" /* Protocol.Storage.InterestGroupAccessType.AdditionalBid */ &&
            eventType !== "additionalBidWin" /* Protocol.Storage.InterestGroupAccessType.AdditionalBidWin */ &&
            eventType !== "topLevelAdditionalBid" /* Protocol.Storage.InterestGroupAccessType.TopLevelAdditionalBid */) {
            details = await this.detailsGetter.getInterestGroupDetails(ownerOrigin, name);
        }
        if (details) {
            const jsonView = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__.JSONView.JSONView.createView(JSON.stringify(details));
            jsonView?.setMinimumSize(0, 40);
            if (jsonView) {
                jsonView.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('details').track({ resize: true })}`);
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
//# sourceMappingURL=InterestGroupStorageView.js.map

/***/ }),

/***/ "./panels/application/interestGroupStorageView.css.js":
/*!************************************************************!*\
  !*** ./panels/application/interestGroupStorageView.css.js ***!
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

devtools-interest-group-access-grid {
  overflow: auto;
}

.placeholder {
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: var(--sys-color-token-subtle);
  overflow: auto;
  text-align: center;

  & div {
    width: 100%;
  }
}

/*# sourceURL=interestGroupStorageView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);