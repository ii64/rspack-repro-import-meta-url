"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_cpu_profile_CPUProfileDataModel_test_js"], {
"./models/cpu_profile/CPUProfileDataModel.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../testing/EnvironmentHelpers.js */ "./testing/EnvironmentHelpers.js");
/* harmony import */var _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cpu_profile/cpu_profile.js */ "./models/cpu_profile/cpu_profile.js");
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


function makeCallFrame(functionName) {
    return {
        functionName: functionName,
        scriptId: 'ScriptId',
        url: '',
        lineNumber: 0,
        columnNumber: 0
    };
}
function getFrameTreeAsString(cpuProfileDataModel) {
    var trackingStack = [];
    var resultStack = [];
    var result = '\n';
    var onFrameOpen = function(depth, node, _sampleIndex, ts) {
        trackingStack.push({
            depth: depth,
            id: node.id,
            name: node.callFrame.functionName,
            ts: ts,
            selfTime: 0,
            dur: 0
        });
    };
    var onFrameClose = function(_depth, node, _sampleIndex, _ts, dur, selfTime) {
        var entry = trackingStack.pop();
        if (!entry || entry.id !== node.id) {
            throw new Error('Frame open and Frame close callbacks are not balanced');
        }
        entry.dur = dur;
        entry.selfTime = selfTime;
        resultStack.push(entry);
    };
    cpuProfileDataModel.forEachFrame(onFrameOpen, onFrameClose);
    resultStack.sort(function(a, b) {
        return b.ts - a.ts;
    });
    while(resultStack.length){
        var entry = resultStack.pop();
        if (!entry) {
            break;
        }
        var depth = entry.depth, name = entry.name, ts = entry.ts, dur = entry.dur, selfTime = entry.selfTime;
        result += '  '.repeat(depth) + "name: ".concat(name, " ts: ").concat(ts, " dur: ").concat(Math.round(dur * 100) / 100, " selfTime: ").concat(Math.round(selfTime * 100) / 100);
        result += resultStack.length ? '\n' : '';
    }
    return result;
}
describe('ProfileTreeModel', function() {
    it('calculates self and total times correctly for a CPU profile', function() {
        // Create the following tree:
        //
        //       root (self = 10)
        //     /                 \
        //    A (self = 0)     D (self = 10)
        //  /             \                 \
        // B (self = 20)  C (self = 10)     E (self = 20)
        var callFrameRoot = makeCallFrame('root');
        var root = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameRoot);
        root.self = 10;
        var callFrameA = makeCallFrame('A');
        var nodeA = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameA);
        root.children.push(nodeA);
        nodeA.self = 0;
        var callFrameB = makeCallFrame('B');
        var nodeB = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameB);
        nodeA.children.push(nodeB);
        nodeB.self = 20;
        var callFrameC = makeCallFrame('C');
        var nodeC = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameC);
        nodeA.children.push(nodeC);
        nodeC.self = 10;
        var callFrameD = makeCallFrame('D');
        var nodeD = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameD);
        root.children.push(nodeD);
        nodeD.self = 10;
        var callFrameE = makeCallFrame('E');
        var nodeE = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameE);
        nodeD.children.push(nodeE);
        nodeE.self = 20;
        var profileTreeModel = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileTreeModel();
        profileTreeModel.initialize(root);
        assert.strictEqual(profileTreeModel.total, 70);
        assert.strictEqual(root.total, 70);
        assert.strictEqual(root.self, 10);
        assert.strictEqual(nodeA.total, 30);
        assert.strictEqual(nodeA.self, 0);
        assert.strictEqual(nodeB.total, 20);
        assert.strictEqual(nodeB.self, 20);
        assert.strictEqual(nodeC.total, 10);
        assert.strictEqual(nodeC.self, 10);
        assert.strictEqual(nodeD.total, 30);
        assert.strictEqual(nodeD.self, 10);
        assert.strictEqual(nodeE.total, 20);
        assert.strictEqual(nodeE.self, 20);
    });
    it('calculates depth correctly for the nodes in a profile tree', function() {
        // Create the following tree:
        //
        //       root
        //      /    \
        //     A      D
        //   /   \     \
        //  B     C     E
        //               \
        //                F
        var callFrameRoot = makeCallFrame('root');
        var root = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameRoot);
        var callFrameA = makeCallFrame('A');
        var nodeA = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameA);
        root.children.push(nodeA);
        var callFrameB = makeCallFrame('B');
        var nodeB = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameB);
        nodeA.children.push(nodeB);
        var callFrameC = makeCallFrame('C');
        var nodeC = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameC);
        nodeA.children.push(nodeC);
        var callFrameD = makeCallFrame('D');
        var nodeD = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameD);
        root.children.push(nodeD);
        var callFrameE = makeCallFrame('E');
        var nodeE = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameE);
        nodeD.children.push(nodeE);
        var callFrameF = makeCallFrame('F');
        var nodeF = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileNode(callFrameF);
        nodeE.children.push(nodeF);
        var profileTreeModel = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.ProfileTreeModel.ProfileTreeModel();
        profileTreeModel.initialize(root);
        assert.strictEqual(profileTreeModel.maxDepth, 3);
        assert.strictEqual(root.depth, -1);
        assert.strictEqual(nodeA.depth, 0);
        assert.strictEqual(nodeB.depth, 1);
        assert.strictEqual(nodeC.depth, 1);
        assert.strictEqual(nodeD.depth, 0);
        assert.strictEqual(nodeE.depth, 1);
        assert.strictEqual(nodeF.depth, 2);
    });
});
(0,_testing_EnvironmentHelpers_js__WEBPACK_IMPORTED_MODULE_0__.describeWithEnvironment)('CPUProfileDataModel', function() {
    var buildBasicProfile = function() {
        var scriptId = 'Peperoni';
        var url = '';
        var lineNumber = -1;
        var columnNumber = -1;
        var profile = {
            startTime: 1000,
            endTime: 3000,
            nodes: [
                {
                    id: 1,
                    hitCount: 0,
                    callFrame: {
                        functionName: '(root)',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        2,
                        3
                    ]
                },
                {
                    id: 2,
                    hitCount: 3,
                    callFrame: {
                        functionName: 'a',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        4,
                        5
                    ]
                },
                {
                    id: 3,
                    hitCount: 3,
                    callFrame: {
                        functionName: 'b',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        6
                    ]
                },
                {
                    id: 4,
                    hitCount: 2,
                    callFrame: {
                        functionName: 'c',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                },
                {
                    id: 5,
                    hitCount: 1,
                    callFrame: {
                        functionName: 'd',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                },
                {
                    id: 6,
                    hitCount: 2,
                    callFrame: {
                        functionName: 'e',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        7
                    ]
                },
                {
                    id: 7,
                    hitCount: 2,
                    callFrame: {
                        functionName: 'f',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                }
            ],
            samples: [
                2,
                2,
                4,
                5,
                4,
                2,
                3,
                6,
                6,
                7,
                7,
                3,
                3
            ],
            timeDeltas: new Array(13).fill(100)
        };
        return profile;
    };
    it('builds a tree from a CPU profile', function() {
        var profile = buildBasicProfile();
        // Profile contains this tree:
        //
        //       1
        //     /   \
        //    2     3
        //  /   \     \
        // 4     5     6
        //              \
        //               7
        var cpuProfileDataModel = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfileDataModel.CPUProfileDataModel(profile);
        assert.deepEqual(cpuProfileDataModel.root.children.map(function(n) {
            return n.id;
        }), [
            3,
            2
        ]);
        var node2 = cpuProfileDataModel.root.children[1];
        assert.strictEqual(node2.id, 2);
        assert.deepEqual(node2.children.map(function(n) {
            return n.id;
        }), [
            5,
            4
        ]);
        var node3 = cpuProfileDataModel.root.children[0];
        assert.strictEqual(node3.id, 3);
        assert.deepEqual(node3.children.map(function(n) {
            return n.id;
        }), [
            6
        ]);
        var node6 = node3.children[0];
        assert.strictEqual(node6.id, 6);
        assert.deepEqual(node6.children.map(function(n) {
            return n.id;
        }), [
            7
        ]);
    });
    it('parses JS call frames from a CPU profile', function() {
        // Calls in the profile look roughly like
        //
        // |---------------a--------------||---------b---------|
        //        |---c---||--d--||---c---|  |-------e------|
        //                                      |-----f-----|
        var profile = buildBasicProfile();
        var cpuProfileDataModel = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfileDataModel.CPUProfileDataModel(profile);
        var treeAsString = getFrameTreeAsString(cpuProfileDataModel);
        assert.strictEqual(treeAsString, "\nname: a ts: 1.1 dur: 0.6 selfTime: 0.3\n  name: c ts: 1.3 dur: 0.1 selfTime: 0.1\n  name: d ts: 1.4 dur: 0.1 selfTime: 0.1\n  name: c ts: 1.5 dur: 0.1 selfTime: 0.1\nname: b ts: 1.7 dur: 0.7 selfTime: 0.3\n  name: e ts: 1.8 dur: 0.4 selfTime: 0.2\n    name: f ts: 2 dur: 0.2 selfTime: 0.2");
    });
    it('parses a CPU profile without hitcounts', function() {
        var profile = buildBasicProfile();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = profile.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var node = _step.value;
                node.hitCount = undefined;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        var cpuProfileDataModel = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfileDataModel.CPUProfileDataModel(profile);
        var treeAsString = getFrameTreeAsString(cpuProfileDataModel);
        assert.strictEqual(treeAsString, "\nname: a ts: 1.1 dur: 0.6 selfTime: 0.3\n  name: c ts: 1.3 dur: 0.1 selfTime: 0.1\n  name: d ts: 1.4 dur: 0.1 selfTime: 0.1\n  name: c ts: 1.5 dur: 0.1 selfTime: 0.1\nname: b ts: 1.7 dur: 0.7 selfTime: 0.3\n  name: e ts: 1.8 dur: 0.4 selfTime: 0.2\n    name: f ts: 2 dur: 0.2 selfTime: 0.2");
    });
    it('fixes missing samples by replacing them with neighboring stacks', function() {
        var _profile_samples, _profile_timeDeltas;
        var scriptId = 'Peperoni';
        var url = '';
        var lineNumber = -1;
        var columnNumber = -1;
        // The calls in the profile look roughly like:
        //
        // |program||-bar-||program||-bar-||program||-bar-||GC||program||-bar-||program||-bar-||-baz-||program||-bar-|
        // |program|       |program|       |program||-foo-|    |program||-foo-||program||-foo-|       |program||-foo-|
        //
        // Which, after accounting for fixable program calls (missing samples), should look as (program samples are
        // replaced with the preceding samples if the bottom frame of both neighboring samples is the same):
        //
        // |program||----------bar------||program||-------bar---------||-baz-||program||-bar-|
        // |program|       |-----foo----||program||-------foo---------|       |program||-foo-|
        //                   |-GC-|
        var profile = {
            startTime: 1000,
            endTime: 4000,
            nodes: [
                {
                    id: 1,
                    hitCount: 0,
                    callFrame: {
                        functionName: '(root)',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        2,
                        3,
                        4,
                        5
                    ]
                },
                {
                    id: 2,
                    hitCount: 1000,
                    callFrame: {
                        functionName: '(garbage collector)',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                },
                {
                    id: 3,
                    hitCount: 1000,
                    callFrame: {
                        functionName: '(program)',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                },
                {
                    id: 4,
                    hitCount: 1000,
                    callFrame: {
                        functionName: 'bar',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        6
                    ]
                },
                {
                    id: 5,
                    hitCount: 1000,
                    callFrame: {
                        functionName: 'baz',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                },
                {
                    id: 6,
                    hitCount: 1000,
                    callFrame: {
                        functionName: 'foo',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                }
            ],
            samples: [
                3,
                4,
                3,
                4,
                3,
                6,
                2,
                2,
                3,
                6,
                6,
                3,
                6,
                5,
                3,
                6
            ]
        };
        profile.timeDeltas = (_profile_samples = profile.samples) === null || _profile_samples === void 0 ? void 0 : _profile_samples.map(function(_) {
            return 1000;
        });
        profile.endTime = profile.startTime + (((_profile_timeDeltas = profile.timeDeltas) === null || _profile_timeDeltas === void 0 ? void 0 : _profile_timeDeltas.length) || 0) * 1000;
        var cpuProfileDataModel = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfileDataModel.CPUProfileDataModel(profile);
        var treeAsString = getFrameTreeAsString(cpuProfileDataModel);
        assert.strictEqual(treeAsString, "\nname: (program) ts: 2 dur: 1 selfTime: 1\nname: bar ts: 3 dur: 7 selfTime: 4\n  name: foo ts: 7 dur: 3 selfTime: 1\n    name: (garbage collector) ts: 8 dur: 2 selfTime: 2\nname: (program) ts: 10 dur: 1 selfTime: 1\nname: bar ts: 11 dur: 4 selfTime: 0\n  name: foo ts: 11 dur: 4 selfTime: 4\nname: baz ts: 15 dur: 1 selfTime: 1\nname: (program) ts: 16 dur: 1 selfTime: 1\nname: bar ts: 17 dur: 1 selfTime: 0\n  name: foo ts: 17 dur: 1 selfTime: 1");
    });
    it('parses a CPU with GC nodes correctly', function() {
        var scriptId = 'Peperoni';
        var url = '';
        var lineNumber = -1;
        var columnNumber = -1;
        // Profile contains this tree:
        //
        //       root
        //     /      \
        //   GC       foo
        //               \
        //                bar
        // The calls in the profile look roughly like:
        //
        // |-------------------foo----------------||--GC--|
        // |---------bar--------|         |--bar--|
        //
        // Which, after accounting for the GC call, should be fixed as:
        // |-----------------------foo------------|
        // |---bar---||---bar---|         |--bar--|
        //                                 |--GC--|
        var profile = {
            startTime: 1000,
            endTime: 4000,
            nodes: [
                {
                    id: 1,
                    hitCount: 0,
                    callFrame: {
                        functionName: '(root)',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        2,
                        3
                    ]
                },
                {
                    id: 2,
                    hitCount: 1000,
                    callFrame: {
                        functionName: '(garbage collector)',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                },
                {
                    id: 3,
                    hitCount: 1000,
                    callFrame: {
                        functionName: 'foo',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    },
                    children: [
                        4
                    ]
                },
                {
                    id: 4,
                    hitCount: 1000,
                    callFrame: {
                        functionName: 'bar',
                        scriptId: scriptId,
                        url: url,
                        lineNumber: lineNumber,
                        columnNumber: columnNumber
                    }
                }
            ],
            timeDeltas: [
                500,
                250,
                1000,
                250,
                1000
            ],
            samples: [
                4,
                4,
                3,
                4,
                2
            ]
        };
        var cpuProfileDataModel = new _cpu_profile_cpu_profile_js__WEBPACK_IMPORTED_MODULE_1__.CPUProfileDataModel.CPUProfileDataModel(profile);
        var treeAsString = getFrameTreeAsString(cpuProfileDataModel);
        assert.strictEqual(treeAsString, "\nname: foo ts: 1.5 dur: 3.13 selfTime: 0.25\n  name: bar ts: 1.5 dur: 1.25 selfTime: 1.25\n  name: bar ts: 3 dur: 1.63 selfTime: 1\n    name: (garbage collector) ts: 4 dur: 0.63 selfTime: 0.63");
    });
}); //# sourceMappingURL=CPUProfileDataModel.test.js.map


}),

}]);