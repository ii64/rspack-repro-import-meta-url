"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_IsolateSelector_js"], {
"./panels/profiler/IsolateSelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IsolateSelector: function() { return IsolateSelector; },
  ListItem: function() { return ListItem; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}





var UIStrings = {
    /**
     *@description aria label for javascript VM instances target list in heap profiler
     */ javascriptVmInstances: 'JavaScript VM instances',
    /**
     *@description Text in Isolate Selector of a profiler tool
     */ totalJsHeapSize: 'Total JS heap size',
    /**
     *@description Total trend div title in Isolate Selector of a profiler tool
     *@example {3} PH1
     */ totalPageJsHeapSizeChangeTrend: 'Total page JS heap size change trend over the last {PH1} minutes.',
    /**
     *@description Total value div title in Isolate Selector of a profiler tool
     */ totalPageJsHeapSizeAcrossAllVm: 'Total page JS heap size across all VM instances.',
    /**
     *@description Heap size change trend measured in kB/s
     *@example {2 kB} PH1
     */ changeRate: '{PH1}/s',
    /**
     *@description Text for isolate selector list items with positive change rate
     *@example {1.0 kB} PH1
     */ increasingBySPerSecond: 'increasing by {PH1} per second',
    /**
     *@description Text for isolate selector list items with negative change rate
     *@example {1.0 kB} PH1
     */ decreasingBySPerSecond: 'decreasing by {PH1} per second',
    /**
     *@description Heap div title in Isolate Selector of a profiler tool
     */ heapSizeInUseByLiveJsObjects: 'Heap size in use by live JS objects.',
    /**
     *@description Trend div title in Isolate Selector of a profiler tool
     *@example {3} PH1
     */ heapSizeChangeTrendOverTheLastS: 'Heap size change trend over the last {PH1} minutes.',
    /**
     *@description Text to show an item is empty
     */ empty: '(empty)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/IsolateSelector.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var IsolateSelector = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(IsolateSelector, _UI_Widget_VBox);
    var _super = _create_super(IsolateSelector);
    function IsolateSelector() {
        _class_call_check(this, IsolateSelector);
        var _this;
        _this = _super.call(this, false);
        _define_property(_assert_this_initialized(_this), "items", void 0);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "itemByIsolate", void 0);
        _define_property(_assert_this_initialized(_this), "totalElement", void 0);
        _define_property(_assert_this_initialized(_this), "totalValueDiv", void 0);
        _define_property(_assert_this_initialized(_this), "totalTrendDiv", void 0);
        _this.items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel();
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListControl.ListControl(_this.items, _assert_this_initialized(_this), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListControl.ListMode.NonViewport);
        _this.list.element.classList.add('javascript-vm-instances-list');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(_this.list.element, i18nString(UIStrings.javascriptVmInstances));
        _this.contentElement.appendChild(_this.list.element);
        _this.itemByIsolate = new Map();
        _this.totalElement = document.createElement('div');
        _this.totalElement.classList.add('profile-memory-usage-item');
        _this.totalElement.classList.add('hbox');
        _this.totalValueDiv = _this.totalElement.createChild('div', 'profile-memory-usage-item-size');
        _this.totalTrendDiv = _this.totalElement.createChild('div', 'profile-memory-usage-item-trend');
        _this.totalElement.createChild('div').textContent = i18nString(UIStrings.totalJsHeapSize);
        var trendIntervalMinutes = Math.round(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.MemoryTrendWindowMs / 60e3);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(_this.totalTrendDiv, i18nString(UIStrings.totalPageJsHeapSizeChangeTrend, {
            PH1: trendIntervalMinutes
        }));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(_this.totalValueDiv, i18nString(UIStrings.totalPageJsHeapSizeAcrossAllVm));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().observeIsolates(_assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener("NameChanged" /* SDK.TargetManager.Events.NameChanged */ , _this.targetChanged, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addEventListener("InspectedURLChanged" /* SDK.TargetManager.Events.InspectedURLChanged */ , _this.targetChanged, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(IsolateSelector, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(IsolateSelector.prototype), "wasShown", this).call(this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().addEventListener("MemoryChanged" /* SDK.IsolateManager.Events.MemoryChanged */ , this.heapStatsChanged, this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().removeEventListener("MemoryChanged" /* SDK.IsolateManager.Events.MemoryChanged */ , this.heapStatsChanged, this);
            }
        },
        {
            key: "isolateAdded",
            value: function isolateAdded(isolate) {
                this.list.element.tabIndex = 0;
                var item = new ListItem(isolate);
                var index = item.model().target() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget() ? 0 : this.items.length;
                this.items.insert(index, item);
                this.itemByIsolate.set(isolate, item);
                if (this.items.length === 1 || isolate.isMainThread()) {
                    this.list.selectItem(item);
                }
                this.update();
            }
        },
        {
            key: "isolateChanged",
            value: function isolateChanged(isolate) {
                var item = this.itemByIsolate.get(isolate);
                if (item) {
                    item.updateTitle();
                }
                this.update();
            }
        },
        {
            key: "isolateRemoved",
            value: function isolateRemoved(isolate) {
                var item = this.itemByIsolate.get(isolate);
                if (item) {
                    this.items.remove(this.items.indexOf(item));
                }
                this.itemByIsolate.delete(isolate);
                if (this.items.length === 0) {
                    this.list.element.tabIndex = -1;
                }
                this.update();
            }
        },
        {
            key: "targetChanged",
            value: function targetChanged(event) {
                var target = event.data;
                var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.RuntimeModel);
                if (!model) {
                    return;
                }
                var isolate = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().isolateByModel(model);
                var item = isolate && this.itemByIsolate.get(isolate);
                if (item) {
                    item.updateTitle();
                }
            }
        },
        {
            key: "heapStatsChanged",
            value: function heapStatsChanged(event) {
                var isolate = event.data;
                var listItem = this.itemByIsolate.get(isolate);
                if (listItem) {
                    listItem.updateStats();
                }
                this.updateTotal();
            }
        },
        {
            key: "updateTotal",
            value: function updateTotal() {
                var total = 0;
                var trend = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.IsolateManager.instance().isolates()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var isolate = _step.value;
                        total += isolate.usedHeapSize();
                        trend += isolate.usedHeapSizeGrowRate();
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
                this.totalValueDiv.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(total);
                IsolateSelector.formatTrendElement(trend, this.totalTrendDiv);
            }
        },
        {
            key: "totalMemoryElement",
            value: function totalMemoryElement() {
                return this.totalElement;
            }
        },
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                return item.element;
            }
        },
        {
            key: "heightForItem",
            value: function heightForItem(_item) {
                console.assert(false, 'should not be called');
                return 0;
            }
        },
        {
            key: "updateSelectedItemARIA",
            value: function updateSelectedItemARIA(_fromElement, _toElement) {
                return false;
            }
        },
        {
            key: "isItemSelectable",
            value: function isItemSelectable(_item) {
                return true;
            }
        },
        {
            key: "selectedItemChanged",
            value: function selectedItemChanged(_from, to, fromElement, toElement) {
                if (fromElement) {
                    fromElement.classList.remove('selected');
                }
                if (toElement) {
                    toElement.classList.add('selected');
                }
                var model = to && to.model();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.HeapProfilerModel.HeapProfilerModel, model && model.heapProfilerModel());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel, model && model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CPUProfilerModel.CPUProfilerModel));
            }
        },
        {
            key: "update",
            value: function update() {
                this.updateTotal();
                this.list.invalidateRange(0, this.items.length);
            }
        }
    ], [
        {
            key: "formatTrendElement",
            value: function formatTrendElement(trendValueMs, element) {
                var changeRateBytesPerSecond = trendValueMs * 1e3;
                var changeRateThresholdBytesPerSecond = 1000;
                if (Math.abs(changeRateBytesPerSecond) < changeRateThresholdBytesPerSecond) {
                    return;
                }
                var changeRateText = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(Math.abs(changeRateBytesPerSecond));
                var changeText, changeLabel;
                if (changeRateBytesPerSecond > 0) {
                    changeText = '\u2B06' + i18nString(UIStrings.changeRate, {
                        PH1: changeRateText
                    });
                    element.classList.toggle('increasing', true);
                    changeLabel = i18nString(UIStrings.increasingBySPerSecond, {
                        PH1: changeRateText
                    });
                } else {
                    changeText = '\u2B07' + i18nString(UIStrings.changeRate, {
                        PH1: changeRateText
                    });
                    element.classList.toggle('increasing', false);
                    changeLabel = i18nString(UIStrings.decreasingBySPerSecond, {
                        PH1: changeRateText
                    });
                }
                element.textContent = changeText;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setLabel(element, changeLabel);
            }
        }
    ]);
    return IsolateSelector;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox);
var ListItem = /*#__PURE__*/ function() {
    "use strict";
    function ListItem(isolate) {
        _class_call_check(this, ListItem);
        _define_property(this, "isolate", void 0);
        _define_property(this, "element", void 0);
        _define_property(this, "heapDiv", void 0);
        _define_property(this, "trendDiv", void 0);
        _define_property(this, "nameDiv", void 0);
        this.isolate = isolate;
        var trendIntervalMinutes = Math.round(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.IsolateManager.MemoryTrendWindowMs / 60e3);
        this.element = document.createElement('div');
        this.element.classList.add('profile-memory-usage-item');
        this.element.classList.add('hbox');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.markAsOption(this.element);
        this.heapDiv = this.element.createChild('div', 'profile-memory-usage-item-size');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.heapDiv, i18nString(UIStrings.heapSizeInUseByLiveJsObjects));
        this.trendDiv = this.element.createChild('div', 'profile-memory-usage-item-trend');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(this.trendDiv, i18nString(UIStrings.heapSizeChangeTrendOverTheLastS, {
            PH1: trendIntervalMinutes
        }));
        this.nameDiv = this.element.createChild('div', 'profile-memory-usage-item-name');
        this.updateTitle();
    }
    _create_class(ListItem, [
        {
            key: "model",
            value: function model() {
                return this.isolate.runtimeModel();
            }
        },
        {
            key: "updateStats",
            value: function updateStats() {
                this.heapDiv.textContent = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.NumberUtilities.bytesToString(this.isolate.usedHeapSize());
                IsolateSelector.formatTrendElement(this.isolate.usedHeapSizeGrowRate(), this.trendDiv);
            }
        },
        {
            key: "updateTitle",
            value: function updateTitle() {
                var modelCountByName = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.isolate.models()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var model = _step.value;
                        var target = model.target();
                        var name = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget() !== target ? target.name() : '';
                        var parsedURL = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(target.inspectedURL());
                        var domain = parsedURL.isValid ? parsedURL.domain() : '';
                        var title = target.decorateLabel(domain && name ? "".concat(domain, ": ").concat(name) : name || domain || i18nString(UIStrings.empty));
                        modelCountByName.set(title, (modelCountByName.get(title) || 0) + 1);
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
                this.nameDiv.removeChildren();
                var titles = [];
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = modelCountByName[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value = _sliced_to_array(_step1.value, 2), name1 = _step_value[0], count = _step_value[1];
                        var title1 = count > 1 ? "".concat(name1, " (").concat(count, ")") : name1;
                        titles.push(title1);
                        var titleDiv = this.nameDiv.createChild('div');
                        titleDiv.textContent = title1;
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(titleDiv, String(title1));
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
        }
    ]);
    return ListItem;
} //# sourceMappingURL=IsolateSelector.js.map
();


}),

}]);