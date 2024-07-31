"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_animation_AnimationScreenshotPopover_ts"],{

/***/ "./src/panels/animation/AnimationScreenshotPopover.ts":
/*!************************************************************!*\
  !*** ./src/panels/animation/AnimationScreenshotPopover.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationScreenshotPopover: () => (/* binding */ AnimationScreenshotPopover)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './animationScreenshotPopover.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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
var _AnimationScreenshotPopover_frames, _AnimationScreenshotPopover_rafId, _AnimationScreenshotPopover_currentFrame, _AnimationScreenshotPopover_progressBar, _AnimationScreenshotPopover_showFrame, _AnimationScreenshotPopover_endDelay;


class AnimationScreenshotPopover extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.VBox {
    constructor(images) {
        super(true);
        _AnimationScreenshotPopover_frames.set(this, void 0);
        _AnimationScreenshotPopover_rafId.set(this, void 0);
        _AnimationScreenshotPopover_currentFrame.set(this, void 0);
        _AnimationScreenshotPopover_progressBar.set(this, void 0);
        _AnimationScreenshotPopover_showFrame.set(this, void 0);
        _AnimationScreenshotPopover_endDelay.set(this, void 0);
        console.assert(images.length > 0);
        this.contentElement.classList.add('animation-screenshot-popover');
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_frames, images, "f");
        for (const image of images) {
            this.contentElement.appendChild(image);
            image.style.display = 'none';
        }
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_rafId, 0, "f");
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_currentFrame, 0, "f");
        __classPrivateFieldGet(this, _AnimationScreenshotPopover_frames, "f")[0].style.display = 'block';
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_progressBar, this.contentElement.createChild('div', 'animation-progress'), "f");
    }
    wasShown() {
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_rafId, this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this)), "f");
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './animationScreenshotPopover.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    willHide() {
        this.contentElement.window().cancelAnimationFrame(__classPrivateFieldGet(this, _AnimationScreenshotPopover_rafId, "f"));
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_endDelay, undefined, "f");
    }
    changeFrame() {
        var _a, _b;
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_rafId, this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this)), "f");
        if (__classPrivateFieldGet(this, _AnimationScreenshotPopover_endDelay, "f")) {
            __classPrivateFieldSet(this, _AnimationScreenshotPopover_endDelay, (_a = __classPrivateFieldGet(this, _AnimationScreenshotPopover_endDelay, "f"), _a--, _a), "f");
            return;
        }
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_showFrame, !__classPrivateFieldGet(this, _AnimationScreenshotPopover_showFrame, "f"), "f");
        if (!__classPrivateFieldGet(this, _AnimationScreenshotPopover_showFrame, "f")) {
            return;
        }
        const numFrames = __classPrivateFieldGet(this, _AnimationScreenshotPopover_frames, "f").length;
        __classPrivateFieldGet(this, _AnimationScreenshotPopover_frames, "f")[__classPrivateFieldGet(this, _AnimationScreenshotPopover_currentFrame, "f") % numFrames].style.display = 'none';
        __classPrivateFieldSet(this, _AnimationScreenshotPopover_currentFrame, (_b = __classPrivateFieldGet(this, _AnimationScreenshotPopover_currentFrame, "f"), _b++, _b), "f");
        __classPrivateFieldGet(this, _AnimationScreenshotPopover_frames, "f")[(__classPrivateFieldGet(this, _AnimationScreenshotPopover_currentFrame, "f")) % numFrames].style.display = 'block';
        if (__classPrivateFieldGet(this, _AnimationScreenshotPopover_currentFrame, "f") % numFrames === numFrames - 1) {
            __classPrivateFieldSet(this, _AnimationScreenshotPopover_endDelay, 50, "f");
        }
        __classPrivateFieldGet(this, _AnimationScreenshotPopover_progressBar, "f").style.width = (__classPrivateFieldGet(this, _AnimationScreenshotPopover_currentFrame, "f") % numFrames + 1) / numFrames * 100 + '%';
    }
}
_AnimationScreenshotPopover_frames = new WeakMap(), _AnimationScreenshotPopover_rafId = new WeakMap(), _AnimationScreenshotPopover_currentFrame = new WeakMap(), _AnimationScreenshotPopover_progressBar = new WeakMap(), _AnimationScreenshotPopover_showFrame = new WeakMap(), _AnimationScreenshotPopover_endDelay = new WeakMap();


/***/ })

}]);