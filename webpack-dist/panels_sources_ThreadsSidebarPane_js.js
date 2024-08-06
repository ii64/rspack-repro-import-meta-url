"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_sources_ThreadsSidebarPane_js"],{

/***/ "./panels/sources/ThreadsSidebarPane.js":
/*!**********************************************!*\
  !*** ./panels/sources/ThreadsSidebarPane.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThreadsSidebarPane: () => (/* binding */ ThreadsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _threadsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./threadsSidebarPane.css.js */ "./panels/sources/threadsSidebarPane.css.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text in Threads Sidebar Pane of the Sources panel
     */
    paused: 'paused',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/sources/ThreadsSidebarPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ThreadsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    items;
    list;
    selectedModel;
    constructor() {
        super(true);
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('sources.threads')}`);
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel();
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListControl(this.items, this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListMode.NonViewport);
        const currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
        this.selectedModel = currentTarget !== null ? currentTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel) : null;
        this.contentElement.appendChild(this.list.element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, this.targetFlavorChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel, this);
    }
    static shouldBeShown() {
        return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel).length >= 2;
    }
    createElementForItem(debuggerModel) {
        const element = document.createElement('div');
        element.classList.add('thread-item');
        const title = element.createChild('div', 'thread-item-title');
        const pausedState = element.createChild('div', 'thread-item-paused-state');
        const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
        icon.data = {
            iconName: 'large-arrow-right-filled',
            color: 'var(--icon-arrow-main-thread)',
            width: '14px',
            height: '14px',
        };
        icon.classList.add('selected-thread-icon');
        element.appendChild(icon);
        element.tabIndex = -1;
        self.onInvokeElement(element, event => {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target, debuggerModel.target());
            event.consume(true);
        });
        const isSelected = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target) === debuggerModel.target();
        element.classList.toggle('selected', isSelected);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setSelected(element, isSelected);
        function updateTitle() {
            const executionContext = debuggerModel.runtimeModel().defaultExecutionContext();
            title.textContent =
                executionContext && executionContext.label() ? executionContext.label() : debuggerModel.target().name();
        }
        function updatePausedState() {
            pausedState.textContent = debuggerModel.isPaused() ? i18nString(UIStrings.paused) : '';
        }
        function targetNameChanged(event) {
            const target = event.data;
            if (target === debuggerModel.target()) {
                updateTitle();
            }
        }
        debuggerModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Events.DebuggerPaused, updatePausedState);
        debuggerModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.Events.DebuggerResumed, updatePausedState);
        debuggerModel.runtimeModel().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.Events.ExecutionContextChanged, updateTitle);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addEventListener("NameChanged" /* SDK.TargetManager.Events.NameChanged */, targetNameChanged);
        updatePausedState();
        updateTitle();
        return element;
    }
    heightForItem(_debuggerModel) {
        console.assert(false); // Should not be called.
        return 0;
    }
    isItemSelectable(_debuggerModel) {
        return true;
    }
    selectedItemChanged(_from, _to, fromElement, toElement) {
        const fromEle = fromElement;
        if (fromEle) {
            fromEle.tabIndex = -1;
        }
        const toEle = toElement;
        if (toEle) {
            this.setDefaultFocusedElement(toEle);
            toEle.tabIndex = 0;
            if (this.hasFocus()) {
                toEle.focus();
            }
        }
    }
    updateSelectedItemARIA(_fromElement, _toElement) {
        return false;
    }
    modelAdded(debuggerModel) {
        this.items.insert(this.items.length, debuggerModel);
        const currentTarget = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Target);
        if (currentTarget === debuggerModel.target()) {
            this.list.selectItem(debuggerModel);
        }
    }
    modelRemoved(debuggerModel) {
        this.items.remove(this.items.indexOf(debuggerModel));
    }
    targetFlavorChanged({ data: target }) {
        const hadFocus = this.hasFocus();
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerModel);
        this.list.selectItem(debuggerModel);
        if (debuggerModel) {
            this.list.refreshItem(debuggerModel);
        }
        if (this.selectedModel !== null) {
            this.list.refreshItem(this.selectedModel);
        }
        this.selectedModel = debuggerModel;
        if (hadFocus) {
            this.focus();
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_threadsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
}
//# sourceMappingURL=ThreadsSidebarPane.js.map

/***/ }),

/***/ "./panels/sources/threadsSidebarPane.css.js":
/*!**************************************************!*\
  !*** ./panels/sources/threadsSidebarPane.css.js ***!
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
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.thread-item {
  padding: 3px 8px 3px 20px;
  position: relative;
  min-height: 18px;
  line-height: 15px;
  display: flex;
  flex-wrap: wrap;
}

.thread-item + .thread-item {
  border-top: 1px solid var(--sys-color-divider);
}

.thread-item:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.thread-item:focus-visible {
  background-color: var(--sys-color-tonal-container);
}

.thread-item-title,
.thread-item-paused-state {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.thread-item-paused-state {
  color: var(--sys-color-state-disabled);
  margin-left: auto;
  padding: 0 10px;
}

.selected-thread-icon {
  display: none;
  position: absolute;
  top: 3px;
  left: 4px;
}

.thread-item.selected .selected-thread-icon {
  display: block;
}

@media (forced-colors: active) {
  .thread-item:hover,
  .thread-item:focus-visible {
    forced-color-adjust: none;
    background-color: Highlight;
  }

  .thread-item:hover > div,
  .thread-item:focus-visible > div {
    color: HighlightText;
  }
}

/*# sourceURL=threadsSidebarPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);