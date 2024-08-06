"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_source_map_scopes_ScopeTreeCache_test_js"], {
"./models/source_map_scopes/ScopeTreeCache.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */var _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../source_map_scopes/source_map_scopes.js */ "./models/source_map_scopes/source_map_scopes.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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





describe('ScopeTreeCache', function() {
    describe('scopeTreeForScript', function() {
        var scopeTreeForScript = _source_map_scopes_source_map_scopes_js__WEBPACK_IMPORTED_MODULE_3__.ScopeTreeCache.scopeTreeForScript;
        var javaScriptScopeTreeStub;
        var script;
        beforeEach(function() {
            javaScriptScopeTreeStub = sinon.stub(_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__.FormatterWorkerPool.formatterWorkerPool(), 'javaScriptScopeTree');
            script = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Script.Script, {
                requestContentData: Promise.resolve(new _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_4__.ContentData.ContentData('', false, 'text/javascript'))
            });
        });
        it('requests the scope tree once for a script', /*#__PURE__*/ _async_to_generator(function() {
            var scopeTree, actualScopeTree1, actualScopeTree2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        scopeTree = {
                            start: 0,
                            end: 20,
                            variables: [],
                            children: []
                        };
                        javaScriptScopeTreeStub.returns(Promise.resolve(scopeTree));
                        return [
                            4,
                            scopeTreeForScript(script)
                        ];
                    case 1:
                        actualScopeTree1 = _state.sent();
                        return [
                            4,
                            scopeTreeForScript(script)
                        ];
                    case 2:
                        actualScopeTree2 = _state.sent();
                        assert.isTrue(javaScriptScopeTreeStub.calledOnce);
                        assert.strictEqual(actualScopeTree1, scopeTree);
                        assert.strictEqual(actualScopeTree2, scopeTree);
                        return [
                            2
                        ];
                }
            });
        }));
        it('requests the scope tree once for a script that fails to parse', /*#__PURE__*/ _async_to_generator(function() {
            var actualScopeTree1, actualScopeTree2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        javaScriptScopeTreeStub.returns(null);
                        return [
                            4,
                            scopeTreeForScript(script)
                        ];
                    case 1:
                        actualScopeTree1 = _state.sent();
                        return [
                            4,
                            scopeTreeForScript(script)
                        ];
                    case 2:
                        actualScopeTree2 = _state.sent();
                        assert.isTrue(javaScriptScopeTreeStub.calledOnce);
                        assert.isNull(actualScopeTree1);
                        assert.isNull(actualScopeTree2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('requests the scope tree once for a script, even if the first request is not done yet', /*#__PURE__*/ _async_to_generator(function() {
            var scopeTree, _Platform_PromiseUtilities_promiseWithResolvers, scopeTreePromise, scopeTreeResolve, scopeTreePromise1, scopeTreePromise2, _ref, actualScopeTree1, actualScopeTree2;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        scopeTree = {
                            start: 0,
                            end: 20,
                            variables: [],
                            children: []
                        };
                        _Platform_PromiseUtilities_promiseWithResolvers = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.PromiseUtilities.promiseWithResolvers(), scopeTreePromise = _Platform_PromiseUtilities_promiseWithResolvers.promise, scopeTreeResolve = _Platform_PromiseUtilities_promiseWithResolvers.resolve;
                        javaScriptScopeTreeStub.returns(scopeTreePromise);
                        scopeTreePromise1 = scopeTreeForScript(script);
                        scopeTreePromise2 = scopeTreeForScript(script);
                        scopeTreeResolve(scopeTree);
                        return [
                            4,
                            Promise.all([
                                scopeTreePromise1,
                                scopeTreePromise2
                            ])
                        ];
                    case 1:
                        _ref = _sliced_to_array.apply(void 0, [
                            _state.sent(),
                            2
                        ]), actualScopeTree1 = _ref[0], actualScopeTree2 = _ref[1];
                        assert.isTrue(javaScriptScopeTreeStub.calledOnce);
                        assert.strictEqual(actualScopeTree1, scopeTree);
                        assert.strictEqual(actualScopeTree2, scopeTree);
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=ScopeTreeCache.test.js.map


}),

}]);