"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_components_helpers_helpers_test_ts"],{

/***/ "./src/ui/components/helpers/helpers.test.ts":
/*!***************************************************!*\
  !*** ./src/ui/components/helpers/helpers.test.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./src/ui/components/helpers/helpers.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _instances, _render, _renderAsync, _a;



const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const TestElement = (_a = class extends HTMLElement {
        constructor() {
            super(...arguments);
            _instances.add(this);
            Object.defineProperty(this, "renderCount", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 0
            });
            Object.defineProperty(this, "renderAsyncCount", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 0
            });
            Object.defineProperty(this, "renderBound", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: __classPrivateFieldGet(this, _instances, "m", _render).bind(this)
            });
            Object.defineProperty(this, "renderAsyncBound", {
                enumerable: true,
                configurable: true,
                writable: true,
                value: __classPrivateFieldGet(this, _instances, "m", _renderAsync).bind(this)
            });
        }
    },
    _instances = new WeakSet(),
    _render = function _render() {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.isScheduledRender(this)) {
            throw new Error('Render is not scheduled');
        }
        this.renderCount++;
    },
    _renderAsync = function _renderAsync() {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.isScheduledRender(this)) {
            throw new Error('Render is not scheduled');
        }
        return new Promise(resolve => {
            setTimeout(() => {
                this.renderAsyncCount++;
                resolve();
            }, 40);
        });
    },
    _a);
customElements.define('x-devtools-test-element', TestElement);
describe('ComponentHelpers', () => {
    describe('Directives', () => {
        describe('nodeRenderedCallback', () => {
            it('runs when any node is rendered', () => {
                const targetDiv = document.createElement('div');
                const callback = sinon.spy();
                function fakeComponentRender() {
                    // clang-format off
                    const html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
          <span on-render=${_helpers_js__WEBPACK_IMPORTED_MODULE_2__.Directives.nodeRenderedCallback(callback)}>
           hello world
          </span>`;
                    // clang-format on
                    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, targetDiv, { host: this });
                }
                fakeComponentRender.call(targetDiv);
                assert.isNotEmpty(targetDiv.innerHTML);
                assert.strictEqual(callback.callCount, 1);
            });
            it('runs again when Lit re-renders', () => {
                const targetDiv = document.createElement('div');
                const callback = sinon.spy();
                function fakeComponentRender(output) {
                    // clang-format off
                    const html = _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.html `
          <span on-render=${_helpers_js__WEBPACK_IMPORTED_MODULE_2__.Directives.nodeRenderedCallback(callback)}>
           ${output}
          </span>`;
                    // clang-format on
                    _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.render(html, targetDiv, { host: this });
                }
                fakeComponentRender.call(targetDiv, 'render one');
                assert.strictEqual(callback.callCount, 1);
                fakeComponentRender.call(targetDiv, 'render two');
                assert.strictEqual(callback.callCount, 2);
            });
        });
    });
    describe('scheduleRender', () => {
        it('throws if renders are unscheduled', () => {
            const element = new TestElement();
            assert.throws(() => {
                element.renderBound();
            }, 'Render is not scheduled');
        });
        it('only renders once if second render call is made before the first has been handled', async () => {
            const element = new TestElement();
            void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderBound);
            void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderBound);
            await coordinator.done();
            assert.strictEqual(element.renderCount, 1);
        });
        it('handles async callbacks', async () => {
            const element = new TestElement();
            void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, async () => {
                void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderAsyncBound);
                await element.renderAsyncBound();
            });
            await coordinator.done();
            assert.strictEqual(element.renderAsyncCount, 2);
        });
        it('re-renders if second render call is made during the first', async () => {
            const element = new TestElement();
            void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, () => {
                void _helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.scheduleRender(element, element.renderBound);
                element.renderBound();
            });
            await coordinator.done();
            assert.strictEqual(element.renderCount, 2);
        });
    });
});


/***/ })

}]);