"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_recorder_components_util_ts"],{

/***/ "./src/panels/recorder/components/util.ts":
/*!************************************************!*\
  !*** ./src/panels/recorder/components/util.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayAssignments: () => (/* binding */ ArrayAssignments),
/* harmony export */   InsertAssignment: () => (/* binding */ InsertAssignment),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   deepFreeze: () => (/* binding */ deepFreeze),
/* harmony export */   immutableDeepAssign: () => (/* binding */ immutableDeepAssign),
/* harmony export */   mod: () => (/* binding */ mod)
/* harmony export */ });
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const mod = (a, n) => {
    return ((a % n) + n) % n;
};
function assert(predicate, message = 'Assertion failed!') {
    if (!predicate) {
        throw new Error(message);
    }
}
const deepFreeze = (object) => {
    for (const name of Reflect.ownKeys(object)) {
        const value = object[name];
        if ((value && typeof value === 'object') || typeof value === 'function') {
            deepFreeze(value);
        }
    }
    return Object.freeze(object);
};
class InsertAssignment {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
    }
}
class ArrayAssignments {
    constructor(value) {
        Object.defineProperty(this, "value", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.value = value;
    }
}
const immutableDeepAssign = (object, assignments) => {
    if (assignments instanceof ArrayAssignments) {
        assert(Array.isArray(object), `Expected an array. Got ${typeof object}.`);
        const updatedObject = [...object];
        const keys = Object.keys(assignments.value)
            .sort((a, b) => Number(b) - Number(a));
        for (const key of keys) {
            const update = assignments.value[Number(key)];
            if (update === undefined) {
                updatedObject.splice(Number(key), 1);
            }
            else if (update instanceof InsertAssignment) {
                updatedObject.splice(Number(key), 0, update.value);
            }
            else {
                updatedObject[Number(key)] = immutableDeepAssign(updatedObject[key], update);
            }
        }
        return Object.freeze(updatedObject);
    }
    if (typeof assignments === 'object' && !Array.isArray(assignments)) {
        assert(!Array.isArray(object), 'Expected an object. Got an array.');
        const updatedObject = { ...object };
        const keys = Object.keys(assignments);
        for (const key of keys) {
            const update = assignments[key];
            if (update === undefined) {
                delete updatedObject[key];
            }
            else {
                updatedObject[key] = immutableDeepAssign(updatedObject[key], update);
            }
        }
        return Object.freeze(updatedObject);
    }
    return assignments;
};


/***/ })

}]);