(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_InlineEditorUtils_js_map"],{

/***/ "./ui/legacy/components/inline_editor/InlineEditorUtils.js.map":
/*!*********************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/InlineEditorUtils.js.map ***!
  \*********************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"InlineEditorUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/inline_editor/InlineEditorUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,MAAM,OAAO,iBAAkB,SAAQ,KAAK;IAC1C,MAAM,CAAU,SAAS,GAAG,cAAc,CAAC;IAC3C,IAAI,CAAkB;IAEtB,YAAY,KAAa;QACvB,KAAK,CAAC,iBAAiB,CAAC,SAAS,EAAE,EAAE,CAAC,CAAC;QACvC,IAAI,CAAC,IAAI,GAAG,EAAC,KAAK,EAAC,CAAC;IACtB,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport class ValueChangedEvent extends Event {\\n  static readonly eventName = 'valuechanged';\\n  data: {value: string};\\n\\n  constructor(value: string) {\\n    super(ValueChangedEvent.eventName, {});\\n    this.data = {value};\\n  }\\n}\\n\"]}");

/***/ })

}]);