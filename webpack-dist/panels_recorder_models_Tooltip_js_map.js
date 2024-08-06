(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_models_Tooltip_js_map"],{

/***/ "./panels/recorder/models/Tooltip.js.map":
/*!***********************************************!*\
  !*** ./panels/recorder/models/Tooltip.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Tooltip.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/models/Tooltip.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,EAAE,MAAM,8BAA8B,CAAC;AAEnD,MAAM,UAAU,oBAAoB,CAChC,WAAmD,EACnD,MAAc;IAEhB,IAAI,KAAK,GAAW,WAAW,CAAC;IAChC,MAAM,SAAS,GAAG,EAAE,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,QAAQ,EAAE,CAAC,kBAAkB,CAAC,MAAM,CAAC,CAAC;IAE7F,KAAK,MAAM,QAAQ,IAAI,SAAS,EAAE,CAAC;QACjC,KAAK,IAAI,MAAM,QAAQ,CAAC,KAAK,EAAE,EAAE,CAAC;IACpC,CAAC;IAED,OAAO,KAAK,CAAC;AACf,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../../core/common/common.js';\\nimport * as UI from '../../../ui/legacy/legacy.js';\\n\\nexport function getTooltipForActions(\\n    translation: string|Common.UIString.LocalizedString,\\n    action: string,\\n    ): string {\\n  let title: string = translation;\\n  const shortcuts = UI.ShortcutRegistry.ShortcutRegistry.instance().shortcutsForAction(action);\\n\\n  for (const shortcut of shortcuts) {\\n    title += ` - ${shortcut.title()}`;\\n  }\\n\\n  return title;\\n}\\n\"]}");

/***/ })

}]);