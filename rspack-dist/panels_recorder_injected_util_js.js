"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_recorder_injected_util_js"], {
"./panels/recorder/injected/util.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  assert: function() { return assert; },
  createClickAttributes: function() { return createClickAttributes; },
  getClickableTargetFromEvent: function() { return getClickableTargetFromEvent; },
  getMouseEventOffsets: function() { return getMouseEventOffsets; },
  haultImmediateEvent: function() { return haultImmediateEvent; }
});
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function assert(condition) {
    if (!condition) {
        throw new Error('Assertion failed!');
    }
}
var haultImmediateEvent = function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
};
var getMouseEventOffsets = function(event, target) {
    var rect = target.getBoundingClientRect();
    return {
        offsetX: event.clientX - rect.x,
        offsetY: event.clientY - rect.y
    };
};
/**
 * @returns the element that emitted the event.
 */ var getClickableTargetFromEvent = function(event) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = event.composedPath()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var element = _step.value;
            if (!_instanceof(element, Element)) {
                continue;
            }
            // If an element has no width or height, we skip this target.
            var rect = element.getBoundingClientRect();
            if (rect.width === 0 || rect.height === 0) {
                continue;
            }
            return element;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    throw new Error("No target is found in event of type ".concat(event.type));
};
var createClickAttributes = function(event, target) {
    var deviceType;
    if (_instanceof(event, PointerEvent)) {
        switch(event.pointerType){
            case 'mouse':
                break;
            case 'pen':
            case 'touch':
                deviceType = event.pointerType;
                break;
            default:
                // Unsupported device type.
                return;
        }
    }
    var _getMouseEventOffsets = getMouseEventOffsets(event, target), offsetX = _getMouseEventOffsets.offsetX, offsetY = _getMouseEventOffsets.offsetY;
    if (offsetX < 0 || offsetY < 0) {
        // Event comes from outside the viewport. Can happen as a result of a
        // simulated click (through a keyboard event e.g.).
        return;
    }
    return {
        button: [
            'auxiliary',
            'secondary',
            'back',
            'forward'
        ][event.button - 1],
        deviceType: deviceType,
        offsetX: offsetX,
        offsetY: offsetY
    };
}; //# sourceMappingURL=util.js.map


}),

}]);