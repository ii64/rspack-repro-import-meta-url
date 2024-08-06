(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_performance_monitor_performance_monitor-meta_js_map"],{

/***/ "./panels/performance_monitor/performance_monitor-meta.js.map":
/*!********************************************************************!*\
  !*** ./panels/performance_monitor/performance_monitor-meta.js.map ***!
  \********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"performance_monitor-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/performance_monitor/performance_monitor-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,kBAAkB,EAAE,qBAAqB;IACzC;;OAEG;IACH,WAAW,EAAE,aAAa;IAC1B;;OAEG;IACH,aAAa,EAAE,gBAAgB;IAC/B;;OAEG;IACH,OAAO,EAAE,SAAS;IAClB;;OAEG;IACH,QAAQ,EAAE,UAAU;IACpB;;OAEG;IACH,OAAO,EAAE,SAAS;IAClB;;OAEG;IACH,sBAAsB,EAAE,0BAA0B;CACnD,CAAC;AAEF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,wDAAwD,EAAE,SAAS,CAAC,CAAC;AAC9G,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,IAAI,8BAAqE,CAAC;AAE1E,KAAK,UAAU,4BAA4B;IACzC,IAAI,CAAC,8BAA8B,EAAE,CAAC;QACpC,8BAA8B,GAAG,MAAM,MAAM,CAAC,0BAA0B,CAAC,CAAC;IAC5E,CAAC;IACD,OAAO,8BAA8B,CAAC;AACxC,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,mEAA+C;IACvD,EAAE,EAAE,qBAAqB;IACzB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,kBAAkB,CAAC;IACnD,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,sBAAsB,CAAC;IAC/D,WAAW,4DAA0C;IACrD,KAAK,EAAE,GAAG;IACV,KAAK,CAAC,QAAQ;QACZ,MAAM,kBAAkB,GAAG,MAAM,4BAA4B,EAAE,CAAC;QAChE,OAAO,IAAI,kBAAkB,CAAC,kBAAkB,CAAC,sBAAsB,EAAE,CAAC;IAC5E,CAAC;IACD,IAAI,EAAE;QACJ,cAAc,CAAC,SAAS,CAAC,WAAW,CAAC;QACrC,cAAc,CAAC,SAAS,CAAC,aAAa,CAAC;QACvC,cAAc,CAAC,SAAS,CAAC,OAAO,CAAC;QACjC,cAAc,CAAC,SAAS,CAAC,QAAQ,CAAC;QAClC,cAAc,CAAC,SAAS,CAAC,OAAO,CAAC;KAClC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as PerformanceMonitor from './performance_monitor.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Title of the 'Performance monitor' tool in the bottom drawer\\n   */\\n  performanceMonitor: 'Performance monitor',\\n  /**\\n   *@description A tag of Performance Monitor that can be searched in the command menu\\n   */\\n  performance: 'performance',\\n  /**\\n   *@description A tag of Performance Monitor that can be searched in the command menu\\n   */\\n  systemMonitor: 'system monitor',\\n  /**\\n   *@description A tag of Performance Monitor that can be searched in the command menu\\n   */\\n  monitor: 'monitor',\\n  /**\\n   *@description A tag of Performance Monitor that can be searched in the command menu\\n   */\\n  activity: 'activity',\\n  /**\\n   *@description A tag of Performance Monitor that can be searched in the command menu\\n   */\\n  metrics: 'metrics',\\n  /**\\n   *@description Command for showing the 'Performance monitor' tool in the bottom drawer\\n   */\\n  showPerformanceMonitor: 'Show Performance monitor',\\n};\\n\\nconst str_ = i18n.i18n.registerUIStrings('panels/performance_monitor/performance_monitor-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nlet loadedPerformanceMonitorModule: (typeof PerformanceMonitor|undefined);\\n\\nasync function loadPerformanceMonitorModule(): Promise<typeof PerformanceMonitor> {\\n  if (!loadedPerformanceMonitorModule) {\\n    loadedPerformanceMonitorModule = await import('./performance_monitor.js');\\n  }\\n  return loadedPerformanceMonitorModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.DRAWER_VIEW,\\n  id: 'performance.monitor',\\n  title: i18nLazyString(UIStrings.performanceMonitor),\\n  commandPrompt: i18nLazyString(UIStrings.showPerformanceMonitor),\\n  persistence: UI.ViewManager.ViewPersistence.CLOSEABLE,\\n  order: 100,\\n  async loadView() {\\n    const PerformanceMonitor = await loadPerformanceMonitorModule();\\n    return new PerformanceMonitor.PerformanceMonitor.PerformanceMonitorImpl();\\n  },\\n  tags: [\\n    i18nLazyString(UIStrings.performance),\\n    i18nLazyString(UIStrings.systemMonitor),\\n    i18nLazyString(UIStrings.monitor),\\n    i18nLazyString(UIStrings.activity),\\n    i18nLazyString(UIStrings.metrics),\\n  ],\\n});\\n\"]}");

/***/ })

}]);