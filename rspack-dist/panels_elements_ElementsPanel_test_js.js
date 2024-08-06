"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_elements_ElementsPanel_test_js"], {
"./panels/elements/ElementsPanel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../testing/MockConnection.js */ "./testing/MockConnection.js");
/* harmony import */var _elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./elements.js */ "./panels/elements/elements.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
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





(0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.describeWithMockConnection)('ElementsPanel', function() {
    var target;
    beforeEach(function() {
        (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.stubNoopSettings)();
        target = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        _core_root_root_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.experiments.register('apca', '');
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('DOM.requestChildNodes', function() {
            return {};
        });
        (0,_testing_MockConnection_js__WEBPACK_IMPORTED_MODULE_3__.setMockConnectionResponseHandler)('DOM.getDocument', function() {
            return {
                root: {
                    nodeId: 1,
                    backendNodeId: 2,
                    nodeType: Node.DOCUMENT_NODE,
                    nodeName: '#document',
                    childNodeCount: 1,
                    children: [
                        {
                            nodeId: 4,
                            parentId: 1,
                            backendNodeId: 5,
                            nodeType: Node.ELEMENT_NODE,
                            nodeName: 'HTML',
                            childNodeCount: 1,
                            children: [
                                {
                                    nodeId: 6,
                                    parentId: 4,
                                    backendNodeId: 7,
                                    nodeType: Node.ELEMENT_NODE,
                                    nodeName: 'BODY',
                                    childNodeCount: 1
                                }
                            ]
                        }
                    ]
                }
            };
        });
    });
    var createsTreeOutlines = function(inScope) {
        return function() {
            _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(inScope ? target : null);
            _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance({
                forceNew: true
            });
            var model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
            assert.exists(model);
            assert.strictEqual(Boolean(_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(model)), inScope);
            var subtraget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)({
                parentTarget: target
            });
            var submodel = subtraget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
            assert.exists(submodel);
            assert.strictEqual(Boolean(_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(model)), inScope);
            subtraget.dispose('');
            assert.isNull(_elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(submodel));
        };
    };
    it('creates tree outlines for in scope models', createsTreeOutlines(true));
    it('does not create tree outlines for out of scope models', createsTreeOutlines(false));
    it('expands the tree even when target added later', /*#__PURE__*/ _async_to_generator(function() {
        var model, panel, treeOutline, selectedNode, selectedTreeElement;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(null);
                    model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
                    assert.exists(model);
                    return [
                        4,
                        model.requestDocument()
                    ];
                case 1:
                    _state.sent();
                    panel = _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance({
                        forceNew: true
                    });
                    panel.markAsRoot();
                    panel.show(document.body);
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
                    treeOutline = _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsTreeOutline.ElementsTreeOutline.forDOMModel(model);
                    assert.exists(treeOutline);
                    selectedNode = treeOutline.selectedDOMNode();
                    assert.exists(selectedNode);
                    selectedTreeElement = treeOutline.findTreeElement(selectedNode);
                    assert.exists(selectedTreeElement);
                    assert.isTrue(selectedTreeElement.expanded);
                    panel.detach();
                    return [
                        2
                    ];
            }
        });
    }));
    it('searches in in scope models', function() {
        var anotherTarget = (0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_2__.createTarget)();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().setScopeTarget(target);
        var inScopeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(inScopeModel);
        var inScopeSearch = sinon.spy(inScopeModel, 'performSearch');
        var outOfScopeModel = anotherTarget.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.DOMModel.DOMModel);
        assert.exists(outOfScopeModel);
        var outOfScopeSearch = sinon.spy(outOfScopeModel, 'performSearch');
        var panel = _elements_js__WEBPACK_IMPORTED_MODULE_4__.ElementsPanel.ElementsPanel.instance({
            forceNew: true
        });
        panel.performSearch({
            query: 'foo'
        }, false);
        assert.isTrue(inScopeSearch.called);
        assert.isFalse(outOfScopeSearch.called);
    });
}); //# sourceMappingURL=ElementsPanel.test.js.map


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

}]);