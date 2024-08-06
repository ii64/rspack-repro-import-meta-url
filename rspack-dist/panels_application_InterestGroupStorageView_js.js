"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_InterestGroupStorageView_js"], {
"./panels/application/InterestGroupStorageView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InterestGroupStorageView: function() { return InterestGroupStorageView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _interestGroupStorageView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interestGroupStorageView.css.js */ "./panels/application/interestGroupStorageView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
     *@description Placeholder text instructing the user how to display interest group
     *details.
     */ clickToDisplayBody: 'Click on any interest group event to display the group\'s current state',
    /**
     *@description Placeholder text telling the user no details are available for
     *the selected interest group.
     */ noDataAvailable: 'No details available for the selected interest group. The browser may have left the group.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/InterestGroupStorageView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
function eventEquals(a, b) {
    return a.accessTime === b.accessTime && a.type === b.type && a.ownerOrigin === b.ownerOrigin && a.name === b.name;
}
var InterestGroupStorageView = /*#__PURE__*/ function(_UI_SplitWidget_SplitWidget) {
    "use strict";
    _inherits(InterestGroupStorageView, _UI_SplitWidget_SplitWidget);
    var _super = _create_super(InterestGroupStorageView);
    function InterestGroupStorageView(detailsGetter) {
        _class_call_check(this, InterestGroupStorageView);
        var _this;
        _this = _super.call(this, /* isVertical */ false, /* secondIsSidebar: */ true);
        _define_property(_assert_this_initialized(_this), "interestGroupGrid", new _components_components_js__WEBPACK_IMPORTED_MODULE_4__.InterestGroupAccessGrid.InterestGroupAccessGrid());
        _define_property(_assert_this_initialized(_this), "events", []);
        _define_property(_assert_this_initialized(_this), "detailsGetter", void 0);
        _define_property(_assert_this_initialized(_this), "noDataView", void 0);
        _define_property(_assert_this_initialized(_this), "noDisplayView", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('interest-groups')));
        _this.detailsGetter = detailsGetter;
        var topPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        _this.noDisplayView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        _this.noDataView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox();
        topPanel.setMinimumSize(0, 80);
        _this.setMainWidget(topPanel);
        _this.noDisplayView.setMinimumSize(0, 40);
        _this.setSidebarWidget(_this.noDisplayView);
        _this.noDataView.setMinimumSize(0, 40);
        topPanel.contentElement.appendChild(_this.interestGroupGrid);
        _this.interestGroupGrid.addEventListener('cellfocused', _this.onFocus.bind(_assert_this_initialized(_this)));
        _this.noDisplayView.contentElement.classList.add('placeholder');
        _this.noDisplayView.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('details').track({
            resize: true
        })));
        var noDisplayDiv = _this.noDisplayView.contentElement.createChild('div');
        noDisplayDiv.textContent = i18nString(UIStrings.clickToDisplayBody);
        _this.noDataView.contentElement.classList.add('placeholder');
        _this.noDataView.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('details').track({
            resize: true
        })));
        var noDataDiv = _this.noDataView.contentElement.createChild('div');
        noDataDiv.textContent = i18nString(UIStrings.noDataAvailable);
        return _this;
    }
    _create_class(InterestGroupStorageView, [
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(InterestGroupStorageView.prototype), "wasShown", this).call(this);
                var sbw = this.sidebarWidget();
                if (sbw) {
                    sbw.registerCSSFiles([
                        _interestGroupStorageView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                    ]);
                }
            }
        },
        {
            key: "addEvent",
            value: function addEvent(event) {
                // Only add if not already present.
                var foundEvent = this.events.find(function(t) {
                    return eventEquals(t, event);
                });
                if (!foundEvent) {
                    this.events.push(event);
                    this.interestGroupGrid.data = this.events;
                }
            }
        },
        {
            key: "clearEvents",
            value: function clearEvents() {
                this.events = [];
                this.interestGroupGrid.data = this.events;
                this.setSidebarWidget(this.noDisplayView);
                this.sidebarUpdatedForTesting();
            }
        },
        {
            key: "onFocus",
            value: function onFocus(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var _row_cells_find, _row_cells_find1, _row_cells_find2, focusedEvent, row, ownerOrigin, name, eventType, details, jsonView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                focusedEvent = event;
                                row = focusedEvent.data.row;
                                if (!row) {
                                    return [
                                        2
                                    ];
                                }
                                ownerOrigin = (_row_cells_find = row.cells.find(function(cell) {
                                    return cell.columnId === 'event-group-owner';
                                })) === null || _row_cells_find === void 0 ? void 0 : _row_cells_find.value;
                                name = (_row_cells_find1 = row.cells.find(function(cell) {
                                    return cell.columnId === 'event-group-name';
                                })) === null || _row_cells_find1 === void 0 ? void 0 : _row_cells_find1.value;
                                eventType = (_row_cells_find2 = row.cells.find(function(cell) {
                                    return cell.columnId === 'event-type';
                                })) === null || _row_cells_find2 === void 0 ? void 0 : _row_cells_find2.value;
                                if (!ownerOrigin || !name) {
                                    return [
                                        2
                                    ];
                                }
                                details = null;
                                if (!(eventType !== "additionalBid" /* Protocol.Storage.InterestGroupAccessType.AdditionalBid */  && eventType !== "additionalBidWin" /* Protocol.Storage.InterestGroupAccessType.AdditionalBidWin */  && eventType !== "topLevelAdditionalBid" /* Protocol.Storage.InterestGroupAccessType.TopLevelAdditionalBid */ )) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _this.detailsGetter.getInterestGroupDetails(ownerOrigin, name)
                                ];
                            case 1:
                                details = _state.sent();
                                _state.label = 2;
                            case 2:
                                if (!details) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_1__.JSONView.JSONView.createView(JSON.stringify(details))
                                ];
                            case 3:
                                jsonView = _state.sent();
                                jsonView === null || jsonView === void 0 ? void 0 : jsonView.setMinimumSize(0, 40);
                                if (jsonView) {
                                    jsonView.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.pane('details').track({
                                        resize: true
                                    })));
                                    _this.setSidebarWidget(jsonView);
                                }
                                return [
                                    3,
                                    5
                                ];
                            case 4:
                                _this.setSidebarWidget(_this.noDataView);
                                _state.label = 5;
                            case 5:
                                _this.sidebarUpdatedForTesting();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getEventsForTesting",
            value: function getEventsForTesting() {
                return this.events;
            }
        },
        {
            key: "getInterestGroupGridForTesting",
            value: function getInterestGroupGridForTesting() {
                return this.interestGroupGrid;
            }
        },
        {
            key: "sidebarUpdatedForTesting",
            value: function sidebarUpdatedForTesting() {}
        }
    ]);
    return InterestGroupStorageView;
} //# sourceMappingURL=InterestGroupStorageView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.SplitWidget.SplitWidget);


}),
"./panels/application/interestGroupStorageView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\ndevtools-interest-group-access-grid {\n  overflow: auto;\n}\n\n.placeholder {\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  color: var(--sys-color-token-subtle);\n  overflow: auto;\n  text-align: center;\n\n  & div {\n    width: 100%;\n  }\n}\n\n/*# sourceURL=interestGroupStorageView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);