(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_ColorMixSwatch_test_js_map"],{

/***/ "./ui/legacy/components/inline_editor/ColorMixSwatch.test.js.map":
/*!***********************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/ColorMixSwatch.test.js.map ***!
  \***********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ColorMixSwatch.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/inline_editor/ColorMixSwatch.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EACL,oBAAoB,GACrB,MAAM,mCAAmC,CAAC;AAC3C,OAAO,EAAC,kBAAkB,EAAC,MAAM,2CAA2C,CAAC;AAE7E,OAAO,KAAK,YAAY,MAAM,oBAAoB,CAAC;AAEnD,SAAS,YAAY,CAAC,IAAY,EAAE,UAAkB,EAAE,WAAmB;IACzE,MAAM,MAAM,GAAG,IAAI,YAAY,CAAC,cAAc,CAAC,cAAc,EAAE,CAAC;IAChE,oBAAoB,CAAC,MAAM,CAAC,CAAC;IAC7B,MAAM,CAAC,eAAe,CAAC,IAAI,CAAC,CAAC;IAC7B,MAAM,CAAC,aAAa,CAAC,UAAU,CAAC,CAAC;IACjC,MAAM,CAAC,cAAc,CAAC,WAAW,CAAC,CAAC;IACnC,OAAO,MAAM,CAAC;AAChB,CAAC;AAED,kBAAkB,CAAC,gBAAgB,EAAE,GAAG,EAAE;IACxC,EAAE,CAAC,8EAA8E,EAAE,GAAG,EAAE;QACtF,MAAM,MAAM,GAAG,YAAY,CAAC,+BAA+B,EAAE,KAAK,EAAE,MAAM,CAAC,CAAC;QAE5E,MAAM,UAAU,GAAG,MAAM,CAAC,UAAU,EAAE,aAAa,CAAC,cAAc,CAAC,CAAC;QAEpE,MAAM,CAAC,WAAW,CAAC,MAAM,CAAC,UAAU,EAAE,WAAW,EAAE,IAAI,EAAE,EAAE,+BAA+B,CAAC,CAAC;QAC5F,MAAM,CAAC,SAAS,CAAC,UAAU,CAAC,CAAC;IAC/B,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,8EAA8E,EAAE,GAAG,EAAE;QACtF,MAAM,MAAM,GAAG,YAAY,CAAC,8BAA8B,EAAE,KAAK,EAAE,KAAK,CAAC,CAAC;QAC1E,MAAM,CAAC,cAAc,CAAC,MAAM,CAAC,CAAC;QAE9B,MAAM,UAAU,GAAG,MAAM,CAAC,UAAU,EAAE,aAAa,CAAC,cAAc,CAAC,CAAC;QAEpE,MAAM,CAAC,WAAW,CAAC,MAAM,CAAC,UAAU,EAAE,WAAW,EAAE,IAAI,EAAE,EAAE,+BAA+B,CAAC,CAAC;QAC5F,MAAM,CAAC,SAAS,CAAC,UAAU,CAAC,CAAC;IAC/B,CAAC,CAAC,CAAC;IAEH,EAAE,CAAC,wDAAwD,EAAE,GAAG,EAAE;QAChE,MAAM,MAAM,GAAG,YAAY,CAAC,8BAA8B,EAAE,KAAK,EAAE,KAAK,CAAC,CAAC;QAE1E,MAAM,EAAE,GAAG,KAAK,CAAC,IAAI,EAAsD,CAAC;QAC5E,MAAM,MAAM,GAAa,EAAE,CAAC;QAC5B,EAAE,CAAC,SAAS,CAAC,MAAM,CAAC,EAAE,CAAC,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC,UAAU,EAAE,WAAW,EAAE,IAAI,EAAE,IAAI,EAAE,CAAC,CAAC,CAAC;QAClF,MAAM,CAAC,0BAA0B,CAAC,EAAE,CAAC,CAAC;QACtC,MAAM,CAAC,aAAa,CAAC,MAAM,CAAC,CAAC;QAC7B,MAAM,CAAC,cAAc,CAAC,QAAQ,CAAC,CAAC;QAChC,MAAM,CAAC,eAAe,CAAC,mCAAmC,CAAC,CAAC;QAC5D,MAAM,CAAC,QAAQ,CAAC,EAAE,CAAC,QAAQ,EAAE,EAAE,CAAC,CAAC,CAAC;QAElC,MAAM,CAAC,eAAe,CAAC,MAAM,EAAE;YAC7B,8BAA8B;YAC9B,+BAA+B;YAC/B,kCAAkC;YAClC,mCAAmC;SACpC,CAAC,CAAC;IACL,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {\\n  renderElementIntoDOM,\\n} from '../../../../testing/DOMHelpers.js';\\nimport {describeWithLocale} from '../../../../testing/EnvironmentHelpers.js';\\n\\nimport * as InlineEditor from './inline_editor.js';\\n\\nfunction createSwatch(text: string, firstColor: string, secondColor: string) {\\n  const swatch = new InlineEditor.ColorMixSwatch.ColorMixSwatch();\\n  renderElementIntoDOM(swatch);\\n  swatch.setColorMixText(text);\\n  swatch.setFirstColor(firstColor);\\n  swatch.setSecondColor(secondColor);\\n  return swatch;\\n}\\n\\ndescribeWithLocale('ColorMixSwatch', () => {\\n  it('should render color-mix swatch with icon and text when the syntax is correct', () => {\\n    const swatch = createSwatch('color-mix(in srgb, red, blue)', 'red', 'blue');\\n\\n    const swatchIcon = swatch.shadowRoot?.querySelector('.swatch-icon');\\n\\n    assert.strictEqual(swatch.shadowRoot?.textContent?.trim(), 'color-mix(in srgb, red, blue)');\\n    assert.isNotNull(swatchIcon);\\n  });\\n\\n  it('should changing the second color work correctly when the colors are the same', () => {\\n    const swatch = createSwatch('color-mix(in srgb, red, red)', 'red', 'red');\\n    swatch.setSecondColor('blue');\\n\\n    const swatchIcon = swatch.shadowRoot?.querySelector('.swatch-icon');\\n\\n    assert.strictEqual(swatch.shadowRoot?.textContent?.trim(), 'color-mix(in srgb, red, blue)');\\n    assert.isNotNull(swatchIcon);\\n  });\\n\\n  it('calls the popover registration callback upon rendering', () => {\\n    const swatch = createSwatch('color-mix(in srgb, red, red)', 'red', 'red');\\n\\n    const cb = sinon.stub<[InlineEditor.ColorMixSwatch.ColorMixSwatch], void>();\\n    const values: string[] = [];\\n    cb.callsFake(swatch => values.push(swatch.shadowRoot?.textContent?.trim() ?? ''));\\n    swatch.setRegisterPopoverCallback(cb);\\n    swatch.setFirstColor('blue');\\n    swatch.setSecondColor('purple');\\n    swatch.setColorMixText('color-mix(in hsl, yellow, yellow)');\\n    assert.lengthOf(cb.getCalls(), 4);\\n\\n    assert.deepStrictEqual(values, [\\n      'color-mix(in srgb, red, red)',\\n      'color-mix(in srgb, blue, red)',\\n      'color-mix(in srgb, blue, purple)',\\n      'color-mix(in hsl, yellow, yellow)',\\n    ]);\\n  });\\n});\\n\"]}");

/***/ })

}]);