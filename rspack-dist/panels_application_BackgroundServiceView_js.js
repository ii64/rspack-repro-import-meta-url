"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_BackgroundServiceView_js"], {
"./panels/application/BackgroundServiceModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackgroundServiceModel: function() { return BackgroundServiceModel; },
  Events: function() { return Events; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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

var BackgroundServiceModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(BackgroundServiceModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(BackgroundServiceModel);
    function BackgroundServiceModel(target) {
        _class_call_check(this, BackgroundServiceModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "backgroundServiceAgent", void 0);
        _define_property(_assert_this_initialized(_this), "events", void 0);
        _this.backgroundServiceAgent = target.backgroundServiceAgent();
        target.registerBackgroundServiceDispatcher(_assert_this_initialized(_this));
        _this.events = new Map();
        return _this;
    }
    _create_class(BackgroundServiceModel, [
        {
            key: "enable",
            value: function enable(service) {
                this.events.set(service, []);
                void this.backgroundServiceAgent.invoke_startObserving({
                    service: service
                });
            }
        },
        {
            key: "setRecording",
            value: function setRecording(shouldRecord, service) {
                void this.backgroundServiceAgent.invoke_setRecording({
                    shouldRecord: shouldRecord,
                    service: service
                });
            }
        },
        {
            key: "clearEvents",
            value: function clearEvents(service) {
                this.events.set(service, []);
                void this.backgroundServiceAgent.invoke_clearEvents({
                    service: service
                });
            }
        },
        {
            key: "getEvents",
            value: function getEvents(service) {
                return this.events.get(service) || [];
            }
        },
        {
            key: "recordingStateChanged",
            value: function recordingStateChanged(param) {
                var isRecording = param.isRecording, service = param.service;
                this.dispatchEventToListeners(Events.RecordingStateChanged, {
                    isRecording: isRecording,
                    serviceName: service
                });
            }
        },
        {
            key: "backgroundServiceEventReceived",
            value: function backgroundServiceEventReceived(param) {
                var backgroundServiceEvent = param.backgroundServiceEvent;
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // @ts-expect-error
                this.events.get(backgroundServiceEvent.service).push(backgroundServiceEvent);
                this.dispatchEventToListeners(Events.BackgroundServiceEventReceived, backgroundServiceEvent);
            }
        }
    ]);
    return BackgroundServiceModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(BackgroundServiceModel, {
    capabilities: 1 /* SDK.Target.Capability.Browser */ ,
    autostart: false
});
var Events;
(function(Events) {
    Events["RecordingStateChanged"] = "RecordingStateChanged";
    Events["BackgroundServiceEventReceived"] = "BackgroundServiceEventReceived";
})(Events || (Events = {})); //# sourceMappingURL=BackgroundServiceModel.js.map


}),
"./panels/application/BackgroundServiceView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  BackgroundServiceView: function() { return BackgroundServiceView; },
  EventDataNode: function() { return EventDataNode; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/emptyWidget.css.js */ "./ui/legacy/emptyWidget.css.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */var _backgroundServiceView_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backgroundServiceView.css.js */ "./panels/application/backgroundServiceView.css.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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





// eslint-disable-next-line rulesdir/es_modules_import





var UIStrings = {
    /**
     *@description Text in Background Service View of the Application panel
     */ backgroundFetch: 'Background fetch',
    /**
     *@description Text in Background Service View of the Application panel
     */ backgroundSync: 'Background sync',
    /**
     *@description Text in Background Service View of the Application panel
     */ pushMessaging: 'Push messaging',
    /**
     *@description Text in Background Service View of the Application panel
     */ notifications: 'Notifications',
    /**
     *@description Text in Background Service View of the Application panel
     */ paymentHandler: 'Payment handler',
    /**
     *@description Text in the Periodic Background Service View of the Application panel
     */ periodicBackgroundSync: 'Periodic background sync',
    /**
     *@description Text to clear content
     */ clear: 'Clear',
    /**
     *@description Tooltip text that appears when hovering over the largeicon download button in the Background Service View of the Application panel
     */ saveEvents: 'Save events',
    /**
     *@description Text in Background Service View of the Application panel
     */ showEventsFromOtherDomains: 'Show events from other domains',
    /**
     *@description Text of a checkbox to show events for other dtorage keys
     */ showEventsForOtherStorageKeys: 'Show events from other storage partitions',
    /**
     *@description Title of an action under the Background Services category that can be invoked through the Command Menu
     */ stopRecordingEvents: 'Stop recording events',
    /**
     *@description Title of an action under the Background Services category that can be invoked through the Command Menu
     */ startRecordingEvents: 'Start recording events',
    /**
     *@description Text for timestamps of items
     */ timestamp: 'Timestamp',
    /**
     *@description Text that refers to some events
     */ event: 'Event',
    /**
     *@description Text for the origin of something
     */ origin: 'Origin',
    /**
     *@description Text for the storage key of something
     */ storageKey: 'Storage Key',
    /**
     *@description Text in Background Service View of the Application panel. The Scope is a URL associated with the Service Worker, which limits which pages/sites the Service Worker operates on.
     */ swScope: 'Service Worker Scope',
    /**
     *@description Text in Background Service View of the Application panel
     */ instanceId: 'Instance ID',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ backgroundServices: 'Background services',
    /**
     *@description Text that is usually a hyperlink to more documentation
     */ learnMore: 'Learn more',
    /**
     *@description Text in Background Service View of the Application panel
     */ selectAnEntryToViewMetadata: 'Select an entry to view metadata',
    /**
     *@description Text in Background Service View of the Application panel
     *@example {Background Fetch} PH1
     */ recordingSActivity: 'Recording {PH1} activity...',
    /**
     *@description Inform users that DevTools are recording/waiting for events in the Periodic Background Sync tool of the Application panel
     *@example {Background Fetch} PH1
     */ devtoolsWillRecordAllSActivity: 'DevTools will record all {PH1} activity for up to 3 days, even when closed.',
    /**
     *@description Text in Background Service View of the Application panel
     *@example {record} PH1
     *@example {Ctrl + R} PH2
     */ clickTheRecordButtonSOrHitSTo: 'Click the record button {PH1} or hit {PH2} to start recording.',
    /**
     *@description Text to show an item is empty
     */ empty: 'empty',
    /**
     *@description Text in Background Service View of the Application panel
     */ noMetadataForThisEvent: 'No metadata for this event'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/BackgroundServiceView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var BackgroundServiceView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(BackgroundServiceView, _UI_Widget_VBox);
    var _super = _create_super(BackgroundServiceView);
    function BackgroundServiceView(serviceName, model) {
        _class_call_check(this, BackgroundServiceView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "serviceName", void 0);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "serviceWorkerManager", void 0);
        _define_property(_assert_this_initialized(_this), "securityOriginManager", void 0);
        _define_property(_assert_this_initialized(_this), "storageKeyManager", void 0);
        _define_property(_assert_this_initialized(_this), "recordAction", void 0);
        _define_property(_assert_this_initialized(_this), "recordButton", void 0);
        _define_property(_assert_this_initialized(_this), "originCheckbox", void 0);
        _define_property(_assert_this_initialized(_this), "storageKeyCheckbox", void 0);
        _define_property(_assert_this_initialized(_this), "saveButton", void 0);
        _define_property(_assert_this_initialized(_this), "toolbar", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "previewPanel", void 0);
        _define_property(_assert_this_initialized(_this), "selectedEventNode", void 0);
        _define_property(_assert_this_initialized(_this), "preview", void 0);
        _this.serviceName = serviceName;
        var kebabName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(serviceName);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane().context(kebabName)));
        _this.model = model;
        _this.model.addEventListener(_BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.RecordingStateChanged, _this.onRecordingStateChanged, _assert_this_initialized(_this));
        _this.model.addEventListener(_BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_8__.Events.BackgroundServiceEventReceived, _this.onEventReceived, _assert_this_initialized(_this));
        _this.model.enable(_this.serviceName);
        _this.serviceWorkerManager = _this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ServiceWorkerManager.ServiceWorkerManager);
        _this.securityOriginManager = _this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SecurityOriginManager.SecurityOriginManager);
        if (!_this.securityOriginManager) {
            throw new Error('SecurityOriginManager instance is missing');
        }
        _this.securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.SecurityOriginManager.Events.MainSecurityOriginChanged, function() {
            return _this.onOriginChanged();
        });
        _this.storageKeyManager = _this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyManager);
        if (!_this.storageKeyManager) {
            throw new Error('StorageKeyManager instance is missing');
        }
        _this.storageKeyManager.addEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */ , function() {
            return _this.onStorageKeyChanged();
        });
        _this.recordAction = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ActionRegistry.ActionRegistry.instance().getAction('background-service.toggle-recording');
        _this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('background-service-toolbar', _this.contentElement);
        _this.toolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.toolbar()));
        void _this.setupToolbar();
        /**
         * This will contain the DataGrid for displaying events, and a panel at the bottom for showing
         * extra metadata related to the selected event.
         */ _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.SplitWidget.SplitWidget(/* isVertical= */ false, /* secondIsSidebar= */ true);
        _this.splitWidget.show(_this.contentElement);
        _this.dataGrid = _this.createDataGrid();
        _this.previewPanel = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
        _this.previewPanel.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('preview').track({
            resize: true
        })));
        _this.selectedEventNode = null;
        _this.preview = null;
        _this.splitWidget.setMainWidget(_this.dataGrid.asWidget());
        _this.splitWidget.setSidebarWidget(_this.previewPanel);
        _this.showPreview(null);
        return _this;
    }
    _create_class(BackgroundServiceView, [
        {
            key: "getDataGrid",
            value: function getDataGrid() {
                return this.dataGrid;
            }
        },
        {
            key: "setupToolbar",
            value: /**
     * Creates the toolbar UI element.
     */ function setupToolbar() {
                var _this = this;
                return _async_to_generator(function() {
                    var clearButton;
                    return _ts_generator(this, function(_state) {
                        _this.toolbar.makeWrappable(true);
                        _this.recordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(_this.recordAction);
                        _this.toolbar.appendToolbarItem(_this.recordButton);
                        clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.clear), 'clear', undefined, 'background-service.clear');
                        clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
                            return _this.clearEvents();
                        });
                        _this.toolbar.appendToolbarItem(clearButton);
                        _this.toolbar.appendSeparator();
                        _this.saveButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarButton(i18nString(UIStrings.saveEvents), 'download', undefined, 'background-service.save-events');
                        _this.saveButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
                            void _this.saveToFile();
                        });
                        _this.saveButton.setEnabled(false);
                        _this.toolbar.appendToolbarItem(_this.saveButton);
                        _this.toolbar.appendSeparator();
                        _this.originCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.showEventsFromOtherDomains), i18nString(UIStrings.showEventsFromOtherDomains), function() {
                            return _this.refreshView();
                        }, 'show-events-from-other-domains');
                        _this.toolbar.appendToolbarItem(_this.originCheckbox);
                        _this.storageKeyCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.showEventsForOtherStorageKeys), i18nString(UIStrings.showEventsForOtherStorageKeys), function() {
                            return _this.refreshView();
                        }, 'show-events-from-other-partitions');
                        _this.toolbar.appendToolbarItem(_this.storageKeyCheckbox);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            /**
     * Displays all available events in the grid.
     */ key: "refreshView",
            value: function refreshView() {
                var _this = this;
                this.clearView();
                var events = this.model.getEvents(this.serviceName).filter(function(event) {
                    return _this.acceptEvent(event);
                });
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var event = _step.value;
                        this.addEvent(event);
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
     * Clears the grid and panel.
     */ key: "clearView",
            value: function clearView() {
                this.selectedEventNode = null;
                this.dataGrid.rootNode().removeChildren();
                this.saveButton.setEnabled(false);
                this.showPreview(null);
            }
        },
        {
            /**
     * Called when the `Toggle Record` button is clicked.
     */ key: "toggleRecording",
            value: function toggleRecording() {
                this.model.setRecording(!this.recordButton.isToggled(), this.serviceName);
            }
        },
        {
            /**
     * Called when the `Clear` button is clicked.
     */ key: "clearEvents",
            value: function clearEvents() {
                this.model.clearEvents(this.serviceName);
                this.clearView();
            }
        },
        {
            key: "onRecordingStateChanged",
            value: function onRecordingStateChanged(param) {
                var state = param.data;
                if (state.serviceName !== this.serviceName) {
                    return;
                }
                if (state.isRecording === this.recordButton.isToggled()) {
                    return;
                }
                this.recordButton.setToggled(state.isRecording);
                this.updateRecordButtonTooltip();
                this.showPreview(this.selectedEventNode);
            }
        },
        {
            key: "updateRecordButtonTooltip",
            value: function updateRecordButtonTooltip() {
                var buttonTooltip = this.recordButton.isToggled() ? i18nString(UIStrings.stopRecordingEvents) : i18nString(UIStrings.startRecordingEvents);
                this.recordButton.setTitle(buttonTooltip, 'background-service.toggle-recording');
            }
        },
        {
            key: "onEventReceived",
            value: function onEventReceived(param) {
                var serviceEvent = param.data;
                if (!this.acceptEvent(serviceEvent)) {
                    return;
                }
                this.addEvent(serviceEvent);
            }
        },
        {
            key: "onOriginChanged",
            value: function onOriginChanged() {
                // No need to refresh the view if we are already showing all events.
                if (this.originCheckbox.checked()) {
                    return;
                }
                this.refreshView();
            }
        },
        {
            key: "onStorageKeyChanged",
            value: function onStorageKeyChanged() {
                if (this.storageKeyCheckbox.checked()) {
                    return;
                }
                this.refreshView();
            }
        },
        {
            key: "addEvent",
            value: function addEvent(serviceEvent) {
                var data = this.createEventData(serviceEvent);
                var dataNode = new EventDataNode(data, serviceEvent.eventMetadata);
                this.dataGrid.rootNode().appendChild(dataNode);
                if (this.dataGrid.rootNode().children.length === 1) {
                    this.saveButton.setEnabled(true);
                    this.showPreview(this.selectedEventNode);
                }
            }
        },
        {
            key: "createDataGrid",
            value: function createDataGrid() {
                var _this = this;
                var columns = [
                    {
                        id: 'id',
                        title: '#',
                        weight: 1
                    },
                    {
                        id: 'timestamp',
                        title: i18nString(UIStrings.timestamp),
                        weight: 7
                    },
                    {
                        id: 'event-name',
                        title: i18nString(UIStrings.event),
                        weight: 8
                    },
                    {
                        id: 'origin',
                        title: i18nString(UIStrings.origin),
                        weight: 8
                    },
                    {
                        id: 'storage-key',
                        title: i18nString(UIStrings.storageKey),
                        weight: 8
                    },
                    {
                        id: 'sw-scope',
                        title: i18nString(UIStrings.swScope),
                        weight: 4
                    },
                    {
                        id: 'instance-id',
                        title: i18nString(UIStrings.instanceId),
                        weight: 8
                    }
                ];
                var dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridImpl({
                    displayName: i18nString(UIStrings.backgroundServices),
                    columns: columns,
                    editCallback: undefined,
                    refreshCallback: undefined,
                    deleteCallback: undefined
                });
                dataGrid.setStriped(true);
                dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , function(event) {
                    return _this.showPreview(event.data);
                });
                return dataGrid;
            }
        },
        {
            /**
     * Creates the data object to pass to the DataGrid Node.
     */ key: "createEventData",
            value: function createEventData(serviceEvent) {
                var swScope = '';
                // Try to get the scope of the Service Worker registration to be more user-friendly.
                var registration = this.serviceWorkerManager ? this.serviceWorkerManager.registrations().get(serviceEvent.serviceWorkerRegistrationId) : undefined;
                if (registration) {
                    swScope = registration.scopeURL.substr(registration.securityOrigin.length);
                }
                return {
                    id: this.dataGrid.rootNode().children.length + 1,
                    timestamp: _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.formatTimestamp(serviceEvent.timestamp * 1000, /* full= */ true),
                    origin: serviceEvent.origin,
                    'storage-key': serviceEvent.storageKey,
                    'sw-scope': swScope,
                    'event-name': serviceEvent.eventName,
                    'instance-id': serviceEvent.instanceId
                };
            }
        },
        {
            /**
     * Filtration function to know whether event should be shown or not.
     */ key: "acceptEvent",
            value: function acceptEvent(event) {
                if (event.service !== this.serviceName) {
                    return false;
                }
                if (this.originCheckbox.checked() || this.storageKeyCheckbox.checked()) {
                    return true;
                }
                // Trim the trailing '/'.
                var origin = event.origin.substr(0, event.origin.length - 1);
                var storageKey = event.storageKey;
                return this.securityOriginManager.securityOrigins().includes(origin) || this.storageKeyManager.storageKeys().includes(storageKey);
            }
        },
        {
            key: "createLearnMoreLink",
            value: function createLearnMoreLink() {
                var url = 'https://developer.chrome.com/docs/devtools/javascript/background-services/?utm_source=devtools';
                switch(this.serviceName){
                    case "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */ :
                        url += '#fetch';
                        break;
                    case "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */ :
                        url += '#sync';
                        break;
                    case "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */ :
                        url += '#push';
                        break;
                    case "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */ :
                        url += '#notifications';
                        break;
                    default:
                        break;
                }
                return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.XLink.XLink.create(url, i18nString(UIStrings.learnMore), undefined, undefined, 'learn-more');
            }
        },
        {
            key: "showPreview",
            value: function showPreview(dataNode) {
                if (this.selectedEventNode && this.selectedEventNode === dataNode) {
                    return;
                }
                this.selectedEventNode = dataNode;
                if (this.preview) {
                    this.preview.detach();
                }
                if (this.selectedEventNode) {
                    this.preview = this.selectedEventNode.createPreview();
                    this.preview.show(this.previewPanel.contentElement);
                    return;
                }
                this.preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
                this.preview.contentElement.classList.add('background-service-preview', 'fill');
                var centered = this.preview.contentElement.createChild('div');
                if (this.dataGrid.rootNode().children.length) {
                    // Inform users that grid entries are clickable.
                    centered.createChild('p').textContent = i18nString(UIStrings.selectAnEntryToViewMetadata);
                } else if (this.recordButton.isToggled()) {
                    // Inform users that we are recording/waiting for events.
                    var featureName = BackgroundServiceView.getUIString(this.serviceName).toLowerCase();
                    centered.createChild('p').textContent = i18nString(UIStrings.recordingSActivity, {
                        PH1: featureName
                    });
                    centered.createChild('p').textContent = i18nString(UIStrings.devtoolsWillRecordAllSActivity, {
                        PH1: featureName
                    });
                } else {
                    var landingRecordButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar.createActionButton(this.recordAction);
                    var recordKey = document.createElement('b');
                    recordKey.classList.add('background-service-shortcut');
                    recordKey.textContent = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction('background-service.toggle-recording')[0].title();
                    var inlineButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.UIUtils.createInlineButton(landingRecordButton);
                    inlineButton.classList.add('background-service-record-inline-button');
                    centered.createChild('p').appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.clickTheRecordButtonSOrHitSTo, {
                        PH1: inlineButton,
                        PH2: recordKey
                    }));
                    centered.appendChild(this.createLearnMoreLink());
                }
                this.preview.show(this.previewPanel.contentElement);
            }
        },
        {
            key: "saveToFile",
            value: /**
     * Saves all currently displayed events in a file (JSON format).
     */ function saveToFile() {
                var _this = this;
                return _async_to_generator(function() {
                    var fileName, stream, accepted, events;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                fileName = "".concat(_this.serviceName, "-").concat(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DateUtilities.toISO8601Compact(new Date()), ".json");
                                stream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.FileUtils.FileOutputStream();
                                return [
                                    4,
                                    stream.open(fileName)
                                ];
                            case 1:
                                accepted = _state.sent();
                                if (!accepted) {
                                    return [
                                        2
                                    ];
                                }
                                events = _this.model.getEvents(_this.serviceName).filter(function(event) {
                                    return _this.acceptEvent(event);
                                });
                                return [
                                    4,
                                    stream.write(JSON.stringify(events, undefined, 2))
                                ];
                            case 2:
                                _state.sent();
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
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(BackgroundServiceView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _ui_legacy_emptyWidget_css_js__WEBPACK_IMPORTED_MODULE_5__["default"],
                    _backgroundServiceView_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
            }
        }
    ], [
        {
            key: "getUIString",
            value: function getUIString(serviceName) {
                switch(serviceName){
                    case "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */ :
                        return i18nString(UIStrings.backgroundFetch);
                    case "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */ :
                        return i18nString(UIStrings.backgroundSync);
                    case "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */ :
                        return i18nString(UIStrings.pushMessaging);
                    case "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */ :
                        return i18nString(UIStrings.notifications);
                    case "paymentHandler" /* Protocol.BackgroundService.ServiceName.PaymentHandler */ :
                        return i18nString(UIStrings.paymentHandler);
                    case "periodicBackgroundSync" /* Protocol.BackgroundService.ServiceName.PeriodicBackgroundSync */ :
                        return i18nString(UIStrings.periodicBackgroundSync);
                    default:
                        return '';
                }
            }
        }
    ]);
    return BackgroundServiceView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox);
var EventDataNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(EventDataNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(EventDataNode);
    function EventDataNode(data, eventMetadata) {
        _class_call_check(this, EventDataNode);
        var _this;
        _this = _super.call(this, data);
        _define_property(_assert_this_initialized(_this), "eventMetadata", void 0);
        _this.eventMetadata = eventMetadata.sort(function(m1, m2) {
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.compare(m1.key, m2.key);
        });
        return _this;
    }
    _create_class(EventDataNode, [
        {
            key: "createPreview",
            value: function createPreview() {
                var preview = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Widget.VBox();
                preview.element.classList.add('background-service-metadata');
                preview.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.section('metadata')));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.eventMetadata[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        var div = document.createElement('div');
                        div.classList.add('background-service-metadata-entry');
                        div.createChild('div', 'background-service-metadata-name').textContent = entry.key + ': ';
                        if (entry.value) {
                            div.createChild('div', 'background-service-metadata-value source-code').textContent = entry.value;
                        } else {
                            div.createChild('div', 'background-service-metadata-value background-service-empty-value').textContent = i18nString(UIStrings.empty);
                        }
                        preview.element.appendChild(div);
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
                if (!preview.element.children.length) {
                    var div1 = document.createElement('div');
                    div1.classList.add('background-service-metadata-entry');
                    div1.createChild('div', 'background-service-metadata-name background-service-empty-value').textContent = i18nString(UIStrings.noMetadataForThisEvent);
                    preview.element.appendChild(div1);
                }
                return preview;
            }
        }
    ]);
    return EventDataNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_4__.DataGrid.DataGridNode);
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                var view = context.flavor(BackgroundServiceView);
                switch(actionId){
                    case 'background-service.toggle-recording':
                        {
                            if (!view) {
                                throw new Error('BackgroundServiceView instance is missing');
                            }
                            view.toggleRecording();
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=BackgroundServiceView.js.map
();


}),
"./panels/application/backgroundServiceView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.background-service-toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: var(--sys-color-divider);\n}\n\n.data-grid {\n  flex: auto;\n  border: none;\n}\n\n[slot="insertion-point-main"] {\n  overflow: auto;\n}\n\n.background-service-preview {\n  position: absolute;\n  background-color: var(--sys-color-cdt-base-container);\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n  font-size: 13px;\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.background-service-preview > div {\n  max-width: 450px;\n  margin: 10px;\n  text-align: center;\n}\n\n.background-service-preview > div > p {\n  flex: none;\n  white-space: pre-line;\n}\n\n.background-service-shortcut {\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.background-service-metadata {\n  padding-left: 5px;\n  padding-top: 10px;\n}\n\n.background-service-metadata-entry {\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.background-service-metadata-name {\n  color: var(--sys-color-on-surface-subtle);\n  display: inline-block;\n  margin-right: 0.25em;\n  font-weight: bold;\n}\n\n.background-service-metadata-value {\n  display: inline;\n  margin-right: 1em;\n  white-space: pre-wrap;\n  word-break: break-all;\n  user-select: text;\n}\n\n.background-service-empty-value {\n  color: var(--sys-color-state-disabled);\n  font-style: italic;\n}\n\n.background-service-record-inline-button {\n  margin-bottom: 6px;\n}\n\n/*# sourceURL=backgroundServiceView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);