"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_entrypoints_inspector_main_InspectorMain_test_ts"],{

/***/ "./src/entrypoints/inspector_main/InspectorMain.test.ts":
/*!**************************************************************!*\
  !*** ./src/entrypoints/inspector_main/InspectorMain.test.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./src/core/protocol_client/protocol_client.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./src/testing/ExpectStubCall.ts");
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _inspector_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector_main.js */ "./src/entrypoints/inspector_main/inspector_main.ts");
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


/***/ }),

/***/ "./src/entrypoints/inspector_main/OutermostTargetSelector.ts":
/*!*******************************************************************!*\
  !*** ./src/entrypoints/inspector_main/OutermostTargetSelector.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutermostTargetSelector: () => (/* binding */ OutermostTargetSelector)
/* harmony export */ });
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './outermostTargetSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OutermostTargetSelector_instances, _OutermostTargetSelector_dropDown, _OutermostTargetSelector_toolbarItem, _OutermostTargetSelector_targetComparator, _OutermostTargetSelector_onTargetInfoChanged, _OutermostTargetSelector_onInspectedURLChanged, _OutermostTargetSelector_targetChanged, _OutermostTargetSelector_subtitleFor;






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
    constructor() {
        _OutermostTargetSelector_instances.add(this);
        Object.defineProperty(this, "listItems", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _OutermostTargetSelector_dropDown.set(this, void 0);
        _OutermostTargetSelector_toolbarItem.set(this, void 0);
        this.listItems = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.ListModel();
        __classPrivateFieldSet(this, _OutermostTargetSelector_dropDown, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.SoftDropDown.SoftDropDown(this.listItems, this), "f");
        __classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").setRowHeight(36);
        __classPrivateFieldSet(this, _OutermostTargetSelector_toolbarItem, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Toolbar.ToolbarItem(__classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").element), "f");
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setTitle(i18nString(UIStrings.targetNotSelected));
        this.listItems.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ListModel.Events.ItemsReplaced, () => __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setEnabled(Boolean(this.listItems.length)));
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").element.classList.add('toolbar-has-dropdown');
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
        targetManager.addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.Events.TargetInfoChanged, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_onTargetInfoChanged), this);
        targetManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.Events.NameChanged, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_onInspectedURLChanged), this);
        targetManager.observeTargets(this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_targetChanged), this);
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!outermostTargetSelectorInstance || forceNew) {
            outermostTargetSelectorInstance = new OutermostTargetSelector();
        }
        return outermostTargetSelectorInstance;
    }
    item() {
        return __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f");
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
        this.listItems.insertWithComparator(target, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_targetComparator).call(this));
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setVisible(this.listItems.length > 1);
        if (target === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)) {
            __classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").selectItem(target);
        }
    }
    targetRemoved(target) {
        const index = this.listItems.indexOf(target);
        if (index === -1) {
            return;
        }
        this.listItems.remove(index);
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setVisible(this.listItems.length > 1);
    }
    createElementForItem(item) {
        const element = document.createElement('div');
        element.classList.add('target');
        const shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createShadowRootWithCoreStyles(element, { cssFile: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './outermostTargetSelector.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], delegatesFocus: undefined });
        const title = shadowRoot.createChild('div', 'title');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(title, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.trimEndWithMaxLength(this.titleFor(item), 100));
        const subTitle = shadowRoot.createChild('div', 'subtitle');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(subTitle, __classPrivateFieldGet(this, _OutermostTargetSelector_instances, "m", _OutermostTargetSelector_subtitleFor).call(this, item));
        return element;
    }
    isItemSelectable(_item) {
        return true;
    }
    itemSelected(item) {
        const title = item ? i18nString(UIStrings.targetS, { PH1: this.titleFor(item) }) : i18nString(UIStrings.targetNotSelected);
        __classPrivateFieldGet(this, _OutermostTargetSelector_toolbarItem, "f").setTitle(title);
        if (item && item !== _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target)?.outermostTarget()) {
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, item);
        }
    }
}
_OutermostTargetSelector_dropDown = new WeakMap(), _OutermostTargetSelector_toolbarItem = new WeakMap(), _OutermostTargetSelector_instances = new WeakSet(), _OutermostTargetSelector_targetComparator = function _OutermostTargetSelector_targetComparator() {
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
}, _OutermostTargetSelector_onTargetInfoChanged = function _OutermostTargetSelector_onTargetInfoChanged(event) {
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance();
    const target = targetManager.targetById(event.data.targetId);
    if (!target || target.outermostTarget() !== target) {
        return;
    }
    this.targetRemoved(target);
    this.targetAdded(target);
}, _OutermostTargetSelector_onInspectedURLChanged = function _OutermostTargetSelector_onInspectedURLChanged(event) {
    const target = event.data;
    if (!target || target.outermostTarget() !== target) {
        return;
    }
    this.targetRemoved(target);
    this.targetAdded(target);
}, _OutermostTargetSelector_targetChanged = function _OutermostTargetSelector_targetChanged({ data: target, }) {
    __classPrivateFieldGet(this, _OutermostTargetSelector_dropDown, "f").selectItem(target?.outermostTarget() || null);
}, _OutermostTargetSelector_subtitleFor = function _OutermostTargetSelector_subtitleFor(target) {
    const targetInfo = target.targetInfo();
    if (target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().primaryPageTarget() && targetInfo) {
        return _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_3__.ResourceUtils.displayNameForURL(targetInfo.url);
    }
    return target.targetInfo()?.subtype || '';
};


/***/ }),

/***/ "./src/entrypoints/inspector_main/inspector_main.ts":
/*!**********************************************************!*\
  !*** ./src/entrypoints/inspector_main/inspector_main.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InspectorMain: () => (/* reexport module object */ _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   OutermostTargetSelector: () => (/* reexport module object */ _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   RenderingOptions: () => (/* reexport module object */ _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _RenderingOptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderingOptions.js */ "./src/entrypoints/inspector_main/RenderingOptions.ts");
/* harmony import */ var _InspectorMain_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorMain.js */ "./src/entrypoints/inspector_main/InspectorMain.ts");
/* harmony import */ var _OutermostTargetSelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OutermostTargetSelector.js */ "./src/entrypoints/inspector_main/OutermostTargetSelector.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








/***/ }),

/***/ "./src/testing/ExpectStubCall.ts":
/*!***************************************!*\
  !*** ./src/testing/ExpectStubCall.ts ***!
  \***************************************/
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


/***/ })

}]);