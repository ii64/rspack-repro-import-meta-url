(self["webpackChunk"] = self["webpackChunk"] || []).push([["third_party_csp_evaluator_package_finding_js_map"],{

/***/ "./third_party/csp_evaluator/package/finding.js.map":
/*!**********************************************************!*\
  !*** ./third_party/csp_evaluator/package/finding.js.map ***!
  \**********************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:10)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> {\"version\":3,\"file\":\"finding.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../../front_end/third_party/csp_evaluator/package/finding.ts\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;;;;;GAgBG;AAGH;;;;;GAKG;AACH,MAAM,OAAO,OAAO;IASP;IAAmB;IAA4B;IAC/C;IAA0B;IATrC;;;;;;OAMG;IACH,YACW,IAAU,EAAS,WAAmB,EAAS,QAAkB,EACjE,SAAiB,EAAS,KAAc;QADxC,SAAI,GAAJ,IAAI,CAAM;QAAS,gBAAW,GAAX,WAAW,CAAQ;QAAS,aAAQ,GAAR,QAAQ,CAAU;QACjE,cAAS,GAAT,SAAS,CAAQ;QAAS,UAAK,GAAL,KAAK,CAAS;IAAG,CAAC;IAEvD;;;;OAIG;IACH,MAAM,CAAC,kBAAkB,CAAC,QAAmB;QAC3C,IAAI,QAAQ,CAAC,MAAM,KAAK,CAAC,EAAE,CAAC;YAC1B,OAAO,QAAQ,CAAC,IAAI,CAAC;QACvB,CAAC;QAED,MAAM,UAAU,GAAG,QAAQ,CAAC,GAAG,CAAC,CAAC,OAAO,EAAE,EAAE,CAAC,OAAO,CAAC,QAAQ,CAAC,CAAC;QAC/D,MAAM,GAAG,GAAG,CAAC,IAAc,EAAE,GAAa,EAAE,EAAE,CAAC,IAAI,GAAG,GAAG,CAAC,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC;QACvE,OAAO,UAAU,CAAC,MAAM,CAAC,GAAG,EAAE,QAAQ,CAAC,IAAI,CAAC,CAAC;IAC/C,CAAC;IAED,MAAM,CAAC,GAAY;QACjB,IAAI,CAAC,CAAC,GAAG,YAAY,OAAO,CAAC,EAAE,CAAC;YAC9B,OAAO,KAAK,CAAC;QACf,CAAC;QACD,OAAO,GAAG,CAAC,IAAI,KAAK,IAAI,CAAC,IAAI,IAAI,GAAG,CAAC,WAAW,KAAK,IAAI,CAAC,WAAW;YACjE,GAAG,CAAC,QAAQ,KAAK,IAAI,CAAC,QAAQ,IAAI,GAAG,CAAC,SAAS,KAAK,IAAI,CAAC,SAAS;YAClE,GAAG,CAAC,KAAK,KAAK,IAAI,CAAC,KAAK,CAAC;IAC/B,CAAC;CACF;AAGD;;GAEG;AACH,MAAM,CAAN,IAAY,QASX;AATD,WAAY,QAAQ;IAClB,wCAAS,CAAA;IACT,4CAAW,CAAA;IACX,4CAAW,CAAA;IACX,oDAAe,CAAA;IACf,oDAAe,CAAA;IACf,wDAAiB,CAAA;IACjB,wCAAS,CAAA;IACT,yCAAU,CAAA;AACZ,CAAC,EATW,QAAQ,KAAR,QAAQ,QASnB;AAGD;;GAEG;AACH,MAAM,CAAN,IAAY,IAkCX;AAlCD,WAAY,IAAI;IACd,gBAAgB;IAChB,2DAAuB,CAAA;IACvB,2DAAiB,CAAA;IACjB,uDAAe,CAAA;IACf,mDAAmB,CAAA;IAEnB,iBAAiB;IACjB,6DAAwB,CAAA;IACxB,iEAAoB,CAAA;IACpB,6DAAkB,CAAA;IAClB,2DAAiB,CAAA;IACjB,qDAAc,CAAA;IACd,uEAAuB,CAAA;IACvB,uEAAuB,CAAA;IACvB,iDAAY,CAAA;IACZ,2CAAS,CAAA;IACT,iEAAoB,CAAA;IACpB,yCAAQ,CAAA;IAER,mDAAmD;IACnD,qDAAoB,CAAA;IACpB,mFAA6B,CAAA;IAC7B,6CAAU,CAAA;IACV,qEAAsB,CAAA;IACtB,6DAAkB,CAAA;IAClB,uCAAO,CAAA;IAEP,uBAAuB;IACvB,2FAAuC,CAAA;IAEvC,oBAAoB;IACpB,mFAAmC,CAAA;IACnC,qDAAc,CAAA;AAChB,CAAC,EAlCW,IAAI,KAAJ,IAAI,QAkCf\",\"sourcesContent\":[\"/**\\n * @license\\n * Copyright 2016 Google Inc. All rights reserved.\\n * Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n * you may not use this file except in compliance with the License.\\n * You may obtain a copy of the License at\\n *\\n *   http://www.apache.org/licenses/LICENSE-2.0\\n *\\n * Unless required by applicable law or agreed to in writing, software\\n * distributed under the License is distributed on an \\\"AS IS\\\" BASIS,\\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n * See the License for the specific language governing permissions and\\n * limitations under the License.\\n *\\n * @author lwe@google.com (Lukas Weichselbaum)\\n */\\n\\n\\n/**\\n * A CSP Finding is returned by a CSP check and can either reference a directive\\n * value or a directive. If a directive value is referenced opt_index must be\\n * provided.\\n * @unrestricted\\n */\\nexport class Finding {\\n  /**\\n   * @param type Type of the finding.\\n   * @param description Description of the finding.\\n   * @param severity Severity of the finding.\\n   * @param directive The CSP directive in which the finding occurred.\\n   * @param value The directive value, if exists.\\n   */\\n  constructor(\\n      public type: Type, public description: string, public severity: Severity,\\n      public directive: string, public value?: string) {}\\n\\n  /**\\n   * Returns the highest severity of a list of findings.\\n   * @param findings List of findings.\\n   * @return highest severity of a list of findings.\\n   */\\n  static getHighestSeverity(findings: Finding[]): Severity {\\n    if (findings.length === 0) {\\n      return Severity.NONE;\\n    }\\n\\n    const severities = findings.map((finding) => finding.severity);\\n    const min = (prev: Severity, cur: Severity) => prev < cur ? prev : cur;\\n    return severities.reduce(min, Severity.NONE);\\n  }\\n\\n  equals(obj: unknown): boolean {\\n    if (!(obj instanceof Finding)) {\\n      return false;\\n    }\\n    return obj.type === this.type && obj.description === this.description &&\\n        obj.severity === this.severity && obj.directive === this.directive &&\\n        obj.value === this.value;\\n  }\\n}\\n\\n\\n/**\\n * Finding severities.\\n */\\nexport enum Severity {\\n  HIGH = 10,\\n  SYNTAX = 20,\\n  MEDIUM = 30,\\n  HIGH_MAYBE = 40,\\n  STRICT_CSP = 45,\\n  MEDIUM_MAYBE = 50,\\n  INFO = 60,\\n  NONE = 100\\n}\\n\\n\\n/**\\n * Finding types for evluator checks.\\n */\\nexport enum Type {\\n  // Parser checks\\n  MISSING_SEMICOLON = 100,\\n  UNKNOWN_DIRECTIVE,\\n  INVALID_KEYWORD,\\n  NONCE_CHARSET = 106,\\n\\n  // Security cheks\\n  MISSING_DIRECTIVES = 300,\\n  SCRIPT_UNSAFE_INLINE,\\n  SCRIPT_UNSAFE_EVAL,\\n  PLAIN_URL_SCHEMES,\\n  PLAIN_WILDCARD,\\n  SCRIPT_ALLOWLIST_BYPASS,\\n  OBJECT_ALLOWLIST_BYPASS,\\n  NONCE_LENGTH,\\n  IP_SOURCE,\\n  DEPRECATED_DIRECTIVE,\\n  SRC_HTTP,\\n\\n  // Strict dynamic and backward compatibility checks\\n  STRICT_DYNAMIC = 400,\\n  STRICT_DYNAMIC_NOT_STANDALONE,\\n  NONCE_HASH,\\n  UNSAFE_INLINE_FALLBACK,\\n  ALLOWLIST_FALLBACK,\\n  IGNORED,\\n\\n  // Trusted Types checks\\n  REQUIRE_TRUSTED_TYPES_FOR_SCRIPTS = 500,\\n\\n  // Lighthouse checks\\n  REPORTING_DESTINATION_MISSING = 600,\\n  REPORT_TO_ONLY,\\n}\\n\"]}");

/***/ })

}]);