(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_components_docs_request_link_icon_basic_js_map"],{

/***/ "./ui/components/docs/request_link_icon/basic.js.map":
/*!***********************************************************!*\
  !*** ./ui/components/docs/request_link_icon/basic.js.map ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"basic.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/components/docs/request_link_icon/basic.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,eAAe,MAAM,2CAA2C,CAAC;AAE7E,OAAO,KAAK,gBAAgB,MAAM,0BAA0B,CAAC;AAE7D,MAAM,gBAAgB,CAAC,oBAAoB,CAAC,KAAK,EAAE,CAAC;AACpD,MAAM,eAAe,CAAC,oBAAoB,EAAE,CAAC;AAE7C,MAAM,eAAe,GACjB,MAAM,MAAM,CAAC,kEAAkE,CAAC,CAAC;AAErF,SAAS,eAAe,CAAC,IAA+D;IACtF,MAAM,SAAS,GAAG,IAAI,eAAe,CAAC,eAAe,CAAC,eAAe,EAAE,CAAC;IACxE,SAAS,CAAC,IAAI,GAAG,IAAI,CAAC;IACtB,QAAQ,CAAC,cAAc,CAAC,WAAW,CAAC,EAAE,WAAW,CAAC,SAAS,CAAC,CAAC;AAC/D,CAAC;AAED,eAAe,CAAC,EAAE,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as FrontendHelpers from '../../../../testing/EnvironmentHelpers.js';\\nimport type * as RequestLinkIconModule from '../../../../ui/components/request_link_icon/request_link_icon.js';\\nimport * as ComponentHelpers from '../../helpers/helpers.js';\\n\\nawait ComponentHelpers.ComponentServerSetup.setup();\\nawait FrontendHelpers.initializeGlobalVars();\\n\\nconst RequestLinkIcon: typeof RequestLinkIconModule =\\n    await import('../../../../ui/components/request_link_icon/request_link_icon.js');\\n\\nfunction appendComponent(data: RequestLinkIconModule.RequestLinkIcon.RequestLinkIconData) {\\n  const component = new RequestLinkIcon.RequestLinkIcon.RequestLinkIcon();\\n  component.data = data;\\n  document.getElementById('container')?.appendChild(component);\\n}\\n\\nappendComponent({});\\n\"]}");

/***/ })

}]);