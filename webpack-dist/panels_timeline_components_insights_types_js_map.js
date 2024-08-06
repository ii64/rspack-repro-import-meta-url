(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_timeline_components_insights_types_js_map"],{

/***/ "./panels/timeline/components/insights/types.js.map":
/*!**********************************************************!*\
  !*** ./panels/timeline/components/insights/types.js.map ***!
  \**********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"types.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/panels/timeline/components/insights/types.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,MAAM,CAAN,IAAY,kBAMX;AAND,WAAY,kBAAkB;IAC5B,iCAAW,CAAA;IACX,iCAAW,CAAA;IACX,iCAAW,CAAA;IACX,iCAAW,CAAA;IACX,qCAAe,CAAA;AACjB,CAAC,EANW,kBAAkB,KAAlB,kBAAkB,QAM7B\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Overlays from '../../overlays/overlays.js';\\n\\nexport enum InsightsCategories {\\n  ALL = 'All',\\n  INP = 'INP',\\n  LCP = 'LCP',\\n  CLS = 'CLS',\\n  OTHER = 'Other',\\n}\\n\\nexport interface ActiveInsight {\\n  name: string;\\n  navigationId: string;\\n  createOverlayFn: (() => Overlays.Overlays.TimelineOverlay[]);\\n}\\n\"]}");

/***/ })

}]);