"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_dist_evaluator_test_js"],{

/***/ "./src/third_party/csp_evaluator/package/dist/evaluator_test.js":
/*!**********************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/dist/evaluator_test.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jasmine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const csp_1 = __webpack_require__(/*! ./csp */ "./src/third_party/csp_evaluator/package/dist/csp.js");
const evaluator_1 = __webpack_require__(/*! ./evaluator */ "./src/third_party/csp_evaluator/package/dist/evaluator.js");
const finding_1 = __webpack_require__(/*! ./finding */ "./src/third_party/csp_evaluator/package/dist/finding.js");
describe('Test evaluator', () => {
    it('CspEvaluator', () => {
        const fakeCsp = new csp_1.Csp();
        const evaluator = new evaluator_1.CspEvaluator(fakeCsp);
        expect(evaluator.csp).toBe(fakeCsp);
    });
    it('Evaluate', () => {
        const fakeCsp = new (csp_1.Csp)();
        const fakeFinding = new (finding_1.Finding)(finding_1.Type.UNKNOWN_DIRECTIVE, 'Fake description', finding_1.Severity.MEDIUM, 'fake-directive', 'fake-directive-value');
        const fakeVerifier = (parsedCsp) => {
            return [fakeFinding];
        };
        const evaluator = new (evaluator_1.CspEvaluator)(fakeCsp);
        const findings = evaluator.evaluate([fakeVerifier, fakeVerifier], [fakeVerifier]);
        const expectedFindings = [fakeFinding, fakeFinding, fakeFinding];
        expect(findings).toEqual(expectedFindings);
    });
});
//# sourceMappingURL=evaluator_test.js.map

/***/ })

}]);