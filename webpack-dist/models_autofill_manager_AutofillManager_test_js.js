"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_autofill_manager_AutofillManager_test_js"],{

/***/ "./models/autofill_manager/AutofillManager.test.js":
/*!*********************************************************!*\
  !*** ./models/autofill_manager/AutofillManager.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _autofill_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autofill_manager.js */ "./models/autofill_manager/autofill_manager.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('AutofillManager', () => {
    let target;
    let model;
    let autofillManager;
    let showViewStub;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.AutofillModel.AutofillModel);
        showViewStub = sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ViewManager.ViewManager.instance(), 'showView').resolves();
        autofillManager = _autofill_manager_js__WEBPACK_IMPORTED_MODULE_5__.AutofillManager.AutofillManager.instance({ forceNew: true });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.enableForTest("autofill-view" /* Root.Runtime.ExperimentName.AUTOFILL_VIEW */);
    });
    afterEach(() => {
        showViewStub.restore();
    });
    describe('emits AddressFormFilled events', () => {
        const assertAutofillManagerEvent = async (inEvent, outEvent) => {
            const dispatchedAutofillEvents = [];
            autofillManager.addEventListener("AddressFormFilled" /* AutofillManager.AutofillManager.Events.AddressFormFilled */, event => dispatchedAutofillEvents.push(event.data));
            model.dispatchEventToListeners("AddressFormFilled" /* SDK.AutofillModel.Events.AddressFormFilled */, { autofillModel: model, event: inEvent });
            await new Promise(resolve => setTimeout(resolve, 0));
            assert.isTrue(showViewStub.calledOnceWithExactly('autofill-view'));
            assert.deepStrictEqual(dispatchedAutofillEvents, [outEvent]);
        };
        it('with a single match', async () => {
            const filledFields = [
                {
                    htmlType: 'text',
                    id: 'input1',
                    name: '',
                    value: 'Crocodile',
                    autofillType: 'First name',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 1,
                    frameId: '1',
                },
            ];
            const inEvent = {
                addressUi: {
                    addressFields: [
                        {
                            fields: [
                                { name: 'NAME_FULL', value: 'Crocodile Dundee' },
                            ],
                        },
                    ],
                },
                filledFields,
            };
            const outEvent = {
                address: 'Crocodile Dundee',
                filledFields,
                matches: [{ startIndex: 0, endIndex: 9, filledFieldIndex: 0 }],
                autofillModel: model,
            };
            await assertAutofillManagerEvent(inEvent, outEvent);
        });
        it('with multiple matches', async () => {
            const filledFields = [
                {
                    htmlType: 'text',
                    id: 'input1',
                    name: '',
                    value: 'Crocodile',
                    autofillType: 'First name',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 1,
                    frameId: '1',
                },
                {
                    htmlType: 'text',
                    id: 'input2',
                    name: '',
                    value: 'Dundee',
                    autofillType: 'Last name',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 2,
                    frameId: '1',
                },
            ];
            const inEvent = {
                addressUi: {
                    addressFields: [
                        {
                            fields: [
                                { name: 'NAME_FULL', value: 'Crocodile Dundee' },
                            ],
                        },
                    ],
                },
                filledFields,
            };
            const outEvent = {
                address: 'Crocodile Dundee',
                filledFields,
                matches: [
                    { startIndex: 0, endIndex: 9, filledFieldIndex: 0 },
                    { startIndex: 10, endIndex: 16, filledFieldIndex: 1 },
                ],
                autofillModel: model,
            };
            await assertAutofillManagerEvent(inEvent, outEvent);
        });
        it('with new line characters and commas', async () => {
            const filledFields = [
                {
                    htmlType: 'text',
                    id: 'input1',
                    name: '',
                    value: 'Outback Road 1, Melbourne',
                    autofillType: 'Street address',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 1,
                    frameId: '1',
                },
            ];
            const inEvent = {
                addressUi: {
                    addressFields: [
                        {
                            fields: [
                                { name: 'ADDRESS_HOME_STREET_ADDRESS', value: 'Outback Road 1\nMelbourne' },
                            ],
                        },
                    ],
                },
                filledFields,
            };
            const outEvent = {
                address: 'Outback Road 1\nMelbourne',
                filledFields,
                matches: [{ startIndex: 0, endIndex: 24, filledFieldIndex: 0 }],
                autofillModel: model,
            };
            await assertAutofillManagerEvent(inEvent, outEvent);
        });
        it('with a comma in the address', async () => {
            const filledFields = [
                {
                    htmlType: 'text',
                    id: 'input1',
                    name: '',
                    value: 'Outback Road 1, Melbourne',
                    autofillType: 'Street address',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 1,
                    frameId: '1',
                },
            ];
            const inEvent = {
                addressUi: {
                    addressFields: [
                        {
                            fields: [
                                { name: 'ADDRESS_HOME_STREET_ADDRESS', value: 'Outback Road 1, Melbourne' },
                            ],
                        },
                    ],
                },
                filledFields,
            };
            const outEvent = {
                address: 'Outback Road 1, Melbourne',
                filledFields,
                matches: [{ startIndex: 0, endIndex: 25, filledFieldIndex: 0 }],
                autofillModel: model,
            };
            await assertAutofillManagerEvent(inEvent, outEvent);
        });
        it('for phone numbers starting with "+"', async () => {
            const filledFields = [
                {
                    htmlType: 'text',
                    id: 'input1',
                    name: 'phone',
                    value: '+1234567890',
                    autofillType: 'Phone number',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 1,
                    frameId: '1',
                },
            ];
            const inEvent = {
                addressUi: {
                    addressFields: [
                        {
                            fields: [
                                { name: 'PHONE_HOME_WHOLE_NUMBER', value: '+1234567890' },
                            ],
                        },
                    ],
                },
                filledFields,
            };
            const outEvent = {
                address: '+1234567890',
                filledFields,
                matches: [{ startIndex: 0, endIndex: 11, filledFieldIndex: 0 }],
                autofillModel: model,
            };
            await assertAutofillManagerEvent(inEvent, outEvent);
        });
        it('with an empty string as filled field value', async () => {
            const filledFields = [
                {
                    htmlType: 'text',
                    id: 'input1',
                    name: 'name',
                    value: 'Crocodile',
                    autofillType: 'First name',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 1,
                    frameId: '1',
                },
                {
                    htmlType: 'text',
                    id: 'input2',
                    name: 'city',
                    value: '',
                    autofillType: 'City',
                    fillingStrategy: "autofillInferred" /* Protocol.Autofill.FillingStrategy.AutofillInferred */,
                    fieldId: 2,
                    frameId: '1',
                },
            ];
            const inEvent = {
                addressUi: {
                    addressFields: [
                        {
                            fields: [
                                { name: 'NAME_FULL', value: 'Crocodile Dundee' },
                            ],
                        },
                    ],
                },
                filledFields,
            };
            const outEvent = {
                address: 'Crocodile Dundee',
                filledFields,
                matches: [{ startIndex: 0, endIndex: 9, filledFieldIndex: 0 }],
                autofillModel: model,
            };
            await assertAutofillManagerEvent(inEvent, outEvent);
        });
    });
});
//# sourceMappingURL=AutofillManager.test.js.map

/***/ })

}]);