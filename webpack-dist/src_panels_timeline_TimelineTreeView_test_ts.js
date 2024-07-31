"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_timeline_TimelineTreeView_test_ts"],{

/***/ "./src/panels/timeline/TimelineTreeView.test.ts":
/*!******************************************************!*\
  !*** ./src/panels/timeline/TimelineTreeView.test.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/trace/trace.js */ "./src/models/trace/trace.ts");
/* harmony import */ var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./src/testing/EnvironmentHelpers.ts");
/* harmony import */ var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/TraceLoader.js */ "./src/testing/TraceLoader.ts");
/* harmony import */ var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timeline.js */ "./src/panels/timeline/timeline.ts");
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
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.describeWithEnvironment)('TimelineTreeView', function () {
    const mockViewDelegate = new MockViewDelegate();
    describe('EventsTimelineTreeView', function () {
        afterEach(() => {
            // One of the unit tests changes this, so ensure it gets set back after the test.
            _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineUIUtils.TimelineUIUtils.categories().scripting.hidden = false;
        });
        it('Creates a tree from nestable async events', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz');
            const eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
            const consoleTimings = [...traceData.UserTimings.consoleTimings];
            eventTreeView.setModelWithEvents(consoleTimings, traceData);
            const tree = eventTreeView.buildTree();
            const topNodesIterator = tree.children().values();
            const firstNode = topNodesIterator.next().value;
            assert.strictEqual(firstNode.event?.name, 'first console time');
            const secondNode = topNodesIterator.next().value;
            assert.strictEqual(secondNode.event?.name, 'third console time');
            const bottomNode = firstNode.children().values().next().value;
            assert.strictEqual(bottomNode.event?.name, 'second console time');
        });
        it('shows instant events as nodes', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
            const consoleTimings = [...traceData.UserTimings.performanceMarks];
            eventTreeView.setModelWithEvents(consoleTimings, traceData);
            const tree = eventTreeView.buildTree();
            const topNodesIterator = tree.children().values();
            const firstNode = topNodesIterator.next().value;
            assert.strictEqual(firstNode.event?.name, 'mark1');
            const secondNode = topNodesIterator.next().value;
            assert.strictEqual(secondNode.event?.name, 'mark3');
        });
        it('can filter events by text', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
            const consoleTimings = [...traceData.UserTimings.performanceMarks];
            eventTreeView.setModelWithEvents(consoleTimings, traceData);
            let tree = eventTreeView.buildTree();
            const topLevelChildren = Array.from(tree.children().values(), childNode => {
                return childNode.event?.name || 'NO_EVENT_FOR_NODE';
            });
            assert.deepEqual(topLevelChildren, ['mark1', 'mark3']);
            eventTreeView.textFilterUI?.setValue('mark1', true);
            tree = eventTreeView.buildTree();
            const newTopLevelChildren = Array.from(tree.children().values(), childNode => {
                return childNode.event?.name || 'NO_EVENT_FOR_NODE';
            });
            assert.deepEqual(newTopLevelChildren, ['mark1']);
        });
        it('can filter and hide entire categories', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'user-timings.json.gz');
            const eventTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.EventsTimelineTreeView.EventsTimelineTreeView(mockViewDelegate);
            const performanceTimingEvents = [...traceData.UserTimings.performanceMeasures];
            eventTreeView.setModelWithEvents(performanceTimingEvents, traceData);
            let tree = eventTreeView.buildTree();
            const topLevelChildren = Array.from(tree.children().values(), childNode => {
                return childNode.event?.name || 'NO_EVENT_FOR_NODE';
            });
            assert.deepEqual(topLevelChildren, ['first measure', 'third measure']);
            // Now make the scripting category hidden and tell the treeview to re-render.
            _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineUIUtils.TimelineUIUtils.categories().scripting.hidden = true;
            eventTreeView.refreshTree();
            tree = eventTreeView.buildTree();
            const newTopLevelChildren = Array.from(tree.children().values(), childNode => {
                return childNode.event?.name || 'NO_EVENT_FOR_NODE';
            });
            assert.deepEqual(newTopLevelChildren, []);
        });
    });
    describe('BottomUpTimelineTreeView', function () {
        it('Creates a bottom up tree from nestable events', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz');
            const bottomUpTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
            const consoleTimings = [...traceData.UserTimings.consoleTimings];
            const startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
            const endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
            bottomUpTreeView.setRange(startTime, endTime);
            bottomUpTreeView.setModelWithEvents(consoleTimings, traceData);
            const tree = bottomUpTreeView.buildTree();
            const topNodesIterator = tree.children().values();
            const firstNode = topNodesIterator.next().value;
            assert.strictEqual(firstNode.event?.name, 'second console time');
            const secondNode = topNodesIterator.next().value;
            assert.strictEqual(secondNode.event?.name, 'first console time');
            const thirdNode = topNodesIterator.next().value;
            assert.strictEqual(thirdNode.event?.name, 'third console time');
            const childNode = firstNode.children().values().next().value;
            assert.strictEqual(childNode.event?.name, 'first console time');
        });
    });
    describe('CallTreeTimelineTreeView', function () {
        it('Creates a call tree from nestable events', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz');
            const callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.CallTreeTimelineTreeView();
            const consoleTimings = [...traceData.UserTimings.consoleTimings];
            const startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
            const endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
            callTreeView.setRange(startTime, endTime);
            callTreeView.setModelWithEvents(consoleTimings, traceData);
            const tree = callTreeView.buildTree();
            const topNodesIterator = tree.children().values();
            const firstNode = topNodesIterator.next().value;
            assert.strictEqual(firstNode.event?.name, 'first console time');
            const secondNode = topNodesIterator.next().value;
            assert.strictEqual(secondNode.event?.name, 'third console time');
            const childNode = firstNode.children().values().next().value;
            assert.strictEqual(childNode.event?.name, 'second console time');
        });
    });
    describe('event grouping', function () {
        it('groups events by category in the Call Tree view', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz');
            const callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.CallTreeTimelineTreeView();
            const consoleTimings = [...traceData.UserTimings.consoleTimings];
            const startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
            const endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
            callTreeView.setRange(startTime, endTime);
            callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Category);
            callTreeView.setModelWithEvents(consoleTimings, traceData);
            const tree = callTreeView.buildTree();
            const treeEntries = tree.children().entries();
            const groupEntry = treeEntries.next();
            const nodeName = groupEntry.value[0];
            const node = groupEntry.value[1];
            assert.strictEqual(nodeName, 'scripting');
            assert.strictEqual(callTreeView.displayInfoForGroupNode(node).color, 'rgb(250 204 21 / 100%)');
            assert.isTrue(node.isGroupNode());
            const children = node.children().values();
            assert.strictEqual(children.next().value.event.name, 'first console time');
            assert.strictEqual(children.next().value.event.name, 'third console time');
        });
        it('groups events by category in the Bottom up Tree view', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'sync-like-timings.json.gz');
            const callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
            const consoleTimings = [...traceData.UserTimings.consoleTimings];
            const startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
            const endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
            callTreeView.setRange(startTime, endTime);
            callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Category);
            callTreeView.setModelWithEvents(consoleTimings, traceData);
            const tree = callTreeView.buildTree();
            const treeEntries = tree.children().entries();
            const groupEntry = treeEntries.next();
            const nodeName = groupEntry.value[0];
            const node = groupEntry.value[1];
            assert.strictEqual(nodeName, 'scripting');
            assert.strictEqual(callTreeView.displayInfoForGroupNode(node).color, 'rgb(250 204 21 / 100%)');
            assert.isTrue(node.isGroupNode());
            const children = node.children().values();
            assert.strictEqual(children.next().value.event.name, 'second console time');
            assert.strictEqual(children.next().value.event.name, 'first console time');
            assert.strictEqual(children.next().value.event.name, 'third console time');
        });
        it('can group entries by domain', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
            const startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
            const endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
            callTreeView.setRange(startTime, endTime);
            callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Domain);
            callTreeView.setModelWithEvents(traceData.Renderer.allTraceEntries, traceData);
            const tree = callTreeView.buildTree();
            const topLevelGroupNodes = Array.from(tree.children().entries());
            assert.deepEqual(topLevelGroupNodes.map(node => node[0]), [
                '',
                'web.dev',
                'extensions::',
                'chrome-extension://noondiphcddnnabmjcihcjfbhfklnnep',
                'imgix.net',
                'googletagmanager.com',
                'google-analytics.com',
                'web.app',
            ]);
        });
        it('can group entries by frame', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
            const startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
            const endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
            callTreeView.setRange(startTime, endTime);
            callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.Frame);
            callTreeView.setModelWithEvents(traceData.Renderer.allTraceEntries, traceData);
            const tree = callTreeView.buildTree();
            const topLevelGroupNodes = Array.from(tree.children().entries());
            assert.deepEqual(topLevelGroupNodes.map(node => node[0]), [
                '25D2F12F1818C70B5BD4325CC9ACD8FF',
                '1094B71EC09B8BD3DD48B77D091D6024',
            ]);
        });
        it('can group entries by URL', async function () {
            const { traceData } = await _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(this, 'web-dev-with-commit.json.gz');
            const callTreeView = new _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.BottomUpTimelineTreeView();
            const startTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.min);
            const endTime = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.Timing.microSecondsToMilliseconds(traceData.Meta.traceBounds.max);
            callTreeView.setRange(startTime, endTime);
            callTreeView.setGroupBySettingForTests(_timeline_js__WEBPACK_IMPORTED_MODULE_3__.TimelineTreeView.AggregatedTimelineTreeView.GroupBy.URL);
            callTreeView.setModelWithEvents(traceData.Renderer.allTraceEntries, traceData);
            const tree = callTreeView.buildTree();
            const topLevelGroupNodes = Array.from(tree.children().entries());
            assert.deepEqual(topLevelGroupNodes.map(node => node[0]), [
                '', // Represents "Unattributed" in the UI
                'https://web.dev/',
                'extensions::SafeBuiltins',
                'chrome-extension://noondiphcddnnabmjcihcjfbhfklnnep/content_script_compiled.js',
                'https://web-dev.imgix.net/image/kheDArv5csY6rvQUJDbWRscckLr1/4i7JstVZvgTFk9dxCe4a.svg',
                'https://web.dev/js/home.js?v=73b0d143',
                'https://web.dev/js/actions-f0eb5c8e.js',
                'https://web.dev/js/app.js?v=fedf5fbe',
                'https://web.dev/js/index-f45448ab.js',
                'https://web.dev/js/index-7e29abb6.js',
                'https://www.googletagmanager.com/gtm.js?id=GTM-MZWCJPP',
                'https://www.google-analytics.com/analytics.js',
                'https://www.googletagmanager.com/gtag/js?id=G-18JR3Q8PJ8&l=dataLayer&cx=c',
                'https://www.google-analytics.com/j/collect?v=1&_v=j101&a=68725886&t=event&ni=1&_s=1&dl=https%3A%2F%2Fweb.dev%2F&ul=en-gb&de=UTF-8&dt=web.dev&sd=24-bit&sr=3360x1890&vp=1665x846&je=0&ec=Web%20Vitals&ea=FCP&el=v3-1696581005645-6472407333688&ev=129&_u=QACAAEABAAAAACAAIg~&jid=&gjid=&cid=1874137241.1685438100&tid=UA-126406676-2&_gid=656288571.1696581004&_slc=1&gtm=45He3a40n81MZWCJPP&cd5=15&cd6=navigate&cd7=light&cd8=dom-content-loaded&cd9=8&z=54974500',
                'https://shared-storage-demo-content-producer.web.app/paa/scripts/private-aggregation-test.js',
                'https://shared-storage-demo-content-producer.web.app/paa/scripts/private-aggregation-test.html',
                'https://web-dev.imgix.net/image/SZHNhsfjU9RbCestTGZU6N7JEWs1/VwL892KEz6bakZMlq10D.png?auto=format&w=740',
            ]);
        });
    });
});


/***/ })

}]);