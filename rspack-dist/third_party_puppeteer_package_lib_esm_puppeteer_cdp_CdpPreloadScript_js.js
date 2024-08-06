"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_cdp_CdpPreloadScript_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/cdp/CdpPreloadScript.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CdpPreloadScript: function() { return CdpPreloadScript; }
});
/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * @internal
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
var /**
     * This is the ID of the preload script returned by
     * Page.addScriptToEvaluateOnNewDocument in the main frame.
     *
     * Sub-frames would get a different CDP ID because
     * addScriptToEvaluateOnNewDocument is called for each subframe. But
     * users only see this ID and subframe IDs are internal to Puppeteer.
     */ _id = /*#__PURE__*/ new WeakMap(), _source = /*#__PURE__*/ new WeakMap(), _frameToId = /*#__PURE__*/ new WeakMap();
var CdpPreloadScript = /*#__PURE__*/ function() {
    "use strict";
    function CdpPreloadScript(mainFrame, id, source) {
        _class_call_check(this, CdpPreloadScript);
        _class_private_field_init(this, _id, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _source, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _frameToId, {
            writable: true,
            value: new WeakMap()
        });
        _class_private_field_set(this, _id, id);
        _class_private_field_set(this, _source, source);
        _class_private_field_get(this, _frameToId).set(mainFrame, id);
    }
    _create_class(CdpPreloadScript, [
        {
            key: "id",
            get: function get() {
                return _class_private_field_get(this, _id);
            }
        },
        {
            key: "source",
            get: function get() {
                return _class_private_field_get(this, _source);
            }
        },
        {
            key: "getIdForFrame",
            value: function getIdForFrame(frame) {
                return _class_private_field_get(this, _frameToId).get(frame);
            }
        },
        {
            key: "setIdForFrame",
            value: function setIdForFrame(frame, identifier) {
                _class_private_field_get(this, _frameToId).set(frame, identifier);
            }
        }
    ]);
    return CdpPreloadScript;
} //# sourceMappingURL=CdpPreloadScript.js.map
();


}),

}]);