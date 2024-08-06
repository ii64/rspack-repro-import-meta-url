(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_timeline_UIDevtoolsController_js_map"], {
"./panels/timeline/UIDevtoolsController.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"UIDevtoolsController.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/timeline/UIDevtoolsController.ts\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA4BG;AAIH,OAAO,EACL,aAAa,EACb,iBAAiB,EACjB,8BAA8B,EAC9B,qBAAqB,GACtB,MAAM,sBAAsB,CAAC;AAC9B,OAAO,EAAc,kBAAkB,EAAC,MAAM,yBAAyB,CAAC;AACxE,OAAO,EAAC,eAAe,EAAC,MAAM,sBAAsB,CAAC;AAErD,MAAM,OAAO,oBAAqB,SAAQ,kBAAkB;IAC1D,YAAY,UAA6B,EAAE,iBAAoC,EAAE,MAAc;QAC7F,KAAK,CAAC,UAAU,EAAE,iBAAiB,EAAE,MAAM,CAAC,CAAC;QAC7C,iBAAiB,CAAC,eAAe,CAAC,gBAAgB,EAAE,CAAC,CAAC;QACtD,aAAa,CAAC,eAAe,CAAC,UAAU,EAAE,CAAC,CAAC;QAC5C,8BAA8B,CAAC,eAAe,CAAC,qBAAqB,EAAE,CAAC,MAAM,CAAC,qBAAqB,CAAC,CAAC,CAAC;IACxG,CAAC;CACF\",\"sourcesContent\":[\"/*\\n * Copyright (C) 2019 Google Inc. All rights reserved.\\n *\\n * Redistribution and use in source and binary forms, with or without\\n * modification, are permitted provided that the following conditions are\\n * met:\\n *\\n *     * Redistributions of source code must retain the above copyright\\n * notice, this list of conditions and the following disclaimer.\\n *     * Redistributions in binary form must reproduce the above\\n * copyright notice, this list of conditions and the following disclaimer\\n * in the documentation and/or other materials provided with the\\n * distribution.\\n *     * Neither the name of Google Inc. nor the names of its\\n * contributors may be used to endorse or promote products derived from\\n * this software without specific prior written permission.\\n *\\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\\n * \\\"AS IS\\\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\\n */\\n\\nimport type * as SDK from '../../core/sdk/sdk.js';\\n\\nimport {\\n  setCategories,\\n  setEventStylesMap,\\n  setTimelineMainEventCategories,\\n  stringIsEventCategory,\\n} from './EventUICategory.js';\\nimport {type Client, TimelineController} from './TimelineController.js';\\nimport {UIDevtoolsUtils} from './UIDevtoolsUtils.js';\\n\\nexport class UIDevtoolsController extends TimelineController {\\n  constructor(rootTarget: SDK.Target.Target, primaryPageTarget: SDK.Target.Target, client: Client) {\\n    super(rootTarget, primaryPageTarget, client);\\n    setEventStylesMap(UIDevtoolsUtils.categorizeEvents());\\n    setCategories(UIDevtoolsUtils.categories());\\n    setTimelineMainEventCategories(UIDevtoolsUtils.getMainCategoriesList().filter(stringIsEventCategory));\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);