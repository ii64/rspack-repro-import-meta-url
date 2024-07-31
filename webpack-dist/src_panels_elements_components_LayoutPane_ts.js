"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_LayoutPane_ts"],{

/***/ "./src/panels/elements/components/LayoutPane.ts":
/*!******************************************************!*\
  !*** ./src/panels/elements/components/LayoutPane.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutPane: () => (/* binding */ LayoutPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./src/ui/components/input/input.ts");
/* harmony import */ var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./src/ui/components/legacy_wrapper/legacy_wrapper.ts");
/* harmony import */ var _ui_components_node_text_node_text_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/node_text/node_text.js */ "./src/ui/components/node_text/node_text.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './layoutPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LayoutPane_instances, _LayoutPane_shadow, _LayoutPane_settings, _LayoutPane_uaShadowDOMSetting, _LayoutPane_domModels, _LayoutPane_fetchNodesByStyle, _LayoutPane_fetchGridNodes, _LayoutPane_fetchFlexContainerNodes, _LayoutPane_makeSettings, _LayoutPane_onSummaryKeyDown, _LayoutPane_getEnumSettings, _LayoutPane_getBooleanSettings, _LayoutPane_onBooleanSettingChange, _LayoutPane_onEnumSettingChange, _LayoutPane_onElementToggle, _LayoutPane_onElementClick, _LayoutPane_onColorChange, _LayoutPane_onElementMouseEnter, _LayoutPane_onElementMouseLeave, _LayoutPane_renderElement, _LayoutPane_renderBooleanSetting, _LayoutPane_renderEnumSetting;









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
    return setting.type === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM;
}
function isBooleanSetting(setting) {
    return setting.type === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN;
}
const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_8__.RenderCoordinator.RenderCoordinator.instance();
let layoutPaneWrapperInstance;
class LayoutPane extends _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_6__.LegacyWrapper.WrappableComponent {
    constructor() {
        super();
        _LayoutPane_instances.add(this);
        _LayoutPane_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _LayoutPane_settings.set(this, []);
        _LayoutPane_uaShadowDOMSetting.set(this, void 0);
        _LayoutPane_domModels.set(this, void 0);
        __classPrivateFieldSet(this, _LayoutPane_settings, __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_makeSettings).call(this), "f");
        __classPrivateFieldSet(this, _LayoutPane_uaShadowDOMSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-ua-shadow-dom'), "f");
        __classPrivateFieldSet(this, _LayoutPane_domModels, [], "f");
        __classPrivateFieldGet(this, _LayoutPane_shadow, "f").adoptedStyleSheets = [
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_5__.checkboxStyles,
            Object(function webpackMissingModule() { var e = new Error("Cannot find module './layoutPane.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
            Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../ui/legacy/inspectorCommon.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
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
        overlayModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.Events.PersistentGridOverlayStateChanged, this.render, this);
        overlayModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged, this.render, this);
        __classPrivateFieldGet(this, _LayoutPane_domModels, "f").push(domModel);
    }
    modelRemoved(domModel) {
        const overlayModel = domModel.overlayModel();
        overlayModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.Events.PersistentGridOverlayStateChanged, this.render, this);
        overlayModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged, this.render, this);
        __classPrivateFieldSet(this, _LayoutPane_domModels, __classPrivateFieldGet(this, _LayoutPane_domModels, "f").filter(model => model !== domModel), "f");
    }
    onSettingChanged(setting, value) {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting).set(value);
    }
    wasShown() {
        for (const setting of __classPrivateFieldGet(this, _LayoutPane_settings, "f")) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting.name).addChangeListener(this.render, this);
        }
        for (const domModel of __classPrivateFieldGet(this, _LayoutPane_domModels, "f")) {
            this.modelRemoved(domModel);
        }
        __classPrivateFieldSet(this, _LayoutPane_domModels, [], "f");
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, this, { scoped: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.render, this);
        __classPrivateFieldGet(this, _LayoutPane_uaShadowDOMSetting, "f").addChangeListener(this.render, this);
        void this.render();
    }
    willHide() {
        for (const setting of __classPrivateFieldGet(this, _LayoutPane_settings, "f")) {
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(setting.name).removeChangeListener(this.render, this);
        }
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().unobserveModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().removeFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, this.render, this);
        __classPrivateFieldGet(this, _LayoutPane_uaShadowDOMSetting, "f").removeChangeListener(this.render, this);
    }
    async render() {
        const gridElements = gridNodesToElements(await __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_fetchGridNodes).call(this));
        const flexContainerElements = flexContainerNodesToElements(await __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_fetchFlexContainerNodes).call(this));
        await coordinator.write('LayoutPane render', () => {
            // Disabled until https://crbug.com/1079231 is fixed.
            // clang-format off
            render(html `
        <details open>
          <summary class="header" @keydown=${__classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onSummaryKeyDown)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.sectionHeader('grid-settings').track({ click: true })}>
            ${i18nString(UIStrings.grid)}
          </summary>
          <div class="content-section" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('grid-settings')}>
            <h3 class="content-section-title">${i18nString(UIStrings.overlayDisplaySettings)}</h3>
            <div class="select-settings">
              ${__classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_getEnumSettings).call(this).map(setting => __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_renderEnumSetting).call(this, setting))}
            </div>
            <div class="checkbox-settings">
              ${__classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_getBooleanSettings).call(this).map(setting => __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_renderBooleanSetting).call(this, setting))}
            </div>
          </div>
          ${gridElements ?
                html `<div class="content-section" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('grid-overlays')}>
              <h3 class="content-section-title">
                ${gridElements.length ? i18nString(UIStrings.gridOverlays) : i18nString(UIStrings.noGridLayoutsFoundOnThisPage)}
              </h3>
              ${gridElements.length ?
                    html `<div class="elements">
                  ${gridElements.map(element => __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_renderElement).call(this, element))}
                </div>` : ''}
            </div>` : ''}
        </details>
        ${flexContainerElements !== undefined ?
                html `
          <details open>
            <summary class="header" @keydown=${__classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onSummaryKeyDown)} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.sectionHeader('flexbox-overlays').track({ click: true })}>
              ${i18nString(UIStrings.flexbox)}
            </summary>
            ${flexContainerElements ?
                    html `<div class="content-section" jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('flexbox-overlays')}>
                <h3 class="content-section-title">
                  ${flexContainerElements.length ? i18nString(UIStrings.flexboxOverlays) : i18nString(UIStrings.noFlexboxLayoutsFoundOnThisPage)}
                </h3>
                ${flexContainerElements.length ?
                        html `<div class="elements">
                    ${flexContainerElements.map(element => __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_renderElement).call(this, element))}
                  </div>` : ''}
              </div>` : ''}
          </details>
          `
                : ''}
      `, __classPrivateFieldGet(this, _LayoutPane_shadow, "f"), {
                host: this,
            });
            // clang-format on
        });
    }
}
_LayoutPane_shadow = new WeakMap(), _LayoutPane_settings = new WeakMap(), _LayoutPane_uaShadowDOMSetting = new WeakMap(), _LayoutPane_domModels = new WeakMap(), _LayoutPane_instances = new WeakSet(), _LayoutPane_fetchNodesByStyle = async function _LayoutPane_fetchNodesByStyle(style) {
    const showUAShadowDOM = __classPrivateFieldGet(this, _LayoutPane_uaShadowDOMSetting, "f").get();
    const nodes = [];
    for (const domModel of __classPrivateFieldGet(this, _LayoutPane_domModels, "f")) {
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
}, _LayoutPane_fetchGridNodes = async function _LayoutPane_fetchGridNodes() {
    return await __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_fetchNodesByStyle).call(this, [{ name: 'display', value: 'grid' }, { name: 'display', value: 'inline-grid' }]);
}, _LayoutPane_fetchFlexContainerNodes = async function _LayoutPane_fetchFlexContainerNodes() {
    return await __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_fetchNodesByStyle).call(this, [{ name: 'display', value: 'flex' }, { name: 'display', value: 'inline-flex' }]);
}, _LayoutPane_makeSettings = function _LayoutPane_makeSettings() {
    const settings = [];
    for (const settingName of ['show-grid-line-labels', 'show-grid-track-sizes', 'show-grid-areas', 'extend-grid-lines']) {
        const setting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting(settingName);
        const settingValue = setting.get();
        const settingType = setting.type();
        if (!settingType) {
            throw new Error('A setting provided to LayoutSidebarPane does not have a setting type');
        }
        if (settingType !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.BOOLEAN && settingType !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.SettingType.ENUM) {
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
}, _LayoutPane_onSummaryKeyDown = function _LayoutPane_onSummaryKeyDown(event) {
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
}, _LayoutPane_getEnumSettings = function _LayoutPane_getEnumSettings() {
    return __classPrivateFieldGet(this, _LayoutPane_settings, "f").filter(isEnumSetting);
}, _LayoutPane_getBooleanSettings = function _LayoutPane_getBooleanSettings() {
    return __classPrivateFieldGet(this, _LayoutPane_settings, "f").filter(isBooleanSetting);
}, _LayoutPane_onBooleanSettingChange = function _LayoutPane_onBooleanSettingChange(setting, event) {
    event.preventDefault();
    this.onSettingChanged(setting.name, event.target.checked);
}, _LayoutPane_onEnumSettingChange = function _LayoutPane_onEnumSettingChange(setting, event) {
    event.preventDefault();
    this.onSettingChanged(setting.name, event.target.value);
}, _LayoutPane_onElementToggle = function _LayoutPane_onElementToggle(element, event) {
    event.preventDefault();
    element.toggle(event.target.checked);
}, _LayoutPane_onElementClick = function _LayoutPane_onElementClick(element, event) {
    event.preventDefault();
    element.reveal();
}, _LayoutPane_onColorChange = function _LayoutPane_onColorChange(element, event) {
    event.preventDefault();
    element.setColor(event.target.value);
    void this.render();
}, _LayoutPane_onElementMouseEnter = function _LayoutPane_onElementMouseEnter(element, event) {
    event.preventDefault();
    element.highlight();
}, _LayoutPane_onElementMouseLeave = function _LayoutPane_onElementMouseLeave(element, event) {
    event.preventDefault();
    element.hideHighlight();
}, _LayoutPane_renderElement = function _LayoutPane_renderElement(element) {
    const onElementToggle = __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onElementToggle).bind(this, element);
    const onElementClick = __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onElementClick).bind(this, element);
    const onColorChange = __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onColorChange).bind(this, element);
    const onMouseEnter = __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onElementMouseEnter).bind(this, element);
    const onMouseLeave = __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onElementMouseLeave).bind(this, element);
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
                                           .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Size.SMALL}
                                           .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Variant.ICON}
                                           @click=${onElementClick}></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName}>
    </div>`;
    // clang-format on
}, _LayoutPane_renderBooleanSetting = function _LayoutPane_renderBooleanSetting(setting) {
    const onBooleanSettingChange = __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onBooleanSettingChange).bind(this, setting);
    return html `<label data-boolean-setting="true" class="checkbox-label" title=${setting.title} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.toggle().track({ click: true }).context(setting.name)}>
      <input data-input="true" type="checkbox" .checked=${setting.value} @change=${onBooleanSettingChange} />
      <span data-label="true">${setting.title}</span>
    </label>`;
}, _LayoutPane_renderEnumSetting = function _LayoutPane_renderEnumSetting(setting) {
    const onEnumSettingChange = __classPrivateFieldGet(this, _LayoutPane_instances, "m", _LayoutPane_onEnumSettingChange).bind(this, setting);
    return html `<label data-enum-setting="true" class="select-label" title=${setting.title}>
      <select
        class="chrome-select"
        data-input="true"
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.dropDown().track({ change: true }).context(setting.name)}
        @change=${onEnumSettingChange}>
        ${setting.options.map(opt => html `<option value=${opt.value} .selected=${setting.value === opt.value} jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.item(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.toKebabCase(opt.value)).track({ click: true })}>${opt.title}</option>`)}
      </select>
    </label>`;
};
Object.defineProperty(LayoutPane, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_11__.literal `devtools-layout-pane`
});
customElements.define('devtools-layout-pane', LayoutPane);


/***/ }),

/***/ "./src/ui/components/node_text/NodeText.ts":
/*!*************************************************!*\
  !*** ./src/ui/components/node_text/NodeText.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* binding */ NodeText)
/* harmony export */ });
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeText.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _NodeText_instances, _NodeText_shadow, _NodeText_nodeTitle, _NodeText_nodeId, _NodeText_nodeClasses, _NodeText_render;


const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__;
class NodeText extends HTMLElement {
    constructor() {
        super(...arguments);
        _NodeText_instances.add(this);
        _NodeText_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _NodeText_nodeTitle.set(this, '');
        _NodeText_nodeId.set(this, '');
        _NodeText_nodeClasses.set(this, []);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _NodeText_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './nodeText.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _NodeText_nodeTitle, data.nodeTitle, "f");
        __classPrivateFieldSet(this, _NodeText_nodeId, data.nodeId, "f");
        __classPrivateFieldSet(this, _NodeText_nodeClasses, data.nodeClasses, "f");
        __classPrivateFieldGet(this, _NodeText_instances, "m", _NodeText_render).call(this);
    }
}
_NodeText_shadow = new WeakMap(), _NodeText_nodeTitle = new WeakMap(), _NodeText_nodeId = new WeakMap(), _NodeText_nodeClasses = new WeakMap(), _NodeText_instances = new WeakSet(), _NodeText_render = function _NodeText_render() {
    const hasId = Boolean(__classPrivateFieldGet(this, _NodeText_nodeId, "f"));
    const hasNodeClasses = Boolean(__classPrivateFieldGet(this, _NodeText_nodeClasses, "f") && __classPrivateFieldGet(this, _NodeText_nodeClasses, "f").length > 0);
    const parts = [
        html `<span class="node-label-name">${__classPrivateFieldGet(this, _NodeText_nodeTitle, "f")}</span>`,
    ];
    if (__classPrivateFieldGet(this, _NodeText_nodeId, "f")) {
        const classes = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap({
            'node-label-id': true,
            'node-multiple-descriptors': hasNodeClasses,
        });
        parts.push(html `<span class=${classes}>#${CSS.escape(__classPrivateFieldGet(this, _NodeText_nodeId, "f"))}</span>`);
    }
    if (__classPrivateFieldGet(this, _NodeText_nodeClasses, "f") && __classPrivateFieldGet(this, _NodeText_nodeClasses, "f").length > 0) {
        const text = __classPrivateFieldGet(this, _NodeText_nodeClasses, "f").map(c => `.${CSS.escape(c)}`).join('');
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
    `, __classPrivateFieldGet(this, _NodeText_shadow, "f"), {
        host: this,
    });
    // clang-format on
};
Object.defineProperty(NodeText, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal `devtools-node-text`
});
customElements.define('devtools-node-text', NodeText);


/***/ }),

/***/ "./src/ui/components/node_text/node_text.ts":
/*!**************************************************!*\
  !*** ./src/ui/components/node_text/node_text.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NodeText: () => (/* reexport module object */ _NodeText_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _NodeText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeText.js */ "./src/ui/components/node_text/NodeText.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);