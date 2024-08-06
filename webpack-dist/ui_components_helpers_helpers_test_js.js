"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_helpers_helpers_test_js"],{

/***/ "./ui/components/helpers/helpers.test.js":
/*!***********************************************!*\
  !*** ./ui/components/helpers/helpers.test.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */ var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./ui/components/helpers/helpers.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_1__.RenderCoordinator.RenderCoordinator.instance();
const TestElement = class extends HTMLElement {
    renderCount = 0;
    renderAsyncCount = 0;
    renderBound = this.#render.bind(this);
    renderAsyncBound = this.#renderAsync.bind(this);
    #render() {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.isScheduledRender(this)) {
            throw new Error('Render is not scheduled');
        }
        this.renderCount++;
    }
    #renderAsync() {
        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_2__.ScheduledRender.isScheduledRender(this)) {
            throw new Error('Render is not scheduled');
        }
        return new Promise(resolve => {
            setTimeout(() => {
                this.renderAsyncCount++;
                resolve();
            }, 40);
        });
    }
};
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
//# sourceMappingURL=helpers.test.js.map

/***/ })

}]);