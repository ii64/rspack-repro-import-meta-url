"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_injected_CustomQuerySelector_js"], {
"./third_party/puppeteer/package/lib/esm/puppeteer/injected/CustomQuerySelector.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  customQuerySelectors: function() { return customQuerySelectors; }
});
/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */ /**
 * This class mimics the injected {@link CustomQuerySelectorRegistry}.
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
var _selectors = /*#__PURE__*/ new WeakMap();
var CustomQuerySelectorRegistry = /*#__PURE__*/ function() {
    "use strict";
    function CustomQuerySelectorRegistry() {
        _class_call_check(this, CustomQuerySelectorRegistry);
        _class_private_field_init(this, _selectors, {
            writable: true,
            value: new Map()
        });
    }
    _create_class(CustomQuerySelectorRegistry, [
        {
            key: "register",
            value: function register(name, handler) {
                if (!handler.queryOne && handler.queryAll) {
                    var querySelectorAll = handler.queryAll;
                    handler.queryOne = function(node, selector) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = querySelectorAll(node, selector)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var result = _step.value;
                                return result;
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
                        return null;
                    };
                } else if (handler.queryOne && !handler.queryAll) {
                    var querySelector = handler.queryOne;
                    handler.queryAll = function(node, selector) {
                        var result = querySelector(node, selector);
                        return result ? [
                            result
                        ] : [];
                    };
                } else if (!handler.queryOne || !handler.queryAll) {
                    throw new Error('At least one query method must be defined.');
                }
                _class_private_field_get(this, _selectors).set(name, {
                    querySelector: handler.queryOne,
                    querySelectorAll: handler.queryAll
                });
            }
        },
        {
            key: "unregister",
            value: function unregister(name) {
                _class_private_field_get(this, _selectors).delete(name);
            }
        },
        {
            key: "get",
            value: function get(name) {
                return _class_private_field_get(this, _selectors).get(name);
            }
        },
        {
            key: "clear",
            value: function clear() {
                _class_private_field_get(this, _selectors).clear();
            }
        }
    ]);
    return CustomQuerySelectorRegistry;
}();
var customQuerySelectors = new CustomQuerySelectorRegistry(); //# sourceMappingURL=CustomQuerySelector.js.map


}),

}]);