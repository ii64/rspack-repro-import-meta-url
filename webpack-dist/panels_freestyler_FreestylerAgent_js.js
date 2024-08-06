"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_freestyler_FreestylerAgent_js"],{

/***/ "./panels/freestyler/FreestylerAgent.js":
/*!**********************************************!*\
  !*** ./panels/freestyler/FreestylerAgent.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FIX_THIS_ISSUE_PROMPT: () => (/* binding */ FIX_THIS_ISSUE_PROMPT),
/* harmony export */   FreestylerAgent: () => (/* binding */ FreestylerAgent),
/* harmony export */   Step: () => (/* binding */ Step)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./panels/freestyler/FreestylerEvaluateAction.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const preamble = `You are a CSS debugging assistant integrated into Chrome DevTools.
The user selected a DOM element in the browser's DevTools and sends a CSS-related
query about the selected DOM element. You are going to answer to the query in these steps:
* THOUGHT
* ACTION
* ANSWER
Use THOUGHT to explain why you take the ACTION.
Use ACTION to evaluate JavaScript code on the page to gather all the data needed to answer the query and put it inside the data variable - then return STOP.
You have access to a special $0 variable referencing the current element in the scope of the JavaScript code.
OBSERVATION will be the result of running the JS code on the page.
After that, you can answer the question with ANSWER or run another ACTION query.
Please run ACTION again if the information you received is not enough to answer the query.
Please answer only if you are sure about the answer. Otherwise, explain why you're not able to answer.
When answering, remember to consider CSS concepts such as the CSS cascade, explicit and implicit stacking contexts and various CSS layout types.
When answering, always consider MULTIPLE possible solutions.

Example:
ACTION
const data = {
  color: window.getComputedStyle($0)['color'],
  backgroundColor: window.getComputedStyle($0)['backgroundColor'],
}
STOP

Example session:

QUERY: Why is this element centered in its container?
THOUGHT: Let's check the layout properties of the container.
ACTION
/* COLLECT_INFORMATION_HERE */
const data = {
  /* THE RESULT YOU ARE GOING TO USE AS INFORMATION */
}
STOP

You will be called again with this:
OBSERVATION
/* OBJECT_CONTAINING_YOUR_DATA */

You then output:
ANSWER: The element is centered on the page because the parent is a flex container with justify-content set to center.

The example session ends here.`;
const FIX_THIS_ISSUE_PROMPT = 'Fix this issue using JavaScript code execution';
var Step;
(function (Step) {
    Step["THOUGHT"] = "thought";
    Step["ACTION"] = "action";
    Step["ANSWER"] = "answer";
    Step["ERROR"] = "error";
    Step["QUERYING"] = "querying";
})(Step || (Step = {}));
async function executeJsCode(code, { throwOnSideEffect }) {
    const target = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.Target.Target);
    if (!target) {
        throw new Error('Target is not found for executing code');
    }
    const resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ResourceTreeModel.ResourceTreeModel);
    const runtimeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeModel.RuntimeModel);
    const pageAgent = target.pageAgent();
    if (!resourceTreeModel?.mainFrame) {
        throw new Error('Main frame is not found for executing code');
    }
    // This returns previously created world if it exists for the frame.
    const { executionContextId } = await pageAgent.invoke_createIsolatedWorld({ frameId: resourceTreeModel.mainFrame.id, worldName: 'devtools_freestyler' });
    const executionContext = runtimeModel?.executionContext(executionContextId);
    if (!executionContext) {
        throw new Error('Execution context is not found for executing code');
    }
    try {
        return await _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__.FreestylerEvaluateAction.execute(code, executionContext, { throwOnSideEffect });
    }
    catch (err) {
        if (err instanceof _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__.ExecutionError) {
            return `Error: ${err.message}`;
        }
        throw err;
    }
}
const MAX_STEPS = 10;
const MAX_OBSERVATION_BYTE_LENGTH = 25_000;
/**
 * One agent instance handles one conversation. Create a new agent
 * instance for a new conversation.
 */
class FreestylerAgent {
    static buildRequest(opts) {
        const config = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig();
        const request = {
            input: opts.input,
            preamble: opts.preamble,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            chat_history: opts.chatHistory,
            client: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.CLIENT_NAME,
            options: {
                temperature: config?.devToolsFreestylerDogfood.aidaTemperature ?? 0,
                model_id: config?.devToolsFreestylerDogfood.aidaModelId ?? undefined,
            },
            metadata: {
                // TODO: disable logging based on query params.
                disable_user_content_logging: !(opts.serverSideLoggingEnabled ?? false),
                string_session_id: opts.sessionId,
            },
            // eslint-disable-next-line @typescript-eslint/naming-convention
            functionality_type: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.FunctionalityType.CHAT,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            client_feature: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.ClientFeature.CHROME_FREESTYLER,
        };
        return request;
    }
    static parseResponse(response) {
        const lines = response.split('\n');
        let thought;
        let action;
        let answer;
        let i = 0;
        while (i < lines.length) {
            const trimmed = lines[i].trim();
            if (trimmed.startsWith('THOUGHT:') && !thought) {
                // TODO: multiline thoughts.
                thought = trimmed.substring('THOUGHT:'.length).trim();
                i++;
            }
            else if (trimmed.startsWith('ACTION') && !action) {
                const actionLines = [];
                let j = i + 1;
                while (j < lines.length && lines[j].trim() !== 'STOP') {
                    // Sometimes the code block is in the form of "`````\njs\n{code}`````"
                    if (lines[j].trim() !== 'js') {
                        actionLines.push(lines[j]);
                    }
                    j++;
                }
                // TODO: perhaps trying to parse with a Markdown parser would
                // yield more reliable results.
                action = actionLines.join('\n').replaceAll('```', '').replaceAll('``', '').trim();
                i = j + 1;
            }
            else if (trimmed.startsWith('ANSWER:') && !answer) {
                const answerLines = [
                    trimmed.substring('ANSWER:'.length).trim(),
                ];
                let j = i + 1;
                while (j < lines.length) {
                    const line = lines[j].trim();
                    if (line.startsWith('ACTION') || line.startsWith('OBSERVATION:') || line.startsWith('THOUGHT:')) {
                        break;
                    }
                    answerLines.push(lines[j]);
                    j++;
                }
                answer = answerLines.join('\n').trim();
                i = j;
            }
            else {
                i++;
            }
        }
        // If we could not parse the parts, consider the response to be an
        // answer.
        if (!answer && !thought && !action) {
            answer = response;
        }
        return { thought, action, answer };
    }
    #aidaClient;
    #chatHistory = new Map();
    #serverSideLoggingEnabled;
    #confirmSideEffect;
    #execJs;
    #sessionId = crypto.randomUUID();
    constructor(opts) {
        this.#aidaClient = opts.aidaClient;
        this.#execJs = opts.execJs ?? executeJsCode;
        this.#confirmSideEffect = opts.confirmSideEffect;
        this.#serverSideLoggingEnabled = opts.serverSideLoggingEnabled ?? false;
    }
    get #getHistoryEntry() {
        return [...this.#chatHistory.values()].flat();
    }
    get chatHistoryForTesting() {
        return this.#getHistoryEntry;
    }
    async #aidaFetch(request) {
        let response = '';
        let rpcId;
        for await (const lastResult of this.#aidaClient.fetch(request)) {
            response = lastResult.explanation;
            rpcId = lastResult.metadata.rpcGlobalId ?? rpcId;
            if (lastResult.metadata.attributionMetadata?.some(meta => meta.attributionAction === _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.RecitationAction.BLOCK)) {
                throw new Error('Attribution action does not allow providing the response');
            }
        }
        return { response, rpcId };
    }
    async #generateObservation(action, { throwOnSideEffect, confirmExecJs: confirm, execJsDeniedMesssage: denyErrorMessage }) {
        const actionExpression = `{${action};((typeof data !== "undefined") ? data : undefined)}`;
        try {
            const runConfirmed = await (confirm?.call(this, action) ?? Promise.resolve(true));
            if (!runConfirmed) {
                throw new Error(denyErrorMessage ?? 'Code execution is not allowed');
            }
            const result = await this.#execJs(actionExpression, { throwOnSideEffect });
            const byteCount = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.countWtf8Bytes(result);
            if (byteCount > MAX_OBSERVATION_BYTE_LENGTH) {
                throw new Error('Output exceeded the maximum allowed length.');
            }
            return result;
        }
        catch (error) {
            if (error instanceof _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_5__.SideEffectError) {
                return await this.#generateObservation(action, {
                    throwOnSideEffect: false,
                    confirmExecJs: this.#confirmSideEffect,
                    execJsDeniedMesssage: error.message,
                });
            }
            return `Error: ${error.message}`;
        }
    }
    #runId = 0;
    async *run(query, options = { isFixQuery: false }) {
        const genericErrorMessage = 'Sorry, I could not help you with this query.';
        const structuredLog = [];
        query = `QUERY: ${query}`;
        const currentRunId = ++this.#runId;
        options.signal?.addEventListener('abort', () => {
            this.#chatHistory.delete(currentRunId);
        });
        for (let i = 0; i < MAX_STEPS; i++) {
            yield { step: Step.QUERYING };
            const request = FreestylerAgent.buildRequest({
                input: query,
                preamble,
                chatHistory: this.#chatHistory.size ? this.#getHistoryEntry : undefined,
                serverSideLoggingEnabled: this.#serverSideLoggingEnabled,
                sessionId: this.#sessionId,
            });
            let response;
            let rpcId;
            try {
                const fetchResult = await this.#aidaFetch(request);
                response = fetchResult.response;
                rpcId = fetchResult.rpcId;
            }
            catch (err) {
                debugLog('Error calling the AIDA API', err);
                if (options.signal?.aborted) {
                    break;
                }
                yield { step: Step.ERROR, text: genericErrorMessage, rpcId };
                break;
            }
            if (options.signal?.aborted) {
                break;
            }
            debugLog(`Iteration: ${i}`, 'Request', request, 'Response', response);
            structuredLog.push({
                request: structuredClone(request),
                response: response,
            });
            const currentRunEntries = this.#chatHistory.get(currentRunId) ?? [];
            this.#chatHistory.set(currentRunId, [
                ...currentRunEntries,
                {
                    text: query,
                    entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.Entity.USER,
                },
                {
                    text: response,
                    entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.Entity.SYSTEM,
                },
            ]);
            const { thought, action, answer } = FreestylerAgent.parseResponse(response);
            // Sometimes the answer will follow an action and a thought. In
            // that case, we only use the action and the thought (if present)
            // since the answer is not based on the observation resulted from
            // the action.
            if (action) {
                if (thought) {
                    yield { step: Step.THOUGHT, text: thought, rpcId };
                }
                debugLog(`Action to execute: ${action}`);
                const observation = await this.#generateObservation(action, { throwOnSideEffect: !options.isFixQuery });
                debugLog(`Action result: ${observation}`);
                yield { step: Step.ACTION, code: action, output: observation, rpcId };
                query = `OBSERVATION: ${observation}`;
            }
            else if (answer) {
                yield { step: Step.ANSWER, text: answer, rpcId };
                break;
            }
            else {
                yield { step: Step.ANSWER, text: genericErrorMessage, rpcId };
                break;
            }
            if (i === MAX_STEPS - 1) {
                yield { step: Step.ERROR, text: 'Max steps reached, please try again.' };
            }
        }
        if (isDebugMode()) {
            localStorage.setItem('freestylerStructuredLog', JSON.stringify(structuredLog));
            window.dispatchEvent(new CustomEvent('freestylerdone'));
        }
    }
}
function isDebugMode() {
    return Boolean(localStorage.getItem('debugFreestylerEnabled'));
}
function debugLog(...log) {
    if (!isDebugMode()) {
        return;
    }
    // eslint-disable-next-line no-console
    console.log(...log);
}
function setDebugFreestylerEnabled(enabled) {
    if (enabled) {
        localStorage.setItem('debugFreestylerEnabled', 'true');
    }
    else {
        localStorage.removeItem('debugFreestylerEnabled');
    }
}
// @ts-ignore
globalThis.setDebugFreestylerEnabled = setDebugFreestylerEnabled;
//# sourceMappingURL=FreestylerAgent.js.map

/***/ }),

/***/ "./panels/freestyler/FreestylerEvaluateAction.js":
/*!*******************************************************!*\
  !*** ./panels/freestyler/FreestylerEvaluateAction.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecutionError: () => (/* binding */ ExecutionError),
/* harmony export */   FreestylerEvaluateAction: () => (/* binding */ FreestylerEvaluateAction),
/* harmony export */   SideEffectError: () => (/* binding */ SideEffectError)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExecutionError extends Error {
}
class SideEffectError extends Error {
}
/* istanbul ignore next */
function stringifyObjectOnThePage() {
    const seenBefore = new WeakMap();
    return JSON.stringify(this, function replacer(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (seenBefore.has(value)) {
                return '(cycle)';
            }
            seenBefore.set(value, true);
        }
        if (value instanceof HTMLElement) {
            const idAttribute = value.id ? ` id="${value.id}"` : '';
            const classAttribute = value.classList.value ? ` class="${value.classList.value}"` : '';
            return `<${value.nodeName.toLowerCase()}${idAttribute}${classAttribute}>${value.hasChildNodes() ? '...' : ''}</${value.nodeName.toLowerCase()}>`;
        }
        if (this instanceof CSSStyleDeclaration) {
            // Do not add number keys to the output.
            if (!isNaN(Number(key))) {
                return undefined;
            }
        }
        return value;
    });
}
async function stringifyRemoteObject(object) {
    switch (object.type) {
        case "string" /* Protocol.Runtime.RemoteObjectType.String */:
            return `'${object.value}'`;
        case "bigint" /* Protocol.Runtime.RemoteObjectType.Bigint */:
            return `${object.value}n`;
        case "boolean" /* Protocol.Runtime.RemoteObjectType.Boolean */:
        case "number" /* Protocol.Runtime.RemoteObjectType.Number */:
            return `${object.value}`;
        case "undefined" /* Protocol.Runtime.RemoteObjectType.Undefined */:
            return 'undefined';
        case "symbol" /* Protocol.Runtime.RemoteObjectType.Symbol */:
        case "function" /* Protocol.Runtime.RemoteObjectType.Function */:
            return `${object.description}`;
        case "object" /* Protocol.Runtime.RemoteObjectType.Object */: {
            const res = await object.callFunction(stringifyObjectOnThePage);
            if (!res.object || res.object.type !== "string" /* Protocol.Runtime.RemoteObjectType.String */) {
                throw new Error('Could not stringify the object' + object);
            }
            return res.object.value;
        }
        default:
            throw new Error('Unknown type to stringify ' + object.type);
    }
}
class FreestylerEvaluateAction {
    static async execute(code, executionContext, { throwOnSideEffect }) {
        const response = await executionContext.evaluate({
            expression: code,
            replMode: true,
            includeCommandLineAPI: true,
            returnByValue: false,
            silent: false,
            generatePreview: true,
            allowUnsafeEvalBlockedByCSP: false,
            throwOnSideEffect,
        }, 
        /* userGesture */ false, /* awaitPromise */ true);
        if (!response) {
            throw new Error('Response is not found');
        }
        if ('error' in response) {
            throw new ExecutionError(response.error);
        }
        if (response.exceptionDetails) {
            const exceptionDescription = response.exceptionDetails.exception?.description;
            if (exceptionDescription?.startsWith('EvalError: Possible side-effect in debug-evaluate')) {
                throw new SideEffectError(exceptionDescription);
            }
            throw new ExecutionError(exceptionDescription || 'JS exception');
        }
        return stringifyRemoteObject(response.object);
    }
}
//# sourceMappingURL=FreestylerEvaluateAction.js.map

/***/ })

}]);