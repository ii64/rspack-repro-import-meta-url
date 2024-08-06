"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_linear_memory_inspector_components_ValueInterpreterSettings_test_js"], {
"./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=LinearMemoryViewerUtils.js.map


}),
"./panels/linear_memory_inspector/components/ValueInterpreterSettings.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.js */ "./panels/linear_memory_inspector/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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



var SETTINGS_INPUT_SELECTOR = '[data-input]';
var SETTINGS_TITLE_SELECTOR = '[data-title]';
var SETTINGS_LABEL_SELECTOR = '.type-label';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithLocale)('ValueInterpreterSettings', function() {
    var setUpComponent = function setUpComponent() {
        var component = new _components_js__WEBPACK_IMPORTED_MODULE_2__.ValueInterpreterSettings.ValueInterpreterSettings();
        var data = {
            valueTypes: new Set([
                "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ ,
                "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */ ,
                "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ 
            ])
        };
        component.data = data;
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        return {
            component: component,
            data: data
        };
    };
    it('renders all checkboxes', function() {
        var component = setUpComponent().component;
        var checkboxes = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, SETTINGS_LABEL_SELECTOR, HTMLLabelElement);
        var checkboxLabels = Array.from(checkboxes, function(checkbox) {
            return checkbox.getAttribute('title');
        });
        assert.deepEqual(checkboxLabels, [
            "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ ,
            "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
            "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */ ,
            "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */ ,
            "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ ,
            "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */ ,
            "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ ,
            "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */ 
        ]);
    });
    it('triggers an event on checkbox click', /*#__PURE__*/ _async_to_generator(function() {
        var component, labels, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, label, checkbox, title, checked, eventPromise, event, err;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    component = setUpComponent().component;
                    labels = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, SETTINGS_LABEL_SELECTOR, HTMLLabelElement);
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        6,
                        7,
                        8
                    ]);
                    _iterator = labels[Symbol.iterator]();
                    _state.label = 2;
                case 2:
                    if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                        3,
                        5
                    ];
                    label = _step.value;
                    checkbox = label.querySelector(SETTINGS_INPUT_SELECTOR);
                    assert.instanceOf(checkbox, HTMLInputElement);
                    title = label.querySelector(SETTINGS_TITLE_SELECTOR);
                    assert.instanceOf(title, HTMLSpanElement);
                    checked = checkbox.checked;
                    eventPromise = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getEventPromise)(component, 'typetoggle');
                    checkbox.click();
                    return [
                        4,
                        eventPromise
                    ];
                case 3:
                    event = _state.sent();
                    assert.strictEqual("".concat(event.data.type), title.innerText);
                    assert.strictEqual(checkbox.checked, !checked);
                    _state.label = 4;
                case 4:
                    _iteratorNormalCompletion = true;
                    return [
                        3,
                        2
                    ];
                case 5:
                    return [
                        3,
                        8
                    ];
                case 6:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        8
                    ];
                case 7:
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                    return [
                        7
                    ];
                case 8:
                    return [
                        2
                    ];
            }
        });
    }));
    it('correctly shows checkboxes as checked/unchecked', function() {
        var _setUpComponent = setUpComponent(), component = _setUpComponent.component, data = _setUpComponent.data;
        var labels = (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getElementsWithinComponent)(component, SETTINGS_LABEL_SELECTOR, HTMLLabelElement);
        var elements = Array.from(labels).map(function(label) {
            var checkbox = label.querySelector(SETTINGS_INPUT_SELECTOR);
            var title = label.querySelector(SETTINGS_TITLE_SELECTOR);
            assert.instanceOf(checkbox, HTMLInputElement);
            assert.instanceOf(title, HTMLSpanElement);
            return {
                title: title,
                checked: checkbox.checked
            };
        });
        assert.isAtLeast(data.valueTypes.size, 1);
        var checkedTitles = new Set(elements.filter(function(n) {
            return n.checked;
        }).map(function(n) {
            return n.title.innerText;
        }));
        var expectedTitles = new Set(_to_consumable_array(data.valueTypes).map(function(type) {
            return "".concat(type);
        }));
        assert.deepEqual(checkedTitles, expectedTitles);
        var uncheckedTitles = new Set(elements.filter(function(n) {
            return !n.checked;
        }).map(function(n) {
            return n.title.innerText;
        }));
        var allTypesTitle = [
            "Integer 8-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int8 */ ,
            "Integer 16-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int16 */ ,
            "Integer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int32 */ ,
            "Integer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Int64 */ ,
            "Float 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float32 */ ,
            "Float 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Float64 */ ,
            "Pointer 32-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer32 */ ,
            "Pointer 64-bit" /* LinearMemoryInspectorComponents.ValueInterpreterDisplayUtils.ValueType.Pointer64 */ 
        ];
        var expectedUncheckedTitles = new Set(allTypesTitle.filter(function(title) {
            return !expectedTitles.has(title);
        }));
        assert.deepEqual(uncheckedTitles, expectedUncheckedTitles);
    });
}); //# sourceMappingURL=ValueInterpreterSettings.test.js.map


}),
"./panels/linear_memory_inspector/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LinearMemoryHighlightChipList: function() { return /* reexport module object */ _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__; },
  LinearMemoryInspector: function() { return /* reexport module object */ _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__; },
  LinearMemoryInspectorUtils: function() { return /* reexport module object */ _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__; },
  LinearMemoryNavigator: function() { return /* reexport module object */ _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__; },
  LinearMemoryValueInterpreter: function() { return /* reexport module object */ _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__; },
  LinearMemoryViewer: function() { return /* reexport module object */ _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__; },
  LinearMemoryViewerUtils: function() { return /* reexport module object */ _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__; },
  ValueInterpreterDisplay: function() { return /* reexport module object */ _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__; },
  ValueInterpreterDisplayUtils: function() { return /* reexport module object */ _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__; },
  ValueInterpreterSettings: function() { return /* reexport module object */ _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__; }
});
/* harmony import */var _LinearMemoryHighlightChipList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LinearMemoryHighlightChipList.js */ "./panels/linear_memory_inspector/components/LinearMemoryHighlightChipList.js");
/* harmony import */var _LinearMemoryInspector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LinearMemoryInspector.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspector.js");
/* harmony import */var _LinearMemoryInspectorUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinearMemoryInspectorUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryInspectorUtils.js");
/* harmony import */var _LinearMemoryNavigator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinearMemoryNavigator.js */ "./panels/linear_memory_inspector/components/LinearMemoryNavigator.js");
/* harmony import */var _LinearMemoryValueInterpreter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LinearMemoryValueInterpreter.js */ "./panels/linear_memory_inspector/components/LinearMemoryValueInterpreter.js");
/* harmony import */var _LinearMemoryViewer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinearMemoryViewer.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewer.js");
/* harmony import */var _LinearMemoryViewerUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LinearMemoryViewerUtils.js */ "./panels/linear_memory_inspector/components/LinearMemoryViewerUtils.js");
/* harmony import */var _ValueInterpreterDisplay_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ValueInterpreterDisplay.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplay.js");
/* harmony import */var _ValueInterpreterDisplayUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ValueInterpreterDisplayUtils.js */ "./panels/linear_memory_inspector/components/ValueInterpreterDisplayUtils.js");
/* harmony import */var _ValueInterpreterSettings_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ValueInterpreterSettings.js */ "./panels/linear_memory_inspector/components/ValueInterpreterSettings.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










 //# sourceMappingURL=components.js.map


}),

}]);