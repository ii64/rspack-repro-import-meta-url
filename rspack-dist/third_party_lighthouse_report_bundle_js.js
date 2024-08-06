"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_lighthouse_report_bundle_js"], {
"./third_party/lighthouse/report/bundle.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DOM: function() { return Y; },
  ReportRenderer: function() { return ne; },
  ReportUIFeatures: function() { return re; },
  format: function() { return Lt; },
  renderReport: function() { return kt; },
  swapLocale: function() { return St; }
});
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self1) {
    if (self1 === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self1;
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
        var self1 = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self1, args);
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var _r;
var Pe = .8999999999999999, Re = .5, Ne = .49999999999999994;
function Ie(r) {
    var e = Math.sign(r);
    r = Math.abs(r);
    var t = .254829592, n = -.284496736, o = 1.421413741, i = -1.453152027, a = 1.061405429, s = 1 / (1 + .3275911 * r), c = s * (t + s * (n + s * (o + s * (i + s * a))));
    return e * (1 - c * Math.exp(-r * r));
}
function ve(param, t) {
    var r = param.median, e = param.p10;
    if (r <= 0) throw new Error("median must be greater than zero");
    if (e <= 0) throw new Error("p10 must be greater than zero");
    if (e >= r) throw new Error("p10 must be less than the median");
    if (t <= 0) return 1;
    var n = .9061938024368232, o = Math.max(Number.MIN_VALUE, t / r), i = Math.log(o), a = Math.max(Number.MIN_VALUE, e / r), l = -Math.log(a), s = i * n / l, c = (1 - Ie(s)) / 2, d;
    return t <= e ? d = Math.max(.9, Math.min(1, c)) : t <= r ? d = Math.max(Re, Math.min(Pe, c)) : d = Math.max(0, Math.min(Ne, c)), d;
}
var $ = "\u2026", Ue = "\xA0", be = .9, $e = {
    PASS: {
        label: "pass",
        minScore: be
    },
    AVERAGE: {
        label: "average",
        minScore: .5
    },
    FAIL: {
        label: "fail"
    },
    ERROR: {
        label: "error"
    }
}, Oe = [
    "com",
    "co",
    "gov",
    "edu",
    "ac",
    "org",
    "go",
    "gob",
    "or",
    "net",
    "in",
    "ne",
    "nic",
    "gouv",
    "web",
    "spb",
    "blog",
    "jus",
    "kiev",
    "mil",
    "wi",
    "qc",
    "ca",
    "bel",
    "on"
], k = /*#__PURE__*/ function() {
    "use strict";
    function r() {
        _class_call_check(this, r);
    }
    _create_class(r, null, [
        {
            key: "RATINGS",
            get: function get() {
                return $e;
            }
        },
        {
            key: "PASS_THRESHOLD",
            get: function get() {
                return be;
            }
        },
        {
            key: "MS_DISPLAY_VALUE",
            get: function get() {
                return "%10d".concat(Ue, "ms");
            }
        },
        {
            key: "getFinalDisplayedUrl",
            value: function getFinalDisplayedUrl(e) {
                if (e.finalDisplayedUrl) return e.finalDisplayedUrl;
                if (e.finalUrl) return e.finalUrl;
                throw new Error("Could not determine final displayed URL");
            }
        },
        {
            key: "getMainDocumentUrl",
            value: function getMainDocumentUrl(e) {
                return e.mainDocumentUrl || e.finalUrl;
            }
        },
        {
            key: "getFullPageScreenshot",
            value: function getFullPageScreenshot(e) {
                var _e_audits_fullpagescreenshot;
                return e.fullPageScreenshot ? e.fullPageScreenshot : (_e_audits_fullpagescreenshot = e.audits["full-page-screenshot"]) === null || _e_audits_fullpagescreenshot === void 0 ? void 0 : _e_audits_fullpagescreenshot.details;
            }
        },
        {
            key: "getEntityFromUrl",
            value: function getEntityFromUrl(e, t) {
                return t && t.find(function(o) {
                    return o.origins.find(function(i) {
                        return e.startsWith(i);
                    });
                }) || r.getPseudoRootDomain(e);
            }
        },
        {
            key: "splitMarkdownCodeSpans",
            value: function splitMarkdownCodeSpans(e) {
                var t = [], n = e.split(/`(.*?)`/g);
                for(var o = 0; o < n.length; o++){
                    var i = n[o];
                    if (!i) continue;
                    var a = o % 2 !== 0;
                    t.push({
                        isCode: a,
                        text: i
                    });
                }
                return t;
            }
        },
        {
            key: "splitMarkdownLink",
            value: function splitMarkdownLink(e) {
                var t = [], n = e.split(/\[([^\]]+?)\]\((https?:\/\/.*?)\)/g);
                for(; n.length;){
                    var _n_splice = _sliced_to_array(n.splice(0, 3), 3), o = _n_splice[0], i = _n_splice[1], a = _n_splice[2];
                    o && t.push({
                        isLink: !1,
                        text: o
                    }), i && a && t.push({
                        isLink: !0,
                        text: i,
                        linkHref: a
                    });
                }
                return t;
            }
        },
        {
            key: "truncate",
            value: function truncate(e, t) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "\u2026";
                if (e.length <= t) return e;
                var i = new Intl.Segmenter(void 0, {
                    granularity: "grapheme"
                }).segment(e)[Symbol.iterator](), a = 0;
                for(var l = 0; l <= t - n.length; l++){
                    var s = i.next();
                    if (s.done) return e;
                    a = s.value.index;
                }
                for(var l1 = 0; l1 < n.length; l1++)if (i.next().done) return e;
                return e.slice(0, a) + n;
            }
        },
        {
            key: "getURLDisplayName",
            value: function getURLDisplayName(e, t) {
                t = t || {
                    numPathParts: void 0,
                    preserveQuery: void 0,
                    preserveHost: void 0
                };
                var n = t.numPathParts !== void 0 ? t.numPathParts : 2, o = t.preserveQuery !== void 0 ? t.preserveQuery : !0, i = t.preserveHost || !1, a;
                if (e.protocol === "about:" || e.protocol === "data:") a = e.href;
                else {
                    a = e.pathname;
                    var s = a.split("/").filter(function(c) {
                        return c.length;
                    });
                    n && s.length > n && (a = $ + s.slice(-1 * n).join("/")), i && (a = "".concat(e.host, "/").concat(a.replace(/^\//, ""))), o && (a = "".concat(a).concat(e.search));
                }
                var l = 64;
                if (e.protocol !== "data:" && (a = a.slice(0, 200), a = a.replace(/([a-f0-9]{7})[a-f0-9]{13}[a-f0-9]*/g, "$1".concat($)), a = a.replace(/([a-zA-Z0-9-_]{9})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9-_]{10,}/g, "$1".concat($)), a = a.replace(/(\d{3})\d{6,}/g, "$1".concat($)), a = a.replace(/\u2026+/g, $), a.length > l && a.includes("?") && (a = a.replace(/\?([^=]*)(=)?.*/, "?$1$2".concat($)), a.length > l && (a = a.replace(/\?.*/, "?".concat($))))), a.length > l) {
                    var s1 = a.lastIndexOf(".");
                    s1 >= 0 ? a = a.slice(0, l - 1 - (a.length - s1)) + "".concat($).concat(a.slice(s1)) : a = a.slice(0, l - 1) + $;
                }
                return a;
            }
        },
        {
            key: "getChromeExtensionOrigin",
            value: function getChromeExtensionOrigin(e) {
                var t = new URL(e);
                return t.protocol + "//" + t.host;
            }
        },
        {
            key: "parseURL",
            value: function parseURL(e) {
                var t = new URL(e);
                return {
                    file: r.getURLDisplayName(t),
                    hostname: t.hostname,
                    origin: t.protocol === "chrome-extension:" ? r.getChromeExtensionOrigin(e) : t.origin
                };
            }
        },
        {
            key: "createOrReturnURL",
            value: function createOrReturnURL(e) {
                return _instanceof(e, URL) ? e : new URL(e);
            }
        },
        {
            key: "getPseudoTld",
            value: function getPseudoTld(e) {
                var t = e.split(".").slice(-2);
                return Oe.includes(t[0]) ? ".".concat(t.join(".")) : ".".concat(t[t.length - 1]);
            }
        },
        {
            key: "getPseudoRootDomain",
            value: function getPseudoRootDomain(e) {
                var t = r.createOrReturnURL(e).hostname, o = r.getPseudoTld(t).split(".");
                return t.split(".").slice(-o.length).join(".");
            }
        },
        {
            key: "filterRelevantLines",
            value: function filterRelevantLines(e, t, n) {
                if (t.length === 0) return e.slice(0, n * 2 + 1);
                var o = 3, i = new Set;
                return t = t.sort(function(a, l) {
                    return (a.lineNumber || 0) - (l.lineNumber || 0);
                }), t.forEach(function(param) {
                    var a = param.lineNumber;
                    var l = a - n, s = a + n;
                    for(; l < 1;)l++, s++;
                    i.has(l - o - 1) && (l -= o);
                    for(var c = l; c <= s; c++){
                        var d = c;
                        i.add(d);
                    }
                }), e.filter(function(a) {
                    return i.has(a.lineNumber);
                });
            }
        },
        {
            key: "computeLogNormalScore",
            value: function computeLogNormalScore(e, t) {
                var n = ve(e, t);
                return n > .9 && (n += .05 * (n - .9)), Math.floor(n * 100) / 100;
            }
        }
    ]);
    return r;
}();
function Ve(r) {
    var e = r.createFragment(), t = r.createElement("style");
    t.append("\n    .lh-3p-filter {\n      color: var(--color-gray-600);\n      float: right;\n      padding: 6px var(--stackpack-padding-horizontal);\n    }\n    .lh-3p-filter-label, .lh-3p-filter-input {\n      vertical-align: middle;\n      user-select: none;\n    }\n    .lh-3p-filter-input:disabled + .lh-3p-ui-string {\n      text-decoration: line-through;\n    }\n  "), e.append(t);
    var n = r.createElement("div", "lh-3p-filter"), o = r.createElement("label", "lh-3p-filter-label"), i = r.createElement("input", "lh-3p-filter-input");
    i.setAttribute("type", "checkbox"), i.setAttribute("checked", "");
    var a = r.createElement("span", "lh-3p-ui-string");
    a.append("Show 3rd party resources");
    var l = r.createElement("span", "lh-3p-filter-count");
    return o.append(" ", i, " ", a, " (", l, ") "), n.append(" ", o, " "), e.append(n), e;
}
function Ge(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-audit"), n = r.createElement("details", "lh-expandable-details"), o = r.createElement("summary"), i = r.createElement("div", "lh-audit__header lh-expandable-details__summary"), a = r.createElement("span", "lh-audit__score-icon"), l = r.createElement("span", "lh-audit__title-and-text"), s = r.createElement("span", "lh-audit__title"), c = r.createElement("span", "lh-audit__display-text");
    l.append(" ", s, " ", c, " ");
    var d = r.createElement("div", "lh-chevron-container");
    i.append(" ", a, " ", l, " ", d, " "), o.append(" ", i, " ");
    var p = r.createElement("div", "lh-audit__description"), h = r.createElement("div", "lh-audit__stackpacks");
    return n.append(" ", o, " ", p, " ", h, " "), t.append(" ", n, " "), e.append(t), e;
}
function Be(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-category-header"), n = r.createElement("div", "lh-score__gauge");
    n.setAttribute("role", "heading"), n.setAttribute("aria-level", "2");
    var o = r.createElement("div", "lh-category-header__description");
    return t.append(" ", n, " ", o, " "), e.append(t), e;
}
function je(r) {
    var e = r.createFragment(), t = r.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-chevron");
    t.setAttribute("viewBox", "0 0 100 100");
    var n = r.createElementNS("http://www.w3.org/2000/svg", "g", "lh-chevron__lines"), o = r.createElementNS("http://www.w3.org/2000/svg", "path", "lh-chevron__line lh-chevron__line-left");
    o.setAttribute("d", "M10 50h40");
    var i = r.createElementNS("http://www.w3.org/2000/svg", "path", "lh-chevron__line lh-chevron__line-right");
    return i.setAttribute("d", "M90 50H50"), n.append(" ", o, " ", i, " "), t.append(" ", n, " "), e.append(t), e;
}
function We(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-audit-group"), n = r.createElement("details", "lh-clump"), o = r.createElement("summary"), i = r.createElement("div", "lh-audit-group__summary"), a = r.createElement("div", "lh-audit-group__header"), l = r.createElement("span", "lh-audit-group__title"), s = r.createElement("span", "lh-audit-group__itemcount");
    a.append(" ", l, " ", s, " ", " ", " ");
    var c = r.createElement("div", "lh-clump-toggle"), d = r.createElement("span", "lh-clump-toggletext--show"), p = r.createElement("span", "lh-clump-toggletext--hide");
    return c.append(" ", d, " ", p, " "), i.append(" ", a, " ", c, " "), o.append(" ", i, " "), n.append(" ", o, " "), t.append(" ", " ", n, " "), e.append(t), e;
}
function qe(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-crc-container"), n = r.createElement("style");
    n.append('\n      .lh-crc .lh-tree-marker {\n        width: 12px;\n        height: 26px;\n        display: block;\n        float: left;\n        background-position: top left;\n      }\n      .lh-crc .lh-horiz-down {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>\');\n      }\n      .lh-crc .lh-right {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-up-right {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-vert-right {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-vert {\n        background: url(\'data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>\');\n      }\n      .lh-crc .lh-crc-tree {\n        font-size: 14px;\n        width: 100%;\n        overflow-x: auto;\n      }\n      .lh-crc .lh-crc-node {\n        height: 26px;\n        line-height: 26px;\n        white-space: nowrap;\n      }\n      .lh-crc .lh-crc-node__tree-value {\n        margin-left: 10px;\n      }\n      .lh-crc .lh-crc-node__tree-value div {\n        display: inline;\n      }\n      .lh-crc .lh-crc-node__chain-duration {\n        font-weight: 700;\n      }\n      .lh-crc .lh-crc-initial-nav {\n        color: #595959;\n        font-style: italic;\n      }\n      .lh-crc__summary-value {\n        margin-bottom: 10px;\n      }\n    ');
    var o = r.createElement("div"), i = r.createElement("div", "lh-crc__summary-value"), a = r.createElement("span", "lh-crc__longest_duration_label"), l = r.createElement("b", "lh-crc__longest_duration");
    i.append(" ", a, " ", l, " "), o.append(" ", i, " ");
    var s = r.createElement("div", "lh-crc"), c = r.createElement("div", "lh-crc-initial-nav");
    return s.append(" ", c, " ", " "), t.append(" ", n, " ", o, " ", s, " "), e.append(t), e;
}
function Ke(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-crc-node"), n = r.createElement("span", "lh-crc-node__tree-marker"), o = r.createElement("span", "lh-crc-node__tree-value");
    return t.append(" ", n, " ", o, " "), e.append(t), e;
}
function Je(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-element-screenshot"), n = r.createElement("div", "lh-element-screenshot__content"), o = r.createElement("div", "lh-element-screenshot__image"), i = r.createElement("div", "lh-element-screenshot__mask"), a = r.createElementNS("http://www.w3.org/2000/svg", "svg");
    a.setAttribute("height", "0"), a.setAttribute("width", "0");
    var l = r.createElementNS("http://www.w3.org/2000/svg", "defs"), s = r.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    s.setAttribute("clipPathUnits", "objectBoundingBox"), l.append(" ", s, " ", " "), a.append(" ", l, " "), i.append(" ", a, " ");
    var c = r.createElement("div", "lh-element-screenshot__element-marker");
    return o.append(" ", i, " ", c, " "), n.append(" ", o, " "), t.append(" ", n, " "), e.append(t), e;
}
function Ze(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-exp-gauge-component"), n = r.createElement("div", "lh-exp-gauge__wrapper");
    n.setAttribute("target", "_blank");
    var o = r.createElement("div", "lh-exp-gauge__svg-wrapper"), i = r.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-exp-gauge"), a = r.createElementNS("http://www.w3.org/2000/svg", "g", "lh-exp-gauge__inner"), l = r.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-exp-gauge__bg"), s = r.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-exp-gauge__base lh-exp-gauge--faded"), c = r.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-exp-gauge__arc"), d = r.createElementNS("http://www.w3.org/2000/svg", "text", "lh-exp-gauge__percentage");
    a.append(" ", l, " ", s, " ", c, " ", d, " ");
    var p = r.createElementNS("http://www.w3.org/2000/svg", "g", "lh-exp-gauge__outer"), h = r.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-cover");
    p.append(" ", h, " ");
    var u = r.createElementNS("http://www.w3.org/2000/svg", "text", "lh-exp-gauge__label");
    return u.setAttribute("text-anchor", "middle"), u.setAttribute("x", "0"), u.setAttribute("y", "60"), i.append(" ", a, " ", p, " ", u, " "), o.append(" ", i, " "), n.append(" ", o, " "), t.append(" ", n, " "), e.append(t), e;
}
function Qe(r) {
    var e = r.createFragment(), t = r.createElement("style");
    t.append("\n    .lh-footer {\n      padding: var(--footer-padding-vertical) calc(var(--default-padding) * 2);\n      max-width: var(--report-content-max-width);\n      margin: 0 auto;\n    }\n    .lh-footer .lh-generated {\n      text-align: center;\n    }\n  "), e.append(t);
    var n = r.createElement("footer", "lh-footer"), o = r.createElement("ul", "lh-meta__items");
    o.append(" ");
    var i = r.createElement("div", "lh-generated"), a = r.createElement("b");
    a.append("Lighthouse");
    var l = r.createElement("span", "lh-footer__version"), s = r.createElement("a", "lh-footer__version_issue");
    return s.setAttribute("href", "https://github.com/GoogleChrome/Lighthouse/issues"), s.setAttribute("target", "_blank"), s.setAttribute("rel", "noopener"), s.append("File an issue"), i.append(" ", " Generated by ", a, " ", l, " | ", s, " "), n.append(" ", o, " ", i, " "), e.append(n), e;
}
function Xe(r) {
    var e = r.createFragment(), t = r.createElement("a", "lh-fraction__wrapper"), n = r.createElement("div", "lh-fraction__content-wrapper"), o = r.createElement("div", "lh-fraction__content"), i = r.createElement("div", "lh-fraction__background");
    o.append(" ", i, " "), n.append(" ", o, " ");
    var a = r.createElement("div", "lh-fraction__label");
    return t.append(" ", n, " ", a, " "), e.append(t), e;
}
function Ye(r) {
    var e = r.createFragment(), t = r.createElement("a", "lh-gauge__wrapper"), n = r.createElement("div", "lh-gauge__svg-wrapper"), o = r.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-gauge");
    o.setAttribute("viewBox", "0 0 120 120");
    var i = r.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-gauge-base");
    i.setAttribute("r", "56"), i.setAttribute("cx", "60"), i.setAttribute("cy", "60"), i.setAttribute("stroke-width", "8");
    var a = r.createElementNS("http://www.w3.org/2000/svg", "circle", "lh-gauge-arc");
    a.setAttribute("r", "56"), a.setAttribute("cx", "60"), a.setAttribute("cy", "60"), a.setAttribute("stroke-width", "8"), o.append(" ", i, " ", a, " "), n.append(" ", o, " ");
    var l = r.createElement("div", "lh-gauge__percentage"), s = r.createElement("div", "lh-gauge__label");
    return t.append(" ", " ", n, " ", l, " ", " ", s, " "), e.append(t), e;
}
function et(r) {
    var e = r.createFragment(), t = r.createElement("style");
    t.append("\n    /* CSS Fireworks. Originally by Eddie Lin\n       https://codepen.io/paulirish/pen/yEVMbP\n    */\n    .lh-pyro {\n      display: none;\n      z-index: 1;\n      pointer-events: none;\n    }\n    .lh-score100 .lh-pyro {\n      display: block;\n    }\n    .lh-score100 .lh-lighthouse stop:first-child {\n      stop-color: hsla(200, 12%, 95%, 0);\n    }\n    .lh-score100 .lh-lighthouse stop:last-child {\n      stop-color: hsla(65, 81%, 76%, 1);\n    }\n\n    .lh-pyro > .lh-pyro-before, .lh-pyro > .lh-pyro-after {\n      position: absolute;\n      width: 5px;\n      height: 5px;\n      border-radius: 2.5px;\n      box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;\n      animation: 1s bang ease-out infinite backwards,  1s gravity ease-in infinite backwards,  5s position linear infinite backwards;\n      animation-delay: 1s, 1s, 1s;\n    }\n\n    .lh-pyro > .lh-pyro-after {\n      animation-delay: 2.25s, 2.25s, 2.25s;\n      animation-duration: 1.25s, 1.25s, 6.25s;\n    }\n\n    @keyframes bang {\n      to {\n        opacity: 1;\n        box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47;\n      }\n    }\n    @keyframes gravity {\n      from {\n        opacity: 1;\n      }\n      to {\n        transform: translateY(80px);\n        opacity: 0;\n      }\n    }\n    @keyframes position {\n      0%, 19.9% {\n        margin-top: 4%;\n        margin-left: 47%;\n      }\n      20%, 39.9% {\n        margin-top: 7%;\n        margin-left: 30%;\n      }\n      40%, 59.9% {\n        margin-top: 6%;\n        margin-left: 70%;\n      }\n      60%, 79.9% {\n        margin-top: 3%;\n        margin-left: 20%;\n      }\n      80%, 99.9% {\n        margin-top: 3%;\n        margin-left: 80%;\n      }\n    }\n  "), e.append(t);
    var n = r.createElement("div", "lh-header-container"), o = r.createElement("div", "lh-scores-wrapper-placeholder");
    return n.append(" ", o, " "), e.append(n), e;
}
function tt(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-metric"), n = r.createElement("div", "lh-metric__innerwrap"), o = r.createElement("div", "lh-metric__icon"), i = r.createElement("span", "lh-metric__title"), a = r.createElement("div", "lh-metric__value"), l = r.createElement("div", "lh-metric__description");
    return n.append(" ", o, " ", i, " ", a, " ", l, " "), t.append(" ", n, " "), e.append(t), e;
}
function nt(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-scorescale"), n = r.createElement("span", "lh-scorescale-range lh-scorescale-range--fail");
    n.append("0\u201349");
    var o = r.createElement("span", "lh-scorescale-range lh-scorescale-range--average");
    o.append("50\u201389");
    var i = r.createElement("span", "lh-scorescale-range lh-scorescale-range--pass");
    return i.append("90\u2013100"), t.append(" ", n, " ", o, " ", i, " "), e.append(t), e;
}
function rt(r) {
    var e = r.createFragment(), t = r.createElement("style");
    t.append("\n    .lh-scores-container {\n      display: flex;\n      flex-direction: column;\n      padding: var(--default-padding) 0;\n      position: relative;\n      width: 100%;\n    }\n\n    .lh-sticky-header {\n      --gauge-circle-size: var(--gauge-circle-size-sm);\n      --plugin-badge-size: 16px;\n      --plugin-icon-size: 75%;\n      --gauge-wrapper-width: 60px;\n      --gauge-percentage-font-size: 13px;\n      position: fixed;\n      left: 0;\n      right: 0;\n      top: var(--topbar-height);\n      font-weight: 500;\n      display: none;\n      justify-content: center;\n      background-color: var(--sticky-header-background-color);\n      border-bottom: 1px solid var(--color-gray-200);\n      padding-top: var(--score-container-padding);\n      padding-bottom: 4px;\n      z-index: 2;\n      pointer-events: none;\n    }\n\n    .lh-devtools .lh-sticky-header {\n      /* The report within DevTools is placed in a container with overflow, which changes the placement of this header unless we change `position` to `sticky.` */\n      position: sticky;\n    }\n\n    .lh-sticky-header--visible {\n      display: grid;\n      grid-auto-flow: column;\n      pointer-events: auto;\n    }\n\n    /* Disable the gauge arc animation for the sticky header, so toggling display: none\n       does not play the animation. */\n    .lh-sticky-header .lh-gauge-arc {\n      animation: none;\n    }\n\n    .lh-sticky-header .lh-gauge__label,\n    .lh-sticky-header .lh-fraction__label {\n      display: none;\n    }\n\n    .lh-highlighter {\n      width: var(--gauge-wrapper-width);\n      height: 1px;\n      background-color: var(--highlighter-background-color);\n      /* Position at bottom of first gauge in sticky header. */\n      position: absolute;\n      grid-column: 1;\n      bottom: -1px;\n      left: 0px;\n      right: 0px;\n    }\n  "), e.append(t);
    var n = r.createElement("div", "lh-scores-wrapper"), o = r.createElement("div", "lh-scores-container"), i = r.createElement("div", "lh-pyro"), a = r.createElement("div", "lh-pyro-before"), l = r.createElement("div", "lh-pyro-after");
    return i.append(" ", a, " ", l, " "), o.append(" ", i, " "), n.append(" ", o, " "), e.append(n), e;
}
function ot(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-snippet"), n = r.createElement("style");
    return n.append('\n          :root {\n            --snippet-highlight-light: #fbf1f2;\n            --snippet-highlight-dark: #ffd6d8;\n          }\n\n         .lh-snippet__header {\n          position: relative;\n          overflow: hidden;\n          padding: 10px;\n          border-bottom: none;\n          color: var(--snippet-color);\n          background-color: var(--snippet-background-color);\n          border: 1px solid var(--report-border-color-secondary);\n        }\n        .lh-snippet__title {\n          font-weight: bold;\n          float: left;\n        }\n        .lh-snippet__node {\n          float: left;\n          margin-left: 4px;\n        }\n        .lh-snippet__toggle-expand {\n          padding: 1px 7px;\n          margin-top: -1px;\n          margin-right: -7px;\n          float: right;\n          background: transparent;\n          border: none;\n          cursor: pointer;\n          font-size: 14px;\n          color: #0c50c7;\n        }\n\n        .lh-snippet__snippet {\n          overflow: auto;\n          border: 1px solid var(--report-border-color-secondary);\n        }\n        /* Container needed so that all children grow to the width of the scroll container */\n        .lh-snippet__snippet-inner {\n          display: inline-block;\n          min-width: 100%;\n        }\n\n        .lh-snippet:not(.lh-snippet--expanded) .lh-snippet__show-if-expanded {\n          display: none;\n        }\n        .lh-snippet.lh-snippet--expanded .lh-snippet__show-if-collapsed {\n          display: none;\n        }\n\n        .lh-snippet__line {\n          background: white;\n          white-space: pre;\n          display: flex;\n        }\n        .lh-snippet__line:not(.lh-snippet__line--message):first-child {\n          padding-top: 4px;\n        }\n        .lh-snippet__line:not(.lh-snippet__line--message):last-child {\n          padding-bottom: 4px;\n        }\n        .lh-snippet__line--content-highlighted {\n          background: var(--snippet-highlight-dark);\n        }\n        .lh-snippet__line--message {\n          background: var(--snippet-highlight-light);\n        }\n        .lh-snippet__line--message .lh-snippet__line-number {\n          padding-top: 10px;\n          padding-bottom: 10px;\n        }\n        .lh-snippet__line--message code {\n          padding: 10px;\n          padding-left: 5px;\n          color: var(--color-fail);\n          font-family: var(--report-font-family);\n        }\n        .lh-snippet__line--message code {\n          white-space: normal;\n        }\n        .lh-snippet__line-icon {\n          padding-top: 10px;\n          display: none;\n        }\n        .lh-snippet__line--message .lh-snippet__line-icon {\n          display: block;\n        }\n        .lh-snippet__line-icon:before {\n          content: "";\n          display: inline-block;\n          vertical-align: middle;\n          margin-right: 4px;\n          width: var(--score-icon-size);\n          height: var(--score-icon-size);\n          background-image: var(--fail-icon-url);\n        }\n        .lh-snippet__line-number {\n          flex-shrink: 0;\n          width: 40px;\n          text-align: right;\n          font-family: monospace;\n          padding-right: 5px;\n          margin-right: 5px;\n          color: var(--color-gray-600);\n          user-select: none;\n        }\n    '), t.append(" ", n, " "), e.append(t), e;
}
function it(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-snippet__snippet"), n = r.createElement("div", "lh-snippet__snippet-inner");
    return t.append(" ", n, " "), e.append(t), e;
}
function at(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-snippet__header"), n = r.createElement("div", "lh-snippet__title"), o = r.createElement("div", "lh-snippet__node"), i = r.createElement("button", "lh-snippet__toggle-expand"), a = r.createElement("span", "lh-snippet__btn-label-collapse lh-snippet__show-if-expanded"), l = r.createElement("span", "lh-snippet__btn-label-expand lh-snippet__show-if-collapsed");
    return i.append(" ", a, " ", l, " "), t.append(" ", n, " ", o, " ", i, " "), e.append(t), e;
}
function lt(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-snippet__line"), n = r.createElement("div", "lh-snippet__line-number"), o = r.createElement("div", "lh-snippet__line-icon"), i = r.createElement("code");
    return t.append(" ", n, " ", o, " ", i, " "), e.append(t), e;
}
function st(r) {
    var e = r.createFragment(), t = r.createElement("style");
    return t.append('/**\n * @license\n * Copyright 2017 Google LLC\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/*\n  Naming convention:\n\n  If a variable is used for a specific component: --{component}-{property name}-{modifier}\n\n  Both {component} and {property name} should be kebab-case. If the target is the entire page,\n  use \'report\' for the component. The property name should not be abbreviated. Use the\n  property name the variable is intended for - if it\'s used for multiple, a common descriptor\n  is fine (ex: \'size\' for a variable applied to \'width\' and \'height\'). If a variable is shared\n  across multiple components, either create more variables or just drop the "{component}-"\n  part of the name. Append any modifiers at the end (ex: \'big\', \'dark\').\n\n  For colors: --color-{hue}-{intensity}\n\n  {intensity} is the Material Design tag - 700, A700, etc.\n*/\n.lh-vars {\n  /* Palette using Material Design Colors\n   * https://www.materialui.co/colors */\n  --color-amber-50: #FFF8E1;\n  --color-blue-200: #90CAF9;\n  --color-blue-900: #0D47A1;\n  --color-blue-A700: #2962FF;\n  --color-blue-primary: #06f;\n  --color-cyan-500: #00BCD4;\n  --color-gray-100: #F5F5F5;\n  --color-gray-300: #CFCFCF;\n  --color-gray-200: #E0E0E0;\n  --color-gray-400: #BDBDBD;\n  --color-gray-50: #FAFAFA;\n  --color-gray-500: #9E9E9E;\n  --color-gray-600: #757575;\n  --color-gray-700: #616161;\n  --color-gray-800: #424242;\n  --color-gray-900: #212121;\n  --color-gray: #000000;\n  --color-green-700: #080;\n  --color-green: #0c6;\n  --color-lime-400: #D3E156;\n  --color-orange-50: #FFF3E0;\n  --color-orange-700: #C33300;\n  --color-orange: #fa3;\n  --color-red-700: #c00;\n  --color-red: #f33;\n  --color-teal-600: #00897B;\n  --color-white: #FFFFFF;\n\n  /* Context-specific colors */\n  --color-average-secondary: var(--color-orange-700);\n  --color-average: var(--color-orange);\n  --color-fail-secondary: var(--color-red-700);\n  --color-fail: var(--color-red);\n  --color-hover: var(--color-gray-50);\n  --color-informative: var(--color-blue-900);\n  --color-pass-secondary: var(--color-green-700);\n  --color-pass: var(--color-green);\n  --color-not-applicable: var(--color-gray-600);\n\n  /* Component variables */\n  --audit-description-padding-left: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right));\n  --audit-explanation-line-height: 16px;\n  --audit-group-margin-bottom: calc(var(--default-padding) * 6);\n  --audit-group-padding-vertical: 8px;\n  --audit-margin-horizontal: 5px;\n  --audit-padding-vertical: 8px;\n  --category-padding: calc(var(--default-padding) * 6) var(--edge-gap-padding) calc(var(--default-padding) * 4);\n  --chevron-line-stroke: var(--color-gray-600);\n  --chevron-size: 12px;\n  --default-padding: 8px;\n  --edge-gap-padding: calc(var(--default-padding) * 4);\n  --env-item-background-color: var(--color-gray-100);\n  --env-item-font-size: 28px;\n  --env-item-line-height: 36px;\n  --env-item-padding: 10px 0px;\n  --env-name-min-width: 220px;\n  --footer-padding-vertical: 16px;\n  --gauge-circle-size-big: 96px;\n  --gauge-circle-size: 48px;\n  --gauge-circle-size-sm: 32px;\n  --gauge-label-font-size-big: 18px;\n  --gauge-label-font-size: var(--report-font-size-secondary);\n  --gauge-label-line-height-big: 24px;\n  --gauge-label-line-height: var(--report-line-height-secondary);\n  --gauge-percentage-font-size-big: 38px;\n  --gauge-percentage-font-size: var(--report-font-size-secondary);\n  --gauge-wrapper-width: 120px;\n  --header-line-height: 24px;\n  --highlighter-background-color: var(--report-text-color);\n  --icon-square-size: calc(var(--score-icon-size) * 0.88);\n  --image-preview-size: 48px;\n  --link-color: var(--color-blue-primary);\n  --locale-selector-background-color: var(--color-white);\n  --metric-toggle-lines-fill: #7F7F7F;\n  --metric-value-font-size: calc(var(--report-font-size) * 1.8);\n  --metrics-toggle-background-color: var(--color-gray-200);\n  --plugin-badge-background-color: var(--color-white);\n  --plugin-badge-size-big: calc(var(--gauge-circle-size-big) / 2.7);\n  --plugin-badge-size: calc(var(--gauge-circle-size) / 2.7);\n  --plugin-icon-size: 65%;\n  --report-background-color: #fff;\n  --report-border-color-secondary: #ebebeb;\n  --report-font-family-monospace: \'Roboto Mono\', \'Menlo\', \'dejavu sans mono\', \'Consolas\', \'Lucida Console\', monospace;\n  --report-font-family: Roboto, Helvetica, Arial, sans-serif;\n  --report-font-size: 14px;\n  --report-font-size-secondary: 12px;\n  --report-icon-size: var(--score-icon-background-size);\n  --report-line-height: 24px;\n  --report-line-height-secondary: 20px;\n  --report-monospace-font-size: calc(var(--report-font-size) * 0.85);\n  --report-text-color-secondary: var(--color-gray-800);\n  --report-text-color: var(--color-gray-900);\n  --report-content-max-width: calc(60 * var(--report-font-size)); /* defaults to 840px */\n  --report-content-min-width: 360px;\n  --report-content-max-width-minus-edge-gap: calc(var(--report-content-max-width) - var(--edge-gap-padding) * 2);\n  --score-container-padding: 8px;\n  --score-icon-background-size: 24px;\n  --score-icon-margin-left: 6px;\n  --score-icon-margin-right: 14px;\n  --score-icon-margin: 0 var(--score-icon-margin-right) 0 var(--score-icon-margin-left);\n  --score-icon-size: 12px;\n  --score-icon-size-big: 16px;\n  --screenshot-overlay-background: rgba(0, 0, 0, 0.3);\n  --section-padding-vertical: calc(var(--default-padding) * 6);\n  --snippet-background-color: var(--color-gray-50);\n  --snippet-color: #0938C2;\n  --stackpack-padding-horizontal: 10px;\n  --sticky-header-background-color: var(--report-background-color);\n  --sticky-header-buffer: var(--topbar-height);\n  --sticky-header-height: calc(var(--gauge-circle-size-sm) + var(--score-container-padding) * 2 + 1em);\n  --table-group-header-background-color: #EEF1F4;\n  --table-group-header-text-color: var(--color-gray-700);\n  --table-higlight-background-color: #F5F7FA;\n  --tools-icon-color: var(--color-gray-600);\n  --topbar-background-color: var(--color-white);\n  --topbar-height: 32px;\n  --topbar-logo-size: 24px;\n  --topbar-padding: 0 8px;\n  --toplevel-warning-background-color: hsla(30, 100%, 75%, 10%);\n  --toplevel-warning-message-text-color: var(--color-average-secondary);\n  --toplevel-warning-padding: 18px;\n  --toplevel-warning-text-color: var(--report-text-color);\n\n  /* SVGs */\n  --plugin-icon-url-dark: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>\');\n  --plugin-icon-url: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="%23757575"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg>\');\n\n  --pass-icon-url: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>check</title><path fill="%23178239" d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z"/></svg>\');\n  --average-icon-url: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>info</title><path fill="%23E67700" d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm2 30h-4V22h4v12zm0-16h-4v-4h4v4z"/></svg>\');\n  --fail-icon-url: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><title>warn</title><path fill="%23C7221F" d="M2 42h44L24 4 2 42zm24-6h-4v-4h4v4zm0-8h-4v-8h4v8z"/></svg>\');\n  --error-icon-url: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 15"><title>error</title><path d="M0 15H 3V 12H 0V" fill="%23FF4E42"/><path d="M0 9H 3V 0H 0V" fill="%23FF4E42"/></svg>\');\n\n  --swap-locale-icon-url: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>\');\n}\n\n@media not print {\n  .lh-dark {\n    /* Pallete */\n    --color-gray-200: var(--color-gray-800);\n    --color-gray-300: #616161;\n    --color-gray-400: var(--color-gray-600);\n    --color-gray-700: var(--color-gray-400);\n    --color-gray-50: #757575;\n    --color-gray-600: var(--color-gray-500);\n    --color-green-700: var(--color-green);\n    --color-orange-700: var(--color-orange);\n    --color-red-700: var(--color-red);\n    --color-teal-600: var(--color-cyan-500);\n\n    /* Context-specific colors */\n    --color-hover: rgba(0, 0, 0, 0.2);\n    --color-informative: var(--color-blue-200);\n\n    /* Component variables */\n    --env-item-background-color: #393535;\n    --link-color: var(--color-blue-200);\n    --locale-selector-background-color: var(--color-gray-200);\n    --plugin-badge-background-color: var(--color-gray-800);\n    --report-background-color: var(--color-gray-900);\n    --report-border-color-secondary: var(--color-gray-200);\n    --report-text-color-secondary: var(--color-gray-400);\n    --report-text-color: var(--color-gray-100);\n    --snippet-color: var(--color-cyan-500);\n    --topbar-background-color: var(--color-gray);\n    --toplevel-warning-background-color: hsl(33deg 14% 18%);\n    --toplevel-warning-message-text-color: var(--color-orange-700);\n    --toplevel-warning-text-color: var(--color-gray-100);\n    --table-group-header-background-color: rgba(186, 196, 206, 0.15);\n    --table-group-header-text-color: var(--color-gray-100);\n    --table-higlight-background-color: rgba(186, 196, 206, 0.09);\n\n    /* SVGs */\n    --plugin-icon-url: var(--plugin-icon-url-dark);\n  }\n}\n\n@media only screen and (max-width: 480px) {\n  .lh-vars {\n    --audit-group-margin-bottom: 20px;\n    --edge-gap-padding: var(--default-padding);\n    --env-name-min-width: 120px;\n    --gauge-circle-size-big: 96px;\n    --gauge-circle-size: 72px;\n    --gauge-label-font-size-big: 22px;\n    --gauge-label-font-size: 14px;\n    --gauge-label-line-height-big: 26px;\n    --gauge-label-line-height: 20px;\n    --gauge-percentage-font-size-big: 34px;\n    --gauge-percentage-font-size: 26px;\n    --gauge-wrapper-width: 112px;\n    --header-padding: 16px 0 16px 0;\n    --image-preview-size: 24px;\n    --plugin-icon-size: 75%;\n    --report-font-size: 14px;\n    --report-line-height: 20px;\n    --score-icon-margin-left: 2px;\n    --score-icon-size: 10px;\n    --topbar-height: 28px;\n    --topbar-logo-size: 20px;\n  }\n}\n\n.lh-vars.lh-devtools {\n  --audit-explanation-line-height: 14px;\n  --audit-group-margin-bottom: 20px;\n  --audit-group-padding-vertical: 12px;\n  --audit-padding-vertical: 4px;\n  --category-padding: 12px;\n  --default-padding: 12px;\n  --env-name-min-width: 120px;\n  --footer-padding-vertical: 8px;\n  --gauge-circle-size-big: 72px;\n  --gauge-circle-size: 64px;\n  --gauge-label-font-size-big: 22px;\n  --gauge-label-font-size: 14px;\n  --gauge-label-line-height-big: 26px;\n  --gauge-label-line-height: 20px;\n  --gauge-percentage-font-size-big: 34px;\n  --gauge-percentage-font-size: 26px;\n  --gauge-wrapper-width: 97px;\n  --header-line-height: 20px;\n  --header-padding: 16px 0 16px 0;\n  --screenshot-overlay-background: transparent;\n  --plugin-icon-size: 75%;\n  --report-font-family-monospace: \'Menlo\', \'dejavu sans mono\', \'Consolas\', \'Lucida Console\', monospace;\n  --report-font-family: \'.SFNSDisplay-Regular\', \'Helvetica Neue\', \'Lucida Grande\', sans-serif;\n  --report-font-size: 12px;\n  --report-line-height: 20px;\n  --score-icon-margin-left: 2px;\n  --score-icon-size: 10px;\n  --section-padding-vertical: 8px;\n}\n\n.lh-container:has(.lh-sticky-header) {\n  --sticky-header-buffer: calc(var(--topbar-height) + var(--sticky-header-height));\n}\n\n.lh-container:not(.lh-topbar + .lh-container) {\n  --topbar-height: 0;\n  --sticky-header-height: 0;\n  --sticky-header-buffer: 0;\n}\n\n.lh-max-viewport {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  width: 100%;\n}\n\n.lh-devtools.lh-root {\n  height: 100%;\n}\n.lh-devtools.lh-root img {\n  /* Override devtools default \'min-width: 0\' so svg without size in a flexbox isn\'t collapsed. */\n  min-width: auto;\n}\n.lh-devtools .lh-container {\n  overflow-y: scroll;\n  height: calc(100% - var(--topbar-height));\n  /** The .lh-container is the scroll parent in DevTools so we exclude the topbar from the sticky header buffer. */\n  --sticky-header-buffer: 0;\n}\n.lh-devtools .lh-container:has(.lh-sticky-header) {\n  /** The .lh-container is the scroll parent in DevTools so we exclude the topbar from the sticky header buffer. */\n  --sticky-header-buffer: var(--sticky-header-height);\n}\n@media print {\n  .lh-devtools .lh-container {\n    overflow: unset;\n  }\n}\n.lh-devtools .lh-sticky-header {\n  /* This is normally the height of the topbar, but we want it to stick to the top of our scroll container .lh-container` */\n  top: 0;\n}\n.lh-devtools .lh-element-screenshot__overlay {\n  position: absolute;\n}\n\n@keyframes fadeIn {\n  0% { opacity: 0;}\n  100% { opacity: 0.6;}\n}\n\n.lh-root *, .lh-root *::before, .lh-root *::after {\n  box-sizing: border-box;\n}\n\n.lh-root {\n  font-family: var(--report-font-family);\n  font-size: var(--report-font-size);\n  margin: 0;\n  line-height: var(--report-line-height);\n  background: var(--report-background-color);\n  color: var(--report-text-color);\n}\n\n.lh-root :focus-visible {\n    outline: -webkit-focus-ring-color auto 3px;\n}\n.lh-root summary:focus {\n    outline: none;\n    box-shadow: 0 0 0 1px hsl(217, 89%, 61%);\n}\n\n.lh-root [hidden] {\n  display: none !important;\n}\n\n.lh-root pre {\n  margin: 0;\n}\n\n.lh-root pre,\n.lh-root code {\n  font-family: var(--report-font-family-monospace);\n}\n\n.lh-root details > summary {\n  cursor: pointer;\n}\n\n.lh-hidden {\n  display: none !important;\n}\n\n.lh-container {\n  /*\n  Text wrapping in the report is so much FUN!\n  We have a `word-break: break-word;` globally here to prevent a few common scenarios, namely\n  long non-breakable text (usually URLs) found in:\n    1. The footer\n    2. .lh-node (outerHTML)\n    3. .lh-code\n\n  With that sorted, the next challenge is appropriate column sizing and text wrapping inside our\n  .lh-details tables. Even more fun.\n    * We don\'t want table headers ("Potential Savings (ms)") to wrap or their column values, but\n    we\'d be happy for the URL column to wrap if the URLs are particularly long.\n    * We want the narrow columns to remain narrow, providing the most column width for URL\n    * We don\'t want the table to extend past 100% width.\n    * Long URLs in the URL column can wrap. Util.getURLDisplayName maxes them out at 64 characters,\n      but they do not get any overflow:ellipsis treatment.\n  */\n  word-break: break-word;\n}\n\n.lh-audit-group a,\n.lh-category-header__description a,\n.lh-audit__description a,\n.lh-warnings a,\n.lh-footer a,\n.lh-table-column--link a {\n  color: var(--link-color);\n}\n\n.lh-audit__description, .lh-audit__stackpack {\n  --inner-audit-padding-right: var(--stackpack-padding-horizontal);\n  padding-left: var(--audit-description-padding-left);\n  padding-right: var(--inner-audit-padding-right);\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.lh-details {\n  margin-top: var(--default-padding);\n  margin-bottom: var(--default-padding);\n  margin-left: var(--audit-description-padding-left);\n  /* whatever the .lh-details side margins are */\n  width: 100%;\n}\n\n.lh-audit__stackpack {\n  display: flex;\n  align-items: center;\n}\n\n.lh-audit__stackpack__img {\n  max-width: 30px;\n  margin-right: var(--default-padding)\n}\n\n/* Report header */\n\n.lh-report-icon {\n  display: flex;\n  align-items: center;\n  padding: 10px 12px;\n  cursor: pointer;\n}\n.lh-report-icon[disabled] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n\n.lh-report-icon::before {\n  content: "";\n  margin: 4px;\n  background-repeat: no-repeat;\n  width: var(--report-icon-size);\n  height: var(--report-icon-size);\n  opacity: 0.7;\n  display: inline-block;\n  vertical-align: middle;\n}\n.lh-report-icon:hover::before {\n  opacity: 1;\n}\n.lh-dark .lh-report-icon::before {\n  filter: invert(1);\n}\n.lh-report-icon--print::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path fill="none" d="M0 0h24v24H0z"/></svg>\');\n}\n.lh-report-icon--copy::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>\');\n}\n.lh-report-icon--open::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/></svg>\');\n}\n.lh-report-icon--download::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\');\n}\n.lh-report-icon--dark::before {\n  background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 100 125"><path d="M50 23.587c-16.27 0-22.799 12.574-22.799 21.417 0 12.917 10.117 22.451 12.436 32.471h20.726c2.32-10.02 12.436-19.554 12.436-32.471 0-8.843-6.528-21.417-22.799-21.417zM39.637 87.161c0 3.001 1.18 4.181 4.181 4.181h.426l.41 1.231C45.278 94.449 46.042 95 48.019 95h3.963c1.978 0 2.74-.551 3.365-2.427l.409-1.231h.427c3.002 0 4.18-1.18 4.18-4.181V80.91H39.637v6.251zM50 18.265c1.26 0 2.072-.814 2.072-2.073v-9.12C52.072 5.813 51.26 5 50 5c-1.259 0-2.072.813-2.072 2.073v9.12c0 1.259.813 2.072 2.072 2.072zM68.313 23.727c.994.774 2.135.634 2.91-.357l5.614-7.187c.776-.992.636-2.135-.356-2.909-.992-.776-2.135-.636-2.91.357l-5.613 7.186c-.778.993-.636 2.135.355 2.91zM91.157 36.373c-.306-1.222-1.291-1.815-2.513-1.51l-8.85 2.207c-1.222.305-1.814 1.29-1.51 2.512.305 1.223 1.291 1.814 2.513 1.51l8.849-2.206c1.223-.305 1.816-1.291 1.511-2.513zM86.757 60.48l-8.331-3.709c-1.15-.512-2.225-.099-2.736 1.052-.512 1.151-.1 2.224 1.051 2.737l8.33 3.707c1.15.514 2.225.101 2.736-1.05.513-1.149.1-2.223-1.05-2.737zM28.779 23.37c.775.992 1.917 1.131 2.909.357.992-.776 1.132-1.917.357-2.91l-5.615-7.186c-.775-.992-1.917-1.132-2.909-.357s-1.131 1.917-.356 2.909l5.614 7.187zM21.715 39.583c.305-1.223-.288-2.208-1.51-2.513l-8.849-2.207c-1.222-.303-2.208.289-2.513 1.511-.303 1.222.288 2.207 1.511 2.512l8.848 2.206c1.222.304 2.208-.287 2.513-1.509zM21.575 56.771l-8.331 3.711c-1.151.511-1.563 1.586-1.05 2.735.511 1.151 1.586 1.563 2.736 1.052l8.331-3.711c1.151-.511 1.563-1.586 1.05-2.735-.512-1.15-1.585-1.562-2.736-1.052z"/></svg>\');\n}\n.lh-report-icon--treemap::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="black"><path d="M3 5v14h19V5H3zm2 2h15v4H5V7zm0 10v-4h4v4H5zm6 0v-4h9v4h-9z"/></svg>\');\n}\n.lh-report-icon--date::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 11h2v2H7v-2zm14-5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6c0-1.1.9-2 2-2h1V2h2v2h8V2h2v2h1a2 2 0 012 2zM5 8h14V6H5v2zm14 12V10H5v10h14zm-4-7h2v-2h-2v2zm-4 0h2v-2h-2v2z"/></svg>\');\n}\n.lh-report-icon--devices::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 6h18V4H4a2 2 0 00-2 2v11H0v3h14v-3H4V6zm19 2h-6a1 1 0 00-1 1v10c0 .6.5 1 1 1h6c.6 0 1-.5 1-1V9c0-.6-.5-1-1-1zm-1 9h-4v-7h4v7z"/></svg>\');\n}\n.lh-report-icon--world::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7 6h-3c-.3-1.3-.8-2.5-1.4-3.6A8 8 0 0 1 18.9 8zm-7-4a14 14 0 0 1 2 4h-4a14 14 0 0 1 2-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.3a16.5 16.5 0 0 0 0 4H4.3zm.8 2h3a14 14 0 0 0 1.3 3.6A8 8 0 0 1 5.1 16zm3-8H5a8 8 0 0 1 4.3-3.6L8 8zM12 20a14 14 0 0 1-2-4h4a14 14 0 0 1-2 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.6 14.6 0 0 1 0 4zm.3 5.6c.6-1.2 1-2.4 1.4-3.6h3a8 8 0 0 1-4.4 3.6zm1.8-5.6a16.5 16.5 0 0 0 0-4h3.3a8.2 8.2 0 0 1 0 4h-3.3z"/></svg>\');\n}\n.lh-report-icon--stopwatch::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.1-6.6L20.5 6l-1.4-1.4L17.7 6A9 9 0 0 0 3 13a9 9 0 1 0 16-5.6zm-7 12.6a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/></svg>\');\n}\n.lh-report-icon--networkspeed::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.9 5c-.2 0-.3 0-.4.2v.2L10.1 17a2 2 0 0 0-.2 1 2 2 0 0 0 4 .4l2.4-12.9c0-.3-.2-.5-.5-.5zM1 9l2 2c2.9-2.9 6.8-4 10.5-3.6l1.2-2.7C10 3.8 4.7 5.3 1 9zm20 2 2-2a15.4 15.4 0 0 0-5.6-3.6L17 8.2c1.5.7 2.9 1.6 4.1 2.8zm-4 4 2-2a9.9 9.9 0 0 0-2.7-1.9l-.5 3 1.2.9zM5 13l2 2a7.1 7.1 0 0 1 4-2l1.3-2.9C9.7 10.1 7 11 5 13z"/></svg>\');\n}\n.lh-report-icon--samples-one::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="7" cy="14" r="3"/><path d="M7 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.6 17.6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>\');\n}\n.lh-report-icon--samples-many::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 18a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm5.6 17.6a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/><circle cx="7" cy="14" r="3"/><circle cx="11" cy="6" r="3"/></svg>\');\n}\n.lh-report-icon--chrome::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 562 562"><path d="M256 25.6v25.6a204 204 0 0 1 144.8 60 204 204 0 0 1 60 144.8 204 204 0 0 1-60 144.8 204 204 0 0 1-144.8 60 204 204 0 0 1-144.8-60 204 204 0 0 1-60-144.8 204 204 0 0 1 60-144.8 204 204 0 0 1 144.8-60V0a256 256 0 1 0 0 512 256 256 0 0 0 0-512v25.6z"/><path d="M256 179.2v25.6a51.3 51.3 0 0 1 0 102.4 51.3 51.3 0 0 1 0-102.4v-51.2a102.3 102.3 0 1 0-.1 204.7 102.3 102.3 0 0 0 .1-204.7v25.6z"/><path d="M256 204.8h217.6a25.6 25.6 0 0 0 0-51.2H256a25.6 25.6 0 0 0 0 51.2m44.3 76.8L191.5 470.1a25.6 25.6 0 1 0 44.4 25.6l108.8-188.5a25.6 25.6 0 1 0-44.4-25.6m-88.6 0L102.9 93.2a25.7 25.7 0 0 0-35-9.4 25.7 25.7 0 0 0-9.4 35l108.8 188.5a25.7 25.7 0 0 0 35 9.4 25.9 25.9 0 0 0 9.4-35.1"/></svg>\');\n}\n.lh-report-icon--external::before {\n  background-image: url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path d="M3.15 11.9a1.01 1.01 0 0 1-.743-.307 1.01 1.01 0 0 1-.306-.743v-7.7c0-.292.102-.54.306-.744a1.01 1.01 0 0 1 .744-.306H7v1.05H3.15v7.7h7.7V7h1.05v3.85c0 .291-.103.54-.307.743a1.01 1.01 0 0 1-.743.307h-7.7Zm2.494-2.8-.743-.744 5.206-5.206H8.401V2.1h3.5v3.5h-1.05V3.893L5.644 9.1Z"/></svg>\');\n}\n\n.lh-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  margin: var(--default-padding) 0;\n}\n.lh-button {\n  height: 32px;\n  border: 1px solid var(--report-border-color-secondary);\n  border-radius: 3px;\n  color: var(--link-color);\n  background-color: var(--report-background-color);\n  margin: 5px;\n}\n\n.lh-button:first-of-type {\n  margin-left: 0;\n}\n\n/* Node */\n.lh-node__snippet {\n  font-family: var(--report-font-family-monospace);\n  color: var(--snippet-color);\n  font-size: var(--report-monospace-font-size);\n  line-height: 20px;\n}\n\n/* Score */\n\n.lh-audit__score-icon {\n  width: var(--score-icon-size);\n  height: var(--score-icon-size);\n  margin: var(--score-icon-margin);\n}\n\n.lh-audit--pass .lh-audit__display-text {\n  color: var(--color-pass-secondary);\n}\n.lh-audit--pass .lh-audit__score-icon,\n.lh-scorescale-range--pass::before {\n  border-radius: 100%;\n  background: var(--color-pass);\n}\n\n.lh-audit--average .lh-audit__display-text {\n  color: var(--color-average-secondary);\n}\n.lh-audit--average .lh-audit__score-icon,\n.lh-scorescale-range--average::before {\n  background: var(--color-average);\n  width: var(--icon-square-size);\n  height: var(--icon-square-size);\n}\n\n.lh-audit--fail .lh-audit__display-text {\n  color: var(--color-fail-secondary);\n}\n.lh-audit--fail .lh-audit__score-icon,\n.lh-audit--error .lh-audit__score-icon,\n.lh-scorescale-range--fail::before {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n\n.lh-audit--error .lh-audit__score-icon,\n.lh-metric--error .lh-metric__icon {\n  background-image: var(--error-icon-url);\n  background-repeat: no-repeat;\n  background-position: center;\n  border: none;\n}\n\n.lh-gauge__wrapper--fail .lh-gauge--error {\n  background-image: var(--error-icon-url);\n  background-repeat: no-repeat;\n  background-position: center;\n  transform: scale(0.5);\n  top: var(--score-container-padding);\n}\n\n.lh-audit--manual .lh-audit__display-text,\n.lh-audit--notapplicable .lh-audit__display-text {\n  color: var(--color-gray-600);\n}\n.lh-audit--manual .lh-audit__score-icon,\n.lh-audit--notapplicable .lh-audit__score-icon {\n  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-400);\n  border-radius: 100%;\n  background: none;\n}\n\n.lh-audit--informative .lh-audit__display-text {\n  color: var(--color-gray-600);\n}\n\n.lh-audit--informative .lh-audit__score-icon {\n  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-400);\n  border-radius: 100%;\n}\n\n.lh-audit__description,\n.lh-audit__stackpack {\n  color: var(--report-text-color-secondary);\n}\n.lh-audit__adorn {\n  border: 1px solid var(--color-gray-500);\n  border-radius: 3px;\n  margin: 0 3px;\n  padding: 0 2px;\n  line-height: 1.1;\n  display: inline-block;\n  font-size: 90%;\n  color: var(--report-text-color-secondary);\n}\n\n.lh-category-header__description  {\n  text-align: center;\n  color: var(--color-gray-700);\n  margin: 0px auto;\n  max-width: 400px;\n}\n\n\n.lh-audit__display-text,\n.lh-chevron-container {\n  margin: 0 var(--audit-margin-horizontal);\n}\n.lh-chevron-container {\n  margin-right: 0;\n}\n\n.lh-audit__title-and-text {\n  flex: 1;\n}\n\n.lh-audit__title-and-text code {\n  color: var(--snippet-color);\n  font-size: var(--report-monospace-font-size);\n}\n\n/* Prepend display text with em dash separator. */\n.lh-audit__display-text:not(:empty):before {\n  content: \'—\';\n  margin-right: var(--audit-margin-horizontal);\n}\n\n/* Expandable Details (Audit Groups, Audits) */\n.lh-audit__header {\n  display: flex;\n  align-items: center;\n  padding: var(--default-padding);\n}\n\n\n.lh-metricfilter {\n  display: grid;\n  justify-content: end;\n  align-items: center;\n  grid-auto-flow: column;\n  gap: 4px;\n  color: var(--color-gray-700);\n}\n\n.lh-metricfilter__radio {\n  /*\n   * Instead of hiding, position offscreen so it\'s still accessible to screen readers\n   * https://bugs.chromium.org/p/chromium/issues/detail?id=1439785\n   */\n  position: fixed;\n  left: -9999px;\n}\n.lh-metricfilter input[type=\'radio\']:focus-visible + label {\n  outline: -webkit-focus-ring-color auto 1px;\n}\n\n.lh-metricfilter__label {\n  display: inline-flex;\n  padding: 0 4px;\n  height: 16px;\n  text-decoration: underline;\n  align-items: center;\n  cursor: pointer;\n  font-size: 90%;\n}\n\n.lh-metricfilter__label--active {\n  background: var(--color-blue-primary);\n  color: var(--color-white);\n  border-radius: 3px;\n  text-decoration: none;\n}\n/* Give the \'All\' choice a more muted display */\n.lh-metricfilter__label--active[for="metric-All"] {\n  background-color: var(--color-blue-200) !important;\n  color: black !important;\n}\n\n.lh-metricfilter__text {\n  margin-right: 8px;\n}\n\n/* If audits are filtered, hide the itemcount for Passed Audits… */\n.lh-category--filtered .lh-audit-group .lh-audit-group__itemcount {\n  display: none;\n}\n\n\n.lh-audit__header:hover {\n  background-color: var(--color-hover);\n}\n\n/* We want to hide the browser\'s default arrow marker on summary elements. Admittedly, it\'s complicated. */\n.lh-root details > summary {\n  /* Blink 89+ and Firefox will hide the arrow when display is changed from (new) default of `list-item` to block.  https://chromestatus.com/feature/6730096436051968*/\n  display: block;\n}\n/* Safari and Blink <=88 require using the -webkit-details-marker selector */\n.lh-root details > summary::-webkit-details-marker {\n  display: none;\n}\n\n/* Perf Metric */\n\n.lh-metrics-container {\n  display: grid;\n  grid-auto-rows: 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-column-gap: var(--report-line-height);\n  margin-bottom: var(--default-padding);\n}\n\n.lh-metric {\n  border-top: 1px solid var(--report-border-color-secondary);\n}\n\n.lh-category:not(.lh--hoisted-meta) .lh-metric:nth-last-child(-n+2) {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\n\n.lh-metric__innerwrap {\n  display: grid;\n  /**\n   * Icon -- Metric Name\n   *      -- Metric Value\n   */\n  grid-template-columns: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right)) 1fr;\n  align-items: center;\n  padding: var(--default-padding);\n}\n\n.lh-metric__details {\n  order: -1;\n}\n\n.lh-metric__title {\n  flex: 1;\n}\n\n.lh-calclink {\n  padding-left: calc(1ex / 3);\n}\n\n.lh-metric__description {\n  display: none;\n  grid-column-start: 2;\n  grid-column-end: 4;\n  color: var(--report-text-color-secondary);\n}\n\n.lh-metric__value {\n  font-size: var(--metric-value-font-size);\n  margin: calc(var(--default-padding) / 2) 0;\n  white-space: nowrap; /* No wrapping between metric value and the icon */\n  grid-column-start: 2;\n}\n\n\n@media screen and (max-width: 535px) {\n  .lh-metrics-container {\n    display: block;\n  }\n\n  .lh-metric {\n    border-bottom: none !important;\n  }\n  .lh-category:not(.lh--hoisted-meta) .lh-metric:nth-last-child(1) {\n    border-bottom: 1px solid var(--report-border-color-secondary) !important;\n  }\n\n  /* Change the grid to 3 columns for narrow viewport. */\n  .lh-metric__innerwrap {\n  /**\n   * Icon -- Metric Name -- Metric Value\n   */\n    grid-template-columns: calc(var(--score-icon-size) + var(--score-icon-margin-left) + var(--score-icon-margin-right)) 2fr 1fr;\n  }\n  .lh-metric__value {\n    justify-self: end;\n    grid-column-start: unset;\n  }\n}\n\n/* No-JS toggle switch */\n/* Keep this selector sync\'d w/ `magicSelector` in report-ui-features-test.js */\n .lh-metrics-toggle__input:checked ~ .lh-metrics-container .lh-metric__description {\n  display: block;\n}\n\n/* TODO get rid of the SVGS and clean up these some more */\n.lh-metrics-toggle__input {\n  opacity: 0;\n  position: absolute;\n  right: 0;\n  top: 0px;\n}\n\n.lh-metrics-toggle__input + div > label > .lh-metrics-toggle__labeltext--hide,\n.lh-metrics-toggle__input:checked + div > label > .lh-metrics-toggle__labeltext--show {\n  display: none;\n}\n.lh-metrics-toggle__input:checked + div > label > .lh-metrics-toggle__labeltext--hide {\n  display: inline;\n}\n.lh-metrics-toggle__input:focus + div > label {\n  outline: -webkit-focus-ring-color auto 3px;\n}\n\n.lh-metrics-toggle__label {\n  cursor: pointer;\n  font-size: var(--report-font-size-secondary);\n  line-height: var(--report-line-height-secondary);\n  color: var(--color-gray-700);\n}\n\n/* Pushes the metric description toggle button to the right. */\n.lh-audit-group--metrics .lh-audit-group__header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.lh-metric__icon,\n.lh-scorescale-range::before {\n  content: \'\';\n  width: var(--score-icon-size);\n  height: var(--score-icon-size);\n  display: inline-block;\n  margin: var(--score-icon-margin);\n}\n\n.lh-metric--pass .lh-metric__value {\n  color: var(--color-pass-secondary);\n}\n.lh-metric--pass .lh-metric__icon {\n  border-radius: 100%;\n  background: var(--color-pass);\n}\n\n.lh-metric--average .lh-metric__value {\n  color: var(--color-average-secondary);\n}\n.lh-metric--average .lh-metric__icon {\n  background: var(--color-average);\n  width: var(--icon-square-size);\n  height: var(--icon-square-size);\n}\n\n.lh-metric--fail .lh-metric__value {\n  color: var(--color-fail-secondary);\n}\n.lh-metric--fail .lh-metric__icon {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n\n.lh-metric--error .lh-metric__value,\n.lh-metric--error .lh-metric__description {\n  color: var(--color-fail-secondary);\n}\n\n/* Filmstrip */\n\n.lh-filmstrip-container {\n  /* smaller gap between metrics and filmstrip */\n  margin: -8px auto 0 auto;\n}\n\n.lh-filmstrip {\n  display: flex;\n  justify-content: space-between;\n  justify-items: center;\n  margin-bottom: var(--default-padding);\n  width: 100%;\n}\n\n.lh-filmstrip__frame {\n  overflow: hidden;\n  line-height: 0;\n}\n\n.lh-filmstrip__thumbnail {\n  border: 1px solid var(--report-border-color-secondary);\n  max-height: 150px;\n  max-width: 120px;\n}\n\n/* Audit */\n\n.lh-audit {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\n\n/* Apply border-top to just the first audit. */\n.lh-audit {\n  border-top: 1px solid var(--report-border-color-secondary);\n}\n.lh-audit ~ .lh-audit {\n  border-top: none;\n}\n\n\n.lh-audit--error .lh-audit__display-text {\n  color: var(--color-fail-secondary);\n}\n\n/* Audit Group */\n\n.lh-audit-group {\n  margin-bottom: var(--audit-group-margin-bottom);\n  position: relative;\n}\n.lh-audit-group--metrics {\n  margin-bottom: calc(var(--audit-group-margin-bottom) / 2);\n}\n\n.lh-audit-group--metrics .lh-audit-group__summary {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.lh-audit-group__summary {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.lh-audit-group__header .lh-chevron {\n  margin-top: calc((var(--report-line-height) - 5px) / 2);\n}\n\n.lh-audit-group__header {\n  letter-spacing: 0.8px;\n  padding: var(--default-padding);\n  padding-left: 0;\n}\n\n.lh-audit-group__header, .lh-audit-group__summary {\n  font-size: var(--report-font-size-secondary);\n  line-height: var(--report-line-height-secondary);\n  color: var(--color-gray-700);\n}\n\n.lh-audit-group__title {\n  text-transform: uppercase;\n  font-weight: 500;\n}\n\n.lh-audit-group__itemcount {\n  color: var(--color-gray-600);\n}\n\n.lh-audit-group__footer {\n  color: var(--color-gray-600);\n  display: block;\n  margin-top: var(--default-padding);\n}\n\n.lh-details,\n.lh-category-header__description,\n.lh-audit-group__footer {\n  font-size: var(--report-font-size-secondary);\n  line-height: var(--report-line-height-secondary);\n}\n\n.lh-audit-explanation {\n  margin: var(--audit-padding-vertical) 0 calc(var(--audit-padding-vertical) / 2) var(--audit-margin-horizontal);\n  line-height: var(--audit-explanation-line-height);\n  display: inline-block;\n}\n\n.lh-audit--fail .lh-audit-explanation {\n  color: var(--color-fail-secondary);\n}\n\n/* Report */\n.lh-list > :not(:last-child) {\n  margin-bottom: calc(var(--default-padding) * 2);\n}\n\n.lh-header-container {\n  display: block;\n  margin: 0 auto;\n  position: relative;\n  word-wrap: break-word;\n}\n\n.lh-header-container .lh-scores-wrapper {\n  border-bottom: 1px solid var(--color-gray-200);\n}\n\n\n.lh-report {\n  min-width: var(--report-content-min-width);\n}\n\n.lh-exception {\n  font-size: large;\n}\n\n.lh-code {\n  white-space: normal;\n  margin-top: 0;\n  font-size: var(--report-monospace-font-size);\n}\n\n.lh-warnings {\n  --item-margin: calc(var(--report-line-height) / 6);\n  color: var(--color-average-secondary);\n  margin: var(--audit-padding-vertical) 0;\n  padding: var(--default-padding)\n    var(--default-padding)\n    var(--default-padding)\n    calc(var(--audit-description-padding-left));\n  background-color: var(--toplevel-warning-background-color);\n}\n.lh-warnings span {\n  font-weight: bold;\n}\n\n.lh-warnings--toplevel {\n  --item-margin: calc(var(--header-line-height) / 4);\n  color: var(--toplevel-warning-text-color);\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--report-content-max-width-minus-edge-gap);\n  padding: var(--toplevel-warning-padding);\n  border-radius: 8px;\n}\n\n.lh-warnings__msg {\n  color: var(--toplevel-warning-message-text-color);\n  margin: 0;\n}\n\n.lh-warnings ul {\n  margin: 0;\n}\n.lh-warnings li {\n  margin: var(--item-margin) 0;\n}\n.lh-warnings li:last-of-type {\n  margin-bottom: 0;\n}\n\n.lh-scores-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.lh-scores-header__solo {\n  padding: 0;\n  border: 0;\n}\n\n/* Gauge */\n\n.lh-gauge__wrapper--pass {\n  color: var(--color-pass-secondary);\n  fill: var(--color-pass);\n  stroke: var(--color-pass);\n}\n\n.lh-gauge__wrapper--average {\n  color: var(--color-average-secondary);\n  fill: var(--color-average);\n  stroke: var(--color-average);\n}\n\n.lh-gauge__wrapper--fail {\n  color: var(--color-fail-secondary);\n  fill: var(--color-fail);\n  stroke: var(--color-fail);\n}\n\n.lh-gauge__wrapper--not-applicable {\n  color: var(--color-not-applicable);\n  fill: var(--color-not-applicable);\n  stroke: var(--color-not-applicable);\n}\n\n.lh-fraction__wrapper .lh-fraction__content::before {\n  content: \'\';\n  height: var(--score-icon-size);\n  width: var(--score-icon-size);\n  margin: var(--score-icon-margin);\n  display: inline-block;\n}\n.lh-fraction__wrapper--pass .lh-fraction__content {\n  color: var(--color-pass-secondary);\n}\n.lh-fraction__wrapper--pass .lh-fraction__background {\n  background-color: var(--color-pass);\n}\n.lh-fraction__wrapper--pass .lh-fraction__content::before {\n  background-color: var(--color-pass);\n  border-radius: 50%;\n}\n.lh-fraction__wrapper--average .lh-fraction__content {\n  color: var(--color-average-secondary);\n}\n.lh-fraction__wrapper--average .lh-fraction__background,\n.lh-fraction__wrapper--average .lh-fraction__content::before {\n  background-color: var(--color-average);\n}\n.lh-fraction__wrapper--fail .lh-fraction__content {\n  color: var(--color-fail);\n}\n.lh-fraction__wrapper--fail .lh-fraction__background {\n  background-color: var(--color-fail);\n}\n.lh-fraction__wrapper--fail .lh-fraction__content::before {\n  border-left: calc(var(--score-icon-size) / 2) solid transparent;\n  border-right: calc(var(--score-icon-size) / 2) solid transparent;\n  border-bottom: var(--score-icon-size) solid var(--color-fail);\n}\n.lh-fraction__wrapper--null .lh-fraction__content {\n  color: var(--color-gray-700);\n}\n.lh-fraction__wrapper--null .lh-fraction__background {\n  background-color: var(--color-gray-700);\n}\n.lh-fraction__wrapper--null .lh-fraction__content::before {\n  border-radius: 50%;\n  border: calc(0.2 * var(--score-icon-size)) solid var(--color-gray-700);\n}\n\n.lh-fraction__background {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border-radius: calc(var(--gauge-circle-size) / 2);\n  opacity: 0.1;\n  z-index: -1;\n}\n\n.lh-fraction__content-wrapper {\n  height: var(--gauge-circle-size);\n  display: flex;\n  align-items: center;\n}\n\n.lh-fraction__content {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(0.3 * var(--gauge-circle-size));\n  line-height: calc(0.4 * var(--gauge-circle-size));\n  width: max-content;\n  min-width: calc(1.5 * var(--gauge-circle-size));\n  padding: calc(0.1 * var(--gauge-circle-size)) calc(0.2 * var(--gauge-circle-size));\n  --score-icon-size: calc(0.21 * var(--gauge-circle-size));\n  --score-icon-margin: 0 calc(0.15 * var(--gauge-circle-size)) 0 0;\n}\n\n.lh-gauge {\n  stroke-linecap: round;\n  width: var(--gauge-circle-size);\n  height: var(--gauge-circle-size);\n}\n\n.lh-category .lh-gauge {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n.lh-gauge-base {\n  opacity: 0.1;\n}\n\n.lh-gauge-arc {\n  fill: none;\n  transform-origin: 50% 50%;\n  animation: load-gauge var(--transition-length) ease both;\n  animation-delay: 250ms;\n}\n\n.lh-gauge__svg-wrapper {\n  position: relative;\n  height: var(--gauge-circle-size);\n}\n.lh-category .lh-gauge__svg-wrapper,\n.lh-category .lh-fraction__wrapper {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n}\n\n/* The plugin badge overlay */\n.lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size);\n  height: var(--plugin-badge-size);\n  background-color: var(--plugin-badge-background-color);\n  background-image: var(--plugin-icon-url);\n  background-repeat: no-repeat;\n  background-size: var(--plugin-icon-size);\n  background-position: 58% 50%;\n  content: "";\n  position: absolute;\n  right: -6px;\n  bottom: 0px;\n  display: block;\n  z-index: 100;\n  box-shadow: 0 0 4px rgba(0,0,0,.2);\n  border-radius: 25%;\n}\n.lh-category .lh-gauge__wrapper--plugin .lh-gauge__svg-wrapper::before {\n  width: var(--plugin-badge-size-big);\n  height: var(--plugin-badge-size-big);\n}\n\n@keyframes load-gauge {\n  from { stroke-dasharray: 0 352; }\n}\n\n.lh-gauge__percentage {\n  width: 100%;\n  height: var(--gauge-circle-size);\n  line-height: var(--gauge-circle-size);\n  position: absolute;\n  font-family: var(--report-font-family-monospace);\n  font-size: calc(var(--gauge-circle-size) * 0.34 + 1.3px);\n  text-align: center;\n  top: var(--score-container-padding);\n}\n\n.lh-category .lh-gauge__percentage {\n  --gauge-circle-size: var(--gauge-circle-size-big);\n  --gauge-percentage-font-size: var(--gauge-percentage-font-size-big);\n}\n\n.lh-gauge__wrapper,\n.lh-fraction__wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  text-decoration: none;\n  padding: var(--score-container-padding);\n\n  --transition-length: 1s;\n\n  /* Contain the layout style paint & layers during animation*/\n  contain: content;\n  will-change: opacity; /* Only using for layer promotion */\n}\n\n.lh-gauge__label,\n.lh-fraction__label {\n  font-size: var(--gauge-label-font-size);\n  font-weight: 500;\n  line-height: var(--gauge-label-line-height);\n  margin-top: 10px;\n  text-align: center;\n  color: var(--report-text-color);\n  word-break: keep-all;\n}\n\n/* TODO(#8185) use more BEM (.lh-gauge__label--big) instead of relying on descendant selector */\n.lh-category .lh-gauge__label,\n.lh-category .lh-fraction__label {\n  --gauge-label-font-size: var(--gauge-label-font-size-big);\n  --gauge-label-line-height: var(--gauge-label-line-height-big);\n  margin-top: 14px;\n}\n\n.lh-scores-header .lh-gauge__wrapper,\n.lh-scores-header .lh-fraction__wrapper,\n.lh-sticky-header .lh-gauge__wrapper,\n.lh-sticky-header .lh-fraction__wrapper {\n  width: var(--gauge-wrapper-width);\n}\n\n.lh-scorescale {\n  display: inline-flex;\n\n  gap: calc(var(--default-padding) * 4);\n  margin: 16px auto 0 auto;\n  font-size: var(--report-font-size-secondary);\n  color: var(--color-gray-700);\n\n}\n\n.lh-scorescale-range {\n  display: flex;\n  align-items: center;\n  font-family: var(--report-font-family-monospace);\n  white-space: nowrap;\n}\n\n.lh-category-header__finalscreenshot .lh-scorescale {\n  border: 0;\n  display: flex;\n  justify-content: center;\n}\n\n.lh-category-header__finalscreenshot .lh-scorescale-range {\n  font-family: unset;\n  font-size: 12px;\n}\n\n.lh-scorescale-wrap {\n  display: contents;\n}\n\n/* Hide category score gauages if it\'s a single category report */\n.lh-header--solo-category .lh-scores-wrapper {\n  display: none;\n}\n\n\n.lh-categories {\n  width: 100%;\n}\n\n.lh-category {\n  padding: var(--category-padding);\n  max-width: var(--report-content-max-width);\n  margin: 0 auto;\n\n  scroll-margin-top: calc(var(--sticky-header-buffer) - 1em);\n}\n\n.lh-category-wrapper {\n  border-bottom: 1px solid var(--color-gray-200);\n}\n.lh-category-wrapper:last-of-type {\n  border-bottom: 0;\n}\n\n.lh-category-header {\n  margin-bottom: var(--section-padding-vertical);\n}\n\n.lh-category-header .lh-score__gauge {\n  max-width: 400px;\n  width: auto;\n  margin: 0px auto;\n}\n\n.lh-category-header__finalscreenshot {\n  display: grid;\n  grid-template: none / 1fr 1px 1fr;\n  justify-items: center;\n  align-items: center;\n  gap: var(--report-line-height);\n  min-height: 288px;\n  margin-bottom: var(--default-padding);\n}\n\n.lh-final-ss-image {\n  /* constrain the size of the image to not be too large */\n  max-height: calc(var(--gauge-circle-size-big) * 2.8);\n  max-width: calc(var(--gauge-circle-size-big) * 3.5);\n  border: 1px solid var(--color-gray-200);\n  padding: 4px;\n  border-radius: 3px;\n  display: block;\n}\n\n.lh-category-headercol--separator {\n  background: var(--color-gray-200);\n  width: 1px;\n  height: var(--gauge-circle-size-big);\n}\n\n@media screen and (max-width: 780px) {\n  .lh-category-header__finalscreenshot {\n    grid-template: 1fr 1fr / none\n  }\n  .lh-category-headercol--separator {\n    display: none;\n  }\n}\n\n\n/* 964 fits the min-width of the filmstrip */\n@media screen and (max-width: 964px) {\n  .lh-report {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n\n@media print {\n  body {\n    -webkit-print-color-adjust: exact; /* print background colors */\n  }\n  .lh-container {\n    display: block;\n  }\n  .lh-report {\n    margin-left: 0;\n    padding-top: 0;\n  }\n  .lh-categories {\n    margin-top: 0;\n  }\n}\n\n.lh-table {\n  position: relative;\n  border-collapse: separate;\n  border-spacing: 0;\n  /* Can\'t assign padding to table, so shorten the width instead. */\n  width: calc(100% - var(--audit-description-padding-left) - var(--stackpack-padding-horizontal));\n  border: 1px solid var(--report-border-color-secondary);\n}\n\n.lh-table thead th {\n  position: sticky;\n  top: var(--sticky-header-buffer);\n  z-index: 1;\n  background-color: var(--report-background-color);\n  border-bottom: 1px solid var(--report-border-color-secondary);\n  font-weight: normal;\n  color: var(--color-gray-600);\n  /* See text-wrapping comment on .lh-container. */\n  word-break: normal;\n}\n\n.lh-row--group {\n  background-color: var(--table-group-header-background-color);\n}\n\n.lh-row--group td {\n  font-weight: bold;\n  font-size: 1.05em;\n  color: var(--table-group-header-text-color);\n}\n\n.lh-row--group td:first-child {\n  display: block;\n  min-width: max-content;\n  font-weight: normal;\n}\n\n.lh-row--group .lh-text {\n  color: inherit;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.lh-row--group a.lh-link:hover {\n  text-decoration: underline;\n}\n\n.lh-row--group .lh-audit__adorn {\n  text-transform: capitalize;\n  font-weight: normal;\n  padding: 2px 3px 1px 3px;\n}\n\n.lh-row--group .lh-audit__adorn1p {\n  color: var(--link-color);\n  border-color: var(--link-color);\n}\n\n.lh-row--group .lh-report-icon--external::before {\n  content: "";\n  background-repeat: no-repeat;\n  width: 14px;\n  height: 16px;\n  opacity: 0.7;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.lh-row--group .lh-report-icon--external {\n  visibility: hidden;\n}\n\n.lh-row--group:hover .lh-report-icon--external {\n  visibility: visible;\n}\n\n.lh-dark .lh-report-icon--external::before {\n  filter: invert(1);\n}\n\n/** Manages indentation of two-level and three-level nested adjacent rows */\n\n.lh-row--group ~ [data-entity]:not(.lh-row--group) td:first-child {\n  padding-left: 20px;\n}\n\n.lh-row--group ~ [data-entity]:not(.lh-row--group) ~ .lh-sub-item-row td:first-child {\n  padding-left: 40px;\n}\n\n.lh-row--even {\n  background-color: var(--table-group-header-background-color);\n}\n.lh-row--hidden {\n  display: none;\n}\n\n.lh-table th,\n.lh-table td {\n  padding: var(--default-padding);\n}\n\n.lh-table tr {\n  vertical-align: middle;\n}\n\n.lh-table tr:hover {\n  background-color: var(--table-higlight-background-color);\n}\n\n/* Looks unnecessary, but mostly for keeping the <th>s left-aligned */\n.lh-table-column--text,\n.lh-table-column--source-location,\n.lh-table-column--url,\n/* .lh-table-column--thumbnail, */\n/* .lh-table-column--empty,*/\n.lh-table-column--code,\n.lh-table-column--node {\n  text-align: left;\n}\n\n.lh-table-column--code {\n  min-width: 100px;\n}\n\n.lh-table-column--bytes,\n.lh-table-column--timespanMs,\n.lh-table-column--ms,\n.lh-table-column--numeric {\n  text-align: right;\n  word-break: normal;\n}\n\n\n\n.lh-table .lh-table-column--thumbnail {\n  width: var(--image-preview-size);\n}\n\n.lh-table-column--url {\n  min-width: 250px;\n}\n\n.lh-table-column--text {\n  min-width: 80px;\n}\n\n/* Keep columns narrow if they follow the URL column */\n/* 12% was determined to be a decent narrow width, but wide enough for column headings */\n.lh-table-column--url + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--ms,\n.lh-table-column--url + .lh-table-column--ms + th.lh-table-column--bytes,\n.lh-table-column--url + .lh-table-column--bytes + th.lh-table-column--timespanMs {\n  width: 12%;\n}\n\n.lh-text__url-host {\n  display: inline;\n}\n\n.lh-text__url-host {\n  margin-left: calc(var(--report-font-size) / 2);\n  opacity: 0.6;\n  font-size: 90%\n}\n\n.lh-thumbnail {\n  object-fit: cover;\n  width: var(--image-preview-size);\n  height: var(--image-preview-size);\n  display: block;\n}\n\n.lh-unknown pre {\n  overflow: scroll;\n  border: solid 1px var(--color-gray-200);\n}\n\n.lh-text__url > a {\n  color: inherit;\n  text-decoration: none;\n}\n\n.lh-text__url > a:hover {\n  text-decoration: underline dotted #999;\n}\n\n.lh-sub-item-row {\n  margin-left: 20px;\n  margin-bottom: 0;\n  color: var(--color-gray-700);\n}\n\n.lh-sub-item-row td {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 20px;\n}\n\n.lh-sub-item-row .lh-element-screenshot {\n  zoom: 0.6;\n}\n\n/* Chevron\n   https://codepen.io/paulirish/pen/LmzEmK\n */\n.lh-chevron {\n  --chevron-angle: 42deg;\n  /* Edge doesn\'t support transform: rotate(calc(...)), so we define it here */\n  --chevron-angle-right: -42deg;\n  width: var(--chevron-size);\n  height: var(--chevron-size);\n  margin-top: calc((var(--report-line-height) - 12px) / 2);\n}\n\n.lh-chevron__lines {\n  transition: transform 0.4s;\n  transform: translateY(var(--report-line-height));\n}\n.lh-chevron__line {\n stroke: var(--chevron-line-stroke);\n stroke-width: var(--chevron-size);\n stroke-linecap: square;\n transform-origin: 50%;\n transform: rotate(var(--chevron-angle));\n transition: transform 300ms, stroke 300ms;\n}\n\n.lh-expandable-details .lh-chevron__line-right,\n.lh-expandable-details[open] .lh-chevron__line-left {\n transform: rotate(var(--chevron-angle-right));\n}\n\n.lh-expandable-details[open] .lh-chevron__line-right {\n  transform: rotate(var(--chevron-angle));\n}\n\n\n.lh-expandable-details[open]  .lh-chevron__lines {\n transform: translateY(calc(var(--chevron-size) * -1));\n}\n\n.lh-expandable-details[open] {\n  animation: 300ms openDetails forwards;\n  padding-bottom: var(--default-padding);\n}\n\n@keyframes openDetails {\n  from {\n    outline: 1px solid var(--report-background-color);\n  }\n  to {\n   outline: 1px solid;\n   box-shadow: 0 2px 4px rgba(0, 0, 0, .24);\n  }\n}\n\n@media screen and (max-width: 780px) {\n  /* no black outline if we\'re not confident the entire table can be displayed within bounds */\n  .lh-expandable-details[open] {\n    animation: none;\n  }\n}\n\n.lh-expandable-details[open] summary, details.lh-clump > summary {\n  border-bottom: 1px solid var(--report-border-color-secondary);\n}\ndetails.lh-clump[open] > summary {\n  border-bottom-width: 0;\n}\n\n\n\ndetails .lh-clump-toggletext--hide,\ndetails[open] .lh-clump-toggletext--show { display: none; }\ndetails[open] .lh-clump-toggletext--hide { display: block;}\n\n\n/* Tooltip */\n.lh-tooltip-boundary {\n  position: relative;\n}\n\n.lh-tooltip {\n  position: absolute;\n  display: none; /* Don\'t retain these layers when not needed */\n  opacity: 0;\n  background: #ffffff;\n  white-space: pre-line; /* Render newlines in the text */\n  min-width: 246px;\n  max-width: 275px;\n  padding: 15px;\n  border-radius: 5px;\n  text-align: initial;\n  line-height: 1.4;\n}\n/* shrink tooltips to not be cutoff on left edge of narrow viewports\n   45vw is chosen to be ~= width of the left column of metrics\n*/\n@media screen and (max-width: 535px) {\n  .lh-tooltip {\n    min-width: 45vw;\n    padding: 3vw;\n  }\n}\n\n.lh-tooltip-boundary:hover .lh-tooltip {\n  display: block;\n  animation: fadeInTooltip 250ms;\n  animation-fill-mode: forwards;\n  animation-delay: 850ms;\n  bottom: 100%;\n  z-index: 1;\n  will-change: opacity;\n  right: 0;\n  pointer-events: none;\n}\n\n.lh-tooltip::before {\n  content: "";\n  border: solid transparent;\n  border-bottom-color: #fff;\n  border-width: 10px;\n  position: absolute;\n  bottom: -20px;\n  right: 6px;\n  transform: rotate(180deg);\n  pointer-events: none;\n}\n\n@keyframes fadeInTooltip {\n  0% { opacity: 0; }\n  75% { opacity: 1; }\n  100% { opacity: 1;  filter: drop-shadow(1px 0px 1px #aaa) drop-shadow(0px 2px 4px hsla(206, 6%, 25%, 0.15)); pointer-events: auto; }\n}\n\n/* Element screenshot */\n.lh-element-screenshot {\n  float: left;\n  margin-right: 20px;\n}\n.lh-element-screenshot__content {\n  overflow: hidden;\n  min-width: 110px;\n  display: flex;\n  justify-content: center;\n  background-color: var(--report-background-color);\n}\n.lh-element-screenshot__image {\n  position: relative;\n  /* Set by ElementScreenshotRenderer.installFullPageScreenshotCssVariable */\n  background-image: var(--element-screenshot-url);\n  outline: 2px solid #777;\n  background-color: white;\n  background-repeat: no-repeat;\n}\n.lh-element-screenshot__mask {\n  position: absolute;\n  background: #555;\n  opacity: 0.8;\n}\n.lh-element-screenshot__element-marker {\n  position: absolute;\n  outline: 2px solid var(--color-lime-400);\n}\n.lh-element-screenshot__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2000; /* .lh-topbar is 1000 */\n  background: var(--screenshot-overlay-background);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: zoom-out;\n}\n\n.lh-element-screenshot__overlay .lh-element-screenshot {\n  margin-right: 0; /* clearing margin used in thumbnail case */\n  outline: 1px solid var(--color-gray-700);\n}\n\n.lh-screenshot-overlay--enabled .lh-element-screenshot {\n  cursor: zoom-out;\n}\n.lh-screenshot-overlay--enabled .lh-node .lh-element-screenshot {\n  cursor: zoom-in;\n}\n\n\n.lh-meta__items {\n  --meta-icon-size: calc(var(--report-icon-size) * 0.667);\n  padding: var(--default-padding);\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  background-color: var(--env-item-background-color);\n  border-radius: 3px;\n  margin: 0 0 var(--default-padding) 0;\n  font-size: 12px;\n  column-gap: var(--default-padding);\n  color: var(--color-gray-700);\n}\n\n.lh-meta__item {\n  display: block;\n  list-style-type: none;\n  position: relative;\n  padding: 0 0 0 calc(var(--meta-icon-size) + var(--default-padding) * 2);\n  cursor: unset; /* disable pointer cursor from report-icon */\n}\n\n.lh-meta__item.lh-tooltip-boundary {\n  text-decoration: dotted underline var(--color-gray-500);\n  cursor: help;\n}\n\n.lh-meta__item.lh-report-icon::before {\n  position: absolute;\n  left: var(--default-padding);\n  width: var(--meta-icon-size);\n  height: var(--meta-icon-size);\n}\n\n.lh-meta__item.lh-report-icon:hover::before {\n  opacity: 0.7;\n}\n\n.lh-meta__item .lh-tooltip {\n  color: var(--color-gray-800);\n}\n\n.lh-meta__item .lh-tooltip::before {\n  right: auto; /* Set the tooltip arrow to the leftside */\n  left: 6px;\n}\n\n/* Change the grid for narrow viewport. */\n@media screen and (max-width: 640px) {\n  .lh-meta__items {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media screen and (max-width: 535px) {\n  .lh-meta__items {\n    display: block;\n  }\n}\n\n/* Explodey gauge */\n\n.lh-exp-gauge-component {\n  margin-bottom: 10px;\n}\n\n.lh-exp-gauge-component circle {\n  stroke: currentcolor;\n  r: var(--radius);\n}\n\n.lh-exp-gauge-component text {\n  font-size: calc(var(--radius) * 0.2);\n}\n\n.lh-exp-gauge-component .lh-exp-gauge {\n  margin: 0 auto;\n  width: 225px;\n  stroke-width: var(--stroke-width);\n  stroke-linecap: round;\n\n  /* for better rendering perf */\n  contain: strict;\n  height: 225px;\n  will-change: transform;\n}\n.lh-exp-gauge-component .lh-exp-gauge--faded {\n  opacity: 0.1;\n}\n.lh-exp-gauge-component .lh-exp-gauge__wrapper {\n  font-family: var(--report-font-family-monospace);\n  text-align: center;\n  text-decoration: none;\n  transition: .3s;\n}\n.lh-exp-gauge-component .lh-exp-gauge__wrapper--pass {\n  color: var(--color-pass);\n}\n.lh-exp-gauge-component .lh-exp-gauge__wrapper--average {\n  color: var(--color-average);\n}\n.lh-exp-gauge-component .lh-exp-gauge__wrapper--fail {\n  color: var(--color-fail);\n}\n.lh-exp-gauge-component .state--expanded {\n  transition: color .3s;\n}\n.lh-exp-gauge-component .state--highlight {\n  color: var(--color-highlight);\n}\n.lh-exp-gauge-component .lh-exp-gauge__svg-wrapper {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.lh-exp-gauge-component .lh-exp-gauge__label {\n  fill: var(--report-text-color);\n  font-family: var(--report-font-family);\n  font-size: 12px;\n}\n\n.lh-exp-gauge-component .lh-exp-gauge__cutout {\n  opacity: .999;\n  transition: opacity .3s;\n}\n.lh-exp-gauge-component .state--highlight .lh-exp-gauge__cutout {\n  opacity: 0;\n}\n\n.lh-exp-gauge-component .lh-exp-gauge__inner {\n  color: inherit;\n}\n.lh-exp-gauge-component .lh-exp-gauge__base {\n  fill: currentcolor;\n}\n\n\n.lh-exp-gauge-component .lh-exp-gauge__arc {\n  fill: none;\n  transition: opacity .3s;\n}\n.lh-exp-gauge-component .lh-exp-gauge__arc--metric {\n  color: var(--metric-color);\n  stroke-dashoffset: var(--metric-offset);\n  opacity: 0.3;\n}\n.lh-exp-gauge-component .lh-exp-gauge-hovertarget {\n  color: currentcolor;\n  opacity: 0.001;\n  stroke-linecap: butt;\n  stroke-width: 24;\n  /* hack. move the hover target out of the center. ideally i tweak the r instead but that rquires considerably more math. */\n  transform: scale(1.15);\n}\n.lh-exp-gauge-component .lh-exp-gauge__arc--metric.lh-exp-gauge--miniarc {\n  opacity: 0;\n  stroke-dasharray: 0 calc(var(--circle-meas) * var(--radius));\n  transition: 0s .005s;\n}\n.lh-exp-gauge-component .state--expanded .lh-exp-gauge__arc--metric.lh-exp-gauge--miniarc {\n  opacity: .999;\n  stroke-dasharray: var(--metric-array);\n  transition: 0.3s; /*  calc(.005s + var(--i)*.05s); entrace animation */\n}\n.lh-exp-gauge-component .state--expanded .lh-exp-gauge__inner .lh-exp-gauge__arc {\n  opacity: 0;\n}\n\n\n.lh-exp-gauge-component .lh-exp-gauge__percentage {\n  text-anchor: middle;\n  dominant-baseline: middle;\n  opacity: .999;\n  font-size: calc(var(--radius) * 0.625);\n  transition: opacity .3s ease-in;\n}\n.lh-exp-gauge-component .state--highlight .lh-exp-gauge__percentage {\n  opacity: 0;\n}\n\n.lh-exp-gauge-component .lh-exp-gauge__wrapper--fail .lh-exp-gauge__percentage {\n  fill: var(--color-fail);\n}\n.lh-exp-gauge-component .lh-exp-gauge__wrapper--average .lh-exp-gauge__percentage {\n  fill: var(--color-average);\n}\n.lh-exp-gauge-component .lh-exp-gauge__wrapper--pass .lh-exp-gauge__percentage {\n  fill: var(--color-pass);\n}\n\n.lh-exp-gauge-component .lh-cover {\n  fill: none;\n  opacity: .001;\n  pointer-events: none;\n}\n.lh-exp-gauge-component .state--expanded .lh-cover {\n  pointer-events: auto;\n}\n\n.lh-exp-gauge-component .metric {\n  transform: scale(var(--scale-initial));\n  opacity: 0;\n  transition: transform .1s .2s ease-out,  opacity .3s ease-out;\n  pointer-events: none;\n}\n.lh-exp-gauge-component .metric text {\n  pointer-events: none;\n}\n.lh-exp-gauge-component .metric__value {\n  fill: currentcolor;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n.lh-exp-gauge-component .state--expanded .metric {\n  transform: scale(1);\n  opacity: .999;\n  transition: transform .3s ease-out,  opacity .3s ease-in,  stroke-width .1s ease-out;\n  transition-delay: calc(var(--i)*.05s);\n  pointer-events: auto;\n}\n.lh-exp-gauge-component .state--highlight .metric {\n  opacity: .3;\n}\n.lh-exp-gauge-component .state--highlight .metric--highlight {\n  opacity: .999;\n  stroke-width: calc(1.5*var(--stroke-width));\n}\n.lh-exp-gauge-component .state--highlight .metric--highlight .metric__value {\n  opacity: 0.999;\n}\n\n\n/*\n the initial first load peek\n*/\n.lh-exp-gauge-component .lh-exp-gauge__bg {  /* needed for the use zindex stacking w/ transparency */\n  fill: var(--report-background-color);\n  stroke: var(--report-background-color);\n}\n.lh-exp-gauge-component .state--peek .metric {\n  transition-delay: 0ms;\n  animation: peek var(--peek-dur) cubic-bezier(0.46, 0.03, 0.52, 0.96);\n  animation-fill-mode: forwards;\n}\n.lh-exp-gauge-component .state--peek .lh-exp-gauge__inner .lh-exp-gauge__arc {\n  opacity: 1;\n}\n.lh-exp-gauge-component .state--peek .lh-exp-gauge__arc.lh-exp-gauge--faded {\n  opacity: 0.3; /* just a tad stronger cuz its fighting with a big solid arg */\n}\n/* do i need to set expanded and override this? */\n.lh-exp-gauge-component .state--peek .lh-exp-gauge__arc--metric.lh-exp-gauge--miniarc {\n  transition: opacity 0.3s;\n}\n.lh-exp-gauge-component .state--peek {\n  color: unset;\n}\n.lh-exp-gauge-component .state--peek .metric__label {\n  display: none;\n}\n\n.lh-exp-gauge-component .metric__label {\n  fill: var(--report-text-color);\n}\n\n@keyframes peek {\n  /* biggest it should go is 0.92. smallest is 0.8 */\n  0% {\n    transform: scale(0.8);\n    opacity: 0.8;\n  }\n\n  50% {\n    transform: scale(0.92);\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(0.8);\n    opacity: 0.8;\n  }\n}\n\n.lh-exp-gauge-component .wrapper {\n  width: 620px;\n}\n\n/*# sourceURL=report-styles.css */\n'), e.append(t), e;
}
function ct(r) {
    var e = r.createFragment(), t = r.createElement("style");
    t.append("\n    .lh-topbar {\n      position: sticky;\n      top: 0;\n      left: 0;\n      right: 0;\n      z-index: 1000;\n      display: flex;\n      align-items: center;\n      height: var(--topbar-height);\n      padding: var(--topbar-padding);\n      font-size: var(--report-font-size-secondary);\n      background-color: var(--topbar-background-color);\n      border-bottom: 1px solid var(--color-gray-200);\n    }\n\n    .lh-topbar__logo {\n      width: var(--topbar-logo-size);\n      height: var(--topbar-logo-size);\n      user-select: none;\n      flex: none;\n    }\n\n    .lh-topbar__url {\n      margin: var(--topbar-padding);\n      text-decoration: none;\n      color: var(--report-text-color);\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n    }\n\n    .lh-tools {\n      display: flex;\n      align-items: center;\n      margin-left: auto;\n      will-change: transform;\n      min-width: var(--report-icon-size);\n    }\n    .lh-tools__button {\n      width: var(--report-icon-size);\n      min-width: 24px;\n      height: var(--report-icon-size);\n      cursor: pointer;\n      margin-right: 5px;\n      /* This is actually a button element, but we want to style it like a transparent div. */\n      display: flex;\n      background: none;\n      color: inherit;\n      border: none;\n      padding: 0;\n      font: inherit;\n      outline: inherit;\n    }\n    .lh-tools__button svg {\n      fill: var(--tools-icon-color);\n    }\n    .lh-dark .lh-tools__button svg {\n      filter: invert(1);\n    }\n    .lh-tools__button.lh-active + .lh-tools__dropdown {\n      opacity: 1;\n      clip: rect(-1px, 194px, 270px, -3px);\n      visibility: visible;\n    }\n    .lh-tools__dropdown {\n      position: absolute;\n      background-color: var(--report-background-color);\n      border: 1px solid var(--report-border-color);\n      border-radius: 3px;\n      padding: calc(var(--default-padding) / 2) 0;\n      cursor: pointer;\n      top: 36px;\n      right: 0;\n      box-shadow: 1px 1px 3px #ccc;\n      min-width: 125px;\n      clip: rect(0, 164px, 0, 0);\n      visibility: hidden;\n      opacity: 0;\n      transition: all 200ms cubic-bezier(0,0,0.2,1);\n    }\n    .lh-tools__dropdown a {\n      color: currentColor;\n      text-decoration: none;\n      white-space: nowrap;\n      padding: 0 6px;\n      line-height: 2;\n    }\n    .lh-tools__dropdown a:hover,\n    .lh-tools__dropdown a:focus {\n      background-color: var(--color-gray-200);\n      outline: none;\n    }\n    /* save-gist option hidden in report. */\n    .lh-tools__dropdown a[data-action='save-gist'] {\n      display: none;\n    }\n\n    .lh-locale-selector {\n      width: 100%;\n      color: var(--report-text-color);\n      background-color: var(--locale-selector-background-color);\n      padding: 2px;\n    }\n    .lh-tools-locale {\n      display: flex;\n      align-items: center;\n      flex-direction: row-reverse;\n    }\n    .lh-tools-locale__selector-wrapper {\n      transition: opacity 0.15s;\n      opacity: 0;\n      max-width: 200px;\n    }\n    .lh-button.lh-tool-locale__button {\n      height: var(--topbar-height);\n      color: var(--tools-icon-color);\n      padding: calc(var(--default-padding) / 2);\n    }\n    .lh-tool-locale__button.lh-active + .lh-tools-locale__selector-wrapper {\n      opacity: 1;\n      clip: rect(-1px, 194px, 242px, -3px);\n      visibility: visible;\n      margin: 0 4px;\n    }\n\n    @media screen and (max-width: 964px) {\n      .lh-tools__dropdown {\n        right: 0;\n        left: initial;\n      }\n    }\n    @media print {\n      .lh-topbar {\n        position: static;\n        margin-left: 0;\n      }\n\n      .lh-tools__dropdown {\n        display: none;\n      }\n    }\n  "), e.append(t);
    var n = r.createElement("div", "lh-topbar"), o = r.createElementNS("http://www.w3.org/2000/svg", "svg", "lh-topbar__logo");
    o.setAttribute("role", "img"), o.setAttribute("title", "Lighthouse logo"), o.setAttribute("fill", "none"), o.setAttribute("xmlns", "http://www.w3.org/2000/svg"), o.setAttribute("viewBox", "0 0 48 48");
    var i = r.createElementNS("http://www.w3.org/2000/svg", "path");
    i.setAttribute("d", "m14 7 10-7 10 7v10h5v7h-5l5 24H9l5-24H9v-7h5V7Z"), i.setAttribute("fill", "#F63");
    var a = r.createElementNS("http://www.w3.org/2000/svg", "path");
    a.setAttribute("d", "M31.561 24H14l-1.689 8.105L31.561 24ZM18.983 48H9l1.022-4.907L35.723 32.27l1.663 7.98L18.983 48Z"), a.setAttribute("fill", "#FFA385");
    var l = r.createElementNS("http://www.w3.org/2000/svg", "path");
    l.setAttribute("fill", "#FF3"), l.setAttribute("d", "M20.5 10h7v7h-7z"), o.append(" ", i, " ", a, " ", l, " ");
    var s = r.createElement("a", "lh-topbar__url");
    s.setAttribute("href", ""), s.setAttribute("target", "_blank"), s.setAttribute("rel", "noopener");
    var c = r.createElement("div", "lh-tools"), d = r.createElement("div", "lh-tools-locale lh-hidden"), p = r.createElement("button", "lh-button lh-tool-locale__button");
    p.setAttribute("id", "lh-button__swap-locales"), p.setAttribute("title", "Show Language Picker"), p.setAttribute("aria-label", "Toggle language picker"), p.setAttribute("aria-haspopup", "menu"), p.setAttribute("aria-expanded", "false"), p.setAttribute("aria-controls", "lh-tools-locale__selector-wrapper");
    var h = r.createElementNS("http://www.w3.org/2000/svg", "svg");
    h.setAttribute("width", "20px"), h.setAttribute("height", "20px"), h.setAttribute("viewBox", "0 0 24 24"), h.setAttribute("fill", "currentColor");
    var u = r.createElementNS("http://www.w3.org/2000/svg", "path");
    u.setAttribute("d", "M0 0h24v24H0V0z"), u.setAttribute("fill", "none");
    var v = r.createElementNS("http://www.w3.org/2000/svg", "path");
    v.setAttribute("d", "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"), h.append(u, v), p.append(" ", h, " ");
    var b = r.createElement("div", "lh-tools-locale__selector-wrapper");
    b.setAttribute("id", "lh-tools-locale__selector-wrapper"), b.setAttribute("role", "menu"), b.setAttribute("aria-labelledby", "lh-button__swap-locales"), b.setAttribute("aria-hidden", "true"), b.append(" ", " "), d.append(" ", p, " ", b, " ");
    var m = r.createElement("button", "lh-tools__button");
    m.setAttribute("id", "lh-tools-button"), m.setAttribute("title", "Tools menu"), m.setAttribute("aria-label", "Toggle report tools menu"), m.setAttribute("aria-haspopup", "menu"), m.setAttribute("aria-expanded", "false"), m.setAttribute("aria-controls", "lh-tools-dropdown");
    var x = r.createElementNS("http://www.w3.org/2000/svg", "svg");
    x.setAttribute("width", "100%"), x.setAttribute("height", "100%"), x.setAttribute("viewBox", "0 0 24 24");
    var T = r.createElementNS("http://www.w3.org/2000/svg", "path");
    T.setAttribute("d", "M0 0h24v24H0z"), T.setAttribute("fill", "none");
    var L = r.createElementNS("http://www.w3.org/2000/svg", "path");
    L.setAttribute("d", "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"), x.append(" ", T, " ", L, " "), m.append(" ", x, " ");
    var F = r.createElement("div", "lh-tools__dropdown");
    F.setAttribute("id", "lh-tools-dropdown"), F.setAttribute("role", "menu"), F.setAttribute("aria-labelledby", "lh-tools-button");
    var f = r.createElement("a", "lh-report-icon lh-report-icon--print");
    f.setAttribute("role", "menuitem"), f.setAttribute("tabindex", "-1"), f.setAttribute("href", "#"), f.setAttribute("data-i18n", "dropdownPrintSummary"), f.setAttribute("data-action", "print-summary");
    var _ = r.createElement("a", "lh-report-icon lh-report-icon--print");
    _.setAttribute("role", "menuitem"), _.setAttribute("tabindex", "-1"), _.setAttribute("href", "#"), _.setAttribute("data-i18n", "dropdownPrintExpanded"), _.setAttribute("data-action", "print-expanded");
    var y = r.createElement("a", "lh-report-icon lh-report-icon--copy");
    y.setAttribute("role", "menuitem"), y.setAttribute("tabindex", "-1"), y.setAttribute("href", "#"), y.setAttribute("data-i18n", "dropdownCopyJSON"), y.setAttribute("data-action", "copy");
    var S = r.createElement("a", "lh-report-icon lh-report-icon--download lh-hidden");
    S.setAttribute("role", "menuitem"), S.setAttribute("tabindex", "-1"), S.setAttribute("href", "#"), S.setAttribute("data-i18n", "dropdownSaveHTML"), S.setAttribute("data-action", "save-html");
    var M = r.createElement("a", "lh-report-icon lh-report-icon--download");
    M.setAttribute("role", "menuitem"), M.setAttribute("tabindex", "-1"), M.setAttribute("href", "#"), M.setAttribute("data-i18n", "dropdownSaveJSON"), M.setAttribute("data-action", "save-json");
    var z = r.createElement("a", "lh-report-icon lh-report-icon--open");
    z.setAttribute("role", "menuitem"), z.setAttribute("tabindex", "-1"), z.setAttribute("href", "#"), z.setAttribute("data-i18n", "dropdownViewer"), z.setAttribute("data-action", "open-viewer");
    var D = r.createElement("a", "lh-report-icon lh-report-icon--open");
    D.setAttribute("role", "menuitem"), D.setAttribute("tabindex", "-1"), D.setAttribute("href", "#"), D.setAttribute("data-i18n", "dropdownSaveGist"), D.setAttribute("data-action", "save-gist");
    var R = r.createElement("a", "lh-report-icon lh-report-icon--open lh-hidden");
    R.setAttribute("role", "menuitem"), R.setAttribute("tabindex", "-1"), R.setAttribute("href", "#"), R.setAttribute("data-i18n", "dropdownViewUnthrottledTrace"), R.setAttribute("data-action", "view-unthrottled-trace");
    var N = r.createElement("a", "lh-report-icon lh-report-icon--dark");
    return N.setAttribute("role", "menuitem"), N.setAttribute("tabindex", "-1"), N.setAttribute("href", "#"), N.setAttribute("data-i18n", "dropdownDarkTheme"), N.setAttribute("data-action", "toggle-dark"), F.append(" ", f, " ", _, " ", y, " ", " ", S, " ", M, " ", z, " ", D, " ", " ", R, " ", N, " "), c.append(" ", d, " ", m, " ", F, " "), n.append(" ", " ", o, " ", s, " ", c, " "), e.append(n), e;
}
function dt(r) {
    var e = r.createFragment(), t = r.createElement("div", "lh-warnings lh-warnings--toplevel"), n = r.createElement("p", "lh-warnings__msg"), o = r.createElement("ul");
    return t.append(" ", n, " ", o, " "), e.append(t), e;
}
function _e(r, e) {
    switch(e){
        case "3pFilter":
            return Ve(r);
        case "audit":
            return Ge(r);
        case "categoryHeader":
            return Be(r);
        case "chevron":
            return je(r);
        case "clump":
            return We(r);
        case "crc":
            return qe(r);
        case "crcChain":
            return Ke(r);
        case "elementScreenshot":
            return Je(r);
        case "explodeyGauge":
            return Ze(r);
        case "footer":
            return Qe(r);
        case "fraction":
            return Xe(r);
        case "gauge":
            return Ye(r);
        case "heading":
            return et(r);
        case "metric":
            return tt(r);
        case "scorescale":
            return nt(r);
        case "scoresWrapper":
            return rt(r);
        case "snippet":
            return ot(r);
        case "snippetContent":
            return it(r);
        case "snippetHeader":
            return at(r);
        case "snippetLine":
            return lt(r);
        case "styles":
            return st(r);
        case "topbar":
            return ct(r);
        case "warningsToplevel":
            return dt(r);
    }
    throw new Error("unexpected component: " + e);
}
var _this_rootEl;
var Y = /*#__PURE__*/ function() {
    "use strict";
    function Y(e, t) {
        _class_call_check(this, Y);
        this._document = e, this._lighthouseChannel = "unknown", this._componentCache = new Map, this.rootEl = t;
    }
    _create_class(Y, [
        {
            key: "createElement",
            value: function createElement(e, t) {
                var n = this._document.createElement(e);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (t) try {
                    for(var _iterator = t.split(/\s+/)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var o = _step.value;
                        o && n.classList.add(o);
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
                return n;
            }
        },
        {
            key: "createElementNS",
            value: function createElementNS(e, t, n) {
                var o = this._document.createElementNS(e, t);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (n) try {
                    for(var _iterator = n.split(/\s+/)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var i = _step.value;
                        i && o.classList.add(i);
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
                return o;
            }
        },
        {
            key: "createSVGElement",
            value: function createSVGElement(e, t) {
                return this._document.createElementNS("http://www.w3.org/2000/svg", e, t);
            }
        },
        {
            key: "createFragment",
            value: function createFragment() {
                return this._document.createDocumentFragment();
            }
        },
        {
            key: "createTextNode",
            value: function createTextNode(e) {
                return this._document.createTextNode(e);
            }
        },
        {
            key: "createChildOf",
            value: function createChildOf(e, t, n) {
                var o = this.createElement(t, n);
                return e.append(o), o;
            }
        },
        {
            key: "createComponent",
            value: function createComponent(e) {
                var t = this._componentCache.get(e);
                if (t) {
                    var o = t.cloneNode(!0);
                    return this.findAll("style", o).forEach(function(i) {
                        return i.remove();
                    }), o;
                }
                return t = _e(this, e), this._componentCache.set(e, t), t.cloneNode(!0);
            }
        },
        {
            key: "clearComponentCache",
            value: function clearComponentCache() {
                this._componentCache.clear();
            }
        },
        {
            key: "convertMarkdownLinkSnippets",
            value: function convertMarkdownLinkSnippets(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var n = this.createElement("span");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = k.splitMarkdownLink(e)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var o = _step.value;
                        var i = o.text.includes("`") ? this.convertMarkdownCodeSnippets(o.text) : o.text;
                        if (!o.isLink) {
                            n.append(i);
                            continue;
                        }
                        var a = new URL(o.linkHref);
                        ([
                            "https://developers.google.com",
                            "https://web.dev",
                            "https://developer.chrome.com"
                        ].includes(a.origin) || t.alwaysAppendUtmSource) && (a.searchParams.set("utm_source", "lighthouse"), a.searchParams.set("utm_medium", this._lighthouseChannel));
                        var s = this.createElement("a");
                        s.rel = "noopener", s.target = "_blank", s.append(i), this.safelySetHref(s, a.href), n.append(s);
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
                return n;
            }
        },
        {
            key: "safelySetHref",
            value: function safelySetHref(e, t) {
                if (t = t || "", t.startsWith("#")) {
                    e.href = t;
                    return;
                }
                var n = [
                    "https:",
                    "http:"
                ], o;
                try {
                    o = new URL(t);
                } catch (e) {}
                o && n.includes(o.protocol) && (e.href = o.href);
            }
        },
        {
            key: "safelySetBlobHref",
            value: function safelySetBlobHref(e, t) {
                if (t.type !== "text/html" && t.type !== "application/json") throw new Error("Unsupported blob type");
                var n = URL.createObjectURL(t);
                e.href = n;
            }
        },
        {
            key: "convertMarkdownCodeSnippets",
            value: function convertMarkdownCodeSnippets(e) {
                var t = this.createElement("span");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = k.splitMarkdownCodeSpans(e)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var n = _step.value;
                        if (n.isCode) {
                            var o = this.createElement("code");
                            o.textContent = n.text, t.append(o);
                        } else t.append(this._document.createTextNode(n.text));
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
                return t;
            }
        },
        {
            key: "setLighthouseChannel",
            value: function setLighthouseChannel(e) {
                this._lighthouseChannel = e;
            }
        },
        {
            key: "document",
            value: function document1() {
                return this._document;
            }
        },
        {
            key: "isDevTools",
            value: function isDevTools() {
                return !!this._document.querySelector(".lh-devtools");
            }
        },
        {
            key: "find",
            value: function find(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : (_this_rootEl = this.rootEl) !== null && _this_rootEl !== void 0 ? _this_rootEl : this._document;
                var n = this.maybeFind(e, t);
                if (n === null) throw new Error("query ".concat(e, " not found"));
                return n;
            }
        },
        {
            key: "maybeFind",
            value: function maybeFind(e, t) {
                return t.querySelector(e);
            }
        },
        {
            key: "findAll",
            value: function findAll(e, t) {
                return Array.from(t.querySelectorAll(e));
            }
        },
        {
            key: "fireEventOn",
            value: function fireEventOn(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._document, n = arguments.length > 2 ? arguments[2] : void 0;
                var o = new CustomEvent(e, n ? {
                    detail: n
                } : void 0);
                t.dispatchEvent(o);
            }
        },
        {
            key: "saveFile",
            value: function saveFile(e, t) {
                var n = this.createElement("a");
                n.download = t, this.safelySetBlobHref(n, e), this._document.body.append(n), n.click(), this._document.body.removeChild(n), setTimeout(function() {
                    return URL.revokeObjectURL(n.href);
                }, 500);
            }
        }
    ]);
    return Y;
}();
var we = 0, g = (_r = /*#__PURE__*/ function() {
    "use strict";
    function r() {
        _class_call_check(this, r);
    }
    _create_class(r, null, [
        {
            key: "apply",
            value: function apply(e) {
                r.strings = _object_spread({}, ye, e.providedStrings), r.i18n = e.i18n, r.reportJson = e.reportJson;
            }
        },
        {
            key: "getUniqueSuffix",
            value: function getUniqueSuffix() {
                return we++;
            }
        },
        {
            key: "resetUniqueSuffix",
            value: function resetUniqueSuffix() {
                we = 0;
            }
        }
    ]);
    return r;
}(), _define_property(_r, "i18n", null), _define_property(_r, "strings", {}), _define_property(_r, "reportJson", null), _r);
var xe = "data:image/jpeg;base64,";
function Ee(r) {
    r.configSettings.locale || (r.configSettings.locale = "en"), r.configSettings.formFactor || (r.configSettings.formFactor = r.configSettings.emulatedFormFactor), r.finalDisplayedUrl = k.getFinalDisplayedUrl(r), r.mainDocumentUrl = k.getMainDocumentUrl(r);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = Object.values(r.audits)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var n = _step.value;
            if ((n.scoreDisplayMode === "not_applicable" || n.scoreDisplayMode === "not-applicable") && (n.scoreDisplayMode = "notApplicable"), n.scoreDisplayMode === "informative" && (n.score = 1), n.details) {
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                if ((n.details.type === void 0 || n.details.type === "diagnostic") && (n.details.type = "debugdata"), n.details.type === "filmstrip") try {
                    for(var _iterator1 = n.details.items[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var o = _step1.value;
                        o.data.startsWith(xe) || (o.data = xe + o.data);
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
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                if (n.details.type === "table") try {
                    for(var _iterator2 = n.details.headings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var o1 = _step2.value;
                        var _o_subItemsHeading;
                        var i = o1.itemType, a = o1.text;
                        i !== void 0 && (o1.valueType = i, delete o1.itemType), a !== void 0 && (o1.label = a, delete o1.text);
                        var l = (_o_subItemsHeading = o1.subItemsHeading) === null || _o_subItemsHeading === void 0 ? void 0 : _o_subItemsHeading.itemType;
                        o1.subItemsHeading && l !== void 0 && (o1.subItemsHeading.valueType = l, delete o1.subItemsHeading.itemType);
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
                if (n.id === "third-party-summary" && (n.details.type === "opportunity" || n.details.type === "table")) {
                    var _n_details = n.details, o2 = _n_details.headings, i1 = _n_details.items;
                    if (o2[0].valueType === "link") {
                        o2[0].valueType = "text";
                        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                        try {
                            for(var _iterator3 = i1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                var a1 = _step3.value;
                                _type_of(a1.entity) == "object" && a1.entity.type === "link" && (a1.entity = a1.entity.text);
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                    _iterator3.return();
                                }
                            } finally{
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                        n.details.isEntityGrouped = !0;
                    }
                }
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
    var _r_lighthouseVersion_split_map = _sliced_to_array(r.lighthouseVersion.split(".").map(Number), 1), e = _r_lighthouseVersion_split_map[0], t = r.categories.performance;
    if (t) {
        var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
        if (e < 9) {
            r.categoryGroups || (r.categoryGroups = {}), r.categoryGroups.hidden = {
                title: ""
            };
            var _iteratorNormalCompletion5 = true, _didIteratorError5 = false, _iteratorError5 = undefined;
            try {
                for(var _iterator4 = t.auditRefs[Symbol.iterator](), _step4; !(_iteratorNormalCompletion5 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion5 = true){
                    var n1 = _step4.value;
                    n1.group ? n1.group === "load-opportunities" && (n1.group = "diagnostics") : n1.group = "hidden";
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion5 && _iterator4.return != null) {
                        _iterator4.return();
                    }
                } finally{
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }
        } else if (e < 12) try {
            for(var _iterator5 = t.auditRefs[Symbol.iterator](), _step5; !(_iteratorNormalCompletion4 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion4 = true){
                var n2 = _step5.value;
                n2.group || (n2.group = "diagnostics");
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion4 && _iterator5.return != null) {
                    _iterator5.return();
                }
            } finally{
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }
    }
    if (e < 12 && t) {
        var n3 = new Map;
        var _iteratorNormalCompletion6 = true, _didIteratorError6 = false, _iteratorError6 = undefined;
        try {
            for(var _iterator6 = t.auditRefs[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true){
                var o3 = _step6.value;
                var i2 = o3.relevantAudits;
                var _iteratorNormalCompletion7 = true, _didIteratorError7 = false, _iteratorError7 = undefined;
                if (!(!i2 || !o3.acronym)) try {
                    for(var _iterator7 = i2[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true){
                        var a2 = _step7.value;
                        var l1 = n3.get(a2) || [];
                        l1.push(o3.acronym), n3.set(a2, l1);
                    }
                } catch (err) {
                    _didIteratorError7 = true;
                    _iteratorError7 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                            _iterator7.return();
                        }
                    } finally{
                        if (_didIteratorError7) {
                            throw _iteratorError7;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError6 = true;
            _iteratorError6 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                    _iterator6.return();
                }
            } finally{
                if (_didIteratorError6) {
                    throw _iteratorError6;
                }
            }
        }
        var _iteratorNormalCompletion8 = true, _didIteratorError8 = false, _iteratorError8 = undefined;
        try {
            for(var _iterator8 = n3[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true){
                var _step_value = _sliced_to_array(_step8.value, 2), o4 = _step_value[0], i3 = _step_value[1];
                if (!i3.length) continue;
                var a3 = r.audits[o4];
                if (a3 && !a3.metricSavings) {
                    a3.metricSavings = {};
                    var _iteratorNormalCompletion9 = true, _didIteratorError9 = false, _iteratorError9 = undefined;
                    try {
                        for(var _iterator9 = i3[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true){
                            var l2 = _step9.value;
                            a3.metricSavings[l2] = 0;
                        }
                    } catch (err) {
                        _didIteratorError9 = true;
                        _iteratorError9 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                                _iterator9.return();
                            }
                        } finally{
                            if (_didIteratorError9) {
                                throw _iteratorError9;
                            }
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                    _iterator8.return();
                }
            } finally{
                if (_didIteratorError8) {
                    throw _iteratorError8;
                }
            }
        }
    }
    if (r.environment || (r.environment = {
        benchmarkIndex: 0,
        networkUserAgent: r.userAgent,
        hostUserAgent: r.userAgent
    }), r.configSettings.screenEmulation || (r.configSettings.screenEmulation = {
        width: -1,
        height: -1,
        deviceScaleFactor: -1,
        mobile: /mobile/i.test(r.environment.hostUserAgent),
        disabled: !1
    }), r.i18n || (r.i18n = {}), r.audits["full-page-screenshot"]) {
        var n4 = r.audits["full-page-screenshot"].details;
        n4 ? r.fullPageScreenshot = {
            screenshot: n4.screenshot,
            nodes: n4.nodes
        } : r.fullPageScreenshot = null, delete r.audits["full-page-screenshot"];
    }
}
var O = k.RATINGS, E = /*#__PURE__*/ function() {
    "use strict";
    function r() {
        _class_call_check(this, r);
    }
    _create_class(r, null, [
        {
            key: "prepareReportResult",
            value: function prepareReportResult(e) {
                var t = JSON.parse(JSON.stringify(e));
                Ee(t);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.values(t.audits)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var o = _step.value;
                        o.details && (o.details.type === "opportunity" || o.details.type === "table") && !o.details.isEntityGrouped && t.entities && r.classifyEntities(t.entities, o.details);
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
                if (_type_of(t.categories) != "object") throw new Error("No categories provided.");
                var n = new Map;
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = Object.values(t.categories)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var o1 = _step1.value;
                        o1.auditRefs.forEach(function(i) {
                            i.acronym && n.set(i.acronym, i);
                        }), o1.auditRefs.forEach(function(i) {
                            var a = t.audits[i.id];
                            i.result = a;
                            var l = Object.keys(i.result.metricSavings || {});
                            if (l.length) {
                                i.relevantMetrics = [];
                                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                try {
                                    for(var _iterator = l[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                        var s = _step.value;
                                        var c = n.get(s);
                                        c && i.relevantMetrics.push(c);
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
                            t.stackPacks && t.stackPacks.forEach(function(s) {
                                s.descriptions[i.id] && (i.stackPacks = i.stackPacks || [], i.stackPacks.push({
                                    title: s.title,
                                    iconDataURL: s.iconDataURL,
                                    description: s.descriptions[i.id]
                                }));
                            });
                        });
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
                return t;
            }
        },
        {
            key: "getUrlLocatorFn",
            value: function getUrlLocatorFn(e) {
                var _e_find, _e_find1;
                var t = (_e_find = e.find(function(o) {
                    return o.valueType === "url";
                })) === null || _e_find === void 0 ? void 0 : _e_find.key;
                if (t && typeof t == "string") return function(o) {
                    var i = o[t];
                    if (typeof i == "string") return i;
                };
                var n = (_e_find1 = e.find(function(o) {
                    return o.valueType === "source-location";
                })) === null || _e_find1 === void 0 ? void 0 : _e_find1.key;
                if (n) return function(o) {
                    var i = o[n];
                    if ((typeof i === "undefined" ? "undefined" : _type_of(i)) == "object" && i.type === "source-location") return i.url;
                };
            }
        },
        {
            key: "classifyEntities",
            value: function classifyEntities(e, t) {
                var n = t.items, o = t.headings;
                if (!n.length || n.some(function(a) {
                    return a.entity;
                })) return;
                var i = r.getUrlLocatorFn(o);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (i) try {
                    var _loop = function() {
                        var a = _step.value;
                        var l = i(a);
                        if (!l) return "continue";
                        var s = "";
                        try {
                            s = k.parseURL(l).origin;
                        } catch (e) {}
                        if (!s) return "continue";
                        var c = e.find(function(d) {
                            return d.origins.includes(s);
                        });
                        c && (a.entity = c.name);
                    };
                    for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
            key: "getTableItemSortComparator",
            value: function getTableItemSortComparator(e) {
                return function(t, n) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var o = _step.value;
                            var i = t[o], a = n[o];
                            if (((typeof i === "undefined" ? "undefined" : _type_of(i)) != (typeof a === "undefined" ? "undefined" : _type_of(a)) || ![
                                "number",
                                "string"
                            ].includes(typeof i === "undefined" ? "undefined" : _type_of(i))) && console.warn("Warning: Attempting to sort unsupported value type: ".concat(o, ".")), typeof i == "number" && typeof a == "number" && i !== a) return a - i;
                            if (typeof i == "string" && typeof a == "string" && i !== a) return i.localeCompare(a);
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
                    return 0;
                };
            }
        },
        {
            key: "getEmulationDescriptions",
            value: function getEmulationDescriptions(e) {
                var t, n, o, i = e.throttling, a = g.i18n, l = g.strings;
                switch(e.throttlingMethod){
                    case "provided":
                        o = n = t = l.throttlingProvided;
                        break;
                    case "devtools":
                        {
                            var h = i.cpuSlowdownMultiplier, u = i.requestLatencyMs;
                            t = "".concat(a.formatNumber(h), "x slowdown (DevTools)"), n = "".concat(a.formatMilliseconds(u), " HTTP RTT, ").concat(a.formatKbps(i.downloadThroughputKbps), " down, ").concat(a.formatKbps(i.uploadThroughputKbps), " up (DevTools)"), o = u === 150 * 3.75 && i.downloadThroughputKbps === 1.6 * 1024 * .9 && i.uploadThroughputKbps === 750 * .9 ? l.runtimeSlow4g : l.runtimeCustom;
                            break;
                        }
                    case "simulate":
                        {
                            var h1 = i.cpuSlowdownMultiplier, u1 = i.rttMs, v = i.throughputKbps;
                            t = "".concat(a.formatNumber(h1), "x slowdown (Simulated)"), n = "".concat(a.formatMilliseconds(u1), " TCP RTT, ").concat(a.formatKbps(v), " throughput (Simulated)"), o = u1 === 150 && v === 1.6 * 1024 ? l.runtimeSlow4g : l.runtimeCustom;
                            break;
                        }
                    default:
                        o = t = n = l.runtimeUnknown;
                }
                var s = e.channel === "devtools" ? !1 : e.screenEmulation.disabled, c = e.channel === "devtools" ? e.formFactor === "mobile" : e.screenEmulation.mobile, d = l.runtimeMobileEmulation;
                s ? d = l.runtimeNoEmulation : c || (d = l.runtimeDesktopEmulation);
                var p = s ? void 0 : "".concat(e.screenEmulation.width, "x").concat(e.screenEmulation.height, ", DPR ").concat(e.screenEmulation.deviceScaleFactor);
                return {
                    deviceEmulation: d,
                    screenEmulation: p,
                    cpuThrottling: t,
                    networkThrottling: n,
                    summary: o
                };
            }
        },
        {
            key: "showAsPassed",
            value: function showAsPassed(e) {
                switch(e.scoreDisplayMode){
                    case "manual":
                    case "notApplicable":
                        return !0;
                    case "error":
                    case "informative":
                        return !1;
                    case "numeric":
                    case "binary":
                    default:
                        return Number(e.score) >= O.PASS.minScore;
                }
            }
        },
        {
            key: "calculateRating",
            value: function calculateRating(e, t) {
                if (t === "manual" || t === "notApplicable") return O.PASS.label;
                if (t === "error") return O.ERROR.label;
                if (e === null) return O.FAIL.label;
                var n = O.FAIL.label;
                return e >= O.PASS.minScore ? n = O.PASS.label : e >= O.AVERAGE.minScore && (n = O.AVERAGE.label), n;
            }
        },
        {
            key: "calculateCategoryFraction",
            value: function calculateCategoryFraction(e) {
                var t = 0, n = 0, o = 0, i = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.auditRefs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var a = _step.value;
                        var l = r.showAsPassed(a.result);
                        if (!(a.group === "hidden" || a.result.scoreDisplayMode === "manual" || a.result.scoreDisplayMode === "notApplicable")) {
                            if (a.result.scoreDisplayMode === "informative") {
                                l || ++o;
                                continue;
                            }
                            ++t, i += a.weight, l && n++;
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
                return {
                    numPassed: n,
                    numPassableAudits: t,
                    numInformative: o,
                    totalWeight: i
                };
            }
        },
        {
            key: "isPluginCategory",
            value: function isPluginCategory(e) {
                return e.startsWith("lighthouse-plugin-");
            }
        },
        {
            key: "shouldDisplayAsFraction",
            value: function shouldDisplayAsFraction(e) {
                return e === "timespan" || e === "snapshot";
            }
        }
    ]);
    return r;
}(), ye = {
    varianceDisclaimer: "Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",
    calculatorLink: "See calculator.",
    showRelevantAudits: "Show audits relevant to:",
    opportunityResourceColumnLabel: "Opportunity",
    opportunitySavingsColumnLabel: "Estimated Savings",
    errorMissingAuditInfo: "Report error: no audit information",
    errorLabel: "Error!",
    warningHeader: "Warnings: ",
    warningAuditsGroupTitle: "Passed audits but with warnings",
    passedAuditsGroupTitle: "Passed audits",
    notApplicableAuditsGroupTitle: "Not applicable",
    manualAuditsGroupTitle: "Additional items to manually check",
    toplevelWarningsMessage: "There were issues affecting this run of Lighthouse:",
    crcInitialNavigation: "Initial Navigation",
    crcLongestDurationLabel: "Maximum critical path latency:",
    snippetExpandButtonLabel: "Expand snippet",
    snippetCollapseButtonLabel: "Collapse snippet",
    lsPerformanceCategoryDescription: "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
    labDataTitle: "Lab Data",
    thirdPartyResourcesLabel: "Show 3rd-party resources",
    viewTreemapLabel: "View Treemap",
    viewTraceLabel: "View Trace",
    dropdownPrintSummary: "Print Summary",
    dropdownPrintExpanded: "Print Expanded",
    dropdownCopyJSON: "Copy JSON",
    dropdownSaveHTML: "Save as HTML",
    dropdownSaveJSON: "Save as JSON",
    dropdownViewer: "Open in Viewer",
    dropdownSaveGist: "Save as Gist",
    dropdownDarkTheme: "Toggle Dark Theme",
    dropdownViewUnthrottledTrace: "View Unthrottled Trace",
    runtimeSettingsDevice: "Device",
    runtimeSettingsNetworkThrottling: "Network throttling",
    runtimeSettingsCPUThrottling: "CPU throttling",
    runtimeSettingsUANetwork: "User agent (network)",
    runtimeSettingsBenchmark: "Unthrottled CPU/Memory Power",
    runtimeSettingsAxeVersion: "Axe version",
    runtimeSettingsScreenEmulation: "Screen emulation",
    footerIssue: "File an issue",
    runtimeNoEmulation: "No emulation",
    runtimeMobileEmulation: "Emulated Moto G Power",
    runtimeDesktopEmulation: "Emulated Desktop",
    runtimeUnknown: "Unknown",
    runtimeSingleLoad: "Single page session",
    runtimeAnalysisWindow: "Initial page load",
    runtimeAnalysisWindowTimespan: "User interactions timespan",
    runtimeAnalysisWindowSnapshot: "Point-in-time snapshot",
    runtimeSingleLoadTooltip: "This data is taken from a single page session, as opposed to field data summarizing many sessions.",
    throttlingProvided: "Provided by environment",
    show: "Show",
    hide: "Hide",
    expandView: "Expand view",
    collapseView: "Collapse view",
    runtimeSlow4g: "Slow 4G throttling",
    runtimeCustom: "Custom throttling",
    firstPartyChipLabel: "1st party",
    openInANewTabTooltip: "Open in a new tab",
    unattributable: "Unattributable"
};
var G = /*#__PURE__*/ function() {
    "use strict";
    function G(e, t) {
        _class_call_check(this, G);
        this.dom = e, this.detailsRenderer = t;
    }
    _create_class(G, [
        {
            key: "_clumpTitles",
            get: function get() {
                return {
                    warning: g.strings.warningAuditsGroupTitle,
                    manual: g.strings.manualAuditsGroupTitle,
                    passed: g.strings.passedAuditsGroupTitle,
                    notApplicable: g.strings.notApplicableAuditsGroupTitle
                };
            }
        },
        {
            key: "renderAudit",
            value: function renderAudit(e) {
                var _this = this;
                var t = g.strings, n = this.dom.createComponent("audit"), o = this.dom.find("div.lh-audit", n);
                o.id = e.result.id;
                var i = e.result.scoreDisplayMode;
                e.result.displayValue && (this.dom.find(".lh-audit__display-text", o).textContent = e.result.displayValue);
                var a = this.dom.find(".lh-audit__title", o);
                a.append(this.dom.convertMarkdownCodeSnippets(e.result.title));
                var l = this.dom.find(".lh-audit__description", o);
                l.append(this.dom.convertMarkdownLinkSnippets(e.result.description));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = (e.relevantMetrics || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var h = _step.value;
                        var u = this.dom.createChildOf(l, "span", "lh-audit__adorn");
                        u.title = "Relevant to ".concat(h.result.title), u.textContent = h.acronym || h.id;
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
                e.stackPacks && e.stackPacks.forEach(function(h) {
                    var u = _this.dom.createElement("img", "lh-audit__stackpack__img");
                    u.src = h.iconDataURL, u.alt = h.title;
                    var v = _this.dom.convertMarkdownLinkSnippets(h.description, {
                        alwaysAppendUtmSource: !0
                    }), b = _this.dom.createElement("div", "lh-audit__stackpack");
                    b.append(u, v), _this.dom.find(".lh-audit__stackpacks", o).append(b);
                });
                var s = this.dom.find("details", o);
                if (e.result.details) {
                    var h1 = this.detailsRenderer.render(e.result.details);
                    h1 && (h1.classList.add("lh-details"), s.append(h1));
                }
                if (this.dom.find(".lh-chevron-container", o).append(this._createChevron()), this._setRatingClass(o, e.result.score, i), e.result.scoreDisplayMode === "error") {
                    o.classList.add("lh-audit--error");
                    var h2 = this.dom.find(".lh-audit__display-text", o);
                    h2.textContent = t.errorLabel, h2.classList.add("lh-tooltip-boundary");
                    var u1 = this.dom.createChildOf(h2, "div", "lh-tooltip lh-tooltip--error");
                    u1.textContent = e.result.errorMessage || t.errorMissingAuditInfo;
                } else if (e.result.explanation) {
                    var h3 = this.dom.createChildOf(a, "div", "lh-audit-explanation");
                    h3.textContent = e.result.explanation;
                }
                var c = e.result.warnings;
                if (!c || c.length === 0) return o;
                var d = this.dom.find("summary", s), p = this.dom.createChildOf(d, "div", "lh-warnings");
                if (this.dom.createChildOf(p, "span").textContent = t.warningHeader, c.length === 1) p.append(this.dom.createTextNode(c.join("")));
                else {
                    var h4 = this.dom.createChildOf(p, "ul");
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = c[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var u2 = _step1.value;
                            var v = this.dom.createChildOf(h4, "li");
                            v.textContent = u2;
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
                return o;
            }
        },
        {
            key: "injectFinalScreenshot",
            value: function injectFinalScreenshot(e, t, n) {
                var _s;
                var o = t["final-screenshot"];
                if (!o || o.scoreDisplayMode === "error" || !o.details || o.details.type !== "screenshot") return null;
                var i = this.dom.createElement("img", "lh-final-ss-image"), a = o.details.data;
                i.src = a, i.alt = o.title;
                var l = this.dom.find(".lh-category .lh-category-header", e), s = this.dom.createElement("div", "lh-category-headercol"), c = this.dom.createElement("div", "lh-category-headercol lh-category-headercol--separator"), d = this.dom.createElement("div", "lh-category-headercol");
                (_s = s).append.apply(_s, _to_consumable_array(l.childNodes)), s.append(n), d.append(i), l.append(s, c, d), l.classList.add("lh-category-header__finalscreenshot");
            }
        },
        {
            key: "_createChevron",
            value: function _createChevron() {
                var e = this.dom.createComponent("chevron");
                return this.dom.find("svg.lh-chevron", e);
            }
        },
        {
            key: "_setRatingClass",
            value: function _setRatingClass(e, t, n) {
                var o = E.calculateRating(t, n);
                return e.classList.add("lh-audit--".concat(n.toLowerCase())), n !== "informative" && e.classList.add("lh-audit--".concat(o)), e;
            }
        },
        {
            key: "renderCategoryHeader",
            value: function renderCategoryHeader(e, t, n) {
                var o = this.dom.createComponent("categoryHeader"), i = this.dom.find(".lh-score__gauge", o), a = this.renderCategoryScore(e, t, n);
                if (i.append(a), e.description) {
                    var l = this.dom.convertMarkdownLinkSnippets(e.description);
                    this.dom.find(".lh-category-header__description", o).append(l);
                }
                return o;
            }
        },
        {
            key: "renderAuditGroup",
            value: function renderAuditGroup(e) {
                var t = this.dom.createElement("div", "lh-audit-group"), n = this.dom.createElement("div", "lh-audit-group__header");
                this.dom.createChildOf(n, "span", "lh-audit-group__title").textContent = e.title, t.append(n);
                var o = null;
                return e.description && (o = this.dom.convertMarkdownLinkSnippets(e.description), o.classList.add("lh-audit-group__description", "lh-audit-group__footer"), t.append(o)), [
                    t,
                    o
                ];
            }
        },
        {
            key: "_renderGroupedAudits",
            value: function _renderGroupedAudits(e, t) {
                var n = new Map, o = "NotAGroup";
                n.set(o, []);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var a = _step.value;
                        var l = a.group || o, s = n.get(l) || [];
                        s.push(a), n.set(l, s);
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
                var i = [];
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = n[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _step_value = _sliced_to_array(_step1.value, 2), a1 = _step_value[0], l1 = _step_value[1];
                        if (a1 === o) {
                            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                            try {
                                for(var _iterator2 = l1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                    var p = _step2.value;
                                    i.push(this.renderAudit(p));
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
                            continue;
                        }
                        var s1 = t[a1], _this_renderAuditGroup = _sliced_to_array(this.renderAuditGroup(s1), 2), c = _this_renderAuditGroup[0], d = _this_renderAuditGroup[1];
                        var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                        try {
                            for(var _iterator3 = l1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                var p1 = _step3.value;
                                c.insertBefore(this.renderAudit(p1), d);
                            }
                        } catch (err) {
                            _didIteratorError3 = true;
                            _iteratorError3 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                    _iterator3.return();
                                }
                            } finally{
                                if (_didIteratorError3) {
                                    throw _iteratorError3;
                                }
                            }
                        }
                        c.classList.add("lh-audit-group--".concat(a1)), i.push(c);
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
                return i;
            }
        },
        {
            key: "renderUnexpandableClump",
            value: function renderUnexpandableClump(e, t) {
                var n = this.dom.createElement("div");
                return this._renderGroupedAudits(e, t).forEach(function(i) {
                    return n.append(i);
                }), n;
            }
        },
        {
            key: "renderClump",
            value: function renderClump(e, param) {
                var _this = this;
                var t = param.auditRefsOrEls, n = param.description, o = param.openByDefault;
                var _a;
                var i = this.dom.createComponent("clump"), a = this.dom.find(".lh-clump", i);
                o && a.setAttribute("open", "");
                var l = this.dom.find(".lh-audit-group__header", a), s = this._clumpTitles[e];
                this.dom.find(".lh-audit-group__title", l).textContent = s;
                var c = this.dom.find(".lh-audit-group__itemcount", a);
                c.textContent = "(".concat(t.length, ")");
                var d = t.map(function(h) {
                    return _instanceof(h, HTMLElement) ? h : _this.renderAudit(h);
                });
                (_a = a).append.apply(_a, _to_consumable_array(d));
                var p = this.dom.find(".lh-audit-group", i);
                if (n) {
                    var h = this.dom.convertMarkdownLinkSnippets(n);
                    h.classList.add("lh-audit-group__description", "lh-audit-group__footer"), p.append(h);
                }
                return this.dom.find(".lh-clump-toggletext--show", p).textContent = g.strings.show, this.dom.find(".lh-clump-toggletext--hide", p).textContent = g.strings.hide, a.classList.add("lh-clump--".concat(e.toLowerCase())), p;
            }
        },
        {
            key: "renderCategoryScore",
            value: function renderCategoryScore(e, t, n) {
                var o;
                if (n && E.shouldDisplayAsFraction(n.gatherMode) ? o = this.renderCategoryFraction(e) : o = this.renderScoreGauge(e, t), (n === null || n === void 0 ? void 0 : n.omitLabel) && this.dom.find(".lh-gauge__label,.lh-fraction__label", o).remove(), n === null || n === void 0 ? void 0 : n.onPageAnchorRendered) {
                    var i = this.dom.find("a", o);
                    n.onPageAnchorRendered(i);
                }
                return o;
            }
        },
        {
            key: "renderScoreGauge",
            value: function renderScoreGauge(e, t) {
                var n = this.dom.createComponent("gauge"), o = this.dom.find("a.lh-gauge__wrapper", n);
                E.isPluginCategory(e.id) && o.classList.add("lh-gauge__wrapper--plugin");
                var i = Number(e.score), a = this.dom.find(".lh-gauge", n), l = this.dom.find("circle.lh-gauge-arc", a);
                l && this._setGaugeArc(l, i);
                var s = Math.round(i * 100), c = this.dom.find("div.lh-gauge__percentage", n);
                return c.textContent = s.toString(), e.score === null && (c.classList.add("lh-gauge--error"), c.textContent = "", c.title = g.strings.errorLabel), e.auditRefs.length === 0 || this.hasApplicableAudits(e) ? o.classList.add("lh-gauge__wrapper--".concat(E.calculateRating(e.score))) : (o.classList.add("lh-gauge__wrapper--not-applicable"), c.textContent = "-", c.title = g.strings.notApplicableAuditsGroupTitle), this.dom.find(".lh-gauge__label", n).textContent = e.title, n;
            }
        },
        {
            key: "renderCategoryFraction",
            value: function renderCategoryFraction(e) {
                var t = this.dom.createComponent("fraction"), n = this.dom.find("a.lh-fraction__wrapper", t), _E_calculateCategoryFraction = E.calculateCategoryFraction(e), o = _E_calculateCategoryFraction.numPassed, i = _E_calculateCategoryFraction.numPassableAudits, a = _E_calculateCategoryFraction.totalWeight, l = o / i, s = this.dom.find(".lh-fraction__content", t), c = this.dom.createElement("span");
                c.textContent = "".concat(o, "/").concat(i), s.append(c);
                var d = E.calculateRating(l);
                return a === 0 && (d = "null"), n.classList.add("lh-fraction__wrapper--".concat(d)), this.dom.find(".lh-fraction__label", t).textContent = e.title, t;
            }
        },
        {
            key: "hasApplicableAudits",
            value: function hasApplicableAudits(e) {
                return e.auditRefs.some(function(t) {
                    return t.result.scoreDisplayMode !== "notApplicable";
                });
            }
        },
        {
            key: "_setGaugeArc",
            value: function _setGaugeArc(e, t) {
                var n = 2 * Math.PI * Number(e.getAttribute("r")), o = Number(e.getAttribute("stroke-width")), i = .25 * o / n;
                e.style.transform = "rotate(".concat(-90 + i * 360, "deg)");
                var a = t * n - o / 2;
                t === 0 && (e.style.opacity = "0"), t === 1 && (a = n), e.style.strokeDasharray = "".concat(Math.max(a, 0), " ").concat(n);
            }
        },
        {
            key: "_auditHasWarning",
            value: function _auditHasWarning(e) {
                var _e_result_warnings;
                return !!((_e_result_warnings = e.result.warnings) === null || _e_result_warnings === void 0 ? void 0 : _e_result_warnings.length);
            }
        },
        {
            key: "_getClumpIdForAuditRef",
            value: function _getClumpIdForAuditRef(e) {
                var t = e.result.scoreDisplayMode;
                return t === "manual" || t === "notApplicable" ? t : E.showAsPassed(e.result) ? this._auditHasWarning(e) ? "warning" : "passed" : "failed";
            }
        },
        {
            key: "render",
            value: function render(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
                var _i_get;
                var o = this.dom.createElement("div", "lh-category");
                o.id = e.id, o.append(this.renderCategoryHeader(e, t, n));
                var i = new Map;
                i.set("failed", []), i.set("warning", []), i.set("manual", []), i.set("passed", []), i.set("notApplicable", []);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.auditRefs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var l = _step.value;
                        if (l.group === "hidden") continue;
                        var s = this._getClumpIdForAuditRef(l), c = i.get(s);
                        c.push(l), i.set(s, c);
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
                    for(var _iterator1 = i.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var l1 = _step1.value;
                        l1.sort(function(s, c) {
                            return c.weight - s.weight;
                        });
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
                var a = (_i_get = i.get("failed")) === null || _i_get === void 0 ? void 0 : _i_get.length;
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = i[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var _step_value = _sliced_to_array(_step2.value, 2), l2 = _step_value[0], s1 = _step_value[1];
                        if (s1.length === 0) continue;
                        if (l2 === "failed") {
                            var h = this.renderUnexpandableClump(s1, t);
                            h.classList.add("lh-clump--failed"), o.append(h);
                            continue;
                        }
                        var c1 = l2 === "manual" ? e.manualDescription : void 0, d = l2 === "warning" || l2 === "manual" && a === 0, p = this.renderClump(l2, {
                            auditRefsOrEls: s1,
                            description: c1,
                            openByDefault: d
                        });
                        o.append(p);
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
                return o;
            }
        }
    ]);
    return G;
}();
var ee = /*#__PURE__*/ function() {
    "use strict";
    function ee() {
        _class_call_check(this, ee);
    }
    _create_class(ee, null, [
        {
            key: "initTree",
            value: function initTree(e) {
                var t = 0, n = Object.keys(e);
                return n.length > 0 && (t = e[n[0]].request.startTime), {
                    tree: e,
                    startTime: t,
                    transferSize: 0
                };
            }
        },
        {
            key: "createSegment",
            value: function createSegment(e, t, n, o, i, a) {
                var l = e[t], s = Object.keys(e), c = s.indexOf(t) === s.length - 1, d = !!l.children && Object.keys(l.children).length > 0, p = Array.isArray(i) ? i.slice(0) : [];
                return (typeof a === "undefined" ? "undefined" : _type_of(a)) < "u" && p.push(!a), {
                    node: l,
                    isLastChild: c,
                    hasChildren: d,
                    startTime: n,
                    transferSize: o + l.request.transferSize,
                    treeMarkers: p
                };
            }
        },
        {
            key: "createChainNode",
            value: function createChainNode(e, t, n) {
                var o = e.createComponent("crcChain");
                e.find(".lh-crc-node", o).setAttribute("title", t.node.request.url);
                var i = e.find(".lh-crc-node__tree-marker", o);
                t.treeMarkers.forEach(function(p) {
                    var h = p ? "lh-tree-marker lh-vert" : "lh-tree-marker";
                    i.append(e.createElement("span", h), e.createElement("span", "lh-tree-marker"));
                });
                var a = t.isLastChild ? "lh-tree-marker lh-up-right" : "lh-tree-marker lh-vert-right", l = t.hasChildren ? "lh-tree-marker lh-horiz-down" : "lh-tree-marker lh-right";
                i.append(e.createElement("span", a), e.createElement("span", "lh-tree-marker lh-right"), e.createElement("span", l));
                var s = t.node.request.url, c = n.renderTextURL(s), d = e.find(".lh-crc-node__tree-value", o);
                if (d.append(c), !t.hasChildren) {
                    var _t_node_request = t.node.request, p = _t_node_request.startTime, h = _t_node_request.endTime, u = _t_node_request.transferSize, v = e.createElement("span", "lh-crc-node__chain-duration");
                    v.textContent = " - " + g.i18n.formatMilliseconds((h - p) * 1e3) + ", ";
                    var b = e.createElement("span", "lh-crc-node__chain-duration");
                    b.textContent = g.i18n.formatBytesToKiB(u, .01), d.append(v, b);
                }
                return o;
            }
        },
        {
            key: "buildTree",
            value: function buildTree(e, t, n, o, i, a) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (o.append(q.createChainNode(e, n, a)), n.node.children) try {
                    for(var _iterator = Object.keys(n.node.children)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var l = _step.value;
                        var s = q.createSegment(n.node.children, l, n.startTime, n.transferSize, n.treeMarkers, n.isLastChild);
                        q.buildTree(e, t, s, o, i, a);
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
            key: "render",
            value: function render(e, t, n) {
                var o = e.createComponent("crc"), i = e.find(".lh-crc", o);
                e.find(".lh-crc-initial-nav", o).textContent = g.strings.crcInitialNavigation, e.find(".lh-crc__longest_duration_label", o).textContent = g.strings.crcLongestDurationLabel, e.find(".lh-crc__longest_duration", o).textContent = g.i18n.formatMilliseconds(t.longestChain.duration);
                var a = q.initTree(t.chains);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.keys(a.tree)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var l = _step.value;
                        var s = q.createSegment(a.tree, l, a.startTime, a.transferSize);
                        q.buildTree(e, o, s, i, t, n);
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
                return e.find(".lh-crc-container", o);
            }
        }
    ]);
    return ee;
}(), q = ee;
function pt(r, e) {
    return e.left <= r.width && 0 <= e.right && e.top <= r.height && 0 <= e.bottom;
}
function ke(r, e, t) {
    return r < e ? e : r > t ? t : r;
}
function ht(r) {
    return {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2
    };
}
var V = /*#__PURE__*/ function() {
    "use strict";
    function r() {
        _class_call_check(this, r);
    }
    _create_class(r, null, [
        {
            key: "getScreenshotPositions",
            value: function getScreenshotPositions(e, t, n) {
                var o = ht(e), i = ke(o.x - t.width / 2, 0, n.width - t.width), a = ke(o.y - t.height / 2, 0, n.height - t.height);
                return {
                    screenshot: {
                        left: i,
                        top: a
                    },
                    clip: {
                        left: e.left - i,
                        top: e.top - a
                    }
                };
            }
        },
        {
            key: "renderClipPathInScreenshot",
            value: function renderClipPathInScreenshot(e, t, n, o, i) {
                var a = e.find("clipPath", t), l = "clip-".concat(g.getUniqueSuffix());
                a.id = l, t.style.clipPath = "url(#".concat(l, ")");
                var s = n.top / i.height, c = s + o.height / i.height, d = n.left / i.width, p = d + o.width / i.width, h = [
                    "0,0             1,0            1,".concat(s, "          0,").concat(s),
                    "0,".concat(c, "     1,").concat(c, "    1,1               0,1"),
                    "0,".concat(s, "        ").concat(d, ",").concat(s, " ").concat(d, ",").concat(c, " 0,").concat(c),
                    "".concat(p, ",").concat(s, " 1,").concat(s, "       1,").concat(c, "       ").concat(p, ",").concat(c)
                ];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = h[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var u = _step.value;
                        var v = e.createElementNS("http://www.w3.org/2000/svg", "polygon");
                        v.setAttribute("points", u), a.append(v);
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
            key: "installFullPageScreenshot",
            value: function installFullPageScreenshot(e, t) {
                e.style.setProperty("--element-screenshot-url", "url('".concat(t.data, "')"));
            }
        },
        {
            key: "installOverlayFeature",
            value: function installOverlayFeature(e) {
                var t = e.dom, n = e.rootEl, o = e.overlayContainerEl, i = e.fullPageScreenshot, a = "lh-screenshot-overlay--enabled";
                n.classList.contains(a) || (n.classList.add(a), n.addEventListener("click", function(l) {
                    var s = l.target;
                    if (!s) return;
                    var c = s.closest(".lh-node > .lh-element-screenshot");
                    if (!c) return;
                    var d = t.createElement("div", "lh-element-screenshot__overlay");
                    o.append(d);
                    var p = {
                        width: d.clientWidth * .95,
                        height: d.clientHeight * .8
                    }, h = {
                        width: Number(c.dataset.rectWidth),
                        height: Number(c.dataset.rectHeight),
                        left: Number(c.dataset.rectLeft),
                        right: Number(c.dataset.rectLeft) + Number(c.dataset.rectWidth),
                        top: Number(c.dataset.rectTop),
                        bottom: Number(c.dataset.rectTop) + Number(c.dataset.rectHeight)
                    }, u = r.render(t, i.screenshot, h, p);
                    if (!u) {
                        d.remove();
                        return;
                    }
                    d.append(u), d.addEventListener("click", function() {
                        return d.remove();
                    });
                }));
            }
        },
        {
            key: "_computeZoomFactor",
            value: function _computeZoomFactor(e, t) {
                var o = {
                    x: t.width / e.width,
                    y: t.height / e.height
                }, i = .75 * Math.min(o.x, o.y);
                return Math.min(1, i);
            }
        },
        {
            key: "render",
            value: function render(e, t, n, o) {
                if (!pt(t, n)) return null;
                var i = e.createComponent("elementScreenshot"), a = e.find("div.lh-element-screenshot", i);
                a.dataset.rectWidth = n.width.toString(), a.dataset.rectHeight = n.height.toString(), a.dataset.rectLeft = n.left.toString(), a.dataset.rectTop = n.top.toString();
                var l = this._computeZoomFactor(n, o), s = {
                    width: o.width / l,
                    height: o.height / l
                };
                s.width = Math.min(t.width, s.width), s.height = Math.min(t.height, s.height);
                var c = {
                    width: s.width * l,
                    height: s.height * l
                }, d = r.getScreenshotPositions(n, s, {
                    width: t.width,
                    height: t.height
                }), p = e.find("div.lh-element-screenshot__image", a);
                p.style.width = c.width + "px", p.style.height = c.height + "px", p.style.backgroundPositionY = -(d.screenshot.top * l) + "px", p.style.backgroundPositionX = -(d.screenshot.left * l) + "px", p.style.backgroundSize = "".concat(t.width * l, "px ").concat(t.height * l, "px");
                var h = e.find("div.lh-element-screenshot__element-marker", a);
                h.style.width = n.width * l + "px", h.style.height = n.height * l + "px", h.style.left = d.clip.left * l + "px", h.style.top = d.clip.top * l + "px";
                var u = e.find("div.lh-element-screenshot__mask", a);
                return u.style.width = c.width + "px", u.style.height = c.height + "px", r.renderClipPathInScreenshot(e, u, d.clip, n, s), a;
            }
        }
    ]);
    return r;
}();
var ut = [
    "http://",
    "https://",
    "data:"
], gt = [
    "bytes",
    "numeric",
    "ms",
    "timespanMs"
], te = /*#__PURE__*/ function() {
    "use strict";
    function te(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _class_call_check(this, te);
        this._dom = e, this._fullPageScreenshot = t.fullPageScreenshot, this._entities = t.entities;
    }
    _create_class(te, [
        {
            key: "render",
            value: function render(e) {
                switch(e.type){
                    case "filmstrip":
                        return this._renderFilmstrip(e);
                    case "list":
                        return this._renderList(e);
                    case "table":
                    case "opportunity":
                        return this._renderTable(e);
                    case "criticalrequestchain":
                        return ee.render(this._dom, e, this);
                    case "screenshot":
                    case "debugdata":
                    case "treemap-data":
                        return null;
                    default:
                        return this._renderUnknown(e.type, e);
                }
            }
        },
        {
            key: "_renderBytes",
            value: function _renderBytes(e) {
                var t = g.i18n.formatBytesToKiB(e.value, e.granularity || .1), n = this._renderText(t);
                return n.title = g.i18n.formatBytes(e.value), n;
            }
        },
        {
            key: "_renderMilliseconds",
            value: function _renderMilliseconds(e) {
                var t;
                return e.displayUnit === "duration" ? t = g.i18n.formatDuration(e.value) : t = g.i18n.formatMilliseconds(e.value, e.granularity || 10), this._renderText(t);
            }
        },
        {
            key: "renderTextURL",
            value: function renderTextURL(e) {
                var t = e, n, o, i;
                try {
                    var l = k.parseURL(t);
                    n = l.file === "/" ? l.origin : l.file, o = l.file === "/" || l.hostname === "" ? "" : "(".concat(l.hostname, ")"), i = t;
                } catch (e) {
                    n = t;
                }
                var a = this._dom.createElement("div", "lh-text__url");
                if (a.append(this._renderLink({
                    text: n,
                    url: t
                })), o) {
                    var l1 = this._renderText(o);
                    l1.classList.add("lh-text__url-host"), a.append(l1);
                }
                return i && (a.title = t, a.dataset.url = t), a;
            }
        },
        {
            key: "_renderLink",
            value: function _renderLink(e) {
                var t = this._dom.createElement("a");
                if (this._dom.safelySetHref(t, e.url), !t.href) {
                    var n = this._renderText(e.text);
                    return n.classList.add("lh-link"), n;
                }
                return t.rel = "noopener", t.target = "_blank", t.textContent = e.text, t.classList.add("lh-link"), t;
            }
        },
        {
            key: "_renderText",
            value: function _renderText(e) {
                var t = this._dom.createElement("div", "lh-text");
                return t.textContent = e, t;
            }
        },
        {
            key: "_renderNumeric",
            value: function _renderNumeric(e) {
                var t = g.i18n.formatNumber(e.value, e.granularity || .1), n = this._dom.createElement("div", "lh-numeric");
                return n.textContent = t, n;
            }
        },
        {
            key: "_renderThumbnail",
            value: function _renderThumbnail(e) {
                var t = this._dom.createElement("img", "lh-thumbnail"), n = e;
                return t.src = n, t.title = n, t.alt = "", t;
            }
        },
        {
            key: "_renderUnknown",
            value: function _renderUnknown(e, t) {
                console.error("Unknown details type: ".concat(e), t);
                var n = this._dom.createElement("details", "lh-unknown");
                return this._dom.createChildOf(n, "summary").textContent = "We don't know how to render audit details of type `".concat(e, "`. The Lighthouse version that collected this data is likely newer than the Lighthouse version of the report renderer. Expand for the raw JSON."), this._dom.createChildOf(n, "pre").textContent = JSON.stringify(t, null, 2), n;
            }
        },
        {
            key: "_renderTableValue",
            value: function _renderTableValue(e, t) {
                if (e == null) return null;
                if ((typeof e === "undefined" ? "undefined" : _type_of(e)) == "object") switch(e.type){
                    case "code":
                        return this._renderCode(e.value);
                    case "link":
                        return this._renderLink(e);
                    case "node":
                        return this.renderNode(e);
                    case "numeric":
                        return this._renderNumeric(e);
                    case "source-location":
                        return this.renderSourceLocation(e);
                    case "url":
                        return this.renderTextURL(e.value);
                    default:
                        return this._renderUnknown(e.type, e);
                }
                switch(t.valueType){
                    case "bytes":
                        {
                            var n = Number(e);
                            return this._renderBytes({
                                value: n,
                                granularity: t.granularity
                            });
                        }
                    case "code":
                        {
                            var n1 = String(e);
                            return this._renderCode(n1);
                        }
                    case "ms":
                        {
                            var n2 = {
                                value: Number(e),
                                granularity: t.granularity,
                                displayUnit: t.displayUnit
                            };
                            return this._renderMilliseconds(n2);
                        }
                    case "numeric":
                        {
                            var n3 = Number(e);
                            return this._renderNumeric({
                                value: n3,
                                granularity: t.granularity
                            });
                        }
                    case "text":
                        {
                            var n4 = String(e);
                            return this._renderText(n4);
                        }
                    case "thumbnail":
                        {
                            var n5 = String(e);
                            return this._renderThumbnail(n5);
                        }
                    case "timespanMs":
                        {
                            var n6 = Number(e);
                            return this._renderMilliseconds({
                                value: n6
                            });
                        }
                    case "url":
                        {
                            var n7 = String(e);
                            return ut.some(function(o) {
                                return n7.startsWith(o);
                            }) ? this.renderTextURL(n7) : this._renderCode(n7);
                        }
                    default:
                        return this._renderUnknown(t.valueType, e);
                }
            }
        },
        {
            key: "_getDerivedSubItemsHeading",
            value: function _getDerivedSubItemsHeading(e) {
                return e.subItemsHeading ? {
                    key: e.subItemsHeading.key || "",
                    valueType: e.subItemsHeading.valueType || e.valueType,
                    granularity: e.subItemsHeading.granularity || e.granularity,
                    displayUnit: e.subItemsHeading.displayUnit || e.displayUnit,
                    label: ""
                } : null;
            }
        },
        {
            key: "_renderTableRow",
            value: function _renderTableRow(e, t) {
                var n = this._dom.createElement("tr");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var o = _step.value;
                        if (!o || !o.key) {
                            this._dom.createChildOf(n, "td", "lh-table-column--empty");
                            continue;
                        }
                        var i = e[o.key], a = void 0;
                        if (i != null && (a = this._renderTableValue(i, o)), a) {
                            var l = "lh-table-column--".concat(o.valueType);
                            this._dom.createChildOf(n, "td", l).append(a);
                        } else this._dom.createChildOf(n, "td", "lh-table-column--empty");
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
                return n;
            }
        },
        {
            key: "_renderTableRowsFromItem",
            value: function _renderTableRowsFromItem(e, t) {
                var n = this._dom.createFragment();
                if (n.append(this._renderTableRow(e, t)), !e.subItems) return n;
                var o = t.map(this._getDerivedSubItemsHeading);
                if (!o.some(Boolean)) return n;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.subItems.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var i = _step.value;
                        var a = this._renderTableRow(i, o);
                        a.classList.add("lh-sub-item-row"), n.append(a);
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
                return n;
            }
        },
        {
            key: "_adornEntityGroupRow",
            value: function _adornEntityGroupRow(e) {
                var _this__entities;
                var t = e.dataset.entity;
                if (!t) return;
                var n = (_this__entities = this._entities) === null || _this__entities === void 0 ? void 0 : _this__entities.find(function(i) {
                    return i.name === t;
                });
                if (!n) return;
                var o = this._dom.find("td", e);
                if (n.category) {
                    var i = this._dom.createElement("span");
                    i.classList.add("lh-audit__adorn"), i.textContent = n.category, o.append(" ", i);
                }
                if (n.isFirstParty) {
                    var i1 = this._dom.createElement("span");
                    i1.classList.add("lh-audit__adorn", "lh-audit__adorn1p"), i1.textContent = g.strings.firstPartyChipLabel, o.append(" ", i1);
                }
                if (n.homepage) {
                    var i2 = this._dom.createElement("a");
                    i2.href = n.homepage, i2.target = "_blank", i2.title = g.strings.openInANewTabTooltip, i2.classList.add("lh-report-icon--external"), o.append(" ", i2);
                }
            }
        },
        {
            key: "_renderEntityGroupRow",
            value: function _renderEntityGroupRow(e, t) {
                var n = _object_spread({}, t[0]);
                n.valueType = "text";
                var o = [
                    n
                ].concat(_to_consumable_array(t.slice(1))), i = this._dom.createFragment();
                return i.append(this._renderTableRow(e, o)), this._dom.find("tr", i).classList.add("lh-row--group"), i;
            }
        },
        {
            key: "_getEntityGroupItems",
            value: function _getEntityGroupItems(e) {
                var t = e.items, n = e.headings, o = e.sortedBy;
                if (!t.length || e.isEntityGrouped || !t.some(function(d) {
                    return d.entity;
                })) return [];
                var i = new Set(e.skipSumming || []), a = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = n[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var d = _step.value;
                        !d.key || i.has(d.key) || gt.includes(d.valueType) && a.push(d.key);
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
                var l = n[0].key;
                if (!l) return [];
                var s = new Map;
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = t[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var d1 = _step1.value;
                        var _obj;
                        var p = typeof d1.entity == "string" ? d1.entity : void 0, h = s.get(p) || (_obj = {}, _define_property(_obj, l, p || g.strings.unattributable), _define_property(_obj, "entity", p), _obj);
                        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                        try {
                            for(var _iterator2 = a[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                var u = _step2.value;
                                h[u] = Number(h[u] || 0) + Number(d1[u] || 0);
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
                        s.set(p, h);
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
                var c = _to_consumable_array(s.values());
                return o && c.sort(E.getTableItemSortComparator(o)), c;
            }
        },
        {
            key: "_renderTable",
            value: function _renderTable(e) {
                if (!e.items.length) return this._dom.createElement("span");
                var t = this._dom.createElement("table", "lh-table"), n = this._dom.createChildOf(t, "thead"), o = this._dom.createChildOf(n, "tr");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.headings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var l = _step.value;
                        var c = "lh-table-column--".concat(l.valueType || "text"), d = this._dom.createElement("div", "lh-text");
                        d.textContent = l.label, this._dom.createChildOf(o, "th", c).append(d);
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
                var i = this._getEntityGroupItems(e), a = this._dom.createChildOf(t, "tbody");
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                if (i.length) try {
                    var _this, _loop = function() {
                        var l = _step1.value;
                        var s = typeof l.entity == "string" ? l.entity : void 0, c = _this._renderEntityGroupRow(l, e.headings);
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = e.items.filter(function(h) {
                                return h.entity === s;
                            })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var p = _step.value;
                                c.append(_this._renderTableRowsFromItem(p, e.headings));
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
                        var d = _this._dom.findAll("tr", c);
                        s && d.length && (d.forEach(function(p) {
                            return p.dataset.entity = s;
                        }), _this._adornEntityGroupRow(d[0])), a.append(c);
                    };
                    for(var _iterator1 = i[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_this = this, _loop();
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
                else {
                    var l1 = !0;
                    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                    try {
                        for(var _iterator2 = e.items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                            var s = _step2.value;
                            var c1 = this._renderTableRowsFromItem(s, e.headings), d1 = this._dom.findAll("tr", c1), p = d1[0];
                            var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                            if (typeof s.entity == "string" && (p.dataset.entity = s.entity), e.isEntityGrouped && s.entity) p.classList.add("lh-row--group"), this._adornEntityGroupRow(p);
                            else try {
                                for(var _iterator3 = d1[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                                    var h = _step3.value;
                                    h.classList.add(l1 ? "lh-row--even" : "lh-row--odd");
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally{
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                        _iterator3.return();
                                    }
                                } finally{
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }
                            l1 = !l1, a.append(c1);
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
                }
                return t;
            }
        },
        {
            key: "_renderList",
            value: function _renderList(e) {
                var _this = this;
                var t = this._dom.createElement("div", "lh-list");
                return e.items.forEach(function(n) {
                    var o = _this.render(n);
                    o && t.append(o);
                }), t;
            }
        },
        {
            key: "renderNode",
            value: function renderNode(e) {
                var t = this._dom.createElement("span", "lh-node");
                if (e.nodeLabel) {
                    var a = this._dom.createElement("div");
                    a.textContent = e.nodeLabel, t.append(a);
                }
                if (e.snippet) {
                    var a1 = this._dom.createElement("div");
                    a1.classList.add("lh-node__snippet"), a1.textContent = e.snippet, t.append(a1);
                }
                if (e.selector && (t.title = e.selector), e.path && t.setAttribute("data-path", e.path), e.selector && t.setAttribute("data-selector", e.selector), e.snippet && t.setAttribute("data-snippet", e.snippet), !this._fullPageScreenshot) return t;
                var n = e.lhId && this._fullPageScreenshot.nodes[e.lhId];
                if (!n || n.width === 0 || n.height === 0) return t;
                var o = {
                    width: 147,
                    height: 100
                }, i = V.render(this._dom, this._fullPageScreenshot.screenshot, n, o);
                return i && t.prepend(i), t;
            }
        },
        {
            key: "renderSourceLocation",
            value: function renderSourceLocation(e) {
                if (!e.url) return null;
                var t = "".concat(e.url, ":").concat(e.line + 1, ":").concat(e.column), n;
                e.original && (n = "".concat(e.original.file || "<unmapped>", ":").concat(e.original.line + 1, ":").concat(e.original.column));
                var o;
                if (e.urlProvider === "network" && n) o = this._renderLink({
                    url: e.url,
                    text: n
                }), o.title = "maps to generated location ".concat(t);
                else if (e.urlProvider === "network" && !n) o = this.renderTextURL(e.url), this._dom.find(".lh-link", o).textContent += ":".concat(e.line + 1, ":").concat(e.column);
                else if (e.urlProvider === "comment" && n) o = this._renderText("".concat(n, " (from source map)")), o.title = "".concat(t, " (from sourceURL)");
                else if (e.urlProvider === "comment" && !n) o = this._renderText("".concat(t, " (from sourceURL)"));
                else return null;
                return o.classList.add("lh-source-location"), o.setAttribute("data-source-url", e.url), o.setAttribute("data-source-line", String(e.line)), o.setAttribute("data-source-column", String(e.column)), o;
            }
        },
        {
            key: "_renderFilmstrip",
            value: function _renderFilmstrip(e) {
                var t = this._dom.createElement("div", "lh-filmstrip");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var n = _step.value;
                        var o = this._dom.createChildOf(t, "div", "lh-filmstrip__frame"), i = this._dom.createChildOf(o, "img", "lh-filmstrip__thumbnail");
                        i.src = n.data, i.alt = "Screenshot";
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
                return t;
            }
        },
        {
            key: "_renderCode",
            value: function _renderCode(e) {
                var t = this._dom.createElement("pre", "lh-code");
                return t.textContent = e, t;
            }
        }
    ]);
    return te;
}();
var se = "\xA0";
var oe = /*#__PURE__*/ function() {
    "use strict";
    function oe(e) {
        _class_call_check(this, oe);
        e === "en-XA" && (e = "de"), this._locale = e, this._cachedNumberFormatters = new Map;
    }
    _create_class(oe, [
        {
            key: "_formatNumberWithGranularity",
            value: function _formatNumberWithGranularity(e, t) {
                var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                if (t !== void 0) {
                    var a = -Math.log10(t);
                    Number.isInteger(a) || (console.warn("granularity of ".concat(t, " is invalid. Using 1 instead")), t = 1), t < 1 && (n = _object_spread({}, n), n.minimumFractionDigits = n.maximumFractionDigits = Math.ceil(a)), e = Math.round(e / t) * t, Object.is(e, -0) && (e = 0);
                } else Math.abs(e) < 5e-4 && (e = 0);
                var o, i = [
                    n.minimumFractionDigits,
                    n.maximumFractionDigits,
                    n.style,
                    n.unit,
                    n.unitDisplay,
                    this._locale
                ].join("");
                return o = this._cachedNumberFormatters.get(i), o || (o = new Intl.NumberFormat(this._locale, n), this._cachedNumberFormatters.set(i, o)), o.format(e).replace(" ", se);
            }
        },
        {
            key: "formatNumber",
            value: function formatNumber(e, t) {
                return this._formatNumberWithGranularity(e, t);
            }
        },
        {
            key: "formatInteger",
            value: function formatInteger(e) {
                return this._formatNumberWithGranularity(e, 1);
            }
        },
        {
            key: "formatPercent",
            value: function formatPercent(e) {
                return new Intl.NumberFormat(this._locale, {
                    style: "percent"
                }).format(e);
            }
        },
        {
            key: "formatBytesToKiB",
            value: function formatBytesToKiB(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
                return this._formatNumberWithGranularity(e / 1024, t) + "".concat(se, "KiB");
            }
        },
        {
            key: "formatBytesToMiB",
            value: function formatBytesToMiB(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
                return this._formatNumberWithGranularity(e / 1048576, t) + "".concat(se, "MiB");
            }
        },
        {
            key: "formatBytes",
            value: function formatBytes(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
                return this._formatNumberWithGranularity(e, t, {
                    style: "unit",
                    unit: "byte",
                    unitDisplay: "long"
                });
            }
        },
        {
            key: "formatBytesWithBestUnit",
            value: function formatBytesWithBestUnit(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : .1;
                return e >= 1048576 ? this.formatBytesToMiB(e, t) : e >= 1024 ? this.formatBytesToKiB(e, t) : this._formatNumberWithGranularity(e, t, {
                    style: "unit",
                    unit: "byte",
                    unitDisplay: "narrow"
                });
            }
        },
        {
            key: "formatKbps",
            value: function formatKbps(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
                return this._formatNumberWithGranularity(e, t, {
                    style: "unit",
                    unit: "kilobit-per-second",
                    unitDisplay: "short"
                });
            }
        },
        {
            key: "formatMilliseconds",
            value: function formatMilliseconds(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
                return this._formatNumberWithGranularity(e, t, {
                    style: "unit",
                    unit: "millisecond",
                    unitDisplay: "short"
                });
            }
        },
        {
            key: "formatSeconds",
            value: function formatSeconds(e) {
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
                return this._formatNumberWithGranularity(e / 1e3, t, {
                    style: "unit",
                    unit: "second",
                    unitDisplay: "narrow"
                });
            }
        },
        {
            key: "formatDateTime",
            value: function formatDateTime(e) {
                var t = {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    timeZoneName: "short"
                }, n;
                try {
                    n = new Intl.DateTimeFormat(this._locale, t);
                } catch (e) {
                    t.timeZone = "UTC", n = new Intl.DateTimeFormat(this._locale, t);
                }
                return n.format(new Date(e));
            }
        },
        {
            key: "formatDuration",
            value: function formatDuration(e) {
                var _this = this;
                var t = e / 1e3;
                if (Math.round(t) === 0) return "None";
                var n = [], o = {
                    day: 60 * 60 * 24,
                    hour: 60 * 60,
                    minute: 60,
                    second: 1
                };
                return Object.keys(o).forEach(function(i) {
                    var a = o[i], l = Math.floor(t / a);
                    if (l > 0) {
                        t -= l * a;
                        var s = _this._formatNumberWithGranularity(l, 1, {
                            style: "unit",
                            unit: i,
                            unitDisplay: "narrow"
                        });
                        n.push(s);
                    }
                }), n.join(" ");
            }
        }
    ]);
    return oe;
}();
function Se(r) {
    var e = r.createComponent("explodeyGauge");
    return r.find(".lh-exp-gauge-component", e);
}
function Ae(r, e, t) {
    var n = r.find("div.lh-exp-gauge__wrapper", e);
    n.className = "", n.classList.add("lh-exp-gauge__wrapper", "lh-exp-gauge__wrapper--".concat(E.calculateRating(t.score))), ft(r, n, t);
}
function mt(r, e, t) {
    t = t || r / 32;
    var n = r / t, o = .5 * t, i = n + o + t, a = 2 * Math.PI * n, l = Math.acos(1 - .5 * Math.pow(.5 * t / n, 2)) * n, s = 2 * Math.PI * i, c = Math.acos(1 - .5 * Math.pow(.5 * t / i, 2)) * i;
    return {
        radiusInner: n,
        radiusOuter: i,
        circumferenceInner: a,
        circumferenceOuter: s,
        getArcLength: function() {
            return Math.max(0, Number(e * a));
        },
        getMetricArcLength: function(d) {
            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
            var h = p ? 0 : 2 * c;
            return Math.max(0, Number(d * s - o - h));
        },
        endDiffInner: l,
        endDiffOuter: c,
        strokeWidth: t,
        strokeGap: o
    };
}
function ft(r, e, t) {
    var i = Number(t.score), _mt = mt(128, i), a = _mt.radiusInner, l = _mt.radiusOuter, s = _mt.circumferenceInner, c = _mt.circumferenceOuter, d = _mt.getArcLength, p = _mt.getMetricArcLength, h = _mt.endDiffInner, u = _mt.endDiffOuter, v = _mt.strokeWidth, b = _mt.strokeGap, m = r.find("svg.lh-exp-gauge", e);
    r.find(".lh-exp-gauge__label", m).textContent = t.title, m.setAttribute("viewBox", [
        -64,
        -64 / 2,
        128,
        128 / 2
    ].join(" ")), m.style.setProperty("--stroke-width", "".concat(v, "px")), m.style.setProperty("--circle-meas", (2 * Math.PI).toFixed(4));
    var x = r.find("g.lh-exp-gauge__outer", e), T = r.find("g.lh-exp-gauge__inner", e), L = r.find("circle.lh-cover", x), F = r.find("circle.lh-exp-gauge__arc", T), f = r.find("text.lh-exp-gauge__percentage", T);
    x.style.setProperty("--scale-initial", String(a / l)), x.style.setProperty("--radius", "".concat(l, "px")), L.style.setProperty("--radius", "".concat(.5 * (a + l), "px")), L.setAttribute("stroke-width", String(b)), m.style.setProperty("--radius", "".concat(a, "px")), F.setAttribute("stroke-dasharray", "".concat(d(), " ").concat((s - d()).toFixed(4))), F.setAttribute("stroke-dashoffset", String(.25 * s - h)), f.textContent = Math.round(i * 100).toString();
    var _ = l + v, y = l - v, S = t.auditRefs.filter(function(w) {
        return w.group === "metrics" && w.weight;
    }), M = S.reduce(function(w, A) {
        return w += A.weight;
    }, 0), z = .25 * c - u - .5 * b, D = -.5 * Math.PI;
    x.querySelectorAll(".metric").forEach(function(w) {
        S.map(function(I) {
            return "metric--".concat(I.id);
        }).find(function(I) {
            return w.classList.contains(I);
        }) || w.remove();
    }), S.forEach(function(w, A) {
        var _w_acronym;
        var C = (_w_acronym = w.acronym) !== null && _w_acronym !== void 0 ? _w_acronym : w.id, I = !x.querySelector(".metric--".concat(C)), P = r.maybeFind("g.metric--".concat(C), x) || r.createSVGElement("g"), B = r.maybeFind(".metric--".concat(C, " circle.lh-exp-gauge--faded"), x) || r.createSVGElement("circle"), Z = r.maybeFind(".metric--".concat(C, " circle.lh-exp-gauge--miniarc"), x) || r.createSVGElement("circle"), j = r.maybeFind(".metric--".concat(C, " circle.lh-exp-gauge-hovertarget"), x) || r.createSVGElement("circle"), H = r.maybeFind(".metric--".concat(C, " text.metric__label"), x) || r.createSVGElement("text"), U = r.maybeFind(".metric--".concat(C, " text.metric__value"), x) || r.createSVGElement("text");
        P.classList.add("metric", "metric--".concat(C)), B.classList.add("lh-exp-gauge__arc", "lh-exp-gauge__arc--metric", "lh-exp-gauge--faded"), Z.classList.add("lh-exp-gauge__arc", "lh-exp-gauge__arc--metric", "lh-exp-gauge--miniarc"), j.classList.add("lh-exp-gauge__arc", "lh-exp-gauge__arc--metric", "lh-exp-gauge-hovertarget");
        var W = w.weight / M, pe = p(W), he = w.result.score ? w.result.score * W : 0, ue = p(he), De = W * c, ge = p(W, !0), me = E.calculateRating(w.result.score, w.result.scoreDisplayMode);
        P.style.setProperty("--metric-rating", me), P.style.setProperty("--metric-color", "var(--color-".concat(me, ")")), P.style.setProperty("--metric-offset", "".concat(z)), P.style.setProperty("--i", A.toString()), B.setAttribute("stroke-dasharray", "".concat(pe, " ").concat(c - pe)), Z.style.setProperty("--metric-array", "".concat(ue, " ").concat(c - ue)), j.setAttribute("stroke-dasharray", "".concat(ge, " ").concat(c - ge - u)), H.classList.add("metric__label"), U.classList.add("metric__value"), H.textContent = C, U.textContent = "+".concat(Math.round(he * 100));
        var fe = D + W * Math.PI, Q = Math.cos(fe), X = Math.sin(fe);
        switch(!0){
            case Q > 0:
                U.setAttribute("text-anchor", "end");
                break;
            case Q < 0:
                H.setAttribute("text-anchor", "end");
                break;
            case Q === 0:
                H.setAttribute("text-anchor", "middle"), U.setAttribute("text-anchor", "middle");
                break;
        }
        switch(!0){
            case X > 0:
                H.setAttribute("dominant-baseline", "hanging");
                break;
            case X < 0:
                U.setAttribute("dominant-baseline", "hanging");
                break;
            case X === 0:
                H.setAttribute("dominant-baseline", "middle"), U.setAttribute("dominant-baseline", "middle");
                break;
        }
        H.setAttribute("x", (_ * Q).toFixed(2)), H.setAttribute("y", (_ * X).toFixed(2)), U.setAttribute("x", (y * Q).toFixed(2)), U.setAttribute("y", (y * X).toFixed(2)), I && (P.appendChild(B), P.appendChild(Z), P.appendChild(j), P.appendChild(H), P.appendChild(U), x.appendChild(P)), z -= De, D += W * 2 * Math.PI;
    });
    var R = x.querySelector(".lh-exp-gauge-underhovertarget") || r.createSVGElement("circle");
    R.classList.add("lh-exp-gauge__arc", "lh-exp-gauge__arc--metric", "lh-exp-gauge-hovertarget", "lh-exp-gauge-underhovertarget");
    var N = p(1, !0);
    if (R.setAttribute("stroke-dasharray", "".concat(N, " ").concat(c - N - u)), R.isConnected || x.prepend(R), m.dataset.listenersSetup) return;
    m.dataset.listenersSetup = !0, J(m), m.addEventListener("pointerover", function(w) {
        if (w.target === m && m.classList.contains("state--expanded")) {
            m.classList.remove("state--expanded"), m.classList.contains("state--highlight") && (m.classList.remove("state--highlight"), r.find(".metric--highlight", m).classList.remove("metric--highlight"));
            return;
        }
        if (!_instanceof(w.target, Element)) return;
        var A = w.target.parentNode;
        if (_instanceof(A, SVGElement)) {
            if (A && A === T) {
                m.classList.contains("state--expanded") ? m.classList.contains("state--highlight") && (m.classList.remove("state--highlight"), r.find(".metric--highlight", m).classList.remove("metric--highlight")) : m.classList.add("state--expanded");
                return;
            }
            if (A && A.classList && A.classList.contains("metric")) {
                var C = A.style.getPropertyValue("--metric-rating");
                if (e.style.setProperty("--color-highlight", "var(--color-".concat(C, "-secondary)")), !m.classList.contains("state--highlight")) m.classList.add("state--highlight"), A.classList.add("metric--highlight");
                else {
                    var I = r.find(".metric--highlight", m);
                    A !== I && (I.classList.remove("metric--highlight"), A.classList.add("metric--highlight"));
                }
            }
        }
    }), m.addEventListener("mouseleave", function() {
        var _m_querySelector;
        m.classList.remove("state--highlight"), (_m_querySelector = m.querySelector(".metric--highlight")) === null || _m_querySelector === void 0 ? void 0 : _m_querySelector.classList.remove("metric--highlight");
    });
    function J(w) {
        return _J.apply(this, arguments);
    }
    function _J() {
        _J = _async_to_generator(function(w) {
            var A, C, I, P, B, Z;
            function j() {
                clearTimeout(Z), B();
            }
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            new Promise(function(H) {
                                return setTimeout(H, 1e3);
                            })
                        ];
                    case 1:
                        if (_state.sent(), w.classList.contains("state--expanded")) return [
                            2
                        ];
                        A = r.find(".lh-exp-gauge__inner", w), C = "uniq-".concat(Math.random());
                        A.setAttribute("id", C);
                        I = r.createSVGElement("use");
                        I.setAttribute("href", "#".concat(C)), w.appendChild(I);
                        P = 2.5;
                        w.style.setProperty("--peek-dur", "".concat(P, "s")), w.classList.add("state--peek", "state--expanded");
                        B = function() {
                            w.classList.remove("state--peek", "state--expanded"), I.remove();
                        }, Z = setTimeout(function() {
                            w.removeEventListener("mouseenter", j), B();
                        }, P * 1e3 * 1.5);
                        w.addEventListener("mouseenter", j, {
                            once: !0
                        });
                        return [
                            2
                        ];
                }
            });
        });
        return _J.apply(this, arguments);
    }
}
var ie = /*#__PURE__*/ function(G) {
    "use strict";
    _inherits(ie, G);
    var _super = _create_super(ie);
    function ie() {
        _class_call_check(this, ie);
        return _super.apply(this, arguments);
    }
    _create_class(ie, [
        {
            key: "_renderMetric",
            value: function _renderMetric(e) {
                var t = this.dom.createComponent("metric"), n = this.dom.find(".lh-metric", t);
                n.id = e.result.id;
                var o = E.calculateRating(e.result.score, e.result.scoreDisplayMode);
                n.classList.add("lh-metric--".concat(o));
                var i = this.dom.find(".lh-metric__title", t);
                i.textContent = e.result.title;
                var a = this.dom.find(".lh-metric__value", t);
                a.textContent = e.result.displayValue || "";
                var l = this.dom.find(".lh-metric__description", t);
                if (l.append(this.dom.convertMarkdownLinkSnippets(e.result.description)), e.result.scoreDisplayMode === "error") {
                    l.textContent = "", a.textContent = "Error!";
                    var s = this.dom.createChildOf(l, "span");
                    s.textContent = e.result.errorMessage || "Report error: no metric information";
                } else e.result.scoreDisplayMode === "notApplicable" && (a.textContent = "--");
                return n;
            }
        },
        {
            key: "_getScoringCalculatorHref",
            value: function _getScoringCalculatorHref(e) {
                var t = e.filter(function(p) {
                    return p.group === "metrics";
                }), n = e.find(function(p) {
                    return p.id === "interactive";
                }), o = e.find(function(p) {
                    return p.id === "first-cpu-idle";
                }), i = e.find(function(p) {
                    return p.id === "first-meaningful-paint";
                });
                n && t.push(n), o && t.push(o), i && typeof i.result.score == "number" && t.push(i);
                var a = function(p) {
                    return Math.round(p * 100) / 100;
                }, s = _to_consumable_array(t.map(function(p) {
                    var h;
                    return typeof p.result.numericValue == "number" ? (h = p.id === "cumulative-layout-shift" ? a(p.result.numericValue) : Math.round(p.result.numericValue), h = h.toString()) : h = "null", [
                        p.acronym || p.id,
                        h
                    ];
                }));
                g.reportJson && (s.push([
                    "device",
                    g.reportJson.configSettings.formFactor
                ]), s.push([
                    "version",
                    g.reportJson.lighthouseVersion
                ]));
                var c = new URLSearchParams(s), d = new URL("https://googlechrome.github.io/lighthouse/scorecalc/");
                return d.hash = c.toString(), d.href;
            }
        },
        {
            key: "overallImpact",
            value: function overallImpact(e, t) {
                if (!e.result.metricSavings) return {
                    overallImpact: 0,
                    overallLinearImpact: 0
                };
                var n = 0, o = 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _loop = function() {
                        var _step_value = _sliced_to_array(_step.value, 2), i = _step_value[0], a = _step_value[1];
                        if (a === void 0) return "continue";
                        var l = t.find(function(u) {
                            return u.acronym === i;
                        });
                        if (!l || l.result.score === null) return "continue";
                        var s = l.result.numericValue;
                        if (!s) return "continue";
                        var c = a / s * l.weight;
                        o += c;
                        var d = l.result.scoringOptions;
                        if (!d) return "continue";
                        var h = (k.computeLogNormalScore(d, s - a) - l.result.score) * l.weight;
                        n += h;
                    };
                    for(var _iterator = Object.entries(e.result.metricSavings)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                return {
                    overallImpact: n,
                    overallLinearImpact: o
                };
            }
        },
        {
            key: "render",
            value: function render(e, t, n) {
                var _this = this;
                var _e_auditRefs_find;
                var o = g.strings, i = this.dom.createElement("div", "lh-category");
                i.id = e.id, i.append(this.renderCategoryHeader(e, t, n));
                var a = e.auditRefs.filter(function(f) {
                    return f.group === "metrics";
                });
                if (a.length) {
                    var _this_renderAuditGroup = _sliced_to_array(this.renderAuditGroup(t.metrics), 2), f = _this_renderAuditGroup[0], _ = _this_renderAuditGroup[1], y = this.dom.createElement("input", "lh-metrics-toggle__input"), S = "lh-metrics-toggle".concat(g.getUniqueSuffix());
                    y.setAttribute("aria-label", "Toggle the display of metric descriptions"), y.type = "checkbox", y.id = S, f.prepend(y);
                    var M = this.dom.find(".lh-audit-group__header", f), z = this.dom.createChildOf(M, "label", "lh-metrics-toggle__label");
                    z.htmlFor = S;
                    var D = this.dom.createChildOf(z, "span", "lh-metrics-toggle__labeltext--show"), R = this.dom.createChildOf(z, "span", "lh-metrics-toggle__labeltext--hide");
                    D.textContent = g.strings.expandView, R.textContent = g.strings.collapseView;
                    var N = this.dom.createElement("div", "lh-metrics-container");
                    if (f.insertBefore(N, _), a.forEach(function(J) {
                        N.append(_this._renderMetric(J));
                    }), i.querySelector(".lh-gauge__wrapper")) {
                        var J = this.dom.find(".lh-category-header__description", i), w = this.dom.createChildOf(J, "div", "lh-metrics__disclaimer"), A = this.dom.convertMarkdownLinkSnippets(o.varianceDisclaimer);
                        w.append(A);
                        var C = this.dom.createChildOf(w, "a", "lh-calclink");
                        C.target = "_blank", C.textContent = o.calculatorLink, this.dom.safelySetHref(C, this._getScoringCalculatorHref(e.auditRefs));
                    }
                    f.classList.add("lh-audit-group--metrics"), i.append(f);
                }
                var l = this.dom.createChildOf(i, "div", "lh-filmstrip-container"), c = (_e_auditRefs_find = e.auditRefs.find(function(f) {
                    return f.id === "screenshot-thumbnails";
                })) === null || _e_auditRefs_find === void 0 ? void 0 : _e_auditRefs_find.result;
                if (c === null || c === void 0 ? void 0 : c.details) {
                    l.id = c.id;
                    var f1 = this.detailsRenderer.render(c.details);
                    f1 && l.append(f1);
                }
                var d = e.auditRefs.filter(function(f) {
                    return f.group === "diagnostics";
                }).map(function(f) {
                    var _this_overallImpact = _this.overallImpact(f, a), _ = _this_overallImpact.overallImpact, y = _this_overallImpact.overallLinearImpact, S = f.result.guidanceLevel || 1, M = _this.renderAudit(f);
                    return {
                        auditRef: f,
                        auditEl: M,
                        overallImpact: _,
                        overallLinearImpact: y,
                        guidanceLevel: S
                    };
                }), p = d.filter(function(f) {
                    return !E.showAsPassed(f.auditRef.result);
                }), h = d.filter(function(f) {
                    return E.showAsPassed(f.auditRef.result);
                }), _this_renderAuditGroup1 = _sliced_to_array(this.renderAuditGroup(t.diagnostics), 2), u = _this_renderAuditGroup1[0], v = _this_renderAuditGroup1[1];
                u.classList.add("lh-audit-group--diagnostics");
                function b(f) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = d[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _ = _step.value;
                            if (f === "All") _.auditEl.hidden = !1;
                            else {
                                var __auditRef_result_metricSavings;
                                var y = ((__auditRef_result_metricSavings = _.auditRef.result.metricSavings) === null || __auditRef_result_metricSavings === void 0 ? void 0 : __auditRef_result_metricSavings[f]) === void 0;
                                _.auditEl.hidden = y;
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
                    p.sort(function(_, y) {
                        var S = _.auditRef.result.score || 0, M = y.auditRef.result.score || 0;
                        if (S !== M) return S - M;
                        if (f !== "All") {
                            var __auditRef_result_metricSavings, _y_auditRef_result_metricSavings;
                            var __auditRef_result_metricSavings_f, _y_auditRef_result_metricSavings_f;
                            var z = (__auditRef_result_metricSavings_f = (__auditRef_result_metricSavings = _.auditRef.result.metricSavings) === null || __auditRef_result_metricSavings === void 0 ? void 0 : __auditRef_result_metricSavings[f]) !== null && __auditRef_result_metricSavings_f !== void 0 ? __auditRef_result_metricSavings_f : -1, D = (_y_auditRef_result_metricSavings_f = (_y_auditRef_result_metricSavings = y.auditRef.result.metricSavings) === null || _y_auditRef_result_metricSavings === void 0 ? void 0 : _y_auditRef_result_metricSavings[f]) !== null && _y_auditRef_result_metricSavings_f !== void 0 ? _y_auditRef_result_metricSavings_f : -1;
                            if (z !== D) return D - z;
                        }
                        return _.overallImpact !== y.overallImpact ? y.overallImpact * y.guidanceLevel - _.overallImpact * _.guidanceLevel : _.overallImpact === 0 && y.overallImpact === 0 && _.overallLinearImpact !== y.overallLinearImpact ? y.overallLinearImpact * y.guidanceLevel - _.overallLinearImpact * _.guidanceLevel : y.guidanceLevel - _.guidanceLevel;
                    });
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = p[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var _1 = _step1.value;
                            u.insertBefore(_1.auditEl, v);
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
                var m = new Set;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = p[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var f2 = _step.value;
                        var _1 = f2.auditRef.result.metricSavings || {};
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = Object.entries(_1)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var _step_value = _sliced_to_array(_step1.value, 2), y1 = _step_value[0], S1 = _step_value[1];
                                typeof S1 == "number" && m.add(y1);
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
                var x = a.filter(function(f) {
                    return f.acronym && m.has(f.acronym);
                });
                if (x.length && this.renderMetricAuditFilter(x, i, b), b("All"), p.length && i.append(u), !h.length) return i;
                var T = {
                    auditRefsOrEls: h.map(function(f) {
                        return f.auditEl;
                    }),
                    groupDefinitions: t
                }, L = this.renderClump("passed", T);
                if (i.append(L), (!n || (n === null || n === void 0 ? void 0 : n.gatherMode) === "navigation") && e.score !== null) {
                    var f3 = Se(this.dom);
                    Ae(this.dom, f3, e), this.dom.find(".lh-score__gauge", i).replaceWith(f3);
                }
                return i;
            }
        },
        {
            key: "renderMetricAuditFilter",
            value: function renderMetricAuditFilter(e, t, n) {
                var o = this.dom.createElement("div", "lh-metricfilter"), i = this.dom.createChildOf(o, "span", "lh-metricfilter__text");
                i.textContent = g.strings.showRelevantAudits;
                var a = [
                    {
                        acronym: "All",
                        id: "All"
                    }
                ].concat(_to_consumable_array(e)), l = g.getUniqueSuffix();
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _this, _loop = function() {
                        var s = _step.value;
                        var c = "metric-".concat(s.acronym, "-").concat(l), d = _this.dom.createChildOf(o, "input", "lh-metricfilter__radio");
                        d.type = "radio", d.name = "metricsfilter-".concat(l), d.id = c;
                        var p = _this.dom.createChildOf(o, "label", "lh-metricfilter__label");
                        p.htmlFor = c, p.title = "result" in s ? s.result.title : "", p.textContent = s.acronym || s.id, s.acronym === "All" && (d.checked = !0, p.classList.add("lh-metricfilter__label--active")), t.append(o), d.addEventListener("input", function(h) {
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = t.querySelectorAll("label.lh-metricfilter__label")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var v = _step.value;
                                    v.classList.toggle("lh-metricfilter__label--active", v.htmlFor === c);
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
                            t.classList.toggle("lh-category--filtered", s.acronym !== "All"), n(s.acronym || "All");
                            var u = t.querySelectorAll("div.lh-audit-group, details.lh-audit-group");
                            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                            try {
                                for(var _iterator1 = u[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                    var v1 = _step1.value;
                                    v1.hidden = !1;
                                    var b = Array.from(v1.querySelectorAll("div.lh-audit")), m = !!b.length && b.every(function(x) {
                                        return x.hidden;
                                    });
                                    v1.hidden = m;
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
                        });
                    };
                    for(var _iterator = a[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this = this, _loop();
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
        }
    ]);
    return ie;
}(G);
var ne = /*#__PURE__*/ function() {
    "use strict";
    function ne(e) {
        _class_call_check(this, ne);
        this._dom = e, this._opts = {};
    }
    _create_class(ne, [
        {
            key: "renderReport",
            value: function renderReport(e, t, n) {
                if (!this._dom.rootEl && t) {
                    console.warn("Please adopt the new report API in renderer/api.js.");
                    var i = t.closest(".lh-root");
                    i ? this._dom.rootEl = i : (t.classList.add("lh-root", "lh-vars"), this._dom.rootEl = t);
                } else this._dom.rootEl && t && (this._dom.rootEl = t);
                n && (this._opts = n), this._dom.setLighthouseChannel(e.configSettings.channel || "unknown");
                var o = E.prepareReportResult(e);
                return this._dom.rootEl.textContent = "", this._dom.rootEl.append(this._renderReport(o)), this._opts.occupyEntireViewport && this._dom.rootEl.classList.add("lh-max-viewport"), this._dom.rootEl;
            }
        },
        {
            key: "_renderReportTopbar",
            value: function _renderReportTopbar(e) {
                var t = this._dom.createComponent("topbar"), n = this._dom.find("a.lh-topbar__url", t);
                return n.textContent = e.finalDisplayedUrl, n.title = e.finalDisplayedUrl, this._dom.safelySetHref(n, e.finalDisplayedUrl), t;
            }
        },
        {
            key: "_renderReportHeader",
            value: function _renderReportHeader() {
                var e = this._dom.createComponent("heading"), t = this._dom.createComponent("scoresWrapper");
                return this._dom.find(".lh-scores-wrapper-placeholder", e).replaceWith(t), e;
            }
        },
        {
            key: "_renderReportFooter",
            value: function _renderReportFooter(e) {
                var t = this._dom.createComponent("footer");
                return this._renderMetaBlock(e, t), this._dom.find(".lh-footer__version_issue", t).textContent = g.strings.footerIssue, this._dom.find(".lh-footer__version", t).textContent = e.lighthouseVersion, t;
            }
        },
        {
            key: "_renderMetaBlock",
            value: function _renderMetaBlock(e, t) {
                var _e_environment_credits;
                var n = E.getEmulationDescriptions(e.configSettings || {}), o = e.userAgent.match(/(\w*Chrome\/[\d.]+)/), i = Array.isArray(o) ? o[1].replace("/", " ").replace("Chrome", "Chromium") : "Chromium", a = e.configSettings.channel, l = e.environment.benchmarkIndex.toFixed(0), s = (_e_environment_credits = e.environment.credits) === null || _e_environment_credits === void 0 ? void 0 : _e_environment_credits["axe-core"], c = [
                    "".concat(g.strings.runtimeSettingsBenchmark, ": ").concat(l),
                    "".concat(g.strings.runtimeSettingsCPUThrottling, ": ").concat(n.cpuThrottling)
                ];
                n.screenEmulation && c.push("".concat(g.strings.runtimeSettingsScreenEmulation, ": ").concat(n.screenEmulation)), s && c.push("".concat(g.strings.runtimeSettingsAxeVersion, ": ").concat(s));
                var d = g.strings.runtimeAnalysisWindow;
                e.gatherMode === "timespan" ? d = g.strings.runtimeAnalysisWindowTimespan : e.gatherMode === "snapshot" && (d = g.strings.runtimeAnalysisWindowSnapshot);
                var p = [
                    [
                        "date",
                        "Captured at ".concat(g.i18n.formatDateTime(e.fetchTime))
                    ],
                    [
                        "devices",
                        "".concat(n.deviceEmulation, " with Lighthouse ").concat(e.lighthouseVersion),
                        c.join("\n")
                    ],
                    [
                        "samples-one",
                        g.strings.runtimeSingleLoad,
                        g.strings.runtimeSingleLoadTooltip
                    ],
                    [
                        "stopwatch",
                        d
                    ],
                    [
                        "networkspeed",
                        "".concat(n.summary),
                        "".concat(g.strings.runtimeSettingsNetworkThrottling, ": ").concat(n.networkThrottling)
                    ],
                    [
                        "chrome",
                        "Using ".concat(i) + (a ? " with ".concat(a) : ""),
                        "".concat(g.strings.runtimeSettingsUANetwork, ': "').concat(e.environment.networkUserAgent, '"')
                    ]
                ], h = this._dom.find(".lh-meta__items", t);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = p[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _step_value = _sliced_to_array(_step.value, 3), u = _step_value[0], v = _step_value[1], b = _step_value[2];
                        var m = this._dom.createChildOf(h, "li", "lh-meta__item");
                        if (m.textContent = v, b) {
                            m.classList.add("lh-tooltip-boundary");
                            var x = this._dom.createChildOf(m, "div", "lh-tooltip");
                            x.textContent = b;
                        }
                        m.classList.add("lh-report-icon", "lh-report-icon--".concat(u));
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
            key: "_renderReportWarnings",
            value: function _renderReportWarnings(e) {
                var _this__dom_find;
                if (!e.runWarnings || e.runWarnings.length === 0) return this._dom.createElement("div");
                var t = this._dom.createComponent("warningsToplevel"), n = this._dom.find(".lh-warnings__msg", t);
                n.textContent = g.strings.toplevelWarningsMessage;
                var o = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.runWarnings[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var i = _step.value;
                        var a = this._dom.createElement("li");
                        a.append(this._dom.convertMarkdownLinkSnippets(i)), o.push(a);
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
                return (_this__dom_find = this._dom.find("ul", t)).append.apply(_this__dom_find, _to_consumable_array(o)), t;
            }
        },
        {
            key: "_renderScoreGauges",
            value: function _renderScoreGauges(e, t, n) {
                var _this = this;
                var o = [], i = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    var _this1, _loop = function() {
                        var a = _step.value;
                        var _this__opts_onPageAnchorRendered, _this__opts;
                        var s = (n[a.id] || t).renderCategoryScore(a, e.categoryGroups || {}, {
                            gatherMode: e.gatherMode
                        }), c = _this1._dom.find("a.lh-gauge__wrapper, a.lh-fraction__wrapper", s);
                        c && (_this1._dom.safelySetHref(c, "#".concat(a.id)), c.addEventListener("click", function(d) {
                            if (!c.matches('[href^="#"]')) return;
                            var p = c.getAttribute("href"), h = _this._dom.rootEl;
                            if (!p || !h) return;
                            var u = _this._dom.find(p, h);
                            d.preventDefault(), u.scrollIntoView();
                        }), (_this__opts_onPageAnchorRendered = (_this__opts = _this1._opts).onPageAnchorRendered) === null || _this__opts_onPageAnchorRendered === void 0 ? void 0 : _this__opts_onPageAnchorRendered.call(_this__opts, c)), E.isPluginCategory(a.id) ? i.push(s) : o.push(s);
                    };
                    for(var _iterator = Object.values(e.categories)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_this1 = this, _loop();
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
                return _to_consumable_array(o).concat(_to_consumable_array(i));
            }
        },
        {
            key: "_renderReport",
            value: function _renderReport(e) {
                g.apply({
                    providedStrings: e.i18n.rendererFormattedStrings,
                    i18n: new oe(e.configSettings.locale),
                    reportJson: e
                });
                var _e_fullPageScreenshot;
                var t = new te(this._dom, {
                    fullPageScreenshot: (_e_fullPageScreenshot = e.fullPageScreenshot) !== null && _e_fullPageScreenshot !== void 0 ? _e_fullPageScreenshot : void 0,
                    entities: e.entities
                }), n = new G(this._dom, t), o = {
                    performance: new ie(this._dom, t)
                }, i = this._dom.createElement("div");
                i.append(this._renderReportHeader());
                var a = this._dom.createElement("div", "lh-container"), l = this._dom.createElement("div", "lh-report");
                l.append(this._renderReportWarnings(e));
                var s;
                Object.keys(e.categories).length === 1 ? i.classList.add("lh-header--solo-category") : s = this._dom.createElement("div", "lh-scores-header");
                var d = this._dom.createElement("div");
                if (d.classList.add("lh-scorescale-wrap"), d.append(this._dom.createComponent("scorescale")), s) {
                    var _s, _b;
                    var v = this._dom.find(".lh-scores-container", i);
                    (_s = s).append.apply(_s, _to_consumable_array(this._renderScoreGauges(e, n, o))), v.append(s, d);
                    var b = this._dom.createElement("div", "lh-sticky-header");
                    (_b = b).append.apply(_b, _to_consumable_array(this._renderScoreGauges(e, n, o))), a.append(b);
                }
                var p = this._dom.createElement("div", "lh-categories");
                l.append(p);
                var h = {
                    gatherMode: e.gatherMode
                };
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = Object.values(e.categories)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var v1 = _step.value;
                        var b1 = o[v1.id] || n;
                        b1.dom.createChildOf(p, "div", "lh-category-wrapper").append(b1.render(v1, e.categoryGroups, h));
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
                n.injectFinalScreenshot(p, e.audits, d);
                var u = this._dom.createFragment();
                return this._opts.omitGlobalStyles || u.append(this._dom.createComponent("styles")), this._opts.omitTopbar || u.append(this._renderReportTopbar(e)), u.append(a), l.append(this._renderReportFooter(e)), a.append(i, l), e.fullPageScreenshot && V.installFullPageScreenshot(this._dom.rootEl, e.fullPageScreenshot.screenshot), u;
            }
        }
    ]);
    return ne;
}();
function K(r, e) {
    var t = r.rootEl;
    (typeof e === "undefined" ? "undefined" : _type_of(e)) > "u" ? t.classList.toggle("lh-dark") : t.classList.toggle("lh-dark", e);
}
var vt = (typeof btoa === "undefined" ? "undefined" : _type_of(btoa)) < "u" ? btoa : function(r) {
    return Buffer.from(r).toString("base64");
}, bt = (typeof atob === "undefined" ? "undefined" : _type_of(atob)) < "u" ? atob : function(r) {
    return Buffer.from(r, "base64").toString();
};
function _t(r, e) {
    return __t.apply(this, arguments);
}
function __t() {
    __t = _async_to_generator(function(r, e) {
        var _String, t, i, a, l, n, o, i1;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    t = new TextEncoder().encode(r);
                    if (!e.gzip) return [
                        3,
                        3
                    ];
                    if (!((typeof CompressionStream === "undefined" ? "undefined" : _type_of(CompressionStream)) < "u")) return [
                        3,
                        2
                    ];
                    i = new CompressionStream("gzip"), a = i.writable.getWriter();
                    a.write(t), a.close();
                    return [
                        4,
                        new Response(i.readable).arrayBuffer()
                    ];
                case 1:
                    l = _state.sent();
                    t = new Uint8Array(l);
                    return [
                        3,
                        3
                    ];
                case 2:
                    t = window.pako.gzip(r);
                    _state.label = 3;
                case 3:
                    n = "", o = 5e3;
                    for(i1 = 0; i1 < t.length; i1 += o)n += (_String = String).fromCharCode.apply(_String, _to_consumable_array(t.subarray(i1, i1 + o)));
                    return [
                        2,
                        vt(n)
                    ];
            }
        });
    });
    return __t.apply(this, arguments);
}
function wt(r, e) {
    var t = bt(r), n = Uint8Array.from(t, function(o) {
        return o.charCodeAt(0);
    });
    return e.gzip ? window.pako.ungzip(n, {
        to: "string"
    }) : new TextDecoder().decode(n);
}
var Ce = {
    toBase64: _t,
    fromBase64: wt
};
function ce() {
    var r = window.location.host.endsWith(".vercel.app"), e = new URLSearchParams(window.location.search).has("dev");
    return r ? "https://".concat(window.location.host, "/gh-pages") : e ? "http://localhost:7333" : "https://googlechrome.github.io/lighthouse";
}
function de(r) {
    var e = r.generatedTime, t = r.fetchTime || e;
    return "".concat(r.lighthouseVersion, "-").concat(r.finalDisplayedUrl, "-").concat(t);
}
function yt(r, e, t) {
    var n = new URL(e).origin;
    window.addEventListener("message", function i(a) {
        a.origin === n && o && a.data.opened && (o.postMessage(r, n), window.removeEventListener("message", i));
    });
    var o = window.open(e, t);
}
function Le(r, e, t) {
    return _Le.apply(this, arguments);
}
function _Le() {
    _Le = _async_to_generator(function(r, e, t) {
        var n, o;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    n = new URL(e), o = !!window.CompressionStream;
                    return [
                        4,
                        Ce.toBase64(JSON.stringify(r), {
                            gzip: o
                        })
                    ];
                case 1:
                    n.hash = _state.sent(), o && n.searchParams.set("gzip", "1"), window.open(n.toString(), t);
                    return [
                        2
                    ];
            }
        });
    });
    return _Le.apply(this, arguments);
}
function ze(r) {
    return _ze.apply(this, arguments);
}
function _ze() {
    _ze = _async_to_generator(function(r) {
        var e, t;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    e = "viewer-" + de(r), t = ce() + "/viewer/";
                    return [
                        4,
                        Le({
                            lhr: r
                        }, t, e)
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _ze.apply(this, arguments);
}
function Me(r) {
    return _Me.apply(this, arguments);
}
function _Me() {
    _Me = _async_to_generator(function(r) {
        var e, t;
        return _ts_generator(this, function(_state) {
            e = "viewer-" + de(r), t = ce() + "/viewer/";
            yt({
                lhr: r
            }, t, e);
            return [
                2
            ];
        });
    });
    return _Me.apply(this, arguments);
}
function Te(r) {
    if (!r.audits["script-treemap-data"].details) throw new Error("no script treemap data found");
    var t = {
        lhr: {
            mainDocumentUrl: r.mainDocumentUrl,
            finalUrl: r.finalUrl,
            finalDisplayedUrl: r.finalDisplayedUrl,
            audits: {
                "script-treemap-data": r.audits["script-treemap-data"]
            },
            configSettings: {
                locale: r.configSettings.locale
            }
        }
    }, n = ce() + "/treemap/", o = "treemap-" + de(r);
    Le(t, n, o);
}
var ae = /*#__PURE__*/ function() {
    "use strict";
    function ae(e) {
        _class_call_check(this, ae);
        this._dom = e, this._toggleEl, this._menuEl, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onToggleClick = this.onToggleClick.bind(this), this.onToggleKeydown = this.onToggleKeydown.bind(this), this.onMenuFocusOut = this.onMenuFocusOut.bind(this), this.onMenuKeydown = this.onMenuKeydown.bind(this), this._getNextMenuItem = this._getNextMenuItem.bind(this), this._getNextSelectableNode = this._getNextSelectableNode.bind(this), this._getPreviousMenuItem = this._getPreviousMenuItem.bind(this);
    }
    _create_class(ae, [
        {
            key: "setup",
            value: function setup(e) {
                this._toggleEl = this._dom.find(".lh-topbar button.lh-tools__button", this._dom.rootEl), this._toggleEl.addEventListener("click", this.onToggleClick), this._toggleEl.addEventListener("keydown", this.onToggleKeydown), this._menuEl = this._dom.find(".lh-topbar div.lh-tools__dropdown", this._dom.rootEl), this._menuEl.addEventListener("keydown", this.onMenuKeydown), this._menuEl.addEventListener("click", e);
            }
        },
        {
            key: "close",
            value: function close() {
                this._toggleEl.classList.remove("lh-active"), this._toggleEl.setAttribute("aria-expanded", "false"), this._menuEl.contains(this._dom.document().activeElement) && this._toggleEl.focus(), this._menuEl.removeEventListener("focusout", this.onMenuFocusOut), this._dom.document().removeEventListener("keydown", this.onDocumentKeyDown);
            }
        },
        {
            key: "open",
            value: function open(e) {
                this._toggleEl.classList.contains("lh-active") ? e.focus() : this._menuEl.addEventListener("transitionend", function() {
                    e.focus();
                }, {
                    once: !0
                }), this._toggleEl.classList.add("lh-active"), this._toggleEl.setAttribute("aria-expanded", "true"), this._menuEl.addEventListener("focusout", this.onMenuFocusOut), this._dom.document().addEventListener("keydown", this.onDocumentKeyDown);
            }
        },
        {
            key: "onToggleClick",
            value: function onToggleClick(e) {
                e.preventDefault(), e.stopImmediatePropagation(), this._toggleEl.classList.contains("lh-active") ? this.close() : this.open(this._getNextMenuItem());
            }
        },
        {
            key: "onToggleKeydown",
            value: function onToggleKeydown(e) {
                switch(e.code){
                    case "ArrowUp":
                        e.preventDefault(), this.open(this._getPreviousMenuItem());
                        break;
                    case "ArrowDown":
                    case "Enter":
                    case " ":
                        e.preventDefault(), this.open(this._getNextMenuItem());
                        break;
                    default:
                }
            }
        },
        {
            key: "onMenuKeydown",
            value: function onMenuKeydown(e) {
                var t = e.target;
                switch(e.code){
                    case "ArrowUp":
                        e.preventDefault(), this._getPreviousMenuItem(t).focus();
                        break;
                    case "ArrowDown":
                        e.preventDefault(), this._getNextMenuItem(t).focus();
                        break;
                    case "Home":
                        e.preventDefault(), this._getNextMenuItem().focus();
                        break;
                    case "End":
                        e.preventDefault(), this._getPreviousMenuItem().focus();
                        break;
                    default:
                }
            }
        },
        {
            key: "onDocumentKeyDown",
            value: function onDocumentKeyDown(e) {
                e.keyCode === 27 && this.close();
            }
        },
        {
            key: "onMenuFocusOut",
            value: function onMenuFocusOut(e) {
                var t = e.relatedTarget;
                this._menuEl.contains(t) || this.close();
            }
        },
        {
            key: "_getNextSelectableNode",
            value: function _getNextSelectableNode(e, t) {
                var n = e.filter(function(i) {
                    return !(!_instanceof(i, HTMLElement) || i.hasAttribute("disabled") || window.getComputedStyle(i).display === "none");
                }), o = t ? n.indexOf(t) + 1 : 0;
                return o >= n.length && (o = 0), n[o];
            }
        },
        {
            key: "_getNextMenuItem",
            value: function _getNextMenuItem(e) {
                var t = Array.from(this._menuEl.childNodes);
                return this._getNextSelectableNode(t, e);
            }
        },
        {
            key: "_getPreviousMenuItem",
            value: function _getPreviousMenuItem(e) {
                var t = Array.from(this._menuEl.childNodes).reverse();
                return this._getNextSelectableNode(t, e);
            }
        }
    ]);
    return ae;
}();
var le = /*#__PURE__*/ function() {
    "use strict";
    function le(e, t) {
        _class_call_check(this, le);
        this.lhr, this._reportUIFeatures = e, this._dom = t, this._dropDownMenu = new ae(this._dom), this._copyAttempt = !1, this.topbarEl, this.categoriesEl, this.stickyHeaderEl, this.highlightEl, this.onDropDownMenuClick = this.onDropDownMenuClick.bind(this), this.onKeyUp = this.onKeyUp.bind(this), this.onCopy = this.onCopy.bind(this), this.collapseAllDetails = this.collapseAllDetails.bind(this);
    }
    _create_class(le, [
        {
            key: "enable",
            value: function enable(e) {
                var _this = this;
                this.lhr = e, this._dom.rootEl.addEventListener("keyup", this.onKeyUp), this._dom.document().addEventListener("copy", this.onCopy), this._dropDownMenu.setup(this.onDropDownMenuClick), this._setUpCollapseDetailsAfterPrinting(), this._dom.find(".lh-topbar__logo", this._dom.rootEl).addEventListener("click", function() {
                    return K(_this._dom);
                }), this._setupStickyHeader();
            }
        },
        {
            key: "onDropDownMenuClick",
            value: function onDropDownMenuClick(e) {
                e.preventDefault();
                var t = e.target;
                if (!(!t || !t.hasAttribute("data-action"))) {
                    switch(t.getAttribute("data-action")){
                        case "copy":
                            this.onCopyButtonClick();
                            break;
                        case "print-summary":
                            this.collapseAllDetails(), this._print();
                            break;
                        case "print-expanded":
                            this.expandAllDetails(), this._print();
                            break;
                        case "save-json":
                            {
                                var n = JSON.stringify(this.lhr, null, 2);
                                this._reportUIFeatures._saveFile(new Blob([
                                    n
                                ], {
                                    type: "application/json"
                                }));
                                break;
                            }
                        case "save-html":
                            {
                                var n1 = this._reportUIFeatures.getReportHtml();
                                try {
                                    this._reportUIFeatures._saveFile(new Blob([
                                        n1
                                    ], {
                                        type: "text/html"
                                    }));
                                } catch (o) {
                                    this._dom.fireEventOn("lh-log", this._dom.document(), {
                                        cmd: "error",
                                        msg: "Could not export as HTML. " + o.message
                                    });
                                }
                                break;
                            }
                        case "open-viewer":
                            {
                                this._dom.isDevTools() ? ze(this.lhr) : Me(this.lhr);
                                break;
                            }
                        case "save-gist":
                            {
                                this._reportUIFeatures.saveAsGist();
                                break;
                            }
                        case "toggle-dark":
                            {
                                K(this._dom);
                                break;
                            }
                        case "view-unthrottled-trace":
                            var _this__reportUIFeatures__opts_onViewTrace, _this__reportUIFeatures__opts;
                            (_this__reportUIFeatures__opts_onViewTrace = (_this__reportUIFeatures__opts = this._reportUIFeatures._opts).onViewTrace) === null || _this__reportUIFeatures__opts_onViewTrace === void 0 ? void 0 : _this__reportUIFeatures__opts_onViewTrace.call(_this__reportUIFeatures__opts);
                    }
                    this._dropDownMenu.close();
                }
            }
        },
        {
            key: "onCopy",
            value: function onCopy(e) {
                this._copyAttempt && e.clipboardData && (e.preventDefault(), e.clipboardData.setData("text/plain", JSON.stringify(this.lhr, null, 2)), this._dom.fireEventOn("lh-log", this._dom.document(), {
                    cmd: "log",
                    msg: "Report JSON copied to clipboard"
                })), this._copyAttempt = !1;
            }
        },
        {
            key: "onCopyButtonClick",
            value: function onCopyButtonClick() {
                this._dom.fireEventOn("lh-analytics", this._dom.document(), {
                    cmd: "send",
                    fields: {
                        hitType: "event",
                        eventCategory: "report",
                        eventAction: "copy"
                    }
                });
                try {
                    this._dom.document().queryCommandSupported("copy") && (this._copyAttempt = !0, this._dom.document().execCommand("copy") || (this._copyAttempt = !1, this._dom.fireEventOn("lh-log", this._dom.document(), {
                        cmd: "warn",
                        msg: "Your browser does not support copy to clipboard."
                    })));
                } catch (e) {
                    this._copyAttempt = !1, this._dom.fireEventOn("lh-log", this._dom.document(), {
                        cmd: "log",
                        msg: e.message
                    });
                }
            }
        },
        {
            key: "onKeyUp",
            value: function onKeyUp(e) {
                (e.ctrlKey || e.metaKey) && e.keyCode === 80 && this._dropDownMenu.close();
            }
        },
        {
            key: "expandAllDetails",
            value: function expandAllDetails() {
                this._dom.findAll(".lh-categories details", this._dom.rootEl).map(function(t) {
                    return t.open = !0;
                });
            }
        },
        {
            key: "collapseAllDetails",
            value: function collapseAllDetails() {
                this._dom.findAll(".lh-categories details", this._dom.rootEl).map(function(t) {
                    return t.open = !1;
                });
            }
        },
        {
            key: "_print",
            value: function _print() {
                this._reportUIFeatures._opts.onPrintOverride ? this._reportUIFeatures._opts.onPrintOverride(this._dom.rootEl) : self.print();
            }
        },
        {
            key: "resetUIState",
            value: function resetUIState() {
                this._dropDownMenu.close();
            }
        },
        {
            key: "_getScrollParent",
            value: function _getScrollParent(e) {
                var _window_getComputedStyle = window.getComputedStyle(e), t = _window_getComputedStyle.overflowY;
                return t !== "visible" && t !== "hidden" ? e : e.parentElement ? this._getScrollParent(e.parentElement) : document;
            }
        },
        {
            key: "_setUpCollapseDetailsAfterPrinting",
            value: function _setUpCollapseDetailsAfterPrinting() {
                var _this = this;
                "onbeforeprint" in self ? self.addEventListener("afterprint", this.collapseAllDetails) : self.matchMedia("print").addListener(function(t) {
                    t.matches ? _this.expandAllDetails() : _this.collapseAllDetails();
                });
            }
        },
        {
            key: "_setupStickyHeader",
            value: function _setupStickyHeader() {
                var _this = this;
                this.topbarEl = this._dom.find("div.lh-topbar", this._dom.rootEl), this.categoriesEl = this._dom.find("div.lh-categories", this._dom.rootEl), window.requestAnimationFrame(function() {
                    return window.requestAnimationFrame(function() {
                        try {
                            _this.stickyHeaderEl = _this._dom.find("div.lh-sticky-header", _this._dom.rootEl);
                        } catch (e) {
                            return;
                        }
                        _this.highlightEl = _this._dom.createChildOf(_this.stickyHeaderEl, "div", "lh-highlighter");
                        var e = _this._getScrollParent(_this._dom.find(".lh-container", _this._dom.rootEl));
                        e.addEventListener("scroll", function() {
                            return _this._updateStickyHeader();
                        });
                        var t = _instanceof(e, window.Document) ? document.documentElement : e;
                        new window.ResizeObserver(function() {
                            return _this._updateStickyHeader();
                        }).observe(t);
                    });
                });
            }
        },
        {
            key: "_updateStickyHeader",
            value: function _updateStickyHeader() {
                if (!this.stickyHeaderEl) return;
                var e = this.topbarEl.getBoundingClientRect().bottom, t = this.categoriesEl.getBoundingClientRect().top, n = e >= t, i = Array.from(this._dom.rootEl.querySelectorAll(".lh-category")).filter(function(p) {
                    return p.getBoundingClientRect().top - window.innerHeight / 2 < 0;
                }), a = i.length > 0 ? i.length - 1 : 0, l = this.stickyHeaderEl.querySelectorAll(".lh-gauge__wrapper, .lh-fraction__wrapper"), s = l[a], c = l[0].getBoundingClientRect().left, d = s.getBoundingClientRect().left - c;
                this.highlightEl.style.transform = "translate(".concat(d, "px)"), this.stickyHeaderEl.classList.toggle("lh-sticky-header--visible", n);
            }
        }
    ]);
    return le;
}();
function xt(r, e) {
    var t = e ? new Date(e) : new Date, n = t.toLocaleTimeString("en-US", {
        hour12: !1
    }), o = t.toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).split("/");
    o.unshift(o.pop());
    var i = o.join("-");
    return "".concat(r, "_").concat(i, "_").concat(n).replace(/[/?<>\\:*|"]/g, "-");
}
function Fe(r) {
    var e = new URL(r.finalDisplayedUrl).hostname;
    return xt(e, r.fetchTime);
}
function Et(r) {
    return Array.from(r.tBodies[0].rows);
}
var re = /*#__PURE__*/ function() {
    "use strict";
    function re(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        _class_call_check(this, re);
        this.json, this._dom = e, this._opts = t, this._topbar = t.omitTopbar ? null : new le(this, e), this.onMediaQueryChange = this.onMediaQueryChange.bind(this);
    }
    _create_class(re, [
        {
            key: "initFeatures",
            value: function initFeatures(e) {
                var _this = this;
                this.json = e, this._fullPageScreenshot = k.getFullPageScreenshot(e), this._topbar && (this._topbar.enable(e), this._topbar.resetUIState()), this._setupMediaQueryListeners(), this._setupThirdPartyFilter(), this._setupElementScreenshotOverlay(this._dom.rootEl);
                var t = this._dom.isDevTools() || this._opts.disableDarkMode || this._opts.disableAutoDarkModeAndFireworks;
                !t && window.matchMedia("(prefers-color-scheme: dark)").matches && K(this._dom, !0);
                var o = [
                    "performance",
                    "accessibility",
                    "best-practices",
                    "seo"
                ].every(function(s) {
                    var c = e.categories[s];
                    return c && c.score === 1;
                }), i = this._opts.disableFireworks || this._opts.disableAutoDarkModeAndFireworks;
                if (o && !i && (this._enableFireworks(), t || K(this._dom, !0)), e.categories.performance && e.categories.performance.auditRefs.some(function(s) {
                    return !!(s.group === "metrics" && e.audits[s.id].errorMessage);
                })) {
                    var s = this._dom.find("input.lh-metrics-toggle__input", this._dom.rootEl);
                    s.checked = !0;
                }
                this.json.audits["script-treemap-data"] && this.json.audits["script-treemap-data"].details && this.addButton({
                    text: g.strings.viewTreemapLabel,
                    icon: "treemap",
                    onClick: function() {
                        return Te(_this.json);
                    }
                }), this._opts.onViewTrace && (e.configSettings.throttlingMethod === "simulate" ? this._dom.find('a[data-action="view-unthrottled-trace"]', this._dom.rootEl).classList.remove("lh-hidden") : this.addButton({
                    text: g.strings.viewTraceLabel,
                    onClick: function() {
                        var _this__opts_onViewTrace, _this__opts;
                        return (_this__opts_onViewTrace = (_this__opts = _this._opts).onViewTrace) === null || _this__opts_onViewTrace === void 0 ? void 0 : _this__opts_onViewTrace.call(_this__opts);
                    }
                })), this._opts.getStandaloneReportHTML && this._dom.find('a[data-action="save-html"]', this._dom.rootEl).classList.remove("lh-hidden");
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this._dom.findAll("[data-i18n]", this._dom.rootEl)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var s1 = _step.value;
                        var d = s1.getAttribute("data-i18n");
                        s1.textContent = g.strings[d];
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
            key: "addButton",
            value: function addButton(e) {
                var t = this._dom.rootEl.querySelector(".lh-audit-group--metrics");
                if (!t) return;
                var n = t.querySelector(".lh-buttons");
                n || (n = this._dom.createChildOf(t, "div", "lh-buttons"));
                var o = [
                    "lh-button"
                ];
                e.icon && (o.push("lh-report-icon"), o.push("lh-report-icon--".concat(e.icon)));
                var i = this._dom.createChildOf(n, "button", o.join(" "));
                return i.textContent = e.text, i.addEventListener("click", e.onClick), i;
            }
        },
        {
            key: "resetUIState",
            value: function resetUIState() {
                this._topbar && this._topbar.resetUIState();
            }
        },
        {
            key: "getReportHtml",
            value: function getReportHtml() {
                if (!this._opts.getStandaloneReportHTML) throw new Error("`getStandaloneReportHTML` is not set");
                return this.resetUIState(), this._opts.getStandaloneReportHTML();
            }
        },
        {
            key: "saveAsGist",
            value: function saveAsGist() {
                throw new Error("Cannot save as gist from base report");
            }
        },
        {
            key: "_enableFireworks",
            value: function _enableFireworks() {
                this._dom.find(".lh-scores-container", this._dom.rootEl).classList.add("lh-score100");
            }
        },
        {
            key: "_setupMediaQueryListeners",
            value: function _setupMediaQueryListeners() {
                var e = self.matchMedia("(max-width: 500px)");
                e.addListener(this.onMediaQueryChange), this.onMediaQueryChange(e);
            }
        },
        {
            key: "_resetUIState",
            value: function _resetUIState() {
                this._topbar && this._topbar.resetUIState();
            }
        },
        {
            key: "onMediaQueryChange",
            value: function onMediaQueryChange(e) {
                this._dom.rootEl.classList.toggle("lh-narrow", e.matches);
            }
        },
        {
            key: "_setupThirdPartyFilter",
            value: function _setupThirdPartyFilter() {
                var _this = this;
                var e = [
                    "uses-rel-preconnect",
                    "third-party-facades"
                ], t = [
                    "legacy-javascript"
                ];
                Array.from(this._dom.rootEl.querySelectorAll("table.lh-table")).filter(function(i) {
                    return i.querySelector("td.lh-table-column--url, td.lh-table-column--source-location");
                }).filter(function(i) {
                    var a = i.closest(".lh-audit");
                    if (!a) throw new Error(".lh-table not within audit");
                    return !e.includes(a.id);
                }).forEach(function(i) {
                    var a = Et(i), l = a.filter(function(m) {
                        return !m.classList.contains("lh-sub-item-row");
                    }), s = _this._getThirdPartyRows(l, k.getFinalDisplayedUrl(_this.json)), c = a.some(function(m) {
                        return m.classList.contains("lh-row--even");
                    }), d = _this._dom.createComponent("3pFilter"), p = _this._dom.find("input", d);
                    p.addEventListener("change", function(m) {
                        var x = _instanceof(m.target, HTMLInputElement) && !m.target.checked, T = !0, L = l[0];
                        for(; L;){
                            var F = x && s.includes(L);
                            do L.classList.toggle("lh-row--hidden", F), c && (L.classList.toggle("lh-row--even", !F && T), L.classList.toggle("lh-row--odd", !F && !T)), L = L.nextElementSibling;
                            while (L && L.classList.contains("lh-sub-item-row"));
                            F || (T = !T);
                        }
                    });
                    var h = s.filter(function(m) {
                        return !m.classList.contains("lh-row--group");
                    }).length;
                    _this._dom.find(".lh-3p-filter-count", d).textContent = "".concat(h), _this._dom.find(".lh-3p-ui-string", d).textContent = g.strings.thirdPartyResourcesLabel;
                    var u = s.length === l.length, v = !s.length;
                    if ((u || v) && (_this._dom.find("div.lh-3p-filter", d).hidden = !0), !i.parentNode) return;
                    i.parentNode.insertBefore(d, i);
                    var b = i.closest(".lh-audit");
                    if (!b) throw new Error(".lh-table not within audit");
                    t.includes(b.id) && !u && p.click();
                });
            }
        },
        {
            key: "_setupElementScreenshotOverlay",
            value: function _setupElementScreenshotOverlay(e) {
                this._fullPageScreenshot && V.installOverlayFeature({
                    dom: this._dom,
                    rootEl: e,
                    overlayContainerEl: e,
                    fullPageScreenshot: this._fullPageScreenshot
                });
            }
        },
        {
            key: "_getThirdPartyRows",
            value: function _getThirdPartyRows(e, t) {
                var _this_json_entities_find, _this_json_entities;
                var n = k.getEntityFromUrl(t, this.json.entities), o = (_this_json_entities = this.json.entities) === null || _this_json_entities === void 0 ? void 0 : (_this_json_entities_find = _this_json_entities.find(function(a) {
                    return a.isFirstParty === !0;
                })) === null || _this_json_entities_find === void 0 ? void 0 : _this_json_entities_find.name, i = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var a = _step.value;
                        if (o) {
                            if (!a.dataset.entity || a.dataset.entity === o) continue;
                        } else {
                            var l = a.querySelector("div.lh-text__url");
                            if (!l) continue;
                            var s = l.dataset.url;
                            if (!s || !(k.getEntityFromUrl(s, this.json.entities) !== n)) continue;
                        }
                        i.push(a);
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
                return i;
            }
        },
        {
            key: "_saveFile",
            value: function _saveFile(e) {
                var t = e.type.match("json") ? ".json" : ".html", n = Fe({
                    finalDisplayedUrl: k.getFinalDisplayedUrl(this.json),
                    fetchTime: this.json.fetchTime
                }) + t;
                this._opts.onSaveFileOverride ? this._opts.onSaveFileOverride(e, n) : this._dom.saveFile(e, n);
            }
        }
    ]);
    return re;
}();
function kt(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var t = document.createElement("article");
    t.classList.add("lh-root", "lh-vars");
    var n = new Y(t.ownerDocument, t);
    return new ne(n).renderReport(r, t, e), new re(n, e).initFeatures(r), t;
}
function St(r, e) {
    return {
        lhr: r,
        missingIcuMessageIds: []
    };
}
function At(r, e) {}
function Ct(r) {
    return !1;
}
var Lt = {
    registerLocaleData: At,
    hasLocale: Ct
};
 /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */  /**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */  /**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */  /**
 * @license Copyright 2023 The Lighthouse Authors. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/  /**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */  /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 *
 * Dummy text for ensuring report robustness: <\/script> pre$`post %%LIGHTHOUSE_JSON%%
 * (this is handled by terser)
 */  /**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */ 


}),

}]);