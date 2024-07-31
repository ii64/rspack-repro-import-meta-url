"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_freestyler_FreestylerAgent_test_ts"],{

/***/ "./src/panels/freestyler/FreestylerAgent.test.ts":
/*!*******************************************************!*\
  !*** ./src/panels/freestyler/FreestylerAgent.test.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _freestyler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freestyler.js */ "./src/panels/freestyler/freestyler.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



const { FreestylerAgent } = _freestyler_js__WEBPACK_IMPORTED_MODULE_2__;
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('FreestylerAgent', () => {
    function mockHostConfig(modelId) {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getGetHostConfigStub)({
            devToolsFreestylerDogfood: {
                aidaModelId: modelId,
            },
        });
    }
    describe('parseResponse', () => {
        it('parses a thought', async () => {
            const payload = 'some response';
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`THOUGHT: ${payload}`), {
                action: undefined,
                thought: payload,
                answer: undefined,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`   THOUGHT: ${payload}`), {
                action: undefined,
                thought: payload,
                answer: undefined,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`Something\n   THOUGHT: ${payload}`), {
                action: undefined,
                thought: payload,
                answer: undefined,
            });
        });
        it('parses a answer', async () => {
            const payload = 'some response';
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ANSWER: ${payload}`), {
                action: undefined,
                thought: undefined,
                answer: payload,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`   ANSWER: ${payload}`), {
                action: undefined,
                thought: undefined,
                answer: payload,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`Something\n   ANSWER: ${payload}`), {
                action: undefined,
                thought: undefined,
                answer: payload,
            });
        });
        it('parses a multiline answer', async () => {
            const payload = `a
b
c`;
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ANSWER: ${payload}`), {
                action: undefined,
                thought: undefined,
                answer: payload,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`   ANSWER: ${payload}`), {
                action: undefined,
                thought: undefined,
                answer: payload,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`Something\n   ANSWER: ${payload}`), {
                action: undefined,
                thought: undefined,
                answer: payload,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ANSWER: ${payload}\nTHOUGHT: thought`), {
                action: undefined,
                thought: 'thought',
                answer: payload,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ANSWER: ${payload}\nOBSERVATION: observation`), {
                action: undefined,
                thought: undefined,
                answer: payload,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ANSWER: ${payload}\nACTION\naction\nSTOP`), {
                action: 'action',
                thought: undefined,
                answer: payload,
            });
        });
        it('parses an action', async () => {
            const payload = `const data = {
  someKey: "value",
}`;
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ACTION\n${payload}\nSTOP`), {
                action: payload,
                thought: undefined,
                answer: undefined,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ACTION\n${payload}`), {
                action: payload,
                thought: undefined,
                answer: undefined,
            });
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ACTION\n\n${payload}\n\nSTOP`), {
                action: payload,
                thought: undefined,
                answer: undefined,
            });
        });
        it('parses an action with backticks in the code', async () => {
            const payload = `const data = {
  someKey: "value",
}`;
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ACTION\n\`\`\`\n${payload}\n\`\`\`\nSTOP`), {
                action: payload,
                thought: undefined,
                answer: undefined,
            });
        });
        it('parses an action with 5 backticks in the code and `js` text in the prelude', async () => {
            const payload = `const data = {
  someKey: "value",
}`;
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`ACTION\n\`\`\`\`\`\njs\n${payload}\n\`\`\`\`\`\nSTOP`), {
                action: payload,
                thought: undefined,
                answer: undefined,
            });
        });
        it('parses a thought and an action', async () => {
            const actionPayload = `const data = {
  someKey: "value",
}`;
            const thoughtPayload = 'thought';
            assert.deepStrictEqual(FreestylerAgent.parseResponse(`THOUGHT:${thoughtPayload}\nACTION\n${actionPayload}\nSTOP`), {
                action: actionPayload,
                thought: thoughtPayload,
                answer: undefined,
            });
        });
        it('parses a response as an answer', async () => {
            assert.deepStrictEqual(FreestylerAgent.parseResponse('This is also an answer'), {
                action: undefined,
                thought: undefined,
                answer: 'This is also an answer',
            });
        });
    });
    describe('buildRequest', () => {
        beforeEach(() => {
            sinon.restore();
        });
        it('builds a request with a model id', async () => {
            mockHostConfig('test model');
            assert.strictEqual(FreestylerAgent.buildRequest({ input: 'test input' }).options?.model_id, 'test model');
        });
        it('builds a request with logging', async () => {
            mockHostConfig('test model');
            assert.strictEqual(FreestylerAgent.buildRequest({ input: 'test input', serverSideLoggingEnabled: true })
                .metadata?.disable_user_content_logging, false);
        });
        it('builds a request without logging', async () => {
            mockHostConfig('test model');
            assert.strictEqual(FreestylerAgent.buildRequest({ input: 'test input', serverSideLoggingEnabled: false })
                .metadata?.disable_user_content_logging, true);
        });
        it('builds a request with input', async () => {
            mockHostConfig();
            const request = FreestylerAgent.buildRequest({ input: 'test input' });
            assert.strictEqual(request.input, 'test input');
            assert.strictEqual(request.preamble, undefined);
            assert.strictEqual(request.chat_history, undefined);
        });
        it('builds a request with a sessionId', async () => {
            mockHostConfig();
            const request = FreestylerAgent.buildRequest({ input: 'test input', sessionId: 'sessionId' });
            assert.strictEqual(request.metadata?.string_session_id, 'sessionId');
        });
        it('builds a request with preamble', async () => {
            mockHostConfig();
            const request = FreestylerAgent.buildRequest({ input: 'test input', preamble: 'preamble' });
            assert.strictEqual(request.input, 'test input');
            assert.strictEqual(request.preamble, 'preamble');
            assert.strictEqual(request.chat_history, undefined);
        });
        it('builds a request with chat history', async () => {
            mockHostConfig();
            const request = FreestylerAgent.buildRequest({
                input: 'test input',
                chatHistory: [
                    {
                        text: 'test',
                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.USER,
                    },
                ],
            });
            assert.strictEqual(request.input, 'test input');
            assert.strictEqual(request.preamble, undefined);
            assert.deepStrictEqual(request.chat_history, [
                {
                    text: 'test',
                    entity: 1,
                },
            ]);
        });
        it('structure matches the snapshot', () => {
            mockHostConfig('test model');
            assert.deepStrictEqual(FreestylerAgent.buildRequest({
                input: 'test input',
                preamble: 'preamble',
                chatHistory: [
                    {
                        text: 'first',
                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.UNKNOWN,
                    },
                    {
                        text: 'second',
                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.SYSTEM,
                    },
                    {
                        text: 'third',
                        entity: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.Entity.USER,
                    },
                ],
                serverSideLoggingEnabled: true,
                sessionId: 'sessionId',
            }), {
                input: 'test input',
                client: 'CHROME_DEVTOOLS',
                preamble: 'preamble',
                chat_history: [
                    {
                        entity: 0,
                        text: 'first',
                    },
                    {
                        entity: 2,
                        text: 'second',
                    },
                    {
                        entity: 1,
                        text: 'third',
                    },
                ],
                metadata: {
                    disable_user_content_logging: false,
                    string_session_id: 'sessionId',
                },
                options: {
                    model_id: 'test model',
                    temperature: 0,
                },
                client_feature: 2,
                functionality_type: 1,
            });
        });
    });
    describe('run', () => {
        beforeEach(() => {
            mockHostConfig();
        });
        function mockAidaClient(fetch) {
            return {
                fetch,
                registerClientEvent: () => Promise.resolve({}),
            };
        }
        describe('side effect handling', () => {
            it('calls confirmSideEffect when the code execution contains a side effect', async () => {
                let count = 0;
                async function* generateActionAndAnswer() {
                    if (count === 0) {
                        yield {
                            explanation: `ACTION
              $0.style.backgroundColor = 'red'
              STOP`,
                            metadata: {},
                        };
                    }
                    else {
                        yield {
                            explanation: 'ANSWER: This is the answer',
                            metadata: {},
                        };
                    }
                    count++;
                }
                const execJs = sinon.mock().throws(new _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.SideEffectError('EvalError: Possible side-effect in debug-evaluate'));
                const confirmSideEffect = sinon.mock().resolves(false);
                const agent = new FreestylerAgent({
                    aidaClient: mockAidaClient(generateActionAndAnswer),
                    confirmSideEffect,
                    execJs,
                });
                await Array.fromAsync(agent.run('test'));
                sinon.assert.match(execJs.getCall(0).args[1], sinon.match({ throwOnSideEffect: true }));
                sinon.assert.calledOnce(confirmSideEffect);
            });
            it('calls execJs with allowing side effects when confirmSideEffect resolves to true', async () => {
                let count = 0;
                async function* generateActionAndAnswer() {
                    if (count === 0) {
                        yield {
                            explanation: `ACTION
              $0.style.backgroundColor = 'red'
              STOP`,
                            metadata: {},
                        };
                    }
                    else {
                        yield {
                            explanation: 'ANSWER: This is the answer',
                            metadata: {},
                        };
                    }
                    count++;
                }
                const execJs = sinon.mock().twice();
                execJs.onCall(0).throws(new _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.SideEffectError('EvalError: Possible side-effect in debug-evaluate'));
                execJs.onCall(1).resolves('value');
                const confirmSideEffect = sinon.mock().resolves(true);
                const agent = new FreestylerAgent({
                    aidaClient: mockAidaClient(generateActionAndAnswer),
                    confirmSideEffect,
                    execJs,
                });
                await Array.fromAsync(agent.run('test'));
                sinon.assert.calledOnce(confirmSideEffect);
                assert.strictEqual(execJs.getCalls().length, 2);
                sinon.assert.match(execJs.getCall(1).args[1], sinon.match({ throwOnSideEffect: false }));
            });
            it('returns side effect error when confirmSideEffect resolves to false', async () => {
                let count = 0;
                async function* generateActionAndAnswer() {
                    if (count === 0) {
                        yield {
                            explanation: `ACTION
              $0.style.backgroundColor = 'red'
              STOP`,
                            metadata: {},
                        };
                    }
                    else {
                        yield {
                            explanation: 'ANSWER: This is the answer',
                            metadata: {},
                        };
                    }
                    count++;
                }
                const execJs = sinon.mock().twice();
                execJs.onCall(0).throws(new _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.SideEffectError('EvalError: Possible side-effect in debug-evaluate'));
                const confirmSideEffect = sinon.mock().resolves(false);
                const agent = new FreestylerAgent({
                    aidaClient: mockAidaClient(generateActionAndAnswer),
                    confirmSideEffect,
                    execJs,
                });
                const steps = await Array.fromAsync(agent.run('test'));
                const actionStep = steps.find(step => step.step === _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ACTION);
                sinon.assert.calledOnce(confirmSideEffect);
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                assert.strictEqual(actionStep.output, 'Error: EvalError: Possible side-effect in debug-evaluate');
                assert.strictEqual(execJs.getCalls().length, 1);
            });
            it('calls execJs with allowing side effects when the query includes "Fix this issue" prompt', async () => {
                let count = 0;
                async function* generateActionAndAnswer() {
                    if (count === 0) {
                        yield {
                            explanation: `ACTION
              $0.style.backgroundColor = 'red'
              STOP`,
                            metadata: {},
                        };
                    }
                    else {
                        yield {
                            explanation: 'ANSWER: This is the answer',
                            metadata: {},
                        };
                    }
                    count++;
                }
                const execJs = sinon.mock().once();
                const confirmSideEffect = sinon.mock();
                const agent = new FreestylerAgent({
                    aidaClient: mockAidaClient(generateActionAndAnswer),
                    confirmSideEffect,
                    execJs,
                });
                await Array.fromAsync(agent.run(_freestyler_js__WEBPACK_IMPORTED_MODULE_2__.FIX_THIS_ISSUE_PROMPT, { isFixQuery: true }));
                const optionsArg = execJs.lastCall.args[1];
                sinon.assert.notCalled(confirmSideEffect);
                sinon.assert.match(optionsArg, sinon.match({ throwOnSideEffect: false }));
            });
        });
        describe('long `Observation` text handling', () => {
            it('errors with too long input', async () => {
                let count = 0;
                async function* generateActionAndAnswer() {
                    if (count === 0) {
                        yield {
                            explanation: `ACTION
              $0.style.backgroundColor = 'red'
              STOP`,
                            metadata: {},
                        };
                    }
                    else {
                        yield {
                            explanation: 'ANSWER: This is the answer',
                            metadata: {},
                        };
                    }
                    count++;
                }
                const execJs = sinon.mock().returns(new Array(10000).fill('<div>...</div>').join());
                const confirmSideEffect = sinon.mock().resolves(false);
                const agent = new FreestylerAgent({
                    aidaClient: mockAidaClient(generateActionAndAnswer),
                    confirmSideEffect,
                    execJs,
                });
                const result = await Array.fromAsync(agent.run('test'));
                const lastStepData = result.at(-3);
                assert(lastStepData.step === _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ACTION, 'Not an Action step');
                assert(lastStepData.output.includes('Error: Output exceeded the maximum allowed length.'));
            });
        });
        it('generates an answer immediately', async () => {
            async function* generateAnswer() {
                yield {
                    explanation: 'ANSWER: this is the answer',
                    metadata: {},
                };
            }
            const execJs = sinon.spy();
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateAnswer),
                confirmSideEffect: () => Promise.resolve(true),
                execJs,
            });
            const steps = await Array.fromAsync(agent.run('test'));
            assert.deepStrictEqual(steps, [
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                    text: 'this is the answer',
                    rpcId: undefined,
                },
            ]);
            sinon.assert.notCalled(execJs);
            assert.deepStrictEqual(agent.chatHistoryForTesting, [
                {
                    entity: 1,
                    text: 'QUERY: test',
                },
                {
                    entity: 2,
                    text: 'ANSWER: this is the answer',
                },
            ]);
        });
        it('generates an rpcId for the answer', async () => {
            async function* generateAnswer() {
                yield {
                    explanation: 'ANSWER: this is the answer',
                    metadata: {
                        rpcGlobalId: 123,
                    },
                };
            }
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateAnswer),
                confirmSideEffect: () => Promise.resolve(true),
                execJs: sinon.spy(),
            });
            const steps = await Array.fromAsync(agent.run('test'));
            assert.deepStrictEqual(steps, [
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                    text: 'this is the answer',
                    rpcId: 123,
                },
            ]);
        });
        it('throws an error based on the attribution metadata including RecitationAction.BLOCK', async () => {
            async function* generateAnswer() {
                yield {
                    explanation: 'ANSWER: this is the answer',
                    metadata: {
                        rpcGlobalId: 123,
                        attributionMetadata: [{
                                attributionAction: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.RecitationAction.BLOCK,
                                citations: [],
                            }],
                    },
                };
            }
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateAnswer),
                confirmSideEffect: () => Promise.resolve(true),
                execJs: sinon.spy(),
            });
            const steps = await Array.fromAsync(agent.run('test'));
            assert.deepStrictEqual(steps, [
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING,
                },
                {
                    rpcId: undefined,
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ERROR,
                    text: 'Sorry, I could not help you with this query.',
                },
            ]);
        });
        it('does not throw an error based on attribution metadata not including RecitationAction.BLOCK', async () => {
            async function* generateAnswer() {
                yield {
                    explanation: 'ANSWER: this is the answer',
                    metadata: {
                        rpcGlobalId: 123,
                        attributionMetadata: [{
                                attributionAction: _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.AidaClient.RecitationAction.ACTION_UNSPECIFIED,
                                citations: [],
                            }],
                    },
                };
            }
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateAnswer),
                confirmSideEffect: () => Promise.resolve(true),
                execJs: sinon.spy(),
            });
            const steps = await Array.fromAsync(agent.run('test'));
            assert.deepStrictEqual(steps, [
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                    text: 'this is the answer',
                    rpcId: 123,
                },
            ]);
        });
        it('generates a response if nothing is returned', async () => {
            async function* generateNothing() {
                yield {
                    explanation: '',
                    metadata: {},
                };
            }
            const execJs = sinon.spy();
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateNothing),
                confirmSideEffect: () => Promise.resolve(true),
                execJs,
            });
            const steps = await Array.fromAsync(agent.run('test'));
            assert.deepStrictEqual(steps, [
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                    text: 'Sorry, I could not help you with this query.',
                    rpcId: undefined,
                },
            ]);
            sinon.assert.notCalled(execJs);
            assert.deepStrictEqual(agent.chatHistoryForTesting, [
                {
                    entity: 1,
                    text: 'QUERY: test',
                },
                {
                    entity: 2,
                    text: '',
                },
            ]);
        });
        it('generates an action response if action and answer both present', async () => {
            let i = 0;
            async function* generateNothing() {
                if (i !== 0) {
                    yield {
                        explanation: 'ANSWER: this is the actual answer',
                        metadata: {},
                    };
                    return;
                }
                yield {
                    explanation: `THOUGHT: I am thinking.

ACTION
console.log('hello');
STOP

ANSWER: this is the answer`,
                    metadata: {},
                };
                i++;
            }
            const execJs = sinon.mock().once();
            execJs.onCall(0).returns('hello');
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateNothing),
                confirmSideEffect: () => Promise.resolve(true),
                execJs,
            });
            const steps = await Array.fromAsync(agent.run('test'));
            assert.deepStrictEqual(steps, [
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.THOUGHT,
                    text: 'I am thinking.',
                    rpcId: undefined,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ACTION,
                    code: 'console.log(\'hello\');',
                    output: 'hello',
                    rpcId: undefined,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.QUERYING,
                },
                {
                    step: _freestyler_js__WEBPACK_IMPORTED_MODULE_2__.Step.ANSWER,
                    text: 'this is the actual answer',
                    rpcId: undefined,
                },
            ]);
            sinon.assert.calledOnce(execJs);
        });
        it('generates history for multiple actions', async () => {
            let count = 0;
            async function* generateMultipleTimes() {
                if (count === 3) {
                    yield {
                        explanation: 'ANSWER: this is the answer',
                        metadata: {},
                    };
                    return;
                }
                count++;
                yield {
                    explanation: `THOUGHT: thought ${count}\nACTION\nconsole.log('test')\nSTOP\n`,
                    metadata: {},
                };
            }
            const execJs = sinon.spy(async () => 'undefined');
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateMultipleTimes),
                confirmSideEffect: () => Promise.resolve(true),
                execJs,
            });
            await Array.fromAsync(agent.run('test'));
            assert.deepStrictEqual(agent.chatHistoryForTesting, [
                {
                    entity: 1,
                    text: 'QUERY: test',
                },
                {
                    entity: 2,
                    text: 'THOUGHT: thought 1\nACTION\nconsole.log(\'test\')\nSTOP\n',
                },
                {
                    entity: 1,
                    text: 'OBSERVATION: undefined',
                },
                {
                    entity: 2,
                    text: 'THOUGHT: thought 2\nACTION\nconsole.log(\'test\')\nSTOP\n',
                },
                {
                    entity: 1,
                    text: 'OBSERVATION: undefined',
                },
                {
                    entity: 2,
                    text: 'THOUGHT: thought 3\nACTION\nconsole.log(\'test\')\nSTOP\n',
                },
                {
                    entity: 1,
                    text: 'OBSERVATION: undefined',
                },
                {
                    entity: 2,
                    text: 'ANSWER: this is the answer',
                },
            ]);
        });
        it('stops when aborted', async () => {
            let count = 0;
            async function* generateMultipleTimes() {
                if (count === 3) {
                    yield {
                        explanation: 'ANSWER: this is the answer',
                        metadata: {},
                    };
                    return;
                }
                count++;
                yield {
                    explanation: `THOUGHT: thought ${count}\nACTION\nconsole.log('test')\nSTOP\n`,
                    metadata: {},
                };
            }
            const execJs = sinon.spy();
            const agent = new FreestylerAgent({
                aidaClient: mockAidaClient(generateMultipleTimes),
                confirmSideEffect: () => Promise.resolve(true),
                execJs,
            });
            const controller = new AbortController();
            controller.abort();
            await Array.fromAsync(agent.run('test', { signal: controller.signal, isFixQuery: false }));
            assert.deepStrictEqual(agent.chatHistoryForTesting, []);
        });
    });
});


/***/ }),

/***/ "./src/panels/freestyler/freestyler.ts":
/*!*********************************************!*\
  !*** ./src/panels/freestyler/freestyler.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.ActionDelegate),
/* harmony export */   ChatMessageEntity: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.ChatMessageEntity),
/* harmony export */   DOGFOOD_INFO: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.DOGFOOD_INFO),
/* harmony export */   ExecutionError: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.ExecutionError),
/* harmony export */   FIX_THIS_ISSUE_PROMPT: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FIX_THIS_ISSUE_PROMPT),
/* harmony export */   FOR_TEST: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FOR_TEST),
/* harmony export */   FreestylerAgent: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.FreestylerAgent),
/* harmony export */   FreestylerChatUi: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.FreestylerChatUi),
/* harmony export */   FreestylerEvaluateAction: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.FreestylerEvaluateAction),
/* harmony export */   FreestylerPanel: () => (/* reexport safe */ _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__.FreestylerPanel),
/* harmony export */   ProvideFeedback: () => (/* reexport safe */ _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__.ProvideFeedback),
/* harmony export */   SideEffectError: () => (/* reexport safe */ _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__.SideEffectError),
/* harmony export */   State: () => (/* reexport safe */ _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__.State),
/* harmony export */   Step: () => (/* reexport safe */ _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__.Step)
/* harmony export */ });
/* harmony import */ var _FreestylerEvaluateAction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreestylerEvaluateAction.js */ "./src/panels/freestyler/FreestylerEvaluateAction.ts");
/* harmony import */ var _components_ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ProvideFeedback.js */ "./src/panels/freestyler/components/ProvideFeedback.ts");
/* harmony import */ var _components_FreestylerChatUi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/FreestylerChatUi.js */ "./src/panels/freestyler/components/FreestylerChatUi.ts");
/* harmony import */ var _FreestylerPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FreestylerPanel.js */ "./src/panels/freestyler/FreestylerPanel.ts");
/* harmony import */ var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FreestylerAgent.js */ "./src/panels/freestyler/FreestylerAgent.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.







/***/ })

}]);