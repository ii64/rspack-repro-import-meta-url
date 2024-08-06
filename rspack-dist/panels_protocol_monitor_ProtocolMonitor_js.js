"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_protocol_monitor_ProtocolMonitor_js"], {
"./panels/protocol_monitor/ProtocolMonitor.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CommandAutocompleteSuggestionProvider: function() { return CommandAutocompleteSuggestionProvider; },
  EditorWidget: function() { return EditorWidget; },
  InfoWidget: function() { return InfoWidget; },
  ProtocolMonitorDataGrid: function() { return ProtocolMonitorDataGrid; },
  ProtocolMonitorImpl: function() { return ProtocolMonitorImpl; },
  buildProtocolMetadata: function() { return buildProtocolMetadata; },
  parseCommandInput: function() { return parseCommandInput; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./ui/components/data_grid/data_grid.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/components.js */ "./panels/protocol_monitor/components/components.js");
/* harmony import */var _protocolMonitor_css_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./protocolMonitor.css.js */ "./panels/protocol_monitor/protocolMonitor.css.js");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
function _templateObject() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
















var UIStrings = {
    /**
     *@description Text for one or a group of functions
     */ method: 'Method',
    /**
     * @description Text in Protocol Monitor. Title for a table column which shows in which direction
     * the particular protocol message was travelling. Values in this column will either be 'sent' or
     * 'received'.
     */ type: 'Type',
    /**
     * @description Text in Protocol Monitor of the Protocol Monitor tab. Noun relating to a network request.
     */ request: 'Request',
    /**
     *@description Title of a cell content in protocol monitor. A Network response refers to the act of acknowledging a
    network request. Should not be confused with answer.
     */ response: 'Response',
    /**
     *@description Text for timestamps of items
     */ timestamp: 'Timestamp',
    /**
     *@description Title of a cell content in protocol monitor. It describes the time between sending a request and receiving a response.
     */ elapsedTime: 'Elapsed time',
    /**
     *@description Text in Protocol Monitor of the Protocol Monitor tab
     */ target: 'Target',
    /**
     *@description Text to record a series of actions for analysis
     */ record: 'Record',
    /**
     *@description Text to clear everything
     */ clearAll: 'Clear all',
    /**
     *@description Text to filter result items
     */ filter: 'Filter',
    /**
     *@description Text for the documentation of something
     */ documentation: 'Documentation',
    /**
     *@description Text to open the CDP editor with the selected command
     */ editAndResend: 'Edit and resend',
    /**
     *@description Cell text content in Protocol Monitor of the Protocol Monitor tab
     *@example {30} PH1
     */ sMs: '{PH1} ms',
    /**
     *@description Text in Protocol Monitor of the Protocol Monitor tab
     */ noMessageSelected: 'No message selected',
    /**
     *@description Text in Protocol Monitor for the save button
     */ save: 'Save',
    /**
     *@description Text in Protocol Monitor to describe the sessions column
     */ session: 'Session',
    /**
     *@description A placeholder for an input in Protocol Monitor. The input accepts commands that are sent to the backend on Enter. CDP stands for Chrome DevTools Protocol.
     */ sendRawCDPCommand: 'Send a raw `CDP` command',
    /**
     * @description A tooltip text for the input in the Protocol Monitor panel. The tooltip describes what format is expected.
     */ sendRawCDPCommandExplanation: 'Format: `\'Domain.commandName\'` for a command without parameters, or `\'{"command":"Domain.commandName", "parameters": {...}}\'` as a JSON object for a command with parameters. `\'cmd\'`/`\'method\'` and `\'args\'`/`\'params\'`/`\'arguments\'` are also supported as alternative keys for the `JSON` object.',
    /**
     * @description A label for a select input that allows selecting a CDP target to send the commands to.
     */ selectTarget: 'Select a target',
    /**
     * @description Tooltip for the the console sidebar toggle in the Console panel. Command to
     * open/show the sidebar.
     */ showCDPCommandEditor: 'Show CDP command editor',
    /**
     * @description Tooltip for the the console sidebar toggle in the Console panel. Command to
     * open/show the sidebar.
     */ hideCDPCommandEditor: 'Hide  CDP command editor',
    /**
     * @description Screen reader announcement when the sidebar is shown in the Console panel.
     */ CDPCommandEditorShown: 'CDP command editor shown',
    /**
     * @description Screen reader announcement when the sidebar is hidden in the Console panel.
     */ CDPCommandEditorHidden: 'CDP command editor hidden'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/protocol_monitor/ProtocolMonitor.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var timeRenderer = function(value) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html(_templateObject(), i18nString(UIStrings.sMs, {
        PH1: String(value)
    }));
};
var buildProtocolMetadata = function(domains) {
    var metadataByCommand = new Map();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = domains[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var domain = _step.value;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = Object.keys(domain.metadata)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var command = _step1.value;
                    metadataByCommand.set(command, domain.metadata[command]);
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
    return metadataByCommand;
};
var metadataByCommand = buildProtocolMetadata(_core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.inspectorBackend.agentPrototypes.values());
var typesByName = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.inspectorBackend.typeMap;
var enumsByName = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.inspectorBackend.enumMap;
var _commandAutocompleteSuggestionProvider = /*#__PURE__*/ new WeakMap(), _selectedTargetId = /*#__PURE__*/ new WeakMap(), _commandInput = /*#__PURE__*/ new WeakMap(), _createCommandInput = /*#__PURE__*/ new WeakSet(), _createTargetSelector = /*#__PURE__*/ new WeakSet();
var ProtocolMonitorDataGrid = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(ProtocolMonitorDataGrid, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(ProtocolMonitorDataGrid);
    function ProtocolMonitorDataGrid(splitWidget) {
        _class_call_check(this, ProtocolMonitorDataGrid);
        var _this;
        var _bottomToolbar_element;
        _this = _super.call(this, true);
        _class_private_method_init(_assert_this_initialized(_this), _createCommandInput);
        _class_private_method_init(_assert_this_initialized(_this), _createTargetSelector);
        _define_property(_assert_this_initialized(_this), "started", void 0);
        _define_property(_assert_this_initialized(_this), "startTime", void 0);
        _define_property(_assert_this_initialized(_this), "requestTimeForId", void 0);
        _define_property(_assert_this_initialized(_this), "dataGridRowForId", void 0);
        _define_property(_assert_this_initialized(_this), "infoWidget", void 0);
        _define_property(_assert_this_initialized(_this), "dataGridIntegrator", void 0);
        _define_property(_assert_this_initialized(_this), "filterParser", void 0);
        _define_property(_assert_this_initialized(_this), "suggestionBuilder", void 0);
        _define_property(_assert_this_initialized(_this), "textFilterUI", void 0);
        _define_property(_assert_this_initialized(_this), "selector", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _commandAutocompleteSuggestionProvider, {
            writable: true,
            value: new CommandAutocompleteSuggestionProvider()
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedTargetId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _commandInput, {
            writable: true,
            value: void 0
        });
        _this.started = false;
        _this.startTime = 0;
        _this.dataGridRowForId = new Map();
        _this.requestTimeForId = new Map();
        var topToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.Toolbar('protocol-monitor-toolbar', _this.contentElement);
        topToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.toolbar('top')));
        _this.contentElement.classList.add('protocol-monitor');
        var recordButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarToggle(i18nString(UIStrings.record), 'record-start', 'record-stop', 'protocol-monitor.toggle-recording');
        recordButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            recordButton.setToggled(!recordButton.isToggled());
            _this.setRecording(recordButton.isToggled());
        });
        recordButton.enableToggleWithRedColor();
        topToolbar.appendToolbarItem(recordButton);
        recordButton.setToggled(true);
        var clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear', undefined, 'protocol-monitor.clear-all');
        clearButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            _this.dataGridIntegrator.update(_object_spread_props(_object_spread({}, _this.dataGridIntegrator.data()), {
                rows: []
            }));
            _this.infoWidget.render(null);
        });
        topToolbar.appendToolbarItem(clearButton);
        var saveButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.save), 'download', undefined, 'protocol-monitor.save');
        saveButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            void _this.saveAsFile();
        });
        topToolbar.appendToolbarItem(saveButton);
        _this.selector = _class_private_method_get(_this, _createTargetSelector, createTargetSelector).call(_assert_this_initialized(_this));
        _this.infoWidget = new InfoWidget();
        var dataGridInitialData = {
            paddingRowsCount: 100,
            showScrollbar: true,
            columns: [
                {
                    id: 'type',
                    title: i18nString(UIStrings.type),
                    sortable: true,
                    widthWeighting: 1,
                    visible: true,
                    hideable: true,
                    styles: {
                        'text-align': 'center'
                    }
                },
                {
                    id: 'method',
                    title: i18nString(UIStrings.method),
                    sortable: false,
                    widthWeighting: 5,
                    visible: true,
                    hideable: false
                },
                {
                    id: 'request',
                    title: i18nString(UIStrings.request),
                    sortable: false,
                    widthWeighting: 5,
                    visible: true,
                    hideable: true
                },
                {
                    id: 'response',
                    title: i18nString(UIStrings.response),
                    sortable: false,
                    widthWeighting: 5,
                    visible: true,
                    hideable: true
                },
                {
                    id: 'elapsed-time',
                    title: i18nString(UIStrings.elapsedTime),
                    sortable: true,
                    widthWeighting: 2,
                    visible: false,
                    hideable: true
                },
                {
                    id: 'timestamp',
                    title: i18nString(UIStrings.timestamp),
                    sortable: true,
                    widthWeighting: 5,
                    visible: false,
                    hideable: true
                },
                {
                    id: 'target',
                    title: i18nString(UIStrings.target),
                    sortable: true,
                    widthWeighting: 5,
                    visible: false,
                    hideable: true
                },
                {
                    id: 'session',
                    title: i18nString(UIStrings.session),
                    sortable: true,
                    widthWeighting: 5,
                    visible: false,
                    hideable: true
                }
            ],
            rows: [],
            contextMenus: {
                bodyRow: function(menu, columns, row) {
                    var methodColumn = _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(row, 'method');
                    var typeColumn = _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(row, 'type');
                    /**
                     * You can click the "Edit and resend" item in the context menu to be
                     * taken to the CDP editor with the filled with the selected command.
                     */ menu.editSection().appendItem(i18nString(UIStrings.editAndResend), function() {
                        if (!methodColumn.value) {
                            return;
                        }
                        var parameters = _this.infoWidget.request;
                        var targetId = _this.infoWidget.targetId;
                        var command = String(methodColumn.value);
                        if (splitWidget.showMode() === "OnlyMain" /* UI.SplitWidget.ShowMode.OnlyMain */ ) {
                            splitWidget.toggleSidebar();
                        }
                        _this.dispatchEventToListeners("CommandChange" /* Events.CommandChange */ , {
                            command: command,
                            parameters: parameters,
                            targetId: targetId
                        });
                    }, {
                        jslogContext: 'edit-and-resend',
                        disabled: typeColumn.title !== 'sent'
                    });
                    /**
                     * You can click the "Filter" item in the context menu to filter the
                     * protocol monitor entries to those that match the method of the
                     * current row.
                     */ menu.editSection().appendItem(i18nString(UIStrings.filter), function() {
                        var methodColumn = _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(row, 'method');
                        _this.textFilterUI.setValue("method:".concat(methodColumn.value), true);
                    }, {
                        jslogContext: 'filter'
                    });
                    /**
                     * You can click the "Documentation" item in the context menu to be
                     * taken to the CDP Documentation site entry for the given method.
                     */ menu.footerSection().appendItem(i18nString(UIStrings.documentation), function() {
                        if (!methodColumn.value) {
                            return;
                        }
                        var _String_split = _sliced_to_array(String(methodColumn.value).split('.'), 2), domain = _String_split[0], method = _String_split[1];
                        var type = typeColumn.title === 'sent' ? 'method' : 'event';
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab("https://chromedevtools.github.io/devtools-protocol/tot/".concat(domain, "#").concat(type, "-").concat(method));
                    }, {
                        jslogContext: 'documentation'
                    });
                }
            }
        };
        _this.dataGridIntegrator = new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridControllerIntegrator.DataGridControllerIntegrator(dataGridInitialData);
        _this.dataGridIntegrator.dataGrid.addEventListener('cellfocused', function(event) {
            var focusedRow = event.data.row;
            var infoWidgetData = {
                request: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'request'),
                response: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'response'),
                target: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'target'),
                type: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'type').title,
                selectedTab: event.data.cell.columnId === 'request' ? 'request' : event.data.cell.columnId === 'response' ? 'response' : undefined
            };
            _this.infoWidget.render(infoWidgetData);
        });
        _this.dataGridIntegrator.dataGrid.addEventListener('newuserfiltertext', function(event) {
            _this.textFilterUI.setValue(event.data.filterText, /* notify listeners */ true);
        });
        var split = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.SplitWidget.SplitWidget(true, true, 'protocol-monitor-panel-split', 250);
        split.show(_this.contentElement);
        split.setMainWidget(_this.dataGridIntegrator);
        split.setSidebarWidget(_this.infoWidget);
        var keys = [
            'method',
            'request',
            'response',
            'type',
            'target',
            'session'
        ];
        _this.filterParser = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.TextUtils.FilterParser(keys);
        _this.suggestionBuilder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.FilterSuggestionBuilder.FilterSuggestionBuilder(keys);
        _this.textFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarFilter(undefined, 1, .2, '', _this.suggestionBuilder.completions.bind(_this.suggestionBuilder), true);
        _this.textFilterUI.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , function(event) {
            var query = event.data;
            var filters = _this.filterParser.parse(query);
            _this.dataGridIntegrator.update(_object_spread_props(_object_spread({}, _this.dataGridIntegrator.data()), {
                filters: filters
            }));
        });
        var bottomToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.Toolbar('protocol-monitor-bottom-toolbar', _this.contentElement);
        bottomToolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.toolbar('bottom')));
        bottomToolbar.appendToolbarItem(splitWidget.createShowHideSidebarButton(i18nString(UIStrings.showCDPCommandEditor), i18nString(UIStrings.hideCDPCommandEditor), i18nString(UIStrings.CDPCommandEditorShown), i18nString(UIStrings.CDPCommandEditorHidden), 'protocol-monitor.toggle-command-editor'));
        _class_private_field_set(_assert_this_initialized(_this), _commandInput, _class_private_method_get(_this, _createCommandInput, createCommandInput).call(_assert_this_initialized(_this)));
        bottomToolbar.appendToolbarItem(_class_private_field_get(_assert_this_initialized(_this), _commandInput));
        bottomToolbar.appendToolbarItem(_this.selector);
        var shadowRoot = (_bottomToolbar_element = bottomToolbar.element) === null || _bottomToolbar_element === void 0 ? void 0 : _bottomToolbar_element.shadowRoot;
        var inputBar = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('.toolbar-input');
        var tabSelector = shadowRoot === null || shadowRoot === void 0 ? void 0 : shadowRoot.querySelector('.toolbar-select-container');
        var populateToolbarInput = function() {
            var editorWidget = splitWidget.sidebarWidget();
            if (!_instanceof(editorWidget, EditorWidget)) {
                return;
            }
            var commandJson = editorWidget.jsonEditor.getCommandJson();
            var targetId = editorWidget.jsonEditor.targetId;
            if (targetId) {
                var selectedIndex = _this.selector.options().findIndex(function(option) {
                    return option.value === targetId;
                });
                if (selectedIndex !== -1) {
                    _this.selector.setSelectedIndex(selectedIndex);
                    _class_private_field_set(_assert_this_initialized(_this), _selectedTargetId, targetId);
                }
            }
            if (commandJson) {
                _class_private_field_get(_this, _commandInput).setValue(commandJson);
            }
        };
        splitWidget.addEventListener("ShowModeChanged" /* UI.SplitWidget.Events.ShowModeChanged */ , function(event) {
            if (event.data === 'OnlyMain') {
                populateToolbarInput();
                inputBar === null || inputBar === void 0 ? void 0 : inputBar.setAttribute('style', 'display:flex; flex-grow: 1');
                tabSelector === null || tabSelector === void 0 ? void 0 : tabSelector.setAttribute('style', 'display:flex');
            } else {
                var _parseCommandInput = parseCommandInput(_class_private_field_get(_this, _commandInput).value()), command = _parseCommandInput.command, parameters = _parseCommandInput.parameters;
                _this.dispatchEventToListeners("CommandChange" /* Events.CommandChange */ , {
                    command: command,
                    parameters: parameters,
                    targetId: _class_private_field_get(_assert_this_initialized(_this), _selectedTargetId)
                });
                inputBar === null || inputBar === void 0 ? void 0 : inputBar.setAttribute('style', 'display:none');
                tabSelector === null || tabSelector === void 0 ? void 0 : tabSelector.setAttribute('style', 'display:none');
            }
        });
        topToolbar.appendToolbarItem(_this.textFilterUI);
        return _this;
    }
    _create_class(ProtocolMonitorDataGrid, [
        {
            key: "onCommandSend",
            value: function onCommandSend(command, parameters, target) {
                var test = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.test;
                var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance();
                var selectedTarget = target ? targetManager.targetById(target) : null;
                var sessionId = selectedTarget ? selectedTarget.sessionId : '';
                // TS thinks that properties are read-only because
                // in TS test is defined as a namespace.
                // @ts-ignore
                test.sendRawMessage(command, parameters, function() {}, sessionId);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                if (this.started) {
                    return;
                }
                this.registerCSSFiles([
                    _protocolMonitor_css_js__WEBPACK_IMPORTED_MODULE_15__["default"]
                ]);
                this.started = true;
                this.startTime = Date.now();
                this.setRecording(true);
            }
        },
        {
            key: "setRecording",
            value: function setRecording(recording) {
                var test = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.test;
                if (recording) {
                    // TODO: TS thinks that properties are read-only because
                    // in TS test is defined as a namespace.
                    // @ts-ignore
                    test.onMessageSent = this.messageSent.bind(this);
                    // @ts-ignore
                    test.onMessageReceived = this.messageReceived.bind(this);
                } else {
                    // @ts-ignore
                    test.onMessageSent = null;
                    // @ts-ignore
                    test.onMessageReceived = null;
                }
            }
        },
        {
            key: "targetToString",
            value: function targetToString(target) {
                if (!target) {
                    return '';
                }
                return target.decorateLabel("".concat(target.name(), " ").concat(target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().rootTarget() ? '' : target.id()));
            }
        },
        {
            key: "messageReceived",
            value: function messageReceived(message, target) {
                var _this = this;
                if ('id' in message && message.id) {
                    var existingRow = this.dataGridRowForId.get(message.id);
                    if (!existingRow) {
                        return;
                    }
                    var allExistingRows = this.dataGridIntegrator.data().rows;
                    var matchingExistingRowIndex = allExistingRows.findIndex(function(r) {
                        return existingRow === r;
                    });
                    var newRowWithUpdate = _object_spread_props(_object_spread({}, existingRow), {
                        cells: existingRow.cells.map(function(cell) {
                            if (cell.columnId === 'response') {
                                return _object_spread_props(_object_spread({}, cell), {
                                    value: JSON.stringify(message.result || message.error)
                                });
                            }
                            if (cell.columnId === 'elapsed-time') {
                                var requestTime = _this.requestTimeForId.get(message.id);
                                if (requestTime) {
                                    return _object_spread_props(_object_spread({}, cell), {
                                        value: Date.now() - requestTime,
                                        renderer: timeRenderer
                                    });
                                }
                            }
                            return cell;
                        })
                    });
                    var newRowsArray = _to_consumable_array(this.dataGridIntegrator.data().rows);
                    newRowsArray[matchingExistingRowIndex] = newRowWithUpdate;
                    // Now we've updated the message, it won't be updated again, so we can delete it from the tracking map.
                    this.dataGridRowForId.delete(message.id);
                    this.dataGridIntegrator.update(_object_spread_props(_object_spread({}, this.dataGridIntegrator.data()), {
                        rows: newRowsArray
                    }));
                    return;
                }
                var sdkTarget = target;
                var responseIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon();
                responseIcon.data = {
                    iconName: 'arrow-down',
                    color: 'var(--icon-request)',
                    width: '16px',
                    height: '16px'
                };
                var newRow = {
                    cells: [
                        {
                            columnId: 'method',
                            value: message.method,
                            title: message.method
                        },
                        {
                            columnId: 'request',
                            value: '',
                            renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer
                        },
                        {
                            columnId: 'response',
                            value: JSON.stringify(message.params),
                            renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer
                        },
                        {
                            columnId: 'timestamp',
                            value: Date.now() - this.startTime,
                            renderer: timeRenderer
                        },
                        {
                            columnId: 'elapsed-time',
                            value: ''
                        },
                        {
                            columnId: 'type',
                            value: responseIcon,
                            title: 'received',
                            renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.iconRenderer
                        },
                        {
                            columnId: 'target',
                            value: this.targetToString(sdkTarget)
                        },
                        {
                            columnId: 'session',
                            value: message.sessionId || ''
                        }
                    ],
                    hidden: false
                };
                this.dataGridIntegrator.update(_object_spread_props(_object_spread({}, this.dataGridIntegrator.data()), {
                    rows: this.dataGridIntegrator.data().rows.concat([
                        newRow
                    ])
                }));
            }
        },
        {
            key: "messageSent",
            value: function messageSent(message, target) {
                var sdkTarget = target;
                var requestResponseIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon();
                requestResponseIcon.data = {
                    iconName: 'arrow-up-down',
                    color: 'var(--icon-request-response)',
                    width: '16px',
                    height: '16px'
                };
                var newRow = {
                    styles: {
                        '--override-data-grid-row-background-color': 'var(--sys-color-surface3)'
                    },
                    cells: [
                        {
                            columnId: 'method',
                            value: message.method,
                            title: message.method
                        },
                        {
                            columnId: 'request',
                            value: JSON.stringify(message.params),
                            renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer
                        },
                        {
                            columnId: 'response',
                            value: '(pending)',
                            renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer
                        },
                        {
                            columnId: 'timestamp',
                            value: Date.now() - this.startTime,
                            renderer: timeRenderer
                        },
                        {
                            columnId: 'elapsed-time',
                            value: '(pending)'
                        },
                        {
                            columnId: 'type',
                            value: requestResponseIcon,
                            title: 'sent',
                            renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.iconRenderer
                        },
                        {
                            columnId: 'target',
                            value: String(sdkTarget === null || sdkTarget === void 0 ? void 0 : sdkTarget.id())
                        },
                        {
                            columnId: 'session',
                            value: message.sessionId || ''
                        }
                    ],
                    hidden: false
                };
                this.requestTimeForId.set(message.id, Date.now());
                this.dataGridRowForId.set(message.id, newRow);
                this.dataGridIntegrator.update(_object_spread_props(_object_spread({}, this.dataGridIntegrator.data()), {
                    rows: this.dataGridIntegrator.data().rows.concat([
                        newRow
                    ])
                }));
            }
        },
        {
            key: "saveAsFile",
            value: function saveAsFile() {
                var _this = this;
                return _async_to_generator(function() {
                    var now, fileName, stream, accepted, rowEntries, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, row, rowEntry;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                now = new Date();
                                fileName = 'ProtocolMonitor-' + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(now) + '.json';
                                stream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.FileOutputStream();
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
                                rowEntries = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this.dataGridIntegrator.data().rows[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        row = _step.value;
                                        rowEntry = Object.fromEntries(row.cells.map(function(cell) {
                                            return [
                                                cell.columnId,
                                                cell.value
                                            ];
                                        }));
                                        rowEntries.push(rowEntry);
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
                                void stream.write(JSON.stringify(rowEntries, null, '  '));
                                void stream.close();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ProtocolMonitorDataGrid;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox));
function createCommandInput() {
    var _this = this;
    var placeholder = i18nString(UIStrings.sendRawCDPCommand);
    var accessiblePlaceholder = placeholder;
    var growFactor = 1;
    var shrinkFactor = 0.2;
    var tooltip = i18nString(UIStrings.sendRawCDPCommandExplanation);
    var input = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarInput(placeholder, accessiblePlaceholder, growFactor, shrinkFactor, tooltip, _class_private_field_get(this, _commandAutocompleteSuggestionProvider).buildTextPromptCompletions, false, 'command-input');
    input.addEventListener("EnterPressed" /* UI.Toolbar.ToolbarInput.Event.EnterPressed */ , function() {
        _class_private_field_get(_this, _commandAutocompleteSuggestionProvider).addEntry(input.value());
        var _parseCommandInput = parseCommandInput(input.value()), command = _parseCommandInput.command, parameters = _parseCommandInput.parameters;
        _this.onCommandSend(command, parameters, _class_private_field_get(_this, _selectedTargetId));
    });
    return input;
}
function createTargetSelector() {
    var _this = this;
    var selector = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarComboBox(function() {
        var _selector_selectedOption;
        _class_private_field_set(_this, _selectedTargetId, (_selector_selectedOption = selector.selectedOption()) === null || _selector_selectedOption === void 0 ? void 0 : _selector_selectedOption.value);
    }, i18nString(UIStrings.selectTarget), undefined, 'target-selector');
    selector.setMaxWidth(120);
    var targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance();
    var syncTargets = function() {
        selector.removeOptions();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = targetManager.targets()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var target = _step.value;
                selector.createOption("".concat(target.name(), " (").concat(target.inspectedURL(), ")"), target.id());
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
    };
    targetManager.addEventListener("AvailableTargetsChanged" /* SDK.TargetManager.Events.AvailableTargetsChanged */ , syncTargets);
    syncTargets();
    return selector;
}
var _split = /*#__PURE__*/ new WeakMap(), _editorWidget = /*#__PURE__*/ new WeakMap(), _protocolMonitorDataGrid = /*#__PURE__*/ new WeakMap(), // This width corresponds to the optimal width to use the editor properly
// It is randomly chosen
_sideBarMinWidth = /*#__PURE__*/ new WeakMap();
var ProtocolMonitorImpl = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ProtocolMonitorImpl, _UI_Widget_VBox);
    var _super = _create_super(ProtocolMonitorImpl);
    function ProtocolMonitorImpl() {
        _class_call_check(this, ProtocolMonitorImpl);
        var _this;
        _this = _super.call(this, true);
        _class_private_field_init(_assert_this_initialized(_this), _split, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _editorWidget, {
            writable: true,
            value: new EditorWidget()
        });
        _class_private_field_init(_assert_this_initialized(_this), _protocolMonitorDataGrid, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _sideBarMinWidth, {
            writable: true,
            value: 400
        });
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.panel('protocol-monitor').track({
            resize: true
        })));
        _class_private_field_set(_assert_this_initialized(_this), _split, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.SplitWidget.SplitWidget(true, false, 'protocol-monitor-split-container', _class_private_field_get(_assert_this_initialized(_this), _sideBarMinWidth)));
        _class_private_field_get(_this, _split).show(_this.contentElement);
        _class_private_field_set(_assert_this_initialized(_this), _protocolMonitorDataGrid, new ProtocolMonitorDataGrid(_class_private_field_get(_assert_this_initialized(_this), _split)));
        _class_private_field_get(_this, _protocolMonitorDataGrid).addEventListener("CommandChange" /* Events.CommandChange */ , function(event) {
            _class_private_field_get(_this, _editorWidget).jsonEditor.displayCommand(event.data.command, event.data.parameters, event.data.targetId);
        });
        _class_private_field_get(_this, _editorWidget).element.style.overflow = 'hidden';
        _class_private_field_get(_this, _split).setMainWidget(_class_private_field_get(_assert_this_initialized(_this), _protocolMonitorDataGrid));
        _class_private_field_get(_this, _split).setSidebarWidget(_class_private_field_get(_assert_this_initialized(_this), _editorWidget));
        _class_private_field_get(_this, _split).hideSidebar(true);
        _class_private_field_get(_this, _editorWidget).addEventListener("CommandSent" /* Events.CommandSent */ , function(event) {
            _class_private_field_get(_this, _protocolMonitorDataGrid).onCommandSend(event.data.command, event.data.parameters, event.data.targetId);
        });
        return _this;
    }
    return ProtocolMonitorImpl;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox);
var _maxHistorySize = /*#__PURE__*/ new WeakMap(), _commandHistory = /*#__PURE__*/ new WeakMap();
var CommandAutocompleteSuggestionProvider = /*#__PURE__*/ function() {
    "use strict";
    function CommandAutocompleteSuggestionProvider(maxHistorySize) {
        _class_call_check(this, CommandAutocompleteSuggestionProvider);
        _class_private_field_init(this, _maxHistorySize, {
            writable: true,
            value: 200
        });
        _class_private_field_init(this, _commandHistory, {
            writable: true,
            value: new Set()
        });
        var _this = this;
        _define_property(this, "buildTextPromptCompletions", function() {
            var _ref = _async_to_generator(function(expression, prefix, force) {
                var _newestToOldest, newestToOldest;
                return _ts_generator(this, function(_state) {
                    if (!prefix && !force && expression) {
                        return [
                            2,
                            []
                        ];
                    }
                    newestToOldest = _to_consumable_array(_class_private_field_get(_this, _commandHistory)).reverse();
                    (_newestToOldest = newestToOldest).push.apply(_newestToOldest, _to_consumable_array(metadataByCommand.keys()));
                    return [
                        2,
                        newestToOldest.filter(function(cmd) {
                            return cmd.startsWith(prefix);
                        }).map(function(text) {
                            return {
                                text: text
                            };
                        })
                    ];
                });
            });
            return function(expression, prefix, force) {
                return _ref.apply(this, arguments);
            };
        }());
        if (maxHistorySize !== undefined) {
            _class_private_field_set(this, _maxHistorySize, maxHistorySize);
        }
    }
    _create_class(CommandAutocompleteSuggestionProvider, [
        {
            key: "addEntry",
            value: function addEntry(value) {
                if (_class_private_field_get(this, _commandHistory).has(value)) {
                    _class_private_field_get(this, _commandHistory).delete(value);
                }
                _class_private_field_get(this, _commandHistory).add(value);
                if (_class_private_field_get(this, _commandHistory).size > _class_private_field_get(this, _maxHistorySize)) {
                    var earliestEntry = _class_private_field_get(this, _commandHistory).values().next().value;
                    _class_private_field_get(this, _commandHistory).delete(earliestEntry);
                }
            }
        }
    ]);
    return CommandAutocompleteSuggestionProvider;
}();
var InfoWidget = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(InfoWidget, _UI_Widget_VBox);
    var _super = _create_super(InfoWidget);
    function InfoWidget() {
        _class_call_check(this, InfoWidget);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "tabbedPane", void 0);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "targetId", '');
        _this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TabbedPane.TabbedPane();
        _this.tabbedPane.appendTab('request', i18nString(UIStrings.request), new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.Widget());
        _this.tabbedPane.appendTab('response', i18nString(UIStrings.response), new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.Widget());
        _this.tabbedPane.show(_this.contentElement);
        _this.tabbedPane.selectTab('response');
        _this.request = {};
        _this.render(null);
        return _this;
    }
    _create_class(InfoWidget, [
        {
            key: "render",
            value: function render(data) {
                if (!data || !data.request || !data.response || !data.target) {
                    this.tabbedPane.changeTabView('request', new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noMessageSelected)));
                    this.tabbedPane.changeTabView('response', new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noMessageSelected)));
                    return;
                }
                var requestEnabled = data && data.type && data.type === 'sent';
                this.tabbedPane.setTabEnabled('request', Boolean(requestEnabled));
                if (!requestEnabled) {
                    this.tabbedPane.selectTab('response');
                }
                var requestParsed = JSON.parse(String(data.request.value) || 'null');
                this.request = requestParsed;
                this.targetId = String(data.target.value);
                this.tabbedPane.changeTabView('request', _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.JSONView.JSONView.createViewSync(requestParsed));
                var responseParsed = data.response.value === '(pending)' ? null : JSON.parse(String(data.response.value) || 'null');
                this.tabbedPane.changeTabView('response', _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.JSONView.JSONView.createViewSync(responseParsed));
                if (data.selectedTab) {
                    this.tabbedPane.selectTab(data.selectedTab);
                }
            }
        }
    ]);
    return InfoWidget;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox);
var EditorWidget = /*#__PURE__*/ function(_Common_ObjectWrapper_eventMixin) {
    "use strict";
    _inherits(EditorWidget, _Common_ObjectWrapper_eventMixin);
    var _super = _create_super(EditorWidget);
    function EditorWidget() {
        _class_call_check(this, EditorWidget);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "jsonEditor", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('command-editor').track({
            resize: true
        })));
        _this.jsonEditor = new _components_components_js__WEBPACK_IMPORTED_MODULE_14__.JSONEditor.JSONEditor();
        _this.jsonEditor.metadataByCommand = metadataByCommand;
        _this.jsonEditor.typesByName = typesByName;
        _this.jsonEditor.enumsByName = enumsByName;
        _this.element.append(_this.jsonEditor);
        _this.jsonEditor.addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_14__.JSONEditor.SubmitEditorEvent.eventName, function(event) {
            _this.dispatchEventToListeners("CommandSent" /* Events.CommandSent */ , event.data);
        });
        return _this;
    }
    return EditorWidget;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox));
function parseCommandInput(input) {
    // If input cannot be parsed as json, we assume it's the command name
    // for a command without parameters. Otherwise, we expect an object
    // with "command"/"method"/"cmd" and "parameters"/"params"/"args"/"arguments" attributes.
    var json = null;
    try {
        json = JSON.parse(input);
    } catch (err) {}
    var command = json ? json.command || json.method || json.cmd || '' : input;
    var parameters = (json === null || json === void 0 ? void 0 : json.parameters) || (json === null || json === void 0 ? void 0 : json.params) || (json === null || json === void 0 ? void 0 : json.args) || (json === null || json === void 0 ? void 0 : json.arguments) || {};
    return {
        command: command,
        parameters: parameters
    };
} //# sourceMappingURL=ProtocolMonitor.js.map


}),
"./panels/protocol_monitor/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  JSONEditor: function() { return /* reexport module object */ _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__; },
  Toolbar: function() { return /* reexport module object */ _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSONEditor.js */ "./panels/protocol_monitor/components/JSONEditor.js");
/* harmony import */var _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.js */ "./panels/protocol_monitor/components/Toolbar.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=components.js.map


}),
"./panels/protocol_monitor/protocolMonitor.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.protocol-monitor .protocol-monitor-toolbar {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.protocol-monitor .protocol-monitor-bottom-toolbar {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n/*# sourceURL=protocolMonitor.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);