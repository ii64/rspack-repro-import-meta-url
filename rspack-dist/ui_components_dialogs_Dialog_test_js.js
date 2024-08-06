"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_dialogs_Dialog_test_js"], {
"./ui/components/dialogs/Dialog.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render_coordinator/render_coordinator.js */ "./ui/components/render_coordinator/render_coordinator.js");
/* harmony import */var _dialogs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialogs.js */ "./ui/components/dialogs/dialogs.js");
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

 // eslint-disable-line rulesdir/es_modules_import


var coordinator = _render_coordinator_render_coordinator_js__WEBPACK_IMPORTED_MODULE_2__.RenderCoordinator.RenderCoordinator.instance();
var DialogExampleWindowBoundsServiceFactory = /*#__PURE__*/ function() {
    "use strict";
    function DialogExampleWindowBoundsServiceFactory(boundingElement) {
        _class_call_check(this, DialogExampleWindowBoundsServiceFactory);
        _define_property(this, "boundingElement", void 0);
        this.boundingElement = boundingElement;
    }
    _create_class(DialogExampleWindowBoundsServiceFactory, [
        {
            key: "getDevToolsBoundingElement",
            value: function getDevToolsBoundingElement() {
                return this.boundingElement;
            }
        }
    ]);
    return DialogExampleWindowBoundsServiceFactory;
}();
describe('Dialog', function() {
    describe('positioning', function() {
        var dialog;
        var container;
        var host;
        beforeEach(function() {
            dialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
            container = document.createElement('div');
            container.style.width = '500px';
            container.style.height = '500px';
            container.style.display = 'flex';
            container.style.alignItems = 'center';
            container.style.justifyContent = 'center';
            host = document.createElement('div');
            host.textContent = 'Hover me';
            host.style.width = '100px';
            host.style.height = '100px';
            dialog.position = "top" /* Dialogs.Dialog.DialogVerticalPosition.TOP */ ;
            dialog.showConnector = true;
            dialog.origin = host;
        });
        it('places the Dialog hit area correctly', /*#__PURE__*/ _async_to_generator(function() {
            var hostBounds, hitAreaBounds;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        host.addEventListener('click', function() {
                            return dialog.setDialogVisible(true);
                        });
                        dialog.addEventListener('clickoutsidedialog', function() {
                            return dialog.setDialogVisible(false);
                        });
                        container.appendChild(host);
                        container.appendChild(dialog);
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        hostBounds = host.getBoundingClientRect();
                        hitAreaBounds = dialog.getHitArea();
                        // Make sure the hit area contains the host fully.
                        assert.isAtMost(hitAreaBounds.top, hostBounds.top);
                        assert.isAtLeast(hitAreaBounds.bottom, hostBounds.top + hostBounds.height);
                        assert.isAtMost(hitAreaBounds.left, hostBounds.left);
                        assert.isAtLeast(hitAreaBounds.right, hostBounds.left + hostBounds.width);
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets the automatic horizontal alignment correctly', /*#__PURE__*/ _async_to_generator(function() {
            var content;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Create the container for the dialog and its origin (host).
                        // This container will be set as the dialog's "window".
                        // With the host in the left border of the window, the Dialog
                        // should deploy from left to right (left horizontal alignment).
                        container.style.display = 'block';
                        host.style.position = 'relative';
                        host.style.left = '0';
                        content = document.createElement('div');
                        content.classList.add('dialog-content');
                        content.style.padding = '0 1em';
                        content.innerHTML = 'Hi';
                        dialog.horizontalAlignment = "auto" /* Dialogs.Dialog.DialogHorizontalAlignment.AUTO */ ;
                        dialog.showConnector = true;
                        dialog.origin = host;
                        // Set the dialog's "window" to be the container element we just created.
                        dialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
                        host.addEventListener('click', function() {
                            return dialog.setDialogVisible(true);
                        });
                        dialog.addEventListener('clickoutsidedialog', function() {
                            return dialog.setDialogVisible(false);
                        });
                        dialog.appendChild(content);
                        container.appendChild(host);
                        container.appendChild(dialog);
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // Open the dialog and check its position.
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        // Test the dialog is deployed left to right, since this way there is more space.
                        assert.strictEqual(dialog.bestHorizontalAlignment, "left" /* Dialogs.Dialog.DialogHorizontalAlignment.LEFT */ );
                        // Close the dialog
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(dialog, {
                            key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY,
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 3:
                        _state.sent();
                        // With the host in the right border of the window, the Dialog
                        // should deploy from right to left (left horizontal alignment).
                        host.style.position = 'relative';
                        host.style.left = '450px';
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 4:
                        _state.sent();
                        // Open the dialog and check its position.
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 5:
                        _state.sent();
                        // Test the dialog is deployed right to left.
                        assert.strictEqual(dialog.bestHorizontalAlignment, "right" /* Dialogs.Dialog.DialogHorizontalAlignment.RIGHT */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets the automatic vertical position correctly when it fits on top', /*#__PURE__*/ _async_to_generator(function() {
            var content;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Create the container for the dialog and its origin (host), aligning
                        // items to the bottom of the container. This container will be set as the
                        // dialog's "window".
                        // By default the dialog is placed at the bottom of its origin, but doing
                        // so means it wouldn't fit in its window. Because if shown on top would
                        // fit in its window it should be automatically positioned there.
                        container.style.width = '150px';
                        container.style.height = '300px';
                        container.style.display = 'flex';
                        container.style.alignItems = 'end';
                        container.style.justifyContent = 'center';
                        // The dialogs content dimensions exceed the viewport's
                        content = document.createElement('div');
                        content.classList.add('dialog-content');
                        content.style.padding = '0 1em';
                        content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
                        dialog.position = "auto" /* Dialogs.Dialog.DialogVerticalPosition.AUTO */ ;
                        dialog.showConnector = true;
                        dialog.origin = host;
                        // Set the dialog's "window" to be the container element we just created.
                        dialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
                        host.addEventListener('click', function() {
                            return dialog.setDialogVisible(true);
                        });
                        dialog.addEventListener('clickoutsidedialog', function() {
                            return dialog.setDialogVisible(false);
                        });
                        dialog.appendChild(content);
                        container.appendChild(host);
                        container.appendChild(dialog);
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // Open the dialog and check its position.
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        // Test the capped dimensions
                        assert.strictEqual(dialog.bestVerticalPosition, "top" /* Dialogs.Dialog.DialogVerticalPosition.TOP */ );
                        return [
                            2
                        ];
                }
            });
        }));
        it('sets the automatic vertical position correctly when it does not fit on top', /*#__PURE__*/ _async_to_generator(function() {
            var content;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        // Create the container for the dialog and its origin (host), aligning
                        // items to the bottom of the container. This container will be set as the
                        // dialog's "window".
                        // Because the dialog's full height cannot be fully fit at the
                        // bottom or at the top it is positioned at the bottom and the
                        // overflow made visible by scrolling.
                        container.style.width = '150px';
                        container.style.height = '80px';
                        container.style.display = 'flex';
                        container.style.alignItems = 'end';
                        container.style.justifyContent = 'center';
                        // The dialogs content dimensions exceed the viewport's
                        content = document.createElement('div');
                        content.classList.add('dialog-content');
                        content.style.padding = '0 1em';
                        content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
                        dialog.position = "auto" /* Dialogs.Dialog.DialogVerticalPosition.AUTO */ ;
                        dialog.showConnector = true;
                        dialog.origin = host;
                        // Set the dialog's "window" to be the container element we just created.
                        dialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
                        host.addEventListener('click', function() {
                            return dialog.setDialogVisible(true);
                        });
                        dialog.addEventListener('clickoutsidedialog', function() {
                            return dialog.setDialogVisible(false);
                        });
                        dialog.appendChild(content);
                        container.appendChild(host);
                        container.appendChild(dialog);
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        // Open the dialog and check its position.
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        // Test the capped dimensions
                        assert.strictEqual(dialog.bestVerticalPosition, "bottom" /* Dialogs.Dialog.DialogVerticalPosition.BOTTOM */ );
                        return [
                            2
                        ];
                }
            });
        }));
        // Fails on bots https://crbug.com/1441801.
        it.skip('[crbug.com/1441801]: sets the max width and height correctly when the dialog\'s content dimensions exceed the viewport and the dialog is displayed as a modal', /*#__PURE__*/ _async_to_generator(function() {
            var _devtoolsDialog_shadowRoot, devtoolsDialog, WINDOW_WIDTH, host, content, dialog;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        devtoolsDialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
                        WINDOW_WIDTH = 500;
                        // This container will be set as the dialog's "window", or the representation
                        // of DevTools bounding element.
                        container.style.width = "".concat(WINDOW_WIDTH, "px");
                        container.style.height = "".concat(WINDOW_WIDTH, "px");
                        host = document.createElement('div');
                        host.textContent = 'Hover me';
                        host.style.width = '100px';
                        content = document.createElement('div');
                        content.classList.add('dialog-content');
                        content.style.width = '600px';
                        content.style.height = '600px';
                        content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
                        devtoolsDialog.origin = _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.MODAL;
                        // Set the dialog's "window" to be the container element we just created.
                        devtoolsDialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
                        host.addEventListener('click', function() {
                            return devtoolsDialog.setDialogVisible(true);
                        });
                        devtoolsDialog.addEventListener('clickoutsidedialog', function() {
                            return devtoolsDialog.setDialogVisible(false);
                        });
                        container.appendChild(host);
                        container.appendChild(devtoolsDialog);
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        devtoolsDialog.appendChild(content);
                        // Open the dialog and check its position.
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog');
                        if (!dialog) {
                            assert.fail('Dialog not found');
                            return [
                                2
                            ];
                        }
                        assert.strictEqual(dialog.clientWidth, WINDOW_WIDTH - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW + 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING);
                        assert.strictEqual(dialog.clientHeight, WINDOW_WIDTH - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW + 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_VERTICAL_PADDING);
                        return [
                            2
                        ];
                }
            });
        }));
        describe('with an anchor and possible overflow', function() {
            var CONTAINER_WIDTH = 500;
            var HOST_OFFSET = 100;
            var HOST_HEIGHT = 100;
            var devtoolsDialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
            var host;
            var container;
            beforeEach(/*#__PURE__*/ _async_to_generator(function() {
                var content;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            // This container will be set as the dialog's "window", or the representation
                            // of DevTools bounding element.
                            container = document.createElement('div');
                            container.style.width = "".concat(CONTAINER_WIDTH, "px");
                            container.style.height = "".concat(CONTAINER_WIDTH, "px");
                            container.style.position = 'fixed';
                            container.style.top = '0';
                            container.style.left = '0';
                            host = document.createElement('div');
                            host.textContent = 'Click me';
                            host.style.width = "".concat(HOST_HEIGHT, "px");
                            host.style.height = "".concat(HOST_HEIGHT, "px");
                            host.style.position = 'absolute';
                            host.style.top = "".concat(HOST_OFFSET, "px");
                            host.style.left = "".concat(HOST_OFFSET, "px");
                            // The dialogs content dimensions exceed the container's
                            content = document.createElement('div');
                            content.classList.add('dialog-content');
                            content.style.width = '600px';
                            content.style.height = '600px';
                            content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
                            devtoolsDialog.origin = host;
                            devtoolsDialog.horizontalAlignment = "center" /* Dialogs.Dialog.DialogHorizontalAlignment.CENTER */ ;
                            // Set the dialog's "window" to be the container element we just created.
                            devtoolsDialog.windowBoundsService = new DialogExampleWindowBoundsServiceFactory(container);
                            host.addEventListener('click', function() {
                                return devtoolsDialog.setDialogVisible(true);
                            });
                            devtoolsDialog.addEventListener('clickoutsidedialog', function() {
                                return devtoolsDialog.setDialogVisible(false);
                            });
                            container.appendChild(host);
                            container.appendChild(devtoolsDialog);
                            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            devtoolsDialog.appendChild(content);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets the max width and height correctly when the dialog\'s content dimensions exceed the viewport and the dialog is anchored to the left', /*#__PURE__*/ _async_to_generator(function() {
                var _devtoolsDialog_shadowRoot, dialog, _dialog_getBoundingClientRect, dialogLeft, dialogWidth, dialogLeftBorderLimitPosition;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            devtoolsDialog.horizontalAlignment = "left" /* Dialogs.Dialog.DialogHorizontalAlignment.LEFT */ ;
                            // Open the dialog and check its position.
                            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog');
                            if (!dialog) {
                                assert.fail('Dialog not found');
                                return [
                                    2
                                ];
                            }
                            // Test the capped dimensions
                            _dialog_getBoundingClientRect = dialog.getBoundingClientRect(), dialogLeft = _dialog_getBoundingClientRect.left, dialogWidth = _dialog_getBoundingClientRect.width;
                            dialogLeftBorderLimitPosition = dialogWidth + dialogLeft + _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW - 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING;
                            assert.strictEqual(dialogLeftBorderLimitPosition, CONTAINER_WIDTH);
                            assert.strictEqual(dialog.clientHeight, CONTAINER_WIDTH - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.CONNECTOR_HEIGHT - HOST_HEIGHT - HOST_OFFSET + 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_VERTICAL_PADDING);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets the max width and height correctly when the dialog\'s content dimensions exceed the viewport and the dialog is anchored to the right', /*#__PURE__*/ _async_to_generator(function() {
                var _devtoolsDialog_shadowRoot, dialog, dialogRight, containerLeft;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            devtoolsDialog.horizontalAlignment = "right" /* Dialogs.Dialog.DialogHorizontalAlignment.RIGHT */ ;
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            // Open the dialog and check its position.
                            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog');
                            if (!dialog) {
                                assert.fail('Dialog not found');
                                return [
                                    2
                                ];
                            }
                            // Test the capped dimensions
                            dialogRight = host.getBoundingClientRect().right;
                            containerLeft = container.getBoundingClientRect().left;
                            assert.strictEqual(dialog.clientWidth, dialogRight - containerLeft - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW + 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets the dialog\'s horizontal position correctly to prevent overlap with DevTools when alinged to the left.', /*#__PURE__*/ _async_to_generator(function() {
                var _devtoolsDialog_shadowRoot, dialog, dialogLeft, containerLeft;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            devtoolsDialog.horizontalAlignment = "left" /* Dialogs.Dialog.DialogHorizontalAlignment.LEFT */ ;
                            host.style.left = '-10px';
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            // Open the dialog and check its position.
                            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog');
                            if (!dialog) {
                                assert.fail('Dialog not found');
                                return [
                                    2
                                ];
                            }
                            // Test the capped dimensions
                            dialogLeft = dialog.getBoundingClientRect().left;
                            containerLeft = container.getBoundingClientRect().left;
                            assert.isAtLeast(dialogLeft, containerLeft);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets the dialog\'s horizontal position correctly to prevent overlap with DevTools when alinged to the right.', /*#__PURE__*/ _async_to_generator(function() {
                var _devtoolsDialog_shadowRoot, containerWidth, dialog, dialogRight, dialogRightEdgePosition;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            devtoolsDialog.horizontalAlignment = "right" /* Dialogs.Dialog.DialogHorizontalAlignment.RIGHT */ ;
                            containerWidth = container.clientWidth;
                            host.style.left = "".concat(containerWidth + 10, "px");
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            // Open the dialog and check its position.
                            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog');
                            if (!dialog) {
                                assert.fail('Dialog not found');
                                return [
                                    2
                                ];
                            }
                            // Test the capped dimensions
                            dialogRight = dialog.getBoundingClientRect().right;
                            dialogRightEdgePosition = dialogRight - 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW / 2;
                            assert.isAtMost(dialogRightEdgePosition, containerWidth);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets the dialog\'s horizontal position correctly to prevent overlapping with DevTools on the right when alinged to the center.', /*#__PURE__*/ _async_to_generator(function() {
                var _devtoolsDialog_shadowRoot, containerWidth, dialog, dialogRight, dialogRightEdgePosition;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            containerWidth = container.clientWidth;
                            host.style.left = "".concat(containerWidth + 260, "px");
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            // Open the dialog and check its position.
                            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog');
                            if (!dialog) {
                                assert.fail('Dialog not found');
                                return [
                                    2
                                ];
                            }
                            // Test the capped dimensions
                            dialogRight = dialog.getBoundingClientRect().right;
                            dialogRightEdgePosition = dialogRight - 2 * _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_SIDE_PADDING - _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.DIALOG_PADDING_FROM_WINDOW / 2;
                            assert.isAtMost(dialogRightEdgePosition, containerWidth);
                            return [
                                2
                            ];
                    }
                });
            }));
            it('sets the dialog\'s horizontal position correctly to prevent overlapping with DevTools on the left when alinged to the center.', /*#__PURE__*/ _async_to_generator(function() {
                var _devtoolsDialog_shadowRoot, dialog, containerLeft, dialogLeft;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            host.style.left = '-260px';
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 1:
                            _state.sent();
                            // Open the dialog and check its position.
                            _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                            return [
                                4,
                                coordinator.done()
                            ];
                        case 2:
                            _state.sent();
                            dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog');
                            if (!dialog) {
                                assert.fail('Dialog not found');
                                return [
                                    2
                                ];
                            }
                            // Test the capped dimensions
                            containerLeft = container.getBoundingClientRect().left;
                            dialogLeft = dialog.getBoundingClientRect().left;
                            assert.isAtLeast(dialogLeft, containerLeft);
                            return [
                                2
                            ];
                    }
                });
            }));
        });
        it('updates the dialog client rect automatically when its dimensions change', /*#__PURE__*/ _async_to_generator(function() {
            var dialogContent, initialWidth, initialHeight, finalWidth, finalHeight;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        host.addEventListener('click', function() {
                            return dialog.setDialogVisible(true);
                        });
                        dialogContent = document.createElement('div');
                        dialogContent.style.display = 'block';
                        dialogContent.style.minWidth = '10px';
                        dialogContent.style.minHeight = '10px';
                        dialogContent.style.fontSize = '10px';
                        dialogContent.innerText = 'Hello';
                        dialog.append(dialogContent);
                        container.appendChild(host);
                        container.appendChild(dialog);
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        initialWidth = dialog.getDialogBounds().width;
                        initialHeight = dialog.getDialogBounds().height;
                        // Increase the font size to increase the dialog's dimensions
                        dialogContent.style.fontSize = '200px';
                        // Wait for the resize handling to take effect.
                        return [
                            4,
                            new Promise(function(res) {
                                return setTimeout(res, 200);
                            })
                        ];
                    case 3:
                        _state.sent();
                        finalWidth = dialog.getDialogBounds().width;
                        finalHeight = dialog.getDialogBounds().height;
                        assert.isAbove(finalWidth, initialWidth);
                        assert.isAbove(finalHeight, initialHeight);
                        return [
                            2
                        ];
                }
            });
        }));
    });
    describe('closing the dialog with the ESC key', function() {
        var devtoolsDialog;
        beforeEach(/*#__PURE__*/ _async_to_generator(function() {
            var container, host, content;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        devtoolsDialog = new _dialogs_js__WEBPACK_IMPORTED_MODULE_3__.Dialog.Dialog();
                        container = document.createElement('div');
                        host = document.createElement('div');
                        content = document.createElement('div');
                        content.innerHTML = 'Hello, World<br/> I am <br/> a Dialog!';
                        devtoolsDialog.origin = host;
                        host.addEventListener('click', function() {
                            return devtoolsDialog.setDialogVisible(true);
                        });
                        devtoolsDialog.addEventListener('clickoutsidedialog', function() {
                            return devtoolsDialog.setDialogVisible(false);
                        });
                        container.appendChild(host);
                        container.appendChild(devtoolsDialog);
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.renderElementIntoDOM(container);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        devtoolsDialog.appendChild(content);
                        // Open the dialog.
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchClickEvent(host);
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 2:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        }));
        it('closes the dialog by default when the ESC key is pressed', /*#__PURE__*/ _async_to_generator(function() {
            var _devtoolsDialog_shadowRoot, _devtoolsDialog_shadowRoot1, dialog;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog[open]');
                        if (!dialog) {
                            assert.fail('Dialog not found');
                            return [
                                2
                            ];
                        }
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(dialog, {
                            key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY,
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        dialog = (_devtoolsDialog_shadowRoot1 = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot1 === void 0 ? void 0 : _devtoolsDialog_shadowRoot1.querySelector('dialog[open]');
                        if (dialog) {
                            assert.fail('Dialog did not close');
                            return [
                                2
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        }));
        it('closes the dialog by default when the ESC key is pressed from document.body', /*#__PURE__*/ _async_to_generator(function() {
            var _devtoolsDialog_shadowRoot, _devtoolsDialog_shadowRoot1, dialog;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog[open]');
                        if (!dialog) {
                            assert.fail('Dialog not found');
                            return [
                                2
                            ];
                        }
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(document.body, {
                            key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY,
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        dialog = (_devtoolsDialog_shadowRoot1 = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot1 === void 0 ? void 0 : _devtoolsDialog_shadowRoot1.querySelector('dialog[open]');
                        if (dialog) {
                            assert.fail('Dialog did not close');
                            return [
                                2
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        }));
        it('closes the dialog by default when the ESC key is pressed anywhere within the devtools bounding element', /*#__PURE__*/ _async_to_generator(function() {
            var _devtoolsDialog_shadowRoot, _devtoolsDialog_shadowRoot1, dialog, boundingElement;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog[open]');
                        if (!dialog) {
                            assert.fail('Dialog not found');
                            return [
                                2
                            ];
                        }
                        boundingElement = devtoolsDialog.windowBoundsService.getDevToolsBoundingElement();
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(boundingElement, {
                            key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY,
                            bubbles: true,
                            composed: true
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        dialog = (_devtoolsDialog_shadowRoot1 = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot1 === void 0 ? void 0 : _devtoolsDialog_shadowRoot1.querySelector('dialog[open]');
                        if (dialog) {
                            assert.fail('Dialog did not close');
                            return [
                                2
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        }));
        it('does not close the dialog when the ESC key is pressed if the closeOnESC prop is set to false', /*#__PURE__*/ _async_to_generator(function() {
            var _devtoolsDialog_shadowRoot, _devtoolsDialog_shadowRoot1, dialog;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        dialog = (_devtoolsDialog_shadowRoot = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot === void 0 ? void 0 : _devtoolsDialog_shadowRoot.querySelector('dialog[open]');
                        devtoolsDialog.closeOnESC = false;
                        if (!dialog) {
                            assert.fail('Dialog not found');
                            return [
                                2
                            ];
                        }
                        _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_1__.dispatchKeyDownEvent(dialog, {
                            key: _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.KeyboardUtilities.ESCAPE_KEY
                        });
                        return [
                            4,
                            coordinator.done()
                        ];
                    case 1:
                        _state.sent();
                        dialog = (_devtoolsDialog_shadowRoot1 = devtoolsDialog.shadowRoot) === null || _devtoolsDialog_shadowRoot1 === void 0 ? void 0 : _devtoolsDialog_shadowRoot1.querySelector('dialog[open]');
                        if (!dialog) {
                            assert.fail('Dialog was closed');
                            return [
                                2
                            ];
                        }
                        return [
                            2
                        ];
                }
            });
        }));
    });
}); //# sourceMappingURL=Dialog.test.js.map


}),

}]);