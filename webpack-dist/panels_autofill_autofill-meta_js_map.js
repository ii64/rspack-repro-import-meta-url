(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_autofill_autofill-meta_js_map"],{

/***/ "./panels/autofill/autofill-meta.js.map":
/*!**********************************************!*\
  !*** ./panels/autofill/autofill-meta.js.map ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"autofill-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/autofill/autofill-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,aAAa,MAAM,sDAAsD,CAAC;AACtF,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,QAAQ,EAAE,UAAU;IACpB;;OAEG;IACH,YAAY,EAAE,eAAe;CAC9B,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,kCAAkC,EAAE,SAAS,CAAC,CAAC;AACxF,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,IAAI,oBAAiD,CAAC;AAEtD,KAAK,UAAU,kBAAkB;IAC/B,IAAI,CAAC,oBAAoB,EAAE,CAAC;QAC1B,oBAAoB,GAAG,MAAM,MAAM,CAAC,eAAe,CAAC,CAAC;IACvD,CAAC;IACD,OAAO,oBAAoB,CAAC;AAC9B,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,UAAU,iEAA2C;IACrD,QAAQ,mEAA+C;IACvD,EAAE,EAAE,eAAe;IACnB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,QAAQ,CAAC;IACzC,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,YAAY,CAAC;IACrD,KAAK,EAAE,GAAG;IACV,WAAW,4DAA0C;IACrD,KAAK,CAAC,QAAQ;QACZ,MAAM,QAAQ,GAAG,MAAM,kBAAkB,EAAE,CAAC;QAC5C,OAAO,aAAa,CAAC,aAAa,CAAC,aAAa,CAAC,EAAE,CAAC,MAAM,CAAC,MAAM,EAAE,IAAI,QAAQ,CAAC,YAAY,CAAC,YAAY,EAAE,CAAC,CAAC;IAC/G,CAAC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as Root from '../../core/root/root.js';\\nimport * as LegacyWrapper from '../../ui/components/legacy_wrapper/legacy_wrapper.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as Autofill from './autofill.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Label for the autofill pane\\n   */\\n  autofill: 'Autofill',\\n  /**\\n   *@description Command for showing the 'Autofill' pane\\n   */\\n  showAutofill: 'Show Autofill',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/autofill/autofill-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nlet loadedAutofillModule: (typeof Autofill|undefined);\\n\\nasync function loadAutofillModule(): Promise<typeof Autofill> {\\n  if (!loadedAutofillModule) {\\n    loadedAutofillModule = await import('./autofill.js');\\n  }\\n  return loadedAutofillModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  experiment: Root.Runtime.ExperimentName.AUTOFILL_VIEW,\\n  location: UI.ViewManager.ViewLocationValues.DRAWER_VIEW,\\n  id: 'autofill-view',\\n  title: i18nLazyString(UIStrings.autofill),\\n  commandPrompt: i18nLazyString(UIStrings.showAutofill),\\n  order: 100,\\n  persistence: UI.ViewManager.ViewPersistence.CLOSEABLE,\\n  async loadView() {\\n    const Autofill = await loadAutofillModule();\\n    return LegacyWrapper.LegacyWrapper.legacyWrapper(UI.Widget.Widget, new Autofill.AutofillView.AutofillView());\\n  },\\n});\\n\"]}");

/***/ })

}]);