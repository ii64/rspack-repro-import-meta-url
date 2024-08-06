"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_browser_debugger_DOMBreakpointsSidebarPane_js"], {
"./panels/browser_debugger/DOMBreakpointsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ContextMenuProvider: function() { return ContextMenuProvider; },
  DOMBreakpointsSidebarPane: function() { return DOMBreakpointsSidebarPane; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _sources_sources_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _domBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domBreakpointsSidebarPane.css.js */ "./panels/browser_debugger/domBreakpointsSidebarPane.css.js");
/*
 * Copyright (C) 2011 Google Inc. All rights reserved.
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
 *     * Neither the name of Google Inc. nor the names of its
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
     *@description Text to indicate there are no breakpoints
     */ noBreakpoints: 'No breakpoints',
    /**
     *@description Accessibility label for the DOM breakpoints list in the Sources panel
     */ domBreakpointsList: 'DOM Breakpoints list',
    /**
     *@description Text with two placeholders separated by a colon
     *@example {Node removed} PH1
     *@example {div#id1} PH2
     */ sS: '{PH1}: {PH2}',
    /**
     *@description Text with three placeholders separated by a colon and a comma
     *@example {Node removed} PH1
     *@example {div#id1} PH2
     *@example {checked} PH3
     */ sSS: '{PH1}: {PH2}, {PH3}',
    /**
     *@description Text exposed to screen readers on checked items.
     */ checked: 'checked',
    /**
     *@description Accessible text exposed to screen readers when the screen reader encounters an unchecked checkbox.
     */ unchecked: 'unchecked',
    /**
     *@description Accessibility label for hit breakpoints in the Sources panel.
     *@example {checked} PH1
     */ sBreakpointHit: '{PH1} breakpoint hit',
    /**
     *@description Screen reader description of a hit breakpoint in the Sources panel
     */ breakpointHit: 'breakpoint hit',
    /**
     *@description A context menu item in the DOM Breakpoints sidebar that reveals the node on which the current breakpoint is set.
     */ revealDomNodeInElementsPanel: 'Reveal DOM node in Elements panel',
    /**
     *@description Text to remove a breakpoint
     */ removeBreakpoint: 'Remove breakpoint',
    /**
     *@description A context menu item in the DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */ removeAllDomBreakpoints: 'Remove all DOM breakpoints',
    /**
     *@description Text in DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */ subtreeModified: 'Subtree modified',
    /**
     *@description Text in DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */ attributeModified: 'Attribute modified',
    /**
     *@description Text in DOMBreakpoints Sidebar Pane of the JavaScript Debugging pane in the Sources panel or the DOM Breakpoints pane in the Elements panel
     */ nodeRemoved: 'Node removed',
    /**
     *@description Entry in context menu of the elements pane, allowing developers to select a DOM
     * breakpoint for the element that they have right-clicked on. Short for the action 'set a
     * breakpoint on this DOM Element'. A breakpoint pauses the website when the code reaches a
     * specified line, or when a specific action happen (in this case, when the DOM Element is
     * modified).
     */ breakOn: 'Break on',
    /**
     *@description Screen reader description for removing a DOM breakpoint.
     */ breakpointRemoved: 'Breakpoint removed',
    /**
     *@description Screen reader description for setting a DOM breakpoint.
     */ breakpointSet: 'Breakpoint set'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/browser_debugger/DOMBreakpointsSidebarPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var domBreakpointsSidebarPaneInstance;
var _emptyElement = /*#__PURE__*/ new WeakMap(), _breakpoints = /*#__PURE__*/ new WeakMap(), _list = /*#__PURE__*/ new WeakMap(), _highlightedBreakpoint = /*#__PURE__*/ new WeakMap();
var DOMBreakpointsSidebarPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(DOMBreakpointsSidebarPane, _UI_Widget_VBox);
    var _super = _create_super(DOMBreakpointsSidebarPane);
    function DOMBreakpointsSidebarPane() {
        _class_call_check(this, DOMBreakpointsSidebarPane);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "elementToCheckboxes", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _emptyElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _breakpoints, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _list, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _highlightedBreakpoint, {
            writable: true,
            value: void 0
        });
        _this.elementToCheckboxes = new WeakMap();
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.section('sources.dom-breakpoints').track({
            resize: true
        })));
        _class_private_field_set(_assert_this_initialized(_this), _emptyElement, _this.contentElement.createChild('div', 'gray-info-message'));
        _class_private_field_get(_this, _emptyElement).textContent = i18nString(UIStrings.noBreakpoints);
        _class_private_field_set(_assert_this_initialized(_this), _breakpoints, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel());
        _class_private_field_set(_assert_this_initialized(_this), _list, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListControl(_class_private_field_get(_assert_this_initialized(_this), _breakpoints), _assert_this_initialized(_this), _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListControl.ListMode.NonViewport));
        _this.contentElement.appendChild(_class_private_field_get(_this, _list).element);
        _class_private_field_get(_this, _list).element.classList.add('breakpoint-list', 'hidden');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsList(_class_private_field_get(_this, _list).element);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(_class_private_field_get(_this, _list).element, i18nString(UIStrings.domBreakpointsList));
        _class_private_field_get(_this, _emptyElement).tabIndex = -1;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, "DOMBreakpointAdded" /* SDK.DOMDebuggerModel.Events.DOMBreakpointAdded */ , _this.breakpointAdded, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, "DOMBreakpointToggled" /* SDK.DOMDebuggerModel.Events.DOMBreakpointToggled */ , _this.breakpointToggled, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel, "DOMBreakpointsRemoved" /* SDK.DOMDebuggerModel.Events.DOMBreakpointsRemoved */ , _this.breakpointsRemoved, _assert_this_initialized(_this));
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var domDebuggerModel = _step.value;
                domDebuggerModel.retrieveDOMBreakpoints();
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = domDebuggerModel.domBreakpoints()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var breakpoint = _step1.value;
                        _this.addBreakpoint(breakpoint);
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
        _class_private_field_set(_assert_this_initialized(_this), _highlightedBreakpoint, null);
        _this.update();
        return _this;
    }
    _create_class(DOMBreakpointsSidebarPane, [
        {
            key: "createElementForItem",
            value: function createElementForItem(item) {
                var element = document.createElement('div');
                element.classList.add('breakpoint-entry');
                element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.domBreakpoint().context(item.type).track({
                    keydown: 'ArrowUp|ArrowDown|PageUp|PageDown'
                })));
                element.addEventListener('contextmenu', this.contextMenu.bind(this, item), true);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.markAsListitem(element);
                element.tabIndex = -1;
                var checkboxLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.UIUtils.CheckboxLabel.create(/* title */ undefined, item.enabled);
                var checkboxElement = checkboxLabel.checkboxElement;
                checkboxElement.addEventListener('click', this.checkboxClicked.bind(this, item), false);
                checkboxElement.tabIndex = -1;
                this.elementToCheckboxes.set(element, checkboxElement);
                element.appendChild(checkboxLabel);
                element.addEventListener('keydown', function(event) {
                    if (event.key === ' ') {
                        checkboxLabel.checkboxElement.click();
                        event.consume(true);
                    }
                });
                var labelElement = document.createElement('div');
                labelElement.classList.add('dom-breakpoint');
                element.appendChild(labelElement);
                var description = document.createElement('div');
                var breakpointTypeLabel = BreakpointTypeLabels.get(item.type);
                description.textContent = breakpointTypeLabel ? breakpointTypeLabel() : null;
                var breakpointTypeText = breakpointTypeLabel ? breakpointTypeLabel() : '';
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(checkboxElement, breakpointTypeText);
                checkboxElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.toggle().track({
                    click: true
                })));
                var checkedStateText = item.enabled ? i18nString(UIStrings.checked) : i18nString(UIStrings.unchecked);
                var linkifiedNode = document.createElement('monospace');
                linkifiedNode.style.display = 'block';
                labelElement.appendChild(linkifiedNode);
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(item.node, {
                    preventKeyboardFocus: true,
                    tooltip: undefined
                }).then(function(linkified) {
                    linkifiedNode.appendChild(linkified);
                    // Give the checkbox an aria-label as it is required for all form element
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(checkboxElement, i18nString(UIStrings.sS, {
                        PH1: breakpointTypeText,
                        PH2: linkified.deepTextContent()
                    }));
                    // The parent list element is the one that actually gets focused.
                    // Assign it an aria-label with complete information for the screen reader to read out properly
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setLabel(element, i18nString(UIStrings.sSS, {
                        PH1: breakpointTypeText,
                        PH2: linkified.deepTextContent(),
                        PH3: checkedStateText
                    }));
                });
                labelElement.appendChild(description);
                if (item === _class_private_field_get(this, _highlightedBreakpoint)) {
                    element.classList.add('breakpoint-hit');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(element, i18nString(UIStrings.sBreakpointHit, {
                        PH1: checkedStateText
                    }));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(checkboxElement, i18nString(UIStrings.breakpointHit));
                } else {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.setDescription(element, checkedStateText);
                }
                _class_private_field_get(this, _emptyElement).classList.add('hidden');
                _class_private_field_get(this, _list).element.classList.remove('hidden');
                return element;
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
            key: "updateSelectedItemARIA",
            value: function updateSelectedItemARIA(_fromElement, _toElement) {
                return true;
            }
        },
        {
            key: "selectedItemChanged",
            value: function selectedItemChanged(from, to, fromElement, toElement) {
                if (fromElement) {
                    fromElement.tabIndex = -1;
                }
                if (toElement) {
                    this.setDefaultFocusedElement(toElement);
                    toElement.tabIndex = 0;
                    if (this.hasFocus()) {
                        toElement.focus();
                    }
                }
            }
        },
        {
            key: "breakpointAdded",
            value: function breakpointAdded(event) {
                this.addBreakpoint(event.data);
            }
        },
        {
            key: "breakpointToggled",
            value: function breakpointToggled(event) {
                var hadFocus = this.hasFocus();
                var breakpoint = event.data;
                _class_private_field_get(this, _list).refreshItem(breakpoint);
                if (hadFocus) {
                    this.focus();
                }
            }
        },
        {
            key: "breakpointsRemoved",
            value: function breakpointsRemoved(event) {
                var hadFocus = this.hasFocus();
                var breakpoints = event.data;
                var lastIndex = -1;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = breakpoints[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var breakpoint = _step.value;
                        var index = _class_private_field_get(this, _breakpoints).indexOf(breakpoint);
                        if (index >= 0) {
                            _class_private_field_get(this, _breakpoints).remove(index);
                            lastIndex = index;
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
                if (_class_private_field_get(this, _breakpoints).length === 0) {
                    _class_private_field_get(this, _emptyElement).classList.remove('hidden');
                    this.setDefaultFocusedElement(_class_private_field_get(this, _emptyElement));
                    _class_private_field_get(this, _list).element.classList.add('hidden');
                } else if (lastIndex >= 0) {
                    var breakpointToSelect = _class_private_field_get(this, _breakpoints).at(lastIndex);
                    if (breakpointToSelect) {
                        _class_private_field_get(this, _list).selectItem(breakpointToSelect);
                    }
                }
                if (hadFocus) {
                    this.focus();
                }
            }
        },
        {
            key: "addBreakpoint",
            value: function addBreakpoint(breakpoint) {
                _class_private_field_get(this, _breakpoints).insertWithComparator(breakpoint, function(breakpointA, breakpointB) {
                    if (breakpointA.type > breakpointB.type) {
                        return -1;
                    }
                    if (breakpointA.type < breakpointB.type) {
                        return 1;
                    }
                    return 0;
                });
                if (!_class_private_field_get(this, _list).selectedItem() || !this.hasFocus()) {
                    _class_private_field_get(this, _list).selectItem(_class_private_field_get(this, _breakpoints).at(0));
                }
            }
        },
        {
            key: "contextMenu",
            value: function contextMenu(breakpoint, event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.revealDomNodeInElementsPanel), function() {
                    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(breakpoint.node);
                }, {
                    jslogContext: 'reveal-in-elements'
                });
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeBreakpoint), function() {
                    breakpoint.domDebuggerModel.removeDOMBreakpoint(breakpoint.node, breakpoint.type);
                }, {
                    jslogContext: 'remove-breakpoint'
                });
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.removeAllDomBreakpoints), function() {
                    breakpoint.domDebuggerModel.removeAllDOMBreakpoints();
                }, {
                    jslogContext: 'remove-all-dom-breakpoints'
                });
                void contextMenu.show();
            }
        },
        {
            key: "checkboxClicked",
            value: function checkboxClicked(breakpoint, event) {
                breakpoint.domDebuggerModel.toggleDOMBreakpoint(breakpoint, event.target ? event.target.checked : false);
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
                var details = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerPausedDetails);
                if (_class_private_field_get(this, _highlightedBreakpoint)) {
                    var oldHighlightedBreakpoint = _class_private_field_get(this, _highlightedBreakpoint);
                    _class_private_field_set(this, _highlightedBreakpoint, null);
                    _class_private_field_get(this, _list).refreshItem(oldHighlightedBreakpoint);
                }
                if (!details || !details.auxData || details.reason !== "DOM" /* Protocol.Debugger.PausedEventReason.DOM */ ) {
                    return;
                }
                var domDebuggerModel = details.debuggerModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
                if (!domDebuggerModel) {
                    return;
                }
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var data = domDebuggerModel.resolveDOMBreakpointData(details.auxData);
                if (!data) {
                    return;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _breakpoints)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var breakpoint = _step.value;
                        if (breakpoint.node === data.node && breakpoint.type === data.type) {
                            _class_private_field_set(this, _highlightedBreakpoint, breakpoint);
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
                if (_class_private_field_get(this, _highlightedBreakpoint)) {
                    _class_private_field_get(this, _list).refreshItem(_class_private_field_get(this, _highlightedBreakpoint));
                }
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ViewManager.ViewManager.instance().showView('sources.dom-breakpoints');
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(DOMBreakpointsSidebarPane.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _domBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ]);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!domBreakpointsSidebarPaneInstance) {
                    domBreakpointsSidebarPaneInstance = new DOMBreakpointsSidebarPane();
                }
                return domBreakpointsSidebarPaneInstance;
            }
        }
    ]);
    return DOMBreakpointsSidebarPane;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Widget.VBox);
var BreakpointTypeLabels = new Map([
    [
        "subtree-modified" /* Protocol.DOMDebugger.DOMBreakpointType.SubtreeModified */ ,
        i18nLazyString(UIStrings.subtreeModified)
    ],
    [
        "attribute-modified" /* Protocol.DOMDebugger.DOMBreakpointType.AttributeModified */ ,
        i18nLazyString(UIStrings.attributeModified)
    ],
    [
        "node-removed" /* Protocol.DOMDebugger.DOMBreakpointType.NodeRemoved */ ,
        i18nLazyString(UIStrings.nodeRemoved)
    ]
]);
var ContextMenuProvider = /*#__PURE__*/ function() {
    "use strict";
    function ContextMenuProvider() {
        _class_call_check(this, ContextMenuProvider);
    }
    _create_class(ContextMenuProvider, [
        {
            key: "appendApplicableItems",
            value: function appendApplicableItems(event, contextMenu, node) {
                if (node.pseudoType()) {
                    return;
                }
                var domDebuggerModel = node.domModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
                if (!domDebuggerModel) {
                    return;
                }
                function toggleBreakpoint(type) {
                    if (!domDebuggerModel) {
                        return;
                    }
                    var label = _sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPausedMessage.BreakpointTypeNouns.get(type);
                    var labelString = label ? label() : '';
                    if (domDebuggerModel.hasDOMBreakpoint(node, type)) {
                        domDebuggerModel.removeDOMBreakpoint(node, type);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.alert("".concat(i18nString(UIStrings.breakpointRemoved), ": ").concat(labelString));
                    } else {
                        domDebuggerModel.setDOMBreakpoint(node, type);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ARIAUtils.alert("".concat(i18nString(UIStrings.breakpointSet), ": ").concat(labelString));
                    }
                }
                var breakpointsMenu = contextMenu.debugSection().appendSubMenuItem(i18nString(UIStrings.breakOn), false, 'break-on');
                var allBreakpointTypes = {
                    SubtreeModified: "subtree-modified" /* Protocol.DOMDebugger.DOMBreakpointType.SubtreeModified */ ,
                    AttributeModified: "attribute-modified" /* Protocol.DOMDebugger.DOMBreakpointType.AttributeModified */ ,
                    NodeRemoved: "node-removed" /* Protocol.DOMDebugger.DOMBreakpointType.NodeRemoved */ 
                };
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.values(allBreakpointTypes)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var type = _step.value;
                        var label = _sources_sources_js__WEBPACK_IMPORTED_MODULE_5__.DebuggerPausedMessage.BreakpointTypeNouns.get(type);
                        if (label) {
                            breakpointsMenu.defaultSection().appendCheckboxItem(label(), toggleBreakpoint.bind(null, type), {
                                checked: domDebuggerModel.hasDOMBreakpoint(node, type),
                                jslogContext: type
                            });
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
        }
    ]);
    return ContextMenuProvider;
} //# sourceMappingURL=DOMBreakpointsSidebarPane.js.map
();


}),
"./panels/browser_debugger/domBreakpointsSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.breakpoint-list {\n  padding-bottom: 3px;\n}\n\n.breakpoint-list .dom-breakpoint > div {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.breakpoint-entry {\n  display: flex;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  padding: 2px 0;\n}\n\n.breakpoint-entry:focus-visible {\n  background-color: var(--sys-color-tonal-container);\n}\n\n.breakpoint-hit {\n  background-color: var(--sys-color-neutral-container);\n  color: var(--sys-color-on-surface);\n}\n\n@media (forced-colors: active) {\n  .breakpoint-entry:focus-visible,\n  .breakpoint-list .breakpoint-entry:hover {\n    forced-color-adjust: none;\n    background-color: Highlight;\n  }\n\n  .breakpoint-entry:focus-visible *,\n  .breakpoint-list .breakpoint-entry:hover * {\n    color: HighlightText;\n  }\n}\n\n/*# sourceURL=domBreakpointsSidebarPane.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);