"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_emulation_InspectedPagePlaceholder_ts"],{

/***/ "./src/panels/emulation/InspectedPagePlaceholder.ts":
/*!**********************************************************!*\
  !*** ./src/panels/emulation/InspectedPagePlaceholder.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   InspectedPagePlaceholder: () => (/* binding */ InspectedPagePlaceholder)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './inspectedPagePlaceholder.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



let inspectedPagePlaceholderInstance;
class InspectedPagePlaceholder extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.Widget) {
    constructor() {
        super(true);
        Object.defineProperty(this, "updateId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.registerRequiredCSS(Object(function webpackMissingModule() { var e = new Error("Cannot find module './inspectedPagePlaceholder.css.legacy.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.Events.ZoomChanged, this.onResize, this);
        this.restoreMinimumSize();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!inspectedPagePlaceholderInstance || forceNew) {
            inspectedPagePlaceholderInstance = new InspectedPagePlaceholder();
        }
        return inspectedPagePlaceholderInstance;
    }
    onResize() {
        if (this.updateId) {
            this.element.window().cancelAnimationFrame(this.updateId);
        }
        this.updateId = this.element.window().requestAnimationFrame(this.update.bind(this, false));
    }
    restoreMinimumSize() {
        this.setMinimumSize(150, 150);
    }
    clearMinimumSize() {
        this.setMinimumSize(1, 1);
    }
    dipPageRect() {
        const zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ZoomManager.ZoomManager.instance().zoomFactor();
        const rect = this.element.getBoundingClientRect();
        const bodyRect = this.element.ownerDocument.body.getBoundingClientRect();
        const left = Math.max(rect.left * zoomFactor, bodyRect.left * zoomFactor);
        const top = Math.max(rect.top * zoomFactor, bodyRect.top * zoomFactor);
        const bottom = Math.min(rect.bottom * zoomFactor, bodyRect.bottom * zoomFactor);
        const right = Math.min(rect.right * zoomFactor, bodyRect.right * zoomFactor);
        return { x: left, y: top, width: right - left, height: bottom - top };
    }
    update(force) {
        delete this.updateId;
        const rect = this.dipPageRect();
        const bounds = {
            x: Math.round(rect.x),
            y: Math.round(rect.y),
            height: Math.max(1, Math.round(rect.height)),
            width: Math.max(1, Math.round(rect.width)),
        };
        if (force) {
            // Short term fix for Lighthouse interop.
            --bounds.height;
            this.dispatchEventToListeners(Events.Update, bounds);
            ++bounds.height;
        }
        this.dispatchEventToListeners(Events.Update, bounds);
    }
}
var Events;
(function (Events) {
    Events["Update"] = "Update";
})(Events || (Events = {}));


/***/ })

}]);