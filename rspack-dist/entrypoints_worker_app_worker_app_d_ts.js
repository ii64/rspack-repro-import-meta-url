"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["entrypoints_worker_app_worker_app_d_ts"], {
"./entrypoints/worker_app/WorkerMain.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  WorkerMainImpl: function() { return WorkerMainImpl; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}





var UIStrings = {
    /**
     *@description Text that refers to the main target.
     */ main: 'Main'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('entrypoints/worker_app/WorkerMain.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var workerMainImplInstance;
var WorkerMainImpl = /*#__PURE__*/ function() {
    "use strict";
    function WorkerMainImpl() {
        _class_call_check(this, WorkerMainImpl);
    }
    _create_class(WorkerMainImpl, [
        {
            key: "run",
            value: function run() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        void _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Connections.initMainConnection(/*#__PURE__*/ _async_to_generator(function() {
                            return _ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        return [
                                            4,
                                            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().maybeAttachInitialTarget()
                                        ];
                                    case 1:
                                        if (_state.sent()) {
                                            return [
                                                2
                                            ];
                                        }
                                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().createTarget('main', i18nString(UIStrings.main), _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker, null);
                                        return [
                                            2
                                        ];
                                }
                            });
                        }), _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.TargetDetachedDialog.TargetDetachedDialog.webSocketConnectionLost);
                        new _panels_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_3__.NetworkPanelIndicator.NetworkPanelIndicator();
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
                    forceNew: null
                };
                var forceNew = opts.forceNew;
                if (!workerMainImplInstance || forceNew) {
                    workerMainImplInstance = new WorkerMainImpl();
                }
                return workerMainImplInstance;
            }
        }
    ]);
    return WorkerMainImpl;
}();
_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Runnable.registerEarlyInitializationRunnable(WorkerMainImpl.instance);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ChildTargetManager.ChildTargetManager.install(function() {
    var _ref = _async_to_generator(function(param) {
        var target, waitingForDebugger, debuggerModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    target = param.target, waitingForDebugger = param.waitingForDebugger;
                    // Only pause the new worker if debugging SW - we are going through the pause on start checkbox.
                    if (target.parentTarget() || target.type() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Type.ServiceWorker || !waitingForDebugger) {
                        return [
                            2
                        ];
                    }
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.DebuggerModel);
                    if (!debuggerModel) {
                        return [
                            2
                        ];
                    }
                    if (!!debuggerModel.isReadyToPause()) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        debuggerModel.once(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DebuggerModel.Events.DebuggerIsReadyToPause)
                    ];
                case 1:
                    _state.sent();
                    _state.label = 2;
                case 2:
                    debuggerModel.pause();
                    return [
                        2
                    ];
            }
        });
    });
    return function(_) {
        return _ref.apply(this, arguments);
    };
}()); //# sourceMappingURL=WorkerMain.js.map


}),
"./entrypoints/worker_app/worker_app.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _shell_shell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shell/shell.js */ "./entrypoints/shell/shell.js");
/* harmony import */var _panels_browser_debugger_browser_debugger_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/browser_debugger/browser_debugger-meta.js */ "./panels/browser_debugger/browser_debugger-meta.js");
/* harmony import */var _panels_developer_resources_developer_resources_meta_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/developer_resources/developer_resources-meta.js */ "./panels/developer_resources/developer_resources-meta.js");
/* harmony import */var _panels_issues_issues_meta_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/issues/issues-meta.js */ "./panels/issues/issues-meta.js");
/* harmony import */var _panels_layer_viewer_layer_viewer_meta_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../panels/layer_viewer/layer_viewer-meta.js */ "./panels/layer_viewer/layer_viewer-meta.js");
/* harmony import */var _panels_mobile_throttling_mobile_throttling_meta_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/mobile_throttling/mobile_throttling-meta.js */ "./panels/mobile_throttling/mobile_throttling-meta.js");
/* harmony import */var _panels_network_network_meta_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../panels/network/network-meta.js */ "./panels/network/network-meta.js");
/* harmony import */var _panels_application_application_meta_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../panels/application/application-meta.js */ "./panels/application/application-meta.js");
/* harmony import */var _panels_timeline_timeline_meta_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/timeline/timeline-meta.js */ "./panels/timeline/timeline-meta.js");
/* harmony import */var _WorkerMain_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WorkerMain.js */ "./entrypoints/worker_app/WorkerMain.js");












}),

}]);