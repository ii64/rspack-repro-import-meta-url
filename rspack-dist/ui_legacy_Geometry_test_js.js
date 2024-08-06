"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_Geometry_test_js"], {
"./ui/legacy/Geometry.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./legacy.js */ "./ui/legacy/legacy.js");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

describe('Vector', function() {
    it('can be instantiated without issues', function() {
        var vector = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        assert.strictEqual(vector.x, 1, 'x value was not set correctly');
        assert.strictEqual(vector.y, 2, 'y value was not set correctly');
        assert.strictEqual(vector.z, 3, 'z value was not set correctly');
    });
    it('is able to return the length', function() {
        var vector = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        assert.strictEqual(vector.length(), 3.7416573867739413, 'length was not returned correctly');
    });
    it('is able to be normalized if the length was above epsilon', function() {
        var vector = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        vector.normalize();
        assert.strictEqual(vector.x, 0.2672612419124244, 'x value was not set correctly');
        assert.strictEqual(vector.y, 0.5345224838248488, 'y value was not set correctly');
        assert.strictEqual(vector.z, 0.8017837257372732, 'z value was not set correctly');
        assert.strictEqual(vector.length(), 1, 'length was not returned correctly');
    });
    it('does not normalize if the length was below epsilon', function() {
        var vector = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(0.000001, 0.000002, 0.000003);
        vector.normalize();
        assert.strictEqual(vector.x, 0.000001, 'x value was changed');
        assert.strictEqual(vector.y, 0.000002, 'y value was changed');
        assert.strictEqual(vector.z, 0.000003, 'z value was changed');
        assert.strictEqual(vector.length(), 0.0000037416573867739415, 'length was not returned correctly');
    });
});
describe('Point', function() {
    it('can be instantiated without issues', function() {
        var point = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 2);
        assert.strictEqual(point.x, 1, 'x value was not set correctly');
        assert.strictEqual(point.y, 2, 'y value was not set correctly');
    });
    it('is able to return distanct to a certain point', function() {
        var p1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(0, 0);
        var p2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(0, 1);
        var p3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 0);
        var p4 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(3, 4);
        assert.strictEqual(p1.distanceTo(p2), 1, 'distance to the first point was not returned correctly');
        assert.strictEqual(p1.distanceTo(p3), 1, 'distance to the second point was not returned correctly');
        assert.strictEqual(p1.distanceTo(p4), 5, 'distance to the third point was not returned correctly');
    });
    it('is able to be scaled to a certain value', function() {
        var point = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 2);
        var scaledPoint = point.scale(2);
        assert.strictEqual(scaledPoint.x, 2, 'x was not scaled correctly');
        assert.strictEqual(scaledPoint.y, 4, 'y was not scaled correctly');
    });
    it('is able to be projected on a point that is not the origin', function() {
        var p1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 2);
        var p2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(3, 4);
        var projectedPoint = p1.projectOn(p2);
        assert.strictEqual(projectedPoint.x, 1.32, 'x was not projected correctly');
        assert.strictEqual(projectedPoint.y, 1.76, 'y was not projected correctly');
    });
    it('is able to be projected on a point that is the origin', function() {
        var p1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 2);
        var p2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(0, 0);
        var projectedPoint = p1.projectOn(p2);
        assert.strictEqual(projectedPoint.x, 0, 'x was not projected correctly');
        assert.strictEqual(projectedPoint.y, 0, 'y was not projected correctly');
    });
    it('can be represented as a string', function() {
        var point = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1.23, 4.56);
        assert.strictEqual(point.toString(), '1.23, 4.56', 'string representation was not returned correctly');
    });
});
describe('CubicBezier', function() {
    it('can be instantiated without issues', function() {
        var p1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 2);
        var p2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(3, 4);
        var cubicBezier = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier(p1, p2);
        assert.strictEqual(cubicBezier.controlPoints[0].x, 1, 'x value for the first point was not set correctly');
        assert.strictEqual(cubicBezier.controlPoints[0].y, 2, 'y value for the first point was not set correctly');
        assert.strictEqual(cubicBezier.controlPoints[1].x, 3, 'x value for the second point was not set correctly');
        assert.strictEqual(cubicBezier.controlPoints[1].y, 4, 'y value for the second point was not set correctly');
    });
    it('is able to return a cubic bezier from a valid string', function() {
        var testText = 'linear';
        var controlPoints = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier.parse(testText).controlPoints;
        assert.strictEqual(controlPoints[0].x, 0, 'x value for the first point was not set correctly');
        assert.strictEqual(controlPoints[0].y, 0, 'y value for the first point was not set correctly');
        assert.strictEqual(controlPoints[1].x, 1, 'x value for the second point was not set correctly');
        assert.strictEqual(controlPoints[1].y, 1, 'y value for the second point was not set correctly');
    });
    it('returns null from an invalid string', function() {
        var testText = 'invalid text';
        var cubicBezier = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier.parse(testText);
        assert.isNull(cubicBezier, 'function did not return null');
    });
    it('is able to evaluate a number to a point', function() {
        var p1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 2);
        var p2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(3, 4);
        var cubicBezier = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier(p1, p2);
        var resultPoint = cubicBezier.evaluateAt(5);
        assert.strictEqual(resultPoint.x, -535, 'x value for the resulting point was not set correctly');
        assert.strictEqual(resultPoint.y, -595, 'y value for the resulting point was not set correctly');
    });
    it('is able to be represented as CSS text with raw values', function() {
        var p1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(1, 2);
        var p2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(3, 4);
        var cubicBezier = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier(p1, p2);
        var cssText = cubicBezier.asCSSText();
        assert.strictEqual(cssText, 'cubic-bezier(1, 2, 3, 4)', 'cubic bezier was not represented correctly as CSS text');
    });
    it('is able to be represented as CSS text with a keyword value', function() {
        var p1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(0.25, 0.1);
        var p2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Point(0.25, 1);
        var cubicBezier = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.CubicBezier(p1, p2);
        var cssText = cubicBezier.asCSSText();
        assert.strictEqual(cssText, 'ease', 'cubic bezier was not represented correctly as CSS text');
    });
});
describe('EulerAngles', function() {
    var matrixWithZXYRotation = function matrixWithZXYRotation(alpha, beta, gamma) {
        return new DOMMatrix().rotate(0, 0, alpha).rotate(beta, 0, 0).rotate(0, gamma, 0);
    };
    it('can be instantiated without issues', function() {
        var eulerAngles = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles(1, 2, 3);
        assert.strictEqual(eulerAngles.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(eulerAngles.beta, 2, 'beta value was not set correctly');
        assert.strictEqual(eulerAngles.gamma, 3, 'gamma value was not set correctly');
    });
    it('is able to return Euler angles from an identity rotation matrix', function() {
        var matrix = new DOMMatrix();
        var result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 0, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 0, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
    });
    it('is able to return Euler angles from a rotation matrix', function() {
        var matrix, result;
        matrix = matrixWithZXYRotation(0, 1, 2);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 0, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 1, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 2, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, 0, 2);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 0, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 2, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, 2, 0);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 2, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, 2, 3);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 2, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 3, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, -2, -3);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, -2, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, -3, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, -2, 3);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, -2, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 3, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, 2, -3);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 2, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, -3, 'gamma value was not set correctly');
    });
    it('returns canonicalized Euler angles when a Gimbal lock occurs', function() {
        var matrix, result;
        matrix = matrixWithZXYRotation(30, 90, 45);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 75, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(30, -90, 45);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 345, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, -90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(30, -90, -45);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 75, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, -90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(0, 90, 45);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 45, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(0, 90, -45);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 315, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(45, 90, 0);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 45, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(0, 90, 0);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 0, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(0, -90, 0);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 0, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, -90, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 0, 'gamma value was not set correctly');
    });
    it('returns Euler angles inside the allowed Device Orientation intervals', function() {
        var matrix, result;
        matrix = matrixWithZXYRotation(1, 2, 90);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 181, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 178, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, -90, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, 2, -91);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 181, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 178, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 89, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(360, 1, 2);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 0, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 1, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 2, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(-1, 1, 2);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 359, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 1, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 2, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, -181, 2);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, 179, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 2, 'gamma value was not set correctly');
        matrix = matrixWithZXYRotation(1, 180, 2);
        result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.EulerAngles.fromDeviceOrientationRotationMatrix(matrix);
        assert.strictEqual(result.alpha, 1, 'alpha value was not set correctly');
        assert.strictEqual(result.beta, -180, 'beta value was not set correctly');
        assert.strictEqual(result.gamma, 2, 'gamma value was not set correctly');
    });
});
describe('Size', function() {
    it('can be instantiated without issues', function() {
        var size = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        assert.strictEqual(size.width, 1, 'width value was not set correctly');
        assert.strictEqual(size.height, 2, 'height value was not set correctly');
    });
    it('can be clipped to another smaller size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var resultSize = size1.clipTo(size2);
        assert.strictEqual(resultSize.width, 1, 'width value was not set correctly');
        assert.strictEqual(resultSize.height, 2, 'height value was not set correctly');
    });
    it('can be clipped to another larger size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var resultSize = size1.clipTo(size2);
        assert.strictEqual(resultSize.width, 1, 'width value was not set correctly');
        assert.strictEqual(resultSize.height, 2, 'height value was not set correctly');
    });
    it('returns the original size if nothing was passed to the clipTo function', function() {
        var size = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var resultSize = size.clipTo();
        assert.strictEqual(resultSize.width, 1, 'width value was not set correctly');
        assert.strictEqual(resultSize.height, 2, 'height value was not set correctly');
    });
    it('can be scaled to a different size', function() {
        var size = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var resultSize = size.scale(2);
        assert.strictEqual(resultSize.width, 2, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 4, 'height value was not scaled correctly');
    });
    it('is able to check if it is equal to another size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var result1 = size1.isEqual(size2);
        var result2 = size1.isEqual(size3);
        assert.isFalse(result1, 'size2 was considered equal');
        assert.isTrue(result2, 'size3 was not considered equal');
    });
    it('is able to change width to the max value given a size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var resultSize = size1.widthToMax(size2);
        assert.strictEqual(resultSize.width, 3, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 2, 'height value was not scaled correctly');
    });
    it('is able to change width to the max value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var resultSize = size1.widthToMax(5);
        assert.strictEqual(resultSize.width, 5, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 2, 'height value was not scaled correctly');
    });
    it('is able to increase width by a certain value given a size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var resultSize = size1.addWidth(size2);
        assert.strictEqual(resultSize.width, 4, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 2, 'height value was not scaled correctly');
    });
    it('is able to increase width by a certain value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var resultSize = size1.addWidth(5);
        assert.strictEqual(resultSize.width, 6, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 2, 'height value was not scaled correctly');
    });
    it('is able to change height to the max value given a size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var resultSize = size1.heightToMax(size2);
        assert.strictEqual(resultSize.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 4, 'height value was not scaled correctly');
    });
    it('is able to change height to the max value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var resultSize = size1.heightToMax(5);
        assert.strictEqual(resultSize.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 5, 'height value was not scaled correctly');
    });
    it('is able to increase height by a certain value given a size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var resultSize = size1.addHeight(size2);
        assert.strictEqual(resultSize.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 6, 'height value was not scaled correctly');
    });
    it('is able to increase height by a certain value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var resultSize = size1.addHeight(5);
        assert.strictEqual(resultSize.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.height, 7, 'height value was not scaled correctly');
    });
});
describe('Constraints', function() {
    it('can be instantiated without issues', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var constraints = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        assert.strictEqual(constraints.minimum.width, 1, 'size1 width value was not set correctly');
        assert.strictEqual(constraints.minimum.height, 2, 'size1 height value was not set correctly');
        assert.strictEqual(constraints.preferred.width, 3, 'size2 width value was not set correctly');
        assert.strictEqual(constraints.preferred.height, 4, 'size2 height value was not set correctly');
    });
    it('thows an error if instantiated with a minimum size that is larger than the the preferred size', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        assert.throws(function() {
            return new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        }, Error, 'Minimum size is greater than preferred.');
    });
    it('sets minimum and preferred to UI.Geometry.Size(0, 0) if no values were given to the constructor', function() {
        var constraints = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints();
        assert.strictEqual(constraints.minimum.width, 0, 'size1 width value was not set correctly');
        assert.strictEqual(constraints.minimum.height, 0, 'size1 height value was not set correctly');
        assert.strictEqual(constraints.preferred.width, 0, 'size2 width value was not set correctly');
        assert.strictEqual(constraints.preferred.height, 0, 'size2 height value was not set correctly');
    });
    it('is able to check if it is equal to another constraint', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(5, 6);
        var size4 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(7, 8);
        var constraints1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var constraints2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size3, size4);
        var constraints3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        assert.isFalse(constraints1.isEqual(constraints2), 'constraints2 was considered equal');
        assert.isTrue(constraints1.isEqual(constraints3), 'constraints3 was not considered equal');
    });
    it('is able to change widths to the max value given a constraint', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(5, 6);
        var size4 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(7, 8);
        var constraints1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var constraints2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size3, size4);
        var resultSize = constraints1.widthToMax(constraints2);
        assert.strictEqual(resultSize.minimum.width, 5, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 2, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 7, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 4, 'height value was not scaled correctly');
    });
    it('is able to change widths to the max value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var constraints = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var resultSize = constraints.widthToMax(5);
        assert.strictEqual(resultSize.minimum.width, 5, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 2, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 5, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 4, 'height value was not scaled correctly');
    });
    it('is able to increase widths by a certain value given a constraint', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(5, 6);
        var size4 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(7, 8);
        var constraints1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var constraints2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size3, size4);
        var resultSize = constraints1.addWidth(constraints2);
        assert.strictEqual(resultSize.minimum.width, 6, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 2, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 10, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 4, 'height value was not scaled correctly');
    });
    it('is able to increase widths by a certain value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var constraints = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var resultSize = constraints.addWidth(5);
        assert.strictEqual(resultSize.minimum.width, 6, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 2, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 8, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 4, 'height value was not scaled correctly');
    });
    it('is able to change heights to the max value given a constraint', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(5, 6);
        var size4 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(7, 8);
        var constraints1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var constraints2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size3, size4);
        var resultSize = constraints1.heightToMax(constraints2);
        assert.strictEqual(resultSize.minimum.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 6, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 3, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 8, 'height value was not scaled correctly');
    });
    it('is able to change heights to the max value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var constraints = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var resultSize = constraints.heightToMax(5);
        assert.strictEqual(resultSize.minimum.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 5, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 3, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 5, 'height value was not scaled correctly');
    });
    it('is able to increase heights by a certain value given a constraint', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var size3 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(5, 6);
        var size4 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(7, 8);
        var constraints1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var constraints2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size3, size4);
        var resultSize = constraints1.addHeight(constraints2);
        assert.strictEqual(resultSize.minimum.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 8, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 3, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 12, 'height value was not scaled correctly');
    });
    it('is able to increase heights by a certain value given a number', function() {
        var size1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(1, 2);
        var size2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Size(3, 4);
        var constraints = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Constraints(size1, size2);
        var resultSize = constraints.addHeight(5);
        assert.strictEqual(resultSize.minimum.width, 1, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.minimum.height, 7, 'height value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.width, 3, 'width value was not scaled correctly');
        assert.strictEqual(resultSize.preferred.height, 9, 'height value was not scaled correctly');
    });
});
describe('scalarProduct', function() {
    it('returns the scalar product for two vectors', function() {
        var vector1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        var vector2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(4, 5, 6);
        var result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.scalarProduct(vector1, vector2);
        assert.strictEqual(result, 32, 'the scalar product was not calculated correctly');
    });
});
describe('crossProduct', function() {
    it('returns the cross product for two vectors', function() {
        var vector1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        var vector2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(4, 5, 6);
        var result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.crossProduct(vector1, vector2);
        assert.strictEqual(result.x, -3, 'x value for the resulting vector was not set correctly');
        assert.strictEqual(result.y, 6, 'y value for the resulting vector was not set correctly');
        assert.strictEqual(result.z, -3, 'z value for the resulting vector was not set correctly');
    });
});
describe('subtract', function() {
    it('returns the difference between two vectors', function() {
        var vector1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        var vector2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(4, 5, 6);
        var result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.subtract(vector1, vector2);
        assert.strictEqual(result.x, -3, 'x value for the resulting vector was not set correctly');
        assert.strictEqual(result.y, -3, 'y value for the resulting vector was not set correctly');
        assert.strictEqual(result.z, -3, 'z value for the resulting vector was not set correctly');
    });
});
describe('multiplyVectorByMatrixAndNormalize', function() {
    it('returns the vector multiplied by a matrix and normalized', function() {
        var vector = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        var matrix = new WebKitCSSMatrix();
        var result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.multiplyVectorByMatrixAndNormalize(vector, matrix);
        assert.strictEqual(result.x, 1, 'x value for the resulting vector was not set correctly');
        assert.strictEqual(result.y, 2, 'y value for the resulting vector was not set correctly');
        assert.strictEqual(result.z, 3, 'z value for the resulting vector was not set correctly');
    });
});
describe('calculateAngle', function() {
    it('returns the angle between two vectors', function() {
        var vector1 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(1, 2, 3);
        var vector2 = new _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.Vector(4, 5, 6);
        var result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.calculateAngle(vector1, vector2);
        assert.strictEqual(result, 12.933154491899135, 'angle returned was not correct');
    });
});
describe('boundsForTransformedPoints', function() {
    it('returns the bounds for transformed points', function() {
        var matrix = new WebKitCSSMatrix();
        var result = _legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.boundsForTransformedPoints(matrix, [
            1,
            2,
            3
        ], {
            minX: 5,
            maxX: 6,
            minY: 7,
            maxY: 8
        });
        assert.strictEqual(result.minX, 1, 'minX was calculated incorrectly');
        assert.strictEqual(result.maxX, 6, 'maxX was calculated incorrectly');
        assert.strictEqual(result.minY, 2, 'minY was calculated incorrectly');
        assert.strictEqual(result.maxY, 8, 'maxY was calculated incorrectly');
    });
    describe('degreesToRadians', function() {
        it('converts degrees to radians correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.degreesToRadians(45), 0.7853981633974483);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.degreesToRadians(180), 3.141592653589793);
        });
    });
    describe('degreesToGradians', function() {
        it('converts degrees to gradians correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.degreesToGradians(45), 50);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.degreesToGradians(180), 200);
        });
    });
    describe('degreesToTurns', function() {
        it('converts degrees to turns correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.degreesToTurns(45), 0.125);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.degreesToTurns(180), 0.5);
        });
    });
    describe('radiansToDegrees', function() {
        it('converts radians to degrees correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.radiansToDegrees(1), 57.29577951308232);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.radiansToDegrees(1.5), 85.94366926962348);
        });
    });
    describe('radiansToGradians', function() {
        it('converts radians to gradians correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.radiansToGradians(1), 63.66197723675813);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.radiansToGradians(1.5), 95.4929658551372);
        });
    });
    describe('radiansToTurns', function() {
        it('converts radians to turns correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.radiansToTurns(1), 0.15915494309189535);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.radiansToTurns(1.5), 0.238732414637843);
        });
    });
    describe('gradiansToRadians', function() {
        it('converts gradians to radians correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.gradiansToRadians(50), 0.7853981633974483);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.gradiansToRadians(200), 3.141592653589793);
        });
    });
    describe('turnsToRadians', function() {
        it('converts turns to radians correctly', function() {
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.gradiansToRadians(0.5), 0.007853981633974483);
            assert.strictEqual(_legacy_js__WEBPACK_IMPORTED_MODULE_0__.Geometry.gradiansToRadians(1), 0.015707963267948967);
        });
    });
}); //# sourceMappingURL=Geometry.test.js.map


}),

}]);