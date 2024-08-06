"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["panels_lighthouse_LighthouseStatusView_js"], {
"./panels/lighthouse/LighthouseStatusView.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  StatusPhases: function() { return StatusPhases; },
  StatusView: function() { return StatusView; },
  fastFactRotationInterval: function() { return fastFactRotationInterval; },
  minimumTextVisibilityDuration: function() { return minimumTextVisibilityDuration; }
});
/* harmony import */var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./core/common/common.js");
/* harmony import */var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./core/i18n/i18n.js");
/* harmony import */var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./ui/legacy/legacy.js");
/* harmony import */var _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LighthouseController.js */ "./panels/lighthouse/LighthouseController.js");
/* harmony import */var _lighthouseDialog_css_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lighthouseDialog.css.js */ "./panels/lighthouse/lighthouseDialog.css.js");
// Copyright 2018 The Chromium Authors. All rights reserved.
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
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        '\n  <div class="lighthouse-view vbox">\n  <h2 $="status-header">Auditing your web page…</h2>\n  <div class="lighthouse-status vbox" $="status-view">\n  <div class="lighthouse-progress-wrapper" $="progress-wrapper">\n  <div class="lighthouse-progress-bar" $="progress-bar"></div>\n  </div>\n  <div class="lighthouse-status-text" $="status-text"></div>\n  </div>\n  ',
        "\n  </div>\n  "
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}





var UIStrings = {
    /**
     *@description Text to cancel something
     */ cancel: 'Cancel',
    /**
     *@description Text when something is loading
     */ loading: 'Loading…',
    /**
     *@description Status text in Lighthouse splash screen while an audit is being performed
     *@example {github.com} PH1
     */ auditingS: 'Auditing {PH1}',
    /**
     *@description Status text in Lighthouse splash screen while an audit is being performed
     */ auditingYourWebPage: 'Auditing your web page',
    /**
     *@description Status text in Lighthouse splash screen while an audit is being performed, and cancellation to take effect
     */ cancelling: 'Cancelling…',
    /**
     *@description Status text in Lighthouse splash screen while preparing for an audit
     */ lighthouseIsWarmingUp: '`Lighthouse` is warming up…',
    /**
     *@description Status text in Lighthouse splash screen while an audit is being performed
     */ lighthouseIsLoadingYourPage: '`Lighthouse` is loading your page',
    /**
     *@description Text in Lighthouse Status View
     *@example {75% of global mobile users in 2016 were on 2G or 3G [Source: GSMA Mobile]} PH1
     */ fastFactMessageWithPlaceholder: '💡 {PH1}',
    /**
     *@description Text of a DOM element in Lighthouse Status View
     */ ahSorryWeRanIntoAnError: 'Ah, sorry! We ran into an error.',
    /**
     *@description Text in Lighthouse Status View
     */ tryToNavigateToTheUrlInAFresh: 'Try to navigate to the URL in a fresh `Chrome` profile without any other tabs or extensions open and try again.',
    /**
     *@description Text of a DOM element in Lighthouse Status View
     */ ifThisIssueIsReproduciblePlease: 'If this issue is reproducible, please report it at the `Lighthouse` `GitHub` repo.',
    /**
     *@description Text in Lighthouse splash screen when loading the page for auditing
     */ lighthouseIsLoadingThePage: 'Lighthouse is loading the page.',
    /**
     *@description Text in Lighthouse splash screen when Lighthouse is gathering information for display
     */ lighthouseIsGatheringInformation: '`Lighthouse` is gathering information about the page to compute your score.',
    /**
     *@description Text in Lighthouse splash screen when Lighthouse is generating a report.
     */ almostThereLighthouseIsNow: 'Almost there! `Lighthouse` is now generating your report.',
    /**
     *@description Text in Lighthouse splash screen when loading the page for auditing
     */ lighthouseIsLoadingYourPageWith: '`Lighthouse` is loading your page with throttling to measure performance on a mobile device on 3G.',
    /**
     *@description Text in Lighthouse splash screen when loading the page for auditing
     */ lighthouseIsLoadingYourPageWithThrottling: '`Lighthouse` is loading your page with throttling to measure performance on a slow desktop on 3G.',
    /**
     *@description Text in Lighthouse splash screen when loading the page for auditing
     */ lighthouseIsLoadingYourPageWithMobile: '`Lighthouse` is loading your page with mobile emulation.',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ mbTakesAMinimumOfSecondsTo: '1MB takes a minimum of 5 seconds to download on a typical 3G connection [Source: `WebPageTest` and `DevTools` 3G definition].',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ rebuildingPinterestPagesFor: 'Rebuilding Pinterest pages for performance increased conversion rates by 15% [Source: `WPO Stats`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ byReducingTheResponseSizeOfJson: 'By reducing the response size of JSON needed for displaying comments, Instagram saw increased impressions [Source: `WPO Stats`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ walmartSawAIncreaseInRevenueFor: 'Walmart saw a 1% increase in revenue for every 100ms improvement in page load [Source: `WPO Stats`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ ifASiteTakesSecondToBecome: 'If a site takes >1 second to become interactive, users lose attention, and their perception of completing the page task is broken [Source: `Google Developers Blog`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ OfGlobalMobileUsersInWereOnGOrG: '75% of global mobile users in 2016 were on 2G or 3G [Source: `GSMA Mobile`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ theAverageUserDeviceCostsLess: 'The average user device costs less than 200 USD. [Source: `International Data Corporation`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ SecondsIsTheAverageTimeAMobile: '19 seconds is the average time a mobile web page takes to load on a 3G connection [Source: `Google DoubleClick blog`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ OfMobilePagesTakeNearlySeconds: '70% of mobile pages take nearly 7 seconds for the visual content above the fold to display on the screen. [Source: `Think with Google`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ asPageLoadTimeIncreasesFromOne: 'As page load time increases from one second to seven seconds, the probability of a mobile site visitor bouncing increases 113%. [Source: `Think with Google`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ asTheNumberOfElementsOnAPage: 'As the number of elements on a page increases from 400 to 6,000, the probability of conversion drops 95%. [Source: `Think with Google`]',
    /**
     *@description Fast fact in the splash screen while Lighthouse is performing an audit
     */ lighthouseOnlySimulatesMobile: '`Lighthouse` only simulates mobile performance; to measure performance on a real device, try WebPageTest.org [Source: `Lighthouse` team]'
};
var str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/lighthouse/LighthouseStatusView.ts', UIStrings);
var i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
var i18nLazyString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLazilyComputedLocalizedString.bind(undefined, str_);
var StatusView = /*#__PURE__*/ function() {
    "use strict";
    function StatusView(panel) {
        _class_call_check(this, StatusView);
        _define_property(this, "panel", void 0);
        _define_property(this, "statusView", void 0);
        _define_property(this, "statusHeader", void 0);
        _define_property(this, "progressWrapper", void 0);
        _define_property(this, "progressBar", void 0);
        _define_property(this, "statusText", void 0);
        _define_property(this, "cancelButton", void 0);
        _define_property(this, "inspectedURL", void 0);
        _define_property(this, "textChangedAt", void 0);
        _define_property(this, "fastFactsQueued", void 0);
        _define_property(this, "currentPhase", void 0);
        _define_property(this, "scheduledFastFactTimeout", void 0);
        _define_property(this, "dialog", void 0);
        this.panel = panel;
        this.statusView = null;
        this.statusHeader = null;
        this.progressWrapper = null;
        this.progressBar = null;
        this.statusText = null;
        this.cancelButton = null;
        this.inspectedURL = '';
        this.textChangedAt = 0;
        this.fastFactsQueued = FastFacts.map(function(lazyString) {
            return lazyString();
        });
        this.currentPhase = null;
        this.scheduledFastFactTimeout = null;
        this.dialog = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Dialog.Dialog();
        this.dialog.setDimmed(true);
        this.dialog.setCloseOnEscape(false);
        this.dialog.setOutsideClickCallback(function(event) {
            return event.consume(true);
        });
        this.render();
    }
    _create_class(StatusView, [
        {
            key: "render",
            value: function render() {
                var dialogRoot = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createShadowRootWithCoreStyles(this.dialog.contentElement, {
                    cssFile: [
                        _lighthouseDialog_css_js__WEBPACK_IMPORTED_MODULE_4__["default"]
                    ],
                    delegatesFocus: undefined
                });
                var lighthouseViewElement = dialogRoot.createChild('div', 'lighthouse-view vbox');
                var cancelButton = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextButton(i18nString(UIStrings.cancel), this.cancel.bind(this), {
                    jslogContext: 'lighthouse.cancel'
                });
                var fragment = _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Fragment.Fragment.build(_templateObject(), cancelButton);
                lighthouseViewElement.appendChild(fragment.element());
                this.statusView = fragment.$('status-view');
                this.statusHeader = fragment.$('status-header');
                this.progressWrapper = fragment.$('progress-wrapper');
                this.progressBar = fragment.$('progress-bar');
                this.statusText = fragment.$('status-text');
                // Use StatusPhases array index as progress bar value
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsProgressBar(this.progressBar, 0, StatusPhases.length - 1);
                this.cancelButton = cancelButton;
                _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.markAsStatus(this.statusText);
                this.dialog.setDefaultFocusedElement(cancelButton);
                this.dialog.setSizeBehavior("SetExactWidthMaxHeight" /* UI.GlassPane.SizeBehavior.SetExactWidthMaxHeight */ );
                this.dialog.setMaxContentSize(new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.Geometry.Size(500, 400));
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.resetProgressBarClasses();
                clearTimeout(this.scheduledFastFactTimeout);
                this.textChangedAt = 0;
                this.fastFactsQueued = FastFacts.map(function(lazyString) {
                    return lazyString();
                });
                this.currentPhase = null;
                this.scheduledFastFactTimeout = null;
            }
        },
        {
            key: "show",
            value: function show(dialogRenderElement) {
                this.reset();
                this.updateStatus(i18nString(UIStrings.loading));
                var parsedURL = _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ParsedURL.ParsedURL.fromString(this.inspectedURL);
                var pageHost = parsedURL && parsedURL.host;
                var statusHeader = pageHost ? i18nString(UIStrings.auditingS, {
                    PH1: pageHost
                }) : i18nString(UIStrings.auditingYourWebPage);
                this.renderStatusHeader(statusHeader);
                // @ts-ignore TS expects Document, but gets Element (show takes Element|Document)
                this.dialog.show(dialogRenderElement);
            }
        },
        {
            key: "renderStatusHeader",
            value: function renderStatusHeader(statusHeader) {
                if (this.statusHeader) {
                    this.statusHeader.textContent = "".concat(statusHeader, "…");
                }
            }
        },
        {
            key: "hide",
            value: function hide() {
                if (this.dialog.isShowing()) {
                    this.dialog.hide();
                }
            }
        },
        {
            key: "setInspectedURL",
            value: function setInspectedURL() {
                var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
                this.inspectedURL = url;
            }
        },
        {
            key: "updateStatus",
            value: function updateStatus(message) {
                if (!message || !this.statusText) {
                    return;
                }
                if (message.startsWith('Cancel')) {
                    this.commitTextChange(i18nString(UIStrings.cancelling));
                    clearTimeout(this.scheduledFastFactTimeout);
                    return;
                }
                var nextPhase = this.getPhaseForMessage(message);
                if (!nextPhase && !this.currentPhase) {
                    this.commitTextChange(i18nString(UIStrings.lighthouseIsWarmingUp));
                    clearTimeout(this.scheduledFastFactTimeout);
                } else if (nextPhase) {
                    this.currentPhase = nextPhase;
                    var text = this.getMessageForPhase(nextPhase);
                    this.commitTextChange(text);
                    this.scheduleFastFactCheck();
                    this.resetProgressBarClasses();
                    if (this.progressBar) {
                        this.progressBar.classList.add(nextPhase.progressBarClass);
                        // @ts-ignore indexOf null is valid.
                        var nextPhaseIndex = StatusPhases.indexOf(nextPhase);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.ARIAUtils.setProgressBarValue(this.progressBar, nextPhaseIndex, text);
                    }
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                void this.panel.handleRunCancel();
            }
        },
        {
            key: "getMessageForPhase",
            value: function getMessageForPhase(phase) {
                if (phase.message()) {
                    return phase.message();
                }
                var deviceTypeSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(function(item) {
                    return item.setting.name === 'lighthouse.device-type';
                });
                var throttleSetting = _LighthouseController_js__WEBPACK_IMPORTED_MODULE_3__.RuntimeSettings.find(function(item) {
                    return item.setting.name === 'lighthouse.throttling';
                });
                var deviceType = deviceTypeSetting ? deviceTypeSetting.setting.get() : '';
                var throttling = throttleSetting ? throttleSetting.setting.get() : '';
                var match = LoadingMessages.find(function(item) {
                    return item.deviceType === deviceType && item.throttling === throttling;
                });
                return match ? match.message() : i18nString(UIStrings.lighthouseIsLoadingYourPage);
            }
        },
        {
            key: "getPhaseForMessage",
            value: function getPhaseForMessage(message) {
                return StatusPhases.find(function(phase) {
                    return phase.statusMessageRegex.test(message);
                }) || null;
            }
        },
        {
            key: "resetProgressBarClasses",
            value: function resetProgressBarClasses() {
                if (this.progressBar) {
                    this.progressBar.className = 'lighthouse-progress-bar';
                }
            }
        },
        {
            key: "scheduleFastFactCheck",
            value: function scheduleFastFactCheck() {
                var _this = this;
                if (!this.currentPhase || this.scheduledFastFactTimeout) {
                    return;
                }
                this.scheduledFastFactTimeout = window.setTimeout(function() {
                    _this.updateFastFactIfNecessary();
                    _this.scheduledFastFactTimeout = null;
                    _this.scheduleFastFactCheck();
                }, 100);
            }
        },
        {
            key: "updateFastFactIfNecessary",
            value: function updateFastFactIfNecessary() {
                var now = performance.now();
                if (now - this.textChangedAt < fastFactRotationInterval) {
                    return;
                }
                if (!this.fastFactsQueued.length) {
                    return;
                }
                var fastFactIndex = Math.floor(Math.random() * this.fastFactsQueued.length);
                this.commitTextChange(i18nString(UIStrings.fastFactMessageWithPlaceholder, {
                    PH1: this.fastFactsQueued[fastFactIndex]
                }));
                this.fastFactsQueued.splice(fastFactIndex, 1);
            }
        },
        {
            key: "commitTextChange",
            value: function commitTextChange(text) {
                if (!this.statusText) {
                    return;
                }
                this.textChangedAt = performance.now();
                this.statusText.textContent = text;
            }
        },
        {
            key: "renderBugReport",
            value: function renderBugReport(err) {
                console.error(err);
                if (this.scheduledFastFactTimeout) {
                    window.clearTimeout(this.scheduledFastFactTimeout);
                }
                this.resetProgressBarClasses();
                if (this.progressBar) {
                    this.progressBar.classList.add('errored');
                }
                if (this.statusText) {
                    this.commitTextChange('');
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(this.statusText.createChild('p'), i18nString(UIStrings.ahSorryWeRanIntoAnError));
                    if (KnownBugPatterns.some(function(pattern) {
                        return pattern.test(err.message);
                    })) {
                        var message = i18nString(UIStrings.tryToNavigateToTheUrlInAFresh);
                        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(this.statusText.createChild('p'), message);
                    } else {
                        this.renderBugReportBody(err, this.inspectedURL);
                    }
                }
            }
        },
        {
            key: "renderText",
            value: function renderText(statusHeader, text) {
                this.renderStatusHeader(statusHeader);
                this.commitTextChange(text);
            }
        },
        {
            key: "toggleCancelButton",
            value: function toggleCancelButton(show) {
                if (this.cancelButton) {
                    this.cancelButton.style.visibility = show ? 'visible' : 'hidden';
                }
            }
        },
        {
            key: "renderBugReportBody",
            value: function renderBugReportBody(err, auditURL) {
                var chromeVersion = navigator.userAgent.match(/Chrome\/(\S+)/) || [
                    '',
                    'Unknown'
                ];
                // @ts-ignore Lighthouse sets `friendlyMessage` on certain
                // important errors such as PROTOCOL_TIMEOUT.
                var errorMessage = err.friendlyMessage || err.message;
                var issueBody = "\n".concat(errorMessage, "\n```\nChannel: DevTools\nInitial URL: ").concat(auditURL, "\nChrome Version: ").concat(chromeVersion[1], "\nStack Trace: ").concat(err.stack, "\n```\n");
                if (this.statusText) {
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(this.statusText.createChild('p'), i18nString(UIStrings.ifThisIssueIsReproduciblePlease));
                    _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_2__.UIUtils.createTextChild(this.statusText.createChild('code', 'monospace'), issueBody.trim());
                }
            }
        }
    ]);
    return StatusView;
}();
var fastFactRotationInterval = 6000;
var minimumTextVisibilityDuration = 3000;
var KnownBugPatterns = [
    /PARSING_PROBLEM/,
    /DOCUMENT_REQUEST/,
    /READ_FAILED/,
    /TRACING_ALREADY_STARTED/,
    /^You must provide a url to the runner/,
    /^You probably have multiple tabs open/
];
var StatusPhases = [
    {
        id: 'loading',
        progressBarClass: 'loading',
        message: i18nLazyString(UIStrings.lighthouseIsLoadingThePage),
        statusMessageRegex: /^(Navigating to)/
    },
    {
        id: 'gathering',
        progressBarClass: 'gathering',
        message: i18nLazyString(UIStrings.lighthouseIsGatheringInformation),
        statusMessageRegex: /(Gather|artifact)/i
    },
    {
        id: 'auditing',
        progressBarClass: 'auditing',
        message: i18nLazyString(UIStrings.almostThereLighthouseIsNow),
        statusMessageRegex: /^Audit/
    }
];
var LoadingMessages = [
    {
        deviceType: 'mobile',
        throttling: 'on',
        message: i18nLazyString(UIStrings.lighthouseIsLoadingYourPageWith)
    },
    {
        deviceType: 'desktop',
        throttling: 'on',
        message: i18nLazyString(UIStrings.lighthouseIsLoadingYourPageWithThrottling)
    },
    {
        deviceType: 'mobile',
        throttling: 'off',
        message: i18nLazyString(UIStrings.lighthouseIsLoadingYourPageWithMobile)
    },
    {
        deviceType: 'desktop',
        throttling: 'off',
        message: i18nLazyString(UIStrings.lighthouseIsLoadingThePage)
    }
];
var FastFacts = [
    i18nLazyString(UIStrings.mbTakesAMinimumOfSecondsTo),
    i18nLazyString(UIStrings.rebuildingPinterestPagesFor),
    i18nLazyString(UIStrings.byReducingTheResponseSizeOfJson),
    i18nLazyString(UIStrings.walmartSawAIncreaseInRevenueFor),
    i18nLazyString(UIStrings.ifASiteTakesSecondToBecome),
    i18nLazyString(UIStrings.OfGlobalMobileUsersInWereOnGOrG),
    i18nLazyString(UIStrings.theAverageUserDeviceCostsLess),
    i18nLazyString(UIStrings.SecondsIsTheAverageTimeAMobile),
    i18nLazyString(UIStrings.OfMobilePagesTakeNearlySeconds),
    i18nLazyString(UIStrings.asPageLoadTimeIncreasesFromOne),
    i18nLazyString(UIStrings.asTheNumberOfElementsOnAPage),
    i18nLazyString(UIStrings.OfMobilePagesTakeNearlySeconds),
    i18nLazyString(UIStrings.lighthouseOnlySimulatesMobile)
]; //# sourceMappingURL=LighthouseStatusView.js.map


}),
"./panels/lighthouse/lighthouseDialog.css.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; }
});
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */ var styles = new CSSStyleSheet();
styles.replaceSync("/*\n * Copyright 2017 The Chromium Authors. All rights reserved.\n * Use of this source code is governed by a BSD-style license that can be\n * found in the LICENSE file.\n */\n\n.lighthouse-view {\n  --view-horizontal-margin: 20px;\n\n  margin: 7px var(--view-horizontal-margin);\n  flex: auto;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n}\n\n.lighthouse-view h2 {\n  color: var(--sys-color-on-surface);\n  font-weight: bold;\n  font-size: 14px;\n  flex: none;\n  width: 100%;\n  text-align: left;\n}\n\n.lighthouse-view button {\n  z-index: 10;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n.lighthouse-status {\n  width: 100%;\n  flex: auto;\n  align-items: center;\n  color: var(--sys-color-on-surface);\n}\n\n.lighthouse-status-text {\n  text-align: center;\n  min-height: 50px;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  max-width: 100%;\n}\n\n.lighthouse-status-text code {\n  user-select: text;\n  text-align: left;\n  white-space: pre-wrap;\n  overflow: auto;\n}\n\n.lighthouse-progress-wrapper {\n  width: calc(100% + 2 * var(--view-horizontal-margin));\n  height: 2px;\n  background-color: var(--sys-color-neutral-outline);\n  position: relative;\n  margin: 10px;\n}\n\n.lighthouse-progress-bar {\n  width: 0%;\n  height: 100%;\n  background: var(--sys-color-primary-bright);\n  position: absolute;\n  transform-origin: left;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-out;\n\n  --progress-bar-loading-duration: 45s;\n  --progress-bar-gathering-duration: 12s;\n  --progress-bar-gathering-percent: 70%;\n  --progress-bar-auditing-duration: 5s;\n  --progress-bar-auditing-percent: 95%;\n}\n\n.lighthouse-progress-bar.errored {\n  width: 100%;\n  background: #e50303; /* stylelint-disable-line plugin/use_theme_colors */\n  /* See: crbug.com/1152736 for color variable migration. */\n}\n\n.lighthouse-progress-bar.loading {\n  animation-duration: var(--progress-bar-loading-duration);\n  animation-name: progressBarLoading;\n}\n\n@keyframes progressBarLoading {\n  0% { width: 0%; }\n  100% { width: var(--progress-bar-gathering-percent); }\n}\n\n.lighthouse-progress-bar.gathering {\n  animation-duration: var(--progress-bar-gathering-duration);\n  animation-name: progressBarGathering;\n}\n\n@keyframes progressBarGathering {\n  0% { width: var(--progress-bar-gathering-percent); }\n  100% { width: var(--progress-bar-auditing-percent); }\n}\n\n.lighthouse-progress-bar.auditing {\n  animation-duration: var(--progress-bar-auditing-duration);\n  animation-name: progressBarAuditing;\n}\n\n@keyframes progressBarAuditing {\n  0% { width: var(--progress-bar-auditing-percent); }\n  100% { width: 99%; }\n}\n\n.lighthouse-report-error {\n  display: block;\n  margin-top: 5px;\n}\n\n.lighthouse-action-buttons {\n  align-self: end;\n  column-gap: var(--sys-size-6);\n}\n\n/*# sourceURL=lighthouseDialog.css */\n");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);


}),

}]);