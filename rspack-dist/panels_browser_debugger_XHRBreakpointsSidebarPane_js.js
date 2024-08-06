"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_browser_debugger_XHRBreakpointsSidebarPane_js"], {
"./panels/browser_debugger/XHRBreakpointsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  XHRBreakpointsSidebarPane: function() { return XHRBreakpointsSidebarPane; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _xhrBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./xhrBreakpointsSidebarPane.css.js */ "./panels/browser_debugger/xhrBreakpointsSidebarPane.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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
     *@description Title of the 'XHR/fetch Breakpoints' tool in the bottom sidebar of the Sources tool
     */ xhrfetchBreakpoints: 'XHR/fetch Breakpoints',
    /**
     *@description Text to indicate there are no breakpoints
     */ noBreakpoints: 'No breakpoints',
    /**
     *@description Label for a button in the Sources panel that opens the input field to create a new XHR/fetch breakpoint.
     */ addXhrfetchBreakpoint: 'Add XHR/fetch breakpoint',
    /**
     *@description Text to add a breakpoint
     */ addBreakpoint: 'Add breakpoint',
    /**
     *@description Input element container text content in XHRBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */ breakWhenUrlContains: 'Break when URL contains:',
    /**
     *@description Accessible label for XHR/fetch breakpoint text input
     */ urlBreakpoint: 'URL Breakpoint',
    /**
     *@description Text in XHRBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     *@example {example.com} PH1
     */ urlContainsS: 'URL contains "{PH1}"',
    /**
     *@description Text in XHRBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */ anyXhrOrFetch: 'Any XHR or fetch',
    /**
     *@description Screen reader description of a hit breakpoint in the Sources panel
     */ breakpointHit: 'breakpoint hit',
    /**
     *@description Text to remove all breakpoints
     */ removeAllBreakpoints: 'Remove all breakpoints',
    /**
     *@description Text to remove a breakpoint
     */ removeBreakpoint: 'Remove breakpoint'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/browser_debugger/XHRBreakpointsSidebarPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var containerToBreakpointEntry = new WeakMap();
var breakpointEntryToCheckbox = new WeakMap();
var xhrBreakpointsSidebarPaneInstance;
var _breakpoints = /*#__PURE__*/ new WeakMap(), _list = /*#__PURE__*/ new WeakMap(), _emptyElement = /*#__PURE__*/ new WeakMap(), _breakpointElements = /*#__PURE__*/ new WeakMap(), _addButton = /*#__PURE__*/ new WeakMap(), // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
_hitBreakpoint = /*#__PURE__*/ new WeakMap();
var XHRBreakpointsSidebarPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(XHRBreakpointsSidebarPane, _UI_Widget_VBox);
    var _super = _create_super(XHRBreakpointsSidebarPane);
    function XHRBreakpointsSidebarPane() {
        _class_call_check(this, XHRBreakpointsSidebarPane);
        var _this;
        _this = _super.call(this, true);
        _class_private_field_init(_assert_this_initialized(_this), _breakpoints, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _list, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _emptyElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _breakpointElements, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _addButton, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _hitBreakpoint, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _breakpoints, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListModel.ListModel());
        _class_private_field_set(_assert_this_initialized(_this), _list, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListControl.ListControl(_class_private_field_get(_assert_this_initialized(_this), _breakpoints), _assert_this_initialized(_this), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ListControl.ListMode.NonViewport));
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.section('source.xhr-breakpoints')));
        _this.contentElement.appendChild(_class_private_field_get(_this, _list).element);
        _class_private_field_get(_this, _list).element.classList.add('breakpoint-list', 'hidden');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsList(_class_private_field_get(_this, _list).element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(_class_private_field_get(_this, _list).element, i18nString(UIStrings.xhrfetchBreakpoints));
        _class_private_field_set(_assert_this_initialized(_this), _emptyElement, _this.contentElement.createChild('div', 'gray-info-message'));
        _class_private_field_get(_this, _emptyElement).textContent = i18nString(UIStrings.noBreakpoints);
        _class_private_field_set(_assert_this_initialized(_this), _breakpointElements, new Map());
        _class_private_field_set(_assert_this_initialized(_this), _addButton, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Toolbar.ToolbarButton(i18nString(UIStrings.addXhrfetchBreakpoint), 'plus', undefined, 'sources.add-xhr-fetch-breakpoint'));
        _class_private_field_get(_this, _addButton).addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , function() {
            void _this.addButtonClicked();
        });
        _class_private_field_get(_this, _emptyElement).addEventListener('contextmenu', _this.emptyElementContextMenu.bind(_assert_this_initialized(_this)), true);
        _class_private_field_get(_this, _emptyElement).tabIndex = -1;
        _this.restoreBreakpoints();
        _this.update();
        return _this;
    }
    _create_class(XHRBreakpointsSidebarPane, [
        {
            key: "toolbarItems",
            value: function toolbarItems() {
                return [
                    _class_private_field_get(this, _addButton)
                ];
            }
        },
        {
            key: "emptyElementContextMenu",
            value: function emptyElementContextMenu(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.addBreakpoint), this.addButtonClicked.bind(this), {
                    jslogContext: 'sources.add-xhr-fetch-breakpoint'
                });
                void contextMenu.show();
            }
        },
        {
            key: "addButtonClicked",
            value: function addButtonClicked() {
                var _this = this;
                return _async_to_generator(function() {
                    var inputElementContainer, inputElement, config;
                    function finishEditing(accept, e, text) {
                        this.removeListElement(inputElementContainer);
                        if (accept) {
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().addXHRBreakpoint(text, true);
                            this.setBreakpoint(text);
                        }
                        this.update();
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ViewManager.ViewManager.instance().showView('sources.xhr-breakpoints')
                                ];
                            case 1:
                                _state.sent();
                                inputElementContainer = document.createElement('p');
                                inputElementContainer.classList.add('breakpoint-condition');
                                inputElementContainer.textContent = i18nString(UIStrings.breakWhenUrlContains);
                                inputElementContainer.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value('condition').track({
                                    change: true
                                })));
                                inputElement = inputElementContainer.createChild('span', 'breakpoint-condition-input');
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(inputElement, i18nString(UIStrings.urlBreakpoint));
                                _this.addListElement(inputElementContainer, _class_private_field_get(_this, _list).element.firstChild);
                                config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.Config(finishEditing.bind(_this, true), finishEditing.bind(_this, false));
                                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.InplaceEditor.startEditing(inputElement, config);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "heightForItem",
            value: function heightForItem(_item) {
                return 0;
            }
        },
        {
            key: "isItemSelectable",
            value: function isItemSelectable(_item) {
                return true;
            }
        },
        {
            key: "setBreakpoint",
            value: function setBreakpoint(breakKeyword) {
                if (_class_private_field_get(this, _breakpoints).indexOf(breakKeyword) !== -1) {
                    _class_private_field_get(this, _list).refreshItem(breakKeyword);
                } else {
                    _class_private_field_get(this, _breakpoints).insertWithComparator(breakKeyword, function(a, b) {
                        if (a > b) {
                            return 1;
                        }
                        if (a < b) {
                            return -1;
                        }
                        return 0;
                    });
                }
                if (!_class_private_field_get(this, _list).selectedItem() || !this.hasFocus()) {
                    _class_private_field_get(this, _list).selectItem(_class_private_field_get(this, _breakpoints).at(0));
                }
            }
        },
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                var _this = this;
                var listItemElement = document.createElement('div');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsListitem(listItemElement);
                var element = listItemElement.createChild('div', 'breakpoint-entry');
                containerToBreakpointEntry.set(listItemElement, element);
                var enabled = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().xhrBreakpoints().get(item) || false;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsCheckbox(element);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setChecked(element, enabled);
                element.addEventListener('contextmenu', this.contextMenu.bind(this, item), true);
                var title = item ? i18nString(UIStrings.urlContainsS, {
                    PH1: item
                }) : i18nString(UIStrings.anyXhrOrFetch);
                var label = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.CheckboxLabel.create(title, enabled, undefined, undefined, /* small */ true);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsHidden(label);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setLabel(element, title);
                element.appendChild(label);
                label.checkboxElement.addEventListener('click', this.checkboxClicked.bind(this, item, enabled), false);
                element.addEventListener('click', function(event) {
                    if (event.target === element) {
                        _this.checkboxClicked(item, enabled);
                    }
                }, false);
                breakpointEntryToCheckbox.set(element, label.checkboxElement);
                label.checkboxElement.tabIndex = -1;
                element.tabIndex = -1;
                if (item === _class_private_field_get(this, _list).selectedItem()) {
                    element.tabIndex = 0;
                    this.setDefaultFocusedElement(element);
                }
                element.addEventListener('keydown', function(event) {
                    var handled = false;
                    if (event.key === ' ') {
                        _this.checkboxClicked(item, enabled);
                        handled = true;
                    } else if (event.key === 'Enter') {
                        _this.labelClicked(item);
                        handled = true;
                    }
                    if (handled) {
                        event.consume(true);
                    }
                });
                if (item === _class_private_field_get(this, _hitBreakpoint)) {
                    element.classList.add('breakpoint-hit');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setDescription(element, i18nString(UIStrings.breakpointHit));
                }
                label.classList.add('cursor-auto');
                label.textElement.addEventListener('dblclick', this.labelClicked.bind(this, item), false);
                _class_private_field_get(this, _breakpointElements).set(item, listItemElement);
                listItemElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.item().track({
                    click: true,
                    dblclick: true,
                    keydown: 'ArrowUp|ArrowDown|PageUp|PageDown|Enter|Space'
                })));
                return listItemElement;
            }
        },
        {
            key: "selectedItemChanged",
            value: function selectedItemChanged(from, to, fromElement, toElement) {
                if (fromElement) {
                    var breakpointEntryElement = containerToBreakpointEntry.get(fromElement);
                    if (!breakpointEntryElement) {
                        throw new Error('Expected breakpoint entry to be found for an element');
                    }
                    breakpointEntryElement.tabIndex = -1;
                }
                if (toElement) {
                    var breakpointEntryElement1 = containerToBreakpointEntry.get(toElement);
                    if (!breakpointEntryElement1) {
                        throw new Error('Expected breakpoint entry to be found for an element');
                    }
                    this.setDefaultFocusedElement(breakpointEntryElement1);
                    breakpointEntryElement1.tabIndex = 0;
                    if (this.hasFocus()) {
                        breakpointEntryElement1.focus();
                    }
                }
            }
        },
        {
            key: "updateSelectedItemARIA",
            value: function updateSelectedItemARIA(_fromElement, _toElement) {
                return true;
            }
        },
        {
            key: "removeBreakpoint",
            value: function removeBreakpoint(breakKeyword) {
                var index = _class_private_field_get(this, _breakpoints).indexOf(breakKeyword);
                if (index >= 0) {
                    _class_private_field_get(this, _breakpoints).remove(index);
                }
                _class_private_field_get(this, _breakpointElements).delete(breakKeyword);
                this.update();
            }
        },
        {
            key: "addListElement",
            value: function addListElement(element, beforeNode) {
                _class_private_field_get(this, _list).element.insertBefore(element, beforeNode);
                _class_private_field_get(this, _emptyElement).classList.add('hidden');
                _class_private_field_get(this, _list).element.classList.remove('hidden');
            }
        },
        {
            key: "removeListElement",
            value: function removeListElement(element) {
                _class_private_field_get(this, _list).element.removeChild(element);
                if (!_class_private_field_get(this, _list).element.firstElementChild) {
                    _class_private_field_get(this, _emptyElement).classList.remove('hidden');
                    _class_private_field_get(this, _list).element.classList.add('hidden');
                }
            }
        },
        {
            key: "contextMenu",
            value: function contextMenu(breakKeyword, event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ContextMenu.ContextMenu(event);
                function removeBreakpoint() {
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().removeXHRBreakpoint(breakKeyword);
                    this.removeBreakpoint(breakKeyword);
                }
                function removeAllBreakpoints() {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = _class_private_field_get(this, _breakpointElements).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var url = _step.value;
                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().removeXHRBreakpoint(url);
                            this.removeBreakpoint(url);
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
                    this.update();
                }
                var removeAllTitle = i18nString(UIStrings.removeAllBreakpoints);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.addBreakpoint), this.addButtonClicked.bind(this), {
                    jslogContext: 'sources.add-xhr-fetch-breakpoint'
                });
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeBreakpoint), removeBreakpoint.bind(this), {
                    jslogContext: 'sources.remove-xhr-fetch-breakpoint'
                });
                contextMenu.defaultSection().appendItem(removeAllTitle, removeAllBreakpoints.bind(this), {
                    jslogContext: 'sources.remove-all-xhr-fetch-breakpoints'
                });
                void contextMenu.show();
            }
        },
        {
            key: "checkboxClicked",
            value: function checkboxClicked(breakKeyword, checked) {
                var hadFocus = this.hasFocus();
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().toggleXHRBreakpoint(breakKeyword, !checked);
                _class_private_field_get(this, _list).refreshItem(breakKeyword);
                _class_private_field_get(this, _list).selectItem(breakKeyword);
                if (hadFocus) {
                    this.focus();
                }
            }
        },
        {
            key: "labelClicked",
            value: function labelClicked(breakKeyword) {
                var element = _class_private_field_get(this, _breakpointElements).get(breakKeyword);
                var inputElement = document.createElement('span');
                inputElement.classList.add('breakpoint-condition');
                inputElement.textContent = breakKeyword;
                inputElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_3__.value('condition').track({
                    change: true
                })));
                if (element) {
                    _class_private_field_get(this, _list).element.insertBefore(inputElement, element);
                    element.classList.add('hidden');
                }
                function finishEditing(accept, e, text) {
                    this.removeListElement(inputElement);
                    if (accept) {
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().removeXHRBreakpoint(breakKeyword);
                        this.removeBreakpoint(breakKeyword);
                        var enabled = true;
                        if (element) {
                            var breakpointEntryElement = containerToBreakpointEntry.get(element);
                            var checkboxElement = breakpointEntryElement ? breakpointEntryToCheckbox.get(breakpointEntryElement) : undefined;
                            if (checkboxElement) {
                                enabled = checkboxElement.checked;
                            }
                        }
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().addXHRBreakpoint(text, enabled);
                        this.setBreakpoint(text);
                        _class_private_field_get(this, _list).selectItem(text);
                    } else if (element) {
                        element.classList.remove('hidden');
                    }
                    this.focus();
                }
                var config = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.Config(finishEditing.bind(this, true), finishEditing.bind(this, false));
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.InplaceEditor.InplaceEditor.startEditing(inputElement, config);
            }
        },
        {
            key: "flavorChanged",
            value: function flavorChanged(_object) {
                this.update();
            }
        },
        {
            key: "update",
            value: function update() {
                var isEmpty = _class_private_field_get(this, _breakpoints).length === 0;
                _class_private_field_get(this, _list).element.classList.toggle('hidden', isEmpty);
                _class_private_field_get(this, _emptyElement).classList.toggle('hidden', !isEmpty);
                var details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.DebuggerPausedDetails);
                if (!details || details.reason !== "XHR" /* Protocol.Debugger.PausedEventReason.XHR */ ) {
                    if (_class_private_field_get(this, _hitBreakpoint)) {
                        var oldHitBreakpoint = _class_private_field_get(this, _hitBreakpoint);
                        _class_private_field_set(this, _hitBreakpoint, undefined);
                        if (_class_private_field_get(this, _breakpoints).indexOf(oldHitBreakpoint) >= 0) {
                            _class_private_field_get(this, _list).refreshItem(oldHitBreakpoint);
                        }
                    }
                    return;
                }
                var url = details.auxData && details.auxData['breakpointURL'];
                _class_private_field_set(this, _hitBreakpoint, url);
                if (_class_private_field_get(this, _breakpoints).indexOf(url) < 0) {
                    return;
                }
                _class_private_field_get(this, _list).refreshItem(url);
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ViewManager.ViewManager.instance().showView('sources.xhr-breakpoints');
            }
        },
        {
            key: "restoreBreakpoints",
            value: function restoreBreakpoints() {
                var breakpoints = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMDebuggerModel.DOMDebuggerManager.instance().xhrBreakpoints();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = breakpoints.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var url = _step.value;
                        this.setBreakpoint(url);
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
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(XHRBreakpointsSidebarPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _xhrBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                ]);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!xhrBreakpointsSidebarPaneInstance) {
                    xhrBreakpointsSidebarPaneInstance = new XHRBreakpointsSidebarPane();
                }
                return xhrBreakpointsSidebarPaneInstance;
            }
        }
    ]);
    return XHRBreakpointsSidebarPane;
} //# sourceMappingURL=XHRBreakpointsSidebarPane.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Widget.VBox);


}),
"./panels/browser_debugger/xhrBreakpointsSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.breakpoint-list {\n  padding-bottom: 3px;\n}\n\n.breakpoint-list .editing.being-edited {\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.breakpoint-condition {\n  display: block;\n  margin: 4px 8px 4px 23px;\n}\n\n.breakpoint-condition-input {\n  display: block;\n  margin-left: 0;\n  margin-right: 0;\n  border: 1px solid var(--sys-color-neutral-outline);\n  border-radius: 4px;\n\n  &:focus {\n    outline: 5px auto var(--sys-color-tonal-outline);\n    box-shadow: none;\n  }\n}\n\n.breakpoint-entry {\n  white-space: nowrap;\n  padding: 2px 0;\n}\n\n.breakpoint-list .breakpoint-entry:focus-visible {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.breakpoint-entry [is="dt-checkbox"] {\n  max-width: 100%;\n}\n\n.breakpoint-hit {\n  background-color: var(--sys-color-yellow-container);\n  border-right: 3px solid var(--sys-color-yellow-outline);\n  color: var(--sys-color-on-yellow-container);\n}\n\n@media (forced-colors: active) {\n  .breakpoint-list .breakpoint-entry:hover,\n  .breakpoint-list .breakpoint-entry:focus-visible {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .breakpoint-list .breakpoint-entry:hover *,\n  .breakpoint-list .breakpoint-entry:focus-visible * {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=xhrBreakpointsSidebarPane.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);