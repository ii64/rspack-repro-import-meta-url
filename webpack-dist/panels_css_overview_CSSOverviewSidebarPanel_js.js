"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_css_overview_CSSOverviewSidebarPanel_js"],{

/***/ "./panels/css_overview/CSSOverviewSidebarPanel.js":
/*!********************************************************!*\
  !*** ./panels/css_overview/CSSOverviewSidebarPanel.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSOverviewSidebarPanel: () => (/* binding */ CSSOverviewSidebarPanel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _cssOverviewSidebarPanel_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cssOverviewSidebarPanel.css.js */ "./panels/css_overview/cssOverviewSidebarPanel.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Label for the 'Clear overview' button in the CSS overview report
     */
    clearOverview: 'Clear overview',
    /**
     * @description Accessible label for the CSS overview panel sidebar
     */
    cssOverviewPanelSidebar: 'CSS overview panel sidebar',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/css_overview/CSSOverviewSidebarPanel.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const ITEM_CLASS_NAME = 'overview-sidebar-panel-item';
const SELECTED_CLASS_NAME = 'selected';
class CSSOverviewSidebarPanel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox) {
    containerElement;
    constructor() {
        super(true);
        this.contentElement.classList.add('overview-sidebar-panel');
        this.contentElement.addEventListener('click', this.#onItemClick.bind(this));
        this.contentElement.addEventListener('keydown', this.#onItemKeyDown.bind(this));
        // We need a container so that each item covers the full width of the
        // longest item, so that the selected item's background expands fully
        // even when the sidebar overflows.
        // Also see crbug/1408003
        this.containerElement =
            this.contentElement.createChild('div', 'overview-sidebar-panel-container');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(this.containerElement, i18nString(UIStrings.cssOverviewPanelSidebar));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTree(this.containerElement);
        // Clear overview.
        const clearResultsButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.clearOverview), 'clear', undefined, 'css-overview.clear-overview');
        clearResultsButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.#reset, this);
        // Toolbar.
        const toolbarElement = this.containerElement.createChild('div', 'overview-toolbar');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Toolbar('', toolbarElement);
        toolbar.appendToolbarItem(clearResultsButton);
    }
    addItem(name, id) {
        const item = this.containerElement.createChild('div', ITEM_CLASS_NAME);
        item.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item()
            .track({ click: true, keydown: 'Enter|ArrowUp|ArrowDown' })
            .context(`css-overview.${id}`)}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsTreeitem(item);
        item.textContent = name;
        item.dataset.id = id;
        item.tabIndex = 0;
    }
    #reset() {
        this.dispatchEventToListeners("Reset" /* SidebarEvents.Reset */);
    }
    #deselectAllItems() {
        const items = this.containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`);
        items.forEach(item => {
            item.classList.remove(SELECTED_CLASS_NAME);
        });
    }
    #onItemClick(event) {
        const target = event.composedPath()[0];
        if (!target.classList.contains(ITEM_CLASS_NAME)) {
            return;
        }
        const { id } = target.dataset;
        if (!id) {
            return;
        }
        this.select(id, false);
        this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */, { id, isMouseEvent: true, key: undefined });
    }
    #onItemKeyDown(event) {
        if (event.key !== 'Enter' && event.key !== 'ArrowUp' && event.key !== 'ArrowDown') {
            return;
        }
        const target = event.composedPath()[0];
        if (!target.classList.contains(ITEM_CLASS_NAME)) {
            return;
        }
        const { id } = target.dataset;
        if (!id) {
            return;
        }
        if (event.key === 'Enter') {
            this.select(id, false);
            this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */, { id, isMouseEvent: false, key: event.key });
        }
        else { // arrow up/down key
            const items = this.containerElement.querySelectorAll(`.${ITEM_CLASS_NAME}`);
            let currItemIndex = -1;
            for (let idx = 0; idx < items.length; idx++) {
                if (items[idx].dataset.id === id) {
                    currItemIndex = idx;
                    break;
                }
            }
            if (currItemIndex < 0) {
                return;
            }
            const moveTo = (event.key === 'ArrowDown' ? 1 : -1);
            const nextItemIndex = (currItemIndex + moveTo) % items.length;
            const nextItemId = items[nextItemIndex].dataset.id;
            if (!nextItemId) {
                return;
            }
            this.select(nextItemId, true);
            this.dispatchEventToListeners("ItemSelected" /* SidebarEvents.ItemSelected */, { id: nextItemId, isMouseEvent: false, key: event.key });
        }
        event.consume(true);
    }
    select(id, focus) {
        const target = this.containerElement.querySelector(`[data-id=${CSS.escape(id)}]`);
        if (!target) {
            return;
        }
        if (target.classList.contains(SELECTED_CLASS_NAME)) {
            return;
        }
        this.#deselectAllItems();
        target.classList.add(SELECTED_CLASS_NAME);
        if (focus) {
            target.contentEditable = 'true';
            target.focus();
            target.contentEditable = 'false';
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_cssOverviewSidebarPanel_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]]);
    }
}
//# sourceMappingURL=CSSOverviewSidebarPanel.js.map

/***/ }),

/***/ "./panels/css_overview/cssOverviewSidebarPanel.css.js":
/*!************************************************************!*\
  !*** ./panels/css_overview/cssOverviewSidebarPanel.css.js ***!
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
`/**
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.overview-sidebar-panel {
  overflow: auto;
  display: flex;
  background: var(--sys-color-cdt-base-container);
}

.overview-sidebar-panel-container {
  min-width: fit-content;
}

.overview-sidebar-panel-item {
  height: 30px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  color: var(--sys-color-on-surface);
  white-space: nowrap;

  &:hover {
    background: var(--sys-color-state-hover-on-subtle);
  }

  &:focus {
    background: var(--sys-color-state-focus-highlight);
  }

  &.selected {
    background: var(--sys-color-tonal-container);
    color: var(--sys-color-on-tonal-container);
  }
}

.overview-toolbar {
  border-bottom: 1px solid var(--sys-color-divider);
  flex: 0 0 auto;
}

.overview-sidebar-panel-item:focus-visible {
  outline-width: unset;
}

@media (forced-colors: active) {
  .overview-sidebar-panel-item.selected {
    forced-color-adjust: none; /* crbug.com/1166705 workaround */
    background: Highlight;
    color: HighlightText;
  }

  .overview-sidebar-panel-item:hover {
    forced-color-adjust: none; /* crbug.com/1166705 workaround */
    background: Highlight;
    color: HighlightText;
  }
}

/*# sourceURL=cssOverviewSidebarPanel.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);