"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_event_listeners_EventListenersView_js"], {
"./panels/event_listeners/EventListenersView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  EventListenersTreeElement: function() { return EventListenersTreeElement; },
  EventListenersView: function() { return EventListenersView; },
  ObjectEventListenerBar: function() { return ObjectEventListenerBar; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
/* harmony import */var _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/objectValue.css.js */ "./ui/legacy/components/object_ui/objectValue.css.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersUtils.js */ "./panels/event_listeners/EventListenersUtils.js");
/* harmony import */var _eventListenersView_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./eventListenersView.css.js */ "./panels/event_listeners/eventListenersView.css.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
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





/* eslint-disable rulesdir/es_modules_import */ 





var UIStrings = {
    /**
     *@description Empty holder text content in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */ noEventListeners: 'No event listeners',
    /**
     *@description Delete button title in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */ deleteEventListener: 'Delete event listener',
    /**
     *@description Passive button text content in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */ togglePassive: 'Toggle Passive',
    /**
     *@description Passive button title in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */ toggleWhetherEventListenerIs: 'Toggle whether event listener is passive or blocking',
    /**
     *@description A context menu item to reveal a node in the DOM tree of the Elements Panel
     */ revealInElementsPanel: 'Reveal in Elements panel',
    /**
     *@description Text in Event Listeners Widget of the Elements panel
     */ passive: 'Passive'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/event_listeners/EventListenersView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var EventListenersView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(EventListenersView, _UI_Widget_VBox);
    var _super = _create_super(EventListenersView);
    function EventListenersView(changeCallback) {
        var enableDefaultTreeFocus = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _class_call_check(this, EventListenersView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "changeCallback", void 0);
        _define_property(_assert_this_initialized(_this), "enableDefaultTreeFocus", void 0);
        _define_property(_assert_this_initialized(_this), "treeOutline", void 0);
        _define_property(_assert_this_initialized(_this), "emptyHolder", void 0);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        _define_property(_assert_this_initialized(_this), "treeItemMap", void 0);
        _this.changeCallback = changeCallback;
        _this.enableDefaultTreeFocus = enableDefaultTreeFocus;
        _this.treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeOutlineInShadow();
        _this.treeOutline.setComparator(EventListenersTreeElement.comparator);
        _this.treeOutline.element.classList.add('monospace');
        _this.treeOutline.setShowSelectionOnKeyboardFocus(true);
        _this.treeOutline.setFocusable(true);
        _this.element.appendChild(_this.treeOutline.element);
        _this.emptyHolder = document.createElement('div');
        _this.emptyHolder.classList.add('gray-info-message');
        _this.emptyHolder.textContent = i18nString(UIStrings.noEventListeners);
        _this.emptyHolder.tabIndex = -1;
        _this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.Linkifier.Linkifier();
        _this.treeItemMap = new Map();
        return _this;
    }
    _create_class(EventListenersView, [
        {
            key: "focus",
            value: function focus() {
                if (!this.enableDefaultTreeFocus) {
                    return;
                }
                if (!this.emptyHolder.parentNode) {
                    this.treeOutline.forceSelect();
                } else {
                    this.emptyHolder.focus();
                }
            }
        },
        {
            key: "addObjects",
            value: function addObjects(objects) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.reset();
                                return [
                                    4,
                                    Promise.all(objects.map(function(obj) {
                                        return obj ? _this.addObject(obj) : Promise.resolve();
                                    }))
                                ];
                            case 1:
                                _state.sent();
                                _this.addEmptyHolderIfNeeded();
                                _this.eventListenersArrivedForTest();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addObject",
            value: function addObject(object) {
                var eventListeners;
                var frameworkEventListenersObject = null;
                var promises = [];
                var domDebuggerModel = object.runtimeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
                // TODO(kozyatinskiy): figure out how this should work for |window| when there is no DOMDebugger.
                if (domDebuggerModel) {
                    promises.push(domDebuggerModel.eventListeners(object).then(storeEventListeners));
                }
                promises.push((0,_EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_9__.frameworkEventListeners)(object).then(storeFrameworkEventListenersObject));
                return Promise.all(promises).then(markInternalEventListeners).then(addEventListeners.bind(this));
                function storeEventListeners(result) {
                    eventListeners = result;
                }
                function storeFrameworkEventListenersObject(result) {
                    frameworkEventListenersObject = result;
                }
                function markInternalEventListeners() {
                    return _markInternalEventListeners.apply(this, arguments);
                }
                function _markInternalEventListeners() {
                    _markInternalEventListeners = _async_to_generator(function() {
                        function handlerArgument(listener) {
                            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(listener.handler());
                        }
                        function isInternalEventListener() {
                            var isInternal = [];
                            var internalHandlersSet = new Set(this);
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var handler = _step.value;
                                    isInternal.push(internalHandlersSet.has(handler));
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
                            return isInternal;
                        }
                        function setIsInternal(isInternal) {
                            for(var i = 0; i < eventListeners.length; ++i){
                                if (isInternal[i]) {
                                    eventListeners[i].markAsFramework();
                                }
                            }
                        }
                        return _ts_generator(this, function(_state) {
                            if (!frameworkEventListenersObject) {
                                return [
                                    2
                                ];
                            }
                            if (!frameworkEventListenersObject.internalHandlers) {
                                return [
                                    2
                                ];
                            }
                            return [
                                2,
                                frameworkEventListenersObject.internalHandlers.object().callFunctionJSON(isInternalEventListener, eventListeners.map(handlerArgument)).then(setIsInternal)
                            ];
                        });
                    });
                    return _markInternalEventListeners.apply(this, arguments);
                }
                function addEventListeners() {
                    this.addObjectEventListeners(object, eventListeners);
                    if (frameworkEventListenersObject) {
                        this.addObjectEventListeners(object, frameworkEventListenersObject.eventListeners);
                    }
                }
            }
        },
        {
            key: "addObjectEventListeners",
            value: function addObjectEventListeners(object, eventListeners) {
                if (!eventListeners) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = eventListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var eventListener = _step.value;
                        var treeItem = this.getOrCreateTreeElementForType(eventListener.type());
                        treeItem.addObjectEventListener(eventListener, object);
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
            key: "showFrameworkListeners",
            value: function showFrameworkListeners(showFramework, showPassive, showBlocking) {
                var eventTypes = this.treeOutline.rootElement().children();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = eventTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var eventType = _step.value;
                        var hiddenEventType = true;
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = eventType.children()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var listenerElement = _step1.value;
                                var objectListenerElement = listenerElement;
                                var listenerOrigin = objectListenerElement.eventListener().origin();
                                var hidden = false;
                                if (listenerOrigin === "FrameworkUser" /* SDK.DOMDebuggerModel.EventListener.Origin.FrameworkUser */  && !showFramework) {
                                    hidden = true;
                                }
                                if (listenerOrigin === "Framework" /* SDK.DOMDebuggerModel.EventListener.Origin.Framework */  && showFramework) {
                                    hidden = true;
                                }
                                if (!showPassive && objectListenerElement.eventListener().passive()) {
                                    hidden = true;
                                }
                                if (!showBlocking && !objectListenerElement.eventListener().passive()) {
                                    hidden = true;
                                }
                                objectListenerElement.hidden = hidden;
                                hiddenEventType = hiddenEventType && hidden;
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
                        eventType.hidden = hiddenEventType;
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
            key: "getOrCreateTreeElementForType",
            value: function getOrCreateTreeElementForType(type) {
                var treeItem = this.treeItemMap.get(type);
                if (!treeItem) {
                    treeItem = new EventListenersTreeElement(type, this.linkifier, this.changeCallback);
                    this.treeItemMap.set(type, treeItem);
                    treeItem.hidden = true;
                    this.treeOutline.appendChild(treeItem);
                }
                this.emptyHolder.remove();
                return treeItem;
            }
        },
        {
            key: "addEmptyHolderIfNeeded",
            value: function addEmptyHolderIfNeeded() {
                var allHidden = true;
                var firstVisibleChild = null;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.treeOutline.rootElement().children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var eventType = _step.value;
                        eventType.hidden = !eventType.firstChild();
                        allHidden = allHidden && eventType.hidden;
                        if (!firstVisibleChild && !eventType.hidden) {
                            firstVisibleChild = eventType;
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
                if (allHidden && !this.emptyHolder.parentNode) {
                    this.element.appendChild(this.emptyHolder);
                }
                if (firstVisibleChild) {
                    firstVisibleChild.select(true);
                }
                this.treeOutline.setFocusable(Boolean(firstVisibleChild));
            }
        },
        {
            key: "reset",
            value: function reset() {
                var eventTypes = this.treeOutline.rootElement().children();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = eventTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var eventType = _step.value;
                        eventType.removeChildren();
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
                this.linkifier.reset();
            }
        },
        {
            key: "eventListenersArrivedForTest",
            value: function eventListenersArrivedForTest() {}
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(EventListenersView.prototype), "wasShown", this).call(this);
                this.treeOutline.registerCSSFiles([
                    _eventListenersView_css_js__WEBPACK_IMPORTED_MODULE_10__["default"],
                    _ui_legacy_components_object_ui_objectValue_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return EventListenersView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox);
var EventListenersTreeElement = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(EventListenersTreeElement, _UI_TreeOutline_TreeElement);
    var _super = _create_super(EventListenersTreeElement);
    function EventListenersTreeElement(type, linkifier, changeCallback) {
        _class_call_check(this, EventListenersTreeElement);
        var _this;
        _this = _super.call(this, type);
        _define_property(_assert_this_initialized(_this), "toggleOnClick", void 0);
        _define_property(_assert_this_initialized(_this), "linkifier", void 0);
        _define_property(_assert_this_initialized(_this), "changeCallback", void 0);
        _this.toggleOnClick = true;
        _this.linkifier = linkifier;
        _this.changeCallback = changeCallback;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setLabel(_this.listItemElement, "".concat(type, ", event listener"));
        return _this;
    }
    _create_class(EventListenersTreeElement, [
        {
            key: "addObjectEventListener",
            value: function addObjectEventListener(eventListener, object) {
                var treeElement = new ObjectEventListenerBar(eventListener, object, this.linkifier, this.changeCallback);
                this.appendChild(treeElement);
            }
        }
    ], [
        {
            key: "comparator",
            value: function comparator(element1, element2) {
                if (element1.title === element2.title) {
                    return 0;
                }
                return element1.title > element2.title ? 1 : -1;
            }
        }
    ]);
    return EventListenersTreeElement;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement);
var ObjectEventListenerBar = /*#__PURE__*/ function(_UI_TreeOutline_TreeElement) {
    "use strict";
    _inherits(ObjectEventListenerBar, _UI_TreeOutline_TreeElement);
    var _super = _create_super(ObjectEventListenerBar);
    function ObjectEventListenerBar(eventListener, object, linkifier, changeCallback) {
        _class_call_check(this, ObjectEventListenerBar);
        var _this;
        _this = _super.call(this, '', true);
        _define_property(_assert_this_initialized(_this), "eventListenerInternal", void 0);
        _define_property(_assert_this_initialized(_this), "editable", void 0);
        _define_property(_assert_this_initialized(_this), "changeCallback", void 0);
        _define_property(_assert_this_initialized(_this), "valueTitle", void 0);
        _this.eventListenerInternal = eventListener;
        _this.editable = false;
        _this.setTitle(object, linkifier);
        _this.changeCallback = changeCallback;
        return _this;
    }
    _create_class(ObjectEventListenerBar, [
        {
            key: "onpopulate",
            value: function onpopulate() {
                var _this = this;
                return _async_to_generator(function() {
                    var properties, eventListener, runtimeModel;
                    return _ts_generator(this, function(_state) {
                        properties = [];
                        eventListener = _this.eventListenerInternal;
                        runtimeModel = eventListener.domDebuggerModel().runtimeModel();
                        properties.push(runtimeModel.createRemotePropertyFromPrimitiveValue('useCapture', eventListener.useCapture()));
                        properties.push(runtimeModel.createRemotePropertyFromPrimitiveValue('passive', eventListener.passive()));
                        properties.push(runtimeModel.createRemotePropertyFromPrimitiveValue('once', eventListener.once()));
                        if (typeof eventListener.handler() !== 'undefined') {
                            properties.push(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('handler', eventListener.handler()));
                        }
                        _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertyTreeElement.populateWithProperties(_this, properties, [], true, true, null);
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "setTitle",
            value: function setTitle(object, linkifier) {
                var _this = this;
                var title = this.listItemElement.createChild('span', 'event-listener-details');
                var propertyValue = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesSection.createPropertyValue(object, /* wasThrown */ false, /* showPreview */ false);
                this.valueTitle = propertyValue.element;
                title.appendChild(this.valueTitle);
                if (this.eventListenerInternal.canRemove()) {
                    var deleteButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button();
                    deleteButton.data = {
                        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                        iconName: 'bin',
                        jslogContext: 'delete-event-listener'
                    };
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(deleteButton, i18nString(UIStrings.deleteEventListener));
                    deleteButton.addEventListener('click', function(event) {
                        _this.removeListener();
                        event.consume();
                    }, false);
                    title.appendChild(deleteButton);
                }
                if (this.eventListenerInternal.isScrollBlockingType() && this.eventListenerInternal.canTogglePassive()) {
                    var passiveButton = title.createChild('button', 'event-listener-button');
                    passiveButton.textContent = i18nString(UIStrings.togglePassive);
                    passiveButton.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('passive').track({
                        click: true
                    })));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(passiveButton, i18nString(UIStrings.toggleWhetherEventListenerIs));
                    passiveButton.addEventListener('click', function(event) {
                        _this.togglePassiveListener();
                        event.consume();
                    }, false);
                    title.appendChild(passiveButton);
                }
                var subtitle = title.createChild('span', 'event-listener-tree-subtitle');
                var linkElement = linkifier.linkifyRawLocation(this.eventListenerInternal.location(), this.eventListenerInternal.sourceURL());
                subtitle.appendChild(linkElement);
                this.listItemElement.addEventListener('contextmenu', function(event) {
                    var menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
                    if (event.target !== linkElement) {
                        menu.appendApplicableItems(linkElement);
                    }
                    if (object.subtype === 'node') {
                        menu.defaultSection().appendItem(i18nString(UIStrings.revealInElementsPanel), function() {
                            return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(object);
                        }, {
                            jslogContext: 'reveal-in-elements'
                        });
                    }
                    menu.defaultSection().appendItem(i18nString(UIStrings.deleteEventListener), _this.removeListener.bind(_this), {
                        disabled: !_this.eventListenerInternal.canRemove(),
                        jslogContext: 'delete-event-listener'
                    });
                    menu.defaultSection().appendCheckboxItem(i18nString(UIStrings.passive), _this.togglePassiveListener.bind(_this), {
                        checked: _this.eventListenerInternal.passive(),
                        disabled: !_this.eventListenerInternal.canTogglePassive(),
                        jslogContext: 'passive'
                    });
                    void menu.show();
                });
            }
        },
        {
            key: "removeListener",
            value: function removeListener() {
                this.removeListenerBar();
                void this.eventListenerInternal.remove();
            }
        },
        {
            key: "togglePassiveListener",
            value: function togglePassiveListener() {
                var _this = this;
                void this.eventListenerInternal.togglePassive().then(function() {
                    return _this.changeCallback();
                });
            }
        },
        {
            key: "removeListenerBar",
            value: function removeListenerBar() {
                var parent = this.parent;
                if (!parent) {
                    return;
                }
                parent.removeChild(this);
                if (!parent.childCount()) {
                    parent.collapse();
                }
                var allHidden = true;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = parent.children()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var child = _step.value;
                        if (!child.hidden) {
                            allHidden = false;
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
                parent.hidden = allHidden;
            }
        },
        {
            key: "eventListener",
            value: function eventListener() {
                return this.eventListenerInternal;
            }
        },
        {
            key: "onenter",
            value: function onenter() {
                if (this.valueTitle) {
                    this.valueTitle.click();
                    return true;
                }
                return false;
            }
        },
        {
            key: "ondelete",
            value: function ondelete() {
                if (this.eventListenerInternal.canRemove()) {
                    this.removeListener();
                    return true;
                }
                return false;
            }
        }
    ]);
    return ObjectEventListenerBar;
} //# sourceMappingURL=EventListenersView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement);


}),
"./panels/event_listeners/eventListenersView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.tree-outline-disclosure li {\n  padding: 0 0 0 5px;\n  overflow: hidden;\n  display: flex;\n  min-height: 18px;\n  align-items: center;\n}\n\n.tree-outline-disclosure {\n  padding-left: 0 !important; /* stylelint-disable-line declaration-no-important */\n  padding-right: 3px;\n}\n\n.tree-outline-disclosure li.parent::before {\n  top: 0 !important; /* stylelint-disable-line declaration-no-important */\n}\n\n.tree-outline-disclosure .name {\n  color: var(--sys-color-token-tag);\n}\n\n.tree-outline-disclosure .object-value-node,\n.tree-outline-disclosure .object-value-object {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.event-listener-details {\n  display: flex;\n  min-height: 18px;\n  align-items: center;\n\n  devtools-button {\n    height: 18px;\n  }\n}\n\n.event-listener-tree-subtitle {\n  float: right;\n  margin-left: 5px;\n  flex-shrink: 0;\n}\n\n.event-listener-button {\n  padding: 0 5px;\n  color: var(--sys-color-primary);\n  background-color: var(--sys-color-cdt-base-container);\n  border-radius: 7px;\n  border: 1px solid var(--sys-color-tonal-outline);\n  margin-left: 5px;\n  display: block;\n  flex-shrink: 0;\n\n  &:hover {\n    background-color: var(--sys-color-state-hover-on-subtle);\n  }\n\n  &:active {\n    background-color: var(--sys-color-state-ripple-neutral-on-subtle);\n  }\n}\n\n.tree-outline-disclosure li:hover .event-listener-button {\n  display: inline;\n}\n\n@media (forced-colors: active) {\n  .event-listener-details .event-listener-button {\n    forced-color-adjust: none;\n    opacity: 100%;\n    background: ButtonFace;\n    color: ButtonText;\n    border-color: ButtonText;\n  }\n\n  .event-listener-button:hover {\n    background-color: Highlight !important; /* stylelint-disable-line declaration-no-important */\n    color: HighlightText;\n    border-color: ButtonText;\n  }\n\n  .tree-outline.hide-selection-when-blurred .selected:focus-visible .event-listener-button,\n  .tree-outline-disclosure li:focus-visible .gray-info-message {\n    background-color: Highlight;\n    color: HighlightText;\n    border-color: HighlightText;\n  }\n}\n\n/*# sourceURL=eventListenersView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);