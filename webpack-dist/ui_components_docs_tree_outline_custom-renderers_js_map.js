(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_tree_outline_custom-renderers_js_map"],{

/***/ "./ui/components/docs/tree_outline/custom-renderers.js.map":
/*!*****************************************************************!*\
  !*** ./ui/components/docs/tree_outline/custom-renderers.js.map ***!
  \*****************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"custom-renderers.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/tree_outline/custom-renderers.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,OAAO,MAAM,+BAA+B,CAAC;AACzD,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAC7D,OAAO,KAAK,WAAW,MAAM,oCAAoC,CAAC;AAElE,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAO7C,MAAM,IAAI,GAA0D;IAClE,eAAe,EAAE,CAAC,IAAI,EAAE,KAAK,EAAE,EAAE;QAC/B,MAAM,EAAC,WAAW,EAAE,QAAQ,EAAC,GAAG,IAAI,CAAC,YAAY,CAAC;QAClD,MAAM,WAAW,GAAG,OAAO,CAAC,UAAU,CAAC,QAAQ,CAAC;YAC9C,WAAW,EAAE,MAAM;YACnB,SAAS,EAAE,QAAQ;YACnB,KAAK,EAAE,yCAAyC;SACjD,CAAC,CAAC;QACH,OAAO,OAAO,CAAC,IAAI,CAAA,SAAS,WAAW,WACnC,KAAK,CAAC,UAAU,CAAC,CAAC,CAAC,OAAO,CAAC,OAAO,CAAC,CAAC,CAAC,OAAO,CAAC,IAAI,CAAA,eAAe,WAAW,IAAI,QAAQ,SAAS,EAAE,CAAC;IACzG,CAAC;IACD,IAAI,EAAE;QACJ;YACE,YAAY,EAAE,EAAC,WAAW,EAAE,QAAQ,EAAE,QAAQ,EAAE,eAAe,EAAC;YAChE,EAAE,EAAE,GAAG;SACR;QACD;YACE,YAAY,EAAE,EAAC,WAAW,EAAE,WAAW,EAAE,QAAQ,EAAE,MAAM,EAAC;YAC1D,EAAE,EAAE,GAAG;SACR;QACD;YACE,YAAY,EAAE,EAAC,WAAW,EAAE,QAAQ,EAAE,QAAQ,EAAE,UAAU,EAAC;YAC3D,EAAE,EAAE,GAAG;YACP,KAAK,CAAC,QAAQ;gBACZ,OAAO;oBACL,EAAC,YAAY,EAAE,EAAC,WAAW,EAAE,aAAa,EAAE,QAAQ,EAAE,KAAK,EAAC,EAAE,EAAE,EAAE,GAAG,EAAC;oBACtE,EAAC,YAAY,EAAE,EAAC,WAAW,EAAE,cAAc,EAAE,QAAQ,EAAE,KAAK,EAAC,EAAE,EAAE,EAAE,GAAG,EAAC;oBACvE,EAAC,YAAY,EAAE,EAAC,WAAW,EAAE,YAAY,EAAE,QAAQ,EAAE,MAAM,EAAC,EAAE,EAAE,EAAE,GAAG,EAAC;oBACtE,EAAC,YAAY,EAAE,EAAC,WAAW,EAAE,eAAe,EAAE,QAAQ,EAAE,MAAM,EAAC,EAAE,EAAE,EAAE,GAAG,EAAC;iBAC1E,CAAC;YACJ,CAAC;SACF;KACF;CACF,CAAC;AAEF,MAAM,SAAS,GAAG,IAAI,WAAW,CAAC,WAAW,CAAC,WAAW,EAAgB,CAAC;AAC1E,SAAS,CAAC,IAAI,GAAG,IAAI,CAAC;AAEtB,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAC7D,QAAQ,CAAC,cAAc,CAAC,oBAAoB,CAAC,EAAE,gBAAgB,CAAC,OAAO,EAAE,GAAG,EAAE;IAC5E,KAAK,SAAS,CAAC,iBAAiB,EAAE,CAAC;AACrC,CAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as LitHtml from '../../../lit-html/lit-html.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\nimport * as TreeOutline from '../../tree_outline/tree_outline.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\ninterface TreeNodeData {\\n  cssProperty: string;\\n  cssValue: string;\\n}\\n\\nconst data: TreeOutline.TreeOutline.TreeOutlineData<TreeNodeData> = {\\n  defaultRenderer: (node, state) => {\\n    const {cssProperty, cssValue} = node.treeNodeData;\\n    const valueStyles = LitHtml.Directives.styleMap({\\n      paddingLeft: '10px',\\n      fontStyle: 'italic',\\n      color: 'var(--sys-color-token-property-special)',\\n    });\\n    return LitHtml.html`<code>${cssProperty}</code>:${\\n        state.isExpanded ? LitHtml.nothing : LitHtml.html`<code style=${valueStyles}>${cssValue}</code>`}`;\\n  },\\n  tree: [\\n    {\\n      treeNodeData: {cssProperty: 'border', cssValue: '1px solid red'},\\n      id: '1',\\n    },\\n    {\\n      treeNodeData: {cssProperty: 'font-size', cssValue: '20px'},\\n      id: '2',\\n    },\\n    {\\n      treeNodeData: {cssProperty: 'margin', cssValue: '10px 5px'},\\n      id: '3',\\n      async children(): Promise<TreeOutline.TreeOutlineUtils.TreeNode<TreeNodeData>[]> {\\n        return [\\n          {treeNodeData: {cssProperty: 'margin-left', cssValue: '5px'}, id: '4'},\\n          {treeNodeData: {cssProperty: 'margin-right', cssValue: '5px'}, id: '5'},\\n          {treeNodeData: {cssProperty: 'margin-top', cssValue: '10px'}, id: '6'},\\n          {treeNodeData: {cssProperty: 'margin-bottom', cssValue: '10px'}, id: '7'},\\n        ];\\n      },\\n    },\\n  ],\\n};\\n\\nconst component = new TreeOutline.TreeOutline.TreeOutline<TreeNodeData>();\\ncomponent.data = data;\\n\\ndocument.getElementById('container')?.appendChild(component);\\ndocument.getElementById('recursively-expand')?.addEventListener('click', () => {\\n  void component.expandRecursively();\\n});\\n\"]}");

/***/ })

}]);