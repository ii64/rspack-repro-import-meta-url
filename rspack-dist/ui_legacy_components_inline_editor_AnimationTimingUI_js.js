"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["ui_legacy_components_inline_editor_AnimationTimingUI_js"], {
"./ui/legacy/components/inline_editor/AnimationTimingUI.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  AnimationTimingUI: function() { return AnimationTimingUI; },
  PresetUI: function() { return PresetUI; }
});
/* harmony import */var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./ui/legacy/components/inline_editor/BezierUI.js");
/* harmony import */var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
}
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "get");
    return _class_apply_descriptor_get(receiver, descriptor);
}
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration(obj, privateMap);
    privateMap.set(obj, value);
}
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor(receiver, privateMap, "set");
    _class_apply_descriptor_set(receiver, descriptor, value);
    return value;
}
function _class_private_method_get(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _class_private_method_init(obj, privateSet) {
    _check_private_redeclaration(obj, privateSet);
    privateSet.add(obj);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}





var DOUBLE_CLICK_DELAY = 500;
var _curveUI = /*#__PURE__*/ new WeakMap(), _bezier = /*#__PURE__*/ new WeakMap(), _curve = /*#__PURE__*/ new WeakMap(), _mouseDownPosition = /*#__PURE__*/ new WeakMap(), _controlPosition = /*#__PURE__*/ new WeakMap(), _selectedPoint = /*#__PURE__*/ new WeakMap(), _onBezierChange = /*#__PURE__*/ new WeakMap();
var BezierCurveUI = /*#__PURE__*/ function() {
    "use strict";
    function BezierCurveUI(param) {
        var bezier = param.bezier, container = param.container, onBezierChange = param.onBezierChange;
        _class_call_check(this, BezierCurveUI);
        _class_private_field_init(this, _curveUI, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _bezier, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _curve, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _mouseDownPosition, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _controlPosition, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _selectedPoint, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _onBezierChange, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _bezier, bezier);
        _class_private_field_set(this, _curveUI, new _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__.BezierUI({
            width: 150,
            height: 250,
            marginTop: 50,
            controlPointRadius: 7,
            shouldDrawLine: true
        }));
        _class_private_field_set(this, _curve, _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(container, 'svg', 'bezier-curve'));
        _class_private_field_set(this, _onBezierChange, onBezierChange);
        _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.installDragHandle(_class_private_field_get(this, _curve), this.dragStart.bind(this), this.dragMove.bind(this), this.dragEnd.bind(this), 'default');
    }
    _create_class(BezierCurveUI, [
        {
            key: "dragStart",
            value: function dragStart(event) {
                _class_private_field_set(this, _mouseDownPosition, new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(event.x, event.y));
                var ui = _class_private_field_get(this, _curveUI);
                _class_private_field_set(this, _controlPosition, new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp((event.offsetX - ui.radius) / ui.curveWidth(), 0, 1), (ui.curveHeight() + ui.marginTop + ui.radius - event.offsetY) / ui.curveHeight()));
                var firstControlPointIsCloser = _class_private_field_get(this, _controlPosition).distanceTo(_class_private_field_get(this, _bezier).controlPoints[0]) < _class_private_field_get(this, _controlPosition).distanceTo(_class_private_field_get(this, _bezier).controlPoints[1]);
                _class_private_field_set(this, _selectedPoint, firstControlPointIsCloser ? 0 : 1);
                _class_private_field_get(this, _bezier).controlPoints[_class_private_field_get(this, _selectedPoint)] = _class_private_field_get(this, _controlPosition);
                _class_private_field_get(this, _onBezierChange).call(this, _class_private_field_get(this, _bezier));
                event.consume(true);
                return true;
            }
        },
        {
            key: "updateControlPosition",
            value: function updateControlPosition(mouseX, mouseY) {
                if (_class_private_field_get(this, _mouseDownPosition) === undefined || _class_private_field_get(this, _controlPosition) === undefined || _class_private_field_get(this, _selectedPoint) === undefined) {
                    return;
                }
                var deltaX = (mouseX - _class_private_field_get(this, _mouseDownPosition).x) / _class_private_field_get(this, _curveUI).curveWidth();
                var deltaY = (mouseY - _class_private_field_get(this, _mouseDownPosition).y) / _class_private_field_get(this, _curveUI).curveHeight();
                var newPosition = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp(_class_private_field_get(this, _controlPosition).x + deltaX, 0, 1), _class_private_field_get(this, _controlPosition).y - deltaY);
                _class_private_field_get(this, _bezier).controlPoints[_class_private_field_get(this, _selectedPoint)] = newPosition;
            }
        },
        {
            key: "dragMove",
            value: function dragMove(event) {
                this.updateControlPosition(event.x, event.y);
                _class_private_field_get(this, _onBezierChange).call(this, _class_private_field_get(this, _bezier));
            }
        },
        {
            key: "dragEnd",
            value: function dragEnd(event) {
                this.updateControlPosition(event.x, event.y);
                _class_private_field_get(this, _onBezierChange).call(this, _class_private_field_get(this, _bezier));
            }
        },
        {
            key: "setBezier",
            value: function setBezier(bezier) {
                _class_private_field_set(this, _bezier, bezier);
                this.draw();
            }
        },
        {
            key: "draw",
            value: function draw() {
                _class_private_field_get(this, _curveUI).drawCurve(_class_private_field_get(this, _bezier), _class_private_field_get(this, _curve));
            }
        }
    ]);
    return BezierCurveUI;
}();
var _curveWidth = /*#__PURE__*/ new WeakSet(), _curveHeight = /*#__PURE__*/ new WeakSet(), _drawControlPoint = /*#__PURE__*/ new WeakSet();
var LinearEasingPresentation = /*#__PURE__*/ function() {
    "use strict";
    function LinearEasingPresentation(params) {
        _class_call_check(this, LinearEasingPresentation);
        _class_private_method_init(this, _curveWidth);
        _class_private_method_init(this, _curveHeight);
        _class_private_method_init(this, _drawControlPoint);
        _define_property(this, "params", void 0);
        _define_property(this, "renderedPositions", void 0);
        this.params = params;
    }
    _create_class(LinearEasingPresentation, [
        {
            key: "timingPointToPosition",
            value: function timingPointToPosition(point) {
                return {
                    x: point.input / 100 * _class_private_method_get(this, _curveWidth, curveWidth).call(this) + this.params.pointRadius,
                    y: (1 - point.output) * _class_private_method_get(this, _curveHeight, curveHeight).call(this) + this.params.pointRadius
                };
            }
        },
        {
            key: "positionToTimingPoint",
            value: function positionToTimingPoint(position) {
                return {
                    input: (position.x - this.params.pointRadius) / _class_private_method_get(this, _curveWidth, curveWidth).call(this) * 100,
                    output: 1 - (position.y - this.params.pointRadius) / _class_private_method_get(this, _curveHeight, curveHeight).call(this)
                };
            }
        },
        {
            key: "draw",
            value: function draw(linearEasingModel, svg) {
                var _this = this;
                svg.setAttribute('width', String(_class_private_method_get(this, _curveWidth, curveWidth).call(this)));
                svg.setAttribute('height', String(_class_private_method_get(this, _curveHeight, curveHeight).call(this)));
                svg.removeChildren();
                var group = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(svg, 'g');
                var positions = linearEasingModel.points().map(function(point) {
                    return _this.timingPointToPosition(point);
                });
                this.renderedPositions = positions;
                var startingPoint = positions[0];
                for(var i = 1; i < positions.length; i++){
                    var position = positions[i];
                    var line = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(group, 'path', 'bezier-path linear-path');
                    line.setAttribute('d', "M ".concat(startingPoint.x, " ").concat(startingPoint.y, " L ").concat(position.x, " ").concat(position.y));
                    line.setAttribute('data-line-index', String(i));
                    startingPoint = position;
                }
                for(var i1 = 0; i1 < positions.length; i1++){
                    var point = positions[i1];
                    _class_private_method_get(this, _drawControlPoint, drawControlPoint).call(this, group, point.x, point.y, i1);
                }
            }
        }
    ]);
    return LinearEasingPresentation;
}();
function curveWidth() {
    return this.params.width - this.params.pointRadius * 2;
}
function curveHeight() {
    return this.params.height - this.params.pointRadius * 2 - this.params.marginTop * 2;
}
function drawControlPoint(parentElement, controlX, controlY, index) {
    var circle = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(parentElement, 'circle', 'bezier-control-circle');
    circle.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.controlPoint('bezier.linear-control-circle').track({
        drag: true,
        dblclick: true
    })));
    circle.setAttribute('data-point-index', String(index));
    circle.setAttribute('cx', String(controlX));
    circle.setAttribute('cy', String(controlY));
    circle.setAttribute('r', String(this.params.pointRadius));
}
var _model = /*#__PURE__*/ new WeakMap(), _onChange = /*#__PURE__*/ new WeakMap(), _presentation = /*#__PURE__*/ new WeakMap(), _selectedPointIndex = /*#__PURE__*/ new WeakMap(), _doubleClickTimer = /*#__PURE__*/ new WeakMap(), _pointIndexForDoubleClick = /*#__PURE__*/ new WeakMap(), _mouseDownPosition1 = /*#__PURE__*/ new WeakMap(), _svg = /*#__PURE__*/ new WeakMap(), _handleLineClick = /*#__PURE__*/ new WeakSet(), _handleControlPointClick = /*#__PURE__*/ new WeakSet(), _dragStart = /*#__PURE__*/ new WeakSet(), _updatePointPosition = /*#__PURE__*/ new WeakSet(), _dragMove = /*#__PURE__*/ new WeakSet(), _dragEnd = /*#__PURE__*/ new WeakSet();
var LinearEasingUI = /*#__PURE__*/ function() {
    "use strict";
    function LinearEasingUI(param) {
        var model = param.model, container = param.container, onChange = param.onChange;
        _class_call_check(this, LinearEasingUI);
        _class_private_method_init(this, _handleLineClick);
        _class_private_method_init(this, _handleControlPointClick);
        _class_private_method_init(this, _dragStart);
        _class_private_method_init(this, _updatePointPosition);
        _class_private_method_init(this, _dragMove);
        _class_private_method_init(this, _dragEnd);
        _class_private_field_init(this, _model, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _onChange, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _presentation, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _selectedPointIndex, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _doubleClickTimer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _pointIndexForDoubleClick, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _mouseDownPosition1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _svg, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _model, model);
        _class_private_field_set(this, _onChange, onChange);
        _class_private_field_set(this, _presentation, new LinearEasingPresentation({
            width: 150,
            height: 250,
            pointRadius: 7,
            marginTop: 50
        }));
        _class_private_field_set(this, _svg, _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(container, 'svg', 'bezier-curve linear'));
        _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.installDragHandle(_class_private_field_get(this, _svg), _class_private_method_get(this, _dragStart, dragStart).bind(this), _class_private_method_get(this, _dragMove, dragMove).bind(this), _class_private_method_get(this, _dragEnd, dragEnd).bind(this), 'default');
    }
    _create_class(LinearEasingUI, [
        {
            key: "setCSSLinearEasingModel",
            value: function setCSSLinearEasingModel(model) {
                _class_private_field_set(this, _model, model);
                this.draw();
            }
        },
        {
            key: "draw",
            value: function draw() {
                _class_private_field_get(this, _presentation).draw(_class_private_field_get(this, _model), _class_private_field_get(this, _svg));
            }
        }
    ]);
    return LinearEasingUI;
}();
function handleLineClick(event, lineIndex) {
    var newPoint = _class_private_field_get(this, _presentation).positionToTimingPoint({
        x: event.offsetX,
        y: event.offsetY
    });
    _class_private_field_get(this, _model).addPoint(newPoint, lineIndex);
    _class_private_field_set(this, _selectedPointIndex, undefined);
    _class_private_field_set(this, _mouseDownPosition1, undefined);
}
function handleControlPointClick(event, pointIndex) {
    var _this = this;
    _class_private_field_set(this, _selectedPointIndex, pointIndex);
    _class_private_field_set(this, _mouseDownPosition1, {
        x: event.x,
        y: event.y
    });
    // This is a workaround to understand whether the user double clicked
    // a point or not. The reason is, we also want to handle drag interactions
    // for the point and the way we install drag handlers (starting with mousedown event)
    // doesn't allow us to register a `dblclick` handler. So, we're checking
    // whether user double clicked (or mouse downed) a point with a timer.
    // `#pointIndexForDoubleClick` holds the point clicked in a double click
    // delay time frame. We reset that point after
    // the DOUBLE_CLICK_DELAY time has passed.
    clearTimeout(_class_private_field_get(this, _doubleClickTimer));
    if (_class_private_field_get(this, _pointIndexForDoubleClick) === _class_private_field_get(this, _selectedPointIndex)) {
        _class_private_field_get(this, _model).removePoint(_class_private_field_get(this, _selectedPointIndex));
        _class_private_field_set(this, _pointIndexForDoubleClick, undefined);
        _class_private_field_set(this, _selectedPointIndex, undefined);
        _class_private_field_set(this, _mouseDownPosition1, undefined);
        return;
    }
    _class_private_field_set(this, _pointIndexForDoubleClick, _class_private_field_get(this, _selectedPointIndex));
    _class_private_field_set(this, _doubleClickTimer, window.setTimeout(function() {
        _class_private_field_set(_this, _pointIndexForDoubleClick, undefined);
    }, DOUBLE_CLICK_DELAY));
}
function dragStart(event) {
    if (!_instanceof(event.target, SVGElement)) {
        return false;
    }
    if (event.target.dataset.lineIndex !== undefined) {
        _class_private_method_get(this, _handleLineClick, handleLineClick).call(this, event, Number(event.target.dataset.lineIndex));
        event.consume(true);
        return true;
    }
    if (event.target.dataset.pointIndex !== undefined) {
        _class_private_method_get(this, _handleControlPointClick, handleControlPointClick).call(this, event, Number(event.target.dataset.pointIndex));
        event.consume(true);
        return true;
    }
    return false;
}
function updatePointPosition(mouseX, mouseY) {
    var _class_private_field_get_renderedPositions;
    if (_class_private_field_get(this, _selectedPointIndex) === undefined || _class_private_field_get(this, _mouseDownPosition1) === undefined) {
        return;
    }
    var controlPosition = (_class_private_field_get_renderedPositions = _class_private_field_get(this, _presentation).renderedPositions) === null || _class_private_field_get_renderedPositions === void 0 ? void 0 : _class_private_field_get_renderedPositions[_class_private_field_get(this, _selectedPointIndex)];
    if (!controlPosition) {
        return;
    }
    var deltaX = mouseX - _class_private_field_get(this, _mouseDownPosition1).x;
    var deltaY = mouseY - _class_private_field_get(this, _mouseDownPosition1).y;
    _class_private_field_set(this, _mouseDownPosition1, {
        x: mouseX,
        y: mouseY
    });
    var newPoint = {
        x: controlPosition.x + deltaX,
        y: controlPosition.y + deltaY
    };
    _class_private_field_get(this, _model).setPoint(_class_private_field_get(this, _selectedPointIndex), _class_private_field_get(this, _presentation).positionToTimingPoint(newPoint));
}
function dragMove(event) {
    _class_private_method_get(this, _updatePointPosition, updatePointPosition).call(this, event.x, event.y);
    _class_private_field_get(this, _onChange).call(this, _class_private_field_get(this, _model));
}
function dragEnd(event) {
    _class_private_method_get(this, _updatePointPosition, updatePointPosition).call(this, event.x, event.y);
    _class_private_field_get(this, _onChange).call(this, _class_private_field_get(this, _model));
}
var _linearEasingPresentation = /*#__PURE__*/ new WeakMap(), _bezierPresentation = /*#__PURE__*/ new WeakMap();
var PresetUI = /*#__PURE__*/ function() {
    "use strict";
    function PresetUI() {
        _class_call_check(this, PresetUI);
        _class_private_field_init(this, _linearEasingPresentation, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _bezierPresentation, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _linearEasingPresentation, new LinearEasingPresentation({
            width: 40,
            height: 40,
            marginTop: 0,
            pointRadius: 2
        }));
        _class_private_field_set(this, _bezierPresentation, new _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__.BezierUI({
            width: 40,
            height: 40,
            marginTop: 0,
            controlPointRadius: 2,
            shouldDrawLine: false
        }));
    }
    _create_class(PresetUI, [
        {
            key: "draw",
            value: function draw(model, svg) {
                if (_instanceof(model, _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel)) {
                    _class_private_field_get(this, _linearEasingPresentation).draw(model, svg);
                } else if (_instanceof(model, _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier)) {
                    _class_private_field_get(this, _bezierPresentation).drawCurve(model, svg);
                }
            }
        }
    ]);
    return PresetUI;
}();
var _container = /*#__PURE__*/ new WeakMap(), _bezierContainer = /*#__PURE__*/ new WeakMap(), _linearEasingContainer = /*#__PURE__*/ new WeakMap(), _model1 = /*#__PURE__*/ new WeakMap(), _onChange1 = /*#__PURE__*/ new WeakMap(), _bezierCurveUI = /*#__PURE__*/ new WeakMap(), _linearEasingUI = /*#__PURE__*/ new WeakMap();
var AnimationTimingUI = /*#__PURE__*/ function() {
    "use strict";
    function AnimationTimingUI(param) {
        var model = param.model, onChange = param.onChange;
        _class_call_check(this, AnimationTimingUI);
        _class_private_field_init(this, _container, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _bezierContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _linearEasingContainer, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _model1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _onChange1, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _bezierCurveUI, {
            writable: true,
            value: void 0
        });
        _class_private_field_init(this, _linearEasingUI, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _container, document.createElement('div'));
        _class_private_field_get(this, _container).className = 'animation-timing-ui';
        _class_private_field_get(this, _container).style.width = '150px';
        _class_private_field_get(this, _container).style.height = '250px';
        _class_private_field_set(this, _bezierContainer, document.createElement('div'));
        _class_private_field_get(this, _bezierContainer).classList.add('bezier-ui-container');
        _class_private_field_set(this, _linearEasingContainer, document.createElement('div'));
        _class_private_field_get(this, _linearEasingContainer).classList.add('linear-easing-ui-container');
        _class_private_field_get(this, _container).appendChild(_class_private_field_get(this, _bezierContainer));
        _class_private_field_get(this, _container).appendChild(_class_private_field_get(this, _linearEasingContainer));
        _class_private_field_set(this, _model1, model);
        _class_private_field_set(this, _onChange1, onChange);
        if (_instanceof(_class_private_field_get(this, _model1), _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier)) {
            _class_private_field_set(this, _bezierCurveUI, new BezierCurveUI({
                bezier: _class_private_field_get(this, _model1),
                container: _class_private_field_get(this, _bezierContainer),
                onBezierChange: _class_private_field_get(this, _onChange1)
            }));
        } else if (_instanceof(_class_private_field_get(this, _model1), _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel)) {
            _class_private_field_set(this, _linearEasingUI, new LinearEasingUI({
                model: _class_private_field_get(this, _model1),
                container: _class_private_field_get(this, _linearEasingContainer),
                onChange: _class_private_field_get(this, _onChange1)
            }));
        }
    }
    _create_class(AnimationTimingUI, [
        {
            key: "element",
            value: function element() {
                return _class_private_field_get(this, _container);
            }
        },
        {
            key: "setModel",
            value: function setModel(model) {
                _class_private_field_set(this, _model1, model);
                if (_instanceof(_class_private_field_get(this, _model1), _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier)) {
                    if (_class_private_field_get(this, _bezierCurveUI)) {
                        _class_private_field_get(this, _bezierCurveUI).setBezier(_class_private_field_get(this, _model1));
                    } else {
                        _class_private_field_set(this, _bezierCurveUI, new BezierCurveUI({
                            bezier: _class_private_field_get(this, _model1),
                            container: _class_private_field_get(this, _bezierContainer),
                            onBezierChange: _class_private_field_get(this, _onChange1)
                        }));
                    }
                } else if (_instanceof(_class_private_field_get(this, _model1), _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel)) {
                    if (_class_private_field_get(this, _linearEasingUI)) {
                        _class_private_field_get(this, _linearEasingUI).setCSSLinearEasingModel(_class_private_field_get(this, _model1));
                    } else {
                        _class_private_field_set(this, _linearEasingUI, new LinearEasingUI({
                            model: _class_private_field_get(this, _model1),
                            container: _class_private_field_get(this, _linearEasingContainer),
                            onChange: _class_private_field_get(this, _onChange1)
                        }));
                    }
                }
                this.draw();
            }
        },
        {
            key: "draw",
            value: function draw() {
                _class_private_field_get(this, _linearEasingContainer).classList.toggle('hidden', !_instanceof(_class_private_field_get(this, _model1), _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel));
                _class_private_field_get(this, _bezierContainer).classList.toggle('hidden', !_instanceof(_class_private_field_get(this, _model1), _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier));
                if (_class_private_field_get(this, _bezierCurveUI)) {
                    _class_private_field_get(this, _bezierCurveUI).draw();
                }
                if (_class_private_field_get(this, _linearEasingUI)) {
                    _class_private_field_get(this, _linearEasingUI).draw();
                }
            }
        }
    ]);
    return AnimationTimingUI;
} //# sourceMappingURL=AnimationTimingUI.js.map
();


}),
"./ui/legacy/components/inline_editor/BezierUI.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  BezierUI: function() { return BezierUI; },
  Height: function() { return Height; }
});
/* harmony import */var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}


var BezierUI = /*#__PURE__*/ function() {
    "use strict";
    function BezierUI(param) {
        var width = param.width, height = param.height, marginTop = param.marginTop, controlPointRadius = param.controlPointRadius, shouldDrawLine = param.shouldDrawLine;
        _class_call_check(this, BezierUI);
        _define_property(this, "width", void 0);
        _define_property(this, "height", void 0);
        _define_property(this, "marginTop", void 0);
        _define_property(this, "radius", void 0);
        _define_property(this, "shouldDrawLine", void 0);
        this.width = width;
        this.height = height;
        this.marginTop = marginTop;
        this.radius = controlPointRadius;
        this.shouldDrawLine = shouldDrawLine;
    }
    _create_class(BezierUI, [
        {
            key: "curveWidth",
            value: function curveWidth() {
                return this.width - this.radius * 2;
            }
        },
        {
            key: "curveHeight",
            value: function curveHeight() {
                return this.height - this.radius * 2 - this.marginTop * 2;
            }
        },
        {
            key: "drawLine",
            value: function drawLine(parentElement, className, x1, y1, x2, y2) {
                var line = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'line', className);
                line.setAttribute('x1', String(x1 + this.radius));
                line.setAttribute('y1', String(y1 + this.radius + this.marginTop));
                line.setAttribute('x2', String(x2 + this.radius));
                line.setAttribute('y2', String(y2 + this.radius + this.marginTop));
            }
        },
        {
            key: "drawControlPoints",
            value: function drawControlPoints(parentElement, startX, startY, controlX, controlY) {
                this.drawLine(parentElement, 'bezier-control-line', startX, startY, controlX, controlY);
                var circle = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'circle', 'bezier-control-circle');
                circle.setAttribute('jslog', "".concat(_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__.controlPoint('bezier.control-circle').track({
                    drag: true
                })));
                circle.setAttribute('cx', String(controlX + this.radius));
                circle.setAttribute('cy', String(controlY + this.radius + this.marginTop));
                circle.setAttribute('r', String(this.radius));
            }
        },
        {
            key: "drawCurve",
            value: function drawCurve(bezier, svg) {
                if (!bezier) {
                    return;
                }
                var width = this.curveWidth();
                var height = this.curveHeight();
                svg.setAttribute('width', String(this.width));
                svg.setAttribute('height', String(this.height));
                svg.removeChildren();
                var group = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(svg, 'g');
                if (this.shouldDrawLine) {
                    this.drawLine(group, 'linear-line', 0, height, width, 0);
                }
                var curve = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(group, 'path', 'bezier-path');
                var curvePoints = [
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[0].x * width + this.radius, (1 - bezier.controlPoints[0].y) * height + this.radius + this.marginTop),
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[1].x * width + this.radius, (1 - bezier.controlPoints[1].y) * height + this.radius + this.marginTop),
                    new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(width + this.radius, this.marginTop + this.radius)
                ];
                curve.setAttribute('d', 'M' + this.radius + ',' + (height + this.radius + this.marginTop) + ' C' + curvePoints.join(' '));
                this.drawControlPoints(group, 0, height, bezier.controlPoints[0].x * width, (1 - bezier.controlPoints[0].y) * height);
                this.drawControlPoints(group, width, 0, bezier.controlPoints[1].x * width, (1 - bezier.controlPoints[1].y) * height);
            }
        }
    ], [
        {
            key: "drawVelocityChart",
            value: function drawVelocityChart(bezier, path, width) {
                var height = Height;
                var pathBuilder = [
                    'M',
                    0,
                    height
                ];
                /** @const */ var sampleSize = 1 / 40;
                var prev = bezier.evaluateAt(0);
                for(var t = sampleSize; t < 1 + sampleSize; t += sampleSize){
                    var current = bezier.evaluateAt(t);
                    var slope = (current.y - prev.y) / (current.x - prev.x);
                    var weightedX = prev.x * (1 - t) + current.x * t;
                    slope = Math.tanh(slope / 1.5); // Normalise slope
                    pathBuilder = pathBuilder.concat([
                        'L',
                        (weightedX * width).toFixed(2),
                        (height - slope * height).toFixed(2)
                    ]);
                    prev = current;
                }
                pathBuilder = pathBuilder.concat([
                    'L',
                    width.toFixed(2),
                    height,
                    'Z'
                ]);
                path.setAttribute('d', pathBuilder.join(' '));
            }
        }
    ]);
    return BezierUI;
}();
var Height = 26; //# sourceMappingURL=BezierUI.js.map


}),

}]);