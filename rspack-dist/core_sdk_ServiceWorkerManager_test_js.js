"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["core_sdk_ServiceWorkerManager_test_js"], {
"./core/sdk/ServiceWorkerManager.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _sdk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sdk.js */ "./core/sdk/sdk.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

describe('ServiceWorkerVersion', function() {
    var makeVersion = function makeVersion(registrationPayload, versionPayload) {
        return new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerVersion(new _sdk_js__WEBPACK_IMPORTED_MODULE_0__.ServiceWorkerManager.ServiceWorkerRegistration(registrationPayload), versionPayload);
    };
    var REGISTRATION_PAYLOAD = {
        registrationId: 'foo',
        scopeURL: 'https://example.com',
        isDeleted: false
    };
    var VERSION_PAYLOAD = {
        versionId: '12345',
        scriptURL: 'http://example.com/script.js',
        runningStatus: 'stopped',
        status: 'new',
        scriptLastModified: 1234567890,
        scriptResponseTime: 12345,
        controlledClients: [
            'client1',
            'client2'
        ],
        targetId: 'target1',
        routerRules: '[{"condition":{"requestMethod":"POST"},"source":["fetch","network"],"id":1}]'
    };
    it('initializes with a given payload', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, VERSION_PAYLOAD);
        var expectedRouterRules = [
            {
                condition: '{"requestMethod":"POST"}',
                source: '["fetch","network"]',
                id: 1
            }
        ];
        assert.strictEqual(version.id, VERSION_PAYLOAD.versionId);
        assert.strictEqual(version.scriptURL, VERSION_PAYLOAD.scriptURL);
        assert.strictEqual(version.runningStatus, VERSION_PAYLOAD.runningStatus);
        assert.strictEqual(version.status, VERSION_PAYLOAD.status);
        assert.strictEqual(version.scriptLastModified, VERSION_PAYLOAD.scriptLastModified);
        assert.strictEqual(version.scriptResponseTime, VERSION_PAYLOAD.scriptResponseTime);
        assert.deepStrictEqual(version.controlledClients, VERSION_PAYLOAD.controlledClients);
        assert.strictEqual(version.targetId, VERSION_PAYLOAD.targetId);
        assert.deepStrictEqual(version.routerRules, expectedRouterRules);
    });
    it('should update the version with the given payload', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, VERSION_PAYLOAD);
        version.update({
            versionId: '67890',
            scriptURL: 'http://example.com/script2.js',
            runningStatus: 'starting',
            status: 'installing',
            scriptLastModified: 1234567891,
            scriptResponseTime: 12346,
            controlledClients: [
                'client3',
                'client4'
            ],
            targetId: 'target2'
        });
        assert.strictEqual(version.id, '67890');
        assert.strictEqual(version.scriptURL, 'http://example.com/script2.js');
        assert.strictEqual(version.runningStatus, 'starting');
        assert.strictEqual(version.status, 'installing');
        assert.strictEqual(version.scriptLastModified, 1234567891);
        assert.strictEqual(version.scriptResponseTime, 12346);
        assert.deepStrictEqual(version.controlledClients, [
            'client3',
            'client4'
        ]);
        assert.strictEqual(version.targetId, 'target2');
    });
    it('identifies when the worker is startable', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped',
            status: 'activated'
        }));
        assert.isTrue(version.isStartable());
    });
    it('identifies when the worker is not startable', function() {
        var version = makeVersion(_object_spread_props(_object_spread({}, REGISTRATION_PAYLOAD), {
            isDeleted: true
        }), _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped',
            status: 'activated'
        }));
        assert.isFalse(version.isStartable());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped',
            status: 'new'
        }));
        assert.isFalse(version.isStartable());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'starting',
            status: 'activated'
        }));
        assert.isFalse(version.isStartable());
    });
    it('identifies when the worker is stopped and redundant', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped',
            status: 'redundant'
        }));
        assert.isTrue(version.isStoppedAndRedundant());
    });
    it('identifies when the worker is not stopped and redundant', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped',
            status: 'activated'
        }));
        assert.isFalse(version.isStoppedAndRedundant());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'starting',
            status: 'redundant'
        }));
        assert.isFalse(version.isStoppedAndRedundant());
    });
    it('identifies when the worker is stopped', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped'
        }));
        assert.isTrue(version.isStopped());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'starting'
        }));
        assert.isFalse(version.isStopped());
    });
    it('identifies when the worker is starting', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'starting'
        }));
        assert.isTrue(version.isStarting());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped'
        }));
        assert.isFalse(version.isStarting());
    });
    it('identifies when the worker is running', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'running'
        }));
        assert.isTrue(version.isRunning());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped'
        }));
        assert.isFalse(version.isRunning());
    });
    it('identifies when the worker is stopping', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopping'
        }));
        assert.isTrue(version.isStopping());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            runningStatus: 'stopped'
        }));
        assert.isFalse(version.isStopping());
    });
    it('identifies when the worker is new', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'new'
        }));
        assert.isTrue(version.isNew());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activated'
        }));
        assert.isFalse(version.isNew());
    });
    it('identifies when the worker is installing', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'installing'
        }));
        assert.isTrue(version.isInstalling());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activated'
        }));
        assert.isFalse(version.isInstalling());
    });
    it('identifies when the worker is installed', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'installed'
        }));
        assert.isTrue(version.isInstalled());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activated'
        }));
        assert.isFalse(version.isInstalled());
    });
    it('identifies when the worker is activating', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activating'
        }));
        assert.isTrue(version.isActivating());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activated'
        }));
        assert.isFalse(version.isActivating());
    });
    it('identifies when the worker is activated', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activated'
        }));
        assert.isTrue(version.isActivated());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activating'
        }));
        assert.isFalse(version.isActivated());
    });
    it('identifies when the worker is redundant', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'redundant'
        }));
        assert.isTrue(version.isRedundant());
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activating'
        }));
        assert.isFalse(version.isRedundant());
    });
    it('identifies when the worker is in installing mode', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'new'
        }));
        assert.strictEqual(version.mode(), "installing" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing */ );
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'installing'
        }));
        assert.strictEqual(version.mode(), "installing" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Installing */ );
    });
    it('identifies when the worker is in waiting mode', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'installed'
        }));
        assert.strictEqual(version.mode(), "waiting" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Waiting */ );
    });
    it('identifies when the worker is in active mode', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activating'
        }));
        assert.strictEqual(version.mode(), "active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */ );
        version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'activated'
        }));
        assert.strictEqual(version.mode(), "active" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Active */ );
    });
    it('identifies when the worker is in redundant mode', function() {
        var version = makeVersion(REGISTRATION_PAYLOAD, _object_spread_props(_object_spread({}, VERSION_PAYLOAD), {
            status: 'redundant'
        }));
        assert.strictEqual(version.mode(), "redundant" /* SDK.ServiceWorkerManager.ServiceWorkerVersion.Modes.Redundant */ );
    });
    it('routerRules should be null if not provided', function() {
        var VERSION_PAYLOAD_WITHOUT_ROUTER_RULES = {
            versionId: '12345',
            scriptURL: 'http://example.com/script.js',
            runningStatus: 'stopped',
            status: 'new',
            scriptLastModified: 1234567890,
            scriptResponseTime: 12345,
            controlledClients: [
                'client1',
                'client2'
            ],
            targetId: 'target1'
        };
        var version = makeVersion(REGISTRATION_PAYLOAD, VERSION_PAYLOAD_WITHOUT_ROUTER_RULES);
        assert.isNull(version.routerRules);
    });
}); //# sourceMappingURL=ServiceWorkerManager.test.js.map


}),

}]);