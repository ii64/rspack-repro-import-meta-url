"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_animation_AnimationUI_ts"],{

/***/ "./src/panels/animation/AnimationGroupPreviewUI.ts":
/*!*********************************************************!*\
  !*** ./src/panels/animation/AnimationGroupPreviewUI.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationGroupPreviewUI: () => (/* binding */ AnimationGroupPreviewUI)
/* harmony export */ });
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationUI.js */ "./src/panels/animation/AnimationUI.ts");
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
var _AnimationGroupPreviewUI_model, _AnimationGroupPreviewUI_removeButtonInternal, _AnimationGroupPreviewUI_replayOverlayElement, _AnimationGroupPreviewUI_svg, _AnimationGroupPreviewUI_viewBoxHeight;




class AnimationGroupPreviewUI {
    constructor(model) {
        _AnimationGroupPreviewUI_model.set(this, void 0);
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _AnimationGroupPreviewUI_removeButtonInternal.set(this, void 0);
        _AnimationGroupPreviewUI_replayOverlayElement.set(this, void 0);
        _AnimationGroupPreviewUI_svg.set(this, void 0);
        _AnimationGroupPreviewUI_viewBoxHeight.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationGroupPreviewUI_model, model, "f");
        this.element = document.createElement('button');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.item(`animations.buffer-preview${model.isScrollDriven() ? '-sda' : ''}`).track({
            click: true,
        })}`);
        this.element.classList.add('animation-buffer-preview');
        this.element.addEventListener('animationend', () => {
            this.element.classList.add('no-animation');
        });
        this.element.createChild('div', 'animation-paused fill');
        if (model.isScrollDriven()) {
            this.element.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('mouse', 'preview-icon'));
        }
        else {
            this.element.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('watch', 'preview-icon'));
        }
        __classPrivateFieldSet(this, _AnimationGroupPreviewUI_removeButtonInternal, this.element.createChild('button', 'animation-remove-button'), "f");
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_removeButtonInternal, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.action('animations.remove-preview').track({ click: true })}`);
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_removeButtonInternal, "f").appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('cross'));
        __classPrivateFieldSet(this, _AnimationGroupPreviewUI_replayOverlayElement, this.element.createChild('div', 'animation-buffer-preview-animation'), "f");
        __classPrivateFieldSet(this, _AnimationGroupPreviewUI_svg, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(this.element, 'svg'), "f");
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_svg, "f").setAttribute('width', '100%');
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_svg, "f").setAttribute('preserveAspectRatio', 'none');
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_svg, "f").setAttribute('height', '100%');
        __classPrivateFieldSet(this, _AnimationGroupPreviewUI_viewBoxHeight, 32, "f");
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_svg, "f").setAttribute('viewBox', '0 0 100 ' + __classPrivateFieldGet(this, _AnimationGroupPreviewUI_viewBoxHeight, "f"));
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_svg, "f").setAttribute('shape-rendering', 'crispEdges');
        this.render();
    }
    removeButton() {
        return __classPrivateFieldGet(this, _AnimationGroupPreviewUI_removeButtonInternal, "f");
    }
    replay() {
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_replayOverlayElement, "f").animate([
            { offset: 0, width: '0%', opacity: 1 },
            { offset: 0.9, width: '100%', opacity: 1 },
            { offset: 1, width: '100%', opacity: 0 },
        ], { duration: 200, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
    }
    render() {
        __classPrivateFieldGet(this, _AnimationGroupPreviewUI_svg, "f").removeChildren();
        const maxToShow = 10;
        const numberOfAnimations = Math.min(__classPrivateFieldGet(this, _AnimationGroupPreviewUI_model, "f").animations().length, maxToShow);
        const timeToPixelRatio = 100 / Math.max(__classPrivateFieldGet(this, _AnimationGroupPreviewUI_model, "f").groupDuration(), 750);
        for (let i = 0; i < numberOfAnimations; i++) {
            const animation = __classPrivateFieldGet(this, _AnimationGroupPreviewUI_model, "f").animations()[i];
            const line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(__classPrivateFieldGet(this, _AnimationGroupPreviewUI_svg, "f"), 'line');
            const startPoint = animation.delayOrStartTime();
            const endPoint = startPoint + animation.iterationDuration();
            line.setAttribute('x1', String(startPoint * timeToPixelRatio));
            line.setAttribute('x2', String(endPoint * timeToPixelRatio));
            const y = String(Math.floor(__classPrivateFieldGet(this, _AnimationGroupPreviewUI_viewBoxHeight, "f") / Math.max(6, numberOfAnimations) * i + 1));
            line.setAttribute('y1', y);
            line.setAttribute('y2', y);
            line.style.stroke = _AnimationUI_js__WEBPACK_IMPORTED_MODULE_3__.AnimationUI.colorForAnimation(__classPrivateFieldGet(this, _AnimationGroupPreviewUI_model, "f").animations()[i]);
        }
    }
}
_AnimationGroupPreviewUI_model = new WeakMap(), _AnimationGroupPreviewUI_removeButtonInternal = new WeakMap(), _AnimationGroupPreviewUI_replayOverlayElement = new WeakMap(), _AnimationGroupPreviewUI_svg = new WeakMap(), _AnimationGroupPreviewUI_viewBoxHeight = new WeakMap();


/***/ }),

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


/***/ }),

/***/ "./src/panels/animation/AnimationTimeline.ts":
/*!***************************************************!*\
  !*** ./src/panels/animation/AnimationTimeline.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationTimeline: () => (/* binding */ AnimationTimeline),
/* harmony export */   GlobalPlaybackRates: () => (/* binding */ GlobalPlaybackRates),
/* harmony export */   NodeUI: () => (/* binding */ NodeUI),
/* harmony export */   StepTimingFunction: () => (/* binding */ StepTimingFunction)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./src/panels/animation/AnimationGroupPreviewUI.ts");
/* harmony import */ var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnimationModel.js */ "./src/panels/animation/AnimationModel.ts");
/* harmony import */ var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./src/panels/animation/AnimationScreenshotPopover.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './animationTimeline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AnimationUI.js */ "./src/panels/animation/AnimationUI.ts");
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
var _AnimationTimeline_instances, _AnimationTimeline_gridWrapper, _AnimationTimeline_grid, _AnimationTimeline_playbackRate, _AnimationTimeline_allPaused, _AnimationTimeline_screenshotPopovers, _AnimationTimeline_animationsContainer, _AnimationTimeline_playbackRateButtons, _AnimationTimeline_previewContainer, _AnimationTimeline_timelineScrubber, _AnimationTimeline_currentTime, _AnimationTimeline_clearButton, _AnimationTimeline_selectedGroup, _AnimationTimeline_renderQueue, _AnimationTimeline_defaultDuration, _AnimationTimeline_durationInternal, _AnimationTimeline_timelineControlsWidth, _AnimationTimeline_nodesMap, _AnimationTimeline_uiAnimations, _AnimationTimeline_groupBuffer, _AnimationTimeline_previewMap, _AnimationTimeline_animationsMap, _AnimationTimeline_timelineScrubberLine, _AnimationTimeline_pauseButton, _AnimationTimeline_controlButton, _AnimationTimeline_controlState, _AnimationTimeline_redrawing, _AnimationTimeline_cachedTimelineWidth, _AnimationTimeline_scrubberPlayer, _AnimationTimeline_gridOffsetLeft, _AnimationTimeline_originalScrubberTime, _AnimationTimeline_animationGroupPausedBeforeScrub, _AnimationTimeline_originalMousePosition, _AnimationTimeline_timelineControlsResizer, _AnimationTimeline_gridHeader, _AnimationTimeline_scrollListenerId, _AnimationTimeline_collectedGroups, _AnimationTimeline_createPreviewForCollectedGroupsThrottler, _AnimationTimeline_animationGroupUpdatedThrottler, _AnimationTimeline_initialized, _AnimationTimeline_setupTimelineControlsResizer, _AnimationTimeline_scrubberCurrentTime, _NodeUI_description, _NodeUI_timelineElement, _NodeUI_overlayElement, _NodeUI_node;













const UIStrings = {
    /**
     *@description Timeline hint text content in Animation Timeline of the Animation Inspector
     */
    selectAnEffectAboveToInspectAnd: 'Select an effect above to inspect and modify.',
    /**
     *@description Text to clear everything
     */
    clearAll: 'Clear all',
    /**
     *@description Tooltip text that appears when hovering over largeicon pause button in Animation Timeline of the Animation Inspector
     */
    pauseAll: 'Pause all',
    /**
     *@description Title of the playback rate button listbox
     */
    playbackRates: 'Playback rates',
    /**
     *@description Text in Animation Timeline of the Animation Inspector
     *@example {50} PH1
     */
    playbackRatePlaceholder: '{PH1}%',
    /**
     *@description Text of an item that pause the running task
     */
    pause: 'Pause',
    /**
     *@description Button title in Animation Timeline of the Animation Inspector
     *@example {50%} PH1
     */
    setSpeedToS: 'Set speed to {PH1}',
    /**
     *@description Title of Animation Previews listbox
     */
    animationPreviews: 'Animation previews',
    /**
     *@description Empty buffer hint text content in Animation Timeline of the Animation Inspector
     */
    waitingForAnimations: 'Waiting for animations...',
    /**
     *@description Tooltip text that appears when hovering over largeicon replay animation button in Animation Timeline of the Animation Inspector
     */
    replayTimeline: 'Replay timeline',
    /**
     *@description Text in Animation Timeline of the Animation Inspector
     */
    resumeAll: 'Resume all',
    /**
     *@description Title of control button in animation timeline of the animation inspector
     */
    playTimeline: 'Play timeline',
    /**
     *@description Title of control button in animation timeline of the animation inspector
     */
    pauseTimeline: 'Pause timeline',
    /**
     *@description Title of a specific Animation Preview
     *@example {1} PH1
     */
    animationPreviewS: 'Animation Preview {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/animation/AnimationTimeline.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const nodeUIsByNode = new WeakMap();
const playbackRates = new WeakMap();
const MIN_TIMELINE_CONTROLS_WIDTH = 120;
const DEFAULT_TIMELINE_CONTROLS_WIDTH = 150;
const MAX_TIMELINE_CONTROLS_WIDTH = 720;
let animationTimelineInstance;
class AnimationTimeline extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox {
    constructor() {
        super(true);
        _AnimationTimeline_instances.add(this);
        _AnimationTimeline_gridWrapper.set(this, void 0);
        _AnimationTimeline_grid.set(this, void 0);
        _AnimationTimeline_playbackRate.set(this, void 0);
        _AnimationTimeline_allPaused.set(this, void 0);
        _AnimationTimeline_screenshotPopovers.set(this, []);
        _AnimationTimeline_animationsContainer.set(this, void 0);
        _AnimationTimeline_playbackRateButtons.set(this, void 0);
        _AnimationTimeline_previewContainer.set(this, void 0);
        _AnimationTimeline_timelineScrubber.set(this, void 0);
        _AnimationTimeline_currentTime.set(this, void 0);
        _AnimationTimeline_clearButton.set(this, void 0);
        _AnimationTimeline_selectedGroup.set(this, void 0);
        _AnimationTimeline_renderQueue.set(this, void 0);
        _AnimationTimeline_defaultDuration.set(this, void 0);
        _AnimationTimeline_durationInternal.set(this, void 0);
        _AnimationTimeline_timelineControlsWidth.set(this, void 0);
        _AnimationTimeline_nodesMap.set(this, void 0);
        _AnimationTimeline_uiAnimations.set(this, void 0);
        _AnimationTimeline_groupBuffer.set(this, void 0);
        _AnimationTimeline_previewMap.set(this, void 0);
        _AnimationTimeline_animationsMap.set(this, void 0);
        _AnimationTimeline_timelineScrubberLine.set(this, void 0);
        _AnimationTimeline_pauseButton.set(this, void 0);
        _AnimationTimeline_controlButton.set(this, void 0);
        _AnimationTimeline_controlState.set(this, void 0);
        _AnimationTimeline_redrawing.set(this, void 0);
        _AnimationTimeline_cachedTimelineWidth.set(this, void 0);
        _AnimationTimeline_scrubberPlayer.set(this, void 0);
        _AnimationTimeline_gridOffsetLeft.set(this, void 0);
        _AnimationTimeline_originalScrubberTime.set(this, void 0);
        _AnimationTimeline_animationGroupPausedBeforeScrub.set(this, void 0);
        _AnimationTimeline_originalMousePosition.set(this, void 0);
        _AnimationTimeline_timelineControlsResizer.set(this, void 0);
        _AnimationTimeline_gridHeader.set(this, void 0);
        _AnimationTimeline_scrollListenerId.set(this, void 0);
        _AnimationTimeline_collectedGroups.set(this, void 0);
        _AnimationTimeline_createPreviewForCollectedGroupsThrottler.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10));
        _AnimationTimeline_animationGroupUpdatedThrottler.set(this, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10));
        // We're only adding event listeners to the animation model when the panel is first shown.
        _AnimationTimeline_initialized.set(this, false);
        this.element.classList.add('animations-timeline');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.panel('animations').track({ resize: true })}`);
        __classPrivateFieldSet(this, _AnimationTimeline_timelineControlsResizer, this.contentElement.createChild('div', 'timeline-controls-resizer'), "f");
        __classPrivateFieldSet(this, _AnimationTimeline_gridWrapper, this.contentElement.createChild('div', 'grid-overflow-wrapper'), "f");
        __classPrivateFieldSet(this, _AnimationTimeline_grid, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSVGChild(__classPrivateFieldGet(this, _AnimationTimeline_gridWrapper, "f"), 'svg', 'animation-timeline-grid'), "f");
        __classPrivateFieldSet(this, _AnimationTimeline_playbackRate, 1, "f");
        __classPrivateFieldSet(this, _AnimationTimeline_allPaused, false, "f");
        __classPrivateFieldSet(this, _AnimationTimeline_animationGroupPausedBeforeScrub, false, "f");
        this.createHeader();
        __classPrivateFieldSet(this, _AnimationTimeline_animationsContainer, this.contentElement.createChild('div', 'animation-timeline-rows'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_animationsContainer, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('animations')}`);
        const timelineHint = this.contentElement.createChild('div', 'animation-timeline-rows-hint');
        timelineHint.textContent = i18nString(UIStrings.selectAnEffectAboveToInspectAnd);
        /** @const */ __classPrivateFieldSet(this, _AnimationTimeline_defaultDuration, 100, "f");
        __classPrivateFieldSet(this, _AnimationTimeline_durationInternal, __classPrivateFieldGet(this, _AnimationTimeline_defaultDuration, "f"), "f");
        __classPrivateFieldSet(this, _AnimationTimeline_nodesMap, new Map(), "f");
        __classPrivateFieldSet(this, _AnimationTimeline_uiAnimations, [], "f");
        __classPrivateFieldSet(this, _AnimationTimeline_groupBuffer, [], "f");
        __classPrivateFieldSet(this, _AnimationTimeline_collectedGroups, [], "f");
        __classPrivateFieldSet(this, _AnimationTimeline_previewMap, new Map(), "f");
        __classPrivateFieldSet(this, _AnimationTimeline_animationsMap, new Map(), "f");
        __classPrivateFieldSet(this, _AnimationTimeline_timelineControlsWidth, DEFAULT_TIMELINE_CONTROLS_WIDTH, "f");
        this.element.style.setProperty('--timeline-controls-width', `${__classPrivateFieldGet(this, _AnimationTimeline_timelineControlsWidth, "f")}px`);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.NodeRemoved, ev => this.markNodeAsRemoved(ev.data.node), this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeModels(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.AnimationModel, this, { scoped: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, this.nodeChanged, this);
        __classPrivateFieldGet(this, _AnimationTimeline_instances, "m", _AnimationTimeline_setupTimelineControlsResizer).call(this);
    }
    static instance(opts) {
        if (!animationTimelineInstance || opts?.forceNew) {
            animationTimelineInstance = new AnimationTimeline();
        }
        return animationTimelineInstance;
    }
    get previewMap() {
        return __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f");
    }
    get uiAnimations() {
        return __classPrivateFieldGet(this, _AnimationTimeline_uiAnimations, "f");
    }
    get groupBuffer() {
        return __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f");
    }
    wasShown() {
        if (__classPrivateFieldGet(this, _AnimationTimeline_initialized, "f")) {
            return;
        }
        for (const animationModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.AnimationModel, { scoped: true })) {
            this.addEventListeners(animationModel);
        }
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './animationTimeline.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        __classPrivateFieldSet(this, _AnimationTimeline_initialized, true, "f");
    }
    modelAdded(animationModel) {
        if (this.isShowing()) {
            this.addEventListeners(animationModel);
        }
    }
    modelRemoved(animationModel) {
        this.removeEventListeners(animationModel);
    }
    addEventListeners(animationModel) {
        void animationModel.ensureEnabled();
        animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.Events.AnimationGroupStarted, this.animationGroupStarted, this);
        animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.Events.AnimationGroupUpdated, this.animationGroupUpdated, this);
        animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.Events.ModelReset, this.reset, this);
    }
    removeEventListeners(animationModel) {
        animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.Events.AnimationGroupStarted, this.animationGroupStarted, this);
        animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.Events.AnimationGroupUpdated, this.animationGroupUpdated, this);
        animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.Events.ModelReset, this.reset, this);
    }
    nodeChanged() {
        for (const nodeUI of __classPrivateFieldGet(this, _AnimationTimeline_nodesMap, "f").values()) {
            nodeUI.nodeChanged();
        }
    }
    createScrubber() {
        __classPrivateFieldSet(this, _AnimationTimeline_timelineScrubber, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").classList.add('animation-scrubber');
        __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").classList.add('hidden');
        __classPrivateFieldSet(this, _AnimationTimeline_timelineScrubberLine, __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").createChild('div', 'animation-scrubber-line'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubberLine, "f").createChild('div', 'animation-scrubber-head');
        __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").createChild('div', 'animation-time-overlay');
        return __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f");
    }
    createHeader() {
        const toolbarContainer = this.contentElement.createChild('div', 'animation-timeline-toolbar-container');
        toolbarContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()}`);
        const topToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('animation-timeline-toolbar', toolbarContainer);
        __classPrivateFieldSet(this, _AnimationTimeline_clearButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear', undefined, 'animations.clear'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_clearButton, "f").addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupsCleared);
            this.reset();
        });
        topToolbar.appendToolbarItem(__classPrivateFieldGet(this, _AnimationTimeline_clearButton, "f"));
        topToolbar.appendSeparator();
        __classPrivateFieldSet(this, _AnimationTimeline_pauseButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarToggle(i18nString(UIStrings.pauseAll), 'pause', 'resume', 'animations.pause-resume-all'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f").addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, () => {
            this.togglePauseAll();
        });
        topToolbar.appendToolbarItem(__classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f"));
        const playbackRateControl = toolbarContainer.createChild('div', 'animation-playback-rate-control');
        playbackRateControl.addEventListener('keydown', this.handlePlaybackRateControlKeyDown.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsListBox(playbackRateControl);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(playbackRateControl, i18nString(UIStrings.playbackRates));
        __classPrivateFieldSet(this, _AnimationTimeline_playbackRateButtons, [], "f");
        for (const playbackRate of GlobalPlaybackRates) {
            const button = playbackRateControl.createChild('button', 'animation-playback-rate-button');
            button.textContent = playbackRate ? i18nString(UIStrings.playbackRatePlaceholder, { PH1: playbackRate * 100 }) :
                i18nString(UIStrings.pause);
            button.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.action().context(`animations.playback-rate-${playbackRate * 100}`).track({
                click: true,
                keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight',
            })}`);
            playbackRates.set(button, playbackRate);
            button.addEventListener('click', this.setPlaybackRate.bind(this, playbackRate));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsOption(button);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.Tooltip.install(button, i18nString(UIStrings.setSpeedToS, { PH1: button.textContent }));
            button.tabIndex = -1;
            __classPrivateFieldGet(this, _AnimationTimeline_playbackRateButtons, "f").push(button);
        }
        this.updatePlaybackControls();
        __classPrivateFieldSet(this, _AnimationTimeline_previewContainer, this.contentElement.createChild('div', 'animation-timeline-buffer'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_previewContainer, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('film-strip')}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsListBox(__classPrivateFieldGet(this, _AnimationTimeline_previewContainer, "f"));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(__classPrivateFieldGet(this, _AnimationTimeline_previewContainer, "f"), i18nString(UIStrings.animationPreviews));
        const emptyBufferHint = this.contentElement.createChild('div', 'animation-timeline-buffer-hint');
        emptyBufferHint.textContent = i18nString(UIStrings.waitingForAnimations);
        const container = this.contentElement.createChild('div', 'animation-timeline-header');
        const controls = container.createChild('div', 'animation-controls');
        __classPrivateFieldSet(this, _AnimationTimeline_currentTime, controls.createChild('div', 'animation-timeline-current-time monospace'), "f");
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('animation-controls-toolbar', controls);
        __classPrivateFieldSet(this, _AnimationTimeline_controlButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.replayTimeline), 'replay', undefined, 'animations.play-replay-pause-animation-group'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").element.classList.add('toolbar-state-on');
        __classPrivateFieldSet(this, _AnimationTimeline_controlState, ControlState.Replay, "f");
        __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton.Events.Click, this.controlButtonToggle.bind(this));
        toolbar.appendToolbarItem(__classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f"));
        __classPrivateFieldSet(this, _AnimationTimeline_gridHeader, container.createChild('div', 'animation-grid-header'), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_gridHeader, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.timeline('animations.grid-header').track({ drag: true, click: true })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.installDragHandle(__classPrivateFieldGet(this, _AnimationTimeline_gridHeader, "f"), this.scrubberDragStart.bind(this), this.scrubberDragMove.bind(this), this.scrubberDragEnd.bind(this), null);
        __classPrivateFieldGet(this, _AnimationTimeline_gridWrapper, "f").appendChild(this.createScrubber());
        this.clearCurrentTimeText();
        return container;
    }
    handlePlaybackRateControlKeyDown(event) {
        const keyboardEvent = event;
        switch (keyboardEvent.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                this.focusNextPlaybackRateButton(event.target, /* focusPrevious */ true);
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                this.focusNextPlaybackRateButton(event.target);
                break;
        }
    }
    focusNextPlaybackRateButton(target, focusPrevious) {
        const button = target;
        const currentIndex = __classPrivateFieldGet(this, _AnimationTimeline_playbackRateButtons, "f").indexOf(button);
        const nextIndex = focusPrevious ? currentIndex - 1 : currentIndex + 1;
        if (nextIndex < 0 || nextIndex >= __classPrivateFieldGet(this, _AnimationTimeline_playbackRateButtons, "f").length) {
            return;
        }
        const nextButton = __classPrivateFieldGet(this, _AnimationTimeline_playbackRateButtons, "f")[nextIndex];
        nextButton.tabIndex = 0;
        nextButton.focus();
        if (target) {
            target.tabIndex = -1;
        }
    }
    togglePauseAll() {
        __classPrivateFieldSet(this, _AnimationTimeline_allPaused, !__classPrivateFieldGet(this, _AnimationTimeline_allPaused, "f"), "f");
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(__classPrivateFieldGet(this, _AnimationTimeline_allPaused, "f") ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsPaused : _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsResumed);
        if (__classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f").setToggled(__classPrivateFieldGet(this, _AnimationTimeline_allPaused, "f"));
        }
        this.setPlaybackRate(__classPrivateFieldGet(this, _AnimationTimeline_playbackRate, "f"));
        if (__classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f").setTitle(__classPrivateFieldGet(this, _AnimationTimeline_allPaused, "f") ? i18nString(UIStrings.resumeAll) : i18nString(UIStrings.pauseAll));
        }
    }
    setPlaybackRate(playbackRate) {
        if (playbackRate !== __classPrivateFieldGet(this, _AnimationTimeline_playbackRate, "f")) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.animationPlaybackRateChanged(playbackRate === 0.1 ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationsPlaybackRate.Percent10 :
                playbackRate === 0.25 ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationsPlaybackRate.Percent25 :
                    playbackRate === 1 ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationsPlaybackRate.Percent100 :
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationsPlaybackRate.Other);
        }
        __classPrivateFieldSet(this, _AnimationTimeline_playbackRate, playbackRate, "f");
        for (const animationModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_9__.AnimationModel, { scoped: true })) {
            animationModel.setPlaybackRate(__classPrivateFieldGet(this, _AnimationTimeline_allPaused, "f") ? 0 : __classPrivateFieldGet(this, _AnimationTimeline_playbackRate, "f"));
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsPlaybackRateChanged);
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").playbackRate = this.effectivePlaybackRate();
        }
        this.updatePlaybackControls();
    }
    updatePlaybackControls() {
        for (const button of __classPrivateFieldGet(this, _AnimationTimeline_playbackRateButtons, "f")) {
            const selected = __classPrivateFieldGet(this, _AnimationTimeline_playbackRate, "f") === playbackRates.get(button);
            button.classList.toggle('selected', selected);
            button.tabIndex = selected ? 0 : -1;
        }
    }
    controlButtonToggle() {
        if (__classPrivateFieldGet(this, _AnimationTimeline_controlState, "f") === ControlState.Play) {
            this.togglePause(false);
        }
        else if (__classPrivateFieldGet(this, _AnimationTimeline_controlState, "f") === ControlState.Replay) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupReplayed);
            this.replay();
        }
        else {
            this.togglePause(true);
        }
    }
    updateControlButton() {
        if (!__classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f")) {
            return;
        }
        __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").setEnabled(Boolean(__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")) && this.hasAnimationGroupActiveNodes() && !__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")?.isScrollDriven());
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") && __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").paused()) {
            __classPrivateFieldSet(this, _AnimationTimeline_controlState, ControlState.Play, "f");
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").element.classList.toggle('toolbar-state-on', true);
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").setTitle(i18nString(UIStrings.playTimeline));
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").setGlyph('play');
        }
        else if (!__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f") || !__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").currentTime ||
            typeof __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").currentTime !== 'number' || __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").currentTime >= this.duration()) {
            __classPrivateFieldSet(this, _AnimationTimeline_controlState, ControlState.Replay, "f");
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").element.classList.toggle('toolbar-state-on', true);
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").setTitle(i18nString(UIStrings.replayTimeline));
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").setGlyph('replay');
        }
        else {
            __classPrivateFieldSet(this, _AnimationTimeline_controlState, ControlState.Pause, "f");
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").element.classList.toggle('toolbar-state-on', false);
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").setTitle(i18nString(UIStrings.pauseTimeline));
            __classPrivateFieldGet(this, _AnimationTimeline_controlButton, "f").setGlyph('pause');
        }
    }
    effectivePlaybackRate() {
        return (__classPrivateFieldGet(this, _AnimationTimeline_allPaused, "f") || (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") && __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").paused())) ? 0 : __classPrivateFieldGet(this, _AnimationTimeline_playbackRate, "f");
    }
    togglePause(pause) {
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").togglePause(pause);
            const preview = __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f"));
            if (preview) {
                preview.element.classList.toggle('paused', pause);
            }
        }
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").playbackRate = this.effectivePlaybackRate();
        }
        this.updateControlButton();
    }
    replay() {
        if (!__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") || !this.hasAnimationGroupActiveNodes() || __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").isScrollDriven()) {
            return;
        }
        __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").seekTo(0);
        this.animateTime(0);
        this.updateControlButton();
    }
    duration() {
        return __classPrivateFieldGet(this, _AnimationTimeline_durationInternal, "f");
    }
    setDuration(duration) {
        __classPrivateFieldSet(this, _AnimationTimeline_durationInternal, duration, "f");
        this.scheduleRedraw();
    }
    clearTimeline() {
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") && __classPrivateFieldGet(this, _AnimationTimeline_scrollListenerId, "f")) {
            void __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").scrollNode().then((node) => {
                void node?.removeScrollEventListener(__classPrivateFieldGet(this, _AnimationTimeline_scrollListenerId, "f"));
                __classPrivateFieldSet(this, _AnimationTimeline_scrollListenerId, undefined, "f");
            });
        }
        __classPrivateFieldSet(this, _AnimationTimeline_uiAnimations, [], "f");
        __classPrivateFieldGet(this, _AnimationTimeline_nodesMap, "f").clear();
        __classPrivateFieldGet(this, _AnimationTimeline_animationsMap, "f").clear();
        __classPrivateFieldGet(this, _AnimationTimeline_animationsContainer, "f").removeChildren();
        __classPrivateFieldSet(this, _AnimationTimeline_durationInternal, __classPrivateFieldGet(this, _AnimationTimeline_defaultDuration, "f"), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").classList.add('hidden');
        __classPrivateFieldGet(this, _AnimationTimeline_gridHeader, "f").classList.remove('scrubber-enabled');
        __classPrivateFieldSet(this, _AnimationTimeline_selectedGroup, null, "f");
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").cancel();
        }
        __classPrivateFieldSet(this, _AnimationTimeline_scrubberPlayer, undefined, "f");
        this.clearCurrentTimeText();
        this.updateControlButton();
    }
    reset() {
        this.clearTimeline();
        this.setPlaybackRate(__classPrivateFieldGet(this, _AnimationTimeline_playbackRate, "f"));
        for (const group of __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f")) {
            group.release();
        }
        __classPrivateFieldSet(this, _AnimationTimeline_groupBuffer, [], "f");
        this.clearPreviews();
        this.renderGrid();
    }
    animationGroupStarted({ data }) {
        this.addAnimationGroup(data);
    }
    scheduledRedrawAfterAnimationGroupUpdatedForTest() {
    }
    animationGroupUpdated({ data: group }) {
        void __classPrivateFieldGet(this, _AnimationTimeline_animationGroupUpdatedThrottler, "f").schedule(async () => {
            const preview = __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(group);
            if (preview) {
                preview.replay();
            }
            if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") !== group) {
                return;
            }
            if (group.isScrollDriven()) {
                const animationNode = await group.scrollNode();
                if (animationNode) {
                    const scrollRange = group.scrollOrientation() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.DOM.ScrollOrientation.Vertical ?
                        await animationNode.verticalScrollRange() :
                        await animationNode.horizontalScrollRange();
                    const scrollOffset = group.scrollOrientation() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.DOM.ScrollOrientation.Vertical ?
                        await animationNode.scrollTop() :
                        await animationNode.scrollLeft();
                    if (scrollRange !== null) {
                        this.setDuration(scrollRange);
                    }
                    if (scrollOffset !== null) {
                        this.setCurrentTimeText(scrollOffset);
                        this.setTimelineScrubberPosition(scrollOffset);
                    }
                }
            }
            else {
                this.setDuration(group.finiteDuration());
            }
            this.updateControlButton();
            this.scheduleRedraw();
            this.scheduledRedrawAfterAnimationGroupUpdatedForTest();
        });
    }
    clearPreviews() {
        __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").clear();
        __classPrivateFieldGet(this, _AnimationTimeline_screenshotPopovers, "f").forEach(popover => {
            popover.detach();
        });
        __classPrivateFieldGet(this, _AnimationTimeline_previewContainer, "f").removeChildren();
        __classPrivateFieldSet(this, _AnimationTimeline_screenshotPopovers, [], "f");
    }
    createPreview(group) {
        const preview = new _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_8__.AnimationGroupPreviewUI(group);
        const previewUiContainer = document.createElement('div');
        previewUiContainer.classList.add('preview-ui-container');
        previewUiContainer.appendChild(preview.element);
        const screenshotsContainer = document.createElement('div');
        screenshotsContainer.classList.add('screenshots-container', 'no-screenshots');
        screenshotsContainer.createChild('span', 'screenshot-arrow');
        // After the view is shown on hover, position it if it is out of bounds.
        screenshotsContainer.addEventListener('animationend', () => {
            const { right, left, width } = screenshotsContainer.getBoundingClientRect();
            // Render to the left if it is not getting out of bounds when rendered on the left.
            if (right > window.innerWidth && (left - width) >= 0) {
                screenshotsContainer.classList.add('to-the-left');
            }
        });
        previewUiContainer.appendChild(screenshotsContainer);
        __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").push(group);
        __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").set(group, preview);
        __classPrivateFieldGet(this, _AnimationTimeline_previewContainer, "f").appendChild(previewUiContainer);
        preview.removeButton().addEventListener('click', this.removeAnimationGroup.bind(this, group));
        preview.element.addEventListener('click', this.selectAnimationGroup.bind(this, group));
        preview.element.addEventListener('keydown', this.handleAnimationGroupKeyDown.bind(this, group));
        preview.element.addEventListener('mouseover', () => {
            const screenshots = group.screenshots();
            if (!screenshots.length) {
                return;
            }
            screenshotsContainer.classList.remove('no-screenshots');
            const createAndShowScreenshotPopover = () => {
                const screenshotPopover = new _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_10__.AnimationScreenshotPopover(screenshots);
                // This is needed for clearing out the widgets
                __classPrivateFieldGet(this, _AnimationTimeline_screenshotPopovers, "f").push(screenshotPopover);
                screenshotPopover.show(screenshotsContainer);
            };
            if (!screenshots[0].complete) {
                screenshots[0].onload = createAndShowScreenshotPopover;
            }
            else {
                createAndShowScreenshotPopover();
            }
        }, { once: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.setLabel(preview.element, i18nString(UIStrings.animationPreviewS, { PH1: __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").indexOf(group) + 1 }));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsOption(preview.element);
        if (__classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").size === 1) {
            const preview = __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f")[0]);
            if (preview) {
                preview.element.tabIndex = 0;
            }
        }
    }
    previewsCreatedForTest() {
    }
    createPreviewForCollectedGroups() {
        __classPrivateFieldGet(this, _AnimationTimeline_collectedGroups, "f").sort((a, b) => {
            // Scroll driven animations are rendered first.
            if (a.isScrollDriven() && !b.isScrollDriven()) {
                return -1;
            }
            if (!a.isScrollDriven() && b.isScrollDriven()) {
                return 1;
            }
            // Then compare the start times for the same type of animations.
            if (a.startTime() !== b.startTime()) {
                return a.startTime() - b.startTime();
            }
            // If the start times are the same, the one with the more animations take precedence.
            return a.animations.length - b.animations.length;
        });
        for (const group of __classPrivateFieldGet(this, _AnimationTimeline_collectedGroups, "f")) {
            this.createPreview(group);
        }
        __classPrivateFieldSet(this, _AnimationTimeline_collectedGroups, [], "f");
        this.previewsCreatedForTest();
    }
    addAnimationGroup(group) {
        const previewGroup = __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(group);
        if (previewGroup) {
            if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") === group) {
                this.syncScrubber();
            }
            else {
                previewGroup.replay();
            }
            return;
        }
        __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").sort((left, right) => left.startTime() - right.startTime());
        // Discard oldest groups from buffer if necessary
        const groupsToDiscard = [];
        const bufferSize = this.width() / 50;
        while (__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").length > bufferSize) {
            const toDiscard = __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").splice(__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f")[0] === __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") ? 1 : 0, 1);
            groupsToDiscard.push(toDiscard[0]);
        }
        for (const g of groupsToDiscard) {
            const discardGroup = __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(g);
            if (!discardGroup) {
                continue;
            }
            discardGroup.element.remove();
            __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").delete(g);
            g.release();
        }
        // Batch creating preview for arrivals happening closely together to ensure
        // stable UI sorting in the preview container.
        __classPrivateFieldGet(this, _AnimationTimeline_collectedGroups, "f").push(group);
        void __classPrivateFieldGet(this, _AnimationTimeline_createPreviewForCollectedGroupsThrottler, "f").schedule(() => Promise.resolve(this.createPreviewForCollectedGroups()));
    }
    handleAnimationGroupKeyDown(group, event) {
        switch (event.key) {
            case 'Backspace':
            case 'Delete':
                this.removeAnimationGroup(group, event);
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
                this.focusNextGroup(group, /* target */ event.target, /* focusPrevious */ true);
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                this.focusNextGroup(group, /* target */ event.target);
        }
    }
    focusNextGroup(group, target, focusPrevious) {
        const currentGroupIndex = __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").indexOf(group);
        const nextIndex = focusPrevious ? currentGroupIndex - 1 : currentGroupIndex + 1;
        if (nextIndex < 0 || nextIndex >= __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").length) {
            return;
        }
        const preview = __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f")[nextIndex]);
        if (preview) {
            preview.element.tabIndex = 0;
            preview.element.focus();
        }
        if (target) {
            target.tabIndex = -1;
        }
    }
    removeAnimationGroup(group, event) {
        const currentGroupIndex = __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").indexOf(group);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.ArrayUtilities.removeElement(__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f"), group);
        const previewGroup = __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(group);
        if (previewGroup) {
            previewGroup.element.remove();
        }
        __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").delete(group);
        group.release();
        event.consume(true);
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") === group) {
            this.clearTimeline();
            this.renderGrid();
        }
        const groupLength = __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").length;
        if (groupLength === 0) {
            __classPrivateFieldGet(this, _AnimationTimeline_clearButton, "f").element.focus();
            return;
        }
        const nextGroup = currentGroupIndex >= __classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").length ?
            __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f")[__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f").length - 1]) :
            __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").get(__classPrivateFieldGet(this, _AnimationTimeline_groupBuffer, "f")[currentGroupIndex]);
        if (nextGroup) {
            nextGroup.element.tabIndex = 0;
            nextGroup.element.focus();
        }
    }
    clearCurrentTimeText() {
        __classPrivateFieldGet(this, _AnimationTimeline_currentTime, "f").textContent = '';
    }
    setCurrentTimeText(time) {
        if (!__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")) {
            return;
        }
        __classPrivateFieldGet(this, _AnimationTimeline_currentTime, "f").textContent =
            __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")?.isScrollDriven() ? `${time.toFixed(0)}px` : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(time);
    }
    async selectAnimationGroup(group) {
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") === group) {
            this.togglePause(false);
            this.replay();
            return;
        }
        this.clearTimeline();
        __classPrivateFieldSet(this, _AnimationTimeline_selectedGroup, group, "f");
        __classPrivateFieldGet(this, _AnimationTimeline_previewMap, "f").forEach((previewUI, group) => {
            previewUI.element.classList.toggle('selected', __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") === group);
        });
        if (group.isScrollDriven()) {
            const animationNode = await group.scrollNode();
            if (!animationNode) {
                throw new Error('Scroll container is not found for the scroll driven animation');
            }
            const scrollRange = group.scrollOrientation() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.DOM.ScrollOrientation.Vertical ?
                await animationNode.verticalScrollRange() :
                await animationNode.horizontalScrollRange();
            const scrollOffset = group.scrollOrientation() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.DOM.ScrollOrientation.Vertical ?
                await animationNode.scrollTop() :
                await animationNode.scrollLeft();
            if (typeof scrollRange !== 'number' || typeof scrollOffset !== 'number') {
                throw new Error('Scroll range or scroll offset is not resolved for the scroll driven animation');
            }
            __classPrivateFieldSet(this, _AnimationTimeline_scrollListenerId, await animationNode.addScrollEventListener(({ scrollTop, scrollLeft }) => {
                const offset = group.scrollOrientation() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.DOM.ScrollOrientation.Vertical ? scrollTop : scrollLeft;
                this.setCurrentTimeText(offset);
                this.setTimelineScrubberPosition(offset);
            }), "f");
            this.setDuration(scrollRange);
            this.setCurrentTimeText(scrollOffset);
            this.setTimelineScrubberPosition(scrollOffset);
            __classPrivateFieldGet(this, _AnimationTimeline_playbackRateButtons, "f").forEach(button => {
                button.setAttribute('disabled', 'true');
            });
            if (__classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f")) {
                __classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f").setEnabled(false);
            }
        }
        else {
            this.setDuration(Math.max(500, group.finiteDuration() + 100));
            __classPrivateFieldGet(this, _AnimationTimeline_playbackRateButtons, "f").forEach(button => {
                button.removeAttribute('disabled');
            });
            if (__classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f")) {
                __classPrivateFieldGet(this, _AnimationTimeline_pauseButton, "f").setEnabled(true);
            }
        }
        // Wait for all animations to be added and nodes to be resolved
        // until we schedule a redraw.
        await Promise.all(group.animations().map(anim => this.addAnimation(anim)));
        this.scheduleRedraw();
        this.togglePause(false);
        this.replay();
        if (this.hasAnimationGroupActiveNodes()) {
            __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").classList.remove('hidden');
            __classPrivateFieldGet(this, _AnimationTimeline_gridHeader, "f").classList.add('scrubber-enabled');
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupSelected);
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").isScrollDriven()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScrollDrivenAnimationGroupSelected);
        }
        this.animationGroupSelectedForTest();
    }
    animationGroupSelectedForTest() {
    }
    async addAnimation(animation) {
        let nodeUI = __classPrivateFieldGet(this, _AnimationTimeline_nodesMap, "f").get(animation.source().backendNodeId());
        if (!nodeUI) {
            nodeUI = new NodeUI(animation.source());
            __classPrivateFieldGet(this, _AnimationTimeline_animationsContainer, "f").appendChild(nodeUI.element);
            __classPrivateFieldGet(this, _AnimationTimeline_nodesMap, "f").set(animation.source().backendNodeId(), nodeUI);
        }
        const nodeRow = nodeUI.createNewRow();
        const uiAnimation = new _AnimationUI_js__WEBPACK_IMPORTED_MODULE_12__.AnimationUI(animation, this, nodeRow);
        const node = await animation.source().deferredNode().resolvePromise();
        uiAnimation.setNode(node);
        if (node && nodeUI) {
            nodeUI.nodeResolved(node);
            nodeUIsByNode.set(node, nodeUI);
        }
        __classPrivateFieldGet(this, _AnimationTimeline_uiAnimations, "f").push(uiAnimation);
        __classPrivateFieldGet(this, _AnimationTimeline_animationsMap, "f").set(animation.id(), animation);
    }
    markNodeAsRemoved(node) {
        nodeUIsByNode.get(node)?.nodeRemoved();
        // Mark nodeUIs of pseudo elements of the node as removed for instance, for view transitions.
        for (const pseudoElements of node.pseudoElements().values()) {
            pseudoElements.forEach(pseudoElement => this.markNodeAsRemoved(pseudoElement));
        }
        // Mark nodeUIs of children as node removed.
        node.children()?.forEach(child => {
            this.markNodeAsRemoved(child);
        });
        // If the user already has a selected animation group and
        // some of the nodes are removed, we check whether all the nodes
        // are removed for the currently selected animation. If that's the case
        // we remove the scrubber and update control button to be disabled.
        if (!this.hasAnimationGroupActiveNodes()) {
            __classPrivateFieldGet(this, _AnimationTimeline_gridHeader, "f").classList.remove('scrubber-enabled');
            __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").classList.add('hidden');
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")?.cancel();
            __classPrivateFieldSet(this, _AnimationTimeline_scrubberPlayer, undefined, "f");
            this.clearCurrentTimeText();
            this.updateControlButton();
        }
    }
    hasAnimationGroupActiveNodes() {
        for (const nodeUI of __classPrivateFieldGet(this, _AnimationTimeline_nodesMap, "f").values()) {
            if (nodeUI.hasActiveNode()) {
                return true;
            }
        }
        return false;
    }
    renderGrid() {
        const isScrollDriven = __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")?.isScrollDriven();
        // For scroll driven animations, show divider lines for each 10% progres.
        // For time based animations, show divider lines for each 250ms progress.
        const gridSize = isScrollDriven ? this.duration() / 10 : 250;
        __classPrivateFieldGet(this, _AnimationTimeline_grid, "f").removeChildren();
        let lastDraw = undefined;
        for (let time = 0; time < this.duration(); time += gridSize) {
            const line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSVGChild(__classPrivateFieldGet(this, _AnimationTimeline_grid, "f"), 'rect', 'animation-timeline-grid-line');
            line.setAttribute('x', (time * this.pixelTimeRatio() + 10).toString());
            line.setAttribute('y', '23');
            line.setAttribute('height', '100%');
            line.setAttribute('width', '1');
        }
        for (let time = 0; time < this.duration(); time += gridSize) {
            const gridWidth = time * this.pixelTimeRatio();
            if (lastDraw === undefined || gridWidth - lastDraw > 50) {
                lastDraw = gridWidth;
                const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createSVGChild(__classPrivateFieldGet(this, _AnimationTimeline_grid, "f"), 'text', 'animation-timeline-grid-label');
                label.textContent = isScrollDriven ? `${time.toFixed(0)}px` : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(time);
                label.setAttribute('x', (gridWidth + 10).toString());
                label.setAttribute('y', '16');
            }
        }
    }
    scheduleRedraw() {
        this.renderGrid();
        __classPrivateFieldSet(this, _AnimationTimeline_renderQueue, [], "f");
        for (const ui of __classPrivateFieldGet(this, _AnimationTimeline_uiAnimations, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_renderQueue, "f").push(ui);
        }
        if (__classPrivateFieldGet(this, _AnimationTimeline_redrawing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _AnimationTimeline_redrawing, true, "f");
        __classPrivateFieldGet(this, _AnimationTimeline_animationsContainer, "f").window().requestAnimationFrame(this.render.bind(this));
    }
    render(timestamp) {
        while (__classPrivateFieldGet(this, _AnimationTimeline_renderQueue, "f").length && (!timestamp || window.performance.now() - timestamp < 50)) {
            const animationUI = __classPrivateFieldGet(this, _AnimationTimeline_renderQueue, "f").shift();
            if (animationUI) {
                animationUI.redraw();
            }
        }
        if (__classPrivateFieldGet(this, _AnimationTimeline_renderQueue, "f").length) {
            __classPrivateFieldGet(this, _AnimationTimeline_animationsContainer, "f").window().requestAnimationFrame(this.render.bind(this));
        }
        else {
            __classPrivateFieldSet(this, _AnimationTimeline_redrawing, undefined, "f");
        }
    }
    onResize() {
        __classPrivateFieldSet(this, _AnimationTimeline_cachedTimelineWidth, Math.max(0, __classPrivateFieldGet(this, _AnimationTimeline_animationsContainer, "f").offsetWidth - __classPrivateFieldGet(this, _AnimationTimeline_timelineControlsWidth, "f")) || 0, "f");
        this.scheduleRedraw();
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            this.syncScrubber();
        }
        __classPrivateFieldSet(this, _AnimationTimeline_gridOffsetLeft, undefined, "f");
    }
    width() {
        return __classPrivateFieldGet(this, _AnimationTimeline_cachedTimelineWidth, "f") || 0;
    }
    syncScrubber() {
        if (!__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") || !this.hasAnimationGroupActiveNodes()) {
            return;
        }
        void __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").currentTimePromise()
            .then(this.animateTime.bind(this))
            .then(this.updateControlButton.bind(this));
    }
    animateTime(currentTime) {
        // Scroll driven animations are bound to the scroll position of the scroll container
        // thus we don't animate the scrubber based on time for scroll driven animations.
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")?.isScrollDriven()) {
            return;
        }
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").cancel();
        }
        __classPrivateFieldSet(this, _AnimationTimeline_scrubberPlayer, __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(' + this.width() + 'px)' }], { duration: this.duration(), fill: 'forwards' }), "f");
        __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").playbackRate = this.effectivePlaybackRate();
        __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").onfinish = this.updateControlButton.bind(this);
        __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").currentTime = currentTime;
        this.element.window().requestAnimationFrame(this.updateScrubber.bind(this));
    }
    pixelTimeRatio() {
        return this.width() / this.duration() || 0;
    }
    updateScrubber(_timestamp) {
        if (!__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            return;
        }
        this.setCurrentTimeText(__classPrivateFieldGet(this, _AnimationTimeline_instances, "m", _AnimationTimeline_scrubberCurrentTime).call(this));
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").playState.toString() === 'pending' || __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").playState === 'running') {
            this.element.window().requestAnimationFrame(this.updateScrubber.bind(this));
        }
        else if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").playState === 'finished') {
            this.clearCurrentTimeText();
        }
    }
    scrubberDragStart(event) {
        if (!__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") || !this.hasAnimationGroupActiveNodes()) {
            return false;
        }
        // Seek to current mouse position.
        if (!__classPrivateFieldGet(this, _AnimationTimeline_gridOffsetLeft, "f")) {
            __classPrivateFieldSet(this, _AnimationTimeline_gridOffsetLeft, __classPrivateFieldGet(this, _AnimationTimeline_grid, "f").getBoundingClientRect().left + 10, "f");
        }
        const { x } = event;
        const seekTime = Math.max(0, x - __classPrivateFieldGet(this, _AnimationTimeline_gridOffsetLeft, "f")) / this.pixelTimeRatio();
        // Interface with scrubber drag.
        __classPrivateFieldSet(this, _AnimationTimeline_originalScrubberTime, seekTime, "f");
        __classPrivateFieldSet(this, _AnimationTimeline_originalMousePosition, x, "f");
        this.setCurrentTimeText(seekTime);
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").isScrollDriven()) {
            this.setTimelineScrubberPosition(seekTime);
            void this.updateScrollOffsetOnPage(seekTime);
        }
        else {
            const currentTime = __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")?.currentTime;
            __classPrivateFieldSet(this, _AnimationTimeline_animationGroupPausedBeforeScrub, __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").paused() || typeof currentTime === 'number' && currentTime >= this.duration(), "f");
            __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").seekTo(seekTime);
            this.togglePause(true);
            this.animateTime(seekTime);
        }
        return true;
    }
    async updateScrollOffsetOnPage(offset) {
        const node = await __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")?.scrollNode();
        if (!node) {
            return;
        }
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")?.scrollOrientation() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.DOM.ScrollOrientation.Vertical) {
            return node.setScrollTop(offset);
        }
        return node.setScrollLeft(offset);
    }
    setTimelineScrubberPosition(time) {
        __classPrivateFieldGet(this, _AnimationTimeline_timelineScrubber, "f").style.transform = `translateX(${time * this.pixelTimeRatio()}px)`;
    }
    scrubberDragMove(event) {
        const { x } = event;
        const delta = x - (__classPrivateFieldGet(this, _AnimationTimeline_originalMousePosition, "f") || 0);
        const currentTime = Math.max(0, Math.min((__classPrivateFieldGet(this, _AnimationTimeline_originalScrubberTime, "f") || 0) + delta / this.pixelTimeRatio(), this.duration()));
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").currentTime = currentTime;
        }
        else {
            this.setTimelineScrubberPosition(currentTime);
            void this.updateScrollOffsetOnPage(currentTime);
        }
        this.setCurrentTimeText(currentTime);
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f") && !__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").isScrollDriven()) {
            __classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f").seekTo(currentTime);
        }
    }
    scrubberDragEnd(_event) {
        if (__classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")) {
            const currentTime = Math.max(0, __classPrivateFieldGet(this, _AnimationTimeline_instances, "m", _AnimationTimeline_scrubberCurrentTime).call(this));
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").play();
            __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").currentTime = currentTime;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupScrubbed);
        if (__classPrivateFieldGet(this, _AnimationTimeline_selectedGroup, "f")?.isScrollDriven()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScrollDrivenAnimationGroupScrubbed);
        }
        __classPrivateFieldGet(this, _AnimationTimeline_currentTime, "f").window().requestAnimationFrame(this.updateScrubber.bind(this));
        if (!__classPrivateFieldGet(this, _AnimationTimeline_animationGroupPausedBeforeScrub, "f")) {
            this.togglePause(false);
        }
    }
}
_AnimationTimeline_gridWrapper = new WeakMap(), _AnimationTimeline_grid = new WeakMap(), _AnimationTimeline_playbackRate = new WeakMap(), _AnimationTimeline_allPaused = new WeakMap(), _AnimationTimeline_screenshotPopovers = new WeakMap(), _AnimationTimeline_animationsContainer = new WeakMap(), _AnimationTimeline_playbackRateButtons = new WeakMap(), _AnimationTimeline_previewContainer = new WeakMap(), _AnimationTimeline_timelineScrubber = new WeakMap(), _AnimationTimeline_currentTime = new WeakMap(), _AnimationTimeline_clearButton = new WeakMap(), _AnimationTimeline_selectedGroup = new WeakMap(), _AnimationTimeline_renderQueue = new WeakMap(), _AnimationTimeline_defaultDuration = new WeakMap(), _AnimationTimeline_durationInternal = new WeakMap(), _AnimationTimeline_timelineControlsWidth = new WeakMap(), _AnimationTimeline_nodesMap = new WeakMap(), _AnimationTimeline_uiAnimations = new WeakMap(), _AnimationTimeline_groupBuffer = new WeakMap(), _AnimationTimeline_previewMap = new WeakMap(), _AnimationTimeline_animationsMap = new WeakMap(), _AnimationTimeline_timelineScrubberLine = new WeakMap(), _AnimationTimeline_pauseButton = new WeakMap(), _AnimationTimeline_controlButton = new WeakMap(), _AnimationTimeline_controlState = new WeakMap(), _AnimationTimeline_redrawing = new WeakMap(), _AnimationTimeline_cachedTimelineWidth = new WeakMap(), _AnimationTimeline_scrubberPlayer = new WeakMap(), _AnimationTimeline_gridOffsetLeft = new WeakMap(), _AnimationTimeline_originalScrubberTime = new WeakMap(), _AnimationTimeline_animationGroupPausedBeforeScrub = new WeakMap(), _AnimationTimeline_originalMousePosition = new WeakMap(), _AnimationTimeline_timelineControlsResizer = new WeakMap(), _AnimationTimeline_gridHeader = new WeakMap(), _AnimationTimeline_scrollListenerId = new WeakMap(), _AnimationTimeline_collectedGroups = new WeakMap(), _AnimationTimeline_createPreviewForCollectedGroupsThrottler = new WeakMap(), _AnimationTimeline_animationGroupUpdatedThrottler = new WeakMap(), _AnimationTimeline_initialized = new WeakMap(), _AnimationTimeline_instances = new WeakSet(), _AnimationTimeline_setupTimelineControlsResizer = function _AnimationTimeline_setupTimelineControlsResizer() {
    let resizeOriginX = undefined;
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.installDragHandle(__classPrivateFieldGet(this, _AnimationTimeline_timelineControlsResizer, "f"), (ev) => {
        resizeOriginX = ev.clientX;
        return true;
    }, (ev) => {
        if (resizeOriginX === undefined) {
            return;
        }
        const newWidth = __classPrivateFieldGet(this, _AnimationTimeline_timelineControlsWidth, "f") + ev.clientX - resizeOriginX;
        __classPrivateFieldSet(this, _AnimationTimeline_timelineControlsWidth, Math.min(Math.max(newWidth, MIN_TIMELINE_CONTROLS_WIDTH), MAX_TIMELINE_CONTROLS_WIDTH), "f");
        resizeOriginX = ev.clientX;
        this.element.style.setProperty('--timeline-controls-width', __classPrivateFieldGet(this, _AnimationTimeline_timelineControlsWidth, "f") + 'px');
        this.onResize();
    }, () => {
        resizeOriginX = undefined;
    }, 'ew-resize');
}, _AnimationTimeline_scrubberCurrentTime = function _AnimationTimeline_scrubberCurrentTime() {
    return typeof __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f")?.currentTime === 'number' ? __classPrivateFieldGet(this, _AnimationTimeline_scrubberPlayer, "f").currentTime : 0;
};
const GlobalPlaybackRates = [1, 0.25, 0.1];
var ControlState;
(function (ControlState) {
    ControlState["Play"] = "play-outline";
    ControlState["Replay"] = "replay-outline";
    ControlState["Pause"] = "pause-outline";
})(ControlState || (ControlState = {}));
class NodeUI {
    constructor(_animationEffect) {
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _NodeUI_description.set(this, void 0);
        _NodeUI_timelineElement.set(this, void 0);
        _NodeUI_overlayElement.set(this, void 0);
        _NodeUI_node.set(this, void 0);
        this.element = document.createElement('div');
        this.element.classList.add('animation-node-row');
        __classPrivateFieldSet(this, _NodeUI_description, this.element.createChild('div', 'animation-node-description'), "f");
        __classPrivateFieldGet(this, _NodeUI_description, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.tableCell('description').track({ resize: true })}`);
        __classPrivateFieldSet(this, _NodeUI_timelineElement, this.element.createChild('div', 'animation-node-timeline'), "f");
        __classPrivateFieldGet(this, _NodeUI_timelineElement, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.tableCell('timeline').track({ resize: true })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ARIAUtils.markAsApplication(__classPrivateFieldGet(this, _NodeUI_timelineElement, "f"));
    }
    nodeResolved(node) {
        if (!node) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(__classPrivateFieldGet(this, _NodeUI_description, "f"), '<node>');
            return;
        }
        __classPrivateFieldSet(this, _NodeUI_node, node, "f");
        this.nodeChanged();
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node).then(link => {
            link.addEventListener('click', () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimatedNodeDescriptionClicked);
            });
            __classPrivateFieldGet(this, _NodeUI_description, "f").appendChild(link);
        });
        if (!node.ownerDocument) {
            this.nodeRemoved();
        }
    }
    createNewRow() {
        return __classPrivateFieldGet(this, _NodeUI_timelineElement, "f").createChild('div', 'animation-timeline-row');
    }
    nodeRemoved() {
        this.element.classList.add('animation-node-removed');
        if (!__classPrivateFieldGet(this, _NodeUI_overlayElement, "f")) {
            __classPrivateFieldSet(this, _NodeUI_overlayElement, document.createElement('div'), "f");
            __classPrivateFieldGet(this, _NodeUI_overlayElement, "f").classList.add('animation-node-removed-overlay');
            __classPrivateFieldGet(this, _NodeUI_description, "f").appendChild(__classPrivateFieldGet(this, _NodeUI_overlayElement, "f"));
        }
        __classPrivateFieldSet(this, _NodeUI_node, null, "f");
    }
    hasActiveNode() {
        return Boolean(__classPrivateFieldGet(this, _NodeUI_node, "f"));
    }
    nodeChanged() {
        let animationNodeSelected = false;
        if (__classPrivateFieldGet(this, _NodeUI_node, "f")) {
            animationNodeSelected = (__classPrivateFieldGet(this, _NodeUI_node, "f") === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode));
        }
        this.element.classList.toggle('animation-node-selected', animationNodeSelected);
    }
}
_NodeUI_description = new WeakMap(), _NodeUI_timelineElement = new WeakMap(), _NodeUI_overlayElement = new WeakMap(), _NodeUI_node = new WeakMap();
class StepTimingFunction {
    constructor(steps, stepAtPosition) {
        Object.defineProperty(this, "steps", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "stepAtPosition", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.steps = steps;
        this.stepAtPosition = stepAtPosition;
    }
    static parse(text) {
        let match = text.match(/^steps\((\d+), (start|middle)\)$/);
        if (match) {
            return new StepTimingFunction(parseInt(match[1], 10), match[2]);
        }
        match = text.match(/^steps\((\d+)\)$/);
        if (match) {
            return new StepTimingFunction(parseInt(match[1], 10), 'end');
        }
        return null;
    }
}


/***/ }),

/***/ "./src/panels/animation/AnimationUI.ts":
/*!*********************************************!*\
  !*** ./src/panels/animation/AnimationUI.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationUI: () => (/* binding */ AnimationUI),
/* harmony export */   Colors: () => (/* binding */ Colors),
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   Options: () => (/* binding */ Options)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./src/ui/legacy/components/inline_editor/inline_editor.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./src/panels/animation/AnimationTimeline.ts");
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
var _AnimationUI_animationInternal, _AnimationUI_timeline, _AnimationUI_keyframes, _AnimationUI_nameElement, _AnimationUI_svg, _AnimationUI_activeIntervalGroup, _AnimationUI_cachedElements, _AnimationUI_movementInMs, _AnimationUI_keyboardMovementRateMs, _AnimationUI_color, _AnimationUI_node, _AnimationUI_delayLine, _AnimationUI_endDelayLine, _AnimationUI_tailGroup, _AnimationUI_mouseEventType, _AnimationUI_keyframeMoved, _AnimationUI_downMouseX;








const UIStrings = {
    /**
     *@description Title of the first and last points of an animation
     */
    animationEndpointSlider: 'Animation Endpoint slider',
    /**
     *@description Title of an Animation Keyframe point
     */
    animationKeyframeSlider: 'Animation Keyframe slider',
    /**
     *@description Title of an animation keyframe group
     *@example {anilogo} PH1
     */
    sSlider: '{PH1} slider',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/animation/AnimationUI.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class AnimationUI {
    constructor(animation, timeline, parentElement) {
        _AnimationUI_animationInternal.set(this, void 0);
        _AnimationUI_timeline.set(this, void 0);
        _AnimationUI_keyframes.set(this, void 0);
        _AnimationUI_nameElement.set(this, void 0);
        _AnimationUI_svg.set(this, void 0);
        _AnimationUI_activeIntervalGroup.set(this, void 0);
        _AnimationUI_cachedElements.set(this, void 0);
        _AnimationUI_movementInMs.set(this, void 0);
        _AnimationUI_keyboardMovementRateMs.set(this, void 0);
        _AnimationUI_color.set(this, void 0);
        _AnimationUI_node.set(this, void 0);
        _AnimationUI_delayLine.set(this, void 0);
        _AnimationUI_endDelayLine.set(this, void 0);
        _AnimationUI_tailGroup.set(this, void 0);
        _AnimationUI_mouseEventType.set(this, void 0);
        _AnimationUI_keyframeMoved.set(this, void 0);
        _AnimationUI_downMouseX.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationUI_animationInternal, animation, "f");
        __classPrivateFieldSet(this, _AnimationUI_timeline, timeline, "f");
        const keyframesRule = __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").source().keyframesRule();
        if (keyframesRule) {
            __classPrivateFieldSet(this, _AnimationUI_keyframes, keyframesRule.keyframes(), "f");
            if (animation.viewOrScrollTimeline() && animation.playbackRate() < 0) {
                __classPrivateFieldGet(this, _AnimationUI_keyframes, "f").reverse();
            }
        }
        __classPrivateFieldSet(this, _AnimationUI_nameElement, parentElement.createChild('div', 'animation-name'), "f");
        __classPrivateFieldGet(this, _AnimationUI_nameElement, "f").textContent = __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").name();
        __classPrivateFieldSet(this, _AnimationUI_svg, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'svg', 'animation-ui'), "f");
        __classPrivateFieldGet(this, _AnimationUI_svg, "f").setAttribute('height', Options.AnimationSVGHeight.toString());
        __classPrivateFieldGet(this, _AnimationUI_svg, "f").style.marginLeft = '-' + Options.AnimationMargin + 'px';
        __classPrivateFieldGet(this, _AnimationUI_svg, "f").addEventListener('contextmenu', this.onContextMenu.bind(this));
        __classPrivateFieldSet(this, _AnimationUI_activeIntervalGroup, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(__classPrivateFieldGet(this, _AnimationUI_svg, "f"), 'g'), "f");
        __classPrivateFieldGet(this, _AnimationUI_activeIntervalGroup, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.animationClip().track({ drag: true })}`);
        if (!__classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").viewOrScrollTimeline()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(__classPrivateFieldGet(this, _AnimationUI_activeIntervalGroup, "f"), this.mouseDown.bind(this, Events.AnimationDrag, null), this.mouseMove.bind(this), this.mouseUp.bind(this), '-webkit-grabbing', '-webkit-grab');
            AnimationUI.installDragHandleKeyboard(__classPrivateFieldGet(this, _AnimationUI_activeIntervalGroup, "f"), this.keydownMove.bind(this, Events.AnimationDrag, null));
        }
        __classPrivateFieldSet(this, _AnimationUI_cachedElements, [], "f");
        __classPrivateFieldSet(this, _AnimationUI_movementInMs, 0, "f");
        __classPrivateFieldSet(this, _AnimationUI_keyboardMovementRateMs, 50, "f");
        __classPrivateFieldSet(this, _AnimationUI_color, AnimationUI.colorForAnimation(__classPrivateFieldGet(this, _AnimationUI_animationInternal, "f")), "f");
    }
    static colorForAnimation(animation) {
        const names = Array.from(Colors.keys());
        const hashCode = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.hashCode(animation.name() || animation.id());
        const cappedHashCode = hashCode % names.length;
        const colorName = names[cappedHashCode];
        const color = Colors.get(colorName);
        if (!color) {
            throw new Error('Unable to locate color');
        }
        return color.asString(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.Format.RGB) || '';
    }
    static installDragHandleKeyboard(element, elementDrag) {
        element.addEventListener('keydown', elementDrag, false);
    }
    animation() {
        return __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f");
    }
    get nameElement() {
        return __classPrivateFieldGet(this, _AnimationUI_nameElement, "f");
    }
    get svg() {
        return __classPrivateFieldGet(this, _AnimationUI_svg, "f");
    }
    setNode(node) {
        __classPrivateFieldSet(this, _AnimationUI_node, node, "f");
    }
    createLine(parentElement, className) {
        const line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'line', className);
        line.setAttribute('x1', Options.AnimationMargin.toString());
        line.setAttribute('y1', Options.AnimationHeight.toString());
        line.setAttribute('y2', Options.AnimationHeight.toString());
        line.style.stroke = __classPrivateFieldGet(this, _AnimationUI_color, "f");
        return line;
    }
    drawAnimationLine(iteration, parentElement) {
        const cache = __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration];
        if (!cache.animationLine) {
            cache.animationLine = this.createLine(parentElement, 'animation-line');
        }
        if (!cache.animationLine) {
            return;
        }
        cache.animationLine.setAttribute('x2', (this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() + Options.AnimationMargin).toFixed(2));
    }
    drawDelayLine(parentElement) {
        if (!__classPrivateFieldGet(this, _AnimationUI_delayLine, "f") || !__classPrivateFieldGet(this, _AnimationUI_endDelayLine, "f")) {
            __classPrivateFieldSet(this, _AnimationUI_delayLine, this.createLine(parentElement, 'animation-delay-line'), "f");
            __classPrivateFieldSet(this, _AnimationUI_endDelayLine, this.createLine(parentElement, 'animation-delay-line'), "f");
        }
        const fill = __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").source().fill();
        __classPrivateFieldGet(this, _AnimationUI_delayLine, "f").classList.toggle('animation-fill', fill === 'backwards' || fill === 'both');
        const margin = Options.AnimationMargin;
        __classPrivateFieldGet(this, _AnimationUI_delayLine, "f").setAttribute('x1', margin.toString());
        __classPrivateFieldGet(this, _AnimationUI_delayLine, "f").setAttribute('x2', (this.delayOrStartTime() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() + margin).toFixed(2));
        const forwardsFill = fill === 'forwards' || fill === 'both';
        __classPrivateFieldGet(this, _AnimationUI_endDelayLine, "f").classList.toggle('animation-fill', forwardsFill);
        const leftMargin = Math.min(__classPrivateFieldGet(this, _AnimationUI_timeline, "f").width(), (this.delayOrStartTime() + this.duration() * __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").source().iterations()) *
            __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio());
        __classPrivateFieldGet(this, _AnimationUI_endDelayLine, "f").style.transform = 'translateX(' + leftMargin.toFixed(2) + 'px)';
        __classPrivateFieldGet(this, _AnimationUI_endDelayLine, "f").setAttribute('x1', margin.toString());
        __classPrivateFieldGet(this, _AnimationUI_endDelayLine, "f").setAttribute('x2', forwardsFill ?
            (__classPrivateFieldGet(this, _AnimationUI_timeline, "f").width() - leftMargin + margin).toFixed(2) :
            (__classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").source().endDelay() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() + margin).toFixed(2));
    }
    drawPoint(iteration, parentElement, x, keyframeIndex, attachEvents) {
        if (__classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration].keyframePoints[keyframeIndex]) {
            __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration].keyframePoints[keyframeIndex].setAttribute('cx', x.toFixed(2));
            return;
        }
        const circle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'circle', keyframeIndex <= 0 ? 'animation-endpoint' : 'animation-keyframe-point');
        circle.setAttribute('cx', x.toFixed(2));
        circle.setAttribute('cy', Options.AnimationHeight.toString());
        circle.style.stroke = __classPrivateFieldGet(this, _AnimationUI_color, "f");
        circle.setAttribute('r', (Options.AnimationMargin / 2).toString());
        circle.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.controlPoint('animations.keyframe').track({ drag: true })}`);
        circle.tabIndex = 0;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(circle, keyframeIndex <= 0 ? i18nString(UIStrings.animationEndpointSlider) :
            i18nString(UIStrings.animationKeyframeSlider));
        if (keyframeIndex <= 0) {
            circle.style.fill = __classPrivateFieldGet(this, _AnimationUI_color, "f");
        }
        __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration].keyframePoints[keyframeIndex] = circle;
        if (!attachEvents) {
            return;
        }
        let eventType;
        if (keyframeIndex === 0) {
            eventType = Events.StartEndpointMove;
        }
        else if (keyframeIndex === -1) {
            eventType = Events.FinishEndpointMove;
        }
        else {
            eventType = Events.KeyframeMove;
        }
        if (!this.animation().viewOrScrollTimeline()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(circle, this.mouseDown.bind(this, eventType, keyframeIndex), this.mouseMove.bind(this), this.mouseUp.bind(this), 'ew-resize');
            AnimationUI.installDragHandleKeyboard(circle, this.keydownMove.bind(this, eventType, keyframeIndex));
        }
    }
    renderKeyframe(iteration, keyframeIndex, parentElement, leftDistance, width, easing) {
        function createStepLine(parentElement, x, strokeColor) {
            const line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'line');
            line.setAttribute('x1', x.toString());
            line.setAttribute('x2', x.toString());
            line.setAttribute('y1', Options.AnimationMargin.toString());
            line.setAttribute('y2', Options.AnimationHeight.toString());
            line.style.stroke = strokeColor;
        }
        const bezier = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.CubicBezier.parse(easing);
        const cache = __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration].keyframeRender;
        if (!cache[keyframeIndex]) {
            const svg = bezier ? _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'path', 'animation-keyframe') :
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'g', 'animation-keyframe-step');
            cache[keyframeIndex] = svg;
        }
        const group = cache[keyframeIndex];
        group.tabIndex = 0;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(group, i18nString(UIStrings.sSlider, { PH1: __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").name() }));
        group.style.transform = 'translateX(' + leftDistance.toFixed(2) + 'px)';
        if (easing === 'linear') {
            group.style.fill = __classPrivateFieldGet(this, _AnimationUI_color, "f");
            const height = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.BezierUI.Height;
            group.setAttribute('d', ['M', 0, height, 'L', 0, 5, 'L', width.toFixed(2), 5, 'L', width.toFixed(2), height, 'Z'].join(' '));
        }
        else if (bezier) {
            group.style.fill = __classPrivateFieldGet(this, _AnimationUI_color, "f");
            _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.BezierUI.BezierUI.drawVelocityChart(bezier, group, width);
        }
        else {
            const stepFunction = _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_7__.StepTimingFunction.parse(easing);
            group.removeChildren();
            const offsetMap = { 'start': 0, 'middle': 0.5, 'end': 1 };
            if (stepFunction) {
                const offsetWeight = offsetMap[stepFunction.stepAtPosition];
                for (let i = 0; i < stepFunction.steps; i++) {
                    createStepLine(group, (i + offsetWeight) * width / stepFunction.steps, __classPrivateFieldGet(this, _AnimationUI_color, "f"));
                }
            }
        }
    }
    redraw() {
        const maxWidth = __classPrivateFieldGet(this, _AnimationUI_timeline, "f").width() - Options.AnimationMargin;
        __classPrivateFieldGet(this, _AnimationUI_svg, "f").setAttribute('width', (maxWidth + 2 * Options.AnimationMargin).toFixed(2));
        __classPrivateFieldGet(this, _AnimationUI_activeIntervalGroup, "f").style.transform =
            'translateX(' + (this.delayOrStartTime() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio()).toFixed(2) + 'px)';
        __classPrivateFieldGet(this, _AnimationUI_nameElement, "f").style.transform = 'translateX(' +
            (Math.max(this.delayOrStartTime(), 0) * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() + Options.AnimationMargin).toFixed(2) +
            'px)';
        __classPrivateFieldGet(this, _AnimationUI_nameElement, "f").style.width = (this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio()).toFixed(2) + 'px';
        this.drawDelayLine(__classPrivateFieldGet(this, _AnimationUI_svg, "f"));
        if (__classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").type() === 'CSSTransition') {
            this.renderTransition();
            return;
        }
        this.renderIteration(__classPrivateFieldGet(this, _AnimationUI_activeIntervalGroup, "f"), 0);
        if (!__classPrivateFieldGet(this, _AnimationUI_tailGroup, "f")) {
            __classPrivateFieldSet(this, _AnimationUI_tailGroup, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(__classPrivateFieldGet(this, _AnimationUI_activeIntervalGroup, "f"), 'g', 'animation-tail-iterations'), "f");
        }
        const iterationWidth = this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio();
        let iteration;
        // Some iterations are getting rendered in an invisible area if the delay is negative.
        const invisibleAreaWidth = this.delayOrStartTime() < 0 ? -this.delayOrStartTime() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() : 0;
        for (iteration = 1; iteration < __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").source().iterations() &&
            iterationWidth * (iteration - 1) < invisibleAreaWidth + __classPrivateFieldGet(this, _AnimationUI_timeline, "f").width() &&
            (iterationWidth > 0 || __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").source().iterations() !== Infinity); iteration++) {
            this.renderIteration(__classPrivateFieldGet(this, _AnimationUI_tailGroup, "f"), iteration);
        }
        while (iteration < __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f").length) {
            const poppedElement = __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f").pop();
            if (poppedElement && poppedElement.group) {
                poppedElement.group.remove();
            }
        }
    }
    renderTransition() {
        const activeIntervalGroup = __classPrivateFieldGet(this, _AnimationUI_activeIntervalGroup, "f");
        if (!__classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[0]) {
            __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[0] = { animationLine: null, keyframePoints: {}, keyframeRender: {}, group: null };
        }
        this.drawAnimationLine(0, activeIntervalGroup);
        this.renderKeyframe(0, 0, activeIntervalGroup, Options.AnimationMargin, this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio(), __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").source().easing());
        this.drawPoint(0, activeIntervalGroup, Options.AnimationMargin, 0, true);
        this.drawPoint(0, activeIntervalGroup, this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() + Options.AnimationMargin, -1, true);
    }
    renderIteration(parentElement, iteration) {
        if (!__classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration]) {
            __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration] = {
                animationLine: null,
                keyframePoints: {},
                keyframeRender: {},
                group: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'g'),
            };
        }
        const group = __classPrivateFieldGet(this, _AnimationUI_cachedElements, "f")[iteration].group;
        if (!group) {
            return;
        }
        group.style.transform =
            'translateX(' + (iteration * this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio()).toFixed(2) + 'px)';
        this.drawAnimationLine(iteration, group);
        if (__classPrivateFieldGet(this, _AnimationUI_keyframes, "f") && __classPrivateFieldGet(this, _AnimationUI_keyframes, "f").length > 1) {
            for (let i = 0; i < __classPrivateFieldGet(this, _AnimationUI_keyframes, "f").length - 1; i++) {
                const leftDistance = this.offset(i) * this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() + Options.AnimationMargin;
                const width = this.duration() * (this.offset(i + 1) - this.offset(i)) * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio();
                this.renderKeyframe(iteration, i, group, leftDistance, width, __classPrivateFieldGet(this, _AnimationUI_keyframes, "f")[i].easing());
                if (i || (!i && iteration === 0)) {
                    this.drawPoint(iteration, group, leftDistance, i, iteration === 0);
                }
            }
        }
        this.drawPoint(iteration, group, this.duration() * __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio() + Options.AnimationMargin, -1, iteration === 0);
    }
    delayOrStartTime() {
        let delay = __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").delayOrStartTime();
        if (__classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.AnimationDrag || __classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.StartEndpointMove) {
            delay += __classPrivateFieldGet(this, _AnimationUI_movementInMs, "f");
        }
        return delay;
    }
    duration() {
        let duration = __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").iterationDuration();
        if (__classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.FinishEndpointMove) {
            duration += __classPrivateFieldGet(this, _AnimationUI_movementInMs, "f");
        }
        else if (__classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.StartEndpointMove) {
            duration -= __classPrivateFieldGet(this, _AnimationUI_movementInMs, "f");
        }
        return Math.max(0, duration);
    }
    offset(i) {
        if (!__classPrivateFieldGet(this, _AnimationUI_keyframes, "f")) {
            throw new Error('Unable to calculate offset; keyframes do not exist');
        }
        let offset = __classPrivateFieldGet(this, _AnimationUI_keyframes, "f")[i].offsetAsNumber();
        if (__classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.KeyframeMove && i === __classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f")) {
            console.assert(i > 0 && i < __classPrivateFieldGet(this, _AnimationUI_keyframes, "f").length - 1, 'First and last keyframe cannot be moved');
            offset += __classPrivateFieldGet(this, _AnimationUI_movementInMs, "f") / __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").iterationDuration();
            offset = Math.max(offset, __classPrivateFieldGet(this, _AnimationUI_keyframes, "f")[i - 1].offsetAsNumber());
            offset = Math.min(offset, __classPrivateFieldGet(this, _AnimationUI_keyframes, "f")[i + 1].offsetAsNumber());
        }
        return offset;
    }
    mouseDown(mouseEventType, keyframeIndex, event) {
        const mouseEvent = event;
        if (mouseEvent.buttons === 2) {
            return false;
        }
        if (__classPrivateFieldGet(this, _AnimationUI_svg, "f").enclosingNodeOrSelfWithClass('animation-node-removed')) {
            return false;
        }
        __classPrivateFieldSet(this, _AnimationUI_mouseEventType, mouseEventType, "f");
        __classPrivateFieldSet(this, _AnimationUI_keyframeMoved, keyframeIndex, "f");
        __classPrivateFieldSet(this, _AnimationUI_downMouseX, mouseEvent.clientX, "f");
        event.consume(true);
        const viewManagerInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance();
        const animationLocation = viewManagerInstance.locationNameForViewId('animations');
        const elementsLocation = viewManagerInstance.locationNameForViewId('elements');
        // Prevents revealing the node if the animations and elements view share the same view location.
        // If they share the same view location, the animations view will change to the elements view when editing an animation
        if (__classPrivateFieldGet(this, _AnimationUI_node, "f") && animationLocation !== elementsLocation) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(__classPrivateFieldGet(this, _AnimationUI_node, "f"));
        }
        return true;
    }
    mouseMove(event) {
        const mouseEvent = event;
        this.setMovementAndRedraw((mouseEvent.clientX - (__classPrivateFieldGet(this, _AnimationUI_downMouseX, "f") || 0)) / __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio());
    }
    setMovementAndRedraw(movement) {
        __classPrivateFieldSet(this, _AnimationUI_movementInMs, movement, "f");
        if (this.delayOrStartTime() + this.duration() > __classPrivateFieldGet(this, _AnimationUI_timeline, "f").duration() * 0.8) {
            __classPrivateFieldGet(this, _AnimationUI_timeline, "f").setDuration(__classPrivateFieldGet(this, _AnimationUI_timeline, "f").duration() * 1.2);
        }
        this.redraw();
    }
    mouseUp(event) {
        const mouseEvent = event;
        __classPrivateFieldSet(this, _AnimationUI_movementInMs, (mouseEvent.clientX - (__classPrivateFieldGet(this, _AnimationUI_downMouseX, "f") || 0)) / __classPrivateFieldGet(this, _AnimationUI_timeline, "f").pixelTimeRatio(), "f");
        // Commit changes
        if (__classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.KeyframeMove) {
            if (__classPrivateFieldGet(this, _AnimationUI_keyframes, "f") && __classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f") !== null && typeof __classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f") !== 'undefined') {
                __classPrivateFieldGet(this, _AnimationUI_keyframes, "f")[__classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f")].setOffset(this.offset(__classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f")));
            }
        }
        else {
            __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").setTiming(this.duration(), this.delayOrStartTime());
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.animationPointDragged(__classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.AnimationDrag ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationPointDragType.AnimationDrag :
            __classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.KeyframeMove ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationPointDragType.KeyframeMove :
                __classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.StartEndpointMove ?
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationPointDragType.StartEndpointMove :
                    __classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.FinishEndpointMove ?
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationPointDragType.FinishEndpointMove :
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.AnimationPointDragType.Other);
        __classPrivateFieldSet(this, _AnimationUI_movementInMs, 0, "f");
        this.redraw();
        __classPrivateFieldSet(this, _AnimationUI_mouseEventType, undefined, "f");
        __classPrivateFieldSet(this, _AnimationUI_downMouseX, undefined, "f");
        __classPrivateFieldSet(this, _AnimationUI_keyframeMoved, undefined, "f");
    }
    keydownMove(mouseEventType, keyframeIndex, event) {
        const keyboardEvent = event;
        __classPrivateFieldSet(this, _AnimationUI_mouseEventType, mouseEventType, "f");
        __classPrivateFieldSet(this, _AnimationUI_keyframeMoved, keyframeIndex, "f");
        switch (keyboardEvent.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                __classPrivateFieldSet(this, _AnimationUI_movementInMs, -__classPrivateFieldGet(this, _AnimationUI_keyboardMovementRateMs, "f"), "f");
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                __classPrivateFieldSet(this, _AnimationUI_movementInMs, __classPrivateFieldGet(this, _AnimationUI_keyboardMovementRateMs, "f"), "f");
                break;
            default:
                return;
        }
        if (__classPrivateFieldGet(this, _AnimationUI_mouseEventType, "f") === Events.KeyframeMove) {
            if (__classPrivateFieldGet(this, _AnimationUI_keyframes, "f") && __classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f") !== null) {
                __classPrivateFieldGet(this, _AnimationUI_keyframes, "f")[__classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f")].setOffset(this.offset(__classPrivateFieldGet(this, _AnimationUI_keyframeMoved, "f")));
            }
        }
        else {
            __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").setTiming(this.duration(), this.delayOrStartTime());
        }
        this.setMovementAndRedraw(0);
        __classPrivateFieldSet(this, _AnimationUI_mouseEventType, undefined, "f");
        __classPrivateFieldSet(this, _AnimationUI_keyframeMoved, undefined, "f");
        event.consume(true);
    }
    onContextMenu(event) {
        function showContextMenu(remoteObject) {
            if (!remoteObject) {
                return;
            }
            const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
            contextMenu.appendApplicableItems(remoteObject);
            void contextMenu.show();
        }
        void __classPrivateFieldGet(this, _AnimationUI_animationInternal, "f").remoteObjectPromise().then(showContextMenu);
        event.consume(true);
    }
}
_AnimationUI_animationInternal = new WeakMap(), _AnimationUI_timeline = new WeakMap(), _AnimationUI_keyframes = new WeakMap(), _AnimationUI_nameElement = new WeakMap(), _AnimationUI_svg = new WeakMap(), _AnimationUI_activeIntervalGroup = new WeakMap(), _AnimationUI_cachedElements = new WeakMap(), _AnimationUI_movementInMs = new WeakMap(), _AnimationUI_keyboardMovementRateMs = new WeakMap(), _AnimationUI_color = new WeakMap(), _AnimationUI_node = new WeakMap(), _AnimationUI_delayLine = new WeakMap(), _AnimationUI_endDelayLine = new WeakMap(), _AnimationUI_tailGroup = new WeakMap(), _AnimationUI_mouseEventType = new WeakMap(), _AnimationUI_keyframeMoved = new WeakMap(), _AnimationUI_downMouseX = new WeakMap();
var Events;
(function (Events) {
    Events["AnimationDrag"] = "AnimationDrag";
    Events["KeyframeMove"] = "KeyframeMove";
    Events["StartEndpointMove"] = "StartEndpointMove";
    Events["FinishEndpointMove"] = "FinishEndpointMove";
})(Events || (Events = {}));
const Options = {
    AnimationHeight: 26,
    AnimationSVGHeight: 50,
    AnimationMargin: 7,
    EndpointsClickRegionSize: 10,
    GridCanvasHeight: 40,
};
const Colors = new Map([
    ['Purple', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#9C27B0')],
    ['Light Blue', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#03A9F4')],
    ['Deep Orange', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#FF5722')],
    ['Blue', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#5677FC')],
    ['Lime', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#CDDC39')],
    ['Blue Grey', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#607D8B')],
    ['Pink', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#E91E63')],
    ['Green', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#0F9D58')],
    ['Brown', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#795548')],
    ['Cyan', _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse('#00BCD4')],
]);


/***/ })

}]);