(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_platform_KeyboardUtilities_test_js_map"], {
"./core/platform/KeyboardUtilities.test.js.map": (function () {
throw new Error("  \u001b[31m×\u001b[0m Module parse failed:\n\u001b[31m  ╰─▶ \u001b[0m  \u001b[31m×\u001b[0m JavaScript parsing error: Expected ';', '}' or <eof>\n\u001b[31m      \u001b[0m   ╭────\n\u001b[31m      \u001b[0m \u001b[2m1\u001b[0m │ {\"version\":3,\"file\":\"KeyboardUtilities.test.js\",\"sourceRoot\":\"\",\"sources\":[\"../../../../../../front_end/core/platform/KeyboardUtilities.test.ts\"],\"names\":[],\"mappings\":\"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\",\"sourcesContent\":[\"// Copyright (c) 2020 The Chromium Authors. All rights reserved.\\n// Use of this source code is governed by a BSD-style license that can be\\n// found in the LICENSE file.\\n\\nimport * as Platform from './platform.js';\\n\\ndescribe('KeyboardUtilities', () => {\\n  describe('#keyIsArrowKey', () => {\\n    it('returns true for ArrowUp, ArrowDown, ArrowLeft and ArrowRight', () => {\\n      const keysAreArrowKeys = [\\n        'ArrowDown',\\n        'ArrowUp',\\n        'ArrowLeft',\\n        'ArrowRight',\\n      ].map(key => Platform.KeyboardUtilities.keyIsArrowKey(key));\\n      assert.deepEqual(keysAreArrowKeys, [true, true, true, true]);\\n    });\\n    it('returns false for anything else', () => {\\n      const keysAreNotArrowKeys = [\\n        'Enter',\\n        ' ',\\n        'a',\\n        'C',\\n      ].map(key => Platform.KeyboardUtilities.keyIsArrowKey(key));\\n      assert.deepEqual(keysAreNotArrowKeys, [false, false, false, false]);\\n    });\\n  });\\n\\n  describe('isEscKey', () => {\\n    it('is true for the escape key', () => {\\n      const event = new KeyboardEvent('keydown', {key: 'Escape'});\\n      assert.isTrue(Platform.KeyboardUtilities.isEscKey(event));\\n    });\\n\\n    it('is false for another key', () => {\\n      const event = new KeyboardEvent('keydown', {key: 'Enter'});\\n      assert.isFalse(Platform.KeyboardUtilities.isEscKey(event));\\n    });\\n  });\\n\\n  describe('isEnterOrSpaceKey', () => {\\n    it('returns true for enter', () => {\\n      const event = new KeyboardEvent('keydown', {key: 'Enter'});\\n      assert.isTrue(Platform.KeyboardUtilities.isEnterOrSpaceKey(event));\\n    });\\n\\n    it('returns true for space', () => {\\n      const event = new KeyboardEvent('keydown', {key: ' '});\\n      assert.isTrue(Platform.KeyboardUtilities.isEnterOrSpaceKey(event));\\n    });\\n\\n    it('returns false for any other key', () => {\\n      const event = new KeyboardEvent('keydown', {key: 'a'});\\n      assert.isFalse(Platform.KeyboardUtilities.isEnterOrSpaceKey(event));\\n    });\\n  });\\n});\\n\"]}\n\u001b[31m      \u001b[0m   · \u001b[35;1m          ─\u001b[0m\n\u001b[31m      \u001b[0m   ╰────\n\u001b[31m      \u001b[0m\n\u001b[36m  help: \u001b[0m\n        You may need an appropriate loader to handle this file type.\n");


}),

}]);