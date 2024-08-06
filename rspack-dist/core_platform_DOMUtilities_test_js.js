"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_DOMUtilities_test_js"], {
"./core/platform/DOMUtilities.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./platform.js */ "./core/platform/platform.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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


describe('DOMUtilities', function() {
    describe('deepActiveElement', function() {
        it('returns the active element if there is no shadow root', function() {
            var btn = document.createElement('button');
            btn.innerText = 'Click me!';
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(btn);
            btn.focus();
            var activeElement = _platform_js__WEBPACK_IMPORTED_MODULE_1__.DOMUtilities.deepActiveElement(document);
            assert.strictEqual(activeElement, btn);
        });
        it('dives through the shadow root and finds the right active element', function() {
            var TestComponent = /*#__PURE__*/ function(HTMLElement1) {
                "use strict";
                _inherits(TestComponent, HTMLElement1);
                var _super = _create_super(TestComponent);
                function TestComponent() {
                    _class_call_check(this, TestComponent);
                    var _this;
                    _this = _super.apply(this, arguments);
                    _define_property(_assert_this_initialized(_this), "shadow", _this.attachShadow({
                        mode: 'open'
                    }));
                    _define_property(_assert_this_initialized(_this), "button", document.createElement('button'));
                    return _this;
                }
                _create_class(TestComponent, [
                    {
                        key: "connectedCallback",
                        value: function connectedCallback() {
                            this.button.innerText = 'Click me from the shadow root!';
                            this.shadow.appendChild(this.button);
                            this.button.focus();
                        }
                    }
                ]);
                return TestComponent;
            }(_wrap_native_super(HTMLElement));
            customElements.define('dom-utilities-test-component', TestComponent);
            var component = new TestComponent();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            var activeElement = _platform_js__WEBPACK_IMPORTED_MODULE_1__.DOMUtilities.deepActiveElement(document);
            assert.strictEqual(activeElement, component.button);
        });
    });
    describe('getEnclosingShadowRootForNode', function() {
        it('returns null if no shadow root is found up the tree', function() {
            var parent = document.createElement('div');
            var child = document.createElement('p');
            parent.appendChild(child);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(parent);
            assert.isNull(_platform_js__WEBPACK_IMPORTED_MODULE_1__.DOMUtilities.getEnclosingShadowRootForNode(child));
        });
        it('returns the shadow root in the tree', function() {
            var div = document.createElement('div');
            var _shadow = /*#__PURE__*/ new WeakMap();
            var TestComponent = /*#__PURE__*/ function(HTMLElement1) {
                "use strict";
                _inherits(TestComponent, HTMLElement1);
                var _super = _create_super(TestComponent);
                function TestComponent() {
                    _class_call_check(this, TestComponent);
                    var _this;
                    _this = _super.apply(this, arguments);
                    _class_private_field_init(_assert_this_initialized(_this), _shadow, {
                        writable: true,
                        value: _this.attachShadow({
                            mode: 'open'
                        })
                    });
                    return _this;
                }
                _create_class(TestComponent, [
                    {
                        key: "connectedCallback",
                        value: function connectedCallback() {
                            _class_private_field_get(this, _shadow).appendChild(div);
                        }
                    }
                ]);
                return TestComponent;
            }(_wrap_native_super(HTMLElement));
            customElements.define('shadow-root-test', TestComponent);
            var component = new TestComponent();
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            assert.strictEqual(_platform_js__WEBPACK_IMPORTED_MODULE_1__.DOMUtilities.getEnclosingShadowRootForNode(div), component.shadowRoot);
        });
    });
}); //# sourceMappingURL=DOMUtilities.test.js.map


}),

}]);