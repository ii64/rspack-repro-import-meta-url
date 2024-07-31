"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_next_chunk_html_js"],{

/***/ "./src/third_party/codemirror.next/chunk/html.js":
/*!*******************************************************!*\
  !*** ./src/third_party/codemirror.next/chunk/html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   autoCloseTags: () => (/* binding */ ue),
/* harmony export */   html: () => (/* binding */ ie),
/* harmony export */   htmlCompletion: () => (/* binding */ se),
/* harmony export */   htmlCompletionSource: () => (/* binding */ ne),
/* harmony export */   htmlLanguage: () => (/* binding */ oe)
/* harmony export */ });
/* harmony import */ var _codemirror_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./codemirror.js */ "./src/third_party/codemirror.next/chunk/codemirror.js");
/* harmony import */ var _css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css.js */ "./src/third_party/codemirror.next/chunk/css.js");
/* harmony import */ var _javascript_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./javascript.js */ "./src/third_party/codemirror.next/chunk/javascript.js");



const b={area:!0,base:!0,br:!0,col:!0,command:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0,menuitem:!0},h={dd:!0,li:!0,optgroup:!0,option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,tfoot:!0,th:!0,tr:!0},$={dd:{dd:!0,dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{address:!0,article:!0,aside:!0,blockquote:!0,dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{tbody:!0,tfoot:!0},tr:{tr:!0}};function x(e){return 9==e||10==e||13==e||32==e}let R=null,v=null,w=0;function T(e,t){let a=e.pos+t;if(w==a&&v==e)return R;let l=e.peek(t);for(;x(l);)l=e.peek(++t);let r="";for(;45==(n=l)||46==n||58==n||n>=65&&n<=90||95==n||n>=97&&n<=122||n>=161;)r+=String.fromCharCode(l),l=e.peek(++t);var n;return v=e,w=a,R=r||(l==P||l==y?void 0:null)}const P=63,y=33;function Q(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let t=0;t<e.length;t++)this.hash+=(this.hash<<4)+e.charCodeAt(t)+(e.charCodeAt(t)<<8)}const q=[4,5,6,7],C=new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.C({start:null,shift:(e,t,a,l)=>q.indexOf(t)>-1?new Q(T(l,1)||"",e):e,reduce:(e,t)=>18==t&&e?e.parent:e,reuse(e,t,a,l){let r=t.type.id;return 4==r||35==r?new Q(T(l,1)||"",e):e},hash:e=>e?e.hash:0,strict:!1}),X=new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E(((e,t)=>{if(60!=e.next)return void(e.next<0&&t.context&&e.acceptToken(56));e.advance();let a=47==e.next;a&&e.advance();let l=T(e,0);if(void 0===l)return;if(!l)return e.acceptToken(a?11:4);let r=t.context?t.context.name:null;if(a){if(l==r)return e.acceptToken(8);if(r&&h[r])return e.acceptToken(56,-2);if(t.dialectEnabled(0))return e.acceptToken(9);for(let e=t.context;e;e=e.parent)if(e.name==l)return;e.acceptToken(10)}else{if("script"==l)return e.acceptToken(5);if("style"==l)return e.acceptToken(6);if("textarea"==l)return e.acceptToken(7);r&&$[r]&&$[r][l]?e.acceptToken(56,-1):e.acceptToken(4)}}),{contextual:!0}),_=new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E(((e,t)=>{let a=1;if(47==e.next){if(62!=e.peek(1))return;a=2}else if(62!=e.next)return;t.context&&b[t.context.name]&&e.acceptToken(12,a)})),W=new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E((e=>{for(let t=0,a=0;;a++){if(e.next<0){a&&e.acceptToken(57);break}if(e.next=="--\x3e".charCodeAt(t)){if(t++,3==t){a>3&&e.acceptToken(57,-2);break}}else t=0;e.advance()}}));function S(e,a,l){let r=2+e.length;return new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.E((t=>{for(let n=0,o=0,s=0;;s++){if(t.next<0){s&&t.acceptToken(a);break}if(0==n&&60==t.next||1==n&&47==t.next||n>=2&&n<r&&t.next==e.charCodeAt(n-2))n++,o++;else if(2!=n&&n!=r||!x(t.next)){if(n==r&&62==t.next){s>o?t.acceptToken(a,-o):t.acceptToken(l,-(o-2));break}if((10==t.next||13==t.next)&&s){t.acceptToken(a,1);break}n=o=0}else o++;t.advance()}}))}const E=S("script",53,1),V=S("style",54,2),j=S("textarea",55,3),Z=_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.L.deserialize({version:13,states:",fOVO!jOOO!TQ#tO'#CoO!YQ#tO'#CyO!_Q#tO'#C|O!dQ#tO'#DPO!iOXO'#CnO!tOYO'#CnO#PO[O'#CnO$YO!jO'#CnOOOW'#Cn'#CnO$aO$fO'#DSO$iQ#tO'#DUO$nQ#tO'#DVOOOW'#Dj'#DjOOOW'#DX'#DXQVO!jOOO$sQ&jO,59ZO${Q&jO,59eO%TQ&jO,59hO%]Q&zO,59kOOOX'#D]'#D]O%hOXO'#CwO%sOXO,59YOOOY'#D^'#D^O%{OYO'#CzO&WOYO,59YOOO['#D_'#D_O&`O[O'#C}O&kO[O,59YOOOW'#D`'#D`O&sO!jO,59YO&zQ#tO'#DQOOOW,59Y,59YOOOp'#Da'#DaO'PO$fO,59nOOOW,59n,59nO'XQ#tO,59pO'^Q#tO,59qOOOW-E7V-E7VO'cQ&zO'#CqOOQ`'#DY'#DYO'qQ&jO1G.uOOOX1G.u1G.uO'yQ&jO1G/POOOY1G/P1G/PO(RQ&jO1G/SOOO[1G/S1G/SO(ZQ&zO1G/VOOOW1G/V1G/VOOOW1G/X1G/XOOOX-E7Z-E7ZO(fQ#tO'#CxOOOW1G.t1G.tOOOY-E7[-E7[O(kQ#tO'#C{OOO[-E7]-E7]O(pQ#tO'#DOOOOW-E7^-E7^O(uQ#tO,59lOOOp-E7_-E7_OOOW1G/Y1G/YOOOW1G/[1G/[OOOW1G/]1G/]O(zQ,UO,59]OOQ`-E7W-E7WOOOX7+$a7+$aOOOY7+$k7+$kOOO[7+$n7+$nOOOW7+$q7+$qOOOW7+$s7+$sO)VQ#tO,59dO)[Q#tO,59gO)aQ#tO,59jOOOW1G/W1G/WO)fO7[O'#CtO)tOMhO'#CtOOQ`1G.w1G.wOOOW1G/O1G/OOOOW1G/R1G/ROOOW1G/U1G/UOOOO'#DZ'#DZO*SO7[O,59`OOQ`,59`,59`OOOO'#D['#D[O*bOMhO,59`OOOO-E7X-E7XOOQ`1G.z1G.zOOOO-E7Y-E7Y",stateData:"*x~O!]OS~OSSOTPOUQOVROX[OYZOZ]O^]O_]O`]Oa]Ow]Oz^O!cYO~Od`O~OdaO~OdbO~OdcO~O!VdOPkP!YkP~O!WgOQnP!YnP~O!XjORqP!YqP~OSSOTPOUQOVROWoOX[OYZOZ]O^]O_]O`]Oa]Ow]O!cYO~O!YpO~P#[O!ZqO!dsO~OdtO~OduO~OfwOjzO~OfwOj|O~OfwOj!OO~O[!ROfwOj!QO~O!VdOPkX!YkX~OP!TO!Y!UO~O!WgOQnX!YnX~OQ!WO!Y!UO~O!XjORqX!YqX~OR!YO!Y!UO~O!Y!UO~P#[Od![O~O!ZqO!d!^O~Oj!_O~Oj!`O~Og!aOfeXjeX[eX~OfwOj!cO~OfwOj!dO~OfwOj!eO~O[!gOfwOj!fO~Od!hO~Od!iO~Od!jO~Oj!kO~Oi!nO!_!lO!a!mO~Oj!oO~Oj!pO~Oj!qO~O_!rO`!rO!_!tO!`!rO~O_!uO`!uO!a!tO!b!uO~O_!rO`!rO!_!xO!`!rO~O_!uO`!uO!a!xO!b!uO~O`_a!cwz!c~",goto:"%i!_PPPPPPPPPPPPPPPPPP!`!fP!lPP!vPP!y!|#P#V#Y#]#c#f#i#o#u!`P!`!`P#{$R$e$k$q$w$}%T%ZPPPPPPPP%aX]OW_nXTOW_nax`abcy{}!PR!n!aRfTR!UfXUOW_nRiUR!UiXVOW_nRlVR!UlXWOW_nQpWR!UnXXOW_nQ_ORv_Qy`Q{aQ}bQ!PcX!by{}!PQ!s!lR!w!sQ!v!mR!y!vQeTR!SeQhUR!VhQkVR!XkQnWR!ZnQrYR!]rS^O_TmWn",nodeNames:"⚠ StartCloseTag StartCloseTag StartCloseTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag SelfCloseEndTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue EndTag ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",maxTerm:66,context:C,nodeProps:[[_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.N.closedBy,-9,1,2,3,5,6,7,8,9,10,"EndTag",4,"EndTag SelfCloseEndTag",-4,19,29,32,35,"CloseTag"],[_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.N.group,-9,11,15,16,17,18,38,39,40,41,"Entity",14,"Entity TextContent",-3,27,30,33,"TextContent Entity"],[_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.N.openedBy,12,"StartTag",26,"StartTag StartCloseTag",-4,28,31,34,36,"OpenTag"]],skippedNodes:[0],repeatNodeCount:9,tokenData:"!#b!aR!WOX$kXY)sYZ)sZ]$k]^)s^p$kpq)sqr$krs*zsv$kvw+dwx2yx}$k}!O3f!O!P$k!P!Q7_!Q![$k![!]8u!]!^$k!^!_>b!_!`!!p!`!a8T!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U$k4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!Z$vc^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!R&[V^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&Rq&xT^P!bpOv&qwx'Xx!^&q!^!_'g!_~&qP'^R^POv'Xw!^'X!_~'Xp'lQ!bpOv'gx~'ga'yU^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r`(bR!``Or(]sv(]w~(]!Q(rT!``!bpOr(krs'gsv(kwx(]x~(kW)WXiWOX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!a*O^^P!``!bp!]^OX&RXY)sYZ)sZ]&R]^)s^p&Rpq)sqr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!Z+TT!_h^P!bpOv&qwx'Xx!^&q!^!_'g!_~&q!Z+kbiWaPOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst/]tw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^)R!^!a.Q!a$f,s$f$g.Q$g~,s!Z,xbiWOX,sXZ.QZ],s]^.Q^p,sqr,srs.Qst)Rtw,swx.Qx!P,s!P!Q.Q!Q!],s!]!^.i!^!a.Q!a$f,s$f$g.Q$g~,s!R.TTOp.Qqs.Qt!].Q!]!^.d!^~.Q!R.iO_!R!Z.pXiW_!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z/baiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^)R!^!a1q!a$f0g$f$g1q$g~0g!Z0laiWOX0gXZ1qZ]0g]^1q^p0gqr0grs1qsw0gwx1qx!P0g!P!Q1q!Q!]0g!]!^2V!^!a1q!a$f0g$f$g1q$g~0g!R1tSOp1qq!]1q!]!^2Q!^~1q!R2VO`!R!Z2^XiW`!ROX)RZ])R^p)Rqr)Rsw)Rx!P)R!Q!^)R!a$f)R$g~)R!Z3SU!ax^P!``Or'rrs'Xsv'rw!^'r!^!_(]!_~'r!]3qe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O5S!O!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g~$k!]5_d^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!`&R!`!a6m!a$f$k$f$g&R$g~$k!T6xV^P!``!bp!dQOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!X7hX^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_!`&R!`!a8T!a~&R!X8`VjU^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R!a9U!YfSdQ^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx}$k}!O8u!O!P8u!P!Q&R!Q![8u![!]8u!]!^$k!^!_(k!_!a&R!a!c$k!c!}8u!}#R$k#R#S8u#S#T$k#T#o8u#o$f$k$f$g&R$g$}$k$}%O8u%O%W$k%W%o8u%o%p$k%p&a8u&a&b$k&b1p8u1p4U8u4U4d8u4d4e$k4e$IS8u$IS$I`$k$I`$Ib8u$Ib$Je$k$Je$Jg8u$Jg$Kh$k$Kh%#t8u%#t&/x$k&/x&Et8u&Et&FV$k&FV;'S8u;'S;:j<t;:j?&r$k?&r?Ah8u?Ah?BY$k?BY?Mn8u?Mn~$k!a=Pe^PiW!``!bpOX$kXZ&RZ]$k]^&R^p$kpq&Rqr$krs&qsv$kvw)Rwx'rx!P$k!P!Q&R!Q!^$k!^!_(k!_!a&R!a$f$k$f$g&R$g;=`$k;=`<%l8u<%l~$k!R>iW!``!bpOq(kqr?Rrs'gsv(kwx(]x!a(k!a!bKj!b~(k!R?YZ!``!bpOr(krs'gsv(kwx(]x}(k}!O?{!O!f(k!f!gAR!g#W(k#W#XGz#X~(k!R@SV!``!bpOr(krs'gsv(kwx(]x}(k}!O@i!O~(k!R@rT!``!bp!cPOr(krs'gsv(kwx(]x~(k!RAYV!``!bpOr(krs'gsv(kwx(]x!q(k!q!rAo!r~(k!RAvV!``!bpOr(krs'gsv(kwx(]x!e(k!e!fB]!f~(k!RBdV!``!bpOr(krs'gsv(kwx(]x!v(k!v!wBy!w~(k!RCQV!``!bpOr(krs'gsv(kwx(]x!{(k!{!|Cg!|~(k!RCnV!``!bpOr(krs'gsv(kwx(]x!r(k!r!sDT!s~(k!RD[V!``!bpOr(krs'gsv(kwx(]x!g(k!g!hDq!h~(k!RDxW!``!bpOrDqrsEbsvDqvwEvwxFfx!`Dq!`!aGb!a~DqqEgT!bpOvEbvxEvx!`Eb!`!aFX!a~EbPEyRO!`Ev!`!aFS!a~EvPFXOzPqF`Q!bpzPOv'gx~'gaFkV!``OrFfrsEvsvFfvwEvw!`Ff!`!aGQ!a~FfaGXR!``zPOr(]sv(]w~(]!RGkT!``!bpzPOr(krs'gsv(kwx(]x~(k!RHRV!``!bpOr(krs'gsv(kwx(]x#c(k#c#dHh#d~(k!RHoV!``!bpOr(krs'gsv(kwx(]x#V(k#V#WIU#W~(k!RI]V!``!bpOr(krs'gsv(kwx(]x#h(k#h#iIr#i~(k!RIyV!``!bpOr(krs'gsv(kwx(]x#m(k#m#nJ`#n~(k!RJgV!``!bpOr(krs'gsv(kwx(]x#d(k#d#eJ|#e~(k!RKTV!``!bpOr(krs'gsv(kwx(]x#X(k#X#YDq#Y~(k!RKqW!``!bpOrKjrsLZsvKjvwLowxNPx!aKj!a!b! g!b~KjqL`T!bpOvLZvxLox!aLZ!a!bM^!b~LZPLrRO!aLo!a!bL{!b~LoPMORO!`Lo!`!aMX!a~LoPM^OwPqMcT!bpOvLZvxLox!`LZ!`!aMr!a~LZqMyQ!bpwPOv'gx~'gaNUV!``OrNPrsLosvNPvwLow!aNP!a!bNk!b~NPaNpV!``OrNPrsLosvNPvwLow!`NP!`!a! V!a~NPa! ^R!``wPOr(]sv(]w~(]!R! nW!``!bpOrKjrsLZsvKjvwLowxNPx!`Kj!`!a!!W!a~Kj!R!!aT!``!bpwPOr(krs'gsv(kwx(]x~(k!V!!{VgS^P!``!bpOr&Rrs&qsv&Rwx'rx!^&R!^!_(k!_~&R",tokenizers:[E,V,j,X,_,W,0,1,2,3,4,5],topRules:{Document:[0,13]},dialects:{noMatch:0},tokenPrec:446});function Y(e,t){let a=Object.create(null);for(let l of e.firstChild.getChildren("Attribute")){let e=l.getChild("AttributeName"),r=l.getChild("AttributeValue")||l.getChild("UnquotedAttributeValue");e&&(a[t.read(e.from,e.to)]=r?"AttributeValue"==r.name?t.read(r.from+1,r.to-1):t.read(r.from,r.to):"")}return a}function D(e,t,a){let l;for(let r of a)if(!r.attrs||r.attrs(l||(l=Y(e.node.parent,t))))return{parser:r.parser};return null}function G(e){let t=[],a=[],l=[];for(let r of e){let e="script"==r.tag?t:"style"==r.tag?a:"textarea"==r.tag?l:null;if(!e)throw new RangeError("Only script, style, and textarea tags can host nested parsers");e.push(r)}return (0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.p)(((e,r)=>{let n=e.type.id;return 27==n?D(e,r,t):30==n?D(e,r,a):33==n?D(e,r,l):null}))}const A=["_blank","_self","_top","_parent"],I=["ascii","utf-8","utf-16","latin1","latin1"],N=["get","post","put","delete"],U=["application/x-www-form-urlencoded","multipart/form-data","text/plain"],z=["true","false"],L={},M={a:{attrs:{href:null,ping:null,type:null,media:null,target:A,hreflang:null}},abbr:L,acronym:L,address:L,applet:L,area:{attrs:{alt:null,coords:null,href:null,target:null,ping:null,media:null,hreflang:null,type:null,shape:["default","rect","circle","poly"]}},article:L,aside:L,audio:{attrs:{src:null,mediagroup:null,crossorigin:["anonymous","use-credentials"],preload:["none","metadata","auto"],autoplay:["autoplay"],loop:["loop"],controls:["controls"]}},b:L,base:{attrs:{href:null,target:A}},basefont:L,bdi:L,bdo:L,big:L,blockquote:{attrs:{cite:null}},body:L,br:L,button:{attrs:{form:null,formaction:null,name:null,value:null,autofocus:["autofocus"],disabled:["autofocus"],formenctype:U,formmethod:N,formnovalidate:["novalidate"],formtarget:A,type:["submit","reset","button"]}},canvas:{attrs:{width:null,height:null}},caption:L,center:L,cite:L,code:L,col:{attrs:{span:null}},colgroup:{attrs:{span:null}},command:{attrs:{type:["command","checkbox","radio"],label:null,icon:null,radiogroup:null,command:null,title:null,disabled:["disabled"],checked:["checked"]}},data:{attrs:{value:null}},datagrid:{attrs:{disabled:["disabled"],multiple:["multiple"]}},datalist:{attrs:{data:null}},dd:L,del:{attrs:{cite:null,datetime:null}},details:{attrs:{open:["open"]}},dfn:L,dir:L,div:L,dl:L,dt:L,em:L,embed:{attrs:{src:null,type:null,width:null,height:null}},eventsource:{attrs:{src:null}},fieldset:{attrs:{disabled:["disabled"],form:null,name:null}},figcaption:L,figure:L,font:L,footer:L,form:{attrs:{action:null,name:null,"accept-charset":I,autocomplete:["on","off"],enctype:U,method:N,novalidate:["novalidate"],target:A}},frame:L,frameset:L,h1:L,h2:L,h3:L,h4:L,h5:L,h6:L,head:{children:["title","base","link","style","meta","script","noscript","command"]},header:L,hgroup:L,hr:L,html:{attrs:{manifest:null}},i:L,iframe:{attrs:{src:null,srcdoc:null,name:null,width:null,height:null,sandbox:["allow-top-navigation","allow-same-origin","allow-forms","allow-scripts"],seamless:["seamless"]}},img:{attrs:{alt:null,src:null,ismap:null,usemap:null,width:null,height:null,crossorigin:["anonymous","use-credentials"]}},input:{attrs:{alt:null,dirname:null,form:null,formaction:null,height:null,list:null,max:null,maxlength:null,min:null,name:null,pattern:null,placeholder:null,size:null,src:null,step:null,value:null,width:null,accept:["audio/*","video/*","image/*"],autocomplete:["on","off"],autofocus:["autofocus"],checked:["checked"],disabled:["disabled"],formenctype:U,formmethod:N,formnovalidate:["novalidate"],formtarget:A,multiple:["multiple"],readonly:["readonly"],required:["required"],type:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"]}},ins:{attrs:{cite:null,datetime:null}},kbd:L,keygen:{attrs:{challenge:null,form:null,name:null,autofocus:["autofocus"],disabled:["disabled"],keytype:["RSA"]}},label:{attrs:{for:null,form:null}},legend:L,li:{attrs:{value:null}},link:{attrs:{href:null,type:null,hreflang:null,media:null,sizes:["all","16x16","16x16 32x32","16x16 32x32 64x64"]}},map:{attrs:{name:null}},mark:L,menu:{attrs:{label:null,type:["list","context","toolbar"]}},meta:{attrs:{content:null,charset:I,name:["viewport","application-name","author","description","generator","keywords"],"http-equiv":["content-language","content-type","default-style","refresh"]}},meter:{attrs:{value:null,min:null,low:null,high:null,max:null,optimum:null}},nav:L,noframes:L,noscript:L,object:{attrs:{data:null,type:null,name:null,usemap:null,form:null,width:null,height:null,typemustmatch:["typemustmatch"]}},ol:{attrs:{reversed:["reversed"],start:null,type:["1","a","A","i","I"]},children:["li","script","template","ul","ol"]},optgroup:{attrs:{disabled:["disabled"],label:null}},option:{attrs:{disabled:["disabled"],label:null,selected:["selected"],value:null}},output:{attrs:{for:null,form:null,name:null}},p:L,param:{attrs:{name:null,value:null}},pre:L,progress:{attrs:{value:null,max:null}},q:{attrs:{cite:null}},rp:L,rt:L,ruby:L,s:L,samp:L,script:{attrs:{type:["text/javascript"],src:null,async:["async"],defer:["defer"],charset:I}},section:L,select:{attrs:{form:null,name:null,size:null,autofocus:["autofocus"],disabled:["disabled"],multiple:["multiple"]}},small:L,source:{attrs:{src:null,type:null,media:null}},span:L,strike:L,strong:L,style:{attrs:{type:["text/css"],media:null,scoped:null}},sub:L,summary:L,sup:L,table:L,tbody:L,td:{attrs:{colspan:null,rowspan:null,headers:null}},textarea:{attrs:{dirname:null,form:null,maxlength:null,name:null,placeholder:null,rows:null,cols:null,autofocus:["autofocus"],disabled:["disabled"],readonly:["readonly"],required:["required"],wrap:["soft","hard"]}},tfoot:L,th:{attrs:{colspan:null,rowspan:null,headers:null,scope:["row","col","rowgroup","colgroup"]}},thead:L,time:{attrs:{datetime:null}},title:L,tr:L,track:{attrs:{src:null,label:null,default:null,kind:["subtitles","captions","descriptions","chapters","metadata"],srclang:null}},tt:L,u:L,ul:{children:["li","script","template","ul","ol"]},var:L,video:{attrs:{src:null,poster:null,width:null,height:null,crossorigin:["anonymous","use-credentials"],preload:["auto","metadata","none"],autoplay:["autoplay"],mediagroup:["movie"],muted:["muted"],controls:["controls"]}},wbr:L},K={accesskey:null,class:null,contenteditable:z,contextmenu:null,dir:["ltr","rtl","auto"],draggable:["true","false","auto"],dropzone:["copy","move","link","string:","file:"],hidden:["hidden"],id:null,inert:["inert"],itemid:null,itemprop:null,itemref:null,itemscope:["itemscope"],itemtype:null,lang:["ar","bn","de","en-GB","en-US","es","fr","hi","id","ja","pa","pt","ru","tr","zh"],spellcheck:z,autocorrect:z,autocapitalize:z,style:null,tabindex:null,title:null,translate:["yes","no"],onclick:null,rel:["stylesheet","alternate","author","bookmark","help","license","next","nofollow","noreferrer","prefetch","prev","search","tag"],role:"alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),"aria-activedescendant":null,"aria-atomic":z,"aria-autocomplete":["inline","list","both","none"],"aria-busy":z,"aria-checked":["true","false","mixed","undefined"],"aria-controls":null,"aria-describedby":null,"aria-disabled":z,"aria-dropeffect":null,"aria-expanded":["true","false","undefined"],"aria-flowto":null,"aria-grabbed":["true","false","undefined"],"aria-haspopup":z,"aria-hidden":z,"aria-invalid":["true","false","grammar","spelling"],"aria-label":null,"aria-labelledby":null,"aria-level":null,"aria-live":["off","polite","assertive"],"aria-multiline":z,"aria-multiselectable":z,"aria-owns":null,"aria-posinset":null,"aria-pressed":["true","false","mixed","undefined"],"aria-readonly":z,"aria-relevant":null,"aria-required":z,"aria-selected":["true","false","undefined"],"aria-setsize":null,"aria-sort":["ascending","descending","none","other"],"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null},F=Object.keys(M),B=Object.keys(K);function J(e,t){if(!t)return"";let a=t.firstChild,l=a&&a.getChild("TagName");return l?e.sliceString(l.from,l.to):""}function H(e,t=!1){for(let a=e.parent;a;a=a.parent)if("Element"==a.name){if(!t)return a;t=!1}return null}function ee(e,t){let a=M[J(e,H(t,!0))];return(null==a?void 0:a.children)||F}function te(e,t){let a=[];for(let l=t;l=H(l);){let r=J(e,l);if(r&&"CloseTag"==l.lastChild.name)break;r&&a.indexOf(r)<0&&("EndTag"==t.name||t.from>=l.firstChild.to)&&a.push(r)}return a}const ae=/^[:\-\.\w\u00b7-\uffff]+$/;function le(e,t,a,l){let r=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:a,to:l,options:ee(e.doc,t).map((e=>({label:e,type:"type"}))).concat(te(e.doc,t).map(((e,t)=>({label:"/"+e,apply:"/"+e+r,type:"type",boost:99-t})))),span:/^\/?[:\-\.\w\u00b7-\uffff]*$/}}function re(e,t,a,l){let r=/\s*>/.test(e.sliceDoc(l,l+5))?"":">";return{from:a,to:l,options:te(e.doc,t).map(((e,t)=>({label:e,apply:e+r,type:"type",boost:99-t}))),span:ae}}function ne(e){let{state:t,pos:a}=e,l=(0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.g)(t).resolveInner(a),r=l.resolve(a,-1);for(let e,t=a;l==r&&(e=r.childBefore(t));){let a=e.lastChild;if(!a||!a.type.isError||a.from<a.to)break;l=r=e,t=a.from}return"TagName"==r.name?r.parent&&/CloseTag$/.test(r.parent.name)?re(t,r,r.from,a):le(t,r,r.from,a):"StartTag"==r.name?le(t,r,a,a):"StartCloseTag"==r.name||"IncompleteCloseTag"==r.name?re(t,r,a,a):e.explicit&&("OpenTag"==r.name||"SelfClosingTag"==r.name)||"AttributeName"==r.name?function(e,t,a,l){let r=H(t),n=r?M[J(e.doc,r)]:null;return{from:a,to:l,options:(n&&n.attrs?Object.keys(n.attrs).concat(B):B).map((e=>({label:e,type:"property"}))),span:ae}}(t,r,"AttributeName"==r.name?r.from:a,a):"Is"==r.name||"AttributeValue"==r.name||"UnquotedAttributeValue"==r.name?function(e,t,a,l){var r;let n,o=null===(r=t.parent)||void 0===r?void 0:r.getChild("AttributeName"),s=[];if(o){let r=e.sliceDoc(o.from,o.to),i=K[r];if(!i){let a=H(t),l=a?M[J(e.doc,a)]:null;i=(null==l?void 0:l.attrs)&&l.attrs[r]}if(i){let t=e.sliceDoc(a,l).toLowerCase(),r='"',o='"';/^['"]/.test(t)?(n='"'==t[0]?/^[^"]*$/:/^[^']*$/,r="",o=e.sliceDoc(l,l+1)==t[0]?"":t[0],t=t.slice(1),a++):n=/^[^\s<>='"]*$/;for(let e of i)s.push({label:e,apply:r+e+o,type:"constant"})}}return{from:a,to:l,options:s,span:n}}(t,r,"Is"==r.name?a:r.from,a):!e.explicit||"Element"!=l.name&&"Text"!=l.name&&"Document"!=l.name?null:function(e,t,a){let l=[],r=0;for(let a of ee(e.doc,t))l.push({label:"<"+a,type:"type"});for(let a of te(e.doc,t))l.push({label:"</"+a+">",type:"type",boost:99-r++});return{from:a,to:a,options:l,span:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}(t,r,a)}const oe=_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.a.define({parser:Z.configure({props:[_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.i.add({Element(e){let t=/^(\s*)(<\/)?/.exec(e.textAfter);return e.node.to<=e.pos+t[0].length?e.continue():e.lineIndent(e.node.from)+(t[2]?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit,Document(e){if(e.pos+/\s*/.exec(e.textAfter)[0].length<e.node.to)return e.continue();let t,a=null;for(let t=e.node;;){let e=t.lastChild;if(!e||"Element"!=e.name||e.to!=t.to)break;a=t=e}return a&&(!(t=a.lastChild)||"CloseTag"!=t.name&&"SelfClosingTag"!=t.name)?e.lineIndent(a.from)+e.unit:null}}),_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.b.add({Element(e){let t=e.firstChild,a=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==a.name?a.from:e.to}:null}}),(0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.s)({"Text RawText":_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.content,"StartTag StartCloseTag SelfCloserEndTag EndTag SelfCloseEndTag":_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.angleBracket,TagName:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.tagName,"MismatchedCloseTag/TagName":[_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.tagName,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.invalid],AttributeName:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeName,"AttributeValue UnquotedAttributeValue":_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.attributeValue,Is:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.definitionOperator,"EntityReference CharacterReference":_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.character,Comment:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.blockComment,ProcessingInst:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.processingInstruction,DoctypeDecl:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.t.documentMeta})],wrap:G([{tag:"script",attrs:e=>!e.type||/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),parser:_javascript_js__WEBPACK_IMPORTED_MODULE_2__.javascriptLanguage.parser},{tag:"style",attrs:e=>(!e.lang||"css"==e.lang)&&(!e.type||/^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),parser:_css_js__WEBPACK_IMPORTED_MODULE_1__.cssLanguage.parser}])}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/\w+\W$/,wordChars:"-._"}}),se=oe.data.of({autocomplete:ne});function ie(e={}){let t=oe;return!1===e.matchClosingTags&&(t=t.configure({dialect:"noMatch"})),new _codemirror_js__WEBPACK_IMPORTED_MODULE_0__.e(t,[se,!1!==e.autoCloseTags?ue:[],(0,_javascript_js__WEBPACK_IMPORTED_MODULE_2__.javascript)().support,(0,_css_js__WEBPACK_IMPORTED_MODULE_1__.css)().support])}const ue=_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.h.inputHandler.of(((e,t,a,l)=>{if(e.composing||e.state.readOnly||t!=a||">"!=l&&"/"!=l||!oe.isActiveAt(e.state,t,-1))return!1;let{state:r}=e,o=r.changeByRange((e=>{var t,a,o;let s,i=(0,_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.g)(r).resolveInner(e.head,-1);if("TagName"!=i.name&&"StartTag"!=i.name||(i=i.parent),">"==l&&"OpenTag"==i.name){if("CloseTag"!=(null===(a=null===(t=i.parent)||void 0===t?void 0:t.lastChild)||void 0===a?void 0:a.name)&&(s=J(r.doc,i.parent)))return{range:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.j.cursor(e.head+1),changes:{from:e.head,insert:`></${s}>`}}}else if("/"==l&&"OpenTag"==i.name){let t=i.parent,a=null==t?void 0:t.parent;if(t.from==e.head-1&&"CloseTag"!=(null===(o=a.lastChild)||void 0===o?void 0:o.name)&&(s=J(r.doc,a))){let t=`/${s}>`;return{range:_codemirror_js__WEBPACK_IMPORTED_MODULE_0__.j.cursor(e.head+t.length),changes:{from:e.head,insert:t}}}}return{range:e}}));return!o.changes.empty&&(e.dispatch(o,{userEvent:"input.type",scrollIntoView:!0}),!0)}));


/***/ })

}]);