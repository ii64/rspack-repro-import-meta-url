"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_ServiceWorkerUpdateCycleView_js"], {
"./panels/application/ServiceWorkerUpdateCycleView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ServiceWorkerUpdateCycleView: function() { return ServiceWorkerUpdateCycleView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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




var UIStrings = {
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ version: 'Version',
    /**
     *@description Table heading for Service Workers update information. Update is a noun.
     */ updateActivity: 'Update Activity',
    /**
     *@description Title for the timeline tab.
     */ timeline: 'Timeline',
    /**
     *@description Text in Service Workers Update Life Cycle
     *@example {2} PH1
     */ startTimeS: 'Start time: {PH1}',
    /**
     *@description Text for end time of an event
     *@example {2} PH1
     */ endTimeS: 'End time: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/ServiceWorkerUpdateCycleView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ServiceWorkerUpdateCycleView = /*#__PURE__*/ function() {
    "use strict";
    function ServiceWorkerUpdateCycleView(registration) {
        _class_call_check(this, ServiceWorkerUpdateCycleView);
        _define_property(this, "registration", void 0);
        _define_property(this, "rows", void 0);
        _define_property(this, "selectedRowIndex", void 0);
        _define_property(this, "tableElement", void 0);
        this.registration = registration;
        this.rows = [];
        this.selectedRowIndex = -1;
        this.tableElement = document.createElement('table');
        this.createTimingTable();
    }
    _create_class(ServiceWorkerUpdateCycleView, [
        {
            key: "calculateServiceWorkerUpdateRanges",
            value: function calculateServiceWorkerUpdateRanges() {
                function addRange(ranges, range) {
                    if (range.start < Number.MAX_VALUE && range.start <= range.end) {
                        ranges.push(range);
                    }
                }
                /**
         * Add ranges representing Install, Wait or Activate of a sw version represented by id.
         */ function addNormalizedRanges(ranges, id, startInstallTime, endInstallTime, startActivateTime, endActivateTime, status) {
                    addRange(ranges, {
                        id: id,
                        phase: "Install" /* ServiceWorkerUpdateNames.Install */ ,
                        start: startInstallTime,
                        end: endInstallTime
                    });
                    if (status === "activating" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activating */  || status === "activated" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activated */  || status === "redundant" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Redundant */ ) {
                        addRange(ranges, {
                            id: id,
                            phase: "Wait" /* ServiceWorkerUpdateNames.Wait */ ,
                            start: endInstallTime,
                            end: startActivateTime
                        });
                        addRange(ranges, {
                            id: id,
                            phase: "Activate" /* ServiceWorkerUpdateNames.Activate */ ,
                            start: startActivateTime,
                            end: endActivateTime
                        });
                    }
                }
                function rangesForVersion(version) {
                    var state = version.currentState;
                    var endActivateTime = 0;
                    var beginActivateTime = 0;
                    var endInstallTime = 0;
                    var beginInstallTime = 0;
                    var currentStatus = state.status;
                    if (currentStatus === "new" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.New */ ) {
                        return [];
                    }
                    while(state){
                        // find the earliest timestamp of different stage on record.
                        if (state.status === "activated" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activated */ ) {
                            endActivateTime = state.lastUpdatedTimestamp;
                        } else if (state.status === "activating" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Activating */ ) {
                            if (endActivateTime === 0) {
                                endActivateTime = state.lastUpdatedTimestamp;
                            }
                            beginActivateTime = state.lastUpdatedTimestamp;
                        } else if (state.status === "installed" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Installed */ ) {
                            endInstallTime = state.lastUpdatedTimestamp;
                        } else if (state.status === "installing" /* Protocol.ServiceWorker.ServiceWorkerVersionStatus.Installing */ ) {
                            if (endInstallTime === 0) {
                                endInstallTime = state.lastUpdatedTimestamp;
                            }
                            beginInstallTime = state.lastUpdatedTimestamp;
                        }
                        state = state.previousState;
                    }
                    var ranges = [];
                    addNormalizedRanges(ranges, version.id, beginInstallTime, endInstallTime, beginActivateTime, endActivateTime, currentStatus);
                    return ranges;
                }
                var versions = this.registration.versionsByMode();
                var modes = [
                    "active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */ ,
                    "waiting" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Waiting */ ,
                    "installing" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing */ ,
                    "redundant" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Redundant */ 
                ];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = modes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var mode = _step.value;
                        var version = versions.get(mode);
                        if (version) {
                            var ranges = rangesForVersion(version);
                            return ranges;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return [];
            }
        },
        {
            key: "createTimingTable",
            value: function createTimingTable() {
                this.tableElement.classList.add('service-worker-update-timing-table');
                this.tableElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.tree('update-timing-table')));
                var timeRanges = this.calculateServiceWorkerUpdateRanges();
                this.updateTimingTable(timeRanges);
            }
        },
        {
            key: "createTimingTableHead",
            value: function createTimingTableHead() {
                var serverHeader = this.tableElement.createChild('tr', 'service-worker-update-timing-table-header');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.version));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.updateActivity));
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(serverHeader.createChild('td'), i18nString(UIStrings.timeline));
            }
        },
        {
            key: "removeRows",
            value: function removeRows() {
                var rows = this.tableElement.getElementsByTagName('tr');
                while(rows[0]){
                    if (rows[0].parentNode) {
                        rows[0].parentNode.removeChild(rows[0]);
                    }
                }
                this.rows = [];
            }
        },
        {
            key: "updateTimingTable",
            value: function updateTimingTable(timeRanges) {
                var _this = this;
                this.selectedRowIndex = -1;
                this.removeRows();
                this.createTimingTableHead();
                var timeRangeArray = timeRanges;
                if (timeRangeArray.length === 0) {
                    return;
                }
                var startTimes = timeRangeArray.map(function(r) {
                    return r.start;
                });
                var endTimes = timeRangeArray.map(function(r) {
                    return r.end;
                });
                var startTime = startTimes.reduce(function(a, b) {
                    return Math.min(a, b);
                });
                var endTime = endTimes.reduce(function(a, b) {
                    return Math.max(a, b);
                });
                var scale = 100 / (endTime - startTime);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = timeRangeArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var range = _step.value;
                        var phaseName = range.phase;
                        var left = scale * (range.start - startTime);
                        var right = scale * (endTime - range.end);
                        var tr = this.tableElement.createChild('tr', 'service-worker-update-timeline');
                        tr.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.treeItem('update-timeline').track({
                            click: true,
                            keydown: 'ArrowLeft|ArrowRight|ArrowUp|ArrowDown|Enter|Space'
                        })));
                        this.rows.push(tr);
                        var timingBarVersionElement = tr.createChild('td');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(timingBarVersionElement, '#' + range.id);
                        timingBarVersionElement.classList.add('service-worker-update-timing-bar-clickable');
                        timingBarVersionElement.setAttribute('tabindex', '0');
                        timingBarVersionElement.setAttribute('role', 'switch');
                        timingBarVersionElement.addEventListener('focus', function(event) {
                            _this.onFocus(event);
                        });
                        timingBarVersionElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.expand('timing-info').track({
                            click: true
                        })));
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setChecked(timingBarVersionElement, false);
                        var timingBarTitleElement = tr.createChild('td');
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(timingBarTitleElement, phaseName);
                        var barContainer = tr.createChild('td').createChild('div', 'service-worker-update-timing-row');
                        var bar = barContainer.createChild('span', 'service-worker-update-timing-bar ' + phaseName.toLowerCase());
                        bar.style.left = left + '%';
                        bar.style.right = right + '%';
                        bar.textContent = '\u200B'; // Important for 0-time items to have 0 width.
                        this.constructUpdateDetails(tr, range);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            /**
     * Detailed information about an update phase. Currently starting and ending time.
     */ key: "constructUpdateDetails",
            value: function constructUpdateDetails(tr, range) {
                var _this = this;
                var startRow = this.tableElement.createChild('tr', 'service-worker-update-timing-bar-details');
                startRow.classList.add('service-worker-update-timing-bar-details-collapsed');
                var startTimeItem = startRow.createChild('td');
                startTimeItem.colSpan = 3;
                var startTime = new Date(range.start).toISOString();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(startTimeItem.createChild('span'), i18nString(UIStrings.startTimeS, {
                    PH1: startTime
                }));
                startRow.tabIndex = 0;
                var endRow = this.tableElement.createChild('tr', 'service-worker-update-timing-bar-details');
                endRow.classList.add('service-worker-update-timing-bar-details-collapsed');
                var endTimeItem = endRow.createChild('td');
                endTimeItem.colSpan = 3;
                var endTime = new Date(range.end).toISOString();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(endTimeItem.createChild('span'), i18nString(UIStrings.endTimeS, {
                    PH1: endTime
                }));
                endRow.tabIndex = 0;
                tr.addEventListener('keydown', function(event) {
                    _this.onKeydown(event, startRow, endRow);
                });
                tr.addEventListener('click', function(event) {
                    _this.onClick(event, startRow, endRow);
                });
            }
        },
        {
            key: "toggle",
            value: function toggle(startRow, endRow, target, expanded) {
                if (target.classList.contains('service-worker-update-timing-bar-clickable')) {
                    startRow.classList.toggle('service-worker-update-timing-bar-details-collapsed');
                    startRow.classList.toggle('service-worker-update-timing-bar-details-expanded');
                    endRow.classList.toggle('service-worker-update-timing-bar-details-collapsed');
                    endRow.classList.toggle('service-worker-update-timing-bar-details-expanded');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setChecked(target, !expanded);
                }
            }
        },
        {
            key: "onFocus",
            value: function onFocus(event) {
                var target = event.target;
                if (!target) {
                    return;
                }
                var tr = target.parentElement;
                if (!tr) {
                    return;
                }
                this.selectedRowIndex = this.rows.indexOf(tr);
            }
        },
        {
            key: "onKeydown",
            value: function onKeydown(event, startRow, endRow) {
                if (!event.target) {
                    return;
                }
                var target = event.target;
                var keyboardEvent = event;
                var expanded = target.getAttribute('aria-checked') === 'true';
                if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
                    this.toggle(startRow, endRow, target, expanded);
                    event.preventDefault();
                    return;
                }
                if (!expanded && keyboardEvent.key === 'ArrowRight' || expanded && keyboardEvent.key === 'ArrowLeft') {
                    this.toggle(startRow, endRow, target, expanded);
                    event.preventDefault();
                    return;
                }
                if (keyboardEvent.key === 'ArrowDown') {
                    if (this.selectedRowIndex >= 0) {
                        this.selectNextRow();
                    } else {
                        this.selectFirstRow();
                    }
                    event.preventDefault();
                }
                if (keyboardEvent.key === 'ArrowUp') {
                    if (this.selectedRowIndex >= 0) {
                        this.selectPreviousRow();
                    } else {
                        this.selectLastRow();
                    }
                    event.preventDefault();
                }
            }
        },
        {
            key: "focusRow",
            value: function focusRow(row) {
                row.cells[0].focus();
            }
        },
        {
            key: "blurRow",
            value: function blurRow(row) {
                row.cells[0].blur();
            }
        },
        {
            key: "selectFirstRow",
            value: function selectFirstRow() {
                if (this.rows.length === 0) {
                    return;
                }
                this.selectedRowIndex = 0;
                this.focusRow(this.rows[0]);
            }
        },
        {
            key: "selectLastRow",
            value: function selectLastRow() {
                if (this.rows.length === 0) {
                    return;
                }
                this.selectedRowIndex = this.rows.length - 1;
                this.focusRow(this.rows[this.selectedRowIndex]);
            }
        },
        {
            key: "selectNextRow",
            value: function selectNextRow() {
                if (this.rows.length === 0) {
                    return;
                }
                var previousRowIndex = this.selectedRowIndex;
                this.selectedRowIndex++;
                if (this.selectedRowIndex >= this.rows.length) {
                    this.selectedRowIndex = 0;
                }
                this.blurRow(this.rows[previousRowIndex]);
                this.focusRow(this.rows[this.selectedRowIndex]);
            }
        },
        {
            key: "selectPreviousRow",
            value: function selectPreviousRow() {
                if (this.rows.length === 0) {
                    return;
                }
                var previousRowIndex = this.selectedRowIndex;
                this.selectedRowIndex--;
                if (this.selectedRowIndex < 0) {
                    this.selectedRowIndex = this.rows.length - 1;
                }
                this.blurRow(this.rows[previousRowIndex]);
                this.focusRow(this.rows[this.selectedRowIndex]);
            }
        },
        {
            key: "onClick",
            value: function onClick(event, startRow, endRow) {
                var tr = event.target;
                if (!tr) {
                    return;
                }
                var expanded = tr.getAttribute('aria-checked') === 'true';
                this.toggle(startRow, endRow, tr, expanded);
                event.preventDefault();
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var timeRanges = this.calculateServiceWorkerUpdateRanges();
                this.updateTimingTable(timeRanges);
            }
        }
    ]);
    return ServiceWorkerUpdateCycleView;
} //# sourceMappingURL=ServiceWorkerUpdateCycleView.js.map
();


}),

}]);