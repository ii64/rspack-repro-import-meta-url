"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_ui_legacy_components_inline_editor_AnimationTimingUI_ts"],{

/***/ "./src/ui/legacy/components/inline_editor/AnimationTimingUI.ts":
/*!*********************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/AnimationTimingUI.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationTimingUI: () => (/* binding */ AnimationTimingUI),
/* harmony export */   PresetUI: () => (/* binding */ PresetUI)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./src/ui/legacy/components/inline_editor/BezierUI.ts");
/* harmony import */ var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./src/ui/legacy/components/inline_editor/CSSLinearEasingModel.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _BezierCurveUI_curveUI, _BezierCurveUI_bezier, _BezierCurveUI_curve, _BezierCurveUI_mouseDownPosition, _BezierCurveUI_controlPosition, _BezierCurveUI_selectedPoint, _BezierCurveUI_onBezierChange, _LinearEasingPresentation_instances, _LinearEasingPresentation_curveWidth, _LinearEasingPresentation_curveHeight, _LinearEasingPresentation_drawControlPoint, _LinearEasingUI_instances, _LinearEasingUI_model, _LinearEasingUI_onChange, _LinearEasingUI_presentation, _LinearEasingUI_selectedPointIndex, _LinearEasingUI_doubleClickTimer, _LinearEasingUI_pointIndexForDoubleClick, _LinearEasingUI_mouseDownPosition, _LinearEasingUI_svg, _LinearEasingUI_handleLineClick, _LinearEasingUI_handleControlPointClick, _LinearEasingUI_dragStart, _LinearEasingUI_updatePointPosition, _LinearEasingUI_dragMove, _LinearEasingUI_dragEnd, _PresetUI_linearEasingPresentation, _PresetUI_bezierPresentation, _AnimationTimingUI_container, _AnimationTimingUI_bezierContainer, _AnimationTimingUI_linearEasingContainer, _AnimationTimingUI_model, _AnimationTimingUI_onChange, _AnimationTimingUI_bezierCurveUI, _AnimationTimingUI_linearEasingUI;





const DOUBLE_CLICK_DELAY = 500;
class BezierCurveUI {
    constructor({ bezier, container, onBezierChange }) {
        _BezierCurveUI_curveUI.set(this, void 0);
        _BezierCurveUI_bezier.set(this, void 0);
        _BezierCurveUI_curve.set(this, void 0);
        _BezierCurveUI_mouseDownPosition.set(this, void 0);
        _BezierCurveUI_controlPosition.set(this, void 0);
        _BezierCurveUI_selectedPoint.set(this, void 0);
        _BezierCurveUI_onBezierChange.set(this, void 0);
        __classPrivateFieldSet(this, _BezierCurveUI_bezier, bezier, "f");
        __classPrivateFieldSet(this, _BezierCurveUI_curveUI, new _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__.BezierUI({
            width: 150,
            height: 250,
            marginTop: 50,
            controlPointRadius: 7,
            shouldDrawLine: true,
        }), "f");
        __classPrivateFieldSet(this, _BezierCurveUI_curve, _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(container, 'svg', 'bezier-curve'), "f");
        __classPrivateFieldSet(this, _BezierCurveUI_onBezierChange, onBezierChange, "f");
        _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.installDragHandle(__classPrivateFieldGet(this, _BezierCurveUI_curve, "f"), this.dragStart.bind(this), this.dragMove.bind(this), this.dragEnd.bind(this), 'default');
    }
    dragStart(event) {
        __classPrivateFieldSet(this, _BezierCurveUI_mouseDownPosition, new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(event.x, event.y), "f");
        const ui = __classPrivateFieldGet(this, _BezierCurveUI_curveUI, "f");
        __classPrivateFieldSet(this, _BezierCurveUI_controlPosition, new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp((event.offsetX - ui.radius) / ui.curveWidth(), 0, 1), (ui.curveHeight() + ui.marginTop + ui.radius - event.offsetY) / ui.curveHeight()), "f");
        const firstControlPointIsCloser = __classPrivateFieldGet(this, _BezierCurveUI_controlPosition, "f").distanceTo(__classPrivateFieldGet(this, _BezierCurveUI_bezier, "f").controlPoints[0]) <
            __classPrivateFieldGet(this, _BezierCurveUI_controlPosition, "f").distanceTo(__classPrivateFieldGet(this, _BezierCurveUI_bezier, "f").controlPoints[1]);
        __classPrivateFieldSet(this, _BezierCurveUI_selectedPoint, firstControlPointIsCloser ? 0 : 1, "f");
        __classPrivateFieldGet(this, _BezierCurveUI_bezier, "f").controlPoints[__classPrivateFieldGet(this, _BezierCurveUI_selectedPoint, "f")] = __classPrivateFieldGet(this, _BezierCurveUI_controlPosition, "f");
        __classPrivateFieldGet(this, _BezierCurveUI_onBezierChange, "f").call(this, __classPrivateFieldGet(this, _BezierCurveUI_bezier, "f"));
        event.consume(true);
        return true;
    }
    updateControlPosition(mouseX, mouseY) {
        if (__classPrivateFieldGet(this, _BezierCurveUI_mouseDownPosition, "f") === undefined || __classPrivateFieldGet(this, _BezierCurveUI_controlPosition, "f") === undefined ||
            __classPrivateFieldGet(this, _BezierCurveUI_selectedPoint, "f") === undefined) {
            return;
        }
        const deltaX = (mouseX - __classPrivateFieldGet(this, _BezierCurveUI_mouseDownPosition, "f").x) / __classPrivateFieldGet(this, _BezierCurveUI_curveUI, "f").curveWidth();
        const deltaY = (mouseY - __classPrivateFieldGet(this, _BezierCurveUI_mouseDownPosition, "f").y) / __classPrivateFieldGet(this, _BezierCurveUI_curveUI, "f").curveHeight();
        const newPosition = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp(__classPrivateFieldGet(this, _BezierCurveUI_controlPosition, "f").x + deltaX, 0, 1), __classPrivateFieldGet(this, _BezierCurveUI_controlPosition, "f").y - deltaY);
        __classPrivateFieldGet(this, _BezierCurveUI_bezier, "f").controlPoints[__classPrivateFieldGet(this, _BezierCurveUI_selectedPoint, "f")] = newPosition;
    }
    dragMove(event) {
        this.updateControlPosition(event.x, event.y);
        __classPrivateFieldGet(this, _BezierCurveUI_onBezierChange, "f").call(this, __classPrivateFieldGet(this, _BezierCurveUI_bezier, "f"));
    }
    dragEnd(event) {
        this.updateControlPosition(event.x, event.y);
        __classPrivateFieldGet(this, _BezierCurveUI_onBezierChange, "f").call(this, __classPrivateFieldGet(this, _BezierCurveUI_bezier, "f"));
    }
    setBezier(bezier) {
        __classPrivateFieldSet(this, _BezierCurveUI_bezier, bezier, "f");
        this.draw();
    }
    draw() {
        __classPrivateFieldGet(this, _BezierCurveUI_curveUI, "f").drawCurve(__classPrivateFieldGet(this, _BezierCurveUI_bezier, "f"), __classPrivateFieldGet(this, _BezierCurveUI_curve, "f"));
    }
}
_BezierCurveUI_curveUI = new WeakMap(), _BezierCurveUI_bezier = new WeakMap(), _BezierCurveUI_curve = new WeakMap(), _BezierCurveUI_mouseDownPosition = new WeakMap(), _BezierCurveUI_controlPosition = new WeakMap(), _BezierCurveUI_selectedPoint = new WeakMap(), _BezierCurveUI_onBezierChange = new WeakMap();
class LinearEasingPresentation {
    constructor(params) {
        _LinearEasingPresentation_instances.add(this);
        Object.defineProperty(this, "params", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "renderedPositions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.params = params;
    }
    timingPointToPosition(point) {
        return {
            x: (point.input / 100) * __classPrivateFieldGet(this, _LinearEasingPresentation_instances, "m", _LinearEasingPresentation_curveWidth).call(this) + this.params.pointRadius,
            y: (1 - point.output) * __classPrivateFieldGet(this, _LinearEasingPresentation_instances, "m", _LinearEasingPresentation_curveHeight).call(this) + this.params.pointRadius,
        };
    }
    positionToTimingPoint(position) {
        return {
            input: ((position.x - this.params.pointRadius) / __classPrivateFieldGet(this, _LinearEasingPresentation_instances, "m", _LinearEasingPresentation_curveWidth).call(this)) * 100,
            output: 1 - (position.y - this.params.pointRadius) / __classPrivateFieldGet(this, _LinearEasingPresentation_instances, "m", _LinearEasingPresentation_curveHeight).call(this),
        };
    }
    draw(linearEasingModel, svg) {
        svg.setAttribute('width', String(__classPrivateFieldGet(this, _LinearEasingPresentation_instances, "m", _LinearEasingPresentation_curveWidth).call(this)));
        svg.setAttribute('height', String(__classPrivateFieldGet(this, _LinearEasingPresentation_instances, "m", _LinearEasingPresentation_curveHeight).call(this)));
        svg.removeChildren();
        const group = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(svg, 'g');
        const positions = linearEasingModel.points().map(point => this.timingPointToPosition(point));
        this.renderedPositions = positions;
        let startingPoint = positions[0];
        for (let i = 1; i < positions.length; i++) {
            const position = positions[i];
            const line = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(group, 'path', 'bezier-path linear-path');
            line.setAttribute('d', `M ${startingPoint.x} ${startingPoint.y} L ${position.x} ${position.y}`);
            line.setAttribute('data-line-index', String(i));
            startingPoint = position;
        }
        for (let i = 0; i < positions.length; i++) {
            const point = positions[i];
            __classPrivateFieldGet(this, _LinearEasingPresentation_instances, "m", _LinearEasingPresentation_drawControlPoint).call(this, group, point.x, point.y, i);
        }
    }
}
_LinearEasingPresentation_instances = new WeakSet(), _LinearEasingPresentation_curveWidth = function _LinearEasingPresentation_curveWidth() {
    return this.params.width - this.params.pointRadius * 2;
}, _LinearEasingPresentation_curveHeight = function _LinearEasingPresentation_curveHeight() {
    return this.params.height - this.params.pointRadius * 2 - this.params.marginTop * 2;
}, _LinearEasingPresentation_drawControlPoint = function _LinearEasingPresentation_drawControlPoint(parentElement, controlX, controlY, index) {
    const circle = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(parentElement, 'circle', 'bezier-control-circle');
    circle.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.controlPoint('bezier.linear-control-circle').track({ drag: true, dblclick: true })}`);
    circle.setAttribute('data-point-index', String(index));
    circle.setAttribute('cx', String(controlX));
    circle.setAttribute('cy', String(controlY));
    circle.setAttribute('r', String(this.params.pointRadius));
};
class LinearEasingUI {
    constructor({ model, container, onChange, }) {
        _LinearEasingUI_instances.add(this);
        _LinearEasingUI_model.set(this, void 0);
        _LinearEasingUI_onChange.set(this, void 0);
        _LinearEasingUI_presentation.set(this, void 0);
        _LinearEasingUI_selectedPointIndex.set(this, void 0);
        _LinearEasingUI_doubleClickTimer.set(this, void 0);
        _LinearEasingUI_pointIndexForDoubleClick.set(this, void 0);
        _LinearEasingUI_mouseDownPosition.set(this, void 0);
        _LinearEasingUI_svg.set(this, void 0);
        __classPrivateFieldSet(this, _LinearEasingUI_model, model, "f");
        __classPrivateFieldSet(this, _LinearEasingUI_onChange, onChange, "f");
        __classPrivateFieldSet(this, _LinearEasingUI_presentation, new LinearEasingPresentation({
            width: 150,
            height: 250,
            pointRadius: 7,
            marginTop: 50,
        }), "f");
        __classPrivateFieldSet(this, _LinearEasingUI_svg, _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(container, 'svg', 'bezier-curve linear'), "f");
        _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.installDragHandle(__classPrivateFieldGet(this, _LinearEasingUI_svg, "f"), __classPrivateFieldGet(this, _LinearEasingUI_instances, "m", _LinearEasingUI_dragStart).bind(this), __classPrivateFieldGet(this, _LinearEasingUI_instances, "m", _LinearEasingUI_dragMove).bind(this), __classPrivateFieldGet(this, _LinearEasingUI_instances, "m", _LinearEasingUI_dragEnd).bind(this), 'default');
    }
    setCSSLinearEasingModel(model) {
        __classPrivateFieldSet(this, _LinearEasingUI_model, model, "f");
        this.draw();
    }
    draw() {
        __classPrivateFieldGet(this, _LinearEasingUI_presentation, "f").draw(__classPrivateFieldGet(this, _LinearEasingUI_model, "f"), __classPrivateFieldGet(this, _LinearEasingUI_svg, "f"));
    }
}
_LinearEasingUI_model = new WeakMap(), _LinearEasingUI_onChange = new WeakMap(), _LinearEasingUI_presentation = new WeakMap(), _LinearEasingUI_selectedPointIndex = new WeakMap(), _LinearEasingUI_doubleClickTimer = new WeakMap(), _LinearEasingUI_pointIndexForDoubleClick = new WeakMap(), _LinearEasingUI_mouseDownPosition = new WeakMap(), _LinearEasingUI_svg = new WeakMap(), _LinearEasingUI_instances = new WeakSet(), _LinearEasingUI_handleLineClick = function _LinearEasingUI_handleLineClick(event, lineIndex) {
    const newPoint = __classPrivateFieldGet(this, _LinearEasingUI_presentation, "f").positionToTimingPoint({ x: event.offsetX, y: event.offsetY });
    __classPrivateFieldGet(this, _LinearEasingUI_model, "f").addPoint(newPoint, lineIndex);
    __classPrivateFieldSet(this, _LinearEasingUI_selectedPointIndex, undefined, "f");
    __classPrivateFieldSet(this, _LinearEasingUI_mouseDownPosition, undefined, "f");
}, _LinearEasingUI_handleControlPointClick = function _LinearEasingUI_handleControlPointClick(event, pointIndex) {
    __classPrivateFieldSet(this, _LinearEasingUI_selectedPointIndex, pointIndex, "f");
    __classPrivateFieldSet(this, _LinearEasingUI_mouseDownPosition, { x: event.x, y: event.y }, "f");
    // This is a workaround to understand whether the user double clicked
    // a point or not. The reason is, we also want to handle drag interactions
    // for the point and the way we install drag handlers (starting with mousedown event)
    // doesn't allow us to register a `dblclick` handler. So, we're checking
    // whether user double clicked (or mouse downed) a point with a timer.
    // `#pointIndexForDoubleClick` holds the point clicked in a double click
    // delay time frame. We reset that point after
    // the DOUBLE_CLICK_DELAY time has passed.
    clearTimeout(__classPrivateFieldGet(this, _LinearEasingUI_doubleClickTimer, "f"));
    if (__classPrivateFieldGet(this, _LinearEasingUI_pointIndexForDoubleClick, "f") === __classPrivateFieldGet(this, _LinearEasingUI_selectedPointIndex, "f")) {
        __classPrivateFieldGet(this, _LinearEasingUI_model, "f").removePoint(__classPrivateFieldGet(this, _LinearEasingUI_selectedPointIndex, "f"));
        __classPrivateFieldSet(this, _LinearEasingUI_pointIndexForDoubleClick, undefined, "f");
        __classPrivateFieldSet(this, _LinearEasingUI_selectedPointIndex, undefined, "f");
        __classPrivateFieldSet(this, _LinearEasingUI_mouseDownPosition, undefined, "f");
        return;
    }
    __classPrivateFieldSet(this, _LinearEasingUI_pointIndexForDoubleClick, __classPrivateFieldGet(this, _LinearEasingUI_selectedPointIndex, "f"), "f");
    __classPrivateFieldSet(this, _LinearEasingUI_doubleClickTimer, window.setTimeout(() => {
        __classPrivateFieldSet(this, _LinearEasingUI_pointIndexForDoubleClick, undefined, "f");
    }, DOUBLE_CLICK_DELAY), "f");
}, _LinearEasingUI_dragStart = function _LinearEasingUI_dragStart(event) {
    if (!(event.target instanceof SVGElement)) {
        return false;
    }
    if (event.target.dataset.lineIndex !== undefined) {
        __classPrivateFieldGet(this, _LinearEasingUI_instances, "m", _LinearEasingUI_handleLineClick).call(this, event, Number(event.target.dataset.lineIndex));
        event.consume(true);
        return true;
    }
    if (event.target.dataset.pointIndex !== undefined) {
        __classPrivateFieldGet(this, _LinearEasingUI_instances, "m", _LinearEasingUI_handleControlPointClick).call(this, event, Number(event.target.dataset.pointIndex));
        event.consume(true);
        return true;
    }
    return false;
}, _LinearEasingUI_updatePointPosition = function _LinearEasingUI_updatePointPosition(mouseX, mouseY) {
    if (__classPrivateFieldGet(this, _LinearEasingUI_selectedPointIndex, "f") === undefined || __classPrivateFieldGet(this, _LinearEasingUI_mouseDownPosition, "f") === undefined) {
        return;
    }
    const controlPosition = __classPrivateFieldGet(this, _LinearEasingUI_presentation, "f").renderedPositions?.[__classPrivateFieldGet(this, _LinearEasingUI_selectedPointIndex, "f")];
    if (!controlPosition) {
        return;
    }
    const deltaX = mouseX - __classPrivateFieldGet(this, _LinearEasingUI_mouseDownPosition, "f").x;
    const deltaY = mouseY - __classPrivateFieldGet(this, _LinearEasingUI_mouseDownPosition, "f").y;
    __classPrivateFieldSet(this, _LinearEasingUI_mouseDownPosition, {
        x: mouseX,
        y: mouseY,
    }, "f");
    const newPoint = {
        x: controlPosition.x + deltaX,
        y: controlPosition.y + deltaY,
    };
    __classPrivateFieldGet(this, _LinearEasingUI_model, "f").setPoint(__classPrivateFieldGet(this, _LinearEasingUI_selectedPointIndex, "f"), __classPrivateFieldGet(this, _LinearEasingUI_presentation, "f").positionToTimingPoint(newPoint));
}, _LinearEasingUI_dragMove = function _LinearEasingUI_dragMove(event) {
    __classPrivateFieldGet(this, _LinearEasingUI_instances, "m", _LinearEasingUI_updatePointPosition).call(this, event.x, event.y);
    __classPrivateFieldGet(this, _LinearEasingUI_onChange, "f").call(this, __classPrivateFieldGet(this, _LinearEasingUI_model, "f"));
}, _LinearEasingUI_dragEnd = function _LinearEasingUI_dragEnd(event) {
    __classPrivateFieldGet(this, _LinearEasingUI_instances, "m", _LinearEasingUI_updatePointPosition).call(this, event.x, event.y);
    __classPrivateFieldGet(this, _LinearEasingUI_onChange, "f").call(this, __classPrivateFieldGet(this, _LinearEasingUI_model, "f"));
};
class PresetUI {
    constructor() {
        _PresetUI_linearEasingPresentation.set(this, void 0);
        _PresetUI_bezierPresentation.set(this, void 0);
        __classPrivateFieldSet(this, _PresetUI_linearEasingPresentation, new LinearEasingPresentation({
            width: 40,
            height: 40,
            marginTop: 0,
            pointRadius: 2,
        }), "f");
        __classPrivateFieldSet(this, _PresetUI_bezierPresentation, new _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__.BezierUI({
            width: 40,
            height: 40,
            marginTop: 0,
            controlPointRadius: 2,
            shouldDrawLine: false,
        }), "f");
    }
    draw(model, svg) {
        if (model instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel) {
            __classPrivateFieldGet(this, _PresetUI_linearEasingPresentation, "f").draw(model, svg);
        }
        else if (model instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier) {
            __classPrivateFieldGet(this, _PresetUI_bezierPresentation, "f").drawCurve(model, svg);
        }
    }
}
_PresetUI_linearEasingPresentation = new WeakMap(), _PresetUI_bezierPresentation = new WeakMap();
class AnimationTimingUI {
    constructor({ model, onChange }) {
        _AnimationTimingUI_container.set(this, void 0);
        _AnimationTimingUI_bezierContainer.set(this, void 0);
        _AnimationTimingUI_linearEasingContainer.set(this, void 0);
        _AnimationTimingUI_model.set(this, void 0);
        _AnimationTimingUI_onChange.set(this, void 0);
        _AnimationTimingUI_bezierCurveUI.set(this, void 0);
        _AnimationTimingUI_linearEasingUI.set(this, void 0);
        __classPrivateFieldSet(this, _AnimationTimingUI_container, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _AnimationTimingUI_container, "f").className = 'animation-timing-ui';
        __classPrivateFieldGet(this, _AnimationTimingUI_container, "f").style.width = '150px';
        __classPrivateFieldGet(this, _AnimationTimingUI_container, "f").style.height = '250px';
        __classPrivateFieldSet(this, _AnimationTimingUI_bezierContainer, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _AnimationTimingUI_bezierContainer, "f").classList.add('bezier-ui-container');
        __classPrivateFieldSet(this, _AnimationTimingUI_linearEasingContainer, document.createElement('div'), "f");
        __classPrivateFieldGet(this, _AnimationTimingUI_linearEasingContainer, "f").classList.add('linear-easing-ui-container');
        __classPrivateFieldGet(this, _AnimationTimingUI_container, "f").appendChild(__classPrivateFieldGet(this, _AnimationTimingUI_bezierContainer, "f"));
        __classPrivateFieldGet(this, _AnimationTimingUI_container, "f").appendChild(__classPrivateFieldGet(this, _AnimationTimingUI_linearEasingContainer, "f"));
        __classPrivateFieldSet(this, _AnimationTimingUI_model, model, "f");
        __classPrivateFieldSet(this, _AnimationTimingUI_onChange, onChange, "f");
        if (__classPrivateFieldGet(this, _AnimationTimingUI_model, "f") instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier) {
            __classPrivateFieldSet(this, _AnimationTimingUI_bezierCurveUI, new BezierCurveUI({ bezier: __classPrivateFieldGet(this, _AnimationTimingUI_model, "f"), container: __classPrivateFieldGet(this, _AnimationTimingUI_bezierContainer, "f"), onBezierChange: __classPrivateFieldGet(this, _AnimationTimingUI_onChange, "f") }), "f");
        }
        else if (__classPrivateFieldGet(this, _AnimationTimingUI_model, "f") instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel) {
            __classPrivateFieldSet(this, _AnimationTimingUI_linearEasingUI, new LinearEasingUI({
                model: __classPrivateFieldGet(this, _AnimationTimingUI_model, "f"),
                container: __classPrivateFieldGet(this, _AnimationTimingUI_linearEasingContainer, "f"),
                onChange: __classPrivateFieldGet(this, _AnimationTimingUI_onChange, "f"),
            }), "f");
        }
    }
    element() {
        return __classPrivateFieldGet(this, _AnimationTimingUI_container, "f");
    }
    setModel(model) {
        __classPrivateFieldSet(this, _AnimationTimingUI_model, model, "f");
        if (__classPrivateFieldGet(this, _AnimationTimingUI_model, "f") instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier) {
            if (__classPrivateFieldGet(this, _AnimationTimingUI_bezierCurveUI, "f")) {
                __classPrivateFieldGet(this, _AnimationTimingUI_bezierCurveUI, "f").setBezier(__classPrivateFieldGet(this, _AnimationTimingUI_model, "f"));
            }
            else {
                __classPrivateFieldSet(this, _AnimationTimingUI_bezierCurveUI, new BezierCurveUI({ bezier: __classPrivateFieldGet(this, _AnimationTimingUI_model, "f"), container: __classPrivateFieldGet(this, _AnimationTimingUI_bezierContainer, "f"), onBezierChange: __classPrivateFieldGet(this, _AnimationTimingUI_onChange, "f") }), "f");
            }
        }
        else if (__classPrivateFieldGet(this, _AnimationTimingUI_model, "f") instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel) {
            if (__classPrivateFieldGet(this, _AnimationTimingUI_linearEasingUI, "f")) {
                __classPrivateFieldGet(this, _AnimationTimingUI_linearEasingUI, "f").setCSSLinearEasingModel(__classPrivateFieldGet(this, _AnimationTimingUI_model, "f"));
            }
            else {
                __classPrivateFieldSet(this, _AnimationTimingUI_linearEasingUI, new LinearEasingUI({ model: __classPrivateFieldGet(this, _AnimationTimingUI_model, "f"), container: __classPrivateFieldGet(this, _AnimationTimingUI_linearEasingContainer, "f"), onChange: __classPrivateFieldGet(this, _AnimationTimingUI_onChange, "f") }), "f");
            }
        }
        this.draw();
    }
    draw() {
        __classPrivateFieldGet(this, _AnimationTimingUI_linearEasingContainer, "f").classList.toggle('hidden', !(__classPrivateFieldGet(this, _AnimationTimingUI_model, "f") instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel));
        __classPrivateFieldGet(this, _AnimationTimingUI_bezierContainer, "f").classList.toggle('hidden', !(__classPrivateFieldGet(this, _AnimationTimingUI_model, "f") instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier));
        if (__classPrivateFieldGet(this, _AnimationTimingUI_bezierCurveUI, "f")) {
            __classPrivateFieldGet(this, _AnimationTimingUI_bezierCurveUI, "f").draw();
        }
        if (__classPrivateFieldGet(this, _AnimationTimingUI_linearEasingUI, "f")) {
            __classPrivateFieldGet(this, _AnimationTimingUI_linearEasingUI, "f").draw();
        }
    }
}
_AnimationTimingUI_container = new WeakMap(), _AnimationTimingUI_bezierContainer = new WeakMap(), _AnimationTimingUI_linearEasingContainer = new WeakMap(), _AnimationTimingUI_model = new WeakMap(), _AnimationTimingUI_onChange = new WeakMap(), _AnimationTimingUI_bezierCurveUI = new WeakMap(), _AnimationTimingUI_linearEasingUI = new WeakMap();


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/BezierUI.ts":
/*!************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/BezierUI.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierUI: () => (/* binding */ BezierUI),
/* harmony export */   Height: () => (/* binding */ Height)
/* harmony export */ });
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./src/ui/legacy/legacy.ts");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class BezierUI {
    constructor({ width, height, marginTop, controlPointRadius, shouldDrawLine }) {
        Object.defineProperty(this, "width", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "height", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "marginTop", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "radius", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "shouldDrawLine", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.width = width;
        this.height = height;
        this.marginTop = marginTop;
        this.radius = controlPointRadius;
        this.shouldDrawLine = shouldDrawLine;
    }
    static drawVelocityChart(bezier, path, width) {
        const height = Height;
        let pathBuilder = ['M', 0, height];
        /** @const */ const sampleSize = 1 / 40;
        let prev = bezier.evaluateAt(0);
        for (let t = sampleSize; t < 1 + sampleSize; t += sampleSize) {
            const current = bezier.evaluateAt(t);
            let slope = (current.y - prev.y) / (current.x - prev.x);
            const weightedX = prev.x * (1 - t) + current.x * t;
            slope = Math.tanh(slope / 1.5); // Normalise slope
            pathBuilder = pathBuilder.concat(['L', (weightedX * width).toFixed(2), (height - slope * height).toFixed(2)]);
            prev = current;
        }
        pathBuilder = pathBuilder.concat(['L', width.toFixed(2), height, 'Z']);
        path.setAttribute('d', pathBuilder.join(' '));
    }
    curveWidth() {
        return this.width - this.radius * 2;
    }
    curveHeight() {
        return this.height - this.radius * 2 - this.marginTop * 2;
    }
    drawLine(parentElement, className, x1, y1, x2, y2) {
        const line = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'line', className);
        line.setAttribute('x1', String(x1 + this.radius));
        line.setAttribute('y1', String(y1 + this.radius + this.marginTop));
        line.setAttribute('x2', String(x2 + this.radius));
        line.setAttribute('y2', String(y2 + this.radius + this.marginTop));
    }
    drawControlPoints(parentElement, startX, startY, controlX, controlY) {
        this.drawLine(parentElement, 'bezier-control-line', startX, startY, controlX, controlY);
        const circle = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(parentElement, 'circle', 'bezier-control-circle');
        circle.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__.controlPoint('bezier.control-circle').track({ drag: true })}`);
        circle.setAttribute('cx', String(controlX + this.radius));
        circle.setAttribute('cy', String(controlY + this.radius + this.marginTop));
        circle.setAttribute('r', String(this.radius));
    }
    drawCurve(bezier, svg) {
        if (!bezier) {
            return;
        }
        const width = this.curveWidth();
        const height = this.curveHeight();
        svg.setAttribute('width', String(this.width));
        svg.setAttribute('height', String(this.height));
        svg.removeChildren();
        const group = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(svg, 'g');
        if (this.shouldDrawLine) {
            this.drawLine(group, 'linear-line', 0, height, width, 0);
        }
        const curve = _legacy_js__WEBPACK_IMPORTED_MODULE_1__.UIUtils.createSVGChild(group, 'path', 'bezier-path');
        const curvePoints = [
            new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[0].x * width + this.radius, (1 - bezier.controlPoints[0].y) * height + this.radius + this.marginTop),
            new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(bezier.controlPoints[1].x * width + this.radius, (1 - bezier.controlPoints[1].y) * height + this.radius + this.marginTop),
            new _legacy_js__WEBPACK_IMPORTED_MODULE_1__.Geometry.Point(width + this.radius, this.marginTop + this.radius),
        ];
        curve.setAttribute('d', 'M' + this.radius + ',' + (height + this.radius + this.marginTop) + ' C' + curvePoints.join(' '));
        this.drawControlPoints(group, 0, height, bezier.controlPoints[0].x * width, (1 - bezier.controlPoints[0].y) * height);
        this.drawControlPoints(group, width, 0, bezier.controlPoints[1].x * width, (1 - bezier.controlPoints[1].y) * height);
    }
}
const Height = 26;


/***/ }),

/***/ "./src/ui/legacy/components/inline_editor/CSSLinearEasingModel.ts":
/*!************************************************************************!*\
  !*** ./src/ui/legacy/components/inline_editor/CSSLinearEasingModel.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLinearEasingModel: () => (/* binding */ CSSLinearEasingModel)
/* harmony export */ });
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../third_party/codemirror.next/codemirror.next.js */ "./src/third_party/codemirror.next/codemirror.next.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _CSSLinearEasingModel_points;

const cssParser = _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__.css.cssLanguage.parser;
const numberFormatter = new Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
});
function findNextDefinedInputIndex(points, currentIndex) {
    for (let i = currentIndex; i < points.length; i++) {
        if (!isNaN(points[i].input)) {
            return i;
        }
    }
    return -1;
}
function consumeLinearStop(cursor, referenceText) {
    const tokens = [];
    while (cursor.type.name !== ',' && cursor.type.name !== ')') {
        const token = referenceText.substring(cursor.from, cursor.to);
        if (cursor.type.name !== 'NumberLiteral') {
            // There is something that is not a number inside the argument.
            return null;
        }
        tokens.push(token);
        cursor.next(false);
    }
    // Invalid syntax `linear(0 50% 60% 40%, 1)`.
    if (tokens.length > 3) {
        return null;
    }
    const percentages = tokens.filter(token => token.includes('%'));
    // There can't be more than 2 percentages.
    if (percentages.length > 2) {
        return null;
    }
    const numbers = tokens.filter(token => !token.includes('%'));
    // There must only be 1 number.
    if (numbers.length !== 1) {
        return null;
    }
    return {
        number: Number(numbers[0]),
        lengthA: percentages[0] ? Number(percentages[0].substring(0, percentages[0].length - 1)) : undefined,
        lengthB: percentages[1] ? Number(percentages[1].substring(0, percentages[1].length - 1)) : undefined,
    };
}
function consumeLinearFunction(text) {
    const textToParse = `*{--a: ${text}}`;
    const parsed = cssParser.parse(textToParse);
    // Take the cursor from declaration
    const cursor = parsed.cursorAt(textToParse.indexOf(':') + 1);
    // Move until the `ArgList`
    while (cursor.name !== 'ArgList' && cursor.next(true)) {
        // If the callee is not the `linear` function, return null
        if (cursor.name === 'Callee' && textToParse.substring(cursor.from, cursor.to) !== 'linear') {
            return null;
        }
    }
    if (cursor.name !== 'ArgList') {
        return null;
    }
    // We're on the `ArgList`, enter into it
    cursor.firstChild();
    const stops = [];
    while (cursor.type.name !== ')' && cursor.next(false)) {
        const linearStop = consumeLinearStop(cursor, textToParse);
        if (!linearStop) {
            // Parsing a `linearStop` was invalid; abort.
            return null;
        }
        stops.push(linearStop);
    }
    return stops;
}
const KeywordToValue = {
    'linear': 'linear(0 0%, 1 100%)',
};
class CSSLinearEasingModel {
    constructor(points) {
        _CSSLinearEasingModel_points.set(this, void 0);
        __classPrivateFieldSet(this, _CSSLinearEasingModel_points, points, "f");
    }
    // https://w3c.github.io/csswg-drafts/css-easing/#linear-easing-function-parsing
    static parse(text) {
        // Parse `linear` keyword as `linear(0 0%, 1 100%)` function.
        if (KeywordToValue[text]) {
            return CSSLinearEasingModel.parse(KeywordToValue[text]);
        }
        const stops = consumeLinearFunction(text);
        // 1. Let function be a new linear easing function.
        // 2. Let largestInput be negative infinity.
        // 3. If there are less than two items in stopList, then return failure.
        if (!stops || stops.length < 2) {
            return null;
        }
        // 4. For each stop in stopList:
        let largestInput = -Infinity;
        const points = [];
        for (let i = 0; i < stops.length; i++) {
            const stop = stops[i];
            // 4.1. Let point be a new linear easing point with its output set
            // to stop’s <number> as a number.
            const point = { input: NaN, output: stop.number };
            // 4.2. Append point to function’s points.
            points.push(point);
            // 4.3. If stop has a <linear-stop-length>, then:
            if (stop.lengthA !== undefined) {
                // 4.3.1. Set point’s input to whichever is greater:
                // stop’s <linear-stop-length>'s first <percentage> as a number,
                // or largestInput.
                point.input = Math.max(stop.lengthA, largestInput);
                // 4.3.2. Set largestInput to point’s input.
                largestInput = point.input;
                // 4.3.3. If stop’s <linear-stop-length> has a second <percentage>, then:
                if (stop.lengthB !== undefined) {
                    // 4.3.3.1. Let extraPoint be a new linear easing point with its output
                    // set to stop’s <number> as a number.
                    const extraPoint = { input: NaN, output: point.output };
                    // 4.3.3.2. Append extraPoint to function’s points.
                    points.push(extraPoint);
                    // 4.3.3.3. Set extraPoint’s input to whichever is greater:
                    // stop’s <linear-stop-length>'s second <percentage>
                    // as a number, or largestInput.
                    extraPoint.input = Math.max(stop.lengthB, largestInput);
                    // 4.3.3.4. Set largestInput to extraPoint’s input.
                    largestInput = extraPoint.input;
                }
                // 4.4. Otherwise, if stop is the first item in stopList, then:
            }
            else if (i === 0) {
                // 4.4.1. Set point’s input to 0.
                point.input = 0;
                // 4.4.2. Set largestInput to 0.
                largestInput = 0;
                // 4.5. Otherwise, if stop is the last item in stopList,
                // then set point’s input to whichever is greater: 1 or largestInput.
            }
            else if (i === stops.length - 1) {
                point.input = Math.max(100, largestInput);
            }
        }
        // 5. For runs of items in function’s points that have a null input, assign a
        // number to the input by linearly interpolating between the closest previous
        // and next points that have a non-null input.
        let upperIndex = 0;
        for (let i = 1; i < points.length; i++) {
            if (isNaN(points[i].input)) {
                if (i > upperIndex) {
                    // Since the last point's input is always defined
                    // we know that `upperIndex` cannot be `-1`.
                    upperIndex = findNextDefinedInputIndex(points, i);
                }
                points[i].input =
                    points[i - 1].input + (points[upperIndex].input - points[i - 1].input) / (upperIndex - (i - 1));
            }
        }
        return new CSSLinearEasingModel(points);
    }
    addPoint(point, index) {
        if (index !== undefined) {
            __classPrivateFieldGet(this, _CSSLinearEasingModel_points, "f").splice(index, 0, point);
            return;
        }
        __classPrivateFieldGet(this, _CSSLinearEasingModel_points, "f").push(point);
    }
    removePoint(index) {
        __classPrivateFieldGet(this, _CSSLinearEasingModel_points, "f").splice(index, 1);
    }
    setPoint(index, point) {
        __classPrivateFieldGet(this, _CSSLinearEasingModel_points, "f")[index] = point;
    }
    points() {
        return __classPrivateFieldGet(this, _CSSLinearEasingModel_points, "f");
    }
    asCSSText() {
        const args = __classPrivateFieldGet(this, _CSSLinearEasingModel_points, "f").map(point => `${numberFormatter.format(point.output)} ${numberFormatter.format(point.input)}%`)
            .join(', ');
        const text = `linear(${args})`;
        // If a keyword matches to this function, return the keyword value of it.
        for (const [keyword, value] of Object.entries(KeywordToValue)) {
            if (value === text) {
                return keyword;
            }
        }
        return text;
    }
}
_CSSLinearEasingModel_points = new WeakMap();


/***/ })

}]);