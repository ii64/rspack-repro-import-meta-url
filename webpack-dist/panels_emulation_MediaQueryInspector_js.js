"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_emulation_MediaQueryInspector_js"],{

/***/ "./panels/emulation/MediaQueryInspector.js":
/*!*************************************************!*\
  !*** ./panels/emulation/MediaQueryInspector.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaQueryInspector: () => (/* binding */ MediaQueryInspector),
/* harmony export */   MediaQueryUIModel: () => (/* binding */ MediaQueryUIModel)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./core/sdk/sdk.js");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./models/bindings/bindings.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _mediaQueryInspector_css_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mediaQueryInspector.css.legacy.js */ "./panels/emulation/mediaQueryInspector.css.legacy.js");
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.








const UIStrings = {
    /**
     * @description A context menu item/command in the Media Query Inspector of the Device Toolbar.
     * Takes the user to the source code where this media query actually came from.
     */
    revealInSourceCode: 'Reveal in source code',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/emulation/MediaQueryInspector.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
class MediaQueryInspector extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.Widget {
    mediaThrottler;
    getWidthCallback;
    setWidthCallback;
    scale;
    elementsToMediaQueryModel;
    elementsToCSSLocations;
    cssModel;
    cachedQueryModels;
    constructor(getWidthCallback, setWidthCallback, mediaThrottler) {
        super(true);
        this.registerRequiredCSS(_mediaQueryInspector_css_legacy_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
        this.contentElement.classList.add('media-inspector-view');
        this.contentElement.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.mediaInspectorView().track({ click: true })}`);
        this.contentElement.addEventListener('click', this.onMediaQueryClicked.bind(this), false);
        this.contentElement.addEventListener('contextmenu', this.onContextMenu.bind(this), false);
        this.mediaThrottler = mediaThrottler;
        this.getWidthCallback = getWidthCallback;
        this.setWidthCallback = setWidthCallback;
        this.scale = 1;
        this.elementsToMediaQueryModel = new WeakMap();
        this.elementsToCSSLocations = new WeakMap();
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().observeModels(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.CSSModel, this);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().addEventListener("ZoomChanged" /* UI.ZoomManager.Events.ZoomChanged */, this.renderMediaQueries.bind(this), this);
    }
    modelAdded(cssModel) {
        // FIXME: adapt this to multiple targets.
        if (cssModel.target() !== _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().primaryPageTarget()) {
            return;
        }
        this.cssModel = cssModel;
        this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetAdded, this.scheduleMediaQueriesUpdate, this);
        this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetRemoved, this.scheduleMediaQueriesUpdate, this);
        this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetChanged, this.scheduleMediaQueriesUpdate, this);
        this.cssModel.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.MediaQueryResultChanged, this.scheduleMediaQueriesUpdate, this);
    }
    modelRemoved(cssModel) {
        if (cssModel !== this.cssModel) {
            return;
        }
        this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetAdded, this.scheduleMediaQueriesUpdate, this);
        this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetRemoved, this.scheduleMediaQueriesUpdate, this);
        this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.StyleSheetChanged, this.scheduleMediaQueriesUpdate, this);
        this.cssModel.removeEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.CSSModel.Events.MediaQueryResultChanged, this.scheduleMediaQueriesUpdate, this);
        delete this.cssModel;
    }
    setAxisTransform(scale) {
        if (Math.abs(this.scale - scale) < 1e-8) {
            return;
        }
        this.scale = scale;
        this.renderMediaQueries();
    }
    onMediaQueryClicked(event) {
        const mediaQueryMarker = event.target.enclosingNodeOrSelfWithClass('media-inspector-bar');
        if (!mediaQueryMarker) {
            return;
        }
        const model = this.elementsToMediaQueryModel.get(mediaQueryMarker);
        if (!model) {
            return;
        }
        const modelMaxWidth = model.maxWidthExpression();
        const modelMinWidth = model.minWidthExpression();
        if (model.section() === 0 /* Section.Max */) {
            this.setWidthCallback(modelMaxWidth ? modelMaxWidth.computedLength() || 0 : 0);
            return;
        }
        if (model.section() === 2 /* Section.Min */) {
            this.setWidthCallback(modelMinWidth ? modelMinWidth.computedLength() || 0 : 0);
            return;
        }
        const currentWidth = this.getWidthCallback();
        if (modelMinWidth && currentWidth !== modelMinWidth.computedLength()) {
            this.setWidthCallback(modelMinWidth.computedLength() || 0);
        }
        else {
            this.setWidthCallback(modelMaxWidth ? modelMaxWidth.computedLength() || 0 : 0);
        }
    }
    onContextMenu(event) {
        if (!this.cssModel || !this.cssModel.isEnabled()) {
            return;
        }
        const mediaQueryMarker = event.target.enclosingNodeOrSelfWithClass('media-inspector-bar');
        if (!mediaQueryMarker) {
            return;
        }
        const locations = this.elementsToCSSLocations.get(mediaQueryMarker) || [];
        const uiLocations = new Map();
        for (let i = 0; i < locations.length; ++i) {
            const uiLocation = _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_4__.CSSWorkspaceBinding.CSSWorkspaceBinding.instance().rawLocationToUILocation(locations[i]);
            if (!uiLocation) {
                continue;
            }
            const descriptor = typeof uiLocation.columnNumber === 'number' ?
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.sprintf('%s:%d:%d', uiLocation.uiSourceCode.url(), uiLocation.lineNumber + 1, uiLocation.columnNumber + 1) :
                _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.sprintf('%s:%d', uiLocation.uiSourceCode.url(), uiLocation.lineNumber + 1);
            uiLocations.set(descriptor, uiLocation);
        }
        const contextMenuItems = [...uiLocations.keys()].sort();
        const contextMenu = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ContextMenu.ContextMenu(event);
        const subMenuItem = contextMenu.defaultSection().appendSubMenuItem(i18nString(UIStrings.revealInSourceCode), undefined, 'reveal-in-source-list');
        for (let i = 0; i < contextMenuItems.length; ++i) {
            const title = contextMenuItems[i];
            subMenuItem.defaultSection().appendItem(title, this.revealSourceLocation.bind(this, uiLocations.get(title)), { jslogContext: 'reveal-in-source' });
        }
        void contextMenu.show();
    }
    revealSourceLocation(location) {
        void _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Revealer.reveal(location);
    }
    scheduleMediaQueriesUpdate() {
        if (!this.isShowing()) {
            return;
        }
        void this.mediaThrottler.schedule(this.refetchMediaQueries.bind(this));
    }
    refetchMediaQueries() {
        if (!this.isShowing() || !this.cssModel) {
            return Promise.resolve();
        }
        return this.cssModel.getMediaQueries().then(this.rebuildMediaQueries.bind(this));
    }
    squashAdjacentEqual(models) {
        const filtered = [];
        for (let i = 0; i < models.length; ++i) {
            const last = filtered[filtered.length - 1];
            if (!last || !last.equals(models[i])) {
                filtered.push(models[i]);
            }
        }
        return filtered;
    }
    rebuildMediaQueries(cssMedias) {
        let queryModels = [];
        for (let i = 0; i < cssMedias.length; ++i) {
            const cssMedia = cssMedias[i];
            if (!cssMedia.mediaList) {
                continue;
            }
            for (let j = 0; j < cssMedia.mediaList.length; ++j) {
                const mediaQuery = cssMedia.mediaList[j];
                const queryModel = MediaQueryUIModel.createFromMediaQuery(cssMedia, mediaQuery);
                if (queryModel) {
                    queryModels.push(queryModel);
                }
            }
        }
        queryModels.sort(compareModels);
        queryModels = this.squashAdjacentEqual(queryModels);
        let allEqual = this.cachedQueryModels && this.cachedQueryModels.length === queryModels.length;
        for (let i = 0; allEqual && i < queryModels.length; ++i) {
            allEqual = allEqual && this.cachedQueryModels && this.cachedQueryModels[i].equals(queryModels[i]);
        }
        if (allEqual) {
            return;
        }
        this.cachedQueryModels = queryModels;
        this.renderMediaQueries();
        function compareModels(model1, model2) {
            return model1.compareTo(model2);
        }
    }
    renderMediaQueries() {
        if (!this.cachedQueryModels || !this.isShowing()) {
            return;
        }
        const markers = [];
        let lastMarker = null;
        for (const model of this.cachedQueryModels) {
            if (lastMarker && lastMarker.model.dimensionsEqual(model)) {
                lastMarker.active = lastMarker.active || model.active();
            }
            else {
                lastMarker = {
                    active: model.active(),
                    model,
                    locations: [],
                };
                markers.push(lastMarker);
            }
            const rawLocation = model.rawLocation();
            if (rawLocation) {
                lastMarker.locations.push(rawLocation);
            }
        }
        this.contentElement.removeChildren();
        let container = null;
        for (let i = 0; i < markers.length; ++i) {
            if (!i || markers[i].model.section() !== markers[i - 1].model.section()) {
                container = this.contentElement.createChild('div', 'media-inspector-marker-container');
            }
            const marker = markers[i];
            const bar = this.createElementFromMediaQueryModel(marker.model);
            this.elementsToMediaQueryModel.set(bar, marker.model);
            this.elementsToCSSLocations.set(bar, marker.locations);
            bar.classList.toggle('media-inspector-marker-inactive', !marker.active);
            if (!container) {
                throw new Error('Could not find container to render media queries into.');
            }
            container.appendChild(bar);
        }
    }
    zoomFactor() {
        return _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor() / this.scale;
    }
    wasShown() {
        super.wasShown();
        this.scheduleMediaQueriesUpdate();
    }
    createElementFromMediaQueryModel(model) {
        const zoomFactor = this.zoomFactor();
        const minWidthExpression = model.minWidthExpression();
        const maxWidthExpression = model.maxWidthExpression();
        const minWidthValue = minWidthExpression ? (minWidthExpression.computedLength() || 0) / zoomFactor : 0;
        const maxWidthValue = maxWidthExpression ? (maxWidthExpression.computedLength() || 0) / zoomFactor : 0;
        const result = document.createElement('div');
        result.classList.add('media-inspector-bar');
        if (model.section() === 0 /* Section.Max */) {
            result.createChild('div', 'media-inspector-marker-spacer');
            const markerElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-max-width');
            markerElement.style.width = maxWidthValue + 'px';
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(markerElement, model.mediaText());
            appendLabel(markerElement, model.maxWidthExpression(), false, false);
            appendLabel(markerElement, model.maxWidthExpression(), true, true);
            result.createChild('div', 'media-inspector-marker-spacer');
        }
        if (model.section() === 1 /* Section.MinMax */) {
            result.createChild('div', 'media-inspector-marker-spacer');
            const leftElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-max-width');
            leftElement.style.width = (maxWidthValue - minWidthValue) * 0.5 + 'px';
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(leftElement, model.mediaText());
            appendLabel(leftElement, model.maxWidthExpression(), true, false);
            appendLabel(leftElement, model.minWidthExpression(), false, true);
            result.createChild('div', 'media-inspector-marker-spacer').style.flex = '0 0 ' + minWidthValue + 'px';
            const rightElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-max-width');
            rightElement.style.width = (maxWidthValue - minWidthValue) * 0.5 + 'px';
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(rightElement, model.mediaText());
            appendLabel(rightElement, model.minWidthExpression(), true, false);
            appendLabel(rightElement, model.maxWidthExpression(), false, true);
            result.createChild('div', 'media-inspector-marker-spacer');
        }
        if (model.section() === 2 /* Section.Min */) {
            const leftElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-width media-inspector-marker-min-width-left');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(leftElement, model.mediaText());
            appendLabel(leftElement, model.minWidthExpression(), false, false);
            result.createChild('div', 'media-inspector-marker-spacer').style.flex = '0 0 ' + minWidthValue + 'px';
            const rightElement = result.createChild('div', 'media-inspector-marker media-inspector-marker-min-width media-inspector-marker-min-width-right');
            _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(rightElement, model.mediaText());
            appendLabel(rightElement, model.minWidthExpression(), true, true);
        }
        function appendLabel(marker, expression, atLeft, leftAlign) {
            if (!expression) {
                return;
            }
            marker
                .createChild('div', 'media-inspector-marker-label-container ' +
                (atLeft ? 'media-inspector-marker-label-container-left' :
                    'media-inspector-marker-label-container-right'))
                .createChild('span', 'media-inspector-marker-label ' +
                (leftAlign ? 'media-inspector-label-left' : 'media-inspector-label-right'))
                .textContent = expression.value() + expression.unit();
        }
        return result;
    }
}
class MediaQueryUIModel {
    cssMedia;
    minWidthExpressionInternal;
    maxWidthExpressionInternal;
    activeInternal;
    sectionInternal;
    rawLocationInternal;
    constructor(cssMedia, minWidthExpression, maxWidthExpression, active) {
        this.cssMedia = cssMedia;
        this.minWidthExpressionInternal = minWidthExpression;
        this.maxWidthExpressionInternal = maxWidthExpression;
        this.activeInternal = active;
        if (maxWidthExpression && !minWidthExpression) {
            this.sectionInternal = 0 /* Section.Max */;
        }
        else if (minWidthExpression && maxWidthExpression) {
            this.sectionInternal = 1 /* Section.MinMax */;
        }
        else {
            this.sectionInternal = 2 /* Section.Min */;
        }
    }
    static createFromMediaQuery(cssMedia, mediaQuery) {
        let maxWidthExpression = null;
        let maxWidthPixels = Number.MAX_VALUE;
        let minWidthExpression = null;
        let minWidthPixels = Number.MIN_VALUE;
        const expressions = mediaQuery.expressions();
        if (!expressions) {
            return null;
        }
        for (let i = 0; i < expressions.length; ++i) {
            const expression = expressions[i];
            const feature = expression.feature();
            if (feature.indexOf('width') === -1) {
                continue;
            }
            const pixels = expression.computedLength();
            if (feature.startsWith('max-') && pixels && pixels < maxWidthPixels) {
                maxWidthExpression = expression;
                maxWidthPixels = pixels;
            }
            else if (feature.startsWith('min-') && pixels && pixels > minWidthPixels) {
                minWidthExpression = expression;
                minWidthPixels = pixels;
            }
        }
        if (minWidthPixels > maxWidthPixels || (!maxWidthExpression && !minWidthExpression)) {
            return null;
        }
        return new MediaQueryUIModel(cssMedia, minWidthExpression, maxWidthExpression, mediaQuery.active());
    }
    equals(other) {
        return this.compareTo(other) === 0;
    }
    dimensionsEqual(other) {
        const thisMinWidthExpression = this.minWidthExpression();
        const otherMinWidthExpression = other.minWidthExpression();
        const thisMaxWidthExpression = this.maxWidthExpression();
        const otherMaxWidthExpression = other.maxWidthExpression();
        const sectionsEqual = this.section() === other.section();
        // If there isn't an other min width expression, they aren't equal, so the optional chaining operator is safe to use here.
        const minWidthEqual = !thisMinWidthExpression ||
            thisMinWidthExpression.computedLength() === otherMinWidthExpression?.computedLength();
        const maxWidthEqual = !thisMaxWidthExpression ||
            thisMaxWidthExpression.computedLength() === otherMaxWidthExpression?.computedLength();
        return sectionsEqual && minWidthEqual && maxWidthEqual;
    }
    compareTo(other) {
        if (this.section() !== other.section()) {
            return this.section() - other.section();
        }
        if (this.dimensionsEqual(other)) {
            const myLocation = this.rawLocation();
            const otherLocation = other.rawLocation();
            if (!myLocation && !otherLocation) {
                return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(this.mediaText(), other.mediaText());
            }
            if (myLocation && !otherLocation) {
                return 1;
            }
            if (!myLocation && otherLocation) {
                return -1;
            }
            if (this.active() !== other.active()) {
                return this.active() ? -1 : 1;
            }
            if (!myLocation || !otherLocation) {
                // This conditional never runs, because it's dealt with above, but
                // TypeScript can't follow that by this point both myLocation and
                // otherLocation must exist.
                return 0;
            }
            return _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_2__.StringUtilities.compare(myLocation.url, otherLocation.url) ||
                myLocation.lineNumber - otherLocation.lineNumber || myLocation.columnNumber - otherLocation.columnNumber;
        }
        const thisMaxWidthExpression = this.maxWidthExpression();
        const otherMaxWidthExpression = other.maxWidthExpression();
        const thisMaxLength = thisMaxWidthExpression ? thisMaxWidthExpression.computedLength() || 0 : 0;
        const otherMaxLength = otherMaxWidthExpression ? otherMaxWidthExpression.computedLength() || 0 : 0;
        const thisMinWidthExpression = this.minWidthExpression();
        const otherMinWidthExpression = other.minWidthExpression();
        const thisMinLength = thisMinWidthExpression ? thisMinWidthExpression.computedLength() || 0 : 0;
        const otherMinLength = otherMinWidthExpression ? otherMinWidthExpression.computedLength() || 0 : 0;
        if (this.section() === 0 /* Section.Max */) {
            return otherMaxLength - thisMaxLength;
        }
        if (this.section() === 2 /* Section.Min */) {
            return thisMinLength - otherMinLength;
        }
        return thisMinLength - otherMinLength || otherMaxLength - thisMaxLength;
    }
    section() {
        return this.sectionInternal;
    }
    mediaText() {
        return this.cssMedia.text || '';
    }
    rawLocation() {
        if (!this.rawLocationInternal) {
            this.rawLocationInternal = this.cssMedia.rawLocation();
        }
        return this.rawLocationInternal;
    }
    minWidthExpression() {
        return this.minWidthExpressionInternal;
    }
    maxWidthExpression() {
        return this.maxWidthExpressionInternal;
    }
    active() {
        return this.activeInternal;
    }
}
//# sourceMappingURL=MediaQueryInspector.js.map

/***/ }),

/***/ "./panels/emulation/mediaQueryInspector.css.legacy.js":
/*!************************************************************!*\
  !*** ./panels/emulation/mediaQueryInspector.css.legacy.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  cssContent: `/*
 * Copyright 2015 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
/* Media query bars */

.media-inspector-view {
  height: 50px;
}

.media-inspector-marker-container {
  height: 14px;
  margin: 2px 0;
  position: relative;
}

.media-inspector-bar {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.media-inspector-marker {
  flex: none;
  pointer-events: auto;
  margin: 1px 0;
  white-space: nowrap;
  z-index: auto;
  position: relative;
}

.media-inspector-marker-spacer {
  flex: auto;
}

.media-inspector-marker:hover {
  margin: -1px 0;
  opacity: 100%;
}

.media-inspector-marker-min-width {
  flex: auto;
  background-color: var(--sys-color-yellow-container);
  border-right: 2px solid var(--sys-color-yellow-bright);
  border-left: 2px solid var(--sys-color-yellow-bright);

  &:hover {
    background-color: color-mix(in sRGB, var(--sys-color-yellow-container), var(--sys-color-yellow-bright) 30%);
  }
}

.media-inspector-marker-min-width-right {
  border-left: 2px solid var(--sys-color-yellow-bright);
}

.media-inspector-marker-min-width-left {
  border-right: 2px solid var(--sys-color-yellow-bright);
}

.media-inspector-marker-min-max-width {
  background-color: var(--sys-color-tertiary-container);
  border-left: 2px solid var(--sys-color-tertiary);
  border-right: 2px solid var(--sys-color-tertiary);
}

.media-inspector-marker-min-max-width:hover {
  z-index: 1;
}

.media-inspector-marker-max-width {
  background-color: var(--sys-color-inverse-primary);
  border-right: 2px solid var(--sys-color-primary-bright);
  border-left: 2px solid var(--sys-color-primary-bright);
}

/* Clear background colors when query is not active and not hovering */

.media-inspector-marker-inactive .media-inspector-marker-min-width:not(:hover) {
  background-color: var(--sys-color-surface-yellow);
}

.media-inspector-marker-inactive .media-inspector-marker-min-max-width:not(:hover) {
  background-color: color-mix(in sRGB, var(--sys-color-tertiary-container), var(--sys-color-cdt-base-container) 30%);
}

.media-inspector-marker-inactive .media-inspector-marker-max-width:not(:hover) {
  background-color: var(--sys-color-tonal-container);
}

/* Media query labels */

.media-inspector-marker-label-container {
  position: absolute;
  z-index: 1;
}

.media-inspector-marker:not(:hover) .media-inspector-marker-label-container {
  display: none;
}

.media-inspector-marker-label-container-left {
  left: -2px;
}

.media-inspector-marker-label-container-right {
  right: -2px;
}

.media-inspector-marker-label {
  color: var(--sys-color-on-surface);
  position: absolute;
  top: 1px;
  bottom: 0;
  font-size: 12px;
  pointer-events: none;
}

.media-inspector-label-right {
  right: 4px;
}

.media-inspector-label-left {
  left: 4px;
}

/*# sourceURL=mediaQueryInspector.css */
`
});


/***/ })

}]);