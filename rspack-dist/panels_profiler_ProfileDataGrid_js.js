"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_profiler_ProfileDataGrid_js"], {
"./panels/profiler/ProfileDataGrid.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ProfileDataGridNode: function() { return ProfileDataGridNode; },
  ProfileDataGridTree: function() { return ProfileDataGridTree; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/components/data_grid/data_grid.js */ "./ui/legacy/components/data_grid/data_grid.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2009 280 North Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
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
     * @description This message is presented as a tooltip when developers investigate the performance
     * of a page. The tooltip alerts developers that some parts of code in execution were not optimized
     * (made to run faster) and that associated timing information must be considered with this in
     * mind. The placeholder text is the reason the code was not optimized.
     * @example {Optimized too many times} PH1
     */ notOptimizedS: 'Not optimized: {PH1}',
    /**
     *@description Generic text with two placeholders separated by a comma
     *@example {1 613 680} PH1
     *@example {44 %} PH2
     */ genericTextTwoPlaceholders: '{PH1}, {PH2}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/profiler/ProfileDataGrid.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var ProfileDataGridNode = /*#__PURE__*/ function(_DataGrid_DataGrid_DataGridNode) {
    "use strict";
    _inherits(ProfileDataGridNode, _DataGrid_DataGrid_DataGridNode);
    var _super = _create_super(ProfileDataGridNode);
    function ProfileDataGridNode(profileNode, owningTree, hasChildren) {
        _class_call_check(this, ProfileDataGridNode);
        var _this;
        _this = _super.call(this, null, hasChildren);
        _define_property(_assert_this_initialized(_this), "searchMatchedSelfColumn", void 0);
        _define_property(_assert_this_initialized(_this), "searchMatchedTotalColumn", void 0);
        _define_property(_assert_this_initialized(_this), "searchMatchedFunctionColumn", void 0);
        _define_property(_assert_this_initialized(_this), "profileNode", void 0);
        _define_property(_assert_this_initialized(_this), "tree", void 0);
        _define_property(_assert_this_initialized(_this), "childrenByCallUID", void 0);
        _define_property(_assert_this_initialized(_this), "lastComparator", void 0);
        _define_property(_assert_this_initialized(_this), "callUID", void 0);
        _define_property(_assert_this_initialized(_this), "self", void 0);
        _define_property(_assert_this_initialized(_this), "total", void 0);
        _define_property(_assert_this_initialized(_this), "functionName", void 0);
        _define_property(_assert_this_initialized(_this), "deoptReason", void 0);
        _define_property(_assert_this_initialized(_this), "url", void 0);
        _define_property(_assert_this_initialized(_this), "linkElement", void 0);
        _define_property(_assert_this_initialized(_this), "populated", void 0);
        _define_property(_assert_this_initialized(_this), "savedSelf", void 0);
        _define_property(_assert_this_initialized(_this), "savedTotal", void 0);
        _define_property(_assert_this_initialized(_this), "savedChildren", void 0);
        _this.searchMatchedSelfColumn = false;
        _this.searchMatchedTotalColumn = false;
        _this.searchMatchedFunctionColumn = false;
        _this.profileNode = profileNode;
        _this.tree = owningTree;
        _this.childrenByCallUID = new Map();
        _this.lastComparator = null;
        _this.callUID = profileNode.callUID;
        _this.self = profileNode.self;
        _this.total = profileNode.total;
        _this.functionName = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.beautifyFunctionName(profileNode.functionName);
        _this.deoptReason = profileNode.deoptReason || '';
        _this.url = profileNode.url;
        _this.linkElement = null;
        _this.populated = false;
        return _this;
    }
    _create_class(ProfileDataGridNode, [
        {
            key: "createCell",
            value: function createCell(columnId) {
                switch(columnId){
                    case 'self':
                        {
                            var cell = this.createValueCell(this.self, this.selfPercent, columnId);
                            cell.classList.toggle('highlight', this.searchMatchedSelfColumn);
                            return cell;
                        }
                    case 'total':
                        {
                            var cell1 = this.createValueCell(this.total, this.totalPercent, columnId);
                            cell1.classList.toggle('highlight', this.searchMatchedTotalColumn);
                            return cell1;
                        }
                    case 'function':
                        {
                            var cell2 = this.createTD(columnId);
                            cell2.classList.toggle('highlight', this.searchMatchedFunctionColumn);
                            if (this.deoptReason) {
                                cell2.classList.add('not-optimized');
                                var warningIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon();
                                warningIcon.data = {
                                    iconName: 'warning-filled',
                                    color: 'var(--icon-warning)',
                                    width: '14px',
                                    height: '14px'
                                };
                                warningIcon.classList.add('profile-warn-marker');
                                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(warningIcon, i18nString(UIStrings.notOptimizedS, {
                                    PH1: this.deoptReason
                                }));
                                cell2.appendChild(warningIcon);
                            }
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createTextChild(cell2, this.functionName);
                            if (this.profileNode.scriptId === '0') {
                                return cell2;
                            }
                            var urlElement = this.tree.formatter.linkifyNode(this);
                            if (!urlElement) {
                                return cell2;
                            }
                            urlElement.style.maxWidth = '75%';
                            cell2.appendChild(urlElement);
                            this.linkElement = urlElement;
                            return cell2;
                        }
                }
                return _get(_get_prototype_of(ProfileDataGridNode.prototype), "createCell", this).call(this, columnId);
            }
        },
        {
            key: "createValueCell",
            value: function createValueCell(value, percent, columnId) {
                var cell = document.createElement('td');
                cell.classList.add('numeric-column');
                var div = cell.createChild('div', 'profile-multiple-values');
                var valueSpan = div.createChild('span');
                var valueText = this.tree.formatter.formatValue(value, this);
                valueSpan.textContent = valueText;
                var percentSpan = div.createChild('span', 'percent-column');
                var percentText = this.tree.formatter.formatPercent(percent, this);
                percentSpan.textContent = percentText;
                var valueAccessibleText = this.tree.formatter.formatValueAccessibleText(value, this);
                this.setCellAccessibleName(i18nString(UIStrings.genericTextTwoPlaceholders, {
                    PH1: valueAccessibleText,
                    PH2: percentText
                }), cell, columnId);
                return cell;
            }
        },
        {
            key: "sort",
            value: function sort(comparator, force) {
                var sortComparator = comparator;
                return ProfileDataGridNode.sort([
                    [
                        this
                    ]
                ], sortComparator, force);
            }
        },
        {
            key: "insertChild",
            value: function insertChild(child, index) {
                var profileDataGridNode = child;
                _get(_get_prototype_of(ProfileDataGridNode.prototype), "insertChild", this).call(this, profileDataGridNode, index);
                this.childrenByCallUID.set(profileDataGridNode.callUID, profileDataGridNode);
            }
        },
        {
            key: "removeChild",
            value: function removeChild(profileDataGridNode) {
                _get(_get_prototype_of(ProfileDataGridNode.prototype), "removeChild", this).call(this, profileDataGridNode);
                this.childrenByCallUID.delete(profileDataGridNode.callUID);
            }
        },
        {
            key: "removeChildren",
            value: function removeChildren() {
                _get(_get_prototype_of(ProfileDataGridNode.prototype), "removeChildren", this).call(this);
                this.childrenByCallUID.clear();
            }
        },
        {
            key: "findChild",
            value: function findChild(node) {
                if (!node) {
                    return null;
                }
                return this.childrenByCallUID.get(node.callUID) || null;
            }
        },
        {
            key: "selfPercent",
            get: function get() {
                return this.self / this.tree.total * 100.0;
            }
        },
        {
            key: "totalPercent",
            get: function get() {
                return this.total / this.tree.total * 100.0;
            }
        },
        {
            key: "populate",
            value: function populate() {
                ProfileDataGridNode.populate(this);
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
            // Not implemented.
            }
        },
        {
            // When focusing and collapsing we modify lots of nodes in the tree.
            // This allows us to restore them all to their original state when we revert.
            key: "save",
            value: function save() {
                if (this.savedChildren) {
                    return;
                }
                this.savedSelf = this.self;
                this.savedTotal = this.total;
                this.savedChildren = this.children.slice();
            }
        },
        {
            /**
     * When focusing and collapsing we modify lots of nodes in the tree.
     * This allows us to restore them all to their original state when we revert.
     */ key: "restore",
            value: function restore() {
                if (!this.savedChildren) {
                    return;
                }
                if (this.savedSelf && this.savedTotal) {
                    this.self = this.savedSelf;
                    this.total = this.savedTotal;
                }
                this.removeChildren();
                var children = this.savedChildren;
                var count = children.length;
                for(var index = 0; index < count; ++index){
                    children[index].restore();
                    this.appendChild(children[index]);
                }
            }
        },
        {
            key: "merge",
            value: function merge(child, shouldAbsorb) {
                ProfileDataGridNode.merge(this, child, shouldAbsorb);
            }
        }
    ], [
        {
            key: "sort",
            value: function sort(gridNodeGroups, comparator, force) {
                for(var gridNodeGroupIndex = 0; gridNodeGroupIndex < gridNodeGroups.length; ++gridNodeGroupIndex){
                    var gridNodes = gridNodeGroups[gridNodeGroupIndex];
                    var count = gridNodes.length;
                    for(var index = 0; index < count; ++index){
                        var gridNode = gridNodes[index];
                        // If the grid node is collapsed, then don't sort children (save operation for later).
                        // If the grid node has the same sorting as previously, then there is no point in sorting it again.
                        if (!force && (!gridNode.expanded || gridNode.lastComparator === comparator)) {
                            if (gridNode.children.length) {
                                gridNode.shouldRefreshChildren = true;
                            }
                            continue;
                        }
                        gridNode.lastComparator = comparator;
                        var children = gridNode.children;
                        var childCount = children.length;
                        if (childCount) {
                            // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                            // @ts-expect-error
                            children.sort(comparator);
                            for(var childIndex = 0; childIndex < childCount; ++childIndex){
                                children[childIndex].recalculateSiblings(childIndex);
                            }
                            gridNodeGroups.push(children);
                        }
                    }
                }
            }
        },
        {
            key: "merge",
            value: function merge(container, child, shouldAbsorb) {
                container.self += child.self;
                if (!shouldAbsorb) {
                    container.total += child.total;
                }
                var children = container.children.slice();
                container.removeChildren();
                var count = children.length;
                for(var index = 0; index < count; ++index){
                    if (!shouldAbsorb || children[index] !== child) {
                        container.appendChild(children[index]);
                    }
                }
                children = child.children.slice();
                count = children.length;
                for(var index1 = 0; index1 < count; ++index1){
                    var orphanedChild = children[index1];
                    var existingChild = container.childrenByCallUID.get(orphanedChild.callUID);
                    if (existingChild) {
                        existingChild.merge(orphanedChild, false);
                    } else {
                        container.appendChild(orphanedChild);
                    }
                }
            }
        },
        {
            key: "populate",
            value: function populate(container) {
                if (container.populated) {
                    return;
                }
                container.populated = true;
                container.populateChildren();
                var currentComparator = container.tree.lastComparator;
                if (currentComparator) {
                    container.sort(currentComparator, true);
                }
            }
        }
    ]);
    return ProfileDataGridNode;
}(_ui_legacy_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_3__.DataGrid.DataGridNode);
var ProfileDataGridTree = /*#__PURE__*/ function() {
    "use strict";
    function ProfileDataGridTree(formatter, searchableView, total) {
        _class_call_check(this, ProfileDataGridTree);
        _define_property(this, "tree", void 0);
        _define_property(this, "self", void 0);
        _define_property(this, "children", void 0);
        _define_property(this, "formatter", void 0);
        _define_property(this, "searchableView", void 0);
        _define_property(this, "total", void 0);
        _define_property(this, "lastComparator", void 0);
        _define_property(this, "childrenByCallUID", void 0);
        _define_property(this, "deepSearch", void 0);
        _define_property(this, "populated", void 0);
        _define_property(this, "searchResults", void 0);
        _define_property(this, "savedTotal", void 0);
        _define_property(this, "savedChildren", void 0);
        _define_property(this, "searchResultIndex", -1);
        this.tree = this;
        this.self = 0;
        this.children = [];
        this.formatter = formatter;
        this.searchableView = searchableView;
        this.total = total;
        this.lastComparator = null;
        this.childrenByCallUID = new Map();
        this.deepSearch = true;
        this.populated = false;
    }
    _create_class(ProfileDataGridTree, [
        {
            key: "expanded",
            get: function get() {
                return true;
            }
        },
        {
            key: "appendChild",
            value: function appendChild(child) {
                this.insertChild(child, this.children.length);
            }
        },
        {
            key: "focus",
            value: function focus(_profileDataGridNode) {}
        },
        {
            key: "exclude",
            value: function exclude(_profileDataGridNode) {}
        },
        {
            key: "insertChild",
            value: function insertChild(child, index) {
                var childToInsert = child;
                this.children.splice(index, 0, childToInsert);
                this.childrenByCallUID.set(childToInsert.callUID, child);
            }
        },
        {
            key: "removeChildren",
            value: function removeChildren() {
                this.children = [];
                this.childrenByCallUID.clear();
            }
        },
        {
            key: "populateChildren",
            value: function populateChildren() {
            // Not implemented.
            }
        },
        {
            key: "findChild",
            value: function findChild(node) {
                if (!node) {
                    return null;
                }
                return this.childrenByCallUID.get(node.callUID) || null;
            }
        },
        {
            key: "sort",
            value: function sort(comparator, force) {
                // TODO(crbug.com/1172300) Ignored during the jsdoc to ts migration)
                // @ts-expect-error
                return ProfileDataGridNode.sort([
                    [
                        this
                    ]
                ], comparator, force);
            }
        },
        {
            key: "save",
            value: function save() {
                if (this.savedChildren) {
                    return;
                }
                this.savedTotal = this.total;
                this.savedChildren = this.children.slice();
            }
        },
        {
            key: "restore",
            value: function restore() {
                if (!this.savedChildren) {
                    return;
                }
                this.children = this.savedChildren;
                if (this.savedTotal) {
                    this.total = this.savedTotal;
                }
                var children = this.children;
                var count = children.length;
                for(var index = 0; index < count; ++index){
                    children[index].restore();
                }
                this.savedChildren = null;
            }
        },
        {
            key: "matchFunction",
            value: function matchFunction(searchConfig) {
                var query = searchConfig.query.trim();
                if (!query.length) {
                    return null;
                }
                var greaterThan = query.startsWith('>');
                var lessThan = query.startsWith('<');
                var equalTo = query.startsWith('=') || (greaterThan || lessThan) && query.indexOf('=') === 1;
                var percentUnits = query.endsWith('%');
                var millisecondsUnits = query.length > 2 && query.endsWith('ms');
                var secondsUnits = !millisecondsUnits && query.endsWith('s');
                var queryNumber = parseFloat(query);
                if (greaterThan || lessThan || equalTo) {
                    if (equalTo && (greaterThan || lessThan)) {
                        queryNumber = parseFloat(query.substring(2));
                    } else {
                        queryNumber = parseFloat(query.substring(1));
                    }
                }
                var queryNumberMilliseconds = secondsUnits ? queryNumber * 1000 : queryNumber;
                // Make equalTo implicitly true if it wasn't specified there is no other operator.
                if (!isNaN(queryNumber) && !(greaterThan || lessThan)) {
                    equalTo = true;
                }
                var matcher = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_1__.StringUtilities.createPlainTextSearchRegex(query, 'i');
                function matchesQuery(profileDataGridNode) {
                    profileDataGridNode.searchMatchedSelfColumn = false;
                    profileDataGridNode.searchMatchedTotalColumn = false;
                    profileDataGridNode.searchMatchedFunctionColumn = false;
                    if (percentUnits) {
                        if (lessThan) {
                            if (profileDataGridNode.selfPercent < queryNumber) {
                                profileDataGridNode.searchMatchedSelfColumn = true;
                            }
                            if (profileDataGridNode.totalPercent < queryNumber) {
                                profileDataGridNode.searchMatchedTotalColumn = true;
                            }
                        } else if (greaterThan) {
                            if (profileDataGridNode.selfPercent > queryNumber) {
                                profileDataGridNode.searchMatchedSelfColumn = true;
                            }
                            if (profileDataGridNode.totalPercent > queryNumber) {
                                profileDataGridNode.searchMatchedTotalColumn = true;
                            }
                        }
                        if (equalTo) {
                            if (profileDataGridNode.selfPercent === queryNumber) {
                                profileDataGridNode.searchMatchedSelfColumn = true;
                            }
                            if (profileDataGridNode.totalPercent === queryNumber) {
                                profileDataGridNode.searchMatchedTotalColumn = true;
                            }
                        }
                    } else if (millisecondsUnits || secondsUnits) {
                        if (lessThan) {
                            if (profileDataGridNode.self < queryNumberMilliseconds) {
                                profileDataGridNode.searchMatchedSelfColumn = true;
                            }
                            if (profileDataGridNode.total < queryNumberMilliseconds) {
                                profileDataGridNode.searchMatchedTotalColumn = true;
                            }
                        } else if (greaterThan) {
                            if (profileDataGridNode.self > queryNumberMilliseconds) {
                                profileDataGridNode.searchMatchedSelfColumn = true;
                            }
                            if (profileDataGridNode.total > queryNumberMilliseconds) {
                                profileDataGridNode.searchMatchedTotalColumn = true;
                            }
                        }
                        if (equalTo) {
                            if (profileDataGridNode.self === queryNumberMilliseconds) {
                                profileDataGridNode.searchMatchedSelfColumn = true;
                            }
                            if (profileDataGridNode.total === queryNumberMilliseconds) {
                                profileDataGridNode.searchMatchedTotalColumn = true;
                            }
                        }
                    }
                    if (profileDataGridNode.functionName.match(matcher) || profileDataGridNode.url && profileDataGridNode.url.match(matcher)) {
                        profileDataGridNode.searchMatchedFunctionColumn = true;
                    }
                    if (profileDataGridNode.searchMatchedSelfColumn || profileDataGridNode.searchMatchedTotalColumn || profileDataGridNode.searchMatchedFunctionColumn) {
                        profileDataGridNode.refresh();
                        return true;
                    }
                    return false;
                }
                return matchesQuery;
            }
        },
        {
            key: "performSearch",
            value: function performSearch(searchConfig, shouldJump, jumpBackwards) {
                this.onSearchCanceled();
                var matchesQuery = this.matchFunction(searchConfig);
                if (!matchesQuery) {
                    return;
                }
                this.searchResults = [];
                var deepSearch = this.deepSearch;
                var current;
                for(current = this.children[0]; current; current = current.traverseNextNode(!deepSearch, null, !deepSearch)){
                    var item = current;
                    if (!item) {
                        break;
                    }
                    if (matchesQuery(item)) {
                        this.searchResults.push({
                            profileNode: item
                        });
                    }
                }
                this.searchResultIndex = jumpBackwards ? 0 : this.searchResults.length - 1;
                this.searchableView.updateSearchMatchesCount(this.searchResults.length);
                this.searchableView.updateCurrentMatchIndex(this.searchResultIndex);
            }
        },
        {
            key: "onSearchCanceled",
            value: function onSearchCanceled() {
                if (this.searchResults) {
                    for(var i = 0; i < this.searchResults.length; ++i){
                        var profileNode = this.searchResults[i].profileNode;
                        profileNode.searchMatchedSelfColumn = false;
                        profileNode.searchMatchedTotalColumn = false;
                        profileNode.searchMatchedFunctionColumn = false;
                        profileNode.refresh();
                    }
                }
                this.searchResults = [];
                this.searchResultIndex = -1;
            }
        },
        {
            key: "jumpToNextSearchResult",
            value: function jumpToNextSearchResult() {
                if (!this.searchResults || !this.searchResults.length) {
                    return;
                }
                this.searchResultIndex = (this.searchResultIndex + 1) % this.searchResults.length;
                this.jumpToSearchResult(this.searchResultIndex);
            }
        },
        {
            key: "jumpToPreviousSearchResult",
            value: function jumpToPreviousSearchResult() {
                if (!this.searchResults || !this.searchResults.length) {
                    return;
                }
                this.searchResultIndex = (this.searchResultIndex - 1 + this.searchResults.length) % this.searchResults.length;
                this.jumpToSearchResult(this.searchResultIndex);
            }
        },
        {
            key: "supportsCaseSensitiveSearch",
            value: function supportsCaseSensitiveSearch() {
                return true;
            }
        },
        {
            key: "supportsRegexSearch",
            value: function supportsRegexSearch() {
                return false;
            }
        },
        {
            key: "jumpToSearchResult",
            value: function jumpToSearchResult(index) {
                var searchResult = this.searchResults[index];
                if (!searchResult) {
                    return;
                }
                var profileNode = searchResult.profileNode;
                profileNode.revealAndSelect();
                this.searchableView.updateCurrentMatchIndex(index);
            }
        }
    ], [
        {
            key: "propertyComparator",
            value: function propertyComparator(property, isAscending) {
                var comparator = propertyComparators[isAscending ? 1 : 0][property];
                if (!comparator) {
                    if (isAscending) {
                        comparator = function comparator(lhs, rhs) {
                            if (lhs[property] < rhs[property]) {
                                return -1;
                            }
                            if (lhs[property] > rhs[property]) {
                                return 1;
                            }
                            return 0;
                        };
                    } else {
                        comparator = function comparator(lhs, rhs) {
                            if (lhs[property] > rhs[property]) {
                                return -1;
                            }
                            if (lhs[property] < rhs[property]) {
                                return 1;
                            }
                            return 0;
                        };
                    }
                    propertyComparators[isAscending ? 1 : 0][property] = comparator;
                }
                return comparator;
            }
        }
    ]);
    return ProfileDataGridTree;
}();
var propertyComparators = [
    {},
    {}
]; //# sourceMappingURL=ProfileDataGrid.js.map


}),

}]);