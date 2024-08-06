"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_ServiceWorkersView_js"], {
"./panels/application/ServiceWorkersView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Section: function() { return Section; },
  ServiceWorkersView: function() { return ServiceWorkersView; },
  setThrottleDisabledForDebugging: function() { return setThrottleDisabledForDebugging; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/logs/logs.js */ "./models/logs/logs.js");
/* harmony import */var _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panels/network/forward/forward.js */ "./panels/network/forward/forward.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/components/utils/utils.js */ "./ui/legacy/components/utils/utils.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mobile_throttling/mobile_throttling.js */ "./panels/mobile_throttling/mobile_throttling.js");
/* harmony import */var _components_components_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.js */ "./panels/application/components/components.js");
/* harmony import */var _serviceWorkersView_css_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./serviceWorkersView.css.js */ "./panels/application/serviceWorkersView.css.js");
/* harmony import */var _serviceWorkerUpdateCycleView_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./serviceWorkerUpdateCycleView.css.js */ "./panels/application/serviceWorkerUpdateCycleView.css.js");
/* harmony import */var _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ServiceWorkerUpdateCycleView.js */ "./panels/application/ServiceWorkerUpdateCycleView.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _tagged_template_literal([
        '<a class="devtools-link" role="link" tabindex="0" href="chrome://serviceworker-internals" target="_blank" style="display: inline; cursor: pointer;">',
        "</a>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}















var UIStrings = {
    /**
     *@description Text for linking to other Service Worker registrations
     */ serviceWorkersFromOtherOrigins: 'Service workers from other origins',
    /**
     *@description Title of update on reload setting in service workers view of the application panel
     */ updateOnReload: 'Update on reload',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Service Workers View of the Application panel
     */ onPageReloadForceTheService: 'On page reload, force the `service worker` to update, and activate it',
    /**
     *@description Title of bypass service worker setting in service workers view of the application panel
     */ bypassForNetwork: 'Bypass for network',
    /**
     *@description Tooltip text that appears on the setting when hovering over it in Service Workers View of the Application panel
     */ bypassTheServiceWorkerAndLoad: 'Bypass the `service worker` and load resources from the network',
    /**
     *@description Screen reader title for a section of the Service Workers view of the Application panel
     *@example {https://example.com} PH1
     */ serviceWorkerForS: '`Service worker` for {PH1}',
    /**
     *@description Text in Service Workers View of the Application panel
     */ testPushMessageFromDevtools: 'Test push message from DevTools.',
    /**
     *@description Button label for service worker network requests
     */ networkRequests: 'Network requests',
    /**
     * @description Label for a button in the Service Workers View of the Application panel.
     * Imperative noun. Clicking the button will refresh the list of service worker registrations.
     */ update: 'Update',
    /**
     *@description Text in Service Workers View of the Application panel
     */ unregisterServiceWorker: 'Unregister service worker',
    /**
     *@description Text in Service Workers View of the Application panel
     */ unregister: 'Unregister',
    /**
     *@description Text for the source of something
     */ source: 'Source',
    /**
     *@description Text for the status of something
     */ status: 'Status',
    /**
     *@description Text in Service Workers View of the Application panel
     */ clients: 'Clients',
    /**
     * @description Text in Service Workers View of the Application panel. Label for a section of the
     * tool which allows the developer to send a test push message to the service worker.
     */ pushString: 'Push',
    /**
     * @description Text in Service Workers View of the Application panel. Placeholder text for where
     * the user can type in the data they want to push to the service worker i.e. the 'push data'. Noun
     * phrase.
     */ pushData: 'Push data',
    /**
     *@description Text in Service Workers View of the Application panel
     */ syncString: 'Sync',
    /**
     *@description Placeholder text for the input box where a user is asked for a test tag to sync. This is used as a compound noun, not as a verb.
     */ syncTag: 'Sync tag',
    /**
     *@description Text for button in Service Workers View of the Application panel that dispatches a periodicsync event
     */ periodicSync: 'Periodic sync',
    /**
     *@description Default tag for a periodicsync event in Service Workers View of the Application panel
     */ periodicSyncTag: 'Periodic sync tag',
    /**
     *@description Aria accessible name in Service Workers View of the Application panel
     *@example {3} PH1
     */ sRegistrationErrors: '{PH1} registration errors',
    /**
     * @description Text in Service Workers View of the Application panel. The Date/time that a service
     * worker version update was received by the webpage.
     * @example {7/3/2019, 3:38:37 PM} PH1
     */ receivedS: 'Received {PH1}',
    /**
     **@description Text in Service Workers View of the Application panel.
     */ routers: 'Routers',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {example.com} PH1
     */ sDeleted: '{PH1} - deleted',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {1} PH1
     *@example {stopped} PH2
     */ sActivatedAndIsS: '#{PH1} activated and is {PH2}',
    /**
     *@description Text in Service Workers View of the Application panel
     */ stopString: 'Stop',
    /**
     *@description Text in Service Workers View of the Application panel
     */ inspect: 'Inspect',
    /**
     *@description Text in Service Workers View of the Application panel
     */ startString: 'Start',
    /**
     * @description Text in Service Workers View of the Application panel. Service workers have
     * different versions, which are labelled with numbers e.g. version #2. This text indicates that a
     * particular version is now redundant (it was replaced by a newer version). # means 'number' here.
     * @example {2} PH1
     */ sIsRedundant: '#{PH1} is redundant',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {2} PH1
     */ sWaitingToActivate: '#{PH1} waiting to activate',
    /**
     *@description Text in Service Workers View of the Application panel
     *@example {2} PH1
     */ sTryingToInstall: '#{PH1} trying to install',
    /**
     *@description Text in Service Workers Update Timeline. Update is a noun.
     */ updateCycle: 'Update Cycle',
    /**
     *@description Text of a DOM element in Service Workers View of the Application panel
     *@example {example.com} PH1
     */ workerS: 'Worker: {PH1}',
    /**
     *@description Link text in Service Workers View of the Application panel. When the link is clicked,
     * the focus is moved to the service worker's client page.
     */ focus: 'focus',
    /**
     *@description Link to view all the Service Workers that have been registered.
     */ seeAllRegistrations: 'See all registrations'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/application/ServiceWorkersView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var throttleDisabledForDebugging = false;
var setThrottleDisabledForDebugging = function(enable) {
    throttleDisabledForDebugging = enable;
};
var ServiceWorkersView = /*#__PURE__*/ function(_UI_Widget_VBox) {
    "use strict";
    _inherits(ServiceWorkersView, _UI_Widget_VBox);
    var _super = _create_super(ServiceWorkersView);
    function ServiceWorkersView() {
        _class_call_check(this, ServiceWorkersView);
        var _this;
        _this = _super.call(this, true);
        _define_property(_assert_this_initialized(_this), "currentWorkersView", void 0);
        _define_property(_assert_this_initialized(_this), "toolbar", void 0);
        _define_property(_assert_this_initialized(_this), "sections", void 0);
        _define_property(_assert_this_initialized(_this), "manager", void 0);
        _define_property(_assert_this_initialized(_this), "securityOriginManager", void 0);
        _define_property(_assert_this_initialized(_this), "sectionToRegistration", void 0);
        _define_property(_assert_this_initialized(_this), "eventListeners", void 0);
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        _this.currentWorkersView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportView(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('Service workers'));
        _this.currentWorkersView.setBodyScrollable(false);
        _this.contentElement.classList.add('service-worker-list');
        _this.contentElement.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.pane('service-workers')));
        _this.currentWorkersView.show(_this.contentElement);
        _this.currentWorkersView.element.classList.add('service-workers-this-origin');
        _this.currentWorkersView.element.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.section('this-origin')));
        _this.toolbar = _this.currentWorkersView.createToolbar();
        _this.sections = new Map();
        _this.manager = null;
        _this.securityOriginManager = null;
        _this.sectionToRegistration = new WeakMap();
        var othersDiv = _this.contentElement.createChild('div', 'service-workers-other-origin');
        othersDiv.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.section('other-origin')));
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        var othersView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ReportView.ReportView();
        othersView.setHeaderVisible(false);
        othersView.show(othersDiv);
        var othersSection = othersView.appendSection(i18nString(UIStrings.serviceWorkersFromOtherOrigins));
        var othersSectionRow = othersSection.appendRow();
        var seeOthers = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Fragment.html(_templateObject(), i18nString(UIStrings.seeAllRegistrations));
        seeOthers.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('view-all').track({
            click: true
        })));
        self.onInvokeElement(seeOthers, function(event) {
            var rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
            rootTarget && void rootTarget.targetAgent().invoke_createTarget({
                url: 'chrome://serviceworker-internals?devtools'
            });
            event.consume(true);
        });
        othersSectionRow.appendChild(seeOthers);
        _this.toolbar.appendToolbarItem(_mobile_throttling_mobile_throttling_js__WEBPACK_IMPORTED_MODULE_10__.ThrottlingManager.throttlingManager().createOfflineToolbarCheckbox());
        var updateOnReloadSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('service-worker-update-on-reload', false);
        updateOnReloadSetting.setTitle(i18nString(UIStrings.updateOnReload));
        var forceUpdate = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSettingCheckbox(updateOnReloadSetting, i18nString(UIStrings.onPageReloadForceTheService));
        _this.toolbar.appendToolbarItem(forceUpdate);
        var bypassServiceWorkerSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createSetting('bypass-service-worker', false);
        bypassServiceWorkerSetting.setTitle(i18nString(UIStrings.bypassForNetwork));
        var fallbackToNetwork = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Toolbar.ToolbarSettingCheckbox(bypassServiceWorkerSetting, i18nString(UIStrings.bypassTheServiceWorkerAndLoad));
        _this.toolbar.appendToolbarItem(fallbackToNetwork);
        _this.eventListeners = new Map();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerManager, _assert_this_initialized(_this));
        _this.updateListVisibility();
        var drawerChangeHandler = function(event) {
            // @ts-ignore: No support for custom event listener
            var isDrawerOpen = event.detail && event.detail.isDrawerOpen;
            if (_this.manager && !isDrawerOpen) {
                var _this_manager = _this.manager, _this_manager_serviceWorkerNetworkRequestsPanelStatus = _this_manager.serviceWorkerNetworkRequestsPanelStatus, isOpen = _this_manager_serviceWorkerNetworkRequestsPanelStatus.isOpen, openedAt = _this_manager_serviceWorkerNetworkRequestsPanelStatus.openedAt;
                if (isOpen) {
                    var networkLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().locationNameForViewId('network');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().showViewInLocation('network', networkLocation, false);
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.UIRequestFilter.filters([]));
                    var currentTime = Date.now();
                    var timeDifference = currentTime - openedAt;
                    if (timeDifference < 2000) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ServiceWorkerNetworkRequestClosedQuickly);
                    }
                    _this.manager.serviceWorkerNetworkRequestsPanelStatus = {
                        isOpen: false,
                        openedAt: 0
                    };
                }
            }
        };
        document.body.addEventListener("drawerchange" /* UI.InspectorView.Events.DrawerChange */ , drawerChangeHandler);
        return _this;
    }
    _create_class(ServiceWorkersView, [
        {
            key: "modelAdded",
            value: function modelAdded(serviceWorkerManager) {
                if (serviceWorkerManager.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
                    return;
                }
                this.manager = serviceWorkerManager;
                this.securityOriginManager = serviceWorkerManager.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.SecurityOriginManager);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.manager.registrations().values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var registration = _step.value;
                        this.updateRegistration(registration);
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
                this.eventListeners.set(serviceWorkerManager, [
                    this.manager.addEventListener("RegistrationUpdated" /* SDK.ServiceWorkerManager.Events.RegistrationUpdated */ , this.registrationUpdated, this),
                    this.manager.addEventListener("RegistrationDeleted" /* SDK.ServiceWorkerManager.Events.RegistrationDeleted */ , this.registrationDeleted, this),
                    this.securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.SecurityOriginAdded, this.updateSectionVisibility, this),
                    this.securityOriginManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.SecurityOriginManager.Events.SecurityOriginRemoved, this.updateSectionVisibility, this)
                ]);
            }
        },
        {
            key: "modelRemoved",
            value: function modelRemoved(serviceWorkerManager) {
                if (!this.manager || this.manager !== serviceWorkerManager) {
                    return;
                }
                _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.EventTarget.removeEventListeners(this.eventListeners.get(serviceWorkerManager) || []);
                this.eventListeners.delete(serviceWorkerManager);
                this.manager = null;
                this.securityOriginManager = null;
            }
        },
        {
            key: "getTimeStamp",
            value: function getTimeStamp(registration) {
                var versions = registration.versionsByMode();
                var timestamp = 0;
                var active = versions.get("active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */ );
                var installing = versions.get("installing" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing */ );
                var waiting = versions.get("waiting" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Waiting */ );
                var redundant = versions.get("redundant" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Redundant */ );
                if (active) {
                    timestamp = active.scriptResponseTime;
                } else if (waiting) {
                    timestamp = waiting.scriptResponseTime;
                } else if (installing) {
                    timestamp = installing.scriptResponseTime;
                } else if (redundant) {
                    timestamp = redundant.scriptResponseTime;
                }
                return timestamp || 0;
            }
        },
        {
            key: "updateSectionVisibility",
            value: function updateSectionVisibility() {
                var _this = this;
                var hasThis = false;
                var movedSections = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.sections.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var section = _step.value;
                        var expectedView = this.getReportViewForOrigin(section.registration.securityOrigin);
                        hasThis = hasThis || expectedView === this.currentWorkersView;
                        if (section.section.parentWidget() !== expectedView) {
                            movedSections.push(section);
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
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = movedSections[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var section1 = _step1.value;
                        var registration = section1.registration;
                        this.removeRegistrationFromList(registration);
                        this.updateRegistration(registration, true);
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
                this.currentWorkersView.sortSections(function(aSection, bSection) {
                    var aRegistration = _this.sectionToRegistration.get(aSection);
                    var bRegistration = _this.sectionToRegistration.get(bSection);
                    var aTimestamp = aRegistration ? _this.getTimeStamp(aRegistration) : 0;
                    var bTimestamp = bRegistration ? _this.getTimeStamp(bRegistration) : 0;
                    // the newest (largest timestamp value) should be the first
                    return bTimestamp - aTimestamp;
                });
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = this.sections.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var section2 = _step2.value;
                        if (section2.section.parentWidget() === this.currentWorkersView || this.isRegistrationVisible(section2.registration)) {
                            section2.section.showWidget();
                        } else {
                            section2.section.hideWidget();
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
                this.contentElement.classList.toggle('service-worker-has-current', Boolean(hasThis));
                this.updateListVisibility();
            }
        },
        {
            key: "registrationUpdated",
            value: function registrationUpdated(event) {
                this.updateRegistration(event.data);
                this.gcRegistrations();
            }
        },
        {
            key: "gcRegistrations",
            value: function gcRegistrations() {
                if (!this.manager || !this.securityOriginManager) {
                    return;
                }
                var hasNonDeletedRegistrations = false;
                var securityOrigins = new Set(this.securityOriginManager.securityOrigins());
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.manager.registrations().values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var registration = _step.value;
                        if (!securityOrigins.has(registration.securityOrigin) && !this.isRegistrationVisible(registration)) {
                            continue;
                        }
                        if (!registration.canBeRemoved()) {
                            hasNonDeletedRegistrations = true;
                            break;
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
                if (!hasNonDeletedRegistrations) {
                    return;
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.manager.registrations().values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var registration1 = _step1.value;
                        var visible = securityOrigins.has(registration1.securityOrigin) || this.isRegistrationVisible(registration1);
                        if (!visible && registration1.canBeRemoved()) {
                            this.removeRegistrationFromList(registration1);
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
            }
        },
        {
            key: "getReportViewForOrigin",
            value: function getReportViewForOrigin(origin) {
                if (this.securityOriginManager && (this.securityOriginManager.securityOrigins().includes(origin) || this.securityOriginManager.unreachableMainSecurityOrigin() === origin)) {
                    return this.currentWorkersView;
                }
                return null;
            }
        },
        {
            key: "updateRegistration",
            value: function updateRegistration(registration, skipUpdate) {
                var section = this.sections.get(registration);
                if (!section) {
                    var title = registration.scopeURL;
                    var reportView = this.getReportViewForOrigin(registration.securityOrigin);
                    if (!reportView) {
                        return;
                    }
                    var uiSection = reportView.appendSection(title);
                    uiSection.setUiGroupTitle(i18nString(UIStrings.serviceWorkerForS, {
                        PH1: title
                    }));
                    this.sectionToRegistration.set(uiSection, registration);
                    section = new Section(this.manager, uiSection, registration);
                    this.sections.set(registration, section);
                }
                if (skipUpdate) {
                    return;
                }
                this.updateSectionVisibility();
                section.scheduleUpdate();
            }
        },
        {
            key: "registrationDeleted",
            value: function registrationDeleted(event) {
                this.removeRegistrationFromList(event.data);
            }
        },
        {
            key: "removeRegistrationFromList",
            value: function removeRegistrationFromList(registration) {
                var section = this.sections.get(registration);
                if (section) {
                    section.section.detach();
                }
                this.sections.delete(registration);
                this.updateSectionVisibility();
            }
        },
        {
            key: "isRegistrationVisible",
            value: function isRegistrationVisible(registration) {
                if (!registration.scopeURL) {
                    return true;
                }
                return false;
            }
        },
        {
            key: "updateListVisibility",
            value: function updateListVisibility() {
                this.contentElement.classList.toggle('service-worker-list-empty', this.sections.size === 0);
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(ServiceWorkersView.prototype), "wasShown", this).call(this);
                this.registerCSSFiles([
                    _serviceWorkersView_css_js__WEBPACK_IMPORTED_MODULE_12__["default"]
                ]);
            }
        }
    ]);
    return ServiceWorkersView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.Widget.VBox);
var Section = /*#__PURE__*/ function() {
    "use strict";
    function Section(manager, section, registration) {
        var _this = this;
        _class_call_check(this, Section);
        _define_property(this, "manager", void 0);
        _define_property(this, "section", void 0);
        _define_property(this, "registration", void 0);
        _define_property(this, "fingerprint", void 0);
        _define_property(this, "pushNotificationDataSetting", void 0);
        _define_property(this, "syncTagNameSetting", void 0);
        _define_property(this, "periodicSyncTagNameSetting", void 0);
        _define_property(this, "updateCycleView", void 0);
        _define_property(this, "routerView", void 0);
        _define_property(this, "networkRequests", void 0);
        _define_property(this, "updateButton", void 0);
        _define_property(this, "deleteButton", void 0);
        _define_property(this, "sourceField", void 0);
        _define_property(this, "statusField", void 0);
        _define_property(this, "clientsField", void 0);
        _define_property(this, "linkifier", void 0);
        _define_property(this, "clientInfoCache", void 0);
        _define_property(this, "throttler", void 0);
        _define_property(this, "updateCycleField", void 0);
        _define_property(this, "routerField", void 0);
        this.manager = manager;
        this.section = section;
        this.registration = registration;
        this.fingerprint = null;
        this.pushNotificationDataSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('push-data', i18nString(UIStrings.testPushMessageFromDevtools));
        this.syncTagNameSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('sync-tag-name', 'test-tag-from-devtools');
        this.periodicSyncTagNameSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('periodic-sync-tag-name', 'test-tag-from-devtools');
        this.updateCycleView = new _ServiceWorkerUpdateCycleView_js__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerUpdateCycleView(registration);
        this.routerView = new _components_components_js__WEBPACK_IMPORTED_MODULE_11__.ServiceWorkerRouterView.ServiceWorkerRouterView();
        this.networkRequests = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Button();
        this.networkRequests.data = {
            iconName: 'bottom-panel-open',
            variant: "text" /* Buttons.Button.Variant.TEXT */ ,
            title: i18nString(UIStrings.networkRequests),
            jslogContext: 'show-network-requests'
        };
        this.networkRequests.textContent = i18nString(UIStrings.networkRequests);
        this.networkRequests.addEventListener('click', this.networkRequestsClicked.bind(this));
        this.section.appendButtonToHeader(this.networkRequests);
        this.updateButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.update), this.updateButtonClicked.bind(this), {
            variant: "text" /* Buttons.Button.Variant.TEXT */ ,
            title: i18nString(UIStrings.update),
            jslogContext: 'update'
        });
        this.section.appendButtonToHeader(this.updateButton);
        this.deleteButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.unregister), this.unregisterButtonClicked.bind(this), {
            variant: "text" /* Buttons.Button.Variant.TEXT */ ,
            title: i18nString(UIStrings.unregisterServiceWorker),
            jslogContext: 'unregister'
        });
        this.section.appendButtonToHeader(this.deleteButton);
        // Preserve the order.
        this.sourceField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.source)));
        this.statusField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.status)));
        this.clientsField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.clients)));
        this.createSyncNotificationField(i18nString(UIStrings.pushString), this.pushNotificationDataSetting.get(), i18nString(UIStrings.pushData), this.push.bind(this), 'push-message');
        this.createSyncNotificationField(i18nString(UIStrings.syncString), this.syncTagNameSetting.get(), i18nString(UIStrings.syncTag), this.sync.bind(this), 'sync-tag');
        this.createSyncNotificationField(i18nString(UIStrings.periodicSync), this.periodicSyncTagNameSetting.get(), i18nString(UIStrings.periodicSyncTag), function(tag) {
            return _this.periodicSync(tag);
        }, 'periodic-sync-tag');
        this.createUpdateCycleField();
        this.maybeCreateRouterField();
        this.linkifier = new _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier();
        this.clientInfoCache = new Map();
        this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(500);
    }
    _create_class(Section, [
        {
            key: "createSyncNotificationField",
            value: function createSyncNotificationField(label, initialValue, placeholder, callback, jslogContext) {
                var form = this.wrapWidget(this.section.appendField(label)).createChild('form', 'service-worker-editor-with-button');
                var editor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createInput('source-code service-worker-notification-editor');
                editor.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.textField().track({
                    change: true
                }).context(jslogContext)));
                form.appendChild(editor);
                var button = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(label, undefined, {
                    jslogContext: jslogContext
                });
                button.type = 'submit';
                form.appendChild(button);
                editor.value = initialValue;
                editor.placeholder = placeholder;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(editor, label);
                form.addEventListener('submit', function(e) {
                    callback(editor.value || '');
                    e.consume(true);
                });
            }
        },
        {
            key: "scheduleUpdate",
            value: function scheduleUpdate() {
                if (throttleDisabledForDebugging) {
                    void this.update();
                    return;
                }
                void this.throttler.schedule(this.update.bind(this));
            }
        },
        {
            key: "targetForVersionId",
            value: function targetForVersionId(versionId) {
                var version = this.manager.findVersion(versionId);
                if (!version || !version.targetId) {
                    return null;
                }
                return _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().targetById(version.targetId);
            }
        },
        {
            key: "addVersion",
            value: function addVersion(versionsStack, icon, label) {
                var installingEntry = versionsStack.createChild('div', 'service-worker-version');
                installingEntry.createChild('div', icon);
                var statusString = installingEntry.createChild('span', 'service-worker-version-string');
                statusString.textContent = label;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.markAsAlert(statusString);
                return installingEntry;
            }
        },
        {
            key: "updateClientsField",
            value: function updateClientsField(version) {
                this.clientsField.removeChildren();
                this.section.setFieldVisible(i18nString(UIStrings.clients), Boolean(version.controlledClients.length));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = version.controlledClients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var client = _step.value;
                        var clientLabelText = this.clientsField.createChild('div', 'service-worker-client');
                        var info = this.clientInfoCache.get(client);
                        if (info) {
                            this.updateClientInfo(clientLabelText, info);
                        }
                        void this.manager.target().targetAgent().invoke_getTargetInfo({
                            targetId: client
                        }).then(this.onClientInfo.bind(this, clientLabelText));
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
            key: "updateSourceField",
            value: function updateSourceField(version) {
                this.sourceField.removeChildren();
                var fileName = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.extractName(version.scriptURL);
                var name = this.sourceField.createChild('div', 'report-field-value-filename');
                var link = _ui_legacy_components_utils_utils_js__WEBPACK_IMPORTED_MODULE_7__.Linkifier.Linkifier.linkifyURL(version.scriptURL, {
                    text: fileName
                });
                link.tabIndex = 0;
                link.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_9__.link('source-location').track({
                    click: true
                })));
                name.appendChild(link);
                if (this.registration.errors.length) {
                    var errorsLabel = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createIconLabel({
                        title: String(this.registration.errors.length),
                        iconName: 'cross-circle-filled',
                        color: 'var(--icon-error)'
                    });
                    errorsLabel.classList.add('devtools-link', 'link');
                    errorsLabel.tabIndex = 0;
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ARIAUtils.setLabel(errorsLabel, i18nString(UIStrings.sRegistrationErrors, {
                        PH1: this.registration.errors.length
                    }));
                    self.onInvokeElement(errorsLabel, function() {
                        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().show();
                    });
                    name.appendChild(errorsLabel);
                }
                if (version.scriptResponseTime !== undefined) {
                    this.sourceField.createChild('div', 'report-field-value-subtitle').textContent = i18nString(UIStrings.receivedS, {
                        PH1: new Date(version.scriptResponseTime * 1000).toLocaleString()
                    });
                }
            }
        },
        {
            key: "update",
            value: function update() {
                var fingerprint = this.registration.fingerprint();
                if (fingerprint === this.fingerprint) {
                    return Promise.resolve();
                }
                this.fingerprint = fingerprint;
                this.section.setHeaderButtonsState(this.registration.isDeleted);
                var versions = this.registration.versionsByMode();
                var scopeURL = this.registration.scopeURL;
                var title = this.registration.isDeleted ? i18nString(UIStrings.sDeleted, {
                    PH1: scopeURL
                }) : scopeURL;
                this.section.setTitle(title);
                var active = versions.get("active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */ );
                var waiting = versions.get("waiting" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Waiting */ );
                var installing = versions.get("installing" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing */ );
                var redundant = versions.get("redundant" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Redundant */ );
                this.statusField.removeChildren();
                var versionsStack = this.statusField.createChild('div', 'service-worker-version-stack');
                versionsStack.createChild('div', 'service-worker-version-stack-bar');
                if (active) {
                    this.updateSourceField(active);
                    var localizedRunningStatus = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ServiceWorkerManager.ServiceWorkerVersion.RunningStatus[active.currentState.runningStatus]();
                    // TODO(l10n): Don't concatenate strings here.
                    var activeEntry = this.addVersion(versionsStack, 'service-worker-active-circle', i18nString(UIStrings.sActivatedAndIsS, {
                        PH1: active.id,
                        PH2: localizedRunningStatus
                    }));
                    if (active.isRunning() || active.isStarting()) {
                        var stopButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.stopString), this.stopButtonClicked.bind(this, active.id), {
                            jslogContext: 'stop'
                        });
                        activeEntry.appendChild(stopButton);
                        if (!this.targetForVersionId(active.id)) {
                            var inspectButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.inspect), this.inspectButtonClicked.bind(this, active.id), {
                                jslogContext: 'inspect'
                            });
                            activeEntry.appendChild(inspectButton);
                        }
                    } else if (active.isStartable()) {
                        var startButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextButton(i18nString(UIStrings.startString), this.startButtonClicked.bind(this), {
                            jslogContext: 'start'
                        });
                        activeEntry.appendChild(startButton);
                    }
                    this.updateClientsField(active);
                    this.maybeCreateRouterField();
                } else if (redundant) {
                    this.updateSourceField(redundant);
                    this.addVersion(versionsStack, 'service-worker-redundant-circle', i18nString(UIStrings.sIsRedundant, {
                        PH1: redundant.id
                    }));
                    this.updateClientsField(redundant);
                }
                if (waiting) {
                    var waitingEntry = this.addVersion(versionsStack, 'service-worker-waiting-circle', i18nString(UIStrings.sWaitingToActivate, {
                        PH1: waiting.id
                    }));
                    this.createLink(waitingEntry, _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString('skipWaiting'), this.skipButtonClicked.bind(this));
                    if (waiting.scriptResponseTime !== undefined) {
                        waitingEntry.createChild('div', 'service-worker-subtitle').textContent = i18nString(UIStrings.receivedS, {
                            PH1: new Date(waiting.scriptResponseTime * 1000).toLocaleString()
                        });
                    }
                    if (!this.targetForVersionId(waiting.id) && (waiting.isRunning() || waiting.isStarting())) {
                        this.createLink(waitingEntry, i18nString(UIStrings.inspect), this.inspectButtonClicked.bind(this, waiting.id));
                    }
                }
                if (installing) {
                    var installingEntry = this.addVersion(versionsStack, 'service-worker-installing-circle', i18nString(UIStrings.sTryingToInstall, {
                        PH1: installing.id
                    }));
                    if (installing.scriptResponseTime !== undefined) {
                        installingEntry.createChild('div', 'service-worker-subtitle').textContent = i18nString(UIStrings.receivedS, {
                            PH1: new Date(installing.scriptResponseTime * 1000).toLocaleString()
                        });
                    }
                    if (!this.targetForVersionId(installing.id) && (installing.isRunning() || installing.isStarting())) {
                        this.createLink(installingEntry, i18nString(UIStrings.inspect), this.inspectButtonClicked.bind(this, installing.id));
                    }
                }
                this.updateCycleView.refresh();
                return Promise.resolve();
            }
        },
        {
            key: "createLink",
            value: function createLink(parent, title, listener, className, useCapture) {
                var button = document.createElement('button');
                if (className) {
                    button.className = className;
                }
                button.classList.add('link', 'devtools-link');
                button.textContent = title;
                button.tabIndex = 0;
                button.addEventListener('click', listener, useCapture);
                parent.appendChild(button);
                return button;
            }
        },
        {
            key: "unregisterButtonClicked",
            value: function unregisterButtonClicked() {
                this.manager.deleteRegistration(this.registration.id);
            }
        },
        {
            key: "createUpdateCycleField",
            value: function createUpdateCycleField() {
                this.updateCycleField = this.wrapWidget(this.section.appendField(i18nString(UIStrings.updateCycle)));
                this.updateCycleField.appendChild(this.updateCycleView.tableElement);
            }
        },
        {
            key: "maybeCreateRouterField",
            value: function maybeCreateRouterField() {
                var versions = this.registration.versionsByMode();
                var active = versions.get("active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */ );
                var title = i18nString(UIStrings.routers);
                if (active && active.routerRules && active.routerRules.length > 0) {
                    // If there is at least one registered rule in the active version, append the router filed.
                    if (!this.routerField) {
                        this.routerField = this.wrapWidget(this.section.appendField(title));
                    }
                    if (!this.routerField.lastElementChild) {
                        this.routerField.appendChild(this.routerView);
                    }
                    this.routerView.update(active.routerRules);
                } else {
                    // If no active worker or no registered rules, remove the field.
                    this.section.removeField(title);
                    this.routerField = undefined;
                }
            }
        },
        {
            key: "updateButtonClicked",
            value: function updateButtonClicked() {
                void this.manager.updateRegistration(this.registration.id);
            }
        },
        {
            key: "networkRequestsClicked",
            value: function networkRequestsClicked() {
                var applicationTabLocation = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().locationNameForViewId('resources');
                var networkTabLocation = applicationTabLocation === 'drawer-view' ? 'panel' : 'drawer-view';
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.ViewManager.ViewManager.instance().showViewInLocation('network', networkTabLocation);
                void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(_panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.UIRequestFilter.filters([
                    {
                        filterType: _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIFilter.FilterType.Is,
                        filterValue: "service-worker-intercepted" /* NetworkForward.UIFilter.IsFilterType.ServiceWorkerIntercepted */ 
                    }
                ]));
                var requests = _models_logs_logs_js__WEBPACK_IMPORTED_MODULE_4__.NetworkLog.NetworkLog.instance().requests();
                var lastRequest = null;
                if (Array.isArray(requests)) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = requests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var request = _step.value;
                            if (!lastRequest && request.fetchedViaServiceWorker) {
                                lastRequest = request;
                            }
                            if (request.fetchedViaServiceWorker && lastRequest && lastRequest.responseReceivedTime < request.responseReceivedTime) {
                                lastRequest = request;
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
                if (lastRequest) {
                    var requestLocation = _panels_network_forward_forward_js__WEBPACK_IMPORTED_MODULE_5__.UIRequestLocation.UIRequestLocation.tab(lastRequest, "timing" /* NetworkForward.UIRequestLocation.UIRequestTabs.Timing */ , {
                        clearFilter: false
                    });
                    void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(requestLocation);
                }
                this.manager.serviceWorkerNetworkRequestsPanelStatus = {
                    isOpen: true,
                    openedAt: Date.now()
                };
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ServiceWorkerNetworkRequestClicked);
            }
        },
        {
            key: "push",
            value: function push(data) {
                this.pushNotificationDataSetting.set(data);
                void this.manager.deliverPushMessage(this.registration.id, data);
            }
        },
        {
            key: "sync",
            value: function sync(tag) {
                this.syncTagNameSetting.set(tag);
                void this.manager.dispatchSyncEvent(this.registration.id, tag, true);
            }
        },
        {
            key: "periodicSync",
            value: function periodicSync(tag) {
                this.periodicSyncTagNameSetting.set(tag);
                void this.manager.dispatchPeriodicSyncEvent(this.registration.id, tag);
            }
        },
        {
            key: "onClientInfo",
            value: function onClientInfo(element, targetInfoResponse) {
                var targetInfo = targetInfoResponse.targetInfo;
                if (!targetInfo) {
                    return;
                }
                this.clientInfoCache.set(targetInfo.targetId, targetInfo);
                this.updateClientInfo(element, targetInfo);
            }
        },
        {
            key: "updateClientInfo",
            value: function updateClientInfo(element, targetInfo) {
                if (targetInfo.type !== 'page' && targetInfo.type === 'iframe') {
                    var clientString = element.createChild('span', 'service-worker-client-string');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextChild(clientString, i18nString(UIStrings.workerS, {
                        PH1: targetInfo.url
                    }));
                    return;
                }
                element.removeChildren();
                var clientString1 = element.createChild('span', 'service-worker-client-string');
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createTextChild(clientString1, targetInfo.url);
                var focusButton = new _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_6__.Button.Button();
                focusButton.data = {
                    iconName: 'select-element',
                    variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                    size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                    title: i18nString(UIStrings.focus),
                    jslogContext: 'client-focus'
                };
                focusButton.className = 'service-worker-client-focus-link';
                focusButton.addEventListener('click', this.activateTarget.bind(this, targetInfo.targetId));
                element.appendChild(focusButton);
            }
        },
        {
            key: "activateTarget",
            value: function activateTarget(targetId) {
                void this.manager.target().targetAgent().invoke_activateTarget({
                    targetId: targetId
                });
            }
        },
        {
            key: "startButtonClicked",
            value: function startButtonClicked() {
                void this.manager.startWorker(this.registration.scopeURL);
            }
        },
        {
            key: "skipButtonClicked",
            value: function skipButtonClicked() {
                void this.manager.skipWaiting(this.registration.scopeURL);
            }
        },
        {
            key: "stopButtonClicked",
            value: function stopButtonClicked(versionId) {
                void this.manager.stopWorker(versionId);
            }
        },
        {
            key: "inspectButtonClicked",
            value: function inspectButtonClicked(versionId) {
                void this.manager.inspectWorker(versionId);
            }
        },
        {
            key: "wrapWidget",
            value: function wrapWidget(container) {
                var shadowRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_8__.UIUtils.createShadowRootWithCoreStyles(container, {
                    cssFile: [
                        _serviceWorkersView_css_js__WEBPACK_IMPORTED_MODULE_12__["default"],
                        /* These styles are for the timing table in serviceWorkerUpdateCycleView but this is the widget that it is rendered
                   * inside so we are registering the files here. */ _serviceWorkerUpdateCycleView_css_js__WEBPACK_IMPORTED_MODULE_13__["default"]
                    ],
                    delegatesFocus: undefined
                });
                var contentElement = document.createElement('div');
                shadowRoot.appendChild(contentElement);
                return contentElement;
            }
        }
    ]);
    return Section;
} //# sourceMappingURL=ServiceWorkersView.js.map
();


}),
"./panels/application/serviceWorkerUpdateCycleView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n.resource-service-worker-update-view {\n  display: block;\n  margin: 6px;\n  color: var(--sys-color-on-surface-subtle);\n  overflow: auto;\n}\n\n.service-worker-update-timing-table {\n  border: 1px solid var(--sys-color-divider);\n  border-spacing: 0;\n  padding-left: 10px;\n  padding-right: 10px;\n  line-height: initial;\n  table-layout: auto;\n  overflow: hidden;\n}\n\n.service-worker-update-timing-row {\n  position: relative;\n  height: 20px;\n  overflow: hidden;\n  min-width: 80px;\n}\n\n.service-worker-update-timing-bar {\n  position: absolute;\n  min-width: 1px;\n  top: 0;\n  bottom: 0;\n}\n\n.service-worker-update-timing-bar-clickable::before {\n  user-select: none;\n  mask-image: var(--image-file-triangle-right);\n  float: left;\n  width: 14px;\n  height: 14px;\n  margin-right: 2px;\n  content: "";\n  position: relative;\n  background-color: var(--icon-default);\n  transition: transform 200ms;\n}\n\n.service-worker-update-timing-bar-clickable {\n  position: relative;\n  left: -12px;\n}\n\n.service-worker-update-timing-bar-clickable:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.service-worker-update-timing-bar-clickable[aria-checked="true"]::before {\n  transform: rotate(90deg);\n}\n\n.service-worker-update-timing-bar-details-collapsed {\n  display: none;\n}\n\n.service-worker-update-timing-bar-details-expanded {\n  display: table-row;\n}\n\n.service-worker-update-timing-bar-details:focus-visible {\n  background-color: var(--sys-color-state-focus-highlight);\n}\n\n.service-worker-update-timing-bar.activate {\n  top: 5px;\n  height: 10px;\n  background-color: var(--sys-color-yellow-bright);\n}\n\n.service-worker-update-timing-bar.wait {\n  top: 5px;\n  height: 10px;\n  background-color: var(--sys-color-purple-bright);\n}\n\n.service-worker-update-timing-bar.install {\n  top: 5px;\n  height: 10px;\n  background-color: var(--sys-color-cyan-bright);\n}\n\n.service-worker-update-timing-table > tr > td {\n  padding: 4px 0;\n  padding-right: 10px;\n}\n\ntable.service-worker-update-timing-table > tr.service-worker-update-timing-table-header > td {\n  border-top: 5px solid transparent;\n  color: var(--sys-color-token-subtle);\n}\n\ntable.service-worker-update-timing-table > tr.service-worker-update-timing-bar-details > td:first-child {\n  padding-left: 12px;\n}\n\ntable.service-worker-update-timing-table > tr.service-worker-update-timeline > td:first-child {\n  padding-left: 12px;\n}\n\n/*# sourceURL=serviceWorkerUpdateCycleView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/application/serviceWorkersView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2015 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.service-worker-version {\n  display: flex;\n  /* The status string can be long, allow this line of the report to wrap. */\n  flex-wrap: wrap;\n\n  devtools-button {\n    margin-left: var(--sys-size-3);\n  }\n}\n\n.service-worker-version-stack {\n  position: relative;\n}\n\n.service-worker-version-stack-bar {\n  position: absolute;\n  top: 10px;\n  bottom: 20px;\n  left: 4px;\n  content: "";\n  border-left: 1px solid var(--sys-color-divider);\n  z-index: 0;\n}\n\n.service-worker-version:not(:last-child) {\n  margin-bottom: 7px;\n}\n\n.service-worker-version-string {\n  /* This label contains important information that needs to be legible at all\n     times. Don\'t shrink it. */\n  flex-shrink: 0;\n}\n\n.service-worker-active-circle,\n.service-worker-redundant-circle,\n.service-worker-waiting-circle,\n.service-worker-installing-circle {\n  position: relative;\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  z-index: 10;\n  margin-right: 5px;\n  border-radius: 50%;\n  border: 1px solid var(--sys-color-token-subtle);\n  align-self: center;\n  /* The circle should not shrink, to avoid risking becoming invisible. */\n  flex-shrink: 0;\n}\n\n.service-worker-active-circle {\n  background-color: var(--sys-color-green-bright);\n}\n\n.service-worker-waiting-circle {\n  background-color: var(--sys-color-yellow-bright);\n}\n\n.service-worker-installing-circle {\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.service-worker-redundant-circle {\n  background-color: var(--sys-color-neutral-bright);\n}\n\n.service-worker-subtitle {\n  padding-left: 14px;\n  line-height: 14px;\n  color: var(--sys-color-state-disabled);\n}\n\n.link {\n  margin-left: 7px;\n}\n\n.service-worker-editor-with-button {\n  align-items: baseline;\n  display: flex;\n}\n\n.service-worker-notification-editor {\n  border: 1px solid var(--sys-color-divider);\n  display: flex;\n  flex: auto;\n  margin-right: 4px;\n  max-width: 400px;\n  min-width: 80px;\n}\n\n.report-field-value {\n  white-space: normal;\n}\n\n.report-field-value-filename,\n.service-worker-client-string {\n  max-width: 400px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.report-field-value-filename {\n  /* hack to prevent focus-ring from being cut off on the left */\n  padding-left: 2px;\n  margin-left: -2px;\n}\n\n.report-field-value-subtitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.service-worker-client {\n  display: flex;\n}\n\n.service-worker-client-focus-link {\n  flex: none;\n  margin-left: 2px;\n  align-self: center;\n}\n\n.service-worker-notification-editor.source-code {\n  /** Simulate CodeMirror that is shown above */\n  padding: 4px;\n}\n\n.service-worker-list {\n  background-color: var(--sys-color-cdt-base-container);\n  overflow: auto;\n}\n\n.service-workers-this-origin {\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.service-workers-this-origin,\n.service-workers-other-origin {\n  min-width: max-content;\n}\n\n.service-worker-has-current .service-workers-other-origin {\n  margin-top: 16px;\n  border-top: 1px solid var(--sys-color-divider);\n}\n\n.devtools-link {\n  line-height: 14px;\n  align-self: center;\n  padding: 1px;\n}\n\nbutton.link {\n  padding: 1px;\n}\n\nbutton.link:focus-visible {\n  background-color: inherit;\n}\n\n/*# sourceURL=serviceWorkersView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);