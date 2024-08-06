"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_RemoteObject_test_js"],{

/***/ "./core/sdk/RemoteObject.test.js":
/*!***************************************!*\
  !*** ./core/sdk/RemoteObject.test.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



describe('RemoteObject', () => {
    describe('fromLocalObject', () => {
        it('can handle undefined', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(undefined);
            assert.deepEqual(remoteObject.type, 'undefined');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, undefined);
            assert.deepEqual(remoteObject.description, 'undefined');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle null', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(null);
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, 'null');
            assert.deepEqual(remoteObject.value, null);
            assert.deepEqual(remoteObject.description, 'null');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, null);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle bigints', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(1n);
            assert.deepEqual(remoteObject.type, 'bigint');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, 1n);
            assert.deepEqual(remoteObject.description, '1');
            assert.deepEqual(remoteObject.unserializableValue(), '1n');
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, '1n');
        });
        it('can handle numbers', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(42);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, 42);
            assert.deepEqual(remoteObject.description, '42');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, 42);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle strings', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('foo string');
            assert.deepEqual(remoteObject.type, 'string');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, 'foo string');
            assert.deepEqual(remoteObject.description, 'foo string');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, 'foo string');
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle NaN', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(NaN);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            // Since equality comparisons don't work for NaN, we check if it is a number and if its string
            // representation is the correct one.
            assert.deepEqual(typeof remoteObject.value, 'number');
            assert.deepEqual(String(remoteObject.value), String(NaN));
            assert.deepEqual(remoteObject.description, 'NaN');
            assert.deepEqual(remoteObject.unserializableValue(), 'NaN');
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, 'NaN');
        });
        it('can handle Infinity', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(Infinity);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, Infinity);
            assert.deepEqual(remoteObject.description, 'Infinity');
            assert.deepEqual(remoteObject.unserializableValue(), 'Infinity');
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, 'Infinity');
        });
        it('can handle negative Infinity', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(-Infinity);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, -Infinity);
            assert.deepEqual(remoteObject.description, '-Infinity');
            assert.deepEqual(remoteObject.unserializableValue(), '-Infinity');
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, '-Infinity');
        });
        it('can handle negative zero', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(-0);
            assert.deepEqual(remoteObject.type, 'number');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, -0);
            assert.deepEqual(remoteObject.description, '0');
            assert.deepEqual(remoteObject.unserializableValue(), '-0');
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, undefined);
            assert.deepEqual(callArguments.unserializableValue, '-0');
        });
        it('can handle an array of numbers', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject([1n, 2, NaN, -0, null, undefined]);
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, 'array');
            assert.deepEqual(remoteObject.value, [1n, 2, NaN, -0, null, undefined]);
            assert.deepEqual(remoteObject.description, '[1, 2, NaN, 0, null, undefined]');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.arrayLength(), 6);
            assert.deepEqual(remoteObject.hasChildren, true);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, [1n, 2, NaN, -0, null, undefined]);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle an object', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({ foo: 'bar' });
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, { foo: 'bar' });
            assert.deepEqual(remoteObject.description, '{foo: "bar"}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, true);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, { foo: 'bar' });
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle a nested object', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({ foo: 'bar', baz: { nested: 34 }, another: { nested: { object: true } } });
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            assert.deepEqual(remoteObject.value, { foo: 'bar', baz: { nested: 34 }, another: { nested: { object: true } } });
            assert.deepEqual(remoteObject.description, '{foo: "bar", baz: {nested: 34}, another: {nested: {object: true}}}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, true);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, { foo: 'bar', baz: { nested: 34 }, another: { nested: { object: true } } });
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle the function arguments object', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject((function (_a, _b, _c, _d) {
                return arguments;
            })(1, 2, 3, 4));
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            // We can't represent an `Arguments` object, but we can compare its structure
            assert.deepEqual(String(remoteObject.value), '[object Arguments]');
            assert.deepEqual(Object.keys(remoteObject.value), ['0', '1', '2', '3']);
            assert.deepEqual(Object.values(remoteObject.value), [1, 2, 3, 4]);
            assert.deepEqual(remoteObject.description, '{0: 1, 1: 2, 2: 3, 3: 4}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, true);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(String(callArguments.value), '[object Arguments]');
            assert.deepEqual(Object.keys(callArguments.value), ['0', '1', '2', '3']);
            assert.deepEqual(Object.values(callArguments.value), [1, 2, 3, 4]);
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle a function', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(function func() { });
            assert.deepEqual(remoteObject.type, 'function');
            assert.deepEqual(remoteObject.subtype, undefined);
            // We can't represent an `Function` object, but we can compare its structure
            assert.deepEqual(typeof remoteObject.value, 'function');
            const funcStrs = [
                'function func() { }',
                // esbuild produces different format.
                'function func() {\n      }',
            ];
            assert.deepInclude(funcStrs, String(remoteObject.value));
            assert.deepInclude(funcStrs, remoteObject.description);
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepInclude(funcStrs, String(callArguments.value));
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle an error', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(new Error('Some error message'));
            assert.deepEqual(remoteObject.type, 'object');
            assert.deepEqual(remoteObject.subtype, undefined);
            // We can't represent an `Error` object, but we can compare its structure
            assert.deepEqual(typeof remoteObject.value, 'object');
            assert.deepEqual(String(remoteObject.value), 'Error: Some error message');
            assert.deepEqual(remoteObject.description, '{}');
            assert.deepEqual(remoteObject.unserializableValue(), undefined);
            assert.deepEqual(remoteObject.hasChildren, false);
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(typeof callArguments.value, 'object');
            assert.deepEqual(String(callArguments.value), 'Error: Some error message');
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
        it('can handle a Date', () => {
            const createNewFixedTimeDate = () => {
                const fixedTimeDate = new Date();
                fixedTimeDate.setUTCFullYear(2020);
                fixedTimeDate.setUTCMonth(2);
                fixedTimeDate.setUTCDate(10);
                fixedTimeDate.setUTCHours(15);
                fixedTimeDate.setUTCMinutes(38);
                fixedTimeDate.setUTCSeconds(57);
                fixedTimeDate.setUTCMilliseconds(345);
                return fixedTimeDate;
            };
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(createNewFixedTimeDate());
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
            const callArguments = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(remoteObject);
            assert.deepEqual(callArguments.value, createNewFixedTimeDate());
            assert.deepEqual(callArguments.unserializableValue, undefined);
        });
    });
    describe('isNullOrUndefined', () => {
        it('correctly handles undefined', () => {
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(undefined));
        });
        it('correctly handles RemoteObject null value', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(null);
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(remoteObject));
        });
        it('correctly handles RemoteObject undefined value', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(undefined);
            assert.isTrue(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(remoteObject));
        });
        it('correctly handles RemoteObject object', () => {
            const remoteObject = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({ x: 42, y: 21 });
            assert.isFalse(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.isNullOrUndefined(remoteObject));
        });
    });
});
describe('RemoteObjectProperty', () => {
    describe('isAccessorProperty', () => {
        it('correctly handles data properties', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('x', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('some string'));
            assert.isFalse(property.isAccessorProperty());
        });
        it('correctly handles accessor properties with getters', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('y', null);
            property.getter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(() => { });
            assert.isTrue(property.isAccessorProperty());
        });
        it('correctly handles accessor properties with setters', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('y', null);
            property.setter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(() => { });
            assert.isTrue(property.isAccessorProperty());
        });
    });
    describe('match', () => {
        it('correctly handles properties with a null value', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('foo', null);
            assert.isFalse(property.match({ includeNullOrUndefinedValues: false, regex: null }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: null }));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: true, regex: /bar/ }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: /f.*/ }));
        });
        it('correctly handles properties with a RemoteObject null value', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('bar', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(null));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: false, regex: null }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: null }));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: true, regex: /foo/ }));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: false, regex: /.*r/ }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: /.*r/ }));
        });
        it('correctly handles properties with a RemoteObject undefined value', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('x', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(undefined));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: false, regex: null }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: null }));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: true, regex: /y/ }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: /.*/ }));
        });
        it('correctly handles properties with a RemoteObject object value', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('obj', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({ x: 1 }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: false, regex: null }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: null }));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: true, regex: /^b.*/ }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: /.*/ }));
        });
        it('correctly matches property values\' descriptions', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('foo', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('this is a bar'));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: /bar/ }));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: true, regex: /baz/ }));
        });
        it('correctly matches accessor properties', () => {
            const property = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('foo', null);
            property.getter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(() => void 0);
            property.setter = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject(() => void 0);
            assert.isTrue(property.match({ includeNullOrUndefinedValues: false, regex: null }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: null }));
            assert.isFalse(property.match({ includeNullOrUndefinedValues: true, regex: /bar/ }));
            assert.isTrue(property.match({ includeNullOrUndefinedValues: true, regex: /foo/ }));
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('RemoteError', () => {
    let target;
    let runtimeModel;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        runtimeModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RuntimeModel.RuntimeModel);
    });
    it('throws on creation for non-error subtypes', () => {
        const object = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject({});
        assert.throws(() => _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object));
    });
    it('caches the exception details', async () => {
        const exceptionDetailsStub = sinon.stub(runtimeModel, 'getExceptionDetails').returns(Promise.resolve(undefined));
        const object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
        const error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
        assert.isUndefined(await error.exceptionDetails());
        assert.isUndefined(await error.exceptionDetails());
        assert.isTrue(exceptionDetailsStub.calledOnce);
    });
    it('caches the cause', async () => {
        const object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
        const getAllPropertiesStub = sinon.stub(object, 'getAllProperties').returns(Promise.resolve({ internalProperties: null, properties: null }));
        const error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
        assert.isUndefined(await error.cause());
        assert.isUndefined(await error.cause());
        assert.isTrue(getAllPropertiesStub.calledOnce);
    });
    it('returns undefined if error has no "cause" property', async () => {
        const object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
        const properties = [new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('message', _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('the message itself'))];
        sinon.stub(object, 'getAllProperties').returns(Promise.resolve({ internalProperties: null, properties }));
        const error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
        assert.isUndefined(await error.cause());
    });
    it('returns the value of the "cause" property', async () => {
        const object = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectImpl(runtimeModel, '1', 'object', 'error', {});
        const causeValue = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.fromLocalObject('a string cause');
        const properties = [new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('cause', causeValue)];
        sinon.stub(object, 'getAllProperties').returns(Promise.resolve({ internalProperties: null, properties }));
        const error = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteError.objectAsError(object);
        assert.strictEqual(await error.cause(), causeValue);
    });
});
//# sourceMappingURL=RemoteObject.test.js.map

/***/ })

}]);