(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_webauthn_webauthn-meta_js_map"], {
"./panels/webauthn/webauthn-meta.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"webauthn-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/webauthn/webauthn-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,QAAQ,EAAE,UAAU;IACpB;;OAEG;IACH,YAAY,EAAE,eAAe;CAC9B,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,kCAAkC,EAAE,SAAS,CAAC,CAAC;AACxF,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,IAAI,oBAAiD,CAAC;AAEtD,KAAK,UAAU,kBAAkB;IAC/B,IAAI,CAAC,oBAAoB,EAAE,CAAC;QAC1B,oBAAoB,GAAG,MAAM,MAAM,CAAC,eAAe,CAAC,CAAC;IACvD,CAAC;IACD,OAAO,oBAAoB,CAAC;AAC9B,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,mEAA+C;IACvD,EAAE,EAAE,eAAe;IACnB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,QAAQ,CAAC;IACzC,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,YAAY,CAAC;IACrD,KAAK,EAAE,GAAG;IACV,WAAW,4DAA0C;IACrD,KAAK,CAAC,QAAQ;QACZ,MAAM,QAAQ,GAAG,MAAM,kBAAkB,EAAE,CAAC;QAC5C,OAAO,IAAI,QAAQ,CAAC,YAAY,CAAC,gBAAgB,EAAE,CAAC;IACtD,CAAC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as Webauthn from './webauthn.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Title of WebAuthn tab in bottom drawer.\\n   */\\n  webauthn: 'WebAuthn',\\n  /**\\n   *@description Command for showing the WebAuthn tab in bottom drawer.\\n   */\\n  showWebauthn: 'Show WebAuthn',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/webauthn/webauthn-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nlet loadedWebauthnModule: (typeof Webauthn|undefined);\\n\\nasync function loadWebauthnModule(): Promise<typeof Webauthn> {\\n  if (!loadedWebauthnModule) {\\n    loadedWebauthnModule = await import('./webauthn.js');\\n  }\\n  return loadedWebauthnModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.DRAWER_VIEW,\\n  id: 'webauthn-pane',\\n  title: i18nLazyString(UIStrings.webauthn),\\n  commandPrompt: i18nLazyString(UIStrings.showWebauthn),\\n  order: 100,\\n  persistence: UI.ViewManager.ViewPersistence.CLOSEABLE,\\n  async loadView() {\\n    const Webauthn = await loadWebauthnModule();\\n    return new Webauthn.WebauthnPane.WebauthnPaneImpl();\\n  },\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);