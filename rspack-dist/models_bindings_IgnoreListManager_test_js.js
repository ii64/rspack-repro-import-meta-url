"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_bindings_IgnoreListManager_test_js"], {
"./models/bindings/IgnoreListManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ResourceTreeHelpers.js */ "./testing/ResourceTreeHelpers.js");
/* harmony import */var _testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/UISourceCodeHelpers.js */ "./testing/UISourceCodeHelpers.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bindings.js */ "./models/bindings/bindings.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
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







// Same as in IgnoreListManager.ts.
var UIStrings = {
    removeFromIgnoreList: 'Remove from ignore list',
    addScriptToIgnoreList: 'Add script to ignore list',
    addDirectoryToIgnoreList: 'Add directory to ignore list',
    addAllContentScriptsToIgnoreList: 'Add all extension scripts to ignore list',
    addAllThirdPartyScriptsToIgnoreList: 'Add all third-party scripts to ignore list'
};
var sourceMapThirdPartyFolderUrl = 'http://a.b.c/lib';
var sourceMapThirdPartyUrl = 'http://a.b.c/lib/source1.ts';
var sourceMapNodeModulesUrl = 'http://a.b.c/node_modules/library/source3.ts';
var sourceMapFolderUrl = 'http://a.b.c/myapp';
var sourceMapFile1Url = 'http://a.b.c/myapp/file1.ts';
var sourceMapFile2Url = 'http://a.b.c/myapp/file2.ts';
var sourceMap = {
    version: 3,
    file: './foo.js',
    mappings: '',
    sources: [
        sourceMapThirdPartyUrl,
        sourceMapFile1Url,
        sourceMapFile2Url,
        sourceMapNodeModulesUrl
    ],
    sourcesContent: [
        '// File 1\n'
    ],
    names: [],
    sourceRoot: '',
    x_google_ignoreList: [
        0
    ]
};
function notNull(val) {
    assert.exists(val);
    return val;
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_2__.describeWithMockConnection)('IgnoreListManager', function() {
    var getContextMenu = // Wrapper around getIgnoreListURLContextMenuItems to make its result more convenient for testing
    function getContextMenu(uiSourceCode) {
        var items = [];
        var callbacks = new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = ignoreListManager.getIgnoreListURLContextMenuItems(uiSourceCode)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, text = _step_value.text, callback = _step_value.callback;
                items.push(text);
                callbacks.set(text, callback);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return {
            items: items,
            callbacks: callbacks
        };
    };
    var getFolderContextMenu = // Wrapper around getIgnoreListFolderContextMenuItems to make its result more convenient for testing
    function getFolderContextMenu(url) {
        var items = [];
        var callbacks = new Map();
        var workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
        var options = {
            isContentScript: url === contentScriptFolderUrl,
            isKnownThirdParty: url === sourceMapThirdPartyFolderUrl,
            isCurrentlyIgnoreListed: ALL_URLS.every(function(scriptUrl) {
                return !scriptUrl.startsWith(url) || ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(notNull(workspace.uiSourceCodeForURL(scriptUrl)));
            })
        };
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = ignoreListManager.getIgnoreListFolderContextMenuItems(url, options)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _step_value = _step.value, text = _step_value.text, callback = _step_value.callback;
                items.push(text);
                callbacks.set(text, callback);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        return {
            items: items,
            callbacks: callbacks
        };
    };
    var debuggerModel;
    var ignoreListManager;
    var uiSourceCode;
    var webpackUiSourceCode;
    var thirdPartyUiSourceCode;
    var nodeModulesUiSourceCode;
    var sourceMapFile1UiSourceCode;
    var sourceMapFile2UiSourceCode;
    var contentScriptUiSourceCode;
    // This test simulates the behavior of the IgnoreListManager with the
    // following document, which contains two inline <script>s, one with
    // a `//# sourceURL` annotation and one without.
    //
    //  <!DOCTYPE html>
    //  <html>
    //  <head>
    //  <meta charset=utf-8>
    //  <script>
    //  function foo() { console.log("foo"); }
    //  foo();
    //  //# sourceURL=webpack:///src/foo.js
    //  </script>
    //  </head>
    //  <body>
    //  <script>console.log("bar");</script>
    //  </body>
    //  </html>
    //
    var url = 'http://example.com/index.html';
    var webpackUrl = 'webpack:///src/subfolder/foo.js';
    var webpackFolderUrl = 'webpack:///src';
    var webpackSubfolderUrl = 'webpack:///src/subfolder';
    var contentScriptFolderUrl = 'chrome-extension://abc';
    var contentScriptUrl = 'chrome-extension://abc/content.js';
    var SCRIPTS = [
        {
            scriptId: '1',
            startLine: 4,
            startColumn: 8,
            endLine: 8,
            endColumn: 0,
            sourceURL: webpackUrl,
            hasSourceURLComment: true,
            executionContextAuxData: undefined
        },
        {
            scriptId: '2',
            startLine: 11,
            startColumn: 8,
            endLine: 11,
            endColumn: 27,
            sourceURL: url,
            sourceMapURL: 'data:,' + encodeURIComponent(JSON.stringify(sourceMap)),
            hasSourceURLComment: false
        },
        {
            scriptId: '3',
            startLine: 4,
            startColumn: 8,
            endLine: 8,
            endColumn: 0,
            sourceURL: contentScriptUrl,
            executionContextAuxData: {
                isDefault: false
            },
            hasSourceURLComment: true
        }
    ];
    var ALL_URLS = _to_consumable_array(sourceMap.sources).concat(_to_consumable_array(SCRIPTS.map(function(param) {
        var sourceURL = param.sourceURL;
        return sourceURL;
    })));
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var forceNew, target, targetManager, workspace, resourceMapping, debuggerWorkspaceBinding, hash, length, embedderName, executionContextId;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    forceNew = true;
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.createTarget)();
                    targetManager = target.targetManager();
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.PageResourceLoader.PageResourceLoader.instance({
                        forceNew: forceNew,
                        maxConcurrentLoads: 1,
                        loadOverride: null
                    });
                    workspace = _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.WorkspaceImpl.instance();
                    resourceMapping = new _bindings_js__WEBPACK_IMPORTED_MODULE_6__.ResourceMapping.ResourceMapping(targetManager, workspace);
                    debuggerWorkspaceBinding = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance({
                        forceNew: forceNew,
                        resourceMapping: resourceMapping,
                        targetManager: targetManager
                    });
                    ignoreListManager = _bindings_js__WEBPACK_IMPORTED_MODULE_6__.IgnoreListManager.IgnoreListManager.instance({
                        forceNew: forceNew,
                        debuggerWorkspaceBinding: debuggerWorkspaceBinding
                    });
                    // Inject the HTML document resource.
                    (0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.createResource)((0,_testing_ResourceTreeHelpers_js__WEBPACK_IMPORTED_MODULE_3__.getMainFrame)(target), url, 'text/html', '');
                    uiSourceCode = notNull(workspace.uiSourceCodeForURL(url));
                    // Register the inline <script>s.
                    hash = '';
                    length = 0;
                    embedderName = url;
                    executionContextId = 1;
                    debuggerModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.DebuggerModel);
                    SCRIPTS.forEach(function(param) {
                        var scriptId = param.scriptId, startLine = param.startLine, startColumn = param.startColumn, endLine = param.endLine, endColumn = param.endColumn, executionContextAuxData = param.executionContextAuxData, sourceURL = param.sourceURL, hasSourceURLComment = param.hasSourceURLComment, sourceMapURL = param.sourceMapURL;
                        debuggerModel.parsedScriptSource(scriptId, sourceURL, startLine, startColumn, endLine, endColumn, executionContextId, hash, executionContextAuxData, false, sourceMapURL, hasSourceURLComment, false, length, false, null, null, null, null, embedderName);
                    });
                    assert.lengthOf(debuggerModel.scripts(), SCRIPTS.length);
                    webpackUiSourceCode = notNull(workspace.uiSourceCodeForURL(webpackUrl));
                    contentScriptUiSourceCode = notNull(workspace.uiSourceCodeForURL(contentScriptUrl));
                    return [
                        4,
                        debuggerWorkspaceBinding.waitForUISourceCodeAdded(sourceMapThirdPartyUrl, target)
                    ];
                case 1:
                    thirdPartyUiSourceCode = _state.sent();
                    sourceMapFile1UiSourceCode = notNull(workspace.uiSourceCodeForURL(sourceMapFile1Url));
                    sourceMapFile2UiSourceCode = notNull(workspace.uiSourceCodeForURL(sourceMapFile2Url));
                    nodeModulesUiSourceCode = notNull(workspace.uiSourceCodeForURL(sourceMapNodeModulesUrl));
                    return [
                        2
                    ];
            }
        });
    }));
    it('default is do not ignore', function() {
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('default is ignore third party', function() {
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('default is ignore content scripts from extensions', function() {
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('script context menu enables and disables ignore listing', function() {
        var _getContextMenu = getContextMenu(webpackUiSourceCode), items = _getContextMenu.items, callbacks = _getContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref;
        ref = getContextMenu(webpackUiSourceCode), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('script context menu enables and disables ignore listing for content scripts', function() {
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        var _getContextMenu = getContextMenu(contentScriptUiSourceCode), items = _getContextMenu.items, callbacks = _getContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        var ref;
        ref = getContextMenu(contentScriptUiSourceCode), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList,
            UIStrings.addAllContentScriptsToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addAllContentScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('folder context menu enables and disables ignore listing for content scripts', function() {
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        var _getFolderContextMenu = getFolderContextMenu(contentScriptFolderUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
        var ref;
        ref = getFolderContextMenu(contentScriptFolderUrl), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList,
            UIStrings.addAllContentScriptsToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addAllContentScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('script context menu enables and disables ignore listing for third party scripts', function() {
        var _getContextMenu = getContextMenu(thirdPartyUiSourceCode), items = _getContextMenu.items, callbacks = _getContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
        var ref;
        ref = getContextMenu(thirdPartyUiSourceCode), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList,
            UIStrings.addAllThirdPartyScriptsToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addAllThirdPartyScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('folder context menu enables and disables ignore listing for third party scripts', function() {
        var _getFolderContextMenu = getFolderContextMenu(sourceMapThirdPartyFolderUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
        var ref;
        ref = getFolderContextMenu(sourceMapThirdPartyFolderUrl), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList,
            UIStrings.addAllThirdPartyScriptsToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addAllThirdPartyScriptsToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('folder context menu disables default node_modules ignore listing rule', function() {
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(nodeModulesUiSourceCode));
        var _getFolderContextMenu = getFolderContextMenu(sourceMapNodeModulesUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(nodeModulesUiSourceCode));
    });
    it('folder context menu enables and disables ignore listing', function() {
        var _getFolderContextMenu = getFolderContextMenu(webpackFolderUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref;
        ref = getFolderContextMenu(webpackFolderUrl), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('ignore listed folder can be reenabled by script context menu', function() {
        var _getFolderContextMenu = getFolderContextMenu(webpackFolderUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref;
        ref = getContextMenu(webpackUiSourceCode), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref1;
        ref1 = getFolderContextMenu(webpackFolderUrl), items = ref1.items, callbacks = ref1.callbacks, ref1;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('ignore listed folder can be reenabled by subfolder context menu', function() {
        var _getFolderContextMenu = getFolderContextMenu(webpackFolderUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref;
        ref = getFolderContextMenu(webpackSubfolderUrl), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref1;
        ref1 = getFolderContextMenu(webpackFolderUrl), items = ref1.items, callbacks = ref1.callbacks, ref1;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('enable ignore listing undoes disable', function() {
        // Ignore the folder
        var _getFolderContextMenu = getFolderContextMenu(sourceMapFolderUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        var ref;
        // Disable the folder ignore list rule by way of the script context menu
        ref = getContextMenu(sourceMapFile1UiSourceCode), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        var ref1;
        // Verify that we have option to add folder to ignore list (but we won't use it)
        ref1 = getFolderContextMenu(sourceMapFolderUrl), items = ref1.items, callbacks = ref1.callbacks, ref1;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        var ref2;
        // Reenable from same context menu on same file
        ref2 = getContextMenu(sourceMapFile1UiSourceCode), items = ref2.items, callbacks = ref2.callbacks, ref2;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        // This undoes the disable -- reenabling the directory rule
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        var ref3;
        // Verify that we have option to remove folder from ignore list
        ref3 = getFolderContextMenu(sourceMapFolderUrl), items = ref3.items, callbacks = ref3.callbacks, ref3;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        // Remove folder from ignore list to verify there are no other ignore listing rules
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
    });
    it('enable ignore listing does not undo disable if done from a different file', function() {
        // Ignore the folder
        var _getFolderContextMenu = getFolderContextMenu(sourceMapFolderUrl), items = _getFolderContextMenu.items, callbacks = _getFolderContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addDirectoryToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addDirectoryToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        var ref;
        // Disable the folder ignore list rule by way of the script context menu
        ref = getContextMenu(sourceMapFile1UiSourceCode), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.removeFromIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.removeFromIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
        var ref1;
        // Enable ignore listing on a different file in same folder
        ref1 = getContextMenu(sourceMapFile2UiSourceCode), items = ref1.items, callbacks = ref1.callbacks, ref1;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        // This creates a rule for just that file
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile1UiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(sourceMapFile2UiSourceCode));
    });
    it('script context menu enables global ignore listing toggle', function() {
        var _getContextMenu = getContextMenu(webpackUiSourceCode), items = _getContextMenu.items, callbacks = _getContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        ignoreListManager.enableIgnoreListing = false;
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref;
        ref = getContextMenu(webpackUiSourceCode), items = ref.items, callbacks = ref.callbacks, ref;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isTrue(ignoreListManager.enableIgnoreListing);
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
    });
    it('content script context menu enables global ignore listing toggle', function() {
        ignoreListManager.enableIgnoreListing = false;
        var _getContextMenu = getContextMenu(contentScriptUiSourceCode), items = _getContextMenu.items, callbacks = _getContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList,
            UIStrings.addAllContentScriptsToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addAllContentScriptsToIgnoreList))();
        assert.isTrue(ignoreListManager.enableIgnoreListing);
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(contentScriptUiSourceCode));
    });
    it('third party script context menu enables global ignore listing toggle', function() {
        ignoreListManager.enableIgnoreListing = false;
        assert.isFalse(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
        var _getContextMenu = getContextMenu(thirdPartyUiSourceCode), items = _getContextMenu.items, callbacks = _getContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList,
            UIStrings.addAllThirdPartyScriptsToIgnoreList
        ]);
        notNull(callbacks.get(UIStrings.addAllThirdPartyScriptsToIgnoreList))();
        assert.isTrue(ignoreListManager.enableIgnoreListing);
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(thirdPartyUiSourceCode));
    });
    it('provides no context menu items when all contents in folder are individually ignored', function() {
        var _getContextMenu = getContextMenu(webpackUiSourceCode), items = _getContextMenu.items, callbacks = _getContextMenu.callbacks;
        assert.sameMembers(items, [
            UIStrings.addScriptToIgnoreList
        ]);
        // Disable webpack script
        notNull(callbacks.get(UIStrings.addScriptToIgnoreList))();
        assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(webpackUiSourceCode));
        var ref;
        // Get context menu for folder only containing the script we disabled
        ref = getFolderContextMenu(webpackFolderUrl), items = ref.items, callbacks = ref.callbacks, ref;
        // Verify that no context menu items are provided
        assert.sameMembers(items, []);
    });
    describe('isUserOrSourceMapIgnoreListedUISourceCode', function() {
        it('ignores UISourceCodes that are marked', function() {
            var uiSourceCode = (0,_testing_UISourceCodeHelpers_js__WEBPACK_IMPORTED_MODULE_4__.createContentProviderUISourceCode)({
                url: 'debugger://foo',
                projectType: _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_5__.Workspace.projectTypes.Debugger,
                mimeType: 'text/javascript'
            }).uiSourceCode;
            uiSourceCode.markAsUnconditionallyIgnoreListed();
            assert.isTrue(ignoreListManager.isUserOrSourceMapIgnoreListedUISourceCode(uiSourceCode));
        });
    });
}); //# sourceMappingURL=IgnoreListManager.test.js.map


}),

}]);