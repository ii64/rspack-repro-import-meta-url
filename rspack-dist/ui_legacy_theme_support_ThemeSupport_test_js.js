"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_theme_support_ThemeSupport_test_js"], {
"./ui/legacy/theme_support/ThemeSupport.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _theme_support_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theme_support.js */ "./ui/legacy/theme_support/theme_support.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('ThemeSupport', function() {
    var themeSupport;
    beforeEach(function() {
        var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createFakeSetting)('theme', 'default');
        themeSupport = _theme_support_js__WEBPACK_IMPORTED_MODULE_2__.ThemeSupport.instance({
            forceNew: true,
            setting: setting
        });
    });
    it('calls fetchColors on host ColorThemeChanged', /*#__PURE__*/ _async_to_generator(function() {
        var colorFetchSpy;
        return _ts_generator(this, function(_state) {
            colorFetchSpy = sinon.spy(themeSupport, 'fetchColorsAndApplyHostTheme');
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHostAPI.Events.ColorThemeChanged);
            assert.isTrue(colorFetchSpy.called);
            return [
                2
            ];
        });
    }));
    describe('fetchColors', function() {
        it('fetchColors updates color node url', function() {
            sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.InspectorFrontendHost.InspectorFrontendHostInstance, 'isHostedMode').returns(false);
            var originalColorHref = 'devtools://theme/colors.css?sets=ui,chrome';
            var COLORS_CSS_SELECTOR = 'link[href*=\'//theme/colors.css\']';
            var doc = document.implementation.createHTMLDocument();
            var colorsLink = doc.createElement('link');
            colorsLink.href = originalColorHref;
            colorsLink.rel = 'stylesheet';
            doc.head.appendChild(colorsLink);
            themeSupport.addDocumentToTheme(doc);
            var updatedHref = doc.body.querySelector(COLORS_CSS_SELECTOR).getAttribute('href');
            assert.notEqual(updatedHref, originalColorHref);
        });
    });
    describe('getComputedValue', function() {
        var _shadow = /*#__PURE__*/ new WeakMap();
        var StyledComponent = /*#__PURE__*/ function(HTMLElement1) {
            "use strict";
            _inherits(StyledComponent, HTMLElement1);
            var _super = _create_super(StyledComponent);
            function StyledComponent() {
                _class_call_check(this, StyledComponent);
                var _this;
                _this = _super.call(this);
                _class_private_field_init(_assert_this_initialized(_this), _shadow, {
                    writable: true,
                    value: _this.attachShadow({
                        mode: 'open'
                    })
                });
                _class_private_field_get(_this, _shadow).innerHTML = "<style>\n          :host {\n            --color-primary-old: red;\n          }\n          </style>";
                return _this;
            }
            return StyledComponent;
        }(_wrap_native_super(HTMLElement));
        before(function() {
            customElements.define('test-styled-component', StyledComponent);
        });
        afterEach(function() {
            document.body.removeChildren();
        });
        it('obtains computed values correctly (document)', function() {
            assert.isNotEmpty(themeSupport.getComputedValue('--color-primary-old'));
        });
        it('obtains computed values correctly (element)', function() {
            var element = new StyledComponent();
            document.body.appendChild(element);
            var documentValue = themeSupport.getComputedValue('--color-primary-old');
            var elementValue = themeSupport.getComputedValue('--color-primary-old', element);
            assert.isNotEmpty(elementValue);
            assert.notStrictEqual(documentValue, elementValue);
        });
        it('caches computed values (document)', function() {
            var documentValue = themeSupport.getComputedValue('--color-primary-old');
            // Update the styles by adding a new style tag, and confirm that the old
            // value is still returned.
            var newStyle = document.createElement('style');
            newStyle.textContent = ':root { --color-primary-old: green; }';
            document.head.appendChild(newStyle);
            var updatedDocumentValue = themeSupport.getComputedValue('--color-primary-old');
            newStyle.remove();
            assert.strictEqual(documentValue, updatedDocumentValue);
        });
        it('caches computed values (element)', function() {
            var element = new StyledComponent();
            document.body.appendChild(element);
            var elementValue = themeSupport.getComputedValue('--color-primary-old', element);
            assert.isNotEmpty(elementValue);
            // Update the styles by adding a new style tag, and confirm that the old
            // value is still returned.
            var newStyle = document.createElement('style');
            newStyle.textContent = ':root { --color-primary-old: green; }';
            element.shadowRoot.appendChild(newStyle);
            var updatedElementValue = themeSupport.getComputedValue('--color-primary-old', element);
            assert.strictEqual(elementValue, updatedElementValue);
        });
        it('does not caches empty computed values (element)', function() {
            var documentValue = themeSupport.getComputedValue('--test-value');
            // Update the styles by adding a new style tag, and confirm that the old
            // value is still returned.
            var newStyle = document.createElement('style');
            newStyle.textContent = ':root { --test-value: green; }';
            document.head.appendChild(newStyle);
            var updatedDocumentValue = themeSupport.getComputedValue('--test-value', document.body);
            newStyle.remove();
            assert.isEmpty(documentValue);
            assert.isNotEmpty(updatedDocumentValue);
            assert.notStrictEqual(documentValue, updatedDocumentValue);
        });
    });
}); //# sourceMappingURL=ThemeSupport.test.js.map


}),

}]);