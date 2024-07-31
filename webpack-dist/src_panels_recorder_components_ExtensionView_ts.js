"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_ExtensionView_ts"],{

/***/ "./src/panels/recorder/components/ExtensionView.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/components/ExtensionView.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClosedEvent: () => (/* binding */ ClosedEvent),
/* harmony export */   ExtensionView: () => (/* binding */ ExtensionView)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../extensions/extensions.js */ "./src/panels/recorder/extensions/extensions.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './extensionView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _ExtensionView_instances, _ExtensionView_shadow, _ExtensionView_descriptor, _ExtensionView_closeView, _ExtensionView_render;








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
    constructor() {
        super(ClosedEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(ClosedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'recorderextensionviewclosed'
});
class ExtensionView extends HTMLElement {
    constructor() {
        super();
        _ExtensionView_instances.add(this);
        _ExtensionView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ExtensionView_descriptor.set(this, void 0);
        this.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.section('extension-view')}`);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _ExtensionView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './extensionView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        __classPrivateFieldGet(this, _ExtensionView_instances, "m", _ExtensionView_render).call(this);
    }
    disconnectedCallback() {
        if (!__classPrivateFieldGet(this, _ExtensionView_descriptor, "f")) {
            return;
        }
        _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(__classPrivateFieldGet(this, _ExtensionView_descriptor, "f").id).hide();
    }
    set descriptor(descriptor) {
        __classPrivateFieldSet(this, _ExtensionView_descriptor, descriptor, "f");
        __classPrivateFieldGet(this, _ExtensionView_instances, "m", _ExtensionView_render).call(this);
        _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(descriptor.id).show();
    }
}
_ExtensionView_shadow = new WeakMap(), _ExtensionView_descriptor = new WeakMap(), _ExtensionView_instances = new WeakSet(), _ExtensionView_closeView = function _ExtensionView_closeView() {
    this.dispatchEvent(new ClosedEvent());
}, _ExtensionView_render = function _ExtensionView_render() {
    if (!__classPrivateFieldGet(this, _ExtensionView_descriptor, "f")) {
        return;
    }
    const iframe = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_6__.ExtensionManager.ExtensionManager.instance().getView(__classPrivateFieldGet(this, _ExtensionView_descriptor, "f").id).frame();
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
              ${__classPrivateFieldGet(this, _ExtensionView_descriptor, "f").title}
            </div>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
              title=${i18nString(UIStrings.closeView)}
              jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.close().track({ click: true })}
              .data=${{
        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.ICON,
        size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL,
        iconName: 'cross',
    }}
              @click=${__classPrivateFieldGet(this, _ExtensionView_instances, "m", _ExtensionView_closeView)}
            ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
          </header>
          <main>
            ${iframe}
          <main>
      </div>
    `, __classPrivateFieldGet(this, _ExtensionView_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ExtensionView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-recorder-extension-view`
});
customElements.define('devtools-recorder-extension-view', ExtensionView);


/***/ }),

/***/ "./src/panels/recorder/extensions/ExtensionManager.ts":
/*!************************************************************!*\
  !*** ./src/panels/recorder/extensions/ExtensionManager.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   ExtensionManager: () => (/* binding */ ExtensionManager)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/extensions/extensions.js */ "./src/models/extensions/extensions.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _ExtensionManager_views, _ExtensionManager_handlePlugin, _ExtensionManager_handleView, _ExtensionIframe_descriptor, _ExtensionIframe_iframe, _ExtensionIframe_isShowing, _ExtensionIframe_isLoaded, _ExtensionIframe_onIframeLoad;


let instance = null;
class ExtensionManager extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    static instance() {
        if (!instance) {
            instance = new ExtensionManager();
        }
        return instance;
    }
    constructor() {
        super();
        _ExtensionManager_views.set(this, new Map());
        _ExtensionManager_handlePlugin.set(this, () => {
            this.dispatchEventToListeners(Events.ExtensionsUpdated, this.extensions());
        });
        _ExtensionManager_handleView.set(this, (event) => {
            const descriptor = event.data;
            if (!__classPrivateFieldGet(this, _ExtensionManager_views, "f").has(descriptor.id)) {
                __classPrivateFieldGet(this, _ExtensionManager_views, "f").set(descriptor.id, new ExtensionIframe(descriptor));
            }
        });
        this.attach();
    }
    attach() {
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
        pluginManager.addEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.Events.PluginAdded, __classPrivateFieldGet(this, _ExtensionManager_handlePlugin, "f"));
        pluginManager.addEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.Events.PluginRemoved, __classPrivateFieldGet(this, _ExtensionManager_handlePlugin, "f"));
        pluginManager.addEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.Events.ViewRegistered, __classPrivateFieldGet(this, _ExtensionManager_handleView, "f"));
        for (const descriptor of pluginManager.views()) {
            __classPrivateFieldGet(this, _ExtensionManager_handleView, "f").call(this, { data: descriptor });
        }
    }
    detach() {
        const pluginManager = _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance();
        pluginManager.removeEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.Events.PluginAdded, __classPrivateFieldGet(this, _ExtensionManager_handlePlugin, "f"));
        pluginManager.removeEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.Events.PluginRemoved, __classPrivateFieldGet(this, _ExtensionManager_handlePlugin, "f"));
        pluginManager.removeEventListener(_models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.Events.ViewRegistered, __classPrivateFieldGet(this, _ExtensionManager_handleView, "f"));
        __classPrivateFieldGet(this, _ExtensionManager_views, "f").clear();
    }
    extensions() {
        return _models_extensions_extensions_js__WEBPACK_IMPORTED_MODULE_1__.RecorderPluginManager.RecorderPluginManager.instance().plugins();
    }
    getView(descriptorId) {
        const view = __classPrivateFieldGet(this, _ExtensionManager_views, "f").get(descriptorId);
        if (!view) {
            throw new Error('View not found');
        }
        return view;
    }
}
_ExtensionManager_views = new WeakMap(), _ExtensionManager_handlePlugin = new WeakMap(), _ExtensionManager_handleView = new WeakMap();
class ExtensionIframe {
    constructor(descriptor) {
        _ExtensionIframe_descriptor.set(this, void 0);
        _ExtensionIframe_iframe.set(this, void 0);
        _ExtensionIframe_isShowing.set(this, false);
        _ExtensionIframe_isLoaded.set(this, false);
        _ExtensionIframe_onIframeLoad.set(this, () => {
            __classPrivateFieldSet(this, _ExtensionIframe_isLoaded, true, "f");
            if (__classPrivateFieldGet(this, _ExtensionIframe_isShowing, "f")) {
                __classPrivateFieldGet(this, _ExtensionIframe_descriptor, "f").onShown();
            }
        });
        __classPrivateFieldSet(this, _ExtensionIframe_descriptor, descriptor, "f");
        __classPrivateFieldSet(this, _ExtensionIframe_iframe, document.createElement('iframe'), "f");
        __classPrivateFieldGet(this, _ExtensionIframe_iframe, "f").src = descriptor.pagePath;
        __classPrivateFieldGet(this, _ExtensionIframe_iframe, "f").onload = __classPrivateFieldGet(this, _ExtensionIframe_onIframeLoad, "f");
    }
    show() {
        if (__classPrivateFieldGet(this, _ExtensionIframe_isShowing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ExtensionIframe_isShowing, true, "f");
        if (__classPrivateFieldGet(this, _ExtensionIframe_isLoaded, "f")) {
            __classPrivateFieldGet(this, _ExtensionIframe_descriptor, "f").onShown();
        }
    }
    hide() {
        if (!__classPrivateFieldGet(this, _ExtensionIframe_isShowing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ExtensionIframe_isShowing, false, "f");
        __classPrivateFieldSet(this, _ExtensionIframe_isLoaded, false, "f");
        __classPrivateFieldGet(this, _ExtensionIframe_descriptor, "f").onHidden();
    }
    frame() {
        return __classPrivateFieldGet(this, _ExtensionIframe_iframe, "f");
    }
}
_ExtensionIframe_descriptor = new WeakMap(), _ExtensionIframe_iframe = new WeakMap(), _ExtensionIframe_isShowing = new WeakMap(), _ExtensionIframe_isLoaded = new WeakMap(), _ExtensionIframe_onIframeLoad = new WeakMap();
var Events;
(function (Events) {
    Events["ExtensionsUpdated"] = "extensionsUpdated";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/panels/recorder/extensions/extensions.ts":
/*!******************************************************!*\
  !*** ./src/panels/recorder/extensions/extensions.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtensionManager: () => (/* reexport module object */ _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _ExtensionManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExtensionManager.js */ "./src/panels/recorder/extensions/ExtensionManager.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ })

}]);