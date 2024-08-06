"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_EventTimelineView_js"], {
"./panels/media/EventTimelineView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PlayerEventsTimeline: function() { return PlayerEventsTimeline; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TickingFlameChart.js */ "./panels/media/TickingFlameChart.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}



// Has to be a double, see https://v8.dev/blog/react-cliff
var NO_NORMALIZED_TIMESTAMP = -1.5;
var UIStrings = {
    /**
     *@description Title of the 'Playback Status' button
     */ playbackStatus: 'Playback Status',
    /**
     *@description Title of the 'Buffering Status' button
     */ bufferingStatus: 'Buffering Status'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/EventTimelineView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var PlayerEventsTimeline = /*#__PURE__*/ function(TickingFlameChart) {
    "use strict";
    _inherits(PlayerEventsTimeline, TickingFlameChart);
    var _super = _create_super(PlayerEventsTimeline);
    function PlayerEventsTimeline() {
        _class_call_check(this, PlayerEventsTimeline);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "normalizedTimestamp", void 0);
        _define_property(_assert_this_initialized(_this), "playbackStatusLastEvent", void 0);
        _define_property(_assert_this_initialized(_this), "audioBufferingStateEvent", void 0);
        _define_property(_assert_this_initialized(_this), "videoBufferingStateEvent", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.pane('timeline')));
        _this.normalizedTimestamp = NO_NORMALIZED_TIMESTAMP;
        _this.addGroup(i18nString(UIStrings.playbackStatus), 2);
        _this.addGroup(i18nString(UIStrings.bufferingStatus), 2); // video on top, audio on bottom
        _this.playbackStatusLastEvent = null;
        _this.audioBufferingStateEvent = null;
        _this.videoBufferingStateEvent = null;
        return _this;
    }
    _create_class(PlayerEventsTimeline, [
        {
            key: "ensureNoPreviousPlaybackEvent",
            value: function ensureNoPreviousPlaybackEvent(normalizedTime) {
                if (this.playbackStatusLastEvent !== null) {
                    this.playbackStatusLastEvent.endTime = normalizedTime;
                    this.playbackStatusLastEvent = null;
                }
            }
        },
        {
            /**
     * Playback events are {kPlay, kPause, kSuspended, kEnded, and kWebMediaPlayerDestroyed}
     * once destroyed, a player cannot recieve more events of any kind.
     */ key: "onPlaybackEvent",
            value: function onPlaybackEvent(event, normalizedTime) {
                switch(event.event){
                    case 'kPlay':
                        this.canTick = true;
                        this.ensureNoPreviousPlaybackEvent(normalizedTime);
                        // Disabled until Closure is gone.
                        // clang-format off
                        this.playbackStatusLastEvent = this.startEvent({
                            level: 0,
                            startTime: normalizedTime,
                            name: 'Play'
                        });
                        break;
                    case 'kPause':
                        // Don't change ticking state - the player is still active even during
                        // video pause. It may recieve buffering events, seeks, etc.
                        this.ensureNoPreviousPlaybackEvent(normalizedTime);
                        // Disabled until Closure is gone.
                        // clang-format off
                        this.playbackStatusLastEvent = this.startEvent({
                            level: 0,
                            startTime: normalizedTime,
                            name: 'Pause',
                            color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme["1"]
                        });
                        break;
                    case 'kWebMediaPlayerDestroyed':
                        this.canTick = false;
                        this.ensureNoPreviousPlaybackEvent(normalizedTime);
                        this.addMarker({
                            level: 1,
                            startTime: normalizedTime,
                            name: 'Destroyed',
                            color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme["4"]
                        });
                        break;
                    case 'kSuspended':
                        // Other event's can't happen during suspension or while the player is
                        // destroyed, so stop the ticking.
                        this.canTick = false;
                        this.ensureNoPreviousPlaybackEvent(normalizedTime);
                        // Disabled until Closure is gone.
                        // clang-format off
                        this.playbackStatusLastEvent = this.startEvent({
                            level: 1,
                            startTime: normalizedTime,
                            name: 'Suspended',
                            color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme["3"]
                        });
                        break;
                    case 'kEnded':
                        // Player ending can still have seeks & other events.
                        this.ensureNoPreviousPlaybackEvent(normalizedTime);
                        // Disabled until Closure is gone.
                        // clang-format off
                        this.playbackStatusLastEvent = this.startEvent({
                            level: 1,
                            startTime: normalizedTime,
                            name: 'Ended',
                            color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme["2"]
                        });
                        break;
                    default:
                        throw "_onPlaybackEvent cant handle ".concat(event.event);
                }
            }
        },
        {
            key: "bufferedEnough",
            value: function bufferedEnough(state) {
                return state['state'] === 'BUFFERING_HAVE_ENOUGH';
            }
        },
        {
            key: "onBufferingStatus",
            value: function onBufferingStatus(event, normalizedTime) {
                // No declarations inside the case labels.
                var audioState = null;
                var videoState = null;
                switch(event.event){
                    case 'kBufferingStateChanged':
                        // There are three allowed entries, audio, video, and pipeline.
                        // We only want the buffering for audio and video to be displayed.
                        // One event may have changes for a single type, or for both audio/video
                        // simultaneously.
                        // @ts-ignore
                        audioState = event.value['audio_buffering_state'];
                        // @ts-ignore
                        videoState = event.value['video_buffering_state'];
                        if (audioState) {
                            if (this.audioBufferingStateEvent !== null) {
                                this.audioBufferingStateEvent.endTime = normalizedTime;
                                this.audioBufferingStateEvent = null;
                            }
                            if (!this.bufferedEnough(audioState)) {
                                this.audioBufferingStateEvent = this.startEvent({
                                    level: 3,
                                    startTime: normalizedTime,
                                    name: 'Audio Buffering',
                                    color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.ColdColorScheme["1"]
                                });
                            }
                        }
                        if (videoState) {
                            if (this.videoBufferingStateEvent !== null) {
                                this.videoBufferingStateEvent.endTime = normalizedTime;
                                this.videoBufferingStateEvent = null;
                            }
                            if (!this.bufferedEnough(videoState)) {
                                this.videoBufferingStateEvent = this.startEvent({
                                    level: 2,
                                    startTime: normalizedTime,
                                    name: 'Video Buffering',
                                    color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.ColdColorScheme["0"]
                                });
                            }
                        }
                        break;
                    default:
                        throw "_onPlaybackEvent cant handle ".concat(event.event);
                }
            }
        },
        {
            key: "onEvent",
            value: function onEvent(event) {
                if (this.normalizedTimestamp === NO_NORMALIZED_TIMESTAMP) {
                    this.normalizedTimestamp = Number(event.timestamp);
                }
                var inMilliseconds = (Number(event.timestamp) - this.normalizedTimestamp) * 1000;
                switch(event.event){
                    case 'kPlay':
                    case 'kPause':
                    case 'kWebMediaPlayerDestroyed':
                    case 'kSuspended':
                    case 'kEnded':
                        return this.onPlaybackEvent(event, inMilliseconds);
                    case 'kBufferingStateChanged':
                        return this.onBufferingStatus(event, inMilliseconds);
                    default:
                }
            }
        }
    ]);
    return PlayerEventsTimeline;
} //# sourceMappingURL=EventTimelineView.js.map
(_TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.TickingFlameChart);


}),

}]);