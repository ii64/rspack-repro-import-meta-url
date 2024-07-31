"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_event_listeners_EventListenersView_ts"],{

/***/ "./src/panels/event_listeners/EventListenersView.ts":
/*!**********************************************************!*\
  !*** ./src/panels/event_listeners/EventListenersView.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenersTreeElement: () => (/* binding */ EventListenersTreeElement),
/* harmony export */   EventListenersView: () => (/* binding */ EventListenersView),
/* harmony export */   ObjectEventListenerBar: () => (/* binding */ ObjectEventListenerBar)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./src/ui/legacy/components/utils/utils.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EventListenersUtils.js */ "./src/panels/event_listeners/EventListenersUtils.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './eventListenersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/* eslint-disable rulesdir/es_modules_import */






const UIStrings = {
    /**
     *@description Empty holder text content in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */
    noEventListeners: 'No event listeners',
    /**
     *@description Delete button title in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */
    deleteEventListener: 'Delete event listener',
    /**
     *@description Passive button text content in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */
    togglePassive: 'Toggle Passive',
    /**
     *@description Passive button title in Event Listeners View of the Event Listener Debugging pane in the Sources panel
     */
    toggleWhetherEventListenerIs: 'Toggle whether event listener is passive or blocking',
    /**
     *@description A context menu item to reveal a node in the DOM tree of the Elements Panel
     */
    revealInElementsPanel: 'Reveal in Elements panel',
    /**
     *@description Text in Event Listeners Widget of the Elements panel
     */
    passive: 'Passive',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/event_listeners/EventListenersView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class EventListenersView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Widget.VBox {
    constructor(changeCallback, enableDefaultTreeFocus = false) {
        super();
        Object.defineProperty(this, "changeCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "enableDefaultTreeFocus", {
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
        Object.defineProperty(this, "emptyHolder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "linkifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "treeItemMap", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.changeCallback = changeCallback;
        this.enableDefaultTreeFocus = enableDefaultTreeFocus;
        this.treeOutline = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeOutlineInShadow();
        this.treeOutline.setComparator(EventListenersTreeElement.comparator);
        this.treeOutline.element.classList.add('monospace');
        this.treeOutline.setShowSelectionOnKeyboardFocus(true);
        this.treeOutline.setFocusable(true);
        this.element.appendChild(this.treeOutline.element);
        this.emptyHolder = document.createElement('div');
        this.emptyHolder.classList.add('gray-info-message');
        this.emptyHolder.textContent = i18nString(UIStrings.noEventListeners);
        this.emptyHolder.tabIndex = -1;
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_6__.Linkifier.Linkifier();
        this.treeItemMap = new Map();
    }
    focus() {
        if (!this.enableDefaultTreeFocus) {
            return;
        }
        if (!this.emptyHolder.parentNode) {
            this.treeOutline.forceSelect();
        }
        else {
            this.emptyHolder.focus();
        }
    }
    async addObjects(objects) {
        this.reset();
        await Promise.all(objects.map(obj => obj ? this.addObject(obj) : Promise.resolve()));
        this.addEmptyHolderIfNeeded();
        this.eventListenersArrivedForTest();
    }
    addObject(object) {
        let eventListeners;
        let frameworkEventListenersObject = null;
        const promises = [];
        const domDebuggerModel = object.runtimeModel().target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
        // TODO(kozyatinskiy): figure out how this should work for |window| when there is no DOMDebugger.
        if (domDebuggerModel) {
            promises.push(domDebuggerModel.eventListeners(object).then(storeEventListeners));
        }
        promises.push((0,_EventListenersUtils_js__WEBPACK_IMPORTED_MODULE_9__.frameworkEventListeners)(object).then(storeFrameworkEventListenersObject));
        return Promise.all(promises).then(markInternalEventListeners).then(addEventListeners.bind(this));
        function storeEventListeners(result) {
            eventListeners = result;
        }
        function storeFrameworkEventListenersObject(result) {
            frameworkEventListenersObject = result;
        }
        async function markInternalEventListeners() {
            if (!frameworkEventListenersObject) {
                return;
            }
            if (!frameworkEventListenersObject.internalHandlers) {
                return;
            }
            return frameworkEventListenersObject.internalHandlers.object()
                .callFunctionJSON(isInternalEventListener, eventListeners.map(handlerArgument))
                .then(setIsInternal);
            function handlerArgument(listener) {
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObject.toCallArgument(listener.handler());
            }
            function isInternalEventListener() {
                const isInternal = [];
                const internalHandlersSet = new Set(this);
                for (const handler of arguments) {
                    isInternal.push(internalHandlersSet.has(handler));
                }
                return isInternal;
            }
            function setIsInternal(isInternal) {
                for (let i = 0; i < eventListeners.length; ++i) {
                    if (isInternal[i]) {
                        eventListeners[i].markAsFramework();
                    }
                }
            }
        }
        function addEventListeners() {
            this.addObjectEventListeners(object, eventListeners);
            if (frameworkEventListenersObject) {
                this.addObjectEventListeners(object, frameworkEventListenersObject.eventListeners);
            }
        }
    }
    addObjectEventListeners(object, eventListeners) {
        if (!eventListeners) {
            return;
        }
        for (const eventListener of eventListeners) {
            const treeItem = this.getOrCreateTreeElementForType(eventListener.type());
            treeItem.addObjectEventListener(eventListener, object);
        }
    }
    showFrameworkListeners(showFramework, showPassive, showBlocking) {
        const eventTypes = this.treeOutline.rootElement().children();
        for (const eventType of eventTypes) {
            let hiddenEventType = true;
            for (const listenerElement of eventType.children()) {
                const objectListenerElement = listenerElement;
                const listenerOrigin = objectListenerElement.eventListener().origin();
                let hidden = false;
                if (listenerOrigin === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.EventListener.Origin.FrameworkUser && !showFramework) {
                    hidden = true;
                }
                if (listenerOrigin === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.EventListener.Origin.Framework && showFramework) {
                    hidden = true;
                }
                if (!showPassive && objectListenerElement.eventListener().passive()) {
                    hidden = true;
                }
                if (!showBlocking && !objectListenerElement.eventListener().passive()) {
                    hidden = true;
                }
                objectListenerElement.hidden = hidden;
                hiddenEventType = hiddenEventType && hidden;
            }
            eventType.hidden = hiddenEventType;
        }
    }
    getOrCreateTreeElementForType(type) {
        let treeItem = this.treeItemMap.get(type);
        if (!treeItem) {
            treeItem = new EventListenersTreeElement(type, this.linkifier, this.changeCallback);
            this.treeItemMap.set(type, treeItem);
            treeItem.hidden = true;
            this.treeOutline.appendChild(treeItem);
        }
        this.emptyHolder.remove();
        return treeItem;
    }
    addEmptyHolderIfNeeded() {
        let allHidden = true;
        let firstVisibleChild = null;
        for (const eventType of this.treeOutline.rootElement().children()) {
            eventType.hidden = !eventType.firstChild();
            allHidden = allHidden && eventType.hidden;
            if (!firstVisibleChild && !eventType.hidden) {
                firstVisibleChild = eventType;
            }
        }
        if (allHidden && !this.emptyHolder.parentNode) {
            this.element.appendChild(this.emptyHolder);
        }
        if (firstVisibleChild) {
            firstVisibleChild.select(true /* omitFocus */);
        }
        this.treeOutline.setFocusable(Boolean(firstVisibleChild));
    }
    reset() {
        const eventTypes = this.treeOutline.rootElement().children();
        for (const eventType of eventTypes) {
            eventType.removeChildren();
        }
        this.linkifier.reset();
    }
    eventListenersArrivedForTest() {
    }
    wasShown() {
        super.wasShown();
        this.treeOutline.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './eventListenersView.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../ui/legacy/components/object_ui/objectValue.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
    }
}
class EventListenersTreeElement extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement {
    constructor(type, linkifier, changeCallback) {
        super(type);
        Object.defineProperty(this, "toggleOnClick", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "linkifier", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "changeCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.toggleOnClick = true;
        this.linkifier = linkifier;
        this.changeCallback = changeCallback;
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ARIAUtils.setLabel(this.listItemElement, `${type}, event listener`);
    }
    static comparator(element1, element2) {
        if (element1.title === element2.title) {
            return 0;
        }
        return element1.title > element2.title ? 1 : -1;
    }
    addObjectEventListener(eventListener, object) {
        const treeElement = new ObjectEventListenerBar(eventListener, object, this.linkifier, this.changeCallback);
        this.appendChild(treeElement);
    }
}
class ObjectEventListenerBar extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.TreeOutline.TreeElement {
    constructor(eventListener, object, linkifier, changeCallback) {
        super('', true);
        Object.defineProperty(this, "eventListenerInternal", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "editable", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "changeCallback", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "valueTitle", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.eventListenerInternal = eventListener;
        this.editable = false;
        this.setTitle(object, linkifier);
        this.changeCallback = changeCallback;
    }
    async onpopulate() {
        const properties = [];
        const eventListener = this.eventListenerInternal;
        const runtimeModel = eventListener.domDebuggerModel().runtimeModel();
        properties.push(runtimeModel.createRemotePropertyFromPrimitiveValue('useCapture', eventListener.useCapture()));
        properties.push(runtimeModel.createRemotePropertyFromPrimitiveValue('passive', eventListener.passive()));
        properties.push(runtimeModel.createRemotePropertyFromPrimitiveValue('once', eventListener.once()));
        if (typeof eventListener.handler() !== 'undefined') {
            properties.push(new _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.RemoteObject.RemoteObjectProperty('handler', eventListener.handler()));
        }
        _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertyTreeElement.populateWithProperties(this, properties, [], true, true, null);
    }
    setTitle(object, linkifier) {
        const title = this.listItemElement.createChild('span', 'event-listener-details');
        const propertyValue = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertiesSection.createPropertyValue(object, /* wasThrown */ false, /* showPreview */ false);
        this.valueTitle = propertyValue.element;
        title.appendChild(this.valueTitle);
        if (this.eventListenerInternal.canRemove()) {
            const deleteButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Button();
            deleteButton.data = {
                variant: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Variant.ICON,
                size: _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_3__.Button.Size.SMALL,
                iconName: 'bin',
                jslogContext: 'delete-event-listener',
            };
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(deleteButton, i18nString(UIStrings.deleteEventListener));
            deleteButton.addEventListener('click', event => {
                this.removeListener();
                event.consume();
            }, false);
            title.appendChild(deleteButton);
        }
        if (this.eventListenerInternal.isScrollBlockingType() && this.eventListenerInternal.canTogglePassive()) {
            const passiveButton = title.createChild('button', 'event-listener-button');
            passiveButton.textContent = i18nString(UIStrings.togglePassive);
            passiveButton.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('passive').track({ click: true })}`);
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(passiveButton, i18nString(UIStrings.toggleWhetherEventListenerIs));
            passiveButton.addEventListener('click', event => {
                this.togglePassiveListener();
                event.consume();
            }, false);
            title.appendChild(passiveButton);
        }
        const subtitle = title.createChild('span', 'event-listener-tree-subtitle');
        const linkElement = linkifier.linkifyRawLocation(this.eventListenerInternal.location(), this.eventListenerInternal.sourceURL());
        subtitle.appendChild(linkElement);
        this.listItemElement.addEventListener('contextmenu', event => {
            const menu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ContextMenu.ContextMenu(event);
            if (event.target !== linkElement) {
                menu.appendApplicableItems(linkElement);
            }
            if (object.subtype === 'node') {
                menu.defaultSection().appendItem(i18nString(UIStrings.revealInElementsPanel), () => _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(object), { jslogContext: 'reveal-in-elements' });
            }
            menu.defaultSection().appendItem(i18nString(UIStrings.deleteEventListener), this.removeListener.bind(this), { disabled: !this.eventListenerInternal.canRemove(), jslogContext: 'delete-event-listener' });
            menu.defaultSection().appendCheckboxItem(i18nString(UIStrings.passive), this.togglePassiveListener.bind(this), {
                checked: this.eventListenerInternal.passive(),
                disabled: !this.eventListenerInternal.canTogglePassive(),
                jslogContext: 'passive',
            });
            void menu.show();
        });
    }
    removeListener() {
        this.removeListenerBar();
        void this.eventListenerInternal.remove();
    }
    togglePassiveListener() {
        void this.eventListenerInternal.togglePassive().then(() => this.changeCallback());
    }
    removeListenerBar() {
        const parent = this.parent;
        if (!parent) {
            return;
        }
        parent.removeChild(this);
        if (!parent.childCount()) {
            parent.collapse();
        }
        let allHidden = true;
        for (const child of parent.children()) {
            if (!child.hidden) {
                allHidden = false;
            }
        }
        parent.hidden = allHidden;
    }
    eventListener() {
        return this.eventListenerInternal;
    }
    onenter() {
        if (this.valueTitle) {
            this.valueTitle.click();
            return true;
        }
        return false;
    }
    ondelete() {
        if (this.eventListenerInternal.canRemove()) {
            this.removeListener();
            return true;
        }
        return false;
    }
}


/***/ })

}]);