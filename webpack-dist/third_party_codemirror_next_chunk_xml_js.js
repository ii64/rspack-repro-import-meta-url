"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_codemirror_next_chunk_xml_js"],{

/***/ "./third_party/codemirror.next/chunk/xml.js":
/*!**************************************************!*\
  !*** ./third_party/codemirror.next/chunk/xml.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeFromSchema: () => (/* binding */ Q),
/* harmony export */   xml: () => (/* binding */ G),
/* harmony export */   xmlLanguage: () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var _codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.js */ "./third_party/codemirror.next/chunk/codemirror.js");
function $(e){return 45==e||46==e||58==e||e>=65&&e<=90||95==e||e>=97&&e<=122||e>=161}let c=null,p=null,S=0;function g(e,O){let t=e.pos+O;if(p==e&&S==t)return c;for(;9==(n=e.peek(O))||10==n||13==n||32==n;)O++;var n;let a="";for(;;){let t=e.peek(O);if(!$(t))break;a+=String.fromCharCode(t),O++}return p=e,S=t,c=a||null}function u(e,O){this.name=e,this.parent=O,this.hash=O?O.hash:0;for(let O=0;O<e.length;O++)this.hash+=(this.hash<<4)+e.charCodeAt(O)+(e.charCodeAt(O)<<8)}const m=new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.H({start:null,shift:(e,O,t,n)=>1==O?new u(g(n,1)||"",e):e,reduce:(e,O)=>11==O&&e?e.parent:e,reuse(e,O,t,n){let a=O.type.id;return 1==a||13==a?new u(g(n,1)||"",e):e},hash:e=>e?e.hash:0,strict:!1}),f=new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E(((e,O)=>{if(60==e.next)if(e.advance(),47==e.next){e.advance();let t=g(e,0);if(!t)return e.acceptToken(5);if(O.context&&t==O.context.name)return e.acceptToken(2);for(let n=O.context;n;n=n.parent)if(n.name==t)return e.acceptToken(3,-2);e.acceptToken(4)}else if(33!=e.next&&63!=e.next)return e.acceptToken(1)}),{contextual:!0});function d(e,t){return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E((O=>{let n=0,a=t.charCodeAt(0);e:for(;!(O.next<0);O.advance(),n++)if(O.next==a){for(let e=1;e<t.length;e++)if(O.peek(e)!=t.charCodeAt(e))continue e;break}n&&O.acceptToken(e)}))}const V=d(35,"--\x3e"),P=d(36,"?>"),T=d(37,"]]>"),h=(0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)({Text:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.angleBracket,TagName:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.tagName,"MismatchedCloseTag/TagName":[_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.tagName,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.invalid],AttributeName:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeName,AttributeValue:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeValue,Is:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.definitionOperator,"EntityReference CharacterReference":_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.character,Comment:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.blockComment,ProcessingInst:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction,DoctypeDecl:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.documentMeta,Cdata:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.special(_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.string)}),_=_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.b.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:m,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"],["isolate",-6,13,18,19,21,22,24,""]],propSources:[h],skippedNodes:[0],repeatNodeCount:8,tokenData:"Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[f,V,P,T,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});function W(e,O){let t=O&&O.getChild("TagName");return t?e.sliceString(t.from,t.to):""}function b(e,O){let t=O&&O.firstChild;return t&&"OpenTag"==t.name?W(e,t):""}function v(e){for(let O=e&&e.parent;O;O=O.parent)if("Element"==O.name)return O;return null}class C{constructor(e,O,t){this.attrs=O,this.attrValues=t,this.children=[],this.name=e.name,this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=e.textContent?e.textContent.map((e=>({label:e,type:"text"}))):[]}}const w=/^[:\-\.\w\u00b7-\uffff]*$/;function x(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function X(e){return"string"==typeof e?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function Q(e,O){let t=[],n=[],a=Object.create(null);for(let e of O){let O=x(e);t.push(O),e.global&&n.push(O),e.values&&(a[e.name]=e.values.map(X))}let r=[],l=[],o=Object.create(null);for(let O of e){let e=n,s=a;O.attributes&&(e=e.concat(O.attributes.map((e=>"string"==typeof e?t.find((O=>O.label==e))||{label:e,type:"property"}:(e.values&&(s==a&&(s=Object.create(s)),s[e.name]=e.values.map(X)),x(e))))));let i=new C(O,e,s);o[i.name]=i,r.push(i),O.top&&l.push(i)}l.length||(l=r);for(let O=0;O<r.length;O++){let t=e[O],n=r[O];if(t.children)for(let e of t.children)o[e]&&n.children.push(o[e]);else n.children=r}return e=>{var O;let{doc:t}=e.state,s=function(e,O){var t;let n=(0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.q)(e).resolveInner(O,-1),a=null;for(let e=n;!a&&e.parent;e=e.parent)"OpenTag"!=e.name&&"CloseTag"!=e.name&&"SelfClosingTag"!=e.name&&"MismatchedCloseTag"!=e.name||(a=e);if(a&&(a.to>O||a.lastChild.type.isError)){let e=a.parent;if("TagName"==n.name)return"CloseTag"==a.name||"MismatchedCloseTag"==a.name?{type:"closeTag",from:n.from,context:e}:{type:"openTag",from:n.from,context:v(e)};if("AttributeName"==n.name)return{type:"attrName",from:n.from,context:a};if("AttributeValue"==n.name)return{type:"attrValue",from:n.from,context:a};let t=n==a||"Attribute"==n.name?n.childBefore(O):n;return"StartTag"==(null==t?void 0:t.name)?{type:"openTag",from:O,context:v(e)}:"StartCloseTag"==(null==t?void 0:t.name)&&t.to<=O?{type:"closeTag",from:O,context:e}:"Is"==(null==t?void 0:t.name)?{type:"attrValue",from:O,context:a}:t?{type:"attrName",from:O,context:a}:null}if("StartCloseTag"==n.name)return{type:"closeTag",from:O,context:n.parent};for(;n.parent&&n.to==O&&!(null===(t=n.lastChild)||void 0===t?void 0:t.type.isError);)n=n.parent;return"Element"==n.name||"Text"==n.name||"Document"==n.name?{type:"tag",from:O,context:"Element"==n.name?n:v(n)}:null}(e.state,e.pos);if(!s||"tag"==s.type&&!e.explicit)return null;let{type:i,from:$,context:c}=s;if("openTag"==i){let e=l,O=b(t,c);if(O){let t=o[O];e=(null==t?void 0:t.children)||r}return{from:$,options:e.map((e=>e.completion)),validFor:w}}if("closeTag"==i){let n=b(t,c);return n?{from:$,to:e.pos+(">"==t.sliceString(e.pos,e.pos+1)?1:0),options:[(null===(O=o[n])||void 0===O?void 0:O.closeNameCompletion)||{label:n+">",type:"type"}],validFor:w}:null}if("attrName"==i){let e=o[W(t,c)];return{from:$,options:(null==e?void 0:e.attrs)||n,validFor:w}}if("attrValue"==i){let O=function(e,O,t){let n=O&&O.getChildren("Attribute").find((e=>e.from<=t&&e.to>=t)),a=n&&n.getChild("AttributeName");return a?e.sliceString(a.from,a.to):""}(t,c,$);if(!O)return null;let n=o[W(t,c)],r=((null==n?void 0:n.attrValues)||a)[O];return r&&r.length?{from:$,to:e.pos+('"'==t.sliceString(e.pos,e.pos+1)?1:0),options:r,validFor:/^"[^"]*"?$/}:null}if("tag"==i){let O=b(t,c),n=o[O],a=[],s=c&&c.lastChild;!O||s&&"CloseTag"==s.name&&W(t,s)==O||a.push(n?n.closeCompletion:{label:"</"+O+">",type:"type",boost:2});let i=a.concat(((null==n?void 0:n.children)||(c?r:l)).map((e=>e.openCompletion)));if(c&&(null==n?void 0:n.text.length)){let O=c.firstChild;O.to>e.pos-20&&!/\S/.test(e.state.sliceDoc(O.to,e.pos))&&(i=i.concat(n.text))}return{from:$,options:i,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}return null}}const E=_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.L.define({name:"xml",parser:_.configure({props:[_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.i.add({Element(e){let O=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(O?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit}),_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.e.add({Element(e){let O=e.firstChild,t=e.lastChild;return O&&"OpenTag"==O.name?{from:O.to,to:"CloseTag"==t.name?t.from:e.to}:null}}),_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.Y.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function G(e={}){return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a(E,E.data.of({autocomplete:Q(e.elements||[],e.attributes||[])}))}
//# sourceMappingURL=xml.js.map


/***/ })

}]);