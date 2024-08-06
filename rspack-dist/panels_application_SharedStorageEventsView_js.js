"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_SharedStorageEventsView_js"], {
"./panels/application/SharedStorageEventsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedStorageEventsView: function() { return SharedStorageEventsView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _sharedStorageEventsView_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sharedStorageEventsView.css.js */ "./panels/application/sharedStorageEventsView.css.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
     *@description Placeholder text instructing the user how to display shared
     *storage event details.
     */ clickToDisplayBody: 'Click on any shared storage event to display the event parameters.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/SharedStorageEventsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function eventEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
}
var _sharedStorageEventGrid = /*#__PURE__*/ new WeakMap(), _events = /*#__PURE__*/ new WeakMap(), _noDisplayView = /*#__PURE__*/ new WeakMap(), _defaultId = /*#__PURE__*/ new WeakMap(), _getMainFrameResourceTreeModel = /*#__PURE__*/ new WeakSet(), _getMainFrame = /*#__PURE__*/ new WeakSet(), _onFocus = /*#__PURE__*/ new WeakSet();
var SharedStorageEventsView = /*#__PURE__*/ function(_UI_SplitWidget_SplitWidget) {
    "use strict";
    _inherits(SharedStorageEventsView, _UI_SplitWidget_SplitWidget);
    var _super = _create_super(SharedStorageEventsView);
    function SharedStorageEventsView() {
        _class_call_check(this, SharedStorageEventsView);
        var _this;
        var _class_private_method_get_call;
        _this = _super.call(this, /* isVertical */ false, /* secondIsSidebar: */ true);
        _class_private_method_init(_assert_this_initialized(_this), _getMainFrameResourceTreeModel);
        _class_private_method_init(_assert_this_initialized(_this), _getMainFrame);
        _class_private_method_init(_assert_this_initialized(_this), _onFocus);
        _class_private_field_init(_assert_this_initialized(_this), _sharedStorageEventGrid, {
            writable: true,
            value: new _components_components_js__WEBPACK_IMPORTED_MODULE_5__.SharedStorageAccessGrid.SharedStorageAccessGrid()
        });
        _class_private_field_init(_assert_this_initialized(_this), _events, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _noDisplayView, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _defaultId, {
            writable: true,
            value: ''
        });
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('shared-storage-events')));
        var topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox();
        _class_private_field_set(_assert_this_initialized(_this), _noDisplayView, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox());
        topPanel.setMinimumSize(0, 80);
        _this.setMainWidget(topPanel);
        _class_private_field_get(_this, _noDisplayView).setMinimumSize(0, 40);
        _this.setSidebarWidget(_class_private_field_get(_assert_this_initialized(_this), _noDisplayView));
        topPanel.contentElement.appendChild(_class_private_field_get(_assert_this_initialized(_this), _sharedStorageEventGrid));
        _class_private_field_get(_this, _sharedStorageEventGrid).addEventListener('cellfocused', _class_private_method_get(_this, _onFocus, onFocus).bind(_assert_this_initialized(_this)));
        _class_private_field_get(_this, _sharedStorageEventGrid).setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('events-table')));
        (_class_private_method_get_call = _class_private_method_get(_this, _getMainFrameResourceTreeModel, getMainFrameResourceTreeModel).call(_assert_this_initialized(_this))) === null || _class_private_method_get_call === void 0 ? void 0 : _class_private_method_get_call.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.Events.PrimaryPageChanged, _this.clearEvents, _assert_this_initialized(_this));
        _class_private_field_get(_this, _noDisplayView).contentElement.classList.add('placeholder');
        var noDisplayDiv = _class_private_field_get(_this, _noDisplayView).contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
        return _this;
    }
    _create_class(SharedStorageEventsView, [
        {
            key: "id",
            get: function get() {
                var _class_private_method_get_call;
                return ((_class_private_method_get_call = _class_private_method_get(this, _getMainFrame, getMainFrame).call(this)) === null || _class_private_method_get_call === void 0 ? void 0 : _class_private_method_get_call.id) || _class_private_field_get(this, _defaultId);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(SharedStorageEventsView.prototype), "wasShown", this).call(this);
                var sidebar = this.sidebarWidget();
                if (sidebar) {
                    sidebar.registerCSSFiles([
                        _sharedStorageEventsView_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                    ]);
                }
            }
        },
        {
            key: "addEvent",
            value: function addEvent(event) {
                // Only add event if main frame id matches.
                if (event.mainFrameId !== this.id) {
                    return;
                }
                // Only add if not already present.
                if (_class_private_field_get(this, _events).some(function(t) {
                    return eventEquals(t, event);
                })) {
                    return;
                }
                _class_private_field_get(this, _events).push(event);
                _class_private_field_get(this, _sharedStorageEventGrid).data = _class_private_field_get(this, _events);
            }
        },
        {
            key: "clearEvents",
            value: function clearEvents() {
                _class_private_field_set(this, _events, []);
                _class_private_field_get(this, _sharedStorageEventGrid).data = _class_private_field_get(this, _events);
                this.setSidebarWidget(_class_private_field_get(this, _noDisplayView));
            }
        },
        {
            key: "setDefaultIdForTesting",
            value: function setDefaultIdForTesting(id) {
                _class_private_field_set(this, _defaultId, id);
            }
        },
        {
            key: "getEventsForTesting",
            value: function getEventsForTesting() {
                return _class_private_field_get(this, _events);
            }
        },
        {
            key: "getSharedStorageAccessGridForTesting",
            value: function getSharedStorageAccessGridForTesting() {
                return _class_private_field_get(this, _sharedStorageEventGrid);
            }
        }
    ]);
    return SharedStorageEventsView;
} //# sourceMappingURL=SharedStorageEventsView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget);
function getMainFrameResourceTreeModel() {
    var primaryPageTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().primaryPageTarget();
    return (primaryPageTarget === null || primaryPageTarget === void 0 ? void 0 : primaryPageTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.ResourceTreeModel.ResourceTreeModel)) || null;
}
function getMainFrame() {
    var _class_private_method_get_call;
    return ((_class_private_method_get_call = _class_private_method_get(this, _getMainFrameResourceTreeModel, getMainFrameResourceTreeModel).call(this)) === null || _class_private_method_get_call === void 0 ? void 0 : _class_private_method_get_call.mainFrame) || null;
}
function onFocus(event) {
    return _onFocus1.apply(this, arguments);
}
function _onFocus1() {
    _onFocus1 = _async_to_generator(function(event) {
        var _row_cells_find, _row_cells_find1, _row_cells_find2, _row_cells_find3, focusedEvent, row, wrappedEvent, jsonView;
        return _ts_generator(this, function(_state) {
            focusedEvent = event;
            row = focusedEvent.data.row;
            if (!row) {
                return [
                    2
                ];
            }
            wrappedEvent = {
                accessTime: (_row_cells_find = row.cells.find(function(cell) {
                    return cell.columnId === 'event-time';
                })) === null || _row_cells_find === void 0 ? void 0 : _row_cells_find.value,
                accessType: (_row_cells_find1 = row.cells.find(function(cell) {
                    return cell.columnId === 'event-type';
                })) === null || _row_cells_find1 === void 0 ? void 0 : _row_cells_find1.value,
                ownerOrigin: (_row_cells_find2 = row.cells.find(function(cell) {
                    return cell.columnId === 'event-owner-origin';
                })) === null || _row_cells_find2 === void 0 ? void 0 : _row_cells_find2.value,
                eventParams: JSON.parse((_row_cells_find3 = row.cells.find(function(cell) {
                    return cell.columnId === 'event-params';
                })) === null || _row_cells_find3 === void 0 ? void 0 : _row_cells_find3.value)
            };
            jsonView = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_2__.JSONView.JSONView.createViewSync(wrappedEvent);
            jsonView.setMinimumSize(0, 40);
            this.setSidebarWidget(jsonView);
            return [
                2
            ];
        });
    });
    return _onFocus1.apply(this, arguments);
}


}),
"./panels/application/sharedStorageEventsView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2022 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\ndevtools-shared-storage-access-grid {\n  overflow: auto;\n}\n\n.placeholder {\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: var(--sys-color-token-subtle);\n  overflow: auto;\n  text-align: center;\n\n  & div {\n    width: 100%;\n  }\n}\n\n/*# sourceURL=sharedStorageEventsView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);