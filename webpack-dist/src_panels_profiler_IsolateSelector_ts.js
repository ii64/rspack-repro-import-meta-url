"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_profiler_IsolateSelector_ts"],{

/***/ "./src/panels/profiler/IsolateSelector.ts":
/*!************************************************!*\
  !*** ./src/panels/profiler/IsolateSelector.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsolateSelector: () => (/* binding */ IsolateSelector),
/* harmony export */   ListItem: () => (/* binding */ ListItem)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const UIStrings = {
    /**
     *@description aria label for javascript VM instances target list in heap profiler
     */
    javascriptVmInstances: 'JavaScript VM instances',
    /**
     *@description Text in Isolate Selector of a profiler tool
     */
    totalJsHeapSize: 'Total JS heap size',
    /**
     *@description Total trend div title in Isolate Selector of a profiler tool
     *@example {3} PH1
     */
    totalPageJsHeapSizeChangeTrend: 'Total page JS heap size change trend over the last {PH1} minutes.',
    /**
     *@description Total value div title in Isolate Selector of a profiler tool
     */
    totalPageJsHeapSizeAcrossAllVm: 'Total page JS heap size across all VM instances.',
    /**
     *@description Heap size change trend measured in kB/s
     *@example {2 kB} PH1
     */
    changeRate: '{PH1}/s',
    /**
     *@description Text for isolate selector list items with positive change rate
     *@example {1.0 kB} PH1
     */
    increasingBySPerSecond: 'increasing by {PH1} per second',
    /**
     *@description Text for isolate selector list items with negative change rate
     *@example {1.0 kB} PH1
     */
    decreasingBySPerSecond: 'decreasing by {PH1} per second',
    /**
     *@description Heap div title in Isolate Selector of a profiler tool
     */
    heapSizeInUseByLiveJsObjects: 'Heap size in use by live JS objects.',
    /**
     *@description Trend div title in Isolate Selector of a profiler tool
     *@example {3} PH1
     */
    heapSizeChangeTrendOverTheLastS: 'Heap size change trend over the last {PH1} minutes.',
    /**
     *@description Text to show an item is empty
     */
    empty: '(empty)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/IsolateSelector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class IsolateSelector extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox {
    constructor() {
        super(false);
        Object.defineProperty(this, "items", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "list", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "itemByIsolate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalValueDiv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "totalTrendDiv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel();
        this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListControl.ListControl(this.items, this, _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListControl.ListMode.NonViewport);
        this.list.element.classList.add('javascript-vm-instances-list');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(this.list.element, i18nString(UIStrings.javascriptVmInstances));
        this.contentElement.appendChild(this.list.element);
        this.itemByIsolate = new Map();
        this.totalElement = document.createElement('div');
        this.totalElement.classList.add('profile-memory-usage-item');
        this.totalElement.classList.add('hbox');
        this.totalValueDiv = this.totalElement.createChild('div', 'profile-memory-usage-item-size');
        this.totalTrendDiv = this.totalElement.createChild('div', 'profile-memory-usage-item-trend');
        this.totalElement.createChild('div').textContent = i18nString(UIStrings.totalJsHeapSize);
        const trendIntervalMinutes = Math.round(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.MemoryTrendWindowMs / 60e3);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.totalTrendDiv, i18nString(UIStrings.totalPageJsHeapSizeChangeTrend, { PH1: trendIntervalMinutes }));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.totalValueDiv, i18nString(UIStrings.totalPageJsHeapSizeAcrossAllVm));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().observeIsolates(this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Events.NameChanged, this.targetChanged, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.Events.InspectedURLChanged, this.targetChanged, this);
    }
    wasShown() {
        super.wasShown();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.Events.MemoryChanged, this.heapStatsChanged, this);
    }
    willHide() {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.Events.MemoryChanged, this.heapStatsChanged, this);
    }
    isolateAdded(isolate) {
        this.list.element.tabIndex = 0;
        const item = new ListItem(isolate);
        const index = item.model().target() ===
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget() ?
            0 :
            this.items.length;
        this.items.insert(index, item);
        this.itemByIsolate.set(isolate, item);
        if (this.items.length === 1 || isolate.isMainThread()) {
            this.list.selectItem(item);
        }
        this.update();
    }
    isolateChanged(isolate) {
        const item = this.itemByIsolate.get(isolate);
        if (item) {
            item.updateTitle();
        }
        this.update();
    }
    isolateRemoved(isolate) {
        const item = this.itemByIsolate.get(isolate);
        if (item) {
            this.items.remove(this.items.indexOf(item));
        }
        this.itemByIsolate.delete(isolate);
        if (this.items.length === 0) {
            this.list.element.tabIndex = -1;
        }
        this.update();
    }
    targetChanged(event) {
        const target = event.data;
        const model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.RuntimeModel);
        if (!model) {
            return;
        }
        const isolate = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().isolateByModel(model);
        const item = isolate && this.itemByIsolate.get(isolate);
        if (item) {
            item.updateTitle();
        }
    }
    heapStatsChanged(event) {
        const isolate = event.data;
        const listItem = this.itemByIsolate.get(isolate);
        if (listItem) {
            listItem.updateStats();
        }
        this.updateTotal();
    }
    updateTotal() {
        let total = 0;
        let trend = 0;
        for (const isolate of _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().isolates()) {
            total += isolate.usedHeapSize();
            trend += isolate.usedHeapSizeGrowRate();
        }
        this.totalValueDiv.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(total);
        IsolateSelector.formatTrendElement(trend, this.totalTrendDiv);
    }
    static formatTrendElement(trendValueMs, element) {
        const changeRateBytesPerSecond = trendValueMs * 1e3;
        const changeRateThresholdBytesPerSecond = 1000;
        if (Math.abs(changeRateBytesPerSecond) < changeRateThresholdBytesPerSecond) {
            return;
        }
        const changeRateText = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(Math.abs(changeRateBytesPerSecond));
        let changeText, changeLabel;
        if (changeRateBytesPerSecond > 0) {
            changeText = '\u2B06' + i18nString(UIStrings.changeRate, { PH1: changeRateText });
            element.classList.toggle('increasing', true);
            changeLabel = i18nString(UIStrings.increasingBySPerSecond, { PH1: changeRateText });
        }
        else {
            changeText = '\u2B07' + i18nString(UIStrings.changeRate, { PH1: changeRateText });
            element.classList.toggle('increasing', false);
            changeLabel = i18nString(UIStrings.decreasingBySPerSecond, { PH1: changeRateText });
        }
        element.textContent = changeText;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(element, changeLabel);
    }
    totalMemoryElement() {
        return this.totalElement;
    }
    createElementForItem(item) {
        return item.element;
    }
    heightForItem(_item) {
        console.assert(false, 'should not be called');
        return 0;
    }
    updateSelectedItemARIA(_fromElement, _toElement) {
        return false;
    }
    isItemSelectable(_item) {
        return true;
    }
    selectedItemChanged(_from, to, fromElement, toElement) {
        if (fromElement) {
            fromElement.classList.remove('selected');
        }
        if (toElement) {
            toElement.classList.add('selected');
        }
        const model = to && to.model();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.HeapProfilerModel.HeapProfilerModel, model && model.heapProfilerModel());
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel, model && model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel));
    }
    update() {
        this.updateTotal();
        this.list.invalidateRange(0, this.items.length);
    }
}
class ListItem {
    constructor(isolate) {
        Object.defineProperty(this, "isolate", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "heapDiv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "trendDiv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "nameDiv", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.isolate = isolate;
        const trendIntervalMinutes = Math.round(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.MemoryTrendWindowMs / 60e3);
        this.element = document.createElement('div');
        this.element.classList.add('profile-memory-usage-item');
        this.element.classList.add('hbox');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.markAsOption(this.element);
        this.heapDiv = this.element.createChild('div', 'profile-memory-usage-item-size');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.heapDiv, i18nString(UIStrings.heapSizeInUseByLiveJsObjects));
        this.trendDiv = this.element.createChild('div', 'profile-memory-usage-item-trend');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.trendDiv, i18nString(UIStrings.heapSizeChangeTrendOverTheLastS, { PH1: trendIntervalMinutes }));
        this.nameDiv = this.element.createChild('div', 'profile-memory-usage-item-name');
        this.updateTitle();
    }
    model() {
        return this.isolate.runtimeModel();
    }
    updateStats() {
        this.heapDiv.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(this.isolate.usedHeapSize());
        IsolateSelector.formatTrendElement(this.isolate.usedHeapSizeGrowRate(), this.trendDiv);
    }
    updateTitle() {
        const modelCountByName = new Map();
        for (const model of this.isolate.models()) {
            const target = model.target();
            const name = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget() !== target ? target.name() : '';
            const parsedURL = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(target.inspectedURL());
            const domain = parsedURL.isValid ? parsedURL.domain() : '';
            const title = target.decorateLabel(domain && name ? `${domain}: ${name}` : name || domain || i18nString(UIStrings.empty));
            modelCountByName.set(title, (modelCountByName.get(title) || 0) + 1);
        }
        this.nameDiv.removeChildren();
        const titles = [];
        for (const [name, count] of modelCountByName) {
            const title = count > 1 ? `${name} (${count})` : name;
            titles.push(title);
            const titleDiv = this.nameDiv.createChild('div');
            titleDiv.textContent = title;
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(titleDiv, String(title));
        }
    }
}


/***/ })

}]);