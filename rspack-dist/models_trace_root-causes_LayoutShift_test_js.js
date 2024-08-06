"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_root-causes_LayoutShift_test_js"], {
"./models/trace/root-causes/LayoutShift.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/TraceHelpers.js */ "./testing/TraceHelpers.js");
/* harmony import */var _trace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trace.js */ "./models/trace/trace.js");
/* harmony import */var _RootCauses_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RootCauses.js */ "./models/trace/root-causes/RootCauses.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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




function assertArrayHasNoNulls(inputArray) {
    inputArray.forEach(function(item, index) {
        if (item === null) {
            assert.fail("Found null at array index ".concat(index));
        }
    });
}
function createMockStyle(cssProperties) {
    return {
        cssProperties: cssProperties,
        shorthandEntries: []
    };
}
function createMockMatchedRules(cssProperties) {
    return [
        {
            rule: {
                style: createMockStyle(cssProperties),
                selectorList: {
                    selectors: [],
                    text: ''
                },
                origin: "regular" /* Protocol.CSS.StyleSheetOrigin.Regular */ 
            },
            matchingSelectors: []
        }
    ];
}
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_0__.describeWithMockConnection)('LayoutShift root causes', function() {
    /*
       * This test has to do a lot of mocking and creating of fake data in order
       * to function. Normally in the perfomance panel tests we prefer to parse a
       * real trace and use that, but in this case because LayoutShift root causes
       * rely on having an actual DevTools instance open with access to the DOM,
       * we can't do that. So therefore we completely mock the set of data
       * required.
       */ describe('assigns root causes to layout shifts', function() {
        var layoutShifts;
        var prePaintEvents;
        var resizeEvents;
        var injectedIframeEvents;
        var fontChanges;
        var unknownLayoutInvalidation;
        var domNodeByBackendIdMap;
        var model;
        var modelMut;
        var resizeEventsNodeIds;
        var iframesNodeIds;
        var shifts;
        var matchedStylesMock;
        var protocolInterface;
        var computedStylesMock;
        var fontFaceMock;
        var fontSource = 'mock-source.woff';
        var renderBlockSource = 'mock-source.css';
        beforeEach(function() {
            fontFaceMock = {
                fontFamily: 'Roboto',
                src: fontSource,
                fontDisplay: 'swap'
            };
            // Layout shifts for which we want to extract potential root causes.
            shifts = [
                {
                    ts: 10
                },
                {
                    ts: 30
                },
                {
                    ts: 50
                },
                {
                    ts: 70
                },
                {
                    ts: 90
                }
            ];
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                // Initialize the shifts.
                for(var _iterator = shifts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var shift = _step.value;
                    shift.args = {
                        frame: 'frame-id-123'
                    };
                    shift.name = 'LayoutShift';
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
            var clusters = [
                {
                    events: shifts
                }
            ];
            // PrePaint events to which each layout shift belongs.
            prePaintEvents = [
                {
                    ts: 5,
                    dur: 30
                },
                {
                    ts: 45,
                    dur: 30
                },
                {
                    ts: 85,
                    dur: 10
                }
            ];
            resizeEvents = [
                {
                    ts: 0
                },
                {
                    ts: 25
                },
                {
                    ts: 80
                },
                {
                    ts: 100
                }
            ];
            injectedIframeEvents = [
                {
                    ts: 2
                },
                {
                    ts: 81
                }
            ];
            fontChanges = [
                {
                    ts: 3
                },
                {
                    ts: 35
                }
            ];
            unknownLayoutInvalidation = [
                {
                    ts: 4
                },
                {
                    ts: 36
                }
            ];
            // |Resize|---|Iframe|---|Fonts-|---|--PrePaint 1--|----|Resize|---|Fonts-|-|---PrePaint 2---|---|Resize|---|Iframe|---|PrePaint 3|
            // ----------------------------------|LS 1|-|LS 2|----------------------------|LS 3|-|LS 4|-----------------------------|LS 5|
            // Initialize the LI events by adding a nodeId and setting a reason so that they
            // aren't filtered out.
            for(var i = 0; i < resizeEvents.length; i++){
                resizeEvents[i].args = {
                    data: {
                        nodeId: i + 1,
                        reason: "Size changed" /* TraceEngine.Types.TraceEvents.LayoutInvalidationReason.SIZE_CHANGED */ ,
                        nodeName: 'IMG',
                        frame: 'frame-id-123'
                    }
                };
            }
            for(var i1 = 0; i1 < injectedIframeEvents.length; i1++){
                injectedIframeEvents[i1].args = {
                    data: {
                        nodeId: i1 + 11,
                        reason: "Added to layout" /* TraceEngine.Types.TraceEvents.LayoutInvalidationReason.ADDED_TO_LAYOUT */ ,
                        nodeName: 'IFRAME',
                        frame: 'frame-id-123'
                    }
                };
            }
            for(var i2 = 0; i2 < fontChanges.length; i2++){
                fontChanges[i2].args = {
                    data: {
                        nodeId: i2 + 21,
                        reason: "Fonts changed" /* TraceEngine.Types.TraceEvents.LayoutInvalidationReason.FONTS_CHANGED */ ,
                        nodeName: 'DIV',
                        frame: 'frame-id-123'
                    }
                };
            }
            for(var i3 = 0; i3 < unknownLayoutInvalidation.length; i3++){
                unknownLayoutInvalidation[i3].args = {
                    data: {
                        nodeId: i3 + 31,
                        reason: "Unknown" /* TraceEngine.Types.TraceEvents.LayoutInvalidationReason.UNKNOWN */ ,
                        nodeName: 'DIV',
                        frame: 'frame-id-123'
                    }
                };
            }
            var layoutInvalidationEvents = _to_consumable_array(resizeEvents).concat(_to_consumable_array(injectedIframeEvents), _to_consumable_array(fontChanges), _to_consumable_array(unknownLayoutInvalidation)).sort(function(a, b) {
                return a.ts - b.ts;
            });
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = layoutInvalidationEvents[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var e = _step1.value;
                    e.name = "LayoutInvalidationTracking" /* TraceEngine.Types.TraceEvents.KnownEventName.LayoutInvalidationTracking */ ;
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            // Map from fake BackendNodeId to fake Protocol.DOM.Node used by the handler to
            // resolve the nodeIds in the traces.
            var domNodeByBackendIdMapEntries = [];
            var domNodeByIdMap = new Map();
            for(var i4 = 0; i4 < layoutInvalidationEvents.length; i4++){
                var backendNodeId = layoutInvalidationEvents[i4].args.data.nodeId;
                var nodeId = i4;
                var nodeName = layoutInvalidationEvents[i4].args.data.nodeName || 'DIV';
                var fakeNode = {
                    backendNodeId: backendNodeId,
                    nodeId: nodeId,
                    localName: nodeName.toLowerCase(),
                    nodeName: nodeName,
                    attributes: [],
                    nodeType: Node.ELEMENT_NODE
                };
                domNodeByBackendIdMapEntries.push([
                    backendNodeId,
                    fakeNode
                ]);
                domNodeByIdMap.set(nodeId, fakeNode);
            }
            domNodeByBackendIdMap = new Map(domNodeByBackendIdMapEntries);
            model = (0,_testing_TraceHelpers_js__WEBPACK_IMPORTED_MODULE_1__.getBaseTraceParseModelData)();
            modelMut = model;
            // Now fake out the relevant LayoutShift data
            modelMut.LayoutShifts.prePaintEvents = prePaintEvents;
            modelMut.LayoutShifts.layoutInvalidationEvents = layoutInvalidationEvents;
            modelMut.LayoutShifts.backendNodeIds = _to_consumable_array(domNodeByBackendIdMap.keys());
            modelMut.LayoutShifts.clusters = clusters;
            modelMut.LayoutShifts.scheduleStyleInvalidationEvents = [];
            modelMut.Initiators = {
                eventToInitiator: new Map(),
                initiatorToEvents: new Map()
            };
            resizeEventsNodeIds = resizeEvents.map(function(li) {
                return Number(li.args.data.nodeId);
            });
            iframesNodeIds = injectedIframeEvents.map(function(li) {
                return Number(li.args.data.nodeId);
            });
            computedStylesMock = [];
            matchedStylesMock = {};
            protocolInterface = {
                getInitiatorForRequest: function getInitiatorForRequest(_) {
                    return null;
                },
                pushNodesByBackendIdsToFrontend: function pushNodesByBackendIdsToFrontend(backendNodeIds) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                backendNodeIds.map(function(id) {
                                    var node = domNodeByBackendIdMap.get(id);
                                    if (!node) {
                                        throw new Error('unexpected backend id');
                                    }
                                    return node.nodeId;
                                })
                            ];
                        });
                    })();
                },
                getNode: function getNode(nodeId) {
                    return _async_to_generator(function() {
                        var node;
                        return _ts_generator(this, function(_state) {
                            node = domNodeByIdMap.get(nodeId);
                            if (!node) {
                                throw new Error('unexpected id');
                            }
                            return [
                                2,
                                node
                            ];
                        });
                    })();
                },
                getComputedStyleForNode: function getComputedStyleForNode(_) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                computedStylesMock
                            ];
                        });
                    })();
                },
                getMatchedStylesForNode: function getMatchedStylesForNode(_) {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            return [
                                2,
                                _object_spread_props(_object_spread({}, matchedStylesMock), {
                                    getError: function() {
                                        return undefined;
                                    }
                                })
                            ];
                        });
                    })();
                },
                fontFaceForSource: function fontFaceForSource(url) {
                    if (url === fontFaceMock.src) {
                        return fontFaceMock;
                    }
                    return;
                }
            };
            layoutShifts = new _RootCauses_js__WEBPACK_IMPORTED_MODULE_3__.LayoutShiftRootCauses(protocolInterface, {
                enableIframeRootCauses: true
            });
        });
        it('uses cached node details', /*#__PURE__*/ _async_to_generator(function() {
            var getNodeSpy, rootCauses;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Use duplicate node ids for invalidation events that use `getNode`
                        resizeEvents.forEach(function(e) {
                            e.args.data.nodeId = 1;
                        });
                        injectedIframeEvents.forEach(function(e) {
                            e.args.data.nodeId = 11;
                        });
                        getNodeSpy = sinon.spy(protocolInterface, 'getNode');
                        return [
                            4,
                            Promise.all(shifts.map(function(shift) {
                                return layoutShifts.rootCausesForEvent(model, shift);
                            }))
                        ];
                    case 1:
                        rootCauses = _state.sent();
                        assertArrayHasNoNulls(rootCauses);
                        assert.strictEqual(getNodeSpy.callCount, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('Unsized media', function() {
            var assertAmountOfBlamedLayoutInvalidations = function assertAmountOfBlamedLayoutInvalidations(amount) {
                return _assertAmountOfBlamedLayoutInvalidations.apply(this, arguments);
            };
            it('marks unsized media node in LayoutInvalidation events as a potential root cause to layout shifts correctly', /*#__PURE__*/ _async_to_generator(function() {
                var rootCauses, shiftCausesNodeIds;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            shiftCausesNodeIds = rootCauses.map(function(cause) {
                                return cause.unsizedMedia.map(function(media) {
                                    return Number(media.node.backendNodeId);
                                });
                            });
                            // Test the nodes from the LI events are assinged as the potential root causes to layout shifts correctly.
                            assert.strictEqual(shiftCausesNodeIds[0].length, 1);
                            assert.strictEqual(shiftCausesNodeIds[0][0], resizeEventsNodeIds[0]);
                            assert.strictEqual(shiftCausesNodeIds[1].length, 1);
                            assert.strictEqual(shiftCausesNodeIds[1][0], resizeEventsNodeIds[0]);
                            assert.strictEqual(shiftCausesNodeIds[2].length, 1);
                            assert.strictEqual(shiftCausesNodeIds[2][0], resizeEventsNodeIds[1]);
                            assert.strictEqual(shiftCausesNodeIds[3].length, 1);
                            assert.strictEqual(shiftCausesNodeIds[3][0], resizeEventsNodeIds[1]);
                            assert.strictEqual(shiftCausesNodeIds[4].length, 1);
                            assert.strictEqual(shiftCausesNodeIds[4][0], resizeEventsNodeIds[2]);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets partially sized media\'s authored dimensions properly, using inline styles.', /*#__PURE__*/ _async_to_generator(function() {
                var rootCause, authoredDimensions;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // Set height using inline and matched CSS styles.
                            matchedStylesMock = {
                                attributesStyle: createMockStyle([]),
                                inlineStyle: createMockStyle([
                                    {
                                        name: 'height',
                                        value: '20px'
                                    }
                                ]),
                                matchedCSSRules: createMockMatchedRules([
                                    {
                                        name: 'height',
                                        value: '10px'
                                    }
                                ])
                            };
                            return [
                                4,
                                layoutShifts.rootCausesForEvent(model, shifts[0])
                            ];
                        case 1:
                            rootCause = _state.sent();
                            authoredDimensions = rootCause === null || rootCause === void 0 ? void 0 : rootCause.unsizedMedia[0].authoredDimensions;
                            if (!authoredDimensions) {
                                assert.fail('Expected defined authored dimensions');
                                return [
                                    2
                                ];
                            }
                            // Assert inline styles are preferred.
                            assert.strictEqual(authoredDimensions.height, '20px');
                            assert.isUndefined(authoredDimensions.width);
                            assert.isUndefined(authoredDimensions.aspectRatio);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets partially sized media\'s authored dimensions properly, using matched CSS rules.', /*#__PURE__*/ _async_to_generator(function() {
                var rootCause, authoredDimensions;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // Set height using matched CSS rules.
                            matchedStylesMock = {
                                attributesStyle: createMockStyle([
                                    {
                                        name: 'height',
                                        value: '10px'
                                    }
                                ]),
                                inlineStyle: createMockStyle([]),
                                matchedCSSRules: createMockMatchedRules([
                                    {
                                        name: 'height',
                                        value: '30px'
                                    }
                                ])
                            };
                            return [
                                4,
                                layoutShifts.rootCausesForEvent(model, shifts[1])
                            ];
                        case 1:
                            rootCause = _state.sent();
                            authoredDimensions = rootCause === null || rootCause === void 0 ? void 0 : rootCause.unsizedMedia[0].authoredDimensions;
                            if (!authoredDimensions) {
                                assert.fail('Expected defined authored dimensions');
                                return [
                                    2
                                ];
                            }
                            // Assert matched CSS rules styles are preferred.
                            assert.strictEqual(authoredDimensions.height, '30px');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets partially unsized media\'s computed dimensions properly.', /*#__PURE__*/ _async_to_generator(function() {
                var height, width, rootCause, computedDimensions;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            height = '10px';
                            width = '20px';
                            computedStylesMock = [
                                {
                                    name: 'height',
                                    value: height
                                },
                                {
                                    name: 'width',
                                    value: width
                                }
                            ];
                            return [
                                4,
                                layoutShifts.rootCausesForEvent(model, shifts[1])
                            ];
                        case 1:
                            rootCause = _state.sent();
                            computedDimensions = rootCause === null || rootCause === void 0 ? void 0 : rootCause.unsizedMedia[0].computedDimensions;
                            if (!computedDimensions) {
                                assert.fail('Expected defined computed dimensions');
                                return [
                                    2
                                ];
                            }
                            // Assert correct computed styles are set.
                            assert.strictEqual(computedDimensions.height, height);
                            assert.strictEqual(computedDimensions.width, width);
                            return [
                                2
                            ];
                    }
                });
            }));
            function _assertAmountOfBlamedLayoutInvalidations() {
                _assertAmountOfBlamedLayoutInvalidations = _async_to_generator(function(amount) {
                    var allShiftsRootCauses, nodesFromLayoutInvalidations, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, currentShiftRootCauses, _iteratorNormalCompletion1, _didIteratorError1, _iteratorError1, _iterator1, _step1, media;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    Promise.all(shifts.map(function(shift) {
                                        return layoutShifts.rootCausesForEvent(model, shift);
                                    }))
                                ];
                            case 1:
                                allShiftsRootCauses = _state.sent();
                                nodesFromLayoutInvalidations = new Set();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(_iterator = allShiftsRootCauses[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        currentShiftRootCauses = _step.value;
                                        if (currentShiftRootCauses === null) {
                                            continue;
                                        }
                                        _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                        try {
                                            for(_iterator1 = currentShiftRootCauses.unsizedMedia[Symbol.iterator](); !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                                media = _step1.value;
                                                nodesFromLayoutInvalidations.add(media.node.backendNodeId);
                                            }
                                        } catch (err) {
                                            _didIteratorError1 = true;
                                            _iteratorError1 = err;
                                        } finally{
                                            try {
                                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                                    _iterator1.return();
                                                }
                                            } finally{
                                                if (_didIteratorError1) {
                                                    throw _iteratorError1;
                                                }
                                            }
                                        }
                                    }
                                } catch (err) {
                                    _didIteratorError = true;
                                    _iteratorError = err;
                                } finally{
                                    try {
                                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                                            _iterator.return();
                                        }
                                    } finally{
                                        if (_didIteratorError) {
                                            throw _iteratorError;
                                        }
                                    }
                                }
                                assert.strictEqual(nodesFromLayoutInvalidations.size, amount);
                                return [
                                    2
                                ];
                        }
                    });
                });
                return _assertAmountOfBlamedLayoutInvalidations.apply(this, arguments);
            }
            it('ignores media with inline height and width', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            matchedStylesMock = {
                                attributesStyle: createMockStyle([
                                    {
                                        name: 'height',
                                        value: '10px'
                                    },
                                    {
                                        name: 'width',
                                        value: '10px'
                                    }
                                ]),
                                inlineStyle: createMockStyle([]),
                                matchedCSSRules: createMockMatchedRules([])
                            };
                            return [
                                4,
                                assertAmountOfBlamedLayoutInvalidations(0)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores media with CSS height and width', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            matchedStylesMock = {
                                attributesStyle: createMockStyle([]),
                                inlineStyle: createMockStyle([]),
                                matchedCSSRules: createMockMatchedRules([
                                    {
                                        name: 'height',
                                        value: '10px'
                                    },
                                    {
                                        name: 'width',
                                        value: '10px'
                                    }
                                ])
                            };
                            return [
                                4,
                                assertAmountOfBlamedLayoutInvalidations(0)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores media with height and aspect ratio', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            matchedStylesMock = {
                                attributesStyle: createMockStyle([
                                    {
                                        name: 'height',
                                        value: '10px'
                                    },
                                    {
                                        name: 'aspect-ratio',
                                        value: '1'
                                    }
                                ]),
                                inlineStyle: createMockStyle([]),
                                matchedCSSRules: createMockMatchedRules([])
                            };
                            return [
                                4,
                                assertAmountOfBlamedLayoutInvalidations(0)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores media with explicit height and width', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            matchedStylesMock = {
                                attributesStyle: createMockStyle([
                                    {
                                        name: 'height',
                                        value: '10px'
                                    }
                                ]),
                                inlineStyle: createMockStyle([
                                    {
                                        name: 'width',
                                        value: '10px'
                                    }
                                ]),
                                matchedCSSRules: createMockMatchedRules([])
                            };
                            return [
                                4,
                                assertAmountOfBlamedLayoutInvalidations(0)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores media with fixed position as potential root causes of layout shifts', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            computedStylesMock = [
                                {
                                    name: 'position',
                                    value: 'fixed'
                                }
                            ];
                            return [
                                4,
                                assertAmountOfBlamedLayoutInvalidations(0)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('does not ignore media with only height or width explicitly set as potential root causes of layout shifts', /*#__PURE__*/ _async_to_generator(function() {
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            matchedStylesMock = {
                                attributesStyle: createMockStyle([
                                    {
                                        name: 'height',
                                        value: '10px'
                                    }
                                ]),
                                inlineStyle: createMockStyle([]),
                                matchedCSSRules: createMockMatchedRules([])
                            };
                            return [
                                4,
                                assertAmountOfBlamedLayoutInvalidations(3)
                            ];
                        case 1:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('does not error when there are no layout shifts', /*#__PURE__*/ _async_to_generator(function() {
                var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, shift, clusters;
                return _ts_generator(this, function(_state) {
                    // Layout shifts for which we want to associate LayoutInvalidation events as potential root causes.
                    shifts = [
                        {
                            ts: 10
                        },
                        {
                            ts: 30
                        },
                        {
                            ts: 50
                        },
                        {
                            ts: 70
                        },
                        {
                            ts: 90
                        }
                    ];
                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        // Initialize the shifts.
                        for(_iterator = shifts[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            shift = _step.value;
                            shift.args = {
                                frame: 'frame-id-123'
                            };
                            shift.name = 'LayoutShift';
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    clusters = [
                        {
                            events: shifts
                        }
                    ];
                    modelMut.LayoutShifts.clusters = clusters;
                    assert.doesNotThrow(/*#__PURE__*/ _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        Promise.all(shifts.map(function(shift) {
                                            return layoutShifts.rootCausesForEvent(model, shift);
                                        }))
                                    ];
                                case 1:
                                    _state.sent();
                                    return [
                                        2
                                    ];
                            }
                        });
                    }));
                    return [
                        2
                    ];
                });
            }));
        });
        describe('Injected iframes', function() {
            it('marks injected iframes in LayoutInvalidation events as a potential root cause to layout shifts correctly', /*#__PURE__*/ _async_to_generator(function() {
                var rootCauses, shiftCausesNodeIds;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            shiftCausesNodeIds = rootCauses.map(function(cause) {
                                return cause.iframes.map(function(node) {
                                    return Number(node.iframe.backendNodeId);
                                });
                            });
                            // Test the nodes from the LI events are assinged as the potential root causes to layout shifts correctly.
                            assert.strictEqual(shiftCausesNodeIds[0].length, 1);
                            assert.strictEqual(shiftCausesNodeIds[0][0], iframesNodeIds[0]);
                            assert.strictEqual(shiftCausesNodeIds[4].length, 1);
                            assert.strictEqual(shiftCausesNodeIds[4][0], iframesNodeIds[1]);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores injected iframes if disabled', /*#__PURE__*/ _async_to_generator(function() {
                var rootCauses;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            layoutShifts = new _RootCauses_js__WEBPACK_IMPORTED_MODULE_3__.LayoutShiftRootCauses(protocolInterface, {
                                enableIframeRootCauses: false
                            });
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            assert(rootCauses.every(function(cause) {
                                return cause.iframes.length === 0;
                            }), 'contained iframe root causes');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores events that could not add or resize an iframe', /*#__PURE__*/ _async_to_generator(function() {
                var rootCauses;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            injectedIframeEvents.forEach(function(e) {
                                e.args.data.nodeName = 'DIV';
                                e.args.data.reason = "Size changed" /* TraceEngine.Types.TraceEvents.LayoutInvalidationReason.SIZE_CHANGED */ ;
                            });
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            assert(rootCauses.every(function(cause) {
                                return cause.iframes.length === 0;
                            }), 'contained iframe root causes');
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('Font changes', function() {
            // Mock two font network request that finished right before the mocked layout invalidation events
            // that correspond to font changes.
            var fontRequests = [
                {
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(2),
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0),
                    args: {
                        data: {
                            url: fontSource,
                            mimeType: 'font/woff2'
                        }
                    }
                },
                {
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(30),
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0),
                    args: {
                        data: {
                            url: fontSource,
                            mimeType: 'font/woff2'
                        }
                    }
                }
            ];
            it('marks fonts changes in LayoutInvalidation events as a potential root cause to layout shifts correctly', /*#__PURE__*/ _async_to_generator(function() {
                var _shiftCausesNodeIds__, _shiftCausesNodeIds__1, _shiftCausesNodeIds__2, _shiftCausesNodeIds__3, _shiftCausesNodeIds__4, _shiftCausesNodeIds__5, rootCauses, shiftCausesNodeIds;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            modelMut.NetworkRequests.byTime = fontRequests;
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            shiftCausesNodeIds = rootCauses.map(function(cause) {
                                return cause.fontChanges;
                            });
                            // Test the font requests are marked as potential layout shift root causes
                            // in the correct order.
                            assert.deepEqual((_shiftCausesNodeIds__ = shiftCausesNodeIds[0][0]) === null || _shiftCausesNodeIds__ === void 0 ? void 0 : _shiftCausesNodeIds__.request, fontRequests[0]);
                            assert.deepEqual((_shiftCausesNodeIds__1 = shiftCausesNodeIds[1][0]) === null || _shiftCausesNodeIds__1 === void 0 ? void 0 : _shiftCausesNodeIds__1.request, fontRequests[0]);
                            assert.deepEqual((_shiftCausesNodeIds__2 = shiftCausesNodeIds[2][0]) === null || _shiftCausesNodeIds__2 === void 0 ? void 0 : _shiftCausesNodeIds__2.request, fontRequests[1]);
                            assert.deepEqual((_shiftCausesNodeIds__3 = shiftCausesNodeIds[3][0]) === null || _shiftCausesNodeIds__3 === void 0 ? void 0 : _shiftCausesNodeIds__3.request, fontRequests[1]);
                            assert.deepEqual((_shiftCausesNodeIds__4 = shiftCausesNodeIds[2][1]) === null || _shiftCausesNodeIds__4 === void 0 ? void 0 : _shiftCausesNodeIds__4.request, fontRequests[0]);
                            assert.deepEqual((_shiftCausesNodeIds__5 = shiftCausesNodeIds[3][1]) === null || _shiftCausesNodeIds__5 === void 0 ? void 0 : _shiftCausesNodeIds__5.request, fontRequests[0]);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores requests for fonts whose font-display property is "optional"', /*#__PURE__*/ _async_to_generator(function() {
                var optionalFontRequests, rootCauses, shiftCausesNodeIds;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            optionalFontRequests = [
                                {
                                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(2),
                                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0),
                                    args: {
                                        data: {
                                            url: fontSource,
                                            mimeType: 'font/woff2'
                                        }
                                    }
                                }
                            ];
                            modelMut.NetworkRequests.byTime = optionalFontRequests;
                            fontFaceMock = {
                                fontFamily: 'Roboto',
                                src: fontSource,
                                fontDisplay: 'optional'
                            };
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            shiftCausesNodeIds = rootCauses.map(function(cause) {
                                return cause.fontChanges;
                            });
                            // Test no font request is marked as potential layout shift root causes
                            assert.strictEqual(shiftCausesNodeIds[0].length, 0);
                            assert.strictEqual(shiftCausesNodeIds[1].length, 0);
                            assert.strictEqual(shiftCausesNodeIds[2].length, 0);
                            assert.strictEqual(shiftCausesNodeIds[3].length, 0);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('ignores requests for fonts that lie outside the fixed time window from ending at the "font change" layout invalidation event', /*#__PURE__*/ _async_to_generator(function() {
                var optionalFontRequests, rootCauses, shiftCausesNodeIds;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            optionalFontRequests = [
                                {
                                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(2),
                                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(85),
                                    args: {
                                        data: {
                                            url: fontSource,
                                            mimeType: 'font/woff2'
                                        }
                                    }
                                }
                            ];
                            modelMut.NetworkRequests.byTime = optionalFontRequests;
                            fontFaceMock = {
                                fontFamily: 'Roboto',
                                src: fontSource,
                                fontDisplay: 'swap'
                            };
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            shiftCausesNodeIds = rootCauses.map(function(cause) {
                                return cause.fontChanges;
                            });
                            // Test no font request is marked as potential layout shift root causes
                            assert.strictEqual(shiftCausesNodeIds[0].length, 0);
                            assert.strictEqual(shiftCausesNodeIds[1].length, 0);
                            assert.strictEqual(shiftCausesNodeIds[2].length, 0);
                            assert.strictEqual(shiftCausesNodeIds[3].length, 0);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('Render blocking request', function() {
            var RenderBlockingRequest = [
                {
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(2),
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0),
                    args: {
                        data: {
                            url: renderBlockSource,
                            mimeType: 'text/plain',
                            renderBlocking: 'blocking'
                        }
                    }
                },
                {
                    dur: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(30),
                    ts: _trace_js__WEBPACK_IMPORTED_MODULE_2__.Types.Timing.MicroSeconds(0),
                    args: {
                        data: {
                            url: renderBlockSource,
                            mimeType: 'text/css',
                            renderBlocking: 'non_blocking'
                        }
                    }
                }
            ];
            it('marks render blocks in LayoutInvalidation events as a potential root cause to layout shifts correctly', /*#__PURE__*/ _async_to_generator(function() {
                var _shiftCausesNodeIds__, _shiftCausesNodeIds__1, _shiftCausesNodeIds__2, rootCauses, shiftCausesNodeIds;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            modelMut.NetworkRequests.byTime = RenderBlockingRequest;
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            shiftCausesNodeIds = rootCauses.map(function(cause) {
                                return cause.renderBlockingRequests;
                            });
                            // Test the rendering block requests are marked as potential layout shift root causes
                            // in the correct order.
                            assert.deepEqual((_shiftCausesNodeIds__ = shiftCausesNodeIds[2][0]) === null || _shiftCausesNodeIds__ === void 0 ? void 0 : _shiftCausesNodeIds__.request, RenderBlockingRequest[0]);
                            assert.deepEqual((_shiftCausesNodeIds__1 = shiftCausesNodeIds[3][0]) === null || _shiftCausesNodeIds__1 === void 0 ? void 0 : _shiftCausesNodeIds__1.request, RenderBlockingRequest[0]);
                            assert.deepEqual((_shiftCausesNodeIds__2 = shiftCausesNodeIds[4][0]) === null || _shiftCausesNodeIds__2 === void 0 ? void 0 : _shiftCausesNodeIds__2.request, RenderBlockingRequest[0]);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        describe('Scripts causing relayout/style recalc', function() {
            it('adds a Layout initiator\'s stack trace to the corresponding layout shift root causes.', /*#__PURE__*/ _async_to_generator(function() {
                var mockStackTrace, node, rootCauses, rootCauseStackTraces, stackTracesForLastShift;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            mockStackTrace = [
                                {
                                    scriptId: 0,
                                    functionName: 'foo',
                                    columnNumber: 10,
                                    lineNumber: 1,
                                    url: 'Main.js'
                                },
                                {
                                    scriptId: 2,
                                    functionName: 'bar',
                                    columnNumber: 10,
                                    lineNumber: 20,
                                    url: 'Main.js'
                                }
                            ];
                            // Mock a Layout event, which corresponds to the last shift.
                            // a stack trace.
                            modelMut.Renderer.allTraceEntries = [
                                {
                                    name: 'Layout',
                                    ts: 82
                                }
                            ];
                            node = {
                                entry: model.Renderer.allTraceEntries[0]
                            };
                            model.Renderer.entryToNode.set(model.Renderer.allTraceEntries[0], node);
                            // Fake out the initiator detection and link the Layout event with a fake InvalidateLayout event.
                            model.Initiators.eventToInitiator.set(model.Renderer.allTraceEntries[0], {
                                name: 'InvalidateLayout',
                                args: {
                                    data: {
                                        stackTrace: mockStackTrace
                                    }
                                }
                            });
                            return [
                                4,
                                Promise.all(shifts.map(function(shift) {
                                    return layoutShifts.rootCausesForEvent(model, shift);
                                }))
                            ];
                        case 1:
                            rootCauses = _state.sent();
                            assertArrayHasNoNulls(rootCauses);
                            rootCauseStackTraces = rootCauses.map(function(cause) {
                                return cause.scriptStackTrace;
                            });
                            stackTracesForLastShift = rootCauseStackTraces.at(-1);
                            if (!stackTracesForLastShift) {
                                assert.fail('No stack traces found for layout shift');
                                return [
                                    2
                                ];
                            }
                            assert.strictEqual(stackTracesForLastShift, mockStackTrace);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=LayoutShift.test.js.map


}),

}]);