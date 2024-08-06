"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_OverlayPersistentHighlighter_test_js"], {
"./core/sdk/OverlayPersistentHighlighter.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _common_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/common.js */ "./core/common/common.js");
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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



function resetSavedSetting() {
    var forcedState = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    var setting = _common_common_js__WEBPACK_IMPORTED_MODULE_1__.Settings.Settings.instance().createLocalSetting('persistent-highlight-setting', []);
    setting.set(forcedState);
}
function assertSavedSettingState(expected) {
    var setting = _common_common_js__WEBPACK_IMPORTED_MODULE_1__.Settings.Settings.instance().createLocalSetting('persistent-highlight-setting', []);
    assert.deepEqual(setting.get(), expected);
}
var NON_RELATED_DOCUMENT_URL_FOR_TEST = 'https://notexample.com/';
var DOCUMENT_URL_FOR_TEST = 'https://example.com/';
var NODE_PATH_FOR_TEST = 'body > div';
var EXISTING_NODE_ID = 1;
var PATH_TO_NODE_ID_FOR_TEST = {
    'body > div': EXISTING_NODE_ID,
    'body > div + a': 2
};
var NODE_ID_TO_PATH_FOR_TEST = Object.fromEntries(Object.entries(PATH_TO_NODE_ID_FOR_TEST).map(function(param) {
    var _param = _sliced_to_array(param, 2), path = _param[0], nodeId = _param[1];
    return [
        nodeId,
        path
    ];
}));
function createStubDOMNode(nodeId) {
    if (!nodeId) {
        return null;
    }
    var path = NODE_ID_TO_PATH_FOR_TEST[nodeId];
    if (!path) {
        return null;
    }
    var domNode = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode, {
        path: path
    });
    domNode.id = nodeId;
    return domNode;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('OverlayPersistentHighlighter', function() {
    var mockOverlayModel;
    var stubbedCallbacks;
    var highlighter;
    beforeEach(function() {
        stubbedCallbacks = {
            onFlexOverlayStateChanged: sinon.stub(),
            onGridOverlayStateChanged: sinon.stub(),
            onScrollSnapOverlayStateChanged: sinon.stub(),
            onContainerQueryOverlayStateChanged: sinon.stub()
        };
        var stubDOMDocument = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMDocument);
        // Somehow we're not able to stub this properly
        // sinon says cannot stub non-existent property.
        stubDOMDocument.documentURL = DOCUMENT_URL_FOR_TEST;
        mockOverlayModel = sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel, {
            getDOMModel: sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMModel, {
                existingDocument: stubDOMDocument,
                requestDocument: sinon.stub().resolves(stubDOMDocument),
                nodeForId: sinon.stub().callsFake(createStubDOMNode),
                pushNodeByPathToFrontend: sinon.stub().callsFake(function() {
                    var _ref = _async_to_generator(function(path) {
                        var _PATH_TO_NODE_ID_FOR_TEST_path;
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                (_PATH_TO_NODE_ID_FOR_TEST_path = PATH_TO_NODE_ID_FOR_TEST[path]) !== null && _PATH_TO_NODE_ID_FOR_TEST_path !== void 0 ? _PATH_TO_NODE_ID_FOR_TEST_path : null
                            ];
                        });
                    });
                    return function(path) {
                        return _ref.apply(this, arguments);
                    };
                }())
            }),
            target: sinon.createStubInstance(_sdk_js__WEBPACK_IMPORTED_MODULE_2__.Target.Target, {
                overlayAgent: {
                    invoke_setShowGridOverlays: sinon.stub(),
                    invoke_setShowFlexOverlays: sinon.stub(),
                    invoke_setShowScrollSnapOverlays: sinon.stub(),
                    invoke_setShowContainerQueryOverlays: sinon.stub(),
                    invoke_setShowIsolatedElements: sinon.stub()
                }
            })
        });
        highlighter = new _sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayPersistentHighlighter.OverlayPersistentHighlighter(mockOverlayModel, stubbedCallbacks);
        resetSavedSetting();
    });
    it('is able to highlight flexbox elements', function() {
        highlighter.highlightFlexInOverlay(EXISTING_NODE_ID);
        assert.deepEqual(stubbedCallbacks.onFlexOverlayStateChanged.firstCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: true
            }
        ]);
        assert(highlighter.isFlexHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([
            {
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: "FLEX" /* SDK.OverlayPersistentHighlighter.HighlightType.FLEX */ 
            }
        ]);
        highlighter.hideFlexInOverlay(EXISTING_NODE_ID);
        assert.deepEqual(stubbedCallbacks.onFlexOverlayStateChanged.secondCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: false
            }
        ]);
        assert(!highlighter.isFlexHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([]);
    });
    it('is able to highlight grid elements', function() {
        highlighter.highlightGridInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isGridHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onGridOverlayStateChanged.firstCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: true
            }
        ]);
        assertSavedSettingState([
            {
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: "GRID" /* SDK.OverlayPersistentHighlighter.HighlightType.GRID */ 
            }
        ]);
        highlighter.hideGridInOverlay(EXISTING_NODE_ID);
        assert.deepEqual(stubbedCallbacks.onGridOverlayStateChanged.secondCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: false
            }
        ]);
        assert(!highlighter.isGridHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([]);
    });
    it('is able to highlight scroll snap elements', function() {
        highlighter.highlightScrollSnapInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isScrollSnapHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onScrollSnapOverlayStateChanged.firstCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: true
            }
        ]);
        assertSavedSettingState([
            {
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: "SCROLL_SNAP" /* SDK.OverlayPersistentHighlighter.HighlightType.SCROLL_SNAP */ 
            }
        ]);
        highlighter.hideScrollSnapInOverlay(EXISTING_NODE_ID);
        assert(!highlighter.isScrollSnapHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onScrollSnapOverlayStateChanged.secondCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: false
            }
        ]);
        assertSavedSettingState([]);
    });
    it('is able to highlight container query elements', function() {
        highlighter.highlightContainerQueryInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isContainerQueryHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onContainerQueryOverlayStateChanged.firstCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: true
            }
        ]);
        assertSavedSettingState([
            {
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: "CONTAINER_QUERY" /* SDK.OverlayPersistentHighlighter.HighlightType.CONTAINER_QUERY */ 
            }
        ]);
        highlighter.hideContainerQueryInOverlay(EXISTING_NODE_ID);
        assert(!highlighter.isContainerQueryHighlighted(EXISTING_NODE_ID));
        assert.deepEqual(stubbedCallbacks.onContainerQueryOverlayStateChanged.secondCall.args, [
            {
                nodeId: EXISTING_NODE_ID,
                enabled: false
            }
        ]);
        assertSavedSettingState([]);
    });
    it('is able to highlight isolated elements', function() {
        highlighter.highlightIsolatedElementInOverlay(EXISTING_NODE_ID);
        assert(highlighter.isIsolatedElementHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([
            {
                path: NODE_PATH_FOR_TEST,
                url: DOCUMENT_URL_FOR_TEST,
                type: "ISOLATED_ELEMENT" /* SDK.OverlayPersistentHighlighter.HighlightType.ISOLATED_ELEMENT */ 
            }
        ]);
        highlighter.hideIsolatedElementInOverlay(EXISTING_NODE_ID);
        assert(!highlighter.isIsolatedElementHighlighted(EXISTING_NODE_ID));
        assertSavedSettingState([]);
    });
    it('updating setting state keeps the highlights not related to the current document', function() {
        resetSavedSetting([
            {
                url: NON_RELATED_DOCUMENT_URL_FOR_TEST,
                path: NODE_PATH_FOR_TEST,
                type: "FLEX" /* SDK.OverlayPersistentHighlighter.HighlightType.FLEX */ 
            }
        ]);
        highlighter.highlightFlexInOverlay(EXISTING_NODE_ID);
        highlighter.hideFlexInOverlay(EXISTING_NODE_ID);
        assertSavedSettingState([
            {
                url: NON_RELATED_DOCUMENT_URL_FOR_TEST,
                path: NODE_PATH_FOR_TEST,
                type: "FLEX" /* SDK.OverlayPersistentHighlighter.HighlightType.FLEX */ 
            }
        ]);
    });
    it('restoring highlights for document highlights all the saved higlights in the setting for the current document', /*#__PURE__*/ _async_to_generator(function() {
        var paths;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    paths = Object.keys(PATH_TO_NODE_ID_FOR_TEST);
                    resetSavedSetting([
                        {
                            url: DOCUMENT_URL_FOR_TEST,
                            path: paths[0],
                            type: "GRID" /* SDK.OverlayPersistentHighlighter.HighlightType.GRID */ 
                        },
                        {
                            url: DOCUMENT_URL_FOR_TEST,
                            path: paths[1],
                            type: "FLEX" /* SDK.OverlayPersistentHighlighter.HighlightType.FLEX */ 
                        }
                    ]);
                    return [
                        4,
                        highlighter.restoreHighlightsForDocument()
                    ];
                case 1:
                    _state.sent();
                    assert(stubbedCallbacks.onGridOverlayStateChanged.calledWith({
                        nodeId: PATH_TO_NODE_ID_FOR_TEST[paths[0]],
                        enabled: true
                    }));
                    assert(highlighter.isGridHighlighted(PATH_TO_NODE_ID_FOR_TEST[paths[0]]));
                    assert(stubbedCallbacks.onFlexOverlayStateChanged.calledWith({
                        nodeId: PATH_TO_NODE_ID_FOR_TEST[paths[1]],
                        enabled: true
                    }));
                    assert(highlighter.isFlexHighlighted(PATH_TO_NODE_ID_FOR_TEST[paths[1]]));
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=OverlayPersistentHighlighter.test.js.map


}),

}]);