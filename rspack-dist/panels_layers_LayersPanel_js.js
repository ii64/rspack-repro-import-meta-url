"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_layers_LayersPanel_js"], {
"./panels/layers/LayerPaintProfilerView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  LayerPaintProfilerView: function() { return LayerPaintProfilerView; }
});
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layer_viewer/layer_viewer.js */ "./panels/layer_viewer/layer_viewer.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}



var LayerPaintProfilerView = /*#__PURE__*/ function(_UI_SplitWidget_SplitWidget) {
    "use strict";
    _inherits(LayerPaintProfilerView, _UI_SplitWidget_SplitWidget);
    var _super = _create_super(LayerPaintProfilerView);
    function LayerPaintProfilerView(showImageCallback) {
        _class_call_check(this, LayerPaintProfilerView);
        var _this;
        _this = _super.call(this, true, false);
        _define_property(_assert_this_initialized(_this), "logTreeView", void 0);
        _define_property(_assert_this_initialized(_this), "paintProfilerView", void 0);
        _this.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.pane('layers.paint-profiler').track({
            resize: true
        })));
        _this.logTreeView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__.PaintProfilerView.PaintProfilerCommandLogView();
        _this.setSidebarWidget(_this.logTreeView);
        _this.paintProfilerView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_2__.PaintProfilerView.PaintProfilerView(showImageCallback);
        _this.setMainWidget(_this.paintProfilerView);
        _this.paintProfilerView.addEventListener("WindowChanged" /* LayerViewer.PaintProfilerView.Events.WindowChanged */ , _this.onWindowChanged, _assert_this_initialized(_this));
        _this.logTreeView.focus();
        return _this;
    }
    _create_class(LayerPaintProfilerView, [
        {
            key: "reset",
            value: function reset() {
                void this.paintProfilerView.setSnapshotAndLog(null, [], null);
            }
        },
        {
            key: "profile",
            value: function profile(snapshot) {
                var _this = this;
                void snapshot.commandLog().then(function(log) {
                    return setSnapshotAndLog.call(_this, snapshot, log);
                });
                function setSnapshotAndLog(snapshot, log) {
                    this.logTreeView.setCommandLog(log || []);
                    void this.paintProfilerView.setSnapshotAndLog(snapshot, log || [], null);
                    if (snapshot) {
                        snapshot.release();
                    }
                }
            }
        },
        {
            key: "setScale",
            value: function setScale(scale) {
                this.paintProfilerView.setScale(scale);
            }
        },
        {
            key: "onWindowChanged",
            value: function onWindowChanged() {
                this.logTreeView.updateWindow(this.paintProfilerView.selectionWindow());
            }
        }
    ]);
    return LayerPaintProfilerView;
} //# sourceMappingURL=LayerPaintProfilerView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_0__.SplitWidget.SplitWidget);


}),
"./panels/layers/LayersPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DetailsViewTabs: function() { return DetailsViewTabs; },
  LayersPanel: function() { return LayersPanel; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layer_viewer/layer_viewer.js */ "./panels/layer_viewer/layer_viewer.js");
/* harmony import */var _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LayerPaintProfilerView.js */ "./panels/layers/LayerPaintProfilerView.js");
/* harmony import */var _LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LayerTreeModel.js */ "./panels/layers/LayerTreeModel.js");
/*
 * Copyright (C) 2013 Google Inc. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}







var UIStrings = {
    /**
     *@description Text for the details of something
     */ details: 'Details',
    /**
     *@description Title of the Profiler tool
     */ profiler: 'Profiler'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/layers/LayersPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var layersPanelInstance;
var LayersPanel = /*#__PURE__*/ function(_UI_Panel_PanelWithSidebar) {
    "use strict";
    _inherits(LayersPanel, _UI_Panel_PanelWithSidebar);
    var _super = _create_super(LayersPanel);
    function LayersPanel() {
        _class_call_check(this, LayersPanel);
        var _this;
        _this = _super.call(this, 'layers', 225);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "layerViewHost", void 0);
        _define_property(_assert_this_initialized(_this), "layerTreeOutline", void 0);
        _define_property(_assert_this_initialized(_this), "rightSplitWidget", void 0);
        _define_property(_assert_this_initialized(_this), "layers3DView", void 0);
        _define_property(_assert_this_initialized(_this), "tabbedPane", void 0);
        _define_property(_assert_this_initialized(_this), "layerDetailsView", void 0);
        _define_property(_assert_this_initialized(_this), "paintProfilerView", void 0);
        _define_property(_assert_this_initialized(_this), "updateThrottler", void 0);
        _define_property(_assert_this_initialized(_this), "layerBeingProfiled", void 0);
        _this.model = null;
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().observeTargets(_assert_this_initialized(_this), {
            scoped: true
        });
        _this.layerViewHost = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerViewHost.LayerViewHost();
        _this.layerTreeOutline = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerTreeOutline.LayerTreeOutline(_this.layerViewHost);
        _this.layerTreeOutline.addEventListener("PaintProfilerRequested" /* LayerViewer.LayerTreeOutline.Events.PaintProfilerRequested */ , _this.onPaintProfileRequested, _assert_this_initialized(_this));
        _this.panelSidebarElement().appendChild(_this.layerTreeOutline.element);
        _this.setDefaultFocusedElement(_this.layerTreeOutline.element);
        _this.rightSplitWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.SplitWidget.SplitWidget(false, true, 'layer-details-split-view-state');
        _this.splitWidget().setMainWidget(_this.rightSplitWidget);
        _this.layers3DView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.Layers3DView.Layers3DView(_this.layerViewHost);
        _this.rightSplitWidget.setMainWidget(_this.layers3DView);
        _this.layers3DView.addEventListener("PaintProfilerRequested" /* LayerViewer.Layers3DView.Events.PaintProfilerRequested */ , _this.onPaintProfileRequested, _assert_this_initialized(_this));
        _this.layers3DView.addEventListener("ScaleChanged" /* LayerViewer.Layers3DView.Events.ScaleChanged */ , _this.onScaleChanged, _assert_this_initialized(_this));
        _this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TabbedPane.TabbedPane();
        _this.rightSplitWidget.setSidebarWidget(_this.tabbedPane);
        _this.layerDetailsView = new _layer_viewer_layer_viewer_js__WEBPACK_IMPORTED_MODULE_4__.LayerDetailsView.LayerDetailsView(_this.layerViewHost);
        _this.layerDetailsView.addEventListener("PaintProfilerRequested" /* LayerViewer.LayerDetailsView.Events.PaintProfilerRequested */ , _this.onPaintProfileRequested, _assert_this_initialized(_this));
        _this.tabbedPane.appendTab(DetailsViewTabs.Details, i18nString(UIStrings.details), _this.layerDetailsView);
        _this.paintProfilerView = new _LayerPaintProfilerView_js__WEBPACK_IMPORTED_MODULE_5__.LayerPaintProfilerView(_this.showImage.bind(_assert_this_initialized(_this)));
        _this.tabbedPane.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.TabbedPane.Events.TabClosed, _this.onTabClosed, _assert_this_initialized(_this));
        _this.updateThrottler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        return _this;
    }
    _create_class(LayersPanel, [
        {
            key: "focus",
            value: function focus() {
                this.layerTreeOutline.focus();
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(LayersPanel.prototype), "wasShown", this).call(this);
                if (this.model) {
                    this.model.enable();
                }
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                if (this.model) {
                    void this.model.disable();
                }
                _get(_get_prototype_of(LayersPanel.prototype), "willHide", this).call(this);
            }
        },
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                if (target !== target.outermostTarget()) {
                    return;
                }
                this.model = target.model(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.LayerTreeModel);
                if (!this.model) {
                    return;
                }
                this.model.addEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerTreeChanged, this.onLayerTreeUpdated, this);
                this.model.addEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerPainted, this.onLayerPainted, this);
                if (this.isShowing()) {
                    this.model.enable();
                    void this.update();
                }
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(target) {
                if (!this.model || this.model.target() !== target) {
                    return;
                }
                this.model.removeEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerTreeChanged, this.onLayerTreeUpdated, this);
                this.model.removeEventListener(_LayerTreeModel_js__WEBPACK_IMPORTED_MODULE_6__.Events.LayerPainted, this.onLayerPainted, this);
                void this.model.disable();
                this.model = null;
            }
        },
        {
            key: "onLayerTreeUpdated",
            value: function onLayerTreeUpdated() {
                void this.updateThrottler.schedule(this.update.bind(this));
            }
        },
        {
            key: "update",
            value: function update() {
                if (this.model) {
                    this.layerViewHost.setLayerTree(this.model.layerTree());
                    var resourceModel = this.model.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeModel);
                    if (resourceModel) {
                        var mainFrame = resourceModel.mainFrame;
                        if (mainFrame) {
                            var url = mainFrame.url;
                            // Add the currently visualized url as an attribute to make it accessibles to e2e tests
                            this.element.setAttribute('test-current-url', url);
                        }
                    }
                }
                return Promise.resolve();
            }
        },
        {
            key: "onLayerPainted",
            value: function onLayerPainted(param) {
                var layer = param.data;
                if (!this.model) {
                    return;
                }
                var selection = this.layerViewHost.selection();
                if (selection && selection.layer() === layer) {
                    this.layerDetailsView.update();
                }
                this.layers3DView.updateLayerSnapshot(layer);
            }
        },
        {
            key: "onPaintProfileRequested",
            value: function onPaintProfileRequested(param) {
                var _this = this;
                var selection = param.data;
                void this.layers3DView.snapshotForSelection(selection).then(function(snapshotWithRect) {
                    if (!snapshotWithRect) {
                        return;
                    }
                    _this.layerBeingProfiled = selection.layer();
                    if (!_this.tabbedPane.hasTab(DetailsViewTabs.Profiler)) {
                        _this.tabbedPane.appendTab(DetailsViewTabs.Profiler, i18nString(UIStrings.profiler), _this.paintProfilerView, undefined, true, true);
                    }
                    _this.tabbedPane.selectTab(DetailsViewTabs.Profiler);
                    _this.paintProfilerView.profile(snapshotWithRect.snapshot);
                });
            }
        },
        {
            key: "onTabClosed",
            value: function onTabClosed(event) {
                if (event.data.tabId !== DetailsViewTabs.Profiler || !this.layerBeingProfiled) {
                    return;
                }
                this.paintProfilerView.reset();
                this.layers3DView.showImageForLayer(this.layerBeingProfiled, undefined);
                this.layerBeingProfiled = null;
            }
        },
        {
            key: "showImage",
            value: function showImage(imageURL) {
                if (this.layerBeingProfiled) {
                    this.layers3DView.showImageForLayer(this.layerBeingProfiled, imageURL);
                }
            }
        },
        {
            key: "onScaleChanged",
            value: function onScaleChanged(event) {
                this.paintProfilerView.setScale(event.data);
            }
        }
    ], [
        {
            key: "instance",
            value: function instance(opts) {
                if (!layersPanelInstance || (opts === null || opts === void 0 ? void 0 : opts.forceNew)) {
                    layersPanelInstance = new LayersPanel();
                }
                return layersPanelInstance;
            }
        }
    ]);
    return LayersPanel;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Panel.PanelWithSidebar);
var DetailsViewTabs = {
    Details: 'details',
    Profiler: 'profiler'
}; //# sourceMappingURL=LayersPanel.js.map


}),

}]);