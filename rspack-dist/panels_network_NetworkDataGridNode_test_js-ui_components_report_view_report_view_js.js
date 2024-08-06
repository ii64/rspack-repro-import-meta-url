"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkDataGridNode_test_js-ui_components_report_view_report_view_js"], {
"./panels/network/NetworkDataGridNode.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _network_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network.js */ "./panels/network/network.js");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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




(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.describeWithEnvironment)('NetworkLogView', function() {
    it('adds marker to requests with overridden headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker, tooltip;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(true);
            request.responseHeaders = [
                {
                    name: 'foo',
                    value: 'overridden'
                }
            ];
            request.originalResponseHeaders = [
                {
                    name: 'foo',
                    value: 'original'
                }
            ];
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            marker = el.querySelector('.network-override-marker');
            tooltip = el.querySelector('[title="Request headers are overridden"]');
            assert.instanceOf(marker, HTMLDivElement);
            assert.isNotNull(tooltip);
            return [
                2
            ];
        });
    }));
    it('adds marker to requests with overridden content', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker, tooltip;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(true);
            request.hasOverriddenContent = true;
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            marker = el.querySelector('.network-override-marker');
            tooltip = el.querySelector('[title="Request content is overridden"]');
            assert.instanceOf(marker, HTMLDivElement);
            assert.isNotNull(tooltip);
            return [
                2
            ];
        });
    }));
    it('adds marker to requests with overridden headers and content', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker, tooltip;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(true);
            request.hasOverriddenContent = true;
            request.responseHeaders = [
                {
                    name: 'foo',
                    value: 'overridden'
                }
            ];
            request.originalResponseHeaders = [
                {
                    name: 'foo',
                    value: 'original'
                }
            ];
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            marker = el.querySelector('.network-override-marker');
            tooltip = el.querySelector('[title="Both request content and headers are overridden"]');
            assert.instanceOf(marker, HTMLDivElement);
            assert.isNotNull(tooltip);
            return [
                2
            ];
        });
    }));
    it('does not add marker to unoverridden request', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            marker = el.querySelector('.network-override-marker');
            assert.isNull(marker);
            return [
                2
            ];
        });
    }));
    it('does not add a marker to requests which are intercepted but not overridden', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(true);
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            marker = el.querySelector('.network-override-marker');
            assert.isNull(marker);
            return [
                2
            ];
        });
    }));
    it('adds an error red icon to the left of the failed requests', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage, backgroundColorOfIcon;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 404;
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('cross-circle-filled.svg")', iconImage);
            backgroundColorOfIcon = iconStyle.backgroundColor.toString();
            assert.strictEqual(backgroundColorOfIcon, 'var(--icon-error)');
            return [
                2
            ];
        });
    }));
    it('show document icon', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage, backgroundColorOfIcon;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document);
            request.mimeType = 'text/html';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-document.svg")', iconImage);
            backgroundColorOfIcon = iconStyle.backgroundColor.toString();
            assert.strictEqual(backgroundColorOfIcon, 'var(--icon-file-document)');
            return [
                2
            ];
        });
    // TODO(barrypollard): Would be good to test the value of --icon-file-document
    // is correctly set to --sys-color-blue-bright. See https://crbug.com/346714111
    }));
    it('show media icon', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/test.mp3', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Media);
            request.mimeType = 'audio/mpeg';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-media.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('show wasm icon', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/test.wasm', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Wasm);
            request.mimeType = 'application/wasm';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-wasm.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('show websocket icon', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/ws', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.WebSocket);
            request.mimeType = '';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-websocket.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('shows fetch icon', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/test.json?keepalive=false', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch);
            request.mimeType = '';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-fetch-xhr.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('shows xhr icon', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/test.json?keepalive=false', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR);
            request.mimeType = 'application/octet-stream';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-fetch-xhr.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('mime win: show image preview icon for xhr-image', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, imagePreview;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/test.svg', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.XHR);
            request.mimeType = 'image/svg+xml';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon.image');
            imagePreview = el.querySelector('.image-network-icon-preview');
            assert.isTrue(_instanceof(iconElement, HTMLDivElement));
            assert.isTrue(_instanceof(imagePreview, HTMLImageElement));
            return [
                2
            ];
        });
    }));
    it('mime win: show document icon for fetch-html', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/page', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch);
            request.mimeType = 'text/html';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-document.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('mime win: show generic icon for preflight-text', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/api/test', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Preflight);
            request.mimeType = 'text/plain';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-generic.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('mime win: show script icon for other-javascript)', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/ping', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Other);
            request.mimeType = 'application/javascript';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-script.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('mime win: shows json icon for fetch-json', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, iconElement, iconStyle, indexOfIconImage, iconImage;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com/api/list', '', null, null, null);
            request.setResourceType(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch);
            request.mimeType = 'application/json';
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'name');
            iconElement = el.querySelector('.icon');
            iconStyle = iconElement.style;
            indexOfIconImage = iconStyle.webkitMaskImage.indexOf('Images/') + 7;
            iconImage = iconStyle.webkitMaskImage.substring(indexOfIconImage);
            assert.strictEqual('file-json.svg")', iconImage);
            return [
                2
            ];
        });
    }));
    it('shows the corresponding status text of a status code', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 305;
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'status');
            assert.strictEqual(el.title, '305 Use Proxy');
            return [
                2
            ];
        });
    }));
    it('populate has-overrides: headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(true);
            request.responseHeaders = [
                {
                    name: 'foo',
                    value: 'overridden'
                }
            ];
            request.originalResponseHeaders = [
                {
                    name: 'foo',
                    value: 'original'
                }
            ];
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'has-overrides');
            marker = el.innerText;
            assert.strictEqual(marker, 'headers');
            return [
                2
            ];
        });
    }));
    it('populate has-overrides: content', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(true);
            request.hasOverriddenContent = true;
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'has-overrides');
            marker = el.innerText;
            assert.strictEqual(marker, 'content');
            return [
                2
            ];
        });
    }));
    it('populate has-overrides: content, headers', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(true);
            request.hasOverriddenContent = true;
            request.responseHeaders = [
                {
                    name: 'foo',
                    value: 'overridden'
                }
            ];
            request.originalResponseHeaders = [
                {
                    name: 'foo',
                    value: 'original'
                }
            ];
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'has-overrides');
            marker = el.innerText;
            assert.strictEqual(marker, 'content, headers');
            return [
                2
            ];
        });
    }));
    it('populate has-overrides: null', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, marker;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.statusCode = 200;
            request.setWasIntercepted(false);
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'has-overrides');
            marker = el.innerText;
            assert.strictEqual(marker, '');
            return [
                2
            ];
        });
    }));
    it('only counts non-blocked response cookies', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.addExtraResponseInfo({
                responseHeaders: [
                    {
                        name: 'Set-Cookie',
                        value: 'good=123; Path=/; Secure; SameSite=None\nbad=456; Path=/; SameSite=None'
                    }
                ],
                blockedResponseCookies: [
                    {
                        blockedReasons: [
                            "SameSiteNoneInsecure" /* Protocol.Network.SetCookieBlockedReason.SameSiteNoneInsecure */ 
                        ],
                        cookie: null,
                        cookieLine: 'bad=456; Path=/; SameSite=None'
                    }
                ],
                resourceIPAddressSpace: "Public" /* Protocol.Network.IPAddressSpace.Public */ ,
                statusCode: undefined,
                cookiePartitionKey: undefined,
                cookiePartitionKeyOpaque: undefined,
                exemptedResponseCookies: undefined
            });
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'set-cookies');
            assert.strictEqual(el.innerText, '1');
            return [
                2
            ];
        });
    }));
    it('shows transferred size when the matched ServiceWorker router source is network', /*#__PURE__*/ _async_to_generator(function() {
        var request, networkRequestNode, el, tooltip, expected;
        return _ts_generator(this, function(_state) {
            request = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.NetworkRequest.NetworkRequest.create('requestId', 'https://www.example.com', '', null, null, null);
            request.resourceSize = 4;
            request.setTransferSize(2);
            request.statusCode = 200;
            request.serviceWorkerRouterInfo = {
                ruleIdMatched: 1,
                matchedSourceType: "network" /* Protocol.Network.ServiceWorkerRouterSource.Network */ 
            };
            networkRequestNode = new _network_js__WEBPACK_IMPORTED_MODULE_3__.NetworkDataGridNode.NetworkRequestNode({}, request);
            el = document.createElement('div');
            networkRequestNode.renderCell(el, 'size');
            assert.strictEqual(el.innerText, '(ServiceWorker router)4\xa0B');
            tooltip = el.getAttribute('title');
            expected = 'Matched to ServiceWorker router#1, 2\xa0B transferred over network, resource size: 4\xa0B';
            assert.strictEqual(tooltip, expected);
            return [
                2
            ];
        });
    }));
}); //# sourceMappingURL=NetworkDataGridNode.test.js.map


}),
"./panels/network/network.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BinaryResourceView: function() { return /* reexport module object */ _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__; },
  BlockedURLsPane: function() { return /* reexport module object */ _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__; },
  EventSourceMessagesView: function() { return /* reexport module object */ _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__; },
  NetworkConfigView: function() { return /* reexport module object */ _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__; },
  NetworkDataGridNode: function() { return /* reexport module object */ _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__; },
  NetworkFrameGrouper: function() { return /* reexport module object */ _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__; },
  NetworkItemView: function() { return /* reexport module object */ _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__; },
  NetworkLogView: function() { return /* reexport module object */ _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__; },
  NetworkLogViewColumns: function() { return /* reexport module object */ _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__; },
  NetworkManageCustomHeadersView: function() { return /* reexport module object */ _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__; },
  NetworkOverview: function() { return /* reexport module object */ _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__; },
  NetworkPanel: function() { return /* reexport module object */ _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__; },
  NetworkSearchScope: function() { return /* reexport module object */ _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__; },
  NetworkTimeCalculator: function() { return /* reexport module object */ _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__; },
  NetworkWaterfallColumn: function() { return /* reexport module object */ _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__; },
  RequestCookiesView: function() { return /* reexport module object */ _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__; },
  RequestHTMLView: function() { return /* reexport module object */ _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__; },
  RequestInitiatorView: function() { return /* reexport module object */ _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__; },
  RequestPayloadView: function() { return /* reexport module object */ _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__; },
  RequestPreviewView: function() { return /* reexport module object */ _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__; },
  RequestResponseView: function() { return /* reexport module object */ _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__; },
  RequestTimingView: function() { return /* reexport module object */ _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__; },
  ResourceWebSocketFrameView: function() { return /* reexport module object */ _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__; },
  SignedExchangeInfoView: function() { return /* reexport module object */ _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__; }
});
/* harmony import */var _BinaryResourceView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinaryResourceView.js */ "./panels/network/BinaryResourceView.js");
/* harmony import */var _BlockedURLsPane_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockedURLsPane.js */ "./panels/network/BlockedURLsPane.js");
/* harmony import */var _EventSourceMessagesView_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventSourceMessagesView.js */ "./panels/network/EventSourceMessagesView.js");
/* harmony import */var _NetworkConfigView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NetworkConfigView.js */ "./panels/network/NetworkConfigView.js");
/* harmony import */var _NetworkDataGridNode_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NetworkDataGridNode.js */ "./panels/network/NetworkDataGridNode.js");
/* harmony import */var _NetworkItemView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NetworkItemView.js */ "./panels/network/NetworkItemView.js");
/* harmony import */var _NetworkTimeCalculator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NetworkTimeCalculator.js */ "./panels/network/NetworkTimeCalculator.js");
/* harmony import */var _NetworkLogView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NetworkLogView.js */ "./panels/network/NetworkLogView.js");
/* harmony import */var _NetworkLogViewColumns_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NetworkLogViewColumns.js */ "./panels/network/NetworkLogViewColumns.js");
/* harmony import */var _NetworkFrameGrouper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NetworkFrameGrouper.js */ "./panels/network/NetworkFrameGrouper.js");
/* harmony import */var _NetworkManageCustomHeadersView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NetworkManageCustomHeadersView.js */ "./panels/network/NetworkManageCustomHeadersView.js");
/* harmony import */var _NetworkSearchScope_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NetworkSearchScope.js */ "./panels/network/NetworkSearchScope.js");
/* harmony import */var _NetworkWaterfallColumn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NetworkWaterfallColumn.js */ "./panels/network/NetworkWaterfallColumn.js");
/* harmony import */var _RequestCookiesView_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RequestCookiesView.js */ "./panels/network/RequestCookiesView.js");
/* harmony import */var _RequestHTMLView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestHTMLView.js */ "./panels/network/RequestHTMLView.js");
/* harmony import */var _RequestInitiatorView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./RequestInitiatorView.js */ "./panels/network/RequestInitiatorView.js");
/* harmony import */var _RequestResponseView_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./RequestResponseView.js */ "./panels/network/RequestResponseView.js");
/* harmony import */var _RequestPreviewView_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./RequestPreviewView.js */ "./panels/network/RequestPreviewView.js");
/* harmony import */var _RequestTimingView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./RequestTimingView.js */ "./panels/network/RequestTimingView.js");
/* harmony import */var _ResourceWebSocketFrameView_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ResourceWebSocketFrameView.js */ "./panels/network/ResourceWebSocketFrameView.js");
/* harmony import */var _SignedExchangeInfoView_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./SignedExchangeInfoView.js */ "./panels/network/SignedExchangeInfoView.js");
/* harmony import */var _NetworkOverview_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./NetworkOverview.js */ "./panels/network/NetworkOverview.js");
/* harmony import */var _NetworkPanel_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./NetworkPanel.js */ "./panels/network/NetworkPanel.js");
/* harmony import */var _RequestPayloadView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./RequestPayloadView.js */ "./panels/network/RequestPayloadView.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.















































 //# sourceMappingURL=network.js.map


}),
"./ui/components/report_view/report_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ReportView: function() { return /* reexport module object */ _ReportView_js__WEBPACK_IMPORTED_MODULE_0__; }
});
/* harmony import */var _ReportView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportView.js */ "./ui/components/report_view/ReportView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

 //# sourceMappingURL=report_view.js.map


}),

}]);