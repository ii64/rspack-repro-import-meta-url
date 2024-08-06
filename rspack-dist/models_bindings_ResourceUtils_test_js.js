"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_ResourceUtils_test_js"], {
"./models/bindings/ResourceUtils.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('ResourceUtils', function() {
    var INSPECTED_URL_SCHEME = 'http://';
    var INSPECTED_URL_DOMAIN = 'example.com';
    var OTHER_DOMAIN = 'example.org';
    var INSPECTED_URL_PATH_COMPONENTS = [
        '',
        'foo',
        'bar'
    ];
    var INSPECTED_URL_PATH = INSPECTED_URL_PATH_COMPONENTS.join('/');
    var INSPECTED_URL = INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + INSPECTED_URL_PATH;
    var RESOURCE_URL = INSPECTED_URL + '?RESOURCE_URL';
    var RESOURCE = {
        displayName: 'RESOURCE_DISPLAY_NAME'
    };
    var UI_SOURCE_CODE_URL = INSPECTED_URL + '?UI_SOURCE_CODE_URL';
    var UI_SOURCE_CODE = {
        displayName: function() {
            return 'UI_SOURCE_CODE_DISPLAY_NAME';
        }
    };
    var QUERY_STRING = '?QUERY_STRING';
    var OTHER_PATH = '/OTHER/PATH';
    var INVALID_URL = ':~INVALID_URL~:';
    var target;
    beforeEach(function() {
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.Target.Type.Tab
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)({
            parentTarget: tabTarget
        });
        target.setInspectedURL(INSPECTED_URL);
        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ResourceTreeModel.ResourceTreeModel.prototype, 'resourceForURL').returns(null).withArgs(RESOURCE_URL).returns(RESOURCE);
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_3__.Workspace.WorkspaceImpl.instance();
        sinon.stub(workspace, 'uiSourceCodeForURL').returns(null).withArgs(RESOURCE_URL).returns(UI_SOURCE_CODE).withArgs(UI_SOURCE_CODE_URL).returns(UI_SOURCE_CODE);
    });
    it('returns a resource name if available', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(RESOURCE_URL), RESOURCE.displayName);
            return [
                2
            ];
        });
    }));
    it('returns a resource name if available', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(UI_SOURCE_CODE_URL), UI_SOURCE_CODE.displayName());
            return [
                2
            ];
        });
    }));
    it('returns path relative to the last main URL component if it matches and does not have query string', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + QUERY_STRING), INSPECTED_URL_PATH_COMPONENTS.slice(-1)[0] + QUERY_STRING);
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + OTHER_PATH), INSPECTED_URL_PATH_COMPONENTS.slice(-1)[0] + OTHER_PATH);
            return [
                2
            ];
        });
    }));
    it('returns path relative to the main URL domain if it matches and does have query string', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            target.setInspectedURL(INSPECTED_URL + QUERY_STRING);
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + QUERY_STRING), INSPECTED_URL_PATH + QUERY_STRING);
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL + OTHER_PATH), INSPECTED_URL_PATH + OTHER_PATH);
            return [
                2
            ];
        });
    }));
    it('returns path relative to the main URL domain if only domain matches', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + OTHER_PATH), OTHER_PATH);
            return [
                2
            ];
        });
    }));
    it('returns path relative to the main URL domain if path partially matches', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + '/' + INSPECTED_URL_PATH_COMPONENTS[1] + '/'), '/' + INSPECTED_URL_PATH_COMPONENTS[1] + '/');
            return [
                2
            ];
        });
    }));
    it('returns main URL domain if it matches and the path is empty', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + INSPECTED_URL_DOMAIN + '/'), INSPECTED_URL_DOMAIN + '/');
            return [
                2
            ];
        });
    }));
    it('strips scheme if domain does not match main URL', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INSPECTED_URL_SCHEME + OTHER_DOMAIN + OTHER_PATH), OTHER_DOMAIN + OTHER_PATH);
            return [
                2
            ];
        });
    }));
    it('returns URL as is if it cannot be parsed', /*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            assert.strictEqual(_bindings_js__WEBPACK_IMPORTED_MODULE_4__.ResourceUtils.displayNameForURL(INVALID_URL), INVALID_URL);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=ResourceUtils.test.js.map


}),

}]);