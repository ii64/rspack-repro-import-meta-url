(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_computed_style_trace_basic_js_map"],{

/***/ "./ui/components/docs/computed_style_trace/basic.js.map":
/*!**************************************************************!*\
  !*** ./ui/components/docs/computed_style_trace/basic.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/computed_style_trace/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,sDAAsD,CAAC;AAEjF,MAAM,SAAS,GAAG,IAAI,QAAQ,CAAC,kBAAkB,CAAC,kBAAkB,EAAE,CAAC;AAEvE,MAAM,UAAU,GAAG,QAAQ,CAAC,aAAa,CAAC,MAAM,CAAC,CAAC;AAClD,UAAU,CAAC,WAAW,GAAG,OAAO,CAAC;AACjC,UAAU,CAAC,IAAI,GAAG,aAAa,CAAC;AAChC,SAAS,CAAC,WAAW,CAAC,UAAU,CAAC,CAAC;AAElC,MAAM,SAAS,GAAG,QAAQ,CAAC,aAAa,CAAC,MAAM,CAAC,CAAC;AACjD,SAAS,CAAC,WAAW,GAAG,uBAAuB,CAAC;AAChD,SAAS,CAAC,IAAI,GAAG,YAAY,CAAC;AAC9B,SAAS,CAAC,WAAW,CAAC,SAAS,CAAC,CAAC;AAEjC,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAC7D,SAAS,CAAC,IAAI,GAAG;IACf,QAAQ,EAAE,MAAM;IAChB,MAAM,EAAE,IAAI;IACZ,kBAAkB,EAAE,GAAG,EAAE,GAAE,CAAC;CAC7B,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Elements from '../../../../panels/elements/components/components.js';\\n\\nconst component = new Elements.ComputedStyleTrace.ComputedStyleTrace();\\n\\nconst traceValue = document.createElement('span');\\ntraceValue.textContent = 'block';\\ntraceValue.slot = 'trace-value';\\ncomponent.appendChild(traceValue);\\n\\nconst traceLink = document.createElement('span');\\ntraceLink.textContent = 'user agent stylesheet';\\ntraceLink.slot = 'trace-link';\\ncomponent.appendChild(traceLink);\\n\\ndocument.getElementById('container')?.appendChild(component);\\ncomponent.data = {\\n  selector: 'body',\\n  active: true,\\n  onNavigateToSource: () => {},\\n};\\n\"]}");

/***/ })

}]);