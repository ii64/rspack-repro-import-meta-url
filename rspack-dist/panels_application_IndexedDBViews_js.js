"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_IndexedDBViews_js"], {
"./panels/application/IndexedDBViews.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  IDBDataGridNode: function() { return IDBDataGridNode; },
  IDBDataView: function() { return IDBDataView; },
  IDBDatabaseView: function() { return IDBDatabaseView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/report_view/report_view.js */ "./ui/components/report_view/report_view.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _indexedDBViews_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indexedDBViews.css.js */ "./panels/application/indexedDBViews.css.js");
/*
 * Copyright (C) 2012 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      ",
        "\n      <",
        "></",
        ">\n      <",
        ">\n      <",
        "\n          aria-label=",
        "\n          .variant=",
        "\n          @click=",
        "\n          jslog=",
        ">\n        ",
        "\n      </",
        ">&nbsp;\n      <",
        "\n          aria-label=",
        "\n          .variant=",
        "\n          @click=",
        "\n          jslog=",
        ">\n        ",
        "\n      </",
        ">\n      </",
        ">\n      "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}











var UIStrings = {
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ version: 'Version',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ objectStores: 'Object stores',
    /**
     *@description Text of button in Indexed DBViews of the Application panel
     */ deleteDatabase: 'Delete database',
    /**
     *@description Text of button in Indexed DBViews of the Application panel
     */ refreshDatabase: 'Refresh database',
    /**
     *@description Text in Indexed DBViews of the Application panel
     *@example {msb} PH1
     */ pleaseConfirmDeleteOfSDatabase: 'Please confirm delete of "{PH1}" database.',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ idb: 'IDB',
    /**
     *@description Text to refresh the page
     */ refresh: 'Refresh',
    /**
     *@description Tooltip text that appears when hovering over the delete button in the Indexed DBViews of the Application panel
     */ deleteSelected: 'Delete selected',
    /**
     *@description Tooltip text that appears when hovering over the clear button in the Indexed DBViews of the Application panel
     */ clearObjectStore: 'Clear object store',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ dataMayBeStale: 'Data may be stale',
    /**
     *@description Title of needs refresh in indexed dbviews of the application panel
     */ someEntriesMayHaveBeenModified: 'Some entries may have been modified',
    /**
     *@description Text in DOMStorage Items View of the Application panel
     */ keyString: 'Key',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ primaryKey: 'Primary key',
    /**
     *@description Text for the value of something
     */ valueString: 'Value',
    /**
     *@description Data grid name for Indexed DB data grids
     */ indexedDb: 'Indexed DB',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ keyPath: 'Key path: ',
    /**
     *@description Tooltip text that appears when hovering over the triangle left button in the Indexed DBViews of the Application panel
     */ showPreviousPage: 'Show previous page',
    /**
     *@description Tooltip text that appears when hovering over the triangle right button in the Indexed DBViews of the Application panel
     */ showNextPage: 'Show next page',
    /**
     *@description Text in Indexed DBViews of the Application panel
     */ filterByKey: 'Filter by key (show keys greater or equal to)',
    /**
     *@description Text in Context menu for expanding objects in IndexedDB tables
     */ expandRecursively: 'Expand Recursively',
    /**
     *@description Text in Context menu for collapsing objects in IndexedDB tables
     */ collapse: 'Collapse',
    /**
     *@description Span text content in Indexed DBViews of the Application panel
     *@example {2} PH1
     */ totalEntriesS: 'Total entries: {PH1}',
    /**
     *@description Text in Indexed DBViews of the Application panel
     *@example {2} PH1
     */ keyGeneratorValueS: 'Key generator value: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/IndexedDBViews.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var IDBDatabaseView = /*#__PURE__*/ function(_ApplicationComponents_StorageMetadataView_StorageMetadataView) {
    "use strict";
    _inherits(IDBDatabaseView, _ApplicationComponents_StorageMetadataView_StorageMetadataView);
    var _super = _create_super(IDBDatabaseView);
    function IDBDatabaseView(model, database) {
        _class_call_check(this, IDBDatabaseView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "database", void 0);
        _this.model = model;
        if (database) {
            _this.update(database);
        }
        return _this;
    }
    _create_class(IDBDatabaseView, [
        {
            key: "getTitle",
            value: function getTitle() {
                var _this_database;
                return (_this_database = this.database) === null || _this_database === void 0 ? void 0 : _this_database.databaseId.name;
            }
        },
        {
            key: "renderReportContent",
            value: function renderReportContent() {
                var _this = this;
                var _this1 = this, _superprop_get_renderReportContent = function() {
                    return _get(_get_prototype_of(IDBDatabaseView.prototype), "renderReportContent", _this);
                };
                return _async_to_generator(function() {
                    var _, _tmp;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this1.database) {
                                    return [
                                        2,
                                        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing
                                    ];
                                }
                                _ = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html;
                                _tmp = [
                                    _templateObject()
                                ];
                                return [
                                    4,
                                    _superprop_get_renderReportContent().call(_this1)
                                ];
                            case 1:
                                return [
                                    2,
                                    _.apply(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__, _tmp.concat([
                                        _state.sent(),
                                        _this1.key(i18nString(UIStrings.version)),
                                        _this1.value(_this1.database.version.toString()),
                                        _this1.key(i18nString(UIStrings.objectStores)),
                                        _this1.value(_this1.database.objectStores.size.toString()),
                                        _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSectionDivider.litTagName,
                                        _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSectionDivider.litTagName,
                                        _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSection.litTagName,
                                        _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName,
                                        i18nString(UIStrings.deleteDatabase),
                                        "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
                                        _this1.deleteDatabase,
                                        _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('delete-database').track({
                                            click: true
                                        }),
                                        i18nString(UIStrings.deleteDatabase),
                                        _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName,
                                        _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName,
                                        i18nString(UIStrings.refreshDatabase),
                                        "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
                                        _this1.refreshDatabaseButtonClicked,
                                        _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('refresh-database').track({
                                            click: true
                                        }),
                                        i18nString(UIStrings.refreshDatabase),
                                        _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName,
                                        _ui_components_report_view_report_view_js__WEBPACK_IMPORTED_MODULE_3__.ReportView.ReportSection.litTagName
                                    ]))
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "refreshDatabaseButtonClicked",
            value: function refreshDatabaseButtonClicked() {
                this.model.refreshDatabase(this.database.databaseId);
            }
        },
        {
            key: "update",
            value: function update(database) {
                var _this = this;
                var _this_model_target_model;
                this.database = database;
                var bucketInfo = (_this_model_target_model = this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel)) === null || _this_model_target_model === void 0 ? void 0 : _this_model_target_model.getBucketByName(database.databaseId.storageBucket.storageKey, database.databaseId.storageBucket.name);
                if (bucketInfo) {
                    this.setStorageBucket(bucketInfo);
                } else {
                    this.setStorageKey(database.databaseId.storageBucket.storageKey);
                }
                void this.render().then(function() {
                    return _this.updatedForTests();
                });
            }
        },
        {
            key: "updatedForTests",
            value: function updatedForTests() {
            // Sniffed in tests.
            }
        },
        {
            key: "deleteDatabase",
            value: function deleteDatabase() {
                var _this = this;
                return _async_to_generator(function() {
                    var ok;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.ConfirmDialog.show(i18nString(UIStrings.pleaseConfirmDeleteOfSDatabase, {
                                        PH1: _this.database.databaseId.name
                                    }), _this, {
                                        jslogContext: 'delete-database-confirmation'
                                    })
                                ];
                            case 1:
                                ok = _state.sent();
                                if (ok) {
                                    void _this.model.deleteDatabase(_this.database.databaseId);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(IDBDatabaseView.prototype), "wasShown", this).call(this);
            }
        }
    ]);
    return IDBDatabaseView;
}(_components_components_js__WEBPACK_IMPORTED_MODULE_9__.StorageMetadataView.StorageMetadataView);
customElements.define('devtools-idb-database-view', IDBDatabaseView);
var IDBDataView = /*#__PURE__*/ function(_UI_View_SimpleView) {
    "use strict";
    _inherits(IDBDataView, _UI_View_SimpleView);
    var _super = _create_super(IDBDataView);
    function IDBDataView(model, databaseId, objectStore, index, refreshObjectStoreCallback) {
        _class_call_check(this, IDBDataView);
        var _this;
        _this = _super.call(this, i18nString(UIStrings.idb));
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "databaseId", void 0);
        _define_property(_assert_this_initialized(_this), "isIndex", void 0);
        _define_property(_assert_this_initialized(_this), "refreshObjectStoreCallback", void 0);
        _define_property(_assert_this_initialized(_this), "refreshButton", void 0);
        _define_property(_assert_this_initialized(_this), "deleteSelectedButton", void 0);
        _define_property(_assert_this_initialized(_this), "clearButton", void 0);
        _define_property(_assert_this_initialized(_this), "needsRefresh", void 0);
        _define_property(_assert_this_initialized(_this), "clearingObjectStore", void 0);
        _define_property(_assert_this_initialized(_this), "pageSize", void 0);
        _define_property(_assert_this_initialized(_this), "skipCount", void 0);
        _define_property(_assert_this_initialized(_this), "entries", void 0);
        _define_property(_assert_this_initialized(_this), "objectStore", void 0);
        _define_property(_assert_this_initialized(_this), "index", void 0);
        _define_property(_assert_this_initialized(_this), "keyInput", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "previouslySelectedNode", void 0);
        _define_property(_assert_this_initialized(_this), "lastPageSize", void 0);
        _define_property(_assert_this_initialized(_this), "lastSkipCount", void 0);
        _define_property(_assert_this_initialized(_this), "pageBackButton", void 0);
        _define_property(_assert_this_initialized(_this), "pageForwardButton", void 0);
        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _define_property(_assert_this_initialized(_this), "lastKey", void 0);
        _define_property(_assert_this_initialized(_this), "summaryBarElement", void 0);
        _this.model = model;
        _this.databaseId = databaseId;
        _this.isIndex = Boolean(index);
        _this.refreshObjectStoreCallback = refreshObjectStoreCallback;
        _this.element.classList.add('indexed-db-data-view', 'storage-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.pane('indexed-db-data-view')));
        _this.refreshButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.refresh), 'refresh');
        _this.refreshButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.refreshButtonClicked, _assert_this_initialized(_this));
        _this.refreshButton.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('refresh').track({
            click: true
        })));
        _this.deleteSelectedButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.deleteSelected), 'bin');
        _this.deleteSelectedButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
            void _this.deleteButtonClicked(null);
        });
        _this.deleteSelectedButton.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('delete-selected').track({
            click: true
        })));
        _this.clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.clearObjectStore), 'clear');
        _this.clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            void _this.clearButtonClicked();
        }, _assert_this_initialized(_this));
        _this.clearButton.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('clear-all').track({
            click: true
        })));
        var refreshIcon = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createIconLabel({
            title: i18nString(UIStrings.dataMayBeStale),
            iconName: 'warning',
            color: 'var(--icon-warning)',
            width: '20px',
            height: '20px'
        });
        _this.needsRefresh = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarItem(refreshIcon);
        _this.needsRefresh.setVisible(false);
        _this.needsRefresh.setTitle(i18nString(UIStrings.someEntriesMayHaveBeenModified));
        _this.clearingObjectStore = false;
        _this.createEditorToolbar();
        _this.pageSize = 50;
        _this.skipCount = 0;
        _this.update(objectStore, index);
        _this.entries = [];
        return _this;
    }
    _create_class(IDBDataView, [
        {
            key: "createDataGrid",
            value: function createDataGrid() {
                var _this = this;
                var keyPath = this.isIndex && this.index ? this.index.keyPath : this.objectStore.keyPath;
                var columns = [];
                // Create column defaults so that we avoid repetition below.
                var columnDefaults = {
                    title: undefined,
                    titleDOMFragment: undefined,
                    sortable: false,
                    sort: undefined,
                    align: undefined,
                    width: undefined,
                    fixedWidth: undefined,
                    editable: undefined,
                    nonSelectable: undefined,
                    longText: undefined,
                    disclosure: undefined,
                    weight: undefined,
                    allowInSortByEvenWhenHidden: undefined,
                    dataType: undefined,
                    defaultWeight: undefined
                };
                columns.push(_object_spread_props(_object_spread({}, columnDefaults), {
                    id: 'number',
                    title: '#',
                    sortable: false,
                    width: '50px'
                }));
                columns.push(_object_spread_props(_object_spread({}, columnDefaults), {
                    id: 'key',
                    titleDOMFragment: this.keyColumnHeaderFragment(i18nString(UIStrings.keyString), keyPath),
                    sortable: false
                }));
                if (this.isIndex) {
                    columns.push(_object_spread_props(_object_spread({}, columnDefaults), {
                        id: 'primary-key',
                        titleDOMFragment: this.keyColumnHeaderFragment(i18nString(UIStrings.primaryKey), this.objectStore.keyPath),
                        sortable: false
                    }));
                }
                var title = i18nString(UIStrings.valueString);
                columns.push(_object_spread_props(_object_spread({}, columnDefaults), {
                    id: 'value',
                    title: title,
                    sortable: false
                }));
                var dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridImpl({
                    displayName: i18nString(UIStrings.indexedDb),
                    columns: columns,
                    deleteCallback: this.deleteButtonClicked.bind(this),
                    refreshCallback: this.updateData.bind(this, true),
                    editCallback: undefined
                });
                dataGrid.setStriped(true);
                dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , function() {
                    _this.updateToolbarEnablement();
                    _this.updateSelectionColor();
                }, this);
                return dataGrid;
            }
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "keyColumnHeaderFragment",
            value: function keyColumnHeaderFragment(prefix, keyPath) {
                var keyColumnHeaderFragment = document.createDocumentFragment();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, prefix);
                if (keyPath === null) {
                    return keyColumnHeaderFragment;
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ' (' + i18nString(UIStrings.keyPath));
                if (Array.isArray(keyPath)) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, '[');
                    for(var i = 0; i < keyPath.length; ++i){
                        if (i !== 0) {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ', ');
                        }
                        keyColumnHeaderFragment.appendChild(this.keyPathStringFragment(keyPath[i]));
                    }
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ']');
                } else {
                    var keyPathString = keyPath;
                    keyColumnHeaderFragment.appendChild(this.keyPathStringFragment(keyPathString));
                }
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyColumnHeaderFragment, ')');
                return keyColumnHeaderFragment;
            }
        },
        {
            key: "keyPathStringFragment",
            value: function keyPathStringFragment(keyPathString) {
                var keyPathStringFragment = document.createDocumentFragment();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyPathStringFragment, '"');
                var keyPathSpan = keyPathStringFragment.createChild('span', 'source-code indexed-db-key-path');
                keyPathSpan.textContent = keyPathString;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createTextChild(keyPathStringFragment, '"');
                return keyPathStringFragment;
            }
        },
        {
            key: "createEditorToolbar",
            value: function createEditorToolbar() {
                var editorToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('data-view-toolbar', this.element);
                editorToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()));
                editorToolbar.appendToolbarItem(this.refreshButton);
                editorToolbar.appendToolbarItem(this.clearButton);
                editorToolbar.appendToolbarItem(this.deleteSelectedButton);
                editorToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarSeparator());
                this.pageBackButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.showPreviousPage), 'triangle-left', undefined, 'prev-page');
                this.pageBackButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.pageBackButtonClicked, this);
                editorToolbar.appendToolbarItem(this.pageBackButton);
                this.pageForwardButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.showNextPage), 'triangle-right', undefined, 'next-page');
                this.pageForwardButton.setEnabled(false);
                this.pageForwardButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.pageForwardButtonClicked, this);
                editorToolbar.appendToolbarItem(this.pageForwardButton);
                this.keyInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByKey), 0.5);
                this.keyInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , this.updateData.bind(this, false));
                editorToolbar.appendToolbarItem(this.keyInput);
                editorToolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarSeparator());
                editorToolbar.appendToolbarItem(this.needsRefresh);
            }
        },
        {
            key: "pageBackButtonClicked",
            value: function pageBackButtonClicked() {
                this.skipCount = Math.max(0, this.skipCount - this.pageSize);
                this.updateData(false);
            }
        },
        {
            key: "pageForwardButtonClicked",
            value: function pageForwardButtonClicked() {
                this.skipCount = this.skipCount + this.pageSize;
                this.updateData(false);
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, gridNode) {
                var node = gridNode;
                if (node.valueObjectPresentation) {
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.expandRecursively), function() {
                        if (!node.valueObjectPresentation) {
                            return;
                        }
                        void node.valueObjectPresentation.objectTreeElement().expandRecursively();
                    }, {
                        jslogContext: 'expand-recursively'
                    });
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.collapse), function() {
                        if (!node.valueObjectPresentation) {
                            return;
                        }
                        node.valueObjectPresentation.objectTreeElement().collapse();
                    }, {
                        jslogContext: 'collapse'
                    });
                }
            }
        },
        {
            key: "refreshData",
            value: function refreshData() {
                this.updateData(true);
            }
        },
        {
            key: "update",
            value: function update(objectStore, index) {
                this.objectStore = objectStore;
                this.index = index;
                if (this.dataGrid) {
                    this.dataGrid.asWidget().detach();
                }
                this.dataGrid = this.createDataGrid();
                this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));
                this.dataGrid.asWidget().show(this.element);
                this.skipCount = 0;
                this.updateData(true);
            }
        },
        {
            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            key: "parseKey",
            value: function parseKey(keyString) {
                var result;
                try {
                    result = JSON.parse(keyString);
                } catch (e) {
                    result = keyString;
                }
                return result;
            }
        },
        {
            key: "updateData",
            value: function updateData(force) {
                var key = this.parseKey(this.keyInput.value());
                var pageSize = this.pageSize;
                var skipCount = this.skipCount;
                var selected = this.dataGrid.selectedNode ? this.dataGrid.selectedNode.data['number'] : 0;
                selected = Math.max(selected, this.skipCount); // Page forward should select top entry
                this.clearButton.setEnabled(!this.isIndex);
                if (!force && this.lastKey === key && this.lastPageSize === pageSize && this.lastSkipCount === skipCount) {
                    return;
                }
                if (this.lastKey !== key || this.lastPageSize !== pageSize) {
                    skipCount = 0;
                    this.skipCount = 0;
                }
                this.lastKey = key;
                this.lastPageSize = pageSize;
                this.lastSkipCount = skipCount;
                function callback(entries, hasMore) {
                    this.clear();
                    this.entries = entries;
                    var selectedNode = null;
                    for(var i = 0; i < entries.length; ++i){
                        // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var data = {};
                        data['number'] = i + skipCount;
                        data['key'] = entries[i].key;
                        data['primary-key'] = entries[i].primaryKey;
                        data['value'] = entries[i].value;
                        var node = new IDBDataGridNode(data);
                        this.dataGrid.rootNode().appendChild(node);
                        if (data['number'] <= selected) {
                            selectedNode = node;
                        }
                    }
                    if (selectedNode) {
                        selectedNode.select();
                    }
                    this.pageBackButton.setEnabled(Boolean(skipCount));
                    this.pageForwardButton.setEnabled(hasMore);
                    this.needsRefresh.setVisible(false);
                    this.updateToolbarEnablement();
                    this.updateSelectionColor();
                    this.updatedDataForTests();
                }
                var idbKeyRange = key ? window.IDBKeyRange.lowerBound(key) : null;
                if (this.isIndex && this.index) {
                    this.model.loadIndexData(this.databaseId, this.objectStore.name, this.index.name, idbKeyRange, skipCount, pageSize, callback.bind(this));
                } else {
                    this.model.loadObjectStoreData(this.databaseId, this.objectStore.name, idbKeyRange, skipCount, pageSize, callback.bind(this));
                }
                void this.model.getMetadata(this.databaseId, this.objectStore).then(this.updateSummaryBar.bind(this));
            }
        },
        {
            key: "updateSummaryBar",
            value: function updateSummaryBar(metadata) {
                if (!this.summaryBarElement) {
                    this.summaryBarElement = this.element.createChild('div', 'object-store-summary-bar');
                }
                this.summaryBarElement.removeChildren();
                if (!metadata) {
                    return;
                }
                var separator = '\u2002\u2758\u2002';
                var span = this.summaryBarElement.createChild('span');
                span.textContent = i18nString(UIStrings.totalEntriesS, {
                    PH1: String(metadata.entriesCount)
                });
                if (this.objectStore.autoIncrement) {
                    span.textContent += separator;
                    span.textContent += i18nString(UIStrings.keyGeneratorValueS, {
                        PH1: String(metadata.keyGeneratorValue)
                    });
                }
            }
        },
        {
            key: "updatedDataForTests",
            value: function updatedDataForTests() {
            // Sniffed in tests.
            }
        },
        {
            key: "refreshButtonClicked",
            value: function refreshButtonClicked() {
                this.updateData(true);
            }
        },
        {
            key: "clearButtonClicked",
            value: function clearButtonClicked() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.clearButton.setEnabled(false);
                                _this.clearingObjectStore = true;
                                return [
                                    4,
                                    _this.model.clearObjectStore(_this.databaseId, _this.objectStore.name)
                                ];
                            case 1:
                                _state.sent();
                                _this.clearingObjectStore = false;
                                _this.clearButton.setEnabled(true);
                                _this.updateData(true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "markNeedsRefresh",
            value: function markNeedsRefresh() {
                // We expect that calling clearObjectStore() will cause the backend to send us an update.
                if (this.clearingObjectStore) {
                    return;
                }
                this.needsRefresh.setVisible(true);
            }
        },
        {
            key: "deleteButtonClicked",
            value: function deleteButtonClicked(node) {
                var _this = this;
                return _async_to_generator(function() {
                    var key, keyValue;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!node) {
                                    node = _this.dataGrid.selectedNode;
                                    if (!node) {
                                        return [
                                            2
                                        ];
                                    }
                                }
                                key = _this.isIndex ? node.data['primary-key'] : node.data.key;
                                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                keyValue = key.value;
                                return [
                                    4,
                                    _this.model.deleteEntries(_this.databaseId, _this.objectStore.name, window.IDBKeyRange.only(keyValue))
                                ];
                            case 1:
                                _state.sent();
                                _this.refreshObjectStoreCallback();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.dataGrid.rootNode().removeChildren();
                this.entries = [];
            }
        },
        {
            key: "updateToolbarEnablement",
            value: function updateToolbarEnablement() {
                var empty = !this.dataGrid || this.dataGrid.rootNode().children.length === 0;
                this.deleteSelectedButton.setEnabled(!empty && this.dataGrid.selectedNode !== null);
            }
        },
        {
            key: "updateSelectionColor",
            value: function updateSelectionColor() {
                var _this_dataGrid_selectedNode;
                if (this.previouslySelectedNode) {
                    this.previouslySelectedNode.element().querySelectorAll('.source-code').forEach(function(element) {
                        var shadowRoot = element.shadowRoot;
                        shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.adoptedStyleSheets.pop();
                    });
                }
                var _this_dataGrid_selectedNode1;
                this.previouslySelectedNode = (_this_dataGrid_selectedNode1 = this.dataGrid.selectedNode) !== null && _this_dataGrid_selectedNode1 !== void 0 ? _this_dataGrid_selectedNode1 : undefined;
                (_this_dataGrid_selectedNode = this.dataGrid.selectedNode) === null || _this_dataGrid_selectedNode === void 0 ? void 0 : _this_dataGrid_selectedNode.element().querySelectorAll('.source-code').forEach(function(element) {
                    var shadowRoot = element.shadowRoot;
                    var sheet = new CSSStyleSheet();
                    sheet.replaceSync('::selection {background-color: var(--sys-color-state-focus-select);}');
                    shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.adoptedStyleSheets.push(sheet);
                });
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(IDBDataView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _indexedDBViews_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
            }
        }
    ]);
    return IDBDataView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.View.SimpleView);
var IDBDataGridNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(IDBDataGridNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(IDBDataGridNode);
    function IDBDataGridNode(data) {
        _class_call_check(this, IDBDataGridNode);
        var _this;
        _this = _super.call(this, data, false);
        _define_property(_assert_this_initialized(_this), "selectable", void 0);
        _define_property(_assert_this_initialized(_this), "valueObjectPresentation", void 0);
        _this.selectable = true;
        _this.valueObjectPresentation = null;
        return _this;
    }
    _create_class(IDBDataGridNode, [
        {
            key: "createCell",
            value: function createCell(columnIdentifier) {
                var cell = _get(_get_prototype_of(IDBDataGridNode.prototype), "createCell", this).call(this, columnIdentifier);
                var value = this.data[columnIdentifier];
                switch(columnIdentifier){
                    case 'value':
                        {
                            cell.removeChildren();
                            var objectPropSection = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSection.defaultObjectPropertiesSection(value, undefined /* linkifier */ , true, true);
                            cell.appendChild(objectPropSection.element);
                            this.valueObjectPresentation = objectPropSection;
                            break;
                        }
                    case 'key':
                    case 'primary-key':
                        {
                            cell.removeChildren();
                            var objectElement = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSection.defaultObjectPresentation(value, undefined /* linkifier */ , true, true);
                            cell.appendChild(objectElement);
                            break;
                        }
                    default:
                        {}
                }
                return cell;
            }
        }
    ]);
    return IDBDataGridNode;
} //# sourceMappingURL=IndexedDBViews.js.map
(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridNode);


}),
"./panels/application/indexedDBViews.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (C) 2012 Google Inc. All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are\n * met:\n *\n *     * Redistributions of source code must retain the above copyright\n * notice, this list of conditions and the following disclaimer.\n *     * Redistributions in binary form must reproduce the above\n * copyright notice, this list of conditions and the following disclaimer\n * in the documentation and/or other materials provided with the\n * distribution.\n *     * Neither the name of Google Inc. nor the names of its\n * contributors may be used to endorse or promote products derived from\n * this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n.indexed-db-data-view .data-view-toolbar {\n  position: relative;\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.indexed-db-data-view .data-grid {\n  flex: auto;\n}\n\n.indexed-db-data-view .data-grid .data-container tr:nth-last-child(1) {\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.indexed-db-data-view .data-grid .data-container tr:nth-last-child(1) td {\n  border: 0;\n}\n\n.indexed-db-data-view .data-grid .data-container tr:nth-last-child(2) td {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.indexed-db-data-view .data-grid:focus .data-container tr.selected {\n  background-color: var(--sys-color-tonal-container);\n  color: inherit;\n}\n\n.indexed-db-data-view .section,\n.indexed-db-data-view .section > .header,\n.indexed-db-data-view .section > .header .title {\n  margin: 0;\n  min-height: inherit;\n  line-height: inherit;\n}\n\n.indexed-db-data-view .data-grid .data-container td .section .header .title {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.indexed-db-key-path {\n  color: var(--sys-color-error);\n  white-space: pre-wrap;\n  unicode-bidi: -webkit-isolate;\n}\n\n.indexed-db-container {\n  overflow: auto;\n}\n\n.indexed-db-header {\n  min-width: 400px;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.source-code.indexed-db-key-path {\n  font-size: unset !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.resources-toolbar {\n  padding-right: 10px;\n}\n\n.object-store-summary-bar {\n  flex: 0 0 27px;\n  line-height: 27px;\n  padding-left: 5px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n/*# sourceURL=indexedDBViews.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);