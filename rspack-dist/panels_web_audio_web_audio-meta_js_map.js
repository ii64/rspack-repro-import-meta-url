(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_web_audio_web_audio-meta_js_map"], {
"./panels/web_audio/web_audio-meta.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"web_audio-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/web_audio/web_audio-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,yBAAyB,CAAC;AAChD,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAIhD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,QAAQ,EAAE,UAAU;IACpB;;OAEG;IACH,KAAK,EAAE,OAAO;IACd;;OAEG;IACH,YAAY,EAAE,eAAe;CAC9B,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,oCAAoC,EAAE,SAAS,CAAC,CAAC;AAC1F,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,IAAI,oBAAiD,CAAC;AAEtD,KAAK,UAAU,kBAAkB;IAC/B,IAAI,CAAC,oBAAoB,EAAE,CAAC;QAC1B,oBAAoB,GAAG,MAAM,MAAM,CAAC,gBAAgB,CAAC,CAAC;IACxD,CAAC;IACD,OAAO,oBAAoB,CAAC;AAC9B,CAAC;AAED,EAAE,CAAC,WAAW,CAAC,qBAAqB,CAAC;IACnC,QAAQ,mEAA+C;IACvD,EAAE,EAAE,WAAW;IACf,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,QAAQ,CAAC;IACzC,aAAa,EAAE,cAAc,CAAC,SAAS,CAAC,YAAY,CAAC;IACrD,WAAW,4DAA0C;IACrD,KAAK,EAAE,GAAG;IACV,KAAK,CAAC,QAAQ;QACZ,MAAM,QAAQ,GAAG,MAAM,kBAAkB,EAAE,CAAC;QAC5C,OAAO,IAAI,QAAQ,CAAC,YAAY,CAAC,YAAY,EAAE,CAAC;IAClD,CAAC;IACD,IAAI,EAAE,CAAC,cAAc,CAAC,SAAS,CAAC,KAAK,CAAC,CAAC;CACxC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as i18n from '../../core/i18n/i18n.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport type * as WebAudio from './web_audio.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Title of the WebAudio tool\\n   */\\n  webaudio: 'WebAudio',\\n  /**\\n   *@description A tags of WebAudio tool that can be searched in the command menu\\n   */\\n  audio: 'audio',\\n  /**\\n   *@description Command for showing the WebAudio tool\\n   */\\n  showWebaudio: 'Show WebAudio',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('panels/web_audio/web_audio-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nlet loadedWebAudioModule: (typeof WebAudio|undefined);\\n\\nasync function loadWebAudioModule(): Promise<typeof WebAudio> {\\n  if (!loadedWebAudioModule) {\\n    loadedWebAudioModule = await import('./web_audio.js');\\n  }\\n  return loadedWebAudioModule;\\n}\\n\\nUI.ViewManager.registerViewExtension({\\n  location: UI.ViewManager.ViewLocationValues.DRAWER_VIEW,\\n  id: 'web-audio',\\n  title: i18nLazyString(UIStrings.webaudio),\\n  commandPrompt: i18nLazyString(UIStrings.showWebaudio),\\n  persistence: UI.ViewManager.ViewPersistence.CLOSEABLE,\\n  order: 100,\\n  async loadView() {\\n    const WebAudio = await loadWebAudioModule();\\n    return new WebAudio.WebAudioView.WebAudioView();\\n  },\\n  tags: [i18nLazyString(UIStrings.audio)],\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);