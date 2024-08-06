"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_changes_ChangesView_js"], {
"./panels/changes/ChangesView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ActionDelegate: function() { return ActionDelegate; },
  ChangesView: function() { return ChangesView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/workspace_diff/workspace_diff.js */ "./models/workspace_diff/workspace_diff.js");
/* harmony import */var _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/utils/utils.js */ "./panels/utils/utils.js");
/* harmony import */var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */var _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/diff_view/diff_view.js */ "./ui/components/diff_view/diff_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _ChangesSidebar_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ChangesSidebar.js */ "./panels/changes/ChangesSidebar.js");
/* harmony import */var _changesView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./changesView.css.js */ "./panels/changes/changesView.css.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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











var UIStrings = {
    /**
     *@description Text in Changes View of the Changes tab
     */ noChanges: 'No changes',
    /**
     *@description Text in Changes View of the Changes tab
     */ binaryData: 'Binary data',
    /**
     * @description Text in the Changes tab that indicates how many lines of code have changed in the
     * selected file. An insertion refers to an added line of code. The (+) is a visual cue to indicate
     * lines were added (not translatable).
     */ sInsertions: '{n, plural, =1 {# insertion (+)} other {# insertions (+)}}',
    /**
     * @description Text in the Changes tab that indicates how many lines of code have changed in the
     * selected file. A deletion refers to a removed line of code. The (-) is a visual cue to indicate
     * lines were removed (not translatable).
     */ sDeletions: '{n, plural, =1 {# deletion (-)} other {# deletions (-)}}',
    /**
     *@description Text for a button in the Changes tool that copies all the changes from the currently open file.
     */ copy: 'Copy'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/changes/ChangesView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
function diffStats(diff) {
    var insertions = diff.reduce(function(ins, token) {
        return ins + (token[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__.Diff.Operation.Insert ? token[1].length : 0);
    }, 0);
    var deletions = diff.reduce(function(ins, token) {
        return ins + (token[0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__.Diff.Operation.Delete ? token[1].length : 0);
    }, 0);
    var deletionText = i18nString(UIStrings.sDeletions, {
        n: deletions
    });
    var insertionText = i18nString(UIStrings.sInsertions, {
        n: insertions
    });
    return "".concat(insertionText, ", ").concat(deletionText);
}
var _selectedSourceCodeFormattedMapping = /*#__PURE__*/ new WeakMap();
var ChangesView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ChangesView, _UI_Widget_VBox);
    var _super = _create_super(ChangesView);
    function ChangesView() {
        _class_call_check(this, ChangesView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "emptyWidget", void 0);
        _define_property(_assert_this_initialized(_this), "workspaceDiff", void 0);
        _define_property(_assert_this_initialized(_this), "changesSidebar", void 0);
        _define_property(_assert_this_initialized(_this), "selectedUISourceCode", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _selectedSourceCodeFormattedMapping, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "diffContainer", void 0);
        _define_property(_assert_this_initialized(_this), "toolbar", void 0);
        _define_property(_assert_this_initialized(_this), "diffStats", void 0);
        _define_property(_assert_this_initialized(_this), "diffView", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.panel('changes').track({
            resize: true
        })));
        var splitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.SplitWidget.SplitWidget(true, false);
        var mainWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.Widget();
        splitWidget.setMainWidget(mainWidget);
        splitWidget.show(_this.contentElement);
        _this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.EmptyWidget.EmptyWidget('');
        _this.emptyWidget.show(mainWidget.element);
        _this.workspaceDiff = _models_workspace_diff_workspace_diff_js__WEBPACK_IMPORTED_MODULE_3__.WorkspaceDiff.workspaceDiff();
        _this.changesSidebar = new _ChangesSidebar_js__WEBPACK_IMPORTED_MODULE_9__.ChangesSidebar(_this.workspaceDiff);
        _this.changesSidebar.addEventListener("SelectedUISourceCodeChanged" /* Events.SelectedUISourceCodeChanged */ , _this.selectedUISourceCodeChanged, _assert_this_initialized(_this));
        splitWidget.setSidebarWidget(_this.changesSidebar);
        _this.selectedUISourceCode = null;
        _this.diffContainer = mainWidget.element.createChild('div', 'diff-container');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.markAsTabpanel(_this.diffContainer);
        _this.diffContainer.addEventListener('click', function(event) {
            return _this.click(event);
        });
        _this.diffView = _this.diffContainer.appendChild(new _ui_components_diff_view_diff_view_js__WEBPACK_IMPORTED_MODULE_6__.DiffView.DiffView());
        _this.toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar('changes-toolbar', mainWidget.element);
        _this.toolbar.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.toolbar()));
        _this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('changes.revert'));
        _this.diffStats = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarText('');
        _this.toolbar.appendToolbarItem(_this.diffStats);
        _this.toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarSeparator());
        _this.toolbar.appendToolbarItem(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Toolbar.createActionButtonForId('changes.copy', {
            showLabel: true,
            label: function label() {
                return i18nString(UIStrings.copy);
            }
        }));
        _this.hideDiff(i18nString(UIStrings.noChanges));
        _this.selectedUISourceCodeChanged();
        return _this;
    }
    _create_class(ChangesView, [
        {
            key: "selectedUISourceCodeChanged",
            value: function selectedUISourceCodeChanged() {
                var _this_selectedUISourceCode;
                this.revealUISourceCode(this.changesSidebar.selectedUISourceCode());
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ActionRegistry.ActionRegistry.instance().getAction('changes.copy').setEnabled(((_this_selectedUISourceCode = this.selectedUISourceCode) === null || _this_selectedUISourceCode === void 0 ? void 0 : _this_selectedUISourceCode.contentType()) === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Stylesheet);
            }
        },
        {
            key: "revert",
            value: function revert() {
                var uiSourceCode = this.selectedUISourceCode;
                if (!uiSourceCode) {
                    return;
                }
                void this.workspaceDiff.revertToOriginal(uiSourceCode);
            }
        },
        {
            key: "copy",
            value: function copy() {
                var _this = this;
                return _async_to_generator(function() {
                    var uiSourceCode, diffResponse, changes;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                uiSourceCode = _this.selectedUISourceCode;
                                if (!uiSourceCode) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.workspaceDiff.requestDiff(uiSourceCode, {
                                        shouldFormatDiff: true
                                    })
                                ];
                            case 1:
                                diffResponse = _state.sent();
                                // Diff array with real diff will contain at least 2 lines.
                                if (!diffResponse || (diffResponse === null || diffResponse === void 0 ? void 0 : diffResponse.diff.length) < 2) {
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _panels_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.PanelUtils.formatCSSChangesFromDiff(diffResponse.diff)
                                ];
                            case 2:
                                changes = _state.sent();
                                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.copyText(changes);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "click",
            value: function click(event) {
                if (!this.selectedUISourceCode) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = event.composedPath()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var target = _step.value;
                        if (!_instanceof(target, HTMLElement)) {
                            continue;
                        }
                        var selection = target.ownerDocument.getSelection();
                        if (selection === null || selection === void 0 ? void 0 : selection.toString()) {
                            break;
                        }
                        if (target.classList.contains('diff-line-content') && target.hasAttribute('data-line-number')) {
                            var lineNumber = Number(target.dataset.lineNumber) - 1;
                            // Unfortunately, caretRangeFromPoint is broken in shadow
                            // roots, which makes determining the character offset more
                            // work than justified here.
                            if (_class_private_field_get(this, _selectedSourceCodeFormattedMapping)) {
                                lineNumber = _class_private_field_get(this, _selectedSourceCodeFormattedMapping).formattedToOriginal(lineNumber, 0)[0];
                            }
                            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(this.selectedUISourceCode.uiLocation(lineNumber, 0), false);
                            event.consume(true);
                            break;
                        } else if (target.classList.contains('diff-listing')) {
                            break;
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
            key: "revealUISourceCode",
            value: function revealUISourceCode(uiSourceCode) {
                if (this.selectedUISourceCode === uiSourceCode) {
                    return;
                }
                if (this.selectedUISourceCode) {
                    this.workspaceDiff.unsubscribeFromDiffChange(this.selectedUISourceCode, this.refreshDiff, this);
                }
                if (uiSourceCode && this.isShowing()) {
                    this.workspaceDiff.subscribeToDiffChange(uiSourceCode, this.refreshDiff, this);
                }
                this.selectedUISourceCode = uiSourceCode;
                void this.refreshDiff();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(ChangesView, this);
                this.registerCSSFiles([
                    _changesView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
                _get(_get_prototype_of(ChangesView.prototype), "wasShown", this).call(this);
                void this.refreshDiff();
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _get(_get_prototype_of(ChangesView.prototype), "willHide", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Context.Context.instance().setFlavor(ChangesView, null);
            }
        },
        {
            key: "refreshDiff",
            value: function refreshDiff() {
                var _this = this;
                return _async_to_generator(function() {
                    var uiSourceCode, diffResponse;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.isShowing()) {
                                    return [
                                        2
                                    ];
                                }
                                if (!_this.selectedUISourceCode) {
                                    _this.renderDiffRows();
                                    return [
                                        2
                                    ];
                                }
                                uiSourceCode = _this.selectedUISourceCode;
                                if (!uiSourceCode.contentType().isTextType()) {
                                    _this.hideDiff(i18nString(UIStrings.binaryData));
                                    return [
                                        2
                                    ];
                                }
                                return [
                                    4,
                                    _this.workspaceDiff.requestDiff(uiSourceCode, {
                                        shouldFormatDiff: true
                                    })
                                ];
                            case 1:
                                diffResponse = _state.sent();
                                if (_this.selectedUISourceCode !== uiSourceCode) {
                                    return [
                                        2
                                    ];
                                }
                                _class_private_field_set(_this, _selectedSourceCodeFormattedMapping, diffResponse === null || diffResponse === void 0 ? void 0 : diffResponse.formattedCurrentMapping);
                                _this.renderDiffRows(diffResponse === null || diffResponse === void 0 ? void 0 : diffResponse.diff);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "hideDiff",
            value: function hideDiff(message) {
                this.diffStats.setText('');
                this.toolbar.setEnabled(false);
                this.diffContainer.style.display = 'none';
                this.emptyWidget.text = message;
                this.emptyWidget.showWidget();
            }
        },
        {
            key: "renderDiffRows",
            value: function renderDiffRows(diff) {
                if (!diff || diff.length === 1 && diff[0][0] === _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_5__.Diff.Operation.Equal) {
                    this.hideDiff(i18nString(UIStrings.noChanges));
                } else {
                    this.diffStats.setText(diffStats(diff));
                    this.toolbar.setEnabled(true);
                    this.emptyWidget.hideWidget();
                    var mimeType = this.selectedUISourceCode.mimeType();
                    this.diffContainer.style.display = 'block';
                    this.diffView.data = {
                        diff: diff,
                        mimeType: mimeType
                    };
                }
            }
        }
    ]);
    return ChangesView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox);
var ActionDelegate = /*#__PURE__*/ function() {
    "use strict";
    function ActionDelegate() {
        _class_call_check(this, ActionDelegate);
    }
    _create_class(ActionDelegate, [
        {
            key: "handleAction",
            value: function handleAction(context, actionId) {
                var changesView = context.flavor(ChangesView);
                if (changesView === null) {
                    return false;
                }
                switch(actionId){
                    case 'changes.revert':
                        changesView.revert();
                        return true;
                    case 'changes.copy':
                        void changesView.copy();
                        return true;
                }
                return false;
            }
        }
    ]);
    return ActionDelegate;
} //# sourceMappingURL=ChangesView.js.map
();


}),
"./panels/changes/changesView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright (c) 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n[slot="insertion-point-main"] {\n  flex-direction: column;\n  display: flex;\n}\n\n[slot="insertion-point-sidebar"] {\n  overflow: auto;\n}\n\n.diff-container {\n  flex: 1;\n  overflow: auto;\n}\n\n:focus.selected {\n  background-color: var(--sys-color-tonal-container);\n  color: var(--sys-color-on-tonal-container);\n}\n\n.changes-toolbar {\n  background-color: var(--sys-color-cdt-base-container);\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n/*# sourceURL=changesView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);