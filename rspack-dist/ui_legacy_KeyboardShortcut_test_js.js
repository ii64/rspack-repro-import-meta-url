"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_KeyboardShortcut_test_js"], {
"./ui/legacy/KeyboardShortcut.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('KeyboardShortcut', function() {
    it('can be instantiated', function() {
        var descriptors = [
            {
                key: 587,
                name: 'Ctrl + K'
            },
            {
                key: 595,
                name: 'Ctrl + S'
            }
        ];
        var shortcut = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut(descriptors, 'settings.shortcuts', "DefaultShortcut" /* UI.KeyboardShortcut.Type.DefaultShortcut */ );
        assert.deepEqual(shortcut.descriptors, descriptors, 'descriptors should be set');
        assert.strictEqual(shortcut.action, 'settings.shortcuts', 'action should be set');
    });
    it('creates a title', function() {
        var descriptors = [
            {
                key: 587,
                name: 'Ctrl + K'
            },
            {
                key: 595,
                name: 'Ctrl + S'
            }
        ];
        var shortcut = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut(descriptors, 'settings.shortcuts', "DefaultShortcut" /* UI.KeyboardShortcut.Type.DefaultShortcut */ );
        assert.strictEqual(shortcut.title(), 'Ctrl + K Ctrl + S');
    });
    it('can make a key from an event', function() {
        var event = new KeyboardEvent('keydown', {
            key: 'ArrowDown',
            keyCode: 40
        });
        var key = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardShortcut.KeyboardShortcut.makeKeyFromEvent(event);
        assert.strictEqual(key, 40);
    });
}); //# sourceMappingURL=KeyboardShortcut.test.js.map


}),

}]);