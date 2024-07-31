"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_animation_AnimationModel_ts"],{

/***/ "./src/panels/animation/AnimationModel.ts":
/*!************************************************!*\
  !*** ./src/panels/animation/AnimationModel.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationDispatcher: () => (/* binding */ AnimationDispatcher),
/* harmony export */   AnimationEffect: () => (/* binding */ AnimationEffect),
/* harmony export */   AnimationGroup: () => (/* binding */ AnimationGroup),
/* harmony export */   AnimationImpl: () => (/* binding */ AnimationImpl),
/* harmony export */   AnimationModel: () => (/* binding */ AnimationModel),
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   KeyframeStyle: () => (/* binding */ KeyframeStyle),
/* harmony export */   KeyframesRule: () => (/* binding */ KeyframesRule),
/* harmony export */   ScreenshotCapture: () => (/* binding */ ScreenshotCapture)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationDOMNode.js */ "./src/panels/animation/AnimationDOMNode.ts");
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
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
var _AnimationModel_animationsById, _AnimationModel_pendingAnimations, _AnimationModel_screenshotCapture, _AnimationModel_enabled, _AnimationModel_flushPendingAnimations, _AnimationImpl_animationModel, _AnimationImpl_payloadInternal, _AnimationImpl_sourceInternal, _AnimationImpl_playStateInternal, _AnimationEffect_animationModel, _AnimationEffect_payload, _AnimationEffect_keyframesRuleInternal, _AnimationEffect_deferredNodeInternal, _KeyframesRule_payload, _KeyframesRule_keyframesInternal, _KeyframeStyle_payload, _KeyframeStyle_offsetInternal, _AnimationGroup_animationModel, _AnimationGroup_idInternal, _AnimationGroup_scrollNodeInternal, _AnimationGroup_animationsInternal, _AnimationGroup_pausedInternal, _AnimationGroup_screenshotImages, _AnimationDispatcher_animationModel, _ScreenshotCapture_requests, _ScreenshotCapture_screenCaptureModel, _ScreenshotCapture_animationModel, _ScreenshotCapture_stopTimer, _ScreenshotCapture_endTime, _ScreenshotCapture_capturing;




function shouldGroupAnimations(firstAnimation, anim) {
    const firstAnimationTimeline = firstAnimation.viewOrScrollTimeline();
    const animationTimeline = anim.viewOrScrollTimeline();
    if (firstAnimationTimeline) {
        // This is a SDA group so check whether the animation's
        // scroll container and scroll axis is the same with the first animation.
        return Boolean(animationTimeline && firstAnimationTimeline.sourceNodeId === animationTimeline.sourceNodeId &&
            firstAnimationTimeline.axis === animationTimeline.axis);
    }
    // This is a non-SDA group so check whether the coming animation
    // is a time based one too and if so, compare their start times.
    return !animationTimeline && firstAnimation.startTime() === anim.startTime();
}
class AnimationModel extends _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel {
    constructor(target) {
        super(target);
        Object.defineProperty(this, "runtimeModel", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "agent", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _AnimationModel_animationsById.set(this, void 0);
        Object.defineProperty(this, "animationGroups", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _AnimationModel_pendingAnimations.set(this, void 0);
        Object.defineProperty(this, "playbackRate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _AnimationModel_screenshotCapture.set(this, void 0);
        _AnimationModel_enabled.set(this, void 0);
        _AnimationModel_flushPendingAnimations.set(this, void 0);
        this.runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        this.agent = target.animationAgent();
        target.registerAnimationDispatcher(new AnimationDispatcher(this));
        __classPrivateFieldSet(this, _AnimationModel_animationsById, new Map(), "f");
        this.animationGroups = new Map();
        __classPrivateFieldSet(this, _AnimationModel_pendingAnimations, new Set(), "f");
        this.playbackRate = 1;
        const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel);
        resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, this.reset, this);
        const screenCaptureModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ScreenCaptureModel.ScreenCaptureModel);
        if (screenCaptureModel) {
            __classPrivateFieldSet(this, _AnimationModel_screenshotCapture, new ScreenshotCapture(this, screenCaptureModel), "f");
        }
        __classPrivateFieldSet(this, _AnimationModel_flushPendingAnimations, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Debouncer.debounce(() => {
            while (__classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").size) {
                this.matchExistingGroups(this.createGroupFromPendingAnimations());
            }
        }, 100), "f");
    }
    reset() {
        __classPrivateFieldGet(this, _AnimationModel_animationsById, "f").clear();
        this.animationGroups.clear();
        __classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").clear();
        this.dispatchEventToListeners(Events.ModelReset);
    }
    async devicePixelRatio() {
        const evaluateResult = await this.target().runtimeAgent().invoke_evaluate({ expression: 'window.devicePixelRatio' });
        if (evaluateResult?.result.type === 'number') {
            return evaluateResult?.result.value ?? 1;
        }
        return 1;
    }
    animationCanceled(id) {
        __classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").delete(id);
    }
    async animationUpdated(payload) {
        let foundAnimationGroup;
        let foundAnimation;
        for (const animationGroup of this.animationGroups.values()) {
            foundAnimation = animationGroup.animations().find(animation => animation.id() === payload.id);
            if (foundAnimation) {
                foundAnimationGroup = animationGroup;
                break;
            }
        }
        if (!foundAnimation || !foundAnimationGroup) {
            return;
        }
        await foundAnimation.setPayload(payload);
        this.dispatchEventToListeners(Events.AnimationGroupUpdated, foundAnimationGroup);
    }
    async animationStarted(payload) {
        // We are not interested in animations without effect or target.
        if (!payload.source || !payload.source.backendNodeId) {
            return;
        }
        const animation = await AnimationImpl.parsePayload(this, payload);
        // Ignore Web Animations custom effects & groups.
        const keyframesRule = animation.source().keyframesRule();
        if (animation.type() === 'WebAnimation' && keyframesRule && keyframesRule.keyframes().length === 0) {
            __classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").delete(animation.id());
        }
        else {
            __classPrivateFieldGet(this, _AnimationModel_animationsById, "f").set(animation.id(), animation);
            __classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").add(animation.id());
        }
        __classPrivateFieldGet(this, _AnimationModel_flushPendingAnimations, "f").call(this);
    }
    matchExistingGroups(incomingGroup) {
        let matchedGroup = null;
        for (const group of this.animationGroups.values()) {
            if (group.matches(incomingGroup)) {
                matchedGroup = group;
                group.rebaseTo(incomingGroup);
                break;
            }
            if (group.shouldInclude(incomingGroup)) {
                matchedGroup = group;
                group.appendAnimations(incomingGroup.animations());
                break;
            }
        }
        if (!matchedGroup) {
            this.animationGroups.set(incomingGroup.id(), incomingGroup);
            if (__classPrivateFieldGet(this, _AnimationModel_screenshotCapture, "f")) {
                __classPrivateFieldGet(this, _AnimationModel_screenshotCapture, "f").captureScreenshots(incomingGroup.finiteDuration(), incomingGroup.screenshotsInternal);
            }
            this.dispatchEventToListeners(Events.AnimationGroupStarted, incomingGroup);
        }
        else {
            this.dispatchEventToListeners(Events.AnimationGroupUpdated, matchedGroup);
        }
        return Boolean(matchedGroup);
    }
    createGroupFromPendingAnimations() {
        console.assert(__classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").size > 0);
        const firstAnimationId = __classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").values().next().value;
        __classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f").delete(firstAnimationId);
        const firstAnimation = __classPrivateFieldGet(this, _AnimationModel_animationsById, "f").get(firstAnimationId);
        if (!firstAnimation) {
            throw new Error('Unable to locate first animation');
        }
        const groupedAnimations = [firstAnimation];
        const remainingAnimations = new Set();
        for (const id of __classPrivateFieldGet(this, _AnimationModel_pendingAnimations, "f")) {
            const anim = __classPrivateFieldGet(this, _AnimationModel_animationsById, "f").get(id);
            if (shouldGroupAnimations(firstAnimation, anim)) {
                groupedAnimations.push(anim);
            }
            else {
                remainingAnimations.add(id);
            }
        }
        __classPrivateFieldSet(this, _AnimationModel_pendingAnimations, remainingAnimations, "f");
        // Show the first starting animation at the top of the animations of the animation group.
        groupedAnimations.sort((anim1, anim2) => anim1.startTime() - anim2.startTime());
        return new AnimationGroup(this, firstAnimationId, groupedAnimations);
    }
    setPlaybackRate(playbackRate) {
        this.playbackRate = playbackRate;
        void this.agent.invoke_setPlaybackRate({ playbackRate });
    }
    releaseAnimations(animations) {
        void this.agent.invoke_releaseAnimations({ animations });
    }
    async suspendModel() {
        this.reset();
        await this.agent.invoke_disable();
    }
    async resumeModel() {
        if (!__classPrivateFieldGet(this, _AnimationModel_enabled, "f")) {
            return;
        }
        await this.agent.invoke_enable();
    }
    async ensureEnabled() {
        if (__classPrivateFieldGet(this, _AnimationModel_enabled, "f")) {
            return;
        }
        await this.agent.invoke_enable();
        __classPrivateFieldSet(this, _AnimationModel_enabled, true, "f");
    }
}
_AnimationModel_animationsById = new WeakMap(), _AnimationModel_pendingAnimations = new WeakMap(), _AnimationModel_screenshotCapture = new WeakMap(), _AnimationModel_enabled = new WeakMap(), _AnimationModel_flushPendingAnimations = new WeakMap();
var Events;
(function (Events) {
    Events["AnimationGroupStarted"] = "AnimationGroupStarted";
    Events["AnimationGroupUpdated"] = "AnimationGroupUpdated";
    Events["ModelReset"] = "ModelReset";
})(Events || (Events = {}));
class AnimationImpl {
    constructor(animationModel) {
        _AnimationImpl_animationModel.set(this, void 0);
        _AnimationImpl_payloadInternal.set(this, void 0); // Assertion is safe because only way to create `AnimationImpl` is to use `parsePayload` which calls `setPayload` and sets the value.
        _AnimationImpl_sourceInternal.set(this, void 0); // Assertion is safe because only way to create `AnimationImpl` is to use `parsePayload` which calls `setPayload` and sets the value.
        _AnimationImpl_playStateInternal.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationImpl_animationModel, animationModel, "f");
    }
    static async parsePayload(animationModel, payload) {
        const animation = new AnimationImpl(animationModel);
        await animation.setPayload(payload);
        return animation;
    }
    async setPayload(payload) {
        // TODO(b/40929569): Remove normalizing by devicePixelRatio after the attached bug is resolved.
        if (payload.viewOrScrollTimeline) {
            const devicePixelRatio = await __classPrivateFieldGet(this, _AnimationImpl_animationModel, "f").devicePixelRatio();
            if (payload.viewOrScrollTimeline.startOffset) {
                payload.viewOrScrollTimeline.startOffset /= devicePixelRatio;
            }
            if (payload.viewOrScrollTimeline.endOffset) {
                payload.viewOrScrollTimeline.endOffset /= devicePixelRatio;
            }
        }
        __classPrivateFieldSet(this, _AnimationImpl_payloadInternal, payload, "f");
        if (__classPrivateFieldGet(this, _AnimationImpl_sourceInternal, "f") && payload.source) {
            __classPrivateFieldGet(this, _AnimationImpl_sourceInternal, "f").setPayload(payload.source);
        }
        else if (!__classPrivateFieldGet(this, _AnimationImpl_sourceInternal, "f") && payload.source) {
            __classPrivateFieldSet(this, _AnimationImpl_sourceInternal, new AnimationEffect(__classPrivateFieldGet(this, _AnimationImpl_animationModel, "f"), payload.source), "f");
        }
    }
    // `startTime` and `duration` is represented as the
    // percentage of the view timeline range that starts at `startOffset`px
    // from the scroll container and ends at `endOffset`px of the scroll container.
    // This takes a percentage of the timeline range and returns the absolute
    // pixels values as a scroll offset of the scroll container.
    percentageToPixels(percentage, viewOrScrollTimeline) {
        const { startOffset, endOffset } = viewOrScrollTimeline;
        if (startOffset === undefined || endOffset === undefined) {
            // We don't expect this situation to occur since after an animation is started
            // we expect the scroll offsets to be resolved and provided correctly. If `startOffset`
            // or `endOffset` is not provided in a viewOrScrollTimeline; we can assume that there is a bug here
            // so it's fine to throw an error.
            throw new Error('startOffset or endOffset does not exist in viewOrScrollTimeline');
        }
        return (endOffset - startOffset) * (percentage / 100);
    }
    viewOrScrollTimeline() {
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").viewOrScrollTimeline;
    }
    id() {
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").id;
    }
    name() {
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").name;
    }
    paused() {
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").pausedState;
    }
    playState() {
        return __classPrivateFieldGet(this, _AnimationImpl_playStateInternal, "f") || __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").playState;
    }
    setPlayState(playState) {
        __classPrivateFieldSet(this, _AnimationImpl_playStateInternal, playState, "f");
    }
    playbackRate() {
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").playbackRate;
    }
    // For scroll driven animations, it returns the pixel offset in the scroll container
    // For time animations, it returns milliseconds.
    startTime() {
        const viewOrScrollTimeline = this.viewOrScrollTimeline();
        if (viewOrScrollTimeline) {
            return this.percentageToPixels(this.playbackRate() > 0 ? __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").startTime : 100 - __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").startTime, viewOrScrollTimeline) +
                (this.viewOrScrollTimeline()?.startOffset ?? 0);
        }
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").startTime;
    }
    // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
    // For time animations, it returns milliseconds.
    iterationDuration() {
        const viewOrScrollTimeline = this.viewOrScrollTimeline();
        if (viewOrScrollTimeline) {
            return this.percentageToPixels(this.source().duration(), viewOrScrollTimeline);
        }
        return this.source().duration();
    }
    // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
    // For time animations, it returns milliseconds.
    endTime() {
        if (!this.source().iterations) {
            return Infinity;
        }
        if (this.viewOrScrollTimeline()) {
            return this.startTime() + this.iterationDuration() * this.source().iterations();
        }
        return this.startTime() + this.source().delay() + this.source().duration() * this.source().iterations() +
            this.source().endDelay();
    }
    // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
    // For time animations, it returns milliseconds.
    finiteDuration() {
        const iterations = Math.min(this.source().iterations(), 3);
        if (this.viewOrScrollTimeline()) {
            return this.iterationDuration() * iterations;
        }
        return this.source().delay() + this.source().duration() * iterations;
    }
    // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
    // For time animations, it returns milliseconds.
    currentTime() {
        const viewOrScrollTimeline = this.viewOrScrollTimeline();
        if (viewOrScrollTimeline) {
            return this.percentageToPixels(__classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").currentTime, viewOrScrollTimeline);
        }
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").currentTime;
    }
    source() {
        return __classPrivateFieldGet(this, _AnimationImpl_sourceInternal, "f");
    }
    type() {
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").type;
    }
    overlaps(animation) {
        // Infinite animations
        if (!this.source().iterations() || !animation.source().iterations()) {
            return true;
        }
        const firstAnimation = this.startTime() < animation.startTime() ? this : animation;
        const secondAnimation = firstAnimation === this ? animation : this;
        return firstAnimation.endTime() >= secondAnimation.startTime();
    }
    // Utility method for returning `delay` for time based animations
    // and `startTime` in pixels for scroll driven animations. It is used to
    // find the exact starting time of the first keyframe for both cases.
    delayOrStartTime() {
        if (this.viewOrScrollTimeline()) {
            return this.startTime();
        }
        return this.source().delay();
    }
    setTiming(duration, delay) {
        void __classPrivateFieldGet(this, _AnimationImpl_sourceInternal, "f").node().then(node => {
            if (!node) {
                throw new Error('Unable to find node');
            }
            this.updateNodeStyle(duration, delay, node);
        });
        __classPrivateFieldGet(this, _AnimationImpl_sourceInternal, "f").durationInternal = duration;
        __classPrivateFieldGet(this, _AnimationImpl_sourceInternal, "f").delayInternal = delay;
        void __classPrivateFieldGet(this, _AnimationImpl_animationModel, "f").agent.invoke_setTiming({ animationId: this.id(), duration, delay });
    }
    updateNodeStyle(duration, delay, node) {
        let animationPrefix;
        if (this.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Animation.AnimationType.CSSTransition) {
            animationPrefix = 'transition-';
        }
        else if (this.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Animation.AnimationType.CSSAnimation) {
            animationPrefix = 'animation-';
        }
        else {
            return;
        }
        if (!node.id) {
            throw new Error('Node has no id');
        }
        const cssModel = node.domModel().cssModel();
        cssModel.setEffectivePropertyValueForNode(node.id, animationPrefix + 'duration', duration + 'ms');
        cssModel.setEffectivePropertyValueForNode(node.id, animationPrefix + 'delay', delay + 'ms');
    }
    async remoteObjectPromise() {
        const payload = await __classPrivateFieldGet(this, _AnimationImpl_animationModel, "f").agent.invoke_resolveAnimation({ animationId: this.id() });
        if (!payload) {
            return null;
        }
        return __classPrivateFieldGet(this, _AnimationImpl_animationModel, "f").runtimeModel.createRemoteObject(payload.remoteObject);
    }
    cssId() {
        return __classPrivateFieldGet(this, _AnimationImpl_payloadInternal, "f").cssId || '';
    }
}
_AnimationImpl_animationModel = new WeakMap(), _AnimationImpl_payloadInternal = new WeakMap(), _AnimationImpl_sourceInternal = new WeakMap(), _AnimationImpl_playStateInternal = new WeakMap();
class AnimationEffect {
    constructor(animationModel, payload) {
        _AnimationEffect_animationModel.set(this, void 0);
        _AnimationEffect_payload.set(this, void 0); // Assertion is safe because `setPayload` call in `constructor` sets the value.
        Object.defineProperty(this, "delayInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); // Assertion is safe because `setPayload` call in `constructor` sets the value.
        Object.defineProperty(this, "durationInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        }); // Assertion is safe because `setPayload` call in `constructor` sets the value.
        _AnimationEffect_keyframesRuleInternal.set(this, void 0);
        _AnimationEffect_deferredNodeInternal.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationEffect_animationModel, animationModel, "f");
        this.setPayload(payload);
    }
    setPayload(payload) {
        __classPrivateFieldSet(this, _AnimationEffect_payload, payload, "f");
        if (!__classPrivateFieldGet(this, _AnimationEffect_keyframesRuleInternal, "f") && payload.keyframesRule) {
            __classPrivateFieldSet(this, _AnimationEffect_keyframesRuleInternal, new KeyframesRule(payload.keyframesRule), "f");
        }
        else if (__classPrivateFieldGet(this, _AnimationEffect_keyframesRuleInternal, "f") && payload.keyframesRule) {
            __classPrivateFieldGet(this, _AnimationEffect_keyframesRuleInternal, "f").setPayload(payload.keyframesRule);
        }
        this.delayInternal = payload.delay;
        this.durationInternal = payload.duration;
    }
    delay() {
        return this.delayInternal;
    }
    endDelay() {
        return __classPrivateFieldGet(this, _AnimationEffect_payload, "f").endDelay;
    }
    iterations() {
        // Animations with zero duration, zero delays and infinite iterations can't be shown.
        if (!this.delay() && !this.endDelay() && !this.duration()) {
            return 0;
        }
        return __classPrivateFieldGet(this, _AnimationEffect_payload, "f").iterations || Infinity;
    }
    duration() {
        return this.durationInternal;
    }
    direction() {
        return __classPrivateFieldGet(this, _AnimationEffect_payload, "f").direction;
    }
    fill() {
        return __classPrivateFieldGet(this, _AnimationEffect_payload, "f").fill;
    }
    node() {
        if (!__classPrivateFieldGet(this, _AnimationEffect_deferredNodeInternal, "f")) {
            __classPrivateFieldSet(this, _AnimationEffect_deferredNodeInternal, new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode(__classPrivateFieldGet(this, _AnimationEffect_animationModel, "f").target(), this.backendNodeId()), "f");
        }
        return __classPrivateFieldGet(this, _AnimationEffect_deferredNodeInternal, "f").resolvePromise();
    }
    deferredNode() {
        return new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode(__classPrivateFieldGet(this, _AnimationEffect_animationModel, "f").target(), this.backendNodeId());
    }
    backendNodeId() {
        return __classPrivateFieldGet(this, _AnimationEffect_payload, "f").backendNodeId;
    }
    keyframesRule() {
        return __classPrivateFieldGet(this, _AnimationEffect_keyframesRuleInternal, "f") || null;
    }
    easing() {
        return __classPrivateFieldGet(this, _AnimationEffect_payload, "f").easing;
    }
}
_AnimationEffect_animationModel = new WeakMap(), _AnimationEffect_payload = new WeakMap(), _AnimationEffect_keyframesRuleInternal = new WeakMap(), _AnimationEffect_deferredNodeInternal = new WeakMap();
class KeyframesRule {
    constructor(payload) {
        _KeyframesRule_payload.set(this, void 0); // Assertion is safe because `setPayload` call in `constructor` sets the value.;
        _KeyframesRule_keyframesInternal.set(this, void 0); // Assertion is safe because `setPayload` call in `constructor` sets the value.;
        this.setPayload(payload);
    }
    setPayload(payload) {
        __classPrivateFieldSet(this, _KeyframesRule_payload, payload, "f");
        if (!__classPrivateFieldGet(this, _KeyframesRule_keyframesInternal, "f")) {
            __classPrivateFieldSet(this, _KeyframesRule_keyframesInternal, __classPrivateFieldGet(this, _KeyframesRule_payload, "f").keyframes.map(keyframeStyle => new KeyframeStyle(keyframeStyle)), "f");
        }
        else {
            __classPrivateFieldGet(this, _KeyframesRule_payload, "f").keyframes.forEach((keyframeStyle, index) => {
                __classPrivateFieldGet(this, _KeyframesRule_keyframesInternal, "f")[index]?.setPayload(keyframeStyle);
            });
        }
    }
    name() {
        return __classPrivateFieldGet(this, _KeyframesRule_payload, "f").name;
    }
    keyframes() {
        return __classPrivateFieldGet(this, _KeyframesRule_keyframesInternal, "f");
    }
}
_KeyframesRule_payload = new WeakMap(), _KeyframesRule_keyframesInternal = new WeakMap();
class KeyframeStyle {
    constructor(payload) {
        _KeyframeStyle_payload.set(this, void 0); // Assertion is safe because `setPayload` call in `constructor` sets the value.
        _KeyframeStyle_offsetInternal.set(this, void 0); // Assertion is safe because `setPayload` call in `constructor` sets the value.
        this.setPayload(payload);
    }
    setPayload(payload) {
        __classPrivateFieldSet(this, _KeyframeStyle_payload, payload, "f");
        __classPrivateFieldSet(this, _KeyframeStyle_offsetInternal, payload.offset, "f");
    }
    offset() {
        return __classPrivateFieldGet(this, _KeyframeStyle_offsetInternal, "f");
    }
    setOffset(offset) {
        __classPrivateFieldSet(this, _KeyframeStyle_offsetInternal, offset * 100 + '%', "f");
    }
    offsetAsNumber() {
        return parseFloat(__classPrivateFieldGet(this, _KeyframeStyle_offsetInternal, "f")) / 100;
    }
    easing() {
        return __classPrivateFieldGet(this, _KeyframeStyle_payload, "f").easing;
    }
}
_KeyframeStyle_payload = new WeakMap(), _KeyframeStyle_offsetInternal = new WeakMap();
class AnimationGroup {
    constructor(animationModel, id, animations) {
        _AnimationGroup_animationModel.set(this, void 0);
        _AnimationGroup_idInternal.set(this, void 0);
        _AnimationGroup_scrollNodeInternal.set(this, void 0);
        _AnimationGroup_animationsInternal.set(this, void 0);
        _AnimationGroup_pausedInternal.set(this, void 0);
        Object.defineProperty(this, "screenshotsInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _AnimationGroup_screenshotImages.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationGroup_animationModel, animationModel, "f");
        __classPrivateFieldSet(this, _AnimationGroup_idInternal, id, "f");
        __classPrivateFieldSet(this, _AnimationGroup_animationsInternal, animations, "f");
        __classPrivateFieldSet(this, _AnimationGroup_pausedInternal, false, "f");
        this.screenshotsInternal = [];
        __classPrivateFieldSet(this, _AnimationGroup_screenshotImages, [], "f");
    }
    isScrollDriven() {
        return Boolean(__classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f")[0]?.viewOrScrollTimeline());
    }
    id() {
        return __classPrivateFieldGet(this, _AnimationGroup_idInternal, "f");
    }
    animations() {
        return __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f");
    }
    release() {
        __classPrivateFieldGet(this, _AnimationGroup_animationModel, "f").animationGroups.delete(this.id());
        __classPrivateFieldGet(this, _AnimationGroup_animationModel, "f").releaseAnimations(this.animationIds());
    }
    animationIds() {
        function extractId(animation) {
            return animation.id();
        }
        return __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f").map(extractId);
    }
    startTime() {
        return __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f")[0].startTime();
    }
    // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
    // For time animations, it returns milliseconds.
    groupDuration() {
        let duration = 0;
        for (const anim of __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f")) {
            duration = Math.max(duration, anim.delayOrStartTime() + anim.iterationDuration());
        }
        return duration;
    }
    // For scroll driven animations, it returns the duration in pixels (i.e. after how many pixels of scroll the animation is going to end)
    // For time animations, it returns milliseconds.
    finiteDuration() {
        let maxDuration = 0;
        for (let i = 0; i < __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f").length; ++i) {
            maxDuration = Math.max(maxDuration, __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f")[i].finiteDuration());
        }
        return maxDuration;
    }
    scrollOrientation() {
        const timeline = __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f")[0]?.viewOrScrollTimeline();
        if (!timeline) {
            return null;
        }
        return timeline.axis;
    }
    async scrollNode() {
        if (__classPrivateFieldGet(this, _AnimationGroup_scrollNodeInternal, "f")) {
            return __classPrivateFieldGet(this, _AnimationGroup_scrollNodeInternal, "f");
        }
        if (!this.isScrollDriven()) {
            return null;
        }
        const sourceNodeId = __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f")[0]?.viewOrScrollTimeline()?.sourceNodeId;
        if (!sourceNodeId) {
            return null;
        }
        const deferredScrollNode = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode(__classPrivateFieldGet(this, _AnimationGroup_animationModel, "f").target(), sourceNodeId);
        const scrollNode = await deferredScrollNode.resolvePromise();
        if (!scrollNode) {
            return null;
        }
        __classPrivateFieldSet(this, _AnimationGroup_scrollNodeInternal, new _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_3__.AnimationDOMNode(scrollNode), "f");
        return __classPrivateFieldGet(this, _AnimationGroup_scrollNodeInternal, "f");
    }
    seekTo(currentTime) {
        void __classPrivateFieldGet(this, _AnimationGroup_animationModel, "f").agent.invoke_seekAnimations({ animations: this.animationIds(), currentTime });
    }
    paused() {
        return __classPrivateFieldGet(this, _AnimationGroup_pausedInternal, "f");
    }
    togglePause(paused) {
        if (paused === __classPrivateFieldGet(this, _AnimationGroup_pausedInternal, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _AnimationGroup_pausedInternal, paused, "f");
        void __classPrivateFieldGet(this, _AnimationGroup_animationModel, "f").agent.invoke_setPaused({ animations: this.animationIds(), paused });
    }
    currentTimePromise() {
        let longestAnim = null;
        for (const anim of __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f")) {
            if (!longestAnim || anim.endTime() > longestAnim.endTime()) {
                longestAnim = anim;
            }
        }
        if (!longestAnim) {
            throw new Error('No longest animation found');
        }
        return __classPrivateFieldGet(this, _AnimationGroup_animationModel, "f").agent.invoke_getCurrentTime({ id: longestAnim.id() })
            .then(({ currentTime }) => currentTime || 0);
    }
    matches(group) {
        function extractId(anim) {
            const timelineId = (anim.viewOrScrollTimeline()?.sourceNodeId ?? '') + (anim.viewOrScrollTimeline()?.axis ?? '');
            const regularId = anim.type() === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Animation.AnimationType.WebAnimation ? anim.type() + anim.id() : anim.cssId();
            return regularId + timelineId;
        }
        if (__classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f").length !== __classPrivateFieldGet(group, _AnimationGroup_animationsInternal, "f").length) {
            return false;
        }
        const left = __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f").map(extractId).sort();
        const right = __classPrivateFieldGet(group, _AnimationGroup_animationsInternal, "f").map(extractId).sort();
        for (let i = 0; i < left.length; i++) {
            if (left[i] !== right[i]) {
                return false;
            }
        }
        return true;
    }
    shouldInclude(group) {
        // We want to include the animations coming from the incoming group
        // inside this group if they were to be grouped if the events came at the same time.
        const [firstIncomingAnimation] = __classPrivateFieldGet(group, _AnimationGroup_animationsInternal, "f");
        const [firstAnimation] = __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f");
        return shouldGroupAnimations(firstAnimation, firstIncomingAnimation);
    }
    appendAnimations(animations) {
        __classPrivateFieldGet(this, _AnimationGroup_animationsInternal, "f").push(...animations);
    }
    rebaseTo(group) {
        __classPrivateFieldGet(this, _AnimationGroup_animationModel, "f").releaseAnimations(this.animationIds());
        __classPrivateFieldSet(this, _AnimationGroup_animationsInternal, __classPrivateFieldGet(group, _AnimationGroup_animationsInternal, "f"), "f");
        __classPrivateFieldSet(this, _AnimationGroup_scrollNodeInternal, undefined, "f");
    }
    screenshots() {
        for (let i = 0; i < this.screenshotsInternal.length; ++i) {
            const image = new Image();
            image.src = 'data:image/jpeg;base64,' + this.screenshotsInternal[i];
            __classPrivateFieldGet(this, _AnimationGroup_screenshotImages, "f").push(image);
        }
        this.screenshotsInternal = [];
        return __classPrivateFieldGet(this, _AnimationGroup_screenshotImages, "f");
    }
}
_AnimationGroup_animationModel = new WeakMap(), _AnimationGroup_idInternal = new WeakMap(), _AnimationGroup_scrollNodeInternal = new WeakMap(), _AnimationGroup_animationsInternal = new WeakMap(), _AnimationGroup_pausedInternal = new WeakMap(), _AnimationGroup_screenshotImages = new WeakMap();
class AnimationDispatcher {
    constructor(animationModel) {
        _AnimationDispatcher_animationModel.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationDispatcher_animationModel, animationModel, "f");
    }
    animationCreated(_event) {
        // Previously this event was used to batch the animations into groups
        // and we were waiting for animationStarted events to be sent for
        // all the created animations and until then we weren't creating any
        // groups. This was allowing us to not miss any animations that were
        // going to be in the same group. However, now we're not using this event
        // to do batching and instead:
        // * We debounce the flush calls so that if the animationStarted events
        // for the same animation group come in different times; we create one
        // group for them.
        // * Even though an animation group is created and rendered for some animations
        // that have the same startTime (or same timeline & scroll axis for SDAs), now
        // whenever an `animationStarted` event comes we check whether there is a group
        // we can add the related animation. If so, we add it and emit `animationGroupUpdated`
        // event. So that, all the animations that were supposed to be in the same group
        // will be in the same group.
    }
    animationCanceled({ id }) {
        __classPrivateFieldGet(this, _AnimationDispatcher_animationModel, "f").animationCanceled(id);
    }
    animationStarted({ animation }) {
        void __classPrivateFieldGet(this, _AnimationDispatcher_animationModel, "f").animationStarted(animation);
    }
    animationUpdated({ animation }) {
        void __classPrivateFieldGet(this, _AnimationDispatcher_animationModel, "f").animationUpdated(animation);
    }
}
_AnimationDispatcher_animationModel = new WeakMap();
class ScreenshotCapture {
    constructor(animationModel, screenCaptureModel) {
        _ScreenshotCapture_requests.set(this, void 0);
        _ScreenshotCapture_screenCaptureModel.set(this, void 0);
        _ScreenshotCapture_animationModel.set(this, void 0);
        _ScreenshotCapture_stopTimer.set(this, void 0);
        _ScreenshotCapture_endTime.set(this, void 0);
        _ScreenshotCapture_capturing.set(this, void 0);
        __classPrivateFieldSet(this, _ScreenshotCapture_requests, [], "f");
        __classPrivateFieldSet(this, _ScreenshotCapture_screenCaptureModel, screenCaptureModel, "f");
        __classPrivateFieldSet(this, _ScreenshotCapture_animationModel, animationModel, "f");
        __classPrivateFieldGet(this, _ScreenshotCapture_animationModel, "f").addEventListener(Events.ModelReset, this.stopScreencast, this);
    }
    captureScreenshots(duration, screenshots) {
        const screencastDuration = Math.min(duration / __classPrivateFieldGet(this, _ScreenshotCapture_animationModel, "f").playbackRate, 3000);
        const endTime = screencastDuration + window.performance.now();
        __classPrivateFieldGet(this, _ScreenshotCapture_requests, "f").push({ endTime: endTime, screenshots: screenshots });
        if (!__classPrivateFieldGet(this, _ScreenshotCapture_endTime, "f") || endTime > __classPrivateFieldGet(this, _ScreenshotCapture_endTime, "f")) {
            clearTimeout(__classPrivateFieldGet(this, _ScreenshotCapture_stopTimer, "f"));
            __classPrivateFieldSet(this, _ScreenshotCapture_stopTimer, window.setTimeout(this.stopScreencast.bind(this), screencastDuration), "f");
            __classPrivateFieldSet(this, _ScreenshotCapture_endTime, endTime, "f");
        }
        if (__classPrivateFieldGet(this, _ScreenshotCapture_capturing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ScreenshotCapture_capturing, true, "f");
        __classPrivateFieldGet(this, _ScreenshotCapture_screenCaptureModel, "f").startScreencast(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.Page.StartScreencastRequestFormat.Jpeg, 80, undefined, 300, 2, this.screencastFrame.bind(this), _visible => { });
    }
    screencastFrame(base64Data, _metadata) {
        function isAnimating(request) {
            return request.endTime >= now;
        }
        if (!__classPrivateFieldGet(this, _ScreenshotCapture_capturing, "f")) {
            return;
        }
        const now = window.performance.now();
        __classPrivateFieldSet(this, _ScreenshotCapture_requests, __classPrivateFieldGet(this, _ScreenshotCapture_requests, "f").filter(isAnimating), "f");
        for (const request of __classPrivateFieldGet(this, _ScreenshotCapture_requests, "f")) {
            request.screenshots.push(base64Data);
        }
    }
    stopScreencast() {
        if (!__classPrivateFieldGet(this, _ScreenshotCapture_capturing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _ScreenshotCapture_stopTimer, undefined, "f");
        __classPrivateFieldSet(this, _ScreenshotCapture_endTime, undefined, "f");
        __classPrivateFieldSet(this, _ScreenshotCapture_requests, [], "f");
        __classPrivateFieldSet(this, _ScreenshotCapture_capturing, false, "f");
        __classPrivateFieldGet(this, _ScreenshotCapture_screenCaptureModel, "f").stopScreencast();
    }
}
_ScreenshotCapture_requests = new WeakMap(), _ScreenshotCapture_screenCaptureModel = new WeakMap(), _ScreenshotCapture_animationModel = new WeakMap(), _ScreenshotCapture_stopTimer = new WeakMap(), _ScreenshotCapture_endTime = new WeakMap(), _ScreenshotCapture_capturing = new WeakMap();
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(AnimationModel, { capabilities: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Capability.DOM, autostart: false });


/***/ })

}]);