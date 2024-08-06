"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_visual_logging_DomState_test_js"], {
"./ui/visual_logging/DomState.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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


describe('DomState', function() {
    var container;
    beforeEach(function() {
        container = document.createElement('div');
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(container);
    });
    var el = function(id) {
        var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
        return d.getElementById(id);
    };
    it('gets loggable elements and their parents', function() {
        container.innerHTML = '\n      <div id="1">\n        <div jslog="TreeItem" id="11">\n          <div id="111">\n            <div jslog="TreeItem" id="1111">\n              <div jslog="TreeItem" id="11111"></div>\n            </div>\n            <div jslog="TreeItem" id="1112"></div>\n          </div>\n          <div id="112"><span>hello</span></div>\n          <div jslog="TreeItem" id="113"></div>\n        </div>\n        <div id="12">\n          <div jslog="TreeItem" id="121">\n            <div jslog="TreeItem" id="1211"></div>\n          </div>\n        </div>\n      <div>\n      <div jslog="TreeItem" id="2"></div>';
        var loggables = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([
            document
        ]).loggables;
        assert.sameDeepMembers(loggables, [
            {
                element: el('2'),
                parent: undefined
            },
            {
                element: el('121'),
                parent: undefined
            },
            {
                element: el('1211'),
                parent: el('121')
            },
            {
                element: el('11'),
                parent: undefined
            },
            {
                element: el('113'),
                parent: el('11')
            },
            {
                element: el('1112'),
                parent: el('11')
            },
            {
                element: el('1111'),
                parent: el('11')
            },
            {
                element: el('11111'),
                parent: el('1111')
            }
        ]);
    });
    it('returns element in a BFS order', function() {
        container.innerHTML = '\n      <li jslog="TreeItem" id="1">\n      </li>\n      <ol>\n        <li jslog="TreeItem" id="11">\n        </li>\n        <li jslog="TreeItem" id="12">\n      </ol>\n      <li jslog="TreeItem" id="2">\n      </li>\n      <ol>\n        <li jslog="TreeItem" id="21">\n        </li>\n        <li jslog="TreeItem" id="22">\n        </li>\n        </li>\n      </ol>';
        var loggables = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([
            document
        ]).loggables;
        assert.deepEqual(loggables, [
            {
                element: el('1'),
                parent: undefined
            },
            {
                element: el('2'),
                parent: undefined
            },
            {
                element: el('11'),
                parent: undefined
            },
            {
                element: el('12'),
                parent: undefined
            },
            {
                element: el('21'),
                parent: undefined
            },
            {
                element: el('22'),
                parent: undefined
            }
        ]);
    });
    it('gets loggable elements across documents', function() {
        container.innerHTML = '\n      <div jslog="TreeItem" id="1"></div>\n      <iframe id="iframe"></iframe>';
        var iframe = el('iframe');
        var iframeDocument = iframe.contentDocument;
        assert.exists(iframeDocument);
        iframeDocument.body.innerHTML = '\n      <div jslog="TreeItem" id="2"></div>';
        var loggables = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([
            document,
            iframeDocument
        ]).loggables;
        assert.sameDeepMembers(loggables, [
            {
                element: el('1'),
                parent: undefined
            },
            {
                element: el('2', iframeDocument),
                parent: undefined
            }
        ]);
    });
    it('identifies parents across shadow DOM', function() {
        container.innerHTML = '\n      <div jslog="TreeItem" id="1">\n        <div jslog="TreeItem" id="12"></div>\n        <div id="13"></div>\n      </div>';
        var shadow = el('13').attachShadow({
            mode: 'open'
        });
        var shadowContent = document.createElement('div');
        shadowContent.innerHTML = '\n      <div id="131">\n        <div jslog="TreeItem" id="1311"></div>\n      </div>';
        shadow.appendChild(shadowContent);
        var loggables = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([
            document
        ]).loggables;
        assert.sameDeepMembers(loggables, [
            {
                element: el('1'),
                parent: undefined
            },
            {
                element: el('1311', shadow),
                parent: el('1')
            },
            {
                element: el('12'),
                parent: el('1')
            }
        ]);
    });
    it('walks slots in the assigned order', function() {
        var TestComponent = /*#__PURE__*/ function(HTMLElement1) {
            "use strict";
            _inherits(TestComponent, HTMLElement1);
            var _super = _create_super(TestComponent);
            function TestComponent() {
                _class_call_check(this, TestComponent);
                return _super.apply(this, arguments);
            }
            _create_class(TestComponent, [
                {
                    key: "render",
                    value: function render() {
                        var shadow = this.attachShadow({
                            mode: 'open'
                        });
                        shadow.innerHTML = '\n          <div jslog="TreeItem" id="c1"><slot id="slot-1" name="slot-1"></slot></div>\n          <div jslog="TreeItem" id="c2"><slot id="slot-2" name="slot-2"></slot></div>';
                    }
                },
                {
                    key: "connectedCallback",
                    value: function connectedCallback() {
                        this.render();
                    }
                }
            ]);
            return TestComponent;
        }(_wrap_native_super(HTMLElement));
        customElements.define('ve-test-component', /*#__PURE__*/ function(TestComponent) {
            "use strict";
            _inherits(_class, TestComponent);
            var _super = _create_super(_class);
            function _class() {
                _class_call_check(this, _class);
                return _super.apply(this, arguments);
            }
            return _class;
        }(TestComponent));
        container.innerHTML = '\n      <div id="0" jslog="TreeItem">\n        <ve-test-component id="1" jslog="TreeItem">\n          <div jslog="TreeItem" id="11" slot="slot-1">\n            <div id="111" jslog="TreeItem"></div>\n          </div>\n          <div id="12" slot="slot-2" jslog="TreeItem">\n        </ve-test-component>\n      </div>';
        var loggables = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([
            document
        ]).loggables;
        var shadow = el('1').shadowRoot;
        assert.sameDeepMembers(loggables, [
            {
                element: el('0'),
                parent: undefined
            },
            {
                element: el('1'),
                parent: el('0')
            },
            {
                element: el('c1', shadow),
                parent: el('1')
            },
            {
                element: el('11'),
                parent: el('c1', shadow)
            },
            {
                element: el('111'),
                parent: el('11')
            },
            {
                element: el('c2', shadow),
                parent: el('1')
            },
            {
                element: el('12'),
                parent: el('c2', shadow)
            }
        ]);
    });
    it('returns shadow roots', function() {
        container.innerHTML = '\n      <div id="1">\n        <div class="shadow" id="11"></div>\n      </div>\n      <div class="shadow" id="2"></div>';
        var addedShadowRoots = [];
        var attachShadows = function(el) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = el.querySelectorAll('.shadow')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var target = _step.value;
                    var shadow = target.attachShadow({
                        mode: 'open'
                    });
                    var content = document.createElement('div');
                    content.innerHTML = '<div></div><div class="shadow></div>';
                    shadow.appendChild(content);
                    addedShadowRoots.push(shadow);
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
        };
        attachShadows(container);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = addedShadowRoots[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var shadow = _step.value;
                attachShadows(shadow);
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
        var shadowRoots = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.getDomState([
            document
        ]).shadowRoots;
        assert.sameDeepMembers(shadowRoots, addedShadowRoots);
    });
    it('identifies visible elements', function() {
        container.innerHTML = '\n      <style>\n        .box {\n          position: absolute;\n          height: 100px;\n          width: 100px;\n        }\n      </style>\n      <div id="1" class="box" style="left: 50px; top: 0;"></div>\n      <div id="2" class="box" style="left: 0; top: 50px;"></div>';
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 200, 200)), new DOMRect(50, 0, 100, 100));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 200, 200)), new DOMRect(0, 50, 100, 100));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 100, 100)), new DOMRect(50, 0, 50, 100));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 100, 100)), new DOMRect(0, 50, 100, 50));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 50, 50)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 50, 50)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 50, 100)));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 50, 100)), new DOMRect(0, 50, 50, 50));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(25, 25, 25, 50)));
        assert.deepStrictEqual(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(25, 25, 25, 50)), new DOMRect(25, 50, 25, 25));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(25, 25, 30, 30)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(25, 25, 30, 30)));
    });
    it('identifies small visible elements', function() {
        container.innerHTML = '\n      <div id="1" class="box" style="width: 100px; height: 5px;"></div>\n      <div id="2" class="box" style="width: 0; height: 5px;"></div>';
        assert.isNotNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('1'), new DOMRect(0, 0, 200, 200)));
        assert.isNull(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_1__.DomState.visibleOverlap(el('2'), new DOMRect(0, 0, 200, 200)));
    });
}); //# sourceMappingURL=DomState.test.js.map


}),
"./ui/visual_logging/visual_logging-testing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Debugging: function() { return /* reexport module object */ _Debugging_js__WEBPACK_IMPORTED_MODULE_0__; },
  DomState: function() { return /* reexport module object */ _DomState_js__WEBPACK_IMPORTED_MODULE_1__; },
  LoggingConfig: function() { return /* reexport module object */ _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__; },
  LoggingDriver: function() { return /* reexport module object */ _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__; },
  LoggingEvents: function() { return /* reexport module object */ _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__; },
  LoggingState: function() { return /* reexport module object */ _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__; },
  NonDomState: function() { return /* reexport module object */ _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__; }
});
/* harmony import */var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./ui/visual_logging/Debugging.js");
/* harmony import */var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./ui/visual_logging/DomState.js");
/* harmony import */var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./ui/visual_logging/LoggingConfig.js");
/* harmony import */var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./ui/visual_logging/LoggingDriver.js");
/* harmony import */var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./ui/visual_logging/LoggingEvents.js");
/* harmony import */var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./ui/visual_logging/LoggingState.js");
/* harmony import */var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./ui/visual_logging/NonDomState.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







 //# sourceMappingURL=visual_logging-testing.js.map


}),

}]);