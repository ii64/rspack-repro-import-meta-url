"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_inspector_main_InspectorMain_test_js"],{

/***/ "./entrypoints/inspector_main/InspectorMain.test.js":
/*!**********************************************************!*\
  !*** ./entrypoints/inspector_main/InspectorMain.test.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./core/protocol_client/protocol_client.js");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */ var _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector_main.js */ "./entrypoints/inspector_main/inspector_main.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('FocusDebuggeeActionDelegate', () => {
    it('uses main frame', async () => {
        const tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget, subtype: 'prerender' });
        const frameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: tabTarget });
        const delegate = new _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.FocusDebuggeeActionDelegate();
        const bringToFront = sinon.spy(frameTarget.pageAgent(), 'invoke_bringToFront');
        delegate.handleAction({}, 'foo');
        assert.isTrue(bringToFront.calledOnce);
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.describeWithMockConnection)('InspectorMainImpl', () => {
    const DEBUGGER_ID = 'debuggerId';
    const runForTabTarget = async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        const runPromise = inspectorMain.run();
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget('someTargetID', 'someName', _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, rootTarget, undefined);
        await runPromise;
    };
    beforeEach(() => {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.stubNoopSettings)();
        sinon.stub(_core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__.InspectorBackend.Connection, 'setFactory');
    });
    it('continues only after primary page target is available', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        let finished = false;
        inspectorMain.run()
            .then(() => {
            finished = true;
        })
            .catch(e => {
            throw e;
        });
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isFalse(finished);
        const rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget('someTargetID', 'someName', _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame, rootTarget, undefined);
        await new Promise(resolve => setTimeout(resolve, 0));
        assert.isTrue(finished);
    });
    it('sets main target type to Node if v8only query param present', async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', 'true');
        assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
        await inspectorMain.run();
        assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()?.type(), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Node);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', '');
    });
    it('sets main target type to Tab if targetType=tab query param present', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
        assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
        await runForTabTarget();
        assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()?.type(), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Tab);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
    });
    it('sets main target type to Frame by default', async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
        await inspectorMain.run();
        assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()?.type(), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.Frame);
    });
    it('creates main target waiting for debugger if the main target is frame and panel is sources', async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', 'sources');
        assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
        const waitForDebugger = sinon.spy();
        const debuggerPause = sinon.spy();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Page.waitForDebugger', waitForDebugger);
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.enable', () => ({ debuggerId: DEBUGGER_ID }));
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.pause', debuggerPause);
        await inspectorMain.run();
        assert.isTrue(waitForDebugger.calledOnce);
        assert.isTrue(debuggerPause.calledOnce);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', '');
    });
    it('wait for Debugger.enable before calling Debugger.pause', async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', 'sources');
        assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
        const debuggerPause = sinon.stub();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.pause', debuggerPause);
        const debuggerPauseCalled = (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__.expectCall)(debuggerPause);
        let debuggerEnable = (_) => { };
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.enable', () => new Promise(resolve => {
            debuggerEnable = resolve;
        }));
        assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
        const result = inspectorMain.run();
        assert.isFalse(debuggerPause.called);
        debuggerEnable({ debuggerId: DEBUGGER_ID, getError: () => undefined });
        await Promise.all([debuggerPauseCalled, result]);
        assert.isTrue(debuggerPause.calledOnce);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('panel', '');
    });
    it('frontend correctly registers if Debugger.enable fails', async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        assert.notExists(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget());
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Debugger.enable', () => ({ getError: () => 'Debugger.enable failed' }));
        await inspectorMain.run();
        const target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget();
        assert.isNotNull(target);
        const debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
        assert.isFalse(debuggerModel.debuggerEnabled());
    });
    it('calls Runtime.runIfWaitingForDebugger for Node target', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', 'true');
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        const runIfWaitingForDebugger = sinon.spy();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
        await inspectorMain.run();
        assert.isTrue(runIfWaitingForDebugger.calledOnce);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('v8only', '');
    });
    it('calls Runtime.runIfWaitingForDebugger for frame target', async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        const runIfWaitingForDebugger = sinon.spy();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
        await inspectorMain.run();
        assert.isTrue(runIfWaitingForDebugger.calledOnce);
    });
    it('does not call Runtime.runIfWaitingForDebugger for Tab target', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
        const runIfWaitingForDebugger = sinon.spy();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
        await runForTabTarget();
        assert.isFalse(runIfWaitingForDebugger.called);
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
    });
    it('sets frame target to "main"', async () => {
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        const runIfWaitingForDebugger = sinon.spy();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
        await inspectorMain.run();
        assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()?.name(), 'Main');
    });
    it('sets tab target to "tab"', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
        const runIfWaitingForDebugger = sinon.spy();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
        await runForTabTarget();
        assert.strictEqual(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget()?.name(), 'Tab');
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
    });
    it('sets main frame target to "main"', async () => {
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', 'tab');
        const inspectorMain = _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__.InspectorMain.InspectorMainImpl.instance({ forceNew: true });
        const runIfWaitingForDebugger = sinon.spy();
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__.setMockConnectionResponseHandler)('Runtime.runIfWaitingForDebugger', runIfWaitingForDebugger);
        const runPromise = inspectorMain.run();
        const prerenderTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget() || undefined, subtype: 'prerender' });
        const mainFrameTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({ parentTarget: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().rootTarget() || undefined });
        await runPromise;
        assert.notStrictEqual(prerenderTarget.name(), 'Main');
        assert.strictEqual(mainFrameTarget.name(), 'Main');
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__.Runtime.Runtime.setQueryParamForTesting('targetType', '');
    });
});
//# sourceMappingURL=InspectorMain.test.js.map

/***/ }),

/***/ "./entrypoints/inspector_main/OutermostTargetSelector.js":
/*!***************************************************************!*\
  !*** ./entrypoints/inspector_main/OutermostTargetSelector.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutermostTargetSelector: () => (/* binding */ OutermostTargetSelector)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _outermostTargetSelector_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outermostTargetSelector.css.js */ "./entrypoints/inspector_main/outermostTargetSelector.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const UIStrings = {
    /**
     *@description Title of toolbar item in outermost target selector in the main toolbar
     */
    targetNotSelected: 'Page: Not selected',
    /**
     *@description Title of toolbar item in outermost target selector in the main toolbar
     *@example {top} PH1
     */
    targetS: 'Page: {PH1}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('entrypoints/inspector_main/OutermostTargetSelector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
let outermostTargetSelectorInstance;
class OutermostTargetSelector {
    listItems;
    #dropDown;
    #toolbarItem;
    constructor() {
        this.listItems = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel();
        this.#dropDown = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SoftDropDown.SoftDropDown(this.listItems, this);
        this.#dropDown.setRowHeight(36);
        this.#toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(this.#dropDown.element);
        this.#toolbarItem.setTitle(i18nString(UIStrings.targetNotSelected));
        this.listItems.addEventListener("ItemsReplaced" /* UI.ListModel.Events.ItemsReplaced */, () => this.#toolbarItem.setEnabled(Boolean(this.listItems.length)));
        this.#toolbarItem.element.classList.add('toolbar-has-dropdown');
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        targetManager.addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager, "TargetInfoChanged" /* SDK.ChildTargetManager.Events.TargetInfoChanged */, this.#onTargetInfoChanged, this);
        targetManager.addEventListener("NameChanged" /* SDK.TargetManager.Events.NameChanged */, this.#onInspectedURLChanged, this);
        targetManager.observeTargets(this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, this.#targetChanged, this);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!outermostTargetSelectorInstance || forceNew) {
            outermostTargetSelectorInstance = new OutermostTargetSelector();
        }
        return outermostTargetSelectorInstance;
    }
    item() {
        return this.#toolbarItem;
    }
    highlightedItemChanged(_from, _to, fromElement, toElement) {
        if (fromElement) {
            fromElement.classList.remove('highlighted');
        }
        if (toElement) {
            toElement.classList.add('highlighted');
        }
    }
    titleFor(target) {
        return target.name();
    }
    targetAdded(target) {
        if (target.outermostTarget() !== target) {
            return;
        }
        this.listItems.insertWithComparator(target, this.#targetComparator());
        this.#toolbarItem.setVisible(this.listItems.length > 1);
        if (target === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)) {
            this.#dropDown.selectItem(target);
        }
    }
    targetRemoved(target) {
        const index = this.listItems.indexOf(target);
        if (index === -1) {
            return;
        }
        this.listItems.remove(index);
        this.#toolbarItem.setVisible(this.listItems.length > 1);
    }
    #targetComparator() {
        return (a, b) => {
            const aTargetInfo = a.targetInfo();
            const bTargetInfo = b.targetInfo();
            if (!aTargetInfo || !bTargetInfo) {
                return 0;
            }
            if (!aTargetInfo.subtype?.length && bTargetInfo.subtype?.length) {
                return -1;
            }
            if (aTargetInfo.subtype?.length && !bTargetInfo.subtype?.length) {
                return 1;
            }
            return aTargetInfo.url.localeCompare(bTargetInfo.url);
        };
    }
    #onTargetInfoChanged(event) {
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        const target = targetManager.targetById(event.data.targetId);
        if (!target || target.outermostTarget() !== target) {
            return;
        }
        this.targetRemoved(target);
        this.targetAdded(target);
    }
    #onInspectedURLChanged(event) {
        const target = event.data;
        if (!target || target.outermostTarget() !== target) {
            return;
        }
        this.targetRemoved(target);
        this.targetAdded(target);
    }
    #targetChanged({ data: target, }) {
        this.#dropDown.selectItem(target?.outermostTarget() || null);
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        element.classList.add('target');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [_outermostTargetSelector_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]], delegatesFocus: undefined });
        const title = shadowRoot.createChild('div', 'title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
        const subTitle = shadowRoot.createChild('div', 'subtitle');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(subTitle, this.#subtitleFor(item));
        return element;
    }
    #subtitleFor(target) {
        const targetInfo = target.targetInfo();
        if (target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget() && targetInfo) {
            return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceUtils.displayNameForURL(targetInfo.url);
        }
        return target.targetInfo()?.subtype || '';
    }
    isItemSelectable(_item) {
        return true;
    }
    itemSelected(item) {
        const title = item ? i18nString(UIStrings.targetS, { PH1: this.titleFor(item) }) : i18nString(UIStrings.targetNotSelected);
        this.#toolbarItem.setTitle(title);
        if (item && item !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)?.outermostTarget()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, item);
        }
    }
}
//# sourceMappingURL=OutermostTargetSelector.js.map

/***/ }),

/***/ "./entrypoints/inspector_main/inspector_main.js":
/*!******************************************************!*\
  !*** ./entrypoints/inspector_main/inspector_main.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorMain: () => (/* reexport module object */ _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   OutermostTargetSelector: () => (/* reexport module object */ _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   RenderingOptions: () => (/* reexport module object */ _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingOptions.js */ "./entrypoints/inspector_main/RenderingOptions.js");
/* harmony import */ var _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorMain.js */ "./entrypoints/inspector_main/InspectorMain.js");
/* harmony import */ var _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutermostTargetSelector.js */ "./entrypoints/inspector_main/OutermostTargetSelector.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






//# sourceMappingURL=inspector_main.js.map

/***/ }),

/***/ "./entrypoints/inspector_main/outermostTargetSelector.css.js":
/*!*******************************************************************!*\
  !*** ./entrypoints/inspector_main/outermostTargetSelector.css.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
const styles = new CSSStyleSheet();
styles.replaceSync(
`/*
 * Copyright 2023 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

:host {
  padding: 2px 1px 2px 2px;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  height: 36px;
  justify-content: center;
  overflow-y: auto;
}

.title {
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  flex-grow: 0;
}

.subtitle {
  color: var(--sys-color-token-subtle);
  margin-right: 3px;
  overflow: hidden;
  padding-left: 8px;
  text-overflow: ellipsis;
  flex-grow: 0;
}

:host(.highlighted) .subtitle {
  color: inherit;
}

/*# sourceURL=outermostTargetSelector.css */
`);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


/***/ }),

/***/ "./testing/ExpectStubCall.js":
/*!***********************************!*\
  !*** ./testing/ExpectStubCall.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   expectCall: () => (/* binding */ expectCall),
/* harmony export */   expectCalled: () => (/* binding */ expectCalled)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCall(stub, options = {}) {
    return new Promise(resolve => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function (...args) {
            if (stub.callCount < (options.callCount ?? 1)) {
                return undefined;
            }
            resolve(args);
            return (options.fakeFn ? options.fakeFn.apply(this, args) : undefined);
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub, options = {}) {
    const remainingCalls = (options.callCount ?? 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, { ...options, callCount: remainingCalls });
}
//# sourceMappingURL=ExpectStubCall.js.map

/***/ })

}]);