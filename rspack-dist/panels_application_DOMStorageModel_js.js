"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_DOMStorageModel_js"], {
"./panels/application/DOMStorageModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DOMStorage: function() { return DOMStorage; },
  DOMStorageDispatcher: function() { return DOMStorageDispatcher; },
  DOMStorageModel: function() { return DOMStorageModel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2008 Nokia Inc.  All rights reserved.
 * Copyright (C) 2013 Samsung Electronics. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}


var DOMStorage = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(DOMStorage, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(DOMStorage);
    function DOMStorage(model, storageKey, isLocalStorage) {
        _class_call_check(this, DOMStorage);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "storageKeyInternal", void 0);
        _define_property(_assert_this_initialized(_this), "isLocalStorageInternal", void 0);
        _this.model = model;
        _this.storageKeyInternal = storageKey;
        _this.isLocalStorageInternal = isLocalStorage;
        return _this;
    }
    _create_class(DOMStorage, [
        {
            key: "id",
            get: function get() {
                return DOMStorage.storageId(this.storageKeyInternal, this.isLocalStorageInternal);
            }
        },
        {
            key: "storageKey",
            get: function get() {
                return this.storageKeyInternal;
            }
        },
        {
            key: "isLocalStorage",
            get: function get() {
                return this.isLocalStorageInternal;
            }
        },
        {
            key: "getItems",
            value: function getItems() {
                return this.model.agent.invoke_getDOMStorageItems({
                    storageId: this.id
                }).then(function(param) {
                    var entries = param.entries;
                    return entries;
                });
            }
        },
        {
            key: "setItem",
            value: function setItem(key, value) {
                void this.model.agent.invoke_setDOMStorageItem({
                    storageId: this.id,
                    key: key,
                    value: value
                });
            }
        },
        {
            key: "removeItem",
            value: function removeItem(key) {
                void this.model.agent.invoke_removeDOMStorageItem({
                    storageId: this.id,
                    key: key
                });
            }
        },
        {
            key: "clear",
            value: function clear() {
                void this.model.agent.invoke_clear({
                    storageId: this.id
                });
            }
        }
    ], [
        {
            key: "storageId",
            value: function storageId(storageKey, isLocalStorage) {
                return {
                    storageKey: storageKey,
                    isLocalStorage: isLocalStorage
                };
            }
        }
    ]);
    return DOMStorage;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var DOMStorageModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(DOMStorageModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(DOMStorageModel);
    function DOMStorageModel(target) {
        _class_call_check(this, DOMStorageModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "storageKeyManagerInternal", void 0);
        _define_property(_assert_this_initialized(_this), "storagesInternal", void 0);
        _define_property(_assert_this_initialized(_this), "agent", void 0);
        _define_property(_assert_this_initialized(_this), "enabled", void 0);
        _this.storageKeyManagerInternal = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.StorageKeyManager);
        _this.storagesInternal = {};
        _this.agent = target.domstorageAgent();
        return _this;
    }
    _create_class(DOMStorageModel, [
        {
            key: "storageKeyManagerForTest",
            get: function get() {
                return this.storageKeyManagerInternal;
            }
        },
        {
            key: "enable",
            value: function enable() {
                if (this.enabled) {
                    return;
                }
                this.target().registerDOMStorageDispatcher(new DOMStorageDispatcher(this));
                if (this.storageKeyManagerInternal) {
                    this.storageKeyManagerInternal.addEventListener("StorageKeyAdded" /* SDK.StorageKeyManager.Events.StorageKeyAdded */ , this.storageKeyAdded, this);
                    this.storageKeyManagerInternal.addEventListener("StorageKeyRemoved" /* SDK.StorageKeyManager.Events.StorageKeyRemoved */ , this.storageKeyRemoved, this);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.storageKeyManagerInternal.storageKeys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var storageKey = _step.value;
                            this.addStorageKey(storageKey);
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
                }
                void this.agent.invoke_enable();
                this.enabled = true;
            }
        },
        {
            key: "clearForStorageKey",
            value: function clearForStorageKey(storageKey) {
                if (!this.enabled) {
                    return;
                }
                for(var _i = 0, _iter = [
                    true,
                    false
                ]; _i < _iter.length; _i++){
                    var isLocal = _iter[_i];
                    var key = this.storageKey(storageKey, isLocal);
                    var storage = this.storagesInternal[key];
                    if (!storage) {
                        return;
                    }
                    storage.clear();
                }
                this.removeStorageKey(storageKey);
                this.addStorageKey(storageKey);
            }
        },
        {
            key: "storageKeyAdded",
            value: function storageKeyAdded(event) {
                this.addStorageKey(event.data);
            }
        },
        {
            key: "addStorageKey",
            value: function addStorageKey(storageKey) {
                for(var _i = 0, _iter = [
                    true,
                    false
                ]; _i < _iter.length; _i++){
                    var isLocal = _iter[_i];
                    var key = this.storageKey(storageKey, isLocal);
                    console.assert(!this.storagesInternal[key]);
                    var storage = new DOMStorage(this, storageKey, isLocal);
                    this.storagesInternal[key] = storage;
                    this.dispatchEventToListeners("DOMStorageAdded" /* Events.DOMStorageAdded */ , storage);
                }
            }
        },
        {
            key: "storageKeyRemoved",
            value: function storageKeyRemoved(event) {
                this.removeStorageKey(event.data);
            }
        },
        {
            key: "removeStorageKey",
            value: function removeStorageKey(storageKey) {
                for(var _i = 0, _iter = [
                    true,
                    false
                ]; _i < _iter.length; _i++){
                    var isLocal = _iter[_i];
                    var key = this.storageKey(storageKey, isLocal);
                    var storage = this.storagesInternal[key];
                    if (!storage) {
                        continue;
                    }
                    delete this.storagesInternal[key];
                    this.dispatchEventToListeners("DOMStorageRemoved" /* Events.DOMStorageRemoved */ , storage);
                }
            }
        },
        {
            key: "storageKey",
            value: function storageKey(storageKey, isLocalStorage) {
                return JSON.stringify(DOMStorage.storageId(storageKey, isLocalStorage));
            }
        },
        {
            key: "domStorageItemsCleared",
            value: function domStorageItemsCleared(storageId) {
                var domStorage = this.storageForId(storageId);
                if (!domStorage) {
                    return;
                }
                domStorage.dispatchEventToListeners("DOMStorageItemsCleared" /* DOMStorage.Events.DOMStorageItemsCleared */ );
            }
        },
        {
            key: "domStorageItemRemoved",
            value: function domStorageItemRemoved(storageId, key) {
                var domStorage = this.storageForId(storageId);
                if (!domStorage) {
                    return;
                }
                var eventData = {
                    key: key
                };
                domStorage.dispatchEventToListeners("DOMStorageItemRemoved" /* DOMStorage.Events.DOMStorageItemRemoved */ , eventData);
            }
        },
        {
            key: "domStorageItemAdded",
            value: function domStorageItemAdded(storageId, key, value) {
                var domStorage = this.storageForId(storageId);
                if (!domStorage) {
                    return;
                }
                var eventData = {
                    key: key,
                    value: value
                };
                domStorage.dispatchEventToListeners("DOMStorageItemAdded" /* DOMStorage.Events.DOMStorageItemAdded */ , eventData);
            }
        },
        {
            key: "domStorageItemUpdated",
            value: function domStorageItemUpdated(storageId, key, oldValue, value) {
                var domStorage = this.storageForId(storageId);
                if (!domStorage) {
                    return;
                }
                var eventData = {
                    key: key,
                    oldValue: oldValue,
                    value: value
                };
                domStorage.dispatchEventToListeners("DOMStorageItemUpdated" /* DOMStorage.Events.DOMStorageItemUpdated */ , eventData);
            }
        },
        {
            key: "storageForId",
            value: function storageForId(storageId) {
                console.assert(Boolean(storageId.storageKey));
                return this.storagesInternal[this.storageKey(storageId.storageKey || '', storageId.isLocalStorage)];
            }
        },
        {
            key: "storages",
            value: function storages() {
                var result = [];
                for(var id in this.storagesInternal){
                    result.push(this.storagesInternal[id]);
                }
                return result;
            }
        }
    ]);
    return DOMStorageModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.SDKModel.SDKModel.register(DOMStorageModel, {
    capabilities: 2 /* SDK.Target.Capability.DOM */ ,
    autostart: false
});
var DOMStorageDispatcher = /*#__PURE__*/ function() {
    "use strict";
    function DOMStorageDispatcher(model) {
        _class_call_check(this, DOMStorageDispatcher);
        _define_property(this, "model", void 0);
        this.model = model;
    }
    _create_class(DOMStorageDispatcher, [
        {
            key: "domStorageItemsCleared",
            value: function domStorageItemsCleared(param) {
                var storageId = param.storageId;
                this.model.domStorageItemsCleared(storageId);
            }
        },
        {
            key: "domStorageItemRemoved",
            value: function domStorageItemRemoved(param) {
                var storageId = param.storageId, key = param.key;
                this.model.domStorageItemRemoved(storageId, key);
            }
        },
        {
            key: "domStorageItemAdded",
            value: function domStorageItemAdded(param) {
                var storageId = param.storageId, key = param.key, newValue = param.newValue;
                this.model.domStorageItemAdded(storageId, key, newValue);
            }
        },
        {
            key: "domStorageItemUpdated",
            value: function domStorageItemUpdated(param) {
                var storageId = param.storageId, key = param.key, oldValue = param.oldValue, newValue = param.newValue;
                this.model.domStorageItemUpdated(storageId, key, oldValue, newValue);
            }
        }
    ]);
    return DOMStorageDispatcher;
} //# sourceMappingURL=DOMStorageModel.js.map
();


}),

}]);