"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_StorageKeyManager_test_js"], {
"./core/sdk/StorageKeyManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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



(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_1__.describeWithMockConnection)('StorageKeyManager', function() {
    var manager;
    beforeEach(function() {
        var target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.createTarget)();
        manager = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.StorageKeyManager(target);
    });
    it('updates storage keys and emits events correctly', function() {
        var eventFired = false;
        var keys = [
            'storagekey1',
            'storagekey2'
        ];
        assert.isEmpty(manager.storageKeys());
        manager.addEventListener("StorageKeyAdded" /* SDK.StorageKeyManager.Events.StorageKeyAdded */ , function() {
            eventFired = true;
        });
        manager.updateStorageKeys(new Set(keys));
        assert.isTrue(eventFired);
        assert.deepEqual(manager.storageKeys(), keys);
        eventFired = false;
        manager.addEventListener("StorageKeyRemoved" /* SDK.StorageKeyManager.Events.StorageKeyRemoved */ , function() {
            eventFired = true;
        });
        manager.updateStorageKeys(new Set());
        assert.isTrue(eventFired);
        assert.isEmpty(manager.storageKeys());
    });
    it('updates main storage key and emits event correctly', function() {
        var mainKey = 'storagekey1';
        var eventFired = false;
        assert.isEmpty(manager.mainStorageKey());
        manager.addEventListener("MainStorageKeyChanged" /* SDK.StorageKeyManager.Events.MainStorageKeyChanged */ , function() {
            eventFired = true;
        });
        manager.setMainStorageKey(mainKey);
        assert.isTrue(eventFired);
        assert.strictEqual(manager.mainStorageKey(), mainKey);
    });
});
describe('parseStorageKey', function() {
    it('parses first-party key', function() {
        var storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://example.com/');
        assert.deepEqual(storageKey.origin, 'https://example.com');
        assert.deepEqual(_to_consumable_array(storageKey.components), []);
    });
    it('parses ancestor chain bit', function() {
        var storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://example.com/^31');
        assert.strictEqual(storageKey.origin, 'https://example.com');
        assert.deepEqual(_to_consumable_array(storageKey.components), [
            [
                "3" /* SDK.StorageKeyManager.StorageKeyComponent.ANCESTOR_CHAIN_BIT */ ,
                '1'
            ]
        ]);
    });
    it('parses top-level site', function() {
        var storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://test.example/^0https://example.com');
        assert.strictEqual(storageKey.origin, 'https://test.example');
        assert.deepEqual(_to_consumable_array(storageKey.components), [
            [
                "0" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE */ ,
                'https://example.com'
            ]
        ]);
    });
    it('parses opaque top-level site', function() {
        var storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://sub.example.com/^43735928559^5110521^6https://sub.notexample.com');
        assert.strictEqual(storageKey.origin, 'https://sub.example.com');
        assert.deepEqual(_to_consumable_array(storageKey.components), [
            [
                "4" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_HIGH */ ,
                '3735928559'
            ],
            [
                "5" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_LOW */ ,
                '110521'
            ],
            [
                "6" /* SDK.StorageKeyManager.StorageKeyComponent.TOP_LEVEL_SITE_OPAQUE_NONCE_PRECURSOR */ ,
                'https://sub.notexample.com'
            ]
        ]);
    });
    it('parses nonce', function() {
        var storageKey = _sdk_js__WEBPACK_IMPORTED_MODULE_2__.StorageKeyManager.parseStorageKey('https://example.com/^112345^267890');
        assert.strictEqual(storageKey.origin, 'https://example.com');
        assert.deepEqual(_to_consumable_array(storageKey.components), [
            [
                "1" /* SDK.StorageKeyManager.StorageKeyComponent.NONCE_HIGH */ ,
                '12345'
            ],
            [
                "2" /* SDK.StorageKeyManager.StorageKeyComponent.NONCE_LOW */ ,
                '67890'
            ]
        ]);
    });
}); //# sourceMappingURL=StorageKeyManager.test.js.map


}),

}]);