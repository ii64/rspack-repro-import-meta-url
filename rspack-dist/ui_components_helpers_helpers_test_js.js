"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_helpers_helpers_test_js"], {
"./ui/components/helpers/helpers.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _templateObject() {
    var data = _tagged_template_literal([
        "\n          <span on-render=",
        ">\n           hello world\n          </span>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n          <span on-render=",
        ">\n           ",
        "\n          </span>"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
var _render, _renderAsync, _class;



var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
var TestElement = (_render = /*#__PURE__*/ new WeakSet(), _renderAsync = /*#__PURE__*/ new WeakSet(), _class = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(_class, HTMLElement1);
    var _super = _create_super(_class);
    function _class() {
        _class_call_check(this, _class);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_method_init(_assert_this_initialized(_this), _renderAsync);
        _define_property(_assert_this_initialized(_this), "renderCount", 0);
        _define_property(_assert_this_initialized(_this), "renderAsyncCount", 0);
        _define_property(_assert_this_initialized(_this), "renderBound", _class_private_method_get(_this, _render, render).bind(_assert_this_initialized(_this)));
        _define_property(_assert_this_initialized(_this), "renderAsyncBound", _class_private_method_get(_this, _renderAsync, renderAsync).bind(_assert_this_initialized(_this)));
        return _this;
    }
    return _class;
}(_wrap_native_super(HTMLElement)), _class);
customElements.define('x-devtools-test-element', TestElement);
describe('ComponentHelpers', function() {
    describe('Directives', function() {
        describe('nodeRenderedCallback', function() {
            it('runs when any node is rendered', function() {
                var fakeComponentRender = function fakeComponentRender() {
                    // clang-format off
                    var html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject(), _helpers_js__WEBPACK_IMPORTED_MODULE_2__.Directives.nodeRenderedCallback(callback));
                    // clang-format on
                    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, targetDiv, {
                        host: this
                    });
                };
                var targetDiv = document.createElement('div');
                var callback = sinon.spy();
                fakeComponentRender.call(targetDiv);
                assert.isNotEmpty(targetDiv.innerHTML);
                assert.strictEqual(callback.callCount, 1);
            });
            it('runs again when Lit re-renders', function() {
                var fakeComponentRender = function fakeComponentRender(output) {
                    // clang-format off
                    var html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html(_templateObject1(), _helpers_js__WEBPACK_IMPORTED_MODULE_2__.Directives.nodeRenderedCallback(callback), output);
                    // clang-format on
                    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, targetDiv, {
                        host: this
                    });
                };
                var targetDiv = document.createElement('div');
                var callback = sinon.spy();
                fakeComponentRender.call(targetDiv, 'render one');
                assert.strictEqual(callback.callCount, 1);
                fakeComponentRender.call(targetDiv, 'render two');
                assert.strictEqual(callback.callCount, 2);
            });
        });
    });
    describe('scheduleRender', function() {
        it('throws if renders are unscheduled', function() {
            var element = new TestElement();
            assert.throws(function() {
                element.renderBound();
            }, 'Render is not scheduled');
        });
        it('only renders once if second render call is made before the first has been handled', /*#__PURE__*/ _async_to_generator(function() {
            var element;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        element = new TestElement();
                        void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderBound);
                        void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderBound);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(element.renderCount, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('handles async callbacks', /*#__PURE__*/ _async_to_generator(function() {
            var element;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        element = new TestElement();
                        void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, /*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderAsyncBound);
                                        return [
                                            4,
                                            element.renderAsyncBound()
                                        ];
                                    case 1:
                                        _state.sent();
                                        return [
                                            2
                                        ];
                                }
                            });
                        }));
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(element.renderAsyncCount, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('re-renders if second render call is made during the first', /*#__PURE__*/ _async_to_generator(function() {
            var element;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        element = new TestElement();
                        void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, function() {
                            void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderBound);
                            element.renderBound();
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(element.renderCount, 2);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=helpers.test.js.map
function render() {
    if (!_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('Render is not scheduled');
    }
    this.renderCount++;
}
function renderAsync() {
    var _this = this;
    if (!_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.isScheduledRender(this)) {
        throw new Error('Render is not scheduled');
    }
    return new Promise(function(resolve) {
        setTimeout(function() {
            _this.renderAsyncCount++;
            resolve();
        }, 40);
    });
}


}),

}]);