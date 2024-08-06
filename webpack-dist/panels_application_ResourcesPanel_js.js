"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_application_ResourcesPanel_js"],{

/***/ "./panels/application/ResourcesPanel.js":
/*!**********************************************!*\
  !*** ./panels/application/ResourcesPanel.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AttemptViewWithFilterRevealer: () => (/* binding */ AttemptViewWithFilterRevealer),
/* harmony export */   FrameDetailsRevealer: () => (/* binding */ FrameDetailsRevealer),
/* harmony export */   ResourceRevealer: () => (/* binding */ ResourceRevealer),
/* harmony export */   ResourcesPanel: () => (/* binding */ ResourcesPanel),
/* harmony export */   RuleSetViewRevealer: () => (/* binding */ RuleSetViewRevealer)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */ var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CookieItemsView.js */ "./panels/application/CookieItemsView.js");
/* harmony import */ var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./panels/application/DOMStorageItemsView.js");
/* harmony import */ var _resourcesPanel_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resourcesPanel.css.js */ "./panels/application/resourcesPanel.css.js");
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StorageItemsView.js */ "./panels/application/StorageItemsView.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__]);
_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











let resourcesPanelInstance;
class ResourcesPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Panel.PanelWithSidebar {
    resourcesLastSelectedItemSetting;
    visibleView;
    pendingViewPromise;
    categoryView;
    storageViews;
    storageViewToolbar;
    domStorageView;
    cookieView;
    emptyWidget;
    sidebar;
    constructor() {
        super('resources');
        this.resourcesLastSelectedItemSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-last-selected-element-path', []);
        this.visibleView = null;
        this.pendingViewPromise = null;
        this.categoryView = null;
        const mainContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox();
        mainContainer.setMinimumSize(100, 0);
        this.storageViews = mainContainer.element.createChild('div', 'vbox flex-auto');
        this.storageViewToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Toolbar('resources-toolbar', mainContainer.element);
        this.splitWidget().setMainWidget(mainContainer);
        this.domStorageView = null;
        this.cookieView = null;
        this.emptyWidget = null;
        this.sidebar = new _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__.ApplicationPanelSidebar(this);
        this.sidebar.show(this.panelSidebarElement());
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!resourcesPanelInstance || forceNew) {
            resourcesPanelInstance = new ResourcesPanel();
        }
        return resourcesPanelInstance;
    }
    static shouldCloseOnReset(view) {
        const viewClassesToClose = [
            _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.ResourceSourceFrame.ResourceSourceFrame,
            _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.ImageView.ImageView,
            _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__.FontView.FontView,
            _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_10__.StorageItemsView,
        ];
        return viewClassesToClose.some(type => view instanceof type);
    }
    static async showAndGetSidebar() {
        await _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView('resources');
        return ResourcesPanel.instance().sidebar;
    }
    focus() {
        this.sidebar.focus();
    }
    lastSelectedItemPath() {
        return this.resourcesLastSelectedItemSetting.get();
    }
    setLastSelectedItemPath(path) {
        this.resourcesLastSelectedItemSetting.set(path);
    }
    resetView() {
        if (this.visibleView && ResourcesPanel.shouldCloseOnReset(this.visibleView)) {
            this.showView(null);
        }
    }
    showView(view) {
        this.pendingViewPromise = null;
        if (this.visibleView === view) {
            return;
        }
        if (this.visibleView) {
            this.visibleView.detach();
        }
        if (view) {
            view.show(this.storageViews);
        }
        this.visibleView = view;
        this.storageViewToolbar.removeToolbarItems();
        this.storageViewToolbar.element.classList.toggle('hidden', true);
        if (view instanceof _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.View.SimpleView) {
            void view.toolbarItems().then(items => {
                items.map(item => this.storageViewToolbar.appendToolbarItem(item));
                this.storageViewToolbar.element.classList.toggle('hidden', !items.length);
            });
        }
    }
    async scheduleShowView(viewPromise) {
        this.pendingViewPromise = viewPromise;
        const view = await viewPromise;
        if (this.pendingViewPromise !== viewPromise) {
            return null;
        }
        this.showView(view);
        return view;
    }
    showCategoryView(categoryName, categoryLink) {
        if (!this.categoryView) {
            this.categoryView = new _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__.StorageCategoryView();
        }
        this.categoryView.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane().context(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(categoryName))}`);
        this.categoryView.setText(categoryName);
        this.categoryView.setLink(categoryLink);
        this.showView(this.categoryView);
    }
    showDOMStorage(domStorage) {
        if (!domStorage) {
            return;
        }
        if (!this.domStorageView) {
            this.domStorageView = new _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__.DOMStorageItemsView(domStorage);
        }
        else {
            this.domStorageView.setStorage(domStorage);
        }
        this.showView(this.domStorageView);
    }
    showCookies(cookieFrameTarget, cookieDomain) {
        const model = cookieFrameTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieModel.CookieModel);
        if (!model) {
            return;
        }
        if (!this.cookieView) {
            this.cookieView = new _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_7__.CookieItemsView(model, cookieDomain);
        }
        else {
            this.cookieView.setCookiesDomain(model, cookieDomain);
        }
        this.showView(this.cookieView);
    }
    clearCookies(target, cookieDomain) {
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.CookieModel.CookieModel);
        if (!model) {
            return;
        }
        void model.clear(cookieDomain).then(() => {
            if (this.cookieView) {
                this.cookieView.refreshItems();
            }
        });
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_resourcesPanel_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]]);
    }
}
class ResourceRevealer {
    async reveal(resource) {
        const sidebar = await ResourcesPanel.showAndGetSidebar();
        await sidebar.showResource(resource);
    }
}
class FrameDetailsRevealer {
    async reveal(frame) {
        const sidebar = await ResourcesPanel.showAndGetSidebar();
        sidebar.showFrame(frame);
    }
}
class RuleSetViewRevealer {
    async reveal(revealInfo) {
        const sidebar = await ResourcesPanel.showAndGetSidebar();
        sidebar.showPreloadingRuleSetView(revealInfo);
    }
}
class AttemptViewWithFilterRevealer {
    async reveal(filter) {
        const sidebar = await ResourcesPanel.showAndGetSidebar();
        sidebar.showPreloadingAttemptViewWithFilter(filter);
    }
}
//# sourceMappingURL=ResourcesPanel.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./panels/application/resourcesPanel.css.js":
/*!**************************************************!*\
  !*** ./panels/application/resourcesPanel.css.js ***!
  \**************************************************/
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
 * Copyright (C) 2006, 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Anthony Ricaud <rik@webkit.org>
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

.resources-toolbar {
  border-top: 1px solid var(--sys-color-divider);
  background-color: var(--sys-color-cdt-base-container);
}

.top-resources-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
  background-color: var(--sys-color-cdt-base-container);
}

.resources.panel .status {
  float: right;
  height: 16px;
  margin-top: 1px;
  margin-left: 4px;
  line-height: 1em;
}

.storage-view {
  display: flex;
  overflow: hidden;
}

.storage-view .data-grid:not(.inline) {
  border: none;
  flex: auto;
}

.storage-view .storage-table-error {
  color: var(--sys-color-error);
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.storage-view.query {
  padding: 2px 0;
  overflow-y: overlay;
  overflow-x: hidden;
}

.storage-view .filter-bar {
  border-top: none;
  border-bottom: 1px solid var(--sys-color-divider);
}

.database-query-group-messages {
  overflow-y: auto;
}

.database-query-prompt-container {
  position: relative;
  padding: 1px 22px 1px 24px;
  min-height: 16px;
}

.database-query-prompt {
  white-space: pre-wrap;
}

.prompt-icon {
  position: absolute;
  display: block;
  left: 7px;
  top: 9px;
  margin-top: -7px;
  user-select: none;
}

.database-user-query .prompt-icon {
  margin-top: -10px;
}

.database-query-prompt-container .prompt-icon {
  top: 6px;
}

.database-user-query {
  position: relative;
  border-bottom: 1px solid var(--sys-color-divider);
  padding: 1px 22px 1px 24px;
  min-height: 16px;
  flex-shrink: 0;
}

.database-user-query:focus-visible {
  background-color: var(--sys-color-state-focus-highlight);
}

.database-query-text {
  color: var(--sys-color-primary-bright);
  user-select: text;
}

.database-query-result {
  position: relative;
  padding: 1px 22px;
  min-height: 16px;
  margin-left: -22px;
  padding-right: 0;
}

.database-query-result.error {
  color: var(--sys-color-token-property-special);
  user-select: text;
}

.database-query-result.error .prompt-icon {
  margin-top: -9px;
}

.resources-sidebar {
  padding: 0;
  overflow-x: auto;
  background-color: var(--sys-color-cdt-base-container);
}

/*# sourceURL=resourcesPanel.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);