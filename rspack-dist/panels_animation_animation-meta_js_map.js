(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_animation_animation-meta_js_map"], {
"./panels/animation/animation-meta.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"animation-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/animation/animation-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,IAAI,qBAAmD,CAAC;AAExD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,UAAU,EAAE,YAAY;IACxB;;OAEG;IACH,cAAc,EAAE,iBAAiB;CAClC,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,oCAAoC,EAAE,SAAS,CAAC,CAAC;AAC1F,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,KAAK,UAAU,mBAAmB;IAChC,IAAI,CAAC,qBAAqB,EAAE,CAAC;QAC3B,qBAAqB,GAAG,MAAM,MAAM,CAAC,gBAAgB,CAAC,CAAC;IACzD,CAAC;IACD,OAAO,qBAAqB,CAAC;AAC/B,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,mEAA+C;IACvD,EAAE,EAAE,YAAY;IAChB,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,UAAU,CAAC;IAC3C,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,cAAc,CAAC;IACvD,WAAW,4DAA0C;IACrD,KAAK,EAAE,CAAC;IACR,KAAK,CAAC,QAAQ;QACZ,MAAM,SAAS,GAAG,MAAM,mBAAmB,EAAE,CAAC;QAC9C,OAAO,SAAS,CAAC,iBAAiB,CAAC,iBAAiB,CAAC,QAAQ,EAAE,CAAC;IAClE,CAAC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as Animation from './animation.js';\\n\\nlet loadedAnimationModule: (typeof Animation|undefined);\\n\\nconst UIStrings = {\\n  /**\\n   * @description Title for the 'Animations' tool in the bottom drawer\\n   */\\n  animations: 'Animations',\\n  /**\\n   * @description Command for showing the 'Animations' tool in the bottom drawer\\n   */\\n  showAnimations: 'Show Animations',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/animation/animation-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nasync function loadAnimationModule(): Promise<typeof Animation> {\\n  if (!loadedAnimationModule) {\\n    loadedAnimationModule = await import('./animation.js');\\n  }\\n  return loadedAnimationModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.DRAWER_VIEW,\\n  id: 'animations',\\n  title: i18nLazyString(UIStrings.animations),\\n  commandPrompt: i18nLazyString(UIStrings.showAnimations),\\n  persistence: UI.ViewManager.ViewPersistence.CLOSEABLE,\\n  order: 0,\\n  async loadView() {\\n    const Animation = await loadAnimationModule();\\n    return Animation.AnimationTimeline.AnimationTimeline.instance();\\n  },\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);