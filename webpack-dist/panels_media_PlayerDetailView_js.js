"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_media_PlayerDetailView_js"],{

/***/ "./panels/media/EventDisplayTable.js":
/*!*******************************************!*\
  !*** ./panels/media/EventDisplayTable.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventNode: () => (/* binding */ EventNode),
/* harmony export */   PlayerEventsView: () => (/* binding */ PlayerEventsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _eventDisplayTable_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventDisplayTable.css.js */ "./panels/media/eventDisplayTable.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Text for timestamps of items
     */
    timestamp: 'Timestamp',
    /**
     *@description The column header for event names.
     */
    eventName: 'Event name',
    /**
     *@description Text for the value of something
     */
    value: 'Value',
    /**
     *@description The accessible name of a table that displays information about events that occurred
     * while a video/media player was present on the page.
     */
    eventDisplay: 'Event display',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/EventDisplayTable.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class EventNode extends _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.DataGridNode {
    expandableElement;
    constructor(event) {
        super(event, false);
        this.expandableElement = null;
    }
    createCell(columnId) {
        const cell = this.createTD(columnId);
        const cellData = this.data[columnId];
        if (columnId === "value" /* MediaEventColumnKeys.Value */) {
            const enclosed = cell.createChild('div', 'event-display-table-contents-json-wrapper');
            this.expandableElement =
                new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView(new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.ParsedJSON(cellData, '', ''), true);
            this.expandableElement.markAsRoot();
            this.expandableElement.show(enclosed);
        }
        else {
            cell.classList.add('event-display-table-basic-text-table-entry');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(cell, cellData);
        }
        return cell;
    }
}
class PlayerEventsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox {
    dataGrid;
    firstEventTime;
    constructor() {
        super();
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('events')}`);
        // Set up element styles.
        this.contentElement.classList.add('event-display-table-contents-table-container');
        this.dataGrid = this.createDataGrid([
            {
                id: "display-timestamp" /* MediaEventColumnKeys.Timestamp */,
                title: i18nString(UIStrings.timestamp),
                weight: 1,
                sortable: false,
            },
            { id: "event" /* MediaEventColumnKeys.Event */, title: i18nString(UIStrings.eventName), weight: 2, sortable: false },
            {
                id: "value" /* MediaEventColumnKeys.Value */,
                title: i18nString(UIStrings.value),
                weight: 7,
                sortable: false,
            },
        ]);
        this.firstEventTime = 0;
        this.dataGrid.setStriped(true);
        this.dataGrid.asWidget().show(this.contentElement);
    }
    createDataGrid(headers) {
        const gridColumnDescs = [];
        for (const headerDesc of headers) {
            gridColumnDescs.push(PlayerEventsView.convertToGridDescriptor(headerDesc));
        }
        // TODO(tmathmeyer) SortableDataGrid doesn't play nice with nested JSON
        // renderers, since they can change size, and this breaks the visible
        // element computation in ViewportDataGrid.
        const datagrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.DataGridImpl({
            displayName: i18nString(UIStrings.eventDisplay),
            columns: gridColumnDescs,
            deleteCallback: undefined,
            editCallback: undefined,
            refreshCallback: undefined,
        });
        datagrid.asWidget().contentElement.classList.add('no-border-top-datagrid');
        return datagrid;
    }
    onEvent(event) {
        if (this.firstEventTime === 0 && typeof event.timestamp === 'number') {
            this.firstEventTime = event.timestamp;
        }
        event = this.subtractFirstEventTime(event);
        const stringified = event.value;
        try {
            const json = JSON.parse(stringified);
            event.event = json.event;
            delete json['event'];
            event.value = json;
            const node = new EventNode(event);
            const scroll = this.dataGrid.scrollContainer;
            const isAtBottom = scroll.scrollTop === (scroll.scrollHeight - scroll.offsetHeight);
            this.dataGrid.rootNode().appendChild(node);
            if (isAtBottom) {
                scroll.scrollTop = scroll.scrollHeight;
            }
        }
        catch (e) {
            // If this is a legacy message event, ignore it for now until they
            // are handled.
        }
    }
    subtractFirstEventTime(event) {
        if (typeof event.timestamp === 'number') {
            event.displayTimestamp = (event.timestamp - this.firstEventTime).toFixed(3);
        }
        return event;
    }
    static convertToGridDescriptor(columnConfig) {
        return {
            id: columnConfig.id,
            title: columnConfig.title,
            sortable: columnConfig.sortable,
            weight: columnConfig.weight || 0,
            sort: _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_1__.DataGrid.Order.Ascending,
        };
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([_eventDisplayTable_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]]);
    }
}
//# sourceMappingURL=EventDisplayTable.js.map

/***/ }),

/***/ "./panels/media/EventTimelineView.js":
/*!*******************************************!*\
  !*** ./panels/media/EventTimelineView.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerEventsTimeline: () => (/* binding */ PlayerEventsTimeline)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TickingFlameChart.js */ "./panels/media/TickingFlameChart.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



// Has to be a double, see https://v8.dev/blog/react-cliff
const NO_NORMALIZED_TIMESTAMP = -1.5;
const UIStrings = {
    /**
     *@description Title of the 'Playback Status' button
     */
    playbackStatus: 'Playback Status',
    /**
     *@description Title of the 'Buffering Status' button
     */
    bufferingStatus: 'Buffering Status',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/EventTimelineView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class PlayerEventsTimeline extends _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.TickingFlameChart {
    normalizedTimestamp;
    playbackStatusLastEvent;
    audioBufferingStateEvent;
    videoBufferingStateEvent;
    constructor() {
        super();
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.pane('timeline')}`);
        this.normalizedTimestamp = NO_NORMALIZED_TIMESTAMP;
        this.addGroup(i18nString(UIStrings.playbackStatus), 2);
        this.addGroup(i18nString(UIStrings.bufferingStatus), 2); // video on top, audio on bottom
        this.playbackStatusLastEvent = null;
        this.audioBufferingStateEvent = null;
        this.videoBufferingStateEvent = null;
    }
    ensureNoPreviousPlaybackEvent(normalizedTime) {
        if (this.playbackStatusLastEvent !== null) {
            this.playbackStatusLastEvent.endTime = normalizedTime;
            this.playbackStatusLastEvent = null;
        }
    }
    /**
     * Playback events are {kPlay, kPause, kSuspended, kEnded, and kWebMediaPlayerDestroyed}
     * once destroyed, a player cannot recieve more events of any kind.
     */
    onPlaybackEvent(event, normalizedTime) {
        switch (event.event) {
            case 'kPlay':
                this.canTick = true;
                this.ensureNoPreviousPlaybackEvent(normalizedTime);
                // Disabled until Closure is gone.
                // clang-format off
                this.playbackStatusLastEvent = this.startEvent({
                    level: 0,
                    startTime: normalizedTime,
                    name: 'Play',
                });
                // clang-format on
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
                    color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme[1],
                });
                // clang-format on
                break;
            case 'kWebMediaPlayerDestroyed':
                this.canTick = false;
                this.ensureNoPreviousPlaybackEvent(normalizedTime);
                this.addMarker({
                    level: 1,
                    startTime: normalizedTime,
                    name: 'Destroyed',
                    color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme[4],
                });
                // clang-format on
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
                    color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme[3],
                });
                // clang-format on
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
                    color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.HotColorScheme[2],
                });
                // clang-format on
                break;
            default:
                throw `_onPlaybackEvent cant handle ${event.event}`;
        }
    }
    bufferedEnough(state) {
        return state['state'] === 'BUFFERING_HAVE_ENOUGH';
    }
    onBufferingStatus(event, normalizedTime) {
        // No declarations inside the case labels.
        let audioState = null;
        let videoState = null;
        switch (event.event) {
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
                            color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.ColdColorScheme[1],
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
                            color: _TickingFlameChart_js__WEBPACK_IMPORTED_MODULE_2__.ColdColorScheme[0],
                        });
                    }
                }
                break;
            default:
                throw `_onPlaybackEvent cant handle ${event.event}`;
        }
    }
    onEvent(event) {
        if (this.normalizedTimestamp === NO_NORMALIZED_TIMESTAMP) {
            this.normalizedTimestamp = Number(event.timestamp);
        }
        const inMilliseconds = (Number(event.timestamp) - this.normalizedTimestamp) * 1000;
        switch (event.event) {
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
//# sourceMappingURL=EventTimelineView.js.map

/***/ }),

/***/ "./panels/media/PlayerDetailView.js":
/*!******************************************!*\
  !*** ./panels/media/PlayerDetailView.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlayerDetailView: () => (/* binding */ PlayerDetailView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventDisplayTable.js */ "./panels/media/EventDisplayTable.js");
/* harmony import */ var _EventTimelineView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventTimelineView.js */ "./panels/media/EventTimelineView.js");
/* harmony import */ var _PlayerMessagesView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PlayerMessagesView.js */ "./panels/media/PlayerMessagesView.js");
/* harmony import */ var _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PlayerPropertiesView.js */ "./panels/media/PlayerPropertiesView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Title of the 'Properties' tool in the sidebar of the elements tool
     */
    properties: 'Properties',
    /**
     *@description Button text for viewing properties.
     */
    playerProperties: 'Player properties',
    /**
     *@description Button text for viewing events.
     */
    events: 'Events',
    /**
     *@description Hover text for the Events button.
     */
    playerEvents: 'Player events',
    /**
     *@description Text in Network Item View of the Network panel
     */
    messages: 'Messages',
    /**
     *@description Column header for messages view.
     */
    playerMessages: 'Player messages',
    /**
     *@description Title for the timeline tab.
     */
    timeline: 'Timeline',
    /**
     *@description Hovertext for Timeline tab.
     */
    playerTimeline: 'Player timeline',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/PlayerDetailView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class PlayerDetailView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.TabbedPane.TabbedPane {
    eventView;
    propertyView;
    messageView;
    timelineView;
    constructor() {
        super();
        this.eventView = new _EventDisplayTable_js__WEBPACK_IMPORTED_MODULE_2__.PlayerEventsView();
        this.propertyView = new _PlayerPropertiesView_js__WEBPACK_IMPORTED_MODULE_5__.PlayerPropertiesView();
        this.messageView = new _PlayerMessagesView_js__WEBPACK_IMPORTED_MODULE_4__.PlayerMessagesView();
        this.timelineView = new _EventTimelineView_js__WEBPACK_IMPORTED_MODULE_3__.PlayerEventsTimeline();
        this.appendTab("properties" /* PlayerDetailViewTabs.Properties */, i18nString(UIStrings.properties), this.propertyView, i18nString(UIStrings.playerProperties));
        this.appendTab("events" /* PlayerDetailViewTabs.Events */, i18nString(UIStrings.events), this.eventView, i18nString(UIStrings.playerEvents));
        this.appendTab("messages" /* PlayerDetailViewTabs.Messages */, i18nString(UIStrings.messages), this.messageView, i18nString(UIStrings.playerMessages));
        this.appendTab("timeline" /* PlayerDetailViewTabs.Timeline */, i18nString(UIStrings.timeline), this.timelineView, i18nString(UIStrings.playerTimeline));
    }
    onProperty(property) {
        this.propertyView.onProperty(property);
    }
    onError(error) {
        this.messageView.addError(error);
    }
    onMessage(message) {
        this.messageView.addMessage(message);
    }
    onEvent(event) {
        this.eventView.onEvent(event);
        this.timelineView.onEvent(event);
    }
}
//# sourceMappingURL=PlayerDetailView.js.map

/***/ }),

/***/ "./panels/media/eventDisplayTable.css.js":
/*!***********************************************!*\
  !*** ./panels/media/eventDisplayTable.css.js ***!
  \***********************************************/
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
 * Copyright 2019 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.no-border-top-datagrid > .data-grid {
  /* make sure there is no top border, it ruins the menu view */
  border-top: 0;
}

.event-display-table-contents-table-container > .widget > .data-grid {
  height: 100%;
}

.data-grid .event-display-table-basic-text-table-entry {
  line-height: 26px;
}

.event-display-table-contents-json-wrapper > .json-view {
  overflow: visible;
}

/*# sourceURL=eventDisplayTable.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ })

}]);