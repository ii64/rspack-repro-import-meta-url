"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_webauthn_WebauthnPane_test_js"],{

/***/ "./panels/webauthn/WebauthnPane.test.js":
/*!**********************************************!*\
  !*** ./panels/webauthn/WebauthnPane.test.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('WebAuthn pane', () => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    let Webauthn;
    before(async () => {
        Webauthn = await Promise.all(/*! import() */[__webpack_require__.e("panels_webauthn_WebauthnPane_js"), __webpack_require__.e("panels_webauthn_webauthn_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webauthn.js */ "./panels/webauthn/webauthn.js"));
    });
    it('disables the large blob checkbox if resident key is disabled', () => {
        const panel = new Webauthn.WebauthnPane.WebauthnPaneImpl();
        const largeBlob = panel.largeBlobCheckbox;
        const residentKeys = panel.residentKeyCheckbox;
        if (!largeBlob || !residentKeys) {
            assert.fail('Required checkbox not found');
            return;
        }
        // Make sure resident keys is disabled. Large blob should be disabled and
        // unchecked.
        residentKeys.checked = false;
        residentKeys.dispatchEvent(new Event('change'));
        assert.isTrue(largeBlob.disabled);
        assert.isFalse(largeBlob.checked);
        // Enable resident keys. Large blob should be enabled but still not
        // checked.
        residentKeys.checked = true;
        residentKeys.dispatchEvent(new Event('change'));
        assert.isFalse(largeBlob.disabled);
        assert.isFalse(largeBlob.checked);
        // Manually check large blob.
        largeBlob.checked = true;
        assert.isTrue(largeBlob.checked);
        // Disabling resident keys should reset large blob to disabled and
        // unchecked.
        residentKeys.checked = false;
        residentKeys.dispatchEvent(new Event('change'));
        assert.isTrue(largeBlob.disabled);
        assert.isFalse(largeBlob.checked);
    });
    const tests = (inScope) => {
        let target;
        let model;
        let panel;
        beforeEach(() => {
            const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab });
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({ parentTarget: tabTarget });
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.WebAuthnModel.WebAuthnModel);
            assert.exists(model);
            panel = new Webauthn.WebauthnPane.WebauthnPaneImpl();
        });
        it('adds an authenticator with large blob option', async () => {
            const largeBlob = panel.largeBlobCheckbox;
            const residentKeys = panel.residentKeyCheckbox;
            if (!largeBlob || !residentKeys) {
                assert.fail('Required checkbox not found');
                return;
            }
            residentKeys.checked = true;
            largeBlob.checked = true;
            const addAuthenticator = sinon.stub(model, 'addAuthenticator');
            panel.addAuthenticatorButton?.click();
            await new Promise(resolve => setTimeout(resolve, 0));
            assert.strictEqual(addAuthenticator.called, inScope);
            if (inScope) {
                const options = addAuthenticator.firstCall.firstArg;
                assert.isTrue(options.hasLargeBlob);
                assert.isTrue(options.hasResidentKey);
            }
        });
        it('adds an authenticator without the large blob option', async () => {
            const largeBlob = panel.largeBlobCheckbox;
            const residentKeys = panel.residentKeyCheckbox;
            if (!largeBlob || !residentKeys) {
                assert.fail('Required checkbox not found');
                return;
            }
            residentKeys.checked = true;
            largeBlob.checked = false;
            const addAuthenticator = sinon.stub(model, 'addAuthenticator');
            panel.addAuthenticatorButton?.click();
            await new Promise(resolve => setTimeout(resolve, 0));
            assert.strictEqual(addAuthenticator.called, inScope);
            if (inScope) {
                const options = addAuthenticator.firstCall.firstArg;
                assert.isFalse(options.hasLargeBlob);
                assert.isTrue(options.hasResidentKey);
            }
        });
        it('lists and removes credentials', async () => {
            const authenticatorId = 'authenticator-1';
            // Add an authenticator.
            const addAuthenticator = sinon.stub(model, 'addAuthenticator').resolves(authenticatorId);
            panel.addAuthenticatorButton?.click();
            await new Promise(resolve => setTimeout(resolve, 0));
            assert.strictEqual(addAuthenticator.called, inScope);
            if (!inScope) {
                return;
            }
            // Verify a data grid appeared with a single row to show there is no data.
            const dataGrid = panel.dataGrids.get(authenticatorId);
            if (!dataGrid) {
                assert.fail('Expected dataGrid to be truthy');
                return;
            }
            assert.strictEqual(dataGrid.rootNode().children.length, 1);
            let emptyNode = dataGrid.rootNode().children[0];
            assert.isOk(emptyNode);
            assert.deepEqual(emptyNode.data, {});
            // Add a credential.
            const credential = {
                credentialId: 'credential',
                isResidentCredential: false,
                rpId: 'talos1.org',
                userHandle: 'morgan',
                signCount: 1,
                privateKey: '',
            };
            model.dispatchEventToListeners("CredentialAdded" /* SDK.WebAuthnModel.Events.CredentialAdded */, {
                authenticatorId,
                credential,
            });
            // Verify the credential appeared and the empty row was removed.
            assert.strictEqual(dataGrid.rootNode().children.length, 1);
            const credentialNode = dataGrid.rootNode().children[0];
            assert.isOk(credentialNode);
            assert.strictEqual(credentialNode.data, credential);
            // Remove the credential.
            const removeCredential = sinon.stub(model, 'removeCredential').resolves();
            dataGrid.element.querySelectorAll('devtools-button')[1].click();
            assert.strictEqual(dataGrid.rootNode().children.length, 1);
            emptyNode = dataGrid.rootNode().children[0];
            assert.isOk(emptyNode);
            assert.deepEqual(emptyNode.data, {});
            await new Promise(resolve => setTimeout(resolve, 0));
            assert.isTrue(removeCredential.called);
            assert.strictEqual(removeCredential.firstCall.firstArg, authenticatorId);
            assert.strictEqual(removeCredential.firstCall.lastArg, credential.credentialId);
        });
        it('updates credentials', async () => {
            const authenticatorId = 'authenticator-1';
            // Add an authenticator.
            const addAuthenticator = sinon.stub(model, 'addAuthenticator').resolves(authenticatorId);
            panel.addAuthenticatorButton?.click();
            await new Promise(resolve => setTimeout(resolve, 0));
            assert.strictEqual(addAuthenticator.called, inScope);
            if (!inScope) {
                return;
            }
            // Add a credential.
            const credential = {
                credentialId: 'credential',
                isResidentCredential: false,
                rpId: 'talos1.org',
                userHandle: 'morgan',
                signCount: 1,
                privateKey: '',
            };
            model.dispatchEventToListeners("CredentialAdded" /* SDK.WebAuthnModel.Events.CredentialAdded */, {
                authenticatorId,
                credential,
            });
            // Verify the credential appeared.
            const dataGrid = panel.dataGrids.get(authenticatorId);
            if (!dataGrid) {
                assert.fail('Expected dataGrid to be truthy');
                return;
            }
            assert.strictEqual(dataGrid.rootNode().children.length, 1);
            const credentialNode = dataGrid.rootNode().children[0];
            assert.isOk(credentialNode);
            assert.strictEqual(credentialNode.data, credential);
            // Update the credential.
            const updatedCredential = {
                credentialId: 'credential',
                isResidentCredential: false,
                rpId: 'talos1.org',
                userHandle: 'morgan',
                signCount: 2,
                privateKey: '',
            };
            model.dispatchEventToListeners("CredentialAsserted" /* SDK.WebAuthnModel.Events.CredentialAsserted */, {
                authenticatorId,
                credential: updatedCredential,
            });
            // Verify the credential was updated.
            assert.strictEqual(dataGrid.rootNode().children.length, 1);
            assert.strictEqual(credentialNode.data, updatedCredential);
            // Updating a different credential should not affect the existing one.
            const anotherCredential = {
                credentialId: 'another-credential',
                isResidentCredential: false,
                rpId: 'talos1.org',
                userHandle: 'alex',
                signCount: 1,
                privateKey: '',
            };
            model.dispatchEventToListeners("CredentialAsserted" /* SDK.WebAuthnModel.Events.CredentialAsserted */, {
                authenticatorId,
                credential: anotherCredential,
            });
            // Verify the credential was unchanged.
            assert.strictEqual(dataGrid.rootNode().children.length, 1);
            assert.strictEqual(credentialNode.data, updatedCredential);
        });
    };
    describe('in scope', () => tests(true));
    describe('out of scope', () => tests(false));
});
//# sourceMappingURL=WebauthnPane.test.js.map

/***/ })

}]);