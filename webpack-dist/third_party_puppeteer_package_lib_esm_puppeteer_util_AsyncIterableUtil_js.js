"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_puppeteer_package_lib_esm_puppeteer_util_AsyncIterableUtil_js"],{

/***/ "./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js":
/*!***********************************************************************************!*\
  !*** ./third_party/puppeteer/package/lib/esm/puppeteer/util/AsyncIterableUtil.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncIterableUtil: () => (/* binding */ AsyncIterableUtil)
/* harmony export */ });
/**
 * @internal
 */
class AsyncIterableUtil {
    static async *map(iterable, map) {
        for await (const value of iterable) {
            yield await map(value);
        }
    }
    static async *flatMap(iterable, map) {
        for await (const value of iterable) {
            yield* map(value);
        }
    }
    static async collect(iterable) {
        const result = [];
        for await (const value of iterable) {
            result.push(value);
        }
        return result;
    }
    static async first(iterable) {
        for await (const value of iterable) {
            return value;
        }
        return;
    }
}
//# sourceMappingURL=AsyncIterableUtil.js.map

/***/ })

}]);