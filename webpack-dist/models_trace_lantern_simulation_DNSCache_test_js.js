"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["models_trace_lantern_simulation_DNSCache_test_js"],{

/***/ "./models/trace/lantern/simulation/DNSCache.test.js":
/*!**********************************************************!*\
  !*** ./models/trace/lantern/simulation/DNSCache.test.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck - TODO(crbug.com/348449529) requests need to be whole Lantern.NetworkRequest objects

const { DNSCache } = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Simulation;
const MULTIPLIER = DNSCache.rttMultiplier;
describe('DNSCache', () => {
    let dns;
    let request;
    beforeEach(() => {
        dns = new DNSCache({ rtt: 100 });
        request = {
            parsedURL: {
                host: 'example.com',
                scheme: 'https',
                securityOrigin: '',
            },
        };
    });
    describe('.getTimeUntilResolution', () => {
        it('should return the RTT multiplied', () => {
            const resolutionTime = dns.getTimeUntilResolution(request);
            expect(resolutionTime).to.equal(100 * MULTIPLIER);
        });
        it('should return time with requestedAt', () => {
            const resolutionTime = dns.getTimeUntilResolution(request, { requestedAt: 1500 });
            expect(resolutionTime).to.equal(100 * MULTIPLIER);
        });
        it('should not cache by default', () => {
            dns.getTimeUntilResolution(request, { requestedAt: 0 });
            const resolutionTime = dns.getTimeUntilResolution(request, { requestedAt: 1000 });
            expect(resolutionTime).to.equal(100 * MULTIPLIER);
        });
        it('should cache when told', () => {
            dns.getTimeUntilResolution(request, { requestedAt: 0, shouldUpdateCache: true });
            const resolutionTime = dns.getTimeUntilResolution(request, { requestedAt: 1000 });
            expect(resolutionTime).to.equal(0);
        });
        it('should cache by domain', () => {
            dns.getTimeUntilResolution(request, { requestedAt: 0, shouldUpdateCache: true });
            const otherRequest = { parsedURL: { host: 'other-example.com' } };
            const resolutionTime = dns.getTimeUntilResolution(otherRequest, { requestedAt: 1000 });
            expect(resolutionTime).to.equal(100 * MULTIPLIER);
        });
        it('should not update cache with later times', () => {
            dns.getTimeUntilResolution(request, { requestedAt: 1000, shouldUpdateCache: true });
            dns.getTimeUntilResolution(request, { requestedAt: 1500, shouldUpdateCache: true });
            dns.getTimeUntilResolution(request, { requestedAt: 500, shouldUpdateCache: true });
            dns.getTimeUntilResolution(request, { requestedAt: 5000, shouldUpdateCache: true });
            expect(dns.getTimeUntilResolution(request, { requestedAt: 0 })).to.equal(100 * MULTIPLIER);
            expect(dns.getTimeUntilResolution(request, { requestedAt: 550 })).to.equal(100 * MULTIPLIER - 50);
            expect(dns.getTimeUntilResolution(request, { requestedAt: 1000 })).to.equal(0);
            expect(dns.getTimeUntilResolution(request, { requestedAt: 2000 })).to.equal(0);
        });
    });
    describe('.setResolvedAt', () => {
        it('should set the DNS resolution time for a request', () => {
            dns.setResolvedAt(request.parsedURL.host, 123);
            const resolutionTime = dns.getTimeUntilResolution(request);
            expect(resolutionTime).to.equal(123);
        });
    });
});
//# sourceMappingURL=DNSCache.test.js.map

/***/ })

}]);