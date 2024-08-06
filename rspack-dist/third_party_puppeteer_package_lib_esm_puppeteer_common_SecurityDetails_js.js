"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_common_SecurityDetails_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/common/SecurityDetails.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SecurityDetails: function() { return SecurityDetails; }
});
/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * The SecurityDetails class represents the security details of a
 * response that was received over a secure connection.
 *
 * @public
 */ function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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
var _subjectName = /*#__PURE__*/ new WeakMap(), _issuer = /*#__PURE__*/ new WeakMap(), _validFrom = /*#__PURE__*/ new WeakMap(), _validTo = /*#__PURE__*/ new WeakMap(), _protocol = /*#__PURE__*/ new WeakMap(), _sanList = /*#__PURE__*/ new WeakMap();
var SecurityDetails = /*#__PURE__*/ function() {
    "use strict";
    function SecurityDetails(securityPayload) {
        _class_call_check(this, SecurityDetails);
        _class_private_field_init(this, _subjectName, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _issuer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _validFrom, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _validTo, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _protocol, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _sanList, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _subjectName, securityPayload.subjectName);
        _class_private_field_set(this, _issuer, securityPayload.issuer);
        _class_private_field_set(this, _validFrom, securityPayload.validFrom);
        _class_private_field_set(this, _validTo, securityPayload.validTo);
        _class_private_field_set(this, _protocol, securityPayload.protocol);
        _class_private_field_set(this, _sanList, securityPayload.sanList);
    }
    _create_class(SecurityDetails, [
        {
            /**
     * The name of the issuer of the certificate.
     */ key: "issuer",
            value: function issuer() {
                return _class_private_field_get(this, _issuer);
            }
        },
        {
            /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the start of the certificate's validity.
     */ key: "validFrom",
            value: function validFrom() {
                return _class_private_field_get(this, _validFrom);
            }
        },
        {
            /**
     * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
     * marking the end of the certificate's validity.
     */ key: "validTo",
            value: function validTo() {
                return _class_private_field_get(this, _validTo);
            }
        },
        {
            /**
     * The security protocol being used, e.g. "TLS 1.2".
     */ key: "protocol",
            value: function protocol() {
                return _class_private_field_get(this, _protocol);
            }
        },
        {
            /**
     * The name of the subject to which the certificate was issued.
     */ key: "subjectName",
            value: function subjectName() {
                return _class_private_field_get(this, _subjectName);
            }
        },
        {
            /**
     * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
     */ key: "subjectAlternativeNames",
            value: function subjectAlternativeNames() {
                return _class_private_field_get(this, _sanList);
            }
        }
    ]);
    return SecurityDetails;
} //# sourceMappingURL=SecurityDetails.js.map
();


}),

}]);