"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_OpenedWindowDetailsView_js"], {
"./panels/application/OpenedWindowDetailsView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  OpenedWindowDetailsView: function() { return OpenedWindowDetailsView; },
  WorkerDetailsView: function() { return WorkerDetailsView; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./openedWindowDetailsView.css.js */ "./panels/application/openedWindowDetailsView.css.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
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
     *@description Text in Timeline indicating that input has happened recently
     */ yes: 'Yes',
    /**
     *@description Text in Timeline indicating that input has not happened recently
     */ no: 'No',
    /**
     *@description Title for a link to the Elements panel
     */ clickToRevealInElementsPanel: 'Click to reveal in Elements panel',
    /**
     *@description Name of a network resource type
     */ document: 'Document',
    /**
     *@description Text for web URLs
     */ url: 'URL',
    /**
     *@description Title of the 'Security' tool
     */ security: 'Security',
    /**
     *@description Label for link to Opener Frame in Detail View for Opened Window
     */ openerFrame: 'Opener Frame',
    /**
     *@description Label in opened window's details view whether window has access to its opener
     */ accessToOpener: 'Access to opener',
    /**
     *@description Description for the 'Access to Opener' field
     */ showsWhetherTheOpenedWindowIs: 'Shows whether the opened window is able to access its opener and vice versa',
    /**
     *@description Text in Frames View of the Application panel
     */ windowWithoutTitle: 'Window without title',
    /**
     *@description Label suffix in the Application Panel Frames section for windows which are already closed
     */ closed: 'closed',
    /**
     *@description Default name for worker
     */ worker: 'worker',
    /**
     *@description Text that refers to some types
     */ type: 'Type',
    /**
     *@description Section header in the Frame Details view
     */ securityIsolation: 'Security & Isolation',
    /**
     *@description Row title in the Frame Details view
     */ crossoriginEmbedderPolicy: 'Cross-Origin Embedder Policy',
    /**
     *@description Label for worker type: web worker
     */ webWorker: 'Web Worker',
    /**
     *@description Text for an unspecified service worker response source
     */ unknown: 'Unknown',
    /**
     *@description This label specifies the server endpoints to which the server is reporting errors
     *and warnings through the Report-to API. Following this label will be the URL of the server.
     */ reportingTo: 'reporting to'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/application/OpenedWindowDetailsView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var booleanToYesNo = function(b) {
    return b ? i18nString(UIStrings.yes) : i18nString(UIStrings.no);
};
function linkifyIcon(iconType, title, eventHandler) {
    var icon = _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.create(iconType, 'icon-link devtools-link');
    var button = document.createElement('button');
    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(button, title);
    button.classList.add('devtools-link', 'link-style', 'text-button');
    button.appendChild(icon);
    button.addEventListener('click', function(event) {
        event.consume(true);
        void eventHandler();
    });
    return button;
}
function maybeCreateLinkToElementsPanel(opener) {
    return _maybeCreateLinkToElementsPanel.apply(this, arguments);
}
function _maybeCreateLinkToElementsPanel() {
    _maybeCreateLinkToElementsPanel = _async_to_generator(function(opener) {
        var openerFrame, linkTargetDOMNode, linkElement, label;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    openerFrame = null;
                    if (_instanceof(opener, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.ResourceTreeModel.ResourceTreeFrame)) {
                        openerFrame = opener;
                    } else if (opener) {
                        openerFrame = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.FrameManager.FrameManager.instance().getFrame(opener);
                    }
                    if (!openerFrame) {
                        return [
                            2,
                            null
                        ];
                    }
                    return [
                        4,
                        openerFrame.getOwnerDOMNodeOrDocument()
                    ];
                case 1:
                    linkTargetDOMNode = _state.sent();
                    if (!linkTargetDOMNode) {
                        return [
                            2,
                            null
                        ];
                    }
                    linkElement = linkifyIcon('code-circle', i18nString(UIStrings.clickToRevealInElementsPanel), function() {
                        return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(linkTargetDOMNode);
                    });
                    label = document.createElement('span');
                    label.textContent = "<".concat(linkTargetDOMNode.nodeName().toLocaleLowerCase(), ">");
                    linkElement.insertBefore(label, linkElement.firstChild);
                    linkElement.addEventListener('mouseenter', function() {
                        if (openerFrame) {
                            void openerFrame.highlight();
                        }
                    });
                    linkElement.addEventListener('mouseleave', function() {
                        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.OverlayModel.OverlayModel.hideDOMNodeHighlight();
                    });
                    return [
                        2,
                        linkElement
                    ];
            }
        });
    });
    return _maybeCreateLinkToElementsPanel.apply(this, arguments);
}
var _urlFieldValue = /*#__PURE__*/ new WeakMap();
var OpenedWindowDetailsView = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(OpenedWindowDetailsView, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(OpenedWindowDetailsView);
    function OpenedWindowDetailsView(targetInfo, isWindowClosed) {
        _class_call_check(this, OpenedWindowDetailsView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "targetInfo", void 0);
        _define_property(_assert_this_initialized(_this), "isWindowClosed", void 0);
        _define_property(_assert_this_initialized(_this), "reportView", void 0);
        _define_property(_assert_this_initialized(_this), "documentSection", void 0);
        _class_private_field_init(_assert_this_initialized(_this), _urlFieldValue, {
            writable: true,
            value: void 0
        });
        _define_property(_assert_this_initialized(_this), "securitySection", void 0);
        _define_property(_assert_this_initialized(_this), "openerElementField", void 0);
        _define_property(_assert_this_initialized(_this), "hasDOMAccessValue", void 0);
        _this.targetInfo = targetInfo;
        _this.isWindowClosed = isWindowClosed;
        _this.contentElement.classList.add('frame-details-container');
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        _this.reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportView(_this.buildTitle());
        _this.reportView.show(_this.contentElement);
        _this.reportView.element.classList.add('frame-details-report-container');
        _this.documentSection = _this.reportView.appendSection(i18nString(UIStrings.document));
        _class_private_field_set(_assert_this_initialized(_this), _urlFieldValue, _this.documentSection.appendField(i18nString(UIStrings.url)).createChild('div', 'text-ellipsis'));
        _this.securitySection = _this.reportView.appendSection(i18nString(UIStrings.security));
        _this.openerElementField = _this.securitySection.appendField(i18nString(UIStrings.openerFrame));
        _this.securitySection.setFieldVisible(i18nString(UIStrings.openerFrame), false);
        _this.hasDOMAccessValue = _this.securitySection.appendField(i18nString(UIStrings.accessToOpener));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(_this.hasDOMAccessValue, i18nString(UIStrings.showsWhetherTheOpenedWindowIs));
        _this.update();
        return _this;
    }
    _create_class(OpenedWindowDetailsView, [
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        _this.reportView.setTitle(_this.buildTitle());
                        _class_private_field_get(_this, _urlFieldValue).textContent = _this.targetInfo.url;
                        _class_private_field_get(_this, _urlFieldValue).title = _this.targetInfo.url;
                        _this.hasDOMAccessValue.textContent = booleanToYesNo(_this.targetInfo.canAccessOpener);
                        void _this.maybeDisplayOpenerFrame();
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "maybeDisplayOpenerFrame",
            value: function maybeDisplayOpenerFrame() {
                var _this = this;
                return _async_to_generator(function() {
                    var linkElement;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.openerElementField.removeChildren();
                                return [
                                    4,
                                    maybeCreateLinkToElementsPanel(_this.targetInfo.openerFrameId)
                                ];
                            case 1:
                                linkElement = _state.sent();
                                if (linkElement) {
                                    _this.openerElementField.append(linkElement);
                                    _this.securitySection.setFieldVisible(i18nString(UIStrings.openerFrame), true);
                                    return [
                                        2
                                    ];
                                }
                                _this.securitySection.setFieldVisible(i18nString(UIStrings.openerFrame), false);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "buildTitle",
            value: function buildTitle() {
                var title = this.targetInfo.title || i18nString(UIStrings.windowWithoutTitle);
                if (this.isWindowClosed) {
                    title += " (".concat(i18nString(UIStrings.closed), ")");
                }
                return title;
            }
        },
        {
            key: "setIsWindowClosed",
            value: function setIsWindowClosed(isWindowClosed) {
                this.isWindowClosed = isWindowClosed;
            }
        },
        {
            key: "setTargetInfo",
            value: function setTargetInfo(targetInfo) {
                this.targetInfo = targetInfo;
            }
        },
        {
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(OpenedWindowDetailsView.prototype), "wasShown", this).call(this);
                this.reportView.registerCSSFiles([
                    _openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.registerCSSFiles([
                    _openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return OpenedWindowDetailsView;
}(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ThrottledWidget.ThrottledWidget);
var WorkerDetailsView = /*#__PURE__*/ function(_UI_ThrottledWidget_ThrottledWidget) {
    "use strict";
    _inherits(WorkerDetailsView, _UI_ThrottledWidget_ThrottledWidget);
    var _super = _create_super(WorkerDetailsView);
    function WorkerDetailsView(targetInfo) {
        _class_call_check(this, WorkerDetailsView);
        var _this;
        _this = _super.call(this);
        _define_property(_assert_this_initialized(_this), "targetInfo", void 0);
        _define_property(_assert_this_initialized(_this), "reportView", void 0);
        _define_property(_assert_this_initialized(_this), "documentSection", void 0);
        _define_property(_assert_this_initialized(_this), "isolationSection", void 0);
        _define_property(_assert_this_initialized(_this), "coepPolicy", void 0);
        _this.targetInfo = targetInfo;
        _this.contentElement.classList.add('frame-details-container');
        // TODO(crbug.com/1156978): Replace UI.ReportView.ReportView with ReportView.ts web component.
        _this.reportView = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ReportView.ReportView(_this.targetInfo.title || _this.targetInfo.url || i18nString(UIStrings.worker));
        _this.reportView.show(_this.contentElement);
        _this.reportView.element.classList.add('frame-details-report-container');
        _this.documentSection = _this.reportView.appendSection(i18nString(UIStrings.document));
        var URLFieldValue = _this.documentSection.appendField(i18nString(UIStrings.url)).createChild('div', 'text-ellipsis');
        URLFieldValue.textContent = _this.targetInfo.url;
        URLFieldValue.title = _this.targetInfo.url;
        var workerType = _this.documentSection.appendField(i18nString(UIStrings.type));
        workerType.textContent = _this.workerTypeToString(_this.targetInfo.type);
        _this.isolationSection = _this.reportView.appendSection(i18nString(UIStrings.securityIsolation));
        _this.coepPolicy = _this.isolationSection.appendField(i18nString(UIStrings.crossoriginEmbedderPolicy));
        _this.update();
        return _this;
    }
    _create_class(WorkerDetailsView, [
        {
            key: "workerTypeToString",
            value: function workerTypeToString(type) {
                if (type === 'worker') {
                    return i18nString(UIStrings.webWorker);
                }
                if (type === 'service_worker') {
                    return _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.lockedString('Service Worker');
                }
                return i18nString(UIStrings.unknown);
            }
        },
        {
            key: "updateCoopCoepStatus",
            value: function updateCoopCoepStatus() {
                var _this = this;
                return _async_to_generator(function() {
                    var target, model, info, _tmp, coepIsEnabled;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                target = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.TargetManager.TargetManager.instance().targetById(_this.targetInfo.targetId);
                                if (!target) {
                                    return [
                                        2
                                    ];
                                }
                                model = target.model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.NetworkManager.NetworkManager);
                                _tmp = model;
                                if (!_tmp) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    model.getSecurityIsolationStatus(null)
                                ];
                            case 1:
                                _tmp = _state.sent();
                                _state.label = 2;
                            case 2:
                                info = _tmp;
                                if (!info) {
                                    return [
                                        2
                                    ];
                                }
                                coepIsEnabled = function(value) {
                                    return value !== "None" /* Protocol.Network.CrossOriginEmbedderPolicyValue.None */ ;
                                };
                                _this.fillCrossOriginPolicy(_this.coepPolicy, coepIsEnabled, info.coep);
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "fillCrossOriginPolicy",
            value: function fillCrossOriginPolicy(field, isEnabled, info) {
                if (!info) {
                    field.textContent = '';
                    return;
                }
                var enabled = isEnabled(info.value);
                field.textContent = enabled ? info.value : info.reportOnlyValue;
                if (!enabled && isEnabled(info.reportOnlyValue)) {
                    var reportOnly = document.createElement('span');
                    reportOnly.classList.add('inline-comment');
                    reportOnly.textContent = 'report-only';
                    field.appendChild(reportOnly);
                }
                var endpoint = enabled ? info.reportingEndpoint : info.reportOnlyReportingEndpoint;
                if (endpoint) {
                    var reportingEndpointPrefix = field.createChild('span', 'inline-name');
                    reportingEndpointPrefix.textContent = i18nString(UIStrings.reportingTo);
                    var reportingEndpointName = field.createChild('span');
                    reportingEndpointName.textContent = endpoint;
                }
            }
        },
        {
            key: "doUpdate",
            value: function doUpdate() {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.updateCoopCoepStatus()
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
            key: "wasShown",
            value: function wasShown() {
                _get(_get_prototype_of(WorkerDetailsView.prototype), "wasShown", this).call(this);
                this.reportView.registerCSSFiles([
                    _openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
                this.registerCSSFiles([
                    _openedWindowDetailsView_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]);
            }
        }
    ]);
    return WorkerDetailsView;
} //# sourceMappingURL=OpenedWindowDetailsView.js.map
(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ThrottledWidget.ThrottledWidget);


}),
"./panels/application/openedWindowDetailsView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2020 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.report-content-box {\n  overflow: initial;\n}\n\n.report-field-name {\n  flex: 0 0 200px;\n}\n\n.report-field-value {\n  user-select: text;\n  display: flex;\n}\n\n.report-field .inline-name {\n  color: var(--sys-color-state-disabled);\n  padding-left: 2ex;\n  user-select: none;\n  white-space: pre-line;\n}\n\n.report-field .inline-name::after {\n  content: ":\\A0";\n}\n\n.report-field .inline-comment {\n  color: var(--sys-color-token-subtle);\n  padding-left: 1ex;\n  white-space: pre-line;\n}\n\n.report-field .inline-comment::before {\n  content: "(";\n}\n\n.report-field .inline-comment::after {\n  content: ")";\n}\n\n.report-field .inline-span {\n  color: var(--sys-color-token-subtle);\n  padding-left: 1ex;\n  white-space: pre-line;\n}\n\n.report-field-value-link {\n  display: inline-block;\n}\n\n.icon-link.devtools-link {\n  background-color: var(--sys-color-primary);\n  vertical-align: sub;\n}\n\n.frame-details-container {\n  overflow: auto;\n}\n\n.frame-details-report-container {\n  min-width: 550px;\n}\n\n.text-ellipsis {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n/*# sourceURL=openedWindowDetailsView.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);