(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_recorder_recording_list_view_basic_js_map"],{

/***/ "./ui/components/docs/recorder_recording_list_view/basic.js.map":
/*!**********************************************************************!*\
  !*** ./ui/components/docs/recorder_recording_list_view/basic.js.map ***!
  \**********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/recorder_recording_list_view/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,gBAAgB,MAAM,2DAA2D,CAAC;AAC9F,OAAO,KAAK,kBAAkB,MAAM,sDAAsD,CAAC;AAC3F,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC,CAAE,iDAAiD;AAEhI,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,SAAS,GAAG,IAAI,kBAAkB,CAAC,iBAAiB,CAAC,iBAAiB,EAAE,CAAC;AAC/E,SAAS,CAAC,UAAU,GAAG;IACrB;QACE,WAAW,EAAE,GAAG;QAChB,IAAI,EAAE,SAAS;KAChB;IACD;QACE,WAAW,EAAE,GAAG;QAChB,IAAI,EAAE,SAAS;KAChB;CACF,CAAC;AACF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as ComponentHelpers from '../../../../../front_end/ui/components/helpers/helpers.js';\\nimport * as RecorderComponents from '../../../../panels/recorder/components/components.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';  // eslint-disable-line rulesdir/es_modules_import\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst component = new RecorderComponents.RecordingListView.RecordingListView();\\ncomponent.recordings = [\\n  {\\n    storageName: '1',\\n    name: 'Title 1',\\n  },\\n  {\\n    storageName: '2',\\n    name: 'Title 2',\\n  },\\n];\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}");

/***/ })

}]);