(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_WebCustomData_js_map"],{

/***/ "./panels/elements/WebCustomData.js.map":
/*!**********************************************!*\
  !*** ./panels/elements/WebCustomData.js.map ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"WebCustomData.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/elements/WebCustomData.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAEhD;;;;;;;GAOG;AACH,MAAM,OAAO,aAAa;IACxB,KAAK,GAAG,IAAI,GAAG,EAAuB,CAAC;IAEvC,qDAAqD;IAC5C,mBAAmB,CAAmB;IAE/C,YAAY,UAAkB;QAC5B,IAAI,CAAC,UAAU,EAAE,CAAC;YAChB,IAAI,CAAC,mBAAmB,GAAG,OAAO,CAAC,OAAO,EAAE,CAAC;YAC7C,OAAO;QACT,CAAC;QACD,IAAI,CAAC,mBAAmB,GAAG,KAAK,CAAC,GAAG,UAAU,2DAA2D,CAAC;aAC1E,IAAI,CAAC,QAAQ,CAAC,EAAE,CAAC,QAAQ,CAAC,IAAI,EAAE,CAAC;aACjC,IAAI,CAAC,CAAC,IAAoB,EAAE,EAAE;YAC7B,KAAK,MAAM,QAAQ,IAAI,IAAI,CAAC,UAAU,EAAE,CAAC;gBACvC,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,QAAQ,CAAC,IAAI,EAAE,QAAQ,CAAC,CAAC;YAC1C,CAAC;QACH,CAAC,CAAC;aACD,KAAK,EAAE,CAAC;IAC1C,CAAC;IAED;;;;OAIG;IACH,MAAM,CAAC,MAAM;QACX,MAAM,UAAU,GAAG,IAAI,CAAC,OAAO,CAAC,aAAa,EAAE,CAAC;QAChD,2EAA2E;QAC3E,OAAO,IAAI,aAAa,CAAC,UAAU,EAAE,IAAI,IAAI,EAAE,CAAC,CAAC;IACnD,CAAC;IAED;;;;OAIG;IACH,eAAe,CAAC,IAAY;QAC1B,OAAO,IAAI,CAAC,KAAK,CAAC,GAAG,CAAC,IAAI,CAAC,CAAC;IAC9B,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Root from '../../core/root/root.js';\\n\\n/**\\n * Lazily loads the vscode.web-custom-data/browser.css-data.json and allows\\n * lookup by property name.\\n *\\n * The class intentionally doesn't return any promise to the loaded data.\\n * Otherwise clients would need to Promise.race against a timeout to handle\\n * the case where the data is not yet available.\\n */\\nexport class WebCustomData {\\n  #data = new Map<string, CSSProperty>();\\n\\n  /** The test actually needs to wait for the result */\\n  readonly fetchPromiseForTest: Promise<unknown>;\\n\\n  constructor(remoteBase: string) {\\n    if (!remoteBase) {\\n      this.fetchPromiseForTest = Promise.resolve();\\n      return;\\n    }\\n    this.fetchPromiseForTest = fetch(`${remoteBase}third_party/vscode.web-custom-data/browsers.css-data.json`)\\n                                   .then(response => response.json())\\n                                   .then((json: CSSBrowserData) => {\\n                                     for (const property of json.properties) {\\n                                       this.#data.set(property.name, property);\\n                                     }\\n                                   })\\n                                   .catch();\\n  }\\n\\n  /**\\n   * Creates a fresh `WebCustomData` instance using the standard\\n   * DevTools remote base.\\n   * Throws if no valid remoteBase was found.\\n   */\\n  static create(): WebCustomData {\\n    const remoteBase = Root.Runtime.getRemoteBase();\\n    // Silently skip loading of the CSS data if remoteBase is not set properly.\\n    return new WebCustomData(remoteBase?.base ?? '');\\n  }\\n\\n  /**\\n   * Returns the documentation for the CSS property `name` or `undefined` if\\n   * no such property is documented. Also returns `undefined` if data hasn't\\n   * finished loading or failed to load.\\n   */\\n  findCssProperty(name: string): CSSProperty|undefined {\\n    return this.#data.get(name);\\n  }\\n}\\n\\ninterface CSSBrowserData {\\n  properties: CSSProperty[];\\n}\\n\\nexport interface CSSProperty {\\n  name: string;\\n  description?: string;\\n  references?: Array<{\\n    name: string,\\n    url: string,\\n  }>;\\n}\\n\"]}");

/***/ })

}]);