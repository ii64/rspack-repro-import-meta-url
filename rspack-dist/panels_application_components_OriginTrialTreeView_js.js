"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_application_components_OriginTrialTreeView_js"], {
"./panels/application/components/OriginTrialTreeView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Badge: function() { return Badge; },
  OriginTrialTokenRows: function() { return OriginTrialTokenRows; },
  OriginTrialTreeView: function() { return OriginTrialTreeView; }
});
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ui/components/adorners/adorners.js */ "./ui/components/adorners/adorners.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/components/tree_outline/tree_outline.js */ "./ui/components/tree_outline/tree_outline.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _badge_css_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./badge.css.js */ "./panels/application/components/badge.css.js");
/* harmony import */var _originTrialTokenRows_css_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./originTrialTokenRows.css.js */ "./panels/application/components/originTrialTokenRows.css.js");
/* harmony import */var _originTrialTreeView_css_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./originTrialTreeView.css.js */ "./panels/application/components/originTrialTreeView.css.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _array_like_to_array(arr, len) {
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
function _templateObject() {
    var data = _tagged_template_literal([
        "devtools-resources-origin-trial-tree-view-badge"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "\n      ",
        "\n    "
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "\n        <",
        " .data=",
        "></",
        ">\n      "
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "\n        ",
        "\n        <",
        " .data=",
        "></",
        ">\n        ",
        "\n      "
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "\n        <",
        " .data=",
        "></",
        ">\n      "
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "",
        " ",
        ""
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "\n    <",
        " .data=",
        ">\n    </",
        ">\n    "
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        '\n        <div style="overflow-wrap: break-word;">\n          ',
        "\n        </div>\n        "
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "",
        ""
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "\n        <div class=",
        ">\n          ",
        "\n        </div>"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "devtools-resources-origin-trial-token-rows"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "\n          <",
        " .data=",
        "></",
        ">"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        '\n          <div class="key">',
        '</div>\n          <div class="value">',
        "</div>\n          "
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        '\n      <div class="content">\n        ',
        "\n      </div>\n    "
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "devtools-resources-origin-trial-tree-view"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        '\n    <span class="status-badge">\n      <',
        "\n          .data=",
        "\n        >\n      </",
        ">\n      <span>",
        "</span>\n    </span>"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "\n      <",
        " .data=",
        ">\n      </",
        ">\n    "
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}








var UIStrings = {
    /**
     *@description Label for the 'origin' field in a parsed Origin Trial Token.
     */ origin: 'Origin',
    /**
     *@description Label for `trialName` field in a parsed Origin Trial Token.
     * This field is only shown when token has unknown trial name as the token
     * will be put into 'UNKNOWN' group.
     */ trialName: 'Trial Name',
    /**
     *@description Label for `expiryTime` field in a parsed Origin Trial Token.
     */ expiryTime: 'Expiry Time',
    /**
     *@description Label for `usageRestriction` field in a parsed Origin Trial Token.
     */ usageRestriction: 'Usage Restriction',
    /**
     *@description Label for `isThirdParty` field in a parsed Origin Trial Token.
     */ isThirdParty: 'Third Party',
    /**
     *@description Label for a field containing info about an Origin Trial Token's `matchSubDomains` field.
     *An Origin Trial Token contains an origin URL. The `matchSubDomains` field describes whether the token
     *only applies to the origin URL or to all subdomains of the origin URL as well.
     *The field contains either 'true' or 'false'.
     */ matchSubDomains: 'Subdomain Matching',
    /**
     *@description Label for the raw(= encoded / not human-readable) Origin Trial Token.
     */ rawTokenText: 'Raw Token',
    /**
     *@description Label for `status` field in an Origin Trial Token.
     */ status: 'Token Status',
    /**
     *@description Label for tokenWithStatus node.
     */ token: 'Token',
    /**
     *@description Label for a badge showing the number of Origin Trial Tokens. This number is always greater than 1.
     *@example {2} PH1
     */ tokens: '{PH1} tokens',
    /**
     *@description Label shown when there are no Origin Trial Tokens in the Frame view of the Application panel.
     */ noTrialTokens: 'No trial tokens'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.registerUIStrings('panels/application/components/OriginTrialTreeView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.i18n.getLocalizedString.bind(undefined, str_);
var _shadow = /*#__PURE__*/ new WeakMap(), _adorner = /*#__PURE__*/ new WeakMap(), _render = /*#__PURE__*/ new WeakSet();
var Badge = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(Badge, HTMLElement1);
    var _super = _create_super(Badge);
    function Badge() {
        _class_call_check(this, Badge);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _adorner, {
            writable: true,
            value: new _ui_components_adorners_adorners_js__WEBPACK_IMPORTED_MODULE_1__.Adorner.Adorner()
        });
        return _this;
    }
    _create_class(Badge, [
        {
            key: "data",
            set: function set(data) {
                _class_private_method_get(this, _render, render).call(this, data);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _badge_css_js__WEBPACK_IMPORTED_MODULE_5__["default"]
                ];
            }
        }
    ]);
    return Badge;
}(_wrap_native_super(HTMLElement));
_define_property(Badge, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject()));
function render(data) {
    var adornerContent = document.createElement('span');
    adornerContent.textContent = data.badgeContent;
    _class_private_field_get(this, _adorner).data = {
        name: 'badge',
        content: adornerContent
    };
    _class_private_field_get(this, _adorner).classList.add("badge-".concat(data.style));
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject1(), _class_private_field_get(this, _adorner)), _class_private_field_get(this, _shadow), {
        host: this
    });
}
customElements.define('devtools-resources-origin-trial-tree-view-badge', Badge);
function constructOriginTrialTree(originTrial) {
    return {
        treeNodeData: originTrial,
        id: 'OriginTrialTreeNode#' + originTrial.trialName,
        children: /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    originTrial.tokensWithStatus.length > 1 ? originTrial.tokensWithStatus.map(constructTokenNode) : constructTokenDetailsNodes(originTrial.tokensWithStatus[0])
                ];
            });
        }),
        renderer: function(node) {
            var trial = node.treeNodeData;
            var tokenCountBadge = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject2(), Badge.litTagName, {
                badgeContent: i18nString(UIStrings.tokens, {
                    PH1: trial.tokensWithStatus.length
                }),
                style: 'secondary'
            }, Badge.litTagName);
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject3(), trial.trialName, Badge.litTagName, {
                badgeContent: trial.status,
                style: trial.status === "Enabled" /* Protocol.Page.OriginTrialStatus.Enabled */  ? 'success' : 'error'
            }, Badge.litTagName, trial.tokensWithStatus.length > 1 ? tokenCountBadge : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing);
        }
    };
}
function constructTokenNode(token) {
    return {
        treeNodeData: token.status,
        id: 'TokenNode#' + token.rawTokenText,
        children: /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    constructTokenDetailsNodes(token)
                ];
            });
        }),
        renderer: function(node, state) {
            var tokenStatus = node.treeNodeData;
            var statusBadge = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject4(), Badge.litTagName, {
                badgeContent: tokenStatus,
                style: tokenStatus === "Success" /* Protocol.Page.OriginTrialTokenStatus.Success */  ? 'success' : 'error'
            }, Badge.litTagName);
            // Only display token status for convenience when the node is not expanded.
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject5(), i18nString(UIStrings.token), state.isExpanded ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.nothing : statusBadge);
        }
    };
}
function renderTokenDetails(node) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject6(), OriginTrialTokenRows.litTagName, {
        node: node
    }, OriginTrialTokenRows.litTagName);
}
function constructTokenDetailsNodes(token) {
    return [
        {
            treeNodeData: token,
            id: 'TokenDetailsNode#' + token.rawTokenText,
            renderer: renderTokenDetails
        },
        constructRawTokenTextNode(token.rawTokenText)
    ];
}
function constructRawTokenTextNode(tokenText) {
    return {
        treeNodeData: i18nString(UIStrings.rawTokenText),
        id: 'TokenRawTextContainerNode#' + tokenText,
        children: /*#__PURE__*/ _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                return [
                    2,
                    [
                        {
                            treeNodeData: tokenText,
                            id: 'TokenRawTextNode#' + tokenText,
                            renderer: function(data) {
                                var _$tokenText = data.treeNodeData;
                                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject7(), _$tokenText);
                            }
                        }
                    ]
                ];
            });
        })
    };
}
function defaultRenderer(node) {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject8(), String(node.treeNodeData));
}
var _shadow1 = /*#__PURE__*/ new WeakMap(), _tokenWithStatus = /*#__PURE__*/ new WeakMap(), _parsedTokenDetails = /*#__PURE__*/ new WeakMap(), _dateFormatter = /*#__PURE__*/ new WeakMap(), _renderTokenField = /*#__PURE__*/ new WeakMap(), _setTokenFields = /*#__PURE__*/ new WeakSet(), _render1 = /*#__PURE__*/ new WeakSet();
var OriginTrialTokenRows = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(OriginTrialTokenRows, HTMLElement1);
    var _super = _create_super(OriginTrialTokenRows);
    function OriginTrialTokenRows() {
        _class_call_check(this, OriginTrialTokenRows);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _setTokenFields);
        _class_private_method_init(_assert_this_initialized(_this), _render1);
        _class_private_field_init(_assert_this_initialized(_this), _shadow1, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _tokenWithStatus, {
            writable: true,
            value: null
        });
        _class_private_field_init(_assert_this_initialized(_this), _parsedTokenDetails, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _dateFormatter, {
            writable: true,
            value: new Intl.DateTimeFormat(_core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_0__.DevToolsLocale.DevToolsLocale.instance().locale, {
                dateStyle: 'long',
                timeStyle: 'long'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderTokenField, {
            writable: true,
            value: function(fieldValue, hasError) {
                return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject9(), _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.Directives.ifDefined(hasError ? 'error-text' : undefined), fieldValue);
            }
        });
        return _this;
    }
    _create_class(OriginTrialTokenRows, [
        {
            key: "data",
            set: function set(data) {
                _class_private_field_set(this, _tokenWithStatus, data.node.treeNodeData);
                _class_private_method_get(this, _setTokenFields, setTokenFields).call(this);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow1).adoptedStyleSheets = [
                    _originTrialTokenRows_css_js__WEBPACK_IMPORTED_MODULE_6__["default"]
                ];
                _class_private_method_get(this, _render1, render1).call(this);
            }
        }
    ]);
    return OriginTrialTokenRows;
}(_wrap_native_super(HTMLElement));
_define_property(OriginTrialTokenRows, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject10()));
function setTokenFields() {
    var _$_class_private_field_get;
    if (!((_$_class_private_field_get = _class_private_field_get(this, _tokenWithStatus)) === null || _$_class_private_field_get === void 0 ? void 0 : _$_class_private_field_get.parsedToken)) {
        return;
    }
    _class_private_field_set(this, _parsedTokenDetails, [
        {
            name: i18nString(UIStrings.origin),
            value: _class_private_field_get(this, _renderTokenField).call(this, _class_private_field_get(this, _tokenWithStatus).parsedToken.origin, _class_private_field_get(this, _tokenWithStatus).status === "WrongOrigin" /* Protocol.Page.OriginTrialTokenStatus.WrongOrigin */ )
        },
        {
            name: i18nString(UIStrings.expiryTime),
            value: _class_private_field_get(this, _renderTokenField).call(this, _class_private_field_get(this, _dateFormatter).format(_class_private_field_get(this, _tokenWithStatus).parsedToken.expiryTime * 1000), _class_private_field_get(this, _tokenWithStatus).status === "Expired" /* Protocol.Page.OriginTrialTokenStatus.Expired */ )
        },
        {
            name: i18nString(UIStrings.usageRestriction),
            value: _class_private_field_get(this, _renderTokenField).call(this, _class_private_field_get(this, _tokenWithStatus).parsedToken.usageRestriction)
        },
        {
            name: i18nString(UIStrings.isThirdParty),
            value: _class_private_field_get(this, _renderTokenField).call(this, _class_private_field_get(this, _tokenWithStatus).parsedToken.isThirdParty.toString())
        },
        {
            name: i18nString(UIStrings.matchSubDomains),
            value: _class_private_field_get(this, _renderTokenField).call(this, _class_private_field_get(this, _tokenWithStatus).parsedToken.matchSubDomains.toString())
        }
    ]);
    if (_class_private_field_get(this, _tokenWithStatus).status === "UnknownTrial" /* Protocol.Page.OriginTrialTokenStatus.UnknownTrial */ ) {
        _class_private_field_set(this, _parsedTokenDetails, [
            {
                name: i18nString(UIStrings.trialName),
                value: _class_private_field_get(this, _renderTokenField).call(this, _class_private_field_get(this, _tokenWithStatus).parsedToken.trialName)
            }
        ].concat(_to_consumable_array(_class_private_field_get(this, _parsedTokenDetails))));
    }
}
function render1() {
    if (!_class_private_field_get(this, _tokenWithStatus)) {
        return;
    }
    var tokenDetails = [
        {
            name: i18nString(UIStrings.status),
            value: _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject11(), Badge.litTagName, {
                badgeContent: _class_private_field_get(this, _tokenWithStatus).status,
                style: _class_private_field_get(this, _tokenWithStatus).status === "Success" /* Protocol.Page.OriginTrialTokenStatus.Success */  ? 'success' : 'error'
            }, Badge.litTagName)
        }
    ].concat(_to_consumable_array(_class_private_field_get(this, _parsedTokenDetails)));
    var tokenDetailRows = tokenDetails.map(function(field) {
        return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject12(), field.name, field.value);
    });
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject13(), tokenDetailRows), _class_private_field_get(this, _shadow1), {
        host: this
    });
}
customElements.define('devtools-resources-origin-trial-token-rows', OriginTrialTokenRows);
var _shadow2 = /*#__PURE__*/ new WeakMap(), _render2 = /*#__PURE__*/ new WeakSet();
var OriginTrialTreeView = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(OriginTrialTreeView, HTMLElement1);
    var _super = _create_super(OriginTrialTreeView);
    function OriginTrialTreeView() {
        _class_call_check(this, OriginTrialTreeView);
        var _this;
        _this = _super.apply(this, arguments);
        _class_private_method_init(_assert_this_initialized(_this), _render2);
        _class_private_field_init(_assert_this_initialized(_this), _shadow2, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        return _this;
    }
    _create_class(OriginTrialTreeView, [
        {
            key: "data",
            set: function set(data) {
                _class_private_method_get(this, _render2, render2).call(this, data.trials);
            }
        },
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow2).adoptedStyleSheets = [
                    _originTrialTreeView_css_js__WEBPACK_IMPORTED_MODULE_7__["default"]
                ];
            }
        }
    ]);
    return OriginTrialTreeView;
}(_wrap_native_super(HTMLElement));
_define_property(OriginTrialTreeView, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.literal(_templateObject14()));
function render2(trials) {
    if (!trials.length) {
        _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject15(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, {
            iconName: 'clear',
            color: 'var(--icon-default)',
            width: '16px',
            height: '16px'
        }, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_2__.Icon.Icon.litTagName, i18nString(UIStrings.noTrialTokens)), _class_private_field_get(this, _shadow2), {
            host: this
        });
        return;
    }
    _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.render(_ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_4__.html(_templateObject16(), _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline.litTagName, {
        tree: trials.map(constructOriginTrialTree),
        defaultRenderer: defaultRenderer
    }, _ui_components_tree_outline_tree_outline_js__WEBPACK_IMPORTED_MODULE_3__.TreeOutline.TreeOutline.litTagName), _class_private_field_get(this, _shadow2), {
        host: this
    });
}
customElements.define('devtools-resources-origin-trial-tree-view', OriginTrialTreeView); //# sourceMappingURL=OriginTrialTreeView.js.map


}),
"./panels/application/components/badge.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n:host .badge-error {\n  --override-adorner-text-color: var(--sys-color-error-bright);\n  --override-adorner-border-color: var(--sys-color-error-bright);\n}\n\n:host .badge-success {\n  --override-adorner-text-color: var(--sys-color-tertiary);\n  --override-adorner-border-color: var(--sys-color-tertiary);\n}\n\n:host .badge-secondary {\n  --override-adorner-text-color: var(--sys-color-token-subtle);\n  --override-adorner-border-color: var(--sys-color-token-subtle);\n}\n\n/* Use mono-space source code font to assist reading of adorner content */\n:host {\n  font-family: var(--source-code-font-family);\n}\n\n/*# sourceURL=badge.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/application/components/originTrialTokenRows.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2021 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.content {\n  display: grid;\n  grid-template-columns: min-content 1fr;\n}\n\n.key {\n  color: var(--sys-color-token-subtle);\n  padding: 0 6px;\n  text-align: right;\n  white-space: pre;\n}\n\n.value {\n  color: var(--sys-color-token-subtle);\n  margin-inline-start: 0;\n  padding: 0 6px;\n}\n\n.error-text {\n  color: var(--sys-color-error-bright);\n  font-weight: bold;\n}\n\n/*# sourceURL=originTrialTokenRows.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/application/components/originTrialTreeView.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright (c) 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.status-badge {\n  border-radius: 4px;\n  padding: 4px;\n  background: var(--sys-color-neutral-container);\n\n  & > devtools-icon {\n    vertical-align: sub;\n  }\n}\n\n/*# sourceURL=originTrialTreeView.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./ui/components/tree_outline/tree_outline.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  TreeOutline: function() { return /* reexport module object */ _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__; },
  TreeOutlineUtils: function() { return /* reexport module object */ _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__; }
});
/* harmony import */var _TreeOutline_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeOutline.js */ "./ui/components/tree_outline/TreeOutline.js");
/* harmony import */var _TreeOutlineUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeOutlineUtils.js */ "./ui/components/tree_outline/TreeOutlineUtils.js");
// Copyright (c) 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


 //# sourceMappingURL=tree_outline.js.map


}),

}]);