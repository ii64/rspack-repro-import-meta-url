"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_components_NetworkRequestDetails_test_ts"],{

/***/ "./src/panels/timeline/components/NetworkRequestDetails.test.ts":
/*!**********************************************************************!*\
  !*** ./src/panels/timeline/components/NetworkRequestDetails.test.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./src/testing/MockConnection.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline.js */ "./src/panels/timeline/timeline.ts");
/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./src/panels/timeline/components/components.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__.describeWithMockConnection)('NetworkRequestDetails', () => {
    it('renders the right details for a network event from TraceEngine', async function () {
        const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'lcp-web-font.json.gz');
        const networkRequests = traceData.NetworkRequests.byTime;
        const cssRequest = networkRequests.find(request => {
            return request.args.data.url === 'https://chromedevtools.github.io/performance-stories/lcp-web-font/app.css';
        });
        if (!cssRequest) {
            throw new Error('Could not find expected network request.');
        }
        const details = new _components_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequestDetails.NetworkRequestDetails(new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier());
        await details.setData(cssRequest, _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TargetForEvent.targetForEvent(traceData, cssRequest));
        if (!details.shadowRoot) {
            throw new Error('Could not find expected element to test.');
        }
        const titleSwatch = details.shadowRoot.querySelector('.network-request-details-title div');
        // css request is in 'Css' category, which will use `--app-color-css: var(--ref-palette-purple60)` colour
        assert.strictEqual(titleSwatch?.style.backgroundColor, 'rgb(191, 103, 255)');
        const rowData = getRowDataForDetailsElement(details.shadowRoot);
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
function getRowDataForDetailsElement(details) {
    return Array.from(details.querySelectorAll('.network-request-details-row')).map(row => {
        const title = row.querySelector('.title')?.innerText;
        // The innerText in here will contain a `\n` and a few space for each child <div> tag, so just remove these empty
        // characters for easier test.
        const regExpForLineBreakAndFollowingSpaces = /\n[\s]+/g;
        const value = row.querySelector('.value')?.innerText.replaceAll(regExpForLineBreakAndFollowingSpaces, '');
        return { title, value };
    });
}


/***/ })

}]);