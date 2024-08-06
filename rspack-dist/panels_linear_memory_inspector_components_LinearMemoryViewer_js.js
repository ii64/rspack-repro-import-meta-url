"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_LinearMemoryViewer_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DECIMAL_REGEXP: function() { return DECIMAL_REGEXP; },
  HEXADECIMAL_REGEXP: function() { return HEXADECIMAL_REGEXP; },
  formatAddress: function() { return formatAddress; },
  parseAddress: function() { return parseAddress; },
  toHexString: function() { return toHexString; }
});
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var HEXADECIMAL_REGEXP = /^0x[a-fA-F0-9]+$/;
var DECIMAL_REGEXP = /^0$|[1-9]\d*$/;
function toHexString(data) {
    var hex = data.number.toString(16).padStart(data.pad, '0');
    var upperHex = hex.toUpperCase();
    return data.prefix ? '0x' + upperHex : upperHex;
}
function formatAddress(address) {
    return toHexString({
        number: address,
        pad: 8,
        prefix: true
    });
}
function parseAddress(address) {
    var hexMatch = address.match(HEXADECIMAL_REGEXP);
    var decMatch = address.match(DECIMAL_REGEXP);
    var newAddress = undefined;
    if (hexMatch && hexMatch[0].length === address.length) {
        newAddress = parseInt(address, 16);
    } else if (decMatch && decMatch[0].length === address.length) {
        newAddress = parseInt(address, 10);
    }
    return newAddress;
} //# sourceMappingURL=LinearMemoryInspectorUtils.js.map


}),
"./panels/linear_memory_inspector/components/LinearMemoryViewer.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ByteSelectedEvent: function() { return ByteSelectedEvent; },
  LinearMemoryViewer: function() { return LinearMemoryViewer; },
  ResizeEvent: function() { return ResizeEvent; }
});
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */var _linearMemoryViewer_css_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linearMemoryViewer.css.js */ "./panels/linear_memory_inspector/components/linearMemoryViewer.css.js");
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
        "devtools-linear-memory-inspector-viewer"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        '\n      <div class="view" tabindex="0" @keydown=',
        " jslog=",
        ">\n        ",
        "\n      </div>\n      "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n    <div class="row">\n      <span class=',
        ">",
        '</span>\n      <span class="divider"></span>\n      ',
        '\n      <span class="divider"></span>\n      ',
        "\n    </div>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<span class=",
        " @click=",
        " jslog=",
        ">",
        "</span>"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "<span class=",
        " @click=",
        " jslog=",
        ">",
        "</span>"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}




var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html;
var ByteSelectedEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ByteSelectedEvent, Event1);
    var _super = _create_super(ByteSelectedEvent);
    function ByteSelectedEvent(address) {
        _class_call_check(this, ByteSelectedEvent);
        var _this;
        _this = _super.call(this, ByteSelectedEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = address;
        return _this;
    }
    return ByteSelectedEvent;
}(_wrap_native_super(Event));
_define_property(ByteSelectedEvent, "eventName", 'byteselected');
var ResizeEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(ResizeEvent, Event1);
    var _super = _create_super(ResizeEvent);
    function ResizeEvent(numBytesPerPage) {
        _class_call_check(this, ResizeEvent);
        var _this;
        _this = _super.call(this, ResizeEvent.eventName);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _this.data = numBytesPerPage;
        return _this;
    }
    return ResizeEvent;
}(_wrap_native_super(Event));
_define_property(ResizeEvent, "eventName", 'resize');
var BYTE_GROUP_MARGIN = 8;
var BYTE_GROUP_SIZE = 4;
var _shadow = /*#__PURE__*/ new WeakMap(), _resizeObserver = /*#__PURE__*/ new WeakMap(), _isObservingResize = /*#__PURE__*/ new WeakMap(), _memory = /*#__PURE__*/ new WeakMap(), _address = /*#__PURE__*/ new WeakMap(), _memoryOffset = /*#__PURE__*/ new WeakMap(), _highlightInfo = /*#__PURE__*/ new WeakMap(), _focusedMemoryHighlight = /*#__PURE__*/ new WeakMap(), _numRows = /*#__PURE__*/ new WeakMap(), _numBytesInRow = /*#__PURE__*/ new WeakMap(), _focusOnByte = /*#__PURE__*/ new WeakMap(), _lastKeyUpdateSent = /*#__PURE__*/ new WeakMap(), _update = /*#__PURE__*/ new WeakSet(), _focusOnView = /*#__PURE__*/ new WeakSet(), _resize = /*#__PURE__*/ new WeakSet(), /** Recomputes the number of rows and (byte) columns that fit into the current view. */ _updateDimensions = /*#__PURE__*/ new WeakSet(), _engageResizeObserver = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet(), _onKeyDown = /*#__PURE__*/ new WeakSet(), _renderView = /*#__PURE__*/ new WeakSet(), _renderRow = /*#__PURE__*/ new WeakSet(), _renderByteValues = /*#__PURE__*/ new WeakSet(), _renderCharacterValues = /*#__PURE__*/ new WeakSet(), _toAscii = /*#__PURE__*/ new WeakSet(), _onSelectedByte = /*#__PURE__*/ new WeakSet(), _shouldBeHighlighted = /*#__PURE__*/ new WeakSet(), _isFocusedArea = /*#__PURE__*/ new WeakSet();
var LinearMemoryViewer = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(LinearMemoryViewer, HTMLElement1);
    var _super = _create_super(LinearMemoryViewer);
    function LinearMemoryViewer() {
        _class_call_check(this, LinearMemoryViewer);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _update);
        _class_private_method_init(_assert_this_initialized(_this), _focusOnView);
        _class_private_method_init(_assert_this_initialized(_this), _resize);
        _class_private_method_init(_assert_this_initialized(_this), _updateDimensions);
        _class_private_method_init(_assert_this_initialized(_this), _engageResizeObserver);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _onKeyDown);
        _class_private_method_init(_assert_this_initialized(_this), _renderView);
        _class_private_method_init(_assert_this_initialized(_this), _renderRow);
        _class_private_method_init(_assert_this_initialized(_this), _renderByteValues);
        _class_private_method_init(_assert_this_initialized(_this), _renderCharacterValues);
        _class_private_method_init(_assert_this_initialized(_this), _toAscii);
        _class_private_method_init(_assert_this_initialized(_this), _onSelectedByte);
        _class_private_method_init(_assert_this_initialized(_this), _shouldBeHighlighted);
        _class_private_method_init(_assert_this_initialized(_this), _isFocusedArea);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _resizeObserver, {
            writable: true,
            value: new ResizeObserver(function() {
                return _class_private_method_get(_this, _resize, resize).call(_assert_this_initialized(_this));
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _isObservingResize, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _memory, {
            writable: true,
            value: new Uint8Array()
        });
        _class_private_field_init(_assert_this_initialized(_this), _address, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _memoryOffset, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _highlightInfo, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _focusedMemoryHighlight, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _numRows, {
            writable: true,
            value: 1
        });
        _class_private_field_init(_assert_this_initialized(_this), _numBytesInRow, {
            writable: true,
            value: BYTE_GROUP_SIZE
        });
        _class_private_field_init(_assert_this_initialized(_this), _focusOnByte, {
            writable: true,
            value: true
        });
        _class_private_field_init(_assert_this_initialized(_this), _lastKeyUpdateSent, {
            writable: true,
            value: undefined
        });
        return _this;
    }
    _create_class(LinearMemoryViewer, [
        {
            key: "data",
            set: function set(data) {
                if (data.address < data.memoryOffset || data.address > data.memoryOffset + data.memory.length || data.address < 0) {
                    throw new Error('Address is out of bounds.');
                }
                if (data.memoryOffset < 0) {
                    throw new Error('Memory offset has to be greater or equal to zero.');
                }
                _class_private_field_set(this, _memory, data.memory);
                _class_private_field_set(this, _address, data.address);
                _class_private_field_set(this, _highlightInfo, data.highlightInfo);
                _class_private_field_set(this, _focusedMemoryHighlight, data.focusedMemoryHighlight);
                _class_private_field_set(this, _memoryOffset, data.memoryOffset);
                _class_private_field_set(this, _focusOnByte, data.focus);
                _class_private_method_get(this, _update, update).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                this.style.setProperty('--byte-group-margin', "".concat(BYTE_GROUP_MARGIN, "px"));
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _linearMemoryViewer_css_js__WEBPACK_IMPORTED_MODULE_3__["default"]
                ];
            }
        },
        {
            key: "disconnectedCallback",
            value: function disconnectedCallback() {
                _class_private_field_set(this, _isObservingResize, false);
                _class_private_field_get(this, _resizeObserver).disconnect();
            }
        }
    ]);
    return LinearMemoryViewer;
}(_wrap_native_super(HTMLElement));
_define_property(LinearMemoryViewer, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.literal(_templateObject()));
function update() {
    _class_private_method_get(this, _updateDimensions, updateDimensions).call(this);
    _class_private_method_get(this, _render, render1).call(this);
    _class_private_method_get(this, _focusOnView, focusOnView).call(this);
    _class_private_method_get(this, _engageResizeObserver, engageResizeObserver).call(this);
}
function focusOnView() {
    if (_class_private_field_get(this, _focusOnByte)) {
        var view = _class_private_field_get(this, _shadow).querySelector('.view');
        if (view) {
            view.focus();
        }
    }
}
function resize() {
    _class_private_method_get(this, _update, update).call(this);
    this.dispatchEvent(new ResizeEvent(_class_private_field_get(this, _numBytesInRow) * _class_private_field_get(this, _numRows)));
}
function updateDimensions() {
    if (this.clientWidth === 0 || this.clientHeight === 0 || !this.shadowRoot) {
        _class_private_field_set(this, _numBytesInRow, BYTE_GROUP_SIZE);
        _class_private_field_set(this, _numRows, 1);
        return;
    }
    // We initially just plot one row with one byte group (here: byte group size of 4).
    // Depending on that initially plotted row we can determine how many rows and
    // bytes per row we can fit.
    // >    0000000 | b0 b1 b2 b4 | a0 a1 a2 a3    <
    //      ^-------^ ^-^           ^-^
    //          |     byteCellWidth textCellWidth
    //          |
    //     addressTextAndDividerWidth
    //  ^--^   +     ^----------------------------^
    //      widthToFill
    var firstByteCell = this.shadowRoot.querySelector('.byte-cell');
    var textCell = this.shadowRoot.querySelector('.text-cell');
    var divider = this.shadowRoot.querySelector('.divider');
    var rowElement = this.shadowRoot.querySelector('.row');
    var addressText = this.shadowRoot.querySelector('.address');
    if (!firstByteCell || !textCell || !divider || !rowElement || !addressText) {
        _class_private_field_set(this, _numBytesInRow, BYTE_GROUP_SIZE);
        _class_private_field_set(this, _numRows, 1);
        return;
    }
    // Calculate the width required for each (unsplittable) group of bytes.
    var byteCellWidth = firstByteCell.getBoundingClientRect().width;
    var textCellWidth = textCell.getBoundingClientRect().width;
    var groupWidth = BYTE_GROUP_SIZE * (byteCellWidth + textCellWidth) + BYTE_GROUP_MARGIN;
    // Calculate the width to fill.
    var dividerWidth = divider.getBoundingClientRect().width;
    var addressTextAndDividerWidth = firstByteCell.getBoundingClientRect().left - addressText.getBoundingClientRect().left;
    // this.clientWidth is rounded, while the other values are not. Subtract 1 to make
    // sure that we correctly calculate the widths.
    var widthToFill = this.clientWidth - 1 - addressTextAndDividerWidth - dividerWidth;
    if (widthToFill < groupWidth) {
        _class_private_field_set(this, _numBytesInRow, BYTE_GROUP_SIZE);
        _class_private_field_set(this, _numRows, 1);
        return;
    }
    _class_private_field_set(this, _numBytesInRow, Math.floor(widthToFill / groupWidth) * BYTE_GROUP_SIZE);
    _class_private_field_set(this, _numRows, Math.floor(this.clientHeight / rowElement.clientHeight));
}
function engageResizeObserver() {
    if (!_class_private_field_get(this, _resizeObserver) || _class_private_field_get(this, _isObservingResize)) {
        return;
    }
    _class_private_field_get(this, _resizeObserver).observe(this);
    _class_private_field_set(this, _isObservingResize, true);
}
function render1() {
    var jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.section().track({
        keydown: 'ArrowUp|ArrowDown|ArrowLeft|ArrowRight|PageUp|PageDown'
    }).context('linear-memory-inspector.viewer');
    // Disabled until https://crbug.com/1079231 is fixed.
    // clang-format off
    render(html(_templateObject1(), _class_private_method_get(this, _onKeyDown, onKeyDown), jslog, _class_private_method_get(this, _renderView, renderView).call(this)), _class_private_field_get(this, _shadow), {
        host: this
    });
}
function onKeyDown(event) {
    var keyboardEvent = event;
    var newAddress = undefined;
    if (keyboardEvent.code === 'ArrowUp') {
        newAddress = _class_private_field_get(this, _address) - _class_private_field_get(this, _numBytesInRow);
    } else if (keyboardEvent.code === 'ArrowDown') {
        newAddress = _class_private_field_get(this, _address) + _class_private_field_get(this, _numBytesInRow);
    } else if (keyboardEvent.code === 'ArrowLeft') {
        newAddress = _class_private_field_get(this, _address) - 1;
    } else if (keyboardEvent.code === 'ArrowRight') {
        newAddress = _class_private_field_get(this, _address) + 1;
    } else if (keyboardEvent.code === 'PageUp') {
        newAddress = _class_private_field_get(this, _address) - _class_private_field_get(this, _numBytesInRow) * _class_private_field_get(this, _numRows);
    } else if (keyboardEvent.code === 'PageDown') {
        newAddress = _class_private_field_get(this, _address) + _class_private_field_get(this, _numBytesInRow) * _class_private_field_get(this, _numRows);
    }
    if (newAddress !== undefined && newAddress !== _class_private_field_get(this, _lastKeyUpdateSent)) {
        _class_private_field_set(this, _lastKeyUpdateSent, newAddress);
        this.dispatchEvent(new ByteSelectedEvent(newAddress));
    }
}
function renderView() {
    var itemTemplates = [];
    for(var i = 0; i < _class_private_field_get(this, _numRows); ++i){
        itemTemplates.push(_class_private_method_get(this, _renderRow, renderRow).call(this, i));
    }
    return html(_templateObject2(), itemTemplates);
}
function renderRow(row) {
    var _ref = {
        startIndex: row * _class_private_field_get(this, _numBytesInRow),
        endIndex: (row + 1) * _class_private_field_get(this, _numBytesInRow)
    }, startIndex = _ref.startIndex, endIndex = _ref.endIndex;
    var classMap = {
        address: true,
        selected: Math.floor((_class_private_field_get(this, _address) - _class_private_field_get(this, _memoryOffset)) / _class_private_field_get(this, _numBytesInRow)) === row
    };
    return html(_templateObject3(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap), (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toHexString)({
        number: startIndex + _class_private_field_get(this, _memoryOffset),
        pad: 8,
        prefix: false
    }), _class_private_method_get(this, _renderByteValues, renderByteValues).call(this, startIndex, endIndex), _class_private_method_get(this, _renderCharacterValues, renderCharacterValues).call(this, startIndex, endIndex));
}
function renderByteValues(startIndex, endIndex) {
    var cells = [];
    for(var i = startIndex; i < endIndex; ++i){
        var actualIndex = i + _class_private_field_get(this, _memoryOffset);
        // Add margin after each group of bytes of size byteGroupSize.
        var addMargin = i !== startIndex && (i - startIndex) % BYTE_GROUP_SIZE === 0;
        var selected = i === _class_private_field_get(this, _address) - _class_private_field_get(this, _memoryOffset);
        var _$shouldBeHighlighted = _class_private_method_get(this, _shouldBeHighlighted, shouldBeHighlighted).call(this, actualIndex);
        var focusedMemoryArea = _class_private_method_get(this, _isFocusedArea, isFocusedArea).call(this, actualIndex);
        var classMap = {
            'cell': true,
            'byte-cell': true,
            'byte-group-margin': addMargin,
            selected: selected,
            'highlight-area': _$shouldBeHighlighted,
            'focused-area': focusedMemoryArea
        };
        var isSelectableCell = i < _class_private_field_get(this, _memory).length;
        var byteValue = isSelectableCell ? html(_templateObject4(), (0,_LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__.toHexString)({
            number: _class_private_field_get(this, _memory)[i],
            pad: 2,
            prefix: false
        })) : '';
        var _$onSelectedByte = isSelectableCell ? _class_private_method_get(this, _onSelectedByte, onSelectedByte).bind(this, actualIndex) : '';
        var jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.tableCell('linear-memory-inspector.byte-cell').track({
            click: true
        });
        cells.push(html(_templateObject5(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap), _$onSelectedByte, jslog, byteValue));
    }
    return html(_templateObject6(), cells);
}
function renderCharacterValues(startIndex, endIndex) {
    var cells = [];
    for(var i = startIndex; i < endIndex; ++i){
        var actualIndex = i + _class_private_field_get(this, _memoryOffset);
        var _$shouldBeHighlighted = _class_private_method_get(this, _shouldBeHighlighted, shouldBeHighlighted).call(this, actualIndex);
        var focusedMemoryArea = _class_private_method_get(this, _isFocusedArea, isFocusedArea).call(this, actualIndex);
        var classMap = {
            'cell': true,
            'text-cell': true,
            selected: _class_private_field_get(this, _address) - _class_private_field_get(this, _memoryOffset) === i,
            'highlight-area': _$shouldBeHighlighted,
            'focused-area': focusedMemoryArea
        };
        var isSelectableCell = i < _class_private_field_get(this, _memory).length;
        var value = isSelectableCell ? html(_templateObject7(), _class_private_method_get(this, _toAscii, toAscii).call(this, _class_private_field_get(this, _memory)[i])) : '';
        var _$onSelectedByte = isSelectableCell ? _class_private_method_get(this, _onSelectedByte, onSelectedByte).bind(this, i + _class_private_field_get(this, _memoryOffset)) : '';
        var jslog = _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.tableCell('linear-memory-inspector.text-cell').track({
            click: true
        });
        cells.push(html(_templateObject8(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.Directives.classMap(classMap), _$onSelectedByte, jslog, value));
    }
    return html(_templateObject9(), cells);
}
function toAscii(byte) {
    if (byte >= 20 && byte <= 0x7F) {
        return String.fromCharCode(byte);
    }
    return '.';
}
function onSelectedByte(index) {
    this.dispatchEvent(new ByteSelectedEvent(index));
}
function shouldBeHighlighted(index) {
    if (_class_private_field_get(this, _highlightInfo) === undefined) {
        return false;
    }
    return _class_private_field_get(this, _highlightInfo).startAddress <= index && index < _class_private_field_get(this, _highlightInfo).startAddress + _class_private_field_get(this, _highlightInfo).size;
}
function isFocusedArea(index) {
    if (!_class_private_field_get(this, _focusedMemoryHighlight)) {
        return false;
    }
    return _class_private_field_get(this, _focusedMemoryHighlight).startAddress <= index && index < _class_private_field_get(this, _focusedMemoryHighlight).startAddress + _class_private_field_get(this, _focusedMemoryHighlight).size;
}
customElements.define('devtools-linear-memory-inspector-viewer', LinearMemoryViewer); //# sourceMappingURL=LinearMemoryViewer.js.map


}),
"./panels/linear_memory_inspector/components/linearMemoryViewer.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host {\n  flex: auto;\n  display: flex;\n  min-height: 20px;\n}\n\n.view {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  background: var(--sys-color-cdt-base-container);\n  outline: none;\n}\n\n.row {\n  display: flex;\n  height: 20px;\n  align-items: center;\n}\n\n.cell {\n  text-align: center;\n  border: 1px solid transparent;\n  border-radius: 2px;\n\n  &.focused-area {\n    background-color: var(--sys-color-tonal-container);\n    color: var(--sys-color-on-tonal-container);\n  }\n\n  &.selected {\n    border-color: var(--sys-color-state-focus-ring);\n    color: var(--sys-color-on-tonal-container);\n    background-color: var(--sys-color-state-focus-select);\n  }\n}\n\n.byte-cell {\n  min-width: 21px;\n  color: var(--sys-color-on-surface);\n}\n\n.byte-group-margin {\n  margin-left: var(--byte-group-margin);\n}\n\n.text-cell {\n  min-width: 14px;\n  color: var(--sys-color-on-surface-subtle);\n}\n\n.address {\n  color: var(--sys-color-state-disabled);\n}\n\n.address.selected {\n  font-weight: bold;\n  color: var(--sys-color-on-surface);\n}\n\n.divider {\n  width: 1px;\n  height: inherit;\n  background-color: var(--sys-color-divider);\n  margin: 0 4px;\n}\n\n.highlight-area {\n  background-color: var(--sys-color-surface-variant);\n}\n\n/*# sourceURL=linearMemoryViewer.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);