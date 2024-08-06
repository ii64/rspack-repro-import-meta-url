"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_developer_resources_DeveloperResourcesView_test_js"], {
"./panels/developer_resources/DeveloperResourcesView.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _DeveloperResourcesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeveloperResourcesView.js */ "./panels/developer_resources/DeveloperResourcesView.js");
// Copyright (c) 2024 The Chromium Authors. All rights reserved.
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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



(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('DeveloperResourcesView', function() {
    it('allows selecting resources', /*#__PURE__*/ _async_to_generator(function() {
        var extensionId, initiator, commonInfo, resource1, resource2, resource3, loader, developerResourcesView, _, _1, _2;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    extensionId = 'extensionId';
                    initiator = {
                        target: null,
                        frameId: null,
                        extensionId: extensionId,
                        initiatorUrl: extensionId
                    };
                    commonInfo = {
                        success: true,
                        initiator: initiator,
                        size: 10
                    };
                    resource1 = _object_spread({
                        url: 'http://www.test.com/test.js'
                    }, commonInfo);
                    resource2 = _object_spread({
                        url: 'http://www.test.com/test2.js'
                    }, commonInfo);
                    resource3 = _object_spread({
                        url: 'http://www.test.com/test3.js'
                    }, commonInfo);
                    loader = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance();
                    loader.resourceLoadedThroughExtension(resource1);
                    loader.resourceLoadedThroughExtension(resource2);
                    developerResourcesView = new _DeveloperResourcesView_js__WEBPACK_IMPORTED_MODULE_2__.DeveloperResourcesView();
                    // This is required, as otherwise the view is not updated.
                    sinon.stub(developerResourcesView, 'isShowing').callsFake(function() {
                        return true;
                    });
                    _ = assert.isNull;
                    return [
                        4,
                        developerResourcesView.selectedItem()
                    ];
                case 1:
                    _.apply(assert, [
                        _state.sent()
                    ]);
                    developerResourcesView.update();
                    return [
                        4,
                        developerResourcesView.select(resource2)
                    ];
                case 2:
                    _state.sent();
                    _1 = assert.deepEqual;
                    return [
                        4,
                        developerResourcesView.selectedItem()
                    ];
                case 3:
                    _1.apply(assert, [
                        _state.sent(),
                        resource2
                    ]);
                    loader.resourceLoadedThroughExtension(resource3);
                    _2 = assert.deepEqual;
                    return [
                        4,
                        developerResourcesView.selectedItem()
                    ];
                case 4:
                    _2.apply(assert, [
                        _state.sent(),
                        resource2
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=DeveloperResourcesView.test.js.map


}),

}]);