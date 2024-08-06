"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_text_editor_TextEditor_test_js"], {
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),
"./testing/MockExecutionContext.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  MockExecutionContext: function() { return MockExecutionContext; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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


var MockExecutionContext = /*#__PURE__*/ function(_SDK_RuntimeModel_ExecutionContext) {
    "use strict";
    _inherits(MockExecutionContext, _SDK_RuntimeModel_ExecutionContext);
    var _super = _create_super(MockExecutionContext);
    function MockExecutionContext(target) {
        _class_call_check(this, MockExecutionContext);
        var runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
        (0,_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.assertNotNullOrUndefined)(runtimeModel);
        return _super.call(this, runtimeModel, 1, 'test id', 'test name', 'test origin', true);
    }
    _create_class(MockExecutionContext, [
        {
            key: "evaluate",
            value: function evaluate(options, userGesture, _awaitPromise) {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        assert.isTrue(userGesture);
                        return [
                            2,
                            {
                                error: 'test'
                            }
                        ];
                    });
                })();
            }
        }
    ]);
    return MockExecutionContext;
} //# sourceMappingURL=MockExecutionContext.js.map
(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext);


}),
"./ui/components/text_editor/TextEditor.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../testing/LanguagePluginHelpers.js */ "./testing/LanguagePluginHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../testing/MockExecutionContext.js */ "./testing/MockExecutionContext.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _text_editor_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./text_editor.js */ "./ui/components/text_editor/text_editor.js");
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













function makeState(doc) {
    var extensions = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.EditorState.create({
        doc: doc,
        extensions: [
            extensions,
            _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.baseConfiguration(doc),
            _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.autocompletion.instance()
        ]
    });
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.describeWithEnvironment)('TextEditor', function() {
    describe('component', function() {
        it('has a state property', function() {
            var editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('one'));
            assert.strictEqual(editor.state.doc.toString(), 'one');
            editor.state = makeState('two');
            assert.strictEqual(editor.state.doc.toString(), 'two');
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            assert.strictEqual(editor.editor.state.doc.toString(), 'two');
            editor.editor.dispatch({
                changes: {
                    from: 3,
                    insert: '!'
                }
            });
            editor.remove();
            assert.strictEqual(editor.editor.state.doc.toString(), 'two!');
        });
        it('sets an aria-label attribute', function() {
            var editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState(''));
            assert.strictEqual(editor.editor.contentDOM.getAttribute('aria-label'), 'Code editor');
        });
        it('can highlight whitespace', function() {
            var editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('line1  \n  line2( )\n\tline3  ', _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.Config.showWhitespace.instance()));
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-trailingWhitespace, .cm-highlightedSpaces').length, 0);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-whitespaces-in-editor').set('all');
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-highlightedSpaces').length, 4);
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-highlightedTab').length, 1);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-whitespaces-in-editor').set('trailing');
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-highlightedSpaces').length, 0);
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-trailingWhitespace').length, 2);
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-whitespaces-in-editor').set('none');
            assert.strictEqual(editor.editor.dom.querySelectorAll('.cm-trailingWhitespace, .cm-highlightedSpaces').length, 0);
            editor.remove();
        });
        it('should restore scroll to the same position after reconnecting to DOM when it is scrollable', /*#__PURE__*/ _async_to_generator(function() {
            var editor, scrollEventHandledToSaveScrollPositionForTest, waitForFirstScrollPromise, scrollTopBeforeRemove, scrollLeftBeforeRemove, waitForSecondScrollPromise, scrollTopAfterReconnect, scrollLeftAfterReconnect;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('line1\nline2\nline3\nline4\nline5\nline6andthisisalonglinesothatwehaveenoughspacetoscrollhorizontally', [
                            _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.EditorView.theme({
                                '&.cm-editor': {
                                    height: '50px',
                                    width: '50px'
                                },
                                '.cm-scroller': {
                                    overflow: 'auto'
                                }
                            })
                        ]));
                        scrollEventHandledToSaveScrollPositionForTest = sinon.stub(editor, 'scrollEventHandledToSaveScrollPositionForTest');
                        waitForFirstScrollPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_6__.expectCall)(scrollEventHandledToSaveScrollPositionForTest);
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
                        editor.editor.dispatch({
                            effects: _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.EditorView.scrollIntoView(0, {
                                x: 'start',
                                xMargin: -20,
                                y: 'start',
                                yMargin: -20
                            })
                        });
                        return [
                            4,
                            waitForFirstScrollPromise
                        ];
                    case 1:
                        _state.sent();
                        scrollTopBeforeRemove = editor.editor.scrollDOM.scrollTop;
                        scrollLeftBeforeRemove = editor.editor.scrollDOM.scrollLeft;
                        waitForSecondScrollPromise = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_6__.expectCall)(scrollEventHandledToSaveScrollPositionForTest);
                        editor.remove();
                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
                        return [
                            4,
                            waitForSecondScrollPromise
                        ];
                    case 2:
                        _state.sent();
                        scrollTopAfterReconnect = editor.editor.scrollDOM.scrollTop;
                        scrollLeftAfterReconnect = editor.editor.scrollDOM.scrollLeft;
                        assert.strictEqual(scrollTopBeforeRemove, scrollTopAfterReconnect);
                        assert.strictEqual(scrollLeftBeforeRemove, scrollLeftAfterReconnect);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('configuration', function() {
        it('can detect line separators', function() {
            assert.strictEqual(makeState('one\r\ntwo\r\nthree').lineBreak, '\r\n');
            assert.strictEqual(makeState('one\ntwo\nthree').lineBreak, '\n');
            assert.strictEqual(makeState('one\r\ntwo\nthree').lineBreak, '\n');
        });
        it('handles dynamic reconfiguration', function() {
            var editor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState(''));
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(editor);
            assert.strictEqual(editor.state.facet(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.indentUnit), '    ');
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('\t');
            assert.strictEqual(editor.state.facet(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.indentUnit), '\t');
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('text-editor-indent').set('    ');
        });
        it('does not treat dashes as word chars in CSS', function() {
            var state = makeState('.some-selector {}', _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.css.cssLanguage);
            var _state_wordAt = state.wordAt(1), from = _state_wordAt.from, to = _state_wordAt.to;
            assert.strictEqual(state.sliceDoc(from, to), 'some');
        });
    });
    describe('autocompletion', function() {
        var testQueryType = function testQueryType(code, pos, type) {
            return _testQueryType.apply(this, arguments);
        };
        it('can complete builtins and keywords', /*#__PURE__*/ _async_to_generator(function() {
            var state, result, completions;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        state = makeState('c', _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.javascript.javascriptLanguage);
                        return [
                            4,
                            _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.javascriptCompletionSource(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.CompletionContext(state, 1, false))
                        ];
                    case 1:
                        result = _state.sent();
                        assert.isNotNull(result);
                        completions = result ? result.options : [];
                        assert.isTrue(completions.some(function(o) {
                            return o.label === 'clear';
                        }));
                        assert.isTrue(completions.some(function(o) {
                            return o.label === 'continue';
                        }));
                        return [
                            2
                        ];
                }
            });
        }));
        function _testQueryType() {
            _testQueryType = _async_to_generator(function(code, pos, type) {
                var range, related, state, query, _query_from;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    range = _arguments.length > 3 && _arguments[3] !== void 0 ? _arguments[3] : '', related = _arguments.length > 4 ? _arguments[4] : void 0;
                    state = makeState(code, _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.javascript.javascriptLanguage);
                    query = _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.getQueryType(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.syntaxTree(state), pos, state.doc);
                    if (type === undefined) {
                        assert.isNull(query);
                    } else {
                        assert.isNotNull(query);
                        if (query) {
                            assert.strictEqual(query.type, type);
                            ;
                            assert.strictEqual(code.slice((_query_from = query.from) !== null && _query_from !== void 0 ? _query_from : pos, pos), range);
                            assert.strictEqual(query.relatedNode && code.slice(query.relatedNode.from, query.relatedNode.to), related);
                        }
                    }
                    return [
                        2
                    ];
                });
            });
            return _testQueryType.apply(this, arguments);
        }
        it('recognizes expression queries', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testQueryType('foo', 3, 0 /* TextEditor.JavaScript.QueryType.Expression */ , 'foo')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            testQueryType('foo ', 4, 0 /* TextEditor.JavaScript.QueryType.Expression */ , '')
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            testQueryType('let', 3, 0 /* TextEditor.JavaScript.QueryType.Expression */ , 'let')
                        ];
                    case 3:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('recognizes propery name queries', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testQueryType('foo.bar', 7, 1 /* TextEditor.JavaScript.QueryType.PropertyName */ , 'bar', 'foo.bar')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            testQueryType('foo.', 4, 1 /* TextEditor.JavaScript.QueryType.PropertyName */ , '', 'foo.')
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            testQueryType('if (foo.', 8, 1 /* TextEditor.JavaScript.QueryType.PropertyName */ , '', 'foo.')
                        ];
                    case 3:
                        _state.sent();
                        return [
                            4,
                            testQueryType('new foo.bar().', 14, 1 /* TextEditor.JavaScript.QueryType.PropertyName */ , '', 'new foo.bar().')
                        ];
                    case 4:
                        _state.sent();
                        return [
                            4,
                            testQueryType('foo?.', 5, 1 /* TextEditor.JavaScript.QueryType.PropertyName */ , '', 'foo?.')
                        ];
                    case 5:
                        _state.sent();
                        return [
                            4,
                            testQueryType('foo?.b', 6, 1 /* TextEditor.JavaScript.QueryType.PropertyName */ , 'b', 'foo?.b')
                        ];
                    case 6:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('recognizes property expression queries', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testQueryType('foo[', 4, 2 /* TextEditor.JavaScript.QueryType.PropertyExpression */ , '', 'foo[')
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            testQueryType('foo["ba', 7, 2 /* TextEditor.JavaScript.QueryType.PropertyExpression */ , '"ba', 'foo["ba')
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        describe('potential map key retrievals', function() {
            it('recognizes potential maps', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testQueryType('foo.get(', 8, 3 /* TextEditor.JavaScript.QueryType.PotentiallyRetrievingFromMap */ , '', 'foo')
                            ];
                        case 1:
                            _state.sent();
                            return [
                                4,
                                testQueryType('foo\n.get(', 9, 3 /* TextEditor.JavaScript.QueryType.PotentiallyRetrievingFromMap */ , '', 'foo')
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('leaves other expressions as-is', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                testQueryType('foo.method(', 11, 0 /* TextEditor.JavaScript.QueryType.Expression */ )
                            ];
                        case 1:
                            _state.sent();
                            return [
                                4,
                                testQueryType('5 + (', 5, 0 /* TextEditor.JavaScript.QueryType.Expression */ )
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                testQueryType('functionCall(', 13, 0 /* TextEditor.JavaScript.QueryType.Expression */ )
                            ];
                        case 3:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        it('does not complete in inappropriate places', /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            testQueryType('"foo bar"', 4)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            testQueryType('x["foo" + "bar', 14)
                        ];
                    case 2:
                        _state.sent();
                        return [
                            4,
                            testQueryType('// comment', 10)
                        ];
                    case 3:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
    });
    it('dispatching a transaction from a saved editor reference should not throw an error', function() {
        var textEditor = new _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.TextEditor.TextEditor(makeState('one'));
        var editorViewA = textEditor.editor;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_4__.renderElementIntoDOM)(textEditor);
        // textEditor.editor references to EditorView A.
        textEditor.dispatch({
            changes: {
                from: 0,
                insert: 'a'
            }
        });
        // `disconnectedCallback` removed `textEditor.#activeEditor`
        // so reaching to `textEditor.editor` will create a new EditorView after this.
        textEditor.remove();
        // EditorView B is created from the previous state
        // and EditorView B's state is diverged from previous state after this transaction.
        textEditor.dispatch({
            changes: {
                from: 0,
                insert: 'b'
            }
        });
        // directly dispatching from Editor A now calls `textEditor.editor.update`
        // which references to EditorView B that has a different state.
        assert.doesNotThrow(function() {
            return editorViewA.dispatch({
                changes: {
                    from: 3,
                    insert: '!'
                }
            });
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_8__.describeWithMockConnection)('TextEditor autocompletion', function() {
    it('does not complete on language plugin frames', /*#__PURE__*/ _async_to_generator(function() {
        var executionContext, debuggerModel, workspace, targetManager, resourceMapping, pluginManager, testScript, payload, callframe, state, result;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    executionContext = new _testing_MockExecutionContext_js__WEBPACK_IMPORTED_MODULE_9__.MockExecutionContext((0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_5__.createTarget)());
                    debuggerModel = executionContext.debuggerModel;
                    _legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, executionContext);
                    workspace = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
                    targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
                    resourceMapping = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.ResourceMapping.ResourceMapping(targetManager, workspace);
                    pluginManager = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                        forceNew: true,
                        targetManager: targetManager,
                        resourceMapping: resourceMapping
                    }).pluginManager;
                    testScript = debuggerModel.parsedScriptSource('1', 'script://1', 0, 0, 0, 0, executionContext.id, '', undefined, false, undefined, false, false, 0, null, null, null, null, null, null);
                    payload = {
                        callFrameId: '0',
                        functionName: 'test',
                        functionLocation: undefined,
                        location: {
                            scriptId: testScript.scriptId,
                            lineNumber: 0,
                            columnNumber: 0
                        },
                        url: 'test-url',
                        scopeChain: [],
                        this: {
                            type: 'object'
                        },
                        returnValue: undefined,
                        canBeRestarted: false
                    };
                    callframe = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerModel.CallFrame(debuggerModel, testScript, payload);
                    executionContext.debuggerModel.setSelectedCallFrame(callframe);
                    pluginManager.addPlugin(new /*#__PURE__*/ (function(TestPlugin) {
                        "use strict";
                        _inherits(_class, TestPlugin);
                        var _super = _create_super(_class);
                        function _class() {
                            _class_call_check(this, _class);
                            return _super.call(this, 'TextEditorTestPlugin');
                        }
                        _create_class(_class, [
                            {
                                key: "handleScript",
                                value: function handleScript(script) {
                                    return script === testScript;
                                }
                            }
                        ]);
                        return _class;
                    }(_testing_LanguagePluginHelpers_js__WEBPACK_IMPORTED_MODULE_7__.TestPlugin))());
                    state = makeState('c', _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.javascript.javascriptLanguage);
                    return [
                        4,
                        _text_editor_js__WEBPACK_IMPORTED_MODULE_12__.JavaScript.javascriptCompletionSource(new _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_10__.CompletionContext(state, 1, false))
                    ];
                case 1:
                    result = _state.sent();
                    assert.isNull(result);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=TextEditor.test.js.map


}),

}]);