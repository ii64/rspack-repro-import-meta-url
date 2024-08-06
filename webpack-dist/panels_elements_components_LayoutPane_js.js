"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_LayoutPane_js"],{

/***/ "./panels/elements/components/LayoutPane.js":
/*!**************************************************!*\
  !*** ./panels/elements/components/LayoutPane.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutPane: () => (/* binding */ LayoutPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./ui/components/node_text/node_text.js");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/legacy/inspectorCommon.css.js */ "./ui/legacy/inspectorCommon.css.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _layoutPane_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layoutPane.css.js */ "./panels/elements/components/layoutPane.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









// eslint-disable-next-line rulesdir/es_modules_import





const UIStrings = {
    /**
     *@description Title of the input to select the overlay color for an element using the color picker
     */
    chooseElementOverlayColor: 'Choose the overlay color for this element',
    /**
     *@description Title of the show element button in the Layout pane of the Elements panel
     */
    showElementInTheElementsPanel: 'Show element in the Elements panel',
    /**
     *@description Title of a section on CSS Grid tooling
     */
    grid: 'Grid',
    /**
     *@description Title of a section in the Layout Sidebar pane of the Elements panel
     */
    overlayDisplaySettings: 'Overlay display settings',
    /**
     *@description Title of a section in Layout sidebar pane
     */
    gridOverlays: 'Grid overlays',
    /**
     *@description Message in the Layout panel informing users that no CSS Grid layouts were found on the page
     */
    noGridLayoutsFoundOnThisPage: 'No grid layouts found on this page',
    /**
     *@description Title of the Flexbox section in the Layout panel
     */
    flexbox: 'Flexbox',
    /**
     *@description Title of a section in the Layout panel
     */
    flexboxOverlays: 'Flexbox overlays',
    /**
     *@description Text in the Layout panel, when no flexbox elements are found
     */
    noFlexboxLayoutsFoundOnThisPage: 'No flexbox layouts found on this page',
    /**
     *@description Screen reader announcement when opening color picker tool.
     */
    colorPickerOpened: 'Color picker opened.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/components/LayoutPane.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__;
const nodeToLayoutElement = (node) => {
    const className = node.getAttribute('class');
    const nodeId = node.id;
    return {
        id: nodeId,
        color: 'var(--sys-color-inverse-surface)',
        name: node.localName(),
        domId: node.getAttribute('id'),
        domClasses: className ? className.split(/\s+/).filter(s => Boolean(s)) : undefined,
        enabled: false,
        reveal: () => {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(node);
            void node.scrollIntoView();
        },
        highlight: () => {
            node.highlight();
        },
        hideHighlight: () => {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        },
        toggle: (_value) => {
            throw new Error('Not implemented');
        },
        setColor(_value) {
            throw new Error('Not implemented');
        },
    };
};
const gridNodesToElements = (nodes) => {
    return nodes.map(node => {
        const layoutElement = nodeToLayoutElement(node);
        const nodeId = node.id;
        return {
            ...layoutElement,
            color: node.domModel().overlayModel().colorOfGridInPersistentOverlay(nodeId) || 'var(--sys-color-inverse-surface)',
            enabled: node.domModel().overlayModel().isHighlightedGridInPersistentOverlay(nodeId),
            toggle: (value) => {
                if (value) {
                    node.domModel().overlayModel().highlightGridInPersistentOverlay(nodeId);
                }
                else {
                    node.domModel().overlayModel().hideGridInPersistentOverlay(nodeId);
                }
            },
            setColor(value) {
                this.color = value;
                node.domModel().overlayModel().setColorOfGridInPersistentOverlay(nodeId, value);
            },
        };
    });
};
const flexContainerNodesToElements = (nodes) => {
    return nodes.map(node => {
        const layoutElement = nodeToLayoutElement(node);
        const nodeId = node.id;
        return {
            ...layoutElement,
            color: node.domModel().overlayModel().colorOfFlexInPersistentOverlay(nodeId) || 'var(--sys-color-inverse-surface)',
            enabled: node.domModel().overlayModel().isHighlightedFlexContainerInPersistentOverlay(nodeId),
            toggle: (value) => {
                if (value) {
                    node.domModel().overlayModel().highlightFlexContainerInPersistentOverlay(nodeId);
                }
                else {
                    node.domModel().overlayModel().hideFlexContainerInPersistentOverlay(nodeId);
                }
            },
            setColor(value) {
                this.color = value;
                node.domModel().overlayModel().setColorOfFlexInPersistentOverlay(nodeId, value);
            },
        };
    });
};
function isEnumSetting(setting) {
    return setting.type === "enum" /* Common.Settings.SettingType.ENUM */;
}
function isBooleanSetting(setting) {
    return setting.type === "boolean" /* Common.Settings.SettingType.BOOLEAN */;
}
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
let layoutPaneWrapperInstance;
class LayoutPane extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.literal `devtools-layout-pane`;
    #shadow = this.attachShadow({ mode: 'open' });
    #settings = [];
    #uaShadowDOMSetting;
    #domModels;
    constructor() {
        super();
        this.#settings = this.#makeSettings();
        this.#uaShadowDOMSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom');
        this.#domModels = [];
        this.#shadow.adoptedStyleSheets = [
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__.checkboxStyles,
            _layoutPane_css_js__WEBPACK_IMPORTED_MODULE_13__["default"],
            _ui_legacy_inspectorCommon_css_js__WEBPACK_IMPORTED_MODULE_9__["default"],
        ];
    }
    static instance() {
        if (!layoutPaneWrapperInstance) {
            layoutPaneWrapperInstance = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.Widget, new LayoutPane());
        }
        layoutPaneWrapperInstance.element.style.minWidth = 'min-content';
        layoutPaneWrapperInstance.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.pane('layout').track({ resize: true })}`);
        return layoutPaneWrapperInstance.getComponent();
    }
    modelAdded(domModel) {
        const overlayModel = domModel.overlayModel();
        overlayModel.addEventListener("PersistentGridOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentGridOverlayStateChanged */, this.render, this);
        overlayModel.addEventListener("PersistentFlexContainerOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged */, this.render, this);
        this.#domModels.push(domModel);
    }
    modelRemoved(domModel) {
        const overlayModel = domModel.overlayModel();
        overlayModel.removeEventListener("PersistentGridOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentGridOverlayStateChanged */, this.render, this);
        overlayModel.removeEventListener("PersistentFlexContainerOverlayStateChanged" /* SDK.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged */, this.render, this);
        this.#domModels = this.#domModels.filter(model => model !== domModel);
    }
    async #fetchNodesByStyle(style) {
        const showUAShadowDOM = this.#uaShadowDOMSetting.get();
        const nodes = [];
        for (const domModel of this.#domModels) {
            try {
                const nodeIds = await domModel.getNodesByStyle(style, true /* pierce */);
                for (const nodeId of nodeIds) {
                    const node = domModel.nodeForId(nodeId);
                    if (node !== null && (showUAShadowDOM || !node.ancestorUserAgentShadowRoot())) {
                        nodes.push(node);
                    }
                }
            }
            catch (error) {
                // TODO(crbug.com/1167706): Sometimes in E2E tests the layout panel is updated after a DOM node
                // has been removed. This causes an error that a node has not been found.
                // We can skip nodes that resulted in an error.
                console.warn(error);
            }
        }
        return nodes;
    }
    async #fetchGridNodes() {
        return await this.#fetchNodesByStyle([{ name: 'display', value: 'grid' }, { name: 'display', value: 'inline-grid' }]);
    }
    async #fetchFlexContainerNodes() {
        return await this.#fetchNodesByStyle([{ name: 'display', value: 'flex' }, { name: 'display', value: 'inline-flex' }]);
    }
    #makeSettings() {
        const settings = [];
        for (const settingName of ['show-grid-line-labels', 'show-grid-track-sizes', 'show-grid-areas', 'extend-grid-lines']) {
            const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(settingName);
            const settingValue = setting.get();
            const settingType = setting.type();
            if (!settingType) {
                throw new Error('A setting provided to LayoutSidebarPane does not have a setting type');
            }
            if (settingType !== "boolean" /* Common.Settings.SettingType.BOOLEAN */ && settingType !== "enum" /* Common.Settings.SettingType.ENUM */) {
                throw new Error('A setting provided to LayoutSidebarPane does not have a supported setting type');
            }
            const mappedSetting = {
                type: settingType,
                name: setting.name,
                title: setting.title(),
            };
            if (typeof settingValue === 'boolean') {
                settings.push({
                    ...mappedSetting,
                    value: settingValue,
                    options: setting.options().map(opt => ({
                        ...opt,
                        value: opt.value,
                    })),
                });
            }
            else if (typeof settingValue === 'string') {
                settings.push({
                    ...mappedSetting,
                    value: settingValue,
                    options: setting.options().map(opt => ({
                        ...opt,
                        value: opt.value,
                    })),
                });
            }
        }
        return settings;
    }
    onSettingChanged(setting, value) {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting).set(value);
    }
    wasShown() {
        for (const setting of this.#settings) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting.name).addChangeListener(this.render, this);
        }
        for (const domModel of this.#domModels) {
            this.modelRemoved(domModel);
        }
        this.#domModels = [];
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, this, { scoped: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.render, this);
        this.#uaShadowDOMSetting.addChangeListener(this.render, this);
        void this.render();
    }
    willHide() {
        for (const setting of this.#settings) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting.name).removeChangeListener(this.render, this);
        }
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().unobserveModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.render, this);
        this.#uaShadowDOMSetting.removeChangeListener(this.render, this);
    }
    #onSummaryKeyDown(event) {
        if (!event.target) {
            return;
        }
        const summaryElement = event.target;
        const detailsElement = summaryElement.parentElement;
        if (!detailsElement) {
            throw new Error('<details> element is not found for a <summary> element');
        }
        switch (event.key) {
            case 'ArrowLeft':
                detailsElement.open = false;
                break;
            case 'ArrowRight':
                detailsElement.open = true;
                break;
        }
    }
    async render() {
        const gridElements = gridNodesToElements(await this.#fetchGridNodes());
        const flexContainerElements = flexContainerNodesToElements(await this.#fetchFlexContainerNodes());
        await coordinator.write('LayoutPane render', () => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            render(html `
        <details open>
          <summary class="header" @keydown=${this.#onSummaryKeyDown} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.sectionHeader('grid-settings').track({ click: true })}>
            ${i18nString(UIStrings.grid)}
          </summary>
          <div class="content-section" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('grid-settings')}>
            <h3 class="content-section-title">${i18nString(UIStrings.overlayDisplaySettings)}</h3>
            <div class="select-settings">
              ${this.#getEnumSettings().map(setting => this.#renderEnumSetting(setting))}
            </div>
            <div class="checkbox-settings">
              ${this.#getBooleanSettings().map(setting => this.#renderBooleanSetting(setting))}
            </div>
          </div>
          ${gridElements ?
                html `<div class="content-section" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('grid-overlays')}>
              <h3 class="content-section-title">
                ${gridElements.length ? i18nString(UIStrings.gridOverlays) : i18nString(UIStrings.noGridLayoutsFoundOnThisPage)}
              </h3>
              ${gridElements.length ?
                    html `<div class="elements">
                  ${gridElements.map(element => this.#renderElement(element))}
                </div>` : ''}
            </div>` : ''}
        </details>
        ${flexContainerElements !== undefined ?
                html `
          <details open>
            <summary class="header" @keydown=${this.#onSummaryKeyDown} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.sectionHeader('flexbox-overlays').track({ click: true })}>
              ${i18nString(UIStrings.flexbox)}
            </summary>
            ${flexContainerElements ?
                    html `<div class="content-section" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('flexbox-overlays')}>
                <h3 class="content-section-title">
                  ${flexContainerElements.length ? i18nString(UIStrings.flexboxOverlays) : i18nString(UIStrings.noFlexboxLayoutsFoundOnThisPage)}
                </h3>
                ${flexContainerElements.length ?
                        html `<div class="elements">
                    ${flexContainerElements.map(element => this.#renderElement(element))}
                  </div>` : ''}
              </div>` : ''}
          </details>
          `
                : ''}
      `, this.#shadow, {
                host: this,
            });
            // clang-format on
        });
    }
    #getEnumSettings() {
        return this.#settings.filter(isEnumSetting);
    }
    #getBooleanSettings() {
        return this.#settings.filter(isBooleanSetting);
    }
    #onBooleanSettingChange(setting, event) {
        event.preventDefault();
        this.onSettingChanged(setting.name, event.target.checked);
    }
    #onEnumSettingChange(setting, event) {
        event.preventDefault();
        this.onSettingChanged(setting.name, event.target.value);
    }
    #onElementToggle(element, event) {
        event.preventDefault();
        element.toggle(event.target.checked);
    }
    #onElementClick(element, event) {
        event.preventDefault();
        element.reveal();
    }
    #onColorChange(element, event) {
        event.preventDefault();
        element.setColor(event.target.value);
        void this.render();
    }
    #onElementMouseEnter(element, event) {
        event.preventDefault();
        element.highlight();
    }
    #onElementMouseLeave(element, event) {
        event.preventDefault();
        element.hideHighlight();
    }
    #renderElement(element) {
        const onElementToggle = this.#onElementToggle.bind(this, element);
        const onElementClick = this.#onElementClick.bind(this, element);
        const onColorChange = this.#onColorChange.bind(this, element);
        const onMouseEnter = this.#onElementMouseEnter.bind(this, element);
        const onMouseLeave = this.#onElementMouseLeave.bind(this, element);
        const onColorLabelKeyUp = (event) => {
            // Handle Enter and Space events to make the color picker accessible.
            if (event.key !== 'Enter' && event.key !== ' ') {
                return;
            }
            const target = event.target;
            const input = target.querySelector('input');
            input.click();
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.alert(i18nString(UIStrings.colorPickerOpened));
            event.preventDefault();
        };
        const onColorLabelKeyDown = (event) => {
            // Prevent default scrolling when the Space key is pressed.
            if (event.key === ' ') {
                event.preventDefault();
            }
        };
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        return html `<div class="element" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.item()}>
      <label data-element="true" class="checkbox-label">
        <input data-input="true" type="checkbox" .checked=${element.enabled} @change=${onElementToggle} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.toggle().track({ click: true })} />
        <span class="node-text-container" data-label="true" @mouseenter=${onMouseEnter} @mouseleave=${onMouseLeave}>
          <${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_7__.NodeText.NodeText.litTagName} .data=${{
            nodeId: element.domId,
            nodeTitle: element.name,
            nodeClasses: element.domClasses,
        }}></${_ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_7__.NodeText.NodeText.litTagName}>
        </span>
      </label>
      <label @keyup=${onColorLabelKeyUp} @keydown=${onColorLabelKeyDown} class="color-picker-label" style="background: ${element.color};" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.showStyleEditor('color').track({ click: true })}>
        <input @change=${onColorChange} @input=${onColorChange} title=${i18nString(UIStrings.chooseElementOverlayColor)} tabindex="0" class="color-picker" type="color" value=${element.color} />
      </label>
      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName} class="show-element"
                                           title=${i18nString(UIStrings.showElementInTheElementsPanel)}
                                           aria-label=${i18nString(UIStrings.showElementInTheElementsPanel)}
                                           .iconName=${'select-element'}
                                           .jslogContext=${'elements.select-element'}
                                           .size=${"SMALL" /* Buttons.Button.Size.SMALL */}
                                           .variant=${"icon" /* Buttons.Button.Variant.ICON */}
                                           @click=${onElementClick}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
    </div>`;
        // clang-format on
    }
    #renderBooleanSetting(setting) {
        const onBooleanSettingChange = this.#onBooleanSettingChange.bind(this, setting);
        return html `<label data-boolean-setting="true" class="checkbox-label" title=${setting.title} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.toggle().track({ click: true }).context(setting.name)}>
      <input data-input="true" type="checkbox" .checked=${setting.value} @change=${onBooleanSettingChange} />
      <span data-label="true">${setting.title}</span>
    </label>`;
    }
    #renderEnumSetting(setting) {
        const onEnumSettingChange = this.#onEnumSettingChange.bind(this, setting);
        return html `<label data-enum-setting="true" class="select-label" title=${setting.title}>
      <select
        class="chrome-select"
        data-input="true"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.dropDown().track({ change: true }).context(setting.name)}
        @change=${onEnumSettingChange}>
        ${setting.options.map(opt => html `<option value=${opt.value} .selected=${setting.value === opt.value} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(opt.value)).track({ click: true })}>${opt.title}</option>`)}
      </select>
    </label>`;
    }
}
customElements.define('devtools-layout-pane', LayoutPane);
//# sourceMappingURL=LayoutPane.js.map

/***/ }),

/***/ "./panels/elements/components/layoutPane.css.js":
/*!******************************************************!*\
  !*** ./panels/elements/components/layoutPane.css.js ***!
  \******************************************************/
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

* {
  box-sizing: border-box;
  font-size: 12px;
}

.header {
  background-color: var(--sys-color-surface2);
  border-bottom: 1px solid var(--sys-color-divider);
  line-height: 1.6;
  overflow: hidden;
  padding: 0 5px;
  white-space: nowrap;
}

.header::marker {
  color: var(--sys-color-on-surface-subtle);
  font-size: 11px;
  line-height: 1;
}

.header:focus {
  background-color: var(--sys-color-tonal-container);
}

.content-section {
  padding: 16px;
  border-bottom: 1px solid var(--sys-color-divider);
  overflow-x: hidden;
}

.content-section-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 1.1;
  margin: 0;
  padding: 0;
}

.checkbox-settings {
  margin-top: 8px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 5px;
}

.checkbox-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 40px;
  width: fit-content;
}

.checkbox-settings .checkbox-label {
  margin-bottom: 8px;
}

.checkbox-settings .checkbox-label:last-child {
  margin-bottom: 0;
}

.checkbox-label input {
  margin: 0 6px 0 0;
  padding: 0;
  flex: none;
}

.checkbox-label input:focus {
  outline: auto 5px -webkit-focus-ring-color;
}

.checkbox-label > span {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.select-settings {
  margin-top: 16px;
  width: fit-content;
}

.select-label {
  display: flex;
  flex-direction: column;
}

.select-label span {
  margin-bottom: 4px;
}

.elements {
  margin-top: 12px;
  color: var(--sys-color-token-tag);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  gap: 8px;
}

.element {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.show-element {
  flex: none;
}

.chrome-select {
  min-width: 0;
  max-width: 150px;
}

.color-picker {
  opacity: 0%;
}

.color-picker-label {
  border: 1px solid var(--sys-color-neutral-outline);
  cursor: default;
  display: inline-block;
  flex: none;
  height: 10px;
  width: 10px;
  position: relative;

  &:focus-within {
    outline: 2px solid var(--sys-color-state-focus-ring);
    outline-offset: 2px;
    border-radius: 2px;
  }
}
/* We set dimensions for the invisible input to support quick highlight a11y feature
that uses the dimensions to draw an outline around the element. */
.color-picker-label input[type="color"] {
  width: 100%;
  height: 100%;
  position: absolute;
}

.color-picker-label:hover,
.color-picker-label:focus {
  border: 1px solid var(--sys-color-outline);
  transform: scale(1.2);
}

.node-text-container {
  line-height: 16px;
  padding: 0 0.5ex;
  border-radius: 5px;
}

/*# sourceURL=layoutPane.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/node_text/NodeText.js":
/*!*********************************************!*\
  !*** ./ui/components/node_text/NodeText.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* binding */ NodeText)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _nodeText_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nodeText.css.js */ "./ui/components/node_text/nodeText.css.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NodeText extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-node-text`;
    #shadow = this.attachShadow({ mode: 'open' });
    #nodeTitle = '';
    #nodeId = '';
    #nodeClasses = [];
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_nodeText_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]];
    }
    set data(data) {
        this.#nodeTitle = data.nodeTitle;
        this.#nodeId = data.nodeId;
        this.#nodeClasses = data.nodeClasses;
        this.#render();
    }
    #render() {
        const hasId = Boolean(this.#nodeId);
        const hasNodeClasses = Boolean(this.#nodeClasses && this.#nodeClasses.length > 0);
        const parts = [
            html `<span class="node-label-name">${this.#nodeTitle}</span>`,
        ];
        if (this.#nodeId) {
            const classes = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap({
                'node-label-id': true,
                'node-multiple-descriptors': hasNodeClasses,
            });
            parts.push(html `<span class=${classes}>#${CSS.escape(this.#nodeId)}</span>`);
        }
        if (this.#nodeClasses && this.#nodeClasses.length > 0) {
            const text = this.#nodeClasses.map(c => `.${CSS.escape(c)}`).join('');
            const classes = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap({
                'node-label-class': true,
                'node-multiple-descriptors': hasId,
            });
            parts.push(html `<span class=${classes}>${text}</span>`);
        }
        // Disabled until https://crbug.com/1079231 is fixed.
        // clang-format off
        render(html `
      ${parts}
    `, this.#shadow, {
            host: this,
        });
        // clang-format on
    }
}
customElements.define('devtools-node-text', NodeText);
//# sourceMappingURL=NodeText.js.map

/***/ }),

/***/ "./ui/components/node_text/nodeText.css.js":
/*!*************************************************!*\
  !*** ./ui/components/node_text/nodeText.css.js ***!
  \*************************************************/
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

/* See: https://crbug.com/1227651 for details on changing these to --override pattern. */

.node-label-name {
  color: var(--override-node-text-label-color, var(--sys-color-token-tag));
}

.node-label-class {
  color: var(--override-node-text-class-color, var(--sys-color-token-attribute));
}

.node-label-id {
  color: var(--override-node-text-id-color, var(--sys-color-token-attribute));
}

.node-label-class.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-class, var(--override-node-text-class-color, var(--sys-color-token-attribute)));
}

.node-label-id.node-multiple-descriptors {
  color: var(--override-node-text-multiple-descriptors-id, var(--override-node-text-id-color, var(--sys-color-token-attribute)));
}

/*# sourceURL=nodeText.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./ui/components/node_text/node_text.js":
/*!**********************************************!*\
  !*** ./ui/components/node_text/node_text.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* reexport module object */ _NodeText_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _NodeText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeText.js */ "./ui/components/node_text/NodeText.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=node_text.js.map

/***/ })

}]);