(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_object_ui_object_ui-meta_js_map"],{

/***/ "./ui/legacy/components/object_ui/object_ui-meta.js.map":
/*!**************************************************************!*\
  !*** ./ui/legacy/components/object_ui/object_ui-meta.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"object_ui-meta.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/object_ui/object_ui-meta.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,GAAG,MAAM,6BAA6B,CAAC;AACnD,OAAO,KAAK,EAAE,MAAM,iCAAiC,CAAC;AAItD,IAAI,oBAAiD,CAAC;AAEtD,KAAK,UAAU,kBAAkB;IAC/B,IAAI,CAAC,oBAAoB,EAAE,CAAC;QAC1B,oBAAoB,GAAG,MAAM,MAAM,CAAC,gBAAgB,CAAC,CAAC;IACxD,CAAC;IACD,OAAO,oBAAoB,CAAC;AAC9B,CAAC;AAED,EAAE,CAAC,OAAO,CAAC,gBAAgB,CAAC;IAC1B,YAAY;QACV,OAAO,CAAC,GAAG,CAAC,YAAY,CAAC,YAAY,CAAC,CAAC;IACzC,CAAC;IACD,KAAK,CAAC,YAAY;QAChB,MAAM,QAAQ,GAAG,MAAM,kBAAkB,EAAE,CAAC;QAC5C,OAAO,QAAQ,CAAC,uBAAuB,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC;IAC9D,CAAC;CACF,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as SDK from '../../../../core/sdk/sdk.js';\\nimport * as UI from '../../../../ui/legacy/legacy.js';\\n\\nimport type * as ObjectUI from './object_ui.js';\\n\\nlet loadedObjectUIModule: (typeof ObjectUI|undefined);\\n\\nasync function loadObjectUIModule(): Promise<typeof ObjectUI> {\\n  if (!loadedObjectUIModule) {\\n    loadedObjectUIModule = await import('./object_ui.js');\\n  }\\n  return loadedObjectUIModule;\\n}\\n\\nUI.UIUtils.registerRenderer({\\n  contextTypes() {\\n    return [SDK.RemoteObject.RemoteObject];\\n  },\\n  async loadRenderer() {\\n    const ObjectUI = await loadObjectUIModule();\\n    return ObjectUI.ObjectPropertiesSection.Renderer.instance();\\n  },\\n});\\n\"]}");

/***/ })

}]);