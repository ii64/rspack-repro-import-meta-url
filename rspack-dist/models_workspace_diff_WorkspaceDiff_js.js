"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_workspace_diff_WorkspaceDiff_js"], {
"./models/workspace_diff/WorkspaceDiff.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  UISourceCodeDiff: function() { return UISourceCodeDiff; },
  UpdateTimeout: function() { return UpdateTimeout; },
  WorkspaceDiffImpl: function() { return WorkspaceDiffImpl; },
  workspaceDiff: function() { return workspaceDiff; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../third_party/diff/diff.js */ "./third_party/diff/diff.js");
/* harmony import */var _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */var _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
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







var WorkspaceDiffImpl = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(WorkspaceDiffImpl, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(WorkspaceDiffImpl);
    function WorkspaceDiffImpl(workspace) {
        _class_call_check(this, WorkspaceDiffImpl);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "uiSourceCodeDiffs", void 0);
        _define_property(_assert_this_initialized(_this), "loadingUISourceCodes", void 0);
        _define_property(_assert_this_initialized(_this), "modifiedUISourceCodesInternal", void 0);
        _this.uiSourceCodeDiffs = new WeakMap();
        _this.loadingUISourceCodes = new Map();
        _this.modifiedUISourceCodesInternal = new Set();
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.WorkingCopyChanged, _this.uiSourceCodeChanged, _assert_this_initialized(_this));
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.WorkingCopyCommitted, _this.uiSourceCodeChanged, _assert_this_initialized(_this));
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeAdded, _this.uiSourceCodeAdded, _assert_this_initialized(_this));
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.UISourceCodeRemoved, _this.uiSourceCodeRemoved, _assert_this_initialized(_this));
        workspace.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.Events.ProjectRemoved, _this.projectRemoved, _assert_this_initialized(_this));
        workspace.uiSourceCodes().forEach(_this.updateModifiedState.bind(_assert_this_initialized(_this)));
        return _this;
    }
    _create_class(WorkspaceDiffImpl, [
        {
            key: "requestDiff",
            value: function requestDiff(uiSourceCode, diffRequestOptions) {
                return this.uiSourceCodeDiff(uiSourceCode).requestDiff(diffRequestOptions);
            }
        },
        {
            key: "subscribeToDiffChange",
            value: function subscribeToDiffChange(uiSourceCode, callback, thisObj) {
                this.uiSourceCodeDiff(uiSourceCode).addEventListener("DiffChanged" /* UISourceCodeDiffEvents.DiffChanged */ , callback, thisObj);
            }
        },
        {
            key: "unsubscribeFromDiffChange",
            value: function unsubscribeFromDiffChange(uiSourceCode, callback, thisObj) {
                this.uiSourceCodeDiff(uiSourceCode).removeEventListener("DiffChanged" /* UISourceCodeDiffEvents.DiffChanged */ , callback, thisObj);
            }
        },
        {
            key: "modifiedUISourceCodes",
            value: function modifiedUISourceCodes() {
                return Array.from(this.modifiedUISourceCodesInternal);
            }
        },
        {
            key: "isUISourceCodeModified",
            value: function isUISourceCodeModified(uiSourceCode) {
                return this.modifiedUISourceCodesInternal.has(uiSourceCode) || this.loadingUISourceCodes.has(uiSourceCode);
            }
        },
        {
            key: "uiSourceCodeDiff",
            value: function uiSourceCodeDiff(uiSourceCode) {
                var diff = this.uiSourceCodeDiffs.get(uiSourceCode);
                if (!diff) {
                    diff = new UISourceCodeDiff(uiSourceCode);
                    this.uiSourceCodeDiffs.set(uiSourceCode, diff);
                }
                return diff;
            }
        },
        {
            key: "uiSourceCodeChanged",
            value: function uiSourceCodeChanged(event) {
                var uiSourceCode = event.data.uiSourceCode;
                void this.updateModifiedState(uiSourceCode);
            }
        },
        {
            key: "uiSourceCodeAdded",
            value: function uiSourceCodeAdded(event) {
                var uiSourceCode = event.data;
                void this.updateModifiedState(uiSourceCode);
            }
        },
        {
            key: "uiSourceCodeRemoved",
            value: function uiSourceCodeRemoved(event) {
                var uiSourceCode = event.data;
                this.removeUISourceCode(uiSourceCode);
            }
        },
        {
            key: "projectRemoved",
            value: function projectRemoved(event) {
                var project = event.data;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = project.uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        this.removeUISourceCode(uiSourceCode);
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
            }
        },
        {
            key: "removeUISourceCode",
            value: function removeUISourceCode(uiSourceCode) {
                this.loadingUISourceCodes.delete(uiSourceCode);
                var uiSourceCodeDiff = this.uiSourceCodeDiffs.get(uiSourceCode);
                if (uiSourceCodeDiff) {
                    uiSourceCodeDiff.dispose = true;
                }
                this.markAsUnmodified(uiSourceCode);
            }
        },
        {
            key: "markAsUnmodified",
            value: function markAsUnmodified(uiSourceCode) {
                this.uiSourceCodeProcessedForTest();
                if (this.modifiedUISourceCodesInternal.delete(uiSourceCode)) {
                    this.dispatchEventToListeners("ModifiedStatusChanged" /* Events.ModifiedStatusChanged */ , {
                        uiSourceCode: uiSourceCode,
                        isModified: false
                    });
                }
            }
        },
        {
            key: "markAsModified",
            value: function markAsModified(uiSourceCode) {
                this.uiSourceCodeProcessedForTest();
                if (this.modifiedUISourceCodesInternal.has(uiSourceCode)) {
                    return;
                }
                this.modifiedUISourceCodesInternal.add(uiSourceCode);
                this.dispatchEventToListeners("ModifiedStatusChanged" /* Events.ModifiedStatusChanged */ , {
                    uiSourceCode: uiSourceCode,
                    isModified: true
                });
            }
        },
        {
            key: "uiSourceCodeProcessedForTest",
            value: function uiSourceCodeProcessedForTest() {}
        },
        {
            key: "updateModifiedState",
            value: function updateModifiedState(uiSourceCode) {
                var _this = this;
                return _async_to_generator(function() {
                    var contentsPromise, contents;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.loadingUISourceCodes.delete(uiSourceCode);
                                if (uiSourceCode.project().type() !== _workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.projectTypes.Network) {
                                    _this.markAsUnmodified(uiSourceCode);
                                    return [
                                        2
                                    ];
                                }
                                if (uiSourceCode.isDirty()) {
                                    _this.markAsModified(uiSourceCode);
                                    return [
                                        2
                                    ];
                                }
                                if (!uiSourceCode.hasCommits()) {
                                    _this.markAsUnmodified(uiSourceCode);
                                    return [
                                        2
                                    ];
                                }
                                contentsPromise = Promise.all([
                                    _this.requestOriginalContentForUISourceCode(uiSourceCode),
                                    uiSourceCode.requestContent().then(function(deferredContent) {
                                        return deferredContent.content;
                                    })
                                ]);
                                _this.loadingUISourceCodes.set(uiSourceCode, contentsPromise);
                                return [
                                    4,
                                    contentsPromise
                                ];
                            case 1:
                                contents = _state.sent();
                                if (_this.loadingUISourceCodes.get(uiSourceCode) !== contentsPromise) {
                                    return [
                                        2
                                    ];
                                }
                                _this.loadingUISourceCodes.delete(uiSourceCode);
                                if (contents[0] !== null && contents[1] !== null && contents[0] !== contents[1]) {
                                    _this.markAsModified(uiSourceCode);
                                } else {
                                    _this.markAsUnmodified(uiSourceCode);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "requestOriginalContentForUISourceCode",
            value: function requestOriginalContentForUISourceCode(uiSourceCode) {
                return this.uiSourceCodeDiff(uiSourceCode).originalContent();
            }
        },
        {
            key: "revertToOriginal",
            value: function revertToOriginal(uiSourceCode) {
                function callback(content) {
                    if (typeof content !== 'string') {
                        return;
                    }
                    uiSourceCode.addRevision(content);
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.RevisionApplied);
                return this.requestOriginalContentForUISourceCode(uiSourceCode).then(callback);
            }
        }
    ]);
    return WorkspaceDiffImpl;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var UISourceCodeDiff = /*#__PURE__*/ function(_Common_ObjectWrapper_ObjectWrapper) {
    "use strict";
    _inherits(UISourceCodeDiff, _Common_ObjectWrapper_ObjectWrapper);
    var _super = _create_super(UISourceCodeDiff);
    function UISourceCodeDiff(uiSourceCode) {
        _class_call_check(this, UISourceCodeDiff);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "uiSourceCode", void 0);
        _define_property(_assert_this_initialized(_this), "requestDiffPromise", void 0);
        _define_property(_assert_this_initialized(_this), "pendingChanges", void 0);
        _define_property(_assert_this_initialized(_this), "dispose", void 0);
        _this.uiSourceCode = uiSourceCode;
        uiSourceCode.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyChanged, _this.uiSourceCodeChanged, _assert_this_initialized(_this));
        uiSourceCode.addEventListener(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.UISourceCode.Events.WorkingCopyCommitted, _this.uiSourceCodeChanged, _assert_this_initialized(_this));
        _this.requestDiffPromise = null;
        _this.pendingChanges = null;
        _this.dispose = false;
        return _this;
    }
    _create_class(UISourceCodeDiff, [
        {
            key: "uiSourceCodeChanged",
            value: function uiSourceCodeChanged() {
                if (this.pendingChanges) {
                    clearTimeout(this.pendingChanges);
                    this.pendingChanges = null;
                }
                this.requestDiffPromise = null;
                var content = this.uiSourceCode.content();
                var delay = !content || content.length < 65536 ? 0 : UpdateTimeout;
                this.pendingChanges = window.setTimeout(emitDiffChanged.bind(this), delay);
                function emitDiffChanged() {
                    if (this.dispose) {
                        return;
                    }
                    this.dispatchEventToListeners("DiffChanged" /* UISourceCodeDiffEvents.DiffChanged */ );
                    this.pendingChanges = null;
                }
            }
        },
        {
            key: "requestDiff",
            value: function requestDiff(diffRequestOptions) {
                if (!this.requestDiffPromise) {
                    this.requestDiffPromise = this.innerRequestDiff(diffRequestOptions);
                }
                return this.requestDiffPromise;
            }
        },
        {
            key: "originalContent",
            value: function originalContent() {
                var _this = this;
                return _async_to_generator(function() {
                    var originalNetworkContent, content;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                originalNetworkContent = _persistence_persistence_js__WEBPACK_IMPORTED_MODULE_4__.NetworkPersistenceManager.NetworkPersistenceManager.instance().originalContentForUISourceCode(_this.uiSourceCode);
                                if (originalNetworkContent) {
                                    return [
                                        2,
                                        originalNetworkContent
                                    ];
                                }
                                return [
                                    4,
                                    _this.uiSourceCode.project().requestFileContent(_this.uiSourceCode)
                                ];
                            case 1:
                                content = _state.sent();
                                if (_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_5__.ContentData.ContentData.isError(content)) {
                                    return [
                                        2,
                                        content.error
                                    ];
                                }
                                return [
                                    2,
                                    content.asDeferedContent().content
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "innerRequestDiff",
            value: function innerRequestDiff(param) {
                var shouldFormatDiff = param.shouldFormatDiff;
                var _this = this;
                return _async_to_generator(function() {
                    var baseline, current, formattedCurrentMapping, formatCurrentResult, reNewline, diff;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.dispose) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                return [
                                    4,
                                    _this.originalContent()
                                ];
                            case 1:
                                baseline = _state.sent();
                                if (baseline === null) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                if (baseline.length > 1024 * 1024) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                // ------------ ASYNC ------------
                                if (_this.dispose) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                current = _this.uiSourceCode.workingCopy();
                                if (!(!current && !_this.uiSourceCode.contentLoaded())) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.uiSourceCode.requestContent()
                                ];
                            case 2:
                                current = _state.sent().content;
                                _state.label = 3;
                            case 3:
                                if (current.length > 1024 * 1024) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                if (_this.dispose) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                if (current === null || baseline === null) {
                                    return [
                                        2,
                                        null
                                    ];
                                }
                                if (!shouldFormatDiff) return [
                                    3,
                                    6
                                ];
                                return [
                                    4,
                                    _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_3__.ScriptFormatter.format(_this.uiSourceCode.contentType(), _this.uiSourceCode.mimeType(), baseline)
                                ];
                            case 4:
                                baseline = _state.sent().formattedContent;
                                return [
                                    4,
                                    _formatter_formatter_js__WEBPACK_IMPORTED_MODULE_3__.ScriptFormatter.format(_this.uiSourceCode.contentType(), _this.uiSourceCode.mimeType(), current)
                                ];
                            case 5:
                                formatCurrentResult = _state.sent();
                                current = formatCurrentResult.formattedContent;
                                formattedCurrentMapping = formatCurrentResult.formattedMapping;
                                _state.label = 6;
                            case 6:
                                reNewline = /\r\n?|\n/;
                                diff = _third_party_diff_diff_js__WEBPACK_IMPORTED_MODULE_2__.Diff.DiffWrapper.lineDiff(baseline.split(reNewline), current.split(reNewline));
                                return [
                                    2,
                                    {
                                        diff: diff,
                                        formattedCurrentMapping: formattedCurrentMapping
                                    }
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return UISourceCodeDiff;
}(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper);
var workspaceDiffImplInstance = null;
function workspaceDiff() {
    if (!workspaceDiffImplInstance) {
        workspaceDiffImplInstance = new WorkspaceDiffImpl(_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_6__.Workspace.WorkspaceImpl.instance());
    }
    return workspaceDiffImplInstance;
}
var UpdateTimeout = 200; //# sourceMappingURL=WorkspaceDiff.js.map


}),

}]);