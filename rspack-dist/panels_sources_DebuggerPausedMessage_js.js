"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_sources_DebuggerPausedMessage_js"], {
"./panels/sources/DebuggerPausedMessage.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BreakpointTypeNouns: function() { return BreakpointTypeNouns; },
  DebuggerPausedMessage: function() { return DebuggerPausedMessage; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CategorizedBreakpointL10n.js */ "./panels/sources/CategorizedBreakpointL10n.js");
/* harmony import */var _debuggerPausedMessage_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debuggerPausedMessage.css.js */ "./panels/sources/debuggerPausedMessage.css.js");
// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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
function _class_static_private_method_get(receiver, classConstructor, method) {
    _class_check_private_static_access(receiver, classConstructor);
    return method;
}
function _class_check_private_static_access(receiver, classConstructor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
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
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit
     *@example {conditional breakpoint} PH1
     */ pausedOnS: 'Paused on {PH1}',
    /**
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit because a child is added to the subtree
     *@example {node} PH1
     */ childSAdded: 'Child {PH1} added',
    /**
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit because a descendant is added
     *@example {node} PH1
     */ descendantSAdded: 'Descendant {PH1} added',
    /**
     *@description Text in the JavaScript Debugging pane of the Sources pane when a DOM breakpoint is hit because a descendant is removed
     *@example {node} PH1
     */ descendantSRemoved: 'Descendant {PH1} removed',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedOnEventListener: 'Paused on event listener',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedOnXhrOrFetch: 'Paused on XHR or fetch',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedOnException: 'Paused on exception',
    /**
     *@description We pause exactly when the promise rejection is happening, so that the user can see where in the code it comes from.
     * A Promise is a Web API object (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise),
     * that will either be 'fulfilled' or 'rejected' at some unknown time in the future.
     * The subject of the term is omited but it is "Execution", that is, "Execution was paused on <event>".
     */ pausedOnPromiseRejection: 'Paused on `promise` rejection',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedOnAssertion: 'Paused on assertion',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedOnDebuggedFunction: 'Paused on debugged function',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedBeforePotentialOutofmemory: 'Paused before potential out-of-memory crash',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedOnCspViolation: 'Paused on CSP violation',
    /**
     *@description Text in Debugger Paused Message of the Sources panel specifying cause of break
     */ trustedTypeSinkViolation: '`Trusted Type` Sink Violation',
    /**
     *@description Text in Debugger Paused Message of the Sources panel specifying cause of break
     */ trustedTypePolicyViolation: '`Trusted Type` Policy Violation',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ pausedOnBreakpoint: 'Paused on breakpoint',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ debuggerPaused: 'Debugger paused',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ subtreeModifications: 'subtree modifications',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ attributeModifications: 'attribute modifications',
    /**
     *@description Text in Debugger Paused Message of the Sources panel
     */ nodeRemoval: 'node removal',
    /**
     *@description Error message text
     *@example {Snag Error} PH1
     */ webglErrorFiredS: 'WebGL Error Fired ({PH1})',
    /**
     *@description Text in DOMDebugger Model
     *@example {"script-src 'self'"} PH1
     */ scriptBlockedDueToContent: 'Script blocked due to Content Security Policy directive: {PH1}'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/sources/DebuggerPausedMessage.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var DebuggerPausedMessage = /*#__PURE__*/ function() {
    "use strict";
    function DebuggerPausedMessage() {
        _class_call_check(this, DebuggerPausedMessage);
        _define_property(this, "elementInternal", void 0);
        _define_property(this, "contentElement", void 0);
        this.elementInternal = document.createElement('div');
        this.elementInternal.classList.add('paused-message');
        this.elementInternal.classList.add('flex-none');
        this.elementInternal.setAttribute('jslog', "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_5__.dialog('debugger-paused')));
        var root = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.UIUtils.createShadowRootWithCoreStyles(this.elementInternal, {
            cssFile: [
                _debuggerPausedMessage_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
            ],
            delegatesFocus: undefined
        });
        this.contentElement = root.createChild('div');
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.ARIAUtils.markAsPoliteLiveRegion(this.elementInternal, false);
    }
    _create_class(DebuggerPausedMessage, [
        {
            key: "element",
            value: function element() {
                return this.elementInternal;
            }
        },
        {
            key: "render",
            value: function render(details, debuggerWorkspaceBinding, breakpointManager) {
                var _this = this;
                return _async_to_generator(function() {
                    var status, errorLike, messageWrapper, eventNameForUI, auxData, auxData1, description, descriptionWithoutStack, auxData2, description1, descriptionWithoutStack1, text, uiLocation, breakpoint, defaultText;
                    function buildWrapper(mainText, subText, title) {
                        var messageWrapper = document.createElement('span');
                        var mainElement = messageWrapper.createChild('div', 'status-main');
                        var mainIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
                        mainIcon.data = {
                            iconName: errorLike ? 'cross-circle-filled' : 'info',
                            color: errorLike ? 'var(--icon-error)' : 'var(--sys-color-on-yellow-container)',
                            width: '16px',
                            height: '16px'
                        };
                        mainElement.appendChild(mainIcon);
                        mainElement.appendChild(document.createTextNode(mainText));
                        if (subText) {
                            var subElement = messageWrapper.createChild('div', 'status-sub monospace');
                            subElement.textContent = subText;
                            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_4__.Tooltip.Tooltip.install(subElement, title || subText);
                        }
                        return messageWrapper;
                    }
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this.contentElement.removeChildren();
                                _this.contentElement.hidden = !details;
                                if (!details) {
                                    return [
                                        2
                                    ];
                                }
                                status = _this.contentElement.createChild('div', 'paused-status');
                                errorLike = details.reason === "exception" /* Protocol.Debugger.PausedEventReason.Exception */  || details.reason === "promiseRejection" /* Protocol.Debugger.PausedEventReason.PromiseRejection */  || details.reason === "assert" /* Protocol.Debugger.PausedEventReason.Assert */  || details.reason === "OOM" /* Protocol.Debugger.PausedEventReason.OOM */ ;
                                if (!(details.reason === "DOM" /* Protocol.Debugger.PausedEventReason.DOM */ )) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    DebuggerPausedMessage.createDOMBreakpointHitMessage(details)
                                ];
                            case 1:
                                messageWrapper = _state.sent();
                                return [
                                    3,
                                    13
                                ];
                            case 2:
                                if (!(details.reason === "EventListener" /* Protocol.Debugger.PausedEventReason.EventListener */ )) return [
                                    3,
                                    3
                                ];
                                eventNameForUI = _class_static_private_method_get(DebuggerPausedMessage, DebuggerPausedMessage, findEventNameForUi).call(DebuggerPausedMessage, details.auxData);
                                messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnEventListener), eventNameForUI);
                                return [
                                    3,
                                    13
                                ];
                            case 3:
                                if (!(details.reason === "XHR" /* Protocol.Debugger.PausedEventReason.XHR */ )) return [
                                    3,
                                    4
                                ];
                                auxData = details.auxData;
                                messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnXhrOrFetch), auxData.url || '');
                                return [
                                    3,
                                    13
                                ];
                            case 4:
                                if (!(details.reason === "exception" /* Protocol.Debugger.PausedEventReason.Exception */ )) return [
                                    3,
                                    5
                                ];
                                auxData1 = details.auxData;
                                description = auxData1.description || auxData1.value || '';
                                descriptionWithoutStack = DebuggerPausedMessage.descriptionWithoutStack(description);
                                messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnException), descriptionWithoutStack, description);
                                return [
                                    3,
                                    13
                                ];
                            case 5:
                                if (!(details.reason === "promiseRejection" /* Protocol.Debugger.PausedEventReason.PromiseRejection */ )) return [
                                    3,
                                    6
                                ];
                                auxData2 = details.auxData;
                                description1 = auxData2.description || auxData2.value || '';
                                descriptionWithoutStack1 = DebuggerPausedMessage.descriptionWithoutStack(description1);
                                messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnPromiseRejection), descriptionWithoutStack1, description1);
                                return [
                                    3,
                                    13
                                ];
                            case 6:
                                if (!(details.reason === "assert" /* Protocol.Debugger.PausedEventReason.Assert */ )) return [
                                    3,
                                    7
                                ];
                                messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnAssertion));
                                return [
                                    3,
                                    13
                                ];
                            case 7:
                                if (!(details.reason === "debugCommand" /* Protocol.Debugger.PausedEventReason.DebugCommand */ )) return [
                                    3,
                                    8
                                ];
                                messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnDebuggedFunction));
                                return [
                                    3,
                                    13
                                ];
                            case 8:
                                if (!(details.reason === "OOM" /* Protocol.Debugger.PausedEventReason.OOM */ )) return [
                                    3,
                                    9
                                ];
                                messageWrapper = buildWrapper(i18nString(UIStrings.pausedBeforePotentialOutofmemory));
                                return [
                                    3,
                                    13
                                ];
                            case 9:
                                if (!(details.reason === "CSPViolation" /* Protocol.Debugger.PausedEventReason.CSPViolation */  && details.auxData && details.auxData['violationType'])) return [
                                    3,
                                    10
                                ];
                                text = details.auxData['violationType'];
                                if (text === "trustedtype-sink-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypeSinkViolation */ ) {
                                    messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnCspViolation), i18nString(UIStrings.trustedTypeSinkViolation));
                                } else if (text === "trustedtype-policy-violation" /* Protocol.DOMDebugger.CSPViolationType.TrustedtypePolicyViolation */ ) {
                                    messageWrapper = buildWrapper(i18nString(UIStrings.pausedOnCspViolation), i18nString(UIStrings.trustedTypePolicyViolation));
                                }
                                return [
                                    3,
                                    13
                                ];
                            case 10:
                                if (!details.callFrames.length) return [
                                    3,
                                    12
                                ];
                                return [
                                    4,
                                    debuggerWorkspaceBinding.rawLocationToUILocation(details.callFrames[0].location())
                                ];
                            case 11:
                                uiLocation = _state.sent();
                                breakpoint = uiLocation ? breakpointManager.findBreakpoint(uiLocation) : null;
                                defaultText = breakpoint ? i18nString(UIStrings.pausedOnBreakpoint) : i18nString(UIStrings.debuggerPaused);
                                messageWrapper = buildWrapper(defaultText);
                                return [
                                    3,
                                    13
                                ];
                            case 12:
                                console.warn('ScriptsPanel paused, but callFrames.length is zero.'); // TODO remove this once we understand this case better
                                _state.label = 13;
                            case 13:
                                status.classList.toggle('error-reason', errorLike);
                                if (messageWrapper) {
                                    status.appendChild(messageWrapper);
                                }
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
            key: "descriptionWithoutStack",
            value: function descriptionWithoutStack(description) {
                var firstCallFrame = /^\s+at\s/m.exec(description);
                return firstCallFrame ? description.substring(0, firstCallFrame.index - 1) : description.substring(0, description.lastIndexOf('\n'));
            }
        },
        {
            key: "createDOMBreakpointHitMessage",
            value: function createDOMBreakpointHitMessage(details) {
                return _async_to_generator(function() {
                    var messageWrapper, domDebuggerModel, data, mainElement, mainIcon, breakpointType, subElement, linkifiedNode, targetNodeLink, messageElement;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                messageWrapper = document.createElement('span');
                                domDebuggerModel = details.debuggerModel.target().model(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerModel);
                                if (!details.auxData || !domDebuggerModel) {
                                    return [
                                        2,
                                        messageWrapper
                                    ];
                                }
                                data = domDebuggerModel.resolveDOMBreakpointData(details.auxData);
                                if (!data) {
                                    return [
                                        2,
                                        messageWrapper
                                    ];
                                }
                                mainElement = messageWrapper.createChild('div', 'status-main');
                                mainIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_3__.Icon.Icon();
                                mainIcon.data = {
                                    iconName: 'info',
                                    color: 'var(--sys-color-on-yellow-container)',
                                    width: '16px',
                                    height: '16px'
                                };
                                mainElement.appendChild(mainIcon);
                                breakpointType = BreakpointTypeNouns.get(data.type);
                                mainElement.appendChild(document.createTextNode(i18nString(UIStrings.pausedOnS, {
                                    PH1: breakpointType ? breakpointType() : String(null)
                                })));
                                subElement = messageWrapper.createChild('div', 'status-sub monospace');
                                return [
                                    4,
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(data.node)
                                ];
                            case 1:
                                linkifiedNode = _state.sent();
                                subElement.appendChild(linkifiedNode);
                                if (!data.targetNode) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(data.targetNode)
                                ];
                            case 2:
                                targetNodeLink = _state.sent();
                                if (data.insertion) {
                                    if (data.targetNode === data.node) {
                                        messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.childSAdded, {
                                            PH1: targetNodeLink
                                        });
                                    } else {
                                        messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.descendantSAdded, {
                                            PH1: targetNodeLink
                                        });
                                    }
                                } else {
                                    messageElement = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getFormatLocalizedString(str_, UIStrings.descendantSRemoved, {
                                        PH1: targetNodeLink
                                    });
                                }
                                subElement.appendChild(document.createElement('br'));
                                subElement.appendChild(messageElement);
                                _state.label = 3;
                            case 3:
                                return [
                                    2,
                                    messageWrapper
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return DebuggerPausedMessage;
}();
function findEventNameForUi(detailsAuxData) {
    if (!detailsAuxData) {
        return '';
    }
    var eventName = detailsAuxData.eventName, webglErrorName = detailsAuxData.webglErrorName, directiveText = detailsAuxData.directiveText, targetName = detailsAuxData.targetName;
    if (eventName === 'instrumentation:webglErrorFired' && webglErrorName) {
        // If there is a hex code of the error, display only this.
        var errorName = webglErrorName.replace(/^.*(0x[0-9a-f]+).*$/i, '$1');
        return i18nString(UIStrings.webglErrorFiredS, {
            PH1: errorName
        });
    }
    if (eventName === 'instrumentation:scriptBlockedByCSP' && directiveText) {
        return i18nString(UIStrings.scriptBlockedDueToContent, {
            PH1: directiveText
        });
    }
    var breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.EventBreakpointsModel.EventBreakpointsManager.instance().resolveEventListenerBreakpoint(detailsAuxData);
    if (breakpoint) {
        // EventBreakpointsManager breakpoints are the only ones with localized names.
        return (0,_CategorizedBreakpointL10n_js__WEBPACK_IMPORTED_MODULE_6__.getLocalizedBreakpointName)(breakpoint.name);
    }
    breakpoint = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_2__.DOMDebuggerModel.DOMDebuggerManager.instance().resolveEventListenerBreakpoint(detailsAuxData);
    if (breakpoint && targetName) {
        // For standard DOM event listeners we prepend the target of the event.
        return targetName + '.' + breakpoint.name;
    }
    var _breakpoint_name;
    return (_breakpoint_name = breakpoint === null || breakpoint === void 0 ? void 0 : breakpoint.name) !== null && _breakpoint_name !== void 0 ? _breakpoint_name : '';
}
var BreakpointTypeNouns = new Map([
    [
        "subtree-modified" /* Protocol.DOMDebugger.DOMBreakpointType.SubtreeModified */ ,
        i18nLazyString(UIStrings.subtreeModifications)
    ],
    [
        "attribute-modified" /* Protocol.DOMDebugger.DOMBreakpointType.AttributeModified */ ,
        i18nLazyString(UIStrings.attributeModifications)
    ],
    [
        "node-removed" /* Protocol.DOMDebugger.DOMBreakpointType.NodeRemoved */ ,
        i18nLazyString(UIStrings.nodeRemoval)
    ]
]); //# sourceMappingURL=DebuggerPausedMessage.js.map


}),
"./panels/sources/debuggerPausedMessage.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2016 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.paused-status {\n  margin: 6px;\n  padding: 4px 10px;\n  border-radius: 10px;\n  background-color: var(--sys-color-yellow-container);\n  color: var(--sys-color-on-yellow-container);\n}\n\n.paused-status.error-reason {\n  background-color: var(--sys-color-surface-error);\n  color: var(--sys-color-on-surface-error);\n}\n\n.status-main {\n  padding-left: 18px;\n  position: relative;\n}\n\n.status-sub:not(:empty) {\n  padding-left: 15px;\n  padding-top: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.paused-status.error-reason .status-sub {\n  color: var(--sys-color-error);\n  line-height: 11px;\n  max-height: 27px;\n  user-select: text;\n}\n\ndevtools-icon {\n  position: absolute;\n  left: -1px;\n  top: -1px;\n}\n\n/*# sourceURL=debuggerPausedMessage.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);