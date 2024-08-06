(self['webpackChunk'] = self['webpackChunk'] || []).push([["devtools_compatibility_js"], {
"./devtools_compatibility.js": (function () {
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
// Copyright 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* eslint-disable indent */ (function(window1) {
    // DevToolsAPI ----------------------------------------------------------------
    /**
 * @typedef {{runtimeAllowedHosts: !Array<string>, runtimeBlockedHosts: !Array<string>}} ExtensionHostsPolicy
 */ /**
 * @typedef {{startPage: string, name: string, exposeExperimentalAPIs: boolean, hostsPolicy?: ExtensionHostsPolicy}} ExtensionDescriptor
 */ var DevToolsAPIImpl = /*#__PURE__*/ function() {
        "use strict";
        function DevToolsAPIImpl() {
            var _this = this;
            _class_call_check(this, DevToolsAPIImpl);
            /**
     * @type {number}
     */ this._lastCallId = 0;
            /**
     * @type {!Object.<number, function(?Object)>}
     */ this._callbacks = {};
            /**
     * @type {!Array.<!ExtensionDescriptor>}
     */ this._pendingExtensionDescriptors = [];
            /**
     * @type {?function(!ExtensionDescriptor): void}
     */ this._addExtensionCallback = null;
            /**
     * @type {!Array<string>}
     */ this._originsForbiddenForExtensions = [];
            /**
     * @type {!Promise<string>}
     */ this._initialTargetIdPromise = new Promise(function(resolve) {
                _this._setInitialTargetId = resolve;
            });
        }
        _create_class(DevToolsAPIImpl, [
            {
                /**
   * @param {number} id
   * @param {?Object} arg
   */ key: "embedderMessageAck",
                value: function embedderMessageAck(id, arg) {
                    var callback = this._callbacks[id];
                    delete this._callbacks[id];
                    if (callback) {
                        callback(arg);
                    }
                }
            },
            {
                /**
   * @param {string} method
   * @param {!Array.<*>} args
   * @param {?function(?Object)} callback
   */ key: "sendMessageToEmbedder",
                value: function sendMessageToEmbedder(method, args, callback) {
                    var callId = ++this._lastCallId;
                    if (callback) {
                        this._callbacks[callId] = callback;
                    }
                    var message = {
                        'id': callId,
                        'method': method
                    };
                    if (args.length) {
                        message.params = args;
                    }
                    DevToolsHost.sendMessageToEmbedder(JSON.stringify(message));
                }
            },
            {
                /**
   * @param {string} method
   * @param {!Array<*>} args
   */ key: "_dispatchOnInspectorFrontendAPI",
                value: function _dispatchOnInspectorFrontendAPI(method, args) {
                    var inspectorFrontendAPI = /** @type {!Object<string, function()>} */ window1['InspectorFrontendAPI'];
                    if (!inspectorFrontendAPI) {
                        // This is the case for device_mode_emulation_frame entrypoint. It's created via `window.open` from
                        // the DevTools window, so it shares a context with DevTools but has a separate DevToolsUIBinding and `window` object.
                        // We can safely ignore the events since they also arrive on the DevTools `window` object.
                        return;
                    }
                    inspectorFrontendAPI[method].apply(inspectorFrontendAPI, args);
                }
            },
            {
                // API methods below this line --------------------------------------------
                /**
   * @param {!Array.<!ExtensionDescriptor>} extensions
   */ key: "addExtensions",
                value: function addExtensions(extensions) {
                    // Support for legacy front-ends (<M41).
                    if (window1['WebInspector'] && window1['WebInspector']['addExtensions']) {
                        window1['WebInspector']['addExtensions'](extensions);
                    } else {
                        // The addExtensions command is sent as the onload event happens for
                        // DevTools front-end. We should buffer this command until the frontend
                        // is ready for it.
                        if (this._addExtensionCallback) {
                            extensions.forEach(this._addExtensionCallback);
                        } else {
                            var _this__pendingExtensionDescriptors;
                            (_this__pendingExtensionDescriptors = this._pendingExtensionDescriptors).push.apply(_this__pendingExtensionDescriptors, _to_consumable_array(extensions));
                        }
                    }
                }
            },
            {
                /**
   * @param {!Array<string>} forbiddenOrigins
   */ key: "setOriginsForbiddenForExtensions",
                value: function setOriginsForbiddenForExtensions(forbiddenOrigins) {
                    this._originsForbiddenForExtensions = forbiddenOrigins;
                }
            },
            {
                /**
   * @return {!Array<string>}
   */ key: "getOriginsForbiddenForExtensions",
                value: function getOriginsForbiddenForExtensions() {
                    return this._originsForbiddenForExtensions;
                }
            },
            {
                /**
   * @param {string} url
   */ key: "appendedToURL",
                value: function appendedToURL(url) {
                    this._dispatchOnInspectorFrontendAPI('appendedToURL', [
                        url
                    ]);
                }
            },
            {
                /**
   * @param {string} url
   */ key: "canceledSaveURL",
                value: function canceledSaveURL(url) {
                    this._dispatchOnInspectorFrontendAPI('canceledSaveURL', [
                        url
                    ]);
                }
            },
            {
                key: "contextMenuCleared",
                value: function contextMenuCleared() {
                    this._dispatchOnInspectorFrontendAPI('contextMenuCleared', []);
                }
            },
            {
                /**
   * @param {string} id
   */ key: "contextMenuItemSelected",
                value: function contextMenuItemSelected(id) {
                    this._dispatchOnInspectorFrontendAPI('contextMenuItemSelected', [
                        id
                    ]);
                }
            },
            {
                /**
   * @param {number} count
   */ key: "deviceCountUpdated",
                value: function deviceCountUpdated(count) {
                    this._dispatchOnInspectorFrontendAPI('deviceCountUpdated', [
                        count
                    ]);
                }
            },
            {
                /**
   * @param {!Adb.Config} config
   */ key: "devicesDiscoveryConfigChanged",
                value: function devicesDiscoveryConfigChanged(config) {
                    this._dispatchOnInspectorFrontendAPI('devicesDiscoveryConfigChanged', [
                        config
                    ]);
                }
            },
            {
                /**
   * @param {!Adb.PortForwardingStatus} status
   */ key: "devicesPortForwardingStatusChanged",
                value: function devicesPortForwardingStatusChanged(status) {
                    this._dispatchOnInspectorFrontendAPI('devicesPortForwardingStatusChanged', [
                        status
                    ]);
                }
            },
            {
                /**
   * @param {!Array.<!Adb.Device>} devices
   */ key: "devicesUpdated",
                value: function devicesUpdated(devices) {
                    this._dispatchOnInspectorFrontendAPI('devicesUpdated', [
                        devices
                    ]);
                }
            },
            {
                /**
   * @param {string} message
   */ key: "dispatchMessage",
                value: function dispatchMessage(message) {
                    this._dispatchOnInspectorFrontendAPI('dispatchMessage', [
                        message
                    ]);
                }
            },
            {
                /**
   * @param {string} messageChunk
   * @param {number} messageSize
   */ key: "dispatchMessageChunk",
                value: function dispatchMessageChunk(messageChunk, messageSize) {
                    this._dispatchOnInspectorFrontendAPI('dispatchMessageChunk', [
                        messageChunk,
                        messageSize
                    ]);
                }
            },
            {
                key: "enterInspectElementMode",
                value: function enterInspectElementMode() {
                    this._dispatchOnInspectorFrontendAPI('enterInspectElementMode', []);
                }
            },
            {
                /**
   * @param {!{r: number, g: number, b: number, a: number}} color
   */ key: "eyeDropperPickedColor",
                value: function eyeDropperPickedColor(color) {
                    this._dispatchOnInspectorFrontendAPI('eyeDropperPickedColor', [
                        color
                    ]);
                }
            },
            {
                /**
   * @param {!Array.<!{fileSystemName: string, rootURL: string, fileSystemPath: string}>} fileSystems
   */ key: "fileSystemsLoaded",
                value: function fileSystemsLoaded(fileSystems) {
                    this._dispatchOnInspectorFrontendAPI('fileSystemsLoaded', [
                        fileSystems
                    ]);
                }
            },
            {
                /**
   * @param {string} fileSystemPath
   */ key: "fileSystemRemoved",
                value: function fileSystemRemoved(fileSystemPath) {
                    this._dispatchOnInspectorFrontendAPI('fileSystemRemoved', [
                        fileSystemPath
                    ]);
                }
            },
            {
                /**
   * @param {?string} error
   * @param {?{type: string, fileSystemName: string, rootURL: string, fileSystemPath: string}} fileSystem
   */ key: "fileSystemAdded",
                value: function fileSystemAdded(error, fileSystem) {
                    this._dispatchOnInspectorFrontendAPI('fileSystemAdded', [
                        error,
                        fileSystem
                    ]);
                }
            },
            {
                /**
   * @param {!Array<string>} changedPaths
   * @param {!Array<string>} addedPaths
   * @param {!Array<string>} removedPaths
   */ key: "fileSystemFilesChangedAddedRemoved",
                value: function fileSystemFilesChangedAddedRemoved(changedPaths, addedPaths, removedPaths) {
                    // Support for legacy front-ends (<M58)
                    if (window1['InspectorFrontendAPI'] && window1['InspectorFrontendAPI']['fileSystemFilesChanged']) {
                        this._dispatchOnInspectorFrontendAPI('fileSystemFilesChanged', [
                            changedPaths.concat(addedPaths).concat(removedPaths)
                        ]);
                    } else {
                        this._dispatchOnInspectorFrontendAPI('fileSystemFilesChangedAddedRemoved', [
                            changedPaths,
                            addedPaths,
                            removedPaths
                        ]);
                    }
                }
            },
            {
                /**
   * @param {number} requestId
   * @param {string} fileSystemPath
   * @param {number} totalWork
   */ key: "indexingTotalWorkCalculated",
                value: function indexingTotalWorkCalculated(requestId, fileSystemPath, totalWork) {
                    this._dispatchOnInspectorFrontendAPI('indexingTotalWorkCalculated', [
                        requestId,
                        fileSystemPath,
                        totalWork
                    ]);
                }
            },
            {
                /**
   * @param {number} requestId
   * @param {string} fileSystemPath
   * @param {number} worked
   */ key: "indexingWorked",
                value: function indexingWorked(requestId, fileSystemPath, worked) {
                    this._dispatchOnInspectorFrontendAPI('indexingWorked', [
                        requestId,
                        fileSystemPath,
                        worked
                    ]);
                }
            },
            {
                /**
   * @param {number} requestId
   * @param {string} fileSystemPath
   */ key: "indexingDone",
                value: function indexingDone(requestId, fileSystemPath) {
                    this._dispatchOnInspectorFrontendAPI('indexingDone', [
                        requestId,
                        fileSystemPath
                    ]);
                }
            },
            {
                /**
   * @param {{type: string, key: string, code: string, keyCode: number, modifiers: number}} event
   */ key: "keyEventUnhandled",
                value: function keyEventUnhandled(event) {
                    event.keyIdentifier = keyCodeToKeyIdentifier(event.keyCode);
                    this._dispatchOnInspectorFrontendAPI('keyEventUnhandled', [
                        event
                    ]);
                }
            },
            {
                /**
   * @param {function(!ExtensionDescriptor)} callback
   */ key: "setAddExtensionCallback",
                value: function setAddExtensionCallback(callback) {
                    this._addExtensionCallback = callback;
                    if (this._pendingExtensionDescriptors.length) {
                        this._pendingExtensionDescriptors.forEach(this._addExtensionCallback);
                        this._pendingExtensionDescriptors = [];
                    }
                }
            },
            {
                /**
   * @param {boolean} hard
   */ key: "reloadInspectedPage",
                value: function reloadInspectedPage(hard) {
                    this._dispatchOnInspectorFrontendAPI('reloadInspectedPage', [
                        hard
                    ]);
                }
            },
            {
                /**
   * @param {string} url
   * @param {number} lineNumber
   * @param {number} columnNumber
   */ key: "revealSourceLine",
                value: function revealSourceLine(url, lineNumber, columnNumber) {
                    this._dispatchOnInspectorFrontendAPI('revealSourceLine', [
                        url,
                        lineNumber,
                        columnNumber
                    ]);
                }
            },
            {
                /**
   * @param {string} url
   * @param {string=} fileSystemPath
   */ key: "savedURL",
                value: function savedURL(url, fileSystemPath) {
                    this._dispatchOnInspectorFrontendAPI('savedURL', [
                        url,
                        fileSystemPath
                    ]);
                }
            },
            {
                /**
   * @param {number} requestId
   * @param {string} fileSystemPath
   * @param {!Array.<string>} files
   */ key: "searchCompleted",
                value: function searchCompleted(requestId, fileSystemPath, files) {
                    this._dispatchOnInspectorFrontendAPI('searchCompleted', [
                        requestId,
                        fileSystemPath,
                        files
                    ]);
                }
            },
            {
                key: "colorThemeChanged",
                value: function colorThemeChanged() {
                    this._dispatchOnInspectorFrontendAPI('colorThemeChanged', []);
                }
            },
            {
                /**
   * @param {string} tabId
   */ key: "setInspectedTabId",
                value: function setInspectedTabId(tabId) {
                    this._inspectedTabIdValue = tabId;
                    // Support for legacy front-ends (<M41).
                    if (window1['WebInspector'] && window1['WebInspector']['setInspectedTabId']) {
                        window1['WebInspector']['setInspectedTabId'](tabId);
                    } else {
                        this._dispatchOnInspectorFrontendAPI('setInspectedTabId', [
                            tabId
                        ]);
                    }
                }
            },
            {
                /**
   * @param {string} targetId
   */ key: "setInitialTargetId",
                value: function setInitialTargetId(targetId) {
                    this._setInitialTargetId(targetId);
                }
            },
            {
                /**
   * @return {string|undefined}
   */ key: "getInspectedTabId",
                value: function getInspectedTabId() {
                    return this._inspectedTabIdValue;
                }
            },
            {
                /**
   * @param {boolean} useSoftMenu
   */ key: "setUseSoftMenu",
                value: function setUseSoftMenu(useSoftMenu) {
                    this._dispatchOnInspectorFrontendAPI('setUseSoftMenu', [
                        useSoftMenu
                    ]);
                }
            },
            {
                /**
   * @param {string} panelName
   */ key: "showPanel",
                value: function showPanel(panelName) {
                    this._dispatchOnInspectorFrontendAPI('showPanel', [
                        panelName
                    ]);
                }
            },
            {
                /**
   * @param {number} id
   * @param {string} chunk
   * @param {boolean} encoded
   */ key: "streamWrite",
                value: function streamWrite(id, chunk, encoded) {
                    this._dispatchOnInspectorFrontendAPI('streamWrite', [
                        id,
                        encoded ? this._decodeBase64(chunk) : chunk
                    ]);
                }
            },
            {
                /**
   * @param {string} chunk
   * @return {string}
   */ key: "_decodeBase64",
                value: function _decodeBase64(chunk) {
                    var request = new XMLHttpRequest();
                    request.open('GET', 'data:text/plain;base64,' + chunk, false);
                    request.send(null);
                    if (request.status === 200) {
                        return request.responseText;
                    }
                    console.error('Error while decoding chunk in streamWrite');
                    return '';
                }
            }
        ]);
        return DevToolsAPIImpl;
    }();
    var DevToolsAPI = new DevToolsAPIImpl();
    window1.DevToolsAPI = DevToolsAPI;
    // InspectorFrontendHostImpl --------------------------------------------------
    /**
 * Enum for recordPerformanceHistogram
 * Warning: There is another definition of this enum in the DevTools code
 * base, keep them in sync:
 * front_end/core/host/InspectorFrontendHostAPI.ts
 * @readonly
 * @enum {string}
 */ var EnumeratedHistogram = {
        ActionTaken: 'DevTools.ActionTaken',
        CSSHintShown: 'DevTools.CSSHintShown',
        DeveloperResourceLoaded: 'DevTools.DeveloperResourceLoaded',
        DeveloperResourceScheme: 'DevTools.DeveloperResourceScheme',
        ExperimentDisabled: 'DevTools.ExperimentDisabled',
        ExperimentDisabledAtLaunch: 'DevTools.ExperimentDisabledAtLaunch',
        ExperimentEnabled: 'DevTools.ExperimentEnabled',
        ExperimentEnabledAtLaunch: 'DevTools.ExperimentEnabledAtLaunch',
        IssueCreated: 'DevTools.IssueCreated',
        IssuesPanelIssueExpanded: 'DevTools.IssuesPanelIssueExpanded',
        IssuesPanelOpenedFrom: 'DevTools.IssuesPanelOpenedFrom',
        IssuesPanelResourceOpened: 'DevTools.IssuesPanelResourceOpened',
        KeybindSetSettingChanged: 'DevTools.KeybindSetSettingChanged',
        KeyboardShortcutFired: 'DevTools.KeyboardShortcutFired',
        Language: 'DevTools.Language',
        LighthouseModeRun: 'DevTools.LighthouseModeRun',
        LighthouseCategoryUsed: 'DevTools.LighthouseCategoryUsed',
        ManifestSectionSelected: 'DevTools.ManifestSectionSelected',
        PanelShown: 'DevTools.PanelShown',
        PanelShownInLocation: 'DevTools.PanelShownInLocation',
        RecordingAssertion: 'DevTools.RecordingAssertion',
        RecordingCodeToggled: 'DevTools.RecordingCodeToggled',
        RecordingCopiedToClipboard: 'DevTools.RecordingCopiedToClipboard',
        RecordingEdited: 'DevTools.RecordingEdited',
        RecordingExported: 'DevTools.RecordingExported',
        RecordingReplayFinished: 'DevTools.RecordingReplayFinished',
        RecordingReplaySpeed: 'DevTools.RecordingReplaySpeed',
        RecordingReplayStarted: 'DevTools.RecordingReplayStarted',
        RecordingToggled: 'DevTools.RecordingToggled',
        SidebarPaneShown: 'DevTools.SidebarPaneShown',
        SourcesSidebarTabShown: 'DevTools.Sources.SidebarTabShown',
        SourcesPanelFileDebugged: 'DevTools.SourcesPanelFileDebugged',
        SourcesPanelFileOpened: 'DevTools.SourcesPanelFileOpened',
        NetworkPanelResponsePreviewOpened: 'DevTools.NetworkPanelResponsePreviewOpened',
        StyleTextCopied: 'DevTools.StyleTextCopied',
        SyncSetting: 'DevTools.SyncSetting',
        ColorConvertedFrom: 'DevTools.ColorConvertedFrom',
        ColorPickerOpenedFrom: 'DevTools.ColorPickerOpenedFrom',
        CSSPropertyDocumentation: 'DevTools.CSSPropertyDocumentation',
        SwatchActivated: 'DevTools.SwatchActivated',
        AnimationPlaybackRateChanged: 'DevTools.AnimationPlaybackRateChanged',
        AnimationPointDragged: 'DevTools.AnimationPointDragged',
        LegacyResourceTypeFilterNumberOfSelectedChanged: 'DevTools.LegacyResourceTypeFilterNumberOfSelectedChanged',
        LegacyResourceTypeFilterItemSelected: 'DevTools.LegacyResourceTypeFilterItemSelected',
        ResourceTypeFilterNumberOfSelectedChanged: 'DevTools.ResourceTypeFilterNumberOfSelectedChanged',
        ResourceTypeFilterItemSelected: 'DevTools.ResourceTypeFilterItemSelected',
        NetworkPanelMoreFiltersNumberOfSelectedChanged: 'DevTools.NetworkPanelMoreFiltersNumberOfSelectedChanged',
        NetworkPanelMoreFiltersItemSelected: 'DevTools.NetworkPanelMoreFiltersItemSelected'
    };
    /**
 * @implements {InspectorFrontendHostAPI}
 */ var InspectorFrontendHostImpl = /*#__PURE__*/ function() {
        "use strict";
        function InspectorFrontendHostImpl() {
            _class_call_check(this, InspectorFrontendHostImpl);
        }
        _create_class(InspectorFrontendHostImpl, [
            {
                /**
   * @return {string}
   */ key: "getSelectionBackgroundColor",
                value: function getSelectionBackgroundColor() {
                    return '#6e86ff';
                }
            },
            {
                /**
   * @return {string}
   */ key: "getSelectionForegroundColor",
                value: function getSelectionForegroundColor() {
                    return '#ffffff';
                }
            },
            {
                /**
   * @return {string}
   */ key: "getInactiveSelectionBackgroundColor",
                value: function getInactiveSelectionBackgroundColor() {
                    return '#c9c8c8';
                }
            },
            {
                /**
   * @return {string}
   */ key: "getInactiveSelectionForegroundColor",
                value: function getInactiveSelectionForegroundColor() {
                    return '#323232';
                }
            },
            {
                /**
   * @override
   * @return {string}
   */ key: "platform",
                value: function platform() {
                    return DevToolsHost.platform();
                }
            },
            {
                /**
   * @override
   */ key: "loadCompleted",
                value: function loadCompleted() {
                    DevToolsAPI.sendMessageToEmbedder('loadCompleted', [], null);
                    // Support for legacy (<57) frontends.
                    if (window1.Runtime && window1.Runtime.queryParam) {
                        var panelToOpen = window1.Runtime.queryParam('panel');
                        if (panelToOpen) {
                            window1.DevToolsAPI.showPanel(panelToOpen);
                        }
                    }
                }
            },
            {
                /**
   * @override
   */ key: "bringToFront",
                value: function bringToFront() {
                    DevToolsAPI.sendMessageToEmbedder('bringToFront', [], null);
                }
            },
            {
                /**
   * @override
   */ key: "closeWindow",
                value: function closeWindow() {
                    DevToolsAPI.sendMessageToEmbedder('closeWindow', [], null);
                }
            },
            {
                /**
   * @override
   * @param {boolean} isDocked
   * @param {function()} callback
   */ key: "setIsDocked",
                value: function setIsDocked(isDocked, callback) {
                    DevToolsAPI.sendMessageToEmbedder('setIsDocked', [
                        isDocked
                    ], callback);
                }
            },
            {
                /**
   * @override
   * @param {string} trigger
   * @param {function(!InspectorFrontendHostAPI.ShowSurveyResult): void} callback
   */ key: "showSurvey",
                value: function showSurvey(trigger, callback) {
                    DevToolsAPI.sendMessageToEmbedder('showSurvey', [
                        trigger
                    ], /** @type {function(?Object)} */ callback);
                }
            },
            {
                /**
   * @override
   * @param {string} trigger
   * @param {function(!InspectorFrontendHostAPI.CanShowSurveyResult): void} callback
   */ key: "canShowSurvey",
                value: function canShowSurvey(trigger, callback) {
                    DevToolsAPI.sendMessageToEmbedder('canShowSurvey', [
                        trigger
                    ], /** @type {function(?Object)} */ callback);
                }
            },
            {
                /**
   * Requests inspected page to be placed atop of the inspector frontend with specified bounds.
   * @override
   * @param {{x: number, y: number, width: number, height: number}} bounds
   */ key: "setInspectedPageBounds",
                value: function setInspectedPageBounds(bounds) {
                    DevToolsAPI.sendMessageToEmbedder('setInspectedPageBounds', [
                        bounds
                    ], null);
                }
            },
            {
                /**
   * @override
   */ key: "inspectElementCompleted",
                value: function inspectElementCompleted() {
                    DevToolsAPI.sendMessageToEmbedder('inspectElementCompleted', [], null);
                }
            },
            {
                /**
   * @override
   * @param {string} url
   * @param {string} headers
   * @param {number} streamId
   * @param {function(!InspectorFrontendHostAPI.LoadNetworkResourceResult): void} callback
   */ key: "loadNetworkResource",
                value: function loadNetworkResource(url, headers, streamId, callback) {
                    DevToolsAPI.sendMessageToEmbedder('loadNetworkResource', [
                        url,
                        headers,
                        streamId
                    ], /** @type {function(?Object)} */ callback);
                }
            },
            {
                /**
   * @override
   * @param {string} name
   * @param {!{synced: (boolean|undefined)}} options
   */ key: "registerPreference",
                value: function registerPreference(name, options) {
                    DevToolsAPI.sendMessageToEmbedder('registerPreference', [
                        name,
                        options
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {function(!Object<string, string>)} callback
   */ key: "getPreferences",
                value: function getPreferences(callback) {
                    DevToolsAPI.sendMessageToEmbedder('getPreferences', [], /** @type {function(?Object)} */ callback);
                }
            },
            {
                /**
   * @override
   * @param {string} name
   * @param {function(string)} callback
   */ key: "getPreference",
                value: function getPreference(name, callback) {
                    DevToolsAPI.sendMessageToEmbedder('getPreference', [
                        name
                    ], /** @type {function(string)} */ callback);
                }
            },
            {
                /**
   * @override
   * @param {string} name
   * @param {string} value
   */ key: "setPreference",
                value: function setPreference(name, value) {
                    DevToolsAPI.sendMessageToEmbedder('setPreference', [
                        name,
                        value
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} name
   */ key: "removePreference",
                value: function removePreference(name) {
                    DevToolsAPI.sendMessageToEmbedder('removePreference', [
                        name
                    ], null);
                }
            },
            {
                /**
   * @override
   */ key: "clearPreferences",
                value: function clearPreferences() {
                    DevToolsAPI.sendMessageToEmbedder('clearPreferences', [], null);
                }
            },
            {
                /**
   * @override
   * @param {!function(!InspectorFrontendHostAPI.SyncInformation):void} callback
   */ key: "getSyncInformation",
                value: function getSyncInformation(callback) {
                    DevToolsAPI.sendMessageToEmbedder('getSyncInformation', [], callback);
                }
            },
            {
                /**
   * @override
   * @param {function(Object<string, Object<string, string|boolean>>):void} callback
   */ key: "getHostConfig",
                value: function getHostConfig(callback) {
                    DevToolsAPI.sendMessageToEmbedder('getHostConfig', [], /** @type {function(?Object)} */ callback);
                }
            },
            {
                /**
   * @override
   * @param {string} origin
   * @param {string} script
   */ key: "setInjectedScriptForOrigin",
                value: function setInjectedScriptForOrigin(origin, script) {
                    DevToolsAPI.sendMessageToEmbedder('registerExtensionsAPI', [
                        origin,
                        script
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} url
   */ key: "inspectedURLChanged",
                value: function inspectedURLChanged(url) {
                    DevToolsAPI.sendMessageToEmbedder('inspectedURLChanged', [
                        url
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} text
   */ key: "copyText",
                value: function copyText(text) {
                    DevToolsHost.copyText(text);
                }
            },
            {
                /**
   * @override
   * @param {string} url
   */ key: "openInNewTab",
                value: function openInNewTab(url) {
                    DevToolsAPI.sendMessageToEmbedder('openInNewTab', [
                        url
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} query
   */ key: "openSearchResultsInNewTab",
                value: function openSearchResultsInNewTab(query) {
                    DevToolsAPI.sendMessageToEmbedder('openSearchResultsInNewTab', [
                        query
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} fileSystemPath
   */ key: "showItemInFolder",
                value: function showItemInFolder(fileSystemPath) {
                    DevToolsAPI.sendMessageToEmbedder('showItemInFolder', [
                        fileSystemPath
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} url
   * @param {string} content
   * @param {boolean} forceSaveAs
   * @param {boolean} isBase64
   */ key: "save",
                value: function save(url, content, forceSaveAs, isBase64) {
                    DevToolsAPI.sendMessageToEmbedder('save', [
                        url,
                        content,
                        forceSaveAs,
                        isBase64
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} url
   * @param {string} content
   */ key: "append",
                value: function append(url, content) {
                    DevToolsAPI.sendMessageToEmbedder('append', [
                        url,
                        content
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} url
   */ key: "close",
                value: function close(url) {}
            },
            {
                /**
   * @override
   * @param {string} message
   */ key: "sendMessageToBackend",
                value: function sendMessageToBackend(message) {
                    DevToolsAPI.sendMessageToEmbedder('dispatchProtocolMessage', [
                        message
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} histogramName
   * @param {number} sample
   * @param {number} min
   * @param {number} exclusiveMax
   * @param {number} bucketSize
   */ key: "recordCountHistogram",
                value: function recordCountHistogram(histogramName, sample, min, exclusiveMax, bucketSize) {
                    DevToolsAPI.sendMessageToEmbedder('recordCountHistogram', [
                        histogramName,
                        sample,
                        min,
                        exclusiveMax,
                        bucketSize
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {!InspectorFrontendHostAPI.EnumeratedHistogram} actionName
   * @param {number} actionCode
   * @param {number} bucketSize
   */ key: "recordEnumeratedHistogram",
                value: function recordEnumeratedHistogram(actionName, actionCode, bucketSize) {
                    if (!Object.values(EnumeratedHistogram).includes(actionName)) {
                        return;
                    }
                    DevToolsAPI.sendMessageToEmbedder('recordEnumeratedHistogram', [
                        actionName,
                        actionCode,
                        bucketSize
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} histogramName
   * @param {number} duration
   */ key: "recordPerformanceHistogram",
                value: function recordPerformanceHistogram(histogramName, duration) {
                    DevToolsAPI.sendMessageToEmbedder('recordPerformanceHistogram', [
                        histogramName,
                        duration
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} umaName
   */ key: "recordUserMetricsAction",
                value: function recordUserMetricsAction(umaName) {
                    DevToolsAPI.sendMessageToEmbedder('recordUserMetricsAction', [
                        umaName
                    ], null);
                }
            },
            {
                /**
   * @override
   */ key: "requestFileSystems",
                value: function requestFileSystems() {
                    DevToolsAPI.sendMessageToEmbedder('requestFileSystems', [], null);
                }
            },
            {
                /**
   * @override
   * @param {string=} type
   */ key: "addFileSystem",
                value: function addFileSystem(type) {
                    DevToolsAPI.sendMessageToEmbedder('addFileSystem', [
                        type || ''
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} fileSystemPath
   */ key: "removeFileSystem",
                value: function removeFileSystem(fileSystemPath) {
                    DevToolsAPI.sendMessageToEmbedder('removeFileSystem', [
                        fileSystemPath
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} fileSystemId
   * @param {string} registeredName
   * @return {?FileSystem}
   */ key: "isolatedFileSystem",
                value: function isolatedFileSystem(fileSystemId, registeredName) {
                    return DevToolsHost.isolatedFileSystem(fileSystemId, registeredName);
                }
            },
            {
                /**
   * @override
   * @param {!FileSystem} fileSystem
   */ key: "upgradeDraggedFileSystemPermissions",
                value: function upgradeDraggedFileSystemPermissions(fileSystem) {
                    DevToolsHost.upgradeDraggedFileSystemPermissions(fileSystem);
                }
            },
            {
                /**
   * @override
   * @param {number} requestId
   * @param {string} fileSystemPath
   * @param {string} excludedFolders
   */ key: "indexPath",
                value: function indexPath(requestId, fileSystemPath, excludedFolders) {
                    // |excludedFolders| added in M67. For backward compatibility,
                    // pass empty array.
                    excludedFolders = excludedFolders || '[]';
                    DevToolsAPI.sendMessageToEmbedder('indexPath', [
                        requestId,
                        fileSystemPath,
                        excludedFolders
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {number} requestId
   */ key: "stopIndexing",
                value: function stopIndexing(requestId) {
                    DevToolsAPI.sendMessageToEmbedder('stopIndexing', [
                        requestId
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {number} requestId
   * @param {string} fileSystemPath
   * @param {string} query
   */ key: "searchInPath",
                value: function searchInPath(requestId, fileSystemPath, query) {
                    DevToolsAPI.sendMessageToEmbedder('searchInPath', [
                        requestId,
                        fileSystemPath,
                        query
                    ], null);
                }
            },
            {
                /**
   * @override
   * @return {number}
   */ key: "zoomFactor",
                value: function zoomFactor() {
                    return DevToolsHost.zoomFactor();
                }
            },
            {
                /**
   * @override
   */ key: "zoomIn",
                value: function zoomIn() {
                    DevToolsAPI.sendMessageToEmbedder('zoomIn', [], null);
                }
            },
            {
                /**
   * @override
   */ key: "zoomOut",
                value: function zoomOut() {
                    DevToolsAPI.sendMessageToEmbedder('zoomOut', [], null);
                }
            },
            {
                /**
   * @override
   */ key: "resetZoom",
                value: function resetZoom() {
                    DevToolsAPI.sendMessageToEmbedder('resetZoom', [], null);
                }
            },
            {
                /**
   * @override
   * @param {string} shortcuts
   */ key: "setWhitelistedShortcuts",
                value: function setWhitelistedShortcuts(shortcuts) {
                    DevToolsAPI.sendMessageToEmbedder('setWhitelistedShortcuts', [
                        shortcuts
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {boolean} active
   */ key: "setEyeDropperActive",
                value: function setEyeDropperActive(active) {
                    DevToolsAPI.sendMessageToEmbedder('setEyeDropperActive', [
                        active
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {!Array<string>} certChain
   */ key: "showCertificateViewer",
                value: function showCertificateViewer(certChain) {
                    DevToolsAPI.sendMessageToEmbedder('showCertificateViewer', [
                        JSON.stringify(certChain)
                    ], null);
                }
            },
            {
                /**
   * Only needed to run Lighthouse on old devtools.
   * @override
   * @param {function()} callback
   */ key: "reattach",
                value: function reattach(callback) {
                    DevToolsAPI.sendMessageToEmbedder('reattach', [], callback);
                }
            },
            {
                /**
   * @override
   */ key: "readyForTest",
                value: function readyForTest() {
                    DevToolsAPI.sendMessageToEmbedder('readyForTest', [], null);
                }
            },
            {
                /**
   * @override
   */ key: "connectionReady",
                value: function connectionReady() {
                    DevToolsAPI.sendMessageToEmbedder('connectionReady', [], null);
                }
            },
            {
                /**
   * @override
   * @param {boolean} value
   */ key: "setOpenNewWindowForPopups",
                value: function setOpenNewWindowForPopups(value) {
                    DevToolsAPI.sendMessageToEmbedder('setOpenNewWindowForPopups', [
                        value
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {!Adb.Config} config
   */ key: "setDevicesDiscoveryConfig",
                value: function setDevicesDiscoveryConfig(config) {
                    DevToolsAPI.sendMessageToEmbedder('setDevicesDiscoveryConfig', [
                        config.discoverUsbDevices,
                        config.portForwardingEnabled,
                        JSON.stringify(config.portForwardingConfig),
                        config.networkDiscoveryEnabled,
                        JSON.stringify(config.networkDiscoveryConfig)
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {boolean} enabled
   */ key: "setDevicesUpdatesEnabled",
                value: function setDevicesUpdatesEnabled(enabled) {
                    DevToolsAPI.sendMessageToEmbedder('setDevicesUpdatesEnabled', [
                        enabled
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} pageId
   * @param {string} action
   */ key: "performActionOnRemotePage",
                value: function performActionOnRemotePage(pageId, action) {
                    DevToolsAPI.sendMessageToEmbedder('performActionOnRemotePage', [
                        pageId,
                        action
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {string} browserId
   * @param {string} url
   */ key: "openRemotePage",
                value: function openRemotePage(browserId, url) {
                    DevToolsAPI.sendMessageToEmbedder('openRemotePage', [
                        browserId,
                        url
                    ], null);
                }
            },
            {
                /**
   * @override
   */ key: "openNodeFrontend",
                value: function openNodeFrontend() {
                    DevToolsAPI.sendMessageToEmbedder('openNodeFrontend', [], null);
                }
            },
            {
                /**
   * @override
   * @param {number} x
   * @param {number} y
   * @param {!Array.<!InspectorFrontendHostAPI.ContextMenuDescriptor>} items
   * @param {!Document} document
   */ key: "showContextMenuAtPoint",
                value: function showContextMenuAtPoint(x, y, items, document1) {
                    DevToolsHost.showContextMenuAtPoint(x, y, items, document1);
                }
            },
            {
                /**
   * @override
   * @return {boolean}
   */ key: "isHostedMode",
                value: function isHostedMode() {
                    return DevToolsHost.isHostedMode();
                }
            },
            {
                /**
   * @override
   * @param {function(!ExtensionDescriptor)} callback
   */ key: "setAddExtensionCallback",
                value: function setAddExtensionCallback(callback) {
                    DevToolsAPI.setAddExtensionCallback(callback);
                }
            },
            {
                /**
   * @override
   * @param {InspectorFrontendHostAPI.ImpressionEvent} impressionEvent
   */ key: "recordImpression",
                value: function recordImpression(impressionEvent) {
                    DevToolsAPI.sendMessageToEmbedder('recordImpression', [
                        impressionEvent
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {InspectorFrontendHostAPI.ResizeEvent} resizeEvent
   */ key: "recordResize",
                value: function recordResize(resizeEvent) {
                    DevToolsAPI.sendMessageToEmbedder('recordResize', [
                        resizeEvent
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {InspectorFrontendHostAPI.ClickEvent} clickEvent
   */ key: "recordClick",
                value: function recordClick(clickEvent) {
                    DevToolsAPI.sendMessageToEmbedder('recordClick', [
                        clickEvent
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {InspectorFrontendHostAPI.HoverEvent} hoverEvent
   */ key: "recordHover",
                value: function recordHover(hoverEvent) {
                    DevToolsAPI.sendMessageToEmbedder('recordHover', [
                        hoverEvent
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {InspectorFrontendHostAPI.DragEvent} dragEvent
   */ key: "recordDrag",
                value: function recordDrag(dragEvent) {
                    DevToolsAPI.sendMessageToEmbedder('recordDrag', [
                        dragEvent
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {InspectorFrontendHostAPI.ChangeEvent} changeEvent
   */ key: "recordChange",
                value: function recordChange(changeEvent) {
                    DevToolsAPI.sendMessageToEmbedder('recordChange', [
                        changeEvent
                    ], null);
                }
            },
            {
                /**
   * @override
   * @param {InspectorFrontendHostAPI.KeyDownEvent} keyDownEvent
   */ key: "recordKeyDown",
                value: function recordKeyDown(keyDownEvent) {
                    DevToolsAPI.sendMessageToEmbedder('recordKeyDown', [
                        keyDownEvent
                    ], null);
                }
            },
            {
                // Backward-compatible methods below this line --------------------------------------------
                /**
   * Support for legacy front-ends (<M65).
   * @return {boolean}
   */ key: "isUnderTest",
                value: function isUnderTest() {
                    return false;
                }
            },
            {
                /**
   * Support for legacy front-ends (<M50).
   * @param {string} message
   */ key: "sendFrontendAPINotification",
                value: function sendFrontendAPINotification(message) {}
            },
            {
                /**
   * Support for legacy front-ends (<M41).
   * @return {string}
   */ key: "port",
                value: function port() {
                    return 'unknown';
                }
            },
            {
                /**
   * Support for legacy front-ends (<M38).
   * @param {number} zoomFactor
   */ key: "setZoomFactor",
                value: function setZoomFactor(zoomFactor) {}
            },
            {
                /**
   * Support for legacy front-ends (<M34).
   */ key: "sendMessageToEmbedder",
                value: function sendMessageToEmbedder() {}
            },
            {
                /**
   * Support for legacy front-ends (<M34).
   * @param {string} dockSide
   */ key: "requestSetDockSide",
                value: function requestSetDockSide(dockSide) {
                    DevToolsAPI.sendMessageToEmbedder('setIsDocked', [
                        dockSide !== 'undocked'
                    ], null);
                }
            },
            {
                /**
   * Support for legacy front-ends (<M34).
   * @return {boolean}
   */ key: "supportsFileSystems",
                value: function supportsFileSystems() {
                    return true;
                }
            },
            {
                /**
   * Support for legacy front-ends (<M44).
   * @param {number} actionCode
   */ key: "recordActionTaken",
                value: function recordActionTaken(actionCode) {
                // Do not record actions, as that may crash the DevTools renderer.
                }
            },
            {
                /**
   * Support for legacy front-ends (<M44).
   * @param {number} panelCode
   */ key: "recordPanelShown",
                value: function recordPanelShown(panelCode) {
                // Do not record actions, as that may crash the DevTools renderer.
                }
            },
            {
                /**
   * @return {!Promise<string>}
   */ key: "initialTargetId",
                value: function initialTargetId() {
                    return DevToolsAPI._initialTargetIdPromise;
                }
            },
            {
                /**
   * @param {string} request
   * @param {number} streamId
   * @param {function(!InspectorFrontendHostAPI.DoAidaConversationResult): void} cb
   */ key: "doAidaConversation",
                value: function doAidaConversation(request, streamId, cb) {
                    DevToolsAPI.sendMessageToEmbedder('doAidaConversation', [
                        request,
                        streamId
                    ], cb);
                }
            },
            {
                /**
   * @param {string} request
   * @param {function(!InspectorFrontendHostAPI.AidaClientResult): void} cb
   */ key: "registerAidaClientEvent",
                value: function registerAidaClientEvent(request, cb) {
                    DevToolsAPI.sendMessageToEmbedder('registerAidaClientEvent', [
                        request
                    ], cb);
                }
            }
        ]);
        return InspectorFrontendHostImpl;
    }();
    window1.InspectorFrontendHost = new InspectorFrontendHostImpl();
    // DevToolsApp ---------------------------------------------------------------
    function installObjectObserve() {
        /** @type {!Array<string>} */ var properties = [
            'advancedSearchConfig',
            'auditsPanelSplitViewState',
            'auditsSidebarWidth',
            'blockedURLs',
            'breakpoints',
            'cacheDisabled',
            'colorFormat',
            'consoleHistory',
            'consoleTimestampsEnabled',
            'cpuProfilerView',
            'cssSourceMapsEnabled',
            'currentDockState',
            'customColorPalette',
            'customDevicePresets',
            'customEmulatedDeviceList',
            'customFormatters',
            'customUserAgent',
            'databaseTableViewVisibleColumns',
            'dataGrid-cookiesTable',
            'dataGrid-DOMStorageItemsView',
            'debuggerSidebarHidden',
            'disablePausedStateOverlay',
            'domBreakpoints',
            'domWordWrap',
            'elementsPanelSplitViewState',
            'elementsSidebarWidth',
            'emulation.deviceHeight',
            'emulation.deviceModeValue',
            'emulation.deviceOrientationOverride',
            'emulation.deviceScale',
            'emulation.deviceScaleFactor',
            'emulation.deviceUA',
            'emulation.deviceWidth',
            'emulation.locationOverride',
            'emulation.showDeviceMode',
            'emulation.showRulers',
            'enableAsyncStackTraces',
            'enableIgnoreListing',
            'eventListenerBreakpoints',
            'fileMappingEntries',
            'fileSystemMapping',
            'FileSystemViewSidebarWidth',
            'fileSystemViewSplitViewState',
            'filterBar-consoleView',
            'filterBar-networkPanel',
            'filterBar-promisePane',
            'filterBar-timelinePanel',
            'frameViewerHideChromeWindow',
            'heapSnapshotRetainersViewSize',
            'heapSnapshotSplitViewState',
            'hideCollectedPromises',
            'hideNetworkMessages',
            'highlightNodeOnHoverInOverlay',
            'inlineVariableValues',
            'Inspector.drawerSplitView',
            'Inspector.drawerSplitViewState',
            'InspectorView.panelOrder',
            'InspectorView.screencastSplitView',
            'InspectorView.screencastSplitViewState',
            'InspectorView.splitView',
            'InspectorView.splitViewState',
            'javaScriptDisabled',
            'jsSourceMapsEnabled',
            'lastActivePanel',
            'lastDockState',
            'lastSelectedSourcesSidebarPaneTab',
            'lastSnippetEvaluationIndex',
            'layerDetailsSplitView',
            'layerDetailsSplitViewState',
            'layersPanelSplitViewState',
            'layersShowInternalLayers',
            'layersSidebarWidth',
            'messageLevelFilters',
            'messageURLFilters',
            'monitoringXHREnabled',
            'navigatorGroupByAuthored',
            'navigatorGroupByFolder',
            'navigatorHidden',
            'networkColorCodeResourceTypes',
            'networkConditions',
            'networkConditionsCustomProfiles',
            'networkHideDataURL',
            'networkLogColumnsVisibility',
            'networkLogLargeRows',
            'networkLogShowOverview',
            'networkPanelSplitViewState',
            'networkRecordFilmStripSetting',
            'networkResourceTypeFilters',
            'networkShowPrimaryLoadWaterfall',
            'networkSidebarWidth',
            'openLinkHandler',
            'pauseOnUncaughtException',
            'pauseOnCaughtException',
            'pauseOnExceptionEnabled',
            'preserveConsoleLog',
            'prettyPrintInfobarDisabled',
            'previouslyViewedFiles',
            'profilesPanelSplitViewState',
            'profilesSidebarWidth',
            'promiseStatusFilters',
            'recordAllocationStacks',
            'requestHeaderFilterSetting',
            'request-info-formData-category-expanded',
            'request-info-general-category-expanded',
            'request-info-queryString-category-expanded',
            'request-info-requestHeaders-category-expanded',
            'request-info-requestPayload-category-expanded',
            'request-info-responseHeaders-category-expanded',
            'resources',
            'resourcesLastSelectedItem',
            'resourcesPanelSplitViewState',
            'resourcesSidebarWidth',
            'resourceViewTab',
            'savedURLs',
            'screencastEnabled',
            'scriptsPanelNavigatorSidebarWidth',
            'searchInContentScripts',
            'selectedAuditCategories',
            'selectedColorPalette',
            'selectedProfileType',
            'shortcutPanelSwitch',
            'showAdvancedHeapSnapshotProperties',
            'showEventListenersForAncestors',
            'showFrameowkrListeners',
            'showHeaSnapshotObjectsHiddenProperties',
            'showInheritedComputedStyleProperties',
            'showMediaQueryInspector',
            'showUAShadowDOM',
            'showWhitespacesInEditor',
            'sidebarPosition',
            'skipContentScripts',
            'automaticallyIgnoreListKnownThirdPartyScripts',
            'skipStackFramesPattern',
            'sourceMapInfobarDisabled',
            'sourceMapSkippedInfobarDisabled',
            'sourcesPanelDebuggerSidebarSplitViewState',
            'sourcesPanelNavigatorSplitViewState',
            'sourcesPanelSplitSidebarRatio',
            'sourcesPanelSplitViewState',
            'sourcesSidebarWidth',
            'standardEmulatedDeviceList',
            'StylesPaneSplitRatio',
            'stylesPaneSplitViewState',
            'textEditorAutocompletion',
            'textEditorAutoDetectIndent',
            'textEditorBracketMatching',
            'textEditorIndent',
            'textEditorTabMovesFocus',
            'timelineCaptureFilmStrip',
            'timelineCaptureLayersAndPictures',
            'timelineCaptureMemory',
            'timelineCaptureNetwork',
            'timeline-details',
            'timelineEnableJSSampling',
            'timelineOverviewMode',
            'timelinePanelDetailsSplitViewState',
            'timelinePanelRecorsSplitViewState',
            'timelinePanelTimelineStackSplitViewState',
            'timelinePerspective',
            'timeline-split',
            'timelineTreeGroupBy',
            'timeline-view',
            'timelineViewMode',
            'uiTheme',
            'watchExpressions',
            'WebInspector.Drawer.lastSelectedView',
            'WebInspector.Drawer.showOnLoad',
            'workspaceExcludedFolders',
            'workspaceFolderExcludePattern',
            'workspaceInfobarDisabled',
            'workspaceMappingInfobarDisabled',
            'xhrBreakpoints'
        ];
        /**
   * @this {!{_storage: Object, _name: string}}
   */ function settingRemove() {
            this._storage[this._name] = undefined;
        }
        /**
   * @param {!Object} object
   * @param {function(!Array<!{name: string}>)} observer
   */ function objectObserve(object, observer) {
            if (window1['WebInspector']) {
                var settingPrototype = /** @type {!Object} */ window1['WebInspector']['Setting']['prototype'];
                if (typeof settingPrototype['remove'] === 'function') {
                    settingPrototype['remove'] = settingRemove;
                }
            }
            /** @type {!Set<string>} */ var changedProperties = new Set();
            var scheduled = false;
            function scheduleObserver() {
                if (scheduled) {
                    return;
                }
                scheduled = true;
                queueMicrotask(callObserver);
            }
            function callObserver() {
                scheduled = false;
                var changes = /** @type {!Array<!{name: string}>} */ [];
                changedProperties.forEach(function(name) {
                    changes.push({
                        name: name
                    });
                });
                changedProperties.clear();
                observer.call(null, changes);
            }
            /** @type {!Map<string, *>} */ var storage = new Map();
            /**
     * @param {string} property
     */ function defineProperty(property) {
                if (property in object) {
                    storage.set(property, object[property]);
                    delete object[property];
                }
                Object.defineProperty(object, property, {
                    /**
         * @return {*}
         */ get: function get() {
                        return storage.get(property);
                    },
                    /**
         * @param {*} value
         */ set: function set(value) {
                        storage.set(property, value);
                        changedProperties.add(property);
                        scheduleObserver();
                    }
                });
            }
            for(var i = 0; i < properties.length; ++i){
                defineProperty(properties[i]);
            }
        }
        window1.Object.observe = objectObserve;
    }
    /** @type {!Map<number, string>} */ var staticKeyIdentifiers = new Map([
        [
            0x12,
            'Alt'
        ],
        [
            0x11,
            'Control'
        ],
        [
            0x10,
            'Shift'
        ],
        [
            0x14,
            'CapsLock'
        ],
        [
            0x5b,
            'Win'
        ],
        [
            0x5c,
            'Win'
        ],
        [
            0x0c,
            'Clear'
        ],
        [
            0x28,
            'Down'
        ],
        [
            0x23,
            'End'
        ],
        [
            0x0a,
            'Enter'
        ],
        [
            0x0d,
            'Enter'
        ],
        [
            0x2b,
            'Execute'
        ],
        [
            0x70,
            'F1'
        ],
        [
            0x71,
            'F2'
        ],
        [
            0x72,
            'F3'
        ],
        [
            0x73,
            'F4'
        ],
        [
            0x74,
            'F5'
        ],
        [
            0x75,
            'F6'
        ],
        [
            0x76,
            'F7'
        ],
        [
            0x77,
            'F8'
        ],
        [
            0x78,
            'F9'
        ],
        [
            0x79,
            'F10'
        ],
        [
            0x7a,
            'F11'
        ],
        [
            0x7b,
            'F12'
        ],
        [
            0x7c,
            'F13'
        ],
        [
            0x7d,
            'F14'
        ],
        [
            0x7e,
            'F15'
        ],
        [
            0x7f,
            'F16'
        ],
        [
            0x80,
            'F17'
        ],
        [
            0x81,
            'F18'
        ],
        [
            0x82,
            'F19'
        ],
        [
            0x83,
            'F20'
        ],
        [
            0x84,
            'F21'
        ],
        [
            0x85,
            'F22'
        ],
        [
            0x86,
            'F23'
        ],
        [
            0x87,
            'F24'
        ],
        [
            0x2f,
            'Help'
        ],
        [
            0x24,
            'Home'
        ],
        [
            0x2d,
            'Insert'
        ],
        [
            0x25,
            'Left'
        ],
        [
            0x22,
            'PageDown'
        ],
        [
            0x21,
            'PageUp'
        ],
        [
            0x13,
            'Pause'
        ],
        [
            0x2c,
            'PrintScreen'
        ],
        [
            0x27,
            'Right'
        ],
        [
            0x91,
            'Scroll'
        ],
        [
            0x29,
            'Select'
        ],
        [
            0x26,
            'Up'
        ],
        [
            0x2e,
            'U+007F'
        ],
        [
            0xb0,
            'MediaNextTrack'
        ],
        [
            0xb1,
            'MediaPreviousTrack'
        ],
        [
            0xb2,
            'MediaStop'
        ],
        [
            0xb3,
            'MediaPlayPause'
        ],
        [
            0xad,
            'VolumeMute'
        ],
        [
            0xae,
            'VolumeDown'
        ],
        [
            0xaf,
            'VolumeUp'
        ]
    ]);
    /**
 * @param {number} keyCode
 * @return {string}
 */ function keyCodeToKeyIdentifier(keyCode) {
        var result = staticKeyIdentifiers.get(keyCode);
        if (result !== undefined) {
            return result;
        }
        result = 'U+';
        var hexString = keyCode.toString(16).toUpperCase();
        for(var i = hexString.length; i < 4; ++i){
            result += '0';
        }
        result += hexString;
        return result;
    }
    function installBackwardsCompatibility() {
        var majorVersion = getRemoteMajorVersion();
        if (!majorVersion) {
            return;
        }
        /** @type {!Array<string>} */ var styleRules = [];
        // Shadow DOM V0 polyfill
        if (majorVersion <= 73 && !Element.prototype.createShadowRoot) {
            Element.prototype.createShadowRoot = function() {
                try {
                    return this.attachShadow({
                        mode: 'open'
                    });
                } catch (e) {
                    // some elements we use to add shadow roots can no
                    // longer have shadow roots.
                    var fakeShadowHost = document.createElement('span');
                    this.appendChild(fakeShadowHost);
                    fakeShadowHost.className = 'fake-shadow-host';
                    return fakeShadowHost.createShadowRoot();
                }
            };
            var origAdd = DOMTokenList.prototype.add;
            DOMTokenList.prototype.add = function() {
                for(var _len = arguments.length, tokens = new Array(_len), _key = 0; _key < _len; _key++){
                    tokens[_key] = arguments[_key];
                }
                if (tokens[0].startsWith('insertion-point') || tokens[0].startsWith('tabbed-pane-header')) {
                    this._myElement.slot = '.' + tokens[0];
                }
                return origAdd.apply(this, tokens);
            };
            var origCreateElement = Document.prototype.createElement;
            Document.prototype.createElement = function(tagName) {
                for(var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    rest[_key - 1] = arguments[_key];
                }
                var _origCreateElement;
                if (tagName === 'content') {
                    tagName = 'slot';
                }
                var element = (_origCreateElement = origCreateElement).call.apply(_origCreateElement, [
                    this,
                    tagName
                ].concat(_to_consumable_array(rest)));
                element.classList._myElement = element;
                return element;
            };
            Object.defineProperty(HTMLSlotElement.prototype, 'select', {
                set: function set(selector) {
                    this.name = selector;
                }
            });
        }
        // Custom Elements V0 polyfill
        if (majorVersion <= 73 && !Document.prototype.hasOwnProperty('registerElement')) {
            var fakeRegistry = new Map();
            Document.prototype.registerElement = function(typeExtension, options) {
                var prototype = options.prototype, localName = options.extends;
                var document1 = this;
                var callback = function callback() {
                    var element = document1.createElement(localName || typeExtension);
                    var skip = new Set([
                        'constructor',
                        '__proto__'
                    ]);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = Object.keys(Object.getOwnPropertyDescriptors(prototype.__proto__ || {}))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var key = _step.value;
                            if (skip.has(key)) {
                                continue;
                            }
                            element[key] = prototype[key];
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
                    element.setAttribute('is', typeExtension);
                    if (element['createdCallback']) {
                        element['createdCallback']();
                    }
                    return element;
                };
                fakeRegistry.set(typeExtension, callback);
                return callback;
            };
            var origCreateElement1 = Document.prototype.createElement;
            Document.prototype.createElement = function(tagName, fakeCustomElementType) {
                var fakeConstructor = fakeRegistry.get(fakeCustomElementType);
                if (fakeConstructor) {
                    return fakeConstructor();
                }
                return origCreateElement1.call(this, tagName, fakeCustomElementType);
            };
            // DevTools front-ends mistakenly assume that
            //   classList.toggle('a', undefined) works as
            //   classList.toggle('a', false) rather than as
            //   classList.toggle('a');
            var originalDOMTokenListToggle = DOMTokenList.prototype.toggle;
            DOMTokenList.prototype.toggle = function(token, force) {
                if (arguments.length === 1) {
                    force = !this.contains(token);
                }
                return originalDOMTokenListToggle.call(this, token, Boolean(force));
            };
        }
        if (majorVersion <= 66) {
            /** @type {(!function(number, number):Element|undefined)} */ ShadowRoot.prototype.__originalShadowRootElementFromPoint;
            if (!ShadowRoot.prototype.__originalShadowRootElementFromPoint) {
                ShadowRoot.prototype.__originalShadowRootElementFromPoint = ShadowRoot.prototype.elementFromPoint;
                /**
       *  @param {number} x
       *  @param {number} y
       *  @return {Element}
       */ ShadowRoot.prototype.elementFromPoint = function(x, y) {
                    var originalResult = ShadowRoot.prototype.__originalShadowRootElementFromPoint.apply(this, arguments);
                    if (this.host && originalResult === this.host) {
                        return null;
                    }
                    return originalResult;
                };
            }
        }
        if (majorVersion <= 53) {
            Object.defineProperty(window1.KeyboardEvent.prototype, 'keyIdentifier', {
                /**
       * @return {string}
       * @this {KeyboardEvent}
       */ get: function get() {
                    return keyCodeToKeyIdentifier(this.keyCode);
                }
            });
        }
        if (majorVersion <= 50) {
            installObjectObserve();
        }
        if (majorVersion <= 71) {
            styleRules.push('.coverage-toolbar-container, .animation-timeline-toolbar-container, .computed-properties { flex-basis: auto; }');
        }
        if (majorVersion <= 50) {
            Event.prototype.deepPath = undefined;
        }
        if (majorVersion <= 54) {
            window1.FileError = /** @type {!function (new: FileError) : ?} */ {
                NOT_FOUND_ERR: DOMException.NOT_FOUND_ERR,
                ABORT_ERR: DOMException.ABORT_ERR,
                INVALID_MODIFICATION_ERR: DOMException.INVALID_MODIFICATION_ERR,
                NOT_READABLE_ERR: 0 // No matching DOMException, so code will be 0.
            };
        }
        installExtraStyleRules(styleRules);
    }
    /**
 * @return {?number}
 */ function getRemoteMajorVersion() {
        try {
            var remoteVersion = new URLSearchParams(window1.location.search).get('remoteVersion');
            if (!remoteVersion) {
                return null;
            }
            var majorVersion = parseInt(remoteVersion.split('.')[0], 10);
            return majorVersion;
        } catch (e) {
            return null;
        }
    }
    /**
 * @param {!Array<string>} styleRules
 */ function installExtraStyleRules(styleRules) {
        if (!styleRules.length) {
            return;
        }
        var styleText = styleRules.join('\n');
        document.head.appendChild(createStyleElement(styleText));
        var origCreateShadowRoot = HTMLElement.prototype.createShadowRoot;
        HTMLElement.prototype.createShadowRoot = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            var _origCreateShadowRoot;
            var shadowRoot = (_origCreateShadowRoot = origCreateShadowRoot).call.apply(_origCreateShadowRoot, [
                this
            ].concat(_to_consumable_array(args)));
            shadowRoot.appendChild(createStyleElement(styleText));
            return shadowRoot;
        };
    }
    /**
 * @param {string} styleText
 * @return {!Element}
 */ function createStyleElement(styleText) {
        var style = document.createElement('style');
        style.textContent = styleText;
        return style;
    }
    installBackwardsCompatibility();
})(window);


}),

}]);