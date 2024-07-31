"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_components_LayoutPane_test_ts"],{

/***/ "./src/panels/elements/components/LayoutPane.test.ts":
/*!***********************************************************!*\
  !*** ./src/panels/elements/components/LayoutPane.test.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./src/testing/DOMHelpers.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./src/ui/components/render_coordinator/render_coordinator.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components.js */ "./src/panels/elements/components/components.ts");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







const coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_5__.RenderCoordinator.RenderCoordinator.instance();
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('LayoutPane', () => {
    let target;
    let domModel;
    let overlayModel;
    let getNodesByStyle;
    beforeEach(() => {
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)();
        domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(domModel);
        getNodesByStyle = sinon.stub(domModel, 'getNodesByStyle').resolves([]);
        overlayModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.OverlayModel);
        assert.exists(overlayModel);
    });
    async function renderComponent() {
        const component = new _components_js__WEBPACK_IMPORTED_MODULE_6__.LayoutPane.LayoutPane();
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.renderElementIntoDOM)(component);
        component.wasShown();
        await coordinator.done({ waitForWork: true });
        return component;
    }
    function queryLabels(component, selector) {
        assert.isNotNull(component.shadowRoot);
        return Array.from(component.shadowRoot.querySelectorAll(selector)).map(label => {
            const input = label.querySelector('[data-input]');
            assert.instanceOf(input, HTMLElement);
            return {
                label: label.getAttribute('title'),
                input: input.tagName,
            };
        });
    }
    it('renders settings', async () => {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-grid-line-labels').setTitle('Enum setting title');
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-grid-track-sizes').setTitle('Boolean setting title');
        const component = await renderComponent();
        assert.deepEqual(queryLabels(component, '[data-enum-setting]'), [{ label: 'Enum setting title', input: 'SELECT' }]);
        assert.deepEqual(queryLabels(component, '[data-boolean-setting]'), [{ label: 'Boolean setting title', input: 'INPUT' }, { label: '', input: 'INPUT' }, { label: '', input: 'INPUT' }]);
    });
    it('stores a setting when changed', async () => {
        const component = await renderComponent();
        assert.isNotNull(component.shadowRoot);
        assert.isTrue(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-grid-track-sizes').get());
        const input = component.shadowRoot.querySelector('[data-boolean-setting] [data-input]');
        assert.instanceOf(input, HTMLInputElement);
        input.click();
        assert.isFalse(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-grid-track-sizes').get());
    });
    function makeNode(id) {
        return {
            id,
            path: () => 'body > div',
            ancestorUserAgentShadowRoot: () => false,
            localName: () => 'div',
            getAttribute: () => '',
            scrollIntoView: () => { },
            highlight: () => { },
            domModel: () => domModel,
        };
    }
    const ID_1 = 1;
    const ID_2 = 2;
    const ID_3 = 3;
    it('renders grid elements', async () => {
        getNodesByStyle.withArgs([{ name: 'display', value: 'grid' }, { name: 'display', value: 'inline-grid' }]).resolves([
            ID_1,
            ID_2,
            ID_3,
        ]);
        sinon.stub(domModel, 'nodeForId')
            .withArgs(ID_1)
            .returns(makeNode(ID_1))
            .withArgs(ID_2)
            .returns(makeNode(ID_2))
            .withArgs(ID_3)
            .returns(makeNode(ID_2));
        const component = await renderComponent();
        assert.isNotNull(component.shadowRoot);
        assert.strictEqual(queryLabels(component, '[data-element]').length, 3);
    });
    it('renders flex elements', async () => {
        getNodesByStyle.withArgs([{ name: 'display', value: 'flex' }, { name: 'display', value: 'inline-flex' }]).resolves([
            ID_1,
            ID_2,
            ID_3,
        ]);
        sinon.stub(domModel, 'nodeForId')
            .withArgs(ID_1)
            .returns(makeNode(ID_1))
            .withArgs(ID_2)
            .returns(makeNode(ID_2))
            .withArgs(ID_3)
            .returns(makeNode(ID_3));
        const component = await renderComponent();
        assert.isNotNull(component.shadowRoot);
        assert.strictEqual(queryLabels(component, '[data-element]').length, 3);
    });
    it('send an event when an element overlay is toggled', async () => {
        getNodesByStyle.withArgs([{ name: 'display', value: 'grid' }, { name: 'display', value: 'inline-grid' }]).resolves([
            ID_1,
        ]);
        sinon.stub(domModel, 'nodeForId').withArgs(ID_1).returns(makeNode(ID_1));
        const highlightGrid = sinon.spy(overlayModel, 'highlightGridInPersistentOverlay');
        const component = await renderComponent();
        assert.isNotNull(component.shadowRoot);
        const input = component.shadowRoot.querySelector('[data-element] [data-input]');
        assert.instanceOf(input, HTMLInputElement);
        input.click();
        assert.isTrue(highlightGrid.calledOnceWith(ID_1));
    });
    it('send an event when an element’s Show element button is pressed', async () => {
        getNodesByStyle.withArgs([{ name: 'display', value: 'grid' }, { name: 'display', value: 'inline-grid' }]).resolves([
            ID_1,
        ]);
        const node = makeNode(ID_1);
        sinon.stub(domModel, 'nodeForId').withArgs(ID_1).returns(node);
        const reveal = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.RevealerRegistry.prototype, 'reveal').resolves();
        const component = await renderComponent();
        assert.isNotNull(component.shadowRoot);
        const button = component.shadowRoot.querySelector('.show-element');
        assert.instanceOf(button, HTMLElement);
        button.click();
        assert.isTrue(reveal.calledOnceWith(node, false));
    });
    it('expands/collapses <details> using ArrowLeft/ArrowRight keys', async () => {
        const component = await renderComponent();
        assert.isNotNull(component.shadowRoot);
        const details = component.shadowRoot.querySelector('details');
        assert.instanceOf(details, HTMLDetailsElement);
        const summary = details.querySelector('summary');
        assert.instanceOf(summary, HTMLElement);
        assert(details.open, 'The first details were not expanded by default');
        summary.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'ArrowLeft' }));
        assert(!details.open, 'The details were not collapsed after sending ArrowLeft');
        summary.dispatchEvent(new KeyboardEvent('keydown', { bubbles: true, cancelable: true, key: 'ArrowRight' }));
        assert(details.open, 'The details were not expanded after sending ArrowRight');
    });
    const updatesUiOnEvent = (event, inScope) => async () => {
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
        await renderComponent();
        const render = sinon.spy(coordinator, 'write');
        overlayModel.dispatchEventToListeners(event, ...[{ nodeId: 42, enabled: true }]);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.strictEqual(render.called, inScope);
    };
    it('updates UI on in scope grid overlay update event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.Events.PersistentGridOverlayStateChanged, true));
    it('does not update UI on out of scope grid overlay update event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.Events.PersistentGridOverlayStateChanged, false));
    it('updates UI on in scope flex overlay update event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged, true));
    it('does not update UI on out of scope flex overlay update event', updatesUiOnEvent(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.OverlayModel.Events.PersistentFlexContainerOverlayStateChanged, false));
});


/***/ })

}]);