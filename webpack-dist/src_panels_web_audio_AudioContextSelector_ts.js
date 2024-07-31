"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_web_audio_AudioContextSelector_ts"],{

/***/ "./src/panels/web_audio/AudioContextSelector.ts":
/*!******************************************************!*\
  !*** ./src/panels/web_audio/AudioContextSelector.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudioContextSelector: () => (/* binding */ AudioContextSelector),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './audioContextSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text that shows there is no recording
     */
    noRecordings: '(no recordings)',
    /**
     *@description Label prefix for an audio context selection
     *@example {realtime (1e03ec)} PH1
     */
    audioContextS: 'Audio context: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/web_audio/AudioContextSelector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class AudioContextSelector extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor() {
        super();
        Object.defineProperty(this, "placeholderText", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dropDown", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "toolbarItemInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedContextInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.placeholderText = i18nString(UIStrings.noRecordings);
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        this.dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SoftDropDown.SoftDropDown(this.items, this, 'audio-context');
        this.dropDown.setPlaceholderText(this.placeholderText);
        this.toolbarItemInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarItem(this.dropDown.element);
        this.toolbarItemInternal.setEnabled(false);
        this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, { PH1: this.placeholderText }));
        this.items.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.Events.ItemsReplaced, this.onListItemReplaced, this);
        this.toolbarItemInternal.element.classList.add('toolbar-has-dropdown');
        this.selectedContextInternal = null;
    }
    onListItemReplaced() {
        const hasItems = Boolean(this.items.length);
        this.toolbarItemInternal.setEnabled(hasItems);
        if (!hasItems) {
            this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, { PH1: this.placeholderText }));
        }
    }
    contextCreated({ data: context }) {
        this.items.insert(this.items.length, context);
        // Select if this is the first item.
        if (this.items.length === 1) {
            this.dropDown.selectItem(context);
        }
    }
    contextDestroyed({ data: contextId }) {
        const contextIndex = this.items.findIndex((context) => context.contextId === contextId);
        if (contextIndex > -1) {
            this.items.remove(contextIndex);
        }
    }
    contextChanged({ data: changedContext }) {
        const contextIndex = this.items.findIndex((context) => context.contextId === changedContext.contextId);
        if (contextIndex > -1) {
            this.items.replace(contextIndex, changedContext);
            // If the changed context is currently selected by user. Re-select it
            // because the actual element is replaced with a new one.
            if (this.selectedContextInternal && this.selectedContextInternal.contextId === changedContext.contextId) {
                this.dropDown.selectItem(changedContext);
            }
        }
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './audioContextSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        const title = shadowRoot.createChild('div', 'title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
        return element;
    }
    selectedContext() {
        if (!this.selectedContextInternal) {
            return null;
        }
        return this.selectedContextInternal;
    }
    highlightedItemChanged(from, to, fromElement, toElement) {
        if (fromElement) {
            fromElement.classList.remove('highlighted');
        }
        if (toElement) {
            toElement.classList.add('highlighted');
        }
    }
    isItemSelectable(_item) {
        return true;
    }
    itemSelected(item) {
        if (!item) {
            return;
        }
        // It's possible that no context is selected yet.
        if (!this.selectedContextInternal || this.selectedContextInternal.contextId !== item.contextId) {
            this.selectedContextInternal = item;
            this.toolbarItemInternal.setTitle(i18nString(UIStrings.audioContextS, { PH1: this.titleFor(item) }));
        }
        this.dispatchEventToListeners(Events.ContextSelected, item);
    }
    reset() {
        this.items.replaceAll([]);
    }
    titleFor(context) {
        return `${context.contextType} (${context.contextId.substr(-6)})`;
    }
    toolbarItem() {
        return this.toolbarItemInternal;
    }
}
var Events;
(function (Events) {
    Events["ContextSelected"] = "ContextSelected";
})(Events || (Events = {}));


/***/ })

}]);