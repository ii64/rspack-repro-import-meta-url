(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_ElementsBreadcrumbsUtils_js_map"],{

/***/ "./panels/elements/components/ElementsBreadcrumbsUtils.js.map":
/*!********************************************************************!*\
  !*** ./panels/elements/components/ElementsBreadcrumbsUtils.js.map ***!
  \********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ElementsBreadcrumbsUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/ElementsBreadcrumbsUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,4BAA4B,CAAC;AAInD,MAAM,SAAS,GAAG;IAChB;;;OAGG;IACH,IAAI,EAAE,QAAQ;CACf,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,wDAAwD,EAAE,SAAS,CAAC,CAAC;AAC9G,MAAM,UAAU,GAAG,IAAI,CAAC,IAAI,CAAC,kBAAkB,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAgBtE,MAAM,CAAC,MAAM,cAAc,GAAG,CAAC,MAA0B,EAAE,YAAoC,EAAW,EAAE;IAC1G,IAAI,CAAC,YAAY,EAAE,CAAC;QAClB,OAAO,EAAE,CAAC;IACZ,CAAC;IAED,OAAO,MAAM;SACR,MAAM,CAAC,KAAK,CAAC,EAAE;QACd,OAAO,KAAK,CAAC,QAAQ,KAAK,IAAI,CAAC,aAAa,CAAC;IAC/C,CAAC,CAAC;SACD,GAAG,CAAC,KAAK,CAAC,EAAE;QACX,OAAO;YACL,KAAK,EAAE,qBAAqB,CAAC,KAAK,CAAC;YACnC,QAAQ,EAAE,KAAK,CAAC,EAAE,KAAK,YAAY,CAAC,EAAE;YACtC,IAAI,EAAE,KAAK;YACX,YAAY,EAAE,KAAK,CAAC,aAAa;SAClC,CAAC;IACJ,CAAC,CAAC;SACD,OAAO,EAAE,CAAC;AACjB,CAAC,CAAC;AAEF,MAAM,cAAc,GAAG,CAAC,IAAY,EAAE,MAAM,GAAG,EAAE,EAAc,EAAE;IAC/D,OAAO;QACL,IAAI;QACJ,MAAM;KACP,CAAC;AACJ,CAAC,CAAC;AAEF,MAAM,CAAC,MAAM,qBAAqB,GAAG,CAAC,OAAgB,EAAc,EAAE;IACpE,QAAQ,OAAO,CAAC,QAAQ,EAAE,CAAC;QACzB,KAAK,IAAI,CAAC,YAAY,CAAC,CAAC,CAAC;YACvB,IAAI,OAAO,CAAC,UAAU,EAAE,CAAC;gBACvB,OAAO,cAAc,CAAC,IAAI,GAAG,OAAO,CAAC,UAAU,CAAC,CAAC;YACnD,CAAC;YACD,MAAM,UAAU,GAAG,cAAc,CAAC,OAAO,CAAC,mBAAmB,CAAC,CAAC;YAE/D,MAAM,EAAE,GAAG,OAAO,CAAC,YAAY,CAAC,IAAI,CAAC,CAAC;YACtC,IAAI,EAAE,EAAE,CAAC;gBACP,UAAU,CAAC,MAAM,CAAC,EAAE,GAAG,EAAE,CAAC;YAC5B,CAAC;YAED,MAAM,cAAc,GAAG,OAAO,CAAC,YAAY,CAAC,OAAO,CAAC,CAAC;YACrD,IAAI,cAAc,EAAE,CAAC;gBACnB,MAAM,OAAO,GAAG,IAAI,GAAG,CAAC,cAAc,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC,CAAC;gBACrD,UAAU,CAAC,MAAM,CAAC,OAAO,GAAG,KAAK,CAAC,IAAI,CAAC,OAAO,CAAC,CAAC;YAClD,CAAC;YAED,OAAO,UAAU,CAAC;QACpB,CAAC;QAED,KAAK,IAAI,CAAC,SAAS;YACjB,OAAO,cAAc,CAAC,UAAU,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC,CAAC;QACpD,KAAK,IAAI,CAAC,YAAY;YACpB,OAAO,cAAc,CAAC,OAAO,CAAC,CAAC;QACjC,KAAK,IAAI,CAAC,kBAAkB;YAC1B,OAAO,cAAc,CAAC,YAAY,CAAC,CAAC;QACtC,KAAK,IAAI,CAAC,sBAAsB;YAC9B,OAAO,cAAc,CAAC,OAAO,CAAC,cAAc,CAAC,CAAC,CAAC,cAAc,CAAC,CAAC,CAAC,OAAO,CAAC,mBAAmB,CAAC,CAAC;QAC/F;YACE,OAAO,cAAc,CAAC,OAAO,CAAC,mBAAmB,CAAC,CAAC;IACvD,CAAC;AACH,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../../core/i18n/i18n.js';\\n\\nimport {type DOMNode} from './Helper.js';\\n\\nconst UIStrings = {\\n  /**\\n   * @description Text in Elements Breadcrumbs of the Elements panel. Indicates that a HTML element\\n   * is a text node, meaning it contains text only and no other HTML elements. Should be translatd.\\n   */\\n  text: '(text)',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/elements/components/ElementsBreadcrumbsUtils.ts', UIStrings);\\nconst i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);\\n\\nexport type UserScrollPosition = 'start'|'middle'|'end';\\n\\nexport interface Crumb {\\n  title: CrumbTitle;\\n  selected: boolean;\\n  node: DOMNode;\\n  originalNode: unknown;\\n}\\n\\nexport interface CrumbTitle {\\n  main: string;\\n  extras: {id?: string, classes?: string[]};\\n}\\n\\nexport const crumbsToRender = (crumbs: readonly DOMNode[], selectedNode: Readonly<DOMNode>|null): Crumb[] => {\\n  if (!selectedNode) {\\n    return [];\\n  }\\n\\n  return crumbs\\n      .filter(crumb => {\\n        return crumb.nodeType !== Node.DOCUMENT_NODE;\\n      })\\n      .map(crumb => {\\n        return {\\n          title: determineElementTitle(crumb),\\n          selected: crumb.id === selectedNode.id,\\n          node: crumb,\\n          originalNode: crumb.legacyDomNode,\\n        };\\n      })\\n      .reverse();\\n};\\n\\nconst makeCrumbTitle = (main: string, extras = {}): CrumbTitle => {\\n  return {\\n    main,\\n    extras,\\n  };\\n};\\n\\nexport const determineElementTitle = (domNode: DOMNode): CrumbTitle => {\\n  switch (domNode.nodeType) {\\n    case Node.ELEMENT_NODE: {\\n      if (domNode.pseudoType) {\\n        return makeCrumbTitle('::' + domNode.pseudoType);\\n      }\\n      const crumbTitle = makeCrumbTitle(domNode.nodeNameNicelyCased);\\n\\n      const id = domNode.getAttribute('id');\\n      if (id) {\\n        crumbTitle.extras.id = id;\\n      }\\n\\n      const classAttribute = domNode.getAttribute('class');\\n      if (classAttribute) {\\n        const classes = new Set(classAttribute.split(/\\\\s+/));\\n        crumbTitle.extras.classes = Array.from(classes);\\n      }\\n\\n      return crumbTitle;\\n    }\\n\\n    case Node.TEXT_NODE:\\n      return makeCrumbTitle(i18nString(UIStrings.text));\\n    case Node.COMMENT_NODE:\\n      return makeCrumbTitle('<!-->');\\n    case Node.DOCUMENT_TYPE_NODE:\\n      return makeCrumbTitle('<!doctype>');\\n    case Node.DOCUMENT_FRAGMENT_NODE:\\n      return makeCrumbTitle(domNode.shadowRootType ? '#shadow-root' : domNode.nodeNameNicelyCased);\\n    default:\\n      return makeCrumbTitle(domNode.nodeNameNicelyCased);\\n  }\\n};\\n\"]}");

/***/ })

}]);