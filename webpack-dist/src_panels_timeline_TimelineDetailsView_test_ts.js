"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_TimelineDetailsView_test_ts"],{

/***/ "./src/panels/timeline/TimelineDetailsView.test.ts":
/*!*********************************************************!*\
  !*** ./src/panels/timeline/TimelineDetailsView.test.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



class MockViewDelegate {
    constructor() {
        Object.defineProperty(this, "element", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: document.createElement('div')
        });
    }
    select(_selection) {
    }
    selectEntryAtTime(_events, _time) {
    }
    highlightEvent(_event) {
    }
}
function getRowDataForNetworkDetailsElement(details) {
    return Array.from(details.querySelectorAll('.network-request-details-row')).map(row => {
        const title = row.querySelector('.title')?.innerText;
        // The innerText in here will contain a `\n` and a few space for each child <div> tag, so just remove these empty
        // characters for easier test.
        const regExpForLineBreakAndFollowingSpaces = /\n[\s]+/g;
        const value = row.querySelector('.value')?.innerText.replaceAll(regExpForLineBreakAndFollowingSpaces, '');
        return { title, value };
    });
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('TimelineDetailsView', function () {
    const mockViewDelegate = new MockViewDelegate();
    it('displays the details of a network request event correctly', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'lcp-web-font.json.gz');
        const detailsView = new _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineDetailsView.TimelineDetailsView(mockViewDelegate);
        const networkRequests = traceData.NetworkRequests.byTime;
        const cssRequest = networkRequests.find(request => {
            return request.args.data.url === 'https://chromedevtools.github.io/performance-stories/lcp-web-font/app.css';
        });
        if (!cssRequest) {
            throw new Error('Could not find expected network request.');
        }
        const selection = _timeline_js__WEBPACK_IMPORTED_MODULE_2__.TimelineSelection.TimelineSelection.fromTraceEvent(cssRequest);
        await detailsView.setModel(traceData, null);
        await detailsView.setSelection(selection);
        const detailsContentElement = detailsView.getDetailsContentElementForTest();
        assert.strictEqual(detailsContentElement.childNodes.length, 1);
        const detailsElementShadowRoot = detailsContentElement.childNodes[0].shadowRoot;
        if (!detailsElementShadowRoot) {
            throw new Error('Could not find expected element to test.');
        }
        const rowData = getRowDataForNetworkDetailsElement(detailsElementShadowRoot);
        const durationInnerText = '12.58 ms' +
            'Queuing and connecting0' +
            'Request sent and waiting0' +
            'Content downloading8.29 ms' +
            'Waiting on main thread4.29 ms';
        assert.deepEqual(rowData, [
            { title: 'URL', value: 'chromedevtools.github.io/performance-stories/lcp-web-font/app.css' },
            { title: 'Request Method', value: 'GET' },
            { title: 'Initial Priority', value: 'Highest' },
            { title: 'Priority', value: 'Highest' },
            { title: 'Mime Type', value: 'text/css' },
            { title: 'Encoded Data', value: ' (from cache)' },
            { title: 'Decoded Body', value: '96 B' },
            { title: 'From cache', value: 'Yes' },
            { title: 'Duration', value: durationInnerText },
        ]);
    });
});


/***/ })

}]);