"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_accessibility_ARIAMetadata_js"], {
"./panels/accessibility/ARIAMetadata.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ARIAMetadata: function() { return ARIAMetadata; },
  Attribute: function() { return Attribute; },
  ariaMetadata: function() { return ariaMetadata; }
});
/* harmony import */var _generated_ARIAProperties_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/ARIAProperties.js */ "./generated/ARIAProperties.js");
// Copyright (c) 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

var ARIAMetadata = /*#__PURE__*/ function() {
    "use strict";
    function ARIAMetadata(config) {
        _class_call_check(this, ARIAMetadata);
        _define_property(this, "attributes", void 0);
        _define_property(this, "roleNames", void 0);
        this.attributes = new Map();
        this.roleNames = [];
        if (config) {
            this.initialize(config);
        }
    }
    _create_class(ARIAMetadata, [
        {
            key: "initialize",
            value: function initialize(config) {
                var attributes = config['attributes'];
                var booleanEnum = [
                    'true',
                    'false'
                ];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var attributeConfig = _step.value;
                        if (attributeConfig.type === 'boolean') {
                            attributeConfig.enum = booleanEnum;
                        }
                        this.attributes.set(attributeConfig.name, new Attribute(attributeConfig));
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                this.roleNames = config['roles'].map(function(roleConfig) {
                    return roleConfig.name;
                });
            }
        },
        {
            key: "valuesForProperty",
            value: function valuesForProperty(property) {
                var attribute = this.attributes.get(property);
                if (attribute) {
                    return attribute.getEnum();
                }
                if (property === 'role') {
                    return this.roleNames;
                }
                return [];
            }
        }
    ]);
    return ARIAMetadata;
}();
var instance;
function ariaMetadata() {
    if (!instance) {
        instance = new ARIAMetadata(_generated_ARIAProperties_js__WEBPACK_IMPORTED_MODULE_0__.config || null);
    }
    return instance;
}
var Attribute = /*#__PURE__*/ function() {
    "use strict";
    function Attribute(config) {
        _class_call_check(this, Attribute);
        _define_property(this, "enum", void 0);
        this.enum = [];
        if (config.enum) {
            this.enum = config.enum;
        }
    }
    _create_class(Attribute, [
        {
            key: "getEnum",
            value: function getEnum() {
                return this.enum;
            }
        }
    ]);
    return Attribute;
} //# sourceMappingURL=ARIAMetadata.js.map
();


}),

}]);