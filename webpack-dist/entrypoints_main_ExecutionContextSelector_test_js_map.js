(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_main_ExecutionContextSelector_test_js_map"],{

/***/ "./entrypoints/main/ExecutionContextSelector.test.js.map":
/*!***************************************************************!*\
  !*** ./entrypoints/main/ExecutionContextSelector.test.js.map ***!
  \***************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ExecutionContextSelector.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/entrypoints/main/ExecutionContextSelector.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,EACL,YAAY,GACb,MAAM,qCAAqC,CAAC;AAC7C,OAAO,EACL,0BAA0B,GAC3B,MAAM,iCAAiC,CAAC;AACzC,OAAO,EACL,YAAY,GACb,MAAM,sCAAsC,CAAC;AAC9C,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAEhD,OAAO,KAAK,IAAI,MAAM,WAAW,CAAC;AAElC,0BAA0B,CAAC,0BAA0B,EAAE,GAAG,EAAE;IAC1D,EAAE,CAAC,gDAAgD,EAAE,GAAG,EAAE;QACxD,IAAI,IAAI,CAAC,wBAAwB,CAAC,wBAAwB,CACtD,GAAG,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,EAAE,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,QAAQ,EAAE,CAAC,CAAC;QAE/E,MAAM,SAAS,GAAG,YAAY,CAAC,EAAC,IAAI,EAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,GAAG,EAAC,CAAC,CAAC;QAC5D,MAAM,eAAe,GAAG,YAAY,CAAC,EAAC,IAAI,EAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,KAAK,EAAE,YAAY,EAAE,SAAS,EAAC,CAAC,CAAC;QAC7F,MAAM,cAAc,GAAG,YAAY,CAAC,EAAC,IAAI,EAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,KAAK,EAAE,YAAY,EAAE,eAAe,EAAC,CAAC,CAAC;QAClG,MAAM,eAAe,GAAG,YAAY,CAAC,EAAC,IAAI,EAAE,GAAG,CAAC,MAAM,CAAC,IAAI,CAAC,KAAK,EAAE,YAAY,EAAE,SAAS,EAAE,OAAO,EAAE,WAAW,EAAC,CAAC,CAAC;QAEnH,MAAM,gBAAgB,GAAG,KAAK,CAAC,GAAG,CAAC,EAAE,CAAC,OAAO,CAAC,OAAO,CAAC,QAAQ,EAAE,EAAE,WAAW,CAAC,CAAC;QAE/E,MAAM,2BAA2B,GAAG,CAAC,MAAyB,EAAE,EAAE;YAChE,MAAM,KAAK,GAAG,YAAY,CAAC,MAAM,CAAC,CAAC;YAEnC,MAAM,YAAY,GAAG,MAAM,CAAC,KAAK,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,CAAC;YACjE,YAAa,CAAC,wBAAwB,CAClC,GAAG,CAAC,YAAY,CAAC,MAAM,CAAC,uBAAuB,EAC/C,EAAC,SAAS,EAAE,IAAI,EAAE,OAAO,EAAE,KAAK,CAAC,EAAE,EAAE,MAAM,EAAE,GAAG,EAAE,CAAC,MAAM,EAAsC,CAAC,CAAC;QACvG,CAAC,CAAC;QAEF,2BAA2B,CAAC,cAAc,CAAC,CAAC;QAC5C,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,MAAM,CAAC,CAAC;QAEvC,gBAAgB,CAAC,YAAY,EAAE,CAAC;QAChC,2BAA2B,CAAC,cAAc,CAAC,CAAC;QAC5C,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,SAAS,CAAC,CAAC;QAE1C,2BAA2B,CAAC,eAAe,CAAC,CAAC;QAC7C,MAAM,CAAC,MAAM,CAAC,gBAAgB,CAAC,MAAM,CAAC,CAAC;QAEvC,gBAAgB,CAAC,YAAY,EAAE,CAAC;QAChC,2BAA2B,CAAC,eAAe,CAAC,CAAC;QAC7C,MAAM,CAAC,OAAO,CAAC,gBAAgB,CAAC,MAAM,CAAC,CAAC;IAC1C,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport {\\n  createTarget,\\n} from '../../testing/EnvironmentHelpers.js';\\nimport {\\n  describeWithMockConnection,\\n} from '../../testing/MockConnection.js';\\nimport {\\n  getMainFrame,\\n} from '../../testing/ResourceTreeHelpers.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport * as Main from './main.js';\\n\\ndescribeWithMockConnection('ExecutionContextSelector', () => {\\n  it('switches to the default context once available', () => {\\n    new Main.ExecutionContextSelector.ExecutionContextSelector(\\n        SDK.TargetManager.TargetManager.instance(), UI.Context.Context.instance());\\n\\n    const tabTarget = createTarget({type: SDK.Target.Type.Tab});\\n    const mainFrameTarget = createTarget({type: SDK.Target.Type.Frame, parentTarget: tabTarget});\\n    const subframeTarget = createTarget({type: SDK.Target.Type.Frame, parentTarget: mainFrameTarget});\\n    const prerenderTarget = createTarget({type: SDK.Target.Type.Frame, parentTarget: tabTarget, subtype: 'prerender'});\\n\\n    const contextSetFlavor = sinon.spy(UI.Context.Context.instance(), 'setFlavor');\\n\\n    const sentExecutionContextCreated = (target: SDK.Target.Target) => {\\n      const frame = getMainFrame(target);\\n\\n      const runtimeModel = target.model(SDK.RuntimeModel.RuntimeModel);\\n      runtimeModel!.dispatchEventToListeners(\\n          SDK.RuntimeModel.Events.ExecutionContextCreated,\\n          {isDefault: true, frameId: frame.id, target: () => target} as SDK.RuntimeModel.ExecutionContext);\\n    };\\n\\n    sentExecutionContextCreated(subframeTarget);\\n    assert.isTrue(contextSetFlavor.called);\\n\\n    contextSetFlavor.resetHistory();\\n    sentExecutionContextCreated(subframeTarget);\\n    assert.isTrue(contextSetFlavor.notCalled);\\n\\n    sentExecutionContextCreated(mainFrameTarget);\\n    assert.isTrue(contextSetFlavor.called);\\n\\n    contextSetFlavor.resetHistory();\\n    sentExecutionContextCreated(prerenderTarget);\\n    assert.isFalse(contextSetFlavor.called);\\n  });\\n});\\n\"]}");

/***/ })

}]);