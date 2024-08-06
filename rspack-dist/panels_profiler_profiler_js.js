"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_profiler_js"], {
"./panels/profiler/ChildrenProvider.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
 //# sourceMappingURL=ChildrenProvider.js.map


}),
"./panels/profiler/HeapProfilerPanel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  HeapProfilerPanel: function() { return HeapProfilerPanel; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfilesPanel.js */ "./panels/profiler/ProfilesPanel.js");
/* harmony import */var _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileTypeRegistry.js */ "./panels/profiler/ProfileTypeRegistry.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
     *@description A context menu item in the Heap Profiler Panel of a profiler tool
     */ revealInSummaryView: 'Reveal in Summary view'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/profiler/HeapProfilerPanel.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var heapProfilerPanelInstance;
var HeapProfilerPanel = /*#__PURE__*/ function(ProfilesPanel) {
    "use strict";
    _inherits(HeapProfilerPanel, ProfilesPanel);
    var _super = _create_super(HeapProfilerPanel);
    function HeapProfilerPanel() {
        _class_call_check(this, HeapProfilerPanel);
        var registry = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__.instance;
        var profileTypes = [
            registry.heapSnapshotProfileType,
            registry.trackingHeapSnapshotProfileType,
            registry.samplingHeapProfileType
        ];
        return _super.call(this, 'heap-profiler', profileTypes, 'profiler.heap-toggle-recording');
    }
    _create_class(HeapProfilerPanel, [
        {
            key: "appendApplicableItems",
            value: function appendApplicableItems(_event, contextMenu, object) {
                if (!this.isShowing()) {
                    return;
                }
                if (!object.objectId) {
                    return;
                }
                var objectId = object.objectId;
                var heapProfiles = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__.instance.heapSnapshotProfileType.getProfiles();
                if (!heapProfiles.length) {
                    return;
                }
                var heapProfilerModel = object.runtimeModel().heapProfilerModel();
                if (!heapProfilerModel) {
                    return;
                }
                function revealInView(viewName) {
                    var _this = this;
                    void heapProfilerModel.snapshotObjectIdForObjectId(objectId).then(function(result) {
                        if (_this.isShowing() && result) {
                            _this.showObject(result, viewName);
                        }
                    });
                }
                contextMenu.revealSection().appendItem(i18nString(UIStrings.revealInSummaryView), revealInView.bind(this, 'Summary'), {
                    jslogContext: 'reveal-in-summary'
                });
            }
        },
        {
            key: "handleAction",
            value: function handleAction(_context, _actionId) {
                var panel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().flavor(HeapProfilerPanel);
                console.assert(Boolean(panel) && _instanceof(panel, HeapProfilerPanel));
                if (panel) {
                    panel.toggleRecord();
                }
                return true;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(HeapProfilerPanel.prototype), "wasShown", this).call(this);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().setFlavor(HeapProfilerPanel, this);
                // Record the memory tool load time.
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelLoaded('heap-profiler', 'DevTools.Launch.HeapProfiler');
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Context.Context.instance().setFlavor(HeapProfilerPanel, null);
                _get(_get_prototype_of(HeapProfilerPanel.prototype), "willHide", this).call(this);
            }
        },
        {
            key: "showObject",
            value: function showObject(snapshotObjectId, perspectiveName) {
                var registry = _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_4__.instance;
                var heapProfiles = registry.heapSnapshotProfileType.getProfiles();
                for(var i = 0; i < heapProfiles.length; i++){
                    var profile = heapProfiles[i];
                    // FIXME: allow to choose snapshot if there are several options.
                    if (profile.maxJSObjectId >= parseInt(snapshotObjectId, 10)) {
                        this.showProfile(profile);
                        var view = this.viewForProfile(profile);
                        void view.selectLiveObject(perspectiveName, snapshotObjectId);
                        break;
                    }
                }
            }
        }
    ], [
        {
            key: "instance",
            value: function instance() {
                if (!heapProfilerPanelInstance) {
                    heapProfilerPanelInstance = new HeapProfilerPanel();
                }
                return heapProfilerPanelInstance;
            }
        }
    ]);
    return HeapProfilerPanel;
} //# sourceMappingURL=HeapProfilerPanel.js.map
(_ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_3__.ProfilesPanel);


}),
"./panels/profiler/profiler.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BottomUpProfileDataGrid: function() { return /* reexport module object */ _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__; },
  ChildrenProvider: function() { return /* reexport module object */ _ChildrenProvider_js__WEBPACK_IMPORTED_MODULE_1__; },
  HeapProfileView: function() { return /* reexport module object */ _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_3__; },
  HeapProfilerPanel: function() { return /* reexport module object */ _HeapProfilerPanel_js__WEBPACK_IMPORTED_MODULE_2__; },
  HeapSnapshotDataGrids: function() { return /* reexport module object */ _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_4__; },
  HeapSnapshotGridNodes: function() { return /* reexport module object */ _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_5__; },
  HeapSnapshotProxy: function() { return /* reexport module object */ _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_6__; },
  HeapSnapshotView: function() { return /* reexport module object */ _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_7__; },
  HeapTimelineOverview: function() { return /* reexport module object */ _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_8__; },
  IsolateSelector: function() { return /* reexport module object */ _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_9__; },
  LiveHeapProfileView: function() { return /* reexport module object */ _LiveHeapProfileView_js__WEBPACK_IMPORTED_MODULE_10__; },
  ProfileDataGrid: function() { return /* reexport module object */ _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_11__; },
  ProfileFlameChart: function() { return /* reexport module object */ _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_12__; },
  ProfileHeader: function() { return /* reexport module object */ _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_13__; },
  ProfileLauncherView: function() { return /* reexport module object */ _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_14__; },
  ProfileSidebarTreeElement: function() { return /* reexport module object */ _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_15__; },
  ProfileTypeRegistry: function() { return /* reexport module object */ _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_17__; },
  ProfileView: function() { return /* reexport module object */ _ProfileView_js__WEBPACK_IMPORTED_MODULE_18__; },
  ProfilesPanel: function() { return /* reexport module object */ _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_16__; },
  TopDownProfileDataGrid: function() { return /* reexport module object */ _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_19__; }
});
/* harmony import */var _BottomUpProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BottomUpProfileDataGrid.js */ "./panels/profiler/BottomUpProfileDataGrid.js");
/* harmony import */var _ChildrenProvider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChildrenProvider.js */ "./panels/profiler/ChildrenProvider.js");
/* harmony import */var _HeapProfilerPanel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeapProfilerPanel.js */ "./panels/profiler/HeapProfilerPanel.js");
/* harmony import */var _HeapProfileView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeapProfileView.js */ "./panels/profiler/HeapProfileView.js");
/* harmony import */var _HeapSnapshotDataGrids_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeapSnapshotDataGrids.js */ "./panels/profiler/HeapSnapshotDataGrids.js");
/* harmony import */var _HeapSnapshotGridNodes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeapSnapshotGridNodes.js */ "./panels/profiler/HeapSnapshotGridNodes.js");
/* harmony import */var _HeapSnapshotProxy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HeapSnapshotProxy.js */ "./panels/profiler/HeapSnapshotProxy.js");
/* harmony import */var _HeapSnapshotView_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeapSnapshotView.js */ "./panels/profiler/HeapSnapshotView.js");
/* harmony import */var _HeapTimelineOverview_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeapTimelineOverview.js */ "./panels/profiler/HeapTimelineOverview.js");
/* harmony import */var _IsolateSelector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IsolateSelector.js */ "./panels/profiler/IsolateSelector.js");
/* harmony import */var _LiveHeapProfileView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LiveHeapProfileView.js */ "./panels/profiler/LiveHeapProfileView.js");
/* harmony import */var _ProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProfileDataGrid.js */ "./panels/profiler/ProfileDataGrid.js");
/* harmony import */var _ProfileFlameChartDataProvider_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ProfileFlameChartDataProvider.js */ "./panels/profiler/ProfileFlameChartDataProvider.js");
/* harmony import */var _ProfileHeader_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ProfileHeader.js */ "./panels/profiler/ProfileHeader.js");
/* harmony import */var _ProfileLauncherView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ProfileLauncherView.js */ "./panels/profiler/ProfileLauncherView.js");
/* harmony import */var _ProfileSidebarTreeElement_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ProfileSidebarTreeElement.js */ "./panels/profiler/ProfileSidebarTreeElement.js");
/* harmony import */var _ProfilesPanel_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ProfilesPanel.js */ "./panels/profiler/ProfilesPanel.js");
/* harmony import */var _ProfileTypeRegistry_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ProfileTypeRegistry.js */ "./panels/profiler/ProfileTypeRegistry.js");
/* harmony import */var _ProfileView_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ProfileView.js */ "./panels/profiler/ProfileView.js");
/* harmony import */var _TopDownProfileDataGrid_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TopDownProfileDataGrid.js */ "./panels/profiler/TopDownProfileDataGrid.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




















 //# sourceMappingURL=profiler.js.map


}),

}]);