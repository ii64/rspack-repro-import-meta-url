"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_AdornerManager_js"], {
"./panels/elements/components/AdornerManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AdornerCategoryOrder: function() { return AdornerCategoryOrder; },
  AdornerManager: function() { return AdornerManager; },
  DefaultAdornerSettings: function() { return DefaultAdornerSettings; },
  RegisteredAdorners: function() { return RegisteredAdorners; },
  compareAdornerNamesByCategory: function() { return compareAdornerNamesByCategory; },
  getRegisteredAdorner: function() { return getRegisteredAdorner; }
});
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _check_private_redeclaration(obj, privateCollection) {
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
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var RegisteredAdorners;
(function(RegisteredAdorners) {
    RegisteredAdorners["GRID"] = "grid";
    RegisteredAdorners["SUBGRID"] = "subgrid";
    RegisteredAdorners["FLEX"] = "flex";
    RegisteredAdorners["AD"] = "ad";
    RegisteredAdorners["SCROLL_SNAP"] = "scroll-snap";
    RegisteredAdorners["CONTAINER"] = "container";
    RegisteredAdorners["SLOT"] = "slot";
    RegisteredAdorners["TOP_LAYER"] = "top-layer";
    RegisteredAdorners["REVEAL"] = "reveal";
    RegisteredAdorners["MEDIA"] = "media";
})(RegisteredAdorners || (RegisteredAdorners = {}));
// This enum-like const object serves as the authoritative registry for all the
// adorners available.
function getRegisteredAdorner(which) {
    switch(which){
        case RegisteredAdorners.GRID:
            return {
                name: 'grid',
                category: "Layout" /* AdornerCategories.LAYOUT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.SUBGRID:
            return {
                name: 'subgrid',
                category: "Layout" /* AdornerCategories.LAYOUT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.FLEX:
            return {
                name: 'flex',
                category: "Layout" /* AdornerCategories.LAYOUT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.AD:
            return {
                name: 'ad',
                category: "Security" /* AdornerCategories.SECURITY */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.SCROLL_SNAP:
            return {
                name: 'scroll-snap',
                category: "Layout" /* AdornerCategories.LAYOUT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.CONTAINER:
            return {
                name: 'container',
                category: "Layout" /* AdornerCategories.LAYOUT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.SLOT:
            return {
                name: 'slot',
                category: "Layout" /* AdornerCategories.LAYOUT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.TOP_LAYER:
            return {
                name: 'top-layer',
                category: "Layout" /* AdornerCategories.LAYOUT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.REVEAL:
            return {
                name: 'reveal',
                category: "Default" /* AdornerCategories.DEFAULT */ ,
                enabledByDefault: true
            };
        case RegisteredAdorners.MEDIA:
            return {
                name: 'media',
                category: "Default" /* AdornerCategories.DEFAULT */ ,
                enabledByDefault: false
            };
    }
}
var adornerNameToCategoryMap = undefined;
function getCategoryFromAdornerName(name) {
    if (!adornerNameToCategoryMap) {
        adornerNameToCategoryMap = new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.values(RegisteredAdorners).map(getRegisteredAdorner)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, _$name = _step_value.name, category = _step_value.category;
                adornerNameToCategoryMap.set(_$name, category);
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
    return adornerNameToCategoryMap.get(name) || "Default" /* AdornerCategories.DEFAULT */ ;
}
var DefaultAdornerSettings = Object.values(RegisteredAdorners).map(getRegisteredAdorner).map(function(param) {
    var name = param.name, enabledByDefault = param.enabledByDefault;
    return {
        adorner: name,
        isEnabled: enabledByDefault
    };
});
var _adornerSettings = /*#__PURE__*/ new WeakMap(), _settingStore = /*#__PURE__*/ new WeakMap(), _persistCurrentSettings = /*#__PURE__*/ new WeakSet(), _loadSettings = /*#__PURE__*/ new WeakSet(), _syncSettings = /*#__PURE__*/ new WeakSet();
var AdornerManager = /*#__PURE__*/ function() {
    "use strict";
    function AdornerManager(settingStore) {
        _class_call_check(this, AdornerManager);
        _class_private_method_init(this, _persistCurrentSettings);
        _class_private_method_init(this, _loadSettings);
        _class_private_method_init(this, _syncSettings);
        _class_private_field_init(this, _adornerSettings, {
            writable: true,
            value: new Map()
        });
        _class_private_field_init(this, _settingStore, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _settingStore, settingStore);
        _class_private_method_get(this, _syncSettings, syncSettings).call(this);
    }
    _create_class(AdornerManager, [
        {
            key: "updateSettings",
            value: function updateSettings(settings) {
                _class_private_field_set(this, _adornerSettings, settings);
                _class_private_method_get(this, _persistCurrentSettings, persistCurrentSettings).call(this);
            }
        },
        {
            key: "getSettings",
            value: function getSettings() {
                return _class_private_field_get(this, _adornerSettings);
            }
        },
        {
            key: "isAdornerEnabled",
            value: function isAdornerEnabled(adornerText) {
                return _class_private_field_get(this, _adornerSettings).get(adornerText) || false;
            }
        }
    ]);
    return AdornerManager;
}();
function persistCurrentSettings() {
    var settingList = [];
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _class_private_field_get(this, _adornerSettings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _sliced_to_array(_step.value, 2), adorner = _step_value[0], isEnabled = _step_value[1];
            settingList.push({
                adorner: adorner,
                isEnabled: isEnabled
            });
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
    _class_private_field_get(this, _settingStore).set(settingList);
}
function loadSettings() {
    var settingList = _class_private_field_get(this, _settingStore).get();
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = settingList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var setting = _step.value;
            _class_private_field_get(this, _adornerSettings).set(setting.adorner, setting.isEnabled);
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
function syncSettings() {
    _class_private_method_get(this, _loadSettings, loadSettings).call(this);
    // Prune outdated adorners and add new ones to the persistence.
    var outdatedAdorners = new Set(_class_private_field_get(this, _adornerSettings).keys());
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = DefaultAdornerSettings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = _step.value, adorner = _step_value.adorner, isEnabled = _step_value.isEnabled;
            outdatedAdorners.delete(adorner);
            if (!_class_private_field_get(this, _adornerSettings).has(adorner)) {
                _class_private_field_get(this, _adornerSettings).set(adorner, isEnabled);
            }
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
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        for(var _iterator1 = outdatedAdorners[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
            var outdatedAdorner = _step1.value;
            _class_private_field_get(this, _adornerSettings).delete(outdatedAdorner);
        }
    } catch (err) {
        _didIteratorError1 = true;
        _iteratorError1 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                _iterator1.return();
            }
        } finally{
            if (_didIteratorError1) {
                throw _iteratorError1;
            }
        }
    }
    _class_private_method_get(this, _persistCurrentSettings, persistCurrentSettings).call(this);
}
var OrderedAdornerCategories = [
    "Security" /* AdornerCategories.SECURITY */ ,
    "Layout" /* AdornerCategories.LAYOUT */ ,
    "Default" /* AdornerCategories.DEFAULT */ 
];
// Use idx + 1 for the order to avoid JavaScript's 0 == false issue
var AdornerCategoryOrder = new Map(OrderedAdornerCategories.map(function(category, idx) {
    return [
        category,
        idx + 1
    ];
}));
function compareAdornerNamesByCategory(nameA, nameB) {
    var orderA = AdornerCategoryOrder.get(getCategoryFromAdornerName(nameA)) || Number.POSITIVE_INFINITY;
    var orderB = AdornerCategoryOrder.get(getCategoryFromAdornerName(nameB)) || Number.POSITIVE_INFINITY;
    return orderA - orderB;
} //# sourceMappingURL=AdornerManager.js.map


}),

}]);