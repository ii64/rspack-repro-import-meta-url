(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_common_Worker_js_map"], {
"./core/common/Worker.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"Worker.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/common/Worker.ts\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;GA4BG;AAEH,MAAM,OAAO,aAAa;IACf,cAAc,CAAkB;IACzC,SAAS,CAAW;IAEpB,YAAoB,cAAmB;QACrC,IAAI,CAAC,cAAc,GAAG,IAAI,OAAO,CAAC,OAAO,CAAC,EAAE;YAC1C,MAAM,MAAM,GAAG,IAAI,MAAM,CAAC,cAAc,EAAE,EAAC,IAAI,EAAE,QAAQ,EAAC,CAAC,CAAC;YAC5D,MAAM,CAAC,SAAS,GAAG,CAAC,KAA4B,EAAE,EAAE;gBAClD,OAAO,CAAC,MAAM,CAAC,KAAK,CAAC,IAAI,KAAK,aAAa,CAAC,CAAC;gBAC7C,MAAM,CAAC,SAAS,GAAG,IAAI,CAAC;gBACxB,OAAO,CAAC,MAAM,CAAC,CAAC;YAClB,CAAC,CAAC;QACJ,CAAC,CAAC,CAAC;IACL,CAAC;IAED,MAAM,CAAC,OAAO,CAAC,GAAQ;QACrB,OAAO,IAAI,aAAa,CAAC,GAAG,CAAC,CAAC;IAChC,CAAC;IAED,WAAW,CAAC,OAAgB;QAC1B,KAAK,IAAI,CAAC,cAAc,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE;YACrC,IAAI,CAAC,IAAI,CAAC,SAAS,EAAE,CAAC;gBACpB,MAAM,CAAC,WAAW,CAAC,OAAO,CAAC,CAAC;YAC9B,CAAC;QACH,CAAC,CAAC,CAAC;IACL,CAAC;IAED,OAAO;QACL,IAAI,CAAC,SAAS,GAAG,IAAI,CAAC;QACtB,KAAK,IAAI,CAAC,cAAc,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE,CAAC,MAAM,CAAC,SAAS,EAAE,CAAC,CAAC;IAC9D,CAAC;IAED,SAAS;QACP,IAAI,CAAC,OAAO,EAAE,CAAC;IACjB,CAAC;IAED,IAAI,SAAS,CAAC,QAAuC;QACnD,KAAK,IAAI,CAAC,cAAc,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE;YACrC,MAAM,CAAC,SAAS,GAAG,QAAQ,CAAC;QAC9B,CAAC,CAAC,CAAC;IACL,CAAC;IAED,IAAI,OAAO,CAAC,QAAgC;QAC1C,KAAK,IAAI,CAAC,cAAc,CAAC,IAAI,CAAC,MAAM,CAAC,EAAE;YACrC,MAAM,CAAC,OAAO,GAAG,QAAQ,CAAC;QAC5B,CAAC,CAAC,CAAC;IACL,CAAC;CACF\",\"sourcesContent\":[\"/*\\n * Copyright (C) 2014 Google Inc. All rights reserved.\\n *\\n * Redistribution and use in source and binary forms, with or without\\n * modification, are permitted provided that the following conditions are\\n * met:\\n *\\n *     * Redistributions of source code must retain the above copyright\\n * notice, this list of conditions and the following disclaimer.\\n *     * Redistributions in binary form must reproduce the above\\n * copyright notice, this list of conditions and the following disclaimer\\n * in the documentation and/or other materials provided with the\\n * distribution.\\n *     * Neither the name of Google Inc. nor the names of its\\n * contributors may be used to endorse or promote products derived from\\n * this software without specific prior written permission.\\n *\\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\\n * \\\"AS IS\\\" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\\n * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\\n * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\\n * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\\n * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\\n * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\\n * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\\n * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\\n * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\\n * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\\n */\\n\\nexport class WorkerWrapper {\\n  readonly #workerPromise: Promise<Worker>;\\n  #disposed?: boolean;\\n\\n  private constructor(workerLocation: URL) {\\n    this.#workerPromise = new Promise(fulfill => {\\n      const worker = new Worker(workerLocation, {type: 'module'});\\n      worker.onmessage = (event: MessageEvent<unknown>) => {\\n        console.assert(event.data === 'workerReady');\\n        worker.onmessage = null;\\n        fulfill(worker);\\n      };\\n    });\\n  }\\n\\n  static fromURL(url: URL): WorkerWrapper {\\n    return new WorkerWrapper(url);\\n  }\\n\\n  postMessage(message: unknown): void {\\n    void this.#workerPromise.then(worker => {\\n      if (!this.#disposed) {\\n        worker.postMessage(message);\\n      }\\n    });\\n  }\\n\\n  dispose(): void {\\n    this.#disposed = true;\\n    void this.#workerPromise.then(worker => worker.terminate());\\n  }\\n\\n  terminate(): void {\\n    this.dispose();\\n  }\\n\\n  set onmessage(listener: (event: MessageEvent) => void) {\\n    void this.#workerPromise.then(worker => {\\n      worker.onmessage = listener;\\n    });\\n  }\\n\\n  set onerror(listener: (event: Event) => void) {\\n    void this.#workerPromise.then(worker => {\\n      worker.onerror = listener;\\n    });\\n  }\\n}\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);