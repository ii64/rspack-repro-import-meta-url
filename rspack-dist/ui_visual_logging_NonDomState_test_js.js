"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_visual_logging_NonDomState_test_js"], {
"./ui/visual_logging/NonDomState.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual_logging-testing.js */ "./ui/visual_logging/visual_logging-testing.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('NonDomState', function() {
    it('registers, unregisters and returns loggables', function() {
        var parent = {};
        var child = {};
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.registerLoggable(parent, {
            ve: 1,
            context: '1'
        });
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.registerLoggable(child, {
            ve: 1,
            context: '2'
        }, parent);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), [
            {
                loggable: parent,
                config: {
                    ve: 1,
                    context: '1'
                },
                parent: undefined
            }
        ]);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(parent), [
            {
                loggable: child,
                config: {
                    ve: 1,
                    context: '2'
                },
                parent: parent
            }
        ]);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.unregisterLoggables(parent);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(parent), []);
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), [
            {
                loggable: parent,
                config: {
                    ve: 1,
                    context: '1'
                },
                parent: undefined
            }
        ]);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.unregisterLoggables();
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), []);
    });
    it('prevents external changes to the registry', function() {
        var loggable = {};
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.registerLoggable(loggable, {
            ve: 1,
            context: '1'
        });
        var loggables = _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables();
        loggables.pop();
        assert.sameDeepMembers(_visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.getNonDomLoggables(), [
            {
                loggable: loggable,
                config: {
                    ve: 1,
                    context: '1'
                },
                parent: undefined
            }
        ]);
        _visual_logging_testing_js__WEBPACK_IMPORTED_MODULE_0__.NonDomState.unregisterLoggables();
    });
}); //# sourceMappingURL=NonDomState.test.js.map


}),
"./ui/visual_logging/visual_logging-testing.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Debugging: function() { return /* reexport module object */ _Debugging_js__WEBPACK_IMPORTED_MODULE_0__; },
  DomState: function() { return /* reexport module object */ _DomState_js__WEBPACK_IMPORTED_MODULE_1__; },
  LoggingConfig: function() { return /* reexport module object */ _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__; },
  LoggingDriver: function() { return /* reexport module object */ _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__; },
  LoggingEvents: function() { return /* reexport module object */ _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__; },
  LoggingState: function() { return /* reexport module object */ _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__; },
  NonDomState: function() { return /* reexport module object */ _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__; }
});
/* harmony import */var _Debugging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Debugging.js */ "./ui/visual_logging/Debugging.js");
/* harmony import */var _DomState_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DomState.js */ "./ui/visual_logging/DomState.js");
/* harmony import */var _LoggingConfig_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoggingConfig.js */ "./ui/visual_logging/LoggingConfig.js");
/* harmony import */var _LoggingDriver_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoggingDriver.js */ "./ui/visual_logging/LoggingDriver.js");
/* harmony import */var _LoggingEvents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoggingEvents.js */ "./ui/visual_logging/LoggingEvents.js");
/* harmony import */var _LoggingState_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LoggingState.js */ "./ui/visual_logging/LoggingState.js");
/* harmony import */var _NonDomState_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NonDomState.js */ "./ui/visual_logging/NonDomState.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







 //# sourceMappingURL=visual_logging-testing.js.map


}),

}]);