"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_AutofillModel_test_js"],{

/***/ "./core/sdk/AutofillModel.test.js":
/*!****************************************!*\
  !*** ./core/sdk/AutofillModel.test.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('AutofillModel', () => {
    beforeEach(() => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.enableForTest("autofill-view" /* Root.Runtime.ExperimentName.AUTOFILL_VIEW */);
    });
    it('can enable and disable the Autofill CDP domain', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const autofillModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.AutofillModel.AutofillModel);
        const enableSpy = sinon.spy(autofillModel.agent, 'invoke_enable');
        const disableSpy = sinon.spy(autofillModel.agent, 'invoke_disable');
        assert.isTrue(enableSpy.notCalled);
        assert.isTrue(disableSpy.notCalled);
        autofillModel.disable();
        assert.isTrue(enableSpy.notCalled);
        assert.isTrue(disableSpy.calledOnce);
        disableSpy.resetHistory();
        autofillModel.enable();
        assert.isTrue(enableSpy.calledOnce);
        assert.isTrue(disableSpy.notCalled);
    });
    it('sets test addresses by calling the Autofill backend', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const autofillModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.AutofillModel.AutofillModel);
        const setAddressSpy = sinon.spy(autofillModel.agent, 'invoke_setAddresses');
        assert.isTrue(setAddressSpy.notCalled);
        autofillModel.disable();
        assert.isTrue(setAddressSpy.notCalled);
        autofillModel.enable();
        assert.isTrue(setAddressSpy.calledOnce);
    });
    it('dispatches addressFormFilledEvent on autofill event', () => {
        const target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
        const autofillModel = target.model(_sdk_js__WEBPACK_IMPORTED_MODULE_3__.AutofillModel.AutofillModel);
        const dispatchedEvents = [];
        autofillModel.addEventListener("AddressFormFilled" /* SDK.AutofillModel.Events.AddressFormFilled */, e => dispatchedEvents.push(e.data));
        const addressFormFilledEvent = {
            addressUi: {
                addressFields: [
                    {
                        fields: [
                            { name: 'NAME_FULL', value: 'Crocodile Dundee' },
                        ],
                    },
                ],
            },
            filledFields: [
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
            ],
        };
        autofillModel.addressFormFilled(addressFormFilledEvent);
        assert.lengthOf(dispatchedEvents, 1);
        assert.deepStrictEqual(dispatchedEvents[0].event, addressFormFilledEvent);
    });
});
//# sourceMappingURL=AutofillModel.test.js.map

/***/ })

}]);