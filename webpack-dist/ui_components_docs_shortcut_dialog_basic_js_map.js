(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_shortcut_dialog_basic_js_map"],{

/***/ "./ui/components/docs/shortcut_dialog/basic.js.map":
/*!*********************************************************!*\
  !*** ./ui/components/docs/shortcut_dialog/basic.js.map ***!
  \*********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/shortcut_dialog/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,gBAAgB,MAAM,2DAA2D,CAAC;AAC9F,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC,CAAE,iDAAiD;AAChI,OAAO,KAAK,OAAO,MAAM,8CAA8C,CAAC;AAExE,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,cAAc,GAAG,IAAI,OAAO,CAAC,cAAc,CAAC,cAAc,EAAE,CAAC;AACnE,cAAc,CAAC,IAAI,GAAG;IACpB,SAAS,EAAE;QACT;YACE,KAAK,EAAE,sBAAsB;YAC7B,QAAQ,EAAE,CAAC,QAAQ,CAAC;SACrB;QACD;YACE,KAAK,EAAE,uBAAuB;YAC9B,QAAQ,EAAE,CAAC,YAAY,EAAE,IAAI,CAAC;SAC/B;KACF;CACF,CAAC;AACF,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,cAAc,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as ComponentHelpers from '../../../../../front_end/ui/components/helpers/helpers.js';\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';  // eslint-disable-line rulesdir/es_modules_import\\nimport * as Dialogs from '../../../../ui/components/dialogs/dialogs.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst shortcutDialog = new Dialogs.ShortcutDialog.ShortcutDialog();\\nshortcutDialog.data = {\\n  shortcuts: [\\n    {\\n      title: 'First Shortcut Title',\\n      bindings: ['Ctrl+E'],\\n    },\\n    {\\n      title: 'Second Shortcut Title',\\n      bindings: ['Ctrl+Enter', 'F8'],\\n    },\\n  ],\\n};\\ndocument.getElementById('container')?.appendChild(shortcutDialog);\\n\"]}");

/***/ })

}]);