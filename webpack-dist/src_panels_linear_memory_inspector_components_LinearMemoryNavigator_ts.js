"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_linear_memory_inspector_components_LinearMemoryNavigator_ts"],{

/***/ "./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.ts":
/*!********************************************************************************!*\
  !*** ./src/panels/linear_memory_inspector/components/LinearMemoryNavigator.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressInputChangedEvent: () => (/* binding */ AddressInputChangedEvent),
/* harmony export */   HistoryNavigationEvent: () => (/* binding */ HistoryNavigationEvent),
/* harmony export */   LinearMemoryNavigator: () => (/* binding */ LinearMemoryNavigator),
/* harmony export */   Mode: () => (/* binding */ Mode),
/* harmony export */   Navigation: () => (/* binding */ Navigation),
/* harmony export */   PageNavigationEvent: () => (/* binding */ PageNavigationEvent),
/* harmony export */   RefreshRequestedEvent: () => (/* binding */ RefreshRequestedEvent)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryNavigator.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
var _LinearMemoryNavigator_instances, _LinearMemoryNavigator_shadow, _LinearMemoryNavigator_address, _LinearMemoryNavigator_error, _LinearMemoryNavigator_valid, _LinearMemoryNavigator_canGoBackInHistory, _LinearMemoryNavigator_canGoForwardInHistory, _LinearMemoryNavigator_render, _LinearMemoryNavigator_createAddressInput, _LinearMemoryNavigator_onAddressChange, _LinearMemoryNavigator_createButton;





const UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over a valid memory address (e.g. 0x0) in the address line in the Linear memory inspector.
     */
    enterAddress: 'Enter address',
    /**
     *@description Tooltip text that appears when hovering over the button to go back in history in the Linear Memory Navigator
     */
    goBackInAddressHistory: 'Go back in address history',
    /**
     *@description Tooltip text that appears when hovering over the button to go forward in history in the Linear Memory Navigator
     */
    goForwardInAddressHistory: 'Go forward in address history',
    /**
     *@description Tooltip text that appears when hovering over the page back icon in the Linear Memory Navigator
     */
    previousPage: 'Previous page',
    /**
     *@description Tooltip text that appears when hovering over the next page icon in the Linear Memory Navigator
     */
    nextPage: 'Next page',
    /**
     *@description Text to refresh the page
     */
    refresh: 'Refresh',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryNavigator.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
const { render, html } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__;
var Navigation;
(function (Navigation) {
    Navigation["Backward"] = "Backward";
    Navigation["Forward"] = "Forward";
})(Navigation || (Navigation = {}));
class AddressInputChangedEvent extends Event {
    constructor(address, mode) {
        super(AddressInputChangedEvent.eventName);
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = { address, mode };
    }
}
Object.defineProperty(AddressInputChangedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'addressinputchanged'
});
class PageNavigationEvent extends Event {
    constructor(navigation) {
        super(PageNavigationEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = navigation;
    }
}
Object.defineProperty(PageNavigationEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'pagenavigation'
});
class HistoryNavigationEvent extends Event {
    constructor(navigation) {
        super(HistoryNavigationEvent.eventName, {});
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.data = navigation;
    }
}
Object.defineProperty(HistoryNavigationEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'historynavigation'
});
class RefreshRequestedEvent extends Event {
    constructor() {
        super(RefreshRequestedEvent.eventName, {});
    }
}
Object.defineProperty(RefreshRequestedEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'refreshrequested'
});
var Mode;
(function (Mode) {
    Mode["Edit"] = "Edit";
    Mode["Submitted"] = "Submitted";
    Mode["InvalidSubmit"] = "InvalidSubmit";
})(Mode || (Mode = {}));
class LinearMemoryNavigator extends HTMLElement {
    constructor() {
        super(...arguments);
        _LinearMemoryNavigator_instances.add(this);
        _LinearMemoryNavigator_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _LinearMemoryNavigator_address.set(this, '0');
        _LinearMemoryNavigator_error.set(this, undefined);
        _LinearMemoryNavigator_valid.set(this, true);
        _LinearMemoryNavigator_canGoBackInHistory.set(this, false);
        _LinearMemoryNavigator_canGoForwardInHistory.set(this, false);
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _LinearMemoryNavigator_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './linearMemoryNavigator.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
    }
    set data(data) {
        __classPrivateFieldSet(this, _LinearMemoryNavigator_address, data.address, "f");
        __classPrivateFieldSet(this, _LinearMemoryNavigator_error, data.error, "f");
        __classPrivateFieldSet(this, _LinearMemoryNavigator_valid, data.valid, "f");
        __classPrivateFieldSet(this, _LinearMemoryNavigator_canGoBackInHistory, data.canGoBackInHistory, "f");
        __classPrivateFieldSet(this, _LinearMemoryNavigator_canGoForwardInHistory, data.canGoForwardInHistory, "f");
        __classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_render).call(this);
        const addressInput = __classPrivateFieldGet(this, _LinearMemoryNavigator_shadow, "f").querySelector('.address-input');
        if (addressInput) {
            if (data.mode === Mode.Submitted) {
                addressInput.blur();
            }
            else if (data.mode === Mode.InvalidSubmit) {
                addressInput.select();
            }
        }
    }
}
_LinearMemoryNavigator_shadow = new WeakMap(), _LinearMemoryNavigator_address = new WeakMap(), _LinearMemoryNavigator_error = new WeakMap(), _LinearMemoryNavigator_valid = new WeakMap(), _LinearMemoryNavigator_canGoBackInHistory = new WeakMap(), _LinearMemoryNavigator_canGoForwardInHistory = new WeakMap(), _LinearMemoryNavigator_instances = new WeakSet(), _LinearMemoryNavigator_render = function _LinearMemoryNavigator_render() {
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    const result = html `
      <div class="navigator">
        <div class="navigator-item">
          ${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_createButton).call(this, { icon: 'undo', title: i18nString(UIStrings.goBackInAddressHistory),
        event: new HistoryNavigationEvent(Navigation.Backward), enabled: __classPrivateFieldGet(this, _LinearMemoryNavigator_canGoBackInHistory, "f"),
        jslogContext: 'linear-memory-inspector.history-back' })}
          ${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_createButton).call(this, { icon: 'redo', title: i18nString(UIStrings.goForwardInAddressHistory),
        event: new HistoryNavigationEvent(Navigation.Forward), enabled: __classPrivateFieldGet(this, _LinearMemoryNavigator_canGoForwardInHistory, "f"),
        jslogContext: 'linear-memory-inspector.history-forward' })}
        </div>
        <div class="navigator-item">
          ${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_createButton).call(this, { icon: 'chevron-left', title: i18nString(UIStrings.previousPage),
        event: new PageNavigationEvent(Navigation.Backward), enabled: true,
        jslogContext: 'linear-memory-inspector.previous-page' })}
          ${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_createAddressInput).call(this)}
          ${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_createButton).call(this, { icon: 'chevron-right', title: i18nString(UIStrings.nextPage),
        event: new PageNavigationEvent(Navigation.Forward), enabled: true,
        jslogContext: 'linear-memory-inspector.next-page' })}
        </div>
        ${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_createButton).call(this, { icon: 'refresh', title: i18nString(UIStrings.refresh),
        event: new RefreshRequestedEvent(), enabled: true,
        jslogContext: 'linear-memory-inspector.refresh' })}
      </div>
      `;
    render(result, __classPrivateFieldGet(this, _LinearMemoryNavigator_shadow, "f"), { host: this });
    // clang-format on
}, _LinearMemoryNavigator_createAddressInput = function _LinearMemoryNavigator_createAddressInput() {
    const classMap = {
        'address-input': true,
        invalid: !__classPrivateFieldGet(this, _LinearMemoryNavigator_valid, "f"),
    };
    return html `
      <input class=${_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.Directives.classMap(classMap)} data-input="true" .value=${__classPrivateFieldGet(this, _LinearMemoryNavigator_address, "f")}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.textField('linear-memory-inspector.address').track({
        change: true,
    })}
        title=${__classPrivateFieldGet(this, _LinearMemoryNavigator_valid, "f") ? i18nString(UIStrings.enterAddress) : __classPrivateFieldGet(this, _LinearMemoryNavigator_error, "f")} @change=${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_onAddressChange).bind(this, Mode.Submitted)} @input=${__classPrivateFieldGet(this, _LinearMemoryNavigator_instances, "m", _LinearMemoryNavigator_onAddressChange).bind(this, Mode.Edit)}/>`;
}, _LinearMemoryNavigator_onAddressChange = function _LinearMemoryNavigator_onAddressChange(mode, event) {
    const addressInput = event.target;
    this.dispatchEvent(new AddressInputChangedEvent(addressInput.value, mode));
}, _LinearMemoryNavigator_createButton = function _LinearMemoryNavigator_createButton(data) {
    return html `
      <button class="navigator-button" ?disabled=${!data.enabled}
        jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.action().track({ click: true, keydown: 'Enter' }).context(data.jslogContext)}
        data-button=${data.event.type} title=${data.title}
        @click=${this.dispatchEvent.bind(this, data.event)}>
        <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName} name=${data.icon}></${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_1__.Icon.Icon.litTagName}>
      </button>`;
};
Object.defineProperty(LinearMemoryNavigator, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal `devtools-linear-memory-inspector-navigator`
});
customElements.define('devtools-linear-memory-inspector-navigator', LinearMemoryNavigator);


/***/ })

}]);