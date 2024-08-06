"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_root_Runtime_test_js"], {
"./core/root/Runtime.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.js */ "./core/root/root.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Runtime', function() {
    beforeEach(function() {
        _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.clearForTest();
    });
    describe('Module', function() {
        describe('getRemoteBase', function() {
            var bundled = 'devtools://devtools/bundled/devtools_app.html';
            var version = '@ffe848af6a5df4fa127e2929331116b7f9f1cb30';
            var remoteOrigin = 'https://chrome-devtools-frontend.appspot.com/';
            var remote = "".concat(remoteOrigin, "serve_file/").concat(version, "/");
            var fullLocation = "".concat(bundled, "?remoteBase=").concat(remote, "&can_dock=true&dockSide=undocked");
            it('provides remote base info', function() {
                assert.deepEqual(_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase(fullLocation), {
                    version: version,
                    base: "devtools://devtools/remote/serve_file/".concat(version, "/")
                });
            });
            it('returns null when no remote base is provided', function() {
                assert.isNull(_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase(bundled));
            });
            it('returns null when a remote base with no version provided.', function() {
                assert.isNull(_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase("".concat(bundled, "?remoteBase=").concat(remoteOrigin)));
            });
        });
    });
    it('allConfigurableExperiments returns all registered experiments', function() {
        _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('example', 'example');
        _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('configurable', 'configurable');
        var experiments = _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.allConfigurableExperiments();
        assert.deepStrictEqual(experiments.map(function(experiment) {
            return experiment.name;
        }), [
            'example',
            'configurable'
        ]);
    });
}); //# sourceMappingURL=Runtime.test.js.map


}),

}]);