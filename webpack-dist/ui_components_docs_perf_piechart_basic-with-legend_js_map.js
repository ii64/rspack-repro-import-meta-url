(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_perf_piechart_basic-with-legend_js_map"],{

/***/ "./ui/components/docs/perf_piechart/basic-with-legend.js.map":
/*!*******************************************************************!*\
  !*** ./ui/components/docs/perf_piechart/basic-with-legend.js.map ***!
  \*******************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic-with-legend.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/perf_piechart/basic-with-legend.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,MAAM,MAAM,+CAA+C,CAAC;AAExE,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,KAAK,GAAG,IAAI,MAAM,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;AAC7C,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,KAAK,CAAC,CAAC;AAEzD,KAAK,CAAC,IAAI,GAAG;IACX,SAAS,EAAE,YAAY;IACvB,IAAI,EAAE,GAAG;IACT,SAAS,EAAE,KAAK,CAAC,EAAE,CAAC,MAAM,CAAC,KAAK,CAAC,GAAG,IAAI;IACxC,UAAU,EAAE,IAAI;IAChB,KAAK,EAAE,GAAG;IACV,MAAM,EAAE,CAAC,EAAC,KAAK,EAAE,EAAE,EAAE,KAAK,EAAE,SAAS,EAAE,KAAK,EAAE,SAAS,EAAC,EAAE,EAAC,KAAK,EAAE,EAAE,EAAE,KAAK,EAAE,WAAW,EAAE,KAAK,EAAE,OAAO,EAAC,CAAC;CAC3G,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as PerfUI from '../../../legacy/components/perf_ui/perf_ui.js';\\n\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst chart = new PerfUI.PieChart.PieChart();\\ndocument.getElementById('container')?.appendChild(chart);\\n\\nchart.data = {\\n  chartName: 'Nice Chart',\\n  size: 110,\\n  formatter: value => String(value) + ' %',\\n  showLegend: true,\\n  total: 100,\\n  slices: [{value: 75, color: 'crimson', title: 'Filling'}, {value: 25, color: 'burlywood', title: 'Crust'}],\\n};\\n\"]}");

/***/ })

}]);