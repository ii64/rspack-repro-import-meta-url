"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_cookie_table_CookiesTable_ts"],{

/***/ "./src/ui/legacy/components/cookie_table/CookiesTable.ts":
/*!***************************************************************!*\
  !*** ./src/ui/legacy/components/cookie_table/CookiesTable.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookiesTable: () => (/* binding */ CookiesTable),
/* harmony export */   DataGridNode: () => (/* binding */ DataGridNode)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_root_root_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/root/root.js */ "./src/core/root/root.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../generated/protocol.js */ "./src/generated/protocol.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../panels/network/forward/forward.js */ "./src/panels/network/forward/forward.ts");
/* harmony import */ var _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data_grid/data_grid.js */ "./src/ui/legacy/components/data_grid/data_grid.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './cookiesTable.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
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
 */












const UIStrings = {
    /**
     *@description Cookie table cookies table expires session value in Cookies Table of the Cookies table in the Application panel
     */
    session: 'Session',
    /**
     *@description Text for the name of something
     */
    name: 'Name',
    /**
     *@description Text for the value of something
     */
    value: 'Value',
    /**
     *@description Text for the size of something
     */
    size: 'Size',
    /**
     *@description Data grid name for Editable Cookies data grid
     */
    editableCookies: 'Editable Cookies',
    /**
     *@description Text for web cookies
     */
    cookies: 'Cookies',
    /**
     *@description Text for something not available
     */
    na: 'N/A',
    /**
     *@description Text for Context Menu entry
     */
    showRequestsWithThisCookie: 'Show Requests With This Cookie',
    /**
     *@description Text for Context Menu entry
     */
    showIssueAssociatedWithThis: 'Show issue associated with this cookie',
    /**
     *@description Tooltip for the cell that shows the sourcePort property of a cookie in the cookie table. The source port is numberic attribute of a cookie.
     */
    sourcePortTooltip: 'Shows the source port (range 1-65535) the cookie was set on. If the port is unknown, this shows -1.',
    /**
     *@description Tooltip for the cell that shows the sourceScheme property of a cookie in the cookie table. The source scheme is a trinary attribute of a cookie.
     */
    sourceSchemeTooltip: 'Shows the source scheme (`Secure`, `NonSecure`) the cookie was set on. If the scheme is unknown, this shows `Unset`.',
    /**
     * @description Text for the date column displayed if the expiration time of the cookie is extremely far out in the future.
     * @example {+275760-09-13T00:00:00.000Z} date
     */
    timeAfter: 'after {date}',
    /**
     * @description Tooltip for the date column displayed if the expiration time of the cookie is extremely far out in the future.
     * @example {+275760-09-13T00:00:00.000Z} date
     * @example {9001628746521180} seconds
     */
    timeAfterTooltip: 'The expiration timestamp is {seconds}, which corresponds to a date after {date}',
    /**
     * @description Text to be show in the Partition Key column in case it is an opaque origin.
     */
    opaquePartitionKey: '(opaque)',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('ui/legacy/components/cookie_table/CookiesTable.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
const expiresSessionValue = i18nLazyString(UIStrings.session);
class CookiesTable extends _legacy_js__WEBPACK_IMPORTED_MODULE_9__.Widget.VBox {
    constructor(renderInline, saveCallback, refreshCallback, selectedCallback, deleteCallback) {
        super();
        Object.defineProperty(this, "saveCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "refreshCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "deleteCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataGrid", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastEditedColumnId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "data", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieDomain", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieToBlockedReasons", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookieToExemptionReason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.classList.add('cookies-table');
        this.saveCallback = saveCallback;
        this.refreshCallback = refreshCallback;
        this.deleteCallback = deleteCallback;
        const editable = Boolean(saveCallback);
        const columns = [
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name,
                title: i18nString(UIStrings.name),
                sortable: true,
                disclosure: editable,
                sort: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Order.Ascending,
                longText: true,
                weight: 24,
                editable: editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value,
                title: i18nString(UIStrings.value),
                sortable: true,
                longText: true,
                weight: 34,
                editable: editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain,
                title: 'Domain',
                sortable: true,
                weight: 7,
                editable: editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path,
                title: 'Path',
                sortable: true,
                weight: 7,
                editable: editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires,
                title: 'Expires / Max-Age',
                sortable: true,
                weight: 7,
                editable: editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Size,
                title: i18nString(UIStrings.size),
                sortable: true,
                align: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Align.Right,
                weight: 7,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HttpOnly,
                title: 'HttpOnly',
                sortable: true,
                align: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Align.Center,
                weight: 7,
                dataType: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.DataType.Boolean,
                editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Secure,
                title: 'Secure',
                sortable: true,
                align: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Align.Center,
                weight: 7,
                dataType: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.DataType.Boolean,
                editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SameSite,
                title: 'SameSite',
                sortable: true,
                weight: 7,
                editable: editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.PartitionKeySite,
                title: 'Partition Key Site',
                sortable: true,
                weight: 7,
                editable: editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HasCrossSiteAncestor,
                title: 'Cross Site',
                sortable: true,
                align: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Align.Center,
                weight: 7,
                dataType: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.DataType.Boolean,
                editable,
            },
            {
                id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Priority,
                title: 'Priority',
                sortable: true,
                weight: 7,
                editable: editable,
            },
        ];
        if (_core_root_root_js__WEBPACK_IMPORTED_MODULE_3__.Runtime.experiments.isEnabled('experimental-cookie-features')) {
            const additionalColumns = [
                {
                    id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme,
                    title: 'SourceScheme',
                    sortable: true,
                    align: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Align.Center,
                    weight: 7,
                    editable: editable,
                },
                {
                    id: _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort,
                    title: 'SourcePort',
                    sortable: true,
                    align: _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Align.Center,
                    weight: 7,
                    editable: editable,
                },
            ];
            columns.push(...additionalColumns);
        }
        if (editable) {
            this.dataGrid = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.DataGridImpl({
                displayName: i18nString(UIStrings.editableCookies),
                columns,
                editCallback: this.onUpdateCookie.bind(this),
                deleteCallback: this.onDeleteCookie.bind(this),
                refreshCallback,
            });
        }
        else {
            this.dataGrid = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.DataGridImpl({
                displayName: i18nString(UIStrings.cookies),
                columns,
                editCallback: undefined,
                deleteCallback: undefined,
                refreshCallback: undefined,
            });
        }
        this.dataGrid.setStriped(true);
        this.dataGrid.setName('cookies-table');
        this.dataGrid.addEventListener(_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Events.SortingChanged, this.rebuildTable, this);
        this.dataGrid.setRowContextMenuCallback(this.populateContextMenu.bind(this));
        if (renderInline) {
            this.dataGrid.renderInline();
        }
        if (selectedCallback) {
            this.dataGrid.addEventListener(_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.Events.SelectedNode, selectedCallback, this);
        }
        this.lastEditedColumnId = null;
        this.dataGrid.asWidget().show(this.element);
        this.data = [];
        this.cookieDomain = '';
        this.cookieToBlockedReasons = null;
        this.cookieToExemptionReason = null;
    }
    wasShown() {
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './cookiesTable.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
    setCookies(cookies, cookieToBlockedReasons, cookieToExemptionReason) {
        this.setCookieFolders([{ cookies: cookies, folderName: null }], cookieToBlockedReasons, cookieToExemptionReason);
    }
    setCookieFolders(cookieFolders, cookieToBlockedReasons, cookieToExemptionReason) {
        this.data = cookieFolders;
        this.cookieToBlockedReasons = cookieToBlockedReasons || null;
        this.cookieToExemptionReason = cookieToExemptionReason || null;
        this.rebuildTable();
    }
    setCookieDomain(cookieDomain) {
        this.cookieDomain = cookieDomain;
    }
    selectedCookie() {
        const node = this.dataGrid.selectedNode;
        return node ? node.cookie : null;
    }
    getSelectionCookies() {
        const node = this.dataGrid.selectedNode;
        const nextNeighbor = node && node.traverseNextNode(true);
        const previousNeighbor = node && node.traversePreviousNode(true);
        return {
            current: node && node.cookie,
            neighbor: (nextNeighbor && nextNeighbor.cookie) || (previousNeighbor && previousNeighbor.cookie),
        };
    }
    willHide() {
        this.lastEditedColumnId = null;
    }
    findSelectedCookie(selectionCookies, cookies) {
        if (!cookies) {
            return null;
        }
        const current = selectionCookies.current;
        const foundCurrent = cookies.find(cookie => this.isSameCookie(cookie, current));
        if (foundCurrent) {
            return foundCurrent;
        }
        const neighbor = selectionCookies.neighbor;
        const foundNeighbor = cookies.find(cookie => this.isSameCookie(cookie, neighbor));
        if (foundNeighbor) {
            return foundNeighbor;
        }
        return null;
    }
    isSameCookie(cookieA, cookieB) {
        return cookieB !== null && cookieB !== undefined && cookieB.name() === cookieA.name() &&
            cookieB.domain() === cookieA.domain() && cookieB.path() === cookieA.path();
    }
    rebuildTable() {
        const restoreFocus = this.dataGrid.element?.contains(document.activeElement);
        const selectionCookies = this.getSelectionCookies();
        const lastEditedColumnId = this.lastEditedColumnId;
        this.lastEditedColumnId = null;
        this.dataGrid.rootNode().removeChildren();
        for (let i = 0; i < this.data.length; ++i) {
            const item = this.data[i];
            const selectedCookie = this.findSelectedCookie(selectionCookies, item.cookies);
            if (item.folderName) {
                const groupData = {};
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name] = item.folderName;
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Size] = this.totalSize(item.cookies);
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HttpOnly] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Secure] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SameSite] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme] = '';
                groupData[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Priority] = '';
                const groupNode = new _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.DataGridNode(groupData);
                groupNode.selectable = true;
                this.dataGrid.rootNode().appendChild(groupNode);
                groupNode.element().classList.add('row-group');
                this.populateNode(groupNode, item.cookies, selectedCookie, lastEditedColumnId);
                groupNode.expand();
            }
            else {
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
    populateNode(parentNode, cookies, selectedCookie, lastEditedColumnId) {
        parentNode.removeChildren();
        if (!cookies) {
            return;
        }
        this.sortCookies(cookies);
        for (let i = 0; i < cookies.length; ++i) {
            const cookie = cookies[i];
            const cookieNode = this.createGridNode(cookie);
            parentNode.appendChild(cookieNode);
            if (this.isSameCookie(cookie, selectedCookie)) {
                cookieNode.select();
                if (lastEditedColumnId !== null) {
                    this.dataGrid.startEditingNextEditableColumnOfDataGridNode(cookieNode, lastEditedColumnId);
                }
            }
        }
    }
    addInactiveNode(parentNode, cookie, editedColumnId) {
        const cookieNode = this.createGridNode(cookie);
        parentNode.appendChild(cookieNode);
        cookieNode.select();
        cookieNode.setInactive(true);
        if (editedColumnId !== null) {
            this.dataGrid.startEditingNextEditableColumnOfDataGridNode(cookieNode, editedColumnId);
        }
    }
    totalSize(cookies) {
        let totalSize = 0;
        for (let i = 0; cookies && i < cookies.length; ++i) {
            totalSize += cookies[i].size();
        }
        return totalSize;
    }
    sortCookies(cookies) {
        const sortDirection = this.dataGrid.isSortOrderAscending() ? 1 : -1;
        function getValue(cookie, property) {
            switch (property) {
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name:
                    return String(cookie.name());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value:
                    return String(cookie.value());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain:
                    return String(cookie.domain());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path:
                    return String(cookie.path());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HttpOnly:
                    return String(cookie.httpOnly());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Secure:
                    return String(cookie.secure());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SameSite:
                    return String(cookie.sameSite());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.PartitionKeySite:
                    return cookie.partitionKeyOpaque() ? i18nString(UIStrings.opaquePartitionKey) : String(cookie.topLevelSite());
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HasCrossSiteAncestor:
                    return String(cookie.partitioned() ? cookie.hasCrossSiteAncestor() : false);
                case _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme:
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
            const priorities = [
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Network.CookiePriority.Low,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Network.CookiePriority.Medium,
                _generated_protocol_js__WEBPACK_IMPORTED_MODULE_5__.Network.CookiePriority.High,
            ];
            const priority1 = priorities.indexOf(cookie1.priority());
            const priority2 = priorities.indexOf(cookie2.priority());
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
        let comparator;
        const columnId = this.dataGrid.sortColumnId() || _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name;
        if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires) {
            comparator = expiresCompare;
        }
        else if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Size) {
            comparator = numberCompare.bind(null, c => c.size());
        }
        else if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort) {
            comparator = numberCompare.bind(null, c => c.sourcePort());
        }
        else if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Priority) {
            comparator = priorityCompare;
        }
        else {
            comparator = compareTo.bind(null, columnId);
        }
        cookies.sort(comparator);
    }
    createGridNode(cookie) {
        const data = {};
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name] = cookie.name();
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value] = cookie.value();
        if (cookie.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Type.Request) {
            data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain] = cookie.domain() ? cookie.domain() : i18nString(UIStrings.na);
            data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path] = cookie.path() ? cookie.path() : i18nString(UIStrings.na);
        }
        else {
            data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain] = cookie.domain() || '';
            data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path] = cookie.path() || '';
        }
        let expiresTooltip = undefined;
        if (cookie.maxAge()) {
            data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.TimeUtilities.secondsToString(Math.floor(cookie.maxAge()));
        }
        else if (cookie.expires()) {
            const expires = cookie.expires();
            if (expires < 0) {
                data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] = expiresSessionValue();
            }
            else {
                // See https://tc39.es/ecma262/#sec-time-values-and-time-range
                const maxTimestamp = 8640000000000000;
                if (expires > maxTimestamp) {
                    const date = new Date(maxTimestamp).toISOString();
                    data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] = i18nString(UIStrings.timeAfter, { date });
                    expiresTooltip = i18nString(UIStrings.timeAfterTooltip, { seconds: expires, date });
                }
                else {
                    data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] = new Date(expires).toISOString();
                }
            }
        }
        else {
            data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] =
                cookie.type() === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Type.Request ? i18nString(UIStrings.na) : expiresSessionValue();
        }
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Size] = cookie.size();
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HttpOnly] = cookie.httpOnly();
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Secure] = cookie.secure();
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SameSite] = cookie.sameSite() || '';
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort] = cookie.sourcePort();
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme] = cookie.sourceScheme();
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Priority] = cookie.priority() || '';
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.PartitionKeySite] = cookie.topLevelSite();
        data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HasCrossSiteAncestor] = cookie.hasCrossSiteAncestor() ? 'true' : '';
        const blockedReasons = this.cookieToBlockedReasons?.get(cookie);
        const exemptionReason = this.cookieToExemptionReason?.get(cookie);
        const node = new DataGridNode(data, cookie, blockedReasons || null, exemptionReason || null);
        if (expiresTooltip) {
            node.setExpiresTooltip(expiresTooltip);
        }
        node.selectable = true;
        return node;
    }
    onDeleteCookie(node) {
        if (node.cookie && this.deleteCallback) {
            this.deleteCallback(node.cookie, () => this.refresh());
        }
    }
    onUpdateCookie(editingNode, columnIdentifier, _oldText, _newText) {
        this.lastEditedColumnId = columnIdentifier;
        this.setDefaults(editingNode);
        if (this.isValidCookieData(editingNode.data)) {
            this.saveNode(editingNode);
        }
        else {
            editingNode.setDirty(true);
        }
    }
    setDefaults(node) {
        if (node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name] === null) {
            node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name] = '';
        }
        if (node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value] === null) {
            node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value] = '';
        }
        if (node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain] === null) {
            node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain] = this.cookieDomain;
        }
        if (node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path] === null) {
            node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path] = '/';
        }
        if (node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] === null) {
            node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires] = expiresSessionValue();
        }
        if (node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.PartitionKey] === null) {
            node.data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.PartitionKey] = '';
        }
    }
    saveNode(node) {
        const oldCookie = node.cookie;
        const newCookie = this.createCookieFromData(node.data);
        node.cookie = newCookie;
        if (!this.saveCallback) {
            return;
        }
        void this.saveCallback(newCookie, oldCookie).then(success => {
            if (success) {
                this.refresh();
            }
            else {
                node.setDirty(true);
            }
        });
    }
    createCookieFromData(data) {
        const cookie = new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Cookie(data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name], data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value], null, data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Priority]);
        cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain, data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Domain]);
        cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path, data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Path]);
        if (data.expires && data.expires !== expiresSessionValue()) {
            cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires, (new Date(data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires])).toUTCString());
        }
        if (data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HttpOnly]) {
            cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HttpOnly);
        }
        if (data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Secure]) {
            cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Secure);
        }
        if (data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SameSite]) {
            cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SameSite, data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SameSite]);
        }
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme in data) {
            cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme, data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme]);
        }
        if (_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort in data) {
            cookie.addAttribute(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort, Number.parseInt(data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort], 10) || undefined);
        }
        if (data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.PartitionKeySite]) {
            cookie.setPartitionKey(data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.PartitionKeySite], Boolean(data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HasCrossSiteAncestor] ? data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.HasCrossSiteAncestor] :
                false));
        }
        cookie.setSize(data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name].length + data[_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Value].length);
        return cookie;
    }
    isValidCookieData(data) {
        return (Boolean(data.name) || Boolean(data.value)) && this.isValidDomain(data.domain) &&
            this.isValidPath(data.path) && this.isValidDate(data.expires) &&
            this.isValidPartitionKey(data.PartitionKeySite);
    }
    isValidDomain(domain) {
        if (!domain) {
            return true;
        }
        const parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString('http://' + domain);
        return parsedURL !== null && parsedURL.domain() === domain;
    }
    isValidPath(path) {
        const parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString('http://example.com' + path);
        return parsedURL !== null && parsedURL.path === path;
    }
    isValidDate(date) {
        return date === '' || date === expiresSessionValue() || !isNaN(Date.parse(date));
    }
    isValidPartitionKey(partitionKey) {
        if (!partitionKey) {
            return true;
        }
        const parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(partitionKey);
        return parsedURL !== null;
    }
    refresh() {
        if (this.refreshCallback) {
            this.refreshCallback();
        }
    }
    populateContextMenu(contextMenu, gridNode) {
        const maybeCookie = gridNode.cookie;
        if (!maybeCookie) {
            return;
        }
        const cookie = maybeCookie;
        contextMenu.revealSection().appendItem(i18nString(UIStrings.showRequestsWithThisCookie), () => {
            const requestFilter = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIFilter.UIRequestFilter.filters([
                {
                    filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIFilter.FilterType.CookieDomain,
                    filterValue: cookie.domain(),
                },
                {
                    filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_7__.UIFilter.FilterType.CookieName,
                    filterValue: cookie.name(),
                },
            ]);
            void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestFilter);
        }, { jslogContext: 'show-requests-with-this-cookie' });
        if (_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.RelatedIssue.hasIssues(cookie)) {
            contextMenu.revealSection().appendItem(i18nString(UIStrings.showIssueAssociatedWithThis), () => {
                // TODO(chromium:1077719): Just filter for the cookie instead of revealing one of the associated issues.
                void _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.RelatedIssue.reveal(cookie);
            }, { jslogContext: 'show-issue-associated-with-this' });
        }
    }
}
class DataGridNode extends _data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_10__.DataGrid.DataGridNode {
    constructor(data, cookie, blockedReasons, exemptionReason) {
        super(data);
        Object.defineProperty(this, "cookie", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "blockedReasons", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "exemptionReason", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expiresTooltip", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.cookie = cookie;
        this.blockedReasons = blockedReasons;
        this.exemptionReason = exemptionReason;
    }
    createCells(element) {
        super.createCells(element);
        if (this.blockedReasons && this.blockedReasons.length) {
            element.classList.add('flagged-cookie-attribute-row');
        }
    }
    setExpiresTooltip(tooltip) {
        this.expiresTooltip = tooltip;
    }
    createCell(columnId) {
        const cell = super.createCell(columnId);
        if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourcePort) {
            _legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.sourcePortTooltip));
        }
        else if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.SourceScheme) {
            _legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(cell, i18nString(UIStrings.sourceSchemeTooltip));
        }
        else if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Expires && this.expiresTooltip) {
            _legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(cell, this.expiresTooltip);
        }
        else {
            _legacy_js__WEBPACK_IMPORTED_MODULE_9__.Tooltip.Tooltip.install(cell, cell.textContent || '');
        }
        let blockedReasonString = '';
        if (this.blockedReasons) {
            for (const blockedReason of this.blockedReasons) {
                const attributeMatches = blockedReason.attribute === columnId;
                const useNameColumn = !blockedReason.attribute && columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name;
                if (attributeMatches || useNameColumn) {
                    if (blockedReasonString) {
                        blockedReasonString += '\n';
                    }
                    blockedReasonString += blockedReason.uiString;
                }
            }
        }
        if (blockedReasonString) {
            const infoElement = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
            if (columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name &&
                _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.RelatedIssue.hasThirdPartyPhaseoutCookieIssue(this.cookie)) {
                infoElement.data = { iconName: 'warning-filled', color: 'var(--icon-warning)', width: '14px', height: '14px' };
                infoElement.onclick = () => _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_6__.RelatedIssue.reveal(this.cookie);
                infoElement.style.cursor = 'pointer';
            }
            else {
                infoElement.data = { iconName: 'info', color: 'var(--icon-info)', width: '14px', height: '14px' };
                cell.classList.add('flagged-cookie-attribute-cell');
            }
            infoElement.title = blockedReasonString;
            cell.insertBefore(infoElement, cell.firstChild);
        }
        if (this.exemptionReason?.uiString && columnId === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.Cookie.Attribute.Name) {
            const infoElement = new _components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_8__.Icon.Icon();
            infoElement.data = { iconName: 'info', color: 'var(--icon-info)', width: '14px', height: '14px' };
            cell.classList.add('flagged-cookie-attribute-cell');
            infoElement.title = this.exemptionReason.uiString;
            cell.insertBefore(infoElement, cell.firstChild);
        }
        return cell;
    }
}


/***/ })

}]);