"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["testing_TraceLoader_js"], {
"./testing/TraceLoader.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TraceLoader: function() { return TraceLoader; }
});
/* harmony import */var _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/trace/trace.js */ "./models/trace/trace.js");
/* harmony import */var _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../panels/timeline/timeline.js */ "./panels/timeline/timeline.js");
/* harmony import */var _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/trace_bounds/trace_bounds.js */ "./services/trace_bounds/trace_bounds.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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



// We maintain two caches:
// 1. The file contents JSON.parsed for a given trace file.
// 2. The trace engine models for a given file (used by the traceEngine function)
// Both the file contents and the model data are not expected to change during
// the lifetime of an instance of DevTools, so they are safe to cache and
// re-use across tests to avoid extra time spent loading and parsing the same
// inputs.
// In the future once the data layer migration is complete, we can hopefully
// simplify this into one method that loads the new engine and none of the old
// ones.
var fileContentsCache = new Map();
// The new engine cache is a map of maps of:
// trace file name => trace engine configuration => trace data
//
// The first map is a Map of string (which is the name of the trace file) to a
// new map, where the key is the trace engine configuration stringified.
// This ensures that we cache as much as we can, but if you load the same trace
// file with different trace engine configurations, we will not use the cache
// and will reparse. This is required as some of the settings and experiments
// change if events are kept and dropped.
var traceEngineCache = new Map();
/**
 * Loads trace files defined as fixtures in front_end/panels/timeline/fixtures/traces.
 *
 * Will automatically cache the results to save time processing the same trace
 * multiple times in a run of the test suite.
 **/ var TraceLoader = /*#__PURE__*/ function() {
    "use strict";
    function TraceLoader() {
        _class_call_check(this, TraceLoader);
    }
    _create_class(TraceLoader, null, [
        {
            key: "setTestTimeout",
            value: /**
     * Parsing some trace files easily takes up more than our default Mocha timeout
     * which is 2seconds. So for most tests that include parsing a trace, we have to
     * increase the timeout. We use this function to ensure we set a consistent
     * timeout across all trace model tests.
     * The context might be null when we only render a component example.
     **/ function setTestTimeout(context) {
                if (!context || context.timeout() >= 10000) {
                    return;
                }
                context === null || context === void 0 ? void 0 : context.timeout(10000);
            }
        },
        {
            key: "fixtureContents",
            value: /**
     * Loads a trace file into memory and returns its contents after
     * JSON.parse-ing them
     *
     **/ function fixtureContents(context, name) {
                return _async_to_generator(function() {
                    var cached, urlForTest, urlForComponentExample, contents, contents1;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                TraceLoader.setTestTimeout(context);
                                cached = fileContentsCache.get(name);
                                if (cached) {
                                    return [
                                        2,
                                        cached
                                    ];
                                }
                                // Required URLs differ across the component server and the unit tests, so try both.
                                urlForTest = new URL("../front_end/panels/timeline/fixtures/traces/".concat(name), window.location.origin);
                                urlForComponentExample = new URL("../front_end/panels/timeline/fixtures/traces/".concat(name), window.location.origin);
                                if (!(window.location.pathname.includes('ui/components/docs') || window.location.pathname.includes('ui\\components\\docs'))) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    loadTraceFileFromURL(urlForComponentExample)
                                ];
                            case 1:
                                contents = _state.sent();
                                fileContentsCache.set(name, contents);
                                return [
                                    2,
                                    contents
                                ];
                            case 2:
                                return [
                                    4,
                                    loadTraceFileFromURL(urlForTest)
                                ];
                            case 3:
                                contents1 = _state.sent();
                                fileContentsCache.set(name, contents1);
                                return [
                                    2,
                                    contents1
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "rawEvents",
            value: /**
     * Load an array of raw events from the trace file.
     * Will default to typing those events using the types from TraceEngine, but
     * can be overriden by passing the legacy EventPayload type as the generic.
     **/ function rawEvents(context, name) {
                return _async_to_generator(function() {
                    var contents, events;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    TraceLoader.fixtureContents(context, name)
                                ];
                            case 1:
                                contents = _state.sent();
                                events = 'traceEvents' in contents ? contents.traceEvents : contents;
                                _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.SyntheticEvents.SyntheticEventsManager.initAndActivate(events);
                                return [
                                    2,
                                    events
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "rawCPUProfile",
            value: /**
     * Load an array of raw events from the trace file.
     * Will default to typing those events using the types from TraceEngine, but
     * can be overriden by passing the legacy EventPayload type as the generic.
     **/ function rawCPUProfile(context, name) {
                return _async_to_generator(function() {
                    var contents;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    TraceLoader.fixtureContents(context, name)
                                ];
                            case 1:
                                contents = _state.sent();
                                return [
                                    2,
                                    contents
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "traceEngine",
            value: /**
     * Executes only the new trace engine on the fixture and returns the resulting parsed data.
     *
     * @param context The Mocha test context. |allModelsFromFile| function easily
     * takes up more than our default Mocha timeout, which is 2s. So we have to
     * increase this test's timeout. It might be null when we only render a
     * component example.
     *
     * @param file The name of the trace file to be loaded.
     * The trace file should be in ../panels/timeline/fixtures/traces folder.
     *
     * @param options Additional trace options.
     * @param options.initTraceBounds (defaults to `true`) after the trace is
     * loaded, the TraceBounds manager will automatically be initialised using
     * the bounds from the trace.
     *
     * @param config The config the new trace engine should run with. Optional,
     * will fall back to the Default config if not provided.
     */ function traceEngine(context, name) {
                var config = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Configuration.defaults();
                return _async_to_generator(function() {
                    var _traceEngineCache_get, configCacheKey, fromCache, rawEvents, fileContents, traceEngineData, cacheByName;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                // Force the TraceBounds to be reset to empty. This ensures that in
                                // tests where we are using the new engine data we don't accidentally
                                // rely on the fact that a previous test has set the BoundsManager.
                                _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance({
                                    forceNew: true
                                });
                                configCacheKey = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Types.Configuration.configToCacheKey(config);
                                fromCache = (_traceEngineCache_get = traceEngineCache.get(name)) === null || _traceEngineCache_get === void 0 ? void 0 : _traceEngineCache_get.get(configCacheKey);
                                if (fromCache) {
                                    TraceLoader.initTraceBoundsManager(fromCache.traceData);
                                    _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.initAndActivateModificationsManager(fromCache.model, 0);
                                    // This init step is usually done in model.parse(), but as we loaded from
                                    // the cache here, we manually run it.
                                    // The SyntheticEventsManager caches instances based on the rawEvents()
                                    // array, so we can safely do this even if we have already created an
                                    // instance for this trace before - the old one will be re-used, rather
                                    // than creating a new one.
                                    rawEvents = fromCache.model.rawTraceEvents();
                                    if (rawEvents) {
                                        _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.Helpers.SyntheticEvents.SyntheticEventsManager.initAndActivate(rawEvents);
                                    }
                                    return [
                                        2,
                                        {
                                            traceData: fromCache.traceData,
                                            insights: fromCache.insights
                                        }
                                    ];
                                }
                                return [
                                    4,
                                    TraceLoader.fixtureContents(context, name)
                                ];
                            case 1:
                                fileContents = _state.sent();
                                return [
                                    4,
                                    TraceLoader.executeTraceEngineOnFileContents(fileContents, /* emulate fresh recording */ false, config)
                                ];
                            case 2:
                                traceEngineData = _state.sent();
                                cacheByName = traceEngineCache.get(name) || new Map();
                                cacheByName.set(configCacheKey, traceEngineData);
                                traceEngineCache.set(name, cacheByName);
                                TraceLoader.initTraceBoundsManager(traceEngineData.traceData);
                                _panels_timeline_timeline_js__WEBPACK_IMPORTED_MODULE_1__.ModificationsManager.ModificationsManager.initAndActivateModificationsManager(traceEngineData.model, 0);
                                return [
                                    2,
                                    {
                                        traceData: traceEngineData.traceData,
                                        insights: traceEngineData.insights
                                    }
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "initTraceBoundsManager",
            value: /**
     * Initialise the BoundsManager with the bounds from a trace.
     * This isn't always required, but some of our code - particularly at the UI
     * level - rely on this being set. This is always set in the actual panel, but
     * parsing a trace in a test does not automatically set it.
     **/ function initTraceBoundsManager(data) {
                _services_trace_bounds_trace_bounds_js__WEBPACK_IMPORTED_MODULE_2__.TraceBounds.BoundsManager.instance({
                    forceNew: true
                }).resetWithNewBounds(data.Meta.traceBounds);
            }
        },
        {
            key: "executeTraceEngineOnFileContents",
            value: function executeTraceEngineOnFileContents(contents) {
                var emulateFreshRecording = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, traceEngineConfig = arguments.length > 2 ? arguments[2] : void 0;
                return _async_to_generator(function() {
                    var events, metadata;
                    return _ts_generator(this, function(_state) {
                        events = 'traceEvents' in contents ? contents.traceEvents : contents;
                        metadata = 'metadata' in contents ? contents.metadata : {};
                        return [
                            2,
                            new Promise(function(resolve, reject) {
                                var model = _models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.TraceModel.Model.createWithAllHandlers(traceEngineConfig);
                                model.addEventListener(_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.TraceModel.ModelUpdateEvent.eventName, function(event) {
                                    var data = event.data;
                                    // When we receive the final update from the model, update the recording
                                    // state back to waiting.
                                    if (_models_trace_trace_js__WEBPACK_IMPORTED_MODULE_0__.TraceModel.isModelUpdateDataComplete(data)) {
                                        var metadata = model.metadata(0);
                                        var traceData = model.traceParsedData(0);
                                        var insights = model.traceInsights(0);
                                        if (metadata && traceData) {
                                            resolve({
                                                model: model,
                                                metadata: metadata,
                                                traceData: traceData,
                                                insights: insights
                                            });
                                        } else {
                                            reject(new Error('Unable to load trace'));
                                        }
                                    }
                                });
                                void model.parse(events, {
                                    metadata: metadata,
                                    isFreshRecording: emulateFreshRecording
                                }).catch(function(e) {
                                    return console.error(e);
                                });
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return TraceLoader;
}();
function loadTraceFileFromURL(url) {
    return _loadTraceFileFromURL.apply(this, arguments);
}
function _loadTraceFileFromURL() {
    _loadTraceFileFromURL = // Below this point are private methods used in the TraceLoader class. These
    // are purposefully not exported, you should use one of the static methods
    // defined above.
    _async_to_generator(function(url) {
        var response, contentType, isGzipEncoded, buffer, decoder, contents;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        fetch(url)
                    ];
                case 1:
                    response = _state.sent();
                    if (response.status !== 200) {
                        throw new Error("Unable to load ".concat(url));
                    }
                    contentType = response.headers.get('content-type');
                    isGzipEncoded = contentType !== null && contentType.includes('gzip');
                    return [
                        4,
                        response.arrayBuffer()
                    ];
                case 2:
                    buffer = _state.sent();
                    if (!isGzipEncoded) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        decodeGzipBuffer(buffer)
                    ];
                case 3:
                    buffer = _state.sent();
                    _state.label = 4;
                case 4:
                    decoder = new TextDecoder('utf-8');
                    contents = JSON.parse(decoder.decode(buffer));
                    return [
                        2,
                        contents
                    ];
            }
        });
    });
    return _loadTraceFileFromURL.apply(this, arguments);
}
function codec(buffer, codecStream) {
    var _ref = new TransformStream(), readable = _ref.readable, writable = _ref.writable;
    var codecReadable = readable.pipeThrough(codecStream);
    var writer = writable.getWriter();
    void writer.write(buffer);
    void writer.close();
    // Wrap in a response for convenience.
    var response = new Response(codecReadable);
    return response.arrayBuffer();
}
function decodeGzipBuffer(buffer) {
    return codec(buffer, new DecompressionStream('gzip'));
} //# sourceMappingURL=TraceLoader.js.map


}),

}]);