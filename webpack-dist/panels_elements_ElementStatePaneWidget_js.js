"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_ElementStatePaneWidget_js"],{

/***/ "./panels/elements/ElementStatePaneWidget.js":
/*!***************************************************!*\
  !*** ./panels/elements/ElementStatePaneWidget.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonProvider: () => (/* binding */ ButtonProvider),
/* harmony export */   ElementStatePaneWidget: () => (/* binding */ ElementStatePaneWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */ var _elementStatePaneWidget_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./elementStatePaneWidget.css.js */ "./panels/elements/elementStatePaneWidget.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     * @description Title of a section in the Element State Pane Widget of the Elements panel. The
     * controls in this section allow users to force a particular state on the selected element, e.g. a
     * focused state via :focus or a hover state via :hover.
     */
    forceElementState: 'Force element state',
    /**
     * @description Tooltip text in Element State Pane Widget of the Elements panel. For a button that
     * opens a tool that toggles the various states of the selected element on/off.
     */
    toggleElementState: 'Toggle Element State',
    /**
     * @description The name of a checkbox setting in the Element & Page State Pane Widget of the Elements panel.. This setting
     * emulates/pretends that the webpage is focused.
     */
    emulateFocusedPage: 'Emulate a focused page',
    /**
     * @description Explanation text for the 'Emulate a focused page' setting in the Rendering tool.
     */
    emulatesAFocusedPage: 'Keep page focused. Commonly used for debugging disappearing elements.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/ElementStatePaneWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class ElementStatePaneWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.Widget {
    inputs;
    inputStates;
    cssModel;
    constructor() {
        super(true);
        this.contentElement.className = 'styles-element-state-pane';
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.pane('element-states')}`);
        const inputs = [];
        this.inputs = inputs;
        this.inputStates = new WeakMap();
        const createSectionHeader = (title) => {
            const sectionHeaderContainer = document.createElement('div');
            sectionHeaderContainer.classList.add('section-header');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(sectionHeaderContainer.createChild('span'), title);
            return sectionHeaderContainer;
        };
        const clickListener = (event) => {
            const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
            if (!node || !(event.target instanceof HTMLInputElement)) {
                return;
            }
            const state = this.inputStates.get(event.target);
            if (!state) {
                return;
            }
            node.domModel().cssModel().forcePseudoState(node, state, event.target.checked);
        };
        const createElementStateCheckbox = (state) => {
            const td = document.createElement('td');
            const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(':' + state, undefined, undefined, undefined, true);
            const input = label.checkboxElement;
            this.inputStates.set(input, state);
            input.addEventListener('click', clickListener, false);
            input.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle().track({ click: true }).context(state)}`);
            inputs.push(input);
            td.appendChild(label);
            return td;
        };
        const createEmulateFocusedPageCheckbox = () => {
            const div = document.createElement('div');
            div.classList.add('page-state-checkbox');
            const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.CheckboxLabel.create(i18nString(UIStrings.emulateFocusedPage), undefined, undefined, undefined, true);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SettingsUI.bindCheckbox(label.checkboxElement, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulate-page-focus'), {
                enable: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleEmulateFocusedPageFromStylesPaneOn,
                disable: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ToggleEmulateFocusedPageFromStylesPaneOff,
            });
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(label.textElement, i18nString(UIStrings.emulatesAFocusedPage));
            const link = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.XLink.XLink.create('https://goo.gle/devtools-emulate-focused-page', undefined, undefined, undefined, 'learn-more');
            link.textContent = '';
            link.style.setProperty('display', 'inline-flex');
            const icon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_4__.Icon.Icon();
            icon.data = { iconName: 'help', color: 'var(--icon-default)', width: '16px', height: '16px' };
            link.prepend(icon);
            div.appendChild(label);
            div.appendChild(link);
            return div;
        };
        this.contentElement.className = 'styles-element-state-pane';
        // Populate page states
        const keepPageFocusedCheckbox = createEmulateFocusedPageCheckbox();
        this.contentElement.appendChild(keepPageFocusedCheckbox);
        // Populate element states
        this.contentElement.appendChild(createSectionHeader(i18nString(UIStrings.forceElementState)));
        const table = document.createElement('table');
        table.classList.add('source-code');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsPresentation(table);
        let tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('active'));
        tr.appendChild(createElementStateCheckbox('hover'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('focus'));
        tr.appendChild(createElementStateCheckbox('visited'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('focus-within'));
        tr.appendChild(createElementStateCheckbox('focus-visible'));
        tr = table.createChild('tr');
        tr.appendChild(createElementStateCheckbox('target'));
        this.contentElement.appendChild(table);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.update, this);
    }
    updateModel(cssModel) {
        if (this.cssModel === cssModel) {
            return;
        }
        if (this.cssModel) {
            this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.PseudoStateForced, this.update, this);
        }
        this.cssModel = cssModel;
        if (this.cssModel) {
            this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.PseudoStateForced, this.update, this);
        }
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_elementStatePaneWidget_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]]);
        this.update();
    }
    update() {
        let node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
        if (node) {
            node = node.enclosingElementOrSelf();
        }
        this.updateModel(node ? node.domModel().cssModel() : null);
        if (node) {
            const nodePseudoState = node.domModel().cssModel().pseudoState(node);
            for (const input of this.inputs) {
                input.disabled = Boolean(node.pseudoType());
                const state = this.inputStates.get(input);
                input.checked = nodePseudoState && state !== undefined ? nodePseudoState.indexOf(state) >= 0 : false;
            }
        }
        else {
            for (const input of this.inputs) {
                input.disabled = true;
                input.checked = false;
            }
        }
        ButtonProvider.instance().item().setChecked(this.inputs.some(input => input.checked));
    }
}
let buttonProviderInstance;
class ButtonProvider {
    button;
    view;
    constructor() {
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarToggle(i18nString(UIStrings.toggleElementState), 'hover');
        this.button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.clicked, this);
        this.button.element.classList.add('element-state');
        this.button.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggleSubpane('element-states').track({ click: true })}`);
        this.button.element.style.setProperty('--dot-toggle-top', '12px');
        this.button.element.style.setProperty('--dot-toggle-left', '18px');
        this.view = new ElementStatePaneWidget();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!buttonProviderInstance || forceNew) {
            buttonProviderInstance = new ButtonProvider();
        }
        return buttonProviderInstance;
    }
    clicked() {
        _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__.ElementsPanel.instance().showToolbarPane(!this.view.isShowing() ? this.view : null, this.button);
    }
    item() {
        return this.button;
    }
}
//# sourceMappingURL=ElementStatePaneWidget.js.map

/***/ }),

/***/ "./panels/elements/elementStatePaneWidget.css.js":
/*!*******************************************************!*\
  !*** ./panels/elements/elementStatePaneWidget.css.js ***!
  \*******************************************************/
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
 * Copyright 2017 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.styles-element-state-pane {
  overflow: hidden;
  padding-left: 2px;
  background-color: var(--sys-color-cdt-base-container);
  border-bottom: 1px solid var(--sys-color-divider);
  margin-top: 0;
  padding-bottom: 2px;
}

.styles-element-state-pane > .page-state-checkbox {
  margin-block: 6px;
  display: flex;
  align-items: center;
  gap: 2px;
}

.styles-element-state-pane > .section-header {
  margin: 8px 4px 6px;
  color: var(--color-text-secondary);
}

.styles-element-state-pane > table {
  width: 100%;
  border-spacing: 0;
}

.styles-element-state-pane td {
  padding: 0;
}

/*# sourceURL=elementStatePaneWidget.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);