(self['webpackChunk'] = self['webpackChunk'] || []).push([["legacy_test_runner_extensions_test_runner_ExtensionsNetworkTestRunner_js"], {
"./legacy_test_runner/extensions_test_runner/ExtensionsNetworkTestRunner.js": (function () {
// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview using private properties isn't a Closure violation in tests.
 */ self.extension_getRequestByUrl = function(urls, callback) {
    function onHAR(response) {
        var entries = response.entries;
        for(var i = 0; i < entries.length; ++i){
            for(var url = 0; url < urls.length; ++url){
                if (urls[url].test(entries[i].request.url)) {
                    callback(entries[i]);
                    return;
                }
            }
        }
        output('no item found');
        callback(null);
    }
    webInspector.network.getHAR(onHAR);
};


}),

}]);