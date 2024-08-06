"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_SharedStorageListTreeElement_js"],{

/***/ "./panels/application/ApplicationPanelTreeElement.js":
/*!***********************************************************!*\
  !*** ./panels/application/ApplicationPanelTreeElement.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApplicationPanelTreeElement: () => (/* binding */ ApplicationPanelTreeElement),
/* harmony export */   ExpandableApplicationPanelTreeElement: () => (/* binding */ ExpandableApplicationPanelTreeElement)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class ApplicationPanelTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TreeOutline.TreeElement {
    resourcesPanel;
    constructor(resourcesPanel, title, expandable, jslogContext) {
        super(title, expandable, jslogContext);
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
    expandedSetting;
    categoryName;
    categoryLink;
    constructor(resourcesPanel, categoryName, settingsKey, settingsDefault = false) {
        super(resourcesPanel, categoryName, false, settingsKey);
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
//# sourceMappingURL=ApplicationPanelTreeElement.js.map

/***/ }),

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

/***/ "./panels/application/SharedStorageListTreeElement.js":
/*!************************************************************!*\
  !*** ./panels/application/SharedStorageListTreeElement.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageListTreeElement: () => (/* binding */ SharedStorageListTreeElement)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text in SharedStorage Category View of the Application panel
     */
    sharedStorage: 'Shared storage',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/SharedStorageListTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class SharedStorageListTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__.ApplicationPanelTreeElement {
    #expandedSetting;
    view;
    constructor(resourcesPanel, expandedSettingsDefault = false) {
        super(resourcesPanel, i18nString(UIStrings.sharedStorage), false, 'shared-storage');
        this.#expandedSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-shared-storage-expanded', expandedSettingsDefault);
        const sharedStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        this.setLeadingIcons([sharedStorageIcon]);
        this.view = new _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageEventsView();
    }
    get itemURL() {
        return 'shared-storage://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        this.resourcesPanel.showView(this.view);
        return false;
    }
    onattach() {
        super.onattach();
        if (this.#expandedSetting.get()) {
            this.expand();
        }
    }
    onexpand() {
        this.#expandedSetting.set(true);
    }
    oncollapse() {
        this.#expandedSetting.set(false);
    }
    addEvent(event) {
        this.view.addEvent(event);
    }
}
//# sourceMappingURL=SharedStorageListTreeElement.js.map

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