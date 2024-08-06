"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Revealer_test_js"], {
"./core/common/Revealer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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

describe('Revealer', function() {
    var _Common_Revealer = _common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer, registerRevealer = _Common_Revealer.registerRevealer, reveal = _Common_Revealer.reveal, RevealerRegistry = _Common_Revealer.RevealerRegistry;
    var MockContextType = function MockContextType() {
        "use strict";
        _class_call_check(this, MockContextType);
    };
    var MockRevealer = /*#__PURE__*/ function() {
        "use strict";
        function MockRevealer() {
            _class_call_check(this, MockRevealer);
        }
        _create_class(MockRevealer, [
            {
                key: "reveal",
                value: function reveal(_revealable, _omitFocus) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2
                            ];
                        });
                    })();
                }
            }
        ]);
        return MockRevealer;
    }();
    var mockRegistration = {
        contextTypes: function contextTypes() {
            return [
                MockContextType
            ];
        },
        loadRevealer: function loadRevealer() {
            return _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    return [
                        2,
                        new MockRevealer()
                    ];
                });
            })();
        }
    };
    describe('RevealerRegistry', function() {
        describe('instance', function() {
            afterEach(function() {
                RevealerRegistry.removeInstance();
            });
            it('yields the singleton instance on subsequent calls', function() {
                var registry1 = RevealerRegistry.instance();
                var registry2 = RevealerRegistry.instance();
                assert.strictEqual(registry1, registry2, 'RevealerRegistry.instance() is supposed to return the same singleton on subsequent calls');
            });
        });
        describe('removeInstance', function() {
            it('clears the singleton instance correctly', function() {
                var registry1 = RevealerRegistry.instance();
                RevealerRegistry.removeInstance();
                var registry2 = RevealerRegistry.instance();
                assert.notStrictEqual(registry1, registry2, 'RevealerRegistry.removeInstance() is supposed to clear the singleton');
            });
        });
        describe('reveal', function() {
            it('raises an error if no revealers are registered', /*#__PURE__*/ _async_to_generator(function() {
                var registery, spy;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            registery = new RevealerRegistry();
                            spy = sinon.spy();
                            return [
                                4,
                                registery.reveal(new MockContextType(), false).catch(spy)
                            ];
                        case 1:
                            _state.sent();
                            assert.isTrue(spy.calledOnce, 'RevealerRegistry.reveal() is supposed to raise an error when no revealer is found');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('raises an error if conflicting revealers are registered', /*#__PURE__*/ _async_to_generator(function() {
                var registery, spy;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            registery = new RevealerRegistry();
                            registery.register(mockRegistration);
                            registery.register(mockRegistration);
                            spy = sinon.spy();
                            return [
                                4,
                                registery.reveal(new MockContextType(), false).catch(spy)
                            ];
                        case 1:
                            _state.sent();
                            assert.isTrue(spy.calledOnce, 'RevealerRegistry.reveal() is supposed to raise an error when conflicting revealer are found');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('calls the `reveal` method on the registered `Revealer` exactly once', /*#__PURE__*/ _async_to_generator(function() {
                var registery, revealStub, mockRevealable;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            registery = new RevealerRegistry();
                            registery.register(mockRegistration);
                            revealStub = sinon.stub(MockRevealer.prototype, 'reveal');
                            mockRevealable = new MockContextType();
                            return [
                                4,
                                registery.reveal(mockRevealable, false)
                            ];
                        case 1:
                            _state.sent();
                            sinon.assert.calledOnceWithExactly(revealStub, mockRevealable, false);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    describe('registerRevealer', function() {
        it('calls the `register` method on the registry', /*#__PURE__*/ _async_to_generator(function() {
            var registerStub;
            return _ts_generator(this, function(_state) {
                registerStub = sinon.stub(RevealerRegistry.prototype, 'register');
                registerRevealer(mockRegistration);
                sinon.assert.calledOnceWithExactly(registerStub, mockRegistration);
                return [
                    2
                ];
            });
        }));
    });
    describe('reveal', function() {
        var revealable = {
            foo: 'bar'
        };
        it('calls the `reveal` method on the registry', /*#__PURE__*/ _async_to_generator(function() {
            var revealStub;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        revealStub = sinon.stub(RevealerRegistry.prototype, 'reveal');
                        return [
                            4,
                            reveal(revealable, true)
                        ];
                    case 1:
                        _state.sent();
                        sinon.assert.calledOnceWithExactly(revealStub, revealable, true);
                        return [
                            2
                        ];
                }
            });
        }));
        it('defaults to not omitting focus', /*#__PURE__*/ _async_to_generator(function() {
            var revealStub;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        revealStub = sinon.stub(RevealerRegistry.prototype, 'reveal');
                        return [
                            4,
                            reveal(revealable)
                        ];
                    case 1:
                        _state.sent();
                        sinon.assert.calledOnceWithExactly(revealStub, revealable, false);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=Revealer.test.js.map


}),

}]);