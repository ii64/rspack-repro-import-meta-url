"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_testing_RecorderHelpers_js"], {
"./panels/recorder/testing/RecorderHelpers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  createCustomStep: function() { return createCustomStep; },
  installMocksForRecordingPlayer: function() { return installMocksForRecordingPlayer; },
  installMocksForTargetManager: function() { return installMocksForTargetManager; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_models_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/models.js */ "./panels/recorder/models/models.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var createCustomStep = function() {
    return {
        type: _models_models_js__WEBPACK_IMPORTED_MODULE_1__.Schema.StepType.CustomStep,
        name: 'dummy step',
        parameters: {}
    };
};
var installMocksForRecordingPlayer = function() {
    var mock = {
        page: {
            _client: function() {
                return {
                    send: sinon.stub().resolves()
                };
            },
            frames: function() {
                return [
                    {
                        client: {
                            send: sinon.stub().resolves()
                        }
                    }
                ];
            },
            evaluate: function() {
                return '';
            },
            url: function url() {
                return '';
            },
            bringToFront: function bringToFront() {
                return Promise.resolve();
            }
        },
        browser: {
            pages: function() {
                return [
                    mock.page
                ];
            },
            disconnect: function() {
                return sinon.stub().resolves();
            }
        }
    };
    sinon.stub(_models_models_js__WEBPACK_IMPORTED_MODULE_1__.RecordingPlayer.RecordingPlayer, 'connectPuppeteer').resolves(mock);
};
var installMocksForTargetManager = function() {
    var stub = {
        suspendAllTargets: sinon.stub().resolves(),
        resumeAllTargets: sinon.stub().resolves(),
        primaryPageTarget: sinon.stub().returns({
            targetAgent: sinon.stub().returns({})
        })
    };
    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.TargetManager.TargetManager, 'instance').callsFake(function() {
        return stub;
    });
}; //# sourceMappingURL=RecorderHelpers.js.map


}),

}]);