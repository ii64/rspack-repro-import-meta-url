(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_elements_components_LayoutPaneUtils_js_map"],{

/***/ "./panels/elements/components/LayoutPaneUtils.js.map":
/*!***********************************************************!*\
  !*** ./panels/elements/components/LayoutPaneUtils.js.map ***!
  \***********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"LayoutPaneUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/panels/elements/components/LayoutPaneUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../../core/common/common.js';\\n\\nexport interface BaseSettingOption {\\n  title: string;\\n}\\n\\nexport interface BooleanSettingOption extends BaseSettingOption {\\n  value: boolean;\\n}\\n\\nexport interface EnumSettingOption extends BaseSettingOption {\\n  value: string;\\n}\\n\\nexport interface BaseSetting {\\n  name: string;\\n  type: Common.Settings.SettingType.BOOLEAN|Common.Settings.SettingType.ENUM;\\n  title: string;\\n}\\n\\nexport type BooleanSetting = BaseSetting&{options: BooleanSettingOption[], value: boolean};\\nexport type EnumSetting = BaseSetting&{options: EnumSettingOption[], value: string};\\nexport type Setting = EnumSetting|BooleanSetting;\\n\\nexport interface LayoutElement {\\n  id: number;\\n  color: string;\\n  name: string;\\n  domId?: string;\\n  domClasses?: string[];\\n  enabled: boolean;\\n  reveal: () => void;\\n  toggle: (value: boolean) => void;\\n  setColor: (value: string) => void;\\n  highlight: () => void;\\n  hideHighlight: () => void;\\n}\\n\"]}");

/***/ })

}]);