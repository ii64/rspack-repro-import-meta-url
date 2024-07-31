"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_extensions_ExtensionManager_ts"],{

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


/***/ })

}]);