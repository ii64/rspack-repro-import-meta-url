"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_EventTarget_test_ts"],{

/***/ "./src/core/common/EventTarget.test.ts":
/*!*********************************************!*\
  !*** ./src/core/common/EventTarget.test.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Important: This code does not actually run any tests but is used to verify
//            that the type magic of `EventTarget` behaves as expected w.r.t
//            to the TypeScript compiler.

var Events;
(function (Events) {
    Events["VoidEvent"] = "VoidEvent";
    Events["NumberEvent"] = "NumberEvent";
    Events["KeyValueEvent"] = "KeyValueEvent";
    Events["BooleanEvent"] = "BooleanEvent";
    Events["UnionEvent"] = "UnionEvent";
})(Events || (Events = {}));
class TypedEventEmitter extends _common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    testValidArgumentTypes() {
        this.dispatchEventToListeners(Events.VoidEvent);
        this.dispatchEventToListeners(Events.NumberEvent, 5.0);
        this.dispatchEventToListeners(Events.KeyValueEvent, { key: 'key', value: 42 });
        this.dispatchEventToListeners(Events.BooleanEvent, true);
        this.dispatchEventToListeners(Events.UnionEvent, 'foo');
        this.dispatchEventToListeners(Events.UnionEvent, null);
    }
    testInvalidArgumentTypes() {
        // @ts-expect-error undefined instead of no argument provided
        this.dispatchEventToListeners(Events.VoidEvent, undefined);
        // @ts-expect-error string instead of undefined provided
        this.dispatchEventToListeners(Events.VoidEvent, 'void');
        // @ts-expect-error string instead of number provided
        this.dispatchEventToListeners(Events.NumberEvent, 'expected number');
        // @ts-expect-error argument missing
        this.dispatchEventToListeners(Events.NumberEvent);
        // @ts-expect-error wrong object type provided as payload
        this.dispatchEventToListeners(Events.KeyValueEvent, { key: 'key', foo: 'foo' });
        // @ts-expect-error unknown event type used
        this.dispatchEventToListeners('fake', { key: 'key', foo: 'foo' });
        // @ts-expect-error wrong payload not part of the union
        this.dispatchEventToListeners(Events.UnionEvent, 25);
    }
    testStringAndSymbolDisallowed() {
        // @ts-expect-error only keys of `TestEvents` are allowed.
        this.dispatchEventToListeners('foo');
        // @ts-expect-error only keys of `TestEvents` are allowed.
        this.dispatchEventToListeners(Symbol('foo'));
    }
}
class VoidTypedEventEmitter extends _common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    testInvalidArgumentTypes() {
        // @ts-expect-error undefined instead of no argument provided
        this.dispatchEventToListeners(Events.VoidEvent, undefined);
        // @ts-expect-error string instead of undefined provided
        this.dispatchEventToListeners(Events.VoidEvent, 'void');
        // @ts-expect-error string instead of number provided
        this.dispatchEventToListeners(Events.NumberEvent, 'expected number');
        // @ts-expect-error argument missing
        this.dispatchEventToListeners(Events.NumberEvent);
        // @ts-expect-error wrong object type provided as payload
        this.dispatchEventToListeners(Events.KeyValueEvent, { key: 'key', foo: 'foo' });
        // @ts-expect-error unknown event type used
        this.dispatchEventToListeners('fake', { key: 'key', foo: 'foo' });
        // @ts-expect-error wrong payload not part of the union
        this.dispatchEventToListeners(Events.UnionEvent, 25);
    }
    testStringAndSymbolDisallowed() {
        // @ts-expect-error only keys of `TestEvents` are allowed.
        this.dispatchEventToListeners('foo');
        // @ts-expect-error only keys of `TestEvents` are allowed.
        this.dispatchEventToListeners(Symbol('foo'));
    }
}
VoidTypedEventEmitter;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
class UntypedEventEmitter extends _common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper {
    testDispatch() {
        this.dispatchEventToListeners('foo');
        this.dispatchEventToListeners(Symbol('number payload'), 25);
        this.dispatchEventToListeners(Events.VoidEvent);
        this.dispatchEventToListeners(Events.UnionEvent, 'foo');
    }
}
function genericListener() {
    return (_arg) => { };
}
const typedEmitter = new TypedEventEmitter();
(function testValidListeners() {
    typedEmitter.addEventListener(Events.VoidEvent, genericListener());
    typedEmitter.addEventListener(Events.NumberEvent, genericListener());
    typedEmitter.addEventListener(Events.KeyValueEvent, genericListener());
    typedEmitter.addEventListener(Events.BooleanEvent, genericListener());
    typedEmitter.addEventListener(Events.UnionEvent, genericListener());
})();
(function testInvalidListenerArguments() {
    // @ts-expect-error
    typedEmitter.addEventListener(Events.VoidEvent, genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener(Events.NumberEvent, genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener(Events.KeyValueEvent, genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener(Events.UnionEvent, genericListener());
})();
(function testInvalidListenerType() {
    // @ts-expect-error
    typedEmitter.addEventListener('foo', genericListener());
    // @ts-expect-error
    typedEmitter.addEventListener(Symbol('foo'), genericListener());
})();
(function testUnionTypeOnDispatch() {
    // @ts-expect-error
    typedEmitter.dispatchEventToListeners(Events.NumberEvent, 5);
    const event = Math.random() < 0.5 ? Events.NumberEvent : Events.BooleanEvent;
    // @ts-expect-error
    typedEmitter.dispatchEventToListeners(event, true);
})();
const untypedEmitter = new UntypedEventEmitter();
(function testUntypedListeners() {
    untypedEmitter.addEventListener('foo', genericListener());
    untypedEmitter.addEventListener(Symbol('foo'), genericListener());
    untypedEmitter.addEventListener(Events.VoidEvent, genericListener());
})();


/***/ })

}]);