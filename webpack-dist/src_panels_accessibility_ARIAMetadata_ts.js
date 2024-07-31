"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_accessibility_ARIAMetadata_ts"],{

/***/ "./src/panels/accessibility/ARIAMetadata.ts":
/*!**************************************************!*\
  !*** ./src/panels/accessibility/ARIAMetadata.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ARIAMetadata: () => (/* binding */ ARIAMetadata),
/* harmony export */   Attribute: () => (/* binding */ Attribute),
/* harmony export */   ariaMetadata: () => (/* binding */ ariaMetadata)
/* harmony export */ });
/* harmony import */ var _generated_ARIAProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/ARIAProperties.js */ "./src/generated/ARIAProperties.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ARIAMetadata {
    constructor(config) {
        Object.defineProperty(this, "attributes", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "roleNames", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
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
    constructor(config) {
        Object.defineProperty(this, "enum", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.enum = [];
        if (config.enum) {
            this.enum = config.enum;
        }
    }
    getEnum() {
        return this.enum;
    }
}


/***/ })

}]);