"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_browser_debugger_CategorizedBreakpointsSidebarPane_js"], {
"./panels/browser_debugger/CategorizedBreakpointsSidebarPane.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CategorizedBreakpointsSidebarPane: function() { return CategorizedBreakpointsSidebarPane; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/sources/sources.js */ "./panels/sources/sources.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _categorizedBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorizedBreakpointsSidebarPane.css.js */ "./panels/browser_debugger/categorizedBreakpointsSidebarPane.css.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
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






var UIStrings = {
    /**
     * @description Category of breakpoints
     */ auctionWorklet: 'Ad Auction Worklet',
    /**
     *@description Text that refers to the animation of the web page
     */ animation: 'Animation',
    /**
     *@description Screen reader description of a hit breakpoint in the Sources panel
     */ breakpointHit: 'breakpoint hit',
    /**
     *@description Text in DOMDebugger Model
     */ canvas: 'Canvas',
    /**
     *@description Text in DOMDebugger Model
     */ clipboard: 'Clipboard',
    /**
     * @description Noun. Describes a group of DOM events (such as 'select' and 'submit') in this context.
     */ control: 'Control',
    /**
     *@description Text that refers to device such as a phone
     */ device: 'Device',
    /**
     *@description Text in DOMDebugger Model
     */ domMutation: 'DOM Mutation',
    /**
     *@description Text in DOMDebugger Model
     */ dragDrop: 'Drag / drop',
    /**
     *@description Title for a group of cities
     */ geolocation: 'Geolocation',
    /**
     *@description Text in DOMDebugger Model
     */ keyboard: 'Keyboard',
    /**
     *@description Text to load something
     */ load: 'Load',
    /**
     *@description Text that appears on a button for the media resource type filter.
     */ media: 'Media',
    /**
     *@description Text in DOMDebugger Model
     */ mouse: 'Mouse',
    /**
     *@description Text in DOMDebugger Model
     */ notification: 'Notification',
    /**
     *@description Text to parse something
     */ parse: 'Parse',
    /**
     *@description Text in DOMDebugger Model
     */ pictureinpicture: 'Picture-in-Picture',
    /**
     *@description Text in DOMDebugger Model
     */ pointer: 'Pointer',
    /**
     *@description Label for a group of JavaScript files
     */ script: 'Script',
    /**
     *@description Category of breakpoints
     */ sharedStorageWorklet: 'Shared Storage Worklet',
    /**
     *@description Text in DOMDebugger Model
     */ timer: 'Timer',
    /**
     *@description Text for the touch type to simulate on a device
     */ touch: 'Touch',
    /**
     *@description Title for a category of breakpoints on Trusted Type violations
     */ trustedTypeViolations: 'Trusted Type Violations',
    /**
     *@description Title of the WebAudio tool
     */ webaudio: 'WebAudio',
    /**
     *@description Text in DOMDebugger Model
     */ window: 'Window',
    /**
     *@description Text for the service worker type.
     */ worker: 'Worker',
    /**
     *@description Text that appears on a button for the xhr resource type filter.
     */ xhr: 'XHR'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/browser_debugger/CategorizedBreakpointsSidebarPane.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var _categoriesTreeOutline = /*#__PURE__*/ new WeakMap(), _viewId = /*#__PURE__*/ new WeakMap(), _detailsPausedReason = /*#__PURE__*/ new WeakMap(), _categories = /*#__PURE__*/ new WeakMap(), _breakpoints = /*#__PURE__*/ new WeakMap(), _highlightedElement = /*#__PURE__*/ new WeakMap();
var CategorizedBreakpointsSidebarPane = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(CategorizedBreakpointsSidebarPane, _UI_Widget_VBox);
    var _super = _create_super(CategorizedBreakpointsSidebarPane);
    function CategorizedBreakpointsSidebarPane(breakpoints, viewId, detailsPausedReason) {
        _class_call_check(this, CategorizedBreakpointsSidebarPane);
        var _this;
        _this = _super.call(this, true);
        _class_private_field_init(_assert_this_initialized(_this), _categoriesTreeOutline, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _viewId, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _detailsPausedReason, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _categories, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _breakpoints, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _highlightedElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _categoriesTreeOutline, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeOutlineInShadow());
        _class_private_field_get(_this, _categoriesTreeOutline).setShowSelectionOnKeyboardFocus(/* show */ true);
        _this.contentElement.appendChild(_class_private_field_get(_this, _categoriesTreeOutline).element);
        _class_private_field_set(_assert_this_initialized(_this), _viewId, viewId);
        _class_private_field_set(_assert_this_initialized(_this), _detailsPausedReason, detailsPausedReason);
        var categories = new Set(breakpoints.map(function(bp) {
            return bp.category();
        }));
        var sortedCategories = _to_consumable_array(categories).sort(function(a, b) {
            var categoryA = getLocalizedCategory(a);
            var categoryB = getLocalizedCategory(b);
            return categoryA.localeCompare(categoryB, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale);
        });
        _class_private_field_set(_assert_this_initialized(_this), _categories, new Map());
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = sortedCategories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var category = _step.value;
                _this.createCategory(category);
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
        if (sortedCategories.length > 0) {
            var firstCategory = _class_private_field_get(_this, _categories).get(sortedCategories[0]);
            if (firstCategory) {
                firstCategory.element.select();
            }
        }
        _class_private_field_set(_assert_this_initialized(_this), _breakpoints, new Map());
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = breakpoints[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var breakpoint = _step1.value;
                _this.createBreakpoint(breakpoint);
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
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerPaused, _this.update, _assert_this_initialized(_this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerResumed, _this.update, _assert_this_initialized(_this));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, _this.update, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(CategorizedBreakpointsSidebarPane, [
        {
            key: "categories",
            get: function get() {
                return _class_private_field_get(this, _categories);
            }
        },
        {
            key: "breakpoints",
            get: function get() {
                return _class_private_field_get(this, _breakpoints);
            }
        },
        {
            key: "focus",
            value: function focus() {
                _class_private_field_get(this, _categoriesTreeOutline).forceSelect();
            }
        },
        {
            key: "handleSpaceKeyEventOnBreakpoint",
            value: function handleSpaceKeyEventOnBreakpoint(event, breakpoint) {
                if (event && event.key === ' ') {
                    if (breakpoint) {
                        breakpoint.checkbox.click();
                    }
                    event.consume(true);
                }
            }
        },
        {
            key: "createCategory",
            value: function createCategory(name) {
                var _this = this;
                var labelNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(getLocalizedCategory(name), undefined, undefined, name, /* small */ true);
                labelNode.checkboxElement.addEventListener('click', this.categoryCheckboxClicked.bind(this, name), true);
                labelNode.checkboxElement.tabIndex = -1;
                var treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(labelNode, undefined, name);
                treeElement.listItemElement.addEventListener('keydown', function(event) {
                    _this.handleSpaceKeyEventOnBreakpoint(event, _class_private_field_get(_this, _categories).get(name));
                });
                labelNode.checkboxElement.addEventListener('keydown', function(event) {
                    treeElement.listItemElement.focus();
                    _this.handleSpaceKeyEventOnBreakpoint(event, _class_private_field_get(_this, _categories).get(name));
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeElement.listItemElement, false);
                _class_private_field_get(this, _categoriesTreeOutline).appendChild(treeElement);
                _class_private_field_get(this, _categories).set(name, {
                    element: treeElement,
                    checkbox: labelNode.checkboxElement
                });
            }
        },
        {
            key: "createBreakpoint",
            value: function createBreakpoint(breakpoint) {
                var _this = this;
                var labelNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.CheckboxLabel.create(_panels_sources_sources_js__WEBPACK_IMPORTED_MODULE_3__.CategorizedBreakpointL10n.getLocalizedBreakpointName(breakpoint.name), undefined, undefined, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(breakpoint.name), /* small */ true);
                labelNode.classList.add('source-code');
                labelNode.checkboxElement.addEventListener('click', this.breakpointCheckboxClicked.bind(this, breakpoint), true);
                labelNode.checkboxElement.tabIndex = -1;
                var treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.TreeOutline.TreeElement(labelNode, undefined, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.toKebabCase(breakpoint.name));
                treeElement.listItemElement.addEventListener('keydown', function(event) {
                    _this.handleSpaceKeyEventOnBreakpoint(event, _class_private_field_get(_this, _breakpoints).get(breakpoint));
                });
                labelNode.checkboxElement.addEventListener('keydown', function(event) {
                    treeElement.listItemElement.focus();
                    _this.handleSpaceKeyEventOnBreakpoint(event, _class_private_field_get(_this, _breakpoints).get(breakpoint));
                });
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeElement.listItemElement, false);
                treeElement.listItemElement.createChild('div', 'breakpoint-hit-marker');
                var category = _class_private_field_get(this, _categories).get(breakpoint.category());
                if (category) {
                    category.element.appendChild(treeElement);
                }
                // Better to return that to produce a side-effect
                _class_private_field_get(this, _breakpoints).set(breakpoint, {
                    element: treeElement,
                    checkbox: labelNode.checkboxElement
                });
            }
        },
        {
            key: "getBreakpointFromPausedDetails",
            value: function getBreakpointFromPausedDetails(_details) {
                return null;
            }
        },
        {
            key: "update",
            value: function update() {
                var target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target);
                var debuggerModel = target ? target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel) : null;
                var details = debuggerModel ? debuggerModel.debuggerPausedDetails() : null;
                if (!details || details.reason !== _class_private_field_get(this, _detailsPausedReason) || !details.auxData) {
                    if (_class_private_field_get(this, _highlightedElement)) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(_class_private_field_get(this, _highlightedElement), '');
                        _class_private_field_get(this, _highlightedElement).classList.remove('breakpoint-hit');
                        _class_private_field_set(this, _highlightedElement, undefined);
                    }
                    return;
                }
                var breakpoint = this.getBreakpointFromPausedDetails(details);
                if (!breakpoint) {
                    return;
                }
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance().showView(_class_private_field_get(this, _viewId));
                var category = _class_private_field_get(this, _categories).get(breakpoint.category());
                if (category) {
                    category.element.expand();
                }
                var matchingBreakpoint = _class_private_field_get(this, _breakpoints).get(breakpoint);
                if (matchingBreakpoint) {
                    _class_private_field_set(this, _highlightedElement, matchingBreakpoint.element.listItemElement);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setDescription(_class_private_field_get(this, _highlightedElement), i18nString(UIStrings.breakpointHit));
                    _class_private_field_get(this, _highlightedElement).classList.add('breakpoint-hit');
                }
            }
        },
        {
            // Probably can be kept although eventListener does not call this._breakpointCheckboxClicke
            key: "categoryCheckboxClicked",
            value: function categoryCheckboxClicked(category) {
                var item = _class_private_field_get(this, _categories).get(category);
                if (!item) {
                    return;
                }
                var enabled = item.checkbox.checked;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(item.element.listItemElement, enabled);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _breakpoints)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 2), breakpoint = _step_value[0], treeItem = _step_value[1];
                        if (breakpoint.category() === category) {
                            var matchingBreakpoint = _class_private_field_get(this, _breakpoints).get(breakpoint);
                            if (matchingBreakpoint) {
                                matchingBreakpoint.checkbox.checked = enabled;
                                this.toggleBreakpoint(breakpoint, enabled);
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(treeItem.element.listItemElement, enabled);
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
            key: "toggleBreakpoint",
            value: function toggleBreakpoint(breakpoint, enabled) {
                breakpoint.setEnabled(enabled);
            }
        },
        {
            key: "breakpointCheckboxClicked",
            value: function breakpointCheckboxClicked(breakpoint) {
                var item = _class_private_field_get(this, _breakpoints).get(breakpoint);
                if (!item) {
                    return;
                }
                this.toggleBreakpoint(breakpoint, item.checkbox.checked);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(item.element.listItemElement, item.checkbox.checked);
                // Put the rest in a separate function
                var hasEnabled = false;
                var hasDisabled = false;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _breakpoints).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var other = _step.value;
                        if (other.category() === breakpoint.category()) {
                            if (other.enabled()) {
                                hasEnabled = true;
                            } else {
                                hasDisabled = true;
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
                var category = _class_private_field_get(this, _categories).get(breakpoint.category());
                if (!category) {
                    return;
                }
                category.checkbox.checked = hasEnabled;
                category.checkbox.indeterminate = hasEnabled && hasDisabled;
                if (category.checkbox.indeterminate) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setCheckboxAsIndeterminate(category.element.listItemElement);
                } else {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.setChecked(category.element.listItemElement, hasEnabled);
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(CategorizedBreakpointsSidebarPane.prototype), "wasShown", this).call(this);
                _class_private_field_get(this, _categoriesTreeOutline).registerCSSFiles([
                    _categorizedBreakpointsSidebarPane_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return CategorizedBreakpointsSidebarPane;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.VBox);
var _obj;
var LOCALIZED_CATEGORIES = (_obj = {}, _define_property(_obj, "animation" /* SDK.CategorizedBreakpoint.Category.Animation */ , i18nLazyString(UIStrings.animation)), _define_property(_obj, "auction-worklet" /* SDK.CategorizedBreakpoint.Category.AuctionWorklet */ , i18nLazyString(UIStrings.auctionWorklet)), _define_property(_obj, "canvas" /* SDK.CategorizedBreakpoint.Category.Canvas */ , i18nLazyString(UIStrings.canvas)), _define_property(_obj, "clipboard" /* SDK.CategorizedBreakpoint.Category.Clipboard */ , i18nLazyString(UIStrings.clipboard)), _define_property(_obj, "control" /* SDK.CategorizedBreakpoint.Category.Control */ , i18nLazyString(UIStrings.control)), _define_property(_obj, "device" /* SDK.CategorizedBreakpoint.Category.Device */ , i18nLazyString(UIStrings.device)), _define_property(_obj, "dom-mutation" /* SDK.CategorizedBreakpoint.Category.DomMutation */ , i18nLazyString(UIStrings.domMutation)), _define_property(_obj, "drag-drop" /* SDK.CategorizedBreakpoint.Category.DragDrop */ , i18nLazyString(UIStrings.dragDrop)), _define_property(_obj, "geolocation" /* SDK.CategorizedBreakpoint.Category.Geolocation */ , i18nLazyString(UIStrings.geolocation)), _define_property(_obj, "keyboard" /* SDK.CategorizedBreakpoint.Category.Keyboard */ , i18nLazyString(UIStrings.keyboard)), _define_property(_obj, "load" /* SDK.CategorizedBreakpoint.Category.Load */ , i18nLazyString(UIStrings.load)), _define_property(_obj, "media" /* SDK.CategorizedBreakpoint.Category.Media */ , i18nLazyString(UIStrings.media)), _define_property(_obj, "mouse" /* SDK.CategorizedBreakpoint.Category.Mouse */ , i18nLazyString(UIStrings.mouse)), _define_property(_obj, "notification" /* SDK.CategorizedBreakpoint.Category.Notification */ , i18nLazyString(UIStrings.notification)), _define_property(_obj, "parse" /* SDK.CategorizedBreakpoint.Category.Parse */ , i18nLazyString(UIStrings.parse)), _define_property(_obj, "picture-in-picture" /* SDK.CategorizedBreakpoint.Category.PictureInPicture */ , i18nLazyString(UIStrings.pictureinpicture)), _define_property(_obj, "pointer" /* SDK.CategorizedBreakpoint.Category.Pointer */ , i18nLazyString(UIStrings.pointer)), _define_property(_obj, "script" /* SDK.CategorizedBreakpoint.Category.Script */ , i18nLazyString(UIStrings.script)), _define_property(_obj, "shared-storage-worklet" /* SDK.CategorizedBreakpoint.Category.SharedStorageWorklet */ , i18nLazyString(UIStrings.sharedStorageWorklet)), _define_property(_obj, "timer" /* SDK.CategorizedBreakpoint.Category.Timer */ , i18nLazyString(UIStrings.timer)), _define_property(_obj, "touch" /* SDK.CategorizedBreakpoint.Category.Touch */ , i18nLazyString(UIStrings.touch)), _define_property(_obj, "trusted-type-violation" /* SDK.CategorizedBreakpoint.Category.TrustedTypeViolation */ , i18nLazyString(UIStrings.trustedTypeViolations)), _define_property(_obj, "web-audio" /* SDK.CategorizedBreakpoint.Category.WebAudio */ , i18nLazyString(UIStrings.webaudio)), _define_property(_obj, "window" /* SDK.CategorizedBreakpoint.Category.Window */ , i18nLazyString(UIStrings.window)), _define_property(_obj, "worker" /* SDK.CategorizedBreakpoint.Category.Worker */ , i18nLazyString(UIStrings.worker)), _define_property(_obj, "xhr" /* SDK.CategorizedBreakpoint.Category.Xhr */ , i18nLazyString(UIStrings.xhr)), _obj);
function getLocalizedCategory(category) {
    return LOCALIZED_CATEGORIES[category]();
} //# sourceMappingURL=CategorizedBreakpointsSidebarPane.js.map


}),
"./panels/browser_debugger/categorizedBreakpointsSidebarPane.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  margin: 0;\n  padding: 2px 4px;\n  min-height: 18px;\n}\n\n.tree-outline {\n  padding: 0;\n}\n\n.tree-outline li {\n  margin-left: 14px;\n  user-select: text;\n}\n\n.tree-outline li.parent {\n  margin-left: 1px;\n}\n\n.tree-outline li:not(.parent)::before {\n  display: none;\n}\n\n.breakpoint-hit {\n  background-color: var(--sys-color-yellow-container);\n  color: var(--sys-color-on-yellow-container);\n}\n\n.breakpoint-hit .breakpoint-hit-marker {\n  background-color: var(--sys-color-yellow-container);\n  border-right: 3px solid var(--sys-color-yellow-outline);\n  color: var(--sys-color-on-yellow-container);\n  height: 100%;\n  left: 0;\n  margin-left: -30px;\n  position: absolute;\n  right: -4px;\n  z-index: -1;\n}\n\n.source-code[is="dt-checkbox"] {\n  max-width: 100%;\n}\n\n/*# sourceURL=categorizedBreakpointsSidebarPane.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);