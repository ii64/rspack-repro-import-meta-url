(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_text_utils_WasmDisassembly_js_map"], {
"./models/text_utils/WasmDisassembly.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"WasmDisassembly.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/models/text_utils/WasmDisassembly.ts\"],\"names\":[],\"mappings\":\"AAAA,4DAA4D;AAC5D,yEAAyE;AACzE,6BAA6B;AAE7B,OAAO,KAAK,QAAQ,MAAM,iCAAiC,CAAC;AAE5D,OAAO,EAAC,WAAW,EAAC,MAAM,kBAAkB,CAAC;AAQ7C;;;GAGG;AACH,MAAM,OAAO,eAAgB,SAAQ,WAAW;IACrC,KAAK,CAAW;IAChB,QAAQ,CAAW;IAC5B,oBAAoB,CAAuB;IAE3C,qEAAqE;IACrE,WAAW,CAAU;IAErB,YAAY,KAAe,EAAE,OAAiB,EAAE,mBAAyC;QACvF,KAAK,CAAC,EAAE,EAAE,cAAc,CAAC,KAAK,EAAE,aAAa,EAAE,OAAO,CAAC,CAAC;QACxD,IAAI,KAAK,CAAC,MAAM,KAAK,OAAO,CAAC,MAAM,EAAE,CAAC;YACpC,MAAM,IAAI,KAAK,CAAC,gCAAgC,CAAC,CAAC;QACpD,CAAC;QACD,IAAI,CAAC,KAAK,GAAG,KAAK,CAAC;QACnB,IAAI,CAAC,QAAQ,GAAG,OAAO,CAAC;QACxB,IAAI,CAAC,oBAAoB,GAAG,mBAAmB,CAAC;IAClD,CAAC;IAED,IAAa,IAAI;QACf,IAAI,OAAO,IAAI,CAAC,WAAW,KAAK,WAAW,EAAE,CAAC;YAC5C,IAAI,CAAC,WAAW,GAAG,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC;QAC3C,CAAC;QACD,OAAO,IAAI,CAAC,WAAW,CAAC;IAC1B,CAAC;IAED,IAAa,OAAO;QAClB,wGAAwG;QACxG,OAAO,IAAI,CAAC,KAAK,CAAC,MAAM,KAAK,CAAC,IAAI,CAAC,IAAI,CAAC,KAAK,CAAC,MAAM,KAAK,CAAC,IAAI,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,MAAM,KAAK,CAAC,CAAC,CAAC;IAC5F,CAAC;IAED,IAAI,WAAW;QACb,OAAO,IAAI,CAAC,QAAQ,CAAC,MAAM,CAAC;IAC9B,CAAC;IAED,0BAA0B,CAAC,cAAsB;QAC/C,OAAO,QAAQ,CAAC,cAAc,CAAC,UAAU,CAC9B,IAAI,CAAC,QAAQ,EAAE,cAAc,EAAE,QAAQ,CAAC,cAAc,CAAC,kBAAkB,CAAC;YACjF,CAAC,CAAC;IACR,CAAC;IAED,0BAA0B,CAAC,UAAkB;QAC3C,OAAO,IAAI,CAAC,QAAQ,CAAC,UAAU,CAAC,CAAC;IACnC,CAAC;IAED;;OAEG;IACH,CAAE,uBAAuB;QACvB,IAAI,UAAU,GAAG,CAAC,CAAC;QACnB,IAAI,aAAa,GAAG,CAAC,CAAC;QACtB,OAAO,UAAU,GAAG,IAAI,CAAC,WAAW,EAAE,CAAC;YACrC,IAAI,aAAa,GAAG,IAAI,CAAC,oBAAoB,CAAC,MAAM,EAAE,CAAC;gBACrD,MAAM,MAAM,GAAG,IAAI,CAAC,0BAA0B,CAAC,UAAU,CAAC,CAAC;gBAC3D,IAAI,MAAM,IAAI,IAAI,CAAC,oBAAoB,CAAC,aAAa,CAAC,CAAC,KAAK,EAAE,CAAC;oBAC7D,UAAU,GAAG,IAAI,CAAC,0BAA0B,CAAC,IAAI,CAAC,oBAAoB,CAAC,aAAa,EAAE,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC;oBACjG,SAAS;gBACX,CAAC;YACH,CAAC;YACD,MAAM,UAAU,EAAE,CAAC;QACrB,CAAC;IACH,CAAC;IAED;;OAEG;IACM,gBAAgB;QACvB,OAAO,EAAC,OAAO,EAAE,EAAE,EAAE,SAAS,EAAE,KAAK,EAAE,mBAAmB,EAAE,IAAI,EAAC,CAAC;IACpE,CAAC;CACF\",\"sourcesContent\":[\"// Copyright 2024 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Platform from '../../core/platform/platform.js';\\n\\nimport {ContentData} from './ContentData.js';\\nimport { type DeferredContent } from './ContentProvider.js';\\n\\ninterface FunctionBodyOffset {\\n  start: number;\\n  end: number;\\n}\\n\\n/**\\n * Metadata to map between bytecode #offsets and line numbers in the\\n * disassembly for WebAssembly modules.\\n */\\nexport class WasmDisassembly extends ContentData {\\n  readonly lines: string[];\\n  readonly #offsets: number[];\\n  #functionBodyOffsets: FunctionBodyOffset[];\\n\\n  // Wasm can be potentially very large, so we calculate `text' lazily.\\n  #cachedText?: string;\\n\\n  constructor(lines: string[], offsets: number[], functionBodyOffsets: FunctionBodyOffset[]) {\\n    super('', /* isBase64 */ false, 'text/x-wast', 'utf-8');\\n    if (lines.length !== offsets.length) {\\n      throw new Error('Lines and offsets don\\\\'t match');\\n    }\\n    this.lines = lines;\\n    this.#offsets = offsets;\\n    this.#functionBodyOffsets = functionBodyOffsets;\\n  }\\n\\n  override get text(): string {\\n    if (typeof this.#cachedText === 'undefined') {\\n      this.#cachedText = this.lines.join('\\\\n');\\n    }\\n    return this.#cachedText;\\n  }\\n\\n  override get isEmpty(): boolean {\\n    // Don't trigger unnecessary concatenating. Only check whether we have no lines, or a single empty line.\\n    return this.lines.length === 0 || (this.lines.length === 1 && this.lines[0].length === 0);\\n  }\\n\\n  get lineNumbers(): number {\\n    return this.#offsets.length;\\n  }\\n\\n  bytecodeOffsetToLineNumber(bytecodeOffset: number): number {\\n    return Platform.ArrayUtilities.upperBound(\\n               this.#offsets, bytecodeOffset, Platform.ArrayUtilities.DEFAULT_COMPARATOR) -\\n        1;\\n  }\\n\\n  lineNumberToBytecodeOffset(lineNumber: number): number {\\n    return this.#offsets[lineNumber];\\n  }\\n\\n  /**\\n   * returns an iterable enumerating all the non-breakable line numbers in the disassembly\\n   */\\n  * nonBreakableLineNumbers(): Iterable<number> {\\n    let lineNumber = 0;\\n    let functionIndex = 0;\\n    while (lineNumber < this.lineNumbers) {\\n      if (functionIndex < this.#functionBodyOffsets.length) {\\n        const offset = this.lineNumberToBytecodeOffset(lineNumber);\\n        if (offset >= this.#functionBodyOffsets[functionIndex].start) {\\n          lineNumber = this.bytecodeOffsetToLineNumber(this.#functionBodyOffsets[functionIndex++].end) + 1;\\n          continue;\\n        }\\n      }\\n      yield lineNumber++;\\n    }\\n  }\\n\\n  /**\\n   * @deprecated Used during migration from `DeferredContent` to `ContentData`.\\n   */\\n  override asDeferedContent(): DeferredContent {\\n    return {content: '', isEncoded: false, wasmDisassemblyInfo: this};\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);