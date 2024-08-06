"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_issues_manager_MarkdownIssueDescription_test_js"], {
"./models/issues_manager/MarkdownIssueDescription.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../issues_manager/issues_manager.js */ "./models/issues_manager/issues_manager.js");
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('createIssueDescriptionFromMarkdown', function() {
    it('only accepts Markdown where the first AST element is a heading, describing the title', function() {
        var emptyMarkdownDescription = {
            file: '<unused>',
            links: []
        };
        var validIssueDescription = '# Title for the issue\n\n...and some text describing the issue.';
        var description = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.createIssueDescriptionFromRawMarkdown(validIssueDescription, emptyMarkdownDescription);
        assert.strictEqual(description.title, 'Title for the issue');
    });
    it('throws an error for issue description without a heading', function() {
        var emptyMarkdownDescription = {
            file: '<unused>',
            links: []
        };
        var invalidIssueDescription = 'Just some text, but the heading is missing!';
        assert.throws(function() {
            return _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.createIssueDescriptionFromRawMarkdown(invalidIssueDescription, emptyMarkdownDescription);
        });
    });
});
describe('substitutePlaceholders', function() {
    it('returns the input as-is, with no placeholders present in the input', function() {
        var str = 'Example string with no placeholders';
        assert.strictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str), str);
    });
    it('subsitutes a single placeholder', function() {
        var str = 'Example string with a single {PLACEHOLDER_placeholder}';
        var actual = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str, new Map([
            [
                'PLACEHOLDER_placeholder',
                'fooholder'
            ]
        ]));
        assert.strictEqual(actual, 'Example string with a single fooholder');
    });
    it('substitutes multiple placeholders', function() {
        var str = 'Example string with two placeholders, \'{PLACEHOLDER_ph1}\' and \'{PLACEHOLDER_ph2}\'.';
        var actual = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str, new Map([
            [
                'PLACEHOLDER_ph1',
                'foo'
            ],
            [
                'PLACEHOLDER_ph2',
                'bar'
            ]
        ]));
        assert.strictEqual(actual, 'Example string with two placeholders, \'foo\' and \'bar\'.');
    });
    it('throws an error for placeholders that don\'t have a replacement in the map', function() {
        var str = 'Example string where a replacement for {PLACEHOLDER_placeholder} is not provided.';
        assert.throws(function() {
            return _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str);
        });
    });
    it('ignores placeholder syntax where the placeholder doesn\'t have the PLACEHOLDER prefix', function() {
        var str = 'Example string with a {placeholder} that must be ignored.';
        assert.strictEqual(_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str), str);
    });
    it('throws an error for unused replacements', function() {
        var str = 'Example string with no placeholder';
        assert.throws(function() {
            return _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str, new Map([
                [
                    'PLACEHOLDER_FOO',
                    'bar'
                ]
            ]));
        });
    });
    it('allows the same placeholder to be used multiple times', function() {
        var str = 'Example string with the same placeholder used twice: {PLACEHOLDER_PH1} {PLACEHOLDER_PH1}';
        var actual = _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str, new Map([
            [
                'PLACEHOLDER_PH1',
                'foo'
            ]
        ]));
        assert.strictEqual(actual, 'Example string with the same placeholder used twice: foo foo');
    });
    it('throws an error for invalid placeholder syntax provided in the substitutions map', function() {
        var str = 'Example string with no placeholder';
        assert.throws(function() {
            return _issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownIssueDescription.substitutePlaceholders(str, new Map([
                [
                    'invalid_ph',
                    'foo'
                ]
            ]));
        });
    });
}); //# sourceMappingURL=MarkdownIssueDescription.test.js.map


}),

}]);