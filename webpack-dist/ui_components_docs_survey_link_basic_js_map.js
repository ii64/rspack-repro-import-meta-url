(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_survey_link_basic_js_map"],{

/***/ "./ui/components/docs/survey_link/basic.js.map":
/*!*****************************************************!*\
  !*** ./ui/components/docs/survey_link/basic.js.map ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/survey_link/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,mCAAmC,CAAC;AAC5D,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAC7D,OAAO,KAAK,UAAU,MAAM,kCAAkC,CAAC;AAE/D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,IAAI,GAAG,IAAI,UAAU,CAAC,UAAU,CAAC,UAAU,EAAE,CAAC;AACpD,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,IAAI,CAAC,CAAC;AAExD,6FAA6F;AAC7F,8DAA8D;AAE9D,IAAI,CAAC,IAAI,GAAG;IACV,OAAO,EAAE,cAAc;IACvB,UAAU,EAAE,MAAM,CAAC,QAAQ,CAAC,oBAAoB;IAChD,aAAa,EAAE,CAAC,OAAO,EAAE,QAAQ,EAAE,EAAE;QACnC,UAAU,CAAC,QAAQ,CAAC,IAAI,CAAC,SAAS,EAAE,EAAC,aAAa,EAAE,IAAI,EAAC,CAAC,EAAE,GAAG,CAAC,CAAC;IACnE,CAAC;IACD,UAAU,EAAE,CAAC,OAAO,EAAE,QAAQ,EAAE,EAAE;QAChC,UAAU,CAAC,QAAQ,CAAC,IAAI,CAAC,SAAS,EAAE,EAAC,WAAW,EAAE,IAAI,EAAC,CAAC,EAAE,IAAI,CAAC,CAAC;IAClE,CAAC;CACF,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../../../core/common/common.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\nimport * as SurveyLink from '../../survey_link/survey_link.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst link = new SurveyLink.SurveyLink.SurveyLink();\\ndocument.getElementById('container')?.appendChild(link);\\n\\n// TODO(petermarshall): The icon doesn't render because importing sub-components cross-module\\n// is tricky. Add some more interesting examples once it does.\\n\\nlink.data = {\\n  trigger: 'test trigger',\\n  promptText: Common.UIString.LocalizedEmptyString,\\n  canShowSurvey: (trigger, callback) => {\\n    setTimeout(callback.bind(undefined, {canShowSurvey: true}), 500);\\n  },\\n  showSurvey: (trigger, callback) => {\\n    setTimeout(callback.bind(undefined, {surveyShown: true}), 1500);\\n  },\\n};\\n\"]}");

/***/ })

}]);