"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_animation_AnimationDOMNode_ts"],{

/***/ "./src/panels/animation/AnimationDOMNode.ts":
/*!**************************************************!*\
  !*** ./src/panels/animation/AnimationDOMNode.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationDOMNode: () => (/* binding */ AnimationDOMNode)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AnimationDOMNode_instances, _AnimationDOMNode_domNode, _AnimationDOMNode_scrollListenersById, _AnimationDOMNode_scrollBindingListener, _AnimationDOMNode_addReportScrollPositionBinding, _AnimationDOMNode_removeReportScrollPositionBinding;

const DEVTOOLS_ANIMATIONS_WORLD_NAME = 'devtools_animations';
const REPORT_SCROLL_POSITION_BINDING_NAME = '__devtools_report_scroll_position__';
const getScrollListenerNameInPage = (id) => `__devtools_scroll_listener_${id}__`;
async function resolveToObjectInWorld(domNode, worldName) {
    const resourceTreeModel = domNode.domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel);
    const pageAgent = domNode.domModel().target().pageAgent();
    for (const frame of resourceTreeModel.frames()) {
        // This returns previously created world if it exists for the frame.
        const { executionContextId } = await pageAgent.invoke_createIsolatedWorld({ frameId: frame.id, worldName });
        const object = await domNode.resolveToObject(undefined, executionContextId);
        if (object) {
            return object;
        }
    }
    return null;
}
/**
 * Provides an extension over `SDK.DOMModel.DOMNode` that gives it additional
 * capabilities for animation debugging, mainly:
 * - getting a node's scroll information (scroll offsets and scroll range).
 * - updating a node's scroll offset.
 * - tracking the node's scroll offsets with event listeners.
 *
 * It works by running functions on the target page, see `SDK.DOMModel.DOMNode`s `callFunction` method
 * for more details on how a function is called on the target page.
 *
 * For listening to events on the target page and getting notified on the devtools frontend
 * side, we're adding a binding to the page `__devtools_report_scroll_position__` in a world `devtools_animation`
 * we've created. Then, we're setting scroll listeners of the `node` in the same world which calls the binding
 * itself with the scroll offsets.
 */
class AnimationDOMNode {
    constructor(domNode) {
        _AnimationDOMNode_instances.add(this);
        _AnimationDOMNode_domNode.set(this, void 0);
        _AnimationDOMNode_scrollListenersById.set(this, void 0);
        _AnimationDOMNode_scrollBindingListener.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationDOMNode_domNode, domNode, "f");
        __classPrivateFieldSet(this, _AnimationDOMNode_scrollListenersById, new Map(), "f");
    }
    async addScrollEventListener(onScroll) {
        AnimationDOMNode.lastAddedListenerId++;
        const id = AnimationDOMNode.lastAddedListenerId;
        __classPrivateFieldGet(this, _AnimationDOMNode_scrollListenersById, "f").set(id, onScroll);
        // Add the binding for reporting scroll events from the page if it doesn't exist.
        if (!__classPrivateFieldGet(this, _AnimationDOMNode_scrollBindingListener, "f")) {
            await __classPrivateFieldGet(this, _AnimationDOMNode_instances, "m", _AnimationDOMNode_addReportScrollPositionBinding).call(this);
        }
        const object = await resolveToObjectInWorld(__classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f"), DEVTOOLS_ANIMATIONS_WORLD_NAME);
        if (!object) {
            return null;
        }
        await object.callFunction(scrollListenerInPage, [
            id,
            REPORT_SCROLL_POSITION_BINDING_NAME,
            getScrollListenerNameInPage(id),
        ].map(arg => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.toCallArgument(arg)));
        object.release();
        return id;
        function scrollListenerInPage(id, reportScrollPositionBindingName, scrollListenerNameInPage) {
            if ('scrollingElement' in this && !this.scrollingElement) {
                return;
            }
            const scrollingElement = ('scrollingElement' in this ? this.scrollingElement : this);
            // @ts-ignore We're setting a custom field on `Element` or `Document` for retaining the function on the page.
            this[scrollListenerNameInPage] = () => {
                // @ts-ignore `reportScrollPosition` binding is injected to the page before calling the function.
                globalThis[reportScrollPositionBindingName](JSON.stringify({ scrollTop: scrollingElement.scrollTop, scrollLeft: scrollingElement.scrollLeft, id }));
            };
            // @ts-ignore We've already defined the function used below.
            this.addEventListener('scroll', this[scrollListenerNameInPage], true);
        }
    }
    async removeScrollEventListener(id) {
        const object = await resolveToObjectInWorld(__classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f"), DEVTOOLS_ANIMATIONS_WORLD_NAME);
        if (!object) {
            return;
        }
        await object.callFunction(removeScrollListenerInPage, [getScrollListenerNameInPage(id)].map(arg => _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RemoteObject.RemoteObject.toCallArgument(arg)));
        object.release();
        __classPrivateFieldGet(this, _AnimationDOMNode_scrollListenersById, "f").delete(id);
        // There aren't any scroll listeners remained on the page
        // so we remove the binding.
        if (__classPrivateFieldGet(this, _AnimationDOMNode_scrollListenersById, "f").size === 0) {
            await __classPrivateFieldGet(this, _AnimationDOMNode_instances, "m", _AnimationDOMNode_removeReportScrollPositionBinding).call(this);
        }
        function removeScrollListenerInPage(scrollListenerNameInPage) {
            // @ts-ignore We've already set this custom field while adding scroll listener.
            this.removeEventListener('scroll', this[scrollListenerNameInPage]);
            // @ts-ignore We've already set this custom field while adding scroll listener.
            delete this[scrollListenerNameInPage];
        }
    }
    async scrollTop() {
        return __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").callFunction(scrollTopInPage).then(res => res?.value ?? null);
        function scrollTopInPage() {
            if ('scrollingElement' in this) {
                if (!this.scrollingElement) {
                    return 0;
                }
                return this.scrollingElement.scrollTop;
            }
            return this.scrollTop;
        }
    }
    async scrollLeft() {
        return __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").callFunction(scrollLeftInPage).then(res => res?.value ?? null);
        function scrollLeftInPage() {
            if ('scrollingElement' in this) {
                if (!this.scrollingElement) {
                    return 0;
                }
                return this.scrollingElement.scrollLeft;
            }
            return this.scrollLeft;
        }
    }
    async setScrollTop(offset) {
        await __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").callFunction(setScrollTopInPage, [offset]);
        function setScrollTopInPage(offsetInPage) {
            if ('scrollingElement' in this) {
                if (!this.scrollingElement) {
                    return;
                }
                this.scrollingElement.scrollTop = offsetInPage;
            }
            else {
                this.scrollTop = offsetInPage;
            }
        }
    }
    async setScrollLeft(offset) {
        await __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").callFunction(setScrollLeftInPage, [offset]);
        function setScrollLeftInPage(offsetInPage) {
            if ('scrollingElement' in this) {
                if (!this.scrollingElement) {
                    return;
                }
                this.scrollingElement.scrollLeft = offsetInPage;
            }
            else {
                this.scrollLeft = offsetInPage;
            }
        }
    }
    async verticalScrollRange() {
        return __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").callFunction(verticalScrollRangeInPage).then(res => res?.value ?? null);
        function verticalScrollRangeInPage() {
            if ('scrollingElement' in this) {
                if (!this.scrollingElement) {
                    return 0;
                }
                return this.scrollingElement.scrollHeight - this.scrollingElement.clientHeight;
            }
            return this.scrollHeight - this.clientHeight;
        }
    }
    async horizontalScrollRange() {
        return __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").callFunction(horizontalScrollRangeInPage).then(res => res?.value ?? null);
        function horizontalScrollRangeInPage() {
            if ('scrollingElement' in this) {
                if (!this.scrollingElement) {
                    return 0;
                }
                return this.scrollingElement.scrollWidth - this.scrollingElement.clientWidth;
            }
            return this.scrollWidth - this.clientWidth;
        }
    }
}
_AnimationDOMNode_domNode = new WeakMap(), _AnimationDOMNode_scrollListenersById = new WeakMap(), _AnimationDOMNode_scrollBindingListener = new WeakMap(), _AnimationDOMNode_instances = new WeakSet(), _AnimationDOMNode_addReportScrollPositionBinding = async function _AnimationDOMNode_addReportScrollPositionBinding() {
    // The binding is already added so we don't need to add it again.
    if (__classPrivateFieldGet(this, _AnimationDOMNode_scrollBindingListener, "f")) {
        return;
    }
    __classPrivateFieldSet(this, _AnimationDOMNode_scrollBindingListener, ev => {
        const { name, payload } = ev.data;
        if (name !== REPORT_SCROLL_POSITION_BINDING_NAME) {
            return;
        }
        const { scrollTop, scrollLeft, id } = JSON.parse(payload);
        const scrollListener = __classPrivateFieldGet(this, _AnimationDOMNode_scrollListenersById, "f").get(id);
        if (!scrollListener) {
            return;
        }
        scrollListener({ scrollTop, scrollLeft });
    }, "f");
    const runtimeModel = __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
    await runtimeModel.addBinding({
        name: REPORT_SCROLL_POSITION_BINDING_NAME,
        executionContextName: DEVTOOLS_ANIMATIONS_WORLD_NAME,
    });
    runtimeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.Events.BindingCalled, __classPrivateFieldGet(this, _AnimationDOMNode_scrollBindingListener, "f"));
}, _AnimationDOMNode_removeReportScrollPositionBinding = async function _AnimationDOMNode_removeReportScrollPositionBinding() {
    // There isn't any binding added yet.
    if (!__classPrivateFieldGet(this, _AnimationDOMNode_scrollBindingListener, "f")) {
        return;
    }
    const runtimeModel = __classPrivateFieldGet(this, _AnimationDOMNode_domNode, "f").domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.RuntimeModel);
    await runtimeModel.removeBinding({
        name: REPORT_SCROLL_POSITION_BINDING_NAME,
    });
    runtimeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.Events.BindingCalled, __classPrivateFieldGet(this, _AnimationDOMNode_scrollBindingListener, "f"));
    __classPrivateFieldSet(this, _AnimationDOMNode_scrollBindingListener, undefined, "f");
};
Object.defineProperty(AnimationDOMNode, "lastAddedListenerId", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 0
});


/***/ })

}]);