"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_inspector_main_OutermostTargetSelector_ts"],{

/***/ "./src/entrypoints/inspector_main/OutermostTargetSelector.ts":
/*!*******************************************************************!*\
  !*** ./src/entrypoints/inspector_main/OutermostTargetSelector.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutermostTargetSelector: () => (/* binding */ OutermostTargetSelector)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './outermostTargetSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OutermostTargetSelector_instances, _OutermostTargetSelector_dropDown, _OutermostTargetSelector_toolbarItem, _OutermostTargetSelector_targetComparator, _OutermostTargetSelector_onTargetInfoChanged, _OutermostTargetSelector_onInspectedURLChanged, _OutermostTargetSelector_targetChanged, _OutermostTargetSelector_subtitleFor;






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
    constructor() {
        _OutermostTargetSelector_instances.add(this);
        Object.defineProperty(this, "listItems", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _OutermostTargetSelector_dropDown.set(this, void 0);
        _OutermostTargetSelector_toolbarItem.set(this, void 0);
        this.listItems = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel();
        __classPrivateFieldSet(this, _OutermostTargetSelector_dropDown, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SoftDropDown.SoftDropDown(this.listItems, this), "f");
        __classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").setRowHeight(36);
        __classPrivateFieldSet(this, _OutermostTargetSelector_toolbarItem, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(__classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").element), "f");
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setTitle(i18nString(UIStrings.targetNotSelected));
        this.listItems.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.Events.ItemsReplaced, () => __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setEnabled(Boolean(this.listItems.length)));
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").element.classList.add('toolbar-has-dropdown');
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        targetManager.addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.Events.TargetInfoChanged, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_onTargetInfoChanged), this);
        targetManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.Events.NameChanged, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_onInspectedURLChanged), this);
        targetManager.observeTargets(this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_targetChanged), this);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!outermostTargetSelectorInstance || forceNew) {
            outermostTargetSelectorInstance = new OutermostTargetSelector();
        }
        return outermostTargetSelectorInstance;
    }
    item() {
        return __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f");
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
        this.listItems.insertWithComparator(target, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_targetComparator).call(this));
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setVisible(this.listItems.length > 1);
        if (target === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)) {
            __classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").selectItem(target);
        }
    }
    targetRemoved(target) {
        const index = this.listItems.indexOf(target);
        if (index === -1) {
            return;
        }
        this.listItems.remove(index);
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setVisible(this.listItems.length > 1);
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        element.classList.add('target');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './outermostTargetSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        const title = shadowRoot.createChild('div', 'title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
        const subTitle = shadowRoot.createChild('div', 'subtitle');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(subTitle, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_subtitleFor).call(this, item));
        return element;
    }
    isItemSelectable(_item) {
        return true;
    }
    itemSelected(item) {
        const title = item ? i18nString(UIStrings.targetS, { PH1: this.titleFor(item) }) : i18nString(UIStrings.targetNotSelected);
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setTitle(title);
        if (item && item !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)?.outermostTarget()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, item);
        }
    }
}
_OutermostTargetSelector_dropDown = new WeakMap(), _OutermostTargetSelector_toolbarItem = new WeakMap(), _OutermostTargetSelector_instances = new WeakSet(), _OutermostTargetSelector_targetComparator = function _OutermostTargetSelector_targetComparator() {
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
}, _OutermostTargetSelector_onTargetInfoChanged = function _OutermostTargetSelector_onTargetInfoChanged(event) {
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
    const target = targetManager.targetById(event.data.targetId);
    if (!target || target.outermostTarget() !== target) {
        return;
    }
    this.targetRemoved(target);
    this.targetAdded(target);
}, _OutermostTargetSelector_onInspectedURLChanged = function _OutermostTargetSelector_onInspectedURLChanged(event) {
    const target = event.data;
    if (!target || target.outermostTarget() !== target) {
        return;
    }
    this.targetRemoved(target);
    this.targetAdded(target);
}, _OutermostTargetSelector_targetChanged = function _OutermostTargetSelector_targetChanged({ data: target, }) {
    __classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").selectItem(target?.outermostTarget() || null);
}, _OutermostTargetSelector_subtitleFor = function _OutermostTargetSelector_subtitleFor(target) {
    const targetInfo = target.targetInfo();
    if (target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget() && targetInfo) {
        return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceUtils.displayNameForURL(targetInfo.url);
    }
    return target.targetInfo()?.subtype || '';
};


/***/ })

}]);