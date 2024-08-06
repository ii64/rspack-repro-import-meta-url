"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_components_RecordingListView_js"],{

/***/ "./panels/recorder/components/RecordingListView.js":
/*!*********************************************************!*\
  !*** ./panels/recorder/components/RecordingListView.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateRecordingEvent: () => (/* binding */ CreateRecordingEvent),
/* harmony export */   DeleteRecordingEvent: () => (/* binding */ DeleteRecordingEvent),
/* harmony export */   OpenRecordingEvent: () => (/* binding */ OpenRecordingEvent),
/* harmony export */   PlayRecordingEvent: () => (/* binding */ PlayRecordingEvent),
/* harmony export */   RecordingListView: () => (/* binding */ RecordingListView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */ var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _models_models_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
/* harmony import */ var _recordingListView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recordingListView.css.js */ "./panels/recorder/components/recordingListView.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








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
    static eventName = 'createrecording';
    constructor() {
        super(CreateRecordingEvent.eventName);
    }
}
class DeleteRecordingEvent extends Event {
    storageName;
    static eventName = 'deleterecording';
    constructor(storageName) {
        super(DeleteRecordingEvent.eventName);
        this.storageName = storageName;
    }
}
class OpenRecordingEvent extends Event {
    storageName;
    static eventName = 'openrecording';
    constructor(storageName) {
        super(OpenRecordingEvent.eventName);
        this.storageName = storageName;
    }
}
class PlayRecordingEvent extends Event {
    storageName;
    static eventName = 'playrecording';
    constructor(storageName) {
        super(PlayRecordingEvent.eventName);
        this.storageName = storageName;
    }
}
class RecordingListView extends HTMLElement {
    static litTagName = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal `devtools-recording-list-view`;
    #shadow = this.attachShadow({ mode: 'open' });
    #props = {
        recordings: [],
        replayAllowed: true,
    };
    constructor() {
        super();
    }
    connectedCallback() {
        this.#shadow.adoptedStyleSheets = [_recordingListView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]];
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, this.#render);
    }
    set recordings(recordings) {
        this.#props.recordings = recordings;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, this.#render);
    }
    set replayAllowed(value) {
        this.#props.replayAllowed = value;
        void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(this, this.#render);
    }
    #onCreateClick() {
        this.dispatchEvent(new CreateRecordingEvent());
    }
    #onDeleteClick(storageName, event) {
        event.stopPropagation();
        this.dispatchEvent(new DeleteRecordingEvent(storageName));
    }
    #onOpenClick(storageName, event) {
        event.stopPropagation();
        this.dispatchEvent(new OpenRecordingEvent(storageName));
    }
    #onPlayRecordingClick(storageName, event) {
        event.stopPropagation();
        this.dispatchEvent(new PlayRecordingEvent(storageName));
    }
    #onKeyDown(storageName, event) {
        if (event.key !== 'Enter') {
            return;
        }
        this.#onOpenClick(storageName, event);
    }
    #stopPropagation(event) {
        event.stopPropagation();
    }
    #render = () => {
        // clang-format off
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
        <div class="wrapper">
          <div class="header">
            <h1>${i18nString(UIStrings.savedRecordings)}</h1>
            <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
              .variant=${"primary" /* Buttons.Button.Variant.PRIMARY */}
              @click=${this.#onCreateClick}
              title=${_models_models_js__WEBPACK_IMPORTED_MODULE_6__.Tooltip.getTooltipForActions(i18nString(UIStrings.createRecording), "chrome-recorder.create-recording" /* Actions.RecorderActions.CreateRecording */)}
              .jslogContext=${'create-recording'}
            >
              ${i18nString(UIStrings.createRecording)}
            </${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
          </div>
          <div class="table">
            ${this.#props.recordings.map(recording => {
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
                  <div
                    role="button"
                    tabindex="0"
                    aria-label=${i18nString(UIStrings.openRecording)}
                    class="row"
                    @keydown=${this.#onKeyDown.bind(this, recording.storageName)}
                    @click=${this.#onOpenClick.bind(this, recording.storageName)}
                    jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.item()
                .track({ click: true })
                .context('recording')}>
                    <div class="icon">
                      <${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName} name="flow">
                      </${_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon.litTagName}>
                    </div>
                    <div class="title">${recording.name}</div>
                    <div class="actions">
                      ${this.#props.replayAllowed
                ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html `
                              <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
                                title=${i18nString(UIStrings.playRecording)}
                                .data=${{
                    variant: "icon" /* Buttons.Button.Variant.ICON */,
                    iconName: 'play',
                    jslogContext: 'play-recording',
                }}
                                @click=${this.#onPlayRecordingClick.bind(this, recording.storageName)}
                                @keydown=${this.#stopPropagation}
                              ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
                              <div class="divider"></div>`
                : ''}
                      <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}
                        class="delete-recording-button"
                        title=${i18nString(UIStrings.deleteRecording)}
                        .data=${{
                variant: "icon" /* Buttons.Button.Variant.ICON */,
                iconName: 'bin',
                jslogContext: 'delete-recording',
            }}
                        @click=${this.#onDeleteClick.bind(this, recording.storageName)}
                        @keydown=${this.#stopPropagation}
                      ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_1__.Button.Button.litTagName}>
                    </div>
                  </div>
                `;
        })}
          </div>
        </div>
      `, this.#shadow, { host: this });
        // clang-format on
    };
}
customElements.define('devtools-recording-list-view', RecordingListView);
//# sourceMappingURL=RecordingListView.js.map

/***/ }),

/***/ "./panels/recorder/components/recordingListView.css.js":
/*!*************************************************************!*\
  !*** ./panels/recorder/components/recordingListView.css.js ***!
  \*************************************************************/
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
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

*:focus,
*:focus-visible {
  outline: none;
}

.wrapper {
  padding: 24px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

h1 {
  font-size: 16px;
  line-height: 19px;
  color: var(--sys-color-on-surface);
  font-weight: normal;
}

.icon,
.icon devtools-icon {
  width: 20px;
  height: 20px;
  color: var(--sys-color-primary);
}

.table {
  margin-top: 35px;
}

.title {
  font-size: 13px;
  color: var(--sys-color-on-surface);
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.row {
  display: flex;
  align-items: center;
  padding-right: 5px;
  height: 28px;
  border-bottom: 1px solid var(--sys-color-divider);
}

.row:focus-within,
.row:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
}

.row:last-child {
  border-bottom: none;
}

.actions {
  display: flex;
  align-items: center;
}

.actions button {
  border: none;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.actions .divider {
  width: 1px;
  height: 17px;
  background-color: var(--sys-color-divider);
  margin: 0 6px;
}

/*# sourceURL=recordingListView.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);