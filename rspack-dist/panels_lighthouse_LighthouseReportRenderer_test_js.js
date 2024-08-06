"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseReportRenderer_test_js"], {
"./panels/lighthouse/LighthouseReportRenderer.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('LighthouseReportRenderer', function() {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    var Lighthouse;
    var target;
    var sourceElement;
    var linkElement;
    var PATH = 'TEST_PATH';
    var NODE_ID = 42;
    var NODE = {
        id: NODE_ID
    };
    var SNIPPET = 'SNIPPET';
    var LH_NODE_HTML = function(path, snippet) {
        return '<div class="lh-node" data-path="'.concat(path, '" data-snippet="').concat(snippet, '"></div>');
    };
    beforeEach(/*#__PURE__*/ _async_to_generator(function() {
        var tabTarget;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        Promise.all(/*! import() */ [__webpack_require__.e("panels_emulation_components_DeviceSizeInputElement_js"), __webpack_require__.e("panels_emulation_DeviceModeToolbar_js"), __webpack_require__.e("panels_emulation_MediaQueryInspector_js"), __webpack_require__.e("panels_emulation_DeviceModeView_js"), __webpack_require__.e("panels_emulation_DeviceModeWrapper_js"), __webpack_require__.e("panels_emulation_AdvancedApp_js"), __webpack_require__.e("third_party_lighthouse_report_bundle_js"), __webpack_require__.e("panels_lighthouse_LighthouseController_js"), __webpack_require__.e("panels_lighthouse_LighthouseStartView_js"), __webpack_require__.e("panels_lighthouse_LighthouseProtocolService_js"), __webpack_require__.e("panels_lighthouse_LighthouseStatusView_js"), __webpack_require__.e("panels_lighthouse_LighthouseReportRenderer_js"), __webpack_require__.e("panels_lighthouse_LighthouseTimespanView_js"), __webpack_require__.e("third_party_lighthouse_report-assets_report-generator_mjs"), __webpack_require__.e("panels_lighthouse_LighthousePanel_js"), __webpack_require__.e("panels_lighthouse_lighthouse_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./lighthouse.js */ "./panels/lighthouse/lighthouse.js"))
                    ];
                case 1:
                    Lighthouse = _state.sent();
                    tabTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        type: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.Target.Type.Tab
                    });
                    (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        parentTarget: tabTarget,
                        subtype: 'prerender'
                    });
                    target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                        parentTarget: tabTarget
                    });
                    linkElement = document.createElement('div');
                    linkElement.textContent = 'link';
                    sourceElement = document.createElement('div');
                    return [
                        2
                    ];
            }
        });
    }));
    it('resolves node and calls linkifier', /*#__PURE__*/ _async_to_generator(function() {
        var _sourceElement_firstChild, domModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceElement.innerHTML = LH_NODE_HTML(PATH, SNIPPET);
                    domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                    assert.exists(domModel);
                    sinon.stub(domModel, 'pushNodeByPathToFrontend').withArgs(PATH).returns(Promise.resolve(NODE_ID));
                    sinon.stub(domModel, 'nodeForId').withArgs(NODE_ID).returns(NODE);
                    sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify').withArgs(NODE, {
                        tooltip: SNIPPET,
                        preventKeyboardFocus: undefined
                    }).returns(Promise.resolve(linkElement));
                    return [
                        4,
                        Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement)
                    ];
                case 1:
                    _state.sent();
                    assert.include(_to_consumable_array(((_sourceElement_firstChild = sourceElement.firstChild) === null || _sourceElement_firstChild === void 0 ? void 0 : _sourceElement_firstChild.childNodes) || []), linkElement);
                    return [
                        2
                    ];
            }
        });
    }));
    it('handles multiple nodes', /*#__PURE__*/ _async_to_generator(function() {
        var domModel, pushNodeByPathToFrontend, nodeForId, linkify, NUM_NODES, i, nodeId, node;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                    assert.exists(domModel);
                    pushNodeByPathToFrontend = sinon.stub(domModel, 'pushNodeByPathToFrontend');
                    nodeForId = sinon.stub(domModel, 'nodeForId');
                    linkify = sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify');
                    NUM_NODES = 3;
                    for(i = 1; i <= NUM_NODES; ++i){
                        sourceElement.innerHTML += LH_NODE_HTML(PATH + i, SNIPPET + i);
                        nodeId = i;
                        node = {
                            id: nodeId
                        };
                        pushNodeByPathToFrontend.withArgs(PATH + i).returns(Promise.resolve(nodeId));
                        nodeForId.withArgs(nodeId).returns(node);
                        linkify.withArgs(node, {
                            tooltip: SNIPPET + i,
                            preventKeyboardFocus: undefined
                        }).returns(Promise.resolve(document.createTextNode("link".concat(i))));
                    }
                    return [
                        4,
                        Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(sourceElement.childNodes.length, NUM_NODES);
                    assert.deepStrictEqual(_to_consumable_array(sourceElement.childNodes).map(function(n) {
                        return n.textContent;
                    }), [
                        'link1',
                        'link2',
                        'link3'
                    ]);
                    return [
                        2
                    ];
            }
        });
    }));
    it('resets tooltip', /*#__PURE__*/ _async_to_generator(function() {
        var domModel, installTooltip;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceElement.innerHTML = LH_NODE_HTML(PATH, SNIPPET);
                    domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                    assert.exists(domModel);
                    sinon.stub(domModel, 'pushNodeByPathToFrontend').returns(Promise.resolve(NODE_ID));
                    sinon.stub(domModel, 'nodeForId').returns(NODE);
                    sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify').returns(Promise.resolve(linkElement));
                    installTooltip = sinon.spy(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip, 'install');
                    return [
                        4,
                        Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement)
                    ];
                case 1:
                    _state.sent();
                    assert.isTrue(installTooltip.calledOnceWith(sourceElement.firstChild, ''));
                    return [
                        2
                    ];
            }
        });
    }));
    it('only keeps link and screenshot', /*#__PURE__*/ _async_to_generator(function() {
        var domModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    sourceElement.innerHTML = LH_NODE_HTML(PATH, SNIPPET);
                    assert.exists(sourceElement.firstElementChild);
                    sourceElement.firstElementChild.innerHTML = 'foo<div class="lh-element-screenshot"></div>bar';
                    domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                    assert.exists(domModel);
                    sinon.stub(domModel, 'pushNodeByPathToFrontend').returns(Promise.resolve(NODE_ID));
                    sinon.stub(domModel, 'nodeForId').returns(NODE);
                    sinon.stub(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier, 'linkify').returns(Promise.resolve(linkElement));
                    return [
                        4,
                        Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(sourceElement.firstElementChild.innerHTML, '<div class="lh-element-screenshot"></div><div>link</div>');
                    return [
                        2
                    ];
            }
        });
    }));
    it('skips malformed nodes', /*#__PURE__*/ _async_to_generator(function() {
        var originalHtml, domModel;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    originalHtml = [
                        LH_NODE_HTML('', SNIPPET),
                        LH_NODE_HTML('UNKNOWN_PATH', SNIPPET),
                        LH_NODE_HTML('PATH_WIHTOUT_NODE', SNIPPET)
                    ].join('');
                    domModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                    assert.exists(domModel);
                    sinon.stub(domModel, 'pushNodeByPathToFrontend').withArgs('PATH_WIHTOUT_NODE').returns(Promise.resolve(NODE_ID));
                    sourceElement.innerHTML = originalHtml;
                    return [
                        4,
                        Lighthouse.LighthouseReportRenderer.LighthouseReportRenderer.linkifyNodeDetails(sourceElement)
                    ];
                case 1:
                    _state.sent();
                    assert.strictEqual(sourceElement.innerHTML, originalHtml);
                    return [
                        2
                    ];
            }
        });
    }));
}); //# sourceMappingURL=LighthouseReportRenderer.test.js.map


}),

}]);