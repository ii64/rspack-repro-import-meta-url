"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_network_NetworkDataGridNode_js"], {
"./panels/network/NetworkDataGridNode.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NetworkGroupNode: function() { return NetworkGroupNode; },
  NetworkNode: function() { return NetworkNode; },
  NetworkRequestNode: function() { return NetworkRequestNode; },
  _backgroundColors: function() { return _backgroundColors; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/workspace/workspace.js */ "./models/workspace/workspace.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/components/perf_ui/perf_ui.js */ "./ui/legacy/components/perf_ui/perf_ui.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _utils_utils_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/utils.js */ "./panels/utils/utils.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007, 2008 Apple Inc.  All rights reserved.
 * Copyright (C) 2008, 2009 Anthony Ricaud <rik@webkit.org>
 * Copyright (C) 2011 Google Inc. All rights reserved.
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
 */ // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
/* eslint-disable @typescript-eslint/naming-convention */ function _assert_this_initialized(self) {
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
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
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
     *@description Text in Network Data Grid Node of the Network panel
     */ redirect: 'Redirect',
    /**
     *@description Content of the request method column in the network log view. Some requests require an additional request to check permissions, and this additional request is called 'Preflight Request', see https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request. In the request method column we use, for example, 'POST + Preflight' to indicate that the request method was 'POST' and the request was accompanied by a preflight request. Since the column is short, the translation for Preflight in this context should ideally also be short.
     *@example {GET} PH1
     */ sPreflight: '{PH1} + Preflight',
    /**
     *@description Name of a network initiator type
     */ preflight: 'Preflight',
    /**
     *@description Title for a link element in the network log view
     */ selectPreflightRequest: 'Select preflight request',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ failed: '(failed)',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ data: '(data)',
    /**
     * @description Text in Network Data Grid Node of the Network panel. Indicates a network request has
     * been canceled.
     */ canceled: '(canceled)',
    /**
     *@description Reason in Network Data Grid Node of the Network panel
     */ other: 'other',
    /**
     *@description Reason in Network Data Grid Node of the Network panel
     */ csp: 'csp',
    /**
     *@description Reason in Network Data Grid Node of the Network panel
     */ origin: 'origin',
    /**
     *@description Reason in Network Data Grid Node of the Network panel
     */ devtools: 'devtools',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     *@example {mixed-content} PH1
     */ blockeds: '(blocked:{PH1})',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ blockedTooltip: 'This request was blocked due to misconfigured response headers, click to view the headers',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ corsError: 'CORS error',
    /**
     *@description Tooltip providing the cors error code
     *@example {PreflightDisallowedRedirect} PH1
     */ crossoriginResourceSharingErrorS: 'Cross-Origin Resource Sharing error: {PH1}',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ finished: 'Finished',
    /**
     * @description Status text in the Network panel that indicates a network request is still loading
     * and has not finished yet (is pending).
     */ pendingq: '(pending)',
    /**
     * @description Status text in the Network panel that indicates a network request state is not known.
     */ unknown: '(unknown)',
    /**
     * @description Tooltip providing details on why the request has unknown status.
     */ unknownExplanation: 'The request status cannot be shown here because the page that issued it unloaded while the request was in flight. You can use chrome://net-export to capture a network log and see all request details.',
    /**
     * @description Text in Network Data Grid Node of the Network panel. Noun, short for a 'HTTP server
     * push'.
     */ push: 'Push / ',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ parser: 'Parser',
    /**
     *@description Label for a group of JavaScript files
     */ script: 'Script',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     */ preload: 'Preload',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     */ earlyHints: 'early-hints',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ signedexchange: 'signed-exchange',
    /**
     *@description Title for a link element in the network log view
     */ selectTheRequestThatTriggered: 'Select the request that triggered this preflight',
    /**
     *@description Text for other types of items
     */ otherC: 'Other',
    /**
     *@description Text of a DOM element in Network Data Grid Node of the Network panel
     */ memoryCache: '(memory cache)',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel. Indicates that the response came from memory cache.
     *@example {50 B} PH1
     */ servedFromMemoryCacheResource: 'Served from memory cache, resource size: {PH1}',
    /**
     *@description Text of a DOM element in Network Data Grid Node of the Network panel
     */ serviceWorker: '(`ServiceWorker`)',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     *@example {4 B} PH1
     */ servedFromServiceWorkerResource: 'Served from `ServiceWorker`, resource size: {PH1}',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     *@example {4 B} PH1
     */ servedFromSignedHttpExchange: 'Served from Signed HTTP Exchange, resource size: {PH1}',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel. Indicates that the response came from preloaded web bundle. See https://web.dev/web-bundles/
     *@example {4 B} PH1
     */ servedFromWebBundle: 'Served from Web Bundle, resource size: {PH1}',
    /**
     *@description Text of a DOM element in Network Data Grid Node of the Network panel
     */ prefetchCache: '(prefetch cache)',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     *@example {4 B} PH1
     */ servedFromPrefetchCacheResource: 'Served from prefetch cache, resource size: {PH1}',
    /**
     *@description Text of a DOM element in Network Data Grid Node of the Network panel
     */ diskCache: '(disk cache)',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     *@example {10 B} PH1
     */ servedFromDiskCacheResourceSizeS: 'Served from disk cache, resource size: {PH1}',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     *@example {1} PH1
     *@example {4 B} PH2
     */ matchedToServiceWorkerRouter: 'Matched to `ServiceWorker router`#{PH1}, resource size: {PH2}',
    /**
     *@description Cell title in Network Data Grid Node of the Network panel
     *@example {1} PH1
     *@example {4 B} PH2
     *@example {12 B} PH3
     */ matchedToServiceWorkerRouterWithNetworkSource: 'Matched to `ServiceWorker router`#{PH1}, {PH2} transferred over network, resource size: {PH3}',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ pending: 'Pending',
    /**
     *@description Text describing the depth of a top level node in the network datagrid
     */ level: 'level 1',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ webBundleError: 'Web Bundle error',
    /**
     *@description Alternative text for the web bundle inner request icon in Network Data Grid Node of the Network panel
     * Indicates that the response came from preloaded web bundle. See https://web.dev/web-bundles/
     */ webBundleInnerRequest: 'Served from Web Bundle',
    /**
     *@description Text in Network Data Grid Node of the Network panel
     */ webBundle: '(Web Bundle)',
    /**
     *@description Tooltip text for subtitles of Time cells in Network request rows. Latency is the time difference
     * between the time a response to a network request is received and the time the request is started.
     */ timeSubtitleTooltipText: 'Latency (response received time - start time)',
    /**
     *@description Tooltip text giving the reason why a specific HTTP transport protocol has been used
     */ alternativeJobWonWithoutRace: '`Chrome` used a `HTTP/3` connection induced by an \'`Alt-Svc`\' header without racing against establishing a connection using a different `HTTP` version.',
    /**
     *@description Tooltip text giving the reason why a specific HTTP transport protocol has been used
     */ alternativeJobWonRace: '`Chrome` used a `HTTP/3` connection induced by an \'`Alt-Svc`\' header because it won a race against establishing a connection using a different `HTTP` version.',
    /**
     *@description Tooltip text giving the reason why a specific HTTP transport protocol has been used
     */ mainJobWonRace: '`Chrome` used this protocol because it won a race against establishing a `HTTP/3` connection.',
    /**
     *@description Tooltip text giving the reason why a specific HTTP transport protocol has been used
     */ mappingMissing: '`Chrome` did not use an alternative `HTTP` version because no alternative protocol information was available when the request was issued, but an \'`Alt-Svc`\' header was present in the response.',
    /**
     *@description Tooltip text giving the reason why a specific HTTP transport protocol has been used
     */ broken: '`Chrome` did not try to establish a `HTTP/3` connection because it was marked as broken.',
    /**
     *@description Tooltip text giving the reason why a specific HTTP transport protocol has been used
     */ dnsAlpnH3JobWonWithoutRace: '`Chrome` used a `HTTP/3` connection due to the `DNS record` indicating `HTTP/3` support. There was no race against establishing a connection using a different `HTTP` version.',
    /**
     *@description Tooltip text giving the reason why a specific HTTP transport protocol has been used
     */ dnsAlpnH3JobWonRace: '`Chrome` used a `HTTP/3` connection due to the `DNS record` indicating `HTTP/3` support, which won a race against establishing a connection using a different `HTTP` version.',
    /**
     *@description Tooltip to explain the resource's overridden status
     */ requestContentHeadersOverridden: 'Both request content and headers are overridden',
    /**
     *@description Tooltip to explain the resource's overridden status
     */ requestContentOverridden: 'Request content is overridden',
    /**
     *@description Tooltip to explain the resource's overridden status
     */ requestHeadersOverridden: 'Request headers are overridden',
    /**
     *@description Tooltip to explain the resource's initial priority
     *@example {High} PH1
     *@example {Low} PH2
     */ initialPriorityToolTip: '{PH1}, Initial priority: {PH2}',
    /**
     *@description Tooltip to explain why the request has warning icon
     */ thirdPartyPhaseout: 'Cookies for this request are blocked due to third-party cookie phaseout. Learn more in the Issues tab.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/network/NetworkDataGridNode.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var NetworkNode = /*#__PURE__*/ function(_DataGrid_SortableDataGrid_SortableDataGridNode) {
    "use strict";
    _inherits(NetworkNode, _DataGrid_SortableDataGrid_SortableDataGridNode);
    var _super = _create_super(NetworkNode);
    function NetworkNode(parentView) {
        _class_call_check(this, NetworkNode);
        var _this;
        _this = _super.call(this, {});
        _define_property(_assert_this_initialized(_this), "parentViewInternal", void 0);
        _define_property(_assert_this_initialized(_this), "isHovered", void 0);
        _define_property(_assert_this_initialized(_this), "showingInitiatorChainInternal", void 0);
        _define_property(_assert_this_initialized(_this), "requestOrFirstKnownChildRequestInternal", void 0);
        _this.parentViewInternal = parentView;
        _this.isHovered = false;
        _this.showingInitiatorChainInternal = false;
        _this.requestOrFirstKnownChildRequestInternal = null;
        return _this;
    }
    _create_class(NetworkNode, [
        {
            key: "displayName",
            value: function displayName() {
                return '';
            }
        },
        {
            key: "displayType",
            value: function displayType() {
                return '';
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var cell = this.createTD(columnId);
                this.renderCell(cell, columnId);
                return cell;
            }
        },
        {
            key: "renderCell",
            value: function renderCell(_cell, _columnId) {}
        },
        {
            key: "isFailed",
            value: function isFailed() {
                return false;
            }
        },
        {
            key: "backgroundColor",
            value: function backgroundColor() {
                var bgColors = _backgroundColors;
                var hasFocus = document.hasFocus();
                var isSelected = this.dataGrid && this.dataGrid.element === document.activeElement;
                var isFailed = this.isFailed();
                if (this.selected && hasFocus && isSelected && isFailed) {
                    return bgColors.FocusSelectedHasError;
                }
                if (this.selected && hasFocus && isSelected) {
                    return bgColors.FocusSelected;
                }
                if (this.selected) {
                    return bgColors.Selected;
                }
                if (this.hovered()) {
                    return bgColors.Hovered;
                }
                if (this.isOnInitiatorPath()) {
                    return bgColors.InitiatorPath;
                }
                if (this.isOnInitiatedPath()) {
                    return bgColors.InitiatedPath;
                }
                if (this.isStriped()) {
                    return bgColors.Stripe;
                }
                return bgColors.Default;
            }
        },
        {
            key: "updateBackgroundColor",
            value: function updateBackgroundColor() {
                var element = this.existingElement();
                if (!element) {
                    return;
                }
                element.style.backgroundColor = "var(".concat(this.backgroundColor(), ")");
                this.parentViewInternal.stylesChanged();
            }
        },
        {
            key: "setStriped",
            value: function setStriped(isStriped) {
                _get(_get_prototype_of(NetworkNode.prototype), "setStriped", this).call(this, isStriped);
                this.updateBackgroundColor();
            }
        },
        {
            key: "select",
            value: function select(supressSelectedEvent) {
                _get(_get_prototype_of(NetworkNode.prototype), "select", this).call(this, supressSelectedEvent);
                this.updateBackgroundColor();
                this.parentViewInternal.updateNodeSelectedClass(/* isSelected */ true);
            }
        },
        {
            key: "deselect",
            value: function deselect(supressSelectedEvent) {
                _get(_get_prototype_of(NetworkNode.prototype), "deselect", this).call(this, supressSelectedEvent);
                this.updateBackgroundColor();
                this.parentViewInternal.updateNodeSelectedClass(/* isSelected */ false);
            }
        },
        {
            key: "parentView",
            value: function parentView() {
                return this.parentViewInternal;
            }
        },
        {
            key: "hovered",
            value: function hovered() {
                return this.isHovered;
            }
        },
        {
            key: "showingInitiatorChain",
            value: function showingInitiatorChain() {
                return this.showingInitiatorChainInternal;
            }
        },
        {
            key: "nodeSelfHeight",
            value: function nodeSelfHeight() {
                return this.parentViewInternal.rowHeight();
            }
        },
        {
            key: "setHovered",
            value: function setHovered(hovered, showInitiatorChain) {
                if (this.isHovered === hovered && this.showingInitiatorChainInternal === showInitiatorChain) {
                    return;
                }
                if (this.isHovered !== hovered) {
                    this.isHovered = hovered;
                    if (this.attached()) {
                        this.element().classList.toggle('hover', hovered);
                    }
                }
                if (this.showingInitiatorChainInternal !== showInitiatorChain) {
                    this.showingInitiatorChainInternal = showInitiatorChain;
                    this.showingInitiatorChainChanged();
                }
                this.parentViewInternal.stylesChanged();
                this.updateBackgroundColor();
            }
        },
        {
            key: "showingInitiatorChainChanged",
            value: function showingInitiatorChainChanged() {}
        },
        {
            key: "isOnInitiatorPath",
            value: function isOnInitiatorPath() {
                return false;
            }
        },
        {
            key: "isOnInitiatedPath",
            value: function isOnInitiatedPath() {
                return false;
            }
        },
        {
            key: "request",
            value: function request() {
                return null;
            }
        },
        {
            key: "isNavigationRequest",
            value: function isNavigationRequest() {
                return false;
            }
        },
        {
            key: "clearFlatNodes",
            value: function clearFlatNodes() {
                _get(_get_prototype_of(NetworkNode.prototype), "clearFlatNodes", this).call(this);
                this.requestOrFirstKnownChildRequestInternal = null;
            }
        },
        {
            key: "requestOrFirstKnownChildRequest",
            value: function requestOrFirstKnownChildRequest() {
                if (this.requestOrFirstKnownChildRequestInternal) {
                    return this.requestOrFirstKnownChildRequestInternal;
                }
                var request = this.request();
                if (request || !this.hasChildren()) {
                    this.requestOrFirstKnownChildRequestInternal = request;
                    return this.requestOrFirstKnownChildRequestInternal;
                }
                var firstChildRequest = null;
                var flatChildren = this.flatChildren();
                for(var i = 0; i < flatChildren.length; i++){
                    request = flatChildren[i].request();
                    if (!firstChildRequest || request && request.issueTime() < firstChildRequest.issueTime()) {
                        firstChildRequest = request;
                    }
                }
                this.requestOrFirstKnownChildRequestInternal = firstChildRequest;
                return this.requestOrFirstKnownChildRequestInternal;
            }
        }
    ]);
    return NetworkNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.SortableDataGrid.SortableDataGridNode);
var _backgroundColors = {
    Default: '--color-grid-default',
    Stripe: '--color-grid-stripe',
    Navigation: '--network-grid-navigation-color',
    Hovered: '--color-grid-hovered',
    InitiatorPath: '--network-grid-initiator-path-color',
    InitiatedPath: '--network-grid-initiated-path-color',
    Selected: '--color-grid-selected',
    FocusSelected: '--color-grid-focus-selected',
    FocusSelectedHasError: '--network-grid-focus-selected-color-has-error',
    FromFrame: '--network-grid-from-frame-color'
};
var _getLinkifierMetric = /*#__PURE__*/ new WeakSet();
var NetworkRequestNode = /*#__PURE__*/ function(NetworkNode) {
    "use strict";
    _inherits(NetworkRequestNode, NetworkNode);
    var _super = _create_super(NetworkRequestNode);
    function NetworkRequestNode(parentView, request) {
        _class_call_check(this, NetworkRequestNode);
        var _this;
        _this = _super.call(this, parentView);
        _class_private_method_init(_assert_this_initialized(_this), _getLinkifierMetric);
        _define_property(_assert_this_initialized(_this), "nameCell", void 0);
        _define_property(_assert_this_initialized(_this), "initiatorCell", void 0);
        _define_property(_assert_this_initialized(_this), "requestInternal", void 0);
        _define_property(_assert_this_initialized(_this), "isNavigationRequestInternal", void 0);
        _define_property(_assert_this_initialized(_this), "selectable", void 0);
        _define_property(_assert_this_initialized(_this), "isOnInitiatorPathInternal", void 0);
        _define_property(_assert_this_initialized(_this), "isOnInitiatedPathInternal", void 0);
        _define_property(_assert_this_initialized(_this), "linkifiedInitiatorAnchor", void 0);
        _this.nameCell = null;
        _this.initiatorCell = null;
        _this.requestInternal = request;
        _this.isNavigationRequestInternal = false;
        _this.selectable = true;
        _this.isOnInitiatorPathInternal = false;
        _this.isOnInitiatedPathInternal = false;
        return _this;
    }
    _create_class(NetworkRequestNode, [
        {
            key: "showingInitiatorChainChanged",
            value: function showingInitiatorChainChanged() {
                var showInitiatorChain = this.showingInitiatorChain();
                var initiatorGraph = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().initiatorGraphForRequest(this.requestInternal);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = initiatorGraph.initiators[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var request = _step.value;
                        if (request === this.requestInternal) {
                            continue;
                        }
                        var node = this.parentView().nodeForRequest(request);
                        if (!node) {
                            continue;
                        }
                        node.setIsOnInitiatorPath(showInitiatorChain);
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
                    for(var _iterator1 = initiatorGraph.initiated.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var request1 = _step1.value;
                        if (request1 === this.requestInternal) {
                            continue;
                        }
                        var node1 = this.parentView().nodeForRequest(request1);
                        if (!node1) {
                            continue;
                        }
                        node1.setIsOnInitiatedPath(showInitiatorChain);
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
        },
        {
            key: "setIsOnInitiatorPath",
            value: function setIsOnInitiatorPath(isOnInitiatorPath) {
                if (this.isOnInitiatorPathInternal === isOnInitiatorPath || !this.attached()) {
                    return;
                }
                this.isOnInitiatorPathInternal = isOnInitiatorPath;
                this.updateBackgroundColor();
            }
        },
        {
            key: "isOnInitiatorPath",
            value: function isOnInitiatorPath() {
                return this.isOnInitiatorPathInternal;
            }
        },
        {
            key: "setIsOnInitiatedPath",
            value: function setIsOnInitiatedPath(isOnInitiatedPath) {
                if (this.isOnInitiatedPathInternal === isOnInitiatedPath || !this.attached()) {
                    return;
                }
                this.isOnInitiatedPathInternal = isOnInitiatedPath;
                this.updateBackgroundColor();
            }
        },
        {
            key: "isOnInitiatedPath",
            value: function isOnInitiatedPath() {
                return this.isOnInitiatedPathInternal;
            }
        },
        {
            key: "displayType",
            value: function displayType() {
                var mimeType = this.requestInternal.mimeType || this.requestInternal.requestContentType() || '';
                var resourceType = this.requestInternal.resourceType();
                var simpleType = resourceType.name();
                if (this.requestInternal.fromEarlyHints()) {
                    return i18nString(UIStrings.earlyHints);
                }
                if (resourceType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Other || resourceType === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image) {
                    simpleType = mimeType.replace(/^(application|image)\//, '');
                }
                if (this.requestInternal.isRedirect()) {
                    simpleType += ' / ' + i18nString(UIStrings.redirect);
                }
                return simpleType;
            }
        },
        {
            key: "displayName",
            value: function displayName() {
                return this.requestInternal.name();
            }
        },
        {
            key: "request",
            value: function request() {
                return this.requestInternal;
            }
        },
        {
            key: "isNavigationRequest",
            value: function isNavigationRequest() {
                var pageLoad = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.PageLoad.PageLoad.forRequest(this.requestInternal);
                return pageLoad ? pageLoad.mainRequest === this.requestInternal : false;
            }
        },
        {
            key: "nodeSelfHeight",
            value: function nodeSelfHeight() {
                return this.parentView().rowHeight();
            }
        },
        {
            key: "createCells",
            value: function createCells(element) {
                this.nameCell = null;
                this.initiatorCell = null;
                element.classList.toggle('network-error-row', this.isFailed());
                element.classList.toggle('network-navigation-row', this.isNavigationRequestInternal);
                _get(_get_prototype_of(NetworkRequestNode.prototype), "createCells", this).call(this, element);
                this.updateBackgroundColor();
            }
        },
        {
            key: "setTextAndTitle",
            value: function setTextAndTitle(element, text, title) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(element, text);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(element, title || text);
            }
        },
        {
            key: "setTextAndTitleAsLink",
            value: function setTextAndTitleAsLink(element, cellText, titleText, handler) {
                var link = document.createElement('span');
                link.classList.add('devtools-link');
                link.textContent = cellText;
                link.addEventListener('click', handler);
                element.appendChild(link);
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(element, titleText);
            }
        },
        {
            key: "renderCell",
            value: function renderCell(c, columnId) {
                var cell = c;
                switch(columnId){
                    case 'name':
                        {
                            this.renderPrimaryCell(cell, columnId);
                            break;
                        }
                    case 'path':
                        {
                            this.renderPrimaryCell(cell, columnId, this.requestInternal.pathname);
                            break;
                        }
                    case 'url':
                        {
                            this.renderPrimaryCell(cell, columnId, this.requestInternal.url());
                            break;
                        }
                    case 'method':
                        {
                            var preflightRequest = this.requestInternal.preflightRequest();
                            if (preflightRequest) {
                                this.setTextAndTitle(cell, "".concat(this.requestInternal.requestMethod, " + "), i18nString(UIStrings.sPreflight, {
                                    PH1: this.requestInternal.requestMethod
                                }));
                                cell.appendChild(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier.linkifyRevealable(preflightRequest, i18nString(UIStrings.preflight), undefined, i18nString(UIStrings.selectPreflightRequest), undefined, 'preflight-request'));
                            } else {
                                this.setTextAndTitle(cell, this.requestInternal.requestMethod);
                            }
                            break;
                        }
                    case 'status':
                        {
                            this.renderStatusCell(cell);
                            break;
                        }
                    case 'protocol':
                        {
                            this.renderProtocolCell(cell);
                            break;
                        }
                    case 'scheme':
                        {
                            this.setTextAndTitle(cell, this.requestInternal.scheme);
                            break;
                        }
                    case 'domain':
                        {
                            this.setTextAndTitle(cell, this.requestInternal.domain);
                            break;
                        }
                    case 'remote-address':
                        {
                            this.setTextAndTitle(cell, this.requestInternal.remoteAddress());
                            break;
                        }
                    case 'remote-address-space':
                        {
                            this.renderAddressSpaceCell(cell, this.requestInternal.remoteAddressSpace());
                            break;
                        }
                    case 'cookies':
                        {
                            this.setTextAndTitle(cell, this.arrayLength(this.requestInternal.includedRequestCookies()));
                            break;
                        }
                    case 'set-cookies':
                        {
                            this.setTextAndTitle(cell, this.arrayLength(this.requestInternal.nonBlockedResponseCookies()));
                            break;
                        }
                    case 'priority':
                        {
                            var priority = this.requestInternal.priority();
                            var initialPriority = this.requestInternal.initialPriority();
                            if (priority && initialPriority) {
                                this.setTextAndTitle(cell, _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__.NetworkPriorities.uiLabelForNetworkPriority(priority), i18nString(UIStrings.initialPriorityToolTip, {
                                    PH1: _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__.NetworkPriorities.uiLabelForNetworkPriority(priority),
                                    PH2: _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__.NetworkPriorities.uiLabelForNetworkPriority(initialPriority)
                                }));
                            } else {
                                this.setTextAndTitle(cell, priority ? _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__.NetworkPriorities.uiLabelForNetworkPriority(priority) : '');
                            }
                            this.appendSubtitle(cell, initialPriority ? _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__.NetworkPriorities.uiLabelForNetworkPriority(initialPriority) : '');
                            break;
                        }
                    case 'connection-id':
                        {
                            this.setTextAndTitle(cell, this.requestInternal.connectionId === '0' ? '' : this.requestInternal.connectionId);
                            break;
                        }
                    case 'type':
                        {
                            this.setTextAndTitle(cell, this.displayType());
                            break;
                        }
                    case 'initiator':
                        {
                            this.renderInitiatorCell(cell);
                            break;
                        }
                    case 'initiator-address-space':
                        {
                            var clientSecurityState = this.requestInternal.clientSecurityState();
                            this.renderAddressSpaceCell(cell, clientSecurityState ? clientSecurityState.initiatorIPAddressSpace : "Unknown" /* Protocol.Network.IPAddressSpace.Unknown */ );
                            break;
                        }
                    case 'size':
                        {
                            this.renderSizeCell(cell);
                            break;
                        }
                    case 'time':
                        {
                            this.renderTimeCell(cell);
                            break;
                        }
                    case 'timeline':
                        {
                            this.setTextAndTitle(cell, '');
                            break;
                        }
                    case 'has-overrides':
                        {
                            this.setTextAndTitle(cell, this.requestInternal.overrideTypes.join(', '));
                            break;
                        }
                    default:
                        {
                            this.setTextAndTitle(cell, this.requestInternal.responseHeaderValue(columnId) || '');
                            break;
                        }
                }
            }
        },
        {
            key: "arrayLength",
            value: function arrayLength(array) {
                return array ? String(array.length) : '';
            }
        },
        {
            key: "select",
            value: function select(supressSelectedEvent) {
                _get(_get_prototype_of(NetworkRequestNode.prototype), "select", this).call(this, supressSelectedEvent);
                this.parentView().dispatchEventToListeners("RequestSelected" /* Events.RequestSelected */ , this.requestInternal);
            }
        },
        {
            key: "highlightMatchedSubstring",
            value: function highlightMatchedSubstring(regexp) {
                if (!regexp || !this.nameCell || this.nameCell.textContent === null) {
                    return [];
                }
                // Ensure element is created.
                this.element();
                var domChanges = [];
                var matchInfo = this.nameCell.textContent.match(regexp);
                if (matchInfo) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.highlightSearchResult(this.nameCell, matchInfo.index || 0, matchInfo[0].length, domChanges);
                }
                return domChanges;
            }
        },
        {
            key: "openInNewTab",
            value: function openInNewTab() {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(this.requestInternal.url());
            }
        },
        {
            key: "isFailed",
            value: function isFailed() {
                var _this_requestInternal_webBundleInfo, _this_requestInternal_webBundleInnerRequestInfo;
                if (this.requestInternal.failed && !this.requestInternal.statusCode) {
                    return true;
                }
                if (this.requestInternal.statusCode >= 400) {
                    return true;
                }
                var signedExchangeInfo = this.requestInternal.signedExchangeInfo();
                if (signedExchangeInfo !== null && Boolean(signedExchangeInfo.errors)) {
                    return true;
                }
                if (((_this_requestInternal_webBundleInfo = this.requestInternal.webBundleInfo()) === null || _this_requestInternal_webBundleInfo === void 0 ? void 0 : _this_requestInternal_webBundleInfo.errorMessage) || ((_this_requestInternal_webBundleInnerRequestInfo = this.requestInternal.webBundleInnerRequestInfo()) === null || _this_requestInternal_webBundleInnerRequestInfo === void 0 ? void 0 : _this_requestInternal_webBundleInnerRequestInfo.errorMessage)) {
                    return true;
                }
                if (this.requestInternal.corsErrorStatus()) {
                    return true;
                }
                return false;
            }
        },
        {
            key: "renderPrimaryCell",
            value: function renderPrimaryCell(cell, columnId, text) {
                var _this = this;
                var _this_dataGrid;
                var columnIndex = ((_this_dataGrid = this.dataGrid) === null || _this_dataGrid === void 0 ? void 0 : _this_dataGrid.indexOfVisibleColumn(columnId)) | 0;
                var isFirstCell = columnIndex === 0;
                if (isFirstCell) {
                    var leftPadding = this.leftPadding ? this.leftPadding + 'px' : '';
                    cell.style.setProperty('padding-left', leftPadding);
                    cell.tabIndex = -1;
                    this.nameCell = cell;
                    cell.addEventListener('dblclick', this.openInNewTab.bind(this), false);
                    cell.addEventListener('mousedown', function() {
                        // When the request panel isn't visible yet, firing the RequestActivated event
                        // doesn't make it visible if no request is selected. So we'll select it first.
                        _this.select();
                        _this.parentView().dispatchEventToListeners("RequestActivated" /* Events.RequestActivated */ , {
                            showPanel: true
                        });
                    });
                    cell.addEventListener('focus', function() {
                        return _this.parentView().resetFocus();
                    });
                    // render icons
                    var iconElement = this.getIcon(this.requestInternal);
                    cell.appendChild(iconElement);
                }
                if (columnId === 'name') {
                    var webBundleInnerRequestInfo = this.requestInternal.webBundleInnerRequestInfo();
                    if (webBundleInnerRequestInfo) {
                        var iconData = {
                            iconName: 'bundle',
                            color: 'var(--icon-info)'
                        };
                        var secondIconElement = this.createIconElement(iconData, i18nString(UIStrings.webBundleInnerRequest));
                        secondIconElement.classList.add('icon');
                        var networkManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkManager.NetworkManager.forRequest(this.requestInternal);
                        if (webBundleInnerRequestInfo.bundleRequestId && networkManager) {
                            cell.appendChild(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier.linkifyRevealable(new _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_8__.NetworkRequestId.NetworkRequestId(webBundleInnerRequestInfo.bundleRequestId, networkManager), secondIconElement, undefined, undefined, undefined, 'webbundle-request'));
                        } else {
                            cell.appendChild(secondIconElement);
                        }
                    }
                    var name = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimMiddle(this.requestInternal.name(), 100);
                    var networkManager1 = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkManager.NetworkManager.forRequest(this.requestInternal);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, networkManager1 ? networkManager1.target().decorateLabel(name) : name);
                    this.appendSubtitle(cell, this.requestInternal.path());
                    if (!this.requestInternal.url().startsWith('data')) {
                        // Show the URL as tooltip unless it's a data URL.
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, this.requestInternal.url());
                    }
                } else if (text) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, text);
                }
            }
        },
        {
            key: "createIconElement",
            value: function createIconElement(iconData, title) {
                var iconElement = document.createElement('div');
                iconElement.title = title;
                iconElement.style.setProperty('mask', "url('".concat(new URL("../../Images/".concat(iconData.iconName, ".svg"), 'file:///mnt/p0/Personal/rspack-repro-import-meta-url/src/panels/network/NetworkDataGridNode.js').toString(), "')  no-repeat center /99%"));
                iconElement.style.setProperty('background-color', iconData.color);
                return iconElement;
            }
        },
        {
            key: "getIcon",
            value: function getIcon(request) {
                var type = request.resourceType();
                var iconElement;
                if (this.isFailed()) {
                    var iconData = {
                        iconName: 'cross-circle-filled',
                        color: 'var(--icon-error)'
                    };
                    iconElement = this.createIconElement(iconData, type.title());
                    iconElement.classList.add('icon');
                    return iconElement;
                }
                if (request.hasThirdPartyCookiePhaseoutIssue()) {
                    var iconData1 = {
                        iconName: 'warning-filled',
                        color: 'var(--icon-warning)'
                    };
                    iconElement = this.createIconElement(iconData1, i18nString(UIStrings.thirdPartyPhaseout));
                    iconElement.classList.add('icon');
                    return iconElement;
                }
                var isHeaderOverriden = request.hasOverriddenHeaders();
                var isContentOverriden = request.hasOverriddenContent;
                if (isHeaderOverriden || isContentOverriden) {
                    var iconData2 = {
                        iconName: 'document',
                        color: 'var(--icon-default)'
                    };
                    var title;
                    if (isHeaderOverriden && isContentOverriden) {
                        title = i18nString(UIStrings.requestContentHeadersOverridden);
                    } else if (isContentOverriden) {
                        title = i18nString(UIStrings.requestContentOverridden);
                    } else {
                        title = i18nString(UIStrings.requestHeadersOverridden);
                    }
                    var iconChildElement = this.createIconElement(iconData2, title);
                    iconChildElement.classList.add('icon');
                    iconElement = document.createElement('div');
                    iconElement.classList.add('network-override-marker');
                    iconElement.appendChild(iconChildElement);
                    return iconElement;
                }
                // Pick icon based on MIME type in the following cases:
                // - If the MIME type is 'image': some images have request type of 'fetch' or etc.
                // - If the request type is 'fetch': everything fetched by service worker has request type 'fetch'.
                // - If the request type is 'other' and MIME type is 'script', e.g. for wasm files
                var typeFromMime = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.fromMimeType(request.mimeType);
                if (typeFromMime !== type && typeFromMime !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Other) {
                    if (type === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Fetch) {
                        type = typeFromMime;
                    } else if (typeFromMime === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image) {
                        type = typeFromMime;
                    } else if (type === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Other && typeFromMime === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Script) {
                        type = typeFromMime;
                    }
                }
                if (type === _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Image) {
                    var previewImage = document.createElement('img');
                    previewImage.classList.add('image-network-icon-preview');
                    previewImage.alt = request.resourceType().title();
                    void request.populateImageSource(previewImage);
                    iconElement = document.createElement('div');
                    iconElement.classList.add('image', 'icon');
                    iconElement.appendChild(previewImage);
                    return iconElement;
                }
                // Exclude Manifest here because it has mimeType:application/json but it has its own icon
                if (type !== _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.resourceTypes.Manifest && _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ResourceType.ResourceType.simplifyContentType(request.mimeType) === 'application/json') {
                    var iconData3 = {
                        iconName: 'file-json',
                        color: 'var(--icon-file-script)'
                    };
                    iconElement = this.createIconElement(iconData3, request.resourceType().title());
                    iconElement.classList.add('icon');
                    return iconElement;
                }
                // Others
                var iconData4 = _utils_utils_js__WEBPACK_IMPORTED_MODULE_14__.PanelUtils.iconDataForResourceType(type);
                iconElement = this.createIconElement(iconData4, request.resourceType().title());
                iconElement.classList.add('icon');
                return iconElement;
            }
        },
        {
            key: "renderStatusCell",
            value: function renderStatusCell(cell) {
                var _this = this;
                var _this_requestInternal_webBundleInfo, _this_requestInternal_webBundleInnerRequestInfo;
                cell.classList.toggle('network-dim-cell', !this.isFailed() && (this.requestInternal.cached() || !this.requestInternal.statusCode));
                var corsErrorStatus = this.requestInternal.corsErrorStatus();
                var webBundleErrorMessage = ((_this_requestInternal_webBundleInfo = this.requestInternal.webBundleInfo()) === null || _this_requestInternal_webBundleInfo === void 0 ? void 0 : _this_requestInternal_webBundleInfo.errorMessage) || ((_this_requestInternal_webBundleInnerRequestInfo = this.requestInternal.webBundleInnerRequestInfo()) === null || _this_requestInternal_webBundleInnerRequestInfo === void 0 ? void 0 : _this_requestInternal_webBundleInnerRequestInfo.errorMessage);
                if (webBundleErrorMessage) {
                    this.setTextAndTitle(cell, i18nString(UIStrings.webBundleError), webBundleErrorMessage);
                } else if (this.requestInternal.failed && !this.requestInternal.canceled && !this.requestInternal.wasBlocked() && !corsErrorStatus) {
                    var failText = i18nString(UIStrings.failed);
                    if (this.requestInternal.localizedFailDescription) {
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, failText);
                        this.appendSubtitle(cell, this.requestInternal.localizedFailDescription, true);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, failText + ' ' + this.requestInternal.localizedFailDescription);
                    } else {
                        this.setTextAndTitle(cell, failText);
                    }
                } else if (this.requestInternal.statusCode && this.requestInternal.statusCode >= 400) {
                    var statusText = this.requestInternal.getInferredStatusText();
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, String(this.requestInternal.statusCode));
                    this.appendSubtitle(cell, statusText);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, this.requestInternal.statusCode + ' ' + statusText);
                } else if (!this.requestInternal.statusCode && this.requestInternal.parsedURL.isDataURL()) {
                    this.setTextAndTitle(cell, i18nString(UIStrings.data));
                } else if (!this.requestInternal.statusCode && this.requestInternal.canceled) {
                    this.setTextAndTitle(cell, i18nString(UIStrings.canceled));
                } else if (this.requestInternal.wasBlocked()) {
                    var reason = i18nString(UIStrings.other);
                    var displayShowHeadersLink = false;
                    switch(this.requestInternal.blockedReason()){
                        case "other" /* Protocol.Network.BlockedReason.Other */ :
                            reason = i18nString(UIStrings.other);
                            break;
                        case "csp" /* Protocol.Network.BlockedReason.Csp */ :
                            reason = i18nString(UIStrings.csp);
                            break;
                        case "mixed-content" /* Protocol.Network.BlockedReason.MixedContent */ :
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('mixed-content');
                            break;
                        case "origin" /* Protocol.Network.BlockedReason.Origin */ :
                            reason = i18nString(UIStrings.origin);
                            break;
                        case "inspector" /* Protocol.Network.BlockedReason.Inspector */ :
                            reason = i18nString(UIStrings.devtools);
                            break;
                        case "subresource-filter" /* Protocol.Network.BlockedReason.SubresourceFilter */ :
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('subresource-filter');
                            break;
                        case "content-type" /* Protocol.Network.BlockedReason.ContentType */ :
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('content-type');
                            break;
                        case "coep-frame-resource-needs-coep-header" /* Protocol.Network.BlockedReason.CoepFrameResourceNeedsCoepHeader */ :
                            displayShowHeadersLink = true;
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('CoepFrameResourceNeedsCoepHeader');
                            break;
                        case "coop-sandboxed-iframe-cannot-navigate-to-coop-page" /* Protocol.Network.BlockedReason.CoopSandboxedIframeCannotNavigateToCoopPage */ :
                            displayShowHeadersLink = true;
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('CoopSandboxedIframeCannotNavigateToCoopPage');
                            break;
                        case "corp-not-same-origin" /* Protocol.Network.BlockedReason.CorpNotSameOrigin */ :
                            displayShowHeadersLink = true;
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('NotSameOrigin');
                            break;
                        case "corp-not-same-site" /* Protocol.Network.BlockedReason.CorpNotSameSite */ :
                            displayShowHeadersLink = true;
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('NotSameSite');
                            break;
                        case "corp-not-same-origin-after-defaulted-to-same-origin-by-coep" /* Protocol.Network.BlockedReason.CorpNotSameOriginAfterDefaultedToSameOriginByCoep */ :
                            displayShowHeadersLink = true;
                            reason = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('NotSameOriginAfterDefaultedToSameOriginByCoep');
                            break;
                    }
                    if (displayShowHeadersLink) {
                        this.setTextAndTitleAsLink(cell, i18nString(UIStrings.blockeds, {
                            PH1: reason
                        }), i18nString(UIStrings.blockedTooltip), function() {
                            _this.parentView().dispatchEventToListeners("RequestActivated" /* Events.RequestActivated */ , {
                                showPanel: true,
                                tab: "headers-component" /* NetworkForward.UIRequestLocation.UIRequestTabs.HeadersComponent */ 
                            });
                        });
                    } else {
                        this.setTextAndTitle(cell, i18nString(UIStrings.blockeds, {
                            PH1: reason
                        }));
                    }
                } else if (corsErrorStatus) {
                    this.setTextAndTitle(cell, i18nString(UIStrings.corsError), i18nString(UIStrings.crossoriginResourceSharingErrorS, {
                        PH1: corsErrorStatus.corsError
                    }));
                } else if (this.requestInternal.statusCode) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, String(this.requestInternal.statusCode));
                    var statusText1 = this.requestInternal.getInferredStatusText();
                    this.appendSubtitle(cell, statusText1);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, this.requestInternal.statusCode + ' ' + statusText1);
                } else if (this.requestInternal.finished) {
                    this.setTextAndTitle(cell, i18nString(UIStrings.finished));
                } else if (this.requestInternal.preserved) {
                    this.setTextAndTitle(cell, i18nString(UIStrings.unknown), i18nString(UIStrings.unknownExplanation));
                } else {
                    this.setTextAndTitle(cell, i18nString(UIStrings.pendingq));
                }
            }
        },
        {
            key: "renderProtocolCell",
            value: function renderProtocolCell(cell) {
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, this.requestInternal.protocol);
                switch(this.requestInternal.alternateProtocolUsage){
                    case "alternativeJobWonWithoutRace" /* Protocol.Network.AlternateProtocolUsage.AlternativeJobWonWithoutRace */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, UIStrings.alternativeJobWonWithoutRace);
                            break;
                        }
                    case "alternativeJobWonRace" /* Protocol.Network.AlternateProtocolUsage.AlternativeJobWonRace */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, UIStrings.alternativeJobWonRace);
                            break;
                        }
                    case "mainJobWonRace" /* Protocol.Network.AlternateProtocolUsage.MainJobWonRace */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, UIStrings.mainJobWonRace);
                            break;
                        }
                    case "mappingMissing" /* Protocol.Network.AlternateProtocolUsage.MappingMissing */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, UIStrings.mappingMissing);
                            break;
                        }
                    case "broken" /* Protocol.Network.AlternateProtocolUsage.Broken */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, UIStrings.broken);
                            break;
                        }
                    case "dnsAlpnH3JobWonWithoutRace" /* Protocol.Network.AlternateProtocolUsage.DnsAlpnH3JobWonWithoutRace */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, UIStrings.dnsAlpnH3JobWonWithoutRace);
                            break;
                        }
                    case "dnsAlpnH3JobWonRace" /* Protocol.Network.AlternateProtocolUsage.DnsAlpnH3JobWonRace */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, UIStrings.dnsAlpnH3JobWonRace);
                            break;
                        }
                    default:
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, this.requestInternal.protocol);
                            break;
                        }
                }
            }
        },
        {
            key: "renderInitiatorCell",
            value: function renderInitiatorCell(cell) {
                this.initiatorCell = cell;
                var request = this.requestInternal;
                var initiator = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_6__.NetworkLog.NetworkLog.instance().initiatorInfoForRequest(request);
                var timing = request.timing;
                if (timing && timing.pushStart) {
                    cell.appendChild(document.createTextNode(i18nString(UIStrings.push)));
                }
                switch(initiator.type){
                    case "parser" /* SDK.NetworkRequest.InitiatorType.Parser */ :
                        {
                            var uiSourceCode = _models_workspace_workspace_js__WEBPACK_IMPORTED_MODULE_7__.Workspace.WorkspaceImpl.instance().uiSourceCodeForURL(initiator.url);
                            var displayName = uiSourceCode === null || uiSourceCode === void 0 ? void 0 : uiSourceCode.displayName();
                            var text = displayName !== undefined && initiator.lineNumber !== undefined ? "".concat(displayName, ":").concat(initiator.lineNumber) : undefined;
                            cell.appendChild(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier.linkifyURL(initiator.url, {
                                text: text,
                                lineNumber: initiator.lineNumber,
                                columnNumber: initiator.columnNumber,
                                userMetric: _class_private_method_get(this, _getLinkifierMetric, getLinkifierMetric).call(this)
                            }));
                            this.appendSubtitle(cell, i18nString(UIStrings.parser));
                            break;
                        }
                    case "redirect" /* SDK.NetworkRequest.InitiatorType.Redirect */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, initiator.url);
                            var redirectSource = request.redirectSource();
                            console.assert(redirectSource !== null);
                            if (this.parentView().nodeForRequest(redirectSource)) {
                                cell.appendChild(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier.linkifyRevealable(redirectSource, _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_5__.ResourceUtils.displayNameForURL(redirectSource.url()), undefined, undefined, undefined, 'redirect-source-request'));
                            } else {
                                cell.appendChild(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier.linkifyURL(redirectSource.url(), {
                                    jslogContext: 'redirect-source-request-url'
                                }));
                            }
                            this.appendSubtitle(cell, i18nString(UIStrings.redirect));
                            break;
                        }
                    case "script" /* SDK.NetworkRequest.InitiatorType.Script */ :
                        {
                            var _SDK_NetworkManager_NetworkManager_forRequest;
                            var target = ((_SDK_NetworkManager_NetworkManager_forRequest = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.NetworkManager.NetworkManager.forRequest(request)) === null || _SDK_NetworkManager_NetworkManager_forRequest === void 0 ? void 0 : _SDK_NetworkManager_NetworkManager_forRequest.target()) || null;
                            var linkifier = this.parentView().linkifier();
                            if (initiator.stack) {
                                this.linkifiedInitiatorAnchor = linkifier.linkifyStackTraceTopFrame(target, initiator.stack);
                            } else {
                                this.linkifiedInitiatorAnchor = linkifier.linkifyScriptLocation(target, initiator.scriptId, initiator.url, initiator.lineNumber, {
                                    columnNumber: initiator.columnNumber,
                                    inlineFrameIndex: 0
                                });
                            }
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(this.linkifiedInitiatorAnchor, '');
                            cell.appendChild(this.linkifiedInitiatorAnchor);
                            this.appendSubtitle(cell, i18nString(UIStrings.script));
                            cell.classList.add('network-script-initiated');
                            break;
                        }
                    case "preload" /* SDK.NetworkRequest.InitiatorType.Preload */ :
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.preload));
                            cell.classList.add('network-dim-cell');
                            cell.appendChild(document.createTextNode(i18nString(UIStrings.preload)));
                            break;
                        }
                    case "signedExchange" /* SDK.NetworkRequest.InitiatorType.SignedExchange */ :
                        {
                            cell.appendChild(_ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier.linkifyURL(initiator.url));
                            this.appendSubtitle(cell, i18nString(UIStrings.signedexchange));
                            break;
                        }
                    case "preflight" /* SDK.NetworkRequest.InitiatorType.Preflight */ :
                        {
                            cell.appendChild(document.createTextNode(i18nString(UIStrings.preflight)));
                            if (initiator.initiatorRequest) {
                                var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.create('arrow-up-down-circle');
                                var link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_12__.Linkifier.Linkifier.linkifyRevealable(initiator.initiatorRequest, icon, undefined, i18nString(UIStrings.selectTheRequestThatTriggered), 'trailing-link-icon', 'initator-request');
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.ARIAUtils.setLabel(link, i18nString(UIStrings.selectTheRequestThatTriggered));
                                cell.appendChild(link);
                            }
                            break;
                        }
                    default:
                        {
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.otherC));
                            cell.classList.add('network-dim-cell');
                            cell.appendChild(document.createTextNode(i18nString(UIStrings.otherC)));
                        }
                }
            }
        },
        {
            key: "renderAddressSpaceCell",
            value: function renderAddressSpaceCell(cell, ipAddressSpace) {
                if (ipAddressSpace !== "Unknown" /* Protocol.Network.IPAddressSpace.Unknown */ ) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, ipAddressSpace);
                }
            }
        },
        {
            key: "renderSizeCell",
            value: function renderSizeCell(cell) {
                var resourceSize = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(this.requestInternal.resourceSize);
                if (this.requestInternal.cachedInMemory()) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, i18nString(UIStrings.memoryCache));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.servedFromMemoryCacheResource, {
                        PH1: resourceSize
                    }));
                    cell.classList.add('network-dim-cell');
                } else if (this.requestInternal.serviceWorkerRouterInfo) {
                    var serviceWorkerRouterInfo = this.requestInternal.serviceWorkerRouterInfo;
                    var _serviceWorkerRouterInfo_ruleIdMatched;
                    // If `serviceWorkerRouterInfo.ruleIdMatched` is undefined,store 0 to indicate invalid ID.
                    var ruleIdMatched = (_serviceWorkerRouterInfo_ruleIdMatched = serviceWorkerRouterInfo.ruleIdMatched) !== null && _serviceWorkerRouterInfo_ruleIdMatched !== void 0 ? _serviceWorkerRouterInfo_ruleIdMatched : 0;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('(ServiceWorker router)'));
                    var tooltipText;
                    if (serviceWorkerRouterInfo.matchedSourceType === "network" /* Protocol.Network.ServiceWorkerRouterSource.Network */ ) {
                        var transferSize = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(this.requestInternal.transferSize);
                        tooltipText = i18nString(UIStrings.matchedToServiceWorkerRouterWithNetworkSource, {
                            PH1: ruleIdMatched,
                            PH2: transferSize,
                            PH3: resourceSize
                        });
                    } else {
                        tooltipText = i18nString(UIStrings.matchedToServiceWorkerRouter, {
                            PH1: ruleIdMatched,
                            PH2: resourceSize
                        });
                    }
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, tooltipText);
                    cell.classList.add('network-dim-cell');
                } else if (this.requestInternal.fetchedViaServiceWorker) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, i18nString(UIStrings.serviceWorker));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.servedFromServiceWorkerResource, {
                        PH1: resourceSize
                    }));
                    cell.classList.add('network-dim-cell');
                } else if (this.requestInternal.redirectSourceSignedExchangeInfoHasNoErrors()) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('(signed-exchange)'));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.servedFromSignedHttpExchange, {
                        PH1: resourceSize
                    }));
                    cell.classList.add('network-dim-cell');
                } else if (this.requestInternal.webBundleInnerRequestInfo()) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, i18nString(UIStrings.webBundle));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.servedFromWebBundle, {
                        PH1: resourceSize
                    }));
                    cell.classList.add('network-dim-cell');
                } else if (this.requestInternal.fromPrefetchCache()) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, i18nString(UIStrings.prefetchCache));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.servedFromPrefetchCacheResource, {
                        PH1: resourceSize
                    }));
                    cell.classList.add('network-dim-cell');
                } else if (this.requestInternal.cached()) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, i18nString(UIStrings.diskCache));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.servedFromDiskCacheResourceSizeS, {
                        PH1: resourceSize
                    }));
                    cell.classList.add('network-dim-cell');
                } else {
                    var transferSize1 = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.NumberUtilities.bytesToString(this.requestInternal.transferSize);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.UIUtils.createTextChild(cell, transferSize1);
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(cell, "".concat(transferSize1, " transferred over network, resource size: ").concat(resourceSize));
                }
                this.appendSubtitle(cell, resourceSize);
            }
        },
        {
            key: "renderTimeCell",
            value: function renderTimeCell(cell) {
                if (this.requestInternal.duration > 0) {
                    this.setTextAndTitle(cell, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(this.requestInternal.duration));
                    this.appendSubtitle(cell, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.TimeUtilities.secondsToString(this.requestInternal.latency), false, i18nString(UIStrings.timeSubtitleTooltipText));
                } else if (this.requestInternal.preserved) {
                    this.setTextAndTitle(cell, i18nString(UIStrings.unknown), i18nString(UIStrings.unknownExplanation));
                } else {
                    cell.classList.add('network-dim-cell');
                    this.setTextAndTitle(cell, i18nString(UIStrings.pending));
                }
            }
        },
        {
            key: "appendSubtitle",
            value: function appendSubtitle(cellElement, subtitleText) {
                var alwaysVisible = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, tooltipText = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '';
                var subtitleElement = document.createElement('div');
                subtitleElement.classList.add('network-cell-subtitle');
                if (alwaysVisible) {
                    subtitleElement.classList.add('always-visible');
                }
                subtitleElement.textContent = subtitleText;
                if (tooltipText) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_13__.Tooltip.Tooltip.install(subtitleElement, tooltipText);
                }
                cellElement.appendChild(subtitleElement);
            }
        }
    ], [
        {
            key: "NameComparator",
            value: function NameComparator(a, b) {
                var aName = a.displayName().toLowerCase();
                var bName = b.displayName().toLowerCase();
                if (aName === bName) {
                    var aRequest = a.requestOrFirstKnownChildRequest();
                    var bRequest = b.requestOrFirstKnownChildRequest();
                    if (aRequest && bRequest) {
                        return aRequest.identityCompare(bRequest);
                    }
                    return aRequest ? -1 : 1;
                }
                return aName < bName ? -1 : 1;
            }
        },
        {
            key: "RemoteAddressComparator",
            value: function RemoteAddressComparator(a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aRemoteAddress = aRequest.remoteAddress();
                var bRemoteAddress = bRequest.remoteAddress();
                if (aRemoteAddress > bRemoteAddress) {
                    return 1;
                }
                if (bRemoteAddress > aRemoteAddress) {
                    return -1;
                }
                return aRequest.identityCompare(bRequest);
            }
        },
        {
            key: "SizeComparator",
            value: function SizeComparator(a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                if (bRequest.cached() && !aRequest.cached()) {
                    return 1;
                }
                if (aRequest.cached() && !bRequest.cached()) {
                    return -1;
                }
                return aRequest.transferSize - bRequest.transferSize || aRequest.resourceSize - bRequest.resourceSize || aRequest.identityCompare(bRequest);
            }
        },
        {
            key: "TypeComparator",
            value: function TypeComparator(a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aSimpleType = a.displayType();
                var bSimpleType = b.displayType();
                if (aSimpleType > bSimpleType) {
                    return 1;
                }
                if (bSimpleType > aSimpleType) {
                    return -1;
                }
                return aRequest.identityCompare(bRequest);
            }
        },
        {
            key: "InitiatorComparator",
            value: function InitiatorComparator(a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aHasInitiatorCell = _instanceof(a, NetworkRequestNode) && a.initiatorCell;
                var bHasInitiatorCell = _instanceof(b, NetworkRequestNode) && b.initiatorCell;
                if (!aHasInitiatorCell || !bHasInitiatorCell) {
                    return !aHasInitiatorCell ? -1 : 1;
                }
                // `a` and `b` are guaranteed NetworkRequestNodes with present initiatorCell elements.
                var networkRequestNodeA = a;
                var networkRequestNodeB = b;
                var aText = networkRequestNodeA.linkifiedInitiatorAnchor ? networkRequestNodeA.linkifiedInitiatorAnchor.textContent || '' : networkRequestNodeA.initiatorCell.title;
                var bText = networkRequestNodeB.linkifiedInitiatorAnchor ? networkRequestNodeB.linkifiedInitiatorAnchor.textContent || '' : networkRequestNodeB.initiatorCell.title;
                return aText.localeCompare(bText);
            }
        },
        {
            key: "InitiatorAddressSpaceComparator",
            value: function InitiatorAddressSpaceComparator(a, b) {
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aClientSecurityState = aRequest.clientSecurityState();
                var bClientSecurityState = bRequest.clientSecurityState();
                if (!aClientSecurityState || !bClientSecurityState) {
                    return !aClientSecurityState ? -1 : 1;
                }
                return aClientSecurityState.initiatorIPAddressSpace.localeCompare(bClientSecurityState.initiatorIPAddressSpace);
            }
        },
        {
            key: "RemoteAddressSpaceComparator",
            value: function RemoteAddressSpaceComparator(a, b) {
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                return aRequest.remoteAddressSpace().localeCompare(bRequest.remoteAddressSpace());
            }
        },
        {
            key: "RequestCookiesCountComparator",
            value: function RequestCookiesCountComparator(a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aScore = aRequest.includedRequestCookies().length;
                var bScore = bRequest.includedRequestCookies().length;
                return aScore - bScore || aRequest.identityCompare(bRequest);
            }
        },
        {
            key: "ResponseCookiesCountComparator",
            value: // TODO(allada) This function deserves to be in a network-common of some sort.
            function ResponseCookiesCountComparator(a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aScore = aRequest.responseCookies ? aRequest.responseCookies.length : 0;
                var bScore = bRequest.responseCookies ? bRequest.responseCookies.length : 0;
                return aScore - bScore || aRequest.identityCompare(bRequest);
            }
        },
        {
            key: "PriorityComparator",
            value: function PriorityComparator(a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aPriority = aRequest.priority();
                var aScore = aPriority ? _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__.NetworkPriorities.networkPriorityWeight(aPriority) : 0;
                aScore = aScore || 0;
                var bPriority = bRequest.priority();
                var bScore = bPriority ? _ui_legacy_components_perf_ui_perf_ui_js__WEBPACK_IMPORTED_MODULE_11__.NetworkPriorities.networkPriorityWeight(bPriority) : 0;
                bScore = bScore || 0;
                return aScore - bScore || aRequest.identityCompare(bRequest);
            }
        },
        {
            key: "RequestPropertyComparator",
            value: function RequestPropertyComparator(propertyName, a, b) {
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var aRequest = a.requestOrFirstKnownChildRequest();
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aValue = aRequest[propertyName];
                var bValue = bRequest[propertyName];
                if (aValue === bValue) {
                    return aRequest.identityCompare(bRequest);
                }
                return aValue > bValue ? 1 : -1;
            }
        },
        {
            key: "RequestURLComparator",
            value: function RequestURLComparator(a, b) {
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aURL = aRequest.url();
                var bURL = bRequest.url();
                if (aURL === bURL) {
                    return aRequest.identityCompare(bRequest);
                }
                return aURL > bURL ? 1 : -1;
            }
        },
        {
            key: "ResponseHeaderStringComparator",
            value: function ResponseHeaderStringComparator(propertyName, a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aValue = String(aRequest.responseHeaderValue(propertyName) || '');
                var bValue = String(bRequest.responseHeaderValue(propertyName) || '');
                return aValue.localeCompare(bValue) || aRequest.identityCompare(bRequest);
            }
        },
        {
            key: "ResponseHeaderNumberComparator",
            value: function ResponseHeaderNumberComparator(propertyName, a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aRawValue = aRequest.responseHeaderValue(propertyName);
                var aValue = aRawValue !== undefined ? parseFloat(aRawValue) : -Infinity;
                var bRawValue = bRequest.responseHeaderValue(propertyName);
                var bValue = bRawValue !== undefined ? parseFloat(bRawValue) : -Infinity;
                if (aValue === bValue) {
                    return aRequest.identityCompare(bRequest);
                }
                return aValue > bValue ? 1 : -1;
            }
        },
        {
            key: "ResponseHeaderDateComparator",
            value: function ResponseHeaderDateComparator(propertyName, a, b) {
                // TODO(allada) Handle this properly for group nodes.
                var aRequest = a.requestOrFirstKnownChildRequest();
                var bRequest = b.requestOrFirstKnownChildRequest();
                if (!aRequest || !bRequest) {
                    return !aRequest ? -1 : 1;
                }
                var aHeader = aRequest.responseHeaderValue(propertyName);
                var bHeader = bRequest.responseHeaderValue(propertyName);
                var aValue = aHeader ? new Date(aHeader).getTime() : -Infinity;
                var bValue = bHeader ? new Date(bHeader).getTime() : -Infinity;
                if (aValue === bValue) {
                    return aRequest.identityCompare(bRequest);
                }
                return aValue > bValue ? 1 : -1;
            }
        }
    ]);
    return NetworkRequestNode;
}(NetworkNode);
function getLinkifierMetric() {
    if (this.requestInternal.resourceType().isStyleSheet()) {
        return _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.StyleSheetInitiatorLinkClicked;
    }
    return undefined;
}
var NetworkGroupNode = /*#__PURE__*/ function(NetworkNode) {
    "use strict";
    _inherits(NetworkGroupNode, NetworkNode);
    var _super = _create_super(NetworkGroupNode);
    function NetworkGroupNode() {
        _class_call_check(this, NetworkGroupNode);
        return _super.apply(this, arguments);
    }
    _create_class(NetworkGroupNode, [
        {
            key: "createCells",
            value: function createCells(element) {
                _get(_get_prototype_of(NetworkGroupNode.prototype), "createCells", this).call(this, element);
                var primaryColumn = this.dataGrid.visibleColumnsArray[0];
                var localizedTitle = "".concat(primaryColumn.title);
                var localizedLevel = i18nString(UIStrings.level);
                this.nodeAccessibleText = "".concat(localizedLevel, " ").concat(localizedTitle, ": ").concat(this.cellAccessibleTextMap.get(primaryColumn.id));
            }
        },
        {
            key: "renderCell",
            value: function renderCell(c, columnId) {
                var columnIndex = this.dataGrid.indexOfVisibleColumn(columnId);
                if (columnIndex === 0) {
                    var cell = c;
                    var leftPadding = this.leftPadding ? this.leftPadding + 'px' : '';
                    cell.style.setProperty('padding-left', leftPadding);
                    cell.classList.add('disclosure');
                    this.setCellAccessibleName(cell.textContent || '', cell, columnId);
                }
            }
        },
        {
            key: "select",
            value: function select(supressSelectedEvent) {
                _get(_get_prototype_of(NetworkGroupNode.prototype), "select", this).call(this, supressSelectedEvent);
                var firstChildNode = this.traverseNextNode(false, undefined, true);
                var request = firstChildNode === null || firstChildNode === void 0 ? void 0 : firstChildNode.request();
                if (request) {
                    this.parentView().dispatchEventToListeners("RequestSelected" /* Events.RequestSelected */ , request);
                }
            }
        }
    ]);
    return NetworkGroupNode;
} //# sourceMappingURL=NetworkDataGridNode.js.map
(NetworkNode);


}),

}]);