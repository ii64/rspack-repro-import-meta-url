"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_codemirror_next_chunk_legacy_js"], {
"./third_party/codemirror.next/chunk/legacy.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  a: function() { return L; },
  b: function() { return Ee; },
  c: function() { return b; },
  d: function() { return st; },
  g: function() { return yt; },
  s: function() { return qt; }
});
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var e = [
    "false",
    "nil",
    "true"
], t = [
    ".",
    "catch",
    "def",
    "do",
    "if",
    "monitor-enter",
    "monitor-exit",
    "new",
    "quote",
    "recur",
    "set!",
    "throw",
    "try",
    "var"
], n = [
    "*",
    "*'",
    "*1",
    "*2",
    "*3",
    "*agent*",
    "*allow-unresolved-vars*",
    "*assert*",
    "*clojure-version*",
    "*command-line-args*",
    "*compile-files*",
    "*compile-path*",
    "*compiler-options*",
    "*data-readers*",
    "*default-data-reader-fn*",
    "*e",
    "*err*",
    "*file*",
    "*flush-on-newline*",
    "*fn-loader*",
    "*in*",
    "*math-context*",
    "*ns*",
    "*out*",
    "*print-dup*",
    "*print-length*",
    "*print-level*",
    "*print-meta*",
    "*print-namespace-maps*",
    "*print-readably*",
    "*read-eval*",
    "*reader-resolver*",
    "*source-path*",
    "*suppress-read*",
    "*unchecked-math*",
    "*use-context-classloader*",
    "*verbose-defrecords*",
    "*warn-on-reflection*",
    "+",
    "+'",
    "-",
    "-'",
    "->",
    "->>",
    "->ArrayChunk",
    "->Eduction",
    "->Vec",
    "->VecNode",
    "->VecSeq",
    "-cache-protocol-fn",
    "-reset-methods",
    "..",
    "/",
    "<",
    "<=",
    "=",
    "==",
    ">",
    ">=",
    "EMPTY-NODE",
    "Inst",
    "StackTraceElement->vec",
    "Throwable->map",
    "accessor",
    "aclone",
    "add-classpath",
    "add-watch",
    "agent",
    "agent-error",
    "agent-errors",
    "aget",
    "alength",
    "alias",
    "all-ns",
    "alter",
    "alter-meta!",
    "alter-var-root",
    "amap",
    "ancestors",
    "and",
    "any?",
    "apply",
    "areduce",
    "array-map",
    "as->",
    "aset",
    "aset-boolean",
    "aset-byte",
    "aset-char",
    "aset-double",
    "aset-float",
    "aset-int",
    "aset-long",
    "aset-short",
    "assert",
    "assoc",
    "assoc!",
    "assoc-in",
    "associative?",
    "atom",
    "await",
    "await-for",
    "await1",
    "bases",
    "bean",
    "bigdec",
    "bigint",
    "biginteger",
    "binding",
    "bit-and",
    "bit-and-not",
    "bit-clear",
    "bit-flip",
    "bit-not",
    "bit-or",
    "bit-set",
    "bit-shift-left",
    "bit-shift-right",
    "bit-test",
    "bit-xor",
    "boolean",
    "boolean-array",
    "boolean?",
    "booleans",
    "bound-fn",
    "bound-fn*",
    "bound?",
    "bounded-count",
    "butlast",
    "byte",
    "byte-array",
    "bytes",
    "bytes?",
    "case",
    "cast",
    "cat",
    "char",
    "char-array",
    "char-escape-string",
    "char-name-string",
    "char?",
    "chars",
    "chunk",
    "chunk-append",
    "chunk-buffer",
    "chunk-cons",
    "chunk-first",
    "chunk-next",
    "chunk-rest",
    "chunked-seq?",
    "class",
    "class?",
    "clear-agent-errors",
    "clojure-version",
    "coll?",
    "comment",
    "commute",
    "comp",
    "comparator",
    "compare",
    "compare-and-set!",
    "compile",
    "complement",
    "completing",
    "concat",
    "cond",
    "cond->",
    "cond->>",
    "condp",
    "conj",
    "conj!",
    "cons",
    "constantly",
    "construct-proxy",
    "contains?",
    "count",
    "counted?",
    "create-ns",
    "create-struct",
    "cycle",
    "dec",
    "dec'",
    "decimal?",
    "declare",
    "dedupe",
    "default-data-readers",
    "definline",
    "definterface",
    "defmacro",
    "defmethod",
    "defmulti",
    "defn",
    "defn-",
    "defonce",
    "defprotocol",
    "defrecord",
    "defstruct",
    "deftype",
    "delay",
    "delay?",
    "deliver",
    "denominator",
    "deref",
    "derive",
    "descendants",
    "destructure",
    "disj",
    "disj!",
    "dissoc",
    "dissoc!",
    "distinct",
    "distinct?",
    "doall",
    "dorun",
    "doseq",
    "dosync",
    "dotimes",
    "doto",
    "double",
    "double-array",
    "double?",
    "doubles",
    "drop",
    "drop-last",
    "drop-while",
    "eduction",
    "empty",
    "empty?",
    "ensure",
    "ensure-reduced",
    "enumeration-seq",
    "error-handler",
    "error-mode",
    "eval",
    "even?",
    "every-pred",
    "every?",
    "ex-data",
    "ex-info",
    "extend",
    "extend-protocol",
    "extend-type",
    "extenders",
    "extends?",
    "false?",
    "ffirst",
    "file-seq",
    "filter",
    "filterv",
    "find",
    "find-keyword",
    "find-ns",
    "find-protocol-impl",
    "find-protocol-method",
    "find-var",
    "first",
    "flatten",
    "float",
    "float-array",
    "float?",
    "floats",
    "flush",
    "fn",
    "fn?",
    "fnext",
    "fnil",
    "for",
    "force",
    "format",
    "frequencies",
    "future",
    "future-call",
    "future-cancel",
    "future-cancelled?",
    "future-done?",
    "future?",
    "gen-class",
    "gen-interface",
    "gensym",
    "get",
    "get-in",
    "get-method",
    "get-proxy-class",
    "get-thread-bindings",
    "get-validator",
    "group-by",
    "halt-when",
    "hash",
    "hash-combine",
    "hash-map",
    "hash-ordered-coll",
    "hash-set",
    "hash-unordered-coll",
    "ident?",
    "identical?",
    "identity",
    "if-let",
    "if-not",
    "if-some",
    "ifn?",
    "import",
    "in-ns",
    "inc",
    "inc'",
    "indexed?",
    "init-proxy",
    "inst-ms",
    "inst-ms*",
    "inst?",
    "instance?",
    "int",
    "int-array",
    "int?",
    "integer?",
    "interleave",
    "intern",
    "interpose",
    "into",
    "into-array",
    "ints",
    "io!",
    "isa?",
    "iterate",
    "iterator-seq",
    "juxt",
    "keep",
    "keep-indexed",
    "key",
    "keys",
    "keyword",
    "keyword?",
    "last",
    "lazy-cat",
    "lazy-seq",
    "let",
    "letfn",
    "line-seq",
    "list",
    "list*",
    "list?",
    "load",
    "load-file",
    "load-reader",
    "load-string",
    "loaded-libs",
    "locking",
    "long",
    "long-array",
    "longs",
    "loop",
    "macroexpand",
    "macroexpand-1",
    "make-array",
    "make-hierarchy",
    "map",
    "map-entry?",
    "map-indexed",
    "map?",
    "mapcat",
    "mapv",
    "max",
    "max-key",
    "memfn",
    "memoize",
    "merge",
    "merge-with",
    "meta",
    "method-sig",
    "methods",
    "min",
    "min-key",
    "mix-collection-hash",
    "mod",
    "munge",
    "name",
    "namespace",
    "namespace-munge",
    "nat-int?",
    "neg-int?",
    "neg?",
    "newline",
    "next",
    "nfirst",
    "nil?",
    "nnext",
    "not",
    "not-any?",
    "not-empty",
    "not-every?",
    "not=",
    "ns",
    "ns-aliases",
    "ns-imports",
    "ns-interns",
    "ns-map",
    "ns-name",
    "ns-publics",
    "ns-refers",
    "ns-resolve",
    "ns-unalias",
    "ns-unmap",
    "nth",
    "nthnext",
    "nthrest",
    "num",
    "number?",
    "numerator",
    "object-array",
    "odd?",
    "or",
    "parents",
    "partial",
    "partition",
    "partition-all",
    "partition-by",
    "pcalls",
    "peek",
    "persistent!",
    "pmap",
    "pop",
    "pop!",
    "pop-thread-bindings",
    "pos-int?",
    "pos?",
    "pr",
    "pr-str",
    "prefer-method",
    "prefers",
    "primitives-classnames",
    "print",
    "print-ctor",
    "print-dup",
    "print-method",
    "print-simple",
    "print-str",
    "printf",
    "println",
    "println-str",
    "prn",
    "prn-str",
    "promise",
    "proxy",
    "proxy-call-with-super",
    "proxy-mappings",
    "proxy-name",
    "proxy-super",
    "push-thread-bindings",
    "pvalues",
    "qualified-ident?",
    "qualified-keyword?",
    "qualified-symbol?",
    "quot",
    "rand",
    "rand-int",
    "rand-nth",
    "random-sample",
    "range",
    "ratio?",
    "rational?",
    "rationalize",
    "re-find",
    "re-groups",
    "re-matcher",
    "re-matches",
    "re-pattern",
    "re-seq",
    "read",
    "read-line",
    "read-string",
    "reader-conditional",
    "reader-conditional?",
    "realized?",
    "record?",
    "reduce",
    "reduce-kv",
    "reduced",
    "reduced?",
    "reductions",
    "ref",
    "ref-history-count",
    "ref-max-history",
    "ref-min-history",
    "ref-set",
    "refer",
    "refer-clojure",
    "reify",
    "release-pending-sends",
    "rem",
    "remove",
    "remove-all-methods",
    "remove-method",
    "remove-ns",
    "remove-watch",
    "repeat",
    "repeatedly",
    "replace",
    "replicate",
    "require",
    "reset!",
    "reset-meta!",
    "reset-vals!",
    "resolve",
    "rest",
    "restart-agent",
    "resultset-seq",
    "reverse",
    "reversible?",
    "rseq",
    "rsubseq",
    "run!",
    "satisfies?",
    "second",
    "select-keys",
    "send",
    "send-off",
    "send-via",
    "seq",
    "seq?",
    "seqable?",
    "seque",
    "sequence",
    "sequential?",
    "set",
    "set-agent-send-executor!",
    "set-agent-send-off-executor!",
    "set-error-handler!",
    "set-error-mode!",
    "set-validator!",
    "set?",
    "short",
    "short-array",
    "shorts",
    "shuffle",
    "shutdown-agents",
    "simple-ident?",
    "simple-keyword?",
    "simple-symbol?",
    "slurp",
    "some",
    "some->",
    "some->>",
    "some-fn",
    "some?",
    "sort",
    "sort-by",
    "sorted-map",
    "sorted-map-by",
    "sorted-set",
    "sorted-set-by",
    "sorted?",
    "special-symbol?",
    "spit",
    "split-at",
    "split-with",
    "str",
    "string?",
    "struct",
    "struct-map",
    "subs",
    "subseq",
    "subvec",
    "supers",
    "swap!",
    "swap-vals!",
    "symbol",
    "symbol?",
    "sync",
    "tagged-literal",
    "tagged-literal?",
    "take",
    "take-last",
    "take-nth",
    "take-while",
    "test",
    "the-ns",
    "thread-bound?",
    "time",
    "to-array",
    "to-array-2d",
    "trampoline",
    "transduce",
    "transient",
    "tree-seq",
    "true?",
    "type",
    "unchecked-add",
    "unchecked-add-int",
    "unchecked-byte",
    "unchecked-char",
    "unchecked-dec",
    "unchecked-dec-int",
    "unchecked-divide-int",
    "unchecked-double",
    "unchecked-float",
    "unchecked-inc",
    "unchecked-inc-int",
    "unchecked-int",
    "unchecked-long",
    "unchecked-multiply",
    "unchecked-multiply-int",
    "unchecked-negate",
    "unchecked-negate-int",
    "unchecked-remainder-int",
    "unchecked-short",
    "unchecked-subtract",
    "unchecked-subtract-int",
    "underive",
    "unquote",
    "unquote-splicing",
    "unreduced",
    "unsigned-bit-shift-right",
    "update",
    "update-in",
    "update-proxy",
    "uri?",
    "use",
    "uuid?",
    "val",
    "vals",
    "var-get",
    "var-set",
    "var?",
    "vary-meta",
    "vec",
    "vector",
    "vector-of",
    "vector?",
    "volatile!",
    "volatile?",
    "vreset!",
    "vswap!",
    "when",
    "when-first",
    "when-let",
    "when-not",
    "when-some",
    "while",
    "with-bindings",
    "with-bindings*",
    "with-in-str",
    "with-loading-context",
    "with-local-vars",
    "with-meta",
    "with-open",
    "with-out-str",
    "with-precision",
    "with-redefs",
    "with-redefs-fn",
    "xml-seq",
    "zero?",
    "zipmap"
], r = m(e), o = m(t), a = m(n), i = m([
    "->",
    "->>",
    "as->",
    "binding",
    "bound-fn",
    "case",
    "catch",
    "comment",
    "cond",
    "cond->",
    "cond->>",
    "condp",
    "def",
    "definterface",
    "defmethod",
    "defn",
    "defmacro",
    "defprotocol",
    "defrecord",
    "defstruct",
    "deftype",
    "do",
    "doseq",
    "dotimes",
    "doto",
    "extend",
    "extend-protocol",
    "extend-type",
    "fn",
    "for",
    "future",
    "if",
    "if-let",
    "if-not",
    "if-some",
    "let",
    "letfn",
    "locking",
    "loop",
    "ns",
    "proxy",
    "reify",
    "struct-map",
    "some->",
    "some->>",
    "try",
    "when",
    "when-first",
    "when-let",
    "when-not",
    "when-some",
    "while",
    "with-bindings",
    "with-bindings*",
    "with-in-str",
    "with-loading-context",
    "with-local-vars",
    "with-meta",
    "with-open",
    "with-out-str",
    "with-precision",
    "with-redefs",
    "with-redefs-fn"
]), l = /^(?:[\\\[\]\s"(),;@^`{}~]|$)/, s = /^(?:[+\-]?\d+(?:(?:N|(?:[eE][+\-]?\d+))|(?:\.?\d*(?:M|(?:[eE][+\-]?\d+))?)|\/\d+|[xX][0-9a-fA-F]+|r[0-9a-zA-Z]+)?(?=[\\\[\]\s"#'(),;@^`{}~]|$))/, c = /^(?:\\(?:backspace|formfeed|newline|return|space|tab|o[0-7]{3}|u[0-9A-Fa-f]{4}|x[0-9A-Fa-f]{4}|.)?(?=[\\\[\]\s"(),;@^`{}~]|$))/, d = /^(?:(?:[^\\\/\[\]\d\s"#'(),;@^`{}~.][^\\\[\]\s"(),;@^`{}~.\/]*(?:\.[^\\\/\[\]\d\s"#'(),;@^`{}~.][^\\\[\]\s"(),;@^`{}~.\/]*)*\/)?(?:\/|[^\\\/\[\]\d\s"#'(),;@^`{}~][^\\\[\]\s"(),;@^`{}~]*)*(?=[\\\[\]\s"(),;@^`{}~]|$))/;
function u(e, t) {
    if (e.eatSpace() || e.eat(",")) return [
        "space",
        null
    ];
    if (e.match(s)) return [
        null,
        "number"
    ];
    if (e.match(c)) return [
        null,
        "string.special"
    ];
    if (e.eat(/^"/)) return (t.tokenize = p)(e, t);
    if (e.eat(/^[(\[{]/)) return [
        "open",
        "bracket"
    ];
    if (e.eat(/^[)\]}]/)) return [
        "close",
        "bracket"
    ];
    if (e.eat(/^;/)) return e.skipToEnd(), [
        "space",
        "comment"
    ];
    if (e.eat(/^[#'@^`~]/)) return [
        null,
        "meta"
    ];
    var n = e.match(d), i = n && n[0];
    return i ? "comment" === i && "(" === t.lastToken ? (t.tokenize = f)(e, t) : h(i, r) || ":" === i.charAt(0) ? [
        "symbol",
        "atom"
    ] : h(i, o) || h(i, a) ? [
        "symbol",
        "keyword"
    ] : "(" === t.lastToken ? [
        "symbol",
        "builtin"
    ] : [
        "symbol",
        "variable"
    ] : (e.next(), e.eatWhile(function(e) {
        return !h(e, l);
    }), [
        null,
        "error"
    ]);
}
function p(e, t) {
    for(var n, r = !1; n = e.next();){
        if ('"' === n && !r) {
            t.tokenize = u;
            break;
        }
        r = !r && "\\" === n;
    }
    return [
        null,
        "string"
    ];
}
function f(e, t) {
    for(var n, r = 1; n = e.next();)if (")" === n && r--, "(" === n && r++, 0 === r) {
        e.backUp(1), t.tokenize = u;
        break;
    }
    return [
        "space",
        "comment"
    ];
}
function m(e) {
    for(var t = {}, n = 0; n < e.length; ++n)t[e[n]] = !0;
    return t;
}
function h(e, t) {
    return _instanceof(t, RegExp) ? t.test(e) : _instanceof(t, Object) ? t.propertyIsEnumerable(e) : void 0;
}
var g = {
    name: "clojure",
    startState: function startState() {
        return {
            ctx: {
                prev: null,
                start: 0,
                indentTo: 0
            },
            lastToken: null,
            tokenize: u
        };
    },
    token: function token(e, t) {
        e.sol() && "number" != typeof t.ctx.indentTo && (t.ctx.indentTo = t.ctx.start + 1);
        var n = t.tokenize(e, t), r = n[0], o = n[1], a = e.current();
        return "space" !== r && ("(" === t.lastToken && null === t.ctx.indentTo ? "symbol" === r && h(a, i) ? t.ctx.indentTo = t.ctx.start + e.indentUnit : t.ctx.indentTo = "next" : "next" === t.ctx.indentTo && (t.ctx.indentTo = e.column()), t.lastToken = a), "open" === r ? t.ctx = {
            prev: t.ctx,
            start: e.column(),
            indentTo: null
        } : "close" === r && (t.ctx = t.ctx.prev || t.ctx), o;
    },
    indent: function indent(e) {
        var t = e.ctx.indentTo;
        return "number" == typeof t ? t : e.ctx.start + 1;
    },
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                '"'
            ]
        },
        commentTokens: {
            line: ";;"
        },
        autocomplete: [].concat(e, t, n)
    }
};
var b = Object.freeze({
    __proto__: null,
    clojure: g
}), y = "error";
function k(e) {
    return new RegExp("^((" + e.join(")|(") + "))\\b");
}
var w = /^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/, v = /^(?:[()\[\]{},:`=;]|\.\.?\.?)/, x = /^[_A-Za-z$][_A-Za-z$0-9]*/, _ = /^@[_A-Za-z$][_A-Za-z$0-9]*/, z = k([
    "and",
    "or",
    "not",
    "is",
    "isnt",
    "in",
    "instanceof",
    "typeof"
]), T = [
    "for",
    "while",
    "loop",
    "if",
    "unless",
    "else",
    "switch",
    "try",
    "catch",
    "finally",
    "class"
], S = k(T.concat([
    "break",
    "by",
    "continue",
    "debugger",
    "delete",
    "do",
    "in",
    "of",
    "new",
    "return",
    "then",
    "this",
    "@",
    "throw",
    "when",
    "until",
    "extends"
]));
T = k(T);
var N = /^('{3}|\"{3}|['\"])/, C = /^(\/{3}|\/)/, j = k([
    "Infinity",
    "NaN",
    "undefined",
    "null",
    "true",
    "false",
    "on",
    "off",
    "yes",
    "no"
]);
function q(e, t) {
    if (e.sol()) {
        null === t.scope.align && (t.scope.align = !1);
        var n = t.scope.offset;
        if (e.eatSpace()) {
            var r = e.indentation();
            return r > n && "coffee" == t.scope.type ? "indent" : r < n ? "dedent" : null;
        }
        n > 0 && P(e, t);
    }
    if (e.eatSpace()) return null;
    var o = e.peek();
    if (e.match("####")) return e.skipToEnd(), "comment";
    if (e.match("###")) return t.tokenize = O, t.tokenize(e, t);
    if ("#" === o) return e.skipToEnd(), "comment";
    if (e.match(/^-?[0-9\.]/, !1)) {
        var a = !1;
        if (e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i) && (a = !0), e.match(/^-?\d+\.\d*/) && (a = !0), e.match(/^-?\.\d+/) && (a = !0), a) return "." == e.peek() && e.backUp(1), "number";
        var i = !1;
        if (e.match(/^-?0x[0-9a-f]+/i) && (i = !0), e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/) && (i = !0), e.match(/^-?0(?![\dx])/i) && (i = !0), i) return "number";
    }
    if (e.match(N)) return t.tokenize = E(e.current(), !1, "string"), t.tokenize(e, t);
    if (e.match(C)) {
        if ("/" != e.current() || e.match(/^.*\//, !1)) return t.tokenize = E(e.current(), !0, "string.special"), t.tokenize(e, t);
        e.backUp(1);
    }
    return e.match(w) || e.match(z) ? "operator" : e.match(v) ? "punctuation" : e.match(j) ? "atom" : e.match(_) || t.prop && e.match(x) ? "property" : e.match(S) ? "keyword" : e.match(x) ? "variable" : (e.next(), y);
}
function E(e, t, n) {
    return function(r, o) {
        for(; !r.eol();)if (r.eatWhile(/[^'"\/\\]/), r.eat("\\")) {
            if (r.next(), t && r.eol()) return n;
        } else {
            if (r.match(e)) return o.tokenize = q, n;
            r.eat(/['"\/]/);
        }
        return t && (o.tokenize = q), n;
    };
}
function O(e, t) {
    for(; !e.eol();){
        if (e.eatWhile(/[^#]/), e.match("###")) {
            t.tokenize = q;
            break;
        }
        e.eatWhile("#");
    }
    return "comment";
}
function D(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "coffee";
    for(var r = 0, o = !1, a = null, i = t.scope; i; i = i.prev)if ("coffee" === i.type || "}" == i.type) {
        r = i.offset + e.indentUnit;
        break;
    }
    "coffee" !== n ? (o = null, a = e.column() + e.current().length) : t.scope.align && (t.scope.align = !1), t.scope = {
        offset: r,
        type: n,
        prev: t.scope,
        align: o,
        alignOffset: a
    };
}
function P(e, t) {
    if (t.scope.prev) {
        if ("coffee" === t.scope.type) {
            for(var n = e.indentation(), r = !1, o = t.scope; o; o = o.prev)if (n === o.offset) {
                r = !0;
                break;
            }
            if (!r) return !0;
            for(; t.scope.prev && t.scope.offset !== n;)t.scope = t.scope.prev;
            return !1;
        }
        return t.scope = t.scope.prev, !1;
    }
}
var I = {
    name: "coffeescript",
    startState: function startState() {
        return {
            tokenize: q,
            scope: {
                offset: 0,
                type: "coffee",
                prev: null,
                align: !1
            },
            prop: !1,
            dedent: 0
        };
    },
    token: function token(e, t) {
        var n = null === t.scope.align && t.scope;
        n && e.sol() && (n.align = !1);
        var r = function(e, t) {
            var n = t.tokenize(e, t), r = e.current();
            "return" === r && (t.dedent = !0), (("->" === r || "=>" === r) && e.eol() || "indent" === n) && D(e, t);
            var o = "[({".indexOf(r);
            if (-1 !== o && D(e, t, "])}".slice(o, o + 1)), T.exec(r) && D(e, t), "then" == r && P(e, t), "dedent" === n && P(e, t)) return y;
            if (-1 !== (o = "])}".indexOf(r))) {
                for(; "coffee" == t.scope.type && t.scope.prev;)t.scope = t.scope.prev;
                t.scope.type == r && (t.scope = t.scope.prev);
            }
            return t.dedent && e.eol() && ("coffee" == t.scope.type && t.scope.prev && (t.scope = t.scope.prev), t.dedent = !1), "indent" == n || "dedent" == n ? null : n;
        }(e, t);
        return r && "comment" != r && (n && (n.align = !0), t.prop = "punctuation" == r && "." == e.current()), r;
    },
    indent: function indent(e, t) {
        if (e.tokenize != q) return 0;
        var n = e.scope, r = t && "])}".indexOf(t.charAt(0)) > -1;
        if (r) for(; "coffee" == n.type && n.prev;)n = n.prev;
        var o = r && n.type === t.charAt(0);
        return n.align ? n.alignOffset - (o ? 1 : 0) : (o ? n.prev : n).offset;
    },
    languageData: {
        commentTokens: {
            line: "#"
        }
    }
};
var L = Object.freeze({
    __proto__: null,
    coffeeScript: I
});
function A(e, t, n, r, o, a) {
    this.indented = e, this.column = t, this.type = n, this.info = r, this.align = o, this.prev = a;
}
function M(e, t, n, r) {
    var o = e.indented;
    return e.context && "statement" == e.context.type && "statement" != n && (o = e.context.indented), e.context = new A(o, t, n, r, null, e.context);
}
function F(e) {
    var t = e.context.type;
    return ")" != t && "]" != t && "}" != t || (e.indented = e.context.indented), e.context = e.context.prev;
}
function $(e, t, n) {
    return "variable" == t.prevToken || "type" == t.prevToken || !!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e.string.slice(0, n)) || !(!t.typeAtEndOfLine || e.column() != e.indentation()) || void 0;
}
function B(e) {
    for(;;){
        if (!e || "top" == e.type) return !0;
        if ("}" == e.type && "namespace" != e.prev.info) return !1;
        e = e.prev;
    }
}
function K(e) {
    var t, n, r = e.statementIndentUnit, o = e.dontAlignCalls, a = e.keywords || {}, i = e.types || {}, l = e.builtin || {}, s = e.blockKeywords || {}, c = e.defKeywords || {}, d = e.atoms || {}, u = e.hooks || {}, p = e.multiLineStrings, f = !1 !== e.indentStatements, _$m = !1 !== e.indentSwitch, h = e.namespaceSeparator, g = e.isPunctuationChar || /[\[\]{}\(\),;\:\.]/, b = e.numberStart || /[\d\.]/, y = e.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i, _$k = e.isOperatorChar || /[+\-*&%=<>!?|\/]/, w = e.isIdentifierChar || /[\w\$_\xa1-\uffff]/, v = e.isReservedIdentifier || !1;
    function x(e, r) {
        var o, f = e.next();
        if (u[f]) {
            var _$m = u[f](e, r);
            if (!1 !== _$m) return _$m;
        }
        if ('"' == f || "'" == f) return r.tokenize = (o = f, function(e, t) {
            for(var n, _$r = !1, a = !1; null != (n = e.next());){
                if (n == o && !_$r) {
                    a = !0;
                    break;
                }
                _$r = !_$r && "\\" == n;
            }
            return (a || !_$r && !p) && (t.tokenize = null), "string";
        }), r.tokenize(e, r);
        if (b.test(f)) {
            if (e.backUp(1), e.match(y)) return "number";
            e.next();
        }
        if (g.test(f)) return t = f, null;
        if ("/" == f) {
            if (e.eat("*")) return r.tokenize = _, _(e, r);
            if (e.eat("/")) return e.skipToEnd(), "comment";
        }
        if (_$k.test(f)) {
            for(; !e.match(/^\/[\/*]/, !1) && e.eat(_$k););
            return "operator";
        }
        if (e.eatWhile(w), h) for(; e.match(h);)e.eatWhile(w);
        var x = e.current();
        return U(a, x) ? (U(s, x) && (t = "newstatement"), U(c, x) && (n = !0), "keyword") : U(i, x) ? "type" : U(l, x) || v && v(x) ? (U(s, x) && (t = "newstatement"), "builtin") : U(d, x) ? "atom" : "variable";
    }
    function _(e, t) {
        for(var n, r = !1; n = e.next();){
            if ("/" == n && r) {
                t.tokenize = null;
                break;
            }
            r = "*" == n;
        }
        return "comment";
    }
    function z(t, n) {
        e.typeFirstDefinitions && t.eol() && B(n.context) && (n.typeAtEndOfLine = $(t, n, t.pos));
    }
    return {
        name: e.name,
        startState: function startState(e) {
            return {
                tokenize: null,
                context: new A(-e, 0, "top", null, !1),
                indented: 0,
                startOfLine: !0,
                prevToken: null
            };
        },
        token: function token(r, o) {
            var a = o.context;
            if (r.sol() && (null == a.align && (a.align = !1), o.indented = r.indentation(), o.startOfLine = !0), r.eatSpace()) return z(r, o), null;
            t = n = null;
            var i = (o.tokenize || x)(r, o);
            if ("comment" == i || "meta" == i) return i;
            if (null == a.align && (a.align = !0), ";" == t || ":" == t || "," == t && r.match(/^\s*(?:\/\/.*)?$/, !1)) for(; "statement" == o.context.type;)F(o);
            else if ("{" == t) M(o, r.column(), "}");
            else if ("[" == t) M(o, r.column(), "]");
            else if ("(" == t) M(o, r.column(), ")");
            else if ("}" == t) {
                for(; "statement" == a.type;)a = F(o);
                for("}" == a.type && (a = F(o)); "statement" == a.type;)a = F(o);
            } else t == a.type ? F(o) : f && (("}" == a.type || "top" == a.type) && ";" != t || "statement" == a.type && "newstatement" == t) && M(o, r.column(), "statement", r.current());
            if ("variable" == i && ("def" == o.prevToken || e.typeFirstDefinitions && $(r, o, r.start) && B(o.context) && r.match(/^\s*\(/, !1)) && (i = "def"), u.token) {
                var l = u.token(r, o, i);
                void 0 !== l && (i = l);
            }
            return "def" == i && !1 === e.styleDefs && (i = "variable"), o.startOfLine = !1, o.prevToken = n ? "def" : i || t, z(r, o), i;
        },
        indent: function indent(t, n, a) {
            if (t.tokenize != x && null != t.tokenize || t.typeAtEndOfLine && B(t.context)) return null;
            var i = t.context, l = n && n.charAt(0), s = l == i.type;
            if ("statement" == i.type && "}" == l && (i = i.prev), e.dontIndentStatements) for(; "statement" == i.type && e.dontIndentStatements.test(i.info);)i = i.prev;
            if (u.indent) {
                var c = u.indent(t, i, n, a.unit);
                if ("number" == typeof c) return c;
            }
            var d = i.prev && "switch" == i.prev.info;
            if (e.allmanIndentation && /[{(]/.test(l)) {
                for(; "top" != i.type && "}" != i.type;)i = i.prev;
                return i.indented;
            }
            return "statement" == i.type ? i.indented + ("{" == l ? 0 : r || a.unit) : !i.align || o && ")" == i.type ? ")" != i.type || s ? i.indented + (s ? 0 : a.unit) + (s || !d || /^(?:case|default)\b/.test(n) ? 0 : a.unit) : i.indented + (r || a.unit) : i.column + (s ? 0 : 1);
        },
        languageData: _object_spread({
            indentOnInput: _$m ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/,
            commentTokens: {
                line: "//",
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            autocomplete: Object.keys(a).concat(Object.keys(i)).concat(Object.keys(l)).concat(Object.keys(d))
        }, e.languageData)
    };
}
function R(e) {
    for(var t = {}, n = e.split(" "), r = 0; r < n.length; ++r)t[n[r]] = !0;
    return t;
}
function U(e, t) {
    return "function" == typeof e ? e(t) : e.propertyIsEnumerable(t);
}
var W = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran", V = "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq", Z = "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available", X = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT", G = R("int long char short double float unsigned signed void bool"), Y = R("SEL instancetype id Class Protocol BOOL");
function H(e) {
    return U(G, e) || /.+_t$/.test(e);
}
function Q(e) {
    return H(e) || U(Y, e);
}
var J = "case do else for if switch while struct enum union", ee = "struct enum union";
function te(e, t) {
    if (!t.startOfLine) return !1;
    for(var n, r = null; n = e.peek();){
        if ("\\" == n && e.match(/^.$/)) {
            r = te;
            break;
        }
        if ("/" == n && e.match(/^\/[\/\*]/, !1)) break;
        e.next();
    }
    return t.tokenize = r, "meta";
}
function ne(e, t) {
    return "type" == t.prevToken && "type";
}
function re(e) {
    return !(!e || e.length < 2) && "_" == e[0] && ("_" == e[1] || e[1] !== e[1].toLowerCase());
}
function oe(e) {
    return e.eatWhile(/[\w\.']/), "number";
}
function ae(e, t) {
    if (e.backUp(1), e.match(/^(?:R|u8R|uR|UR|LR)/)) {
        var n = e.match(/^"([^\s\\()]{0,16})\(/);
        return !!n && (t.cpp11RawStringDelim = n[1], t.tokenize = se, se(e, t));
    }
    return e.match(/^(?:u8|u|U|L)/) ? !!e.match(/^["']/, !1) && "string" : (e.next(), !1);
}
function ie(e) {
    var t = /(\w+)::~?(\w+)$/.exec(e);
    return t && t[1] == t[2];
}
function le(e, t) {
    for(var n; null != (n = e.next());)if ('"' == n && !e.eat('"')) {
        t.tokenize = null;
        break;
    }
    return "string";
}
function se(e, t) {
    var n = t.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
    return e.match(new RegExp(".*?\\)" + n + '"')) ? t.tokenize = null : e.skipToEnd(), "string";
}
var ce = K({
    name: "c",
    keywords: R(W),
    types: H,
    blockKeywords: R(J),
    defKeywords: R(ee),
    typeFirstDefinitions: !0,
    atoms: R("NULL true false"),
    isReservedIdentifier: re,
    hooks: {
        "#": te,
        "*": ne
    }
}), de = K({
    name: "cpp",
    keywords: R(W + " " + V),
    types: H,
    blockKeywords: R(J + " class try catch"),
    defKeywords: R(ee + " class namespace"),
    typeFirstDefinitions: !0,
    atoms: R("true false NULL nullptr"),
    dontIndentStatements: /^template$/,
    isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
    isReservedIdentifier: re,
    hooks: {
        "#": te,
        "*": ne,
        u: ae,
        U: ae,
        L: ae,
        R: ae,
        0: oe,
        1: oe,
        2: oe,
        3: oe,
        4: oe,
        5: oe,
        6: oe,
        7: oe,
        8: oe,
        9: oe,
        token: function token(e, t, n) {
            if ("variable" == n && "(" == e.peek() && (";" == t.prevToken || null == t.prevToken || "}" == t.prevToken) && ie(e.current())) return "def";
        }
    },
    namespaceSeparator: "::"
}), ue = K({
    name: "java",
    keywords: R("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"),
    types: R("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"),
    blockKeywords: R("catch class do else finally for if switch try while"),
    defKeywords: R("class interface enum @interface"),
    typeFirstDefinitions: !0,
    atoms: R("true false null"),
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    hooks: {
        "@": function(e) {
            return !e.match("interface", !1) && (e.eatWhile(/[\w\$_]/), "meta");
        },
        '"': function(e, t) {
            return !!e.match(/""$/) && (t.tokenize = fe, t.tokenize(e, t));
        }
    }
}), pe = K({
    name: "csharp",
    keywords: R("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"),
    types: R("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"),
    blockKeywords: R("catch class do else finally for foreach if struct switch try while"),
    defKeywords: R("class interface namespace record struct var"),
    typeFirstDefinitions: !0,
    atoms: R("true false null"),
    hooks: {
        "@": function(e, t) {
            return e.eat('"') ? (t.tokenize = le, le(e, t)) : (e.eatWhile(/[\w\$_]/), "meta");
        }
    }
});
function fe(e, t) {
    for(var n = !1; !e.eol();){
        if (!n && e.match('"""')) {
            t.tokenize = null;
            break;
        }
        n = "\\" == e.next() && !n;
    }
    return "string";
}
function me(e) {
    return function(t, n) {
        for(var r; r = t.next();){
            if ("*" == r && t.eat("/")) {
                if (1 == e) {
                    n.tokenize = null;
                    break;
                }
                return n.tokenize = me(e - 1), n.tokenize(t, n);
            }
            if ("/" == r && t.eat("*")) return n.tokenize = me(e + 1), n.tokenize(t, n);
        }
        return "comment";
    };
}
var he = K({
    name: "scala",
    keywords: R("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"),
    types: R("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"),
    multiLineStrings: !0,
    blockKeywords: R("catch class enum do else finally for forSome if match switch try while"),
    defKeywords: R("class enum def object package trait type val var"),
    atoms: R("true false null"),
    indentStatements: !1,
    indentSwitch: !1,
    isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
    hooks: {
        "@": function(e) {
            return e.eatWhile(/[\w\$_]/), "meta";
        },
        '"': function(e, t) {
            return !!e.match('""') && (t.tokenize = fe, t.tokenize(e, t));
        },
        "'": function(e) {
            return e.match(/^(\\[^'\s]+|[^\\'])'/) ? "character" : (e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom");
        },
        "=": function(e, t) {
            var n = t.context;
            return !("}" != n.type || !n.align || !e.eat(">")) && (t.context = new A(n.indented, n.column, n.type, n.info, null, n.prev), "operator");
        },
        "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = me(1), t.tokenize(e, t));
        }
    },
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                '"""'
            ]
        }
    }
});
var ge = K({
    name: "kotlin",
    keywords: R("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam"),
    types: R("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"),
    intendSwitch: !1,
    indentStatements: !1,
    multiLineStrings: !0,
    number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
    blockKeywords: R("catch class do else finally for if where try while enum"),
    defKeywords: R("class val var object interface fun"),
    atoms: R("true false null this"),
    hooks: {
        "@": function(e) {
            return e.eatWhile(/[\w\$_]/), "meta";
        },
        "*": function(e, t) {
            return "." == t.prevToken ? "variable" : "operator";
        },
        '"': function(e, t) {
            var n;
            return t.tokenize = (n = e.match('""'), function(e, t) {
                for(var r, o = !1, a = !1; !e.eol();){
                    if (!n && !o && e.match('"')) {
                        a = !0;
                        break;
                    }
                    if (n && e.match('"""')) {
                        a = !0;
                        break;
                    }
                    r = e.next(), !o && "$" == r && e.match("{") && e.skipTo("}"), o = !o && "\\" == r && !n;
                }
                return !a && n || (t.tokenize = null), "string";
            }), t.tokenize(e, t);
        },
        "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = me(1), t.tokenize(e, t));
        },
        indent: function indent(e, t, n, r) {
            var o = n && n.charAt(0);
            return "}" != e.prevToken && ")" != e.prevToken || "" != n ? "operator" == e.prevToken && "}" != n && "}" != e.context.type || "variable" == e.prevToken && "." == o || ("}" == e.prevToken || ")" == e.prevToken) && "." == o ? 2 * r + t.indented : t.align && "}" == t.type ? t.indented + (e.context.type == (n || "").charAt(0) ? 0 : r) : void 0 : e.indented;
        }
    },
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                '"""'
            ]
        }
    }
}), be = K({
    name: "shader",
    keywords: R("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"),
    types: R("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"),
    blockKeywords: R("for while do if else struct"),
    builtin: R("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"),
    atoms: R("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"),
    indentSwitch: !1,
    hooks: {
        "#": te
    }
}), ye = K({
    name: "nesc",
    keywords: R(W + " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"),
    types: H,
    blockKeywords: R(J),
    atoms: R("null true false"),
    hooks: {
        "#": te
    }
}), ke = K({
    name: "objectivec",
    keywords: R(W + " " + Z),
    types: Q,
    builtin: R(X),
    blockKeywords: R(J + " @synthesize @try @catch @finally @autoreleasepool @synchronized"),
    defKeywords: R(ee + " @interface @implementation @protocol @class"),
    dontIndentStatements: /^@.*$/,
    typeFirstDefinitions: !0,
    atoms: R("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: re,
    hooks: {
        "#": te,
        "*": ne
    }
}), we = K({
    name: "objectivecpp",
    keywords: R(W + " " + Z + " " + V),
    types: Q,
    builtin: R(X),
    blockKeywords: R(J + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"),
    defKeywords: R(ee + " @interface @implementation @protocol @class class namespace"),
    dontIndentStatements: /^@.*$|^template$/,
    typeFirstDefinitions: !0,
    atoms: R("YES NO NULL Nil nil true false nullptr"),
    isReservedIdentifier: re,
    hooks: {
        "#": te,
        "*": ne,
        u: ae,
        U: ae,
        L: ae,
        R: ae,
        0: oe,
        1: oe,
        2: oe,
        3: oe,
        4: oe,
        5: oe,
        6: oe,
        7: oe,
        8: oe,
        9: oe,
        token: function token(e, t, n) {
            if ("variable" == n && "(" == e.peek() && (";" == t.prevToken || null == t.prevToken || "}" == t.prevToken) && ie(e.current())) return "def";
        }
    },
    namespaceSeparator: "::"
}), ve = K({
    name: "squirrel",
    keywords: R("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"),
    types: H,
    blockKeywords: R("case catch class else for foreach if switch try while"),
    defKeywords: R("function local class"),
    typeFirstDefinitions: !0,
    atoms: R("true false null"),
    hooks: {
        "#": te
    }
});
var xe = null;
function _e(e) {
    return function(t, n) {
        for(var r, o = !1, a = !1; !t.eol();){
            if (!o && t.match('"') && ("single" == e || t.match('""'))) {
                a = !0;
                break;
            }
            if (!o && t.match("``")) {
                xe = _e(e), a = !0;
                break;
            }
            r = t.next(), o = "single" == e && !o && "\\" == r;
        }
        return a && (n.tokenize = null), "string";
    };
}
var ze = K({
    name: "ceylon",
    keywords: R("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"),
    types: function types(e) {
        var t = e.charAt(0);
        return t === t.toUpperCase() && t !== t.toLowerCase();
    },
    blockKeywords: R("case catch class dynamic else finally for function if interface module new object switch try while"),
    defKeywords: R("class dynamic function interface module object package value"),
    builtin: R("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"),
    isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
    isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
    numberStart: /[\d#$]/,
    number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
    multiLineStrings: !0,
    typeFirstDefinitions: !0,
    atoms: R("true false null larger smaller equal empty finished"),
    indentSwitch: !1,
    styleDefs: !1,
    hooks: {
        "@": function(e) {
            return e.eatWhile(/[\w\$_]/), "meta";
        },
        '"': function(e, t) {
            return t.tokenize = _e(e.match('""') ? "triple" : "single"), t.tokenize(e, t);
        },
        "`": function(e, t) {
            return !(!xe || !e.match("`")) && (t.tokenize = xe, xe = null, t.tokenize(e, t));
        },
        "'": function(e) {
            return e.match(/^(\\[^'\s]+|[^\\'])'/) ? "string.special" : (e.eatWhile(/[\w\$_\xa1-\uffff]/), "atom");
        },
        token: function token(e, t, n) {
            if (("variable" == n || "type" == n) && "." == t.prevToken) return "variableName.special";
        }
    },
    languageData: {
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                '"""'
            ]
        }
    }
});
function Te(e) {
    (e.interpolationStack || (e.interpolationStack = [])).push(e.tokenize);
}
function Se(e) {
    return (e.interpolationStack || (e.interpolationStack = [])).pop();
}
function Ne(e, t, n, r) {
    var o = !1;
    if (t.eat(e)) {
        if (!t.eat(e)) return "string";
        o = !0;
    }
    function a(t, n) {
        for(var _$a = !1; !t.eol();){
            if (!r && !_$a && "$" == t.peek()) return Te(n), n.tokenize = Ce, "string";
            var i = t.next();
            if (i == e && !_$a && (!o || t.match(e + e))) {
                n.tokenize = null;
                break;
            }
            _$a = !r && !_$a && "\\" == i;
        }
        return "string";
    }
    return n.tokenize = a, a(t, n);
}
function Ce(e, t) {
    return e.eat("$"), e.eat("{") ? t.tokenize = null : t.tokenize = je, null;
}
function je(e, t) {
    return e.eatWhile(/[\w_]/), t.tokenize = Se(t), "variable";
}
var qe = K({
    name: "dart",
    keywords: R("this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as extension on yield late required sealed base interface when inline"),
    blockKeywords: R("try catch finally do else for if switch while"),
    builtin: R("void bool num int double dynamic var String Null Never"),
    atoms: R("true false null"),
    hooks: {
        "@": function(e) {
            return e.eatWhile(/[\w\$_\.]/), "meta";
        },
        "'": function(e, t) {
            return Ne("'", e, t, !1);
        },
        '"': function(e, t) {
            return Ne('"', e, t, !1);
        },
        r: function r(e, t) {
            var n = e.peek();
            return ("'" == n || '"' == n) && Ne(e.next(), e, t, !0);
        },
        "}": function(e, t) {
            return function(e) {
                return e.interpolationStack ? e.interpolationStack.length : 0;
            }(t) > 0 && (t.tokenize = Se(t), null);
        },
        "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = me(1), t.tokenize(e, t));
        },
        token: function token(e, t, n) {
            if ("variable" == n && RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$", "g").test(e.current())) return "type";
        }
    }
});
var Ee = Object.freeze({
    __proto__: null,
    clike: K,
    c: ce,
    cpp: de,
    java: ue,
    csharp: pe,
    scala: he,
    kotlin: ge,
    shader: be,
    nesC: ye,
    objectiveC: ke,
    objectiveCpp: we,
    squirrel: ve,
    ceylon: ze,
    dart: qe
});
function Oe(e) {
    var t, n, r = (e = _object_spread({}, tt, e)).inline, o = e.tokenHooks, a = e.documentTypes || {}, i = e.mediaTypes || {}, l = e.mediaFeatures || {}, s = e.mediaValueKeywords || {}, c = e.propertyKeywords || {}, d = e.nonStandardPropertyKeywords || {}, u = e.fontProperties || {}, p = e.counterDescriptors || {}, f = e.colorKeywords || {}, _$m = e.valueKeywords || {}, h = e.allowNested, g = e.lineComment, b = !0 === e.supportsAtComponent, y = !1 !== e.highlightNonStandardPropertyKeywords;
    function k(e, n) {
        return t = n, e;
    }
    function w(e, t) {
        var n = e.next();
        if (o[n]) {
            var r = o[n](e, t);
            if (!1 !== r) return r;
        }
        return "@" == n ? (e.eatWhile(/[\w\\\-]/), k("def", e.current())) : "=" == n || ("~" == n || "|" == n) && e.eat("=") ? k(null, "compare") : '"' == n || "'" == n ? (t.tokenize = v(n), t.tokenize(e, t)) : "#" == n ? (e.eatWhile(/[\w\\\-]/), k("atom", "hash")) : "!" == n ? (e.match(/^\s*\w*/), k("keyword", "important")) : /\d/.test(n) || "." == n && e.eat(/\d/) ? (e.eatWhile(/[\w.%]/), k("number", "unit")) : "-" !== n ? /[,+>*\/]/.test(n) ? k(null, "select-op") : "." == n && e.match(/^-?[_a-z][_a-z0-9-]*/i) ? k("qualifier", "qualifier") : /[:;{}\[\]\(\)]/.test(n) ? k(null, n) : e.match(/^[\w-.]+(?=\()/) ? (/^(url(-prefix)?|domain|regexp)$/i.test(e.current()) && (t.tokenize = x), k("variableName.function", "variable")) : /[\w\\\-]/.test(n) ? (e.eatWhile(/[\w\\\-]/), k("property", "word")) : k(null, null) : /[\d.]/.test(e.peek()) ? (e.eatWhile(/[\w.%]/), k("number", "unit")) : e.match(/^-[\w\\\-]*/) ? (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? k("def", "variable-definition") : k("variableName", "variable")) : e.match(/^\w+-/) ? k("meta", "meta") : void 0;
    }
    function v(e) {
        return function(t, n) {
            for(var r, o = !1; null != (r = t.next());){
                if (r == e && !o) {
                    ")" == e && t.backUp(1);
                    break;
                }
                o = !o && "\\" == r;
            }
            return (r == e || !o && ")" != e) && (n.tokenize = null), k("string", "string");
        };
    }
    function x(e, t) {
        return e.next(), e.match(/^\s*[\"\')]/, !1) ? t.tokenize = null : t.tokenize = v(")"), k(null, "(");
    }
    function _(e, t, n) {
        this.type = e, this.indent = t, this.prev = n;
    }
    function z(e, t, n, r) {
        return e.context = new _(n, t.indentation() + (!1 === r ? 0 : t.indentUnit), e.context), n;
    }
    function T(e) {
        return e.context.prev && (e.context = e.context.prev), e.context.type;
    }
    function S(e, t, n) {
        return j[n.context.type](e, t, n);
    }
    function N(e, t, n, r) {
        for(var o = r || 1; o > 0; o--)n.context = n.context.prev;
        return S(e, t, n);
    }
    function C(e) {
        var t = e.current().toLowerCase();
        n = _$m.hasOwnProperty(t) ? "atom" : f.hasOwnProperty(t) ? "keyword" : "variable";
    }
    var j = {
        top: function top(e, t, r) {
            if ("{" == e) return z(r, t, "block");
            if ("}" == e && r.context.prev) return T(r);
            if (b && /@component/i.test(e)) return z(r, t, "atComponentBlock");
            if (/^@(-moz-)?document$/i.test(e)) return z(r, t, "documentTypes");
            if (/^@(media|supports|(-moz-)?document|import)$/i.test(e)) return z(r, t, "atBlock");
            if (/^@(font-face|counter-style)/i.test(e)) return r.stateArg = e, "restricted_atBlock_before";
            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e)) return "keyframes";
            if (e && "@" == e.charAt(0)) return z(r, t, "at");
            if ("hash" == e) n = "builtin";
            else if ("word" == e) n = "tag";
            else {
                if ("variable-definition" == e) return "maybeprop";
                if ("interpolation" == e) return z(r, t, "interpolation");
                if (":" == e) return "pseudo";
                if (h && "(" == e) return z(r, t, "parens");
            }
            return r.context.type;
        },
        block: function block(e, t, r) {
            if ("word" == e) {
                var o = t.current().toLowerCase();
                return c.hasOwnProperty(o) ? (n = "property", "maybeprop") : d.hasOwnProperty(o) ? (n = y ? "string.special" : "property", "maybeprop") : h ? (n = t.match(/^\s*:(?:\s|$)/, !1) ? "property" : "tag", "block") : (n = "error", "maybeprop");
            }
            return "meta" == e ? "block" : h || "hash" != e && "qualifier" != e ? j.top(e, t, r) : (n = "error", "block");
        },
        maybeprop: function maybeprop(e, t, n) {
            return ":" == e ? z(n, t, "prop") : S(e, t, n);
        },
        prop: function prop(e, t, r) {
            if (";" == e) return T(r);
            if ("{" == e && h) return z(r, t, "propBlock");
            if ("}" == e || "{" == e) return N(e, t, r);
            if ("(" == e) return z(r, t, "parens");
            if ("hash" != e || /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(t.current())) {
                if ("word" == e) C(t);
                else if ("interpolation" == e) return z(r, t, "interpolation");
            } else n = "error";
            return "prop";
        },
        propBlock: function propBlock(e, t, r) {
            return "}" == e ? T(r) : "word" == e ? (n = "property", "maybeprop") : r.context.type;
        },
        parens: function parens(e, t, n) {
            return "{" == e || "}" == e ? N(e, t, n) : ")" == e ? T(n) : "(" == e ? z(n, t, "parens") : "interpolation" == e ? z(n, t, "interpolation") : ("word" == e && C(t), "parens");
        },
        pseudo: function pseudo(e, t, r) {
            return "meta" == e ? "pseudo" : "word" == e ? (n = "variableName.constant", r.context.type) : S(e, t, r);
        },
        documentTypes: function documentTypes(e, t, r) {
            return "word" == e && a.hasOwnProperty(t.current()) ? (n = "tag", r.context.type) : j.atBlock(e, t, r);
        },
        atBlock: function atBlock(e, t, r) {
            if ("(" == e) return z(r, t, "atBlock_parens");
            if ("}" == e || ";" == e) return N(e, t, r);
            if ("{" == e) return T(r) && z(r, t, h ? "block" : "top");
            if ("interpolation" == e) return z(r, t, "interpolation");
            if ("word" == e) {
                var o = t.current().toLowerCase();
                n = "only" == o || "not" == o || "and" == o || "or" == o ? "keyword" : i.hasOwnProperty(o) ? "attribute" : l.hasOwnProperty(o) ? "property" : s.hasOwnProperty(o) ? "keyword" : c.hasOwnProperty(o) ? "property" : d.hasOwnProperty(o) ? y ? "string.special" : "property" : _$m.hasOwnProperty(o) ? "atom" : f.hasOwnProperty(o) ? "keyword" : "error";
            }
            return r.context.type;
        },
        atComponentBlock: function atComponentBlock(e, t, r) {
            return "}" == e ? N(e, t, r) : "{" == e ? T(r) && z(r, t, h ? "block" : "top", !1) : ("word" == e && (n = "error"), r.context.type);
        },
        atBlock_parens: function atBlock_parens(e, t, n) {
            return ")" == e ? T(n) : "{" == e || "}" == e ? N(e, t, n, 2) : j.atBlock(e, t, n);
        },
        restricted_atBlock_before: function restricted_atBlock_before(e, t, r) {
            return "{" == e ? z(r, t, "restricted_atBlock") : "word" == e && "@counter-style" == r.stateArg ? (n = "variable", "restricted_atBlock_before") : S(e, t, r);
        },
        restricted_atBlock: function restricted_atBlock(e, t, r) {
            return "}" == e ? (r.stateArg = null, T(r)) : "word" == e ? (n = "@font-face" == r.stateArg && !u.hasOwnProperty(t.current().toLowerCase()) || "@counter-style" == r.stateArg && !p.hasOwnProperty(t.current().toLowerCase()) ? "error" : "property", "maybeprop") : "restricted_atBlock";
        },
        keyframes: function keyframes(e, t, r) {
            return "word" == e ? (n = "variable", "keyframes") : "{" == e ? z(r, t, "top") : S(e, t, r);
        },
        at: function at(e, t, r) {
            return ";" == e ? T(r) : "{" == e || "}" == e ? N(e, t, r) : ("word" == e ? n = "tag" : "hash" == e && (n = "builtin"), "at");
        },
        interpolation: function interpolation(e, t, r) {
            return "}" == e ? T(r) : "{" == e || ";" == e ? N(e, t, r) : ("word" == e ? n = "variable" : "variable" != e && "(" != e && ")" != e && (n = "error"), "interpolation");
        }
    };
    return {
        name: e.name,
        startState: function startState() {
            return {
                tokenize: null,
                state: r ? "block" : "top",
                stateArg: null,
                context: new _(r ? "block" : "top", 0, null)
            };
        },
        token: function token(e, r) {
            if (!r.tokenize && e.eatSpace()) return null;
            var o = (r.tokenize || w)(e, r);
            return o && "object" == (typeof o === "undefined" ? "undefined" : _type_of(o)) && (t = o[1], o = o[0]), n = o, "comment" != t && (r.state = j[r.state](t, e, r)), n;
        },
        indent: function indent(e, t, n) {
            var r = e.context, o = t && t.charAt(0), a = r.indent;
            return "prop" != r.type || "}" != o && ")" != o || (r = r.prev), r.prev && ("}" != o || "block" != r.type && "top" != r.type && "interpolation" != r.type && "restricted_atBlock" != r.type ? (")" != o || "parens" != r.type && "atBlock_parens" != r.type) && ("{" != o || "at" != r.type && "atBlock" != r.type) || (a = Math.max(0, r.indent - n.unit)) : a = (r = r.prev).indent), a;
        },
        languageData: {
            indentOnInput: /^\s*\}$/,
            commentTokens: {
                line: g,
                block: {
                    open: "/*",
                    close: "*/"
                }
            },
            autocomplete: Je
        }
    };
}
function De(e) {
    for(var t = {}, n = 0; n < e.length; ++n)t[e[n].toLowerCase()] = !0;
    return t;
}
var Pe = [
    "domain",
    "regexp",
    "url",
    "url-prefix"
], Ie = De(Pe), Le = [
    "all",
    "aural",
    "braille",
    "handheld",
    "print",
    "projection",
    "screen",
    "tty",
    "tv",
    "embossed"
], Ae = De(Le), Me = [
    "width",
    "min-width",
    "max-width",
    "height",
    "min-height",
    "max-height",
    "device-width",
    "min-device-width",
    "max-device-width",
    "device-height",
    "min-device-height",
    "max-device-height",
    "aspect-ratio",
    "min-aspect-ratio",
    "max-aspect-ratio",
    "device-aspect-ratio",
    "min-device-aspect-ratio",
    "max-device-aspect-ratio",
    "color",
    "min-color",
    "max-color",
    "color-index",
    "min-color-index",
    "max-color-index",
    "monochrome",
    "min-monochrome",
    "max-monochrome",
    "resolution",
    "min-resolution",
    "max-resolution",
    "scan",
    "grid",
    "orientation",
    "device-pixel-ratio",
    "min-device-pixel-ratio",
    "max-device-pixel-ratio",
    "pointer",
    "any-pointer",
    "hover",
    "any-hover",
    "prefers-color-scheme",
    "dynamic-range",
    "video-dynamic-range"
], Fe = De(Me), $e = [
    "landscape",
    "portrait",
    "none",
    "coarse",
    "fine",
    "on-demand",
    "hover",
    "interlace",
    "progressive",
    "dark",
    "light",
    "standard",
    "high"
], Be = De($e), Ke = [
    "align-content",
    "align-items",
    "align-self",
    "alignment-adjust",
    "alignment-baseline",
    "all",
    "anchor-point",
    "animation",
    "animation-delay",
    "animation-direction",
    "animation-duration",
    "animation-fill-mode",
    "animation-iteration-count",
    "animation-name",
    "animation-play-state",
    "animation-timing-function",
    "appearance",
    "azimuth",
    "backdrop-filter",
    "backface-visibility",
    "background",
    "background-attachment",
    "background-blend-mode",
    "background-clip",
    "background-color",
    "background-image",
    "background-origin",
    "background-position",
    "background-position-x",
    "background-position-y",
    "background-repeat",
    "background-size",
    "baseline-shift",
    "binding",
    "bleed",
    "block-size",
    "bookmark-label",
    "bookmark-level",
    "bookmark-state",
    "bookmark-target",
    "border",
    "border-bottom",
    "border-bottom-color",
    "border-bottom-left-radius",
    "border-bottom-right-radius",
    "border-bottom-style",
    "border-bottom-width",
    "border-collapse",
    "border-color",
    "border-image",
    "border-image-outset",
    "border-image-repeat",
    "border-image-slice",
    "border-image-source",
    "border-image-width",
    "border-left",
    "border-left-color",
    "border-left-style",
    "border-left-width",
    "border-radius",
    "border-right",
    "border-right-color",
    "border-right-style",
    "border-right-width",
    "border-spacing",
    "border-style",
    "border-top",
    "border-top-color",
    "border-top-left-radius",
    "border-top-right-radius",
    "border-top-style",
    "border-top-width",
    "border-width",
    "bottom",
    "box-decoration-break",
    "box-shadow",
    "box-sizing",
    "break-after",
    "break-before",
    "break-inside",
    "caption-side",
    "caret-color",
    "clear",
    "clip",
    "color",
    "color-profile",
    "column-count",
    "column-fill",
    "column-gap",
    "column-rule",
    "column-rule-color",
    "column-rule-style",
    "column-rule-width",
    "column-span",
    "column-width",
    "columns",
    "contain",
    "content",
    "counter-increment",
    "counter-reset",
    "crop",
    "cue",
    "cue-after",
    "cue-before",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "drop-initial-after-adjust",
    "drop-initial-after-align",
    "drop-initial-before-adjust",
    "drop-initial-before-align",
    "drop-initial-size",
    "drop-initial-value",
    "elevation",
    "empty-cells",
    "fit",
    "fit-content",
    "fit-position",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "float",
    "float-offset",
    "flow-from",
    "flow-into",
    "font",
    "font-family",
    "font-feature-settings",
    "font-kerning",
    "font-language-override",
    "font-optical-sizing",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-synthesis",
    "font-variant",
    "font-variant-alternates",
    "font-variant-caps",
    "font-variant-east-asian",
    "font-variant-ligatures",
    "font-variant-numeric",
    "font-variant-position",
    "font-variation-settings",
    "font-weight",
    "gap",
    "grid",
    "grid-area",
    "grid-auto-columns",
    "grid-auto-flow",
    "grid-auto-rows",
    "grid-column",
    "grid-column-end",
    "grid-column-gap",
    "grid-column-start",
    "grid-gap",
    "grid-row",
    "grid-row-end",
    "grid-row-gap",
    "grid-row-start",
    "grid-template",
    "grid-template-areas",
    "grid-template-columns",
    "grid-template-rows",
    "hanging-punctuation",
    "height",
    "hyphens",
    "icon",
    "image-orientation",
    "image-rendering",
    "image-resolution",
    "inline-box-align",
    "inset",
    "inset-block",
    "inset-block-end",
    "inset-block-start",
    "inset-inline",
    "inset-inline-end",
    "inset-inline-start",
    "isolation",
    "justify-content",
    "justify-items",
    "justify-self",
    "left",
    "letter-spacing",
    "line-break",
    "line-height",
    "line-height-step",
    "line-stacking",
    "line-stacking-ruby",
    "line-stacking-shift",
    "line-stacking-strategy",
    "list-style",
    "list-style-image",
    "list-style-position",
    "list-style-type",
    "margin",
    "margin-bottom",
    "margin-left",
    "margin-right",
    "margin-top",
    "marks",
    "marquee-direction",
    "marquee-loop",
    "marquee-play-count",
    "marquee-speed",
    "marquee-style",
    "mask-clip",
    "mask-composite",
    "mask-image",
    "mask-mode",
    "mask-origin",
    "mask-position",
    "mask-repeat",
    "mask-size",
    "mask-type",
    "max-block-size",
    "max-height",
    "max-inline-size",
    "max-width",
    "min-block-size",
    "min-height",
    "min-inline-size",
    "min-width",
    "mix-blend-mode",
    "move-to",
    "nav-down",
    "nav-index",
    "nav-left",
    "nav-right",
    "nav-up",
    "object-fit",
    "object-position",
    "offset",
    "offset-anchor",
    "offset-distance",
    "offset-path",
    "offset-position",
    "offset-rotate",
    "opacity",
    "order",
    "orphans",
    "outline",
    "outline-color",
    "outline-offset",
    "outline-style",
    "outline-width",
    "overflow",
    "overflow-style",
    "overflow-wrap",
    "overflow-x",
    "overflow-y",
    "padding",
    "padding-bottom",
    "padding-left",
    "padding-right",
    "padding-top",
    "page",
    "page-break-after",
    "page-break-before",
    "page-break-inside",
    "page-policy",
    "pause",
    "pause-after",
    "pause-before",
    "perspective",
    "perspective-origin",
    "pitch",
    "pitch-range",
    "place-content",
    "place-items",
    "place-self",
    "play-during",
    "position",
    "presentation-level",
    "punctuation-trim",
    "quotes",
    "region-break-after",
    "region-break-before",
    "region-break-inside",
    "region-fragment",
    "rendering-intent",
    "resize",
    "rest",
    "rest-after",
    "rest-before",
    "richness",
    "right",
    "rotate",
    "rotation",
    "rotation-point",
    "row-gap",
    "ruby-align",
    "ruby-overhang",
    "ruby-position",
    "ruby-span",
    "scale",
    "scroll-behavior",
    "scroll-margin",
    "scroll-margin-block",
    "scroll-margin-block-end",
    "scroll-margin-block-start",
    "scroll-margin-bottom",
    "scroll-margin-inline",
    "scroll-margin-inline-end",
    "scroll-margin-inline-start",
    "scroll-margin-left",
    "scroll-margin-right",
    "scroll-margin-top",
    "scroll-padding",
    "scroll-padding-block",
    "scroll-padding-block-end",
    "scroll-padding-block-start",
    "scroll-padding-bottom",
    "scroll-padding-inline",
    "scroll-padding-inline-end",
    "scroll-padding-inline-start",
    "scroll-padding-left",
    "scroll-padding-right",
    "scroll-padding-top",
    "scroll-snap-align",
    "scroll-snap-type",
    "shape-image-threshold",
    "shape-inside",
    "shape-margin",
    "shape-outside",
    "size",
    "speak",
    "speak-as",
    "speak-header",
    "speak-numeral",
    "speak-punctuation",
    "speech-rate",
    "stress",
    "string-set",
    "tab-size",
    "table-layout",
    "target",
    "target-name",
    "target-new",
    "target-position",
    "text-align",
    "text-align-last",
    "text-combine-upright",
    "text-decoration",
    "text-decoration-color",
    "text-decoration-line",
    "text-decoration-skip",
    "text-decoration-skip-ink",
    "text-decoration-style",
    "text-emphasis",
    "text-emphasis-color",
    "text-emphasis-position",
    "text-emphasis-style",
    "text-height",
    "text-indent",
    "text-justify",
    "text-orientation",
    "text-outline",
    "text-overflow",
    "text-rendering",
    "text-shadow",
    "text-size-adjust",
    "text-space-collapse",
    "text-transform",
    "text-underline-position",
    "text-wrap",
    "top",
    "touch-action",
    "transform",
    "transform-origin",
    "transform-style",
    "transition",
    "transition-delay",
    "transition-duration",
    "transition-property",
    "transition-timing-function",
    "translate",
    "unicode-bidi",
    "user-select",
    "vertical-align",
    "visibility",
    "voice-balance",
    "voice-duration",
    "voice-family",
    "voice-pitch",
    "voice-range",
    "voice-rate",
    "voice-stress",
    "voice-volume",
    "volume",
    "white-space",
    "widows",
    "width",
    "will-change",
    "word-break",
    "word-spacing",
    "word-wrap",
    "writing-mode",
    "z-index",
    "clip-path",
    "clip-rule",
    "mask",
    "enable-background",
    "filter",
    "flood-color",
    "flood-opacity",
    "lighting-color",
    "stop-color",
    "stop-opacity",
    "pointer-events",
    "color-interpolation",
    "color-interpolation-filters",
    "color-rendering",
    "fill",
    "fill-opacity",
    "fill-rule",
    "image-rendering",
    "marker",
    "marker-end",
    "marker-mid",
    "marker-start",
    "paint-order",
    "shape-rendering",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "text-rendering",
    "baseline-shift",
    "dominant-baseline",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "text-anchor",
    "writing-mode"
], Re = De(Ke), Ue = [
    "accent-color",
    "aspect-ratio",
    "border-block",
    "border-block-color",
    "border-block-end",
    "border-block-end-color",
    "border-block-end-style",
    "border-block-end-width",
    "border-block-start",
    "border-block-start-color",
    "border-block-start-style",
    "border-block-start-width",
    "border-block-style",
    "border-block-width",
    "border-inline",
    "border-inline-color",
    "border-inline-end",
    "border-inline-end-color",
    "border-inline-end-style",
    "border-inline-end-width",
    "border-inline-start",
    "border-inline-start-color",
    "border-inline-start-style",
    "border-inline-start-width",
    "border-inline-style",
    "border-inline-width",
    "content-visibility",
    "margin-block",
    "margin-block-end",
    "margin-block-start",
    "margin-inline",
    "margin-inline-end",
    "margin-inline-start",
    "overflow-anchor",
    "overscroll-behavior",
    "padding-block",
    "padding-block-end",
    "padding-block-start",
    "padding-inline",
    "padding-inline-end",
    "padding-inline-start",
    "scroll-snap-stop",
    "scrollbar-3d-light-color",
    "scrollbar-arrow-color",
    "scrollbar-base-color",
    "scrollbar-dark-shadow-color",
    "scrollbar-face-color",
    "scrollbar-highlight-color",
    "scrollbar-shadow-color",
    "scrollbar-track-color",
    "searchfield-cancel-button",
    "searchfield-decoration",
    "searchfield-results-button",
    "searchfield-results-decoration",
    "shape-inside",
    "zoom"
], We = De(Ue), Ve = [
    "font-display",
    "font-family",
    "src",
    "unicode-range",
    "font-variant",
    "font-feature-settings",
    "font-stretch",
    "font-weight",
    "font-style"
], Ze = De(Ve), Xe = De([
    "additive-symbols",
    "fallback",
    "negative",
    "pad",
    "prefix",
    "range",
    "speak-as",
    "suffix",
    "symbols",
    "system"
]), Ge = [
    "aliceblue",
    "antiquewhite",
    "aqua",
    "aquamarine",
    "azure",
    "beige",
    "bisque",
    "black",
    "blanchedalmond",
    "blue",
    "blueviolet",
    "brown",
    "burlywood",
    "cadetblue",
    "chartreuse",
    "chocolate",
    "coral",
    "cornflowerblue",
    "cornsilk",
    "crimson",
    "cyan",
    "darkblue",
    "darkcyan",
    "darkgoldenrod",
    "darkgray",
    "darkgreen",
    "darkgrey",
    "darkkhaki",
    "darkmagenta",
    "darkolivegreen",
    "darkorange",
    "darkorchid",
    "darkred",
    "darksalmon",
    "darkseagreen",
    "darkslateblue",
    "darkslategray",
    "darkslategrey",
    "darkturquoise",
    "darkviolet",
    "deeppink",
    "deepskyblue",
    "dimgray",
    "dimgrey",
    "dodgerblue",
    "firebrick",
    "floralwhite",
    "forestgreen",
    "fuchsia",
    "gainsboro",
    "ghostwhite",
    "gold",
    "goldenrod",
    "gray",
    "grey",
    "green",
    "greenyellow",
    "honeydew",
    "hotpink",
    "indianred",
    "indigo",
    "ivory",
    "khaki",
    "lavender",
    "lavenderblush",
    "lawngreen",
    "lemonchiffon",
    "lightblue",
    "lightcoral",
    "lightcyan",
    "lightgoldenrodyellow",
    "lightgray",
    "lightgreen",
    "lightgrey",
    "lightpink",
    "lightsalmon",
    "lightseagreen",
    "lightskyblue",
    "lightslategray",
    "lightslategrey",
    "lightsteelblue",
    "lightyellow",
    "lime",
    "limegreen",
    "linen",
    "magenta",
    "maroon",
    "mediumaquamarine",
    "mediumblue",
    "mediumorchid",
    "mediumpurple",
    "mediumseagreen",
    "mediumslateblue",
    "mediumspringgreen",
    "mediumturquoise",
    "mediumvioletred",
    "midnightblue",
    "mintcream",
    "mistyrose",
    "moccasin",
    "navajowhite",
    "navy",
    "oldlace",
    "olive",
    "olivedrab",
    "orange",
    "orangered",
    "orchid",
    "palegoldenrod",
    "palegreen",
    "paleturquoise",
    "palevioletred",
    "papayawhip",
    "peachpuff",
    "peru",
    "pink",
    "plum",
    "powderblue",
    "purple",
    "rebeccapurple",
    "red",
    "rosybrown",
    "royalblue",
    "saddlebrown",
    "salmon",
    "sandybrown",
    "seagreen",
    "seashell",
    "sienna",
    "silver",
    "skyblue",
    "slateblue",
    "slategray",
    "slategrey",
    "snow",
    "springgreen",
    "steelblue",
    "tan",
    "teal",
    "thistle",
    "tomato",
    "turquoise",
    "violet",
    "wheat",
    "white",
    "whitesmoke",
    "yellow",
    "yellowgreen"
], Ye = De(Ge), He = [
    "above",
    "absolute",
    "activeborder",
    "additive",
    "activecaption",
    "afar",
    "after-white-space",
    "ahead",
    "alias",
    "all",
    "all-scroll",
    "alphabetic",
    "alternate",
    "always",
    "amharic",
    "amharic-abegede",
    "antialiased",
    "appworkspace",
    "arabic-indic",
    "armenian",
    "asterisks",
    "attr",
    "auto",
    "auto-flow",
    "avoid",
    "avoid-column",
    "avoid-page",
    "avoid-region",
    "axis-pan",
    "background",
    "backwards",
    "baseline",
    "below",
    "bidi-override",
    "binary",
    "bengali",
    "blink",
    "block",
    "block-axis",
    "blur",
    "bold",
    "bolder",
    "border",
    "border-box",
    "both",
    "bottom",
    "break",
    "break-all",
    "break-word",
    "brightness",
    "bullets",
    "button",
    "buttonface",
    "buttonhighlight",
    "buttonshadow",
    "buttontext",
    "calc",
    "cambodian",
    "capitalize",
    "caps-lock-indicator",
    "caption",
    "captiontext",
    "caret",
    "cell",
    "center",
    "checkbox",
    "circle",
    "cjk-decimal",
    "cjk-earthly-branch",
    "cjk-heavenly-stem",
    "cjk-ideographic",
    "clear",
    "clip",
    "close-quote",
    "col-resize",
    "collapse",
    "color",
    "color-burn",
    "color-dodge",
    "column",
    "column-reverse",
    "compact",
    "condensed",
    "conic-gradient",
    "contain",
    "content",
    "contents",
    "content-box",
    "context-menu",
    "continuous",
    "contrast",
    "copy",
    "counter",
    "counters",
    "cover",
    "crop",
    "cross",
    "crosshair",
    "cubic-bezier",
    "currentcolor",
    "cursive",
    "cyclic",
    "darken",
    "dashed",
    "decimal",
    "decimal-leading-zero",
    "default",
    "default-button",
    "dense",
    "destination-atop",
    "destination-in",
    "destination-out",
    "destination-over",
    "devanagari",
    "difference",
    "disc",
    "discard",
    "disclosure-closed",
    "disclosure-open",
    "document",
    "dot-dash",
    "dot-dot-dash",
    "dotted",
    "double",
    "down",
    "drop-shadow",
    "e-resize",
    "ease",
    "ease-in",
    "ease-in-out",
    "ease-out",
    "element",
    "ellipse",
    "ellipsis",
    "embed",
    "end",
    "ethiopic",
    "ethiopic-abegede",
    "ethiopic-abegede-am-et",
    "ethiopic-abegede-gez",
    "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et",
    "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et",
    "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez",
    "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et",
    "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er",
    "ethiopic-halehame-ti-et",
    "ethiopic-halehame-tig",
    "ethiopic-numeric",
    "ew-resize",
    "exclusion",
    "expanded",
    "extends",
    "extra-condensed",
    "extra-expanded",
    "fantasy",
    "fast",
    "fill",
    "fill-box",
    "fixed",
    "flat",
    "flex",
    "flex-end",
    "flex-start",
    "footnotes",
    "forwards",
    "from",
    "geometricPrecision",
    "georgian",
    "grayscale",
    "graytext",
    "grid",
    "groove",
    "gujarati",
    "gurmukhi",
    "hand",
    "hangul",
    "hangul-consonant",
    "hard-light",
    "hebrew",
    "help",
    "hidden",
    "hide",
    "higher",
    "highlight",
    "highlighttext",
    "hiragana",
    "hiragana-iroha",
    "horizontal",
    "hsl",
    "hsla",
    "hue",
    "hue-rotate",
    "icon",
    "ignore",
    "inactiveborder",
    "inactivecaption",
    "inactivecaptiontext",
    "infinite",
    "infobackground",
    "infotext",
    "inherit",
    "initial",
    "inline",
    "inline-axis",
    "inline-block",
    "inline-flex",
    "inline-grid",
    "inline-table",
    "inset",
    "inside",
    "intrinsic",
    "invert",
    "italic",
    "japanese-formal",
    "japanese-informal",
    "justify",
    "kannada",
    "katakana",
    "katakana-iroha",
    "keep-all",
    "khmer",
    "korean-hangul-formal",
    "korean-hanja-formal",
    "korean-hanja-informal",
    "landscape",
    "lao",
    "large",
    "larger",
    "left",
    "level",
    "lighter",
    "lighten",
    "line-through",
    "linear",
    "linear-gradient",
    "lines",
    "list-item",
    "listbox",
    "listitem",
    "local",
    "logical",
    "loud",
    "lower",
    "lower-alpha",
    "lower-armenian",
    "lower-greek",
    "lower-hexadecimal",
    "lower-latin",
    "lower-norwegian",
    "lower-roman",
    "lowercase",
    "ltr",
    "luminosity",
    "malayalam",
    "manipulation",
    "match",
    "matrix",
    "matrix3d",
    "media-play-button",
    "media-slider",
    "media-sliderthumb",
    "media-volume-slider",
    "media-volume-sliderthumb",
    "medium",
    "menu",
    "menulist",
    "menulist-button",
    "menutext",
    "message-box",
    "middle",
    "min-intrinsic",
    "mix",
    "mongolian",
    "monospace",
    "move",
    "multiple",
    "multiple_mask_images",
    "multiply",
    "myanmar",
    "n-resize",
    "narrower",
    "ne-resize",
    "nesw-resize",
    "no-close-quote",
    "no-drop",
    "no-open-quote",
    "no-repeat",
    "none",
    "normal",
    "not-allowed",
    "nowrap",
    "ns-resize",
    "numbers",
    "numeric",
    "nw-resize",
    "nwse-resize",
    "oblique",
    "octal",
    "opacity",
    "open-quote",
    "optimizeLegibility",
    "optimizeSpeed",
    "oriya",
    "oromo",
    "outset",
    "outside",
    "outside-shape",
    "overlay",
    "overline",
    "padding",
    "padding-box",
    "painted",
    "page",
    "paused",
    "persian",
    "perspective",
    "pinch-zoom",
    "plus-darker",
    "plus-lighter",
    "pointer",
    "polygon",
    "portrait",
    "pre",
    "pre-line",
    "pre-wrap",
    "preserve-3d",
    "progress",
    "push-button",
    "radial-gradient",
    "radio",
    "read-only",
    "read-write",
    "read-write-plaintext-only",
    "rectangle",
    "region",
    "relative",
    "repeat",
    "repeating-linear-gradient",
    "repeating-radial-gradient",
    "repeating-conic-gradient",
    "repeat-x",
    "repeat-y",
    "reset",
    "reverse",
    "rgb",
    "rgba",
    "ridge",
    "right",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "round",
    "row",
    "row-resize",
    "row-reverse",
    "rtl",
    "run-in",
    "running",
    "s-resize",
    "sans-serif",
    "saturate",
    "saturation",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "screen",
    "scroll",
    "scrollbar",
    "scroll-position",
    "se-resize",
    "searchfield",
    "searchfield-cancel-button",
    "searchfield-decoration",
    "searchfield-results-button",
    "searchfield-results-decoration",
    "self-start",
    "self-end",
    "semi-condensed",
    "semi-expanded",
    "separate",
    "sepia",
    "serif",
    "show",
    "sidama",
    "simp-chinese-formal",
    "simp-chinese-informal",
    "single",
    "skew",
    "skewX",
    "skewY",
    "skip-white-space",
    "slide",
    "slider-horizontal",
    "slider-vertical",
    "sliderthumb-horizontal",
    "sliderthumb-vertical",
    "slow",
    "small",
    "small-caps",
    "small-caption",
    "smaller",
    "soft-light",
    "solid",
    "somali",
    "source-atop",
    "source-in",
    "source-out",
    "source-over",
    "space",
    "space-around",
    "space-between",
    "space-evenly",
    "spell-out",
    "square",
    "square-button",
    "start",
    "static",
    "status-bar",
    "stretch",
    "stroke",
    "stroke-box",
    "sub",
    "subpixel-antialiased",
    "svg_masks",
    "super",
    "sw-resize",
    "symbolic",
    "symbols",
    "system-ui",
    "table",
    "table-caption",
    "table-cell",
    "table-column",
    "table-column-group",
    "table-footer-group",
    "table-header-group",
    "table-row",
    "table-row-group",
    "tamil",
    "telugu",
    "text",
    "text-bottom",
    "text-top",
    "textarea",
    "textfield",
    "thai",
    "thick",
    "thin",
    "threeddarkshadow",
    "threedface",
    "threedhighlight",
    "threedlightshadow",
    "threedshadow",
    "tibetan",
    "tigre",
    "tigrinya-er",
    "tigrinya-er-abegede",
    "tigrinya-et",
    "tigrinya-et-abegede",
    "to",
    "top",
    "trad-chinese-formal",
    "trad-chinese-informal",
    "transform",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ",
    "transparent",
    "ultra-condensed",
    "ultra-expanded",
    "underline",
    "unidirectional-pan",
    "unset",
    "up",
    "upper-alpha",
    "upper-armenian",
    "upper-greek",
    "upper-hexadecimal",
    "upper-latin",
    "upper-norwegian",
    "upper-roman",
    "uppercase",
    "urdu",
    "url",
    "var",
    "vertical",
    "vertical-text",
    "view-box",
    "visible",
    "visibleFill",
    "visiblePainted",
    "visibleStroke",
    "visual",
    "w-resize",
    "wait",
    "wave",
    "wider",
    "window",
    "windowframe",
    "windowtext",
    "words",
    "wrap",
    "wrap-reverse",
    "x-large",
    "x-small",
    "xor",
    "xx-large",
    "xx-small"
], Qe = De(He), Je = Pe.concat(Le).concat(Me).concat($e).concat(Ke).concat(Ue).concat(Ge).concat(He);
var et = {
    properties: Ke,
    colors: Ge,
    fonts: Ve,
    values: He,
    all: Je
}, tt = {
    documentTypes: Ie,
    mediaTypes: Ae,
    mediaFeatures: Fe,
    mediaValueKeywords: Be,
    propertyKeywords: Re,
    nonStandardPropertyKeywords: We,
    fontProperties: Ze,
    counterDescriptors: Xe,
    colorKeywords: Ye,
    valueKeywords: Qe,
    tokenHooks: {
        "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = rt, rt(e, t));
        }
    }
}, nt = Oe({
    name: "css"
});
function rt(e, t) {
    for(var n, r = !1; null != (n = e.next());){
        if (r && "/" == n) {
            t.tokenize = null;
            break;
        }
        r = "*" == n;
    }
    return [
        "comment",
        "comment"
    ];
}
var ot = Oe({
    name: "scss",
    mediaTypes: Ae,
    mediaFeatures: Fe,
    mediaValueKeywords: Be,
    propertyKeywords: Re,
    nonStandardPropertyKeywords: We,
    colorKeywords: Ye,
    valueKeywords: Qe,
    fontProperties: Ze,
    allowNested: !0,
    lineComment: "//",
    tokenHooks: {
        "/": function(e, t) {
            return e.eat("/") ? (e.skipToEnd(), [
                "comment",
                "comment"
            ]) : e.eat("*") ? (t.tokenize = rt, rt(e, t)) : [
                "operator",
                "operator"
            ];
        },
        ":": function(e) {
            return !!e.match(/^\s*\{/, !1) && [
                null,
                null
            ];
        },
        $: function $(e) {
            return e.match(/^[\w-]+/), e.match(/^\s*:/, !1) ? [
                "def",
                "variable-definition"
            ] : [
                "variableName.special",
                "variable"
            ];
        },
        "#": function(e) {
            return !!e.eat("{") && [
                null,
                "interpolation"
            ];
        }
    }
}), at = Oe({
    name: "less",
    mediaTypes: Ae,
    mediaFeatures: Fe,
    mediaValueKeywords: Be,
    propertyKeywords: Re,
    nonStandardPropertyKeywords: We,
    colorKeywords: Ye,
    valueKeywords: Qe,
    fontProperties: Ze,
    allowNested: !0,
    lineComment: "//",
    tokenHooks: {
        "/": function(e, t) {
            return e.eat("/") ? (e.skipToEnd(), [
                "comment",
                "comment"
            ]) : e.eat("*") ? (t.tokenize = rt, rt(e, t)) : [
                "operator",
                "operator"
            ];
        },
        "@": function(e) {
            return e.eat("{") ? [
                null,
                "interpolation"
            ] : !e.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, !1) && (e.eatWhile(/[\w\\\-]/), e.match(/^\s*:/, !1) ? [
                "def",
                "variable-definition"
            ] : [
                "variableName",
                "variable"
            ]);
        },
        "&": function() {
            return [
                "atom",
                "atom"
            ];
        }
    }
}), it = Oe({
    name: "gss",
    documentTypes: Ie,
    mediaTypes: Ae,
    mediaFeatures: Fe,
    propertyKeywords: Re,
    nonStandardPropertyKeywords: We,
    fontProperties: Ze,
    counterDescriptors: Xe,
    colorKeywords: Ye,
    valueKeywords: Qe,
    supportsAtComponent: !0,
    tokenHooks: {
        "/": function(e, t) {
            return !!e.eat("*") && (t.tokenize = rt, rt(e, t));
        }
    }
});
var lt, st = Object.freeze({
    __proto__: null,
    mkCSS: Oe,
    keywords: et,
    css: nt,
    sCSS: ot,
    less: at,
    gss: it
}), ct = {
    break: !0,
    case: !0,
    chan: !0,
    const: !0,
    continue: !0,
    default: !0,
    defer: !0,
    else: !0,
    fallthrough: !0,
    for: !0,
    func: !0,
    go: !0,
    goto: !0,
    if: !0,
    import: !0,
    interface: !0,
    map: !0,
    package: !0,
    range: !0,
    return: !0,
    select: !0,
    struct: !0,
    switch: !0,
    type: !0,
    var: !0,
    bool: !0,
    byte: !0,
    complex64: !0,
    complex128: !0,
    float32: !0,
    float64: !0,
    int8: !0,
    int16: !0,
    int32: !0,
    int64: !0,
    string: !0,
    uint8: !0,
    uint16: !0,
    uint32: !0,
    uint64: !0,
    int: !0,
    uint: !0,
    uintptr: !0,
    error: !0,
    rune: !0,
    any: !0,
    comparable: !0
}, dt = {
    true: !0,
    false: !0,
    iota: !0,
    nil: !0,
    append: !0,
    cap: !0,
    close: !0,
    complex: !0,
    copy: !0,
    delete: !0,
    imag: !0,
    len: !0,
    make: !0,
    new: !0,
    panic: !0,
    print: !0,
    println: !0,
    real: !0,
    recover: !0
}, ut = /[+\-*&^%:=<>!|\/]/;
function pt(e, t) {
    var n, r = e.next();
    if ('"' == r || "'" == r || "`" == r) return t.tokenize = (n = r, function(e, t) {
        for(var r, o = !1, a = !1; null != (r = e.next());){
            if (r == n && !o) {
                a = !0;
                break;
            }
            o = !o && "`" != n && "\\" == r;
        }
        return (a || !o && "`" != n) && (t.tokenize = pt), "string";
    }), t.tokenize(e, t);
    if (/[\d\.]/.test(r)) return "." == r ? e.match(/^[0-9]+([eE][\-+]?[0-9]+)?/) : "0" == r ? e.match(/^[xX][0-9a-fA-F]+/) || e.match(/^0[0-7]+/) : e.match(/^[0-9]*\.?[0-9]*([eE][\-+]?[0-9]+)?/), "number";
    if (/[\[\]{}\(\),;\:\.]/.test(r)) return lt = r, null;
    if ("/" == r) {
        if (e.eat("*")) return t.tokenize = ft, ft(e, t);
        if (e.eat("/")) return e.skipToEnd(), "comment";
    }
    if (ut.test(r)) return e.eatWhile(ut), "operator";
    e.eatWhile(/[\w\$_\xa1-\uffff]/);
    var o = e.current();
    return ct.propertyIsEnumerable(o) ? ("case" != o && "default" != o || (lt = "case"), "keyword") : dt.propertyIsEnumerable(o) ? "atom" : "variable";
}
function ft(e, t) {
    for(var n, r = !1; n = e.next();){
        if ("/" == n && r) {
            t.tokenize = pt;
            break;
        }
        r = "*" == n;
    }
    return "comment";
}
function mt(e, t, n, r, o) {
    this.indented = e, this.column = t, this.type = n, this.align = r, this.prev = o;
}
function ht(e, t, n) {
    return e.context = new mt(e.indented, t, n, null, e.context);
}
function gt(e) {
    if (e.context.prev) {
        var t = e.context.type;
        return ")" != t && "]" != t && "}" != t || (e.indented = e.context.indented), e.context = e.context.prev;
    }
}
var bt = {
    name: "go",
    startState: function startState(e) {
        return {
            tokenize: null,
            context: new mt(-e, 0, "top", !1),
            indented: 0,
            startOfLine: !0
        };
    },
    token: function token(e, t) {
        var n = t.context;
        if (e.sol() && (null == n.align && (n.align = !1), t.indented = e.indentation(), t.startOfLine = !0, "case" == n.type && (n.type = "}")), e.eatSpace()) return null;
        lt = null;
        var r = (t.tokenize || pt)(e, t);
        return "comment" == r || (null == n.align && (n.align = !0), "{" == lt ? ht(t, e.column(), "}") : "[" == lt ? ht(t, e.column(), "]") : "(" == lt ? ht(t, e.column(), ")") : "case" == lt ? n.type = "case" : ("}" == lt && "}" == n.type || lt == n.type) && gt(t), t.startOfLine = !1), r;
    },
    indent: function indent(e, t, n) {
        if (e.tokenize != pt && null != e.tokenize) return null;
        var r = e.context, o = t && t.charAt(0);
        if ("case" == r.type && /^(?:case|default)\b/.test(t)) return r.indented;
        var a = o == r.type;
        return r.align ? r.column + (a ? 0 : 1) : r.indented + (a ? 0 : n.unit);
    },
    languageData: {
        indentOnInput: /^\s([{}]|case |default\s*:)$/,
        commentTokens: {
            line: "//",
            block: {
                open: "/*",
                close: "*/"
            }
        }
    }
};
var yt = Object.freeze({
    __proto__: null,
    go: bt
}), kt = {};
function wt(e, t) {
    for(var n = 0; n < t.length; n++)kt[t[n]] = e;
}
var vt = [
    "true",
    "false"
], xt = [
    "if",
    "then",
    "do",
    "else",
    "elif",
    "while",
    "until",
    "for",
    "in",
    "esac",
    "fi",
    "fin",
    "fil",
    "done",
    "exit",
    "set",
    "unset",
    "export",
    "function"
], _t = [
    "ab",
    "awk",
    "bash",
    "beep",
    "cat",
    "cc",
    "cd",
    "chown",
    "chmod",
    "chroot",
    "clear",
    "cp",
    "curl",
    "cut",
    "diff",
    "echo",
    "find",
    "gawk",
    "gcc",
    "get",
    "git",
    "grep",
    "hg",
    "kill",
    "killall",
    "ln",
    "ls",
    "make",
    "mkdir",
    "openssl",
    "mv",
    "nc",
    "nl",
    "node",
    "npm",
    "ping",
    "ps",
    "restart",
    "rm",
    "rmdir",
    "sed",
    "service",
    "sh",
    "shopt",
    "shred",
    "source",
    "sort",
    "sleep",
    "ssh",
    "start",
    "stop",
    "su",
    "sudo",
    "svn",
    "tee",
    "telnet",
    "top",
    "touch",
    "vi",
    "vim",
    "wall",
    "wc",
    "wget",
    "who",
    "write",
    "yes",
    "zsh"
];
function zt(e, t) {
    if (e.eatSpace()) return null;
    var n, r = e.sol(), o = e.next();
    if ("\\" === o) return e.next(), null;
    if ("'" === o || '"' === o || "`" === o) return t.tokens.unshift(Tt(o, "`" === o ? "quote" : "string")), Ct(e, t);
    if ("#" === o) return r && e.eat("!") ? (e.skipToEnd(), "meta") : (e.skipToEnd(), "comment");
    if ("$" === o) return t.tokens.unshift(Nt), Ct(e, t);
    if ("+" === o || "=" === o) return "operator";
    if ("-" === o) return e.eat("-"), e.eatWhile(/\w/), "attribute";
    if ("<" == o) {
        if (e.match("<<")) return "operator";
        var a = e.match(/^<-?\s*(?:['"]([^'"]*)['"]|([^'"\s]*))/);
        if (a) return t.tokens.unshift((n = a[1] || a[2], function(e, t) {
            return e.sol() && e.string == n && t.tokens.shift(), e.skipToEnd(), "string.special";
        })), "string.special";
    }
    if (/\d/.test(o) && (e.eatWhile(/\d/), e.eol() || !/\w/.test(e.peek()))) return "number";
    e.eatWhile(/[\w-]/);
    var i = e.current();
    return "=" === e.peek() && /\w+/.test(i) ? "def" : kt.hasOwnProperty(i) ? kt[i] : null;
}
function Tt(e, t) {
    var n = "(" == e ? ")" : "{" == e ? "}" : e;
    return function(r, o) {
        for(var a, i = !1; null != (a = r.next());){
            if (a === n && !i) {
                o.tokens.shift();
                break;
            }
            if ("$" === a && !i && "'" !== e && r.peek() != n) {
                i = !0, r.backUp(1), o.tokens.unshift(Nt);
                break;
            }
            if (!i && e !== n && a === e) return o.tokens.unshift(Tt(e, t)), Ct(r, o);
            if (!i && /['"]/.test(a) && !/['"]/.test(e)) {
                o.tokens.unshift(St(a, "string")), r.backUp(1);
                break;
            }
            i = !i && "\\" === a;
        }
        return t;
    };
}
function St(e, t) {
    return function(n, r) {
        return r.tokens[0] = Tt(e, t), n.next(), Ct(n, r);
    };
}
wt("atom", vt), wt("keyword", xt), wt("builtin", _t);
var Nt = function Nt(e, t) {
    t.tokens.length > 1 && e.eat("$");
    var n = e.next();
    return /['"({]/.test(n) ? (t.tokens[0] = Tt(n, "(" == n ? "quote" : "{" == n ? "def" : "string"), Ct(e, t)) : (/\d/.test(n) || e.eatWhile(/\w/), t.tokens.shift(), "def");
};
function Ct(e, t) {
    return (t.tokens[0] || zt)(e, t);
}
var jt = {
    name: "shell",
    startState: function startState() {
        return {
            tokens: []
        };
    },
    token: function token(e, t) {
        return Ct(e, t);
    },
    languageData: {
        autocomplete: vt.concat(xt, _t),
        closeBrackets: {
            brackets: [
                "(",
                "[",
                "{",
                "'",
                '"',
                "`"
            ]
        },
        commentTokens: {
            line: "#"
        }
    }
};
var qt = Object.freeze({
    __proto__: null,
    shell: jt
});
 //# sourceMappingURL=legacy.js.map


}),

}]);