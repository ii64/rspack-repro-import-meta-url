(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_recorder_injected_Logger_js_map"],{

/***/ "./panels/recorder/injected/Logger.js.map":
/*!************************************************!*\
  !*** ./panels/recorder/injected/Logger.js.map ***!
  \************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Logger.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/recorder/injected/Logger.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,IAAI,GAAG,GAAG,EAAE,CAAC,KAAK,CAAC,CAAC;AAE1B,MAAM,OAAO,MAAM;IACjB,IAAI,CAA+B;IACnC,KAAK,CAA0B;IAC/B,QAAQ,CAA0B;IAElC,YAAY,KAAwB;QAClC,QAAQ,KAAK,EAAE,CAAC;YACd,KAAK,QAAQ;gBACX,IAAI,CAAC,IAAI,GAAG,IAAI,CAAC;gBACjB,IAAI,CAAC,KAAK,GAAG,IAAI,CAAC;gBAClB,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC;gBACrB,MAAM;YACR;gBACE,sCAAsC;gBACtC,IAAI,CAAC,IAAI,GAAG,OAAO,CAAC,GAAG,CAAC;gBACxB,IAAI,CAAC,KAAK,GAAG,OAAO,CAAC,IAAI,CAAC;gBAC1B,IAAI,CAAC,QAAQ,GAAG,OAAO,CAAC,OAAO,CAAC;gBAChC,MAAM;QACV,CAAC;IACH,CAAC;IAED,GAAG,CAAC,GAAG,IAAe;QACpB,IAAI,CAAC,IAAI,CAAC,GAAG,IAAI,CAAC,CAAC;IACrB,CAAC;IAED,KAAK,CAAI,KAAa,EAAE,MAAe;QACrC,IAAI,CAAC,KAAK,CAAC,KAAK,CAAC,CAAC;QAClB,MAAM,KAAK,GAAG,MAAM,EAAE,CAAC;QACvB,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,CAAC;QACrB,OAAO,KAAK,CAAC;IACf,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nconst noop = () => void 0;\\n\\nexport class Logger {\\n  #log: (...args: unknown[]) => void;\\n  #time: (label: string) => void;\\n  #timeEnd: (label: string) => void;\\n\\n  constructor(level?: 'silent'|'debug') {\\n    switch (level) {\\n      case 'silent':\\n        this.#log = noop;\\n        this.#time = noop;\\n        this.#timeEnd = noop;\\n        break;\\n      default:\\n        // eslint-disable-next-line no-console\\n        this.#log = console.log;\\n        this.#time = console.time;\\n        this.#timeEnd = console.timeEnd;\\n        break;\\n    }\\n  }\\n\\n  log(...args: unknown[]): void {\\n    this.#log(...args);\\n  }\\n\\n  timed<T>(label: string, action: () => T): T {\\n    this.#time(label);\\n    const value = action();\\n    this.#timeEnd(label);\\n    return value;\\n  }\\n}\\n\"]}");

/***/ })

}]);