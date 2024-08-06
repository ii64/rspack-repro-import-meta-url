// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as Platform from '../../core/platform/platform.js';
import * as FormatterWorker from './formatter_worker.js';
self.onmessage = function(event) {
    var method = event.data.method;
    var params = event.data.params;
    if (!method) {
        return;
    }
    switch(method){
        case "format" /* FormatterActions.FORMAT */ :
            self.postMessage(FormatterWorker.FormatterWorker.format(params.mimeType, params.content, params.indentString));
            break;
        case "parseCSS" /* FormatterActions.PARSE_CSS */ :
            FormatterWorker.CSSRuleParser.parseCSS(params.content, self.postMessage);
            break;
        case "javaScriptSubstitute" /* FormatterActions.JAVASCRIPT_SUBSTITUTE */ :
            {
                self.postMessage(FormatterWorker.Substitute.substituteExpression(params.content, params.mapping));
                break;
            }
        case "javaScriptScopeTree" /* FormatterActions.JAVASCRIPT_SCOPE_TREE */ :
            {
                var _FormatterWorker_ScopeParser_parseScopes;
                self.postMessage((_FormatterWorker_ScopeParser_parseScopes = FormatterWorker.ScopeParser.parseScopes(params.content, params.sourceType)) === null || _FormatterWorker_ScopeParser_parseScopes === void 0 ? void 0 : _FormatterWorker_ScopeParser_parseScopes.export());
                break;
            }
        case "evaluatableJavaScriptSubstring" /* FormatterActions.EVALUATE_JAVASCRIPT_SUBSTRING */ :
            self.postMessage(FormatterWorker.FormatterWorker.evaluatableJavaScriptSubstring(params.content));
            break;
        default:
            Platform.assertNever(method, "Unsupport method name: ".concat(method));
    }
};
self.postMessage('workerReady'); //# sourceMappingURL=formatter_worker-entrypoint.js.map