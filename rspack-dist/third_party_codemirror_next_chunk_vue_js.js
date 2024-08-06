"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_codemirror_next_chunk_vue_js"], {
"./third_party/codemirror.next/chunk/vue.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  vue: function() { return X; },
  vueLanguage: function() { return P; }
});
/* harmony import */var _codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.js */ "./third_party/codemirror.next/chunk/codemirror.js");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}

var l = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.b.deserialize({
    version: 14,
    states: "%pOVOWOOObQPOOOpOSO'#C_OOOO'#Cp'#CpQVOWOOQxQPOOO!TQQOOQ!YQPOOOOOO,58y,58yO!_OSO,58yOOOO-E6n-E6nO!dQQO'#CqQ{QPOOO!iQPOOQ{QPOOO!qQPOOOOOO1G.e1G.eOOQO,59],59]OOQO-E6o-E6oO!yOpO'#CiO#RO`O'#CiQOQPOOO#ZO#tO'#CmO#fO!bO'#CmOOQO,59T,59TO#qOpO,59TO#vO`O,59TOOOO'#Cr'#CrO#{O#tO,59XOOQO,59X,59XOOOO'#Cs'#CsO$WO!bO,59XOOQO1G.o1G.oOOOO-E6p-E6pOOQO1G.s1G.sOOOO-E6q-E6q",
    stateData: "$g~OjOS~OQROUROkQO~OWTOXUOZUO`VO~OSXOTWO~OXUO[]OlZO~OY^O~O[_O~OT`O~OYaO~OmcOodO~OmfOogO~O^iOnhO~O_jOphO~ObkOqkOrmO~OcnOsnOtmO~OnpO~OppO~ObkOqkOrrO~OcnOsnOtrO~OWX`~",
    goto: "!^hPPPiPPPPPPPPPmPPPpPPsy!Q!WTROSRe]Re_QSORYSS[T^Rb[QlfRqlQogRso",
    nodeNames: "⚠ Content Text Interpolation InterpolationContent }} Entity Attribute VueAttributeName : Identifier @ Is ScriptAttributeValue AttributeScript AttributeScript AttributeName AttributeValue Entity Entity",
    maxTerm: 36,
    nodeProps: [
        [
            "isolate",
            -3,
            3,
            13,
            17,
            ""
        ]
    ],
    skippedNodes: [
        0
    ],
    repeatNodeCount: 4,
    tokenData: "'y~RdXY!aYZ!a]^!apq!ars!rwx!w}!O!|!O!P#t!Q![#y![!]$s!_!`%g!b!c%l!c!}#y#R#S#y#T#j#y#j#k%q#k#o#y%W;'S#y;'S;:j$m<%lO#y~!fSj~XY!aYZ!a]^!apq!a~!wOm~~!|Oo~!b#RX`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|!b#qP;=`<%l!|~#yOl~%W$QXY#t`!b}!O!|!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y%W$pP;=`<%l#y~$zXX~`!b}!O!|!Q![!|![!]!|!c!}!|#R#S!|#T#o!|%W;'S!|;'S;:j#n<%lO!|~%lO[~~%qOZ~%W%xXY#t`!b}!O&e!Q![#y![!]!|!c!}#y#R#S#y#T#o#y%W;'S#y;'S;:j$m<%lO#y!b&jX`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|!b'^XW!b`!b}!O!|!Q![!|![!]!|!c!}'V#R#S!|#T#o'V%W;'S!|;'S;:j#n<%lO!|",
    tokenizers: [
        6,
        7,
        new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.X("b~RP#q#rU~XP#q#r[~aOT~~", 17, 4),
        new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.X("!k~RQvwX#o#p!_~^TU~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOU~~![P;=`<%lm~!bP#o#p!e~!jOk~~", 72, 2),
        new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.X("[~RPwxU~ZOp~~", 11, 15),
        new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.X("[~RPrsU~ZOn~~", 11, 14),
        new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.X("!e~RQvwXwx!_~^Tc~Opmq!]m!^;'Sm;'S;=`!X<%lOm~pUOpmq!]m!]!^!S!^;'Sm;'S;=`!X<%lOm~!XOc~~![P;=`<%lm~!dOt~~", 66, 35),
        new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.X("!e~RQrsXvw^~^Or~~cTb~Oprq!]r!^;'Sr;'S;=`!^<%lOr~uUOprq!]r!]!^!X!^;'Sr;'S;=`!^<%lOr~!^Ob~~!aP;=`<%lr~", 66, 33)
    ],
    topRules: {
        Content: [
            0,
            1
        ],
        Attribute: [
            1,
            7
        ]
    },
    tokenPrec: 157
}), p = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.j.parser.configure({
    top: "SingleExpression"
}), u = l.configure({
    props: [
        (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)({
            Text: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content,
            Is: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.definitionOperator,
            AttributeName: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeName,
            VueAttributeName: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.keyword,
            Identifier: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.variableName,
            "AttributeValue ScriptAttributeValue": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeValue,
            Entity: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.character,
            "{{ }}": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.brace,
            "@ :": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.punctuation
        })
    ]
}), m = {
    parser: p
}, S = {
    parser: u.configure({
        wrap: (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(function(O, t) {
            return "InterpolationContent" == O.name ? m : null;
        })
    })
}, b = {
    parser: u.configure({
        wrap: (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(function(O, t) {
            return "AttributeScript" == O.name ? m : null;
        }),
        top: "Attribute"
    })
}, c = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.h)();
function Q(O) {
    return O.configure({
        dialect: "selfClosing",
        wrap: (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(y)
    }, "vue");
}
var P = Q(c.language);
function y(O, t) {
    switch(O.name){
        case "Attribute":
            return /^(@|:|v-)/.test(t.read(O.from, O.from + 2)) ? b : null;
        case "Text":
            return S;
    }
    return null;
}
function X() {
    var _$O = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var _$t = c;
    if (_$O.base) {
        if ("html" != _$O.base.language.name || !_instanceof(_$O.base.language, _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.L)) throw new RangeError("The base option must be the result of calling html(...)");
        _$t = _$O.base;
    }
    return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a(_$t.language == c.language ? P : Q(_$t.language), [
        _$t.support,
        _$t.language.data.of({
            closeBrackets: {
                brackets: [
                    "{",
                    '"'
                ]
            }
        })
    ]);
}
 //# sourceMappingURL=vue.js.map


}),

}]);