"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_WatchExpressionsSidebarPane_js"], {
"./panels/sources/WatchExpressionsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WatchExpression: function() { return WatchExpression; },
  WatchExpressionsSidebarPane: function() { return WatchExpressionsSidebarPane; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */var _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./UISourceCodeFrame.js */ "./panels/sources/UISourceCodeFrame.js");
/* harmony import */var _watchExpressionsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./watchExpressionsSidebarPane.css.js */ "./panels/sources/watchExpressionsSidebarPane.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) IBM Corp. 2009  All rights reserved.
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
 *     * Neither the name of IBM Corp. nor the names of its
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */ addWatchExpression: 'Add watch expression',
    /**
     *@description Tooltip/screen reader label of a button in the Sources panel that refreshes all watch expressions.
     */ refreshWatchExpressions: 'Refresh watch expressions',
    /**
     *@description Empty element text content in Watch Expressions Sidebar Pane of the Sources panel
     */ noWatchExpressions: 'No watch expressions',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */ deleteAllWatchExpressions: 'Delete all watch expressions',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */ addPropertyPathToWatch: 'Add property path to watch',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel
     */ deleteWatchExpression: 'Delete watch expression',
    /**
     *@description Value element text content in Watch Expressions Sidebar Pane of the Sources panel
     */ notAvailable: '<not available>',
    /**
     *@description A context menu item in the Watch Expressions Sidebar Pane of the Sources panel and Network pane request.
     */ copyValue: 'Copy value'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/sources/WatchExpressionsSidebarPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var watchExpressionsSidebarPaneInstance;
var WatchExpressionsSidebarPane = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(WatchExpressionsSidebarPane, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(WatchExpressionsSidebarPane);
    function WatchExpressionsSidebarPane() {
        _class_call_check(this, WatchExpressionsSidebarPane);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "watchExpressions", void 0);
        _define_property(_assert_this_initialized(_this), "emptyElement", void 0);
        _define_property(_assert_this_initialized(_this), "watchExpressionsSetting", void 0);
        _define_property(_assert_this_initialized(_this), "addButton", void 0);
        _define_property(_assert_this_initialized(_this), "refreshButton", void 0);
        _define_property(_assert_this_initialized(_this), "treeOutline", void 0);
        _define_property(_assert_this_initialized(_this), "expandController", void 0);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        // TODO(szuend): Replace with a Set once the web test
        // panels/sources/debugger-ui/watch-expressions-preserve-expansion.js is either converted
        // to an e2e test or no longer accesses this variable directly.
        _this.watchExpressions = [];
        _this.watchExpressionsSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('watch-expressions', []);
        _this.addButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.addWatchExpression), 'plus', undefined, 'add-watch-expression');
        _this.addButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function(_event) {
            void _this.addButtonClicked();
        });
        _this.refreshButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.refreshWatchExpressions), 'refresh', undefined, 'refresh-watch-expressions');
        _this.refreshButton.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , _this.update, _assert_this_initialized(_this));
        _this.contentElement.classList.add('watch-expressions');
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_12__.section('sources.watch')));
        _this.contentElement.addEventListener('contextmenu', _this.contextMenu.bind(_assert_this_initialized(_this)), false);
        _this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline();
        _this.treeOutline.hideOverflow();
        _this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true);
        _this.expandController = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(_this.treeOutline);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext, _this.update, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DebuggerModel.CallFrame, _this.update, _assert_this_initialized(_this));
        _this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_10__.Linkifier.Linkifier();
        _this.update();
        return _this;
    }
    _create_class(WatchExpressionsSidebarPane, [
        {
            key: "toolbarItems",
            value: function toolbarItems() {
                return [
                    this.addButton,
                    this.refreshButton
                ];
            }
        },
        {
            key: "focus",
            value: function focus() {
                if (this.hasFocus()) {
                    return;
                }
                if (this.watchExpressions.length > 0) {
                    this.treeOutline.forceSelect();
                }
            }
        },
        {
            key: "hasExpressions",
            value: function hasExpressions() {
                return Boolean(this.watchExpressionsSetting.get().length);
            }
        },
        {
            key: "saveExpressions",
            value: function saveExpressions() {
                var toSave = [];
                for(var i = 0; i < this.watchExpressions.length; i++){
                    var expression = this.watchExpressions[i].expression();
                    if (expression) {
                        toSave.push(expression);
                    }
                }
                this.watchExpressionsSetting.set(toSave);
            }
        },
        {
            key: "addButtonClicked",
            value: function addButtonClicked() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ViewManager.ViewManager.instance().showView('sources.watch')
                                ];
                            case 1:
                                _state.sent();
                                _this.emptyElement.classList.add('hidden');
                                _this.createWatchExpression(null).startEditing();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    var watchExpressionStrings, i, expression;
                    return _ts_generator(this, function(_state) {
                        _this.linkifier.reset();
                        _this.contentElement.removeChildren();
                        _this.treeOutline.removeChildren();
                        _this.watchExpressions = [];
                        _this.emptyElement = _this.contentElement.createChild('div', 'gray-info-message');
                        _this.emptyElement.textContent = i18nString(UIStrings.noWatchExpressions);
                        _this.emptyElement.tabIndex = -1;
                        watchExpressionStrings = _this.watchExpressionsSetting.get();
                        if (watchExpressionStrings.length) {
                            _this.emptyElement.classList.add('hidden');
                        }
                        for(i = 0; i < watchExpressionStrings.length; ++i){
                            expression = watchExpressionStrings[i];
                            if (!expression) {
                                continue;
                            }
                            _this.createWatchExpression(expression);
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "createWatchExpression",
            value: function createWatchExpression(expression) {
                this.contentElement.appendChild(this.treeOutline.element);
                var watchExpression = new WatchExpression(expression, this.expandController, this.linkifier);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ARIAUtils.setLabel(this.contentElement, i18nString(UIStrings.addWatchExpression));
                watchExpression.addEventListener("ExpressionUpdated" /* Events.ExpressionUpdated */ , this.watchExpressionUpdated, this);
                this.treeOutline.appendChild(watchExpression.treeElement());
                this.watchExpressions.push(watchExpression);
                return watchExpression;
            }
        },
        {
            key: "watchExpressionUpdated",
            value: function watchExpressionUpdated(param) {
                var watchExpression = param.data;
                if (!watchExpression.expression()) {
                    _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.ArrayUtilities.removeElement(this.watchExpressions, watchExpression);
                    this.treeOutline.removeChild(watchExpression.treeElement());
                    this.emptyElement.classList.toggle('hidden', Boolean(this.watchExpressions.length));
                    if (this.watchExpressions.length === 0) {
                        this.treeOutline.element.remove();
                    }
                }
                this.saveExpressions();
            }
        },
        {
            key: "contextMenu",
            value: function contextMenu(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ContextMenu.ContextMenu(event);
                this.populateContextMenu(contextMenu, event);
                void contextMenu.show();
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, event) {
                var isEditing = false;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.watchExpressions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var watchExpression = _step.value;
                        isEditing = isEditing || watchExpression.isEditing();
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
                if (!isEditing) {
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.addWatchExpression), this.addButtonClicked.bind(this), {
                        jslogContext: 'add-watch-expression'
                    });
                }
                if (this.watchExpressions.length > 1) {
                    contextMenu.debugSection().appendItem(i18nString(UIStrings.deleteAllWatchExpressions), this.deleteAllButtonClicked.bind(this), {
                        jslogContext: 'delete-all-watch-expressions'
                    });
                }
                var treeElement = this.treeOutline.treeElementFromEvent(event);
                if (!treeElement) {
                    return;
                }
                var currentWatchExpression = this.watchExpressions.find(function(watchExpression) {
                    return treeElement.hasAncestorOrSelf(watchExpression.treeElement());
                });
                if (currentWatchExpression) {
                    currentWatchExpression.populateContextMenu(contextMenu, event);
                }
            }
        },
        {
            key: "deleteAllButtonClicked",
            value: function deleteAllButtonClicked() {
                this.watchExpressions = [];
                this.saveExpressions();
                this.update();
            }
        },
        {
            key: "focusAndAddExpressionToWatch",
            value: function focusAndAddExpressionToWatch(expression) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ViewManager.ViewManager.instance().showView('sources.watch')
                                ];
                            case 1:
                                _state.sent();
                                _this.createWatchExpression(expression);
                                _this.saveExpressions();
                                _this.update();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "handleAction",
            value: function handleAction(_context, _actionId) {
                var frame = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().flavor(_UISourceCodeFrame_js__WEBPACK_IMPORTED_MODULE_13__.UISourceCodeFrame);
                if (!frame) {
                    return false;
                }
                var state = frame.textEditor.state;
                var text = state.sliceDoc(state.selection.main.from, state.selection.main.to);
                void this.focusAndAddExpressionToWatch(text);
                return true;
            }
        },
        {
            key: "appendApplicableItems",
            value: function appendApplicableItems(_event, contextMenu, target) {
                var _this = this;
                if (_instanceof(target, _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertyTreeElement)) {
                    if (!target.property.synthetic) {
                        contextMenu.debugSection().appendItem(i18nString(UIStrings.addPropertyPathToWatch), function() {
                            return _this.focusAndAddExpressionToWatch(target.path());
                        }, {
                            jslogContext: 'add-property-path-to-watch'
                        });
                    }
                    return;
                }
                if (target.textEditor.state.selection.main.empty) {
                    return;
                }
                contextMenu.debugSection().appendAction('sources.add-to-watch');
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(WatchExpressionsSidebarPane.prototype), "wasShown", this).call(this);
                this.treeOutline.registerCSSFiles([
                    _watchExpressionsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_14__["default"]
                ]);
                this.registerCSSFiles([
                    _watchExpressionsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_14__["default"],
                    _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_9__["default"]
                ]);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!watchExpressionsSidebarPaneInstance) {
                    watchExpressionsSidebarPaneInstance = new WatchExpressionsSidebarPane();
                }
                return watchExpressionsSidebarPaneInstance;
            }
        }
    ]);
    return WatchExpressionsSidebarPane;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.ThrottledWidget.ThrottledWidget);
var _evaluateExpression = /*#__PURE__*/ new WeakSet(), _Common_ObjectWrapper_ObjectWrapper;
var WatchExpression = /*#__PURE__*/ function(_superClass) {
    "use strict";
    _inherits(WatchExpression, _superClass);
    var _super = _create_super(WatchExpression);
    function WatchExpression(expression, expandController, linkifier) {
        _class_call_check(this, WatchExpression);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _evaluateExpression);
        _define_property(_assert_this_initialized(_this), "treeElementInternal", void 0);
        _define_property(_assert_this_initialized(_this), "nameElement", void 0);
        _define_property(_assert_this_initialized(_this), "valueElement", void 0);
        _define_property(_assert_this_initialized(_this), "expressionInternal", void 0);
        _define_property(_assert_this_initialized(_this), "expandController", void 0);
        _define_property(_assert_this_initialized(_this), "element", void 0);
        _define_property(_assert_this_initialized(_this), "editing", void 0);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        _define_property(_assert_this_initialized(_this), "textPrompt", void 0);
        _define_property(_assert_this_initialized(_this), "result", void 0);
        _define_property(_assert_this_initialized(_this), "preventClickTimeout", void 0);
        _this.expressionInternal = expression;
        _this.expandController = expandController;
        _this.element = document.createElement('div');
        _this.element.classList.add('watch-expression');
        _this.element.classList.add('monospace');
        _this.editing = false;
        _this.linkifier = linkifier;
        _this.createWatchExpression();
        _this.update();
        return _this;
    }
    _create_class(WatchExpression, [
        {
            key: "treeElement",
            value: function treeElement() {
                return this.treeElementInternal;
            }
        },
        {
            key: "expression",
            value: function expression() {
                return this.expressionInternal;
            }
        },
        {
            key: "update",
            value: function update() {
                var _this = this;
                var currentExecutionContext = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RuntimeModel.ExecutionContext);
                if (currentExecutionContext && this.expressionInternal) {
                    void _class_private_method_get(this, _evaluateExpression, evaluateExpression).call(this, currentExecutionContext, this.expressionInternal).then(function(result) {
                        if ('object' in result) {
                            _this.createWatchExpression(result.object, result.exceptionDetails);
                        } else {
                            _this.createWatchExpression();
                        }
                    });
                } else {
                    this.createWatchExpression();
                }
            }
        },
        {
            key: "startEditing",
            value: function startEditing() {
                this.editing = true;
                this.treeElementInternal.setDisableSelectFocus(true);
                this.element.removeChildren();
                var newDiv = this.element.createChild('div');
                newDiv.textContent = this.nameElement.textContent;
                this.textPrompt = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertyPrompt();
                this.textPrompt.renderAsBlock();
                var proxyElement = this.textPrompt.attachAndStartEditing(newDiv, this.finishEditing.bind(this));
                this.treeElementInternal.listItemElement.classList.add('watch-expression-editing');
                this.treeElementInternal.collapse();
                proxyElement.classList.add('watch-expression-text-prompt-proxy');
                proxyElement.addEventListener('keydown', this.promptKeyDown.bind(this), false);
                var selection = this.element.getComponentSelection();
                if (selection) {
                    selection.selectAllChildren(newDiv);
                }
            }
        },
        {
            key: "isEditing",
            value: function isEditing() {
                return Boolean(this.editing);
            }
        },
        {
            key: "finishEditing",
            value: function finishEditing(event, canceled) {
                if (event) {
                    event.consume(canceled);
                }
                this.editing = false;
                this.treeElementInternal.setDisableSelectFocus(false);
                this.treeElementInternal.listItemElement.classList.remove('watch-expression-editing');
                if (this.textPrompt) {
                    this.textPrompt.detach();
                    var newExpression = canceled ? this.expressionInternal : this.textPrompt.text();
                    this.textPrompt = undefined;
                    this.element.removeChildren();
                    this.updateExpression(newExpression);
                }
            }
        },
        {
            key: "dblClickOnWatchExpression",
            value: function dblClickOnWatchExpression(event) {
                event.consume();
                if (!this.isEditing()) {
                    this.startEditing();
                }
            }
        },
        {
            key: "updateExpression",
            value: function updateExpression(newExpression) {
                if (this.expressionInternal) {
                    this.expandController.stopWatchSectionsWithId(this.expressionInternal);
                }
                this.expressionInternal = newExpression;
                this.update();
                this.dispatchEventToListeners("ExpressionUpdated" /* Events.ExpressionUpdated */ , this);
            }
        },
        {
            key: "deleteWatchExpression",
            value: function deleteWatchExpression(event) {
                event.consume(true);
                this.updateExpression(null);
            }
        },
        {
            key: "createWatchExpression",
            value: function createWatchExpression(result, exceptionDetails) {
                this.result = result || null;
                this.element.removeChildren();
                var oldTreeElement = this.treeElementInternal;
                this.createWatchExpressionTreeElement(result, exceptionDetails);
                if (oldTreeElement && oldTreeElement.parent) {
                    var root = oldTreeElement.parent;
                    var index = root.indexOfChild(oldTreeElement);
                    root.removeChild(oldTreeElement);
                    root.insertChild(this.treeElementInternal, index);
                }
                this.treeElementInternal.select();
            }
        },
        {
            key: "createWatchExpressionHeader",
            value: function createWatchExpressionHeader(expressionValue, exceptionDetails) {
                var _this = this;
                var headerElement = this.element.createChild('div', 'watch-expression-header');
                var deleteButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_7__.Button.Button();
                deleteButton.data = {
                    variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                    iconName: 'bin',
                    size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                    jslogContext: 'delete-watch-expression'
                };
                deleteButton.className = 'watch-expression-delete-button';
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip.Tooltip.install(deleteButton, i18nString(UIStrings.deleteWatchExpression));
                deleteButton.addEventListener('click', this.deleteWatchExpression.bind(this), false);
                deleteButton.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter') {
                        _this.deleteWatchExpression(event);
                    }
                });
                var titleElement = headerElement.createChild('div', 'watch-expression-title tree-element-title');
                titleElement.appendChild(deleteButton);
                this.nameElement = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSection.createNameElement(this.expressionInternal);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip.Tooltip.install(this.nameElement, this.expressionInternal);
                if (Boolean(exceptionDetails) || !expressionValue) {
                    this.valueElement = document.createElement('span');
                    this.valueElement.classList.add('watch-expression-error');
                    this.valueElement.classList.add('value');
                    titleElement.classList.add('dimmed');
                    this.valueElement.textContent = i18nString(UIStrings.notAvailable);
                    if (exceptionDetails !== undefined && exceptionDetails.exception !== undefined && exceptionDetails.exception.description !== undefined) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Tooltip.Tooltip.install(this.valueElement, exceptionDetails.exception.description);
                    }
                } else {
                    var propertyValue = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.ObjectPropertiesSection.createPropertyValueWithCustomSupport(expressionValue, Boolean(exceptionDetails), false, titleElement, this.linkifier);
                    this.valueElement = propertyValue.element;
                }
                var separatorElement = document.createElement('span');
                separatorElement.classList.add('watch-expressions-separator');
                separatorElement.textContent = ': ';
                titleElement.append(this.nameElement, separatorElement, this.valueElement);
                return headerElement;
            }
        },
        {
            key: "createWatchExpressionTreeElement",
            value: function createWatchExpressionTreeElement(expressionValue, exceptionDetails) {
                var _this = this;
                var headerElement = this.createWatchExpressionHeader(expressionValue, exceptionDetails);
                if (!exceptionDetails && expressionValue && expressionValue.hasChildren && !expressionValue.customPreview()) {
                    headerElement.classList.add('watch-expression-object-header');
                    this.treeElementInternal = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_8__.ObjectPropertiesSection.RootElement(expressionValue, this.linkifier);
                    this.expandController.watchSection(this.expressionInternal, this.treeElementInternal);
                    this.treeElementInternal.toggleOnClick = false;
                    this.treeElementInternal.listItemElement.addEventListener('click', this.onSectionClick.bind(this), false);
                    this.treeElementInternal.listItemElement.addEventListener('dblclick', this.dblClickOnWatchExpression.bind(this));
                } else {
                    headerElement.addEventListener('dblclick', this.dblClickOnWatchExpression.bind(this));
                    this.treeElementInternal = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TreeOutline.TreeElement();
                }
                this.treeElementInternal.title = this.element;
                this.treeElementInternal.listItemElement.classList.add('watch-expression-tree-item');
                this.treeElementInternal.listItemElement.addEventListener('keydown', function(event) {
                    if (event.key === 'Enter' && !_this.isEditing()) {
                        _this.startEditing();
                        event.consume(true);
                    } else if (event.key === 'Delete' && !_this.isEditing()) {
                        _this.deleteWatchExpression(event);
                    }
                });
            }
        },
        {
            key: "onSectionClick",
            value: function onSectionClick(event) {
                event.consume(true);
                var mouseEvent = event;
                if (mouseEvent.detail === 1) {
                    this.preventClickTimeout = window.setTimeout(handleClick.bind(this), 333);
                } else if (this.preventClickTimeout !== undefined) {
                    window.clearTimeout(this.preventClickTimeout);
                    this.preventClickTimeout = undefined;
                }
                function handleClick() {
                    if (!this.treeElementInternal) {
                        return;
                    }
                    if (this.treeElementInternal.expanded) {
                        this.treeElementInternal.collapse();
                    } else if (!this.editing) {
                        this.treeElementInternal.expand();
                    }
                }
            }
        },
        {
            key: "promptKeyDown",
            value: function promptKeyDown(event) {
                var isEscapeKey = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.KeyboardUtilities.isEscKey(event);
                if (event.key === 'Enter' || isEscapeKey) {
                    this.finishEditing(event, isEscapeKey);
                }
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, event) {
                if (!this.isEditing()) {
                    contextMenu.editSection().appendItem(i18nString(UIStrings.deleteWatchExpression), this.updateExpression.bind(this, null), {
                        jslogContext: 'delete-watch-expression'
                    });
                }
                if (!this.isEditing() && this.result && (this.result.type === 'number' || this.result.type === 'string')) {
                    contextMenu.clipboardSection().appendItem(i18nString(UIStrings.copyValue), this.copyValueButtonClicked.bind(this), {
                        jslogContext: 'copy-watch-expression-value'
                    });
                }
                var target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.UIUtils.deepElementFromEvent(event);
                if (target && this.valueElement.isSelfOrAncestor(target) && this.result) {
                    contextMenu.appendApplicableItems(this.result);
                }
            }
        },
        {
            key: "copyValueButtonClicked",
            value: function copyValueButtonClicked() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(this.valueElement.textContent);
            }
        }
    ]);
    return WatchExpression;
} //# sourceMappingURL=WatchExpressionsSidebarPane.js.map
(_Common_ObjectWrapper_ObjectWrapper = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
_define_property(WatchExpression, "watchObjectGroupId", 'watch-group');
function evaluateExpression(executionContext, expression) {
    return _evaluateExpression1.apply(this, arguments);
}
function _evaluateExpression1() {
    _evaluateExpression1 = _async_to_generator(function(executionContext, expression) {
        var callFrame, nameMap, e;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    callFrame = executionContext.debuggerModel.selectedCallFrame();
                    if (!(callFrame && callFrame.script.isJavaScript())) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        _models_source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_6__.NamesResolver.allVariablesInCallFrame(callFrame)
                    ];
                case 1:
                    nameMap = _state.sent();
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        4,
                        ,
                        5
                    ]);
                    return [
                        4,
                        _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_5__.FormatterWorkerPool.formatterWorkerPool().javaScriptSubstitute(expression, nameMap)
                    ];
                case 3:
                    expression = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 4:
                    e = _state.sent();
                    return [
                        3,
                        5
                    ];
                case 5:
                    return [
                        2,
                        executionContext.evaluate({
                            expression: expression,
                            objectGroup: WatchExpression.watchObjectGroupId,
                            includeCommandLineAPI: false,
                            silent: true,
                            returnByValue: false,
                            generatePreview: false
                        }, /* userGesture */ false, /* awaitPromise */ false)
                    ];
            }
        });
    });
    return _evaluateExpression1.apply(this, arguments);
}


}),
"./panels/sources/watchExpressionsSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.watch-expression-delete-button {\n  position: absolute;\n  opacity: 0%;\n  right: 0;\n\n  .watch-expression-title:hover & {\n    opacity: 100%;\n  }\n\n  .watch-expression-title:focus-within & {\n    opacity: 100%;\n  }\n}\n\n:host-context(.theme-with-dark-background) .watch-expression-delete-button {\n  /* This is a workaround due to a sprite with hardcoded color.\n     It should no longer be necessary after we update icons. */\n  filter: brightness(1.5);\n}\n\n.watch-expressions {\n  min-height: 26px;\n}\n\n.watch-expression-title {\n  white-space: nowrap;\n  line-height: 20px;\n  display: flex;\n}\n\n.watch-expression-title:hover,\n.watch-expression-title:focus-within {\n  padding-right: 26px;\n}\n\n.watch-expression-object-header .watch-expression-title {\n  margin-left: 1px;\n}\n\n.watch-expression {\n  position: relative;\n  flex: auto;\n  min-height: 20px;\n}\n\n.watch-expression .name {\n  color: var(--sys-color-purple);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  flex-shrink: 1000000;\n  min-width: 2em;\n}\n\n.watch-expression-error {\n  color: var(--sys-color-error);\n}\n\n.watch-expressions-separator {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.watch-expression .value {\n  white-space: nowrap;\n  display: inline;\n  overflow: hidden;\n  padding-left: 4px;\n  text-overflow: ellipsis;\n  flex-shrink: 1;\n}\n\n.watch-expression .text-prompt {\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n  padding-left: 4px;\n  min-height: 18px;\n  line-height: 18px;\n  user-select: text;\n}\n\n.watch-expression-text-prompt-proxy {\n  margin: 2px 12px 2px -4px;\n  padding-bottom: 3px;\n}\n\n.watch-expression-header {\n  flex: auto;\n  margin-left: -16px;\n  padding-left: 15px;\n}\n\nli.watch-expression-tree-item {\n  padding-left: 4px;\n}\n\nli.watch-expression-tree-item.selected {\n  background: var(--sys-color-neutral-container);\n}\n\nli.watch-expression-tree-item.selected:focus {\n  background: var(--sys-color-tonal-container);\n}\n\nli.watch-expression-tree-item.selected:focus-within:focus-visible {\n  background: var(--sys-color-tonal-container);\n}\n\n.watch-expression-header:focus-visible {\n  background: var(--sys-color-tonal-container);\n}\n\nli.watch-expression-editing::before {\n  background-color: transparent;\n}\n\n@media (forced-colors: active) {\n  .watch-expression-title:hover .watch-expression-delete-button,\n  .watch-expressions .dimmed {\n    opacity: 100%;\n  }\n\n  li.watch-expression-tree-item * {\n    forced-color-adjust: none;\n    color: ButtonText;\n  }\n\n  li.watch-expression-tree-item:hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  li.watch-expression-tree-item:hover * {\n    color: HighlightText;\n  }\n\n  li.watch-expression-tree-item:hover .watch-expression-delete-button {\n    background-color: HighlightText;\n  }\n}\n\n/*# sourceURL=watchExpressionsSidebarPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);