(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_AccessibilityTreeView_test_js_map"],{

/***/ "./panels/elements/AccessibilityTreeView.test.js.map":
/*!***********************************************************!*\
  !*** ./panels/elements/AccessibilityTreeView.test.js.map ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"AccessibilityTreeView.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/elements/AccessibilityTreeView.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAE7C,OAAO,EAAC,YAAY,EAAE,gBAAgB,EAAC,MAAM,qCAAqC,CAAC;AACnF,OAAO,EAAC,0BAA0B,EAAC,MAAM,iCAAiC,CAAC;AAC3E,OAAO,KAAK,WAAW,MAAM,kDAAkD,CAAC;AAEhF,OAAO,KAAK,QAAQ,MAAM,eAAe,CAAC;AAE1C,MAAM,aAAa,GAAG,eAAwC,CAAC;AAE/D,0BAA0B,CAAC,uBAAuB,EAAE,GAAG,EAAE;IACvD,IAAI,MAAyB,CAAC;IAC9B,IAAI,YAAyB,CAAC;IAC9B,IAAI,aAAkG,CAAC;IAEvG,UAAU,CAAC,GAAG,EAAE;QACd,gBAAgB,EAAE,CAAC;QACnB,MAAM,GAAG,YAAY,EAAE,CAAC;QACxB,YAAY,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAC7C,aAAa,GAAG,IAAI,WAAW,CAAC,WAAW,CAAC,WAAW,EAAkD,CAAC;IAC5G,CAAC,CAAC,CAAC;IAEH,MAAM,gBAAgB,GAAG,CAAC,OAAgB,EAAE,EAAE,CAAC,KAAK,IAAI,EAAE;QACxD,GAAG,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,cAAc,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC;QACnF,IAAI,QAAQ,CAAC,qBAAqB,CAAC,qBAAqB,CAAC,YAAY,EAAE,aAAa,CAAC,CAAC;QAEtF,MAAM,KAAK,GAAG,MAAM,CAAC,KAAK,CAAC,GAAG,CAAC,kBAAkB,CAAC,kBAAkB,CAAC,CAAC;QACtE,MAAM,oBAAoB,GAAG,KAAK,CAAC,GAAG,CAAC,aAAa,EAAE,MAAM,EAAE,CAAC,KAAK,CAAC,CAAC,CAAC;QACvE,KAAK,CAAC,IAAI,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,QAAQ,EAAE,EAAE,mBAAmB,CAAC,CAAC,OAAO,CAAC;YAChF,EAAE,EAAE,aAAa;SACyB,CAAC,CAAC;QAE9C,KAAM,CAAC,wBAAwB,gEAA4C;YACzE,IAAI,EAAE,EAAC,WAAW,EAAE,GAAG,EAAE,CAAC,CAAC,EAAE,IAAI,EAAE,GAAG,EAAE,CAAC,IAAI,EAAE,UAAU,EAAE,GAAG,EAAE,CAAC,aAAa,EAAE,EAAE,EAAE,GAAG,EAAE,CAAC,IAAI,EAClD;SAC7C,CAAC,CAAC;QACH,MAAM,IAAI,OAAO,CAAO,OAAO,CAAC,EAAE,CAAC,cAAc,CAAC,OAAO,CAAC,CAAC,CAAC;QAC5D,MAAM,CAAC,WAAW,CAAC,oBAAoB,CAAC,GAAG,CAAC,MAAM,EAAE,OAAO,CAAC,CAAC;IAC/D,CAAC,CAAC;IAEF,EAAE,CAAC,qCAAqC,EAAE,gBAAgB,CAAC,IAAI,CAAC,CAAC,CAAC;IAClE,EAAE,CAAC,iDAAiD,EAAE,gBAAgB,CAAC,KAAK,CAAC,CAAC,CAAC;AACjF,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\nimport {createTarget, stubNoopSettings} from '../../testing/EnvironmentHelpers.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\nimport * as TreeOutline from '../../ui/components/tree_outline/tree_outline.js';\\n\\nimport * as Elements from './elements.js';\\n\\nconst MAIN_FRAME_ID = 'MAIN_FRAME_ID' as Protocol.Page.FrameId;\\n\\ndescribeWithMockConnection('AccessibilityTreeView', () => {\\n  let target: SDK.Target.Target;\\n  let toggleButoon: HTMLElement;\\n  let treeComponent: TreeOutline.TreeOutline.TreeOutline<Elements.AccessibilityTreeUtils.AXTreeNodeData>;\\n\\n  beforeEach(() => {\\n    stubNoopSettings();\\n    target = createTarget();\\n    toggleButoon = document.createElement('div');\\n    treeComponent = new TreeOutline.TreeOutline.TreeOutline<Elements.AccessibilityTreeUtils.AXTreeNodeData>();\\n  });\\n\\n  const updatesUiOnEvent = (inScope: boolean) => async () => {\\n    SDK.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);\\n    new Elements.AccessibilityTreeView.AccessibilityTreeView(toggleButoon, treeComponent);\\n\\n    const model = target.model(SDK.AccessibilityModel.AccessibilityModel);\\n    const treeComponentDataSet = sinon.spy(treeComponent, 'data', ['set']);\\n    sinon.stub(SDK.FrameManager.FrameManager.instance(), 'getOutermostFrame').returns({\\n      id: MAIN_FRAME_ID,\\n    } as SDK.ResourceTreeModel.ResourceTreeFrame);\\n\\n    model!.dispatchEventToListeners(SDK.AccessibilityModel.Events.TreeUpdated, {\\n      root: {numChildren: () => 0, role: () => null, getFrameId: () => MAIN_FRAME_ID, id: () => 'id'} as unknown as\\n          SDK.AccessibilityModel.AccessibilityNode,\\n    });\\n    await new Promise<void>(resolve => queueMicrotask(resolve));\\n    assert.strictEqual(treeComponentDataSet.set.called, inScope);\\n  };\\n\\n  it('updates UI on in scope update event', updatesUiOnEvent(true));\\n  it('does not update UI on out of scope update event', updatesUiOnEvent(false));\\n});\\n\"]}");

/***/ })

}]);