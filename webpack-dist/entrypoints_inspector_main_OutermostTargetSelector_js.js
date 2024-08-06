"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_inspector_main_OutermostTargetSelector_js"],{

/***/ "./entrypoints/inspector_main/OutermostTargetSelector.js":
/*!***************************************************************!*\
  !*** ./entrypoints/inspector_main/OutermostTargetSelector.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutermostTargetSelector: () => (/* binding */ OutermostTargetSelector)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _outermostTargetSelector_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outermostTargetSelector.css.js */ "./entrypoints/inspector_main/outermostTargetSelector.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Title of toolbar item in outermost target selector in the main toolbar
     */
    targetNotSelected: 'Page: Not selected',
    /**
     *@description Title of toolbar item in outermost target selector in the main toolbar
     *@example {top} PH1
     */
    targetS: 'Page: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('entrypoints/inspector_main/OutermostTargetSelector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
let outermostTargetSelectorInstance;
class OutermostTargetSelector {
    listItems;
    #dropDown;
    #toolbarItem;
    constructor() {
        this.listItems = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel();
        this.#dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SoftDropDown.SoftDropDown(this.listItems, this);
        this.#dropDown.setRowHeight(36);
        this.#toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(this.#dropDown.element);
        this.#toolbarItem.setTitle(i18nString(UIStrings.targetNotSelected));
        this.listItems.addEventListener("ItemsReplaced" /* UI.ListModel.Events.ItemsReplaced */, () => this.#toolbarItem.setEnabled(Boolean(this.listItems.length)));
        this.#toolbarItem.element.classList.add('toolbar-has-dropdown');
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        targetManager.addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager, "TargetInfoChanged" /* SDK.ChildTargetManager.Events.TargetInfoChanged */, this.#onTargetInfoChanged, this);
        targetManager.addEventListener("NameChanged" /* SDK.TargetManager.Events.NameChanged */, this.#onInspectedURLChanged, this);
        targetManager.observeTargets(this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, this.#targetChanged, this);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!outermostTargetSelectorInstance || forceNew) {
            outermostTargetSelectorInstance = new OutermostTargetSelector();
        }
        return outermostTargetSelectorInstance;
    }
    item() {
        return this.#toolbarItem;
    }
    highlightedItemChanged(_from, _to, fromElement, toElement) {
        if (fromElement) {
            fromElement.classList.remove('highlighted');
        }
        if (toElement) {
            toElement.classList.add('highlighted');
        }
    }
    titleFor(target) {
        return target.name();
    }
    targetAdded(target) {
        if (target.outermostTarget() !== target) {
            return;
        }
        this.listItems.insertWithComparator(target, this.#targetComparator());
        this.#toolbarItem.setVisible(this.listItems.length > 1);
        if (target === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)) {
            this.#dropDown.selectItem(target);
        }
    }
    targetRemoved(target) {
        const index = this.listItems.indexOf(target);
        if (index === -1) {
            return;
        }
        this.listItems.remove(index);
        this.#toolbarItem.setVisible(this.listItems.length > 1);
    }
    #targetComparator() {
        return (a, b) => {
            const aTargetInfo = a.targetInfo();
            const bTargetInfo = b.targetInfo();
            if (!aTargetInfo || !bTargetInfo) {
                return 0;
            }
            if (!aTargetInfo.subtype?.length && bTargetInfo.subtype?.length) {
                return -1;
            }
            if (aTargetInfo.subtype?.length && !bTargetInfo.subtype?.length) {
                return 1;
            }
            return aTargetInfo.url.localeCompare(bTargetInfo.url);
        };
    }
    #onTargetInfoChanged(event) {
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        const target = targetManager.targetById(event.data.targetId);
        if (!target || target.outermostTarget() !== target) {
            return;
        }
        this.targetRemoved(target);
        this.targetAdded(target);
    }
    #onInspectedURLChanged(event) {
        const target = event.data;
        if (!target || target.outermostTarget() !== target) {
            return;
        }
        this.targetRemoved(target);
        this.targetAdded(target);
    }
    #targetChanged({ data: target, }) {
        this.#dropDown.selectItem(target?.outermostTarget() || null);
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        element.classList.add('target');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [_outermostTargetSelector_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]], delegatesFocus: undefined });
        const title = shadowRoot.createChild('div', 'title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
        const subTitle = shadowRoot.createChild('div', 'subtitle');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(subTitle, this.#subtitleFor(item));
        return element;
    }
    #subtitleFor(target) {
        const targetInfo = target.targetInfo();
        if (target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget() && targetInfo) {
            return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceUtils.displayNameForURL(targetInfo.url);
        }
        return target.targetInfo()?.subtype || '';
    }
    isItemSelectable(_item) {
        return true;
    }
    itemSelected(item) {
        const title = item ? i18nString(UIStrings.targetS, { PH1: this.titleFor(item) }) : i18nString(UIStrings.targetNotSelected);
        this.#toolbarItem.setTitle(title);
        if (item && item !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)?.outermostTarget()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, item);
        }
    }
}
//# sourceMappingURL=OutermostTargetSelector.js.map

/***/ }),

/***/ "./entrypoints/inspector_main/outermostTargetSelector.css.js":
/*!*******************************************************************!*\
  !*** ./entrypoints/inspector_main/outermostTargetSelector.css.js ***!
  \*******************************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 2px 1px 2px 2px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
  overflow-y: auto;
}

.title {
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  flex-grow: 0;
}

.subtitle {
  color: var(--sys-color-token-subtle);
  margin-right: 3px;
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  flex-grow: 0;
}

:host(.highlighted) .subtitle {
  color: inherit;
}

/*# sourceURL=outermostTargetSelector.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);