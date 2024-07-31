"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ServiceWorkerUpdateCycleView_ts"],{

/***/ "./src/panels/application/ServiceWorkerUpdateCycleView.ts":
/*!****************************************************************!*\
  !*** ./src/panels/application/ServiceWorkerUpdateCycleView.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceWorkerUpdateCycleView: () => (/* binding */ ServiceWorkerUpdateCycleView),
/* harmony export */   ServiceWorkerUpdateNames: () => (/* binding */ ServiceWorkerUpdateNames)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description Text in Indexed DBViews of the Application panel
     */
    version: 'Version',
    /**
     *@description Table heading for Service Workers update information. Update is a noun.
     */
    updateActivity: 'Update Activity',
    /**
     *@description Title for the timeline tab.
     */
    timeline: 'Timeline',
    /**
     *@description Text in Service Workers Update Life Cycle
     *@example {2} PH1
     */
    startTimeS: 'Start time: {PH1}',
    /**
     *@description Text for end time of an event
     *@example {2} PH1
     */
    endTimeS: 'End time: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/ServiceWorkerUpdateCycleView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
class ServiceWorkerUpdateCycleView {
    constructor(registration) {
        Object.defineProperty(this, "registration", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "rows", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selectedRowIndex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "tableElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.registration = registration;
        this.rows = [];
        this.selectedRowIndex = -1;
        this.tableElement = document.createElement('table');
        this.createTimingTable();
    }
    calculateServiceWorkerUpdateRanges() {
        function addRange(ranges, range) {
            if (range.start < Number.MAX_VALUE && range.start <= range.end) {
                ranges.push(range);
            }
        }
        /**
         * Add ranges representing Install, Wait or Activate of a sw version represented by id.
         */
        function addNormalizedRanges(ranges, id, startInstallTime, endInstallTime, startActivateTime, endActivateTime, status) {
            addRange(ranges, { id, phase: ServiceWorkerUpdateNames.Install, start: startInstallTime, end: endInstallTime });
            if (status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.Activating ||
                status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.Activated ||
                status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.Redundant) {
                addRange(ranges, {
                    id,
                    phase: ServiceWorkerUpdateNames.Wait,
                    start: endInstallTime,
                    end: startActivateTime,
                });
                addRange(ranges, { id, phase: ServiceWorkerUpdateNames.Activate, start: startActivateTime, end: endActivateTime });
            }
        }
        function rangesForVersion(version) {
            let state = version.currentState;
            let endActivateTime = 0;
            let beginActivateTime = 0;
            let endInstallTime = 0;
            let beginInstallTime = 0;
            const currentStatus = state.status;
            if (currentStatus === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.New) {
                return [];
            }
            while (state) {
                // find the earliest timestamp of different stage on record.
                if (state.status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.Activated) {
                    endActivateTime = state.lastUpdatedTimestamp;
                }
                else if (state.status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.Activating) {
                    if (endActivateTime === 0) {
                        endActivateTime = state.lastUpdatedTimestamp;
                    }
                    beginActivateTime = state.lastUpdatedTimestamp;
                }
                else if (state.status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.Installed) {
                    endInstallTime = state.lastUpdatedTimestamp;
                }
                else if (state.status === _generated_protocol_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorker.ServiceWorkerVersionStatus.Installing) {
                    if (endInstallTime === 0) {
                        endInstallTime = state.lastUpdatedTimestamp;
                    }
                    beginInstallTime = state.lastUpdatedTimestamp;
                }
                state = state.previousState;
            }
            const ranges = [];
            addNormalizedRanges(ranges, version.id, beginInstallTime, endInstallTime, beginActivateTime, endActivateTime, currentStatus);
            return ranges;
        }
        const versions = this.registration.versionsByMode();
        const modes = [
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active,
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerVersion.Modes.Waiting,
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing,
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorkerManager.ServiceWorkerVersion.Modes.Redundant,
        ];
        for (const mode of modes) {
            const version = versions.get(mode);
            if (version) {
                const ranges = rangesForVersion(version);
                return ranges;
            }
        }
        return [];
    }
    createTimingTable() {
        this.tableElement.classList.add('service-worker-update-timing-table');
        this.tableElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.tree('update-timing-table')}`);
        const timeRanges = this.calculateServiceWorkerUpdateRanges();
        this.updateTimingTable(timeRanges);
    }
    createTimingTableHead() {
        const serverHeader = this.tableElement.createChild('tr', 'service-worker-update-timing-table-header');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.version));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.updateActivity));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.timeline));
    }
    removeRows() {
        const rows = this.tableElement.getElementsByTagName('tr');
        while (rows[0]) {
            if (rows[0].parentNode) {
                rows[0].parentNode.removeChild(rows[0]);
            }
        }
        this.rows = [];
    }
    updateTimingTable(timeRanges) {
        this.selectedRowIndex = -1;
        this.removeRows();
        this.createTimingTableHead();
        const timeRangeArray = timeRanges;
        if (timeRangeArray.length === 0) {
            return;
        }
        const startTimes = timeRangeArray.map(r => r.start);
        const endTimes = timeRangeArray.map(r => r.end);
        const startTime = startTimes.reduce((a, b) => Math.min(a, b));
        const endTime = endTimes.reduce((a, b) => Math.max(a, b));
        const scale = 100 / (endTime - startTime);
        for (const range of timeRangeArray) {
            const phaseName = range.phase;
            const left = (scale * (range.start - startTime));
            const right = (scale * (endTime - range.end));
            const tr = this.tableElement.createChild('tr', 'service-worker-update-timeline');
            tr.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.treeItem('update-timeline').track({
                click: true,
                keydown: 'ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Enter|Space',
            })}`);
            this.rows.push(tr);
            const timingBarVersionElement = tr.createChild('td');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(timingBarVersionElement, '#' + range.id);
            timingBarVersionElement.classList.add('service-worker-update-timing-bar-clickable');
            timingBarVersionElement.setAttribute('tabindex', '0');
            timingBarVersionElement.setAttribute('role', 'switch');
            timingBarVersionElement.addEventListener('focus', (event) => {
                this.onFocus(event);
            });
            timingBarVersionElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.expand('timing-info').track({ click: true })}`);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setChecked(timingBarVersionElement, false);
            const timingBarTitleElement = tr.createChild('td');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(timingBarTitleElement, phaseName);
            const barContainer = tr.createChild('td').createChild('div', 'service-worker-update-timing-row');
            const bar = barContainer.createChild('span', 'service-worker-update-timing-bar ' + phaseName.toLowerCase());
            bar.style.left = left + '%';
            bar.style.right = right + '%';
            bar.textContent = '\u200B'; // Important for 0-time items to have 0 width.
            this.constructUpdateDetails(tr, range);
        }
    }
    /**
     * Detailed information about an update phase. Currently starting and ending time.
     */
    constructUpdateDetails(tr, range) {
        const startRow = this.tableElement.createChild('tr', 'service-worker-update-timing-bar-details');
        startRow.classList.add('service-worker-update-timing-bar-details-collapsed');
        const startTimeItem = startRow.createChild('td');
        startTimeItem.colSpan = 3;
        const startTime = (new Date(range.start)).toISOString();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(startTimeItem.createChild('span'), i18nString(UIStrings.startTimeS, { PH1: startTime }));
        startRow.tabIndex = 0;
        const endRow = this.tableElement.createChild('tr', 'service-worker-update-timing-bar-details');
        endRow.classList.add('service-worker-update-timing-bar-details-collapsed');
        const endTimeItem = endRow.createChild('td');
        endTimeItem.colSpan = 3;
        const endTime = (new Date(range.end)).toISOString();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(endTimeItem.createChild('span'), i18nString(UIStrings.endTimeS, { PH1: endTime }));
        endRow.tabIndex = 0;
        tr.addEventListener('keydown', (event) => {
            this.onKeydown(event, startRow, endRow);
        });
        tr.addEventListener('click', (event) => {
            this.onClick(event, startRow, endRow);
        });
    }
    toggle(startRow, endRow, target, expanded) {
        if (target.classList.contains('service-worker-update-timing-bar-clickable')) {
            startRow.classList.toggle('service-worker-update-timing-bar-details-collapsed');
            startRow.classList.toggle('service-worker-update-timing-bar-details-expanded');
            endRow.classList.toggle('service-worker-update-timing-bar-details-collapsed');
            endRow.classList.toggle('service-worker-update-timing-bar-details-expanded');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setChecked(target, !expanded);
        }
    }
    onFocus(event) {
        const target = event.target;
        if (!target) {
            return;
        }
        const tr = target.parentElement;
        if (!tr) {
            return;
        }
        this.selectedRowIndex = this.rows.indexOf(tr);
    }
    onKeydown(event, startRow, endRow) {
        if (!event.target) {
            return;
        }
        const target = event.target;
        const keyboardEvent = event;
        const expanded = target.getAttribute('aria-checked') === 'true';
        if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
            this.toggle(startRow, endRow, target, expanded);
            event.preventDefault();
            return;
        }
        if ((!expanded && keyboardEvent.key === 'ArrowRight') || (expanded && keyboardEvent.key === 'ArrowLeft')) {
            this.toggle(startRow, endRow, target, expanded);
            event.preventDefault();
            return;
        }
        if (keyboardEvent.key === 'ArrowDown') {
            if (this.selectedRowIndex >= 0) {
                this.selectNextRow();
            }
            else {
                this.selectFirstRow();
            }
            event.preventDefault();
        }
        if (keyboardEvent.key === 'ArrowUp') {
            if (this.selectedRowIndex >= 0) {
                this.selectPreviousRow();
            }
            else {
                this.selectLastRow();
            }
            event.preventDefault();
        }
    }
    focusRow(row) {
        row.cells[0].focus();
    }
    blurRow(row) {
        row.cells[0].blur();
    }
    selectFirstRow() {
        if (this.rows.length === 0) {
            return;
        }
        this.selectedRowIndex = 0;
        this.focusRow(this.rows[0]);
    }
    selectLastRow() {
        if (this.rows.length === 0) {
            return;
        }
        this.selectedRowIndex = this.rows.length - 1;
        this.focusRow(this.rows[this.selectedRowIndex]);
    }
    selectNextRow() {
        if (this.rows.length === 0) {
            return;
        }
        const previousRowIndex = this.selectedRowIndex;
        this.selectedRowIndex++;
        if (this.selectedRowIndex >= this.rows.length) {
            this.selectedRowIndex = 0;
        }
        this.blurRow(this.rows[previousRowIndex]);
        this.focusRow(this.rows[this.selectedRowIndex]);
    }
    selectPreviousRow() {
        if (this.rows.length === 0) {
            return;
        }
        const previousRowIndex = this.selectedRowIndex;
        this.selectedRowIndex--;
        if (this.selectedRowIndex < 0) {
            this.selectedRowIndex = this.rows.length - 1;
        }
        this.blurRow(this.rows[previousRowIndex]);
        this.focusRow(this.rows[this.selectedRowIndex]);
    }
    onClick(event, startRow, endRow) {
        const tr = event.target;
        if (!tr) {
            return;
        }
        const expanded = tr.getAttribute('aria-checked') === 'true';
        this.toggle(startRow, endRow, tr, expanded);
        event.preventDefault();
    }
    refresh() {
        const timeRanges = this.calculateServiceWorkerUpdateRanges();
        this.updateTimingTable(timeRanges);
    }
}
var ServiceWorkerUpdateNames;
(function (ServiceWorkerUpdateNames) {
    ServiceWorkerUpdateNames["Install"] = "Install";
    ServiceWorkerUpdateNames["Wait"] = "Wait";
    ServiceWorkerUpdateNames["Activate"] = "Activate";
})(ServiceWorkerUpdateNames || (ServiceWorkerUpdateNames = {}));


/***/ })

}]);