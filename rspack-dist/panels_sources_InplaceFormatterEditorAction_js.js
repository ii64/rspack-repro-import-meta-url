"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_InplaceFormatterEditorAction_js"], {
"./panels/sources/InplaceFormatterEditorAction.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InplaceFormatterEditorAction: function() { return InplaceFormatterEditorAction; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */var _models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/persistence/persistence.js */ "./models/persistence/persistence.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _SourcesView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SourcesView.js */ "./panels/sources/SourcesView.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
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







var UIStrings = {
    /**
     *@description Title of the format button in the Sources panel
     *@example {file name} PH1
     */ formatS: 'Format {PH1}',
    /**
     *@description Tooltip text that appears when hovering over the largeicon pretty print button in the Inplace Formatter Editor Action of the Sources panel
     */ format: 'Format'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/InplaceFormatterEditorAction.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var inplaceFormatterEditorActionInstance;
var InplaceFormatterEditorAction = /*#__PURE__*/ function() {
    "use strict";
    function InplaceFormatterEditorAction() {
        _class_call_check(this, InplaceFormatterEditorAction);
        _define_property(this, "button", void 0);
        _define_property(this, "sourcesView", void 0);
        _define_property(this, "uiSourceCodeTitleChangedEvent", null);
    }
    _create_class(InplaceFormatterEditorAction, [
        {
            key: "editorSelected",
            value: function editorSelected(event) {
                var uiSourceCode = event.data;
                this.updateButton(uiSourceCode);
            }
        },
        {
            key: "editorClosed",
            value: function editorClosed(event) {
                var wasSelected = event.data.wasSelected;
                if (wasSelected) {
                    this.updateButton(null);
                }
            }
        },
        {
            key: "updateButton",
            value: function updateButton(uiSourceCode) {
                var _this = this;
                if (this.uiSourceCodeTitleChangedEvent) {
                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners([
                        this.uiSourceCodeTitleChangedEvent
                    ]);
                }
                this.uiSourceCodeTitleChangedEvent = uiSourceCode ? uiSourceCode.addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_4__.UISourceCode.Events.TitleChanged, function(event) {
                    return _this.updateButton(event.data);
                }, this) : null;
                var isFormattable = this.isFormattable(uiSourceCode);
                this.button.element.classList.toggle('hidden', !isFormattable);
                if (uiSourceCode && isFormattable) {
                    this.button.setTitle(i18nString(UIStrings.formatS, {
                        PH1: uiSourceCode.name()
                    }));
                }
            }
        },
        {
            key: "getOrCreateButton",
            value: function getOrCreateButton(sourcesView) {
                if (this.button) {
                    return this.button;
                }
                this.sourcesView = sourcesView;
                this.sourcesView.addEventListener("EditorSelected" /* Events.EditorSelected */ , this.editorSelected.bind(this));
                this.sourcesView.addEventListener("EditorClosed" /* Events.EditorClosed */ , this.editorClosed.bind(this));
                this.button = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Toolbar.ToolbarButton(i18nString(UIStrings.format), 'brackets');
                this.button.addEventListener("Click" /* UI.Toolbar.ToolbarButton.Events.Click */ , this.formatSourceInPlace, this);
                this.updateButton(sourcesView.currentUISourceCode());
                return this.button;
            }
        },
        {
            key: "isFormattable",
            value: function isFormattable(uiSourceCode) {
                if (!uiSourceCode) {
                    return false;
                }
                if (uiSourceCode.project().canSetFileContent()) {
                    return true;
                }
                if (_models_persistence_persistence_js__WEBPACK_IMPORTED_MODULE_3__.Persistence.PersistenceImpl.instance().binding(uiSourceCode) !== null) {
                    return true;
                }
                return false;
            }
        },
        {
            key: "formatSourceInPlace",
            value: function formatSourceInPlace() {
                var _this = this;
                var sourceFrame = this.sourcesView.currentSourceFrame();
                if (!sourceFrame) {
                    return;
                }
                var uiSourceCode = sourceFrame.uiSourceCode();
                if (!this.isFormattable(uiSourceCode)) {
                    return;
                }
                if (uiSourceCode.isDirty()) {
                    void this.contentLoaded(uiSourceCode, sourceFrame, uiSourceCode.workingCopy());
                } else {
                    void uiSourceCode.requestContent().then(function(deferredContent) {
                        void _this.contentLoaded(uiSourceCode, sourceFrame, deferredContent.content || '');
                    });
                }
            }
        },
        {
            key: "contentLoaded",
            value: function contentLoaded(uiSourceCode, sourceFrame, content) {
                var _this = this;
                return _async_to_generator(function() {
                    var _ref, formattedContent, formattedMapping, selection, _formattedMapping_originalToFormatted, lineNumber, columnNumber;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__.ScriptFormatter.format(uiSourceCode.contentType(), sourceFrame.contentType, content)
                                ];
                            case 1:
                                _ref = _state.sent(), formattedContent = _ref.formattedContent, formattedMapping = _ref.formattedMapping;
                                if (uiSourceCode.workingCopy() === formattedContent) {
                                    return [
                                        2
                                    ];
                                }
                                selection = sourceFrame.textEditor.toLineColumn(sourceFrame.textEditor.state.selection.main.head);
                                _formattedMapping_originalToFormatted = _sliced_to_array(formattedMapping.originalToFormatted(selection.lineNumber, selection.columnNumber), 2), lineNumber = _formattedMapping_originalToFormatted[0], columnNumber = _formattedMapping_originalToFormatted[1];
                                uiSourceCode.setWorkingCopy(formattedContent);
                                _this.sourcesView.showSourceLocation(uiSourceCode, {
                                    lineNumber: lineNumber,
                                    columnNumber: columnNumber
                                });
                                return [
                                    2
                                ];
                        }
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
                if (!inplaceFormatterEditorActionInstance || forceNew) {
                    inplaceFormatterEditorActionInstance = new InplaceFormatterEditorAction();
                }
                return inplaceFormatterEditorActionInstance;
            }
        }
    ]);
    return InplaceFormatterEditorAction;
}();
(0,_SourcesView_js__WEBPACK_IMPORTED_MODULE_6__.registerEditorAction)(InplaceFormatterEditorAction.instance); //# sourceMappingURL=InplaceFormatterEditorAction.js.map


}),

}]);