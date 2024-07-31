"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_application_ServiceWorkersView_test_ts"],{

/***/ "./src/panels/application/ServiceWorkersView.test.ts":
/*!***********************************************************!*\
  !*** ./src/panels/application/ServiceWorkersView.test.ts ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _application_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application.js */ "./src/panels/application/application.ts");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_application_js__WEBPACK_IMPORTED_MODULE_4__]);
_application_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ServiceWorkersView', () => {
    let target;
    let view;
    beforeEach(() => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({ parentTarget: tabTarget });
    });
    afterEach(() => {
        view.detach();
    });
    it('shows service worker registrations', async () => {
        view = new _application_js__WEBPACK_IMPORTED_MODULE_4__.ServiceWorkersView.ServiceWorkersView();
        view.markAsRoot();
        view.show(document.body);
        const serviceWorkersManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerManager);
        assert.exists(serviceWorkersManager);
        const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
        assert.exists(securityOriginManager);
        const ORIGIN = 'example.com';
        sinon.stub(securityOriginManager, 'securityOrigins').returns([ORIGIN]);
        const SCOPE_URL = 'SCOPE_URL';
        serviceWorkersManager.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.Events.RegistrationUpdated, {
            scopeURL: SCOPE_URL,
            securityOrigin: ORIGIN,
            versionsByMode: () => new Map(),
            fingerprint: () => { },
        });
        const sectionTitle = view.currentWorkersView.contentElement.querySelector('.report-section-title');
        assert.exists(sectionTitle);
        assert.strictEqual(sectionTitle.textContent, SCOPE_URL);
    });
    describe('router info', () => {
        const registrationId = 'fake-sw-id';
        const origin = 'https://example.com';
        const routerRules = [
            {
                condition: { urlPattern: '/foo/bar' },
                source: ['network'],
                id: 1,
            },
            {
                condition: { urlPattern: '/baz' },
                source: ['fetch-event'],
                id: 2,
            },
        ];
        let serviceWorkersManager;
        const hasRouterField = () => {
            return Array.from(view.currentWorkersView.contentElement.querySelectorAll('.report-field')).some(field => {
                return field.querySelector('.report-field-name')?.textContent === 'Routers';
            });
        };
        beforeEach(() => {
            _application_js__WEBPACK_IMPORTED_MODULE_4__.ServiceWorkersView.setThrottleDisabledForDebugging(true);
            view = new _application_js__WEBPACK_IMPORTED_MODULE_4__.ServiceWorkersView.ServiceWorkersView();
            view.markAsRoot();
            view.show(document.body);
            serviceWorkersManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerManager);
            assert.exists(serviceWorkersManager);
            const securityOriginManager = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SecurityOriginManager.SecurityOriginManager);
            assert.exists(securityOriginManager);
            sinon.stub(securityOriginManager, 'securityOrigins').returns([origin]);
        });
        it('shows the router field if active version has at least one router rule', async () => {
            const payload = { registrationId, scopeURL: origin, isDeleted: false };
            const registration = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(payload);
            const versionId = 1;
            const versionPayload = {
                registrationId,
                versionId: versionId.toString(),
                scriptURL: '',
                status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Activated,
                runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
                routerRules: JSON.stringify(routerRules),
            };
            registration.updateVersion(versionPayload);
            serviceWorkersManager?.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.Events.RegistrationUpdated, registration);
            assert.isTrue(hasRouterField());
        });
        it('does not show the router field if active version does not have router rules', async () => {
            const payload = { registrationId, scopeURL: origin, isDeleted: false };
            const registration = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(payload);
            let versionId = 1;
            const versionPayload = {
                registrationId,
                versionId: versionId.toString(),
                scriptURL: '',
                status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Activated,
                runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Running,
            };
            registration.updateVersion(versionPayload);
            serviceWorkersManager?.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.Events.RegistrationUpdated, registration);
            assert.isFalse(hasRouterField());
            // Update the version with the empty router rules.
            versionId++;
            registration.updateVersion(Object.assign({}, versionPayload, {
                versionId: versionId.toString(),
                routerRules: JSON.stringify([]),
            }));
            registration.updateVersion(versionPayload);
            serviceWorkersManager?.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.Events.RegistrationUpdated, registration);
            assert.isFalse(hasRouterField());
        });
        it('does not show the router field if there is no active version', async () => {
            const payload = { registrationId, scopeURL: origin, isDeleted: false };
            const registration = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(payload);
            let versionId = 0;
            const versionPayload = {
                registrationId,
                versionId: versionId.toString(),
                scriptURL: '',
                status: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.New,
                runningStatus: _generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionRunningStatus.Starting,
                routerRules: JSON.stringify(routerRules),
            };
            const updateAndDispatchEvent = (status) => {
                versionId++;
                registration.updateVersion(Object.assign({}, versionPayload, { versionId: versionId.toString(), status }));
                serviceWorkersManager?.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.Events.RegistrationUpdated, registration);
            };
            updateAndDispatchEvent(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.New);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Redundant);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Installing);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Installed);
            assert.isFalse(hasRouterField());
            updateAndDispatchEvent(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Activating);
            assert.isTrue(hasRouterField());
            updateAndDispatchEvent(_generated_protocol_js__WEBPACK_IMPORTED_MODULE_1__.ServiceWorker.ServiceWorkerVersionStatus.Activated);
            assert.isTrue(hasRouterField());
        });
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);