"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_ApplicationPanelSidebar_js-panels_application_StorageBucketsTreeElement_js"], {
"./panels/application/ApplicationPanelSidebar.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AppManifestTreeElement: function() { return AppManifestTreeElement; },
  ApplicationPanelSidebar: function() { return ApplicationPanelSidebar; },
  BackgroundServiceTreeElement: function() { return BackgroundServiceTreeElement; },
  ClearStorageTreeElement: function() { return ClearStorageTreeElement; },
  CookieTreeElement: function() { return CookieTreeElement; },
  DOMStorageTreeElement: function() { return DOMStorageTreeElement; },
  FrameResourceTreeElement: function() { return FrameResourceTreeElement; },
  FrameTreeElement: function() { return FrameTreeElement; },
  IDBDatabaseTreeElement: function() { return IDBDatabaseTreeElement; },
  IDBIndexTreeElement: function() { return IDBIndexTreeElement; },
  IDBObjectStoreTreeElement: function() { return IDBObjectStoreTreeElement; },
  IndexedDBTreeElement: function() { return IndexedDBTreeElement; },
  ManifestChildTreeElement: function() { return ManifestChildTreeElement; },
  ResourcesSection: function() { return ResourcesSection; },
  ServiceWorkersTreeElement: function() { return ServiceWorkersTreeElement; },
  StorageCategoryView: function() { return StorageCategoryView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./ui/legacy/components/source_frame/source_frame.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _AppManifestView_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./AppManifestView.js */ "./panels/application/AppManifestView.js");
/* harmony import */var _BackForwardCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./BackForwardCacheTreeElement.js */ "./panels/application/BackForwardCacheTreeElement.js");
/* harmony import */var _BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./BackgroundServiceModel.js */ "./panels/application/BackgroundServiceModel.js");
/* harmony import */var _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./BackgroundServiceView.js */ "./panels/application/BackgroundServiceView.js");
/* harmony import */var _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./BounceTrackingMitigationsTreeElement.js */ "./panels/application/BounceTrackingMitigationsTreeElement.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./DOMStorageModel.js */ "./panels/application/DOMStorageModel.js");
/* harmony import */var _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./IndexedDBModel.js */ "./panels/application/IndexedDBModel.js");
/* harmony import */var _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./IndexedDBViews.js */ "./panels/application/IndexedDBViews.js");
/* harmony import */var _InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./InterestGroupStorageModel.js */ "./panels/application/InterestGroupStorageModel.js");
/* harmony import */var _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./InterestGroupTreeElement.js */ "./panels/application/InterestGroupTreeElement.js");
/* harmony import */var _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./OpenedWindowDetailsView.js */ "./panels/application/OpenedWindowDetailsView.js");
/* harmony import */var _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./PreloadingTreeElement.js */ "./panels/application/PreloadingTreeElement.js");
/* harmony import */var _ReportingApiTreeElement_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ReportingApiTreeElement.js */ "./panels/application/ReportingApiTreeElement.js");
/* harmony import */var _resourcesSidebar_css_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./resourcesSidebar.css.js */ "./panels/application/resourcesSidebar.css.js");
/* harmony import */var _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ServiceWorkerCacheTreeElement.js */ "./panels/application/ServiceWorkerCacheTreeElement.js");
/* harmony import */var _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ServiceWorkersView.js */ "./panels/application/ServiceWorkersView.js");
/* harmony import */var _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SharedStorageListTreeElement.js */ "./panels/application/SharedStorageListTreeElement.js");
/* harmony import */var _SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SharedStorageModel.js */ "./panels/application/SharedStorageModel.js");
/* harmony import */var _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./SharedStorageTreeElement.js */ "./panels/application/SharedStorageTreeElement.js");
/* harmony import */var _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./StorageBucketsTreeElement.js */ "./panels/application/StorageBucketsTreeElement.js");
/* harmony import */var _StorageView_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./StorageView.js */ "./panels/application/StorageView.js");
/* harmony import */var _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./TrustTokensTreeElement.js */ "./panels/application/TrustTokensTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__]);
([_StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__, _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008, 2010 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
 * Copyright (C) 2013 Samsung Electronics. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1.  Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 * 2.  Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 * 3.  Neither the name of Apple Computer, Inc. ("Apple") nor the names of
 *     its contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE AND ITS CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL APPLE OR ITS CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 * THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */ function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _possible_constructor_return(self1, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self1);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
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



































var UIStrings = {
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ application: 'Application',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ storage: 'Storage',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ localStorage: 'Local storage',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ sessionStorage: 'Session storage',
    /**
     *@description Text for web cookies
     */ cookies: 'Cookies',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ backgroundServices: 'Background services',
    /**
     *@description Text for rendering frames
     */ frames: 'Frames',
    /**
     *@description Text that appears on a button for the manifest resource type filter.
     */ manifest: 'Manifest',
    /**
     *@description Text in App Manifest View of the Application panel
     */ noManifestDetected: 'No manifest detected',
    /**
     *@description Text in App Manifest View of the Application panel
     */ appManifest: 'App Manifest',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ indexeddb: 'IndexedDB',
    /**
     *@description A context menu item in the Application Panel Sidebar of the Application panel
     */ refreshIndexeddb: 'Refresh IndexedDB',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {1.0} PH1
     */ versionSEmpty: 'Version: {PH1} (empty)',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {1.0} PH1
     */ versionS: 'Version: {PH1}',
    /**
     *@description Text to clear content
     */ clear: 'Clear',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     *@example {"key path"} PH1
     */ keyPathS: 'Key path: {PH1}',
    /**
     *@description Text in Application Panel Sidebar of the Application panel
     */ localFiles: 'Local Files',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {https://example.com} PH1
     */ cookiesUsedByFramesFromS: 'Cookies used by frames from {PH1}',
    /**
     *@description Text in Frames View of the Application panel
     */ openedWindows: 'Opened Windows',
    /**
     *@description Label for plural of worker type: web workers
     */ webWorkers: 'Web Workers',
    /**
     *@description Label in frame tree for unavailable document
     */ documentNotAvailable: 'Document not available',
    /**
     *@description Description of content of unavailable document in Application panel
     */ theContentOfThisDocumentHasBeen: 'The content of this document has been generated dynamically via \'document.write()\'.',
    /**
     *@description Text in Frames View of the Application panel
     */ windowWithoutTitle: 'Window without title',
    /**
     *@description Default name for worker
     */ worker: 'worker',
    /**
     * @description Aria text for screen reader to announce they can scroll to top of manifest if invoked
     */ onInvokeManifestAlert: 'Manifest: Invoke to scroll to the top of manifest',
    /**
     * @description Aria text for screen reader to announce they can scroll to a section if invoked
     * @example {"Identity"} PH1
     */ beforeInvokeAlert: '{PH1}: Invoke to scroll to this section in manifest',
    /**
     * @description Alert message for screen reader to announce which subsection is being scrolled to
     * @example {"Identity"} PH1
     */ onInvokeAlert: 'Scrolled to {PH1}',
    /**
     * @description Application sidebar panel
     */ applicationSidebarPanel: 'Application panel sidebar',
    /**
     *@description Tooltip in Application Panel Sidebar of the Application panel
     *@example {https://example.com} PH1
     */ thirdPartyPhaseout: 'Cookies from {PH1} may have been blocked due to third-party cookie phaseout.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/application/ApplicationPanelSidebar.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
function assertNotMainTarget(targetId) {
    if (targetId === 'main') {
        throw new Error('Unexpected main target id');
    }
}
var ApplicationPanelSidebar = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ApplicationPanelSidebar, _UI_Widget_VBox);
    var _super = _create_super(ApplicationPanelSidebar);
    function ApplicationPanelSidebar(panel) {
        _class_call_check(this, ApplicationPanelSidebar);
        var _this;
        var _this_applicationTreeElement_treeOutline;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "panel", void 0);
        _define_property(_assert_this_initialized(_this), "sidebarTree", void 0);
        _define_property(_assert_this_initialized(_this), "applicationTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "serviceWorkersTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "localStorageListTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "sessionStorageListTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "indexedDBListTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "interestGroupTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "cookieListTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "trustTokensTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "cacheStorageListTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "sharedStorageListTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "storageBucketsTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "backForwardCacheListTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "backgroundFetchTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "backgroundSyncTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "bounceTrackingMitigationsTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "notificationsTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "paymentHandlerTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "periodicBackgroundSyncTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "pushMessagingTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "reportingApiTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "preloadingSummaryTreeElement", void 0);
        _define_property(_assert_this_initialized(_this), "resourcesSection", void 0);
        _define_property(_assert_this_initialized(_this), "domStorageTreeElements", void 0);
        _define_property(_assert_this_initialized(_this), "sharedStorageTreeElements", void 0);
        _define_property(_assert_this_initialized(_this), "domains", void 0);
        // Holds main frame target.
        _define_property(_assert_this_initialized(_this), "target", void 0);
        _define_property(_assert_this_initialized(_this), "previousHoveredElement", void 0);
        _define_property(_assert_this_initialized(_this), "sharedStorageTreeElementDispatcher", void 0);
        _this.panel = panel;
        _this.sidebarTree = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeOutlineInShadow();
        _this.sidebarTree.element.classList.add('resources-sidebar');
        _this.sidebarTree.element.classList.add('filter-all');
        // Listener needs to have been set up before the elements are added
        _this.sidebarTree.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.Events.ElementAttached, _this.treeElementAdded, _assert_this_initialized(_this));
        _this.contentElement.appendChild(_this.sidebarTree.element);
        var applicationSectionTitle = i18nString(UIStrings.application);
        _this.applicationTreeElement = _this.addSidebarSection(applicationSectionTitle, 'application');
        var applicationPanelSidebar = (_this_applicationTreeElement_treeOutline = _this.applicationTreeElement.treeOutline) === null || _this_applicationTreeElement_treeOutline === void 0 ? void 0 : _this_applicationTreeElement_treeOutline.contentElement;
        if (applicationPanelSidebar) {
            applicationPanelSidebar.ariaLabel = i18nString(UIStrings.applicationSidebarPanel);
        }
        var manifestTreeElement = new AppManifestTreeElement(panel);
        _this.applicationTreeElement.appendChild(manifestTreeElement);
        manifestTreeElement.generateChildren();
        _this.serviceWorkersTreeElement = new ServiceWorkersTreeElement(panel);
        _this.applicationTreeElement.appendChild(_this.serviceWorkersTreeElement);
        var clearStorageTreeElement = new ClearStorageTreeElement(panel);
        _this.applicationTreeElement.appendChild(clearStorageTreeElement);
        var storageSectionTitle = i18nString(UIStrings.storage);
        var storageTreeElement = _this.addSidebarSection(storageSectionTitle, 'storage');
        _this.localStorageListTreeElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.localStorage), 'local-storage');
        _this.localStorageListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/localstorage/?utm_source=devtools');
        var localStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        _this.localStorageListTreeElement.setLeadingIcons([
            localStorageIcon
        ]);
        storageTreeElement.appendChild(_this.localStorageListTreeElement);
        _this.sessionStorageListTreeElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.sessionStorage), 'session-storage');
        _this.sessionStorageListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/sessionstorage/?utm_source=devtools');
        var sessionStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        _this.sessionStorageListTreeElement.setLeadingIcons([
            sessionStorageIcon
        ]);
        storageTreeElement.appendChild(_this.sessionStorageListTreeElement);
        _this.indexedDBListTreeElement = new IndexedDBTreeElement(panel);
        _this.indexedDBListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/indexeddb/?utm_source=devtools');
        storageTreeElement.appendChild(_this.indexedDBListTreeElement);
        _this.cookieListTreeElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(panel, i18nString(UIStrings.cookies), 'cookies');
        _this.cookieListTreeElement.setLink('https://developer.chrome.com/docs/devtools/storage/cookies/?utm_source=devtools');
        var cookieIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('cookie');
        _this.cookieListTreeElement.setLeadingIcons([
            cookieIcon
        ]);
        storageTreeElement.appendChild(_this.cookieListTreeElement);
        _this.trustTokensTreeElement = new _TrustTokensTreeElement_js__WEBPACK_IMPORTED_MODULE_34__.TrustTokensTreeElement(panel);
        storageTreeElement.appendChild(_this.trustTokensTreeElement);
        _this.interestGroupTreeElement = new _InterestGroupTreeElement_js__WEBPACK_IMPORTED_MODULE_22__.InterestGroupTreeElement(panel);
        storageTreeElement.appendChild(_this.interestGroupTreeElement);
        _this.sharedStorageListTreeElement = new _SharedStorageListTreeElement_js__WEBPACK_IMPORTED_MODULE_29__.SharedStorageListTreeElement(panel);
        storageTreeElement.appendChild(_this.sharedStorageListTreeElement);
        _this.cacheStorageListTreeElement = new _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_27__.ServiceWorkerCacheTreeElement(panel);
        storageTreeElement.appendChild(_this.cacheStorageListTreeElement);
        _this.storageBucketsTreeElement = new _StorageBucketsTreeElement_js__WEBPACK_IMPORTED_MODULE_32__.StorageBucketsTreeParentElement(panel);
        storageTreeElement.appendChild(_this.storageBucketsTreeElement);
        var backgroundServiceSectionTitle = i18nString(UIStrings.backgroundServices);
        var backgroundServiceTreeElement = _this.addSidebarSection(backgroundServiceSectionTitle, 'background-services');
        _this.backForwardCacheListTreeElement = new _BackForwardCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_13__.BackForwardCacheTreeElement(panel);
        backgroundServiceTreeElement.appendChild(_this.backForwardCacheListTreeElement);
        _this.backgroundFetchTreeElement = new BackgroundServiceTreeElement(panel, "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */ );
        backgroundServiceTreeElement.appendChild(_this.backgroundFetchTreeElement);
        _this.backgroundSyncTreeElement = new BackgroundServiceTreeElement(panel, "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */ );
        backgroundServiceTreeElement.appendChild(_this.backgroundSyncTreeElement);
        _this.bounceTrackingMitigationsTreeElement = new _BounceTrackingMitigationsTreeElement_js__WEBPACK_IMPORTED_MODULE_16__.BounceTrackingMitigationsTreeElement(panel);
        backgroundServiceTreeElement.appendChild(_this.bounceTrackingMitigationsTreeElement);
        _this.notificationsTreeElement = new BackgroundServiceTreeElement(panel, "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */ );
        backgroundServiceTreeElement.appendChild(_this.notificationsTreeElement);
        _this.paymentHandlerTreeElement = new BackgroundServiceTreeElement(panel, "paymentHandler" /* Protocol.BackgroundService.ServiceName.PaymentHandler */ );
        backgroundServiceTreeElement.appendChild(_this.paymentHandlerTreeElement);
        _this.periodicBackgroundSyncTreeElement = new BackgroundServiceTreeElement(panel, "periodicBackgroundSync" /* Protocol.BackgroundService.ServiceName.PeriodicBackgroundSync */ );
        backgroundServiceTreeElement.appendChild(_this.periodicBackgroundSyncTreeElement);
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */ )) {
            _this.preloadingSummaryTreeElement = new _PreloadingTreeElement_js__WEBPACK_IMPORTED_MODULE_24__.PreloadingSummaryTreeElement(panel);
            backgroundServiceTreeElement.appendChild(_this.preloadingSummaryTreeElement);
            _this.preloadingSummaryTreeElement.constructChildren(panel);
        }
        _this.pushMessagingTreeElement = new BackgroundServiceTreeElement(panel, "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */ );
        backgroundServiceTreeElement.appendChild(_this.pushMessagingTreeElement);
        _this.reportingApiTreeElement = new _ReportingApiTreeElement_js__WEBPACK_IMPORTED_MODULE_25__.ReportingApiTreeElement(panel);
        backgroundServiceTreeElement.appendChild(_this.reportingApiTreeElement);
        var resourcesSectionTitle = i18nString(UIStrings.frames);
        var resourcesTreeElement = _this.addSidebarSection(resourcesSectionTitle, 'frames');
        _this.resourcesSection = new ResourcesSection(panel, resourcesTreeElement);
        _this.domStorageTreeElements = new Map();
        _this.sharedStorageTreeElements = new Map();
        _this.domains = {};
        _this.sidebarTree.contentElement.addEventListener('mousemove', _this.onmousemove.bind(_assert_this_initialized(_this)), false);
        _this.sidebarTree.contentElement.addEventListener('mouseleave', _this.onmouseleave.bind(_assert_this_initialized(_this)), false);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(_assert_this_initialized(_this), {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.FrameNavigated, _this.frameNavigated, _assert_this_initialized(_this), {
            scoped: true
        });
        var selection = _this.panel.lastSelectedItemPath();
        if (!selection.length) {
            manifestTreeElement.select();
        }
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_DOMStorageModel_js__WEBPACK_IMPORTED_MODULE_18__.DOMStorageModel, {
            modelAdded: function(model) {
                return _this.domStorageModelAdded(model);
            },
            modelRemoved: function(model) {
                return _this.domStorageModelRemoved(model);
            }
        }, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, {
            modelAdded: function(model) {
                return _this.indexedDBModelAdded(model);
            },
            modelRemoved: function(model) {
                return _this.indexedDBModelRemoved(model);
            }
        }, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel, {
            modelAdded: function(model) {
                return _this.interestGroupModelAdded(model);
            },
            modelRemoved: function(model) {
                return _this.interestGroupModelRemoved(model);
            }
        }, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_SharedStorageModel_js__WEBPACK_IMPORTED_MODULE_30__.SharedStorageModel, {
            modelAdded: function(model) {
                return _this.sharedStorageModelAdded(model).catch(function(err) {
                    console.error(err);
                });
            },
            modelRemoved: function(model) {
                return _this.sharedStorageModelRemoved(model);
            }
        }, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.StorageBucketsModel.StorageBucketsModel, {
            modelAdded: function(model) {
                return _this.storageBucketsModelAdded(model);
            },
            modelRemoved: function(model) {
                return _this.storageBucketsModelRemoved(model);
            }
        }, {
            scoped: true
        });
        _this.sharedStorageTreeElementDispatcher = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.ObjectWrapper();
        // Work-around for crbug.com/1152713: Something is wrong with custom scrollbars and size containment.
        // @ts-ignore
        _this.contentElement.style.contain = 'layout style';
        return _this;
    }
    _create_class(ApplicationPanelSidebar, [
        {
            key: "addSidebarSection",
            value: function addSidebarSection(title, jslogContext) {
                var treeElement = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement(title, true, jslogContext);
                treeElement.listItemElement.classList.add('storage-group-list-item');
                treeElement.setCollapsible(false);
                treeElement.selectable = false;
                this.sidebarTree.appendChild(treeElement);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.markAsHeading(treeElement.listItemElement, 3);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(treeElement.childrenListElement, title);
                return treeElement;
            }
        },
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                if (target !== target.outermostTarget()) {
                    return;
                }
                this.target = target;
                var interestGroupModel = target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel);
                if (interestGroupModel) {
                    interestGroupModel.addEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */ , this.interestGroupAccess, this);
                }
                var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
                if (!resourceTreeModel) {
                    return;
                }
                if (resourceTreeModel.cachedResourcesLoaded()) {
                    this.initialize();
                }
                resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.CachedResourcesLoaded, this.initialize, this);
                resourceTreeModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.WillLoadCachedResources, this.resetWithFrames, this);
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(target) {
                if (target !== this.target) {
                    return;
                }
                delete this.target;
                var resourceTreeModel = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel);
                if (resourceTreeModel) {
                    resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.CachedResourcesLoaded, this.initialize, this);
                    resourceTreeModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.Events.WillLoadCachedResources, this.resetWithFrames, this);
                }
                var interestGroupModel = target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel);
                if (interestGroupModel) {
                    interestGroupModel.removeEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */ , this.interestGroupAccess, this);
                }
                this.resetWithFrames();
            }
        },
        {
            key: "focus",
            value: function focus() {
                this.sidebarTree.focus();
            }
        },
        {
            key: "initialize",
            value: function initialize() {
                var _this_storageBucketsTreeElement;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ResourceTreeModel.ResourceTreeModel.frames()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var frame = _step.value;
                        this.addCookieDocument(frame);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var interestGroupModel = this.target && this.target.model(_InterestGroupStorageModel_js__WEBPACK_IMPORTED_MODULE_21__.InterestGroupStorageModel);
                if (interestGroupModel) {
                    interestGroupModel.enable();
                }
                this.cacheStorageListTreeElement.initialize();
                var backgroundServiceModel = this.target && this.target.model(_BackgroundServiceModel_js__WEBPACK_IMPORTED_MODULE_14__.BackgroundServiceModel) || null;
                this.backgroundFetchTreeElement && this.backgroundFetchTreeElement.initialize(backgroundServiceModel);
                this.backgroundSyncTreeElement && this.backgroundSyncTreeElement.initialize(backgroundServiceModel);
                this.notificationsTreeElement.initialize(backgroundServiceModel);
                this.paymentHandlerTreeElement.initialize(backgroundServiceModel);
                this.periodicBackgroundSyncTreeElement.initialize(backgroundServiceModel);
                this.pushMessagingTreeElement.initialize(backgroundServiceModel);
                (_this_storageBucketsTreeElement = this.storageBucketsTreeElement) === null || _this_storageBucketsTreeElement === void 0 ? void 0 : _this_storageBucketsTreeElement.initialize();
                if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_4__.Runtime.experiments.isEnabled("preloading-status-panel" /* Root.Runtime.ExperimentName.PRELOADING_STATUS_PANEL */ )) {
                    var _this_target;
                    var preloadingModel = (_this_target = this.target) === null || _this_target === void 0 ? void 0 : _this_target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.PreloadingModel.PreloadingModel);
                    if (preloadingModel) {
                        var _this_preloadingSummaryTreeElement;
                        (_this_preloadingSummaryTreeElement = this.preloadingSummaryTreeElement) === null || _this_preloadingSummaryTreeElement === void 0 ? void 0 : _this_preloadingSummaryTreeElement.initialize(preloadingModel);
                    }
                }
            }
        },
        {
            key: "domStorageModelAdded",
            value: function domStorageModelAdded(model) {
                model.enable();
                model.storages().forEach(this.addDOMStorage.bind(this));
                model.addEventListener("DOMStorageAdded" /* DOMStorageModelEvents.DOMStorageAdded */ , this.domStorageAdded, this);
                model.addEventListener("DOMStorageRemoved" /* DOMStorageModelEvents.DOMStorageRemoved */ , this.domStorageRemoved, this);
            }
        },
        {
            key: "domStorageModelRemoved",
            value: function domStorageModelRemoved(model) {
                model.storages().forEach(this.removeDOMStorage.bind(this));
                model.removeEventListener("DOMStorageAdded" /* DOMStorageModelEvents.DOMStorageAdded */ , this.domStorageAdded, this);
                model.removeEventListener("DOMStorageRemoved" /* DOMStorageModelEvents.DOMStorageRemoved */ , this.domStorageRemoved, this);
            }
        },
        {
            key: "indexedDBModelAdded",
            value: function indexedDBModelAdded(model) {
                model.enable();
                this.indexedDBListTreeElement.addIndexedDBForModel(model);
            }
        },
        {
            key: "indexedDBModelRemoved",
            value: function indexedDBModelRemoved(model) {
                this.indexedDBListTreeElement.removeIndexedDBForModel(model);
            }
        },
        {
            key: "interestGroupModelAdded",
            value: function interestGroupModelAdded(model) {
                model.enable();
                model.addEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */ , this.interestGroupAccess, this);
            }
        },
        {
            key: "interestGroupModelRemoved",
            value: function interestGroupModelRemoved(model) {
                model.disable();
                model.removeEventListener("InterestGroupAccess" /* InterestGroupModelEvents.InterestGroupAccess */ , this.interestGroupAccess, this);
            }
        },
        {
            key: "sharedStorageModelAdded",
            value: function sharedStorageModelAdded(model) {
                var _this = this;
                return _async_to_generator(function() {
                    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, storage, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    model.enable()
                                ];
                            case 1:
                                _state.sent();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 2;
                            case 2:
                                _state.trys.push([
                                    2,
                                    7,
                                    8,
                                    9
                                ]);
                                _iterator = model.storages()[Symbol.iterator]();
                                _state.label = 3;
                            case 3:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    6
                                ];
                                storage = _step.value;
                                return [
                                    4,
                                    _this.addSharedStorage(storage)
                                ];
                            case 4:
                                _state.sent();
                                _state.label = 5;
                            case 5:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    3
                                ];
                            case 6:
                                return [
                                    3,
                                    9
                                ];
                            case 7:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    9
                                ];
                            case 8:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 9:
                                model.addEventListener("SharedStorageAdded" /* SharedStorageModelEvents.SharedStorageAdded */ , _this.sharedStorageAdded, _this);
                                model.addEventListener("SharedStorageRemoved" /* SharedStorageModelEvents.SharedStorageRemoved */ , _this.sharedStorageRemoved, _this);
                                model.addEventListener("SharedStorageAccess" /* SharedStorageModelEvents.SharedStorageAccess */ , _this.sharedStorageAccess, _this);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sharedStorageModelRemoved",
            value: function sharedStorageModelRemoved(model) {
                model.disable();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = model.storages()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var storage = _step.value;
                        this.removeSharedStorage(storage);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                model.removeEventListener("SharedStorageAdded" /* SharedStorageModelEvents.SharedStorageAdded */ , this.sharedStorageAdded, this);
                model.removeEventListener("SharedStorageRemoved" /* SharedStorageModelEvents.SharedStorageRemoved */ , this.sharedStorageRemoved, this);
                model.removeEventListener("SharedStorageAccess" /* SharedStorageModelEvents.SharedStorageAccess */ , this.sharedStorageAccess, this);
            }
        },
        {
            key: "storageBucketsModelAdded",
            value: function storageBucketsModelAdded(model) {
                model.enable();
            }
        },
        {
            key: "storageBucketsModelRemoved",
            value: function storageBucketsModelRemoved(model) {
                var _this_storageBucketsTreeElement;
                (_this_storageBucketsTreeElement = this.storageBucketsTreeElement) === null || _this_storageBucketsTreeElement === void 0 ? void 0 : _this_storageBucketsTreeElement.removeBucketsForModel(model);
            }
        },
        {
            key: "resetWithFrames",
            value: function resetWithFrames() {
                this.resourcesSection.reset();
                this.reset();
            }
        },
        {
            key: "treeElementAdded",
            value: function treeElementAdded(event) {
                // On tree item selection its itemURL and those of its parents are persisted.
                // On reload/navigation we check for matches starting from the root on the
                // path to the current element. Matching nodes are expanded until we hit a
                // mismatch. This way we ensure that the longest matching path starting from
                // the root is expanded, even if we cannot match the whole path.
                var selection = this.panel.lastSelectedItemPath();
                if (!selection.length) {
                    return;
                }
                var element = event.data;
                var elementPath = [
                    element
                ];
                for(var parent = element.parent; parent && ('itemURL' in parent) && parent.itemURL; parent = parent.parent){
                    elementPath.push(parent);
                }
                var i = selection.length - 1;
                var j = elementPath.length - 1;
                while(i >= 0 && j >= 0 && selection[i] === elementPath[j].itemURL){
                    if (!elementPath[j].expanded) {
                        if (i > 0) {
                            elementPath[j].expand();
                        }
                        if (!elementPath[j].selected) {
                            elementPath[j].select();
                        }
                    }
                    i--;
                    j--;
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.domains = {};
                this.cookieListTreeElement.removeChildren();
                this.interestGroupTreeElement.clearEvents();
            }
        },
        {
            key: "frameNavigated",
            value: function frameNavigated(event) {
                var frame = event.data;
                if (frame.isOutermostFrame()) {
                    this.reset();
                }
                this.addCookieDocument(frame);
            }
        },
        {
            key: "interestGroupAccess",
            value: function interestGroupAccess(event) {
                this.interestGroupTreeElement.addEvent(event.data);
            }
        },
        {
            key: "addCookieDocument",
            value: function addCookieDocument(frame) {
                // In case the current frame was unreachable, show its cookies
                // instead of the error interstitials because they might help to
                // debug why the frame was unreachable.
                var urlToParse = frame.unreachableUrl() || frame.url;
                var parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(urlToParse);
                if (!parsedURL || parsedURL.scheme !== 'http' && parsedURL.scheme !== 'https' && parsedURL.scheme !== 'file') {
                    return;
                }
                var domain = parsedURL.securityOrigin();
                if (!this.domains[domain]) {
                    this.domains[domain] = true;
                    var cookieDomainTreeElement = new CookieTreeElement(this.panel, frame, parsedURL);
                    this.cookieListTreeElement.appendChild(cookieDomainTreeElement);
                }
            }
        },
        {
            key: "domStorageAdded",
            value: function domStorageAdded(event) {
                var domStorage = event.data;
                this.addDOMStorage(domStorage);
            }
        },
        {
            key: "addDOMStorage",
            value: function addDOMStorage(domStorage) {
                console.assert(!this.domStorageTreeElements.get(domStorage));
                console.assert(Boolean(domStorage.storageKey));
                var domStorageTreeElement = new DOMStorageTreeElement(this.panel, domStorage);
                this.domStorageTreeElements.set(domStorage, domStorageTreeElement);
                if (domStorage.isLocalStorage) {
                    this.localStorageListTreeElement.appendChild(domStorageTreeElement, comparator);
                } else {
                    this.sessionStorageListTreeElement.appendChild(domStorageTreeElement, comparator);
                }
                function comparator(a, b) {
                    var aTitle = a.titleAsText().toLocaleLowerCase();
                    var bTitle = b.titleAsText().toLocaleUpperCase();
                    return aTitle.localeCompare(bTitle);
                }
            }
        },
        {
            key: "domStorageRemoved",
            value: function domStorageRemoved(event) {
                var domStorage = event.data;
                this.removeDOMStorage(domStorage);
            }
        },
        {
            key: "removeDOMStorage",
            value: function removeDOMStorage(domStorage) {
                var treeElement = this.domStorageTreeElements.get(domStorage);
                if (!treeElement) {
                    return;
                }
                var wasSelected = treeElement.selected;
                var parentListTreeElement = treeElement.parent;
                if (parentListTreeElement) {
                    parentListTreeElement.removeChild(treeElement);
                    if (wasSelected) {
                        parentListTreeElement.select();
                    }
                }
                this.domStorageTreeElements.delete(domStorage);
            }
        },
        {
            key: "sharedStorageAdded",
            value: function sharedStorageAdded(event) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.addSharedStorage(event.data)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "addSharedStorage",
            value: function addSharedStorage(sharedStorage) {
                var _this = this;
                return _async_to_generator(function() {
                    var sharedStorageTreeElement;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _SharedStorageTreeElement_js__WEBPACK_IMPORTED_MODULE_31__.SharedStorageTreeElement.createElement(_this.panel, sharedStorage)
                                ];
                            case 1:
                                sharedStorageTreeElement = _state.sent();
                                // A tree element for `sharedStorage.securityOrigin` may have been added while we were waiting for `sharedStorageTreeElement` to be created.
                                if (_this.sharedStorageTreeElements.has(sharedStorage.securityOrigin)) {
                                    return [
                                        2
                                    ];
                                }
                                _this.sharedStorageTreeElements.set(sharedStorage.securityOrigin, sharedStorageTreeElement);
                                _this.sharedStorageListTreeElement.appendChild(sharedStorageTreeElement);
                                _this.sharedStorageTreeElementDispatcher.dispatchEventToListeners("SharedStorageTreeElementAdded" /* SharedStorageTreeElementDispatcher.Events.SharedStorageTreeElementAdded */ , {
                                    origin: sharedStorage.securityOrigin
                                });
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "sharedStorageRemoved",
            value: function sharedStorageRemoved(event) {
                this.removeSharedStorage(event.data);
            }
        },
        {
            key: "removeSharedStorage",
            value: function removeSharedStorage(sharedStorage) {
                var treeElement = this.sharedStorageTreeElements.get(sharedStorage.securityOrigin);
                if (!treeElement) {
                    return;
                }
                var wasSelected = treeElement.selected;
                var parentListTreeElement = treeElement.parent;
                if (parentListTreeElement) {
                    parentListTreeElement.removeChild(treeElement);
                    parentListTreeElement.setExpandable(parentListTreeElement.childCount() > 0);
                    if (wasSelected) {
                        parentListTreeElement.select();
                    }
                }
                this.sharedStorageTreeElements.delete(sharedStorage.securityOrigin);
            }
        },
        {
            key: "sharedStorageAccess",
            value: function sharedStorageAccess(event) {
                this.sharedStorageListTreeElement.addEvent(event.data);
            }
        },
        {
            key: "showResource",
            value: function showResource(resource, line, column) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.resourcesSection.revealResource(resource, line, column)
                                ];
                            case 1:
                                _state.sent();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "showFrame",
            value: function showFrame(frame) {
                this.resourcesSection.revealAndSelectFrame(frame);
            }
        },
        {
            key: "showFileSystem",
            value: function showFileSystem(view) {
                this.innerShowView(view);
            }
        },
        {
            key: "innerShowView",
            value: function innerShowView(view) {
                this.panel.showView(view);
            }
        },
        {
            key: "showPreloadingRuleSetView",
            value: function showPreloadingRuleSetView(revealInfo) {
                if (this.preloadingSummaryTreeElement) {
                    this.preloadingSummaryTreeElement.expandAndRevealRuleSet(revealInfo);
                }
            }
        },
        {
            key: "showPreloadingAttemptViewWithFilter",
            value: function showPreloadingAttemptViewWithFilter(filter) {
                if (this.preloadingSummaryTreeElement) {
                    this.preloadingSummaryTreeElement.expandAndRevealAttempts(filter);
                }
            }
        },
        {
            key: "onmousemove",
            value: function onmousemove(event) {
                var nodeUnderMouse = event.target;
                if (!nodeUnderMouse) {
                    return;
                }
                var listNode = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.UIUtils.enclosingNodeOrSelfWithNodeName(nodeUnderMouse, 'li');
                if (!listNode) {
                    return;
                }
                var element = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.TreeOutline.TreeElement.getTreeElementBylistItemNode(listNode);
                if (this.previousHoveredElement === element) {
                    return;
                }
                if (this.previousHoveredElement) {
                    this.previousHoveredElement.hovered = false;
                    delete this.previousHoveredElement;
                }
                if (_instanceof(element, FrameTreeElement)) {
                    this.previousHoveredElement = element;
                    element.hovered = true;
                }
            }
        },
        {
            key: "onmouseleave",
            value: function onmouseleave(_event) {
                if (this.previousHoveredElement) {
                    this.previousHoveredElement.hovered = false;
                    delete this.previousHoveredElement;
                }
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ApplicationPanelSidebar.prototype), "wasShown", this).call(this);
                this.sidebarTree.registerCSSFiles([
                    _resourcesSidebar_css_js__WEBPACK_IMPORTED_MODULE_26__["default"]
                ]);
            }
        }
    ]);
    return ApplicationPanelSidebar;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox);
var BackgroundServiceTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(BackgroundServiceTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(BackgroundServiceTreeElement);
    function BackgroundServiceTreeElement(storagePanel, serviceName) {
        _class_call_check(this, BackgroundServiceTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__.BackgroundServiceView.getUIString(serviceName), false, _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.toKebabCase(serviceName));
        _define_property(_assert_this_initialized(_this), "serviceName", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "selectedInternal", void 0);
        _this.serviceName = serviceName;
        /* Whether the element has been selected. */ _this.selectedInternal = false;
        _this.view = null;
        _this.model = null;
        var backgroundServiceIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create(_this.getIconType());
        _this.setLeadingIcons([
            backgroundServiceIcon
        ]);
        return _this;
    }
    _create_class(BackgroundServiceTreeElement, [
        {
            key: "getIconType",
            value: function getIconType() {
                switch(this.serviceName){
                    case "backgroundFetch" /* Protocol.BackgroundService.ServiceName.BackgroundFetch */ :
                        return 'arrow-up-down';
                    case "backgroundSync" /* Protocol.BackgroundService.ServiceName.BackgroundSync */ :
                        return 'sync';
                    case "pushMessaging" /* Protocol.BackgroundService.ServiceName.PushMessaging */ :
                        return 'cloud';
                    case "notifications" /* Protocol.BackgroundService.ServiceName.Notifications */ :
                        return 'bell';
                    case "paymentHandler" /* Protocol.BackgroundService.ServiceName.PaymentHandler */ :
                        return 'credit-card';
                    case "periodicBackgroundSync" /* Protocol.BackgroundService.ServiceName.PeriodicBackgroundSync */ :
                        return 'watch';
                    default:
                        console.error("Service ".concat(this.serviceName, " does not have a dedicated icon"));
                        return 'table';
                }
            }
        },
        {
            key: "initialize",
            value: function initialize(model) {
                this.model = model;
                // Show the view if the model was initialized after selection.
                if (this.selectedInternal && !this.view) {
                    this.onselect(false);
                }
            }
        },
        {
            key: "itemURL",
            get: function get() {
                return "background-service://".concat(this.serviceName);
            }
        },
        {
            key: "selectable",
            get: function get() {
                if (!this.model) {
                    return false;
                }
                return _get(_get_prototype_of(BackgroundServiceTreeElement.prototype), "selectable", this);
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(BackgroundServiceTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                this.selectedInternal = true;
                if (!this.model) {
                    return false;
                }
                if (!this.view) {
                    this.view = new _BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__.BackgroundServiceView(this.serviceName, this.model);
                }
                this.showView(this.view);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Context.Context.instance().setFlavor(_BackgroundServiceView_js__WEBPACK_IMPORTED_MODULE_15__.BackgroundServiceView, this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('background_service_' + this.serviceName);
                return false;
            }
        }
    ]);
    return BackgroundServiceTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var ServiceWorkersTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(ServiceWorkersTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(ServiceWorkersTreeElement);
    function ServiceWorkersTreeElement(storagePanel) {
        _class_call_check(this, ServiceWorkersTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Service workers'), false, 'service-workers');
        _define_property(_assert_this_initialized(_this), "view", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('gears');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(ServiceWorkersTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'service-workers://';
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(ServiceWorkersTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = new _ServiceWorkersView_js__WEBPACK_IMPORTED_MODULE_28__.ServiceWorkersView();
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('service-workers');
                return false;
            }
        }
    ]);
    return ServiceWorkersTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var AppManifestTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(AppManifestTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(AppManifestTreeElement);
    function AppManifestTreeElement(storagePanel) {
        _class_call_check(this, AppManifestTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, i18nString(UIStrings.manifest), true, 'manifest');
        _define_property(_assert_this_initialized(_this), "view", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('document');
        _this.setLeadingIcons([
            icon
        ]);
        self.onInvokeElement(_this.listItemElement, _this.onInvoke.bind(_assert_this_initialized(_this)));
        var emptyView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noManifestDetected));
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        var reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ReportView.ReportView(i18nString(UIStrings.appManifest));
        _this.view = new _AppManifestView_js__WEBPACK_IMPORTED_MODULE_12__.AppManifestView(emptyView, reportView, new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(1000));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(_this.listItemElement, i18nString(UIStrings.onInvokeManifestAlert));
        var handleExpansion = function(hasManifest) {
            _this.setExpandable(hasManifest);
        };
        _this.view.addEventListener("ManifestDetected" /* AppManifestViewEvents.ManifestDetected */ , function(event) {
            return handleExpansion(event.data);
        });
        return _this;
    }
    _create_class(AppManifestTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'manifest://';
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(AppManifestTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('app-manifest');
                return false;
            }
        },
        {
            key: "generateChildren",
            value: function generateChildren() {
                var staticSections = this.view.getStaticSections();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = staticSections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var section = _step.value;
                        var sectionElement = section.getTitleElement();
                        var childTitle = section.title();
                        var sectionFieldElement = section.getFieldElement();
                        var child = new ManifestChildTreeElement(this.resourcesPanel, sectionElement, childTitle, sectionFieldElement, section.jslogContext || '');
                        this.appendChild(child);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "onInvoke",
            value: function onInvoke() {
                this.view.getManifestElement().scrollIntoView();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.alert(i18nString(UIStrings.onInvokeAlert, {
                    PH1: this.listItemElement.title
                }));
            }
        },
        {
            key: "showManifestView",
            value: function showManifestView() {
                this.showView(this.view);
            }
        }
    ]);
    return AppManifestTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var _sectionElement = /*#__PURE__*/ new WeakMap(), _sectionFieldElement = /*#__PURE__*/ new WeakMap();
var ManifestChildTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(ManifestChildTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(ManifestChildTreeElement);
    function ManifestChildTreeElement(storagePanel, element, childTitle, fieldElement, jslogContext) {
        _class_call_check(this, ManifestChildTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, childTitle, false, jslogContext);
        _class_private_field_init(_assert_this_initialized(_this), _sectionElement, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _sectionFieldElement, {
            writable: true,
            value: void 0
        });
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('document');
        _this.setLeadingIcons([
            icon
        ]);
        _class_private_field_set(_assert_this_initialized(_this), _sectionElement, element);
        _class_private_field_set(_assert_this_initialized(_this), _sectionFieldElement, fieldElement);
        self.onInvokeElement(_this.listItemElement, _this.onInvoke.bind(_assert_this_initialized(_this)));
        _this.listItemElement.addEventListener('keydown', _this.onInvokeElementKeydown.bind(_assert_this_initialized(_this)));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(_this.listItemElement, i18nString(UIStrings.beforeInvokeAlert, {
            PH1: _this.listItemElement.title
        }));
        return _this;
    }
    _create_class(ManifestChildTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'manifest://' + this.title;
            }
        },
        {
            key: "onInvoke",
            value: function onInvoke() {
                var _this_parent;
                (_this_parent = this.parent) === null || _this_parent === void 0 ? void 0 : _this_parent.showManifestView();
                _class_private_field_get(this, _sectionElement).scrollIntoView();
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.alert(i18nString(UIStrings.onInvokeAlert, {
                    PH1: this.listItemElement.title
                }));
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.manifestSectionSelected(this.listItemElement.title);
            }
        },
        {
            // direct focus to the corresponding element
            key: "onInvokeElementKeydown",
            value: function onInvokeElementKeydown(event) {
                if (event.key !== 'Tab' || event.shiftKey) {
                    return;
                }
                var checkBoxElement = _class_private_field_get(this, _sectionFieldElement).querySelector('.mask-checkbox');
                var focusableElement = _class_private_field_get(this, _sectionFieldElement).querySelector('[tabindex="0"]');
                if (checkBoxElement && checkBoxElement.shadowRoot) {
                    focusableElement = checkBoxElement.shadowRoot.querySelector('input') || null;
                } else if (!focusableElement) {
                    var _class_private_field_get_querySelector_shadowRoot, _class_private_field_get_querySelector;
                    // special case for protocol handler section since it is a custom Element and has different structure than the others
                    focusableElement = ((_class_private_field_get_querySelector = _class_private_field_get(this, _sectionFieldElement).querySelector('devtools-protocol-handlers-view')) === null || _class_private_field_get_querySelector === void 0 ? void 0 : (_class_private_field_get_querySelector_shadowRoot = _class_private_field_get_querySelector.shadowRoot) === null || _class_private_field_get_querySelector_shadowRoot === void 0 ? void 0 : _class_private_field_get_querySelector_shadowRoot.querySelector('[tabindex="0"]')) || null;
                }
                if (focusableElement) {
                    focusableElement === null || focusableElement === void 0 ? void 0 : focusableElement.focus();
                    event.consume(true);
                }
            }
        }
    ]);
    return ManifestChildTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var ClearStorageTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(ClearStorageTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(ClearStorageTreeElement);
    function ClearStorageTreeElement(storagePanel) {
        _class_call_check(this, ClearStorageTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, i18nString(UIStrings.storage), false, 'storage');
        _define_property(_assert_this_initialized(_this), "view", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(ClearStorageTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'clear-storage://';
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(ClearStorageTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = new _StorageView_js__WEBPACK_IMPORTED_MODULE_33__.StorageView();
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes[_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes.storage]);
                return false;
            }
        }
    ]);
    return ClearStorageTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var IndexedDBTreeElement = /*#__PURE__*/ function(ExpandableApplicationPanelTreeElement) {
    "use strict";
    _inherits(IndexedDBTreeElement, ExpandableApplicationPanelTreeElement);
    var _super = _create_super(IndexedDBTreeElement);
    function IndexedDBTreeElement(storagePanel, storageBucket) {
        _class_call_check(this, IndexedDBTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, i18nString(UIStrings.indexeddb), 'indexed-db');
        _define_property(_assert_this_initialized(_this), "idbDatabaseTreeElements", void 0);
        _define_property(_assert_this_initialized(_this), "storageBucket", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        _this.idbDatabaseTreeElements = [];
        _this.storageBucket = storageBucket;
        _this.initialize();
        return _this;
    }
    _create_class(IndexedDBTreeElement, [
        {
            key: "initialize",
            value: function initialize() {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseAdded, this.indexedDBAdded, this, {
                    scoped: true
                });
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseRemoved, this.indexedDBRemoved, this, {
                    scoped: true
                });
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseLoaded, this.indexedDBLoaded, this, {
                    scoped: true
                });
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, _IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.IndexedDBContentUpdated, this.indexedDBContentUpdated, this, {
                    scoped: true
                });
                // TODO(szuend): Replace with a Set once two web tests no longer directly access this private
                //               variable (indexeddb/live-update-indexeddb-content.js, indexeddb/delete-entry.js).
                this.idbDatabaseTreeElements = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, {
                        scoped: true
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var indexedDBModel = _step.value;
                        var databases = indexedDBModel.databases();
                        for(var j = 0; j < databases.length; ++j){
                            this.addIndexedDB(indexedDBModel, databases[j]);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "addIndexedDBForModel",
            value: function addIndexedDBForModel(model) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = model.databases()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var databaseId = _step.value;
                        this.addIndexedDB(model, databaseId);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "removeIndexedDBForModel",
            value: function removeIndexedDBForModel(model) {
                var idbDatabaseTreeElements = this.idbDatabaseTreeElements.filter(function(element) {
                    return element.model === model;
                });
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = idbDatabaseTreeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var idbDatabaseTreeElement = _step.value;
                        this.removeIDBDatabaseTreeElement(idbDatabaseTreeElement);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(IndexedDBTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.refreshIndexeddb), this.refreshIndexedDB.bind(this), {
                    jslogContext: 'refresh-indexeddb'
                });
                void contextMenu.show();
            }
        },
        {
            key: "refreshIndexedDB",
            value: function refreshIndexedDB() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().models(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.IndexedDBModel, {
                        scoped: true
                    })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var indexedDBModel = _step.value;
                        void indexedDBModel.refreshDatabaseNames();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "databaseInTree",
            value: function databaseInTree(databaseId) {
                if (this.storageBucket) {
                    return databaseId.inBucket(this.storageBucket);
                }
                return true;
            }
        },
        {
            key: "indexedDBAdded",
            value: function indexedDBAdded(param) {
                var _param_data = param.data, databaseId = _param_data.databaseId, model = _param_data.model;
                this.addIndexedDB(model, databaseId);
            }
        },
        {
            key: "addIndexedDB",
            value: function addIndexedDB(model, databaseId) {
                if (!this.databaseInTree(databaseId)) {
                    return;
                }
                var idbDatabaseTreeElement = new IDBDatabaseTreeElement(this.resourcesPanel, model, databaseId);
                this.idbDatabaseTreeElements.push(idbDatabaseTreeElement);
                this.appendChild(idbDatabaseTreeElement);
                model.refreshDatabase(databaseId);
            }
        },
        {
            key: "indexedDBRemoved",
            value: function indexedDBRemoved(param) {
                var _param_data = param.data, databaseId = _param_data.databaseId, model = _param_data.model;
                var idbDatabaseTreeElement = this.idbDatabaseTreeElement(model, databaseId);
                if (!idbDatabaseTreeElement) {
                    return;
                }
                this.removeIDBDatabaseTreeElement(idbDatabaseTreeElement);
            }
        },
        {
            key: "removeIDBDatabaseTreeElement",
            value: function removeIDBDatabaseTreeElement(idbDatabaseTreeElement) {
                idbDatabaseTreeElement.clear();
                this.removeChild(idbDatabaseTreeElement);
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.ArrayUtilities.removeElement(this.idbDatabaseTreeElements, idbDatabaseTreeElement);
                this.setExpandable(this.childCount() > 0);
            }
        },
        {
            key: "indexedDBLoaded",
            value: function indexedDBLoaded(param) {
                var _param_data = param.data, database = _param_data.database, model = _param_data.model, entriesUpdated = _param_data.entriesUpdated;
                var idbDatabaseTreeElement = this.idbDatabaseTreeElement(model, database.databaseId);
                if (!idbDatabaseTreeElement) {
                    return;
                }
                idbDatabaseTreeElement.update(database, entriesUpdated);
                this.indexedDBLoadedForTest();
            }
        },
        {
            key: "indexedDBLoadedForTest",
            value: function indexedDBLoadedForTest() {
            // For sniffing in tests.
            }
        },
        {
            key: "indexedDBContentUpdated",
            value: function indexedDBContentUpdated(param) {
                var _param_data = param.data, databaseId = _param_data.databaseId, objectStoreName = _param_data.objectStoreName, model = _param_data.model;
                var idbDatabaseTreeElement = this.idbDatabaseTreeElement(model, databaseId);
                if (!idbDatabaseTreeElement) {
                    return;
                }
                idbDatabaseTreeElement.indexedDBContentUpdated(objectStoreName);
            }
        },
        {
            key: "idbDatabaseTreeElement",
            value: function idbDatabaseTreeElement(model, databaseId) {
                return this.idbDatabaseTreeElements.find(function(x) {
                    return x.databaseId.equals(databaseId) && x.model === model;
                }) || null;
            }
        }
    ]);
    return IndexedDBTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement);
var IDBDatabaseTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(IDBDatabaseTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(IDBDatabaseTreeElement);
    function IDBDatabaseTreeElement(storagePanel, model, databaseId) {
        _class_call_check(this, IDBDatabaseTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, databaseId.name, false, 'indexed-db-database');
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "databaseId", void 0);
        _define_property(_assert_this_initialized(_this), "idbObjectStoreTreeElements", void 0);
        _define_property(_assert_this_initialized(_this), "database", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.model = model;
        _this.databaseId = databaseId;
        _this.idbObjectStoreTreeElements = new Map();
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        _this.model.addEventListener(_IndexedDBModel_js__WEBPACK_IMPORTED_MODULE_19__.Events.DatabaseNamesRefreshed, _this.refreshIndexedDB, _assert_this_initialized(_this));
        return _this;
    }
    _create_class(IDBDatabaseTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                var _this_databaseId_storageBucket_name;
                return 'indexedDB://' + this.databaseId.storageBucket.storageKey + '/' + ((_this_databaseId_storageBucket_name = this.databaseId.storageBucket.name) !== null && _this_databaseId_storageBucket_name !== void 0 ? _this_databaseId_storageBucket_name : '') + '/' + this.databaseId.name;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(IDBDatabaseTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.refreshIndexeddb), this.refreshIndexedDB.bind(this), {
                    jslogContext: 'refresh-indexeddb'
                });
                void contextMenu.show();
            }
        },
        {
            key: "refreshIndexedDB",
            value: function refreshIndexedDB() {
                this.model.refreshDatabase(this.databaseId);
            }
        },
        {
            key: "indexedDBContentUpdated",
            value: function indexedDBContentUpdated(objectStoreName) {
                var treeElement = this.idbObjectStoreTreeElements.get(objectStoreName);
                if (treeElement) {
                    treeElement.markNeedsRefresh();
                }
            }
        },
        {
            key: "update",
            value: function update(database, entriesUpdated) {
                this.database = database;
                var objectStoreNames = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _to_consumable_array(this.database.objectStores.keys()).sort()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var objectStoreName = _step.value;
                        var objectStore = this.database.objectStores.get(objectStoreName);
                        if (!objectStore) {
                            continue;
                        }
                        objectStoreNames.add(objectStore.name);
                        var treeElement = this.idbObjectStoreTreeElements.get(objectStore.name);
                        if (!treeElement) {
                            treeElement = new IDBObjectStoreTreeElement(this.resourcesPanel, this.model, this.databaseId, objectStore);
                            this.idbObjectStoreTreeElements.set(objectStore.name, treeElement);
                            this.appendChild(treeElement);
                        }
                        treeElement.update(objectStore, entriesUpdated);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.idbObjectStoreTreeElements.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var objectStoreName1 = _step1.value;
                        if (!objectStoreNames.has(objectStoreName1)) {
                            this.objectStoreRemoved(objectStoreName1);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                if (this.view) {
                    this.view.getComponent().update(database);
                }
                this.updateTooltip();
            }
        },
        {
            key: "updateTooltip",
            value: function updateTooltip() {
                var version = this.database ? this.database.version : '-';
                if (Object.keys(this.idbObjectStoreTreeElements).length === 0) {
                    this.tooltip = i18nString(UIStrings.versionSEmpty, {
                        PH1: version
                    });
                } else {
                    this.tooltip = i18nString(UIStrings.versionS, {
                        PH1: version
                    });
                }
            }
        },
        {
            key: "selectable",
            get: function get() {
                if (!this.database) {
                    return false;
                }
                return _get(_get_prototype_of(IDBDatabaseTreeElement.prototype), "selectable", this);
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(IDBDatabaseTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.database) {
                    return false;
                }
                if (!this.view) {
                    this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox, new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__.IDBDatabaseView(this.model, this.database), 'indexeddb-data');
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('indexed-db');
                return false;
            }
        },
        {
            key: "objectStoreRemoved",
            value: function objectStoreRemoved(objectStoreName) {
                var objectStoreTreeElement = this.idbObjectStoreTreeElements.get(objectStoreName);
                if (objectStoreTreeElement) {
                    objectStoreTreeElement.clear();
                    this.removeChild(objectStoreTreeElement);
                }
                this.idbObjectStoreTreeElements.delete(objectStoreName);
                this.updateTooltip();
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.idbObjectStoreTreeElements.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var objectStoreName = _step.value;
                        this.objectStoreRemoved(objectStoreName);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        }
    ]);
    return IDBDatabaseTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var IDBObjectStoreTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(IDBObjectStoreTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(IDBObjectStoreTreeElement);
    function IDBObjectStoreTreeElement(storagePanel, model, databaseId, objectStore) {
        _class_call_check(this, IDBObjectStoreTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, objectStore.name, false, 'indexed-db-object-store');
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "databaseId", void 0);
        _define_property(_assert_this_initialized(_this), "idbIndexTreeElements", void 0);
        _define_property(_assert_this_initialized(_this), "objectStore", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.model = model;
        _this.databaseId = databaseId;
        _this.idbIndexTreeElements = new Map();
        _this.objectStore = objectStore;
        _this.view = null;
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(IDBObjectStoreTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                var _this_databaseId_storageBucket_name;
                return 'indexedDB://' + this.databaseId.storageBucket.storageKey + '/' + ((_this_databaseId_storageBucket_name = this.databaseId.storageBucket.name) !== null && _this_databaseId_storageBucket_name !== void 0 ? _this_databaseId_storageBucket_name : '') + '/' + this.databaseId.name + '/' + this.objectStore.name;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(IDBObjectStoreTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "markNeedsRefresh",
            value: function markNeedsRefresh() {
                if (this.view) {
                    this.view.markNeedsRefresh();
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.idbIndexTreeElements.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var treeElement = _step.value;
                        treeElement.markNeedsRefresh();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.clear), this.clearObjectStore.bind(this), {
                    jslogContext: 'clear'
                });
                void contextMenu.show();
            }
        },
        {
            key: "refreshObjectStore",
            value: function refreshObjectStore() {
                if (this.view) {
                    this.view.refreshData();
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.idbIndexTreeElements.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var treeElement = _step.value;
                        treeElement.refreshIndex();
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "clearObjectStore",
            value: function clearObjectStore() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.model.clearObjectStore(_this.databaseId, _this.objectStore.name)
                                ];
                            case 1:
                                _state.sent();
                                _this.update(_this.objectStore, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "update",
            value: function update(objectStore, entriesUpdated) {
                this.objectStore = objectStore;
                var indexNames = new Set();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.objectStore.indexes.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var index = _step.value;
                        indexNames.add(index.name);
                        var treeElement = this.idbIndexTreeElements.get(index.name);
                        if (!treeElement) {
                            treeElement = new IDBIndexTreeElement(this.resourcesPanel, this.model, this.databaseId, this.objectStore, index, this.refreshObjectStore.bind(this));
                            this.idbIndexTreeElements.set(index.name, treeElement);
                            this.appendChild(treeElement);
                        }
                        treeElement.update(this.objectStore, index, entriesUpdated);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.idbIndexTreeElements.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var indexName = _step1.value;
                        if (!indexNames.has(indexName)) {
                            this.indexRemoved(indexName);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = this.idbIndexTreeElements.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var _step_value = _sliced_to_array(_step2.value, 2), indexName1 = _step_value[0], treeElement1 = _step_value[1];
                        if (!indexNames.has(indexName1)) {
                            this.removeChild(treeElement1);
                            this.idbIndexTreeElements.delete(indexName1);
                        }
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                            _iterator2.return();
                        }
                    } finally{
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
                if (this.childCount()) {
                    this.expand();
                }
                if (this.view && entriesUpdated) {
                    this.view.update(this.objectStore, null);
                }
                this.updateTooltip();
            }
        },
        {
            key: "updateTooltip",
            value: function updateTooltip() {
                var keyPathString = this.objectStore.keyPathString;
                var tooltipString = keyPathString !== null ? i18nString(UIStrings.keyPathS, {
                    PH1: keyPathString
                }) : '';
                if (this.objectStore.autoIncrement) {
                    tooltipString += '\n' + _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('autoIncrement');
                }
                this.tooltip = tooltipString;
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(IDBObjectStoreTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__.IDBDataView(this.model, this.databaseId, this.objectStore, null, this.refreshObjectStore.bind(this));
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('indexed-db');
                return false;
            }
        },
        {
            key: "indexRemoved",
            value: function indexRemoved(indexName) {
                var indexTreeElement = this.idbIndexTreeElements.get(indexName);
                if (indexTreeElement) {
                    indexTreeElement.clear();
                    this.removeChild(indexTreeElement);
                }
                this.idbIndexTreeElements.delete(indexName);
            }
        },
        {
            key: "clear",
            value: function clear() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.idbIndexTreeElements.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var indexName = _step.value;
                        this.indexRemoved(indexName);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                if (this.view) {
                    this.view.clear();
                }
            }
        }
    ]);
    return IDBObjectStoreTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var IDBIndexTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(IDBIndexTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(IDBIndexTreeElement);
    function IDBIndexTreeElement(storagePanel, model, databaseId, objectStore, index, refreshObjectStore) {
        _class_call_check(this, IDBIndexTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, index.name, false, 'indexed-db');
        _define_property(_assert_this_initialized(_this), "model", void 0);
        _define_property(_assert_this_initialized(_this), "databaseId", void 0);
        _define_property(_assert_this_initialized(_this), "objectStore", void 0);
        _define_property(_assert_this_initialized(_this), "index", void 0);
        _define_property(_assert_this_initialized(_this), "refreshObjectStore", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.model = model;
        _this.databaseId = databaseId;
        _this.objectStore = objectStore;
        _this.index = index;
        _this.refreshObjectStore = refreshObjectStore;
        return _this;
    }
    _create_class(IDBIndexTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                var _this_databaseId_storageBucket_name;
                return 'indexedDB://' + this.databaseId.storageBucket.storageKey + '/' + ((_this_databaseId_storageBucket_name = this.databaseId.storageBucket.name) !== null && _this_databaseId_storageBucket_name !== void 0 ? _this_databaseId_storageBucket_name : '') + '/' + this.databaseId.name + '/' + this.objectStore.name + '/' + this.index.name;
            }
        },
        {
            key: "markNeedsRefresh",
            value: function markNeedsRefresh() {
                if (this.view) {
                    this.view.markNeedsRefresh();
                }
            }
        },
        {
            key: "refreshIndex",
            value: function refreshIndex() {
                if (this.view) {
                    this.view.refreshData();
                }
            }
        },
        {
            key: "update",
            value: function update(objectStore, index, entriesUpdated) {
                this.objectStore = objectStore;
                this.index = index;
                if (this.view && entriesUpdated) {
                    this.view.update(this.objectStore, this.index);
                }
                this.updateTooltip();
            }
        },
        {
            key: "updateTooltip",
            value: function updateTooltip() {
                var tooltipLines = [];
                var keyPathString = this.index.keyPathString;
                tooltipLines.push(i18nString(UIStrings.keyPathS, {
                    PH1: keyPathString
                }));
                if (this.index.unique) {
                    tooltipLines.push(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('unique'));
                }
                if (this.index.multiEntry) {
                    tooltipLines.push(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('multiEntry'));
                }
                this.tooltip = tooltipLines.join('\n');
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(IDBIndexTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = new _IndexedDBViews_js__WEBPACK_IMPORTED_MODULE_20__.IDBDataView(this.model, this.databaseId, this.objectStore, this.index, this.refreshObjectStore);
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('indexed-db');
                return false;
            }
        },
        {
            key: "clear",
            value: function clear() {
                if (this.view) {
                    this.view.clear();
                }
            }
        }
    ]);
    return IDBIndexTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var DOMStorageTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(DOMStorageTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(DOMStorageTreeElement);
    function DOMStorageTreeElement(storagePanel, domStorage) {
        _class_call_check(this, DOMStorageTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, domStorage.storageKey ? _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.StorageKeyManager.parseStorageKey(domStorage.storageKey).origin : i18nString(UIStrings.localFiles), false, domStorage.isLocalStorage ? 'local-storage-for-domain' : 'session-storage-for-domain');
        _define_property(_assert_this_initialized(_this), "domStorage", void 0);
        _this.domStorage = domStorage;
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('table');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(DOMStorageTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'storage://' + this.domStorage.storageKey + '/' + (this.domStorage.isLocalStorage ? 'local' : 'session');
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(DOMStorageTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('dom-storage');
                this.resourcesPanel.showDOMStorage(this.domStorage);
                return false;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(DOMStorageTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var _this = this;
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.clear), function() {
                    return _this.domStorage.clear();
                }, {
                    jslogContext: 'clear'
                });
                void contextMenu.show();
            }
        }
    ]);
    return DOMStorageTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var CookieTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(CookieTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(CookieTreeElement);
    function CookieTreeElement(storagePanel, frame, cookieUrl) {
        _class_call_check(this, CookieTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, cookieUrl.securityOrigin() || i18nString(UIStrings.localFiles), false, 'cookies-for-frame');
        _define_property(_assert_this_initialized(_this), "target", void 0);
        _define_property(_assert_this_initialized(_this), "cookieDomainInternal", void 0);
        _this.target = frame.resourceTreeModel().target();
        _this.cookieDomainInternal = cookieUrl.securityOrigin();
        _this.tooltip = i18nString(UIStrings.cookiesUsedByFramesFromS, {
            PH1: _this.cookieDomainInternal
        });
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('cookie');
        // Note that we cannot use `cookieDomainInternal` here since it contains scheme.
        if (_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.RelatedIssue.hasThirdPartyPhaseoutCookieIssueForDomain(cookieUrl.domain())) {
            icon.name = 'warning-filled';
            icon.classList.add('warn-icon');
            _this.tooltip = i18nString(UIStrings.thirdPartyPhaseout, {
                PH1: _this.cookieDomainInternal
            });
        }
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(CookieTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'cookies://' + this.cookieDomainInternal;
            }
        },
        {
            key: "cookieDomain",
            value: function cookieDomain() {
                return this.cookieDomainInternal;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(CookieTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var _this = this;
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                contextMenu.defaultSection().appendItem(i18nString(UIStrings.clear), function() {
                    return _this.resourcesPanel.clearCookies(_this.target, _this.cookieDomainInternal);
                }, {
                    jslogContext: 'clear'
                });
                void contextMenu.show();
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(CookieTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                this.resourcesPanel.showCookies(this.target, this.cookieDomainInternal);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes[_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.PanelCodes.cookies]);
                return false;
            }
        }
    ]);
    return CookieTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var StorageCategoryView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(StorageCategoryView, _UI_Widget_VBox);
    var _super = _create_super(StorageCategoryView);
    function StorageCategoryView() {
        _class_call_check(this, StorageCategoryView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "emptyWidget", void 0);
        _define_property(_assert_this_initialized(_this), "linkElement", void 0);
        _this.element.classList.add('storage-view');
        _this.emptyWidget = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.EmptyWidget.EmptyWidget('');
        _this.linkElement = null;
        _this.emptyWidget.show(_this.element);
        return _this;
    }
    _create_class(StorageCategoryView, [
        {
            key: "setText",
            value: function setText(text) {
                this.emptyWidget.text = text;
            }
        },
        {
            key: "setLink",
            value: function setLink(link) {
                if (link && !this.linkElement) {
                    this.linkElement = this.emptyWidget.appendLink(link);
                }
                if (!link && this.linkElement) {
                    this.linkElement.classList.add('hidden');
                }
                if (link && this.linkElement) {
                    this.linkElement.setAttribute('href', link);
                    this.linkElement.classList.remove('hidden');
                }
            }
        }
    ]);
    return StorageCategoryView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.VBox);
var ResourcesSection = /*#__PURE__*/ function() {
    "use strict";
    function ResourcesSection(storagePanel, treeElement) {
        var _this = this;
        _class_call_check(this, ResourcesSection);
        _define_property(this, "panel", void 0);
        _define_property(this, "treeElement", void 0);
        _define_property(this, "treeElementForFrameId", void 0);
        _define_property(this, "treeElementForTargetId", void 0);
        this.panel = storagePanel;
        this.treeElement = treeElement;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(this.treeElement.listItemNode, 'Resources Section');
        this.treeElementForFrameId = new Map();
        this.treeElementForTargetId = new Map();
        var frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.FrameManager.instance();
        frameManager.addEventListener("FrameAddedToTarget" /* SDK.FrameManager.Events.FrameAddedToTarget */ , function(event) {
            return _this.frameAdded(event.data.frame);
        }, this);
        frameManager.addEventListener("FrameRemoved" /* SDK.FrameManager.Events.FrameRemoved */ , function(event) {
            return _this.frameDetached(event.data.frameId);
        }, this);
        frameManager.addEventListener("FrameNavigated" /* SDK.FrameManager.Events.FrameNavigated */ , function(event) {
            return _this.frameNavigated(event.data.frame);
        }, this);
        frameManager.addEventListener("ResourceAdded" /* SDK.FrameManager.Events.ResourceAdded */ , function(event) {
            return _this.resourceAdded(event.data.resource);
        }, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, "TargetCreated" /* SDK.ChildTargetManager.Events.TargetCreated */ , this.windowOpened, this, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, "TargetInfoChanged" /* SDK.ChildTargetManager.Events.TargetInfoChanged */ , this.windowChanged, this, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager, "TargetDestroyed" /* SDK.ChildTargetManager.Events.TargetDestroyed */ , this.windowDestroyed, this, {
            scoped: true
        });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().observeTargets(this, {
            scoped: true
        });
    }
    _create_class(ResourcesSection, [
        {
            key: "initialize",
            value: function initialize() {
                var frameManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.FrameManager.FrameManager.instance();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = frameManager.getAllFrames()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var frame = _step.value;
                        if (!this.treeElementForFrameId.get(frame.id)) {
                            this.addFrameAndParents(frame);
                        }
                        var childTargetManager = frame.resourceTreeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.ChildTargetManager.ChildTargetManager);
                        if (childTargetManager) {
                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(var _iterator1 = childTargetManager.targetInfos()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    var targetInfo = _step1.value;
                                    this.windowOpened({
                                        data: targetInfo
                                    });
                                }
                            } catch (err) {
                                _didIteratorError1 = true;
                                _iteratorError1 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                        _iterator1.return();
                                    }
                                } finally{
                                    if (_didIteratorError1) {
                                        throw _iteratorError1;
                                    }
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "targetAdded",
            value: function targetAdded(target) {
                if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Worker || target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.ServiceWorker) {
                    void this.workerAdded(target);
                }
                if (target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.Frame && target === target.outermostTarget()) {
                    // Process existing frames, e.g. after prerendering activation or
                    // switching between outermost targets.
                    this.initialize();
                }
            }
        },
        {
            key: "workerAdded",
            value: function workerAdded(target) {
                var _this = this;
                return _async_to_generator(function() {
                    var parentTarget, parentTargetId, frameTreeElement, targetId, targetInfo;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                parentTarget = target.parentTarget();
                                if (!parentTarget) {
                                    return [
                                        2
                                    ];
                                }
                                parentTargetId = parentTarget.id();
                                frameTreeElement = _this.treeElementForTargetId.get(parentTargetId);
                                targetId = target.id();
                                assertNotMainTarget(targetId);
                                return [
                                    4,
                                    parentTarget.targetAgent().invoke_getTargetInfo({
                                        targetId: targetId
                                    })
                                ];
                            case 1:
                                targetInfo = _state.sent().targetInfo;
                                if (frameTreeElement && targetInfo) {
                                    frameTreeElement.workerCreated(targetInfo);
                                }
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "targetRemoved",
            value: function targetRemoved(_target) {}
        },
        {
            key: "addFrameAndParents",
            value: function addFrameAndParents(frame) {
                var parentFrame = frame.parentFrame();
                if (parentFrame && !this.treeElementForFrameId.get(parentFrame.id)) {
                    this.addFrameAndParents(parentFrame);
                }
                this.frameAdded(frame);
            }
        },
        {
            key: "expandFrame",
            value: function expandFrame(frame) {
                if (!frame) {
                    return false;
                }
                var treeElement = this.treeElementForFrameId.get(frame.id);
                if (!treeElement && !this.expandFrame(frame.parentFrame())) {
                    return false;
                }
                treeElement = this.treeElementForFrameId.get(frame.id);
                if (!treeElement) {
                    return false;
                }
                treeElement.expand();
                return true;
            }
        },
        {
            key: "revealResource",
            value: function revealResource(resource, line, column) {
                var _this = this;
                return _async_to_generator(function() {
                    var resourceTreeElement;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.expandFrame(resource.frame())) {
                                    return [
                                        2
                                    ];
                                }
                                resourceTreeElement = FrameResourceTreeElement.forResource(resource);
                                if (!resourceTreeElement) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    resourceTreeElement.revealResource(line, column)
                                ];
                            case 1:
                                _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "revealAndSelectFrame",
            value: function revealAndSelectFrame(frame) {
                var frameTreeElement = this.treeElementForFrameId.get(frame.id);
                frameTreeElement === null || frameTreeElement === void 0 ? void 0 : frameTreeElement.reveal();
                frameTreeElement === null || frameTreeElement === void 0 ? void 0 : frameTreeElement.select();
            }
        },
        {
            key: "frameAdded",
            value: function frameAdded(frame) {
                if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(frame.resourceTreeModel())) {
                    return;
                }
                var parentFrame = frame.parentFrame();
                var parentTreeElement = parentFrame ? this.treeElementForFrameId.get(parentFrame.id) : this.treeElement;
                if (!parentTreeElement) {
                    return;
                }
                var existingElement = this.treeElementForFrameId.get(frame.id);
                if (existingElement) {
                    this.treeElementForFrameId.delete(frame.id);
                    if (existingElement.parent) {
                        existingElement.parent.removeChild(existingElement);
                    }
                }
                var frameTreeElement = new FrameTreeElement(this, frame);
                this.treeElementForFrameId.set(frame.id, frameTreeElement);
                var targetId = frame.resourceTreeModel().target().id();
                if (!this.treeElementForTargetId.get(targetId)) {
                    this.treeElementForTargetId.set(targetId, frameTreeElement);
                }
                parentTreeElement.appendChild(frameTreeElement);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = frame.resources()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var resource = _step.value;
                        this.resourceAdded(resource);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "frameDetached",
            value: function frameDetached(frameId) {
                var frameTreeElement = this.treeElementForFrameId.get(frameId);
                if (!frameTreeElement) {
                    return;
                }
                this.treeElementForFrameId.delete(frameId);
                if (frameTreeElement.parent) {
                    frameTreeElement.parent.removeChild(frameTreeElement);
                }
            }
        },
        {
            key: "frameNavigated",
            value: function frameNavigated(frame) {
                if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(frame.resourceTreeModel())) {
                    return;
                }
                var frameTreeElement = this.treeElementForFrameId.get(frame.id);
                if (frameTreeElement) {
                    void frameTreeElement.frameNavigated(frame);
                }
            }
        },
        {
            key: "resourceAdded",
            value: function resourceAdded(resource) {
                var frame = resource.frame();
                if (!frame) {
                    return;
                }
                if (!_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(frame.resourceTreeModel())) {
                    return;
                }
                var frameTreeElement = this.treeElementForFrameId.get(frame.id);
                if (!frameTreeElement) {
                    // This is a frame's main resource, it will be retained
                    // and re-added by the resource manager;
                    return;
                }
                frameTreeElement.appendResource(resource);
            }
        },
        {
            key: "windowOpened",
            value: function windowOpened(event) {
                var targetInfo = event.data;
                // Events for DevTools windows are ignored because they do not have an openerId
                if (targetInfo.openerId && targetInfo.type === 'page') {
                    var frameTreeElement = this.treeElementForFrameId.get(targetInfo.openerId);
                    if (frameTreeElement) {
                        this.treeElementForTargetId.set(targetInfo.targetId, frameTreeElement);
                        frameTreeElement.windowOpened(targetInfo);
                    }
                }
            }
        },
        {
            key: "windowDestroyed",
            value: function windowDestroyed(event) {
                var targetId = event.data;
                var frameTreeElement = this.treeElementForTargetId.get(targetId);
                if (frameTreeElement) {
                    frameTreeElement.windowDestroyed(targetId);
                    this.treeElementForTargetId.delete(targetId);
                }
            }
        },
        {
            key: "windowChanged",
            value: function windowChanged(event) {
                var targetInfo = event.data;
                // Events for DevTools windows are ignored because they do not have an openerId
                if (targetInfo.openerId && targetInfo.type === 'page') {
                    var frameTreeElement = this.treeElementForFrameId.get(targetInfo.openerId);
                    if (frameTreeElement) {
                        frameTreeElement.windowChanged(targetInfo);
                    }
                }
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.treeElement.removeChildren();
                this.treeElementForFrameId.clear();
                this.treeElementForTargetId.clear();
            }
        }
    ]);
    return ResourcesSection;
}();
var FrameTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(FrameTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(FrameTreeElement);
    function FrameTreeElement(section, frame) {
        _class_call_check(this, FrameTreeElement);
        var _this;
        _this = _super.call(this, section.panel, '', false, 'frame');
        _define_property(_assert_this_initialized(_this), "section", void 0);
        _define_property(_assert_this_initialized(_this), "frame", void 0);
        _define_property(_assert_this_initialized(_this), "frameId", void 0);
        _define_property(_assert_this_initialized(_this), "categoryElements", void 0);
        _define_property(_assert_this_initialized(_this), "treeElementForResource", void 0);
        _define_property(_assert_this_initialized(_this), "treeElementForWindow", void 0);
        _define_property(_assert_this_initialized(_this), "treeElementForWorker", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.section = section;
        _this.frame = frame;
        _this.frameId = frame.id;
        _this.categoryElements = new Map();
        _this.treeElementForResource = new Map();
        _this.treeElementForWindow = new Map();
        _this.treeElementForWorker = new Map();
        void _this.frameNavigated(frame);
        _this.view = null;
        return _this;
    }
    _create_class(FrameTreeElement, [
        {
            key: "getIconTypeForFrame",
            value: function getIconTypeForFrame(frame) {
                if (frame.isOutermostFrame()) {
                    return frame.unreachableUrl() ? 'frame-crossed' : 'frame';
                }
                return frame.unreachableUrl() ? 'iframe-crossed' : 'iframe';
            }
        },
        {
            key: "frameNavigated",
            value: function frameNavigated(frame) {
                var _this = this;
                return _async_to_generator(function() {
                    var icon, parent, targets, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, target, targetId, agent, targetInfo, err;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create(_this.getIconTypeForFrame(frame));
                                if (frame.unreachableUrl()) {
                                    icon.classList.add('red-icon');
                                }
                                _this.setLeadingIcons([
                                    icon
                                ]);
                                _this.invalidateChildren();
                                _this.frameId = frame.id;
                                if (_this.title !== frame.displayName()) {
                                    _this.title = frame.displayName();
                                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ARIAUtils.setLabel(_this.listItemElement, _this.title);
                                    if (_this.parent) {
                                        parent = _this.parent;
                                        // Insert frame at new position to preserve correct alphabetical order
                                        parent.removeChild(_this);
                                        parent.appendChild(_this);
                                    }
                                }
                                _this.categoryElements.clear();
                                _this.treeElementForResource.clear();
                                _this.treeElementForWorker.clear();
                                if (_this.selected) {
                                    _this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_17__.FrameDetailsView.FrameDetailsReportView(_this.frame));
                                    _this.showView(_this.view);
                                } else {
                                    _this.view = null;
                                }
                                if (!frame.isOutermostFrame()) return [
                                    3,
                                    8
                                ];
                                targets = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().targets();
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _state.label = 1;
                            case 1:
                                _state.trys.push([
                                    1,
                                    6,
                                    7,
                                    8
                                ]);
                                _iterator = targets[Symbol.iterator]();
                                _state.label = 2;
                            case 2:
                                if (!!(_iteratorNormalCompletion = (_step = _iterator.next()).done)) return [
                                    3,
                                    5
                                ];
                                target = _step.value;
                                if (!(target.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.Target.Type.ServiceWorker && _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().isInScope(target))) return [
                                    3,
                                    4
                                ];
                                targetId = target.id();
                                assertNotMainTarget(targetId);
                                agent = frame.resourceTreeModel().target().targetAgent();
                                return [
                                    4,
                                    agent.invoke_getTargetInfo({
                                        targetId: targetId
                                    })
                                ];
                            case 3:
                                targetInfo = _state.sent().targetInfo;
                                _this.workerCreated(targetInfo);
                                _state.label = 4;
                            case 4:
                                _iteratorNormalCompletion = true;
                                return [
                                    3,
                                    2
                                ];
                            case 5:
                                return [
                                    3,
                                    8
                                ];
                            case 6:
                                err = _state.sent();
                                _didIteratorError = true;
                                _iteratorError = err;
                                return [
                                    3,
                                    8
                                ];
                            case 7:
                                try {
                                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                                        _iterator.return();
                                    }
                                } finally{
                                    if (_didIteratorError) {
                                        throw _iteratorError;
                                    }
                                }
                                return [
                                    7
                                ];
                            case 8:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "itemURL",
            get: function get() {
                // This is used to persist over reloads/navigation which frame was selected.
                // A frame's title can change on DevTools refresh, so we resort to using
                // the URL instead (even though it is not guaranteed to be unique).
                if (this.frame.isOutermostFrame()) {
                    return 'frame://';
                }
                return 'frame://' + encodeURI(this.frame.url);
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(FrameTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_8__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_17__.FrameDetailsView.FrameDetailsReportView(this.frame));
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-details');
                this.showView(this.view);
                this.listItemElement.classList.remove('hovered');
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                return false;
            }
        },
        {
            key: "hovered",
            set: function set(hovered) {
                if (hovered) {
                    this.listItemElement.classList.add('hovered');
                    void this.frame.highlight();
                } else {
                    this.listItemElement.classList.remove('hovered');
                    _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                }
            }
        },
        {
            key: "appendResource",
            value: function appendResource(resource) {
                var statusCode = resource.statusCode();
                if (statusCode >= 301 && statusCode <= 303) {
                    return;
                }
                var resourceType = resource.resourceType();
                var categoryName = resourceType.name();
                var categoryElement = resourceType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Document ? this : this.categoryElements.get(categoryName);
                if (!categoryElement) {
                    categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(this.section.panel, resource.resourceType().category().title(), categoryName, categoryName === 'Frames');
                    this.categoryElements.set(resourceType.name(), categoryElement);
                    this.appendChild(categoryElement, FrameTreeElement.presentationOrderCompare);
                }
                var resourceTreeElement = new FrameResourceTreeElement(this.section.panel, resource);
                categoryElement.appendChild(resourceTreeElement, FrameTreeElement.presentationOrderCompare);
                this.treeElementForResource.set(resource.url, resourceTreeElement);
            }
        },
        {
            key: "windowOpened",
            value: function windowOpened(targetInfo) {
                var categoryKey = 'opened-windows';
                var categoryElement = this.categoryElements.get(categoryKey);
                if (!categoryElement) {
                    categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(this.section.panel, i18nString(UIStrings.openedWindows), categoryKey);
                    this.categoryElements.set(categoryKey, categoryElement);
                    this.appendChild(categoryElement, FrameTreeElement.presentationOrderCompare);
                }
                if (!this.treeElementForWindow.get(targetInfo.targetId)) {
                    var windowTreeElement = new FrameWindowTreeElement(this.section.panel, targetInfo);
                    categoryElement.appendChild(windowTreeElement);
                    this.treeElementForWindow.set(targetInfo.targetId, windowTreeElement);
                }
            }
        },
        {
            key: "workerCreated",
            value: function workerCreated(targetInfo) {
                var categoryKey = targetInfo.type === 'service_worker' ? 'service-workers' : 'web-workers';
                var categoryName = targetInfo.type === 'service_worker' ? _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Service workers') : i18nString(UIStrings.webWorkers);
                var categoryElement = this.categoryElements.get(categoryKey);
                if (!categoryElement) {
                    categoryElement = new _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement(this.section.panel, categoryName, categoryKey);
                    this.categoryElements.set(categoryKey, categoryElement);
                    this.appendChild(categoryElement, FrameTreeElement.presentationOrderCompare);
                }
                if (!this.treeElementForWorker.get(targetInfo.targetId)) {
                    var workerTreeElement = new WorkerTreeElement(this.section.panel, targetInfo);
                    categoryElement.appendChild(workerTreeElement);
                    this.treeElementForWorker.set(targetInfo.targetId, workerTreeElement);
                }
            }
        },
        {
            key: "windowChanged",
            value: function windowChanged(targetInfo) {
                var windowTreeElement = this.treeElementForWindow.get(targetInfo.targetId);
                if (!windowTreeElement) {
                    return;
                }
                if (windowTreeElement.title !== targetInfo.title) {
                    windowTreeElement.title = targetInfo.title;
                }
                windowTreeElement.update(targetInfo);
            }
        },
        {
            key: "windowDestroyed",
            value: function windowDestroyed(targetId) {
                var windowTreeElement = this.treeElementForWindow.get(targetId);
                if (windowTreeElement) {
                    windowTreeElement.windowClosed();
                }
            }
        },
        {
            key: "appendChild",
            value: function appendChild(treeElement) {
                var comparator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : FrameTreeElement.presentationOrderCompare;
                _get(_get_prototype_of(FrameTreeElement.prototype), "appendChild", this).call(this, treeElement, comparator);
            }
        }
    ], [
        {
            key: "presentationOrderCompare",
            value: /**
     * Order elements by type (first frames, then resources, last Document resources)
     * and then each of these groups in the alphabetical order.
     */ function presentationOrderCompare(treeElement1, treeElement2) {
                function typeWeight(treeElement) {
                    if (_instanceof(treeElement, _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ExpandableApplicationPanelTreeElement)) {
                        return 2;
                    }
                    if (_instanceof(treeElement, FrameTreeElement)) {
                        return 1;
                    }
                    return 3;
                }
                var typeWeight1 = typeWeight(treeElement1);
                var typeWeight2 = typeWeight(treeElement2);
                return typeWeight1 - typeWeight2 || treeElement1.titleAsText().localeCompare(treeElement2.titleAsText());
            }
        }
    ]);
    return FrameTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var resourceToFrameResourceTreeElement = new WeakMap();
var FrameResourceTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(FrameResourceTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(FrameResourceTreeElement);
    function FrameResourceTreeElement(storagePanel, resource) {
        _class_call_check(this, FrameResourceTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, resource.isGenerated ? i18nString(UIStrings.documentNotAvailable) : resource.displayName, false, 'frame-resource');
        _define_property(_assert_this_initialized(_this), "panel", void 0);
        _define_property(_assert_this_initialized(_this), "resource", void 0);
        _define_property(_assert_this_initialized(_this), "previewPromise", void 0);
        _this.panel = storagePanel;
        _this.resource = resource;
        _this.previewPromise = null;
        _this.tooltip = resource.url;
        resourceToFrameResourceTreeElement.set(_this.resource, _assert_this_initialized(_this));
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('document', 'navigator-file-tree-item');
        icon.classList.add('navigator-' + resource.resourceType().name() + '-tree-item');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(FrameResourceTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return this.resource.url;
            }
        },
        {
            key: "preparePreview",
            value: function preparePreview() {
                var _this = this;
                if (this.previewPromise) {
                    return this.previewPromise;
                }
                var viewPromise = _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.PreviewFactory.PreviewFactory.createPreview(this.resource, this.resource.mimeType);
                this.previewPromise = viewPromise.then(function(view) {
                    if (view) {
                        return view;
                    }
                    return new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.EmptyWidget.EmptyWidget(_this.resource.url);
                });
                return this.previewPromise;
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(FrameResourceTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (this.resource.isGenerated) {
                    this.panel.showCategoryView(i18nString(UIStrings.theContentOfThisDocumentHasBeen), null);
                } else {
                    void this.panel.scheduleShowView(this.preparePreview());
                }
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-resource');
                return false;
            }
        },
        {
            key: "ondblclick",
            value: function ondblclick(_event) {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(this.resource.url);
                return false;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(FrameResourceTreeElement.prototype), "onattach", this).call(this);
                this.listItemElement.draggable = true;
                this.listItemElement.addEventListener('dragstart', this.ondragstart.bind(this), false);
                this.listItemElement.addEventListener('contextmenu', this.handleContextMenuEvent.bind(this), true);
            }
        },
        {
            key: "ondragstart",
            value: function ondragstart(event) {
                if (!event.dataTransfer) {
                    return false;
                }
                event.dataTransfer.setData('text/plain', this.resource.content || '');
                event.dataTransfer.effectAllowed = 'copy';
                return true;
            }
        },
        {
            key: "handleContextMenuEvent",
            value: function handleContextMenuEvent(event) {
                var contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_10__.ContextMenu.ContextMenu(event);
                contextMenu.appendApplicableItems(this.resource);
                void contextMenu.show();
            }
        },
        {
            key: "revealResource",
            value: function revealResource(lineNumber, columnNumber) {
                var _this = this;
                return _async_to_generator(function() {
                    var view;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.revealAndSelect(true);
                                return [
                                    4,
                                    _this.panel.scheduleShowView(_this.preparePreview())
                                ];
                            case 1:
                                view = _state.sent();
                                if (!_instanceof(view, _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_9__.ResourceSourceFrame.ResourceSourceFrame) || typeof lineNumber !== 'number') {
                                    return [
                                        2
                                    ];
                                }
                                view.revealPosition({
                                    lineNumber: lineNumber,
                                    columnNumber: columnNumber
                                }, true);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ], [
        {
            key: "forResource",
            value: function forResource(resource) {
                return resourceToFrameResourceTreeElement.get(resource);
            }
        }
    ]);
    return FrameResourceTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var FrameWindowTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(FrameWindowTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(FrameWindowTreeElement);
    function FrameWindowTreeElement(storagePanel, targetInfo) {
        _class_call_check(this, FrameWindowTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, targetInfo.title || i18nString(UIStrings.windowWithoutTitle), false, 'window');
        _define_property(_assert_this_initialized(_this), "targetInfo", void 0);
        _define_property(_assert_this_initialized(_this), "isWindowClosed", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.targetInfo = targetInfo;
        _this.isWindowClosed = false;
        _this.view = null;
        _this.updateIcon(targetInfo.canAccessOpener);
        return _this;
    }
    _create_class(FrameWindowTreeElement, [
        {
            key: "updateIcon",
            value: function updateIcon(canAccessOpener) {
                var iconType = canAccessOpener ? 'popup' : 'frame';
                var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create(iconType);
                this.setLeadingIcons([
                    icon
                ]);
            }
        },
        {
            key: "update",
            value: function update(targetInfo) {
                if (targetInfo.canAccessOpener !== this.targetInfo.canAccessOpener) {
                    this.updateIcon(targetInfo.canAccessOpener);
                }
                this.targetInfo = targetInfo;
                if (this.view) {
                    this.view.setTargetInfo(targetInfo);
                    this.view.update();
                }
            }
        },
        {
            key: "windowClosed",
            value: function windowClosed() {
                this.listItemElement.classList.add('window-closed');
                this.isWindowClosed = true;
                if (this.view) {
                    this.view.setIsWindowClosed(true);
                    this.view.update();
                }
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(FrameWindowTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = new _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_23__.OpenedWindowDetailsView(this.targetInfo, this.isWindowClosed);
                } else {
                    this.view.update();
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-window');
                return false;
            }
        },
        {
            key: "itemURL",
            get: function get() {
                return this.targetInfo.url;
            }
        }
    ]);
    return FrameWindowTreeElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);
var WorkerTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(WorkerTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(WorkerTreeElement);
    function WorkerTreeElement(storagePanel, targetInfo) {
        _class_call_check(this, WorkerTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, targetInfo.title || targetInfo.url || i18nString(UIStrings.worker), false, 'worker');
        _define_property(_assert_this_initialized(_this), "targetInfo", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.targetInfo = targetInfo;
        _this.view = null;
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.create('gears', 'navigator-file-tree-item');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(WorkerTreeElement, [
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(WorkerTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = new _OpenedWindowDetailsView_js__WEBPACK_IMPORTED_MODULE_23__.WorkerDetailsView(this.targetInfo);
                } else {
                    this.view.update();
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.panelShown('frame-worker');
                return false;
            }
        },
        {
            key: "itemURL",
            get: function get() {
                return this.targetInfo.url;
            }
        }
    ]);
    return WorkerTreeElement;
} //# sourceMappingURL=ApplicationPanelSidebar.js.map
(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_11__.ApplicationPanelTreeElement);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/BackForwardCacheTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BackForwardCacheTreeElement: function() { return BackForwardCacheTreeElement; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
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
     *@description Text in Application Panel Sidebar of the Application panel
     */ backForwardCache: 'Back/forward cache'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/BackForwardCacheTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var BackForwardCacheTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(BackForwardCacheTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(BackForwardCacheTreeElement);
    function BackForwardCacheTreeElement(resourcesPanel) {
        _class_call_check(this, BackForwardCacheTreeElement);
        var _this;
        _this = _super.call(this, resourcesPanel, i18nString(UIStrings.backForwardCache), false, 'bfcache');
        _define_property(_assert_this_initialized(_this), "view", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(BackForwardCacheTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'bfcache://';
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(BackForwardCacheTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.BackForwardCacheView.BackForwardCacheView());
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('back-forward-cache');
                return false;
            }
        }
    ]);
    return BackForwardCacheTreeElement;
} //# sourceMappingURL=BackForwardCacheTreeElement.js.map
(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement);


}),
"./panels/application/BounceTrackingMitigationsTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BounceTrackingMitigationsTreeElement: function() { return BounceTrackingMitigationsTreeElement; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
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
     * @description Hover text for the Bounce Tracking Mitigations element in the Application Panel sidebar.
     */ bounceTrackingMitigations: 'Bounce tracking mitigations'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/BounceTrackingMitigationsTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var BounceTrackingMitigationsTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(BounceTrackingMitigationsTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(BounceTrackingMitigationsTreeElement);
    function BounceTrackingMitigationsTreeElement(resourcesPanel) {
        _class_call_check(this, BounceTrackingMitigationsTreeElement);
        var _this;
        _this = _super.call(this, resourcesPanel, i18nString(UIStrings.bounceTrackingMitigations), false, 'bounce-tracking-mitigations');
        _define_property(_assert_this_initialized(_this), "view", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(BounceTrackingMitigationsTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'bounce-tracking-mitigations://';
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(BounceTrackingMitigationsTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.BounceTrackingMitigationsView.BounceTrackingMitigationsView());
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('bounce-tracking-mitigations');
                return false;
            }
        }
    ]);
    return BounceTrackingMitigationsTreeElement;
} //# sourceMappingURL=BounceTrackingMitigationsTreeElement.js.map
(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement);


}),
"./panels/application/InterestGroupStorageModel.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  InterestGroupStorageModel: function() { return InterestGroupStorageModel; }
});
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/*
 * Copyright (C) 2021 Google Inc. All rights reserved.
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

var InterestGroupStorageModel = /*#__PURE__*/ function(_SDK_SDKModel_SDKModel) {
    "use strict";
    _inherits(InterestGroupStorageModel, _SDK_SDKModel_SDKModel);
    var _super = _create_super(InterestGroupStorageModel);
    function InterestGroupStorageModel(target) {
        _class_call_check(this, InterestGroupStorageModel);
        var _this;
        _this = _super.call(this, target);
        _define_property(_assert_this_initialized(_this), "storageAgent", void 0);
        _define_property(_assert_this_initialized(_this), "enabled", void 0);
        target.registerStorageDispatcher(_assert_this_initialized(_this));
        _this.storageAgent = target.storageAgent();
        _this.enabled = false;
        return _this;
    }
    _create_class(InterestGroupStorageModel, [
        {
            key: "enable",
            value: function enable() {
                if (this.enabled) {
                    return;
                }
                void this.storageAgent.invoke_setInterestGroupTracking({
                    enable: true
                });
            }
        },
        {
            key: "disable",
            value: function disable() {
                if (!this.enabled) {
                    return;
                }
                void this.storageAgent.invoke_setInterestGroupTracking({
                    enable: false
                });
            }
        },
        {
            key: "interestGroupAccessed",
            value: function interestGroupAccessed(event) {
                this.dispatchEventToListeners("InterestGroupAccess" /* Events.InterestGroupAccess */ , event);
            }
        },
        {
            key: "attributionReportingTriggerRegistered",
            value: function attributionReportingTriggerRegistered(_event) {}
        },
        {
            key: "indexedDBListUpdated",
            value: function indexedDBListUpdated(_event) {}
        },
        {
            key: "indexedDBContentUpdated",
            value: function indexedDBContentUpdated(_event) {}
        },
        {
            key: "interestGroupAuctionEventOccurred",
            value: function interestGroupAuctionEventOccurred(_event) {}
        },
        {
            key: "interestGroupAuctionNetworkRequestCreated",
            value: function interestGroupAuctionNetworkRequestCreated(_event) {}
        },
        {
            key: "cacheStorageListUpdated",
            value: function cacheStorageListUpdated(_event) {}
        },
        {
            key: "cacheStorageContentUpdated",
            value: function cacheStorageContentUpdated(_event) {}
        },
        {
            key: "sharedStorageAccessed",
            value: function sharedStorageAccessed(_event) {}
        },
        {
            key: "storageBucketCreatedOrUpdated",
            value: function storageBucketCreatedOrUpdated(_event) {}
        },
        {
            key: "storageBucketDeleted",
            value: function storageBucketDeleted(_event) {}
        },
        {
            key: "attributionReportingSourceRegistered",
            value: function attributionReportingSourceRegistered(_event) {}
        }
    ]);
    return InterestGroupStorageModel;
}(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel);
_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.SDKModel.SDKModel.register(InterestGroupStorageModel, {
    capabilities: 8192 /* SDK.Target.Capability.Storage */ ,
    autostart: false
}); //# sourceMappingURL=InterestGroupStorageModel.js.map


}),
"./panels/application/SharedStorageListTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedStorageListTreeElement: function() { return SharedStorageListTreeElement; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SharedStorageEventsView.js */ "./panels/application/SharedStorageEventsView.js");
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
     *@description Text in SharedStorage Category View of the Application panel
     */ sharedStorage: 'Shared storage'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/SharedStorageListTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var _expandedSetting = /*#__PURE__*/ new WeakMap();
var SharedStorageListTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(SharedStorageListTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(SharedStorageListTreeElement);
    function SharedStorageListTreeElement(resourcesPanel) {
        var expandedSettingsDefault = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        _class_call_check(this, SharedStorageListTreeElement);
        var _this;
        _this = _super.call(this, resourcesPanel, i18nString(UIStrings.sharedStorage), false, 'shared-storage');
        _class_private_field_init(_assert_this_initialized(_this), _expandedSetting, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _class_private_field_set(_assert_this_initialized(_this), _expandedSetting, _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('resources-shared-storage-expanded', expandedSettingsDefault));
        var sharedStorageIcon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        _this.setLeadingIcons([
            sharedStorageIcon
        ]);
        _this.view = new _SharedStorageEventsView_js__WEBPACK_IMPORTED_MODULE_4__.SharedStorageEventsView();
        return _this;
    }
    _create_class(SharedStorageListTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'shared-storage://';
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(SharedStorageListTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                this.resourcesPanel.showView(this.view);
                return false;
            }
        },
        {
            key: "onattach",
            value: function onattach() {
                _get(_get_prototype_of(SharedStorageListTreeElement.prototype), "onattach", this).call(this);
                if (_class_private_field_get(this, _expandedSetting).get()) {
                    this.expand();
                }
            }
        },
        {
            key: "onexpand",
            value: function onexpand() {
                _class_private_field_get(this, _expandedSetting).set(true);
            }
        },
        {
            key: "oncollapse",
            value: function oncollapse() {
                _class_private_field_get(this, _expandedSetting).set(false);
            }
        },
        {
            key: "addEvent",
            value: function addEvent(event) {
                this.view.addEvent(event);
            }
        }
    ]);
    return SharedStorageListTreeElement;
} //# sourceMappingURL=SharedStorageListTreeElement.js.map
(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_3__.ApplicationPanelTreeElement);


}),
"./panels/application/StorageBucketsTreeElement.js": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StorageBucketsTreeElement: function() { return StorageBucketsTreeElement; },
  StorageBucketsTreeParentElement: function() { return StorageBucketsTreeParentElement; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelSidebar.js */ "./panels/application/ApplicationPanelSidebar.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceWorkerCacheTreeElement.js */ "./panels/application/ServiceWorkerCacheTreeElement.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__]);
_ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];// Copyright 2023 The Chromium Authors. All rights reserved.
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
     *@description Label for an item in the Application Panel Sidebar of the Application panel
     * Storage Buckets allow developers to seperate site data into buckets so that they can be
     * deleted independently.
     */ storageBuckets: 'Storage buckets'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/StorageBucketsTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var StorageBucketsTreeParentElement = /*#__PURE__*/ function(ExpandableApplicationPanelTreeElement) {
    "use strict";
    _inherits(StorageBucketsTreeParentElement, ExpandableApplicationPanelTreeElement);
    var _super = _create_super(StorageBucketsTreeParentElement);
    function StorageBucketsTreeParentElement(storagePanel) {
        _class_call_check(this, StorageBucketsTreeParentElement);
        var _this;
        _this = _super.call(this, storagePanel, i18nString(UIStrings.storageBuckets), 'storage-buckets');
        _define_property(_assert_this_initialized(_this), "bucketTreeElements", new Set());
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        _this.setLink('https://github.com/WICG/storage-buckets/blob/gh-pages/explainer.md');
        return _this;
    }
    _create_class(StorageBucketsTreeParentElement, [
        {
            key: "initialize",
            value: function initialize() {
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, "BucketAdded" /* SDK.StorageBucketsModel.Events.BucketAdded */ , this.bucketAdded, this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, "BucketRemoved" /* SDK.StorageBucketsModel.Events.BucketRemoved */ , this.bucketRemoved, this);
                _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel, "BucketChanged" /* SDK.StorageBucketsModel.Events.BucketChanged */ , this.bucketChanged, this);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.TargetManager.TargetManager.instance().models(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageBucketsModel.StorageBucketsModel)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var bucketsModel = _step.value;
                        var buckets = bucketsModel.getBuckets();
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = buckets[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var bucket = _step1.value;
                                this.addBucketTreeElement(bucketsModel, bucket);
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "removeBucketsForModel",
            value: function removeBucketsForModel(model) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.bucketTreeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var bucketTreeElement = _step.value;
                        if (bucketTreeElement.model === model) {
                            this.removeBucketTreeElement(bucketTreeElement);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },
        {
            key: "bucketAdded",
            value: function bucketAdded(param) {
                var _param_data = param.data, model = _param_data.model, bucketInfo = _param_data.bucketInfo;
                this.addBucketTreeElement(model, bucketInfo);
            }
        },
        {
            key: "bucketRemoved",
            value: function bucketRemoved(param) {
                var _param_data = param.data, model = _param_data.model, bucketInfo = _param_data.bucketInfo;
                var idbDatabaseTreeElement = this.getBucketTreeElement(model, bucketInfo);
                if (!idbDatabaseTreeElement) {
                    return;
                }
                this.removeBucketTreeElement(idbDatabaseTreeElement);
            }
        },
        {
            key: "bucketChanged",
            value: function bucketChanged(param) {
                var _param_data = param.data, model = _param_data.model, bucketInfo = _param_data.bucketInfo;
                var idbDatabaseTreeElement = this.getBucketTreeElement(model, bucketInfo);
                if (!idbDatabaseTreeElement) {
                    return;
                }
                idbDatabaseTreeElement.bucketInfo = bucketInfo;
            }
        },
        {
            key: "addBucketTreeElement",
            value: function addBucketTreeElement(model, bucketInfo) {
                if (bucketInfo.bucket.name === undefined) {
                    return;
                }
                var singleBucketTreeElement = new StorageBucketsTreeElement(this.resourcesPanel, model, bucketInfo);
                this.bucketTreeElements.add(singleBucketTreeElement);
                this.appendChild(singleBucketTreeElement);
                singleBucketTreeElement.initialize();
            }
        },
        {
            key: "removeBucketTreeElement",
            value: function removeBucketTreeElement(bucketTreeElement) {
                this.removeChild(bucketTreeElement);
                this.bucketTreeElements.delete(bucketTreeElement);
                this.setExpandable(this.bucketTreeElements.size > 0);
            }
        },
        {
            key: "itemURL",
            get: function get() {
                return 'storage-buckets-group://';
            }
        },
        {
            key: "getBucketTreeElement",
            value: function getBucketTreeElement(model, param) {
                var _param_bucket = param.bucket, storageKey = _param_bucket.storageKey, name = _param_bucket.name;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.bucketTreeElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var bucketTreeElement = _step.value;
                        if (bucketTreeElement.model === model && bucketTreeElement.bucketInfo.bucket.storageKey === storageKey && bucketTreeElement.bucketInfo.bucket.name === name) {
                            return bucketTreeElement;
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return null;
            }
        }
    ]);
    return StorageBucketsTreeParentElement;
}(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableApplicationPanelTreeElement);
var StorageBucketsTreeElement = /*#__PURE__*/ function(ExpandableApplicationPanelTreeElement) {
    "use strict";
    _inherits(StorageBucketsTreeElement, ExpandableApplicationPanelTreeElement);
    var _super = _create_super(StorageBucketsTreeElement);
    function StorageBucketsTreeElement(resourcesPanel, model, bucketInfo) {
        _class_call_check(this, StorageBucketsTreeElement);
        var _this;
        var bucket = bucketInfo.bucket;
        var origin = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_1__.StorageKeyManager.parseStorageKey(bucketInfo.bucket.storageKey).origin;
        _this = _super.call(this, resourcesPanel, "".concat(bucket.name, " - ").concat(origin), 'storage-bucket');
        _define_property(_assert_this_initialized(_this), "storageBucketInfo", void 0);
        _define_property(_assert_this_initialized(_this), "bucketModel", void 0);
        _define_property(_assert_this_initialized(_this), "view", void 0);
        _this.bucketModel = model;
        _this.storageBucketInfo = bucketInfo;
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(StorageBucketsTreeElement, [
        {
            key: "initialize",
            value: function initialize() {
                var bucket = this.bucketInfo.bucket;
                var indexedDBTreeElement = new _ApplicationPanelSidebar_js__WEBPACK_IMPORTED_MODULE_5__.IndexedDBTreeElement(this.resourcesPanel, bucket);
                this.appendChild(indexedDBTreeElement);
                var serviceWorkerCacheTreeElement = new _ServiceWorkerCacheTreeElement_js__WEBPACK_IMPORTED_MODULE_8__.ServiceWorkerCacheTreeElement(this.resourcesPanel, bucket);
                this.appendChild(serviceWorkerCacheTreeElement);
                serviceWorkerCacheTreeElement.initialize();
            }
        },
        {
            key: "itemURL",
            get: function get() {
                var bucket = this.bucketInfo.bucket;
                return "storage-buckets-group://".concat(bucket.name, "/").concat(bucket.storageKey);
            }
        },
        {
            key: "model",
            get: function get() {
                return this.bucketModel;
            }
        },
        {
            key: "bucketInfo",
            get: function get() {
                return this.storageBucketInfo;
            },
            set: function set(bucketInfo) {
                this.storageBucketInfo = bucketInfo;
                if (this.view) {
                    this.view.getComponent().setStorageBucket(this.storageBucketInfo);
                }
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(StorageBucketsTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_7__.StorageMetadataView.StorageMetadataView());
                    this.view.getComponent().enableStorageBucketControls(this.model);
                    this.view.getComponent().setStorageBucket(this.storageBucketInfo);
                }
                this.showView(this.view);
                return false;
            }
        }
    ]);
    return StorageBucketsTreeElement;
} //# sourceMappingURL=StorageBucketsTreeElement.js.map
(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_6__.ExpandableApplicationPanelTreeElement);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

}),
"./panels/application/TrustTokensTreeElement.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TrustTokensTreeElement: function() { return TrustTokensTreeElement; },
  i18nString: function() { return i18nString; }
});
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/legacy_wrapper/legacy_wrapper.js */ "./ui/components/legacy_wrapper/legacy_wrapper.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplicationPanelTreeElement.js */ "./panels/application/ApplicationPanelTreeElement.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
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
     * @description Hover text for an info icon in the Private State Token panel.
     * Previously known as 'Trust Tokens'.
     */ trustTokens: 'Private state tokens'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/TrustTokensTreeElement.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var TrustTokensTreeElement = /*#__PURE__*/ function(ApplicationPanelTreeElement) {
    "use strict";
    _inherits(TrustTokensTreeElement, ApplicationPanelTreeElement);
    var _super = _create_super(TrustTokensTreeElement);
    function TrustTokensTreeElement(storagePanel) {
        _class_call_check(this, TrustTokensTreeElement);
        var _this;
        _this = _super.call(this, storagePanel, i18nString(UIStrings.trustTokens), false, 'private-state-tokens');
        _define_property(_assert_this_initialized(_this), "view", void 0);
        var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.create('database');
        _this.setLeadingIcons([
            icon
        ]);
        return _this;
    }
    _create_class(TrustTokensTreeElement, [
        {
            key: "itemURL",
            get: function get() {
                return 'trustTokens://';
            }
        },
        {
            key: "onselect",
            value: function onselect(selectedByUser) {
                _get(_get_prototype_of(TrustTokensTreeElement.prototype), "onselect", this).call(this, selectedByUser);
                if (!this.view) {
                    this.view = _ui_components_legacy_wrapper_legacy_wrapper_js__WEBPACK_IMPORTED_MODULE_3__.LegacyWrapper.legacyWrapper(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Widget.Widget, new _components_components_js__WEBPACK_IMPORTED_MODULE_6__.TrustTokensView.TrustTokensView(), 'trust-tokens');
                }
                this.showView(this.view);
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.userMetrics.panelShown('trust-tokens');
                return false;
            }
        }
    ]);
    return TrustTokensTreeElement;
} //# sourceMappingURL=TrustTokensTreeElement.js.map
(_ApplicationPanelTreeElement_js__WEBPACK_IMPORTED_MODULE_5__.ApplicationPanelTreeElement);


}),
"./panels/application/resourcesSidebar.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.tree-outline {\n  padding-left: 0;\n  color: var(--sys-color-on-surface);\n}\n\n.tree-outline > ol {\n  padding-bottom: 10px;\n}\n\n.tree-outline li {\n  min-height: 20px;\n}\n\n.tree-outline li[role="heading"] {\n  color: var(--sys-color-on-surface-subtle);\n  font-weight: 500;\n}\n\nli.storage-group-list-item {\n  padding: 10px 8px 6px;\n}\n\nli.storage-group-list-item:not(:first-child) {\n  border-top: 1px solid var(--sys-color-divider);\n}\n\nli.storage-group-list-item::before {\n  display: none;\n}\n\n.icons-container devtools-icon.red-icon {\n  color: var(--icon-error);\n}\n\n.icons-container devtools-icon.warn-icon {\n  color: var(--icon-warning);\n}\n\ndevtools-icon.navigator-file-tree-item {\n  color: var(--icon-file-default);\n}\n\ndevtools-icon.navigator-folder-tree-item {\n  color: var(--icon-folder-primary);\n}\n\ndevtools-icon.navigator-script-tree-item {\n  color: var(--icon-file-script);\n}\n\ndevtools-icon.navigator-stylesheet-tree-item {\n  color: var(--icon-file-styles);\n}\n\ndevtools-icon.navigator-image-tree-item,\ndevtools-icon.navigator-font-tree-item {\n  color: var(--icon-file-image);\n}\n\n.window-closed .tree-element-title {\n  text-decoration: line-through;\n}\n\n/*# sourceURL=resourcesSidebar.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);