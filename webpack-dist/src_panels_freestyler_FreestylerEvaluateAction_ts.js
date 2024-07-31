"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_freestyler_FreestylerEvaluateAction_ts"],{

/***/ "./src/panels/freestyler/FreestylerEvaluateAction.ts":
/*!***********************************************************!*\
  !*** ./src/panels/freestyler/FreestylerEvaluateAction.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExecutionError: () => (/* binding */ ExecutionError),
/* harmony export */   FreestylerEvaluateAction: () => (/* binding */ FreestylerEvaluateAction),
/* harmony export */   SideEffectError: () => (/* binding */ SideEffectError)
/* harmony export */ });
/* harmony import */ var _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../generated/protocol.js */ "./src/generated/protocol.ts");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

class ExecutionError extends Error {
}
class SideEffectError extends Error {
}
/* istanbul ignore next */
function stringifyObjectOnThePage() {
    const seenBefore = new WeakMap();
    return JSON.stringify(this, function replacer(key, value) {
        if (typeof value === 'object' && value !== null) {
            if (seenBefore.has(value)) {
                return '(cycle)';
            }
            seenBefore.set(value, true);
        }
        if (value instanceof HTMLElement) {
            const idAttribute = value.id ? ` id="${value.id}"` : '';
            const classAttribute = value.classList.value ? ` class="${value.classList.value}"` : '';
            return `<${value.nodeName.toLowerCase()}${idAttribute}${classAttribute}>${value.hasChildNodes() ? '...' : ''}</${value.nodeName.toLowerCase()}>`;
        }
        if (this instanceof CSSStyleDeclaration) {
            // Do not add number keys to the output.
            if (!isNaN(Number(key))) {
                return undefined;
            }
        }
        return value;
    });
}
async function stringifyRemoteObject(object) {
    switch (object.type) {
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.String:
            return `'${object.value}'`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Bigint:
            return `${object.value}n`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Boolean:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Number:
            return `${object.value}`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Undefined:
            return 'undefined';
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Symbol:
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Function:
            return `${object.description}`;
        case _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.Object: {
            const res = await object.callFunction(stringifyObjectOnThePage);
            if (!res.object || res.object.type !== _generated_protocol_js__WEBPACK_IMPORTED_MODULE_0__.Runtime.RemoteObjectType.String) {
                throw new Error('Could not stringify the object' + object);
            }
            return res.object.value;
        }
        default:
            throw new Error('Unknown type to stringify ' + object.type);
    }
}
class FreestylerEvaluateAction {
    static async execute(code, executionContext, { throwOnSideEffect }) {
        const response = await executionContext.evaluate({
            expression: code,
            replMode: true,
            includeCommandLineAPI: true,
            returnByValue: false,
            silent: false,
            generatePreview: true,
            allowUnsafeEvalBlockedByCSP: false,
            throwOnSideEffect,
        }, 
        /* userGesture */ false, /* awaitPromise */ true);
        if (!response) {
            throw new Error('Response is not found');
        }
        if ('error' in response) {
            throw new ExecutionError(response.error);
        }
        if (response.exceptionDetails) {
            const exceptionDescription = response.exceptionDetails.exception?.description;
            if (exceptionDescription?.startsWith('EvalError: Possible side-effect in debug-evaluate')) {
                throw new SideEffectError(exceptionDescription);
            }
            throw new ExecutionError(exceptionDescription || 'JS exception');
        }
        return stringifyRemoteObject(response.object);
    }
}


/***/ })

}]);