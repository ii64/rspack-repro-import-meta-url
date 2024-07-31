"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ResourcesPanel_ts"],{

/***/ "./src/panels/application/ResourcesPanel.ts":
/*!**************************************************!*\
  !*** ./src/panels/application/ResourcesPanel.ts ***!
  \**************************************************/
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
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./src/panels/application/ApplicationPanelSidebar.ts");
/* harmony import */ var _CookieItemsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CookieItemsView.js */ "./src/panels/application/CookieItemsView.ts");
/* harmony import */ var _DOMStorageItemsView_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DOMStorageItemsView.js */ "./src/panels/application/DOMStorageItemsView.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './resourcesPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _StorageItemsView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./StorageItemsView.js */ "./src/panels/application/StorageItemsView.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__]);
_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.











let resourcesPanelInstance;
class ResourcesPanel extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Panel.PanelWithSidebar {
    constructor() {
        super('resources');
        Object.defineProperty(this, "resourcesLastSelectedItemSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "visibleView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pendingViewPromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "categoryView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storageViews", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "storageViewToolbar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "domStorageView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieView", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "emptyWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "sidebar", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './resourcesPanel.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);