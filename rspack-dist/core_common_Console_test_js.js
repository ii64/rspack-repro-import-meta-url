"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Console_test_js"], {
"./core/common/Console.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./core/common/common.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

var Console = _common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console;
describe('Console', function() {
    var consoleImpl;
    beforeEach(function() {
        consoleImpl = Console.instance({
            forceNew: true
        });
    });
    it('adds messages', function() {
        consoleImpl.addMessage('Foo', "info" /* Common.Console.MessageLevel.Info */ , true);
        var messages = consoleImpl.messages();
        assert.strictEqual(messages.length, 1);
        assert.strictEqual(messages[0].text, 'Foo');
    });
    it('adds handles messages of all types', function() {
        var messageTypes = new Map([
            [
                "info" /* Common.Console.MessageLevel.Info */ ,
                'log'
            ],
            [
                "warning" /* Common.Console.MessageLevel.Warning */ ,
                'warn'
            ],
            [
                "error" /* Common.Console.MessageLevel.Error */ ,
                'error'
            ]
        ]);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = messageTypes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _sliced_to_array(_step.value, 2), type = _step_value[0], method = _step_value[1];
                consoleImpl = Console.instance({
                    forceNew: true
                });
                // Dispatch the message of the appropriate type.
                // @ts-ignore
                consoleImpl[method](type);
                // Now read the message back and check it.
                var messages = consoleImpl.messages();
                assert.strictEqual(messages.length, 1);
                assert.strictEqual(messages[0].text, type);
                assert.strictEqual(messages[0].level, type);
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
    });
    it('stores messages', function() {
        consoleImpl.addMessage('Foo', "info" /* Common.Console.MessageLevel.Info */ , true);
        consoleImpl.addMessage('Baz', "warning" /* Common.Console.MessageLevel.Warning */ , true);
        consoleImpl.addMessage('Bar', "error" /* Common.Console.MessageLevel.Error */ , true);
        consoleImpl.addMessage('Donkey', "info" /* Common.Console.MessageLevel.Info */ , true);
        var messages = consoleImpl.messages();
        assert.strictEqual(messages.length, 4);
    });
    it('dispatches events to listeners', function(done) {
        var callback = function(param) {
            var data = param.data;
            consoleImpl.removeEventListener("messageAdded" /* Common.Console.Events.MessageAdded */ , callback);
            assert.strictEqual(data.text, 'Foo');
            done();
        };
        consoleImpl.addEventListener("messageAdded" /* Common.Console.Events.MessageAdded */ , callback);
        consoleImpl.addMessage('Foo', "info" /* Common.Console.MessageLevel.Info */ , true);
    });
}); //# sourceMappingURL=Console.test.js.map


}),

}]);