"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_ClassesPaneWidget_js"], {
"./panels/elements/ClassesPaneWidget.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ButtonProvider: function() { return ButtonProvider; },
  ClassNamePrompt: function() { return ClassNamePrompt; },
  ClassesPaneWidget: function() { return ClassesPaneWidget; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _classesPaneWidget_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classesPaneWidget.css.js */ "./panels/elements/classesPaneWidget.css.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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








var UIStrings = {
    /**
     * @description Prompt text for a text field in the Classes Pane Widget of the Elements panel.
     * Class refers to a CSS class.
     */ addNewClass: 'Add new class',
    /**
     * @description Screen reader announcement string when adding a CSS class via the Classes Pane Widget.
     * @example {vbox flex-auto} PH1
     */ classesSAdded: 'Classes {PH1} added',
    /**
     * @description Screen reader announcement string when adding a class via the Classes Pane Widget.
     * @example {title-container} PH1
     */ classSAdded: 'Class {PH1} added',
    /**
     * @description Accessible title read by screen readers for the Classes Pane Widget of the Elements
     * panel. Element is a HTML DOM Element and classes refers to CSS classes.
     */ elementClasses: 'Element Classes'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/ClassesPaneWidget.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var ClassesPaneWidget = /*#__PURE__*/ function(_UI_Widget_Widget) {
    "use strict";
    _inherits(ClassesPaneWidget, _UI_Widget_Widget);
    var _super = _create_super(ClassesPaneWidget);
    function ClassesPaneWidget() {
        _class_call_check(this, ClassesPaneWidget);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "input", void 0);
        _define_property(_assert_this_initialized(_this), "classesContainer", void 0);
        _define_property(_assert_this_initialized(_this), "prompt", void 0);
        _define_property(_assert_this_initialized(_this), "mutatingNodes", void 0);
        _define_property(_assert_this_initialized(_this), "pendingNodeClasses", void 0);
        _define_property(_assert_this_initialized(_this), "updateNodeThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "previousTarget", void 0);
        _this.contentElement.className = 'styles-element-classes-pane';
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.pane('elements-classes')));
        var container = _this.contentElement.createChild('div', 'title-container');
        _this.input = container.createChild('div', 'new-class-input monospace');
        _this.setDefaultFocusedElement(_this.input);
        _this.classesContainer = _this.contentElement.createChild('div', 'source-code');
        _this.classesContainer.classList.add('styles-element-classes-container');
        _this.prompt = new ClassNamePrompt(_this.nodeClasses.bind(_assert_this_initialized(_this)));
        _this.prompt.setAutocompletionTimeout(0);
        _this.prompt.renderAsBlock();
        var proxyElement = _this.prompt.attach(_this.input);
        _this.prompt.setPlaceholder(i18nString(UIStrings.addNewClass));
        _this.prompt.addEventListener("TextChanged" /* UI.TextPrompt.Events.TextChanged */ , _this.onTextChanged, _assert_this_initialized(_this));
        proxyElement.addEventListener('keydown', _this.onKeyDown.bind(_assert_this_initialized(_this)), false);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.Events.DOMMutated, _this.onDOMMutated, _assert_this_initialized(_this), {
            scoped: true
        });
        _this.mutatingNodes = new Set();
        _this.pendingNodeClasses = new Map();
        _this.updateNodeThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        _this.previousTarget = null;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode, _this.onSelectedNodeChanged, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(ClassesPaneWidget, [
        {
            key: "splitTextIntoClasses",
            value: function splitTextIntoClasses(text) {
                return text.split(/[,\s]/).map(function(className) {
                    return className.trim();
                }).filter(function(className) {
                    return className.length;
                });
            }
        },
        {
            key: "onKeyDown",
            value: function onKeyDown(event) {
                if (!(event.key === 'Enter') && !_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.KeyboardUtilities.isEscKey(event)) {
                    return;
                }
                if (event.key === 'Enter') {
                    event.consume();
                    if (this.prompt.acceptAutoComplete()) {
                        return;
                    }
                }
                var eventTarget = event.target;
                var text = eventTarget.textContent;
                if (_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.KeyboardUtilities.isEscKey(event)) {
                    if (!_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.isWhitespace(text)) {
                        event.consume(true);
                    }
                    text = '';
                }
                this.prompt.clearAutocomplete();
                eventTarget.textContent = '';
                var node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
                if (!node) {
                    return;
                }
                var classNames = this.splitTextIntoClasses(text);
                if (!classNames.length) {
                    this.installNodeClasses(node);
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = classNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var className = _step.value;
                        this.toggleClass(node, className, true);
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
                // annoucementString is used for screen reader to announce that the class(es) has been added successfully.
                var joinClassString = classNames.join(' ');
                var announcementString = classNames.length > 1 ? i18nString(UIStrings.classesSAdded, {
                    PH1: joinClassString
                }) : i18nString(UIStrings.classSAdded, {
                    PH1: joinClassString
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.alert(announcementString);
                this.installNodeClasses(node);
                this.update();
            }
        },
        {
            key: "onTextChanged",
            value: function onTextChanged() {
                var node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
                if (!node) {
                    return;
                }
                this.installNodeClasses(node);
            }
        },
        {
            key: "onDOMMutated",
            value: function onDOMMutated(event) {
                var node = event.data;
                if (this.mutatingNodes.has(node)) {
                    return;
                }
                cachedClassesMap.delete(node);
                this.update();
            }
        },
        {
            key: "onSelectedNodeChanged",
            value: function onSelectedNodeChanged(event) {
                if (this.previousTarget && this.prompt.text()) {
                    this.input.textContent = '';
                    this.installNodeClasses(this.previousTarget);
                }
                this.previousTarget = event.data;
                this.update();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ClassesPaneWidget.prototype), "wasShown", this).call(this);
                this.update();
                this.registerCSSFiles([
                    _classesPaneWidget_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
            }
        },
        {
            key: "update",
            value: function update() {
                if (!this.isShowing()) {
                    return;
                }
                var node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
                if (node) {
                    node = node.enclosingElementOrSelf();
                }
                this.classesContainer.removeChildren();
                // @ts-ignore this.input is a div, not an input element. So this line makes no sense at all
                this.input.disabled = !node;
                if (!node) {
                    return;
                }
                var classes = this.nodeClasses(node);
                var keys = _to_consumable_array(classes.keys());
                keys.sort(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.caseInsensetiveComparator);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var className = _step.value;
                        var label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(className, classes.get(className), undefined, 'element-class', true);
                        label.classList.add('monospace');
                        label.checkboxElement.addEventListener('click', this.onClick.bind(this, className), false);
                        this.classesContainer.appendChild(label);
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
            key: "onClick",
            value: function onClick(className, event) {
                var node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
                if (!node) {
                    return;
                }
                var enabled = event.target.checked;
                this.toggleClass(node, className, enabled);
                this.installNodeClasses(node);
            }
        },
        {
            key: "nodeClasses",
            value: function nodeClasses(node) {
                var result = cachedClassesMap.get(node);
                if (!result) {
                    var classAttribute = node.getAttribute('class') || '';
                    var classes = classAttribute.split(/\s/);
                    result = new Map();
                    for(var i = 0; i < classes.length; ++i){
                        var className = classes[i].trim();
                        if (!className.length) {
                            continue;
                        }
                        result.set(className, true);
                    }
                    cachedClassesMap.set(node, result);
                }
                return result;
            }
        },
        {
            key: "toggleClass",
            value: function toggleClass(node, className, enabled) {
                var classes = this.nodeClasses(node);
                classes.set(className, enabled);
                ButtonProvider.instance().item().setChecked(_to_consumable_array(classes.values()).includes(true));
            }
        },
        {
            key: "installNodeClasses",
            value: function installNodeClasses(node) {
                var classes = this.nodeClasses(node);
                var activeClasses = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = classes.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var className = _step.value;
                        if (classes.get(className)) {
                            activeClasses.add(className);
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
                var additionalClasses = this.splitTextIntoClasses(this.prompt.textWithCurrentSuggestion());
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = additionalClasses[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var className1 = _step1.value;
                        activeClasses.add(className1);
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
                var newClasses = _to_consumable_array(activeClasses.values()).sort();
                this.pendingNodeClasses.set(node, newClasses.join(' '));
                void this.updateNodeThrottler.schedule(this.flushPendingClasses.bind(this));
            }
        },
        {
            key: "flushPendingClasses",
            value: function flushPendingClasses() {
                var _this = this;
                return _async_to_generator(function() {
                    var promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, node, promise;
                    function onClassValueUpdated(node) {
                        this.mutatingNodes.delete(node);
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                promises = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = _this.pendingNodeClasses.keys()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        node = _step.value;
                                        _this.mutatingNodes.add(node);
                                        promise = node.setAttributeValuePromise('class', _this.pendingNodeClasses.get(node)).then(onClassValueUpdated.bind(_this, node));
                                        promises.push(promise);
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
                                _this.pendingNodeClasses.clear();
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ClassesPaneWidget;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget);
var cachedClassesMap = new WeakMap();
var buttonProviderInstance;
var ButtonProvider = /*#__PURE__*/ function() {
    "use strict";
    function ButtonProvider() {
        _class_call_check(this, ButtonProvider);
        _define_property(this, "button", void 0);
        _define_property(this, "view", void 0);
        this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarToggle(i18nString(UIStrings.elementClasses), 'class');
        this.button.element.style.setProperty('--dot-toggle-top', '12px');
        this.button.element.style.setProperty('--dot-toggle-left', '18px');
        this.button.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.toggleSubpane('elements-classes').track({
            click: true
        })));
        this.button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.clicked, this);
        this.view = new ClassesPaneWidget();
    }
    _create_class(ButtonProvider, [
        {
            key: "clicked",
            value: function clicked() {
                _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_7__.ElementsPanel.instance().showToolbarPane(!this.view.isShowing() ? this.view : null, this.button);
            }
        },
        {
            key: "item",
            value: function item() {
                return this.button;
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!buttonProviderInstance || forceNew) {
                    buttonProviderInstance = new ButtonProvider();
                }
                return buttonProviderInstance;
            }
        }
    ]);
    return ButtonProvider;
}();
var ClassNamePrompt = /*#__PURE__*/ function(_UI_TextPrompt_TextPrompt) {
    "use strict";
    _inherits(ClassNamePrompt, _UI_TextPrompt_TextPrompt);
    var _super = _create_super(ClassNamePrompt);
    function ClassNamePrompt(nodeClasses) {
        _class_call_check(this, ClassNamePrompt);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "nodeClasses", void 0);
        _define_property(_assert_this_initialized(_this), "selectedFrameId", void 0);
        _define_property(_assert_this_initialized(_this), "classNamesPromise", void 0);
        _this.nodeClasses = nodeClasses;
        _this.initialize(_this.buildClassNameCompletions.bind(_assert_this_initialized(_this)), ' ');
        _this.disableDefaultSuggestionForEmptyInput();
        _this.selectedFrameId = '';
        _this.classNamesPromise = null;
        return _this;
    }
    _create_class(ClassNamePrompt, [
        {
            key: "getClassNames",
            value: function getClassNames(selectedNode) {
                var _this = this;
                return _async_to_generator(function() {
                    var promises, completions, cssModel, allStyleSheets, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, stylesheet, cssPromise, ownerDocumentId, domPromise;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                promises = [];
                                completions = new Set();
                                _this.selectedFrameId = selectedNode.frameId();
                                cssModel = selectedNode.domModel().cssModel();
                                allStyleSheets = cssModel.allStyleSheets();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = allStyleSheets[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        stylesheet = _step.value;
                                        if (stylesheet.frameId !== _this.selectedFrameId) {
                                            continue;
                                        }
                                        cssPromise = cssModel.getClassNames(stylesheet.id).then(function(classes) {
                                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                            try {
                                                for(var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                                    var className = _step.value;
                                                    completions.add(className);
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
                                        });
                                        promises.push(cssPromise);
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
                                ownerDocumentId = selectedNode.ownerDocument.id;
                                domPromise = selectedNode.domModel().classNamesPromise(ownerDocumentId).then(function(classes) {
                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(var _iterator = classes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            var className = _step.value;
                                            completions.add(className);
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
                                });
                                promises.push(domPromise);
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2,
                                    _to_consumable_array(completions)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "buildClassNameCompletions",
            value: function buildClassNameCompletions(expression, prefix, force) {
                var _this = this;
                return _async_to_generator(function() {
                    var selectedNode, completions, classesMap;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!prefix || force) {
                                    _this.classNamesPromise = null;
                                }
                                selectedNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.DOMModel.DOMNode);
                                if (!selectedNode || !prefix && !force && !expression.trim()) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                if (!_this.classNamesPromise || _this.selectedFrameId !== selectedNode.frameId()) {
                                    _this.classNamesPromise = _this.getClassNames(selectedNode);
                                }
                                return [
                                    4,
                                    _this.classNamesPromise
                                ];
                            case 1:
                                completions = _state.sent();
                                classesMap = _this.nodeClasses(selectedNode);
                                completions = completions.filter(function(value) {
                                    return !classesMap.get(value);
                                });
                                if (prefix[0] === '.') {
                                    completions = completions.map(function(value) {
                                        return '.' + value;
                                    });
                                }
                                return [
                                    2,
                                    completions.filter(function(value) {
                                        return value.startsWith(prefix);
                                    }).sort().map(function(completion) {
                                        return {
                                            text: completion,
                                            title: undefined,
                                            subtitle: undefined,
                                            priority: undefined,
                                            isSecondary: undefined,
                                            subtitleRenderer: undefined,
                                            selectionRange: undefined,
                                            hideGhostText: undefined,
                                            iconElement: undefined
                                        };
                                    })
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ClassNamePrompt;
} //# sourceMappingURL=ClassesPaneWidget.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TextPrompt.TextPrompt);


}),
"./panels/elements/classesPaneWidget.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/**\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.styles-element-classes-pane {\n  background-color: var(--sys-color-cdt-base-container);\n  border-bottom: 1px solid var(--sys-color-divider);\n  padding: 6px 2px 2px;\n}\n\n.styles-element-classes-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n\n.styles-element-classes-pane [is="dt-checkbox"] {\n  margin-right: 15px;\n}\n\n.styles-element-classes-pane .title-container {\n  padding-bottom: 2px;\n}\n\n.styles-element-classes-pane .new-class-input {\n  padding-left: 3px;\n  padding-right: 3px;\n  overflow: hidden;\n  border: 1px solid var(--sys-color-neutral-outline);\n  border-radius: 4px;\n  line-height: 15px;\n  margin-left: 3px;\n  width: calc(100% - 7px);\n  background-color: var(--sys-color-cdt-base-container);\n  cursor: text;\n\n  &:hover {\n    box-shadow: 0 0 0 1px var(--ref-palette-neutral90);\n  }\n}\n\n/*# sourceURL=classesPaneWidget.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);