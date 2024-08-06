"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_codemirror_next_chunk_angular_js"], {
"./third_party/codemirror.next/chunk/angular.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  angular: function() { return C; },
  angularLanguage: function() { return d; }
});
/* harmony import */var _codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.js */ "./third_party/codemirror.next/chunk/codemirror.js");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

var l = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E(function(O) {
    var _$r = O.pos;
    for(;;){
        if (10 == O.next) {
            O.advance();
            break;
        }
        if (123 == O.next && 123 == O.peek(1) || O.next < 0) break;
        O.advance();
    }
    O.pos > _$r && O.acceptToken(1);
});
function Q(O, r, e) {
    return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E(function(t) {
        var n = t.pos;
        for(; t.next != O && t.next >= 0 && (e || 38 != t.next && (123 != t.next || 123 != t.peek(1)));)t.advance();
        t.pos > n && t.acceptToken(r);
    });
}
var S = Q(39, 33, !1), s = Q(34, 34, !1), u = Q(39, 35, !0), q = Q(34, 36, !0), P = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.b.deserialize({
    version: 14,
    states: "(jOVOqOOOeQpOOOvO!bO'#CaOOOP'#Cx'#CxQVOqOOO!OQpO'#CfO!WQpO'#ClO!]QpO'#CrO!bQpO'#CsOOQO'#Cv'#CvQ!gQpOOQ!lQpOOQ!qQpOOOOOV,58{,58{O!vOpO,58{OOOP-E6v-E6vO!{QpO,59QO#TQpO,59QOOQO,59W,59WO#YQpO,59^OOQO,59_,59_O#_QpOOO#_QpOOO#gQpOOOOOV1G.g1G.gO#oQpO'#CyO#tQpO1G.lOOQO1G.l1G.lO#|QpO1G.lOOQO1G.x1G.xO$UO`O'#DUO$ZOWO'#DUOOQO'#Co'#CoQOQpOOOOQO'#Cu'#CuO$`OtO'#CwO$qOrO'#CwOOQO,59e,59eOOQO-E6w-E6wOOQO7+$W7+$WO%SQpO7+$WO%[QpO7+$WOOOO'#Cp'#CpO%aOpO,59pOOOO'#Cq'#CqO%fOpO,59pOOOS'#Cz'#CzO%kOtO,59cOOQO,59c,59cOOOQ'#C{'#C{O%|OrO,59cO&_QpO<<GrOOQO<<Gr<<GrOOQO1G/[1G/[OOOS-E6x-E6xOOQO1G.}1G.}OOOQ-E6y-E6yOOQOAN=^AN=^",
    stateData: "&d~OvOS~OPROSQOVROWRO~OZTO[XO^VOaUOhWO~OR]OU^O~O[`O^aO~O[bO~O[cO~O[dO~ObeO~ObfO~ObgO~ORhO~O]kOwiO~O[lO~O_mO~OynOzoO~OysOztO~O[uO~O]wOwiO~O_yOwiO~OtzO~Os|O~OSQOV!OOW!OOr!OOy!QO~OSQOV!ROW!ROq!ROz!QO~O_!TOwiO~O]!UO~Oy!VO~Oz!VO~OSQOV!OOW!OOr!OOy!XO~OSQOV!ROW!ROq!ROz!XO~O]!ZO~O",
    goto: "#dyPPPPPzPPPP!WPPPPP!WPP!Z!^!a!d!dP!g!j!m!p!v#Q#WPPPPPPPP#^SROSS!Os!PT!Rt!SRYPRqeR{nR}oRZPRqfR[PRqgQSOR_SQj`SvjxRxlQ!PsR!W!PQ!StR!Y!SQpeRrf",
    nodeNames: "⚠ Text Content }} {{ Interpolation InterpolationContent Entity InvalidEntity Attribute BoundAttributeName [ Identifier ] ( ) ReferenceName # Is ExpressionAttributeValue AttributeInterpolation AttributeInterpolation EventName DirectiveName * StatementAttributeValue AttributeName AttributeValue",
    maxTerm: 42,
    nodeProps: [
        [
            "openedBy",
            3,
            "{{",
            15,
            "("
        ],
        [
            "closedBy",
            4,
            "}}",
            14,
            ")"
        ],
        [
            "isolate",
            -4,
            5,
            19,
            25,
            27,
            ""
        ]
    ],
    skippedNodes: [
        0
    ],
    repeatNodeCount: 4,
    tokenData: "0r~RyOX#rXY$mYZ$mZ]#r]^$m^p#rpq$mqr#rrs%jst&Qtv#rvw&hwx)zxy*byz*xz{+`{}#r}!O+v!O!P-]!P!Q#r!Q![+v![!]+v!]!_#r!_!`-s!`!c#r!c!}+v!}#O.Z#O#P#r#P#Q.q#Q#R#r#R#S+v#S#T#r#T#o+v#o#p/X#p#q#r#q#r0Z#r%W#r%W;'S+v;'S;:j-V;:j;=`$g<%lO+vQ#wTUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rQ$ZSO#q#r#r;'S#r;'S;=`$g<%lO#rQ$jP;=`<%l#rR$t[UQvPOX#rXY$mYZ$mZ]#r]^$m^p#rpq$mq#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR%qTyPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR&XTaPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR&oXUQWPOp'[pq#rq!]'[!]!^#r!^#q'[#q#r(d#r;'S'[;'S;=`)t<%lO'[R'aXUQOp'[pq#rq!]'[!]!^'|!^#q'[#q#r(d#r;'S'[;'S;=`)t<%lO'[R(TTVPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR(gXOp'[pq#rq!]'[!]!^'|!^#q'[#q#r)S#r;'S'[;'S;=`)t<%lO'[P)VUOp)Sq!])S!]!^)i!^;'S)S;'S;=`)n<%lO)SP)nOVPP)qP;=`<%l)SR)wP;=`<%l'[R*RTzPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR*iT^PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+PT_PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+gThPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR+}b[PUQO}#r}!O+v!O!Q#r!Q![+v![!]+v!]!c#r!c!}+v!}#R#r#R#S+v#S#T#r#T#o+v#o#q#r#q#r$W#r%W#r%W;'S+v;'S;:j-V;:j;=`$g<%lO+vR-YP;=`<%l+vR-dTwPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR-zTUQbPO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR.bTZPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR.xT]PUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR/^VUQO#o#r#o#p/s#p#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#rR/zTSPUQO#q#r#q#r$W#r;'S#r;'S;=`$g<%lO#r~0^TO#q#r#q#r0m#r;'S#r;'S;=`$g<%lO#r~0rOR~",
    tokenizers: [
        l,
        S,
        s,
        u,
        q,
        0,
        1
    ],
    topRules: {
        Content: [
            0,
            2
        ],
        Attribute: [
            1,
            9
        ]
    },
    tokenPrec: 0
}), R = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.j.parser.configure({
    top: "SingleExpression"
}), $ = P.configure({
    props: [
        (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)({
            Text: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content,
            Is: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.definitionOperator,
            AttributeName: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeName,
            "AttributeValue ExpressionAttributeValue StatementAttributeValue": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeValue,
            Entity: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.character,
            InvalidEntity: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.invalid,
            "BoundAttributeName/Identifier": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeName,
            "EventName/Identifier": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.special(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeName),
            "ReferenceName/Identifier": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.variableName,
            "DirectiveName/Identifier": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.keyword,
            "{{ }}": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.brace,
            "( )": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.paren,
            "[ ]": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.bracket,
            "# '*'": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.punctuation
        })
    ]
}), g = {
    parser: R
}, c = {
    parser: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.j.parser
}, b = {
    parser: $.configure({
        wrap: (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(function(O, r) {
            return "InterpolationContent" == O.name ? g : null;
        })
    })
}, m = {
    parser: $.configure({
        wrap: (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(function(O, r) {
            var _$e;
            return "InterpolationContent" == O.name ? g : "AttributeInterpolation" != O.name ? null : "StatementAttributeValue" == (null === (_$e = O.node.parent) || void 0 === _$e ? void 0 : _$e.name) ? c : g;
        }),
        top: "Attribute"
    })
}, v = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.h)();
function W(O) {
    return O.configure({
        wrap: (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(f)
    }, "angular");
}
var d = W(v.language);
function f(O, r) {
    switch(O.name){
        case "Attribute":
            return /^[*#(\[]|\{\{/.test(r.read(O.from, O.to)) ? m : null;
        case "Text":
            return b;
    }
    return null;
}
function C() {
    var _$O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$r = v;
    if (_$O.base) {
        if ("html" != _$O.base.language.name || !_instanceof(_$O.base.language, _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.L)) throw new RangeError("The base option must be the result of calling html(...)");
        _$r = _$O.base;
    }
    return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a(_$r.language == v.language ? d : W(_$r.language), [
        _$r.support,
        _$r.language.data.of({
            closeBrackets: {
                brackets: [
                    "[",
                    "{",
                    '"'
                ]
            },
            indentOnInput: /^\s*[\}\]]$/
        })
    ]);
}
 //# sourceMappingURL=angular.js.map


}),

}]);