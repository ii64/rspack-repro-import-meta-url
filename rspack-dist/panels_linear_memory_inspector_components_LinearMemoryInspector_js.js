"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryInspector_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryInspector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AddressChangedEvent: function() { return AddressChangedEvent; },
  LinearMemoryInspector: function() { return LinearMemoryInspector; },
  MemoryRequestEvent: function() { return MemoryRequestEvent; },
  SettingsChangedEvent: function() { return SettingsChangedEvent; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _linearMemoryInspector_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linearMemoryInspector.css.js */ "./panels/linear_memory_inspector/components/linearMemoryInspector.css.js");
/* harmony import */var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
// Copyright (c) 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        "devtools-linear-memory-inspector-inspector"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="view">\n        <',
        "\n          .data=",
        "\n          @refreshrequested=",
        "\n          @addressinputchanged=",
        "\n          @pagenavigation=",
        "\n          @historynavigation=",
        "></",
        ">\n          <",
        "\n          .data=",
        "\n          @jumptohighlightedmemory=",
        ">\n          </",
        ">\n        <",
        "\n          .data=",
        "\n          @byteselected=",
        "\n          @resize=",
        ">\n        </",
        '>\n      </div>\n      <div class="value-interpreter">\n        <',
        "\n          .data=",
        "\n          @valuetypetoggled=",
        "\n          @valuetypemodechanged=",
        "\n          @endiannesschanged=",
        "\n          @jumptopointeraddress=",
        "\n          >\n        </",
        "/>\n      </div>\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}




var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.html;






var UIStrings = {
    /**
     *@description Tooltip text that appears when hovering over an invalid address in the address line in the Linear memory inspector
     *@example {0x00000000} PH1
     *@example {0x00400000} PH2
     */ addressHasToBeANumberBetweenSAnd: 'Address has to be a number between {PH1} and {PH2}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/linear_memory_inspector/components/LinearMemoryInspector.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var MemoryRequestEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(MemoryRequestEvent, Event1);
    var _super = _create_super(MemoryRequestEvent);
    function MemoryRequestEvent(start, end, address) {
        _class_call_check(this, MemoryRequestEvent);
        var _this;
        _this = _super.call(this, MemoryRequestEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = {
            start: start,
            end: end,
            address: address
        };
        return _this;
    }
    return MemoryRequestEvent;
}(_wrap_native_super(Event));
_define_property(MemoryRequestEvent, "eventName", 'memoryrequest');
var AddressChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(AddressChangedEvent, Event1);
    var _super = _create_super(AddressChangedEvent);
    function AddressChangedEvent(address) {
        _class_call_check(this, AddressChangedEvent);
        var _this;
        _this = _super.call(this, AddressChangedEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = address;
        return _this;
    }
    return AddressChangedEvent;
}(_wrap_native_super(Event));
_define_property(AddressChangedEvent, "eventName", 'addresschanged');
var SettingsChangedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(SettingsChangedEvent, Event1);
    var _super = _create_super(SettingsChangedEvent);
    function SettingsChangedEvent(settings) {
        _class_call_check(this, SettingsChangedEvent);
        var _this;
        _this = _super.call(this, SettingsChangedEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = settings;
        return _this;
    }
    return SettingsChangedEvent;
}(_wrap_native_super(Event));
_define_property(SettingsChangedEvent, "eventName", 'settingschanged');
var _address = /*#__PURE__*/ new WeakMap(), _callback = /*#__PURE__*/ new WeakMap();
var AddressHistoryEntry = /*#__PURE__*/ function() {
    "use strict";
    function AddressHistoryEntry(address, callback) {
        _class_call_check(this, AddressHistoryEntry);
        _class_private_field_init(this, _address, {
            writable: true,
            value: 0
        });
        _class_private_field_init(this, _callback, {
            writable: true,
            value: void 0
        });
        if (address < 0) {
            throw new Error('Address should be a greater or equal to zero');
        }
        _class_private_field_set(this, _address, address);
        _class_private_field_set(this, _callback, callback);
    }
    _create_class(AddressHistoryEntry, [
        {
            key: "valid",
            value: function valid() {
                return true;
            }
        },
        {
            key: "reveal",
            value: function reveal() {
                _class_private_field_get(this, _callback).call(this, _class_private_field_get(this, _address));
            }
        }
    ]);
    return AddressHistoryEntry;
}();
var _shadow = /*#__PURE__*/ new WeakMap(), _history = /*#__PURE__*/ new WeakMap(), _memory = /*#__PURE__*/ new WeakMap(), _memoryOffset = /*#__PURE__*/ new WeakMap(), _outerMemoryLength = /*#__PURE__*/ new WeakMap(), _address1 = /*#__PURE__*/ new WeakMap(), _highlightInfo = /*#__PURE__*/ new WeakMap(), _currentNavigatorMode = /*#__PURE__*/ new WeakMap(), _currentNavigatorAddressLine = /*#__PURE__*/ new WeakMap(), _numBytesPerPage = /*#__PURE__*/ new WeakMap(), _valueTypeModes = /*#__PURE__*/ new WeakMap(), _valueTypes = /*#__PURE__*/ new WeakMap(), _endianness = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet(), _onJumpToAddress = /*#__PURE__*/ new WeakSet(), _onRefreshRequest = /*#__PURE__*/ new WeakSet(), _onByteSelected = /*#__PURE__*/ new WeakSet(), _createSettings = /*#__PURE__*/ new WeakSet(), _onEndiannessChanged = /*#__PURE__*/ new WeakSet(), _isValidAddress = /*#__PURE__*/ new WeakSet(), _onAddressChange = /*#__PURE__*/ new WeakSet(), _onValueTypeToggled = /*#__PURE__*/ new WeakSet(), _onValueTypeModeChanged = /*#__PURE__*/ new WeakSet(), _navigateHistory = /*#__PURE__*/ new WeakSet(), _navigatePage = /*#__PURE__*/ new WeakSet(), _jumpToAddress = /*#__PURE__*/ new WeakSet(), _getPageRangeForAddress = /*#__PURE__*/ new WeakSet(), _resize = /*#__PURE__*/ new WeakSet(), _update = /*#__PURE__*/ new WeakSet(), _setAddress = /*#__PURE__*/ new WeakSet(), // Returns the highlightInfo with the smallest size property that encloses the provided address.
// If there are multiple smallest enclosing highlights, we pick the one appearing the earliest in highlightedMemoryAreas.
// If no such highlightInfo exists, it returns undefined.
//
// Selecting the smallest enclosing memory highlight is a heuristic that aims to pick the
// most specific highlight given a provided address. This way, objects contained in other objects are
// potentially still accessible.
_getSmallestEnclosingMemoryHighlight = /*#__PURE__*/ new WeakSet();
var LinearMemoryInspector = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(LinearMemoryInspector, HTMLElement1);
    var _super = _create_super(LinearMemoryInspector);
    function LinearMemoryInspector() {
        _class_call_check(this, LinearMemoryInspector);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _onJumpToAddress);
        _class_private_method_init(_assert_this_initialized(_this), _onRefreshRequest);
        _class_private_method_init(_assert_this_initialized(_this), _onByteSelected);
        _class_private_method_init(_assert_this_initialized(_this), _createSettings);
        _class_private_method_init(_assert_this_initialized(_this), _onEndiannessChanged);
        _class_private_method_init(_assert_this_initialized(_this), _isValidAddress);
        _class_private_method_init(_assert_this_initialized(_this), _onAddressChange);
        _class_private_method_init(_assert_this_initialized(_this), _onValueTypeToggled);
        _class_private_method_init(_assert_this_initialized(_this), _onValueTypeModeChanged);
        _class_private_method_init(_assert_this_initialized(_this), _navigateHistory);
        _class_private_method_init(_assert_this_initialized(_this), _navigatePage);
        _class_private_method_init(_assert_this_initialized(_this), _jumpToAddress);
        _class_private_method_init(_assert_this_initialized(_this), _getPageRangeForAddress);
        _class_private_method_init(_assert_this_initialized(_this), _resize);
        _class_private_method_init(_assert_this_initialized(_this), _update);
        _class_private_method_init(_assert_this_initialized(_this), _setAddress);
        _class_private_method_init(_assert_this_initialized(_this), _getSmallestEnclosingMemoryHighlight);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _history, {
            writable: true,
            value: new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.SimpleHistoryManager.SimpleHistoryManager(10)
        });
        _class_private_field_init(_assert_this_initialized(_this), _memory, {
            writable: true,
            value: new Uint8Array()
        });
        _class_private_field_init(_assert_this_initialized(_this), _memoryOffset, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _outerMemoryLength, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _address1, {
            writable: true,
            value: -1
        });
        _class_private_field_init(_assert_this_initialized(_this), _highlightInfo, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _currentNavigatorMode, {
            writable: true,
            value: "Submitted" /* Mode.Submitted */ 
        });
        _class_private_field_init(_assert_this_initialized(_this), _currentNavigatorAddressLine, {
            writable: true,
            value: "".concat(_class_private_field_get(_assert_this_initialized(_this), _address1))
        });
        _class_private_field_init(_assert_this_initialized(_this), _numBytesPerPage, {
            writable: true,
            value: 4
        });
        _class_private_field_init(_assert_this_initialized(_this), _valueTypeModes, {
            writable: true,
            value: (0,_ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__.getDefaultValueTypeMapping)()
        });
        _class_private_field_init(_assert_this_initialized(_this), _valueTypes, {
            writable: true,
            value: new Set(_class_private_field_get(_this, _valueTypeModes).keys())
        });
        _class_private_field_init(_assert_this_initialized(_this), _endianness, {
            writable: true,
            value: "Little Endian" /* Endianness.Little */ 
        });
        return _this;
    }
    _create_class(LinearMemoryInspector, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _linearMemoryInspector_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ];
            }
        },
        {
            key: "data",
            set: function set(data) {
                if (data.address < data.memoryOffset || data.address > data.memoryOffset + data.memory.length || data.address < 0) {
                    throw new Error('Address is out of bounds.');
                }
                if (data.memoryOffset < 0) {
                    throw new Error('Memory offset has to be greater or equal to zero.');
                }
                if (data.highlightInfo) {
                    if (data.highlightInfo.size < 0) {
                        throw new Error('Object size has to be greater than or equal to zero');
                    }
                    if (data.highlightInfo.startAddress < 0 || data.highlightInfo.startAddress >= data.outerMemoryLength) {
                        throw new Error('Object start address is out of bounds.');
                    }
                }
                _class_private_field_set(this, _memory, data.memory);
                _class_private_field_set(this, _memoryOffset, data.memoryOffset);
                _class_private_field_set(this, _outerMemoryLength, data.outerMemoryLength);
                _class_private_field_set(this, _valueTypeModes, data.valueTypeModes || _class_private_field_get(this, _valueTypeModes));
                _class_private_field_set(this, _valueTypes, data.valueTypes || _class_private_field_get(this, _valueTypes));
                _class_private_field_set(this, _endianness, data.endianness || _class_private_field_get(this, _endianness));
                _class_private_field_set(this, _highlightInfo, data.highlightInfo);
                _class_private_method_get(this, _setAddress, setAddress).call(this, data.address);
                _class_private_method_get(this, _render, render1).call(this);
            }
        }
    ]);
    return LinearMemoryInspector;
}(_wrap_native_super(HTMLElement));
_define_property(LinearMemoryInspector, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_2__.literal(_templateObject()));
function render1() {
    var _class_private_method_get_call = _class_private_method_get(this, _getPageRangeForAddress, getPageRangeForAddress).call(this, _class_private_field_get(this, _address1), _class_private_field_get(this, _numBytesPerPage)), start = _class_private_method_get_call.start, end = _class_private_method_get_call.end;
    var navigatorAddressToShow = _class_private_field_get(this, _currentNavigatorMode) === "Submitted" /* Mode.Submitted */  ? (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(_class_private_field_get(this, _address1)) : _class_private_field_get(this, _currentNavigatorAddressLine);
    var navigatorAddressIsValid = _class_private_method_get(this, _isValidAddress, isValidAddress).call(this, navigatorAddressToShow);
    var invalidAddressMsg = i18nString(UIStrings.addressHasToBeANumberBetweenSAnd, {
        PH1: (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(0),
        PH2: (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.formatAddress)(_class_private_field_get(this, _outerMemoryLength))
    });
    var errorMsg = navigatorAddressIsValid ? undefined : invalidAddressMsg;
    var canGoBackInHistory = _class_private_field_get(this, _history).canRollback();
    var canGoForwardInHistory = _class_private_field_get(this, _history).canRollover();
    var highlightedMemoryAreas = _class_private_field_get(this, _highlightInfo) ? [
        _class_private_field_get(this, _highlightInfo)
    ] : [];
    var focusedMemoryHighlight = _class_private_method_get(this, _getSmallestEnclosingMemoryHighlight, getSmallestEnclosingMemoryHighlight).call(this, highlightedMemoryAreas, _class_private_field_get(this, _address1));
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryNavigator.litTagName, {
        address: navigatorAddressToShow,
        valid: navigatorAddressIsValid,
        mode: _class_private_field_get(this, _currentNavigatorMode),
        error: errorMsg,
        canGoBackInHistory: canGoBackInHistory,
        canGoForwardInHistory: canGoForwardInHistory
    }, _class_private_method_get(this, _onRefreshRequest, onRefreshRequest), _class_private_method_get(this, _onAddressChange, onAddressChange), _class_private_method_get(this, _navigatePage, navigatePage), _class_private_method_get(this, _navigateHistory, navigateHistory), _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_4__.LinearMemoryNavigator.litTagName, _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryHighlightChipList.litTagName, {
        highlightInfos: highlightedMemoryAreas,
        focusedMemoryHighlight: focusedMemoryHighlight
    }, _class_private_method_get(this, _onJumpToAddress, onJumpToAddress), _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_6__.LinearMemoryHighlightChipList.litTagName, _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__.LinearMemoryViewer.litTagName, {
        memory: _class_private_field_get(this, _memory).slice(start - _class_private_field_get(this, _memoryOffset), end - _class_private_field_get(this, _memoryOffset)),
        address: _class_private_field_get(this, _address1),
        memoryOffset: start,
        focus: _class_private_field_get(this, _currentNavigatorMode) === "Submitted" /* Mode.Submitted */ ,
        highlightInfo: _class_private_field_get(this, _highlightInfo),
        focusedMemoryHighlight: focusedMemoryHighlight
    }, _class_private_method_get(this, _onByteSelected, onByteSelected), _class_private_method_get(this, _resize, resize), _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_8__.LinearMemoryViewer.litTagName, _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryValueInterpreter.litTagName, {
        value: _class_private_field_get(this, _memory).slice(_class_private_field_get(this, _address1) - _class_private_field_get(this, _memoryOffset), _class_private_field_get(this, _address1) + _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_9__.VALUE_INTEPRETER_MAX_NUM_BYTES).buffer,
        valueTypes: _class_private_field_get(this, _valueTypes),
        valueTypeModes: _class_private_field_get(this, _valueTypeModes),
        endianness: _class_private_field_get(this, _endianness),
        memoryLength: _class_private_field_get(this, _outerMemoryLength)
    }, _class_private_method_get(this, _onValueTypeToggled, onValueTypeToggled), _class_private_method_get(this, _onValueTypeModeChanged, onValueTypeModeChanged), _class_private_method_get(this, _onEndiannessChanged, onEndiannessChanged), _class_private_method_get(this, _onJumpToAddress, onJumpToAddress), _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_5__.LinearMemoryValueInterpreter.litTagName), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
function onJumpToAddress(e) {
    // Stop event from bubbling up, since no element further up needs the event.
    e.stopPropagation();
    _class_private_field_set(this, _currentNavigatorMode, "Submitted" /* Mode.Submitted */ );
    var addressInRange = Math.max(0, Math.min(e.data, _class_private_field_get(this, _outerMemoryLength) - 1));
    _class_private_method_get(this, _jumpToAddress, jumpToAddress).call(this, addressInRange);
}
function onRefreshRequest() {
    var _class_private_method_get_call = _class_private_method_get(this, _getPageRangeForAddress, getPageRangeForAddress).call(this, _class_private_field_get(this, _address1), _class_private_field_get(this, _numBytesPerPage)), start = _class_private_method_get_call.start, end = _class_private_method_get_call.end;
    this.dispatchEvent(new MemoryRequestEvent(start, end, _class_private_field_get(this, _address1)));
}
function onByteSelected(e) {
    _class_private_field_set(this, _currentNavigatorMode, "Submitted" /* Mode.Submitted */ );
    var addressInRange = Math.max(0, Math.min(e.data, _class_private_field_get(this, _outerMemoryLength) - 1));
    _class_private_method_get(this, _jumpToAddress, jumpToAddress).call(this, addressInRange);
}
function createSettings() {
    return {
        valueTypes: _class_private_field_get(this, _valueTypes),
        modes: _class_private_field_get(this, _valueTypeModes),
        endianness: _class_private_field_get(this, _endianness)
    };
}
function onEndiannessChanged(e) {
    _class_private_field_set(this, _endianness, e.data);
    this.dispatchEvent(new SettingsChangedEvent(_class_private_method_get(this, _createSettings, createSettings).call(this)));
    _class_private_method_get(this, _render, render1).call(this);
}
function isValidAddress(address) {
    var newAddress = (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.parseAddress)(address);
    return newAddress !== undefined && newAddress >= 0 && newAddress < _class_private_field_get(this, _outerMemoryLength);
}
function onAddressChange(e) {
    var _e_data = e.data, address = _e_data.address, mode = _e_data.mode;
    var isValid = _class_private_method_get(this, _isValidAddress, isValidAddress).call(this, address);
    var newAddress = (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_7__.parseAddress)(address);
    _class_private_field_set(this, _currentNavigatorAddressLine, address);
    if (newAddress !== undefined && isValid) {
        _class_private_field_set(this, _currentNavigatorMode, mode);
        _class_private_method_get(this, _jumpToAddress, jumpToAddress).call(this, newAddress);
        return;
    }
    if (mode === "Submitted" /* Mode.Submitted */  && !isValid) {
        _class_private_field_set(this, _currentNavigatorMode, "InvalidSubmit" /* Mode.InvalidSubmit */ );
    } else {
        _class_private_field_set(this, _currentNavigatorMode, "Edit" /* Mode.Edit */ );
    }
    _class_private_method_get(this, _render, render1).call(this);
}
function onValueTypeToggled(e) {
    var _e_data = e.data, type = _e_data.type, checked = _e_data.checked;
    if (checked) {
        _class_private_field_get(this, _valueTypes).add(type);
    } else {
        _class_private_field_get(this, _valueTypes).delete(type);
    }
    this.dispatchEvent(new SettingsChangedEvent(_class_private_method_get(this, _createSettings, createSettings).call(this)));
    _class_private_method_get(this, _render, render1).call(this);
}
function onValueTypeModeChanged(e) {
    e.stopImmediatePropagation();
    var _e_data = e.data, type = _e_data.type, mode = _e_data.mode;
    _class_private_field_get(this, _valueTypeModes).set(type, mode);
    this.dispatchEvent(new SettingsChangedEvent(_class_private_method_get(this, _createSettings, createSettings).call(this)));
    _class_private_method_get(this, _render, render1).call(this);
}
function navigateHistory(e) {
    return e.data === "Forward" /* Navigation.Forward */  ? _class_private_field_get(this, _history).rollover() : _class_private_field_get(this, _history).rollback();
}
function navigatePage(e) {
    var newAddress = e.data === "Forward" /* Navigation.Forward */  ? _class_private_field_get(this, _address1) + _class_private_field_get(this, _numBytesPerPage) : _class_private_field_get(this, _address1) - _class_private_field_get(this, _numBytesPerPage);
    var addressInRange = Math.max(0, Math.min(newAddress, _class_private_field_get(this, _outerMemoryLength) - 1));
    _class_private_method_get(this, _jumpToAddress, jumpToAddress).call(this, addressInRange);
}
function jumpToAddress(address) {
    if (address < 0 || address >= _class_private_field_get(this, _outerMemoryLength)) {
        console.warn("Specified address is out of bounds: ".concat(address));
        return;
    }
    _class_private_method_get(this, _setAddress, setAddress).call(this, address);
    _class_private_method_get(this, _update, update).call(this);
}
function getPageRangeForAddress(address, numBytesPerPage) {
    var pageNumber = Math.floor(address / numBytesPerPage);
    var pageStartAddress = pageNumber * numBytesPerPage;
    var pageEndAddress = Math.min(pageStartAddress + numBytesPerPage, _class_private_field_get(this, _outerMemoryLength));
    return {
        start: pageStartAddress,
        end: pageEndAddress
    };
}
function resize(event) {
    _class_private_field_set(this, _numBytesPerPage, event.data);
    _class_private_method_get(this, _update, update).call(this);
}
function update() {
    var _class_private_method_get_call = _class_private_method_get(this, _getPageRangeForAddress, getPageRangeForAddress).call(this, _class_private_field_get(this, _address1), _class_private_field_get(this, _numBytesPerPage)), start = _class_private_method_get_call.start, end = _class_private_method_get_call.end;
    if (start < _class_private_field_get(this, _memoryOffset) || end > _class_private_field_get(this, _memoryOffset) + _class_private_field_get(this, _memory).length) {
        this.dispatchEvent(new MemoryRequestEvent(start, end, _class_private_field_get(this, _address1)));
    } else {
        _class_private_method_get(this, _render, render1).call(this);
    }
}
function setAddress(address) {
    var _this = this;
    // If we are already showing the address that is requested, no need to act upon it.
    if (_class_private_field_get(this, _address1) === address) {
        return;
    }
    var historyEntry = new AddressHistoryEntry(address, function() {
        return _class_private_method_get(_this, _jumpToAddress, jumpToAddress).call(_this, address);
    });
    _class_private_field_get(this, _history).push(historyEntry);
    _class_private_field_set(this, _address1, address);
    this.dispatchEvent(new AddressChangedEvent(_class_private_field_get(this, _address1)));
}
function getSmallestEnclosingMemoryHighlight(highlightedMemoryAreas, address) {
    var smallestEnclosingHighlight;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = highlightedMemoryAreas[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var highlightedMemory = _step.value;
            if (highlightedMemory.startAddress <= address && address < highlightedMemory.startAddress + highlightedMemory.size) {
                if (!smallestEnclosingHighlight) {
                    smallestEnclosingHighlight = highlightedMemory;
                } else if (highlightedMemory.size < smallestEnclosingHighlight.size) {
                    smallestEnclosingHighlight = highlightedMemory;
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
    return smallestEnclosingHighlight;
}
customElements.define('devtools-linear-memory-inspector-inspector', LinearMemoryInspector); //# sourceMappingURL=LinearMemoryInspector.js.map


}),
"./panels/linear_memory_inspector/components/linearMemoryInspector.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n}\n\n.view {\n  width: 100%;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size);\n  padding: 9px 12px 9px 7px;\n}\n\ndevtools-linear-memory-inspector-viewer {\n  justify-content: center;\n}\n\ndevtools-linear-memory-inspector-navigator + devtools-linear-memory-inspector-viewer {\n  margin-top: 12px;\n}\n\n.value-interpreter {\n  display: flex;\n}\n\n/*# sourceURL=linearMemoryInspector.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);