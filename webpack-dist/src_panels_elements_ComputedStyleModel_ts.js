"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_ComputedStyleModel_ts"],{

/***/ "./src/panels/elements/ComputedStyleModel.ts":
/*!***************************************************!*\
  !*** ./src/panels/elements/ComputedStyleModel.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyle: () => (/* binding */ ComputedStyle),
/* harmony export */   ComputedStyleModel: () => (/* binding */ ComputedStyleModel),
/* harmony export */   Events: () => (/* binding */ Events)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ComputedStyleModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    constructor() {
        super();
        Object.defineProperty(this, "nodeInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cssModelInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "eventListeners", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "frameResizedTimer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "computedStylePromise", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.nodeInternal = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode);
        this.cssModelInternal = null;
        this.eventListeners = [];
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode, this.onNodeChanged, this);
    }
    node() {
        return this.nodeInternal;
    }
    cssModel() {
        return this.cssModelInternal && this.cssModelInternal.isEnabled() ? this.cssModelInternal : null;
    }
    onNodeChanged(event) {
        this.nodeInternal = event.data;
        this.updateModel(this.nodeInternal ? this.nodeInternal.domModel().cssModel() : null);
        this.onComputedStyleChanged(null);
    }
    updateModel(cssModel) {
        if (this.cssModelInternal === cssModel) {
            return;
        }
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners);
        this.cssModelInternal = cssModel;
        const domModel = cssModel ? cssModel.domModel() : null;
        const resourceTreeModel = cssModel ? cssModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel) : null;
        if (cssModel && domModel && resourceTreeModel) {
            this.eventListeners = [
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetAdded, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetRemoved, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.StyleSheetChanged, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.FontsUpdated, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.MediaQueryResultChanged, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.PseudoStateForced, this.onComputedStyleChanged, this),
                cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.Events.ModelWasEnabled, this.onComputedStyleChanged, this),
                domModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.DOMMutated, this.onDOMModelChanged, this),
                resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.FrameResized, this.onFrameResized, this),
            ];
        }
    }
    onComputedStyleChanged(event) {
        delete this.computedStylePromise;
        this.dispatchEventToListeners(Events.ComputedStyleChanged, event?.data ?? null);
    }
    onDOMModelChanged(event) {
        // Any attribute removal or modification can affect the styles of "related" nodes.
        const node = event.data;
        if (!this.nodeInternal ||
            this.nodeInternal !== node && node.parentNode !== this.nodeInternal.parentNode &&
                !node.isAncestor(this.nodeInternal)) {
            return;
        }
        this.onComputedStyleChanged(null);
    }
    onFrameResized() {
        function refreshContents() {
            this.onComputedStyleChanged(null);
            delete this.frameResizedTimer;
        }
        if (this.frameResizedTimer) {
            clearTimeout(this.frameResizedTimer);
        }
        this.frameResizedTimer = window.setTimeout(refreshContents.bind(this), 100);
    }
    elementNode() {
        const node = this.node();
        if (!node) {
            return null;
        }
        return node.enclosingElementOrSelf();
    }
    async fetchComputedStyle() {
        const elementNode = this.elementNode();
        const cssModel = this.cssModel();
        if (!elementNode || !cssModel) {
            return null;
        }
        const nodeId = elementNode.id;
        if (!nodeId) {
            return null;
        }
        if (!this.computedStylePromise) {
            this.computedStylePromise = cssModel.getComputedStyle(nodeId).then(verifyOutdated.bind(this, elementNode));
        }
        return this.computedStylePromise;
        function verifyOutdated(elementNode, style) {
            return elementNode === this.elementNode() && style ? new ComputedStyle(elementNode, style) :
                null;
        }
    }
}
var Events;
(function (Events) {
    Events["ComputedStyleChanged"] = "ComputedStyleChanged";
})(Events || (Events = {}));
class ComputedStyle {
    constructor(node, computedStyle) {
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "computedStyle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.node = node;
        this.computedStyle = computedStyle;
    }
}


/***/ })

}]);