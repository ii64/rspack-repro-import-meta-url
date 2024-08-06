"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_layers_test_runner_layers_test_runner_js"], {
"./legacy_test_runner/layers_test_runner/layers_test_runner.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LayersTestRunner: function() { return LayersTestRunner; }
});
/* harmony import */var _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panels/elements/elements.js */ "./panels/elements/elements.js");
/* harmony import */var _panels_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panels/layer_viewer/layer_viewer.js */ "./panels/layer_viewer/layer_viewer.js");
/* harmony import */var _panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/layers/layers.js */ "./panels/layers/layers.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./legacy_test_runner/test_runner/test_runner.js");
/* harmony import */var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__);
// Copyright 2017 The Chromium Authors. All rights reserved.
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




/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ var LayersTestRunner = {};
LayersTestRunner.layerTreeModel = function() {
    if (!LayersTestRunner.layerTreeModelInternal) {
        LayersTestRunner.layerTreeModelInternal = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.mainTarget.model(_panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayerTreeModel.LayerTreeModel);
    }
    return LayersTestRunner.layerTreeModelInternal;
};
LayersTestRunner.labelForLayer = function(layer) {
    var node = layer.nodeForSelfOrAncestor();
    var label = node ? _panels_elements_elements_js__WEBPACK_IMPORTED_MODULE_0__.DOMPath.fullQualifiedSelector(node, false) : '<invalid node id>';
    var height = layer.height();
    var width = layer.width();
    if (height <= 200 && width <= 200) {
        label += ' ' + height + 'x' + width;
    }
    if (typeof layer.__extraData !== 'undefined') {
        label += ' (' + layer.__extraData + ')';
    }
    return label;
};
LayersTestRunner.dumpLayerTree = function(prefix, root) {
    if (!prefix) {
        prefix = '';
    }
    if (!root) {
        root = LayersTestRunner.layerTreeModel().layerTree().contentRoot();
        if (!root) {
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult('No layer root, perhaps not in the composited mode! ');
            _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.completeTest();
            return;
        }
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(prefix + LayersTestRunner.labelForLayer(root));
    root.children().forEach(LayersTestRunner.dumpLayerTree.bind(LayersTestRunner, prefix + '    '));
};
LayersTestRunner.dumpLayers3DView = function(prefix, root) {
    if (!prefix) {
        prefix = '';
    }
    if (!root) {
        root = _panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayersPanel.LayersPanel.instance().layers3DView.rotatingContainerElement;
    }
    if (root._layer) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(prefix + LayersTestRunner.labelForLayer(root._layer));
    }
    for(var element = root.firstElementChild; element; element = element.nextSibling){
        LayersTestRunner.dumpLayers3DView(prefix + '    ', element);
    }
};
LayersTestRunner.evaluateAndWaitForTreeChange = function() {
    var _ref = _async_to_generator(function(expression) {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.evaluateInPageAnonymously(expression)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2,
                        LayersTestRunner.layerTreeModel().once(_panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayerTreeModel.Events.LayerTreeChanged)
                    ];
            }
        });
    });
    return function(expression) {
        return _ref.apply(this, arguments);
    };
}();
LayersTestRunner.findLayerByNodeIdAttribute = function(nodeIdAttribute) {
    var result;
    function testLayer(layer) {
        var node = layer.node();
        if (!node) {
            return false;
        }
        if (!node || node.getAttribute('id') !== nodeIdAttribute) {
            return false;
        }
        result = layer;
        return true;
    }
    LayersTestRunner.layerTreeModel().layerTree().forEachLayer(testLayer);
    if (!result) {
        _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult('ERROR: No layer for ' + nodeIdAttribute);
    }
    return result;
};
LayersTestRunner.requestLayers = function() {
    LayersTestRunner.layerTreeModel().enable();
    return LayersTestRunner.layerTreeModel().once(_panels_layers_layers_js__WEBPACK_IMPORTED_MODULE_2__.LayerTreeModel.Events.LayerTreeChanged);
};
LayersTestRunner.dispatchMouseEvent = function(eventType, button, element, offsetX, offsetY) {
    var totalOffset = element.getBoundingClientRect();
    var eventArguments = {
        bubbles: true,
        cancelable: true,
        view: window,
        screenX: totalOffset.left - element.scrollLeft + offsetX,
        screenY: totalOffset.top - element.scrollTop + offsetY,
        clientX: totalOffset.left + offsetX,
        clientY: totalOffset.top + offsetY,
        button: button,
        composed: true
    };
    if (eventType === 'mouseout') {
        eventArguments.screenX = 0;
        eventArguments.screenY = 0;
        eventArguments.clientX = 0;
        eventArguments.clientY = 0;
    }
    element.dispatchEvent(new MouseEvent(eventType, eventArguments));
};
LayersTestRunner.findLayerTreeElement = function(layer) {
    var element = _panels_layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_1__.LayerTreeOutline.layerToTreeElement.get(layer);
    element.reveal();
    return element.listItemElement;
};
LayersTestRunner.dispatchMouseEventToLayerTree = function(eventType, button, layer) {
    var element = LayersTestRunner.findLayerTreeElement(layer);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.assertTrue(Boolean(element));
    LayersTestRunner.dispatchMouseEvent(eventType, button, element, element.clientWidth >> 1, element.clientHeight >> 1);
};
LayersTestRunner.dumpSelectedStyles = function(message, element) {
    var classes = [];
    if (element.classList.contains('selected')) {
        classes.push('selected');
    }
    if (element.classList.contains('hovered')) {
        classes.push('hovered');
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_3__.TestRunner.addResult(message + ': ' + classes.join(', '));
};


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
"./panels/layers/layers.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LayerPaintProfilerView: function() { return /* reexport module object */ _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__; },
  LayerTreeModel: function() { return /* reexport module object */ _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__; },
  LayersPanel: function() { return /* reexport module object */ _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerPaintProfilerView.js */ "./panels/layers/LayerPaintProfilerView.js");
/* harmony import */var _LayersPanel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayersPanel.js */ "./panels/layers/LayersPanel.js");
/* harmony import */var _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerTreeModel.js */ "./panels/layers/LayerTreeModel.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=layers.js.map


}),

}]);