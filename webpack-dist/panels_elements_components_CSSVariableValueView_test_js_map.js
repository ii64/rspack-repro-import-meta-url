(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_CSSVariableValueView_test_js_map"],{

/***/ "./panels/elements/components/CSSVariableValueView.test.js.map":
/*!*********************************************************************!*\
  !*** ./panels/elements/components/CSSVariableValueView.test.js.map ***!
  \*********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"CSSVariableValueView.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/CSSVariableValueView.test.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,oBAAoB,EAAC,MAAM,gCAAgC,CAAC;AACpE,OAAO,EAAC,uBAAuB,EAAC,MAAM,wCAAwC,CAAC;AAE/E,OAAO,KAAK,kBAAkB,MAAM,iBAAiB,CAAC;AAEtD,uBAAuB,CAAC,sBAAsB,EAAE,GAAG,EAAE;IACnD,EAAE,CAAC,uBAAuB,EAAE,GAAG,EAAE;QAC/B,MAAM,IAAI,GAAG,IAAI,kBAAkB,CAAC,oBAAoB,CAAC,oBAAoB,CAAC;YAC5E,YAAY,EAAE,YAAY;YAC1B,KAAK,EAAE,MAAM;SACd,CAAC,CAAC;QACH,oBAAoB,CAAC,IAAI,CAAC,CAAC;QAE3B,MAAM,CAAC,WAAW,CAAC,IAAI,CAAC,UAAW,CAAC,aAAa,CAAC,+BAA+B,CAAE,CAAC,WAAY,CAAC,IAAI,EAAE,EAAE,MAAM,CAAC,CAAC;IACnH,CAAC,CAAC,CAAC;AACL,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {renderElementIntoDOM} from '../../../testing/DOMHelpers.js';\\nimport {describeWithEnvironment} from '../../../testing/EnvironmentHelpers.js';\\n\\nimport * as ElementsComponents from './components.js';\\n\\ndescribeWithEnvironment('CSSVariableValueView', () => {\\n  it('renders right tooltip', () => {\\n    const view = new ElementsComponents.CSSVariableValueView.CSSVariableValueView({\\n      variableName: '--var-name',\\n      value: 'pink',\\n    });\\n    renderElementIntoDOM(view);\\n\\n    assert.strictEqual(view.shadowRoot!.querySelector('.variable-value-popup-wrapper')!.textContent!.trim(), 'pink');\\n  });\\n});\\n\"]}");

/***/ })

}]);