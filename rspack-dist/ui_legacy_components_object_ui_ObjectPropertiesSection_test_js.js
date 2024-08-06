"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_object_ui_ObjectPropertiesSection_test_js"], {
"./ui/legacy/components/object_ui/ObjectPropertiesSection.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../testing/MutationHelpers.js */ "./testing/MutationHelpers.js");
/* harmony import */var _testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../testing/RealConnection.js */ "./testing/RealConnection.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _object_ui_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./object_ui.js */ "./ui/legacy/components/object_ui/object_ui.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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








describe('ObjectPropertiesSection', function() {
    (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithRealConnection)('ObjectPropertiesSection', function() {
        var evaluateAndGetProperties = function evaluateAndGetProperties(code) {
            return _evaluateAndGetProperties.apply(this, arguments);
        };
        var setupTreeOutline = function setupTreeOutline(code, accessorPropertiesOnly, generatePreview) {
            return _setupTreeOutline.apply(this, arguments);
        };
        function _evaluateAndGetProperties() {
            _evaluateAndGetProperties = _async_to_generator(function(code) {
                var accessorPropertiesOnly, generatePreview, targetManager, target, runtimeModel, executionContext, result, object, properties;
                var _arguments = arguments;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            accessorPropertiesOnly = _arguments.length > 1 && _arguments[1] !== void 0 ? _arguments[1] : false, generatePreview = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : false;
                            targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance();
                            target = targetManager.rootTarget();
                            assert.exists(target);
                            runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel);
                            assert.exists(runtimeModel);
                            return [
                                4,
                                (0,_testing_RealConnection_js__WEBPACK_IMPORTED_MODULE_5__.getExecutionContext)(runtimeModel)
                            ];
                        case 1:
                            executionContext = _state.sent();
                            _legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.ExecutionContext, executionContext);
                            return [
                                4,
                                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.JavaScriptREPL.JavaScriptREPL.evaluateAndBuildPreview(code, false, true, 500 /* timeout */ )
                            ];
                        case 2:
                            result = _state.sent().result;
                            if (!(result && 'object' in result && result.object)) {
                                throw new Error('Cannot evaluate test object');
                            }
                            object = result.object;
                            return [
                                4,
                                object.getAllProperties(accessorPropertiesOnly, generatePreview)
                            ];
                        case 3:
                            properties = _state.sent().properties;
                            assert.exists(properties);
                            return [
                                2,
                                {
                                    object: object,
                                    properties: properties
                                }
                            ];
                    }
                });
            });
            return _evaluateAndGetProperties.apply(this, arguments);
        }
        function _setupTreeOutline() {
            _setupTreeOutline = _async_to_generator(function(code, accessorPropertiesOnly, generatePreview) {
                var _ref, object, properties, treeOutline;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                evaluateAndGetProperties(code, accessorPropertiesOnly, generatePreview)
                            ];
                        case 1:
                            _ref = _state.sent(), object = _ref.object, properties = _ref.properties;
                            treeOutline = new _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline({
                                readOnly: true
                            });
                            _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertyTreeElement.populateWithProperties(treeOutline.rootElement(), properties, null, true, false, object);
                            return [
                                2,
                                treeOutline
                            ];
                    }
                });
            });
            return _setupTreeOutline.apply(this, arguments);
        }
        it('can reveal private accessor values', /*#__PURE__*/ _async_to_generator(function() {
            var VALUE, treeOutline, propertiesSection, calculateValueButton, mutations;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        VALUE = '42';
                        return [
                            4,
                            setupTreeOutline("(() => {\n           class A {\n             get #bar() { return ".concat(VALUE, "; }\n           };\n           return new A();\n         })()"), true, false)
                        ];
                    case 1:
                        treeOutline = _state.sent();
                        propertiesSection = treeOutline.rootElement().firstChild();
                        propertiesSection.update();
                        calculateValueButton = propertiesSection.valueElement.querySelector('.object-value-calculate-value-button');
                        assert.exists(calculateValueButton);
                        mutations = (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_4__.someMutations)(propertiesSection.listItemElement);
                        calculateValueButton.click();
                        return [
                            4,
                            mutations
                        ];
                    case 2:
                        _state.sent();
                        assert.strictEqual(VALUE, propertiesSection.valueElement.innerHTML);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('assignWebIDLMetadata', function() {
            var checkImportProperties = function checkImportProperties(code, important) {
                return _checkImportProperties.apply(this, arguments);
            };
            function _checkImportProperties() {
                _checkImportProperties = _async_to_generator(function(code, important) {
                    var notImportant, _ref, object, properties, expected, notExpected, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, property, _property_webIdl;
                    var _arguments = arguments;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                notImportant = _arguments.length > 2 && _arguments[2] !== void 0 ? _arguments[2] : [];
                                return [
                                    4,
                                    evaluateAndGetProperties(code)
                                ];
                            case 1:
                                _ref = _state.sent(), object = _ref.object, properties = _ref.properties;
                                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.assignWebIDLMetadata(object, properties);
                                expected = new Set(important);
                                notExpected = new Set(notImportant);
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = properties[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        property = _step.value;
                                        ;
                                        if ((_property_webIdl = property.webIdl) === null || _property_webIdl === void 0 ? void 0 : _property_webIdl.applicable) {
                                            expected.delete(property.name);
                                            notExpected.delete(property.name);
                                        }
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
                                assert.strictEqual(expected.size, 0, "Not all expected properties were found (".concat(_to_consumable_array(expected).join(', '), " is missing)"));
                                assert.strictEqual(notExpected.size, notImportant.length, 'Unexpected properties were found');
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _checkImportProperties.apply(this, arguments);
            }
            it('marks important DOM properties for checkbox inputs', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                checkImportProperties("(() => {\n             const input = document.createElement('input');\n             input.type = 'checkbox';\n             return input;\n           })()", [
                                    'checked',
                                    'required',
                                    'type',
                                    'value'
                                ], [
                                    'accept',
                                    'files',
                                    'multiple'
                                ])
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('marks important DOM properties for file inputs', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                checkImportProperties("(() => {\n             const input = document.createElement('input');\n             input.type = 'file';\n             return input;\n           })()", [
                                    'accept',
                                    'files',
                                    'multiple',
                                    'required',
                                    'type'
                                ], [
                                    'checked'
                                ])
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('marks important DOM properties for anchors', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                checkImportProperties("(() => {\n             const a = document.createElement('a');\n             a.href = 'https://www.google.com:1234/foo/bar/baz?hello=world#what';\n             const code = document.createElement('code');\n             code.innerHTML = 'hello world';\n             a.append(code);\n             return a;\n           })()", [
                                    // https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-a-element
                                    'text',
                                    // https://html.spec.whatwg.org/multipage/links.html#htmlhyperlinkelementutils
                                    'href',
                                    'origin',
                                    'protocol',
                                    'hostname',
                                    'port',
                                    'pathname',
                                    'search',
                                    'hash'
                                ])
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('marks important DOM properties for the window object', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                checkImportProperties('window', [
                                    'customElements',
                                    'document',
                                    'frames',
                                    'history',
                                    'location',
                                    'navigator'
                                ])
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ObjectPropertiesSection', function() {
        describe('appendMemoryIcon', function() {
            it('appends a memory icon for inspectable object types', function() {
                var object = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject);
                object.isLinearMemoryInspectable.returns(true);
                var div = document.createElement('div');
                assert.isFalse(div.hasChildNodes());
                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.appendMemoryIcon(div, object);
                assert.isTrue(div.hasChildNodes());
                var icon = div.querySelector('devtools-icon');
                assert.isNotNull(icon);
            });
            it('doesn\'t append a memory icon for non-inspectable object types', function() {
                var object = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject);
                object.isLinearMemoryInspectable.returns(false);
                var div = document.createElement('div');
                assert.isFalse(div.hasChildNodes());
                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.appendMemoryIcon(div, object);
                assert.isFalse(div.hasChildNodes());
            });
            it('triggers the correct revealer upon \'click\'', function() {
                var object = sinon.createStubInstance(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RemoteObject.RemoteObject);
                object.isLinearMemoryInspectable.returns(true);
                var expression = 'foo';
                var div = document.createElement('div');
                _object_ui_js__WEBPACK_IMPORTED_MODULE_7__.ObjectPropertiesSection.ObjectPropertiesSection.appendMemoryIcon(div, object, expression);
                var icon = div.querySelector('devtools-icon');
                assert.exists(icon);
                var reveal = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal');
                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchClickEvent)(icon);
                sinon.assert.calledOnceWithMatch(reveal, sinon.match({
                    object: object,
                    expression: expression
                }), false);
            });
        });
    });
}); //# sourceMappingURL=ObjectPropertiesSection.test.js.map


}),

}]);