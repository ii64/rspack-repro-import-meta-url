(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_Helper_js_map"], {
"./panels/elements/components/Helper.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Helper.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/Helper.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,0BAA0B,CAAC;AAgBhD,MAAM,CAAC,MAAM,kCAAkC,GAAG,CAAC,IAA0B,EAAW,EAAE;IACxF,OAAO;QACL,UAAU,EAAE,IAAI,CAAC,UAAU,CAAC,CAAC,CAAC,kCAAkC,CAAC,IAAI,CAAC,UAAU,CAAC,CAAC,CAAC,CAAC,IAAI;QACxF,EAAE,EAAG,IAAI,CAAC,EAAa;QACvB,QAAQ,EAAE,IAAI,CAAC,QAAQ,EAAE;QACzB,UAAU,EAAE,IAAI,CAAC,UAAU,EAAE;QAC7B,cAAc,EAAE,IAAI,CAAC,cAAc,EAAE;QACrC,QAAQ,EAAE,IAAI,CAAC,QAAQ,EAAE;QACzB,mBAAmB,EAAE,IAAI,CAAC,qBAAqB,EAAE;QACjD,aAAa,EAAE,IAAI;QACnB,aAAa,EAAE,CAAC,IAAa,EAAE,EAAE,CAAC,IAAI,CAAC,SAAS,CAAC,IAAI,CAAC;QACtD,cAAc,EAAE,GAAG,EAAE,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,oBAAoB,EAAE;QAC1E,YAAY,EAAE,IAAI,CAAC,YAAY,CAAC,IAAI,CAAC,IAAI,CAAC;KAC3C,CAAC;AACJ,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../../core/sdk/sdk.js';\\n\\nexport interface DOMNode {\\n  parentNode: DOMNode|null;\\n  id: number;\\n  nodeType: number;\\n  pseudoType?: string;\\n  shadowRootType: string|null;\\n  nodeName: string;\\n  nodeNameNicelyCased: string;\\n  legacyDomNode: SDK.DOMModel.DOMNode;\\n  highlightNode: (mode?: string) => void;\\n  clearHighlight: () => void;\\n  getAttribute: (attr: string) => string | undefined;\\n}\\n\\nexport const legacyNodeToElementsComponentsNode = (node: SDK.DOMModel.DOMNode): DOMNode => {\\n  return {\\n    parentNode: node.parentNode ? legacyNodeToElementsComponentsNode(node.parentNode) : null,\\n    id: (node.id as number),\\n    nodeType: node.nodeType(),\\n    pseudoType: node.pseudoType(),\\n    shadowRootType: node.shadowRootType(),\\n    nodeName: node.nodeName(),\\n    nodeNameNicelyCased: node.nodeNameInCorrectCase(),\\n    legacyDomNode: node,\\n    highlightNode: (mode?: string) => node.highlight(mode),\\n    clearHighlight: () => SDK.OverlayModel.OverlayModel.hideDOMNodeHighlight(),\\n    getAttribute: node.getAttribute.bind(node),\\n  };\\n};\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);