(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_utils_Reload_js_map"],{

/***/ "./ui/legacy/components/utils/Reload.js.map":
/*!**************************************************!*\
  !*** ./ui/legacy/components/utils/Reload.js.map ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"Reload.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/utils/Reload.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,IAAI,MAAM,+BAA+B,CAAC;AACtD,OAAO,KAAK,EAAE,MAAM,iBAAiB,CAAC;AAEtC,MAAM,UAAU,MAAM;IACpB,IAAI,EAAE,CAAC,cAAc,CAAC,cAAc,CAAC,QAAQ,EAAE,CAAC,OAAO,EAAE;QACrD,EAAE,CAAC,cAAc,CAAC,cAAc,CAAC,QAAQ,EAAE,CAAC,QAAQ,EAAE,0DAAyC,EAAE,CAAC;QACpG,IAAI,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,WAAW,CAAC,IAAI,EAAE,cAAY,CAAC,CAAC,CAAC;IAC5F,CAAC;IACD,IAAI,CAAC,qBAAqB,CAAC,6BAA6B,CAAC,QAAQ,CAAC,GAAG,EAAE,CAAC,MAAM,CAAC,QAAQ,CAAC,MAAM,EAAE,CAAC,CAAC;AACpG,CAAC\",\"sourcesContent\":[\"// Copyright 2015 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Host from '../../../../core/host/host.js';\\nimport * as UI from '../../legacy.js';\\n\\nexport function reload(): void {\\n  if (UI.DockController.DockController.instance().canDock() &&\\n      UI.DockController.DockController.instance().dockSide() === UI.DockController.DockState.UNDOCKED) {\\n    Host.InspectorFrontendHost.InspectorFrontendHostInstance.setIsDocked(true, function() {});\\n  }\\n  Host.InspectorFrontendHost.InspectorFrontendHostInstance.reattach(() => window.location.reload());\\n}\\n\"]}");

/***/ })

}]);