(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_workspace_FileManager_js_map"],{

/***/ "./models/workspace/FileManager.js.map":
/*!*********************************************!*\
  !*** ./models/workspace/FileManager.js.map ***!
  \*********************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"FileManager.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/workspace/FileManager.ts\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"/*\\n * Copyright (C) 2012 Google Inc. All rights reserved.\\n *\\n * Redistribution and use in source and binary forms, with or without\\n * modification, are permitted provided that the following conditions are\\n * met:\\n *\\n *     * Redistributions of source code must retain the above copyright\\n * notice, this list of conditions and the following disclaimer.\\n *     * Redistributions in binary form must reproduce the above\\n * copyright notice, this list of conditions and the following disclaimer\\n * in the documentation and/or other materials provided with the\\n * distribution.\\n *     * Neither the name of Google Inc. nor the names of its\\n * contributors may be used to endorse or promote products derived from\\n * this software without specific prior written permission.\\n *\\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\\n * \\\"AS IS\\\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\\n */\\n\\nimport * as Common from '../../core/common/common.js';\\nimport * as Host from '../../core/host/host.js';\\nimport type * as Platform from '../../core/platform/platform.js';\\n\\nlet fileManagerInstance: FileManager|null;\\n\\ninterface SaveCallbackParam {\\n  fileSystemPath?: Platform.DevToolsPath.RawPathString|Platform.DevToolsPath.UrlString;\\n}\\n\\nexport class FileManager extends Common.ObjectWrapper.ObjectWrapper<EventTypes> {\\n  private readonly saveCallbacks:\\n      Map<Platform.DevToolsPath.RawPathString|Platform.DevToolsPath.UrlString, (arg0: SaveCallbackParam|null) => void>;\\n  private constructor() {\\n    super();\\n    this.saveCallbacks = new Map();\\n    Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(\\n        Host.InspectorFrontendHostAPI.Events.SavedURL, this.savedURL, this);\\n    Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(\\n        Host.InspectorFrontendHostAPI.Events.CanceledSaveURL, this.canceledSavedURL, this);\\n    Host.InspectorFrontendHost.InspectorFrontendHostInstance.events.addEventListener(\\n        Host.InspectorFrontendHostAPI.Events.AppendedToURL, this.appendedToURL, this);\\n  }\\n\\n  static instance(opts: {forceNew: boolean|null} = {forceNew: null}): FileManager {\\n    const {forceNew} = opts;\\n    if (!fileManagerInstance || forceNew) {\\n      fileManagerInstance = new FileManager();\\n    }\\n\\n    return fileManagerInstance;\\n  }\\n\\n  // close() *must* be called, for the InspectorFrontendHostStub case, to complete the saving.\\n  save(\\n      url: Platform.DevToolsPath.RawPathString|Platform.DevToolsPath.UrlString, content: string, forceSaveAs: boolean,\\n      isBase64: boolean): Promise<SaveCallbackParam|null> {\\n    // Remove this url from the saved URLs while it is being saved.\\n    const result = new Promise<SaveCallbackParam|null>(resolve => this.saveCallbacks.set(url, resolve));\\n    Host.InspectorFrontendHost.InspectorFrontendHostInstance.save(url, content, forceSaveAs, isBase64);\\n    return result;\\n  }\\n\\n  private savedURL(event: Common.EventTarget.EventTargetEvent<Host.InspectorFrontendHostAPI.SavedURLEvent>): void {\\n    const {url, fileSystemPath} = event.data;\\n    const callback = this.saveCallbacks.get(url);\\n    this.saveCallbacks.delete(url);\\n    if (callback) {\\n      callback({fileSystemPath});\\n    }\\n  }\\n\\n  private canceledSavedURL({data: url}: Common.EventTarget.EventTargetEvent<Platform.DevToolsPath.UrlString>): void {\\n    const callback = this.saveCallbacks.get(url);\\n    this.saveCallbacks.delete(url);\\n    if (callback) {\\n      callback(null);\\n    }\\n  }\\n\\n  append(url: Platform.DevToolsPath.RawPathString|Platform.DevToolsPath.UrlString, content: string): void {\\n    Host.InspectorFrontendHost.InspectorFrontendHostInstance.append(url, content);\\n  }\\n\\n  close(url: Platform.DevToolsPath.RawPathString|Platform.DevToolsPath.UrlString): void {\\n    Host.InspectorFrontendHost.InspectorFrontendHostInstance.close(url);\\n  }\\n\\n  private appendedToURL({data: url}: Common.EventTarget.EventTargetEvent<string>): void {\\n    this.dispatchEventToListeners(Events.AppendedToURL, url);\\n  }\\n}\\n\\nexport const enum Events {\\n  AppendedToURL = 'AppendedToURL',\\n}\\n\\nexport type EventTypes = {\\n  [Events.AppendedToURL]: string,\\n};\\n\"]}");

/***/ })

}]);