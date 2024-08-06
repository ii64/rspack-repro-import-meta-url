"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_ServerSentEventsProtocol_test_js"], {
"./core/sdk/ServerSentEventsProtocol.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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

describe('ServerSentEventsParser', function() {
    var enqueue = /**
     * Encodes `str` first as UTF-8 and then as Base64 to simulate CDP.
     * @returns A promise that fulfills when the parser is done handling the chunk.
     */ function enqueue(str, options) {
        var _String;
        var maybeBom = (options === null || options === void 0 ? void 0 : options.prefixBOM) ? [
            0xef,
            0xbb,
            0xbf
        ] : [];
        var bytes = new TextEncoder().encode(str);
        return parser.addBase64Chunk(window.btoa((_String = String).fromCodePoint.apply(_String, _to_consumable_array(maybeBom).concat(_to_consumable_array(bytes)))));
    };
    var enqueueOneByOne = function enqueueOneByOne(str, options) {
        return _enqueueOneByOne.apply(this, arguments);
    };
    var parser;
    var events;
    function _enqueueOneByOne() {
        _enqueueOneByOne = /**
     * Same as `enqueue` but feeds the resulting bytes one by one into the parser.
     */ _async_to_generator(function(str, options) {
            var bytes, i;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!(options === null || options === void 0 ? void 0 : options.prefixBOM)) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            parser.addBase64Chunk(window.btoa('\xef'))
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            parser.addBase64Chunk(window.btoa('\xbb'))
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            parser.addBase64Chunk(window.btoa('\xbf'))
                        ];
                    case 3:
                        _state.sent();
                        _state.label = 4;
                    case 4:
                        bytes = new TextEncoder().encode(str);
                        i = 0;
                        _state.label = 5;
                    case 5:
                        if (!(i < bytes.length)) return [
                            3,
                            8
                        ];
                        return [
                            4,
                            parser.addBase64Chunk(window.btoa(String.fromCodePoint(bytes[i])))
                        ];
                    case 6:
                        _state.sent();
                        _state.label = 7;
                    case 7:
                        ++i;
                        return [
                            3,
                            5
                        ];
                    case 8:
                        return [
                            2
                        ];
                }
            });
        });
        return _enqueueOneByOne.apply(this, arguments);
    }
    beforeEach(function() {
        events = [];
        parser = new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServerSentEventProtocol.ServerSentEventsParser(function(eventType, data, eventId) {
            events.push({
                eventType: eventType,
                data: data,
                eventId: eventId
            });
        });
    });
    it('does not dispatch an event for empty messages', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches an event for simple messages', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:hello\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('accumulates data fields', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:hello\ndata:bye\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '');
                    assert.strictEqual(events[0].data, 'hello\nbye');
                    return [
                        2
                    ];
            }
        });
    }));
    it('dispatches an event with the right id if one was set', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('id:42\ndata:hello\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '42');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('remembers the id even when data is empty and no event is dispatched', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('id:42\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 0);
                    return [
                        4,
                        enqueue('data:hello\n\n')
                    ];
                case 2:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '42');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports custom event types', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('event:foo\ndata:hello\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'foo');
                    assert.strictEqual(events[0].eventId, '');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('resets the event type after dispatching it', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('event:foo\ndata:hello\n\ndata:bye\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 2);
                    assert.strictEqual(events[0].eventType, 'foo');
                    assert.strictEqual(events[0].data, 'hello');
                    assert.strictEqual(events[1].eventType, 'message');
                    assert.strictEqual(events[1].data, 'bye');
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not accumulate event fields', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:hello\nevent:foo\nevent:bar\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'bar');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('does not reset the id after dispatching it', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('id:42\ndata:hello\n\ndata:bye\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 2);
                    assert.strictEqual(events[0].eventId, '42');
                    assert.strictEqual(events[0].data, 'hello');
                    assert.strictEqual(events[1].eventId, '42');
                    assert.strictEqual(events[1].data, 'bye');
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores the retry field', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('retry:9999\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 0);
                    return [
                        2
                    ];
            }
        });
    }));
    it('supports different types of newlines', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:hello\r\n\rdata:bye\r\r')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 2);
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores unrecognized fields', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:hello\nfoo:bar\nanotherRandomFIeld\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores comments', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:hello\n:comment one\n:comment two\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores BOM', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // This line are the first bytes, so the BOM should be ignored.
                    return [
                        4,
                        enqueue('data:hello\n', {
                            prefixBOM: true
                        })
                    ];
                case 1:
                    _state.sent();
                    // In this line the BOM bytes are part of the field name.
                    return [
                        4,
                        enqueue('data:bye\n', {
                            prefixBOM: true
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        enqueue('\n')
                    ];
                case 3:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('ignores BOM (one-by-one)', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    // This line are the first bytes, so the BOM should be ignored.
                    return [
                        4,
                        enqueueOneByOne('data:hello\n', {
                            prefixBOM: true
                        })
                    ];
                case 1:
                    _state.sent();
                    // In this line the BOM bytes are part of the field name.
                    return [
                        4,
                        enqueueOneByOne('data:bye\n', {
                            prefixBOM: true
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        enqueueOneByOne('\n')
                    ];
                case 3:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].eventId, '');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('treats lines without a colon as field name only', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:hello\nevent:foo\nevent\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].data, 'hello');
                    return [
                        2
                    ];
            }
        });
    }));
    it('skips at most one leading space for field values', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:  hello  \nevent:  type \n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, ' type ');
                    assert.strictEqual(events[0].data, ' hello  ');
                    return [
                        2
                    ];
            }
        });
    }));
    it('works correctly if data is received one byte at a time', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueueOneByOne('data:hello\r\ndata:world\revent:a\revent:b\nid:4\n\nid:8\ndata:bye\r\n\r')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 2);
                    assert.strictEqual(events[0].eventType, 'b');
                    assert.strictEqual(events[0].eventId, '4');
                    assert.strictEqual(events[0].data, 'hello\nworld');
                    assert.strictEqual(events[1].eventType, 'message');
                    assert.strictEqual(events[1].eventId, '8');
                    assert.strictEqual(events[1].data, 'bye');
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles non-ASCII characters correctly', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        enqueue('data:Iñtërnâtiônàlizætiøn☃𝌆\n\n')
                    ];
                case 1:
                    _state.sent();
                    assert.lengthOf(events, 1);
                    assert.strictEqual(events[0].eventType, 'message');
                    assert.strictEqual(events[0].data, 'Iñtërnâtiônàlizætiøn☃𝌆');
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ServerSentEventsProtocol.test.js.map


}),

}]);