"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_third_party_codemirror_package_src_model_chunk_js"],{

/***/ "./src/third_party/codemirror/package/src/model/chunk.js":
/*!***************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/model/chunk.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BranchChunk: () => (/* binding */ BranchChunk),
/* harmony export */   LeafChunk: () => (/* binding */ LeafChunk)
/* harmony export */ });
/* harmony import */ var _line_line_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../line/line_data.js */ "./src/third_party/codemirror/package/src/line/line_data.js");
/* harmony import */ var _util_misc_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/misc.js */ "./src/third_party/codemirror/package/src/util/misc.js");
/* harmony import */ var _util_operation_group_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/operation_group.js */ "./src/third_party/codemirror/package/src/util/operation_group.js");




// The document is represented as a BTree consisting of leaves, with
// chunk of lines in them, and branches, with up to ten leaves or
// other branch nodes below them. The top node is always a branch
// node, and is the document object itself (meaning it has
// additional methods and properties).
//
// All nodes have parent links. The tree is used both to go from
// line numbers to line objects, and to go from objects to numbers.
// It also indexes by height, and is used to convert between height
// and line object, and to find the total height of the document.
//
// See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

function LeafChunk(lines) {
  this.lines = lines
  this.parent = null
  let height = 0
  for (let i = 0; i < lines.length; ++i) {
    lines[i].parent = this
    height += lines[i].height
  }
  this.height = height
}

LeafChunk.prototype = {
  chunkSize() { return this.lines.length },

  // Remove the n lines at offset 'at'.
  removeInner(at, n) {
    for (let i = at, e = at + n; i < e; ++i) {
      let line = this.lines[i]
      this.height -= line.height
      ;(0,_line_line_data_js__WEBPACK_IMPORTED_MODULE_0__.cleanUpLine)(line)
      ;(0,_util_operation_group_js__WEBPACK_IMPORTED_MODULE_2__.signalLater)(line, "delete")
    }
    this.lines.splice(at, n)
  },

  // Helper used to collapse a small branch into a single leaf.
  collapse(lines) {
    lines.push.apply(lines, this.lines)
  },

  // Insert the given array of lines at offset 'at', count them as
  // having the given height.
  insertInner(at, lines, height) {
    this.height += height
    this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at))
    for (let i = 0; i < lines.length; ++i) lines[i].parent = this
  },

  // Used to iterate over a part of the tree.
  iterN(at, n, op) {
    for (let e = at + n; at < e; ++at)
      if (op(this.lines[at])) return true
  }
}

function BranchChunk(children) {
  this.children = children
  let size = 0, height = 0
  for (let i = 0; i < children.length; ++i) {
    let ch = children[i]
    size += ch.chunkSize(); height += ch.height
    ch.parent = this
  }
  this.size = size
  this.height = height
  this.parent = null
}

BranchChunk.prototype = {
  chunkSize() { return this.size },

  removeInner(at, n) {
    this.size -= n
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at < sz) {
        let rm = Math.min(n, sz - at), oldHeight = child.height
        child.removeInner(at, rm)
        this.height -= oldHeight - child.height
        if (sz == rm) { this.children.splice(i--, 1); child.parent = null }
        if ((n -= rm) == 0) break
        at = 0
      } else at -= sz
    }
    // If the result is smaller than 25 lines, ensure that it is a
    // single leaf node.
    if (this.size - n < 25 &&
        (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
      let lines = []
      this.collapse(lines)
      this.children = [new LeafChunk(lines)]
      this.children[0].parent = this
    }
  },

  collapse(lines) {
    for (let i = 0; i < this.children.length; ++i) this.children[i].collapse(lines)
  },

  insertInner(at, lines, height) {
    this.size += lines.length
    this.height += height
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at <= sz) {
        child.insertInner(at, lines, height)
        if (child.lines && child.lines.length > 50) {
          // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
          // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
          let remaining = child.lines.length % 25 + 25
          for (let pos = remaining; pos < child.lines.length;) {
            let leaf = new LeafChunk(child.lines.slice(pos, pos += 25))
            child.height -= leaf.height
            this.children.splice(++i, 0, leaf)
            leaf.parent = this
          }
          child.lines = child.lines.slice(0, remaining)
          this.maybeSpill()
        }
        break
      }
      at -= sz
    }
  },

  // When a node has grown, check whether it should be split.
  maybeSpill() {
    if (this.children.length <= 10) return
    let me = this
    do {
      let spilled = me.children.splice(me.children.length - 5, 5)
      let sibling = new BranchChunk(spilled)
      if (!me.parent) { // Become the parent node
        let copy = new BranchChunk(me.children)
        copy.parent = me
        me.children = [copy, sibling]
        me = copy
     } else {
        me.size -= sibling.size
        me.height -= sibling.height
        let myIndex = (0,_util_misc_js__WEBPACK_IMPORTED_MODULE_1__.indexOf)(me.parent.children, me)
        me.parent.children.splice(myIndex + 1, 0, sibling)
      }
      sibling.parent = me.parent
    } while (me.children.length > 10)
    me.parent.maybeSpill()
  },

  iterN(at, n, op) {
    for (let i = 0; i < this.children.length; ++i) {
      let child = this.children[i], sz = child.chunkSize()
      if (at < sz) {
        let used = Math.min(n, sz - at)
        if (child.iterN(at, used, op)) return true
        if ((n -= used) == 0) break
        at = 0
      } else at -= sz
    }
  }
}


/***/ }),

/***/ "./src/third_party/codemirror/package/src/util/operation_group.js":
/*!************************************************************************!*\
  !*** ./src/third_party/codemirror/package/src/util/operation_group.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   finishOperation: () => (/* binding */ finishOperation),
/* harmony export */   pushOperation: () => (/* binding */ pushOperation),
/* harmony export */   signalLater: () => (/* binding */ signalLater)
/* harmony export */ });
/* harmony import */ var _event_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event.js */ "./src/third_party/codemirror/package/src/util/event.js");


let operationGroup = null

function pushOperation(op) {
  if (operationGroup) {
    operationGroup.ops.push(op)
  } else {
    op.ownsGroup = operationGroup = {
      ops: [op],
      delayedCallbacks: []
    }
  }
}

function fireCallbacksForOps(group) {
  // Calls delayed callbacks and cursorActivity handlers until no
  // new ones appear
  let callbacks = group.delayedCallbacks, i = 0
  do {
    for (; i < callbacks.length; i++)
      callbacks[i].call(null)
    for (let j = 0; j < group.ops.length; j++) {
      let op = group.ops[j]
      if (op.cursorActivityHandlers)
        while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
          op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm)
    }
  } while (i < callbacks.length)
}

function finishOperation(op, endCb) {
  let group = op.ownsGroup
  if (!group) return

  try { fireCallbacksForOps(group) }
  finally {
    operationGroup = null
    endCb(group)
  }
}

let orphanDelayedCallbacks = null

// Often, we want to signal events at a point where we are in the
// middle of some work, but don't want the handler to start calling
// other methods on the editor, which might be in an inconsistent
// state or simply not expect any other events to happen.
// signalLater looks whether there are any handlers, and schedules
// them to be executed when the last operation ends, or, if no
// operation is active, when a timeout fires.
function signalLater(emitter, type /*, values...*/) {
  let arr = (0,_event_js__WEBPACK_IMPORTED_MODULE_0__.getHandlers)(emitter, type)
  if (!arr.length) return
  let args = Array.prototype.slice.call(arguments, 2), list
  if (operationGroup) {
    list = operationGroup.delayedCallbacks
  } else if (orphanDelayedCallbacks) {
    list = orphanDelayedCallbacks
  } else {
    list = orphanDelayedCallbacks = []
    setTimeout(fireOrphanDelayed, 0)
  }
  for (let i = 0; i < arr.length; ++i)
    list.push(() => arr[i].apply(null, args))
}

function fireOrphanDelayed() {
  let delayed = orphanDelayedCallbacks
  orphanDelayedCallbacks = null
  for (let i = 0; i < delayed.length; ++i) delayed[i]()
}


/***/ })

}]);