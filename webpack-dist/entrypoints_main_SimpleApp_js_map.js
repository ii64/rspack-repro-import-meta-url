(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_main_SimpleApp_js_map"],{

/***/ "./entrypoints/main/SimpleApp.js.map":
/*!*******************************************!*\
  !*** ./entrypoints/main/SimpleApp.js.map ***!
  \*******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"SimpleApp.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/entrypoints/main/SimpleApp.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAEhD,MAAM,OAAO,SAAS;IACpB,SAAS,CAAC,QAAkB;QAC1B,MAAM,QAAQ,GAAG,IAAI,EAAE,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;QAC5C,EAAE,CAAC,aAAa,CAAC,aAAa,CAAC,QAAQ,EAAE,CAAC,IAAI,CAAC,QAAQ,CAAC,OAAO,CAAC,CAAC;QACjE,QAAQ,CAAC,gBAAgB,CAAC,QAAQ,CAAC,CAAC;QACpC,QAAQ,CAAC,KAAK,EAAE,CAAC;IACnB,CAAC;CACF;AAED,IAAI,yBAA4C,CAAC;AAEjD,MAAM,OAAO,iBAAiB;IAC5B,MAAM,CAAC,QAAQ,CAAC,OAEZ,EAAC,QAAQ,EAAE,IAAI,EAAC;QAClB,MAAM,EAAC,QAAQ,EAAC,GAAG,IAAI,CAAC;QACxB,IAAI,CAAC,yBAAyB,IAAI,QAAQ,EAAE,CAAC;YAC3C,yBAAyB,GAAG,IAAI,iBAAiB,EAAE,CAAC;QACtD,CAAC;QAED,OAAO,yBAAyB,CAAC;IACnC,CAAC;IAED,SAAS;QACP,OAAO,IAAI,SAAS,EAAE,CAAC;IACzB,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2014 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../core/common/common.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nexport class SimpleApp implements Common.App.App {\\n  presentUI(document: Document): void {\\n    const rootView = new UI.RootView.RootView();\\n    UI.InspectorView.InspectorView.instance().show(rootView.element);\\n    rootView.attachToDocument(document);\\n    rootView.focus();\\n  }\\n}\\n\\nlet simpleAppProviderInstance: SimpleAppProvider;\\n\\nexport class SimpleAppProvider implements Common.AppProvider.AppProvider {\\n  static instance(opts: {\\n    forceNew: boolean|null,\\n  } = {forceNew: null}): SimpleAppProvider {\\n    const {forceNew} = opts;\\n    if (!simpleAppProviderInstance || forceNew) {\\n      simpleAppProviderInstance = new SimpleAppProvider();\\n    }\\n\\n    return simpleAppProviderInstance;\\n  }\\n\\n  createApp(): Common.App.App {\\n    return new SimpleApp();\\n  }\\n}\\n\"]}");

/***/ })

}]);