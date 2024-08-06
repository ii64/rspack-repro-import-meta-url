"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_components_ElementsBreadcrumbs_test_js"], {
"./panels/elements/components/ElementsBreadcrumbs.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../testing/MutationHelpers.js */ "./testing/MutationHelpers.js");
/* harmony import */var _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _components_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.js */ "./panels/elements/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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





var coordinator = _ui_components_render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_3__.RenderCoordinator.RenderCoordinator.instance();
/*
 * This very clearly is not a real legacy SDK DOMNode, but for the purposes of
 * the test we just need something that presents as one, and doesn't need to
 * implement anything */ var FAKE_LEGACY_SDK_DOM_NODE = {};
var makeCrumb = function() {
    var overrides = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var attributes = overrides.attributes || {};
    var newCrumb = _object_spread({
        parentNode: null,
        nodeType: Node.ELEMENT_NODE,
        id: 1,
        pseudoType: '',
        shadowRootType: '',
        nodeName: 'body',
        nodeNameNicelyCased: 'body',
        legacyDomNode: FAKE_LEGACY_SDK_DOM_NODE,
        highlightNode: function() {},
        clearHighlight: function() {},
        getAttribute: function(x) {
            return attributes[x] || '';
        }
    }, overrides);
    return newCrumb;
};
describe('ElementsBreadcrumbs', function() {
    before(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.initializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    after(/*#__PURE__*/ _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_1__.deinitializeGlobalVars)()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
    describe('#determineElementTitle', function() {
        it('returns (text) for text nodes', function() {
            var node = makeCrumb({
                nodeType: Node.TEXT_NODE
            });
            var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, {
                main: '(text)',
                extras: {}
            });
        });
        it('returns <!--> for comments', function() {
            var node = makeCrumb({
                nodeType: Node.COMMENT_NODE
            });
            var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, {
                main: '<!-->',
                extras: {}
            });
        });
        it('returns <!doctype> for doctypes', function() {
            var node = makeCrumb({
                nodeType: Node.DOCUMENT_TYPE_NODE
            });
            var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, {
                main: '<!doctype>',
                extras: {}
            });
        });
        describe('for DOCUMENT_FRAGMENT_NODE types', function() {
            it('shows the shadowRoot if the document is a shadowRootType', function() {
                var node = makeCrumb({
                    nodeType: Node.DOCUMENT_FRAGMENT_NODE,
                    shadowRootType: 'shadowRoot',
                    nodeNameNicelyCased: 'test-elem'
                });
                var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: '#shadow-root',
                    extras: {}
                });
            });
            it('shows the nice name if there is not a shadow root', function() {
                var node = makeCrumb({
                    nodeType: Node.DOCUMENT_FRAGMENT_NODE,
                    shadowRootType: undefined,
                    nodeNameNicelyCased: 'test-elem'
                });
                var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: 'test-elem',
                    extras: {}
                });
            });
        });
        describe('for element nodes', function() {
            it('takes the nicely cased node name by default', function() {
                var node = makeCrumb({
                    nodeType: Node.ELEMENT_NODE,
                    nodeNameNicelyCased: 'div'
                });
                var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: 'div',
                    extras: {}
                });
            });
            it('uses the pseudoType if that is passed', function() {
                var node = makeCrumb({
                    nodeType: Node.ELEMENT_NODE,
                    pseudoType: 'test'
                });
                var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: '::test',
                    extras: {}
                });
            });
            it('adds the ID as an extra if present', function() {
                var node = makeCrumb({
                    nodeType: Node.ELEMENT_NODE,
                    nodeNameNicelyCased: 'div',
                    attributes: {
                        id: 'test'
                    }
                });
                var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: 'div',
                    extras: {
                        id: 'test'
                    }
                });
            });
            it('adds classes as extras if present', function() {
                var node = makeCrumb({
                    nodeType: Node.ELEMENT_NODE,
                    nodeNameNicelyCased: 'div',
                    attributes: {
                        class: 'class1 class2'
                    }
                });
                var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
                assert.deepEqual(title, {
                    main: 'div',
                    extras: {
                        classes: [
                            'class1',
                            'class2'
                        ]
                    }
                });
            });
        });
        it('falls back to the nicely cased name if the node is any other type', function() {
            var node = makeCrumb({
                nodeType: Node.CDATA_SECTION_NODE,
                nodeNameNicelyCased: 'not-special-cased-node-type'
            });
            var title = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.determineElementTitle(node);
            assert.deepEqual(title, {
                main: 'not-special-cased-node-type',
                extras: {}
            });
        });
    });
    describe('crumbsToRender', function() {
        it('returns an empty array when there is no selected node', function() {
            var result = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.crumbsToRender([], null);
            assert.deepEqual(result, []);
        });
        it('excludes the document node', function() {
            var documentCrumb = makeCrumb({
                nodeType: Node.DOCUMENT_NODE,
                id: 1,
                nodeName: 'document',
                nodeNameNicelyCased: 'document'
            });
            var bodyCrumb = makeCrumb({
                nodeType: Node.ELEMENT_NODE,
                id: 2,
                nodeName: 'body',
                nodeNameNicelyCased: 'body'
            });
            var result = _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbsUtils.crumbsToRender([
                documentCrumb,
                bodyCrumb
            ], bodyCrumb);
            assert.deepEqual(result, [
                {
                    title: {
                        main: 'body',
                        extras: {}
                    },
                    selected: true,
                    node: bodyCrumb,
                    originalNode: bodyCrumb.legacyDomNode
                }
            ]);
        });
    });
    describe('rendering breadcrumbs', function() {
        var renderBreadcrumbs = function renderBreadcrumbs(data) {
            return _renderBreadcrumbs.apply(this, arguments);
        };
        function _renderBreadcrumbs() {
            _renderBreadcrumbs = _async_to_generator(function(data) {
                var component;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
                            component.data = data;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            assert.isNotNull(component.shadowRoot);
                            return [
                                2,
                                {
                                    component: component,
                                    shadowRoot: component.shadowRoot
                                }
                            ];
                    }
                });
            });
            return _renderBreadcrumbs.apply(this, arguments);
        }
        var bodyCrumb = makeCrumb({
            nodeType: Node.ELEMENT_NODE,
            id: 2,
            nodeName: 'body',
            nodeNameNicelyCased: 'body'
        });
        var divCrumb = makeCrumb({
            nodeType: Node.ELEMENT_NODE,
            id: 3,
            nodeName: 'div',
            nodeNameNicelyCased: 'div',
            attributes: {
                id: 'test-id'
            }
        });
        it('renders all the breadcrumbs provided', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, crumbs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderBreadcrumbs({
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        crumbs = Array.from(shadowRoot.querySelectorAll('[data-crumb]'));
                        assert.lengthOf(crumbs, 2);
                        return [
                            2
                        ];
                }
            });
        }));
        it('highlights the active breadcrumb', /*#__PURE__*/ _async_to_generator(function() {
            var shadowRoot, activeCrumbs;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderBreadcrumbs({
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            })
                        ];
                    case 1:
                        shadowRoot = _state.sent().shadowRoot;
                        activeCrumbs = shadowRoot.querySelectorAll('.crumb.selected');
                        assert.lengthOf(activeCrumbs, 1);
                        return [
                            2
                        ];
                }
            });
        }));
        it('updates the text if a crumb\'s title changes', /*#__PURE__*/ _async_to_generator(function() {
            var _ref, component, shadowRoot;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            renderBreadcrumbs({
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            })
                        ];
                    case 1:
                        _ref = _state.sent(), component = _ref.component, shadowRoot = _ref.shadowRoot;
                        return [
                            4,
                            (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(shadowRoot, function() {
                                var _ref = _async_to_generator(function(shadowRoot) {
                                    var newDiv, renderedTextForUpdatedCrumb;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                newDiv = _object_spread_props(_object_spread({}, divCrumb), {
                                                    nodeName: 'span',
                                                    nodeNameNicelyCased: 'span'
                                                });
                                                component.data = {
                                                    crumbs: [
                                                        newDiv,
                                                        bodyCrumb
                                                    ],
                                                    selectedNode: bodyCrumb
                                                };
                                                return [
                                                    4,
                                                    coordinator.done()
                                                ];
                                            case 1:
                                                _state.sent();
                                                renderedTextForUpdatedCrumb = shadowRoot.querySelector('.crumb:last-child devtools-node-text');
                                                assert.instanceOf(renderedTextForUpdatedCrumb, HTMLElement);
                                                assert.strictEqual(renderedTextForUpdatedCrumb.dataset.nodeTitle, 'span');
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                });
                                return function(shadowRoot) {
                                    return _ref.apply(this, arguments);
                                };
                            }())
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        describe('when the breadcrumbs overflow', function() {
            var bodyCrumb = makeCrumb({
                nodeType: Node.ELEMENT_NODE,
                id: 2,
                nodeName: 'body',
                nodeNameNicelyCased: 'body',
                attributes: {
                    class: 'test-class-1 test-class-2 test-class-3'
                }
            });
            var divCrumb = makeCrumb({
                nodeType: Node.ELEMENT_NODE,
                id: 3,
                nodeName: 'div',
                nodeNameNicelyCased: 'div',
                attributes: {
                    id: 'test-id-with-a-really-long-name'
                }
            });
            it('shows the scrolling icons if the crumbs do not fit in their container', /*#__PURE__*/ _async_to_generator(function() {
                var thinWrapper, component, scrollButtons, leftButton, rightButton;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            thinWrapper = document.createElement('div');
                            thinWrapper.style.width = '400px';
                            component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                            thinWrapper.appendChild(component);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                            component.data = {
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            };
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            assert.isNotNull(component.shadowRoot);
                            scrollButtons = component.shadowRoot.querySelectorAll('button.overflow');
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.assertElements)(scrollButtons, HTMLButtonElement);
                            assert.strictEqual(scrollButtons.length, 2, 'there are two scroll buttons');
                            leftButton = scrollButtons[0];
                            rightButton = scrollButtons[1];
                            assert.isTrue(leftButton.disabled);
                            assert.isFalse(rightButton.disabled);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('disables the right button once the user has scrolled to the end', /*#__PURE__*/ _async_to_generator(function() {
                var thinWrapper, component, rightButton;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            thinWrapper = document.createElement('div');
                            thinWrapper.style.width = '400px';
                            component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                            thinWrapper.appendChild(component);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                            component.data = {
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            };
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            assert.isNotNull(component.shadowRoot);
                            rightButton = component.shadowRoot.querySelector('button.overflow.right');
                            assert.instanceOf(rightButton, HTMLButtonElement);
                            assert.isFalse(rightButton.disabled);
                            return [
                                4,
                                (0,_testing_MutationHelpers_js__WEBPACK_IMPORTED_MODULE_2__.withNoMutations)(component.shadowRoot, function() {
                                    var _ref = _async_to_generator(function(shadowRoot) {
                                        var scrollWrapper;
                                        return _ts_generator(this, function(_state) {
                                            switch(_state.label){
                                                case 0:
                                                    (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.dispatchClickEvent)(rightButton);
                                                    scrollWrapper = shadowRoot.querySelector('.crumbs-window');
                                                    assert.instanceOf(scrollWrapper, HTMLDivElement);
                                                    return [
                                                        4,
                                                        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.waitForScrollLeft)(scrollWrapper, 100)
                                                    ];
                                                case 1:
                                                    _state.sent();
                                                    return [
                                                        4,
                                                        coordinator.done()
                                                    ];
                                                case 2:
                                                    _state.sent();
                                                    assert.isTrue(rightButton.disabled);
                                                    return [
                                                        2
                                                    ];
                                            }
                                        });
                                    });
                                    return function(shadowRoot) {
                                        return _ref.apply(this, arguments);
                                    };
                                }())
                            ];
                        case 2:
                            _state.sent();
                            return [
                                2
                            ];
                    }
                });
            }));
            it('hides the overflow buttons should the user resize the window to be large enough', /*#__PURE__*/ _async_to_generator(function() {
                var thinWrapper, component, leftButton, rightButton;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            thinWrapper = document.createElement('div');
                            thinWrapper.style.width = '400px';
                            component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                            thinWrapper.appendChild(component);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                            component.data = {
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            };
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            assert.isNotNull(component.shadowRoot);
                            leftButton = component.shadowRoot.querySelector('button.overflow.left');
                            assert.instanceOf(leftButton, HTMLButtonElement);
                            rightButton = component.shadowRoot.querySelector('button.overflow.right');
                            assert.instanceOf(rightButton, HTMLButtonElement);
                            assert.isFalse(leftButton.classList.contains('hidden'));
                            assert.isFalse(rightButton.classList.contains('hidden'));
                            thinWrapper.style.width = '800px';
                            // Changing the width should trigger the resize observer, so we need to wait for that to happen.
                            return [
                                4,
                                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.doubleRaf)()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            assert.isTrue(leftButton.classList.contains('hidden'));
                            assert.isTrue(rightButton.classList.contains('hidden'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('hides the overflow should the list of nodes change so the crumbs no longer overflow', /*#__PURE__*/ _async_to_generator(function() {
                var thinWrapper, component, leftButton, rightButton;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            thinWrapper = document.createElement('div');
                            thinWrapper.style.width = '400px';
                            component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                            thinWrapper.appendChild(component);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                            component.data = {
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            };
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            assert.isNotNull(component.shadowRoot);
                            leftButton = component.shadowRoot.querySelector('button.overflow.left');
                            assert.instanceOf(leftButton, HTMLButtonElement);
                            rightButton = component.shadowRoot.querySelector('button.overflow.right');
                            assert.instanceOf(rightButton, HTMLButtonElement);
                            // Ensure the buttons are visible now
                            assert.isFalse(leftButton.classList.contains('hidden'));
                            assert.isFalse(rightButton.classList.contains('hidden'));
                            component.data = {
                                crumbs: [
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            };
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            // The buttons are hidden now the list is no longer overflowing
                            assert.isTrue(leftButton.classList.contains('hidden'));
                            assert.isTrue(rightButton.classList.contains('hidden'));
                            return [
                                2
                            ];
                    }
                });
            }));
            it('shows the overflow buttons should the user resize the window down to be small', /*#__PURE__*/ _async_to_generator(function() {
                var thinWrapper, component, leftButton, rightButton;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            thinWrapper = document.createElement('div');
                            thinWrapper.style.width = '800px';
                            component = new _components_js__WEBPACK_IMPORTED_MODULE_4__.ElementsBreadcrumbs.ElementsBreadcrumbs();
                            thinWrapper.appendChild(component);
                            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(thinWrapper);
                            component.data = {
                                crumbs: [
                                    divCrumb,
                                    bodyCrumb
                                ],
                                selectedNode: bodyCrumb
                            };
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            assert.isNotNull(component.shadowRoot);
                            leftButton = component.shadowRoot.querySelector('button.overflow.left');
                            assert.instanceOf(leftButton, HTMLButtonElement);
                            rightButton = component.shadowRoot.querySelector('button.overflow.right');
                            assert.instanceOf(rightButton, HTMLButtonElement);
                            assert.isTrue(leftButton.classList.contains('hidden'));
                            assert.isTrue(rightButton.classList.contains('hidden'));
                            thinWrapper.style.width = '400px';
                            // Give the resize observer time to fire.
                            return [
                                4,
                                (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.doubleRaf)()
                            ];
                        case 2:
                            _state.sent();
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 3:
                            _state.sent();
                            assert.isFalse(leftButton.classList.contains('hidden'));
                            assert.isFalse(rightButton.classList.contains('hidden'));
                            return [
                                2
                            ];
                    }
                });
            }));
        });
    });
}); //# sourceMappingURL=ElementsBreadcrumbs.test.js.map


}),
"./panels/elements/components/Helper.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  legacyNodeToElementsComponentsNode: function() { return legacyNodeToElementsComponentsNode; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var legacyNodeToElementsComponentsNode = function(node) {
    return {
        parentNode: node.parentNode ? legacyNodeToElementsComponentsNode(node.parentNode) : null,
        id: node.id,
        nodeType: node.nodeType(),
        pseudoType: node.pseudoType(),
        shadowRootType: node.shadowRootType(),
        nodeName: node.nodeName(),
        nodeNameNicelyCased: node.nodeNameInCorrectCase(),
        legacyDomNode: node,
        highlightNode: function(mode) {
            return node.highlight(mode);
        },
        clearHighlight: function() {
            return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
        },
        getAttribute: node.getAttribute.bind(node)
    };
}; //# sourceMappingURL=Helper.js.map


}),
"./panels/elements/components/LayoutPaneUtils.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=LayoutPaneUtils.js.map


}),
"./panels/elements/components/components.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AccessibilityTreeNode: function() { return /* reexport module object */ _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__; },
  AdornerManager: function() { return /* reexport module object */ _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__; },
  AdornerSettingsPane: function() { return /* reexport module object */ _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__; },
  AnchorFunctionLinkSwatch: function() { return /* reexport module object */ _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__; },
  CSSHintDetailsView: function() { return /* reexport module object */ _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__; },
  CSSPropertyDocsView: function() { return /* reexport module object */ _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__; },
  CSSPropertyIconResolver: function() { return /* reexport module object */ _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__; },
  CSSQuery: function() { return /* reexport module object */ _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__; },
  CSSVariableValueView: function() { return /* reexport module object */ _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__; },
  ComputedStyleProperty: function() { return /* reexport module object */ _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__; },
  ComputedStyleTrace: function() { return /* reexport module object */ _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__; },
  ElementsBreadcrumbs: function() { return /* reexport module object */ _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__; },
  ElementsBreadcrumbsUtils: function() { return /* reexport module object */ _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__; },
  ElementsTreeExpandButton: function() { return /* reexport module object */ _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__; },
  Helper: function() { return /* reexport module object */ _Helper_js__WEBPACK_IMPORTED_MODULE_14__; },
  LayoutPane: function() { return /* reexport module object */ _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__; },
  LayoutPaneUtils: function() { return /* reexport module object */ _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__; },
  QueryContainer: function() { return /* reexport module object */ _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__; },
  StylePropertyEditor: function() { return /* reexport module object */ _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__; }
});
/* harmony import */var _AccessibilityTreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessibilityTreeNode.js */ "./panels/elements/components/AccessibilityTreeNode.js");
/* harmony import */var _AdornerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdornerManager.js */ "./panels/elements/components/AdornerManager.js");
/* harmony import */var _AdornerSettingsPane_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdornerSettingsPane.js */ "./panels/elements/components/AdornerSettingsPane.js");
/* harmony import */var _AnchorFunctionLinkSwatch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnchorFunctionLinkSwatch.js */ "./panels/elements/components/AnchorFunctionLinkSwatch.js");
/* harmony import */var _ComputedStyleProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ComputedStyleProperty.js */ "./panels/elements/components/ComputedStyleProperty.js");
/* harmony import */var _ComputedStyleTrace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ComputedStyleTrace.js */ "./panels/elements/components/ComputedStyleTrace.js");
/* harmony import */var _CSSHintDetailsView_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CSSHintDetailsView.js */ "./panels/elements/components/CSSHintDetailsView.js");
/* harmony import */var _CSSPropertyDocsView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CSSPropertyDocsView.js */ "./panels/elements/components/CSSPropertyDocsView.js");
/* harmony import */var _CSSPropertyIconResolver_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CSSPropertyIconResolver.js */ "./panels/elements/components/CSSPropertyIconResolver.js");
/* harmony import */var _CSSQuery_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CSSQuery.js */ "./panels/elements/components/CSSQuery.js");
/* harmony import */var _CSSVariableValueView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CSSVariableValueView.js */ "./panels/elements/components/CSSVariableValueView.js");
/* harmony import */var _ElementsBreadcrumbs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ElementsBreadcrumbs.js */ "./panels/elements/components/ElementsBreadcrumbs.js");
/* harmony import */var _ElementsBreadcrumbsUtils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ElementsBreadcrumbsUtils.js */ "./panels/elements/components/ElementsBreadcrumbsUtils.js");
/* harmony import */var _ElementsTreeExpandButton_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ElementsTreeExpandButton.js */ "./panels/elements/components/ElementsTreeExpandButton.js");
/* harmony import */var _Helper_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Helper.js */ "./panels/elements/components/Helper.js");
/* harmony import */var _LayoutPane_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./LayoutPane.js */ "./panels/elements/components/LayoutPane.js");
/* harmony import */var _LayoutPaneUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./LayoutPaneUtils.js */ "./panels/elements/components/LayoutPaneUtils.js");
/* harmony import */var _QueryContainer_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./QueryContainer.js */ "./panels/elements/components/QueryContainer.js");
/* harmony import */var _StylePropertyEditor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./StylePropertyEditor.js */ "./panels/elements/components/StylePropertyEditor.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.



















 //# sourceMappingURL=components.js.map


}),

}]);