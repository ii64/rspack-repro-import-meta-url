"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_RecordingListView_ts"],{

/***/ "./src/panels/recorder/components/RecordingListView.ts":
/*!*************************************************************!*\
  !*** ./src/panels/recorder/components/RecordingListView.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRecordingEvent: () => (/* binding */ CreateRecordingEvent),
/* harmony export */   DeleteRecordingEvent: () => (/* binding */ DeleteRecordingEvent),
/* harmony export */   OpenRecordingEvent: () => (/* binding */ OpenRecordingEvent),
/* harmony export */   PlayRecordingEvent: () => (/* binding */ PlayRecordingEvent),
/* harmony export */   RecordingListView: () => (/* binding */ RecordingListView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./src/ui/components/helpers/helpers.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/models.js */ "./src/panels/recorder/models/models.ts");
/* harmony import */ var _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recorder-actions/recorder-actions.js */ "./src/panels/recorder/recorder-actions/recorder-actions.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './recordingListView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RecordingListView_instances, _RecordingListView_shadow, _RecordingListView_props, _RecordingListView_onCreateClick, _RecordingListView_onDeleteClick, _RecordingListView_onOpenClick, _RecordingListView_onPlayRecordingClick, _RecordingListView_onKeyDown, _RecordingListView_stopPropagation, _RecordingListView_render;









const UIStrings = {
    /**
     *@description The title of the page that contains a list of saved recordings that the user has..
     */
    savedRecordings: 'Saved recordings',
    /**
     * @description The title of the button that leads to create a new recording page.
     */
    createRecording: 'Create a new recording',
    /**
     * @description The title of the button that is shown next to each of the recordings and that triggers playing of the recording.
     */
    playRecording: 'Play recording',
    /**
     * @description The title of the button that is shown next to each of the recordings and that triggers deletion of the recording.
     */
    deleteRecording: 'Delete recording',
    /**
     * @description The title of the row corresponding to a recording. By clicking on the row, the user open the recording for editing.
     */
    openRecording: 'Open recording',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/recorder/components/RecordingListView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class CreateRecordingEvent extends Event {
    constructor() {
        super(CreateRecordingEvent.eventName);
    }
}
Object.defineProperty(CreateRecordingEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'createrecording'
});
class DeleteRecordingEvent extends Event {
    constructor(storageName) {
        super(DeleteRecordingEvent.eventName);
        Object.defineProperty(this, "storageName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: storageName
        });
    }
}
Object.defineProperty(DeleteRecordingEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'deleterecording'
});
class OpenRecordingEvent extends Event {
    constructor(storageName) {
        super(OpenRecordingEvent.eventName);
        Object.defineProperty(this, "storageName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: storageName
        });
    }
}
Object.defineProperty(OpenRecordingEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'openrecording'
});
class PlayRecordingEvent extends Event {
    constructor(storageName) {
        super(PlayRecordingEvent.eventName);
        Object.defineProperty(this, "storageName", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: storageName
        });
    }
}
Object.defineProperty(PlayRecordingEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'playrecording'
});
class RecordingListView extends HTMLElement {
    constructor() {
        super();
        _RecordingListView_instances.add(this);
        _RecordingListView_shadow.set(this, this.attachShadow({ mode: 'open' }));
        _RecordingListView_props.set(this, {
            recordings: [],
            replayAllowed: true,
        });
        _RecordingListView_render.set(this, () => {
            // clang-format off
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="wrapper">
          <div class="header">
            <h1>${i18nString(UIStrings.savedRecordings)}</h1>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
              .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.PRIMARY}
              @click=${__classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_onCreateClick)}
              title=${_models_models_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.getTooltipForActions(i18nString(UIStrings.createRecording), _recorder_actions_recorder_actions_js__WEBPACK_IMPORTED_MODULE_7__.RecorderActions.CreateRecording)}
              .jslogContext=${'create-recording'}
            >
              ${i18nString(UIStrings.createRecording)}
            </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
          </div>
          <div class="table">
            ${__classPrivateFieldGet(this, _RecordingListView_props, "f").recordings.map(recording => {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
                  <div
                    role="button"
                    tabindex="0"
                    aria-label=${i18nString(UIStrings.openRecording)}
                    class="row"
                    @keydown=${__classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_onKeyDown).bind(this, recording.storageName)}
                    @click=${__classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_onOpenClick).bind(this, recording.storageName)}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.item()
                    .track({ click: true })
                    .context('recording')}>
                    <div class="icon">
                      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} name="flow">
                      </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
                    </div>
                    <div class="title">${recording.name}</div>
                    <div class="actions">
                      ${__classPrivateFieldGet(this, _RecordingListView_props, "f").replayAllowed
                    ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
                              <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
                                title=${i18nString(UIStrings.playRecording)}
                                .data=${{
                        variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.ICON,
                        iconName: 'play',
                        jslogContext: 'play-recording',
                    }}
                                @click=${__classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_onPlayRecordingClick).bind(this, recording.storageName)}
                                @keydown=${__classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_stopPropagation)}
                              ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
                              <div class="divider"></div>`
                    : ''}
                      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
                        class="delete-recording-button"
                        title=${i18nString(UIStrings.deleteRecording)}
                        .data=${{
                    variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Variant.ICON,
                    iconName: 'bin',
                    jslogContext: 'delete-recording',
                }}
                        @click=${__classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_onDeleteClick).bind(this, recording.storageName)}
                        @keydown=${__classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_stopPropagation)}
                      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
                    </div>
                  </div>
                `;
            })}
          </div>
        </div>
      `, __classPrivateFieldGet(this, _RecordingListView_shadow, "f"), { host: this });
            // clang-format on
        });
    }
    connectedCallback() {
        __classPrivateFieldGet(this, _RecordingListView_shadow, "f").adoptedStyleSheets = [Object(function webpackMissingModule() { var e = new Error("Cannot find module './recordingListView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _RecordingListView_render, "f"));
    }
    set recordings(recordings) {
        __classPrivateFieldGet(this, _RecordingListView_props, "f").recordings = recordings;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _RecordingListView_render, "f"));
    }
    set replayAllowed(value) {
        __classPrivateFieldGet(this, _RecordingListView_props, "f").replayAllowed = value;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, __classPrivateFieldGet(this, _RecordingListView_render, "f"));
    }
}
_RecordingListView_shadow = new WeakMap(), _RecordingListView_props = new WeakMap(), _RecordingListView_render = new WeakMap(), _RecordingListView_instances = new WeakSet(), _RecordingListView_onCreateClick = function _RecordingListView_onCreateClick() {
    this.dispatchEvent(new CreateRecordingEvent());
}, _RecordingListView_onDeleteClick = function _RecordingListView_onDeleteClick(storageName, event) {
    event.stopPropagation();
    this.dispatchEvent(new DeleteRecordingEvent(storageName));
}, _RecordingListView_onOpenClick = function _RecordingListView_onOpenClick(storageName, event) {
    event.stopPropagation();
    this.dispatchEvent(new OpenRecordingEvent(storageName));
}, _RecordingListView_onPlayRecordingClick = function _RecordingListView_onPlayRecordingClick(storageName, event) {
    event.stopPropagation();
    this.dispatchEvent(new PlayRecordingEvent(storageName));
}, _RecordingListView_onKeyDown = function _RecordingListView_onKeyDown(storageName, event) {
    if (event.key !== 'Enter') {
        return;
    }
    __classPrivateFieldGet(this, _RecordingListView_instances, "m", _RecordingListView_onOpenClick).call(this, storageName, event);
}, _RecordingListView_stopPropagation = function _RecordingListView_stopPropagation(event) {
    event.stopPropagation();
};
Object.defineProperty(RecordingListView, "litTagName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-recording-list-view`
});
customElements.define('devtools-recording-list-view', RecordingListView);


/***/ })

}]);