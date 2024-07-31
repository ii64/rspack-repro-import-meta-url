"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_models_trace_handlers_NetworkRequestsHandler_test_ts"],{

/***/ "./src/models/trace/handlers/NetworkRequestsHandler.test.ts":
/*!******************************************************************!*\
  !*** ./src/models/trace/handlers/NetworkRequestsHandler.test.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _trace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trace.js */ "./src/models/trace/trace.ts");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


describe('NetworkRequestsHandler', function () {
    describe('error handling', () => {
        it('throws if handleEvent is called before it is initialized', () => {
            assert.throws(() => {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent({});
            }, 'Network Request handler is not initialized');
        });
        it('throws if finalize is called before initialize', async () => {
            let thrown = null;
            try {
                await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            }
            catch (e) {
                thrown = e;
            }
            assert.strictEqual(thrown?.message, 'Network Request handler is not initialized');
        });
    });
    describe('network requests calculations', () => {
        beforeEach(() => {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('calculates network requests correctly', async function () {
            const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'load-simple.json.gz');
            for (const event of traceEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            const requestsByOrigin = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data().byOrigin;
            assert.strictEqual(requestsByOrigin.size, 3, 'Too many origins detected');
            const topLevelRequests = requestsByOrigin.get('localhost:8080') || { all: [] };
            assert.strictEqual(topLevelRequests.all.length, 4, 'Incorrect number of requests');
            // Page Request.
            const pageRequestExpected = new Map([
                ['queueing', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(25085)],
                ['stalled', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(5670)],
                ['dnsLookup', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(105)],
                ['initialConnection', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(498)],
                ['ssl', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['requestSent', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(363)],
                ['waiting', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1383)],
                ['download', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(4827)],
                ['networkDuration', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(38503)],
            ]);
            assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/', pageRequestExpected);
            // CSS Request.
            const cssRequestExpected = new Map([
                ['queueing', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['stalled', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(2175)],
                ['dnsLookup', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['initialConnection', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['ssl', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['requestSent', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['waiting', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['download', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1294)],
                ['networkDuration', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
            ]);
            const cssRequestBlockingStatusExpected = new Map([
                ['renderBlocking', 'blocking'],
            ]);
            assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/styles.css', cssRequestExpected);
            assertDataArgsStats(topLevelRequests.all, 'http://localhost:8080/styles.css', cssRequestBlockingStatusExpected);
            // Blocking JS Request.
            const blockingJSRequestExpected = new Map([
                ['queueing', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['stalled', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(2126)],
                ['dnsLookup', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['initialConnection', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['ssl', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['requestSent', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['waiting', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['download', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1207)],
                ['networkDuration', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
            ]);
            const blockingJSBlockingStatusExpected = new Map([
                ['renderBlocking', 'in_body_parser_blocking'],
            ]);
            assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/blocking.js', blockingJSRequestExpected);
            assertDataArgsStats(topLevelRequests.all, 'http://localhost:8080/blocking.js', blockingJSBlockingStatusExpected);
            // Module JS Request (cached).
            const moduleRequestExpected = new Map([
                ['queueing', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['stalled', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(76865)],
                ['dnsLookup', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['initialConnection', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['ssl', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['requestSent', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['waiting', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['download', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(27839)],
                ['networkDuration', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
            ]);
            const moduleRequestBlockingStatusExpected = new Map([
                ['renderBlocking', 'non_blocking'],
            ]);
            assertDataArgsProcessedDataStats(topLevelRequests.all, 'http://localhost:8080/module.js', moduleRequestExpected);
            assertDataArgsStats(topLevelRequests.all, 'http://localhost:8080/module.js', moduleRequestBlockingStatusExpected);
            // Google Fonts CSS Request (cached).
            const fontCSSRequests = requestsByOrigin.get('fonts.googleapis.com') || { all: [] };
            assert.strictEqual(fontCSSRequests.all.length, 1, 'Incorrect number of requests');
            const fontCSSRequestExpected = new Map([
                ['queueing', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['stalled', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(3178)],
                ['dnsLookup', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['initialConnection', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['ssl', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['requestSent', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['waiting', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['download', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1203)],
                ['networkDuration', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
            ]);
            const fontCSSBlockingStatusExpected = new Map([
                ['renderBlocking', 'blocking'],
            ]);
            assertDataArgsProcessedDataStats(fontCSSRequests.all, 'https://fonts.googleapis.com/css2?family=Orelega+One&display=swap', fontCSSRequestExpected);
            assertDataArgsStats(fontCSSRequests.all, 'https://fonts.googleapis.com/css2?family=Orelega+One&display=swap', fontCSSBlockingStatusExpected);
            // Google Fonts Data Request (cached).
            const fontDataRequests = requestsByOrigin.get('fonts.gstatic.com') || { all: [] };
            assert.strictEqual(fontDataRequests.all.length, 1, 'Incorrect number of requests');
            const fontDataRequestExpected = new Map([
                ['queueing', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['stalled', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1929)],
                ['dnsLookup', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['initialConnection', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['ssl', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['requestSent', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['waiting', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
                ['download', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(962)],
                ['networkDuration', _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(0)],
            ]);
            const fontDataRequestBlockingStatusExpected = new Map([
                ['renderBlocking', 'non_blocking'],
            ]);
            assertDataArgsProcessedDataStats(fontDataRequests.all, 'https://fonts.gstatic.com/s/orelegaone/v1/3qTpojOggD2XtAdFb-QXZFt93kY.woff2', fontDataRequestExpected);
            assertDataArgsStats(fontDataRequests.all, 'https://fonts.gstatic.com/s/orelegaone/v1/3qTpojOggD2XtAdFb-QXZFt93kY.woff2', fontDataRequestBlockingStatusExpected);
        });
        it('calculates Websocket events correctly', async function () {
            const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'network-websocket-messages.json.gz');
            for (const event of traceEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            const webSocketEvents = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data().webSocket;
            assert.strictEqual(webSocketEvents[0].events.length, 9, 'Incorrect number of events');
        });
    });
    describe('parses the change priority request', () => {
        beforeEach(() => {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('changes priority of the resouce', async function () {
            const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'changing-priority.json.gz');
            for (const event of traceEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            const { byTime } = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data();
            const imageRequest = byTime.find(request => {
                return request.args.data.url === 'https://via.placeholder.com/3000.jpg';
            });
            if (!imageRequest) {
                throw new Error('Could not find expected network request.');
            }
            assert.strictEqual(imageRequest.args.data.priority, 'High');
            assert.strictEqual(imageRequest.args.data.initialPriority, 'Medium');
        });
    });
    describe('redirects', () => {
        beforeEach(() => {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('calculates redirects correctly (navigations)', async function () {
            const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'redirects.json.gz');
            for (const event of traceEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            const { byTime } = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data();
            assert.strictEqual(byTime.length, 2, 'Incorrect number of requests');
            assert.strictEqual(byTime[0].args.data.redirects.length, 0, 'Incorrect number of redirects (request 0)');
            assert.deepStrictEqual(byTime[1].args.data.redirects, [
                {
                    url: 'http://localhost:3000/foo',
                    priority: 'VeryHigh',
                    requestMethod: 'GET',
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1311223447642),
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(7845),
                },
                {
                    url: 'http://localhost:3000/bar',
                    priority: 'VeryHigh',
                    requestMethod: 'GET',
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(1311223455487),
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(3771),
                },
            ], 'Incorrect number of redirects (request 1)');
        });
        it('calculates redirects correctly (subresources)', async function () {
            const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'redirects-subresource-multiple.json.gz');
            for (const event of traceEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            const { byTime } = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data();
            assert.strictEqual(byTime.length, 2, 'Incorrect number of requests');
            assert.strictEqual(byTime[0].args.data.redirects.length, 0, 'Incorrect number of redirects (request 0)');
            assert.deepStrictEqual(byTime[1].args.data.redirects, [
                {
                    url: 'http://localhost:3000/foo.js',
                    priority: 'Low',
                    requestMethod: 'GET',
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(183611568786),
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(506233),
                },
                {
                    url: 'http://localhost:3000/bar.js',
                    priority: 'Low',
                    requestMethod: 'GET',
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(183612075019),
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_1__.Types.Timing.MicroSeconds(802726),
                },
            ], 'Incorrect number of redirects (request 1)');
        });
    });
    describe('initiators', () => {
        beforeEach(() => {
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.reset();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.initialize();
            _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.initialize();
        });
        it('calculate the initiator by `initiator` field correctly', async function () {
            const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'network-requests-initiators.json.gz');
            for (const event of traceEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            const { eventToInitiator, byTime } = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data();
            // Find the network request to test, it is initiated by `youtube.com`.
            const event = byTime.find(event => event.ts === 1491680762420);
            if (!event) {
                throw new Error('Could not find the network request.');
            }
            assert.strictEqual(event.args.data.url, 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=YouTube+Sans:wght@300..900&display=swap');
            const initiator = eventToInitiator.get(event);
            if (!initiator) {
                throw new Error('Did not find expected initiator for the network request');
            }
            assert.strictEqual(initiator.args.data.url, 'https://www.youtube.com/');
            assert.strictEqual(initiator.args.data.url, event.args.data.initiator?.url);
        });
        it('calculate the initiator by top frame correctly', async function () {
            const traceEvents = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_0__.TraceLoader.rawEvents(this, 'network-requests-initiators.json.gz');
            for (const event of traceEvents) {
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.handleEvent(event);
                _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.handleEvent(event);
            }
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.Meta.finalize();
            await _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.finalize();
            const { eventToInitiator, byTime } = _trace_js__WEBPACK_IMPORTED_MODULE_1__.Handlers.ModelHandlers.NetworkRequests.data();
            // Find the network request to test, it is initiated by `                `.
            const event = byTime.find(event => event.ts === 1491681999060);
            if (!event) {
                throw new Error('Could not find the network request.');
            }
            assert.strictEqual(event.args.data.url, 'https://www.youtube.com/s/player/5b22937f/player_ias.vflset/en_US/base.js');
            const initiator = eventToInitiator.get(event);
            if (!initiator) {
                throw new Error('Did not find expected initiator for the network request');
            }
            assert.strictEqual(initiator.args.data.url, 'https://www.youtube.com/s/desktop/28bb7000/jsbin/desktop_polymer.vflset/desktop_polymer.js');
            assert.isUndefined(event.args.data.initiator?.url);
            assert.strictEqual(initiator.args.data.url, event.args.data.stackTrace?.[0].url);
        });
    });
});
function assertDataArgsStats(requests, url, stats) {
    const request = requests.find(request => request.args.data.url === url);
    if (!request) {
        assert.fail(`Unable to find request for URL ${url}`);
        return;
    }
    for (const [name, value] of stats.entries()) {
        if (typeof request.args.data[name] === 'number') {
            const expectedValue = value;
            const actualValueRounded = Number(request.args.data[name].toPrecision(5));
            assert.strictEqual(actualValueRounded, expectedValue, url);
        }
        else {
            assert.strictEqual(request.args.data[name], value, url);
        }
    }
}
function assertDataArgsProcessedDataStats(requests, url, stats) {
    const request = requests.find(request => request.args.data.url === url);
    if (!request) {
        assert.fail(`Unable to find request for URL ${url}`);
        return;
    }
    for (const [name, value] of stats.entries()) {
        if (typeof request.args.data.syntheticData[name] === 'number') {
            const expectedValue = value;
            const actualValueRounded = Number(request.args.data.syntheticData[name].toPrecision(5));
            assert.strictEqual(actualValueRounded, expectedValue, url);
        }
        else {
            assert.strictEqual(request.args.data.syntheticData[name], value, url);
        }
    }
}


/***/ })

}]);