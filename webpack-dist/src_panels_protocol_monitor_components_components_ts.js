"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_protocol_monitor_components_components_ts"],{

/***/ "./src/panels/protocol_monitor/components/Toolbar.ts":
/*!***********************************************************!*\
  !*** ./src/panels/protocol_monitor/components/Toolbar.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyCommandEvent: () => (/* binding */ CopyCommandEvent),
/* harmony export */   SendCommandEvent: () => (/* binding */ SendCommandEvent),
/* harmony export */   Toolbar: () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './toolbar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const { html, Decorators, LitElement } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const { customElement } = Decorators;
const UIStrings = {
    /**
     * @description The title of a the button that sends a CDP command.
     */
    sendCommandCtrlEnter: 'Send command - Ctrl+Enter',
    /**
     * @description The title of a the button that sends a CDP command.
     */
    sendCommandCmdEnter: 'Send command - ⌘+Enter',
    /**
     * @description he title of a the button that copies a CDP command.
     */
    copyCommand: 'Copy command',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/protocol_monitor/components/Toolbar.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const copyIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/copy.svg */ "./src/Images/copy.svg?d91e"), __webpack_require__.b).toString();
const sendIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/send.svg */ "./src/Images/send.svg?58dc"), __webpack_require__.b).toString();
class CopyCommandEvent extends Event {
    constructor() {
        super(CopyCommandEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(CopyCommandEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'copycommand'
});
class SendCommandEvent extends Event {
    constructor() {
        super(SendCommandEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(SendCommandEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'commandsent'
});
let Toolbar = (() => {
    var _Toolbar_handleCopy, _Toolbar_handleSend;
    let _classDecorators = [customElement('devtools-pm-toolbar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var Toolbar = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            _Toolbar_handleCopy.set(this, () => {
                this.dispatchEvent(new CopyCommandEvent());
            });
            _Toolbar_handleSend.set(this, () => {
                this.dispatchEvent(new SendCommandEvent());
            });
        }
        render() {
            // clang-format off
            return html `
        <div class="toolbar">
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          title=${i18nString(UIStrings.copyCommand)}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL}
          .iconUrl=${copyIconUrl}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.TOOLBAR}
          @click=${__classPrivateFieldGet(this, _Toolbar_handleCopy, "f")}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.copy-command').track({ click: true })}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL}
          title=${_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? i18nString(UIStrings.sendCommandCmdEnter) : i18nString(UIStrings.sendCommandCtrlEnter)}
          .iconUrl=${sendIconUrl}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY_TOOLBAR}
          @click=${__classPrivateFieldGet(this, _Toolbar_handleSend, "f")}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.send-command').track({ click: true })}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      </div>
    `;
            // clang-format on
        }
    };
    _Toolbar_handleCopy = new WeakMap();
    _Toolbar_handleSend = new WeakMap();
    __setFunctionName(_classThis, "Toolbar");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Toolbar = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './toolbar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Toolbar = _classThis;
})();



/***/ }),

/***/ "./src/panels/protocol_monitor/components/components.ts":
/*!**************************************************************!*\
  !*** ./src/panels/protocol_monitor/components/components.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONEditor: () => (/* reexport module object */ _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   Toolbar: () => (/* reexport module object */ _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSONEditor.js */ "./src/panels/protocol_monitor/components/JSONEditor.ts");
/* harmony import */ var _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.js */ "./src/panels/protocol_monitor/components/Toolbar.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);