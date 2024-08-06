"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_explain_PromptBuilder_js"],{

/***/ "./panels/explain/PromptBuilder.js":
/*!*****************************************!*\
  !*** ./panels/explain/PromptBuilder.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PromptBuilder: () => (/* binding */ PromptBuilder),
/* harmony export */   SourceType: () => (/* binding */ SourceType),
/* harmony export */   allowHeader: () => (/* binding */ allowHeader),
/* harmony export */   formatConsoleMessage: () => (/* binding */ formatConsoleMessage),
/* harmony export */   formatNetworkRequest: () => (/* binding */ formatNetworkRequest),
/* harmony export */   formatRelatedCode: () => (/* binding */ formatRelatedCode),
/* harmony export */   formatStackTrace: () => (/* binding */ formatStackTrace),
/* harmony export */   lineWhitespace: () => (/* binding */ lineWhitespace)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/formatter/formatter.js */ "./models/formatter/formatter.js");
/* harmony import */ var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const MAX_MESSAGE_SIZE = 1000;
const MAX_STACK_TRACE_SIZE = 1000;
const MAX_CODE_SIZE = 1000;
const MAX_HEADERS_SIZE = 1000;
var SourceType;
(function (SourceType) {
    SourceType["MESSAGE"] = "message";
    SourceType["STACKTRACE"] = "stacktrace";
    SourceType["NETWORK_REQUEST"] = "networkRequest";
    SourceType["RELATED_CODE"] = "relatedCode";
})(SourceType || (SourceType = {}));
class PromptBuilder {
    #consoleMessage;
    constructor(consoleMessage) {
        this.#consoleMessage = consoleMessage;
    }
    async getNetworkRequest() {
        const requestId = this.#consoleMessage.consoleMessage().getAffectedResources()?.requestId;
        if (!requestId) {
            return;
        }
        const log = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_3__.NetworkLog.NetworkLog.instance();
        // TODO: we might try handling redirect requests too later.
        return log.requestsForId(requestId)[0];
    }
    /**
     * Gets the source file associated with the top of the message's stacktrace.
     * Returns an empty string if the source is not available for any reasons.
     */
    async getMessageSourceCode() {
        const callframe = this.#consoleMessage.consoleMessage().stackTrace?.callFrames[0];
        const runtimeModel = this.#consoleMessage.consoleMessage().runtimeModel();
        const debuggerModel = runtimeModel?.debuggerModel();
        if (!debuggerModel || !runtimeModel || !callframe) {
            return { text: '', columnNumber: 0, lineNumber: 0 };
        }
        const rawLocation = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.DebuggerModel.Location(debuggerModel, callframe.scriptId, callframe.lineNumber, callframe.columnNumber);
        const mappedLocation = await _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.DebuggerWorkspaceBinding.DebuggerWorkspaceBinding.instance().rawLocationToUILocation(rawLocation);
        const content = await mappedLocation?.uiSourceCode.requestContent();
        const text = !content?.isEncoded && content?.content ? content.content : '';
        const firstNewline = text.indexOf('\n');
        if (text.length > MAX_CODE_SIZE && (firstNewline < 0 || firstNewline > MAX_CODE_SIZE)) {
            // Use formatter
            const { formattedContent, formattedMapping } = await _models_formatter_formatter_js__WEBPACK_IMPORTED_MODULE_2__.ScriptFormatter.formatScriptContent(mappedLocation?.uiSourceCode.mimeType() ?? 'text/javascript', text);
            const [lineNumber, columnNumber] = formattedMapping.originalToFormatted(mappedLocation?.lineNumber ?? 0, mappedLocation?.columnNumber ?? 0);
            return { text: formattedContent, columnNumber, lineNumber };
        }
        return { text, columnNumber: mappedLocation?.columnNumber ?? 0, lineNumber: mappedLocation?.lineNumber ?? 0 };
    }
    async buildPrompt(sourcesTypes = Object.values(SourceType)) {
        const [sourceCode, request] = await Promise.all([
            sourcesTypes.includes(SourceType.RELATED_CODE) ? this.getMessageSourceCode() : undefined,
            sourcesTypes.includes(SourceType.NETWORK_REQUEST) ? this.getNetworkRequest() : undefined,
        ]);
        const relatedCode = sourceCode?.text ? formatRelatedCode(sourceCode) : '';
        const relatedRequest = request ? formatNetworkRequest(request) : '';
        const stacktrace = sourcesTypes.includes(SourceType.STACKTRACE) ? formatStackTrace(this.#consoleMessage) : '';
        const message = formatConsoleMessage(this.#consoleMessage);
        const prompt = this.formatPrompt({
            message: [message, stacktrace].join('\n').trim(),
            relatedCode,
            relatedRequest,
        });
        const sources = [
            {
                type: SourceType.MESSAGE,
                value: message,
            },
        ];
        if (stacktrace) {
            sources.push({
                type: SourceType.STACKTRACE,
                value: stacktrace,
            });
        }
        if (relatedCode) {
            sources.push({
                type: SourceType.RELATED_CODE,
                value: relatedCode,
            });
        }
        if (relatedRequest) {
            sources.push({
                type: SourceType.NETWORK_REQUEST,
                value: relatedRequest,
            });
        }
        return {
            prompt,
            sources,
            isPageReloadRecommended: sourcesTypes.includes(SourceType.NETWORK_REQUEST) &&
                Boolean(this.#consoleMessage.consoleMessage().getAffectedResources()?.requestId) && !relatedRequest,
        };
    }
    formatPrompt({ message, relatedCode, relatedRequest }) {
        let prompt = `Why does browser show an error
${message}`;
        if (relatedCode) {
            prompt += `
For the following code in my web app

\`\`\`
${relatedCode}
\`\`\``;
        }
        if (relatedRequest) {
            prompt += `
For the following network request in my web app

\`\`\`
${relatedRequest}
\`\`\``;
        }
        return prompt;
    }
    getSearchQuery() {
        let message = this.#consoleMessage.toMessageTextString();
        if (message) {
            // If there are multiple lines, it is likely the rest of the message
            // is a stack trace, which we don't want.
            message = message.split('\n')[0];
        }
        return message;
    }
}
function allowHeader(header) {
    const normalizedName = header.name.toLowerCase().trim();
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
    const matches = /^\s*/.exec(line);
    if (!matches || !matches.length) {
        // This should not happen
        return null;
    }
    const whitespace = matches[0];
    if (whitespace === line) {
        return null;
    }
    return whitespace;
}
function formatRelatedCode({ text, columnNumber, lineNumber }, maxCodeSize = MAX_CODE_SIZE) {
    const lines = text.split('\n');
    if (lines[lineNumber].length >= maxCodeSize / 2) {
        const start = Math.max(columnNumber - maxCodeSize / 2, 0);
        const end = Math.min(columnNumber + maxCodeSize / 2, lines[lineNumber].length);
        return lines[lineNumber].substring(start, end);
    }
    let relatedCodeSize = 0;
    let currentLineNumber = lineNumber;
    let currentWhitespace = lineWhitespace(lines[lineNumber]);
    const startByPrefix = new Map();
    while (lines[currentLineNumber] !== undefined &&
        (relatedCodeSize + lines[currentLineNumber].length <= maxCodeSize / 2)) {
        const whitespace = lineWhitespace(lines[currentLineNumber]);
        if (whitespace !== null && currentWhitespace !== null &&
            (whitespace === currentWhitespace || !whitespace.startsWith(currentWhitespace))) {
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
    let startLine = lineNumber;
    let endLine = lineNumber;
    currentWhitespace = lineWhitespace(lines[lineNumber]);
    while (lines[currentLineNumber] !== undefined && (relatedCodeSize + lines[currentLineNumber].length <= maxCodeSize)) {
        relatedCodeSize += lines[currentLineNumber].length;
        const whitespace = lineWhitespace(lines[currentLineNumber]);
        if (whitespace !== null && currentWhitespace !== null &&
            (whitespace === currentWhitespace || !whitespace.startsWith(currentWhitespace))) {
            // We shouldn't end on a line if it is followed by an indented line
            const nextLine = lines[currentLineNumber + 1];
            const nextWhitespace = nextLine ? lineWhitespace(nextLine) : null;
            if (!nextWhitespace || nextWhitespace === whitespace || !nextWhitespace.startsWith(whitespace)) {
                // Look up where code should start based on its indentation
                if (startByPrefix.has(whitespace)) {
                    startLine = startByPrefix.get(whitespace) ?? 0;
                    endLine = currentLineNumber;
                }
            }
            currentWhitespace = whitespace;
        }
        currentLineNumber++;
    }
    return lines.slice(startLine, endLine + 1).join('\n');
}
function formatLines(title, lines, maxLength) {
    let result = '';
    for (const line of lines) {
        if (result.length + line.length > maxLength) {
            break;
        }
        result += line;
    }
    result = result.trim();
    return result && title ? title + '\n' + result : result;
}
function formatNetworkRequest(request) {
    const formatHeaders = (title, headers) => formatLines(title, headers.filter(allowHeader).map(header => header.name + ': ' + header.value + '\n'), MAX_HEADERS_SIZE);
    // TODO: anything else that might be relavant?
    // TODO: handle missing headers
    return `Request: ${request.url()}

${formatHeaders('Request headers:', request.requestHeaders())}

${formatHeaders('Response headers:', request.responseHeaders)}

Response status: ${request.statusCode} ${request.statusText}`;
}
function formatConsoleMessage(message) {
    return message.toMessageTextString().substr(0, MAX_MESSAGE_SIZE);
}
/**
 * This formats the stacktrace from the console message which might or might not
 * match the content of stacktrace(s) in the console message arguments.
 */
function formatStackTrace(message) {
    const previewContainer = message.contentElement().querySelector('.stack-preview-container');
    if (!previewContainer) {
        return '';
    }
    const preview = previewContainer.shadowRoot?.querySelector('.stack-preview-container');
    const nodes = preview.childTextNodes();
    // Gets application-level source mapped stack trace taking the ignore list
    // into account.
    const messageContent = nodes
        .filter(n => {
        return !n.parentElement?.closest('.show-all-link,.show-less-link,.hidden-row');
    })
        .map(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_4__.Linkifier.Linkifier.untruncatedNodeText);
    return formatLines('', messageContent, MAX_STACK_TRACE_SIZE);
}
//# sourceMappingURL=PromptBuilder.js.map

/***/ })

}]);