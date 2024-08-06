"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_split_view_SplitView_js"], {
"./ui/components/split_view/SplitView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SplitView: function() { return SplitView; }
});
/* harmony import */var _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ui/components/helpers/helpers.js */ "./ui/components/helpers/helpers.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
        '\n        <div class="wrapper ',
        '">\n          <div class="container">\n            <slot name="main"></slot>\n            <div id="resizer" @mousedown=',
        '></div>\n            <slot name="sidebar"></slot>\n          </div>\n        </div>\n      '
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "devtools-split-view"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}


// clean-css does not compile this file correctly. So as a workaround adding styles inline.
var styles = '\n  :host {\n    --current-main-area-size: 50%;\n    --resizer-size: 3px;\n    --min-main-area-size: 200px;\n    --min-sidebar-size: 150px;\n    --main-area-size: calc(max(var(--current-main-area-size), var(--min-main-area-size)));\n\n    height: 100%;\n    width: 100%;\n    display: block;\n    overflow: auto;\n  }\n\n  .wrapper {\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    width: 100%;\n    container: sidebar / size; /* stylelint-disable-line property-no-unknown */\n  }\n\n  .container {\n    --resizer-position: calc(min(var(--main-area-size), calc(100% - var(--min-sidebar-size))));\n    --min-container-size: calc(var(--min-sidebar-size) + var(--min-main-area-size) + var(--resizer-size));\n\n    display: flex;\n    flex-direction: row;\n    height: 100%;\n    width: 100%;\n    position: relative;\n    gap: var(--resizer-size);\n\n    min-width: var(--min-container-size);\n  }\n\n  #resizer {\n    background-color: var(--sys-color-surface1);\n    position: absolute;\n    user-select: none;\n\n    /* horizontal */\n    width: var(--resizer-size);\n    cursor: col-resize;\n    left: var(--resizer-position);\n    bottom: 0;\n    top: 0;\n  }\n\n  slot {\n    overflow: auto;\n    display: block;\n  }\n\n  slot[name="main"] {\n\n    /* horizontal */\n    width: var(--resizer-position);\n    min-width: var(--min-main-area-size);\n  }\n\n  slot[name="sidebar"] {\n    flex: 1 0 0;\n\n    min-width: var(--min-sidebar-size);\n  }\n\n  .horizontal .container {\n    flex-direction: column;\n    min-height: var(--min-container-size);\n    min-width: auto;\n  }\n\n  .horizontal #resizer {\n    width: auto;\n    height: var(--resizer-size);\n    cursor: row-resize;\n    top: var(--resizer-position);\n    left: 0;\n    right: 0;\n  }\n\n  .horizontal slot[name="main"] {\n    width: auto;\n    min-width: auto;\n    height: var(--resizer-position);\n    min-height: var(--min-main-area-size);\n  }\n\n  .horizontal slot[name="sidebar"] {\n    min-width: auto;\n    min-height: var(--min-sidebar-size);\n  }\n';
var splitViewStyles = new CSSStyleSheet();
splitViewStyles.replaceSync(styles);
var _shadow = /*#__PURE__*/ new WeakMap(), _mousePos = /*#__PURE__*/ new WeakMap(), _mainAxisIdx = /*#__PURE__*/ new WeakMap(), _mainDimensions = /*#__PURE__*/ new WeakMap(), _observer = /*#__PURE__*/ new WeakMap(), _horizontal = /*#__PURE__*/ new WeakMap(), _onResize = /*#__PURE__*/ new WeakMap(), _onMouseDown = /*#__PURE__*/ new WeakMap(), _onMouseUp = /*#__PURE__*/ new WeakMap(), _onMouseMove = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakMap();
var SplitView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(SplitView, HTMLElement1);
    var _super = _create_super(SplitView);
    function SplitView() {
        _class_call_check(this, SplitView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _mousePos, {
            writable: true,
            value: [
                0,
                0
            ]
        });
        _class_private_field_init(_assert_this_initialized(_this), _mainAxisIdx, {
            writable: true,
            value: 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _mainDimensions, {
            writable: true,
            value: [
                0,
                0
            ]
        });
        _class_private_field_init(_assert_this_initialized(_this), _observer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _horizontal, {
            writable: true,
            value: false
        });
        _class_private_field_init(_assert_this_initialized(_this), _onResize, {
            writable: true,
            value: function(rect) {
                var prevMainAxisIdx = _class_private_field_get(_assert_this_initialized(_this), _mainAxisIdx);
                if (rect.width <= 600 && rect.height >= 600 || _class_private_field_get(_assert_this_initialized(_this), _horizontal)) {
                    _class_private_field_set(_assert_this_initialized(_this), _mainAxisIdx, 1);
                } else {
                    _class_private_field_set(_assert_this_initialized(_this), _mainAxisIdx, 0);
                }
                if (_class_private_field_get(_assert_this_initialized(_this), _mainAxisIdx) !== prevMainAxisIdx) {
                    void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(_assert_this_initialized(_this), _class_private_field_get(_assert_this_initialized(_this), _render));
                }
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onMouseDown, {
            writable: true,
            value: function(event) {
                var main = _class_private_field_get(_this, _shadow).querySelector('slot[name=main]');
                if (!main) {
                    throw new Error('Main slot not found');
                }
                var rect = main.getBoundingClientRect();
                _class_private_field_set(_assert_this_initialized(_this), _mainDimensions, [
                    rect.width,
                    rect.height
                ]);
                _class_private_field_set(_assert_this_initialized(_this), _mousePos, [
                    event.clientX,
                    event.clientY
                ]);
                window.addEventListener('mousemove', _class_private_field_get(_assert_this_initialized(_this), _onMouseMove), true);
                window.addEventListener('mouseup', _class_private_field_get(_assert_this_initialized(_this), _onMouseUp), true);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onMouseUp, {
            writable: true,
            value: function() {
                window.removeEventListener('mousemove', _class_private_field_get(_assert_this_initialized(_this), _onMouseMove), true);
                window.removeEventListener('mouseup', _class_private_field_get(_assert_this_initialized(_this), _onMouseUp), true);
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _onMouseMove, {
            writable: true,
            value: function(event) {
                var mousePos = [
                    event.clientX,
                    event.clientY
                ];
                var delta = mousePos[_class_private_field_get(_assert_this_initialized(_this), _mainAxisIdx)] - _class_private_field_get(_this, _mousePos)[_class_private_field_get(_assert_this_initialized(_this), _mainAxisIdx)];
                var rect = _this.getBoundingClientRect();
                var containerDimensions = [
                    rect.width,
                    rect.height
                ];
                var length = (_class_private_field_get(_this, _mainDimensions)[_class_private_field_get(_assert_this_initialized(_this), _mainAxisIdx)] + delta) * 100 / containerDimensions[_class_private_field_get(_assert_this_initialized(_this), _mainAxisIdx)];
                _this.style.setProperty('--current-main-area-size', length + '%');
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _render, {
            writable: true,
            value: function() {
                // clang-format off
                _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.html(_templateObject(), _class_private_field_get(_assert_this_initialized(_this), _mainAxisIdx) === 1 ? 'horizontal' : '', _class_private_field_get(_assert_this_initialized(_this), _onMouseDown)), _class_private_field_get(_assert_this_initialized(_this), _shadow), {
                    host: _assert_this_initialized(_this)
                });
            // clang-format on
            }
        });
        return _this;
    }
    _create_class(SplitView, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                var _this = this;
                this.style.setProperty('--current-main-area-size', '60%');
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    splitViewStyles
                ];
                _class_private_field_set(this, _observer, new ResizeObserver(function(entries) {
                    return _class_private_field_get(_this, _onResize).call(_this, entries[0].contentRect);
                }));
                _class_private_field_get(this, _observer).observe(this);
                _class_private_field_get(this, _render).call(this);
            }
        },
        {
            key: "horizontal",
            get: function get() {
                return _class_private_field_get(this, _horizontal);
            },
            set: function set(horizontal) {
                _class_private_field_set(this, _horizontal, horizontal);
                void _ui_components_helpers_helpers_js__WEBPACK_IMPORTED_MODULE_0__.ScheduledRender.scheduleRender(this, _class_private_field_get(this, _render));
            }
        }
    ]);
    return SplitView;
}(_wrap_native_super(HTMLElement));
_define_property(SplitView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_1__.literal(_templateObject1()));
customElements.define('devtools-split-view', SplitView); //# sourceMappingURL=SplitView.js.map


}),

}]);