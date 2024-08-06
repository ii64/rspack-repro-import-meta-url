"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_ResourceWebSocketFrameView_js"], {
"./panels/network/ResourceWebSocketFrameView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ResourceWebSocketFrameNode: function() { return ResourceWebSocketFrameNode; },
  ResourceWebSocketFrameView: function() { return ResourceWebSocketFrameView; },
  opCodeDescriptions: function() { return opCodeDescriptions; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./panels/network/BinaryResourceView.js");
/* harmony import */var _webSocketFrameView_css_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./webSocketFrameView.css.js */ "./panels/network/webSocketFrameView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2012 Research In Motion Limited. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
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
     *@description Text in Event Source Messages View of the Network panel
     */ data: 'Data',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */ length: 'Length',
    /**
     *@description Text that refers to the time
     */ time: 'Time',
    /**
     *@description Data grid name for Web Socket Frame data grids
     */ webSocketFrame: 'Web Socket Frame',
    /**
     *@description Text to clear everything
     */ clearAll: 'Clear All',
    /**
     *@description Text to filter result items
     */ filter: 'Filter',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */ selectMessageToBrowseItsContent: 'Select message to browse its content.',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */ copyMessageD: 'Copy message...',
    /**
     *@description A context menu item in the Resource Web Socket Frame View of the Network panel
     */ copyMessage: 'Copy message',
    /**
     *@description Text to clear everything
     */ clearAllL: 'Clear all',
    /**
     * @description Text in Resource Web Socket Frame View of the Network panel. Displays which Opcode
     * is relevant to a particular operation. 'mask' indicates that the Opcode used a mask, which is a
     * way of modifying a value by overlaying another value on top of it, partially covering/changing
     * it, hence 'masking' it.
     * https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers
     * @example {Localized name of the Opcode} PH1
     * @example {0} PH2
     */ sOpcodeSMask: '{PH1} (Opcode {PH2}, mask)',
    /**
     * @description Text in Resource Web Socket Frame View of the Network panel. Displays which Opcode
     * is relevant to a particular operation.
     * @example {Localized name of the Opcode} PH1
     * @example {0} PH2
     */ sOpcodeS: '{PH1} (Opcode {PH2})',
    /**
     *@description Op codes continuation frame of map in Resource Web Socket Frame View of the Network panel
     */ continuationFrame: 'Continuation Frame',
    /**
     *@description Op codes text frame of map in Resource Web Socket Frame View of the Network panel
     */ textMessage: 'Text Message',
    /**
     *@description Op codes binary frame of map in Resource Web Socket Frame View of the Network panel
     */ binaryMessage: 'Binary Message',
    /**
     *@description Op codes continuation frame of map in Resource Web Socket Frame View of the Network panel indicating that the web socket connection has been closed.
     */ connectionCloseMessage: 'Connection Close Message',
    /**
     *@description Op codes ping frame of map in Resource Web Socket Frame View of the Network panel
     */ pingMessage: 'Ping Message',
    /**
     *@description Op codes pong frame of map in Resource Web Socket Frame View of the Network panel
     */ pongMessage: 'Pong Message',
    /**
     *@description Text for everything
     */ all: 'All',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */ send: 'Send',
    /**
     *@description Text in Resource Web Socket Frame View of the Network panel
     */ receive: 'Receive',
    /**
     *@description Text for something not available
     */ na: 'N/A',
    /**
     *@description Example for placeholder text
     */ filterUsingRegex: 'Filter using regex (example: (web)?socket)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/ResourceWebSocketFrameView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var ResourceWebSocketFrameView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ResourceWebSocketFrameView, _UI_Widget_VBox);
    var _super = _create_super(ResourceWebSocketFrameView);
    function ResourceWebSocketFrameView(request) {
        _class_call_check(this, ResourceWebSocketFrameView);
        var _this;
        var onRowContextMenu = function onRowContextMenu(contextMenu, genericNode) {
            var node = genericNode;
            var binaryView = node.binaryView();
            if (binaryView) {
                binaryView.addCopyToContextMenu(contextMenu, i18nString(UIStrings.copyMessageD));
            } else {
                contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyMessage), _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText.bind(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, node.data.data), {
                    jslogContext: 'copy'
                });
            }
            contextMenu.footerSection().appendItem(i18nString(UIStrings.clearAllL), this.clearFrames.bind(this), {
                jslogContext: 'clear-all'
            });
        };
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "request", void 0);
        _define_property(_assert_this_initialized(_this), "splitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "timeComparator", void 0);
        _define_property(_assert_this_initialized(_this), "mainToolbar", void 0);
        _define_property(_assert_this_initialized(_this), "clearAllButton", void 0);
        _define_property(_assert_this_initialized(_this), "filterTypeCombobox", void 0);
        _define_property(_assert_this_initialized(_this), "filterType", void 0);
        _define_property(_assert_this_initialized(_this), "filterTextInput", void 0);
        _define_property(_assert_this_initialized(_this), "filterRegex", void 0);
        _define_property(_assert_this_initialized(_this), "frameEmptyWidget", void 0);
        _define_property(_assert_this_initialized(_this), "selectedNode", void 0);
        _define_property(_assert_this_initialized(_this), "currentSelectedNode", void 0);
        _define_property(_assert_this_initialized(_this), "messageFilterSetting", _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('network-web-socket-message-filter', ''));
        _this.element.classList.add('websocket-frame-view');
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.pane('web-socket-messages').track({
            resize: true
        })));
        _this.request = request;
        _this.splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.SplitWidget.SplitWidget(false, true, 'resource-web-socket-frame-split-view-state');
        _this.splitWidget.show(_this.element);
        var columns = [
            {
                id: 'data',
                title: i18nString(UIStrings.data),
                sortable: false,
                weight: 88
            },
            {
                id: 'length',
                title: i18nString(UIStrings.length),
                sortable: false,
                align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                weight: 5
            },
            {
                id: 'time',
                title: i18nString(UIStrings.time),
                sortable: true,
                weight: 7
            }
        ];
        _this.dataGrid = new _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.SortableDataGrid.SortableDataGrid({
            displayName: i18nString(UIStrings.webSocketFrame),
            columns: columns,
            editCallback: undefined,
            deleteCallback: undefined,
            refreshCallback: undefined
        });
        _this.dataGrid.setRowContextMenuCallback(onRowContextMenu.bind(_assert_this_initialized(_this)));
        _this.dataGrid.setStickToBottom(true);
        _this.dataGrid.setCellClass('websocket-frame-view-td');
        _this.timeComparator = resourceWebSocketFrameNodeTimeComparator;
        _this.dataGrid.sortNodes(_this.timeComparator, false);
        _this.dataGrid.markColumnAsSortedBy('time', _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.DataGrid.Order.Ascending);
        _this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.sortItems, _assert_this_initialized(_this));
        _this.dataGrid.setName('resource-web-socket-frame-view');
        _this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , function(event) {
            void _this.onFrameSelected(event);
        }, _assert_this_initialized(_this));
        _this.dataGrid.addEventListener("DeselectedNode" /* DataGrid.DataGrid.Events.DeselectedNode */ , _this.onFrameDeselected, _assert_this_initialized(_this));
        _this.mainToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Toolbar('');
        _this.clearAllButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear');
        _this.clearAllButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.clearFrames, _assert_this_initialized(_this));
        _this.mainToolbar.appendToolbarItem(_this.clearAllButton);
        _this.filterTypeCombobox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarComboBox(_this.updateFilterSetting.bind(_assert_this_initialized(_this)), i18nString(UIStrings.filter));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = FILTER_TYPES[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var filterItem = _step.value;
                var option = _this.filterTypeCombobox.createOption(filterItem.label(), filterItem.name);
                _this.filterTypeCombobox.addOption(option);
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
        _this.mainToolbar.appendToolbarItem(_this.filterTypeCombobox);
        _this.filterType = null;
        var placeholder = i18nString(UIStrings.filterUsingRegex);
        _this.filterTextInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarFilter(placeholder, 0.4);
        _this.filterTextInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , _this.updateFilterSetting, _assert_this_initialized(_this));
        var filter = _this.messageFilterSetting.get();
        if (filter) {
            _this.filterTextInput.setValue(filter);
        }
        _this.filterRegex = null;
        _this.mainToolbar.appendToolbarItem(_this.filterTextInput);
        var mainContainer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox();
        mainContainer.element.appendChild(_this.mainToolbar.element);
        _this.dataGrid.asWidget().show(mainContainer.element);
        mainContainer.setMinimumSize(0, 72);
        _this.splitWidget.setMainWidget(mainContainer);
        _this.frameEmptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.EmptyWidget.EmptyWidget(i18nString(UIStrings.selectMessageToBrowseItsContent));
        _this.splitWidget.setSidebarWidget(_this.frameEmptyWidget);
        _this.selectedNode = null;
        if (filter) {
            _this.applyFilter(filter);
        }
        return _this;
    }
    _create_class(ResourceWebSocketFrameView, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.refresh();
                this.registerCSSFiles([
                    _webSocketFrameView_css_js__WEBPACK_IMPORTED_MODULE_11__["default"]
                ]);
                this.request.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.WebsocketFrameAdded, this.frameAdded, this);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.request.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.Events.WebsocketFrameAdded, this.frameAdded, this);
            }
        },
        {
            key: "frameAdded",
            value: function frameAdded(event) {
                var frame = event.data;
                if (!this.frameFilter(frame)) {
                    return;
                }
                this.dataGrid.insertChild(new ResourceWebSocketFrameNode(this.request.url(), frame));
            }
        },
        {
            key: "frameFilter",
            value: function frameFilter(frame) {
                if (this.filterType && frame.type !== this.filterType) {
                    return false;
                }
                return !this.filterRegex || this.filterRegex.test(frame.text);
            }
        },
        {
            key: "clearFrames",
            value: function clearFrames() {
                // TODO(allada): actially remove frames from request.
                clearFrameOffsets.set(this.request, this.request.frames().length);
                this.refresh();
            }
        },
        {
            key: "updateFilterSetting",
            value: function updateFilterSetting() {
                var text = this.filterTextInput.value();
                this.messageFilterSetting.set(text);
                this.applyFilter(text);
            }
        },
        {
            key: "applyFilter",
            value: function applyFilter(text) {
                var type = this.filterTypeCombobox.selectedOption().value;
                if (text) {
                    try {
                        this.filterRegex = new RegExp(text, 'i');
                    } catch (e) {
                        this.filterRegex = new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(text), 'i');
                    }
                } else {
                    this.filterRegex = null;
                }
                this.filterType = type === 'all' ? null : type;
                this.refresh();
            }
        },
        {
            key: "onFrameSelected",
            value: function onFrameSelected(event) {
                var _this = this;
                return _async_to_generator(function() {
                    var content, binaryView, jsonView;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.currentSelectedNode = event.data;
                                content = _this.currentSelectedNode.dataText();
                                binaryView = _this.currentSelectedNode.binaryView();
                                if (binaryView) {
                                    _this.splitWidget.setSidebarWidget(binaryView);
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_7__.JSONView.JSONView.createView(content)
                                ];
                            case 1:
                                jsonView = _state.sent();
                                if (jsonView) {
                                    _this.splitWidget.setSidebarWidget(jsonView);
                                    return [
                                        2
                                    ];
                                }
                                _this.splitWidget.setSidebarWidget(new _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_7__.ResourceSourceFrame.ResourceSourceFrame(_models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.StaticContentProvider.StaticContentProvider.fromString(_this.request.url(), _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket, content), ''));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "onFrameDeselected",
            value: function onFrameDeselected() {
                this.currentSelectedNode = null;
                this.splitWidget.setSidebarWidget(this.frameEmptyWidget);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                var _this = this;
                this.dataGrid.rootNode().removeChildren();
                var url = this.request.url();
                var frames = this.request.frames();
                var offset = clearFrameOffsets.get(this.request) || 0;
                frames = frames.slice(offset);
                frames = frames.filter(this.frameFilter.bind(this));
                frames.forEach(function(frame) {
                    return _this.dataGrid.insertChild(new ResourceWebSocketFrameNode(url, frame));
                });
            }
        },
        {
            key: "sortItems",
            value: function sortItems() {
                this.dataGrid.sortNodes(this.timeComparator, !this.dataGrid.isSortOrderAscending());
            }
        }
    ], [
        {
            key: "opCodeDescription",
            value: function opCodeDescription(opCode, mask) {
                var localizedDescription = opCodeDescriptions[opCode] || function() {
                    return '';
                };
                if (mask) {
                    return i18nString(UIStrings.sOpcodeSMask, {
                        PH1: localizedDescription(),
                        PH2: opCode
                    });
                }
                return i18nString(UIStrings.sOpcodeS, {
                    PH1: localizedDescription(),
                    PH2: opCode
                });
            }
        }
    ]);
    return ResourceWebSocketFrameView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox);
var opCodeDescriptions = function() {
    var map = [];
    map[0 /* OpCodes.ContinuationFrame */ ] = i18nLazyString(UIStrings.continuationFrame);
    map[1 /* OpCodes.TextFrame */ ] = i18nLazyString(UIStrings.textMessage);
    map[2 /* OpCodes.BinaryFrame */ ] = i18nLazyString(UIStrings.binaryMessage);
    map[8 /* OpCodes.ConnectionCloseFrame */ ] = i18nLazyString(UIStrings.connectionCloseMessage);
    map[9 /* OpCodes.PingFrame */ ] = i18nLazyString(UIStrings.pingMessage);
    map[10 /* OpCodes.PongFrame */ ] = i18nLazyString(UIStrings.pongMessage);
    return map;
}();
var FILTER_TYPES = [
    {
        name: 'all',
        label: i18nLazyString(UIStrings.all),
        jslogContext: 'all'
    },
    {
        name: 'send',
        label: i18nLazyString(UIStrings.send),
        jslogContext: 'send'
    },
    {
        name: 'receive',
        label: i18nLazyString(UIStrings.receive),
        jslogContext: 'receive'
    }
];
var ResourceWebSocketFrameNode = /*#__PURE__*/ function(_DataGrid_SortableDataGrid_SortableDataGridNode) {
    "use strict";
    _inherits(ResourceWebSocketFrameNode, _DataGrid_SortableDataGrid_SortableDataGridNode);
    var _super = _create_super(ResourceWebSocketFrameNode);
    function ResourceWebSocketFrameNode(url, frame) {
        _class_call_check(this, ResourceWebSocketFrameNode);
        var _this;
        var length = String(frame.text.length);
        var time = new Date(frame.time * 1000);
        var timeText = ('0' + time.getHours()).substr(-2) + ':' + ('0' + time.getMinutes()).substr(-2) + ':' + ('0' + time.getSeconds()).substr(-2) + '.' + ('00' + time.getMilliseconds()).substr(-3);
        var timeNode = document.createElement('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextChild(timeNode, timeText);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(timeNode, time.toLocaleString());
        var dataText = frame.text;
        var description = ResourceWebSocketFrameView.opCodeDescription(frame.opCode, frame.mask);
        var isTextFrame = frame.opCode === 1 /* OpCodes.TextFrame */ ;
        if (frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Error) {
            description = dataText;
            length = i18nString(UIStrings.na);
        } else if (isTextFrame) {
            description = dataText;
        } else if (frame.opCode === 2 /* OpCodes.BinaryFrame */ ) {
            length = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.base64ToSize(frame.text));
            description = opCodeDescriptions[frame.opCode]();
        } else {
            dataText = description;
        }
        _this = _super.call(this, {
            data: description,
            length: length,
            time: timeNode
        });
        _define_property(_assert_this_initialized(_this), "url", void 0);
        _define_property(_assert_this_initialized(_this), "frame", void 0);
        _define_property(_assert_this_initialized(_this), "isTextFrame", void 0);
        _define_property(_assert_this_initialized(_this), "dataTextInternal", void 0);
        _define_property(_assert_this_initialized(_this), "binaryViewInternal", void 0);
        _this.url = url;
        _this.frame = frame;
        _this.isTextFrame = isTextFrame;
        _this.dataTextInternal = dataText;
        _this.binaryViewInternal = null;
        return _this;
    }
    _create_class(ResourceWebSocketFrameNode, [
        {
            key: "createCells",
            value: function createCells(element) {
                element.classList.toggle('websocket-frame-view-row-error', this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Error);
                element.classList.toggle('websocket-frame-view-row-send', this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Send);
                element.classList.toggle('websocket-frame-view-row-receive', this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Receive);
                _get(_get_prototype_of(ResourceWebSocketFrameNode.prototype), "createCells", this).call(this, element);
            }
        },
        {
            key: "nodeSelfHeight",
            value: function nodeSelfHeight() {
                return 21;
            }
        },
        {
            key: "dataText",
            value: function dataText() {
                return this.dataTextInternal;
            }
        },
        {
            key: "opCode",
            value: function opCode() {
                return this.frame.opCode;
            }
        },
        {
            key: "binaryView",
            value: function binaryView() {
                if (this.isTextFrame || this.frame.type === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequest.WebSocketFrameType.Error) {
                    return null;
                }
                if (!this.binaryViewInternal) {
                    if (this.dataTextInternal.length > 0) {
                        this.binaryViewInternal = new _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_10__.BinaryResourceView(this.dataTextInternal, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DevToolsPath.EmptyUrlString, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket);
                    }
                }
                return this.binaryViewInternal;
            }
        }
    ]);
    return ResourceWebSocketFrameNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_6__.SortableDataGrid.SortableDataGridNode);
function resourceWebSocketFrameNodeTimeComparator(a, b) {
    return a.frame.time - b.frame.time;
}
var clearFrameOffsets = new WeakMap(); //# sourceMappingURL=ResourceWebSocketFrameView.js.map


}),
"./panels/network/webSocketFrameView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2014 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.websocket-frame-view {\n  user-select: text;\n}\n\n.websocket-frame-view .data-grid {\n  flex: auto;\n  border: none;\n}\n\n.websocket-frame-view .data-grid .data {\n  background-image: none;\n}\n\n.websocket-frame-view-td {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n.websocket-frame-view .data-grid td,\n.websocket-frame-view .data-grid th {\n  border-left-color: 1px solid var(--sys-color-divider);\n}\n\n.websocket-frame-view-row-send td:first-child::before {\n  content: "\\2B06";\n  color: var(--sys-color-tertiary);\n  padding-right: 4px;\n}\n\n.websocket-frame-view-row-receive td:first-child::before {\n  content: "\\2B07";\n  color: var(--sys-color-error);\n  padding-right: 4px;\n}\n\n.websocket-frame-view-row-send {\n  background-color: color-mix(in sRGB, var(--sys-color-tertiary-container), transparent 50%);\n}\n\n.websocket-frame-view-row-error {\n  background-color: var(--sys-color-surface-error);\n  color: var(--sys-color-on-surface-error);\n}\n\n.websocket-frame-view .toolbar {\n  border-bottom: 1px solid var(--sys-color-divider);\n}\n\n/*# sourceURL=webSocketFrameView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);