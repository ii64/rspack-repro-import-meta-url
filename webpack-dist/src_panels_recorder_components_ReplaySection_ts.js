"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_ReplaySection_ts"],{

/***/ "./src/panels/recorder/components/ReplaySection.ts":
/*!*********************************************************!*\
  !*** ./src/panels/recorder/components/ReplaySection.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySection: () => (/* binding */ ReplaySection),
/* harmony export */   StartReplayEvent: () => (/* binding */ StartReplayEvent)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/RecordingPlayer.js */ "./src/panels/recorder/models/RecordingPlayer.ts");
/* harmony import */ var _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../recorder-actions/recorder-actions.js */ "./src/panels/recorder/recorder-actions/recorder-actions.ts");
/* harmony import */ var _SelectButton_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectButton.js */ "./src/panels/recorder/components/SelectButton.ts");
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
var _ReplaySection_instances, _ReplaySection_shadow, _ReplaySection_boundRender, _ReplaySection_props, _ReplaySection_settings, _ReplaySection_replayExtensions, _ReplaySection_handleSelectMenuSelected, _ReplaySection_handleSelectButtonClick, _ReplaySection_render;








const UIStrings = {
    /**
     * @description Replay button label
     */
    Replay: 'Replay',
    /**
     * @description Button label for the normal speed replay option
     */
    ReplayNormalButtonLabel: 'Normal speed',
    /**
     * @description Item label for the normal speed replay option
     */
    ReplayNormalItemLabel: 'Normal (Default)',
    /**
     * @description Button label for the slow speed replay option
     */
    ReplaySlowButtonLabel: 'Slow speed',
    /**
     * @description Item label for the slow speed replay option
     */
    ReplaySlowItemLabel: 'Slow',
    /**
     * @description Button label for the very slow speed replay option
     */
    ReplayVerySlowButtonLabel: 'Very slow speed',
    /**
     * @description Item label for the very slow speed replay option
     */
    ReplayVerySlowItemLabel: 'Very slow',
    /**
     * @description Button label for the extremely slow speed replay option
     */
    ReplayExtremelySlowButtonLabel: 'Extremely slow speed',
    /**
     * @description Item label for the slow speed replay option
     */
    ReplayExtremelySlowItemLabel: 'Extremely slow',
    /**
     * @description Label for a group of items in the replay menu that indicate various replay speeds (e.g., Normal, Fast, Slow).
     */
    speedGroup: 'Speed',
    /**
     * @description Label for a group of items in the replay menu that indicate various extensions that can be used for replay.
     */
    extensionGroup: 'Extensions',
};
const items = [
    {
        value: _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.Normal,
        buttonIconName: 'play',
        buttonLabel: () => i18nString(UIStrings.ReplayNormalButtonLabel),
        label: () => i18nString(UIStrings.ReplayNormalItemLabel),
    },
    {
        value: _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.Slow,
        buttonIconName: 'play',
        buttonLabel: () => i18nString(UIStrings.ReplaySlowButtonLabel),
        label: () => i18nString(UIStrings.ReplaySlowItemLabel),
    },
    {
        value: _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.VerySlow,
        buttonIconName: 'play',
        buttonLabel: () => i18nString(UIStrings.ReplayVerySlowButtonLabel),
        label: () => i18nString(UIStrings.ReplayVerySlowItemLabel),
    },
    {
        value: _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.ExtremelySlow,
        buttonIconName: 'play',
        buttonLabel: () => i18nString(UIStrings.ReplayExtremelySlowButtonLabel),
        label: () => i18nString(UIStrings.ReplayExtremelySlowItemLabel),
    },
];
const replaySpeedToMetricSpeedMap = {
    [_models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.Normal]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingReplaySpeed.Normal,
    [_models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.Slow]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingReplaySpeed.Slow,
    [_models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.VerySlow]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingReplaySpeed.VerySlow,
    [_models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.ExtremelySlow]: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.UserMetrics.RecordingReplaySpeed.ExtremelySlow,
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/recorder/components/ReplaySection.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class StartReplayEvent extends Event {
    constructor(speed, extension) {
        super(StartReplayEvent.eventName, { bubbles: true, composed: true });
        Object.defineProperty(this, "speed", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: speed
        });
        Object.defineProperty(this, "extension", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: extension
        });
    }
}
Object.defineProperty(StartReplayEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'startreplay'
});
const REPLAY_EXTENSION_PREFIX = 'extension';
class ReplaySection extends HTMLElement {
    constructor() {
        super(...arguments);
        _ReplaySection_instances.add(this);
        _ReplaySection_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _ReplaySection_boundRender.set(this, __classPrivateFieldGet(this, _ReplaySection_instances, "m", _ReplaySection_render).bind(this));
        _ReplaySection_props.set(this, { disabled: false });
        _ReplaySection_settings.set(this, void 0);
        _ReplaySection_replayExtensions.set(this, []);
    }
    set data(data) {
        __classPrivateFieldSet(this, _ReplaySection_settings, data.settings, "f");
        __classPrivateFieldSet(this, _ReplaySection_replayExtensions, data.replayExtensions, "f");
    }
    get disabled() {
        return __classPrivateFieldGet(this, _ReplaySection_props, "f").disabled;
    }
    set disabled(disabled) {
        __classPrivateFieldGet(this, _ReplaySection_props, "f").disabled = disabled;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ReplaySection_boundRender, "f"));
    }
    connectedCallback() {
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ReplaySection_boundRender, "f"));
    }
}
_ReplaySection_shadow = new WeakMap(), _ReplaySection_boundRender = new WeakMap(), _ReplaySection_props = new WeakMap(), _ReplaySection_settings = new WeakMap(), _ReplaySection_replayExtensions = new WeakMap(), _ReplaySection_instances = new WeakSet(), _ReplaySection_handleSelectMenuSelected = function _ReplaySection_handleSelectMenuSelected(event) {
    const speed = event.value;
    if (__classPrivateFieldGet(this, _ReplaySection_settings, "f") && event.value) {
        __classPrivateFieldGet(this, _ReplaySection_settings, "f").speed = speed;
        __classPrivateFieldGet(this, _ReplaySection_settings, "f").replayExtension = '';
    }
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.recordingReplaySpeed(replaySpeedToMetricSpeedMap[speed]);
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ReplaySection_boundRender, "f"));
}, _ReplaySection_handleSelectButtonClick = function _ReplaySection_handleSelectButtonClick(event) {
    event.stopPropagation();
    if (event.value && event.value.startsWith(REPLAY_EXTENSION_PREFIX)) {
        if (__classPrivateFieldGet(this, _ReplaySection_settings, "f")) {
            __classPrivateFieldGet(this, _ReplaySection_settings, "f").replayExtension = event.value;
        }
        const extensionIdx = Number(event.value.substring(REPLAY_EXTENSION_PREFIX.length));
        this.dispatchEvent(new StartReplayEvent(_models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.Normal, __classPrivateFieldGet(this, _ReplaySection_replayExtensions, "f")[extensionIdx]));
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ReplaySection_boundRender, "f"));
        return;
    }
    this.dispatchEvent(new StartReplayEvent(__classPrivateFieldGet(this, _ReplaySection_settings, "f") ? __classPrivateFieldGet(this, _ReplaySection_settings, "f").speed : _models_RecordingPlayer_js__WEBPACK_IMPORTED_MODULE_5__.PlayRecordingSpeed.Normal));
    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _ReplaySection_boundRender, "f"));
}, _ReplaySection_render = function _ReplaySection_render() {
    const groups = [{ name: i18nString(UIStrings.speedGroup), items }];
    if (__classPrivateFieldGet(this, _ReplaySection_replayExtensions, "f").length) {
        groups.push({
            name: i18nString(UIStrings.extensionGroup),
            items: __classPrivateFieldGet(this, _ReplaySection_replayExtensions, "f").map((extension, idx) => {
                return {
                    value: REPLAY_EXTENSION_PREFIX + idx,
                    buttonIconName: 'play',
                    buttonLabel: () => extension.getName(),
                    label: () => extension.getName(),
                };
            }),
        });
    }
    // clang-format off
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.html `
    <${_SelectButton_js__WEBPACK_IMPORTED_MODULE_7__.SelectButton.litTagName}
      @selectmenuselected=${__classPrivateFieldGet(this, _ReplaySection_instances, "m", _ReplaySection_handleSelectMenuSelected)}
      @selectbuttonclick=${__classPrivateFieldGet(this, _ReplaySection_instances, "m", _ReplaySection_handleSelectButtonClick)}
      .variant=${_SelectButton_js__WEBPACK_IMPORTED_MODULE_7__.Variant.PRIMARY}
      .showItemDivider=${false}
      .disabled=${__classPrivateFieldGet(this, _ReplaySection_props, "f").disabled}
      .action=${_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_6__.RecorderActions.ReplayRecording}
      .value=${__classPrivateFieldGet(this, _ReplaySection_settings, "f")?.replayExtension || __classPrivateFieldGet(this, _ReplaySection_settings, "f")?.speed}
      .buttonLabel=${i18nString(UIStrings.Replay)}
      .groups=${groups}
      jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action(_recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_6__.RecorderActions.ReplayRecording).track({ click: true })}>
    </${_SelectButton_js__WEBPACK_IMPORTED_MODULE_7__.SelectButton.litTagName}>`, __classPrivateFieldGet(this, _ReplaySection_shadow, "f"), { host: this });
    // clang-format on
};
Object.defineProperty(ReplaySection, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__.literal `devtools-replay-section`
});
customElements.define('devtools-replay-section', ReplaySection);


/***/ })

}]);