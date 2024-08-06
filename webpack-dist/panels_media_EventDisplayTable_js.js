"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_media_EventDisplayTable_js"],{

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