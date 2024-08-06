"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_webauthn_WebauthnPane_test_js"], {
"./panels/webauthn/WebauthnPane.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
// Copyright (c) 2022 The Chromium Authors. All rights reserved.
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



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('WebAuthn pane', function() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var Webauthn;
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(/*! import() */ [__webpack_require__.e("panels_webauthn_WebauthnPane_js"), __webpack_require__.e("panels_webauthn_webauthn_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./webauthn.js */ "./panels/webauthn/webauthn.js"))
                    ];
                case 1:
                    Webauthn = _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    it('disables the large blob checkbox if resident key is disabled', function() {
        var panel = new Webauthn.WebauthnPane.WebauthnPaneImpl();
        var largeBlob = panel.largeBlobCheckbox;
        var residentKeys = panel.residentKeyCheckbox;
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
    var tests = function(inScope) {
        var target;
        var model;
        var panel;
        beforeEach(function() {
            var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
            });
            (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                parentTarget: tabTarget,
                subtype: 'prerender'
            });
            target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
                parentTarget: tabTarget
            });
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.WebAuthnModel.WebAuthnModel);
            assert.exists(model);
            panel = new Webauthn.WebauthnPane.WebauthnPaneImpl();
        });
        it('adds an authenticator with large blob option', /*#__PURE__*/ _async_to_generator(function() {
            var _panel_addAuthenticatorButton, largeBlob, residentKeys, addAuthenticator, options;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        largeBlob = panel.largeBlobCheckbox;
                        residentKeys = panel.residentKeyCheckbox;
                        if (!largeBlob || !residentKeys) {
                            assert.fail('Required checkbox not found');
                            return [
                                2
                            ];
                        }
                        residentKeys.checked = true;
                        largeBlob.checked = true;
                        addAuthenticator = sinon.stub(model, 'addAuthenticator');
                        (_panel_addAuthenticatorButton = panel.addAuthenticatorButton) === null || _panel_addAuthenticatorButton === void 0 ? void 0 : _panel_addAuthenticatorButton.click();
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(addAuthenticator.called, inScope);
                        if (inScope) {
                            options = addAuthenticator.firstCall.firstArg;
                            assert.isTrue(options.hasLargeBlob);
                            assert.isTrue(options.hasResidentKey);
                        }
                        return [
                            2
                        ];
                }
            });
        }));
        it('adds an authenticator without the large blob option', /*#__PURE__*/ _async_to_generator(function() {
            var _panel_addAuthenticatorButton, largeBlob, residentKeys, addAuthenticator, options;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        largeBlob = panel.largeBlobCheckbox;
                        residentKeys = panel.residentKeyCheckbox;
                        if (!largeBlob || !residentKeys) {
                            assert.fail('Required checkbox not found');
                            return [
                                2
                            ];
                        }
                        residentKeys.checked = true;
                        largeBlob.checked = false;
                        addAuthenticator = sinon.stub(model, 'addAuthenticator');
                        (_panel_addAuthenticatorButton = panel.addAuthenticatorButton) === null || _panel_addAuthenticatorButton === void 0 ? void 0 : _panel_addAuthenticatorButton.click();
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(addAuthenticator.called, inScope);
                        if (inScope) {
                            options = addAuthenticator.firstCall.firstArg;
                            assert.isFalse(options.hasLargeBlob);
                            assert.isTrue(options.hasResidentKey);
                        }
                        return [
                            2
                        ];
                }
            });
        }));
        it('lists and removes credentials', /*#__PURE__*/ _async_to_generator(function() {
            var _panel_addAuthenticatorButton, authenticatorId, addAuthenticator, dataGrid, emptyNode, credential, credentialNode, removeCredential;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        authenticatorId = 'authenticator-1';
                        // Add an authenticator.
                        addAuthenticator = sinon.stub(model, 'addAuthenticator').resolves(authenticatorId);
                        (_panel_addAuthenticatorButton = panel.addAuthenticatorButton) === null || _panel_addAuthenticatorButton === void 0 ? void 0 : _panel_addAuthenticatorButton.click();
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(addAuthenticator.called, inScope);
                        if (!inScope) {
                            return [
                                2
                            ];
                        }
                        // Verify a data grid appeared with a single row to show there is no data.
                        dataGrid = panel.dataGrids.get(authenticatorId);
                        if (!dataGrid) {
                            assert.fail('Expected dataGrid to be truthy');
                            return [
                                2
                            ];
                        }
                        assert.strictEqual(dataGrid.rootNode().children.length, 1);
                        emptyNode = dataGrid.rootNode().children[0];
                        assert.isOk(emptyNode);
                        assert.deepEqual(emptyNode.data, {});
                        // Add a credential.
                        credential = {
                            credentialId: 'credential',
                            isResidentCredential: false,
                            rpId: 'talos1.org',
                            userHandle: 'morgan',
                            signCount: 1,
                            privateKey: ''
                        };
                        model.dispatchEventToListeners("CredentialAdded" /* SDK.WebAuthnModel.Events.CredentialAdded */ , {
                            authenticatorId: authenticatorId,
                            credential: credential
                        });
                        // Verify the credential appeared and the empty row was removed.
                        assert.strictEqual(dataGrid.rootNode().children.length, 1);
                        credentialNode = dataGrid.rootNode().children[0];
                        assert.isOk(credentialNode);
                        assert.strictEqual(credentialNode.data, credential);
                        // Remove the credential.
                        removeCredential = sinon.stub(model, 'removeCredential').resolves();
                        dataGrid.element.querySelectorAll('devtools-button')[1].click();
                        assert.strictEqual(dataGrid.rootNode().children.length, 1);
                        emptyNode = dataGrid.rootNode().children[0];
                        assert.isOk(emptyNode);
                        assert.deepEqual(emptyNode.data, {});
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 2:
                        _state.sent();
                        assert.isTrue(removeCredential.called);
                        assert.strictEqual(removeCredential.firstCall.firstArg, authenticatorId);
                        assert.strictEqual(removeCredential.firstCall.lastArg, credential.credentialId);
                        return [
                            2
                        ];
                }
            });
        }));
        it('updates credentials', /*#__PURE__*/ _async_to_generator(function() {
            var _panel_addAuthenticatorButton, authenticatorId, addAuthenticator, credential, dataGrid, credentialNode, updatedCredential, anotherCredential;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        authenticatorId = 'authenticator-1';
                        // Add an authenticator.
                        addAuthenticator = sinon.stub(model, 'addAuthenticator').resolves(authenticatorId);
                        (_panel_addAuthenticatorButton = panel.addAuthenticatorButton) === null || _panel_addAuthenticatorButton === void 0 ? void 0 : _panel_addAuthenticatorButton.click();
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        assert.strictEqual(addAuthenticator.called, inScope);
                        if (!inScope) {
                            return [
                                2
                            ];
                        }
                        // Add a credential.
                        credential = {
                            credentialId: 'credential',
                            isResidentCredential: false,
                            rpId: 'talos1.org',
                            userHandle: 'morgan',
                            signCount: 1,
                            privateKey: ''
                        };
                        model.dispatchEventToListeners("CredentialAdded" /* SDK.WebAuthnModel.Events.CredentialAdded */ , {
                            authenticatorId: authenticatorId,
                            credential: credential
                        });
                        // Verify the credential appeared.
                        dataGrid = panel.dataGrids.get(authenticatorId);
                        if (!dataGrid) {
                            assert.fail('Expected dataGrid to be truthy');
                            return [
                                2
                            ];
                        }
                        assert.strictEqual(dataGrid.rootNode().children.length, 1);
                        credentialNode = dataGrid.rootNode().children[0];
                        assert.isOk(credentialNode);
                        assert.strictEqual(credentialNode.data, credential);
                        // Update the credential.
                        updatedCredential = {
                            credentialId: 'credential',
                            isResidentCredential: false,
                            rpId: 'talos1.org',
                            userHandle: 'morgan',
                            signCount: 2,
                            privateKey: ''
                        };
                        model.dispatchEventToListeners("CredentialAsserted" /* SDK.WebAuthnModel.Events.CredentialAsserted */ , {
                            authenticatorId: authenticatorId,
                            credential: updatedCredential
                        });
                        // Verify the credential was updated.
                        assert.strictEqual(dataGrid.rootNode().children.length, 1);
                        assert.strictEqual(credentialNode.data, updatedCredential);
                        // Updating a different credential should not affect the existing one.
                        anotherCredential = {
                            credentialId: 'another-credential',
                            isResidentCredential: false,
                            rpId: 'talos1.org',
                            userHandle: 'alex',
                            signCount: 1,
                            privateKey: ''
                        };
                        model.dispatchEventToListeners("CredentialAsserted" /* SDK.WebAuthnModel.Events.CredentialAsserted */ , {
                            authenticatorId: authenticatorId,
                            credential: anotherCredential
                        });
                        // Verify the credential was unchanged.
                        assert.strictEqual(dataGrid.rootNode().children.length, 1);
                        assert.strictEqual(credentialNode.data, updatedCredential);
                        return [
                            2
                        ];
                }
            });
        }));
    };
    describe('in scope', function() {
        return tests(true);
    });
    describe('out of scope', function() {
        return tests(false);
    });
}); //# sourceMappingURL=WebauthnPane.test.js.map


}),

}]);