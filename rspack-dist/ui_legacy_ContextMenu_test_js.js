"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_ContextMenu_test_js"], {
"./ui/legacy/ContextMenu.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
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






function getContextMenuElement() {
    var container = document.querySelector('div[data-devtools-glass-pane]');
    var softMenuElement = container.shadowRoot.querySelector('.widget > .soft-context-menu');
    assert.instanceOf(softMenuElement, HTMLElement);
    return softMenuElement;
}
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_3__.describeWithEnvironment)('ContextMenu', function() {
    var menuItems;
    beforeEach(function() {
        menuItems = [
            {
                type: 'checkbox',
                id: 0,
                label: 'item0',
                checked: false
            },
            {
                type: 'checkbox',
                id: 1,
                label: 'item1',
                checked: false
            }
        ];
    });
    it('stays open after clicking on an item when keepOpen is true', function() {
        var softMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SoftContextMenu.SoftContextMenu(menuItems, function() {}, true);
        var contextMenuDiscardSpy = sinon.spy(softMenu, 'discard');
        softMenu.show(document, new AnchorBox(0, 0, 0, 0));
        var softMenuElement = getContextMenuElement();
        var item0 = softMenuElement.querySelector('[aria-label^="item0"]');
        assert.instanceOf(item0, HTMLElement);
        var item1 = softMenuElement.querySelector('[aria-label^="item1"]');
        assert.instanceOf(item1, HTMLElement);
        assert.isFalse(item0.hasAttribute('checked'));
        assert.isFalse(item1.hasAttribute('checked'));
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchMouseUpEvent)(item0);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchMouseUpEvent)(item1);
        assert.isTrue(item0.hasAttribute('checked'));
        assert.isTrue(item1.hasAttribute('checked'));
        assert.isTrue(!contextMenuDiscardSpy.called);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchMouseUpEvent)(item0);
        assert.isFalse(item0.hasAttribute('checked'));
        assert.isTrue(item1.hasAttribute('checked'));
        assert.isTrue(!contextMenuDiscardSpy.called);
        softMenu.discard();
    });
    it('closes after clicking on an item when keepOpen is false', function() {
        var softMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.SoftContextMenu.SoftContextMenu(menuItems, function() {}, false);
        var contextMenuDiscardSpy = sinon.spy(softMenu, 'discard');
        softMenu.show(document, new AnchorBox(0, 0, 0, 0));
        var softMenuElement = getContextMenuElement();
        var item0 = softMenuElement.querySelector('[aria-label^="item0"]');
        assert.instanceOf(item0, HTMLElement);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_2__.dispatchMouseUpEvent)(item0);
        assert.isTrue(contextMenuDiscardSpy.called);
        softMenu.discard();
    });
    it('uses hosted menu when possible', /*#__PURE__*/ _async_to_generator(function() {
        var showContextMenuAtPoint, event, contextMenu;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'isHostedMode').returns(false);
                    showContextMenuAtPoint = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'showContextMenuAtPoint');
                    event = new Event('contextmenu');
                    sinon.stub(event, 'target').value(document);
                    contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                    return [
                        4,
                        contextMenu.show()
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(showContextMenuAtPoint.called);
                    return [
                        2
                    ];
            }
        });
    }));
    it('logs impressions and clicks for hosted menu', /*#__PURE__*/ _async_to_generator(function() {
        var _throttler_process, _impressions_find, throttler, recordImpression, recordClick, event, contextMenu, impressions, menuId;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000000000);
                    return [
                        4,
                        _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.startLogging({
                            processingThrottler: throttler
                        })
                    ];
                case 1:
                    _state.sent();
                    sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'isHostedMode').returns(false);
                    sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'showContextMenuAtPoint');
                    recordImpression = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordImpression');
                    recordClick = sinon.stub(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance, 'recordClick');
                    event = new Event('contextmenu');
                    sinon.stub(event, 'target').value(document);
                    contextMenu = new _legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
                    contextMenu.defaultSection().appendItem('item 1', function() {}, {
                        jslogContext: '42'
                    });
                    contextMenu.defaultSection().appendItem('item 2', function() {}, {
                        jslogContext: '44'
                    });
                    return [
                        4,
                        contextMenu.show()
                    ];
                case 2:
                    _state.sent();
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 3:
                    _state.sent();
                    assert.exists(throttler.process);
                    return [
                        4,
                        (_throttler_process = throttler.process) === null || _throttler_process === void 0 ? void 0 : _throttler_process.call(throttler)
                    ];
                case 4:
                    _state.sent();
                    assert.isTrue(recordImpression.calledOnce);
                    impressions = recordImpression.firstCall.firstArg.impressions;
                    menuId = (_impressions_find = impressions.find(function(i) {
                        return !i.parent;
                    })) === null || _impressions_find === void 0 ? void 0 : _impressions_find.id;
                    assert.exists(menuId);
                    assert.sameDeepMembers(impressions.map(function(i) {
                        return _object_spread_props(_object_spread({}, i), {
                            id: 0
                        });
                    }), [
                        {
                            id: 0,
                            type: 67,
                            height: 0,
                            width: 0
                        },
                        {
                            id: 0,
                            type: 29,
                            parent: menuId,
                            context: 42,
                            height: 0,
                            width: 0
                        },
                        {
                            id: 0,
                            type: 29,
                            parent: menuId,
                            context: 44,
                            height: 0,
                            width: 0
                        }
                    ]);
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.events.dispatchEventToListeners(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHostAPI.Events.ContextMenuItemSelected, 1);
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 0);
                        })
                    ];
                case 5:
                    _state.sent();
                    assert.isTrue(recordClick.calledOnce);
                    return [
                        4,
                        _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.stopLogging()
                    ];
                case 6:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=ContextMenu.test.js.map


}),

}]);