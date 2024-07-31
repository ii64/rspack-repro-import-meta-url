"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_csp_evaluator_package_lighthouse_lighthouse_checks_ts"],{

/***/ "./src/third_party/csp_evaluator/package/lighthouse/lighthouse_checks.ts":
/*!*******************************************************************************!*\
  !*** ./src/third_party/csp_evaluator/package/lighthouse/lighthouse_checks.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateForFailure: () => (/* binding */ evaluateForFailure),
/* harmony export */   evaluateForSyntaxErrors: () => (/* binding */ evaluateForSyntaxErrors),
/* harmony export */   evaluateForWarnings: () => (/* binding */ evaluateForWarnings)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/parser_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/**
 * @fileoverview CSP checks as used by Lighthouse. These checks tend to be a
 * stricter subset of the other checks defined in this project.
 */




function arrayContains(arr, elem) {
    return arr.some(e => e.equals(elem));
}
/**
 * Computes the intersection of all of the given sets using the `equals(...)`
 * method to compare items.
 */
function setIntersection(sets) {
    const intersection = [];
    if (sets.length === 0) {
        return intersection;
    }
    const firstSet = sets[0];
    for (const elem of firstSet) {
        if (sets.every(set => arrayContains(set, elem))) {
            intersection.push(elem);
        }
    }
    return intersection;
}
/**
 * Computes the union of all of the given sets using the `equals(...)` method to
 * compare items.
 */
function setUnion(sets) {
    const union = [];
    for (const set of sets) {
        for (const elem of set) {
            if (!arrayContains(union, elem)) {
                union.push(elem);
            }
        }
    }
    return union;
}
/**
 * Checks if *any* of the given policies pass the given checker. If at least one
 * passes, returns no findings. Otherwise, returns the list of findings from the
 * first one that had any findings.
 */
function atLeastOnePasses(parsedCsps, checker) {
    const findings = [];
    for (const parsedCsp of parsedCsps) {
        findings.push(checker(parsedCsp));
    }
    return setIntersection(findings);
}
/**
 * Checks if *any* of the given policies fail the given checker. Returns the
 * list of findings from the one that had the most findings.
 */
function atLeastOneFails(parsedCsps, checker) {
    const findings = [];
    for (const parsedCsp of parsedCsps) {
        findings.push(checker(parsedCsp));
    }
    return setUnion(findings);
}
/**
 * Evaluate the given list of CSPs for checks that should cause Lighthouse to
 * mark the CSP as failing. Returns only the first set of failures.
 */
function evaluateForFailure(parsedCsps) {
    // Check #1
    const targetsXssFindings = [
        ...atLeastOnePasses(parsedCsps, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        ...atLeastOnePasses(parsedCsps, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        ...Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(parsedCsps),
    ];
    // Check #2
    const effectiveCsps = parsedCsps.map(csp => csp.getEffectiveCsp(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).CSP3));
    const effectiveCspsWithScript = effectiveCsps.filter(csp => {
        const directiveName = csp.getEffectiveDirective(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../csp'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).SCRIPT_SRC);
        return csp.directives[directiveName];
    });
    const robust = [
        ...atLeastOnePasses(effectiveCspsWithScript, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        ...atLeastOnePasses(effectiveCspsWithScript, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        ...atLeastOnePasses(effectiveCsps, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        ...atLeastOnePasses(effectiveCsps, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
    ];
    return [...targetsXssFindings, ...robust];
}
/**
 * Evaluate the given list of CSPs for checks that should cause Lighthouse to
 * mark the CSP as OK, but present a warning. Returns only the first set of
 * failures.
 */
function evaluateForWarnings(parsedCsps) {
    // Check #1 is implemented by Lighthouse directly
    // Check #2 is no longer used in Lighthouse.
    // Check #3
    return [
        ...atLeastOneFails(parsedCsps, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        ...atLeastOneFails(parsedCsps, Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/strictcsp_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
    ];
}
/**
 * Evaluate the given list of CSPs for syntax errors. Returns a list of the same
 * length as parsedCsps where each item in the list is the findings for the
 * matching Csp.
 */
function evaluateForSyntaxErrors(parsedCsps) {
    // Check #4
    const allFindings = [];
    for (const csp of parsedCsps) {
        const findings = [
            ...Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(csp), ...Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/parser_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(csp),
            ...Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/security_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(csp), ...Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/parser_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(csp),
            ...Object(function webpackMissingModule() { var e = new Error("Cannot find module '../checks/parser_checks'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(csp)
        ];
        allFindings.push(findings);
    }
    return allFindings;
}


/***/ })

}]);