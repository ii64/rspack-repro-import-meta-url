"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkLogView_js-panels_network_NetworkLogViewColumns_js-panels_network_Netwo-dec67c"], {
"./panels/network/NetworkFrameGrouper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FrameGroupNode: function() { return FrameGroupNode; },
  NetworkFrameGrouper: function() { return NetworkFrameGrouper; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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





var NetworkFrameGrouper = /*#__PURE__*/ function() {
    "use strict";
    function NetworkFrameGrouper(parentView) {
        _class_call_check(this, NetworkFrameGrouper);
        _define_property(this, "parentView", void 0);
        _define_property(this, "activeGroups", void 0);
        this.parentView = parentView;
        this.activeGroups = new Map();
    }
    _create_class(NetworkFrameGrouper, [
        {
            key: "groupNodeForRequest",
            value: function groupNodeForRequest(request) {
                var frame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel.frameForRequest(request);
                if (!frame || frame.isOutermostFrame()) {
                    return null;
                }
                var groupNode = this.activeGroups.get(frame);
                if (groupNode) {
                    return groupNode;
                }
                groupNode = new FrameGroupNode(this.parentView, frame);
                this.activeGroups.set(frame, groupNode);
                return groupNode;
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.activeGroups.clear();
            }
        }
    ]);
    return NetworkFrameGrouper;
}();
var FrameGroupNode = /*#__PURE__*/ function(NetworkGroupNode) {
    "use strict";
    _inherits(FrameGroupNode, NetworkGroupNode);
    var _super = _create_super(FrameGroupNode);
    function FrameGroupNode(parentView, frame) {
        _class_call_check(this, FrameGroupNode);
        var _this;
        _this = _super.call(this, parentView);
        _define_property(_assert_this_initialized(_this), "frame", void 0);
        _this.frame = frame;
        return _this;
    }
    _create_class(FrameGroupNode, [
        {
            key: "displayName",
            value: function displayName() {
                return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL(this.frame.url).domain() || this.frame.name || '<iframe>';
            }
        },
        {
            key: "renderCell",
            value: function renderCell(cell, columnId) {
                _get(_get_prototype_of(FrameGroupNode.prototype), "renderCell", this).call(this, cell, columnId);
                var columnIndex = this.dataGrid.indexOfVisibleColumn(columnId);
                if (columnIndex === 0) {
                    var name = this.displayName();
                    cell.appendChild(_ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('frame', 'network-frame-group-icon'));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.createTextChild(cell, name);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip.Tooltip.install(cell, name);
                    this.setCellAccessibleName(cell.textContent || '', cell, columnId);
                }
            }
        }
    ]);
    return FrameGroupNode;
} //# sourceMappingURL=NetworkFrameGrouper.js.map
(_NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__.NetworkGroupNode);


}),
"./panels/network/NetworkLogView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DropDownTypesUI: function() { return DropDownTypesUI; },
  HTTPSchemas: function() { return HTTPSchemas; },
  MoreFiltersDropDownUI: function() { return MoreFiltersDropDownUI; },
  NetworkLogView: function() { return NetworkLogView; },
  computeStackTraceText: function() { return computeStackTraceText; },
  isRequestFilteredOut: function() { return isRequestFilteredOut; },
  overrideFilter: function() { return overrideFilter; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/har/har.js */ "./models/har/har.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./panels/network/NetworkFrameGrouper.js");
/* harmony import */var _networkLogView_css_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./networkLogView.css.js */ "./panels/network/networkLogView.css.js");
/* harmony import */var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./panels/network/NetworkLogViewColumns.js");
/* harmony import */var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008, 2009 Anthony Ricaud <rik@webkit.org>
 * Copyright (C) 2011 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

























var UIStrings = {
    /**
     *@description Text in Network Log View of the Network panel
     */ invertFilter: 'Invert',
    /**
     *@description Tooltip for the 'invert' checkbox in the Network panel.
     */ invertsFilter: 'Inverts the search filter',
    /**
     *@description Text for everything
     */ allStrings: 'All',
    /**
     *@description Text in Network Log View of the Network panel
     */ hideDataUrls: 'Hide data URLs',
    /**
     *@description Data urlfilter ui element title in Network Log View of the Network panel
     */ hidesDataAndBlobUrls: 'Hide \'data:\' and \'blob:\' URLs',
    /**
     * @description Label for a filter in the Network panel
     */ chromeExtensions: 'Hide extension URLs',
    /**
     * @description Tooltip for a filter in the Network panel
     */ hideChromeExtension: 'Hide \'chrome-extension://\' URLs',
    /**
     *@description Aria accessible name in Network Log View of the Network panel
     */ requestTypesToInclude: 'Request types to include',
    /**
     * @description Tooltip for the `Request types` dropdown in the Network Panel
     */ requestTypesTooltip: 'Filter requests by type',
    /**
     * @description Label for the dropdown in the Network Panel
     */ requestTypes: 'Request types',
    /**
     * @description Dynamic label for the `Request types` dropdown in the Network panel
     * @example {Doc} PH1
     * @example {CSS} PH2
     */ twoTypesSelected: '{PH1}, {PH2}',
    /**
     * @description: Dynamic label for the `Request types` dropdown in the Network panel
     * @example {Doc} PH1
     * @example {CSS} PH2
     */ overTwoTypesSelected: '{PH1}, {PH2}...',
    /**
     *@description Label for a checkbox in the Network panel. When checked, only requests with
     *             blocked response cookies are shown.
     */ hasBlockedCookies: 'Blocked response cookies',
    /**
     *@description Tooltip for a checkbox in the Network panel. The response to a network request may include a
     *             cookie (https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies). Such response cookies can
     *             be malformed or otherwise invalid and the browser may choose to ignore or not accept invalid cookies.
     */ onlyShowRequestsWithBlockedCookies: 'Show only requests with blocked response cookies',
    /**
     *@description Label for a filter in the Network panel
     */ blockedRequests: 'Blocked requests',
    /**
     *@description Tooltip for a filter in the Network panel
     */ onlyShowBlockedRequests: 'Show only blocked requests',
    /**
     *@description Label for a filter in the Network panel
     */ thirdParty: '3rd-party requests',
    /**
     *@description Tooltip for a filter in the Network panel
     */ onlyShowThirdPartyRequests: 'Show only requests with origin different from page origin',
    /**
     *@description Text that appears when user drag and drop something (for example, a file) in Network Log View of the Network panel
     */ dropHarFilesHere: 'Drop HAR files here',
    /**
     *@description Recording text text content in Network Log View of the Network panel
     */ recordingNetworkActivity: 'Recording network activity…',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {Ctrl + R} PH1
     */ performARequestOrHitSToRecordThe: 'Perform a request or hit {PH1} to record the reload.',
    /**
     *@description Shown in the Network Log View of the Network panel when the user has not yet
     * recorded any network activity. This is an instruction to the user to start recording in order to
     * show network activity in the current UI.
     *@example {Ctrl + E} PH1
     */ recordToDisplayNetworkActivity: 'Record network log ({PH1}) to display network activity.',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Text to announce to screen readers that network data is available.
     */ networkDataAvailable: 'Network Data Available',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {3} PH1
     *@example {5} PH2
     */ sSRequests: '{PH1} / {PH2} requests',
    /**
     *@description Message in the summary toolbar at the bottom of the Network log that shows the compressed size of the
     * resources transferred during a selected time frame over the compressed size of all resources transferred during
     * the whole network log.
     *@example {5 B} PH1
     *@example {10 B} PH2
     */ sSTransferred: '{PH1} / {PH2} transferred',
    /**
     *@description Message in a tooltip that shows the compressed size of the resources transferred during a selected
     * time frame over the compressed size of all resources transferred during the whole network log.
     *@example {10} PH1
     *@example {15} PH2
     */ sBSBTransferredOverNetwork: '{PH1} B / {PH2} B transferred over network',
    /**
     * @description Text in Network Log View of the Network panel. Appears when a particular network
     * resource is selected by the user. Shows how large the selected resource was (PH1) out of the
     * total size (PH2).
     * @example {40MB} PH1
     * @example {50MB} PH2
     */ sSResources: '{PH1} / {PH2} resources',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {40} PH1
     *@example {50} PH2
     */ sBSBResourcesLoadedByThePage: '{PH1} B / {PH2} B resources loaded by the page',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {6} PH1
     */ sRequests: '{PH1} requests',
    /**
     *@description Message in the summary toolbar at the bottom of the Network log that shows the compressed size of
     * all resources transferred over network during a network activity log.
     *@example {4 B} PH1
     */ sTransferred: '{PH1} transferred',
    /**
     *@description Message in a tooltip that shows the compressed size of all resources transferred over network during
     * a network activity log.
     *@example {4} PH1
     */ sBTransferredOverNetwork: '{PH1} B transferred over network',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {4} PH1
     */ sResources: '{PH1} resources',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {10} PH1
     */ sBResourcesLoadedByThePage: '{PH1} B resources loaded by the page',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {120ms} PH1
     */ finishS: 'Finish: {PH1}',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {3000ms} PH1
     */ domcontentloadedS: 'DOMContentLoaded: {PH1}',
    /**
     *@description Text in Network Log View of the Network panel
     *@example {40ms} PH1
     */ loadS: 'Load: {PH1}',
    /**
     *@description Text for copying
     */ copy: 'Copy',
    /**
     *@description A context menu command in the Network panel, for copying the URL of the selected request to the clipboard.
     */ copyURL: 'Copy URL',
    /**
     *@description Text in Network Log View of the Network panel
     */ copyRequestHeaders: 'Copy request headers',
    /**
     *@description Text in Network Log View of the Network panel
     */ copyResponseHeaders: 'Copy response headers',
    /**
     *@description Text in Network Log View of the Network panel
     */ copyResponse: 'Copy response',
    /**
     *@description Text in Network Log View of the Network panel
     */ copyStacktrace: 'Copy stack trace',
    /**
     * @description A context menu command in the Network panel, for copying to the clipboard.
     * PowerShell refers to the format the data will be copied as.
     */ copyAsPowershell: 'Copy as `PowerShell`',
    /**
     *@description A context menu command in the Network panel, for copying to the clipboard. 'fetch'
     * refers to the format the data will be copied as, which is compatible with the fetch web API.
     */ copyAsFetch: 'Copy as `fetch`',
    /**
     * @description Text in Network Log View of the Network panel. An action that copies a command to
     * the developer's clipboard. The command allows the developer to replay this specific network
     * request in Node.js, a desktop application/framework. 'Node.js fetch' is a noun phrase for the
     * type of request that will be copied.
     */ copyAsNodejsFetch: 'Copy as `fetch` (`Node.js`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable).
     */ copyAsCurlCmd: 'Copy as `cURL` (`cmd`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Bash script.
     */ copyAsCurlBash: 'Copy as `cURL` (`bash`)',
    /**
     *@description A context menu command in the Network panel, for copying the URLs of all requestes to the clipboard.
     */ copyAllURLs: 'Copy all URLs',
    /**
     *@description A context menu command in the Network panel, for copying the URLs of all requestes
     (after applying the Network filter) to the clipboard.
     */ copyAllListedURLs: 'Copy all listed URLs',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a PowerShell script to
     *represent all network requests.
     */ copyAllAsPowershell: 'Copy all as `PowerShell`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a PowerShell script to
     *represent all network requests (after applying the Network filter).
     */ copyAllListedAsPowershell: 'Copy all listed as `PowerShell`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a 'fetch' command (fetch
     *should not be translated) to represent all network requests.
     */ copyAllAsFetch: 'Copy all as `fetch`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a 'fetch' command (fetch
     *should not be translated) to represent all network requests (after applying the Network filter).
     */ copyAllListedAsFetch: 'Copy all listed as `fetch`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Node.js 'fetch' command
     *(fetch and Node.js should not be translated) to represent all network requests.
     */ copyAllAsNodejsFetch: 'Copy all as `fetch` (`Node.js`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Node.js 'fetch' command
     *(fetch and Node.js should not be translated) to represent all network requests (after applying
     *the Network filter).
     */ copyAllListedAsNodejsFetch: 'Copy all listed as `fetch` (`Node.js`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests.
     */ copyAllAsCurlCmd: 'Copy all as `cURL` (`cmd`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests (after applying the Network filter).
     */ copyAllListedAsCurlCmd: 'Copy all listed as `cURL` (`cmd`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Bash script to represent
     *all network requests.
     */ copyAllAsCurlBash: 'Copy all as `cURL` (`bash`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with a Bash script to represent
     *all network requests (after applying the Network filter).
     */ copyAllListedAsCurlBash: 'Copy all listed as `cURL` (`bash`)',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable).
     */ copyAsCurl: 'Copy as `cURL`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests.
     */ copyAllAsCurl: 'Copy all as `cURL`',
    /**
     *@description Text in Network Log View of the Network panel. An action that copies a command to
     *the clipboard. It will copy the command in the format compatible with cURL (a program, not
     *translatable) to represent all network requests (after applying the Network filter).
     */ copyAllListedAsCurl: 'Copy all listed as `cURL`',
    /**
     * @description Text in Network Log View of the Network panel. An action that copies data to the
     * clipboard. It will copy the data in the HAR (not translatable) format. 'all' refers to every
     * network request that is currently shown.
     */ copyAllAsHar: 'Copy all as `HAR`',
    /**
     * @description Text in Network Log View of the Network panel. An action that copies data to the
     * clipboard. It will copy the data in the HAR (not translatable) format. 'all' refers to every
     * network request that is currently shown (after applying the Network filter).
     */ copyAllListedAsHar: 'Copy all listed as `HAR`',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */ saveAllAsHarWithContent: 'Save all as `HAR` with content',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */ clearBrowserCache: 'Clear browser cache',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */ clearBrowserCookies: 'Clear browser cookies',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */ blockRequestUrl: 'Block request URL',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     *@example {example.com} PH1
     */ unblockS: 'Unblock {PH1}',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     */ blockRequestDomain: 'Block request domain',
    /**
     *@description Text to replay an XHR request
     */ replayXhr: 'Replay XHR',
    /**
     *@description Text in Network Log View of the Network panel
     */ areYouSureYouWantToClearBrowser: 'Are you sure you want to clear browser cache?',
    /**
     *@description Text in Network Log View of the Network panel
     */ areYouSureYouWantToClearBrowserCookies: 'Are you sure you want to clear browser cookies?',
    /**
     *@description A context menu item in the Network Log View of the Network panel
     * for creating a header override
     */ overrideHeaders: 'Override headers',
    /**
     * @description Tooltip for the Show only/Hide requests dropdown of the filterbar
     */ showOnlyHideRequests: 'Show only/hide requests',
    /**
     * @description Text for the Show only/Hide requests dropdown button of the filterbar
     */ moreFilters: 'More filters',
    /**
     * @description Text for the Request types dropdown button tooltip
     * @example {Media, Images} PH1
     */ showOnly: 'Show only {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/NetworkLogView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_14__.RenderCoordinator.RenderCoordinator.instance();
var _handleCreateResponseHeaderOverrideClick = /*#__PURE__*/ new WeakSet();
var NetworkLogView = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(NetworkLogView, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(NetworkLogView);
    function NetworkLogView(filterBar, progressBarContainer, networkLogLargeRowsSetting) {
        _class_call_check(this, NetworkLogView);
        var _this;
        var updateRowHeight = function updateRowHeight() {
            this.rawRowHeight = Boolean(this.networkLogLargeRowsSetting.get()) ? 41 : 21;
            this.rowHeightInternal = this.computeRowHeight();
        };
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _handleCreateResponseHeaderOverrideClick);
        _define_property(_assert_this_initialized(_this), "networkInvertFilterSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkHideDataURLSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkHideChromeExtensions", void 0);
        _define_property(_assert_this_initialized(_this), "networkShowBlockedCookiesOnlySetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkOnlyBlockedRequestsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkOnlyThirdPartySetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkResourceTypeFiltersSetting", void 0);
        _define_property(_assert_this_initialized(_this), "rawRowHeight", void 0);
        _define_property(_assert_this_initialized(_this), "progressBarContainer", void 0);
        _define_property(_assert_this_initialized(_this), "networkLogLargeRowsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "rowHeightInternal", void 0);
        _define_property(_assert_this_initialized(_this), "timeCalculatorInternal", void 0);
        _define_property(_assert_this_initialized(_this), "durationCalculator", void 0);
        _define_property(_assert_this_initialized(_this), "calculatorInternal", void 0);
        _define_property(_assert_this_initialized(_this), "columnsInternal", void 0);
        _define_property(_assert_this_initialized(_this), "staleRequests", void 0);
        _define_property(_assert_this_initialized(_this), "mainRequestLoadTime", void 0);
        _define_property(_assert_this_initialized(_this), "mainRequestDOMContentLoadedTime", void 0);
        _define_property(_assert_this_initialized(_this), "filters", void 0);
        _define_property(_assert_this_initialized(_this), "timeFilter", void 0);
        _define_property(_assert_this_initialized(_this), "hoveredNodeInternal", void 0);
        _define_property(_assert_this_initialized(_this), "recordingHint", void 0);
        _define_property(_assert_this_initialized(_this), "highlightedNode", void 0);
        _define_property(_assert_this_initialized(_this), "linkifierInternal", void 0);
        _define_property(_assert_this_initialized(_this), "recording", void 0);
        _define_property(_assert_this_initialized(_this), "needsRefresh", void 0);
        _define_property(_assert_this_initialized(_this), "headerHeightInternal", void 0);
        _define_property(_assert_this_initialized(_this), "groupLookups", void 0);
        _define_property(_assert_this_initialized(_this), "activeGroupLookup", void 0);
        _define_property(_assert_this_initialized(_this), "textFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "invertFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "dataURLFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "moreFiltersDropDownUI", void 0);
        _define_property(_assert_this_initialized(_this), "onlyBlockedResponseCookiesFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "onlyBlockedRequestsUI", void 0);
        _define_property(_assert_this_initialized(_this), "onlyThirdPartyFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "hideChromeExtensionsUI", void 0);
        _define_property(_assert_this_initialized(_this), "resourceCategoryFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "filterParser", void 0);
        _define_property(_assert_this_initialized(_this), "suggestionBuilder", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "summaryToolbarInternal", void 0);
        _define_property(_assert_this_initialized(_this), "filterBar", void 0);
        _define_property(_assert_this_initialized(_this), "textFilterSetting", void 0);
        _this.setMinimumSize(50, 64);
        _this.element.id = 'network-container';
        _this.element.classList.add('no-node-selected');
        _this.networkInvertFilterSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-invert-filter', false);
        _this.networkHideDataURLSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-data-url', false);
        _this.networkHideChromeExtensions = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-chrome-extensions', false);
        _this.networkShowBlockedCookiesOnlySetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-show-blocked-cookies-only-setting', false);
        _this.networkOnlyBlockedRequestsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-blocked-requests', false);
        _this.networkOnlyThirdPartySetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-third-party-setting', false);
        _this.networkResourceTypeFiltersSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-resource-type-filters', {});
        _this.rawRowHeight = 0;
        _this.progressBarContainer = progressBarContainer;
        _this.networkLogLargeRowsSetting = networkLogLargeRowsSetting;
        _this.networkLogLargeRowsSetting.addChangeListener(updateRowHeight.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
        _this.rawRowHeight = 0;
        _this.rowHeightInternal = 0;
        updateRowHeight.call(_assert_this_initialized(_this));
        _this.timeCalculatorInternal = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__.NetworkTransferTimeCalculator();
        _this.durationCalculator = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__.NetworkTransferDurationCalculator();
        _this.calculatorInternal = _this.timeCalculatorInternal;
        _this.columnsInternal = new _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_23__.NetworkLogViewColumns(_assert_this_initialized(_this), _this.timeCalculatorInternal, _this.durationCalculator, networkLogLargeRowsSetting);
        _this.columnsInternal.show(_this.element);
        _this.staleRequests = new Set();
        _this.mainRequestLoadTime = -1;
        _this.mainRequestDOMContentLoadedTime = -1;
        _this.filters = [];
        _this.timeFilter = null;
        _this.hoveredNodeInternal = null;
        _this.recordingHint = null;
        _this.highlightedNode = null;
        _this.linkifierInternal = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_17__.Linkifier.Linkifier();
        _this.recording = false;
        _this.needsRefresh = false;
        _this.headerHeightInternal = 0;
        _this.groupLookups = new Map();
        _this.groupLookups.set('Frame', new _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_21__.NetworkFrameGrouper(_assert_this_initialized(_this)));
        _this.activeGroupLookup = null;
        _this.textFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.TextFilterUI();
        _this.textFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged, _assert_this_initialized(_this));
        filterBar.addFilter(_this.textFilterUI);
        _this.invertFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('invert-filter', i18nString(UIStrings.invertFilter), true, _this.networkInvertFilterSetting, 'invert-filter');
        _this.invertFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(_this.invertFilterUI.element(), i18nString(UIStrings.invertsFilter));
        filterBar.addFilter(_this.invertFilterUI);
        filterBar.addDivider();
        var filterItems = Object.entries(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceCategories).map(function(param) {
            var _param = _sliced_to_array(param, 2), key = _param[0], category = _param[1];
            return {
                name: category.title(),
                label: function() {
                    return category.shortTitle();
                },
                title: category.title(),
                jslogContext: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(key)
            };
        });
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ )) {
            _this.resourceCategoryFilterUI = new DropDownTypesUI(filterItems, _this.networkResourceTypeFiltersSetting);
            _this.resourceCategoryFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged, _assert_this_initialized(_this));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.setLabel(_this.resourceCategoryFilterUI.element(), i18nString(UIStrings.requestTypesToInclude));
            _this.resourceCategoryFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
            filterBar.addFilter(_this.resourceCategoryFilterUI);
            filterBar.addDivider();
            _this.moreFiltersDropDownUI = new MoreFiltersDropDownUI();
            _this.moreFiltersDropDownUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged, _assert_this_initialized(_this));
            filterBar.addFilter(_this.moreFiltersDropDownUI);
        } else {
            _this.dataURLFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('hide-data-url', i18nString(UIStrings.hideDataUrls), true, _this.networkHideDataURLSetting, 'hide-data-urls');
            _this.dataURLFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(_this.dataURLFilterUI.element(), i18nString(UIStrings.hidesDataAndBlobUrls));
            filterBar.addFilter(_this.dataURLFilterUI);
            _this.hideChromeExtensionsUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('chrome-extension', i18nString(UIStrings.chromeExtensions), true, _this.networkHideChromeExtensions, 'hide-extension-urls');
            _this.hideChromeExtensionsUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(_this.hideChromeExtensionsUI.element(), i18nString(UIStrings.hideChromeExtension));
            filterBar.addFilter(_this.hideChromeExtensionsUI);
            _this.resourceCategoryFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.NamedBitSetFilterUI(filterItems, _this.networkResourceTypeFiltersSetting);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.setLabel(_this.resourceCategoryFilterUI.element(), i18nString(UIStrings.requestTypesToInclude));
            _this.resourceCategoryFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
            filterBar.addFilter(_this.resourceCategoryFilterUI);
            _this.onlyBlockedResponseCookiesFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('only-show-blocked-cookies', i18nString(UIStrings.hasBlockedCookies), true, _this.networkShowBlockedCookiesOnlySetting, 'only-show-blocked-cookies');
            _this.onlyBlockedResponseCookiesFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(_this.onlyBlockedResponseCookiesFilterUI.element(), i18nString(UIStrings.onlyShowRequestsWithBlockedCookies));
            filterBar.addFilter(_this.onlyBlockedResponseCookiesFilterUI);
            _this.onlyBlockedRequestsUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('only-show-blocked-requests', i18nString(UIStrings.blockedRequests), true, _this.networkOnlyBlockedRequestsSetting, 'only-show-blocked-requests');
            _this.onlyBlockedRequestsUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(_this.onlyBlockedRequestsUI.element(), i18nString(UIStrings.onlyShowBlockedRequests));
            filterBar.addFilter(_this.onlyBlockedRequestsUI);
            _this.onlyThirdPartyFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterBar.CheckboxFilterUI('only-show-third-party', i18nString(UIStrings.thirdParty), true, _this.networkOnlyThirdPartySetting, 'only-show-third-party');
            _this.onlyThirdPartyFilterUI.addEventListener("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ , _this.filterChanged.bind(_assert_this_initialized(_this)), _assert_this_initialized(_this));
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Tooltip.Tooltip.install(_this.onlyThirdPartyFilterUI.element(), i18nString(UIStrings.onlyShowThirdPartyRequests));
            filterBar.addFilter(_this.onlyThirdPartyFilterUI);
        }
        _this.filterParser = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__.TextUtils.FilterParser(searchKeys);
        _this.suggestionBuilder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.FilterSuggestionBuilder.FilterSuggestionBuilder(searchKeys, NetworkLogView.sortSearchValues);
        _this.resetSuggestionBuilder();
        _this.dataGrid = _this.columnsInternal.dataGrid();
        _this.setupDataGrid();
        _this.columnsInternal.sortByCurrentColumn();
        filterBar.filterButton().addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.dataGrid.scheduleUpdate.bind(_this.dataGrid, true));
        _this.summaryToolbarInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.Toolbar('network-summary-bar', _this.element);
        _this.summaryToolbarInternal.element.setAttribute('role', 'status');
        new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.DropTarget.DropTarget(_this.element, [
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.DropTarget.Type.File
        ], i18nString(UIStrings.dropHarFilesHere), _this.handleDrop.bind(_assert_this_initialized(_this)));
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-color-code-resource-types').addChangeListener(_this.invalidateAllItems.bind(_assert_this_initialized(_this), false), _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager, _assert_this_initialized(_this), {
            scoped: true
        });
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.RequestAdded, _this.onRequestUpdated, _assert_this_initialized(_this));
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.RequestUpdated, _this.onRequestUpdated, _assert_this_initialized(_this));
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.RequestRemoved, _this.onRequestRemoved, _assert_this_initialized(_this));
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.Events.Reset, _this.reset, _assert_this_initialized(_this));
        _this.updateGroupByFrame();
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.group-by-frame').addChangeListener(function() {
            return _this.updateGroupByFrame();
        });
        _this.filterBar = filterBar;
        _this.textFilterSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-text-filter', '');
        if (_this.textFilterSetting.get()) {
            _this.textFilterUI.setValue(_this.textFilterSetting.get());
        }
        return _this;
    }
    _create_class(NetworkLogView, [
        {
            key: "getMoreFiltersDropdown",
            value: function getMoreFiltersDropdown() {
                return this.moreFiltersDropDownUI;
            }
        },
        {
            key: "updateGroupByFrame",
            value: function updateGroupByFrame() {
                var value = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network.group-by-frame').get();
                this.setGrouping(value ? 'Frame' : null);
            }
        },
        {
            key: "handleDrop",
            value: function handleDrop(dataTransfer) {
                var items = dataTransfer.items;
                if (!items.length) {
                    return;
                }
                var file = items[0].getAsFile();
                if (file) {
                    void this.onLoadFromFile(file);
                }
            }
        },
        {
            key: "onLoadFromFile",
            value: function onLoadFromFile(file) {
                var _this = this;
                return _async_to_generator(function() {
                    var outputStream, reader, success, error, harRoot;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                outputStream = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.StringOutputStream.StringOutputStream();
                                reader = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.ChunkedFileReader(file, /* chunkSize */ 10000000);
                                return [
                                    4,
                                    reader.read(outputStream)
                                ];
                            case 1:
                                success = _state.sent();
                                if (!success) {
                                    error = reader.error();
                                    if (error) {
                                        _this.harLoadFailed(error.message);
                                    }
                                    return [
                                        2
                                    ];
                                }
                                try {
                                    // HARRoot and JSON.parse might throw.
                                    harRoot = new _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.HARFormat.HARRoot(JSON.parse(outputStream.data()));
                                } catch (e) {
                                    _this.harLoadFailed(e);
                                    return [
                                        2
                                    ];
                                }
                                _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().importRequests(_models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.Importer.Importer.requestsFromHARLog(harRoot.log));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "harLoadFailed",
            value: function harLoadFailed(message) {
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().error('Failed to load HAR file with following error: ' + message);
            }
        },
        {
            key: "setGrouping",
            value: function setGrouping(groupKey) {
                if (this.activeGroupLookup) {
                    this.activeGroupLookup.reset();
                }
                var groupLookup = groupKey ? this.groupLookups.get(groupKey) || null : null;
                this.activeGroupLookup = groupLookup;
                this.invalidateAllItems();
            }
        },
        {
            key: "computeRowHeight",
            value: function computeRowHeight() {
                return this.rawRowHeight;
            }
        },
        {
            key: "nodeForRequest",
            value: function nodeForRequest(request) {
                return networkRequestToNode.get(request) || null;
            }
        },
        {
            key: "headerHeight",
            value: function headerHeight() {
                return this.headerHeightInternal;
            }
        },
        {
            key: "setRecording",
            value: function setRecording(recording) {
                this.recording = recording;
                this.updateSummaryBar();
            }
        },
        {
            key: "columns",
            value: function columns() {
                return this.columnsInternal;
            }
        },
        {
            key: "summaryToolbar",
            value: function summaryToolbar() {
                return this.summaryToolbarInternal;
            }
        },
        {
            key: "modelAdded",
            value: function modelAdded(networkManager) {
                // TODO(allada) Remove dependency on networkManager and instead use NetworkLog and PageLoad for needed data.
                var target = networkManager.target();
                if (target.outermostTarget() !== target) {
                    return;
                }
                var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
                if (resourceTreeModel) {
                    resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.Load, this.loadEventFired, this);
                    resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.DOMContentLoaded, this.domContentLoadedEventFired, this);
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        if (this.isInScope(request)) {
                            this.refreshRequest(request);
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
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(networkManager) {
                var target = networkManager.target();
                if (target.outermostTarget() !== target) {
                    return;
                }
                var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
                if (resourceTreeModel) {
                    resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.Load, this.loadEventFired, this);
                    resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.DOMContentLoaded, this.domContentLoadedEventFired, this);
                }
                var preserveLog = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-log.preserve-log').get();
                if (!preserveLog) {
                    this.reset();
                }
            }
        },
        {
            key: "linkifier",
            value: function linkifier() {
                return this.linkifierInternal;
            }
        },
        {
            key: "setWindow",
            value: function setWindow(start, end) {
                if (!start && !end) {
                    this.timeFilter = null;
                    this.timeCalculatorInternal.setWindow(null);
                } else {
                    this.timeFilter = NetworkLogView.requestTimeFilter.bind(null, start, end);
                    this.timeCalculatorInternal.setWindow(new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_24__.NetworkTimeBoundary(start, end));
                }
                this.filterRequests();
            }
        },
        {
            key: "resetFocus",
            value: function resetFocus() {
                this.dataGrid.element.focus();
            }
        },
        {
            key: "resetSuggestionBuilder",
            value: function resetSuggestionBuilder() {
                this.suggestionBuilder.clear();
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "running" /* NetworkForward.UIFilter.IsFilterType.Running */ );
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "from-cache" /* NetworkForward.UIFilter.IsFilterType.FromCache */ );
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "service-worker-intercepted" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerIntercepted */ );
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is, "service-worker-initiated" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerInitiated */ );
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan, '100');
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan, '10k');
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan, '1M');
                this.textFilterUI.setSuggestionProvider(this.suggestionBuilder.completions.bind(this.suggestionBuilder));
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.yes);
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.no);
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.content);
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides, overrideFilter.headers);
            }
        },
        {
            key: "filterChanged",
            value: function filterChanged() {
                var _this_moreFiltersDropDownUI, _this_moreFiltersDropDownUI1;
                this.removeAllNodeHighlights();
                this.parseFilterQuery(this.textFilterUI.value(), this.invertFilterUI.checked());
                this.filterRequests();
                this.textFilterSetting.set(this.textFilterUI.value());
                (_this_moreFiltersDropDownUI = this.moreFiltersDropDownUI) === null || _this_moreFiltersDropDownUI === void 0 ? void 0 : _this_moreFiltersDropDownUI.updateActiveFiltersCount();
                (_this_moreFiltersDropDownUI1 = this.moreFiltersDropDownUI) === null || _this_moreFiltersDropDownUI1 === void 0 ? void 0 : _this_moreFiltersDropDownUI1.updateTooltip();
            }
        },
        {
            key: "resetFilter",
            value: function resetFilter() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.textFilterUI.clear();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "showRecordingHint",
            value: function showRecordingHint() {
                this.hideRecordingHint();
                this.recordingHint = this.element.createChild('div', 'network-status-pane fill');
                var hintText = this.recordingHint.createChild('div', 'recording-hint');
                if (this.recording) {
                    var reloadShortcutNode = null;
                    var reloadShortcut = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('inspector-main.reload')[0];
                    if (reloadShortcut) {
                        reloadShortcutNode = this.recordingHint.createChild('b');
                        reloadShortcutNode.textContent = reloadShortcut.title();
                    }
                    var recordingText = hintText.createChild('span');
                    recordingText.textContent = i18nString(UIStrings.recordingNetworkActivity);
                    if (reloadShortcutNode) {
                        hintText.createChild('br');
                        hintText.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.performARequestOrHitSToRecordThe, {
                            PH1: reloadShortcutNode
                        }));
                    }
                } else {
                    var recordNode = hintText.createChild('b');
                    recordNode.textContent = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ShortcutRegistry.ShortcutRegistry.instance().shortcutTitleForAction('network.toggle-recording') || '';
                    hintText.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getFormatLocalizedString(str_, UIStrings.recordToDisplayNetworkActivity, {
                        PH1: recordNode
                    }));
                }
                hintText.createChild('br');
                hintText.appendChild(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.XLink.XLink.create('https://developer.chrome.com/docs/devtools/network/?utm_source=devtools&utm_campaign=2019Q1', i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more'));
                this.setHidden(true);
            }
        },
        {
            key: "hideRecordingHint",
            value: function hideRecordingHint() {
                this.setHidden(false);
                if (this.recordingHint) {
                    this.recordingHint.remove();
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.alert(i18nString(UIStrings.networkDataAvailable));
                this.recordingHint = null;
            }
        },
        {
            key: "setHidden",
            value: function setHidden(value) {
                this.columnsInternal.setHidden(value);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.setHidden(this.summaryToolbarInternal.element, value);
            }
        },
        {
            key: "elementsToRestoreScrollPositionsFor",
            value: function elementsToRestoreScrollPositionsFor() {
                if (!this.dataGrid) {
                    return [];
                }
                return [
                    this.dataGrid.scrollContainer
                ];
            }
        },
        {
            key: "columnExtensionResolved",
            value: function columnExtensionResolved() {
                this.invalidateAllItems(true);
            }
        },
        {
            key: "setupDataGrid",
            value: function setupDataGrid() {
                var _this = this;
                this.dataGrid.setRowContextMenuCallback(function(contextMenu, node) {
                    var request = node.request();
                    if (request) {
                        _this.handleContextMenuForRequest(contextMenu, request);
                    }
                });
                this.dataGrid.setStickToBottom(true);
                this.dataGrid.setName('network-log');
                this.dataGrid.setResizeMethod("last" /* DataGrid.DataGrid.ResizeMethod.Last */ );
                this.dataGrid.element.classList.add('network-log-grid');
                this.dataGrid.element.addEventListener('mousedown', this.dataGridMouseDown.bind(this), true);
                this.dataGrid.element.addEventListener('mousemove', this.dataGridMouseMove.bind(this), true);
                this.dataGrid.element.addEventListener('mouseleave', function() {
                    return _this.setHoveredNode(null);
                }, true);
                this.dataGrid.element.addEventListener('keydown', function(event) {
                    if (event.key === 'ArrowRight' && _this.dataGrid.selectedNode) {
                        var initiatorLink = _this.dataGrid.selectedNode.element().querySelector('button.devtools-link');
                        if (initiatorLink) {
                            initiatorLink.focus();
                        }
                    }
                    if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEnterOrSpaceKey(event)) {
                        _this.dispatchEventToListeners("RequestActivated" /* Events.RequestActivated */ , {
                            showPanel: true,
                            takeFocus: true
                        });
                        event.consume(true);
                    }
                });
                this.dataGrid.element.addEventListener('keyup', function(event) {
                    if ((event.key === 'r' || event.key === 'R') && _this.dataGrid.selectedNode) {
                        var request = _this.dataGrid.selectedNode.request();
                        if (!request) {
                            return;
                        }
                        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.canReplayRequest(request)) {
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.replayRequest(request);
                            void _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__.logKeyDown(_this.dataGrid.selectedNode.element(), event, 'replay-xhr');
                        }
                    }
                });
                this.dataGrid.element.addEventListener('focus', this.onDataGridFocus.bind(this), true);
                this.dataGrid.element.addEventListener('blur', this.onDataGridBlur.bind(this), true);
                return this.dataGrid;
            }
        },
        {
            key: "dataGridMouseMove",
            value: function dataGridMouseMove(event) {
                var mouseEvent = event;
                var node = this.dataGrid.dataGridNodeFromNode(mouseEvent.target);
                var highlightInitiatorChain = mouseEvent.shiftKey;
                this.setHoveredNode(node, highlightInitiatorChain);
            }
        },
        {
            key: "hoveredNode",
            value: function hoveredNode() {
                return this.hoveredNodeInternal;
            }
        },
        {
            key: "setHoveredNode",
            value: function setHoveredNode(node, highlightInitiatorChain) {
                if (this.hoveredNodeInternal) {
                    this.hoveredNodeInternal.setHovered(false, false);
                }
                this.hoveredNodeInternal = node;
                if (this.hoveredNodeInternal) {
                    this.hoveredNodeInternal.setHovered(true, Boolean(highlightInitiatorChain));
                }
            }
        },
        {
            key: "dataGridMouseDown",
            value: function dataGridMouseDown(event) {
                var mouseEvent = event;
                if (!this.dataGrid.selectedNode && mouseEvent.button) {
                    mouseEvent.consume();
                }
            }
        },
        {
            key: "updateSummaryBar",
            value: function updateSummaryBar() {
                var _this = this;
                this.hideRecordingHint();
                var transferSize = 0;
                var resourceSize = 0;
                var selectedNodeNumber = 0;
                var selectedTransferSize = 0;
                var selectedResourceSize = 0;
                var baseTime = -1;
                var maxTime = -1;
                var nodeCount = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        var _networkManager_target_parentTarget;
                        var node = networkRequestToNode.get(request);
                        if (!node) {
                            continue;
                        }
                        nodeCount++;
                        var requestTransferSize = request.transferSize;
                        transferSize += requestTransferSize;
                        var requestResourceSize = request.resourceSize;
                        resourceSize += requestResourceSize;
                        if (!filteredNetworkRequests.has(node)) {
                            selectedNodeNumber++;
                            selectedTransferSize += requestTransferSize;
                            selectedResourceSize += requestResourceSize;
                        }
                        var networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.forRequest(request);
                        // TODO(allada) inspectedURL should be stored in PageLoad used instead of target so HAR requests can have an
                        // inspected url.
                        if (networkManager && request.url() === networkManager.target().inspectedURL() && request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document && ((_networkManager_target_parentTarget = networkManager.target().parentTarget()) === null || _networkManager_target_parentTarget === void 0 ? void 0 : _networkManager_target_parentTarget.type()) !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Frame) {
                            // If the primary main frame's document was fetched from the prefetch cache,
                            // we should use the issueTime (i.e. when the navigation request was about to start)
                            // instead of startTime, which is when the prefetch network request started
                            // (which is typically well before the navigation starts).
                            baseTime = request.fromPrefetchCache() ? request.issueTime() : request.startTime;
                        }
                        if (request.endTime > maxTime) {
                            maxTime = request.endTime;
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
                if (!nodeCount) {
                    this.showRecordingHint();
                    return;
                }
                this.summaryToolbarInternal.removeToolbarItems();
                var appendChunk = function(chunk, title) {
                    var toolbarText = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.ToolbarText(chunk);
                    toolbarText.setTitle(title ? title : chunk);
                    _this.summaryToolbarInternal.appendToolbarItem(toolbarText);
                    return toolbarText.element;
                };
                if (selectedNodeNumber !== nodeCount) {
                    appendChunk(i18nString(UIStrings.sSRequests, {
                        PH1: selectedNodeNumber,
                        PH2: nodeCount
                    }));
                    this.summaryToolbarInternal.appendSeparator();
                    appendChunk(i18nString(UIStrings.sSTransferred, {
                        PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(selectedTransferSize),
                        PH2: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(transferSize)
                    }), i18nString(UIStrings.sBSBTransferredOverNetwork, {
                        PH1: selectedTransferSize,
                        PH2: transferSize
                    }));
                    this.summaryToolbarInternal.appendSeparator();
                    appendChunk(i18nString(UIStrings.sSResources, {
                        PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(selectedResourceSize),
                        PH2: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(resourceSize)
                    }), i18nString(UIStrings.sBSBResourcesLoadedByThePage, {
                        PH1: selectedResourceSize,
                        PH2: resourceSize
                    }));
                } else {
                    appendChunk(i18nString(UIStrings.sRequests, {
                        PH1: nodeCount
                    }));
                    this.summaryToolbarInternal.appendSeparator();
                    appendChunk(i18nString(UIStrings.sTransferred, {
                        PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(transferSize)
                    }), i18nString(UIStrings.sBTransferredOverNetwork, {
                        PH1: transferSize
                    }));
                    this.summaryToolbarInternal.appendSeparator();
                    appendChunk(i18nString(UIStrings.sResources, {
                        PH1: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(resourceSize)
                    }), i18nString(UIStrings.sBResourcesLoadedByThePage, {
                        PH1: resourceSize
                    }));
                }
                if (baseTime !== -1 && maxTime !== -1) {
                    this.summaryToolbarInternal.appendSeparator();
                    appendChunk(i18nString(UIStrings.finishS, {
                        PH1: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(maxTime - baseTime)
                    }));
                    if (this.mainRequestDOMContentLoadedTime !== -1 && this.mainRequestDOMContentLoadedTime > baseTime) {
                        this.summaryToolbarInternal.appendSeparator();
                        var domContentLoadedText = i18nString(UIStrings.domcontentloadedS, {
                            PH1: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(this.mainRequestDOMContentLoadedTime - baseTime)
                        });
                        appendChunk(domContentLoadedText).style.color = "var(".concat(NetworkLogView.getDCLEventColor(), ")");
                    }
                    if (this.mainRequestLoadTime !== -1) {
                        this.summaryToolbarInternal.appendSeparator();
                        var loadText = i18nString(UIStrings.loadS, {
                            PH1: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(this.mainRequestLoadTime - baseTime)
                        });
                        appendChunk(loadText).style.color = "var(".concat(NetworkLogView.getLoadEventColor(), ")");
                    }
                }
            }
        },
        {
            key: "scheduleRefresh",
            value: function scheduleRefresh() {
                if (this.needsRefresh) {
                    return;
                }
                this.needsRefresh = true;
                if (this.isShowing()) {
                    void coordinator.write('NetworkLogView.render', this.refresh.bind(this));
                }
            }
        },
        {
            key: "addFilmStripFrames",
            value: function addFilmStripFrames(times) {
                this.columnsInternal.addEventDividers(times, 'network-frame-divider');
            }
        },
        {
            key: "selectFilmStripFrame",
            value: function selectFilmStripFrame(time) {
                this.columnsInternal.selectFilmStripFrame(time);
            }
        },
        {
            key: "clearFilmStripFrame",
            value: function clearFilmStripFrame() {
                this.columnsInternal.clearFilmStripFrame();
            }
        },
        {
            key: "refreshIfNeeded",
            value: function refreshIfNeeded() {
                if (this.needsRefresh) {
                    this.refresh();
                }
            }
        },
        {
            key: "invalidateAllItems",
            value: function invalidateAllItems(deferUpdate) {
                this.staleRequests = new Set(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(this.isInScope));
                if (deferUpdate) {
                    this.scheduleRefresh();
                } else {
                    this.refresh();
                }
            }
        },
        {
            key: "timeCalculator",
            value: function timeCalculator() {
                return this.timeCalculatorInternal;
            }
        },
        {
            key: "calculator",
            value: function calculator() {
                return this.calculatorInternal;
            }
        },
        {
            key: "setCalculator",
            value: function setCalculator(x) {
                if (!x || this.calculatorInternal === x) {
                    return;
                }
                if (this.calculatorInternal !== x) {
                    this.calculatorInternal = x;
                    this.columnsInternal.setCalculator(this.calculatorInternal);
                }
                this.calculatorInternal.reset();
                if (this.calculatorInternal.startAtZero) {
                    this.columnsInternal.hideEventDividers();
                } else {
                    this.columnsInternal.showEventDividers();
                }
                this.invalidateAllItems();
            }
        },
        {
            key: "loadEventFired",
            value: function loadEventFired(event) {
                if (!this.recording) {
                    return;
                }
                var time = event.data.loadTime;
                if (time) {
                    this.mainRequestLoadTime = time;
                    this.columnsInternal.addEventDividers([
                        time
                    ], 'network-load-divider');
                }
            }
        },
        {
            key: "domContentLoadedEventFired",
            value: function domContentLoadedEventFired(event) {
                if (!this.recording) {
                    return;
                }
                var data = event.data;
                if (data) {
                    this.mainRequestDOMContentLoadedTime = data;
                    this.columnsInternal.addEventDividers([
                        data
                    ], 'network-dcl-divider');
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.refreshIfNeeded();
                this.registerCSSFiles([
                    _networkLogView_css_js__WEBPACK_IMPORTED_MODULE_22__["default"]
                ]);
                this.columnsInternal.wasShown();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.columnsInternal.willHide();
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                this.rowHeightInternal = this.computeRowHeight();
            }
        },
        {
            key: "flatNodesList",
            value: function flatNodesList() {
                var rootNode = this.dataGrid.rootNode();
                return rootNode.flatChildren();
            }
        },
        {
            key: "onDataGridFocus",
            value: function onDataGridFocus() {
                if (this.dataGrid.element.matches(':focus-visible')) {
                    this.element.classList.add('grid-focused');
                }
                this.updateNodeBackground();
            }
        },
        {
            key: "onDataGridBlur",
            value: function onDataGridBlur() {
                this.element.classList.remove('grid-focused');
                this.updateNodeBackground();
            }
        },
        {
            key: "updateNodeBackground",
            value: function updateNodeBackground() {
                if (this.dataGrid.selectedNode) {
                    this.dataGrid.selectedNode.updateBackgroundColor();
                }
            }
        },
        {
            key: "updateNodeSelectedClass",
            value: function updateNodeSelectedClass(isSelected) {
                if (isSelected) {
                    this.element.classList.remove('no-node-selected');
                } else {
                    this.element.classList.add('no-node-selected');
                }
            }
        },
        {
            key: "stylesChanged",
            value: function stylesChanged() {
                this.columnsInternal.scheduleRefresh();
            }
        },
        {
            key: "removeNodeAndMaybeAncestors",
            value: function removeNodeAndMaybeAncestors(node) {
                var parent = node.parent;
                if (!parent) {
                    return;
                }
                parent.removeChild(node);
                while(parent && !parent.hasChildren() && parent.dataGrid && parent.dataGrid.rootNode() !== parent){
                    var grandparent = parent.parent;
                    grandparent.removeChild(parent);
                    parent = grandparent;
                }
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                this.needsRefresh = false;
                this.removeAllNodeHighlights();
                this.timeCalculatorInternal.updateBoundariesForEventTime(this.mainRequestLoadTime);
                this.durationCalculator.updateBoundariesForEventTime(this.mainRequestLoadTime);
                this.timeCalculatorInternal.updateBoundariesForEventTime(this.mainRequestDOMContentLoadedTime);
                this.durationCalculator.updateBoundariesForEventTime(this.mainRequestDOMContentLoadedTime);
                var nodesToInsert = new Map();
                var nodesToRefresh = [];
                var staleNodes = new Set();
                // While creating nodes it may add more entries into staleRequests because redirect request nodes update the parent
                // node so we loop until we have no more stale requests.
                while(this.staleRequests.size){
                    var request = this.staleRequests.values().next().value;
                    this.staleRequests.delete(request);
                    var node = networkRequestToNode.get(request);
                    if (!node) {
                        node = this.createNodeForRequest(request);
                    }
                    staleNodes.add(node);
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = staleNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var node1 = _step.value;
                        var request1 = node1.request();
                        var isFilteredOut = !this.applyFilter(request1);
                        if (isFilteredOut) {
                            if (node1 === this.hoveredNodeInternal) {
                                this.setHoveredNode(null);
                            }
                            node1.selected = false;
                        } else {
                            nodesToRefresh.push(node1);
                        }
                        this.timeCalculatorInternal.updateBoundaries(request1);
                        this.durationCalculator.updateBoundaries(request1);
                        var newParent = this.parentNodeForInsert(node1);
                        var wasAlreadyFiltered = filteredNetworkRequests.has(node1);
                        if (wasAlreadyFiltered === isFilteredOut && node1.parent === newParent) {
                            continue;
                        }
                        if (isFilteredOut) {
                            filteredNetworkRequests.add(node1);
                        } else {
                            filteredNetworkRequests.delete(node1);
                        }
                        var removeFromParent = node1.parent && (isFilteredOut || node1.parent !== newParent);
                        if (removeFromParent) {
                            this.removeNodeAndMaybeAncestors(node1);
                        }
                        if (!newParent || isFilteredOut) {
                            continue;
                        }
                        if (!newParent.dataGrid && !nodesToInsert.has(newParent)) {
                            nodesToInsert.set(newParent, this.dataGrid.rootNode());
                            nodesToRefresh.push(newParent);
                        }
                        nodesToInsert.set(node1, newParent);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = nodesToInsert.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var node2 = _step1.value;
                        nodesToInsert.get(node2).appendChild(node2);
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
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = nodesToRefresh[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var node3 = _step2.value;
                        node3.refresh();
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                this.updateSummaryBar();
                if (nodesToInsert.size) {
                    this.columnsInternal.sortByCurrentColumn();
                }
                this.dataGrid.updateInstantly();
                this.didRefreshForTest();
            }
        },
        {
            key: "didRefreshForTest",
            value: function didRefreshForTest() {}
        },
        {
            key: "parentNodeForInsert",
            value: function parentNodeForInsert(node) {
                if (!this.activeGroupLookup) {
                    return this.dataGrid.rootNode();
                }
                var groupNode = this.activeGroupLookup.groupNodeForRequest(node.request());
                if (!groupNode) {
                    return this.dataGrid.rootNode();
                }
                return groupNode;
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.dispatchEventToListeners("RequestActivated" /* Events.RequestActivated */ , {
                    showPanel: false
                });
                this.setHoveredNode(null);
                this.columnsInternal.reset();
                this.timeFilter = null;
                this.calculatorInternal.reset();
                this.timeCalculatorInternal.setWindow(null);
                this.linkifierInternal.reset();
                if (this.activeGroupLookup) {
                    this.activeGroupLookup.reset();
                }
                this.staleRequests.clear();
                this.resetSuggestionBuilder();
                this.mainRequestLoadTime = -1;
                this.mainRequestDOMContentLoadedTime = -1;
                this.dataGrid.rootNode().removeChildren();
                this.updateSummaryBar();
                this.dataGrid.setStickToBottom(true);
                this.scheduleRefresh();
            }
        },
        {
            // TODO(crbug.com/1477668)
            key: "setTextFilterValue",
            value: function setTextFilterValue(filterString) {
                this.textFilterUI.setValue(filterString);
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ )) {
                    this.networkHideDataURLSetting.set(false);
                    this.networkShowBlockedCookiesOnlySetting.set(false);
                    this.networkOnlyBlockedRequestsSetting.set(false);
                    this.networkOnlyThirdPartySetting.set(false);
                    this.networkHideChromeExtensions.set(false);
                } else {
                    var _this_dataURLFilterUI, _this_onlyBlockedResponseCookiesFilterUI, _this_onlyBlockedRequestsUI, _this_onlyThirdPartyFilterUI, _this_hideChromeExtensionsUI;
                    (_this_dataURLFilterUI = this.dataURLFilterUI) === null || _this_dataURLFilterUI === void 0 ? void 0 : _this_dataURLFilterUI.setChecked(false);
                    (_this_onlyBlockedResponseCookiesFilterUI = this.onlyBlockedResponseCookiesFilterUI) === null || _this_onlyBlockedResponseCookiesFilterUI === void 0 ? void 0 : _this_onlyBlockedResponseCookiesFilterUI.setChecked(false);
                    (_this_onlyBlockedRequestsUI = this.onlyBlockedRequestsUI) === null || _this_onlyBlockedRequestsUI === void 0 ? void 0 : _this_onlyBlockedRequestsUI.setChecked(false);
                    (_this_onlyThirdPartyFilterUI = this.onlyThirdPartyFilterUI) === null || _this_onlyThirdPartyFilterUI === void 0 ? void 0 : _this_onlyThirdPartyFilterUI.setChecked(false);
                    (_this_hideChromeExtensionsUI = this.hideChromeExtensionsUI) === null || _this_hideChromeExtensionsUI === void 0 ? void 0 : _this_hideChromeExtensionsUI.setChecked(false);
                }
                this.resourceCategoryFilterUI.reset();
            }
        },
        {
            key: "createNodeForRequest",
            value: function createNodeForRequest(request) {
                var node = new _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_20__.NetworkRequestNode(this, request);
                networkRequestToNode.set(request, node);
                filteredNetworkRequests.add(node);
                for(var redirect = request.redirectSource(); redirect; redirect = redirect.redirectSource()){
                    this.refreshRequest(redirect);
                }
                return node;
            }
        },
        {
            key: "isInScope",
            value: function isInScope(request) {
                var networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.forRequest(request);
                return !networkManager || _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(networkManager);
            }
        },
        {
            key: "onRequestUpdated",
            value: function onRequestUpdated(event) {
                var _event_data = event.data, request = _event_data.request, preserveLog = _event_data.preserveLog;
                if (this.isInScope(request) || preserveLog) {
                    this.refreshRequest(request);
                }
            }
        },
        {
            key: "onRequestRemoved",
            value: function onRequestRemoved(event) {
                var request = event.data.request;
                this.staleRequests.delete(request);
                var node = networkRequestToNode.get(request);
                if (node) {
                    this.removeNodeAndMaybeAncestors(node);
                }
            }
        },
        {
            key: "refreshRequest",
            value: function refreshRequest(request) {
                NetworkLogView.subdomains(request.domain).forEach(this.suggestionBuilder.addItem.bind(this.suggestionBuilder, _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Domain));
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Method, request.requestMethod);
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MimeType, request.mimeType);
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Scheme, String(request.scheme));
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.StatusCode, String(request.statusCode));
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResourceType, request.resourceType().name());
                this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Url, request.securityOrigin());
                var priority = request.priority();
                if (priority) {
                    this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Priority, _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelForNetworkPriority(priority));
                }
                if (request.mixedContentType !== "none" /* Protocol.Security.MixedContentType.None */ ) {
                    this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent, "all" /* NetworkForward.UIFilter.MixedContentFilterValues.All */ );
                }
                if (request.mixedContentType === "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */ ) {
                    this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent, "displayed" /* NetworkForward.UIFilter.MixedContentFilterValues.Displayed */ );
                }
                if (request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */ ) {
                    var suggestion = request.wasBlocked() ? "blocked" /* NetworkForward.UIFilter.MixedContentFilterValues.Blocked */  : "block-overridden" /* NetworkForward.UIFilter.MixedContentFilterValues.BlockOverridden */ ;
                    this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent, suggestion);
                }
                var responseHeaders = request.responseHeaders;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = responseHeaders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var responseHeader = _step.value;
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasResponseHeader, responseHeader.name);
                        if (responseHeader.name === 'Set-Cookie') {
                            this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResponseHeaderValueSetCookie);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = request.responseCookies[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var cookie = _step1.value;
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieDomain, cookie.domain());
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieName, cookie.name());
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieValue, cookie.value());
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
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = request.allCookiesIncludingBlockedOnes()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var cookie1 = _step2.value;
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieDomain, cookie1.domain());
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieName, cookie1.name());
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookiePath, cookie1.path());
                        this.suggestionBuilder.addItem(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieValue, cookie1.value());
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                this.staleRequests.add(request);
                this.scheduleRefresh();
            }
        },
        {
            key: "rowHeight",
            value: function rowHeight() {
                return this.rowHeightInternal;
            }
        },
        {
            key: "switchViewMode",
            value: function switchViewMode(gridMode) {
                this.columnsInternal.switchViewMode(gridMode);
            }
        },
        {
            key: "handleContextMenuForRequest",
            value: function handleContextMenuForRequest(contextMenu, request) {
                contextMenu.appendApplicableItems(request);
                var filtered = this.filterBar.hasActiveFilter();
                var copyMenu = contextMenu.clipboardSection().appendSubMenuItem(i18nString(UIStrings.copy), false, 'copy');
                if (request) {
                    copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyURL), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText.bind(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, request.contentURL()), {
                        jslogContext: 'copy-url'
                    });
                    copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedURLs) : i18nString(UIStrings.copyAllURLs), this.copyAllURLs.bind(this), {
                        jslogContext: 'copy-all-urls'
                    });
                    if (request.requestHeadersText()) {
                        copyMenu.saveSection().appendItem(i18nString(UIStrings.copyRequestHeaders), NetworkLogView.copyRequestHeaders.bind(null, request), {
                            jslogContext: 'copy-request-headers'
                        });
                    }
                    if (request.responseHeadersText) {
                        copyMenu.saveSection().appendItem(i18nString(UIStrings.copyResponseHeaders), NetworkLogView.copyResponseHeaders.bind(null, request), {
                            jslogContext: 'copy-response-headers'
                        });
                    }
                    if (request.finished) {
                        copyMenu.saveSection().appendItem(i18nString(UIStrings.copyResponse), NetworkLogView.copyResponse.bind(null, request), {
                            jslogContext: 'copy-response'
                        });
                    }
                    var initiator = request.initiator();
                    if (initiator) {
                        var stack = initiator.stack;
                        if (stack) {
                            // We proactively compute the stacktrace text, as we can't determine whether the stacktrace
                            // has any context solely based on the top frame. Sometimes, the top frame does not have
                            // any callFrames, but its parent frames do.
                            var stackTraceText = computeStackTraceText(stack);
                            if (stackTraceText !== '') {
                                copyMenu.saveSection().appendItem(i18nString(UIStrings.copyStacktrace), function() {
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(stackTraceText);
                                }, {
                                    jslogContext: 'copy-stacktrace'
                                });
                            }
                        }
                    }
                    var disableIfBlob = request.isBlobRequest();
                    if (_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin()) {
                        copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsCurlCmd), this.copyCurlCommand.bind(this, request, 'win'), {
                            disabled: disableIfBlob,
                            jslogContext: 'copy-as-curl-cmd'
                        });
                        copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsCurlBash), this.copyCurlCommand.bind(this, request, 'unix'), {
                            disabled: disableIfBlob,
                            jslogContext: 'copy-as-curl-bash'
                        });
                    } else {
                        copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsCurl), this.copyCurlCommand.bind(this, request, 'unix'), {
                            disabled: disableIfBlob,
                            jslogContext: 'copy-as-curl'
                        });
                    }
                    copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsPowershell), this.copyPowerShellCommand.bind(this, request), {
                        disabled: disableIfBlob,
                        jslogContext: 'copy-as-powershell'
                    });
                    copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsFetch), this.copyFetchCall.bind(this, request, 0 /* FetchStyle.Browser */ ), {
                        disabled: disableIfBlob,
                        jslogContext: 'copy-as-fetch'
                    });
                    copyMenu.defaultSection().appendItem(i18nString(UIStrings.copyAsNodejsFetch), this.copyFetchCall.bind(this, request, 1 /* FetchStyle.NodeJs */ ), {
                        disabled: disableIfBlob,
                        jslogContext: 'copy-as-nodejs-fetch'
                    });
                    if (_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.Platform.isWin()) {
                        copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsCurlCmd) : i18nString(UIStrings.copyAllAsCurlCmd), this.copyAllCurlCommand.bind(this, 'win'), {
                            jslogContext: 'copy-all-as-curl-cmd'
                        });
                        copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsCurlBash) : i18nString(UIStrings.copyAllAsCurlBash), this.copyAllCurlCommand.bind(this, 'unix'), {
                            jslogContext: 'copy-all-as-curl-bash'
                        });
                    } else {
                        copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsCurl) : i18nString(UIStrings.copyAllAsCurl), this.copyAllCurlCommand.bind(this, 'unix'), {
                            jslogContext: 'copy-all-as-curl'
                        });
                    }
                    copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsPowershell) : i18nString(UIStrings.copyAllAsPowershell), this.copyAllPowerShellCommand.bind(this), {
                        jslogContext: 'copy-all-as-powershell'
                    });
                    copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsFetch) : i18nString(UIStrings.copyAllAsFetch), this.copyAllFetchCall.bind(this, 0 /* FetchStyle.Browser */ ), {
                        jslogContext: 'copy-all-as-fetch'
                    });
                    copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsNodejsFetch) : i18nString(UIStrings.copyAllAsNodejsFetch), this.copyAllFetchCall.bind(this, 1 /* FetchStyle.NodeJs */ ), {
                        jslogContext: 'copy-all-as-nodejs-fetch'
                    });
                }
                copyMenu.footerSection().appendItem(filtered ? i18nString(UIStrings.copyAllListedAsHar) : i18nString(UIStrings.copyAllAsHar), this.copyAllAsHAR.bind(this), {
                    jslogContext: 'copy-all-as-har'
                });
                contextMenu.saveSection().appendItem(i18nString(UIStrings.saveAllAsHarWithContent), this.exportAll.bind(this), {
                    jslogContext: 'save-all-as-har-with-content'
                });
                contextMenu.overrideSection().appendItem(i18nString(UIStrings.overrideHeaders), _class_private_method_get(this, _handleCreateResponseHeaderOverrideClick, handleCreateResponseHeaderOverrideClick).bind(this, request), {
                    disabled: _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager.isForbiddenNetworkUrl(request.url()),
                    jslogContext: 'override-headers'
                });
                contextMenu.editSection().appendItem(i18nString(UIStrings.clearBrowserCache), this.clearBrowserCache.bind(this), {
                    jslogContext: 'clear-browser-cache'
                });
                contextMenu.editSection().appendItem(i18nString(UIStrings.clearBrowserCookies), this.clearBrowserCookies.bind(this), {
                    jslogContext: 'clear-browser-cookies'
                });
                if (request) {
                    var addBlockedURL = function addBlockedURL(url) {
                        patterns.push({
                            enabled: true,
                            url: url
                        });
                        manager.setBlockedPatterns(patterns);
                        manager.setBlockingEnabled(true);
                        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ViewManager.ViewManager.instance().showView('network.blocked-urls');
                    };
                    var removeBlockedURL = function removeBlockedURL(url) {
                        patterns = patterns.filter(function(pattern) {
                            return pattern.url !== url;
                        });
                        manager.setBlockedPatterns(patterns);
                        void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ViewManager.ViewManager.instance().showView('network.blocked-urls');
                    };
                    var maxBlockedURLLength = 20;
                    var manager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.MultitargetNetworkManager.instance();
                    var patterns = manager.blockedPatterns();
                    var urlWithoutScheme = request.parsedURL.urlWithoutScheme();
                    if (urlWithoutScheme && !patterns.find(function(pattern) {
                        return pattern.url === urlWithoutScheme;
                    })) {
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.blockRequestUrl), addBlockedURL.bind(null, urlWithoutScheme), {
                            jslogContext: 'block-request-url'
                        });
                    } else if (urlWithoutScheme) {
                        var croppedURL = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(urlWithoutScheme, maxBlockedURLLength);
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.unblockS, {
                            PH1: croppedURL
                        }), removeBlockedURL.bind(null, urlWithoutScheme), {
                            jslogContext: 'unblock'
                        });
                    }
                    var domain = request.parsedURL.domain();
                    if (domain && !patterns.find(function(pattern) {
                        return pattern.url === domain;
                    })) {
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.blockRequestDomain), addBlockedURL.bind(null, domain), {
                            jslogContext: 'block-request-domain'
                        });
                    } else if (domain) {
                        var croppedDomain = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(domain, maxBlockedURLLength);
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.unblockS, {
                            PH1: croppedDomain
                        }), removeBlockedURL.bind(null, domain), {
                            jslogContext: 'unblock'
                        });
                    }
                    if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.canReplayRequest(request)) {
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.replayXhr), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.NetworkManager.replayRequest.bind(null, request), {
                            jslogContext: 'replay-xhr'
                        });
                    }
                }
            }
        },
        {
            key: "harRequests",
            value: function harRequests() {
                var _this = this;
                var requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(function(request) {
                    return _this.applyFilter(request);
                });
                return requests.filter(NetworkLogView.getHTTPRequestsFilter).filter(function(request) {
                    return request.finished || request.resourceType() === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket && request.responseReceivedTime;
                });
            }
        },
        {
            key: "copyAllAsHAR",
            value: function copyAllAsHAR() {
                var _this = this;
                return _async_to_generator(function() {
                    var harArchive, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _tmp = {};
                                return [
                                    4,
                                    _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.Log.Log.build(_this.harRequests())
                                ];
                            case 1:
                                harArchive = (_tmp.log = _state.sent(), _tmp);
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(JSON.stringify(harArchive, null, 2));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "copyAllURLs",
            value: function copyAllURLs() {
                var _this = this;
                var requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(function(request) {
                    return _this.applyFilter(request);
                });
                var nonBlobRequests = this.filterOutBlobRequests(requests);
                var urls = nonBlobRequests.map(function(request) {
                    return request.url();
                });
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(urls.join('\n'));
            }
        },
        {
            key: "copyCurlCommand",
            value: function copyCurlCommand(request, platform) {
                return _async_to_generator(function() {
                    var command;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    NetworkLogView.generateCurlCommand(request, platform)
                                ];
                            case 1:
                                command = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(command);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "copyAllCurlCommand",
            value: function copyAllCurlCommand(platform) {
                var _this = this;
                return _async_to_generator(function() {
                    var requests, commands;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(function(request) {
                                    return _this.applyFilter(request);
                                });
                                return [
                                    4,
                                    _this.generateAllCurlCommand(requests, platform)
                                ];
                            case 1:
                                commands = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commands);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "copyFetchCall",
            value: function copyFetchCall(request, style) {
                var _this = this;
                return _async_to_generator(function() {
                    var command;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.generateFetchCall(request, style)
                                ];
                            case 1:
                                command = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(command);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "copyAllFetchCall",
            value: function copyAllFetchCall(style) {
                var _this = this;
                return _async_to_generator(function() {
                    var requests, commands;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(function(request) {
                                    return _this.applyFilter(request);
                                });
                                return [
                                    4,
                                    _this.generateAllFetchCall(requests, style)
                                ];
                            case 1:
                                commands = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commands);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "copyPowerShellCommand",
            value: function copyPowerShellCommand(request) {
                var _this = this;
                return _async_to_generator(function() {
                    var command;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.generatePowerShellCommand(request)
                                ];
                            case 1:
                                command = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(command);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "copyAllPowerShellCommand",
            value: function copyAllPowerShellCommand() {
                var _this = this;
                return _async_to_generator(function() {
                    var requests, commands;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requests().filter(function(request) {
                                    return _this.applyFilter(request);
                                });
                                return [
                                    4,
                                    _this.generateAllPowerShellCommand(requests)
                                ];
                            case 1:
                                commands = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(commands);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "exportAll",
            value: function exportAll() {
                var _this = this;
                return _async_to_generator(function() {
                    var mainTarget, url, parsedURL, filename, stream, progressIndicator;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                mainTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().scopeTarget();
                                if (!mainTarget) {
                                    return [
                                        2
                                    ];
                                }
                                url = mainTarget.inspectedURL();
                                parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(url);
                                filename = parsedURL ? parsedURL.host : 'network-log';
                                stream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.FileOutputStream();
                                return [
                                    4,
                                    stream.open(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.concatenate(filename, '.har'))
                                ];
                            case 1:
                                if (!_state.sent()) {
                                    return [
                                        2
                                    ];
                                }
                                progressIndicator = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ProgressIndicator.ProgressIndicator();
                                _this.progressBarContainer.appendChild(progressIndicator.element);
                                return [
                                    4,
                                    _models_har_har_js__WEBPACK_IMPORTED_MODULE_7__.Writer.Writer.write(stream, _this.harRequests(), progressIndicator)
                                ];
                            case 2:
                                _state.sent();
                                progressIndicator.done();
                                void stream.close();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clearBrowserCache",
            value: function clearBrowserCache() {
                if (confirm(i18nString(UIStrings.areYouSureYouWantToClearBrowser))) {
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.MultitargetNetworkManager.instance().clearBrowserCache();
                }
            }
        },
        {
            key: "clearBrowserCookies",
            value: function clearBrowserCookies() {
                if (confirm(i18nString(UIStrings.areYouSureYouWantToClearBrowserCookies))) {
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.NetworkManager.MultitargetNetworkManager.instance().clearBrowserCookies();
                }
            }
        },
        {
            key: "removeAllHighlights",
            value: function removeAllHighlights() {
                this.removeAllNodeHighlights();
            }
        },
        {
            key: "applyFilter",
            value: function applyFilter(request) {
                var _this_dataURLFilterUI, _this_onlyBlockedResponseCookiesFilterUI, _this_onlyBlockedRequestsUI, _this_onlyThirdPartyFilterUI, _this_hideChromeExtensionsUI;
                if (this.timeFilter && !this.timeFilter(request)) {
                    return false;
                }
                var categoryName = request.resourceType().category().title();
                if (!this.resourceCategoryFilterUI.accept(categoryName)) {
                    return false;
                }
                var _ref = _sliced_to_array(_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("network-panel-filter-bar-redesign" /* Root.Runtime.ExperimentName.NETWORK_PANEL_FILTER_BAR_REDESIGN */ ) ? [
                    this.networkHideDataURLSetting.get(),
                    this.networkShowBlockedCookiesOnlySetting.get(),
                    this.networkOnlyBlockedRequestsSetting.get(),
                    this.networkOnlyThirdPartySetting.get(),
                    this.networkHideChromeExtensions.get()
                ] : [
                    (_this_dataURLFilterUI = this.dataURLFilterUI) === null || _this_dataURLFilterUI === void 0 ? void 0 : _this_dataURLFilterUI.checked(),
                    (_this_onlyBlockedResponseCookiesFilterUI = this.onlyBlockedResponseCookiesFilterUI) === null || _this_onlyBlockedResponseCookiesFilterUI === void 0 ? void 0 : _this_onlyBlockedResponseCookiesFilterUI.checked(),
                    (_this_onlyBlockedRequestsUI = this.onlyBlockedRequestsUI) === null || _this_onlyBlockedRequestsUI === void 0 ? void 0 : _this_onlyBlockedRequestsUI.checked(),
                    (_this_onlyThirdPartyFilterUI = this.onlyThirdPartyFilterUI) === null || _this_onlyThirdPartyFilterUI === void 0 ? void 0 : _this_onlyThirdPartyFilterUI.checked(),
                    (_this_hideChromeExtensionsUI = this.hideChromeExtensionsUI) === null || _this_hideChromeExtensionsUI === void 0 ? void 0 : _this_hideChromeExtensionsUI.checked()
                ], 5), hideDataURL = _ref[0], blockedCookies = _ref[1], blockedRequests = _ref[2], thirdParty = _ref[3], hideExtensionURL = _ref[4];
                if (hideDataURL && (request.parsedURL.isDataURL() || request.parsedURL.isBlobURL())) {
                    return false;
                }
                if (blockedCookies && !request.blockedResponseCookies().length) {
                    return false;
                }
                if (blockedRequests && !request.wasBlocked() && !request.corsErrorStatus()) {
                    return false;
                }
                if (thirdParty && request.isSameSite()) {
                    return false;
                }
                if (hideExtensionURL && request.scheme === 'chrome-extension') {
                    return false;
                }
                for(var i = 0; i < this.filters.length; ++i){
                    if (!this.filters[i](request)) {
                        return false;
                    }
                }
                return true;
            }
        },
        {
            key: "isValidUrl",
            value: function isValidUrl(url) {
                try {
                    new URL(url);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        },
        {
            key: "parseFilterQuery",
            value: function parseFilterQuery(query, invert) {
                var _this = this;
                // A query string can have multiple filters, some of them regular
                // expressions, some not. Each one of those filters can be negated with a
                // "-" prefix, including the regular expressions. The top-level `invert`
                // checkbox therefore inverts each one of those individual filters.
                var descriptors = this.filterParser.parse(query);
                this.filters = descriptors.map(function(descriptor) {
                    var key = descriptor.key;
                    var text = descriptor.text || '';
                    var regex = descriptor.regex;
                    var filter;
                    if (key) {
                        var defaultText = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(key + ':' + text);
                        filter = _this.createSpecialFilter(key, text) || NetworkLogView.requestPathFilter.bind(null, new RegExp(defaultText, 'i'));
                    } else if (descriptor.regex) {
                        filter = NetworkLogView.requestPathFilter.bind(null, regex);
                    } else if (_this.isValidUrl(text)) {
                        filter = NetworkLogView.requestUrlFilter.bind(null, text);
                    } else {
                        filter = NetworkLogView.requestPathFilter.bind(null, new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(text), 'i'));
                    }
                    if (descriptor.negative && !invert || !descriptor.negative && invert) {
                        return NetworkLogView.negativeFilter.bind(null, filter);
                    }
                    return filter;
                });
            }
        },
        {
            key: "createSpecialFilter",
            value: function createSpecialFilter(type, value) {
                switch(type){
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Domain:
                        return NetworkLogView.createRequestDomainFilter(value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasResponseHeader:
                        return NetworkLogView.requestResponseHeaderFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResponseHeaderValueSetCookie:
                        return NetworkLogView.requestResponseHeaderSetCookieFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Is:
                        if (value.toLowerCase() === "running" /* NetworkForward.UIFilter.IsFilterType.Running */ ) {
                            return NetworkLogView.runningRequestFilter;
                        }
                        if (value.toLowerCase() === "from-cache" /* NetworkForward.UIFilter.IsFilterType.FromCache */ ) {
                            return NetworkLogView.fromCacheRequestFilter;
                        }
                        if (value.toLowerCase() === "service-worker-intercepted" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerIntercepted */ ) {
                            return NetworkLogView.interceptedByServiceWorkerFilter;
                        }
                        if (value.toLowerCase() === "service-worker-initiated" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerInitiated */ ) {
                            return NetworkLogView.initiatedByServiceWorkerFilter;
                        }
                        break;
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.LargerThan:
                        return this.createSizeFilter(value.toLowerCase());
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Method:
                        return NetworkLogView.requestMethodFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MimeType:
                        return NetworkLogView.requestMimeTypeFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.MixedContent:
                        return NetworkLogView.requestMixedContentFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Scheme:
                        return NetworkLogView.requestSchemeFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieDomain:
                        return NetworkLogView.requestSetCookieDomainFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieName:
                        return NetworkLogView.requestSetCookieNameFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.SetCookieValue:
                        return NetworkLogView.requestSetCookieValueFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieDomain:
                        return NetworkLogView.requestCookieDomainFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieName:
                        return NetworkLogView.requestCookieNameFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookiePath:
                        return NetworkLogView.requestCookiePathFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.CookieValue:
                        return NetworkLogView.requestCookieValueFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Priority:
                        return NetworkLogView.requestPriorityFilter.bind(null, _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelToNetworkPriority(value));
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.StatusCode:
                        return NetworkLogView.statusCodeFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.HasOverrides:
                        return NetworkLogView.hasOverridesFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.ResourceType:
                        return NetworkLogView.resourceTypeFilter.bind(null, value);
                    case _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Url:
                        return NetworkLogView.requestUrlFilter.bind(null, value);
                }
                return null;
            }
        },
        {
            key: "createSizeFilter",
            value: function createSizeFilter(value) {
                var multiplier = 1;
                if (value.endsWith('k')) {
                    multiplier = 1000;
                    value = value.substring(0, value.length - 1);
                } else if (value.endsWith('m')) {
                    multiplier = 1000 * 1000;
                    value = value.substring(0, value.length - 1);
                }
                var quantity = Number(value);
                if (isNaN(quantity)) {
                    return null;
                }
                return NetworkLogView.requestSizeLargerThanFilter.bind(null, quantity * multiplier);
            }
        },
        {
            key: "filterRequests",
            value: function filterRequests() {
                this.removeAllHighlights();
                this.invalidateAllItems();
            }
        },
        {
            key: "reveal",
            value: function reveal(request) {
                this.removeAllNodeHighlights();
                var node = networkRequestToNode.get(request);
                if (!node || !node.dataGrid) {
                    return null;
                }
                // Viewport datagrid nodes do not reveal if not in the root node
                // list of flatChildren. For children of grouped frame nodes:
                // reveal and expand parent to ensure child is revealable.
                if (node.parent && _instanceof(node.parent, _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_20__.NetworkGroupNode)) {
                    node.parent.reveal();
                    node.parent.expand();
                }
                node.reveal();
                return node;
            }
        },
        {
            key: "revealAndHighlightRequest",
            value: function revealAndHighlightRequest(request) {
                var node = this.reveal(request);
                if (node) {
                    this.highlightNode(node);
                }
            }
        },
        {
            key: "revealAndHighlightRequestWithId",
            value: function revealAndHighlightRequestWithId(requestId) {
                var request = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_8__.NetworkLog.NetworkLog.instance().requestByManagerAndId(requestId.manager, requestId.requestId);
                if (request) {
                    this.revealAndHighlightRequest(request);
                }
            }
        },
        {
            key: "selectRequest",
            value: function selectRequest(request, options) {
                var defaultOptions = {
                    clearFilter: true
                };
                var clearFilter = (options || defaultOptions).clearFilter;
                if (clearFilter) {
                    this.setTextFilterValue('');
                }
                var node = this.reveal(request);
                if (node) {
                    node.select();
                }
            }
        },
        {
            key: "removeAllNodeHighlights",
            value: function removeAllNodeHighlights() {
                if (this.highlightedNode) {
                    this.highlightedNode.element().classList.remove('highlighted-row');
                    this.highlightedNode = null;
                }
            }
        },
        {
            key: "highlightNode",
            value: function highlightNode(node) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.UIUtils.runCSSAnimationOnce(node.element(), 'highlighted-row');
                this.highlightedNode = node;
            }
        },
        {
            key: "filterOutBlobRequests",
            value: function filterOutBlobRequests(requests) {
                return requests.filter(function(request) {
                    return !request.isBlobRequest();
                });
            }
        },
        {
            key: "generateFetchCall",
            value: function generateFetchCall(request, style) {
                return _async_to_generator(function() {
                    var ignoredHeaders, credentialHeaders, url, requestHeaders, headerData, headers, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, headerArray, credentials, referrerHeader, referrer, referrerPolicy, requestBody, fetchOptions, cookieHeader, extraHeaders, options;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                ignoredHeaders = new Set([
                                    // Internal headers
                                    'method',
                                    'path',
                                    'scheme',
                                    'version',
                                    // Unsafe headers
                                    // Keep this list synchronized with src/net/http/http_util.cc
                                    'accept-charset',
                                    'accept-encoding',
                                    'access-control-request-headers',
                                    'access-control-request-method',
                                    'connection',
                                    'content-length',
                                    'cookie',
                                    'cookie2',
                                    'date',
                                    'dnt',
                                    'expect',
                                    'host',
                                    'keep-alive',
                                    'origin',
                                    'referer',
                                    'te',
                                    'trailer',
                                    'transfer-encoding',
                                    'upgrade',
                                    'via',
                                    // TODO(phistuck) - remove this once crbug.com/571722 is fixed.
                                    'user-agent'
                                ]);
                                credentialHeaders = new Set([
                                    'cookie',
                                    'authorization'
                                ]);
                                url = JSON.stringify(request.url());
                                requestHeaders = request.requestHeaders();
                                headerData = requestHeaders.reduce(function(result, header) {
                                    var name = header.name;
                                    if (!ignoredHeaders.has(name.toLowerCase()) && !name.includes(':')) {
                                        result.append(name, header.value);
                                    }
                                    return result;
                                }, new Headers());
                                headers = {};
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = headerData[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        headerArray = _step.value;
                                        headers[headerArray[0]] = headerArray[1];
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
                                credentials = request.includedRequestCookies().length || requestHeaders.some(function(param) {
                                    var name = param.name;
                                    return credentialHeaders.has(name.toLowerCase());
                                }) ? 'include' : 'omit';
                                referrerHeader = requestHeaders.find(function(param) {
                                    var name = param.name;
                                    return name.toLowerCase() === 'referer';
                                });
                                referrer = referrerHeader ? referrerHeader.value : void 0;
                                referrerPolicy = request.referrerPolicy() || void 0;
                                return [
                                    4,
                                    request.requestFormData()
                                ];
                            case 1:
                                requestBody = _state.sent();
                                fetchOptions = {
                                    headers: Object.keys(headers).length ? headers : void 0,
                                    referrer: referrer,
                                    referrerPolicy: referrerPolicy,
                                    body: requestBody,
                                    method: request.requestMethod,
                                    mode: 'cors'
                                };
                                if (style === 1 /* FetchStyle.NodeJs */ ) {
                                    cookieHeader = requestHeaders.find(function(header) {
                                        return header.name.toLowerCase() === 'cookie';
                                    });
                                    extraHeaders = {};
                                    // According to https://www.npmjs.com/package/node-fetch#class-request the
                                    // following properties are not implemented in Node.js.
                                    delete fetchOptions.mode;
                                    if (cookieHeader) {
                                        extraHeaders['cookie'] = cookieHeader.value;
                                    }
                                    if (referrer) {
                                        delete fetchOptions.referrer;
                                        extraHeaders['Referer'] = referrer;
                                    }
                                    if (referrer) {
                                        delete fetchOptions.referrerPolicy;
                                        extraHeaders['Referrer-Policy'] = referrerPolicy;
                                    }
                                    if (Object.keys(extraHeaders).length) {
                                        fetchOptions.headers = _object_spread({}, headers, extraHeaders);
                                    }
                                } else {
                                    fetchOptions.credentials = credentials;
                                }
                                options = JSON.stringify(fetchOptions, null, 2);
                                return [
                                    2,
                                    "fetch(".concat(url, ", ").concat(options, ");")
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "generateAllFetchCall",
            value: function generateAllFetchCall(requests, style) {
                var _this = this;
                return _async_to_generator(function() {
                    var nonBlobRequests, commands;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nonBlobRequests = _this.filterOutBlobRequests(requests);
                                return [
                                    4,
                                    Promise.all(nonBlobRequests.map(function(request) {
                                        return _this.generateFetchCall(request, style);
                                    }))
                                ];
                            case 1:
                                commands = _state.sent();
                                return [
                                    2,
                                    commands.join(' ;\n')
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "generateAllCurlCommand",
            value: function generateAllCurlCommand(requests, platform) {
                var _this = this;
                return _async_to_generator(function() {
                    var nonBlobRequests, commands;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nonBlobRequests = _this.filterOutBlobRequests(requests);
                                return [
                                    4,
                                    Promise.all(nonBlobRequests.map(function(request) {
                                        return NetworkLogView.generateCurlCommand(request, platform);
                                    }))
                                ];
                            case 1:
                                commands = _state.sent();
                                if (platform === 'win') {
                                    return [
                                        2,
                                        commands.join(' &\r\n')
                                    ];
                                }
                                return [
                                    2,
                                    commands.join(' ;\n')
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "generatePowerShellCommand",
            value: function generatePowerShellCommand(request) {
                return _async_to_generator(function() {
                    var command, ignoredHeaders, session, requestHeaders, headerNameValuePairs, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, header, name, contentTypeHeader, formData, body, prelude;
                    function escapeString(str) {
                        return '"' + str.replace(/[`\$"]/g, '`$&').replace(/[^\x20-\x7E]/g, function(char) {
                            return '$([char]' + char.charCodeAt(0) + ')';
                        }) + '"';
                    }
                    // Generate a WebRequestSession object with the UserAgent and Cookie header values.
                    // This is used to pass the user-agent and cookie headers to Invoke-WebRequest because the Invoke-WebRequest
                    // command does not allow setting these headers through the -Headers parameter. See docs at:
                    // https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-webrequest?view=powershell-7.1#parameters
                    function generatePowerShellSession(request) {
                        var requestHeaders = request.requestHeaders();
                        var props = [];
                        var userAgentHeader = requestHeaders.find(function(param) {
                            var name = param.name;
                            return name.toLowerCase() === 'user-agent';
                        });
                        if (userAgentHeader) {
                            props.push("$session.UserAgent = ".concat(escapeString(userAgentHeader.value)));
                        }
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = request.includedRequestCookies()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var includedCookie = _step.value;
                                var name = escapeString(includedCookie.cookie.name());
                                var value = escapeString(includedCookie.cookie.value());
                                var domain = escapeString(includedCookie.cookie.domain());
                                props.push("$session.Cookies.Add((New-Object System.Net.Cookie(".concat(name, ", ").concat(value, ', "/", ').concat(domain, ")))"));
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
                        if (props.length) {
                            return '$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession\n' + props.join('\n') + '\n';
                        }
                        return null;
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                command = [];
                                ignoredHeaders = new Set([
                                    'host',
                                    'connection',
                                    'proxy-connection',
                                    'content-length',
                                    'expect',
                                    'range',
                                    'content-type',
                                    'user-agent',
                                    'cookie'
                                ]);
                                command.push('-Uri ' + escapeString(request.url()));
                                if (request.requestMethod !== 'GET') {
                                    command.push('-Method ' + escapeString(request.requestMethod));
                                }
                                session = generatePowerShellSession(request);
                                if (session) {
                                    command.push('-WebSession $session');
                                }
                                requestHeaders = request.requestHeaders();
                                headerNameValuePairs = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = requestHeaders[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        header = _step.value;
                                        name = header.name.replace(/^:/, ''); // Translate h2 headers to HTTP headers.
                                        if (ignoredHeaders.has(name.toLowerCase())) {
                                            continue;
                                        }
                                        headerNameValuePairs.push(escapeString(name) + '=' + escapeString(header.value));
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
                                if (headerNameValuePairs.length) {
                                    command.push('-Headers @{\n' + headerNameValuePairs.join('\n  ') + '\n}');
                                }
                                contentTypeHeader = requestHeaders.find(function(param) {
                                    var name = param.name;
                                    return name.toLowerCase() === 'content-type';
                                });
                                if (contentTypeHeader) {
                                    command.push('-ContentType ' + escapeString(contentTypeHeader.value));
                                }
                                return [
                                    4,
                                    request.requestFormData()
                                ];
                            case 1:
                                formData = _state.sent();
                                if (formData) {
                                    body = escapeString(formData);
                                    if (/[^\x20-\x7E]/.test(formData)) {
                                        command.push('-Body ([System.Text.Encoding]::UTF8.GetBytes(' + body + '))');
                                    } else {
                                        command.push('-Body ' + body);
                                    }
                                }
                                // The -UseBasicParsing parameter prevents Invoke-WebRequest from using the IE engine for parsing. Basic
                                // parsing is the default behavior in PowerShell 6.0.0+ and the parameter is included here for backwards
                                // compatibility only.
                                prelude = session || '';
                                return [
                                    2,
                                    prelude + 'Invoke-WebRequest -UseBasicParsing ' + command.join(command.length >= 3 ? ' `\n' : ' ')
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "generateAllPowerShellCommand",
            value: function generateAllPowerShellCommand(requests) {
                var _this = this;
                return _async_to_generator(function() {
                    var nonBlobRequests, commands;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                nonBlobRequests = _this.filterOutBlobRequests(requests);
                                return [
                                    4,
                                    Promise.all(nonBlobRequests.map(function(request) {
                                        return _this.generatePowerShellCommand(request);
                                    }))
                                ];
                            case 1:
                                commands = _state.sent();
                                return [
                                    2,
                                    commands.join(';\r\n')
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "sortSearchValues",
            value: function sortSearchValues(key, values) {
                if (key === _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType.Priority) {
                    values.sort(function(a, b) {
                        var aPriority = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelToNetworkPriority(a);
                        var bPriority = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.uiLabelToNetworkPriority(b);
                        return _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.networkPriorityWeight(aPriority) - _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_16__.NetworkPriorities.networkPriorityWeight(bPriority);
                    });
                } else {
                    values.sort();
                }
            }
        },
        {
            key: "negativeFilter",
            value: function negativeFilter(filter, request) {
                return !filter(request);
            }
        },
        {
            key: "requestPathFilter",
            value: function requestPathFilter(regex, request) {
                if (!regex) {
                    return false;
                }
                return regex.test(request.path() + '/' + request.name());
            }
        },
        {
            key: "subdomains",
            value: function subdomains(domain) {
                var result = [
                    domain
                ];
                var indexOfPeriod = domain.indexOf('.');
                while(indexOfPeriod !== -1){
                    result.push('*' + domain.substring(indexOfPeriod));
                    indexOfPeriod = domain.indexOf('.', indexOfPeriod + 1);
                }
                return result;
            }
        },
        {
            key: "createRequestDomainFilter",
            value: function createRequestDomainFilter(value) {
                var escapedPattern = value.split('*').map(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp).join('.*');
                return NetworkLogView.requestDomainFilter.bind(null, new RegExp('^' + escapedPattern + '$', 'i'));
            }
        },
        {
            key: "requestDomainFilter",
            value: function requestDomainFilter(regex, request) {
                return regex.test(request.domain);
            }
        },
        {
            key: "runningRequestFilter",
            value: function runningRequestFilter(request) {
                return !request.finished;
            }
        },
        {
            key: "fromCacheRequestFilter",
            value: function fromCacheRequestFilter(request) {
                return request.cached();
            }
        },
        {
            key: "interceptedByServiceWorkerFilter",
            value: function interceptedByServiceWorkerFilter(request) {
                return request.fetchedViaServiceWorker;
            }
        },
        {
            key: "initiatedByServiceWorkerFilter",
            value: function initiatedByServiceWorkerFilter(request) {
                return request.initiatedByServiceWorker();
            }
        },
        {
            key: "requestResponseHeaderFilter",
            value: function requestResponseHeaderFilter(value, request) {
                return request.responseHeaderValue(value) !== undefined;
            }
        },
        {
            key: "requestResponseHeaderSetCookieFilter",
            value: function requestResponseHeaderSetCookieFilter(value, request) {
                var _request_responseHeaderValue;
                // Multiple Set-Cookie headers in the request are concatenated via space. Only
                // filter via `includes` instead of strict equality.
                return Boolean((_request_responseHeaderValue = request.responseHeaderValue('Set-Cookie')) === null || _request_responseHeaderValue === void 0 ? void 0 : _request_responseHeaderValue.includes(value));
            }
        },
        {
            key: "requestMethodFilter",
            value: function requestMethodFilter(value, request) {
                return request.requestMethod === value;
            }
        },
        {
            key: "requestPriorityFilter",
            value: function requestPriorityFilter(value, request) {
                return request.priority() === value;
            }
        },
        {
            key: "requestMimeTypeFilter",
            value: function requestMimeTypeFilter(value, request) {
                return request.mimeType === value;
            }
        },
        {
            key: "requestMixedContentFilter",
            value: function requestMixedContentFilter(value, request) {
                if (value === "displayed" /* NetworkForward.UIFilter.MixedContentFilterValues.Displayed */ ) {
                    return request.mixedContentType === "optionally-blockable" /* Protocol.Security.MixedContentType.OptionallyBlockable */ ;
                }
                if (value === "blocked" /* NetworkForward.UIFilter.MixedContentFilterValues.Blocked */ ) {
                    return request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */  && request.wasBlocked();
                }
                if (value === "block-overridden" /* NetworkForward.UIFilter.MixedContentFilterValues.BlockOverridden */ ) {
                    return request.mixedContentType === "blockable" /* Protocol.Security.MixedContentType.Blockable */  && !request.wasBlocked();
                }
                if (value === "all" /* NetworkForward.UIFilter.MixedContentFilterValues.All */ ) {
                    return request.mixedContentType !== "none" /* Protocol.Security.MixedContentType.None */ ;
                }
                return false;
            }
        },
        {
            key: "requestSchemeFilter",
            value: function requestSchemeFilter(value, request) {
                return request.scheme === value;
            }
        },
        {
            key: "requestCookieDomainFilter",
            value: function requestCookieDomainFilter(value, request) {
                return request.allCookiesIncludingBlockedOnes().some(function(cookie) {
                    return cookie.domain() === value;
                });
            }
        },
        {
            key: "requestCookieNameFilter",
            value: function requestCookieNameFilter(value, request) {
                return request.allCookiesIncludingBlockedOnes().some(function(cookie) {
                    return cookie.name() === value;
                });
            }
        },
        {
            key: "requestCookiePathFilter",
            value: function requestCookiePathFilter(value, request) {
                return request.allCookiesIncludingBlockedOnes().some(function(cookie) {
                    return cookie.path() === value;
                });
            }
        },
        {
            key: "requestCookieValueFilter",
            value: function requestCookieValueFilter(value, request) {
                return request.allCookiesIncludingBlockedOnes().some(function(cookie) {
                    return cookie.value() === value;
                });
            }
        },
        {
            key: "requestSetCookieDomainFilter",
            value: function requestSetCookieDomainFilter(value, request) {
                return request.responseCookies.some(function(cookie) {
                    return cookie.domain() === value;
                });
            }
        },
        {
            key: "requestSetCookieNameFilter",
            value: function requestSetCookieNameFilter(value, request) {
                return request.responseCookies.some(function(cookie) {
                    return cookie.name() === value;
                });
            }
        },
        {
            key: "requestSetCookieValueFilter",
            value: function requestSetCookieValueFilter(value, request) {
                return request.responseCookies.some(function(cookie) {
                    return cookie.value() === value;
                });
            }
        },
        {
            key: "requestSizeLargerThanFilter",
            value: function requestSizeLargerThanFilter(value, request) {
                return request.transferSize >= value;
            }
        },
        {
            key: "statusCodeFilter",
            value: function statusCodeFilter(value, request) {
                return String(request.statusCode) === value;
            }
        },
        {
            key: "hasOverridesFilter",
            value: function hasOverridesFilter(value, request) {
                if (!value) {
                    return false;
                }
                if (value === overrideFilter.no) {
                    return request.overrideTypes.length === 0;
                }
                if (value === overrideFilter.yes) {
                    return request.overrideTypes.length > 0;
                }
                if (value === overrideFilter.content) {
                    return request.overrideTypes.includes('content');
                }
                if (value === overrideFilter.headers) {
                    return request.overrideTypes.includes('headers');
                }
                return request.overrideTypes.join(',').includes(value);
            }
        },
        {
            key: "getHTTPRequestsFilter",
            value: function getHTTPRequestsFilter(request) {
                return request.parsedURL.isValid && request.scheme in HTTPSchemas;
            }
        },
        {
            key: "resourceTypeFilter",
            value: function resourceTypeFilter(value, request) {
                return request.resourceType().name() === value;
            }
        },
        {
            key: "requestUrlFilter",
            value: function requestUrlFilter(value, request) {
                var regex = new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(value), 'i');
                return regex.test(request.url());
            }
        },
        {
            key: "requestTimeFilter",
            value: function requestTimeFilter(windowStart, windowEnd, request) {
                if (request.issueTime() > windowEnd) {
                    return false;
                }
                if (request.endTime !== -1 && request.endTime < windowStart) {
                    return false;
                }
                return true;
            }
        },
        {
            key: "copyRequestHeaders",
            value: function copyRequestHeaders(request) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(request.requestHeadersText());
            }
        },
        {
            key: "copyResponseHeaders",
            value: function copyResponseHeaders(request) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(request.responseHeadersText);
            }
        },
        {
            key: "copyResponse",
            value: function copyResponse(request) {
                return _async_to_generator(function() {
                    var contentData, content, _contentData_asDataUrl;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    request.requestContentData()
                                ];
                            case 1:
                                contentData = _state.sent();
                                if (_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_10__.ContentData.ContentData.isError(contentData)) {
                                    content = '';
                                } else if (!contentData.isTextContent) {
                                    ;
                                    content = (_contentData_asDataUrl = contentData.asDataUrl()) !== null && _contentData_asDataUrl !== void 0 ? _contentData_asDataUrl : '';
                                } else {
                                    content = contentData.text;
                                }
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(content);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "generateCurlCommand",
            value: function generateCurlCommand(request, platform) {
                return _async_to_generator(function() {
                    var command, ignoredHeaders, escapeString, inferredMethod, data, formData, requestHeaders, i, header, name;
                    function escapeStringWin(str) {
                        /* Only escape the " characters when necessary.
      
               Because cmd.exe parser and MS Crt arguments parsers use some of the
               same escape characters, they can interact with each other in
               horrible ways, the order of operations is critical.
      
               Replace \ with \\ first because it is an escape character for certain
               conditions in both parsers.
      
               Replace all " with \" to ensure the first parser does not remove it.
      
               Then escape all characters we are not sure about with ^ to ensure it
               gets to MS Crt parser safely.
      
               The % character is special because MS Crt parser will try and look for
               ENV variables and fill them in its place. We cannot escape them with %
               and cannot escape them with ^ (because it's cmd.exe's escape not MS Crt
               parser); So we can get cmd.exe parser to escape the character after it,
               if it is followed by a valid beginning character of an ENV variable.
               This ensures we do not try and double escape another ^ if it was placed
               by the previous replace.
      
               Lastly we replace new lines with ^ and TWO new lines because the first
               new line is there to enact the escape command the second is the character
               to escape (in this case new line).
              */ var encapsChars = /[\r\n]|[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`&]/.test(str) ? '^"' : '"';
                        return encapsChars + str.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/[^a-zA-Z0-9\s_\-:=+~'\/.',?;()*`&]/g, '^$&').replace(/%(?=[a-zA-Z0-9_])/g, '%^').replace(/\r?\n/g, '^\n\n') + encapsChars;
                    }
                    function escapeStringPosix(str) {
                        function escapeCharacter(x) {
                            var code = x.charCodeAt(0);
                            var hexString = code.toString(16);
                            // Zero pad to four digits to comply with ANSI-C Quoting:
                            // http://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
                            while(hexString.length < 4){
                                hexString = '0' + hexString;
                            }
                            return '\\u' + hexString;
                        }
                        if (/[\0-\x1F\x7F-\x9F!]|\'/.test(str)) {
                            // Use ANSI-C quoting syntax.
                            return '$\'' + str.replace(/\\/g, '\\\\').replace(/\'/g, '\\\'').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/[\0-\x1F\x7F-\x9F!]/g, escapeCharacter) + '\'';
                        }
                        // Use single quote syntax.
                        return '\'' + str + '\'';
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                command = [];
                                // Most of these headers are derived from the URL and are automatically added by cURL.
                                // The |Accept-Encoding| header is ignored to prevent decompression errors. crbug.com/1015321
                                ignoredHeaders = new Set([
                                    'accept-encoding',
                                    'host',
                                    'method',
                                    'path',
                                    'scheme',
                                    'version',
                                    'authority',
                                    'protocol'
                                ]);
                                // cURL command expected to run on the same platform that DevTools run
                                // (it may be different from the inspected page platform).
                                escapeString = platform === 'win' ? escapeStringWin : escapeStringPosix;
                                command.push(escapeString(request.url()).replace(/[[{}\]]/g, '\\$&'));
                                inferredMethod = 'GET';
                                data = [];
                                return [
                                    4,
                                    request.requestFormData()
                                ];
                            case 1:
                                formData = _state.sent();
                                if (formData) {
                                    // Note that formData is not necessarily urlencoded because it might for example
                                    // come from a fetch request made with an explicitly unencoded body.
                                    data.push('--data-raw ' + escapeString(formData));
                                    ignoredHeaders.add('content-length');
                                    inferredMethod = 'POST';
                                }
                                if (request.requestMethod !== inferredMethod) {
                                    command.push('-X ' + escapeString(request.requestMethod));
                                }
                                requestHeaders = request.requestHeaders();
                                for(i = 0; i < requestHeaders.length; i++){
                                    header = requestHeaders[i];
                                    name = header.name.replace(/^:/, ''); // Translate SPDY v3 headers to HTTP headers.
                                    if (ignoredHeaders.has(name.toLowerCase())) {
                                        continue;
                                    }
                                    if (header.value.trim()) {
                                        command.push('-H ' + escapeString(name + ': ' + header.value));
                                    } else {
                                        // A header passed with -H with no value or only whitespace as its
                                        // value tells curl to not set the header at all. To post an empty
                                        // header, you have to terminate it with a semicolon.
                                        command.push('-H ' + escapeString(name + ';'));
                                    }
                                }
                                command = command.concat(data);
                                if (request.securityState() === "insecure" /* Protocol.Security.SecurityState.Insecure */ ) {
                                    command.push('--insecure');
                                }
                                return [
                                    2,
                                    'curl ' + command.join(command.length >= 3 ? platform === 'win' ? ' ^\n  ' : ' \\\n  ' : ' ')
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getDCLEventColor",
            value: function getDCLEventColor() {
                return '--sys-color-token-attribute-value';
            }
        },
        {
            key: "getLoadEventColor",
            value: function getLoadEventColor() {
                return '--sys-color-token-property-special';
            }
        }
    ]);
    return NetworkLogView;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Widget.VBox));
function handleCreateResponseHeaderOverrideClick(request) {
    return _handleCreateResponseHeaderOverrideClick1.apply(this, arguments);
}
function _handleCreateResponseHeaderOverrideClick1() {
    _handleCreateResponseHeaderOverrideClick1 = _async_to_generator(function(request) {
        var requestLocation, networkPersistanceManager;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIRequestLocation.UIRequestLocation.responseHeaderMatch(request, {
                        name: '',
                        value: ''
                    });
                    networkPersistanceManager = _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_9__.NetworkPersistenceManager.NetworkPersistenceManager.instance();
                    if (!networkPersistanceManager.project()) return [
                        3,
                        3
                    ];
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('persistence-network-overrides-enabled').set(true);
                    return [
                        4,
                        networkPersistanceManager.getOrCreateHeadersUISourceCodeFromUrl(request.url())
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation)
                    ];
                case 2:
                    _state.sent();
                    return [
                        3,
                        4
                    ];
                case 3:
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.InspectorView.InspectorView.instance().displaySelectOverrideFolderInfobar(/*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_12__.SourcesNavigator.OverridesNavigatorView.instance().setupNewWorkspace()
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        4,
                                        networkPersistanceManager.getOrCreateHeadersUISourceCodeFromUrl(request.url())
                                    ];
                                case 2:
                                    _state.sent();
                                    return [
                                        4,
                                        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation)
                                    ];
                                case 3:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    }));
                    _state.label = 4;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return _handleCreateResponseHeaderOverrideClick1.apply(this, arguments);
}
function computeStackTraceText(stackTrace) {
    var stackTraceText = '';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = stackTrace.callFrames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var frame = _step.value;
            var functionName = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.UIUtils.beautifyFunctionName(frame.functionName);
            stackTraceText += "".concat(functionName, " @ ").concat(frame.url, ":").concat(frame.lineNumber + 1, "\n");
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
    if (stackTrace.parent) {
        stackTraceText += computeStackTraceText(stackTrace.parent);
    }
    return stackTraceText;
}
var filteredNetworkRequests = new WeakSet();
var networkRequestToNode = new WeakMap();
function isRequestFilteredOut(request) {
    return filteredNetworkRequests.has(request);
}
var HTTPSchemas = {
    'http': true,
    'https': true,
    'ws': true,
    'wss': true
};
var searchKeys = Object.values(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_11__.UIFilter.FilterType);
var overrideFilter = {
    yes: 'yes',
    no: 'no',
    content: 'content',
    headers: 'headers'
};
var _Common_ObjectWrapper_ObjectWrapper;
var DropDownTypesUI = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(DropDownTypesUI, _superClass);
    var _super = _create_super(DropDownTypesUI);
    function DropDownTypesUI(items, setting) {
        _class_call_check(this, DropDownTypesUI);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "filterElement", void 0);
        _define_property(_assert_this_initialized(_this), "dropDownButton", void 0);
        _define_property(_assert_this_initialized(_this), "displayedTypes", void 0);
        _define_property(_assert_this_initialized(_this), "setting", void 0);
        _define_property(_assert_this_initialized(_this), "items", void 0);
        _define_property(_assert_this_initialized(_this), "contextMenu", void 0);
        _define_property(_assert_this_initialized(_this), "selectedTypesCount", void 0);
        _define_property(_assert_this_initialized(_this), "typesCountAdorner", void 0);
        _define_property(_assert_this_initialized(_this), "hasChanged", false);
        _this.items = items;
        _this.filterElement = document.createElement('div');
        _this.filterElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__.dropDown('request-types').track({
            click: true
        })));
        _this.typesCountAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_13__.Adorner.Adorner();
        _this.selectedTypesCount = document.createElement('span');
        _this.typesCountAdorner.data = {
            name: 'countWrapper',
            content: _this.selectedTypesCount
        };
        _this.typesCountAdorner.classList.add('active-filters-count');
        _this.dropDownButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.ToolbarCombobox(i18nString(UIStrings.requestTypesTooltip));
        _this.dropDownButton.setAdorner(_this.typesCountAdorner);
        _this.dropDownButton.setText(i18nString(UIStrings.requestTypes));
        _this.filterElement.appendChild(_this.dropDownButton.element);
        _this.dropDownButton.element.classList.add('dropdown-filterbar');
        _this.dropDownButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.showContextMenu.bind(_assert_this_initialized(_this)));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.markAsMenuButton(_this.dropDownButton.element);
        _this.displayedTypes = new Set();
        _this.setting = setting;
        setting.addChangeListener(_this.settingChanged.bind(_assert_this_initialized(_this)));
        _this.setting.addChangeListener(_this.filterChanged.bind(_assert_this_initialized(_this)));
        _this.settingChanged();
        return _this;
    }
    _create_class(DropDownTypesUI, [
        {
            key: "discard",
            value: function discard() {
                var _this_contextMenu;
                (_this_contextMenu = this.contextMenu) === null || _this_contextMenu === void 0 ? void 0 : _this_contextMenu.discard();
            }
        },
        {
            key: "emitUMA",
            value: function emitUMA() {
                if (this.hasChanged) {
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.resourceTypeFilterNumberOfSelectedChanged(this.displayedTypes.size);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.displayedTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var displayedType = _step.value;
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.resourceTypeFilterItemSelected(displayedType);
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
            }
        },
        {
            key: "showContextMenu",
            value: function showContextMenu(event) {
                var mouseEvent = event.data;
                this.hasChanged = false;
                this.contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ContextMenu.ContextMenu(mouseEvent, {
                    useSoftMenu: true,
                    keepOpen: true,
                    x: this.dropDownButton.element.getBoundingClientRect().left,
                    y: this.dropDownButton.element.getBoundingClientRect().top + this.dropDownButton.element.offsetHeight,
                    onSoftMenuClosed: this.emitUMA.bind(this)
                });
                this.addRequestType(this.contextMenu, DropDownTypesUI.ALL_TYPES, i18nString(UIStrings.allStrings));
                this.contextMenu.defaultSection().appendSeparator();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var item = _step.value;
                        this.addRequestType(this.contextMenu, item.name, item.name);
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
                this.update();
                void this.contextMenu.show();
            }
        },
        {
            key: "addRequestType",
            value: function addRequestType(contextMenu, name, label) {
                var _this = this;
                var jslogContext = name.toLowerCase().replace(/\s/g, '-');
                contextMenu.defaultSection().appendCheckboxItem(label, function() {
                    _this.setting.get()[name] = !_this.setting.get()[name];
                    _this.toggleTypeFilter(name);
                }, {
                    checked: this.setting.get()[name],
                    jslogContext: jslogContext
                });
            }
        },
        {
            key: "toggleTypeFilter",
            value: function toggleTypeFilter(typeName) {
                var _this_contextMenu, _this_contextMenu1;
                if (typeName !== DropDownTypesUI.ALL_TYPES) {
                    this.displayedTypes.delete(DropDownTypesUI.ALL_TYPES);
                } else {
                    this.displayedTypes = new Set();
                }
                if (this.displayedTypes.has(typeName)) {
                    this.displayedTypes.delete(typeName);
                } else {
                    this.displayedTypes.add(typeName);
                }
                if (this.displayedTypes.size === 0) {
                    this.displayedTypes.add(DropDownTypesUI.ALL_TYPES);
                }
                // Settings do not support `Sets` so convert it back to the Map-like object.
                var updatedSetting = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.displayedTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var type = _step.value;
                        updatedSetting[type] = true;
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
                this.setting.set(updatedSetting);
                // For the feature of keeping the dropdown open while choosing its options:
                // this code provides the dinamic changes of the checkboxes' state in this dropdown
                var menuItems = ((_this_contextMenu = this.contextMenu) === null || _this_contextMenu === void 0 ? void 0 : _this_contextMenu.getItems()) || [];
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = menuItems[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var i = _step1.value;
                        if (i.label) {
                            var _this_contextMenu2;
                            (_this_contextMenu2 = this.contextMenu) === null || _this_contextMenu2 === void 0 ? void 0 : _this_contextMenu2.setChecked(i, this.displayedTypes.has(i.label));
                        }
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
                (_this_contextMenu1 = this.contextMenu) === null || _this_contextMenu1 === void 0 ? void 0 : _this_contextMenu1.setChecked(menuItems[0], this.displayedTypes.has('all'));
            }
        },
        {
            key: "filterChanged",
            value: function filterChanged() {
                this.dispatchEventToListeners("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ );
            }
        },
        {
            key: "settingChanged",
            value: function settingChanged() {
                this.hasChanged = true;
                this.displayedTypes = new Set();
                for(var s in this.setting.get()){
                    this.displayedTypes.add(s);
                }
                this.update();
            }
        },
        {
            key: "update",
            value: function update() {
                if (this.displayedTypes.size === 0 || this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
                    this.displayedTypes = new Set();
                    this.displayedTypes.add(DropDownTypesUI.ALL_TYPES);
                }
                this.updateSelectedTypesCount();
                this.updateLabel();
                this.updateTooltip();
            }
        },
        {
            key: "updateSelectedTypesCount",
            value: function updateSelectedTypesCount() {
                if (!this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
                    this.selectedTypesCount.textContent = this.displayedTypes.size.toString();
                    this.typesCountAdorner.classList.remove('hidden');
                } else {
                    this.typesCountAdorner.classList.add('hidden');
                }
            }
        },
        {
            key: "updateLabel",
            value: function updateLabel() {
                if (this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
                    this.dropDownButton.setText(i18nString(UIStrings.requestTypes));
                    return;
                }
                var newLabel;
                if (this.displayedTypes.size === 1) {
                    var _Common_ResourceType_ResourceCategory_categoryByTitle;
                    var type = this.displayedTypes.values().next().value;
                    newLabel = ((_Common_ResourceType_ResourceCategory_categoryByTitle = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceCategory.categoryByTitle(type)) === null || _Common_ResourceType_ResourceCategory_categoryByTitle === void 0 ? void 0 : _Common_ResourceType_ResourceCategory_categoryByTitle.shortTitle()) || '';
                } else {
                    // show up to two last selected types
                    var twoLastSelected = _to_consumable_array(this.displayedTypes).slice(-2).reverse();
                    var shortNames = twoLastSelected.map(function(type) {
                        var _Common_ResourceType_ResourceCategory_categoryByTitle;
                        return ((_Common_ResourceType_ResourceCategory_categoryByTitle = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceCategory.categoryByTitle(type)) === null || _Common_ResourceType_ResourceCategory_categoryByTitle === void 0 ? void 0 : _Common_ResourceType_ResourceCategory_categoryByTitle.shortTitle()) || '';
                    });
                    var valuesToDisplay = {
                        PH1: shortNames[0],
                        PH2: shortNames[1]
                    };
                    newLabel = this.displayedTypes.size === 2 ? i18nString(UIStrings.twoTypesSelected, valuesToDisplay) : i18nString(UIStrings.overTwoTypesSelected, valuesToDisplay);
                }
                this.dropDownButton.setText(newLabel);
            }
        },
        {
            key: "updateTooltip",
            value: function updateTooltip() {
                var tooltipText = i18nString(UIStrings.requestTypesTooltip);
                if (!this.displayedTypes.has(DropDownTypesUI.ALL_TYPES)) {
                    // reverse the order to match the button label
                    var selectedTypes = _to_consumable_array(this.displayedTypes).reverse();
                    var localized = selectedTypes.map(function(type) {
                        var _Common_ResourceType_ResourceCategory_categoryByTitle;
                        return ((_Common_ResourceType_ResourceCategory_categoryByTitle = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceCategory.categoryByTitle(type)) === null || _Common_ResourceType_ResourceCategory_categoryByTitle === void 0 ? void 0 : _Common_ResourceType_ResourceCategory_categoryByTitle.title()) || '';
                    }).join(', ');
                    tooltipText = i18nString(UIStrings.showOnly, {
                        PH1: localized
                    });
                }
                this.dropDownButton.setTitle(tooltipText);
            }
        },
        {
            key: "isActive",
            value: function isActive() {
                return !this.displayedTypes.has(DropDownTypesUI.ALL_TYPES);
            }
        },
        {
            key: "element",
            value: function element() {
                return this.filterElement;
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.toggleTypeFilter(DropDownTypesUI.ALL_TYPES);
            }
        },
        {
            key: "accept",
            value: function accept(typeName) {
                return this.displayedTypes.has(DropDownTypesUI.ALL_TYPES) || this.displayedTypes.has(typeName);
            }
        }
    ]);
    return DropDownTypesUI;
}(_Common_ObjectWrapper_ObjectWrapper = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
_define_property(DropDownTypesUI, "ALL_TYPES", 'all');
var _onSettingChanged = /*#__PURE__*/ new WeakSet();
var MoreFiltersDropDownUI = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(MoreFiltersDropDownUI, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(MoreFiltersDropDownUI);
    function MoreFiltersDropDownUI() {
        _class_call_check(this, MoreFiltersDropDownUI);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _onSettingChanged);
        _define_property(_assert_this_initialized(_this), "filterElement", void 0);
        _define_property(_assert_this_initialized(_this), "dropDownButton", void 0);
        _define_property(_assert_this_initialized(_this), "networkHideDataURLSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkHideChromeExtensionsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkShowBlockedCookiesOnlySetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkOnlyBlockedRequestsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "networkOnlyThirdPartySetting", void 0);
        _define_property(_assert_this_initialized(_this), "contextMenu", void 0);
        _define_property(_assert_this_initialized(_this), "activeFiltersCount", void 0);
        _define_property(_assert_this_initialized(_this), "activeFiltersCountAdorner", void 0);
        _define_property(_assert_this_initialized(_this), "hasChanged", false);
        _this.networkHideDataURLSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-data-url', false);
        _this.networkHideChromeExtensionsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-hide-chrome-extensions', false);
        _this.networkShowBlockedCookiesOnlySetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-show-blocked-cookies-only-setting', false);
        _this.networkOnlyBlockedRequestsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-blocked-requests', false);
        _this.networkOnlyThirdPartySetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-only-third-party-setting', false);
        _this.filterElement = document.createElement('div');
        _this.filterElement.setAttribute('aria-label', 'Show only/hide requests dropdown');
        _this.filterElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_19__.dropDown('more-filters').track({
            click: true
        })));
        _this.activeFiltersCountAdorner = new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_13__.Adorner.Adorner();
        _this.activeFiltersCount = document.createElement('span');
        _this.activeFiltersCountAdorner.data = {
            name: 'countWrapper',
            content: _this.activeFiltersCount
        };
        _this.activeFiltersCountAdorner.classList.add('active-filters-count');
        _this.updateActiveFiltersCount();
        _this.dropDownButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.Toolbar.ToolbarCombobox(i18nString(UIStrings.showOnlyHideRequests));
        _this.dropDownButton.setText(i18nString(UIStrings.moreFilters));
        _this.dropDownButton.setAdorner(_this.activeFiltersCountAdorner);
        _this.filterElement.appendChild(_this.dropDownButton.element);
        _this.dropDownButton.element.classList.add('dropdown-filterbar');
        _this.dropDownButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.showMoreFiltersContextMenu.bind(_assert_this_initialized(_this)));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ARIAUtils.markAsMenuButton(_this.dropDownButton.element);
        _this.updateTooltip();
        return _this;
    }
    _create_class(MoreFiltersDropDownUI, [
        {
            key: "emitUMA",
            value: function emitUMA() {
                if (this.hasChanged) {
                    var selectedFilters = this.selectedFilters();
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.networkPanelMoreFiltersNumberOfSelectedChanged(selectedFilters.length);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = selectedFilters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var selectedFilter = _step.value;
                            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.networkPanelMoreFiltersItemSelected(selectedFilter);
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
            }
        },
        {
            key: "showMoreFiltersContextMenu",
            value: function showMoreFiltersContextMenu(event) {
                var _this = this;
                var mouseEvent = event.data;
                this.hasChanged = false;
                this.networkHideDataURLSetting.addChangeListener(_class_private_method_get(this, _onSettingChanged, onSettingChanged).bind(this));
                this.networkHideChromeExtensionsSetting.addChangeListener(_class_private_method_get(this, _onSettingChanged, onSettingChanged).bind(this));
                this.networkShowBlockedCookiesOnlySetting.addChangeListener(_class_private_method_get(this, _onSettingChanged, onSettingChanged).bind(this));
                this.networkOnlyBlockedRequestsSetting.addChangeListener(_class_private_method_get(this, _onSettingChanged, onSettingChanged).bind(this));
                this.networkOnlyThirdPartySetting.addChangeListener(_class_private_method_get(this, _onSettingChanged, onSettingChanged).bind(this));
                this.contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_18__.ContextMenu.ContextMenu(mouseEvent, {
                    useSoftMenu: true,
                    keepOpen: true,
                    x: this.dropDownButton.element.getBoundingClientRect().left,
                    y: this.dropDownButton.element.getBoundingClientRect().top + this.dropDownButton.element.offsetHeight,
                    onSoftMenuClosed: this.emitUMA.bind(this)
                });
                this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.hideDataUrls), function() {
                    return _this.networkHideDataURLSetting.set(!_this.networkHideDataURLSetting.get());
                }, {
                    checked: this.networkHideDataURLSetting.get(),
                    tooltip: i18nString(UIStrings.hidesDataAndBlobUrls),
                    jslogContext: 'hide-data-urls'
                });
                this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.chromeExtensions), function() {
                    return _this.networkHideChromeExtensionsSetting.set(!_this.networkHideChromeExtensionsSetting.get());
                }, {
                    checked: this.networkHideChromeExtensionsSetting.get(),
                    tooltip: i18nString(UIStrings.hideChromeExtension),
                    jslogContext: 'hide-extension-urls'
                });
                this.contextMenu.defaultSection().appendSeparator();
                this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.hasBlockedCookies), function() {
                    return _this.networkShowBlockedCookiesOnlySetting.set(!_this.networkShowBlockedCookiesOnlySetting.get());
                }, {
                    checked: this.networkShowBlockedCookiesOnlySetting.get(),
                    tooltip: i18nString(UIStrings.onlyShowRequestsWithBlockedCookies),
                    jslogContext: 'only-blocked-response-cookies'
                });
                this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.blockedRequests), function() {
                    return _this.networkOnlyBlockedRequestsSetting.set(!_this.networkOnlyBlockedRequestsSetting.get());
                }, {
                    checked: this.networkOnlyBlockedRequestsSetting.get(),
                    tooltip: i18nString(UIStrings.onlyShowBlockedRequests),
                    jslogContext: 'only-blocked-requests'
                });
                this.contextMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.thirdParty), function() {
                    return _this.networkOnlyThirdPartySetting.set(!_this.networkOnlyThirdPartySetting.get());
                }, {
                    checked: this.networkOnlyThirdPartySetting.get(),
                    tooltip: i18nString(UIStrings.onlyShowThirdPartyRequests),
                    jslogContext: 'only-3rd-party-requests'
                });
                void this.contextMenu.show();
            }
        },
        {
            key: "selectedFilters",
            value: function selectedFilters() {
                var filters = _to_consumable_array(this.networkHideDataURLSetting.get() ? [
                    i18nString(UIStrings.hideDataUrls)
                ] : []).concat(_to_consumable_array(this.networkHideChromeExtensionsSetting.get() ? [
                    i18nString(UIStrings.chromeExtensions)
                ] : []), _to_consumable_array(this.networkShowBlockedCookiesOnlySetting.get() ? [
                    i18nString(UIStrings.hasBlockedCookies)
                ] : []), _to_consumable_array(this.networkOnlyBlockedRequestsSetting.get() ? [
                    i18nString(UIStrings.blockedRequests)
                ] : []), _to_consumable_array(this.networkOnlyThirdPartySetting.get() ? [
                    i18nString(UIStrings.thirdParty)
                ] : []));
                return filters;
            }
        },
        {
            key: "updateActiveFiltersCount",
            value: function updateActiveFiltersCount() {
                var count = this.selectedFilters().length;
                this.activeFiltersCount.textContent = count.toString();
                count ? this.activeFiltersCountAdorner.classList.remove('hidden') : this.activeFiltersCountAdorner.classList.add('hidden');
            }
        },
        {
            key: "updateTooltip",
            value: function updateTooltip() {
                if (this.selectedFilters().length) {
                    this.dropDownButton.setTitle(this.selectedFilters().join(', '));
                } else {
                    this.dropDownButton.setTitle(UIStrings.showOnlyHideRequests);
                }
            }
        },
        {
            key: "discard",
            value: function discard() {
                if (this.contextMenu) {
                    this.contextMenu.discard();
                }
            }
        },
        {
            key: "isActive",
            value: function isActive() {
                return this.selectedFilters().length !== 0;
            }
        },
        {
            key: "element",
            value: function element() {
                return this.filterElement;
            }
        }
    ]);
    return MoreFiltersDropDownUI;
} //# sourceMappingURL=NetworkLogView.js.map
(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
function onSettingChanged() {
    this.hasChanged = true;
    this.dispatchEventToListeners("FilterChanged" /* UI.FilterBar.FilterUIEvents.FilterChanged */ );
}


}),
"./panels/network/NetworkLogViewColumns.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkLogViewColumns: function() { return NetworkLogViewColumns; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./panels/network/NetworkManageCustomHeadersView.js");
/* harmony import */var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./panels/network/NetworkWaterfallColumn.js");
/* harmony import */var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}












var UIStrings = {
    /**
     *@description Data grid name for Network Log data grids
     */ networkLog: 'Network Log',
    /**
     *@description Inner element text content in Network Log View Columns of the Network panel
     */ waterfall: 'Waterfall',
    /**
     *@description A context menu item in the Network Log View Columns of the Network panel
     */ responseHeaders: 'Response Headers',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ manageHeaderColumns: 'Manage Header Columns…',
    /**
     *@description Text for the start time of an activity
     */ startTime: 'Start Time',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ responseTime: 'Response Time',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ endTime: 'End Time',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ totalDuration: 'Total Duration',
    /**
     *@description Text for the latency of a task
     */ latency: 'Latency',
    /**
     *@description Text for the name of something
     */ name: 'Name',
    /**
     *@description Text that refers to a file path
     */ path: 'Path',
    /**
     *@description Text in Timeline UIUtils of the Performance panel
     */ url: 'Url',
    /**
     *@description Text for one or a group of functions
     */ method: 'Method',
    /**
     *@description Text for the status of something
     */ status: 'Status',
    /**
     *@description Generic label for any text
     */ text: 'Text',
    /**
     *@description Text for security or network protocol
     */ protocol: 'Protocol',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ scheme: 'Scheme',
    /**
     *@description Text for the domain of a website
     */ domain: 'Domain',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ remoteAddress: 'Remote Address',
    /**
     *@description Text that refers to some types
     */ type: 'Type',
    /**
     *@description Text for the initiator of something
     */ initiator: 'Initiator',
    /**
     *@description Column header in the Network log view of the Network panel
     */ hasOverrides: 'Has overrides',
    /**
     *@description Column header in the Network log view of the Network panel
     */ initiatorAddressSpace: 'Initiator Address Space',
    /**
     *@description Text for web cookies
     */ cookies: 'Cookies',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ setCookies: 'Set Cookies',
    /**
     *@description Text for the size of something
     */ size: 'Size',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ content: 'Content',
    /**
     *@description Noun that refers to a duration in milliseconds.
     */ time: 'Time',
    /**
     *@description Text to show the priority of an item
     */ priority: 'Priority',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ connectionId: 'Connection ID',
    /**
     *@description Text in Network Log View Columns of the Network panel
     */ remoteAddressSpace: 'Remote Address Space'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/network/NetworkLogViewColumns.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var NetworkLogViewColumns = /*#__PURE__*/ function() {
    "use strict";
    function NetworkLogViewColumns(networkLogView, timeCalculator, durationCalculator, networkLogLargeRowsSetting) {
        var _this = this;
        _class_call_check(this, NetworkLogViewColumns);
        _define_property(this, "networkLogView", void 0);
        _define_property(this, "persistentSettings", void 0);
        _define_property(this, "networkLogLargeRowsSetting", void 0);
        _define_property(this, "eventDividers", void 0);
        _define_property(this, "eventDividersShown", void 0);
        _define_property(this, "gridMode", void 0);
        _define_property(this, "columns", void 0);
        _define_property(this, "waterfallRequestsAreStale", void 0);
        _define_property(this, "waterfallScrollerWidthIsStale", void 0);
        _define_property(this, "popupLinkifier", void 0);
        _define_property(this, "calculatorsMap", void 0);
        _define_property(this, "lastWheelTime", void 0);
        _define_property(this, "dataGridInternal", void 0);
        _define_property(this, "splitWidget", void 0);
        _define_property(this, "waterfallColumn", void 0);
        _define_property(this, "activeScroller", void 0);
        _define_property(this, "dataGridScroller", void 0);
        _define_property(this, "waterfallScroller", void 0);
        _define_property(this, "waterfallScrollerContent", void 0);
        _define_property(this, "waterfallHeaderElement", void 0);
        _define_property(this, "waterfallColumnSortIcon", void 0);
        _define_property(this, "activeWaterfallSortId", void 0);
        _define_property(this, "popoverHelper", void 0);
        _define_property(this, "hasScrollerTouchStarted", void 0);
        _define_property(this, "scrollerTouchStartPos", void 0);
        this.networkLogView = networkLogView;
        this.persistentSettings = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-log-columns', {});
        this.networkLogLargeRowsSetting = networkLogLargeRowsSetting;
        this.networkLogLargeRowsSetting.addChangeListener(this.updateRowsSize, this);
        this.eventDividers = new Map();
        this.eventDividersShown = false;
        this.gridMode = true;
        this.columns = [];
        this.waterfallRequestsAreStale = false;
        this.waterfallScrollerWidthIsStale = true;
        this.popupLinkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier();
        this.calculatorsMap = new Map();
        this.calculatorsMap.set("Time" /* CalculatorTypes.Time */ , timeCalculator);
        this.calculatorsMap.set("Duration" /* CalculatorTypes.Duration */ , durationCalculator);
        this.lastWheelTime = 0;
        this.setupDataGrid();
        this.setupWaterfall();
        _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeSupport.instance().addEventListener(_ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_6__.ThemeChangeEvent.eventName, function() {
            _this.scheduleRefresh();
        });
    }
    _create_class(NetworkLogViewColumns, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.updateRowsSize();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                if (this.popoverHelper) {
                    this.popoverHelper.hidePopover();
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                if (this.popoverHelper) {
                    this.popoverHelper.hidePopover();
                }
                this.eventDividers.clear();
            }
        },
        {
            key: "setupDataGrid",
            value: function setupDataGrid() {
                var _this = this;
                var defaultColumns = DEFAULT_COLUMNS;
                var defaultColumnConfig = DEFAULT_COLUMN_CONFIG;
                this.columns = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = defaultColumns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var currentConfigColumn = _step.value;
                        var descriptor = Object.assign({}, defaultColumnConfig, currentConfigColumn);
                        var columnConfig = descriptor;
                        columnConfig.id = columnConfig.id;
                        if (columnConfig.subtitle) {
                            var title = _instanceof(columnConfig.title, Function) ? columnConfig.title() : columnConfig.title;
                            var subtitle = _instanceof(columnConfig.subtitle, Function) ? columnConfig.subtitle() : columnConfig.subtitle;
                            columnConfig.titleDOMFragment = this.makeHeaderFragment(title, subtitle);
                        }
                        this.columns.push(columnConfig);
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
                this.loadCustomColumnsAndSettings();
                this.popoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.PopoverHelper.PopoverHelper(this.networkLogView.element, this.getPopoverRequest.bind(this), 'network.initiator-stacktrace');
                this.popoverHelper.setHasPadding(true);
                this.popoverHelper.setTimeout(300, 300);
                this.dataGridInternal = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.SortableDataGrid.SortableDataGrid({
                    displayName: i18nString(UIStrings.networkLog),
                    columns: this.columns.map(NetworkLogViewColumns.convertToDataGridDescriptor),
                    editCallback: undefined,
                    deleteCallback: undefined,
                    refreshCallback: undefined
                });
                this.dataGridInternal.element.addEventListener('mousedown', function(event) {
                    if (!_this.dataGridInternal.selectedNode && event.button) {
                        event.consume();
                    }
                }, true);
                this.dataGridScroller = this.dataGridInternal.scrollContainer;
                this.updateColumns();
                this.dataGridInternal.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , this.sortHandler, this);
                this.dataGridInternal.setHeaderContextMenuCallback(this.innerHeaderContextMenu.bind(this));
                this.activeWaterfallSortId = WaterfallSortIds.StartTime;
                this.dataGridInternal.markColumnAsSortedBy(INITIAL_SORT_COLUMN, _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending);
                this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.SplitWidget.SplitWidget(true, true, 'network-panel-split-view-waterfall', 200);
                var widget = this.dataGridInternal.asWidget();
                widget.setMinimumSize(150, 0);
                this.splitWidget.setMainWidget(widget);
            }
        },
        {
            key: "setupWaterfall",
            value: function setupWaterfall() {
                var _this = this;
                this.waterfallColumn = new _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_10__.NetworkWaterfallColumn(this.networkLogView.calculator());
                this.waterfallColumn.element.addEventListener('contextmenu', handleContextMenu.bind(this));
                this.waterfallColumn.element.addEventListener('wheel', this.onMouseWheel.bind(this, false), {
                    passive: true
                });
                this.waterfallColumn.element.addEventListener('touchstart', this.onTouchStart.bind(this));
                this.waterfallColumn.element.addEventListener('touchmove', this.onTouchMove.bind(this));
                this.waterfallColumn.element.addEventListener('touchend', this.onTouchEnd.bind(this));
                this.dataGridScroller.addEventListener('wheel', this.onMouseWheel.bind(this, true), true);
                this.dataGridScroller.addEventListener('touchstart', this.onTouchStart.bind(this));
                this.dataGridScroller.addEventListener('touchmove', this.onTouchMove.bind(this));
                this.dataGridScroller.addEventListener('touchend', this.onTouchEnd.bind(this));
                this.waterfallScroller = this.waterfallColumn.contentElement.createChild('div', 'network-waterfall-v-scroll');
                this.waterfallScrollerContent = this.waterfallScroller.createChild('div', 'network-waterfall-v-scroll-content');
                this.dataGridInternal.addEventListener("PaddingChanged" /* DataGrid.DataGrid.Events.PaddingChanged */ , function() {
                    _this.waterfallScrollerWidthIsStale = true;
                    _this.syncScrollers();
                });
                this.dataGridInternal.addEventListener("ViewportCalculated" /* DataGrid.ViewportDataGrid.Events.ViewportCalculated */ , this.redrawWaterfallColumn.bind(this));
                this.createWaterfallHeader();
                this.waterfallColumn.contentElement.classList.add('network-waterfall-view');
                this.waterfallColumn.setMinimumSize(100, 0);
                this.splitWidget.setSidebarWidget(this.waterfallColumn);
                this.switchViewMode(false);
                function handleContextMenu(ev) {
                    var event = ev;
                    var node = this.waterfallColumn.getNodeFromPoint(event.offsetX, event.offsetY);
                    if (!node) {
                        return;
                    }
                    var request = node.request();
                    if (!request) {
                        return;
                    }
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                    this.networkLogView.handleContextMenuForRequest(contextMenu, request);
                    void contextMenu.show();
                }
            }
        },
        {
            key: "onMouseWheel",
            value: function onMouseWheel(shouldConsume, ev) {
                if (shouldConsume) {
                    ev.consume(true);
                }
                var event = ev;
                var hasRecentWheel = Date.now() - this.lastWheelTime < 80;
                this.activeScroller.scrollBy({
                    top: event.deltaY,
                    behavior: hasRecentWheel ? 'auto' : 'smooth'
                });
                this.syncScrollers();
                this.lastWheelTime = Date.now();
            }
        },
        {
            key: "onTouchStart",
            value: function onTouchStart(ev) {
                var event = ev;
                this.hasScrollerTouchStarted = true;
                this.scrollerTouchStartPos = event.changedTouches[0].pageY;
            }
        },
        {
            key: "onTouchMove",
            value: function onTouchMove(ev) {
                if (!this.hasScrollerTouchStarted) {
                    return;
                }
                var event = ev;
                var currentPos = event.changedTouches[0].pageY;
                var delta = this.scrollerTouchStartPos - currentPos;
                this.activeScroller.scrollBy({
                    top: delta,
                    behavior: 'auto'
                });
                this.syncScrollers();
                this.scrollerTouchStartPos = currentPos;
            }
        },
        {
            key: "onTouchEnd",
            value: function onTouchEnd() {
                this.hasScrollerTouchStarted = false;
            }
        },
        {
            key: "syncScrollers",
            value: function syncScrollers() {
                if (!this.waterfallColumn.isShowing()) {
                    return;
                }
                this.waterfallScrollerContent.style.height = this.dataGridScroller.scrollHeight - this.dataGridInternal.headerHeight() + 'px';
                this.updateScrollerWidthIfNeeded();
                this.dataGridScroller.scrollTop = this.waterfallScroller.scrollTop;
            }
        },
        {
            key: "updateScrollerWidthIfNeeded",
            value: function updateScrollerWidthIfNeeded() {
                if (this.waterfallScrollerWidthIsStale) {
                    this.waterfallScrollerWidthIsStale = false;
                    this.waterfallColumn.setRightPadding(this.waterfallScroller.offsetWidth - this.waterfallScrollerContent.offsetWidth);
                }
            }
        },
        {
            key: "redrawWaterfallColumn",
            value: function redrawWaterfallColumn() {
                if (!this.waterfallRequestsAreStale) {
                    this.updateScrollerWidthIfNeeded();
                    this.waterfallColumn.update(this.activeScroller.scrollTop, this.eventDividersShown ? this.eventDividers : undefined);
                    return;
                }
                this.syncScrollers();
                var nodes = this.networkLogView.flatNodesList();
                this.waterfallColumn.update(this.activeScroller.scrollTop, this.eventDividers, nodes);
            }
        },
        {
            key: "createWaterfallHeader",
            value: function createWaterfallHeader() {
                var _this = this;
                this.waterfallHeaderElement = this.waterfallColumn.contentElement.createChild('div', 'network-waterfall-header');
                this.waterfallHeaderElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.tableHeader('waterfall').track({
                    click: true
                })));
                this.waterfallHeaderElement.addEventListener('click', waterfallHeaderClicked.bind(this));
                this.waterfallHeaderElement.addEventListener('contextmenu', function(event) {
                    var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                    _this.innerHeaderContextMenu(contextMenu);
                    void contextMenu.show();
                });
                this.waterfallHeaderElement.createChild('div', 'hover-layer');
                var innerElement = this.waterfallHeaderElement.createChild('div');
                innerElement.textContent = i18nString(UIStrings.waterfall);
                this.waterfallColumnSortIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
                this.waterfallColumnSortIcon.className = 'sort-order-icon';
                this.waterfallHeaderElement.createChild('div', 'sort-order-icon-container').appendChild(this.waterfallColumnSortIcon);
                function waterfallHeaderClicked() {
                    var sortOrders = _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order;
                    var wasSortedByWaterfall = this.dataGridInternal.sortColumnId() === 'waterfall';
                    var wasSortedAscending = this.dataGridInternal.isSortOrderAscending();
                    var sortOrder = wasSortedByWaterfall && wasSortedAscending ? sortOrders.Descending : sortOrders.Ascending;
                    this.dataGridInternal.markColumnAsSortedBy('waterfall', sortOrder);
                    this.sortHandler();
                }
            }
        },
        {
            key: "setCalculator",
            value: function setCalculator(x) {
                this.waterfallColumn.setCalculator(x);
            }
        },
        {
            key: "scheduleRefresh",
            value: function scheduleRefresh() {
                this.waterfallColumn.scheduleDraw();
            }
        },
        {
            key: "updateRowsSize",
            value: function updateRowsSize() {
                var _this = this;
                var largeRows = Boolean(this.networkLogLargeRowsSetting.get());
                this.dataGridInternal.element.classList.toggle('small', !largeRows);
                this.dataGridInternal.scheduleUpdate();
                this.waterfallScrollerWidthIsStale = true;
                this.waterfallColumn.setRowHeight(largeRows ? 41 : 21);
                this.waterfallScroller.classList.toggle('small', !largeRows);
                this.waterfallHeaderElement.classList.toggle('small', !largeRows);
                // Request an animation frame because under certain conditions
                // (see crbug.com/1019723) this.waterfallScroller.offsetTop does
                // not return the value it's supposed to return as of the applied
                // css classes.
                window.requestAnimationFrame(function() {
                    _this.waterfallColumn.setHeaderHeight(_this.waterfallScroller.offsetTop);
                    _this.waterfallColumn.scheduleDraw();
                });
            }
        },
        {
            key: "show",
            value: function show(element) {
                this.splitWidget.show(element);
            }
        },
        {
            key: "setHidden",
            value: function setHidden(value) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setHidden(this.splitWidget.element, value);
            }
        },
        {
            key: "dataGrid",
            value: function dataGrid() {
                return this.dataGridInternal;
            }
        },
        {
            key: "sortByCurrentColumn",
            value: function sortByCurrentColumn() {
                this.sortHandler();
            }
        },
        {
            key: "sortHandler",
            value: function sortHandler() {
                var columnId = this.dataGridInternal.sortColumnId();
                this.networkLogView.removeAllNodeHighlights();
                this.waterfallRequestsAreStale = true;
                if (columnId === 'waterfall') {
                    if (this.dataGridInternal.sortOrder() === _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending) {
                        this.waterfallColumnSortIcon.name = 'triangle-up';
                    } else {
                        this.waterfallColumnSortIcon.name = 'triangle-down';
                    }
                    this.waterfallColumnSortIcon.hidden = false;
                    var sortFunction = _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, this.activeWaterfallSortId);
                    this.dataGridInternal.sortNodes(sortFunction, !this.dataGridInternal.isSortOrderAscending());
                    this.dataGridSortedForTest();
                    return;
                }
                this.waterfallColumnSortIcon.hidden = true;
                this.waterfallColumnSortIcon.name = null;
                var columnConfig = this.columns.find(function(columnConfig) {
                    return columnConfig.id === columnId;
                });
                if (!columnConfig || !columnConfig.sortingFunction) {
                    return;
                }
                var sortingFunction = columnConfig.sortingFunction;
                if (!sortingFunction) {
                    return;
                }
                this.dataGridInternal.sortNodes(sortingFunction, !this.dataGridInternal.isSortOrderAscending());
                this.dataGridSortedForTest();
            }
        },
        {
            key: "dataGridSortedForTest",
            value: function dataGridSortedForTest() {}
        },
        {
            key: "updateColumns",
            value: function updateColumns() {
                if (!this.dataGridInternal) {
                    return;
                }
                var visibleColumns = new Set();
                if (this.gridMode) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var columnConfig = _step.value;
                            if (columnConfig.id === 'waterfall') {
                                this.setWaterfallVisibility(columnConfig.visible);
                            } else if (columnConfig.visible) {
                                visibleColumns.add(columnConfig.id);
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
                } else {
                    // Find the first visible column from the path group
                    var visibleColumn = this.columns.find(function(c) {
                        return c.hideableGroup === 'path' && c.visible;
                    });
                    if (visibleColumn) {
                        visibleColumns.add(visibleColumn.id);
                    } else {
                        // This should not happen because inside a hideableGroup
                        // there should always be at least one column visible
                        // This is just in case.
                        visibleColumns.add('name');
                    }
                    this.setWaterfallVisibility(false);
                }
                this.dataGridInternal.setColumnsVisibility(visibleColumns);
            }
        },
        {
            key: "switchViewMode",
            value: function switchViewMode(gridMode) {
                if (this.gridMode === gridMode) {
                    return;
                }
                this.gridMode = gridMode;
                this.updateColumns();
                this.updateRowsSize();
            }
        },
        {
            key: "toggleColumnVisibility",
            value: function toggleColumnVisibility(columnConfig) {
                this.loadCustomColumnsAndSettings();
                columnConfig.visible = !columnConfig.visible;
                this.saveColumnsSettings();
                this.updateColumns();
                this.updateRowsSize();
            }
        },
        {
            key: "setWaterfallVisibility",
            value: function setWaterfallVisibility(visible) {
                if (!this.splitWidget) {
                    return;
                }
                this.networkLogView.element.classList.toggle('has-waterfall', visible);
                if (visible) {
                    this.splitWidget.showBoth();
                    this.activeScroller = this.waterfallScroller;
                    this.waterfallScroller.scrollTop = this.dataGridScroller.scrollTop;
                    this.dataGridInternal.setScrollContainer(this.waterfallScroller);
                } else {
                    this.networkLogView.removeAllNodeHighlights();
                    this.splitWidget.hideSidebar();
                    this.activeScroller = this.dataGridScroller;
                    this.dataGridInternal.setScrollContainer(this.dataGridScroller);
                }
            }
        },
        {
            key: "saveColumnsSettings",
            value: function saveColumnsSettings() {
                var saveableSettings = {};
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var columnConfig = _step.value;
                        saveableSettings[columnConfig.id] = {
                            visible: columnConfig.visible,
                            title: columnConfig.title
                        };
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
                this.persistentSettings.set(saveableSettings);
            }
        },
        {
            key: "loadCustomColumnsAndSettings",
            value: function loadCustomColumnsAndSettings() {
                var savedSettings = this.persistentSettings.get();
                var columnIds = Object.keys(savedSettings);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _this, _loop = function() {
                        var columnId = _step.value;
                        var setting = savedSettings[columnId];
                        var columnConfig = _this.columns.find(function(columnConfig) {
                            return columnConfig.id === columnId;
                        });
                        if (!columnConfig && setting.title) {
                            columnConfig = _this.addCustomHeader(setting.title, columnId) || undefined;
                        }
                        if (columnConfig && columnConfig.hideable && typeof setting.visible === 'boolean') {
                            columnConfig.visible = Boolean(setting.visible);
                        }
                        if (columnConfig && typeof setting.title === 'string') {
                            columnConfig.title = setting.title;
                        }
                    };
                    for(var _iterator = columnIds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
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
            key: "makeHeaderFragment",
            value: function makeHeaderFragment(title, subtitle) {
                var fragment = document.createDocumentFragment();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(fragment, title);
                var subtitleDiv = fragment.createChild('div', 'network-header-subtitle');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextChild(subtitleDiv, subtitle);
                return fragment;
            }
        },
        {
            key: "innerHeaderContextMenu",
            value: function innerHeaderContextMenu(contextMenu) {
                var columnConfigs = this.columns.filter(function(columnConfig) {
                    return columnConfig.hideable;
                });
                var nonResponseHeaders = columnConfigs.filter(function(columnConfig) {
                    return !columnConfig.isResponseHeader;
                });
                var hideableGroups = new Map();
                var nonResponseHeadersWithoutGroup = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    // Sort columns into their groups
                    for(var _iterator = nonResponseHeaders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var columnConfig = _step.value;
                        if (!columnConfig.hideableGroup) {
                            nonResponseHeadersWithoutGroup.push(columnConfig);
                        } else {
                            var name = columnConfig.hideableGroup;
                            var hideableGroup = hideableGroups.get(name);
                            if (!hideableGroup) {
                                hideableGroup = [];
                                hideableGroups.set(name, hideableGroup);
                            }
                            hideableGroup.push(columnConfig);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    var _this, _loop = function() {
                        var group = _step1.value;
                        var visibleColumns = group.filter(function(columnConfig) {
                            return columnConfig.visible;
                        });
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = group[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var columnConfig = _step.value;
                                // Make sure that at least one item in every group is enabled
                                var disabled = visibleColumns.length === 1 && visibleColumns[0] === columnConfig;
                                var title = _instanceof(columnConfig.title, Function) ? columnConfig.title() : columnConfig.title;
                                contextMenu.headerSection().appendCheckboxItem(title, _this.toggleColumnVisibility.bind(_this, columnConfig), {
                                    checked: columnConfig.visible,
                                    disabled: disabled,
                                    jslogContext: columnConfig.id
                                });
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
                        contextMenu.headerSection().appendSeparator();
                    };
                    // Add all the groups first
                    for(var _iterator1 = hideableGroups.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_this = this, _loop();
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
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    // Add normal columns not belonging to any group
                    for(var _iterator2 = nonResponseHeadersWithoutGroup[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var columnConfig1 = _step2.value;
                        var title = _instanceof(columnConfig1.title, Function) ? columnConfig1.title() : columnConfig1.title;
                        contextMenu.headerSection().appendCheckboxItem(title, this.toggleColumnVisibility.bind(this, columnConfig1), {
                            checked: columnConfig1.visible,
                            jslogContext: columnConfig1.id
                        });
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                var responseSubMenu = contextMenu.footerSection().appendSubMenuItem(i18nString(UIStrings.responseHeaders), false, 'response-headers');
                var responseHeaders = columnConfigs.filter(function(columnConfig) {
                    return columnConfig.isResponseHeader;
                });
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = responseHeaders[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var columnConfig2 = _step3.value;
                        var title1 = _instanceof(columnConfig2.title, Function) ? columnConfig2.title() : columnConfig2.title;
                        responseSubMenu.defaultSection().appendCheckboxItem(title1, this.toggleColumnVisibility.bind(this, columnConfig2), {
                            checked: columnConfig2.visible,
                            jslogContext: columnConfig2.id
                        });
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                            _iterator3.return();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
                responseSubMenu.footerSection().appendItem(i18nString(UIStrings.manageHeaderColumns), this.manageCustomHeaderDialog.bind(this), {
                    jslogContext: 'manage-header-columns'
                });
                var waterfallSortIds = WaterfallSortIds;
                var waterfallSubMenu = contextMenu.footerSection().appendSubMenuItem(i18nString(UIStrings.waterfall), false, 'waterfall');
                waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.startTime), setWaterfallMode.bind(this, waterfallSortIds.StartTime), {
                    checked: this.activeWaterfallSortId === waterfallSortIds.StartTime,
                    jslogContext: 'start-time'
                });
                waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.responseTime), setWaterfallMode.bind(this, waterfallSortIds.ResponseTime), {
                    checked: this.activeWaterfallSortId === waterfallSortIds.ResponseTime,
                    jslogContext: 'response-time'
                });
                waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.endTime), setWaterfallMode.bind(this, waterfallSortIds.EndTime), {
                    checked: this.activeWaterfallSortId === waterfallSortIds.EndTime,
                    jslogContext: 'end-time'
                });
                waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.totalDuration), setWaterfallMode.bind(this, waterfallSortIds.Duration), {
                    checked: this.activeWaterfallSortId === waterfallSortIds.Duration,
                    jslogContext: 'total-duration'
                });
                waterfallSubMenu.defaultSection().appendCheckboxItem(i18nString(UIStrings.latency), setWaterfallMode.bind(this, waterfallSortIds.Latency), {
                    checked: this.activeWaterfallSortId === waterfallSortIds.Latency,
                    jslogContext: 'latency'
                });
                function setWaterfallMode(sortId) {
                    var calculator = this.calculatorsMap.get("Time" /* CalculatorTypes.Time */ );
                    var waterfallSortIds = WaterfallSortIds;
                    if (sortId === waterfallSortIds.Duration || sortId === waterfallSortIds.Latency) {
                        calculator = this.calculatorsMap.get("Duration" /* CalculatorTypes.Duration */ );
                    }
                    this.networkLogView.setCalculator(calculator);
                    this.activeWaterfallSortId = sortId;
                    this.dataGridInternal.markColumnAsSortedBy('waterfall', _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.Order.Ascending);
                    this.sortHandler();
                }
            }
        },
        {
            key: "manageCustomHeaderDialog",
            value: function manageCustomHeaderDialog() {
                var _this = this;
                var customHeaders = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.columns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var columnConfig = _step.value;
                        var title = _instanceof(columnConfig.title, Function) ? columnConfig.title() : columnConfig.title;
                        if (columnConfig.isResponseHeader) {
                            customHeaders.push({
                                title: title,
                                editable: columnConfig.isCustomHeader
                            });
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
                var manageCustomHeaders = new _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_9__.NetworkManageCustomHeadersView(customHeaders, function(headerTitle) {
                    return Boolean(_this.addCustomHeader(headerTitle));
                }, this.changeCustomHeader.bind(this), this.removeCustomHeader.bind(this));
                var dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Dialog.Dialog('manage-custom-headers');
                manageCustomHeaders.show(dialog.contentElement);
                dialog.setSizeBehavior("MeasureContent" /* UI.GlassPane.SizeBehavior.MeasureContent */ );
                dialog.show(this.networkLogView.element);
            }
        },
        {
            key: "removeCustomHeader",
            value: function removeCustomHeader(headerId) {
                headerId = headerId.toLowerCase();
                var index = this.columns.findIndex(function(columnConfig) {
                    return columnConfig.id === headerId;
                });
                if (index === -1) {
                    return false;
                }
                this.columns.splice(index, 1);
                this.dataGridInternal.removeColumn(headerId);
                this.saveColumnsSettings();
                this.updateColumns();
                return true;
            }
        },
        {
            key: "addCustomHeader",
            value: function addCustomHeader(headerTitle, headerId, index) {
                if (!headerId) {
                    headerId = headerTitle.toLowerCase();
                }
                if (index === undefined) {
                    index = this.columns.length - 1;
                }
                var currentColumnConfig = this.columns.find(function(columnConfig) {
                    return columnConfig.id === headerId;
                });
                if (currentColumnConfig) {
                    return null;
                }
                var columnConfigBase = Object.assign({}, DEFAULT_COLUMN_CONFIG, {
                    id: headerId,
                    title: headerTitle,
                    isResponseHeader: true,
                    isCustomHeader: true,
                    visible: true,
                    sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, headerId)
                });
                // Split out the column config from the typed version, as doing it in a single assignment causes
                // issues with Closure compiler.
                var columnConfig = columnConfigBase;
                this.columns.splice(index, 0, columnConfig);
                if (this.dataGridInternal) {
                    this.dataGridInternal.addColumn(NetworkLogViewColumns.convertToDataGridDescriptor(columnConfig), index);
                }
                this.saveColumnsSettings();
                this.updateColumns();
                return columnConfig;
            }
        },
        {
            key: "changeCustomHeader",
            value: function changeCustomHeader(oldHeaderId, newHeaderTitle, newHeaderId) {
                if (!newHeaderId) {
                    newHeaderId = newHeaderTitle.toLowerCase();
                }
                oldHeaderId = oldHeaderId.toLowerCase();
                var oldIndex = this.columns.findIndex(function(columnConfig) {
                    return columnConfig.id === oldHeaderId;
                });
                var oldColumnConfig = this.columns[oldIndex];
                var currentColumnConfig = this.columns.find(function(columnConfig) {
                    return columnConfig.id === newHeaderId;
                });
                if (!oldColumnConfig || currentColumnConfig && oldHeaderId !== newHeaderId) {
                    return false;
                }
                this.removeCustomHeader(oldHeaderId);
                this.addCustomHeader(newHeaderTitle, newHeaderId, oldIndex);
                return true;
            }
        },
        {
            key: "getPopoverRequest",
            value: function getPopoverRequest(event) {
                if (!this.gridMode) {
                    return null;
                }
                var hoveredNode = this.networkLogView.hoveredNode();
                if (!hoveredNode || !event.target) {
                    return null;
                }
                var anchor = event.target.enclosingNodeOrSelfWithClass('network-script-initiated');
                if (!anchor) {
                    return null;
                }
                var request = hoveredNode.request();
                if (!request) {
                    return null;
                }
                var _this = this;
                return {
                    box: anchor.boxInWindow(),
                    show: function() {
                        var _ref = _async_to_generator(function(popover) {
                            var content;
                            return _ts_generator(this, function(_state) {
                                _this.popupLinkifier.addEventListener("liveLocationUpdated" /* Components.Linkifier.Events.LiveLocationUpdated */ , function() {
                                    popover.setSizeBehavior("MeasureContent" /* UI.GlassPane.SizeBehavior.MeasureContent */ );
                                });
                                content = _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_11__.RequestInitiatorView.createStackTracePreview(request, _this.popupLinkifier, false);
                                if (!content) {
                                    return [
                                        2,
                                        false
                                    ];
                                }
                                popover.contentElement.appendChild(content.element);
                                return [
                                    2,
                                    true
                                ];
                            });
                        });
                        return function(popover) {
                            return _ref.apply(this, arguments);
                        };
                    }(),
                    hide: this.popupLinkifier.reset.bind(this.popupLinkifier)
                };
            }
        },
        {
            key: "addEventDividers",
            value: function addEventDividers(times, className) {
                // TODO(allada) Remove this and pass in the color.
                var color = 'transparent';
                switch(className){
                    case 'network-dcl-divider':
                        color = '#0867CB';
                        break;
                    case 'network-load-divider':
                        color = '#B31412';
                        break;
                    default:
                        return;
                }
                var currentTimes = this.eventDividers.get(color) || [];
                this.eventDividers.set(color, currentTimes.concat(times));
                this.networkLogView.scheduleRefresh();
            }
        },
        {
            key: "hideEventDividers",
            value: function hideEventDividers() {
                this.eventDividersShown = true;
                this.redrawWaterfallColumn();
            }
        },
        {
            key: "showEventDividers",
            value: function showEventDividers() {
                this.eventDividersShown = false;
                this.redrawWaterfallColumn();
            }
        },
        {
            key: "selectFilmStripFrame",
            value: function selectFilmStripFrame(time) {
                this.eventDividers.set(FILM_STRIP_DIVIDER_COLOR, [
                    time
                ]);
                this.redrawWaterfallColumn();
            }
        },
        {
            key: "clearFilmStripFrame",
            value: function clearFilmStripFrame() {
                this.eventDividers.delete(FILM_STRIP_DIVIDER_COLOR);
                this.redrawWaterfallColumn();
            }
        }
    ], [
        {
            key: "convertToDataGridDescriptor",
            value: function convertToDataGridDescriptor(columnConfig) {
                var title = _instanceof(columnConfig.title, Function) ? columnConfig.title() : columnConfig.title;
                return {
                    id: columnConfig.id,
                    title: title,
                    sortable: columnConfig.sortable,
                    align: columnConfig.align,
                    nonSelectable: columnConfig.nonSelectable,
                    weight: columnConfig.weight,
                    allowInSortByEvenWhenHidden: columnConfig.allowInSortByEvenWhenHidden
                };
            }
        }
    ]);
    return NetworkLogViewColumns;
}();
var INITIAL_SORT_COLUMN = 'waterfall';
var DEFAULT_COLUMN_CONFIG = {
    subtitle: null,
    visible: false,
    weight: 6,
    sortable: true,
    hideable: true,
    hideableGroup: null,
    nonSelectable: false,
    isResponseHeader: false,
    isCustomHeader: false,
    allowInSortByEvenWhenHidden: false
};
var DEFAULT_COLUMNS = [
    {
        id: 'name',
        title: i18nLazyString(UIStrings.name),
        subtitle: i18nLazyString(UIStrings.path),
        visible: true,
        weight: 20,
        hideable: true,
        hideableGroup: 'path',
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.NameComparator
    },
    {
        id: 'path',
        title: i18nLazyString(UIStrings.path),
        hideable: true,
        hideableGroup: 'path',
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'pathname')
    },
    {
        id: 'url',
        title: i18nLazyString(UIStrings.url),
        hideable: true,
        hideableGroup: 'path',
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestURLComparator
    },
    {
        id: 'method',
        title: i18nLazyString(UIStrings.method),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'requestMethod')
    },
    {
        id: 'status',
        title: i18nLazyString(UIStrings.status),
        visible: true,
        subtitle: i18nLazyString(UIStrings.text),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'statusCode')
    },
    {
        id: 'protocol',
        title: i18nLazyString(UIStrings.protocol),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'protocol')
    },
    {
        id: 'scheme',
        title: i18nLazyString(UIStrings.scheme),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'scheme')
    },
    {
        id: 'domain',
        title: i18nLazyString(UIStrings.domain),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'domain')
    },
    {
        id: 'remote-address',
        title: i18nLazyString(UIStrings.remoteAddress),
        weight: 10,
        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RemoteAddressComparator
    },
    {
        id: 'remote-address-space',
        title: i18nLazyString(UIStrings.remoteAddressSpace),
        visible: false,
        weight: 10,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RemoteAddressSpaceComparator
    },
    {
        id: 'type',
        title: i18nLazyString(UIStrings.type),
        visible: true,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.TypeComparator
    },
    {
        id: 'initiator',
        title: i18nLazyString(UIStrings.initiator),
        visible: true,
        weight: 10,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.InitiatorComparator
    },
    {
        id: 'initiator-address-space',
        title: i18nLazyString(UIStrings.initiatorAddressSpace),
        visible: false,
        weight: 10,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.InitiatorAddressSpaceComparator
    },
    {
        id: 'cookies',
        title: i18nLazyString(UIStrings.cookies),
        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestCookiesCountComparator
    },
    {
        id: 'set-cookies',
        title: i18nLazyString(UIStrings.setCookies),
        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseCookiesCountComparator
    },
    {
        id: 'size',
        title: i18nLazyString(UIStrings.size),
        visible: true,
        subtitle: i18nLazyString(UIStrings.content),
        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.SizeComparator
    },
    {
        id: 'time',
        title: i18nLazyString(UIStrings.time),
        visible: true,
        subtitle: i18nLazyString(UIStrings.latency),
        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'duration')
    },
    {
        id: 'priority',
        title: i18nLazyString(UIStrings.priority),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.PriorityComparator
    },
    {
        id: 'connection-id',
        title: i18nLazyString(UIStrings.connectionId),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.RequestPropertyComparator.bind(null, 'connectionId')
    },
    {
        id: 'cache-control',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Cache-Control'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'cache-control')
    },
    {
        id: 'connection',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Connection'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'connection')
    },
    {
        id: 'content-encoding',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Content-Encoding'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'content-encoding')
    },
    {
        id: 'content-length',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Content-Length'),
        align: "right" /* DataGrid.DataGrid.Align.Right */ ,
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderNumberComparator.bind(null, 'content-length')
    },
    {
        id: 'etag',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('ETag'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'etag')
    },
    {
        id: 'has-overrides',
        title: i18nLazyString(UIStrings.hasOverrides),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'has-overrides')
    },
    {
        id: 'keep-alive',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Keep-Alive'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'keep-alive')
    },
    {
        id: 'last-modified',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Last-Modified'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderDateComparator.bind(null, 'last-modified')
    },
    {
        id: 'server',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Server'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'server')
    },
    {
        id: 'vary',
        isResponseHeader: true,
        title: _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedLazyString('Vary'),
        sortingFunction: _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestNode.ResponseHeaderStringComparator.bind(null, 'vary')
    },
    // This header is a placeholder to let datagrid know that it can be sorted by this column, but never shown.
    {
        id: 'waterfall',
        title: i18nLazyString(UIStrings.waterfall),
        allowInSortByEvenWhenHidden: true
    }
];
var FILM_STRIP_DIVIDER_COLOR = '#fccc49';
var WaterfallSortIds;
(function(WaterfallSortIds) {
    WaterfallSortIds["StartTime"] = "startTime";
    WaterfallSortIds["ResponseTime"] = "responseReceivedTime";
    WaterfallSortIds["EndTime"] = "endTime";
    WaterfallSortIds["Duration"] = "duration";
    WaterfallSortIds["Latency"] = "latency";
})(WaterfallSortIds || (WaterfallSortIds = {})); //# sourceMappingURL=NetworkLogViewColumns.js.map


}),
"./panels/network/NetworkOverview.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkOverview: function() { return NetworkOverview; },
  RequestTimeRangeNameToColor: function() { return RequestTimeRangeNameToColor; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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








var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
var NetworkOverview = /*#__PURE__*/ function(_PerfUI_TimelineOverviewPane_TimelineOverviewBase) {
    "use strict";
    _inherits(NetworkOverview, _PerfUI_TimelineOverviewPane_TimelineOverviewBase);
    var _super = _create_super(NetworkOverview);
    function NetworkOverview() {
        _class_call_check(this, NetworkOverview);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "selectedFilmStripTime", void 0);
        _define_property(_assert_this_initialized(_this), "numBands", void 0);
        _define_property(_assert_this_initialized(_this), "highlightedRequest", void 0);
        _define_property(_assert_this_initialized(_this), "loadEvents", void 0);
        _define_property(_assert_this_initialized(_this), "domContentLoadedEvents", void 0);
        _define_property(_assert_this_initialized(_this), "nextBand", void 0);
        _define_property(_assert_this_initialized(_this), "bandMap", void 0);
        _define_property(_assert_this_initialized(_this), "requestsList", void 0);
        _define_property(_assert_this_initialized(_this), "requestsSet", void 0);
        _define_property(_assert_this_initialized(_this), "span", void 0);
        _define_property(_assert_this_initialized(_this), "lastBoundary", void 0);
        _this.selectedFilmStripTime = -1;
        _this.element.classList.add('network-overview');
        _this.numBands = 1;
        _this.highlightedRequest = null;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.Load, _this.loadEventFired, _assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.Events.DOMContentLoaded, _this.domContentLoadedEventFired, _assert_this_initialized(_this), {
            scoped: true
        });
        _this.reset();
        return _this;
    }
    _create_class(NetworkOverview, [
        {
            key: "setHighlightedRequest",
            value: function setHighlightedRequest(request) {
                this.highlightedRequest = request;
                this.scheduleUpdate();
            }
        },
        {
            key: "selectFilmStripFrame",
            value: function selectFilmStripFrame(time) {
                this.selectedFilmStripTime = time;
                this.scheduleUpdate();
            }
        },
        {
            key: "clearFilmStripFrame",
            value: function clearFilmStripFrame() {
                this.selectedFilmStripTime = -1;
                this.scheduleUpdate();
            }
        },
        {
            key: "loadEventFired",
            value: function loadEventFired(event) {
                var time = event.data.loadTime;
                if (time) {
                    this.loadEvents.push(time * 1000);
                }
                this.scheduleUpdate();
            }
        },
        {
            key: "domContentLoadedEventFired",
            value: function domContentLoadedEventFired(event) {
                var data = event.data;
                if (data) {
                    this.domContentLoadedEvents.push(data * 1000);
                }
                this.scheduleUpdate();
            }
        },
        {
            key: "bandId",
            value: function bandId(connectionId) {
                if (!connectionId || connectionId === '0') {
                    return -1;
                }
                if (this.bandMap.has(connectionId)) {
                    return this.bandMap.get(connectionId);
                }
                var result = this.nextBand++;
                this.bandMap.set(connectionId, result);
                return result;
            }
        },
        {
            key: "updateRequest",
            value: function updateRequest(request) {
                if (!this.requestsSet.has(request)) {
                    this.requestsSet.add(request);
                    this.requestsList.push(request);
                }
                this.scheduleUpdate();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.onResize();
            }
        },
        {
            key: "calculator",
            value: function calculator() {
                return _get(_get_prototype_of(NetworkOverview.prototype), "calculator", this).call(this);
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                var width = this.element.offsetWidth;
                var height = this.element.offsetHeight;
                this.calculator().setDisplayWidth(width);
                this.resetCanvas();
                var numBands = (height - PADDING - 1) / BAND_HEIGHT - 1 | 0;
                this.numBands = numBands > 0 ? numBands : 1;
                this.scheduleUpdate();
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.span = 1;
                this.lastBoundary = null;
                this.nextBand = 0;
                this.bandMap = new Map();
                this.requestsList = [];
                this.requestsSet = new Set();
                this.loadEvents = [];
                this.domContentLoadedEvents = [];
                // Clear screen.
                this.resetCanvas();
            }
        },
        {
            key: "scheduleUpdate",
            value: function scheduleUpdate() {
                if (!this.isShowing()) {
                    return;
                }
                void coordinator.write('NetworkOverview.render', this.update.bind(this));
            }
        },
        {
            key: "update",
            value: function update() {
                var calculator = this.calculator();
                var newBoundary = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__.NetworkTimeBoundary(calculator.minimumBoundary(), calculator.maximumBoundary());
                if (!this.lastBoundary || !newBoundary.equals(this.lastBoundary)) {
                    var span = calculator.boundarySpan();
                    while(this.span < span){
                        this.span *= 1.25;
                    }
                    calculator.setBounds(calculator.minimumBoundary(), _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(calculator.minimumBoundary() + this.span));
                    this.lastBoundary = new _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__.NetworkTimeBoundary(calculator.minimumBoundary(), calculator.maximumBoundary());
                }
                var context = this.context();
                var linesByType = new Map();
                var paddingTop = PADDING;
                function drawLines(type) {
                    var lines = linesByType.get(type);
                    if (!lines) {
                        return;
                    }
                    var n = lines.length;
                    context.beginPath();
                    context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--color-background-opacity-80');
                    context.lineWidth = BORDER_WIDTH;
                    context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(RequestTimeRangeNameToColor[type]);
                    for(var i = 0; i < n;){
                        var y = lines[i++] * BAND_HEIGHT + paddingTop;
                        var startTime = lines[i++];
                        var endTime = lines[i++];
                        if (endTime === Number.MAX_VALUE) {
                            endTime = calculator.maximumBoundary();
                        }
                        var startX = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(startTime));
                        var endX = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(endTime)) + 1;
                        context.fillRect(startX, y, Math.max(endX - startX, MIN_BAND_WIDTH), BAND_HEIGHT);
                        context.strokeRect(startX, y, Math.max(endX - startX, MIN_BAND_WIDTH), BAND_HEIGHT);
                    }
                }
                function addLine(type, y, start, end) {
                    var lines = linesByType.get(type);
                    if (!lines) {
                        lines = [];
                        linesByType.set(type, lines);
                    }
                    lines.push(y, start, end);
                }
                var requests = this.requestsList;
                var n = requests.length;
                for(var i = 0; i < n; ++i){
                    var request = requests[i];
                    var band = this.bandId(request.connectionId);
                    var y = band === -1 ? 0 : band % this.numBands + 1;
                    var timeRanges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, this.calculator().minimumBoundary());
                    for(var j = 0; j < timeRanges.length; ++j){
                        var type = timeRanges[j].name;
                        if (band !== -1 || type === "total" /* RequestTimeRangeNames.Total */ ) {
                            addLine(type, y, timeRanges[j].start * 1000, timeRanges[j].end * 1000);
                        }
                    }
                }
                context.clearRect(0, 0, this.width(), this.height());
                context.save();
                context.scale(window.devicePixelRatio, window.devicePixelRatio);
                context.lineWidth = 2;
                drawLines("total" /* RequestTimeRangeNames.Total */ );
                drawLines("blocking" /* RequestTimeRangeNames.Blocking */ );
                drawLines("connecting" /* RequestTimeRangeNames.Connecting */ );
                drawLines("serviceworker" /* RequestTimeRangeNames.ServiceWorker */ );
                drawLines("serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */ );
                drawLines("serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */ );
                drawLines("push" /* RequestTimeRangeNames.Push */ );
                drawLines("proxy" /* RequestTimeRangeNames.Proxy */ );
                drawLines("dns" /* RequestTimeRangeNames.DNS */ );
                drawLines("ssl" /* RequestTimeRangeNames.SSL */ );
                drawLines("sending" /* RequestTimeRangeNames.Sending */ );
                drawLines("waiting" /* RequestTimeRangeNames.Waiting */ );
                drawLines("receiving" /* RequestTimeRangeNames.Receiving */ );
                if (this.highlightedRequest) {
                    var size = 5;
                    var borderSize = 2;
                    var request1 = this.highlightedRequest;
                    var band1 = this.bandId(request1.connectionId);
                    var y1 = (band1 === -1 ? 0 : band1 % this.numBands + 1) * BAND_HEIGHT + paddingTop;
                    var timeRanges1 = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request1, this.calculator().minimumBoundary());
                    context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--sys-color-tonal-container');
                    // The network overview works in seconds, but the calcululator deals in
                    // milliseconds, hence the multiplication by 1000.
                    var start = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges1[0].start * 1000);
                    var end = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges1[0].end * 1000);
                    context.fillRect(calculator.computePosition(start) - borderSize, y1 - size / 2 - borderSize, calculator.computePosition(end) - calculator.computePosition(start) + 1 + 2 * borderSize, size * borderSize);
                    for(var j1 = 0; j1 < timeRanges1.length; ++j1){
                        var type1 = timeRanges1[j1].name;
                        if (band1 !== -1 || type1 === "total" /* RequestTimeRangeNames.Total */ ) {
                            context.beginPath();
                            context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(RequestTimeRangeNameToColor[type1]);
                            context.lineWidth = size;
                            var start1 = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges1[j1].start * 1000);
                            var end1 = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(timeRanges1[j1].end * 1000);
                            context.moveTo(calculator.computePosition(start1) - 0, y1);
                            context.lineTo(calculator.computePosition(end1) + 1, y1);
                            context.stroke();
                        }
                    }
                }
                var height = this.element.offsetHeight;
                context.lineWidth = 1;
                context.beginPath();
                context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(_NetworkLogView_js__WEBPACK_IMPORTED_MODULE_5__.NetworkLogView.getDCLEventColor());
                for(var i1 = this.domContentLoadedEvents.length - 1; i1 >= 0; --i1){
                    var position = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(this.domContentLoadedEvents[i1]));
                    var x = Math.round(position) + 0.5;
                    context.moveTo(x, 0);
                    context.lineTo(x, height);
                }
                context.stroke();
                context.beginPath();
                context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue(_NetworkLogView_js__WEBPACK_IMPORTED_MODULE_5__.NetworkLogView.getLoadEventColor());
                for(var i2 = this.loadEvents.length - 1; i2 >= 0; --i2){
                    var position1 = calculator.computePosition(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(this.loadEvents[i2]));
                    var x1 = Math.round(position1) + 0.5;
                    context.moveTo(x1, 0);
                    context.lineTo(x1, height);
                }
                context.stroke();
                if (this.selectedFilmStripTime !== -1) {
                    context.lineWidth = 2;
                    context.beginPath();
                    context.strokeStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_4__.ThemeSupport.instance().getComputedValue('--network-frame-divider-color');
                    var timeInMilliseconds = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MilliSeconds(this.selectedFilmStripTime);
                    var x2 = Math.round(calculator.computePosition(timeInMilliseconds));
                    context.moveTo(x2, 0);
                    context.lineTo(x2, height);
                    context.stroke();
                }
                context.restore();
            }
        }
    ]);
    return NetworkOverview;
}(_ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_3__.TimelineOverviewPane.TimelineOverviewBase);
var _obj;
var RequestTimeRangeNameToColor = (_obj = {}, _define_property(_obj, "total" /* RequestTimeRangeNames.Total */ , '--network-overview-total'), _define_property(_obj, "blocking" /* RequestTimeRangeNames.Blocking */ , '--network-overview-blocking'), _define_property(_obj, "connecting" /* RequestTimeRangeNames.Connecting */ , '--network-overview-connecting'), _define_property(_obj, "serviceworker" /* RequestTimeRangeNames.ServiceWorker */ , '--network-overview-service-worker'), _define_property(_obj, "serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */ , '--network-overview-service-worker'), _define_property(_obj, "serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */ , '--network-overview-service-worker-respond-with'), _define_property(_obj, "push" /* RequestTimeRangeNames.Push */ , '--network-overview-push'), _define_property(_obj, "proxy" /* RequestTimeRangeNames.Proxy */ , '--override-network-overview-proxy'), _define_property(_obj, "dns" /* RequestTimeRangeNames.DNS */ , '--network-overview-dns'), _define_property(_obj, "ssl" /* RequestTimeRangeNames.SSL */ , '--network-overview-ssl'), _define_property(_obj, "sending" /* RequestTimeRangeNames.Sending */ , '--override-network-overview-sending'), _define_property(_obj, "waiting" /* RequestTimeRangeNames.Waiting */ , '--network-overview-waiting'), _define_property(_obj, "receiving" /* RequestTimeRangeNames.Receiving */ , '--network-overview-receiving'), _define_property(_obj, "queueing" /* RequestTimeRangeNames.Queueing */ , '--network-overview-queueing'), _obj);
var BAND_HEIGHT = 3;
var PADDING = 5;
// Minimum rectangle width for very short requests.
var MIN_BAND_WIDTH = 10;
// Border between bars in network overview panel for accessibility.
var BORDER_WIDTH = 1; //# sourceMappingURL=NetworkOverview.js.map


}),
"./panels/network/NetworkWaterfallColumn.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkWaterfallColumn: function() { return NetworkWaterfallColumn; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _networkWaterfallColumn_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./networkWaterfallColumn.css.js */ "./panels/network/networkWaterfallColumn.css.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/theme_support/theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
/* harmony import */var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */var _networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkTimingTable.css.js */ "./panels/network/networkTimingTable.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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









var BAR_SPACING = 1;
var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
var NetworkWaterfallColumn = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(NetworkWaterfallColumn, _UI_Widget_VBox);
    var _super = _create_super(NetworkWaterfallColumn);
    function NetworkWaterfallColumn(calculator) {
        _class_call_check(this, NetworkWaterfallColumn);
        var _this;
        // TODO(allada) Make this a shadowDOM when the NetworkWaterfallColumn gets moved into NetworkLogViewColumns.
        _this = _super.call(this, false);
        _define_property(_assert_this_initialized(_this), "canvas", void 0);
        _define_property(_assert_this_initialized(_this), "canvasPosition", void 0);
        _define_property(_assert_this_initialized(_this), "leftPadding", void 0);
        _define_property(_assert_this_initialized(_this), "fontSize", void 0);
        _define_property(_assert_this_initialized(_this), "rightPadding", void 0);
        _define_property(_assert_this_initialized(_this), "scrollTop", void 0);
        _define_property(_assert_this_initialized(_this), "headerHeight", void 0);
        _define_property(_assert_this_initialized(_this), "calculator", void 0);
        _define_property(_assert_this_initialized(_this), "rawRowHeight", void 0);
        _define_property(_assert_this_initialized(_this), "rowHeight", void 0);
        _define_property(_assert_this_initialized(_this), "offsetWidth", void 0);
        _define_property(_assert_this_initialized(_this), "offsetHeight", void 0);
        _define_property(_assert_this_initialized(_this), "startTime", void 0);
        _define_property(_assert_this_initialized(_this), "endTime", void 0);
        _define_property(_assert_this_initialized(_this), "popoverHelper", void 0);
        _define_property(_assert_this_initialized(_this), "nodes", void 0);
        _define_property(_assert_this_initialized(_this), "hoveredNode", void 0);
        _define_property(_assert_this_initialized(_this), "eventDividers", void 0);
        _define_property(_assert_this_initialized(_this), "styleForTimeRangeName", void 0);
        _define_property(_assert_this_initialized(_this), "styleForWaitingResourceType", void 0);
        _define_property(_assert_this_initialized(_this), "styleForDownloadingResourceType", void 0);
        _define_property(_assert_this_initialized(_this), "wiskerStyle", void 0);
        _define_property(_assert_this_initialized(_this), "hoverDetailsStyle", void 0);
        _define_property(_assert_this_initialized(_this), "pathForStyle", void 0);
        _define_property(_assert_this_initialized(_this), "textLayers", void 0);
        _this.canvas = _this.contentElement.createChild('canvas');
        _this.canvas.tabIndex = -1;
        _this.setDefaultFocusedElement(_this.canvas);
        _this.canvasPosition = _this.canvas.getBoundingClientRect();
        _this.leftPadding = 5;
        _this.fontSize = 10;
        _this.rightPadding = 0;
        _this.scrollTop = 0;
        _this.headerHeight = 0;
        _this.calculator = calculator;
        // this.rawRowHeight captures model height (41 or 21px),
        // this.rowHeight is computed height of the row in CSS pixels, can be 20.8 for zoomed-in content.
        _this.rawRowHeight = 0;
        _this.rowHeight = 0;
        _this.offsetWidth = 0;
        _this.offsetHeight = 0;
        _this.startTime = _this.calculator.minimumBoundary();
        _this.endTime = _this.calculator.maximumBoundary();
        _this.popoverHelper = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.PopoverHelper.PopoverHelper(_this.element, _this.getPopoverRequest.bind(_assert_this_initialized(_this)), 'network.timing');
        _this.popoverHelper.setHasPadding(true);
        _this.popoverHelper.setTimeout(300, 300);
        _this.nodes = [];
        _this.hoveredNode = null;
        _this.eventDividers = new Map();
        _this.element.addEventListener('mousemove', _this.onMouseMove.bind(_assert_this_initialized(_this)), true);
        _this.element.addEventListener('mouseleave', function(_event) {
            return _this.setHoveredNode(null, false);
        }, true);
        _this.element.addEventListener('click', _this.onClick.bind(_assert_this_initialized(_this)), true);
        _this.styleForTimeRangeName = NetworkWaterfallColumn.buildRequestTimeRangeStyle();
        var resourceStyleTuple = NetworkWaterfallColumn.buildResourceTypeStyle();
        _this.styleForWaitingResourceType = resourceStyleTuple[0];
        _this.styleForDownloadingResourceType = resourceStyleTuple[1];
        var baseLineColor = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue('--sys-color-state-disabled');
        _this.wiskerStyle = {
            borderColor: baseLineColor,
            lineWidth: 1,
            fillStyle: undefined
        };
        _this.hoverDetailsStyle = {
            fillStyle: baseLineColor,
            lineWidth: 1,
            borderColor: baseLineColor
        };
        _this.pathForStyle = new Map();
        _this.textLayers = [];
        return _this;
    }
    _create_class(NetworkWaterfallColumn, [
        {
            key: "resetPaths",
            value: function resetPaths() {
                var _this = this;
                this.pathForStyle.clear();
                this.pathForStyle.set(this.wiskerStyle, new Path2D());
                this.styleForTimeRangeName.forEach(function(style) {
                    return _this.pathForStyle.set(style, new Path2D());
                });
                this.styleForWaitingResourceType.forEach(function(style) {
                    return _this.pathForStyle.set(style, new Path2D());
                });
                this.styleForDownloadingResourceType.forEach(function(style) {
                    return _this.pathForStyle.set(style, new Path2D());
                });
                this.pathForStyle.set(this.hoverDetailsStyle, new Path2D());
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.popoverHelper.hidePopover();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                this.update();
                this.registerCSSFiles([
                    _networkWaterfallColumn_css_js__WEBPACK_IMPORTED_MODULE_1__["default"]
                ]);
            }
        },
        {
            key: "onMouseMove",
            value: function onMouseMove(event) {
                this.setHoveredNode(this.getNodeFromPoint(event.offsetX, event.offsetY), event.shiftKey);
            }
        },
        {
            key: "onClick",
            value: function onClick(event) {
                var handled = this.setSelectedNode(this.getNodeFromPoint(event.offsetX, event.offsetY));
                if (handled) {
                    event.consume(true);
                }
            }
        },
        {
            key: "getPopoverRequest",
            value: function getPopoverRequest(event) {
                var _this = this;
                if (!this.hoveredNode) {
                    return null;
                }
                var request = this.hoveredNode.request();
                if (!request) {
                    return null;
                }
                var useTimingBars = !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-color-code-resource-types').get() && !this.calculator.startAtZero;
                var range;
                var start;
                var end;
                if (useTimingBars) {
                    range = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, 0).find(function(data) {
                        return data.name === "total" /* RequestTimeRangeNames.Total */ ;
                    });
                    start = this.timeToPosition(range.start);
                    end = this.timeToPosition(range.end);
                } else {
                    range = this.getSimplifiedBarRange(request, 0);
                    start = range.start;
                    end = range.end;
                }
                if (end - start < 50) {
                    var halfWidth = (end - start) / 2;
                    start = start + halfWidth - 25;
                    end = end - halfWidth + 25;
                }
                if (event.clientX < this.canvasPosition.left + start || event.clientX > this.canvasPosition.left + end) {
                    return null;
                }
                var rowIndex = this.nodes.findIndex(function(node) {
                    return node.hovered();
                });
                var barHeight = this.getBarHeight(range.name);
                var y = this.headerHeight + (this.rowHeight * rowIndex - this.scrollTop) + (this.rowHeight - barHeight) / 2;
                if (event.clientY < this.canvasPosition.top + y || event.clientY > this.canvasPosition.top + y + barHeight) {
                    return null;
                }
                var anchorBox = this.element.boxInWindow();
                anchorBox.x += start;
                anchorBox.y += y;
                anchorBox.width = end - start;
                anchorBox.height = barHeight;
                return {
                    box: anchorBox,
                    show: function(popover) {
                        var content = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.createTimingTable(request, _this.calculator);
                        popover.registerCSSFiles([
                            _networkTimingTable_css_js__WEBPACK_IMPORTED_MODULE_8__["default"]
                        ]);
                        popover.contentElement.appendChild(content);
                        return Promise.resolve(true);
                    },
                    hide: undefined
                };
            }
        },
        {
            key: "setHoveredNode",
            value: function setHoveredNode(node, highlightInitiatorChain) {
                if (this.hoveredNode) {
                    this.hoveredNode.setHovered(false, false);
                }
                this.hoveredNode = node;
                if (this.hoveredNode) {
                    this.hoveredNode.setHovered(true, highlightInitiatorChain);
                }
            }
        },
        {
            key: "setSelectedNode",
            value: function setSelectedNode(node) {
                if (node && node.dataGrid) {
                    node.select();
                    node.dataGrid.element.focus();
                    return true;
                }
                return false;
            }
        },
        {
            key: "setRowHeight",
            value: function setRowHeight(height) {
                this.rawRowHeight = height;
                this.updateRowHeight();
            }
        },
        {
            key: "updateRowHeight",
            value: function updateRowHeight() {
                this.rowHeight = Math.round(this.rawRowHeight * window.devicePixelRatio) / window.devicePixelRatio;
            }
        },
        {
            key: "setHeaderHeight",
            value: function setHeaderHeight(height) {
                this.headerHeight = height;
            }
        },
        {
            key: "setRightPadding",
            value: function setRightPadding(padding) {
                this.rightPadding = padding;
                this.calculateCanvasSize();
            }
        },
        {
            key: "setCalculator",
            value: function setCalculator(calculator) {
                this.calculator = calculator;
            }
        },
        {
            key: "getNodeFromPoint",
            value: function getNodeFromPoint(x, y) {
                if (y <= this.headerHeight) {
                    return null;
                }
                return this.nodes[Math.floor((this.scrollTop + y - this.headerHeight) / this.rowHeight)];
            }
        },
        {
            key: "scheduleDraw",
            value: function scheduleDraw() {
                var _this = this;
                void coordinator.write('NetworkWaterfallColumn.render', function() {
                    return _this.update();
                });
            }
        },
        {
            key: "update",
            value: function update(scrollTop, eventDividers, nodes) {
                if (scrollTop !== undefined && this.scrollTop !== scrollTop) {
                    this.popoverHelper.hidePopover();
                    this.scrollTop = scrollTop;
                }
                if (nodes) {
                    this.nodes = nodes;
                    this.calculateCanvasSize();
                }
                if (eventDividers !== undefined) {
                    this.eventDividers = eventDividers;
                }
                this.startTime = this.calculator.minimumBoundary();
                this.endTime = this.calculator.maximumBoundary();
                this.resetCanvas();
                this.resetPaths();
                this.textLayers = [];
                this.draw();
            }
        },
        {
            key: "resetCanvas",
            value: function resetCanvas() {
                var ratio = window.devicePixelRatio;
                this.canvas.width = this.offsetWidth * ratio;
                this.canvas.height = this.offsetHeight * ratio;
                this.canvas.style.width = this.offsetWidth + 'px';
                this.canvas.style.height = this.offsetHeight + 'px';
            }
        },
        {
            key: "onResize",
            value: function onResize() {
                _get(_get_prototype_of(NetworkWaterfallColumn.prototype), "onResize", this).call(this);
                this.updateRowHeight();
                this.calculateCanvasSize();
                this.scheduleDraw();
            }
        },
        {
            key: "calculateCanvasSize",
            value: function calculateCanvasSize() {
                this.offsetWidth = this.contentElement.offsetWidth - this.rightPadding;
                this.offsetHeight = this.contentElement.offsetHeight;
                this.calculator.setDisplayWidth(this.offsetWidth);
                this.canvasPosition = this.canvas.getBoundingClientRect();
            }
        },
        {
            key: "timeToPosition",
            value: function timeToPosition(time) {
                var availableWidth = this.offsetWidth - this.leftPadding;
                var timeToPixel = availableWidth / (this.endTime - this.startTime);
                return Math.floor(this.leftPadding + (time - this.startTime) * timeToPixel);
            }
        },
        {
            key: "didDrawForTest",
            value: function didDrawForTest() {}
        },
        {
            key: "draw",
            value: function draw() {
                var _this = this;
                var useTimingBars = !_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('network-color-code-resource-types').get() && !this.calculator.startAtZero;
                var nodes = this.nodes;
                var context = this.canvas.getContext('2d');
                if (!context) {
                    return;
                }
                context.save();
                context.scale(window.devicePixelRatio, window.devicePixelRatio);
                context.translate(0, this.headerHeight);
                context.rect(0, 0, this.offsetWidth, this.offsetHeight);
                context.clip();
                var firstRequestIndex = Math.floor(this.scrollTop / this.rowHeight);
                var lastRequestIndex = Math.min(nodes.length, firstRequestIndex + Math.ceil(this.offsetHeight / this.rowHeight));
                for(var i = firstRequestIndex; i < lastRequestIndex; i++){
                    var rowOffset = this.rowHeight * i;
                    var node = nodes[i];
                    this.decorateRow(context, node, rowOffset - this.scrollTop);
                    var drawNodes = [];
                    if (node.hasChildren() && !node.expanded) {
                        drawNodes = node.flatChildren();
                    }
                    drawNodes.push(node);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = drawNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var drawNode = _step.value;
                            if (useTimingBars) {
                                this.buildTimingBarLayers(drawNode, rowOffset - this.scrollTop);
                            } else {
                                this.buildSimplifiedBarLayers(context, drawNode, rowOffset - this.scrollTop);
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
                }
                this.drawLayers(context, useTimingBars);
                context.save();
                context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue('--sys-color-state-disabled');
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.textLayers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var textData = _step1.value;
                        context.fillText(textData.text, textData.x, textData.y);
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
                context.restore();
                this.drawEventDividers(context);
                context.restore();
                var freeZoneAtLeft = 75;
                var freeZoneAtRight = 18;
                var dividersData = _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.calculateGridOffsets(this.calculator);
                _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.drawCanvasGrid(context, dividersData);
                _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_2__.TimelineGrid.TimelineGrid.drawCanvasHeaders(context, dividersData, function(time) {
                    return _this.calculator.formatValue(time, dividersData.precision);
                }, this.fontSize, this.headerHeight, freeZoneAtLeft);
                context.save();
                context.scale(window.devicePixelRatio, window.devicePixelRatio);
                context.clearRect(this.offsetWidth - freeZoneAtRight, 0, freeZoneAtRight, this.headerHeight);
                context.restore();
                this.didDrawForTest();
            }
        },
        {
            key: "drawLayers",
            value: function drawLayers(context, useTimingBars) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.pathForStyle[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        var style = entry[0];
                        var path = entry[1];
                        context.save();
                        context.beginPath();
                        if (style.lineWidth) {
                            context.lineWidth = style.lineWidth;
                            if (style.borderColor) {
                                context.strokeStyle = style.borderColor;
                            }
                            context.stroke(path);
                        }
                        if (style.fillStyle) {
                            context.fillStyle = useTimingBars ? _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue(style.fillStyle) : style.fillStyle;
                            context.fill(path);
                        }
                        context.restore();
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
            key: "drawEventDividers",
            value: function drawEventDividers(context) {
                context.save();
                context.lineWidth = 1;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.eventDividers.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var color = _step.value;
                        context.strokeStyle = color;
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = (this.eventDividers.get(color) || [])[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var time = _step1.value;
                                context.beginPath();
                                var x = this.timeToPosition(time);
                                context.moveTo(x, 0);
                                context.lineTo(x, this.offsetHeight);
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
                        context.stroke();
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
                context.restore();
            }
        },
        {
            key: "getBarHeight",
            value: function getBarHeight(type) {
                switch(type){
                    case "connecting" /* RequestTimeRangeNames.Connecting */ :
                    case "ssl" /* RequestTimeRangeNames.SSL */ :
                    case "dns" /* RequestTimeRangeNames.DNS */ :
                    case "proxy" /* RequestTimeRangeNames.Proxy */ :
                    case "blocking" /* RequestTimeRangeNames.Blocking */ :
                    case "push" /* RequestTimeRangeNames.Push */ :
                    case "queueing" /* RequestTimeRangeNames.Queueing */ :
                        return 7;
                    default:
                        return 13;
                }
            }
        },
        {
            key: "getSimplifiedBarRange",
            value: function getSimplifiedBarRange(request, borderOffset) {
                var drawWidth = this.offsetWidth - this.leftPadding;
                var percentages = this.calculator.computeBarGraphPercentages(request);
                return {
                    start: this.leftPadding + Math.floor(percentages.start / 100 * drawWidth) + borderOffset,
                    mid: this.leftPadding + Math.floor(percentages.middle / 100 * drawWidth) + borderOffset,
                    end: this.leftPadding + Math.floor(percentages.end / 100 * drawWidth) + borderOffset
                };
            }
        },
        {
            key: "buildSimplifiedBarLayers",
            value: function buildSimplifiedBarLayers(context, node, y) {
                var request = node.request();
                if (!request) {
                    return;
                }
                var borderWidth = 1;
                var borderOffset = borderWidth % 2 === 0 ? 0 : 0.5;
                var ranges = this.getSimplifiedBarRange(request, borderOffset);
                var height = this.getBarHeight();
                y += Math.floor(this.rowHeight / 2 - height / 2 + borderWidth) - borderWidth / 2;
                var waitingStyle = this.styleForWaitingResourceType.get(request.resourceType());
                var waitingPath = this.pathForStyle.get(waitingStyle);
                waitingPath.rect(ranges.start, y, ranges.mid - ranges.start, height - borderWidth);
                var barWidth = Math.max(2, ranges.end - ranges.mid);
                var downloadingStyle = this.styleForDownloadingResourceType.get(request.resourceType());
                var downloadingPath = this.pathForStyle.get(downloadingStyle);
                downloadingPath.rect(ranges.mid, y, barWidth, height - borderWidth);
                var labels = null;
                if (node.hovered()) {
                    labels = this.calculator.computeBarGraphLabels(request);
                    var barDotLineLength = 10;
                    var leftLabelWidth = context.measureText(labels.left).width;
                    var rightLabelWidth = context.measureText(labels.right).width;
                    var hoverLinePath = this.pathForStyle.get(this.hoverDetailsStyle);
                    if (leftLabelWidth < ranges.mid - ranges.start) {
                        var midBarX = ranges.start + (ranges.mid - ranges.start - leftLabelWidth) / 2;
                        this.textLayers.push({
                            text: labels.left,
                            x: midBarX,
                            y: y + this.fontSize
                        });
                    } else if (barDotLineLength + leftLabelWidth + this.leftPadding < ranges.start) {
                        this.textLayers.push({
                            text: labels.left,
                            x: ranges.start - leftLabelWidth - barDotLineLength - 1,
                            y: y + this.fontSize
                        });
                        hoverLinePath.moveTo(ranges.start - barDotLineLength, y + Math.floor(height / 2));
                        hoverLinePath.arc(ranges.start, y + Math.floor(height / 2), 2, 0, 2 * Math.PI);
                        hoverLinePath.moveTo(ranges.start - barDotLineLength, y + Math.floor(height / 2));
                        hoverLinePath.lineTo(ranges.start, y + Math.floor(height / 2));
                    }
                    var endX = ranges.mid + barWidth + borderOffset;
                    if (rightLabelWidth < endX - ranges.mid) {
                        var midBarX1 = ranges.mid + (endX - ranges.mid - rightLabelWidth) / 2;
                        this.textLayers.push({
                            text: labels.right,
                            x: midBarX1,
                            y: y + this.fontSize
                        });
                    } else if (endX + barDotLineLength + rightLabelWidth < this.offsetWidth - this.leftPadding) {
                        this.textLayers.push({
                            text: labels.right,
                            x: endX + barDotLineLength + 1,
                            y: y + this.fontSize
                        });
                        hoverLinePath.moveTo(endX, y + Math.floor(height / 2));
                        hoverLinePath.arc(endX, y + Math.floor(height / 2), 2, 0, 2 * Math.PI);
                        hoverLinePath.moveTo(endX, y + Math.floor(height / 2));
                        hoverLinePath.lineTo(endX + barDotLineLength, y + Math.floor(height / 2));
                    }
                }
                if (!this.calculator.startAtZero) {
                    var queueingRange = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, 0).find(function(data) {
                        return data.name === "total" /* RequestTimeRangeNames.Total */ ;
                    });
                    var leftLabelWidth1 = labels ? context.measureText(labels.left).width : 0;
                    var leftTextPlacedInBar = leftLabelWidth1 < ranges.mid - ranges.start;
                    var wiskerTextPadding = 13;
                    var textOffset = labels && !leftTextPlacedInBar ? leftLabelWidth1 + wiskerTextPadding : 0;
                    var queueingStart = this.timeToPosition(queueingRange.start);
                    if (ranges.start - textOffset > queueingStart) {
                        var wiskerPath = this.pathForStyle.get(this.wiskerStyle);
                        wiskerPath.moveTo(queueingStart, y + Math.floor(height / 2));
                        wiskerPath.lineTo(ranges.start - textOffset, y + Math.floor(height / 2));
                        // TODO(allada) This needs to be floored.
                        var wiskerHeight = height / 2;
                        wiskerPath.moveTo(queueingStart + borderOffset, y + wiskerHeight / 2);
                        wiskerPath.lineTo(queueingStart + borderOffset, y + height - wiskerHeight / 2 - 1);
                    }
                }
            }
        },
        {
            key: "buildTimingBarLayers",
            value: function buildTimingBarLayers(node, y) {
                var request = node.request();
                if (!request) {
                    return;
                }
                var ranges = _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_7__.RequestTimingView.calculateRequestTimeRanges(request, 0);
                var index = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = ranges[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var range = _step.value;
                        if (range.name === "total" /* RequestTimeRangeNames.Total */  || range.name === "sending" /* RequestTimeRangeNames.Sending */  || range.end - range.start === 0) {
                            continue;
                        }
                        var style = this.styleForTimeRangeName.get(range.name);
                        var path = this.pathForStyle.get(style);
                        var lineWidth = style.lineWidth || 0;
                        var height = this.getBarHeight(range.name);
                        var middleBarY = y + Math.floor(this.rowHeight / 2 - height / 2) + lineWidth / 2;
                        var start = this.timeToPosition(range.start);
                        var end = this.timeToPosition(range.end);
                        path.rect(start + index * BAR_SPACING, middleBarY, end - start, height - lineWidth);
                        index++;
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
            key: "decorateRow",
            value: function decorateRow(context, node, y) {
                var nodeBgColorId = node.backgroundColor();
                context.save();
                context.beginPath();
                context.fillStyle = _ui_legacy_theme_support_theme_support_js__WEBPACK_IMPORTED_MODULE_5__.ThemeSupport.instance().getComputedValue(nodeBgColorId);
                context.rect(0, y, this.offsetWidth, this.rowHeight);
                context.fill();
                context.restore();
            }
        }
    ], [
        {
            key: "buildRequestTimeRangeStyle",
            value: function buildRequestTimeRangeStyle() {
                var styleMap = new Map();
                styleMap.set("connecting" /* RequestTimeRangeNames.Connecting */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.connecting
                });
                styleMap.set("ssl" /* RequestTimeRangeNames.SSL */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.ssl
                });
                styleMap.set("dns" /* RequestTimeRangeNames.DNS */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.dns
                });
                styleMap.set("proxy" /* RequestTimeRangeNames.Proxy */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.proxy
                });
                styleMap.set("blocking" /* RequestTimeRangeNames.Blocking */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.blocking
                });
                styleMap.set("push" /* RequestTimeRangeNames.Push */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.push
                });
                styleMap.set("queueing" /* RequestTimeRangeNames.Queueing */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.queueing,
                    lineWidth: 2,
                    borderColor: 'lightgrey'
                });
                // This ensures we always show at least 2 px for a request.
                styleMap.set("receiving" /* RequestTimeRangeNames.Receiving */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.receiving,
                    lineWidth: 2,
                    borderColor: '#03A9F4'
                });
                styleMap.set("waiting" /* RequestTimeRangeNames.Waiting */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.waiting
                });
                styleMap.set("receiving-push" /* RequestTimeRangeNames.ReceivingPush */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["receiving-push"]
                });
                styleMap.set("serviceworker" /* RequestTimeRangeNames.ServiceWorker */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor.serviceworker
                });
                styleMap.set("serviceworker-preparation" /* RequestTimeRangeNames.ServiceWorkerPreparation */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["serviceworker-preparation"]
                });
                styleMap.set("serviceworker-respondwith" /* RequestTimeRangeNames.ServiceWorkerRespondWith */ , {
                    fillStyle: _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_6__.RequestTimeRangeNameToColor["serviceworker-respondwith"]
                });
                return styleMap;
            }
        },
        {
            key: "buildResourceTypeStyle",
            value: function buildResourceTypeStyle() {
                var baseResourceTypeColors = new Map([
                    [
                        'document',
                        'hsl(215, 100%, 80%)'
                    ],
                    [
                        'font',
                        'hsl(8, 100%, 80%)'
                    ],
                    [
                        'media',
                        'hsl(90, 50%, 80%)'
                    ],
                    [
                        'image',
                        'hsl(90, 50%, 80%)'
                    ],
                    [
                        'script',
                        'hsl(31, 100%, 80%)'
                    ],
                    [
                        'stylesheet',
                        'hsl(272, 64%, 80%)'
                    ],
                    [
                        'texttrack',
                        'hsl(8, 100%, 80%)'
                    ],
                    [
                        'websocket',
                        'hsl(0, 0%, 95%)'
                    ],
                    [
                        'xhr',
                        'hsl(53, 100%, 80%)'
                    ],
                    [
                        'fetch',
                        'hsl(53, 100%, 80%)'
                    ],
                    [
                        'other',
                        'hsl(0, 0%, 95%)'
                    ]
                ]);
                var waitingStyleMap = new Map();
                var downloadingStyleMap = new Map();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.values(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var resourceType = _step.value;
                        var color = baseResourceTypeColors.get(resourceType.name());
                        if (!color) {
                            color = baseResourceTypeColors.get('other');
                        }
                        var borderColor = toBorderColor(color);
                        waitingStyleMap.set(// TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                        // @ts-expect-error
                        resourceType, {
                            fillStyle: toWaitingColor(color),
                            lineWidth: 1,
                            borderColor: borderColor
                        });
                        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                        // @ts-expect-error
                        downloadingStyleMap.set(resourceType, {
                            fillStyle: color,
                            lineWidth: 1,
                            borderColor: borderColor
                        });
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
                return [
                    waitingStyleMap,
                    downloadingStyleMap
                ];
                function toBorderColor(color) {
                    var _Common_Color_parse;
                    var parsedColor = (_Common_Color_parse = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color)) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.as("hsl" /* Common.Color.Format.HSL */ );
                    if (!parsedColor) {
                        return '';
                    }
                    var s = parsedColor.s, l = parsedColor.l;
                    s /= 2;
                    l -= Math.min(l, 0.2);
                    return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.HSL(parsedColor.h, s, l, parsedColor.alpha).asString();
                }
                function toWaitingColor(color) {
                    var _Common_Color_parse;
                    var parsedColor = (_Common_Color_parse = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.parse(color)) === null || _Common_Color_parse === void 0 ? void 0 : _Common_Color_parse.as("hsl" /* Common.Color.Format.HSL */ );
                    if (!parsedColor) {
                        return '';
                    }
                    var l = parsedColor.l;
                    l *= 1.1;
                    return new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Color.HSL(parsedColor.h, parsedColor.s, l, parsedColor.alpha).asString();
                }
            }
        }
    ]);
    return NetworkWaterfallColumn;
} //# sourceMappingURL=NetworkWaterfallColumn.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox);


}),
"./panels/network/networkWaterfallColumn.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.network-waterfall-v-scroll {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  overflow-x: hidden;\n  margin-top: 31px;\n  z-index: 200;\n}\n\n.theme-with-dark-background .network-waterfall-v-scroll {\n  /**\n  * Waterfall scrollbars are implemented as overflowing elements on top of the\n  * scrollable content. The actual content is a viewport without scrollbars.\n  * When using a dark theme, we should inform Blink that the content is dark,\n  * so that the native scrollbars are colored accordingly.\n  */\n  background: rgb(0 0 0 / 1%);\n}\n\n.network-waterfall-v-scroll.small {\n  margin-top: 27px;\n}\n\n.network-waterfall-v-scroll-content {\n  width: 15px;\n  pointer-events: none;\n}\n\n/*# sourceURL=networkWaterfallColumn.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);