"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_root_Runtime_test_js"],{

/***/ "./core/root/Runtime.test.js":
/*!***********************************!*\
  !*** ./core/root/Runtime.test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./root.js */ "./core/root/root.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Runtime', () => {
    beforeEach(() => {
        _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.clearForTest();
    });
    describe('Module', () => {
        describe('getRemoteBase', () => {
            const bundled = 'devtools://devtools/bundled/devtools_app.html';
            const version = '@ffe848af6a5df4fa127e2929331116b7f9f1cb30';
            const remoteOrigin = 'https://chrome-devtools-frontend.appspot.com/';
            const remote = `${remoteOrigin}serve_file/${version}/`;
            const fullLocation = `${bundled}?remoteBase=${remote}&can_dock=true&dockSide=undocked`;
            it('provides remote base info', () => {
                assert.deepEqual(_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase(fullLocation), {
                    version,
                    base: `devtools://devtools/remote/serve_file/${version}/`,
                });
            });
            it('returns null when no remote base is provided', () => {
                assert.isNull(_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase(bundled));
            });
            it('returns null when a remote base with no version provided.', () => {
                assert.isNull(_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.getRemoteBase(`${bundled}?remoteBase=${remoteOrigin}`));
            });
        });
    });
    it('allConfigurableExperiments returns all registered experiments', () => {
        _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('example', 'example');
        _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('configurable', 'configurable');
        const experiments = _root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.allConfigurableExperiments();
        assert.deepStrictEqual(experiments.map(experiment => experiment.name), ['example', 'configurable']);
    });
});
//# sourceMappingURL=Runtime.test.js.map

/***/ })

}]);