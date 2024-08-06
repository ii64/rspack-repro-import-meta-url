"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_lit_lib_directives_d_ts"], {
"./third_party/lit/lib/directives.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ClassMapDirective: function() { return ClassMapDirective; },
  LiveDirective: function() { return LiveDirective; },
  Ref: function() { return Ref; },
  RefDirective: function() { return RefDirective; },
  RepeatDirective: function() { return RepeatDirective; },
  StyleMapDirective: function() { return StyleMapDirective; },
  UnsafeHTMLDirective: function() { return UnsafeHTMLDirective; },
  UntilDirective: function() { return UntilDirective; },
  classMap: function() { return classMap; },
  createRef: function() { return createRef; },
  ifDefined: function() { return ifDefined; },
  live: function() { return live; },
  ref: function() { return ref; },
  repeat: function() { return repeat; },
  styleMap: function() { return styleMap; },
  unsafeHTML: function() { return unsafeHTML; },
  until: function() { return until; }
});
/// <reference types="trusted-types" />
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ /**
 * A function which can sanitize values that will be written to a specific kind
 * of DOM sink.
 *
 * See SanitizerFactory.
 *
 * @param value The value to sanitize. Will be the actual value passed into
 *     the lit-html template literal, so this could be of any type.
 * @return The value to write to the DOM. Usually the same as the input value,
 *     unless sanitization is needed.
 */ 


}),

}]);