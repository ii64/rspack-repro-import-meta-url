(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_Tooltip_js_map"],{

/***/ "./ui/legacy/Tooltip.js.map":
/*!**********************************!*\
  !*** ./ui/legacy/Tooltip.js.map ***!
  \**********************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Tooltip.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/legacy/Tooltip.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,EAAC,gBAAgB,EAAC,MAAM,uBAAuB,CAAC;AAEvD,MAAM,OAAO,OAAO;IAClB,MAAM,CAAC,OAAO,CAAC,OAAoB,EAAE,cAA2B;QAC9D,OAAO,CAAC,KAAK,GAAG,cAAc,IAAI,EAAE,CAAC;IACvC,CAAC;IAED,MAAM,CAAC,wBAAwB,CAAC,OAAoB,EAAE,cAAsB,EAAE,QAAgB;QAC5F,IAAI,WAAW,GAAW,cAAc,CAAC;QACzC,MAAM,SAAS,GAAG,gBAAgB,CAAC,QAAQ,EAAE,CAAC,kBAAkB,CAAC,QAAQ,CAAC,CAAC;QAC3E,KAAK,MAAM,QAAQ,IAAI,SAAS,EAAE,CAAC;YACjC,WAAW,IAAI,MAAM,QAAQ,CAAC,KAAK,EAAE,EAAE,CAAC;QAC1C,CAAC;QACD,OAAO,CAAC,KAAK,GAAG,WAAW,CAAC;IAC9B,CAAC;CACF\",\"sourcesContent\":[\"// Copyright (c) 2015 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {ShortcutRegistry} from './ShortcutRegistry.js';\\n\\nexport class Tooltip {\\n  static install(element: HTMLElement, tooltipContent: string|null): void {\\n    element.title = tooltipContent || '';\\n  }\\n\\n  static installWithActionBinding(element: HTMLElement, tooltipContent: string, actionId: string): void {\\n    let description: string = tooltipContent;\\n    const shortcuts = ShortcutRegistry.instance().shortcutsForAction(actionId);\\n    for (const shortcut of shortcuts) {\\n      description += ` - ${shortcut.title()}`;\\n    }\\n    element.title = description;\\n  }\\n}\\n\"]}");

/***/ })

}]);