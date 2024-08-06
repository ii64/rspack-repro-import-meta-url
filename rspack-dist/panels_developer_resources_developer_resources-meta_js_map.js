(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_developer_resources_developer_resources-meta_js_map"], {
"./panels/developer_resources/developer_resources-meta.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"developer_resources-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/developer_resources/developer_resources-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,6BAA6B,CAAC;AACtD,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,GAAG,MAAM,uBAAuB,CAAC;AAC7C,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,kBAAkB,EAAE,qBAAqB;IACzC;;OAEG;IACH,sBAAsB,EAAE,0BAA0B;CACnD,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,wDAAwD,EAAE,SAAS,CAAC,CAAC;AAC9G,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,IAAI,8BAAqE,CAAC;AAE1E,KAAK,UAAU,4BAA4B;IACzC,IAAI,CAAC,8BAA8B,EAAE,CAAC;QACpC,8BAA8B,GAAG,MAAM,MAAM,CAAC,0BAA0B,CAAC,CAAC;IAC5E,CAAC;IACD,OAAO,8BAA8B,CAAC;AACxC,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,mEAA+C;IACvD,EAAE,EAAE,qBAAqB;IACzB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,kBAAkB,CAAC;IACnD,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,sBAAsB,CAAC;IAC/D,KAAK,EAAE,GAAG;IACV,WAAW,4DAA0C;IACrD,KAAK,CAAC,QAAQ;QACZ,MAAM,kBAAkB,GAAG,MAAM,4BAA4B,EAAE,CAAC;QAChE,OAAO,IAAI,kBAAkB,CAAC,sBAAsB,CAAC,sBAAsB,EAAE,CAAC;IAChF,CAAC;CACF,CAAC,CAAC;AAEH,MAAM,CAAC,QAAQ,CAAC,gBAAgB,CAAC;IAC/B,YAAY;QACV,OAAO,CAAC,GAAG,CAAC,kBAAkB,CAAC,WAAW,CAAC,CAAC;IAC9C,CAAC;IACD,WAAW,EAAE,MAAM,CAAC,QAAQ,CAAC,mBAAmB,CAAC,yBAAyB;IAC1E,KAAK,CAAC,YAAY;QAChB,MAAM,kBAAkB,GAAG,MAAM,4BAA4B,EAAE,CAAC;QAChE,OAAO,IAAI,kBAAkB,CAAC,sBAAsB,CAAC,0BAA0B,EAAE,CAAC;IACpF,CAAC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../core/common/common.js';\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as SDK from '../../core/sdk/sdk.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as DeveloperResources from './developer_resources.js';\\n\\nconst UIStrings = {\\n  /**\\n   * @description Title for developer resources panel\\n   */\\n  developerResources: 'Developer resources',\\n  /**\\n   * @description Command for showing the developer resources panel\\n   */\\n  showDeveloperResources: 'Show Developer resources',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/developer_resources/developer_resources-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nlet loadedDeveloperResourcesModule: (typeof DeveloperResources|undefined);\\n\\nasync function loadDeveloperResourcesModule(): Promise<typeof DeveloperResources> {\\n  if (!loadedDeveloperResourcesModule) {\\n    loadedDeveloperResourcesModule = await import('./developer_resources.js');\\n  }\\n  return loadedDeveloperResourcesModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.DRAWER_VIEW,\\n  id: 'developer-resources',\\n  title: i18nLazyString(UIStrings.developerResources),\\n  commandPrompt: i18nLazyString(UIStrings.showDeveloperResources),\\n  order: 100,\\n  persistence: UI.ViewManager.ViewPersistence.CLOSEABLE,\\n  async loadView() {\\n    const DeveloperResources = await loadDeveloperResourcesModule();\\n    return new DeveloperResources.DeveloperResourcesView.DeveloperResourcesView();\\n  },\\n});\\n\\nCommon.Revealer.registerRevealer({\\n  contextTypes() {\\n    return [SDK.PageResourceLoader.ResourceKey];\\n  },\\n  destination: Common.Revealer.RevealerDestination.DEVELOPER_RESOURCES_PANEL,\\n  async loadRevealer() {\\n    const DeveloperResources = await loadDeveloperResourcesModule();\\n    return new DeveloperResources.DeveloperResourcesView.DeveloperResourcesRevealer();\\n  },\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);