(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_console_counters_console_counters-meta_js_map"],{

/***/ "./panels/console_counters/console_counters-meta.js.map":
/*!**************************************************************!*\
  !*** ./panels/console_counters/console_counters-meta.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"console_counters-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/console_counters/console_counters-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,IAAI,2BAA+D,CAAC;AAEpE,KAAK,UAAU,yBAAyB;IACtC,IAAI,CAAC,2BAA2B,EAAE,CAAC;QACjC,2BAA2B,GAAG,MAAM,MAAM,CAAC,uBAAuB,CAAC,CAAC;IACtE,CAAC;IACD,OAAO,2BAA2B,CAAC;AACrC,CAAC;AAED,EAAE,CAAC,OAAO,CAAC,mBAAmB,CAAC;IAC7B,KAAK,CAAC,QAAQ;QACZ,MAAM,eAAe,GAAG,MAAM,yBAAyB,EAAE,CAAC;QAC1D,OAAO,eAAe,CAAC,mBAAmB,CAAC,mBAAmB,CAAC,QAAQ,EAAE,CAAC;IAC5E,CAAC;IACD,KAAK,EAAE,CAAC;IACR,QAAQ,8EAAmD;CAC5D,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as ConsoleCounters from './console_counters.js';\\n\\nlet loadedConsoleCountersModule: (typeof ConsoleCounters|undefined);\\n\\nasync function loadConsoleCountersModule(): Promise<typeof ConsoleCounters> {\\n  if (!loadedConsoleCountersModule) {\\n    loadedConsoleCountersModule = await import('./console_counters.js');\\n  }\\n  return loadedConsoleCountersModule;\\n}\\n\\nUI.Toolbar.registerToolbarItem({\\n  async loadItem() {\\n    const ConsoleCounters = await loadConsoleCountersModule();\\n    return ConsoleCounters.WarningErrorCounter.WarningErrorCounter.instance();\\n  },\\n  order: 1,\\n  location: UI.Toolbar.ToolbarItemLocation.MAIN_TOOLBAR_RIGHT,\\n});\\n\"]}");

/***/ })

}]);