"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_ElementsSidebarPane_js"],{

/***/ "./panels/elements/ComputedStyleModel.js":
/*!***********************************************!*\
  !*** ./panels/elements/ComputedStyleModel.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComputedStyle: () => (/* binding */ ComputedStyle),
/* harmony export */   ComputedStyleModel: () => (/* binding */ ComputedStyleModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ComputedStyleModel extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    nodeInternal;
    cssModelInternal;
    eventListeners;
    frameResizedTimer;
    computedStylePromise;
    constructor() {
        super();
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
        this.dispatchEventToListeners("ComputedStyleChanged" /* Events.ComputedStyleChanged */, event?.data ?? null);
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
class ComputedStyle {
    node;
    computedStyle;
    constructor(node, computedStyle) {
        this.node = node;
        this.computedStyle = computedStyle;
    }
}
//# sourceMappingURL=ComputedStyleModel.js.map

/***/ }),

/***/ "./panels/elements/ElementsSidebarPane.js":
/*!************************************************!*\
  !*** ./panels/elements/ElementsSidebarPane.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ElementsSidebarPane: () => (/* binding */ ElementsSidebarPane)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class ElementsSidebarPane extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox {
    computedStyleModelInternal;
    updateThrottler;
    updateWhenVisible;
    constructor(delegatesFocus) {
        super(true, delegatesFocus);
        this.element.classList.add('flex-none');
        this.computedStyleModelInternal = new _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__.ComputedStyleModel();
        this.computedStyleModelInternal.addEventListener("ComputedStyleChanged" /* Events.ComputedStyleChanged */, this.onCSSModelChanged, this);
        this.updateThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        this.updateWhenVisible = false;
    }
    node() {
        return this.computedStyleModelInternal.node();
    }
    cssModel() {
        return this.computedStyleModelInternal.cssModel();
    }
    computedStyleModel() {
        return this.computedStyleModelInternal;
    }
    async doUpdate() {
        return;
    }
    update() {
        this.updateWhenVisible = !this.isShowing();
        if (this.updateWhenVisible) {
            return;
        }
        void this.updateThrottler.schedule(innerUpdate.bind(this));
        function innerUpdate() {
            return this.isShowing() ? this.doUpdate() : Promise.resolve();
        }
    }
    wasShown() {
        super.wasShown();
        if (this.updateWhenVisible) {
            this.update();
        }
    }
    onCSSModelChanged(_event) {
    }
}
//# sourceMappingURL=ElementsSidebarPane.js.map

/***/ })

}]);