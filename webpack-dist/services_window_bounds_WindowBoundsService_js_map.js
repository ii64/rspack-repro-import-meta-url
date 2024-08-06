(self["webpackChunk"] = self["webpackChunk"] || []).push([["services_window_bounds_WindowBoundsService_js_map"],{

/***/ "./services/window_bounds/WindowBoundsService.js.map":
/*!***********************************************************!*\
  !*** ./services/window_bounds/WindowBoundsService.js.map ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"WindowBoundsService.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/services/window_bounds/WindowBoundsService.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,MAAM,MAAM,2BAA2B,CAAC;AAMpD,IAAI,+BAAwD,CAAC;AAC7D,MAAM,OAAO,uBAAuB;IAClC,MAAM,CAAC,QAAQ,CAAC,OAEZ,EAAC,QAAQ,EAAE,IAAI,EAAC;QAClB,MAAM,EAAC,QAAQ,EAAC,GAAG,IAAI,CAAC;QACxB,IAAI,CAAC,+BAA+B,IAAI,QAAQ,EAAE,CAAC;YACjD,+BAA+B,GAAG,IAAI,uBAAuB,EAAE,CAAC;QAClE,CAAC;QAED,OAAO,+BAA+B,CAAC;IACzC,CAAC;IAED,0BAA0B;QACxB,OAAO,MAAM,CAAC,aAAa,CAAC,aAAa,CAAC,6BAA6B,EAAE,EAAE,OAAO,IAAI,QAAQ,CAAC,IAAI,CAAC;IACtG,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Legacy from '../../ui/legacy/legacy.js';\\n\\nexport interface WindowBoundsService {\\n  getDevToolsBoundingElement(): HTMLElement;\\n}\\n\\nlet windowBoundsServiceImplInstance: WindowBoundsServiceImpl;\\nexport class WindowBoundsServiceImpl implements WindowBoundsService {\\n  static instance(opts: {\\n    forceNew: boolean|null,\\n  } = {forceNew: null}): WindowBoundsServiceImpl {\\n    const {forceNew} = opts;\\n    if (!windowBoundsServiceImplInstance || forceNew) {\\n      windowBoundsServiceImplInstance = new WindowBoundsServiceImpl();\\n    }\\n\\n    return windowBoundsServiceImplInstance;\\n  }\\n\\n  getDevToolsBoundingElement(): HTMLElement {\\n    return Legacy.InspectorView.InspectorView.maybeGetInspectorViewInstance()?.element || document.body;\\n  }\\n}\\n\"]}");

/***/ })

}]);