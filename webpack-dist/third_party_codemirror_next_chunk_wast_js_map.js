(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_codemirror_next_chunk_wast_js_map"],{

/***/ "./third_party/codemirror.next/chunk/wast.js.map":
/*!*******************************************************!*\
  !*** ./third_party/codemirror.next/chunk/wast.js.map ***!
  \*******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"wast.js\",\"sources\":[\"../node_modules/@codemirror/lang-wast/dist/index.js\"],\"sourcesContent\":[\"import { LRLanguage, indentNodeProp, delimitedIndent, foldNodeProp, foldInside, LanguageSupport } from '@codemirror/language';\\nimport { styleTags, tags } from '@lezer/highlight';\\nimport { LRParser } from '@lezer/lr';\\n\\n// This file was generated by lezer-generator. You probably shouldn't edit it.\\nconst spec_Keyword = {__proto__:null,anyref:34, dataref:34, eqref:34, externref:34, i31ref:34, funcref:34, i8:34, i16:34, i32:34, i64:34, f32:34, f64:34};\\nconst parser = /*@__PURE__*/LRParser.deserialize({\\n  version: 14,\\n  states: \\\"!^Q]QPOOOqQPO'#CbOOQO'#Cd'#CdOOQO'#Cl'#ClOOQO'#Ch'#ChQ]QPOOOOQO,58|,58|OxQPO,58|OOQO-E6f-E6fOOQO1G.h1G.h\\\",\\n  stateData: \\\"!P~O_OSPOSQOS~OTPOVROXROYROZROaQO~OSUO~P]OSXO~P]O\\\",\\n  goto: \\\"xaPPPPPPbPbPPPhPPPrXROPTVQTOQVPTWTVXSOPTV\\\",\\n  nodeNames: \\\"⚠ LineComment BlockComment Module ) ( App Identifier Type Keyword Number String\\\",\\n  maxTerm: 17,\\n  nodeProps: [\\n    [\\\"isolate\\\", -3,1,2,11,\\\"\\\"],\\n    [\\\"openedBy\\\", 4,\\\"(\\\"],\\n    [\\\"closedBy\\\", 5,\\\")\\\"],\\n    [\\\"group\\\", -6,6,7,8,9,10,11,\\\"Expression\\\"]\\n  ],\\n  skippedNodes: [0,1,2],\\n  repeatNodeCount: 1,\\n  tokenData: \\\"0o~R^XY}YZ}]^}pq}rs!Stu#pxy'Uyz(e{|(j}!O(j!Q!R(s!R![*p!]!^.^#T#o.{~!SO_~~!VVOr!Srs!ls#O!S#O#P!q#P;'S!S;'S;=`#j<%lO!S~!qOZ~~!tRO;'S!S;'S;=`!};=`O!S~#QWOr!Srs!ls#O!S#O#P!q#P;'S!S;'S;=`#j;=`<%l!S<%lO!S~#mP;=`<%l!S~#siqr%bst%btu%buv%bvw%bwx%bz{%b{|%b}!O%b!O!P%b!P!Q%b!Q![%b![!]%b!^!_%b!_!`%b!`!a%b!a!b%b!b!c%b!c!}%b#Q#R%b#R#S%b#S#T%b#T#o%b#p#q%b#r#s%b~%giV~qr%bst%btu%buv%bvw%bwx%bz{%b{|%b}!O%b!O!P%b!P!Q%b!Q![%b![!]%b!^!_%b!_!`%b!`!a%b!a!b%b!b!c%b!c!}%b#Q#R%b#R#S%b#S#T%b#T#o%b#p#q%b#r#s%b~'ZPT~!]!^'^~'aTO!]'^!]!^'p!^;'S'^;'S;=`(_<%lO'^~'sVOy'^yz(Yz!]'^!]!^'p!^;'S'^;'S;=`(_<%lO'^~(_OQ~~(bP;=`<%l'^~(jOS~~(mQ!Q!R(s!R![*p~(xUY~!O!P)[!Q![*p!g!h){#R#S+U#X#Y){#l#m+[~)aRY~!Q![)j!g!h){#X#Y){~)oSY~!Q![)j!g!h){#R#S*j#X#Y){~*OR{|*X}!O*X!Q![*_~*[P!Q![*_~*dQY~!Q![*_#R#S*X~*mP!Q![)j~*uTY~!O!P)[!Q![*p!g!h){#R#S+U#X#Y){~+XP!Q![*p~+_R!Q![+h!c!i+h#T#Z+h~+mVY~!O!P,S!Q![+h!c!i+h!r!s-P#R#S+[#T#Z+h#d#e-P~,XTY~!Q![,h!c!i,h!r!s-P#T#Z,h#d#e-P~,mUY~!Q![,h!c!i,h!r!s-P#R#S.Q#T#Z,h#d#e-P~-ST{|-c}!O-c!Q![-o!c!i-o#T#Z-o~-fR!Q![-o!c!i-o#T#Z-o~-tSY~!Q![-o!c!i-o#R#S-c#T#Z-o~.TR!Q![,h!c!i,h#T#Z,h~.aP!]!^.d~.iSP~OY.dZ;'S.d;'S;=`.u<%lO.d~.xP;=`<%l.d~/QiX~qr.{st.{tu.{uv.{vw.{wx.{z{.{{|.{}!O.{!O!P.{!P!Q.{!Q![.{![!].{!^!_.{!_!`.{!`!a.{!a!b.{!b!c.{!c!}.{#Q#R.{#R#S.{#S#T.{#T#o.{#p#q.{#r#s.{\\\",\\n  tokenizers: [0],\\n  topRules: {\\\"Module\\\":[0,3]},\\n  specialized: [{term: 9, get: (value) => spec_Keyword[value] || -1}],\\n  tokenPrec: 0\\n});\\n\\nconst wastLanguage = /*@__PURE__*/LRLanguage.define({\\n    name: \\\"wast\\\",\\n    parser: /*@__PURE__*/parser.configure({\\n        props: [\\n            /*@__PURE__*/indentNodeProp.add({\\n                App: /*@__PURE__*/delimitedIndent({ closing: \\\")\\\", align: false })\\n            }),\\n            /*@__PURE__*/foldNodeProp.add({\\n                App: foldInside,\\n                BlockComment(tree) { return { from: tree.from + 2, to: tree.to - 2 }; }\\n            }),\\n            /*@__PURE__*/styleTags({\\n                Keyword: tags.keyword,\\n                Type: tags.typeName,\\n                Number: tags.number,\\n                String: tags.string,\\n                Identifier: tags.variableName,\\n                LineComment: tags.lineComment,\\n                BlockComment: tags.blockComment,\\n                \\\"( )\\\": tags.paren\\n            })\\n        ]\\n    }),\\n    languageData: {\\n        commentTokens: { line: \\\";;\\\", block: { open: \\\"(;\\\", close: \\\";)\\\" } },\\n        closeBrackets: { brackets: [\\\"(\\\", '\\\"'] }\\n    }\\n});\\nfunction wast() {\\n    return new LanguageSupport(wastLanguage);\\n}\\n\\nexport { wast, wastLanguage };\\n\"],\"names\":[\"spec_Keyword\",\"__proto__\",\"anyref\",\"dataref\",\"eqref\",\"externref\",\"i31ref\",\"funcref\",\"i8\",\"i16\",\"i32\",\"i64\",\"f32\",\"f64\",\"parser\",\"LRParser\",\"deserialize\",\"version\",\"states\",\"stateData\",\"goto\",\"nodeNames\",\"maxTerm\",\"nodeProps\",\"skippedNodes\",\"repeatNodeCount\",\"tokenData\",\"tokenizers\",\"topRules\",\"Module\",\"specialized\",\"term\",\"get\",\"value\",\"tokenPrec\",\"wastLanguage\",\"LRLanguage\",\"define\",\"name\",\"configure\",\"props\",\"indentNodeProp\",\"add\",\"App\",\"delimitedIndent\",\"closing\",\"align\",\"foldNodeProp\",\"foldInside\",\"BlockComment\",\"tree\",\"from\",\"to\",\"styleTags\",\"Keyword\",\"tags\",\"keyword\",\"Type\",\"typeName\",\"Number\",\"number\",\"String\",\"string\",\"Identifier\",\"variableName\",\"LineComment\",\"lineComment\",\"blockComment\",\"paren\",\"languageData\",\"commentTokens\",\"line\",\"block\",\"open\",\"close\",\"closeBrackets\",\"brackets\",\"wast\",\"LanguageSupport\"],\"mappings\":\"uFAKA,MAAMA,EAAe,CAACC,UAAU,KAAKC,OAAO,GAAIC,QAAQ,GAAIC,MAAM,GAAIC,UAAU,GAAIC,OAAO,GAAIC,QAAQ,GAAIC,GAAG,GAAIC,IAAI,GAAIC,IAAI,GAAIC,IAAI,GAAIC,IAAI,GAAIC,IAAI,IAChJC,EAAsBC,EAASC,YAAY,CAC/CC,QAAS,GACTC,OAAQ,2GACRC,UAAW,oDACXC,KAAM,4CACNC,UAAW,kFACXC,QAAS,GACTC,UAAW,CACT,CAAC,WAAY,EAAE,EAAE,EAAE,GAAG,IACtB,CAAC,WAAY,EAAE,KACf,CAAC,WAAY,EAAE,KACf,CAAC,SAAU,EAAE,EAAE,EAAE,EAAE,EAAE,GAAG,GAAG,eAE7BC,aAAc,CAAC,EAAE,EAAE,GACnBC,gBAAiB,EACjBC,UAAW,gvCACXC,WAAY,CAAC,GACbC,SAAU,CAACC,OAAS,CAAC,EAAE,IACvBC,YAAa,CAAC,CAACC,KAAM,EAAGC,IAAMC,GAAUjC,EAAaiC,KAAW,IAChEC,UAAW,IAGPC,EAA4BC,EAAWC,OAAO,CAChDC,KAAM,OACNxB,OAAqBA,EAAOyB,UAAU,CAClCC,MAAO,CACUC,EAAeC,IAAI,CAC5BC,IAAkBC,EAAgB,CAAEC,QAAS,IAAKC,OAAO,MAEhDC,EAAaL,IAAI,CAC1BC,IAAKK,EACLC,aAAaC,IAAe,CAAEC,KAAMD,EAAKC,KAAO,EAAGC,GAAIF,EAAKE,GAAK,MAExDC,EAAU,CACnBC,QAASC,EAAKC,QACdC,KAAMF,EAAKG,SACXC,OAAQJ,EAAKK,OACbC,OAAQN,EAAKO,OACbC,WAAYR,EAAKS,aACjBC,YAAaV,EAAKW,YAClBjB,aAAcM,EAAKY,aACnB,MAAOZ,EAAKa,WAIxBC,aAAc,CACVC,cAAe,CAAEC,KAAM,KAAMC,MAAO,CAAEC,KAAM,KAAMC,MAAO,OACzDC,cAAe,CAAEC,SAAU,CAAC,IAAK,SAGzC,SAASC,IACL,OAAO,IAAIC,EAAgB3C,EAC/B\"}");

/***/ })

}]);