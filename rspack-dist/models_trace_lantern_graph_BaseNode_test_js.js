"use strict";
(self['webpackChunk'] = self['webpackChunk'] || []).push([["models_trace_lantern_graph_BaseNode_test_js"], {
"./models/trace/lantern/graph/BaseNode.test.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */var _lantern_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lantern.js */ "./models/trace/lantern/lantern.js");
// Copyright 2024 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// @ts-nocheck TODO(crbug.com/348449529)

var _Lantern_Graph = _lantern_js__WEBPACK_IMPORTED_MODULE_0__.Graph, BaseNode = _Lantern_Graph.BaseNode, NetworkNode = _Lantern_Graph.NetworkNode;
function sortedById(nodeArray) {
    return nodeArray.sort(function(node1, node2) {
        return node1.id.localeCompare(node2.id);
    });
}
function createComplexGraph() {
    //   B       F
    //  / \     /
    // A   D - E
    //  \ /     \
    //   C       G - H
    var nodeA = new BaseNode('A');
    var nodeB = new BaseNode('B');
    var nodeC = new BaseNode('C');
    var nodeD = new BaseNode('D');
    var nodeE = new BaseNode('E');
    var nodeF = new BaseNode('F');
    var nodeG = new BaseNode('G');
    var nodeH = new BaseNode('H');
    nodeA.addDependent(nodeB);
    nodeA.addDependent(nodeC);
    nodeB.addDependent(nodeD);
    nodeC.addDependent(nodeD);
    nodeD.addDependent(nodeE);
    nodeE.addDependent(nodeF);
    nodeE.addDependent(nodeG);
    nodeG.addDependent(nodeH);
    return {
        nodeA: nodeA,
        nodeB: nodeB,
        nodeC: nodeC,
        nodeD: nodeD,
        nodeE: nodeE,
        nodeF: nodeF,
        nodeG: nodeG,
        nodeH: nodeH
    };
}
describe('BaseNode', function() {
    describe('#constructor', function() {
        it('should set the ID', function() {
            var node = new BaseNode('foo');
            assert.strictEqual(node.id, 'foo');
        });
    });
    describe('.addDependent', function() {
        it('should add the correct edge', function() {
            var nodeA = new BaseNode('1');
            var nodeB = new BaseNode('2');
            nodeA.addDependent(nodeB);
            assert.deepEqual(nodeA.getDependents(), [
                nodeB
            ]);
            assert.deepEqual(nodeB.getDependencies(), [
                nodeA
            ]);
        });
    });
    describe('.addDependency', function() {
        it('should add the correct edge', function() {
            var nodeA = new BaseNode('1');
            var nodeB = new BaseNode('2');
            nodeA.addDependency(nodeB);
            assert.deepEqual(nodeA.getDependencies(), [
                nodeB
            ]);
            assert.deepEqual(nodeB.getDependents(), [
                nodeA
            ]);
        });
        it('throw when trying to add a dependency on itself', function() {
            var nodeA = new BaseNode('1');
            expect(function() {
                return nodeA.addDependency(nodeA);
            }).to.throw();
        });
    });
    describe('.isDependentOn', function() {
        it('should identify the dependency relationships', function() {
            var graph = createComplexGraph();
            var nodes = Object.values(graph);
            var nodeA = graph.nodeA, nodeB = graph.nodeB, nodeD = graph.nodeD, nodeF = graph.nodeF, nodeH = graph.nodeH;
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var node = _step.value;
                    expect(nodeA.isDependentOn(node)).equals(node === nodeA);
                    expect(nodeB.isDependentOn(node)).equals(node === nodeA || node === nodeB);
                    expect(nodeH.isDependentOn(node)).equals(node !== nodeF);
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
            expect(nodeD.isDependentOn(nodeA)).equals(true);
            expect(nodeD.isDependentOn(nodeB)).equals(true);
            expect(nodeD.isDependentOn(nodeD)).equals(true);
            expect(nodeD.isDependentOn(nodeH)).equals(false);
            expect(nodeH.isDependentOn(nodeD)).equals(true);
            expect(nodeF.isDependentOn(nodeH)).equals(false);
            expect(nodeH.isDependentOn(nodeF)).equals(false);
        });
    });
    describe('.getRootNode', function() {
        it('should return the root node', function() {
            var graph = createComplexGraph();
            assert.strictEqual(graph.nodeA.getRootNode(), graph.nodeA);
            assert.strictEqual(graph.nodeB.getRootNode(), graph.nodeA);
            assert.strictEqual(graph.nodeD.getRootNode(), graph.nodeA);
            assert.strictEqual(graph.nodeF.getRootNode(), graph.nodeA);
        });
    });
    describe('.cloneWithoutRelationships', function() {
        it('should create a copy', function() {
            var node = new BaseNode('1');
            var neighbor = new BaseNode('2');
            node.addDependency(neighbor);
            var clone = node.cloneWithoutRelationships();
            assert.strictEqual(clone.id, '1');
            assert.notEqual(node, clone);
            assert.strictEqual(clone.getDependencies().length, 0);
        });
        it('should copy isMainDocument', function() {
            var node = new BaseNode('1');
            node.setIsMainDocument(true);
            var networkNode = new NetworkNode({});
            networkNode.setIsMainDocument(true);
            assert.ok(node.cloneWithoutRelationships().isMainDocument());
            assert.ok(networkNode.cloneWithoutRelationships().isMainDocument());
        });
    });
    describe('.cloneWithRelationships', function() {
        it('should create a copy of a basic graph', function() {
            var node = new BaseNode('1');
            var neighbor = new BaseNode('2');
            node.addDependency(neighbor);
            var clone = node.cloneWithRelationships();
            assert.strictEqual(clone.id, '1');
            assert.notEqual(node, clone);
            var dependencies = clone.getDependencies();
            assert.strictEqual(dependencies.length, 1);
            var neighborClone = dependencies[0];
            assert.strictEqual(neighborClone.id, neighbor.id);
            assert.notEqual(neighborClone, neighbor);
            assert.strictEqual(neighborClone.getDependents()[0], clone);
        });
        it('should create a copy of a complex graph', function() {
            var graph = createComplexGraph();
            var clone = graph.nodeA.cloneWithRelationships();
            var clonedIdMap = new Map();
            clone.traverse(function(node) {
                return clonedIdMap.set(node.id, node);
            });
            assert.strictEqual(clonedIdMap.size, 8);
            graph.nodeA.traverse(function(node) {
                var clone = clonedIdMap.get(node.id);
                assert.strictEqual(clone.id, node.id);
                assert.notEqual(clone, node);
                var actualDependents = sortedById(clone.getDependents());
                var expectedDependents = sortedById(node.getDependents());
                actualDependents.forEach(function(cloneDependent, index) {
                    var originalDependent = expectedDependents[index];
                    assert.strictEqual(cloneDependent.id, originalDependent.id);
                    assert.notEqual(cloneDependent, originalDependent);
                });
            });
        });
        it('should create a copy of a graph with long dependency chains', function() {
            //   C - D - E - F
            //  /             \
            // A - - - - - - - B
            var nodeA = new BaseNode('A');
            var nodeB = new BaseNode('B');
            var nodeC = new BaseNode('C');
            var nodeD = new BaseNode('D');
            var nodeE = new BaseNode('E');
            var nodeF = new BaseNode('F');
            nodeA.addDependent(nodeB);
            nodeF.addDependent(nodeB);
            nodeA.addDependent(nodeC);
            nodeC.addDependent(nodeD);
            nodeD.addDependent(nodeE);
            nodeE.addDependent(nodeF);
            var clone = nodeA.cloneWithRelationships();
            var clonedIdMap = new Map();
            clone.traverse(function(node) {
                return clonedIdMap.set(node.id, node);
            });
            assert.strictEqual(clonedIdMap.size, 6);
        });
        it('should create a copy when not starting at root node', function() {
            var graph = createComplexGraph();
            var cloneD = graph.nodeD.cloneWithRelationships();
            assert.strictEqual(cloneD.id, 'D');
            assert.strictEqual(cloneD.getRootNode().id, 'A');
        });
        it('should create a partial copy of a complex graph', function() {
            var graph = createComplexGraph();
            // create a clone with F and all its dependencies
            var clone = graph.nodeA.cloneWithRelationships(function(node) {
                return node.id === 'F';
            });
            var clonedIdMap = new Map();
            clone.traverse(function(node) {
                return clonedIdMap.set(node.id, node);
            });
            assert.strictEqual(clonedIdMap.size, 6);
            assert.ok(clonedIdMap.has('F'), 'did not include target node');
            assert.ok(clonedIdMap.has('E'), 'did not include dependency');
            assert.ok(clonedIdMap.has('B'), 'did not include branched dependency');
            assert.ok(clonedIdMap.has('C'), 'did not include branched dependency');
            assert.strictEqual(clonedIdMap.get('G'), undefined);
            assert.strictEqual(clonedIdMap.get('H'), undefined);
        });
        it('should throw if original node is not in cloned graph', function() {
            var graph = createComplexGraph();
            assert.throws(// clone from root to nodeB, but called on nodeD
            function(_) {
                return graph.nodeD.cloneWithRelationships(function(node) {
                    return node.id === 'B';
                });
            }, /^Cloned graph missing node$/);
        });
    });
    describe('.traverse', function() {
        it('should visit every dependent node', function() {
            var graph = createComplexGraph();
            var ids = [];
            graph.nodeA.traverse(function(node) {
                return ids.push(node.id);
            });
            assert.deepEqual(ids, [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F',
                'G',
                'H'
            ]);
        });
        it('should include a shortest traversal path to every dependent node', function() {
            var graph = createComplexGraph();
            var paths = [];
            graph.nodeA.traverse(function(node, traversalPath) {
                assert.strictEqual(node.id, traversalPath[0].id);
                paths.push(traversalPath.map(function(node) {
                    return node.id;
                }));
            });
            assert.deepStrictEqual(paths, [
                [
                    'A'
                ],
                [
                    'B',
                    'A'
                ],
                [
                    'C',
                    'A'
                ],
                [
                    'D',
                    'B',
                    'A'
                ],
                [
                    'E',
                    'D',
                    'B',
                    'A'
                ],
                [
                    'F',
                    'E',
                    'D',
                    'B',
                    'A'
                ],
                [
                    'G',
                    'E',
                    'D',
                    'B',
                    'A'
                ],
                [
                    'H',
                    'G',
                    'E',
                    'D',
                    'B',
                    'A'
                ]
            ]);
        });
        it('should respect getNext', function() {
            var graph = createComplexGraph();
            var ids = [];
            graph.nodeF.traverse(function(node) {
                return ids.push(node.id);
            }, function(node) {
                return node.getDependencies();
            });
            assert.deepEqual(ids, [
                'F',
                'E',
                'D',
                'B',
                'C',
                'A'
            ]);
        });
    });
    describe('#hasCycle', function() {
        it('should return false for DAGs', function() {
            var graph = createComplexGraph();
            assert.strictEqual(BaseNode.hasCycle(graph.nodeA), false);
        });
        it('should return false for triangular DAGs', function() {
            //   B
            //  / \
            // A - C
            var nodeA = new BaseNode('A');
            var nodeB = new BaseNode('B');
            var nodeC = new BaseNode('C');
            nodeA.addDependent(nodeC);
            nodeA.addDependent(nodeB);
            nodeB.addDependent(nodeC);
            assert.strictEqual(BaseNode.hasCycle(nodeA), false);
        });
        it('should return true for basic cycles', function() {
            // A - B - C - A!
            var nodeA = new BaseNode('A');
            var nodeB = new BaseNode('B');
            var nodeC = new BaseNode('C');
            nodeA.addDependent(nodeB);
            nodeB.addDependent(nodeC);
            nodeC.addDependent(nodeA);
            assert.strictEqual(BaseNode.hasCycle(nodeA), true);
        });
        it('should return true for children', function() {
            //       A!
            //      /
            // A - B - C
            var nodeA = new BaseNode('A');
            var nodeB = new BaseNode('B');
            var nodeC = new BaseNode('C');
            nodeA.addDependent(nodeB);
            nodeB.addDependent(nodeC);
            nodeB.addDependent(nodeA);
            assert.strictEqual(BaseNode.hasCycle(nodeC), true);
        });
        it('should return true for complex cycles', function() {
            //   B - D - F - G - C!
            //  /      /
            // A - - C - E - H
            var nodeA = new BaseNode('A');
            var nodeB = new BaseNode('B');
            var nodeC = new BaseNode('C');
            var nodeD = new BaseNode('D');
            var nodeE = new BaseNode('E');
            var nodeF = new BaseNode('F');
            var nodeG = new BaseNode('G');
            var nodeH = new BaseNode('H');
            nodeA.addDependent(nodeB);
            nodeA.addDependent(nodeC);
            nodeB.addDependent(nodeD);
            nodeC.addDependent(nodeE);
            nodeC.addDependent(nodeF);
            nodeD.addDependent(nodeF);
            nodeE.addDependent(nodeH);
            nodeF.addDependent(nodeG);
            nodeG.addDependent(nodeC);
            assert.strictEqual(BaseNode.hasCycle(nodeA), true);
            assert.strictEqual(BaseNode.hasCycle(nodeB), true);
            assert.strictEqual(BaseNode.hasCycle(nodeC), true);
            assert.strictEqual(BaseNode.hasCycle(nodeD), true);
            assert.strictEqual(BaseNode.hasCycle(nodeE), true);
            assert.strictEqual(BaseNode.hasCycle(nodeF), true);
            assert.strictEqual(BaseNode.hasCycle(nodeG), true);
            assert.strictEqual(BaseNode.hasCycle(nodeH), true);
        });
        it('works for very large graphs', function() {
            var root = new BaseNode('root');
            var lastNode = root;
            for(var i = 0; i < 10000; i++){
                var nextNode = new BaseNode("child".concat(i));
                lastNode.addDependent(nextNode);
                lastNode = nextNode;
            }
            lastNode.addDependent(root);
            assert.strictEqual(BaseNode.hasCycle(root), true);
        });
    });
}); //# sourceMappingURL=BaseNode.test.js.map


}),

}]);