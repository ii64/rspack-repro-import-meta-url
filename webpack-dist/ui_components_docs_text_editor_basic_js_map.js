(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_text_editor_basic_js_map"],{

/***/ "./ui/components/docs/text_editor/basic.js.map":
/*!*****************************************************!*\
  !*** ./ui/components/docs/text_editor/basic.js.map ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/text_editor/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAC7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAC7D,OAAO,KAAK,UAAU,MAAM,kCAAkC,CAAC;AAE/D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,SAAS,GAAG,IAAI,UAAU,CAAC,UAAU,CAAC,UAAU,EAAE,CAAC;AAEzD,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\nimport * as TextEditor from '../../text_editor/text_editor.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst component = new TextEditor.TextEditor.TextEditor();\\n\\ndocument.getElementById('container')?.appendChild(component);\\n\"]}");

/***/ })

}]);