(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_visual_logging_NonDomState_js_map"],{

/***/ "./ui/visual_logging/NonDomState.js.map":
/*!**********************************************!*\
  !*** ./ui/visual_logging/NonDomState.js.map ***!
  \**********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"NonDomState.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/ui/visual_logging/NonDomState.ts\"],\"names\":[],\"mappings\":\"AAYA,IAAI,QAAQ,GAAG,IAAI,OAAO,EAAoC,CAAC;AAE/D,SAAS,YAAY,CAAC,MAAiB;IACrC,OAAO,QAAQ,CAAC,GAAG,CAAC,MAAM,IAAI,UAAU,CAAC,IAAI,EAAE,CAAC;AAClD,CAAC;AAED,MAAM,UAAU,gBAAgB,CAAC,QAAkB,EAAE,MAAqB,EAAE,MAAiB;IAC3F,MAAM,MAAM,GAAG,YAAY,CAAC,MAAM,CAAC,CAAC;IACpC,MAAM,CAAC,IAAI,CAAC,EAAC,QAAQ,EAAE,MAAM,EAAE,MAAM,EAAC,CAAC,CAAC;IACxC,QAAQ,CAAC,GAAG,CAAC,MAAM,IAAI,UAAU,EAAE,MAAM,CAAC,CAAC;AAC7C,CAAC;AAED,MAAM,UAAU,kBAAkB,CAAC,MAAiB;IAClD,OAAO,QAAQ,CAAC,GAAG,CAAC,MAAM,IAAI,UAAU,CAAC,CAAC;AAC5C,CAAC;AAED,MAAM,UAAU,kBAAkB,CAAC,MAAiB;IAClD,OAAO,CAAC,GAAG,YAAY,CAAC,MAAM,CAAC,CAAC,CAAC;AACnC,CAAC;AAED,MAAM,UAAU,mBAAmB,CAAC,MAAiB;IACnD,QAAQ,CAAC,MAAM,CAAC,MAAM,IAAI,UAAU,CAAC,CAAC;AACxC,CAAC;AAED,MAAM,UAAU,sBAAsB;IACpC,QAAQ,GAAG,IAAI,OAAO,EAAE,CAAC;AAC3B,CAAC;AAED,MAAM,UAAU,GAAG,EAAE,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\nimport {type Loggable} from './Loggable.js';\\nimport {type LoggingConfig} from './LoggingConfig.js';\\n\\ninterface LoggableRegistration {\\n  loggable: Loggable;\\n  config: LoggingConfig;\\n  parent?: Loggable;\\n}\\n\\nlet registry = new WeakMap<Loggable, LoggableRegistration[]>();\\n\\nfunction getLoggables(parent?: Loggable): LoggableRegistration[] {\\n  return registry.get(parent || nullParent) || [];\\n}\\n\\nexport function registerLoggable(loggable: Loggable, config: LoggingConfig, parent?: Loggable): void {\\n  const values = getLoggables(parent);\\n  values.push({loggable, config, parent});\\n  registry.set(parent || nullParent, values);\\n}\\n\\nexport function hasNonDomLoggables(parent?: Loggable): boolean {\\n  return registry.has(parent || nullParent);\\n}\\n\\nexport function getNonDomLoggables(parent?: Loggable): LoggableRegistration[] {\\n  return [...getLoggables(parent)];\\n}\\n\\nexport function unregisterLoggables(parent?: Loggable): void {\\n  registry.delete(parent || nullParent);\\n}\\n\\nexport function unregisterAllLoggables(): void {\\n  registry = new WeakMap();\\n}\\n\\nconst nullParent = {};\\n\"]}");

/***/ })

}]);