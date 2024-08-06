"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_codemirror_next_chunk_wast_js"], {
"./third_party/codemirror.next/chunk/wast.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  wast: function() { return n; },
  wastLanguage: function() { return i; }
});
/* harmony import */var _codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.js */ "./third_party/codemirror.next/chunk/codemirror.js");

var S = {
    __proto__: null,
    anyref: 34,
    dataref: 34,
    eqref: 34,
    externref: 34,
    i31ref: 34,
    funcref: 34,
    i8: 34,
    i16: 34,
    i32: 34,
    i64: 34,
    f32: 34,
    f64: 34
}, Q = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.b.deserialize({
    version: 14,
    states: "!^Q]QPOOOqQPO'#CbOOQO'#Cd'#CdOOQO'#Cl'#ClOOQO'#Ch'#ChQ]QPOOOOQO,58|,58|OxQPO,58|OOQO-E6f-E6fOOQO1G.h1G.h",
    stateData: "!P~O_OSPOSQOS~OTPOVROXROYROZROaQO~OSUO~P]OSXO~P]O",
    goto: "xaPPPPPPbPbPPPhPPPrXROPTVQTOQVPTWTVXSOPTV",
    nodeNames: "⚠ LineComment BlockComment Module ) ( App Identifier Type Keyword Number String",
    maxTerm: 17,
    nodeProps: [
        [
            "isolate",
            -3,
            1,
            2,
            11,
            ""
        ],
        [
            "openedBy",
            4,
            "("
        ],
        [
            "closedBy",
            5,
            ")"
        ],
        [
            "group",
            -6,
            6,
            7,
            8,
            9,
            10,
            11,
            "Expression"
        ]
    ],
    skippedNodes: [
        0,
        1,
        2
    ],
    repeatNodeCount: 1,
    tokenData: "0o~R^XY}YZ}]^}pq}rs!Stu#pxy'Uyz(e{|(j}!O(j!Q!R(s!R![*p!]!^.^#T#o.{~!SO_~~!VVOr!Srs!ls#O!S#O#P!q#P;'S!S;'S;=`#j<%lO!S~!qOZ~~!tRO;'S!S;'S;=`!};=`O!S~#QWOr!Srs!ls#O!S#O#P!q#P;'S!S;'S;=`#j;=`<%l!S<%lO!S~#mP;=`<%l!S~#siqr%bst%btu%buv%bvw%bwx%bz{%b{|%b}!O%b!O!P%b!P!Q%b!Q![%b![!]%b!^!_%b!_!`%b!`!a%b!a!b%b!b!c%b!c!}%b#Q#R%b#R#S%b#S#T%b#T#o%b#p#q%b#r#s%b~%giV~qr%bst%btu%buv%bvw%bwx%bz{%b{|%b}!O%b!O!P%b!P!Q%b!Q![%b![!]%b!^!_%b!_!`%b!`!a%b!a!b%b!b!c%b!c!}%b#Q#R%b#R#S%b#S#T%b#T#o%b#p#q%b#r#s%b~'ZPT~!]!^'^~'aTO!]'^!]!^'p!^;'S'^;'S;=`(_<%lO'^~'sVOy'^yz(Yz!]'^!]!^'p!^;'S'^;'S;=`(_<%lO'^~(_OQ~~(bP;=`<%l'^~(jOS~~(mQ!Q!R(s!R![*p~(xUY~!O!P)[!Q![*p!g!h){#R#S+U#X#Y){#l#m+[~)aRY~!Q![)j!g!h){#X#Y){~)oSY~!Q![)j!g!h){#R#S*j#X#Y){~*OR{|*X}!O*X!Q![*_~*[P!Q![*_~*dQY~!Q![*_#R#S*X~*mP!Q![)j~*uTY~!O!P)[!Q![*p!g!h){#R#S+U#X#Y){~+XP!Q![*p~+_R!Q![+h!c!i+h#T#Z+h~+mVY~!O!P,S!Q![+h!c!i+h!r!s-P#R#S+[#T#Z+h#d#e-P~,XTY~!Q![,h!c!i,h!r!s-P#T#Z,h#d#e-P~,mUY~!Q![,h!c!i,h!r!s-P#R#S.Q#T#Z,h#d#e-P~-ST{|-c}!O-c!Q![-o!c!i-o#T#Z-o~-fR!Q![-o!c!i-o#T#Z-o~-tSY~!Q![-o!c!i-o#R#S-c#T#Z-o~.TR!Q![,h!c!i,h#T#Z,h~.aP!]!^.d~.iSP~OY.dZ;'S.d;'S;=`.u<%lO.d~.xP;=`<%l.d~/QiX~qr.{st.{tu.{uv.{vw.{wx.{z{.{{|.{}!O.{!O!P.{!P!Q.{!Q![.{![!].{!^!_.{!_!`.{!`!a.{!a!b.{!b!c.{!c!}.{#Q#R.{#R#S.{#S#T.{#T#o.{#p#q.{#r#s.{",
    tokenizers: [
        0
    ],
    topRules: {
        Module: [
            0,
            3
        ]
    },
    specialized: [
        {
            term: 9,
            get: function(e) {
                return S[e] || -1;
            }
        }
    ],
    tokenPrec: 0
}), i = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.L.define({
    name: "wast",
    parser: Q.configure({
        props: [
            _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.i.add({
                App: (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.d)({
                    closing: ")",
                    align: !1
                })
            }),
            _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.e.add({
                App: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.g,
                BlockComment: function(e) {
                    return {
                        from: e.from + 2,
                        to: e.to - 2
                    };
                }
            }),
            (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)({
                Keyword: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.keyword,
                Type: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.typeName,
                Number: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.number,
                String: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.string,
                Identifier: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.variableName,
                LineComment: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.lineComment,
                BlockComment: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.blockComment,
                "( )": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.paren
            })
        ]
    }),
    languageData: {
        commentTokens: {
            line: ";;",
            block: {
                open: "(;",
                close: ";)"
            }
        },
        closeBrackets: {
            brackets: [
                "(",
                '"'
            ]
        }
    }
});
function n() {
    return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a(i);
}
 //# sourceMappingURL=wast.js.map


}),

}]);