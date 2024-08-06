(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_CSSLengthUtils_js_map"],{

/***/ "./ui/legacy/components/inline_editor/CSSLengthUtils.js.map":
/*!******************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSLengthUtils.js.map ***!
  \******************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"CSSLengthUtils.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../../front_end/ui/legacy/components/inline_editor/CSSLengthUtils.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAiC7B,MAAM,CAAC,MAAM,YAAY,GAAG;;;;;;;;CAQlB,CAAC;AAEX,MAAM,CAAC,MAAM,cAAc,GAAG,IAAI,MAAM,CAAC,sCAAsC,YAAY,CAAC,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC;AAO1G,MAAM,CAAC,MAAM,SAAS,GAAG,CAAC,IAAY,EAAe,EAAE;IACrD,MAAM,MAAM,GAAG,IAAI,CAAC,KAAK,CAAC,cAAc,CAAC,CAAC;IAC1C,IAAI,CAAC,MAAM,IAAI,CAAC,MAAM,CAAC,MAAM,EAAE,CAAC;QAC9B,OAAO,IAAI,CAAC;IACd,CAAC;IAED,OAAO;QACL,KAAK,EAAE,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,KAAK,CAAC;QAClC,IAAI,EAAE,MAAM,CAAC,MAAM,CAAC,IAAkB;KACvC,CAAC;AACJ,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2021 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nexport const enum LengthUnit {\\n  // absolute units\\n  PIXEL = 'px',\\n  CENTIMETER = 'cm',\\n  MILLIMETER = 'mm',\\n  QUARTERMILLIMETER = 'Q',\\n  INCH = 'in',\\n  PICA = 'pc',\\n  POINT = 'pt',\\n\\n  // relative units\\n  CAP = 'cap',\\n  CH = 'ch',\\n  EM = 'em',\\n  EX = 'ex',\\n  IC = 'ic',\\n  LH = 'lh',\\n  RCAP = 'rcap',\\n  RCH = 'rch',\\n  REM = 'rem',\\n  REX = 'rex',\\n  RIC = 'ric',\\n  RLH = 'rlh',\\n  VB = 'vb',\\n  VH = 'vh',\\n  VI = 'vi',\\n  VW = 'vw',\\n  VMIN = 'vmin',\\n  VMAX = 'vmax',\\n}\\n\\nexport const LENGTH_UNITS = [\\n  LengthUnit.PIXEL, LengthUnit.CENTIMETER, LengthUnit.MILLIMETER, LengthUnit.QUARTERMILLIMETER,\\n  LengthUnit.INCH,  LengthUnit.PICA,       LengthUnit.POINT,      LengthUnit.CAP,\\n  LengthUnit.CH,    LengthUnit.EM,         LengthUnit.EX,         LengthUnit.IC,\\n  LengthUnit.LH,    LengthUnit.RCAP,       LengthUnit.RCH,        LengthUnit.REM,\\n  LengthUnit.REX,   LengthUnit.RIC,        LengthUnit.RLH,        LengthUnit.VB,\\n  LengthUnit.VH,    LengthUnit.VI,         LengthUnit.VW,         LengthUnit.VMIN,\\n  LengthUnit.VMAX,\\n] as const;\\n\\nexport const CSSLengthRegex = new RegExp(`(?<value>[+-]?\\\\\\\\d*\\\\\\\\.?\\\\\\\\d+)(?<unit>${LENGTH_UNITS.join('|')})`);\\n\\nexport interface Length {\\n  value: number;\\n  unit: LengthUnit;\\n}\\n\\nexport const parseText = (text: string): Length|null => {\\n  const result = text.match(CSSLengthRegex);\\n  if (!result || !result.groups) {\\n    return null;\\n  }\\n\\n  return {\\n    value: Number(result.groups.value),\\n    unit: result.groups.unit as LengthUnit,\\n  };\\n};\\n\"]}");

/***/ })

}]);