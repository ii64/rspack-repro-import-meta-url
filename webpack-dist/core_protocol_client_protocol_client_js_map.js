(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_protocol_client_protocol_client_js_map"],{

/***/ "./core/protocol_client/protocol_client.js.map":
/*!*****************************************************!*\
  !*** ./core/protocol_client/protocol_client.js.map ***!
  \*****************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"protocol_client.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/protocol_client/protocol_client.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,wBAAwB,MAAM,6CAA6C,CAAC;AACxF,OAAO,KAAK,gBAAgB,MAAM,uBAAuB,CAAC;AAC1D,OAAO,KAAK,OAAO,MAAM,cAAc,CAAC;AAExC,OAAO,EACL,gBAAgB,EAChB,OAAO,GACR,CAAC;AAEF,2EAA2E;AAC3E,yBAAyB;AACzB,4CAA4C;AAC5C,IAAI,CAAC,QAAQ,GAAG,IAAI,CAAC,QAAQ,IAAI,EAAE,CAAC;AAEpC,iGAAiG;AACjG,wBAAwB,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,gBAAgB,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2019 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as InspectorBackendCommands from '../../generated/InspectorBackendCommands.js';\\nimport * as InspectorBackend from './InspectorBackend.js';\\nimport * as NodeURL from './NodeURL.js';\\n\\nexport {\\n  InspectorBackend,\\n  NodeURL,\\n};\\n\\n// Create the global here because registering commands will involve putting\\n// items onto the global.\\n// @ts-ignore Global namespace instantiation\\nself.Protocol = self.Protocol || {};\\n\\n// FIXME: This instance of InspectorBackend should not be a side effect of importing this module.\\nInspectorBackendCommands.registerCommands(InspectorBackend.inspectorBackend);\\n\"]}");

/***/ })

}]);