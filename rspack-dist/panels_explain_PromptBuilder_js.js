"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_explain_PromptBuilder_js"], {
"./panels/explain/PromptBuilder.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  PromptBuilder: function() { return PromptBuilder; },
  SourceType: function() { return SourceType; },
  allowHeader: function() { return allowHeader; },
  formatConsoleMessage: function() { return formatConsoleMessage; },
  formatNetworkRequest: function() { return formatNetworkRequest; },
  formatRelatedCode: function() { return formatRelatedCode; },
  formatStackTrace: function() { return formatStackTrace; },
  lineWhitespace: function() { return lineWhitespace; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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





var MAX_MESSAGE_SIZE = 1000;
var MAX_STACK_TRACE_SIZE = 1000;
var MAX_CODE_SIZE = 1000;
var MAX_HEADERS_SIZE = 1000;
var SourceType;
(function(SourceType) {
    SourceType["MESSAGE"] = "message";
    SourceType["STACKTRACE"] = "stacktrace";
    SourceType["NETWORK_REQUEST"] = "networkRequest";
    SourceType["RELATED_CODE"] = "relatedCode";
})(SourceType || (SourceType = {}));
var _consoleMessage = /*#__PURE__*/ new WeakMap();
var PromptBuilder = /*#__PURE__*/ function() {
    "use strict";
    function PromptBuilder(consoleMessage) {
        _class_call_check(this, PromptBuilder);
        _class_private_field_init(this, _consoleMessage, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _consoleMessage, consoleMessage);
    }
    _create_class(PromptBuilder, [
        {
            key: "getNetworkRequest",
            value: function getNetworkRequest() {
                var _this = this;
                return _async_to_generator(function() {
                    var _class_private_field_get_consoleMessage_getAffectedResources, requestId, log;
                    return _ts_generator(this, function(_state) {
                        requestId = (_class_private_field_get_consoleMessage_getAffectedResources = _class_private_field_get(_this, _consoleMessage).consoleMessage().getAffectedResources()) === null || _class_private_field_get_consoleMessage_getAffectedResources === void 0 ? void 0 : _class_private_field_get_consoleMessage_getAffectedResources.requestId;
                        if (!requestId) {
                            return [
                                2
                            ];
                        }
                        log = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.NetworkLog.instance();
                        // TODO: we might try handling redirect requests too later.
                        return [
                            2,
                            log.requestsForId(requestId)[0]
                        ];
                    });
                })();
            }
        },
        {
            key: "getMessageSourceCode",
            value: /**
     * Gets the source file associated with the top of the message's stacktrace.
     * Returns an empty string if the source is not available for any reasons.
     */ function getMessageSourceCode() {
                var _this = this;
                return _async_to_generator(function() {
                    var _class_private_field_get_consoleMessage_stackTrace, callframe, runtimeModel, debuggerModel, rawLocation, mappedLocation, content, text, firstNewline, _mappedLocation_uiSourceCode_mimeType, _ref, formattedContent, formattedMapping, _mappedLocation_lineNumber, _mappedLocation_columnNumber, _formattedMapping_originalToFormatted, lineNumber, columnNumber, _mappedLocation_columnNumber1, _mappedLocation_lineNumber1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                callframe = (_class_private_field_get_consoleMessage_stackTrace = _class_private_field_get(_this, _consoleMessage).consoleMessage().stackTrace) === null || _class_private_field_get_consoleMessage_stackTrace === void 0 ? void 0 : _class_private_field_get_consoleMessage_stackTrace.callFrames[0];
                                runtimeModel = _class_private_field_get(_this, _consoleMessage).consoleMessage().runtimeModel();
                                debuggerModel = runtimeModel === null || runtimeModel === void 0 ? void 0 : runtimeModel.debuggerModel();
                                if (!debuggerModel || !runtimeModel || !callframe) {
                                    return [
                                        2,
                                        {
                                            text: '',
                                            columnNumber: 0,
                                            lineNumber: 0
                                        }
                                    ];
                                }
                                rawLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.Location(debuggerModel, callframe.scriptId, callframe.lineNumber, callframe.columnNumber);
                                return [
                                    4,
                                    _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(rawLocation)
                                ];
                            case 1:
                                mappedLocation = _state.sent();
                                return [
                                    4,
                                    mappedLocation === null || mappedLocation === void 0 ? void 0 : mappedLocation.uiSourceCode.requestContent()
                                ];
                            case 2:
                                content = _state.sent();
                                text = !(content === null || content === void 0 ? void 0 : content.isEncoded) && (content === null || content === void 0 ? void 0 : content.content) ? content.content : '';
                                firstNewline = text.indexOf('\n');
                                if (!(text.length > MAX_CODE_SIZE && (firstNewline < 0 || firstNewline > MAX_CODE_SIZE))) return [
                                    3,
                                    4
                                ];
                                return [
                                    4,
                                    _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__.ScriptFormatter.formatScriptContent((_mappedLocation_uiSourceCode_mimeType = mappedLocation === null || mappedLocation === void 0 ? void 0 : mappedLocation.uiSourceCode.mimeType()) !== null && _mappedLocation_uiSourceCode_mimeType !== void 0 ? _mappedLocation_uiSourceCode_mimeType : 'text/javascript', text)
                                ];
                            case 3:
                                _ref = _state.sent(), formattedContent = _ref.formattedContent, formattedMapping = _ref.formattedMapping;
                                _formattedMapping_originalToFormatted = _sliced_to_array(formattedMapping.originalToFormatted((_mappedLocation_lineNumber = mappedLocation === null || mappedLocation === void 0 ? void 0 : mappedLocation.lineNumber) !== null && _mappedLocation_lineNumber !== void 0 ? _mappedLocation_lineNumber : 0, (_mappedLocation_columnNumber = mappedLocation === null || mappedLocation === void 0 ? void 0 : mappedLocation.columnNumber) !== null && _mappedLocation_columnNumber !== void 0 ? _mappedLocation_columnNumber : 0), 2), lineNumber = _formattedMapping_originalToFormatted[0], columnNumber = _formattedMapping_originalToFormatted[1];
                                return [
                                    2,
                                    {
                                        text: formattedContent,
                                        columnNumber: columnNumber,
                                        lineNumber: lineNumber
                                    }
                                ];
                            case 4:
                                return [
                                    2,
                                    {
                                        text: text,
                                        columnNumber: (_mappedLocation_columnNumber1 = mappedLocation === null || mappedLocation === void 0 ? void 0 : mappedLocation.columnNumber) !== null && _mappedLocation_columnNumber1 !== void 0 ? _mappedLocation_columnNumber1 : 0,
                                        lineNumber: (_mappedLocation_lineNumber1 = mappedLocation === null || mappedLocation === void 0 ? void 0 : mappedLocation.lineNumber) !== null && _mappedLocation_lineNumber1 !== void 0 ? _mappedLocation_lineNumber1 : 0
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "buildPrompt",
            value: function buildPrompt() {
                var sourcesTypes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Object.values(SourceType);
                var _this = this;
                return _async_to_generator(function() {
                    var _class_private_field_get_consoleMessage_getAffectedResources, _ref, sourceCode, request, relatedCode, relatedRequest, stacktrace, message, prompt, sources;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all([
                                        sourcesTypes.includes(SourceType.RELATED_CODE) ? _this.getMessageSourceCode() : undefined,
                                        sourcesTypes.includes(SourceType.NETWORK_REQUEST) ? _this.getNetworkRequest() : undefined
                                    ])
                                ];
                            case 1:
                                _ref = _sliced_to_array.apply(void 0, [
                                    _state.sent(),
                                    2
                                ]), sourceCode = _ref[0], request = _ref[1];
                                relatedCode = (sourceCode === null || sourceCode === void 0 ? void 0 : sourceCode.text) ? formatRelatedCode(sourceCode) : '';
                                relatedRequest = request ? formatNetworkRequest(request) : '';
                                stacktrace = sourcesTypes.includes(SourceType.STACKTRACE) ? formatStackTrace(_class_private_field_get(_this, _consoleMessage)) : '';
                                message = formatConsoleMessage(_class_private_field_get(_this, _consoleMessage));
                                prompt = _this.formatPrompt({
                                    message: [
                                        message,
                                        stacktrace
                                    ].join('\n').trim(),
                                    relatedCode: relatedCode,
                                    relatedRequest: relatedRequest
                                });
                                sources = [
                                    {
                                        type: SourceType.MESSAGE,
                                        value: message
                                    }
                                ];
                                if (stacktrace) {
                                    sources.push({
                                        type: SourceType.STACKTRACE,
                                        value: stacktrace
                                    });
                                }
                                if (relatedCode) {
                                    sources.push({
                                        type: SourceType.RELATED_CODE,
                                        value: relatedCode
                                    });
                                }
                                if (relatedRequest) {
                                    sources.push({
                                        type: SourceType.NETWORK_REQUEST,
                                        value: relatedRequest
                                    });
                                }
                                return [
                                    2,
                                    {
                                        prompt: prompt,
                                        sources: sources,
                                        isPageReloadRecommended: sourcesTypes.includes(SourceType.NETWORK_REQUEST) && Boolean((_class_private_field_get_consoleMessage_getAffectedResources = _class_private_field_get(_this, _consoleMessage).consoleMessage().getAffectedResources()) === null || _class_private_field_get_consoleMessage_getAffectedResources === void 0 ? void 0 : _class_private_field_get_consoleMessage_getAffectedResources.requestId) && !relatedRequest
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "formatPrompt",
            value: function formatPrompt(param) {
                var message = param.message, relatedCode = param.relatedCode, relatedRequest = param.relatedRequest;
                var prompt = "Why does browser show an error\n".concat(message);
                if (relatedCode) {
                    prompt += "\nFor the following code in my web app\n\n```\n".concat(relatedCode, "\n```");
                }
                if (relatedRequest) {
                    prompt += "\nFor the following network request in my web app\n\n```\n".concat(relatedRequest, "\n```");
                }
                return prompt;
            }
        },
        {
            key: "getSearchQuery",
            value: function getSearchQuery() {
                var message = _class_private_field_get(this, _consoleMessage).toMessageTextString();
                if (message) {
                    // If there are multiple lines, it is likely the rest of the message
                    // is a stack trace, which we don't want.
                    message = message.split('\n')[0];
                }
                return message;
            }
        }
    ]);
    return PromptBuilder;
}();
function allowHeader(header) {
    var normalizedName = header.name.toLowerCase().trim();
    // Skip custom headers.
    if (normalizedName.startsWith('x-')) {
        return false;
    }
    // Skip cookies as they might contain auth.
    if (normalizedName === 'cookie' || normalizedName === 'set-cookie') {
        return false;
    }
    if (normalizedName === 'authorization') {
        return false;
    }
    return true;
}
function lineWhitespace(line) {
    var matches = /^\s*/.exec(line);
    if (!matches || !matches.length) {
        // This should not happen
        return null;
    }
    var whitespace = matches[0];
    if (whitespace === line) {
        return null;
    }
    return whitespace;
}
function formatRelatedCode(param) {
    var text = param.text, columnNumber = param.columnNumber, lineNumber = param.lineNumber, maxCodeSize = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : MAX_CODE_SIZE;
    var lines = text.split('\n');
    if (lines[lineNumber].length >= maxCodeSize / 2) {
        var start = Math.max(columnNumber - maxCodeSize / 2, 0);
        var end = Math.min(columnNumber + maxCodeSize / 2, lines[lineNumber].length);
        return lines[lineNumber].substring(start, end);
    }
    var relatedCodeSize = 0;
    var currentLineNumber = lineNumber;
    var currentWhitespace = lineWhitespace(lines[lineNumber]);
    var startByPrefix = new Map();
    while(lines[currentLineNumber] !== undefined && relatedCodeSize + lines[currentLineNumber].length <= maxCodeSize / 2){
        var whitespace = lineWhitespace(lines[currentLineNumber]);
        if (whitespace !== null && currentWhitespace !== null && (whitespace === currentWhitespace || !whitespace.startsWith(currentWhitespace))) {
            // Don't start on a line that begins with a closing character
            if (!/^\s*[\}\)\]]/.exec(lines[currentLineNumber])) {
                // Update map of where code should start based on its indentation
                startByPrefix.set(whitespace, currentLineNumber);
            }
            currentWhitespace = whitespace;
        }
        relatedCodeSize += lines[currentLineNumber].length + 1;
        currentLineNumber--;
    }
    currentLineNumber = lineNumber + 1;
    var startLine = lineNumber;
    var endLine = lineNumber;
    currentWhitespace = lineWhitespace(lines[lineNumber]);
    while(lines[currentLineNumber] !== undefined && relatedCodeSize + lines[currentLineNumber].length <= maxCodeSize){
        relatedCodeSize += lines[currentLineNumber].length;
        var whitespace1 = lineWhitespace(lines[currentLineNumber]);
        if (whitespace1 !== null && currentWhitespace !== null && (whitespace1 === currentWhitespace || !whitespace1.startsWith(currentWhitespace))) {
            // We shouldn't end on a line if it is followed by an indented line
            var nextLine = lines[currentLineNumber + 1];
            var nextWhitespace = nextLine ? lineWhitespace(nextLine) : null;
            if (!nextWhitespace || nextWhitespace === whitespace1 || !nextWhitespace.startsWith(whitespace1)) {
                // Look up where code should start based on its indentation
                if (startByPrefix.has(whitespace1)) {
                    var _startByPrefix_get;
                    startLine = (_startByPrefix_get = startByPrefix.get(whitespace1)) !== null && _startByPrefix_get !== void 0 ? _startByPrefix_get : 0;
                    endLine = currentLineNumber;
                }
            }
            currentWhitespace = whitespace1;
        }
        currentLineNumber++;
    }
    return lines.slice(startLine, endLine + 1).join('\n');
}
function formatLines(title, lines, maxLength) {
    var result = '';
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = lines[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var line = _step.value;
            if (result.length + line.length > maxLength) {
                break;
            }
            result += line;
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
    result = result.trim();
    return result && title ? title + '\n' + result : result;
}
function formatNetworkRequest(request) {
    var formatHeaders = function(title, headers) {
        return formatLines(title, headers.filter(allowHeader).map(function(header) {
            return header.name + ': ' + header.value + '\n';
        }), MAX_HEADERS_SIZE);
    };
    // TODO: anything else that might be relavant?
    // TODO: handle missing headers
    return "Request: ".concat(request.url(), "\n\n").concat(formatHeaders('Request headers:', request.requestHeaders()), "\n\n").concat(formatHeaders('Response headers:', request.responseHeaders), "\n\nResponse status: ").concat(request.statusCode, " ").concat(request.statusText);
}
function formatConsoleMessage(message) {
    return message.toMessageTextString().substr(0, MAX_MESSAGE_SIZE);
}
/**
 * This formats the stacktrace from the console message which might or might not
 * match the content of stacktrace(s) in the console message arguments.
 */ function formatStackTrace(message) {
    var _previewContainer_shadowRoot;
    var previewContainer = message.contentElement().querySelector('.stack-preview-container');
    if (!previewContainer) {
        return '';
    }
    var preview = (_previewContainer_shadowRoot = previewContainer.shadowRoot) === null || _previewContainer_shadowRoot === void 0 ? void 0 : _previewContainer_shadowRoot.querySelector('.stack-preview-container');
    var nodes = preview.childTextNodes();
    // Gets application-level source mapped stack trace taking the ignore list
    // into account.
    var messageContent = nodes.filter(function(n) {
        var _n_parentElement;
        return !((_n_parentElement = n.parentElement) === null || _n_parentElement === void 0 ? void 0 : _n_parentElement.closest('.show-all-link,.show-less-link,.hidden-row'));
    }).map(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier.untruncatedNodeText);
    return formatLines('', messageContent, MAX_STACK_TRACE_SIZE);
} //# sourceMappingURL=PromptBuilder.js.map


}),

}]);