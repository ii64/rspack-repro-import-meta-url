(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_markdown_link_basic_js_map"],{

/***/ "./ui/components/docs/markdown_link/basic.js.map":
/*!*******************************************************!*\
  !*** ./ui/components/docs/markdown_link/basic.js.map ***!
  \*******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/markdown_link/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAC7D,OAAO,KAAK,YAAY,MAAM,sCAAsC,CAAC;AAErE,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,YAAY,CAAC,gBAAgB,CAAC,aAAa,CAAC,GAAG,CAAC,UAAU,EAAE,sBAAsB,CAAC,CAAC;AAEpF,MAAM,IAAI,GAAG,IAAI,YAAY,CAAC,YAAY,CAAC,YAAY,EAAE,CAAC;AAC1D,QAAQ,CAAC,cAAc,CAAC,QAAQ,CAAC,EAAE,WAAW,CAAC,IAAI,CAAC,CAAC;AACrD,IAAI,CAAC,IAAI,GAAG;IACV,GAAG,EAAE,UAAU;IACf,KAAK,EAAE,iBAAiB;CACzB,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\nimport * as MarkdownView from '../../markdown_view/markdown_view.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nMarkdownView.MarkdownLinksMap.markdownLinks.set('textLink', 'https://example.com/');\\n\\nconst link = new MarkdownView.MarkdownLink.MarkdownLink();\\ndocument.getElementById('target')?.appendChild(link);\\nlink.data = {\\n  key: 'textLink',\\n  title: 'Test link title',\\n};\\n\"]}");

/***/ })

}]);