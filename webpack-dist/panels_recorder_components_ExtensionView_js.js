"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_ExtensionView_js"],{

/***/ "./panels/recorder/components/ExtensionView.js":
/*!*****************************************************!*\
  !*** ./panels/recorder/components/ExtensionView.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClosedEvent: () => (/* binding */ ClosedEvent),
/* harmony export */   ExtensionView: () => (/* binding */ ExtensionView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensions/extensions.js */ "./panels/recorder/extensions/extensions.js");
/* harmony import */ var _extensionView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./extensionView.css.js */ "./panels/recorder/components/extensionView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     * @description The button label that closes the panel that shows the extension content inside the Recorder panel.
     */
    closeView: 'Close',
    /**
     * @description The label that indicates that the content shown is provided by a browser extension.
     */
    extension: 'Content provided by a browser extension',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/ExtensionView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class ClosedEvent extends Event {
    static eventName = 'recorderextensionviewclosed';
    constructor() {
        super(ClosedEvent.eventName, { bubbles: true, composed: true });
    }
}
class ExtensionView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-recorder-extension-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #descriptor;
    constructor() {
        super();
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('extension-view')}`);
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_extensionView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
        this.#render();
    }
    disconnectedCallback() {
        if (!this.#descriptor) {
            return;
        }
        _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(this.#descriptor.id).hide();
    }
    set descriptor(descriptor) {
        this.#descriptor = descriptor;
        this.#render();
        _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(descriptor.id).show();
    }
    #closeView() {
        this.dispatchEvent(new ClosedEvent());
    }
    #render() {
        if (!this.#descriptor) {
            return;
        }
        const iframe = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(this.#descriptor.id).frame();
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="extension-view">
          <header>
            <div class="title">
              <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}
                class="icon"
                title=${i18nString(UIStrings.extension)}
                name="extension">
              </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
              ${this.#descriptor.title}
            </div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
              title=${i18nString(UIStrings.closeView)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.close().track({ click: true })}
              .data=${{
            variant: "icon" /* Buttons.Button.Variant.ICON */,
            size: "SMALL" /* Buttons.Button.Size.SMALL */,
            iconName: 'cross',
        }}
              @click=${this.#closeView}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
          </header>
          <main>
            ${iframe}
          <main>
      </div>
    `, this.#shadow, { host: this });
        // clang-format on
    }
}
customElements.define('devtools-recorder-extension-view', ExtensionView);
//# sourceMappingURL=ExtensionView.js.map

/***/ }),

/***/ "./panels/recorder/components/extensionView.css.js":
/*!*********************************************************!*\
  !*** ./panels/recorder/components/extensionView.css.js ***!
  \*********************************************************/
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

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  font-size: inherit;
}

.extension-view {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  flex: 1;
}

iframe {
  border: none;
  height: 100%;
  width: 100%;
}

header {
  display: flex;
  padding: 3px 8px;
  justify-content: space-between;
  border-bottom: 1px solid var(--sys-color-divider);
}

header > div {
  align-self: center;
}

.icon {
  display: block;
  width: 16px;
  height: 16px;
  color: var(--sys-color-secondary);
}

.title {
  display: flex;
  flex-direction: row;
  gap: 6px;
  color: var(--sys-color-secondary);
  align-items: center;
  font-weight: 500;
}

/*# sourceURL=extensionView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./panels/recorder/extensions/ExtensionManager.js":
/*!********************************************************!*\
  !*** ./panels/recorder/extensions/ExtensionManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionManager: () => (/* binding */ ExtensionManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/extensions/extensions.js */ "./models/extensions/extensions.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


let instance = null;
class ExtensionManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    static instance() {
        if (!instance) {
            instance = new ExtensionManager();
        }
        return instance;
    }
    #views = new Map();
    constructor() {
        super();
        this.attach();
    }
    attach() {
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
        pluginManager.addEventListener("pluginAdded" /* Extensions.RecorderPluginManager.Events.PluginAdded */, this.#handlePlugin);
        pluginManager.addEventListener("pluginRemoved" /* Extensions.RecorderPluginManager.Events.PluginRemoved */, this.#handlePlugin);
        pluginManager.addEventListener("viewRegistered" /* Extensions.RecorderPluginManager.Events.ViewRegistered */, this.#handleView);
        for (const descriptor of pluginManager.views()) {
            this.#handleView({ data: descriptor });
        }
    }
    detach() {
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
        pluginManager.removeEventListener("pluginAdded" /* Extensions.RecorderPluginManager.Events.PluginAdded */, this.#handlePlugin);
        pluginManager.removeEventListener("pluginRemoved" /* Extensions.RecorderPluginManager.Events.PluginRemoved */, this.#handlePlugin);
        pluginManager.removeEventListener("viewRegistered" /* Extensions.RecorderPluginManager.Events.ViewRegistered */, this.#handleView);
        this.#views.clear();
    }
    extensions() {
        return _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance().plugins();
    }
    getView(descriptorId) {
        const view = this.#views.get(descriptorId);
        if (!view) {
            throw new Error('View not found');
        }
        return view;
    }
    #handlePlugin = () => {
        this.dispatchEventToListeners("extensionsUpdated" /* Events.ExtensionsUpdated */, this.extensions());
    };
    #handleView = (event) => {
        const descriptor = event.data;
        if (!this.#views.has(descriptor.id)) {
            this.#views.set(descriptor.id, new ExtensionIframe(descriptor));
        }
    };
}
class ExtensionIframe {
    #descriptor;
    #iframe;
    #isShowing = false;
    #isLoaded = false;
    constructor(descriptor) {
        this.#descriptor = descriptor;
        this.#iframe = document.createElement('iframe');
        this.#iframe.src = descriptor.pagePath;
        this.#iframe.onload = this.#onIframeLoad;
    }
    #onIframeLoad = () => {
        this.#isLoaded = true;
        if (this.#isShowing) {
            this.#descriptor.onShown();
        }
    };
    show() {
        if (this.#isShowing) {
            return;
        }
        this.#isShowing = true;
        if (this.#isLoaded) {
            this.#descriptor.onShown();
        }
    }
    hide() {
        if (!this.#isShowing) {
            return;
        }
        this.#isShowing = false;
        this.#isLoaded = false;
        this.#descriptor.onHidden();
    }
    frame() {
        return this.#iframe;
    }
}
//# sourceMappingURL=ExtensionManager.js.map

/***/ }),

/***/ "./panels/recorder/extensions/extensions.js":
/*!**************************************************!*\
  !*** ./panels/recorder/extensions/extensions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionManager: () => (/* reexport module object */ _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtensionManager.js */ "./panels/recorder/extensions/ExtensionManager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


//# sourceMappingURL=extensions.js.map

/***/ })

}]);