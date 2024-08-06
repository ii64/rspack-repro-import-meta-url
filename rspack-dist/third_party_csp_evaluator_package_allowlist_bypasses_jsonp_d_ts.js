"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["third_party_csp_evaluator_package_allowlist_bypasses_jsonp_d_ts"], {
"./third_party/csp_evaluator/package/allowlist_bypasses/jsonp.d.ts": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/**
 * @fileoverview Collection of popular sites/CDNs hosting JSONP-like endpoints.
 * Endpoints don't contain necessary parameters to trigger JSONP response
 * because parameters are ignored in CSP allowlists.
 * Usually per domain only one (popular) file path is listed to allow bypasses
 * of the most common path based allowlists. It's not practical to ship a list
 * for all possible paths/domains. Therefore the jsonp bypass check usually only
 * works efficient for domain based allowlists.
 * @author lwe@google.com (Lukas Weichselbaum)
 *
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * Some JSONP-like bypasses only work if the CSP allows 'eval()'.
 */ /**
 * JSONP endpoints on commonly allowlisted origins (e.g. CDNs) that would allow
 * a CSP bypass.
 * Only most common paths are listed here. Hence there might still be other
 * paths on these domains that would allow a bypass.
 */ 


}),

}]);