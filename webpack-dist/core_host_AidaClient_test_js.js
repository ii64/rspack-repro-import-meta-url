"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_host_AidaClient_test_js"],{

/***/ "./core/host/AidaClient.test.js":
/*!**************************************!*\
  !*** ./core/host/AidaClient.test.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */ var _host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./host.js */ "./core/host/host.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


const TEST_MODEL_ID = 'testModelId';
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('AidaClient', () => {
    it('adds no model temperature if console insights is not enabled', () => {
        const stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({});
        const request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            client_feature: 1,
            functionality_type: 2,
        });
        stub.restore();
    });
    it('adds a model temperature', () => {
        const stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaTemperature: 0.5,
            },
        });
        const request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            options: {
                temperature: 0.5,
            },
            client_feature: 1,
            functionality_type: 2,
        });
        stub.restore();
    });
    it('adds a model temperature of 0', () => {
        const stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaTemperature: 0,
            },
        });
        const request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            options: {
                temperature: 0,
            },
            client_feature: 1,
            functionality_type: 2,
        });
        stub.restore();
    });
    it('adds a model id and temperature', () => {
        const stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaModelId: TEST_MODEL_ID,
                aidaTemperature: 0.5,
            },
        });
        const request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            options: {
                model_id: TEST_MODEL_ID,
                temperature: 0.5,
            },
            client_feature: 1,
            functionality_type: 2,
        });
        stub.restore();
    });
    it('adds metadata to disallow logging', () => {
        const stub = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.getGetHostConfigStub)({
            devToolsConsoleInsights: {
                enabled: true,
                aidaTemperature: 0.5,
                disallowLogging: true,
            },
        });
        const request = _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo');
        assert.deepStrictEqual(request, {
            input: 'foo',
            client: 'CHROME_DEVTOOLS',
            metadata: {
                disable_user_content_logging: true,
            },
            options: {
                temperature: 0.5,
            },
            client_feature: 1,
            functionality_type: 2,
        });
        stub.restore();
    });
    async function getAllResults(provider) {
        const results = [];
        for await (const result of provider.fetch(_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest('foo'))) {
            results.push(result);
        }
        return results;
    }
    it('handles chunked response', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation')
            .callsFake(async (_, streamId, callback) => {
            const response = JSON.stringify([
                { textChunk: { text: 'hello ' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'brave ' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'new world!' } },
            ]);
            let first = true;
            for (const chunk of response.split(',{')) {
                await new Promise(resolve => setTimeout(resolve, 0));
                _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, first ? chunk : ',{' + chunk);
                first = false;
            }
            callback({ statusCode: 200 });
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        const results = await getAllResults(provider);
        assert.deepStrictEqual(results, [
            { explanation: 'hello ', metadata: { rpcGlobalId: 123 } },
            { explanation: 'hello brave ', metadata: { rpcGlobalId: 123 } },
            { explanation: 'hello brave new world!', metadata: { rpcGlobalId: 123 } },
        ]);
    });
    it('handles single square bracket as a chunk', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation')
            .callsFake(async (_, streamId, callback) => {
            const response = ['[', JSON.stringify({ textChunk: { text: 'hello world' }, metadata: { rpcGlobalId: 123 } }), ']'];
            for (const chunk of response) {
                await new Promise(resolve => setTimeout(resolve, 0));
                _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunk);
            }
            callback({ statusCode: 200 });
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        const results = await getAllResults(provider);
        assert.deepStrictEqual(results, [
            { explanation: 'hello world', metadata: { rpcGlobalId: 123 } },
        ]);
    });
    it('handles chunked response with multiple objects per chunk', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation')
            .callsFake(async (_, streamId, callback) => {
            const response = JSON.stringify([
                { textChunk: { text: 'Friends, Romans, countrymen, lend me your ears;\n' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'I come to bury Caesar, not to praise him.\n' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'The evil that men do lives after them;\n' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'The good is oft interred with their bones;\n' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'So let it be with Caesar. The noble Brutus\n' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'Hath told you Caesar was ambitious:\n' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'If it were so, it was a grievous fault,\n' }, metadata: { rpcGlobalId: 123 } },
                { textChunk: { text: 'And grievously hath Caesar answer’d it.\n' }, metadata: { rpcGlobalId: 123 } },
            ]);
            const chunks = response.split(',{');
            await new Promise(resolve => setTimeout(resolve, 0));
            _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunks[0] + ',{' + chunks[1]);
            await new Promise(resolve => setTimeout(resolve, 0));
            _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, ',{' + chunks[2] + ',{' + chunks[3] + ',{' + chunks[4]);
            await new Promise(resolve => setTimeout(resolve, 0));
            _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, ',{' + chunks[5]);
            await new Promise(resolve => setTimeout(resolve, 0));
            _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, ',{' + chunks[6] + ',{' + chunks[7]);
            callback({ statusCode: 200 });
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        const results = await getAllResults(provider);
        assert.deepStrictEqual(results, [
            {
                explanation: 'Friends, Romans, countrymen, lend me your ears;\n' +
                    'I come to bury Caesar, not to praise him.\n',
                metadata: { rpcGlobalId: 123 },
            },
            {
                explanation: 'Friends, Romans, countrymen, lend me your ears;\n' +
                    'I come to bury Caesar, not to praise him.\n' +
                    'The evil that men do lives after them;\n' +
                    'The good is oft interred with their bones;\n' +
                    'So let it be with Caesar. The noble Brutus\n',
                metadata: { rpcGlobalId: 123 },
            },
            {
                explanation: 'Friends, Romans, countrymen, lend me your ears;\n' +
                    'I come to bury Caesar, not to praise him.\n' +
                    'The evil that men do lives after them;\n' +
                    'The good is oft interred with their bones;\n' +
                    'So let it be with Caesar. The noble Brutus\n' +
                    'Hath told you Caesar was ambitious:\n',
                metadata: { rpcGlobalId: 123 },
            },
            {
                explanation: 'Friends, Romans, countrymen, lend me your ears;\n' +
                    'I come to bury Caesar, not to praise him.\n' +
                    'The evil that men do lives after them;\n' +
                    'The good is oft interred with their bones;\n' +
                    'So let it be with Caesar. The noble Brutus\n' +
                    'Hath told you Caesar was ambitious:\n' +
                    'If it were so, it was a grievous fault,\n' +
                    'And grievously hath Caesar answer’d it.\n',
                metadata: { rpcGlobalId: 123 },
            },
        ]);
    });
    it('handles attributionMetadata', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation')
            .callsFake(async (_, streamId, callback) => {
            const response = JSON.stringify([
                {
                    textChunk: { text: 'Chunk1\n' },
                    metadata: { rpcGlobalId: 123, attributionMetadata: { attributionAction: 'BLOCK', citations: [] } },
                },
                {
                    textChunk: { text: 'Chunk2\n' },
                    metadata: {
                        rpcGlobalId: 123,
                        attributionMetadata: { attributionAction: 'CITE', citations: [{ startIndex: 0, endIndex: 1, url: 'https://example.com' }] },
                    },
                },
            ]);
            const chunks = response.split(',{');
            await new Promise(resolve => setTimeout(resolve, 0));
            _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunks[0] + ',{' + chunks[1]);
            await new Promise(resolve => setTimeout(resolve, 0));
            callback({ statusCode: 200 });
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        const results = await getAllResults(provider);
        assert.deepStrictEqual(results, [
            {
                explanation: 'Chunk1\n' +
                    'Chunk2\n',
                metadata: {
                    rpcGlobalId: 123,
                    attributionMetadata: [
                        { attributionAction: _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.RecitationAction.BLOCK, citations: [] },
                        {
                            attributionAction: _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.RecitationAction.CITE,
                            citations: [{ startIndex: 0, endIndex: 1, url: 'https://example.com' }],
                        },
                    ],
                },
            },
        ]);
    });
    it('handles subsequent code chunks', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation')
            .callsFake(async (_, streamId, callback) => {
            const response = JSON.stringify([
                { textChunk: { text: 'hello ' } },
                { codeChunk: { code: 'brave ' } },
                { codeChunk: { code: 'new World()' } },
            ]);
            for (const chunk of response.split(',')) {
                await new Promise(resolve => setTimeout(resolve, 0));
                _host_js__WEBPACK_IMPORTED_MODULE_1__.ResourceLoader.streamWrite(streamId, chunk);
            }
            callback({ statusCode: 200 });
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        const results = (await getAllResults(provider)).map(r => r.explanation);
        assert.deepStrictEqual(results, ['hello ', 'hello \n`````\nbrave \n`````\n', 'hello \n`````\nbrave new World()\n`````\n']);
    });
    it('throws a readable error on 403', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsArgWith(2, {
            'statusCode': 403,
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        try {
            await getAllResults(provider);
            expect.fail('provider.fetch did not throw');
        }
        catch (err) {
            expect(err.message).equals('Server responded: permission denied');
        }
    });
    it('throws an error for other codes', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsArgWith(2, {
            'statusCode': 418,
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        try {
            await getAllResults(provider);
            expect.fail('provider.fetch did not throw');
        }
        catch (err) {
            expect(err.message).equals('Request failed: {"statusCode":418}');
        }
    });
    it('throws an error with all details for other failures', async () => {
        sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'doAidaConversation').callsArgWith(2, {
            'error': 'Cannot get OAuth credentials',
            'detail': '{\'@type\': \'type.googleapis.com/google.rpc.DebugInfo\', \'detail\': \'DETAILS\'}',
        });
        const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
        try {
            await getAllResults(provider);
            expect.fail('provider.fetch did not throw');
        }
        catch (err) {
            expect(err.message)
                .equals('Cannot send request: Cannot get OAuth credentials {\'@type\': \'type.googleapis.com/google.rpc.DebugInfo\', \'detail\': \'DETAILS\'}');
        }
    });
    describe('getAidaClientAvailability', () => {
        function mockGetSyncInformation(information) {
            sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'getSyncInformation').callsFake(cb => {
                cb(information);
            });
        }
        beforeEach(() => {
            sinon.restore();
        });
        it('should return NO_INTERNET when navigator is not online', async () => {
            const navigatorDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'navigator');
            Object.defineProperty(globalThis, 'navigator', {
                get() {
                    return { onLine: false };
                },
            });
            try {
                const result = await _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability();
                assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET);
            }
            finally {
                Object.defineProperty(globalThis, 'navigator', navigatorDescriptor);
            }
        });
        it('should return NO_ACCOUNT_EMAIL when the syncInfo doesn\'t contain accountEmail', async () => {
            mockGetSyncInformation({ accountEmail: undefined, isSyncActive: true });
            const result = await _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability();
            assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL);
        });
        it('should return NO_ACTIVE_SYNC when the syncInfo.isSyncActive is not true', async () => {
            mockGetSyncInformation({ accountEmail: 'some-email', isSyncActive: false });
            const result = await _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability();
            assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC);
        });
        it('should return AVAILABLE when navigator is online, accountEmail exists and isSyncActive is true', async () => {
            mockGetSyncInformation({ accountEmail: 'some-email', isSyncActive: true });
            const result = await _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability();
            assert.strictEqual(result, _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE);
        });
    });
    describe('registerClientEvent', () => {
        it('should populate the default value for Aida Client event', async () => {
            const stub = sinon.stub(_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'registerAidaClientEvent');
            const RPC_ID = 0;
            const provider = new _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient();
            void provider.registerClientEvent({
                corresponding_aida_rpc_global_id: RPC_ID,
                disable_user_content_logging: false,
                do_conversation_client_event: { user_feedback: { sentiment: "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */ } },
            });
            const arg = JSON.parse(stub.getCalls()[0].args[0]);
            sinon.assert.match(arg, sinon.match({
                client: _host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.CLIENT_NAME,
                event_time: sinon.match.string,
                corresponding_aida_rpc_global_id: RPC_ID,
                do_conversation_client_event: {
                    user_feedback: {
                        sentiment: 'POSITIVE',
                    },
                },
            }));
        });
    });
});
//# sourceMappingURL=AidaClient.test.js.map

/***/ })

}]);