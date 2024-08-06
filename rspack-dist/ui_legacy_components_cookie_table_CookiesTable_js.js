"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_cookie_table_CookiesTable_js"], {
"./ui/legacy/components/cookie_table/CookiesTable.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CookiesTable: function() { return CookiesTable; },
  DataGridNode: function() { return DataGridNode; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./core/root/root.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _cookiesTable_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cookiesTable.css.js */ "./ui/legacy/components/cookie_table/cookiesTable.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2009 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
 * Copyright (C) 2010 Google Inc. All rights reserved.
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
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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











var UIStrings = {
    /**
     *@description Cookie table cookies table expires session value in Cookies Table of the Cookies table in the Application panel
     */ session: 'Session',
    /**
     *@description Text for the name of something
     */ name: 'Name',
    /**
     *@description Text for the value of something
     */ value: 'Value',
    /**
     *@description Text for the size of something
     */ size: 'Size',
    /**
     *@description Data grid name for Editable Cookies data grid
     */ editableCookies: 'Editable Cookies',
    /**
     *@description Text for web cookies
     */ cookies: 'Cookies',
    /**
     *@description Text for something not available
     */ na: 'N/A',
    /**
     *@description Text for Context Menu entry
     */ showRequestsWithThisCookie: 'Show Requests With This Cookie',
    /**
     *@description Text for Context Menu entry
     */ showIssueAssociatedWithThis: 'Show issue associated with this cookie',
    /**
     *@description Tooltip for the cell that shows the sourcePort property of a cookie in the cookie table. The source port is numberic attribute of a cookie.
     */ sourcePortTooltip: 'Shows the source port (range 1-65535) the cookie was set on. If the port is unknown, this shows -1.',
    /**
     *@description Tooltip for the cell that shows the sourceScheme property of a cookie in the cookie table. The source scheme is a trinary attribute of a cookie.
     */ sourceSchemeTooltip: 'Shows the source scheme (`Secure`, `NonSecure`) the cookie was set on. If the scheme is unknown, this shows `Unset`.',
    /**
     * @description Text for the date column displayed if the expiration time of the cookie is extremely far out in the future.
     * @example {+275760-09-13T00:00:00.000Z} date
     */ timeAfter: 'after {date}',
    /**
     * @description Tooltip for the date column displayed if the expiration time of the cookie is extremely far out in the future.
     * @example {+275760-09-13T00:00:00.000Z} date
     * @example {9001628746521180} seconds
     */ timeAfterTooltip: 'The expiration timestamp is {seconds}, which corresponds to a date after {date}',
    /**
     * @description Text to be show in the Partition Key column in case it is an opaque origin.
     */ opaquePartitionKey: '(opaque)'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/cookie_table/CookiesTable.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var expiresSessionValue = i18nLazyString(UIStrings.session);
var CookiesTable = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(CookiesTable, _UI_Widget_VBox);
    var _super = _create_super(CookiesTable);
    function CookiesTable(renderInline, saveCallback, refreshCallback, selectedCallback, deleteCallback) {
        _class_call_check(this, CookiesTable);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "saveCallback", void 0);
        _define_property(_assert_this_initialized(_this), "refreshCallback", void 0);
        _define_property(_assert_this_initialized(_this), "deleteCallback", void 0);
        _define_property(_assert_this_initialized(_this), "dataGrid", void 0);
        _define_property(_assert_this_initialized(_this), "lastEditedColumnId", void 0);
        _define_property(_assert_this_initialized(_this), "data", void 0);
        _define_property(_assert_this_initialized(_this), "cookieDomain", void 0);
        _define_property(_assert_this_initialized(_this), "cookieToBlockedReasons", void 0);
        _define_property(_assert_this_initialized(_this), "cookieToExemptionReason", void 0);
        _this.element.classList.add('cookies-table');
        _this.saveCallback = saveCallback;
        _this.refreshCallback = refreshCallback;
        _this.deleteCallback = deleteCallback;
        var editable = Boolean(saveCallback);
        var columns = [
            {
                id: "name" /* SDK.Cookie.Attribute.Name */ ,
                title: i18nString(UIStrings.name),
                sortable: true,
                disclosure: editable,
                sort: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_9__.DataGrid.Order.Ascending,
                longText: true,
                weight: 24,
                editable: editable
            },
            {
                id: "value" /* SDK.Cookie.Attribute.Value */ ,
                title: i18nString(UIStrings.value),
                sortable: true,
                longText: true,
                weight: 34,
                editable: editable
            },
            {
                id: "domain" /* SDK.Cookie.Attribute.Domain */ ,
                title: 'Domain',
                sortable: true,
                weight: 7,
                editable: editable
            },
            {
                id: "path" /* SDK.Cookie.Attribute.Path */ ,
                title: 'Path',
                sortable: true,
                weight: 7,
                editable: editable
            },
            {
                id: "expires" /* SDK.Cookie.Attribute.Expires */ ,
                title: 'Expires / Max-Age',
                sortable: true,
                weight: 7,
                editable: editable
            },
            {
                id: "size" /* SDK.Cookie.Attribute.Size */ ,
                title: i18nString(UIStrings.size),
                sortable: true,
                align: "right" /* DataGrid.DataGrid.Align.Right */ ,
                weight: 7
            },
            {
                id: "http-only" /* SDK.Cookie.Attribute.HttpOnly */ ,
                title: 'HttpOnly',
                sortable: true,
                align: "center" /* DataGrid.DataGrid.Align.Center */ ,
                weight: 7,
                dataType: "Boolean" /* DataGrid.DataGrid.DataType.Boolean */ ,
                editable: editable
            },
            {
                id: "secure" /* SDK.Cookie.Attribute.Secure */ ,
                title: 'Secure',
                sortable: true,
                align: "center" /* DataGrid.DataGrid.Align.Center */ ,
                weight: 7,
                dataType: "Boolean" /* DataGrid.DataGrid.DataType.Boolean */ ,
                editable: editable
            },
            {
                id: "same-site" /* SDK.Cookie.Attribute.SameSite */ ,
                title: 'SameSite',
                sortable: true,
                weight: 7,
                editable: editable
            },
            {
                id: "partition-key-site" /* SDK.Cookie.Attribute.PartitionKeySite */ ,
                title: 'Partition Key Site',
                sortable: true,
                weight: 7,
                editable: editable
            },
            {
                id: "has-cross-site-ancestor" /* SDK.Cookie.Attribute.HasCrossSiteAncestor */ ,
                title: 'Cross Site',
                sortable: true,
                align: "center" /* DataGrid.DataGrid.Align.Center */ ,
                weight: 7,
                dataType: "Boolean" /* DataGrid.DataGrid.DataType.Boolean */ ,
                editable: editable
            },
            {
                id: "priority" /* SDK.Cookie.Attribute.Priority */ ,
                title: 'Priority',
                sortable: true,
                weight: 7,
                editable: editable
            }
        ];
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('experimental-cookie-features')) {
            var _columns;
            var additionalColumns = [
                {
                    id: "source-scheme" /* SDK.Cookie.Attribute.SourceScheme */ ,
                    title: 'SourceScheme',
                    sortable: true,
                    align: "center" /* DataGrid.DataGrid.Align.Center */ ,
                    weight: 7,
                    editable: editable
                },
                {
                    id: "source-port" /* SDK.Cookie.Attribute.SourcePort */ ,
                    title: 'SourcePort',
                    sortable: true,
                    align: "center" /* DataGrid.DataGrid.Align.Center */ ,
                    weight: 7,
                    editable: editable
                }
            ];
            (_columns = columns).push.apply(_columns, _to_consumable_array(additionalColumns));
        }
        if (editable) {
            _this.dataGrid = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_9__.DataGrid.DataGridImpl({
                displayName: i18nString(UIStrings.editableCookies),
                columns: columns,
                editCallback: _this.onUpdateCookie.bind(_assert_this_initialized(_this)),
                deleteCallback: _this.onDeleteCookie.bind(_assert_this_initialized(_this)),
                refreshCallback: refreshCallback
            });
        } else {
            _this.dataGrid = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_9__.DataGrid.DataGridImpl({
                displayName: i18nString(UIStrings.cookies),
                columns: columns,
                editCallback: undefined,
                deleteCallback: undefined,
                refreshCallback: undefined
            });
        }
        _this.dataGrid.setStriped(true);
        _this.dataGrid.setName('cookies-table');
        _this.dataGrid.addEventListener("SortingChanged" /* DataGrid.DataGrid.Events.SortingChanged */ , _this.rebuildTable, _assert_this_initialized(_this));
        _this.dataGrid.setRowContextMenuCallback(_this.populateContextMenu.bind(_assert_this_initialized(_this)));
        if (renderInline) {
            _this.dataGrid.renderInline();
        }
        if (selectedCallback) {
            _this.dataGrid.addEventListener("SelectedNode" /* DataGrid.DataGrid.Events.SelectedNode */ , selectedCallback, _assert_this_initialized(_this));
        }
        _this.lastEditedColumnId = null;
        _this.dataGrid.asWidget().show(_this.element);
        _this.data = [];
        _this.cookieDomain = '';
        _this.cookieToBlockedReasons = null;
        _this.cookieToExemptionReason = null;
        return _this;
    }
    _create_class(CookiesTable, [
        {
            key: "wasShown",
            value: function wasShown() {
                this.registerCSSFiles([
                    _cookiesTable_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]);
            }
        },
        {
            key: "setCookies",
            value: function setCookies(cookies, cookieToBlockedReasons, cookieToExemptionReason) {
                this.setCookieFolders([
                    {
                        cookies: cookies,
                        folderName: null
                    }
                ], cookieToBlockedReasons, cookieToExemptionReason);
            }
        },
        {
            key: "setCookieFolders",
            value: function setCookieFolders(cookieFolders, cookieToBlockedReasons, cookieToExemptionReason) {
                this.data = cookieFolders;
                this.cookieToBlockedReasons = cookieToBlockedReasons || null;
                this.cookieToExemptionReason = cookieToExemptionReason || null;
                this.rebuildTable();
            }
        },
        {
            key: "setCookieDomain",
            value: function setCookieDomain(cookieDomain) {
                this.cookieDomain = cookieDomain;
            }
        },
        {
            key: "selectedCookie",
            value: function selectedCookie() {
                var node = this.dataGrid.selectedNode;
                return node ? node.cookie : null;
            }
        },
        {
            key: "getSelectionCookies",
            value: function getSelectionCookies() {
                var node = this.dataGrid.selectedNode;
                var nextNeighbor = node && node.traverseNextNode(true);
                var previousNeighbor = node && node.traversePreviousNode(true);
                return {
                    current: node && node.cookie,
                    neighbor: nextNeighbor && nextNeighbor.cookie || previousNeighbor && previousNeighbor.cookie
                };
            }
        },
        {
            key: "willHide",
            value: function willHide() {
                this.lastEditedColumnId = null;
            }
        },
        {
            key: "findSelectedCookie",
            value: function findSelectedCookie(selectionCookies, cookies) {
                var _this = this;
                if (!cookies) {
                    return null;
                }
                var current = selectionCookies.current;
                var foundCurrent = cookies.find(function(cookie) {
                    return _this.isSameCookie(cookie, current);
                });
                if (foundCurrent) {
                    return foundCurrent;
                }
                var neighbor = selectionCookies.neighbor;
                var foundNeighbor = cookies.find(function(cookie) {
                    return _this.isSameCookie(cookie, neighbor);
                });
                if (foundNeighbor) {
                    return foundNeighbor;
                }
                return null;
            }
        },
        {
            key: "isSameCookie",
            value: function isSameCookie(cookieA, cookieB) {
                return cookieB !== null && cookieB !== undefined && cookieB.name() === cookieA.name() && cookieB.domain() === cookieA.domain() && cookieB.path() === cookieA.path();
            }
        },
        {
            key: "rebuildTable",
            value: function rebuildTable() {
                var _this_dataGrid_element;
                var restoreFocus = (_this_dataGrid_element = this.dataGrid.element) === null || _this_dataGrid_element === void 0 ? void 0 : _this_dataGrid_element.contains(document.activeElement);
                var selectionCookies = this.getSelectionCookies();
                var lastEditedColumnId = this.lastEditedColumnId;
                this.lastEditedColumnId = null;
                this.dataGrid.rootNode().removeChildren();
                for(var i = 0; i < this.data.length; ++i){
                    var item = this.data[i];
                    var selectedCookie = this.findSelectedCookie(selectionCookies, item.cookies);
                    if (item.folderName) {
                        var groupData = {};
                        groupData["name" /* SDK.Cookie.Attribute.Name */ ] = item.folderName;
                        groupData["value" /* SDK.Cookie.Attribute.Value */ ] = '';
                        groupData["size" /* SDK.Cookie.Attribute.Size */ ] = this.totalSize(item.cookies);
                        groupData["domain" /* SDK.Cookie.Attribute.Domain */ ] = '';
                        groupData["path" /* SDK.Cookie.Attribute.Path */ ] = '';
                        groupData["expires" /* SDK.Cookie.Attribute.Expires */ ] = '';
                        groupData["http-only" /* SDK.Cookie.Attribute.HttpOnly */ ] = '';
                        groupData["secure" /* SDK.Cookie.Attribute.Secure */ ] = '';
                        groupData["same-site" /* SDK.Cookie.Attribute.SameSite */ ] = '';
                        groupData["source-port" /* SDK.Cookie.Attribute.SourcePort */ ] = '';
                        groupData["source-scheme" /* SDK.Cookie.Attribute.SourceScheme */ ] = '';
                        groupData["priority" /* SDK.Cookie.Attribute.Priority */ ] = '';
                        var groupNode = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_9__.DataGrid.DataGridNode(groupData);
                        groupNode.selectable = true;
                        this.dataGrid.rootNode().appendChild(groupNode);
                        groupNode.element().classList.add('row-group');
                        this.populateNode(groupNode, item.cookies, selectedCookie, lastEditedColumnId);
                        groupNode.expand();
                    } else {
                        this.populateNode(this.dataGrid.rootNode(), item.cookies, selectedCookie, lastEditedColumnId);
                    }
                }
                if (selectionCookies.current && lastEditedColumnId && !this.dataGrid.selectedNode) {
                    this.addInactiveNode(this.dataGrid.rootNode(), selectionCookies.current, lastEditedColumnId);
                }
                if (this.saveCallback) {
                    this.dataGrid.addCreationNode(false);
                }
                if (restoreFocus) {
                    this.dataGrid.element.focus();
                }
            }
        },
        {
            key: "populateNode",
            value: function populateNode(parentNode, cookies, selectedCookie, lastEditedColumnId) {
                parentNode.removeChildren();
                if (!cookies) {
                    return;
                }
                this.sortCookies(cookies);
                for(var i = 0; i < cookies.length; ++i){
                    var cookie = cookies[i];
                    var cookieNode = this.createGridNode(cookie);
                    parentNode.appendChild(cookieNode);
                    if (this.isSameCookie(cookie, selectedCookie)) {
                        cookieNode.select();
                        if (lastEditedColumnId !== null) {
                            this.dataGrid.startEditingNextEditableColumnOfDataGridNode(cookieNode, lastEditedColumnId);
                        }
                    }
                }
            }
        },
        {
            key: "addInactiveNode",
            value: function addInactiveNode(parentNode, cookie, editedColumnId) {
                var cookieNode = this.createGridNode(cookie);
                parentNode.appendChild(cookieNode);
                cookieNode.select();
                cookieNode.setInactive(true);
                if (editedColumnId !== null) {
                    this.dataGrid.startEditingNextEditableColumnOfDataGridNode(cookieNode, editedColumnId);
                }
            }
        },
        {
            key: "totalSize",
            value: function totalSize(cookies) {
                var totalSize = 0;
                for(var i = 0; cookies && i < cookies.length; ++i){
                    totalSize += cookies[i].size();
                }
                return totalSize;
            }
        },
        {
            key: "sortCookies",
            value: function sortCookies(cookies) {
                var sortDirection = this.dataGrid.isSortOrderAscending() ? 1 : -1;
                function getValue(cookie, property) {
                    switch(property){
                        case "name" /* SDK.Cookie.Attribute.Name */ :
                            return String(cookie.name());
                        case "value" /* SDK.Cookie.Attribute.Value */ :
                            return String(cookie.value());
                        case "domain" /* SDK.Cookie.Attribute.Domain */ :
                            return String(cookie.domain());
                        case "path" /* SDK.Cookie.Attribute.Path */ :
                            return String(cookie.path());
                        case "http-only" /* SDK.Cookie.Attribute.HttpOnly */ :
                            return String(cookie.httpOnly());
                        case "secure" /* SDK.Cookie.Attribute.Secure */ :
                            return String(cookie.secure());
                        case "same-site" /* SDK.Cookie.Attribute.SameSite */ :
                            return String(cookie.sameSite());
                        case "partition-key-site" /* SDK.Cookie.Attribute.PartitionKeySite */ :
                            return cookie.partitionKeyOpaque() ? i18nString(UIStrings.opaquePartitionKey) : String(cookie.topLevelSite());
                        case "has-cross-site-ancestor" /* SDK.Cookie.Attribute.HasCrossSiteAncestor */ :
                            return String(cookie.partitioned() ? cookie.hasCrossSiteAncestor() : false);
                        case "source-scheme" /* SDK.Cookie.Attribute.SourceScheme */ :
                            return String(cookie.sourceScheme());
                        default:
                            return String(cookie.name());
                    }
                }
                function compareTo(property, cookie1, cookie2) {
                    return sortDirection * _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(getValue(cookie1, property), getValue(cookie2, property));
                }
                function numberCompare(p, cookie1, cookie2) {
                    return sortDirection * (p(cookie1) - p(cookie2));
                }
                function priorityCompare(cookie1, cookie2) {
                    var priorities = [
                        "Low" /* Protocol.Network.CookiePriority.Low */ ,
                        "Medium" /* Protocol.Network.CookiePriority.Medium */ ,
                        "High" /* Protocol.Network.CookiePriority.High */ 
                    ];
                    var priority1 = priorities.indexOf(cookie1.priority());
                    var priority2 = priorities.indexOf(cookie2.priority());
                    return sortDirection * (priority1 - priority2);
                }
                function expiresCompare(cookie1, cookie2) {
                    if (cookie1.session() !== cookie2.session()) {
                        return sortDirection * (cookie1.session() ? 1 : -1);
                    }
                    if (cookie1.session()) {
                        return 0;
                    }
                    if (cookie1.maxAge() && cookie2.maxAge()) {
                        return sortDirection * (cookie1.maxAge() - cookie2.maxAge());
                    }
                    if (cookie1.expires() && cookie2.expires()) {
                        return sortDirection * (cookie1.expires() - cookie2.expires());
                    }
                    return sortDirection * (cookie1.expires() ? 1 : -1);
                }
                var comparator;
                var columnId = this.dataGrid.sortColumnId() || "name" /* SDK.Cookie.Attribute.Name */ ;
                if (columnId === "expires" /* SDK.Cookie.Attribute.Expires */ ) {
                    comparator = expiresCompare;
                } else if (columnId === "size" /* SDK.Cookie.Attribute.Size */ ) {
                    comparator = numberCompare.bind(null, function(c) {
                        return c.size();
                    });
                } else if (columnId === "source-port" /* SDK.Cookie.Attribute.SourcePort */ ) {
                    comparator = numberCompare.bind(null, function(c) {
                        return c.sourcePort();
                    });
                } else if (columnId === "priority" /* SDK.Cookie.Attribute.Priority */ ) {
                    comparator = priorityCompare;
                } else {
                    comparator = compareTo.bind(null, columnId);
                }
                cookies.sort(comparator);
            }
        },
        {
            key: "createGridNode",
            value: function createGridNode(cookie) {
                var _this_cookieToBlockedReasons, _this_cookieToExemptionReason;
                var data = {};
                data["name" /* SDK.Cookie.Attribute.Name */ ] = cookie.name();
                data["value" /* SDK.Cookie.Attribute.Value */ ] = cookie.value();
                if (cookie.type() === 0 /* SDK.Cookie.Type.Request */ ) {
                    data["domain" /* SDK.Cookie.Attribute.Domain */ ] = cookie.domain() ? cookie.domain() : i18nString(UIStrings.na);
                    data["path" /* SDK.Cookie.Attribute.Path */ ] = cookie.path() ? cookie.path() : i18nString(UIStrings.na);
                } else {
                    data["domain" /* SDK.Cookie.Attribute.Domain */ ] = cookie.domain() || '';
                    data["path" /* SDK.Cookie.Attribute.Path */ ] = cookie.path() || '';
                }
                var expiresTooltip = undefined;
                if (cookie.maxAge()) {
                    data["expires" /* SDK.Cookie.Attribute.Expires */ ] = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(Math.floor(cookie.maxAge()));
                } else if (cookie.expires()) {
                    var expires = cookie.expires();
                    if (expires < 0) {
                        data["expires" /* SDK.Cookie.Attribute.Expires */ ] = expiresSessionValue();
                    } else {
                        // See https://tc39.es/ecma262/#sec-time-values-and-time-range
                        var maxTimestamp = 8640000000000000;
                        if (expires > maxTimestamp) {
                            var date = new Date(maxTimestamp).toISOString();
                            data["expires" /* SDK.Cookie.Attribute.Expires */ ] = i18nString(UIStrings.timeAfter, {
                                date: date
                            });
                            expiresTooltip = i18nString(UIStrings.timeAfterTooltip, {
                                seconds: expires,
                                date: date
                            });
                        } else {
                            data["expires" /* SDK.Cookie.Attribute.Expires */ ] = new Date(expires).toISOString();
                        }
                    }
                } else {
                    data["expires" /* SDK.Cookie.Attribute.Expires */ ] = cookie.type() === 0 /* SDK.Cookie.Type.Request */  ? i18nString(UIStrings.na) : expiresSessionValue();
                }
                data["size" /* SDK.Cookie.Attribute.Size */ ] = cookie.size();
                data["http-only" /* SDK.Cookie.Attribute.HttpOnly */ ] = cookie.httpOnly();
                data["secure" /* SDK.Cookie.Attribute.Secure */ ] = cookie.secure();
                data["same-site" /* SDK.Cookie.Attribute.SameSite */ ] = cookie.sameSite() || '';
                data["source-port" /* SDK.Cookie.Attribute.SourcePort */ ] = cookie.sourcePort();
                data["source-scheme" /* SDK.Cookie.Attribute.SourceScheme */ ] = cookie.sourceScheme();
                data["priority" /* SDK.Cookie.Attribute.Priority */ ] = cookie.priority() || '';
                data["partition-key-site" /* SDK.Cookie.Attribute.PartitionKeySite */ ] = cookie.topLevelSite();
                data["has-cross-site-ancestor" /* SDK.Cookie.Attribute.HasCrossSiteAncestor */ ] = cookie.hasCrossSiteAncestor() ? 'true' : '';
                var blockedReasons = (_this_cookieToBlockedReasons = this.cookieToBlockedReasons) === null || _this_cookieToBlockedReasons === void 0 ? void 0 : _this_cookieToBlockedReasons.get(cookie);
                var exemptionReason = (_this_cookieToExemptionReason = this.cookieToExemptionReason) === null || _this_cookieToExemptionReason === void 0 ? void 0 : _this_cookieToExemptionReason.get(cookie);
                var node = new DataGridNode(data, cookie, blockedReasons || null, exemptionReason || null);
                if (expiresTooltip) {
                    node.setExpiresTooltip(expiresTooltip);
                }
                node.selectable = true;
                return node;
            }
        },
        {
            key: "onDeleteCookie",
            value: function onDeleteCookie(node) {
                var _this = this;
                if (node.cookie && this.deleteCallback) {
                    this.deleteCallback(node.cookie, function() {
                        return _this.refresh();
                    });
                }
            }
        },
        {
            key: "onUpdateCookie",
            value: function onUpdateCookie(editingNode, columnIdentifier, _oldText, _newText) {
                this.lastEditedColumnId = columnIdentifier;
                this.setDefaults(editingNode);
                if (this.isValidCookieData(editingNode.data)) {
                    this.saveNode(editingNode);
                } else {
                    editingNode.setDirty(true);
                }
            }
        },
        {
            key: "setDefaults",
            value: function setDefaults(node) {
                if (node.data["name" /* SDK.Cookie.Attribute.Name */ ] === null) {
                    node.data["name" /* SDK.Cookie.Attribute.Name */ ] = '';
                }
                if (node.data["value" /* SDK.Cookie.Attribute.Value */ ] === null) {
                    node.data["value" /* SDK.Cookie.Attribute.Value */ ] = '';
                }
                if (node.data["domain" /* SDK.Cookie.Attribute.Domain */ ] === null) {
                    node.data["domain" /* SDK.Cookie.Attribute.Domain */ ] = this.cookieDomain;
                }
                if (node.data["path" /* SDK.Cookie.Attribute.Path */ ] === null) {
                    node.data["path" /* SDK.Cookie.Attribute.Path */ ] = '/';
                }
                if (node.data["expires" /* SDK.Cookie.Attribute.Expires */ ] === null) {
                    node.data["expires" /* SDK.Cookie.Attribute.Expires */ ] = expiresSessionValue();
                }
                if (node.data["partition-key" /* SDK.Cookie.Attribute.PartitionKey */ ] === null) {
                    node.data["partition-key" /* SDK.Cookie.Attribute.PartitionKey */ ] = '';
                }
            }
        },
        {
            key: "saveNode",
            value: function saveNode(node) {
                var _this = this;
                var oldCookie = node.cookie;
                var newCookie = this.createCookieFromData(node.data);
                node.cookie = newCookie;
                if (!this.saveCallback) {
                    return;
                }
                void this.saveCallback(newCookie, oldCookie).then(function(success) {
                    if (success) {
                        _this.refresh();
                    } else {
                        node.setDirty(true);
                    }
                });
            }
        },
        {
            key: "createCookieFromData",
            value: function createCookieFromData(data) {
                var cookie = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Cookie(data["name" /* SDK.Cookie.Attribute.Name */ ], data["value" /* SDK.Cookie.Attribute.Value */ ], null, data["priority" /* SDK.Cookie.Attribute.Priority */ ]);
                cookie.addAttribute("domain" /* SDK.Cookie.Attribute.Domain */ , data["domain" /* SDK.Cookie.Attribute.Domain */ ]);
                cookie.addAttribute("path" /* SDK.Cookie.Attribute.Path */ , data["path" /* SDK.Cookie.Attribute.Path */ ]);
                if (data.expires && data.expires !== expiresSessionValue()) {
                    cookie.addAttribute("expires" /* SDK.Cookie.Attribute.Expires */ , new Date(data["expires" /* SDK.Cookie.Attribute.Expires */ ]).toUTCString());
                }
                if (data["http-only" /* SDK.Cookie.Attribute.HttpOnly */ ]) {
                    cookie.addAttribute("http-only" /* SDK.Cookie.Attribute.HttpOnly */ );
                }
                if (data["secure" /* SDK.Cookie.Attribute.Secure */ ]) {
                    cookie.addAttribute("secure" /* SDK.Cookie.Attribute.Secure */ );
                }
                if (data["same-site" /* SDK.Cookie.Attribute.SameSite */ ]) {
                    cookie.addAttribute("same-site" /* SDK.Cookie.Attribute.SameSite */ , data["same-site" /* SDK.Cookie.Attribute.SameSite */ ]);
                }
                if ("source-scheme" /* SDK.Cookie.Attribute.SourceScheme */  in data) {
                    cookie.addAttribute("source-scheme" /* SDK.Cookie.Attribute.SourceScheme */ , data["source-scheme" /* SDK.Cookie.Attribute.SourceScheme */ ]);
                }
                if ("source-port" /* SDK.Cookie.Attribute.SourcePort */  in data) {
                    cookie.addAttribute("source-port" /* SDK.Cookie.Attribute.SourcePort */ , Number.parseInt(data["source-port" /* SDK.Cookie.Attribute.SourcePort */ ], 10) || undefined);
                }
                if (data["partition-key-site" /* SDK.Cookie.Attribute.PartitionKeySite */ ]) {
                    cookie.setPartitionKey(data["partition-key-site" /* SDK.Cookie.Attribute.PartitionKeySite */ ], Boolean(data["has-cross-site-ancestor" /* SDK.Cookie.Attribute.HasCrossSiteAncestor */ ] ? data["has-cross-site-ancestor" /* SDK.Cookie.Attribute.HasCrossSiteAncestor */ ] : false));
                }
                cookie.setSize(data["name" /* SDK.Cookie.Attribute.Name */ ].length + data["value" /* SDK.Cookie.Attribute.Value */ ].length);
                return cookie;
            }
        },
        {
            key: "isValidCookieData",
            value: function isValidCookieData(data) {
                return (Boolean(data.name) || Boolean(data.value)) && this.isValidDomain(data.domain) && this.isValidPath(data.path) && this.isValidDate(data.expires) && this.isValidPartitionKey(data.PartitionKeySite);
            }
        },
        {
            key: "isValidDomain",
            value: function isValidDomain(domain) {
                if (!domain) {
                    return true;
                }
                var parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString('http://' + domain);
                return parsedURL !== null && parsedURL.domain() === domain;
            }
        },
        {
            key: "isValidPath",
            value: function isValidPath(path) {
                var parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString('http://example.com' + path);
                return parsedURL !== null && parsedURL.path === path;
            }
        },
        {
            key: "isValidDate",
            value: function isValidDate(date) {
                return date === '' || date === expiresSessionValue() || !isNaN(Date.parse(date));
            }
        },
        {
            key: "isValidPartitionKey",
            value: function isValidPartitionKey(partitionKey) {
                if (!partitionKey) {
                    return true;
                }
                var parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(partitionKey);
                return parsedURL !== null;
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (this.refreshCallback) {
                    this.refreshCallback();
                }
            }
        },
        {
            key: "populateContextMenu",
            value: function populateContextMenu(contextMenu, gridNode) {
                var maybeCookie = gridNode.cookie;
                if (!maybeCookie) {
                    return;
                }
                var cookie = maybeCookie;
                contextMenu.revealSection().appendItem(i18nString(UIStrings.showRequestsWithThisCookie), function() {
                    var requestFilter = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_6__.UIFilter.UIRequestFilter.filters([
                        {
                            filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_6__.UIFilter.FilterType.CookieDomain,
                            filterValue: cookie.domain()
                        },
                        {
                            filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_6__.UIFilter.FilterType.CookieName,
                            filterValue: cookie.name()
                        }
                    ]);
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestFilter);
                }, {
                    jslogContext: 'show-requests-with-this-cookie'
                });
                if (_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.RelatedIssue.hasIssues(cookie)) {
                    contextMenu.revealSection().appendItem(i18nString(UIStrings.showIssueAssociatedWithThis), function() {
                        // TODO(chromium:1077719): Just filter for the cookie instead of revealing one of the associated issues.
                        void _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.RelatedIssue.reveal(cookie);
                    }, {
                        jslogContext: 'show-issue-associated-with-this'
                    });
                }
            }
        }
    ]);
    return CookiesTable;
}(_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox);
var DataGridNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(DataGridNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(DataGridNode);
    function DataGridNode(data, cookie, blockedReasons, exemptionReason) {
        _class_call_check(this, DataGridNode);
        var _this;
        _this = _super.call(this, data);
        _define_property(_assert_this_initialized(_this), "cookie", void 0);
        _define_property(_assert_this_initialized(_this), "blockedReasons", void 0);
        _define_property(_assert_this_initialized(_this), "exemptionReason", void 0);
        _define_property(_assert_this_initialized(_this), "expiresTooltip", void 0);
        _this.cookie = cookie;
        _this.blockedReasons = blockedReasons;
        _this.exemptionReason = exemptionReason;
        return _this;
    }
    _create_class(DataGridNode, [
        {
            key: "createCells",
            value: function createCells(element) {
                _get(_get_prototype_of(DataGridNode.prototype), "createCells", this).call(this, element);
                if (this.blockedReasons && this.blockedReasons.length) {
                    element.classList.add('flagged-cookie-attribute-row');
                }
            }
        },
        {
            key: "setExpiresTooltip",
            value: function setExpiresTooltip(tooltip) {
                this.expiresTooltip = tooltip;
            }
        },
        {
            key: "createCell",
            value: function createCell(columnId) {
                var _this = this;
                var _this_exemptionReason;
                var cell = _get(_get_prototype_of(DataGridNode.prototype), "createCell", this).call(this, columnId);
                if (columnId === "source-port" /* SDK.Cookie.Attribute.SourcePort */ ) {
                    _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.sourcePortTooltip));
                } else if (columnId === "source-scheme" /* SDK.Cookie.Attribute.SourceScheme */ ) {
                    _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.sourceSchemeTooltip));
                } else if (columnId === "expires" /* SDK.Cookie.Attribute.Expires */  && this.expiresTooltip) {
                    _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(cell, this.expiresTooltip);
                } else {
                    _legacy_js__WEBPACK_IMPORTED_MODULE_8__.Tooltip.Tooltip.install(cell, cell.textContent || '');
                }
                var blockedReasonString = '';
                if (this.blockedReasons) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.blockedReasons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var blockedReason = _step.value;
                            var attributeMatches = blockedReason.attribute === columnId;
                            var useNameColumn = !blockedReason.attribute && columnId === "name" /* SDK.Cookie.Attribute.Name */ ;
                            if (attributeMatches || useNameColumn) {
                                if (blockedReasonString) {
                                    blockedReasonString += '\n';
                                }
                                blockedReasonString += blockedReason.uiString;
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
                if (blockedReasonString) {
                    var infoElement = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
                    if (columnId === "name" /* SDK.Cookie.Attribute.Name */  && _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.RelatedIssue.hasThirdPartyPhaseoutCookieIssue(this.cookie)) {
                        infoElement.data = {
                            iconName: 'warning-filled',
                            color: 'var(--icon-warning)',
                            width: '14px',
                            height: '14px'
                        };
                        infoElement.onclick = function() {
                            return _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_5__.RelatedIssue.reveal(_this.cookie);
                        };
                        infoElement.style.cursor = 'pointer';
                    } else {
                        infoElement.data = {
                            iconName: 'info',
                            color: 'var(--icon-info)',
                            width: '14px',
                            height: '14px'
                        };
                        cell.classList.add('flagged-cookie-attribute-cell');
                    }
                    infoElement.title = blockedReasonString;
                    cell.insertBefore(infoElement, cell.firstChild);
                }
                if (((_this_exemptionReason = this.exemptionReason) === null || _this_exemptionReason === void 0 ? void 0 : _this_exemptionReason.uiString) && columnId === "name" /* SDK.Cookie.Attribute.Name */ ) {
                    var infoElement1 = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_7__.Icon.Icon();
                    infoElement1.data = {
                        iconName: 'info',
                        color: 'var(--icon-info)',
                        width: '14px',
                        height: '14px'
                    };
                    cell.classList.add('flagged-cookie-attribute-cell');
                    infoElement1.title = this.exemptionReason.uiString;
                    cell.insertBefore(infoElement1, cell.firstChild);
                }
                return cell;
            }
        }
    ]);
    return DataGridNode;
} //# sourceMappingURL=CookiesTable.js.map
(_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_9__.DataGrid.DataGridNode);


}),
"./ui/legacy/components/cookie_table/cookiesTable.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2019 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.cookies-table devtools-icon {\n  margin-right: 4px;\n}\n\n.cookies-table td.flagged-cookie-attribute-cell devtools-icon {\n  filter: grayscale();\n}\n\n.cookies-table tr.revealed.data-grid-data-grid-node.flagged-cookie-attribute-row:not(.selected):nth-child(odd) {\n  background-color: var(--sys-color-surface-yellow-high);\n}\n\n.cookies-table tr.revealed.data-grid-data-grid-node.flagged-cookie-attribute-row:not(.selected):nth-child(even) {\n  background-color: var(--sys-color-surface-yellow);\n}\n\n/*# sourceURL=cookiesTable.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);