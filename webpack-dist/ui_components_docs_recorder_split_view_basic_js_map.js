(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_recorder_split_view_basic_js_map"],{

/***/ "./ui/components/docs/recorder_split_view/basic.js.map":
/*!*************************************************************!*\
  !*** ./ui/components/docs/recorder_split_view/basic.js.map ***!
  \*************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/recorder_split_view/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,sDAAsD,CAAC;AAE9D,OAAO,KAAK,gBAAgB,MAAM,2DAA2D,CAAC;AAC9F,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC,CAAE,iDAAiD;AAEhI,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE5C,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAiB,CAAC,SAAS,GAAG;;;;;;;;;CASjE,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport '../../../../panels/recorder/components/components.js';\\n\\nimport * as ComponentHelpers from '../../../../../front_end/ui/components/helpers/helpers.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';  // eslint-disable-line rulesdir/es_modules_import\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\n(document.getElementById('container') as HTMLElement).innerHTML = `\\n    <devtools-split-view>\\n        <div slot=\\\"main\\\" style=\\\"padding: 10px;\\\">\\n            Left\\n        </div>\\n        <div slot=\\\"sidebar\\\" style=\\\"padding: 10px;\\\">\\n            Sidebar\\n        </div>\\n    </devtools-split-view>\\n`;\\n\"]}");

/***/ })

}]);