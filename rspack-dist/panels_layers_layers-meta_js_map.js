(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_layers_layers-meta_js_map"], {
"./panels/layers/layers-meta.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"layers-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/layers/layers-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,MAAM,EAAE,QAAQ;IAChB;;OAEG;IACH,UAAU,EAAE,aAAa;CAC1B,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,8BAA8B,EAAE,SAAS,CAAC,CAAC;AACpF,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,IAAI,kBAA6C,CAAC;AAElD,KAAK,UAAU,gBAAgB;IAC7B,IAAI,CAAC,kBAAkB,EAAE,CAAC;QACxB,kBAAkB,GAAG,MAAM,MAAM,CAAC,aAAa,CAAC,CAAC;IACnD,CAAC;IACD,OAAO,kBAAkB,CAAC;AAC5B,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,uDAAyC;IACjD,EAAE,EAAE,QAAQ;IACZ,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,MAAM,CAAC;IACvC,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,UAAU,CAAC;IACnD,KAAK,EAAE,GAAG;IACV,WAAW,4DAA0C;IACrD,KAAK,CAAC,QAAQ;QACZ,MAAM,MAAM,GAAG,MAAM,gBAAgB,EAAE,CAAC;QACxC,OAAO,MAAM,CAAC,WAAW,CAAC,WAAW,CAAC,QAAQ,EAAE,CAAC;IACnD,CAAC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as Layers from './layers.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Title of the Layers tool\\n   */\\n  layers: 'Layers',\\n  /**\\n   *@description Command for showing the Layers tool\\n   */\\n  showLayers: 'Show Layers',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/layers/layers-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nlet loadedLayersModule: (typeof Layers|undefined);\\n\\nasync function loadLayersModule(): Promise<typeof Layers> {\\n  if (!loadedLayersModule) {\\n    loadedLayersModule = await import('./layers.js');\\n  }\\n  return loadedLayersModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.PANEL,\\n  id: 'layers',\\n  title: i18nLazyString(UIStrings.layers),\\n  commandPrompt: i18nLazyString(UIStrings.showLayers),\\n  order: 100,\\n  persistence: UI.ViewManager.ViewPersistence.CLOSEABLE,\\n  async loadView() {\\n    const Layers = await loadLayersModule();\\n    return Layers.LayersPanel.LayersPanel.instance();\\n  },\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);