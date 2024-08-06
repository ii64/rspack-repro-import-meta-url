"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_CSSPlugin_test_js"], {
"./panels/sources/CSSPlugin.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _sources_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sources.js */ "./panels/sources/sources.js");
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








var CSSPlugin = _sources_js__WEBPACK_IMPORTED_MODULE_7__.CSSPlugin.CSSPlugin;
describe('CSSPlugin', function() {
    describe('accepts', function() {
        it('holds true for documents', function() {
            var uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
            assert.isTrue(CSSPlugin.accepts(uiSourceCode));
        });
        it('holds true for style sheets', function() {
            var uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
            uiSourceCode.contentType.returns(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Stylesheet);
            assert.isTrue(CSSPlugin.accepts(uiSourceCode));
        });
    });
});
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('CSSPlugin', function() {
    beforeEach(function() {
        sinon.stub(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ShortcutRegistry.ShortcutRegistry, 'instance').returns({
            shortcutTitleForAction: function() {},
            shortcutsForAction: function() {
                return [];
            },
            getShortcutListener: function() {}
        });
        var tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: tabTarget,
            subtype: 'prerender'
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createTarget)({
            parentTarget: tabTarget
        });
    });
    function findAutocompletion(extensions) {
        if ('value' in extensions && extensions.value.override) {
            return extensions.value.override[0] || null;
        }
        if ('length' in extensions) {
            for(var i = 0; i < extensions.length; ++i){
                var result = findAutocompletion(extensions[i]);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    }
    it('suggests CSS class names from the stylesheet', /*#__PURE__*/ _async_to_generator(function() {
        var URL, uiSourceCode, plugin, autocompletion, FROM, STYLESHEET_ID, CLASS_NAMES, completionResult;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    URL = 'http://example.com/styles.css';
                    uiSourceCode = sinon.createStubInstance(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UISourceCode);
                    uiSourceCode.url.returns(URL);
                    plugin = new CSSPlugin(uiSourceCode);
                    autocompletion = findAutocompletion(plugin.editorExtension());
                    FROM = 42;
                    sinon.stub(_third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_5__.Tree.prototype, 'resolveInner').returns({
                        name: 'ClassName',
                        from: FROM
                    });
                    STYLESHEET_ID = 'STYLESHEET_ID';
                    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel.prototype, 'getStyleSheetIdsForURL').withArgs(URL).returns([
                        STYLESHEET_ID
                    ]);
                    CLASS_NAMES = [
                        'foo',
                        'bar',
                        'baz'
                    ];
                    sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.CSSModel.CSSModel.prototype, 'getClassNames').withArgs(STYLESHEET_ID).resolves(CLASS_NAMES);
                    return [
                        4,
                        autocompletion({
                            state: {
                                field: function() {}
                            }
                        })
                    ];
                case 1:
                    completionResult = _state.sent();
                    assert.deepStrictEqual(completionResult, {
                        from: FROM,
                        options: [
                            {
                                type: 'constant',
                                label: CLASS_NAMES[0]
                            },
                            {
                                type: 'constant',
                                label: CLASS_NAMES[1]
                            },
                            {
                                type: 'constant',
                                label: CLASS_NAMES[2]
                            }
                        ]
                    });
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=CSSPlugin.test.js.map


}),

}]);