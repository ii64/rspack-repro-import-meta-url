(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_issues_IssueRevealer_js_map"],{

/***/ "./panels/issues/IssueRevealer.js.map":
/*!********************************************!*\
  !*** ./panels/issues/IssueRevealer.js.map ***!
  \********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"IssueRevealer.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/panels/issues/IssueRevealer.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,OAAO,KAAK,EAAE,MAAM,2BAA2B,CAAC;AAEhD,OAAO,EAAC,UAAU,EAAC,MAAM,iBAAiB,CAAC;AAE3C,MAAM,OAAO,aAAa;IACxB,KAAK,CAAC,MAAM,CAAC,KAAgC;QAC3C,MAAM,EAAE,CAAC,WAAW,CAAC,WAAW,CAAC,QAAQ,EAAE,CAAC,QAAQ,CAAC,aAAa,CAAC,CAAC;QACpE,MAAM,IAAI,GAAG,EAAE,CAAC,WAAW,CAAC,WAAW,CAAC,QAAQ,EAAE,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC;QACvE,IAAI,IAAI,EAAE,CAAC;YACT,MAAM,UAAU,GAAG,MAAM,IAAI,CAAC,MAAM,EAAE,CAAC;YACvC,IAAI,UAAU,YAAY,UAAU,EAAE,CAAC;gBACrC,MAAM,UAAU,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC;YACjC,CAAC;iBAAM,CAAC;gBACN,MAAM,IAAI,KAAK,CAAC,sDAAsD,CAAC,CAAC;YAC1E,CAAC;QACH,CAAC;IACH,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../core/common/common.js';\\nimport type * as IssuesManager from '../../models/issues_manager/issues_manager.js';\\nimport * as UI from '../../ui/legacy/legacy.js';\\n\\nimport {IssuesPane} from './IssuesPane.js';\\n\\nexport class IssueRevealer implements Common.Revealer.Revealer<IssuesManager.Issue.Issue> {\\n  async reveal(issue: IssuesManager.Issue.Issue): Promise<void> {\\n    await UI.ViewManager.ViewManager.instance().showView('issues-pane');\\n    const view = UI.ViewManager.ViewManager.instance().view('issues-pane');\\n    if (view) {\\n      const issuesPane = await view.widget();\\n      if (issuesPane instanceof IssuesPane) {\\n        await issuesPane.reveal(issue);\\n      } else {\\n        throw new Error('Expected issues pane to be an instance of IssuesPane');\\n      }\\n    }\\n  }\\n}\\n\"]}");

/***/ })

}]);