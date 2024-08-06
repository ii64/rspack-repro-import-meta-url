"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_media_PlayerMessagesView_js"], {
"./panels/media/PlayerMessagesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PlayerMessagesView: function() { return PlayerMessagesView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _playerMessagesView_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerMessagesView.css.js */ "./panels/media/playerMessagesView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _templateObject() {
    var data = _tagged_template_literal([
        '\n    <div class="status-error-box">\n    <div class="status-error-field-labeled">\n      <span class="status-error-field-label" $="status-error-group"></span>\n      <span>',
        '</span>\n    </div>\n    <div class="status-error-field-labeled">\n      <span class="status-error-field-label" $="status-error-code"></span>\n      <span>',
        '</span>\n    </div>\n    <div class="status-error-field-labeled" $="status-error-data">\n    </div>\n    <div class="status-error-field-labeled" $="status-error-stack">\n    </div>\n    <div class="status-error-field-labeled" $="status-error-cause">\n    </div>\n    '
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}




var UIStrings = {
    /**
     *@description A context menu item in the Console View of the Console panel
     */ default: 'Default',
    /**
     *@description Text in Network Throttling Selector of the Network panel
     */ custom: 'Custom',
    /**
     *@description Text for everything
     */ all: 'All',
    /**
     *@description Text for errors
     */ error: 'Error',
    /**
     *@description Text to indicate an item is a warning
     */ warning: 'Warning',
    /**
     *@description Sdk console message message level info of level Labels in Console View of the Console panel
     */ info: 'Info',
    /**
     *@description Debug log level
     */ debug: 'Debug',
    /**
     *@description Label for selecting between the set of log levels to show.
     */ logLevel: 'Log level:',
    /**
     *@description Default text for user-text-entry for searching log messages.
     */ filterByLogMessages: 'Filter by log messages',
    /**
     *@description The label for the group name that this error belongs to.
     */ errorGroupLabel: 'Error Group:',
    /**
     *@description The label for the numeric code associated with this error.
     */ errorCodeLabel: 'Error Code:',
    /**
     *@description The label for extra data associated with an error.
     */ errorDataLabel: 'Data:',
    /**
     *@description The label for the stacktrace associated with the error.
     */ errorStackLabel: 'Stacktrace:',
    /**
     *@description The label for a root cause error associated with this error.
     */ errorCauseLabel: 'Caused by:'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/media/PlayerMessagesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var MessageLevelSelector = /*#__PURE__*/ function() {
    "use strict";
    function MessageLevelSelector(items, view) {
        _class_call_check(this, MessageLevelSelector);
        _define_property(this, "items", void 0);
        _define_property(this, "view", void 0);
        _define_property(this, "itemMap", void 0);
        _define_property(this, "hiddenLevels", void 0);
        _define_property(this, "bitFieldValue", void 0);
        _define_property(this, "savedBitFieldValue", void 0);
        _define_property(this, "defaultTitleInternal", void 0);
        _define_property(this, "customTitle", void 0);
        _define_property(this, "allTitle", void 0);
        _define_property(this, "elementsForItems", void 0);
        this.items = items;
        this.view = view;
        this.itemMap = new Map();
        this.hiddenLevels = [];
        this.bitFieldValue = 7 /* MessageLevelBitfield.Default */ ;
        this.savedBitFieldValue = 7 /* MessageLevelBitfield.Default */ ;
        this.defaultTitleInternal = i18nString(UIStrings.default);
        this.customTitle = i18nString(UIStrings.custom);
        this.allTitle = i18nString(UIStrings.all);
        this.elementsForItems = new WeakMap();
    }
    _create_class(MessageLevelSelector, [
        {
            key: "defaultTitle",
            value: function defaultTitle() {
                return this.defaultTitleInternal;
            }
        },
        {
            key: "setDefault",
            value: function setDefault(dropdown) {
                dropdown.selectItem(this.items.at(0));
            }
        },
        {
            key: "populate",
            value: function populate() {
                this.items.insert(this.items.length, {
                    title: this.defaultTitleInternal,
                    overwrite: true,
                    stringValue: '',
                    value: 7 /* MessageLevelBitfield.Default */ ,
                    selectable: undefined
                });
                this.items.insert(this.items.length, {
                    title: this.allTitle,
                    overwrite: true,
                    stringValue: '',
                    value: 15 /* MessageLevelBitfield.All */ ,
                    selectable: undefined
                });
                this.items.insert(this.items.length, {
                    title: i18nString(UIStrings.error),
                    overwrite: false,
                    stringValue: 'error',
                    value: 1 /* MessageLevelBitfield.Error */ ,
                    selectable: undefined
                });
                this.items.insert(this.items.length, {
                    title: i18nString(UIStrings.warning),
                    overwrite: false,
                    stringValue: 'warning',
                    value: 2 /* MessageLevelBitfield.Warning */ ,
                    selectable: undefined
                });
                this.items.insert(this.items.length, {
                    title: i18nString(UIStrings.info),
                    overwrite: false,
                    stringValue: 'info',
                    value: 4 /* MessageLevelBitfield.Info */ ,
                    selectable: undefined
                });
                this.items.insert(this.items.length, {
                    title: i18nString(UIStrings.debug),
                    overwrite: false,
                    stringValue: 'debug',
                    value: 8 /* MessageLevelBitfield.Debug */ ,
                    selectable: undefined
                });
            }
        },
        {
            key: "updateCheckMarks",
            value: function updateCheckMarks() {
                this.hiddenLevels = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.itemMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], item = _step_value[1];
                        if (!item.overwrite) {
                            var elementForItem = this.elementsForItems.get(item);
                            if (elementForItem && elementForItem.firstChild) {
                                elementForItem.firstChild.remove();
                            }
                            if (elementForItem && key & this.bitFieldValue) {
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(elementForItem.createChild('div'), '✓');
                            } else {
                                this.hiddenLevels.push(item.stringValue);
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
            }
        },
        {
            key: "titleFor",
            value: function titleFor(item) {
                // This would make a lot more sense to have in |itemSelected|, but this
                // method gets called first.
                if (item.overwrite) {
                    this.bitFieldValue = item.value;
                } else {
                    this.bitFieldValue ^= item.value;
                }
                if (this.bitFieldValue === 7 /* MessageLevelBitfield.Default */ ) {
                    return this.defaultTitleInternal;
                }
                if (this.bitFieldValue === 15 /* MessageLevelBitfield.All */ ) {
                    return this.allTitle;
                }
                var potentialMatch = this.itemMap.get(this.bitFieldValue);
                if (potentialMatch) {
                    return potentialMatch.title;
                }
                return this.customTitle;
            }
        },
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                var element = document.createElement('div');
                var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createShadowRootWithCoreStyles(element, {
                    cssFile: [
                        _playerMessagesView_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                    ],
                    delegatesFocus: undefined
                });
                var container = shadowRoot.createChild('div', 'media-messages-level-dropdown-element');
                var checkBox = container.createChild('div', 'media-messages-level-dropdown-checkbox');
                var text = container.createChild('span', 'media-messages-level-dropdown-text');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(text, item.title);
                this.elementsForItems.set(item, checkBox);
                this.itemMap.set(item.value, item);
                this.updateCheckMarks();
                this.view.regenerateMessageDisplayCss(this.hiddenLevels);
                return element;
            }
        },
        {
            key: "isItemSelectable",
            value: function isItemSelectable(_item) {
                return true;
            }
        },
        {
            key: "itemSelected",
            value: function itemSelected(_item) {
                this.updateCheckMarks();
                this.view.regenerateMessageDisplayCss(this.hiddenLevels);
            }
        },
        {
            key: "highlightedItemChanged",
            value: function highlightedItemChanged(_from, _to, _fromElement, _toElement) {}
        }
    ]);
    return MessageLevelSelector;
}();
var PlayerMessagesView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(PlayerMessagesView, _UI_Widget_VBox);
    var _super = _create_super(PlayerMessagesView);
    function PlayerMessagesView() {
        _class_call_check(this, PlayerMessagesView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "headerPanel", void 0);
        _define_property(_assert_this_initialized(_this), "bodyPanel", void 0);
        _define_property(_assert_this_initialized(_this), "messageLevelSelector", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_2__.pane('messages')));
        _this.headerPanel = _this.contentElement.createChild('div', 'media-messages-header');
        _this.bodyPanel = _this.contentElement.createChild('div', 'media-messages-body');
        _this.buildToolbar();
        return _this;
    }
    _create_class(PlayerMessagesView, [
        {
            key: "buildToolbar",
            value: function buildToolbar() {
                var toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.Toolbar('media-messages-toolbar', this.headerPanel);
                toolbar.appendText(i18nString(UIStrings.logLevel));
                toolbar.appendToolbarItem(this.createDropdown());
                toolbar.appendSeparator();
                toolbar.appendToolbarItem(this.createFilterInput());
            }
        },
        {
            key: "createDropdown",
            value: function createDropdown() {
                var items = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ListModel.ListModel();
                this.messageLevelSelector = new MessageLevelSelector(items, this);
                var dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.SoftDropDown.SoftDropDown(items, this.messageLevelSelector, 'log-level');
                dropDown.setRowHeight(18);
                this.messageLevelSelector.populate();
                this.messageLevelSelector.setDefault(dropDown);
                var dropDownItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.ToolbarItem(dropDown.element);
                dropDownItem.element.classList.add('toolbar-has-dropdown');
                dropDownItem.setEnabled(true);
                dropDownItem.setTitle(this.messageLevelSelector.defaultTitle());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.ARIAUtils.setLabel(dropDownItem.element, "".concat(i18nString(UIStrings.logLevel), " ").concat(this.messageLevelSelector.defaultTitle()));
                return dropDownItem;
            }
        },
        {
            key: "createFilterInput",
            value: function createFilterInput() {
                var _this = this;
                var filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Toolbar.ToolbarFilter(i18nString(UIStrings.filterByLogMessages), 1, 1);
                filterInput.addEventListener("TextChanged" /* UI.Toolbar.ToolbarInput.Event.TextChanged */ , function(data) {
                    _this.filterByString(data);
                }, this);
                return filterInput;
            }
        },
        {
            key: "regenerateMessageDisplayCss",
            value: function regenerateMessageDisplayCss(hiddenLevels) {
                var messages = this.bodyPanel.getElementsByClassName('media-messages-message-container');
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var message = _step.value;
                        if (this.matchesHiddenLevels(message, hiddenLevels)) {
                            message.classList.add('media-messages-message-unselected');
                        } else {
                            message.classList.remove('media-messages-message-unselected');
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
            key: "matchesHiddenLevels",
            value: function matchesHiddenLevels(element, hiddenLevels) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = hiddenLevels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var level = _step.value;
                        if (element.classList.contains('media-message-' + level)) {
                            return true;
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
                return false;
            }
        },
        {
            key: "filterByString",
            value: function filterByString(userStringData) {
                var userString = userStringData.data;
                var messages = this.bodyPanel.getElementsByClassName('media-messages-message-container');
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var message = _step.value;
                        if (userString === '') {
                            message.classList.remove('media-messages-message-filtered');
                        } else if (message.textContent && message.textContent.includes(userString)) {
                            message.classList.remove('media-messages-message-filtered');
                        } else {
                            message.classList.add('media-messages-message-filtered');
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
            key: "addMessage",
            value: function addMessage(message) {
                var container = this.bodyPanel.createChild('div', 'media-messages-message-container media-message-' + message.level);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(container, message.message);
            }
        },
        {
            key: "errorToDiv",
            value: function errorToDiv(error) {
                var entry = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Fragment.Fragment.build(_templateObject(), error.errorType, error.code);
                entry.$('status-error-group').textContent = i18nString(UIStrings.errorGroupLabel);
                entry.$('status-error-code').textContent = i18nString(UIStrings.errorCodeLabel);
                if (Object.keys(error.data).length !== 0) {
                    var label = entry.$('status-error-data').createChild('span', 'status-error-field-label');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(label, i18nString(UIStrings.errorDataLabel));
                    var dataContent = entry.$('status-error-data').createChild('div');
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = Object.entries(error.data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _sliced_to_array(_step.value, 2), key = _step_value[0], value = _step_value[1];
                            var datumContent = dataContent.createChild('div');
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(datumContent, "".concat(key, ": ").concat(value));
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
                if (error.stack.length !== 0) {
                    var label1 = entry.$('status-error-stack').createChild('span', 'status-error-field-label');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(label1, i18nString(UIStrings.errorStackLabel));
                    var stackContent = entry.$('status-error-stack').createChild('div');
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = error.stack[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var stackEntry = _step1.value;
                            var frameBox = stackContent.createChild('div');
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(frameBox, "".concat(stackEntry.file, ":").concat(stackEntry.line));
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
                if (error.cause.length !== 0) {
                    var label2 = entry.$('status-error-cause').createChild('span', 'status-error-field-label');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createTextChild(label2, i18nString(UIStrings.errorCauseLabel));
                    entry.$('status-error-cause').appendChild(this.errorToDiv(error.cause[0]));
                }
                return entry.element();
            }
        },
        {
            key: "addError",
            value: function addError(error) {
                var container = this.bodyPanel.createChild('div', 'media-messages-message-container media-message-error');
                container.appendChild(this.errorToDiv(error));
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(PlayerMessagesView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _playerMessagesView_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ]);
            }
        }
    ]);
    return PlayerMessagesView;
} //# sourceMappingURL=PlayerMessagesView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_1__.Widget.VBox);


}),
"./panels/media/playerMessagesView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n.media-messages-header {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  min-height: 26px;\n}\n\n.media-messages-body {\n  overflow-y: scroll;\n}\n\n.media-messages-level-dropdown-element {\n  height: 18px;\n  line-height: 18px;\n}\n\n.media-messages-level-dropdown-text {\n  float: left;\n}\n\n.media-messages-level-dropdown-checkbox {\n  float: left;\n  width: 18px;\n  height: 100%;\n  padding-left: 2px;\n}\n\n.media-messages-message-container {\n  margin: 4px;\n  font-size: 14px;\n  line-height: 18px;\n  padding: 4px;\n  user-select: text;\n}\n\n.media-messages-message-container + .media-messages-message-container {\n  border-top: 1px solid var(--sys-color-divider);\n\n  &.media-message-warning,\n  &.media-message-error {\n    border: none;\n  }\n}\n\n.media-message-warning {\n  border-radius: 5px;\n  background-color: var(--sys-color-surface-yellow);\n  color: var(--sys-color-on-surface-yellow);\n}\n\n.media-message-error {\n  border-radius: 5px;\n  background-color: var(--sys-color-surface-error);\n  color: var(--sys-color-on-surface-error);\n}\n\n.media-messages-message-filtered {\n  display: none;\n}\n\n.media-messages-message-unselected {\n  display: none;\n}\n\n.status-error-box {\n  font-family: monospace;\n  border: 1px solid var(--sys-color-error-outline);\n  border-radius: 5px;\n  padding: 4px;\n}\n\n.status-error-field-label {\n  padding-right: 10px;\n  color: var(--sys-color-token-subtle);\n}\n\n.status-error-field-labeled {\n  display: flex;\n}\n\n/*# sourceURL=playerMessagesView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);