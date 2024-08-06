"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_codemirror_next_chunk_markdown_js"], {
"./third_party/codemirror.next/chunk/markdown.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  commonmarkLanguage: function() { return ct; },
  deleteMarkupBackward: function() { return Lt; },
  insertNewlineContinueMarkup: function() { return xt; },
  markdown: function() { return wt; },
  markdownKeymap: function() { return St; },
  markdownLanguage: function() { return ut; }
});
/* harmony import */var _codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.js */ "./third_party/codemirror.next/chunk/codemirror.js");
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

var B = /*#__PURE__*/ function() {
    "use strict";
    function B(e, n, r, s, i, o, a) {
        _class_call_check(this, B);
        this.type = e, this.value = n, this.from = r, this.hash = s, this.end = i, this.children = o, this.positions = a, this.hashProp = [
            [
                _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.l.contextHash,
                s
            ]
        ];
    }
    _create_class(B, [
        {
            key: "addChild",
            value: function addChild(e, n) {
                e.prop(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.l.contextHash) != this.hash && (e = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.n(e.type, e.children, e.positions, e.length, this.hashProp)), this.children.push(e), this.positions.push(n);
            }
        },
        {
            key: "toTree",
            value: function toTree(t) {
                var _this = this;
                var _$n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.end;
                var _$r = this.children.length - 1;
                return _$r >= 0 && (_$n = Math.max(_$n, this.positions[_$r] + this.children[_$r].length + this.from)), new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.n(t.types[this.type], this.children, this.positions, _$n - this.from).balance({
                    makeTree: function(t, n, r) {
                        return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.n(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.N.none, t, n, r, _this.hashProp);
                    }
                });
            }
        }
    ], [
        {
            key: "create",
            value: function create(e, t, n, r, s) {
                return new B(e, t, n, r + (r << 8) + e + (t << 4) | 0, s, [], []);
            }
        }
    ]);
    return B;
}();
var E;
!function(e) {
    e[e.Document = 1] = "Document", e[e.CodeBlock = 2] = "CodeBlock", e[e.FencedCode = 3] = "FencedCode", e[e.Blockquote = 4] = "Blockquote", e[e.HorizontalRule = 5] = "HorizontalRule", e[e.BulletList = 6] = "BulletList", e[e.OrderedList = 7] = "OrderedList", e[e.ListItem = 8] = "ListItem", e[e.ATXHeading1 = 9] = "ATXHeading1", e[e.ATXHeading2 = 10] = "ATXHeading2", e[e.ATXHeading3 = 11] = "ATXHeading3", e[e.ATXHeading4 = 12] = "ATXHeading4", e[e.ATXHeading5 = 13] = "ATXHeading5", e[e.ATXHeading6 = 14] = "ATXHeading6", e[e.SetextHeading1 = 15] = "SetextHeading1", e[e.SetextHeading2 = 16] = "SetextHeading2", e[e.HTMLBlock = 17] = "HTMLBlock", e[e.LinkReference = 18] = "LinkReference", e[e.Paragraph = 19] = "Paragraph", e[e.CommentBlock = 20] = "CommentBlock", e[e.ProcessingInstructionBlock = 21] = "ProcessingInstructionBlock", e[e.Escape = 22] = "Escape", e[e.Entity = 23] = "Entity", e[e.HardBreak = 24] = "HardBreak", e[e.Emphasis = 25] = "Emphasis", e[e.StrongEmphasis = 26] = "StrongEmphasis", e[e.Link = 27] = "Link", e[e.Image = 28] = "Image", e[e.InlineCode = 29] = "InlineCode", e[e.HTMLTag = 30] = "HTMLTag", e[e.Comment = 31] = "Comment", e[e.ProcessingInstruction = 32] = "ProcessingInstruction", e[e.Autolink = 33] = "Autolink", e[e.HeaderMark = 34] = "HeaderMark", e[e.QuoteMark = 35] = "QuoteMark", e[e.ListMark = 36] = "ListMark", e[e.LinkMark = 37] = "LinkMark", e[e.EmphasisMark = 38] = "EmphasisMark", e[e.CodeMark = 39] = "CodeMark", e[e.CodeText = 40] = "CodeText", e[e.CodeInfo = 41] = "CodeInfo", e[e.LinkTitle = 42] = "LinkTitle", e[e.LinkLabel = 43] = "LinkLabel", e[e.URL = 44] = "URL";
}(E || (E = {}));
var M = function M(e, t) {
    "use strict";
    _class_call_check(this, M);
    this.start = e, this.content = t, this.marks = [], this.parsers = [];
};
var H = /*#__PURE__*/ function() {
    "use strict";
    function H() {
        _class_call_check(this, H);
        this.text = "", this.baseIndent = 0, this.basePos = 0, this.depth = 0, this.markers = [], this.pos = 0, this.indent = 0, this.next = -1;
    }
    _create_class(H, [
        {
            key: "forward",
            value: function forward() {
                this.basePos > this.pos && this.forwardInner();
            }
        },
        {
            key: "forwardInner",
            value: function forwardInner() {
                var _$e = this.skipSpace(this.basePos);
                this.indent = this.countIndent(_$e, this.pos, this.indent), this.pos = _$e, this.next = _$e == this.text.length ? -1 : this.text.charCodeAt(_$e);
            }
        },
        {
            key: "skipSpace",
            value: function skipSpace(e) {
                return O(this.text, e);
            }
        },
        {
            key: "reset",
            value: function reset(e) {
                for(this.text = e, this.baseIndent = this.basePos = this.pos = this.indent = 0, this.forwardInner(), this.depth = 1; this.markers.length;)this.markers.pop();
            }
        },
        {
            key: "moveBase",
            value: function moveBase(e) {
                this.basePos = e, this.baseIndent = this.countIndent(e, this.pos, this.indent);
            }
        },
        {
            key: "moveBaseColumn",
            value: function moveBaseColumn(e) {
                this.baseIndent = e, this.basePos = this.findColumn(e);
            }
        },
        {
            key: "addMarker",
            value: function addMarker(e) {
                this.markers.push(e);
            }
        },
        {
            key: "countIndent",
            value: function countIndent(e) {
                var _$t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, _$n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                for(var _$r = _$t; _$r < e; _$r++)_$n += 9 == this.text.charCodeAt(_$r) ? 4 - _$n % 4 : 1;
                return _$n;
            }
        },
        {
            key: "findColumn",
            value: function findColumn(e) {
                var _$t = 0;
                for(var _$n = 0; _$t < this.text.length && _$n < e; _$t++)_$n += 9 == this.text.charCodeAt(_$t) ? 4 - _$n % 4 : 1;
                return _$t;
            }
        },
        {
            key: "scrub",
            value: function scrub() {
                if (!this.baseIndent) return this.text;
                var _$e = "";
                for(var _$t = 0; _$t < this.basePos; _$t++)_$e += " ";
                return _$e + this.text.slice(this.basePos);
            }
        }
    ]);
    return H;
}();
function v(e, t, n) {
    if (n.pos == n.text.length || e != t.block && n.indent >= t.stack[n.depth + 1].value + n.baseIndent) return !0;
    if (n.indent >= n.baseIndent + 4) return !1;
    var _$r = (e.type == E.OrderedList ? q : F)(n, t, !1);
    return _$r > 0 && (e.type != E.BulletList || D(n, t, !1) < 0) && n.text.charCodeAt(n.pos + _$r - 1) == e.value;
}
var _obj;
var P = (_obj = {}, _define_property(_obj, E.Blockquote, function(e, t, n) {
    return 62 == n.next && (n.markers.push(ge(E.QuoteMark, t.lineStart + n.pos, t.lineStart + n.pos + 1)), n.moveBase(n.pos + (N(n.text.charCodeAt(n.pos + 1)) ? 2 : 1)), e.end = t.lineStart + n.text.length, !0);
}), _define_property(_obj, E.ListItem, function(e, t, n) {
    return !(n.indent < n.baseIndent + e.value && n.next > -1) && (n.moveBaseColumn(n.baseIndent + e.value), !0);
}), _define_property(_obj, E.OrderedList, v), _define_property(_obj, E.BulletList, v), _define_property(_obj, E.Document, function() {
    return !0;
}), _obj);
function N(e) {
    return 32 == e || 9 == e || 10 == e || 13 == e;
}
function O(e) {
    var _$t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    for(; _$t < e.length && N(e.charCodeAt(_$t));)_$t++;
    return _$t;
}
function R(e, t, n) {
    for(; t > n && N(e.charCodeAt(t - 1));)t--;
    return t;
}
function X(e) {
    if (96 != e.next && 126 != e.next) return -1;
    var _$t = e.pos + 1;
    for(; _$t < e.text.length && e.text.charCodeAt(_$t) == e.next;)_$t++;
    if (_$t < e.pos + 3) return -1;
    if (96 == e.next) {
        for(var _$n = _$t; _$n < e.text.length; _$n++)if (96 == e.text.charCodeAt(_$n)) return -1;
    }
    return _$t;
}
function z(e) {
    return 62 != e.next ? -1 : 32 == e.text.charCodeAt(e.pos + 1) ? 2 : 1;
}
function D(e, t, n) {
    if (42 != e.next && 45 != e.next && 95 != e.next) return -1;
    var _$r = 1;
    for(var _$t = e.pos + 1; _$t < e.text.length; _$t++){
        var _$n = e.text.charCodeAt(_$t);
        if (_$n == e.next) _$r++;
        else if (!N(_$n)) return -1;
    }
    return n && 45 == e.next && U(e) > -1 && e.depth == t.stack.length || _$r < 3 ? -1 : 1;
}
function $(e, t) {
    for(var _$n = e.stack.length - 1; _$n >= 0; _$n--)if (e.stack[_$n].type == t) return !0;
    return !1;
}
function F(e, t, n) {
    return 45 != e.next && 43 != e.next && 42 != e.next || e.pos != e.text.length - 1 && !N(e.text.charCodeAt(e.pos + 1)) || !(!n || $(t, E.BulletList) || e.skipSpace(e.pos + 2) < e.text.length) ? -1 : 1;
}
function q(e, t, n) {
    var _$r = e.pos, _$s = e.next;
    for(; _$s >= 48 && _$s <= 57;){
        if (_$r++, _$r == e.text.length) return -1;
        _$s = e.text.charCodeAt(_$r);
    }
    return _$r == e.pos || _$r > e.pos + 9 || 46 != _$s && 41 != _$s || _$r < e.text.length - 1 && !N(e.text.charCodeAt(_$r + 1)) || n && !$(t, E.OrderedList) && (e.skipSpace(_$r + 1) == e.text.length || _$r > e.pos + 1 || 49 != e.next) ? -1 : _$r + 1 - e.pos;
}
function j(e) {
    if (35 != e.next) return -1;
    var _$t = e.pos + 1;
    for(; _$t < e.text.length && 35 == e.text.charCodeAt(_$t);)_$t++;
    if (_$t < e.text.length && 32 != e.text.charCodeAt(_$t)) return -1;
    var _$n = _$t - e.pos;
    return _$n > 6 ? -1 : _$n;
}
function U(e) {
    if (45 != e.next && 61 != e.next || e.indent >= e.baseIndent + 4) return -1;
    var _$t = e.pos + 1;
    for(; _$t < e.text.length && e.text.charCodeAt(_$t) == e.next;)_$t++;
    var _$n = _$t;
    for(; _$t < e.text.length && N(e.text.charCodeAt(_$t));)_$t++;
    return _$t == e.text.length ? _$n : -1;
}
var _ = /^[ \t]*$/, Q = /-->/, Z = /\?>/, G = [
    [
        /^<(?:script|pre|style)(?:\s|>|$)/i,
        /<\/(?:script|pre|style)>/i
    ],
    [
        /^\s*<!--/,
        Q
    ],
    [
        /^\s*<\?/,
        Z
    ],
    [
        /^\s*<![A-Z]/,
        />/
    ],
    [
        /^\s*<!\[CDATA\[/,
        /\]\]>/
    ],
    [
        /^\s*<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?:\s|\/?>|$)/i,
        _
    ],
    [
        /^\s*(?:<\/[a-z][\w-]*\s*>|<[a-z][\w-]*(\s+[a-z:_][\w-.]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*>)\s*$/i,
        _
    ]
];
function V(e, t, n) {
    if (60 != e.next) return -1;
    var _$r = e.text.slice(e.pos);
    for(var _$e = 0, _$t = G.length - (n ? 1 : 0); _$e < _$t; _$e++)if (G[_$e][0].test(_$r)) return _$e;
    return -1;
}
function K(e, t) {
    var _$n = e.countIndent(t, e.pos, e.indent), _$r = e.countIndent(e.skipSpace(t), t, _$n);
    return _$r >= _$n + 5 ? _$n + 1 : _$r;
}
function J(e, t, n) {
    var _$r = e.length - 1;
    _$r >= 0 && e[_$r].to == t && e[_$r].type == E.CodeText ? e[_$r].to = n : e.push(ge(E.CodeText, t, n));
}
var W = {
    LinkReference: void 0,
    IndentedCode: function IndentedCode(e, t) {
        var _$n = t.baseIndent + 4;
        if (t.indent < _$n) return !1;
        var _$r = t.findColumn(_$n), _$s = e.lineStart + _$r, _$i = e.lineStart + t.text.length, o = [], a = [];
        for(J(o, _$s, _$i); e.nextLine() && t.depth >= e.stack.length;)if (t.pos == t.text.length) {
            J(a, e.lineStart - 1, e.lineStart);
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = t.markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _$e = _step.value;
                    a.push(_$e);
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
        } else {
            if (t.indent < _$n) break;
            {
                if (a.length) {
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = a[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var _$e1 = _step1.value;
                            _$e1.type == E.CodeText ? J(o, _$e1.from, _$e1.to) : o.push(_$e1);
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
                    a = [];
                }
                J(o, e.lineStart - 1, e.lineStart);
                var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                try {
                    for(var _iterator2 = t.markers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var _$e2 = _step2.value;
                        o.push(_$e2);
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
                _$i = e.lineStart + t.text.length;
                var _$n1 = e.lineStart + t.findColumn(t.baseIndent + 4);
                _$n1 < _$i && J(o, _$n1, _$i);
            }
        }
        return a.length && (a = a.filter(function(e) {
            return e.type != E.CodeText;
        }), a.length && (t.markers = a.concat(t.markers))), e.addNode(e.buffer.writeElements(o, -_$s).finish(E.CodeBlock, _$i - _$s), _$s), !0;
    },
    FencedCode: function FencedCode(e, t) {
        var _$n = X(t);
        if (_$n < 0) return !1;
        var _$r = e.lineStart + t.pos, _$s = t.next, _$i = _$n - t.pos, o = t.skipSpace(_$n), a = R(t.text, t.text.length, o), l = [
            ge(E.CodeMark, _$r, _$r + _$i)
        ];
        o < a && l.push(ge(E.CodeInfo, e.lineStart + o, e.lineStart + a));
        for(var _$n1 = !0; e.nextLine() && t.depth >= e.stack.length; _$n1 = !1){
            var _$r1 = t.pos;
            if (t.indent - t.baseIndent < 4) for(; _$r1 < t.text.length && t.text.charCodeAt(_$r1) == _$s;)_$r1++;
            if (_$r1 - t.pos >= _$i && t.skipSpace(_$r1) == t.text.length) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = t.markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$e = _step.value;
                        l.push(_$e);
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
                l.push(ge(E.CodeMark, e.lineStart + t.pos, e.lineStart + _$r1)), e.nextLine();
                break;
            }
            {
                _$n1 || J(l, e.lineStart - 1, e.lineStart);
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = t.markers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _$e1 = _step1.value;
                        l.push(_$e1);
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
                var _$r2 = e.lineStart + t.basePos, _$s1 = e.lineStart + t.text.length;
                _$r2 < _$s1 && J(l, _$r2, _$s1);
            }
        }
        return e.addNode(e.buffer.writeElements(l, -_$r).finish(E.FencedCode, e.prevLineEnd() - _$r), _$r), !0;
    },
    Blockquote: function Blockquote(e, t) {
        var _$n = z(t);
        return !(_$n < 0) && (e.startContext(E.Blockquote, t.pos), e.addNode(E.QuoteMark, e.lineStart + t.pos, e.lineStart + t.pos + 1), t.moveBase(t.pos + _$n), null);
    },
    HorizontalRule: function HorizontalRule(e, t) {
        if (D(t, e, !1) < 0) return !1;
        var _$n = e.lineStart + t.pos;
        return e.nextLine(), e.addNode(E.HorizontalRule, _$n), !0;
    },
    BulletList: function BulletList(e, t) {
        var _$n = F(t, e, !1);
        if (_$n < 0) return !1;
        e.block.type != E.BulletList && e.startContext(E.BulletList, t.basePos, t.next);
        var _$r = K(t, t.pos + 1);
        return e.startContext(E.ListItem, t.basePos, _$r - t.baseIndent), e.addNode(E.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + _$n), t.moveBaseColumn(_$r), null;
    },
    OrderedList: function OrderedList(e, t) {
        var _$n = q(t, e, !1);
        if (_$n < 0) return !1;
        e.block.type != E.OrderedList && e.startContext(E.OrderedList, t.basePos, t.text.charCodeAt(t.pos + _$n - 1));
        var _$r = K(t, t.pos + _$n);
        return e.startContext(E.ListItem, t.basePos, _$r - t.baseIndent), e.addNode(E.ListMark, e.lineStart + t.pos, e.lineStart + t.pos + _$n), t.moveBaseColumn(_$r), null;
    },
    ATXHeading: function ATXHeading(e, t) {
        var _$n = j(t);
        if (_$n < 0) return !1;
        var _$r = t.pos, _$s = e.lineStart + _$r, _$i = R(t.text, t.text.length, _$r), o = _$i;
        for(; o > _$r && t.text.charCodeAt(o - 1) == t.next;)o--;
        o != _$i && o != _$r && N(t.text.charCodeAt(o - 1)) || (o = t.text.length);
        var a = e.buffer.write(E.HeaderMark, 0, _$n).writeElements(e.parser.parseInline(t.text.slice(_$r + _$n + 1, o), _$s + _$n + 1), -_$s);
        o < t.text.length && a.write(E.HeaderMark, o - _$r, _$i - _$r);
        var l = a.finish(E.ATXHeading1 - 1 + _$n, t.text.length - _$r);
        return e.nextLine(), e.addNode(l, _$s), !0;
    },
    HTMLBlock: function HTMLBlock(e, t) {
        var _$n = V(t, 0, !1);
        if (_$n < 0) return !1;
        var _$r = e.lineStart + t.pos, _$s = G[_$n][1], _$i = [], o = _$s != _;
        for(; !_$s.test(t.text) && e.nextLine();){
            if (t.depth < e.stack.length) {
                o = !1;
                break;
            }
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = t.markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _$e = _step.value;
                    _$i.push(_$e);
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
        o && e.nextLine();
        var a = _$s == Q ? E.CommentBlock : _$s == Z ? E.ProcessingInstructionBlock : E.HTMLBlock, l = e.prevLineEnd();
        return e.addNode(e.buffer.writeElements(_$i, -_$r).finish(a, l - _$r), _$r), !0;
    },
    SetextHeading: void 0
};
var Y = /*#__PURE__*/ function() {
    "use strict";
    function Y(e) {
        _class_call_check(this, Y);
        this.stage = 0, this.elts = [], this.pos = 0, this.start = e.start, this.advance(e.content);
    }
    _create_class(Y, [
        {
            key: "nextLine",
            value: function nextLine(e, t, n) {
                if (-1 == this.stage) return !1;
                var _$r = n.content + "\n" + t.scrub(), _$s = this.advance(_$r);
                return _$s > -1 && _$s < _$r.length && this.complete(e, n, _$s);
            }
        },
        {
            key: "finish",
            value: function finish(e, t) {
                return (2 == this.stage || 3 == this.stage) && O(t.content, this.pos) == t.content.length && this.complete(e, t, t.content.length);
            }
        },
        {
            key: "complete",
            value: function complete(e, t, n) {
                return e.addLeafElement(t, ge(E.LinkReference, this.start, this.start + n, this.elts)), !0;
            }
        },
        {
            key: "nextStage",
            value: function nextStage(e) {
                return e ? (this.pos = e.to - this.start, this.elts.push(e), this.stage++, !0) : (!1 === e && (this.stage = -1), !1);
            }
        },
        {
            key: "advance",
            value: function advance(e) {
                for(;;){
                    if (-1 == this.stage) return -1;
                    if (0 == this.stage) {
                        if (!this.nextStage(Be(e, this.pos, this.start, !0))) return -1;
                        if (58 != e.charCodeAt(this.pos)) return this.stage = -1;
                        this.elts.push(ge(E.LinkMark, this.pos + this.start, this.pos + this.start + 1)), this.pos++;
                    } else {
                        if (1 != this.stage) {
                            if (2 == this.stage) {
                                var _$t = O(e, this.pos), _$n = 0;
                                if (_$t > this.pos) {
                                    var _$r = Te(e, _$t, this.start);
                                    if (_$r) {
                                        var _$t1 = ee(e, _$r.to - this.start);
                                        _$t1 > 0 && (this.nextStage(_$r), _$n = _$t1);
                                    }
                                }
                                return _$n || (_$n = ee(e, this.pos)), _$n > 0 && _$n < e.length ? _$n : -1;
                            }
                            return ee(e, this.pos);
                        }
                        if (!this.nextStage(Ie(e, O(e, this.pos), this.start))) return -1;
                    }
                }
            }
        }
    ]);
    return Y;
}();
function ee(e, t) {
    for(; t < e.length; t++){
        var _$n = e.charCodeAt(t);
        if (10 == _$n) break;
        if (!N(_$n)) return -1;
    }
    return t;
}
var te = /*#__PURE__*/ function() {
    "use strict";
    function te() {
        _class_call_check(this, te);
    }
    _create_class(te, [
        {
            key: "nextLine",
            value: function nextLine(e, t, n) {
                var _$r = t.depth < e.stack.length ? -1 : U(t), _$s = t.next;
                if (_$r < 0) return !1;
                var _$i = ge(E.HeaderMark, e.lineStart + t.pos, e.lineStart + _$r);
                return e.nextLine(), e.addLeafElement(n, ge(61 == _$s ? E.SetextHeading1 : E.SetextHeading2, n.start, e.prevLineEnd(), _to_consumable_array(e.parser.parseInline(n.content, n.start)).concat([
                    _$i
                ]))), !0;
            }
        },
        {
            key: "finish",
            value: function finish() {
                return !1;
            }
        }
    ]);
    return te;
}();
var ne = {
    LinkReference: function(e, t) {
        return 91 == t.content.charCodeAt(0) ? new Y(t) : null;
    },
    SetextHeading: function() {
        return new te;
    }
}, re = [
    function(e, t) {
        return j(t) >= 0;
    },
    function(e, t) {
        return X(t) >= 0;
    },
    function(e, t) {
        return z(t) >= 0;
    },
    function(e, t) {
        return F(t, e, !0) >= 0;
    },
    function(e, t) {
        return q(t, e, !0) >= 0;
    },
    function(e, t) {
        return D(t, e, !0) >= 0;
    },
    function(e, t) {
        return V(t, 0, !0) >= 0;
    }
], se = {
    text: "",
    end: 0
};
var ie = /*#__PURE__*/ function() {
    "use strict";
    function ie(e, t, n, r) {
        _class_call_check(this, ie);
        this.parser = e, this.input = t, this.ranges = r, this.line = new H, this.atEnd = !1, this.reusePlaceholders = new Map, this.stoppedAt = null, this.rangeI = 0, this.to = r[r.length - 1].to, this.lineStart = this.absoluteLineStart = this.absoluteLineEnd = r[0].from, this.block = B.create(E.Document, 0, this.lineStart, 0, 0), this.stack = [
            this.block
        ], this.fragments = n.length ? new ve(n, t) : null, this.readLine();
    }
    _create_class(ie, [
        {
            key: "parsedPos",
            get: function get() {
                return this.absoluteLineStart;
            }
        },
        {
            key: "advance",
            value: function advance() {
                if (null != this.stoppedAt && this.absoluteLineStart > this.stoppedAt) return this.finish();
                var _this = this, _$e = _this.line;
                for(;;){
                    for(var _$t = 0;;){
                        var _$n = _$e.depth < this.stack.length ? this.stack[this.stack.length - 1] : null;
                        for(; _$t < _$e.markers.length && (!_$n || _$e.markers[_$t].from < _$n.end);){
                            var _$n1 = _$e.markers[_$t++];
                            this.addNode(_$n1.type, _$n1.from, _$n1.to);
                        }
                        if (!_$n) break;
                        this.finishContext();
                    }
                    if (_$e.pos < _$e.text.length) break;
                    if (!this.nextLine()) return this.finish();
                }
                if (this.fragments && this.reuseFragment(_$e.basePos)) return null;
                e: for(;;){
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.parser.blockParsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _$t1 = _step.value;
                            if (_$t1) {
                                var _$n2 = _$t1(this, _$e);
                                if (0 != _$n2) {
                                    if (1 == _$n2) return null;
                                    _$e.forward();
                                    continue e;
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
                    break;
                }
                var _$t2 = new M(this.lineStart + _$e.pos, _$e.text.slice(_$e.pos));
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = this.parser.leafBlockParsers[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _$e1 = _step1.value;
                        if (_$e1) {
                            var _$n3 = _$e1(this, _$t2);
                            _$n3 && _$t2.parsers.push(_$n3);
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
                e: for(; this.nextLine() && _$e.pos != _$e.text.length;){
                    if (_$e.indent < _$e.baseIndent + 4) {
                        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
                        try {
                            for(var _iterator2 = this.parser.endLeafBlock[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                                var _$n4 = _step2.value;
                                if (_$n4(this, _$e, _$t2)) break e;
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
                    var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                    try {
                        for(var _iterator3 = _$t2.parsers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                            var _$n5 = _step3.value;
                            if (_$n5.nextLine(this, _$e, _$t2)) return null;
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
                    _$t2.content += "\n" + _$e.scrub();
                    var _iteratorNormalCompletion4 = true, _didIteratorError4 = false, _iteratorError4 = undefined;
                    try {
                        for(var _iterator4 = _$e.markers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true){
                            var _$n6 = _step4.value;
                            _$t2.marks.push(_$n6);
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                _iterator4.return();
                            }
                        } finally{
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
                return this.finishLeaf(_$t2), null;
            }
        },
        {
            key: "stopAt",
            value: function stopAt(e) {
                if (null != this.stoppedAt && this.stoppedAt < e) throw new RangeError("Can't move stoppedAt forward");
                this.stoppedAt = e;
            }
        },
        {
            key: "reuseFragment",
            value: function reuseFragment(e) {
                if (!this.fragments.moveTo(this.absoluteLineStart + e, this.absoluteLineStart) || !this.fragments.matches(this.block.hash)) return !1;
                var _$t = this.fragments.takeNodes(this);
                return !!_$t && (this.absoluteLineStart += _$t, this.lineStart = Pe(this.absoluteLineStart, this.ranges), this.moveRangeI(), this.absoluteLineStart < this.to ? (this.lineStart++, this.absoluteLineStart++, this.readLine()) : (this.atEnd = !0, this.readLine()), !0);
            }
        },
        {
            key: "depth",
            get: function get() {
                return this.stack.length;
            }
        },
        {
            key: "parentType",
            value: function parentType() {
                var _$e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.depth - 1;
                return this.parser.nodeSet.types[this.stack[_$e].type];
            }
        },
        {
            key: "nextLine",
            value: function nextLine() {
                return this.lineStart += this.line.text.length, this.absoluteLineEnd >= this.to ? (this.absoluteLineStart = this.absoluteLineEnd, this.atEnd = !0, this.readLine(), !1) : (this.lineStart++, this.absoluteLineStart = this.absoluteLineEnd + 1, this.moveRangeI(), this.readLine(), !0);
            }
        },
        {
            key: "moveRangeI",
            value: function moveRangeI() {
                for(; this.rangeI < this.ranges.length - 1 && this.absoluteLineStart >= this.ranges[this.rangeI].to;)this.rangeI++, this.absoluteLineStart = Math.max(this.absoluteLineStart, this.ranges[this.rangeI].from);
            }
        },
        {
            key: "scanLine",
            value: function scanLine(e) {
                var _$t = se;
                if (_$t.end = e, e >= this.to) _$t.text = "";
                else if (_$t.text = this.lineChunkAt(e), _$t.end += _$t.text.length, this.ranges.length > 1) {
                    var _$e = this.absoluteLineStart, _$n = this.rangeI;
                    for(; this.ranges[_$n].to < _$t.end;){
                        _$n++;
                        var _$r = this.ranges[_$n].from, _$s = this.lineChunkAt(_$r);
                        _$t.end = _$r + _$s.length, _$t.text = _$t.text.slice(0, this.ranges[_$n - 1].to - _$e) + _$s, _$e = _$t.end - _$t.text.length;
                    }
                }
                return _$t;
            }
        },
        {
            key: "readLine",
            value: function readLine() {
                var _this = this, _$e = _this.line, _this_scanLine = this.scanLine(this.absoluteLineStart), _$t = _this_scanLine.text, _$n = _this_scanLine.end;
                for(this.absoluteLineEnd = _$n, _$e.reset(_$t); _$e.depth < this.stack.length; _$e.depth++){
                    var _$t1 = this.stack[_$e.depth], _$n1 = this.parser.skipContextMarkup[_$t1.type];
                    if (!_$n1) throw new Error("Unhandled block context " + E[_$t1.type]);
                    if (!_$n1(_$t1, this, _$e)) break;
                    _$e.forward();
                }
            }
        },
        {
            key: "lineChunkAt",
            value: function lineChunkAt(e) {
                var _$t, _$n = this.input.chunk(e);
                if (this.input.lineChunks) _$t = "\n" == _$n ? "" : _$n;
                else {
                    var _$e = _$n.indexOf("\n");
                    _$t = _$e < 0 ? _$n : _$n.slice(0, _$e);
                }
                return e + _$t.length > this.to ? _$t.slice(0, this.to - e) : _$t;
            }
        },
        {
            key: "prevLineEnd",
            value: function prevLineEnd() {
                return this.atEnd ? this.lineStart : this.lineStart - 1;
            }
        },
        {
            key: "startContext",
            value: function startContext(e, t) {
                var _$n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                this.block = B.create(e, _$n, this.lineStart + t, this.block.hash, this.lineStart + this.line.text.length), this.stack.push(this.block);
            }
        },
        {
            key: "startComposite",
            value: function startComposite(e, t) {
                var _$n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                this.startContext(this.parser.getNodeType(e), t, _$n);
            }
        },
        {
            key: "addNode",
            value: function addNode(e, t, n) {
                "number" == typeof e && (e = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.n(this.parser.nodeSet.types[e], ue, ue, (null != n ? n : this.prevLineEnd()) - t)), this.block.addChild(e, t - this.block.from);
            }
        },
        {
            key: "addElement",
            value: function addElement(e) {
                this.block.addChild(e.toTree(this.parser.nodeSet), e.from - this.block.from);
            }
        },
        {
            key: "addLeafElement",
            value: function addLeafElement(e, t) {
                this.addNode(this.buffer.writeElements(Me(t.children, e.marks), -t.from).finish(t.type, t.to - t.from), t.from);
            }
        },
        {
            key: "finishContext",
            value: function finishContext() {
                var _$e = this.stack.pop(), _$t = this.stack[this.stack.length - 1];
                _$t.addChild(_$e.toTree(this.parser.nodeSet), _$e.from - _$t.from), this.block = _$t;
            }
        },
        {
            key: "finish",
            value: function finish() {
                for(; this.stack.length > 1;)this.finishContext();
                return this.addGaps(this.block.toTree(this.parser.nodeSet, this.lineStart));
            }
        },
        {
            key: "addGaps",
            value: function addGaps(e) {
                return this.ranges.length > 1 ? oe(this.ranges, 0, e.topNode, this.ranges[0].from, this.reusePlaceholders) : e;
            }
        },
        {
            key: "finishLeaf",
            value: function finishLeaf(e) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e.parsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$t = _step.value;
                        if (_$t.finish(this, e)) return;
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
                var _$t1 = Me(this.parser.parseInline(e.content, e.start), e.marks);
                this.addNode(this.buffer.writeElements(_$t1, -e.start).finish(E.Paragraph, e.content.length), e.start);
            }
        },
        {
            key: "elt",
            value: function elt(e, t, n, r) {
                return "string" == typeof e ? ge(this.parser.getNodeType(e), t, n, r) : new me(e, t);
            }
        },
        {
            key: "buffer",
            get: function get() {
                return new de(this.parser.nodeSet);
            }
        }
    ]);
    return ie;
}();
function oe(e, t, n, r, s) {
    var _$i = e[t].to, o = [], l = [], h = n.from + r;
    function f(n, s) {
        for(; s ? n >= _$i : n > _$i;){
            var _$s = e[t + 1].from - _$i;
            r += _$s, n += _$s, t++, _$i = e[t].to;
        }
    }
    for(var _$a = n.firstChild; _$a; _$a = _$a.nextSibling){
        f(_$a.from + r, !0);
        var _$n = void 0, c = _$a.from + r, u = s.get(_$a.tree);
        u ? _$n = u : _$a.to + r > _$i ? (_$n = oe(e, t, _$a, r, s), f(_$a.to + r, !1)) : _$n = _$a.toTree(), o.push(_$n), l.push(c - h);
    }
    return f(n.to + r, !1), new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.n(n.type, o, l, n.to + r - h, n.tree ? n.tree.propValues : void 0);
}
var ae = /*#__PURE__*/ function(i) {
    "use strict";
    _inherits(ae, i);
    var _super = _create_super(ae);
    function ae(e, t, n, r, s, i, o, a, l) {
        _class_call_check(this, ae);
        var _this;
        _this = _super.call(this), _this.nodeSet = e, _this.blockParsers = t, _this.leafBlockParsers = n, _this.blockNames = r, _this.endLeafBlock = s, _this.skipContextMarkup = i, _this.inlineParsers = o, _this.inlineNames = a, _this.wrappers = l, _this.nodeTypes = Object.create(null);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = e.types[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _$t = _step.value;
                _this.nodeTypes[_$t.name] = _$t.id;
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
        return _possible_constructor_return(_this);
    }
    _create_class(ae, [
        {
            key: "createParse",
            value: function createParse(e, t, n) {
                var _$r = new ie(this, e, t, n);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = this.wrappers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$s = _step.value;
                        _$r = _$s(_$r, e, t, n);
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
                return _$r;
            }
        },
        {
            key: "configure",
            value: function configure(r) {
                var _a;
                var _$i = he(r);
                if (!_$i) return this;
                var _this = this, a = _this.nodeSet, l = _this.skipContextMarkup, h = this.blockParsers.slice(), f = this.leafBlockParsers.slice(), c = this.blockNames.slice(), u = this.inlineParsers.slice(), d = this.inlineNames.slice(), p = this.endLeafBlock.slice(), m = this.wrappers;
                if (le(_$i.defineNodes)) {
                    l = Object.assign({}, l);
                    var _$r, h1 = a.types.slice();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        var _loop = function() {
                            var _$n = _step.value;
                            var _ref = "string" == typeof _$n ? {
                                name: _$n
                            } : _$n, _$s = _ref.name, _$i = _ref.block, a = _ref.composite, f = _ref.style;
                            if (h1.some(function(e) {
                                return e.name == _$s;
                            })) return "continue";
                            a && (l[h1.length] = function(e, t, n) {
                                return a(t, n, e.value);
                            });
                            var c = h1.length, u = a ? [
                                "Block",
                                "BlockContext"
                            ] : _$i ? c >= E.ATXHeading1 && c <= E.SetextHeading2 ? [
                                "Block",
                                "LeafBlock",
                                "Heading"
                            ] : [
                                "Block",
                                "LeafBlock"
                            ] : void 0;
                            h1.push(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.N.define({
                                id: c,
                                name: _$s,
                                props: u && [
                                    [
                                        _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.l.group,
                                        u
                                    ]
                                ]
                            })), f && (_$r || (_$r = {}), Array.isArray(f) || _instanceof(f, _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.T) ? _$r[_$s] = f : Object.assign(_$r, f));
                        };
                        for(var _iterator = _$i.defineNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
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
                    a = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.m(h1), _$r && (a = a.extend((0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)(_$r)));
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                if (le(_$i.props) && (a = (_a = a).extend.apply(_a, _to_consumable_array(_$i.props))), le(_$i.remove)) try {
                    for(var _iterator1 = _$i.remove[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var _$e = _step1.value;
                        var _$t = this.blockNames.indexOf(_$e), _$n = this.inlineNames.indexOf(_$e);
                        _$t > -1 && (h[_$t] = f[_$t] = void 0), _$n > -1 && (u[_$n] = void 0);
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
                if (le(_$i.parseBlock)) try {
                    for(var _iterator2 = _$i.parseBlock[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                        var _$e1 = _step2.value;
                        var _$t1 = c.indexOf(_$e1.name);
                        if (_$t1 > -1) h[_$t1] = _$e1.parse, f[_$t1] = _$e1.leaf;
                        else {
                            var _$t2 = _$e1.before ? fe(c, _$e1.before) : _$e1.after ? fe(c, _$e1.after) + 1 : c.length - 1;
                            h.splice(_$t2, 0, _$e1.parse), f.splice(_$t2, 0, _$e1.leaf), c.splice(_$t2, 0, _$e1.name);
                        }
                        _$e1.endLeaf && p.push(_$e1.endLeaf);
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
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                if (le(_$i.parseInline)) try {
                    for(var _iterator3 = _$i.parseInline[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var _$e2 = _step3.value;
                        var _$t3 = d.indexOf(_$e2.name);
                        if (_$t3 > -1) u[_$t3] = _$e2.parse;
                        else {
                            var _$t4 = _$e2.before ? fe(d, _$e2.before) : _$e2.after ? fe(d, _$e2.after) + 1 : d.length - 1;
                            u.splice(_$t4, 0, _$e2.parse), d.splice(_$t4, 0, _$e2.name);
                        }
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
                return _$i.wrap && (m = m.concat(_$i.wrap)), new ae(a, h, f, c, p, l, u, d, m);
            }
        },
        {
            key: "getNodeType",
            value: function getNodeType(e) {
                var _$t = this.nodeTypes[e];
                if (null == _$t) throw new RangeError("Unknown node type '".concat(e, "'"));
                return _$t;
            }
        },
        {
            key: "parseInline",
            value: function parseInline(e, t) {
                var _$n = new Ee(this, e, t);
                e: for(var _$e = t; _$e < _$n.end;){
                    var _$t = _$n.char(_$e);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.inlineParsers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _$r = _step.value;
                            if (_$r) {
                                var _$s = _$r(_$n, _$t, _$e);
                                if (_$s >= 0) {
                                    _$e = _$s;
                                    continue e;
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
                    _$e++;
                }
                return _$n.resolveMarkers(0);
            }
        }
    ]);
    return ae;
}(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.P);
function le(e) {
    return null != e && e.length > 0;
}
function he(e) {
    if (!Array.isArray(e)) return e;
    if (0 == e.length) return null;
    var _$t = he(e[0]);
    if (1 == e.length) return _$t;
    var _$n = he(e.slice(1));
    if (!_$n || !_$t) return _$t || _$n;
    var _$r = function(e, t) {
        return (e || ue).concat(t || ue);
    }, _$s = _$t.wrap, _$i = _$n.wrap;
    return {
        props: _$r(_$t.props, _$n.props),
        defineNodes: _$r(_$t.defineNodes, _$n.defineNodes),
        parseBlock: _$r(_$t.parseBlock, _$n.parseBlock),
        parseInline: _$r(_$t.parseInline, _$n.parseInline),
        remove: _$r(_$t.remove, _$n.remove),
        wrap: _$s ? _$i ? function(e, t, n, r) {
            return _$s(_$i(e, t, n, r), t, n, r);
        } : _$s : _$i
    };
}
function fe(e, t) {
    var _$n = e.indexOf(t);
    if (_$n < 0) throw new RangeError("Position specified relative to unknown parser ".concat(t));
    return _$n;
}
var ce = [
    _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.N.none
];
for(var _$n, _$r = 1; _$n = E[_$r]; _$r++)ce[_$r] = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.N.define({
    id: _$r,
    name: _$n,
    props: _$r >= E.Escape ? [] : [
        [
            _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.l.group,
            _$r in P ? [
                "Block",
                "BlockContext"
            ] : [
                "Block",
                "LeafBlock"
            ]
        ]
    ],
    top: "Document" == _$n
});
var ue = [];
var de = /*#__PURE__*/ function() {
    "use strict";
    function de(e) {
        _class_call_check(this, de);
        this.nodeSet = e, this.content = [], this.nodes = [];
    }
    _create_class(de, [
        {
            key: "write",
            value: function write(e, t, n) {
                var _$r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                return this.content.push(e, t, n, 4 + 4 * _$r), this;
            }
        },
        {
            key: "writeElements",
            value: function writeElements(e) {
                var _$t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = e[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _$n = _step.value;
                        _$n.writeTo(this, _$t);
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
                return this;
            }
        },
        {
            key: "finish",
            value: function finish(e, t) {
                return _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.n.build({
                    buffer: this.content,
                    nodeSet: this.nodeSet,
                    reused: this.nodes,
                    topID: e,
                    length: t
                });
            }
        }
    ]);
    return de;
}();
var pe = /*#__PURE__*/ function() {
    "use strict";
    function pe(e, t, n) {
        var _$r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ue;
        _class_call_check(this, pe);
        this.type = e, this.from = t, this.to = n, this.children = _$r;
    }
    _create_class(pe, [
        {
            key: "writeTo",
            value: function writeTo(e, t) {
                var _$n = e.content.length;
                e.writeElements(this.children, t), e.content.push(this.type, this.from + t, this.to + t, e.content.length + 4 - _$n);
            }
        },
        {
            key: "toTree",
            value: function toTree(e) {
                return new de(e).writeElements(this.children, -this.from).finish(this.type, this.to - this.from);
            }
        }
    ]);
    return pe;
}();
var me = /*#__PURE__*/ function() {
    "use strict";
    function me(e, t) {
        _class_call_check(this, me);
        this.tree = e, this.from = t;
    }
    _create_class(me, [
        {
            key: "to",
            get: function get() {
                return this.from + this.tree.length;
            }
        },
        {
            key: "type",
            get: function get() {
                return this.tree.type.id;
            }
        },
        {
            key: "children",
            get: function get() {
                return ue;
            }
        },
        {
            key: "writeTo",
            value: function writeTo(e, t) {
                e.nodes.push(this.tree), e.content.push(e.nodes.length - 1, this.from + t, this.to + t, -1);
            }
        },
        {
            key: "toTree",
            value: function toTree() {
                return this.tree;
            }
        }
    ]);
    return me;
}();
function ge(e, t, n, r) {
    return new pe(e, t, n, r);
}
var ke = {
    resolve: "Emphasis",
    mark: "EmphasisMark"
}, xe = {
    resolve: "Emphasis",
    mark: "EmphasisMark"
}, be = {}, Le = {};
var Se = function Se(e, t, n, r) {
    "use strict";
    _class_call_check(this, Se);
    this.type = e, this.from = t, this.to = n, this.side = r;
};
var Ce = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var we = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\u2010-\u2027]/;
try {
    we = new RegExp("[\\p{Pc}|\\p{Pd}|\\p{Pe}|\\p{Pf}|\\p{Pi}|\\p{Po}|\\p{Ps}]", "u");
} catch (e) {}
var ye = {
    Escape: function Escape(e, t, n) {
        if (92 != t || n == e.end - 1) return -1;
        var _$r = e.char(n + 1);
        for(var _$t = 0; _$t < 32; _$t++)if (Ce.charCodeAt(_$t) == _$r) return e.append(ge(E.Escape, n, n + 2));
        return -1;
    },
    Entity: function Entity(e, t, n) {
        if (38 != t) return -1;
        var _$r = /^(?:#\d+|#x[a-f\d]+|\w+);/i.exec(e.slice(n + 1, n + 31));
        return _$r ? e.append(ge(E.Entity, n, n + 1 + _$r[0].length)) : -1;
    },
    InlineCode: function InlineCode(e, t, n) {
        if (96 != t || n && 96 == e.char(n - 1)) return -1;
        var _$r = n + 1;
        for(; _$r < e.end && 96 == e.char(_$r);)_$r++;
        var _$s = _$r - n, _$i = 0;
        for(; _$r < e.end; _$r++)if (96 == e.char(_$r)) {
            if (_$i++, _$i == _$s && 96 != e.char(_$r + 1)) return e.append(ge(E.InlineCode, n, _$r + 1, [
                ge(E.CodeMark, n, n + _$s),
                ge(E.CodeMark, _$r + 1 - _$s, _$r + 1)
            ]));
        } else _$i = 0;
        return -1;
    },
    HTMLTag: function HTMLTag(e, t, n) {
        if (60 != t || n == e.end - 1) return -1;
        var _$r = e.slice(n + 1, e.end), _$s = /^(?:[a-z][-\w+.]+:[^\s>]+|[a-z\d.!#$%&'*+/=?^_`{|}~-]+@[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?(?:\.[a-z\d](?:[a-z\d-]{0,61}[a-z\d])?)*)>/i.exec(_$r);
        if (_$s) return e.append(ge(E.Autolink, n, n + 1 + _$s[0].length, [
            ge(E.LinkMark, n, n + 1),
            ge(E.URL, n + 1, n + _$s[0].length),
            ge(E.LinkMark, n + _$s[0].length, n + 1 + _$s[0].length)
        ]));
        var _$i = /^!--[^>](?:-[^-]|[^-])*?-->/i.exec(_$r);
        if (_$i) return e.append(ge(E.Comment, n, n + 1 + _$i[0].length));
        var o = /^\?[^]*?\?>/.exec(_$r);
        if (o) return e.append(ge(E.ProcessingInstruction, n, n + 1 + o[0].length));
        var a = /^(?:![A-Z][^]*?>|!\[CDATA\[[^]*?\]\]>|\/\s*[a-zA-Z][\w-]*\s*>|\s*[a-zA-Z][\w-]*(\s+[a-zA-Z:_][\w-.:]*(?:\s*=\s*(?:[^\s"'=<>`]+|'[^']*'|"[^"]*"))?)*\s*(\/\s*)?>)/.exec(_$r);
        return a ? e.append(ge(E.HTMLTag, n, n + 1 + a[0].length)) : -1;
    },
    Emphasis: function Emphasis(e, t, n) {
        if (95 != t && 42 != t) return -1;
        var _$r = n + 1;
        for(; e.char(_$r) == t;)_$r++;
        var _$s = e.slice(n - 1, n), _$i = e.slice(_$r, _$r + 1), o = we.test(_$s), a = we.test(_$i), l = /\s|^$/.test(_$s), h = /\s|^$/.test(_$i), f = !h && (!a || l || o), c = !l && (!o || h || a), u = f && (42 == t || !c || o), d = c && (42 == t || !f || a);
        return e.append(new Se(95 == t ? ke : xe, n, _$r, (u ? 1 : 0) | (d ? 2 : 0)));
    },
    HardBreak: function HardBreak(e, t, n) {
        if (92 == t && 10 == e.char(n + 1)) return e.append(ge(E.HardBreak, n, n + 2));
        if (32 == t) {
            var _$t = n + 1;
            for(; 32 == e.char(_$t);)_$t++;
            if (10 == e.char(_$t) && _$t >= n + 2) return e.append(ge(E.HardBreak, n, _$t + 1));
        }
        return -1;
    },
    Link: function(e, t, n) {
        return 91 == t ? e.append(new Se(be, n, n + 1, 1)) : -1;
    },
    Image: function(e, t, n) {
        return 33 == t && 91 == e.char(n + 1) ? e.append(new Se(Le, n, n + 2, 1)) : -1;
    },
    LinkEnd: function LinkEnd(e, t, n) {
        if (93 != t) return -1;
        for(var _$t = e.parts.length - 1; _$t >= 0; _$t--){
            var _$r = e.parts[_$t];
            if (_instanceof(_$r, Se) && (_$r.type == be || _$r.type == Le)) {
                if (!_$r.side || e.skipSpace(_$r.to) == n && !/[(\[]/.test(e.slice(n + 1, n + 2))) return e.parts[_$t] = null, -1;
                var _$s = e.takeContent(_$t), _$i = e.parts[_$t] = Ae(e, _$s, _$r.type == be ? E.Link : E.Image, _$r.from, n + 1);
                if (_$r.type == be) for(var _$n = 0; _$n < _$t; _$n++){
                    var _$t1 = e.parts[_$n];
                    _instanceof(_$t1, Se) && _$t1.type == be && (_$t1.side = 0);
                }
                return _$i.to;
            }
        }
        return -1;
    }
};
function Ae(e, t, n, r, s) {
    var _$i = e.text, o = e.char(s), a = s;
    if (t.unshift(ge(E.LinkMark, r, r + (n == E.Image ? 2 : 1))), t.push(ge(E.LinkMark, s - 1, s)), 40 == o) {
        var _$n, _$r = e.skipSpace(s + 1), o1 = Ie(_$i, _$r - e.offset, e.offset);
        o1 && (_$r = e.skipSpace(o1.to), _$r != o1.to && (_$n = Te(_$i, _$r - e.offset, e.offset), _$n && (_$r = e.skipSpace(_$n.to)))), 41 == e.char(_$r) && (t.push(ge(E.LinkMark, s, s + 1)), a = _$r + 1, o1 && t.push(o1), _$n && t.push(_$n), t.push(ge(E.LinkMark, _$r, a)));
    } else if (91 == o) {
        var _$n1 = Be(_$i, s - e.offset, e.offset, !1);
        _$n1 && (t.push(_$n1), a = _$n1.to);
    }
    return ge(n, r, a, t);
}
function Ie(e, t, n) {
    if (60 == e.charCodeAt(t)) {
        for(var _$r = t + 1; _$r < e.length; _$r++){
            var _$s = e.charCodeAt(_$r);
            if (62 == _$s) return ge(E.URL, t + n, _$r + 1 + n);
            if (60 == _$s || 10 == _$s) return !1;
        }
        return null;
    }
    {
        var _$r1 = 0, _$s1 = t;
        for(var _$t = !1; _$s1 < e.length; _$s1++){
            var _$n = e.charCodeAt(_$s1);
            if (N(_$n)) break;
            if (_$t) _$t = !1;
            else if (40 == _$n) _$r1++;
            else if (41 == _$n) {
                if (!_$r1) break;
                _$r1--;
            } else 92 == _$n && (_$t = !0);
        }
        return _$s1 > t ? ge(E.URL, t + n, _$s1 + n) : _$s1 == e.length && null;
    }
}
function Te(e, t, n) {
    var _$r = e.charCodeAt(t);
    if (39 != _$r && 34 != _$r && 40 != _$r) return !1;
    var _$s = 40 == _$r ? 41 : _$r;
    for(var _$r1 = t + 1, _$i = !1; _$r1 < e.length; _$r1++){
        var o = e.charCodeAt(_$r1);
        if (_$i) _$i = !1;
        else {
            if (o == _$s) return ge(E.LinkTitle, t + n, _$r1 + 1 + n);
            92 == o && (_$i = !0);
        }
    }
    return null;
}
function Be(e, t, n, r) {
    for(var _$s = !1, _$i = t + 1, o = Math.min(e.length, _$i + 999); _$i < o; _$i++){
        var o1 = e.charCodeAt(_$i);
        if (_$s) _$s = !1;
        else {
            if (93 == o1) return !r && ge(E.LinkLabel, t + n, _$i + 1 + n);
            if (r && !N(o1) && (r = !1), 91 == o1) return !1;
            92 == o1 && (_$s = !0);
        }
    }
    return null;
}
var Ee = /*#__PURE__*/ function() {
    "use strict";
    function Ee(e, t, n) {
        _class_call_check(this, Ee);
        this.parser = e, this.text = t, this.offset = n, this.parts = [];
    }
    _create_class(Ee, [
        {
            key: "char",
            value: function char(e) {
                return e >= this.end ? -1 : this.text.charCodeAt(e - this.offset);
            }
        },
        {
            key: "end",
            get: function get() {
                return this.offset + this.text.length;
            }
        },
        {
            key: "slice",
            value: function slice(e, t) {
                return this.text.slice(e - this.offset, t - this.offset);
            }
        },
        {
            key: "append",
            value: function append(e) {
                return this.parts.push(e), e.to;
            }
        },
        {
            key: "addDelimiter",
            value: function addDelimiter(e, t, n, r, s) {
                return this.append(new Se(e, t, n, (r ? 1 : 0) | (s ? 2 : 0)));
            }
        },
        {
            key: "hasOpenLink",
            get: function get() {
                for(var _$e = this.parts.length - 1; _$e >= 0; _$e--){
                    var _$t = this.parts[_$e];
                    if (_instanceof(_$t, Se) && (_$t.type == be || _$t.type == Le)) return !0;
                }
                return !1;
            }
        },
        {
            key: "addElement",
            value: function addElement(e) {
                return this.append(e);
            }
        },
        {
            key: "resolveMarkers",
            value: function resolveMarkers(e) {
                for(var _$t = e; _$t < this.parts.length; _$t++){
                    var _$n = this.parts[_$t];
                    if (!(_instanceof(_$n, Se) && _$n.type.resolve && 2 & _$n.side)) continue;
                    var _$r = void 0, _$s = _$n.type == ke || _$n.type == xe, _$i = _$n.to - _$n.from, o = _$t - 1;
                    for(; o >= e; o--){
                        var _$e = this.parts[o];
                        if (_instanceof(_$e, Se) && 1 & _$e.side && _$e.type == _$n.type && !(_$s && (1 & _$n.side || 2 & _$e.side) && (_$e.to - _$e.from + _$i) % 3 == 0 && ((_$e.to - _$e.from) % 3 || _$i % 3))) {
                            _$r = _$e;
                            break;
                        }
                    }
                    if (!_$r) continue;
                    var a = _$n.type.resolve, l = [], h = _$r.from, f = _$n.to;
                    if (_$s) {
                        var _$e1 = Math.min(2, _$r.to - _$r.from, _$i);
                        h = _$r.to - _$e1, f = _$n.from + _$e1, a = 1 == _$e1 ? "Emphasis" : "StrongEmphasis";
                    }
                    _$r.type.mark && l.push(this.elt(_$r.type.mark, h, _$r.to));
                    for(var _$e2 = o + 1; _$e2 < _$t; _$e2++)_instanceof(this.parts[_$e2], pe) && l.push(this.parts[_$e2]), this.parts[_$e2] = null;
                    _$n.type.mark && l.push(this.elt(_$n.type.mark, _$n.from, f));
                    var c = this.elt(a, h, f, l);
                    this.parts[o] = _$s && _$r.from != h ? new Se(_$r.type, _$r.from, h, _$r.side) : null, (this.parts[_$t] = _$s && _$n.to != f ? new Se(_$n.type, f, _$n.to, _$n.side) : null) ? this.parts.splice(_$t, 0, c) : this.parts[_$t] = c;
                }
                var _$t1 = [];
                for(var _$n1 = e; _$n1 < this.parts.length; _$n1++){
                    var _$e3 = this.parts[_$n1];
                    _instanceof(_$e3, pe) && _$t1.push(_$e3);
                }
                return _$t1;
            }
        },
        {
            key: "findOpeningDelimiter",
            value: function findOpeningDelimiter(e) {
                for(var _$t = this.parts.length - 1; _$t >= 0; _$t--){
                    var _$n = this.parts[_$t];
                    if (_instanceof(_$n, Se) && _$n.type == e) return _$t;
                }
                return null;
            }
        },
        {
            key: "takeContent",
            value: function takeContent(e) {
                var _$t = this.resolveMarkers(e);
                return this.parts.length = e, _$t;
            }
        },
        {
            key: "skipSpace",
            value: function skipSpace(e) {
                return O(this.text, e - this.offset) + this.offset;
            }
        },
        {
            key: "elt",
            value: function elt(e, t, n, r) {
                return "string" == typeof e ? ge(this.parser.getNodeType(e), t, n, r) : new me(e, t);
            }
        }
    ]);
    return Ee;
}();
function Me(e, t) {
    if (!t.length) return e;
    if (!e.length) return t;
    var _$n = e.slice(), _$r = 0;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = t[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _$e = _step.value;
            for(; _$r < _$n.length && _$n[_$r].to < _$e.to;)_$r++;
            if (_$r < _$n.length && _$n[_$r].from < _$e.from) {
                var _$t = _$n[_$r];
                _instanceof(_$t, pe) && (_$n[_$r] = new pe(_$t.type, _$t.from, _$t.to, Me(_$t.children, [
                    _$e
                ])));
            } else _$n.splice(_$r++, 0, _$e);
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
    return _$n;
}
var He = [
    E.CodeBlock,
    E.ListItem,
    E.OrderedList,
    E.BulletList
];
var ve = /*#__PURE__*/ function() {
    "use strict";
    function ve(e, t) {
        _class_call_check(this, ve);
        this.fragments = e, this.input = t, this.i = 0, this.fragment = null, this.fragmentEnd = -1, this.cursor = null, e.length && (this.fragment = e[this.i++]);
    }
    _create_class(ve, [
        {
            key: "nextFragment",
            value: function nextFragment() {
                this.fragment = this.i < this.fragments.length ? this.fragments[this.i++] : null, this.cursor = null, this.fragmentEnd = -1;
            }
        },
        {
            key: "moveTo",
            value: function moveTo(e, t) {
                for(; this.fragment && this.fragment.to <= e;)this.nextFragment();
                if (!this.fragment || this.fragment.from > (e ? e - 1 : 0)) return !1;
                if (this.fragmentEnd < 0) {
                    var _$e = this.fragment.to;
                    for(; _$e > 0 && "\n" != this.input.read(_$e - 1, _$e);)_$e--;
                    this.fragmentEnd = _$e ? _$e - 1 : 0;
                }
                var _$n = this.cursor;
                _$n || (_$n = this.cursor = this.fragment.tree.cursor(), _$n.firstChild());
                var _$r = e + this.fragment.offset;
                for(; _$n.to <= _$r;)if (!_$n.parent()) return !1;
                for(;;){
                    if (_$n.from >= _$r) return this.fragment.from <= t;
                    if (!_$n.childAfter(_$r)) return !1;
                }
            }
        },
        {
            key: "matches",
            value: function matches(e) {
                var _$n = this.cursor.tree;
                return _$n && _$n.prop(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.l.contextHash) == e;
            }
        },
        {
            key: "takeNodes",
            value: function takeNodes(e) {
                var _$t = this.cursor, _$n = this.fragment.offset, _$r = this.fragmentEnd - (this.fragment.openEnd ? 1 : 0), _$s = e.absoluteLineStart, _$i = _$s, o = e.block.children.length, l = _$i, h = o;
                for(;;){
                    if (_$t.to - _$n > _$r) {
                        if (_$t.type.isAnonymous && _$t.firstChild()) continue;
                        break;
                    }
                    var _$s1 = Pe(_$t.from - _$n, e.ranges);
                    if (_$t.to - _$n <= e.ranges[e.rangeI].to) e.addNode(_$t.tree, _$s1);
                    else {
                        var _$n1 = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.n(e.parser.nodeSet.types[E.Paragraph], [], [], 0, e.block.hashProp);
                        e.reusePlaceholders.set(_$n1, _$t.tree), e.addNode(_$n1, _$s1);
                    }
                    if (_$t.type.is("Block") && (He.indexOf(_$t.type.id) < 0 ? (_$i = _$t.to - _$n, o = e.block.children.length) : (_$i = l, o = h, l = _$t.to - _$n, h = e.block.children.length)), !_$t.nextSibling()) break;
                }
                for(; e.block.children.length > o;)e.block.children.pop(), e.block.positions.pop();
                return _$i - _$s;
            }
        }
    ]);
    return ve;
}();
function Pe(e, t) {
    var _$n = e;
    for(var _$r = 1; _$r < t.length; _$r++){
        var _$s = t[_$r - 1].to, _$i = t[_$r].from;
        _$s < e && (_$n -= _$i - _$s);
    }
    return _$n;
}
var Ne = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)({
    "Blockquote/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.quote,
    HorizontalRule: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.contentSeparator,
    "ATXHeading1/... SetextHeading1/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.heading1,
    "ATXHeading2/... SetextHeading2/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.heading2,
    "ATXHeading3/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.heading3,
    "ATXHeading4/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.heading4,
    "ATXHeading5/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.heading5,
    "ATXHeading6/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.heading6,
    "Comment CommentBlock": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.comment,
    Escape: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.escape,
    Entity: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.character,
    "Emphasis/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.emphasis,
    "StrongEmphasis/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.strong,
    "Link/... Image/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.link,
    "OrderedList/... BulletList/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.list,
    "BlockQuote/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.quote,
    "InlineCode CodeText": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.monospace,
    "URL Autolink": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.url,
    "HeaderMark HardBreak QuoteMark ListMark LinkMark EmphasisMark CodeMark": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction,
    "CodeInfo LinkLabel": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.labelName,
    LinkTitle: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.string,
    Paragraph: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content
}), Oe = new ae(new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.m(ce).extend(Ne), Object.keys(W).map(function(e) {
    return W[e];
}), Object.keys(W).map(function(e) {
    return ne[e];
}), Object.keys(W), re, P, Object.keys(ye).map(function(e) {
    return ye[e];
}), Object.keys(ye), []);
function Re(e, t, n) {
    var _$r = [];
    for(var _$s = e.firstChild, _$i = t;; _$s = _$s.nextSibling){
        var _$e = _$s ? _$s.from : n;
        if (_$e > _$i && _$r.push({
            from: _$i,
            to: _$e
        }), !_$s) break;
        _$i = _$s.to;
    }
    return _$r;
}
var Xe = {
    resolve: "Strikethrough",
    mark: "StrikethroughMark"
}, ze = {
    defineNodes: [
        {
            name: "Strikethrough",
            style: {
                "Strikethrough/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.strikethrough
            }
        },
        {
            name: "StrikethroughMark",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction
        }
    ],
    parseInline: [
        {
            name: "Strikethrough",
            parse: function parse(e, t, n) {
                if (126 != t || 126 != e.char(n + 1) || 126 == e.char(n + 2)) return -1;
                var _$r = e.slice(n - 1, n), _$s = e.slice(n + 2, n + 3), _$i = /\s|^$/.test(_$r), o = /\s|^$/.test(_$s), a = we.test(_$r), l = we.test(_$s);
                return e.addDelimiter(Xe, n, n + 2, !o && (!l || _$i || a), !_$i && (!a || o || l));
            },
            after: "Emphasis"
        }
    ]
};
function De(e, t) {
    var _$n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, _$r = arguments.length > 3 ? arguments[3] : void 0, _$s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
    var _$i = 0, o = !0, a = -1, l = -1, h = !1, f = function() {
        _$r.push(e.elt("TableCell", _$s + a, _$s + l, e.parser.parseInline(t.slice(a, l), _$s + a)));
    };
    for(var c = _$n; c < t.length; c++){
        var _$n1 = t.charCodeAt(c);
        124 != _$n1 || h ? (h || 32 != _$n1 && 9 != _$n1) && (a < 0 && (a = c), l = c + 1) : ((!o || a > -1) && _$i++, o = !1, _$r && (a > -1 && f(), _$r.push(e.elt("TableDelimiter", c + _$s, c + _$s + 1))), a = l = -1), h = !h && 92 == _$n1;
    }
    return a > -1 && (_$i++, _$r && f()), _$i;
}
function $e(e, t) {
    for(var _$n = t; _$n < e.length; _$n++){
        var _$t = e.charCodeAt(_$n);
        if (124 == _$t) return !0;
        92 == _$t && _$n++;
    }
    return !1;
}
var Fe = /^\|?(\s*:?-+:?\s*\|)+(\s*:?-+:?\s*)?$/;
var qe = /*#__PURE__*/ function() {
    "use strict";
    function qe() {
        _class_call_check(this, qe);
        this.rows = null;
    }
    _create_class(qe, [
        {
            key: "nextLine",
            value: function nextLine(e, t, n) {
                if (null == this.rows) {
                    var _$r;
                    if (this.rows = !1, (45 == t.next || 58 == t.next || 124 == t.next) && Fe.test(_$r = t.text.slice(t.pos))) {
                        var _$s = [];
                        De(e, n.content, 0, _$s, n.start) == De(e, _$r, t.pos) && (this.rows = [
                            e.elt("TableHeader", n.start, n.start + n.content.length, _$s),
                            e.elt("TableDelimiter", e.lineStart + t.pos, e.lineStart + t.text.length)
                        ]);
                    }
                } else if (this.rows) {
                    var _$n = [];
                    De(e, t.text, t.pos, _$n, e.lineStart), this.rows.push(e.elt("TableRow", e.lineStart + t.pos, e.lineStart + t.text.length, _$n));
                }
                return !1;
            }
        },
        {
            key: "finish",
            value: function finish(e, t) {
                return !!this.rows && (e.addLeafElement(t, e.elt("Table", t.start, t.start + t.content.length, this.rows)), !0);
            }
        }
    ]);
    return qe;
}();
var je = {
    defineNodes: [
        {
            name: "Table",
            block: !0
        },
        {
            name: "TableHeader",
            style: {
                "TableHeader/...": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.heading
            }
        },
        "TableRow",
        {
            name: "TableCell",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content
        },
        {
            name: "TableDelimiter",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction
        }
    ],
    parseBlock: [
        {
            name: "Table",
            leaf: function(e, t) {
                return $e(t.content, 0) ? new qe : null;
            },
            endLeaf: function endLeaf(e, t, n) {
                if (n.parsers.some(function(e) {
                    return _instanceof(e, qe);
                }) || !$e(t.text, t.basePos)) return !1;
                var _$r = e.scanLine(e.absoluteLineEnd + 1).text;
                return Fe.test(_$r) && De(e, t.text, t.basePos) == De(e, _$r, t.basePos);
            },
            before: "SetextHeading"
        }
    ]
};
var Ue = /*#__PURE__*/ function() {
    "use strict";
    function Ue() {
        _class_call_check(this, Ue);
    }
    _create_class(Ue, [
        {
            key: "nextLine",
            value: function nextLine() {
                return !1;
            }
        },
        {
            key: "finish",
            value: function finish(e, t) {
                return e.addLeafElement(t, e.elt("Task", t.start, t.start + t.content.length, [
                    e.elt("TaskMarker", t.start, t.start + 3)
                ].concat(_to_consumable_array(e.parser.parseInline(t.content.slice(3), t.start + 3))))), !0;
            }
        }
    ]);
    return Ue;
}();
var _e = {
    defineNodes: [
        {
            name: "Task",
            block: !0,
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.list
        },
        {
            name: "TaskMarker",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.atom
        }
    ],
    parseBlock: [
        {
            name: "TaskList",
            leaf: function(e, t) {
                return /^\[[ xX]\][ \t]/.test(t.content) && "ListItem" == e.parentType().name ? new Ue : null;
            },
            after: "SetextHeading"
        }
    ]
}, Qe = RegExp("(www\\.)|(https?:\\/\\/)|([\\w.+-]+@)|(mailto:|xmpp:)", "gy"), Ze = RegExp("[\\w-]+(\\.[\\w-]+)+(\\/[^\\s<]*)?", "gy"), Ge = /[\w-]+\.[\w-]+($|\/)/, Ve = RegExp("[\\w.+-]+@[\\w-]+(\\.[\\w.-]+)+", "gy"), Ke = RegExp("\\/[a-zA-Z\\d@.]+", "gy");
function Je(e, t, n, r) {
    var _$s = 0;
    for(var _$i = t; _$i < n; _$i++)e[_$i] == r && _$s++;
    return _$s;
}
function We(e, t) {
    Ve.lastIndex = t;
    var _$n = Ve.exec(e);
    if (!_$n) return -1;
    var _$r = _$n[0][_$n[0].length - 1];
    return "_" == _$r || "-" == _$r ? -1 : t + _$n[0].length - ("." == _$r ? 1 : 0);
}
var Ye = [
    je,
    _e,
    ze,
    {
        parseInline: [
            {
                name: "Autolink",
                parse: function parse(e, t, n) {
                    var _$r = n - e.offset;
                    Qe.lastIndex = _$r;
                    var _$s = Qe.exec(e.text), _$i = -1;
                    if (!_$s) return -1;
                    if (_$s[1] || _$s[2]) {
                        if (_$i = function(e, t) {
                            Ze.lastIndex = t;
                            var _$n = Ze.exec(e);
                            if (!_$n || Ge.exec(_$n[0])[0].indexOf("_") > -1) return -1;
                            var _$r = t + _$n[0].length;
                            for(;;){
                                var _$n1 = void 0, _$s = e[_$r - 1];
                                if (/[?!.,:*_~]/.test(_$s) || ")" == _$s && Je(e, t, _$r, ")") > Je(e, t, _$r, "(")) _$r--;
                                else {
                                    if (";" != _$s || !(_$n1 = /&(?:#\d+|#x[a-f\d]+|\w+);$/.exec(e.slice(t, _$r)))) break;
                                    _$r = t + _$n1.index;
                                }
                            }
                            return _$r;
                        }(e.text, _$r + _$s[0].length), _$i > -1 && e.hasOpenLink) {
                            _$i = _$r + /([^\[\]]|\[[^\]]*\])*/.exec(e.text.slice(_$r, _$i))[0].length;
                        }
                    } else _$s[3] ? _$i = We(e.text, _$r) : (_$i = We(e.text, _$r + _$s[0].length), _$i > -1 && "xmpp:" == _$s[0] && (Ke.lastIndex = _$i, _$s = Ke.exec(e.text), _$s && (_$i = _$s.index + _$s[0].length)));
                    return _$i < 0 ? -1 : (e.addElement(e.elt("URL", n, _$i + e.offset)), _$i + e.offset);
                }
            }
        ]
    }
];
function et(e, t, n) {
    return function(r, s, i) {
        if (s != e || r.char(i + 1) == e) return -1;
        var o = [
            r.elt(n, i, i + 1)
        ];
        for(var _$s = i + 1; _$s < r.end; _$s++){
            var a = r.char(_$s);
            if (a == e) return r.addElement(r.elt(t, i, _$s + 1, o.concat(r.elt(n, _$s, _$s + 1))));
            if (92 == a && o.push(r.elt("Escape", _$s, 2 + _$s++)), N(a)) break;
        }
        return -1;
    };
}
var tt = {
    defineNodes: [
        {
            name: "Superscript",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.special(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content)
        },
        {
            name: "SuperscriptMark",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction
        }
    ],
    parseInline: [
        {
            name: "Superscript",
            parse: et(94, "Superscript", "SuperscriptMark")
        }
    ]
}, nt = {
    defineNodes: [
        {
            name: "Subscript",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.special(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content)
        },
        {
            name: "SubscriptMark",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction
        }
    ],
    parseInline: [
        {
            name: "Subscript",
            parse: et(126, "Subscript", "SubscriptMark")
        }
    ]
}, rt = {
    defineNodes: [
        {
            name: "Emoji",
            style: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.character
        }
    ],
    parseInline: [
        {
            name: "Emoji",
            parse: function parse(e, t, n) {
                var _$r;
                return 58 == t && (_$r = /^[a-zA-Z_0-9]+:/.exec(e.slice(n + 1, e.end))) ? e.addElement(e.elt("Emoji", n, n + 1 + _$r[0].length)) : -1;
            }
        }
    ]
}, st = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.z)({
    commentTokens: {
        block: {
            open: "\x3c!--",
            close: "--\x3e"
        }
    }
}), it = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.l, ot = Oe.configure({
    props: [
        _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.e.add(function(e) {
            return !e.is("Block") || e.is("Document") || null != at(e) ? void 0 : function(e, t) {
                return {
                    from: t.doc.lineAt(e.from).to,
                    to: e.to
                };
            };
        }),
        it.add(at),
        _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.i.add({
            Document: function() {
                return null;
            }
        }),
        _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.G.add({
            Document: st
        })
    ]
});
function at(e) {
    var _$t = /^(?:ATX|Setext)Heading(\d)$/.exec(e.name);
    return _$t ? +_$t[1] : void 0;
}
function lt(e, t) {
    var _$n = e;
    for(;;){
        var _$e = void 0, _$r = _$n.nextSibling;
        if (!_$r || null != (_$e = at(_$r.type)) && _$e <= t) break;
        _$n = _$r;
    }
    return _$n.to;
}
var ht = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.A.of(function(e, t, n) {
    for(var _$r = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.q)(e).resolveInner(n, -1); _$r && !(_$r.from < t); _$r = _$r.parent){
        var _$e = _$r.type.prop(it);
        if (null == _$e) continue;
        var _$t = lt(_$r, _$e);
        if (_$t > n) return {
            from: n,
            to: _$t
        };
    }
    return null;
});
function ft(e) {
    return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.o(st, e, [
        ht
    ], "markdown");
}
var ct = ft(ot), ut = ft(ot.configure([
    Ye,
    nt,
    tt,
    rt
]));
var dt = /*#__PURE__*/ function() {
    "use strict";
    function dt(e, t, n, r, s, i, o) {
        _class_call_check(this, dt);
        this.node = e, this.from = t, this.to = n, this.spaceBefore = r, this.spaceAfter = s, this.type = i, this.item = o;
    }
    _create_class(dt, [
        {
            key: "blank",
            value: function blank(e) {
                var _$t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
                var _$n = this.spaceBefore + ("Blockquote" == this.node.name ? ">" : "");
                if (null != e) {
                    for(; _$n.length < e;)_$n += " ";
                    return _$n;
                }
                for(var _$e = this.to - this.from - _$n.length - this.spaceAfter.length; _$e > 0; _$e--)_$n += " ";
                return _$n + (_$t ? this.spaceAfter : "");
            }
        },
        {
            key: "marker",
            value: function marker(e, t) {
                var _$n = "OrderedList" == this.node.name ? String(+mt(this.item, e)[2] + t) : "";
                return this.spaceBefore + _$n + this.type + this.spaceAfter;
            }
        }
    ]);
    return dt;
}();
function pt(e, t) {
    var _$n = [];
    for(var _$t = e; _$t && "Document" != _$t.name; _$t = _$t.parent)"ListItem" != _$t.name && "Blockquote" != _$t.name && "FencedCode" != _$t.name || _$n.push(_$t);
    var _$r = [];
    for(var _$e = _$n.length - 1; _$e >= 0; _$e--){
        var _$s = void 0, _$i = _$n[_$e], o = t.lineAt(_$i.from), a = _$i.from - o.from;
        if ("FencedCode" == _$i.name) _$r.push(new dt(_$i, a, a, "", "", "", null));
        else if ("Blockquote" == _$i.name && (_$s = /^ *>( ?)/.exec(o.text.slice(a)))) _$r.push(new dt(_$i, a, a + _$s[0].length, "", _$s[1], ">", null));
        else if ("ListItem" == _$i.name && "OrderedList" == _$i.parent.name && (_$s = /^( *)\d+([.)])( *)/.exec(o.text.slice(a)))) {
            var _$e1 = _$s[3], _$t1 = _$s[0].length;
            _$e1.length >= 4 && (_$e1 = _$e1.slice(0, _$e1.length - 4), _$t1 -= 4), _$r.push(new dt(_$i.parent, a, a + _$t1, _$s[1], _$e1, _$s[2], _$i));
        } else if ("ListItem" == _$i.name && "BulletList" == _$i.parent.name && (_$s = /^( *)([-+*])( {1,4}\[[ xX]\])?( +)/.exec(o.text.slice(a)))) {
            var _$e2 = _$s[4], _$t2 = _$s[0].length;
            _$e2.length > 4 && (_$e2 = _$e2.slice(0, _$e2.length - 4), _$t2 -= 4);
            var _$n1 = _$s[2];
            _$s[3] && (_$n1 += _$s[3].replace(/[xX]/, " ")), _$r.push(new dt(_$i.parent, a, a + _$t2, _$s[1], _$e2, _$n1, _$i));
        }
    }
    return _$r;
}
function mt(e, t) {
    return /^(\s*)(\d+)(?=[.)])/.exec(t.sliceString(e.from, e.from + 10));
}
function gt(e, t, n) {
    var _$r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
    for(var _$s = -1, _$i = e;;){
        if ("ListItem" == _$i.name) {
            var _$e = mt(_$i, t), o = +_$e[2];
            if (_$s >= 0) {
                if (o != _$s + 1) return;
                n.push({
                    from: _$i.from + _$e[1].length,
                    to: _$i.from + _$e[0].length,
                    insert: String(_$s + 2 + _$r)
                });
            }
            _$s = o;
        }
        var _$e1 = _$i.nextSibling;
        if (!_$e1) break;
        _$i = _$e1;
    }
}
function kt(e, t) {
    var _$n = /^[ \t]*/.exec(e)[0].length;
    if (!_$n || "\t" != t.facet(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.B)) return e;
    var _$r = "";
    for(var _$t = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.u)(e, 4, _$n); _$t > 0;)_$t >= 4 ? (_$r += "\t", _$t -= 4) : (_$r += " ", _$t--);
    return _$r + e.slice(_$n);
}
var xt = function(param) {
    var _$e = param.state, _$t = param.dispatch;
    var _$n = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.q)(_$e), _$r = _$e.doc, _$s = null, _$i = _$e.changeByRange(function(t) {
        if (!t.empty || !ut.isActiveAt(_$e, t.from)) return _$s = {
            range: t
        };
        var _$i = t.from, o = _$r.lineAt(_$i), a = pt(_$n.resolveInner(_$i, -1), _$r);
        for(; a.length && a[a.length - 1].from > _$i - o.from;)a.pop();
        if (!a.length) return _$s = {
            range: t
        };
        var l = a[a.length - 1];
        if (l.to - l.spaceAfter.length > _$i - o.from) return _$s = {
            range: t
        };
        var h = _$i >= l.to - l.spaceAfter.length && !/\S/.test(o.text.slice(l.to));
        if (l.item && h) {
            if (l.node.firstChild.to >= _$i || o.from > 0 && !/[^\s>]/.test(_$r.lineAt(o.from - 1).text)) {
                var _$e1, _$t = a.length > 1 ? a[a.length - 2] : null, _$n1 = "";
                _$t && _$t.item ? (_$e1 = o.from + _$t.from, _$n1 = _$t.marker(_$r, 1)) : _$e1 = o.from + (_$t ? _$t.to : 0);
                var _$s1 = [
                    {
                        from: _$e1,
                        to: _$i,
                        insert: _$n1
                    }
                ];
                return "OrderedList" == l.node.name && gt(l.item, _$r, _$s1, -2), _$t && "OrderedList" == _$t.node.name && gt(_$t.item, _$r, _$s1), {
                    range: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.r.cursor(_$e1 + _$n1.length),
                    changes: _$s1
                };
            }
            {
                var _$t1 = "";
                for(var _$e2 = 0, _$n2 = a.length - 2; _$e2 <= _$n2; _$e2++)_$t1 += a[_$e2].blank(_$e2 < _$n2 ? (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.u)(o.text, 4, a[_$e2 + 1].from) - _$t1.length : null, _$e2 < _$n2);
                return _$t1 = kt(_$t1, _$e), {
                    range: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.r.cursor(_$i + _$t1.length + 1),
                    changes: {
                        from: o.from,
                        insert: _$t1 + _$e.lineBreak
                    }
                };
            }
        }
        if ("Blockquote" == l.node.name && h && o.from) {
            var _$n3 = _$r.lineAt(o.from - 1), _$s2 = />\s*$/.exec(_$n3.text);
            if (_$s2 && _$s2.index == l.from) {
                var _$r1 = _$e.changes([
                    {
                        from: _$n3.from + _$s2.index,
                        to: _$n3.to
                    },
                    {
                        from: o.from + l.from,
                        to: o.to
                    }
                ]);
                return {
                    range: t.map(_$r1),
                    changes: _$r1
                };
            }
        }
        var _$f = [];
        "OrderedList" == l.node.name && gt(l.item, _$r, _$f);
        var d = l.item && l.item.from < o.from, p = "";
        if (!d || /^[\s\d.)\-+*>]*/.exec(o.text)[0].length >= l.to) for(var _$e3 = 0, _$t2 = a.length - 1; _$e3 <= _$t2; _$e3++)p += _$e3 != _$t2 || d ? a[_$e3].blank(_$e3 < _$t2 ? (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.u)(o.text, 4, a[_$e3 + 1].from) - p.length : null) : a[_$e3].marker(_$r, 1);
        var m = _$i;
        for(; m > o.from && /\s/.test(o.text.charAt(m - o.from - 1));)m--;
        return p = kt(p, _$e), _$f.push({
            from: m,
            to: _$i,
            insert: _$e.lineBreak + p
        }), {
            range: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.r.cursor(m + p.length + 1),
            changes: _$f
        };
    });
    return !_$s && (_$t(_$e.update(_$i, {
        scrollIntoView: !0,
        userEvent: "input"
    })), !0);
};
function bt(e) {
    return "QuoteMark" == e.name || "ListMark" == e.name;
}
var Lt = function(param) {
    var _$e = param.state, _$t = param.dispatch;
    var _$n = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.q)(_$e), _$r = null, _$s = _$e.changeByRange(function(t) {
        var _$s = t.from, _$i = _$e.doc;
        if (t.empty && ut.isActiveAt(_$e, t.from)) {
            var _$t = _$i.lineAt(_$s), _$r1 = pt(function(e, t) {
                var _$n = e.resolveInner(t, -1), _$r = t;
                bt(_$n) && (_$r = _$n.from, _$n = _$n.parent);
                for(var _$e; _$e = _$n.childBefore(_$r);)if (bt(_$e)) _$r = _$e.from;
                else {
                    if ("OrderedList" != _$e.name && "BulletList" != _$e.name) break;
                    _$n = _$e.lastChild, _$r = _$n.to;
                }
                return _$n;
            }(_$n, _$s), _$i);
            if (_$r1.length) {
                var _$n1 = _$r1[_$r1.length - 1], _$i1 = _$n1.to - _$n1.spaceAfter.length + (_$n1.spaceAfter ? 1 : 0);
                if (_$s - _$t.from > _$i1 && !/\S/.test(_$t.text.slice(_$i1, _$s - _$t.from))) return {
                    range: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.r.cursor(_$t.from + _$i1),
                    changes: {
                        from: _$t.from + _$i1,
                        to: _$s
                    }
                };
                if (_$s - _$t.from == _$i1 && (!_$n1.item || _$t.from <= _$n1.item.from || !/\S/.test(_$t.text.slice(0, _$n1.to)))) {
                    var _$r2 = _$t.from + _$n1.from;
                    if (_$n1.item && _$n1.node.from < _$n1.item.from && /\S/.test(_$t.text.slice(_$n1.from, _$n1.to))) {
                        var _$s1 = _$n1.blank((0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.u)(_$t.text, 4, _$n1.to) - (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.u)(_$t.text, 4, _$n1.from));
                        return _$r2 == _$t.from && (_$s1 = kt(_$s1, _$e)), {
                            range: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.r.cursor(_$r2 + _$s1.length),
                            changes: {
                                from: _$r2,
                                to: _$t.from + _$n1.to,
                                insert: _$s1
                            }
                        };
                    }
                    if (_$r2 < _$s) return {
                        range: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.r.cursor(_$r2),
                        changes: {
                            from: _$r2,
                            to: _$s
                        }
                    };
                }
            }
        }
        return _$r = {
            range: t
        };
    });
    return !_$r && (_$t(_$e.update(_$s, {
        scrollIntoView: !0,
        userEvent: "delete"
    })), !0);
}, St = [
    {
        key: "Enter",
        run: xt
    },
    {
        key: "Backspace",
        run: Lt
    }
], Ct = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.h)({
    matchClosingTags: !1
});
function wt() {
    var _$e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$t = _$e.codeLanguages, _$n = _$e.defaultCodeLanguage, tmp = _$e.addKeymap, _$r = tmp === void 0 ? !0 : tmp, tmp1 = _$e.base, _ref = tmp1 === void 0 ? ct : tmp1, _$s = _ref.parser, tmp2 = _$e.completeHTMLTags, _$i = tmp2 === void 0 ? !0 : tmp2;
    if (!_instanceof(_$s, ae)) throw new RangeError("Base parser provided to `markdown` should be a Markdown parser");
    var o, a = _$e.extensions ? [
        _$e.extensions
    ] : [], h = [
        Ct.support
    ];
    _instanceof(_$n, _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a) ? (h.push(_$n.support), o = _$n.language) : _$n && (o = _$n);
    var f = _$t || o ? (c = _$t, u = o, function(e) {
        if (e && c) {
            var _$t = null;
            if (e = /\S*/.exec(e)[0], _$t = "function" == typeof c ? c(e) : _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.D.matchLanguageName(c, e, !0), _instanceof(_$t, _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.D)) return _$t.support ? _$t.support.language.parser : _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.F.getSkippingParser(_$t.load());
            if (_$t) return _$t.parser;
        }
        return u ? u.parser : null;
    }) : void 0;
    var c, u;
    a.push(function(e) {
        var _$t = e.codeParser, _$n = e.htmlParser, _$r = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(function(e, r) {
            var _$s = e.type.id;
            if (!_$t || _$s != E.CodeBlock && _$s != E.FencedCode) {
                if (_$n && (_$s == E.HTMLBlock || _$s == E.HTMLTag)) return {
                    parser: _$n,
                    overlay: Re(e.node, e.from, e.to)
                };
            } else {
                var _$n1 = "";
                if (_$s == E.FencedCode) {
                    var _$t1 = e.node.getChild(E.CodeInfo);
                    _$t1 && (_$n1 = r.read(_$t1.from, _$t1.to));
                }
                var _$i = _$t(_$n1);
                if (_$i) return {
                    parser: _$i,
                    overlay: function(e) {
                        return e.type.id == E.CodeText;
                    }
                };
            }
            return null;
        });
        return {
            wrap: _$r
        };
    }({
        codeParser: f,
        htmlParser: Ct.language.parser
    })), _$r && h.push(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.v.high(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.w.of(St)));
    var g = ft(_$s.configure(a));
    return _$i && h.push(g.data.of({
        autocomplete: yt
    })), new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a(g, h);
}
function yt(e) {
    var _$t = e.state, _$n = e.pos, _$r = /<[:\-\.\w\u00b7-\uffff]*$/.exec(_$t.sliceDoc(_$n - 25, _$n));
    if (!_$r) return null;
    var _$s = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.q)(_$t).resolveInner(_$n, -1);
    for(; _$s && !_$s.type.isTop;){
        if ("CodeBlock" == _$s.name || "FencedCode" == _$s.name || "ProcessingInstructionBlock" == _$s.name || "CommentBlock" == _$s.name || "Link" == _$s.name || "Image" == _$s.name) return null;
        _$s = _$s.parent;
    }
    return {
        from: _$n - _$r[0].length,
        to: _$n,
        options: It(),
        validFor: /^<[:\-\.\w\u00b7-\uffff]*$/
    };
}
var At = null;
function It() {
    if (At) return At;
    var _$e = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.x)(new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.C(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.y.create({
        extensions: Ct
    }), 0, !0));
    return At = _$e ? _$e.options : [];
}
 //# sourceMappingURL=markdown.js.map


}),

}]);