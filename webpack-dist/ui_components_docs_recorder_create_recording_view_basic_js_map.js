(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_recorder_create_recording_view_basic_js_map"],{

/***/ "./ui/components/docs/recorder_create_recording_view/basic.js.map":
/*!************************************************************************!*\
  !*** ./ui/components/docs/recorder_create_recording_view/basic.js.map ***!
  \************************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/recorder_create_recording_view/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,gBAAgB,MAAM,2DAA2D,CAAC;AAC9F,OAAO,KAAK,kBAAkB,MAAM,sDAAsD,CAAC;AAC3F,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC,CAAE,iDAAiD;AAEhI,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAC7C,KAAK,UAAU,uBAAuB;IACpC,MAAM,EAAE,GAAG,MAAM,MAAM,CAAC,8CAA8C,CAAC,CAAC;IACxE,MAAM,cAAc,GAAG,EAAE,CAAC,cAAc,CAAC,cAAc,CAAC,QAAQ,EAAE,CAAC;IACnE,EAAE,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,QAAQ,CAAC;QAC5C,QAAQ,EAAE,IAAI;QACd,cAAc;KACf,CAAC,CAAC;AACL,CAAC;AAED,MAAM,uBAAuB,EAAE,CAAC;AAEhC,MAAM,UAAU,GAAG,IAAI,kBAAkB,CAAC,mBAAmB,CAAC,mBAAmB,EAAE,CAAC;AACpF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,UAAU,CAAC,CAAC;AAE9D,MAAM,UAAU,GAAG,IAAI,kBAAkB,CAAC,mBAAmB,CAAC,mBAAmB,EAAE,CAAC;AACpF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,UAAU,CAAC,CAAC;AAC9D,UAAU,CAAC,UAAU,EAAE,aAAa,CAAC,yBAAyB,CAAC,EAAE,KAAK,EAAE,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as ComponentHelpers from '../../../../../front_end/ui/components/helpers/helpers.js';\\nimport * as RecorderComponents from '../../../../panels/recorder/components/components.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';  // eslint-disable-line rulesdir/es_modules_import\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\nasync function initializeGlobalActions(): Promise<void> {\\n  const UI = await import('../../../../../front_end/ui/legacy/legacy.js');\\n  const actionRegistry = UI.ActionRegistry.ActionRegistry.instance();\\n  UI.ShortcutRegistry.ShortcutRegistry.instance({\\n    forceNew: true,\\n    actionRegistry,\\n  });\\n}\\n\\nawait initializeGlobalActions();\\n\\nconst component1 = new RecorderComponents.CreateRecordingView.CreateRecordingView();\\ndocument.getElementById('container')?.appendChild(component1);\\n\\nconst component2 = new RecorderComponents.CreateRecordingView.CreateRecordingView();\\ndocument.getElementById('container')?.appendChild(component2);\\ncomponent2.shadowRoot?.querySelector('devtools-control-button')?.click();\\n\"]}");

/***/ })

}]);