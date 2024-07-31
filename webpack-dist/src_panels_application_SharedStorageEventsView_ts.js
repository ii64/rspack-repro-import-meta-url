"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_SharedStorageEventsView_ts"],{

/***/ "./src/panels/application/SharedStorageEventsView.ts":
/*!***********************************************************!*\
  !*** ./src/panels/application/SharedStorageEventsView.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedStorageEventsView: () => (/* binding */ SharedStorageEventsView)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/application/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageEventsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2022 The Chromium Authors. All rights reserved.
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
var _SharedStorageEventsView_instances, _SharedStorageEventsView_sharedStorageEventGrid, _SharedStorageEventsView_events, _SharedStorageEventsView_noDisplayView, _SharedStorageEventsView_defaultId, _SharedStorageEventsView_getMainFrameResourceTreeModel, _SharedStorageEventsView_getMainFrame, _SharedStorageEventsView_onFocus;







const UIStrings = {
    /**
     *@description Placeholder text instructing the user how to display shared
     *storage event details.
     */
    clickToDisplayBody: 'Click on any shared storage event to display the event parameters.',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/SharedStorageEventsView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function eventEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
class SharedStorageEventsView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget {
    constructor() {
        super(/* isVertical */ false, /* secondIsSidebar: */ true);
        _SharedStorageEventsView_instances.add(this);
        _SharedStorageEventsView_sharedStorageEventGrid.set(this, new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageAccessGrid.SharedStorageAccessGrid());
        _SharedStorageEventsView_events.set(this, []);
        _SharedStorageEventsView_noDisplayView.set(this, void 0);
        _SharedStorageEventsView_defaultId.set(this, '');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('shared-storage-events')}`);
        const topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        __classPrivateFieldSet(this, _SharedStorageEventsView_noDisplayView, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox(), "f");
        topPanel.setMinimumSize(0, 80);
        this.setMainWidget(topPanel);
        __classPrivateFieldGet(this, _SharedStorageEventsView_noDisplayView, "f").setMinimumSize(0, 40);
        this.setSidebarWidget(__classPrivateFieldGet(this, _SharedStorageEventsView_noDisplayView, "f"));
        topPanel.contentElement.appendChild(__classPrivateFieldGet(this, _SharedStorageEventsView_sharedStorageEventGrid, "f"));
        __classPrivateFieldGet(this, _SharedStorageEventsView_sharedStorageEventGrid, "f").addEventListener('cellfocused', __classPrivateFieldGet(this, _SharedStorageEventsView_instances, "m", _SharedStorageEventsView_onFocus).bind(this));
        __classPrivateFieldGet(this, _SharedStorageEventsView_sharedStorageEventGrid, "f").setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('events-table')}`);
        __classPrivateFieldGet(this, _SharedStorageEventsView_instances, "m", _SharedStorageEventsView_getMainFrameResourceTreeModel).call(this)?.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, this.clearEvents, this);
        __classPrivateFieldGet(this, _SharedStorageEventsView_noDisplayView, "f").contentElement.classList.add('placeholder');
        const noDisplayDiv = __classPrivateFieldGet(this, _SharedStorageEventsView_noDisplayView, "f").contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
    }
    get id() {
        return __classPrivateFieldGet(this, _SharedStorageEventsView_instances, "m", _SharedStorageEventsView_getMainFrame).call(this)?.id || __classPrivateFieldGet(this, _SharedStorageEventsView_defaultId, "f");
    }
    wasShown() {
        super.wasShown();
        const sidebar = this.sidebarWidget();
        if (sidebar) {
            sidebar.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './sharedStorageEventsView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        }
    }
    addEvent(event) {
        // Only add event if main frame id matches.
        if (event.mainFrameId !== this.id) {
            return;
        }
        // Only add if not already present.
        if (__classPrivateFieldGet(this, _SharedStorageEventsView_events, "f").some(t => eventEquals(t, event))) {
            return;
        }
        __classPrivateFieldGet(this, _SharedStorageEventsView_events, "f").push(event);
        __classPrivateFieldGet(this, _SharedStorageEventsView_sharedStorageEventGrid, "f").data = __classPrivateFieldGet(this, _SharedStorageEventsView_events, "f");
    }
    clearEvents() {
        __classPrivateFieldSet(this, _SharedStorageEventsView_events, [], "f");
        __classPrivateFieldGet(this, _SharedStorageEventsView_sharedStorageEventGrid, "f").data = __classPrivateFieldGet(this, _SharedStorageEventsView_events, "f");
        this.setSidebarWidget(__classPrivateFieldGet(this, _SharedStorageEventsView_noDisplayView, "f"));
    }
    setDefaultIdForTesting(id) {
        __classPrivateFieldSet(this, _SharedStorageEventsView_defaultId, id, "f");
    }
    getEventsForTesting() {
        return __classPrivateFieldGet(this, _SharedStorageEventsView_events, "f");
    }
    getSharedStorageAccessGridForTesting() {
        return __classPrivateFieldGet(this, _SharedStorageEventsView_sharedStorageEventGrid, "f");
    }
}
_SharedStorageEventsView_sharedStorageEventGrid = new WeakMap(), _SharedStorageEventsView_events = new WeakMap(), _SharedStorageEventsView_noDisplayView = new WeakMap(), _SharedStorageEventsView_defaultId = new WeakMap(), _SharedStorageEventsView_instances = new WeakSet(), _SharedStorageEventsView_getMainFrameResourceTreeModel = function _SharedStorageEventsView_getMainFrameResourceTreeModel() {
    const primaryPageTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
    return primaryPageTarget?.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel) || null;
}, _SharedStorageEventsView_getMainFrame = function _SharedStorageEventsView_getMainFrame() {
    return __classPrivateFieldGet(this, _SharedStorageEventsView_instances, "m", _SharedStorageEventsView_getMainFrameResourceTreeModel).call(this)?.mainFrame || null;
}, _SharedStorageEventsView_onFocus = async function _SharedStorageEventsView_onFocus(event) {
    const focusedEvent = event;
    const row = focusedEvent.data.row;
    if (!row) {
        return;
    }
    const wrappedEvent = {
        accessTime: row.cells.find(cell => cell.columnId === 'event-time')?.value,
        accessType: row.cells.find(cell => cell.columnId === 'event-type')?.value,
        ownerOrigin: row.cells.find(cell => cell.columnId === 'event-owner-origin')?.value,
        eventParams: JSON.parse(row.cells.find(cell => cell.columnId === 'event-params')?.value),
    };
    const jsonView = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createViewSync(wrappedEvent);
    jsonView.setMinimumSize(0, 40);
    this.setSidebarWidget(jsonView);
};


/***/ })

}]);