"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_BlockedURLsPane_js"], {
"./panels/network/BlockedURLsPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  BlockedURLsPane: function() { return BlockedURLsPane; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _blockedURLsPane_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blockedURLsPane.css.js */ "./panels/network/blockedURLsPane.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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








var UIStrings = {
    /**
     *@description Text to enable blocking of network requests
     */ enableNetworkRequestBlocking: 'Enable network request blocking',
    /**
     *@description Tooltip text that appears when hovering over the plus button in the Blocked URLs Pane of the Network panel
     */ addPattern: 'Add pattern',
    /**
     *@description Accessible label for the button to add request blocking patterns in the network request blocking tool
     */ addNetworkRequestBlockingPattern: 'Add network request blocking pattern',
    /**
     *@description Button to add a pattern to block netwrok requests in the Network request blocking tool
     *@example {Add pattern} PH1
     */ networkRequestsAreNotBlockedS: 'Network requests are not blocked. {PH1}',
    /**
     *@description Text in Blocked URLs Pane of the Network panel
     *@example {4} PH1
     */ dBlocked: '{PH1} blocked',
    /**
     *@description Text in Blocked URLs Pane of the Network panel
     */ textPatternToBlockMatching: 'Text pattern to block matching requests; use * for wildcard',
    /**
     *@description Error text for empty list widget input in Request Blocking tool
     */ patternInputCannotBeEmpty: 'Pattern input cannot be empty.',
    /**
     *@description Error text for duplicate list widget input in Request Blocking tool
     */ patternAlreadyExists: 'Pattern already exists.',
    /**
     *@description Message to be announced for a when list item is removed from list widget
     */ itemDeleted: 'Item successfully deleted'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/network/BlockedURLsPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var BlockedURLsPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(BlockedURLsPane, _UI_Widget_VBox);
    var _super = _create_super(BlockedURLsPane);
    function BlockedURLsPane() {
        _class_call_check(this, BlockedURLsPane);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "manager", void 0);
        _define_property(_assert_this_initialized(_this), "toolbar", void 0);
        _define_property(_assert_this_initialized(_this), "enabledCheckbox", void 0);
        _define_property(_assert_this_initialized(_this), "list", void 0);
        _define_property(_assert_this_initialized(_this), "editor", void 0);
        _define_property(_assert_this_initialized(_this), "blockedCountForUrl", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.panel('network.blocked-urls').track({
            resize: true
        })));
        _this.manager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.MultitargetNetworkManager.instance();
        _this.manager.addEventListener("BlockedPatternsChanged" /* SDK.NetworkManager.MultitargetNetworkManager.Events.BlockedPatternsChanged */ , _this.update, _assert_this_initialized(_this));
        _this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar('', _this.contentElement);
        _this.enabledCheckbox = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarCheckbox(i18nString(UIStrings.enableNetworkRequestBlocking), undefined, _this.toggleEnabled.bind(_assert_this_initialized(_this)), 'network.enable-request-blocking');
        _this.toolbar.appendToolbarItem(_this.enabledCheckbox);
        _this.toolbar.appendSeparator();
        _this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar.createActionButtonForId('network.add-network-request-blocking-pattern'));
        _this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.Toolbar.createActionButtonForId('network.remove-all-network-request-blocking-patterns'));
        _this.toolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toolbar()));
        _this.list = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListWidget.ListWidget(_assert_this_initialized(_this));
        _this.list.element.classList.add('blocked-urls');
        _this.list.setEmptyPlaceholder(_this.createEmptyPlaceholder());
        _this.list.show(_this.contentElement);
        _this.editor = null;
        _this.blockedCountForUrl = new Map();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.Events.RequestFinished, _this.onRequestFinished, _assert_this_initialized(_this), {
            scoped: true
        });
        _this.update();
        _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.NetworkLog.instance().addEventListener(_models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.Events.Reset, _this.onNetworkLogReset, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(BlockedURLsPane, [
        {
            key: "createEmptyPlaceholder",
            value: function createEmptyPlaceholder() {
                var element = this.contentElement.createChild('div', 'no-blocked-urls');
                var addButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.UIUtils.createTextButton(i18nString(UIStrings.addPattern), this.addPattern.bind(this), {
                    className: 'add-button',
                    jslogContext: 'network.add-network-request-blocking-pattern',
                    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ 
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.setLabel(addButton, i18nString(UIStrings.addNetworkRequestBlockingPattern));
                element.appendChild(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getFormatLocalizedString(str_, UIStrings.networkRequestsAreNotBlockedS, {
                    PH1: addButton
                }));
                return element;
            }
        },
        {
            key: "addPattern",
            value: function addPattern() {
                this.manager.setBlockingEnabled(true);
                this.list.addNewItem(0, {
                    url: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.DevToolsPath.EmptyUrlString,
                    enabled: true
                });
            }
        },
        {
            key: "removeAllPatterns",
            value: function removeAllPatterns() {
                this.manager.setBlockedPatterns([]);
            }
        },
        {
            key: "renderItem",
            value: function renderItem(pattern, editable) {
                var _this = this;
                var count = this.blockedRequestsCount(pattern.url);
                var element = document.createElement('div');
                element.classList.add('blocked-url');
                var checkbox = element.createChild('input', 'blocked-url-checkbox');
                checkbox.type = 'checkbox';
                checkbox.checked = pattern.enabled;
                checkbox.disabled = !editable;
                checkbox.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.toggle().track({
                    change: true
                })));
                element.createChild('div', 'blocked-url-label').textContent = pattern.url;
                element.createChild('div', 'blocked-url-count').textContent = i18nString(UIStrings.dBlocked, {
                    PH1: count
                });
                if (editable) {
                    element.addEventListener('click', function(event) {
                        return _this.togglePattern(pattern, event);
                    });
                    checkbox.addEventListener('click', function(event) {
                        return _this.togglePattern(pattern, event);
                    });
                }
                return element;
            }
        },
        {
            key: "togglePattern",
            value: function togglePattern(pattern, event) {
                event.consume(true);
                var patterns = this.manager.blockedPatterns();
                patterns.splice(patterns.indexOf(pattern), 1, {
                    enabled: !pattern.enabled,
                    url: pattern.url
                });
                this.manager.setBlockedPatterns(patterns);
            }
        },
        {
            key: "toggleEnabled",
            value: function toggleEnabled() {
                this.manager.setBlockingEnabled(!this.manager.blockingEnabled());
                this.update();
            }
        },
        {
            key: "removeItemRequested",
            value: function removeItemRequested(pattern, index) {
                var patterns = this.manager.blockedPatterns();
                patterns.splice(index, 1);
                this.manager.setBlockedPatterns(patterns);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ARIAUtils.alert(UIStrings.itemDeleted);
            }
        },
        {
            key: "beginEdit",
            value: function beginEdit(pattern) {
                this.editor = this.createEditor();
                this.editor.control('url').value = pattern.url;
                return this.editor;
            }
        },
        {
            key: "commitEdit",
            value: function commitEdit(item, editor, isNew) {
                var url = editor.control('url').value;
                var patterns = this.manager.blockedPatterns();
                if (isNew) {
                    patterns.push({
                        enabled: true,
                        url: url
                    });
                } else {
                    patterns.splice(patterns.indexOf(item), 1, {
                        enabled: true,
                        url: url
                    });
                }
                this.manager.setBlockedPatterns(patterns);
            }
        },
        {
            key: "createEditor",
            value: function createEditor() {
                var _this = this;
                if (this.editor) {
                    return this.editor;
                }
                var editor = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ListWidget.Editor();
                var content = editor.contentElement();
                var titles = content.createChild('div', 'blocked-url-edit-row');
                titles.createChild('div').textContent = i18nString(UIStrings.textPatternToBlockMatching);
                var fields = content.createChild('div', 'blocked-url-edit-row');
                var validator = function(_item, _index, input) {
                    var valid = true;
                    var errorMessage;
                    if (!input.value) {
                        errorMessage = i18nString(UIStrings.patternInputCannotBeEmpty);
                        valid = false;
                    } else if (_this.manager.blockedPatterns().find(function(pattern) {
                        return pattern.url === input.value;
                    })) {
                        errorMessage = i18nString(UIStrings.patternAlreadyExists);
                        valid = false;
                    }
                    return {
                        valid: valid,
                        errorMessage: errorMessage
                    };
                };
                var urlInput = editor.createInput('url', 'text', '', validator);
                fields.createChild('div', 'blocked-url-edit-value').appendChild(urlInput);
                return editor;
            }
        },
        {
            key: "update",
            value: function update() {
                var enabled = this.manager.blockingEnabled();
                this.list.element.classList.toggle('blocking-disabled', !enabled && Boolean(this.manager.blockedPatterns().length));
                this.enabledCheckbox.setChecked(enabled);
                this.list.clear();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.manager.blockedPatterns()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var pattern = _step.value;
                        this.list.appendItem(pattern, enabled);
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
            key: "blockedRequestsCount",
            value: function blockedRequestsCount(url) {
                if (!url) {
                    return 0;
                }
                var result = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.blockedCountForUrl.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var blockedUrl = _step.value;
                        if (this.matches(url, blockedUrl)) {
                            result += this.blockedCountForUrl.get(blockedUrl);
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
                return result;
            }
        },
        {
            key: "matches",
            value: function matches(pattern, url) {
                var pos = 0;
                var parts = pattern.split('*');
                for(var index = 0; index < parts.length; index++){
                    var part = parts[index];
                    if (!part.length) {
                        continue;
                    }
                    pos = url.indexOf(part, pos);
                    if (pos === -1) {
                        return false;
                    }
                    pos += part.length;
                }
                return true;
            }
        },
        {
            key: "onNetworkLogReset",
            value: function onNetworkLogReset(_event) {
                this.blockedCountForUrl.clear();
                this.update();
            }
        },
        {
            key: "onRequestFinished",
            value: function onRequestFinished(event) {
                var request = event.data;
                if (request.wasBlocked()) {
                    var count = this.blockedCountForUrl.get(request.url()) || 0;
                    this.blockedCountForUrl.set(request.url(), count + 1);
                    this.update();
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(BlockedURLsPane, this);
                _get(_get_prototype_of(BlockedURLsPane.prototype), "wasShown", this).call(this);
                this.list.registerCSSFiles([
                    _blockedURLsPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
                this.registerCSSFiles([
                    _blockedURLsPane_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ]);
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _get(_get_prototype_of(BlockedURLsPane.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(BlockedURLsPane, null);
            }
        }
    ]);
    return BlockedURLsPane;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox);
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                var blockedURLsPane = context.flavor(BlockedURLsPane);
                if (blockedURLsPane === null) {
                    return false;
                }
                switch(actionId){
                    case 'network.add-network-request-blocking-pattern':
                        {
                            blockedURLsPane.addPattern();
                            return true;
                        }
                    case 'network.remove-all-network-request-blocking-patterns':
                        {
                            blockedURLsPane.removeAllPatterns();
                            return true;
                        }
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=BlockedURLsPane.js.map
();


}),
"./panels/network/blockedURLsPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.list {\n  border: none !important; /* stylelint-disable-line declaration-no-important */\n  border-top: 1px solid var(--sys-color-divider) !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.blocking-disabled {\n  opacity: 80%;\n}\n\n.editor-container {\n  padding: 0 4px;\n}\n\n.no-blocked-urls,\n.blocked-urls {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.no-blocked-urls {\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n\n  & devtools-button {\n    display: flex;\n    justify-content: center;\n    margin-top: var(--sys-size-8);\n  }\n}\n\n.no-blocked-urls > span {\n  white-space: pre;\n}\n\n.blocked-url {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex: auto;\n}\n\n.blocked-url-count {\n  flex: none;\n  padding-right: 9px;\n}\n\n.blocked-url-checkbox {\n  margin-left: 8px;\n  flex: none;\n}\n\n.blocked-url-checkbox:focus {\n  outline: auto 5px -webkit-focus-ring-color;\n}\n\n.blocked-url-label {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex: auto;\n  padding: 0 3px;\n}\n\n.blocked-url-edit-row {\n  flex: none;\n  display: flex;\n  flex-direction: row;\n  margin: 7px 5px 0;\n  align-items: center;\n}\n\n.blocked-url-edit-value {\n  user-select: none;\n  flex: 1 1 0;\n}\n\n.blocked-url-edit-row input {\n  width: 100%;\n  text-align: inherit;\n  height: 22px;\n}\n\n/*# sourceURL=blockedURLsPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);