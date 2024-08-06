"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_explain_components_ConsoleInsight_js"], {
"./panels/explain/components/ConsoleInsight.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  CloseEvent: function() { return CloseEvent; },
  ConsoleInsight: function() { return ConsoleInsight; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/host/host.js */ "./core/host/host.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */var _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../third_party/marked/marked.js */ "./third_party/marked/marked.js");
/* harmony import */var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./ui/components/buttons/buttons.js");
/* harmony import */var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../ui/components/icon_button/icon_button.js */ "./ui/components/icon_button/icon_button.js");
/* harmony import */var _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../ui/components/input/input.js */ "./ui/components/input/input.js");
/* harmony import */var _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../ui/components/markdown_view/markdown_view.js */ "./ui/components/markdown_view/markdown_view.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./ui/lit-html/lit-html.js");
/* harmony import */var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../PromptBuilder.js */ "./panels/explain/PromptBuilder.js");
/* harmony import */var _consoleInsight_css_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./consoleInsight.css.js */ "./panels/explain/components/consoleInsight.css.js");
/* harmony import */var _consoleInsightSourcesList_css_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./consoleInsightSourcesList.css.js */ "./panels/explain/components/consoleInsightSourcesList.css.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _async_generator(gen) {
    var front, back;
    function send(key, arg) {
        return new Promise(function(resolve, reject) {
            var request = {
                key: key,
                arg: arg,
                resolve: resolve,
                reject: reject,
                next: null
            };
            if (back) {
                back = back.next = request;
            } else {
                front = back = request;
                resume(key, arg);
            }
        });
    }
    function resume(key, arg) {
        try {
            var result = gen[key](arg);
            var value = result.value;
            var wrappedAwait = value instanceof _await_value;
            Promise.resolve(wrappedAwait ? value.wrapped : value).then(function(arg) {
                if (wrappedAwait) {
                    resume("next", arg);
                    return;
                }
                settle(result.done ? "return" : "normal", arg);
            }, function(err) {
                resume("throw", err);
            });
        } catch (err) {
            settle("throw", err);
        }
    }
    function settle(type, value) {
        switch(type){
            case "return":
                front.resolve({
                    value: value,
                    done: true
                });
                break;
            case "throw":
                front.reject(value);
                break;
            default:
                front.resolve({
                    value: value,
                    done: false
                });
                break;
        }
        front = front.next;
        if (front) {
            resume(front.key, front.arg);
        } else {
            back = null;
        }
    }
    this._invoke = send;
    if (typeof gen.return !== "function") {
        this.return = undefined;
    }
}
if (typeof Symbol === "function" && Symbol.asyncIterator) {
    _async_generator.prototype[Symbol.asyncIterator] = function() {
        return this;
    };
}
_async_generator.prototype.next = function(arg) {
    return this._invoke("next", arg);
};
_async_generator.prototype.throw = function(arg) {
    return this._invoke("throw", arg);
};
_async_generator.prototype.return = function(arg) {
    return this._invoke("return", arg);
};
function _async_iterator(iterable) {
    var method, async, sync, retry = 2;
    for("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;){
        if (async && null != (method = iterable[async])) return method.call(iterable);
        if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
        async = "@@asyncIterator", sync = "@@iterator";
    }
    throw new TypeError("Object is not async iterable");
}
function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
        if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
        var done = r.done;
        return Promise.resolve(r.value).then(function(value) {
            return {
                value: value,
                done: done
            };
        });
    }
    return AsyncFromSyncIterator = function(s) {
        this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
        s: null,
        n: null,
        next: function() {
            return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
        },
        return: function(value) {
            var ret = this.s.return;
            return void 0 === ret ? Promise.resolve({
                value: value,
                done: !0
            }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
        },
        throw: function(value) {
            var thr = this.s.return;
            return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
        }
    }, new AsyncFromSyncIterator(s);
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
function _await_async_generator(value) {
    return new _await_value(value);
}
function _await_value(value) {
    this.wrapped = value;
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
function _wrap_async_generator(fn) {
    return function() {
        return new _async_generator(fn.apply(this, arguments));
    };
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
        "devtools-console-insight"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject1() {
    var data = _tagged_template_literal([
        "<",
        '\n      class="cancel-button"\n      @click=',
        "\n      .data=",
        "\n    >\n      ",
        "\n    </",
        ">"
    ]);
    _templateObject1 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject2() {
    var data = _tagged_template_literal([
        "<",
        "\n      @click=",
        '\n      class="disable-button"\n      .data=',
        "\n    >\n      ",
        "\n    </",
        ">"
    ]);
    _templateObject2 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject3() {
    var data = _tagged_template_literal([
        "<",
        '\n      class="next-button"\n      @click=',
        "\n      .data=",
        "\n    >\n      ",
        "\n    </",
        ">"
    ]);
    _templateObject3 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject4() {
    var data = _tagged_template_literal([
        "<",
        "\n      @click=",
        "\n      .data=",
        "\n    >\n      ",
        "\n    </",
        ">"
    ]);
    _templateObject4 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject5() {
    var data = _tagged_template_literal([
        "<",
        "\n      @click=",
        '\n      class="continue-button"\n      .data=',
        "\n    >\n      ",
        "\n    </",
        ">"
    ]);
    _templateObject5 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject6() {
    var data = _tagged_template_literal([
        "<",
        "\n      @click=",
        '\n      class="search-button"\n      .data=',
        "\n    >\n      ",
        "\n    </",
        ">"
    ]);
    _templateObject6 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject7() {
    var data = _tagged_template_literal([
        "<x-link href=",
        ' class="link" jslog=',
        ">\n      ",
        "\n    </x-link>"
    ]);
    _templateObject7 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject8() {
    var data = _tagged_template_literal([
        "<main jslog=",
        '>\n            <div role="presentation" class="loader" style="clip-path: url(\'#clipPath\');">\n              <svg width="100%" height="64">\n                <clipPath id="clipPath">\n                  <rect x="0" y="0" width="100%" height="16" rx="8"></rect>\n                  <rect x="0" y="24" width="100%" height="16" rx="8"></rect>\n                  <rect x="0" y="48" width="100%" height="16" rx="8"></rect>\n                </clipPath>\n              </svg>\n            </div>\n          </main>'
    ]);
    _templateObject8 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject9() {
    var data = _tagged_template_literal([
        "<",
        "\n              .data=",
        ">\n            </",
        ">"
    ]);
    _templateObject9 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject10() {
    var data = _tagged_template_literal([
        "\n        <main jslog=",
        ">\n          ",
        '\n          <details style="--list-height: ',
        'px;" jslog=',
        ">\n            <summary>",
        "</summary>\n            <",
        " .sources=",
        " .isPageReloadRecommended=",
        ">\n            </",
        '>\n          </details>\n          <div class="buttons">\n            ',
        "\n          </div>\n        </main>"
    ]);
    _templateObject10 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject11() {
    var data = _tagged_template_literal([
        "\n        <main jslog=",
        '>\n          <div class="error">',
        "</div>\n        </main>"
    ]);
    _templateObject11 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject12() {
    var data = _tagged_template_literal([
        "\n          <main jslog=",
        ">\n            <p>The following data will be sent to Google to understand the context for the console message.\n            ",
        "\n            Read Google’s <x-link href=",
        ' class="link" jslog=',
        ">Terms of Service</x-link>.</p>\n            <",
        " .sources=",
        " .isPageReloadRecommended=",
        ">\n            </",
        ">\n          </main>\n        "
    ]);
    _templateObject12 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject13() {
    var data = _tagged_template_literal([
        "<main jslog=",
        ">\n              <p>This notice and our <x-link href=",
        ' class="link" jslog=',
        '>privacy notice</x-link> describe how Chrome DevTools handles your data. Please read them carefully.</p>\n\n              <p>Chrome DevTools uses the console message, associated stack trace, related source code, and the associated network headers as input data. When you use "Understand this message", Google collects this input data, generated output, related feature usage information, and your feedback. Google uses this data to provide, improve, and develop Google products and services and machine learning technologies, including Google\'s enterprise products such as Google Cloud.</p>\n\n              <p>To help with quality and improve our products, human reviewers may read, annotate, and process the above-mentioned input data, generated output, related feature usage information, and your feedback. <strong>Please do not include sensitive (e.g., confidential) or personal information that can be used to identify you or others in your prompts or feedback.</strong> Your data will be stored in a way where Google cannot tell who provided it and can no longer fulfill any deletion requests and will be retained for up to 18 months. We may refrain from collecting data to improve our product if your Google account is managed by an organization and depending on your region.</p>\n            </main>'
    ]);
    _templateObject13 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject14() {
    var data = _tagged_template_literal([
        "<main jslog=",
        '>\n            <p>As you try "Understand this message", here are key things to know:\n\n            <ul>\n              <li>Chrome DevTools uses console message, associated stack trace, related source code, and the associated network headers to provide answers.</li>\n              <li>Chrome DevTools uses experimental technology, and may generate inaccurate or offensive information that doesn\'t represent Google\'s views. Voting on the responses will help make this feature better.</li>\n              <li>This feature is an experimental feature and subject to future changes.</li>\n              <li><strong><x-link class="link" href=',
        " jslog=",
        '>Use generated code snippets with caution</x-link>.</strong></li>\n            </ul>\n            </p>\n\n            <p>\n            <label>\n              <input class="terms" @change=',
        ' type="checkbox" jslog=',
        '>\n              <span>I accept my use of "Understand this message" is subject to the <x-link href=',
        ' class="link" jslog=',
        ">Google Terms of Service</x-link>.</span>\n            </label>\n            </p>\n            </main>"
    ]);
    _templateObject14 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject15() {
    var data = _tagged_template_literal([
        "\n          <main jslog=",
        '>\n            <div class="error">',
        "</div>\n          </main>"
    ]);
    _templateObject15 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject16() {
    var data = _tagged_template_literal([
        "\n          <main jslog=",
        '>\n            <div class="error">',
        "</div>\n          </main>"
    ]);
    _templateObject16 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject17() {
    var data = _tagged_template_literal([
        "\n          <main jslog=",
        '>\n            <div class="error">',
        "</div>\n          </main>"
    ]);
    _templateObject17 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject18() {
    var data = _tagged_template_literal([
        "<span>\n              This feature may display inaccurate or offensive information that doesn't represent Google's views.\n              <x-link href=",
        ' class="link" jslog=',
        ">",
        "</x-link>\n            </span>"
    ]);
    _templateObject18 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject19() {
    var data = _tagged_template_literal([
        "<footer jslog=",
        '>\n          <div class="disclaimer">\n            ',
        "\n          </div>\n        </footer>"
    ]);
    _templateObject19 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject20() {
    var data = _tagged_template_literal([
        "<footer jslog=",
        '>\n        <div class="filler"></div>\n        <div>\n          <',
        "\n            @click=",
        "\n            .data=",
        "\n          >\n            ",
        "\n          </",
        ">\n        </div>\n      </footer>"
    ]);
    _templateObject20 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject21() {
    var data = _tagged_template_literal([
        "<footer jslog=",
        '>\n          <div class="disclaimer">\n            ',
        '\n          </div>\n          <div class="filler"></div>\n          <div class="buttons">\n            ',
        "\n            ",
        "\n          </div>\n        </footer>"
    ]);
    _templateObject21 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject22() {
    var data = _tagged_template_literal([
        "<footer jslog=",
        '>\n                <div class="disclaimer">\n                  ',
        '\n                </div>\n                <div class="filler"></div>\n                <div class="buttons">\n                    ',
        "\n                    ",
        "\n                    ",
        "\n                  </div>\n              </footer>"
    ]);
    _templateObject22 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject23() {
    var data = _tagged_template_literal([
        "<footer jslog=",
        '>\n            <div class="disclaimer">\n              ',
        '\n            </div>\n            <div class="filler"></div>\n            <div class="buttons">\n                ',
        "\n                ",
        "\n                ",
        "\n              </div>\n          </footer>"
    ]);
    _templateObject23 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject24() {
    var data = _tagged_template_literal([
        "\n            <",
        "\n              data-rating=",
        "\n              .data=",
        "\n              @click=",
        "\n            ></",
        ">\n            <",
        "\n              data-rating=",
        "\n              .data=",
        "\n              @click=",
        "\n            ></",
        ">\n          "
    ]);
    _templateObject24 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject25() {
    var data = _tagged_template_literal([
        "<footer jslog=",
        '>\n        <div class="disclaimer">\n          ',
        '\n        </div>\n        <div class="filler"></div>\n        <div class="rating">\n          ',
        "\n          <",
        "\n            .data=",
        "\n            @click=",
        "\n          ></",
        ">\n        </div>\n\n      </footer>"
    ]);
    _templateObject25 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject26() {
    var data = _tagged_template_literal([
        '\n      <div class="wrapper" jslog=',
        '>\n        <header>\n          <div class="filler">\n            <h2 tabindex="-1">\n              ',
        "\n            </h2>\n          </div>\n          <div>\n            <",
        "\n              .data=",
        "\n              jslog=",
        "\n              @click=",
        "\n            ></",
        ">\n          </div>\n        </header>\n        ",
        "\n        ",
        "\n      </div>\n    "
    ]);
    _templateObject26 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject27() {
    var data = _tagged_template_literal([
        "devtools-console-insight-sources-list"
    ]);
    _templateObject27 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject28() {
    var data = _tagged_template_literal([
        '<li><x-link class="link" title="',
        " ",
        '" href="data:text/plain,',
        '" jslog=',
        ">\n            <",
        ' name="open-externally"></',
        ">\n            ",
        "\n          </x-link></li>"
    ]);
    _templateObject28 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject29() {
    var data = _tagged_template_literal([
        '<li class="source-disclaimer">\n          <',
        ' name="warning"></',
        ">\n          ",
        "</li>"
    ]);
    _templateObject29 = function _templateObject() {
        return data;
    };
    return data;
}
function _templateObject30() {
    var data = _tagged_template_literal([
        "\n      <ul>\n        ",
        "\n        ",
        "\n      </ul>\n    "
    ]);
    _templateObject30 = function _templateObject() {
        return data;
    };
    return data;
}















// Note: privacy and legal notices are not localized so far.
var UIStrings = {
    /**
     * @description The title of the insight source "Console message".
     */ consoleMessage: 'Console message',
    /**
     * @description The title of the insight source "Stacktrace".
     */ stackTrace: 'Stacktrace',
    /**
     * @description The title of the insight source "Network request".
     */ networkRequest: 'Network request',
    /**
     * @description The title of the insight source "Related code".
     */ relatedCode: 'Related code',
    /**
     * @description The title that is shown while the insight is being generated.
     */ generating: 'Generating explanation…',
    /**
     * @description The header that indicates that the content shown is a console
     * insight.
     */ insight: 'Explanation',
    /**
     * @description The title of the a button that closes the insight pane.
     */ closeInsight: 'Close explanation',
    /**
     * @description The title of the list of source data that was used to generate the insight.
     */ inputData: 'Data used to understand this message',
    /**
     * @description The title of the button that allows submitting positive
     * feedback about the console insight.
     */ thumbsUp: 'Thumbs up',
    /**
     * @description The title of the button that allows submitting negative
     * feedback about the console insight.
     */ thumbsDown: 'Thumbs down',
    /**
     * @description The title of the button that opens a page to report a legal
     * issue with the console insight.
     */ report: 'Report legal issue',
    /**
     * @description The text of the header inside the console insight pane when there was an error generating an insight.
     */ error: 'DevTools has encountered an error',
    /**
     * @description The message shown when an error has been encountered.
     */ errorBody: 'Something went wrong. Try again.',
    /**
     * @description Label for screenreaders that is added to the end of the link
     * title to indicate that the link will be opened in a new tab.
     */ opensInNewTab: '(opens in a new tab)',
    /**
     * @description The title of a link that allows the user to learn more about
     * the feature.
     */ learnMore: 'Learn more',
    /**
     * @description The title of the message when the console insight is not available for some reason.
     */ notAvailable: 'This feature is not available',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */ notLoggedIn: 'This feature is only available when you sign into Chrome with your Google account.',
    /**
     * @description The error message when the user is not logged in into Chrome.
     */ syncIsOff: 'This feature requires you to turn on Chrome sync.',
    /**
     * @description The title of the button that opens Chrome settings.
     */ updateSettings: 'Update Settings',
    /**
     * @description The header shown when the internet connection is not
     * available.
     */ offlineHeader: 'DevTools can’t reach the internet',
    /**
     * @description Message shown when the user is offline.
     */ offline: 'Check your internet connection and try again.',
    /**
     * @description The message shown if the user is not logged in.
     */ signInToUse: 'Sign in to use this feature',
    /**
     * @description The title of the button that cancels a console insight flow.
     */ cancel: 'Cancel',
    /**
     * @description The title of the button that disables the Console insight (this) feature.
     */ disableFeature: 'Disable this feature',
    /**
     * @description The title of the button that goes to the next page.
     */ next: 'Next',
    /**
     * @description The title of the button that goes back to the previous page.
     */ back: 'Back',
    /**
     * @description The title of the button that lets the user to continue
     * with using the feature.
     */ continue: 'Continue',
    /**
     * @description The title of the button that searches for the console
     * insight using a search engine instead of using console insights.
     */ search: 'Use search instead',
    /**
     * @description Shown to the user when the network request data is not
     * available and a page reload might populate it.
     */ reloadRecommendation: 'Reload the page to capture related network request data for this message in order to create a better insight.'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/explain/components/ConsoleInsight.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
var render = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.render, html = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html, Directives = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.Directives;
var CloseEvent = /*#__PURE__*/ function(Event1) {
    "use strict";
    _inherits(CloseEvent, Event1);
    var _super = _create_super(CloseEvent);
    function CloseEvent() {
        _class_call_check(this, CloseEvent);
        return _super.call(this, CloseEvent.eventName, {
            composed: true,
            bubbles: true
        });
    }
    return CloseEvent;
}(_wrap_native_super(Event));
_define_property(CloseEvent, "eventName", 'close');
function localizeType(sourceType) {
    switch(sourceType){
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.MESSAGE:
            return i18nString(UIStrings.consoleMessage);
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.STACKTRACE:
            return i18nString(UIStrings.stackTrace);
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.NETWORK_REQUEST:
            return i18nString(UIStrings.networkRequest);
        case _PromptBuilder_js__WEBPACK_IMPORTED_MODULE_12__.SourceType.RELATED_CODE:
            return i18nString(UIStrings.relatedCode);
    }
}
var TERMS_OF_SERVICE_URL = 'https://policies.google.com/terms';
var PRIVACY_POLICY_URL = 'https://policies.google.com/privacy';
var CODE_SNIPPET_WARNING_URL = 'https://support.google.com/legal/answer/13505487';
var LEARNMORE_URL = 'https://goo.gle/devtools-console-messages-ai';
var REPORT_URL = 'https://support.google.com/legal/troubleshooter/1114905?hl=en#ts=1115658%2C13380504';
var CHROME_SETTINGS_URL = 'chrome://settings';
var _shadow = /*#__PURE__*/ new WeakMap(), _promptBuilder = /*#__PURE__*/ new WeakMap(), _aidaClient = /*#__PURE__*/ new WeakMap(), _renderer = /*#__PURE__*/ new WeakMap(), // Main state.
_state = /*#__PURE__*/ new WeakMap(), // Rating sub-form state.
_selectedRating = /*#__PURE__*/ new WeakMap(), _getOnboardingCompletedSetting = /*#__PURE__*/ new WeakSet(), _transitionTo = /*#__PURE__*/ new WeakSet(), _generateInsightIfNeeded = /*#__PURE__*/ new WeakSet(), _onClose = /*#__PURE__*/ new WeakSet(), _onRating = /*#__PURE__*/ new WeakSet(), _onReport = /*#__PURE__*/ new WeakSet(), _onSearch = /*#__PURE__*/ new WeakSet(), _onConsentReminderConfirmed = /*#__PURE__*/ new WeakSet(), /**
     * Validates the markdown by trying to render it.
     */ _validateMarkdown = /*#__PURE__*/ new WeakSet(), _getInsight = /*#__PURE__*/ new WeakSet(), _onGoToSettings = /*#__PURE__*/ new WeakSet(), _onDisableFeature = /*#__PURE__*/ new WeakSet(), _goToNextPage = /*#__PURE__*/ new WeakSet(), _focusHeader = /*#__PURE__*/ new WeakSet(), _termsChecked = /*#__PURE__*/ new WeakSet(), _onConsentOnboardingConfirmed = /*#__PURE__*/ new WeakSet(), _goToPrevPage = /*#__PURE__*/ new WeakSet(), _renderCancelButton = /*#__PURE__*/ new WeakSet(), _renderDisableFeatureButton = /*#__PURE__*/ new WeakSet(), _renderNextButton = /*#__PURE__*/ new WeakSet(), _renderBackButton = /*#__PURE__*/ new WeakSet(), _renderContinueButton = /*#__PURE__*/ new WeakSet(), _renderSearchButton = /*#__PURE__*/ new WeakSet(), _renderLearnMoreAboutInsights = /*#__PURE__*/ new WeakSet(), _onTermsChange = /*#__PURE__*/ new WeakSet(), _renderMain = /*#__PURE__*/ new WeakSet(), _renderFooter = /*#__PURE__*/ new WeakSet(), _getHeader = /*#__PURE__*/ new WeakSet(), _render = /*#__PURE__*/ new WeakSet();
var ConsoleInsight = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ConsoleInsight, HTMLElement1);
    var _super = _create_super(ConsoleInsight);
    function ConsoleInsight(promptBuilder, aidaClient, aidaAvailability) {
        _class_call_check(this, ConsoleInsight);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _getOnboardingCompletedSetting);
        _class_private_method_init(_assert_this_initialized(_this), _transitionTo);
        _class_private_method_init(_assert_this_initialized(_this), _generateInsightIfNeeded);
        _class_private_method_init(_assert_this_initialized(_this), _onClose);
        _class_private_method_init(_assert_this_initialized(_this), _onRating);
        _class_private_method_init(_assert_this_initialized(_this), _onReport);
        _class_private_method_init(_assert_this_initialized(_this), _onSearch);
        _class_private_method_init(_assert_this_initialized(_this), _onConsentReminderConfirmed);
        _class_private_method_init(_assert_this_initialized(_this), _validateMarkdown);
        _class_private_method_init(_assert_this_initialized(_this), _getInsight);
        _class_private_method_init(_assert_this_initialized(_this), _onGoToSettings);
        _class_private_method_init(_assert_this_initialized(_this), _onDisableFeature);
        _class_private_method_init(_assert_this_initialized(_this), _goToNextPage);
        _class_private_method_init(_assert_this_initialized(_this), _focusHeader);
        _class_private_method_init(_assert_this_initialized(_this), _termsChecked);
        _class_private_method_init(_assert_this_initialized(_this), _onConsentOnboardingConfirmed);
        _class_private_method_init(_assert_this_initialized(_this), _goToPrevPage);
        _class_private_method_init(_assert_this_initialized(_this), _renderCancelButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderDisableFeatureButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderNextButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderBackButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderContinueButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderSearchButton);
        _class_private_method_init(_assert_this_initialized(_this), _renderLearnMoreAboutInsights);
        _class_private_method_init(_assert_this_initialized(_this), _onTermsChange);
        _class_private_method_init(_assert_this_initialized(_this), _renderMain);
        _class_private_method_init(_assert_this_initialized(_this), _renderFooter);
        _class_private_method_init(_assert_this_initialized(_this), _getHeader);
        _class_private_method_init(_assert_this_initialized(_this), _render);
        _class_private_field_init(_assert_this_initialized(_this), _shadow, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _promptBuilder, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _aidaClient, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _renderer, {
            writable: true,
            value: new _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownInsightRenderer()
        });
        _class_private_field_init(_assert_this_initialized(_this), _state, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(_assert_this_initialized(_this), _selectedRating, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(_assert_this_initialized(_this), _promptBuilder, promptBuilder);
        _class_private_field_set(_assert_this_initialized(_this), _aidaClient, aidaClient);
        switch(aidaAvailability){
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.AVAILABLE:
                _class_private_field_set(_assert_this_initialized(_this), _state, {
                    type: "loading" /* State.LOADING */ ,
                    consentReminderConfirmed: false,
                    consentOnboardingFinished: _class_private_method_get(_this, _getOnboardingCompletedSetting, getOnboardingCompletedSetting).call(_this).get()
                });
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACCOUNT_EMAIL:
                _class_private_field_set(_assert_this_initialized(_this), _state, {
                    type: "not-logged-in" /* State.NOT_LOGGED_IN */ 
                });
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_ACTIVE_SYNC:
                _class_private_field_set(_assert_this_initialized(_this), _state, {
                    type: "sync-is-off" /* State.SYNC_IS_OFF */ 
                });
                break;
            case _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaAvailability.NO_INTERNET:
                _class_private_field_set(_assert_this_initialized(_this), _state, {
                    type: "offline" /* State.OFFLINE */ 
                });
                break;
        }
        _class_private_method_get(_this, _render, render1).call(_assert_this_initialized(_this));
        // Stop keyboard event propagation to avoid Console acting on the events
        // inside the insight component.
        _this.addEventListener('keydown', function(e) {
            e.stopPropagation();
        });
        _this.addEventListener('keyup', function(e) {
            e.stopPropagation();
        });
        _this.addEventListener('keypress', function(e) {
            e.stopPropagation();
        });
        _this.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        _this.focus();
        // Measure the height of the element after an animation. `--actual-height` can
        // be used as the `from` value for the subsequent animation.
        _this.addEventListener('animationend', function() {
            _this.style.setProperty('--actual-height', "".concat(_this.offsetHeight, "px"));
        });
        return _this;
    }
    _create_class(ConsoleInsight, [
        {
            key: "connectedCallback",
            value: function connectedCallback() {
                _class_private_field_get(this, _shadow).adoptedStyleSheets = [
                    _consoleInsight_css_js__WEBPACK_IMPORTED_MODULE_13__["default"],
                    _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles
                ];
                this.classList.add('opening');
                void _class_private_method_get(this, _generateInsightIfNeeded, generateInsightIfNeeded).call(this);
            }
        }
    ], [
        {
            key: "create",
            value: function create(promptBuilder, aidaClient) {
                return _async_to_generator(function() {
                    var aidaAvailability;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.getAidaClientAvailability()
                                ];
                            case 1:
                                aidaAvailability = _state.sent();
                                return [
                                    2,
                                    new ConsoleInsight(promptBuilder, aidaClient, aidaAvailability)
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ConsoleInsight;
}(_wrap_native_super(HTMLElement));
_define_property(ConsoleInsight, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal(_templateObject()));
function getOnboardingCompletedSetting() {
    return _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().createLocalSetting('console-insights-onboarding-finished', false);
}
function transitionTo(newState) {
    var previousState = _class_private_field_get(this, _state);
    _class_private_field_set(this, _state, newState);
    if (newState.type !== previousState.type && previousState.type === "loading" /* State.LOADING */ ) {
        this.classList.add('loaded');
    }
    _class_private_method_get(this, _render, render1).call(this);
    if (newState.type !== previousState.type) {
        _class_private_method_get(this, _focusHeader, focusHeader).call(this);
    }
}
function generateInsightIfNeeded() {
    return _generateInsightIfNeeded1.apply(this, arguments);
}
function _generateInsightIfNeeded1() {
    _generateInsightIfNeeded1 = _async_to_generator(function() {
        var _ref, sources, isPageReloadRecommended;
        return _ts_generator(this, function(_state1) {
            switch(_state1.label){
                case 0:
                    if (_class_private_field_get(this, _state).type !== "loading" /* State.LOADING */ ) {
                        return [
                            2
                        ];
                    }
                    if (!_class_private_field_get(this, _state).consentOnboardingFinished) {
                        _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
                            type: "consent-onboarding" /* State.CONSENT_ONBOARDING */ ,
                            page: "private" /* ConsentOnboardingPage.PAGE1 */ 
                        });
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingShown);
                        return [
                            2
                        ];
                    }
                    if (!!_class_private_field_get(this, _state).consentReminderConfirmed) return [
                        3,
                        2
                    ];
                    return [
                        4,
                        _class_private_field_get(this, _promptBuilder).buildPrompt()
                    ];
                case 1:
                    _ref = _state1.sent(), sources = _ref.sources, isPageReloadRecommended = _ref.isPageReloadRecommended;
                    _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
                        type: "consent-reminder" /* State.CONSENT_REMINDER */ ,
                        sources: sources,
                        isPageReloadRecommended: isPageReloadRecommended
                    });
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderShown);
                    return [
                        2
                    ];
                case 2:
                    return [
                        2
                    ];
            }
        });
    });
    return _generateInsightIfNeeded1.apply(this, arguments);
}
function onClose() {
    if (_class_private_field_get(this, _state).type === "consent-reminder" /* State.CONSENT_REMINDER */ ) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderCanceled);
    } else if (_class_private_field_get(this, _state).type === "consent-onboarding" /* State.CONSENT_ONBOARDING */ ) {
        if (_class_private_field_get(this, _state).page === "private" /* ConsentOnboardingPage.PAGE1 */ ) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingCanceledOnPage1);
        } else {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingCanceledOnPage2);
        }
    }
    this.dispatchEvent(new CloseEvent());
    this.classList.add('closing');
}
function onRating(event) {
    var _class_private_field_get_metadata, _Common_Settings_Settings_instance_getHostConfig;
    if (_class_private_field_get(this, _state).type !== "insight" /* State.INSIGHT */ ) {
        throw new Error('Unexpected state');
    }
    if (((_class_private_field_get_metadata = _class_private_field_get(this, _state).metadata) === null || _class_private_field_get_metadata === void 0 ? void 0 : _class_private_field_get_metadata.rpcGlobalId) === undefined) {
        throw new Error('RPC Id not in metadata');
    }
    // If it was rated, do not record again.
    if (_class_private_field_get(this, _selectedRating) !== undefined) {
        return;
    }
    _class_private_field_set(this, _selectedRating, event.target.dataset.rating === 'true');
    _class_private_method_get(this, _render, render1).call(this);
    if (_class_private_field_get(this, _selectedRating)) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedPositive);
    } else {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightRatedNegative);
    }
    var disallowLogging = ((_Common_Settings_Settings_instance_getHostConfig = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()) === null || _Common_Settings_Settings_instance_getHostConfig === void 0 ? void 0 : _Common_Settings_Settings_instance_getHostConfig.devToolsConsoleInsights.disallowLogging) === true;
    void _class_private_field_get(this, _aidaClient).registerClientEvent({
        corresponding_aida_rpc_global_id: _class_private_field_get(this, _state).metadata.rpcGlobalId,
        disable_user_content_logging: disallowLogging,
        do_conversation_client_event: {
            user_feedback: {
                sentiment: _class_private_field_get(this, _selectedRating) ? "POSITIVE" /* Host.AidaClient.Rating.POSITIVE */  : "NEGATIVE" /* Host.AidaClient.Rating.NEGATIVE */ 
            }
        }
    });
}
function onReport() {
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(REPORT_URL);
}
function onSearch() {
    var query = _class_private_field_get(this, _promptBuilder).getSearchQuery();
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openSearchResultsInNewTab(query);
}
function onConsentReminderConfirmed() {
    return _onConsentReminderConfirmed1.apply(this, arguments);
}
function _onConsentReminderConfirmed1() {
    _onConsentReminderConfirmed1 = _async_to_generator(function() {
        var _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, sources, isPageReloadRecommended, explanation, metadata, tokens, valid, err, err1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
                        type: "loading" /* State.LOADING */ ,
                        consentReminderConfirmed: true,
                        consentOnboardingFinished: _class_private_method_get(this, _getOnboardingCompletedSetting, getOnboardingCompletedSetting).call(this).get()
                    });
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightConsentReminderConfirmed);
                    _state.label = 1;
                case 1:
                    _state.trys.push([
                        1,
                        14,
                        ,
                        15
                    ]);
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        7,
                        8,
                        13
                    ]);
                    _iterator = _async_iterator(_class_private_method_get(this, _getInsight, getInsight).call(this));
                    _state.label = 3;
                case 3:
                    return [
                        4,
                        _iterator.next()
                    ];
                case 4:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        6
                    ];
                    _value = _step.value;
                    sources = _value.sources, isPageReloadRecommended = _value.isPageReloadRecommended, explanation = _value.explanation, metadata = _value.metadata;
                    tokens = _class_private_method_get(this, _validateMarkdown, validateMarkdown).call(this, explanation);
                    valid = tokens !== false;
                    _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
                        type: "insight" /* State.INSIGHT */ ,
                        tokens: valid ? tokens : [],
                        validMarkdown: valid,
                        explanation: explanation,
                        sources: sources,
                        metadata: metadata,
                        isPageReloadRecommended: isPageReloadRecommended
                    });
                    _state.label = 5;
                case 5:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        3
                    ];
                case 6:
                    return [
                        3,
                        13
                    ];
                case 7:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        13
                    ];
                case 8:
                    _state.trys.push([
                        8,
                        ,
                        11,
                        12
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        10
                    ];
                    return [
                        4,
                        _iterator.return()
                    ];
                case 9:
                    _state.sent();
                    _state.label = 10;
                case 10:
                    return [
                        3,
                        12
                    ];
                case 11:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 12:
                    return [
                        7
                    ];
                case 13:
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightGenerated);
                    return [
                        3,
                        15
                    ];
                case 14:
                    err1 = _state.sent();
                    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErrored);
                    _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
                        type: "error" /* State.ERROR */ ,
                        error: err1.message
                    });
                    return [
                        3,
                        15
                    ];
                case 15:
                    return [
                        2
                    ];
            }
        });
    });
    return _onConsentReminderConfirmed1.apply(this, arguments);
}
function validateMarkdown(text) {
    try {
        var tokens = _third_party_marked_marked_js__WEBPACK_IMPORTED_MODULE_4__.Marked.lexer(text);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var token = _step.value;
                _class_private_field_get(this, _renderer).renderToken(token);
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
        return tokens;
    } catch (e) {
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredMarkdown);
        return false;
    }
}
function getInsight() {
    return _getInsight1.apply(this, arguments);
}
function _getInsight1() {
    _getInsight1 = _wrap_async_generator(function() {
        var _ref, prompt, sources, isPageReloadRecommended, _iteratorAbruptCompletion, _didIteratorError, _iteratorError, _iterator, _step, _value, response, err, err1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        _await_async_generator(_class_private_field_get(this, _promptBuilder).buildPrompt())
                    ];
                case 1:
                    _ref = _state.sent(), prompt = _ref.prompt, sources = _ref.sources, isPageReloadRecommended = _ref.isPageReloadRecommended;
                    _state.label = 2;
                case 2:
                    _state.trys.push([
                        2,
                        16,
                        ,
                        17
                    ]);
                    _iteratorAbruptCompletion = false, _didIteratorError = false;
                    _state.label = 3;
                case 3:
                    _state.trys.push([
                        3,
                        9,
                        10,
                        15
                    ]);
                    _iterator = _async_iterator(_class_private_field_get(this, _aidaClient).fetch(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.AidaClient.AidaClient.buildConsoleInsightsRequest(prompt)));
                    _state.label = 4;
                case 4:
                    return [
                        4,
                        _await_async_generator(_iterator.next())
                    ];
                case 5:
                    if (!(_iteratorAbruptCompletion = !(_step = _state.sent()).done)) return [
                        3,
                        8
                    ];
                    _value = _step.value;
                    response = _value;
                    return [
                        4,
                        _object_spread({
                            sources: sources,
                            isPageReloadRecommended: isPageReloadRecommended
                        }, response)
                    ];
                case 6:
                    _state.sent();
                    _state.label = 7;
                case 7:
                    _iteratorAbruptCompletion = false;
                    return [
                        3,
                        4
                    ];
                case 8:
                    return [
                        3,
                        15
                    ];
                case 9:
                    err = _state.sent();
                    _didIteratorError = true;
                    _iteratorError = err;
                    return [
                        3,
                        15
                    ];
                case 10:
                    _state.trys.push([
                        10,
                        ,
                        13,
                        14
                    ]);
                    if (!(_iteratorAbruptCompletion && _iterator.return != null)) return [
                        3,
                        12
                    ];
                    return [
                        4,
                        _await_async_generator(_iterator.return())
                    ];
                case 11:
                    _state.sent();
                    _state.label = 12;
                case 12:
                    return [
                        3,
                        14
                    ];
                case 13:
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                    return [
                        7
                    ];
                case 14:
                    return [
                        7
                    ];
                case 15:
                    return [
                        3,
                        17
                    ];
                case 16:
                    err1 = _state.sent();
                    if (err1.message === 'Server responded: permission denied') {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredPermissionDenied);
                    } else if (err1.message.startsWith('Cannot send request:')) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredCannotSend);
                    } else if (err1.message.startsWith('Request failed:')) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredRequestFailed);
                    } else if (err1.message.startsWith('Cannot parse chunk:')) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredCannotParseChunk);
                    } else if (err1.message === 'Unknown chunk result') {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredUnknownChunk);
                    } else if (err1.message.startsWith('Server responded:')) {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredApi);
                    } else {
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightErroredOther);
                    }
                    throw err1;
                case 17:
                    return [
                        2
                    ];
            }
        });
    });
    return _getInsight1.apply(this, arguments);
}
function onGoToSettings() {
    var rootTarget = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().rootTarget();
    if (rootTarget === null) {
        return;
    }
    var url = CHROME_SETTINGS_URL;
    void rootTarget.targetAgent().invoke_createTarget({
        url: url
    }).then(function(result) {
        if (result.getError()) {
            _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(url);
        }
    });
}
function onDisableFeature() {
    try {
        _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.moduleSetting('console-insights-enabled').set(false);
    } finally{
        _class_private_method_get(this, _onClose, onClose).call(this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_9__.InspectorView.InspectorView.instance().displayReloadRequiredWarning('Reload for the change to apply.');
    }
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingFeatureDisabled);
}
function goToNextPage() {
    _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
        type: "consent-onboarding" /* State.CONSENT_ONBOARDING */ ,
        page: "legal" /* ConsentOnboardingPage.PAGE2 */ 
    });
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingNextPage);
}
function focusHeader() {
    var _class_private_field_get_querySelector;
    (_class_private_field_get_querySelector = _class_private_field_get(this, _shadow).querySelector('header h2')) === null || _class_private_field_get_querySelector === void 0 ? void 0 : _class_private_field_get_querySelector.focus();
}
function termsChecked() {
    var checkbox = _class_private_field_get(this, _shadow).querySelector('.terms');
    if (!(checkbox === null || checkbox === void 0 ? void 0 : checkbox.checked)) {
        return false;
    }
    return true;
}
function onConsentOnboardingConfirmed() {
    if (!_class_private_method_get(this, _termsChecked, termsChecked).call(this)) {
        return;
    }
    _class_private_method_get(this, _getOnboardingCompletedSetting, getOnboardingCompletedSetting).call(this).set(true);
    _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
        type: "loading" /* State.LOADING */ ,
        consentReminderConfirmed: false,
        consentOnboardingFinished: _class_private_method_get(this, _getOnboardingCompletedSetting, getOnboardingCompletedSetting).call(this).get()
    });
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingConfirmed);
    void _class_private_method_get(this, _generateInsightIfNeeded, generateInsightIfNeeded).call(this);
}
function goToPrevPage() {
    _class_private_method_get(this, _transitionTo, transitionTo).call(this, {
        type: "consent-onboarding" /* State.CONSENT_ONBOARDING */ ,
        page: "private" /* ConsentOnboardingPage.PAGE1 */ 
    });
    _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.InsightsOnboardingPrevPage);
}
function renderCancelButton() {
    // clang-format off
    return html(_templateObject1(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _onClose, onClose), {
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        jslogContext: 'cancel'
    }, i18nString(UIStrings.cancel), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
// clang-format on
}
function renderDisableFeatureButton() {
    // clang-format off
    return html(_templateObject2(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _onDisableFeature, onDisableFeature), {
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        jslogContext: 'disable'
    }, i18nString(UIStrings.disableFeature), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
// clang-format on
}
function renderNextButton() {
    // clang-format off
    return html(_templateObject3(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _goToNextPage, goToNextPage), {
        variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
        jslogContext: 'next'
    }, i18nString(UIStrings.next), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
// clang-format on
}
function renderBackButton() {
    // clang-format off
    return html(_templateObject4(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _goToPrevPage, goToPrevPage), {
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        jslogContext: 'back'
    }, i18nString(UIStrings.back), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
// clang-format on
}
function renderContinueButton(handler) {
    var disabled = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    // clang-format off
    return html(_templateObject5(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, handler, {
        variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
        disabled: disabled,
        jslogContext: 'continue'
    }, i18nString(UIStrings.continue), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
// clang-format on
}
function renderSearchButton() {
    // clang-format off
    return html(_templateObject6(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _onSearch, onSearch), {
        variant: "outlined" /* Buttons.Button.Variant.OUTLINED */ ,
        jslogContext: 'search'
    }, i18nString(UIStrings.search), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
// clang-format on
}
function renderLearnMoreAboutInsights() {
    // clang-format off
    return html(_templateObject7(), LEARNMORE_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({
        click: true
    }), i18nString(UIStrings.learnMore));
// clang-format on
}
function onTermsChange() {
    _class_private_method_get(this, _render, render1).call(this);
}
function renderMain() {
    var _Common_Settings_Settings_instance_getHostConfig;
    var jslog = "".concat(_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section(_class_private_field_get(this, _state).type).track({
        resize: true
    }));
    var disallowLogging = ((_Common_Settings_Settings_instance_getHostConfig = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()) === null || _Common_Settings_Settings_instance_getHostConfig === void 0 ? void 0 : _Common_Settings_Settings_instance_getHostConfig.devToolsConsoleInsights.disallowLogging) === true;
    // clang-format off
    switch(_class_private_field_get(this, _state).type){
        case "loading" /* State.LOADING */ :
            return html(_templateObject8(), jslog);
        case "insight" /* State.INSIGHT */ :
            return html(_templateObject10(), jslog, _class_private_field_get(this, _state).validMarkdown ? html(_templateObject9(), _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView.litTagName, {
                tokens: _class_private_field_get(this, _state).tokens,
                renderer: _class_private_field_get(this, _renderer)
            }, _ui_components_markdown_view_markdown_view_js__WEBPACK_IMPORTED_MODULE_8__.MarkdownView.MarkdownView.litTagName) : _class_private_field_get(this, _state).explanation, (_class_private_field_get(this, _state).sources.length + (_class_private_field_get(this, _state).isPageReloadRecommended ? 1 : 0)) * 20, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.expand('sources').track({
                click: true
            }), i18nString(UIStrings.inputData), ConsoleInsightSourcesList.litTagName, _class_private_field_get(this, _state).sources, _class_private_field_get(this, _state).isPageReloadRecommended, ConsoleInsightSourcesList.litTagName, _class_private_method_get(this, _renderSearchButton, renderSearchButton).call(this));
        case "error" /* State.ERROR */ :
            return html(_templateObject11(), jslog, i18nString(UIStrings.errorBody));
        case "consent-reminder" /* State.CONSENT_REMINDER */ :
            return html(_templateObject12(), jslog, disallowLogging ? '' : 'Human reviewers may process this information for quality purposes. Don’t submit sensitive information.', TERMS_OF_SERVICE_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('terms-of-service').track({
                click: true
            }), ConsoleInsightSourcesList.litTagName, _class_private_field_get(this, _state).sources, _class_private_field_get(this, _state).isPageReloadRecommended, ConsoleInsightSourcesList.litTagName);
        case "consent-onboarding" /* State.CONSENT_ONBOARDING */ :
            switch(_class_private_field_get(this, _state).page){
                case "private" /* ConsentOnboardingPage.PAGE1 */ :
                    return html(_templateObject13(), jslog, PRIVACY_POLICY_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('privacy-notice').track({
                        click: true
                    }));
                case "legal" /* ConsentOnboardingPage.PAGE2 */ :
                    return html(_templateObject14(), jslog, CODE_SNIPPET_WARNING_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('use-code-with-caution').track({
                        click: true
                    }), _class_private_method_get(this, _onTermsChange, onTermsChange), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.toggle('terms-of-service-accepted'), TERMS_OF_SERVICE_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('terms-of-service').track({
                        click: true
                    }));
            }
        case "not-logged-in" /* State.NOT_LOGGED_IN */ :
            return html(_templateObject15(), jslog, i18nString(UIStrings.notLoggedIn));
        case "sync-is-off" /* State.SYNC_IS_OFF */ :
            return html(_templateObject16(), jslog, i18nString(UIStrings.syncIsOff));
        case "offline" /* State.OFFLINE */ :
            return html(_templateObject17(), jslog, i18nString(UIStrings.offline));
    }
// clang-format on
}
function renderFooter() {
    var _Common_Settings_Settings_instance_getHostConfig;
    var showThumbsUpDownButtons = ((_Common_Settings_Settings_instance_getHostConfig = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().getHostConfig()) === null || _Common_Settings_Settings_instance_getHostConfig === void 0 ? void 0 : _Common_Settings_Settings_instance_getHostConfig.devToolsConsoleInsights.disallowLogging) !== true;
    // clang-format off
    var disclaimer = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html(_templateObject18(), LEARNMORE_URL, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('learn-more').track({
        click: true
    }), i18nString(UIStrings.learnMore));
    switch(_class_private_field_get(this, _state).type){
        case "loading" /* State.LOADING */ :
            return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing;
        case "error" /* State.ERROR */ :
        case "offline" /* State.OFFLINE */ :
            return html(_templateObject19(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer'), disclaimer);
        case "not-logged-in" /* State.NOT_LOGGED_IN */ :
        case "sync-is-off" /* State.SYNC_IS_OFF */ :
            return html(_templateObject20(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer'), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _onGoToSettings, onGoToSettings), {
                variant: "primary" /* Buttons.Button.Variant.PRIMARY */ ,
                jslogContext: 'update-settings'
            }, UIStrings.updateSettings, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
        case "consent-reminder" /* State.CONSENT_REMINDER */ :
            return html(_templateObject21(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer'), disclaimer, _class_private_method_get(this, _renderCancelButton, renderCancelButton).call(this), _class_private_method_get(this, _renderContinueButton, renderContinueButton).call(this, _class_private_method_get(this, _onConsentReminderConfirmed, onConsentReminderConfirmed)));
        case "consent-onboarding" /* State.CONSENT_ONBOARDING */ :
            switch(_class_private_field_get(this, _state).page){
                case "private" /* ConsentOnboardingPage.PAGE1 */ :
                    return html(_templateObject22(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer'), _class_private_method_get(this, _renderLearnMoreAboutInsights, renderLearnMoreAboutInsights).call(this), _class_private_method_get(this, _renderCancelButton, renderCancelButton).call(this), _class_private_method_get(this, _renderDisableFeatureButton, renderDisableFeatureButton).call(this), _class_private_method_get(this, _renderNextButton, renderNextButton).call(this));
                case "legal" /* ConsentOnboardingPage.PAGE2 */ :
                    return html(_templateObject23(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer'), _class_private_method_get(this, _renderLearnMoreAboutInsights, renderLearnMoreAboutInsights).call(this), _class_private_method_get(this, _renderBackButton, renderBackButton).call(this), _class_private_method_get(this, _renderDisableFeatureButton, renderDisableFeatureButton).call(this), _class_private_method_get(this, _renderContinueButton, renderContinueButton).call(this, _class_private_method_get(this, _onConsentOnboardingConfirmed, onConsentOnboardingConfirmed), !_class_private_method_get(this, _termsChecked, termsChecked).call(this)));
            }
        case "insight" /* State.INSIGHT */ :
            return html(_templateObject25(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.section('footer'), disclaimer, showThumbsUpDownButtons ? html(_templateObject24(), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, 'true', {
                variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                iconName: 'thumb-up',
                active: _class_private_field_get(this, _selectedRating) !== undefined && _class_private_field_get(this, _selectedRating),
                title: i18nString(UIStrings.thumbsUp),
                jslogContext: 'thumbs-up'
            }, _class_private_method_get(this, _onRating, onRating), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, 'false', {
                variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                iconName: 'thumb-down',
                active: _class_private_field_get(this, _selectedRating) !== undefined && !_class_private_field_get(this, _selectedRating),
                title: i18nString(UIStrings.thumbsDown),
                jslogContext: 'thumbs-down'
            }, _class_private_method_get(this, _onRating, onRating), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing, _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, {
                variant: "icon" /* Buttons.Button.Variant.ICON */ ,
                size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
                iconName: 'report',
                title: i18nString(UIStrings.report),
                jslogContext: 'report'
            }, _class_private_method_get(this, _onReport, onReport), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName);
    }
// clang-format on
}
function getHeader() {
    switch(_class_private_field_get(this, _state).type){
        case "not-logged-in" /* State.NOT_LOGGED_IN */ :
            return i18nString(UIStrings.signInToUse);
        case "sync-is-off" /* State.SYNC_IS_OFF */ :
            return i18nString(UIStrings.notAvailable);
        case "offline" /* State.OFFLINE */ :
            return i18nString(UIStrings.offlineHeader);
        case "loading" /* State.LOADING */ :
            return i18nString(UIStrings.generating);
        case "insight" /* State.INSIGHT */ :
            return i18nString(UIStrings.insight);
        case "error" /* State.ERROR */ :
            return i18nString(UIStrings.error);
        case "consent-reminder" /* State.CONSENT_REMINDER */ :
            return i18nString(UIStrings.inputData);
        case "consent-onboarding" /* State.CONSENT_ONBOARDING */ :
            switch(_class_private_field_get(this, _state).page){
                case "private" /* ConsentOnboardingPage.PAGE1 */ :
                    return 'Privacy notice';
                case "legal" /* ConsentOnboardingPage.PAGE2 */ :
                    return 'Legal notice';
            }
    }
}
function render1() {
    // clang-format off
    render(html(_templateObject26(), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.pane('console-insights').track({
        resize: true
    }), _class_private_method_get(this, _getHeader, getHeader).call(this), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, {
        variant: "icon" /* Buttons.Button.Variant.ICON */ ,
        size: "SMALL" /* Buttons.Button.Size.SMALL */ ,
        iconName: 'cross',
        title: i18nString(UIStrings.closeInsight)
    }, _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.close().track({
        click: true
    }), _class_private_method_get(this, _onClose, onClose), _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_5__.Button.Button.litTagName, _class_private_method_get(this, _renderMain, renderMain).call(this), _class_private_method_get(this, _renderFooter, renderFooter).call(this)), _class_private_field_get(this, _shadow), {
        host: this
    });
// clang-format on
}
var _shadow1 = /*#__PURE__*/ new WeakMap(), _sources = /*#__PURE__*/ new WeakMap(), _isPageReloadRecommended = /*#__PURE__*/ new WeakMap(), _render1 = /*#__PURE__*/ new WeakSet();
var ConsoleInsightSourcesList = /*#__PURE__*/ function(HTMLElement1) {
    "use strict";
    _inherits(ConsoleInsightSourcesList, HTMLElement1);
    var _super = _create_super(ConsoleInsightSourcesList);
    function ConsoleInsightSourcesList() {
        _class_call_check(this, ConsoleInsightSourcesList);
        var _this;
        _this = _super.call(this);
        _class_private_method_init(_assert_this_initialized(_this), _render1);
        _class_private_field_init(_assert_this_initialized(_this), _shadow1, {
            writable: true,
            value: _this.attachShadow({
                mode: 'open'
            })
        });
        _class_private_field_init(_assert_this_initialized(_this), _sources, {
            writable: true,
            value: []
        });
        _class_private_field_init(_assert_this_initialized(_this), _isPageReloadRecommended, {
            writable: true,
            value: false
        });
        _class_private_field_get(_this, _shadow1).adoptedStyleSheets = [
            _consoleInsightSourcesList_css_js__WEBPACK_IMPORTED_MODULE_14__["default"],
            _ui_components_input_input_js__WEBPACK_IMPORTED_MODULE_7__.checkboxStyles
        ];
        return _this;
    }
    _create_class(ConsoleInsightSourcesList, [
        {
            key: "sources",
            set: function set(values) {
                _class_private_field_set(this, _sources, values);
                _class_private_method_get(this, _render1, render2).call(this);
            }
        },
        {
            key: "isPageReloadRecommended",
            set: function set(isPageReloadRecommended) {
                _class_private_field_set(this, _isPageReloadRecommended, isPageReloadRecommended);
                _class_private_method_get(this, _render1, render2).call(this);
            }
        }
    ]);
    return ConsoleInsightSourcesList;
}(_wrap_native_super(HTMLElement));
_define_property(ConsoleInsightSourcesList, "litTagName", _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.literal(_templateObject27()));
function render2() {
    // clang-format off
    render(html(_templateObject30(), Directives.repeat(_class_private_field_get(this, _sources), function(item) {
        return item.value;
    }, function(item) {
        return html(_templateObject28(), localizeType(item.type), i18nString(UIStrings.opensInNewTab), encodeURIComponent(item.value), _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_11__.link('source-' + item.type).track({
            click: true
        }), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, localizeType(item.type));
    }), _class_private_field_get(this, _isPageReloadRecommended) ? _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.html(_templateObject29(), _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_6__.Icon.Icon.litTagName, i18nString(UIStrings.reloadRecommendation)) : _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_10__.nothing), _class_private_field_get(this, _shadow1), {
        host: this
    });
// clang-format on
}
customElements.define('devtools-console-insight', ConsoleInsight);
customElements.define('devtools-console-insight-sources-list', ConsoleInsightSourcesList); //# sourceMappingURL=ConsoleInsight.js.map


}),
"./panels/explain/components/consoleInsight.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:host {\n  --max-height: 2000px;\n  --loading-max-height: 140px;\n\n  font-family: var(--default-font-family);\n  font-size: inherit;\n  display: block;\n  overflow: hidden;\n  max-height: 0;\n}\n\n:host-context(.opening) {\n  animation: expand-to-loading var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);\n  animation-fill-mode: forwards;\n}\n\n:host-context(.loaded) {\n  animation: expand-to-full var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);\n  animation-fill-mode: forwards;\n}\n\n:host-context(.closing) {\n  animation: collapse var(--sys-motion-duration-medium2) var(--sys-motion-easing-emphasized);\n  animation-fill-mode: forwards;\n}\n\n@keyframes expand-to-loading {\n  from {\n    max-height: 0;\n  }\n\n  to {\n    max-height: var(--loading-max-height);\n  }\n}\n\n@keyframes expand-to-full {\n  from {\n    max-height: var(--actual-height, var(--loading-max-height));\n  }\n\n  to {\n    max-height: var(--max-height);\n  }\n}\n\n@keyframes collapse {\n  from {\n    max-height: var(--actual-height, var(--max-height));\n  }\n\n  to {\n    max-height: 0;\n    margin-top: 0;\n    margin-bottom: 0;\n  }\n}\n\n.wrapper {\n  padding: 16px;\n  background-color: var(--sys-color-cdt-base-container);\n  border-radius: 16px;\n  /* stylelint-disable-next-line property-no-unknown */\n  container-type: inline-size;\n}\n\n.wrapper.top {\n  border-radius: 16px 16px 4px 4px;\n}\n\n.wrapper.bottom {\n  margin-top: 5px;\n  border-radius: 4px 4px 16px 16px;\n}\n\nheader {\n  display: flex;\n  flex-direction: row;\n  gap: 6px;\n  color: var(--sys-color-on-surface);\n  font-size: 13px;\n  font-style: normal;\n  font-weight: 500;\n  height: 14px;\n}\n\nheader:focus-visible {\n  outline: none;\n}\n\nheader > .filler {\n  flex: 1;\n}\n\nmain {\n  --override-markdown-view-message-color: var(--sys-color-on-surface);\n\n  margin: 12px 0 0;\n  color: var(--sys-color-on-surface);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n\n  p {\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n  }\n\n  ul {\n    list-style-type: none;\n    list-style-position: inside;\n    padding-inline-start: 0.2em;\n\n    li {\n      display: list-item;\n      list-style-type: disc;\n      list-style-position: outside;\n      margin-inline-start: 1em;\n    }\n\n    li::marker {\n      font-size: 11px;\n      line-height: 1;\n    }\n  }\n\n  label {\n    display: inline-flex;\n    flex-direction: row;\n    gap: 0.5em;\n\n    input,\n    span {\n      vertical-align: middle;\n    }\n\n    input[type="checkbox"] {\n      margin-top: 0.3em;\n    }\n  }\n}\n\ndevtools-markdown-view {\n  margin-bottom: 12px;\n}\n\nfooter {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  color: var(--sys-color-on-surface);\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  margin-top: 14px;\n  gap: 32px;\n}\n\n/* stylelint-disable-next-line at-rule-no-unknown */\n@container (max-width: 600px) {\n  footer {\n    gap: 8px;\n  }\n}\n\nfooter > .filler {\n  flex: 1;\n}\n\nfooter .rating {\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n}\n\ntextarea {\n  height: 84px;\n  padding: 10px;\n  border-radius: 8px;\n  border: 1px solid var(--sys-color-neutral-outline);\n  width: 100%;\n  font-family: var(--default-font-family);\n  font-size: inherit;\n}\n\n.buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n}\n\nmain .buttons {\n  margin-top: 12px;\n}\n\n.disclaimer {\n  display: flex;\n  gap: 2px;\n  color: var(--sys-color-on-surface-subtle);\n  font-size: 11px;\n  align-items: flex-start;\n  flex-direction: column;\n  max-width: 360px;\n}\n\n.link {\n  color: var(--sys-color-primary);\n  text-decoration-line: underline;\n\n  devtools-icon {\n    color: var(--sys-color-primary);\n    width: 14px;\n    height: 14px;\n  }\n}\n\n.loader {\n  background:\n    linear-gradient(\n      130deg,\n      transparent 0%,\n      var(--sys-color-gradient-tertiary) 20%,\n      var(--sys-color-gradient-primary) 40%,\n      transparent 60%,\n      var(--sys-color-gradient-tertiary) 80%,\n      var(--sys-color-gradient-primary) 100%\n    );\n  background-position: 0% 0%;\n  background-size: 250% 250%;\n  animation: gradient 5s infinite linear;\n}\n\n@keyframes gradient {\n  0% { background-position: 0 0; }\n  100% { background-position: 100% 100%; }\n}\n\nsummary {\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 20px;\n}\n\ndetails {\n  --collapsed-height: 20px;\n\n  overflow: hidden;\n  height: var(--collapsed-height);\n}\n\ndetails[open] {\n  height: calc(var(--list-height) + var(--collapsed-height) + /* margin */ 8px);\n  transition: height var(--sys-motion-duration-short4) var(--sys-motion-easing-emphasized);\n}\n\nh2 {\n  display: block;\n  font-size: inherit;\n  margin: 0;\n  font-weight: inherit;\n}\n\nh2:focus-visible {\n  outline: none;\n}\n\n.info {\n  width: 20px;\n  height: 20px;\n}\n\ndevtools-icon[name="spark"] {\n  color: var(--sys-color-primary-bright);\n}\n\ndevtools-icon[name="dog-paw"] {\n  width: 16px;\n  height: 16px;\n}\n\n/*# sourceURL=./components/consoleInsight.css */\n');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),
"./panels/explain/components/consoleInsightSourcesList.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync('/*\n * Copyright 2023 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:host {\n  display: block;\n}\n\nul {\n  color: var(--sys-color-primary);\n  font-size: 12px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  margin-top: 8px;\n}\n\nli {\n  list-style-type: none;\n}\n\nul .link {\n  color: var(--sys-color-primary);\n  display: inline-flex !important; /* stylelint-disable-line declaration-no-important */\n  align-items: center;\n  gap: 4px;\n  text-decoration-line: underline;\n}\n\ndevtools-icon {\n  height: 16px;\n  width: 16px;\n}\n\ndevtools-icon[name="open-externally"] {\n  color: var(--icon-link);\n}\n\n.source-disclaimer {\n  color: var(--sys-color-on-surface-subtle);\n}\n\n/*# sourceURL=./components/consoleInsightSourcesList.css */\n');
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