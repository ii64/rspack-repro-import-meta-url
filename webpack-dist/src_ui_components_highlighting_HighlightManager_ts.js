"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_highlighting_HighlightManager_ts"],{

/***/ "./src/ui/components/highlighting/HighlightManager.ts":
/*!************************************************************!*\
  !*** ./src/ui/components/highlighting/HighlightManager.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HIGHLIGHT_REGISTRY: () => (/* binding */ HIGHLIGHT_REGISTRY),
/* harmony export */   HighlightManager: () => (/* binding */ HighlightManager),
/* harmony export */   RangeWalker: () => (/* binding */ RangeWalker)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './highlighting.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
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
var _RangeWalker_instances, _RangeWalker_offset, _RangeWalker_treeWalker, _RangeWalker_eof, _RangeWalker_next, _RangeWalker_goToPosition, _HighlightManager_highlights;

class RangeWalker {
    constructor(root) {
        _RangeWalker_instances.add(this);
        Object.defineProperty(this, "root", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: root
        });
        _RangeWalker_offset.set(this, 0);
        _RangeWalker_treeWalker.set(this, void 0);
        _RangeWalker_eof.set(this, void 0);
        __classPrivateFieldSet(this, _RangeWalker_treeWalker, document.createTreeWalker(root, NodeFilter.SHOW_TEXT), "f");
        __classPrivateFieldSet(this, _RangeWalker_eof, !__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").firstChild(), "f");
    }
    nextRange(start, length) {
        if (length <= 0 || __classPrivateFieldGet(this, _RangeWalker_eof, "f")) {
            return null;
        }
        const startNode = __classPrivateFieldGet(this, _RangeWalker_instances, "m", _RangeWalker_goToPosition).call(this, start);
        if (!startNode) {
            return null;
        }
        const offsetInStartNode = start - __classPrivateFieldGet(this, _RangeWalker_offset, "f");
        const endNode = __classPrivateFieldGet(this, _RangeWalker_instances, "m", _RangeWalker_goToPosition).call(this, start + length);
        if (!endNode) {
            return null;
        }
        const offsetInEndNode = start + length - __classPrivateFieldGet(this, _RangeWalker_offset, "f");
        const range = new Range();
        range.setStart(startNode, offsetInStartNode);
        range.setEnd(endNode, offsetInEndNode);
        return range;
    }
}
_RangeWalker_offset = new WeakMap(), _RangeWalker_treeWalker = new WeakMap(), _RangeWalker_eof = new WeakMap(), _RangeWalker_instances = new WeakSet(), _RangeWalker_next = function _RangeWalker_next() {
    __classPrivateFieldSet(this, _RangeWalker_offset, __classPrivateFieldGet(this, _RangeWalker_offset, "f") + (__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").currentNode.textContent?.length ?? 0), "f");
    __classPrivateFieldSet(this, _RangeWalker_eof, !__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").nextNode(), "f");
    return !__classPrivateFieldGet(this, _RangeWalker_eof, "f");
}, _RangeWalker_goToPosition = function _RangeWalker_goToPosition(offset) {
    if (offset < __classPrivateFieldGet(this, _RangeWalker_offset, "f") || __classPrivateFieldGet(this, _RangeWalker_eof, "f")) {
        return null;
    }
    // `>` here implies that, except for the first range, start offsets are left-leaning, i.e., when the offset falls
    // between two text nodes, the preceding one is returned. This doesn't matter for Range semantics, but isn't
    // intuitive wrt. the usual understanding of intervals. Making start offsets right-leaning but end offsets
    // left-leaning would incur an unwarranted amount of complexity.
    while (offset > __classPrivateFieldGet(this, _RangeWalker_offset, "f") + (__classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").currentNode.textContent?.length ?? 0)) {
        if (!__classPrivateFieldGet(this, _RangeWalker_instances, "m", _RangeWalker_next).call(this)) {
            return null;
        }
    }
    return __classPrivateFieldGet(this, _RangeWalker_treeWalker, "f").currentNode;
};
const HIGHLIGHT_REGISTRY = 'search-highlight';
let highlightManagerInstance;
class HighlightManager {
    constructor() {
        _HighlightManager_highlights.set(this, new Highlight());
        document.adoptedStyleSheets.push(Object(function webpackMissingModule() { var e = new Error("Cannot find module './highlighting.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
        CSS.highlights.set(HIGHLIGHT_REGISTRY, __classPrivateFieldGet(this, _HighlightManager_highlights, "f"));
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!highlightManagerInstance || forceNew) {
            highlightManagerInstance = new HighlightManager();
        }
        return highlightManagerInstance;
    }
    addHighlights(ranges) {
        ranges.forEach(this.addHighlight.bind(this));
    }
    removeHighlights(ranges) {
        ranges.forEach(this.removeHighlight.bind(this));
    }
    addHighlight(range) {
        __classPrivateFieldGet(this, _HighlightManager_highlights, "f").add(range);
    }
    removeHighlight(range) {
        __classPrivateFieldGet(this, _HighlightManager_highlights, "f").delete(range);
    }
    highlightOrderedTextRanges(root, sourceRanges) {
        const rangeWalker = new RangeWalker(root);
        const ranges = sourceRanges.map(range => rangeWalker.nextRange(range.offset, range.length))
            .filter((r) => r !== null && !r.collapsed);
        this.addHighlights(ranges);
        return ranges;
    }
}
_HighlightManager_highlights = new WeakMap();


/***/ })

}]);