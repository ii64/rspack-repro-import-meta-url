"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_SharedStorageEventsView_js"],{

/***/ "./panels/application/SharedStorageEventsView.js":
/*!*******************************************************!*\
  !*** ./panels/application/SharedStorageEventsView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageEventsView: () => (/* binding */ SharedStorageEventsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _sharedStorageEventsView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sharedStorageEventsView.css.js */ "./panels/application/sharedStorageEventsView.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Placeholder text instructing the user how to display shared
     *storage event details.
     */
    clickToDisplayBody: 'Click on any shared storage event to display the event parameters.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/SharedStorageEventsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function eventEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
class SharedStorageEventsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget {
    #sharedStorageEventGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageAccessGrid.SharedStorageAccessGrid();
    #events = [];
    #noDisplayView;
    #defaultId = '';
    constructor() {
        super(/* isVertical */ false, /* secondIsSidebar: */ true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('shared-storage-events')}`);
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        this.#noDisplayView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        this.#noDisplayView.setMinimumSize(0, 40);
        this.setSidebarWidget(this.#noDisplayView);
        topPanel.contentElement.appendChild(this.#sharedStorageEventGrid);
        this.#sharedStorageEventGrid.addEventListener('cellfocused', this.#onFocus.bind(this));
        this.#sharedStorageEventGrid.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('events-table')}`);
        this.#getMainFrameResourceTreeModel()?.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, this.clearEvents, this);
        this.#noDisplayView.contentElement.classList.add('placeholder');
        const noDisplayDiv = this.#noDisplayView.contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
    }
    #getMainFrameResourceTreeModel() {
        const primaryPageTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
        return primaryPageTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel) || null;
    }
    #getMainFrame() {
        return this.#getMainFrameResourceTreeModel()?.mainFrame || null;
    }
    get id() {
        return this.#getMainFrame()?.id || this.#defaultId;
    }
    wasShown() {
        super.wasShown();
        const sidebar = this.sidebarWidget();
        if (sidebar) {
            sidebar.registerCSSFiles([_sharedStorageEventsView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
        }
    }
    addEvent(event) {
        // Only add event if main frame id matches.
        if (event.mainFrameId !== this.id) {
            return;
        }
        // Only add if not already present.
        if (this.#events.some(t => eventEquals(t, event))) {
            return;
        }
        this.#events.push(event);
        this.#sharedStorageEventGrid.data = this.#events;
    }
    clearEvents() {
        this.#events = [];
        this.#sharedStorageEventGrid.data = this.#events;
        this.setSidebarWidget(this.#noDisplayView);
    }
    async #onFocus(event) {
        const focusedEvent = event;
        const row = focusedEvent.data.row;
        if (!row) {
            return;
        }
        const wrappedEvent = {
            accessTime: row.cells.find(cell => cell.columnId === 'event-time')?.value,
            accessType: row.cells.find(cell => cell.columnId === 'event-type')?.value,
            ownerOrigin: row.cells.find(cell => cell.columnId === 'event-owner-origin')?.value,
            eventParams: JSON.parse(row.cells.find(cell => cell.columnId === 'event-params')?.value),
        };
        const jsonView = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createViewSync(wrappedEvent);
        jsonView.setMinimumSize(0, 40);
        this.setSidebarWidget(jsonView);
    }
    setDefaultIdForTesting(id) {
        this.#defaultId = id;
    }
    getEventsForTesting() {
        return this.#events;
    }
    getSharedStorageAccessGridForTesting() {
        return this.#sharedStorageEventGrid;
    }
}
//# sourceMappingURL=SharedStorageEventsView.js.map

/***/ }),

/***/ "./panels/application/sharedStorageEventsView.css.js":
/*!***********************************************************!*\
  !*** ./panels/application/sharedStorageEventsView.css.js ***!
  \***********************************************************/
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
 * Copyright 2022 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

devtools-shared-storage-access-grid {
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

/*# sourceURL=sharedStorageEventsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);