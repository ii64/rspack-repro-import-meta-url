"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_freestyler_components_FreestylerChatUi_js"], {
"./panels/freestyler/components/FreestylerChatUi.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DOGFOOD_INFO: function() { return DOGFOOD_INFO; },
  FOR_TEST: function() { return FOR_TEST; },
  FreestylerChatUi: function() { return FreestylerChatUi; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FreestylerAgent.js */ "./panels/freestyler/FreestylerAgent.js");
/* harmony import */var _freestylerChatUi_css_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./freestylerChatUi.css.js */ "./panels/freestyler/components/freestylerChatUi.css.js");
/* harmony import */var _ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ProvideFeedback.js */ "./panels/freestyler/components/ProvideFeedback.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
        '<div class="chat-message query" jslog=',
        ">",
        "</div>"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "<",
        "\n                  .data=",
        "\n                  @click=",
        "\n                >",
        "</",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        '<div class="chat-loading">Loading...</div>'
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        '\n      <div class="chat-message answer" jslog=',
        ">\n        ",
        "\n        ",
        '\n        <div class="actions">\n          ',
        "\n          ",
        "\n        </div>\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n        <",
        "\n          .data=",
        "\n          @click=",
        "\n        ></",
        ">\n        ",
        ""
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "\n        <",
        "\n          .data=",
        "\n          @click=",
        '\n        ><span class="select-an-element-text">',
        "</span></",
        ">"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n        <",
        '\n          name="dog-paw"\n          class="feedback-icon"\n        ></',
        ">\n        <span>",
        "</span>\n        <span>-</span>\n        <x-link href=",
        '\n          class="link"\n          jslog=',
        ">\n         ",
        "\n        </x-link>"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '\n      <div class="messages-scroll-container">\n        <div class="messages-container">\n          ',
        "\n        </div>\n      </div>\n    "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        '<div class="empty-state-container">\n      <',
        ' name="spark" style="width: 36px; height: 36px;"></',
        ">\n      ",
        "\n    </div>"
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n                    <",
        '\n                      class="step-actions"\n                      aria-label=',
        "\n                      @click=",
        "\n                      .data=",
        "\n                    ></",
        ">"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n                    <",
        '\n                      class="step-actions"\n                      aria-label=',
        "\n                      .data=",
        "\n                    ></",
        ">"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        '\n      <div class="chat-ui">\n        ',
        '\n        <form class="input-form" @submit=',
        '>\n          <div class="input-header">\n            <div class="header-link-container">\n              ',
        '\n            </div>\n            <div class="header-link-container">\n              ',
        '\n            </div>\n          </div>\n          <div class="chat-input-container">\n            <input type="text" class="chat-input" .disabled=',
        "\n              placeholder=",
        "\n              jslog=",
        "\n            >",
        '\n          </div>\n          <span class="chat-input-disclaimer">',
        ' See <x-link class="link" href=',
        ">dogfood terms</x-link>.</span>\n        </form>\n      </div>\n    "
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        '\n      <div class="consent-view">\n        <h2 tabindex="-1">\n          ',
        "\n        </h2>\n        <main>\n          ",
        "\n          <ul>\n            <li>",
        "</li>\n            <li>",
        "</li>\n            <li>",
        '</li>\n            <li>See <x-link class="link" href=',
        ">dogfood terms</x-link>.</li>\n          </ul>\n          <",
        '\n            class="accept-button"\n            @click=',
        "\n            .data=",
        "\n          >",
        "</",
        ">\n        </main>\n      </div>\n    "
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "devtools-freestyler-chat-ui"
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "<",
        "\n      .props=",
        "\n      ></",
        ">"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "<",
        "\n      .data=",
        ">\n    </",
        ">"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        '\n        <div class="action-result">\n          <',
        "\n            .code=",
        "\n            .codeLang=",
        "\n            .displayToolbar=",
        "\n            .displayNotice=",
        "\n          ></",
        '>\n          <div class="js-code-output">',
        "</div>\n        </div>\n      "
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        '<p class="error-step">',
        "</p>"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "<p>",
        "</p>"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _tagged_template_literal([
        '<div\n      class="side-effect-confirmation"\n      jslog=',
        "\n    >\n      <p>",
        "</p>\n      <",
        "\n        .code=",
        "\n        .codeLang=",
        "\n        .displayToolbar=",
        "\n      ></",
        '>\n      <div class="side-effect-buttons-container">\n        <',
        "\n          .data=",
        "\n          @click=",
        "\n          >",
        "</",
        ">\n        <",
        "\n          .data=",
        "\n          @click=",
        "\n        >",
        "</",
        ">\n      </div>\n    </div>"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}












var DOGFOOD_FEEDBACK_URL = 'https://goo.gle/freestyler-feedback';
var DOGFOOD_INFO = 'https://goo.gle/freestyler-dogfood';
/*
  * TODO(nvitkov): b/346933425
  * Temporary string that should not be translated
  * as they may change often during development.
  */ var UIStringsTemp = {
    /**
     *@description Placeholder text for the chat UI input.
     */ inputPlaceholder: 'Ask a question about the selected element',
    /**
     *@description Disclaimer text right after the chat input.
     */ inputDisclaimer: 'Chat messages and data from this page will be sent to Google, reviewed by humans, and used to improve the feature. Do not use on pages with personal or sensitive information. Freestyler may display inaccurate information.',
    /**
     *@description Title for the send icon button.
     */ sendButtonTitle: 'Send',
    /**
     *@description Title for the cancel icon button.
     */ cancelButtonTitle: 'Cancel',
    /**
     *@description Label for the "select an element" button.
     */ selectAnElement: 'Select an element',
    /**
     *@description Text for the empty state of the Freestyler panel.
     */ emptyStateText: 'How can I help you?',
    /**
     * @description The title of the button that allows submitting positive
     * feedback about the response for freestyler.
     */ thumbsUp: 'Thumbs up',
    /**
     * @description The title of the button that allows submitting negative
     * feedback about the response for freestyler.
     */ thumbsDown: 'Thumbs down',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */ notLoggedIn: 'This feature is only available when you sign into Chrome with your Google account.',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */ syncIsOff: 'This feature requires you to turn on Chrome sync.',
    /**
     * @description Message shown when the user is offline.
     */ offline: 'Check your internet connection and try again.',
    /**
     *@description Heading for the consent view.
     */ consentScreenHeading: 'Things to consider',
    /**
     *@description Title of the button for accepting in the consent screen.
     */ acceptButtonTitle: 'Accept',
    /**
     *@description Consent view main text
     */ consentTextAiDisclaimer: 'This feature uses AI and might produce inaccurate information.',
    /**
     *@description Consent view data collection text
     */ consentTextDataDisclaimer: 'Your inputs and the information from the page you are using this feature for are sent to Google.',
    /**
     *@description Consent view data collection text
     */ consentTextDoNotUseDisclaimer: 'Do not use on pages with personal or sensitive information.',
    /**
     *@description Consent view data visibility text
     */ consentTextVisibilityDisclaimer: 'Data may be seen by human reviewers and can be used to improve this feature.',
    /**
     * @description Side effect confirmation text
     */ sideEffectConfirmationDescription: 'The code contains side effects. Do you wish to continue?',
    /**
     * @description Side effect confirmation text for the button that says "Execute"
     */ positiveSideEffectConfirmation: 'Execute',
    /**
     * @description Side effect confirmation text for the button that says "Cancel"
     */ negativeSideEffectConfirmation: 'Cancel',
    /**
     *@description Name of the dogfood program.
     */ dogfood: 'Dogfood',
    /**
     *@description Link text for redirecting to feedback form
     */ feedbackLink: 'Send Feedback',
    /**
     *@description Button text for "Fix this issue" button
     */ fixThisIssue: 'Fix this issue'
};
// const str_ = i18n.i18n.registerUIStrings('panels/freestyler/components/FreestylerChatUi.ts', UIStrings);
// const i18nString = i18n.i18n.getLocalizedString.bind(undefined, str_);
/* eslint-disable  rulesdir/l10n_i18nString_call_only_with_uistrings */ var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.lockedString;
function getInputPlaceholderString(aidaAvailability) {
    switch(aidaAvailability){
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE:
            return i18nString(UIStringsTemp.inputPlaceholder);
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL:
            return i18nString(UIStringsTemp.notLoggedIn);
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC:
            return i18nString(UIStringsTemp.syncIsOff);
        case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET:
            return i18nString(UIStringsTemp.offline);
    }
}
// The model returns multiline code blocks in an erroneous way with the language being in new line.
// This renderer takes that into account and correctly updates the parsed multiline token with the language
// correctly identified and stripped from the content.
// Example:
// ```
// css <-- This should have been on the first line.
// * {
//   color: red;
// }
// ```
var MarkdownRendererWithCodeBlock = /*#__PURE__*/ function(_MarkdownView_MarkdownView_MarkdownInsightRenderer) {
    "use strict";
    _inherits(MarkdownRendererWithCodeBlock, _MarkdownView_MarkdownView_MarkdownInsightRenderer);
    var _super = _create_super(MarkdownRendererWithCodeBlock);
    function MarkdownRendererWithCodeBlock() {
        _class_call_check(this, MarkdownRendererWithCodeBlock);
        return _super.apply(this, arguments);
    }
    _create_class(MarkdownRendererWithCodeBlock, [
        {
            key: "templateForToken",
            value: function templateForToken(token) {
                if (token.type === 'code') {
                    var _lines_;
                    var lines = token.text.split('\n');
                    if (((_lines_ = lines[0]) === null || _lines_ === void 0 ? void 0 : _lines_.trim()) === 'css') {
                        token.lang = 'css';
                        token.text = lines.slice(1).join('\n');
                    }
                }
                return _get(_get_prototype_of(MarkdownRendererWithCodeBlock.prototype), "templateForToken", this).call(this, token);
            }
        }
    ]);
    return MarkdownRendererWithCodeBlock;
}(_ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.MarkdownView.MarkdownInsightRenderer);
var _shadow = /*#__PURE__*/ new WeakMap(), _markdownRenderer = /*#__PURE__*/ new WeakMap(), _props = /*#__PURE__*/ new WeakMap(), _handleSubmit = /*#__PURE__*/ new WeakMap(), _handleCancel = /*#__PURE__*/ new WeakMap(), _renderRateButtons = /*#__PURE__*/ new WeakSet(), _renderTextAsMarkdown = /*#__PURE__*/ new WeakSet(), _renderStep = /*#__PURE__*/ new WeakSet(), _renderSideEffectConfirmationUi = /*#__PURE__*/ new WeakSet(), _renderChatMessage = /*#__PURE__*/ new WeakMap(), _renderSelectAnElement = /*#__PURE__*/ new WeakMap(), _renderFeedbackLink = /*#__PURE__*/ new WeakMap(), _renderMessages = /*#__PURE__*/ new WeakMap(), _renderEmptyState = /*#__PURE__*/ new WeakMap(), _renderChatUi = /*#__PURE__*/ new WeakMap(), _renderConsentView = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var FreestylerChatUi = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(FreestylerChatUi, HTMLElement1);
    var _super = _create_super(FreestylerChatUi);
    function FreestylerChatUi(props) {
        _class_call_check(this, FreestylerChatUi);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _renderRateButtons);
        _class_private_method_init(_assert_this_initialized(_this), _renderTextAsMarkdown);
        _class_private_method_init(_assert_this_initialized(_this), _renderStep);
        _class_private_method_init(_assert_this_initialized(_this), _renderSideEffectConfirmationUi);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _markdownRenderer, {
            writable: true,
            value: new MarkdownRendererWithCodeBlock()
        });
        _class_private_field_init(_assert_this_initialized(_this), _props, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleSubmit, {
            writable: true,
            value: function(ev) {
                ev.preventDefault();
                var input = _class_private_field_get(_this, _shadow).querySelector('.chat-input');
                if (!input || !input.value) {
                    return;
                }
                _class_private_field_get(_this, _props).onTextSubmit(input.value);
                input.value = '';
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _handleCancel, {
            writable: true,
            value: function(ev) {
                ev.preventDefault();
                if (!_class_private_field_get(_this, _props).isLoading) {
                    return;
                }
                _class_private_field_get(_this, _props).onCancelClick();
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderChatMessage, {
            writable: true,
            value: function(message, param) {
                var isLast = param.isLast;
                if (message.entity === "user" /* ChatMessageEntity.USER */ ) {
                    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('question'), message.text);
                }
                var shouldShowFixThisIssueButton = !_class_private_field_get(_this, _props).isLoading && isLast && message.suggestingFix;
                var shouldShowRating = !isLast || !_class_private_field_get(_this, _props).confirmSideEffectDialog && isLast;
                var shouldShowLoading = _class_private_field_get(_this, _props).isLoading && isLast && !_class_private_field_get(_this, _props).confirmSideEffectDialog;
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject3(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('answer'), message.steps.map(function(step) {
                    return _class_private_method_get(_this, _renderStep, renderStep).call(_assert_this_initialized(_this), step);
                }), _class_private_field_get(_this, _props).confirmSideEffectDialog && isLast ? _class_private_method_get(_this, _renderSideEffectConfirmationUi, renderSideEffectConfirmationUi).call(_assert_this_initialized(_this), _class_private_field_get(_this, _props).confirmSideEffectDialog) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing, shouldShowRating && message.rpcId !== undefined ? _class_private_method_get(_this, _renderRateButtons, renderRateButtons).call(_assert_this_initialized(_this), message.rpcId) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing, shouldShowFixThisIssueButton ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject1(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, {
                    variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
                    jslogContext: 'fix-this-issue'
                }, _class_private_field_get(_this, _props).onFixThisIssueClick, i18nString(UIStringsTemp.fixThisIssue), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing, shouldShowLoading ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject2()) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.nothing);
            // clang-format on
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderSelectAnElement, {
            writable: true,
            value: function() {
                var data = {
                    size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                    iconName: 'select-element',
                    toggledIconName: 'select-element',
                    toggleType: "primary-toggle" /* Buttons.Button.ToggleType.PRIMARY */ ,
                    toggled: _class_private_field_get(_this, _props).inspectElementToggled,
                    title: i18nString(UIStringsTemp.selectAnElement),
                    jslogContext: 'select-element'
                };
                // clang-format off
                return _class_private_field_get(_this, _props).selectedNode ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject4(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, _object_spread({
                    variant: "icon_toggle" /* Buttons.Button.Variant.ICON_TOGGLE */ 
                }, data), _class_private_field_get(_this, _props).onInspectElementClick, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.Directives.until(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Linkifier.Linkifier.linkify(_class_private_field_get(_this, _props).selectedNode))) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject5(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, _object_spread({
                    variant: "text" /* Buttons.Button.Variant.TEXT */ 
                }, data), _class_private_field_get(_this, _props).onInspectElementClick, i18nString(UIStringsTemp.selectAnElement), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName);
            // clang-format on
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderFeedbackLink, {
            writable: true,
            value: function() {
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject6(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, i18nString(UIStringsTemp.dogfood), DOGFOOD_FEEDBACK_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.action('freestyler.feedback').track({
                    click: true
                }), i18nString(UIStringsTemp.feedbackLink));
            // clang-format on
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderMessages, {
            writable: true,
            value: function() {
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject7(), _class_private_field_get(_this, _props).messages.map(function(message, _, array) {
                    return _class_private_field_get(_this, _renderChatMessage).call(_assert_this_initialized(_this), message, {
                        isLast: array.at(-1) === message
                    });
                }));
            // clang-format on
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderEmptyState, {
            writable: true,
            value: function() {
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject8(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.Icon.Icon.litTagName, i18nString(UIStringsTemp.emptyStateText));
            // clang-format on
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderChatUi, {
            writable: true,
            value: function() {
                // TODO(ergunsh): Show a better UI for the states where Aida client is not available.
                var isAidaAvailable = _class_private_field_get(_this, _props).aidaAvailability === _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE;
                var isInputDisabled = !Boolean(_class_private_field_get(_this, _props).selectedNode) || !isAidaAvailable || Boolean(_class_private_field_get(_this, _props).confirmSideEffectDialog);
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject11(), _class_private_field_get(_this, _props).messages.length > 0 ? _class_private_field_get(_this, _renderMessages).call(_assert_this_initialized(_this)) : _class_private_field_get(_this, _renderEmptyState).call(_assert_this_initialized(_this)), _class_private_field_get(_assert_this_initialized(_this), _handleSubmit), _class_private_field_get(_this, _renderSelectAnElement).call(_assert_this_initialized(_this)), _class_private_field_get(_this, _renderFeedbackLink).call(_assert_this_initialized(_this)), isInputDisabled, getInputPlaceholderString(_class_private_field_get(_this, _props).aidaAvailability), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.textField('query').track({
                    change: true
                }), _class_private_field_get(_this, _props).isLoading ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject9(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, i18nString(UIStringsTemp.cancelButtonTitle), _class_private_field_get(_assert_this_initialized(_this), _handleCancel), {
                    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                    size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                    disabled: isInputDisabled,
                    iconName: 'stop',
                    title: i18nString(UIStringsTemp.cancelButtonTitle),
                    jslogContext: 'stop'
                }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject10(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, i18nString(UIStringsTemp.sendButtonTitle), {
                    type: 'submit',
                    variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                    size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                    disabled: isInputDisabled,
                    iconName: 'send',
                    title: i18nString(UIStringsTemp.sendButtonTitle),
                    jslogContext: 'send'
                }, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName), i18nString(UIStringsTemp.inputDisclaimer), DOGFOOD_INFO);
            // clang-format on
            }
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderConsentView, {
            writable: true,
            value: function() {
                // clang-format off
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject12(), i18nString(UIStringsTemp.consentScreenHeading), i18nString(UIStringsTemp.consentTextAiDisclaimer), i18nString(UIStringsTemp.consentTextDataDisclaimer), i18nString(UIStringsTemp.consentTextVisibilityDisclaimer), i18nString(UIStringsTemp.consentTextDoNotUseDisclaimer), DOGFOOD_INFO, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, _class_private_field_get(_this, _props).onAcceptConsentClick, {
                    variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                    jslogContext: 'accept'
                }, i18nString(UIStringsTemp.acceptButtonTitle), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName);
            // clang-format on
            }
        });
        _class_private_field_set(_assert_this_initialized(_this), _props, props);
        return _this;
    }
    _create_class(FreestylerChatUi, [
        {
            key: "props",
            set: function set(props) {
                _class_private_field_set(this, _props, props);
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _freestylerChatUi_css_js__WEBPACK_IMPORTED_MODULE_10__["default"]
                ];
                _class_private_method_get(this, _render, render).call(this);
            }
        },
        {
            key: "focusTextInput",
            value: function focusTextInput() {
                var input = _class_private_field_get(this, _shadow).querySelector('.chat-input');
                if (!input) {
                    return;
                }
                input.focus();
            }
        },
        {
            key: "scrollToLastMessage",
            value: function scrollToLastMessage() {
                var message = _class_private_field_get(this, _shadow).querySelector('.chat-message:last-child');
                if (!message) {
                    return;
                }
                message.scrollIntoViewIfNeeded();
            }
        }
    ]);
    return FreestylerChatUi;
}(_wrap_native_super(HTMLElement));
_define_property(FreestylerChatUi, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.literal(_templateObject13()));
function renderRateButtons(rpcId) {
    var _this = this;
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject14(), _ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__.ProvideFeedback.litTagName, {
        onFeedbackSubmit: function(rating, feedback) {
            _class_private_field_get(_this, _props).onFeedbackSubmit(rpcId, rating, feedback);
        },
        canShowFeedbackForm: _class_private_field_get(this, _props).canShowFeedbackForm
    }, _ProvideFeedback_js__WEBPACK_IMPORTED_MODULE_11__.ProvideFeedback.litTagName);
// clang-format on
}
function renderTextAsMarkdown(text) {
    var tokens = [];
    try {
        tokens = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_3__.Marked.lexer(text);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var token = _step.value;
                // Try to render all the tokens to make sure that
                // they all have a template defined for them. If there
                // isn't any template defined for a token, we'll fallback
                // to rendering the text as plain text instead of markdown.
                _class_private_field_get(this, _markdownRenderer).renderToken(token);
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
    } catch (err) {
        // The tokens were not parsed correctly or
        // one of the tokens are not supported, so we
        // continue to render this as text.
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject15(), text);
    }
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject16(), _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.MarkdownView.MarkdownView.litTagName, {
        tokens: tokens,
        renderer: _class_private_field_get(this, _markdownRenderer)
    }, _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.MarkdownView.MarkdownView.litTagName);
// clang-format on
}
function renderStep(step) {
    if (step.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_9__.Step.ACTION) {
        // clang-format off
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject17(), _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName, step.code.trim(), 'js', false, true, _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName, step.output);
    // clang-format on
    }
    if (step.step === _FreestylerAgent_js__WEBPACK_IMPORTED_MODULE_9__.Step.ERROR) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject18(), _class_private_method_get(this, _renderTextAsMarkdown, renderTextAsMarkdown).call(this, step.text));
    }
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject19(), _class_private_method_get(this, _renderTextAsMarkdown, renderTextAsMarkdown).call(this, step.text));
}
function renderSideEffectConfirmationUi(confirmSideEffectDialog) {
    // clang-format off
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.html(_templateObject20(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.section('side-effect-confirmation'), i18nString(UIStringsTemp.sideEffectConfirmationDescription), _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName, confirmSideEffectDialog.code, 'js', false, _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_6__.CodeBlock.CodeBlock.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, {
        variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
        jslogContext: 'accept-execute-code'
    }, function() {
        return confirmSideEffectDialog.onAnswer(true);
    }, i18nString(UIStringsTemp.positiveSideEffectConfirmation), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName, {
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        jslogContext: 'decline-execute-code'
    }, function() {
        return confirmSideEffectDialog.onAnswer(false);
    }, i18nString(UIStringsTemp.negativeSideEffectConfirmation), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_4__.Button.Button.litTagName);
// clang-format on
}
function render() {
    switch(_class_private_field_get(this, _props).state){
        case "chat-view" /* State.CHAT_VIEW */ :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_class_private_field_get(this, _renderChatUi).call(this), _class_private_field_get(this, _shadow), {
                host: this
            });
            break;
        case "consent-view" /* State.CONSENT_VIEW */ :
            _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_7__.render(_class_private_field_get(this, _renderConsentView).call(this), _class_private_field_get(this, _shadow), {
                host: this
            });
            break;
    }
}
var FOR_TEST = {
    MarkdownRendererWithCodeBlock: MarkdownRendererWithCodeBlock
};
customElements.define('devtools-freestyler-chat-ui', FreestylerChatUi); //# sourceMappingURL=FreestylerChatUi.js.map


}),
"./panels/freestyler/components/freestylerChatUi.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2024 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n:host {\n  width: 100%;\n  height: 100%;\n  user-select: text;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.chat-ui {\n  width: 100%;\n  height: 100%;\n  max-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.input-form {\n  display: flex;\n  flex-direction: column;\n  padding: var(--sys-size-8) var(--sys-size-4) 0 var(--sys-size-4);\n  max-width: 720px;\n  width: 100%;\n  margin: 0 auto;\n}\n\n.chat-input-container {\n  margin: var(--sys-size-3) 0;\n  padding: 0 2px;\n  border-radius: 4px;\n  border: 1px solid var(--sys-color-neutral-outline);\n  width: 100%;\n  display: flex;\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.chat-input {\n  border: 0;\n  height: var(--sys-size-11);\n  padding: 0 6px;\n  flex-grow: 1;\n  color: var(--sys-color-on-surface);\n  background-color: var(--sys-color-cdt-base-container);\n}\n\n.chat-input:focus-visible {\n  outline: none;\n}\n\n.chat-input-container:has(.chat-input:focus-visible) {\n  outline: 1px solid var(--sys-color-primary);\n}\n\n.chat-input::placeholder {\n  color: var(--sys-color-state-disabled);\n}\n\n.chat-input-disclaimer {\n  text-align: center;\n  color: var(--sys-color-on-surface-subtle);\n  margin-bottom: var(--sys-size-4);\n}\n\n.messages-container {\n  margin: var(--sys-size-6) auto 0 auto;\n  max-width: 720px;\n  padding: 0 var(--sys-size-4);\n}\n\n.messages-scroll-container {\n  overflow: overlay;\n  flex-grow: 1;\n}\n\n.chat-message {\n  user-select: text;\n  cursor: initial;\n  width: fit-content;\n  padding: 8px var(--sys-size-8);\n  font-size: 12px;\n  border-radius: var(--sys-size-6);\n  word-break: break-word;\n\n  &:not(:first-of-type) {\n    margin-top: var(--sys-size-6);\n  }\n\n  &.query {\n    max-width: 320px;\n    color: var(--sys-color-on-surface);\n    background: var(--sys-color-surface2);\n    margin-left: auto;\n  }\n\n  &.answer {\n    max-width: 440px;\n    color: var(--sys-color-on-surface);\n    background: var(--sys-color-surface2);\n  }\n\n  & .chat-loading {\n    margin: 4px 0;\n    padding: 4px 0;\n  }\n\n  & .actions {\n    display: flex;\n    gap: var(--sys-size-8);\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n}\n\n.input-header {\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2px;\n  line-height: 20px;\n\n  & .feedback-icon {\n    width: var(--sys-size-8);\n    height: var(--sys-size-8);\n  }\n\n  & .header-link-container {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--sys-size-2);\n  }\n}\n\n.link {\n  color: var(--text-link);\n  text-decoration: underline;\n}\n\n.select-an-element-text {\n  margin-left: 2px;\n}\n\n.empty-state-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  font-size: 16px;\n  opacity: 70%;\n}\n\n.action-result {\n  margin: 8px 0;\n}\n\n.js-code-output {\n  margin-top: -8px;\n  white-space: pre;\n  max-width: 100%;\n  overflow: auto;\n  scrollbar-width: none;\n  padding: 4px 6px;\n  background-color: var(--sys-color-surface3);\n  color: var(--sys-color-on-surface);\n  font-size: 10px;\n  font-family: var(--source-code-font-family);\n}\n\n.error-step {\n  color: var(--sys-color-error);\n}\n\n.side-effect-confirmation {\n  background: var(--color-background);\n  padding: 24px;\n  border-radius: var(--sys-size-6);\n  margin-bottom: 8px;\n\n  p {\n    margin: 0;\n    margin-bottom: 12px;\n    padding: 0;\n  }\n}\n\n.side-effect-buttons-container {\n  margin-top: 8px;\n\n  devtools-button {\n    margin-top: 4px;\n  }\n}\n\n.consent-view {\n  padding: 24px;\n  text-wrap: pretty;\n\n  .accept-button {\n    margin-top: 8px;\n  }\n\n  ul {\n    padding: 0 13px;\n  }\n\n  h2 {\n    font-weight: 500;\n  }\n}\n\n/*# sourceURL=./components/freestylerChatUi.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/markdown_view/markdown_view.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CodeBlock: function() { return /* reexport module object */ _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__; },
  MarkdownImage: function() { return /* reexport module object */ _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__; },
  MarkdownImagesMap: function() { return /* reexport module object */ _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__; },
  MarkdownLink: function() { return /* reexport module object */ _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__; },
  MarkdownLinksMap: function() { return /* reexport module object */ _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__; },
  MarkdownView: function() { return /* reexport module object */ _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__; }
});
/* harmony import */var _CodeBlock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodeBlock.js */ "./ui/components/markdown_view/CodeBlock.js");
/* harmony import */var _MarkdownImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MarkdownImage.js */ "./ui/components/markdown_view/MarkdownImage.js");
/* harmony import */var _MarkdownImagesMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MarkdownImagesMap.js */ "./ui/components/markdown_view/MarkdownImagesMap.js");
/* harmony import */var _MarkdownLink_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MarkdownLink.js */ "./ui/components/markdown_view/MarkdownLink.js");
/* harmony import */var _MarkdownLinksMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MarkdownLinksMap.js */ "./ui/components/markdown_view/MarkdownLinksMap.js");
/* harmony import */var _MarkdownView_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MarkdownView.js */ "./ui/components/markdown_view/MarkdownView.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






 //# sourceMappingURL=markdown_view.js.map


}),

}]);