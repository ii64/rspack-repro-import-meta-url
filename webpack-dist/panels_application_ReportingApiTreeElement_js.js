"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ReportingApiTreeElement_js"],{

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

/***/ "./panels/application/ReportingApiReportsView.js":
/*!*******************************************************!*\
  !*** ./panels/application/ReportingApiReportsView.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiReportsView: () => (/* binding */ ReportingApiReportsView),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _reportingApiReportsView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reportingApiReportsView.css.js */ "./panels/application/reportingApiReportsView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Placeholder text instructing the user how to display a Reporting API
     *report body (https://developers.google.com/web/updates/2018/09/reportingapi#sending).
     */
    clickToDisplayBody: 'Click on any report to display its body',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/ReportingApiReportsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ReportingApiReportsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget {
    reportsGrid = new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.ReportsGrid.ReportsGrid();
    reports = [];
    constructor(networkManager) {
        super(/* isVertical: */ false, /* secondIsSidebar: */ true);
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        const bottomPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        bottomPanel.setMinimumSize(0, 40);
        bottomPanel.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('preview').track({ resize: true })}`);
        this.setSidebarWidget(bottomPanel);
        topPanel.contentElement.appendChild(this.reportsGrid);
        this.reportsGrid.addEventListener('cellfocused', this.onFocus.bind(this));
        bottomPanel.contentElement.classList.add('placeholder');
        const centered = bottomPanel.contentElement.createChild('div');
        centered.textContent = i18nString(UIStrings.clickToDisplayBody);
        networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.ReportingApiReportAdded, event => this.onReportAdded(event.data), this);
        networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkManager.Events.ReportingApiReportUpdated, event => this.onReportUpdated(event.data), this);
    }
    wasShown() {
        super.wasShown();
        const sbw = this.sidebarWidget();
        if (sbw) {
            sbw.registerCSSFiles([_reportingApiReportsView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
        }
    }
    onReportAdded(report) {
        this.reports.push(report);
        this.reportsGrid.data = { reports: this.reports };
    }
    onReportUpdated(report) {
        const index = this.reports.findIndex(oldReport => oldReport.id === report.id);
        this.reports[index] = report;
        this.reportsGrid.data = { reports: this.reports };
    }
    async onFocus(event) {
        const focusedEvent = event;
        const cell = focusedEvent.data.row.cells.find(cell => cell.columnId === 'id');
        const report = cell && this.reports.find(report => report.id === cell.value);
        if (report) {
            const jsonView = await _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createView(JSON.stringify(report.body));
            jsonView?.setMinimumSize(0, 40);
            if (jsonView) {
                this.setSidebarWidget(jsonView);
            }
        }
    }
    getReports() {
        return this.reports;
    }
    getReportsGrid() {
        return this.reportsGrid;
    }
}
//# sourceMappingURL=ReportingApiReportsView.js.map

/***/ }),

/***/ "./panels/application/ReportingApiTreeElement.js":
/*!*******************************************************!*\
  !*** ./panels/application/ReportingApiTreeElement.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiTreeElement: () => (/* binding */ ReportingApiTreeElement),
/* harmony export */   i18nString: () => (/* binding */ i18nString)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */ var _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ReportingApiView.js */ "./panels/application/ReportingApiView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Label for an item in the Application Panel Sidebar of the Application panel
     */
    reportingApi: 'Reporting API',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/ReportingApiTreeElement.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ReportingApiTreeElement extends _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__.ApplicationPanelTreeElement {
    view;
    constructor(storagePanel) {
        super(storagePanel, i18nString(UIStrings.reportingApi), false, 'reporting-api');
        const icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('document');
        this.setLeadingIcons([icon]);
    }
    get itemURL() {
        return 'reportingApi://';
    }
    onselect(selectedByUser) {
        super.onselect(selectedByUser);
        if (!this.view) {
            this.view = new _ReportingApiView_js__WEBPACK_IMPORTED_MODULE_5__.ReportingApiView(new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.EndpointsGrid.EndpointsGrid());
        }
        this.showView(this.view);
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('reporting-api');
        return false;
    }
}
//# sourceMappingURL=ReportingApiTreeElement.js.map

/***/ }),

/***/ "./panels/application/ReportingApiView.js":
/*!************************************************!*\
  !*** ./panels/application/ReportingApiView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReportingApiView: () => (/* binding */ ReportingApiView)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReportingApiReportsView.js */ "./panels/application/ReportingApiReportsView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class ReportingApiView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.SplitWidget.SplitWidget {
    endpointsGrid;
    endpoints;
    constructor(endpointsGrid) {
        super(/* isVertical: */ false, /* secondIsSidebar: */ true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.pane('reporting-api')}`);
        this.endpointsGrid = endpointsGrid;
        this.endpoints = new Map();
        const mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().primaryPageTarget();
        const networkManager = mainTarget && mainTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.NetworkManager);
        if (networkManager) {
            networkManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.NetworkManager.Events.ReportingApiEndpointsChangedForOrigin, event => this.onEndpointsChangedForOrigin(event.data), this);
            const reportingApiReportsView = new _ReportingApiReportsView_js__WEBPACK_IMPORTED_MODULE_3__.ReportingApiReportsView(networkManager);
            const reportingApiEndpointsView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox();
            reportingApiEndpointsView.setMinimumSize(0, 40);
            reportingApiEndpointsView.contentElement.appendChild(this.endpointsGrid);
            this.setMainWidget(reportingApiReportsView);
            this.setSidebarWidget(reportingApiEndpointsView);
            void networkManager.enableReportingApi();
        }
    }
    onEndpointsChangedForOrigin(data) {
        this.endpoints.set(data.origin, data.endpoints);
        this.endpointsGrid.data = { endpoints: this.endpoints };
    }
}
//# sourceMappingURL=ReportingApiView.js.map

/***/ }),

/***/ "./panels/application/reportingApiReportsView.css.js":
/*!***********************************************************!*\
  !*** ./panels/application/reportingApiReportsView.css.js ***!
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
 * Copyright 2021 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

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

/*# sourceURL=reportingApiReportsView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);