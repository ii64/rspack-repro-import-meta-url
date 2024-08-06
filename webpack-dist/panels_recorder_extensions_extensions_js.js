"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_extensions_extensions_js"],{

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