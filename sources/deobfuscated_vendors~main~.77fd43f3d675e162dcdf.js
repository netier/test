/*! Copyright (c) 2023 WhatsApp Inc. All Rights Reserved. */
(self.webpackChunkwhatsapp_web_client = self.webpackChunkwhatsapp_web_client || []).push([
    [4700], {
        986907: (e, t, n) => {
            "use strict";

            const r = n(471313);
            e.exports = r;
        },
        471313: (e, t, n) => {
            "use strict";

            var r = n(587592);
            var i = n(389408);
            var l = n(376969);
            var o = n(932998);

            function s (e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
            }

            function a (e) {
                let t = o.$getSelection();
                if (t == null) {
                    throw Error("Expected valid LexicalSelection");
                }
                if (o.$isRangeSelection(t) && t.isCollapsed() || t.getNodes().length === 0) {
                    return "";
                } else {
                    return r.$generateHtmlFromNodes(e, t);
                }
            }

            function u (e) {
                let t = o.$getSelection();
                if (t == null) {
                    throw Error("Expected valid LexicalSelection");
                }
                if (o.$isRangeSelection(t) && t.isCollapsed() || t.getNodes().length === 0) {
                    return null;
                } else {
                    return JSON.stringify(f(e, t));
                }
            }

            function d (e, t, n) {
                if ((o.DEPRECATED_$isGridSelection(n) || l.$findMatchingParent(n.anchor.getNode(), e => o.DEPRECATED_$isGridCellNode(e)) !== null && l.$findMatchingParent(n.focus.getNode(), e => o.DEPRECATED_$isGridCellNode(e)) !== null) && t.length === 1 && o.DEPRECATED_$isGridNode(t[0])) {
                    (function (e, t, n, r) {
                        if (!(e.length === 1 && o.DEPRECATED_$isGridNode(e[0]))) {
                            s(42);
                        }
                        var i = e[0];
                        e = i.getChildren();
                        n = i.getFirstChildOrThrow().getChildrenSize();
                        var a = i.getChildrenSize();
                        var u = l.$findMatchingParent(t.anchor.getNode(), e => o.DEPRECATED_$isGridCellNode(e));
                        t = (i = u && l.$findMatchingParent(u, e => o.DEPRECATED_$isGridRowNode(e))) && l.$findMatchingParent(i, e => o.DEPRECATED_$isGridNode(e));
                        if (!(o.DEPRECATED_$isGridCellNode(u) && o.DEPRECATED_$isGridRowNode(i) && o.DEPRECATED_$isGridNode(t))) {
                            s(43);
                        }
                        var d = i.getIndexWithinParent();
                        var c = Math.min(t.getChildrenSize() - 1, d + a - 1);
                        let f;
                        let h;
                        a = u.getIndexWithinParent();
                        u = Math.min(i.getChildrenSize() - 1, a + n - 1);
                        n = Math.min(a, u);
                        i = Math.min(d, c);
                        a = Math.max(a, u);
                        d = Math.max(d, c);
                        c = t.getChildren();
                        u = 0;
                        for (let t = i; t <= d; t++) {
                            var g = c[t];
                            if (!o.DEPRECATED_$isGridRowNode(g)) {
                                s(24);
                            }
                            var _ = e[u];
                            if (!o.DEPRECATED_$isGridRowNode(_)) {
                                s(24);
                            }
                            g = g.getChildren();
                            _ = _.getChildren();
                            let r = 0;
                            for (let e = n; e <= a; e++) {
                                let l = g[e];
                                if (!o.DEPRECATED_$isGridCellNode(l)) {
                                    s(25);
                                }
                                let u = _[r];
                                if (!o.DEPRECATED_$isGridCellNode(u)) {
                                    s(25);
                                }
                                if (t === i && e === n) {
                                    f = l.getKey();
                                } else if (t === d && e === a) {
                                    h = l.getKey();
                                }
                                let c = l.getChildren();
                                u.getChildren().forEach(e => {
                                    if (o.$isTextNode(e)) {
                                        o.$createParagraphNode().append(e);
                                    }
                                    l.append(e);
                                });
                                c.forEach(e => e.remove());
                                r++;
                            }
                            u++;
                        }
                        if (f && h) {
                            (e = o.DEPRECATED_$createGridSelection()).set(t.getKey(), f, h);
                            o.$setSelection(e);
                            r.dispatchCommand(o.SELECTION_CHANGE_COMMAND, undefined);
                        }
                    })(t, n, false, e);
                } else {
                    (function (e, t) {
                        let n = [];
                        let r = null;
                        for (let t = 0; t < e.length; t++) {
                            let i = e[t];
                            let l = o.$isLineBreakNode(i);
                            if (l || o.$isDecoratorNode(i) && i.isInline() || o.$isElementNode(i) && i.isInline() || o.$isTextNode(i) || i.isParentRequired()) {
                                if (r === null && (r = i.createParentElementNode(), n.push(r), l)) {
                                    continue;
                                }
                                if (r !== null) {
                                    r.append(i);
                                }
                            } else {
                                n.push(i);
                                r = null;
                            }
                        }
                        if (o.$isRangeSelection(t)) {
                            t.insertNodes(n);
                        } else if (o.DEPRECATED_$isGridSelection(t)) {
                            e = t.anchor.getNode();
                            if (!o.DEPRECATED_$isGridCellNode(e)) {
                                s(41);
                            }
                            e.append(...n);
                        }
                    })(t, n);
                }
            }

            function c (e, t, n, r = []) {
                let l = t == null || n.isSelected(t);
                let a = o.$isElementNode(n) && n.excludeFromCopy("html");
                var u = n;
                if (t !== null) {
                    var d = i.$cloneWithProperties(n);
                    u = d = o.$isTextNode(d) && t != null ? i.$sliceSelectedTextNodeContent(t, d) : d;
                }
                let f = o.$isElementNode(u) ? u.getChildren() : [];
                var h = u;
                if ((d = h.exportJSON()).type !== h.constructor.getType()) {
                    s(58);
                }
                var g = d.children;
                if (o.$isElementNode(h)) {
                    if (!Array.isArray(g)) {
                        s(59);
                    }
                }
                if (o.$isTextNode(u)) {
                    if ((u = u.__text).length > 0) {
                        d.text = u;
                    } else {
                        l = false;
                    }
                }
                u = 0;
                for (; u < f.length; u++) {
                    g = c(e, t, h = f[u], d.children);
                    if (!l && o.$isElementNode(n) && g && n.extractWithChild(h, t, "clone")) {
                        l = true;
                    }
                }
                if (l && !a) {
                    r.push(d);
                } else if (Array.isArray(d.children)) {
                    for (e = 0; e < d.children.length; e++) {
                        r.push(d.children[e]);
                    }
                }
                return l;
            }

            function f (e, t) {
                let n = [];
                let r = o.$getRoot().getChildren();
                for (let i = 0; i < r.length; i++) {
                    c(e, t, r[i], n);
                }
                return {
                    namespace: e._config.namespace,
                    nodes: n
                };
            }

            function h (e) {
                let t = [];
                for (let n = 0; n < e.length; n++) {
                    let r = o.$parseSerializedNode(e[n]);
                    if (o.$isTextNode(r)) {
                        i.$addNodeStyle(r);
                    }
                    t.push(r);
                }
                return t;
            }
            let g = null;

            function _ (e, t) {
                var n = window.getSelection();
                if (!n) {
                    return false;
                }
                var r = n.anchorNode;
                n = n.focusNode;
                if (r !== null && n !== null && !o.isSelectionWithinEditor(e, r, n)) {
                    return false;
                }
                t.preventDefault();
                t = t.clipboardData;
                r = o.$getSelection();
                if (t === null || r === null) {
                    return false;
                }
                n = a(e);
                e = u(e);
                let i = "";
                if (r !== null) {
                    i = r.getTextContent();
                }
                if (n !== null) {
                    t.setData("text/html", n);
                }
                if (e !== null) {
                    t.setData("application/x-lexical-editor", e);
                }
                t.setData("text/plain", i);
                return true;
            }
            t.$generateJSONFromSelectedNodes = f;
            t.$generateNodesFromSerializedNodes = h;
            t.$getHtmlContent = a;
            t.$getLexicalContent = u;
            t.$insertDataTransferForPlainText = function (e, t) {
                if ((e = e.getData("text/plain")) != null) {
                    t.insertRawText(e);
                }
            };
            t.$insertDataTransferForRichText = function (e, t, n) {
                var i = e.getData("application/x-lexical-editor");
                if (i) {
                    try {
                        let e = JSON.parse(i);
                        if (e.namespace === n._config.namespace && Array.isArray(e.nodes)) {
                            return d(n, h(e.nodes), t);
                        }
                    } catch {}
                }
                if (i = e.getData("text/html")) {
                    try {
                        var l = new DOMParser().parseFromString(i, "text/html");
                        return d(n, r.$generateNodesFromDOM(n, l), t);
                    } catch {}
                }
                if ((e = e.getData("text/plain")) != null) {
                    if (o.$isRangeSelection(t)) {
                        n = (e = e.split(/\r?\n/)).length;
                        l = 0;
                        n = (e = e.split(/\r?\n/)).length;
                        l = 0;
                        for (; l < n; l++) {
                            t.insertText(e[l]);
                            if (l < n - 1) {
                                t.insertParagraph();
                            }
                        }
                    } else {
                        t.insertRawText(e);
                    }
                }
            };
            t.$insertGeneratedNodes = d;
            t.copyToClipboard = async function (e, t) {
                if (g !== null) {
                    return false;
                }
                if (t !== null) {
                    return new Promise(n => {
                        e.update(() => {
                            n(_(e, t));
                        });
                    });
                }
                var n = e.getRootElement();
                let r = document.getSelection();
                if (n === null || r === null) {
                    return false;
                }
                let i = document.createElement("span");
                i.style.cssText = "position: fixed; top: -1000px;";
                i.append(document.createTextNode("#"));
                n.append(i);
                (n = new Range()).setStart(i, 0);
                n.setEnd(i, 1);
                r.removeAllRanges();
                r.addRange(n);
                return new Promise(t => {
                    let n = e.registerCommand(o.COPY_COMMAND, r => {
                        if (r instanceof ClipboardEvent) {
                            n();
                            if (g !== null) {
                                window.clearTimeout(g);
                                g = null;
                            }
                            t(_(e, r));
                        }
                        return true;
                    }, o.COMMAND_PRIORITY_CRITICAL);
                    g = window.setTimeout(() => {
                        n();
                        g = null;
                        t(false);
                    }, 50);
                    document.execCommand("copy");
                    i.remove();
                });
            };
        },
        570573: (e, t, n) => {
            "use strict";

            const r = n(97370);
            e.exports = r;
        },
        97370: (e, t, n) => {
            "use strict";

            var r = n(932998);
            t.registerDragonSupport = function (e) {
                let t = window.location.origin;
                let n = n => {
                    if (n.origin === t) {
                        var i = e.getRootElement();
                        if (document.activeElement === i && typeof (i = n.data) == "string") {
                            try {
                                var l = JSON.parse(i);
                            } catch (e) {
                                return;
                            }
                            if (l && l.protocol === "nuanria_messaging" && l.type === "request" && (l = l.payload) && l.functionId === "makeChanges" && (l = l.args)) {
                                const [t, i, o, s, a] = l;
                                e.update(() => {
                                    const e = r.$getSelection();
                                    if (r.$isRangeSelection(e)) {
                                        var l = e.anchor;
                                        let u = l.getNode();
                                        let d = 0;
                                        let c = 0;
                                        if (r.$isTextNode(u) && t >= 0 && i >= 0) {
                                            d = t;
                                            c = t + i;
                                            e.setTextNodeRange(u, d, u, c);
                                        }
                                        if (!(d === c && o === "")) {
                                            e.insertRawText(o);
                                            u = l.getNode();
                                        }
                                        if (r.$isTextNode(u)) {
                                            d = s;
                                            c = s + a;
                                            d = d > (l = u.getTextContentSize()) ? l : d;
                                            c = c > l ? l : c;
                                            e.setTextNodeRange(u, d, u, c);
                                        }
                                        n.stopImmediatePropagation();
                                    }
                                });
                            }
                        }
                    }
                };
                window.addEventListener("message", n, true);
                return () => {
                    window.removeEventListener("message", n, true);
                };
            };
        },
        548854: (e, t, n) => {
            "use strict";

            const r = n(654379);
            e.exports = r;
        },
        654379: (e, t, n) => {
            "use strict";

            var r = n(376969);
            var i = n(932998);

            function l (e, t) {
                let n = Date.now();
                let r = 0;
                return (l, o, s, a, u, d) => {
                    let c = Date.now();
                    if (d.has("historic")) {
                        r = 0;
                        n = c;
                        return 2;
                    }
                    let f = function (e, t, n, r, l) {
                        if (e === null || n.size === 0 && r.size === 0 && !l) {
                            return 0;
                        }
                        var o = t._selection;
                        var s = e._selection;
                        if (l) {
                            return 1;
                        }
                        if (!(i.$isRangeSelection(o) && i.$isRangeSelection(s) && s.isCollapsed() && o.isCollapsed())) {
                            return 0;
                        }
                        l = t._nodeMap;
                        let a = [];
                        for (let e of n) {
                            if ((n = l.get(e)) !== undefined) {
                                a.push(n);
                            }
                        }
                        for (let [e, t] of r) {
                            if (t) {
                                if (!((r = l.get(e)) === undefined || i.$isRootNode(r))) {
                                    a.push(r);
                                }
                            }
                        }
                        if (a.length === 0) {
                            return 0;
                        } else if (a.length > 1) {
                            t = (r = t._nodeMap).get(o.anchor.key);
                            s = r.get(s.anchor.key);
                            if (t && s && !e._nodeMap.has(t.__key) && i.$isTextNode(t) && t.__text.length === 1 && o.anchor.offset === 1) {
                                return 2;
                            } else {
                                return 0;
                            }
                        } else {
                            t = a[0];
                            e = e._nodeMap.get(t.__key);
                            if (i.$isTextNode(e) && i.$isTextNode(t) && e.__mode === t.__mode) {
                                if ((e = e.__text) === (t = t.__text)) {
                                    return 0;
                                } else {
                                    o = o.anchor;
                                    s = s.anchor;
                                    if (o.key !== s.key || o.type !== "text") {
                                        return 0;
                                    } else {
                                        o = o.offset;
                                        s = s.offset;
                                        if ((e = t.length - e.length) == 1 && s === o - 1) {
                                            return 2;
                                        } else if (e === -1 && s === o + 1) {
                                            return 3;
                                        } else if (e === -1 && s === o) {
                                            return 4;
                                        } else {
                                            return 0;
                                        }
                                    }
                                }
                            } else {
                                return 0;
                            }
                        }
                    }(l, o, a, u, e.isComposing());
                    let h = (() => {
                        var h = s === null || s.editor === e;
                        var g = d.has("history-push");
                        if (!g && h && d.has("history-merge")) {
                            return 0;
                        }
                        if (l === null) {
                            return 1;
                        }
                        var _ = o._selection;
                        if (!(a.size > 0 || u.size > 0)) {
                            if (_ !== null) {
                                return 0;
                            } else {
                                return 2;
                            }
                        }
                        if (g === false && f !== 0 && f === r && c < n + t && h) {
                            return 0;
                        }
                        if (a.size === 1) {
                            {
                                g = Array.from(a)[0];
                                h = l._nodeMap.get(g);
                                g = o._nodeMap.get(g);
                                _ = l._selection;
                                let e = o._selection;
                                let t = false;
                                if (i.$isRangeSelection(_) && i.$isRangeSelection(e)) {
                                    t = _.anchor.type === "element" && _.focus.type === "element" && e.anchor.type === "text" && e.focus.type === "text";
                                }
                                h = !(t || !i.$isTextNode(h) || !i.$isTextNode(g)) && h.__type === g.__type && h.__text === g.__text && h.__mode === g.__mode && h.__detail === g.__detail && h.__style === g.__style && h.__format === g.__format && h.__parent === g.__parent;
                            }
                            if (h) {
                                return 0;
                            }
                        }
                        return 1;
                    })();
                    n = c;
                    r = f;
                    return h;
                };
            }
            t.createEmptyHistoryState = function () {
                return {
                    current: null,
                    redoStack: [],
                    undoStack: []
                };
            };
            t.registerHistory = function (e, t, n) {
                let o = l(e, n);
                n = ({
                    editorState: n,
                    prevEditorState: r,
                    dirtyLeaves: l,
                    dirtyElements: s,
                    tags: a
                }) => {
                    const u = t.current;
                    const d = t.redoStack;
                    const c = t.undoStack;
                    const f = u === null ? null : u.editorState;
                    if (u === null || n !== f) {
                        if ((l = o(r, n, u, l, s, a)) === 1) {
                            if (d.length !== 0) {
                                t.redoStack = [];
                                e.dispatchCommand(i.CAN_REDO_COMMAND, false);
                            }
                            if (u !== null) {
                                c.push({
                                    ...u,
                                    undoSelection: r.read(i.$getSelection)
                                });
                                e.dispatchCommand(i.CAN_UNDO_COMMAND, true);
                            }
                        } else if (l === 2) {
                            return;
                        }
                        t.current = {
                            editor: e,
                            editorState: n
                        };
                    }
                };
                let s = r.mergeRegister(e.registerCommand(i.UNDO_COMMAND, () => {
                    let n = t.redoStack;
                    let r = t.undoStack;
                    if (r.length !== 0) {
                        let l = t.current;
                        let o = r.pop();
                        if (l !== null) {
                            n.push(l);
                            e.dispatchCommand(i.CAN_REDO_COMMAND, true);
                        }
                        if (r.length === 0) {
                            e.dispatchCommand(i.CAN_UNDO_COMMAND, false);
                        }
                        t.current = o || null;
                        if (o) {
                            o.editor.setEditorState(o.editorState.clone(o.undoSelection), {
                                tag: "historic"
                            });
                        }
                    }
                    return true;
                }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.REDO_COMMAND, () => {
                    let n = t.redoStack;
                    var r = t.undoStack;
                    if (n.length !== 0) {
                        let l = t.current;
                        if (l !== null) {
                            r.push(l);
                            e.dispatchCommand(i.CAN_UNDO_COMMAND, true);
                        }
                        r = n.pop();
                        if (n.length === 0) {
                            e.dispatchCommand(i.CAN_REDO_COMMAND, false);
                        }
                        t.current = r || null;
                        if (r) {
                            r.editor.setEditorState(r.editorState, {
                                tag: "historic"
                            });
                        }
                    }
                    return true;
                }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_EDITOR_COMMAND, () => {
                    t.undoStack = [];
                    t.redoStack = [];
                    t.current = null;
                    return false;
                }, i.COMMAND_PRIORITY_EDITOR), e.registerCommand(i.CLEAR_HISTORY_COMMAND, () => {
                    t.undoStack = [];
                    t.redoStack = [];
                    t.current = null;
                    e.dispatchCommand(i.CAN_REDO_COMMAND, false);
                    e.dispatchCommand(i.CAN_UNDO_COMMAND, false);
                    return true;
                }, i.COMMAND_PRIORITY_EDITOR), e.registerUpdateListener(n));
                let a = e.registerUpdateListener(n);
                return () => {
                    s();
                    a();
                };
            };
        },
        587592: (e, t, n) => {
            "use strict";

            const r = n(164478);
            e.exports = r;
        },
        164478: (e, t, n) => {
            "use strict";

            var r = n(389408);
            var i = n(932998);

            function l (e, t, n, o = null) {
                let s = o == null || t.isSelected();
                let a = i.$isElementNode(t) && t.excludeFromCopy("html");
                var u = t;
                if (o !== null) {
                    u = r.$cloneWithProperties(t);
                    u = i.$isTextNode(u) && o != null ? r.$sliceSelectedTextNodeContent(o, u) : u;
                }
                let d = i.$isElementNode(u) ? u.getChildren() : [];
                let {
                    element: c,
                    after: f
                } = u.exportDOM(e);
                if (!c) {
                    return false;
                }
                let h = new DocumentFragment();
                for (let n = 0; n < d.length; n++) {
                    let r = d[n];
                    let a = l(e, r, h, o);
                    if (!s && i.$isElementNode(t) && a && t.extractWithChild(r, o, "html")) {
                        s = true;
                    }
                }
                if (s && !a) {
                    c.append(h);
                    n.append(c);
                    if (f && (e = f.call(u, c))) {
                        c.replaceWith(e);
                    }
                } else {
                    n.append(h);
                }
                return s;
            }
            let o = new Set(["STYLE"]);

            function s (e, t, n = new Map(), r, l = false) {
                let a = [];
                if (o.has(e.nodeName)) {
                    return a;
                }
                let u = null;
                var {
                    nodeName: d
                } = e;
                var c = t._htmlConversions.get(d.toLowerCase());
                d = null;
                if (c !== undefined) {
                    for (f of c) {
                        if ((c = f(e)) !== null && (d === null || d.priority < c.priority)) {
                            d = c;
                        }
                    }
                }
                var f = (f = d !== null ? d.conversion : null) ? f(e, undefined, l) : null;
                d = null;
                if (f !== null) {
                    d = f.after;
                    u = f.node;
                    if (u !== null) {
                        for (var [, h] of n) {
                            u = h(u, r);
                            if (!u) {
                                break;
                            }
                        }
                        if (u) {
                            a.push(u);
                        }
                    }
                    if (f.forChild != null) {
                        n.set(e.nodeName, f.forChild);
                    }
                }
                e = e.childNodes;
                r = [];
                h = 0;
                for (; h < e.length; h++) {
                    r.push(...s(e[h], t, new Map(n), u, l || (f && f.preformatted) === true));
                }
                if (d != null) {
                    r = d(r);
                }
                if (u == null) {
                    a = a.concat(r);
                } else if (i.$isElementNode(u)) {
                    u.append(...r);
                }
                return a;
            }
            t.$generateHtmlFromNodes = function (e, t) {
                if (typeof document == "undefined" || typeof window == "undefined") {
                    throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
                }
                let n = document.createElement("div");
                let r = i.$getRoot().getChildren();
                for (let i = 0; i < r.length; i++) {
                    l(e, r[i], n, t);
                }
                return n.innerHTML;
            };
            t.$generateNodesFromDOM = function (e, t) {
                let n = [];
                t = t.body ? t.body.childNodes : [];
                for (let i = 0; i < t.length; i++) {
                    var r = t[i];
                    if (!o.has(r.nodeName)) {
                        if ((r = s(r, e)) !== null) {
                            n = n.concat(r);
                        }
                    }
                }
                return n;
            };
        },
        873435: (e, t, n) => {
            "use strict";

            const r = n(813906);
            e.exports = r;
        },
        813906: (e, t, n) => {
            "use strict";

            var r = n(376969);
            var i = n(932998);
            class l extends i.ElementNode {
                static getType() {
                    return "link";
                }
                static clone(e) {
                    return new l(e.__url, {
                        rel: e.__rel,
                        target: e.__target
                    }, e.__key);
                }
                constructor(e, t = {}, n) {
                    super(n);
                    let {
                        target: r = null,
                        rel: i = null
                    } = t;
                    this.__url = e;
                    this.__target = r;
                    this.__rel = i;
                }
                createDOM(e) {
                    let t = document.createElement("a");
                    t.href = this.__url;
                    if (this.__target !== null) {
                        t.target = this.__target;
                    }
                    if (this.__rel !== null) {
                        t.rel = this.__rel;
                    }
                    r.addClassNamesToElement(t, e.theme.link);
                    return t;
                }
                updateDOM(e, t) {
                    let n = this.__url;
                    let r = this.__target;
                    let i = this.__rel;
                    if (n !== e.__url) {
                        t.href = n;
                    }
                    if (r !== e.__target) {
                        if (r) {
                            t.target = r;
                        } else {
                            t.removeAttribute("target");
                        }
                    }
                    if (i !== e.__rel) {
                        if (i) {
                            t.rel = i;
                        } else {
                            t.removeAttribute("rel");
                        }
                    }
                    return false;
                }
                static importDOM() {
                    return {
                        a: () => ({
                            conversion: o,
                            priority: 1
                        })
                    };
                }
                static importJSON(e) {
                    let t = s(e.url, {
                        rel: e.rel,
                        target: e.target
                    });
                    t.setFormat(e.format);
                    t.setIndent(e.indent);
                    t.setDirection(e.direction);
                    return t;
                }
                exportJSON() {
                    return {
                        ...super.exportJSON(),
                        rel: this.getRel(),
                        target: this.getTarget(),
                        type: "link",
                        url: this.getURL(),
                        version: 1
                    };
                }
                getURL() {
                    return this.getLatest().__url;
                }
                setURL(e) {
                    this.getWritable().__url = e;
                }
                getTarget() {
                    return this.getLatest().__target;
                }
                setTarget(e) {
                    this.getWritable().__target = e;
                }
                getRel() {
                    return this.getLatest().__rel;
                }
                setRel(e) {
                    this.getWritable().__rel = e;
                }
                insertNewAfter(e, t = true) {
                    e = this.getParentOrThrow().insertNewAfter(e, t);
                    if (i.$isElementNode(e)) {
                        t = s(this.__url, {
                            rel: this.__rel,
                            target: this.__target
                        });
                        e.append(t);
                        return t;
                    } else {
                        return null;
                    }
                }
                canInsertTextBefore() {
                    return false;
                }
                canInsertTextAfter() {
                    return false;
                }
                canBeEmpty() {
                    return false;
                }
                isInline() {
                    return true;
                }
                extractWithChild(e, t) {
                    if (!i.$isRangeSelection(t)) {
                        return false;
                    }
                    e = t.anchor.getNode();
                    let n = t.focus.getNode();
                    return this.isParentOf(e) && this.isParentOf(n) && t.getTextContent().length > 0;
                }
            }

            function o (e) {
                let t = null;
                if (r.isHTMLAnchorElement(e)) {
                    let n = e.textContent;
                    if (n !== null && n !== "") {
                        t = s(e.getAttribute("href") || "", {
                            rel: e.getAttribute("rel"),
                            target: e.getAttribute("target")
                        });
                    }
                }
                return {
                    node: t
                };
            }

            function s (e, t) {
                return i.$applyNodeReplacement(new l(e, t));
            }

            function a (e) {
                return e instanceof l;
            }
            class u extends l {
                static getType () {
                    return "autolink";
                }
                static clone (e) {
                    return new u(e.__url, {
                        rel: e.__rel,
                        target: e.__target
                    }, e.__key);
                }
                static importJSON (e) {
                    let t = d(e.url, {
                        rel: e.rel,
                        target: e.target
                    });
                    t.setFormat(e.format);
                    t.setIndent(e.indent);
                    t.setDirection(e.direction);
                    return t;
                }
                static importDOM () {
                    return null;
                }
                exportJSON () {
                    return {
                        ...super.exportJSON(),
                        type: "autolink",
                        version: 1
                    };
                }
                insertNewAfter (e, t = true) {
                    e = this.getParentOrThrow().insertNewAfter(e, t);
                    if (i.$isElementNode(e)) {
                        t = d(this.__url, {
                            rel: this._rel,
                            target: this.__target
                        });
                        e.append(t);
                        return t;
                    } else {
                        return null;
                    }
                }
            }

            function d (e, t) {
                return i.$applyNodeReplacement(new u(e, t));
            }
            let c = i.createCommand("TOGGLE_LINK_COMMAND");
            t.$createAutoLinkNode = d;
            t.$createLinkNode = s;
            t.$isAutoLinkNode = function (e) {
                return e instanceof u;
            };
            t.$isLinkNode = a;
            t.AutoLinkNode = u;
            t.LinkNode = l;
            t.TOGGLE_LINK_COMMAND = c;
            t.toggleLink = function (e, t = {}) {
                let {
                    target: n
                } = t;
                let r = t.rel === undefined ? "noopener" : t.rel;
                t = i.$getSelection();
                if (i.$isRangeSelection(t)) {
                    t = t.extract();
                    if (e === null) {
                        t.forEach(e => {
                            if (a(e = e.getParent())) {
                                let t = e.getChildren();
                                for (let n = 0; n < t.length; n++) {
                                    e.insertBefore(t[n]);
                                }
                                e.remove();
                            }
                        });
                    } else {
                        if (t.length === 1) {
                            var l = t[0];
                            if ((l = a(l) ? l : function (e) {
                                    return function (e, t) {
                                        for (; e !== null && (e = e.getParent()) !== null && !t(e););
                                        return e;
                                    }(e, e => a(e));
                                }(l)) !== null) {
                                l.setURL(e);
                                if (n !== undefined) {
                                    l.setTarget(n);
                                }
                                return void(r !== null && l.setRel(r));
                            }
                        }
                        let o = null;
                        let u = null;
                        t.forEach(t => {
                            var l = t.getParent();
                            if (l !== u && l !== null && (!i.$isElementNode(t) || t.isInline())) {
                                if (a(l)) {
                                    u = l;
                                    l.setURL(e);
                                    if (n !== undefined) {
                                        l.setTarget(n);
                                    }
                                    if (r !== null) {
                                        u.setRel(r);
                                    }
                                } else {
                                    if (!l.is(o)) {
                                        o = l;
                                        u = s(e, {
                                            rel: r,
                                            target: n
                                        });
                                        if (a(l)) {
                                            if (t.getPreviousSibling() === null) {
                                                l.insertBefore(u);
                                            } else {
                                                l.insertAfter(u);
                                            }
                                        } else {
                                            t.insertBefore(u);
                                        }
                                    }
                                    if (a(t)) {
                                        if (!t.is(u)) {
                                            if (u !== null) {
                                                l = t.getChildren();
                                                for (let e = 0; e < l.length; e++) {
                                                    u.append(l[e]);
                                                }
                                            }
                                            t.remove();
                                        }
                                    } else if (u !== null) {
                                        u.append(t);
                                    }
                                }
                            }
                        });
                    }
                }
            };
        },
        329428: (e, t, n) => {
            "use strict";

            const r = n(174301);
            e.exports = r;
        },
        174301: (e, t, n) => {
            "use strict";

            var r = n(932998);
            var i = n(376969);
            class l extends r.ElementNode {
                static getType() {
                    return "mark";
                }
                static clone(e) {
                    return new l(Array.from(e.__ids), e.__key);
                }
                static importDOM() {
                    return null;
                }
                static importJSON(e) {
                    let t = o(e.ids);
                    t.setFormat(e.format);
                    t.setIndent(e.indent);
                    t.setDirection(e.direction);
                    return t;
                }
                exportJSON() {
                    return {
                        ...super.exportJSON(),
                        ids: this.getIDs(),
                        type: "mark",
                        version: 1
                    };
                }
                constructor(e, t) {
                    super(t);
                    this.__ids = e || [];
                }
                createDOM(e) {
                    let t = document.createElement("mark");
                    i.addClassNamesToElement(t, e.theme.mark);
                    if (this.__ids.length > 1) {
                        i.addClassNamesToElement(t, e.theme.markOverlap);
                    }
                    return t;
                }
                updateDOM(e, t, n) {
                    e = e.__ids.length;
                    let r = this.__ids.length;
                    n = n.theme.markOverlap;
                    if (e !== r) {
                        if (e === 1) {
                            if (r === 2) {
                                i.addClassNamesToElement(t, n);
                            }
                        } else if (r === 1) {
                            i.removeClassNamesFromElement(t, n);
                        }
                    }
                    return false;
                }
                hasID(e) {
                    let t = this.getIDs();
                    for (let n = 0; n < t.length; n++) {
                        if (e === t[n]) {
                            return true;
                        }
                    }
                    return false;
                }
                getIDs() {
                    let e = this.getLatest();
                    if (s(e)) {
                        return e.__ids;
                    } else {
                        return [];
                    }
                }
                addID(e) {
                    var t = this.getWritable();
                    if (s(t)) {
                        let n = t.__ids;
                        t.__ids = n;
                        t = 0;
                        for (; t < n.length; t++) {
                            if (e === n[t]) {
                                return;
                            }
                        }
                        n.push(e);
                    }
                }
                deleteID(e) {
                    var t = this.getWritable();
                    if (s(t)) {
                        let n = t.__ids;
                        t.__ids = n;
                        t = 0;
                        for (; t < n.length; t++) {
                            if (e === n[t]) {
                                n.splice(t, 1);
                                break;
                            }
                        }
                    }
                }
                insertNewAfter(e, t = true) {
                    e = this.getParentOrThrow().insertNewAfter(e, t);
                    if (r.$isElementNode(e)) {
                        t = o(this.__ids);
                        e.append(t);
                        return t;
                    } else {
                        return null;
                    }
                }
                canInsertTextBefore() {
                    return false;
                }
                canInsertTextAfter() {
                    return false;
                }
                canBeEmpty() {
                    return false;
                }
                isInline() {
                    return true;
                }
                extractWithChild(e, t, n) {
                    if (!r.$isRangeSelection(t) || n === "html") {
                        return false;
                    }
                    let i = t.anchor;
                    let l = t.focus;
                    e = i.getNode();
                    n = l.getNode();
                    t = t.isBackward() ? i.offset - l.offset : l.offset - i.offset;
                    return this.isParentOf(e) && this.isParentOf(n) && this.getTextContent().length === t;
                }
                excludeFromCopy(e) {
                    return e !== "clone";
                }
            }

            function o (e) {
                return r.$applyNodeReplacement(new l(e));
            }

            function s (e) {
                return e instanceof l;
            }
            t.$createMarkNode = o;
            t.$getMarkIDs = function (e, t) {
                for (; e !== null;) {
                    if (s(e)) {
                        return e.getIDs();
                    }
                    if (r.$isTextNode(e) && t === e.getTextContentSize()) {
                        let t = e.getNextSibling();
                        if (s(t)) {
                            return t.getIDs();
                        }
                    }
                    e = e.getParent();
                }
                return null;
            };
            t.$isMarkNode = s;
            t.$unwrapMarkNode = function (e) {
                let t = e.getChildren();
                let n = null;
                for (let r = 0; r < t.length; r++) {
                    let i = t[r];
                    if (n === null) {
                        e.insertBefore(i);
                    } else {
                        n.insertAfter(i);
                    }
                    n = i;
                }
                e.remove();
            };
            t.$wrapSelectionInMarkNode = function (e, t, n, i) {
                let l = e.getNodes();
                var a = e.anchor.offset;
                var u = e.focus.offset;
                e = l.length;
                let d;
                let c;
                let f = t ? u : a;
                t = t ? a : u;
                a = 0;
                for (; a < e; a++) {
                    var h = l[a];
                    if (r.$isElementNode(c) && c.isParentOf(h)) {
                        continue;
                    }
                    u = a === 0;
                    let _ = a === e - 1;
                    var g = null;
                    if (r.$isTextNode(h)) {
                        g = h.getTextContentSize();
                        let e = u ? f : 0;
                        let n = _ ? t : g;
                        if (e === 0 && n === 0) {
                            continue;
                        }
                        g = (h = h.splitText(e, n)).length > 1 && (h.length === 3 || u && !_ || n === g) ? h[1] : h[0];
                    } else {
                        if (s(h)) {
                            continue;
                        }
                        if (r.$isElementNode(h) && h.isInline()) {
                            g = h;
                        }
                    }
                    if (g !== null) {
                        if (!(g && g.is(d))) {
                            if (!((u = g.getParent()) != null && u.is(d))) {
                                c = undefined;
                            }
                            d = u;
                            if (c === undefined) {
                                c = (i || o)([n]);
                                g.insertBefore(c);
                            }
                            c.append(g);
                        }
                    } else {
                        c = d = undefined;
                    }
                }
            };
            t.MarkNode = l;
        },
        99299: (e, t, n) => {
            "use strict";

            const r = n(161490);
            e.exports = r;
        },
        161490: (e, t, n) => {
            "use strict";

            var r = n(986907);
            var i = n(389408);
            var l = n(376969);
            var o = n(932998);
            let s = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
            let a = s && "documentMode" in document ? document.documentMode : null;
            if (s) {
                /Mac|iPod|iPhone|iPad/.test(navigator.platform);
            }
            if (s) {
                /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
            }
            let u = !(!s || !("InputEvent" in window) || a) && "getTargetRanges" in new window.InputEvent("input");
            let d = s && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
            let c = s && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            let f = s && /^(?=.*Chrome).*/i.test(navigator.userAgent);
            let h = s && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !f;

            function g (e, t) {
                t.update(() => {
                    let n = e instanceof KeyboardEvent ? null : e.clipboardData;
                    let i = o.$getSelection();
                    if (i !== null && n != null) {
                        e.preventDefault();
                        let l = r.$getHtmlContent(t);
                        if (l !== null) {
                            n.setData("text/html", l);
                        }
                        n.setData("text/plain", i.getTextContent());
                    }
                });
            }
            t.registerPlainText = function (e) {
                return l.mergeRegister(e.registerCommand(o.DELETE_CHARACTER_COMMAND, e => {
                    const t = o.$getSelection();
                    return !!o.$isRangeSelection(t) && (t.deleteCharacter(e), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.DELETE_WORD_COMMAND, e => {
                    const t = o.$getSelection();
                    return !!o.$isRangeSelection(t) && (t.deleteWord(e), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.DELETE_LINE_COMMAND, e => {
                    const t = o.$getSelection();
                    return !!o.$isRangeSelection(t) && (t.deleteLine(e), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.CONTROLLED_TEXT_INSERTION_COMMAND, e => {
                    const t = o.$getSelection();
                    if (!o.$isRangeSelection(t)) {
                        return false;
                    }
                    if (typeof e == "string") {
                        t.insertText(e);
                    } else {
                        const n = e.dataTransfer;
                        if (n != null) {
                            r.$insertDataTransferForPlainText(n, t);
                        } else if (e = e.data) {
                            t.insertText(e);
                        }
                    }
                    return true;
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.REMOVE_TEXT_COMMAND, () => {
                    const e = o.$getSelection();
                    return !!o.$isRangeSelection(e) && (e.removeText(), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.INSERT_LINE_BREAK_COMMAND, e => {
                    const t = o.$getSelection();
                    return !!o.$isRangeSelection(t) && (t.insertLineBreak(e), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.INSERT_PARAGRAPH_COMMAND, () => {
                    const e = o.$getSelection();
                    return !!o.$isRangeSelection(e) && (e.insertLineBreak(), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.KEY_ARROW_LEFT_COMMAND, e => {
                    const t = o.$getSelection();
                    if (!o.$isRangeSelection(t)) {
                        return false;
                    }
                    const n = e.shiftKey;
                    return !!i.$shouldOverrideDefaultCharacterSelection(t, true) && (e.preventDefault(), i.$moveCharacter(t, n, true), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.KEY_ARROW_RIGHT_COMMAND, e => {
                    const t = o.$getSelection();
                    if (!o.$isRangeSelection(t)) {
                        return false;
                    }
                    const n = e.shiftKey;
                    return !!i.$shouldOverrideDefaultCharacterSelection(t, false) && (e.preventDefault(), i.$moveCharacter(t, n, false), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.KEY_BACKSPACE_COMMAND, t => {
                    const n = o.$getSelection();
                    return !!o.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(o.DELETE_CHARACTER_COMMAND, true));
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.KEY_DELETE_COMMAND, t => {
                    const n = o.$getSelection();
                    return !!o.$isRangeSelection(n) && (t.preventDefault(), e.dispatchCommand(o.DELETE_CHARACTER_COMMAND, false));
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.KEY_ENTER_COMMAND, t => {
                    const n = o.$getSelection();
                    if (!o.$isRangeSelection(n)) {
                        return false;
                    }
                    if (t !== null) {
                        if ((c || d || h) && u) {
                            return false;
                        }
                        t.preventDefault();
                    }
                    return e.dispatchCommand(o.INSERT_LINE_BREAK_COMMAND, false);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.COPY_COMMAND, t => {
                    const n = o.$getSelection();
                    return !!o.$isRangeSelection(n) && (g(t, e), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.CUT_COMMAND, t => {
                    const n = o.$getSelection();
                    return !!o.$isRangeSelection(n) && (function (e, t) {
                        g(e, t);
                        t.update(() => {
                            let e = o.$getSelection();
                            if (o.$isRangeSelection(e)) {
                                e.removeText();
                            }
                        });
                    }(t, e), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.PASTE_COMMAND, t => {
                    const n = o.$getSelection();
                    return !!o.$isRangeSelection(n) && (function (e, t) {
                        e.preventDefault();
                        t.update(() => {
                            let t = o.$getSelection();
                            let n = e instanceof InputEvent || e instanceof KeyboardEvent ? null : e.clipboardData;
                            if (n != null && o.$isRangeSelection(t)) {
                                r.$insertDataTransferForPlainText(n, t);
                            }
                        }, {
                            tag: "paste"
                        });
                    }(t, e), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.DROP_COMMAND, e => {
                    const t = o.$getSelection();
                    return !!o.$isRangeSelection(t) && (e.preventDefault(), true);
                }, o.COMMAND_PRIORITY_EDITOR), e.registerCommand(o.DRAGSTART_COMMAND, e => {
                    const t = o.$getSelection();
                    return !!o.$isRangeSelection(t) && (e.preventDefault(), true);
                }, o.COMMAND_PRIORITY_EDITOR));
            };
        },
        111356: (e, t, n) => {
            "use strict";

            const r = n(650024);
            e.exports = r;
        },
        650024: (e, t, n) => {
            "use strict";

            var r = n(84260);
            var i = n(932998);
            var l = n(667294);
            var o = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? l.useLayoutEffect : l.useEffect;
            t.ClearEditorPlugin = function ({
                onClear: e
            }) {
                let [t] = r.useLexicalComposerContext();
                o(() => t.registerCommand(i.CLEAR_EDITOR_COMMAND, () => {
                    t.update(() => {
                        if (e == null) {
                            let e = i.$getRoot();
                            let t = i.$getSelection();
                            let n = i.$createParagraphNode();
                            e.clear();
                            e.append(n);
                            if (t !== null) {
                                n.select();
                            }
                        } else {
                            e();
                        }
                    });
                    return true;
                }, i.COMMAND_PRIORITY_EDITOR), [t, e]);
                return null;
            };
        },
        822292: (e, t, n) => {
            "use strict";

            const r = n(544149);
            e.exports = r;
        },
        544149: (e, t, n) => {
            "use strict";

            var r = n(84260);
            var i = n(932998);
            var l = n(667294);
            let o = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
            var s = o ? l.useLayoutEffect : l.useEffect;
            let a = {
                tag: "history-merge"
            };
            t.LexicalComposer = function ({
                initialConfig: e,
                children: t
            }) {
                let n = l.useMemo(() => {
                    const {
                        theme: t,
                        namespace: n,
                        editor__DEPRECATED: l,
                        nodes: s,
                        onError: u,
                        editorState: d
                    } = e;
                    const c = r.createLexicalComposerContext(null, t);
                    let f = l || null;
                    if (f === null) {
                        const e = i.createEditor({
                            editable: false,
                            namespace: n,
                            nodes: s,
                            onError: t => u(t, e),
                            theme: t
                        });
                        ! function (e, t) {
                            if (t !== null) {
                                if (t === undefined) {
                                    e.update(() => {
                                        var t = i.$getRoot();
                                        if (t.isEmpty()) {
                                            let n = i.$createParagraphNode();
                                            t.append(n);
                                            t = o ? document.activeElement : null;
                                            if (i.$getSelection() !== null || t !== null && t === e.getRootElement()) {
                                                n.select();
                                            }
                                        }
                                    }, a);
                                } else if (t !== null) {
                                    switch (typeof t) {
                                        case "string":
                                            let n = e.parseEditorState(t);
                                            e.setEditorState(n, a);
                                            break;
                                        case "object":
                                            e.setEditorState(t, a);
                                            break;
                                        case "function":
                                            e.update(() => {
                                                if (i.$getRoot().isEmpty()) {
                                                    t(e);
                                                }
                                            }, a);
                                    }
                                }
                            }
                        }(e, d);
                        f = e;
                    }
                    return [f, c];
                }, []);
                s(() => {
                    let t = e.editable;
                    let [r] = n;
                    r.setEditable(t === undefined || t);
                }, []);
                return l.createElement(r.LexicalComposerContext.Provider, {
                    value: n
                }, t);
            };
        },
        84260: (e, t, n) => {
            "use strict";

            const r = n(433489);
            e.exports = r;
        },
        433489: (e, t, n) => {
            "use strict";

            var r = n(667294);
            let i = r.createContext(null);
            t.LexicalComposerContext = i;
            t.createLexicalComposerContext = function (e, t) {
                let n = null;
                if (e != null) {
                    n = e[1];
                }
                return {
                    getTheme: function () {
                        if (t != null) {
                            return t;
                        } else if (n != null) {
                            return n.getTheme();
                        } else {
                            return null;
                        }
                    }
                };
            };
            t.useLexicalComposerContext = function () {
                let e = r.useContext(i);
                if (e == null) {
                    throw Error("Minified Lexical error #8; visit https://lexical.dev/docs/error?code=8 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
                }
                return e;
            };
        },
        777943: (e, t, n) => {
            "use strict";

            const r = n(279848);
            e.exports = r;
        },
        279848: (e, t, n) => {
            "use strict";

            var r = n(667294);

            function i (e, t) {
                return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (e, t) {
                    e.__proto__ = t;
                    return e;
                })(e, t);
            }
            var l = {
                error: null
            };
            var o = function (e) {
                function t () {
                    for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) {
                        r[i] = arguments[i];
                    }
                    (t = e.call.apply(e, [this].concat(r)) || this).state = l;
                    t.resetErrorBoundary = function () {
                        for (var e, n = arguments.length, r = Array(n), i = 0; i < n; i++) {
                            r[i] = arguments[i];
                        }
                        if (!(t.props.onReset == null)) {
                            (e = t.props).onReset.apply(e, r);
                        }
                        t.reset();
                    };
                    return t;
                }! function (e, t) {
                    e.prototype = Object.create(t.prototype);
                    e.prototype.constructor = e;
                    i(e, t);
                }(t, e);
                t.getDerivedStateFromError = function (e) {
                    return {
                        error: e
                    };
                };
                var n = t.prototype;
                n.reset = function () {
                    this.setState(l);
                };
                n.componentDidCatch = function (e, t) {
                    var n;
                    var r;
                    if (!((n = (r = this.props).onError) == null)) {
                        n.call(r, e, t);
                    }
                };
                n.componentDidUpdate = function (e, t) {
                    var n;
                    var r;
                    var i = this.props.resetKeys;
                    if (this.state.error !== null && t.error !== null && function (e, t) {
                            if (e === undefined) {
                                e = [];
                            }
                            if (t === undefined) {
                                t = [];
                            }
                            return e.length !== t.length || e.some(function (e, n) {
                                return !Object.is(e, t[n]);
                            });
                        }(e.resetKeys, i)) {
                        if (!((n = (r = this.props).onResetKeysChange) == null)) {
                            n.call(r, e.resetKeys, i);
                        }
                        this.reset();
                    }
                };
                n.render = function () {
                    var e = this.state.error;
                    var t = this.props;
                    var n = t.fallbackRender;
                    var i = t.FallbackComponent;
                    t = t.fallback;
                    if (e !== null) {
                        e = {
                            error: e,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if (r.isValidElement(t)) {
                            return t;
                        }
                        if (typeof n == "function") {
                            return n(e);
                        }
                        if (i) {
                            return r.createElement(i, e);
                        }
                        throw Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");
                    }
                    return this.props.children;
                };
                return t;
            }(r.Component);
            e.exports = function ({
                children: e,
                onError: t
            }) {
                return r.createElement(o, {
                    fallback: r.createElement("div", {
                        style: {
                            border: "1px solid #f00",
                            color: "#f00",
                            padding: "8px"
                        }
                    }, "An error was thrown."),
                    onError: t
                }, e);
            };
        },
        704506: (e, t, n) => {
            "use strict";

            const r = n(800548);
            e.exports = r;
        },
        800548: (e, t, n) => {
            "use strict";

            var r = n(84260);
            var i = n(548854);
            var l = n(667294);
            t.createEmptyHistoryState = i.createEmptyHistoryState;
            t.HistoryPlugin = function ({
                externalHistoryState: e
            }) {
                let [t] = r.useLexicalComposerContext();
                (function (e, t, n = 1000) {
                    let r = l.useMemo(() => t || i.createEmptyHistoryState(), [t]);
                    l.useEffect(() => i.registerHistory(e, r, n), [n, e, r]);
                })(t, e);
                return null;
            };
        },
        717150: (e, t, n) => {
            "use strict";

            const r = n(224800);
            e.exports = r;
        },
        224800: (e, t, n) => {
            "use strict";

            var r = n(84260);
            var i = n(909722);
            var l = n(667294);
            var o = n(302977);
            var s = n(376969);
            var a = n(973935);
            var u = n(570573);
            var d = n(99299);
            var c = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? l.useLayoutEffect : l.useEffect;

            function f (e) {
                return e.getEditorState().read(o.$canShowPlaceholderCurry(e.isComposing()));
            }

            function h ({
                content: e
            }) {
                var [t] = r.useLexicalComposerContext();
                t = function (e) {
                    let [t, n] = l.useState(() => f(e));
                    c(() => {
                        function t () {
                            let t = f(e);
                            n(t);
                        }
                        t();
                        return s.mergeRegister(e.registerUpdateListener(() => {
                            t();
                        }), e.registerEditableListener(() => {
                            t();
                        }));
                    }, [e]);
                    return t;
                }(t);
                let n = i();
                if (t) {
                    if (typeof e == "function") {
                        return e(n);
                    } else {
                        return e;
                    }
                } else {
                    return null;
                }
            }
            t.PlainTextPlugin = function ({
                contentEditable: e,
                placeholder: t,
                ErrorBoundary: n
            }) {
                let [i] = r.useLexicalComposerContext();
                n = function (e, t) {
                    let [n, r] = l.useState(() => e.getDecorators());
                    c(() => e.registerDecoratorListener(e => {
                        a.flushSync(() => {
                            r(e);
                        });
                    }), [e]);
                    l.useEffect(() => {
                        r(e.getDecorators());
                    }, [e]);
                    return l.useMemo(() => {
                        let r = [];
                        let i = Object.keys(n);
                        for (let s = 0; s < i.length; s++) {
                            var o = i[s];
                            let u = l.createElement(t, {
                                onError: t => e._onError(t)
                            }, l.createElement(l.Suspense, {
                                fallback: null
                            }, n[o]));
                            if ((o = e.getElementByKey(o)) !== null) {
                                r.push(a.createPortal(u, o));
                            }
                        }
                        return r;
                    }, [t, n, e]);
                }(i, n);
                (function (e) {
                    c(() => s.mergeRegister(d.registerPlainText(e), u.registerDragonSupport(e)), [e]);
                })(i);
                return l.createElement(l.Fragment, null, e, l.createElement(h, {
                    content: t
                }), n);
            };
        },
        847480: (e, t, n) => {
            "use strict";

            const r = n(22210);
            e.exports = r;
        },
        22210: (e, t, n) => {
            "use strict";

            var r = n(873435);
            var i = n(329428);
            var l = n(376969);
            var o = n(932998);
            var s = n(667294);
            let a = Object.freeze({
                "\t": "\\t",
                "\n": "\\n"
            });
            let u = new RegExp(Object.keys(a).join("|"), "g");
            let d = Object.freeze({
                ancestorHasNextSibling: "|",
                ancestorIsLastChild: " ",
                hasNextSibling: "├",
                isLastChild: "└",
                selectedChar: "^",
                selectedLine: ">"
            });

            function c (e, t, n, l, s) {
                let a = " root\n";
                e = e.read(() => {
                    const e = o.$getSelection();
                    f(o.$getRoot(), (t, n) => {
                        const l = `(${t.getKey()})`;
                        const s = t.getType() || "";
                        const c = t.isSelected();
                        const f = i.$isMarkNode(t) ? ` id: [ ${t.getIDs().join(", ")} ] ` : "";
                        var g = a;
                        var _ = c ? d.selectedLine : " ";
                        var p = n.join(" ");
                        if (o.$isTextNode(t)) {
                            var x = t.getTextContent();
                            var C = x.length === 0 ? "(empty)" : `"${h(x)}"`;
                            x = [C, (x = [v(t), m(t), y(t)].filter(Boolean).join(", ")).length !== 0 ? `{ ${x} }` : null].filter(Boolean).join(" ").trim();
                        } else if (r.$isLinkNode(t)) {
                            x = (x = t.getURL()).length === 0 ? "(empty)" : `"${h(x)}"`;
                            if ((C = t.getTarget()) != null) {
                                C = "target: " + C;
                            }
                            var N = Boolean;
                            let e = t.getRel();
                            if (e != null) {
                                e = "rel: " + e;
                            }
                            x = [x, (C = [C, e].filter(N).join(", ")).length !== 0 ? `{ ${C} }` : null].filter(Boolean).join(" ").trim();
                        } else {
                            x = "";
                        }
                        a = g + `${_} ${p} ${l} ${s} ${f} ${x}\n`;
                        a += function ({
                            indent: e,
                            isSelected: t,
                            node: n,
                            nodeKeyDisplay: r,
                            selection: i,
                            typeDisplay: l
                        }) {
                            if (!o.$isTextNode(n) || !o.$isRangeSelection(i) || !t || o.$isElementNode(n)) {
                                return "";
                            }
                            t = i.anchor;
                            var s = i.focus;
                            if (n.getTextContent() === "" || t.getNode() === i.focus.getNode() && t.offset === s.offset) {
                                return "";
                            }
                            s = i.anchor;
                            let a = i.focus;
                            let c = n.getTextContent();
                            let f = c.length;
                            t = i = -1;
                            if (s.type === "text" && a.type === "text") {
                                let e = s.getNode();
                                let r = a.getNode();
                                if (e === r && n === e && s.offset !== a.offset) {
                                    [i, t] = s.offset < a.offset ? [s.offset, a.offset] : [a.offset, s.offset];
                                } else {
                                    [i, t] = n === e ? e.isBefore(r) ? [s.offset, f] : [0, s.offset] : n === r ? r.isBefore(e) ? [a.offset, f] : [0, a.offset] : [0, f];
                                }
                            }
                            n = (c.slice(0, i).match(u) || []).length;
                            s = (c.slice(i, t).match(u) || []).length;
                            let [h, g] = [i + n, t + n + s];
                            if (h === g) {
                                return "";
                            } else {
                                n = e[e.length - 1] === d.hasNextSibling ? d.ancestorHasNextSibling : d.ancestorIsLastChild;
                                e = [...e.slice(0, e.length - 1), n];
                                n = Array(h + 1).fill(" ");
                                i = Array(g - h).fill(d.selectedChar);
                                r = Array(r.length + (l.length + 3)).fill(" ");
                                return [d.selectedLine, e.join(" "), [...r, ...n, ...i].join("")].join(" ") + "\n";
                            }
                        }({
                            indent: n,
                            isSelected: c,
                            node: t,
                            nodeKeyDisplay: l,
                            selection: e,
                            typeDisplay: s
                        });
                    });
                    if (e === null) {
                        return ": null";
                    } else if (o.$isRangeSelection(e)) {
                        return function (e) {
                            let t = "";
                            var n = v(e);
                            t += `: range ${n !== "" ? `{ ${n} }` : ""} ${e.style !== "" ? `{ style: ${e.style} } ` : ""}`;
                            n = e.anchor;
                            e = e.focus;
                            let r = n.offset;
                            let i = e.offset;
                            t += `\n  ├ anchor { key: ${n.key}, offset: ${r === null ? "null" : r}, type: ${n.type} }`;
                            return t + `\n  └ focus { key: ${e.key}, offset: ${i === null ? "null" : i}, type: ${e.type} }`;
                        }(e);
                    } else if (o.DEPRECATED_$isGridSelection(e)) {
                        return `: grid\n  └ { grid: ${e.gridKey}, anchorCell: ${e.anchor.key}, focusCell: ${e.focus.key} }`;
                    } else {
                        return `: node\n  └ [${Array.from(e._nodes).join(", ")}]`;
                    }
                });
                a += "\n selection" + e;
                a += "\n\n commands:";
                if (n.length) {
                    for (let {
                            type: e,
                            payload: t
                        }
                        of n) {
                        a += `\n  └ { type: ${e}, payload: ${t instanceof Event ? t.constructor.name : t} }`;
                    }
                } else {
                    a += "\n  └ None dispatched.";
                }
                a += "\n\n editor:";
                a += `\n  └ namespace ${t.namespace}`;
                if (l !== null) {
                    a += `\n  └ compositionKey ${l}`;
                }
                return a += `\n  └ editable ${String(s)}`;
            }

            function f (e, t, n = []) {
                let r = (e = e.getChildren()).length;
                e.forEach((e, i) => {
                    t(e, n.concat(i === r - 1 ? d.isLastChild : d.hasNextSibling));
                    if (o.$isElementNode(e)) {
                        f(e, t, n.concat(i === r - 1 ? d.ancestorIsLastChild : d.ancestorHasNextSibling));
                    }
                });
            }

            function h (e) {
                return Object.entries(a).reduce((e, [t, n]) => e.replace(new RegExp(t, "g"), String(n)), e);
            }
            let g = [e => e.hasFormat("bold") && "Bold", e => e.hasFormat("code") && "Code", e => e.hasFormat("italic") && "Italic", e => e.hasFormat("strikethrough") && "Strikethrough", e => e.hasFormat("subscript") && "Subscript", e => e.hasFormat("superscript") && "Superscript", e => e.hasFormat("underline") && "Underline"];
            let _ = [e => e.isDirectionless() && "Directionless", e => e.isUnmergeable() && "Unmergeable"];
            let p = [e => e.isToken() && "Token", e => e.isSegmented() && "Segmented"];

            function m (e) {
                let t = _.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
                if (t !== "") {
                    t = "detail: " + t;
                }
                return t;
            }

            function y (e) {
                let t = p.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
                if (t !== "") {
                    t = "mode: " + t;
                }
                return t;
            }

            function v (e) {
                let t = g.map(t => t(e)).filter(Boolean).join(", ").toLocaleLowerCase();
                if (t !== "") {
                    t = "format: " + t;
                }
                return t;
            }
            t.TreeView = function ({
                timeTravelButtonClassName: e,
                timeTravelPanelSliderClassName: t,
                timeTravelPanelButtonClassName: n,
                viewClassName: r,
                timeTravelPanelClassName: i,
                editor: a
            }) {
                let [u, d] = s.useState([]);
                let [f, h] = s.useState("");
                let [g, _] = s.useState(false);
                let p = s.useRef(0);
                let m = s.useRef(null);
                let y = s.useRef(null);
                let [v, x] = s.useState(false);
                let [C, N] = s.useState(false);
                let [T, E] = s.useState(false);
                let S = s.useRef(null);
                let w = function (e) {
                    let [t, n] = s.useState([]);
                    s.useEffect(() => {
                        let t = new Set();
                        for (let [r] of e._commands) {
                            t.add(e.registerCommand(r, e => {
                                n(t => {
                                    (t = [...t]).push({
                                        payload: e,
                                        type: r.type ? r.type : "UNKNOWN"
                                    });
                                    if (t.length > 10) {
                                        t.shift();
                                    }
                                    return t;
                                });
                                return false;
                            }, o.COMMAND_PRIORITY_HIGH));
                        }
                        return () => t.forEach(e => e());
                    }, [e]);
                    return s.useMemo(() => t, [t]);
                }(a);
                let D = s.useCallback(e => {
                    const t = c(a.getEditorState(), a._config, w, a._compositionKey, a._editable);
                    h(t);
                    if (!g) {
                        d(t => [...t, [Date.now(), e]]);
                    }
                }, [w, a, g]);
                s.useEffect(() => {
                    let e = a.getEditorState();
                    if (!T && e._nodeMap.size > 1000) {
                        h(c(e, a._config, w, a._compositionKey, a._editable));
                    }
                }, [w, a, T]);
                s.useEffect(() => l.mergeRegister(a.registerUpdateListener(({
                    editorState: e
                }) => {
                    if (!(!T && e._nodeMap.size > 1000 && (S.current = e, N(true), !T))) {
                        D(e);
                    }
                }), a.registerEditableListener(() => {
                    let e = c(a.getEditorState(), a._config, w, a._compositionKey, a._editable);
                    h(e);
                })), [w, a, C, D, T]);
                let O = u.length;
                s.useEffect(() => {
                    if (v) {
                        let e;
                        let t = () => {
                            const n = p.current;
                            if (n === O - 1) {
                                x(false);
                            } else {
                                e = setTimeout(() => {
                                    p.current++;
                                    const e = p.current;
                                    const n = y.current;
                                    if (n !== null) {
                                        n.value = String(e);
                                    }
                                    a.setEditorState(u[e][1]);
                                    t();
                                }, u[n + 1][0] - u[n][0]);
                            }
                        };
                        t();
                        return () => {
                            clearTimeout(e);
                        };
                    }
                }, [u, v, a, O]);
                s.useEffect(() => {
                    let e = m.current;
                    if (e !== null) {
                        e.__lexicalEditor = a;
                        return () => {
                            e.__lexicalEditor = null;
                        };
                    }
                }, [a]);
                return s.createElement("div", {
                    className: r
                }, !T && C ? s.createElement("div", {
                    style: {
                        padding: 20
                    }
                }, s.createElement("span", {
                    style: {
                        marginRight: 20
                    }
                }, "Detected large EditorState, this can impact debugging performance."), s.createElement("button", {
                    onClick: () => {
                        E(true);
                        let e = S.current;
                        if (e !== null) {
                            S.current = null;
                            D(e);
                        }
                    },
                    style: {
                        background: "transparent",
                        border: "1px solid white",
                        color: "white",
                        cursor: "pointer",
                        padding: 5
                    }
                }, "Show full tree")) : null, !g && (T || !C) && O > 2 && s.createElement("button", {
                    onClick: () => {
                        let e = a.getRootElement();
                        if (e !== null) {
                            e.contentEditable = "false";
                            p.current = O - 1;
                            _(true);
                        }
                    },
                    className: e,
                    type: "button"
                }, "Time Travel"), (T || !C) && s.createElement("pre", {
                    ref: m
                }, f), g && (T || !C) && s.createElement("div", {
                    className: i
                }, s.createElement("button", {
                    className: n,
                    onClick: () => {
                        if (p.current === O - 1) {
                            p.current = 1;
                        }
                        x(!v);
                    },
                    type: "button"
                }, v ? "Pause" : "Play"), s.createElement("input", {
                    className: t,
                    ref: y,
                    onChange: e => {
                        e = Number(e.target.value);
                        let t = u[e];
                        if (t) {
                            p.current = e;
                            a.setEditorState(t[1]);
                        }
                    },
                    type: "range",
                    min: "1",
                    max: O - 1
                }), s.createElement("button", {
                    className: n,
                    onClick: () => {
                        var e = a.getRootElement();
                        if (e !== null) {
                            e.contentEditable = "true";
                            e = u.length - 1;
                            a.setEditorState(u[e][1]);
                            let t = y.current;
                            if (t !== null) {
                                t.value = String(e);
                            }
                            _(false);
                            x(false);
                        }
                    },
                    type: "button"
                }, "Exit")));
            };
        },
        909722: (e, t, n) => {
            "use strict";

            const r = n(965836);
            e.exports = r;
        },
        965836: (e, t, n) => {
            "use strict";

            var r = n(84260);
            var i = n(667294);
            var l = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined ? i.useLayoutEffect : i.useEffect;

            function o (e) {
                return {
                    initialValueFn: () => e.isEditable(),
                    subscribe: t => e.registerEditableListener(t)
                };
            }
            e.exports = function () {
                return function (e) {
                    let [t] = r.useLexicalComposerContext();
                    let n = i.useMemo(() => e(t), [t, e]);
                    let o = i.useRef(n.initialValueFn());
                    let [s, a] = i.useState(o.current);
                    l(() => {
                        let {
                            initialValueFn: e,
                            subscribe: t
                        } = n;
                        let r = e();
                        if (o.current !== r) {
                            o.current = r;
                            a(r);
                        }
                        return t(e => {
                            o.current = e;
                            a(e);
                        });
                    }, [n, e]);
                    return s;
                }(o);
            };
        },
        389408: (e, t, n) => {
            "use strict";

            const r = n(649235);
            e.exports = r;
        },
        649235: (e, t, n) => {
            "use strict";

            var r = n(932998);
            let i = new Map();

            function l (e) {
                for (; e != null;) {
                    if (e.nodeType === Node.TEXT_NODE) {
                        return e;
                    }
                    e = e.firstChild;
                }
                return null;
            }

            function o (e) {
                let t = e.parentNode;
                if (t == null) {
                    throw Error("Should never happen");
                }
                return [t, Array.from(t.childNodes).indexOf(e)];
            }

            function s (e) {
                let t = {};
                e = e.split(";");
                for (let n of e) {
                    if (n !== "") {
                        let [e, r] = n.split(/:([^]+)/);
                        t[e.trim()] = r.trim();
                    }
                }
                return t;
            }

            function a (e) {
                let t = i.get(e);
                if (t === undefined) {
                    t = s(e);
                    i.set(e, t);
                }
                return t;
            }

            function u (e, t) {
                var n = a("getStyle" in e ? e.getStyle() : e.style);
                n = function (e) {
                    let t = "";
                    for (let n in e) {
                        if (n) {
                            t += `${n}: ${e[n]};`;
                        }
                    }
                    return t;
                }(t = Object.entries(t).reduce((e, [t, n]) => {
                    if (n === null) {
                        delete e[t];
                    } else {
                        e[t] = n;
                    }
                    return e;
                }, {
                    ...n
                }));
                e.setStyle(n);
                i.set(n, t);
            }

            function d (e) {
                for (; e !== null && !r.$isRootOrShadowRoot(e);) {
                    let t = e.getLatest();
                    let n = e.getParent();
                    if (t.getChildrenSize() === 0) {
                        e.remove(true);
                    }
                    e = n;
                }
            }

            function c (e, t, n, i, l = null) {
                if (t.length !== 0) {
                    var o = t[0];
                    var s = new Map();
                    var a = [];
                    if ((o = r.$isElementNode(o) ? o : o.getParentOrThrow()).isInline()) {
                        o = o.getParentOrThrow();
                    }
                    for (var u = false; o !== null;) {
                        var c = o.getPreviousSibling();
                        if (c !== null) {
                            o = c;
                            u = true;
                            break;
                        }
                        o = o.getParentOrThrow();
                        if (r.$isRootOrShadowRoot(o)) {
                            break;
                        }
                    }
                    c = new Set();
                    for (var f = 0; f < n; f++) {
                        var h = t[f];
                        if (r.$isElementNode(h) && h.getChildrenSize() === 0) {
                            c.add(h.getKey());
                        }
                    }
                    var g = new Set();
                    for (f = 0; f < n; f++) {
                        var _ = (h = t[f]).getParent();
                        if (_ !== null && _.isInline()) {
                            _ = _.getParent();
                        }
                        if (_ !== null && r.$isLeafNode(h) && !g.has(h.getKey())) {
                            h = _.getKey();
                            if (s.get(h) === undefined) {
                                let e = i();
                                e.setFormat(_.getFormatType());
                                e.setIndent(_.getIndent());
                                a.push(e);
                                s.set(h, e);
                                _.getChildren().forEach(t => {
                                    e.append(t);
                                    g.add(t.getKey());
                                    if (r.$isElementNode(t)) {
                                        t.getChildrenKeys().forEach(e => g.add(e));
                                    }
                                });
                                d(_);
                            }
                        } else if (c.has(h.getKey())) {
                            (_ = i()).setFormat(h.getFormatType());
                            _.setIndent(h.getIndent());
                            a.push(_);
                            h.remove(true);
                        }
                    }
                    if (l !== null) {
                        for (t = 0; t < a.length; t++) {
                            l.append(a[t]);
                        }
                    }
                    t = null;
                    if (r.$isRootOrShadowRoot(o)) {
                        if (u) {
                            if (l !== null) {
                                o.insertAfter(l);
                            } else {
                                for (l = a.length - 1; l >= 0; l--) {
                                    o.insertAfter(a[l]);
                                }
                            }
                        } else {
                            u = o.getFirstChild();
                            if (r.$isElementNode(u)) {
                                o = u;
                            }
                            if (u === null) {
                                if (l) {
                                    o.append(l);
                                } else {
                                    for (l = 0; l < a.length; l++) {
                                        u = a[l];
                                        o.append(u);
                                        t = u;
                                    }
                                }
                            } else if (l !== null) {
                                u.insertBefore(l);
                            } else {
                                for (o = 0; o < a.length; o++) {
                                    l = a[o];
                                    u.insertBefore(l);
                                    t = l;
                                }
                            }
                        }
                    } else if (l) {
                        o.insertAfter(l);
                    } else {
                        for (l = a.length - 1; l >= 0; l--) {
                            u = a[l];
                            o.insertAfter(u);
                            t = u;
                        }
                    }
                    a = r.$getPreviousSelection();
                    if (r.$isRangeSelection(a) && a.anchor.getNode().isAttached() && a.focus.getNode().isAttached()) {
                        r.$setSelection(a.clone());
                    } else if (t !== null) {
                        t.selectEnd();
                    } else {
                        e.dirty = true;
                    }
                }
            }

            function f (e, t, n, r) {
                e.modify(t ? "extend" : "move", n, r);
            }

            function h (e) {
                e = e.anchor.getNode();
                return (r.$isRootNode(e) ? e : e.getParentOrThrow()).getDirection() === "rtl";
            }
            t.$addNodeStyle = function (e) {
                let t = s(e = e.getStyle());
                i.set(e, t);
            };
            t.$cloneWithProperties = function (e) {
                let t = (e = e.getLatest()).constructor.clone(e);
                t.__parent = e.__parent;
                t.__next = e.__next;
                t.__prev = e.__prev;
                if (r.$isElementNode(e) && r.$isElementNode(t)) {
                    t.__first = e.__first;
                    t.__last = e.__last;
                    t.__size = e.__size;
                    t.__format = e.__format;
                    t.__indent = e.__indent;
                    t.__dir = e.__dir;
                    return t;
                } else {
                    if (r.$isTextNode(e) && r.$isTextNode(t)) {
                        t.__format = e.__format;
                        t.__style = e.__style;
                        t.__mode = e.__mode;
                        t.__detail = e.__detail;
                    }
                    return t;
                }
            };
            t.$getSelectionStyleValueForProperty = function (e, t, n = "") {
                let i = null;
                let l = e.getNodes();
                var o = e.anchor;
                var s = e.focus;
                var u = e.isBackward();
                let d = u ? s.offset : o.offset;
                o = u ? s.getNode() : o.getNode();
                if (e.style !== "" && (e = a(e.style)) !== null && t in e) {
                    return e[t];
                }
                for (e = 0; e < l.length; e++) {
                    var c = l[e];
                    if ((e === 0 || d !== 0 || !c.is(o)) && r.$isTextNode(c)) {
                        s = t;
                        u = n;
                        s = (c = a(c = c.getStyle())) !== null && c[s] || u;
                        if (i === null) {
                            i = s;
                        } else if (i !== s) {
                            i = "";
                            break;
                        }
                    }
                }
                if (i === null) {
                    return n;
                } else {
                    return i;
                }
            };
            t.$isAtNodeEnd = function (e) {
                if (e.type === "text") {
                    return e.offset === e.getNode().getTextContentSize();
                } else {
                    return e.offset === e.getNode().getChildrenSize();
                }
            };
            t.$isParentElementRTL = h;
            t.$moveCaretSelection = f;
            t.$moveCharacter = function (e, t, n) {
                let r = h(e);
                f(e, t, n ? !r : r, "character");
            };
            t.$patchStyleText = function (e, t) {
                var n = e.getNodes();
                let i = n.length - 1;
                let l = n[0];
                let o = n[i];
                if (e.isCollapsed()) {
                    u(e, t);
                } else {
                    var s = e.anchor;
                    var a = e.focus;
                    var d = l.getTextContent().length;
                    var c = a.offset;
                    var f = s.offset;
                    var h = s.isBefore(a);
                    var g = h ? f : c;
                    e = h ? c : f;
                    var _ = h ? s.type : a.type;
                    var p = h ? a.type : s.type;
                    s = h ? a.key : s.key;
                    if (r.$isTextNode(l) && g === d) {
                        a = l.getNextSibling();
                        if (r.$isTextNode(a)) {
                            g = f = 0;
                            l = a;
                        }
                    }
                    if (n.length === 1) {
                        if (r.$isTextNode(l)) {
                            if ((g = _ === "element" ? 0 : f > c ? c : f) !== (e = p === "element" ? d : f > c ? f : c)) {
                                if (g === 0 && e === d) {
                                    u(l, t);
                                    l.select(g, e);
                                } else {
                                    n = l.splitText(g, e);
                                    u(n = g === 0 ? n[0] : n[1], t);
                                    n.select(0, e - g);
                                }
                            }
                        }
                    } else {
                        if (r.$isTextNode(l) && g < l.getTextContentSize()) {
                            if (g !== 0) {
                                l = l.splitText(g)[1];
                            }
                            u(l, t);
                        }
                        if (r.$isTextNode(o)) {
                            g = o.getTextContent().length;
                            if (o.__key !== s && e !== 0) {
                                e = g;
                            }
                            if (e !== g) {
                                [o] = o.splitText(e);
                            }
                            if (e !== 0) {
                                u(o, t);
                            }
                        }
                        e = 1;
                        if (r.$isTextNode(l) && g < l.getTextContentSize()) {
                            if (g !== 0) {
                                l = l.splitText(g)[1];
                            }
                            u(l, t);
                        }
                        if (r.$isTextNode(o)) {
                            g = o.getTextContent().length;
                            if (o.__key !== s && e !== 0) {
                                e = g;
                            }
                            if (e !== g) {
                                [o] = o.splitText(e);
                            }
                            if (e !== 0) {
                                u(o, t);
                            }
                        }
                        e = 1;
                        for (; e < i; e++) {
                            d = (g = n[e]).getKey();
                            if (r.$isTextNode(g) && d !== l.getKey() && d !== o.getKey() && !g.isToken()) {
                                u(g, t);
                            }
                        }
                    }
                }
            };
            t.$selectAll = function (e) {
                let t = e.anchor;
                e = e.focus;
                var n = t.getNode().getTopLevelElementOrThrow().getParentOrThrow();
                let i = n.getFirstDescendant();
                n = n.getLastDescendant();
                let l = "element";
                let o = "element";
                let s = 0;
                if (r.$isTextNode(i)) {
                    l = "text";
                } else if (!(r.$isElementNode(i) || i === null)) {
                    i = i.getParentOrThrow();
                }
                if (r.$isTextNode(n)) {
                    o = "text";
                    s = n.getTextContentSize();
                } else if (!(r.$isElementNode(n) || n === null)) {
                    n = n.getParentOrThrow();
                }
                if (i && n) {
                    t.set(i.getKey(), 0, l);
                    e.set(n.getKey(), s, o);
                }
            };
            t.$setBlocksType = function (e, t) {
                if (e.anchor.key === "root") {
                    t = t();
                    var n = r.$getRoot();
                    if (e = n.getFirstChild()) {
                        e.replace(t, true);
                    } else {
                        n.append(t);
                    }
                } else {
                    n = e.getNodes();
                    e = e.anchor.getNode().getParentOrThrow();
                    if (n.indexOf(e) === -1) {
                        n.push(e);
                    }
                    if (e.isInline()) {
                        e = e.getParentOrThrow();
                        if (n.indexOf(e) === -1) {
                            n.push(e);
                        }
                    }
                    e = 0;
                    n = e.getNodes();
                    e = e.anchor.getNode().getParentOrThrow();
                    if (n.indexOf(e) === -1) {
                        n.push(e);
                    }
                    if (e.isInline()) {
                        e = e.getParentOrThrow();
                        if (n.indexOf(e) === -1) {
                            n.push(e);
                        }
                    }
                    e = 0;
                    for (; e < n.length; e++) {
                        let o = n[e];
                        var i = o;
                        if (!r.$isElementNode(i) || r.$isRootOrShadowRoot(i)) {
                            i = false;
                        } else {
                            var l = i.getFirstChild();
                            l = l === null || r.$isTextNode(l) || l.isInline();
                            i = !i.isInline() && i.canBeEmpty() !== false && l;
                        }
                        if (i) {
                            (i = t()).setFormat(o.getFormatType());
                            i.setIndent(o.getIndent());
                            o.replace(i, true);
                        }
                    }
                }
            };
            t.$shouldOverrideDefaultCharacterSelection = function (e, t) {
                e = r.$getAdjacentNode(e.focus, t);
                return r.$isDecoratorNode(e) && !e.isIsolated() || r.$isElementNode(e) && !e.isInline() && !e.canBeEmpty();
            };
            t.$sliceSelectedTextNodeContent = function (e, t) {
                if (t.isSelected() && !t.isSegmented() && !t.isToken() && (r.$isRangeSelection(e) || r.DEPRECATED_$isGridSelection(e))) {
                    var n = e.anchor.getNode();
                    var i = e.focus.getNode();
                    var l = t.is(n);
                    var o = t.is(i);
                    if (l || o) {
                        l = e.isBackward();
                        let r;
                        let [s, a] = e.getCharacterOffsets();
                        e = n.is(i);
                        o = t.is(l ? i : n);
                        i = t.is(l ? n : i);
                        n = 0;
                        if (e) {
                            n = s > a ? a : s;
                            r = s > a ? s : a;
                        } else if (o) {
                            n = l ? a : s;
                            r = undefined;
                        } else if (i) {
                            n = 0;
                            r = l = l ? s : a;
                        }
                        t.__text = t.__text.slice(n, r);
                    }
                }
                return t;
            };
            t.$wrapNodes = function (e, t, n = null) {
                var i = e.getNodes();
                let l = i.length;
                var o = e.anchor;
                if (l === 0 || l === 1 && o.type === "element" && o.getNode().getChildrenSize() === 0) {
                    i = (e = o.type === "text" ? o.getNode().getParentOrThrow() : o.getNode()).getChildren();
                    let r = t();
                    r.setFormat(e.getFormatType());
                    r.setIndent(e.getIndent());
                    i.forEach(e => r.append(e));
                    if (n) {
                        r = n.append(r);
                    }
                    e.replace(r);
                } else {
                    o = null;
                    var s = [];
                    for (let a = 0; a < l; a++) {
                        let l = i[a];
                        if (r.$isRootOrShadowRoot(l)) {
                            c(e, s, s.length, t, n);
                            s = [];
                            o = l;
                        } else if (o === null || o !== null && r.$hasAncestor(l, o)) {
                            s.push(l);
                        } else {
                            c(e, s, s.length, t, n);
                            s = [l];
                        }
                    }
                    c(e, s, s.length, t, n);
                }
            };
            t.createDOMRange = function (e, t, n, i, s) {
                let a = t.getKey();
                let u = i.getKey();
                let d = document.createRange();
                let c = e.getElementByKey(a);
                e = e.getElementByKey(u);
                if (r.$isTextNode(t)) {
                    c = l(c);
                }
                if (r.$isTextNode(i)) {
                    e = l(e);
                }
                if (t === undefined || i === undefined || c === null || e === null) {
                    return null;
                }
                if (c.nodeName === "BR") {
                    [c, n] = o(c);
                }
                if (e.nodeName === "BR") {
                    [e, s] = o(e);
                }
                t = c.firstChild;
                if (c === e && t != null && t.nodeName === "BR" && n === 0 && s === 0) {
                    s = 1;
                }
                try {
                    d.setStart(c, n);
                    d.setEnd(e, s);
                } catch (e) {
                    return null;
                }
                if (!(!d.collapsed || n === s && a === u)) {
                    d.setStart(e, s);
                    d.setEnd(c, n);
                }
                return d;
            };
            t.createRectsFromDOMRange = function (e, t) {
                var n = e.getRootElement();
                if (n === null) {
                    return [];
                }
                e = n.getBoundingClientRect();
                n = getComputedStyle(n);
                n = parseFloat(n.paddingLeft) + parseFloat(n.paddingRight);
                let r;
                let i = (t = Array.from(t.getClientRects())).length;
                for (let l = 0; l < i; l++) {
                    let o = t[l];
                    let s = o.width + n === e.width;
                    if (r && r.top === o.top && r.left === o.left && r.width === o.width && r.height === o.height || s) {
                        t.splice(l--, 1);
                        i--;
                    } else {
                        r = o;
                    }
                }
                return t;
            };
            t.getStyleObjectFromCSS = a;
            t.trimTextContentFromAnchor = function (e, t, n) {
                let i = t.getNode();
                if (r.$isElementNode(i)) {
                    var l = i.getDescendantByIndex(t.offset);
                    if (l !== null) {
                        i = l;
                    }
                }
                for (; n > 0 && i !== null;) {
                    var o = i.getPreviousSibling();
                    var s = 0;
                    if (o === null) {
                        for (var a = (l = i.getParentOrThrow()).getPreviousSibling(); a === null;) {
                            if ((l = l.getParent()) === null) {
                                o = null;
                                break;
                            }
                            a = l.getPreviousSibling();
                        }
                        if (l !== null) {
                            s = l.isInline() ? 0 : 2;
                            o = r.$isElementNode(a) ? a.getLastDescendant() : a;
                        }
                    }
                    if ((a = i.getTextContent()) === "" && r.$isElementNode(i) && !i.isInline()) {
                        a = "\n\n";
                    }
                    l = i.getTextContentSize();
                    if (!r.$isTextNode(i) || n >= l) {
                        a = i.getParent();
                        i.remove();
                        if (!(a == null || a.getChildrenSize() !== 0 || r.$isRootNode(a))) {
                            a.remove();
                        }
                        n -= l + s;
                        i = o;
                    } else {
                        let u = i.getKey();
                        s = e.getEditorState().read(() => {
                            const e = r.$getNodeByKey(u);
                            if (r.$isTextNode(e) && e.isSimpleText()) {
                                return e.getTextContent();
                            } else {
                                return null;
                            }
                        });
                        o = l - n;
                        let d = a.slice(0, o);
                        if (s !== null && s !== a) {
                            n = r.$getPreviousSelection();
                            l = i;
                            if (i.isSimpleText()) {
                                i.setTextContent(s);
                            } else {
                                l = r.$createTextNode(s);
                                i.replace(l);
                            }
                            if (r.$isRangeSelection(n) && n.isCollapsed()) {
                                n = n.anchor.offset;
                                l.select(n, n);
                            }
                        } else if (i.isSimpleText()) {
                            s = t.key === u;
                            if ((a = t.offset) < n) {
                                a = l;
                            }
                            n = s ? a - n : 0;
                            l = s ? a : o;
                            if (s && n === 0) {
                                [n] = i.splitText(n, l);
                                n.remove();
                            } else {
                                [, n] = i.splitText(n, l);
                                n.remove();
                            }
                        } else {
                            n = r.$createTextNode(d);
                            i.replace(n);
                        }
                        n = 0;
                    }
                }
            };
        },
        302977: (e, t, n) => {
            "use strict";

            const r = n(328263);
            e.exports = r;
        },
        328263: (e, t, n) => {
            "use strict";

            var r = n(932998);

            function i (e, t = true) {
                return !e && (e = l(), t && (e = e.trim()), e === "");
            }

            function l () {
                return r.$getRoot().getTextContent();
            }

            function o (e) {
                if (!i(e, false)) {
                    return false;
                }
                let t = (e = r.$getRoot().getChildren()).length;
                if (t > 1) {
                    return false;
                }
                for (let i = 0; i < t; i++) {
                    var n = e[i];
                    if (r.$isDecoratorNode(n)) {
                        return false;
                    }
                    if (r.$isElementNode(n)) {
                        if (!r.$isParagraphNode(n) || n.__indent !== 0) {
                            return false;
                        }
                        let e = (n = n.getChildren()).length;
                        for (let t = 0; t < e; t++) {
                            if (!r.$isTextNode(n[i])) {
                                return false;
                            }
                        }
                    }
                }
                return true;
            }
            t.$canShowPlaceholder = o;
            t.$canShowPlaceholderCurry = function (e) {
                return () => o(e);
            };
            t.$findTextIntersectionFromCharacters = function (e, t) {
                var n = e.getFirstChild();
                e = 0;
                e: for (; n !== null;) {
                    if (r.$isElementNode(n)) {
                        var i = n.getFirstChild();
                        if (i !== null) {
                            n = i;
                            continue;
                        }
                    } else if (r.$isTextNode(n)) {
                        if (e + (i = n.getTextContentSize()) > t) {
                            return {
                                node: n,
                                offset: t - e
                            };
                        }
                        e += i;
                    }
                    if ((i = n.getNextSibling()) === null) {
                        for (n = n.getParent(); n !== null;) {
                            if ((i = n.getNextSibling()) !== null) {
                                n = i;
                                continue e;
                            }
                            n = n.getParent();
                        }
                        break;
                    }
                    n = i;
                }
                return null;
            };
            t.$isRootTextContentEmpty = i;
            t.$isRootTextContentEmptyCurry = function (e, t) {
                return () => i(e, t);
            };
            t.$rootTextContent = l;
            t.registerLexicalTextEntity = function (e, t, n, i) {
                let l = e => {
                    const t = r.$createTextNode(e.getTextContent());
                    t.setFormat(e.getFormat());
                    e.replace(t);
                };
                return [e.registerNodeTransform(r.TextNode, e => {
                    if (e.isSimpleText()) {
                        var o = e.getPreviousSibling();
                        var s = e.getTextContent();
                        var a = e;
                        if (r.$isTextNode(o)) {
                            var u = o.getTextContent();
                            var d = t(u + s);
                            if (o instanceof n) {
                                if (d === null || o.getLatest().__mode !== 0) {
                                    return void l(o);
                                }
                                if ((d = d.end - u.length) > 0) {
                                    a = u + (a = s.slice(0, d));
                                    o.select();
                                    o.setTextContent(a);
                                    return void(d === s.length ? e.remove() : (o = s.slice(d), e.setTextContent(o)));
                                }
                            } else if (d === null || d.start < u.length) {
                                return;
                            }
                        }
                        for (;;) {
                            s = d = (e = t(s)) === null ? "" : s.slice(e.end);
                            if (d === "") {
                                u = a.getNextSibling();
                                if (r.$isTextNode(u)) {
                                    d = a.getTextContent() + u.getTextContent();
                                    if ((d = t(d)) === null) {
                                        if (u instanceof n) {
                                            l(u);
                                        } else {
                                            u.markDirty();
                                        }
                                        break;
                                    }
                                    if (d.start !== 0) {
                                        break;
                                    }
                                }
                            } else if ((u = t(d)) !== null && u.start === 0) {
                                break;
                            }
                            if (e === null) {
                                break;
                            }
                            if (e.start === 0 && r.$isTextNode(o) && o.isTextEntity()) {
                                continue;
                            }
                            let c;
                            if (e.start === 0) {
                                [c, a] = a.splitText(e.end);
                            } else {
                                [, c, a] = a.splitText(e.start, e.end);
                            }
                            e = i(c);
                            c.replace(e);
                            if (a == null) {
                                break;
                            }
                        }
                    }
                }), e = e.registerNodeTransform(n, e => {
                    var i = e.getTextContent();
                    const o = t(i);
                    if (o === null || o.start !== 0) {
                        l(e);
                    } else if (i.length > o.end) {
                        e.splitText(o.end);
                    } else {
                        i = e.getPreviousSibling();
                        if (r.$isTextNode(i) && i.isTextEntity()) {
                            l(i);
                            l(e);
                        }
                        i = e.getNextSibling();
                        if (r.$isTextNode(i) && i.isTextEntity()) {
                            l(i);
                            if (e instanceof n) {
                                l(e);
                            }
                        }
                    }
                })];
            };
        },
        376969: (e, t, n) => {
            "use strict";

            const r = n(487502);
            e.exports = r;
        },
        487502: (e, t, n) => {
            "use strict";

            var r = n(389408);
            var i = n(932998);

            function l (e, t) {
                for (let n of t) {
                    if (e.type.startsWith(n)) {
                        return true;
                    }
                }
                return false;
            }

            function o (e, t) {
                for (; e !== i.$getRoot() && e != null;) {
                    if (t(e)) {
                        return e;
                    }
                    e = e.getParent();
                }
                return null;
            }

            function s (e) {
                return e.nodeType === 1;
            }
            t.$splitNode = i.$splitNode;
            t.$dfs = function (e, t) {
                let n = [];
                e = (e || i.$getRoot()).getLatest();
                t = t || (i.$isElementNode(e) ? e.getLastDescendant() : e);
                for (var r = e, l = 0;
                    (r = r.getParent()) !== null;) {
                    l++;
                }
                for (r = l; e !== null && !e.is(t);) {
                    n.push({
                        depth: r,
                        node: e
                    });
                    if (i.$isElementNode(e) && e.getChildrenSize() > 0) {
                        e = e.getFirstChild();
                        r++;
                    } else {
                        for (l = null; l === null && e !== null;) {
                            if ((l = e.getNextSibling()) === null) {
                                e = e.getParent();
                                r--;
                            } else {
                                e = l;
                            }
                        }
                    }
                }
                if (e !== null && e.is(t)) {
                    n.push({
                        depth: r,
                        node: e
                    });
                }
                return n;
            };
            t.$findMatchingParent = o;
            t.$getNearestBlockElementAncestorOrThrow = function (e) {
                e = o(e, e => i.$isElementNode(e) && !e.isInline());
                if (!i.$isElementNode(e)) {
                    throw Error("Minified Lexical error #4; visit https://lexical.dev/docs/error?code=4 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");
                }
                return e;
            };
            t.$getNearestNodeOfType = function (e, t) {
                for (; e != null;) {
                    if (e instanceof t) {
                        return e;
                    }
                    e = e.getParent();
                }
                return null;
            };
            t.$insertNodeToNearestRoot = function (e) {
                var t = i.$getSelection();
                if (i.$isRangeSelection(t)) {
                    var {
                        focus: n
                    } = t;
                    t = n.getNode();
                    n = n.offset;
                    if (i.$isRootOrShadowRoot(t)) {
                        if ((n = t.getChildAtIndex(n)) == null) {
                            t.append(e);
                        } else {
                            n.insertBefore(e);
                        }
                        e.selectNext();
                    } else {
                        let r;
                        let l;
                        if (i.$isTextNode(t)) {
                            r = t.getParentOrThrow();
                            l = t.getIndexWithinParent();
                            if (n > 0) {
                                l += 1;
                                t.splitText(n);
                            }
                        } else {
                            r = t;
                            l = n;
                        }
                        [, t] = i.$splitNode(r, l);
                        t.insertBefore(e);
                        t.selectStart();
                    }
                } else {
                    if (i.$isNodeSelection(t) || i.DEPRECATED_$isGridSelection(t)) {
                        (t = t.getNodes())[t.length - 1].getTopLevelElementOrThrow().insertAfter(e);
                    } else {
                        i.$getRoot().append(e);
                    }
                    t = i.$createParagraphNode();
                    e.insertAfter(t);
                    t.select();
                }
                return e.getLatest();
            };
            t.$restoreEditorState = function (e, t) {
                let n = new Map();
                let l = e._pendingEditorState;
                for (let [e, l] of t._nodeMap) {
                    let t = r.$cloneWithProperties(l);
                    if (i.$isTextNode(t)) {
                        t.__text = l.__text;
                    }
                    n.set(e, t);
                }
                if (l) {
                    l._nodeMap = n;
                }
                e._dirtyType = 2;
                e = t._selection;
                i.$setSelection(e === null ? null : e.clone());
            };
            t.$wrapNodeInElement = function (e, t) {
                t = t();
                e.replace(t);
                t.append(e);
                return t;
            };
            t.addClassNamesToElement = function (e, ...t) {
                t.forEach(t => {
                    if (typeof t == "string") {
                        t = t.split(" ").filter(e => e !== "");
                        e.classList.add(...t);
                    }
                });
            };
            t.isHTMLAnchorElement = function (e) {
                return s(e) && e.tagName === "A";
            };
            t.isHTMLElement = s;
            t.isMimeType = l;
            t.mediaFileReader = function (e, t) {
                let n = e[Symbol.iterator]();
                return new Promise((e, r) => {
                    let i = [];
                    let o = () => {
                        const {
                            done: s,
                            value: a
                        } = n.next();
                        if (s) {
                            return e(i);
                        }
                        const u = new FileReader();
                        u.addEventListener("error", r);
                        u.addEventListener("load", () => {
                            const e = u.result;
                            if (typeof e == "string") {
                                i.push({
                                    file: a,
                                    result: e
                                });
                            }
                            o();
                        });
                        if (l(a, t)) {
                            u.readAsDataURL(a);
                        } else {
                            o();
                        }
                    };
                    o();
                });
            };
            t.mergeRegister = function (...e) {
                return () => {
                    e.forEach(e => e());
                };
            };
            t.registerNestedElementResolver = function (e, t, n, r) {
                return e.registerNodeTransform(t, e => {
                    e: {
                        for (var i = e.getChildren(), l = 0; l < i.length; l++) {
                            if (i[l] instanceof t) {
                                i = null;
                                break e;
                            }
                        }
                        for (i = e; i !== null;) {
                            l = i;
                            if ((i = i.getParent()) instanceof t) {
                                i = {
                                    child: l,
                                    parent: i
                                };
                                break e;
                            }
                        }
                        i = null;
                    }
                    if (i !== null) {
                        const {
                            child: t,
                            parent: o
                        } = i;
                        if (t.is(e)) {
                            r(o, e);
                            i = (e = t.getNextSiblings()).length;
                            o.insertAfter(t);
                            if (i !== 0) {
                                l = n(o);
                                t.insertAfter(l);
                                for (let t = 0; t < i; t++) {
                                    l.append(e[t]);
                                }
                            }
                            if (!(o.canBeEmpty() || o.getChildrenSize() !== 0)) {
                                o.remove();
                            }
                        }
                    }
                });
            };
            t.removeClassNamesFromElement = function (e, ...t) {
                t.forEach(t => {
                    if (typeof t == "string") {
                        e.classList.remove(...t.split(" "));
                    }
                });
            };
        },
        932998: (e, t, n) => {
            "use strict";

            const r = n(734556);
            e.exports = r;
        },
        734556: (e, t) => {
            "use strict";

            let n = {};
            let r = {};
            let i = {};
            let l = {};
            let o = {};
            let s = {};
            let a = {};
            let u = {};
            let d = {};
            let c = {};
            let f = {};
            let h = {};
            let g = {};
            let _ = {};
            let p = {};
            let m = {};
            let y = {};
            let v = {};
            let x = {};
            let C = {};
            let N = {};
            let T = {};
            let E = {};
            let S = {};
            let w = {};
            let D = {};
            let O = {};
            let k = {};
            let b = {};
            let M = {};
            let R = {};
            let A = {};
            let $ = {};
            let P = {};
            let I = {};

            function L (e) {
                throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?code=${e} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
            }
            let F = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
            let B = F && "documentMode" in document ? document.documentMode : null;
            let W = F && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
            let z = F && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
            let K = !(!F || !("InputEvent" in window) || B) && "getTargetRanges" in new window.InputEvent("input");
            let j = F && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
            let Y = F && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
            let G = F && /^(?=.*Chrome).*/i.test(navigator.userAgent);
            let H = F && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !G;
            let U = j || Y || H ? " " : "​";
            let J = z ? " " : U;
            let V = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]/;
            let X = /^[^\u0591-\u07ff\ufb1d-\ufdfd\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/;
            let q = {
                bold: 1,
                code: 16,
                highlight: 128,
                italic: 2,
                strikethrough: 4,
                subscript: 32,
                superscript: 64,
                underline: 8
            };
            let Q = {
                directionless: 1,
                unmergeable: 2
            };
            let Z = {
                center: 2,
                end: 6,
                justify: 4,
                left: 1,
                right: 3,
                start: 5
            };
            let ee = {
                2: "center",
                6: "end",
                4: "justify",
                1: "left",
                3: "right",
                5: "start"
            };
            let te = {
                normal: 0,
                segmented: 2,
                token: 1
            };
            let ne = {
                0: "normal",
                2: "segmented",
                1: "token"
            };
            let re = false;
            let ie = 0;

            function le (e) {
                ie = e.timeStamp;
            }

            function oe (e, t, n) {
                return t.__lexicalLineBreak === e || e[`__lexicalKey_${n._key}`] !== undefined;
            }

            function se (e, t, n) {
                re = true;
                let r = performance.now() - ie > 100;
                try {
                    rr(e, () => {
                        let i = Rn() || function (e) {
                            return e.getEditorState().read(() => {
                                let e = Rn();
                                if (e !== null) {
                                    return e.clone();
                                } else {
                                    return null;
                                }
                            });
                        }(e);
                        var l = new Map();
                        var o = e.getRootElement();
                        var s = e._editorState;
                        var a = e._blockCursorElement;
                        let u = false;
                        let d = "";
                        for (var c = 0; c < t.length; c++) {
                            var f = t[c];
                            var h = f.type;
                            var g = f.target;
                            var _ = we(g, s);
                            if (!(_ === null && g !== o || lr(_))) {
                                if (h === "characterData") {
                                    if (f = r && Mr(_)) {
                                        e: {
                                            h = g;
                                            var p = _;
                                            if (pn(f = i)) {
                                                var m = f.anchor.getNode();
                                                if (m.is(p) && f.format !== m.getFormat()) {
                                                    f = false;
                                                    break e;
                                                }
                                            }
                                            f = h.nodeType === 3 && p.isAttached();
                                        }
                                    }
                                    if (f) {
                                        h = f = null;
                                        if ((p = et(e._window)) !== null && p.anchorNode === g) {
                                            f = p.anchorOffset;
                                            h = p.focusOffset;
                                        }
                                        if ((g = g.nodeValue) !== null) {
                                            Ie(_, g, f, h, false);
                                        }
                                    }
                                } else if (h === "childList") {
                                    u = true;
                                    h = f.addedNodes;
                                    p = 0;
                                    for (; p < h.length; p++) {
                                        var y = Se(m = h[p]);
                                        var v = m.parentNode;
                                        if (!(v == null || m === a || y !== null || m.nodeName === "BR" && oe(m, v, e))) {
                                            if (z && (y = m.innerText || m.nodeValue)) {
                                                d += y;
                                            }
                                            v.removeChild(m);
                                        }
                                    }
                                    if ((h = (f = f.removedNodes).length) > 0) {
                                        p = 0;
                                        m = 0;
                                        for (; m < h; m++) {
                                            if ((v = f[m]).nodeName === "BR" && oe(v, g, e) || a === v) {
                                                g.appendChild(v);
                                                p++;
                                            }
                                        }
                                        if (h !== p) {
                                            if (g === o) {
                                                _ = s._nodeMap.get("root");
                                            }
                                            l.set(g, _);
                                        }
                                    }
                                }
                            }
                        }
                        if (l.size > 0) {
                            for (let [t, n] of l) {
                                if (sr(n)) {
                                    l = n.getChildrenKeys();
                                    o = t.firstChild;
                                    s = 0;
                                    l = n.getChildrenKeys();
                                    o = t.firstChild;
                                    s = 0;
                                    for (; s < l.length; s++) {
                                        if ((a = e.getElementByKey(l[s])) !== null) {
                                            if (o == null) {
                                                t.appendChild(a);
                                                o = a;
                                            } else if (o !== a) {
                                                t.replaceChild(a, o);
                                            }
                                            o = o.nextSibling;
                                        }
                                    }
                                } else if (Mr(n)) {
                                    n.markDirty();
                                }
                            }
                        }
                        if ((l = n.takeRecords()).length > 0) {
                            for (o = 0; o < l.length; o++) {
                                s = (a = l[o]).addedNodes;
                                a = a.target;
                                c = 0;
                                s = (a = l[o]).addedNodes;
                                a = a.target;
                                c = 0;
                                for (; c < s.length; c++) {
                                    if (!((g = (_ = s[c]).parentNode) == null || _.nodeName !== "BR" || oe(_, a, e))) {
                                        g.removeChild(_);
                                    }
                                }
                            }
                            n.takeRecords();
                        }
                        if (i !== null) {
                            if (u) {
                                i.dirty = true;
                                be(i);
                            }
                            if (z && ze(e)) {
                                i.insertRawText(d);
                            }
                        }
                    });
                } finally {
                    re = false;
                }
            }

            function ae (e) {
                let t = e._observer;
                if (t !== null) {
                    se(e, t.takeRecords(), t);
                }
            }

            function ue (e) {
                if (ie === 0) {
                    He(e).addEventListener("textInput", le, true);
                }
                e._observer = new MutationObserver((t, n) => {
                    se(e, t, n);
                });
            }
            let de = 1;
            let ce = typeof queueMicrotask == "function" ? queueMicrotask : e => {
                Promise.resolve().then(e);
            };

            function fe (e) {
                let t = document.activeElement;
                if (t === null) {
                    return false;
                }
                let n = t.nodeName;
                return lr(we(e)) && (n === "INPUT" || n === "TEXTAREA" || t.contentEditable === "true" && t.__lexicalEditor == null);
            }

            function he (e, t, n) {
                let r = e.getRootElement();
                try {
                    return r !== null && r.contains(t) && r.contains(n) && t !== null && !fe(t) && ge(t) === e;
                } catch (e) {
                    return false;
                }
            }

            function ge (e) {
                for (; e != null;) {
                    let t = e.__lexicalEditor;
                    if (t != null) {
                        return t;
                    }
                    e = Ye(e);
                }
                return null;
            }

            function _e (e) {
                return e.isToken() || e.isSegmented();
            }

            function pe (e) {
                for (; e != null;) {
                    if (e.nodeType === 3) {
                        return e;
                    }
                    e = e.firstChild;
                }
                return null;
            }

            function me (e, t, n) {
                if (e & (t = q[t]) && (n === null || (n & t) == 0)) {
                    return e ^ t;
                } else if (n === null || n & t) {
                    return e | t;
                } else {
                    return e;
                }
            }

            function ye (e) {
                return Mr(e) || mr(e) || lr(e);
            }

            function ve (e, t) {
                if (t != null) {
                    e.__key = t;
                } else {
                    Hn();
                    if (jn > 99) {
                        L(14);
                    }
                    t = Jn();
                    var n = Un();
                    var r = "" + de++;
                    n._nodeMap.set(r, e);
                    if (sr(e)) {
                        t._dirtyElements.set(r, true);
                    } else {
                        t._dirtyLeaves.add(r);
                    }
                    t._cloneNotNeeded.add(r);
                    t._dirtyType = 1;
                    e.__key = r;
                }
            }

            function xe (e) {
                var t = e.getParent();
                if (t !== null) {
                    let i = e.getWritable();
                    t = t.getWritable();
                    var n = e.getPreviousSibling();
                    e = e.getNextSibling();
                    if (n === null) {
                        if (e !== null) {
                            var r = e.getWritable();
                            t.__first = e.__key;
                            r.__prev = null;
                        } else {
                            t.__first = null;
                        }
                    } else {
                        r = n.getWritable();
                        if (e !== null) {
                            let t = e.getWritable();
                            t.__prev = r.__key;
                            r.__next = t.__key;
                        } else {
                            r.__next = null;
                        }
                        i.__prev = null;
                    }
                    if (e === null) {
                        if (n !== null) {
                            e = n.getWritable();
                            t.__last = n.__key;
                            e.__next = null;
                        } else {
                            t.__last = null;
                        }
                    } else {
                        e = e.getWritable();
                        if (n !== null) {
                            (n = n.getWritable()).__next = e.__key;
                            e.__prev = n.__key;
                        } else {
                            e.__prev = null;
                        }
                        i.__next = null;
                    }
                    t.__size--;
                    i.__parent = null;
                }
            }

            function Ce (e) {
                if (jn > 99) {
                    L(14);
                }
                var t = e.getLatest();
                var n = t.__parent;
                var r = Un();
                let i = Jn();
                let l = r._nodeMap;
                r = i._dirtyElements;
                if (n !== null) {
                    e: for (; n !== null && !r.has(n);) {
                        let e = l.get(n);
                        if (e === undefined) {
                            break;
                        }
                        r.set(n, false);
                        n = e.__parent;
                    }
                }
                t = t.__key;
                i._dirtyType = 1;
                if (sr(e)) {
                    r.set(t, true);
                } else {
                    i._dirtyLeaves.add(t);
                }
            }

            function Ne (e) {
                Hn();
                var t = Jn();
                let n = t._compositionKey;
                if (e !== n) {
                    t._compositionKey = e;
                    if (n !== null) {
                        if ((t = Ee(n)) !== null) {
                            t.getWritable();
                        }
                    }
                    if (e !== null) {
                        if ((e = Ee(e)) !== null) {
                            e.getWritable();
                        }
                    }
                }
            }

            function Te () {
                if (Gn()) {
                    return null;
                } else {
                    return Jn()._compositionKey;
                }
            }

            function Ee (e, t) {
                if ((e = (t || Un())._nodeMap.get(e)) === undefined) {
                    return null;
                } else {
                    return e;
                }
            }

            function Se (e, t) {
                if ((e = e[`__lexicalKey_${Jn()._key}`]) !== undefined) {
                    return Ee(e, t);
                } else {
                    return null;
                }
            }

            function we (e, t) {
                for (; e != null;) {
                    let n = Se(e, t);
                    if (n !== null) {
                        return n;
                    }
                    e = Ye(e);
                }
                return null;
            }

            function De (e) {
                let t = Object.assign({}, e._decorators);
                return e._pendingDecorators = t;
            }

            function Oe (e) {
                return e.read(() => ke().getTextContent());
            }

            function ke () {
                return Un()._nodeMap.get("root");
            }

            function be (e) {
                Hn();
                let t = Un();
                if (e !== null) {
                    e.dirty = true;
                    e._cachedNodes = null;
                }
                t._selection = e;
            }

            function Me (e) {
                var t;
                var n = Jn();
                e: {
                    for (t = e; t != null;) {
                        let e = t[`__lexicalKey_${n._key}`];
                        if (e !== undefined) {
                            t = e;
                            break e;
                        }
                        t = Ye(t);
                    }
                    t = null;
                }
                if (t === null) {
                    if (e === (n = n.getRootElement())) {
                        return Ee("root");
                    } else {
                        return null;
                    }
                } else {
                    return Ee(t);
                }
            }

            function Re (e) {
                return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
            }

            function Ae (e) {
                let t = [];
                for (; e !== null;) {
                    t.push(e);
                    e = e._parentEditor;
                }
                return t;
            }

            function $e () {
                return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
            }

            function Pe (e, t, n) {
                if ((t = et(t._window)) !== null) {
                    var r = t.anchorNode;
                    var {
                        anchorOffset: i,
                        focusOffset: l
                    } = t;
                    if (r !== null && (t = r.nodeType === 3 ? r.nodeValue : null, r = we(r), t !== null && Mr(r))) {
                        if (r.canContainTabs()) {
                            var o = t.includes("\t");
                            if (n && n.length > 0 && o) {
                                let e = i + (o = n.length) - 1;
                                let r = t.slice(0, e);
                                t = `${r}${n}${t = t.slice(e, t.length)}`;
                                i += o;
                                l += o;
                            }
                        }
                        if (t === U && n) {
                            t = n;
                            l = i = o = n.length;
                        }
                        if (t !== null) {
                            Ie(r, t, i, l, e);
                        }
                    }
                }
            }

            function Ie (e, t, n, r, i) {
                let l = e;
                if (l.isAttached() && (i || !l.isDirty())) {
                    var o = l.isComposing();
                    e = t;
                    if ((o || i) && t[t.length - 1] === U) {
                        e = t.slice(0, -1);
                    }
                    t = l.getTextContent();
                    if (i || e !== t) {
                        if (e === "") {
                            Ne(null);
                            if (j || Y || H) {
                                l.remove();
                            } else {
                                let e = Jn();
                                setTimeout(() => {
                                    e.update(() => {
                                        if (l.isAttached()) {
                                            l.remove();
                                        }
                                    });
                                }, 20);
                            }
                        } else {
                            i = l.getParent();
                            t = An();
                            var s = Te();
                            var a = l.getKey();
                            if (l.isToken() || s !== null && a === s && !o || i !== null && pn(t) && !i.canInsertTextBefore() && t.anchor.offset === 0) {
                                l.markDirty();
                            } else {
                                if (pn(o = Rn()) && n !== null && r !== null) {
                                    o.setTextNodeRange(l, n, l, r);
                                    if (l.isSegmented()) {
                                        n = br(n = l.getTextContent());
                                        l.replace(n);
                                        l = n;
                                    }
                                }
                                l.setTextContent(e);
                            }
                        }
                    }
                }
            }

            function Le (e, t) {
                var n = e[t];
                if (typeof n == "string") {
                    n = n.split(" ");
                    return e[t] = n;
                } else {
                    return n;
                }
            }

            function Fe (e, t, n, r, i) {
                if (n.size !== 0) {
                    n = r.__key;
                    if ((t = t.get(r.__type)) === undefined) {
                        L(33);
                    }
                    r = t.klass;
                    if ((t = e.get(r)) === undefined) {
                        t = new Map();
                        e.set(r, t);
                    }
                    r = (e = t.get(n)) === "destroyed" && i === "created";
                    if (e === undefined || r) {
                        t.set(n, r ? "updated" : i);
                    }
                }
            }

            function Be (e, t, n) {
                let r = e.getParent();
                let i = n;
                if (r !== null) {
                    if (t && n === 0) {
                        i = e.getIndexWithinParent();
                        e = r;
                    } else if (!(t || n !== e.getChildrenSize())) {
                        i = e.getIndexWithinParent() + 1;
                        e = r;
                    }
                }
                return e.getChildAtIndex(t ? i - 1 : i);
            }

            function We (e, t) {
                var n = e.offset;
                if (e.type === "element") {
                    return Be(e = e.getNode(), t, n);
                } else {
                    e = e.getNode();
                    if (t && n === 0 || !t && n === e.getTextContentSize()) {
                        if ((n = t ? e.getPreviousSibling() : e.getNextSibling()) === null) {
                            return Be(e.getParentOrThrow(), t, e.getIndexWithinParent() + (t ? 0 : 1));
                        } else {
                            return n;
                        }
                    } else {
                        return null;
                    }
                }
            }

            function ze (e) {
                return (e = (e = He(e).event) && e.inputType) === "insertFromPaste" || e === "insertFromPasteAsQuotation";
            }

            function Ke (e) {
                return !dr(e) && !e.isLastChild() && !e.isInline();
            }

            function je (e, t) {
                if ((e = e._keyToDOMMap.get(t)) === undefined) {
                    L(75);
                }
                return e;
            }

            function Ye (e) {
                if ((e = e.assignedSlot || e.parentElement) !== null && e.nodeType === 11) {
                    return e.host;
                } else {
                    return e;
                }
            }

            function Ge (e, t) {
                for (e = e.getParent(); e !== null;) {
                    if (e.is(t)) {
                        return true;
                    }
                    e = e.getParent();
                }
                return false;
            }

            function He (e) {
                if ((e = e._window) === null) {
                    L(78);
                }
                return e;
            }

            function Ue (e) {
                for (e = e.getParentOrThrow(); e !== null && !Je(e);) {
                    e = e.getParentOrThrow();
                }
                return e;
            }

            function Je (e) {
                return dr(e) || sr(e) && e.isShadowRoot();
            }

            function Ve (e) {
                ve(e = e.constructor.clone(e), null);
                return e;
            }

            function Xe (e) {
                var t = Jn();
                let n = e.constructor.getType();
                if ((t = t._nodes.get(n)) === undefined) {
                    L(97);
                }
                if ((t = t.replace) !== null) {
                    if (!((t = t(e)) instanceof e.constructor)) {
                        L(98);
                    }
                    return t;
                } else {
                    return e;
                }
            }

            function qe (e, t) {
                if (!(!dr(e = e.getParent()) || sr(t) || lr(t))) {
                    L(99);
                }
            }

            function Qe (e) {
                return (lr(e) || sr(e) && !e.canBeEmpty()) && !e.isInline();
            }

            function Ze (e, t, n) {
                n.style.removeProperty("caret-color");
                t._blockCursorElement = null;
                if ((t = e.parentElement) !== null) {
                    t.removeChild(e);
                }
            }

            function et (e) {
                if (F) {
                    return (e || window).getSelection();
                } else {
                    return null;
                }
            }

            function tt (e, t) {
                let n = e.getChildAtIndex(t);
                if (n == null) {
                    n = e;
                }
                if (Je(e)) {
                    L(102);
                }
                let r = e => {
                    const t = e.getParentOrThrow();
                    const i = Je(t);
                    const l = e !== n || i ? Ve(e) : e;
                    if (i) {
                        e.insertAfter(l);
                        return [e, l, l];
                    }
                    const [o, s, a] = r(t);
                    e = e.getNextSiblings();
                    a.append(l, ...e);
                    return [o, s, l];
                };
                let [i, l] = r(n);
                return [i, l];
            }

            function nt (e, t) {
                for (; e !== ke() && e != null;) {
                    if (t(e)) {
                        return e;
                    }
                    e = e.getParent();
                }
                return null;
            }

            function rt (e) {
                let t = [];
                let n = [e];
                for (; n.length > 0;) {
                    let r = n.pop();
                    if (r === undefined) {
                        L(112);
                    }
                    if (sr(r)) {
                        n.unshift(...r.getChildren());
                    }
                    if (r !== e) {
                        t.push(r);
                    }
                }
                return t;
            }

            function it (e, t, n, r, i) {
                for (e = e.getFirstChild(); e !== null;) {
                    let l = e.__key;
                    if (e !== undefined && e.__parent === t) {
                        if (sr(e)) {
                            it(e, l, n, r, i);
                        }
                        if (!n.has(l)) {
                            i.delete(l);
                        }
                        r.delete(l);
                    }
                    e = e.isAttached() ? e.getNextSibling() : null;
                }
            }

            function lt (e, t) {
                let n = e.__mode;
                let r = e.__format;
                e = e.__style;
                let i = t.__mode;
                let l = t.__format;
                t = t.__style;
                return !(n !== null && n !== i || r !== null && r !== l || e !== null && e !== t);
            }

            function ot (e, t) {
                let n = e.mergeWithSibling(t);
                let r = Jn()._normalizedNodes;
                r.add(e.__key);
                r.add(t.__key);
                return n;
            }

            function st (e) {
                if (e.__text === "" && e.isSimpleText() && !e.isUnmergeable()) {
                    e.remove();
                } else {
                    for (var t;
                        (t = e.getPreviousSibling()) !== null && Mr(t) && t.isSimpleText() && !t.isUnmergeable();) {
                        if (t.__text !== "") {
                            if (lt(t, e)) {
                                e = ot(t, e);
                            }
                            break;
                        }
                        t.remove();
                    }
                    for (var n;
                        (n = e.getNextSibling()) !== null && Mr(n) && n.isSimpleText() && !n.isUnmergeable();) {
                        if (n.__text !== "") {
                            if (lt(e, n)) {
                                ot(e, n);
                            }
                            break;
                        }
                        n.remove();
                    }
                }
            }

            function at (e) {
                ut(e.anchor);
                ut(e.focus);
                return e;
            }

            function ut (e) {
                for (; e.type === "element";) {
                    var t = e.getNode();
                    var n = e.offset;
                    if (n === t.getChildrenSize()) {
                        t = t.getChildAtIndex(n - 1);
                        n = true;
                    } else {
                        t = t.getChildAtIndex(n);
                        n = false;
                    }
                    if (Mr(t)) {
                        e.set(t.__key, n ? t.getTextContentSize() : 0, "text");
                        break;
                    }
                    if (!sr(t)) {
                        break;
                    }
                    e.set(t.__key, n ? t.getChildrenSize() : 0, "element");
                }
            }
            let dt;
            let ct;
            let ft;
            let ht;
            let gt;
            let _t;
            let pt;
            let mt;
            let yt;
            let vt;
            let xt = "";
            let Ct = "";
            let Nt = "";
            let Tt = false;
            let Et = false;
            let St = null;

            function wt (e, t) {
                let n = pt.get(e);
                if (t !== null) {
                    let n = Wt(e);
                    if (n.parentNode === t) {
                        t.removeChild(n);
                    }
                }
                if (!mt.has(e)) {
                    ct._keyToDOMMap.delete(e);
                }
                if (sr(n)) {
                    Dt(e = It(n, pt), 0, e.length - 1, null);
                }
                if (n !== undefined) {
                    Fe(vt, ft, ht, n, "destroyed");
                }
            }

            function Dt (e, t, n, r) {
                for (; t <= n; ++t) {
                    let n = e[t];
                    if (n !== undefined) {
                        wt(n, r);
                    }
                }
            }

            function Ot (e, t) {
                e.setProperty("text-align", t);
            }

            function kt (e, t) {
                var n = dt.theme.indent;
                if (typeof n == "string") {
                    let r = e.classList.contains(n);
                    if (t > 0 && !r) {
                        e.classList.add(n);
                    } else if (t < 1 && r) {
                        e.classList.remove(n);
                    }
                }
                n = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || "40px";
                e.style.setProperty("padding-inline-start", t === 0 ? "" : `calc(${t} * ${n})`);
            }

            function bt (e, t) {
                e = e.style;
                if (t === 0) {
                    Ot(e, "");
                } else if (t === 1) {
                    Ot(e, "left");
                } else if (t === 2) {
                    Ot(e, "center");
                } else if (t === 3) {
                    Ot(e, "right");
                } else if (t === 4) {
                    Ot(e, "justify");
                } else if (t === 5) {
                    Ot(e, "start");
                } else if (t === 6) {
                    Ot(e, "end");
                }
            }

            function Mt (e, t, n) {
                let r = mt.get(e);
                if (r === undefined) {
                    L(60);
                }
                let i = r.createDOM(dt, ct);
                var l = ct._keyToDOMMap;
                i["__lexicalKey_" + ct._key] = e;
                l.set(e, i);
                if (Mr(r)) {
                    i.setAttribute("data-lexical-text", "true");
                } else if (lr(r)) {
                    i.setAttribute("data-lexical-decorator", "true");
                }
                if (sr(r)) {
                    e = r.__indent;
                    l = r.__size;
                    if (e !== 0) {
                        kt(i, e);
                    }
                    if (l !== 0) {
                        --l;
                        e = It(r, mt);
                        var o = Ct;
                        Ct = "";
                        Rt(e, r, 0, l, i, null);
                        Pt(r, i);
                        Ct = o;
                    }
                    if ((e = r.__format) !== 0) {
                        bt(i, e);
                    }
                    if (!r.isInline()) {
                        $t(null, r, i);
                    }
                    if (Ke(r)) {
                        xt += "\n\n";
                        Nt += "\n\n";
                    }
                } else {
                    l = r.getTextContent();
                    if (lr(r)) {
                        if ((o = r.decorate(ct, dt)) !== null) {
                            Ft(e, o);
                        }
                        i.contentEditable = "false";
                    } else if (Mr(r)) {
                        if (!r.isDirectionless()) {
                            Ct += l;
                        }
                    }
                    xt += l;
                    Nt += l;
                }
                if (t !== null) {
                    if (n != null) {
                        t.insertBefore(i, n);
                    } else if ((n = t.__lexicalLineBreak) != null) {
                        t.insertBefore(i, n);
                    } else {
                        t.appendChild(i);
                    }
                }
                Fe(vt, ft, ht, r, "created");
                return i;
            }

            function Rt (e, t, n, r, i, l) {
                let o = xt;
                for (xt = ""; n <= r; ++n) {
                    Mt(e[n], i, l);
                }
                if (Ke(t)) {
                    xt += "\n\n";
                }
                i.__lexicalTextContent = xt;
                xt = o + xt;
            }

            function At (e, t) {
                return mr(e = t.get(e)) || lr(e) && e.isInline();
            }

            function $t (e, t, n) {
                e = e !== null && (e.__size === 0 || At(e.__last, pt));
                t = t.__size === 0 || At(t.__last, mt);
                if (e) {
                    if (!t) {
                        if ((t = n.__lexicalLineBreak) != null) {
                            n.removeChild(t);
                        }
                        n.__lexicalLineBreak = null;
                    }
                } else if (t) {
                    t = document.createElement("br");
                    n.__lexicalLineBreak = t;
                    n.appendChild(t);
                }
            }

            function Pt (e, t) {
                var n = t.__lexicalDir;
                if (t.__lexicalDirTextContent !== Ct || n !== St) {
                    let l = Ct === "";
                    if (l) {
                        var r = St;
                    } else {
                        r = Ct;
                        r = V.test(r) ? "rtl" : X.test(r) ? "ltr" : null;
                    }
                    if (r !== n) {
                        let o = t.classList;
                        let s = dt.theme;
                        var i = n !== null ? s[n] : undefined;
                        let a = r !== null ? s[r] : undefined;
                        if (i !== undefined) {
                            if (typeof i == "string") {
                                i = i.split(" ");
                                i = s[n] = i;
                            }
                            o.remove(...i);
                        }
                        if (r === null || l && r === "ltr") {
                            t.removeAttribute("dir");
                        } else {
                            if (a !== undefined) {
                                if (typeof a == "string") {
                                    n = a.split(" ");
                                    a = s[r] = n;
                                }
                                if (a !== undefined) {
                                    o.add(...a);
                                }
                            }
                            t.dir = r;
                        }
                        if (!Et) {
                            e.getWritable().__dir = r;
                        }
                    }
                    St = r;
                    t.__lexicalDirTextContent = Ct;
                    t.__lexicalDir = r;
                }
            }

            function It (e, t) {
                let n = [];
                for (e = e.__first; e !== null;) {
                    let r = t.get(e);
                    if (r === undefined) {
                        L(101);
                    }
                    n.push(e);
                    e = r.__next;
                }
                return n;
            }

            function Lt (e, t) {
                var n = pt.get(e);
                var r = mt.get(e);
                if (!(n !== undefined && r !== undefined)) {
                    L(61);
                }
                var i = Tt || _t.has(e) || gt.has(e);
                let l = je(ct, e);
                if (n === r && !i) {
                    if (sr(n)) {
                        if ((r = l.__lexicalTextContent) !== undefined) {
                            xt += r;
                            Nt += r;
                        }
                        if ((r = l.__lexicalDirTextContent) !== undefined) {
                            Ct += r;
                        }
                    } else {
                        r = n.getTextContent();
                        if (Mr(n) && !n.isDirectionless()) {
                            Ct += r;
                        }
                        Nt += r;
                        xt += r;
                    }
                    return l;
                }
                if (n !== r && i) {
                    Fe(vt, ft, ht, r, "updated");
                }
                if (r.updateDOM(n, l, dt)) {
                    r = Mt(e, null, null);
                    if (t === null) {
                        L(62);
                    }
                    t.replaceChild(r, l);
                    wt(e, null);
                    return r;
                }
                if (sr(n) && sr(r)) {
                    if ((e = r.__indent) !== n.__indent) {
                        kt(l, e);
                    }
                    if ((e = r.__format) !== n.__format) {
                        bt(l, e);
                    }
                    if (i) {
                        e = r;
                        i = Ct;
                        Ct = "";
                        t = xt;
                        var o = n.__size;
                        var s = e.__size;
                        xt = "";
                        if (o === 1 && s === 1) {
                            var a = n.__first;
                            var u = e.__first;
                            if (a === u) {
                                Lt(a, l);
                            } else {
                                var d = Wt(a);
                                u = Mt(u, null, null);
                                l.replaceChild(u, d);
                                wt(a, null);
                            }
                        } else {
                            u = It(n, pt);
                            var c = It(e, mt);
                            if (o === 0) {
                                if (s !== 0) {
                                    Rt(c, e, 0, s - 1, l, null);
                                }
                            } else if (s === 0) {
                                if (o !== 0) {
                                    Dt(u, 0, o - 1, (a = l.__lexicalLineBreak == null) ? null : l);
                                    if (a) {
                                        l.textContent = "";
                                    }
                                }
                            } else {
                                var f = u;
                                u = c;
                                c = o - 1;
                                o = s - 1;
                                let t = l.firstChild;
                                let n = 0;
                                for (s = 0; n <= c && s <= o;) {
                                    var h = f[n];
                                    let e = u[s];
                                    if (h === e) {
                                        t = Bt(Lt(e, l));
                                        n++;
                                        s++;
                                    } else {
                                        if (a === undefined) {
                                            a = new Set(f);
                                        }
                                        if (d === undefined) {
                                            d = new Set(u);
                                        }
                                        let r = d.has(h);
                                        let i = a.has(e);
                                        if (r) {
                                            if (i) {
                                                if ((h = je(ct, e)) === t) {
                                                    t = Bt(Lt(e, l));
                                                } else {
                                                    if (t != null) {
                                                        l.insertBefore(h, t);
                                                    } else {
                                                        l.appendChild(h);
                                                    }
                                                    Lt(e, l);
                                                }
                                                n++;
                                            } else {
                                                Mt(e, l, t);
                                            }
                                            s++;
                                        } else {
                                            t = Bt(Wt(h));
                                            wt(h, l);
                                            n++;
                                        }
                                    }
                                }
                                d = s > o;
                                if ((a = n > c) && !d) {
                                    Rt(u, e, s, o, l, a = (a = u[o + 1]) === undefined ? null : ct.getElementByKey(a));
                                } else if (d && !a) {
                                    Dt(f, n, c, l);
                                }
                            }
                        }
                        if (Ke(e)) {
                            xt += "\n\n";
                        }
                        l.__lexicalTextContent = xt;
                        xt = t + xt;
                        Pt(e, l);
                        Ct = i;
                        if (!(dr(r) || r.isInline())) {
                            $t(n, r, l);
                        }
                    }
                    if (Ke(r)) {
                        xt += "\n\n";
                        Nt += "\n\n";
                    }
                } else {
                    n = r.getTextContent();
                    if (lr(r)) {
                        if ((i = r.decorate(ct, dt)) !== null) {
                            Ft(e, i);
                        }
                    } else if (Mr(r) && !r.isDirectionless()) {
                        Ct += n;
                    }
                    xt += n;
                    Nt += n;
                }
                if (!Et && dr(r) && r.__cachedText !== Nt) {
                    (r = r.getWritable()).__cachedText = Nt;
                }
                return l;
            }

            function Ft (e, t) {
                let n = ct._pendingDecorators;
                let r = ct._decorators;
                if (n === null) {
                    if (r[e] === t) {
                        return;
                    }
                    n = De(ct);
                }
                n[e] = t;
            }

            function Bt (e) {
                if ((e = e.nextSibling) !== null && e === ct._blockCursorElement) {
                    e = e.nextSibling;
                }
                return e;
            }

            function Wt (e) {
                if ((e = yt.get(e)) === undefined) {
                    L(75);
                }
                return e;
            }
            let zt = Object.freeze({});
            let Kt = [
                ["keydown", function (e, t) {
                    jt = e.timeStamp;
                    Yt = e.keyCode;
                    if (!t.isComposing()) {
                        var {
                            keyCode: n,
                            shiftKey: r,
                            ctrlKey: o,
                            metaKey: s,
                            altKey: a
                        } = e;
                        if (!er(t, _, e)) {
                            if (n !== 39 || o || s || a) {
                                if (n !== 39 || a || r || !o && !s) {
                                    if (n !== 37 || o || s || a) {
                                        if (n !== 37 || a || r || !o && !s) {
                                            if (n !== 38 || o || s) {
                                                if (n !== 40 || o || s) {
                                                    if (n === 13 && r) {
                                                        Xt = true;
                                                        er(t, N, e);
                                                    } else if (n === 32) {
                                                        er(t, T, e);
                                                    } else if (W && o && n === 79) {
                                                        e.preventDefault();
                                                        Xt = true;
                                                        er(t, l, true);
                                                    } else if (n !== 13 || r) {
                                                        var u = W ? !a && !s && (n === 8 || n === 72 && o) : !(o || a || s) && n === 8;
                                                        if (u) {
                                                            if (n === 8) {
                                                                er(t, E, e);
                                                            } else {
                                                                e.preventDefault();
                                                                er(t, i, true);
                                                            }
                                                        } else if (n === 27) {
                                                            er(t, S, e);
                                                        } else if (u = W ? !(r || a || s) && (n === 46 || n === 68 && o) : !(o || a || s) && n === 46) {
                                                            if (n === 46) {
                                                                er(t, w, e);
                                                            } else {
                                                                e.preventDefault();
                                                                er(t, i, false);
                                                            }
                                                        } else if (n === 8 && (W ? a : o)) {
                                                            e.preventDefault();
                                                            er(t, d, true);
                                                        } else if (n === 46 && (W ? a : o)) {
                                                            e.preventDefault();
                                                            er(t, d, false);
                                                        } else if (W && s && n === 8) {
                                                            e.preventDefault();
                                                            er(t, c, true);
                                                        } else if (W && s && n === 46) {
                                                            e.preventDefault();
                                                            er(t, c, false);
                                                        } else if (n === 66 && !a && (W ? s : o)) {
                                                            e.preventDefault();
                                                            er(t, f, "bold");
                                                        } else if (n === 85 && !a && (W ? s : o)) {
                                                            e.preventDefault();
                                                            er(t, f, "underline");
                                                        } else if (n === 73 && !a && (W ? s : o)) {
                                                            e.preventDefault();
                                                            er(t, f, "italic");
                                                        } else if (n !== 9 || a || o || s) {
                                                            if (n === 90 && !r && (W ? s : o)) {
                                                                e.preventDefault();
                                                                er(t, h, undefined);
                                                            } else if (u = W ? n === 90 && s && r : n === 89 && o || n === 90 && o && r) {
                                                                e.preventDefault();
                                                                er(t, g, undefined);
                                                            } else if (xn(t._editorState._selection)) {
                                                                if (u = !r && n === 67 && (W ? s : o)) {
                                                                    e.preventDefault();
                                                                    er(t, R, e);
                                                                } else if (u = !r && n === 88 && (W ? s : o)) {
                                                                    e.preventDefault();
                                                                    er(t, A, e);
                                                                }
                                                            }
                                                        } else {
                                                            er(t, D, e);
                                                        }
                                                    } else {
                                                        Xt = false;
                                                        er(t, N, e);
                                                    }
                                                } else {
                                                    er(t, C, e);
                                                }
                                            } else {
                                                er(t, x, e);
                                            }
                                        } else {
                                            er(t, v, e);
                                        }
                                    } else {
                                        er(t, y, e);
                                    }
                                } else {
                                    er(t, m, e);
                                }
                            } else {
                                er(t, p, e);
                            }
                            if (o || r || a || s) {
                                er(t, I, e);
                            }
                        }
                    }
                }],
                ["pointerdown", function (e, t) {
                    let n = e.target;
                    e = e.pointerType;
                    if (n instanceof Node && e !== "touch") {
                        rr(t, () => {
                            if (!lr(we(n))) {
                                Vt = true;
                            }
                        });
                    }
                }],
                ["compositionstart", function (e, t) {
                    rr(t, () => {
                        let n = Rn();
                        if (pn(n) && !t.isComposing()) {
                            let r = n.anchor;
                            let i = n.anchor.getNode();
                            Ne(r.key);
                            if (e.timeStamp < jt + 30 || r.type === "element" || !n.isCollapsed() || i.getFormat() !== n.format || i.getStyle() !== n.style) {
                                er(t, s, J);
                            }
                        }
                    });
                }],
                ["compositionend", function (e, t) {
                    if (z) {
                        qt = true;
                    } else {
                        rr(t, () => {
                            rn(t, e.data);
                        });
                    }
                }],
                ["input", function (e, t) {
                    e.stopPropagation();
                    rr(t, () => {
                        var n = Rn();
                        var r = e.data;
                        var i = nn(e);
                        if (r != null && pn(n) && Zt(n, i, r, e.timeStamp, false)) {
                            if (qt) {
                                rn(t, r);
                                qt = false;
                            }
                            var l = n.anchor;
                            var o = l.getNode();
                            if ((i = et(t._window)) === null) {
                                return;
                            }
                            let a = l.offset;
                            if (l = K && !n.isCollapsed() && Mr(o) && i.anchorNode !== null) {
                                l = (o = o.getTextContent().slice(0, a) + r + o.getTextContent().slice(a + n.focus.offset)) === ((i = i.anchorNode).nodeType === 3 ? i.nodeValue : null);
                            }
                            if (!l) {
                                er(t, s, r);
                            }
                            r = r.length;
                            if (z && r > 1 && e.inputType === "insertCompositionText" && !t.isComposing()) {
                                n.anchor.offset -= r;
                            }
                            if (!(j || Y || H || !t.isComposing())) {
                                jt = 0;
                                Ne(null);
                            }
                        } else {
                            Pe(false, t, r !== null ? r : undefined);
                            if (qt) {
                                rn(t, r || undefined);
                                qt = false;
                            }
                        }
                        Hn();
                        ae(n = Jn());
                    });
                    Ht = null;
                }],
                ["click", function (e, t) {
                    rr(t, () => {
                        let n = Rn();
                        let i = et(t._window);
                        let l = An();
                        if (pn(n)) {
                            let e = n.anchor;
                            let t = e.getNode();
                            if (i && e.type === "element" && e.offset === 0 && n.isCollapsed() && !dr(t) && ke().getChildrenSize() === 1 && t.getTopLevelElementOrThrow().isEmpty() && l !== null && n.is(l)) {
                                i.removeAllRanges();
                                n.dirty = true;
                            }
                        }
                        er(t, r, e);
                    });
                }],
                ["cut", zt],
                ["copy", zt],
                ["dragstart", zt],
                ["dragover", zt],
                ["dragend", zt],
                ["paste", zt],
                ["focus", zt],
                ["blur", zt],
                ["drop", zt]
            ];
            if (K) {
                Kt.push(["beforeinput", (e, t) => function (e, t) {
                    let n = e.inputType;
                    let r = nn(e);
                    if (!(n === "deleteCompositionText" || z && ze(t))) {
                        if (n !== "insertCompositionText") {
                            rr(t, () => {
                                let _ = Rn();
                                if (n === "deleteContentBackward") {
                                    if (_ === null) {
                                        var p = An();
                                        if (!pn(p)) {
                                            return;
                                        }
                                        be(p.clone());
                                    }
                                    if (pn(_)) {
                                        return void(Yt === 229 && e.timeStamp < jt + 30 && t.isComposing() && _.anchor.key === _.focus.key ? (Ne(null), jt = 0, setTimeout(() => {
                                            rr(t, () => {
                                                Ne(null);
                                            });
                                        }, 30), pn(_) && (p = _.anchor.getNode(), p.markDirty(), _.format = p.getFormat(), _.style = p.getStyle())) : (e.preventDefault(), er(t, i, true)));
                                    }
                                }
                                if (pn(_)) {
                                    p = e.data;
                                    if (Ht !== null) {
                                        Pe(false, t, Ht);
                                    }
                                    if (!(_.dirty && Ht === null || !_.isCollapsed() || dr(_.anchor.getNode()) || r === null)) {
                                        _.applyDOMRange(r);
                                    }
                                    Ht = null;
                                    var m = _.focus;
                                    var y = _.anchor.getNode();
                                    m = m.getNode();
                                    if (n === "insertText" || n === "insertTranspose") {
                                        if (p === "\n") {
                                            e.preventDefault();
                                            er(t, l, false);
                                        } else if (p === "\n\n") {
                                            e.preventDefault();
                                            er(t, o, undefined);
                                        } else if (p == null && e.dataTransfer) {
                                            p = e.dataTransfer.getData("text/plain");
                                            e.preventDefault();
                                            _.insertRawText(p);
                                        } else if (p != null && Zt(_, r, p, e.timeStamp, true)) {
                                            e.preventDefault();
                                            er(t, s, p);
                                        } else {
                                            Ht = p;
                                        }
                                        Gt = e.timeStamp;
                                    } else {
                                        e.preventDefault();
                                        switch (n) {
                                            case "insertFromYank":
                                            case "insertFromDrop":
                                            case "insertReplacementText":
                                                er(t, s, e);
                                                break;
                                            case "insertFromComposition":
                                                Ne(null);
                                                er(t, s, e);
                                                break;
                                            case "insertLineBreak":
                                                Ne(null);
                                                er(t, l, false);
                                                break;
                                            case "insertParagraph":
                                                Ne(null);
                                                if (Xt) {
                                                    Xt = false;
                                                    er(t, l, false);
                                                } else {
                                                    er(t, o, undefined);
                                                }
                                                break;
                                            case "insertFromPaste":
                                            case "insertFromPasteAsQuotation":
                                                er(t, a, e);
                                                break;
                                            case "deleteByComposition":
                                                if (function (e, t) {
                                                        return e !== t || sr(e) || sr(t) || !e.isToken() || !t.isToken();
                                                    }(y, m)) {
                                                    er(t, u, undefined);
                                                }
                                                break;
                                            case "deleteByDrag":
                                            case "deleteByCut":
                                                er(t, u, undefined);
                                                break;
                                            case "deleteContent":
                                                er(t, i, false);
                                                break;
                                            case "deleteWordBackward":
                                                er(t, d, true);
                                                break;
                                            case "deleteWordForward":
                                                er(t, d, false);
                                                break;
                                            case "deleteHardLineBackward":
                                            case "deleteSoftLineBackward":
                                                er(t, c, true);
                                                break;
                                            case "deleteContentForward":
                                            case "deleteHardLineForward":
                                            case "deleteSoftLineForward":
                                                er(t, c, false);
                                                break;
                                            case "formatStrikeThrough":
                                                er(t, f, "strikethrough");
                                                break;
                                            case "formatBold":
                                                er(t, f, "bold");
                                                break;
                                            case "formatItalic":
                                                er(t, f, "italic");
                                                break;
                                            case "formatUnderline":
                                                er(t, f, "underline");
                                                break;
                                            case "historyUndo":
                                                er(t, h, undefined);
                                                break;
                                            case "historyRedo":
                                                er(t, g, undefined);
                                        }
                                    }
                                }
                            });
                        }
                    }
                }(e, t)]);
            }
            let jt = 0;
            let Yt = 0;
            let Gt = 0;
            let Ht = null;
            let Ut = 0;
            let Jt = false;
            let Vt = false;
            let Xt = false;
            let qt = false;
            let Qt = [0, "", 0, "root", 0];

            function Zt (e, t, n, r, i) {
                let l = e.anchor;
                let o = e.focus;
                let s = l.getNode();
                var a = Jn();
                let u = et(a._window);
                let d = u !== null ? u.anchorNode : null;
                let c = l.key;
                a = a.getElementByKey(c);
                let f = n.length;
                return c !== o.key || !Mr(s) || (!i && (!K || Gt < r + 50) || s.isDirty() && f < 2 || Re(n)) && l.offset !== o.offset && !s.isComposing() || _e(s) || s.isDirty() && f > 1 || (i || !K) && a !== null && !s.isComposing() && d !== pe(a) || u !== null && t !== null && (!t.collapsed || t.startContainer !== u.anchorNode || t.startOffset !== u.anchorOffset) || s.getFormat() !== e.format || s.getStyle() !== e.style || function (e, t) {
                    if (t.isSegmented()) {
                        return true;
                    }
                    if (!e.isCollapsed()) {
                        return false;
                    }
                    e = e.anchor.offset;
                    let n = t.getParentOrThrow();
                    let r = t.isToken();
                    if (e === 0) {
                        if (!(e = !t.canInsertTextBefore() || !n.canInsertTextBefore() || r)) {
                            e = (Mr(t = t.getPreviousSibling()) || sr(t) && t.isInline()) && !t.canInsertTextAfter();
                        }
                        return e;
                    } else {
                        return e === t.getTextContentSize() && (!t.canInsertTextAfter() || !n.canInsertTextAfter() || r);
                    }
                }(e, s);
            }

            function en (e, t) {
                return e !== null && e.nodeValue !== null && e.nodeType === 3 && t !== 0 && t !== e.nodeValue.length;
            }

            function tn (e, t, r) {
                let {
                    anchorNode: i,
                    anchorOffset: l,
                    focusNode: o,
                    focusOffset: s
                } = e;
                if (!(Jt && (Jt = false, en(i, l) && en(o, s)))) {
                    rr(t, () => {
                        if (r) {
                            if (he(t, i, o)) {
                                var l = Rn();
                                if (pn(l)) {
                                    var s = l.anchor;
                                    var a = s.getNode();
                                    if (l.isCollapsed()) {
                                        if (e.type === "Range" && e.anchorNode === e.focusNode) {
                                            l.dirty = true;
                                        }
                                        var u = He(t).event;
                                        u = u ? u.timeStamp : performance.now();
                                        let [n, r, i, o, d] = Qt;
                                        if (u < d + 200 && s.offset === i && s.key === o) {
                                            l.format = n;
                                            l.style = r;
                                        } else if (s.type === "text") {
                                            l.format = a.getFormat();
                                            l.style = a.getStyle();
                                        } else if (s.type === "element") {
                                            l.format = 0;
                                            l.style = "";
                                        }
                                    } else {
                                        s = 255;
                                        a = false;
                                        let e = (u = l.getNodes()).length;
                                        for (let t = 0; t < e; t++) {
                                            let e = u[t];
                                            if (Mr(e) && (a = true, (s &= e.getFormat()) === 0)) {
                                                break;
                                            }
                                        }
                                        l.format = a ? s : 0;
                                    }
                                }
                                er(t, n, undefined);
                            }
                        } else {
                            be(null);
                        }
                    });
                }
            }

            function nn (e) {
                if (e.getTargetRanges) {
                    if ((e = e.getTargetRanges()).length === 0) {
                        return null;
                    } else {
                        return e[0];
                    }
                } else {
                    return null;
                }
            }

            function rn (e, t) {
                var n = e._compositionKey;
                Ne(null);
                if (n !== null && t != null) {
                    if (t === "") {
                        t = Ee(n);
                        return void((e = pe(e.getElementByKey(n))) !== null && e.nodeValue !== null && Mr(t) && Ie(t, e.nodeValue, null, null, true));
                    }
                    if (t[t.length - 1] === "\n" && pn(n = Rn())) {
                        t = n.focus;
                        n.anchor.set(t.key, t.offset, t.type);
                        return void er(e, N, null);
                    }
                }
                Pe(true, e, t);
            }

            function ln (e) {
                let t = e.__lexicalEventHandles;
                if (t === undefined) {
                    t = [];
                    e.__lexicalEventHandles = t;
                }
                return t;
            }
            let on = new Map();

            function sn (e) {
                let t = et((e = e.target) == null ? null : e.nodeType === 9 ? e.defaultView : e.ownerDocument.defaultView);
                if (t !== null) {
                    var n = ge(t.anchorNode);
                    if (n !== null) {
                        if (Vt) {
                            Vt = false;
                            rr(n, () => {
                                var e = An();
                                var r = t.anchorNode;
                                if (r !== null && ((r = r.nodeType) === 1 || r === 3)) {
                                    be(e = Mn(e, t, n));
                                }
                            });
                        }
                        var r = (e = (e = Ae(n))[e.length - 1])._key;
                        var i = on.get(r);
                        var l = i || e;
                        if (l !== n) {
                            tn(t, l, false);
                        }
                        tn(t, n, true);
                        if (n !== e) {
                            on.set(r, n);
                        } else if (i) {
                            on.delete(r);
                        }
                    }
                }
            }

            function an (e, t, n) {
                Hn();
                var r = e.__key;
                let i = e.getParent();
                if (i !== null) {
                    var l = function (e, t = 0) {
                        if (t !== 0) {
                            L(1);
                        }
                        if (!pn(t = Rn()) || !sr(e)) {
                            return t;
                        }
                        let {
                            anchor: n,
                            focus: r
                        } = t;
                        let i = n.getNode();
                        let l = r.getNode();
                        if (Ge(i, e)) {
                            n.set(e.__key, 0, "element");
                        }
                        if (Ge(l, e)) {
                            r.set(e.__key, 0, "element");
                        }
                        return t;
                    }(e);
                    var o = false;
                    if (pn(l) && t) {
                        let t = l.anchor;
                        let n = l.focus;
                        if (t.key === r) {
                            In(t, e, i, e.getPreviousSibling(), e.getNextSibling());
                            o = true;
                        }
                        if (n.key === r) {
                            In(n, e, i, e.getPreviousSibling(), e.getNextSibling());
                            o = true;
                        }
                    }
                    if (pn(l) && t && !o) {
                        r = e.getIndexWithinParent();
                        xe(e);
                        $n(l, i, r, -1);
                    } else {
                        xe(e);
                    }
                    if (!(n || Je(i) || i.canBeEmpty() || !i.isEmpty())) {
                        an(i, t);
                    }
                    if (t && dr(i) && i.isEmpty()) {
                        i.selectEnd();
                    }
                }
            }
            class un {
                static getType () {
                    L(64);
                }
                static clone () {
                    L(65);
                }
                constructor (e) {
                    this.__type = this.constructor.getType();
                    this.__next = this.__prev = this.__parent = null;
                    ve(this, e);
                }
                getType () {
                    return this.__type;
                }
                isAttached () {
                    for (var e = this.__key; e !== null;) {
                        if (e === "root") {
                            return true;
                        }
                        if ((e = Ee(e)) === null) {
                            break;
                        }
                        e = e.__parent;
                    }
                    return false;
                }
                isSelected (e) {
                    if ((e = e || Rn()) == null) {
                        return false;
                    }
                    let t = e.getNodes().some(e => e.__key === this.__key);
                    return (Mr(this) || !pn(e) || e.anchor.type !== "element" || e.focus.type !== "element" || e.anchor.key !== e.focus.key || e.anchor.offset !== e.focus.offset) && t;
                }
                getKey () {
                    return this.__key;
                }
                getIndexWithinParent () {
                    var e = this.getParent();
                    if (e === null) {
                        return -1;
                    }
                    e = e.getFirstChild();
                    let t = 0;
                    for (; e !== null;) {
                        if (this.is(e)) {
                            return t;
                        }
                        t++;
                        e = e.getNextSibling();
                    }
                    return -1;
                }
                getParent () {
                    let e = this.getLatest().__parent;
                    if (e === null) {
                        return null;
                    } else {
                        return Ee(e);
                    }
                }
                getParentOrThrow () {
                    let e = this.getParent();
                    if (e === null) {
                        L(66);
                    }
                    return e;
                }
                getTopLevelElement () {
                    let e = this;
                    for (; e !== null;) {
                        let t = e.getParent();
                        if (Je(t)) {
                            return e;
                        }
                        e = t;
                    }
                    return null;
                }
                getTopLevelElementOrThrow () {
                    let e = this.getTopLevelElement();
                    if (e === null) {
                        L(67);
                    }
                    return e;
                }
                getParents () {
                    let e = [];
                    let t = this.getParent();
                    for (; t !== null;) {
                        e.push(t);
                        t = t.getParent();
                    }
                    return e;
                }
                getParentKeys () {
                    let e = [];
                    let t = this.getParent();
                    for (; t !== null;) {
                        e.push(t.__key);
                        t = t.getParent();
                    }
                    return e;
                }
                getPreviousSibling () {
                    let e = this.getLatest().__prev;
                    if (e === null) {
                        return null;
                    } else {
                        return Ee(e);
                    }
                }
                getPreviousSiblings () {
                    let e = [];
                    var t = this.getParent();
                    if (t === null) {
                        return e;
                    }
                    for (t = t.getFirstChild(); t !== null && !t.is(this);) {
                        e.push(t);
                        t = t.getNextSibling();
                    }
                    return e;
                }
                getNextSibling () {
                    let e = this.getLatest().__next;
                    if (e === null) {
                        return null;
                    } else {
                        return Ee(e);
                    }
                }
                getNextSiblings () {
                    let e = [];
                    let t = this.getNextSibling();
                    for (; t !== null;) {
                        e.push(t);
                        t = t.getNextSibling();
                    }
                    return e;
                }
                getCommonAncestor (e) {
                    let t = this.getParents();
                    var n = e.getParents();
                    if (sr(this)) {
                        t.unshift(this);
                    }
                    if (sr(e)) {
                        n.unshift(e);
                    }
                    e = t.length;
                    var r = n.length;
                    if (e === 0 || r === 0 || t[e - 1] !== n[r - 1]) {
                        return null;
                    }
                    n = new Set(n);
                    r = 0;
                    for (; r < e; r++) {
                        let e = t[r];
                        if (n.has(e)) {
                            return e;
                        }
                    }
                    return null;
                }
                is (e) {
                    return e != null && this.__key === e.__key;
                }
                isBefore (e) {
                    if (this === e) {
                        return false;
                    }
                    if (e.isParentOf(this)) {
                        return true;
                    }
                    if (this.isParentOf(e)) {
                        return false;
                    }
                    var t = this.getCommonAncestor(e);
                    let n = this;
                    for (;;) {
                        var r = n.getParentOrThrow();
                        if (r === t) {
                            r = n.getIndexWithinParent();
                            break;
                        }
                        n = r;
                    }
                    for (n = e;;) {
                        if ((e = n.getParentOrThrow()) === t) {
                            t = n.getIndexWithinParent();
                            break;
                        }
                        n = e;
                    }
                    return r < t;
                }
                isParentOf (e) {
                    let t = this.__key;
                    if (t === e.__key) {
                        return false;
                    }
                    for (; e !== null;) {
                        if (e.__key === t) {
                            return true;
                        }
                        e = e.getParent();
                    }
                    return false;
                }
                getNodesBetween (e) {
                    let t = this.isBefore(e);
                    let n = [];
                    let r = new Set();
                    for (var i = this;;) {
                        var l = i.__key;
                        if (!r.has(l)) {
                            r.add(l);
                            n.push(i);
                        }
                        if (i === e) {
                            break;
                        }
                        if ((l = sr(i) ? t ? i.getFirstChild() : i.getLastChild() : null) !== null) {
                            i = l;
                        } else if ((l = t ? i.getNextSibling() : i.getPreviousSibling()) !== null) {
                            i = l;
                        } else {
                            i = i.getParentOrThrow();
                            if (!r.has(i.__key)) {
                                n.push(i);
                            }
                            if (i === e) {
                                break;
                            }
                            l = i;
                            do {
                                if (l === null) {
                                    L(68);
                                }
                                i = t ? l.getNextSibling() : l.getPreviousSibling();
                                if ((l = l.getParent()) !== null) {
                                    if (!(i !== null || r.has(l.__key))) {
                                        n.push(l);
                                    }
                                }
                            } while (i === null);
                        }
                    }
                    if (!t) {
                        n.reverse();
                    }
                    return n;
                }
                isDirty () {
                    let e = Jn()._dirtyLeaves;
                    return e !== null && e.has(this.__key);
                }
                getLatest () {
                    let e = Ee(this.__key);
                    if (e === null) {
                        L(113);
                    }
                    return e;
                }
                getWritable () {
                    Hn();
                    var e = Un();
                    var t = Jn();
                    e = e._nodeMap;
                    let n = this.__key;
                    let r = this.getLatest();
                    let i = r.__parent;
                    t = t._cloneNotNeeded;
                    var l = Rn();
                    if (l !== null) {
                        l._cachedNodes = null;
                    }
                    if (t.has(n)) {
                        Ce(r);
                        return r;
                    } else {
                        (l = r.constructor.clone(r)).__parent = i;
                        l.__next = r.__next;
                        l.__prev = r.__prev;
                        if (sr(r) && sr(l)) {
                            l.__first = r.__first;
                            l.__last = r.__last;
                            l.__size = r.__size;
                            l.__indent = r.__indent;
                            l.__format = r.__format;
                            l.__dir = r.__dir;
                        } else if (Mr(r) && Mr(l)) {
                            l.__format = r.__format;
                            l.__style = r.__style;
                            l.__mode = r.__mode;
                            l.__detail = r.__detail;
                        }
                        t.add(n);
                        l.__key = n;
                        Ce(l);
                        e.set(n, l);
                        return l;
                    }
                }
                getTextContent () {
                    return "";
                }
                getTextContentSize () {
                    return this.getTextContent().length;
                }
                createDOM () {
                    L(70);
                }
                updateDOM () {
                    L(71);
                }
                exportDOM (e) {
                    return {
                        element: this.createDOM(e._config, e)
                    };
                }
                exportJSON () {
                    L(72);
                }
                static importJSON () {
                    L(18);
                }
                static transform () {
                    return null;
                }
                remove (e) {
                    an(this, true, e);
                }
                replace (e, t) {
                    Hn();
                    var n = Rn();
                    if (n !== null) {
                        n = n.clone();
                    }
                    qe(this, e);
                    let r = this.getLatest();
                    let i = this.__key;
                    let l = e.__key;
                    let o = e.getWritable();
                    let s = (e = this.getParentOrThrow().getWritable()).__size;
                    xe(o);
                    let a = r.getPreviousSibling();
                    let u = r.getNextSibling();
                    let d = r.__prev;
                    let c = r.__next;
                    let f = r.__parent;
                    an(r, false, true);
                    if (a === null) {
                        e.__first = l;
                    } else {
                        a.getWritable().__next = l;
                    }
                    o.__prev = d;
                    if (u === null) {
                        e.__last = l;
                    } else {
                        u.getWritable().__prev = l;
                    }
                    o.__next = c;
                    o.__parent = f;
                    e.__size = s;
                    if (t) {
                        this.getChildren().forEach(e => {
                            o.append(e);
                        });
                    }
                    if (pn(n)) {
                        be(n);
                        t = n.anchor;
                        n = n.focus;
                        if (t.key === i) {
                            fn(t, o);
                        }
                        if (n.key === i) {
                            fn(n, o);
                        }
                    }
                    if (Te() === i) {
                        Ne(l);
                    }
                    return o;
                }
                insertAfter (e, t = true) {
                    Hn();
                    qe(this, e);
                    var n = this.getWritable();
                    let r = e.getWritable();
                    var i = r.getParent();
                    let l = Rn();
                    var o = false;
                    var s = false;
                    if (i !== null) {
                        var a = e.getIndexWithinParent();
                        xe(r);
                        if (pn(l)) {
                            s = i.__key;
                            o = l.anchor;
                            i = l.focus;
                            o = o.type === "element" && o.key === s && o.offset === a + 1;
                            s = i.type === "element" && i.key === s && i.offset === a + 1;
                        }
                    }
                    i = this.getNextSibling();
                    a = this.getParentOrThrow().getWritable();
                    let u = r.__key;
                    let d = n.__next;
                    if (i === null) {
                        a.__last = u;
                    } else {
                        i.getWritable().__prev = u;
                    }
                    a.__size++;
                    n.__next = u;
                    r.__next = d;
                    r.__prev = n.__key;
                    r.__parent = n.__parent;
                    if (t && pn(l)) {
                        $n(l, a, (t = this.getIndexWithinParent()) + 1);
                        n = a.__key;
                        if (o) {
                            l.anchor.set(n, t + 2, "element");
                        }
                        if (s) {
                            l.focus.set(n, t + 2, "element");
                        }
                    }
                    return e;
                }
                insertBefore (e, t = true) {
                    Hn();
                    qe(this, e);
                    var n = this.getWritable();
                    let r = e.getWritable();
                    let i = r.__key;
                    xe(r);
                    let l = this.getPreviousSibling();
                    let o = this.getParentOrThrow().getWritable();
                    let s = n.__prev;
                    let a = this.getIndexWithinParent();
                    if (l === null) {
                        o.__first = i;
                    } else {
                        l.getWritable().__next = i;
                    }
                    o.__size++;
                    n.__prev = i;
                    r.__prev = s;
                    r.__next = n.__key;
                    r.__parent = n.__parent;
                    n = Rn();
                    if (t && pn(n)) {
                        $n(n, t = this.getParentOrThrow(), a);
                    }
                    return e;
                }
                isParentRequired () {
                    return false;
                }
                createParentElementNode () {
                    return $r();
                }
                selectPrevious (e, t) {
                    Hn();
                    let n = this.getPreviousSibling();
                    let r = this.getParentOrThrow();
                    if (n === null) {
                        return r.select(0, 0);
                    } else if (sr(n)) {
                        return n.select();
                    } else if (Mr(n)) {
                        return n.select(e, t);
                    } else {
                        e = n.getIndexWithinParent() + 1;
                        return r.select(e, e);
                    }
                }
                selectNext (e, t) {
                    Hn();
                    let n = this.getNextSibling();
                    let r = this.getParentOrThrow();
                    if (n === null) {
                        return r.select();
                    } else if (sr(n)) {
                        return n.select(0, 0);
                    } else if (Mr(n)) {
                        return n.select(e, t);
                    } else {
                        e = n.getIndexWithinParent();
                        return r.select(e, e);
                    }
                }
                markDirty () {
                    this.getWritable();
                }
            }
            class dn {
                constructor (e, t, n) {
                    this._selection = null;
                    this.key = e;
                    this.offset = t;
                    this.type = n;
                }
                is (e) {
                    return this.key === e.key && this.offset === e.offset && this.type === e.type;
                }
                isBefore (e) {
                    let t = this.getNode();
                    let n = e.getNode();
                    let r = this.offset;
                    e = e.offset;
                    if (sr(t)) {
                        var i = t.getDescendantByIndex(r);
                        t = i != null ? i : t;
                    }
                    if (sr(n)) {
                        i = n.getDescendantByIndex(e);
                        n = i != null ? i : n;
                    }
                    if (t === n) {
                        return r < e;
                    } else {
                        return t.isBefore(n);
                    }
                }
                getNode () {
                    let e = Ee(this.key);
                    if (e === null) {
                        L(20);
                    }
                    return e;
                }
                set (e, t, n) {
                    let r = this._selection;
                    let i = this.key;
                    this.key = e;
                    this.offset = t;
                    this.type = n;
                    if (!Gn()) {
                        if (Te() === i) {
                            Ne(e);
                        }
                        if (r !== null) {
                            r._cachedNodes = null;
                            r.dirty = true;
                        }
                    }
                }
            }

            function cn (e, t) {
                let n = t.__key;
                let r = e.offset;
                let i = "element";
                if (Mr(t)) {
                    i = "text";
                    if (r > (t = t.getTextContentSize())) {
                        r = t;
                    }
                } else if (!sr(t)) {
                    var l = t.getNextSibling();
                    if (Mr(l)) {
                        n = l.__key;
                        r = 0;
                        i = "text";
                    } else if (l = t.getParent()) {
                        n = l.__key;
                        r = t.getIndexWithinParent() + 1;
                    }
                }
                e.set(n, r, i);
            }

            function fn (e, t) {
                if (sr(t)) {
                    let n = t.getLastDescendant();
                    if (sr(n) || Mr(n)) {
                        cn(e, n);
                    } else {
                        cn(e, t);
                    }
                } else {
                    cn(e, t);
                }
            }

            function hn (e, t, n, r) {
                let i = e.getNode();
                let l = i.getChildAtIndex(e.offset);
                let o = br();
                let s = dr(i) ? $r().append(o) : o;
                o.setFormat(n);
                o.setStyle(r);
                if (l === null) {
                    i.append(s);
                } else {
                    l.insertBefore(s);
                }
                if (e.is(t)) {
                    t.set(o.__key, 0, "text");
                }
                e.set(o.__key, 0, "text");
            }

            function gn (e, t, n, r) {
                e.key = t;
                e.offset = n;
                e.type = r;
            }
            class _n {
                constructor (e) {
                    this.dirty = false;
                    this._nodes = e;
                    this._cachedNodes = null;
                }
                is (e) {
                    if (!xn(e)) {
                        return false;
                    }
                    let t = this._nodes;
                    let n = e._nodes;
                    return t.size === n.size && Array.from(t).every(e => n.has(e));
                }
                add (e) {
                    this.dirty = true;
                    this._nodes.add(e);
                    this._cachedNodes = null;
                }
                delete (e) {
                    this.dirty = true;
                    this._nodes.delete(e);
                    this._cachedNodes = null;
                }
                clear () {
                    this.dirty = true;
                    this._nodes.clear();
                    this._cachedNodes = null;
                }
                has (e) {
                    return this._nodes.has(e);
                }
                clone () {
                    return new _n(new Set(this._nodes));
                }
                extract () {
                    return this.getNodes();
                }
                insertRawText () {}
                insertText () {}
                insertNodes (e, t) {
                    let n = this.getNodes();
                    let r = n.length;
                    var i = n[r - 1];
                    if (Mr(i)) {
                        i = i.select();
                    } else {
                        let e = i.getIndexWithinParent() + 1;
                        i = i.getParentOrThrow().select(e, e);
                    }
                    i.insertNodes(e, t);
                    e = 0;
                    for (; e < r; e++) {
                        n[e].remove();
                    }
                    return true;
                }
                getNodes () {
                    var e = this._cachedNodes;
                    if (e !== null) {
                        return e;
                    }
                    var t = this._nodes;
                    e = [];
                    for (let n of t) {
                        if ((t = Ee(n)) !== null) {
                            e.push(t);
                        }
                    }
                    if (!Gn()) {
                        this._cachedNodes = e;
                    }
                    return e;
                }
                getTextContent () {
                    let e = this.getNodes();
                    let t = "";
                    for (let n = 0; n < e.length; n++) {
                        t += e[n].getTextContent();
                    }
                    return t;
                }
            }

            function pn (e) {
                return e instanceof vn;
            }
            class mn {
                constructor (e, t, n) {
                    this.gridKey = e;
                    this.anchor = t;
                    this.focus = n;
                    this.dirty = false;
                    this._cachedNodes = null;
                    t._selection = this;
                    n._selection = this;
                }
                is (e) {
                    return !!yn(e) && this.gridKey === e.gridKey && this.anchor.is(e.anchor) && this.focus.is(e.focus);
                }
                set (e, t, n) {
                    this.dirty = true;
                    this.gridKey = e;
                    this.anchor.key = t;
                    this.focus.key = n;
                    this._cachedNodes = null;
                }
                clone () {
                    return new mn(this.gridKey, this.anchor, this.focus);
                }
                isCollapsed () {
                    return false;
                }
                isBackward () {
                    return this.focus.isBefore(this.anchor);
                }
                getCharacterOffsets () {
                    return Nn(this);
                }
                extract () {
                    return this.getNodes();
                }
                insertRawText () {}
                insertText () {}
                insertNodes (e, t) {
                    let n = this.focus.getNode();
                    return at(n.select(0, n.getChildrenSize())).insertNodes(e, t);
                }
                getShape () {
                    var e = Ee(this.anchor.key);
                    if (e === null) {
                        L(21);
                    }
                    var t = e.getIndexWithinParent();
                    e = e.getParentOrThrow().getIndexWithinParent();
                    var n = Ee(this.focus.key);
                    if (n === null) {
                        L(22);
                    }
                    var r = n.getIndexWithinParent();
                    let i = n.getParentOrThrow().getIndexWithinParent();
                    n = Math.min(t, r);
                    t = Math.max(t, r);
                    r = Math.min(e, i);
                    e = Math.max(e, i);
                    return {
                        fromX: Math.min(n, t),
                        fromY: Math.min(r, e),
                        toX: Math.max(n, t),
                        toY: Math.max(r, e)
                    };
                }
                getNodes () {
                    function e (e) {
                        let {
                            cell: t,
                            startColumn: n,
                            startRow: r
                        } = e;
                        s = Math.min(s, n);
                        a = Math.min(a, r);
                        u = Math.max(u, n + t.__colSpan - 1);
                        d = Math.max(d, r + t.__rowSpan - 1);
                    }
                    var t = this._cachedNodes;
                    if (t !== null) {
                        return t;
                    }
                    var n = this.anchor.getNode();
                    t = this.focus.getNode();
                    n = nt(n, Fr);
                    var r = nt(t, Fr);
                    if (!Fr(n)) {
                        L(103);
                    }
                    if (!Fr(r)) {
                        L(104);
                    }
                    if (!Kr(t = n.getParent())) {
                        L(105);
                    }
                    if (!Wr(t = t.getParent())) {
                        L(106);
                    }
                    let [i, l, o] = Fn(t, n, r);
                    let s = Math.min(l.startColumn, o.startColumn);
                    let a = Math.min(l.startRow, o.startRow);
                    let u = Math.max(l.startColumn + l.cell.__colSpan - 1, o.startColumn + o.cell.__colSpan - 1);
                    let d = Math.max(l.startRow + l.cell.__rowSpan - 1, o.startRow + o.cell.__rowSpan - 1);
                    n = s;
                    r = a;
                    for (var c = s, f = a; s < n || a < r || u > c || d > f;) {
                        if (s < n) {
                            var h = f - r;
                            --n;
                            for (var g = 0; g <= h; g++) {
                                e(i[r + g][n]);
                            }
                        }
                        if (a < r) {
                            h = c - n;
                            --r;
                            g = 0;
                            h = c - n;
                            --r;
                            g = 0;
                            for (; g <= h; g++) {
                                e(i[r][n + g]);
                            }
                        }
                        if (u > c) {
                            h = f - r;
                            c += 1;
                            g = 0;
                            h = f - r;
                            c += 1;
                            g = 0;
                            for (; g <= h; g++) {
                                e(i[r + g][c]);
                            }
                        }
                        if (d > f) {
                            h = c - n;
                            f += 1;
                            g = 0;
                            h = c - n;
                            f += 1;
                            g = 0;
                            for (; g <= h; g++) {
                                e(i[f][n + g]);
                            }
                        }
                    }
                    t = [t];
                    n = null;
                    r = a;
                    for (; r <= d; r++) {
                        for (c = s; c <= u; c++) {
                            ({
                                cell: f
                            } = i[r][c]);
                            if (!Kr(h = f.getParent())) {
                                L(107);
                            }
                            if (h !== n) {
                                t.push(h);
                            }
                            t.push(f, ...rt(f));
                            n = h;
                        }
                    }
                    if (!Gn()) {
                        this._cachedNodes = t;
                    }
                    return t;
                }
                getTextContent () {
                    let e = this.getNodes();
                    let t = "";
                    for (let n = 0; n < e.length; n++) {
                        t += e[n].getTextContent();
                    }
                    return t;
                }
            }

            function yn (e) {
                return e instanceof mn;
            }
            class vn {
                constructor (e, t, n, r) {
                    this.anchor = e;
                    this.focus = t;
                    this.dirty = false;
                    this.format = n;
                    this.style = r;
                    this._cachedNodes = null;
                    e._selection = this;
                    t._selection = this;
                }
                is (e) {
                    return !!pn(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
                }
                isBackward () {
                    return this.focus.isBefore(this.anchor);
                }
                isCollapsed () {
                    return this.anchor.is(this.focus);
                }
                getNodes () {
                    var e = this._cachedNodes;
                    if (e !== null) {
                        return e;
                    }
                    e = this.anchor;
                    var t = this.focus;
                    var n = e.isBefore(t);
                    var r = n ? e : t;
                    n = n ? t : e;
                    e = r.getNode();
                    t = n.getNode();
                    let i = r.offset;
                    r = n.offset;
                    if (sr(e)) {
                        n = e.getDescendantByIndex(i);
                        e = n != null ? n : e;
                    }
                    if (sr(t)) {
                        if ((n = t.getDescendantByIndex(r)) !== null && n !== e && t.getChildAtIndex(r) === n) {
                            n = n.getPreviousSibling();
                        }
                        t = n != null ? n : t;
                    }
                    e = e.is(t) ? sr(e) && e.getChildrenSize() > 0 ? [] : [e] : e.getNodesBetween(t);
                    if (!Gn()) {
                        this._cachedNodes = e;
                    }
                    return e;
                }
                setTextNodeRange (e, t, n, r) {
                    gn(this.anchor, e.__key, t, "text");
                    gn(this.focus, n.__key, r, "text");
                    this._cachedNodes = null;
                    this.dirty = true;
                }
                getTextContent () {
                    let e = this.getNodes();
                    if (e.length === 0) {
                        return "";
                    }
                    let t = e[0];
                    let n = e[e.length - 1];
                    let r = this.anchor;
                    let i = this.focus;
                    let l = r.isBefore(i);
                    let [o, s] = Nn(this);
                    let a = "";
                    let u = true;
                    for (let d = 0; d < e.length; d++) {
                        let c = e[d];
                        if (sr(c) && !c.isInline()) {
                            if (!u) {
                                a += "\n";
                            }
                            u = !c.isEmpty();
                        } else {
                            u = false;
                            if (Mr(c)) {
                                let e = c.getTextContent();
                                if (c === t) {
                                    if (c === n) {
                                        if (!(r.type === "element" && i.type === "element" && i.offset !== r.offset)) {
                                            e = o < s ? e.slice(o, s) : e.slice(s, o);
                                        }
                                    } else {
                                        e = l ? e.slice(o) : e.slice(s);
                                    }
                                } else if (c === n) {
                                    e = l ? e.slice(0, s) : e.slice(0, o);
                                }
                                a += e;
                            } else if (!(!lr(c) && !mr(c) || c === n && this.isCollapsed())) {
                                a += c.getTextContent();
                            }
                        }
                    }
                    return a;
                }
                applyDOMRange (e) {
                    let t = Jn();
                    let n = t.getEditorState()._selection;
                    if ((e = Dn(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n)) !== null) {
                        var [r, i] = e;
                        gn(this.anchor, r.key, r.offset, r.type);
                        gn(this.focus, i.key, i.offset, i.type);
                        this._cachedNodes = null;
                    }
                }
                clone () {
                    let e = this.anchor;
                    let t = this.focus;
                    return new vn(new dn(e.key, e.offset, e.type), new dn(t.key, t.offset, t.type), this.format, this.style);
                }
                toggleFormat (e) {
                    this.format = me(this.format, e, null);
                    this.dirty = true;
                }
                setStyle (e) {
                    this.style = e;
                    this.dirty = true;
                }
                hasFormat (e) {
                    return (this.format & q[e]) != 0;
                }
                insertRawText (e) {
                    let t = e.split(/\r?\n/);
                    if (t.length === 1) {
                        this.insertText(e);
                    } else {
                        e = [];
                        let n = t.length;
                        for (let r = 0; r < n; r++) {
                            let i = t[r];
                            if (i !== "") {
                                e.push(br(i));
                            }
                            if (r !== n - 1) {
                                e.push(pr());
                            }
                        }
                        this.insertNodes(e);
                    }
                }
                insertText (e) {
                    var t = this.anchor;
                    var n = this.focus;
                    var r = this.isCollapsed() || t.isBefore(n);
                    var i = this.format;
                    var l = this.style;
                    if (r && t.type === "element") {
                        hn(t, n, i, l);
                    } else if (!(r || n.type !== "element")) {
                        hn(n, t, i, l);
                    }
                    var o = this.getNodes();
                    var s = o.length;
                    var a = r ? n : t;
                    n = (r ? t : n).offset;
                    var u = a.offset;
                    if (!Mr(t = o[0])) {
                        L(26);
                    }
                    r = t.getTextContent().length;
                    var d = t.getParentOrThrow();
                    var c = o[s - 1];
                    if (this.isCollapsed() && n === r && (t.isSegmented() || t.isToken() || !t.canInsertTextAfter() || !d.canInsertTextAfter() && t.getNextSibling() === null)) {
                        var f = t.getNextSibling();
                        if (!(Mr(f) && !_e(f))) {
                            (f = br()).setFormat(i);
                            if (d.canInsertTextAfter()) {
                                t.insertAfter(f);
                            } else {
                                d.insertAfter(f);
                            }
                        }
                        f.select(0, 0);
                        t = f;
                        if (e !== "") {
                            return void this.insertText(e);
                        }
                    } else if (this.isCollapsed() && n === 0 && (t.isSegmented() || t.isToken() || !t.canInsertTextBefore() || !d.canInsertTextBefore() && t.getPreviousSibling() === null)) {
                        if (!(Mr(f = t.getPreviousSibling()) && !_e(f))) {
                            (f = br()).setFormat(i);
                            if (d.canInsertTextBefore()) {
                                t.insertBefore(f);
                            } else {
                                d.insertBefore(f);
                            }
                        }
                        f.select();
                        t = f;
                        if (e !== "") {
                            return void this.insertText(e);
                        }
                    } else if (t.isSegmented() && n !== r) {
                        (d = br(t.getTextContent())).setFormat(i);
                        t.replace(d);
                        t = d;
                    } else if (!(this.isCollapsed() || e === "" || (f = c.getParent(), d.canInsertTextBefore() && d.canInsertTextAfter() && (!sr(f) || f.canInsertTextBefore() && f.canInsertTextAfter())))) {
                        this.insertText("");
                        wn(this.anchor, this.focus, null);
                        return void this.insertText(e);
                    }
                    if (s === 1) {
                        if (t.isToken()) {
                            (e = br(e)).select();
                            t.replace(e);
                        } else {
                            o = t.getFormat();
                            s = t.getStyle();
                            if (n === u && (o !== i || s !== l)) {
                                if (t.getTextContent() !== "") {
                                    (o = br(e)).setFormat(i);
                                    o.setStyle(l);
                                    o.select();
                                    if (n === 0) {
                                        t.insertBefore(o, false);
                                    } else {
                                        [s] = t.splitText(n);
                                        s.insertAfter(o, false);
                                    }
                                    return void(o.isComposing() && this.anchor.type === "text" && (this.anchor.offset -= e.length));
                                }
                                t.setFormat(i);
                                t.setStyle(l);
                            }
                            if ((t = t.spliceText(n, u - n, e, true)).getTextContent() === "") {
                                t.remove();
                            } else if (this.anchor.type === "text") {
                                if (t.isComposing()) {
                                    this.anchor.offset -= e.length;
                                } else {
                                    this.format = o;
                                    this.style = s;
                                }
                            }
                        }
                    } else {
                        i = new Set([...t.getParentKeys(), ...c.getParentKeys()]);
                        f = sr(t) ? t : t.getParentOrThrow();
                        l = sr(c) ? c : c.getParentOrThrow();
                        d = c;
                        if (!f.is(l) && l.isInline()) {
                            do {
                                d = l;
                                l = l.getParentOrThrow();
                            } while (l.isInline());
                        }
                        if (a.type === "text" && (u !== 0 || c.getTextContent() === "") || a.type === "element" && c.getIndexWithinParent() < u) {
                            if (Mr(c) && !c.isToken() && u !== c.getTextContentSize()) {
                                if (c.isSegmented()) {
                                    a = br(c.getTextContent());
                                    c.replace(a);
                                    c = a;
                                }
                                c = c.spliceText(0, u, "");
                                i.add(c.__key);
                            } else if ((a = c.getParentOrThrow()).canBeEmpty() || a.getChildrenSize() !== 1) {
                                c.remove();
                            } else {
                                a.remove();
                            }
                        } else {
                            i.add(c.__key);
                        }
                        a = l.getChildren();
                        u = new Set(o);
                        c = f.is(l);
                        f = f.isInline() && t.getNextSibling() === null ? f : t;
                        for (let e = a.length - 1; e >= 0; e--) {
                            let n = a[e];
                            if (n.is(t) || sr(n) && n.isParentOf(t)) {
                                break;
                            }
                            if (n.isAttached()) {
                                if (!u.has(n) || n.is(d)) {
                                    if (!c) {
                                        f.insertAfter(n, false);
                                    }
                                } else {
                                    n.remove();
                                }
                            }
                        }
                        if (!c) {
                            a = l;
                            u = null;
                            a = l;
                            u = null;
                            for (; a !== null;) {
                                if ((c = (l = a.getChildren()).length) === 0 || l[c - 1].is(u)) {
                                    i.delete(a.__key);
                                    u = a;
                                }
                                a = a.getParent();
                            }
                        }
                        if (t.isToken()) {
                            if (n === r) {
                                t.select();
                            } else {
                                (e = br(e)).select();
                                t.replace(e);
                            }
                        } else if ((t = t.spliceText(n, r - n, e, true)).getTextContent() === "") {
                            t.remove();
                        } else if (t.isComposing() && this.anchor.type === "text") {
                            this.anchor.offset -= e.length;
                        }
                        e = 1;
                        for (; e < s; e++) {
                            t = o[e];
                            if (!i.has(t.__key)) {
                                t.remove();
                            }
                        }
                    }
                }
                removeText () {
                    this.insertText("");
                }
                formatText (e) {
                    if (this.isCollapsed()) {
                        this.toggleFormat(e);
                        Ne(null);
                    } else {
                        var t = this.getNodes();
                        var n = [];
                        for (var r of t) {
                            if (Mr(r)) {
                                n.push(r);
                            }
                        }
                        var i = n.length;
                        if (i === 0) {
                            this.toggleFormat(e);
                            Ne(null);
                        } else {
                            r = this.anchor;
                            var l = this.focus;
                            var o = this.isBackward();
                            t = o ? l : r;
                            r = o ? r : l;
                            var s = 0;
                            var a = n[0];
                            l = t.type === "element" ? 0 : t.offset;
                            if (t.type === "text" && l === a.getTextContentSize()) {
                                s = 1;
                                a = n[1];
                                l = 0;
                            }
                            if (a != null) {
                                o = a.getFormatFlags(e, null);
                                var u = i - 1;
                                var d = n[u];
                                i = r.type === "text" ? r.offset : d.getTextContentSize();
                                if (a.is(d)) {
                                    if (l !== i) {
                                        if (l === 0 && i === a.getTextContentSize()) {
                                            a.setFormat(o);
                                        } else {
                                            e = a.splitText(l, i);
                                            (e = l === 0 ? e[0] : e[1]).setFormat(o);
                                            if (t.type === "text") {
                                                t.set(e.__key, 0, "text");
                                            }
                                            if (r.type === "text") {
                                                r.set(e.__key, i - l, "text");
                                            }
                                        }
                                        this.format = o;
                                    }
                                } else {
                                    if (l !== 0) {
                                        [, a] = a.splitText(l);
                                        l = 0;
                                    }
                                    a.setFormat(o);
                                    var c = d.getFormatFlags(e, o);
                                    if (i > 0) {
                                        if (i !== d.getTextContentSize()) {
                                            [d] = d.splitText(i);
                                        }
                                        d.setFormat(c);
                                    }
                                    s += 1;
                                    for (; s < u; s++) {
                                        let t = n[s];
                                        if (!t.isToken()) {
                                            let n = t.getFormatFlags(e, c);
                                            t.setFormat(n);
                                        }
                                    }
                                    if (t.type === "text") {
                                        t.set(a.__key, l, "text");
                                    }
                                    if (r.type === "text") {
                                        r.set(d.__key, i, "text");
                                    }
                                    this.format = o | c;
                                }
                            }
                        }
                    }
                }
                insertNodes (e, t) {
                    if (!this.isCollapsed()) {
                        var n = this.isBackward() ? this.anchor : this.focus;
                        var r = n.getNode().getNextSibling();
                        r = r ? r.getKey() : null;
                        n = (n = n.getNode().getPreviousSibling()) ? n.getKey() : null;
                        this.removeText();
                        if (this.isCollapsed() && this.focus.type === "element") {
                            if (this.focus.key === r && this.focus.offset === 0) {
                                var i = br();
                                this.focus.getNode().insertBefore(i);
                            } else if (this.focus.key === n && this.focus.offset === this.focus.getNode().getChildrenSize()) {
                                i = br();
                                this.focus.getNode().insertAfter(i);
                            }
                            if (i) {
                                this.focus.set(i.__key, 0, "text");
                                this.anchor.set(i.__key, 0, "text");
                            }
                        }
                    }
                    n = (i = this.anchor).offset;
                    var l = i.getNode();
                    r = l;
                    if (i.type === "element") {
                        r = (r = (i = i.getNode()).getChildAtIndex(n - 1)) === null ? i : r;
                    }
                    i = [];
                    var o = l.getNextSiblings();
                    var s = Je(l) ? null : l.getTopLevelElementOrThrow();
                    if (Mr(l)) {
                        r = l.getTextContent().length;
                        if (n === 0 && r !== 0) {
                            r = (r = l.getPreviousSibling()) !== null ? r : l.getParentOrThrow();
                            i.push(l);
                        } else if (n === r) {
                            r = l;
                        } else {
                            if (l.isToken()) {
                                return false;
                            }
                            [r, l] = l.splitText(n);
                            i.push(l);
                        }
                    }
                    l = r;
                    i.push(...o);
                    o = e[0];
                    var a = false;
                    var u = null;
                    for (let t = 0; t < e.length; t++) {
                        var d = e[t];
                        if (Je(r) || lr(r) || !sr(d) || d.isInline()) {
                            if (a && !sr(d) && !lr(d) && Je(r.getParent())) {
                                L(28);
                            }
                        } else {
                            if (d.is(o)) {
                                if (sr(r) && r.isEmpty() && r.canReplaceWith(d)) {
                                    r.replace(d);
                                    r = d;
                                    a = true;
                                    continue;
                                }
                                if (ye(a = d.getFirstDescendant())) {
                                    for (var c = a.getParentOrThrow(); c.isInline();) {
                                        c = c.getParentOrThrow();
                                    }
                                    a = (u = c.getChildren()).length;
                                    if (sr(r)) {
                                        var f = r.getFirstChild();
                                        for (let e = 0; e < a; e++) {
                                            let t = u[e];
                                            if (f === null) {
                                                r.append(t);
                                            } else {
                                                f.insertAfter(t);
                                            }
                                            f = t;
                                        }
                                    } else {
                                        for (f = a - 1; f >= 0; f--) {
                                            r.insertAfter(u[f]);
                                        }
                                        r = r.getParentOrThrow();
                                    }
                                    u = u[a - 1];
                                    c.remove();
                                    a = true;
                                    if (c.is(d)) {
                                        continue;
                                    }
                                }
                            }
                            if (Mr(r)) {
                                if (s === null) {
                                    L(27);
                                }
                                r = s;
                            }
                        }
                        a = false;
                        if (sr(r) && !r.isInline()) {
                            u = d;
                            if (lr(d) && !d.isInline()) {
                                r = r.insertAfter(d, false);
                            } else if (sr(d)) {
                                if (!(!d.canBeEmpty() && d.isEmpty())) {
                                    if (dr(r)) {
                                        if ((c = r.getChildAtIndex(n)) !== null) {
                                            c.insertBefore(d);
                                        } else {
                                            r.append(d);
                                        }
                                        r = d;
                                    } else if (d.isInline()) {
                                        r.append(d);
                                        r = d;
                                    } else {
                                        r = r.insertAfter(d, false);
                                    }
                                }
                            } else {
                                if ((c = r.getFirstChild()) !== null) {
                                    c.insertBefore(d);
                                } else {
                                    r.append(d);
                                }
                                r = d;
                            }
                        } else if (!sr(d) || sr(d) && d.isInline() || lr(r) && !r.isInline()) {
                            u = d;
                            if (pn(this) && lr(d) && (sr(r) || Mr(r)) && !d.isInline()) {
                                if (Mr(r)) {
                                    c = r.getParentOrThrow();
                                    [r] = r.splitText(n);
                                    r = r.getIndexWithinParent() + 1;
                                } else {
                                    c = r;
                                    r = n;
                                }
                                [, r] = tt(c, r);
                                r = r.insertBefore(d);
                            } else {
                                r = r.insertAfter(d, false);
                            }
                        } else {
                            d = r.getParentOrThrow();
                            if (mr(r)) {
                                r.remove();
                            }
                            r = d;
                            t--;
                        }
                    }
                    if (t) {
                        if (Mr(l)) {
                            l.select();
                        } else if (Mr(e = r.getPreviousSibling())) {
                            e.select();
                        } else {
                            e = r.getIndexWithinParent();
                            r.getParentOrThrow().select(e, e);
                        }
                    }
                    if (sr(r)) {
                        e = Mr(u) ? u : sr(u) && u.isInline() ? u.getLastDescendant() : r.getLastDescendant();
                        if (!t) {
                            if (e === null) {
                                r.select();
                            } else if (Mr(e)) {
                                if (e.getTextContent() === "") {
                                    e.selectPrevious();
                                } else {
                                    e.select();
                                }
                            } else {
                                e.selectNext();
                            }
                        }
                        if (i.length !== 0) {
                            t = r;
                            e = i.length - 1;
                            t = r;
                            e = i.length - 1;
                            for (; e >= 0; e--) {
                                s = (n = i[e]).getParentOrThrow();
                                if (!sr(r) || On(n) || lr(n) && (!n.isInline() || n.isIsolated())) {
                                    if (sr(r) || On(n)) {
                                        if (sr(n) && !n.canInsertAfter(r)) {
                                            if (!sr(l = s.constructor.clone(s))) {
                                                L(29);
                                            }
                                            l.append(n);
                                            r.insertAfter(l);
                                        } else {
                                            r.insertAfter(n);
                                        }
                                    } else {
                                        r.insertBefore(n);
                                        r = n;
                                    }
                                } else {
                                    if (t === r) {
                                        r.append(n);
                                    } else {
                                        r.insertBefore(n);
                                    }
                                    r = n;
                                }
                                if (s.isEmpty() && !s.canBeEmpty()) {
                                    s.remove();
                                }
                            }
                        }
                    } else if (!t) {
                        if (Mr(r)) {
                            r.select();
                        } else {
                            t = r.getParentOrThrow();
                            e = r.getIndexWithinParent() + 1;
                            t.select(e, e);
                        }
                    }
                    return true;
                }
                insertParagraph () {
                    if (!this.isCollapsed()) {
                        this.removeText();
                    }
                    var e = this.anchor;
                    var t = e.offset;
                    var n = [];
                    if (e.type === "text") {
                        var r = e.getNode();
                        var i = r.getNextSiblings().reverse();
                        var l = r.getParentOrThrow();
                        var o = l.isInline();
                        var s = o ? l.getTextContentSize() : r.getTextContentSize();
                        if (t === 0) {
                            i.push(r);
                        } else {
                            if (o) {
                                n = l.getNextSiblings();
                            }
                            if (!(t === s || o && t === r.getTextContentSize())) {
                                [, r] = r.splitText(t);
                                i.push(r);
                            }
                        }
                    } else {
                        if (Je(l = e.getNode())) {
                            i = $r();
                            n = l.getChildAtIndex(t);
                            i.select();
                            return void(n !== null ? n.insertBefore(i, false) : l.append(i));
                        }
                        i = l.getChildren().slice(t).reverse();
                    }
                    r = i.length;
                    if (t === 0 && r > 0 && l.isInline()) {
                        if (sr(i = (n = l.getParentOrThrow()).insertNewAfter(this, false))) {
                            n = n.getChildren();
                            l = 0;
                            n = n.getChildren();
                            l = 0;
                            for (; l < n.length; l++) {
                                i.append(n[l]);
                            }
                        }
                    } else if ((o = l.insertNewAfter(this, false)) === null) {
                        this.insertLineBreak();
                    } else if (sr(o)) {
                        s = l.getFirstChild();
                        if (t === 0 && (l.is(e.getNode()) || s && s.is(e.getNode())) && r > 0) {
                            l.insertBefore(o);
                        } else {
                            l = null;
                            t = n.length;
                            e = o.getParentOrThrow();
                            if (t > 0) {
                                for (s = 0; s < t; s++) {
                                    e.append(n[s]);
                                }
                            }
                            if (r !== 0) {
                                for (n = 0; n < r; n++) {
                                    t = i[n];
                                    if (l === null) {
                                        o.append(t);
                                    } else {
                                        l.insertBefore(t);
                                    }
                                    l = t;
                                }
                            }
                            if (o.canBeEmpty() || o.getChildrenSize() !== 0) {
                                o.selectStart();
                            } else {
                                o.selectPrevious();
                                o.remove();
                            }
                        }
                    }
                }
                insertLineBreak (e) {
                    let t = pr();
                    var n = this.anchor;
                    if (n.type === "element") {
                        if (dr(n = n.getNode())) {
                            this.insertParagraph();
                        }
                    }
                    if (e) {
                        this.insertNodes([t], true);
                    } else if (this.insertNodes([t])) {
                        t.selectNext(0, 0);
                    }
                }
                getCharacterOffsets () {
                    return Nn(this);
                }
                extract () {
                    var e = this.getNodes();
                    var t = e.length;
                    var n = t - 1;
                    var r = this.anchor;
                    let i = this.focus;
                    var l = e[0];
                    let o = e[n];
                    let [s, a] = Nn(this);
                    if (t === 0) {
                        return [];
                    } else if (t === 1) {
                        if (Mr(l) && !this.isCollapsed()) {
                            e = s > a ? a : s;
                            n = l.splitText(e, s > a ? s : a);
                            if ((e = e === 0 ? n[0] : n[1]) != null) {
                                return [e];
                            } else {
                                return [];
                            }
                        } else {
                            return [l];
                        }
                    } else {
                        t = r.isBefore(i);
                        if (Mr(l)) {
                            if ((r = t ? s : a) === l.getTextContentSize()) {
                                e.shift();
                            } else if (r !== 0) {
                                [, l] = l.splitText(r);
                                e[0] = l;
                            }
                        }
                        if (Mr(o)) {
                            l = o.getTextContent().length;
                            if ((t = t ? a : s) === 0) {
                                e.pop();
                            } else if (t !== l) {
                                [o] = o.splitText(t);
                                e[n] = o;
                            }
                        }
                        return e;
                    }
                }
                modify (e, t, n) {
                    var r = this.focus;
                    var i = this.anchor;
                    var l = e === "move";
                    var o = We(r, t);
                    if (lr(o) && !o.isIsolated()) {
                        if (l && o.isKeyboardSelectable()) {
                            (t = bn()).add(o.__key);
                            be(t);
                        } else if (Mr(e = t ? o.getPreviousSibling() : o.getNextSibling())) {
                            o = e.__key;
                            t = t ? e.getTextContent().length : 0;
                            r.set(o, t, "text");
                            if (l) {
                                i.set(o, t, "text");
                            }
                        } else {
                            n = o.getParentOrThrow();
                            if (sr(e)) {
                                n = e.__key;
                                o = t ? e.getChildrenSize() : 0;
                            } else {
                                o = o.getIndexWithinParent();
                                n = n.__key;
                                if (!t) {
                                    o++;
                                }
                            }
                            r.set(n, o, "element");
                            if (l) {
                                i.set(n, o, "element");
                            }
                        }
                    } else if (r = et((i = Jn())._window)) {
                        var s = i._blockCursorElement;
                        var a = i._rootElement;
                        if (!(a === null || s === null || !sr(o) || o.isInline() || o.canBeEmpty())) {
                            Ze(s, i, a);
                        }
                        r.modify(e, t ? "backward" : "forward", n);
                        if (r.rangeCount > 0 && (o = r.getRangeAt(0), i = dr(i = this.anchor.getNode()) ? i : Ue(i), this.applyDOMRange(o), this.dirty = true, !l)) {
                            l = this.getNodes();
                            e = [];
                            n = false;
                            s = 0;
                            for (; s < l.length; s++) {
                                if (Ge(a = l[s], i)) {
                                    e.push(a);
                                } else {
                                    n = true;
                                }
                            }
                            if (n && e.length > 0) {
                                if (t) {
                                    if (sr(t = e[0])) {
                                        t.selectStart();
                                    } else {
                                        t.getParentOrThrow().selectStart();
                                    }
                                } else if (sr(t = e[e.length - 1])) {
                                    t.selectEnd();
                                } else {
                                    t.getParentOrThrow().selectEnd();
                                }
                            }
                            if (!(r.anchorNode === o.startContainer && r.anchorOffset === o.startOffset)) {
                                t = this.focus;
                                r = (l = this.anchor).key;
                                o = l.offset;
                                i = l.type;
                                gn(l, t.key, t.offset, t.type);
                                gn(t, r, o, i);
                                this._cachedNodes = null;
                            }
                        }
                    }
                }
                deleteCharacter (e) {
                    if (this.isCollapsed()) {
                        var t = this.anchor;
                        var n = this.focus;
                        var r = t.getNode();
                        if (!e && (t.type === "element" && sr(r) && t.offset === r.getChildrenSize() || t.type === "text" && t.offset === r.getTextContentSize())) {
                            var i = r.getParent();
                            if (sr(i = r.getNextSibling() || (i === null ? null : i.getNextSibling())) && !i.canExtractContents()) {
                                return;
                            }
                        }
                        if (lr(i = We(n, e)) && !i.isIsolated()) {
                            return void(i.isKeyboardSelectable() && sr(r) && r.getChildrenSize() === 0 ? (r.remove(), e = bn(), e.add(i.__key), be(e)) : i.remove());
                        }
                        this.modify("extend", e, "character");
                        if (this.isCollapsed()) {
                            if (e && t.offset === 0 && (t.type === "element" ? t.getNode() : t.getNode().getParentOrThrow()).collapseAtStart(this)) {
                                return;
                            }
                        } else {
                            i = n.type === "text" ? n.getNode() : null;
                            r = t.type === "text" ? t.getNode() : null;
                            if (i !== null && i.isSegmented()) {
                                t = n.offset;
                                n = i.getTextContentSize();
                                if (i.is(r) || e && t !== n || !e && t !== 0) {
                                    return void Tn(i, e, t);
                                }
                            } else if (r !== null && r.isSegmented() && (t = t.offset, n = r.getTextContentSize(), r.is(i) || e && t !== 0 || !e && t !== n)) {
                                return void Tn(r, e, t);
                            }
                            r = this.anchor;
                            i = this.focus;
                            if ((t = r.getNode()) === (n = i.getNode()) && r.type === "text" && i.type === "text") {
                                var l = r.offset;
                                var o = i.offset;
                                let s = l < o;
                                if ((n = s ? l : o) !== (l = (o = s ? o : l) - 1)) {
                                    if (!Re(t = t.getTextContent().slice(n, o))) {
                                        if (e) {
                                            i.offset = l;
                                        } else {
                                            r.offset = l;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    r = this.isCollapsed();
                    this.removeText();
                    if (e && !r && this.isCollapsed() && this.anchor.type === "element" && this.anchor.offset === 0) {
                        if ((e = this.anchor.getNode()).isEmpty() && dr(e.getParent()) && e.getIndexWithinParent() === 0) {
                            e.collapseAtStart(this);
                        }
                    }
                }
                deleteLine (e) {
                    if (this.isCollapsed()) {
                        if (this.anchor.type === "text") {
                            this.modify("extend", e, "lineboundary");
                        }
                        if ((e ? this.focus : this.anchor).offset === 0) {
                            this.modify("extend", e, "character");
                        }
                    }
                    this.removeText();
                }
                deleteWord (e) {
                    if (this.isCollapsed()) {
                        this.modify("extend", e, "word");
                    }
                    this.removeText();
                }
            }

            function xn (e) {
                return e instanceof _n;
            }

            function Cn (e) {
                let t = e.offset;
                if (e.type === "text") {
                    return t;
                } else if (t === (e = e.getNode()).getChildrenSize()) {
                    return e.getTextContent().length;
                } else {
                    return 0;
                }
            }

            function Nn (e) {
                let t = e.anchor;
                e = e.focus;
                if (t.type === "element" && e.type === "element" && t.key === e.key && t.offset === e.offset) {
                    return [0, 0];
                } else {
                    return [Cn(t), Cn(e)];
                }
            }

            function Tn (e, t, n) {
                let r = e.getTextContent().split(/(?=\s)/g);
                let i = r.length;
                let l = 0;
                let o = 0;
                for (let e = 0; e < i; e++) {
                    let s = e === i - 1;
                    o = l;
                    l += r[e].length;
                    if (t && l === n || l > n || s) {
                        r.splice(e, 1);
                        if (s) {
                            o = undefined;
                        }
                        break;
                    }
                }
                if ((t = r.join("").trim()) === "") {
                    e.remove();
                } else {
                    e.setTextContent(t);
                    e.select(o, o);
                }
            }

            function En (e, t, n, r) {
                var i = t;
                if (e.nodeType === 1) {
                    let s = false;
                    var l = e.childNodes;
                    var o = l.length;
                    if (i === o) {
                        s = true;
                        i = o - 1;
                    }
                    let a = l[i];
                    o = false;
                    if (a === r._blockCursorElement) {
                        a = l[i + 1];
                        o = true;
                    } else if (r._blockCursorElement !== null) {
                        i--;
                    }
                    if (Mr(r = Me(a))) {
                        i = s ? r.getTextContentSize() : 0;
                    } else {
                        if ((l = Me(e)) === null) {
                            return null;
                        }
                        if (sr(l)) {
                            if (t = sr(e = l.getChildAtIndex(i))) {
                                t = e.getParent();
                                t = n === null || t === null || !t.canBeEmpty() || t !== n.getNode();
                            }
                            if (t) {
                                if ((n = s ? e.getLastDescendant() : e.getFirstDescendant()) === null) {
                                    l = e;
                                    i = 0;
                                } else {
                                    l = sr(e = n) ? e : e.getParentOrThrow();
                                }
                            }
                            if (Mr(e)) {
                                r = e;
                                l = null;
                                i = s ? e.getTextContentSize() : 0;
                            } else if (e !== l && s && !o) {
                                i++;
                            }
                        } else {
                            i = l.getIndexWithinParent();
                            i = t === 0 && lr(l) && Me(e) === l ? i : i + 1;
                            l = l.getParentOrThrow();
                        }
                        if (sr(l)) {
                            return new dn(l.__key, i, "element");
                        }
                    }
                } else {
                    r = Me(e);
                }
                if (Mr(r)) {
                    return new dn(r.__key, i, "text");
                } else {
                    return null;
                }
            }

            function Sn (e, t, n) {
                var r = e.offset;
                var i = e.getNode();
                if (r === 0) {
                    r = i.getPreviousSibling();
                    i = i.getParent();
                    if (t) {
                        if ((n || !t) && r === null && sr(i) && i.isInline()) {
                            if (Mr(t = i.getPreviousSibling())) {
                                e.key = t.__key;
                                e.offset = t.getTextContent().length;
                            }
                        }
                    } else if (sr(r) && !n && r.isInline()) {
                        e.key = r.__key;
                        e.offset = r.getChildrenSize();
                        e.type = "element";
                    } else if (Mr(r)) {
                        e.key = r.__key;
                        e.offset = r.getTextContent().length;
                    }
                } else if (r === i.getTextContent().length) {
                    r = i.getNextSibling();
                    i = i.getParent();
                    if (t && sr(r) && r.isInline()) {
                        e.key = r.__key;
                        e.offset = 0;
                        e.type = "element";
                    } else if ((n || t) && r === null && sr(i) && i.isInline() && !i.canInsertTextAfter()) {
                        if (Mr(t = i.getNextSibling())) {
                            e.key = t.__key;
                            e.offset = 0;
                        }
                    }
                }
            }

            function wn (e, t, n) {
                if (e.type === "text" && t.type === "text") {
                    var r = e.isBefore(t);
                    let i = e.is(t);
                    Sn(e, r, i);
                    Sn(t, !r, i);
                    if (i) {
                        t.key = e.key;
                        t.offset = e.offset;
                        t.type = e.type;
                    }
                    if ((r = Jn()).isComposing() && r._compositionKey !== e.key && pn(n)) {
                        r = n.anchor;
                        n = n.focus;
                        gn(e, r.key, r.offset, r.type);
                        gn(t, n.key, n.offset, n.type);
                    }
                }
            }

            function Dn (e, t, n, r, i, l) {
                if (e !== null && n !== null && he(i, e, n)) {
                    if ((t = En(e, t, pn(l) ? l.anchor : null, i)) === null || (r = En(n, r, pn(l) ? l.focus : null, i)) === null || t.type === "element" && r.type === "element" && (e = Me(e), n = Me(n), lr(e) && lr(n))) {
                        return null;
                    } else {
                        wn(t, r, l);
                        return [t, r];
                    }
                } else {
                    return null;
                }
            }

            function On (e) {
                return sr(e) && !e.isInline();
            }

            function kn (e, t, n, r, i, l) {
                let o = Un();
                (e = new vn(new dn(e, t, i), new dn(n, r, l), 0, "")).dirty = true;
                return o._selection = e;
            }

            function bn () {
                return new _n(new Set());
            }

            function Mn (e, t, n) {
                var r = n._window;
                if (r === null) {
                    return null;
                }
                var i = r.event;
                var l = i ? i.type : undefined;
                let o;
                r = l === "selectionchange";
                i = !re && (r || l === "beforeinput" || l === "compositionstart" || l === "compositionend" || l === "click" && i && i.detail === 3 || l === "drop" || l === undefined);
                if (pn(e) && !i) {
                    return e.clone();
                }
                if (t === null) {
                    return null;
                }
                i = t.anchorNode;
                l = t.focusNode;
                o = t.anchorOffset;
                t = t.focusOffset;
                if (r && pn(e) && !he(n, i, l)) {
                    return e.clone();
                }
                if ((n = Dn(i, o, l, t, n, e)) === null) {
                    return null;
                }
                let [s, a] = n;
                return new vn(s, a, pn(e) ? e.format : 0, pn(e) ? e.style : "");
            }

            function Rn () {
                return Un()._selection;
            }

            function An () {
                return Jn()._editorState._selection;
            }

            function $n (e, t, n, r = 1) {
                var i = e.anchor;
                var l = e.focus;
                var o = i.getNode();
                var s = l.getNode();
                if (t.is(o) || t.is(s)) {
                    o = t.__key;
                    if (e.isCollapsed()) {
                        if (n <= (t = i.offset)) {
                            n = Math.max(0, t + r);
                            i.set(o, n, "element");
                            l.set(o, n, "element");
                            Pn(e);
                        }
                    } else {
                        var a = e.isBackward();
                        var u = (s = a ? l : i).getNode();
                        l = (i = a ? i : l).getNode();
                        if (t.is(u)) {
                            if (n <= (u = s.offset)) {
                                s.set(o, Math.max(0, u + r), "element");
                            }
                        }
                        if (t.is(l)) {
                            if (n <= (t = i.offset)) {
                                i.set(o, Math.max(0, t + r), "element");
                            }
                        }
                        Pn(e);
                    }
                }
            }

            function Pn (e) {
                var t = e.anchor;
                var n = t.offset;
                let r = e.focus;
                var i = r.offset;
                var l = t.getNode();
                var o = r.getNode();
                if (e.isCollapsed()) {
                    if (sr(l)) {
                        if (Mr(o = (i = n >= (o = l.getChildrenSize())) ? l.getChildAtIndex(o - 1) : l.getChildAtIndex(n))) {
                            n = 0;
                            if (i) {
                                n = o.getTextContentSize();
                            }
                            t.set(o.__key, n, "text");
                            r.set(o.__key, n, "text");
                        }
                    }
                } else {
                    if (sr(l)) {
                        let r = l.getChildrenSize();
                        if (Mr(n = (e = n >= r) ? l.getChildAtIndex(r - 1) : l.getChildAtIndex(n))) {
                            l = 0;
                            if (e) {
                                l = n.getTextContentSize();
                            }
                            t.set(n.__key, l, "text");
                        }
                    }
                    if (sr(o)) {
                        if (Mr(i = (t = i >= (n = o.getChildrenSize())) ? o.getChildAtIndex(n - 1) : o.getChildAtIndex(i))) {
                            o = 0;
                            if (t) {
                                o = i.getTextContentSize();
                            }
                            r.set(i.__key, o, "text");
                        }
                    }
                }
            }

            function In (e, t, n, r, i) {
                let l = null;
                let o = 0;
                let s = null;
                if (r !== null) {
                    l = r.__key;
                    if (Mr(r)) {
                        o = r.getTextContentSize();
                        s = "text";
                    } else if (sr(r)) {
                        o = r.getChildrenSize();
                        s = "element";
                    }
                } else if (i !== null) {
                    l = i.__key;
                    if (Mr(i)) {
                        s = "text";
                    } else if (sr(i)) {
                        s = "element";
                    }
                }
                if (l !== null && s !== null) {
                    e.set(l, o, s);
                } else {
                    o = t.getIndexWithinParent();
                    if (o === -1) {
                        o = n.getChildrenSize();
                    }
                    e.set(n.__key, o, "element");
                }
            }

            function Ln (e, t, n, r, i) {
                if (e.type === "text") {
                    e.key = n;
                    if (!t) {
                        e.offset += i;
                    }
                } else if (e.offset > r.getIndexWithinParent()) {
                    --e.offset;
                }
            }

            function Fn (e, t, n) {
                let r = [];
                let i = null;
                let l = null;
                e = e.getChildren();
                for (let d = 0; d < e.length; d++) {
                    var o = e[d];
                    if (!Kr(o)) {
                        L(108);
                    }
                    var s = o.getChildren();
                    o = 0;
                    for (let e of s) {
                        for (Fr(e) || L(109); r[d] !== undefined && r[d][o] !== undefined;) {
                            o++;
                        }
                        var a = o;
                        var u = e;
                        let c = {
                            cell: u,
                            startColumn: a,
                            startRow: s = d
                        };
                        let f = u.__rowSpan;
                        let h = u.__colSpan;
                        for (let e = 0; e < f; e++) {
                            if (r[s + e] === undefined) {
                                r[s + e] = [];
                            }
                            for (let t = 0; t < h; t++) {
                                r[s + e][a + t] = c;
                            }
                        }
                        if (t.is(u)) {
                            i = c;
                        }
                        if (n.is(u)) {
                            l = c;
                        }
                        o += e.__colSpan;
                    }
                }
                if (i === null) {
                    L(110);
                }
                if (l === null) {
                    L(111);
                }
                return [r, i, l];
            }
            let Bn = null;
            let Wn = null;
            let zn = false;
            let Kn = false;
            let jn = 0;
            let Yn = {
                characterData: true,
                childList: true,
                subtree: true
            };

            function Gn () {
                return zn || Bn !== null && Bn._readOnly;
            }

            function Hn () {
                if (zn) {
                    L(13);
                }
            }

            function Un () {
                if (Bn === null) {
                    L(15);
                }
                return Bn;
            }

            function Jn () {
                if (Wn === null) {
                    L(16);
                }
                return Wn;
            }

            function Vn (e, t, n) {
                var r = t.__type;
                let i = e._nodes.get(r);
                if (i === undefined) {
                    L(30);
                }
                if ((e = n.get(r)) === undefined) {
                    e = Array.from(i.transforms);
                    n.set(r, e);
                }
                n = e.length;
                r = 0;
                for (; r < n && (e[r](t), t.isAttached()); r++);
            }

            function Xn (e, t) {
                var n = t.get(e.type);
                if (n === undefined) {
                    L(17);
                }
                n = n.klass;
                if (e.type !== n.getType()) {
                    L(18);
                }
                n = n.importJSON(e);
                e = e.children;
                if (sr(n) && Array.isArray(e)) {
                    for (let r = 0; r < e.length; r++) {
                        let i = Xn(e[r], t);
                        n.append(i);
                    }
                }
                return n;
            }

            function qn (e, t) {
                let n = Bn;
                let r = zn;
                let i = Wn;
                Bn = e;
                zn = true;
                Wn = null;
                try {
                    return t();
                } finally {
                    Bn = n;
                    zn = r;
                    Wn = i;
                }
            }

            function Qn (e) {
                let t = e._pendingEditorState;
                let r = e._rootElement;
                let i = e._headless || r === null;
                if (t !== null) {
                    var l = e._editorState;
                    var o = l._selection;
                    var s = t._selection;
                    var a = e._dirtyType !== 0;
                    var u = Bn;
                    var d = zn;
                    var c = Wn;
                    var f = e._updating;
                    var h = e._observer;
                    var g = null;
                    e._pendingEditorState = null;
                    e._editorState = t;
                    if (!i && a && h !== null) {
                        Wn = e;
                        Bn = t;
                        zn = false;
                        e._updating = true;
                        try {
                            let n = e._dirtyType;
                            let i = e._dirtyElements;
                            let o = e._dirtyLeaves;
                            h.disconnect();
                            var _ = i;
                            var p = o;
                            Ct = Nt = xt = "";
                            Tt = n === 2;
                            St = null;
                            ct = e;
                            dt = e._config;
                            ft = e._nodes;
                            ht = ct._listeners.mutation;
                            gt = _;
                            _t = p;
                            pt = l._nodeMap;
                            mt = t._nodeMap;
                            Et = t._readOnly;
                            yt = new Map(e._keyToDOMMap);
                            let s = new Map();
                            vt = s;
                            Lt("root", null);
                            vt = yt = dt = mt = pt = _t = gt = ft = ct = undefined;
                            g = s;
                        } catch (n) {
                            if (n instanceof Error) {
                                e._onError(n);
                            }
                            if (Kn) {
                                throw n;
                            }
                            Pr(e, null, r, t);
                            ue(e);
                            e._dirtyType = 2;
                            Kn = true;
                            Qn(e);
                            return void(Kn = false);
                        } finally {
                            h.observe(r, Yn);
                            e._updating = f;
                            Bn = u;
                            zn = d;
                            Wn = c;
                        }
                    }
                    if (!t._readOnly) {
                        t._readOnly = true;
                    }
                    var m = e._dirtyLeaves;
                    var y = e._dirtyElements;
                    var v = e._normalizedNodes;
                    var x = e._updateTags;
                    var C = e._deferred;
                    if (a) {
                        e._dirtyType = 0;
                        e._cloneNotNeeded.clear();
                        e._dirtyLeaves = new Set();
                        e._dirtyElements = new Map();
                        e._normalizedNodes = new Set();
                        e._updateTags = new Set();
                    }
                    var N;
                    var T = e._decorators;
                    var E = e._pendingDecorators || T;
                    var S = t._nodeMap;
                    for (N in E) {
                        if (!S.has(N)) {
                            if (E === T) {
                                E = De(e);
                            }
                            delete E[N];
                        }
                    }
                    var w = i ? null : et(e._window);
                    if (e._editable && w !== null && (a || s === null || s.dirty)) {
                        Wn = e;
                        Bn = t;
                        try {
                            if (h !== null) {
                                h.disconnect();
                            }
                            if (a || s === null || s.dirty) {
                                let t = e._blockCursorElement;
                                if (t !== null) {
                                    Ze(t, e, r);
                                }
                                e: {
                                    let t = w.anchorNode;
                                    let n = w.focusNode;
                                    let i = w.anchorOffset;
                                    let l = w.focusOffset;
                                    let a = document.activeElement;
                                    if (!(x.has("collaboration") && a !== r || a !== null && fe(a))) {
                                        if (pn(s)) {
                                            var D = s.anchor;
                                            var O = s.focus;
                                            var k = D.key;
                                            var b = O.key;
                                            var M = je(e, k);
                                            var R = je(e, b);
                                            var A = D.offset;
                                            var $ = O.offset;
                                            var P = s.format;
                                            var I = s.style;
                                            var L = s.isCollapsed();
                                            var F = M;
                                            var B = R;
                                            var W = false;
                                            if (D.type === "text") {
                                                F = pe(M);
                                                let e = D.getNode();
                                                W = e.getFormat() !== P || e.getStyle() !== I;
                                            } else if (pn(o) && o.anchor.type === "text") {
                                                W = true;
                                            }
                                            if (O.type === "text") {
                                                B = pe(R);
                                            }
                                            if (F !== null && B !== null) {
                                                if (L && (o === null || W || pn(o) && (o.format !== P || o.style !== I))) {
                                                    var z = performance.now();
                                                    Qt = [P, I, A, k, z];
                                                }
                                                if (i === A && l === $ && t === F && n === B && (w.type !== "Range" || !L) && (a !== null && r.contains(a) || r.focus({
                                                        preventScroll: true
                                                    }), D.type !== "element")) {
                                                    break e;
                                                }
                                                try {
                                                    w.setBaseAndExtent(F, A, B, $);
                                                } catch (e) {}
                                                if (!x.has("skip-scroll-into-view") && s.isCollapsed() && r !== null && r === document.activeElement) {
                                                    let t = s instanceof vn && s.anchor.type === "element" ? F.childNodes[A] || null : w.rangeCount > 0 ? w.getRangeAt(0) : null;
                                                    if (t !== null) {
                                                        let n = t.getBoundingClientRect();
                                                        let i = r.ownerDocument;
                                                        let l = i.defaultView;
                                                        if (l !== null) {
                                                            for (var K, j, {
                                                                    top: Y,
                                                                    bottom: G
                                                                } = n, H = r; H !== null;) {
                                                                let t = H === i.body;
                                                                if (t) {
                                                                    K = 0;
                                                                    j = He(e).innerHeight;
                                                                } else {
                                                                    let e = H.getBoundingClientRect();
                                                                    K = e.top;
                                                                    j = e.bottom;
                                                                }
                                                                let n = 0;
                                                                if (Y < K) {
                                                                    n = -(K - Y);
                                                                } else if (G > j) {
                                                                    n = G - j;
                                                                }
                                                                if (n !== 0) {
                                                                    if (t) {
                                                                        l.scrollBy(0, n);
                                                                    } else {
                                                                        let e = H.scrollTop;
                                                                        H.scrollTop += n;
                                                                        let t = H.scrollTop - e;
                                                                        Y -= t;
                                                                        G -= t;
                                                                    }
                                                                }
                                                                if (t) {
                                                                    break;
                                                                }
                                                                H = Ye(H);
                                                            }
                                                        }
                                                    }
                                                }
                                                Jt = true;
                                            }
                                        } else if (o !== null && he(e, t, n)) {
                                            w.removeAllRanges();
                                        }
                                    }
                                }
                            }
                            e: {
                                let t = e._blockCursorElement;
                                if (pn(s) && s.isCollapsed() && s.anchor.type === "element" && r.contains(document.activeElement)) {
                                    let n = s.anchor;
                                    let i = n.getNode();
                                    let l = n.offset;
                                    let o = i.getChildrenSize();
                                    let a = false;
                                    let u = null;
                                    if (l === o) {
                                        if (Qe(i.getChildAtIndex(l - 1))) {
                                            a = true;
                                        }
                                    } else {
                                        let t = i.getChildAtIndex(l);
                                        if (Qe(t)) {
                                            let n = t.getPreviousSibling();
                                            if (n === null || Qe(n)) {
                                                a = true;
                                                u = e.getElementByKey(t.__key);
                                            }
                                        }
                                    }
                                    if (a) {
                                        let n = e.getElementByKey(i.__key);
                                        if (t === null) {
                                            let n = e._config.theme;
                                            let r = document.createElement("div");
                                            r.contentEditable = "false";
                                            r.setAttribute("data-lexical-cursor", "true");
                                            let i = n.blockCursor;
                                            if (i !== undefined) {
                                                if (typeof i == "string") {
                                                    let e = i.split(" ");
                                                    i = n.blockCursor = e;
                                                }
                                                if (i !== undefined) {
                                                    r.classList.add(...i);
                                                }
                                            }
                                            e._blockCursorElement = t = r;
                                        }
                                        r.style.caretColor = "transparent";
                                        if (u === null) {
                                            n.appendChild(t);
                                        } else {
                                            n.insertBefore(t, u);
                                        }
                                        break e;
                                    }
                                }
                                if (t !== null) {
                                    Ze(t, e, r);
                                }
                            }
                            if (h !== null) {
                                h.observe(r, Yn);
                            }
                        } finally {
                            Wn = c;
                            Bn = u;
                        }
                    }
                    if (g !== null) {
                        var U = g;
                        let t = Array.from(e._listeners.mutation);
                        let n = t.length;
                        for (let e = 0; e < n; e++) {
                            let [n, r] = t[e];
                            let i = U.get(r);
                            if (i !== undefined) {
                                n(i, {
                                    dirtyLeaves: m,
                                    updateTags: x
                                });
                            }
                        }
                    }
                    if (!(pn(s) || s === null || o !== null && o.is(s))) {
                        e.dispatchCommand(n, undefined);
                    }
                    var J = e._pendingDecorators;
                    if (J !== null) {
                        e._decorators = J;
                        e._pendingDecorators = null;
                        Zn("decorator", e, true, J);
                    }
                    var V = Oe(l);
                    var X = Oe(t);
                    if (V !== X) {
                        Zn("textcontent", e, true, X);
                    }
                    Zn("update", e, true, {
                        dirtyElements: y,
                        dirtyLeaves: m,
                        editorState: t,
                        normalizedNodes: v,
                        prevEditorState: l,
                        tags: x
                    });
                    e._deferred = [];
                    if (C.length !== 0) {
                        let t = e._updating;
                        e._updating = true;
                        try {
                            for (let e = 0; e < C.length; e++) {
                                C[e]();
                            }
                        } finally {
                            e._updating = t;
                        }
                    }
                    var q = e._updates;
                    if (q.length !== 0) {
                        let t = q.shift();
                        if (t) {
                            let [n, r] = t;
                            nr(e, n, r);
                        }
                    }
                }
            }

            function Zn (e, t, n, ...r) {
                let i = t._updating;
                t._updating = n;
                try {
                    let n = Array.from(t._listeners[e]);
                    for (e = 0; e < n.length; e++) {
                        n[e].apply(null, r);
                    }
                } finally {
                    t._updating = i;
                }
            }

            function er (e, t, n) {
                if (e._updating === false || Wn !== e) {
                    let r = false;
                    e.update(() => {
                        r = er(e, t, n);
                    });
                    return r;
                }
                let r = Ae(e);
                for (let l = 4; l >= 0; l--) {
                    for (let o = 0; o < r.length; o++) {
                        var i = r[o]._commands.get(t);
                        if (i !== undefined && (i = i[l]) !== undefined) {
                            let t = (i = Array.from(i)).length;
                            for (let r = 0; r < t; r++) {
                                if (i[r](n, e) === true) {
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }

            function tr (e, t) {
                let n = e._updates;
                for (t = t || false; n.length !== 0;) {
                    var r = n.shift();
                    if (r) {
                        let n;
                        let [i, l] = r;
                        if (l !== undefined) {
                            r = l.onUpdate;
                            n = l.tag;
                            if (l.skipTransforms) {
                                t = true;
                            }
                            if (r) {
                                e._deferred.push(r);
                            }
                            if (n) {
                                e._updateTags.add(n);
                            }
                        }
                        i();
                    }
                }
                return t;
            }

            function nr (e, t, n) {
                let r = e._updateTags;
                var i;
                var l = i = false;
                if (n !== undefined) {
                    var o = n.onUpdate;
                    if ((i = n.tag) != null) {
                        r.add(i);
                    }
                    i = n.skipTransforms || false;
                    l = n.discrete || false;
                }
                if (o) {
                    e._deferred.push(o);
                }
                n = e._editorState;
                let s = false;
                if ((o = e._pendingEditorState) === null || o._readOnly) {
                    o = e._pendingEditorState = new hr(new Map((o || n)._nodeMap));
                    s = true;
                }
                o._flushSync = l;
                l = Bn;
                let a = zn;
                let u = Wn;
                let d = e._updating;
                Bn = o;
                zn = false;
                e._updating = true;
                Wn = e;
                try {
                    if (s) {
                        if (e._headless) {
                            if (n._selection != null) {
                                o._selection = n._selection.clone();
                            }
                        } else {
                            o._selection = function (e) {
                                let t = e.getEditorState()._selection;
                                let n = et(e._window);
                                if (xn(t) || yn(t)) {
                                    return t.clone();
                                } else {
                                    return Mn(t, n, e);
                                }
                            }(e);
                        }
                    }
                    let r = e._compositionKey;
                    t();
                    i = tr(e, i);
                    (function (e, t) {
                        t = t.getEditorState()._selection;
                        if (pn(e = e._selection)) {
                            var n = e.anchor;
                            let r;
                            let i = e.focus;
                            if (n.type === "text") {
                                r = n.getNode();
                                r.selectionTransform(t, e);
                            }
                            if (i.type === "text" && r !== (n = i.getNode())) {
                                n.selectionTransform(t, e);
                            }
                        }
                    })(o, e);
                    if (e._dirtyType !== 0) {
                        if (i) {
                            (function (e, t) {
                                t = t._dirtyLeaves;
                                e = e._nodeMap;
                                for (let n of t) {
                                    if (Mr(t = e.get(n)) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable()) {
                                        st(t);
                                    }
                                }
                            })(o, e);
                        } else {
                            (function (e, t) {
                                let n = t._dirtyLeaves;
                                let r = t._dirtyElements;
                                e = e._nodeMap;
                                let i = Te();
                                let l = new Map();
                                var o = n;
                                let s = o.size;
                                for (var a = r, u = a.size; s > 0 || u > 0;) {
                                    if (s > 0) {
                                        t._dirtyLeaves = new Set();
                                        for (let r of o) {
                                            if (Mr(o = e.get(r)) && o.isAttached() && o.isSimpleText() && !o.isUnmergeable()) {
                                                st(o);
                                            }
                                            if (o !== undefined && o !== undefined && o.__key !== i && o.isAttached()) {
                                                Vn(t, o, l);
                                            }
                                            n.add(r);
                                        }
                                        s = (o = t._dirtyLeaves).size;
                                        if (s > 0) {
                                            jn++;
                                            continue;
                                        }
                                    }
                                    t._dirtyLeaves = new Set();
                                    t._dirtyElements = new Map();
                                    for (let n of a) {
                                        a = n[0];
                                        u = n[1];
                                        if (a === "root" || u) {
                                            if ((o = e.get(a)) !== undefined && o !== undefined && o.__key !== i && o.isAttached()) {
                                                Vn(t, o, l);
                                            }
                                            r.set(a, u);
                                        }
                                    }
                                    s = (o = t._dirtyLeaves).size;
                                    u = (a = t._dirtyElements).size;
                                    jn++;
                                }
                                t._dirtyLeaves = n;
                                t._dirtyElements = r;
                            })(o, e);
                        }
                        tr(e);
                        (function (e, t, n, r) {
                            e = e._nodeMap;
                            t = t._nodeMap;
                            for (let r of n) {
                                let i = t.get(r);
                                if (!(i === undefined || i.isAttached())) {
                                    if (!e.has(r)) {
                                        n.delete(r);
                                    }
                                    t.delete(r);
                                }
                            }
                            for (let [i] of r) {
                                if (!((n = t.get(i)) === undefined || n.isAttached())) {
                                    if (sr(n)) {
                                        it(n, i, e, t, r);
                                    }
                                    if (!e.has(i)) {
                                        r.delete(i);
                                    }
                                    t.delete(i);
                                }
                            }
                        })(n, o, e._dirtyLeaves, e._dirtyElements);
                    }
                    if (r !== e._compositionKey) {
                        o._flushSync = true;
                    }
                    let c = o._selection;
                    if (pn(c)) {
                        let e = o._nodeMap;
                        let t = c.focus.key;
                        if (!(e.get(c.anchor.key) !== undefined && e.get(t) !== undefined)) {
                            L(19);
                        }
                    } else if (xn(c) && c._nodes.size === 0) {
                        o._selection = null;
                    }
                } catch (t) {
                    if (t instanceof Error) {
                        e._onError(t);
                    }
                    e._pendingEditorState = n;
                    e._dirtyType = 2;
                    e._cloneNotNeeded.clear();
                    e._dirtyLeaves = new Set();
                    e._dirtyElements.clear();
                    return void Qn(e);
                } finally {
                    Bn = l;
                    zn = a;
                    Wn = u;
                    e._updating = d;
                    jn = 0;
                }
                if (e._dirtyType !== 0 || function (e, t) {
                        t = t.getEditorState()._selection;
                        if ((e = e._selection) !== null) {
                            if (e.dirty || !e.is(t)) {
                                return true;
                            }
                        } else if (t !== null) {
                            return true;
                        }
                        return false;
                    }(o, e)) {
                    if (o._flushSync) {
                        o._flushSync = false;
                        Qn(e);
                    } else if (s) {
                        ce(() => {
                            Qn(e);
                        });
                    }
                } else {
                    o._flushSync = false;
                    if (s) {
                        r.clear();
                        e._deferred = [];
                        e._pendingEditorState = null;
                    }
                }
            }

            function rr (e, t, n) {
                if (e._updating) {
                    e._updates.push([t, n]);
                } else {
                    nr(e, t, n);
                }
            }
            class ir extends un {
                constructor (e) {
                    super(e);
                }
                decorate () {
                    L(47);
                }
                isIsolated () {
                    return false;
                }
                isInline () {
                    return true;
                }
                isKeyboardSelectable () {
                    return true;
                }
            }

            function lr (e) {
                return e instanceof ir;
            }
            class or extends un {
                constructor (e) {
                    super(e);
                    this.__last = this.__first = null;
                    this.__indent = this.__format = this.__size = 0;
                    this.__dir = null;
                }
                getFormat () {
                    return this.getLatest().__format;
                }
                getFormatType () {
                    let e = this.getFormat();
                    return ee[e] || "";
                }
                getIndent () {
                    return this.getLatest().__indent;
                }
                getChildren () {
                    let e = [];
                    let t = this.getFirstChild();
                    for (; t !== null;) {
                        e.push(t);
                        t = t.getNextSibling();
                    }
                    return e;
                }
                getChildrenKeys () {
                    let e = [];
                    let t = this.getFirstChild();
                    for (; t !== null;) {
                        e.push(t.__key);
                        t = t.getNextSibling();
                    }
                    return e;
                }
                getChildrenSize () {
                    return this.getLatest().__size;
                }
                isEmpty () {
                    return this.getChildrenSize() === 0;
                }
                isDirty () {
                    let e = Jn()._dirtyElements;
                    return e !== null && e.has(this.__key);
                }
                isLastChild () {
                    let e = this.getLatest();
                    let t = this.getParentOrThrow().getLastChild();
                    return t !== null && t.is(e);
                }
                getAllTextNodes () {
                    let e = [];
                    let t = this.getFirstChild();
                    for (; t !== null;) {
                        if (Mr(t)) {
                            e.push(t);
                        }
                        if (sr(t)) {
                            let n = t.getAllTextNodes();
                            e.push(...n);
                        }
                        t = t.getNextSibling();
                    }
                    return e;
                }
                getFirstDescendant () {
                    let e = this.getFirstChild();
                    for (; e !== null;) {
                        if (sr(e)) {
                            let t = e.getFirstChild();
                            if (t !== null) {
                                e = t;
                                continue;
                            }
                        }
                        break;
                    }
                    return e;
                }
                getLastDescendant () {
                    let e = this.getLastChild();
                    for (; e !== null;) {
                        if (sr(e)) {
                            let t = e.getLastChild();
                            if (t !== null) {
                                e = t;
                                continue;
                            }
                        }
                        break;
                    }
                    return e;
                }
                getDescendantByIndex (e) {
                    let t = this.getChildren();
                    let n = t.length;
                    if (e >= n) {
                        return sr(e = t[n - 1]) && e.getLastDescendant() || e || null;
                    } else {
                        return sr(e = t[e]) && e.getFirstDescendant() || e || null;
                    }
                }
                getFirstChild () {
                    let e = this.getLatest().__first;
                    if (e === null) {
                        return null;
                    } else {
                        return Ee(e);
                    }
                }
                getFirstChildOrThrow () {
                    let e = this.getFirstChild();
                    if (e === null) {
                        L(45);
                    }
                    return e;
                }
                getLastChild () {
                    let e = this.getLatest().__last;
                    if (e === null) {
                        return null;
                    } else {
                        return Ee(e);
                    }
                }
                getLastChildOrThrow () {
                    let e = this.getLastChild();
                    if (e === null) {
                        L(96);
                    }
                    return e;
                }
                getChildAtIndex (e) {
                    var t = this.getChildrenSize();
                    let n;
                    if (e < t / 2) {
                        n = this.getFirstChild();
                        t = 0;
                        for (; n !== null && t <= e;) {
                            if (t === e) {
                                return n;
                            }
                            n = n.getNextSibling();
                            t++;
                        }
                        return null;
                    }
                    n = this.getLastChild();
                    --t;
                    for (; n !== null && t >= e;) {
                        if (t === e) {
                            return n;
                        }
                        n = n.getPreviousSibling();
                        t--;
                    }
                    return null;
                }
                getTextContent () {
                    let e = "";
                    let t = this.getChildren();
                    let n = t.length;
                    for (let r = 0; r < n; r++) {
                        let i = t[r];
                        e += i.getTextContent();
                        if (sr(i) && r !== n - 1 && !i.isInline()) {
                            e += "\n\n";
                        }
                    }
                    return e;
                }
                getTextContentSize () {
                    let e = 0;
                    let t = this.getChildren();
                    let n = t.length;
                    for (let r = 0; r < n; r++) {
                        let i = t[r];
                        e += i.getTextContentSize();
                        if (sr(i) && r !== n - 1 && !i.isInline()) {
                            e += 2;
                        }
                    }
                    return e;
                }
                getDirection () {
                    return this.getLatest().__dir;
                }
                hasFormat (e) {
                    return e !== "" && (e = Z[e], (this.getFormat() & e) != 0);
                }
                select (e, t) {
                    Hn();
                    let n = Rn();
                    let r = e;
                    let i = t;
                    var l = this.getChildrenSize();
                    if (!this.canBeEmpty()) {
                        if (e === 0 && t === 0) {
                            if (Mr(e = this.getFirstChild()) || sr(e)) {
                                return e.select(0, 0);
                            }
                        } else if (!(e !== undefined && e !== l || t !== undefined && t !== l) && (Mr(e = this.getLastChild()) || sr(e))) {
                            return e.select();
                        }
                    }
                    if (r === undefined) {
                        r = l;
                    }
                    if (i === undefined) {
                        i = l;
                    }
                    l = this.__key;
                    if (pn(n)) {
                        n.anchor.set(l, r, "element");
                        n.focus.set(l, i, "element");
                        n.dirty = true;
                        return n;
                    } else {
                        return kn(l, r, l, i, "element", "element");
                    }
                }
                selectStart () {
                    let e = this.getFirstDescendant();
                    if (sr(e) || Mr(e)) {
                        return e.select(0, 0);
                    } else if (e !== null) {
                        return e.selectPrevious();
                    } else {
                        return this.select(0, 0);
                    }
                }
                selectEnd () {
                    let e = this.getLastDescendant();
                    if (sr(e) || Mr(e)) {
                        return e.select();
                    } else if (e !== null) {
                        return e.selectNext();
                    } else {
                        return this.select();
                    }
                }
                clear () {
                    let e = this.getWritable();
                    this.getChildren().forEach(e => e.remove());
                    return e;
                }
                append (...e) {
                    return this.splice(this.getChildrenSize(), 0, e);
                }
                setDirection (e) {
                    let t = this.getWritable();
                    t.__dir = e;
                    return t;
                }
                setFormat (e) {
                    this.getWritable().__format = e !== "" ? Z[e] : 0;
                    return this;
                }
                setIndent (e) {
                    this.getWritable().__indent = e;
                    return this;
                }
                splice (e, t, n) {
                    let r = n.length;
                    let i = this.getChildrenSize();
                    let l = this.getWritable();
                    let o = l.__key;
                    var s = [];
                    var a = [];
                    let u = this.getChildAtIndex(e + t);
                    let d = null;
                    let c = i - t + r;
                    if (e !== 0) {
                        if (e === i) {
                            d = this.getLastChild();
                        } else {
                            var f = this.getChildAtIndex(e);
                            if (f !== null) {
                                d = f.getPreviousSibling();
                            }
                        }
                    }
                    if (t > 0) {
                        var h = d === null ? this.getFirstChild() : d.getNextSibling();
                        for (f = 0; f < t; f++) {
                            if (h === null) {
                                L(100);
                            }
                            var g = h.getNextSibling();
                            var _ = h.__key;
                            xe(h = h.getWritable());
                            a.push(_);
                            h = g;
                        }
                    }
                    f = d;
                    g = 0;
                    for (; g < r; g++) {
                        _ = n[g];
                        if (f !== null && _.is(f)) {
                            d = f = f.getPreviousSibling();
                        }
                        if ((h = _.getWritable()).__parent === o) {
                            c--;
                        }
                        xe(h);
                        let e = _.__key;
                        if (f === null) {
                            l.__first = e;
                            h.__prev = null;
                        } else {
                            (f = f.getWritable()).__next = e;
                            h.__prev = f.__key;
                        }
                        if (_.__key === o) {
                            L(76);
                        }
                        h.__parent = o;
                        s.push(e);
                        f = _;
                    }
                    if (e + t === i) {
                        if (f !== null) {
                            f.getWritable().__next = null;
                            l.__last = f.__key;
                        }
                    } else if (u !== null) {
                        e = u.getWritable();
                        if (f !== null) {
                            t = f.getWritable();
                            e.__prev = f.__key;
                            t.__next = u.__key;
                        } else {
                            e.__prev = null;
                        }
                    }
                    l.__size = c;
                    if (a.length && pn(e = Rn())) {
                        a = new Set(a);
                        s = new Set(s);
                        let {
                            anchor: t,
                            focus: n
                        } = e;
                        if (ar(t, a, s)) {
                            In(t, t.getNode(), this, d, u);
                        }
                        if (ar(n, a, s)) {
                            In(n, n.getNode(), this, d, u);
                        }
                        if (!(c !== 0 || this.canBeEmpty() || Je(this))) {
                            this.remove();
                        }
                    }
                    return l;
                }
                exportJSON () {
                    return {
                        children: [],
                        direction: this.getDirection(),
                        format: this.getFormatType(),
                        indent: this.getIndent(),
                        type: "element",
                        version: 1
                    };
                }
                insertNewAfter () {
                    return null;
                }
                canInsertTab () {
                    return false;
                }
                canIndent () {
                    return true;
                }
                collapseAtStart () {
                    return false;
                }
                excludeFromCopy () {
                    return false;
                }
                canExtractContents () {
                    return true;
                }
                canReplaceWith () {
                    return true;
                }
                canInsertAfter () {
                    return true;
                }
                canBeEmpty () {
                    return true;
                }
                canInsertTextBefore () {
                    return true;
                }
                canInsertTextAfter () {
                    return true;
                }
                isInline () {
                    return false;
                }
                isShadowRoot () {
                    return false;
                }
                canMergeWith () {
                    return false;
                }
                extractWithChild () {
                    return false;
                }
            }

            function sr (e) {
                return e instanceof or;
            }

            function ar (e, t, n) {
                for (e = e.getNode(); e;) {
                    let r = e.__key;
                    if (t.has(r) && !n.has(r)) {
                        return true;
                    }
                    e = e.getParent();
                }
                return false;
            }
            class ur extends or {
                static getType () {
                    return "root";
                }
                static clone () {
                    return new ur();
                }
                constructor () {
                    super("root");
                    this.__cachedText = null;
                }
                getTopLevelElementOrThrow () {
                    L(51);
                }
                getTextContent () {
                    let e = this.__cachedText;
                    if (!Gn() && Jn()._dirtyType !== 0 || e === null) {
                        return super.getTextContent();
                    } else {
                        return e;
                    }
                }
                remove () {
                    L(52);
                }
                replace () {
                    L(53);
                }
                insertBefore () {
                    L(54);
                }
                insertAfter () {
                    L(55);
                }
                updateDOM () {
                    return false;
                }
                append (...e) {
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        if (!(sr(n) || lr(n))) {
                            L(56);
                        }
                    }
                    return super.append(...e);
                }
                static importJSON (e) {
                    let t = ke();
                    t.setFormat(e.format);
                    t.setIndent(e.indent);
                    t.setDirection(e.direction);
                    return t;
                }
                exportJSON () {
                    return {
                        children: [],
                        direction: this.getDirection(),
                        format: this.getFormatType(),
                        indent: this.getIndent(),
                        type: "root",
                        version: 1
                    };
                }
                collapseAtStart () {
                    return true;
                }
            }

            function dr (e) {
                return e instanceof ur;
            }

            function cr () {
                return new hr(new Map([
                    ["root", new ur()]
                ]));
            }

            function fr (e) {
                let t = e.exportJSON();
                if (t.type !== e.constructor.getType()) {
                    L(58);
                }
                let n = t.children;
                if (sr(e)) {
                    if (!Array.isArray(n)) {
                        L(59);
                    }
                    e = e.getChildren();
                    for (let t = 0; t < e.length; t++) {
                        let r = fr(e[t]);
                        n.push(r);
                    }
                }
                return t;
            }
            class hr {
                constructor (e, t) {
                    this._nodeMap = e;
                    this._selection = t || null;
                    this._readOnly = this._flushSync = false;
                }
                isEmpty () {
                    return this._nodeMap.size === 1 && this._selection === null;
                }
                read (e) {
                    return qn(this, e);
                }
                clone (e) {
                    (e = new hr(this._nodeMap, e === undefined ? this._selection : e))._readOnly = true;
                    return e;
                }
                toJSON () {
                    return qn(this, () => ({
                        root: fr(ke())
                    }));
                }
            }
            class gr extends un {
                static getType () {
                    return "linebreak";
                }
                static clone (e) {
                    return new gr(e.__key);
                }
                constructor (e) {
                    super(e);
                }
                getTextContent () {
                    return "\n";
                }
                createDOM () {
                    return document.createElement("br");
                }
                updateDOM () {
                    return false;
                }
                static importDOM () {
                    return {
                        br: e => {
                            let t = e.parentElement;
                            if (t != null && t.firstChild === e && t.lastChild === e) {
                                return null;
                            } else {
                                return {
                                    conversion: _r,
                                    priority: 0
                                };
                            }
                        }
                    };
                }
                static importJSON () {
                    return pr();
                }
                exportJSON () {
                    return {
                        type: "linebreak",
                        version: 1
                    };
                }
            }

            function _r () {
                return {
                    node: pr()
                };
            }

            function pr () {
                return Xe(new gr());
            }

            function mr (e) {
                return e instanceof gr;
            }

            function yr (e, t) {
                if (t & 16) {
                    return "code";
                } else if (t & 128) {
                    return "mark";
                } else if (t & 32) {
                    return "sub";
                } else if (t & 64) {
                    return "sup";
                } else {
                    return null;
                }
            }

            function vr (e, t) {
                if (t & 1) {
                    return "strong";
                } else if (t & 2) {
                    return "em";
                } else {
                    return "span";
                }
            }

            function xr (e, t, n, r, i) {
                e = r.classList;
                if ((r = Le(i, "base")) !== undefined) {
                    e.add(...r);
                }
                let l = false;
                let o = t & 8 && t & 4;
                var s = n & 8 && n & 4;
                if ((r = Le(i, "underlineStrikethrough")) !== undefined) {
                    if (s) {
                        l = true;
                        if (!o) {
                            e.add(...r);
                        }
                    } else if (o) {
                        e.remove(...r);
                    }
                }
                for (let a in q) {
                    s = q[a];
                    if ((r = Le(i, a)) !== undefined) {
                        if (n & s && (!l || a !== "underline" && a !== "strikethrough")) {
                            if ((t & s) == 0 || o && a === "underline" || a === "strikethrough") {
                                e.add(...r);
                            }
                        } else if (t & s) {
                            e.remove(...r);
                        }
                    }
                }
            }

            function Cr (e, t, n) {
                let r = t.firstChild;
                e += (n = n.isComposing()) ? U : "";
                if (r == null) {
                    t.textContent = e;
                } else if ((t = r.nodeValue) !== e) {
                    if (n || z) {
                        n = t.length;
                        let i = e.length;
                        let l = 0;
                        let o = 0;
                        for (; l < n && l < i && t[l] === e[l];) {
                            l++;
                        }
                        for (; o + l < n && o + l < i && t[n - o - 1] === e[i - o - 1];) {
                            o++;
                        }
                        e = [l, n - l - o, e.slice(l, i - o)];
                        let [s, a, u] = e;
                        if (a !== 0) {
                            r.deleteData(s, a);
                        }
                        r.insertData(s, u);
                    } else {
                        r.nodeValue = e;
                    }
                }
            }

            function Nr (e, t) {
                (t = document.createElement(t)).appendChild(e);
                return t;
            }
            class Tr extends un {
                static getType () {
                    return "text";
                }
                static clone (e) {
                    return new Tr(e.__text, e.__key);
                }
                constructor (e, t) {
                    super(t);
                    this.__text = e;
                    this.__format = 0;
                    this.__style = "";
                    this.__detail = this.__mode = 0;
                }
                getFormat () {
                    return this.getLatest().__format;
                }
                getDetail () {
                    return this.getLatest().__detail;
                }
                getMode () {
                    let e = this.getLatest();
                    return ne[e.__mode];
                }
                getStyle () {
                    return this.getLatest().__style;
                }
                isToken () {
                    return this.getLatest().__mode === 1;
                }
                isComposing () {
                    return this.__key === Te();
                }
                isSegmented () {
                    return this.getLatest().__mode === 2;
                }
                isDirectionless () {
                    return (this.getLatest().__detail & 1) != 0;
                }
                isUnmergeable () {
                    return (this.getLatest().__detail & 2) != 0;
                }
                hasFormat (e) {
                    e = q[e];
                    return (this.getFormat() & e) != 0;
                }
                isSimpleText () {
                    return this.__type === "text" && this.__mode === 0;
                }
                getTextContent () {
                    return this.getLatest().__text;
                }
                getFormatFlags (e, t) {
                    return me(this.getLatest().__format, e, t);
                }
                createDOM (e) {
                    var t = this.__format;
                    var n = yr(0, t);
                    let r = vr(0, t);
                    let i = document.createElement(n === null ? r : n);
                    let l = i;
                    if (n !== null) {
                        l = document.createElement(r);
                        i.appendChild(l);
                    }
                    n = l;
                    Cr(this.__text, n, this);
                    if ((e = e.theme.text) !== undefined) {
                        xr(r, 0, t, n, e);
                    }
                    if ((t = this.__style) !== "") {
                        i.style.cssText = t;
                    }
                    return i;
                }
                updateDOM (e, t, n) {
                    let r = this.__text;
                    var i = e.__format;
                    var l = this.__format;
                    var o = yr(0, i);
                    let s = yr(0, l);
                    var a = vr(0, i);
                    let u = vr(0, l);
                    return (o === null ? a : o) !== (s === null ? u : s) || (o === s && a !== u ? ((i = t.firstChild) == null && L(48), Cr(r, e = o = document.createElement(u), this), (n = n.theme.text) !== undefined && xr(u, 0, l, e, n), t.replaceChild(o, i), false) : (a = t, s !== null && o !== null && (a = t.firstChild) == null && L(49), Cr(r, a, this), (n = n.theme.text) !== undefined && i !== l && xr(u, i, l, a, n), l = this.__style, e.__style !== l && (t.style.cssText = l), false));
                }
                static importDOM () {
                    return {
                        "#text": () => ({
                            conversion: Dr,
                            priority: 0
                        }),
                        b: () => ({
                            conversion: wr,
                            priority: 0
                        }),
                        br: () => ({
                            conversion: Sr,
                            priority: 0
                        }),
                        code: () => ({
                            conversion: kr,
                            priority: 0
                        }),
                        em: () => ({
                            conversion: kr,
                            priority: 0
                        }),
                        i: () => ({
                            conversion: kr,
                            priority: 0
                        }),
                        s: () => ({
                            conversion: kr,
                            priority: 0
                        }),
                        span: () => ({
                            conversion: Er,
                            priority: 0
                        }),
                        strong: () => ({
                            conversion: kr,
                            priority: 0
                        }),
                        sub: () => ({
                            conversion: kr,
                            priority: 0
                        }),
                        sup: () => ({
                            conversion: kr,
                            priority: 0
                        }),
                        u: () => ({
                            conversion: kr,
                            priority: 0
                        })
                    };
                }
                static importJSON (e) {
                    let t = br(e.text);
                    t.setFormat(e.format);
                    t.setDetail(e.detail);
                    t.setMode(e.mode);
                    t.setStyle(e.style);
                    return t;
                }
                exportDOM (e) {
                    ({
                        element: e
                    } = super.exportDOM(e));
                    if (e !== null) {
                        if (this.hasFormat("bold")) {
                            e = Nr(e, "b");
                        }
                        if (this.hasFormat("italic")) {
                            e = Nr(e, "i");
                        }
                        if (this.hasFormat("strikethrough")) {
                            e = Nr(e, "s");
                        }
                        if (this.hasFormat("underline")) {
                            e = Nr(e, "u");
                        }
                    }
                    return {
                        element: e
                    };
                }
                exportJSON () {
                    return {
                        detail: this.getDetail(),
                        format: this.getFormat(),
                        mode: this.getMode(),
                        style: this.getStyle(),
                        text: this.getTextContent(),
                        type: "text",
                        version: 1
                    };
                }
                selectionTransform () {}
                setFormat (e) {
                    let t = this.getWritable();
                    t.__format = typeof e == "string" ? q[e] : e;
                    return t;
                }
                setDetail (e) {
                    let t = this.getWritable();
                    t.__detail = typeof e == "string" ? Q[e] : e;
                    return t;
                }
                setStyle (e) {
                    let t = this.getWritable();
                    t.__style = e;
                    return t;
                }
                toggleFormat (e) {
                    e = q[e];
                    return this.setFormat(this.getFormat() ^ e);
                }
                toggleDirectionless () {
                    let e = this.getWritable();
                    e.__detail ^= 1;
                    return e;
                }
                toggleUnmergeable () {
                    let e = this.getWritable();
                    e.__detail ^= 2;
                    return e;
                }
                setMode (e) {
                    e = te[e];
                    if (this.__mode === e) {
                        return this;
                    }
                    let t = this.getWritable();
                    t.__mode = e;
                    return t;
                }
                setTextContent (e) {
                    if (this.__text === e) {
                        return this;
                    }
                    let t = this.getWritable();
                    t.__text = e;
                    return t;
                }
                select (e, t) {
                    Hn();
                    let n = Rn();
                    var r = this.getTextContent();
                    let i = this.__key;
                    if (typeof r == "string") {
                        r = r.length;
                        if (e === undefined) {
                            e = r;
                        }
                        if (t === undefined) {
                            t = r;
                        }
                    } else {
                        t = e = 0;
                    }
                    if (pn(n)) {
                        if (!((r = Te()) !== n.anchor.key && r !== n.focus.key)) {
                            Ne(i);
                        }
                        n.setTextNodeRange(this, e, this, t);
                        return n;
                    } else {
                        return kn(i, e, i, t, "text", "text");
                    }
                }
                spliceText (e, t, n, r) {
                    let i = this.getWritable();
                    let l = i.__text;
                    let o = n.length;
                    let s = e;
                    if (s < 0) {
                        s = o + s;
                        if (s < 0) {
                            s = 0;
                        }
                    }
                    let a = Rn();
                    if (r && pn(a)) {
                        e += o;
                        a.setTextNodeRange(i, e, i, e);
                    }
                    t = l.slice(0, s) + n + l.slice(s + t);
                    i.__text = t;
                    return i;
                }
                canInsertTextBefore () {
                    return true;
                }
                canInsertTextAfter () {
                    return true;
                }
                canContainTabs () {
                    return false;
                }
                splitText (...e) {
                    Hn();
                    var t = this.getLatest();
                    var n = t.getTextContent();
                    var r = t.__key;
                    var i = Te();
                    var l = new Set(e);
                    e = [];
                    for (var o = n.length, s = "", a = 0; a < o; a++) {
                        if (s !== "" && l.has(a)) {
                            e.push(s);
                            s = "";
                        }
                        s += n[a];
                    }
                    if (s !== "") {
                        e.push(s);
                    }
                    if ((l = e.length) === 0) {
                        return [];
                    }
                    if (e[0] === n) {
                        return [t];
                    }
                    var u = e[0];
                    n = t.getParentOrThrow();
                    a = t.getFormat();
                    let d = t.getStyle();
                    let c = t.__detail;
                    o = false;
                    if (t.isSegmented()) {
                        (s = br(u)).__format = a;
                        s.__style = d;
                        s.__detail = c;
                        o = true;
                    } else {
                        (s = t.getWritable()).__text = u;
                    }
                    t = Rn();
                    s = [s];
                    u = u.length;
                    for (let n = 1; n < l; n++) {
                        var f = e[n];
                        var h = f.length;
                        (f = br(f).getWritable()).__format = a;
                        f.__style = d;
                        f.__detail = c;
                        let l = f.__key;
                        h = u + h;
                        if (pn(t)) {
                            let e = t.anchor;
                            let n = t.focus;
                            if (e.key === r && e.type === "text" && e.offset > u && e.offset <= h) {
                                e.key = l;
                                e.offset -= u;
                                t.dirty = true;
                            }
                            if (n.key === r && n.type === "text" && n.offset > u && n.offset <= h) {
                                n.key = l;
                                n.offset -= u;
                                t.dirty = true;
                            }
                        }
                        if (i === r) {
                            Ne(l);
                        }
                        u = h;
                        s.push(f);
                    }
                    r = this.getPreviousSibling();
                    i = this.getNextSibling();
                    if (r !== null) {
                        Ce(r);
                    }
                    if (i !== null) {
                        Ce(i);
                    }
                    r = n.getWritable();
                    i = this.getIndexWithinParent();
                    if (o) {
                        r.splice(i, 0, s);
                        this.remove();
                    } else {
                        r.splice(i, 1, s);
                    }
                    if (pn(t)) {
                        $n(t, n, i, l - 1);
                    }
                    return s;
                }
                mergeWithSibling (e) {
                    var t = e === this.getPreviousSibling();
                    if (!(t || e === this.getNextSibling())) {
                        L(50);
                    }
                    var n = this.__key;
                    let r = e.__key;
                    let i = this.__text;
                    let l = i.length;
                    if (Te() === r) {
                        Ne(n);
                    }
                    let o = Rn();
                    if (pn(o)) {
                        let i = o.anchor;
                        let s = o.focus;
                        if (i !== null && i.key === r) {
                            Ln(i, t, n, e, l);
                            o.dirty = true;
                        }
                        if (s !== null && s.key === r) {
                            Ln(s, t, n, e, l);
                            o.dirty = true;
                        }
                    }
                    n = e.__text;
                    this.setTextContent(t ? n + i : i + n);
                    t = this.getWritable();
                    e.remove();
                    return t;
                }
                isTextEntity () {
                    return false;
                }
            }

            function Er (e) {
                let t = e.style.fontWeight === "700";
                let n = e.style.textDecoration === "line-through";
                let r = e.style.fontStyle === "italic";
                let i = e.style.textDecoration === "underline";
                let l = e.style.verticalAlign;
                return {
                    forChild: e => Mr(e) ? (t && e.toggleFormat("bold"), n && e.toggleFormat("strikethrough"), r && e.toggleFormat("italic"), i && e.toggleFormat("underline"), l === "sub" && e.toggleFormat("subscript"), l === "super" && e.toggleFormat("superscript"), e) : e,
                    node: null
                };
            }

            function Sr () {
                return {
                    node: pr()
                };
            }

            function wr (e) {
                let t = e.style.fontWeight === "normal";
                return {
                    forChild: e => {
                        if (Mr(e) && !t) {
                            e.toggleFormat("bold");
                        }
                        return e;
                    },
                    node: null
                };
            }

            function Dr (e, t, n) {
                e = e.textContent || "";
                if (!n && /\n/.test(e) && (e = e.replace(/\r?\n/gm, " ")).trim().length === 0) {
                    return {
                        node: null
                    };
                } else {
                    return {
                        node: br(e)
                    };
                }
            }
            let Or = {
                code: "code",
                em: "italic",
                i: "italic",
                s: "strikethrough",
                strong: "bold",
                sub: "subscript",
                sup: "superscript",
                u: "underline"
            };

            function kr (e) {
                let t = Or[e.nodeName.toLowerCase()];
                if (t === undefined) {
                    return {
                        node: null
                    };
                } else {
                    return {
                        forChild: e => {
                            if (Mr(e) && !e.hasFormat(t)) {
                                e.toggleFormat(t);
                            }
                            return e;
                        },
                        node: null
                    };
                }
            }

            function br (e = "") {
                return Xe(new Tr(e));
            }

            function Mr (e) {
                return e instanceof Tr;
            }
            class Rr extends or {
                static getType () {
                    return "paragraph";
                }
                static clone (e) {
                    return new Rr(e.__key);
                }
                createDOM (e) {
                    let t = document.createElement("p");
                    if ((e = Le(e.theme, "paragraph")) !== undefined) {
                        t.classList.add(...e);
                    }
                    return t;
                }
                updateDOM () {
                    return false;
                }
                static importDOM () {
                    return {
                        p: () => ({
                            conversion: Ar,
                            priority: 0
                        })
                    };
                }
                exportDOM (e) {
                    ({
                        element: e
                    } = super.exportDOM(e));
                    if (e && this.isEmpty()) {
                        e.append(document.createElement("br"));
                    }
                    if (e) {
                        var t = this.getFormatType();
                        e.style.textAlign = t;
                        if (t = this.getDirection()) {
                            e.dir = t;
                        }
                        if ((t = this.getIndent()) > 0) {
                            e.style.textIndent = t * 20 + "px";
                        }
                    }
                    return {
                        element: e
                    };
                }
                static importJSON (e) {
                    let t = $r();
                    t.setFormat(e.format);
                    t.setIndent(e.indent);
                    t.setDirection(e.direction);
                    return t;
                }
                exportJSON () {
                    return {
                        ...super.exportJSON(),
                        type: "paragraph",
                        version: 1
                    };
                }
                insertNewAfter (e, t) {
                    e = $r();
                    let n = this.getDirection();
                    e.setDirection(n);
                    this.insertAfter(e, t);
                    return e;
                }
                collapseAtStart () {
                    let e = this.getChildren();
                    if (e.length === 0 || Mr(e[0]) && e[0].getTextContent().trim() === "") {
                        if (this.getNextSibling() !== null) {
                            this.selectNext();
                            this.remove();
                            return true;
                        }
                        if (this.getPreviousSibling() !== null) {
                            this.selectPrevious();
                            this.remove();
                            return true;
                        }
                    }
                    return false;
                }
            }

            function Ar (e) {
                let t = $r();
                if (e.style) {
                    t.setFormat(e.style.textAlign);
                    if ((e = parseInt(e.style.textIndent, 10) / 20) > 0) {
                        t.setIndent(e);
                    }
                }
                return {
                    node: t
                };
            }

            function $r () {
                return Xe(new Rr());
            }

            function Pr (e, t, n, r) {
                let i = e._keyToDOMMap;
                i.clear();
                e._editorState = cr();
                e._pendingEditorState = r;
                e._compositionKey = null;
                e._dirtyType = 0;
                e._cloneNotNeeded.clear();
                e._dirtyLeaves = new Set();
                e._dirtyElements.clear();
                e._normalizedNodes = new Set();
                e._updateTags = new Set();
                e._updates = [];
                e._blockCursorElement = null;
                if ((r = e._observer) !== null) {
                    r.disconnect();
                    e._observer = null;
                }
                if (t !== null) {
                    t.textContent = "";
                }
                if (n !== null) {
                    n.textContent = "";
                    i.set("root", n);
                }
            }
            class Ir {
                constructor (e, t, n, r, i, l) {
                    this._parentEditor = t;
                    this._rootElement = null;
                    this._editorState = e;
                    this._compositionKey = this._pendingEditorState = null;
                    this._deferred = [];
                    this._keyToDOMMap = new Map();
                    this._updates = [];
                    this._updating = false;
                    this._listeners = {
                        decorator: new Set(),
                        editable: new Set(),
                        mutation: new Map(),
                        root: new Set(),
                        textcontent: new Set(),
                        update: new Set()
                    };
                    this._commands = new Map();
                    this._config = r;
                    this._nodes = n;
                    this._decorators = {};
                    this._pendingDecorators = null;
                    this._dirtyType = 0;
                    this._cloneNotNeeded = new Set();
                    this._dirtyLeaves = new Set();
                    this._dirtyElements = new Map();
                    this._normalizedNodes = new Set();
                    this._updateTags = new Set();
                    this._observer = null;
                    this._key = $e();
                    this._onError = i;
                    this._htmlConversions = l;
                    this._editable = true;
                    this._headless = t !== null && t._headless;
                    this._blockCursorElement = this._window = null;
                }
                isComposing () {
                    return this._compositionKey != null;
                }
                registerUpdateListener (e) {
                    let t = this._listeners.update;
                    t.add(e);
                    return () => {
                        t.delete(e);
                    };
                }
                registerEditableListener (e) {
                    let t = this._listeners.editable;
                    t.add(e);
                    return () => {
                        t.delete(e);
                    };
                }
                registerDecoratorListener (e) {
                    let t = this._listeners.decorator;
                    t.add(e);
                    return () => {
                        t.delete(e);
                    };
                }
                registerTextContentListener (e) {
                    let t = this._listeners.textcontent;
                    t.add(e);
                    return () => {
                        t.delete(e);
                    };
                }
                registerRootListener (e) {
                    let t = this._listeners.root;
                    e(this._rootElement, null);
                    t.add(e);
                    return () => {
                        e(null, this._rootElement);
                        t.delete(e);
                    };
                }
                registerCommand (e, t, n) {
                    if (n === undefined) {
                        L(35);
                    }
                    let r = this._commands;
                    if (!r.has(e)) {
                        r.set(e, [new Set(), new Set(), new Set(), new Set(), new Set()]);
                    }
                    let i = r.get(e);
                    if (i === undefined) {
                        L(36);
                    }
                    let l = i[n];
                    l.add(t);
                    return () => {
                        l.delete(t);
                        if (i.every(e => e.size === 0)) {
                            r.delete(e);
                        }
                    };
                }
                registerMutationListener (e, t) {
                    if (this._nodes.get(e.getType()) === undefined) {
                        L(37);
                    }
                    let n = this._listeners.mutation;
                    n.set(t, e);
                    return () => {
                        n.delete(t);
                    };
                }
                registerNodeTransformToKlass (e, t) {
                    e = e.getType();
                    if ((e = this._nodes.get(e)) === undefined) {
                        L(37);
                    }
                    e.transforms.add(t);
                    return e;
                }
                registerNodeTransform (e, t) {
                    var n = this.registerNodeTransformToKlass(e, t);
                    let r = [n];
                    if ((n = n.replaceWithKlass) != null) {
                        n = this.registerNodeTransformToKlass(n, t);
                        r.push(n);
                    }
                    (function (e, t) {
                        rr(e, () => {
                            var e = Un();
                            if (!e.isEmpty()) {
                                if (t === "root") {
                                    ke().markDirty();
                                } else {
                                    e = e._nodeMap;
                                    for (let [, t] of e) {
                                        t.markDirty();
                                    }
                                }
                            }
                        }, e._pendingEditorState === null ? {
                            tag: "history-merge"
                        } : undefined);
                    })(this, e.getType());
                    return () => {
                        r.forEach(e => e.transforms.delete(t));
                    };
                }
                hasNodes (e) {
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t].getType();
                        if (!this._nodes.has(n)) {
                            return false;
                        }
                    }
                    return true;
                }
                dispatchCommand (e, t) {
                    return er(this, e, t);
                }
                getDecorators () {
                    return this._decorators;
                }
                getRootElement () {
                    return this._rootElement;
                }
                getKey () {
                    return this._key;
                }
                setRootElement (e) {
                    let t = this._rootElement;
                    if (e !== t) {
                        let i = Le(this._config.theme, "root");
                        var n = this._pendingEditorState || this._editorState;
                        this._rootElement = e;
                        Pr(this, t, e, n);
                        if (t !== null) {
                            if (!this._config.disableEvents) {
                                if (Ut !== 0) {
                                    Ut--;
                                    if (Ut === 0) {
                                        t.ownerDocument.removeEventListener("selectionchange", sn);
                                    }
                                }
                                if ((n = t.__lexicalEditor) != null) {
                                    if (n._parentEditor !== null) {
                                        var r = Ae(n);
                                        r = r[r.length - 1]._key;
                                        if (on.get(r) === n) {
                                            on.delete(r);
                                        }
                                    } else {
                                        on.delete(n._key);
                                    }
                                    t.__lexicalEditor = null;
                                }
                                n = ln(t);
                                r = 0;
                                for (; r < n.length; r++) {
                                    n[r]();
                                }
                                t.__lexicalEventHandles = [];
                            }
                            if (i != null) {
                                t.classList.remove(...i);
                            }
                        }
                        if (e !== null) {
                            n = (n = e.ownerDocument) && n.defaultView || null;
                            (r = e.style).userSelect = "text";
                            r.whiteSpace = "pre-wrap";
                            r.wordBreak = "break-word";
                            e.setAttribute("data-lexical-editor", "true");
                            this._window = n;
                            this._dirtyType = 2;
                            ue(this);
                            this._updateTags.add("history-merge");
                            Qn(this);
                            if (!this._config.disableEvents) {
                                (function (e, t) {
                                    if (Ut === 0) {
                                        e.ownerDocument.addEventListener("selectionchange", sn);
                                    }
                                    Ut++;
                                    e.__lexicalEditor = t;
                                    let n = ln(e);
                                    for (let r = 0; r < Kt.length; r++) {
                                        let [i, l] = Kt[r];
                                        let o = typeof l == "function" ? e => {
                                            if (e._lexicalHandled !== true) {
                                                e._lexicalHandled = true;
                                                if (t.isEditable()) {
                                                    l(e, t);
                                                }
                                            }
                                        } : e => {
                                            if (e._lexicalHandled !== true && (e._lexicalHandled = true, t.isEditable())) {
                                                switch (i) {
                                                    case "cut":
                                                        return er(t, A, e);
                                                    case "copy":
                                                        return er(t, R, e);
                                                    case "paste":
                                                        return er(t, a, e);
                                                    case "dragstart":
                                                        return er(t, k, e);
                                                    case "dragover":
                                                        return er(t, b, e);
                                                    case "dragend":
                                                        return er(t, M, e);
                                                    case "focus":
                                                        return er(t, $, e);
                                                    case "blur":
                                                        return er(t, P, e);
                                                    case "drop":
                                                        return er(t, O, e);
                                                }
                                            }
                                        };
                                        e.addEventListener(i, o);
                                        n.push(() => {
                                            e.removeEventListener(i, o);
                                        });
                                    }
                                })(e, this);
                            }
                            if (i != null) {
                                e.classList.add(...i);
                            }
                        } else {
                            this._window = null;
                        }
                        Zn("root", this, false, e, t);
                    }
                }
                getElementByKey (e) {
                    return this._keyToDOMMap.get(e) || null;
                }
                getEditorState () {
                    return this._editorState;
                }
                setEditorState (e, t) {
                    if (e.isEmpty()) {
                        L(38);
                    }
                    ae(this);
                    let n = this._pendingEditorState;
                    let r = this._updateTags;
                    t = t !== undefined ? t.tag : null;
                    if (!(n === null || n.isEmpty())) {
                        if (t != null) {
                            r.add(t);
                        }
                        Qn(this);
                    }
                    this._pendingEditorState = e;
                    this._dirtyType = 2;
                    this._dirtyElements.set("root", false);
                    this._compositionKey = null;
                    if (t != null) {
                        r.add(t);
                    }
                    Qn(this);
                }
                parseEditorState (e, t) {
                    e = typeof e == "string" ? JSON.parse(e) : e;
                    let n = cr();
                    let r = Bn;
                    let i = zn;
                    let l = Wn;
                    let o = this._dirtyElements;
                    let s = this._dirtyLeaves;
                    let a = this._cloneNotNeeded;
                    let u = this._dirtyType;
                    this._dirtyElements = new Map();
                    this._dirtyLeaves = new Set();
                    this._cloneNotNeeded = new Set();
                    this._dirtyType = 0;
                    Bn = n;
                    zn = false;
                    Wn = this;
                    try {
                        Xn(e.root, this._nodes);
                        if (t) {
                            t();
                        }
                        n._readOnly = true;
                    } catch (e) {
                        if (e instanceof Error) {
                            this._onError(e);
                        }
                    } finally {
                        this._dirtyElements = o;
                        this._dirtyLeaves = s;
                        this._cloneNotNeeded = a;
                        this._dirtyType = u;
                        Bn = r;
                        zn = i;
                        Wn = l;
                    }
                    return n;
                }
                update (e, t) {
                    rr(this, e, t);
                }
                focus (e, t = {}) {
                    let n = this._rootElement;
                    if (n !== null) {
                        n.setAttribute("autocapitalize", "off");
                        rr(this, () => {
                            let e = Rn();
                            let n = ke();
                            if (e !== null) {
                                e.dirty = true;
                            } else if (n.getChildrenSize() !== 0) {
                                if (t.defaultSelection === "rootStart") {
                                    n.selectStart();
                                } else {
                                    n.selectEnd();
                                }
                            }
                        }, {
                            onUpdate: () => {
                                n.removeAttribute("autocapitalize");
                                if (e) {
                                    e();
                                }
                            },
                            tag: "focus"
                        });
                        if (this._pendingEditorState === null) {
                            n.removeAttribute("autocapitalize");
                        }
                    }
                }
                blur () {
                    var e = this._rootElement;
                    if (e !== null) {
                        e.blur();
                    }
                    if ((e = et(this._window)) !== null) {
                        e.removeAllRanges();
                    }
                }
                isEditable () {
                    return this._editable;
                }
                setEditable (e) {
                    if (this._editable !== e) {
                        this._editable = e;
                        Zn("editable", this, true, e);
                    }
                }
                toJSON () {
                    return {
                        editorState: this._editorState.toJSON()
                    };
                }
            }
            class Lr extends or {
                constructor (e, t) {
                    super(t);
                    this.__colSpan = e;
                    this.__rowSpan = 1;
                }
                exportJSON () {
                    return {
                        ...super.exportJSON(),
                        colSpan: this.__colSpan
                    };
                }
                setColSpan (e) {
                    this.getWritable().__colSpan = e;
                    return this;
                }
                setRowSpan (e) {
                    this.getWritable().__rowSpan = e;
                    return this;
                }
            }

            function Fr (e) {
                return e instanceof Lr;
            }
            class Br extends or {}

            function Wr (e) {
                return e instanceof Br;
            }
            class zr extends or {}

            function Kr (e) {
                return e instanceof zr;
            }
            t.$addUpdateTag = function (e) {
                Hn();
                Jn()._updateTags.add(e);
            };
            t.$applyNodeReplacement = Xe;
            t.$copyNode = Ve;
            t.$createLineBreakNode = pr;
            t.$createNodeSelection = bn;
            t.$createParagraphNode = $r;
            t.$createRangeSelection = function () {
                let e = new dn("root", 0, "element");
                let t = new dn("root", 0, "element");
                return new vn(e, t, 0, "");
            };
            t.$createTextNode = br;
            t.$getAdjacentNode = We;
            t.$getNearestNodeFromDOMNode = we;
            t.$getNearestRootOrShadowRoot = Ue;
            t.$getNodeByKey = Ee;
            t.$getPreviousSelection = An;
            t.$getRoot = ke;
            t.$getSelection = Rn;
            t.$getTextContent = function () {
                let e = Rn();
                if (e === null) {
                    return "";
                } else {
                    return e.getTextContent();
                }
            };
            t.$hasAncestor = Ge;
            t.$insertNodes = function (e, t) {
                let n = Rn();
                if (n === null) {
                    n = ke().selectEnd();
                }
                return n.insertNodes(e, t);
            };
            t.$isDecoratorNode = lr;
            t.$isElementNode = sr;
            t.$isInlineElementOrDecoratorNode = function (e) {
                return sr(e) && e.isInline() || lr(e) && e.isInline();
            };
            t.$isLeafNode = ye;
            t.$isLineBreakNode = mr;
            t.$isNodeSelection = xn;
            t.$isParagraphNode = function (e) {
                return e instanceof Rr;
            };
            t.$isRangeSelection = pn;
            t.$isRootNode = dr;
            t.$isRootOrShadowRoot = Je;
            t.$isTextNode = Mr;
            t.$nodesOfType = function (e) {
                var t = Un();
                let n = t._readOnly;
                let r = e.getType();
                t = t._nodeMap;
                let i = [];
                for (let [, l] of t) {
                    if (l instanceof e && l.__type === r && (n || l.isAttached())) {
                        i.push(l);
                    }
                }
                return i;
            };
            t.$normalizeSelection__EXPERIMENTAL = at;
            t.$parseSerializedNode = function (e) {
                return Xn(e, Jn()._nodes);
            };
            t.$setCompositionKey = Ne;
            t.$setSelection = be;
            t.$splitNode = tt;
            t.BLUR_COMMAND = P;
            t.CAN_REDO_COMMAND = {};
            t.CAN_UNDO_COMMAND = {};
            t.CLEAR_EDITOR_COMMAND = {};
            t.CLEAR_HISTORY_COMMAND = {};
            t.CLICK_COMMAND = r;
            t.COMMAND_PRIORITY_CRITICAL = 4;
            t.COMMAND_PRIORITY_EDITOR = 0;
            t.COMMAND_PRIORITY_HIGH = 3;
            t.COMMAND_PRIORITY_LOW = 1;
            t.COMMAND_PRIORITY_NORMAL = 2;
            t.CONTROLLED_TEXT_INSERTION_COMMAND = s;
            t.COPY_COMMAND = R;
            t.CUT_COMMAND = A;
            t.DELETE_CHARACTER_COMMAND = i;
            t.DELETE_LINE_COMMAND = c;
            t.DELETE_WORD_COMMAND = d;
            t.DEPRECATED_$computeGridMap = Fn;
            t.DEPRECATED_$createGridSelection = function () {
                let e = new dn("root", 0, "element");
                let t = new dn("root", 0, "element");
                return new mn("root", e, t);
            };
            t.DEPRECATED_$getNodeTriplet = function (e) {
                if (!(e instanceof Lr)) {
                    if (e instanceof un) {
                        if (!Fr(e = nt(e, Fr))) {
                            throw Error("Expected to find a parent GridCellNode");
                        }
                    } else if (!Fr(e = nt(e.getNode(), Fr))) {
                        throw Error("Expected to find a parent GridCellNode");
                    }
                }
                let t = e.getParent();
                if (!Kr(t)) {
                    throw Error("Expected GridCellNode to have a parent GridRowNode");
                }
                let n = t.getParent();
                if (!Wr(n)) {
                    throw Error("Expected GridRowNode to have a parent GridNode");
                }
                return [e, t, n];
            };
            t.DEPRECATED_$isGridCellNode = Fr;
            t.DEPRECATED_$isGridNode = Wr;
            t.DEPRECATED_$isGridRowNode = Kr;
            t.DEPRECATED_$isGridSelection = yn;
            t.DEPRECATED_GridCellNode = Lr;
            t.DEPRECATED_GridNode = Br;
            t.DEPRECATED_GridRowNode = zr;
            t.DRAGEND_COMMAND = M;
            t.DRAGOVER_COMMAND = b;
            t.DRAGSTART_COMMAND = k;
            t.DROP_COMMAND = O;
            t.DecoratorNode = ir;
            t.ElementNode = or;
            t.FOCUS_COMMAND = $;
            t.FORMAT_ELEMENT_COMMAND = {};
            t.FORMAT_TEXT_COMMAND = f;
            t.INDENT_CONTENT_COMMAND = {};
            t.INSERT_LINE_BREAK_COMMAND = l;
            t.INSERT_PARAGRAPH_COMMAND = o;
            t.KEY_ARROW_DOWN_COMMAND = C;
            t.KEY_ARROW_LEFT_COMMAND = y;
            t.KEY_ARROW_RIGHT_COMMAND = p;
            t.KEY_ARROW_UP_COMMAND = x;
            t.KEY_BACKSPACE_COMMAND = E;
            t.KEY_DELETE_COMMAND = w;
            t.KEY_DOWN_COMMAND = _;
            t.KEY_ENTER_COMMAND = N;
            t.KEY_ESCAPE_COMMAND = S;
            t.KEY_MODIFIER_COMMAND = I;
            t.KEY_SPACE_COMMAND = T;
            t.KEY_TAB_COMMAND = D;
            t.LineBreakNode = gr;
            t.MOVE_TO_END = m;
            t.MOVE_TO_START = v;
            t.OUTDENT_CONTENT_COMMAND = {};
            t.PASTE_COMMAND = a;
            t.ParagraphNode = Rr;
            t.REDO_COMMAND = g;
            t.REMOVE_TEXT_COMMAND = u;
            t.RootNode = ur;
            t.SELECTION_CHANGE_COMMAND = n;
            t.TextNode = Tr;
            t.UNDO_COMMAND = h;
            t.createCommand = function () {
                return {};
            };
            t.createEditor = function (e) {
                var t = e || {};
                var n = Wn;
                var r = t.theme || {};
                let i = e === undefined ? n : t.parentEditor || null;
                let l = t.disableEvents || false;
                let o = cr();
                let s = t.namespace || (i !== null ? i._config.namespace : $e());
                let a = t.editorState;
                let u = [ur, Tr, gr, Rr, ...(t.nodes || [])];
                let d = t.onError;
                t = t.editable === undefined || t.editable;
                if (e === undefined && n !== null) {
                    e = n._nodes;
                } else {
                    e = new Map();
                    n = 0;
                    e = new Map();
                    n = 0;
                    for (; n < u.length; n++) {
                        let t = u[n];
                        let r = null;
                        var c = null;
                        if (typeof t != "function") {
                            t = (c = t).replace;
                            r = c.with;
                            c = c.withKlass ? c.withKlass : null;
                        }
                        let i = t.getType();
                        let l = t.transform();
                        let o = new Set();
                        if (l !== null) {
                            o.add(l);
                        }
                        e.set(i, {
                            klass: t,
                            replace: r,
                            replaceWithKlass: c,
                            transforms: o
                        });
                    }
                }
                r = new Ir(o, i, e, {
                    disableEvents: l,
                    namespace: s,
                    theme: r
                }, d || console.error, function (e) {
                    let t = new Map();
                    let n = new Set();
                    e.forEach(e => {
                        if ((e = e.klass.importDOM != null ? e.klass.importDOM.bind(e.klass) : null) != null && !n.has(e)) {
                            n.add(e);
                            var r = e();
                            if (r !== null) {
                                Object.keys(r).forEach(e => {
                                    let n = t.get(e);
                                    if (n === undefined) {
                                        n = [];
                                        t.set(e, n);
                                    }
                                    n.push(r[e]);
                                });
                            }
                        }
                    });
                    return t;
                }(e), t);
                if (a !== undefined) {
                    r._pendingEditorState = a;
                    r._dirtyType = 2;
                }
                return r;
            };
            t.getNearestEditorFromDOMNode = ge;
            t.isSelectionWithinEditor = he;
        },
        375933: (e, t, n) => {
            var r;
            ! function () {
                function i (e, t, n) {
                    return e.call.apply(e.bind, arguments);
                }

                function l (e, t, n) {
                    if (!e) {
                        throw Error();
                    }
                    if (arguments.length > 2) {
                        var r = Array.prototype.slice.call(arguments, 2);
                        return function () {
                            var n = Array.prototype.slice.call(arguments);
                            Array.prototype.unshift.apply(n, r);
                            return e.apply(t, n);
                        };
                    }
                    return function () {
                        return e.apply(t, arguments);
                    };
                }

                function o (e, t, n) {
                    return (o = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? i : l).apply(null, arguments);
                }
                var s = Date.now || function () {
                    return +new Date();
                };

                function a (e, t) {
                    this.a = e;
                    this.o = t || e;
                    this.c = this.o.document;
                }
                var u = !!window.FontFace;

                function d (e, t, n, r) {
                    t = e.c.createElement(t);
                    if (n) {
                        for (var i in n) {
                            if (n.hasOwnProperty(i)) {
                                if (i == "style") {
                                    t.style.cssText = n[i];
                                } else {
                                    t.setAttribute(i, n[i]);
                                }
                            }
                        }
                    }
                    if (r) {
                        t.appendChild(e.c.createTextNode(r));
                    }
                    return t;
                }

                function c (e, t, n) {
                    if (!(e = e.c.getElementsByTagName(t)[0])) {
                        e = document.documentElement;
                    }
                    e.insertBefore(n, e.lastChild);
                }

                function f (e) {
                    if (e.parentNode) {
                        e.parentNode.removeChild(e);
                    }
                }

                function h (e, t, n) {
                    t = t || [];
                    n = n || [];
                    for (var r = e.className.split(/\s+/), i = 0; i < t.length; i += 1) {
                        for (var l = false, o = 0; o < r.length; o += 1) {
                            if (t[i] === r[o]) {
                                l = true;
                                break;
                            }
                        }
                        if (!l) {
                            r.push(t[i]);
                        }
                    }
                    t = [];
                    i = 0;
                    for (; i < r.length; i += 1) {
                        l = false;
                        o = 0;
                        for (; o < n.length; o += 1) {
                            if (r[i] === n[o]) {
                                l = true;
                                break;
                            }
                        }
                        if (!l) {
                            t.push(r[i]);
                        }
                    }
                    e.className = t.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
                }

                function g (e, t) {
                    for (var n = e.className.split(/\s+/), r = 0, i = n.length; r < i; r++) {
                        if (n[r] == t) {
                            return true;
                        }
                    }
                    return false;
                }

                function _ (e, t, n) {
                    function r () {
                        if (s && i && l) {
                            s(o);
                            s = null;
                        }
                    }
                    t = d(e, "link", {
                        rel: "stylesheet",
                        href: t,
                        media: "all"
                    });
                    var i = false;
                    var l = true;
                    var o = null;
                    var s = n || null;
                    if (u) {
                        t.onload = function () {
                            i = true;
                            r();
                        };
                        t.onerror = function () {
                            i = true;
                            o = Error("Stylesheet failed to load");
                            r();
                        };
                    } else {
                        setTimeout(function () {
                            i = true;
                            r();
                        }, 0);
                    }
                    c(e, "head", t);
                }

                function p (e, t, n, r) {
                    var i = e.c.getElementsByTagName("head")[0];
                    if (i) {
                        var l = d(e, "script", {
                            src: t
                        });
                        var o = false;
                        l.onload = l.onreadystatechange = function () {
                            if (!(o || this.readyState && this.readyState != "loaded" && this.readyState != "complete")) {
                                o = true;
                                if (n) {
                                    n(null);
                                }
                                l.onload = l.onreadystatechange = null;
                                if (l.parentNode.tagName == "HEAD") {
                                    i.removeChild(l);
                                }
                            }
                        };
                        i.appendChild(l);
                        setTimeout(function () {
                            if (!o) {
                                o = true;
                                if (n) {
                                    n(Error("Script load timeout"));
                                }
                            }
                        }, r || 5000);
                        return l;
                    }
                    return null;
                }

                function m () {
                    this.a = 0;
                    this.c = null;
                }

                function y (e) {
                    e.a++;
                    return function () {
                        e.a--;
                        x(e);
                    };
                }

                function v (e, t) {
                    e.c = t;
                    x(e);
                }

                function x (e) {
                    if (e.a == 0 && e.c) {
                        e.c();
                        e.c = null;
                    }
                }

                function C (e) {
                    this.a = e || "-";
                }

                function N (e, t) {
                    this.c = e;
                    this.f = 4;
                    this.a = "n";
                    var n = (t || "n4").match(/^([nio])([1-9])$/i);
                    if (n) {
                        this.a = n[1];
                        this.f = parseInt(n[2], 10);
                    }
                }

                function T (e) {
                    var t = [];
                    e = e.split(/,\s*/);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n].replace(/['"]/g, "");
                        if (r.indexOf(" ") != -1 || /^\d/.test(r)) {
                            t.push("'" + r + "'");
                        } else {
                            t.push(r);
                        }
                    }
                    return t.join(",");
                }

                function E (e) {
                    return e.a + e.f;
                }

                function S (e) {
                    var t = "normal";
                    if (e.a === "o") {
                        t = "oblique";
                    } else if (e.a === "i") {
                        t = "italic";
                    }
                    return t;
                }

                function w (e) {
                    var t = 4;
                    var n = "n";
                    var r = null;
                    if (e) {
                        if ((r = e.match(/(normal|oblique|italic)/i)) && r[1]) {
                            n = r[1].substr(0, 1).toLowerCase();
                        }
                        if ((r = e.match(/([1-9]00|normal|bold)/i)) && r[1]) {
                            if (/bold/i.test(r[1])) {
                                t = 7;
                            } else if (/[1-9]00/.test(r[1])) {
                                t = parseInt(r[1].substr(0, 1), 10);
                            }
                        }
                    }
                    return n + t;
                }

                function D (e, t) {
                    this.c = e;
                    this.f = e.o.document.documentElement;
                    this.h = t;
                    this.a = new C("-");
                    this.j = t.events !== false;
                    this.g = t.classes !== false;
                }

                function O (e) {
                    if (e.g) {
                        var t = g(e.f, e.a.c("wf", "active"));
                        var n = [];
                        var r = [e.a.c("wf", "loading")];
                        if (!t) {
                            n.push(e.a.c("wf", "inactive"));
                        }
                        h(e.f, n, r);
                    }
                    k(e, "inactive");
                }

                function k (e, t, n) {
                    if (e.j && e.h[t]) {
                        if (n) {
                            e.h[t](n.c, E(n));
                        } else {
                            e.h[t]();
                        }
                    }
                }

                function b () {
                    this.c = {};
                }

                function M (e, t) {
                    this.c = e;
                    this.f = t;
                    this.a = d(this.c, "span", {
                        "aria-hidden": "true"
                    }, this.f);
                }

                function R (e) {
                    c(e.c, "body", e.a);
                }

                function A (e) {
                    return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + T(e.c) + ";font-style:" + S(e) + ";font-weight:" + e.f + "00;";
                }

                function $ (e, t, n, r, i, l) {
                    this.g = e;
                    this.j = t;
                    this.a = r;
                    this.c = n;
                    this.f = i || 3000;
                    this.h = l || undefined;
                }

                function P (e, t, n, r, i, l, o) {
                    this.v = e;
                    this.B = t;
                    this.c = n;
                    this.a = r;
                    this.s = o || "BESbswy";
                    this.f = {};
                    this.w = i || 3000;
                    this.u = l || null;
                    this.m = this.j = this.h = this.g = null;
                    this.g = new M(this.c, this.s);
                    this.h = new M(this.c, this.s);
                    this.j = new M(this.c, this.s);
                    this.m = new M(this.c, this.s);
                    e = A(e = new N(this.a.c + ",serif", E(this.a)));
                    this.g.a.style.cssText = e;
                    e = A(e = new N(this.a.c + ",sans-serif", E(this.a)));
                    this.h.a.style.cssText = e;
                    e = A(e = new N("serif", E(this.a)));
                    this.j.a.style.cssText = e;
                    e = A(e = new N("sans-serif", E(this.a)));
                    this.m.a.style.cssText = e;
                    R(this.g);
                    R(this.h);
                    R(this.j);
                    R(this.m);
                }
                C.prototype.c = function (e) {
                    for (var t = [], n = 0; n < arguments.length; n++) {
                        t.push(arguments[n].replace(/[\W_]+/g, "").toLowerCase());
                    }
                    return t.join(this.a);
                };
                $.prototype.start = function () {
                    var e = this.c.o.document;
                    var t = this;
                    var n = s();
                    var r = new Promise(function (r, i) {
                        ! function l () {
                            if (s() - n >= t.f) {
                                i();
                            } else {
                                e.fonts.load(function (e) {
                                    return S(e) + " " + e.f + "00 300px " + T(e.c);
                                }(t.a), t.h).then(function (e) {
                                    if (e.length >= 1) {
                                        r();
                                    } else {
                                        setTimeout(l, 25);
                                    }
                                }, function () {
                                    i();
                                });
                            }
                        }();
                    });
                    var i = null;
                    var l = new Promise(function (e, n) {
                        i = setTimeout(n, t.f);
                    });
                    Promise.race([l, r]).then(function () {
                        if (i) {
                            clearTimeout(i);
                            i = null;
                        }
                        t.g(t.a);
                    }, function () {
                        t.j(t.a);
                    });
                };
                var I = {
                    D: "serif",
                    C: "sans-serif"
                };
                var L = null;

                function F () {
                    if (L === null) {
                        var e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
                        L = !!e && (parseInt(e[1], 10) < 536 || parseInt(e[1], 10) === 536 && parseInt(e[2], 10) <= 11);
                    }
                    return L;
                }

                function B (e, t, n) {
                    for (var r in I) {
                        if (I.hasOwnProperty(r) && t === e.f[I[r]] && n === e.f[I[r]]) {
                            return true;
                        }
                    }
                    return false;
                }

                function W (e) {
                    var t;
                    var n = e.g.a.offsetWidth;
                    var r = e.h.a.offsetWidth;
                    if (!(t = n === e.f.serif && r === e.f["sans-serif"])) {
                        t = F() && B(e, n, r);
                    }
                    if (t) {
                        if (s() - e.A >= e.w) {
                            if (F() && B(e, n, r) && (e.u === null || e.u.hasOwnProperty(e.a.c))) {
                                z(e, e.v);
                            } else {
                                z(e, e.B);
                            }
                        } else {
                            (function (e) {
                                setTimeout(o(function () {
                                    W(this);
                                }, e), 50);
                            })(e);
                        }
                    } else {
                        z(e, e.v);
                    }
                }

                function z (e, t) {
                    setTimeout(o(function () {
                        f(this.g.a);
                        f(this.h.a);
                        f(this.j.a);
                        f(this.m.a);
                        t(this.a);
                    }, e), 0);
                }

                function K (e, t, n) {
                    this.c = e;
                    this.a = t;
                    this.f = 0;
                    this.m = this.j = false;
                    this.s = n;
                }
                P.prototype.start = function () {
                    this.f.serif = this.j.a.offsetWidth;
                    this.f["sans-serif"] = this.m.a.offsetWidth;
                    this.A = s();
                    W(this);
                };
                var j = null;

                function Y (e) {
                    if (--e.f == 0 && e.j) {
                        if (e.m) {
                            if ((e = e.a).g) {
                                h(e.f, [e.a.c("wf", "active")], [e.a.c("wf", "loading"), e.a.c("wf", "inactive")]);
                            }
                            k(e, "active");
                        } else {
                            O(e.a);
                        }
                    }
                }

                function G (e) {
                    this.j = e;
                    this.a = new b();
                    this.h = 0;
                    this.f = this.g = true;
                }

                function H (e, t, n, r, i) {
                    var l = --e.h == 0;
                    if (e.f || e.g) {
                        setTimeout(function () {
                            var e = i || null;
                            var s = r || {};
                            if (n.length === 0 && l) {
                                O(t.a);
                            } else {
                                t.f += n.length;
                                if (l) {
                                    t.j = l;
                                }
                                var a;
                                var u = [];
                                for (a = 0; a < n.length; a++) {
                                    var d = n[a];
                                    var c = s[d.c];
                                    var f = t.a;
                                    var g = d;
                                    if (f.g) {
                                        h(f.f, [f.a.c("wf", g.c, E(g).toString(), "loading")]);
                                    }
                                    k(f, "fontloading", g);
                                    f = null;
                                    if (j === null) {
                                        if (window.FontFace) {
                                            g = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);
                                            var _ = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                                            j = g ? parseInt(g[1], 10) > 42 : !_;
                                        } else {
                                            j = false;
                                        }
                                    }
                                    f = j ? new $(o(t.g, t), o(t.h, t), t.c, d, t.s, c) : new P(o(t.g, t), o(t.h, t), t.c, d, t.s, e, c);
                                    u.push(f);
                                }
                                for (a = 0; a < u.length; a++) {
                                    u[a].start();
                                }
                            }
                        }, 0);
                    }
                }

                function U (e, t) {
                    this.c = e;
                    this.a = t;
                }

                function J (e, t) {
                    this.c = e;
                    this.a = t;
                }

                function V (e, t) {
                    this.c = e || X;
                    this.a = [];
                    this.f = [];
                    this.g = t || "";
                }
                K.prototype.g = function (e) {
                    var t = this.a;
                    if (t.g) {
                        h(t.f, [t.a.c("wf", e.c, E(e).toString(), "active")], [t.a.c("wf", e.c, E(e).toString(), "loading"), t.a.c("wf", e.c, E(e).toString(), "inactive")]);
                    }
                    k(t, "fontactive", e);
                    this.m = true;
                    Y(this);
                };
                K.prototype.h = function (e) {
                    var t = this.a;
                    if (t.g) {
                        var n = g(t.f, t.a.c("wf", e.c, E(e).toString(), "active"));
                        var r = [];
                        var i = [t.a.c("wf", e.c, E(e).toString(), "loading")];
                        if (!n) {
                            r.push(t.a.c("wf", e.c, E(e).toString(), "inactive"));
                        }
                        h(t.f, r, i);
                    }
                    k(t, "fontinactive", e);
                    Y(this);
                };
                G.prototype.load = function (e) {
                    this.c = new a(this.j, e.context || this.j);
                    this.g = e.events !== false;
                    this.f = e.classes !== false;
                    (function (e, t, n) {
                        var r = [];
                        var i = n.timeout;
                        ! function (e) {
                            if (e.g) {
                                h(e.f, [e.a.c("wf", "loading")]);
                            }
                            k(e, "loading");
                        }(t);
                        r = function (e, t, n) {
                            var r;
                            var i = [];
                            for (r in t) {
                                if (t.hasOwnProperty(r)) {
                                    var l = e.c[r];
                                    if (l) {
                                        i.push(l(t[r], n));
                                    }
                                }
                            }
                            return i;
                        }(e.a, n, e.c);
                        var l = new K(e.c, t, i);
                        e.h = r.length;
                        t = 0;
                        n = r.length;
                        for (; t < n; t++) {
                            r[t].load(function (t, n, r) {
                                H(e, l, t, n, r);
                            });
                        }
                    })(this, new D(this.c, e), e);
                };
                U.prototype.load = function (e) {
                    function t () {
                        if (l["__mti_fntLst" + r]) {
                            var n;
                            var i = l["__mti_fntLst" + r]();
                            var o = [];
                            if (i) {
                                for (var s = 0; s < i.length; s++) {
                                    var a = i[s].fontfamily;
                                    if (i[s].fontStyle != null && i[s].fontWeight != null) {
                                        n = i[s].fontStyle + i[s].fontWeight;
                                        o.push(new N(a, n));
                                    } else {
                                        o.push(new N(a));
                                    }
                                }
                            }
                            e(o);
                        } else {
                            setTimeout(function () {
                                t();
                            }, 50);
                        }
                    }
                    var n = this;
                    var r = n.a.projectId;
                    var i = n.a.version;
                    if (r) {
                        var l = n.c.o;
                        p(this.c, (n.a.api || "https://fast.fonts.net/jsapi") + "/" + r + ".js" + (i ? "?v=" + i : ""), function (i) {
                            if (i) {
                                e([]);
                            } else {
                                l["__MonotypeConfiguration__" + r] = function () {
                                    return n.a;
                                };
                                t();
                            }
                        }).id = "__MonotypeAPIScript__" + r;
                    } else {
                        e([]);
                    }
                };
                J.prototype.load = function (e) {
                    var t;
                    var n;
                    var r = this.a.urls || [];
                    var i = this.a.families || [];
                    var l = this.a.testStrings || {};
                    var o = new m();
                    t = 0;
                    n = r.length;
                    for (; t < n; t++) {
                        _(this.c, r[t], y(o));
                    }
                    var s = [];
                    t = 0;
                    n = i.length;
                    for (; t < n; t++) {
                        if ((r = i[t].split(":"))[1]) {
                            for (var a = r[1].split(","), u = 0; u < a.length; u += 1) {
                                s.push(new N(r[0], a[u]));
                            }
                        } else {
                            s.push(new N(r[0]));
                        }
                    }
                    v(o, function () {
                        e(s, l);
                    });
                };
                var X = "https://fonts.googleapis.com/css";

                function q (e) {
                    this.f = e;
                    this.a = [];
                    this.c = {};
                }
                var Q = {
                    latin: "BESbswy",
                    "latin-ext": "çöüğş",
                    cyrillic: "йяЖ",
                    greek: "αβΣ",
                    khmer: "កខគ",
                    Hanuman: "កខគ"
                };
                var Z = {
                    thin: "1",
                    extralight: "2",
                    "extra-light": "2",
                    ultralight: "2",
                    "ultra-light": "2",
                    light: "3",
                    regular: "4",
                    book: "4",
                    medium: "5",
                    "semi-bold": "6",
                    semibold: "6",
                    "demi-bold": "6",
                    demibold: "6",
                    bold: "7",
                    "extra-bold": "8",
                    extrabold: "8",
                    "ultra-bold": "8",
                    ultrabold: "8",
                    black: "9",
                    heavy: "9",
                    l: "3",
                    r: "4",
                    b: "7"
                };
                var ee = {
                    i: "i",
                    italic: "i",
                    n: "n",
                    normal: "n"
                };
                var te = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;

                function ne (e, t) {
                    this.c = e;
                    this.a = t;
                }
                var re = {
                    Arimo: true,
                    Cousine: true,
                    Tinos: true
                };

                function ie (e, t) {
                    this.c = e;
                    this.a = t;
                }

                function le (e, t) {
                    this.c = e;
                    this.f = t;
                    this.a = [];
                }
                ne.prototype.load = function (e) {
                    var t = new m();
                    var n = this.c;
                    var r = new V(this.a.api, this.a.text);
                    var i = this.a.families;
                    ! function (e, t) {
                        for (var n = t.length, r = 0; r < n; r++) {
                            var i = t[r].split(":");
                            if (i.length == 3) {
                                e.f.push(i.pop());
                            }
                            var l = "";
                            if (i.length == 2 && i[1] != "") {
                                l = ":";
                            }
                            e.a.push(i.join(l));
                        }
                    }(r, i);
                    var l = new q(i);
                    ! function (e) {
                        for (var t = e.f.length, n = 0; n < t; n++) {
                            var r = e.f[n].split(":");
                            var i = r[0].replace(/\+/g, " ");
                            var l = ["n4"];
                            if (r.length >= 2) {
                                var o;
                                o = [];
                                if (s = r[1]) {
                                    for (var s, a = (s = s.split(",")).length, u = 0; u < a; u++) {
                                        var d;
                                        if ((d = s[u]).match(/^[\w-]+$/)) {
                                            if ((c = te.exec(d.toLowerCase())) == null) {
                                                d = "";
                                            } else {
                                                d = (d = c[2]) == null || d == "" ? "n" : ee[d];
                                                if ((c = c[1]) == null || c == "") {
                                                    c = "4";
                                                } else {
                                                    var c = Z[c] || (isNaN(c) ? "4" : c.substr(0, 1));
                                                }
                                                d = [d, c].join("");
                                            }
                                        } else {
                                            d = "";
                                        }
                                        if (d) {
                                            o.push(d);
                                        }
                                    }
                                }
                                if (o.length > 0) {
                                    l = o;
                                }
                                if (r.length == 3) {
                                    o = [];
                                    if ((r = (r = r[2]) ? r.split(",") : o).length > 0 && (r = Q[r[0]])) {
                                        e.c[i] = r;
                                    }
                                }
                            }
                            if (!e.c[i]) {
                                if (r = Q[i]) {
                                    e.c[i] = r;
                                }
                            }
                            r = 0;
                            for (; r < l.length; r += 1) {
                                e.a.push(new N(i, l[r]));
                            }
                        }
                    }(l);
                    _(n, function (e) {
                        if (e.a.length == 0) {
                            throw Error("No fonts to load!");
                        }
                        if (e.c.indexOf("kit=") != -1) {
                            return e.c;
                        }
                        for (var t = e.a.length, n = [], r = 0; r < t; r++) {
                            n.push(e.a[r].replace(/ /g, "+"));
                        }
                        t = e.c + "?family=" + n.join("%7C");
                        if (e.f.length > 0) {
                            t += "&subset=" + e.f.join(",");
                        }
                        if (e.g.length > 0) {
                            t += "&text=" + encodeURIComponent(e.g);
                        }
                        return t;
                    }(r), y(t));
                    v(t, function () {
                        e(l.a, l.c, re);
                    });
                };
                ie.prototype.load = function (e) {
                    var t = this.a.id;
                    var n = this.c.o;
                    if (t) {
                        p(this.c, (this.a.api || "https://use.typekit.net") + "/" + t + ".js", function (t) {
                            if (t) {
                                e([]);
                            } else if (n.Typekit && n.Typekit.config && n.Typekit.config.fn) {
                                t = n.Typekit.config.fn;
                                for (var r = [], i = 0; i < t.length; i += 2) {
                                    for (var l = t[i], o = t[i + 1], s = 0; s < o.length; s++) {
                                        r.push(new N(l, o[s]));
                                    }
                                }
                                try {
                                    n.Typekit.load({
                                        events: false,
                                        classes: false,
                                        async: true
                                    });
                                } catch (e) {}
                                e(r);
                            }
                        }, 2000);
                    } else {
                        e([]);
                    }
                };
                le.prototype.load = function (e) {
                    var t = this.f.id;
                    var n = this.c.o;
                    var r = this;
                    if (t) {
                        if (!n.__webfontfontdeckmodule__) {
                            n.__webfontfontdeckmodule__ = {};
                        }
                        n.__webfontfontdeckmodule__[t] = function (t, n) {
                            for (var i = 0, l = n.fonts.length; i < l; ++i) {
                                var o = n.fonts[i];
                                r.a.push(new N(o.name, w("font-weight:" + o.weight + ";font-style:" + o.style)));
                            }
                            e(r.a);
                        };
                        p(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + function (e) {
                            return e.o.location.hostname || e.a.location.hostname;
                        }(this.c) + "/" + t + ".js", function (t) {
                            if (t) {
                                e([]);
                            }
                        });
                    } else {
                        e([]);
                    }
                };
                var oe = new G(window);
                oe.a.c.custom = function (e, t) {
                    return new J(t, e);
                };
                oe.a.c.fontdeck = function (e, t) {
                    return new le(t, e);
                };
                oe.a.c.monotype = function (e, t) {
                    return new U(t, e);
                };
                oe.a.c.typekit = function (e, t) {
                    return new ie(t, e);
                };
                oe.a.c.google = function (e, t) {
                    return new ne(t, e);
                };
                var se = {
                    load: o(oe.load, oe)
                };
                if (!((r = function () {
                        return se;
                    }.call(t, n, t, e)) === undefined)) {
                    e.exports = r;
                }
            }();
        }
    }
]);
//# sourceMappingURL=https://web.whatsapp.com/vendors~main~.77fd43f3d675e162dcdf.js.map