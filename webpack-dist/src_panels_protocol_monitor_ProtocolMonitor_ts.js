"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_panels_protocol_monitor_ProtocolMonitor_ts"],{

/***/ "./src/panels/protocol_monitor/ProtocolMonitor.ts":
/*!********************************************************!*\
  !*** ./src/panels/protocol_monitor/ProtocolMonitor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandAutocompleteSuggestionProvider: () => (/* binding */ CommandAutocompleteSuggestionProvider),
/* harmony export */   EditorWidget: () => (/* binding */ EditorWidget),
/* harmony export */   Events: () => (/* binding */ Events),
/* harmony export */   InfoWidget: () => (/* binding */ InfoWidget),
/* harmony export */   ProtocolMonitorDataGrid: () => (/* binding */ ProtocolMonitorDataGrid),
/* harmony export */   ProtocolMonitorImpl: () => (/* binding */ ProtocolMonitorImpl),
/* harmony export */   buildProtocolMetadata: () => (/* binding */ buildProtocolMetadata),
/* harmony export */   parseCommandInput: () => (/* binding */ parseCommandInput)
/* harmony export */ });
/* harmony import */ var _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/common/common.js */ "./src/core/common/common.ts");
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/platform/platform.js */ "./src/core/platform/platform.ts");
/* harmony import */ var _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/protocol_client/protocol_client.js */ "./src/core/protocol_client/protocol_client.ts");
/* harmony import */ var _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/sdk/sdk.js */ "./src/core/sdk/sdk.ts");
/* harmony import */ var _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models/bindings/bindings.js */ "./src/models/bindings/bindings.ts");
/* harmony import */ var _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/text_utils/text_utils.js */ "./src/models/text_utils/text_utils.ts");
/* harmony import */ var _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ui/components/data_grid/data_grid.js */ "./src/ui/components/data_grid/data_grid.ts");
/* harmony import */ var _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ui/components/icon_button/icon_button.js */ "./src/ui/components/icon_button/icon_button.ts");
/* harmony import */ var _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ui/legacy/components/source_frame/source_frame.js */ "./src/ui/legacy/components/source_frame/source_frame.ts");
/* harmony import */ var _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../ui/legacy/legacy.js */ "./src/ui/legacy/legacy.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/components.js */ "./src/panels/protocol_monitor/components/components.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './protocolMonitor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _ProtocolMonitorDataGrid_instances, _ProtocolMonitorDataGrid_commandAutocompleteSuggestionProvider, _ProtocolMonitorDataGrid_selectedTargetId, _ProtocolMonitorDataGrid_commandInput, _ProtocolMonitorDataGrid_createCommandInput, _ProtocolMonitorDataGrid_createTargetSelector, _ProtocolMonitorImpl_split, _ProtocolMonitorImpl_editorWidget, _ProtocolMonitorImpl_protocolMonitorDataGrid, _ProtocolMonitorImpl_sideBarMinWidth, _CommandAutocompleteSuggestionProvider_maxHistorySize, _CommandAutocompleteSuggestionProvider_commandHistory;
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
















const UIStrings = {
    /**
     *@description Text for one or a group of functions
     */
    method: 'Method',
    /**
     * @description Text in Protocol Monitor. Title for a table column which shows in which direction
     * the particular protocol message was travelling. Values in this column will either be 'sent' or
     * 'received'.
     */
    type: 'Type',
    /**
     * @description Text in Protocol Monitor of the Protocol Monitor tab. Noun relating to a network request.
     */
    request: 'Request',
    /**
     *@description Title of a cell content in protocol monitor. A Network response refers to the act of acknowledging a
    network request. Should not be confused with answer.
     */
    response: 'Response',
    /**
     *@description Text for timestamps of items
     */
    timestamp: 'Timestamp',
    /**
     *@description Title of a cell content in protocol monitor. It describes the time between sending a request and receiving a response.
     */
    elapsedTime: 'Elapsed time',
    /**
     *@description Text in Protocol Monitor of the Protocol Monitor tab
     */
    target: 'Target',
    /**
     *@description Text to record a series of actions for analysis
     */
    record: 'Record',
    /**
     *@description Text to clear everything
     */
    clearAll: 'Clear all',
    /**
     *@description Text to filter result items
     */
    filter: 'Filter',
    /**
     *@description Text for the documentation of something
     */
    documentation: 'Documentation',
    /**
     *@description Text to open the CDP editor with the selected command
     */
    editAndResend: 'Edit and resend',
    /**
     *@description Cell text content in Protocol Monitor of the Protocol Monitor tab
     *@example {30} PH1
     */
    sMs: '{PH1} ms',
    /**
     *@description Text in Protocol Monitor of the Protocol Monitor tab
     */
    noMessageSelected: 'No message selected',
    /**
     *@description Text in Protocol Monitor for the save button
     */
    save: 'Save',
    /**
     *@description Text in Protocol Monitor to describe the sessions column
     */
    session: 'Session',
    /**
     *@description A placeholder for an input in Protocol Monitor. The input accepts commands that are sent to the backend on Enter. CDP stands for Chrome DevTools Protocol.
     */
    sendRawCDPCommand: 'Send a raw `CDP` command',
    /**
     * @description A tooltip text for the input in the Protocol Monitor panel. The tooltip describes what format is expected.
     */
    sendRawCDPCommandExplanation: 'Format: `\'Domain.commandName\'` for a command without parameters, or `\'{"command":"Domain.commandName", "parameters": {...}}\'` as a JSON object for a command with parameters. `\'cmd\'`/`\'method\'` and `\'args\'`/`\'params\'`/`\'arguments\'` are also supported as alternative keys for the `JSON` object.',
    /**
     * @description A label for a select input that allows selecting a CDP target to send the commands to.
     */
    selectTarget: 'Select a target',
    /**
     * @description Tooltip for the the console sidebar toggle in the Console panel. Command to
     * open/show the sidebar.
     */
    showCDPCommandEditor: 'Show CDP command editor',
    /**
     * @description Tooltip for the the console sidebar toggle in the Console panel. Command to
     * open/show the sidebar.
     */
    hideCDPCommandEditor: 'Hide  CDP command editor',
    /**
     * @description Screen reader announcement when the sidebar is shown in the Console panel.
     */
    CDPCommandEditorShown: 'CDP command editor shown',
    /**
     * @description Screen reader announcement when the sidebar is hidden in the Console panel.
     */
    CDPCommandEditorHidden: 'CDP command editor hidden',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.registerUIStrings('panels/protocol_monitor/ProtocolMonitor.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_2__.i18n.getLocalizedString.bind(undefined, str_);
const timeRenderer = (value) => {
    return _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_12__.html `${i18nString(UIStrings.sMs, { PH1: String(value) })}`;
};
const buildProtocolMetadata = (domains) => {
    const metadataByCommand = new Map();
    for (const domain of domains) {
        for (const command of Object.keys(domain.metadata)) {
            metadataByCommand.set(command, domain.metadata[command]);
        }
    }
    return metadataByCommand;
};
const metadataByCommand = buildProtocolMetadata(_core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.inspectorBackend.agentPrototypes.values());
const typesByName = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.inspectorBackend.typeMap;
const enumsByName = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.inspectorBackend.enumMap;
class ProtocolMonitorDataGrid extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox) {
    constructor(splitWidget) {
        super(true);
        _ProtocolMonitorDataGrid_instances.add(this);
        Object.defineProperty(this, "started", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "startTime", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "requestTimeForId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataGridRowForId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "infoWidget", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "dataGridIntegrator", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "filterParser", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "suggestionBuilder", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "textFilterUI", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "selector", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        _ProtocolMonitorDataGrid_commandAutocompleteSuggestionProvider.set(this, new CommandAutocompleteSuggestionProvider());
        _ProtocolMonitorDataGrid_selectedTargetId.set(this, void 0);
        _ProtocolMonitorDataGrid_commandInput.set(this, void 0);
        this.started = false;
        this.startTime = 0;
        this.dataGridRowForId = new Map();
        this.requestTimeForId = new Map();
        const topToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.Toolbar('protocol-monitor-toolbar', this.contentElement);
        topToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.toolbar('top')}`);
        this.contentElement.classList.add('protocol-monitor');
        const recordButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarToggle(i18nString(UIStrings.record), 'record-start', 'record-stop', 'protocol-monitor.toggle-recording');
        recordButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton.Events.Click, () => {
            recordButton.setToggled(!recordButton.isToggled());
            this.setRecording(recordButton.isToggled());
        });
        recordButton.enableToggleWithRedColor();
        topToolbar.appendToolbarItem(recordButton);
        recordButton.setToggled(true);
        const clearButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.clearAll), 'clear', undefined, 'protocol-monitor.clear-all');
        clearButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton.Events.Click, () => {
            this.dataGridIntegrator.update({ ...this.dataGridIntegrator.data(), rows: [] });
            this.infoWidget.render(null);
        });
        topToolbar.appendToolbarItem(clearButton);
        const saveButton = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton(i18nString(UIStrings.save), 'download', undefined, 'protocol-monitor.save');
        saveButton.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarButton.Events.Click, () => {
            void this.saveAsFile();
        });
        topToolbar.appendToolbarItem(saveButton);
        this.selector = __classPrivateFieldGet(this, _ProtocolMonitorDataGrid_instances, "m", _ProtocolMonitorDataGrid_createTargetSelector).call(this);
        this.infoWidget = new InfoWidget();
        const dataGridInitialData = {
            paddingRowsCount: 100,
            showScrollbar: true,
            columns: [
                {
                    id: 'type',
                    title: i18nString(UIStrings.type),
                    sortable: true,
                    widthWeighting: 1,
                    visible: true,
                    hideable: true,
                    styles: {
                        'text-align': 'center',
                    },
                },
                {
                    id: 'method',
                    title: i18nString(UIStrings.method),
                    sortable: false,
                    widthWeighting: 5,
                    visible: true,
                    hideable: false,
                },
                {
                    id: 'request',
                    title: i18nString(UIStrings.request),
                    sortable: false,
                    widthWeighting: 5,
                    visible: true,
                    hideable: true,
                },
                {
                    id: 'response',
                    title: i18nString(UIStrings.response),
                    sortable: false,
                    widthWeighting: 5,
                    visible: true,
                    hideable: true,
                },
                {
                    id: 'elapsed-time',
                    title: i18nString(UIStrings.elapsedTime),
                    sortable: true,
                    widthWeighting: 2,
                    visible: false,
                    hideable: true,
                },
                {
                    id: 'timestamp',
                    title: i18nString(UIStrings.timestamp),
                    sortable: true,
                    widthWeighting: 5,
                    visible: false,
                    hideable: true,
                },
                {
                    id: 'target',
                    title: i18nString(UIStrings.target),
                    sortable: true,
                    widthWeighting: 5,
                    visible: false,
                    hideable: true,
                },
                {
                    id: 'session',
                    title: i18nString(UIStrings.session),
                    sortable: true,
                    widthWeighting: 5,
                    visible: false,
                    hideable: true,
                },
            ],
            rows: [],
            contextMenus: {
                bodyRow: (menu, columns, row) => {
                    const methodColumn = _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(row, 'method');
                    const typeColumn = _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(row, 'type');
                    /**
                     * You can click the "Edit and resend" item in the context menu to be
                     * taken to the CDP editor with the filled with the selected command.
                     */
                    menu.editSection().appendItem(i18nString(UIStrings.editAndResend), () => {
                        if (!methodColumn.value) {
                            return;
                        }
                        const parameters = this.infoWidget.request;
                        const targetId = this.infoWidget.targetId;
                        const command = String(methodColumn.value);
                        if (splitWidget.showMode() === _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.SplitWidget.ShowMode.OnlyMain) {
                            splitWidget.toggleSidebar();
                        }
                        this.dispatchEventToListeners(Events.CommandChange, { command, parameters, targetId });
                    }, { jslogContext: 'edit-and-resend', disabled: typeColumn.title !== 'sent' });
                    /**
                     * You can click the "Filter" item in the context menu to filter the
                     * protocol monitor entries to those that match the method of the
                     * current row.
                     */
                    menu.editSection().appendItem(i18nString(UIStrings.filter), () => {
                        const methodColumn = _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(row, 'method');
                        this.textFilterUI.setValue(`method:${methodColumn.value}`, true);
                    }, { jslogContext: 'filter' });
                    /**
                     * You can click the "Documentation" item in the context menu to be
                     * taken to the CDP Documentation site entry for the given method.
                     */
                    menu.footerSection().appendItem(i18nString(UIStrings.documentation), () => {
                        if (!methodColumn.value) {
                            return;
                        }
                        const [domain, method] = String(methodColumn.value).split('.');
                        const type = typeColumn.title === 'sent' ? 'method' : 'event';
                        _core_host_host_js__WEBPACK_IMPORTED_MODULE_1__.InspectorFrontendHost.InspectorFrontendHostInstance.openInNewTab(`https://chromedevtools.github.io/devtools-protocol/tot/${domain}#${type}-${method}`);
                    }, { jslogContext: 'documentation' });
                },
            },
        };
        this.dataGridIntegrator =
            new _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridControllerIntegrator.DataGridControllerIntegrator(dataGridInitialData);
        this.dataGridIntegrator.dataGrid.addEventListener('cellfocused', event => {
            const focusedRow = event.data.row;
            const infoWidgetData = {
                request: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'request'),
                response: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'response'),
                target: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'target'),
                type: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridUtils.getRowEntryForColumnId(focusedRow, 'type').title,
                selectedTab: event.data.cell.columnId === 'request' ? 'request' :
                    event.data.cell.columnId === 'response' ? 'response' :
                        undefined,
            };
            this.infoWidget.render(infoWidgetData);
        });
        this.dataGridIntegrator.dataGrid.addEventListener('newuserfiltertext', event => {
            this.textFilterUI.setValue(event.data.filterText, /* notify listeners */ true);
        });
        const split = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.SplitWidget.SplitWidget(true, true, 'protocol-monitor-panel-split', 250);
        split.show(this.contentElement);
        split.setMainWidget(this.dataGridIntegrator);
        split.setSidebarWidget(this.infoWidget);
        const keys = ['method', 'request', 'response', 'type', 'target', 'session'];
        this.filterParser = new _models_text_utils_text_utils_js__WEBPACK_IMPORTED_MODULE_7__.TextUtils.FilterParser(keys);
        this.suggestionBuilder = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.FilterSuggestionBuilder.FilterSuggestionBuilder(keys);
        this.textFilterUI = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarFilter(undefined, 1, .2, '', this.suggestionBuilder.completions.bind(this.suggestionBuilder), true);
        this.textFilterUI.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarInput.Event.TextChanged, event => {
            const query = event.data;
            const filters = this.filterParser.parse(query);
            this.dataGridIntegrator.update({ ...this.dataGridIntegrator.data(), filters });
        });
        const bottomToolbar = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.Toolbar('protocol-monitor-bottom-toolbar', this.contentElement);
        bottomToolbar.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.toolbar('bottom')}`);
        bottomToolbar.appendToolbarItem(splitWidget.createShowHideSidebarButton(i18nString(UIStrings.showCDPCommandEditor), i18nString(UIStrings.hideCDPCommandEditor), i18nString(UIStrings.CDPCommandEditorShown), i18nString(UIStrings.CDPCommandEditorHidden), 'protocol-monitor.toggle-command-editor'));
        __classPrivateFieldSet(this, _ProtocolMonitorDataGrid_commandInput, __classPrivateFieldGet(this, _ProtocolMonitorDataGrid_instances, "m", _ProtocolMonitorDataGrid_createCommandInput).call(this), "f");
        bottomToolbar.appendToolbarItem(__classPrivateFieldGet(this, _ProtocolMonitorDataGrid_commandInput, "f"));
        bottomToolbar.appendToolbarItem(this.selector);
        const shadowRoot = bottomToolbar.element?.shadowRoot;
        const inputBar = shadowRoot?.querySelector('.toolbar-input');
        const tabSelector = shadowRoot?.querySelector('.toolbar-select-container');
        const populateToolbarInput = () => {
            const editorWidget = splitWidget.sidebarWidget();
            if (!(editorWidget instanceof EditorWidget)) {
                return;
            }
            const commandJson = editorWidget.jsonEditor.getCommandJson();
            const targetId = editorWidget.jsonEditor.targetId;
            if (targetId) {
                const selectedIndex = this.selector.options().findIndex(option => option.value === targetId);
                if (selectedIndex !== -1) {
                    this.selector.setSelectedIndex(selectedIndex);
                    __classPrivateFieldSet(this, _ProtocolMonitorDataGrid_selectedTargetId, targetId, "f");
                }
            }
            if (commandJson) {
                __classPrivateFieldGet(this, _ProtocolMonitorDataGrid_commandInput, "f").setValue(commandJson);
            }
        };
        splitWidget.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.SplitWidget.Events.ShowModeChanged, (event => {
            if (event.data === 'OnlyMain') {
                populateToolbarInput();
                inputBar?.setAttribute('style', 'display:flex; flex-grow: 1');
                tabSelector?.setAttribute('style', 'display:flex');
            }
            else {
                const { command, parameters } = parseCommandInput(__classPrivateFieldGet(this, _ProtocolMonitorDataGrid_commandInput, "f").value());
                this.dispatchEventToListeners(Events.CommandChange, { command, parameters, targetId: __classPrivateFieldGet(this, _ProtocolMonitorDataGrid_selectedTargetId, "f") });
                inputBar?.setAttribute('style', 'display:none');
                tabSelector?.setAttribute('style', 'display:none');
            }
        }));
        topToolbar.appendToolbarItem(this.textFilterUI);
    }
    onCommandSend(command, parameters, target) {
        const test = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.test;
        const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance();
        const selectedTarget = target ? targetManager.targetById(target) : null;
        const sessionId = selectedTarget ? selectedTarget.sessionId : '';
        // TS thinks that properties are read-only because
        // in TS test is defined as a namespace.
        // @ts-ignore
        test.sendRawMessage(command, parameters, () => { }, sessionId);
    }
    wasShown() {
        if (this.started) {
            return;
        }
        this.registerCSSFiles([Object(function webpackMissingModule() { var e = new Error("Cannot find module './protocolMonitor.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]);
        this.started = true;
        this.startTime = Date.now();
        this.setRecording(true);
    }
    setRecording(recording) {
        const test = _core_protocol_client_protocol_client_js__WEBPACK_IMPORTED_MODULE_4__.InspectorBackend.test;
        if (recording) {
            // TODO: TS thinks that properties are read-only because
            // in TS test is defined as a namespace.
            // @ts-ignore
            test.onMessageSent = this.messageSent.bind(this);
            // @ts-ignore
            test.onMessageReceived = this.messageReceived.bind(this);
        }
        else {
            // @ts-ignore
            test.onMessageSent = null;
            // @ts-ignore
            test.onMessageReceived = null;
        }
    }
    targetToString(target) {
        if (!target) {
            return '';
        }
        return target.decorateLabel(`${target.name()} ${target === _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance().rootTarget() ? '' : target.id()}`);
    }
    messageReceived(message, target) {
        if ('id' in message && message.id) {
            const existingRow = this.dataGridRowForId.get(message.id);
            if (!existingRow) {
                return;
            }
            const allExistingRows = this.dataGridIntegrator.data().rows;
            const matchingExistingRowIndex = allExistingRows.findIndex(r => existingRow === r);
            const newRowWithUpdate = {
                ...existingRow,
                cells: existingRow.cells.map(cell => {
                    if (cell.columnId === 'response') {
                        return {
                            ...cell,
                            value: JSON.stringify(message.result || message.error),
                        };
                    }
                    if (cell.columnId === 'elapsed-time') {
                        const requestTime = this.requestTimeForId.get(message.id);
                        if (requestTime) {
                            return {
                                ...cell,
                                value: Date.now() - requestTime,
                                renderer: timeRenderer,
                            };
                        }
                    }
                    return cell;
                }),
            };
            const newRowsArray = [...this.dataGridIntegrator.data().rows];
            newRowsArray[matchingExistingRowIndex] = newRowWithUpdate;
            // Now we've updated the message, it won't be updated again, so we can delete it from the tracking map.
            this.dataGridRowForId.delete(message.id);
            this.dataGridIntegrator.update({
                ...this.dataGridIntegrator.data(),
                rows: newRowsArray,
            });
            return;
        }
        const sdkTarget = target;
        const responseIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon();
        responseIcon.data = { iconName: 'arrow-down', color: 'var(--icon-request)', width: '16px', height: '16px' };
        const newRow = {
            cells: [
                { columnId: 'method', value: message.method, title: message.method },
                { columnId: 'request', value: '', renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer },
                {
                    columnId: 'response',
                    value: JSON.stringify(message.params),
                    renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer,
                },
                {
                    columnId: 'timestamp',
                    value: Date.now() - this.startTime,
                    renderer: timeRenderer,
                },
                { columnId: 'elapsed-time', value: '' },
                { columnId: 'type', value: responseIcon, title: 'received', renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.iconRenderer },
                { columnId: 'target', value: this.targetToString(sdkTarget) },
                { columnId: 'session', value: message.sessionId || '' },
            ],
            hidden: false,
        };
        this.dataGridIntegrator.update({
            ...this.dataGridIntegrator.data(),
            rows: this.dataGridIntegrator.data().rows.concat([newRow]),
        });
    }
    messageSent(message, target) {
        const sdkTarget = target;
        const requestResponseIcon = new _ui_components_icon_button_icon_button_js__WEBPACK_IMPORTED_MODULE_9__.Icon.Icon();
        requestResponseIcon
            .data = { iconName: 'arrow-up-down', color: 'var(--icon-request-response)', width: '16px', height: '16px' };
        const newRow = {
            styles: {
                '--override-data-grid-row-background-color': 'var(--sys-color-surface3)',
            },
            cells: [
                { columnId: 'method', value: message.method, title: message.method },
                {
                    columnId: 'request',
                    value: JSON.stringify(message.params),
                    renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer,
                },
                { columnId: 'response', value: '(pending)', renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.codeBlockRenderer },
                {
                    columnId: 'timestamp',
                    value: Date.now() - this.startTime,
                    renderer: timeRenderer,
                },
                { columnId: 'elapsed-time', value: '(pending)' },
                {
                    columnId: 'type',
                    value: requestResponseIcon,
                    title: 'sent',
                    renderer: _ui_components_data_grid_data_grid_js__WEBPACK_IMPORTED_MODULE_8__.DataGridRenderers.iconRenderer,
                },
                { columnId: 'target', value: String(sdkTarget?.id()) },
                { columnId: 'session', value: message.sessionId || '' },
            ],
            hidden: false,
        };
        this.requestTimeForId.set(message.id, Date.now());
        this.dataGridRowForId.set(message.id, newRow);
        this.dataGridIntegrator.update({
            ...this.dataGridIntegrator.data(),
            rows: this.dataGridIntegrator.data().rows.concat([newRow]),
        });
    }
    async saveAsFile() {
        const now = new Date();
        const fileName = 'ProtocolMonitor-' + _core_platform_platform_js__WEBPACK_IMPORTED_MODULE_3__.DateUtilities.toISO8601Compact(now) + '.json';
        const stream = new _models_bindings_bindings_js__WEBPACK_IMPORTED_MODULE_6__.FileUtils.FileOutputStream();
        const accepted = await stream.open(fileName);
        if (!accepted) {
            return;
        }
        const rowEntries = [];
        for (const row of this.dataGridIntegrator.data().rows) {
            const rowEntry = Object.fromEntries(row.cells.map(cell => ([cell.columnId, cell.value])));
            rowEntries.push(rowEntry);
        }
        void stream.write(JSON.stringify(rowEntries, null, '  '));
        void stream.close();
    }
}
_ProtocolMonitorDataGrid_commandAutocompleteSuggestionProvider = new WeakMap(), _ProtocolMonitorDataGrid_selectedTargetId = new WeakMap(), _ProtocolMonitorDataGrid_commandInput = new WeakMap(), _ProtocolMonitorDataGrid_instances = new WeakSet(), _ProtocolMonitorDataGrid_createCommandInput = function _ProtocolMonitorDataGrid_createCommandInput() {
    const placeholder = i18nString(UIStrings.sendRawCDPCommand);
    const accessiblePlaceholder = placeholder;
    const growFactor = 1;
    const shrinkFactor = 0.2;
    const tooltip = i18nString(UIStrings.sendRawCDPCommandExplanation);
    const input = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarInput(placeholder, accessiblePlaceholder, growFactor, shrinkFactor, tooltip, __classPrivateFieldGet(this, _ProtocolMonitorDataGrid_commandAutocompleteSuggestionProvider, "f").buildTextPromptCompletions, false, 'command-input');
    input.addEventListener(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarInput.Event.EnterPressed, () => {
        __classPrivateFieldGet(this, _ProtocolMonitorDataGrid_commandAutocompleteSuggestionProvider, "f").addEntry(input.value());
        const { command, parameters } = parseCommandInput(input.value());
        this.onCommandSend(command, parameters, __classPrivateFieldGet(this, _ProtocolMonitorDataGrid_selectedTargetId, "f"));
    });
    return input;
}, _ProtocolMonitorDataGrid_createTargetSelector = function _ProtocolMonitorDataGrid_createTargetSelector() {
    const selector = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Toolbar.ToolbarComboBox(() => {
        __classPrivateFieldSet(this, _ProtocolMonitorDataGrid_selectedTargetId, selector.selectedOption()?.value, "f");
    }, i18nString(UIStrings.selectTarget), undefined, 'target-selector');
    selector.setMaxWidth(120);
    const targetManager = _core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.TargetManager.instance();
    const syncTargets = () => {
        selector.removeOptions();
        for (const target of targetManager.targets()) {
            selector.createOption(`${target.name()} (${target.inspectedURL()})`, target.id());
        }
    };
    targetManager.addEventListener(_core_sdk_sdk_js__WEBPACK_IMPORTED_MODULE_5__.TargetManager.Events.AvailableTargetsChanged, syncTargets);
    syncTargets();
    return selector;
};
class ProtocolMonitorImpl extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox {
    constructor() {
        super(true);
        _ProtocolMonitorImpl_split.set(this, void 0);
        _ProtocolMonitorImpl_editorWidget.set(this, new EditorWidget());
        _ProtocolMonitorImpl_protocolMonitorDataGrid.set(this, void 0);
        // This width corresponds to the optimal width to use the editor properly
        // It is randomly chosen
        _ProtocolMonitorImpl_sideBarMinWidth.set(this, 400);
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.panel('protocol-monitor').track({ resize: true })}`);
        __classPrivateFieldSet(this, _ProtocolMonitorImpl_split, new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.SplitWidget.SplitWidget(true, false, 'protocol-monitor-split-container', __classPrivateFieldGet(this, _ProtocolMonitorImpl_sideBarMinWidth, "f")), "f");
        __classPrivateFieldGet(this, _ProtocolMonitorImpl_split, "f").show(this.contentElement);
        __classPrivateFieldSet(this, _ProtocolMonitorImpl_protocolMonitorDataGrid, new ProtocolMonitorDataGrid(__classPrivateFieldGet(this, _ProtocolMonitorImpl_split, "f")), "f");
        __classPrivateFieldGet(this, _ProtocolMonitorImpl_protocolMonitorDataGrid, "f").addEventListener(Events.CommandChange, event => {
            __classPrivateFieldGet(this, _ProtocolMonitorImpl_editorWidget, "f").jsonEditor.displayCommand(event.data.command, event.data.parameters, event.data.targetId);
        });
        __classPrivateFieldGet(this, _ProtocolMonitorImpl_editorWidget, "f").element.style.overflow = 'hidden';
        __classPrivateFieldGet(this, _ProtocolMonitorImpl_split, "f").setMainWidget(__classPrivateFieldGet(this, _ProtocolMonitorImpl_protocolMonitorDataGrid, "f"));
        __classPrivateFieldGet(this, _ProtocolMonitorImpl_split, "f").setSidebarWidget(__classPrivateFieldGet(this, _ProtocolMonitorImpl_editorWidget, "f"));
        __classPrivateFieldGet(this, _ProtocolMonitorImpl_split, "f").hideSidebar(true);
        __classPrivateFieldGet(this, _ProtocolMonitorImpl_editorWidget, "f").addEventListener(Events.CommandSent, event => {
            __classPrivateFieldGet(this, _ProtocolMonitorImpl_protocolMonitorDataGrid, "f").onCommandSend(event.data.command, event.data.parameters, event.data.targetId);
        });
    }
}
_ProtocolMonitorImpl_split = new WeakMap(), _ProtocolMonitorImpl_editorWidget = new WeakMap(), _ProtocolMonitorImpl_protocolMonitorDataGrid = new WeakMap(), _ProtocolMonitorImpl_sideBarMinWidth = new WeakMap();
class CommandAutocompleteSuggestionProvider {
    constructor(maxHistorySize) {
        _CommandAutocompleteSuggestionProvider_maxHistorySize.set(this, 200);
        _CommandAutocompleteSuggestionProvider_commandHistory.set(this, new Set());
        Object.defineProperty(this, "buildTextPromptCompletions", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: async (expression, prefix, force) => {
                if (!prefix && !force && expression) {
                    return [];
                }
                const newestToOldest = [...__classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_commandHistory, "f")].reverse();
                newestToOldest.push(...metadataByCommand.keys());
                return newestToOldest.filter(cmd => cmd.startsWith(prefix)).map(text => ({
                    text,
                }));
            }
        });
        if (maxHistorySize !== undefined) {
            __classPrivateFieldSet(this, _CommandAutocompleteSuggestionProvider_maxHistorySize, maxHistorySize, "f");
        }
    }
    addEntry(value) {
        if (__classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_commandHistory, "f").has(value)) {
            __classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_commandHistory, "f").delete(value);
        }
        __classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_commandHistory, "f").add(value);
        if (__classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_commandHistory, "f").size > __classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_maxHistorySize, "f")) {
            const earliestEntry = __classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_commandHistory, "f").values().next().value;
            __classPrivateFieldGet(this, _CommandAutocompleteSuggestionProvider_commandHistory, "f").delete(earliestEntry);
        }
    }
}
_CommandAutocompleteSuggestionProvider_maxHistorySize = new WeakMap(), _CommandAutocompleteSuggestionProvider_commandHistory = new WeakMap();
class InfoWidget extends _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox {
    constructor() {
        super();
        Object.defineProperty(this, "tabbedPane", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "request", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "targetId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ''
        });
        this.tabbedPane = new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.TabbedPane.TabbedPane();
        this.tabbedPane.appendTab('request', i18nString(UIStrings.request), new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.Widget());
        this.tabbedPane.appendTab('response', i18nString(UIStrings.response), new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.Widget());
        this.tabbedPane.show(this.contentElement);
        this.tabbedPane.selectTab('response');
        this.request = {};
        this.render(null);
    }
    render(data) {
        if (!data || !data.request || !data.response || !data.target) {
            this.tabbedPane.changeTabView('request', new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noMessageSelected)));
            this.tabbedPane.changeTabView('response', new _ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.EmptyWidget.EmptyWidget(i18nString(UIStrings.noMessageSelected)));
            return;
        }
        const requestEnabled = data && data.type && data.type === 'sent';
        this.tabbedPane.setTabEnabled('request', Boolean(requestEnabled));
        if (!requestEnabled) {
            this.tabbedPane.selectTab('response');
        }
        const requestParsed = JSON.parse(String(data.request.value) || 'null');
        this.request = requestParsed;
        this.targetId = String(data.target.value);
        this.tabbedPane.changeTabView('request', _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.JSONView.JSONView.createViewSync(requestParsed));
        const responseParsed = data.response.value === '(pending)' ? null : JSON.parse(String(data.response.value) || 'null');
        this.tabbedPane.changeTabView('response', _ui_legacy_components_source_frame_source_frame_js__WEBPACK_IMPORTED_MODULE_10__.JSONView.JSONView.createViewSync(responseParsed));
        if (data.selectedTab) {
            this.tabbedPane.selectTab(data.selectedTab);
        }
    }
}
var Events;
(function (Events) {
    Events["CommandSent"] = "CommandSent";
    Events["CommandChange"] = "CommandChange";
})(Events || (Events = {}));
class EditorWidget extends _core_common_common_js__WEBPACK_IMPORTED_MODULE_0__.ObjectWrapper.eventMixin(_ui_legacy_legacy_js__WEBPACK_IMPORTED_MODULE_11__.Widget.VBox) {
    constructor() {
        super();
        Object.defineProperty(this, "jsonEditor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.element.setAttribute('jslog', `${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_13__.pane('command-editor').track({ resize: true })}`);
        this.jsonEditor = new _components_components_js__WEBPACK_IMPORTED_MODULE_14__.JSONEditor.JSONEditor();
        this.jsonEditor.metadataByCommand = metadataByCommand;
        this.jsonEditor.typesByName = typesByName;
        this.jsonEditor.enumsByName = enumsByName;
        this.element.append(this.jsonEditor);
        this.jsonEditor.addEventListener(_components_components_js__WEBPACK_IMPORTED_MODULE_14__.JSONEditor.SubmitEditorEvent.eventName, (event) => {
            this.dispatchEventToListeners(Events.CommandSent, event.data);
        });
    }
}
function parseCommandInput(input) {
    // If input cannot be parsed as json, we assume it's the command name
    // for a command without parameters. Otherwise, we expect an object
    // with "command"/"method"/"cmd" and "parameters"/"params"/"args"/"arguments" attributes.
    let json = null;
    try {
        json = JSON.parse(input);
    }
    catch (err) {
    }
    const command = json ? json.command || json.method || json.cmd || '' : input;
    const parameters = json?.parameters || json?.params || json?.args || json?.arguments || {};
    return { command, parameters };
}


/***/ }),

/***/ "./src/panels/protocol_monitor/components/Toolbar.ts":
/*!***********************************************************!*\
  !*** ./src/panels/protocol_monitor/components/Toolbar.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CopyCommandEvent: () => (/* binding */ CopyCommandEvent),
/* harmony export */   SendCommandEvent: () => (/* binding */ SendCommandEvent),
/* harmony export */   Toolbar: () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var _core_host_host_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/host/host.js */ "./src/core/host/host.ts");
/* harmony import */ var _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/i18n/i18n.js */ "./src/core/i18n/i18n.ts");
/* harmony import */ var _ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ui/components/buttons/buttons.js */ "./src/ui/components/buttons/buttons.ts");
/* harmony import */ var _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ui/lit-html/lit-html.js */ "./src/ui/lit-html/lit-html.ts");
/* harmony import */ var _ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ui/visual_logging/visual_logging.js */ "./src/ui/visual_logging/visual_logging.ts");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './toolbar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
var __esDecorate = (undefined && undefined.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (undefined && undefined.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (undefined && undefined.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.






const { html, Decorators, LitElement } = _ui_lit_html_lit_html_js__WEBPACK_IMPORTED_MODULE_3__;
const { customElement } = Decorators;
const UIStrings = {
    /**
     * @description The title of a the button that sends a CDP command.
     */
    sendCommandCtrlEnter: 'Send command - Ctrl+Enter',
    /**
     * @description The title of a the button that sends a CDP command.
     */
    sendCommandCmdEnter: 'Send command - ⌘+Enter',
    /**
     * @description he title of a the button that copies a CDP command.
     */
    copyCommand: 'Copy command',
};
const str_ = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.registerUIStrings('panels/protocol_monitor/components/Toolbar.ts', UIStrings);
const i18nString = _core_i18n_i18n_js__WEBPACK_IMPORTED_MODULE_1__.i18n.getLocalizedString.bind(undefined, str_);
const copyIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/copy.svg */ "./src/Images/copy.svg?d91e"), __webpack_require__.b).toString();
const sendIconUrl = new URL(/* asset import */ __webpack_require__(/*! ../../../Images/send.svg */ "./src/Images/send.svg?58dc"), __webpack_require__.b).toString();
class CopyCommandEvent extends Event {
    constructor() {
        super(CopyCommandEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(CopyCommandEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'copycommand'
});
class SendCommandEvent extends Event {
    constructor() {
        super(SendCommandEvent.eventName, { bubbles: true, composed: true });
    }
}
Object.defineProperty(SendCommandEvent, "eventName", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: 'commandsent'
});
let Toolbar = (() => {
    var _Toolbar_handleCopy, _Toolbar_handleSend;
    let _classDecorators = [customElement('devtools-pm-toolbar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var Toolbar = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            _Toolbar_handleCopy.set(this, () => {
                this.dispatchEvent(new CopyCommandEvent());
            });
            _Toolbar_handleSend.set(this, () => {
                this.dispatchEvent(new SendCommandEvent());
            });
        }
        render() {
            // clang-format off
            return html `
        <div class="toolbar">
          <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          title=${i18nString(UIStrings.copyCommand)}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL}
          .iconUrl=${copyIconUrl}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.TOOLBAR}
          @click=${__classPrivateFieldGet(this, _Toolbar_handleCopy, "f")}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.copy-command').track({ click: true })}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
        <${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}
          .size=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Size.SMALL}
          title=${_core_host_host_js__WEBPACK_IMPORTED_MODULE_0__.Platform.isMac() ? i18nString(UIStrings.sendCommandCmdEnter) : i18nString(UIStrings.sendCommandCtrlEnter)}
          .iconUrl=${sendIconUrl}
          .variant=${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Variant.PRIMARY_TOOLBAR}
          @click=${__classPrivateFieldGet(this, _Toolbar_handleSend, "f")}
          jslog=${_ui_visual_logging_visual_logging_js__WEBPACK_IMPORTED_MODULE_4__.action('protocol-monitor.send-command').track({ click: true })}
        ></${_ui_components_buttons_buttons_js__WEBPACK_IMPORTED_MODULE_2__.Button.Button.litTagName}>
      </div>
    `;
            // clang-format on
        }
    };
    _Toolbar_handleCopy = new WeakMap();
    _Toolbar_handleSend = new WeakMap();
    __setFunctionName(_classThis, "Toolbar");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Toolbar = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })();
    Object.defineProperty(_classThis, "styles", {
        enumerable: true,
        configurable: true,
        writable: true,
        value: [Object(function webpackMissingModule() { var e = new Error("Cannot find module './toolbar.css.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())]
    });
    (() => {
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Toolbar = _classThis;
})();



/***/ }),

/***/ "./src/panels/protocol_monitor/components/components.ts":
/*!**************************************************************!*\
  !*** ./src/panels/protocol_monitor/components/components.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JSONEditor: () => (/* reexport module object */ _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   Toolbar: () => (/* reexport module object */ _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _JSONEditor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JSONEditor.js */ "./src/panels/protocol_monitor/components/JSONEditor.ts");
/* harmony import */ var _Toolbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toolbar.js */ "./src/panels/protocol_monitor/components/Toolbar.ts");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.





/***/ })

}]);