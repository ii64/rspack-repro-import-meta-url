"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_ListModel_test_js"], {
"./ui/legacy/ListModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}

describe('ListModel', function() {
    it('can be instantiated correctly without a list of items', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel();
        assert.deepEqual(_to_consumable_array(model), []);
    });
    it('can be instantiated correctly with a list of items', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            4,
            5,
            6
        ]);
        assert.deepEqual(_to_consumable_array(model), [
            4,
            5,
            6
        ]);
    });
    it('supports replacing all list elements', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel();
        model.replaceAll([
            0,
            1,
            2
        ]);
        assert.deepEqual(_to_consumable_array(model), [
            0,
            1,
            2
        ]);
    });
    it('supports replacing a range of list elements', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            0,
            1,
            2
        ]);
        model.replaceRange(0, 1, [
            5,
            6,
            7
        ]);
        assert.deepEqual(_to_consumable_array(model), [
            5,
            6,
            7,
            1,
            2
        ]);
    });
    it('supports inserting new list elements', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            5,
            6,
            7,
            1,
            2
        ]);
        model.insert(model.length, 10);
        assert.deepEqual(_to_consumable_array(model), [
            5,
            6,
            7,
            1,
            2,
            10
        ]);
    });
    it('supports removing list elements', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            5,
            6,
            7,
            1,
            2,
            10
        ]);
        model.remove(model.length - 1);
        assert.deepEqual(_to_consumable_array(model), [
            5,
            6,
            7,
            1,
            2
        ]);
    });
    it('supports removing list elements', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            5,
            6,
            7,
            1,
            2
        ]);
        model.remove(4);
        assert.deepEqual(_to_consumable_array(model), [
            5,
            6,
            7,
            1
        ]);
    });
    it('supports replacing list elements in place', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            5,
            6,
            7,
            1
        ]);
        model.insert(1, 8);
        assert.deepEqual(_to_consumable_array(model), [
            5,
            8,
            6,
            7,
            1
        ]);
    });
    it('supports replacing list elements in place', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            0,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            4,
            5,
            6,
            27,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            28,
            29
        ]);
        model.replaceRange(0, 29, []);
        assert.deepEqual(_to_consumable_array(model), [
            29
        ]);
    });
    it('fires an event when elements are replaced', function() {
        var model = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.ListModel.ListModel([
            0,
            1,
            2
        ]);
        var eventData;
        model.addEventListener("ItemsReplaced" /* UI.ListModel.Events.ItemsReplaced */ , function(event) {
            eventData = event.data;
        });
        model.replaceRange(0, 1, [
            5,
            6,
            7
        ]);
        assert.deepEqual(_to_consumable_array(model), [
            5,
            6,
            7,
            1,
            2
        ]);
        assert.deepEqual(eventData, {
            index: 0,
            removed: [
                0
            ],
            inserted: 3,
            keepSelectedIndex: undefined
        });
    });
}); //# sourceMappingURL=ListModel.test.js.map


}),

}]);