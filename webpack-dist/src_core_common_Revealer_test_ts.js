"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_core_common_Revealer_test_ts"],{

/***/ "./src/core/common/Revealer.test.ts":
/*!******************************************!*\
  !*** ./src/core/common/Revealer.test.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./src/core/common/common.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Revealer', () => {
    const { registerRevealer, reveal, RevealerRegistry } = _common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer;
    class MockContextType {
    }
    class MockRevealer {
        async reveal(_revealable, _omitFocus) {
        }
    }
    const mockRegistration = {
        contextTypes() {
            return [MockContextType];
        },
        async loadRevealer() {
            return new MockRevealer();
        },
    };
    describe('RevealerRegistry', () => {
        describe('instance', () => {
            afterEach(() => {
                RevealerRegistry.removeInstance();
            });
            it('yields the singleton instance on subsequent calls', () => {
                const registry1 = RevealerRegistry.instance();
                const registry2 = RevealerRegistry.instance();
                assert.strictEqual(registry1, registry2, 'RevealerRegistry.instance() is supposed to return the same singleton on subsequent calls');
            });
        });
        describe('removeInstance', () => {
            it('clears the singleton instance correctly', () => {
                const registry1 = RevealerRegistry.instance();
                RevealerRegistry.removeInstance();
                const registry2 = RevealerRegistry.instance();
                assert.notStrictEqual(registry1, registry2, 'RevealerRegistry.removeInstance() is supposed to clear the singleton');
            });
        });
        describe('reveal', () => {
            it('raises an error if no revealers are registered', async () => {
                const registery = new RevealerRegistry();
                const spy = sinon.spy();
                await registery.reveal(new MockContextType(), false).catch(spy);
                assert.isTrue(spy.calledOnce, 'RevealerRegistry.reveal() is supposed to raise an error when no revealer is found');
            });
            it('raises an error if conflicting revealers are registered', async () => {
                const registery = new RevealerRegistry();
                registery.register(mockRegistration);
                registery.register(mockRegistration);
                const spy = sinon.spy();
                await registery.reveal(new MockContextType(), false).catch(spy);
                assert.isTrue(spy.calledOnce, 'RevealerRegistry.reveal() is supposed to raise an error when conflicting revealer are found');
            });
            it('calls the `reveal` method on the registered `Revealer` exactly once', async () => {
                const registery = new RevealerRegistry();
                registery.register(mockRegistration);
                const revealStub = sinon.stub(MockRevealer.prototype, 'reveal');
                const mockRevealable = new MockContextType();
                await registery.reveal(mockRevealable, false);
                sinon.assert.calledOnceWithExactly(revealStub, mockRevealable, false);
            });
        });
    });
    describe('registerRevealer', () => {
        it('calls the `register` method on the registry', async () => {
            const registerStub = sinon.stub(RevealerRegistry.prototype, 'register');
            registerRevealer(mockRegistration);
            sinon.assert.calledOnceWithExactly(registerStub, mockRegistration);
        });
    });
    describe('reveal', () => {
        const revealable = { foo: 'bar' };
        it('calls the `reveal` method on the registry', async () => {
            const revealStub = sinon.stub(RevealerRegistry.prototype, 'reveal');
            await reveal(revealable, true);
            sinon.assert.calledOnceWithExactly(revealStub, revealable, true);
        });
        it('defaults to not omitting focus', async () => {
            const revealStub = sinon.stub(RevealerRegistry.prototype, 'reveal');
            await reveal(revealable);
            sinon.assert.calledOnceWithExactly(revealStub, revealable, false);
        });
    });
});


/***/ })

}]);