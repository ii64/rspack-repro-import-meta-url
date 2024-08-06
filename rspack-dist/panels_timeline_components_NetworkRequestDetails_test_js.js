"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_components_NetworkRequestDetails_test_js"], {
"./panels/timeline/components/NetworkRequestDetails.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _timeline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/timeline/components/components.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__.describeWithMockConnection)('NetworkRequestDetails', function() {
    it('renders the right details for a network event from TraceEngine', /*#__PURE__*/ _async_to_generator(function() {
        var traceData, networkRequests, cssRequest, details, titleSwatch, rowData, durationInnerText;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_1__.TraceLoader.traceEngine(this, 'lcp-web-font.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    networkRequests = traceData.NetworkRequests.byTime;
                    cssRequest = networkRequests.find(function(request) {
                        return request.args.data.url === 'https://chromedevtools.github.io/performance-stories/lcp-web-font/app.css';
                    });
                    if (!cssRequest) {
                        throw new Error('Could not find expected network request.');
                    }
                    details = new _components_js__WEBPACK_IMPORTED_MODULE_4__.NetworkRequestDetails.NetworkRequestDetails(new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_2__.Linkifier.Linkifier());
                    return [
                        4,
                        details.setData(cssRequest, _timeline_js__WEBPACK_IMPORTED_MODULE_3__.TargetForEvent.targetForEvent(traceData, cssRequest))
                    ];
                case 2:
                    _state.sent();
                    if (!details.shadowRoot) {
                        throw new Error('Could not find expected element to test.');
                    }
                    titleSwatch = details.shadowRoot.querySelector('.network-request-details-title div');
                    // css request is in 'Css' category, which will use `--app-color-css: var(--ref-palette-purple60)` colour
                    assert.strictEqual(titleSwatch === null || titleSwatch === void 0 ? void 0 : titleSwatch.style.backgroundColor, 'rgb(191, 103, 255)');
                    rowData = getRowDataForDetailsElement(details.shadowRoot);
                    durationInnerText = '12.58 ms' + 'Queuing and connecting0' + 'Request sent and waiting0' + 'Content downloading8.29 ms' + 'Waiting on main thread4.29 ms';
                    assert.deepEqual(rowData, [
                        {
                            title: 'URL',
                            value: 'chromedevtools.github.io/performance-stories/lcp-web-font/app.css'
                        },
                        {
                            title: 'Request Method',
                            value: 'GET'
                        },
                        {
                            title: 'Initial Priority',
                            value: 'Highest'
                        },
                        {
                            title: 'Priority',
                            value: 'Highest'
                        },
                        {
                            title: 'Mime Type',
                            value: 'text/css'
                        },
                        {
                            title: 'Encoded Data',
                            value: ' (from cache)'
                        },
                        {
                            title: 'Decoded Body',
                            value: '96 B'
                        },
                        {
                            title: 'From cache',
                            value: 'Yes'
                        },
                        {
                            title: 'Duration',
                            value: durationInnerText
                        }
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
});
function getRowDataForDetailsElement(details) {
    return Array.from(details.querySelectorAll('.network-request-details-row')).map(function(row) {
        var _row_querySelector, _row_querySelector1;
        var title = (_row_querySelector = row.querySelector('.title')) === null || _row_querySelector === void 0 ? void 0 : _row_querySelector.innerText;
        // The innerText in here will contain a `\n` and a few space for each child <div> tag, so just remove these empty
        // characters for easier test.
        var regExpForLineBreakAndFollowingSpaces = /\n[\s]+/g;
        var value = (_row_querySelector1 = row.querySelector('.value')) === null || _row_querySelector1 === void 0 ? void 0 : _row_querySelector1.innerText.replaceAll(regExpForLineBreakAndFollowingSpaces, '');
        return {
            title: title,
            value: value
        };
    });
} //# sourceMappingURL=NetworkRequestDetails.test.js.map


}),

}]);