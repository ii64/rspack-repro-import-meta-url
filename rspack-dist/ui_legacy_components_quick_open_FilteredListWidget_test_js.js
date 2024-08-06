"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_quick_open_FilteredListWidget_test_js"], {
"./ui/legacy/components/quick_open/FilteredListWidget.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _quick_open_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./quick_open.js */ "./ui/legacy/components/quick_open/quick_open.js");
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





function createCommandMenuProvider(inputs) {
    var setting = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createFakeSetting)('test-setting', false);
    setting.setRegistration({
        settingName: 'test-setting',
        settingType: "boolean" /* Common.SettingRegistration.SettingType.BOOLEAN */ ,
        category: "APPEARANCE" /* Common.SettingRegistration.SettingCategory.APPEARANCE */ ,
        defaultValue: false
    });
    var provider = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.CommandMenu.CommandMenuProvider(inputs.map(function(input) {
        return _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.CommandMenu.CommandMenu.createSettingCommand(setting, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString(input), true);
    }));
    return provider;
}
function testMatch(inputs, query, expectedSelection, expectedMatches) {
    return _testMatch.apply(this, arguments);
}
function _testMatch() {
    _testMatch = _async_to_generator(function(inputs, query, expectedSelection, expectedMatches) {
        var provider, selectItem, listModelReplaceAll, history, filteredListWidget, keyboardEvent;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    provider = createCommandMenuProvider(inputs);
                    selectItem = sinon.spy(provider, 'selectItem');
                    listModelReplaceAll = sinon.spy(_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ListModel.ListModel.prototype, 'replaceAll');
                    history = [];
                    filteredListWidget = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.FilteredListWidget.FilteredListWidget(provider, history, function() {
                        return undefined;
                    });
                    return [
                        4,
                        filteredListWidget.setQuery(query)
                    ];
                case 1:
                    _state.sent();
                    // FilteredListWidget.scheduleFilter uses setTimeout.
                    return [
                        4,
                        new Promise(function(resolve) {
                            return window.setTimeout(resolve, 0);
                        })
                    ];
                case 2:
                    _state.sent();
                    keyboardEvent = new KeyboardEvent('keydown', {
                        key: 'Enter'
                    });
                    filteredListWidget.contentElement.dispatchEvent(keyboardEvent);
                    assert.deepEqual([
                        query
                    ], history);
                    assert.strictEqual(1, selectItem.callCount);
                    assert.strictEqual(expectedSelection, selectItem.lastCall.args[0]);
                    assert.deepEqual(expectedMatches, listModelReplaceAll.lastCall.args[0]);
                    return [
                        2
                    ];
            }
        });
    });
    return _testMatch.apply(this, arguments);
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithLocale)('FilteredListWidget', function() {
    beforeEach(function() {
        sinon.reset();
    });
    it('set query to select item and type Enter', /*#__PURE__*/ _async_to_generator(function() {
        var provider, selectItem, callCount;
        function testSetting(query, expectation) {
            return _testSetting.apply(this, arguments);
        }
        function _testSetting() {
            _testSetting = _async_to_generator(function(query, expectation) {
                var filteredListWidget, keyboardEvent;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            filteredListWidget = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.FilteredListWidget.FilteredListWidget(provider, [], function() {
                                return undefined;
                            });
                            return [
                                4,
                                filteredListWidget.setQuery(query)
                            ];
                        case 1:
                            _state.sent();
                            // FilteredListWidget.scheduleFilter uses setTimeout.
                            return [
                                4,
                                new Promise(function(resolve) {
                                    return window.setTimeout(resolve, 0);
                                })
                            ];
                        case 2:
                            _state.sent();
                            keyboardEvent = new KeyboardEvent('keydown', {
                                key: 'Enter'
                            });
                            filteredListWidget.contentElement.dispatchEvent(keyboardEvent);
                            assert.strictEqual(++callCount, selectItem.callCount);
                            assert.strictEqual(expectation, selectItem.lastCall.args[0]);
                            return [
                                2
                            ];
                    }
                });
            });
            return _testSetting.apply(this, arguments);
        }
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    provider = createCommandMenuProvider([
                        'first setting',
                        'second setting',
                        'third setting'
                    ]);
                    selectItem = sinon.spy(provider, 'selectItem');
                    callCount = 0;
                    return [
                        4,
                        testSetting('third', 2)
                    ];
                case 1:
                    _state.sent();
                    return [
                        4,
                        testSetting('second', 1)
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        testSetting('first', 0)
                    ];
                case 3:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('type Enter when no item has been selected', function() {
        var provider = createCommandMenuProvider([
            'setting a',
            'setting b',
            'setting c'
        ]);
        var selectItem = sinon.spy(provider, 'selectItem');
        var filteredListWidget = new _quick_open_js__WEBPACK_IMPORTED_MODULE_4__.FilteredListWidget.FilteredListWidget(provider, [], function() {
            return undefined;
        });
        var keyboardEvent = new KeyboardEvent('keydown', {
            key: 'Enter'
        });
        filteredListWidget.contentElement.dispatchEvent(keyboardEvent);
        assert.isTrue(selectItem.notCalled);
    });
    it('empty query matches everything', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testMatch([
                            'a',
                            'bc'
                        ], '', 0, [
                            0,
                            1
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
    it('case-insensitive matching: upper case', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testMatch([
                            'abc',
                            'acB'
                        ], 'aB', 0, [
                            0,
                            1
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
    it('case-insensitive matching: lower case', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testMatch([
                            'abc',
                            'bac',
                            'a_B'
                        ], 'ab', 0, [
                            0,
                            2
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
    it('duplicate symbols in matching', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testMatch([
                            'abab',
                            'abaa',
                            'caab',
                            'baac',
                            'fooaab'
                        ], 'aab', 2, [
                            2,
                            4,
                            0
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
    it('ranking by score', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testMatch([
                            'fxxxoxxxo',
                            'barforo',
                            'foobar',
                            'fxoxoxo'
                        ], 'foo', 2, [
                            2,
                            1,
                            0,
                            3
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
    it('dangerous input escaping', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        testMatch([
                            '^[]{}()\\.$*+?|',
                            '0123456789abcdef'
                        ], '^[]{}()\\.$*+?|', 0, [
                            0
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
}); //# sourceMappingURL=FilteredListWidget.test.js.map


}),

}]);