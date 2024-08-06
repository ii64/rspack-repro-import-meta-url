"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseReportSelector_js"], {
"./panels/lighthouse/LighthouseReportSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Item: function() { return Item; },
  ReportSelector: function() { return ReportSelector; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
     *@description Title of combo box in audits report selector
     */ reports: 'Reports',
    /**
     *@description New report item label in Lighthouse Report Selector
     */ newReport: '(new report)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/lighthouse/LighthouseReportSelector.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ReportSelector = /*#__PURE__*/ function() {
    "use strict";
    function ReportSelector(renderNewLighthouseView) {
        _class_call_check(this, ReportSelector);
        _define_property(this, "renderNewLighthouseView", void 0);
        _define_property(this, "newLighthouseItem", void 0);
        _define_property(this, "comboBoxInternal", void 0);
        _define_property(this, "itemByOptionElement", void 0);
        this.renderNewLighthouseView = renderNewLighthouseView;
        this.newLighthouseItem = document.createElement('option');
        this.comboBoxInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarComboBox(this.handleChange.bind(this), i18nString(UIStrings.reports), 'lighthouse-report');
        this.comboBoxInternal.setMaxWidth(180);
        this.comboBoxInternal.setMinWidth(140);
        this.itemByOptionElement = new Map();
        this.setEmptyState();
    }
    _create_class(ReportSelector, [
        {
            key: "setEmptyState",
            value: function setEmptyState() {
                this.comboBoxInternal.selectElement().removeChildren();
                this.comboBoxInternal.setEnabled(false);
                this.newLighthouseItem = document.createElement('option');
                this.newLighthouseItem.label = i18nString(UIStrings.newReport);
                this.comboBoxInternal.selectElement().appendChild(this.newLighthouseItem);
                this.comboBoxInternal.select(this.newLighthouseItem);
            }
        },
        {
            key: "handleChange",
            value: function handleChange(_event) {
                var item = this.selectedItem();
                if (item) {
                    item.select();
                } else {
                    this.renderNewLighthouseView();
                }
            }
        },
        {
            key: "selectedItem",
            value: function selectedItem() {
                var option = this.comboBoxInternal.selectedOption();
                return this.itemByOptionElement.get(option);
            }
        },
        {
            key: "hasCurrentSelection",
            value: function hasCurrentSelection() {
                return Boolean(this.selectedItem());
            }
        },
        {
            key: "hasItems",
            value: function hasItems() {
                return this.itemByOptionElement.size > 0;
            }
        },
        {
            key: "comboBox",
            value: function comboBox() {
                return this.comboBoxInternal;
            }
        },
        {
            key: "prepend",
            value: function prepend(item) {
                var optionEl = item.optionElement();
                var selectEl = this.comboBoxInternal.selectElement();
                this.itemByOptionElement.set(optionEl, item);
                selectEl.insertBefore(optionEl, selectEl.firstElementChild);
                this.comboBoxInternal.setEnabled(true);
                this.comboBoxInternal.select(optionEl);
                item.select();
            }
        },
        {
            key: "clearAll",
            value: function clearAll() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.comboBoxInternal.options()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var elem = _step.value;
                        var _this_itemByOptionElement_get;
                        if (elem === this.newLighthouseItem) {
                            continue;
                        }
                        (_this_itemByOptionElement_get = this.itemByOptionElement.get(elem)) === null || _this_itemByOptionElement_get === void 0 ? void 0 : _this_itemByOptionElement_get.delete();
                        this.itemByOptionElement.delete(elem);
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
                this.setEmptyState();
            }
        },
        {
            key: "selectNewReport",
            value: function selectNewReport() {
                this.comboBoxInternal.select(this.newLighthouseItem);
            }
        }
    ]);
    return ReportSelector;
}();
var Item = /*#__PURE__*/ function() {
    "use strict";
    function Item(lighthouseResult, renderReport, showLandingCallback) {
        _class_call_check(this, Item);
        _define_property(this, "lighthouseResult", void 0);
        _define_property(this, "renderReport", void 0);
        _define_property(this, "showLandingCallback", void 0);
        _define_property(this, "element", void 0);
        this.lighthouseResult = lighthouseResult;
        this.renderReport = renderReport;
        this.showLandingCallback = showLandingCallback;
        // In Lighthouse 10.0, `finalUrl` is not provided on snapshot or timespan reports.
        // `finalDisplayedUrl` is the new preferred URL to use for cosmetic identification.
        // TODO: Remove the `finalUrl` backport once Lighthouse 10.0 is rolled into DevTools.
        var finalDisplayedUrl = lighthouseResult.finalDisplayedUrl || lighthouseResult.finalUrl || '';
        var url = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(finalDisplayedUrl);
        var timestamp = lighthouseResult.fetchTime;
        this.element = document.createElement('option');
        this.element.label = "".concat(new Date(timestamp).toLocaleTimeString(), " - ").concat(url.domain());
    }
    _create_class(Item, [
        {
            key: "select",
            value: function select() {
                this.renderReport();
            }
        },
        {
            key: "optionElement",
            value: function optionElement() {
                return this.element;
            }
        },
        {
            key: "delete",
            value: function _delete() {
                if (this.element) {
                    this.element.remove();
                }
                this.showLandingCallback();
            }
        }
    ]);
    return Item;
} //# sourceMappingURL=LighthouseReportSelector.js.map
();


}),

}]);