(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_emulation_MediaQueryInspector_test_js_map"], {
"./panels/emulation/MediaQueryInspector.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"MediaQueryInspector.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/emulation/MediaQueryInspector.test.ts\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"// Copyright 2022 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport * as Protocol from '../../generated/protocol.js';\\nimport {createTarget} from '../../testing/EnvironmentHelpers.js';\\nimport {expectCall} from '../../testing/ExpectStubCall.js';\\nimport {describeWithMockConnection} from '../../testing/MockConnection.js';\\n\\nimport * as Emulation from './emulation.js';\\n\\ndescribeWithMockConnection('MediaQueryInspector', () => {\\n  let target: SDK.Target.Target;\\n  let throttler: Common.Throttler.Throttler;\\n  let inspector: Emulation.MediaQueryInspector.MediaQueryInspector;\\n\\n  beforeEach(() => {\\n    const tabTarget = createTarget({type: SDK.Target.Type.Tab});\\n    createTarget({parentTarget: tabTarget, subtype: 'prerender'});\\n    target = createTarget({parentTarget: tabTarget});\\n    throttler = new Common.Throttler.Throttler(0);\\n  });\\n\\n  afterEach(() => {\\n    inspector.detach();\\n  });\\n\\n  it('redners media queries', async () => {\\n    inspector = new Emulation.MediaQueryInspector.MediaQueryInspector(\\n        () => 42,\\n        (_: number) => {},\\n        throttler,\\n    );\\n    inspector.markAsRoot();\\n    inspector.show(document.body);\\n    assert.strictEqual(inspector.contentElement.querySelectorAll('.media-inspector-marker').length, 0);\\n\\n    const cssModel = target.model(SDK.CSSModel.CSSModel);\\n    assert.exists(cssModel);\\n    const CSS_MEDIA = {\\n      text: 'foo',\\n      source: Protocol.CSS.CSSMediaSource.MediaRule,\\n      mediaList: [{expressions: [{value: 42, computedLength: 42, unit: 'UNIT', feature: 'max-width'}], active: true}],\\n    } as unknown as Protocol.CSS.CSSMedia;\\n    sinon.stub(cssModel, 'getMediaQueries').resolves([new SDK.CSSMedia.CSSMedia(cssModel, CSS_MEDIA)]);\\n    const workScheduled = expectCall(sinon.stub(throttler, 'schedule'));\\n    cssModel.dispatchEventToListeners(\\n        SDK.CSSModel.Events.StyleSheetAdded, {} as SDK.CSSStyleSheetHeader.CSSStyleSheetHeader);\\n    const [work] = await workScheduled;\\n    await work();\\n    assert.strictEqual(inspector.contentElement.querySelectorAll('.media-inspector-marker').length, 1);\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);