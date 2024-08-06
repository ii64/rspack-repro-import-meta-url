"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_extensions_RecorderPluginManager_test_js"],{

/***/ "./models/extensions/RecorderPluginManager.test.js":
/*!*********************************************************!*\
  !*** ./models/extensions/RecorderPluginManager.test.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../extensions/extensions.js */ "./models/extensions/extensions.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('RecorderPluginManager', () => {
    it('emits events when the plugin list is modified', async () => {
        const manager = _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.RecorderPluginManager.RecorderPluginManager.instance();
        const events = [];
        manager.addEventListener("pluginAdded" /* Extensions.RecorderPluginManager.Events.PluginAdded */, event => events.push({ event: 'pluginAdded', plugin: event.data }));
        manager.addEventListener("pluginRemoved" /* Extensions.RecorderPluginManager.Events.PluginRemoved */, event => events.push({ event: 'pluginRemoved', plugin: event.data }));
        const plugin = new _extensions_extensions_js__WEBPACK_IMPORTED_MODULE_0__.RecorderExtensionEndpoint.RecorderExtensionEndpoint('test', new MessageChannel().port1, ['export'], 'application/javascript');
        manager.addPlugin(plugin);
        manager.removePlugin(plugin);
        assert.deepStrictEqual(events, [
            {
                event: 'pluginAdded',
                plugin,
            },
            {
                event: 'pluginRemoved',
                plugin,
            },
        ]);
    });
});
//# sourceMappingURL=RecorderPluginManager.test.js.map

/***/ })

}]);