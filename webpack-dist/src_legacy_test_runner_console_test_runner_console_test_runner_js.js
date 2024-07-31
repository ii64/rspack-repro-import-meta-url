"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_legacy_test_runner_console_test_runner_console_test_runner_js"],{

/***/ "./src/panels/console_counters/WarningErrorCounter.ts":
/*!************************************************************!*\
  !*** ./src/panels/console_counters/WarningErrorCounter.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningErrorCounter: () => (/* binding */ WarningErrorCounter)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/issues_manager/issues_manager.js */ "./src/models/issues_manager/issues_manager.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/components/issue_counter/issue_counter.js */ "./src/ui/components/issue_counter/issue_counter.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









const UIStrings = {
    /**
     *@description The console error count in the Warning Error Counter shown in the main toolbar (top-left in DevTools). The error count refers to the number of errors currently present in the JavaScript console.
     */
    sErrors: '{n, plural, =1 {# error} other {# errors}}',
    /**
     *@description The console warning count in the Warning Error Counter shown in the main toolbar (top-left in DevTools). The warning count refers to the number of warnings currently present in the JavaScript console.
     */
    sWarnings: '{n, plural, =1 {# warning} other {# warnings}}',
    /**
     *@description Tooltip shown for a main toolbar button that opens the Console panel
     *@example {2 errors, 1 warning} PH1
     */
    openConsoleToViewS: 'Open Console to view {PH1}',
    /**
     *@description Title for the issues count in the Issues Error Counter shown in the main toolbar (top-left in DevTools). The issues count refers to the number of issues in the issues tab.
     */
    openIssuesToView: '{n, plural, =1 {Open Issues to view # issue:} other {Open Issues to view # issues:}}',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/console_counters/WarningErrorCounter.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
let warningErrorCounterInstance;
class WarningErrorCounter {
    constructor() {
        Object.defineProperty(this, "toolbarItem", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "consoleCounter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "issueCounter", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "throttler", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "updatingForTest", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        WarningErrorCounter.instanceForTest = this;
        const countersWrapper = document.createElement('div');
        this.toolbarItem = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItemWithCompactLayout(countersWrapper);
        this.toolbarItem.setVisible(false);
        this.toolbarItem.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Toolbar.ToolbarItemWithCompactLayoutEvents.CompactLayoutUpdated, this.onSetCompactLayout, this);
        this.consoleCounter = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_5__.IconButton.IconButton();
        this.consoleCounter.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.counter('console').track({ click: true })}`);
        countersWrapper.appendChild(this.consoleCounter);
        this.consoleCounter.data = {
            clickHandler: _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance().show.bind(_core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Console.Console.instance()),
            groups: [
                { iconName: 'cross-circle-filled', iconColor: 'var(--icon-error)', iconHeight: '14px', iconWidth: '14px' },
                { iconName: 'warning-filled', iconColor: 'var(--icon-warning)', iconHeight: '14px', iconWidth: '14px' },
            ],
        };
        const issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssuesManager.instance();
        this.issueCounter = new _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.IssueCounter();
        this.issueCounter.classList.add('main-toolbar');
        this.issueCounter.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_8__.counter('issue').track({ click: true })}`);
        countersWrapper.appendChild(this.issueCounter);
        this.issueCounter.data = {
            clickHandler: () => {
                _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.userMetrics.issuesPanelOpenedFrom(_core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.UserMetrics.IssueOpener.StatusBarIssuesCounter);
                void _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.ViewManager.ViewManager.instance().showView('issues-pane');
            },
            issuesManager,
            displayMode: _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.DisplayMode.OnlyMostImportant,
        };
        this.throttler = new _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.Throttler.Throttler(100);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.ConsoleCleared, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.MessageAdded, this.update, this);
        _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.TargetManager.TargetManager.instance().addModelListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel, _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.Events.MessageUpdated, this.update, this);
        issuesManager.addEventListener(_models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.Events.IssuesCountUpdated, this.update, this);
        this.update();
    }
    onSetCompactLayout(event) {
        this.setCompactLayout(event.data);
    }
    setCompactLayout(enable) {
        this.consoleCounter.data = { ...this.consoleCounter.data, compact: enable };
        this.issueCounter.data = { ...this.issueCounter.data, compact: enable };
    }
    static instance(opts = { forceNew: null }) {
        const { forceNew } = opts;
        if (!warningErrorCounterInstance || forceNew) {
            warningErrorCounterInstance = new WarningErrorCounter();
        }
        return warningErrorCounterInstance;
    }
    updatedForTest() {
        // Sniffed in tests.
    }
    update() {
        this.updatingForTest = true;
        void this.throttler.schedule(this.updateThrottled.bind(this));
    }
    get titlesForTesting() {
        const button = this.consoleCounter.shadowRoot?.querySelector('button');
        return button ? button.getAttribute('aria-label') : null;
    }
    async updateThrottled() {
        const errors = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel.allErrors();
        const warnings = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_3__.ConsoleModel.ConsoleModel.allWarnings();
        const issuesManager = _models_issues_manager_issues_manager_js__WEBPACK_IMPORTED_MODULE_4__.IssuesManager.IssuesManager.instance();
        const issues = issuesManager.numberOfIssues();
        const countToText = (c) => c === 0 ? undefined : `${c}`;
        /* Update consoleCounter items. */
        const errorCountTitle = i18nString(UIStrings.sErrors, { n: errors });
        const warningCountTitle = i18nString(UIStrings.sWarnings, { n: warnings });
        const newConsoleTexts = [countToText(errors), countToText(warnings)];
        let consoleSummary = '';
        if (errors && warnings) {
            consoleSummary = `${errorCountTitle}, ${warningCountTitle}`;
        }
        else if (errors) {
            consoleSummary = errorCountTitle;
        }
        else if (warnings) {
            consoleSummary = warningCountTitle;
        }
        const consoleTitle = i18nString(UIStrings.openConsoleToViewS, { PH1: consoleSummary });
        const previousData = this.consoleCounter.data;
        this.consoleCounter.data = {
            ...previousData,
            groups: previousData.groups.map((g, i) => ({ ...g, text: newConsoleTexts[i] })),
            accessibleName: consoleTitle,
        };
        // TODO(chromium:1167711): Let the component handle the title and ARIA label.
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.consoleCounter, consoleTitle);
        this.consoleCounter.classList.toggle('hidden', !(errors || warnings));
        /* Update issuesCounter items. */
        const issueEnumeration = _ui_components_issue_counter_issue_counter_js__WEBPACK_IMPORTED_MODULE_6__.IssueCounter.getIssueCountsEnumeration(issuesManager);
        const issuesTitleLead = i18nString(UIStrings.openIssuesToView, { n: issues });
        const issuesTitle = `${issuesTitleLead} ${issueEnumeration}`;
        // TODO(chromium:1167711): Let the component handle the title and ARIA label.
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.Tooltip.Tooltip.install(this.issueCounter, issuesTitle);
        this.issueCounter.data = {
            ...this.issueCounter.data,
            accessibleName: issuesTitle,
        };
        this.issueCounter.classList.toggle('hidden', !issues);
        this.toolbarItem.setVisible(Boolean(errors || warnings || issues));
        _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_7__.InspectorView.InspectorView.instance().toolbarItemResized();
        this.updatingForTest = false;
        this.updatedForTest();
        return;
    }
    item() {
        return this.toolbarItem;
    }
}
Object.defineProperty(WarningErrorCounter, "instanceForTest", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: null
});


/***/ }),

/***/ "./src/panels/console_counters/console_counters.ts":
/*!*********************************************************!*\
  !*** ./src/panels/console_counters/console_counters.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WarningErrorCounter: () => (/* reexport module object */ _WarningErrorCounter_js__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var _WarningErrorCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WarningErrorCounter.js */ "./src/panels/console_counters/WarningErrorCounter.ts");
// Copyright 2019 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.




/***/ }),

/***/ "./src/legacy_test_runner/console_test_runner/console_test_runner.js":
/*!***************************************************************************!*\
  !*** ./src/legacy_test_runner/console_test_runner/console_test_runner.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsoleTestRunner: () => (/* binding */ ConsoleTestRunner)
/* harmony export */ });
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panels/console/console.js */ "./src/panels/console/console.ts");
/* harmony import */ var _panels_console_counters_console_counters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panels/console_counters/console_counters.js */ "./src/panels/console_counters/console_counters.ts");
/* harmony import */ var _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/legacy/components/object_ui/object_ui.js */ "./src/ui/legacy/components/object_ui/object_ui.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../test_runner/test_runner.js */ "./src/legacy_test_runner/test_runner/test_runner.js");
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.









/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */

const ConsoleTestRunner = {};

/** @typedef {function(!Element, !SDK.ConsoleModel.ConsoleMessage=):string} */
ConsoleTestRunner.Formatter;

/**
 * @param {boolean=} printOriginatingCommand
 * @param {boolean=} dumpClassNames
 * @param {!ConsoleTestRunner.Formatter=} formatter
 */
ConsoleTestRunner.dumpConsoleMessages = async function(printOriginatingCommand, dumpClassNames, formatter) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResults(
      await ConsoleTestRunner.dumpConsoleMessagesIntoArray(printOriginatingCommand, dumpClassNames, formatter));
};

/**
 * @param {boolean=} printOriginatingCommand
 * @param {boolean=} dumpClassNames
 * @param {!ConsoleTestRunner.Formatter=} formatter
 * @return {!Promise<!Array<string>>}
 */
ConsoleTestRunner.dumpConsoleMessagesIntoArray = async function(printOriginatingCommand, dumpClassNames, formatter) {
  formatter = formatter || ConsoleTestRunner.prepareConsoleMessageText;
  const result = [];
  const consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
  const originalViewportStyle = consoleView.viewport.element.style;
  const originalSize = {width: originalViewportStyle.width, height: originalViewportStyle.height};
  ConsoleTestRunner.disableConsoleViewport();
  if (consoleView.needsFullUpdate) {
    consoleView.updateMessageList();
  }
  const viewMessages = consoleView.visibleViewMessages;
  for (let i = 0; i < viewMessages.length; ++i) {
    const uiMessage = viewMessages[i];
    const message = uiMessage.consoleMessage();
    const element = uiMessage.element();
    // Retrieving the message element triggered rendering, now wait for
    // the live location within to be resolved initially.
    await uiMessage.formatErrorStackPromiseForTest();
    await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates();

    let classNames;
    if (dumpClassNames) {
      classNames = [''];
      for (let node = element.firstChild; node; node = node.traverseNextNode(element)) {
        if (node.nodeType === Node.ELEMENT_NODE && node.className) {
          let depth = 0;
          let depthTest = node;
          while (depthTest !== element) {
            if (depthTest.nodeType === Node.ELEMENT_NODE && depthTest.className) {
              depth++;
            }
            depthTest = depthTest.parentNodeOrShadowHost();
          }
          classNames.push(
              '  '.repeat(depth) +
              node.className.replace('platform-linux', 'platform-*')
                  .replace('platform-mac', 'platform-*')
                  .replace('platform-windows', 'platform-*'));
        }
      }
    }

    if (ConsoleTestRunner.dumpConsoleTableMessage(uiMessage, false, result)) {
      if (dumpClassNames) {
        result.push(classNames.join('\n'));
      }
    } else {
      let messageText = formatter(element, message);
      messageText = messageText.replace(/VM\d+/g, 'VM');
      result.push(messageText + (dumpClassNames ? ' ' + classNames.join('\n') : ''));
    }

    if (printOriginatingCommand && uiMessage.consoleMessage().originatingMessage()) {
      result.push('Originating from: ' + uiMessage.consoleMessage().originatingMessage().messageText);
    }
  }
  consoleView.viewport.element.style.width = originalSize.width;
  consoleView.viewport.element.style.height = originalSize.height;
  return result;
};

/**
 * @param {!Element} messageElement
 * @return {string}
 */
ConsoleTestRunner.prepareConsoleMessageText = function(messageElement) {
  let messageText = messageElement.deepTextContent().replace(/\u200b/g, '');
  // Replace scriptIds with generic scriptId string to avoid flakiness.
  messageText = messageText.replace(/VM\d+/g, 'VM');
  // Remove line and column of evaluate method.
  messageText = messageText.replace(/(at eval \(eval at evaluate) \(:\d+:\d+\)/, '$1');

  if (messageText.startsWith('Navigated to')) {
    const fileName = messageText.split(' ').pop().split('/').pop();
    messageText = 'Navigated to ' + fileName;
  }
  // The message might be extremely long in case of dumping stack overflow message.
  messageText = messageText.substring(0, 1024);
  return messageText;
};

/**
 * @param {!Element} messageElement
 * @return {string}
 */
ConsoleTestRunner.prepareConsoleMessageTextTrimmed = function(messageElement) {
  return ConsoleTestRunner.prepareConsoleMessageText(messageElement).replace(/[ ]+/g, ' ');
};

/**
 * @param {!Console.ConsoleViewMessage.ConsoleViewMessage} viewMessage
 * @param {boolean} forceInvalidate
 * @param {!Array<string>} results
 * @return {boolean}
 */
ConsoleTestRunner.dumpConsoleTableMessage = function(viewMessage, forceInvalidate, results) {
  if (forceInvalidate) {
    _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().viewport.invalidate();
  }
  const formattedTable = viewMessage.element().querySelector('.console-message-formatted-table');
  if (!formattedTable) {
    return false;
  }
  const table = formattedTable.querySelector('span').shadowRoot;
  const headers = table.querySelectorAll('th > div:first-child');
  if (!headers.length) {
    return false;
  }

  let headerLine = '';
  for (let i = 0; i < headers.length; i++) {
    headerLine += headers[i].textContent + ' | ';
  }

  addResult('HEADER ' + headerLine);

  const rows = table.querySelectorAll('.data-container tr');

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    let rowLine = '';
    const items = row.querySelectorAll('td > span');
    for (let j = 0; j < items.length; j++) {
      rowLine += items[j].textContent + ' | ';
    }

    if (rowLine.trim()) {
      addResult('ROW ' + rowLine);
    }
  }

  /**
   * @param {string} x
   */
  function addResult(x) {
    if (results) {
      results.push(x);
    } else {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(x);
    }
  }

  return true;
};

ConsoleTestRunner.disableConsoleViewport = function() {
  ConsoleTestRunner.fixConsoleViewportDimensions(600, 2000);
};

/**
 * @param {number} width
 * @param {number} height
 */
ConsoleTestRunner.fixConsoleViewportDimensions = function(width, height) {
  const viewport = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().viewport;
  viewport.element.style.width = width + 'px';
  viewport.element.style.height = height + 'px';
  viewport.element.style.position = 'absolute';
  viewport.invalidate();
};

ConsoleTestRunner.selectMainExecutionContext = function() {
  const executionContexts = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.runtimeModel.executionContexts();
  for (const context of executionContexts) {
    if (context.isDefault) {
      _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, context);
      return;
    }
  }
};

/**
 * @param {string} code
 * @param {!Function=} callback
 * @param {boolean=} dontForceMainContext
 */
ConsoleTestRunner.evaluateInConsole = function(code, callback, dontForceMainContext) {
  if (!dontForceMainContext) {
    ConsoleTestRunner.selectMainExecutionContext();
  }
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.safeWrap(callback);

  const consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
  consoleView.prompt.appendCommand(code, true);
  ConsoleTestRunner.addConsoleViewSniffer(function(commandResult) {
    const element = commandResult.toMessageElement();
    // Only call the callback once the live location within the
    // message element is resolved initially.
    Promise
        .all([
          commandResult.formatErrorStackPromiseForTest(),
          _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates(),
        ])
        .then(() => {
          callback(element.deepTextContent());
        });
  });
};

/**
 * @param {string} code
 * @param {boolean=} dontForceMainContext
 * @return {!Promise}
 */
ConsoleTestRunner.evaluateInConsolePromise = function(code, dontForceMainContext) {
  return new Promise(fulfill => ConsoleTestRunner.evaluateInConsole(code, fulfill, dontForceMainContext));
};

/**
 * @param {!Function} override
 * @param {boolean=} opt_sticky
 */
ConsoleTestRunner.addConsoleViewSniffer = function(override, opt_sticky) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.prototype, 'consoleMessageAddedForTest', override, opt_sticky);
};

ConsoleTestRunner.waitForPendingViewportUpdates = async function() {
  const refreshPromise = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().scheduledRefreshPromiseForTest || Promise.resolve();
  await refreshPromise;
};

/**
 * @param {string} code
 * @param {!Function=} callback
 * @param {boolean=} dontForceMainContext
 */
ConsoleTestRunner.evaluateInConsoleAndDump = function(code, callback, dontForceMainContext) {
  callback = _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.safeWrap(callback);
  /**
   * @param {string} text
   */
  function mycallback(text) {
    text = text.replace(/\bVM\d+/g, 'VM');
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(code + ' = ' + text);
    callback(text);
  }
  ConsoleTestRunner.evaluateInConsole(code, mycallback, dontForceMainContext);
};

/**
 * @param {string} code
 * @param {boolean=} dontForceMainContext
 * @return {!Promise}
 */
ConsoleTestRunner.evaluateInConsoleAndDumpPromise = function(code, dontForceMainContext) {
  return new Promise(fulfill => ConsoleTestRunner.evaluateInConsoleAndDump(code, fulfill, dontForceMainContext));
};

/**
 * @return {number}
 */
ConsoleTestRunner.consoleMessagesCount = function() {
  const consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
  return consoleView.consoleMessages.length;
};

/**
 * @param {function(!Element):string|undefined} messageFormatter
 * @param {!Element} node
 * @return {string}
 */
ConsoleTestRunner.formatterIgnoreStackFrameUrls = function(messageFormatter, node) {
  /**
   * @param {string} string
   */
  function isNotEmptyLine(string) {
    return string.trim().length > 0;
  }

  /**
   * @param {string} string
   */
  function ignoreStackFrameAndMutableData(string) {
    let buffer = string.replace(/\u200b/g, '');
    buffer = buffer.replace(/VM\d+/g, 'VM');
    return buffer.replace(/^\s+at [^\]]+(]?)$/, '$1');
  }

  messageFormatter = messageFormatter || _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.textContentWithLineBreaks;
  const buffer = messageFormatter(node);
  return buffer.split('\n').map(ignoreStackFrameAndMutableData).filter(isNotEmptyLine).join('\n');
};

/**
 * @param {!Element} element
 * @param {!SDK.ConsoleModel.ConsoleMessage} message
 * @return {string}
 */
ConsoleTestRunner.simpleFormatter = function(element, message) {
  return message.messageText + ':' + message.line + ':' + message.column;
};

/**
 * @param {boolean=} printOriginatingCommand
 * @param {boolean=} dumpClassNames
 * @param {!ConsoleTestRunner.Formatter=} messageFormatter
 */
ConsoleTestRunner.dumpConsoleMessagesIgnoreErrorStackFrames =
    async function(printOriginatingCommand, dumpClassNames, messageFormatter) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResults(await ConsoleTestRunner.dumpConsoleMessagesIntoArray(
      printOriginatingCommand, dumpClassNames,
      ConsoleTestRunner.formatterIgnoreStackFrameUrls.bind(this, messageFormatter)));
};

ConsoleTestRunner.dumpConsoleMessagesWithStyles = function() {
  const messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
  for (let i = 0; i < messageViews.length; ++i) {
    const element = messageViews[i].element();
    const messageText = ConsoleTestRunner.prepareConsoleMessageText(element);
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(messageText);
    const spans = element.querySelectorAll('.console-message-text *');
    for (let j = 0; j < spans.length; ++j) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('Styled text #' + j + ': ' + (spans[j].style.cssText || 'NO STYLES DEFINED'));
    }
  }
};

/**
 * @param {boolean=} sortMessages
 * @param {boolean=} trimMessages
 */
ConsoleTestRunner.dumpConsoleMessagesWithClasses = async function(sortMessages, trimMessages) {
  const result = [];
  const messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
  for (let i = 0; i < messageViews.length; ++i) {
    const element = messageViews[i].element();
    const contentElement = messageViews[i].contentElement();
    await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates();
    let messageText = ConsoleTestRunner.prepareConsoleMessageText(element);
    if (trimMessages) {
      messageText = messageText.replace(/[ ]+/g, ' ');
      messageText = messageText.replace(/\s+\n\s+/g, ' ');
    }
    result.push(messageText + ' ' + element.getAttribute('class') + ' > ' + contentElement.getAttribute('class'));
  }
  if (sortMessages) {
    result.sort();
  }
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResults(result);
};

ConsoleTestRunner.dumpConsoleClassesBrief = async function() {
  const messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
  for (let i = 0; i < messageViews.length; ++i) {
    const repeatText = messageViews[i].repeatCount() > 1 ? (' x' + messageViews[i].repeatCount()) : '';
    const element = messageViews[i].toMessageElement();
    await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates();
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(element.className + repeatText);
  }
};

ConsoleTestRunner.dumpConsoleCounters = async function() {
  const counter = _panels_console_counters_console_counters_js__WEBPACK_IMPORTED_MODULE_3__.WarningErrorCounter.WarningErrorCounter.instanceForTest;
  if (counter.updatingForTest) {
    await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSnifferPromise(counter, 'updatedForTest');
  }
  if (counter.titlesForTesting) {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(counter.titlesForTesting);
  }
  await ConsoleTestRunner.dumpConsoleClassesBrief();
};

/**
 * @param {!Function} callback
 * @param {function(!Element):boolean} deepFilter
 * @param {function(!ObjectUI.ObjectPropertiesSection.ObjectPropertiesSection):boolean} sectionFilter
 */
ConsoleTestRunner.expandConsoleMessages = function(callback, deepFilter, sectionFilter) {
  _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().invalidateViewport();
  const messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;

  // Initiate round-trips to fetch necessary data for further rendering.
  for (let i = 0; i < messageViews.length; ++i) {
    messageViews[i].element();
  }

  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(expandTreeElements);

  function expandTreeElements() {
    for (let i = 0; i < messageViews.length; ++i) {
      const element = messageViews[i].element();
      for (let node = element; node; node = node.traverseNextNode(element)) {
        if (node.treeElementForTest) {
          node.treeElementForTest.expand();
        }
        if (node.expandStackTraceForTest) {
          node.expandStackTraceForTest();
        }
        const section = _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.getObjectPropertiesSectionFrom(node);
        if (!section) {
          continue;
        }
        if (sectionFilter && !sectionFilter(section)) {
          continue;
        }
        section.expand();

        if (!deepFilter) {
          continue;
        }
        const treeElements = section.rootElement().children();
        for (let j = 0; j < treeElements.length; ++j) {
          for (let treeElement = treeElements[j]; treeElement;
               treeElement = treeElement.traverseNextTreeElement(true, null, true)) {
            if (deepFilter(treeElement)) {
              treeElement.expand();
            }
          }
        }
      }
    }
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
  }
};

/**
 * @param {function(!Element):boolean} deepFilter
 * @param {function(!ObjectUI.ObjectPropertiesSection.ObjectPropertiesSection):boolean} sectionFilter
 * @return {!Promise}
 */
ConsoleTestRunner.expandConsoleMessagesPromise = function(deepFilter, sectionFilter) {
  return new Promise(fulfill => ConsoleTestRunner.expandConsoleMessages(fulfill, deepFilter, sectionFilter));
};

/**
 * @param {!Function} callback
 */
ConsoleTestRunner.expandGettersInConsoleMessages = function(callback) {
  const messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
  const properties = [];
  let propertiesCount = 0;
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(
      _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertyTreeElement.prototype, 'updateExpandable',
      propertyExpandableUpdated);
  for (let i = 0; i < messageViews.length; ++i) {
    const element = messageViews[i].element();
    for (let node = element; node; node = node.traverseNextNode(element)) {
      if (node.classList && node.classList.contains('object-value-calculate-value-button')) {
        ++propertiesCount;
        node.click();
        properties.push(node.parentElement.parentElement);
      }
    }
  }

  function propertyExpandableUpdated() {
    --propertiesCount;
    if (propertiesCount === 0) {
      for (let i = 0; i < properties.length; ++i) {
        properties[i].click();
      }
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
    } else {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(
          _ui_legacy_components_object_ui_object_ui_js__WEBPACK_IMPORTED_MODULE_4__.ObjectPropertiesSection.ObjectPropertyTreeElement.prototype, 'updateExpandable',
          propertyExpandableUpdated);
    }
  }
};

/**
 * @param {!Function} callback
 */
ConsoleTestRunner.expandConsoleMessagesErrorParameters = function(callback) {
  const messageViews = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
  // Initiate round-trips to fetch necessary data for further rendering.
  for (let i = 0; i < messageViews.length; ++i) {
    messageViews[i].element();
  }
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
};

/**
 * @param {!Function} callback
 */
ConsoleTestRunner.waitForRemoteObjectsConsoleMessages = function(callback) {
  const messages = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
  for (let i = 0; i < messages.length; ++i) {
    messages[i].toMessageElement();
  }
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.deprecatedRunAfterPendingDispatches(callback);
};

/**
 * @return {!Promise}
 */
ConsoleTestRunner.waitForRemoteObjectsConsoleMessagesPromise = function() {
  return new Promise(resolve => ConsoleTestRunner.waitForRemoteObjectsConsoleMessages(resolve));
};

/**
 * @return {!Promise}
 */
ConsoleTestRunner.waitUntilConsoleEditorLoaded = function() {
  let fulfill;
  const promise = new Promise(x => {
    fulfill = x;
  });
  const prompt = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().prompt;
  if (prompt.editor) {
    fulfill(prompt.editor);
  } else {
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(
        _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsolePrompt.ConsolePrompt.prototype, 'editorSetForTest', _ => fulfill(prompt.editor));
  }
  return promise;
};

/**
 * @param {!Function} callback
 */
ConsoleTestRunner.waitUntilMessageReceived = function(callback) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', callback, false);
};

/**
 * @return {!Promise}
 */
ConsoleTestRunner.waitUntilMessageReceivedPromise = function() {
  return new Promise(fulfill => ConsoleTestRunner.waitUntilMessageReceived(fulfill));
};

/**
 * @param {number} count
 * @param {!Function} callback
 */
ConsoleTestRunner.waitUntilNthMessageReceived = function(count, callback) {
  function override() {
    if (--count === 0) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.safeWrap(callback)();
    } else {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', override, false);
    }
  }
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', override, false);
};

/**
 * @param {number} count
 * @return {!Promise}
 */
ConsoleTestRunner.waitUntilNthMessageReceivedPromise = function(count) {
  return new Promise(fulfill => ConsoleTestRunner.waitUntilNthMessageReceived(count, fulfill));
};

/**
 * @param {string} namePrefix
 */
ConsoleTestRunner.changeExecutionContext = function(namePrefix) {
  const selector = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().consoleContextSelector;
  for (const executionContext of selector.items) {
    if (selector.titleFor(executionContext).startsWith(namePrefix)) {
      _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_5__.Context.Context.instance().setFlavor(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.RuntimeModel.ExecutionContext, executionContext);
      return;
    }
  }
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('FAILED: context with prefix: ' + namePrefix + ' not found in the context list');
};

/**
 * @param {number} expectedCount
 * @param {!Function} callback
 */
ConsoleTestRunner.waitForConsoleMessages = function(expectedCount, callback) {
  const consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
  checkAndReturn();

  function checkAndReturn() {
    if (consoleView.visibleViewMessages.length === expectedCount) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('Message count: ' + expectedCount);
      callback();
    } else {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(consoleView, 'messageAppendedForTests', checkAndReturn);
    }
  }
};

/**
 * @param {number} expectedCount
 * @return {!Promise}
 */
ConsoleTestRunner.waitForConsoleMessagesPromise = async function(expectedCount) {
  await new Promise(fulfill => ConsoleTestRunner.waitForConsoleMessages(expectedCount, fulfill));
  await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates();
  return ConsoleTestRunner.waitForPendingViewportUpdates();
};

/**
 * @param {number} fromMessage
 * @param {number} fromTextOffset
 * @param {number} toMessage
 * @param {number} toTextOffset
 */
ConsoleTestRunner.selectConsoleMessages = async function(fromMessage, fromTextOffset, toMessage, toTextOffset) {
  const consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
  const fromElement = consoleView.itemElement(fromMessage).element();
  const toElement = consoleView.itemElement(toMessage).element();
  await _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.waitForPendingLiveLocationUpdates();
  const from = selectionContainerAndOffset(fromElement, fromTextOffset);
  const to = selectionContainerAndOffset(toElement, toTextOffset);
  window.getSelection().setBaseAndExtent(from.container, from.offset, to.container, to.offset);

  /**
   * @param {!Node} container
   * @param {number} offset
   * @return {?{container: !Node, offset: number}}
   */
  function selectionContainerAndOffset(container, offset) {
    /** @type {?Node} */
    let node = container;
    if (offset === 0 && container.nodeType !== Node.TEXT_NODE) {
      container = /** @type {!Node} */ (container.traverseNextTextNode());
      node = container;
    }
    let charCount = 0;
    while ((node = node.traverseNextTextNode(container))) {
      const length = node.textContent.length;
      if (charCount + length >= offset) {
        return {container: node, offset: offset - charCount};
      }

      charCount += length;
    }
    return null;
  }
};

/**
 * @param {!Function} override
 * @param {boolean=} opt_sticky
 */
ConsoleTestRunner.addConsoleSniffer = function(override, opt_sticky) {
  _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addSniffer(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_0__.ConsoleModel.ConsoleModel.prototype, 'addMessage', override, opt_sticky);
};

/**
 * @param {!Function} func
 * @return {!Function}
 */
ConsoleTestRunner.wrapListener = function(func) {
  /**
   * @this {*}
   */
  async function wrapper() {
    await Promise.resolve();
    func.apply(this, arguments);
  }
  return wrapper;
};

ConsoleTestRunner.dumpStackTraces = function() {
  const viewMessages = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance().visibleViewMessages;
  for (let i = 0; i < viewMessages.length; ++i) {
    const m = viewMessages[i].consoleMessage();
    _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult(
        'Message[' + i + ']: ' + _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_1__.ResourceUtils.displayNameForURL(m.url || '') + ':' + m.line + ' ' +
        m.messageText);
    const trace = m.stackTrace ? m.stackTrace.callFrames : null;
    if (!trace) {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('FAIL: no stack trace attached to message #' + i);
    } else {
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('Stack Trace:\n');
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('  url: ' + trace[0].url);
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('  function: ' + trace[0].functionName);
      _test_runner_test_runner_js__WEBPACK_IMPORTED_MODULE_6__.TestRunner.addResult('  line: ' + trace[0].lineNumber);
    }
  }
};

/**
 * @return {!{first: number, last: number, count: number}}
 */
ConsoleTestRunner.visibleIndices = function() {
  const consoleView = _panels_console_console_js__WEBPACK_IMPORTED_MODULE_2__.ConsoleView.ConsoleView.instance();
  const viewport = consoleView.viewport;
  const viewportRect = viewport.element.getBoundingClientRect();
  let first = -1;
  let last = -1;
  let count = 0;
  for (let i = 0; i < consoleView.visibleViewMessages.length; i++) {
    // Created message elements may have a bounding rect, but not be connected to DOM.
    const item = consoleView.visibleViewMessages[i];
    if (!item.elementInternal || !item.elementInternal.isConnected) {
      continue;
    }
    const itemRect = item.elementInternal.getBoundingClientRect();
    const isVisible = (itemRect.bottom > viewportRect.top + 0.5) && (itemRect.top < viewportRect.bottom - 0.5);
    if (isVisible) {
      first = first === -1 ? i : first;
      last = i;
      count++;
    }
  }
  return {first, last, count};
};


/***/ })

}]);