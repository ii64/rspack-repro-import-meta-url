(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_panel_feedback_button_js_map"],{

/***/ "./ui/components/docs/panel_feedback/button.js.map":
/*!*********************************************************!*\
  !*** ./ui/components/docs/panel_feedback/button.js.map ***!
  \*********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"button.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/panel_feedback/button.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,aAAa,MAAM,sDAAsD,CAAC;AACtF,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,SAAS,GAAG,IAAI,aAAa,CAAC,cAAc,CAAC,cAAc,EAAE,CAAC;AAEpE,SAAS,CAAC,IAAI,GAAG;IACf,WAAW,EAAE,yBAA4D;CAC1E,CAAC;AAEF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Platform from '../../../../core/platform/platform.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as PanelFeedback from '../../../components/panel_feedback/panel_feedback.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst component = new PanelFeedback.FeedbackButton.FeedbackButton();\\n\\ncomponent.data = {\\n  feedbackUrl: 'https://www.example.com' as Platform.DevToolsPath.UrlString,\\n};\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}");

/***/ })

}]);