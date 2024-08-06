(self["webpackChunk"] = self["webpackChunk"] || []).push([["core_sdk_WebAuthnModel_js_map"],{

/***/ "./core/sdk/WebAuthnModel.js.map":
/*!***************************************!*\
  !*** ./core/sdk/WebAuthnModel.js.map ***!
  \***************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"WebAuthnModel.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/sdk/WebAuthnModel.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAK7B,OAAO,EAAC,QAAQ,EAAC,MAAM,eAAe,CAAC;AAavC,MAAM,OAAO,aAAc,SAAQ,QAAoB;IAC5C,MAAM,CAA+B;IAC9C,YAAY,MAAc;QACxB,KAAK,CAAC,MAAM,CAAC,CAAC;QACd,IAAI,CAAC,MAAM,GAAG,MAAM,CAAC,aAAa,EAAE,CAAC;QACrC,MAAM,CAAC,0BAA0B,CAAC,IAAI,kBAAkB,CAAC,IAAI,CAAC,CAAC,CAAC;IAClE,CAAC;IAED,wBAAwB,CAAC,MAAe;QACtC,IAAI,MAAM,EAAE,CAAC;YACX,OAAO,IAAI,CAAC,MAAM,CAAC,aAAa,CAAC,EAAC,QAAQ,EAAE,IAAI,EAAC,CAAC,CAAC;QACrD,CAAC;QACD,OAAO,IAAI,CAAC,MAAM,CAAC,cAAc,EAAE,CAAC;IACtC,CAAC;IAED,KAAK,CAAC,gBAAgB,CAAC,OAAsD;QAE3E,MAAM,QAAQ,GAAG,MAAM,IAAI,CAAC,MAAM,CAAC,8BAA8B,CAAC,EAAC,OAAO,EAAC,CAAC,CAAC;QAC7E,OAAO,QAAQ,CAAC,eAAe,CAAC;IAClC,CAAC;IAED,KAAK,CAAC,mBAAmB,CAAC,eAAkD;QAC1E,MAAM,IAAI,CAAC,MAAM,CAAC,iCAAiC,CAAC,EAAC,eAAe,EAAC,CAAC,CAAC;IACzE,CAAC;IAED,KAAK,CAAC,8BAA8B,CAAC,eAAkD,EAAE,OAAgB;QAEvG,MAAM,IAAI,CAAC,MAAM,CAAC,qCAAqC,CAAC,EAAC,eAAe,EAAE,OAAO,EAAC,CAAC,CAAC;IACtF,CAAC;IAED,KAAK,CAAC,cAAc,CAAC,eAAkD;QACrE,MAAM,QAAQ,GAAG,MAAM,IAAI,CAAC,MAAM,CAAC,qBAAqB,CAAC,EAAC,eAAe,EAAC,CAAC,CAAC;QAC5E,OAAO,QAAQ,CAAC,WAAW,CAAC;IAC9B,CAAC;IAED,KAAK,CAAC,gBAAgB,CAAC,eAAkD,EAAE,YAAoB;QAC7F,MAAM,IAAI,CAAC,MAAM,CAAC,uBAAuB,CAAC,EAAC,eAAe,EAAE,YAAY,EAAC,CAAC,CAAC;IAC7E,CAAC;IAED,eAAe,CAAC,MAA8C;QAC5D,IAAI,CAAC,wBAAwB,iDAAyB,MAAM,CAAC,CAAC;IAChE,CAAC;IAED,kBAAkB,CAAC,MAAiD;QAClE,IAAI,CAAC,wBAAwB,uDAA4B,MAAM,CAAC,CAAC;IACnE,CAAC;CACF;AAED,MAAM,kBAAkB;IACb,MAAM,CAAgB;IAC/B,YAAY,KAAoB;QAC9B,IAAI,CAAC,MAAM,GAAG,KAAK,CAAC;IACtB,CAAC;IAED,eAAe,CAAC,MAA8C;QAC5D,IAAI,CAAC,MAAM,CAAC,eAAe,CAAC,MAAM,CAAC,CAAC;IACtC,CAAC;IAED,kBAAkB,CAAC,MAAiD;QAClE,IAAI,CAAC,MAAM,CAAC,kBAAkB,CAAC,MAAM,CAAC,CAAC;IACzC,CAAC;CACF;AAED,QAAQ,CAAC,QAAQ,CAAC,aAAa,EAAE,EAAC,YAAY,iCAAqB,EAAE,SAAS,EAAE,KAAK,EAAC,CAAC,CAAC\",\"sourcesContent\":[\"// Copyright 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as ProtocolProxyApi from '../../generated/protocol-proxy-api.js';\\nimport type * as Protocol from '../../generated/protocol.js';\\n\\nimport {SDKModel} from './SDKModel.js';\\nimport {Capability, type Target} from './Target.js';\\n\\nexport const enum Events {\\n  CredentialAdded = 'CredentialAdded',\\n  CredentialAsserted = 'CredentialAsserted',\\n}\\n\\nexport type EventTypes = {\\n  [Events.CredentialAdded]: Protocol.WebAuthn.CredentialAddedEvent,\\n  [Events.CredentialAsserted]: Protocol.WebAuthn.CredentialAssertedEvent,\\n};\\n\\nexport class WebAuthnModel extends SDKModel<EventTypes> {\\n  readonly #agent: ProtocolProxyApi.WebAuthnApi;\\n  constructor(target: Target) {\\n    super(target);\\n    this.#agent = target.webAuthnAgent();\\n    target.registerWebAuthnDispatcher(new WebAuthnDispatcher(this));\\n  }\\n\\n  setVirtualAuthEnvEnabled(enable: boolean): Promise<Object> {\\n    if (enable) {\\n      return this.#agent.invoke_enable({enableUI: true});\\n    }\\n    return this.#agent.invoke_disable();\\n  }\\n\\n  async addAuthenticator(options: Protocol.WebAuthn.VirtualAuthenticatorOptions):\\n      Promise<Protocol.WebAuthn.AuthenticatorId> {\\n    const response = await this.#agent.invoke_addVirtualAuthenticator({options});\\n    return response.authenticatorId;\\n  }\\n\\n  async removeAuthenticator(authenticatorId: Protocol.WebAuthn.AuthenticatorId): Promise<void> {\\n    await this.#agent.invoke_removeVirtualAuthenticator({authenticatorId});\\n  }\\n\\n  async setAutomaticPresenceSimulation(authenticatorId: Protocol.WebAuthn.AuthenticatorId, enabled: boolean):\\n      Promise<void> {\\n    await this.#agent.invoke_setAutomaticPresenceSimulation({authenticatorId, enabled});\\n  }\\n\\n  async getCredentials(authenticatorId: Protocol.WebAuthn.AuthenticatorId): Promise<Protocol.WebAuthn.Credential[]> {\\n    const response = await this.#agent.invoke_getCredentials({authenticatorId});\\n    return response.credentials;\\n  }\\n\\n  async removeCredential(authenticatorId: Protocol.WebAuthn.AuthenticatorId, credentialId: string): Promise<void> {\\n    await this.#agent.invoke_removeCredential({authenticatorId, credentialId});\\n  }\\n\\n  credentialAdded(params: Protocol.WebAuthn.CredentialAddedEvent): void {\\n    this.dispatchEventToListeners(Events.CredentialAdded, params);\\n  }\\n\\n  credentialAsserted(params: Protocol.WebAuthn.CredentialAssertedEvent): void {\\n    this.dispatchEventToListeners(Events.CredentialAsserted, params);\\n  }\\n}\\n\\nclass WebAuthnDispatcher implements ProtocolProxyApi.WebAuthnDispatcher {\\n  readonly #model: WebAuthnModel;\\n  constructor(model: WebAuthnModel) {\\n    this.#model = model;\\n  }\\n\\n  credentialAdded(params: Protocol.WebAuthn.CredentialAddedEvent): void {\\n    this.#model.credentialAdded(params);\\n  }\\n\\n  credentialAsserted(params: Protocol.WebAuthn.CredentialAssertedEvent): void {\\n    this.#model.credentialAsserted(params);\\n  }\\n}\\n\\nSDKModel.register(WebAuthnModel, {capabilities: Capability.WebAuthn, autostart: false});\\n\"]}");

/***/ })

}]);