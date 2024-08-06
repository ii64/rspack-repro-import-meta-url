"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_animation_AnimationUI_js"],{

/***/ "./panels/animation/AnimationGroupPreviewUI.js":
/*!*****************************************************!*\
  !*** ./panels/animation/AnimationGroupPreviewUI.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationGroupPreviewUI: () => (/* binding */ AnimationGroupPreviewUI)
/* harmony export */ });
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




class AnimationGroupPreviewUI {
    #model;
    element;
    #removeButtonInternal;
    #replayOverlayElement;
    #svg;
    #viewBoxHeight;
    constructor(model) {
        this.#model = model;
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
        this.#removeButtonInternal = this.element.createChild('button', 'animation-remove-button');
        this.#removeButtonInternal.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.action('animations.remove-preview').track({ click: true })}`);
        this.#removeButtonInternal.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_0__.Icon.create('cross'));
        this.#replayOverlayElement = this.element.createChild('div', 'animation-buffer-preview-animation');
        this.#svg = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(this.element, 'svg');
        this.#svg.setAttribute('width', '100%');
        this.#svg.setAttribute('preserveAspectRatio', 'none');
        this.#svg.setAttribute('height', '100%');
        this.#viewBoxHeight = 32;
        this.#svg.setAttribute('viewBox', '0 0 100 ' + this.#viewBoxHeight);
        this.#svg.setAttribute('shape-rendering', 'crispEdges');
        this.render();
    }
    removeButton() {
        return this.#removeButtonInternal;
    }
    replay() {
        this.#replayOverlayElement.animate([
            { offset: 0, width: '0%', opacity: 1 },
            { offset: 0.9, width: '100%', opacity: 1 },
            { offset: 1, width: '100%', opacity: 0 },
        ], { duration: 200, easing: 'cubic-bezier(0, 0, 0.2, 1)' });
    }
    render() {
        this.#svg.removeChildren();
        const maxToShow = 10;
        const numberOfAnimations = Math.min(this.#model.animations().length, maxToShow);
        const timeToPixelRatio = 100 / Math.max(this.#model.groupDuration(), 750);
        for (let i = 0; i < numberOfAnimations; i++) {
            const animation = this.#model.animations()[i];
            const line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(this.#svg, 'line');
            const startPoint = animation.delayOrStartTime();
            const endPoint = startPoint + animation.iterationDuration();
            line.setAttribute('x1', String(startPoint * timeToPixelRatio));
            line.setAttribute('x2', String(endPoint * timeToPixelRatio));
            const y = String(Math.floor(this.#viewBoxHeight / Math.max(6, numberOfAnimations) * i + 1));
            line.setAttribute('y1', y);
            line.setAttribute('y2', y);
            line.style.stroke = _AnimationUI_js__WEBPACK_IMPORTED_MODULE_3__.AnimationUI.colorForAnimation(this.#model.animations()[i]);
        }
    }
}
//# sourceMappingURL=AnimationGroupPreviewUI.js.map

/***/ }),

/***/ "./panels/animation/AnimationScreenshotPopover.js":
/*!********************************************************!*\
  !*** ./panels/animation/AnimationScreenshotPopover.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationScreenshotPopover: () => (/* binding */ AnimationScreenshotPopover)
/* harmony export */ });
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _animationScreenshotPopover_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animationScreenshotPopover.css.js */ "./panels/animation/animationScreenshotPopover.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class AnimationScreenshotPopover extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Widget.VBox {
    #frames;
    #rafId;
    #currentFrame;
    #progressBar;
    #showFrame;
    #endDelay;
    constructor(images) {
        super(true);
        console.assert(images.length > 0);
        this.contentElement.classList.add('animation-screenshot-popover');
        this.#frames = images;
        for (const image of images) {
            this.contentElement.appendChild(image);
            image.style.display = 'none';
        }
        this.#rafId = 0;
        this.#currentFrame = 0;
        this.#frames[0].style.display = 'block';
        this.#progressBar = this.contentElement.createChild('div', 'animation-progress');
    }
    wasShown() {
        this.#rafId = this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this));
        this.registerCSSFiles([_animationScreenshotPopover_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]]);
    }
    willHide() {
        this.contentElement.window().cancelAnimationFrame(this.#rafId);
        this.#endDelay = undefined;
    }
    changeFrame() {
        this.#rafId = this.contentElement.window().requestAnimationFrame(this.changeFrame.bind(this));
        if (this.#endDelay) {
            this.#endDelay--;
            return;
        }
        this.#showFrame = !this.#showFrame;
        if (!this.#showFrame) {
            return;
        }
        const numFrames = this.#frames.length;
        this.#frames[this.#currentFrame % numFrames].style.display = 'none';
        this.#currentFrame++;
        this.#frames[(this.#currentFrame) % numFrames].style.display = 'block';
        if (this.#currentFrame % numFrames === numFrames - 1) {
            this.#endDelay = 50;
        }
        this.#progressBar.style.width = (this.#currentFrame % numFrames + 1) / numFrames * 100 + '%';
    }
}
//# sourceMappingURL=AnimationScreenshotPopover.js.map

/***/ }),

/***/ "./panels/animation/AnimationTimeline.js":
/*!***********************************************!*\
  !*** ./panels/animation/AnimationTimeline.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationTimeline: () => (/* binding */ AnimationTimeline),
/* harmony export */   GlobalPlaybackRates: () => (/* binding */ GlobalPlaybackRates),
/* harmony export */   NodeUI: () => (/* binding */ NodeUI),
/* harmony export */   StepTimingFunction: () => (/* binding */ StepTimingFunction)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./panels/animation/AnimationGroupPreviewUI.js");
/* harmony import */ var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AnimationModel.js */ "./panels/animation/AnimationModel.js");
/* harmony import */ var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./panels/animation/AnimationScreenshotPopover.js");
/* harmony import */ var _animationTimeline_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animationTimeline.css.js */ "./panels/animation/animationTimeline.css.js");
/* harmony import */ var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.












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
class AnimationTimeline extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    #gridWrapper;
    #grid;
    #playbackRate;
    #allPaused;
    #screenshotPopovers = [];
    #animationsContainer;
    #playbackRateButtons;
    #previewContainer;
    #timelineScrubber;
    #currentTime;
    #clearButton;
    #selectedGroup;
    #renderQueue;
    #defaultDuration;
    #durationInternal;
    #timelineControlsWidth;
    #nodesMap;
    #uiAnimations;
    #groupBuffer;
    #previewMap;
    #animationsMap;
    #timelineScrubberLine;
    #pauseButton;
    #controlButton;
    #controlState;
    #redrawing;
    #cachedTimelineWidth;
    #scrubberPlayer;
    #gridOffsetLeft;
    #originalScrubberTime;
    #animationGroupPausedBeforeScrub;
    #originalMousePosition;
    #timelineControlsResizer;
    #gridHeader;
    #scrollListenerId;
    #collectedGroups;
    #createPreviewForCollectedGroupsThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10);
    #animationGroupUpdatedThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(10);
    // We're only adding event listeners to the animation model when the panel is first shown.
    #initialized = false;
    constructor() {
        super(true);
        this.element.classList.add('animations-timeline');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.panel('animations').track({ resize: true })}`);
        this.#timelineControlsResizer = this.contentElement.createChild('div', 'timeline-controls-resizer');
        this.#gridWrapper = this.contentElement.createChild('div', 'grid-overflow-wrapper');
        this.#grid = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(this.#gridWrapper, 'svg', 'animation-timeline-grid');
        this.#playbackRate = 1;
        this.#allPaused = false;
        this.#animationGroupPausedBeforeScrub = false;
        this.createHeader();
        this.#animationsContainer = this.contentElement.createChild('div', 'animation-timeline-rows');
        this.#animationsContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('animations')}`);
        const timelineHint = this.contentElement.createChild('div', 'animation-timeline-rows-hint');
        timelineHint.textContent = i18nString(UIStrings.selectAnEffectAboveToInspectAnd);
        /** @const */ this.#defaultDuration = 100;
        this.#durationInternal = this.#defaultDuration;
        this.#nodesMap = new Map();
        this.#uiAnimations = [];
        this.#groupBuffer = [];
        this.#collectedGroups = [];
        this.#previewMap = new Map();
        this.#animationsMap = new Map();
        this.#timelineControlsWidth = DEFAULT_TIMELINE_CONTROLS_WIDTH;
        this.element.style.setProperty('--timeline-controls-width', `${this.#timelineControlsWidth}px`);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.NodeRemoved, ev => this.markNodeAsRemoved(ev.data.node), this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().observeModels(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.AnimationModel, this, { scoped: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, this.nodeChanged, this);
        this.#setupTimelineControlsResizer();
    }
    static instance(opts) {
        if (!animationTimelineInstance || opts?.forceNew) {
            animationTimelineInstance = new AnimationTimeline();
        }
        return animationTimelineInstance;
    }
    #setupTimelineControlsResizer() {
        let resizeOriginX = undefined;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(this.#timelineControlsResizer, (ev) => {
            resizeOriginX = ev.clientX;
            return true;
        }, (ev) => {
            if (resizeOriginX === undefined) {
                return;
            }
            const newWidth = this.#timelineControlsWidth + ev.clientX - resizeOriginX;
            this.#timelineControlsWidth =
                Math.min(Math.max(newWidth, MIN_TIMELINE_CONTROLS_WIDTH), MAX_TIMELINE_CONTROLS_WIDTH);
            resizeOriginX = ev.clientX;
            this.element.style.setProperty('--timeline-controls-width', this.#timelineControlsWidth + 'px');
            this.onResize();
        }, () => {
            resizeOriginX = undefined;
        }, 'ew-resize');
    }
    get previewMap() {
        return this.#previewMap;
    }
    get uiAnimations() {
        return this.#uiAnimations;
    }
    get groupBuffer() {
        return this.#groupBuffer;
    }
    wasShown() {
        if (this.#initialized) {
            return;
        }
        for (const animationModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.AnimationModel, { scoped: true })) {
            this.addEventListeners(animationModel);
        }
        this.registerCSSFiles([_animationTimeline_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]]);
        this.#initialized = true;
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
        animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupStarted, this.animationGroupStarted, this);
        animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupUpdated, this.animationGroupUpdated, this);
        animationModel.addEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelReset, this.reset, this);
    }
    removeEventListeners(animationModel) {
        animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupStarted, this.animationGroupStarted, this);
        animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.AnimationGroupUpdated, this.animationGroupUpdated, this);
        animationModel.removeEventListener(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.ModelReset, this.reset, this);
    }
    nodeChanged() {
        for (const nodeUI of this.#nodesMap.values()) {
            nodeUI.nodeChanged();
        }
    }
    createScrubber() {
        this.#timelineScrubber = document.createElement('div');
        this.#timelineScrubber.classList.add('animation-scrubber');
        this.#timelineScrubber.classList.add('hidden');
        this.#timelineScrubberLine = this.#timelineScrubber.createChild('div', 'animation-scrubber-line');
        this.#timelineScrubberLine.createChild('div', 'animation-scrubber-head');
        this.#timelineScrubber.createChild('div', 'animation-time-overlay');
        return this.#timelineScrubber;
    }
    createHeader() {
        const toolbarContainer = this.contentElement.createChild('div', 'animation-timeline-toolbar-container');
        toolbarContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toolbar()}`);
        const topToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('animation-timeline-toolbar', toolbarContainer);
        this.#clearButton =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear', undefined, 'animations.clear');
        this.#clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupsCleared);
            this.reset();
        });
        topToolbar.appendToolbarItem(this.#clearButton);
        topToolbar.appendSeparator();
        this.#pauseButton =
            new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarToggle(i18nString(UIStrings.pauseAll), 'pause', 'resume', 'animations.pause-resume-all');
        this.#pauseButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, () => {
            this.togglePauseAll();
        });
        topToolbar.appendToolbarItem(this.#pauseButton);
        const playbackRateControl = toolbarContainer.createChild('div', 'animation-playback-rate-control');
        playbackRateControl.addEventListener('keydown', this.handlePlaybackRateControlKeyDown.bind(this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsListBox(playbackRateControl);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(playbackRateControl, i18nString(UIStrings.playbackRates));
        this.#playbackRateButtons = [];
        for (const playbackRate of GlobalPlaybackRates) {
            const button = playbackRateControl.createChild('button', 'animation-playback-rate-button');
            button.textContent = playbackRate ? i18nString(UIStrings.playbackRatePlaceholder, { PH1: playbackRate * 100 }) :
                i18nString(UIStrings.pause);
            button.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action().context(`animations.playback-rate-${playbackRate * 100}`).track({
                click: true,
                keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight',
            })}`);
            playbackRates.set(button, playbackRate);
            button.addEventListener('click', this.setPlaybackRate.bind(this, playbackRate));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsOption(button);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(button, i18nString(UIStrings.setSpeedToS, { PH1: button.textContent }));
            button.tabIndex = -1;
            this.#playbackRateButtons.push(button);
        }
        this.updatePlaybackControls();
        this.#previewContainer = this.contentElement.createChild('div', 'animation-timeline-buffer');
        this.#previewContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.section('film-strip')}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsListBox(this.#previewContainer);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(this.#previewContainer, i18nString(UIStrings.animationPreviews));
        const emptyBufferHint = this.contentElement.createChild('div', 'animation-timeline-buffer-hint');
        emptyBufferHint.textContent = i18nString(UIStrings.waitingForAnimations);
        const container = this.contentElement.createChild('div', 'animation-timeline-header');
        const controls = container.createChild('div', 'animation-controls');
        this.#currentTime = controls.createChild('div', 'animation-timeline-current-time monospace');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('animation-controls-toolbar', controls);
        this.#controlButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.replayTimeline), 'replay', undefined, 'animations.play-replay-pause-animation-group');
        this.#controlButton.element.classList.add('toolbar-state-on');
        this.#controlState = "replay-outline" /* ControlState.Replay */;
        this.#controlButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */, this.controlButtonToggle.bind(this));
        toolbar.appendToolbarItem(this.#controlButton);
        this.#gridHeader = container.createChild('div', 'animation-grid-header');
        this.#gridHeader.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.timeline('animations.grid-header').track({ drag: true, click: true })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(this.#gridHeader, this.scrubberDragStart.bind(this), this.scrubberDragMove.bind(this), this.scrubberDragEnd.bind(this), null);
        this.#gridWrapper.appendChild(this.createScrubber());
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
        const currentIndex = this.#playbackRateButtons.indexOf(button);
        const nextIndex = focusPrevious ? currentIndex - 1 : currentIndex + 1;
        if (nextIndex < 0 || nextIndex >= this.#playbackRateButtons.length) {
            return;
        }
        const nextButton = this.#playbackRateButtons[nextIndex];
        nextButton.tabIndex = 0;
        nextButton.focus();
        if (target) {
            target.tabIndex = -1;
        }
    }
    togglePauseAll() {
        this.#allPaused = !this.#allPaused;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(this.#allPaused ? _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsPaused : _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsResumed);
        if (this.#pauseButton) {
            this.#pauseButton.setToggled(this.#allPaused);
        }
        this.setPlaybackRate(this.#playbackRate);
        if (this.#pauseButton) {
            this.#pauseButton.setTitle(this.#allPaused ? i18nString(UIStrings.resumeAll) : i18nString(UIStrings.pauseAll));
        }
    }
    setPlaybackRate(playbackRate) {
        if (playbackRate !== this.#playbackRate) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.animationPlaybackRateChanged(playbackRate === 0.1 ? 2 /* Host.UserMetrics.AnimationsPlaybackRate.Percent10 */ :
                playbackRate === 0.25 ? 1 /* Host.UserMetrics.AnimationsPlaybackRate.Percent25 */ :
                    playbackRate === 1 ? 0 /* Host.UserMetrics.AnimationsPlaybackRate.Percent100 */ :
                        3 /* Host.UserMetrics.AnimationsPlaybackRate.Other */);
        }
        this.#playbackRate = playbackRate;
        for (const animationModel of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().models(_AnimationModel_js__WEBPACK_IMPORTED_MODULE_8__.AnimationModel, { scoped: true })) {
            animationModel.setPlaybackRate(this.#allPaused ? 0 : this.#playbackRate);
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationsPlaybackRateChanged);
        if (this.#scrubberPlayer) {
            this.#scrubberPlayer.playbackRate = this.effectivePlaybackRate();
        }
        this.updatePlaybackControls();
    }
    updatePlaybackControls() {
        for (const button of this.#playbackRateButtons) {
            const selected = this.#playbackRate === playbackRates.get(button);
            button.classList.toggle('selected', selected);
            button.tabIndex = selected ? 0 : -1;
        }
    }
    controlButtonToggle() {
        if (this.#controlState === "play-outline" /* ControlState.Play */) {
            this.togglePause(false);
        }
        else if (this.#controlState === "replay-outline" /* ControlState.Replay */) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupReplayed);
            this.replay();
        }
        else {
            this.togglePause(true);
        }
    }
    updateControlButton() {
        if (!this.#controlButton) {
            return;
        }
        this.#controlButton.setEnabled(Boolean(this.#selectedGroup) && this.hasAnimationGroupActiveNodes() && !this.#selectedGroup?.isScrollDriven());
        if (this.#selectedGroup && this.#selectedGroup.paused()) {
            this.#controlState = "play-outline" /* ControlState.Play */;
            this.#controlButton.element.classList.toggle('toolbar-state-on', true);
            this.#controlButton.setTitle(i18nString(UIStrings.playTimeline));
            this.#controlButton.setGlyph('play');
        }
        else if (!this.#scrubberPlayer || !this.#scrubberPlayer.currentTime ||
            typeof this.#scrubberPlayer.currentTime !== 'number' || this.#scrubberPlayer.currentTime >= this.duration()) {
            this.#controlState = "replay-outline" /* ControlState.Replay */;
            this.#controlButton.element.classList.toggle('toolbar-state-on', true);
            this.#controlButton.setTitle(i18nString(UIStrings.replayTimeline));
            this.#controlButton.setGlyph('replay');
        }
        else {
            this.#controlState = "pause-outline" /* ControlState.Pause */;
            this.#controlButton.element.classList.toggle('toolbar-state-on', false);
            this.#controlButton.setTitle(i18nString(UIStrings.pauseTimeline));
            this.#controlButton.setGlyph('pause');
        }
    }
    effectivePlaybackRate() {
        return (this.#allPaused || (this.#selectedGroup && this.#selectedGroup.paused())) ? 0 : this.#playbackRate;
    }
    togglePause(pause) {
        if (this.#selectedGroup) {
            this.#selectedGroup.togglePause(pause);
            const preview = this.#previewMap.get(this.#selectedGroup);
            if (preview) {
                preview.element.classList.toggle('paused', pause);
            }
        }
        if (this.#scrubberPlayer) {
            this.#scrubberPlayer.playbackRate = this.effectivePlaybackRate();
        }
        this.updateControlButton();
    }
    replay() {
        if (!this.#selectedGroup || !this.hasAnimationGroupActiveNodes() || this.#selectedGroup.isScrollDriven()) {
            return;
        }
        this.#selectedGroup.seekTo(0);
        this.animateTime(0);
        this.updateControlButton();
    }
    duration() {
        return this.#durationInternal;
    }
    setDuration(duration) {
        this.#durationInternal = duration;
        this.scheduleRedraw();
    }
    clearTimeline() {
        if (this.#selectedGroup && this.#scrollListenerId) {
            void this.#selectedGroup.scrollNode().then((node) => {
                void node?.removeScrollEventListener(this.#scrollListenerId);
                this.#scrollListenerId = undefined;
            });
        }
        this.#uiAnimations = [];
        this.#nodesMap.clear();
        this.#animationsMap.clear();
        this.#animationsContainer.removeChildren();
        this.#durationInternal = this.#defaultDuration;
        this.#timelineScrubber.classList.add('hidden');
        this.#gridHeader.classList.remove('scrubber-enabled');
        this.#selectedGroup = null;
        if (this.#scrubberPlayer) {
            this.#scrubberPlayer.cancel();
        }
        this.#scrubberPlayer = undefined;
        this.clearCurrentTimeText();
        this.updateControlButton();
    }
    reset() {
        this.clearTimeline();
        this.setPlaybackRate(this.#playbackRate);
        for (const group of this.#groupBuffer) {
            group.release();
        }
        this.#groupBuffer = [];
        this.clearPreviews();
        this.renderGrid();
    }
    animationGroupStarted({ data }) {
        this.addAnimationGroup(data);
    }
    scheduledRedrawAfterAnimationGroupUpdatedForTest() {
    }
    animationGroupUpdated({ data: group }) {
        void this.#animationGroupUpdatedThrottler.schedule(async () => {
            const preview = this.#previewMap.get(group);
            if (preview) {
                preview.replay();
            }
            if (this.#selectedGroup !== group) {
                return;
            }
            if (group.isScrollDriven()) {
                const animationNode = await group.scrollNode();
                if (animationNode) {
                    const scrollRange = group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ?
                        await animationNode.verticalScrollRange() :
                        await animationNode.horizontalScrollRange();
                    const scrollOffset = group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ?
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
        this.#previewMap.clear();
        this.#screenshotPopovers.forEach(popover => {
            popover.detach();
        });
        this.#previewContainer.removeChildren();
        this.#screenshotPopovers = [];
    }
    createPreview(group) {
        const preview = new _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_7__.AnimationGroupPreviewUI(group);
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
        this.#groupBuffer.push(group);
        this.#previewMap.set(group, preview);
        this.#previewContainer.appendChild(previewUiContainer);
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
                const screenshotPopover = new _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_9__.AnimationScreenshotPopover(screenshots);
                // This is needed for clearing out the widgets
                this.#screenshotPopovers.push(screenshotPopover);
                screenshotPopover.show(screenshotsContainer);
            };
            if (!screenshots[0].complete) {
                screenshots[0].onload = createAndShowScreenshotPopover;
            }
            else {
                createAndShowScreenshotPopover();
            }
        }, { once: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(preview.element, i18nString(UIStrings.animationPreviewS, { PH1: this.#groupBuffer.indexOf(group) + 1 }));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsOption(preview.element);
        if (this.#previewMap.size === 1) {
            const preview = this.#previewMap.get(this.#groupBuffer[0]);
            if (preview) {
                preview.element.tabIndex = 0;
            }
        }
    }
    previewsCreatedForTest() {
    }
    createPreviewForCollectedGroups() {
        this.#collectedGroups.sort((a, b) => {
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
        for (const group of this.#collectedGroups) {
            this.createPreview(group);
        }
        this.#collectedGroups = [];
        this.previewsCreatedForTest();
    }
    addAnimationGroup(group) {
        const previewGroup = this.#previewMap.get(group);
        if (previewGroup) {
            if (this.#selectedGroup === group) {
                this.syncScrubber();
            }
            else {
                previewGroup.replay();
            }
            return;
        }
        this.#groupBuffer.sort((left, right) => left.startTime() - right.startTime());
        // Discard oldest groups from buffer if necessary
        const groupsToDiscard = [];
        const bufferSize = this.width() / 50;
        while (this.#groupBuffer.length > bufferSize) {
            const toDiscard = this.#groupBuffer.splice(this.#groupBuffer[0] === this.#selectedGroup ? 1 : 0, 1);
            groupsToDiscard.push(toDiscard[0]);
        }
        for (const g of groupsToDiscard) {
            const discardGroup = this.#previewMap.get(g);
            if (!discardGroup) {
                continue;
            }
            discardGroup.element.remove();
            this.#previewMap.delete(g);
            g.release();
        }
        // Batch creating preview for arrivals happening closely together to ensure
        // stable UI sorting in the preview container.
        this.#collectedGroups.push(group);
        void this.#createPreviewForCollectedGroupsThrottler.schedule(() => Promise.resolve(this.createPreviewForCollectedGroups()));
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
        const currentGroupIndex = this.#groupBuffer.indexOf(group);
        const nextIndex = focusPrevious ? currentGroupIndex - 1 : currentGroupIndex + 1;
        if (nextIndex < 0 || nextIndex >= this.#groupBuffer.length) {
            return;
        }
        const preview = this.#previewMap.get(this.#groupBuffer[nextIndex]);
        if (preview) {
            preview.element.tabIndex = 0;
            preview.element.focus();
        }
        if (target) {
            target.tabIndex = -1;
        }
    }
    removeAnimationGroup(group, event) {
        const currentGroupIndex = this.#groupBuffer.indexOf(group);
        _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.ArrayUtilities.removeElement(this.#groupBuffer, group);
        const previewGroup = this.#previewMap.get(group);
        if (previewGroup) {
            previewGroup.element.remove();
        }
        this.#previewMap.delete(group);
        group.release();
        event.consume(true);
        if (this.#selectedGroup === group) {
            this.clearTimeline();
            this.renderGrid();
        }
        const groupLength = this.#groupBuffer.length;
        if (groupLength === 0) {
            this.#clearButton.element.focus();
            return;
        }
        const nextGroup = currentGroupIndex >= this.#groupBuffer.length ?
            this.#previewMap.get(this.#groupBuffer[this.#groupBuffer.length - 1]) :
            this.#previewMap.get(this.#groupBuffer[currentGroupIndex]);
        if (nextGroup) {
            nextGroup.element.tabIndex = 0;
            nextGroup.element.focus();
        }
    }
    clearCurrentTimeText() {
        this.#currentTime.textContent = '';
    }
    setCurrentTimeText(time) {
        if (!this.#selectedGroup) {
            return;
        }
        this.#currentTime.textContent =
            this.#selectedGroup?.isScrollDriven() ? `${time.toFixed(0)}px` : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(time);
    }
    async selectAnimationGroup(group) {
        if (this.#selectedGroup === group) {
            this.togglePause(false);
            this.replay();
            return;
        }
        this.clearTimeline();
        this.#selectedGroup = group;
        this.#previewMap.forEach((previewUI, group) => {
            previewUI.element.classList.toggle('selected', this.#selectedGroup === group);
        });
        if (group.isScrollDriven()) {
            const animationNode = await group.scrollNode();
            if (!animationNode) {
                throw new Error('Scroll container is not found for the scroll driven animation');
            }
            const scrollRange = group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ?
                await animationNode.verticalScrollRange() :
                await animationNode.horizontalScrollRange();
            const scrollOffset = group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ?
                await animationNode.scrollTop() :
                await animationNode.scrollLeft();
            if (typeof scrollRange !== 'number' || typeof scrollOffset !== 'number') {
                throw new Error('Scroll range or scroll offset is not resolved for the scroll driven animation');
            }
            this.#scrollListenerId = await animationNode.addScrollEventListener(({ scrollTop, scrollLeft }) => {
                const offset = group.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ? scrollTop : scrollLeft;
                this.setCurrentTimeText(offset);
                this.setTimelineScrubberPosition(offset);
            });
            this.setDuration(scrollRange);
            this.setCurrentTimeText(scrollOffset);
            this.setTimelineScrubberPosition(scrollOffset);
            this.#playbackRateButtons.forEach(button => {
                button.setAttribute('disabled', 'true');
            });
            if (this.#pauseButton) {
                this.#pauseButton.setEnabled(false);
            }
        }
        else {
            this.setDuration(Math.max(500, group.finiteDuration() + 100));
            this.#playbackRateButtons.forEach(button => {
                button.removeAttribute('disabled');
            });
            if (this.#pauseButton) {
                this.#pauseButton.setEnabled(true);
            }
        }
        // Wait for all animations to be added and nodes to be resolved
        // until we schedule a redraw.
        await Promise.all(group.animations().map(anim => this.addAnimation(anim)));
        this.scheduleRedraw();
        this.togglePause(false);
        this.replay();
        if (this.hasAnimationGroupActiveNodes()) {
            this.#timelineScrubber.classList.remove('hidden');
            this.#gridHeader.classList.add('scrubber-enabled');
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupSelected);
        if (this.#selectedGroup.isScrollDriven()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScrollDrivenAnimationGroupSelected);
        }
        this.animationGroupSelectedForTest();
    }
    animationGroupSelectedForTest() {
    }
    async addAnimation(animation) {
        let nodeUI = this.#nodesMap.get(animation.source().backendNodeId());
        if (!nodeUI) {
            nodeUI = new NodeUI(animation.source());
            this.#animationsContainer.appendChild(nodeUI.element);
            this.#nodesMap.set(animation.source().backendNodeId(), nodeUI);
        }
        const nodeRow = nodeUI.createNewRow();
        const uiAnimation = new _AnimationUI_js__WEBPACK_IMPORTED_MODULE_11__.AnimationUI(animation, this, nodeRow);
        const node = await animation.source().deferredNode().resolvePromise();
        uiAnimation.setNode(node);
        if (node && nodeUI) {
            nodeUI.nodeResolved(node);
            nodeUIsByNode.set(node, nodeUI);
        }
        this.#uiAnimations.push(uiAnimation);
        this.#animationsMap.set(animation.id(), animation);
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
            this.#gridHeader.classList.remove('scrubber-enabled');
            this.#timelineScrubber.classList.add('hidden');
            this.#scrubberPlayer?.cancel();
            this.#scrubberPlayer = undefined;
            this.clearCurrentTimeText();
            this.updateControlButton();
        }
    }
    hasAnimationGroupActiveNodes() {
        for (const nodeUI of this.#nodesMap.values()) {
            if (nodeUI.hasActiveNode()) {
                return true;
            }
        }
        return false;
    }
    renderGrid() {
        const isScrollDriven = this.#selectedGroup?.isScrollDriven();
        // For scroll driven animations, show divider lines for each 10% progres.
        // For time based animations, show divider lines for each 250ms progress.
        const gridSize = isScrollDriven ? this.duration() / 10 : 250;
        this.#grid.removeChildren();
        let lastDraw = undefined;
        for (let time = 0; time < this.duration(); time += gridSize) {
            const line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(this.#grid, 'rect', 'animation-timeline-grid-line');
            line.setAttribute('x', (time * this.pixelTimeRatio() + 10).toString());
            line.setAttribute('y', '23');
            line.setAttribute('height', '100%');
            line.setAttribute('width', '1');
        }
        for (let time = 0; time < this.duration(); time += gridSize) {
            const gridWidth = time * this.pixelTimeRatio();
            if (lastDraw === undefined || gridWidth - lastDraw > 50) {
                lastDraw = gridWidth;
                const label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(this.#grid, 'text', 'animation-timeline-grid-label');
                label.textContent = isScrollDriven ? `${time.toFixed(0)}px` : _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.millisToString(time);
                label.setAttribute('x', (gridWidth + 10).toString());
                label.setAttribute('y', '16');
            }
        }
    }
    scheduleRedraw() {
        this.renderGrid();
        this.#renderQueue = [];
        for (const ui of this.#uiAnimations) {
            this.#renderQueue.push(ui);
        }
        if (this.#redrawing) {
            return;
        }
        this.#redrawing = true;
        this.#animationsContainer.window().requestAnimationFrame(this.render.bind(this));
    }
    render(timestamp) {
        while (this.#renderQueue.length && (!timestamp || window.performance.now() - timestamp < 50)) {
            const animationUI = this.#renderQueue.shift();
            if (animationUI) {
                animationUI.redraw();
            }
        }
        if (this.#renderQueue.length) {
            this.#animationsContainer.window().requestAnimationFrame(this.render.bind(this));
        }
        else {
            this.#redrawing = undefined;
        }
    }
    onResize() {
        this.#cachedTimelineWidth = Math.max(0, this.#animationsContainer.offsetWidth - this.#timelineControlsWidth) || 0;
        this.scheduleRedraw();
        if (this.#scrubberPlayer) {
            this.syncScrubber();
        }
        this.#gridOffsetLeft = undefined;
    }
    width() {
        return this.#cachedTimelineWidth || 0;
    }
    syncScrubber() {
        if (!this.#selectedGroup || !this.hasAnimationGroupActiveNodes()) {
            return;
        }
        void this.#selectedGroup.currentTimePromise()
            .then(this.animateTime.bind(this))
            .then(this.updateControlButton.bind(this));
    }
    animateTime(currentTime) {
        // Scroll driven animations are bound to the scroll position of the scroll container
        // thus we don't animate the scrubber based on time for scroll driven animations.
        if (this.#selectedGroup?.isScrollDriven()) {
            return;
        }
        if (this.#scrubberPlayer) {
            this.#scrubberPlayer.cancel();
        }
        this.#scrubberPlayer = this.#timelineScrubber.animate([{ transform: 'translateX(0px)' }, { transform: 'translateX(' + this.width() + 'px)' }], { duration: this.duration(), fill: 'forwards' });
        this.#scrubberPlayer.playbackRate = this.effectivePlaybackRate();
        this.#scrubberPlayer.onfinish = this.updateControlButton.bind(this);
        this.#scrubberPlayer.currentTime = currentTime;
        this.element.window().requestAnimationFrame(this.updateScrubber.bind(this));
    }
    pixelTimeRatio() {
        return this.width() / this.duration() || 0;
    }
    updateScrubber(_timestamp) {
        if (!this.#scrubberPlayer) {
            return;
        }
        this.setCurrentTimeText(this.#scrubberCurrentTime());
        if (this.#scrubberPlayer.playState.toString() === 'pending' || this.#scrubberPlayer.playState === 'running') {
            this.element.window().requestAnimationFrame(this.updateScrubber.bind(this));
        }
        else if (this.#scrubberPlayer.playState === 'finished') {
            this.clearCurrentTimeText();
        }
    }
    scrubberDragStart(event) {
        if (!this.#selectedGroup || !this.hasAnimationGroupActiveNodes()) {
            return false;
        }
        // Seek to current mouse position.
        if (!this.#gridOffsetLeft) {
            this.#gridOffsetLeft = this.#grid.getBoundingClientRect().left + 10;
        }
        const { x } = event;
        const seekTime = Math.max(0, x - this.#gridOffsetLeft) / this.pixelTimeRatio();
        // Interface with scrubber drag.
        this.#originalScrubberTime = seekTime;
        this.#originalMousePosition = x;
        this.setCurrentTimeText(seekTime);
        if (this.#selectedGroup.isScrollDriven()) {
            this.setTimelineScrubberPosition(seekTime);
            void this.updateScrollOffsetOnPage(seekTime);
        }
        else {
            const currentTime = this.#scrubberPlayer?.currentTime;
            this.#animationGroupPausedBeforeScrub =
                this.#selectedGroup.paused() || typeof currentTime === 'number' && currentTime >= this.duration();
            this.#selectedGroup.seekTo(seekTime);
            this.togglePause(true);
            this.animateTime(seekTime);
        }
        return true;
    }
    async updateScrollOffsetOnPage(offset) {
        const node = await this.#selectedGroup?.scrollNode();
        if (!node) {
            return;
        }
        if (this.#selectedGroup?.scrollOrientation() === "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */) {
            return node.setScrollTop(offset);
        }
        return node.setScrollLeft(offset);
    }
    setTimelineScrubberPosition(time) {
        this.#timelineScrubber.style.transform = `translateX(${time * this.pixelTimeRatio()}px)`;
    }
    scrubberDragMove(event) {
        const { x } = event;
        const delta = x - (this.#originalMousePosition || 0);
        const currentTime = Math.max(0, Math.min((this.#originalScrubberTime || 0) + delta / this.pixelTimeRatio(), this.duration()));
        if (this.#scrubberPlayer) {
            this.#scrubberPlayer.currentTime = currentTime;
        }
        else {
            this.setTimelineScrubberPosition(currentTime);
            void this.updateScrollOffsetOnPage(currentTime);
        }
        this.setCurrentTimeText(currentTime);
        if (this.#selectedGroup && !this.#selectedGroup.isScrollDriven()) {
            this.#selectedGroup.seekTo(currentTime);
        }
    }
    #scrubberCurrentTime() {
        return typeof this.#scrubberPlayer?.currentTime === 'number' ? this.#scrubberPlayer.currentTime : 0;
    }
    scrubberDragEnd(_event) {
        if (this.#scrubberPlayer) {
            const currentTime = Math.max(0, this.#scrubberCurrentTime());
            this.#scrubberPlayer.play();
            this.#scrubberPlayer.currentTime = currentTime;
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimationGroupScrubbed);
        if (this.#selectedGroup?.isScrollDriven()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ScrollDrivenAnimationGroupScrubbed);
        }
        this.#currentTime.window().requestAnimationFrame(this.updateScrubber.bind(this));
        if (!this.#animationGroupPausedBeforeScrub) {
            this.togglePause(false);
        }
    }
}
const GlobalPlaybackRates = [1, 0.25, 0.1];
class NodeUI {
    element;
    #description;
    #timelineElement;
    #overlayElement;
    #node;
    constructor(_animationEffect) {
        this.element = document.createElement('div');
        this.element.classList.add('animation-node-row');
        this.#description = this.element.createChild('div', 'animation-node-description');
        this.#description.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.tableCell('description').track({ resize: true })}`);
        this.#timelineElement = this.element.createChild('div', 'animation-node-timeline');
        this.#timelineElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.tableCell('timeline').track({ resize: true })}`);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.markAsApplication(this.#timelineElement);
    }
    nodeResolved(node) {
        if (!node) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(this.#description, '<node>');
            return;
        }
        this.#node = node;
        this.nodeChanged();
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(node).then(link => {
            link.addEventListener('click', () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.AnimatedNodeDescriptionClicked);
            });
            this.#description.appendChild(link);
        });
        if (!node.ownerDocument) {
            this.nodeRemoved();
        }
    }
    createNewRow() {
        return this.#timelineElement.createChild('div', 'animation-timeline-row');
    }
    nodeRemoved() {
        this.element.classList.add('animation-node-removed');
        if (!this.#overlayElement) {
            this.#overlayElement = document.createElement('div');
            this.#overlayElement.classList.add('animation-node-removed-overlay');
            this.#description.appendChild(this.#overlayElement);
        }
        this.#node = null;
    }
    hasActiveNode() {
        return Boolean(this.#node);
    }
    nodeChanged() {
        let animationNodeSelected = false;
        if (this.#node) {
            animationNodeSelected = (this.#node === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode));
        }
        this.element.classList.toggle('animation-node-selected', animationNodeSelected);
    }
}
class StepTimingFunction {
    steps;
    stepAtPosition;
    constructor(steps, stepAtPosition) {
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
//# sourceMappingURL=AnimationTimeline.js.map

/***/ }),

/***/ "./panels/animation/AnimationUI.js":
/*!*****************************************!*\
  !*** ./panels/animation/AnimationUI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationUI: () => (/* binding */ AnimationUI),
/* harmony export */   Colors: () => (/* binding */ Colors),
/* harmony export */   Options: () => (/* binding */ Options)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/inline_editor/inline_editor.js */ "./ui/legacy/components/inline_editor/inline_editor.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./panels/animation/AnimationTimeline.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








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
    #animationInternal;
    #timeline;
    #keyframes;
    #nameElement;
    #svg;
    #activeIntervalGroup;
    #cachedElements;
    #movementInMs;
    #keyboardMovementRateMs;
    #color;
    #node;
    #delayLine;
    #endDelayLine;
    #tailGroup;
    #mouseEventType;
    #keyframeMoved;
    #downMouseX;
    constructor(animation, timeline, parentElement) {
        this.#animationInternal = animation;
        this.#timeline = timeline;
        const keyframesRule = this.#animationInternal.source().keyframesRule();
        if (keyframesRule) {
            this.#keyframes = keyframesRule.keyframes();
            if (animation.viewOrScrollTimeline() && animation.playbackRate() < 0) {
                this.#keyframes.reverse();
            }
        }
        this.#nameElement = parentElement.createChild('div', 'animation-name');
        this.#nameElement.textContent = this.#animationInternal.name();
        this.#svg = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'svg', 'animation-ui');
        this.#svg.setAttribute('height', Options.AnimationSVGHeight.toString());
        this.#svg.style.marginLeft = '-' + Options.AnimationMargin + 'px';
        this.#svg.addEventListener('contextmenu', this.onContextMenu.bind(this));
        this.#activeIntervalGroup = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(this.#svg, 'g');
        this.#activeIntervalGroup.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.animationClip().track({ drag: true })}`);
        if (!this.#animationInternal.viewOrScrollTimeline()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.installDragHandle(this.#activeIntervalGroup, this.mouseDown.bind(this, "AnimationDrag" /* Events.AnimationDrag */, null), this.mouseMove.bind(this), this.mouseUp.bind(this), '-webkit-grabbing', '-webkit-grab');
            AnimationUI.installDragHandleKeyboard(this.#activeIntervalGroup, this.keydownMove.bind(this, "AnimationDrag" /* Events.AnimationDrag */, null));
        }
        this.#cachedElements = [];
        this.#movementInMs = 0;
        this.#keyboardMovementRateMs = 50;
        this.#color = AnimationUI.colorForAnimation(this.#animationInternal);
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
        return color.asString("rgb" /* Common.Color.Format.RGB */) || '';
    }
    static installDragHandleKeyboard(element, elementDrag) {
        element.addEventListener('keydown', elementDrag, false);
    }
    animation() {
        return this.#animationInternal;
    }
    get nameElement() {
        return this.#nameElement;
    }
    get svg() {
        return this.#svg;
    }
    setNode(node) {
        this.#node = node;
    }
    createLine(parentElement, className) {
        const line = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'line', className);
        line.setAttribute('x1', Options.AnimationMargin.toString());
        line.setAttribute('y1', Options.AnimationHeight.toString());
        line.setAttribute('y2', Options.AnimationHeight.toString());
        line.style.stroke = this.#color;
        return line;
    }
    drawAnimationLine(iteration, parentElement) {
        const cache = this.#cachedElements[iteration];
        if (!cache.animationLine) {
            cache.animationLine = this.createLine(parentElement, 'animation-line');
        }
        if (!cache.animationLine) {
            return;
        }
        cache.animationLine.setAttribute('x2', (this.duration() * this.#timeline.pixelTimeRatio() + Options.AnimationMargin).toFixed(2));
    }
    drawDelayLine(parentElement) {
        if (!this.#delayLine || !this.#endDelayLine) {
            this.#delayLine = this.createLine(parentElement, 'animation-delay-line');
            this.#endDelayLine = this.createLine(parentElement, 'animation-delay-line');
        }
        const fill = this.#animationInternal.source().fill();
        this.#delayLine.classList.toggle('animation-fill', fill === 'backwards' || fill === 'both');
        const margin = Options.AnimationMargin;
        this.#delayLine.setAttribute('x1', margin.toString());
        this.#delayLine.setAttribute('x2', (this.delayOrStartTime() * this.#timeline.pixelTimeRatio() + margin).toFixed(2));
        const forwardsFill = fill === 'forwards' || fill === 'both';
        this.#endDelayLine.classList.toggle('animation-fill', forwardsFill);
        const leftMargin = Math.min(this.#timeline.width(), (this.delayOrStartTime() + this.duration() * this.#animationInternal.source().iterations()) *
            this.#timeline.pixelTimeRatio());
        this.#endDelayLine.style.transform = 'translateX(' + leftMargin.toFixed(2) + 'px)';
        this.#endDelayLine.setAttribute('x1', margin.toString());
        this.#endDelayLine.setAttribute('x2', forwardsFill ?
            (this.#timeline.width() - leftMargin + margin).toFixed(2) :
            (this.#animationInternal.source().endDelay() * this.#timeline.pixelTimeRatio() + margin).toFixed(2));
    }
    drawPoint(iteration, parentElement, x, keyframeIndex, attachEvents) {
        if (this.#cachedElements[iteration].keyframePoints[keyframeIndex]) {
            this.#cachedElements[iteration].keyframePoints[keyframeIndex].setAttribute('cx', x.toFixed(2));
            return;
        }
        const circle = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'circle', keyframeIndex <= 0 ? 'animation-endpoint' : 'animation-keyframe-point');
        circle.setAttribute('cx', x.toFixed(2));
        circle.setAttribute('cy', Options.AnimationHeight.toString());
        circle.style.stroke = this.#color;
        circle.setAttribute('r', (Options.AnimationMargin / 2).toString());
        circle.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.controlPoint('animations.keyframe').track({ drag: true })}`);
        circle.tabIndex = 0;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(circle, keyframeIndex <= 0 ? i18nString(UIStrings.animationEndpointSlider) :
            i18nString(UIStrings.animationKeyframeSlider));
        if (keyframeIndex <= 0) {
            circle.style.fill = this.#color;
        }
        this.#cachedElements[iteration].keyframePoints[keyframeIndex] = circle;
        if (!attachEvents) {
            return;
        }
        let eventType;
        if (keyframeIndex === 0) {
            eventType = "StartEndpointMove" /* Events.StartEndpointMove */;
        }
        else if (keyframeIndex === -1) {
            eventType = "FinishEndpointMove" /* Events.FinishEndpointMove */;
        }
        else {
            eventType = "KeyframeMove" /* Events.KeyframeMove */;
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
        const cache = this.#cachedElements[iteration].keyframeRender;
        if (!cache[keyframeIndex]) {
            const svg = bezier ? _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'path', 'animation-keyframe') :
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'g', 'animation-keyframe-step');
            cache[keyframeIndex] = svg;
        }
        const group = cache[keyframeIndex];
        group.tabIndex = 0;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(group, i18nString(UIStrings.sSlider, { PH1: this.#animationInternal.name() }));
        group.style.transform = 'translateX(' + leftDistance.toFixed(2) + 'px)';
        if (easing === 'linear') {
            group.style.fill = this.#color;
            const height = _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.BezierUI.Height;
            group.setAttribute('d', ['M', 0, height, 'L', 0, 5, 'L', width.toFixed(2), 5, 'L', width.toFixed(2), height, 'Z'].join(' '));
        }
        else if (bezier) {
            group.style.fill = this.#color;
            _ui_legacy_components_inline_editor_inline_editor_js__WEBPACK_IMPORTED_MODULE_4__.BezierUI.BezierUI.drawVelocityChart(bezier, group, width);
        }
        else {
            const stepFunction = _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_7__.StepTimingFunction.parse(easing);
            group.removeChildren();
            const offsetMap = { 'start': 0, 'middle': 0.5, 'end': 1 };
            if (stepFunction) {
                const offsetWeight = offsetMap[stepFunction.stepAtPosition];
                for (let i = 0; i < stepFunction.steps; i++) {
                    createStepLine(group, (i + offsetWeight) * width / stepFunction.steps, this.#color);
                }
            }
        }
    }
    redraw() {
        const maxWidth = this.#timeline.width() - Options.AnimationMargin;
        this.#svg.setAttribute('width', (maxWidth + 2 * Options.AnimationMargin).toFixed(2));
        this.#activeIntervalGroup.style.transform =
            'translateX(' + (this.delayOrStartTime() * this.#timeline.pixelTimeRatio()).toFixed(2) + 'px)';
        this.#nameElement.style.transform = 'translateX(' +
            (Math.max(this.delayOrStartTime(), 0) * this.#timeline.pixelTimeRatio() + Options.AnimationMargin).toFixed(2) +
            'px)';
        this.#nameElement.style.width = (this.duration() * this.#timeline.pixelTimeRatio()).toFixed(2) + 'px';
        this.drawDelayLine(this.#svg);
        if (this.#animationInternal.type() === 'CSSTransition') {
            this.renderTransition();
            return;
        }
        this.renderIteration(this.#activeIntervalGroup, 0);
        if (!this.#tailGroup) {
            this.#tailGroup = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(this.#activeIntervalGroup, 'g', 'animation-tail-iterations');
        }
        const iterationWidth = this.duration() * this.#timeline.pixelTimeRatio();
        let iteration;
        // Some iterations are getting rendered in an invisible area if the delay is negative.
        const invisibleAreaWidth = this.delayOrStartTime() < 0 ? -this.delayOrStartTime() * this.#timeline.pixelTimeRatio() : 0;
        for (iteration = 1; iteration < this.#animationInternal.source().iterations() &&
            iterationWidth * (iteration - 1) < invisibleAreaWidth + this.#timeline.width() &&
            (iterationWidth > 0 || this.#animationInternal.source().iterations() !== Infinity); iteration++) {
            this.renderIteration(this.#tailGroup, iteration);
        }
        while (iteration < this.#cachedElements.length) {
            const poppedElement = this.#cachedElements.pop();
            if (poppedElement && poppedElement.group) {
                poppedElement.group.remove();
            }
        }
    }
    renderTransition() {
        const activeIntervalGroup = this.#activeIntervalGroup;
        if (!this.#cachedElements[0]) {
            this.#cachedElements[0] = { animationLine: null, keyframePoints: {}, keyframeRender: {}, group: null };
        }
        this.drawAnimationLine(0, activeIntervalGroup);
        this.renderKeyframe(0, 0, activeIntervalGroup, Options.AnimationMargin, this.duration() * this.#timeline.pixelTimeRatio(), this.#animationInternal.source().easing());
        this.drawPoint(0, activeIntervalGroup, Options.AnimationMargin, 0, true);
        this.drawPoint(0, activeIntervalGroup, this.duration() * this.#timeline.pixelTimeRatio() + Options.AnimationMargin, -1, true);
    }
    renderIteration(parentElement, iteration) {
        if (!this.#cachedElements[iteration]) {
            this.#cachedElements[iteration] = {
                animationLine: null,
                keyframePoints: {},
                keyframeRender: {},
                group: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createSVGChild(parentElement, 'g'),
            };
        }
        const group = this.#cachedElements[iteration].group;
        if (!group) {
            return;
        }
        group.style.transform =
            'translateX(' + (iteration * this.duration() * this.#timeline.pixelTimeRatio()).toFixed(2) + 'px)';
        this.drawAnimationLine(iteration, group);
        if (this.#keyframes && this.#keyframes.length > 1) {
            for (let i = 0; i < this.#keyframes.length - 1; i++) {
                const leftDistance = this.offset(i) * this.duration() * this.#timeline.pixelTimeRatio() + Options.AnimationMargin;
                const width = this.duration() * (this.offset(i + 1) - this.offset(i)) * this.#timeline.pixelTimeRatio();
                this.renderKeyframe(iteration, i, group, leftDistance, width, this.#keyframes[i].easing());
                if (i || (!i && iteration === 0)) {
                    this.drawPoint(iteration, group, leftDistance, i, iteration === 0);
                }
            }
        }
        this.drawPoint(iteration, group, this.duration() * this.#timeline.pixelTimeRatio() + Options.AnimationMargin, -1, iteration === 0);
    }
    delayOrStartTime() {
        let delay = this.#animationInternal.delayOrStartTime();
        if (this.#mouseEventType === "AnimationDrag" /* Events.AnimationDrag */ || this.#mouseEventType === "StartEndpointMove" /* Events.StartEndpointMove */) {
            delay += this.#movementInMs;
        }
        return delay;
    }
    duration() {
        let duration = this.#animationInternal.iterationDuration();
        if (this.#mouseEventType === "FinishEndpointMove" /* Events.FinishEndpointMove */) {
            duration += this.#movementInMs;
        }
        else if (this.#mouseEventType === "StartEndpointMove" /* Events.StartEndpointMove */) {
            duration -= this.#movementInMs;
        }
        return Math.max(0, duration);
    }
    offset(i) {
        if (!this.#keyframes) {
            throw new Error('Unable to calculate offset; keyframes do not exist');
        }
        let offset = this.#keyframes[i].offsetAsNumber();
        if (this.#mouseEventType === "KeyframeMove" /* Events.KeyframeMove */ && i === this.#keyframeMoved) {
            console.assert(i > 0 && i < this.#keyframes.length - 1, 'First and last keyframe cannot be moved');
            offset += this.#movementInMs / this.#animationInternal.iterationDuration();
            offset = Math.max(offset, this.#keyframes[i - 1].offsetAsNumber());
            offset = Math.min(offset, this.#keyframes[i + 1].offsetAsNumber());
        }
        return offset;
    }
    mouseDown(mouseEventType, keyframeIndex, event) {
        const mouseEvent = event;
        if (mouseEvent.buttons === 2) {
            return false;
        }
        if (this.#svg.enclosingNodeOrSelfWithClass('animation-node-removed')) {
            return false;
        }
        this.#mouseEventType = mouseEventType;
        this.#keyframeMoved = keyframeIndex;
        this.#downMouseX = mouseEvent.clientX;
        event.consume(true);
        const viewManagerInstance = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ViewManager.ViewManager.instance();
        const animationLocation = viewManagerInstance.locationNameForViewId('animations');
        const elementsLocation = viewManagerInstance.locationNameForViewId('elements');
        // Prevents revealing the node if the animations and elements view share the same view location.
        // If they share the same view location, the animations view will change to the elements view when editing an animation
        if (this.#node && animationLocation !== elementsLocation) {
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(this.#node);
        }
        return true;
    }
    mouseMove(event) {
        const mouseEvent = event;
        this.setMovementAndRedraw((mouseEvent.clientX - (this.#downMouseX || 0)) / this.#timeline.pixelTimeRatio());
    }
    setMovementAndRedraw(movement) {
        this.#movementInMs = movement;
        if (this.delayOrStartTime() + this.duration() > this.#timeline.duration() * 0.8) {
            this.#timeline.setDuration(this.#timeline.duration() * 1.2);
        }
        this.redraw();
    }
    mouseUp(event) {
        const mouseEvent = event;
        this.#movementInMs = (mouseEvent.clientX - (this.#downMouseX || 0)) / this.#timeline.pixelTimeRatio();
        // Commit changes
        if (this.#mouseEventType === "KeyframeMove" /* Events.KeyframeMove */) {
            if (this.#keyframes && this.#keyframeMoved !== null && typeof this.#keyframeMoved !== 'undefined') {
                this.#keyframes[this.#keyframeMoved].setOffset(this.offset(this.#keyframeMoved));
            }
        }
        else {
            this.#animationInternal.setTiming(this.duration(), this.delayOrStartTime());
        }
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.animationPointDragged(this.#mouseEventType === "AnimationDrag" /* Events.AnimationDrag */ ? 0 /* Host.UserMetrics.AnimationPointDragType.AnimationDrag */ :
            this.#mouseEventType === "KeyframeMove" /* Events.KeyframeMove */ ? 1 /* Host.UserMetrics.AnimationPointDragType.KeyframeMove */ :
                this.#mouseEventType === "StartEndpointMove" /* Events.StartEndpointMove */ ?
                    2 /* Host.UserMetrics.AnimationPointDragType.StartEndpointMove */ :
                    this.#mouseEventType === "FinishEndpointMove" /* Events.FinishEndpointMove */ ?
                        3 /* Host.UserMetrics.AnimationPointDragType.FinishEndpointMove */ :
                        4 /* Host.UserMetrics.AnimationPointDragType.Other */);
        this.#movementInMs = 0;
        this.redraw();
        this.#mouseEventType = undefined;
        this.#downMouseX = undefined;
        this.#keyframeMoved = undefined;
    }
    keydownMove(mouseEventType, keyframeIndex, event) {
        const keyboardEvent = event;
        this.#mouseEventType = mouseEventType;
        this.#keyframeMoved = keyframeIndex;
        switch (keyboardEvent.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                this.#movementInMs = -this.#keyboardMovementRateMs;
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                this.#movementInMs = this.#keyboardMovementRateMs;
                break;
            default:
                return;
        }
        if (this.#mouseEventType === "KeyframeMove" /* Events.KeyframeMove */) {
            if (this.#keyframes && this.#keyframeMoved !== null) {
                this.#keyframes[this.#keyframeMoved].setOffset(this.offset(this.#keyframeMoved));
            }
        }
        else {
            this.#animationInternal.setTiming(this.duration(), this.delayOrStartTime());
        }
        this.setMovementAndRedraw(0);
        this.#mouseEventType = undefined;
        this.#keyframeMoved = undefined;
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
        void this.#animationInternal.remoteObjectPromise().then(showContextMenu);
        event.consume(true);
    }
}
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
//# sourceMappingURL=AnimationUI.js.map

/***/ }),

/***/ "./panels/animation/animationScreenshotPopover.css.js":
/*!************************************************************!*\
  !*** ./panels/animation/animationScreenshotPopover.css.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright (c) 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

img {
  max-height: 300px;
  border-radius: 2px;
}

.animation-progress {
  position: absolute;
  height: 2px;
  bottom: 0;
  left: 0;
  background: var(--legacy-selection-bg-color);
}

/*# sourceURL=animationScreenshotPopover.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);