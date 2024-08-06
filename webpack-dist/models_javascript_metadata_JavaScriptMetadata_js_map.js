(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_javascript_metadata_JavaScriptMetadata_js_map"],{

/***/ "./models/javascript_metadata/JavaScriptMetadata.js.map":
/*!**************************************************************!*\
  !*** ./models/javascript_metadata/JavaScriptMetadata.js.map ***!
  \**************************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"JavaScriptMetadata.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/javascript_metadata/JavaScriptMetadata.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAI7B,OAAO,EAAC,eAAe,EAAC,MAAM,sBAAsB,CAAC;AACrD,OAAO,KAAK,mBAAmB,MAAM,0BAA0B,CAAC;AAEhE,IAAI,0BAAkD,CAAC;AAEvD,MAAM,OAAO,sBAAsB;IACjC,MAAM,CAAU,mBAAmB,GAAG,mBAAmB,CAAC;IAEzC,eAAe,CAA0B;IACzC,eAAe,CAAuC;IACvE,MAAM,CAAC,QAAQ,CAAC,OAEZ,EAAC,QAAQ,EAAE,IAAI,EAAC;QAClB,MAAM,EAAC,QAAQ,EAAC,GAAG,IAAI,CAAC;QACxB,IAAI,CAAC,0BAA0B,IAAI,QAAQ,EAAE,CAAC;YAC5C,0BAA0B,GAAG,IAAI,sBAAsB,EAAE,CAAC;QAC5D,CAAC;QAED,OAAO,0BAA0B,CAAC;IACpC,CAAC;IACD;QACE,IAAI,CAAC,eAAe,GAAG,IAAI,GAAG,EAAE,CAAC;QACjC,IAAI,CAAC,eAAe,GAAG,IAAI,GAAG,EAAE,CAAC;QAEjC,KAAK,MAAM,cAAc,IAAI,eAAe,EAAE,CAAC;YAC7C,IAAI,CAAC,cAAc,CAAC,SAAS,EAAE,CAAC;gBAC9B,IAAI,CAAC,eAAe,CAAC,GAAG,CAAC,cAAc,CAAC,IAAI,EAAE,cAAc,CAAC,UAAU,CAAC,CAAC;gBACzE,SAAS;YACX,CAAC;YACD,KAAK,MAAM,QAAQ,IAAI,cAAc,CAAC,SAAS,EAAE,CAAC;gBAChD,IAAI,MAAM,GAAG,IAAI,CAAC,eAAe,CAAC,GAAG,CAAC,QAAQ,CAAC,CAAC;gBAChD,IAAI,CAAC,MAAM,EAAE,CAAC;oBACZ,MAAM,GAAG,IAAI,GAAG,EAAE,CAAC;oBACnB,IAAI,CAAC,eAAe,CAAC,GAAG,CAAC,QAAQ,EAAE,MAAM,CAAC,CAAC;gBAC7C,CAAC;gBACD,MAAM,CAAC,GAAG,CAAC,cAAc,CAAC,IAAI,EAAE,cAAc,CAAC,UAAU,CAAC,CAAC;YAC7D,CAAC;QACH,CAAC;IACH,CAAC;IAED,2BAA2B,CAAC,IAAY;QACtC,OAAO,IAAI,CAAC,eAAe,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,IAAI,CAAC;IAChD,CAAC;IAED,2BAA2B,CAAC,IAAY,EAAE,iBAAyB;QACjE,MAAM,cAAc,GAAG,IAAI,CAAC,eAAe,CAAC,GAAG,CAAC,iBAAiB,CAAC,CAAC;QACnE,IAAI,CAAC,cAAc,EAAE,CAAC;YACpB,OAAO,IAAI,CAAC;QACd,CAAC;QACD,OAAO,cAAc,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,IAAI,CAAC;IAC1C,CAAC;IAED,yBAAyB,CAAC,IAAY,EAAE,uBAA+B;QACrE,MAAM,YAAY,GAAG,IAAI,CAAC,eAAe,CAAC,GAAG,CAAC,uBAAuB,GAAG,aAAa,CAAC,CAAC;QACvF,IAAI,CAAC,YAAY,EAAE,CAAC;YAClB,OAAO,IAAI,CAAC;QACd,CAAC;QACD,OAAO,YAAY,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,IAAI,CAAC;IACxC,CAAC\",\"sourcesContent\":[\"// Copyright 2018 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport type * as Common from '../../core/common/common.js';\\n\\nimport {NativeFunctions} from './NativeFunctions.js';\\nimport * as DOMPinnedProperties from './DOMPinnedProperties.js';\\n\\nlet javaScriptMetadataInstance: JavaScriptMetadataImpl;\\n\\nexport class JavaScriptMetadataImpl implements Common.JavaScriptMetaData.JavaScriptMetaData {\\n  static readonly domPinnedProperties = DOMPinnedProperties;\\n\\n  private readonly uniqueFunctions: Map<string, string[][]>;\\n  private readonly receiverMethods: Map<string, Map<string, string[][]>>;\\n  static instance(opts: {\\n    forceNew: boolean|null,\\n  } = {forceNew: null}): JavaScriptMetadataImpl {\\n    const {forceNew} = opts;\\n    if (!javaScriptMetadataInstance || forceNew) {\\n      javaScriptMetadataInstance = new JavaScriptMetadataImpl();\\n    }\\n\\n    return javaScriptMetadataInstance;\\n  }\\n  constructor() {\\n    this.uniqueFunctions = new Map();\\n    this.receiverMethods = new Map();\\n\\n    for (const nativeFunction of NativeFunctions) {\\n      if (!nativeFunction.receivers) {\\n        this.uniqueFunctions.set(nativeFunction.name, nativeFunction.signatures);\\n        continue;\\n      }\\n      for (const receiver of nativeFunction.receivers) {\\n        let method = this.receiverMethods.get(receiver);\\n        if (!method) {\\n          method = new Map();\\n          this.receiverMethods.set(receiver, method);\\n        }\\n        method.set(nativeFunction.name, nativeFunction.signatures);\\n      }\\n    }\\n  }\\n\\n  signaturesForNativeFunction(name: string): string[][]|null {\\n    return this.uniqueFunctions.get(name) || null;\\n  }\\n\\n  signaturesForInstanceMethod(name: string, receiverClassName: string): string[][]|null {\\n    const instanceMethod = this.receiverMethods.get(receiverClassName);\\n    if (!instanceMethod) {\\n      return null;\\n    }\\n    return instanceMethod.get(name) || null;\\n  }\\n\\n  signaturesForStaticMethod(name: string, receiverConstructorName: string): string[][]|null {\\n    const staticMethod = this.receiverMethods.get(receiverConstructorName + 'Constructor');\\n    if (!staticMethod) {\\n      return null;\\n    }\\n    return staticMethod.get(name) || null;\\n  }\\n}\\n\"]}");

/***/ })

}]);