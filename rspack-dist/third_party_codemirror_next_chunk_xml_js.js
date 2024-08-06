"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_codemirror_next_chunk_xml_js"], {
"./third_party/codemirror.next/chunk/xml.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  completeFromSchema: function() { return Q; },
  xml: function() { return G; },
  xmlLanguage: function() { return E; }
});
/* harmony import */var _codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.js */ "./third_party/codemirror.next/chunk/codemirror.js");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function $(e) {
    return 45 == e || 46 == e || 58 == e || e >= 65 && e <= 90 || 95 == e || e >= 97 && e <= 122 || e >= 161;
}
var c = null, p = null, S = 0;
function g(e, O) {
    var _$t = e.pos + O;
    if (p == e && S == _$t) return c;
    for(; 9 == (_$n = e.peek(O)) || 10 == _$n || 13 == _$n || 32 == _$n;)O++;
    var _$n;
    var _$a = "";
    for(;;){
        var _$t1 = e.peek(O);
        if (!$(_$t1)) break;
        _$a += String.fromCharCode(_$t1), O++;
    }
    return p = e, S = _$t, c = _$a || null;
}
function u(e, O) {
    this.name = e, this.parent = O, this.hash = O ? O.hash : 0;
    for(var _$O = 0; _$O < e.length; _$O++)this.hash += (this.hash << 4) + e.charCodeAt(_$O) + (e.charCodeAt(_$O) << 8);
}
var m = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.H({
    start: null,
    shift: function(e, O, t, n) {
        return 1 == O ? new u(g(n, 1) || "", e) : e;
    },
    reduce: function(e, O) {
        return 11 == O && e ? e.parent : e;
    },
    reuse: function reuse(e, O, t, n) {
        var _$a = O.type.id;
        return 1 == _$a || 13 == _$a ? new u(g(n, 1) || "", e) : e;
    },
    hash: function(e) {
        return e ? e.hash : 0;
    },
    strict: !1
}), f = new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E(function(e, O) {
    if (60 == e.next) {
        if (e.advance(), 47 == e.next) {
            e.advance();
            var _$t = g(e, 0);
            if (!_$t) return e.acceptToken(5);
            if (O.context && _$t == O.context.name) return e.acceptToken(2);
            for(var _$n = O.context; _$n; _$n = _$n.parent)if (_$n.name == _$t) return e.acceptToken(3, -2);
            e.acceptToken(4);
        } else if (33 != e.next && 63 != e.next) return e.acceptToken(1);
    }
}, {
    contextual: !0
});
function d(e, t) {
    return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E(function(O) {
        var _$n = 0, _$a = t.charCodeAt(0);
        e: for(; !(O.next < 0); O.advance(), _$n++)if (O.next == _$a) {
            for(var _$e = 1; _$e < t.length; _$e++)if (O.peek(_$e) != t.charCodeAt(_$e)) continue e;
            break;
        }
        _$n && O.acceptToken(e);
    });
}
var V = d(35, "--\x3e"), P = d(36, "?>"), T = d(37, "]]>"), h = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)({
    Text: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content,
    "StartTag StartCloseTag EndTag SelfCloseEndTag": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.angleBracket,
    TagName: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.tagName,
    "MismatchedCloseTag/TagName": [
        _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.tagName,
        _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.invalid
    ],
    AttributeName: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeName,
    AttributeValue: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeValue,
    Is: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.definitionOperator,
    "EntityReference CharacterReference": _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.character,
    Comment: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.blockComment,
    ProcessingInst: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction,
    DoctypeDecl: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.documentMeta,
    Cdata: _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.special(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.string)
}), _ = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.b.deserialize({
    version: 14,
    states: ",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",
    stateData: ")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",
    goto: "%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",
    nodeNames: "⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",
    maxTerm: 47,
    context: m,
    nodeProps: [
        [
            "closedBy",
            1,
            "SelfCloseEndTag EndTag",
            13,
            "CloseTag MissingCloseTag"
        ],
        [
            "openedBy",
            12,
            "StartTag StartCloseTag",
            19,
            "OpenTag",
            20,
            "StartTag"
        ],
        [
            "isolate",
            -6,
            13,
            18,
            19,
            21,
            22,
            24,
            ""
        ]
    ],
    propSources: [
        h
    ],
    skippedNodes: [
        0
    ],
    repeatNodeCount: 8,
    tokenData: "Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",
    tokenizers: [
        f,
        V,
        P,
        T,
        0,
        1,
        2,
        3
    ],
    topRules: {
        Document: [
            0,
            6
        ]
    },
    tokenPrec: 0
});
function W(e, O) {
    var _$t = O && O.getChild("TagName");
    return _$t ? e.sliceString(_$t.from, _$t.to) : "";
}
function b(e, O) {
    var _$t = O && O.firstChild;
    return _$t && "OpenTag" == _$t.name ? W(e, _$t) : "";
}
function v(e) {
    for(var _$O = e && e.parent; _$O; _$O = _$O.parent)if ("Element" == _$O.name) return _$O;
    return null;
}
var C = function C(e, O, t) {
    "use strict";
    _class_call_check(this, C);
    this.attrs = O, this.attrValues = t, this.children = [], this.name = e.name, this.completion = Object.assign(Object.assign({
        type: "type"
    }, e.completion || {}), {
        label: this.name
    }), this.openCompletion = Object.assign(Object.assign({}, this.completion), {
        label: "<" + this.name
    }), this.closeCompletion = Object.assign(Object.assign({}, this.completion), {
        label: "</" + this.name + ">",
        boost: 2
    }), this.closeNameCompletion = Object.assign(Object.assign({}, this.completion), {
        label: this.name + ">"
    }), this.text = e.textContent ? e.textContent.map(function(e) {
        return {
            label: e,
            type: "text"
        };
    }) : [];
};
var w = /^[:\-\.\w\u00b7-\uffff]*$/;
function x(e) {
    return Object.assign(Object.assign({
        type: "property"
    }, e.completion || {}), {
        label: e.name
    });
}
function X(e) {
    return "string" == typeof e ? {
        label: '"'.concat(e, '"'),
        type: "constant"
    } : /^"/.test(e.label) ? e : Object.assign(Object.assign({}, e), {
        label: '"'.concat(e.label, '"')
    });
}
function Q(e, O) {
    var _$t = [], _$n = [], _$a = Object.create(null);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = O[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _$e = _step.value;
            var _$O = x(_$e);
            _$t.push(_$O), _$e.global && _$n.push(_$O), _$e.values && (_$a[_$e.name] = _$e.values.map(X));
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
    var _$r = [], _$l = [], _$o = Object.create(null);
    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
    try {
        var _loop = function() {
            var _$O = _step1.value;
            var _$e = _$n, _$s = _$a;
            _$O.attributes && (_$e = _$e.concat(_$O.attributes.map(function(e) {
                return "string" == typeof e ? _$t.find(function(O) {
                    return O.label == e;
                }) || {
                    label: e,
                    type: "property"
                } : (e.values && (_$s == _$a && (_$s = Object.create(_$s)), _$s[e.name] = e.values.map(X)), x(e));
            })));
            var i = new C(_$O, _$e, _$s);
            _$o[i.name] = i, _$r.push(i), _$O.top && _$l.push(i);
        };
        for(var _iterator1 = e[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true)_loop();
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
    _$l.length || (_$l = _$r);
    for(var _$O1 = 0; _$O1 < _$r.length; _$O1++){
        var _$t1 = e[_$O1], _$n1 = _$r[_$O1];
        var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
        if (_$t1.children) try {
            for(var _iterator2 = _$t1.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                var _$e1 = _step2.value;
                _$o[_$e1] && _$n1.children.push(_$o[_$e1]);
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
        else _$n1.children = _$r;
    }
    return function(e) {
        var _$O;
        var _e_state = e.state, _$t = _e_state.doc, _$s = function(e, O) {
            var _$t;
            var _$n = (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.q)(e).resolveInner(O, -1), _$a = null;
            for(var _$e = _$n; !_$a && _$e.parent; _$e = _$e.parent)"OpenTag" != _$e.name && "CloseTag" != _$e.name && "SelfClosingTag" != _$e.name && "MismatchedCloseTag" != _$e.name || (_$a = _$e);
            if (_$a && (_$a.to > O || _$a.lastChild.type.isError)) {
                var _$e1 = _$a.parent;
                if ("TagName" == _$n.name) return "CloseTag" == _$a.name || "MismatchedCloseTag" == _$a.name ? {
                    type: "closeTag",
                    from: _$n.from,
                    context: _$e1
                } : {
                    type: "openTag",
                    from: _$n.from,
                    context: v(_$e1)
                };
                if ("AttributeName" == _$n.name) return {
                    type: "attrName",
                    from: _$n.from,
                    context: _$a
                };
                if ("AttributeValue" == _$n.name) return {
                    type: "attrValue",
                    from: _$n.from,
                    context: _$a
                };
                var _$t1 = _$n == _$a || "Attribute" == _$n.name ? _$n.childBefore(O) : _$n;
                return "StartTag" == (null == _$t1 ? void 0 : _$t1.name) ? {
                    type: "openTag",
                    from: O,
                    context: v(_$e1)
                } : "StartCloseTag" == (null == _$t1 ? void 0 : _$t1.name) && _$t1.to <= O ? {
                    type: "closeTag",
                    from: O,
                    context: _$e1
                } : "Is" == (null == _$t1 ? void 0 : _$t1.name) ? {
                    type: "attrValue",
                    from: O,
                    context: _$a
                } : _$t1 ? {
                    type: "attrName",
                    from: O,
                    context: _$a
                } : null;
            }
            if ("StartCloseTag" == _$n.name) return {
                type: "closeTag",
                from: O,
                context: _$n.parent
            };
            for(; _$n.parent && _$n.to == O && !(null === (_$t = _$n.lastChild) || void 0 === _$t ? void 0 : _$t.type.isError);)_$n = _$n.parent;
            return "Element" == _$n.name || "Text" == _$n.name || "Document" == _$n.name ? {
                type: "tag",
                from: O,
                context: "Element" == _$n.name ? _$n : v(_$n)
            } : null;
        }(e.state, e.pos);
        if (!_$s || "tag" == _$s.type && !e.explicit) return null;
        var i = _$s.type, $ = _$s.from, c = _$s.context;
        if ("openTag" == i) {
            var _$e = _$l, _$O1 = b(_$t, c);
            if (_$O1) {
                var _$t1 = _$o[_$O1];
                _$e = (null == _$t1 ? void 0 : _$t1.children) || _$r;
            }
            return {
                from: $,
                options: _$e.map(function(e) {
                    return e.completion;
                }),
                validFor: w
            };
        }
        if ("closeTag" == i) {
            var _$n1 = b(_$t, c);
            return _$n1 ? {
                from: $,
                to: e.pos + (">" == _$t.sliceString(e.pos, e.pos + 1) ? 1 : 0),
                options: [
                    (null === (_$O = _$o[_$n1]) || void 0 === _$O ? void 0 : _$O.closeNameCompletion) || {
                        label: _$n1 + ">",
                        type: "type"
                    }
                ],
                validFor: w
            } : null;
        }
        if ("attrName" == i) {
            var _$e1 = _$o[W(_$t, c)];
            return {
                from: $,
                options: (null == _$e1 ? void 0 : _$e1.attrs) || _$n,
                validFor: w
            };
        }
        if ("attrValue" == i) {
            var _$O2 = function(e, O, t) {
                var _$n = O && O.getChildren("Attribute").find(function(e) {
                    return e.from <= t && e.to >= t;
                }), _$a = _$n && _$n.getChild("AttributeName");
                return _$a ? e.sliceString(_$a.from, _$a.to) : "";
            }(_$t, c, $);
            if (!_$O2) return null;
            var _$n2 = _$o[W(_$t, c)], _$r1 = ((null == _$n2 ? void 0 : _$n2.attrValues) || _$a)[_$O2];
            return _$r1 && _$r1.length ? {
                from: $,
                to: e.pos + ('"' == _$t.sliceString(e.pos, e.pos + 1) ? 1 : 0),
                options: _$r1,
                validFor: /^"[^"]*"?$/
            } : null;
        }
        if ("tag" == i) {
            var _$O3 = b(_$t, c), _$n3 = _$o[_$O3], _$a1 = [], _$s1 = c && c.lastChild;
            !_$O3 || _$s1 && "CloseTag" == _$s1.name && W(_$t, _$s1) == _$O3 || _$a1.push(_$n3 ? _$n3.closeCompletion : {
                label: "</" + _$O3 + ">",
                type: "type",
                boost: 2
            });
            var i1 = _$a1.concat(((null == _$n3 ? void 0 : _$n3.children) || (c ? _$r : _$l)).map(function(e) {
                return e.openCompletion;
            }));
            if (c && (null == _$n3 ? void 0 : _$n3.text.length)) {
                var _$O4 = c.firstChild;
                _$O4.to > e.pos - 20 && !/\S/.test(e.state.sliceDoc(_$O4.to, e.pos)) && (i1 = i1.concat(_$n3.text));
            }
            return {
                from: $,
                options: i1,
                validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
            };
        }
        return null;
    };
}
var E = _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.L.define({
    name: "xml",
    parser: _.configure({
        props: [
            _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.i.add({
                Element: function Element(e) {
                    var _$O = /^\s*<\//.test(e.textAfter);
                    return e.lineIndent(e.node.from) + (_$O ? 0 : e.unit);
                },
                "OpenTag CloseTag SelfClosingTag": function(e) {
                    return e.column(e.node.from) + e.unit;
                }
            }),
            _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.e.add({
                Element: function Element(e) {
                    var _$O = e.firstChild, _$t = e.lastChild;
                    return _$O && "OpenTag" == _$O.name ? {
                        from: _$O.to,
                        to: "CloseTag" == _$t.name ? _$t.from : e.to
                    } : null;
                }
            }),
            _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.Y.add({
                "OpenTag CloseTag": function(e) {
                    return e.getChild("TagName");
                }
            })
        ]
    }),
    languageData: {
        commentTokens: {
            block: {
                open: "\x3c!--",
                close: "--\x3e"
            }
        },
        indentOnInput: /^\s*<\/$/
    }
});
function G() {
    var _$e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a(E, E.data.of({
        autocomplete: Q(_$e.elements || [], _$e.attributes || [])
    }));
}
 //# sourceMappingURL=xml.js.map


}),

}]);