(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_create_breadcrumbs_js_map"],{

/***/ "./ui/components/docs/create_breadcrumbs.js.map":
/*!******************************************************!*\
  !*** ./ui/components/docs/create_breadcrumbs.js.map ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"create_breadcrumbs.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/ui/components/docs/create_breadcrumbs.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAC7B,OAAO,KAAK,OAAO,MAAM,4BAA4B,CAAC;AAEtD,MAAM,UAAU,IAAI;IAClB,MAAM,SAAS,GAAG,QAAQ,CAAC,aAAa,CAAC,IAAI,CAAC,CAAC;IAC/C,mBAAmB;IACnB,2DAA2D;IAC3D,OAAO,CAAC,MAAM,CAAC,OAAO,CAAC,IAAI,CAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;QA4BrB,EAAE,SAAS,CAAC,CAAC;IACnB,kBAAkB;IAElB,QAAQ,CAAC,IAAI,CAAC,WAAW,CAAC,SAAS,CAAC,CAAC;AACvC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport * as LitHtml from '../../lit-html/lit-html.js';\\n\\nexport function init(): void {\\n  const container = document.createElement('ul');\\n  // clang-format off\\n  // eslint-disable-next-line rulesdir/ban_a_tags_in_lit_html\\n  LitHtml.render(LitHtml.html`\\n\\n  <style>\\n    .docs-breadcrumbs {\\n      display: flex;\\n      list-style: none;\\n      position: fixed;\\n      background: rgb(255 255 255 / .8);\\n      padding: 5px;\\n      bottom: 0;\\n      left: 10px;\\n      width: 300px;\\n    }\\n\\n    .docs-breadcrumbs li a {\\n      display: block;\\n      padding: 10px;\\n      font-size: 16px;\\n    }\\n\\n    .docs-breadcrumbs span {\\n      font-size: 20px;\\n    }\\n  </style>\\n\\n  <ul class=\\\"docs-breadcrumbs component-docs-ui\\\">\\n    <li><a href=\\\"/\\\">Index</a></li>\\n    <li><a href=\\\".\\\">All component examples</a></li>\\n  </ul>`, container);\\n  // clang-format on\\n\\n  document.body.appendChild(container);\\n}\\n\"]}");

/***/ })

}]);