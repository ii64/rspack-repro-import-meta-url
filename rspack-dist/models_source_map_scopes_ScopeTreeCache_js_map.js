(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_source_map_scopes_ScopeTreeCache_js_map"], {
"./models/source_map_scopes/ScopeTreeCache.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"ScopeTreeCache.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/source_map_scopes/ScopeTreeCache.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAG7B,OAAO,KAAK,SAAS,MAAM,2BAA2B,CAAC;AACvD,OAAO,KAAK,SAAS,MAAM,6BAA6B,CAAC;AAIzD,4FAA4F;AAC5F,MAAM,UAAU,GAAG,IAAI,OAAO,EAAkD,CAAC;AAEjF;;;;;;;GAOG;AACH,MAAM,UAAU,kBAAkB,CAAC,MAAyB;IAC1D,IAAI,OAAO,GAAG,UAAU,CAAC,GAAG,CAAC,MAAM,CAAC,CAAC;IACrC,IAAI,OAAO,KAAK,SAAS,EAAE,CAAC;QAC1B,OAAO,GAAG,MAAM,CAAC,kBAAkB,EAAE,CAAC,IAAI,CAAC,OAAO,CAAC,EAAE;YACnD,IAAI,SAAS,CAAC,WAAW,CAAC,WAAW,CAAC,OAAO,CAAC,OAAO,CAAC,EAAE,CAAC;gBACvD,OAAO,IAAI,CAAC;YACd,CAAC;YAED,MAAM,UAAU,GAAG,MAAM,CAAC,QAAQ,CAAC,CAAC,CAAC,QAAQ,CAAC,CAAC,CAAC,QAAQ,CAAC;YACzD,OAAO,SAAS,CAAC,mBAAmB,CAAC,mBAAmB,EAAE,CAAC,mBAAmB,CAAC,OAAO,CAAC,IAAI,EAAE,UAAU,CAAC,CAAC;QAC3G,CAAC,CAAC,CAAC;QACH,UAAU,CAAC,GAAG,CAAC,MAAM,EAAE,OAAO,CAAC,CAAC;IAClC,CAAC;IACD,kFAAkF;IAClF,OAAO,OAAO,CAAC;AACjB,CAAC\",\"sourcesContent\":[\"// Copyright 2023 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as SDK from '../../core/sdk/sdk.js';\\nimport * as Formatter from '../formatter/formatter.js';\\nimport * as TextUtils from '../text_utils/text_utils.js';\\n\\ntype ScopeTreeNode = Formatter.FormatterWorkerPool.ScopeTreeNode;\\n\\n/** If a script failed to parse, we stash null in order to prevent unnecessary re-parsing */\\nconst scopeTrees = new WeakMap<SDK.Script.Script, Promise<ScopeTreeNode|null>>();\\n\\n/**\\n * Computes and caches the scope tree for `script`.\\n *\\n * We use {@link SDK.Script.Script} as a key to uniquely identify scripts.\\n * {@link SDK.Script.Script} boils down to \\\"target\\\" + \\\"script ID\\\". This\\n * duplicates work in case of identitical script running on multiple targets\\n * (e.g. workers).\\n */\\nexport function scopeTreeForScript(script: SDK.Script.Script): Promise<ScopeTreeNode|null> {\\n  let promise = scopeTrees.get(script);\\n  if (promise === undefined) {\\n    promise = script.requestContentData().then(content => {\\n      if (TextUtils.ContentData.ContentData.isError(content)) {\\n        return null;\\n      }\\n\\n      const sourceType = script.isModule ? 'module' : 'script';\\n      return Formatter.FormatterWorkerPool.formatterWorkerPool().javaScriptScopeTree(content.text, sourceType);\\n    });\\n    scopeTrees.set(script, promise);\\n  }\\n  // We intentionally return `null` here if the script already failed to parse once.\\n  return promise;\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);