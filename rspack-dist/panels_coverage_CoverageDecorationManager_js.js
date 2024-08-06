"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_coverage_CoverageDecorationManager_js"], {
"./panels/coverage/CoverageDecorationManager.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CoverageDecorationManager: function() { return CoverageDecorationManager; },
  decoratorType: function() { return decoratorType; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./models/text_utils/text_utils.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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



var decoratorType = 'coverage';
var _workspace = /*#__PURE__*/ new WeakMap(), _debuggerBinding = /*#__PURE__*/ new WeakMap(), _cssBinding = /*#__PURE__*/ new WeakMap();
var CoverageDecorationManager = /*#__PURE__*/ function() {
    "use strict";
    function CoverageDecorationManager(coverageModel, workspace, debuggerBinding, cssBinding) {
        _class_call_check(this, CoverageDecorationManager);
        _define_property(this, "coverageModel", void 0);
        _define_property(this, "textByProvider", void 0);
        _define_property(this, "uiSourceCodeByContentProvider", void 0);
        _class_private_field_init(this, _workspace, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _debuggerBinding, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _cssBinding, {
            writable: true,
            value: void 0
        });
        this.coverageModel = coverageModel;
        _class_private_field_set(this, _workspace, workspace);
        _class_private_field_set(this, _debuggerBinding, debuggerBinding);
        _class_private_field_set(this, _cssBinding, cssBinding);
        this.textByProvider = new Map();
        this.uiSourceCodeByContentProvider = new _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.MapUtilities.Multimap();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = _class_private_field_get(this, _workspace).uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var uiSourceCode = _step.value;
                uiSourceCode.setDecorationData(decoratorType, this);
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
        _class_private_field_get(this, _workspace).addEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.Events.UISourceCodeAdded, this.onUISourceCodeAdded, this);
    }
    _create_class(CoverageDecorationManager, [
        {
            key: "reset",
            value: function reset() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _class_private_field_get(this, _workspace).uiSourceCodes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uiSourceCode = _step.value;
                        uiSourceCode.setDecorationData(decoratorType, undefined);
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
            key: "dispose",
            value: function dispose() {
                this.reset();
                _class_private_field_get(this, _workspace).removeEventListener(_models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.Workspace.Events.UISourceCodeAdded, this.onUISourceCodeAdded, this);
            }
        },
        {
            key: "update",
            value: function update(updatedEntries) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = updatedEntries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var entry = _step.value;
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = this.uiSourceCodeByContentProvider.get(entry.getContentProvider())[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var uiSourceCode = _step1.value;
                                uiSourceCode.setDecorationData(decoratorType, this);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
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
            key: "usageByLine",
            value: /**
     * Returns the coverage per line of the provided uiSourceCode. The resulting array has the same length
     * as the provided `lines` array.
     *
     * @param uiSourceCode The UISourceCode for which to get the coverage info.
     * @param lineMappings The caller might have applied formatting to the UISourceCode. Each entry
     *                     in this array represents one line and the range specifies where it's found in
     *                     the original content.
     */ function usageByLine(uiSourceCode, lineMappings) {
                var _this = this;
                return _async_to_generator(function() {
                    var result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, _step_value, startLine, startColumn, endLine, endColumn, startLocationsPromise, endLocationsPromise, _ref, startLocations, endLocations, used, startIndex, endIndex, start, end, text, textValue, startOffset, endOffset, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                result = [];
                                return [
                                    4,
                                    _this.updateTexts(uiSourceCode, lineMappings)
                                ];
                            case 1:
                                _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = lineMappings[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                _step_value = _step.value, startLine = _step_value.startLine, startColumn = _step_value.startColumn, endLine = _step_value.endLine, endColumn = _step_value.endColumn;
                                startLocationsPromise = _this.rawLocationsForSourceLocation(uiSourceCode, startLine, startColumn);
                                endLocationsPromise = _this.rawLocationsForSourceLocation(uiSourceCode, endLine, endColumn);
                                return [
                                    4,
                                    Promise.all([
                                        startLocationsPromise,
                                        endLocationsPromise
                                    ])
                                ];
                            case 4:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), startLocations = _ref[0], endLocations = _ref[1];
                                used = undefined;
                                for(startIndex = 0, endIndex = 0; startIndex < startLocations.length; ++startIndex){
                                    start = startLocations[startIndex];
                                    while(endIndex < endLocations.length && CoverageDecorationManager.compareLocations(start, endLocations[endIndex]) >= 0){
                                        ++endIndex;
                                    }
                                    if (endIndex >= endLocations.length || endLocations[endIndex].id !== start.id) {
                                        continue;
                                    }
                                    end = endLocations[endIndex++];
                                    text = _this.textByProvider.get(end.contentProvider);
                                    if (!text) {
                                        continue;
                                    }
                                    textValue = text.value();
                                    startOffset = Math.min(text.offsetFromPosition(start.line, start.column), textValue.length - 1);
                                    endOffset = Math.min(text.offsetFromPosition(end.line, end.column), textValue.length - 1);
                                    while(startOffset <= endOffset && /\s/.test(textValue[startOffset])){
                                        ++startOffset;
                                    }
                                    while(startOffset <= endOffset && /\s/.test(textValue[endOffset])){
                                        --endOffset;
                                    }
                                    if (startOffset <= endOffset) {
                                        used = _this.coverageModel.usageForRange(end.contentProvider, startOffset, endOffset);
                                    }
                                    if (used) {
                                        break;
                                    }
                                }
                                result.push(used);
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateTexts",
            value: function updateTexts(uiSourceCode, lineMappings) {
                var _this = this;
                return _async_to_generator(function() {
                    var promises, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, range, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, entry, err, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                promises = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    12,
                                    13,
                                    14
                                ]);
                                _iterator = lineMappings[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    11
                                ];
                                range = _step.value;
                                _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                _state.label = 3;
                            case 3:
                                _state.trys.push([
                                    3,
                                    8,
                                    9,
                                    10
                                ]);
                                return [
                                    4,
                                    _this.rawLocationsForSourceLocation(uiSourceCode, range.startLine, 0)
                                ];
                            case 4:
                                _iterator1 = _state.sent()[Symbol.iterator]();
                                _state.label = 5;
                            case 5:
                                if (!!(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done)) return [
                                    3,
                                    7
                                ];
                                entry = _step1.value;
                                if (_this.textByProvider.has(entry.contentProvider)) {
                                    return [
                                        3,
                                        6
                                    ];
                                }
                                _this.textByProvider.set(entry.contentProvider, null);
                                _this.uiSourceCodeByContentProvider.set(entry.contentProvider, uiSourceCode);
                                promises.push(_this.updateTextForProvider(entry.contentProvider));
                                _state.label = 6;
                            case 6:
                                _iteratorNormalCompletion1 = true;
                                return [
                                    3,
                                    5
                                ];
                            case 7:
                                return [
                                    3,
                                    10
                                ];
                            case 8:
                                err = _state.sent();
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                                return [
                                    3,
                                    10
                                ];
                            case 9:
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 10:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 11:
                                return [
                                    3,
                                    14
                                ];
                            case 12:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    14
                                ];
                            case 13:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 14:
                                return [
                                    4,
                                    Promise.all(promises)
                                ];
                            case 15:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "updateTextForProvider",
            value: function updateTextForProvider(contentProvider) {
                var _this = this;
                return _async_to_generator(function() {
                    var content, _, _1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _1 = (_ = _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.ContentData.ContentData).textOr;
                                return [
                                    4,
                                    contentProvider.requestContentData()
                                ];
                            case 1:
                                content = _1.apply(_, [
                                    _state.sent(),
                                    ''
                                ]);
                                _this.textByProvider.set(contentProvider, new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_1__.Text.Text(content));
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "rawLocationsForSourceLocation",
            value: function rawLocationsForSourceLocation(uiSourceCode, line, column) {
                var _this = this;
                return _async_to_generator(function() {
                    var result, contentType, locations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, location, script, rawStyleLocations, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, location1, header;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                result = [];
                                contentType = uiSourceCode.contentType();
                                if (!contentType.hasScripts()) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    _class_private_field_get(_this, _debuggerBinding).uiLocationToRawLocations(uiSourceCode, line, column)
                                ];
                            case 1:
                                locations = _state.sent();
                                locations = locations.filter(function(location) {
                                    return Boolean(location.script());
                                });
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = locations[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        location = _step.value;
                                        script = location.script();
                                        if (!script) {
                                            continue;
                                        }
                                        if (script.isInlineScript() && contentType.isDocument()) {
                                            location.lineNumber -= script.lineOffset;
                                            if (!location.lineNumber) {
                                                location.columnNumber -= script.columnOffset;
                                            }
                                        }
                                        result.push({
                                            id: "js:".concat(location.scriptId),
                                            contentProvider: script,
                                            line: location.lineNumber,
                                            column: location.columnNumber
                                        });
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
                                _state.label = 2;
                            case 2:
                                if (contentType.isStyleSheet() || contentType.isDocument()) {
                                    rawStyleLocations = _class_private_field_get(_this, _cssBinding).uiLocationToRawLocations(new _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_2__.UISourceCode.UILocation(uiSourceCode, line, column));
                                    _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                    try {
                                        for(_iterator1 = rawStyleLocations[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                            location1 = _step1.value;
                                            header = location1.header();
                                            if (!header) {
                                                continue;
                                            }
                                            if (header.isInline && contentType.isDocument()) {
                                                location1.lineNumber -= header.startLine;
                                                if (!location1.lineNumber) {
                                                    location1.columnNumber -= header.startColumn;
                                                }
                                            }
                                            result.push({
                                                id: "css:".concat(location1.styleSheetId),
                                                contentProvider: header,
                                                line: location1.lineNumber,
                                                column: location1.columnNumber
                                            });
                                        }
                                    } catch (err) {
                                        _didIteratorError1 = true;
                                        _iteratorError1 = err;
                                    } finally{
                                        try {
                                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                _iterator1.return();
                                            }
                                        } finally{
                                            if (_didIteratorError1) {
                                                throw _iteratorError1;
                                            }
                                        }
                                    }
                                }
                                return [
                                    2,
                                    result.sort(CoverageDecorationManager.compareLocations)
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "onUISourceCodeAdded",
            value: function onUISourceCodeAdded(event) {
                var uiSourceCode = event.data;
                uiSourceCode.setDecorationData(decoratorType, this);
            }
        }
    ], [
        {
            key: "compareLocations",
            value: function compareLocations(a, b) {
                return a.id.localeCompare(b.id) || a.line - b.line || a.column - b.column;
            }
        }
    ]);
    return CoverageDecorationManager;
} //# sourceMappingURL=CoverageDecorationManager.js.map
();


}),

}]);