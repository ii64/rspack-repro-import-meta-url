(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_ProfileTreeModel_js_map"],{

/***/ "./core/sdk/ProfileTreeModel.js.map":
/*!******************************************!*\
  !*** ./core/sdk/ProfileTreeModel.js.map ***!
  \******************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ProfileTreeModel.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/ProfileTreeModel.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,UAAU,MAAM,yCAAyC,CAAC;AAEtE,sEAAsE;AACtE,sEAAsE;AACtE,qEAAqE;AACrE,sEAAsE;AACtE,mEAAmE;AACnE,gEAAgE;AAChE,wEAAwE;AACxE,cAAc;AACd,oEAAoE;AACpE,6BAA6B;AAC7B,MAAM,OAAO,gBAAiB,SAAQ,UAAU,CAAC,gBAAgB,CAAC,gBAAgB;CAAG\",\"sourcesContent\":[\"// Copyright 2016 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as CPUProfile from '../../models/cpu_profile/cpu_profile.js';\\n\\n// This is a temporary approach to prevent Profiler panel layout tests\\n// failures. These tests depend on this class being defined under SDK.\\n// However in order to use this library in the reconciled performance\\n// panel, we have extracted it out to models/. Given that the profiler\\n// panel is deprecated and it (and its tests) will be removed soon,\\n// these tests are not ported to unit tests, instead we use this\\n// workaround to prevent failures. Once the panel is gone, this file can\\n// be removed.\\n// TODO(crbug.com/1354548): remove this file once the Profiler Panel\\n// and its tests are removed.\\nexport class ProfileTreeModel extends CPUProfile.ProfileTreeModel.ProfileTreeModel {}\\n\"]}");

/***/ })

}]);