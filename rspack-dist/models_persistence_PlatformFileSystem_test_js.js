"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_persistence_PlatformFileSystem_test_js"], {
"./models/persistence/PlatformFileSystem.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('PlatformFileSystem', function() {
    it('can be instantiated successfully', function() {
        var platformFileSystem = new _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_0__.PlatformFileSystem.PlatformFileSystem('Test Path', 'Test Type');
        assert.strictEqual(platformFileSystem.path(), 'Test Path', 'path was not set or retrieved correctly');
        assert.strictEqual(platformFileSystem.type(), 'Test Type', 'Type was not set or retrieved correctly');
    });
// TODO continue writing tests here or use another describe block
}); //# sourceMappingURL=PlatformFileSystem.test.js.map


}),

}]);