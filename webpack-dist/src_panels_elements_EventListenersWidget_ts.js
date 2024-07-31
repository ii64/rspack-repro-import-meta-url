"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_elements_EventListenersWidget_ts"],{

/***/ "./src/panels/elements/EventListenersWidget.ts":
/*!*****************************************************!*\
  !*** ./src/panels/elements/EventListenersWidget.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionDelegate: () => (/* binding */ ActionDelegate),
/* harmony export */   DispatchFilterBy: () => (/* binding */ DispatchFilterBy),
/* harmony export */   EventListenersWidget: () => (/* binding */ EventListenersWidget)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../event_listeners/event_listeners.js */ "./src/panels/event_listeners/event_listeners.ts");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Copyright (C) 2007 Apple Inc.  All rights reserved.
 * Copyright (C) 2009 Joseph Pecoraro
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
     *@description Title of show framework listeners setting in event listeners widget of the elements panel
     */
    frameworkListeners: '`Framework` listeners',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Event Listeners Widget of the Elements panel
     */
    showListenersOnTheAncestors: 'Show listeners on the ancestors',
    /**
     *@description Alternative title text of a setting in Event Listeners Widget of the Elements panel
     */
    ancestors: 'Ancestors',
    /**
     *@description Title of dispatch filter in event listeners widget of the elements panel
     */
    eventListenersCategory: 'Event listeners category',
    /**
     *@description Text for everything
     */
    all: 'All',
    /**
     *@description Text in Event Listeners Widget of the Elements panel
     */
    passive: 'Passive',
    /**
     *@description Text in Event Listeners Widget of the Elements panel
     */
    blocking: 'Blocking',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Event Listeners Widget of the Elements panel
     */
    resolveEventListenersBoundWith: 'Resolve event listeners bound with framework',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/elements/EventListenersWidget.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
let eventListenersWidgetInstance;
class EventListenersWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.ThrottledWidget.ThrottledWidget {
    constructor() {
        super();
        Object.defineProperty(this, "toolbarItemsInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showForAncestorsSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dispatchFilterBySetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "showFrameworkListenersSetting", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "eventListenersView", {
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
        this.toolbarItemsInternal = [];
        this.showForAncestorsSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-event-listeners-for-ancestors');
        this.showForAncestorsSetting.addChangeListener(this.update.bind(this));
        this.dispatchFilterBySetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('event-listener-dispatch-filter-type', DispatchFilterBy.All);
        this.dispatchFilterBySetting.addChangeListener(this.update.bind(this));
        this.showFrameworkListenersSetting =
            _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('show-frameowkr-listeners', true);
        this.showFrameworkListenersSetting.setTitle(i18nString(UIStrings.frameworkListeners));
        this.showFrameworkListenersSetting.addChangeListener(this.showFrameworkListenersChanged.bind(this));
        this.eventListenersView = new _event_listeners_event_listeners_js__WEBPACK_IMPORTED_MODULE_5__.EventListenersView.EventListenersView(this.update.bind(this));
        this.eventListenersView.show(this.element);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.pane('elements.event-listeners').track({ resize: true })}`);
        this.toolbarItemsInternal.push(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Toolbar.createActionButtonForId('elements.refresh-event-listeners'));
        this.toolbarItemsInternal.push(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarSettingCheckbox(this.showForAncestorsSetting, i18nString(UIStrings.showListenersOnTheAncestors), i18nString(UIStrings.ancestors)));
        const dispatchFilter = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarComboBox(this.onDispatchFilterTypeChanged.bind(this), i18nString(UIStrings.eventListenersCategory));
        dispatchFilter.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.filterDropdown().track({ change: true })}`);
        function addDispatchFilterOption(name, value) {
            const option = dispatchFilter.createOption(name, value);
            if (value === this.dispatchFilterBySetting.get()) {
                dispatchFilter.select(option);
            }
        }
        addDispatchFilterOption.call(this, i18nString(UIStrings.all), DispatchFilterBy.All);
        addDispatchFilterOption.call(this, i18nString(UIStrings.passive), DispatchFilterBy.Passive);
        addDispatchFilterOption.call(this, i18nString(UIStrings.blocking), DispatchFilterBy.Blocking);
        dispatchFilter.setMaxWidth(200);
        this.toolbarItemsInternal.push(dispatchFilter);
        this.toolbarItemsInternal.push(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Toolbar.ToolbarSettingCheckbox(this.showFrameworkListenersSetting, i18nString(UIStrings.resolveEventListenersBoundWith)));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().addFlavorChangeListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode, this.update, this);
        this.update();
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!eventListenersWidgetInstance || forceNew) {
            eventListenersWidgetInstance = new EventListenersWidget();
        }
        return eventListenersWidgetInstance;
    }
    doUpdate() {
        if (this.lastRequestedNode) {
            this.lastRequestedNode.domModel().runtimeModel().releaseObjectGroup(objectGroupName);
            delete this.lastRequestedNode;
        }
        const node = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().flavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMModel.DOMNode);
        if (!node) {
            this.eventListenersView.reset();
            this.eventListenersView.addEmptyHolderIfNeeded();
            return Promise.resolve();
        }
        this.lastRequestedNode = node;
        const selectedNodeOnly = !this.showForAncestorsSetting.get();
        const promises = [];
        promises.push(node.resolveToObject(objectGroupName));
        if (!selectedNodeOnly) {
            let currentNode = node.parentNode;
            while (currentNode) {
                promises.push(currentNode.resolveToObject(objectGroupName));
                currentNode = currentNode.parentNode;
            }
            promises.push(this.windowObjectInNodeContext(node));
        }
        return Promise.all(promises)
            .then(this.eventListenersView.addObjects.bind(this.eventListenersView))
            .then(this.showFrameworkListenersChanged.bind(this));
    }
    wasShown() {
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(EventListenersWidget, this);
        super.wasShown();
    }
    willHide() {
        super.willHide();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_3__.Context.Context.instance().setFlavor(EventListenersWidget, null);
    }
    toolbarItems() {
        return this.toolbarItemsInternal;
    }
    onDispatchFilterTypeChanged(event) {
        const filter = event.target;
        this.dispatchFilterBySetting.set(filter.value);
    }
    showFrameworkListenersChanged() {
        const dispatchFilter = this.dispatchFilterBySetting.get();
        const showPassive = dispatchFilter === DispatchFilterBy.All || dispatchFilter === DispatchFilterBy.Passive;
        const showBlocking = dispatchFilter === DispatchFilterBy.All || dispatchFilter === DispatchFilterBy.Blocking;
        this.eventListenersView.showFrameworkListeners(this.showFrameworkListenersSetting.get(), showPassive, showBlocking);
    }
    windowObjectInNodeContext(node) {
        const executionContexts = node.domModel().runtimeModel().executionContexts();
        let context = executionContexts[0];
        if (node.frameId()) {
            for (let i = 0; i < executionContexts.length; ++i) {
                const executionContext = executionContexts[i];
                if (executionContext.frameId === node.frameId() && executionContext.isDefault) {
                    context = executionContext;
                }
            }
        }
        return context
            .evaluate({
            expression: 'self',
            objectGroup: objectGroupName,
            includeCommandLineAPI: false,
            silent: true,
            returnByValue: false,
            generatePreview: false,
        }, 
        /* userGesture */ false, 
        /* awaitPromise */ false)
            .then(result => {
            if ('object' in result) {
                return result.object;
            }
            return null;
        });
    }
    eventListenersArrivedForTest() {
    }
}
const DispatchFilterBy = {
    All: 'All',
    Blocking: 'Blocking',
    Passive: 'Passive',
};
const objectGroupName = 'event-listeners-panel';
class ActionDelegate {
    handleAction(_context, actionId) {
        switch (actionId) {
            case 'elements.refresh-event-listeners': {
                EventListenersWidget.instance().update();
                return true;
            }
        }
        return false;
    }
}


/***/ }),

/***/ "./src/panels/event_listeners/event_listeners.ts":
/*!*******************************************************!*\
  !*** ./src/panels/event_listeners/event_listeners.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenersUtils: () => (/* reexport module object */ _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   EventListenersView: () => (/* reexport module object */ _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListenersUtils.js */ "./src/panels/event_listeners/EventListenersUtils.ts");
/* harmony import */ var _EventListenersView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventListenersView.js */ "./src/panels/event_listeners/EventListenersView.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);