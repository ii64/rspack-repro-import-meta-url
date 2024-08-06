"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_developer_resources_DeveloperResourcesView_test_js"],{

/***/ "./panels/developer_resources/DeveloperResourcesView.js":
/*!**************************************************************!*\
  !*** ./panels/developer_resources/DeveloperResourcesView.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeveloperResourcesRevealer: () => (/* binding */ DeveloperResourcesRevealer),
/* harmony export */   DeveloperResourcesView: () => (/* binding */ DeveloperResourcesView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _DeveloperResourcesListView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DeveloperResourcesListView.js */ "./panels/developer_resources/DeveloperResourcesListView.js");
/* harmony import */ var _developerResourcesView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developerResourcesView.css.js */ "./panels/developer_resources/developerResourcesView.css.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const UIStrings = {
    /**
     *@description Placeholder for a search field in a toolbar
     */
    filterByText: 'Filter by URL and error',
    /**
     * @description Tooltip for a checkbox in the toolbar of the developer resources view. The
     * inspected target is the webpage that DevTools is debugging/inspecting/attached to.
     */
    loadHttpsDeveloperResources: 'Load `HTTP(S)` developer resources through the website you inspect, not through DevTools',
    /**
     * @description Text for a checkbox in the toolbar of the developer resources view. The target is
     * the webpage that DevTools is debugging/inspecting/attached to. This setting makes it so
     * developer resources are requested from the webpage itself, and not from the DevTools
     * application.
     */
    enableLoadingThroughTarget: 'Load through website',
    /**
     *@description Text for resources load status
     *@example {1} PH1
     *@example {1} PH2
     */
    resourcesCurrentlyLoading: '{PH1} resources, {PH2} currently loading',
    /**
     * @description Status text that appears to tell the developer how many resources were loaded in
     * total. Resources are files related to the webpage.
     */
    resources: '{n, plural, =1 {# resource} other {# resources}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/developer_resources/DeveloperResourcesView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class DeveloperResourcesRevealer {
    async reveal(resourceInitiatorKey) {
        const loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PageResourceLoader.PageResourceLoader.instance();
        const resource = loader.getResourcesLoaded().get(resourceInitiatorKey.key);
        if (resource) {
            await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().showView('developer-resources');
            const developerResourcesView = await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().view('developer-resources').widget();
            return developerResourcesView.select(resource);
        }
    }
}
class DeveloperResourcesView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ThrottledWidget.ThrottledWidget {
    textFilterRegExp;
    filterInput;
    coverageResultsElement;
    listView;
    statusToolbarElement;
    statusMessageElement;
    loader;
    constructor() {
        super(true);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.panel('developer-resources').track({ resize: true })}`);
        const toolbarContainer = this.contentElement.createChild('div', 'developer-resource-view-toolbar-container');
        toolbarContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toolbar()}`);
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Toolbar('developer-resource-view-toolbar', toolbarContainer);
        this.textFilterRegExp = null;
        this.filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByText), 1);
        this.filterInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */, this.onFilterChanged, this);
        toolbar.appendToolbarItem(this.filterInput);
        const loadThroughTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PageResourceLoader.getLoadThroughTargetSetting();
        const loadThroughTargetCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarSettingCheckbox(loadThroughTarget, i18nString(UIStrings.loadHttpsDeveloperResources), i18nString(UIStrings.enableLoadingThroughTarget));
        toolbar.appendToolbarItem(loadThroughTargetCheckbox);
        this.coverageResultsElement = this.contentElement.createChild('div', 'developer-resource-view-results');
        this.listView = new _DeveloperResourcesListView_js__WEBPACK_IMPORTED_MODULE_5__.DeveloperResourcesListView(this.isVisible.bind(this));
        this.listView.show(this.coverageResultsElement);
        this.statusToolbarElement = this.contentElement.createChild('div', 'developer-resource-view-toolbar-summary');
        this.statusMessageElement = this.statusToolbarElement.createChild('div', 'developer-resource-view-message');
        this.loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.PageResourceLoader.PageResourceLoader.instance();
        this.loader.addEventListener("Update" /* SDK.PageResourceLoader.Events.Update */, this.update, this);
        this.update();
    }
    async doUpdate() {
        const selectedItem = this.listView.selectedItem();
        this.listView.reset();
        this.listView.update(this.loader.getScopedResourcesLoaded().values());
        if (selectedItem) {
            this.listView.select(selectedItem);
        }
        this.updateStats();
    }
    async select(resource) {
        await this.lastUpdatePromise;
        this.listView.select(resource);
    }
    async selectedItem() {
        await this.lastUpdatePromise;
        return this.listView.selectedItem();
    }
    updateStats() {
        const { loading, resources } = this.loader.getScopedNumberOfResources();
        if (loading > 0) {
            this.statusMessageElement.textContent =
                i18nString(UIStrings.resourcesCurrentlyLoading, { PH1: resources, PH2: loading });
        }
        else {
            this.statusMessageElement.textContent = i18nString(UIStrings.resources, { n: resources });
        }
    }
    isVisible(item) {
        return !this.textFilterRegExp || this.textFilterRegExp.test(item.url) ||
            this.textFilterRegExp.test(item.errorMessage || '');
    }
    onFilterChanged() {
        if (!this.listView) {
            return;
        }
        const text = this.filterInput.value();
        this.textFilterRegExp = text ? _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.createPlainTextSearchRegex(text, 'i') : null;
        this.listView.updateFilterAndHighlight(this.textFilterRegExp);
        this.updateStats();
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_developerResourcesView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]]);
    }
}
//# sourceMappingURL=DeveloperResourcesView.js.map

/***/ }),

/***/ "./panels/developer_resources/DeveloperResourcesView.test.js":
/*!*******************************************************************!*\
  !*** ./panels/developer_resources/DeveloperResourcesView.test.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _DeveloperResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeveloperResourcesView.js */ "./panels/developer_resources/DeveloperResourcesView.js");
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('DeveloperResourcesView', () => {
    it('allows selecting resources', async () => {
        const extensionId = 'extensionId';
        const initiator = { target: null, frameId: null, extensionId, initiatorUrl: extensionId };
        const commonInfo = { success: true, initiator, size: 10 };
        const resource1 = { url: 'http://www.test.com/test.js', ...commonInfo };
        const resource2 = { url: 'http://www.test.com/test2.js', ...commonInfo };
        const resource3 = { url: 'http://www.test.com/test3.js', ...commonInfo };
        const loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance();
        loader.resourceLoadedThroughExtension(resource1);
        loader.resourceLoadedThroughExtension(resource2);
        const developerResourcesView = new _DeveloperResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.DeveloperResourcesView();
        // This is required, as otherwise the view is not updated.
        sinon.stub(developerResourcesView, 'isShowing').callsFake(() => {
            return true;
        });
        assert.isNull(await developerResourcesView.selectedItem());
        developerResourcesView.update();
        await developerResourcesView.select(resource2);
        assert.deepEqual(await developerResourcesView.selectedItem(), resource2);
        loader.resourceLoadedThroughExtension(resource3);
        assert.deepEqual(await developerResourcesView.selectedItem(), resource2);
    });
});
//# sourceMappingURL=DeveloperResourcesView.test.js.map

/***/ }),

/***/ "./panels/developer_resources/developerResourcesView.css.js":
/*!******************************************************************!*\
  !*** ./panels/developer_resources/developerResourcesView.css.js ***!
  \******************************************************************/
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
 * Copyright (c) 2020 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  overflow: hidden;
}

.developer-resource-view-toolbar-container {
  display: flex;
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.developer-resource-view-toolbar {
  display: inline-block;
  width: 100%;
}

.developer-resource-view-toolbar-summary {
  background-color: var(--sys-color-cdt-base-container);
  border-top: 1px solid var(--sys-color-divider);
  padding-left: 5px;
  flex: 0 0 19px;
  display: flex;
  padding-right: 5px;
}

.developer-resource-view-toolbar-summary .developer-resource-view-message {
  padding-top: 2px;
  padding-left: 1ex;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.developer-resource-view-results {
  overflow-y: auto;
  display: flex;
  flex: auto;
}

/*# sourceURL=developerResourcesView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);