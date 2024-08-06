"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_autofill_manager_AutofillManager_test_js"], {
"./models/autofill_manager/AutofillManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _autofill_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autofill_manager.js */ "./models/autofill_manager/autofill_manager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('AutofillManager', function() {
    var target;
    var model;
    var autofillManager;
    var showViewStub;
    beforeEach(function() {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.AutofillModel.AutofillModel);
        showViewStub = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance(), 'showView').resolves();
        autofillManager = _autofill_manager_js__WEBPACK_IMPORTED_MODULE_5__.AutofillManager.AutofillManager.instance({
            forceNew: true
        });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.enableForTest("autofill-view" /* Root.Runtime.ExperimentName.AUTOFILL_VIEW */ );
    });
    afterEach(function() {
        showViewStub.restore();
    });
    describe('emits AddressFormFilled events', function() {
        var assertAutofillManagerEvent = function() {
            var _ref = _async_to_generator(function(inEvent, outEvent) {
                var dispatchedAutofillEvents;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            dispatchedAutofillEvents = [];
                            autofillManager.addEventListener("AddressFormFilled" /* AutofillManager.AutofillManager.Events.AddressFormFilled */ , function(event) {
                                return dispatchedAutofillEvents.push(event.data);
                            });
                            model.dispatchEventToListeners("AddressFormFilled" /* SDK.AutofillModel.Events.AddressFormFilled */ , {
                                autofillModel: model,
                                event: inEvent
                            });
                            return [
                                4,
                                new Promise(function(resolve) {
                                    return setTimeout(resolve, 0);
                                })
                            ];
                        case 1:
                            _state.sent();
                            assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
                            assert.deepStrictEqual(dispatchedAutofillEvents, [
                                outEvent
                            ]);
                            return [
                                2
                            ];
                    }
                });
            });
            return function assertAutofillManagerEvent(inEvent, outEvent) {
                return _ref.apply(this, arguments);
            };
        }();
        it('with a single match', /*#__PURE__*/ _async_to_generator(function() {
            var filledFields, inEvent, outEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        filledFields = [
                            {
                                htmlType: 'text',
                                id: 'input1',
                                name: '',
                                value: 'Crocodile',
                                autofillType: 'First name',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 1,
                                frameId: '1'
                            }
                        ];
                        inEvent = {
                            addressUi: {
                                addressFields: [
                                    {
                                        fields: [
                                            {
                                                name: 'NAME_FULL',
                                                value: 'Crocodile Dundee'
                                            }
                                        ]
                                    }
                                ]
                            },
                            filledFields: filledFields
                        };
                        outEvent = {
                            address: 'Crocodile Dundee',
                            filledFields: filledFields,
                            matches: [
                                {
                                    startIndex: 0,
                                    endIndex: 9,
                                    filledFieldIndex: 0
                                }
                            ],
                            autofillModel: model
                        };
                        return [
                            4,
                            assertAutofillManagerEvent(inEvent, outEvent)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('with multiple matches', /*#__PURE__*/ _async_to_generator(function() {
            var filledFields, inEvent, outEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        filledFields = [
                            {
                                htmlType: 'text',
                                id: 'input1',
                                name: '',
                                value: 'Crocodile',
                                autofillType: 'First name',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 1,
                                frameId: '1'
                            },
                            {
                                htmlType: 'text',
                                id: 'input2',
                                name: '',
                                value: 'Dundee',
                                autofillType: 'Last name',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 2,
                                frameId: '1'
                            }
                        ];
                        inEvent = {
                            addressUi: {
                                addressFields: [
                                    {
                                        fields: [
                                            {
                                                name: 'NAME_FULL',
                                                value: 'Crocodile Dundee'
                                            }
                                        ]
                                    }
                                ]
                            },
                            filledFields: filledFields
                        };
                        outEvent = {
                            address: 'Crocodile Dundee',
                            filledFields: filledFields,
                            matches: [
                                {
                                    startIndex: 0,
                                    endIndex: 9,
                                    filledFieldIndex: 0
                                },
                                {
                                    startIndex: 10,
                                    endIndex: 16,
                                    filledFieldIndex: 1
                                }
                            ],
                            autofillModel: model
                        };
                        return [
                            4,
                            assertAutofillManagerEvent(inEvent, outEvent)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('with new line characters and commas', /*#__PURE__*/ _async_to_generator(function() {
            var filledFields, inEvent, outEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        filledFields = [
                            {
                                htmlType: 'text',
                                id: 'input1',
                                name: '',
                                value: 'Outback Road 1, Melbourne',
                                autofillType: 'Street address',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 1,
                                frameId: '1'
                            }
                        ];
                        inEvent = {
                            addressUi: {
                                addressFields: [
                                    {
                                        fields: [
                                            {
                                                name: 'ADDRESS_HOME_STREET_ADDRESS',
                                                value: 'Outback Road 1\nMelbourne'
                                            }
                                        ]
                                    }
                                ]
                            },
                            filledFields: filledFields
                        };
                        outEvent = {
                            address: 'Outback Road 1\nMelbourne',
                            filledFields: filledFields,
                            matches: [
                                {
                                    startIndex: 0,
                                    endIndex: 24,
                                    filledFieldIndex: 0
                                }
                            ],
                            autofillModel: model
                        };
                        return [
                            4,
                            assertAutofillManagerEvent(inEvent, outEvent)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('with a comma in the address', /*#__PURE__*/ _async_to_generator(function() {
            var filledFields, inEvent, outEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        filledFields = [
                            {
                                htmlType: 'text',
                                id: 'input1',
                                name: '',
                                value: 'Outback Road 1, Melbourne',
                                autofillType: 'Street address',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 1,
                                frameId: '1'
                            }
                        ];
                        inEvent = {
                            addressUi: {
                                addressFields: [
                                    {
                                        fields: [
                                            {
                                                name: 'ADDRESS_HOME_STREET_ADDRESS',
                                                value: 'Outback Road 1, Melbourne'
                                            }
                                        ]
                                    }
                                ]
                            },
                            filledFields: filledFields
                        };
                        outEvent = {
                            address: 'Outback Road 1, Melbourne',
                            filledFields: filledFields,
                            matches: [
                                {
                                    startIndex: 0,
                                    endIndex: 25,
                                    filledFieldIndex: 0
                                }
                            ],
                            autofillModel: model
                        };
                        return [
                            4,
                            assertAutofillManagerEvent(inEvent, outEvent)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('for phone numbers starting with "+"', /*#__PURE__*/ _async_to_generator(function() {
            var filledFields, inEvent, outEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        filledFields = [
                            {
                                htmlType: 'text',
                                id: 'input1',
                                name: 'phone',
                                value: '+1234567890',
                                autofillType: 'Phone number',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 1,
                                frameId: '1'
                            }
                        ];
                        inEvent = {
                            addressUi: {
                                addressFields: [
                                    {
                                        fields: [
                                            {
                                                name: 'PHONE_HOME_WHOLE_NUMBER',
                                                value: '+1234567890'
                                            }
                                        ]
                                    }
                                ]
                            },
                            filledFields: filledFields
                        };
                        outEvent = {
                            address: '+1234567890',
                            filledFields: filledFields,
                            matches: [
                                {
                                    startIndex: 0,
                                    endIndex: 11,
                                    filledFieldIndex: 0
                                }
                            ],
                            autofillModel: model
                        };
                        return [
                            4,
                            assertAutofillManagerEvent(inEvent, outEvent)
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('with an empty string as filled field value', /*#__PURE__*/ _async_to_generator(function() {
            var filledFields, inEvent, outEvent;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        filledFields = [
                            {
                                htmlType: 'text',
                                id: 'input1',
                                name: 'name',
                                value: 'Crocodile',
                                autofillType: 'First name',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 1,
                                frameId: '1'
                            },
                            {
                                htmlType: 'text',
                                id: 'input2',
                                name: 'city',
                                value: '',
                                autofillType: 'City',
                                fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */ ,
                                fieldId: 2,
                                frameId: '1'
                            }
                        ];
                        inEvent = {
                            addressUi: {
                                addressFields: [
                                    {
                                        fields: [
                                            {
                                                name: 'NAME_FULL',
                                                value: 'Crocodile Dundee'
                                            }
                                        ]
                                    }
                                ]
                            },
                            filledFields: filledFields
                        };
                        outEvent = {
                            address: 'Crocodile Dundee',
                            filledFields: filledFields,
                            matches: [
                                {
                                    startIndex: 0,
                                    endIndex: 9,
                                    filledFieldIndex: 0
                                }
                            ],
                            autofillModel: model
                        };
                        return [
                            4,
                            assertAutofillManagerEvent(inEvent, outEvent)
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
}); //# sourceMappingURL=AutofillManager.test.js.map


}),

}]);