(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_accessibility_ARIAMetadata_js_map"],{

/***/ "./panels/accessibility/ARIAMetadata.js.map":
/*!**************************************************!*\
  !*** ./panels/accessibility/ARIAMetadata.js.map ***!
  \**************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"ARIAMetadata.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/accessibility/ARIAMetadata.ts\"],\"names\":[],\"mappings\":\"AAAA,gEAAgE;AAChE,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,cAAc,MAAM,mCAAmC,CAAC;AAcpE,MAAM,OAAO,YAAY;IACN,UAAU,CAAyB;IAC5C,SAAS,CAAW;IAC5B,YAAY,MAAmB;QAC7B,IAAI,CAAC,UAAU,GAAG,IAAI,GAAG,EAAE,CAAC;QAC5B,IAAI,CAAC,SAAS,GAAG,EAAE,CAAC;QAEpB,IAAI,MAAM,EAAE,CAAC;YACX,IAAI,CAAC,UAAU,CAAC,MAAM,CAAC,CAAC;QAC1B,CAAC;IACH,CAAC;IAEO,UAAU,CAAC,MAAc;QAC/B,MAAM,UAAU,GAAG,MAAM,CAAC,YAAY,CAAC,CAAC;QAExC,MAAM,WAAW,GAAG,CAAC,MAAM,EAAE,OAAO,CAAC,CAAC;QACtC,KAAK,MAAM,eAAe,IAAI,UAAU,EAAE,CAAC;YACzC,IAAI,eAAe,CAAC,IAAI,KAAK,SAAS,EAAE,CAAC;gBACvC,eAAe,CAAC,IAAI,GAAG,WAAW,CAAC;YACrC,CAAC;YACD,IAAI,CAAC,UAAU,CAAC,GAAG,CAAC,eAAe,CAAC,IAAI,EAAE,IAAI,SAAS,CAAC,eAAe,CAAC,CAAC,CAAC;QAC5E,CAAC;QAED,IAAI,CAAC,SAAS,GAAG,MAAM,CAAC,OAAO,CAAC,CAAC,GAAG,CAAC,UAAU,CAAC,EAAE,CAAC,UAAU,CAAC,IAAI,CAAC,CAAC;IACtE,CAAC;IAED,iBAAiB,CAAC,QAAgB;QAChC,MAAM,SAAS,GAAG,IAAI,CAAC,UAAU,CAAC,GAAG,CAAC,QAAQ,CAAC,CAAC;QAChD,IAAI,SAAS,EAAE,CAAC;YACd,OAAO,SAAS,CAAC,OAAO,EAAE,CAAC;QAC7B,CAAC;QAED,IAAI,QAAQ,KAAK,MAAM,EAAE,CAAC;YACxB,OAAO,IAAI,CAAC,SAAS,CAAC;QACxB,CAAC;QAED,OAAO,EAAE,CAAC;IACZ,CAAC;CACF;AAED,IAAI,QAAgC,CAAC;AAErC,MAAM,UAAU,YAAY;IAC1B,IAAI,CAAC,QAAQ,EAAE,CAAC;QACd,QAAQ,GAAG,IAAI,YAAY,CAAC,cAAc,CAAC,MAAgB,IAAI,IAAI,CAAC,CAAC;IACvE,CAAC;IACD,OAAO,QAAQ,CAAC;AAClB,CAAC;AAED,MAAM,OAAO,SAAS;IACH,IAAI,CAAW;IAChC,YAAY,MAAuB;QACjC,IAAI,CAAC,IAAI,GAAG,EAAE,CAAC;QAEf,IAAI,MAAM,CAAC,IAAI,EAAE,CAAC;YAChB,IAAI,CAAC,IAAI,GAAG,MAAM,CAAC,IAAI,CAAC;QAC1B,CAAC;IACH,CAAC;IAED,OAAO;QACL,OAAO,IAAI,CAAC,IAAI,CAAC;IACnB,CAAC;CACF\",\"sourcesContent\":[\"// Copyright (c) 2016 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as ARIAProperties from '../../generated/ARIAProperties.js';\\nexport interface AttributeConfig {\\n  name: string;\\n  type: string;\\n  enum?: string[];\\n}\\nexport interface RoleConfig {\\n  name: string;\\n}\\nexport interface Config {\\n  attributes: AttributeConfig[];\\n  roles: RoleConfig[];\\n}\\n\\nexport class ARIAMetadata {\\n  private readonly attributes: Map<string, Attribute>;\\n  private roleNames: string[];\\n  constructor(config: Config|null) {\\n    this.attributes = new Map();\\n    this.roleNames = [];\\n\\n    if (config) {\\n      this.initialize(config);\\n    }\\n  }\\n\\n  private initialize(config: Config): void {\\n    const attributes = config['attributes'];\\n\\n    const booleanEnum = ['true', 'false'];\\n    for (const attributeConfig of attributes) {\\n      if (attributeConfig.type === 'boolean') {\\n        attributeConfig.enum = booleanEnum;\\n      }\\n      this.attributes.set(attributeConfig.name, new Attribute(attributeConfig));\\n    }\\n\\n    this.roleNames = config['roles'].map(roleConfig => roleConfig.name);\\n  }\\n\\n  valuesForProperty(property: string): string[] {\\n    const attribute = this.attributes.get(property);\\n    if (attribute) {\\n      return attribute.getEnum();\\n    }\\n\\n    if (property === 'role') {\\n      return this.roleNames;\\n    }\\n\\n    return [];\\n  }\\n}\\n\\nlet instance: ARIAMetadata|undefined;\\n\\nexport function ariaMetadata(): ARIAMetadata {\\n  if (!instance) {\\n    instance = new ARIAMetadata(ARIAProperties.config as Config || null);\\n  }\\n  return instance;\\n}\\n\\nexport class Attribute {\\n  private readonly enum: string[];\\n  constructor(config: AttributeConfig) {\\n    this.enum = [];\\n\\n    if (config.enum) {\\n      this.enum = config.enum;\\n    }\\n  }\\n\\n  getEnum(): string[] {\\n    return this.enum;\\n  }\\n}\\n\"]}");

/***/ })

}]);