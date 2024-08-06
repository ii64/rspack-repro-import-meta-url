"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_RemoteObject_test_js"], {
"./core/sdk/RemoteObject.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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



describe('RemoteObject', function() {
    describe('fromLocalObject', function() {
        it('can handle undefined', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(undefined);
            assert.deepEqual(remoteObject.type, 'undefined');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, undefined);
            assert.deepEqual(remoteObject.description, 'undefined');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle null', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(null);
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, 'null');
            assert.deepEqual(remoteObject.value, null);
            assert.deepEqual(remoteObject.description, 'null');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, null);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle bigints', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(1n);
            assert.deepEqual(remoteObject.type, 'bigint');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, 1n);
            assert.deepEqual(remoteObject.description, '1');
            assert.deepEqual(remoteObject.unserializableValue(), '1n');
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, '1n');
        });
        it('can handle numbers', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(42);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, 42);
            assert.deepEqual(remoteObject.description, '42');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, 42);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle strings', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('foo string');
            assert.deepEqual(remoteObject.type, 'string');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, 'foo string');
            assert.deepEqual(remoteObject.description, 'foo string');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, 'foo string');
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle NaN', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(NaN);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            // Since equality comparisons don't work for NaN, we check if it is a number and if its string
            // representation is the correct one.
            assert.deepEqual(_type_of(remoteObject.value), 'number');
            assert.deepEqual(String(remoteObject.value), String(NaN));
            assert.deepEqual(remoteObject.description, 'NaN');
            assert.deepEqual(remoteObject.unserializableValue(), 'NaN');
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, 'NaN');
        });
        it('can handle Infinity', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(Infinity);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, Infinity);
            assert.deepEqual(remoteObject.description, 'Infinity');
            assert.deepEqual(remoteObject.unserializableValue(), 'Infinity');
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, 'Infinity');
        });
        it('can handle negative Infinity', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(-Infinity);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, -Infinity);
            assert.deepEqual(remoteObject.description, '-Infinity');
            assert.deepEqual(remoteObject.unserializableValue(), '-Infinity');
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, '-Infinity');
        });
        it('can handle negative zero', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(-0);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, -0);
            assert.deepEqual(remoteObject.description, '0');
            assert.deepEqual(remoteObject.unserializableValue(), '-0');
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, '-0');
        });
        it('can handle an array of numbers', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject([
                1n,
                2,
                NaN,
                -0,
                null,
                undefined
            ]);
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, 'array');
            assert.deepEqual(remoteObject.value, [
                1n,
                2,
                NaN,
                -0,
                null,
                undefined
            ]);
            assert.deepEqual(remoteObject.description, '[1, 2, NaN, 0, null, undefined]');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.arrayLength(), 6);
            assert.deepEqual(remoteObject.hasChildren, true);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, [
                1n,
                2,
                NaN,
                -0,
                null,
                undefined
            ]);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle an object', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({
                foo: 'bar'
            });
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, {
                foo: 'bar'
            });
            assert.deepEqual(remoteObject.description, '{foo: "bar"}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, true);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, {
                foo: 'bar'
            });
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle a nested object', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({
                foo: 'bar',
                baz: {
                    nested: 34
                },
                another: {
                    nested: {
                        object: true
                    }
                }
            });
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, {
                foo: 'bar',
                baz: {
                    nested: 34
                },
                another: {
                    nested: {
                        object: true
                    }
                }
            });
            assert.deepEqual(remoteObject.description, '{foo: "bar", baz: {nested: 34}, another: {nested: {object: true}}}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, true);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, {
                foo: 'bar',
                baz: {
                    nested: 34
                },
                another: {
                    nested: {
                        object: true
                    }
                }
            });
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle the function arguments object', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(function(_a, _b, _c, _d) {
                return arguments;
            }(1, 2, 3, 4));
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            // We can't represent an `Arguments` object, but we can compare its structure
            assert.deepEqual(String(remoteObject.value), '[object Arguments]');
            assert.deepEqual(Object.keys(remoteObject.value), [
                '0',
                '1',
                '2',
                '3'
            ]);
            assert.deepEqual(Object.values(remoteObject.value), [
                1,
                2,
                3,
                4
            ]);
            assert.deepEqual(remoteObject.description, '{0: 1, 1: 2, 2: 3, 3: 4}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, true);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(String(callArguments.value), '[object Arguments]');
            assert.deepEqual(Object.keys(callArguments.value), [
                '0',
                '1',
                '2',
                '3'
            ]);
            assert.deepEqual(Object.values(callArguments.value), [
                1,
                2,
                3,
                4
            ]);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle a function', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(function func() {});
            assert.deepEqual(remoteObject.type, 'function');
            assert.deepEqual(remoteObject.subtype, undefined);
            // We can't represent an `Function` object, but we can compare its structure
            assert.deepEqual(_type_of(remoteObject.value), 'function');
            var funcStrs = [
                'function func() { }',
                // esbuild produces different format.
                'function func() {\n      }'
            ];
            assert.deepInclude(funcStrs, String(remoteObject.value));
            assert.deepInclude(funcStrs, remoteObject.description);
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepInclude(funcStrs, String(callArguments.value));
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle an error', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(new Error('Some error message'));
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            // We can't represent an `Error` object, but we can compare its structure
            assert.deepEqual(_type_of(remoteObject.value), 'object');
            assert.deepEqual(String(remoteObject.value), 'Error: Some error message');
            assert.deepEqual(remoteObject.description, '{}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(_type_of(callArguments.value), 'object');
            assert.deepEqual(String(callArguments.value), 'Error: Some error message');
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle a Date', function() {
            var createNewFixedTimeDate = function() {
                var fixedTimeDate = new Date();
                fixedTimeDate.setUTCFullYear(2020);
                fixedTimeDate.setUTCMonth(2);
                fixedTimeDate.setUTCDate(10);
                fixedTimeDate.setUTCHours(15);
                fixedTimeDate.setUTCMinutes(38);
                fixedTimeDate.setUTCSeconds(57);
                fixedTimeDate.setUTCMilliseconds(345);
                return fixedTimeDate;
            };
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(createNewFixedTimeDate());
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, 'date');
            assert.deepEqual(remoteObject.value, createNewFixedTimeDate());
            if (remoteObject.description === undefined) {
                assert.fail('Description is not defined');
                return;
            }
            // Since string representations of dates are timezone dependent, we can't directly compare them.
            // Instead, we should assume that the description represents a valid Date and then we parse that
            // string as-is and compare that.
            assert.deepEqual(Date.parse(remoteObject.description), Date.parse('Tue Mar 10 2020 15:38:57 GMT+0000 (Greenwich Mean Time)'));
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            var callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, createNewFixedTimeDate());
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
    });
    describe('isNullOrUndefined', function() {
        it('correctly handles undefined', function() {
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(undefined));
        });
        it('correctly handles RemoteObject null value', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(null);
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(remoteObject));
        });
        it('correctly handles RemoteObject undefined value', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(undefined);
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(remoteObject));
        });
        it('correctly handles RemoteObject object', function() {
            var remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({
                x: 42,
                y: 21
            });
            assert.isFalse(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(remoteObject));
        });
    });
});
describe('RemoteObjectProperty', function() {
    describe('isAccessorProperty', function() {
        it('correctly handles data properties', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('x', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('some string'));
            assert.isFalse(property.isAccessorProperty());
        });
        it('correctly handles accessor properties with getters', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('y', null);
            property.getter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(function() {});
            assert.isTrue(property.isAccessorProperty());
        });
        it('correctly handles accessor properties with setters', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('y', null);
            property.setter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(function() {});
            assert.isTrue(property.isAccessorProperty());
        });
    });
    describe('match', function() {
        it('correctly handles properties with a null value', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('foo', null);
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: false,
                regex: null
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: null
            }));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: true,
                regex: /bar/
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: /f.*/
            }));
        });
        it('correctly handles properties with a RemoteObject null value', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('bar', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(null));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: false,
                regex: null
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: null
            }));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: true,
                regex: /foo/
            }));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: false,
                regex: /.*r/
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: /.*r/
            }));
        });
        it('correctly handles properties with a RemoteObject undefined value', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('x', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(undefined));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: false,
                regex: null
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: null
            }));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: true,
                regex: /y/
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: /.*/
            }));
        });
        it('correctly handles properties with a RemoteObject object value', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('obj', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({
                x: 1
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: false,
                regex: null
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: null
            }));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: true,
                regex: /^b.*/
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: /.*/
            }));
        });
        it('correctly matches property values\' descriptions', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('foo', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('this is a bar'));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: /bar/
            }));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: true,
                regex: /baz/
            }));
        });
        it('correctly matches accessor properties', function() {
            var property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('foo', null);
            property.getter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(function() {
                return void 0;
            });
            property.setter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(function() {
                return void 0;
            });
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: false,
                regex: null
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: null
            }));
            assert.isFalse(property.match({
                includeNullOrUndefinedValues: true,
                regex: /bar/
            }));
            assert.isTrue(property.match({
                includeNullOrUndefinedValues: true,
                regex: /foo/
            }));
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('RemoteError', function() {
    var target;
    var runtimeModel;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        runtimeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
    });
    it('throws on creation for non-error subtypes', function() {
        var object = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({});
        assert.throws(function() {
            return _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
        });
    });
    it('caches the exception details', /*#__PURE__*/ _async_to_generator(function() {
        var exceptionDetailsStub, object, error, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    exceptionDetailsStub = sinon.stub(runtimeModel, 'getExceptionDetails').returns(Promise.resolve(undefined));
                    object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
                    error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
                    _ = assert.isUndefined;
                    return [
                        4,
                        error.exceptionDetails()
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    _1 = assert.isUndefined;
                    return [
                        4,
                        error.exceptionDetails()
                    ];
                case 2:
                    _1.apply(assert, [
                        _state.sent()
                    ]);
                    assert.isTrue(exceptionDetailsStub.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('caches the cause', /*#__PURE__*/ _async_to_generator(function() {
        var object, getAllPropertiesStub, error, _, _1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
                    getAllPropertiesStub = sinon.stub(object, 'getAllProperties').returns(Promise.resolve({
                        internalProperties: null,
                        properties: null
                    }));
                    error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
                    _ = assert.isUndefined;
                    return [
                        4,
                        error.cause()
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    _1 = assert.isUndefined;
                    return [
                        4,
                        error.cause()
                    ];
                case 2:
                    _1.apply(assert, [
                        _state.sent()
                    ]);
                    assert.isTrue(getAllPropertiesStub.calledOnce);
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns undefined if error has no "cause" property', /*#__PURE__*/ _async_to_generator(function() {
        var object, properties, error, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
                    properties = [
                        new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('message', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('the message itself'))
                    ];
                    sinon.stub(object, 'getAllProperties').returns(Promise.resolve({
                        internalProperties: null,
                        properties: properties
                    }));
                    error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
                    _ = assert.isUndefined;
                    return [
                        4,
                        error.cause()
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('returns the value of the "cause" property', /*#__PURE__*/ _async_to_generator(function() {
        var object, causeValue, properties, error, _;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
                    causeValue = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('a string cause');
                    properties = [
                        new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('cause', causeValue)
                    ];
                    sinon.stub(object, 'getAllProperties').returns(Promise.resolve({
                        internalProperties: null,
                        properties: properties
                    }));
                    error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
                    _ = assert.strictEqual;
                    return [
                        4,
                        error.cause()
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent(),
                        causeValue
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=RemoteObject.test.js.map


}),

}]);