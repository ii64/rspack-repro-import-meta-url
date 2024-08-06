(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_host_Platform_js_map"],{

/***/ "./core/host/Platform.js.map":
/*!***********************************!*\
  !*** ./core/host/Platform.js.map ***!
  \***********************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Platform.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/host/Platform.ts\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA4BG;AAEH,yDAAyD;AAEzD,OAAO,EAAC,6BAA6B,EAAC,MAAM,4BAA4B,CAAC;AAEzE,IAAI,SAAiB,CAAC;AAEtB,MAAM,UAAU,QAAQ;IACtB,IAAI,CAAC,SAAS,EAAE,CAAC;QACf,SAAS,GAAG,6BAA6B,CAAC,QAAQ,EAAE,CAAC;IACvD,CAAC;IACD,OAAO,SAAS,CAAC;AACnB,CAAC;AAED,IAAI,MAAyB,CAAC;AAE9B,MAAM,UAAU,KAAK;IACnB,IAAI,OAAO,MAAM,KAAK,WAAW,EAAE,CAAC;QAClC,MAAM,GAAG,QAAQ,EAAE,KAAK,KAAK,CAAC;IAChC,CAAC;IAED,OAAO,MAAM,CAAC;AAChB,CAAC;AAED,IAAI,MAAyB,CAAC;AAE9B,MAAM,UAAU,KAAK;IACnB,IAAI,OAAO,MAAM,KAAK,WAAW,EAAE,CAAC;QAClC,MAAM,GAAG,QAAQ,EAAE,KAAK,SAAS,CAAC;IACpC,CAAC;IAED,OAAO,MAAM,CAAC;AAChB,CAAC;AAED,yEAAyE;AACzE,6EAA6E;AAC7E,sDAAsD;AACtD,MAAM,UAAU,mBAAmB,CAAC,QAAgB;IAClD,SAAS,GAAG,QAAQ,CAAC;IACrB,MAAM,GAAG,SAAS,CAAC;IACnB,MAAM,GAAG,SAAS,CAAC;AACrB,CAAC;AAED,IAAI,yBAAkC,CAAC;AAEvC,MAAM,UAAU,wBAAwB;IACtC,IAAI,OAAO,yBAAyB,KAAK,WAAW,EAAE,CAAC;QACrD,yBAAyB,GAAG,MAAM,CAAC,QAAQ,CAAC,QAAQ,EAAE,CAAC,UAAU,CAAC,6BAA6B,CAAC,CAAC;IACnG,CAAC;IACD,OAAO,yBAAyB,CAAC;AACnC,CAAC;AAED,IAAI,WAAmB,CAAC;AAExB,MAAM,UAAU,UAAU;IACxB,IAAI,WAAW,EAAE,CAAC;QAChB,OAAO,WAAW,CAAC;IACrB,CAAC;IACD,QAAQ,QAAQ,EAAE,EAAE,CAAC;QACnB,KAAK,OAAO;YACV,WAAW,GAAG,mCAAmC,CAAC;YAClD,MAAM;QACR,KAAK,KAAK;YACR,WAAW,GAAG,+BAA+B,CAAC;YAC9C,MAAM;QACR,KAAK,SAAS;YACZ,WAAW,GAAG,kCAAkC,CAAC;YACjD,MAAM;IACV,CAAC;IACD,OAAO,WAAW,CAAC;AACrB,CAAC\",\"sourcesContent\":[\"/*\\n * Copyright (C) 2014 Google Inc. All rights reserved.\\n *\\n * Redistribution and use in source and binary forms, with or without\\n * modification, are permitted provided that the following conditions are\\n * met:\\n *\\n *     * Redistributions of source code must retain the above copyright\\n * notice, this list of conditions and the following disclaimer.\\n *     * Redistributions in binary form must reproduce the above\\n * copyright notice, this list of conditions and the following disclaimer\\n * in the documentation and/or other materials provided with the\\n * distribution.\\n *     * Neither the name of Google Inc. nor the names of its\\n * contributors may be used to endorse or promote products derived from\\n * this software without specific prior written permission.\\n *\\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\\n * \\\"AS IS\\\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\\n */\\n\\n/* eslint-disable @typescript-eslint/naming-convention */\\n\\nimport {InspectorFrontendHostInstance} from './InspectorFrontendHost.js';\\n\\nlet _platform: string;\\n\\nexport function platform(): string {\\n  if (!_platform) {\\n    _platform = InspectorFrontendHostInstance.platform();\\n  }\\n  return _platform;\\n}\\n\\nlet _isMac: boolean|undefined;\\n\\nexport function isMac(): boolean {\\n  if (typeof _isMac === 'undefined') {\\n    _isMac = platform() === 'mac';\\n  }\\n\\n  return _isMac;\\n}\\n\\nlet _isWin: boolean|undefined;\\n\\nexport function isWin(): boolean {\\n  if (typeof _isWin === 'undefined') {\\n    _isWin = platform() === 'windows';\\n  }\\n\\n  return _isWin;\\n}\\n\\n// In Chrome Layout tests the imported 'Platform' object is not writable/\\n// configurable, which prevents us from monkey-patching 'Platform''s methods.\\n// We circumvent this by adding 'setPlatformForTests'.\\nexport function setPlatformForTests(platform: string): void {\\n  _platform = platform;\\n  _isMac = undefined;\\n  _isWin = undefined;\\n}\\n\\nlet _isCustomDevtoolsFrontend: boolean;\\n\\nexport function isCustomDevtoolsFrontend(): boolean {\\n  if (typeof _isCustomDevtoolsFrontend === 'undefined') {\\n    _isCustomDevtoolsFrontend = window.location.toString().startsWith('devtools://devtools/custom/');\\n  }\\n  return _isCustomDevtoolsFrontend;\\n}\\n\\nlet _fontFamily: string;\\n\\nexport function fontFamily(): string {\\n  if (_fontFamily) {\\n    return _fontFamily;\\n  }\\n  switch (platform()) {\\n    case 'linux':\\n      _fontFamily = 'Roboto, Ubuntu, Arial, sans-serif';\\n      break;\\n    case 'mac':\\n      _fontFamily = '\\\\'Lucida Grande\\\\', sans-serif';\\n      break;\\n    case 'windows':\\n      _fontFamily = '\\\\'Segoe UI\\\\', Tahoma, sans-serif';\\n      break;\\n  }\\n  return _fontFamily;\\n}\\n\"]}");

/***/ })

}]);