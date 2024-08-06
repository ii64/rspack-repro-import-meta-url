"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_components_text_prompt_TextPrompt_test_js"], {
"./ui/components/text_prompt/TextPrompt.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../testing/DOMHelpers.js */ "./testing/DOMHelpers.js");
/* harmony import */var _text_prompt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text_prompt.js */ "./ui/components/text_prompt/text_prompt.js");
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var renderTextPrompt = function(data) {
    var component = new _text_prompt_js__WEBPACK_IMPORTED_MODULE_1__.TextPrompt.TextPrompt();
    component.data = data;
    return component;
};
var defaultTextPromptData = {
    ariaLabel: 'Quick open prompt',
    prefix: 'Open',
    suggestion: 'File'
};
describe('TextPrompt', function() {
    it('renders one text prompt correctly', function() {
        var component = renderTextPrompt(defaultTextPromptData);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var textPromptPrefixs = component.shadowRoot.querySelectorAll('.prefix');
        assert.lengthOf(textPromptPrefixs, 1);
        assert.instanceOf(textPromptPrefixs[0], HTMLSpanElement);
        var textPromptInputs = component.shadowRoot.querySelectorAll('.text-prompt-input');
        assert.lengthOf(textPromptInputs, 1);
        assert.instanceOf(textPromptInputs[0], HTMLSpanElement);
        assert.deepEqual(component.data, defaultTextPromptData);
    });
    describe('data setter', function() {
        it('sets the prefix correctly', function() {
            var _textPromptPrefixs__textContent;
            var component = renderTextPrompt(defaultTextPromptData);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            component.setPrefix('Run');
            var textPromptPrefixs = component.shadowRoot.querySelectorAll('.prefix');
            assert.strictEqual(textPromptPrefixs.length, 1);
            assert.strictEqual((_textPromptPrefixs__textContent = textPromptPrefixs[0].textContent) === null || _textPromptPrefixs__textContent === void 0 ? void 0 : _textPromptPrefixs__textContent.trim(), 'Run');
        });
        it('sets the suggestion correctly', function() {
            var component = renderTextPrompt(defaultTextPromptData);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            component.setSuggestion('Command');
            var textPromptSuggestions = component.shadowRoot.querySelectorAll('.suggestion');
            assert.strictEqual(textPromptSuggestions.length, 1);
            assert.strictEqual(textPromptSuggestions[0].value.trim(), 'Command');
        });
        it('sets the input text correctly', function() {
            var component = renderTextPrompt(defaultTextPromptData);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            component.setText('text');
            var textPromptInputs = component.shadowRoot.querySelectorAll('.input');
            assert.strictEqual(textPromptInputs.length, 1);
            assert.strictEqual(textPromptInputs[0].value.trim(), 'text');
        });
        it('sets the input and suggestion text correctly', function() {
            var component = renderTextPrompt(defaultTextPromptData);
            (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
            component.setText('@');
            component.setSuggestion('Command');
            var textPromptInputs = component.shadowRoot.querySelectorAll('.input');
            assert.strictEqual(textPromptInputs[0].value.trim(), '@');
            var textPromptSuggestions = component.shadowRoot.querySelectorAll('.suggestion');
            assert.strictEqual(textPromptSuggestions[0].value.trim(), '@Command');
        });
    });
    it('focus on the input element correctly', function() {
        var component = renderTextPrompt(defaultTextPromptData);
        (0,_testing_DOMHelpers_js__WEBPACK_IMPORTED_MODULE_0__.renderElementIntoDOM)(component);
        var textPromptInput = component.shadowRoot.querySelectorAll('.text-prompt-input')[0];
        assert.isFalse(textPromptInput.hasFocus());
        component.focus();
        assert.isTrue(textPromptInput.hasFocus());
    });
}); //# sourceMappingURL=TextPrompt.test.js.map


}),

}]);