(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_source_frame_source_frame-meta_js_map"], {
"./ui/legacy/components/source_frame/source_frame-meta.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"source_frame-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/source_frame/source_frame-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,mCAAmC,CAAC;AAC5D,OAAO,KAAK,IAAI,MAAM,+BAA+B,CAAC;AAEtD,MAAM,SAAS,GAAG;IAChB;;OAEG;IACH,kBAAkB,EAAE,sBAAsB;IAC1C;;OAEG;IACH,sBAAsB,EAAE,6BAA6B;IACrD;;OAEG;IACH,MAAM,EAAE,UAAU;IAClB;;OAEG;IACH,uBAAuB,EAAE,6BAA6B;IACtD;;OAEG;IACH,OAAO,EAAE,UAAU;IACnB;;OAEG;IACH,uBAAuB,EAAE,6BAA6B;IACtD;;OAEG;IACH,OAAO,EAAE,UAAU;IACnB;;OAEG;IACH,4BAA4B,EAAE,kCAAkC;IAChE;;OAEG;IACH,YAAY,EAAE,eAAe;CAC9B,CAAC;AACF,MAAM,IAAI,GAAG,IAAI,CAAC,IAAI,CAAC,iBAAiB,CAAC,wDAAwD,EAAE,SAAS,CAAC,CAAC;AAC9G,MAAM,cAAc,GAAG,IAAI,CAAC,IAAI,CAAC,gCAAgC,CAAC,IAAI,CAAC,SAAS,EAAE,IAAI,CAAC,CAAC;AAExF,MAAM,CAAC,QAAQ,CAAC,wBAAwB,CAAC;IACvC,QAAQ,yDAAyC;IACjD,WAAW,0DAA2C;IACtD,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,kBAAkB,CAAC;IACnD,WAAW,EAAE,oBAAoB;IACjC,WAAW,+CAAkC;IAC7C,YAAY,EAAE,MAAM;IACpB,OAAO,EAAE;QACP;YACE,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,sBAAsB,CAAC;YACvD,IAAI,EAAE,cAAc,CAAC,SAAS,CAAC,MAAM,CAAC;YACtC,KAAK,EAAE,IAAI;SACZ;QACD;YACE,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,uBAAuB,CAAC;YACxD,IAAI,EAAE,cAAc,CAAC,SAAS,CAAC,OAAO,CAAC;YACvC,KAAK,EAAE,MAAM;SACd;QACD;YACE,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,uBAAuB,CAAC;YACxD,IAAI,EAAE,cAAc,CAAC,SAAS,CAAC,OAAO,CAAC;YACvC,KAAK,EAAE,UAAU;SAClB;QACD;YACE,KAAK,EAAE,cAAc,CAAC,SAAS,CAAC,4BAA4B,CAAC;YAC7D,IAAI,EAAE,cAAc,CAAC,SAAS,CAAC,YAAY,CAAC;YAC5C,KAAK,EAAE,IAAI;SACZ;KACF;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Common from '../../../../core/common/common.js';\\nimport * as i18n from '../../../../core/i18n/i18n.js';\\n\\nconst UIStrings = {\\n  /**\\n   *@description Title of a setting under the Sources category in Settings\\n   */\\n  defaultIndentation: 'Default indentation:',\\n  /**\\n   *@description Title of a setting under the Sources category that can be invoked through the Command Menu\\n   */\\n  setIndentationToSpaces: 'Set indentation to 2 spaces',\\n  /**\\n   *@description A drop-down menu option to set indentation to 2 spaces\\n   */\\n  Spaces: '2 spaces',\\n  /**\\n   *@description Title of a setting under the Sources category that can be invoked through the Command Menu\\n   */\\n  setIndentationToFSpaces: 'Set indentation to 4 spaces',\\n  /**\\n   *@description A drop-down menu option to set indentation to 4 spaces\\n   */\\n  fSpaces: '4 spaces',\\n  /**\\n   *@description Title of a setting under the Sources category that can be invoked through the Command Menu\\n   */\\n  setIndentationToESpaces: 'Set indentation to 8 spaces',\\n  /**\\n   *@description A drop-down menu option to set indentation to 8 spaces\\n   */\\n  eSpaces: '8 spaces',\\n  /**\\n   *@description Title of a setting under the Sources category that can be invoked through the Command Menu\\n   */\\n  setIndentationToTabCharacter: 'Set indentation to tab character',\\n  /**\\n   *@description A drop-down menu option to set indentation to tab character\\n   */\\n  tabCharacter: 'Tab character',\\n};\\nconst str_ = i18n.i18n.registerUIStrings('ui/legacy/components/source_frame/source_frame-meta.ts', UIStrings);\\nconst i18nLazyString = i18n.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);\\n\\nCommon.Settings.registerSettingExtension({\\n  category: Common.Settings.SettingCategory.SOURCES,\\n  storageType: Common.Settings.SettingStorageType.Synced,\\n  title: i18nLazyString(UIStrings.defaultIndentation),\\n  settingName: 'text-editor-indent',\\n  settingType: Common.Settings.SettingType.ENUM,\\n  defaultValue: '    ',\\n  options: [\\n    {\\n      title: i18nLazyString(UIStrings.setIndentationToSpaces),\\n      text: i18nLazyString(UIStrings.Spaces),\\n      value: '  ',\\n    },\\n    {\\n      title: i18nLazyString(UIStrings.setIndentationToFSpaces),\\n      text: i18nLazyString(UIStrings.fSpaces),\\n      value: '    ',\\n    },\\n    {\\n      title: i18nLazyString(UIStrings.setIndentationToESpaces),\\n      text: i18nLazyString(UIStrings.eSpaces),\\n      value: '        ',\\n    },\\n    {\\n      title: i18nLazyString(UIStrings.setIndentationToTabCharacter),\\n      text: i18nLazyString(UIStrings.tabCharacter),\\n      value: '\\\\t',\\n    },\\n  ],\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);