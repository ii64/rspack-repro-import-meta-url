(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_accessibility-meta_js_map"], {
"./panels/accessibility/accessibility-meta.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"accessibility-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/accessibility/accessibility-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,IAAI,yBAA2D,CAAC;AAEhE,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,aAAa,EAAE,eAAe;IAC9B;;OAEG;IACH,gBAAgB,EAAE,oBAAoB;CACvC,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,4CAA4C,EAAE,SAAS,CAAC,CAAC;AAClG,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,KAAK,UAAU,uBAAuB;IACpC,IAAI,CAAC,yBAAyB,EAAE,CAAC;QAC/B,yBAAyB,GAAG,MAAM,MAAM,CAAC,oBAAoB,CAAC,CAAC;IACjE,CAAC;IACD,OAAO,yBAAyB,CAAC;AACnC,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,6EAAoD;IAC5D,EAAE,EAAE,oBAAoB;IACxB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,aAAa,CAAC;IAC9C,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,gBAAgB,CAAC;IACzD,KAAK,EAAE,EAAE;IACT,WAAW,4DAA0C;IACrD,KAAK,CAAC,QAAQ;QACZ,MAAM,aAAa,GAAG,MAAM,uBAAuB,EAAE,CAAC;QACtD,OAAO,aAAa,CAAC,wBAAwB,CAAC,wBAAwB,CAAC,QAAQ,EAAE,CAAC;IACpF,CAAC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as Accessibility from './accessibility.js';\\n\\nlet loadedAccessibilityModule: (typeof Accessibility|undefined);\\n\\nconst UIStrings = {\\n  /**\\n   * @description Text for accessibility of the web page\\n   */\\n  accessibility: 'Accessibility',\\n  /**\\n   * @description Command for showing the 'Accessibility' tool\\n   */\\n  shoAccessibility: 'Show Accessibility',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/accessibility/accessibility-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nasync function loadAccessibilityModule(): Promise<typeof Accessibility> {\\n  if (!loadedAccessibilityModule) {\\n    loadedAccessibilityModule = await import('./accessibility.js');\\n  }\\n  return loadedAccessibilityModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.ELEMENTS_SIDEBAR,\\n  id: 'accessibility.view',\\n  title: i18nLazyString(UIStrings.accessibility),\\n  commandPrompt: i18nLazyString(UIStrings.shoAccessibility),\\n  order: 10,\\n  persistence: UI.ViewManager.ViewPersistence.PERMANENT,\\n  async loadView() {\\n    const Accessibility = await loadAccessibilityModule();\\n    return Accessibility.AccessibilitySidebarView.AccessibilitySidebarView.instance();\\n  },\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);