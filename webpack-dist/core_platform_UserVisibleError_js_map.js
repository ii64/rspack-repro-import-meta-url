(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_platform_UserVisibleError_js_map"],{

/***/ "./core/platform/UserVisibleError.js.map":
/*!***********************************************!*\
  !*** ./core/platform/UserVisibleError.js.map ***!
  \***********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"UserVisibleError.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/UserVisibleError.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B;;;;;GAKG;AACH,MAAM,OAAO,gBAAiB,SAAQ,KAAK;IACvB,OAAO,CAAkB;IAE3C,YAAY,OAAwB;QAClC,KAAK,CAAC,OAAO,CAAC,CAAC;QACf,IAAI,CAAC,OAAO,GAAG,OAAO,CAAC;IACzB,CAAC;CACF;AAED,MAAM,UAAU,kBAAkB,CAAC,KAAc;IAC/C,IAAI,OAAO,KAAK,KAAK,QAAQ,IAAI,KAAK,KAAK,IAAI,EAAE,CAAC;QAChD,OAAO,KAAK,YAAY,gBAAgB,CAAC;IAC3C,CAAC;IAED,OAAO,KAAK,CAAC;AACf,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport {type LocalizedString} from './UIString.js';\\n\\n/**\\n * Represents an error that might become visible to the user. Where errors\\n * might be surfaced to the user (such as by displaying the message to the\\n * console), this class should be used to enforce that the message is\\n * localized on the way in.\\n */\\nexport class UserVisibleError extends Error {\\n  override readonly message: LocalizedString;\\n\\n  constructor(message: LocalizedString) {\\n    super(message);\\n    this.message = message;\\n  }\\n}\\n\\nexport function isUserVisibleError(error: unknown): error is UserVisibleError {\\n  if (typeof error === 'object' && error !== null) {\\n    return error instanceof UserVisibleError;\\n  }\\n\\n  return false;\\n}\\n\"]}");

/***/ })

}]);