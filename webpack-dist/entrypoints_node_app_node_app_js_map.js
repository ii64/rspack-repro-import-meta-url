(self["webpackChunk"] = self["webpackChunk"] || []).push([["entrypoints_node_app_node_app_js_map"],{

/***/ "./entrypoints/node_app/node_app.js.map":
/*!**********************************************!*\
  !*** ./entrypoints/node_app/node_app.js.map ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"node_app.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/entrypoints/node_app/node_app.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAC7B,OAAO,mBAAmB,CAAC;AAC3B,OAAO,0DAA0D,CAAC;AAClE,OAAO,8CAA8C,CAAC;AAEtD,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AACtD,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAEhD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAChD,OAAO,KAAK,IAAI,MAAM,iBAAiB,CAAC;AAExC,OAAO,EAAC,oBAAoB,EAAC,MAAM,2BAA2B,CAAC,CAAE,iDAAiD;AAClH,OAAO,EAAC,YAAY,EAAC,MAAM,eAAe,CAAC,CAAsB,iDAAiD;AAElH,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,UAAU,EAAE,YAAY;IACxB;;OAEG;IACH,IAAI,EAAE,MAAM;IACZ;;OAEG;IACH,cAAc,EAAE,iBAAiB;IACjC;;OAEG;IACH,YAAY,EAAE,MAAM;IACpB;;OAEG;IACH,QAAQ,EAAE,WAAW;CACtB,CAAC;AAEF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,kCAAkC,EAAE,SAAS,CAAC,CAAC;AACxF,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,IAAI,mBAA+C,CAAC;AAEpD,KAAK,UAAU,iBAAiB;IAC9B,IAAI,CAAC,mBAAmB,EAAE,CAAC;QACzB,mBAAmB,GAAG,MAAM,MAAM,CAAC,iCAAiC,CAAC,CAAC;IACxE,CAAC;IACD,OAAO,mBAAmB,CAAC;AAC7B,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,uDAAyC;IACjD,EAAE,EAAE,iBAAiB;IACrB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,UAAU,CAAC;IAC3C,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,cAAc,CAAC;IACvD,KAAK,EAAE,CAAC;IACR,KAAK,CAAC,QAAQ;QACZ,OAAO,IAAI,oBAAoB,EAAE,CAAC;IACpC,CAAC;IACD,IAAI,EAAE,CAAC,cAAc,CAAC,SAAS,CAAC,IAAI,CAAC,CAAC;CACvC,CAAC,CAAC;AAEH,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,yEAAkD;IAC1D,EAAE,EAAE,mBAAmB;IACvB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,YAAY,CAAC;IAC7C,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,QAAQ,CAAC;IACjD,KAAK,EAAE,CAAC;IACR,WAAW,4DAA0C;IACrD,KAAK,CAAC,QAAQ;QACZ,MAAM,OAAO,GAAG,MAAM,iBAAiB,EAAE,CAAC;QAC1C,OAAO,OAAO,CAAC,gBAAgB,CAAC,oBAAoB,CAAC,QAAQ,EAAE,CAAC;IAClE,CAAC;CACF,CAAC,CAAC;AAEH,6CAA6C;AAC7C,IAAI,CAAC,OAAO,GAAG,IAAI,CAAC,OAAO,CAAC,OAAO,CAAC,QAAQ,CAAC,EAAC,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;AAC/D,MAAM,CAAC,QAAQ,CAAC,mCAAmC,CAAC,YAAY,CAAC,QAAQ,CAAC,CAAC;AAC3E,IAAI,IAAI,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC\",\"sourcesContent\":[\"// Copyright 2018 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport '../shell/shell.js';\\nimport '../../panels/mobile_throttling/mobile_throttling-meta.js';\\nimport '../../panels/js_timeline/js_timeline-meta.js';\\n\\nimport * as Common from '../../core/common/common.js';\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as Root from '../../core/root/root.js';\\nimport type * as Sources from '../../panels/sources/sources.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\nimport * as Main from '../main/main.js';\\n\\nimport {NodeConnectionsPanel} from './NodeConnectionsPanel.js';  // eslint-disable-line rulesdir/es_modules_import\\nimport {NodeMainImpl} from './NodeMain.js';                      // eslint-disable-line rulesdir/es_modules_import\\n\\nconst UIStrings = {\\n  /**\\n   *@description Text that refers to the network connection\\n   */\\n  connection: 'Connection',\\n  /**\\n   *@description A tag of Node.js Connection Panel that can be searched in the command menu\\n   */\\n  node: 'node',\\n  /**\\n   *@description Command for showing the Connection tool\\n   */\\n  showConnection: 'Show Connection',\\n  /**\\n   *@description Title of the 'Node' tool in the Network Navigator View, which is part of the Sources tool\\n   */\\n  networkTitle: 'Node',\\n  /**\\n   *@description Command for showing the 'Node' tool in the Network Navigator View, which is part of the Sources tool\\n   */\\n  showNode: 'Show Node',\\n};\\n\\nconst str_ = i18n.i18n.registerUIStrings('entrypoints/node_app/node_app.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nlet loadedSourcesModule: (typeof Sources|undefined);\\n\\nasync function loadSourcesModule(): Promise<typeof Sources> {\\n  if (!loadedSourcesModule) {\\n    loadedSourcesModule = await import('../../panels/sources/sources.js');\\n  }\\n  return loadedSourcesModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.PANEL,\\n  id: 'node-connection',\\n  title: i18nLazyString(UIStrings.connection),\\n  commandPrompt: i18nLazyString(UIStrings.showConnection),\\n  order: 0,\\n  async loadView() {\\n    return new NodeConnectionsPanel();\\n  },\\n  tags: [i18nLazyString(UIStrings.node)],\\n});\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.NAVIGATOR_VIEW,\\n  id: 'navigator-network',\\n  title: i18nLazyString(UIStrings.networkTitle),\\n  commandPrompt: i18nLazyString(UIStrings.showNode),\\n  order: 2,\\n  persistence: UI.ViewManager.ViewPersistence.PERMANENT,\\n  async loadView() {\\n    const Sources = await loadSourcesModule();\\n    return Sources.SourcesNavigator.NetworkNavigatorView.instance();\\n  },\\n});\\n\\n// @ts-ignore Exposed for legacy layout tests\\nself.runtime = Root.Runtime.Runtime.instance({forceNew: true});\\nCommon.Runnable.registerEarlyInitializationRunnable(NodeMainImpl.instance);\\nnew Main.MainImpl.MainImpl();\\n\"]}");

/***/ })

}]);