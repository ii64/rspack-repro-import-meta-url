(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_elements_breadcrumbs_helpers_js_map"],{

/***/ "./ui/components/docs/elements_breadcrumbs/helpers.js.map":
/*!****************************************************************!*\
  !*** ./ui/components/docs/elements_breadcrumbs/helpers.js.map ***!
  \****************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"helpers.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/elements_breadcrumbs/helpers.ts\"],\"names\":[],\"mappings\":\"AAUA,IAAI,EAAE,GAAG,CAAC,CAAC;AACX,MAAM,CAAC,MAAM,SAAS,GAAG,CAAC,YAA4B,EAAE,EAAE,EAAE;IAC1D,MAAM,UAAU,GAAG,SAAS,CAAC,UAAU,IAAI,EAAE,CAAC;IAC9C,MAAM,QAAQ,GAA4B;QACxC,QAAQ,EAAE,IAAI,CAAC,YAAY;QAC3B,EAAE,EAAE,EAAE,EAAE;QACR,UAAU,EAAE,EAAE;QACd,UAAU,EAAE,IAAI;QAChB,cAAc,EAAE,EAAE;QAClB,QAAQ,EAAE,MAAM;QAChB,mBAAmB,EAAE,MAAM;QAC3B,aAAa,EAAE,EAAqC;QACpD,aAAa,EAAE,GAAG,EAAE,GAAE,CAAC;QACvB,cAAc,EAAE,GAAG,EAAE,GAAE,CAAC;QACxB,YAAY,EAAE,CAAC,CAAS,EAAE,EAAE,CAAC,UAAU,CAAC,CAAC,CAAC,IAAI,EAAE;QAChD,GAAG,SAAS;KACb,CAAC;IACF,OAAO,QAAQ,CAAC;AAClB,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport type * as Elements from '../../../../panels/elements/components/components.js';\\nimport type * as SDK from '../../../../core/sdk/sdk.js';\\n\\ninterface CrumbOverrides extends Partial<Elements.Helper.DOMNode> {\\n  attributes?: {[x: string]: string|undefined};\\n}\\n\\nlet id = 0;\\nexport const makeCrumb = (overrides: CrumbOverrides = {}) => {\\n  const attributes = overrides.attributes || {};\\n  const newCrumb: Elements.Helper.DOMNode = {\\n    nodeType: Node.ELEMENT_NODE,\\n    id: id++,\\n    pseudoType: '',\\n    parentNode: null,\\n    shadowRootType: '',\\n    nodeName: 'body',\\n    nodeNameNicelyCased: 'body',\\n    legacyDomNode: {} as unknown as SDK.DOMModel.DOMNode,\\n    highlightNode: () => {},\\n    clearHighlight: () => {},\\n    getAttribute: (x: string) => attributes[x] || '',\\n    ...overrides,\\n  };\\n  return newCrumb;\\n};\\n\"]}");

/***/ })

}]);