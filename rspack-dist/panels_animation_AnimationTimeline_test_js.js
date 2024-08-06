"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_animation_AnimationTimeline_test_js"], {
"./panels/animation/AnimationTimeline.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/ExpectStubCall.js */ "./testing/ExpectStubCall.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _elements_elements_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../elements/elements.js */ "./panels/elements/elements.js");
/* harmony import */var _animation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animation.js */ "./panels/animation/animation.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
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







var TIME_ANIMATION_PAYLOAD = {
    id: 'animation-id',
    name: 'animation-name',
    pausedState: false,
    playState: 'running',
    playbackRate: 1,
    startTime: 42,
    currentTime: 0,
    type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ,
    source: {
        delay: 0,
        endDelay: 0,
        duration: 10000,
        backendNodeId: 42
    }
};
var SDA_ANIMATION_PAYLOAD = {
    id: 'animation-id',
    name: 'animation-name',
    pausedState: false,
    playState: 'running',
    playbackRate: 1,
    startTime: 42,
    currentTime: 0,
    type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ,
    source: {
        delay: 0,
        endDelay: 0,
        duration: 10000,
        backendNodeId: 42
    },
    viewOrScrollTimeline: {
        axis: "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ,
        sourceNodeId: 42,
        startOffset: 42,
        endOffset: 142
    }
};
var _waitPromise = /*#__PURE__*/ new WeakMap(), _resolveFn = /*#__PURE__*/ new WeakMap();
var ManualPromise = /*#__PURE__*/ function() {
    "use strict";
    function ManualPromise() {
        var _this = this;
        _class_call_check(this, ManualPromise);
        _class_private_field_init(this, _waitPromise, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _resolveFn, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _waitPromise, new Promise(function(r) {
            _class_private_field_set(_this, _resolveFn, r);
        }));
    }
    _create_class(ManualPromise, [
        {
            key: "resolve",
            value: function resolve() {
                var _this = this;
                _class_private_field_get(this, _resolveFn).call(this);
                _class_private_field_set(this, _waitPromise, new Promise(function(r) {
                    _class_private_field_set(_this, _resolveFn, r);
                }));
            }
        },
        {
            key: "wait",
            value: function wait() {
                return _class_private_field_get(this, _waitPromise);
            }
        }
    ]);
    return ManualPromise;
}();
var cancelAllPendingRaf = function() {
    var rafId = window.requestAnimationFrame(function() {});
    while(rafId--){
        window.cancelAnimationFrame(rafId);
    }
};
var stubAnimationGroup = function() {
    sinon.stub(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationModel.AnimationGroup.prototype, 'scrollNode').resolves(new _animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationDOMNode.AnimationDOMNode(null));
};
var stubAnimationDOMNode = function() {
    var verticalScrollRange = sinon.stub(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationDOMNode.AnimationDOMNode.prototype, 'verticalScrollRange').resolves(100);
    var horizontalScrollRange = sinon.stub(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationDOMNode.AnimationDOMNode.prototype, 'horizontalScrollRange').resolves(100);
    var scrollLeft = sinon.stub(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationDOMNode.AnimationDOMNode.prototype, 'scrollLeft').resolves(10);
    var scrollTop = sinon.stub(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationDOMNode.AnimationDOMNode.prototype, 'scrollTop').resolves(10);
    var addScrollEventListener = sinon.stub(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationDOMNode.AnimationDOMNode.prototype, 'addScrollEventListener').resolves();
    var removeScrollEventListener = sinon.stub(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationDOMNode.AnimationDOMNode.prototype, 'removeScrollEventListener').resolves();
    return {
        verticalScrollRange: verticalScrollRange,
        horizontalScrollRange: horizontalScrollRange,
        scrollLeft: scrollLeft,
        scrollTop: scrollTop,
        addScrollEventListener: addScrollEventListener,
        removeScrollEventListener: removeScrollEventListener
    };
};
(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_4__.describeWithMockConnection)('AnimationTimeline', function() {
    var target;
    var view;
    beforeEach(function() {
        var _target_model;
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.registerLinkifier({
            contextTypes: function contextTypes() {
                return [
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode
                ];
            },
            loadLinkifier: function loadLinkifier() {
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            _elements_elements_js__WEBPACK_IMPORTED_MODULE_5__.DOMLinkifier.Linkifier.instance()
                        ];
                    });
                })();
            }
        });
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        var runtimeAgent = (_target_model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.RuntimeModel.RuntimeModel)) === null || _target_model === void 0 ? void 0 : _target_model.agent;
        var stub = sinon.stub(runtimeAgent, 'invoke_evaluate');
        stub.callsFake(function(params) {
            if (params.expression === 'window.devicePixelRatio') {
                return Promise.resolve({
                    result: {
                        type: 'number',
                        value: 1
                    },
                    getError: function() {
                        return undefined;
                    }
                });
            }
            return stub.wrappedMethod(params);
        });
    });
    afterEach(function() {
        cancelAllPendingRaf();
        view.detach();
    });
    var updatesUiOnEvent = function(inScope) {
        return /*#__PURE__*/ _async_to_generator(function() {
            var model, previewContainer;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
                        model = target.model(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationModel.AnimationModel);
                        assert.exists(model);
                        view = _animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationTimeline.AnimationTimeline.instance({
                            forceNew: true
                        });
                        view.markAsRoot();
                        view.show(document.body);
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        previewContainer = view.contentElement.querySelector('.animation-timeline-buffer');
                        return [
                            4,
                            model.animationStarted({
                                id: 'id',
                                name: 'name',
                                pausedState: false,
                                playState: 'playState',
                                playbackRate: 1,
                                startTime: 42,
                                currentTime: 43,
                                type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ,
                                source: {
                                    delay: 0,
                                    duration: 1001,
                                    backendNodeId: 42
                                }
                            })
                        ];
                    case 2:
                        _state.sent();
                        if (!inScope) return [
                            3,
                            4
                        ];
                        return [
                            4,
                            (0,_testing_ExpectStubCall_js__WEBPACK_IMPORTED_MODULE_3__.expectCall)(sinon.stub(view, 'previewsCreatedForTest'))
                        ];
                    case 3:
                        _state.sent();
                        _state.label = 4;
                    case 4:
                        assert.strictEqual(previewContainer.querySelectorAll('.animation-buffer-preview').length, inScope ? 1 : 0);
                        return [
                            2
                        ];
                }
            });
        });
    };
    // Failing on the toolbar button CL together with some ApplicationSidebarPanel tests
    it.skip('[crbug.com/354673294] updates UI on in scope animation group start', updatesUiOnEvent(true));
    // Failing on the toolbar button CL together with some ApplicationSidebarPanel tests
    it.skip('[crbug.com/354673294] does not update UI on out of scope animation group start', updatesUiOnEvent(false));
    // Flaking on multiple bots on CQ.
    describe.skip('[crbug.com/334003901] resizing time controls', function() {
        it('updates --timeline-controls-width and calls onResize', /*#__PURE__*/ _async_to_generator(function() {
            var onResizeStub, resizer, initialWidth, resizerRect, afterResizeWidth;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        view = _animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationTimeline.AnimationTimeline.instance({
                            forceNew: true
                        });
                        view.markAsRoot();
                        view.show(document.body);
                        onResizeStub = sinon.stub(view, 'onResize');
                        return [
                            4,
                            new Promise(function(resolve) {
                                return setTimeout(resolve, 0);
                            })
                        ];
                    case 1:
                        _state.sent();
                        resizer = view.contentElement.querySelector('.timeline-controls-resizer');
                        assert.exists(resizer);
                        initialWidth = view.element.style.getPropertyValue('--timeline-controls-width');
                        assert.strictEqual(initialWidth, '150px');
                        resizerRect = resizer.getBoundingClientRect();
                        resizer.dispatchEvent(new PointerEvent('pointerdown', {
                            clientX: resizerRect.x + resizerRect.width / 2,
                            clientY: resizerRect.y + resizerRect.height / 2
                        }));
                        resizer.ownerDocument.dispatchEvent(new PointerEvent('pointermove', {
                            buttons: 1,
                            clientX: resizerRect.x + resizerRect.width / 2 + 20,
                            clientY: resizerRect.y + resizerRect.height / 2
                        }));
                        resizer.ownerDocument.dispatchEvent(new PointerEvent('pointerup'));
                        afterResizeWidth = view.element.style.getPropertyValue('--timeline-controls-width');
                        assert.notStrictEqual(initialWidth, afterResizeWidth);
                        assert.isTrue(onResizeStub.calledOnce);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    // Flaking on multiple bots on CQ.
    describe.skip('[crbug.com/334003901] Animation group nodes are removed', function() {
        var waitForPreviewsManualPromise = new ManualPromise();
        var waitForAnimationGroupSelectedPromise = new ManualPromise();
        var domModel;
        var animationModel;
        var contentDocument;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var model, modelForDom;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        view = _animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationTimeline.AnimationTimeline.instance({
                            forceNew: true
                        });
                        view.markAsRoot();
                        view.show(document.body);
                        sinon.stub(view, 'animationGroupSelectedForTest').callsFake(function() {
                            waitForAnimationGroupSelectedPromise.resolve();
                        });
                        sinon.stub(view, 'previewsCreatedForTest').callsFake(function() {
                            waitForPreviewsManualPromise.resolve();
                        });
                        model = target.model(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationModel.AnimationModel);
                        assert.exists(model);
                        animationModel = model;
                        modelForDom = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                        assert.exists(modelForDom);
                        domModel = modelForDom;
                        contentDocument = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMDocument.create(domModel, null, false, {
                            nodeId: 0,
                            backendNodeId: 0,
                            nodeType: Node.DOCUMENT_NODE,
                            nodeName: '#document',
                            localName: 'document',
                            nodeValue: ''
                        });
                        void animationModel.animationStarted(TIME_ANIMATION_PAYLOAD);
                        return [
                            4,
                            waitForPreviewsManualPromise.wait()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        // Failing on the toolbar button CL together with some ApplicationSidebarPanel tests
        describe.skip('[crbug.com/354673294] when the animation group is already selected', function() {
            it('should hide scrubber, disable control button and make current time empty', /*#__PURE__*/ _async_to_generator(function() {
                var _view_element_shadowRoot_querySelector, domNode, preview, gridHeader, scrubber, controlButton, currentTime;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            domNode = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.create(domModel, contentDocument, false, {
                                nodeId: 1,
                                backendNodeId: 1,
                                nodeType: Node.ELEMENT_NODE,
                                nodeName: 'div',
                                localName: 'div',
                                nodeValue: ''
                            });
                            sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode.prototype, 'resolvePromise').resolves(domNode);
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            gridHeader = view.element.shadowRoot.querySelector('.animation-grid-header');
                            assert.exists(gridHeader);
                            assert.isTrue(gridHeader.classList.contains('scrubber-enabled'));
                            scrubber = view.element.shadowRoot.querySelector('.animation-scrubber');
                            assert.exists(scrubber);
                            assert.isFalse(scrubber.classList.contains('hidden'));
                            controlButton = (_view_element_shadowRoot_querySelector = view.element.shadowRoot.querySelector('.animation-controls-toolbar')) === null || _view_element_shadowRoot_querySelector === void 0 ? void 0 : _view_element_shadowRoot_querySelector.shadowRoot.querySelector('.toolbar-button');
                            assert.exists(controlButton);
                            assert.isFalse(controlButton.disabled);
                            currentTime = view.element.shadowRoot.querySelector('.animation-timeline-current-time');
                            assert.exists(currentTime);
                            domModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.NodeRemoved, {
                                node: domNode,
                                parent: contentDocument
                            });
                            assert.isFalse(gridHeader.classList.contains('scrubber-enabled'));
                            assert.isTrue(scrubber.classList.contains('hidden'));
                            assert.isTrue(controlButton.disabled);
                            assert.isTrue(currentTime.textContent === '');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should mark the animation node as removed in the NodeUI', /*#__PURE__*/ _async_to_generator(function() {
                var domNode, preview, gridHeader, animationNodeRow;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            domNode = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.create(domModel, contentDocument, false, {
                                nodeId: 1,
                                backendNodeId: 1,
                                nodeType: Node.ELEMENT_NODE,
                                nodeName: 'div',
                                localName: 'div',
                                nodeValue: ''
                            });
                            sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode.prototype, 'resolvePromise').resolves(domNode);
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            // Wait for the animation group to be fully selected and scrubber enabled.
                            gridHeader = view.element.shadowRoot.querySelector('.animation-grid-header');
                            assert.exists(gridHeader);
                            assert.isTrue(gridHeader.classList.contains('scrubber-enabled'));
                            animationNodeRow = view.element.shadowRoot.querySelector('.animation-node-row');
                            assert.exists(animationNodeRow);
                            assert.isFalse(animationNodeRow.classList.contains('animation-node-removed'));
                            domModel.dispatchEventToListeners(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.Events.NodeRemoved, {
                                node: domNode,
                                parent: contentDocument
                            });
                            assert.isTrue(animationNodeRow.classList.contains('animation-node-removed'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        // Failing on the toolbar button CL together with some ApplicationSidebarPanel tests
        describe.skip('[crbug.com/354673294] when the animation group is not selected and the nodes are removed', function() {
            it('should scrubber be hidden, control button be disabled and current time be empty', /*#__PURE__*/ _async_to_generator(function() {
                var _view_element_shadowRoot_querySelector, domNode, preview, gridHeader, scrubber, controlButton, currentTime;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // Owner document is null for the resolved deferred nodes that are already removed from the DOM.
                            domNode = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.create(domModel, null, false, {
                                nodeId: 1,
                                backendNodeId: 1,
                                nodeType: Node.ELEMENT_NODE,
                                nodeName: 'div',
                                localName: 'div',
                                nodeValue: ''
                            });
                            sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode.prototype, 'resolvePromise').resolves(domNode);
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            gridHeader = view.element.shadowRoot.querySelector('.animation-grid-header');
                            assert.exists(gridHeader);
                            assert.isFalse(gridHeader.classList.contains('scrubber-enabled'));
                            scrubber = view.element.shadowRoot.querySelector('.animation-scrubber');
                            assert.exists(scrubber);
                            assert.isTrue(scrubber.classList.contains('hidden'));
                            controlButton = (_view_element_shadowRoot_querySelector = view.element.shadowRoot.querySelector('.animation-controls-toolbar')) === null || _view_element_shadowRoot_querySelector === void 0 ? void 0 : _view_element_shadowRoot_querySelector.shadowRoot.querySelector('.toolbar-button');
                            assert.exists(controlButton);
                            assert.isTrue(controlButton.disabled);
                            currentTime = view.element.shadowRoot.querySelector('.animation-timeline-current-time');
                            assert.exists(currentTime);
                            assert.isTrue(currentTime.textContent === '');
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    // Flaking on multiple bots on CQ.
    describe.skip('[crbug.com/334003901] time animations', function() {
        var waitForPreviewsManualPromise = new ManualPromise();
        var waitForAnimationGroupSelectedPromise = new ManualPromise();
        var waitForScheduleRedrawAfterAnimationGroupUpdated = new ManualPromise();
        var domModel;
        var animationModel;
        var contentDocument;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var model, modelForDom, domNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        view = _animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationTimeline.AnimationTimeline.instance({
                            forceNew: true
                        });
                        view.markAsRoot();
                        view.show(document.body);
                        sinon.stub(view, 'animationGroupSelectedForTest').callsFake(function() {
                            waitForAnimationGroupSelectedPromise.resolve();
                        });
                        sinon.stub(view, 'previewsCreatedForTest').callsFake(function() {
                            waitForPreviewsManualPromise.resolve();
                        });
                        sinon.stub(view, 'scheduledRedrawAfterAnimationGroupUpdatedForTest').callsFake(function() {
                            waitForScheduleRedrawAfterAnimationGroupUpdated.resolve();
                        });
                        model = target.model(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationModel.AnimationModel);
                        assert.isNotNull(model);
                        animationModel = model;
                        modelForDom = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                        assert.isNotNull(modelForDom);
                        domModel = modelForDom;
                        contentDocument = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMDocument.create(domModel, null, false, {
                            nodeId: 0,
                            backendNodeId: 0,
                            nodeType: Node.DOCUMENT_NODE,
                            nodeName: '#document',
                            localName: 'document',
                            nodeValue: ''
                        });
                        domNode = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.create(domModel, contentDocument, false, {
                            nodeId: 1,
                            backendNodeId: 1,
                            nodeType: Node.ELEMENT_NODE,
                            nodeName: 'div',
                            localName: 'div',
                            nodeValue: ''
                        });
                        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode.prototype, 'resolvePromise').resolves(domNode);
                        void animationModel.animationStarted(TIME_ANIMATION_PAYLOAD);
                        return [
                            4,
                            waitForPreviewsManualPromise.wait()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        // Failing on the toolbar button CL together with some ApplicationSidebarPanel tests
        describe.skip('[crbug.com/354673294] animationGroupUpdated', function() {
            it('should update duration on animationGroupUpdated', /*#__PURE__*/ _async_to_generator(function() {
                var preview;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            assert.isNotNull(preview);
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            void animationModel.animationUpdated(_object_spread_props(_object_spread({}, TIME_ANIMATION_PAYLOAD), {
                                source: _object_spread_props(_object_spread({}, TIME_ANIMATION_PAYLOAD.source), {
                                    iterations: 3,
                                    duration: 10
                                })
                            }));
                            return [
                                4,
                                waitForScheduleRedrawAfterAnimationGroupUpdated.wait()
                            ];
                        case 2:
                            _state.sent();
                            // 3 (iterations) * 10 (iteration duration)
                            assert.strictEqual(view.duration(), 30);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should schedule re-draw on animationGroupUpdated', /*#__PURE__*/ _async_to_generator(function() {
                var preview;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            assert.isNotNull(preview);
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            void animationModel.animationUpdated(TIME_ANIMATION_PAYLOAD);
                            return [
                                4,
                                waitForScheduleRedrawAfterAnimationGroupUpdated.wait()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
    // Flaking on multiple bots on CQ.
    describe.skip('[crbug.com/334003901] scroll driven animations', function() {
        var stubbedAnimationDOMNode;
        var waitForPreviewsManualPromise = new ManualPromise();
        var waitForAnimationGroupSelectedPromise = new ManualPromise();
        var waitForScheduleRedrawAfterAnimationGroupUpdated = new ManualPromise();
        var domModel;
        var animationModel;
        var contentDocument;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var model, modelForDom, domNode;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        stubbedAnimationDOMNode = stubAnimationDOMNode();
                        stubAnimationGroup();
                        view = _animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationTimeline.AnimationTimeline.instance({
                            forceNew: true
                        });
                        view.markAsRoot();
                        view.show(document.body);
                        sinon.stub(view, 'animationGroupSelectedForTest').callsFake(function() {
                            waitForAnimationGroupSelectedPromise.resolve();
                        });
                        sinon.stub(view, 'previewsCreatedForTest').callsFake(function() {
                            waitForPreviewsManualPromise.resolve();
                        });
                        sinon.stub(view, 'scheduledRedrawAfterAnimationGroupUpdatedForTest').callsFake(function() {
                            waitForScheduleRedrawAfterAnimationGroupUpdated.resolve();
                        });
                        model = target.model(_animation_js__WEBPACK_IMPORTED_MODULE_6__.AnimationModel.AnimationModel);
                        assert.exists(model);
                        animationModel = model;
                        modelForDom = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                        assert.exists(modelForDom);
                        domModel = modelForDom;
                        contentDocument = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMDocument.create(domModel, null, false, {
                            nodeId: 0,
                            backendNodeId: 0,
                            nodeType: Node.DOCUMENT_NODE,
                            nodeName: '#document',
                            localName: 'document',
                            nodeValue: ''
                        });
                        domNode = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMNode.create(domModel, contentDocument, false, {
                            nodeId: 1,
                            backendNodeId: 1,
                            nodeType: Node.ELEMENT_NODE,
                            nodeName: 'div',
                            localName: 'div',
                            nodeValue: ''
                        });
                        sinon.stub(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DeferredDOMNode.prototype, 'resolvePromise').resolves(domNode);
                        void animationModel.animationStarted({
                            id: 'animation-id',
                            name: 'animation-name',
                            pausedState: false,
                            playState: 'running',
                            playbackRate: 1,
                            startTime: 42,
                            currentTime: 0,
                            type: "CSSAnimation" /* Protocol.Animation.AnimationType.CSSAnimation */ ,
                            source: {
                                delay: 0,
                                endDelay: 0,
                                duration: 10000,
                                backendNodeId: 42
                            },
                            viewOrScrollTimeline: {
                                axis: "vertical" /* Protocol.DOM.ScrollOrientation.Vertical */ ,
                                sourceNodeId: 42,
                                startOffset: 42,
                                endOffset: 142
                            }
                        });
                        return [
                            4,
                            waitForPreviewsManualPromise.wait()
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('should disable global controls after a scroll driven animation is selected', /*#__PURE__*/ _async_to_generator(function() {
            var preview, playbackRateButtons, timelineToolbar, pauseAllButton, controlsToolbar, replayButton;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                        preview.click();
                        return [
                            4,
                            waitForAnimationGroupSelectedPromise.wait()
                        ];
                    case 1:
                        _state.sent();
                        playbackRateButtons = _to_consumable_array(view.element.shadowRoot.querySelectorAll('.animation-playback-rate-button'));
                        assert.isTrue(playbackRateButtons.every(function(button) {
                            return button.getAttribute('disabled');
                        }), 'All the playback rate buttons are disabled');
                        timelineToolbar = view.element.shadowRoot.querySelector('.animation-timeline-toolbar');
                        pauseAllButton = timelineToolbar.shadowRoot.querySelector('[aria-label=\'Pause all\']');
                        assert.exists(pauseAllButton === null || pauseAllButton === void 0 ? void 0 : pauseAllButton.getAttribute('disabled'), 'Pause all button is disabled');
                        controlsToolbar = view.element.shadowRoot.querySelector('.animation-controls-toolbar');
                        replayButton = controlsToolbar.shadowRoot.querySelector('[aria-label=\'Replay timeline\']');
                        assert.exists(replayButton === null || replayButton === void 0 ? void 0 : replayButton.getAttribute('disabled'), 'Replay button is disabled');
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show current time text in pixels', /*#__PURE__*/ _async_to_generator(function() {
            var _currentTimeElement_textContent, preview, currentTimeElement;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                        preview.click();
                        return [
                            4,
                            waitForAnimationGroupSelectedPromise.wait()
                        ];
                    case 1:
                        _state.sent();
                        currentTimeElement = view.element.shadowRoot.querySelector('.animation-timeline-current-time');
                        assert.isTrue((_currentTimeElement_textContent = currentTimeElement.textContent) === null || _currentTimeElement_textContent === void 0 ? void 0 : _currentTimeElement_textContent.includes('px'));
                        return [
                            2
                        ];
                }
            });
        }));
        it('should show timeline grid values in pixels', /*#__PURE__*/ _async_to_generator(function() {
            var preview, labelElements;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                        preview.click();
                        return [
                            4,
                            waitForAnimationGroupSelectedPromise.wait()
                        ];
                    case 1:
                        _state.sent();
                        labelElements = _to_consumable_array(view.element.shadowRoot.querySelectorAll('.animation-timeline-grid-label'));
                        assert.isTrue(labelElements.every(function(el) {
                            var _el_textContent;
                            return (_el_textContent = el.textContent) === null || _el_textContent === void 0 ? void 0 : _el_textContent.includes('px');
                        }), 'Label is expected to be a pixel value but it is not');
                        return [
                            2
                        ];
                }
            });
        }));
        // Failing on the toolbar button CL together with some ApplicationSidebarPanel tests
        describe.skip('[crbug.com/354673294] animationGroupUpdated', function() {
            it('should re-draw preview after receiving animationGroupUpdated', /*#__PURE__*/ _async_to_generator(function() {
                var preview, initialPreviewLine, initialPreviewLineLength, currentPreviewLine, currentPreviewLineLength;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            initialPreviewLine = preview.querySelector('line');
                            assert.isNotNull(initialPreviewLine);
                            initialPreviewLineLength = Number.parseInt(initialPreviewLine.getAttribute('x2'), 10) - Number.parseInt(initialPreviewLine.getAttribute('x1'), 10);
                            void animationModel.animationUpdated(_object_spread_props(_object_spread({}, SDA_ANIMATION_PAYLOAD), {
                                source: _object_spread_props(_object_spread({}, SDA_ANIMATION_PAYLOAD.source), {
                                    duration: 50
                                })
                            }));
                            return [
                                4,
                                waitForScheduleRedrawAfterAnimationGroupUpdated.wait()
                            ];
                        case 2:
                            _state.sent();
                            currentPreviewLine = preview.querySelector('line');
                            assert.isNotNull(currentPreviewLine);
                            currentPreviewLineLength = Number.parseInt(currentPreviewLine.getAttribute('x2'), 10) - Number.parseInt(currentPreviewLine.getAttribute('x1'), 10);
                            assert.isTrue(currentPreviewLineLength < initialPreviewLineLength);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should update duration if the scroll range is changed on animationGroupUpdated', /*#__PURE__*/ _async_to_generator(function() {
                var SCROLL_RANGE, preview;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            SCROLL_RANGE = 20;
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            stubbedAnimationDOMNode.verticalScrollRange.resolves(SCROLL_RANGE);
                            void animationModel.animationUpdated(SDA_ANIMATION_PAYLOAD);
                            return [
                                4,
                                waitForScheduleRedrawAfterAnimationGroupUpdated.wait()
                            ];
                        case 2:
                            _state.sent();
                            assert.strictEqual(view.duration(), SCROLL_RANGE);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should update current time text if the scroll top is changed on animationGroupUpdated', /*#__PURE__*/ _async_to_generator(function() {
                var SCROLL_TOP, preview, currentTimeElement;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            SCROLL_TOP = 5;
                            stubbedAnimationDOMNode.scrollTop.resolves(SCROLL_TOP);
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            currentTimeElement = view.element.shadowRoot.querySelector('.animation-timeline-current-time');
                            assert.isNotNull(currentTimeElement);
                            assert.isNotNull(preview);
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            void animationModel.animationUpdated(SDA_ANIMATION_PAYLOAD);
                            return [
                                4,
                                waitForScheduleRedrawAfterAnimationGroupUpdated.wait()
                            ];
                        case 2:
                            _state.sent();
                            assert.strictEqual(currentTimeElement.textContent, '5px');
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should update scrubber position if the scroll top is changed on animationGroupUpdated', /*#__PURE__*/ _async_to_generator(function() {
                var SCROLL_TOP, preview, timelineScrubberElement, translateX;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            SCROLL_TOP = 5;
                            stubbedAnimationDOMNode.scrollTop.resolves(SCROLL_TOP);
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            timelineScrubberElement = view.element.shadowRoot.querySelector('.animation-scrubber');
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            void animationModel.animationUpdated(SDA_ANIMATION_PAYLOAD);
                            return [
                                4,
                                waitForScheduleRedrawAfterAnimationGroupUpdated.wait()
                            ];
                        case 2:
                            _state.sent();
                            translateX = Number.parseFloat(timelineScrubberElement.style.transform.match(/translateX\((.*)px\)/)[1]);
                            assert.closeTo(translateX, SCROLL_TOP * view.pixelTimeRatio(), 0.5);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('should schedule re-draw selected group after receiving animationGroupUpdated', /*#__PURE__*/ _async_to_generator(function() {
                var preview;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            preview = view.element.shadowRoot.querySelector('.animation-buffer-preview');
                            preview.click();
                            return [
                                4,
                                waitForAnimationGroupSelectedPromise.wait()
                            ];
                        case 1:
                            _state.sent();
                            void animationModel.animationUpdated(SDA_ANIMATION_PAYLOAD);
                            return [
                                4,
                                waitForScheduleRedrawAfterAnimationGroupUpdated.wait()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=AnimationTimeline.test.js.map


}),
"./panels/animation/animation.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationDOMNode: function() { return /* reexport module object */ _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__; },
  AnimationGroupPreviewUI: function() { return /* reexport module object */ _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__; },
  AnimationModel: function() { return /* reexport module object */ _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  AnimationScreenshotPopover: function() { return /* reexport module object */ _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__; },
  AnimationTimeline: function() { return /* reexport module object */ _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__; },
  AnimationUI: function() { return /* reexport module object */ _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _AnimationDOMNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationDOMNode.js */ "./panels/animation/AnimationDOMNode.js");
/* harmony import */var _AnimationGroupPreviewUI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationGroupPreviewUI.js */ "./panels/animation/AnimationGroupPreviewUI.js");
/* harmony import */var _AnimationModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimationModel.js */ "./panels/animation/AnimationModel.js");
/* harmony import */var _AnimationScreenshotPopover_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnimationScreenshotPopover.js */ "./panels/animation/AnimationScreenshotPopover.js");
/* harmony import */var _AnimationTimeline_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnimationTimeline.js */ "./panels/animation/AnimationTimeline.js");
/* harmony import */var _AnimationUI_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnimationUI.js */ "./panels/animation/AnimationUI.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=animation.js.map


}),
"./panels/elements/elements.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeUtils: function() { return /* reexport module object */ _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__; },
  AccessibilityTreeView: function() { return /* reexport module object */ _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__; },
  CSSRuleValidator: function() { return /* reexport module object */ _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__; },
  ClassesPaneWidget: function() { return /* reexport module object */ _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__; },
  ColorSwatchPopoverIcon: function() { return /* reexport module object */ _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__; },
  ComputedStyleModel: function() { return /* reexport module object */ _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  ComputedStyleWidget: function() { return /* reexport module object */ _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__; },
  DOMLinkifier: function() { return /* reexport module object */ _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__; },
  DOMPath: function() { return /* reexport module object */ _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__; },
  ElementStatePaneWidget: function() { return /* reexport module object */ _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__; },
  ElementsPanel: function() { return /* reexport module object */ _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__; },
  ElementsSidebarPane: function() { return /* reexport module object */ _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsTreeElement: function() { return /* reexport module object */ _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__; },
  ElementsTreeElementHighlighter: function() { return /* reexport module object */ _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__; },
  ElementsTreeOutline: function() { return /* reexport module object */ _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__; },
  EventListenersWidget: function() { return /* reexport module object */ _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__; },
  InspectElementModeController: function() { return /* reexport module object */ _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__; },
  LayersWidget: function() { return /* reexport module object */ _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__; },
  MarkerDecorator: function() { return /* reexport module object */ _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__; },
  MetricsSidebarPane: function() { return /* reexport module object */ _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__; },
  NodeStackTraceWidget: function() { return /* reexport module object */ _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__; },
  PlatformFontsWidget: function() { return /* reexport module object */ _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__; },
  PropertiesWidget: function() { return /* reexport module object */ _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__; },
  PropertyMatchers: function() { return /* reexport module object */ _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__; },
  PropertyRenderer: function() { return /* reexport module object */ _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__; },
  StyleEditorWidget: function() { return /* reexport module object */ _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__; },
  StylePropertiesSection: function() { return /* reexport module object */ _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__; },
  StylePropertyHighlighter: function() { return /* reexport module object */ _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__; },
  StylePropertyTreeElement: function() { return /* reexport module object */ _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__; },
  StylePropertyUtils: function() { return /* reexport module object */ _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__; },
  StylesSidebarPane: function() { return /* reexport module object */ _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__; },
  TopLayerContainer: function() { return /* reexport module object */ _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__; },
  WebCustomData: function() { return /* reexport module object */ _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__; }
});
/* harmony import */var _InspectElementModeController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InspectElementModeController.js */ "./panels/elements/InspectElementModeController.js");
/* harmony import */var _ColorSwatchPopoverIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorSwatchPopoverIcon.js */ "./panels/elements/ColorSwatchPopoverIcon.js");
/* harmony import */var _ComputedStyleModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ComputedStyleModel.js */ "./panels/elements/ComputedStyleModel.js");
/* harmony import */var _DOMLinkifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMLinkifier.js */ "./panels/elements/DOMLinkifier.js");
/* harmony import */var _DOMPath_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMPath.js */ "./panels/elements/DOMPath.js");
/* harmony import */var _ElementsSidebarPane_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElementsSidebarPane.js */ "./panels/elements/ElementsSidebarPane.js");
/* harmony import */var _ElementsTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ElementsTreeElement.js */ "./panels/elements/ElementsTreeElement.js");
/* harmony import */var _TopLayerContainer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TopLayerContainer.js */ "./panels/elements/TopLayerContainer.js");
/* harmony import */var _ElementsTreeOutline_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ElementsTreeOutline.js */ "./panels/elements/ElementsTreeOutline.js");
/* harmony import */var _EventListenersWidget_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersWidget.js */ "./panels/elements/EventListenersWidget.js");
/* harmony import */var _MarkerDecorator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MarkerDecorator.js */ "./panels/elements/MarkerDecorator.js");
/* harmony import */var _MetricsSidebarPane_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MetricsSidebarPane.js */ "./panels/elements/MetricsSidebarPane.js");
/* harmony import */var _PlatformFontsWidget_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PlatformFontsWidget.js */ "./panels/elements/PlatformFontsWidget.js");
/* harmony import */var _PropertiesWidget_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PropertiesWidget.js */ "./panels/elements/PropertiesWidget.js");
/* harmony import */var _NodeStackTraceWidget_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./NodeStackTraceWidget.js */ "./panels/elements/NodeStackTraceWidget.js");
/* harmony import */var _StylePropertiesSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./StylePropertiesSection.js */ "./panels/elements/StylePropertiesSection.js");
/* harmony import */var _StylePropertyHighlighter_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./StylePropertyHighlighter.js */ "./panels/elements/StylePropertyHighlighter.js");
/* harmony import */var _StylesSidebarPane_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./StylesSidebarPane.js */ "./panels/elements/StylesSidebarPane.js");
/* harmony import */var _StylePropertyTreeElement_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyTreeElement.js */ "./panels/elements/StylePropertyTreeElement.js");
/* harmony import */var _ComputedStyleWidget_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ComputedStyleWidget.js */ "./panels/elements/ComputedStyleWidget.js");
/* harmony import */var _CSSRuleValidator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./CSSRuleValidator.js */ "./panels/elements/CSSRuleValidator.js");
/* harmony import */var _ElementsPanel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ElementsPanel.js */ "./panels/elements/ElementsPanel.js");
/* harmony import */var _ClassesPaneWidget_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ClassesPaneWidget.js */ "./panels/elements/ClassesPaneWidget.js");
/* harmony import */var _ElementStatePaneWidget_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ElementStatePaneWidget.js */ "./panels/elements/ElementStatePaneWidget.js");
/* harmony import */var _ElementsTreeElementHighlighter_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ElementsTreeElementHighlighter.js */ "./panels/elements/ElementsTreeElementHighlighter.js");
/* harmony import */var _AccessibilityTreeUtils_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./AccessibilityTreeUtils.js */ "./panels/elements/AccessibilityTreeUtils.js");
/* harmony import */var _AccessibilityTreeView_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./AccessibilityTreeView.js */ "./panels/elements/AccessibilityTreeView.js");
/* harmony import */var _LayersWidget_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./LayersWidget.js */ "./panels/elements/LayersWidget.js");
/* harmony import */var _PropertyMatchers_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./PropertyMatchers.js */ "./panels/elements/PropertyMatchers.js");
/* harmony import */var _PropertyRenderer_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./PropertyRenderer.js */ "./panels/elements/PropertyRenderer.js");
/* harmony import */var _StyleEditorWidget_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./StyleEditorWidget.js */ "./panels/elements/StyleEditorWidget.js");
/* harmony import */var _StylePropertyUtils_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./StylePropertyUtils.js */ "./panels/elements/StylePropertyUtils.js");
/* harmony import */var _WebCustomData_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./WebCustomData.js */ "./panels/elements/WebCustomData.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




























































 //# sourceMappingURL=elements.js.map


}),
"./testing/ExpectStubCall.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  expectCall: function() { return expectCall; },
  expectCalled: function() { return expectCalled; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
function expectCall(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new Promise(function(resolve) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        stub.callsFake(function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _options_callCount;
            if (stub.callCount < ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1)) {
                return undefined;
            }
            resolve(args);
            return options.fakeFn ? options.fakeFn.apply(this, args) : undefined;
        });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function expectCalled(stub) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var _options_callCount;
    var remainingCalls = ((_options_callCount = options.callCount) !== null && _options_callCount !== void 0 ? _options_callCount : 1) - stub.callCount;
    if (remainingCalls <= 0) {
        return Promise.resolve(stub.lastCall.args);
    }
    return expectCall(stub, _object_spread_props(_object_spread({}, options), {
        callCount: remainingCalls
    }));
} //# sourceMappingURL=ExpectStubCall.js.map


}),

}]);