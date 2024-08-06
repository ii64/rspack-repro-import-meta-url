"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_docs_performance_panel_network_request_tooltip_js"], {
"./ui/components/docs/performance_panel/network_request_tooltip.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../panels/timeline/components/components.js */ "./panels/timeline/components/components.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../testing/TraceLoader.js */ "./testing/TraceLoader.js");
/* harmony import */var _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/helpers.js */ "./ui/components/helpers/helpers.js");
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




await _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars();
await _helpers_helpers_js__WEBPACK_IMPORTED_MODULE_3__.ComponentServerSetup.setup();
function renderTooltips1() {
    return _renderTooltips1.apply(this, arguments);
}
function _renderTooltips1() {
    _renderTooltips1 = /**
 * Render tooltip for a basic network request
 **/ _async_to_generator(function() {
        var container, traceData, networkEvent, tooltip;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    container = document.querySelector('#container1');
                    if (!container) {
                        throw new Error('No container');
                    }
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(/* mocha context */ null, 'lcp-images.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    networkEvent = traceData.NetworkRequests.byTime[0];
                    tooltip = new _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequestTooltip.NetworkRequestTooltip();
                    tooltip.networkRequest = networkEvent;
                    container.appendChild(tooltip);
                    return [
                        2
                    ];
            }
        });
    });
    return _renderTooltips1.apply(this, arguments);
}
function renderTooltips2() {
    return _renderTooltips2.apply(this, arguments);
}
function _renderTooltips2() {
    _renderTooltips2 = /**
 * Render tooltip for a render-blocking network request
 **/ _async_to_generator(function() {
        var container, traceData, networkEvent, tooltip;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    container = document.querySelector('#container2');
                    if (!container) {
                        throw new Error('No container');
                    }
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(/* mocha context */ null, 'render-blocking-in-iframe.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    networkEvent = traceData.NetworkRequests.byTime[1];
                    tooltip = new _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequestTooltip.NetworkRequestTooltip();
                    tooltip.networkRequest = networkEvent;
                    container.appendChild(tooltip);
                    return [
                        2
                    ];
            }
        });
    });
    return _renderTooltips2.apply(this, arguments);
}
function renderTooltips3() {
    return _renderTooltips3.apply(this, arguments);
}
function _renderTooltips3() {
    _renderTooltips3 = /**
 * Render tooltip for a priority changed network request
 **/ _async_to_generator(function() {
        var container, traceData, networkEvent, tooltip;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    container = document.querySelector('#container3');
                    if (!container) {
                        throw new Error('No container');
                    }
                    return [
                        4,
                        _testing_TraceLoader_js__WEBPACK_IMPORTED_MODULE_2__.TraceLoader.traceEngine(/* mocha context */ null, 'changing-priority.json.gz')
                    ];
                case 1:
                    traceData = _state.sent().traceData;
                    networkEvent = traceData.NetworkRequests.byTime.find(function(request) {
                        return request.args.data.url === 'https://via.placeholder.com/3000.jpg';
                    });
                    if (!networkEvent) {
                        throw new Error('The priority change event is not found');
                    }
                    tooltip = new _panels_timeline_components_components_js__WEBPACK_IMPORTED_MODULE_0__.NetworkRequestTooltip.NetworkRequestTooltip();
                    tooltip.networkRequest = networkEvent;
                    container.appendChild(tooltip);
                    return [
                        2
                    ];
            }
        });
    });
    return _renderTooltips3.apply(this, arguments);
}
await renderTooltips1();
await renderTooltips2();
await renderTooltips3(); //# sourceMappingURL=network_request_tooltip.js.map

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

}),

}]);