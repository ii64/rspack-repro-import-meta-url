(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_AnimationTimingUI_test_js_map"],{

/***/ "./ui/legacy/components/inline_editor/AnimationTimingUI.test.js.map":
/*!**************************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/AnimationTimingUI.test.js.map ***!
  \**************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"AnimationTimingUI.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/inline_editor/AnimationTimingUI.test.ts\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as InlineEditor from './inline_editor.js';\\n\\ndescribe('AnimationTimingUI', () => {\\n  it('can be instantiated successfully', () => {\\n    const model = InlineEditor.AnimationTimingModel.AnimationTimingModel.parse('linear(0, 1)') as\\n        InlineEditor.AnimationTimingModel.AnimationTimingModel;\\n    const animationTimingUI = new InlineEditor.AnimationTimingUI.AnimationTimingUI({\\n      model,\\n      onChange: () => {},\\n    });\\n\\n    animationTimingUI.draw();\\n    const bezierContainer = animationTimingUI.element().querySelector('.bezier-ui-container');\\n    const linearEasingContainer = animationTimingUI.element().querySelector('.linear-easing-ui-container');\\n    assert.exists(linearEasingContainer);\\n    assert.exists(bezierContainer);\\n  });\\n\\n  it('should bezier-ui-container be hidden when linear-easing function is visualized', () => {\\n    const model = InlineEditor.AnimationTimingModel.AnimationTimingModel.parse('linear(0, 1)') as\\n        InlineEditor.AnimationTimingModel.AnimationTimingModel;\\n    const animationTimingUI = new InlineEditor.AnimationTimingUI.AnimationTimingUI({\\n      model,\\n      onChange: () => {},\\n    });\\n\\n    animationTimingUI.draw();\\n    const bezierContainer = animationTimingUI.element().querySelector('.bezier-ui-container');\\n    const linearEasingContainer = animationTimingUI.element().querySelector('.linear-easing-ui-container');\\n    assert.exists(linearEasingContainer);\\n    assert.exists(bezierContainer);\\n\\n    assert.isTrue(bezierContainer.classList.contains('hidden'));\\n    assert.isFalse(linearEasingContainer.classList.contains('hidden'));\\n  });\\n\\n  it('should linear-easing-ui-container be hidden when cubic-bezier function is visualized', () => {\\n    const model = InlineEditor.AnimationTimingModel.AnimationTimingModel.parse('cubic-bezier(0, 0, 1, 1)') as\\n        InlineEditor.AnimationTimingModel.AnimationTimingModel;\\n    const animationTimingUI = new InlineEditor.AnimationTimingUI.AnimationTimingUI({\\n      model,\\n      onChange: () => {},\\n    });\\n\\n    animationTimingUI.draw();\\n    const bezierContainer = animationTimingUI.element().querySelector('.bezier-ui-container');\\n    const linearEasingContainer = animationTimingUI.element().querySelector('.linear-easing-ui-container');\\n    assert.exists(linearEasingContainer);\\n    assert.exists(bezierContainer);\\n\\n    assert.isFalse(bezierContainer.classList.contains('hidden'));\\n    assert.isTrue(linearEasingContainer.classList.contains('hidden'));\\n  });\\n});\\n\"]}");

/***/ })

}]);