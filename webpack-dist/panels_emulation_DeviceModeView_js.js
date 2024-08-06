"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["panels_emulation_DeviceModeView_js"],{

/***/ "./panels/emulation/DeviceModeView.js":
/*!********************************************!*\
  !*** ./panels/emulation/DeviceModeView.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceModeView: () => (/* binding */ DeviceModeView),
/* harmony export */   Ruler: () => (/* binding */ Ruler)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./core/host/host.js");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./core/platform/platform.js");
/* harmony import */ var _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/emulation/emulation.js */ "./models/emulation/emulation.js");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./ui/visual_logging/visual_logging.js");
/* harmony import */ var _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeviceModeToolbar.js */ "./panels/emulation/DeviceModeToolbar.js");
/* harmony import */ var _deviceModeView_css_legacy_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deviceModeView.css.legacy.js */ "./panels/emulation/deviceModeView.css.legacy.js");
/* harmony import */ var _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MediaQueryInspector.js */ "./panels/emulation/MediaQueryInspector.js");
// Copyright 2015 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.










const UIStrings = {
    /**
     *@description Bottom resizer element title in Device Mode View of the Device Toolbar
     */
    doubleclickForFullHeight: 'Double-click for full height',
    /**
     * @description Name of a device that the user can select to emulate. Small mobile device.
     * Translation of this phrase should be limited to 10 characters.
     */
    mobileS: 'Mobile S',
    /**
     * @description Name of a device that the user can select to emulate. Medium mobile device.
     * Translation of this phrase should be limited to 10 characters.
     */
    mobileM: 'Mobile M',
    /**
     * @description Name of a device that the user can select to emulate. Large mobile device.
     * Translation of this phrase should be limited to 10 characters.
     */
    mobileL: 'Mobile L',
    /**
     * @description Name of a device that the user can select to emulate. Tablet device.
     * Translation of this phrase should be limited to 10 characters.
     */
    tablet: 'Tablet',
    /**
     * @description Name of a device that the user can select to emulate. Laptop device.
     * Translation of this phrase should be limited to 10 characters.
     */
    laptop: 'Laptop',
    /**
     * @description Name of a device that the user can select to emulate. Large laptop device.
     * Translation of this phrase should be limited to 10 characters.
     */
    laptopL: 'Laptop L',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/emulation/DeviceModeView.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
class DeviceModeView extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    wrapperInstance;
    blockElementToWidth;
    model;
    mediaInspector;
    showMediaInspectorSetting;
    showRulersSetting;
    topRuler;
    leftRuler;
    presetBlocks;
    responsivePresetsContainer;
    screenArea;
    pageArea;
    outlineImage;
    contentClip;
    contentArea;
    rightResizerElement;
    leftResizerElement;
    bottomResizerElement;
    bottomRightResizerElement;
    bottomLeftResizerElement;
    cachedResizable;
    mediaInspectorContainer;
    screenImage;
    toolbar;
    slowPositionStart;
    resizeStart;
    cachedCssScreenRect;
    cachedCssVisiblePageRect;
    cachedOutlineRect;
    cachedMediaInspectorVisible;
    cachedShowRulers;
    cachedScale;
    handleWidth;
    handleHeight;
    constructor() {
        super(true);
        this.blockElementToWidth = new WeakMap();
        this.setMinimumSize(150, 150);
        this.element.classList.add('device-mode-view');
        this.registerRequiredCSS(_deviceModeView_css_legacy_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
        this.model = _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.DeviceModeModel.instance();
        this.model.addEventListener("Updated" /* EmulationModel.DeviceModeModel.Events.Updated */, this.updateUI, this);
        this.mediaInspector = new _MediaQueryInspector_js__WEBPACK_IMPORTED_MODULE_9__.MediaQueryInspector(() => this.model.appliedDeviceSize().width, this.model.setWidth.bind(this.model), new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0));
        this.showMediaInspectorSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('show-media-query-inspector');
        this.showMediaInspectorSetting.addChangeListener(this.updateUI, this);
        this.showRulersSetting = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Settings.Settings.instance().moduleSetting('emulation.show-rulers');
        this.showRulersSetting.addChangeListener(this.updateUI, this);
        this.topRuler = new Ruler(true, this.model.setWidthAndScaleToFit.bind(this.model));
        this.topRuler.element.classList.add('device-mode-ruler-top');
        this.leftRuler = new Ruler(false, this.model.setHeightAndScaleToFit.bind(this.model));
        this.leftRuler.element.classList.add('device-mode-ruler-left');
        this.createUI();
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().addEventListener("ZoomChanged" /* UI.ZoomManager.Events.ZoomChanged */, this.zoomChanged, this);
    }
    createUI() {
        this.toolbar = new _DeviceModeToolbar_js__WEBPACK_IMPORTED_MODULE_7__.DeviceModeToolbar(this.model, this.showMediaInspectorSetting, this.showRulersSetting);
        this.contentElement.appendChild(this.toolbar.element());
        this.contentClip = this.contentElement.createChild('div', 'device-mode-content-clip vbox');
        this.responsivePresetsContainer =
            this.contentClip.createChild('div', 'device-mode-presets-container');
        this.responsivePresetsContainer.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.responsivePresets()}`);
        this.populatePresetsContainer();
        this.mediaInspectorContainer = this.contentClip.createChild('div', 'device-mode-media-container');
        this.contentArea = this.contentClip.createChild('div', 'device-mode-content-area');
        this.outlineImage = this.contentArea.createChild('img', 'device-mode-outline-image hidden fill');
        this.outlineImage.addEventListener('load', this.onImageLoaded.bind(this, this.outlineImage, true), false);
        this.outlineImage.addEventListener('error', this.onImageLoaded.bind(this, this.outlineImage, false), false);
        this.screenArea = this.contentArea.createChild('div', 'device-mode-screen-area');
        this.screenImage = this.screenArea.createChild('img', 'device-mode-screen-image hidden');
        this.screenImage.addEventListener('load', this.onImageLoaded.bind(this, this.screenImage, true), false);
        this.screenImage.addEventListener('error', this.onImageLoaded.bind(this, this.screenImage, false), false);
        this.bottomRightResizerElement =
            this.screenArea.createChild('div', 'device-mode-resizer device-mode-bottom-right-resizer');
        this.bottomRightResizerElement.createChild('div', '');
        this.createResizer(this.bottomRightResizerElement, 2, 1);
        this.bottomLeftResizerElement =
            this.screenArea.createChild('div', 'device-mode-resizer device-mode-bottom-left-resizer');
        this.bottomLeftResizerElement.createChild('div', '');
        this.createResizer(this.bottomLeftResizerElement, -2, 1);
        this.rightResizerElement =
            this.screenArea.createChild('div', 'device-mode-resizer device-mode-right-resizer');
        this.rightResizerElement.createChild('div', '');
        this.createResizer(this.rightResizerElement, 2, 0);
        this.leftResizerElement =
            this.screenArea.createChild('div', 'device-mode-resizer device-mode-left-resizer');
        this.leftResizerElement.createChild('div', '');
        this.createResizer(this.leftResizerElement, -2, 0);
        this.bottomResizerElement =
            this.screenArea.createChild('div', 'device-mode-resizer device-mode-bottom-resizer');
        this.bottomResizerElement.createChild('div', '');
        this.createResizer(this.bottomResizerElement, 0, 1);
        this.bottomResizerElement.addEventListener('dblclick', this.model.setHeight.bind(this.model, 0), false);
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Tooltip.Tooltip.install(this.bottomResizerElement, i18nString(UIStrings.doubleclickForFullHeight));
        this.pageArea = this.screenArea.createChild('div', 'device-mode-page-area');
        this.pageArea.createChild('slot');
    }
    populatePresetsContainer() {
        const sizes = [320, 375, 425, 768, 1024, 1440, 2560];
        const titles = [
            i18nString(UIStrings.mobileS),
            i18nString(UIStrings.mobileM),
            i18nString(UIStrings.mobileL),
            i18nString(UIStrings.tablet),
            i18nString(UIStrings.laptop),
            i18nString(UIStrings.laptopL),
            '4K',
        ];
        this.presetBlocks = [];
        const inner = this.responsivePresetsContainer.createChild('div', 'device-mode-presets-container-inner');
        for (let i = sizes.length - 1; i >= 0; --i) {
            const outer = inner.createChild('div', 'fill device-mode-preset-bar-outer');
            const block = outer.createChild('div', 'device-mode-preset-bar');
            block.createChild('span').textContent = titles[i] + ' \u2013 ' + sizes[i] + 'px';
            block.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.action().track({ click: true }).context(`device-mode-preset-${sizes[i]}px`)}`);
            block.addEventListener('click', applySize.bind(this, sizes[i]), false);
            this.blockElementToWidth.set(block, sizes[i]);
            this.presetBlocks.push(block);
        }
        function applySize(width, e) {
            this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive, null, null);
            this.model.setWidthAndScaleToFit(width);
            e.consume();
        }
    }
    createResizer(element, widthFactor, heightFactor) {
        const resizer = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ResizerWidget.ResizerWidget();
        element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.slider('device-mode-resizer').track({ drag: true })}`);
        resizer.addElement(element);
        let cursor = widthFactor ? 'ew-resize' : 'ns-resize';
        if (widthFactor * heightFactor > 0) {
            cursor = 'nwse-resize';
        }
        if (widthFactor * heightFactor < 0) {
            cursor = 'nesw-resize';
        }
        resizer.setCursor(cursor);
        resizer.addEventListener("ResizeStart" /* UI.ResizerWidget.Events.ResizeStart */, this.onResizeStart, this);
        resizer.addEventListener("ResizeUpdateXY" /* UI.ResizerWidget.Events.ResizeUpdateXY */, this.onResizeUpdate.bind(this, widthFactor, heightFactor));
        resizer.addEventListener("ResizeEnd" /* UI.ResizerWidget.Events.ResizeEnd */, this.onResizeEnd, this);
        return resizer;
    }
    onResizeStart() {
        this.slowPositionStart = null;
        const rect = this.model.screenRect();
        this.resizeStart = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(rect.width, rect.height);
    }
    onResizeUpdate(widthFactor, heightFactor, event) {
        if (event.data.shiftKey !== Boolean(this.slowPositionStart)) {
            this.slowPositionStart = event.data.shiftKey ? { x: event.data.currentX, y: event.data.currentY } : null;
        }
        let cssOffsetX = event.data.currentX - event.data.startX;
        let cssOffsetY = event.data.currentY - event.data.startY;
        if (this.slowPositionStart) {
            cssOffsetX = (event.data.currentX - this.slowPositionStart.x) / 10 + this.slowPositionStart.x - event.data.startX;
            cssOffsetY = (event.data.currentY - this.slowPositionStart.y) / 10 + this.slowPositionStart.y - event.data.startY;
        }
        if (widthFactor && this.resizeStart) {
            const dipOffsetX = cssOffsetX * _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
            let newWidth = this.resizeStart.width + dipOffsetX * widthFactor;
            newWidth = Math.round(newWidth / this.model.scale());
            if (newWidth >= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MinDeviceSize &&
                newWidth <= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MaxDeviceSize) {
                this.model.setWidth(newWidth);
            }
        }
        if (heightFactor && this.resizeStart) {
            const dipOffsetY = cssOffsetY * _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
            let newHeight = this.resizeStart.height + dipOffsetY * heightFactor;
            newHeight = Math.round(newHeight / this.model.scale());
            if (newHeight >= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MinDeviceSize &&
                newHeight <= _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.MaxDeviceSize) {
                this.model.setHeight(newHeight);
            }
        }
    }
    exitHingeMode() {
        if (this.model) {
            this.model.exitHingeMode();
        }
    }
    onResizeEnd() {
        delete this.resizeStart;
        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.actionTaken(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.Action.ResizedViewInResponsiveMode);
    }
    updateUI() {
        function applyRect(element, rect) {
            element.style.left = rect.left + 'px';
            element.style.top = rect.top + 'px';
            element.style.width = rect.width + 'px';
            element.style.height = rect.height + 'px';
        }
        if (!this.isShowing()) {
            return;
        }
        const zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
        let callDoResize = false;
        const showRulers = this.showRulersSetting.get() && this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None;
        let contentAreaResized = false;
        let updateRulers = false;
        const cssScreenRect = this.model.screenRect().scale(1 / zoomFactor);
        if (!this.cachedCssScreenRect || !cssScreenRect.isEqual(this.cachedCssScreenRect)) {
            applyRect(this.screenArea, cssScreenRect);
            updateRulers = true;
            callDoResize = true;
            this.cachedCssScreenRect = cssScreenRect;
        }
        const cssVisiblePageRect = this.model.visiblePageRect().scale(1 / zoomFactor);
        if (!this.cachedCssVisiblePageRect || !cssVisiblePageRect.isEqual(this.cachedCssVisiblePageRect)) {
            applyRect(this.pageArea, cssVisiblePageRect);
            callDoResize = true;
            this.cachedCssVisiblePageRect = cssVisiblePageRect;
        }
        const outlineRectFromModel = this.model.outlineRect();
        if (outlineRectFromModel) {
            const outlineRect = outlineRectFromModel.scale(1 / zoomFactor);
            if (!this.cachedOutlineRect || !outlineRect.isEqual(this.cachedOutlineRect)) {
                applyRect(this.outlineImage, outlineRect);
                callDoResize = true;
                this.cachedOutlineRect = outlineRect;
            }
        }
        this.contentClip.classList.toggle('device-mode-outline-visible', Boolean(this.model.outlineImage()));
        const resizable = this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Responsive;
        if (resizable !== this.cachedResizable) {
            this.rightResizerElement.classList.toggle('hidden', !resizable);
            this.leftResizerElement.classList.toggle('hidden', !resizable);
            this.bottomResizerElement.classList.toggle('hidden', !resizable);
            this.bottomRightResizerElement.classList.toggle('hidden', !resizable);
            this.bottomLeftResizerElement.classList.toggle('hidden', !resizable);
            this.cachedResizable = resizable;
        }
        const mediaInspectorVisible = this.showMediaInspectorSetting.get() && this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None;
        if (mediaInspectorVisible !== this.cachedMediaInspectorVisible) {
            if (mediaInspectorVisible) {
                this.mediaInspector.show(this.mediaInspectorContainer);
            }
            else {
                this.mediaInspector.detach();
            }
            contentAreaResized = true;
            callDoResize = true;
            this.cachedMediaInspectorVisible = mediaInspectorVisible;
        }
        if (showRulers !== this.cachedShowRulers) {
            this.contentClip.classList.toggle('device-mode-rulers-visible', showRulers);
            if (showRulers) {
                this.topRuler.show(this.contentArea);
                this.leftRuler.show(this.contentArea);
            }
            else {
                this.topRuler.detach();
                this.leftRuler.detach();
            }
            contentAreaResized = true;
            callDoResize = true;
            this.cachedShowRulers = showRulers;
        }
        if (this.model.scale() !== this.cachedScale) {
            updateRulers = true;
            callDoResize = true;
            for (const block of this.presetBlocks) {
                const blockWidth = this.blockElementToWidth.get(block);
                if (!blockWidth) {
                    throw new Error('Could not get width for block.');
                }
                block.style.width = blockWidth * this.model.scale() + 'px';
            }
            this.cachedScale = this.model.scale();
        }
        this.toolbar.update();
        this.loadImage(this.screenImage, this.model.screenImage());
        this.loadImage(this.outlineImage, this.model.outlineImage());
        this.mediaInspector.setAxisTransform(this.model.scale());
        if (callDoResize) {
            this.doResize();
        }
        if (updateRulers) {
            this.topRuler.render(this.model.scale());
            this.leftRuler.render(this.model.scale());
            this.topRuler.element.positionAt(this.cachedCssScreenRect ? this.cachedCssScreenRect.left : 0, this.cachedCssScreenRect ? this.cachedCssScreenRect.top : 0);
            this.leftRuler.element.positionAt(this.cachedCssScreenRect ? this.cachedCssScreenRect.left : 0, this.cachedCssScreenRect ? this.cachedCssScreenRect.top : 0);
        }
        if (contentAreaResized) {
            this.contentAreaResized();
        }
    }
    loadImage(element, srcset) {
        if (element.getAttribute('srcset') === srcset) {
            return;
        }
        element.setAttribute('srcset', srcset);
        if (!srcset) {
            element.classList.toggle('hidden', true);
        }
    }
    onImageLoaded(element, success) {
        element.classList.toggle('hidden', !success);
    }
    setNonEmulatedAvailableSize(element) {
        if (this.model.type() !== _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None) {
            return;
        }
        const zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
        const rect = element.getBoundingClientRect();
        const availableSize = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(Math.max(rect.width * zoomFactor, 1), Math.max(rect.height * zoomFactor, 1));
        this.model.setAvailableSize(availableSize, availableSize);
    }
    contentAreaResized() {
        const zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
        const rect = this.contentArea.getBoundingClientRect();
        const availableSize = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(Math.max(rect.width * zoomFactor, 1), Math.max(rect.height * zoomFactor, 1));
        const preferredSize = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Geometry.Size(Math.max((rect.width - 2 * (this.handleWidth || 0)) * zoomFactor, 1), Math.max((rect.height - (this.handleHeight || 0)) * zoomFactor, 1));
        this.model.setAvailableSize(availableSize, preferredSize);
    }
    measureHandles() {
        const hidden = this.rightResizerElement.classList.contains('hidden');
        this.rightResizerElement.classList.toggle('hidden', false);
        this.bottomResizerElement.classList.toggle('hidden', false);
        this.handleWidth = this.rightResizerElement.offsetWidth;
        this.handleHeight = this.bottomResizerElement.offsetHeight;
        this.rightResizerElement.classList.toggle('hidden', hidden);
        this.bottomResizerElement.classList.toggle('hidden', hidden);
    }
    zoomChanged() {
        delete this.handleWidth;
        delete this.handleHeight;
        if (this.isShowing()) {
            this.measureHandles();
            this.contentAreaResized();
        }
    }
    onResize() {
        if (this.isShowing()) {
            this.contentAreaResized();
        }
    }
    wasShown() {
        this.measureHandles();
        this.toolbar.restore();
    }
    willHide() {
        this.model.emulate(_models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.None, null, null);
    }
    async captureScreenshot() {
        const screenshot = await this.model.captureScreenshot(false);
        if (screenshot === null) {
            return;
        }
        const pageImage = new Image();
        pageImage.src = 'data:image/png;base64,' + screenshot;
        pageImage.onload = async () => {
            const scale = pageImage.naturalWidth / this.model.screenRect().width;
            const outlineRectFromModel = this.model.outlineRect();
            if (!outlineRectFromModel) {
                throw new Error('Unable to take screenshot: no outlineRect available.');
            }
            const outlineRect = outlineRectFromModel.scale(scale);
            const screenRect = this.model.screenRect().scale(scale);
            const visiblePageRect = this.model.visiblePageRect().scale(scale);
            const contentLeft = screenRect.left + visiblePageRect.left - outlineRect.left;
            const contentTop = screenRect.top + visiblePageRect.top - outlineRect.top;
            const canvas = document.createElement('canvas');
            canvas.width = Math.floor(outlineRect.width);
            // Cap the height to not hit the GPU limit.
            // https://crbug.com/1260828
            canvas.height = Math.min((1 << 14), Math.floor(outlineRect.height));
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Could not get 2d context from canvas.');
            }
            ctx.imageSmoothingEnabled = false;
            if (this.model.outlineImage()) {
                await this.paintImage(ctx, this.model.outlineImage(), outlineRect.relativeTo(outlineRect));
            }
            if (this.model.screenImage()) {
                await this.paintImage(ctx, this.model.screenImage(), screenRect.relativeTo(outlineRect));
            }
            ctx.drawImage(pageImage, Math.floor(contentLeft), Math.floor(contentTop));
            this.saveScreenshot(canvas);
        };
    }
    async captureFullSizeScreenshot() {
        const screenshot = await this.model.captureScreenshot(true);
        if (screenshot === null) {
            return;
        }
        return this.saveScreenshotBase64(screenshot);
    }
    async captureAreaScreenshot(clip) {
        const screenshot = await this.model.captureScreenshot(false, clip);
        if (screenshot === null) {
            return;
        }
        return this.saveScreenshotBase64(screenshot);
    }
    saveScreenshotBase64(screenshot) {
        const pageImage = new Image();
        pageImage.src = 'data:image/png;base64,' + screenshot;
        pageImage.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = pageImage.naturalWidth;
            // Cap the height to not hit the GPU limit.
            // https://crbug.com/1260828
            canvas.height = Math.min((1 << 14), Math.floor(pageImage.naturalHeight));
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error('Could not get 2d context for base64 screenshot.');
            }
            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(pageImage, 0, 0);
            this.saveScreenshot(canvas);
        };
    }
    paintImage(ctx, src, rect) {
        return new Promise(resolve => {
            const image = new Image();
            image.crossOrigin = 'Anonymous';
            image.srcset = src;
            image.onerror = () => resolve();
            image.onload = () => {
                ctx.drawImage(image, rect.left, rect.top, rect.width, rect.height);
                resolve();
            };
        });
    }
    saveScreenshot(canvas) {
        const url = this.model.inspectedURL();
        let fileName = '';
        if (url) {
            const withoutFragment = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.removeURLFragment(url);
            fileName = _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.StringUtilities.trimURL(withoutFragment);
        }
        const device = this.model.device();
        if (device && this.model.type() === _models_emulation_emulation_js__WEBPACK_IMPORTED_MODULE_4__.DeviceModeModel.Type.Device) {
            fileName += `(${device.title})`;
        }
        const link = document.createElement('a');
        link.download = fileName + '.png';
        canvas.toBlob(blob => {
            if (blob === null) {
                return;
            }
            link.href = URL.createObjectURL(blob);
            link.click();
        });
    }
}
class Ruler extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Widget.VBox {
    contentElementInternal;
    horizontal;
    scale;
    count;
    throttler;
    applyCallback;
    renderedScale;
    renderedZoomFactor;
    constructor(horizontal, applyCallback) {
        super();
        this.element.classList.add('device-mode-ruler');
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_6__.deviceModeRuler().track({ click: true })}`);
        this.contentElementInternal =
            this.element.createChild('div', 'device-mode-ruler-content').createChild('div', 'device-mode-ruler-inner');
        this.horizontal = horizontal;
        this.scale = 1;
        this.count = 0;
        this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(0);
        this.applyCallback = applyCallback;
    }
    render(scale) {
        this.scale = scale;
        void this.throttler.schedule(this.update.bind(this));
    }
    onResize() {
        void this.throttler.schedule(this.update.bind(this));
    }
    update() {
        const zoomFactor = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.ZoomManager.ZoomManager.instance().zoomFactor();
        const size = this.horizontal ? this.contentElementInternal.offsetWidth : this.contentElementInternal.offsetHeight;
        if (this.scale !== this.renderedScale || zoomFactor !== this.renderedZoomFactor) {
            this.contentElementInternal.removeChildren();
            this.count = 0;
            this.renderedScale = this.scale;
            this.renderedZoomFactor = zoomFactor;
        }
        const dipSize = size * zoomFactor / this.scale;
        const count = Math.ceil(dipSize / 5);
        let step = 1;
        if (this.scale < 0.8) {
            step = 2;
        }
        if (this.scale < 0.6) {
            step = 4;
        }
        if (this.scale < 0.4) {
            step = 8;
        }
        if (this.scale < 0.2) {
            step = 16;
        }
        if (this.scale < 0.1) {
            step = 32;
        }
        for (let i = count; i < this.count; i++) {
            if (!(i % step)) {
                const lastChild = this.contentElementInternal.lastChild;
                if (lastChild) {
                    lastChild.remove();
                }
            }
        }
        for (let i = this.count; i < count; i++) {
            if (i % step) {
                continue;
            }
            const marker = this.contentElementInternal.createChild('div', 'device-mode-ruler-marker');
            if (i) {
                if (this.horizontal) {
                    marker.style.left = (5 * i) * this.scale / zoomFactor + 'px';
                }
                else {
                    marker.style.top = (5 * i) * this.scale / zoomFactor + 'px';
                }
                if (!(i % 20)) {
                    const text = marker.createChild('div', 'device-mode-ruler-text');
                    text.textContent = String(i * 5);
                    text.addEventListener('click', this.onMarkerClick.bind(this, i * 5), false);
                }
            }
            if (!(i % 10)) {
                marker.classList.add('device-mode-ruler-marker-large');
            }
            else if (!(i % 5)) {
                marker.classList.add('device-mode-ruler-marker-medium');
            }
        }
        this.count = count;
        return Promise.resolve();
    }
    onMarkerClick(size) {
        this.applyCallback.call(null, size);
    }
}
//# sourceMappingURL=DeviceModeView.js.map

/***/ }),

/***/ "./panels/emulation/deviceModeView.css.legacy.js":
/*!*******************************************************!*\
  !*** ./panels/emulation/deviceModeView.css.legacy.js ***!
  \*******************************************************/
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

:host {
  overflow: hidden;
  align-items: stretch;
  flex: auto;
  background-color: var(--app-color-toolbar-background);
}

.device-mode-toolbar {
  flex: none;
  background-color: var(--app-color-toolbar-background);
  border-bottom: 1px solid var(--sys-color-divider);
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.device-mode-toolbar .toolbar {
  overflow: hidden;
  flex: 0 100000 auto;
  padding: 0 5px;
}

.device-mode-toolbar .toolbar.device-mode-toolbar-fixed-size {
  flex: 0 1 auto;
}

.device-mode-toolbar-options.toolbar {
  position: sticky;
  right: 0;
  flex: none;
}

.device-mode-toolbar-spacer {
  flex: 1 1 0;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.device-mode-content-clip {
  overflow: hidden;
  flex: auto;
}

.device-mode-media-container {
  flex: none;
  overflow: hidden;
  box-shadow: inset 0 -1px var(--sys-color-divider);
}

.device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-media-container {
  margin-bottom: 20px;
}

.device-mode-presets-container {
  flex: 0 0 20px;
  display: flex;
}

.device-mode-presets-container-inner {
  flex: auto;
  justify-content: center;
  position: relative;
  background-color: var(--sys-color-surface1);
  border-bottom: 1px solid var(--sys-color-divider);
}

.device-mode-presets-container:hover {
  transition: opacity 0.1s;
  transition-delay: 50ms;
  opacity: 100%;
}

.device-mode-preset-bar-outer {
  pointer-events: none;
  display: flex;
  justify-content: center;
}

.device-mode-preset-bar {
  border-left: 2px solid var(--sys-color-on-base-divider);
  border-right: 2px solid var(--sys-color-on-base-divider);
  pointer-events: auto;
  text-align: center;
  flex: none;
  color: var(--sys-color-on-surface);
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  margin-bottom: 1px;
}

.device-mode-preset-bar:hover {
  transition: background-color 0.1s;
  transition-delay: 50ms;
  background-color: var(--sys-color-state-hover-on-subtle);
}

.device-mode-preset-bar > span {
  visibility: hidden;
}

.device-mode-preset-bar:hover > span {
  transition: visibility 0.1s;
  transition-delay: 50ms;
  visibility: visible;
}

.device-mode-content-area {
  flex: auto;
  position: relative;
  margin: 0;
}

.device-mode-screen-area {
  position: absolute;
  left: 0;
  right: 0;
  width: 0;
  height: 0;
  background-color: var(--sys-color-inverse-surface);
}

.device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area {
  --override-screen-area-box-shadow: hsl(240deg 3% 84%) 0 0 0 0.5px, hsl(0deg 0% 80% / 40%) 0 0 20px;

  box-shadow: var(--override-screen-area-box-shadow);
}

.theme-with-dark-background .device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area,
:host-context(.theme-with-dark-background) .device-mode-content-clip:not(.device-mode-outline-visible) .device-mode-screen-area {
  --override-screen-area-box-shadow: rgb(40 40 42) 0 0 0 0.5px, rgb(51 51 51 / 40%) 0 0 20px;
}

.device-mode-screen-image {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.device-mode-resizer {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: background-color 0.1s ease, opacity 0.1s ease;
}

.device-mode-resizer:hover {
  background-color: var(--sys-color-state-hover-on-subtle);
  opacity: 100%;
}

.device-mode-resizer > div {
  pointer-events: none;
}

.device-mode-right-resizer {
  top: 0;
  bottom: -1px;
  right: -20px;
  width: 20px;
}

.device-mode-left-resizer {
  top: 0;
  bottom: -1px;
  left: -20px;
  width: 20px;
  opacity: 0%;
}

.device-mode-bottom-resizer {
  left: 0;
  right: -1px;
  bottom: -20px;
  height: 20px;
}

.device-mode-bottom-right-resizer {
  left: 0;
  top: 0;
  right: -20px;
  bottom: -20px;
  background-color: var(--sys-color-surface1);
}

.device-mode-bottom-left-resizer {
  left: -20px;
  top: 0;
  right: 0;
  bottom: -20px;
  opacity: 0%;
}

.device-mode-right-resizer > div {
  content: var(--image-file-resizeHorizontal);
  width: 6px;
  height: 26px;
}

.device-mode-left-resizer > div {
  content: var(--image-file-resizeHorizontal);
  width: 6px;
  height: 26px;
}

.device-mode-bottom-resizer > div {
  content: var(--image-file-resizeVertical);
  margin-bottom: -2px;
  width: 26px;
  height: 6px;
}

.device-mode-bottom-right-resizer > div {
  position: absolute;
  bottom: 3px;
  right: 3px;
  width: 13px;
  height: 13px;
  content: var(--image-file-resizeDiagonal);
}

.device-mode-bottom-left-resizer > div {
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 13px;
  height: 13px;
  content: var(--image-file-resizeDiagonal);
  transform: rotate(90deg);
}

.device-mode-page-area {
  position: absolute;
  left: 0;
  right: 0;
  width: 0;
  height: 0;
  display: flex;
  background-color: var(--sys-color-cdt-base-container);
}

.device-mode-ruler {
  position: absolute;
  overflow: visible;
}

.device-mode-ruler-top {
  height: 20px;
  right: 0;
}

.device-mode-ruler-left {
  width: 20px;
  bottom: 0;
}

.device-mode-ruler-content {
  pointer-events: none;
  position: absolute;
  left: -20px;
  top: -20px;
}

.device-mode-ruler-top .device-mode-ruler-content {
  border-top: 1px solid transparent;
  right: 0;
  bottom: 20px;
  background-color: var(--sys-color-cdt-base-container);
}

.device-mode-ruler-left .device-mode-ruler-content {
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  right: 20px;
  bottom: 0;
}

.device-mode-content-clip.device-mode-outline-visible .device-mode-ruler-top .device-mode-ruler-content {
  border-top: 1px solid var(--sys-color-token-subtle);
}

.device-mode-content-clip.device-mode-outline-visible .device-mode-ruler-left .device-mode-ruler-content {
  border-left: 1px solid var(--sys-color-token-subtle);
  border-top: 1px solid var(--sys-color-token-subtle);
}

.device-mode-ruler-inner {
  position: absolute;
}

.device-mode-ruler-top .device-mode-ruler-inner {
  top: 0;
  bottom: 0;
  left: 20px;
  right: 0;
  border-bottom: 1px solid var(--sys-color-token-subtle);
}

.device-mode-ruler-left .device-mode-ruler-inner {
  left: 0;
  right: 0;
  top: 19px;
  bottom: 0;
  border-right: 1px solid var(--sys-color-token-subtle);
  background-color: var(--sys-color-cdt-base-container);
}

.device-mode-ruler-marker {
  position: absolute;
}

.device-mode-ruler-top .device-mode-ruler-marker {
  width: 0;
  height: 5px;
  bottom: 0;
  border-right: 1px solid var(--sys-color-token-subtle);
  margin-right: -1px;
}

.device-mode-ruler-top .device-mode-ruler-marker.device-mode-ruler-marker-medium {
  height: 10px;
}

.device-mode-ruler-top .device-mode-ruler-marker.device-mode-ruler-marker-large {
  height: 15px;
}

.device-mode-ruler-left .device-mode-ruler-marker {
  height: 0;
  width: 5px;
  right: 0;
  border-bottom: 1px solid var(--sys-color-token-subtle);
  margin-bottom: -1px;
}

.device-mode-ruler-left .device-mode-ruler-marker.device-mode-ruler-marker-medium {
  width: 10px;
}

.device-mode-ruler-left .device-mode-ruler-marker.device-mode-ruler-marker-large {
  width: 15px;
}

.device-mode-ruler-text {
  color: var(--sys-color-token-subtle);
  position: relative;
  pointer-events: auto;
}

.device-mode-ruler-text:hover {
  color: var(--sys-color-on-surface);
}

.device-mode-ruler-top .device-mode-ruler-text {
  left: 2px;
  top: -2px;
}

.device-mode-ruler-left .device-mode-ruler-text {
  left: -4px;
  top: -15px;
  transform: rotate(270deg);
}

/*# sourceURL=deviceModeView.css */
`
});


/***/ })

}]);