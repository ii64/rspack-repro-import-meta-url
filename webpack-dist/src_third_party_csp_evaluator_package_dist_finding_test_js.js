"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_finding_test_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/finding_test.js":
/*!********************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/finding_test.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const csp_1 = __webpack_require__(/*! ./csp */ "./src/third_party/csp_evaluator/package/dist/csp.js");
const finding_1 = __webpack_require__(/*! ./finding */ "./src/third_party/csp_evaluator/package/dist/finding.js");
describe('Test finding', () => {
    it('Finding', () => {
        const type = finding_1.Type.MISSING_SEMICOLON;
        const description = 'description';
        const severity = finding_1.Severity.HIGH;
        const directive = csp_1.Directive.SCRIPT_SRC;
        const value = csp_1.Keyword.NONE;
        const finding = new finding_1.Finding(type, description, severity, directive, value);
        expect(finding.type).toBe(type);
        expect(finding.description).toBe(description);
        expect(finding.severity).toBe(severity);
        expect(finding.directive).toBe(directive);
        expect(finding.value).toBe(value);
    });
    it('GetHighestSeverity', () => {
        const finding1 = new finding_1.Finding(finding_1.Type.MISSING_SEMICOLON, 'description', finding_1.Severity.HIGH, csp_1.Directive.SCRIPT_SRC);
        const finding2 = new finding_1.Finding(finding_1.Type.MISSING_SEMICOLON, 'description', finding_1.Severity.MEDIUM, csp_1.Directive.SCRIPT_SRC);
        const finding3 = new finding_1.Finding(finding_1.Type.MISSING_SEMICOLON, 'description', finding_1.Severity.INFO, csp_1.Directive.SCRIPT_SRC);
        expect(finding_1.Finding.getHighestSeverity([
            finding1, finding3, finding2, finding1
        ])).toBe(finding_1.Severity.HIGH);
        expect(finding_1.Finding.getHighestSeverity([
            finding3, finding2
        ])).toBe(finding_1.Severity.MEDIUM);
        expect(finding_1.Finding.getHighestSeverity([
            finding3, finding3
        ])).toBe(finding_1.Severity.INFO);
        expect(finding_1.Finding.getHighestSeverity([])).toBe(finding_1.Severity.NONE);
    });
});
//# sourceMappingURL=finding_test.js.map

/***/ })

}]);