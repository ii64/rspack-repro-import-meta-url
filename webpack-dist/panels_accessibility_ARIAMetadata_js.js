"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_accessibility_ARIAMetadata_js"],{

/***/ "./panels/accessibility/ARIAMetadata.js":
/*!**********************************************!*\
  !*** ./panels/accessibility/ARIAMetadata.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARIAMetadata: () => (/* binding */ ARIAMetadata),
/* harmony export */   Attribute: () => (/* binding */ Attribute),
/* harmony export */   ariaMetadata: () => (/* binding */ ariaMetadata)
/* harmony export */ });
/* harmony import */ var _generated_ARIAProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/ARIAProperties.js */ "./generated/ARIAProperties.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ARIAMetadata {
    attributes;
    roleNames;
    constructor(config) {
        this.attributes = new Map();
        this.roleNames = [];
        if (config) {
            this.initialize(config);
        }
    }
    initialize(config) {
        const attributes = config['attributes'];
        const booleanEnum = ['true', 'false'];
        for (const attributeConfig of attributes) {
            if (attributeConfig.type === 'boolean') {
                attributeConfig.enum = booleanEnum;
            }
            this.attributes.set(attributeConfig.name, new Attribute(attributeConfig));
        }
        this.roleNames = config['roles'].map(roleConfig => roleConfig.name);
    }
    valuesForProperty(property) {
        const attribute = this.attributes.get(property);
        if (attribute) {
            return attribute.getEnum();
        }
        if (property === 'role') {
            return this.roleNames;
        }
        return [];
    }
}
let instance;
function ariaMetadata() {
    if (!instance) {
        instance = new ARIAMetadata(_generated_ARIAProperties_js__WEBPACK_IMPORTED_MODULE_0__.config || null);
    }
    return instance;
}
class Attribute {
    enum;
    constructor(config) {
        this.enum = [];
        if (config.enum) {
            this.enum = config.enum;
        }
    }
    getEnum() {
        return this.enum;
    }
}
//# sourceMappingURL=ARIAMetadata.js.map

/***/ })

}]);