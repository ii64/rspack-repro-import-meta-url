"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_PropertiesWidget_ts"],{

/***/ "./src/panels/elements/PropertiesWidget.ts":
/*!*************************************************!*\
  !*** ./src/panels/elements/PropertiesWidget.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PropertiesWidget: () => (/* binding */ PropertiesWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './propertiesWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2014 Google Inc. All rights reserved.
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









const OBJECT_GROUP_NAME = 'properties-sidebar-pane';
const UIStrings = {
    /**
     * @description Text on the checkbox in the Properties tab of the Elements panel, which controls whether
     * all properties of the currently selected DOM element are shown, or only meaningful properties (i.e.
     * excluding properties whose values aren't set for example).
     */
    showAll: 'Show all',
    /**
     * @description Tooltip on the checkbox in the Properties tab of the Elements panel, which controls whether
     * all properties of the currently selected DOM element are shown, or only meaningful properties (i.e.
     * excluding properties whose values aren't set for example).
     */
    showAllTooltip: 'When unchecked, only properties whose values are neither null nor undefined will be shown',
    /**
     * @description Text shown to the user when a filter is applied in the Properties tab of the Elements panel, but
     * no properties matched the filter and thus no results were returned.
     */
    noMatchingProperty: 'No matching property',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/elements/PropertiesWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class PropertiesWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.ThrottledWidget.ThrottledWidget {
    constructor(throttlingTimeout) {
        super(true /* isWebComponent */, throttlingTimeout);
        Object.defineProperty(this, "node", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showAllPropertiesSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterRegex", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: null
        });
        Object.defineProperty(this, "noMatchesElement", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeOutline", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "expandController", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "lastRequestedNode", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.showAllPropertiesSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-all-properties', false);
        this.showAllPropertiesSetting.addChangeListener(this.filterList.bind(this));
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.AttrModified, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.AttrRemoved, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.CharacterDataModified, this.onNodeChange, this, { scoped: true });
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.Events.ChildNodeCountUpdated, this.onNodeChange, this, { scoped: true });
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode, this.setNode, this);
        this.node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode);
        const hbox = this.contentElement.createChild('div', 'hbox properties-widget-toolbar');
        const toolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.Toolbar('styles-pane-toolbar', hbox);
        const filterInput = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarFilter(undefined, 1, 1, undefined, undefined, false);
        filterInput.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarInput.Event.TextChanged, this.onFilterChanged, this);
        toolbar.appendToolbarItem(filterInput);
        toolbar.appendToolbarItem(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.Toolbar.ToolbarSettingCheckbox(this.showAllPropertiesSetting, i18nString(UIStrings.showAllTooltip), i18nString(UIStrings.showAll)));
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_7__.pane('element-properties').track({ resize: true })}`);
        this.noMatchesElement = this.contentElement.createChild('div', 'gray-info-message hidden');
        this.noMatchesElement.textContent = i18nString(UIStrings.noMatchingProperty);
        this.treeOutline = new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeOutline({ readOnly: true });
        this.treeOutline.setShowSelectionOnKeyboardFocus(/* show */ true, /* preventTabOrder */ false);
        this.expandController =
            new _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertiesSectionsTreeExpandController(this.treeOutline);
        this.contentElement.appendChild(this.treeOutline.element);
        this.treeOutline.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_6__.TreeOutline.Events.ElementExpanded, () => {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.DOMPropertiesExpanded);
        });
        this.update();
    }
    onFilterChanged(event) {
        this.filterRegex = event.data ? new RegExp(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.escapeForRegExp(event.data), 'i') : null;
        this.filterList();
    }
    filterList() {
        let noMatches = true;
        for (const element of this.treeOutline.rootElement().children()) {
            const { property } = element;
            const hidden = !property?.match({
                includeNullOrUndefinedValues: this.showAllPropertiesSetting.get(),
                regex: this.filterRegex,
            });
            if (!hidden) {
                noMatches = false;
            }
            element.hidden = hidden;
        }
        this.noMatchesElement.classList.toggle('hidden', !noMatches);
    }
    setNode(event) {
        this.node = event.data;
        this.update();
    }
    async doUpdate() {
        if (this.lastRequestedNode) {
            this.lastRequestedNode.domModel().runtimeModel().releaseObjectGroup(OBJECT_GROUP_NAME);
            delete this.lastRequestedNode;
        }
        if (!this.node) {
            this.treeOutline.removeChildren();
            return;
        }
        this.lastRequestedNode = this.node;
        const object = await this.node.resolveToObject(OBJECT_GROUP_NAME);
        if (!object) {
            return;
        }
        const treeElement = this.treeOutline.rootElement();
        let { properties } = await _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.RemoteObject.RemoteObject.loadFromObjectPerProto(object, true /* generatePreview */);
        treeElement.removeChildren();
        if (properties === null) {
            properties = [];
        }
        _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_5__.ObjectPropertiesSection.ObjectPropertyTreeElement.populateWithProperties(treeElement, properties, null, true /* skipProto */, true /* skipGettersAndSetters */, object);
        this.filterList();
    }
    onNodeChange(event) {
        if (!this.node) {
            return;
        }
        const data = event.data;
        const node = (data instanceof _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_4__.DOMModel.DOMNode ? data : data.node);
        if (this.node !== node) {
            return;
        }
        this.update();
    }
    wasShown() {
        super.wasShown();
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './propertiesWidget.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}


/***/ })

}]);