"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_components_util_js"], {
"./panels/recorder/components/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ArrayAssignments: function() { return ArrayAssignments; },
  InsertAssignment: function() { return InsertAssignment; },
  assert: function() { return assert; },
  deepFreeze: function() { return deepFreeze; },
  immutableDeepAssign: function() { return immutableDeepAssign; },
  mod: function() { return mod; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var mod = function(a, n) {
    return (a % n + n) % n;
};
function assert(predicate) {
    var message = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'Assertion failed!';
    if (!predicate) {
        throw new Error(message);
    }
}
var deepFreeze = function(object) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Reflect.ownKeys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var name = _step.value;
            var value = object[name];
            if (value && (typeof value === "undefined" ? "undefined" : _type_of(value)) === 'object' || typeof value === 'function') {
                deepFreeze(value);
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
    return Object.freeze(object);
};
var InsertAssignment = function InsertAssignment(value) {
    "use strict";
    _class_call_check(this, InsertAssignment);
    _define_property(this, "value", void 0);
    this.value = value;
};
var ArrayAssignments = function ArrayAssignments(value) {
    "use strict";
    _class_call_check(this, ArrayAssignments);
    _define_property(this, "value", void 0);
    this.value = value;
};
var immutableDeepAssign = function(object, assignments) {
    if (_instanceof(assignments, ArrayAssignments)) {
        assert(Array.isArray(object), "Expected an array. Got ".concat(typeof object === "undefined" ? "undefined" : _type_of(object), "."));
        var updatedObject = _to_consumable_array(object);
        var keys = Object.keys(assignments.value).sort(function(a, b) {
            return Number(b) - Number(a);
        });
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var update = assignments.value[Number(key)];
                if (update === undefined) {
                    updatedObject.splice(Number(key), 1);
                } else if (_instanceof(update, InsertAssignment)) {
                    updatedObject.splice(Number(key), 0, update.value);
                } else {
                    updatedObject[Number(key)] = immutableDeepAssign(updatedObject[key], update);
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
        return Object.freeze(updatedObject);
    }
    if ((typeof assignments === "undefined" ? "undefined" : _type_of(assignments)) === 'object' && !Array.isArray(assignments)) {
        assert(!Array.isArray(object), 'Expected an object. Got an array.');
        var updatedObject1 = _object_spread({}, object);
        var keys1 = Object.keys(assignments);
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = keys1[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var key1 = _step1.value;
                var update1 = assignments[key1];
                if (update1 === undefined) {
                    delete updatedObject1[key1];
                } else {
                    updatedObject1[key1] = immutableDeepAssign(updatedObject1[key1], update1);
                }
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
        return Object.freeze(updatedObject1);
    }
    return assignments;
}; //# sourceMappingURL=util.js.map


}),

}]);