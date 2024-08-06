"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["ui_legacy_components_inline_editor_AnimationTimingUI_js"],{

/***/ "./ui/legacy/components/inline_editor/AnimationTimingUI.js":
/*!*****************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/AnimationTimingUI.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnimationTimingUI: () => (/* binding */ AnimationTimingUI),
/* harmony export */   PresetUI: () => (/* binding */ PresetUI)
/* harmony export */ });
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BezierUI.js */ "./ui/legacy/components/inline_editor/BezierUI.js");
/* harmony import */ var _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSSLinearEasingModel.js */ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





const DOUBLE_CLICK_DELAY = 500;
class BezierCurveUI {
    #curveUI;
    #bezier;
    #curve;
    #mouseDownPosition;
    #controlPosition;
    #selectedPoint;
    #onBezierChange;
    constructor({ bezier, container, onBezierChange }) {
        this.#bezier = bezier;
        this.#curveUI = new _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__.BezierUI({
            width: 150,
            height: 250,
            marginTop: 50,
            controlPointRadius: 7,
            shouldDrawLine: true,
        });
        this.#curve = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(container, 'svg', 'bezier-curve');
        this.#onBezierChange = onBezierChange;
        _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.installDragHandle(this.#curve, this.dragStart.bind(this), this.dragMove.bind(this), this.dragEnd.bind(this), 'default');
    }
    dragStart(event) {
        this.#mouseDownPosition = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(event.x, event.y);
        const ui = this.#curveUI;
        this.#controlPosition = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp((event.offsetX - ui.radius) / ui.curveWidth(), 0, 1), (ui.curveHeight() + ui.marginTop + ui.radius - event.offsetY) / ui.curveHeight());
        const firstControlPointIsCloser = this.#controlPosition.distanceTo(this.#bezier.controlPoints[0]) <
            this.#controlPosition.distanceTo(this.#bezier.controlPoints[1]);
        this.#selectedPoint = firstControlPointIsCloser ? 0 : 1;
        this.#bezier.controlPoints[this.#selectedPoint] = this.#controlPosition;
        this.#onBezierChange(this.#bezier);
        event.consume(true);
        return true;
    }
    updateControlPosition(mouseX, mouseY) {
        if (this.#mouseDownPosition === undefined || this.#controlPosition === undefined ||
            this.#selectedPoint === undefined) {
            return;
        }
        const deltaX = (mouseX - this.#mouseDownPosition.x) / this.#curveUI.curveWidth();
        const deltaY = (mouseY - this.#mouseDownPosition.y) / this.#curveUI.curveHeight();
        const newPosition = new _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Point(_core_platform_platform_js__WEBPACK_IMPORTED_MODULE_0__.NumberUtilities.clamp(this.#controlPosition.x + deltaX, 0, 1), this.#controlPosition.y - deltaY);
        this.#bezier.controlPoints[this.#selectedPoint] = newPosition;
    }
    dragMove(event) {
        this.updateControlPosition(event.x, event.y);
        this.#onBezierChange(this.#bezier);
    }
    dragEnd(event) {
        this.updateControlPosition(event.x, event.y);
        this.#onBezierChange(this.#bezier);
    }
    setBezier(bezier) {
        this.#bezier = bezier;
        this.draw();
    }
    draw() {
        this.#curveUI.drawCurve(this.#bezier, this.#curve);
    }
}
class LinearEasingPresentation {
    params;
    renderedPositions;
    constructor(params) {
        this.params = params;
    }
    #curveWidth() {
        return this.params.width - this.params.pointRadius * 2;
    }
    #curveHeight() {
        return this.params.height - this.params.pointRadius * 2 - this.params.marginTop * 2;
    }
    #drawControlPoint(parentElement, controlX, controlY, index) {
        const circle = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(parentElement, 'circle', 'bezier-control-circle');
        circle.setAttribute('jslog', `${_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_1__.controlPoint('bezier.linear-control-circle').track({ drag: true, dblclick: true })}`);
        circle.setAttribute('data-point-index', String(index));
        circle.setAttribute('cx', String(controlX));
        circle.setAttribute('cy', String(controlY));
        circle.setAttribute('r', String(this.params.pointRadius));
    }
    timingPointToPosition(point) {
        return {
            x: (point.input / 100) * this.#curveWidth() + this.params.pointRadius,
            y: (1 - point.output) * this.#curveHeight() + this.params.pointRadius,
        };
    }
    positionToTimingPoint(position) {
        return {
            input: ((position.x - this.params.pointRadius) / this.#curveWidth()) * 100,
            output: 1 - (position.y - this.params.pointRadius) / this.#curveHeight(),
        };
    }
    draw(linearEasingModel, svg) {
        svg.setAttribute('width', String(this.#curveWidth()));
        svg.setAttribute('height', String(this.#curveHeight()));
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
            this.#drawControlPoint(group, point.x, point.y, i);
        }
    }
}
class LinearEasingUI {
    #model;
    #onChange;
    #presentation;
    #selectedPointIndex;
    #doubleClickTimer;
    #pointIndexForDoubleClick;
    #mouseDownPosition;
    #svg;
    constructor({ model, container, onChange, }) {
        this.#model = model;
        this.#onChange = onChange;
        this.#presentation = new LinearEasingPresentation({
            width: 150,
            height: 250,
            pointRadius: 7,
            marginTop: 50,
        });
        this.#svg = _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createSVGChild(container, 'svg', 'bezier-curve linear');
        _legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.installDragHandle(this.#svg, this.#dragStart.bind(this), this.#dragMove.bind(this), this.#dragEnd.bind(this), 'default');
    }
    #handleLineClick(event, lineIndex) {
        const newPoint = this.#presentation.positionToTimingPoint({ x: event.offsetX, y: event.offsetY });
        this.#model.addPoint(newPoint, lineIndex);
        this.#selectedPointIndex = undefined;
        this.#mouseDownPosition = undefined;
    }
    #handleControlPointClick(event, pointIndex) {
        this.#selectedPointIndex = pointIndex;
        this.#mouseDownPosition = { x: event.x, y: event.y };
        // This is a workaround to understand whether the user double clicked
        // a point or not. The reason is, we also want to handle drag interactions
        // for the point and the way we install drag handlers (starting with mousedown event)
        // doesn't allow us to register a `dblclick` handler. So, we're checking
        // whether user double clicked (or mouse downed) a point with a timer.
        // `#pointIndexForDoubleClick` holds the point clicked in a double click
        // delay time frame. We reset that point after
        // the DOUBLE_CLICK_DELAY time has passed.
        clearTimeout(this.#doubleClickTimer);
        if (this.#pointIndexForDoubleClick === this.#selectedPointIndex) {
            this.#model.removePoint(this.#selectedPointIndex);
            this.#pointIndexForDoubleClick = undefined;
            this.#selectedPointIndex = undefined;
            this.#mouseDownPosition = undefined;
            return;
        }
        this.#pointIndexForDoubleClick = this.#selectedPointIndex;
        this.#doubleClickTimer = window.setTimeout(() => {
            this.#pointIndexForDoubleClick = undefined;
        }, DOUBLE_CLICK_DELAY);
    }
    #dragStart(event) {
        if (!(event.target instanceof SVGElement)) {
            return false;
        }
        if (event.target.dataset.lineIndex !== undefined) {
            this.#handleLineClick(event, Number(event.target.dataset.lineIndex));
            event.consume(true);
            return true;
        }
        if (event.target.dataset.pointIndex !== undefined) {
            this.#handleControlPointClick(event, Number(event.target.dataset.pointIndex));
            event.consume(true);
            return true;
        }
        return false;
    }
    #updatePointPosition(mouseX, mouseY) {
        if (this.#selectedPointIndex === undefined || this.#mouseDownPosition === undefined) {
            return;
        }
        const controlPosition = this.#presentation.renderedPositions?.[this.#selectedPointIndex];
        if (!controlPosition) {
            return;
        }
        const deltaX = mouseX - this.#mouseDownPosition.x;
        const deltaY = mouseY - this.#mouseDownPosition.y;
        this.#mouseDownPosition = {
            x: mouseX,
            y: mouseY,
        };
        const newPoint = {
            x: controlPosition.x + deltaX,
            y: controlPosition.y + deltaY,
        };
        this.#model.setPoint(this.#selectedPointIndex, this.#presentation.positionToTimingPoint(newPoint));
    }
    #dragMove(event) {
        this.#updatePointPosition(event.x, event.y);
        this.#onChange(this.#model);
    }
    #dragEnd(event) {
        this.#updatePointPosition(event.x, event.y);
        this.#onChange(this.#model);
    }
    setCSSLinearEasingModel(model) {
        this.#model = model;
        this.draw();
    }
    draw() {
        this.#presentation.draw(this.#model, this.#svg);
    }
}
class PresetUI {
    #linearEasingPresentation;
    #bezierPresentation;
    constructor() {
        this.#linearEasingPresentation = new LinearEasingPresentation({
            width: 40,
            height: 40,
            marginTop: 0,
            pointRadius: 2,
        });
        this.#bezierPresentation = new _BezierUI_js__WEBPACK_IMPORTED_MODULE_3__.BezierUI({
            width: 40,
            height: 40,
            marginTop: 0,
            controlPointRadius: 2,
            shouldDrawLine: false,
        });
    }
    draw(model, svg) {
        if (model instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel) {
            this.#linearEasingPresentation.draw(model, svg);
        }
        else if (model instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier) {
            this.#bezierPresentation.drawCurve(model, svg);
        }
    }
}
class AnimationTimingUI {
    #container;
    #bezierContainer;
    #linearEasingContainer;
    #model;
    #onChange;
    #bezierCurveUI;
    #linearEasingUI;
    constructor({ model, onChange }) {
        this.#container = document.createElement('div');
        this.#container.className = 'animation-timing-ui';
        this.#container.style.width = '150px';
        this.#container.style.height = '250px';
        this.#bezierContainer = document.createElement('div');
        this.#bezierContainer.classList.add('bezier-ui-container');
        this.#linearEasingContainer = document.createElement('div');
        this.#linearEasingContainer.classList.add('linear-easing-ui-container');
        this.#container.appendChild(this.#bezierContainer);
        this.#container.appendChild(this.#linearEasingContainer);
        this.#model = model;
        this.#onChange = onChange;
        if (this.#model instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier) {
            this.#bezierCurveUI =
                new BezierCurveUI({ bezier: this.#model, container: this.#bezierContainer, onBezierChange: this.#onChange });
        }
        else if (this.#model instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel) {
            this.#linearEasingUI = new LinearEasingUI({
                model: this.#model,
                container: this.#linearEasingContainer,
                onChange: this.#onChange,
            });
        }
    }
    element() {
        return this.#container;
    }
    setModel(model) {
        this.#model = model;
        if (this.#model instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier) {
            if (this.#bezierCurveUI) {
                this.#bezierCurveUI.setBezier(this.#model);
            }
            else {
                this.#bezierCurveUI =
                    new BezierCurveUI({ bezier: this.#model, container: this.#bezierContainer, onBezierChange: this.#onChange });
            }
        }
        else if (this.#model instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel) {
            if (this.#linearEasingUI) {
                this.#linearEasingUI.setCSSLinearEasingModel(this.#model);
            }
            else {
                this.#linearEasingUI =
                    new LinearEasingUI({ model: this.#model, container: this.#linearEasingContainer, onChange: this.#onChange });
            }
        }
        this.draw();
    }
    draw() {
        this.#linearEasingContainer.classList.toggle('hidden', !(this.#model instanceof _CSSLinearEasingModel_js__WEBPACK_IMPORTED_MODULE_4__.CSSLinearEasingModel));
        this.#bezierContainer.classList.toggle('hidden', !(this.#model instanceof _legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.CubicBezier));
        if (this.#bezierCurveUI) {
            this.#bezierCurveUI.draw();
        }
        if (this.#linearEasingUI) {
            this.#linearEasingUI.draw();
        }
    }
}
//# sourceMappingURL=AnimationTimingUI.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/BezierUI.js":
/*!********************************************************!*\
  !*** ./ui/legacy/components/inline_editor/BezierUI.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BezierUI: () => (/* binding */ BezierUI),
/* harmony export */   Height: () => (/* binding */ Height)
/* harmony export */ });
/* harmony import */ var _visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _legacy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../legacy.js */ "./ui/legacy/legacy.js");
// Copyright (c) 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


class BezierUI {
    width;
    height;
    marginTop;
    radius;
    shouldDrawLine;
    constructor({ width, height, marginTop, controlPointRadius, shouldDrawLine }) {
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
//# sourceMappingURL=BezierUI.js.map

/***/ }),

/***/ "./ui/legacy/components/inline_editor/CSSLinearEasingModel.js":
/*!********************************************************************!*\
  !*** ./ui/legacy/components/inline_editor/CSSLinearEasingModel.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSLinearEasingModel: () => (/* binding */ CSSLinearEasingModel)
/* harmony export */ });
/* harmony import */ var _third_party_codemirror_next_codemirror_next_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../third_party/codemirror.next/codemirror.next.js */ "./third_party/codemirror.next/codemirror.next.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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
    #points;
    constructor(points) {
        this.#points = points;
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
            this.#points.splice(index, 0, point);
            return;
        }
        this.#points.push(point);
    }
    removePoint(index) {
        this.#points.splice(index, 1);
    }
    setPoint(index, point) {
        this.#points[index] = point;
    }
    points() {
        return this.#points;
    }
    asCSSText() {
        const args = this.#points.map(point => `${numberFormatter.format(point.output)} ${numberFormatter.format(point.input)}%`)
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
//# sourceMappingURL=CSSLinearEasingModel.js.map

/***/ })

}]);