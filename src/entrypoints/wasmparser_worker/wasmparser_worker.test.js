// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { describeWithEnvironment } from '../../testing/EnvironmentHelpers.js';
describeWithEnvironment('WasmParserWorker', () => {
    it('module can be imported', async () => {
        await import('./wasmparser_worker.js');
    });
});
//# sourceMappingURL=wasmparser_worker.test.js.map